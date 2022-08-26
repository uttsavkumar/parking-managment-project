import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import SideBar from './SideBar'
import ViewVehicle from './ViewVehicle'

const Components = () => {
    const [name, setName] = useState('')
    const [number, setNumber] = useState('')
    const [vehicle, setVehicle] = useState([])

    const handleAddVehicle = () => {
        if (name === '' || number === '') {
            alert('Form Filed must be filled')
        }
        else {
            const date = new Date().toLocaleString()
            const data = { id: vehicle.length + 1, name, number, checkin: date, checkout: null }
            setVehicle((item) => {
                return [...item, data]
            })
            alert('Vehicle Added')
            setName('')
            setNumber('')

        }
    }


    return (
        <div>
            <div className="container-fluid">
                <div className="row ">
                    <div className="col-3 m-0 p-0">
                        <SideBar />
                    </div>
                    <div className="col-9">
                        <Routes>
                            <Route path='/' element={<Home setName={setName} setNumber={setNumber} handleAddVehicle={handleAddVehicle} name={name} number={number} />} />
                            <Route path='/view' element={<ViewVehicle vehicle={vehicle} setVehicle={setVehicle} />} />
                        </Routes>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Components