// import React, {useState} from "react";
// import axios from "axios";
// // import {PRI_PATH} from "../constants/path"
// import {useNavigate} from "react-router-dom";

// const SignUpComponent = () => {
//     const [userid, setUserid] = useState("");
//     const [password, setPassword] = useState("");
//     const [username, setUsername] = useState("");
//     const navigate = useNavigate()

//     const handleSignUp = (e) => {
//         // try {
//         //     e.preventDefault();
//         //     if (!userid) {
//         //         alert("id를 입력해주세요")
//         //     } else if (!password) {
//         //         alert("pass를 입력해주세요")
//         //     } else {
//         //         axios.post( "http://localhost:5000/user/signup", {"id": userid, "pw": password, "name": username})
//         //             .then((res) => {
//         //                 console.log(res);
//         //                 if (res.data.resultcode === -1) {
//         //                     alert("해당 계정이 존재, 회원가입 실패");
//         //                 } else {
//         //                     console.log('회원가입 성공');
//         //                     sessionStorage.setItem('ID', userid);
//         //                     navigate('/main');
//         //                 }
//         //             }
//         //         )


//         //     }
//         // } catch(error) {
//         //     console.log("회원 가입 중 오류 : ", error);
//         // }

//     }
//     return (
//         <div>
//             <form>
//                 <h2>회원가입</h2>
//                 <label>아이디</label>
//                 <input
//                     type="text"
//                     value={userid}
//                     onChange={(e) => setUserid(e.target.value)}
//                 />
//                 <br/>
//                 <label>비밀번호</label>
//                 <input
//                     type="password"
//                     value={password}
//                     onChange={(e) => setPassword(e.target.value)}
//                 />
//                 <br/>
//                 <label>이름</label>
//                 <input
//                     type="text"
//                     value={username}
//                     onChange={(e) => setUsername(e.target.value)}
//                 />
//                 <button type="button" onClick={handleSignUp}>
//                     회원가입
//                 </button>
//             </form>
//         </div>
//     )
// };

// export default SignUpComponent;