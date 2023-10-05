import React from 'react'

const CardContainer = ({title, children}) => {
    return (
        <div className='bg-teal-100 border-4 border-red-500 p-4 w-[400px] mt-1 grid justify-center m-auto  '>
            <h2>{title}</h2>
            {children}
        </div>
    )
}

export default CardContainer