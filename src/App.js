import React  from 'react';
import './App.css';
import video1 from "./videos/BalletInSmokeMusic_054599628.mp4"
import video2 from "./videos/GraphicArtistMusic_052214820.mp4"
import video3 from "./videos/SculptorWeldingMusic_053783433.mp4"

function App() {
  // This is for consuming videos from a public API for the videos

  // const [data, setData] =useState([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const res = await fetch("https://orangevalleycaa.org/api/videos")
  //       .then(response => response.json());
  //       setData(res);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="App">
      <header>
       <h1> Videos </h1>
      </header>
        <div className="video-container">
          <video src={video1} controls height={200}/>
          <video src={video2} controls height={200}/>
          <video src={video3} controls height={200}/>
        </div>
    </div>
  );
}

export default App;
