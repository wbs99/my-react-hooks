import { PieChart } from "../components/PieChart"

export const PieChartDemo = () => {
  const style = { height: '260px' }
  const items = [
    { tag: '吃饭', amount: 10000 },
    { tag: '打车', amount: 20000 },
    { tag: '买皮肤', amount: 68800 },
  ].map(item => ({ x: item.tag, y: item.amount / 100 }))

  return (
    <PieChart items={items} style={style} />
  )
}