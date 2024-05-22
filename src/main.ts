import {createApp} from 'vue';
import 'vfonts/FiraCode.css'; // 等宽字体
import '@/style.css';
import App from '@/App.vue';
import router from "@/core/router";
import "@/core/router/permission.ts";
import {createPinia} from 'pinia';
import axios from "axios";
import axiosInstance from "@/core/utils/RequestUtil.ts";
import ConfigType from "@/core/types/ConfigType.ts";

const app = createApp(App);

// 加载配置文件并设置 axios baseURL
const loadConfig = async () => {
    try {
        const response = await axios.get("/config.json");
        const config: ConfigType = response.data;
        if (config && config.baseURL) {
            axiosInstance.defaults.baseURL = config.baseURL;
            console.info('😆 "config.json" 配置文件加载成功')
        } else {
            console.error('⛈️ "config.json" 配置文件缺少基本URL');
        }
    } catch (error) {
        console.error('🙁加载配置 "config.json" 失败:', error);
    }
};
// 加载配置后启动应用
loadConfig().then(() => {
    app.use(router);
    app.use(createPinia());
    app.mount('#app');
});
