export default function Row({ size, amount }) {
  const sizeConversion = {
    "inch": "1\"",
    "half": "1/2\"",
    "quarter": "1/4\"",
    "eigth": "1/8\"",
    "sixteenth": "1/16\"",
    "thirtysecond": "1/32\"",
  }

  return (
    <tr>
      <th scope='row'>{sizeConversion[size]}</th>
      <td>{amount}</td>
    </tr>
  )
}
