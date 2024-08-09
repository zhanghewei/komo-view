<script setup lang="ts">

import {ref, watch} from "vue";
import CopyrightIcp from "@/views/common/Copyright-icp.vue";

const show = ref(true)
const isMobile = ref(false)
//该方法用于判断是否进入手机端

watch(() => history.state.current, fetchData, { immediate: true })
async function fetchData(newId, oldId) {
	if (history.state.current == '/' || history.state.current == '/answer'){
		show.value = false
	} else {
		show.value = true
	}
}
watch(() => navigator.userAgent, fetchData2, { immediate: true })
async function fetchData2(newId, oldId) {
	let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)
	if (!flag){
		isMobile.value = true
	} else {
		isMobile.value = false
	}
}
</script>
<template>
		
	<router-view ></router-view>
	<template v-if="isMobile">
		<CopyrightIcp ></CopyrightIcp>
	</template>
	
</template>

<style>
</style>
