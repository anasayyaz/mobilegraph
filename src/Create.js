import React, { useState, useEffect } from "react";


const Create = (props) => {


  useEffect(() => {
    alert(props.match.params.pid)
    alert(props.match.params.vid)
    alert(props.match.params.type)
    alert(props.match.params.token)
  }, []);
  return (
    <div className="create">
      <h2>create</h2>
    </div>
  );
}
 
export default Create;