import React from "react";
import { Box } from "@mui/material";

function StatusCircle({ color }) {
  return (
    <Box
      sx={{
        width: 12,
        height: 12,
        backgroundColor: color || "#81b553",
        borderRadius: "50%",
        mr: 1,
      }}
    />
  );
}

export default StatusCircle;
