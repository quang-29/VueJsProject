<template>
    <div class="container">
        <div class="image-section">
            <div class="overlay"></div>
        </div>
        
        <div class="signup-section">
            <div class="signup-container">
            <h2>SIGN UP</h2>
                <div class="form-section">
                    <span class="label">
                        Gmail
                    </span>
                    <input type="email" placeholder="Gmail..." name="gmail">
                </div>
                <div class="form-section">
                    <span
                     class="label">
                        Username
                    </span>
                    <input type="text" placeholder="Username..." name="username">
                </div>
                 <div class="form-section">
                    <span class="label">
                        Phone Number
                    </span>
                    <input type="text" placeholder="Phone Number..." name="gmail">
                </div>
                <div class="form-section">
                    <span class="label">
                        Password
                    </span>
                    <input type="password" placeholder="Password..." name="password">
                </div>
                <button class="btn-submit">
                    SIGN UP
                </button>
                <div class="addition-info">
                    <span class="signup">
                        <RouterLink to='/signIn' class="login-link">
                           Log In
                        </RouterLink></span>
                    <span class="forgetPassword">Quên mật khẩu?</span>
                </div>

        </div>
        </div>
        
    </div>

</template>

<style>
html, body {
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
.login-link {
  color: #0077ff;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.login-link:hover {
  color: #0056cc;
  text-decoration: underline;
}

</style>

<script setup>
</script>