import React, { useEffect, useState } from 'react'

const ViewVehicle = ({ vehicle,setVehicle }) => {
  const [data, setData] = useState([])
 
  const handleCheckout = (id) => {
    const checkout = vehicle.map((item) => (
      item.id === id ? {...item,checkout:new Date().toLocaleString()} : item
    ))
    setVehicle(checkout)
  }

  const InGarage = () => {
   const data =  vehicle.filter((item) => {
      return item.checkout === null
    }).length
    return data
  }
  const CheckOutGarage = () => {
   const data =  vehicle.filter((item) => {
      return item.checkout !== null
    }).length
    return data
  }
  useEffect(() => {
    setData(vehicle)
  }, [vehicle])


  return (
    <div>
      <div className="col-4 mt-2 float-end">
      <div className="card border-success border-2">
          <div className="card-body">
            <h6>Total Vehicles in garage : {InGarage()}</h6>
            <h6>Total Vehicles checked out : {CheckOutGarage()}</h6>
          </div>
        </div>
      </div>
      <table className="table mt-5 table-responsive">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Vehicle No</th>
            <th>Check IN</th>
            <th>Check Out</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item, key) => (
            <tr key={key}>
              <th>{item.id}</th>
              <td>{item.name}</td>
              <td>{item.number}</td>
              <td>{item.checkin}</td>
              <td>{item.checkout === null ?
                <button className='btn btn-danger' onClick={() => handleCheckout(item.id)}>Checkout</button>
                :
                item.checkout}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default ViewVehicle