import React, { useEffect, useState } from "react";
import Pilot from "./Pilot";
import birdnest from "../assets/images/birdnest.png";
import { URL } from "../App";
import axios from "axios";

const PilotsList = () => {
  const [pilots, setPilots] = useState([]);
  const [drone, setDrone] = useState([]);
  const txml = require("txml");

  useEffect(() => {
    const interval = setInterval(() => {
      fetch("/drones")
        .then((response) => response.text())
        .then((data) => {
          const droneData = txml.simplify(txml.parse(data)).report.capture
            .drone;
          setDrone(droneData);
          return droneData;
        })
        .then((data) => {
          return Promise.all(
            data.map((drone) =>
              fetch("/pilots/" + drone.serialNumber)
                .then((resp) => resp.json())
                .then((singlePilot) => {
                  return singlePilot;
                })
            )
          );
        })
        .then((pilotsList) => setPilots(pilotsList));

      /*

        axios.get("https://assignments.reaktor.com/birdnest/drones")
        .then((response) => JSON.stringify(response))
        .then((data) => {
          //console.log (txml.simplify(txml.parse(data)).report.capture
          //.drone)
          const droneData = txml.simplify(txml.parse(data)).report.capture
            .drone;
          //console.log(droneData);
          setDrone(droneData);
          return droneData;
        })
        .then((data) => {
          return Promise.all(
            data.map((drone) =>
              axios.get("https://assignments.reaktor.com/birdnest/pilots/" + drone.serialNumber)
                .then((singlePilot) => {
                  //console.log(singlePilot.data)
                  return singlePilot.data;
                })
            )
          );
        })
        .then((pilotsList) => setPilots(pilotsList));

        */
    }, 2000);
  }, []);

  return (
    <div className="">
      <div>
        <img src={birdnest} alt="" className="birdnest-image" />
      </div>
      <Pilot pilots={pilots} />
    </div>
  );
};

export default PilotsList;
