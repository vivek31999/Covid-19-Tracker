import React from "react";
import { Container, Grid } from "@material-ui/core/";

const Layout = (props) => {
  return (
    <>
      <Container maxWidth="xl">
        	<Grid container >{props.children}</Grid>
      </Container>
    </>
  );
};

export default Layout;
