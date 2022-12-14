import { Vue } from "vue-class-component";
import Chart from "chart.js/auto";

export default class HelloWorld extends Vue{
 mounted()
 {
  console.log("test");
  const ctx = document.getElementById('myChart') as HTMLCanvasElement;
  const myChar = new Chart(ctx, {
   type: 'bar',
   data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
     label: '# of Votes',
     data: [12, 19, 3, 5, 2, 3],
     borderWidth: 1
    }]
   },
   options: {
    scales: {
     y: {
      beginAtZero: true
     }
    }
   }
  });
 }
setup() {
 const setColor = () => {
  return

 }}

 }