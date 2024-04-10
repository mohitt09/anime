import React from 'react';

function Home() {
  return (

    
    <div style={{ width: '100%', height: '100vh' }}>
      <iframe
        title="YouTube video player"
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/V_MX0HiIgRQ?autoplay=1&controls=1"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
  );
}

export default Home;

