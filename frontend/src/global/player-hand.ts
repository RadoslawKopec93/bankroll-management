import { CardStructure } from "@/global/card-structure";

export interface PlayerHand  {
    position: string,
    firstCard: CardStructure | undefined,
    secondCard: CardStructure | undefined,
}
