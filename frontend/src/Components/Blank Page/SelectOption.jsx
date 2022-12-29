import React, { useState } from "react";
import SelectAnswer from "./SelectAnswer";
import axios from "axios";

const SelectOption = ({ id }) => {
  const [answer, setAnswer] = useState();

  const handleCompletedClick = async (e, status) => {
    // console.log(answer)
    console.log(id)
    const data = await axios.put("http://localhost:3001/api/mark-status ", {
      _id: id,
      status: status
    });
    // console.log(data.data)
    // const sr = serviceRequests.slice();
    // sr[clickIndex] = data.data;
    // console.log(sr);
    // setserviceRequests(sr);
  };

  return (
    <>
      <select
        onChange={(e) => {
          const seletedValue = e.target.value;
          setAnswer(seletedValue);
          // console.log(seletedValue)
          handleCompletedClick(id, seletedValue)
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
