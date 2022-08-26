import React, { useEffect, useState } from 'react'
import Task from './Task'

const Components = () => {
    const [task, setTask] = useState([])
    const [input, setInput] = useState('')
    const [count, setCount] = useState(0)

    const handleClick = () => {
       if(input === ''){
        return
       }
       else{
        setTask((i) => {
            return [...i, { id: task.length + 1, item: input,checked:false }]
        })
        setInput('')
       }
    }
    const handleDel = (id) => {
        console.log(id)
        const data = task.filter((i) => {
            return i.id !== id
        })
        setTask(data)

    }
    const handleChecked = (id) => {
        const data = task.map((item) => (
            item.id === id ? {...item,checked:!item.checked} :item
        ))
        setTask(data)
    }
    
    useEffect(() => {
        setCount(task.length)
    },[task])
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 mx-auto mt-5">
                        <div className="card">
                            <div className="card-body">
                                <label htmlFor="" className='h2 mt-4'>Todo List</label>
                                <div className="mt-4">
                                    <div className="col-12 d-flex">
                                        <input type="text" className='form-control p-2' value={input} onChange={(e) => setInput(e.target.value)} placeholder='Enter task' />
                                        <button className='btn btn-success ms-1' onClick={handleClick}>Add</button>
                                    </div>
                                </div>
                                {count === 0 ?
                                    <label htmlFor="" className='text-lead mt-3 fs-8 mb-2'>Todo list is empty</label>
                                    :
                                     <label htmlFor="" className='text-lead mt-3 fs-8 mb-2'>You have {count} pending items</label>
                                }

                                {task.map((item, key) => ( 
                                    <Task key={key} item={item} handleDel={handleDel} handleChecked={handleChecked} />
                                ))}

                                <div className="col-lg-2 mt-5 float-end ">
                                    <span className='ms-4' onClick={()=> setTask([])} style={{ fontWeight: '600', fontSize: 17, textDecoration: 'underline', cursor: 'pointer' }}> Clear All</span>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Components