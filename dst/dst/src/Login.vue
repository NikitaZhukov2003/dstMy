<script>


export default {
  data() {
    return {
      email: '',
      password: '',
      accessToken: '',
    }
  },
  methods: {

    getLogin() {
      fetch('http://localhost:8080/signin', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          email: this.email,
          password: this.password

        })
      })
          .then((response) => {
            if (response.ok) {
              return response.json();
            }
          }).then((data) => {
        if (data) {
          localStorage.setItem('accessToken', this.accessToken);
          console.log(data.accessToken);
        }
      })
    }
  }
}

</script>

<template>
  <div class="wrapper-login">
    <form action="">
      <h1>Вход</h1>
    <div class="input_box">
      <input  type="email" v-model="email" placeholder="Логин" required>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1) ;"><path d="M12 2a5 5 0 1 0 5 5 5 5 0 0 0-5-5zm0 8a3 3 0 1 1 3-3 3 3 0 0 1-3 3zm9 11v-1a7 7 0 0 0-7-7h-4a7 7 0 0 0-7 7v1h2v-1a5 5 0 0 1 5-5h4a5 5 0 0 1 5 5v1z"></path></svg>
    </div>
    <div class="input_box">
      <input  type="password" v-model="password" placeholder="Пароль" required>
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" style="fill: rgba(0, 0, 0, 1);"><path d="M12 2C9.243 2 7 4.243 7 7v2H6c-1.103 0-2 .897-2 2v9c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-9c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v2H9V7zm9.002 13H13v-2.278c.595-.347 1-.985 1-1.722 0-1.103-.897-2-2-2s-2 .897-2 2c0 .736.405 1.375 1 1.722V20H6v-9h12l.002 9z"></path></svg>
    </div>
    <button @click="getLogin(email, password)" type="submit" class="bth">Войти</button>
    <div class="login-link">
      <p>Нет аккаунта?
        <router-link to="/registration">Зарегистрироваться</router-link>  </p>
    </div>
  </form>
</div>

</template>

<style scoped>
.wrapper-login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;
  padding-top: 20px;
  height: 400px;
  width: 600px;
  background: rgb(68,185,207);
  background: radial-gradient(circle, rgba(68,185,207,1) 0%, rgba(148,25,249,1) 100%);
  box-shadow: 0 5px 10px 0 rgba(0, 0, 0, 0.5);
  margin-left: auto;
  margin-right: auto;
  border-radius: 50px;
  }
.wrapper-login h1 {
  display: flex;
  justify-content: center;
  font-size: 40px;
}

.wrapper-login .input_box {
  position: relative;
  width: 400px;
  height: 50px;
  margin: 30px 0;
}

.input_box input {
  width: 100%;
  height: 100%;
  outline: none;
  background: #a3b7f6;
  border: 2px solid #44b9cf;
  border-radius: 50px;
  font-size: 16px;
  color: black;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: -15px;

}
.input_box input::placeholder {
  color: black;
}
.input_box svg {
  position: absolute;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
  font-size: 20px;
}
.wrapper-login button {
  width: 400px;
  height: 50px;
  border-radius: 50px;
  border: none;
  outline: none;
  background: #44b9cf;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  cursor: pointer;
  margin-top: 30px;
}
.wrapper-login .login-link {
  display: flex;
  font-size: 20px;
  margin-top: 20px;
  justify-content: center;
}


</style>