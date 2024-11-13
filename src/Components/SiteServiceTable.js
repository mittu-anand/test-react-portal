import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from "@mui/material";
import StatusCircle from "./StatusCircle";
import { getStatusColor } from "../Utilities";

function SiteServiceTable({ src }) {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  return (
    <>
      <TableContainer className="o-table-container">
        <Table stickyHeader>
          <TableHead>
            <TableRow>
              <TableCell className="table-header">Service Name</TableCell>
              <TableCell className="table-header">Status</TableCell>
              <TableCell className="table-header">
                Bandwidth Utilization
              </TableCell>
              <TableCell className="table-header">Last Checked</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {src
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>{row?.service}</TableCell>
                  <TableCell>
                    <StatusCircle color={getStatusColor(row?.ragStatus)} />
                  </TableCell>
                  <TableCell>{row?.bandwidthUtilization}</TableCell>
                  <TableCell>{row?.lastChecked}</TableCell>
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
    </>
  );
}

export default SiteServiceTable;
