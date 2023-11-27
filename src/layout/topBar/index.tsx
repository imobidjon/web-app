import { Box, Grid } from "@mui/material";


export default function TopBar() {
  // const selectedDay = (val) => {
  //   console.log(val);
  // };

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
              width: "90vw",
              textAlign: 'center'
            }}
          >
           
          </Box>
        </Grid>
        <Grid item>{/* <SearchIcon sx={{ color: "#2E3192" }} /> */}</Grid>
      </Grid>
    </Box>
  );
}
