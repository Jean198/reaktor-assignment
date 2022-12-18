import React, { useEffect, useState } from "react";
import Pilot from "./Pilot";

const PilotsList = () => {
  const [pilots, setPilots] = useState([]);
  const [drone, setDrone] = useState([]);
  const txml = require("txml");

  useEffect(() => {
    fetch("/drones")
      .then((response) => response.text())
      .then((data) => {
        //console.log (txml.simplify(txml.parse(data)))
        const droneData = txml.simplify(txml.parse(data)).report.capture.drone;
        //console.log(droneData);
        setDrone(droneData);
        return droneData;
      })
      .then((data) => {
        return Promise.all(data.map(drone =>
            fetch("/pilots/"+drone.serialNumber)
              .then((resp) => resp.json())
              .then(singlePilot => {
                return singlePilot;
              })
          ))
      }).then((pilotsList) =>setPilots(pilotsList) );
  }, []);

  return (
    <div className="">
      <Pilot pilots={pilots} />

    </div>
  );
};

export default PilotsList;
