import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h3>Terms and condition.</h3>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae quidem
        id in nihil amet incidunt unde, sequi facere ullam veritatis, totam,
        sapiente ad mollitia? Quo non excepturi accusantium similique mollitia!
      </p>
      <p>Go Back<Link to='/register' > Register</Link></p>
    </div>
  );
};

export default Terms;
