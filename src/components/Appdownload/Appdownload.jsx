import React from 'react'
import './Appdownload.css'
const Appdownload = () => {
  return (
    <div className='app-download' id='app-download'>
        <p>For Better Experiences Download<br/>Tomato App</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="" />
            <img src={assets.app_store} alt="" />
        </div>
      
    </div>
  )
}
import './Appdownload.css'
import { assets } from '../../assets/assets'
export default Appdownload
