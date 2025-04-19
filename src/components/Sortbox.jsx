import { React, useState } from "react";
import products from "../../data/products";


function Test() {
  const [sortState, setSortState] = useState("none");

  const sortMethods = {
    none: { method: () => 0 },
    AZ: { method: (a, b) => a.title.localeCompare(b.title) },
    ZA: { method: (a, b) => b.title.localeCompare(a.title) },
    HL: { method: (a, b) => b.price - a.price },
    LH: { method: (a, b) => a.price - b.price },
  };

  return (
    <div className="main">
      <select defaultValue={'none'} onChange={(e) => setSortState(e.target.value)}>
        {/* <option value="none" disabled>None</option> */}
        <option value="AZ">A-Z</option>
        <option value="ZA">Z-A</option>
        <option value="HL">Price: high to low</option>
        <option value="LH">Price: low to high</option>
      </select>
      <ul>
        {[...products].sort((sortMethods[sortState]).method).map((name, i) => (
          <li key={i}>{name.title} ${name.price.toLocaleString()}</li>
        ))}
      </ul>
    </div>
  );
}
export default Test;