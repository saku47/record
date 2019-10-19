<template>
<header class="main-header">
    <!-- Logo -->
    <a href="index2.html" class="logo">
      <span class="logo-lg"><b>R</b>ecord</span>
    </a>
    <!-- Header Navbar: style can be found in header.less -->
    <nav class="navbar navbar-static-top">
      <!-- Navbar Right Menu -->
      <div class="navbar-custom-menu">
      </div>
      <div class="logout">
        <a href="index2.html" class="logo">
      <span class="logo-lg">ログアウト</span>
    </a>
      </div>
    </nav>
  </header>
</template>
<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}


.logout {
  float: right;
  margin-right: 20px;
}

.container {
  width: 120px;
  background: white;
  color: black;
  box-direction: none;
}

</style>

