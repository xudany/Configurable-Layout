import Vue from 'vue'
import Router from 'vue-router'
import {routeRegister} from './routerRegiester';
import axios from 'axios';
import configData from "../../static/layoutConfig.js"

// let infoUrl = '../../../static/routerList.json';

let routes = [];

Vue.use(Router);


async function setRoute() {

  // let test;

  // axios.get('static/routerList.json')
  //   .then((res) => {
  //
  //   test = res.data.rootRouter
  //
  //   }).catch((err) => {
  //   console.log(err)
  // });


  let children = await routeRegister.init(infoUrl);

  let rootRouter = configData.layoutConfig.rootRouter.url
  routes = [
    {
      path: '/',
      name: 'frame',
      redirect: '/home',
      component: () => import('@/' + rootRouter + '.vue'),
    },
    {
      path: '/home',
      name: 'home',
      component: () => import('@/' + rootRouter + '.vue'),
      children: [
        ...children
      ]
    },
  ];

  const router = new Router({
    routes
  });

  return router;
}

export default setRoute;
