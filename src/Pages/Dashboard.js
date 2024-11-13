import React, { useEffect, useState } from "react";
import { Card, Typography } from "@mui/material";
import ServiceTable from "../Components/ServiceTable";
import Grid from "@mui/material/Grid2";
import CardHeader from "../Components/CardHeader";
import { PieChart } from "@mui/x-charts";
import { Box, Stack } from "@mui/material";
import PageHeader from "../Components/PageHeader";
import IncidentTable from "../Components/IncidentTable";
import SiteCards from "../Components/SiteCards";
import { useAppContext } from "../Context/AppContext";
import useApiService from "../Hooks/useApiService";

function Dashboard() {
  const { state } = useAppContext();
  const { fetchDashboardData, groupServicesBySite } = useApiService();
  const [chartData, setChartData] = useState([]);
  const [serviceGroups, setServiceGroups] = useState([]);

  useEffect(() => {
    setServiceGroups(groupServicesBySite(state?.dashboard?.site));
    setChartData([
      {
        label: "P1 Tickets",
        value: state?.dashboard?.ticketP1Count,
        color: "#3f51b5",
      },
      {
        label: "P2 Tickets",
        value: state?.dashboard?.ticketP2Count,
        color: "#f44336",
      },
    ]);
  }, [state?.dashboard]);

  useEffect(() => {
    fetchDashboardData();
  }, []);

  return (
    <>
      <PageHeader title="Customer Dashboard" />
      <Grid container spacing={2} padding={3}>
        <Grid size={5}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Overall Service Health View" />
            <ServiceTable src={state?.dashboard?.site || []} />
          </Card>
        </Grid>
        <Grid size={7}>
          <Card variant="outlined" className="card-box">
            <CardHeader title="Ticket Overview" />
            <Grid container spacing={2}>
              <Grid size={4}>
                {/* Legend */}
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
              </Grid>
              <Grid size={8}>
                <IncidentTable src={state?.dashboard?.tickets || []} />
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Grid container spacing={2} padding={3}>
        <Card variant="outlined" sx={{ width: "100%" }}>
          <CardHeader title="Overall Site Health View" />
          <div style={{ display: "flex", flexWrap: "wrap", gap: "1px" }}>
            {serviceGroups.map((site, index) => (
              <div key={index} style={{ flex: "1 0 20%", maxWidth: "400px" }}>
                <SiteCards site={site} />
              </div>
            ))}
          </div>
        </Card>
      </Grid>
    </>
  );
}

export default Dashboard;
