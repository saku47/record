<template>
  <aside class="main-sidebar">
    <!-- sidebar: style can be found in sidebar.less -->
    <section class="sidebar" style="height: auto;">
      <!-- Sidebar user panel -->
      <div class="user-panel">
        <div class="pull-left image"></div>
      </div>
      <!-- sidebar menu: : style can be found in sidebar.less -->
      <ul class="sidebar-menu tree" data-widget="tree">
        <li>
          <a href="pages/widgets.html">
            <i class="fa fa-align-justify"></i>
            <span>
              <router-link to="/">マイページ</router-link>
            </span>
          </a>
        </li>
        <li>
          <router-link to="/QRcodeReader">
            <i class="fa fa-arrow-right"></i>
            <span>貸出</span>
          </router-link>
        </li>
        <li>
          <router-link to="/returndevice">
            <i class="fa fa-arrow-left"></i>
            <span>返却</span>
          </router-link>
        </li>
        <li>
          <router-link to="/LendingStatus">
            <i class="fa fa-file-text-o"></i>
            <span>貸出状況</span>
          </router-link>
        </li>
        <li>
          <router-link to="/devicelist">
            <i class="fa fa-gear"></i>
            <span>デバイス一覧</span>
          </router-link>
        </li>
      </ul>
    </section>
    <!-- /.sidebar -->
  </aside>
</template>

<script>
export default {
  name: "Aside"
};
</script>
<style scoped>
h3 {
  margin: 40px 40px;
  color: white;
}
</style>