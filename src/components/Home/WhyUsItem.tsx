import { Grid, Typography, Paper, Box, Button } from "@mui/material";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ElectricBoltIcon from "@mui/icons-material/ElectricBolt";
import DesignServicesIcon from "@mui/icons-material/DesignServices";
import ViewModuleIcon from "@mui/icons-material/ViewModule";
import SatelliteIcon from "@mui/icons-material/Satellite";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

type ItemProps = {
  data: { id: number; title: string; icon: string; description: string };
};

const WhyUsItem = ({ data }: ItemProps) => {
  return (
    <Grid item key={data.id} xs={12} sm={12} md={12}>
      <Paper
        elevation={16}
        sx={{
          border: "1px solid hsla(0,0%,51%,.25)",
          backgroundColor: "hsla(0,0%,100%,.05)",
          backdropFilter: "blur(5px)",
          display: "flex",
          py: 3,
          px: 3,
          height: "auto",
          gap: "1rem",
        }}
      >
        <Box>
          {data.icon === "wallet" && (
            <Button
              sx={{
                background: "linear-gradient(25deg,#2600fc,#ff00ea)",
                borderRadius: "8px !important",
                p: 1.5,
                cursor: "inherit",
                minWidth: "16px",
              }}
              disabled
            >
              <AccountBalanceWalletIcon
                fontSize="large"
                sx={{ color: "#fff", fontSize: { xs: "32px", sm: "48px" } }}
              />
            </Button>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: { xs: "0rem", lg: "1rem" },
          }}
        >
          <Typography variant="h4" sx={{ typography: { xs: "h5", sm: "h4" } }}>
            {data.title}
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: "lighter !important",
              typography: { xs: "body1", sm: "h6" },
            }}
          >
            {data.description}
          </Typography>
        </Box>
      </Paper>
    </Grid>
  );
};

export default WhyUsItem;
