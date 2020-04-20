import Vue from 'vue'
import Router from 'vue-router'
import DomesticOutbreak from '@/pages/domestic_outbreak'
import DomesticOutbreakContainer from '@/pages/domestic_outbreak/domestic_outbreak_container'
import DomesticOutbreakMain from '@/pages/domestic_outbreak/domestic_outbreak_china'
import ForeignEpidemics from '@/pages/foreign_epidemics'
import QueryEpidemicCommunity from '@/pages/query_epidemic_community'
import QueryEpidemicCommunityMain from '@/pages/query_epidemic_community/query_epidemic_community_main'
import Rumor from '@/pages/outbreak'
import RumorList from '@/pages/outbreak/outbreak_list'
import RumorDetail from '@/pages/outbreak/outbreak_detail'
import DomesticOutbreakProvice from '@/pages/domestic_outbreak/domestic_outbreak_provice'
import MaskInfo from '@/pages/mask_information'
import MaskMain from '@/pages/mask_information/mask_main'
import CityVehicles from '@/pages/city_vehicles'
Vue.use(Router)

export default new Router({
  routes: [
    {
      // 国内疫情
      path: '/',
      name: 'COVID-19',
      component: DomesticOutbreak,
      redirect: '/dashboard',
      children: [
        {
          path: '/dashboard',
          name: 'dashboard',
          component: DomesticOutbreakContainer,
          redirect: '/dashboard/china',
          children: [
            {
              path: '/dashboard/china',
              name: 'china',
              component: DomesticOutbreakMain
            },
            {
              path: '/dashboard/province',
              name: 'province',
              component: DomesticOutbreakProvice
            }]
        }]
    },
    {
      // 国外疫情
      path: '/foreign_epidemics',
      name: 'foreign_epidemics',
      component: ForeignEpidemics
    },
    {
      // 疫情小区查询
      path: '/query_epidemic_community',
      name: 'query_epidemic_community',
      component: QueryEpidemicCommunity,
      redirect: '/query_epidemic_community/baidu_map',
      children: [{
        path: '/query_epidemic_community/baidu_map',
        name: 'baidu_map',
        component: QueryEpidemicCommunityMain
      }]
    },
    {
      // 谣言
      path: '/rumor',
      name: 'rumor',
      component: Rumor,
      redirect: '/rumor/list',
      children: [
        {
          // 谣言列表
          path: '/rumor/list',
          name: 'list',
          component: RumorList
        },
        {
          // 谣言详细信息
          path: '/rumor/detail',
          name: 'detail',
          component: RumorDetail
        }
      ]
    },
    {
      path: '/mask',
      name: 'mask',
      component: MaskInfo,
      redirect: '/mask/info',
      children: [
        {
          path: '/mask/info',
          name: 'info',
          component: MaskMain
        }
      ]
    },
    {
      path: '/cityvehicles',
      name: 'cityvehicles',
      component: CityVehicles
    }
  ]
})
