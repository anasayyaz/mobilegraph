import React, { useRef, useEffect, useState } from "react";
let status;
const Canvas = (props) => {
  const canvasRef = useRef(null);
let x,y;
  const [errorText, setErrorText] = useState();
  const [data, setData] = useState([]);
  const getECGValueApi = async () => {
    try {
      const response = await fetch(
        `https://cloudclinicapi.azurewebsites.net/api/vitalsign/getPatientVitalSignbyVisit/${props.vid}`,
        {
          method: "GET",
          body: null,
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      ).then((response) => {
        response.json().then((data) => {
            if (data == "Sorry, no luck, No Data Found in our system!") {
              setErrorText("No ECG Data Found in our system!");
              // alert("no data")
            } else {
              // alert("getting")
              if(data.ecg==null)
              {
                // alert("empty")
                status=0;
                
              }
              else
              {
                status=1;
                setData(data.ecg && data.ecg.split(","));
              }
            
            }
        });
      });
    } catch (err) {
      // alert(err);
    }
  };

  useEffect(() => {
    getECGValueApi();
  }, []);

  useEffect(() => {
    // console.log(data);
    // alert("status"+status)
if(status==1)
     {const canvas = canvasRef.current;
      var ctx = canvas.getContext("2d"),
      w = canvas.width,
      h = canvas.height,
      px = 0,
      opx = 0,
      speed = 1,
      py = h * 0.8,
      opy = py,
      scanBarWidth = 20;
      //  ctx.transform(1, 0, 0, -1, 0, canvas.height);
      ctx.strokeStyle = "#202020";
           ctx.lineWidth = 1;
        
 
  // for (x=0;x<=w;x+=40) {
  //       for (y=0;y<=h;y+=40) {
  //           ctx.moveTo(x, 0);
  //           ctx.lineTo(x, h);
  //           ctx.stroke();
  //           ctx.moveTo(0, y);
  //           ctx.lineTo(w, y);
  //           ctx.stroke();
  //       }
  //   }


    var i = 0;
    function PYval() {
      py = -data[i] /10+200;
      i=i+4;
      if (i == data.length - 1) i = 0;
    }
    loop();


    function loop() {
    
  

    ctx.strokeStyle = "#00bd00";
    ctx.lineWidth = 4;
      PYval();
      px=px+2;
      ctx.beginPath();
      ctx.moveTo(opx, opy);
      ctx.lineTo(px, py);
      ctx.stroke();
      
      

      opx = px;
      opy = py;
      if (opx == w+80) {
        px = opx = 0;
   
        ctx.strokeStyle = "#202020";
  ctx.lineWidth = 1;
// for (x=0;x<=w;x+=40) {
  alert("clear")
         ctx.clearRect(0, 0, w, h);
      
  //       for (y=0;y<=h;y+=40) {
  //           ctx.moveTo(x, 0);
  //           ctx.lineTo(x, h);
  //           ctx.stroke();
  //           ctx.moveTo(0, y);
  //           ctx.lineTo(w, y);
  //           ctx.stroke();
  //       }
  //   }
     
      }

      requestAnimationFrame(loop);
     

    }}
  }, [data]);

  return (
    <React.Fragment>
      {status ? (
      <canvas
        ref={canvasRef}
        width={props.w}
        height={"300"}
        style={{
          backgroundColor: "black",
        }}
      />
        ) : 
        <div style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          widht: "100%",
         
        
        }}>
   <h2 style={{ backgroundColor: "#000000",color:"#00bd00",padding: "10px"}}>No ECG data found</h2>
        </div>
        
        }


</React.Fragment>
  );
};

export default Canvas;
