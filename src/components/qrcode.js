import React from 'react'
import './qrcode.css'

function QRcode() {
  return (
    <div className='qr'>
        <div className='code'>
            <img className='qrImage' src={require('../images/image-qr-code.png')} alt='QR code Image'/>
        </div>
        <div className='description'>
            <p id='firstPara'>Improve your front-end skills by building projects</p>
            <p id='secPara'>Scan the QR code to visit Frontend Mentor and take your coding skills to the next level</p>
        </div>
    </div>
  )
}

export default QRcode