import http from "./http-common";
import ICoinData from "../models/coin";

const getAll = (coinParams: any) => {
  return http.get<ICoinData[]>(`/coins/markets`, {
    params: coinParams,
  });
};

const CoinService = { getAll };

export default CoinService;
