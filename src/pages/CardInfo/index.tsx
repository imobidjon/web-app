import * as React from "react";
import { Grid, IconButton, Typography, Box, Tabs, Tab } from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { Info, Members } from "./Components";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function CardInfo() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <div>
      <Grid container sx={{mt:2}} alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <NavLink to="/" style={{ textDecoration: "none" }}>
            <IconButton
              sx={{
                p: 0,
              }}
            >
              <ArrowBackIcon
                sx={{
                  p: 1,
                  borderRadius: "10px",
                  border: "1.4px solid #00ADEF; ",
                  background: "transparent",
                  color: "#2E3192",
                }}
              />
            </IconButton>
          </NavLink>
        </Grid>
        <Grid item>
          <Typography
            noWrap
            color={"#2E3192"}
            fontWeight={"bolder"}
            fontSize={"13px"}
          >
            Asaka Tumani
          </Typography>
          <Typography
            noWrap
            color={"#b7b6b6"}
            fontWeight={"bolder"}
            fontSize={"13px"}
            textAlign={"end"}
          >
            TIP arena
          </Typography>
        </Grid>
      </Grid>

      <Box sx={{ width: "100%", mt: 3 }}>
        <Box sx={{ borderBottom: 1, borderColor: "divider", display: 'flex', justifyContent: "center", color: "#2E3192" }}>
          <Tabs
            value={value}
            onChange={handleChange}
            aria-label="basic tabs example"
          >
            <Tab label="Malumot" {...a11yProps(0)} />
            <Tab label="A'zolar" {...a11yProps(1)} />
          </Tabs>
        </Box>
        <CustomTabPanel value={value} index={0}>
          <Info />
        </CustomTabPanel>
        <CustomTabPanel value={value} index={1}>
          <Members />
        </CustomTabPanel>
      </Box>
    </div>
  );
}
