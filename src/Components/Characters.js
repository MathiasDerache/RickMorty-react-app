import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { apiCall } from '../ApiCall';
import ListChara from './ListChara';
import Pagination from './Pagination';
import logo from '../Assets/images/logo2.png'
import gsap from "gsap";





export default function Characters() {

    const [data, setData] = useState();
    const [done, setDone] = useState(false);
    const [currentPage, setCurrentPage] = useState('1');

  
    const imgRef = useRef(null)
    const titleRef = useRef(null)


    useEffect(() => {
        const fetchData = () => {
            apiCall.get( '/character?page='+currentPage )
                .then((res) => {
                    setData(res.data.results);
                    setDone(true)
                    
        
                  })
                .catch((err) => {
                    console.log(err);
                });
        };

        fetchData()

        gsap.to(imgRef.current, {
            scale : 1,  
            delay : 0.2
        })
        gsap.from(titleRef.current, {
            x :-1000,
            opacity:0,
            delay: 0.8,
            ease: "Back.easeOut"
        })

    }, [currentPage]);
    

    const changePage = (num) => {
        setCurrentPage(num)
    }

    return (
        <>
        <div  className="logoChara">
            <img src={logo} alt="Logo" ref={imgRef}/>
            <h1 className="title" ref={titleRef}>Characters List</h1>
        </div>
        <div className="card-chara">
            {done ?
            data.map((chara, index) =>  
                
                    <ListChara
                    key={index}
                    origin={chara.origin.name}
                    name={chara.name}
                    status={chara.status}
                    species={chara.species}
                    gender={chara.gender}
                    image={chara.image}
                    />
                
                
            )
            : <p>Loading</p>}
        </div>
        <div>
                <Pagination
                changePage={changePage}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                />
        </div>
        </>
    )
}
