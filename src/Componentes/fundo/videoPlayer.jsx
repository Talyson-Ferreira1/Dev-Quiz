import React from 'react'
import video from '../../img/background-video.mp4'

function videoPlayer() {

    const videoStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        objectFit: 'cover',
        zIndex: '-1'
    };
      
  return (
    <>
        <video style={videoStyle} autoPlay muted loop>
          <source src={video} type='video/mp4' />
        </video>
    </>
  )
}

export default videoPlayer
