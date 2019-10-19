<template>
  <div id="app">
    <div class="wrapper">
      <Header></Header>
      <Aside></Aside>
      <div class="content-wrapper">
        <router-view />
      </div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Aside from "./components/Aside";
import Footer from "./components/Footer";

export default {
  name: "app",
  components: {
    Header,
    Aside,
    Footer
  }
};
</script>