import React, {useState} from "react";
import {Axios} from "axios";
import { useNavigate } from "react-router-dom";

export const FindComponent = () => {
    const [useremail, setemail] = useState("");
    const [userid, setid] = useState("");

    const Navigate = useNavigate();

    const findid = (e) => {

    }

    const changepw = (e) => {

    }

    return (
        <div>
            <form>
                <label>email</label>
                <input
                    type="text"
                    value={useremail}
                    onChange={(e) => setemail(e.target.value)}
                />
                <button type="button" onClick={findid}>
                    아이디 찾기
                </button>
            </form>
            <hr/>
            <br/>
            <form>
                <label>ID</label>
                <input
                    type="text"
                    value={userid}
                    onChange={(e) => setid(e.target.value)}
                />
                <label>email</label>
                <input
                    type="text"
                    value={useremail}
                    onChange={(e) => setemail(e.target.value)}
                />
                <button type="button" onClick={changepw}>
                    비밀번호 변경
                </button>
            </form>
        </div>
)


}