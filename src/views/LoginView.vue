<template>
    <div class="container">
        <div class="main">
            <input type="checkbox" id="chk" aria-hidden="true">

            <div class="signup">
                <div>
                    <label for="chk" aria-hidden="true">Sign up</label>
                    <input type="text" name="txt" v-model="signupUsername" placeholder="User name" required="">
                    <input type="email" name="email" v-model="signupEmail" placeholder="Email" required="">
                    <div style="position: relative;">
                        <input type="password" name="pswd" v-model="signupPassword" placeholder="Password" required="" id="myInput">
                        <div class="eyebtn" v-if="password" @click="showPass()">
                            <span><v-icon color="black">mdi-eye-outline</v-icon></span>
                        </div>
                        <div class="eyebtn" @click="showPass()" v-else>
                            <span><v-icon color="black">mdi-eye-off-outline</v-icon></span>
                        </div>
                    </div>
                    <button @click="signup()">Sign up</button>
                </div>
            </div>

            <div class="login">
                <div>
                    <label for="chk" aria-hidden="true">Login</label>
                    <input type="email" name="email" v-model="loginEmail" placeholder="Email" required="">
                    <input type="password" name="pswd" v-model="loginPassword" placeholder="Password" required="">
                    <button @click="login()">Login</button>
                </div>
            </div>
        </div>
    </div>
</template>
     
    
    
<script>
import router from '@/router';
export default {
    data() {
        return {
            password: false,
            signupUsername: "",
            signupEmail: "",
            signupPassword: "",
            loginEmail: "",
            loginPassword: "",
        }
    },
    methods: {
        showPass() {
            var x = document.getElementById("myInput");
            if (x.type === "password") {
                x.type = "text";
                this.password = true;
            } else {
                x.type = "password";
                this.password = false;
            }
        },

        signup() {
            try {
                if (this.signupUsername.length === 0) {
                    return alert("Enter Username");
                }
                if (this.signupEmail.length === 0) {
                    return alert("Enter Username");
                }
                if (this.signupPassword.length === 0) {
                    return alert("Enter Password");
                }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "email": this.signupEmail,
                    "username": this.signupUsername,
                    "password": this.signupPassword
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/auth/signup", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.authtoken) {
                            return alert("Account created");
                        } else {
                            return alert("Some error occured")
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        },

        login() {
            try {
                if (this.loginEmail.length === 0) {
                    return alert("Enter  Username");
                }
                if (this.loginPassword.length === 0) {
                    return alert("Enter Password");
                }
                var myHeaders = new Headers();
                myHeaders.append("Content-Type", "application/json");

                var raw = JSON.stringify({
                    "email": this.loginEmail,
                    "password": this.loginPassword
                });

                var requestOptions = {
                    method: 'POST',
                    headers: myHeaders,
                    body: raw,
                    redirect: 'follow'
                };

                fetch("http://localhost:3000/api/v1/auth/login", requestOptions)
                    .then(response => response.json())
                    .then(result => {
                        if (result.authtoken) {
                            localStorage.setItem("token", result.authtoken);
                            router.push("/");
                            return alert("Login Successful");
                        } else {
                            return alert("Some Error Occured");
                        }
                    })
                    .catch(error => console.log('error', error));
            } catch (error) {
                console.log(error);
            }
        }
    }
}
</script>
    
     
<style scoped>
.eyebtn {
    position: absolute;
    top: 0;
    right: 0;
    margin-right: 80px;
    margin-top: 7px;
    cursor: pointer;
}
.container {
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    font-family: 'Jost', sans-serif;
    background: linear-gradient(to bottom, #8e86d9, #474092, #2f2f75);
}

.main {
    width: 350px;
    height: 500px;
    background: red;
    overflow: hidden;
    background: url("https://doc-08-2c-docs.googleusercontent.com/docs/securesc/68c90smiglihng9534mvqmq1946dmis5/fo0picsp1nhiucmc0l25s29respgpr4j/1631524275000/03522360960922298374/03522360960922298374/1Sx0jhdpEpnNIydS4rnN4kHSJtU1EyWka?e=view&authuser=0&nonce=gcrocepgbb17m&user=03522360960922298374&hash=tfhgbs86ka6divo3llbvp93mg4csvb38") no-repeat center/ cover;
    border-radius: 10px;
    box-shadow: 5px 20px 50px #000;
}

#chk {
    display: none;
}

.signup {
    position: relative;
    width: 100%;
    height: 100%;
}

label {
    color: #fff;
    font-size: 2.3em;
    justify-content: center;
    display: flex;
    margin: 60px;
    font-weight: bold;
    cursor: pointer;
    transition: .5s ease-in-out;
}

input {
    width: 60%;
    height: 20px;
    background: #e0dede;
    justify-content: center;
    display: flex;
    margin: 20px auto;
    padding: 20px;
    border: none;
    outline: none;
    border-radius: 5px;
}

input:hover {
    border: 1px solid purple;
}

button {
    width: 60%;
    height: 40px;
    margin: 10px auto;
    justify-content: center;
    display: block;
    color: #fff;
    background: #8466bb;
    font-size: 1em;
    font-weight: bold;
    margin-top: 20px;
    outline: none;
    border: none;
    border-radius: 5px;
    transition: .2s ease-in;
    cursor: pointer;
}

button:hover {
    background: #6d44b8;
}

.login {
    height: 460px;
    background: #eee;
    border-radius: 60% / 10%;
    transform: translateY(-180px);
    transition: .8s ease-in-out;
}

.login label {
    color: #573b8a;
    transform: scale(.5);
}

#chk:checked~.login {
    transform: translateY(-500px);
}

#chk:checked~.login label {
    transform: scale(1);
}

#chk:checked~.signup label {
    transform: scale(.5);
}
</style>