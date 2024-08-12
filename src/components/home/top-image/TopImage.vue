<script setup>
const images = [
  {src: "src/public/images/top-image/fengjing.png", alt: "Image 1"},
  {src: "src/public/images/top-image/guanwanghaibao.jpg", alt: "Image 2"},
  {src: "src/public/images/top-image/jiaoyujiajingshen.jpg", alt: "Image 3"}
]
</script>

<template>
  <el-carousel trigger="click" height="650px">
    <el-carousel-item v-for="(image, index) in images" :key="index">
      <img :src="image.src" :alt="image.alt">
    </el-carousel-item>
  </el-carousel>
</template>

<style scoped>
img {
  width: 100%;
  height: 650px;
}
</style>