import { useState, useEffect } from "react"

import newCounts, { initialCounts } from "./newCounts"
import Table from './Table'
import Input from './Input'


export default function Overarm() {
  const [width, setWidth] = useState(0.000)
  const [counts, setCounts] = useState(initialCounts)

  useEffect(() => {
    setCounts(newCounts(width, counts))
  }, [width])

  const changeWidth = (e) => {
    setWidth(e.target.value)
  }
  return (
    <div className='d-flex flex-column justify-content-top align-items-center mt-3'>
      <h1>Over</h1>
      <h2>Arm</h2>
      <Input width={width} setWidth={changeWidth} />
      <Table counts={counts} />
    </div>
  )
}
