<template>
  <div class="container">
    <div class="table-container">
      <table>
        <thead>
          <tr>
            <th>Size in mm</th>
            <th>Type</th>
            <th>Price</th>
            <th>Ideal for</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(row, index) in data" :key="index">
            <td>{{ row[0] }}</td>
            <td>{{ row[1] }}</td>
            <td>{{ row[2] }}</td>
            <td>{{ row[3] }}</td>
          </tr>
        </tbody>
      </table>
      <div class="image-container">
        <img :src="imageSrc" alt="Sign placement" />
      </div>
    </div>
  </div>
</template>

<script>
import Sign from "../../assets/images/sign-chalet.png"
export default {
  data() {
    return {
      data: [
        ['220 x 300', 'Large', '20.00 CHF', 'Fence and garden'],
        ['190 x 250', 'Medium', '15.00 CHF', 'Fence'],
        ['105 x 140', 'Intermediate', '12.00 CHF', 'Chalet exterior'],
        ['75 x 105', 'Small', '09.50 CHF', 'Chalet main and all doors'],
        ['75 x 105', 'Small', 'FREE', 'Windows on ground level']
      ],
      imageSrc: Sign
    };
  }
};
</script>

<style scoped>
.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-top: 30px;
}

.table-container {
  display: flex;
  flex: 1;
  flex-direction: row;
}

table {
  width: 70%;
  border-collapse: collapse;
  table-layout: fixed;
}

th, td {
  border-bottom: solid 1px #ddd !important; 
  padding: 8px;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

.image-container {
  width: 30%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-left: 20px;
}

.image-container img {
  max-width: 100%;
  height: auto;
  border-radius: 6px;
}

@media (max-width: 992px) {
  th, td {
    font-size: 14px;
  }
}

@media (max-width: 768px) {
  .table-container {
    flex-direction: column;
    align-items: center;
  }

  table {
    width: 100%;
  }

  .image-container {
    width: 100%;
    padding-left: 0;
    margin-top: 20px;
  }

  .image-container img {
    width: 100%;
  }

  th, td {
    font-size: 12px;
  }
}
</style>
