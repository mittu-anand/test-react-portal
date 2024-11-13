import { Typography } from "@mui/material";
import React from "react";

function PageHeader({ title, subTitleValue }) {
  return (
    <div className="page-header-inbuilt">
      <Typography
        variant="h6"
        className="page-title"
        gutterBottom
        sx={{ padding: 1 }}
      >
        {title}
        {subTitleValue && (
          <span className="page-sub-title"> {`${subTitleValue}`}</span>
        )}
      </Typography>
    </div>
  );
}

export default PageHeader;
