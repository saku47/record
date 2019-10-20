<template>
  <div class="history">
    <table>
      <tr>
        <th>デバイス名</th>
        <th>貸出状況</th>
        <th>メモ</th>
        <th>削除</th>
      </tr>
      <tr>
        <td>USB1</td>
        <td>貸出中</td>
        <td>10/19 20:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
      <tr>
        <td>さくら</td>
        <td>充電気２</td>
        <td>10/19 18:10</td>
        <td>10/19 19:00</td>
        <td>10/19 18:30</td>
      </tr>
    </table>
  </div>
</template>


<script>
import { db } from "../firebase";

export default {
  data: () => ({
    devices: []
  }),
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
  }
};
</script>


<style scoped>
.history {
  padding-top: 100px;
}

table {
  width: 70%;
  border-collapse: collapse;
  margin: auto;
}
th {
  border-bottom: 2px solid #000;
  padding: 15px;
  text-align: center;
}
td {
  padding: 15px;
  text-align: center;
  border-bottom: 1px solid #4682b4;
}
</style>