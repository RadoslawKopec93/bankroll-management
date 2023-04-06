import {defineStore} from "pinia";
import {Ref, ref} from "vue";

export const useCardComponentStore = defineStore("card",()=>{
    const deal = ref([{id:'0',name:'B',color:'CLUB',list:1, mainId: "0"}])
    return {deal};
});