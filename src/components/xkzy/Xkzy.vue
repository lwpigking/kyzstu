<template>
  <Top/>

  <div class="top">
    <div class="img-top">
      <img src="../../public/images/bksjy/txx.jpg" alt="txx">
    </div>
    <div class="lmcc">
      <div class="yil">学科专业</div>
      <div class="daq">专业介绍</div>
    </div>

    <div class="daww">
      <div class="wwz">当前位置</div>
      <div class="ww11z">
        <div>
          <a href="javascript:;" @click="navigateTo('/home')">官网首页</a>
          >>
          <a href="javascript:;">学科专业</a>
          >>
          <a href="javascript:;">专业介绍</a>
        </div>
      </div>
    </div>
  </div>

  <div class="content">
    <ul>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/fzfzxy')">纺织服装学院</a>
        <span>2020-07-08</span>
      </li>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/xxykzxy')">信息与控制学院</a>
        <span>2020-07-08</span>
      </li>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/jjglxy')">经济管理学院(创业学院)</a>
        <span>2020-07-08</span>
      </li>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/ysysjxy')">艺术与设计学院</a>
        <span>2020-07-08</span>
      </li>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/rwygjjlxy')">人文与国际交流学院</a>
        <span>2020-07-08</span>
      </li>
      <li>
        <p>[专业介绍]</p>
        <a href="javascript:;" @click="navigateTo('/xkzy/jzgcxy')">建筑工程学院</a>
        <span>2020-07-08</span>
      </li>
    </ul>
  </div>
  <Footer/>
</template>

<script setup>
import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}
</script>

<style scoped>
.top img {
  width: 100%;
  height: 650px;
}

.top .lmcc {
  width: 1200px;
  margin: 0 auto;
  margin-top: -180px;
  height: 180px;
  color: #ffffff;
}

.top .lmcc .yil {
  font-size: 28px;
  position: relative;
  height: 40px;
  font-weight: bold;
  line-height: 40px;
  padding-top: 20px;
}

.top .daww {
  font-size: 14px;
  line-height: 30px;
  margin-top: -80px;
  color: #ffffff;
  margin-left: 1200px;
}

.top .daww a {
  text-decoration: none;
  color: #ffffff;
}

.content {
  width: 1200px;
  padding: 20px 0;
  margin: 0 auto;
  margin-top: 50px;
  margin-bottom: 50px;
}

.content ul li{
  display: flex;
  justify-content: space-between;
  align-items: center;
  line-height: 50px;
  border-bottom: 1px solid #cccccc;
  font-size: 16px;
  height: 50px;
}

.content ul li p {
  font-weight: bold;
  width: 100px;
}

.content ul li a{
  text-decoration: none;
  color: #333333;
  margin-left: -800px;
  width: 200px;
  transition-duration: 0.3s;
}

.content ul li a:hover{
  transform: translateX(20px);
  color: red;
}

.content ul li span {
  background-color: #7e7e80;
  color: #ffffff;
  font-size: 14px;
  height: 25px;
  line-height: 25px;
}




</style>