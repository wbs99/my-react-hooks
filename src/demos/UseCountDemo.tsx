import styled from "styled-components"
import { useTimeCount } from "../hooks/useCount"

type Props = {
  countNumber?: number
}

export const UseCountDemo = (props: Props) => {
  const { countNumber = 3 } = props
  const { startCount, isCounting, count } = useTimeCount(countNumber)
  const onClickSendValidationCode = () => { startCount() }
  return (
    <Wrapper>
      <div>倒计时：{count}</div>
      <button disabled={isCounting} onClick={onClickSendValidationCode}>
        {isCounting ? <span>{count}秒后可重新发送</span> : <span>发送验证码</span>}
      </button>
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