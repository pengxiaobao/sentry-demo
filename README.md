# sentry改源码后本地测试

## Project setup

```
npm install -g yalc

```
去sentry-javascript执行 `yarn link:yalc` 进行缓存，再在本项目 `yalc add xxx` 如下：

```
yalc add sentry-csii-internal-eslint-config-sdk sentry-csii-internal-eslint-plugin-sdk sentry-csii-internal-typescript csii-sentry-angular csii-sentry-browser csii-sentry-core csii-sentry-ember csii-sentry-gatsby csii-sentry-hub csii-sentry-integrations csii-sentry-minimal csii-sentry-node csii-sentry-react csii-sentry-serverless csii-sentry-tracing csii-sentry-types csii-sentry-utils csii-sentry-vue

yarn install
```

### Compiles and hot-reloads for development
```
yarn serve
```

### Compiles and minifies for production
```
yarn build
```

### Lints and fixes files
```
yarn lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

