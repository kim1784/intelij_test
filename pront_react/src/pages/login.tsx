import React, {ReactElement, useEffect, useState} from "react";
import axios from "axios";
import {Link, useNavigate} from "react-router-dom";


const LoginComponent = (): ReactElement => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("")

    const Navigate = useNavigate();

    // useEffect(() => {
    //     axios.get('/auth/login')
    //         .then(res => console.log(res))
    //         .catch()
    // }, []);



    const handleLogin = (e: any) => {
        e.preventDefault();
        if (!username) {
            alert("id를 입력해주세요")
        } else if (!password) {
            alert("pass를 입력해주세요")
        } else {

            axios.put("/auth/login", {
                params: {
                    "id": username,
                    "pw": password
                }
            })
                .then((res) => {
                    console.log(res.data);
                    if (res.data.resultCode === -1) {
                        alert('해당 계정이 존재하지 않습니다')
                    } else if (res.data.resultCode === -2) {
                        alert('입력하신 계정 및 비밀번호 가 일치하지 않습니다.')
                    } else if (res.data.resultCode === 1) {
                        // id, pw 모두 일치 userId = userId1, msg = undefined
                        console.log('======================', '로그인 성공')
                        sessionStorage.setItem('ID', username);
                        Navigate('/main');
                    }
                });

        }

    }
    return (
        <div>
            <h2>Login</h2>
            <form>
                <label>
                    Username:
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </label>
                <br/>
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br/>
                <button type="button" onClick={handleLogin}>
                    Login
                </button>

                <br/>

                {/*<button type="button" onClick={<Link to ="/signup">}>*/}
                {/*    회원가입*/}
                {/*</button>*/}
            </form>
        </div>
    )

}

export default LoginComponent;