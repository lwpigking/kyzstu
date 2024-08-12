<script setup>

import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}
</script>

<template>

  <div class="custom-header">
    <div class="custom-container">
      <img src="../../public/images/wbdt/locklog1.png" alt="locklog">
      <div class="custom-msg">网上办事大厅</div>
      <ul class="nav">
        <li @click="navigateTo('/wbdt')">系统首页</li>
        <li @click="navigateTo('/bsml/bsmlall')">办事目录</li>
        <li>个人中心</li>
      </ul>
    </div>
  </div>

  <router-view/>

  <div class="custom-footer">
    <div class="custom-body">
      地址：杭州湾上虞经济技术开发区康阳大道58号 邮编：312369 传真：0575-82978000 招生咨询：0575-82001777 版权所有：浙江理工大学科技与艺术学院 Copyright(c)2019 浙江理工大学科技与艺术学院.
    </div>
  </div>

</template>

<style scoped>
.custom-header {
  width: 100%;
  height: 95px;
  background-color: #0a388d;
}

.custom-header .custom-container {
  display: flex;
  width: 1200px;
  margin: 0 auto;
}

.custom-header .custom-container img {
  height: 60px;
  margin-top: 20px;
}

.custom-header .custom-container .nav {
  display: flex;
  list-style: none;
  color: rgba(255, 255, 255, 0.7);
  font-size: 14px;
  align-items: center;
  margin-left: 100px;
  cursor: pointer;
}

.nav li {
  margin-left: 40px;
  transition-duration: 0.3s;
}

.nav li:hover {
  color: #ffffff;
}

.custom-msg {
  width: 175px;
  height: 95px;
  font-size: 22px;
  line-height: 95px;
  letter-spacing: 5px;
  color: #ffffff;
  margin-left: 13px;
}

.custom-footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: #0a388d;
  color: #ffffff;
}

</style>