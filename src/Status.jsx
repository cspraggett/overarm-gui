import { MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

import { sumCounts, target } from './newCounts'

export default function Status({ width, counts }) {
  const [deviation, setDeviation] = useState(0)

  useEffect(() => {
    setDeviation(target(width) - sumCounts(counts))
  }, [counts])

  return (
    <div className="d-flex">
      <MDBInput
        label='Target'
        placeholder="Target"
        id='target'
        type='text'
        value={target(width) || 0}
        readonly />

      <MDBInput
        label='Deviation'
        placeholder="Deviation"
        id='Deviation'
        type='text'
        value={deviation}
        readonly />
    </div>
  )
}
