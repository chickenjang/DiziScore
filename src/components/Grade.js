import Rating from "@mui/material/Rating";
import { useState } from "react";

function Grade({ grade }) {
  const [value, setValue] = useState(grade);
  console.log(grade);
  return (
    <div>
      {grade ? (
        <Rating name="read-only" value={value} readOnly />
      ) : (
        <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      )}
    </div>
  );
}

export default Grade;
