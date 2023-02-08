import { useState } from "react"
import { Link } from "react-router-dom"
import styled from "styled-components"
import { useTitle } from "../hooks/useTitle"

interface Props {
  title: string
}


export const HomePage: React.FC<Props> = (props) => {
  useTitle(props.title)
  const [demoList] = useState([
    { path: '/countDown', name: '倒计时' },
    { path: '/lineChart', name: '折线图' },

  ])
  return (
    <WrapperDiv>
      <ul>
        {demoList.map(demo => <li key={demo.path}><Link to={demo.path}>{demo.name}</Link>  </li>)}
      </ul>
    </WrapperDiv>
  )
}

const WrapperDiv = styled.div`
  padding-left: 128px;
    ul{
      max-height: 80vh;
      display: inline-flex;
      flex-direction: column;
      flex-wrap: wrap;
      li{
        padding: 6px;
        &:hover{
          color: #6135c0;
        }
      }
    }
`
