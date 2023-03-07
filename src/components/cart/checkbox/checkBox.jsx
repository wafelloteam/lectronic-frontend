import Form from 'react-bootstrap/Form';
import React from 'react';
import './checkbox.css'

function CheckBox() {
  return (
    <>
     <div>
    <Form >
        <div className='check'>
          <Form.Check defaultChecked={true}/>
        </div>
    </Form>                                 
     </div>
    </>
  )
}

export default CheckBox