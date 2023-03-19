import { useEffect, useRef } from "react"
import styled from "styled-components"
import { useSwiper } from "../hooks/useSwiper"

export const UseSwiperDemo = () => {
  const mainRef = useRef<HTMLDivElement>(null)
  const { direction } = useSwiper(mainRef)
  useEffect(() => {
    console.log(direction)
  }, [direction])
  return (
    <Div ref={mainRef}>
      可在此处滑动，在 console 中查看滑动方向
    </Div>
  )
}

const Div = styled.div`
  border:1px solid red;
  height:100vh;
`