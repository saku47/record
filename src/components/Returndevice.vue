<template>
  <div class>
    <p class="error">{{ error }}</p>

    <qrcode-stream class="QRcodeReader" @decode="onDecode" @init="onInit" />
    <div class="box">
      <table class="table">
        <thead class="scrollHead">
          <tr>
            <th scope="col">デバイス名</th>
          </tr>
        </thead>
        <tbody class="scrollBody">
          <tr v-for="(item, index) in list" :key="item.id">
            <td class="name">{{item}}</td>
            <td class="button">
              <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <button @click="return_device()">決定</button>
    </div>
  </div>
</template>

<script>
import { QrcodeStream } from "vue-qrcode-reader";
import { db } from "../firebase";

export default {
  components: { QrcodeStream },

  data() {
    return {
      result: "",
      list: [],
      error: "",
      devices: []
    };
  },
  created() {
    db.collection("devices")
      .get()
      .then(snap => {
        const array = [];
        snap.forEach(doc => {
          array.push(doc);
        });
        this.devices = array;
      });
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

    deleteItem: function(index) {
      this.list.splice(index, 1);
    },
    return_device: function() {
      //const returnAt = new Date();

      //貸出フラグ
      this.list.forEach(function(id) {
        //     const array = this.devices;
        //   const hisi = array.find(p => p.id == id);

        db.collection("devices")
          .doc(id)
          .update({
            borrow: false
          });
      });

      alert("返しました．");
      this.list = [];
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
  margin: 10px auto;
}

.box {
  width: 60%;
}

/*スクロール用*/
thead.scrollHead,
tbody.scrollBody {
  display: block;
}
tbody.scrollBody {
  overflow-y: scroll;
  height: 200px;
}

.table {
  margin: 0;
}

.name {
  width: 80%;
}

.button {
  display: block;
  width: 20%;
  margin: 0 0 0 auto;
  float: right;
}
</style>