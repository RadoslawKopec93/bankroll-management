import { RouteRecordRaw } from 'vue-router'
import MainPageView from '@/components/MainPageView/MainPageView.vue'
import DayResult from '@/components/MainPageView/result-box/DayResult.vue'
import LoginPage from '@/components/LoginPage/LoginPage.vue'
import ResultBox from "@/components/MainPageView/result-box/ResultBox.vue"

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: MainPageView
  },
  {
    path: '/day-result',
    name: 'DayResult',
    component: DayResult
  },
  {
    path: '/login',
    name: 'LoginPage',
    component: LoginPage
  },
  {
    path: '/result-box',
    name: 'ResultBox',
    component: ResultBox
  },
]

export {routes};
