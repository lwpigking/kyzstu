<script setup>
import {Search} from "@element-plus/icons-vue";

const images = [
  {src: "src/public/images/wbdt/1.jpg", alt: "Image 1"},
  {src: "src/public/images/wbdt/2.jpg", alt: "Image 2"},
]

import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}

</script>

<template>
  <div class="custom-body">
    <div class="customer-header">
      <div class="custom-header-logo">
        <img src="../../public/images/wbdt/locklog.png" alt="locklog">
      </div>
      <div class="customer-header-title">网上办事大厅</div>
      <div class="inputAndSearch">
        <el-input placeholder="请输入要查询的内容" class="input"/>
        <Search class="search"/>
      </div>
    </div>
  </div>

  <div class="custom-menu">
    <div class="custom-body">
      <div class="custom-menu-ul">
        <a href="#">首页</a>
        <a href="javascript:;" @click="navigateTo('/bsml/bsmlall')">办事目录</a>
        <a href="javascript:;">个人中心</a>
      </div>
    </div>
  </div>

  <el-carousel trigger="click" style="width: 1170px; margin: 0 auto;" height="375px">
    <el-carousel-item v-for="(item, index) in images" :key="index">
      <img :src="item.src" :alt="item.alt" style="height: 375px; width: 100%">
    </el-carousel-item>
  </el-carousel>

  <div class="custom-body">
    <img src="../../public/images/wbdt/zuixin.png" alt="zuixin" style="margin-top: 20px">
  </div>

  <div class="custom-body card-flex" style="margin-top: 20px; height: 280px">
    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191202105549501.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li" @click="navigateTo('/bsml/wzqjssq')">网站群建设申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191112161508778.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">党员组织关系介绍信开具</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191202104749668.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">邮箱申请</div>
          <div class="content-li-span">教师，学生，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191106102012075.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">纪检监察监督事项备案</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>

    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191226145757001.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">网上办事大厅问题与建议</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>

    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191107134622601.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">用车申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>
  </div>


  <div class="custom-body">
    <img src="../../public/images/wbdt/remen.png" alt="zuixin" style="margin-top: 60px">
  </div>

  <div class="custom-body card-flex" style="margin-top: 20px; height: 280px">
    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191113160258402.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">教职工请假申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191106102012075.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">工会疗休养、春秋游、节日福利等级申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191107141415293.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">用印申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191230135640808.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">酒店式公寓临时住宿申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191114143258101.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">线上食堂</div>
          <div class="content-li-span">教师，线下办理</div>
        </div>
      </div>
    </el-card>


    <el-card shadow="hover" class="card">
      <div class="card-content">
        <img src="../../public/images/wbdt/20191107134622601.png" alt="1" class="card-image">
        <div class="card-text">
          <div class="content-li">用车申请</div>
          <div class="content-li-span">教师，线上办理</div>
        </div>
      </div>
    </el-card>

  </div>

  <div class="custom-footer-content">
    <div class="custom-body footer-content-ul">
      <!-- FIXME: 造假数据     -->
      <div class="footer-content-li">总访问量：376786</div>
      <div class="footer-content-li">今日访问量：13</div>
      <div class="footer-content-li">全部流程数：197</div>
      <div class="footer-content-li">已开放办理流程数：72</div>
    </div>
  </div>

  <div class="custom-footer">
    <div class="custom-body">
      地址：杭州湾上虞经济技术开发区康阳大道58号 邮编：312369 传真：0575-82978000 招生咨询：0575-82001777 版权所有：浙江理工大学科技与艺术学院 Copyright(c)2019 浙江理工大学科技与艺术学院.
    </div>
  </div>


</template>

<style scoped>
.custom-body {
  width: 1170px;
  margin: 0 auto;
}

.customer-header {
  display: flex;
  justify-content: space-around;
  height: 90px;
  line-height: 90px;
  align-items: center;
}

.custom-body .customer-header .custom-header-logo {
  height: 90px;
  line-height: 90px;
}

.custom-body .customer-header .custom-header-logo img {
  width: 392px;
}

.custom-body .customer-header .customer-header-title {
  width: 180px;
  height: 90px;
  font-size: 24px;
  text-align: center;
  color: #666666;
  margin-left: -160px;
  position: relative;
}

.custom-body .customer-header .customer-header-title::before {
  display: inline-block;
  content: " ";
  width: 2px;
  height: 40px;
  background-color: black;
  position: absolute;
  left: 9px;
  top: 25px;
}

.custom-body .customer-header .inputAndSearch {
  display: flex;
  align-items: center;
}

.custom-body .customer-header .inputAndSearch .input {
  width: 220px;
  height: 42px;
}

.custom-body .customer-header .inputAndSearch .search {
  width: 55px;
  height: 42px;
  cursor: pointer;
}

.custom-menu {
  width: 100%;
  height: 45px;
  background-color: #0a388d;
}

.custom-menu .custom-menu-ul a {
  display: inline-block;
  text-decoration: none;
  color: #fff;
  height: 45px;
  margin-left: 80px;
  padding: 0 30px;
  width: auto;
  text-align: center;
  line-height: 40px;
}

.custom-menu .custom-menu-ul a:hover {
  background-color: #1e9fff;
}

.card-flex {
  display: flex;
  flex-wrap: wrap;
}

.card img {
  width: 75px;
  height: 75px;
  margin-right: 10px;
}

.card {
  width: 31%;
  height: 140px;
  cursor: pointer;
  padding: 10px;
  box-sizing: border-box;
  margin: 10px;
}

.card-content {
  display: flex;
  align-items: center;
}

.card-text {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}

.content-li {
  width: 100%;
  height: 40px;
  line-height: 20px;
  font-size: 18px;
  text-align: left;
}

.content-li-span {
  width: 100%;
  height: 35px;
  line-height: 50px;
  font-size: 14px;
  color: #666666;
}

.custom-footer-content {
  margin-top: 40px;
  width: 100%;
  height: 100px;
  background-color: #0a388d;
}

.footer-content-ul {
  display: flex;
}

.footer-content-li {
  color: #ffffff;
  height: 100px;
  line-height: 100px;
  text-align: center;
  font-size: 18px;
  margin: 0 auto;
}

.custom-footer {
  width: 100%;
  height: 50px;
  line-height: 50px;
  font-size: 12px;
  text-align: center;
  background-color: #393d49;
  color: #d2d2d2;
}

</style>