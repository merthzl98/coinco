"use client";

import { styled } from "@mui/material/styles";
import { Typography, Link, Box, Stack } from "@mui/material";
import Image from "next/image";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const StyledFooter = styled("footer")(({ theme }) => ({
  marginTop: "auto",
}));

const fontProps = { fontSize: { xs: 32, sm: 32, md: 40, lg: 48 } };

const Footer = () => {
  return (
    <StyledFooter
      sx={{
        display: "flex",
        justifyContent: "center",
      }}
      color="transparent"
    >
      <Box
        sx={{
          position: "relative",
          maxWidth: "1536px",
          overflow: "hidden",
        }}
      >
        <Box
          sx={{
            position: "absolute",
            top: "30%",
            left: "50%",
            transform: "translateX(-50%)",
            display: "flex",
            flexDirection: "column",
            gap: "2rem",
          }}
        >
          <Stack direction="row" spacing={{ xs: 2, sm: 2, md: 4 }}>
            <TwitterIcon sx={fontProps} />
            <FacebookIcon sx={fontProps} />
            <YouTubeIcon sx={fontProps} />
            <InstagramIcon sx={fontProps} />
          </Stack>
          <Box>
            <Typography variant="body1" color="textPrimary" align="center">
              © {new Date().getFullYear()} coinco.com
            </Typography>
            <Typography variant="body2" color="textPrimary" align="center">
              Powered by{" "}
              <Link color="inherit" href="https://example.com/">
                CoinCo
              </Link>
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{ opacity: { xs: "0", sm: "0", md: "1" }, overflow: "hidden" }}
        >
          <Image
            src="/footer-bg.png"
            alt="footer-image"
            width={0}
            height={0}
            sizes="100vw"
            style={{
              width: "100%",
              minWidth: "1486px",
              height: "auto",
              overflow: "hidden",
              scale: "1.15",
            }}
          />
        </Box>
      </Box>
    </StyledFooter>
  );
};

export default Footer;
