import { RouteRecordRaw } from 'vue-router'
import MainPageView from '@/components/main-page-view/MainPageView.vue'
import DayResult from '@/components/main-page-view/result-box-body/DayResult.vue'
import LoginPage from '@/components/login-page/LoginPage.vue'
import ResultBox from "@/components/main-page-view/result-box-body/ResultBox.vue"
import ToDoApp from "@/components/ToDoApp/ToDoPageView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: ToDoApp
    //component: MainPageView
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
