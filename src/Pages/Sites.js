import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import CardHeader from "../Components/CardHeader";
import { PieChart } from "@mui/x-charts";
import { Box, Stack } from "@mui/material";
import PageHeader from "../Components/PageHeader";
import IncidentTable from "../Components/IncidentTable";
import SiteServiceTable from "../Components/SiteServiceTable";
import AlarmViewTable from "../Components/AlarmViewTable";
import { useParams } from "react-router-dom";
import useApiService from "../Hooks/useApiService";
import { useAppContext } from "../Context/AppContext";

function Sites() {
  const { siteCode } = useParams();
  const { state } = useAppContext();
  const [chartData, setChartData] = useState([]);
  const { fetchSiteData } = useApiService();

  useEffect(() => {
    fetchSiteData(siteCode);
  }, []);

  useEffect(() => {
    setChartData([
      {
        label: "P1 Tickets",
        value: state?.sites?.ticketP1Count,
        color: "#3f51b5",
      },
      {
        label: "P2 Tickets",
        value: state?.sites?.ticketP2Count,
        color: "#f44336",
      },
    ]);
  }, [state?.sites]);

  return (
    <>
      <PageHeader
        title="Site Dashboard"
        subTitleValue={state?.sites?.sites?.[0]?.siteName || siteCode}
      />
      <Grid container spacing={2} padding={3}>
        <Grid size={5}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Overall Service Health View" />
            <SiteServiceTable src={state?.sites?.sites || []} />
          </Card>
        </Grid>
        <Grid size={7}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Ticket Overview" />
            <Grid container spacing={2}>
              <Grid size={4}>
                <Stack
                  direction="row"
                  justifyContent="center"
                  className="pie-legend"
                  spacing={2}
                  mb={2}
                >
                  {chartData.map((item) => (
                    <Box key={item.label} display="flex" alignItems="center">
                      <Box
                        sx={{
                          width: 12,
                          height: 12,
                          backgroundColor: item.color,
                          borderRadius: "50%",
                          mr: 1,
                        }}
                      />
                      <Typography variant="body2">{item.label}</Typography>
                    </Box>
                  ))}
                </Stack>
                {chartData && (
                  <PieChart
                    series={[
                      {
                        outerRadius: 100,
                        data: chartData,
                      },
                    ]}
                    className="pie-chart-wrapper"
                    height={300}
                    slotProps={{
                      legend: { hidden: true },
                    }}
                  />
                )}
              </Grid>
              <Grid size={8}>
                <IncidentTable src={state?.sites?.tickets || []} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={3}>
        <Grid size={2}>
          <div className="quick-info-box">
            <div className="quick-info-header">Tickets in SLA</div>
            <div className="quick-info-content">{state?.sites?.slaTickets}</div>
          </div>
          <div className="quick-info-box">
            <div className="quick-info-header">SLA Breached</div>
            <div className="quick-info-content">
              {state?.sites?.slaBreached}
            </div>
          </div>
          <div className="quick-info-box">
            <div className="quick-info-header">SLA Breach in Next 1 Hour</div>
            <div className="quick-info-content">
              {state?.sites?.slaBreachIn1Hour}
            </div>
          </div>
        </Grid>
        <Grid size={10}>
          <Card
            className="card-box-alarm"
            variant="outlined"
            sx={{ width: "100%" }}
          >
            <CardHeader title="Overall Alarm View" />
            <AlarmViewTable src={state?.sites?.overallAlarms || []} />
          </Card>
        </Grid>
      </Grid>
    </>
  );
}

export default Sites;
