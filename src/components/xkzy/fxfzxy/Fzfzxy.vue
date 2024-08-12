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

  <div class="conth3">服装纺织学院</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">纺织工程（普通类）</p>
    <p>培养目标：本专业顺应纺织行业的发展需求，培养能在纺织企业、科研、教学等部门从事纺织品设计开发、纺织工艺设计、纺织生产质量控制、生产技术改造以及国内外纺织品贸易的高级复合型工程技术人才。学生毕业后就业前景良好，可在纺织企事业单位从事生产技术、产品开发、经营管理、对外贸易等工作，还可在纺织院校、科研单位、工贸行业、海关及商检部门工作。</p>
    <p>核心课程：机械设计基础、电工与电子技术、微机原理及应用、纺织化学、纺织材料学、纺纱学、织造学、纺织品设计学、企业经营与管理、计算机网络技术、CAD技术基础、数据库原理及应用、企业经营与管理等。</p>
    <p class="head">服装设计与工程（普通类）</p>
    <p>培养目标：本专业紧扣我国及国际服装产业特点，采用工程与艺术、工程与管理、工程与贸易相结合的培养模式，培养具有服装设计、服装结构工艺及服装经营管理理论及实践能力，能从事服装产品开发、市场营销、企业经营管理、服装理论研究等方面工作的高级专门人才。</p>
    <p>核心课程：服装材料学、服装设计学、成衣工艺学、服装立体裁剪、服装结构设计、服装CAD、服装生产管理、服装机械、服装商品策划、服装市场营销、销售管理、服装国际贸易、外贸函电等。</p>
    <p class="head">服装与服饰设计（艺术类）</p>
    <p>培养目标：本专业系统的培养服装和服饰设计的理论知识，了解服装服用性能的测试方法，善于借鉴我国传统服饰文化，掌握和利用现代国内外服装信息，有较高的设计水平和较强的工艺制作能力以及初步的科研能力。毕业生能在企事业部门、学校、科研单位从事服装、服饰设计工作以及教学与研究工作，是德才兼备的高级专门人才。</p>
    <p>核心课程：中外服装史、中国民族服装史、服装造型工艺学、服装服饰设计基础、时装画技法、发型与化妆、人体工程学、服装材料工艺学、服装概论、计算机应用、服装眼用性能测试、服装设计、眼饰设计等。</p>
    <p class="head">产品设计（纺织品艺术设计）（艺术类）</p>
    <p>培养目标：毕业生能在纺织（家纺、服装、面料等）企事业单位及其相应的艺术设计领域，从事各类艺术设计、经营管理、市场调查分析、市场营销策划、公共关系和企业文化建设等工作。</p>
    <p>核心课程：专业素描、色彩设计、构成基础、国画、中外经典图案研习、装饰色彩写生、染织纹样史、创意图案、纺织品设计、纺织概论、纺织品染整工艺学、家纺织花设计、服饰织花设计、印染纹样风格设计、纤维艺术设计、面料造型及创意设计、手绘、丝网印刷、蜡（扎）染艺术、服装构成与基础工艺、市场定位与流行分析、染织数字图形、纺织品空间装饰设计、家纺品牌策划、刺绣艺术、面料二次设计、计算机图形设计等。</p>
    <p class="head">应用化学（普通类）</p>
    <p>培养目标：本专业培养具备良好的科学素养、宽厚的化学理论基础、较强的基本技能、较强的综合实践能力和一定的创新意识的高素质应用型人才。毕业生具有良好的道德品质和健全的心理素质，具备在绿色有机合成、医药中间体的制备等领域的基本专业知识和实验技能，掌握现代测试分析方法和手段，具有自主学习和研究的潜力。毕业生适合在化学品合成、精细化工、制药、环保、食品、质检、各类助剂、粘合剂、涂料等行业或相关管理部门，从事相关的产品研发、市场运作、营销、技术推广与服务等方面的工作，也可在相关研究院所和事业单位从事科学研究和教育教学工作。</p>
    <p>核心课程：无机化学，分析化学，有机化学，物理化学，仪器分析，有机合成。</p>
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