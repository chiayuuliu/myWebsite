import React from "react";
import { Container, Box } from "@mui/material/";
const Home = () => {
  return (
    <div className="Page">
      <div class="banner">
        <div class="infowrap">
          <div class="info d-flex">
            <div class="pic animate__animated animate__fadeInLeft">
              <img src="http://localhost:3000/images/Profile/avatar.jepg" alt="" />
              {/* http://chiayuuliu.github.io/myWebsite/images/weather/clear.svg */}
              {/* <img
                src="http://chiayuuliu.github.io/myWebsite/images/Profile/avatar.jpeg"
                alt=""
              /> */}
            </div>
            <div class="intro animate__animated animate__fadeInRight">
              <h2 class="name">劉家佑 Doris Liu</h2>
              <p>Web Front Engineer</p>
              <div>
                <span>Email : </span>
                <a href="mailto:chiayuu.liu@gmail.com">chiayuu.liu@gmail.com</a>
              </div>

              <div>
                <span>Phone : </span>0953-680-007
              </div>
              <div>
                <span>City : </span>NewTaipei City
              </div>
            </div>
          </div>
          <div class="iconwrap">
            <a
              href="https://github.com/chiayuuliu"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fab fa-github"></i>
            </a>
            <a
              href="https://www.cakeresume.com/s--eQy6zafab9NGIQcwUb1vQA--/chiayuu-liu-f73e98"
              target="_blank"
              rel="noreferrer"
            >
              <i class="fas fa-address-card"></i>
            </a>
          </div>
        </div>
      </div>
      <Container maxWidth="lg">
        <Box sx={{ bgcolor: "#cfe8fc", height: "100vh" }} />
      </Container>
    </div>
  );
};

export default Home;
