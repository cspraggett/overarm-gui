import { MDBTable, MDBTableBody, MDBTableHead } from "mdb-react-ui-kit"
import Row from "./Row"

export default function Table({ counts }) {
  const rows = Object.keys(counts).map((count, i) => {
    return <Row key={i} size={count} amount={counts[count]} />
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
