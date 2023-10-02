import * as React from "react";
import { Space_Grotesk } from "next/font/google";
import { Container } from "@mui/material";

import ThemeRegistry from "@/components/ThemeRegistry/ThemeRegistry";
import Footer from "@/components/Footer/Footer";
import Header from "@/components/Header/Header";
import "./globals.css";

export const metadata = {
  title: "Next.js App Router + Material UI v5",
  description: "Next.js App Router + Material UI v5",
};

const grotesk = Space_Grotesk({ subsets: ["latin"] });

export default function RootLayout(
  { children }: { children: React.ReactNode },
  props: {
    window?: () => Window;
    children: React.ReactNode;
  }
) {
  return (
    <html lang="en">
      <body className={grotesk.className}>
        <ThemeRegistry>
          <Header {...props} />
          <Container sx={{ py: 8 }} maxWidth="xl">
            {children}
          </Container>
          <Footer />
        </ThemeRegistry>
      </body>
    </html>
  );
}
