import React, {useContext} from 'react'
import {Context} from '../context'
import './imageMain.css'

const ImageMain = () =>{
    const {imageMain} = useContext(Context)
    return (
        <div>
            <div className='retreat'></div>
        <ul className="list-image">
            {imageMain}
        </ul>
        </div>
    );
}
export default ImageMain;