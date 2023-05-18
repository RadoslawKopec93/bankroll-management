import {defineStore} from "pinia";
import {Ref, ref} from "vue";
import {positions} from "@/global/enums";

export const useResultReportStore = defineStore("card",()=> {
    const lastBetOrRaise = ref();
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
    const smallBlind = ref();
    const bigBlind = ref();
    const underTheGun = ref();
    const underTheGun1 = ref();
    const underTheGun2 = ref();
    const middlePosition = ref();
    const lowJack = ref();
    const highJack = ref();
    const cutOff = ref();
    const button = ref();
    const positionsArray = ref([
        smallBlind,
        bigBlind,
        underTheGun,
        underTheGun1,
        underTheGun2,
        middlePosition,
        lowJack,
        highJack,
        cutOff,
        button])
  return {
      positionsMap,
      smallBlind,
      bigBlind,
      underTheGun,
      underTheGun1,
      underTheGun2,
      middlePosition,
      lowJack,
      highJack,
      cutOff,
      button,
      positionsArray,
      lastBetOrRaise
  }
});