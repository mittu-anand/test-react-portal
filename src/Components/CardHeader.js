import { Divider, Typography } from "@mui/material";
import React from "react";

function CardHeader({ title }) {
  return (
    <div className="card-header-inbuilt">
      <Typography variant="h6" className="card-header-title" gutterBottom>
        {title}
      </Typography>
      <Divider />
    </div>
  );
}

export default CardHeader;
