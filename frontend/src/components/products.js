import React, { useContext, useEffect, useState } from 'react'
import Skeleton, { SkeletonTheme } from "react-loading-skeleton"
import { Link } from 'react-router-dom'


import { usercontext } from "../App"

function Products() {
    const [state, dispatch] = useContext(usercontext)

    const [prdata, setprdata] = useState([])
    const [filter, setfilter] = useState(prdata)
    const [loding, setloding] = useState(false)
    let componentdidmount = true

    useEffect(() => {
        const getProducts = async () => {
            setloding(true)
            const result = await fetch("https://fakestoreapi.com/products")
            if (componentdidmount) {

                setprdata(await result.clone().json())
                setfilter(await result.json())
                setloding(false)
            }
        }
        getProducts()
    }, [])


    const Loding = () => {
        return (
            <>


                <div className='bg-gray-200 col-md-3 mb-5 card py-20 ml-1 '>
                    <Skeleton height={350} />
                </div>

                <div className='bg-gray-200 col-md-3 mb-5 card py-20 ml-1 '>
                    <Skeleton height={350} />
                </div>

                <div className='bg-gray-200 col-md-3 mb-5 card py-20 ml-1 '>
                    <Skeleton height={350} />
                </div>

                <div className='bg-gray-200 col-md-3 mb-5 card py-20 ml-1 '>
                    <Skeleton height={350} />
                </div>


            </>
        )
    }

    const filterProducte = (cat) => {
        const updateList = prdata.filter((x) => x.category === cat)
        setfilter(updateList)
    }

    const Showproducts = () => {
        return (
            <>
                <div className='buttons d-flex align-items-center justify-content-center flex-wrap'>
                    <button
                        className="btn btn-outline-primary me-2"
                        onClick={() => setfilter(prdata)}>
                        all
                    </button>

                    <button
                        className="btn btn-outline-primary me-2"
                        onClick={() => filterProducte("men's clothing")}>
                        men's
                    </button>

                    <button
                        className="btn btn-outline-primary me-2"
                        onClick={() => filterProducte("women's clothing")}>
                        women's
                    </button>

                    <button
                        className="btn btn-outline-primary me-2"
                        onClick={() => filterProducte("jewelery")}>
                        jewelery
                    </button>

                    <button
                        className="btn btn-outline-primary me-2"
                        onClick={() => filterProducte("electronics")}>
                        electronic
                    </button>

                </div>

                {
                    filter.map((product) => {

                        return (
                            <div className=' mt-5 col-md-3 mb-4'>
                                <div className="card h-100 text-center  p-5 border-0" key={product.title}>
                                    <img src={product.image} className="card-img-top" height={240} alt={product.title} />
                                    <div className="card-body">
                                        <h5 className="card-title  mb-0">{product.title.substring(0, 12)}...</h5>
                                        <p className="card-text  lead fw-bold ">${product.price}</p>
                                        <div className='d-flex align-items-center justify-content-center'>
                                            <Link to={`/products/${product.id}`} className="btn btn-primary mb-1 position-absolute bottom-0" >Buy now</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }

            </>
        )
    }
    return (
        <>
            <div className='container my-5 py-5 bg-gray-300'>
                <div className='row'>
                    <div className='col-10 mb-5'>
                        <h1 className='display-6 fw-bolder  text-center'>
                            Letest Productes
                        </h1>
                    </div>

                    <div className='row justify-content-center'>
                        {loding ? <Loding /> : <Showproducts />}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products