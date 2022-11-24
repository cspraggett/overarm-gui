import { MDBInput } from "mdb-react-ui-kit";
import { useEffect, useState } from "react";

import { sumCounts } from './newCounts'

export default function Status({ target, counts }) {
  const [deviation, setDeviation] = useState(0)

  useEffect(() => {
    setDeviation(target - sumCounts(counts))
  }, [counts])

  return (
    <div className="d-flex">
      <MDBInput
        label='Target'
        placeholder="Target"
        id='target'
        type='text'
        value={target || 0}
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
