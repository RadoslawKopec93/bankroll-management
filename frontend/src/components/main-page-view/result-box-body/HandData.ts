import { TableRowAction } from "@/components/main-page-view/store/result-box-store"
import { CardStructure } from "@/global/card-structure";
import { PlayerHand } from "@/global/player-hand";
import {positions, streets} from "@/global/enums";


export class HandData {

    public playersHands: PlayerHand[] = [];
    public rowData?: TableRowAction[];
    public moneyHandResult: number = 0;
    public boardCards: CardStructure[] = [];
    //public playersCards?: Map<string, CardStructure>;

    public constructor() {
        const positionsArray = [positions.sb, positions.bb, positions.utg, positions.utg1,
            positions.utg2,positions.mp1,positions.lj,positions.hj,positions.co,positions.bb]
        positionsArray.forEach( p => {
            this.playersHands.push({position: p, firstCard: undefined, secondCard: undefined})
        })
    }
}