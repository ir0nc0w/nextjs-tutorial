'use client'

import { useState } from "react"

export default function List() {
    let Items = ['Tomatoes', 'Pasta', 'Coconut']
    let Prices= [40, 40, 40]
    let [num, numFunc] = useState([0, 0, 0])
    return (
        <div>
            <h4 className="title">Item Lists</h4>
            {
                Items.map((v, i)=>{
                    return (
                        <div className="food" key={i}>
                            <img src={`/food${i}.png`} className="food-img"/>
                            <h4>{v} ${Prices[i]} </h4>
                            <button onClick={()=>{ 
                                let copy = [... num]
                                copy[i]--
                                numFunc(copy)
                            }}>-</button>
                            <span> {num[i]} </span>
                            <button onClick={()=>{
                                let copy = [... num]
                                copy[i]++
                                numFunc(copy)
                            }}>+</button>
                        </div>
                    )
                })
            }
        </div>
    )
}