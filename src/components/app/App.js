import React, {useState,useEffect} from 'react';
import Track from '../track/Track';
import TrackArtist from '../trackArtist/TrackArtist';
import ImageMain from '../imageMain/ImageMain';
import ListArtist from '../listArtist/ListArtist';
import {Context} from '../context';
import './app.css';

function App() {
  const [data, setData] = useState( {})
  const [index, setIndex] = useState([]);
  const [display, setDisplay] = useState(false)

  useEffect(() => {
    fetch('http://ws.audioscrobbler.com/2.0/?method=tag.gettoptracks&tag=disco&api_key=f21dfa58ed2c6c4a65227b8f730c281b&format=json')
        .then(res => res.json())
        .then(result => setData(result))
  }, [])


  const hideTag = () =>{
    setDisplay(true)
  }

  const ind = (i) =>{
    setIndex([i])
  }

  let number = 100;
  const dataLast = data.tracks?.track
  const dataLastTag = data.tracks?.["@attr"]
  const trackArtist = dataLast?.map((arr) => <li key={number++} >{arr.artist.name}</li>)
  const clickTrack = dataLast?.map((arr, idx) => <li className="clickTrack" onClick={()=>{ind(idx); hideTag()}} key={idx}>{arr.name}</li>)
  const listArtist = dataLast?.map((arr) =><li key={number++} >{arr.artist.url}</li>)
  const imageMain = dataLast?.map((arr) =><li key={number++}><img src={arr.image[0].["#text"]} alt='foto'></img></li>)
  const image = dataLast?.map((arr) =>arr.image[0].["#text"])
  const tag = dataLastTag?.tag

  return (
<Context.Provider value = {{data,
                            dataLast,
                            index,
                            clickTrack,
                            trackArtist,
                            listArtist,
                            imageMain,
                            image,
                            tag,
                            display}}>
  <div className="container ">
    <div className="row">
      <div className="col-5">
        <Track/>
      </div>
      <div className="col-2">
        <TrackArtist/>
      </div>
      <div className="col-4">
        <ListArtist/>
      </div>
      <div className="col-1">
        <ImageMain/>
      </div>
    </div>
  </div>

</Context.Provider>
  );
}
export default App;
