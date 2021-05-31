import { createApp } from 'vue';
import App from './App.vue';
import router from './router.js';
import { Row, Col } from 'ant-design-vue';

const app = createApp(App);
app.use(router); // 挂载路由
app.use(Row).use(Col); // 注册组件
app.mount('#app');
