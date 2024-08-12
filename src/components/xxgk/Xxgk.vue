<template>
  <Top/>

  <div class="top">
    <div class="img-top">
      <img src="../../public/images/xxgk/xxgkk.jpg" alt="txx">
    </div>
    <div class="lmcc">
      <div class="yil">{{infoName}}</div>
      <div class="daq">{{infoName}}</div>
    </div>

    <div class="daww">
      <div class="wwz">当前位置</div>
      <div class="ww11z">
        <div>
          <a href="javascript:;" @click="navigateTo('/home')">官网首页</a>
          >>
          <a href="javascript:;">信息公开</a>
          >>
          <a href="javascript:;">{{infoName}}</a>
        </div>
      </div>
    </div>
  </div>

  <div class="erds">
    <ul>
      <li><a href="javascript:;" @click="navigateTo('/xxgk/ztb')">招投标信息公开</a></li>
      <li><a href="javascript:;" @click="navigateTo('/xxgk/dwzw')">党务政务公开</a></li>
      <li><a href="javascript:;" @click="navigateTo('/xxgk/qtxx')">其他信息公开</a></li>
    </ul>
  </div>

  <router-view/>



  <Footer/>
</template>

<script setup>
import {useRoute, useRouter} from "vue-router";
import {ref, watch} from "vue";

const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}

// 判断现在为哪个路由，根据相应的路由让页面实现相应的文字
const route = useRoute();
const currentRoute = ref(route.path.split("/").pop())
// 必须要有默认值，watch一开始无法监视到新的数据，所以无法展示
// 在Ksr中默认的路由是/xxgk/ztb，所以直接给默认值: 招投标信息公开
let infoName = ref('招投标信息公开')
watch(() => route.path, (newPath) => {
  currentRoute.value = newPath.split("/").pop()
  if (currentRoute.value === "ztb") {
    infoName = "招投标信息公开"
  } else if (currentRoute.value === "dwzw") {
    infoName = "党务政务公开"
  } else if (currentRoute.value === "qtxx") {
    infoName = "其他信息公开"
  }
  return infoName
})


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

.erds {
  width: 1200px;
  margin: 0 auto;
  margin-top: 70px;

}

.erds ul {
  display: flex;
}

.erds li {
  list-style: none;
  font-size: 20px;
  height: 40px;
  margin-bottom: 20px;
  padding: 0 10px;
}

.erds li a{
  text-decoration: none;
  color: #808080;
  border-bottom: 1px solid #cccccc;
  border-top: 2px solid #adabab;
  line-height: 29px;
  padding: 7px;
}






</style>