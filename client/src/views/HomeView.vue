<template>
    <div>
        <h1>home</h1>
        <a href="javascript:void(0);" @click="logout">退出登录</a>
    </div>
</template>
<script lang="ts" setup>
    import { useRouter } from 'vue-router';
    import {
        useStorage
    } from '../hooks/user';

    const {
        removeUserStorage
    } = useStorage();
    const router = useRouter();

    function logout() {
        removeUserStorage();
        router.push('/login');
    }
</script>