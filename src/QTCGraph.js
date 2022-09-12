import React, { useState, useEffect } from "react";

import CanvasJSReact from "./canvasjs.react";
let link='https://cloudclinicapi.azurewebsites.net/api/';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const QTCGraph = (props) => {
  let graphData = [];

  const [options, setOptions] = useState();

  const [errorText, setErrorText] = useState();
  const [data, setData] = useState([]);
  const [visitDate, setVisitDate] = useState([]);

  const getQTCValueApi = async () => {
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
            setData(data?.vitalsignGraph?.qtc.split(","));
          }
        });
      });
    } catch (err) {
      console.log(err);
      setErrorText(err);
    }
  };

  useEffect(() => {
    getQTCValueApi();
  }, []);

  useEffect(() => {
    console.log(data);
    console.log(visitDate);

    for (let i = 0; i < data.length; i++) {
      graphData.push({ label: `${visitDate[i]}`, y: parseFloat(data[i]) });
    }

    setOptions({
       width:props.w,//in pixels
      height:props.h,//in pixels
       legend: {
     horizontalAlign: "center", // left, center ,right 
     verticalAlign: "top",  // top, center, bottom
   },
      dataPointMaxWidth: 20,
      axisX:{
        // title: "Visit Date",
            labelAngle: 0,
        labelWrap :true,
        labelAutoFit:true,
       },
       axisY:{
        title: "milliseconds"
        
       },
      data: [
             {
          type: "column",
          color:"#36a9f7",
          dataPoints: graphData,
        },
      ],
    });

  }, [data, visitDate]);

  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
      {options && (
        <CanvasJSChart
          options={options}
        />
      )}
    </div>
  );
};

export default QTCGraph;
