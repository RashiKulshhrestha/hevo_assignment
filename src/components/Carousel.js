import React, { useEffect, useState } from "react"
import CardView from "./CardView"
import "./Carousel.css"
import data from "./carouselData"

export default function Carousel() {
  const [current, setCurrent] = useState(0)
  const handlePrev = () => {
    clearInterval(timer)
    setCurrent(current === 0 ? data.length - 1 : current - 1)
  }
  const handleNext = () => {
    clearInterval(timer)
    setCurrent(current === data.length - 1 ? 0 : current + 1)
  }
  let timer = ""
  useEffect(() => {
    timer = setTimeout(() => {
      setCurrent(current === data.length - 1 ? 0 : current + 1)
    }, 3000)
    return () => {
      clearInterval(timer)
    }
  }, [current])
  const handleDots = index => {
    clearInterval(timer)
    setCurrent(index)
  }
  return (
    <div className="main-container">
      <div classname="carousel-container">
        <div className="carousel-wrapper">
          <div onClick={handlePrev}>
            <i class="fa fa-arrow-circle-left arrows" aria-hidden="true"></i>
          </div>
          <div>
            {data.map((item, index) => (
              <div>{index === current ? <CardView data={item} /> : null}</div>
            ))}
          </div>
          <div onClick={handleNext}>
            <i class="fa fa-arrow-circle-right arrows"></i>
          </div>
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
