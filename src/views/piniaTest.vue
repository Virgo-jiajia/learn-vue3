<template>
  <div>使用pinia</div>
</template>

<script setup>
import { useCounterStore } from '@/store/user';
import { storeToRefs } from 'pinia';
const store = useCounterStore(); // store是reactive包装的对象
const { count } = storeToRefs(store);
console.log(count.value, '1');
</script>

<style scoped></style>