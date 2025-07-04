<script setup>
import { reactive, ref } from 'vue'
import axios from 'axios'
import Swal from 'sweetalert2'
import { useRouter } from 'vue-router'


const user = reactive({
  email: '',
  password: ''
})

const user_info = reactive({
  id: '',
  email: '',
  username: ''

})
const router = useRouter()

const handleSignIn = async () => {
  console.log(user)

  if (user.email == '' || user.password == '') {
    Swal.fire({
      title: "Vui lòng nhập đủ thông tin",
      icon: "warning",
      draggable: true
    });
    return;
  }
  try {
    const result = await axios.post("http://localhost:8080/api/v1/user/login", {
      email: user.email,
      password: user.password
    });
    if (result.status === 200) {
      const token = result.data.token;
      user_info.id = result.data.id
      user_info.email = result.data.email
      user_info.username = result.data.username
      localStorage.setItem('user-info', JSON.stringify(user_info));
      localStorage.setItem('token', token);


      if(user_info.email == 'admin@gmail.com'){
        router.push('administrator')
      } else {
        router.push({ name: 'home' }).then(() => {
        window.location.reload()
      })
      }
      
      

    }
  } catch (error) {
    if (error.response) {
      Swal.fire({
        title: error.response.data.message,
        icon: "error",
        draggable: true
      });
    } else {
      Swal.fire({
        title: "Không thể kết nối đến server. Vui lòng thử lại sau!",
        icon: "error",
        draggable: true
      });
    }
    console.error("Chi tiết lỗi:", error);
  }
}

const handleLogIn = () => {
  router.push({ name: 'home' })
}

</script>


<template>
  <div class="container">
    <div class="image-section">
      <div class="overlay"></div>
    </div>

    <div class="signup-section">
      <div class="signup-container">
        <h2>LOG IN</h2>
        <div class="form-section">
          <span class="label">
            Email
          </span>
          <input v-model="user.email" type="email" placeholder="Email..." name="gmail">
        </div>
        <div class="form-section">
          <span class="label">
            Password
          </span>
          <input v-model="user.password" type="password" placeholder="Password..." name="password">
        </div>
        <button class="btn-submit" @click="handleSignIn">
          LOG IN
        </button>

        <div class="addition-info">
          <span class="signup">
            <RouterLink to='/signUp' class="signup-link">Sign Up</RouterLink>
          </span>
          <span class="forgetPassword">Quên mật khẩu?</span>
        </div>

      </div>
    </div>

  </div>
</template>


<style>
.html,
body {
  margin: 0;
  padding: 0;
  font-family: 'Segoe UI', sans-serif;
  height: 100%;
  overflow: hidden;
}

.container {
  position: relative;
  height: 100vh;
  width: 100%;
}

.image-section {
  background-image: url('https://benjweinberg.com/wp-content/uploads/2023/05/photo-1602451056370-aeef24c0648b.jpeg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  height: 100%;
  width: 100%;
  position: relative;
}

.overlay {
  position: absolute;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 1;
}

.signup-section {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  background-color: rgba(255, 255, 255, 0.95);
  padding: 20px 30px;
  border-radius: 16px;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
}

.signup-container {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.signup-container h2 {
  text-align: center;
  margin-bottom: 24px;
  font-size: 28px;
  color: #333;
}

.form-section {
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
}

.label {
  font-weight: 600;
  margin-bottom: 6px;
  color: #333;
  font-size: 12px;
}

input {
  padding: 12px 16px;
  border: 1px solid #ccc;
  border-radius: 8px;
  font-size: 15px;
  outline: none;
  transition: border-color 0.3s ease;
}

input:focus {
  border-color: #0077ff;
}

.btn-submit {
  margin-top: 16px;
  padding: 14px;
  background-color: #0077ff;
  color: white;
  font-weight: bold;
  font-size: 16px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.btn-submit:hover {
  background-color: #005ed3;
}

.addition-info {
  color: black;
  font-size: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 20px;
}

.forgetPassword {
  color: #ff4d4d;
  cursor: pointer;
}

.addition-info .forgetPassword:hover {
  text-decoration: underline;

}

.addition-info .signup {
  cursor: pointer;
}

.signup-link {
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.signup-link :hover {
  color: #0056cc;
  text-decoration: underline;
}
</style>