import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import { positions } from "@/global/enums";
type cardType = {id: string ,name: string,color:string,list:number, mainId: string}
export interface TableRowAction {
    street: string,
    position: string,
    action: string,
    value: any,
    pot: number
}

export const useResultReportStore = defineStore("card",()=> {
    const lastBetOrRaise = ref();
    const board = ref<cardType[]>();
    const comment = ref();
    const handIsUsed = false;

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
    const addBoardCards = (boardCards: cardType[], newComment: string): void => {
        board.value = boardCards
        comment.value = newComment;
        console.log(comment.value);
    }
  return {
      handIsUsed,
      positionsMap,
      lastBetOrRaise,
      addBoardCards
  }
});