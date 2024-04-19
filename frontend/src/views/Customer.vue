<template>
  <div class="container">
    <div class="left-section">
      <div class="customer-name">
        <h2>The Customer Name</h2>
        <p>Last Login</p>
      </div>
      <div class="upload-buttons">
        <button @click="uploadCustomers">Upload customers</button>
        <button @click="uploadContactPersons">Upload contact persons</button>
        <button @click="uploadAddresses">Upload addresses</button>
      </div>
    </div>
    <div class="right-section">
      <h1>Customers</h1>
      <input type="text" v-model="searchTerm" placeholder="Search by name, handle, or email" />
      <ul>
        <li v-for="customer in filteredCustomers" :key="customer.handle">
          <h3>{{ customer.first }} {{ customer.last }}</h3>
          <p>Handle: {{ customer.handle }}</p>
          <p>Last login: {{ customer.lastLogin }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      lastLogin: '',
      searchTerm: '',
      customers: [
        {
          first: 'Mark',
          last: 'Jacob',
          handle: 'mdo',
          lastLogin: '2022.05.15 14:25:25',
        },
        {
          first: 'Otto',
          last: 'Thornton',
          handle: '@fat',
          lastLogin: '2022.05.16 10:30:00',
        },
        {
          first: 'Larry',
          last: 'the Bird',
          handle: '@twitter',
          lastLogin: '2022.05.14 12:15:45',
        },
      ],
    };
  },
  computed: {
    filteredCustomers() {
      return this.customers.filter(customer => {
        return (
          customer.first.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          customer.last.toLowerCase().includes(this.searchTerm.toLowerCase()) ||
          customer.handle.toLowerCase().includes(this.searchTerm.toLowerCase())
        );
      });
    },
  },
  methods: {
    uploadCustomers() {
      // handle upload of customers
    },
    uploadContactPersons() {
      // handle upload of contact persons
    },
    uploadAddresses() {
      // handle upload of addresses
    },
  },
};
</script>

<style>
.container {
  display: flex;
  flex-wrap: wrap;
  width: 100%;
}

.left-section {
  width: 20%;
}

.customer-name {
  margin-bottom: 20px;
}

input[type=text] {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}

.upload-buttons {
  margin-top: 30px;
}

button {
  background-color: #4CAF50;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
  margin-bottom: 10px;
}

.right-section {
  width: 80%;
  padding: 20px;
  box-sizing: border-box;
}

h1 {
  margin-top: 0;
}

input[type=text] {
  width: 50%;
  padding: 10px;
  box-sizing: border-box;
  margin-top: 5px;
  margin-bottom: 20px;
}
</style>