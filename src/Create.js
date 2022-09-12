import React, { useState, useEffect } from "react";
import TempGraph from "./TempGraph";
import Canvas from "./Canvas";
import SPO2Graph from "./SPO2Graph";
import QTGraph from "./QTGraph";
import QTCGraph from "./QTCGraph";
import QRSGraph from "./QRSGraph";
import MeanArterialPressureGraph from "./MeanArterialPressureGraph";
import BloodPressureGraph from "./BloodPressureGraph"; 
import PRGraph from "./PRGraph";
import PIGraph from "./PIGraph";
import HRGraph from "./HRGraph";
import MapGraph from "./MeanArterialPressureGraph";
let token,pid,vid,type,h,w;
const Create = (props) => {
  const [modalIsOpenBPModal, setIsOpenBPModal] = React.useState(false);
  const [modalIsOpenMAPModal, setIsOpenMAPModal] = React.useState(false);
  const [modalIsOpenPRModal, setIsOpenPRModal] = React.useState(false);
  const [modalIsOpenQTModal, setIsOpenQTModal] = React.useState(false);
  const [modalIsOpenQRSModal, setIsOpenQRSModal] = React.useState(false);
  const [modalIsOpenQTCModal, setIsOpenQTCModal] = React.useState(false);
  const [modalIsOpenHRModal, setIsOpenHRModal] = React.useState(false);
  const [modalIsOpenPIModal, setIsOpenPIModal] = React.useState(false);
  const [modalIsOpenSPO2Modal, setIsOpenSPO2Modal] = React.useState(false);
  const [modalIsOpenTempModal, setIsOpenTempModal] = React.useState(false);
  const [modalIsOpenEcgModal, setIsOpenEcgModal] = React.useState(false);

  useEffect(() => {

    if(props.match.params.type == 'qt')
    setIsOpenQTModal(true);
    else if(props.match.params.type == 'qtc')
    setIsOpenQTCModal(true);
    else if(props.match.params.type == 'qrs')
    setIsOpenQRSModal(true);
    else if(props.match.params.type == 'hr')
    setIsOpenHRModal(true);
    else if(props.match.params.type == 'pr')
    setIsOpenPRModal(true);
    else if(props.match.params.type == 'pi')
    setIsOpenPIModal(true);
    else if(props.match.params.type == 'map')
    setIsOpenMAPModal(true);
    else if(props.match.params.type == 'spo2')
    setIsOpenSPO2Modal(true);
    else if(props.match.params.type == 'ecg')
    setIsOpenEcgModal(true);
    else if(props.match.params.type == 'temp')
    setIsOpenTempModal(true);
    else if(props.match.params.type == 'bp')
    setIsOpenBPModal(true);

  token=props.match.params.token;
  type=props.match.params.type;
  vid=props.match.params.vid;
  pid=props.match.params.pid;
  h=props.match.params.height;
  w=props.match.params.width;
// alert(type)
}, []);
  return (
    <div style={{
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
    }}>
     
            {modalIsOpenQTModal ? (
              <QTGraph vid={vid} pid={pid} token={token} h={h} w={w} />
              ) : null}
              {modalIsOpenQTCModal ? (
              <QTCGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenQRSModal ? (
              <QRSGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenHRModal ? (
              <HRGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenPRModal ? (
              <PRGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenPIModal ? (
              <PIGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenSPO2Modal ? (
              <SPO2Graph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenTempModal ? (
              <TempGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenEcgModal ? (
              <Canvas vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenMAPModal ? (
              <MapGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
              {modalIsOpenBPModal ? (
              <BloodPressureGraph vid={vid} pid={pid} token={token} h={h} w={w}/>
              ) : null}
            
    
    </div>
  );
}
 
export default Create;