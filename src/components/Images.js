import React, { useState } from 'react'
import './Images.scss'

const Images = ({imgs = [{url: ""}]}) => {

    const [image, setImage] = useState(imgs[0]);

  return (
    <div className='images'>
        <div className="images__left">
            {imgs.map((img, index) => {
                return (<React.Fragment key={index}>
                    <div className='img'>
                    <img src={img.url}  alt={img.filename} onClick={() => setImage(img)} width="200" />
                </div>
                </React.Fragment>)
            })}
        </div>

        <div className="images__right">
            <img src={image.url} alt={image.filename} width="400"/>
        </div>
    </div>
  )
}

export default Images