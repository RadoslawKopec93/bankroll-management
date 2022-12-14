import {Vue} from "vue-class-component";
import Chart from "chart.js/auto";
import {computed, defineComponent, ref} from "vue";


export default defineComponent ({
        mounted() {
            this.updateStockPriceHistoryChart(this.totalResult)
        },
        setup() {
            let labels = [10.11,20.11,21.11,23.11, 24.11];
            let results = [-100,300,28,-298,100];
            const updateStockPriceHistoryChart = (totalResult: string) => {
                    const ctx = document.getElementById('resultChart') as HTMLCanvasElement;
                    let data = {
                        labels: labels,
                        datasets: [{
                            label: totalResult,
                            data: results,
                            fill: true,
                            borderColor: 'black',
                            color: 'black',
                            segment: {
                                borderColor: (ctx) => {
                                    let val = ctx.p0.parsed.y;
                                    //return val < 0 ? 'white' : '#710627'
                                    return 'black'
                                }
                                },
                            spanGaps: true,
                            tension: 0,
                            options: {
                                responsive: false,
                                maintainAspectRatio: true,
                            }
                        }]
                    }
                    new Chart(ctx, {
                        type: 'line',
                        data: data,
                    })
            }

            const nameList = () => {
                let test1: string = "aaaa";
                return test1;
            }
            const totalResult = computed(() => {
                let sum = 0;
                results.forEach((result) => {
                   sum+=result;
                });

                return sum.toString();
            });
            return {
                totalResult,
                nameList,
                updateStockPriceHistoryChart,
            }
        },
        props: {
            dataTest: String
        },
    }
);

    /*setup() {
        let updateStockPriceHistoryChart = () => {
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
        return {
            updateStockPriceHistoryChart,
        }
    }
*/


/*
* mounted(){
    this.updateStockPriceHistoryChart('test')
  },
  setup() {
    let updateStockPriceHistoryChart = (id: string) => {
      const ctx = document.getElementById('myChart') as HTMLCanvasElement;

      const labels = [id, 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'];

      const data = {
        labels: labels,
        datasets: [{
          label: 'Stock Market Price',
          data: [10,2,3,4,5,6],
          fill: false,
          borderColor: 'rgb(75,192,192)',
          tension:0,
          options: {
            responsive: true,
            maintainAspectRatio: false,
          }
        }]
      }
      myChart = new Chart(ctx, {
        type: 'line',
        data: data,
      })
    }
    const updateData = () => {
      console.log("updateData");
    }
    return {
      updateStockPriceHistoryChart,
      updateData,
    }
  }
})
* */
