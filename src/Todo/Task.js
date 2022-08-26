import React from 'react'

const Task = ({item,handleDel,handleChecked}) => {
    return (
        <div>
            <div className="col-12 mt-2 p-2 d-flex align-items-center " style={{ backgroundColor: '#e0e8f5', borderRadius: 8 }}>
                <input type="checkbox" checked={item.checked} onChange={() => handleChecked(item.id)} className='form-check-input ms-1 p-2 ' />
                <span  className={item.checked === true ? "text-lead text-decoration-line-through ms-3" : "text-lead ms-3"}>{item.item}</span>
                <div className='' style={{ position: 'absolute', right: 40, cursor: 'pointer'  }} onClick={() => handleDel(item.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="red" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </div>
            </div>
        </div>
    )
}


export default Task