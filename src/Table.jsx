import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"
import Row from "./Row"

export default function Table({ counts }) {
  const rows = Object.entries(counts).map(([size, count], i) => {
    return <Row key={i} size={size} amount={count} />
  })

  return (
    <div>
      <MDBTable bordered>
        <MDBTableHead>
          <tr>
            <th scope='col'>Size</th>
            <th scope='col'>Count</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {rows}
        </MDBTableBody>
      </MDBTable>
    </div>
  )
}
