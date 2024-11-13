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
  TablePagination,
} from "@mui/material";
import StatusCircle from "./StatusCircle";
import AccountTreeIcon from "@mui/icons-material/AccountTree";
import SsidChartOutlinedIcon from "@mui/icons-material/SsidChartOutlined";
import MonitorHeartOutlinedIcon from "@mui/icons-material/MonitorHeartOutlined";
import TopologyDialog from "./TopologyDialog";

function AlarmViewTable({ src }) {
  const [open, setOpen] = useState(false);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const showTopology = () => {
    setOpen(true);
  };

  return (
    <>
      <TableContainer className="o-table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Device Name</TableCell>
              <TableCell className="table-header">Summary</TableCell>
              <TableCell className="table-header">Last Occured</TableCell>
              <TableCell className="table-header">Alert Group</TableCell>
              <TableCell className="table-header">Severity</TableCell>
              <TableCell className="table-header">Ticket ID</TableCell>
              <TableCell className="table-header">Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {src
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row?.name}</TableCell>
                  <TableCell>{row?.description}</TableCell>
                  <TableCell>{row?.lastUpdatedTimestamp}</TableCell>
                  <TableCell>{row.model}</TableCell>
                  <TableCell>{row.severity}</TableCell>
                  <TableCell>{row.ticketId}</TableCell>
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
      <TablePagination
        rowsPerPageOptions={[5, 10, 15]}
        component="div"
        count={src.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
      <TopologyDialog open={open} handleClose={() => setOpen(false)} />
    </>
  );
}

export default AlarmViewTable;
