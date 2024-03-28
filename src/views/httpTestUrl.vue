<template>
  <div>
    <el-button @click="clickHandler">点击发送请求</el-button>
  </div>
</template>


<script setup>
import { getCurrentInstance } from 'vue';

// import api from '@/api/index';
const g = getCurrentInstance().appContext.config.globalProperties;
const api = g.$api;
const clickHandler = async () => {
  const res = await api.comments();
  console.log(res, 'res');
};
// async await http.get()
</script>

<style scoped></style>