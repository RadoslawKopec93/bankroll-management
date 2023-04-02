import {defineStore} from "pinia";
import {ref } from "vue";

export const useCardComponentStore = defineStore("card",()=>{
    const name = ref('');
    const color = ref('');
});