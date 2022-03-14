import React, { useContext, useState } from 'react';
import { useNavigate } from "react-router-dom"
import { usercontext } from "../App"

const Login = () => {

    const [state, dispatch] = useContext(usercontext)



    const navigate = useNavigate();

    const [email, setemail] = useState('')
    const [password, setpssword] = useState('')

    const onSubmit = async (e) => {
        e.preventDefault()

        const res = await fetch('/login', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        })


        const data = await res.json()

        if (!data) {
            alert("innvalid data")
        } else {
            window.alert("Login successfully ")
            navigate("/")
            dispatch({ type: "USER", payload: true })
        }
    }


    return (
        <>
            <form method="post" className="form form-control mt-3 bg-gray-600">
                <input
                    className="mt-2 mb-2 form-control"
                    type="text"
                    placeholder="email"
                    value={email}
                    name="email"
                    onChange={(e) => setemail(e.target.value)}
                />

                <input
                    className="mt-2 mb-2 form-control"
                    type="text"
                    placeholder="password"
                    value={password}
                    name="password"
                    onChange={(e) => setpssword(e.target.value)}
                />

                <button onClick={onSubmit} className="mt-2 mb-2 btn btn-primary">login</button>

                <div className='mb-3 mt-3 text-gray-100 '>
                    <p>email : test@gmail.com</p>
                    <p>pass : 123</p>
                </div>
            </form>
        </>
    );
};

export default Login;
