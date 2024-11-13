import * as React from "react";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import DomainIcon from "@mui/icons-material/Domain";
import StatusCircle from "./StatusCircle";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import { Divider, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { getStatusColor } from "../Utilities";
import { Link } from "react-router-dom";

export default function SiteCards({ site }) {
  return (
    <Card sx={{ maxWidth: 345, margin: 6 }} variant="outlined">
      <CardHeader
        avatar={<DomainIcon sx={{ color: "#ff7900" }} />}
        action={<StatusCircle color={getStatusColor(site?.status)} />}
        title={
          <Link
            className="site-card-title"
            to={`/site/${site?.siteCode}`}
          >
            {site?.siteName}
          </Link>
        }
      />
      <Divider/>
      <CardContent>
        <List dense>
          {site.services.map((service, index) => (
            <ListItem key={index}>
              <ListItemIcon>
                <KeyboardArrowRightIcon />
              </ListItemIcon>
              <ListItemText primary={service?.service} />
              {/* Assuming service is a string */}
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
}
