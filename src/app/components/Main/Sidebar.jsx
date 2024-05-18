import React from "react";
import DropDown from "../DropDown/DropDown";

const Sidebar = () => {
  const optionObj = [
    {
      filterName: "IDEAL FOR",
      options: ["men", "women", "kids"],
    },
    {
      filterName: "OCCASION",
      options: ["ALL"],
    },
    {
      filterName: "WORK",
      options: ["ALL"],
    },
    {
      filterName: "FABRIC",
      options: ["ALL"],
    },
    {
      filterName: "SEGMENT",
      options: ["ALL"],
    },
    {
      filterName: "SUITABLE FOR",
      options: ["ALL"],
    },
    {
      filterName: "RAW MATERIALS",
      options: ["ALL"],
    },
    {
      filterName: "PATTERN",
      options: ["ALL"],
    },
  ];
  return (
    <>
      <div className="custmizbleContainer">
        <input
          type="checkbox"
          id="customizble"
          name="customizble"
          value="customizble"
          checked={false}
        />
        <label>CUSTOMIZBLE</label>
      </div>
      <hr />
      <div>
        {optionObj.map((opt, idx) => (
          <DropDown key={idx} {...opt} />
        ))}
      </div>
    </>
  );
};

export default Sidebar;