import React from 'react'
import {useEffect, useRef } from 'react';
import gsap from "gsap";

export default function ListChara(props) {

    const cardRef = useRef(null)

    var color = 'white'

        if (props.status === 'Alive'){
            color = '#69EB69  ';
        }  else if(props.status === 'Dead'){
            color = 'red';
        }


        useEffect(() => {

            gsap.to(cardRef.current, {
                y: 0,
                autoAlpha: 1, 
                delay : 1.3
            })

        }, [])


    return (
        <div className="card" ref={cardRef} >
            <div>
                <img src={props.image} alt="chara" />
            </div>
            <div className="textChara">
                <p> <span>Name : </span> {props.name}</p>
                <p> <span>Species : </span> {props.species}</p>
                <p><span>Gender : </span> {props.gender}</p>
                <p><span>Origin : </span> {props.origin}</p>
                <p style={{color : color}}><span>Status : </span> {props.status}</p>
            </div>
        </div>

    )
}
