import "./Second.css";
// import GLOBE from "../img/globe.png";

import React from "react";

const Second = () => {
  return <div className="second">
    <div className="left">
        {/* <img src={GLOBE} alt="" className="globe" /> */}
        <p className="globe-text">Based in Singapore
        </p>
        <p className="globe-text-credit">
        ©2025 arossobench 
        </p>
    </div>
    <div className="about-title">ARB Studio <span>isn't just a</span> rental space  <br />
    Designed to be a <span>chill</span> yet <span>productive</span> environment<br />
    It's where <span>creators</span> come together to<span> experiment</span> and bring their vision to life. <br />

    </div>
  </div>;
}

export default Second;