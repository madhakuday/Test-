import React, { useEffect, useState, useContext } from 'react'
import { useNavigate } from "react-router-dom"


// import React, { useEffect, , } from 'react'
import { usercontext } from "../App"



const About = () => {

    const [userdata, setuserdata] = useState('')
    const [state, dispatch] = useContext(usercontext)


    const callAboutpage = async () => {
        try {
            const res = await fetch("/about", {
                method: "GET",
                headers: {
                    Accept: "application/json",
                    "Content-Type": "application/json"
                },
                credentials: "include"
            })

            const data = await res.json()

            if (!data) {
                navigate("/login")
            }

            setuserdata(data)

        } catch (error) {
            if (error) {
                navigate("/login", { replace: true })
            }
        }
    }



    useEffect(() => {
        callAboutpage()

    }, [])



    const navigate = useNavigate()



    return (
        <>

            <div className="card mb-3" style={{ maxwidth: "540px" }}>
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src="..." className="img-fluid rounded-start" alt="..." />
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title">name :{userdata.name}</h5>
                            <h5 className="card-title">email : {userdata.email}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default About