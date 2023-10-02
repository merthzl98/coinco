import { Box, Typography, Grid } from "@mui/material";
import Image from "next/image";

import styles from "./WhyChooseUs.module.scss";
import WhyUsItem from "./WhyUsItem";
import { firstColumn, secondColumn } from "@/services/mock-data";

const WhyChooseUs = () => {
  const firstContent = firstColumn.map((data) => (
    <WhyUsItem key={data.id} data={data} />
  ));

  const secondContent = secondColumn.map((data) => (
    <WhyUsItem key={data.id} data={data} />
  ));

  return (
    <Box sx={{ py: 16, display: "flex", flexDirection: "column", gap: "2rem" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h3", md: "h2", lg: "h1", xl: "h1" },
            fontWeight: "600 !important",
          }}
        >
          WHY&nbsp;
        </Typography>
        <Typography
          sx={{
            typography: { xs: "h5", sm: "h3", md: "h2", lg: "h1", xl: "h1" },
          }}
          className={styles["typo"]}
        >
          CHOOSE US
        </Typography>
      </Box>

      <Grid
        container
        spacing={{ xs: 4, s: 4, md: 4, l: 5, xl: 6 }}
        sx={{
          py: 4,
        }}
      >
        <Grid item sm={12} md={12} lg={4}>
          <Grid
            container
            spacing={{ xs: 4, s: 4, md: 4, l: 5, xl: 6 }}
            sx={{ py: 4 }}
          >
            {firstContent}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={4}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Image
            src="/choose-main.png"
            alt="choose-us-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              maxWidth: "256px",
              height: "auto",
            }}
          />
        </Grid>
        <Grid item sm={12} md={12} lg={4}>
          <Grid
            container
            spacing={{ xs: 4, s: 4, md: 4, l: 5, xl: 6 }}
            sx={{ py: 4 }}
          >
            {secondContent}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default WhyChooseUs;
