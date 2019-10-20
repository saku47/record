<template>
  <div class="center">
    <div>
      <label>デバイス名</label>
      <input class="textbox" type="text" v-model="inputText" />
      <input class="btn btn-success" type="button" @click="generate" value="生成" />
    </div>
    <ul class="QRblock" v-if="targetText">
      <li class="QRcode" v-for="text in targetText" :key="text.id">
        <vue-qrcode value="text" :options="option" tag="img"></vue-qrcode>
        <ul class="test">
          <li class="QRinfo QRtitle">
            {{text}}
            <input
              class="btn btn-danger"
              type="button"
              @click="delete_qrcode(text.id)"
              value="削除"
            />
          </li>
        </ul>
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
        margin: 5,
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
      const flg = this.targetText.some(value => value == this.inputText);
      if (flg == false) {
        this.targetText.push(this.inputText);
      } else {
        alert("生成済みです");
      }
    },
    delete_qrcode: function(index) {
      this.targetText.splice(index, 1);
    }
  }
};
</script>
<style scoped>
.QRcode {
  list-style: none;
}
.QRinfo {
  margin: 0 auto;
  list-style: none;
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 20px;
}
.QRblock {
  padding: 15px;
}
.center {
  text-align: center;
}
.test {
  margin: 0 auto;
}
</style>