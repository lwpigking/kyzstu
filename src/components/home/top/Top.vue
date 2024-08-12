<script setup>
/**
 * FIXME:input框中的逻辑还没写，搜索...
 */
</script>

<template>
  <div class="topbar">
    <img src="../../../public/images/top/logo.png" alt="科艺外网（2021年新建）">
    <div class="top-right">
      <!-- FIXME: ul后面的a，每一个都应该还有下拉菜单，然后跳转到对应的内容，这部分还没写      -->
      <ul>
        <li>
          <a>学校概况</a>
        </li>
        <li>
          <a>走进校园</a>
        </li>
        <li>
          <a>机构设置</a>
        </li>
        <li>
          <a>人才招聘</a>
        </li>
        <li>
          <a>招生就业</a>
        </li>
        <li>
          <a>交流合作</a>
        </li>
        <li>
          <a>绿色校园</a>
        </li>
        <li>
          <a>图书馆</a>
        </li>
        <li>
          <a>校内资源</a>
        </li>
      </ul>
      <a class="top-yza">院长书记信箱ky@zstu.edu.cn</a>

      <div style="display: inline-block;">
        <input>
        <img src="../../../public/images/top/ss.png" style="width: 25px; height: 25px">
      </div>

    </div>
  </div>
</template>

<style scoped>
.topbar {
  display: flex;
  justify-content: space-between;
  background-image: url("../../../public/images/top/bjj.png");
  background-repeat: repeat;
  width: 100%;
  height: 120px;
  position: fixed;
  z-index: 999;
  top: 0;
  left: 0;
}

.topbar img {
  width: 429px;
  height: 103px;
}

.topbar .top-right {
  width: 689px;
  margin-right: 50px;
  text-align: center;
}

.topbar .top-right ul {
  display: flex;
  justify-content: right;
  list-style-type: none;
  margin-top: 20px;
  height: 40px;
  line-height: 40px;
}

.topbar .top-right ul li {
  margin-left: 9px;
}

.topbar .top-right ul li a {
  color: #ffffff;
  width: 68px;
  height: 36px;
  font-size: 16px;
}

.topbar .top-right .top-yza {
  color: #ffffff;
  width: 68px;
  height: 36px;
  font-size: 16px;
  margin-right: 50px;
  margin-top: 25px;
}

.topbar .top-right input {
  background: none;
  border: none;
  height: 29px;
  line-height: 29px;
  color: #fff;
  border-bottom: 1px solid #ccc;
}

input:focus {
  outline: none;
}

</style>