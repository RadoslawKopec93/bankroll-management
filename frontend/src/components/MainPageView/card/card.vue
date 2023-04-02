<template>
  <div>
    <div :class="border" v-show="isVisible">
      <span :class="typeColor">{{cardName}}</span>
      <div class="cardComponent__imagePosition">
        <div :class="getImage"></div>
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
    cardName: String,
    isVisible: Boolean,
  },
  data() {
    return {
      color: cardType.spade,
    }
  },
  methods:{
  hideCard(){
     //this.isVisible = false;
  }
  },
  computed:{
    border(){

      /* this.color = "SPADE";*/
      return{
        "cardComponent__borderSpade": this.cardColor === cardType.spade,
        "cardComponent__borderHeart": this.cardColor === cardType.heart,
        "cardComponent__borderClub": this.cardColor === cardType.club,
        "cardComponent__borderDiamond": this.cardColor === cardType.diamond
      }
    },
    typeColor(){
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
  }
});
</script>

<style lang="scss">
.test{
  height: 30px;
  background-color: green;
  border: solid;
}
.cardComponent{
  height: 50px;
  width: 30px;
  border-radius: 20%;
  text-align: center;
  cursor: pointer;
  :hover { transform: scale(1.1); }
  &__borderSpade{
    @extend .cardComponent;
    border: black solid;
  }
  &__borderHeart{
    @extend .cardComponent;
    border: red solid;
  }
  &__borderClub{
    @extend .cardComponent;
    border: green solid;
  }
  &__borderDiamond{
    @extend .cardComponent;
    border: blue solid;
  }

  &__name{
    font-weight: bold;
    &--heart{
      color: red;
    }
    &--spade{
      color: black;
    }
    &--club{
      color: green;
    }
    &--diamond{
      color: blue;
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