<template>
  <div class="history">
    <h1>履歴</h1>
    <div class="right"></div>
    <table class="table">
      <tr>
        <th>デバイス名</th>
        <th>ユーザ名</th>
        <th>貸出日</th>
        <th>返却情報</th>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>貸出中</td>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>10/19 20:30 返却済</td>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>貸出中</td>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>10/19 20:30 返却済</td>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>貸出中</td>
      </tr>
      <tr>
        <td>USB1</td>
        <td>宇都宮ももこ</td>
        <td>10/19 20:30</td>
        <td>貸出中</td>
      </tr>
    </table>
  </div>
</template>


<script>
import { db } from "../firebase";

export default {
  data: () => ({
    historys: []
  }),
  created() {
    db.collection("history")
      .orderBy("borrowAt", "desc")
      .get()
      .then(snap => {
        const array = [];
        snap.forEach(doc => {
          array.push(doc.data());
        });
        this.historys = array;
      });
  }
};
</script>

<style scoped>
.history {
  padding-top: 70px;
  border-radius: 20px 20px 0 0;
}

table {
  width: 70%;
  border: none;
  margin: auto;
}

table th:nth-child(1) {
  border-radius: 20px 0 0 0;
}

table th:nth-child(4) {
  border-radius: 0 20px 0 0;
}

th {
  padding: 15px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  background: #00bcd4;
}

td {
  padding: 15px;
  text-align: center;
  border: none;
}

table tr:nth-child(even) td {
  background: #f5f5f5;
}
table tr:nth-child(odd) td {
  background: #fdfdfd;
}

.right {
  margin: auto;
  width: 250px;
  margin-bottom: 54px;
}
</style>