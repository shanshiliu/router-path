<template>
  <div>
    <h1>注册</h1>
    <p>
        <input type="text" placeholder="用户名" v-model="username" />
    </p>
    <p>
        <input type="password" placeholder="密码" v-model="password" />
    </p>
    <p>
        <input type="password" placeholder="确认密码" v-model="passwordT" />
    </p>
    <p>
        <router-link to="/login">登录</router-link>
    </p>
    <p>
        <button @click="submitRegister">注册</button>
    </p>
    </div>
  
</template>
<script lang="ts" setup>
    import { useTransitionState } from 'vue';
    import { useRouter } from 'vue-router';
    import errorMessage from '../config/errorMessage';

    import {
        useRegister
    } from '../hooks/user';

    const router = useRouter();

    const {
        username,
        password,
        passwordT,
        checkUserInfo,
        comnparePassward,
        submitUserInfo
    } = useRegister();


    async function submitRegister() {
        if (!checkUserInfo(username, 6)) {
            alert('用户名长度不小于6位');
            return;
        }
        if (!checkUserInfo(password, 6)) {
            alert('密码长度不小于6位');
            return;
        }
        if(!comnparePassward()) {
            alert('两次密码不一致');
            return;
        }
        try {
            const { err_code, data } = await submitUserInfo();
            if (err_code) {
                alert(errorMessage[err_code]);
                return
            }
            router.push('/login');
        } catch(e) {
            alert('注册失败');
        }


    }
</script>