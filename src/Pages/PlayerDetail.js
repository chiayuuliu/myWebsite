import React from 'react';
import '../Style/Player.scss'
import { Container, Stack, Divider } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import { useNavigate } from "react-router-dom";

const PlayerDetail = () => {
  const navigate = useNavigate();

  const PlayerData = [
    {
      item: "Team ",
      value: "",
    },
    {
      item: "TeamName",
      value: "",
    },
    {
      item: "Games",
      value: "",
    },
    {
      item: "MPG",
      value: "",
    },
    {
      item: "FGA",
      value: "",
    },
    {
      item: "FGM",
      value: "",
    },
    {
      item: "FG%",
      value: "",
    },
    {
      item: "FT%",
      value: "",
    },
    {
      item: "3PA",
      value: "",
    },
    {
      item: "3PM",
      value: "",
    },
    {
      item: "3PT%",
      value: "",
    },
    {
      item: "Points",
      value: "",
    },
    {
      item: "ORebounds",
      value: "",
    },
    {
      item: "DRebounds",
      value: "",
    },
    {
      item: "Rebounds",
      value: "",
    },
    {
      item: "Assists",
      value: "",
    },
    {
      item: "Steals",
      value: "",
    },
    {
      item: "Blocks",
      value: "",
    },
    {
      item: "Turnovers",
      value: "",
    },
    {
      item: "Efficiency",
      value: "",
    }

  ]

  return (
    <>
      <div className="Page PlayerDetail">
        <Container fixed>
          <h2>
            <ArrowBackIosNewIcon
              onClick={() => {
                navigate("/playerData");
              }} />
            Player's Detail
          </h2>
          <Divider />
          <div className="infoWrap">
            <div className="name">
              <h2><PersonIcon />123</h2>
            </div>
            <ul>
              {PlayerData.map((v) => {
                return (
                  <li>
                    {v.item}：<span>123</span>
                  </li>
                )
              })}
            </ul>
          </div>
        </Container>
      </div>
    </>
  )
}

export default PlayerDetail