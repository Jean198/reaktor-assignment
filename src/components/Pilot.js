import React from "react";

const Pilot = ({ pilots }) => {
  return (
    <>
      {pilots &&
        pilots.map((pilot) => {
          return (
            <div key={pilot.pilotId} className="text-left pilot-info-container">
              <p> <b>Closest distance to the nest:</b> 0</p>
              <div>
                <p>
                  <b>Pilote name:</b> {pilot.firstName} {pilot.lastName} <br />
                  <b>Email:</b> {pilot.email}<br />
                  <b>Phone number:</b> {pilot.phoneNumber}
                </p>
              </div>
            </div>
          );
        })}
    </>
  );
};

export default Pilot;
