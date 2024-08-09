<script setup>




</script>

<template>
	<footer>
		
		<van-tabbar route>
		<div class="pag-cont">
			<n-flex  justify="center">
			<van-tabbar-item replace  icon="home-o" to="/topic">话题管理</van-tabbar-item>
			<van-tabbar-item replace icon="apps-o" to="/question/index">问题管理</van-tabbar-item>
			<van-tabbar-item replace  icon="apps-o" to="/type">分类管理</van-tabbar-item>
			<van-tabbar-item replace icon="smile-comment-o" to="/" >测试题</van-tabbar-item>
			</n-flex>
		</div>
		</van-tabbar>
	</footer>
</template>

<style scoped>
.pag-cont{
	position: fixed;
	bottom:1px;
	width: 100%;
	height: 50px;
}
</style>