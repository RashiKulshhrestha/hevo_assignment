import React from "react"
import "./Carousel.css"

export default function CardView(props) {
  console.log(props)
  return (
    <div key={props.data.id} className="cardView-container">
      <h2>{props.data.heading}</h2>
      <img
        src={props.data.img}
        alt={props.data.name}
        height="200px"
        width="200px"
        className="card-image"
      />
      <h3>{props.data.name}</h3>
    </div>
  )
}
