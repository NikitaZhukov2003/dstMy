<script setup>
import {RouterView, RouterLink  } from "vue-router";

</script>


<template>
  <div class="wrapper">
    <div class="wrapperOver">
      <h1>DST</h1>
    </div>
    <p>Быстрая доставка по Вашему городу</p>
  </div>
 <router-view></router-view>
</template>



<style>
  .wrapper {
    justify-content: center;
    width: 100vw;
    padding: 20px;
    top: 10px;
    border-radius: 50px;
    background: rgb(68,185,207);
    background: radial-gradient(circle, rgba(68,185,207,1) 0%, rgba(148,25,249,1) 100%);
    box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  }

  .wrapperOver {
    margin-left: 20%;
    background: rgb(68,185,207);
    background: radial-gradient(circle, rgba(68,185,207,1) 0%, rgba(148,25,249,1) 100%);
    border-radius: 50px;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.5);
    width: 400px;
  }

  .wrapper h1 {
    font-size: 5em;
    display: flex;
    justify-content: center;
    margin-right: 50%;
    font-weight: bolder;
  }

  .wrapper p {
    margin-left: 20%;
    font-size: 1.5em;
    display: flex;
    font-weight: bolder;
  }

</style>
