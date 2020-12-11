import Vue from "vue";
import App from "./App.vue";
import * as Sentry from "csii-sentry-browser";
import { Integrations } from "csii-sentry-tracing";
import { Vue as VueIntegration } from "csii-sentry-integrations";

Sentry.init({
  Vue,
  dsn:{
    protocol: 'http',
    user:  'testest',
    pass:  '',
    host:  '192.168.137.2',
    port:  '8099',
    // path:  'testaaaa',
    fullPath: {
      base:'bug/bug',
      store:'/addJsBugInfo', // 上报错误日志
      envelope:'/envelope' // 上报性能数据
    },
    projectId:  '5547265',
  },
  integrations: [
    new Integrations.BrowserTracing(),
    new VueIntegration({ Vue, attachProps: true })
  ],
  // dsn: "https://cb3d5994c02a4aa794b8c12ed4e816f9@o487902.ingest.sentry.io/5547265",
  // window 全局引入js方式
  // integrations: [
  //   new window.Sentry.Integrations.BrowserTracing(),
  //   new window.Sentry.Integrations.Vue({ Vue, attachProps: true })
  // ],
  // release: "my-project@1.0.0",
  // logErrors: true,
  beforeSend(event, hint) {
    const error = hint.originalException;
    if (error && error.message) {
      // 自定义数据
      event.deviceData = {
        app_id:'app_id',//app_id
        app_ver:'1.0',//app版本
        dev_id:'xxxxxxxxx',//设备ID
        dev_info:'Android8.1.0 OPPO',//设备信息(Android8.1.0OPPO)
        dev_vision:'720*1424',//手机宽高(720*1424)
        dev_screen:'480',//手机屏比率DPI(480)
        dev_ram:'可用/总共:2.15GB/7.99GB',//手机内存使用情况(可用/总共:2.15GB/7.99GB)
        dev_disk:'可用/总大小:149.0GB/226.2GB',//手机硬盘容量(可用/总大小:149.0GB/226.2GB)
        dev_net:'中国电信:wifi',//手机网络类型(中国电信:wifi)
        dev_wifi:'4',//手机信号强度
        exp_deal_time:'2020-11-25 09:11:23',//异常上送时间(2020-11-2509:11:23)
        dev_run_time:'2020-11-25 09:11:23',//运行时间(2020-11-2509:11:23)
        dev_isroot:'1',//是否root（1root0不root)
        exp_hap_time:'2020-11-25 09:11:23',//异常上送时间（2020-11-2509:11:23）
        exp_dev_type:'2',//设备类型(0andriod,1ios,2h5)
        dev_power:'70%',//电量(71%)
      };
    }
    return event;
  },
  // tracesSampleRate: 1.0, // 统计性能
});

// // 设置用户信息
// window.Sentry.setUser({
//   id: "123123",
//   userName: "出现的说法",
//   email: "xxxx@xx.com",
//   ip_address: ""
// });
// // 清除用户信息
// // Sentry.configureScope(scope => scope.setUser(null));

// window.Sentry.configureScope(scope => scope.setTransactionName("UserListView"));

Vue.config.productionTip = false;

new Vue({
  render: h => h(App)
}).$mount("#app");

let b = 1;
b(); // 类型错误

let c = 1;
c(); // 类型错误
