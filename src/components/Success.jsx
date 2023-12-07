import React from 'react'

function Success({message}) {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "2250px",
        }}
        class="alert alert-success"
        role="alert"
      >
      {message}
      </div>
    </div>
  );
}

export default Success
