<script setup>

import Top from "../home/top/Top.vue";
import Footer from "../home/footer/Footer.vue";

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
      <img src="../../public/images/bksjy/txx.jpg" alt="txx">
    </div>
    <div class="lmcc">
      <div class="yil">人才培养</div>
      <div class="daq">本科生教育</div>
    </div>

    <div class="daww">
      <div class="wwz">当前位置</div>
      <div class="ww11z">
        <div>
          <a href="javascript:;" @click="navigateTo('/home')">官网首页</a>
          >>
          <a href="javascript:;">人才培养</a>
          >>
          <a href="javascript:;">本科生教育</a>
        </div>
      </div>
    </div>
  </div>

  <div class="conth3">本科生教育</div>
  <div class="content">
    <p class="content-start">
      学院根据经济社会发展的需要，结合区域经济发展对人才的需求，母体良好的学科基础、师资条件和教学资源设置学科专业。现有29个本科专业，涵盖了理、工、艺、经、管、法、文等七大学科门类，形成了以纺织、服装、艺术设计为特色，多学科协调发展的本科专业总体布局与结构。学院立足浙江，面向全国11个省（市、自治区）招生，现有全日制本科生5800余人。其中，艺术与设计为省级重点建设专业，电子信息工程、产品设计、人力资源管理等三个专业为省新兴特色专业，2016年计算机科学与技术、设计学两个学科成功获批“十三五”省一流学科B类，艺术与设计实验教学中心获批浙江省“十二五”高等学校实验教学示范中心重点建设项目。近年来，学院主持国家级教学研究项目3项，国家双语示范课程1项，教育部教指委课程项目1项，省部级及以上教改项目15项，省精品课程2门，省重点教材建设项目4项，10部教材入选国家级规划教材；主持各类课题148项，其中国家级项目5项，省部级项目25项，厅局级项目53项；各类成果及获奖50项；出版著作或教材17部，获得授权专利340项，软件著作权6项。
    </p>
    <p>
      学院拥有一支德才兼备、富有特色、专兼结合的具有较高水平的师资队伍。现有教职工393人，其中专任教师306人，高级职称87人，博士学位33人，拥有硕士及以上学位占比82.93%。近年来荣获全国师德先进个人1人，入选浙江省“151人才工程”7人，省高校中青年学科带头人4人，省高校青年教师资助计划15人，浙江省优秀辅导员2人。获得省“教坛名师”、“教坛新秀”、“三育人先进个人”等厅局级及以上奖励共20余人次，2名教师荣获德国红点奖和国际IF产品设计奖。
    </p>
    <p class="content-end">
      学院以培养“基础实、能力强、富有社会责任感和创新精神”高素质应用型人才为核心，实施通识教育、专业教育、个性教育相结合的人才培养模式，推行学分制；实施弹性学制，基本学制为4年，弹性学习期限为3至6年。在学院规定的学习期限内达到毕业学分和学位授予条件要求，颁发浙江理工大学科技与艺术学院毕业证书和学士学位证书。设置外语拓展课程，增加实践教学、选修课和分层分类课程以及第二课堂学分，开展导师制优秀生培养工作，与中国丝绸博物馆、浙江省工业设计研究院、浙江省建筑设计研究院、杭州市都锦生实业有限公司、卧龙控股集团有限公司、浙江中鑫建设集团有限公司、浙江华孚色纺有限公司等单位合作建立了70余个校内外实习基地，努力培养知识、能力、素质协调发展的应用型创业人才。学院作为“高校艺术学科师生海外学习计划”成员院校，积极推进国际化教育，与日本上智大学、京都大学、西澳大学、意大利罗马大学、英国伦敦艺术大学、韩国汉阳大学等多所国外高校开展学分互认和交换生项目，拓展学生国际化培养途径。
    </p>
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


</style>