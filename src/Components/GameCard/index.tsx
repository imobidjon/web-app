import { Box, Typography, Avatar, Divider } from "@mui/material";

export default function GameCard() {
  return (
    <Box
      sx={{
        // background: "#efefef",
        border: "1.4px solid #00ADEF; ",
        borderRadius: "15px",
        p: 2,
      }}
    >
      <Box>
        <Typography
          noWrap
          color={"#2E3192"}
          fontWeight={"bolder"}
          fontSize={"13px"}
        >
          11:00 - Asaka Tumani, TIP arena
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          my: 1,
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "5px",
          }}
        >
          <Avatar
            alt="Name"
            sx={{
              borderRadius: "10px",
              border: "1.4px solid #00ADEF; ",
              background: "transparent",
              color: "#2E3192",
            }}
          />
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
    </Box>
  );
}
