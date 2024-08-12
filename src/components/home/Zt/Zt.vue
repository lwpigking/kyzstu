<script setup>

</script>

<template>
  <div class="zt">
    <div class="ztimg">
      <img src="../../../public/images/zt/zt.jpg" alt="zt">
    </div>

    <div class="ztlist">
      <ul>
        <li><img src="../../../public/images/zt/zt0320221027.png" alt="a"></li>
        <li><img src="../../../public/images/zt/img0421002.jpg" alt="b"></li>
        <li><img src="../../../public/images/zt/baizi-suoxiao-zikaozuo.jpg" alt="c"></li>
        <li><img src="../../../public/images/zt/img0329.jpg" alt="d"></li>
      </ul>
    </div>

  </div>
</template>

<style scoped>
.zt {
  width: 1200px;
  margin: 0 auto;
}

.zt .ztimg {
  margin-top: 20px;
}

.zt .ztlist {
  margin-top: 20px;
}

.zt .ztlist ul {
  display: flex;
  justify-content: space-between;
}

.zt .ztlist ul li {
  list-style: none;
}

.zt .ztlist ul li img {
  width: 276px;
  height: 110px;
  cursor: pointer;
  transition-duration: 0.3s;
}

.zt .ztlist ul li img:hover {
  opacity: 0.7;
}
</style>