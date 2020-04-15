
//引入axios
import axios from "axios"
class Login {
    constructor() {
        this.init()
    }
    init() {
        this.login()
    }
    login() {
        //点击按钮登录
        //点击按钮发送请求
        const input = document.querySelectorAll("input")

        const btns = document.querySelector(".btns");
        btns.onclick = () => {
            let [userValue, pwdValue] = Array.from(input, el => el.value);
            axios.post("/api/login", {
                userValue, pwdValue
            }).then(res => {
                console.log(res)
            })
        }
    }
}

export default Login;