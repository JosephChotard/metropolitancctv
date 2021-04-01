import React from 'react'

export default function Gallery() {
  return (
    <div className={`content center`}>
      <h1>GALLERY</h1>
      <div className='imageList'>
        <img src="/intruder/1.png" alt="Robber with crowbar" />
        <img src="/intruder/2.png" alt="Robber backlit infront of house"/>
        <img src="/intruder/3.png" alt="Keypad with Welcome Home written" />
        <img src="/services/1.png" alt="CCTV Cameras on pole" />
        <img src="/services/2.png" alt="Mobile devices with CCTV views"/>
        <img src="/services/3.png" alt="Camera monitoring hub" />
        <img src="/about/van.jpg" alt="Metropolitan CCTV Van" />
        <img src="/gallery/installing.jpg" alt="Man installing CCTV camera" />
      </div>
      <div className='imageList'>

        <img src="/gallery/1.webp" alt="Security features" />

        <img src="/gallery/2.jpg" alt="Security features" />

        <img src="/gallery/3.webp" alt="Security features" />

        <img src="/gallery/4.webp" alt="Security features" />

      </div>
    </div>
  )
}
