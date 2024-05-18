import {createApp} from 'vue'
import '@/style.css'
import App from '@/App.vue'
import router from "@/core/router"

import {createPinia} from 'pinia'
import axios from "axios"
import axiosInstance from "@/core/utils/RequestUtil.ts";
import 'vfonts/FiraCode.css' // 等宽字体

const app = createApp(App);
axios.get("/config.json").then(res => {
    axiosInstance.defaults.baseURL = res.data[res.data.baseURL]
    app.use(router)
    app.use(createPinia())
    app.mount('#app');
})
