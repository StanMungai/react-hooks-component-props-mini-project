import React from "react"

function About({image, about, imgSrc}){
  return (
    <aside>
      <img src={imgSrc} alt={image}/>
      <p>{about}</p>
    </aside>
  )
}

export default About 