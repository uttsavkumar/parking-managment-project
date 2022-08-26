import React, { useState } from 'react'

const Home = ({setName,setNumber,handleAddVehicle,name,number}) => {
   
    return (
        <>
            <div className="container mt-5">
                <div className="row m">
                    <div className="col-8 mx-auto">
                        <div className="card mt-4">
                            <div className="card-body">
                                <div className="mt-3">
                                    <label htmlFor="">Enter Driver Name</label>
                                    <input type="text" value={name} onChange={(e) => setName(e.target.value)} className="form-control" placeholder='eg: Rahul' />
                                </div>
                                <div className="mt-3">
                                    <label htmlFor="">Enter Vehicle Number</label>
                                    <input type="text" value={number} onChange={(e) => setNumber(e.target.value)} className="form-control" placeholder='eg: BR 11Y 2302' />
                                </div>
                                <div className="mt-3">
                                    <button className="btn btn-success w-100" onClick={handleAddVehicle}>Add Vehicle Detail</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Home