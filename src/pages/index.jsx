import Head from "next/head";
import Header from "../components/Header";
import Projects from "../components/Projects";
import Navbar from "../components/Navbar";
import Technologies from "../components/Technologies.jsx";
import { Container, Text } from "@chakra-ui/react";
import { useMount } from "react-use";
import { useMixpanel } from "../hooks/use-mixpanel.js";

export default function Home() {
  

  return (
    <>
      <Head>
        <title>Osomhe Aleogho</title>
      </Head>
      <Navbar/>
      <Header/>
      <Projects/>
      <Technologies/>
      <Container maxW="6xl" as="footer" py="10">
        <Text fontSize="lg">&copy; Osomhe Aleogho { (new Date()).getFullYear() }</Text>
      </Container>
    </>
  );
};
