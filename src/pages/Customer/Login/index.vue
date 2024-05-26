<template>
    <div class="bgr">
        <div class="container" id="step1">
            <h2>Enter Email</h2>
            <form @submit.prevent="verifyEmail">
                <input type="email" v-model="email" placeholder="Email" required>
                <button v-if="isEmailComplete" type="submit" @click="sendOtp()">Continue</button>
            </form>
        </div>

        <div class="container hide" id="step2">
            <h2>Enter OTP</h2>
            <div id="otpForm" class="show-inputs">
                <input
                    v-for="(digit, index) in otp"
                    :key="index"
                    v-model="otp[index]"
                    class="otp"
                    type="text"
                    :id="'otp' + (index + 1)"
                    :name="'otp' + (index + 1)"
                    maxlength="1"
                    @input="moveToNext(index + 1)"
                />
                <input type="submit" v-if="isOtpComplete" value="Login" @click="Login">
            </div>
        </div>
    </div>
</template>
<script>
import { verifyEmail, moveToNext, setupEventListeners } from '@/assets/js/login_customer';
import { onMounted, ref } from 'vue';
import axios from '@/axiosConfig';
import Toast from "@/toastConfig";
import $ from "jquery";
// import AuthService from "@/services/AuthService";

export default {
    name: "Login-Customer",
    setup () {
        const step = ref( 1);
        const email = ref( '',);
        const otp = ref( ['', '', '', '']);
        onMounted(() => {
            document.body.style.fontFamily = 'Arial, sans-serif';
            document.body.style.backgroundColor = '#f2f2f2';
            document.body.style.margin = '0';
            document.body.style.padding = '0';
            document.body.style.display = 'flex';
            document.body.style.justifyContent = 'center';
            document.body.style.alignItems = 'center';
            document.body.style.height = '100vh';
            setupEventListeners();
        });
        const sendOtp = () => {
            var payload = {
                'email' : email.value
            }
            axios
                .post('khach-hang/send-mail-otp', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        const Login = () => {
            var payload = {
                'email'     : email.value,
                'password'       : otp.value.join(""),
            }
            axios
                .post('khach-hang/login', payload)
                .then((res) => {
                    if (res.data.status == 1) {
                        Toast('success', res.data.message);
                        localStorage.setItem("khach_hang", JSON.stringify(res.data));
                        setInterval(() => {
                            window.location.href = "/";
                        }, 2000);
                    }
                })
                .catch((res) => {
                    $.each(res.response.data.errors, function(k, v) {
                        Toast('error', v[0]);
                    });
                });
        }
        
        return { verifyEmail, moveToNext, step, email, otp, Login, sendOtp };
    },
    computed: {
        isOtpComplete() {
            return this.otp.every(digit => digit.trim() !== '');
        },
        isEmailComplete() {
            const emailPattern = /^[a-zA-Z0-9._-]+@gmail\.com$/;
            return emailPattern.test(this.email);
        }
    }
}
</script>

<style scoped>

h2 {
    display: block;
    font-size: 1.5em;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
    font-weight: bold;
    unicode-bidi: isolate;
}
.container {
    background-color: #a98a8a;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    width: 400px;
    text-align: center;
    transition: transform 0.3s ease-in-out;
}

.container h2 {
    margin-bottom: 20px;
}

div {
    display: block;
    unicode-bidi: isolate;
}

.container input[type="text"],
.container input[type="email"] {
    width: 100%;
    padding: 12px 20px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
    font-size: 16px;
    transition: transform 0.3s ease-in-out;
}

.container input[type="text"]:focus,
.container input[type="email"]:focus {
    transform: scale(1.1);
}

.container input[type="submit"],
.container button {
    background-color: #4caf50;
    color: white;
    padding: 12px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
    width: 100%;
    margin-top: 20px;
    transition: background-color 0.3s;
}

.container input[type="submit"]:hover,
.container button:hover {
    background-color: #45a049;
}

.hide {
    display: none;
}

.container input[class="otp"] {
    width: 50px;
    padding: 10px;
    margin: 0 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    text-align: center;
}
.container input[type="email"]:hover {
    background-color: unset;
}
</style>
