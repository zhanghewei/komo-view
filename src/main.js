import 'vant/lib/index.css';
import 'amfe-flexible'

import axios from 'axios'
import {createApp,defineComponent} from 'vue'
import JSONBIG from 'json-bigint'
import App from './App.vue'
import {router} from '@/router/index.ts'
import van from 'vant'
import vueSeamlessScroll from "vue3-seamless-scroll";
import antDesign from 'ant-design-vue';


const app = createApp(App)
app.use(antDesign)
app.use(vueSeamlessScroll)
app.use(van)
app.use(router)

app.mount('#app')

//解决id超过16位失真问题
axios.defaults.transformResponse = [
    function (data) {
        const json = JSONBIG({
            storeAsString: true
        })
        return json.parse(data)
    }

]


// 本地ip
axios.defaults.baseURL = 'https://localhost:8081';
//配置请求地址
// axios.defaults.baseURL = 'https://124.222.74.122:8844';
// axios.defaults.baseURL = 'https://shanghaikomo.com:8844';
// axios.defaults.baseURL = 'http://111.229.109.85:6766';
// axios.defaults.baseURL = 'https://zhikejiangnan.com:8683';

//单位毫秒
axios.defaults.timeout =5000;
