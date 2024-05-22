<template>
    <div>
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
            <td>{{ row[4] }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        data: [
          ['220 x 300', 'Large', '20.00 CHF', 'Fence and garden'],
          ['190 x 250', 'Medium', '15.00 CHF', 'Fence'],
          ['105 x 140', 'Intermediate', '12.00 CHF', 'Chalet exterior'],
          ['75 x 105', 'Small', '09.50 CHF', 'Chalet main and all doors'],
          ['75 x 105', 'Small', 'FREE', 'Windows on ground level']
        ]
      };
    }
  };
  </script>
  
  <style>
  table {
    width: 100%;
    border-collapse: collapse;
    margin-top: 30px;
    table-layout: fixed;
  }
  
  th, td {
    border-bottom: solid 1px #ddd !important; 
    padding: 8px;
    text-align: left;
    width: 25%; /* Ensures each column gets equal width */
  }
  
  th {
    background-color: #f2f2f2;
  }
  </style>
  