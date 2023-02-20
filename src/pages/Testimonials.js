import React from "react";
import Layout from "../components/Layout";
import { Box, Typography } from "@mui/material";

const About = () => {
  return (
    <Layout>
      <Box
        sx={{
          my: 15,
          textAlign: "center",
          p: 2,
          "& h4": {
            fontWeight: "bold",
            my: 2,
            fontSize: "2rem",
          },
          "& p": {
            textAlign: "justify",
          },
          "@media (max-width:600px)": {
            mt: 0,
            "& h4 ": {
              fontSize: "1.5rem",
            },
          },
        }}
      >
        <Typography variant="h4">Testimonials</Typography>
        <h4>Smith</h4>
        <p>
          “I see this opportunity as a way to contribute to an
          exciting/forward-thinking/fast-moving company/industry, and I feel I
          can do so by/with my …” “I feel my skills are particularly well-suited
          to this position because …” “I believe I have the type of knowledge to
          succeed in this role and at the company because …”.
        </p>
        <h4>Samaira</h4>
        <p>
          I’ve always believed that everyone should have equal opportunities,
          regardless of their social background. This is why I deeply admire
          your work with vulnerable communities and all the projects you’ve
          undertaken to provide everyone equal access to education and
          employment. That’s why I’d be more than honored to apply all my years
          of experience as a project manager for such an impactful organization
          as yours!
        </p>
      </Box>
      <li>No of orders served- 1000</li>
      <li>
        NO of clients- It companys like WIPRO, INFOSYS , L&T , CYBAGE AND MANY
        MORE CLIENTS ARE THERE
      </li>
      <li>Products dispatched today- 78</li>
      <li>Products getting ready for dispatch today- 80</li>
    </Layout>
  );
};

export default About;
