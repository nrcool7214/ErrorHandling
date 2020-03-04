import React from 'react'

export default function Hero({name}) {
    if(name==="joker"){
        throw new Error("not a hero")
    }
    return (
        <div>
            <h2>{name}</h2>
        </div>
    )
}
