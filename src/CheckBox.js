import React, { useState } from "react";
import "./CheckBox.css";

// controlled Component--------------------------------------
export const CheckBox = (props) => {
  const [value, setValue] = useState([]);

  const checkBoxHandler = (e, newVal) => {

    // when the check box is checked
    let isValid = e.target.checked;
    if (isValid) {
      console.log(newVal);

      setValue((preVal) => {
        return [newVal, ...preVal];
      });
    }

    // when check box is not checked
    else if (!isValid) {
      // console.log("false hu me");
      if (value.includes(newVal)) {
        // console.log("ha hoon me");
        let newArray = value.filter((v) => {
          return v !== newVal;
        });

        setValue( [...newArray]);
      }
    }

  };

  const formValueHandler = (event) => {
    event.preventDefault();
    console.log(value);

    props.onSubmit(value);

    // reset value
    setValue([]);


  };

  return (
    <div className="grid">
      <form onSubmit={formValueHandler}>
        <input
          type="checkbox"
          name="first"
          id="first"
          value="First"
          checked={value.includes("First") ? true : false}
          onChange={(e) => {
            checkBoxHandler(e, e.target.value);
          }}
        />
        <label htmlFor="first">First</label> <br />
        <input
          type="checkbox"
          name="second"
          id="second"
          value="Second"
          checked={value.includes("Second") ? true : false}
          onChange={(e) => {
            checkBoxHandler(e, e.target.value);
          }}
        />
        <label htmlFor="second">Second</label> <br />
        <input
          type="checkbox"
          name="third"
          id="third"
          value="Third"
          checked={value.includes("Third") ? true : false}
          onChange={(e) => {
            checkBoxHandler(e, e.target.value);
          }}
        />
        <label htmlFor="third">Third</label>
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
