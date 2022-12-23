import React, { useState } from 'react'
import '../Style/Player.scss'
import Filter from '../Component/Player/Filter';
import { Container, Stack } from '@mui/material';
import PlayerTable from '../Component/Player/PlayerTable';
import PlayerFilterTable from '../Component/Player/PlayerFilterTable';
import Data from '../Data/players.json'

const PlayerPage = () => {
  const [teamName, setTeamName] = useState('');
  const [searchWord, setSearchWord] = useState('');
  const [displayData, setDisplayData] = useState([])

  // 取出隊伍名稱
  const teamAll = []
  for (let v of Data) {
    teamAll.push(v.team_name)
  }
  const teamNameArr = teamAll.filter((v, i, arr) => {
    // console.log(v, i, arr)
    return arr.indexOf(v) === i
  })

  // 篩選資料
  const handleFilterData = (teamName, searchWord) => {
    if (!teamName && !searchWord) {
      console.log(teamName, searchWord, 'no');
      return
    }
    let newData = []

    newData = handleSelectTeam(Data, teamName)
    console.log(newData)
    newData = handleSearch(newData, searchWord);

    console.log('newdata', newData)
  };

  // 資料過濾
  const handleSelectTeam = (data, teamName) => {
    let newData = [];

    if (teamName !== "all") {
      newData = data.filter((v, i) => v.team_name === teamName);
    } else {
      newData = [...data];
    }

    console.log('過濾', newData)
    return newData;
  };

  // 關鍵字搜尋
  const handleSearch = (data, searchWord) => {
    console.log('關鍵字搜尋', data, searchWord)
    let newData = [...data];

    if (searchWord) {
      newData = data.filter((v, i) => v.name === searchWord);
    } else {
      newData = [...data];
    }

    return newData;
  };

  return (
    <div className="Page PlayerPage">
      <Container fixed>
        <Filter
          teamName={teamName}
          setTeamName={setTeamName}
          teamNameArr={teamNameArr}
          handleFilterData={handleFilterData}
          searchWord={searchWord}
          setSearchWord={setSearchWord}
        />
        <PlayerTable
          Data={Data}
        />
        {/* <PlayerFilterTable/> */}
      </Container>
    </div>

  )
}

export default PlayerPage