import { Grid } from "@mui/material";

import Coin from "./Coin";
import ICoinData from "@/models/coin";
import CoinService from "@/services/coin-service";

const queryParams = {
  vs_currency: "usd",
  order: "market_cap_desc",
  per_page: 8,
  page: 1,
  sparkline: false,
};

const getCoins = async (): Promise<ICoinData[]> => {
  const response = await CoinService.getAll(queryParams);
  const data = response.data;

  return data;
};

export default async function MajorCoins() {
  const coinList = await getCoins();

  return (
    <Grid
      container
      spacing={{ xs: 4, s: 4, md: 4, l: 5, xl: 6 }}
      sx={{ py: 4 }}
    >
      {coinList.map((coin) => (
        <Grid item key={coin.id} xs={12} sm={6} md={3}>
          <Coin coinData={coin} />
        </Grid>
      ))}
    </Grid>
  );
}
