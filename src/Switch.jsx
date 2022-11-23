import { MDBSwitch } from "mdb-react-ui-kit";

export default function Switch({ lightGauge, setLightGauge }) {
  return (
    <>
      <MDBSwitch
        id='gaugeSwitch'
        checked={lightGauge}
        onChange={() => setLightGauge()}
        label='Light gauge' />
    </>
  )
}
