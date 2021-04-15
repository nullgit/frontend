import React, { useEffect, useState } from "react";
import Header from "../components/Header/Header"
import Nav from "../components/Nav/Nav"
import News from "../components/News/News"
import Foot from "../components/Foot/Foot"
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <Header/>
      <Nav/>
      <News />
      <Foot />
    </>
  );
}
