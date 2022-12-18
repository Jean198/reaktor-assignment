import React from "react";

const Pilot = ({ pilots }) => {
  return (
    <>
      <div className="table-responsive">
        <table className=" table">
          <thead className="table-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">Distance to Nest</th>
              <th scope="col">email</th>
              <th scope="col">phone</th>
            </tr>
          </thead>
          <tbody>
            {pilots &&
              pilots.map((pilot, index) => {
                return (
                  <tr key={pilot.pilotId}>
                    <th scope="row">{index + 1}</th>
                    <td>
                      {pilot.firstName} {pilot.lastName}
                    </td>
                    <td>0</td>
                    <td>{pilot.email}</td>
                    <td>{pilot.phoneNumber}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Pilot;
