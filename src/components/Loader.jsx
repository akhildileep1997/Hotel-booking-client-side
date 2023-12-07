import React, { useState} from "react";
import DotLoader from "react-spinners/DotLoader";

function Loader() {
  let [loading, setLoading] = useState(true);
 

  return (
    <div className="text-center">
      <div style={{display:'flex',alignItems:'center',justifyContent:'center',marginTop:'250px'}} className="sweet-loading ">
        <DotLoader
          color="red"
          loading={loading}
          cssOverride=""
          size={90}
          aria-label="Loading Spinner"
          data-testid="loader"
        />
      </div>
    </div>
  );
}

export default Loader;
