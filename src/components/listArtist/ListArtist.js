import React, {useContext} from 'react'
import {Context} from '../context'
import './listArtist.css'

const ListArtist = () =>{
    const {listArtist} = useContext(Context)
    return (
        <div>
            <div className='retreat'>
            </div>
        <ul className="list-counter-square">
            {listArtist}
        </ul>
        </div>
    );
}
export default ListArtist;