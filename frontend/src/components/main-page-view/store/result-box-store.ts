import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import { positions } from "@/global/enums";
type cardType = {id: string ,name: string,color:string,list:number, mainId: string}
export const useResultReportStore = defineStore("card",()=> {
    const lastBetOrRaise = ref();
    const board = ref<cardType[]>();
    const positionsMap = ref(new Map<string,boolean>([
        [positions.sb,true],
        [positions.bb,true],
        [positions.utg, false],
        [positions.utg1, false],
        [positions.utg2, false],
        [positions.mp1, false],
        [positions.lj, false],
        [positions.hj, false],
        [positions.co, false],
        [positions.btn,false]]
    ))
    const addBoardCards = (boardCards: cardType[]): void => {
        board.value = boardCards
    }
  return {
      positionsMap,
      lastBetOrRaise
  }
});