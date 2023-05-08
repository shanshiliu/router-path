<template>
    <div>
        <h1>登录</h1>
        <p>
            <input 
                type="text"
                placeholder="用户名"
                v-model="username"
            />
        </p>
        <p>
            <input 
                type="password"
                placeholder="密码"
                v-model="password"
            />
        </p>
        <p>
            <router-link to="/register"></router-link>
        </p>
        <p>
            <button
                @click="submitLogin"
            >
                登录
            </button>
        </p>
    </div>
</template>
<script lang="ts" setup>
    import { useLogin, useStorage } from '../hooks/user';
    import errorMessage from '../config/errorMessage';
    import { useRouter } from 'vue-router';
    const {
        username,
        password,
        checkUserInfo,
        submitUserInfo
    } = useLogin();

    const {
        setUserStorage
    } = useStorage();

    const router = useRouter();
 
    async function submitLogin() {
        if (!checkUserInfo(username, 6)) {
            alert('用户名长度不小于6位');
            return;
        }
        if (!checkUserInfo(username, 6)) {
            alert('密码长度不小于6位');
            return;
        }

        try {
            const {err_code, data } = await submitUserInfo();
            if (err_code) {
                alert(errorMessage[err_code]);
                return;
            }
            setUserStorage(data.user_token, data.level);
            // console.log(localStorage, 99)
            router.push('/');
        } catch(e) {
            console.log(e);
            alert('登录失败');
        }
    }
</script>