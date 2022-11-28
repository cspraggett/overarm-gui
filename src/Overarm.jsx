import { useState, useEffect } from "react"

import newCounts, { initialCounts } from "./newCounts"
import Table from './Table'
import Input from './Input'
import Status from './Status'
import Switch from './Switch'

export default function Overarm() {
  const [width, setWidth] = useState(0.000)
  const [counts, setCounts] = useState(initialCounts)
  const [isLightGauge, setIsLightGauge] = useState(false)
  const [target, setTarget] = useState(0)

  const LIGHT_GAUGE = (1 / 16)
  const HEAVY_GAUGE = (1 / 8)

  useEffect(() => {
    if (!+width) {
      setTarget(0)
    } else {
      const newTarget = (isLightGauge ? +width + LIGHT_GAUGE : +width + HEAVY_GAUGE)
      setTarget(newTarget)
      setCounts(newCounts(newTarget, counts))
    }
  }, [width, isLightGauge])

  const changeWidth = (e) => {
    setWidth(e.target.value)
    11
  }

  const changeGauge = () => {
    setIsLightGauge(!isLightGauge)
  }

  return (
    <div className='d-flex flex-column justify-content-top align-items-center width-75 mt-3'>
      <h3 className="mt-2 mb-3">Over-arm Calculator</h3>
      <Input width={width} setWidth={changeWidth} />
      <Switch lightGauge={isLightGauge} setLightGauge={changeGauge} />
      <Table counts={counts} />
      <Status target={target} counts={counts} isLightGuage />
    </div>
  )
}
