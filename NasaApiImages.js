import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

function NasaApiImages() {
    const [mars,setmars]=useState();
    useEffect(()=>{
        fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY");
        .then(Response=>Response.json());
        .then(data=>{
            setmars=data;
        })
    });
    }
  return (
    <div>NasaApiImages</div>
  )
}

export default NasaApiImages