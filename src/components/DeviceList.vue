<template>
  <div class="history">
    <h1>デバイスリスト</h1>
    <div class="right">
      <router-link to="/QRcodeGenerator">
        <button type="button" class="btn btn-success">デバイス登録</button>
      </router-link>
    </div>
    <table class="table">
      <tr>
        <th>デバイス名</th>
        <th>貸出状況</th>
        <th>登録日</th>
        <th>削除</th>
      </tr>
      <tr>
        <td>USB1</td>
        <td>貸出中</td>
        <td>10/19 20:30</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
        </td>
      </tr>
      <tr>
        <td>USB２</td>
        <td>保管</td>
        <td>10/19 20:30</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
        </td>
      </tr>
      <tr>
        <td>Lenovo充電器</td>
        <td>保管</td>
        <td>10/19 20:30</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
        </td>
      </tr>
      <tr>
        <td>カメラ</td>
        <td>貸出中</td>
        <td>10/19 20:30</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
        </td>
      </tr>
      <tr>
        <td>掃除機</td>
        <td>貸出中</td>
        <td>10/19 20:30</td>
        <td>
          <button type="button" class="btn btn-danger" @click="deleteItem(index)">削除</button>
        </td>
      </tr>
    </table>
  </div>
</template>


<script>
export default {
  name: "Aside"
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