/****
 * 该模块用于批量注册路由
 * */

import axios from "axios"
// import path from "path"
import configData from '../ConfigData/index'

export const routeRegister = {}


/**
 * 初始化加载器
 * @param baseUrl
 * @returns {Promise<*>}
 */
routeRegister.init = async function (baseUrl) {

  let routeArr = configData.layoutConfig.routerList;

  // await loadJson(path.resolve(__dirname, 'static/routerList.json')).then((res) => {
  //
  //   routeArr = res.data.routerList;
  //
  // }).catch((err) => {
  //
  //   console.log(err)
  //
  // });

  routeArr = await setRoute(routeArr);

  return routeArr;
};


/**
 * 加载json数据
 * @param url
 * @returns {Promise<any>}
 */
function loadJson(url) {
  return new Promise((resolve, reject) => {
    axios.get(url).then((res) => {
      resolve(res);
    }).catch((err) => {
      reject(err);
    })
  });
}


/**
 * 返回路由数组
 * @param routeArr
 * @returns {Promise<Array>}
 */
async function setRoute(routeArr) {
  //将所有的vue文件，一次性引入
  let routePath = [];

  for (let item of routeArr) {
    if (item.url === undefined) {
      continue;
    }

    switch (item.type) {
      case 'widget':
        routePath.push({
          path: item.name,
          component: () => import( item.url + '.vue')
        });
        break;
      case 'component':
        routePath.push({
          path: item.name,
          component: () => import('@/' + item.url + '.vue')
        });
        break;
      default :
        routePath.push({
          path: item.name,
          component: () => import('@/' + item.url + '.vue')
        });
        break;
    }
  }
  console.log("routePath", routePath);
  return routePath;

}
