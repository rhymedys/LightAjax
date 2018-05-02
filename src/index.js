/*
 * 轻量的Ajax请求库
 * @Author: Rhymedys/Rhymedys@gmail.com
 * @Date: 2018-04-12 22:02:38
 * @Last Modified by: Rhymedys
 * @Last Modified time: 2018-05-02 22:01:04
 */

export default class LightAjax {
  constructor() {
    // 初始化参数
    this.initParam = {
      url: "",
      type: "",
      baseURL: '',
      data: {},
      async: true,
      requestHeader: {},
      publicData: {},
      timeout: 5000,
      responseType: 'json',
      contentType: '',
      withCredentials: false,
      isOpenErr: false,
      errURL: '',
      transformRequest: function (data) {
        return data;
      },
      transformResponse: function (data) {
        return data;
      },
      successEvent: function (data) {},
      errorEvent: function (x, xx, xxx) {},
      timeoutEvent: function (code, e) {}
    }
  }

  /**
   * @description 是否有属性值
   * @param {any} obj 
   * @param {any} key 
   * @returns 
   * @memberof LightAjax
   */
  hasOwn(obj, key) {
    return Object
      .prototype
      .hasOwnProperty
      .call(obj, key)
  }


}