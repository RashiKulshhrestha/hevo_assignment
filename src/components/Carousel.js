import React, { useEffect, useState } from "react"
import CardView from "./CardView"
import "./Carousel.css"
import data from "./carouselData"

// const arr = ["img1", "img2", "img3", "img4"]

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const handlePrev = () => {
    clearInterval(timer)
    setCurrent(current === 0 ? data.length - 1 : current - 1)
    console.log("prev", current)
  }
  const handleNext = () => {
    clearInterval(timer)
    setCurrent(current === data.length - 1 ? 0 : current + 1)
    console.log("next", current)
  }
  let timer = ""
  useEffect(() => {
    timer = setTimeout(() => {
      setCurrent(current === data.length - 1 ? 0 : current + 1)
    }, 3000)
  })
  const handleDots = index => {
    clearInterval(timer)
    setCurrent(index)
  }
  return (
    <div className="main-container">
      <div classname="carousel-container">
        <div className="carousel-wrapper">
          <button onClick={handlePrev}>prev</button>
          <div>
            {data.map((item, index) => (
              <div>{index === current ? <CardView data={item} /> : null}</div>
            ))}
          </div>
          <button onClick={handleNext}>next</button>
        </div>
        <div className="dots-wrapper">
          {data.map((item, index) => (
            <div
              className={
                index === current ? "current-carousel" : "non-current-carousel"
              }
              onClick={() => handleDots(index)}
            ></div>
          ))}
        </div>
      </div>
    </div>
  )
}
