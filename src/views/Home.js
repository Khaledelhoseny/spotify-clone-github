import Section from "components/Section";
import songs from "data/songs"
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";


function Home() {
// 	// get pop tracks
    const [popTracks , setPopTracks] = useState([])
  const getPopTracks = ()=>{
    axios.get("http://localhost:8080/api/v1/trend?genre=Pop&pageNumber=1&pageSize=6",
    {
        headers: {"Authorization" : `Bearer ${localStorage.getItem('accessToken')}`} 
    }
    ).then((response)=>{
        console.log(response)
        setPopTracks(response.data) 
    }).catch((error)=>{
        console.log(error) ; 
    })

  } 
  useEffect(()=>{
    getPopTracks()
    },[])  

    // console.log(popTracks)

// get pop tracks
	return (
		<div className="grid gap-y-8">
			<Section
				title="Recently played"
				more="/blabla"
				items={popTracks}
				songs={songs}
			/>
		
		
		</div>
	)
}

export default Home
