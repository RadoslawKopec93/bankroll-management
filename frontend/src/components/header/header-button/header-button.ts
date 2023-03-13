import {computed, defineComponent} from "vue";
interface resultData {
    date: string,
    moneyResult: number,
}

export default defineComponent({
    name: 'HeaderButton',
    props: {
        qwertyTest: String,
        isUserMenu: Boolean,
        label: String,
    },
    setup(props){
        const test = computed( () => {
            console.log(props.qwertyTest);
            return "testComputer"
        });
        const test1 = 100
        const resultBoxData = computed( () => {
            let data: resultData = {
                date: "aa",
                moneyResult: test1,
            };
        });
        const headerButtonStylesClass = computed( () =>
             props.isUserMenu?
                 "headerMenuButton__basicButton" :
                 "headerMenuButton__userMenu"
        );
        return {
            resultBoxData,
            test,
            headerButtonStylesClass
        }
    }
})