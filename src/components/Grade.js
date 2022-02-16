import Rating from "@mui/material/Rating";
import { useEffect, useState } from "react";

function Grade({ grade, gradeChange }) {
  const [value, setValue] = useState(grade);

  useEffect(() => {
    gradeChange && gradeChange(value);
  }, [value]);

  return (
    <div>
      {grade !== -1 ? (
        <Rating name="read-only" value={value} precision={0.5} readOnly />
      ) : (
        <Rating
          name="simple-controlled"
          value={value}
          precision={0.5}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
      )}
    </div>
  );
}

export default Grade;
