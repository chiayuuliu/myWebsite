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

  // Name        
  //  2   team_acronym                     Team       
  //  3   team_name                        TeamName   
  //  4   games_played                     Games      
  //  5   minutes_per_game                 MPG        
  //  6   field_goals_attempted_per_game   FGA        
  //  7   field_goals_made_per_game        FGM        
  //  8   field_goal_percentage            FG%        
  //  9   free_throw_percentage            FT%        
  //  10  three_point_attempted_per_game   3PA        
  //  11  three_point_made_per_game        3PM        
  //  12  three_point_percentage           3PT%       
  //  13  points_per_game                  Points     
  //  14  offensive_rebounds_per_game      ORebounds  
  //  15  defensive_rebounds_per_game      DRebounds  
  //  16  rebounds_per_game                Rebounds   
  //  17  assists_per_game                 Assists    
  //  18  steals_per_game                  Steals     
  //  19  blocks_per_game                  Blocks     
  //  20  turnovers_per_game               Turnovers  
  //  21  player_efficiency_rating         Efficiency 

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