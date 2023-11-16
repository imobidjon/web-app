import {
  FormControl,
  InputAdornment,
  TextField,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
// import ClearIcon from "@mui/icons-material/Clear";

export default function SearchInput() {
  return (
    <FormControl fullWidth>
      <TextField
        placeholder="Qidiruv"
        sx={{
          mt: { xs: 3, md: 0 },
          background: "#fff",
          borderRadius: "10px",
          border: "1.4px solid #777676; ",
          "& fieldset": { border: "none" },
        }}
        variant="outlined"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
          endAdornment: (
            <>
            {/* <InputAdornment
                position="end"
                >
                <ClearIcon />
                </InputAdornment> */}
            </>
          ),
        }}
      />
    </FormControl>
  );
}
