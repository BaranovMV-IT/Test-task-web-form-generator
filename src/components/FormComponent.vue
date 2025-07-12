<template>
  <form 
    :name="formData?.name" 
    class="form"
  >
    <div class="form__title">{{ formData?.title }}</div>
    <slot name="note" />
    <div 
      v-for="item in formData?.fields"
      :key="item.name"
      class="form__field"
    >
      <slot :name="item.name" />
      <div class="form__field__title">{{ item.title }}</div>
      <div class="form__field__item">
        <input 
          v-model="formValuesData[item.name]"
          :name="item.name"
          :id="item.name"
          v-if="item.type == 'input'"
          class="form__field__item__input  field__item"
        >
        <select 
          v-model="formValuesData[item.name]"
          :name="item.name"
          :id="item.name"
          v-if="item.type == 'select'"
          class="form__field__item__select  field__item"
        >
          <option 
            v-for="optn in item.options"
            :value="optn.value"
          >
            {{ optn.title }}
          </option>
        </select>
        <div 
          v-if="item.type == 'checkbox'"
          class="form__field__item__checkbox"
        >
          <label
            v-for="lbl in item.labels"
            class="form__field__item__checkbox__label"
          >
            <input 
              type="checkbox" 
              v-model="formValuesData[item.name]"
              :name="item.name + '-' + lbl.name"
              :value="lbl.name"
              :id="item.name"
            >
            {{ lbl.title }}
          </label>
        </div>
        <textarea 
          v-model="formValuesData[item.name]"
          :name="item.name"
          :id="item.name"
          v-if="item.type == 'textarea'"
          class="form__field__item__textarea  field__item"
        ></textarea>
      </div>
    </div>
    <div class="form__controls">
      <button 
        type="reset"
        @click.prevent="formReset()"
        class="form__controls__button"
      >
        Сброс
      </button>
      <button 
        type="submit"
        @click.prevent="formSubmit()"
        class="form__controls__button"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">
import { defineProps, PropType, ref, onBeforeMount, onMounted } from 'vue';
import { formDataType, ValueType } from "@/store/index";

const props = defineProps({
  formData: {
    type: Object as PropType<formDataType | undefined>,
    required: true
  },
  selectedValues: Object as PropType<ValueType | object>
});

let formValuesData = ref<ValueType | object | any>({});

const setFormValuesData = () => {
  if(props.formData){
    let obj: ValueType = {};
    for(let field of props.formData.fields){
      if(field.type != "checkbox"){
        obj[field.name] = "";
      } else {
        obj[field.name] = [];
      }
    }
    if(props.selectedValues){
      obj = {...obj, ...props.selectedValues};
    }
    return obj
  }
}

const setFieldsProperties = () => {
  if(props.formData){
    for(let field of props.formData.fields){
      if(field.props){
        const elem: any = document.getElementById(field.name);
        if(elem){
          for(let prop in field.props){
            elem[prop] = field.props[prop];
          }
        }
      }
    }
  }
}

const formReset = () => {
  if(formValuesData.value){
    for(let key in formValuesData.value){
      if(formValuesData.value[key].constructor.name != "Array"){
        formValuesData.value[key] = "";
      } else {
        formValuesData.value[key] = [];
      }
    }
  }
}

const formSubmit = () => {
  let pr = false;
  for(let key in formValuesData.value){
    if(formValuesData.value[key] == "" || formValuesData.value[key].length == 0){
      pr = true;
      break;
    }
  }
  if(!pr){
    const req = JSON.stringify(formValuesData.value);
    alert(req);
  } else {
    alert("Заполнены не все поля!");
  }
}

onBeforeMount(() => {
  if(props.selectedValues){
    formValuesData.value = setFormValuesData();
  }
});
onMounted(() => {
  setFieldsProperties();
});
</script>

<style lang="scss">
.form {
  width: fit-content;
  max-width: 350px;
  height: fit-content;
  max-height: 500px;
  display: flex;
  flex-direction: column;
  padding: 35px;
  border: 1px solid grey;
  border-radius: 10px;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &__title {
    font-size: 30px;
    margin-bottom: 25px;
  }
  &__field {
    &:not(:last-child){
      margin-bottom: 15px;
    }
    &__title {
      color: rgb(92, 99, 112);
      margin-bottom: 5px;
    }
    &__item {
      &__input {
        width: 100%;
        height: 50px;
        padding: 0px 15px;
        border: 1px solid grey;
      }
      &__select {
        height: 35px;
        padding: 0px 10px;
        cursor: pointer;
      }
      &__checkbox {
        display: flex;
        flex-direction: column;
        font-size: 18px;
        &__label {
          width: fit-content;
          cursor: pointer;
        }
      }
      &__textarea {
        width: 100%;
        padding: 5px 10px;
      }
    }
  }
  &__controls {
    display: flex;
    justify-content: flex-end;
    &__button {
      border: none;
      width: 100px;
      padding: 10px 0px;
      font-size: 16px;
      background-color: rgb(35, 169, 242);
      border-radius: 10px;
      margin-left: 10px;
      cursor: pointer;
      transition: all ease-in-out 0.25s;
      &:hover {
        background-color: rgb(0, 121, 186);
      }
    }
  }
}

.field__item {
  outline: none;
  font-size: 18px;
  border-radius: 12px;
  transition: all ease-in-out 0.25s;
  &:focus {
    border: 1px solid rgb(35, 169, 242);;
  }
}
</style>
