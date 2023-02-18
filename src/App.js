import React, {useState, useEffect} from 'react';
import './App.css';

function App() {

  const [data, setData] =useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://orangevalleycaa.org/api/videos")
        .then(response => response.json());
        setData(res);
    };
    fetchData();
  }, []);

  return (
    <div className="App">
      <header>
       <h1> Videos </h1>
      </header>
      {data.map(video => (
        <div key={video.id} className="video-container">
          <h2>{video.name}</h2>
          <video height={200} controls src={video.video_url} data-testid="video-test" />
        </div>
        ))}
    </div>
  );
}

export default App;
