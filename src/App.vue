<template>
  <router-view></router-view>
</template>

<script>
import { onMounted } from 'vue';
// import { useStore } from 'vuex';
export default {
  name: 'App',
  setup() {
    // const store = useStore();
    onMounted(() => {
      // if(localStorage.getItem('admin')){
      //   store.dispatch("onFetchUserLogin");
      // }
    })
  }
}
</script>