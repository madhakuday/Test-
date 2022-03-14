import React, { useContext, useEffect, useState } from 'react'

import { usercontext } from "../App"


function Employee() {
    const [state, dispatch] = useContext(usercontext)

    const [userdata, setdata] = useState([]);
    const [dataLoded, setdataloded] = useState(false);

    useEffect(async () => {
        const res = await fetch("https://reqres.in/api/users")
        const data = await res.json();

        if (!data || !res) {
            setdataloded(true)
        } else {
            setdataloded(true)
            setTimeout(() => {
                setdata(data.data)
                setdataloded(false)
            }, 900);
        }

    }, []);
    return (
        <>
            <div className='container'>
                <div className='row '>

                    {
                        dataLoded ?
                            <>
                                <div className='loder'>Loding...</div>
                            </>
                            :
                            userdata.map((element, index) => {
                                return (
                                    <>
                                        <div key={index} className="card container  " style={{ width: "18rem" }}>
                                            <img src={element.avatar} className="card-img-top" alt="..." />
                                            <div key={index} className="card-body ">
                                                <h5 className="card-title">id : {element.id}</h5>
                                                <h5 className="card-title">email : {element.email}</h5>
                                                <h5 className="card-title">fname : {element.first_name}</h5>
                                                <h5 className="card-title">lname : {element.last_name}</h5>
                                            </div >
                                        </div >
                                    </>
                                );
                            })

                    }

                </div>
            </div>
        </>
    )
}

export default Employee