// import * as React from "react";
import {
  Grid,
  IconButton,
  Typography,
  Box,
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
} from "@mui/material";
import { NavLink } from "react-router-dom";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
// import { Info, Members } from "./Components";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import PhoneIcon from "@mui/icons-material/Phone";
import MessageIcon from "@mui/icons-material/Message";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

// interface TabPanelProps {
//   children?: React.ReactNode;
//   index: number;
//   value: number;
// }
// function CustomTabPanel(props: TabPanelProps) {
//   const { children, value, index, ...other } = props;

//   return (
//     <div
//       role="tabpanel"
//       hidden={value !== index}
//       id={`simple-tabpanel-${index}`}
//       aria-labelledby={`simple-tab-${index}`}
//       {...other}
//     >
//       {value === index && (
//         <Box>
//           <Typography>{children}</Typography>
//         </Box>
//       )}
//     </div>
//   );
// }

// function a11yProps(index: number) {
//   return {
//     id: `simple-tab-${index}`,
//     "aria-controls": `simple-tabpanel-${index}`,
//   };
// }

export default function CardInfo() {
  // const [value, setValue] = React.useState(0);

  // const handleChange = (event: React.SyntheticEvent, newValue: number) => {
  //   setValue(newValue);
  // };
  return (
    <Box sx={{ background: "#00ADEF" }}>
      <Box>
        <Grid
          sx={{ p: 1 }}
          container
          alignItems={"center"}
          justifyContent={"space-between"}
        >
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
                    color: "#fff",
                  }}
                />
                <Typography
                  noWrap
                  color={"#fff"}
                  fontWeight={"bolder"}
                  fontSize={"15px"}
                >
                  Ortga
                </Typography>
              </IconButton>
            </NavLink>
          </Grid>
          <Grid item>
            <Typography
              noWrap
              color={"#fff"}
              fontWeight={"bolder"}
              fontSize={"15px"}
            >
              O'YIN MALUMOTLARI
            </Typography>
          </Grid>
        </Grid>

        <Box
          sx={{
            width: "100%",
            mt: 3,
            background: "#fff",
            borderRadius: "20px 20px 0 0 ",
            color: "#2E3192",
          }}
        >
          {/* <Box sx={{ borderBottom: 1, borderColor: "divider", display: 'flex', justifyContent: "center", color: "#2E3192" }}>
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
          </CustomTabPanel> */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              p: 2,
              alignItems: "center",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <AccessTimeIcon />
              <Typography
                color={"#00ADEF"}
                fontWeight={"bolder"}
                fontSize={"13px"}
              >
                20:00 - 21:00
              </Typography>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center", gap: "5px" }}>
              <CalendarMonthIcon />
              <Typography
                color={"#00ADEF"}
                fontWeight={"bolder"}
                fontSize={"13px"}
              >
                Dushanba, 26-Noyabr
              </Typography>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "#00ADEF", my: 1 }} />

          <Box
            sx={{
              px: 2,
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Box>
              <Typography
                color={"#2E3192"}
                fontWeight={"bolder"}
                fontSize={"25px"}
                margin={0}
              >
                Obidjon
              </Typography>
              <Typography
                color={"#00ADEF"}
                fontWeight={"lighter"}
                fontSize={"12px"}
                margin={0}
              >
                Tashkilotchi
              </Typography>
            </Box>
            <Box>
              <IconButton size="large" sx={{ background: "#2E3192", mr: 1 }}>
                <MessageIcon sx={{ color: "#fff" }} />
              </IconButton>
              <IconButton size="large" sx={{ background: "#00ADEF" }}>
                <PhoneIcon sx={{ color: "#fff" }} />
              </IconButton>
            </Box>
          </Box>
          <Divider sx={{ borderColor: "#00ADEF", my: 1 }} />

          <List sx={{ width: "100%", px: 2 }}>
            <ListItem sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar sx={{ background: "#2E3192" }}>
                  <FmdGoodIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="Asaka tumani, Tip arena"
                secondary="Andijon yo'lida"
                sx={{ color: "#00ADEF" }}
              />
            </ListItem>
            <ListItem sx={{ p: 0 }}>
              <ListItemAvatar>
                <Avatar sx={{ background: "#2E3192" }}>
                  <AttachMoneyIcon />
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary="10.000 so'm"
                secondary="Har bir odam uchun"
                sx={{ color: "#00ADEF" }}
              />
            </ListItem>
          </List>

          <Box sx={{ px: 2 }}>
            <Typography fontWeight={"bolder"} sx={{ mt: 2 }}>
              Qo'shimcha malumotlar:
            </Typography>
            <Typography style={{ marginTop: 0 }}>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
              exercitationem accusantium ut saepe quis quae numquam culpa
              dolores obcaecati, eos cum? Quod nam similique assumenda
              reiciendis repellendus iusto in porro.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
