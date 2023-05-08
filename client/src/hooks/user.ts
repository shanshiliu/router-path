import { loginService, registerService } from "@/services/User";
import { Ref, reactive, toRefs } from "vue";
import { Storage } from "@/libs/utils";
function checkUserInfo (field: Ref, num: number): boolean {
    return field.value.length >= num;
}

export function useLogin() {
    const state = reactive({
        username: '',
        password: ''
    });

    const submitUserInfo = async () => {
        return await loginService({
            username: state.username,
            password: state.password
        })
    }

    return {
        ...toRefs(state),
        checkUserInfo,
        submitUserInfo
    }
}

export function useRegister() {
    const state = reactive({
        username: '',
        password: '',
        passwordT: ''
    });

    const comnparePassward = (): boolean => {
        return state.password === state.passwordT
    }

    const submitUserInfo = async () => {
        return await registerService({
            username: state.username,
            password: state.password
        })
    }


    return {
        ...toRefs(state),
        submitUserInfo,
        comnparePassward,
        checkUserInfo
    }
}

export function useStorage() {
    const setUserStorage = (userToken: string, level: string) => {
        Storage.set('user_token', userToken);
        Storage.set('level', level);
    }

    const removeUserStorage = () => {
        Storage.remove('user_token');
        Storage.remove('level');
    }

    return {
        setUserStorage,
        removeUserStorage
    }
}