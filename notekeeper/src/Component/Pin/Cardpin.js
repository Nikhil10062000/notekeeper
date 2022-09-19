import React from "react";

const Cardpin = ({ pin }) => {
  return (
    <>
      {pin.map((elem, id) => {
        return (
          <div>
            <div className="pinone">
              <div className="stick">
                <div className="sticknote">
                  <div className="notetitle">
                    <h2>{elem.title}</h2>
                  </div>
                  <div className="notetagline">
                    <p>{elem.tagline}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default Cardpin;
