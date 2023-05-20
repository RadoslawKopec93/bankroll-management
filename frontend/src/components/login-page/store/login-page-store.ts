import {defineStore} from "pinia";
import {ref} from "vue";
import { useRouter } from "vue-router";

export const useLoginPageStore = defineStore("login",()=>{
/*
    const token = ref('');
    const router = useRouter();

    const setToken = (tokenValue: string) => {
        token.value = tokenValue;
    }

    async function login (username: string, password: string) {
        const response = await fetch("/api/test", {
            method: 'POST',
            body: JSON.stringify({
                nickname: username,
                password: password
            }),
            headers: {
                'Accept': 'application/json',
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
        return response.json();
           /!* .then((response) => response.json())
            .then((json) => {
                if(json.token){
                    router.push('/');
                }
            });*!/
    }
    return {token,setToken,login}*/
});