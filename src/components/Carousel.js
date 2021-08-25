import React, { useState } from "react"
import "./Carousel.css"

const arr = ["img1", "img2", "img3", "img4"]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const handlePrev = () => {
    setCurrent(current === 0 ? arr.length - 1 : current - 1)
    console.log("prev", current)
  }
  const handleNext = () => {
    setCurrent(current === arr.length - 1 ? 0 : current + 1)
    console.log("next", current)
  }
  return (
    <div>
      <div className="carousel-container">
        <button onClick={handlePrev}>prev</button>
        <div>
          {arr.map((item, index) => (
            <div>
              {index === current ? <div key={index}>{item}</div> : null}
            </div>
          ))}
        </div>
        <button onClick={handleNext}>next</button>
      </div>
      <div className="dots-wrapper">
        {arr.map((item, index) => (
          <div
            className={
              index === current ? "current-carousel" : "non-current-carousel"
            }
          ></div>
        ))}
      </div>
    </div>
  )
}
