import React, { useEffect, useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { usercontext } from "../App"

function Logout() {
    const [state, dispatch] = useContext(usercontext)

    const navigate = useNavigate()

    useEffect(async () => {

        return fetch("/logout", {
            method: 'get',
            method: "GET",
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json"
            },
            credentials: "include"
        }).then((res) => {

            dispatch({ type: "USER", payload: false })
            navigate("/login")

            if (res.status !== 200) {
                const error = new Error(res.error)
                throw error
            }
        }).catch((err) => { console.log(err); })
    }, [])

    return (
        <div>Logout</div>
    )
}

export default Logout