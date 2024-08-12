<script setup>

import Top from "../../home/top/Top.vue";
import Footer from "../../home/footer/Footer.vue";

import {useRouter} from "vue-router";
const router = useRouter();
const navigateTo = (route) => {
  router.push(route)
}
</script>

<template>

  <Top/>

  <div class="top">
    <div class="img-top">
      <img src="../../../public/images/bksjy/txx.jpg" alt="txx">
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
          <a href="javascript:;" @click="navigateTo('/xkzy')">学科专业</a>
          >>
          <a href="javascript:;">专业介绍</a>
          >>
          <a href="javascript:;">正文</a>
        </div>
      </div>
    </div>
  </div>

  <div class="conth3">建筑工程学院</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">建筑学（普通类）</p>
    <p>培养目标：培养能适应社会发展需要，具有创新意识和务实精神的，能对人们生活内涵、行为模式、空间组织关系之间进行深入的观察与分析，融合人文、技术、美学三者的知识，能从事建筑设计、城市规划、风景园林、建筑技术和城市建设管理的建筑学专业的应用型高级工程技术和管理人才。</p>
    <p>核心课程：大学数学、建筑设计基础-2、外国建筑史、建筑设计-5、建筑设计-6、建筑构造-1、城市规划原理等。</p>
    <p class="head">土木工程（普通类）</p>
    <p>培养目标：培养具备从事土木工程项目规划、设计、研究开发、施工及管理的能力，能在房屋建筑、岩土工程、地下建筑等的设计、施工、管理、投资与开发部门胜任技术或管理工作，并具有较强工程实践能力和创新能力的高素质工程技术应用型人才。</p>
    <p>核心课程：高等数学A、C程序设计基础、材料力学、结构力学、工程地质与土力学、混凝土结构设计原理、基础工程、土木工程施工等。</p>
    <p class="head">工程管理（普通类）</p>
    <p>培养目标：培养具备扎实的土木工程技术基础、管理学和经济学的基础知识，有较强的实践能力的，掌握现代管理科学的理论、方法和手段，熟悉工程项目建设技术和相关法规，能够在工程建设领域从事项目决策和全过程管理的高素质应用型管理人才。</p>
    <p>核心课程：管理学B、工程经济学A、工程项目管理I、工程估价I、工程建设招投标与合同管理、房地产开发与经营、工程造价与管理等。</p>
  </div>

  <Footer/>

</template>

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

.conth3 {
  margin-top: 100px;
  font-size: 24px;
  font-weight: bold;
  line-height: 40px;
  text-align: center;
  padding: 20px 0;
}

.data {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  border-bottom: 1px solid #cccccc;
  padding-bottom: 10px;
}

.content {
  width: 1200px;
  line-height: 35px;
  padding-top: 20px;
  margin: 0 auto;
  margin-bottom: 50px;

}

.content p {
  line-height: 180%;
  text-indent: 2em;
  font-size: 14pt;
}

.content .head {
  font-weight: bold;
}
</style>