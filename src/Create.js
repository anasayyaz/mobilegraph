import React, { useState, useEffect } from "react";
import TempGraph from "./TempGraph";
let token,pid,vid,type;
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

  }, []);
  return (
    <div className="create">
     
            {modalIsOpenQTModal ? (
              <h2>qt</h2>
              ) : null}
              {modalIsOpenQTCModal ? (
              <h2>qtc</h2>
              ) : null}
              {modalIsOpenQRSModal ? (
              <h2>qrs</h2>
              ) : null}
              {modalIsOpenHRModal ? (
              <h2>HR</h2>
              ) : null}
              {modalIsOpenPRModal ? (
              <h2>pr</h2>
              ) : null}
              {modalIsOpenPIModal ? (
              <h2>pi</h2>
              ) : null}
              {modalIsOpenSPO2Modal ? (
              <h2>spo2</h2>
              ) : null}
              {modalIsOpenTempModal ? (
              <TempGraph pid={pid} token={token}/>
              ) : null}
              {modalIsOpenEcgModal ? (
              <h2>ecg</h2>
              ) : null}
              {modalIsOpenMAPModal ? (
              <h2>map</h2>
              ) : null}
              {modalIsOpenBPModal ? (
              <h2>bp</h2>
              ) : null}
            
    
    </div>
  );
}
 
export default Create;