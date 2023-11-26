import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import FmdGoodIcon from "@mui/icons-material/FmdGood";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";

export default function Info() {
  return (
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar>
            <CalendarMonthIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Yakshanba, Noyabr 26, 2023"
          secondary="Har yakshanba kunlari takrorlanadi"
        />
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar>
            <AccessTimeFilledIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="19:00" secondary="O'zbekiston vaqti bilan" />
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar>
            <FmdGoodIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary="Asaka tumani, Tip arena"
          secondary="Andijon yo'lida"
        />
      </ListItem>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar>
            <AttachMoneyIcon />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="10.000 so'm" secondary="Har bir odam uchun" />
      </ListItem>

      <Typography sx={{ mt: 2 }}>Tashkilotchi</Typography>
      <ListItem sx={{ p: 0 }}>
        <ListItemAvatar>
          <Avatar
            alt="Name"
            sx={{
              borderRadius: "50%",
              color: "#fff",
            }}
          />
        </ListItemAvatar>
        <ListItemText primary="@imobidjon" secondary="O'yin boshlovchisi" />
      </ListItem>

      <Typography  fontWeight={'bolder'} sx={{ mt: 2 }}>Qo'shimcha malumotlar:</Typography>
      <Typography style={{marginTop:0}}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis,
        exercitationem accusantium ut saepe quis quae numquam culpa dolores
        obcaecati, eos cum? Quod nam similique assumenda reiciendis repellendus
        iusto in porro.
      </Typography>
    </List>
  );
}
