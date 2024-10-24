import * as React from "react"
import { Container } from "@mui/material";
import Hakkimda from "./hakkimda";
import Hizmetler from "./hizmetler";
import Iletisim from "./iletisim";

const IndexPage = () => {
  return (
    <Container>
      <Hakkimda />
      <Hizmetler />
      <Iletisim />
    </Container>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
