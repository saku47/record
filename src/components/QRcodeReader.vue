<template>
  <div class>
    <p class="error">{{ error }}</p>

    <qrcode-stream class="QRcodeReader" @decode="onDecode" @init="onInit" />

    <table>
      <thead>
        <tr>
          <th>デバイス名</th>
          <th>×</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in list" :key="item.id">
          <td>{{item}}</td>
          <td>
            <button type="button" class="btn btn-danger">削除</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";

export default {
  components: { QrcodeStream },

  data() {
    return {
      result: "",
      list: [],
      error: ""
    };
  },

  methods: {
    onDecode(result) {
      this.result = result;
      const flag = this.list.some(value => value == result);
      if (!flag) {
        this.list.push(result);
      } else {
        alert("読み込み済み");
      }
    },

    async onInit(promise) {
      try {
        await promise;
      } catch (error) {
        if (error.name === "NotAllowedError") {
          this.error = "ERROR: you need to grant camera access permisson";
        } else if (error.name === "NotFoundError") {
          this.error = "ERROR: no camera on this device";
        } else if (error.name === "NotSupportedError") {
          this.error = "ERROR: secure context required (HTTPS, localhost)";
        } else if (error.name === "NotReadableError") {
          this.error = "ERROR: is the camera already in use?";
        } else if (error.name === "OverconstrainedError") {
          this.error = "ERROR: installed cameras are not suitable";
        } else if (error.name === "StreamApiNotSupportedError") {
          this.error = "ERROR: Stream API is not supported in this browser";
        }
      }
    }
  }
};
</script>

<style scoped>
.error {
  font-weight: bold;
  color: red;
}
.QRcodeReader {
  width: 300px;
  height: 300px;
}
</style>