<script setup>




</script>

<template>
	<footer>
		
		<div class="pag-cont">
			<n-flex  justify="center">
		<van-tabbar route>
			<van-tabbar-item replace  icon="home-o" to="/">首页</van-tabbar-item>
			<van-tabbar-item replace icon="apps-o" to="/type/show">分类</van-tabbar-item>
			<van-tabbar-item replace icon="hot-o">心理课程</van-tabbar-item>
			<van-tabbar-item replace icon="smile-comment-o" to="/" >我的</van-tabbar-item>
		</van-tabbar>
			</n-flex>
		</div>
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