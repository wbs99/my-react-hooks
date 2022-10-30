import styled from "styled-components"
import { useTimeCount } from "../hooks/useCount"


export const HomePage = () => {
  const { startCount, isCounting, count } = useTimeCount(3)
  const onClickSendValidationCode = () => {
    startCount()
  }
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