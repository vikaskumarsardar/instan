import React from 'react'
import INC from './INC'
export default function N() {
    const {name}=INC('here are some craziest things happened and you are complaining about the shitty thigs');
    
    return (
        <div>
            <p style={{fontSize:"calc(12px + 2vmin)",textAlign:'center'}}>{name}</p>

        </div>
    )
}
