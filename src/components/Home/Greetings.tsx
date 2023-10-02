import { Box, Typography } from "@mui/material";
import Image from "next/image";

import styles from "./Greetings.module.scss";
import bitcoin from "../../../public/bitcoin.png";
import ethereum from "../../../public/ethereum.png";

const Greetings = () => {
  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        position: "relative",
      }}
    >
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Image
          src={bitcoin}
          alt="bitcoin"
          width={128}
          height={128}
          className={styles["bitcoin"]}
        />
      </Box>

      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h2", md: "h2", lg: "h1", xl: "h1" },
            fontWeight: "600 !important",
          }}
        >
          TRACK AND TRADE
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h4", sm: "h2", md: "h2", lg: "h1", xl: "h1" },
          }}
          className={styles["typo"]}
        >
          CRYPTO CURRENCIES
        </Typography>
      </Box>
      <Box sx={{ display: { xs: "none", md: "flex" } }}>
        <Image
          src={ethereum}
          alt="ethereum"
          width={128}
          height={128}
          className={styles["ethereum"]}
        />
      </Box>
    </Box>
  );
};

export default Greetings;
