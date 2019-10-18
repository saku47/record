<template>
  <div>
    <div>
      <label>文字列</label>
      <input type="text" v-model="inputText">
      <input type="button" @click="generate" value="生成">
    </div>
    <ul v-if="targetText">
      <li v-for="text in targetText" :key="text.id">
        <p>{{text}}</p>
        <vue-qrcode value="text" :options="option" tag="img"></vue-qrcode>
      </li>

    </ul>
  </div>
</template>

<script>
import VueQrcode from "@chenfengyuan/vue-qrcode";
export default {
  components: {
    VueQrcode
  },
  data() {
    return {
      inputText: "",
      targetText: [],
      option: {
        errorCorrectionLevel: "M",
        maskPattern: 0,
        margin: 10,
        scale: 2,
        width: 300,
        color: {
          dark: "#000000FF",
          light: "#FFFFFFFF"
        }
      }
    };
  },
  methods: {
    generate: function() {
      this.targetText.push(this.inputText);
    }
  }
};
</script>
<style scoped>

</style>