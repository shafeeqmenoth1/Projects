
import React, { useEffect, useState } from 'react'
import YouTube from 'react-youtube'
import {  API_KEY, imageURL } from '../../constant/constant'
import instance from '../axios'
import "./RowPost.css"

function RowPost(props) {
    const [movies,setMovies] = useState([])
    const [urlId,setUrlId] = useState("")
    useEffect(()=>{
        instance.get(props.url).then((response)=>{
            setMovies(response.data.results)
        }).catch(err=>{
            alert('Error')
        })
    },[])
    const opts = {
        height: '390',
        width: '100%',
        playerVars: {
          // https://developers.google.com/youtube/player_parameters
          autoplay: 0,
        },
      };
      const playMovie =(id)=>{
          console.log(id);
          instance.get(`/movie/${id}/videos?api_key=${API_KEY}&language=en-US`).then((response)=>{
              console.log(response.data);
              setUrlId(response.data.results[0])
          })
      }
    return (
        <div className="row">
            <h2>{props.title}</h2>
            <div className="posters">
                {movies.map((obj)=>
                    <img onClick={()=>playMovie(obj.id)} className={props.isSmall ? 'smallPoster' : 'poster'}  src={`${imageURL+obj.backdrop_path}`} alt="poster" />
                )}
                
            </div>
           { urlId && <YouTube opts={opts} videoId={urlId.key}/> }
        </div>
    )
}

export default RowPost
