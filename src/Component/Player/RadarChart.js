import React from 'react';

import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';
import { Radar } from 'react-chartjs-2';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);


const RadarChart = ({ playerInfo }) => {
  console.log('player', playerInfo);
  const data = {
    labels: ['FGP 投籃命中率', 'FTP 罰球率', 'Assists 助攻', 'Blocks 阻攻', 'Rebounds 籃板', 'Points 得分'],
    datasets: [
      {
        label: playerInfo.name,
        data: [
          playerInfo.field_goal_percentage,
          playerInfo.free_throw_percentage,
          playerInfo.assists_per_game * 10,
          playerInfo.blocks_per_game * 10,
          playerInfo.rebounds_per_game * 10,
          playerInfo.points_per_game * 10
        ],
        backgroundColor: 'rgb(63, 81, 181, 0.2)',
        borderColor: 'rgb(63, 81, 181, 1)',
        borderWidth: 1.5,
      },
    ],
  };
  return (

    <Radar data={data} />

  )
}

export default RadarChart