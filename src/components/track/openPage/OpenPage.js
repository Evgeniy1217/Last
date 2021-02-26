import React, {useContext} from 'react'
import {Context} from '../../context'
import './openPage.css'

const OpenPage = (props) =>{
    const {data,tag, image,index, display} = useContext(Context)
    const artistPage = data?.tracks?.track?.map((arr)=>arr.artist.name)[index]

    return(
        <div className='height'>
        <div className={display===false ? 'd-none':''}>
        <div className='openPage d-flex'>
            <div>артист: <strong>{artistPage},</strong></div>
            <pre> </pre>
            <div>тэг(жанр): <strong>{tag}</strong>, фото:</div>
            <pre> </pre>
            <div><img src={image}alt='foto'></img></div>
        </div>
        </div>
        </div>
    )
}
export default OpenPage