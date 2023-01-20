import { useState } from "react";
import { FrontCard } from "./Components/FrontCard.js";
import { SideCard } from "./Components/SideCard.js";
import { Form } from "./Components/Form.js";
import background from "./assets/bg-main-desktop.png";
import mobile from "./assets/bg-main-mobile.png";

import { Box, useMediaQuery, useTheme } from "@mui/material";

function App() {

  const [cardInfo, setCardInfo] = useState({
    name: '',
    cardNumber: "",
    mounth: "",
    year: "",
    cvc: ""
  })

  const theme = useTheme();

  const laptop = useMediaQuery(theme.breakpoints.up("lg"));

  return (
    <Box
      sx={ laptop ? {
        backgroundImage: `url(${background})`,
        backgroundRepeat: "no-repeat",
        height: "100vh",
        widht: "100%",
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center'
      } : {
        backgroundImage: `url(${mobile})`,
        backgroundRepeat: "no-repeat",
        marginTop: '-30px'
      }}
    >
      <Box sx={laptop ? {margin: '0px 150px'} : {display: 'flex', flexDirection: 'column-reverse'}}>
        <FrontCard cardInfo={cardInfo} />
        <SideCard cardInfo={cardInfo} />
      </Box>
      <Form cardInfo={cardInfo} setCardInfo={setCardInfo} />
    </Box>
  );
}

export default App;
