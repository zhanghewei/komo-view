<script setup>

</script>

<template>
	<header>
				<van-row>
				<van-col span="18">
					<n-flex  justify="left">
						<van-action-bar-icon icon="chat-o" text="话题管理" to="/topic" />
						<van-action-bar-icon icon="chat-o" text="问题管理" to="/question/index" />
						<van-action-bar-icon icon="chat-o" text="测试题" to="/" />
					</n-flex>
				</van-col>
				<van-col span="6">
					<n-flex  justify="right">
						<router-link to='/login'>登录/注册</router-link>
					</n-flex>
					
				</van-col>
				</van-row>
				<!--		    <van-action-bar-icon icon="chat-o" text="答题测试" to="/answer/question" />-->
	</header>
</template>

<style scoped>

</style>