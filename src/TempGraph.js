import React, { useState, useEffect } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
let link='https://cloudclinicapi.azurewebsites.net/api/';
const TempGraph = (props) => {
  let graphData = [];

  const [options, setOptions] = useState();
  const [errorText, setErrorText] = useState();
  const [data, setData] = useState([]);
  const [visitDate, setVisitDate] = useState([]);

  const getTempValueApi = async () => {
    try {
      const response = await fetch(
        `${link}VitalSign/getPatienttemp/${props.pid}`,
        {
          method: "GET",
          body: null,
          headers: {
            Authorization: `Bearer ${props.token}`,
          },
        }
      ).then((response) => {
        response.json().then((data) => {
          if (data) {
            setVisitDate(data?.vitalsignGraph?.datetime.split(","));
            setData(data?.vitalsignGraph?.temp.split(","));
          }
        });
      });
    } catch (err) {
      console.log(err);
      setErrorText(err);
    }
  };

  useEffect(() => {
    getTempValueApi();
  }, []);
  
  useEffect(() => {
    console.log(data);
    console.log(visitDate);

    for (let i = 0; i < data.length; i++) {
      graphData.push({ label: `${visitDate[i]}`, y: parseFloat(data[i]) });

    }

    setOptions({
       width:400,//in pixels
      height:350,//in pixels
       legend: {
     horizontalAlign: "center", // left, center ,right 
     verticalAlign: "top",  // top, center, bottom
   },
      dataPointMaxWidth: 20,
      axisX:{
        title: "Visit Date",
           labelAngle: 0,
        labelWrap :true,
        labelAutoFit:true,
       },
       axisY:{
        title: "Fahrenheit",
      
       },
      data: [
             {
          type: "column",
          color:"#36a9f7",
          dataPoints: graphData,
        },
      ],
    });

console.log(graphData);
    console.log(data);
  }, [data, visitDate]);

  return (
    <div className="w-100">
         
      {options && (
   
        <CanvasJSChart
          options={options}
        />
      )}
    </div>
  );
};

export default TempGraph;
