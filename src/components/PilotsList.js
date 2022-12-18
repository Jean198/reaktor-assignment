import React, { useEffect, useState } from "react";
import Pilot from "./Pilot";
import birdnest from '../assets/images/birdnest.png'
import {URL} from '../App'

const PilotsList = () => {
  const [pilots, setPilots] = useState([]);
  const [drone, setDrone] = useState([]);
  const txml = require("txml");


  useEffect(() => {
    const interval = setInterval(() => {
      fetch(`${URL}/drones`)
        .then((response) => response.text())
        .then((data) => {
          //console.log (txml.simplify(txml.parse(data)))
          const droneData = txml.simplify(txml.parse(data)).report.capture
            .drone;
          //console.log(droneData);
          setDrone(droneData);
          return droneData;
        })
        .then((data) => {
          return Promise.all(
            data.map((drone) =>
              fetch(`${URL}/pilots/` + drone.serialNumber)
                .then((resp) => resp.json())
                .then((singlePilot) => {
                  return singlePilot;
                })
            )
          );
        })
        .then((pilotsList) => setPilots(pilotsList));
    }, 2000);
  }, []);

  return (
    <div className="">

      <div>
        <img src={birdnest} alt="" className="birdnest-image"/>
      </div>
      <Pilot pilots={pilots} />


    </div>
  );
};

export default PilotsList;
