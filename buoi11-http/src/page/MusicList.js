import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../components/style.css'
function MusicList() {
    const [music,setMusic] =useState([]);
    const getMusic= async (pathname) =>{
        try{
            const response = await axios.get(
              'https://api.themoviedb.org/3/movie/343611?api_key=d070739245f65441b85358b7b89d1682'
            );
            // console.log(response);
            console.log(response.data.production_companies)
            if(pathname==='/nhac-tre'){
              setMusic(response.data.production_companies);
            }
        } catch(error){
          console.log(error)
        }
    };
    useEffect(()=>{
      getMusic(window.location.pathname);
    },[])
  return (
    <div><h1>Movie</h1>
      <ul className='phim'>
        {music.map((item)=>(
        <li key={item.id} className='phim-item' >
          <img src={item.logo_path} alt=''/>
          <p>{item.name}</p>
        </li>))}
      </ul>
    </div>

  )
}

export default MusicList