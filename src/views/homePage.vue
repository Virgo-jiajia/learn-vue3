<script>
// import http from '../api/api';
import { onMounted, ref } from 'vue';
import { useRouter } from 'vue-router';
export default {
  name: 'homePage',
  setup() {
    const el = ref(null);
    const router = useRouter();

    onMounted(() => {
      el.value.innerHTML = '改内容';
    });
    function jump() {
      router.push({ path: '/piniaTest' });
    }
    return { el, jump };
  },
};
</script>

<template>
  <div>
    <div ref="el">div元素</div>
    <el-button @click="jump">跳转页面</el-button>
  </div>
</template>

<style scoped></style>
<!-- 
  1、ref 就是将 reactive 包装一层 赋值value
  2、基本数据类型选ref，引用数据类型用reactive

  toRef 将对象中的某个值转化为响应式数据
  ref相当于拷贝，对原始值不产生影响，更新视图
  toRef 对原数据的引用，会影响原数据，视图层不变

  reactive 深层的，每一层都封装proxy
  shallowReactive 浅层的，性能好 只有第一层封装proxy 响应式处理

  ref shallowRef
  ref包裹的对象有proxy
  shallowRef Object .value变，都变  深层数据改变，视图不变 triggerRef改视图

  toRaw 获得原始数据
  reactive包裹的对象state,一改都该(引用关系) 原数据变化，数据改，视图不更新
  修改原数据，但视图不更新 性能优化
  ref .value

  markRaw 将原始数据标记为非响应式，即使ref包裹也不响应

  数据变、视图变；数据变、视图不变；数据变，都变；数据变，只有第一层/.value才响应

  provide inject 子组件以及子孙组件 provide('属性名'，值) inject('名')

  watch watchEffect watch( source, cb, [options] )
  1、不需要手动传入依赖
  2、每次初始化时会执行一次回调函数来自动获取依赖
  3、无法获取到原值，只能得到变化后的值

 -->