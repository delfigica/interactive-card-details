import { useTheme } from "@emotion/react";
import { Box, Typography, useMediaQuery } from "@mui/material";
import React from "react";
import background from "../assets/bg-card-back.png";

export const SideCard = ({ cardInfo }) => {
  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={
        laptop
          ? {
              backgroundImage: `url(${background})`,
              width: "350px",
              height: "200px",
              borderRadius: "10px",
              padding: "1.2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              objectFit: "cover",
              backgroundSize: "380px",
              margin: "10px 0px 20px -50px",
            }
          : {
              backgroundImage: `url(${background})`,
              width: "270px",
              height: "140px",
              borderRadius: "10px",
              padding: "1.2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "flex-end",
              objectFit: "cover",
              backgroundSize: "270px",
              margin: "60px 10px 0px 40px",
            }
      }
    >
      <Typography
        color="secondary"
        sx={
          laptop
            ? { marginTop: "5px" }
            : { marginRight: "15px", marginTop: "5px" }
        }
      >
        {cardInfo.cvc.length == 0 ? "000" : cardInfo.cvc}
      </Typography>
    </Box>
  );
};
