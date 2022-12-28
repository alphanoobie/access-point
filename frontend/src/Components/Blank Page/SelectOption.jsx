import React, { useState } from "react";
import SelectAnswer from "./SelectAnswer";

const SelectOption = () => {
  const [answer, setAnswer] = useState();

  return (
    <>
      <select
        onChange={(e) => {
          const seletedValue = e.target.value;
          setAnswer(seletedValue);
        }}
      >
        <option value="None">None</option>
        <option value="Started">Started</option>
        <option value="Ongoing">On Going</option>
        <option value="Finished">Finished</option>
      </select>
      {answer}
    </>
  );
};

export default SelectOption;
