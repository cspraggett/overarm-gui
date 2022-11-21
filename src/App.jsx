import { MDBInput } from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'

import newCounts, { initialCounts } from "./newCounts"
import Table from './Table'

function App() {

  const [width, setWidth] = useState(0.000)
  const [counts, setCounts] = useState(initialCounts)


  const changeWidth = (e) => {
    setWidth(e.target.value)
  }


  useEffect(() => {
    setCounts(newCounts(width, counts))
  }, [width])


  return (
    <div className="App vh-100 vw-100">
      <div className='d-flex flex-column justify-content-top align-items-center mt-3'>
        <h1>Hello</h1>
        <h2>World</h2>
        <div className='mb-3'>
          <MDBInput
            label='Coil width:'
            id='form1'
            type='text'
            size='lg'
            value={width}
            onChange={changeWidth} />
        </div>
        <Table counts={counts} />
      </div>
    </div>
  )
}

export default App
