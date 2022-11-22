import { MDBInput } from 'mdb-react-ui-kit'

export default function Input({ width, setWidth }) {

  return (
    <div className='mb-3'>
      <MDBInput
        label='Coil width:'
        id='form1'
        type='text'
        size='lg'
        value={width}
        onChange={setWidth} />
    </div>
  )
}
