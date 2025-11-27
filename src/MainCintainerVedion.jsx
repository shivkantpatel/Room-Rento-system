import React from 'react'
import containerVedion from './assets/RoomRentingVedion.mp4'

const MainCintainerVedion = () => {
    return (
        
            <video
                src={containerVedion}
                autoPlay
                loop
                muted

                className="w-full h-full object-cover "
            >
                Your browser does not support the video tag.
            </video>
       
    )
}

export default MainCintainerVedion
