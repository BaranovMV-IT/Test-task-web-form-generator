<template>
  <form class="form">
    <div class="form__title">Ответьте на вопросы</div>
    <slot name="note" />
    <div class="form__field">
      <div class="form__field__title">ФИО</div>
      <div class="form__field__item">
        <input class="form__field__item__input  field__item">
        <select class="form__field__item__select  field__item">
          <option>Мужчина</option>
        </select>
        <div class="form__field__item__checkbox">
          <label class="form__field__item__checkbox__label">
            <input type="checkbox">
            Машина
          </label>
        </div>
        <textarea class="form__field__item__textarea  field__item"></textarea>
      </div>
    </div>
    <div class="form__controls">
      <button 
        type="reset"
        class="form__controls__button"
      >
        Сброс
      </button>
      <button 
        type="submit"
        class="form__controls__button"
      >
        Отправить
      </button>
    </div>
  </form>
</template>

<script setup lang="ts">

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
