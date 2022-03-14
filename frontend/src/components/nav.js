// import React, { useContext } from 'react'
// import { Link } from 'react-router-dom'
// import { usercontext } from "../App"

// export const Nav = () => {
//     const [state, dispatch] = useContext(usercontext)

//     const Rendermenu = () => {
//         if (state) {
//             return (
//                 <>
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                     </li>

//                     <li className="nav-item">
//                         <Link className="nav-link" to="/about">about</Link>
//                     </li>

//                     <li className="nav-item">
//                         <Link className="nav-link" to="/Employee">employee</Link>
//                     </li>

//                     <li className="nav-item">
//                         <Link className="nav-link" to="/products">products</Link>
//                     </li>

//                     <li className="nav-item  right ">
//                         <Link className="nav-link" to="/logout">Logout</Link>
//                     </li>
//                 </>
//             )
//         } else {
//             return (
//                 <>
//                     <li className="nav-item">
//                         <Link className="nav-link active" aria-current="page" to="/">Home</Link>
//                     </li>


//                     <li className="nav-item">
//                         <Link className="nav-link" to="/login">Login</Link>
//                     </li>

//                     <li className="nav-item">
//                         <Link className="nav-link" to="/sigin">Register</Link>
//                     </li>
//                 </>
//             )
//         }
//     }
//     return (
//         <>
//             <nav className="navbar navbar-expand-lg navbar-light bg-light">
//                 <div className="container-fluid">

//                     <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//                         <span className="navbar-toggler-icon"></span>
//                     </button>

//                     <div className="collapse navbar-collapse bg-gray-200 rounded" id="navbarSupportedContent">
//                         <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                             <Rendermenu />
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </>
//     )
// }


import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { usercontext } from "../App"
import "../stylesheet/nav.css"
export const Nav = () => {




    useEffect(() => {
        const disblock = document.querySelector(".disblock");
        const btn = document.getElementById("btn");


        btn.addEventListener("click", () => {

            if (disblock.style.display != "block") {
                disblock.style.display = "block";
            } else {
                disblock.style.display = "none";
            }
        });


    })
    const [state, dispatch] = useContext(usercontext)

    const Rendermenu = () => {
        if (state) {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/about">about</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/Employee">employee</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/products">products</Link>
                    </li>

                    <li className="nav-item  right ">
                        <Link className="nav-link" to="/logout">Logout</Link>
                    </li>
                </>
            )
        } else {
            return (
                <>
                    <li className="nav-item">
                        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                    </li>


                    <li className="nav-item">
                        <Link className="nav-link" to="/login">Login</Link>
                    </li>

                    <li className="nav-item">
                        <Link className="nav-link" to="/sigin">Register</Link>
                    </li>
                </>
            )
        }
    }
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container-fluid ">

                    <button id='btn' className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse bg-gray-200 rounded disblock mt-3" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 ml-2 mb-lg-0">
                            <Rendermenu />
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
