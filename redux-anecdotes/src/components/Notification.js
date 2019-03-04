import React from 'react';

const Notification = (props) => {
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  console.log('derp :D ', props.store.getState())
  return (
    <div style={style}>
      {props.store.getState().notifications}
    </div>
  )
}

export default Notification
