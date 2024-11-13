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
import { Link } from "react-router-dom";

function IncidentTable({ src }) {
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
              <TableCell className="table-header">Ticket ID</TableCell>
              <TableCell className="table-header">Summary</TableCell>
              <TableCell className="table-header">Status</TableCell>
              <TableCell className="table-header">Priority</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {src
              ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <Link to={`#`}>{row?.ticketId}</Link>
                  </TableCell>
                  <TableCell>{row?.description}</TableCell>
                  <TableCell>{row?.status}</TableCell>
                  <TableCell>{row?.ticketPriority}</TableCell>
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

export default IncidentTable;
