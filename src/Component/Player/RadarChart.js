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
// 資料數據
/*
    field_goal_percentage投籃命中率
    free_throw_percentage罰球率
    assists_per_game助攻
    blocks_per_game阻攻
    rebounds_per_game籃板
    points_per_game得分

    steals_per_game抄截

    PR=100－（100R－50）/N
    式中R為某分數在按大小排列的數列中的名次，N是分數的總次數或個數

  leagueData.FGP = fieldGoalAll.reduce((acc, cur) => acc + cur) / rawData.length
    */


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
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };
  return (

    <Radar data={data} />

  )
}

export default RadarChart