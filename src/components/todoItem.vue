<template>
  <ol
    class="item-ol"
    v-if="arrMsg.length !== 0"
  >
    <li
      v-for="(item,index) in arrMsg"
      class="item-li"
      :key="item"
    >
      <p>{{item}}</p>
      <i @click="handleDel(index)">x</i>
    </li>
  </ol>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
const props = defineProps({
  arrMsg: Array,
});
const emit = defineEmits(['item-del']);
const handleDel = (index) => {
  emit('item-del', index);
};
</script>

<style scoped lang="less">
.item-ol{
  padding:10px;
}
.item-li{
  display:flex;
  p{
    flex:1;
  }
  i{
    cursor: pointer;
  }
}
</style>