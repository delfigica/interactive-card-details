import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import cardIcon from "../assets/card-logo.svg";
import background from "../assets/bg-card-front.png";

export const FrontCard = ({ cardInfo }) => {
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
              justifyContent: "space-between",
              objectFit: "cover",
              backgroundSize: "380px",
              margin: "30px 20px 50px -100px",
            }
          : {
              backgroundImage: `url(${background})`,
              width: "270px",
              height: "150px",
              borderRadius: "10px",
              padding: "1.2em",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              objectFit: "cover",
              backgroundSize: "280px",
              margin: "-50px 20px 50px 10px",
            }
      }
    >
      <Box sx={{ width: "80px" }}>
        <img src={cardIcon} />
      </Box>
      <Box>
        <Typography
          color="secondary"
          sx={
            laptop
              ? { fontSize: "1.5em", letterSpacing: "2px", margin: "5px 0px" }
              : { fontSize: "1em", letterSpacing: "2px", margin: "5px 0px" }
          }
        >
          {cardInfo.cardNumber.length == 0
            ? "0000 0000 0000 0000"
            : `${cardInfo.cardNumber.slice(0, 4)} ${cardInfo.cardNumber.slice(
                4,
                8
              )} ${cardInfo.cardNumber.slice(
                8,
                12
              )} ${cardInfo.cardNumber.slice(12, 16)}`}
        </Typography>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            textTransform: "uppercase",
          }}
        >
          <Typography color="secondary">
            {cardInfo.name.length == 0 ? "Jane Appleseed" : cardInfo.name}
          </Typography>
          <Typography color="secondary">
            {cardInfo.mounth.length == 0 ? "00" : cardInfo.mounth}/
            {cardInfo.year.length == 0 ? "00" : cardInfo.year}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
