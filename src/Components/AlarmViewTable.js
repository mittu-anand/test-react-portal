import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import StatusCircle from "./StatusCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import TopologyDialog from "./TopologyDialog";

function AlarmViewTable() {
  const [open, setOpen] = useState(false);
  const rows = [
    { id: 1, name: "Item 1", description: "Description 1" },
    { id: 2, name: "Item 2", description: "Description 2" },
    { id: 3, name: "Item 3", description: "Description 3" },
  ];

  const showTopology = () => {
    setOpen(true);
  };

  return (
    <>
      <TableContainer sx={{ padding: "30px" }}>
        <Table>
          <TableHead
            sx={{
              borderTop: "2px solid #ff7900",
              borderBottom: "2px solid #ff7900",
            }}
          >
            <TableRow>
              <TableCell>Device Name</TableCell>
              <TableCell>Summary</TableCell>
              <TableCell>Last Occured</TableCell>
              <TableCell>Alert Group</TableCell>
              <TableCell>Severity</TableCell>
              <TableCell>Ticket ID</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell>{row.id}</TableCell>
                <TableCell>
                  <StatusCircle />
                </TableCell>
                <TableCell>{row.name}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>{row.description}</TableCell>
                <TableCell>
                  <div className="alarm-actions">
                    <ButtonGroup size="small" aria-label="Small button group">
                      <Button key="one">
                        <AccountTreeIcon onClick={showTopology} />
                      </Button>
                      <Button key="two">
                        <SsidChartOutlinedIcon />
                      </Button>
                      <Button key="three">
                        <MonitorHeartOutlinedIcon />
                      </Button>
                    </ButtonGroup>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TopologyDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default AlarmViewTable;
