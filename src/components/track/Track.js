import React, {useState, useContext} from 'react'
import {Context} from '../context'
import OpenPage from'./openPage/OpenPage'
import './track.css'

const Track = () =>{
    const {dataLast, clickTrack} = useContext(Context)
    const [trackSearch, setTrackSearch] =useState(" ")

    const search = e => {
        setTrackSearch(e.target.value)
    }
    const arrTrack = dataLast?.map((arr)=>arr.name)
    let indTrack = arrTrack?.indexOf(trackSearch)
    const nameTrack = dataLast?.[indTrack]?.name
    const nameArtist = dataLast?.[indTrack]?.artist.name

    return (
        <div>
              <div className='d-flex'>
                 <div>
                      <input
                      onChange={search}
                      className='input'
                      type="text"
                      placeholder="Поиск трека"/>
                 </div>
                 <div className="nameArtist">
                       {nameArtist}
                 </div>
                 <pre>  </pre>
                 <div className="nameTrack">
                       {nameTrack}
                 </div>
                </div>
                <div>
                    <OpenPage />
                </div>
            <ol className="list-track grid-columns">
                {clickTrack}
            </ol>
        </div>
    );
}

export default Track;