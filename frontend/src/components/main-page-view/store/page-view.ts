import {defineStore} from "pinia";
import {SessionType} from "@/components/main-page-view/domain/session-type";
import {onMounted, ref} from "vue";


export const usePageViewStore = defineStore( "pageView", () => {
    const sessionResult = ref<SessionType>({} as SessionType)

    onMounted( () => {
       /* sessionResult.value = {
            buyin: 0,
            cashout: number,
            startTime: string,
            endTime: string,
            blind: number,
            tableSize: number,
            pokerType: string,
            date: string,
        }*/
    })
    return {
        sessionResult
    }
});