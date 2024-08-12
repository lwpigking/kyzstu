<script setup>

/**
 * 路由跳转（每张图片点击后跳转到相应的路由）
 */
import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}
</script>

<template>
  <div class="ksr">
    <ul>
      <li><img src="../../../public/images/ksr/s01.jpg" alt="s01"></li>
      <li><img src="../../../public/images/ksr/weibiaoti-1_03.jpg" alt="weibiaoti-1_03.jpg"></li>
      <li><img src="../../../public/images/ksr/s02.jpg" alt="s02"></li>
      <li><img src="../../../public/images/ksr/s03.jpg" alt="s03" @click="navigateTo('/wbdt')"></li>
      <li><img src="../../../public/images/ksr/s04.jpg" alt="s04" @click="navigateTo('/xxgk/ztb')"></li>
      <li><img src="../../../public/images/ksr/s015.png" alt="s015" @click="navigateTo('/xkzy')"></li>
      <li><img src="../../../public/images/ksr/s07.jpg" alt="s07" @click="navigateTo('/bksjy')"></li>
    </ul>
  </div>
</template>

<style scoped>
.ksr {
  width: 1200px;
  margin: 0 auto;
}

.ksr ul {
  display: flex;
  justify-content: space-around;
}

.ksr ul li {
  list-style: none;
  padding: 15px 15px;
}

.ksr ul li img {
  width: 139px;
  height: 45px;
  transition-duration: 0.3s;
  opacity: 1;
  cursor: pointer;
}

.ksr ul li img:hover {
  opacity: 0.7;
}
</style>