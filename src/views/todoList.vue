<template>
  <div class="list">
    <el-input
      style="width: 240px"
      v-model="inputVal"
      clearable
    ></el-input><el-button @click="handleAdd">增加</el-button>
    <todoItem
      :arrMsg="items"
      @itemDel=handleDel
    ></todoItem>

  </div>
</template>

<script lang="ts" setup>
import todoItem from '../components/todoItem.vue';
import { ref } from 'vue';
const inputVal = ref('');
const items = ref<string[]>(['打', '豆1', '豆2']);
const handleAdd = function () {
  if (inputVal.value) {
    items.value.push(inputVal.value);
  }
  inputVal.value = '';
};
const handleDel = (index) => {
  items.value.splice(index, 1);
};
</script>

<style scoped lang="less">
.list {
  width:300px;
  margin:0 auto;
}
</style>