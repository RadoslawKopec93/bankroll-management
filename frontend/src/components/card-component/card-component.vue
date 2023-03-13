<template>
<div :class="border">
  <span :class="typeColor">{{cardName}}</span>
  <div class="cardComponent__imagePosition">
  <div :class="getImage">
  </div>
  </div>
</div>
</template>

<script lang=ts>
import {cardType} from "@/global/enums";
import {defineComponent} from "vue";

export default defineComponent({
  name: "CardComponent",
  props:{
    cardColor: String,
    cardName: String
  },
  data() {
    return {
      color: cardType.spade
    }
  },
  computed:{
    border(){
      console.log(this.cardColor === cardType.spade);
      /* this.color = "SPADE";*/
      return{
        "cardComponent__borderSpade": this.cardColor === cardType.spade,
        "cardComponent__borderHeart": this.cardColor === cardType.heart,
        "cardComponent__borderClub": this.cardColor === cardType.club,
        "cardComponent__borderDiamond": this.cardColor === cardType.diamond
      }
    },
    typeColor(){
      console.log(this.getImage);
      console.log("test");
      return{
          "cardComponent__name": true,
          "cardComponent__name--spade": this.cardColor === cardType.spade,
          "cardComponent__name--heart": this.cardColor === cardType.heart,
          "cardComponent__name--club": this.cardColor === cardType.club,
          "cardComponent__name--diamond": this.cardColor === cardType.diamond
      }
    },
    getImage(){
     return{
       "cardComponent__imagePosition--clubImage": this.cardColor === cardType.club,
       "cardComponent__imagePosition--heartImage": this.cardColor === cardType.heart,
       "cardComponent__imagePosition--spadeImage": this.cardColor === cardType.spade,
       "cardComponent__imagePosition--diamondImage": this.cardColor === cardType.diamond
     }
    }
  },
  methods:{



  }
});
</script>

<style lang="scss">
.cardComponent{
  height: 50px;
  width: 30px;
  border-radius: 20%;
  text-align: center;
  &__borderSpade{
    @extend .cardComponent;
    border: $spadeColor solid;
  }
  &__borderHeart{
    @extend .cardComponent;
    border: $heartColor solid;
  }
  &__borderClub{
    @extend .cardComponent;
    border: $clubColor solid;
  }
  &__borderDiamond{
    @extend .cardComponent;
    border: $diamondColor solid;
  }
  &__borderSpade{
  }

  &__name{
    font-weight: bold;
    &--heart{
      color: $heartColor;
    }
    &--spade{
      color: $spadeColor;
    }
    &--club{
      color: $clubColor;
    }
    &--diamond{
      color: $diamondColor;
    }
  }

&__imagePosition {
  height: 30px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;

  &--diamondImage {
    height: $sizeM;
    width: $sizeM;
    background-image: url($blueDiamondCard);
  }

  &--clubImage {
    height: $sizeM;
    width: $sizeM;
    background-image: url($clubCard);
  }

  &--spadeImage {
    height: $sizeM;
    width: $sizeM;
    background-image: url($spadeCard);
  }

  &--heartImage {
    height: $sizeM;
    width: $sizeM;
    background-image: url($heartCard);
  }
 }
}

</style>