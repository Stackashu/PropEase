import React from 'react'
import './Client.css'
const Client = () => {
    const pics = ['/godrej.png','/infosys.png','/Lt.png','/tcs.png','wipro.png']
  return (
    <div className='client-outdiv'>
        <div className="client-in">
        <h1> Our Clients</h1>
        </div> 

        <div className="companies">
            {pics.map((pic)=>(
                <img key={pic} src={pic} alt={pic} />
            ))}
        </div>
    </div>
  )
}

export default Client
