<template>
  <main class="LoginPage">
    <section class="LoginPage__modal">
      <MyForm label-height="auto" class="LoginPage__form">
        <MyFormItem prop="name" label="Username" :margin-bottom="0" class="LoginPage__form--formItem"></MyFormItem>
        <MyInput v-model="userName"/>
        <MyFormItem prop="password" label="Password" :margin-bottom="0" class="LoginPage__form--formItem"></MyFormItem>
        <MyInput v-model="password"/>
        <MyButton @click="test" class="LoginPage__form--button">Login</MyButton>
      </MyForm>
    </section>
  </main>
</template>
<script setup lang="ts">
import { MyButton, MyForm, MyFormItem, MyInput } from '@/core/components/element-plus-proxy'
import {ref} from "vue";
import {useLoginPageStore} from "@/components/LoginPage/store/LoginPageStore";
import { useRouter } from "vue-router";

const userName = ref('');
const password = ref('');
const router = useRouter();
const store = useLoginPageStore();

const test = () => {
  fetch("/api/test1",{  method: 'GET',})
      .then((response) => response.text())
      .then((data) => {
      console.log(data);
      });
  console.log("test1F");
}

async function login() {
  const response = await store.login(userName.value, password.value);
  if(response.token){
    router.push('/');
  }
}
</script>
<style scoped lang="scss">
.LoginPage {
   display: flex;
   justify-content: center;
   align-items: center;
   background-image: url("@/core/components/css/images/KubusCringMaker.jpg");
   height: 100%;
   width: 100%;
   background-size: cover;
   background-position: center;
   position: absolute;

  &__modal{
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: white;
    width: 400px;
    height: 250px;
    border-radius: $sizeM;
  }
  &__form{
    width: 60%;

    &--formItem{
      margin-bottom: 0;
    }
    &--button{
      margin-top: 30px;
      text-align: center;
      color: white;
      text-transform: uppercase;
      position: relative;
      overflow: hidden;
      z-index: 1;
      height: 30px;
      &:after {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: red;
        z-index: -2;
      }
      &:before {
        content: '';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 0%;
        height: 100%;
        background-color: darken(red, 15%);
        transition: all .3s;
        z-index: -1;
      }
      &:hover {
        color: #fff;
        &:before {
          width: 100%;
        }
      }
    }
  }

}
</style>