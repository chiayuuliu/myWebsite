import React from 'react'
import '../../Style/Player.scss'
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Button, ListItemText, DialogTitle, Dialog, Card } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import RadarChart from './RadarChart';
import ClearIcon from '@mui/icons-material/Clear';

const PlayerDetailPop = ({ handleClose, open, playerInfo, playerDetail }) => {

  const PlayerData = [
    {
      item: "Team ",
      value: playerDetail.team_acronym,
    },
    {
      item: "TeamName",
      value: playerDetail.team_name,
    },
    {
      item: "Games",
      value: playerDetail.games_played,
    },
    {
      item: "MPG",
      value: playerDetail.minutes_per_game,
    },
    {
      item: "FGA",
      value: playerDetail.field_goals_attempted_per_game,
    },
    {
      item: "FGM",
      value: playerDetail.field_goals_made_per_game,
    },
    {
      item: "FG%",
      value: playerDetail.field_goal_percentage,
    },
    {
      item: "FT%",
      value: playerDetail.free_throw_percentage,
    },
    {
      item: "3PA",
      value: playerDetail.three_point_attempted_per_game,
    },
    {
      item: "3PM",
      value: playerDetail.three_point_made_per_game,
    },
    {
      item: "3PT%",
      value: playerDetail.three_point_percentage,
    },
    {
      item: "Points",
      value: playerDetail.points_per_game,
    },
    {
      item: "ORebounds",
      value: playerDetail.offensive_rebounds_per_game,
    },
    {
      item: "DRebounds",
      value: playerDetail.defensive_rebounds_per_game,
    },
    {
      item: "Rebounds",
      value: playerDetail.rebounds_per_game,
    },
    {
      item: "Assists",
      value: playerDetail.assists_per_game,
    },
    {
      item: "Steals",
      value: playerDetail.steals_per_game,
    },
    {
      item: "Blocks",
      value: playerDetail.blocks_per_game,
    },
    {
      item: "Turnovers",
      value: playerDetail.turnovers_per_game,
    },
    {
      item: "Efficiency",
      value: playerDetail.player_efficiency_rating,
    }

  ]
  return (
    <div className="playerDetailBg"
      onClick={(e) => {
        e.stopPropagation()
        handleClose()
      }}>
      <div className="playerDetailPop"
        onClick={(e) => {
          e.stopPropagation()
        }}>
        <ClearIcon
          className='closeBtn'
          onClick={() => {
            handleClose()
          }} />
        <div className="chart">

          <RadarChart
            playerInfo={playerInfo}
          />
        </div>
        <div className="infoWrap">

          <div>
            <div className="name">
              <h2><PersonIcon />{playerDetail.name}</h2>
            </div>
            <ul>
              {PlayerData.map((v) => {
                return (
                  <li className='item'>
                    {v.item}：<span>{v.value}</span>
                  </li>
                )
              })}
            </ul>
          </div>

        </div>
      </div>
    </div>
  )
}

export default PlayerDetailPop