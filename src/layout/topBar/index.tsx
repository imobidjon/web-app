import { Box, Grid, Typography } from "@mui/material";
// import { SearchInput } from "../../Components";
import SearchIcon from "@mui/icons-material/Search";
import FmdGoodIcon from "@mui/icons-material/FmdGood";

// import { SportsSoccer } from "@mui/icons-material";

export default function TopBar() {
  return (
    <Box
      sx={{
        borderRadius: "15px",
        py: 2,
      }}
    >
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Grid item>
          <Box
            sx={{
              border: "1.4px solid #00ADEF; ",
              display: "flex",
              alignItems: "center",
              borderRadius: "10px",
              justifyContent: "center",
            }}
          >
            <FmdGoodIcon
              sx={{
                mr: 1,
                color: "#2E3192",
              }}
            />
            <Typography
              variant="h5"
              noWrap
              component="a"
              sx={{
                mr: 2,
                fontWeight: 700,
                color: "#2E3192",
                textDecoration: "none",
              }}
            >
              Andijon
            </Typography>
          </Box>
        </Grid>
        <Grid item>
          <SearchIcon sx={{ color: "#2E3192" }} />
        </Grid>
      </Grid>
    </Box>
  );
}
