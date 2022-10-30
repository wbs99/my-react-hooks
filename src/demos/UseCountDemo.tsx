import { useTimeCount } from "../hooks/useCount"

type Props = {
}

export const UseCountDemo: React.FC<Props> = () => {

  const { startCount, isCounting, count } = useTimeCount(3)
  const onClickSendValidationCode = () => { startCount() }
  return (
    <div>
      <div>倒计时：{count}</div>
      <button disabled={isCounting} onClick={onClickSendValidationCode}>
        {isCounting ? <span>{count}秒后可重新发送</span> : <span>发送验证码</span>}
      </button>
    </div>
  )
}