import {computed, defineComponent, onMounted} from "vue";

export default defineComponent ({
    name:"ResultBox",
    props:{
        theTittle: String,
    },
    setup(props){
      const test = () =>{
          console.log(props.theTittle);
      }
        return {
            test
        }
    }
})