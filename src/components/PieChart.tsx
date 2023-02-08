import * as echarts from 'echarts'
import { useRef, useEffect } from "react";

type Props = {
  style?: Object
  items?: { x: number | string; y: number }[]
}
export const PieChart = (props: Props) => {
  const { style, items } = props
  const div = useRef<HTMLDivElement>(null)
  useEffect(() => {
    if (!div.current) { return }
    const myChart = echarts.init(div.current)
    const option: echarts.EChartsOption = {
      tooltip: { trigger: 'item' },
      grid: { top: 0, left: 0, bottom: 0, right: 0 },
      series: [{
        type: 'pie',
        radius: '50%',
        data: items?.map(item => ({ value: item.y, name: item.x })),
      }]
    }

    myChart.setOption(option)
  }, [])
  return (
    <div ref={div} style={style}></div>
  )
}