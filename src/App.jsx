import { MDBInput, MDBTable, MDBTableBody, MDBTableHead } from 'mdb-react-ui-kit'
import { useEffect, useState } from 'react'

function App() {
  const initialCounts = {
    "inch": 0,
    "half": 0,
    "quarter": 0,
    "eigth": 0,
    "sixteenth": 0,
    "thirtysecond": 0,
  }

  const [width, setWidth] = useState(0.000)
  const [counts, setCounts] = useState(initialCounts)

  const ringSizes = [1, (1 / 2), (1 / 4), (1 / 8), (1 / 16), (1 / 32)]

  const changeWidth = (e) => {
    setWidth(e.target.value)
  }

  const target = +width + 0.125

  useEffect(() => {
    let t = +width === 0 ? 0 : target

    console.log(width)
    let newCounts = { ...initialCounts }

    Object.keys(counts).forEach((cur, i) => {
      if (i === 0) {
        newCounts = {
          ...newCounts,
          [cur]: Math.floor(t)
        }
        t -= Math.floor(t)
      } else {
        const diff = t - ringSizes[i]
        if (diff >= 0) {
          newCounts = {
            ...newCounts,
            [cur]: 1,
          }
          t = diff
        }
      }
      //8.875
      setCounts(newCounts)
    })
    console.log(t)
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
        <div>
          <MDBTable bordered>
            <MDBTableHead>
              <tr>
                <th scope='col'>Size</th>
                <th scope='col'>Count</th>
              </tr>
            </MDBTableHead>
            <MDBTableBody>
              <tr>
                <th scope='row'>1"</th>
                <td>{counts.inch}</td>
              </tr>
              <tr>
                <th scope='row'>1/2"</th>
                <td>{counts.half}</td>
              </tr>
              <tr>
                <th scope='row'>1/4"</th>
                <td>{counts.quarter}</td>
              </tr>
              <tr>
                <th scope='row'>1/8"</th>
                <td>{counts.eigth}</td>
              </tr>
              <tr>
                <th scope='row'>1/16"</th>
                <td>{counts.sixteenth}</td>
              </tr>
              <tr>
                <th scope='row'>1/32"</th>
                <td>{counts.thirtysecond}</td>
              </tr>
            </MDBTableBody>
          </MDBTable>
        </div>
      </div>
    </div>
  )
}

export default App
