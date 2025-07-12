<template>
  <FormComponent :formData="selectedForm" :selectedValues="selectedValues">
    <template v-slot:note><span style="margin-bottom: 15px;">Проверяйте корректность данных</span></template>
  </FormComponent>
</template>

<script setup lang="ts">
import { onBeforeMount } from 'vue';
import { useStore } from 'vuex';
import { useRouter, useRoute } from 'vue-router';
import { formDataType, formsValueType, ValueType } from "@/store/index";
import FormComponent from '@/components/FormComponent.vue';

const store = useStore();
const router = useRouter();
const route = useRoute();

let availableForms: formDataType[];
let selectedForm: formDataType | undefined;
let readyFormsValues: formsValueType[];
let selectedValues: ValueType;

const findSelectedForm = (formName: string | string[]) => {
  if(availableForms){
    for(let item of availableForms){
      if(item.name == formName){
        return item
      }
    }
  }
  router.push("/");
}

const findSelectedValues = (formName: string | string[]) => {
  if(readyFormsValues){
    for(let item of readyFormsValues){
      if(item.name == formName){
        return item.values
      }
    }
  }
  return {}
}

onBeforeMount(async () => {
  availableForms = store.state.availableForms;
  readyFormsValues = store.state.readyFormsValues;
  selectedForm = findSelectedForm(route.params.id);
  selectedValues = findSelectedValues(route.params.id);
});
</script>