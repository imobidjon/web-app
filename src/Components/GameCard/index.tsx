import { Box, Typography } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function GameCard() {
  return (
    <NavLink to="/card-info" style={{ textDecoration: "none" }}>
      {/* <Box
        sx={{
          background: "#D1FBF4",
          borderRadius: "15px",
          px: 2,
          py: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          <Box>
            <Typography
              noWrap
              color={"#2E3192"}
              fontWeight={"bolder"}
              fontSize={"13px"}
            >
              11:00 - 12:00
            </Typography>
            <Typography
              noWrap
              color={"#2E3192"}
              fontWeight={"bolder"}
              fontSize={"13px"}
            >
              Tip arena
            </Typography>
            <Box>
              <Typography
                noWrap
                color={"#2E3192"}
                fontWeight={"bolder"}
                fontSize={"13px"}
              >
                @imobidjon
              </Typography>
              <Typography
                noWrap
                color={"#2E3192"}
                fontWeight={"bolder"}
                fontSize={"9px"}
              >
                5 kishilik o’yin
              </Typography>
            </Box>
          </Box>
          <Box
            sx={{
              border: "1.4px solid #00ADEF; ",
              color: "#2E3192",
              p: "2px 7px",
              borderRadius: "10px",
            }}
          >
            8/10
          </Box>
          <Box>
            <Avatar
              alt="Name"
              sx={{
                width: "70px",
                height: "70px",
              }}
            />
          </Box>
        </Box>
        <Divider sx={{ borderColor: "#00ADEF", my: 1 }} />
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography
            noWrap
            color={"#2E3192"}
            fontWeight={"bolder"}
            fontSize={"15px"}
            textAlign={"center"}
          >
            Har bir inson uchun:
          </Typography>
          <Typography
            noWrap
            color={"#2E3192"}
            fontWeight={"bolder"}
            fontSize={"15px"}
            textAlign={"center"}
          >
            10.000 sum
          </Typography>
        </Box>
      </Box> */}

      <Box
        sx={{
          background: "#D1FBF4",
          borderRadius: "15px",
          px: 2,
          py: 1,
          mb: 2,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            my: 1,
          }}
        >
          {/* Time */}
          <Box>
            <Typography
              noWrap
              color={"#2E3192"}
              fontWeight={"bolder"}
              fontSize={"20px"}
            >
              24:00
            </Typography>
          </Box>

          {/* Location */}
          <Box sx={{ p: 1, textAlign: "center" }}>
            <Typography
              color={"#2E3192"}
              fontWeight={"bolder"}
              fontSize={"13px"}
            >
              Asaka tumani, Tip arenada joylashga stadion
            </Typography>
          </Box>

          {/* Cost and Members */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                border: "1.4px solid #00ADEF; ",
                color: "#2E3192",
                p: "2px 7px",
                borderRadius: "10px",
              }}
            >

                8/10
            </Box>
            <Typography
              color={"#2E3192"}
              fontWeight={"bolder"}
              fontSize={"15px"}
              textAlign={"center"}
            >
              50000
            </Typography>
          </Box>
        </Box>
      </Box>
    </NavLink>
  );
}
