import React from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardHeader from "../Components/CardHeader";
import PageHeader from "../Components/PageHeader";
import IncidentTable from "../Components/IncidentTable";
import AlarmViewTable from "../Components/AlarmViewTable";
import { useParams } from "react-router-dom";

function Services() {
  const { serviceId } = useParams();

  return (
    <>
      <PageHeader title="Service Dashboard" subTitleValue={serviceId} />
      <Grid container spacing={2} padding={3}>
        <Grid size={4}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Service Health View" />
            <Grid container spacing={2} padding={3}>
            <Grid size={6}>
              <div className="service-info-item">
                <Typography className="service-info-item-title" variant="h5" gutterBottom>
                  Service ID
                </Typography>
                <Typography className="service-info-item-value" variant="h6" gutterBottom>
                  MPSL_XYZ
                </Typography>
              </div>
            </Grid>
            <Grid size={6}>
              <div className="service-info-item">
                <Typography className="service-info-item-title" variant="h5" gutterBottom>
                  Service Name
                </Typography>
                <Typography className="service-info-item-value" variant="h6" gutterBottom>
                  MPSL_XYZ
                </Typography>
              </div>
            </Grid>
            <Grid size={6}>
              <div className="service-info-item">
                <Typography className="service-info-item-title" variant="h5" gutterBottom>
                  Bandwidth
                </Typography>
                <Typography className="service-info-item-value" variant="h6" gutterBottom>
                  MPSL_XYZ
                </Typography>
              </div>
            </Grid>
            <Grid size={6}>
              <div className="service-info-item">
                <Typography className="service-info-item-title" variant="h5" gutterBottom>
                  Status
                </Typography>
                <Typography className="service-info-item-value" variant="h6" gutterBottom>
                  MPSL_XYZ
                </Typography>
              </div>
            </Grid>
            </Grid>
          </Card>
        </Grid>
        <Grid size={8}>
          <Card
            className="card-box-large"
            variant="outlined"
            sx={{ width: "100%" }}
          >
            <CardHeader title="Alarm View" />
            <AlarmViewTable />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={3}>
        <Grid size={12}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Service Details" />
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={3}>
        <Grid size={6}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Ticket Overview" />
            <IncidentTable />
          </Card>
        </Grid>
        <Grid size={6}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Toplogy Overview" />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Services;
