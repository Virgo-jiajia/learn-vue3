import { defineStore } from 'pinia'
// defineStore id setup函数 Option对象
export const useCounterStore = defineStore('count', {
  state: () => ({ count: 0 }),
  getters: {
    // computed
    double: (state) => state.count * 2,
  },
  actions: {
    //methods
    increment() {
      this.count++
    },
  },
})

// setup store 灵活、组合式函数
export const useNumStore = defineStore('num', () => {
  const num = ref(0) // state属性
  const doubleNum = computed(() => num.value * 2) // getters
  function increment() {
    // actions
    num.value++
  }
  // 必须返回state所有属性
  return { num, doubleNum, increment }
})

// const useStore = defineStore('storeId',{
//   state:()=>{
//     return {
//       userList:[] as UserInfo[],
//       user: null as UserInfo | null
//     }
//   }
// })
// interface UserInfo {
//   name:string,
//   age:number
// }
