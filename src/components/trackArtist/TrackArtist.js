import React, {useContext} from 'react'
import {Context} from '../context'
import './trackArtist.css'
const TrackArtist = () =>{
    const {trackArtist} = useContext(Context)
    return (<div>
            <div className='retreat'> </div>
        <ul className="list-trackArtist">
            {trackArtist}
        </ul>
        </div>
    );
}
export default TrackArtist;