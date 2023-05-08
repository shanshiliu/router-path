<template>
  <router-view/>
</template>
<script lang="ts" setup>
  import { useRouter } from 'vue-router';
  import { Storage } from './libs/utils';
  import { checkLoginService } from './services/User';
  import { useStorage } from './hooks/user';

  const router = useRouter();
  const {
    removeUserStorage
  } = useStorage();

  router.beforeEach(async (to, from) => {
    const userToken = Storage.get('user_token');
    const isToLogin = to.name != 'login' && to.name != 'register';
    if (userToken) {
      console.log(from.name)
      const { err_code } = await checkLoginService();
      if (err_code && isToLogin) {
        removeUserStorage();
        return {
          name: 'login'
        }
      } else if (to.name !== 'home') {
        return {
          name: 'home'
        }
      }
    } else {
      if (isToLogin) {
        return {
          name: 'login'
        }
      }
    }
  });
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
