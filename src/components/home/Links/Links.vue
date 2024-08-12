<script setup>

</script>

<template>
  <div class="links">
    <div class="xglj">相关链接</div>
    <div class="zmjg">
      <label>
        <select name="apartment">
          <option value="xxbm">学校部门</option>
          <option value="bgs">办公室(发展规划部、国际交流合作部)</option>
          <option value="zzb">组织部(统战部、机关党总支)</option>
          <option value="xcb">宣传部(教师工作部)</option>
          <option value="jjjcs">纪检监察室(审计部)</option>
          <option value="xsgzs">学生工作室(招生与就业指导办公室、人民武装部、校友工作办公室)</option>
          <option value="jwb">教务部(教育教学发展中心)</option>
          <option value="kyb">科研部(校地合作办公室)</option>
          <option value="rsb">人事部</option>
          <option value="jhcwb">计划财务部</option>
          <option value="zcysysglb">资产与实验室管理部(采购中心)</option>
          <option value="xxjszx">信息技术中心</option>
          <option value="ggswglb">公共事务管理部(保卫部)</option>
          <option value="hqfwzx">后勤服务中心</option>
          <option value="tsg">图书馆</option>
          <option value="tw">团委</option>
          <option value="gh">工会(妇联)</option>
        </select>
      </label>

      <label>
        <select name="second-apartment">
          <option value="ejxy">二级学院(部)</option>
          <option value="fzfzxy">服装纺织学院</option>
          <option value="xxykzxy">信息与控制学院</option>
          <option value="jjglxy">经济管理学院(创业学院)</option>
          <option value="ysysjxy">艺术与设计学院</option>
          <option value="rwygjjlxy">人文与国际交流学院(马克思主义学院)</option>
          <option value="jzgcxy">建筑工程学院</option>
          <option value="jxjyxy">继续教育学院</option>
          <option value="tyjyb">体育教研部(军训工作部)</option>
        </select>
      </label>

      <label>
        <select name="other-apartment">
          <option value="qtdw">其他单位</option>
          <option value="jyb">教育部</option>
          <option value="jyt">教育厅</option>
          <option value="zjlgdx">浙江理工大学</option>
        </select>
      </label>
    </div>
  </div>
</template>

<style scoped>
.links {
  width: 1200px;
  margin: 0 auto;
}

.links .xglj{
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #cccccc;
}

.links .zmjg {
  display: flex;
  justify-content: space-around;
}

.links .zmjg select {
  margin-top: 20px;
  width: 300px;
  border-radius: 15px;
  height: 30px;
  line-height: 30px;
  font-size: 16px;
  border: 1px solid #cccccc ;
  text-indent: 10px;
  margin-bottom: 20px;
}
</style>