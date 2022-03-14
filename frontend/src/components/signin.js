import React, { useContext, useState } from 'react'
import { useNavigate } from "react-router-dom"

import { usercontext } from "../App"

function Signin() {
    const navigate = useNavigate()
    const [state, dispatch] = useContext(usercontext)


    const [user, setuser] = useState({
        name: "", email: "", password: ""
    });

    let name, value

    const handelChange = (e) => {
        name = e.target.name
        value = e.target.value

        setuser({ ...user, [name]: value })
    }

    const onPost = async (e) => {
        e.preventDefault()

        const { name, email, password } = user
        const res = await fetch("/register", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name, email, password
            })
        });

        const data = await res.json()
        if (!data) {
            alert("innvalid data")
        } else {
            alert("data add succefully ")
            navigate("/")
        }
    };

    return (
        <>
            <div className='container'>
                <form method='post' className='form-control'>

                    <input
                        value={user.name}
                        onChange={handelChange}
                        className='form-control mt-2 mb-2'
                        type="text"
                        placeholder='name'
                        name='name' />
                    <input
                        value={user.email}
                        onChange={handelChange}
                        className='form-control mt-2 mb-2'
                        type="text"
                        placeholder='email'
                        name='email'
                    />
                    <input
                        value={user.password}
                        onChange={handelChange}
                        className='form-control mt-2 mb-2'
                        type="text"
                        placeholder='password'
                        name='password'
                    />
                    <button onClick={onPost} className='btn btn-danger'>sign in</button>

                </form>
            </div>
        </>
    )
}

export default Signin