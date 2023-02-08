import { useEffect, useRef } from 'react'
import * as echarts from 'echarts'

type Props = {
  style?: Object
  dataSource?: { x: number | string; y: number }[]
}
export const LineChart: React.FC<Props> = (props) => {
  const { style, dataSource } = props
  const div = useRef<HTMLDivElement>(null)
  const xItems = dataSource?.map(item => item.x)
  const yItems = dataSource?.map(item => item.y)
  useEffect(() => {
    if (!div.current) { return }
    const myChart = echarts.init(div.current)
    const option: echarts.EChartsOption = {
      tooltip: {
        trigger: 'axis',
        show: true,
        formatter: ([{ axisValue, data }]: any) => {
          const parts = axisValue.split('-')
          const label = `${parts[0]}年${parts[1]}月${parts[2]}日`
          const value = data === null ? '无数据' : `${data}元`
          return `${label}<br/><div style="text-align: right;">${value}</div>`
        }
      },
      grid: {
        left: 16,
        top: 8,
        bottom: 24,
        right: 16
      },
      xAxis: {
        type: 'category',
        data: xItems,
        axisLabel: {
          formatter: (label: string) => label.slice(label.indexOf('-') + 1)
        },
      },
      yAxis: {
        type: 'value',
        axisLabel: {
          show: false
        },
      },
      series: [
        {
          data: yItems,
          type: 'line',
          itemStyle: {
          },
          emphasis: {
            itemStyle: {
              color: 'green'
            }
          }
        }
      ]
    }
    myChart.setOption(option)
  }, [])

  return (
    <div ref={div} style={style}></div>
  )
}