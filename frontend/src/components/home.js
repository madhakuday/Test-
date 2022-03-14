import React, { useEffect, useState, useContext } from 'react';
import "../stylesheet/home.css"



import { usercontext } from "../App"

let curTime = '';


const date = new Date();
const time = date.getHours();

let days = [
    'sunday',
    'monday',
    'tusday',
    'wenday',
    'thuday',
    'friday',
    'setday',
]

let day = days[date.getDay()];

if (time >= 1 && time < 12) {
    curTime = "good morning"
} else if (time >= 12 && time < 19) {
    curTime = "good afternon"
} else {
    curTime = "good night"
}

function Home() {



    let dataobj = new Date().toLocaleTimeString()

    const [time, settime] = useState(dataobj);

    const gettime = () => {
        dataobj = new Date().toLocaleTimeString()
        settime(dataobj)
    }

    setInterval(gettime, 100);
    return (
        <>
            <div className='main'>
                <h1 className='ecomh1 ml-2 fw-bolder'>E-Commerce</h1>


            </div>
        </>
    )
};


export default Home