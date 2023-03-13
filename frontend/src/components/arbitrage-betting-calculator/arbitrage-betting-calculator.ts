import { defineComponent } from "vue";
import ArbitrageHeader from "@/components/arbitrage-betting-calculator/arbitrage-header/arbitrage-header.vue";
import HeaderButton from "@/components/header/header-button/header-button";

export default defineComponent ({
        name:"ArbitrageBettingCalculator",
        components: {
            HeaderButton,
            ArbitrageHeader
        },
        mounted() {

        },
        setup() {

        },
        props: {
            dataTest: String
        },
    }
);
