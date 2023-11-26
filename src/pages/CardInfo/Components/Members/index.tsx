import {
  Stack,
  Box,
  Typography,
  List,
  ListItem,
  ListItemAvatar,
  Avatar,
  ListItemText,
} from "@mui/material";
export default function Members() {
  return (
    <div>
      <Stack
        direction="row"
        sx={{ mt: 2 }}
        justifyContent={"center"}
        spacing={2}
      >
        <Box sx={{ textAlign: "center" }}>
          <Typography>1-Jamoa</Typography>
          <List>
            <ListItem sx={{ p: 0, mb:1 }}>
              <ListItemText
                primary="Hujimchi"
                sx={{ textAlign: "end", mr: 2 }}
              />
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
            </ListItem>
            <ListItem sx={{ p: 0, mb:1 }}>
              <ListItemText
                primary="Darvozabon"
                sx={{ textAlign: "end", mr: 2 }}
              />
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
            </ListItem>
            <ListItem sx={{ p: 0, mb:1 }}>
                <ListItemText
                  primary="Hujimchi"
                  sx={{ textAlign: "end", mr: 2 }}
                />
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
            </ListItem>
          </List>
        </Box>
        <Box sx={{ textAlign: "center" }}>
          <Typography>2-Jamoa</Typography>
          <List>
            <ListItem sx={{p: 0, mb:1 }}>
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
              <ListItemText primary="Himoyachi" />
            </ListItem>
            <ListItem sx={{p: 0, mb:1 }}>
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
              <ListItemText primary="Hujumchi
              " />
            </ListItem>
            <ListItem sx={{p: 0, mb:1 }}>
              <ListItemAvatar>
                <Avatar
                  alt="Name"
                  sx={{
                    borderRadius: "50%",
                    color: "#fff",
                  }}
                />
              </ListItemAvatar>
              <ListItemText primary="Himoyachi" />
            </ListItem>
          </List>
        </Box>
      </Stack>
    </div>
  );
}
