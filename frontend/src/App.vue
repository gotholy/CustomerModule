<template>
  <div id="login">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <label for="username">Username:</label>
      <input v-model="username" type="text" id="username" name="username" required />
      <br />
      <label for="password">Password:</label>
      <input v-model="password" type="password" id="password" name="password" required />
      <br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      loginSuccess: false,
      loginFailure: false
    }
  },
  methods: {
    login() {
      if (this.username === 'User' && this.password === 'Password') {
        this.loginSuccess = true
        this.loginFailure = false
      } else {
        this.loginSuccess = false
        this.loginFailure = true
      }
    }
  }
}
</script>
<style>
#login {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

form {
  width: 100%;
  max-width: 400px;
  
}

label {
  display: block;
  margin-top: 20px;
}

input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  box-sizing: border-box;
}

button[type="submit"] {
  width: 100%;
  padding: 14px 20px;
  margin: 8px 0;
  background-color: #4caf50;
  color: white;
  border: none;
  cursor: pointer;
}
</style>