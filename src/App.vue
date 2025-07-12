<template>
  <header>
    <div class="header__list">
      <button class="header__list__button">form1</button>
    </div>
  </header>
  <main>
    <router-view/>
  </main>
</template>

<script setup lang="ts">

</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  min-height: 100vh;
}

#app {
  min-height: 100vh;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

header {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 150px;
}

.header__list {
  min-width: 350px;
  max-width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 10px;
  border: 1px solid grey;
  border-radius: 10px;
  &__button {
    border: none;
    width: 125px;
    padding: 15px 0px;
    font-size: 18px;
    background-color: rgb(35, 169, 242);
    border-radius: 10px;
    margin: 10px;
    cursor: pointer;
    transition: all ease-in-out 0.25s;
    &:hover {
      background-color: rgb(0, 121, 186);
    }
  }
}

main {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 50px;
}
</style>
