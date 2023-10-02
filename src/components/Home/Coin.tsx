import { Box, Paper, Typography } from "@mui/material";
import Image from "next/image";

import UtilsService from "@/services/utils-service";
import ICoinData from "@/models/coin";

type CoinProps = {
  coinData: ICoinData;
};

const Coin = ({ coinData }: CoinProps) => {
  return (
    <Paper
      elevation={16}
      sx={{
        backgroundColor: "hsla(0,0%,100%,.05)",
        border: "1px solid hsla(0,0%,51%,.25)",
        backdropFilter: "blur(5px)",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        py: 3,
        px: 3,
        height: "auto",
        gap: "0.5rem",
      }}
    >
      <Box>
        <Image
          width={128}
          height={128}
          alt={coinData.name}
          src={coinData.image}
          quality={100}
        />
      </Box>
      <Box sx={{ display: "flex", gap: "0.5rem" }}>
        <Typography variant="h6">{coinData.name}</Typography>
        <Typography
          variant="h6"
          color={coinData.price_change_percentage_24h > 0 ? "#00e676" : "error"}
        >
          {UtilsService.numberWithCommas(coinData.price_change_percentage_24h)}%
        </Typography>
      </Box>
      <Box>
        <Typography variant="h5">
          $ {UtilsService.numberWithCommas(coinData.current_price)}
        </Typography>
      </Box>
    </Paper>
  );
};

export default Coin;
