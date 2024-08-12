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

  <div class="conth3">艺术与设计学院</div>
  <!-- FIXME: 点击数读取数据库，先不做 -->
  <div class="data">时间: 2020-07-08 作者:  点击: [4054]</div>
  <div class="content">
    <p class="head">产品设计（产品、家居用品）（艺术类）</p>
    <p>培养目标：培养能从事产品设计、产品开发和设计管理、或与之相关的技术管理及研究、教育等工作，适应能力强、创新能力强、实践能力强的应用型高级专门人才。</p>
    <p>核心课程：设计表现、基础设计、人机工程学、产品设计程序与方法、产品系统设计、产品概念设计等。</p>
    <p class="head">数字媒体艺术（艺术类）</p>
    <p>培养目标：培养具有创新思维与创意设计执行能力的数字媒体艺术人才，能从事媒体公司、广告公司、影视公司、摄影机构、互联网公司、设计教育等相关企业的媒体运营、营销策划、广告设计、数字影视制作、数字摄影、交互设计等方面的工作。</p>
    <p>核心课程：数字营销策划、新媒体广告设计、媒体创意设计、商业短片创作、商业摄影、界面设计</p>
    <p class="head">视觉传达设计（艺术类）</p>
    <p>培养目标：培养能在专业设计机构、高等院校和出版单位从事信息传媒创意设计、企业形象设计、展示设计、包装设计、动态传媒信息及网络媒体、书籍装帧设计、平面印刷品设计、视觉衍生产品创意开发等工作，以及从事设计教育、研究和经营管理等相关工作。</p>
    <p>核心课程：图形创意、字体设计、包装设计、动态传媒信息设计、招贴设计、书籍装帧设计等。</p>
    <p class="head">环境设计（艺术类）</p>
    <p>培养目标：培养具有系统整体的大环境设计观、创新创业意识，能胜任城乡景观、风景园林、建筑室内环境设计实践和管理教育等方面的工作，专业适应性强的高素质应用型人才。</p>
    <p>核心课程：画法几何、建筑设计初步、小住宅设计、建筑物理、表现技法、西方近现代建筑史、建筑材料、建筑构造等。</p>
    <p class="head">动画（艺术类）</p>
    <p>培养目标：培养具备扎实的的动画专业基本知识、创作经验以及熟练的专业技能，能在动画艺术创作、多媒体动画创作、视觉效果创作、影视创作及游戏动画创作等相关领域从事动画片编导、动画设计、动画制作、影视制作、影视后期特效及游戏美术设计工作方面工作，适应能力强、创新能力强、实践能力强的应用型人才。</p>
    <p>核心课程：动画概论、视听语言、动画运动规律、剧作、造型设计、场景设计、分镜头设计、原话等。</p>
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