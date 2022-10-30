import styled from "styled-components"
import { UseCountDemo } from "../demos/UseCountDemo"


export const HomePage = () => {

  return (
    <Wrapper>
      <UseCountDemo />
    </Wrapper>
  )
}

const Wrapper = styled.div`
 button {
    &[disabled] {
      opacity: 0.5;
      cursor: not-allowed;
    }
  }
`