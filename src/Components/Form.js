import {
  Avatar,
  Box,
  Button,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useState } from "react";
import complete from "../assets/icon-complete.svg";

export const Form = ({ cardInfo, setCardInfo }) => {
  const [errors, setErrors] = useState({
    name: false,
    cardNumber: false,
    mounth: false,
    year: false,
    cvc: false,
  });

  const [confirm, setConfirm] = useState(false);

  const handleChange = (e) => {
    setCardInfo({ ...cardInfo, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();

    console.log("Es solo numeros e igual a dos: ", cardInfo.mounth.length !== 2 || !/^\d+$/.test(cardInfo.mounth));
    if (
      cardInfo.name.length === 0 ||
      cardInfo.cardNumber.length !== 16 ||
      !/^\d+$/.test(cardInfo.cardNumber) ||
      cardInfo.mounth.length !== 2 ||
      cardInfo.year.length !== 2 ||
      cardInfo.cvc.length !== 3 ||
      !/^\d+$/.test(cardInfo.mounth) ||
      !/^\d+$/.test(cardInfo.year) ||
      !/^\d+$/.test(cardInfo.cvc)
    ) {
      if (cardInfo.name.length === 0) {
        setErrors((prev) => {
          return { ...prev, name: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, name: false };
        });
      }
      if (
        cardInfo.cardNumber.length !== 16 ||
        !/^\d+$/.test(cardInfo.cardNumber)
      ) {
        setErrors((prev) => {
          return { ...prev, cardNumber: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, cardNumber: false };
        });
      }
      if (cardInfo.mounth.length !== 2 || !/^\d+$/.test(cardInfo.mounth)) {
        setErrors((prev) => {
          return { ...prev, mounth: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, mounth: false };
        });
      }
      if (cardInfo.year.length !== 2 || !/^\d+$/.test(cardInfo.year)) {
        setErrors((prev) => {
          return { ...prev, year: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, year: false };
        });
      }
      if (cardInfo.cvc.length !== 3 || !/^\d+$/.test(cardInfo.cvc)) {
        setErrors((prev) => {
          return { ...prev, cvc: true };
        });
      } else {
        setErrors((prev) => {
          return { ...prev, cvc: false };
        });
      }
    } else {
      toConfirm();
    }
  };

  const toConfirm = () => {
    setConfirm(true);
    setErrors({
      name: false,
      cardNumber: false,
      mounth: false,
      year: false,
      cvc: false,
    });
  };

  const reStart = () => {
    setCardInfo({
      name: "",
      cardNumber: "0000 0000 0000 0000",
      mounth: "",
      year: "",
      cvc: "",
    });
    setConfirm(false);
  };

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box>
      {confirm ? (
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            flexDirection: "column",
            fontWeight: "500",
            letterSpacing: "1px",
          }}
        >
          <Avatar
            src={complete}
            sx={{ height: "80px", width: "80px", margin: "10px 0px" }}
          />
          <Typography
            color="primary"
            sx={{ fontSize: "2em", margin: "10px 0px" }}
          >
            THANK YOU!
          </Typography>
          <Typography sx={{ color: "#A4A4A4" }}>
            We've added you card details
          </Typography>
          <Button
            variant="contained"
            sx={{ margin: "15px 0px", width: "100%" }}
            onClick={reStart}
          >
            Continue
          </Button>
        </Box>
      ) : (
        <Box sx={{ padding: "1em" }}>
          <Box>
            <Typography
              color="primary"
              sx={{
                fontSize: ".8em",
                fontWeight: "500",
                letterSpacing: "1px",
                margin: "5px 0px",
              }}
            >
              CARDHOLDER NAME
            </Typography>
            <TextField
              size="small"
              sx={{ width: "100%" }}
              placeholder="e.g. Jane Appleseed"
              name="name"
              onChange={handleChange}
              error={errors.name}
            />
          </Box>
          <Box sx={{ margin: "20px 0px" }}>
            <Typography
              color="primary"
              sx={{
                fontSize: ".8em",
                fontWeight: "500",
                letterSpacing: "1px",
                margin: "5px 0px",
              }}
            >
              CARD NUMBER
            </Typography>
            <TextField
              size="small"
              sx={{ width: "100%" }}
              placeholder="e.g. 1234 5678 9123 0000"
              name="cardNumber"
              onChange={handleChange}
              maxLength="16"
              error={errors.cardNumber}
            />
          </Box>
          <Box sx={{ display: "flex", justifyContent: "space-between" }}>
            <Box>
              <Typography
                color="primary"
                sx={{
                  fontSize: ".8em",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  margin: "5px 0px",
                }}
              >
                EXP. DATE (MM/YY)
              </Typography>
              <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <TextField
                  size="small"
                  sx={{ width: "60px" }}
                  placeholder="MM"
                  name="mounth"
                  onChange={handleChange}
                  error={errors.mounth}
                />
                <TextField
                  size="small"
                  sx={{ width: "60px" }}
                  placeholder="YY"
                  name="year"
                  onChange={handleChange}
                  error={errors.year}
                />
              </Box>
            </Box>
            <Box sx={{ width: "50%" }}>
              <Typography
                color="primary"
                sx={{
                  fontSize: ".8em",
                  fontWeight: "500",
                  letterSpacing: "1px",
                  margin: "5px 0px",
                }}
              >
                CVC
              </Typography>
              <TextField
                size="small"
                sx={{ width: "100%" }}
                placeholder="e.g. 123"
                name="cvc"
                onChange={handleChange}
                error={errors.cvc}
              />
            </Box>
          </Box>
          <Button
            sx={{ width: "100%", margin: "40px 0px" }}
            variant="contained"
            onClick={onSubmit}
          >
            Confirm
          </Button>
        </Box>
      )}
    </Box>
  );
};
