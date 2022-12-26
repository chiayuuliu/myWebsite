import React, { useState } from 'react'
import '../Style/Player.scss'
import Filter from '../Component/Player/Filter';
import { Container, Stack } from '@mui/material';
import PlayerTable from '../Component/Player/PlayerTable';
import Data from '../Data/players.json'

const PlayerPage = () => {
  const [teamName, setTeamName] = useState('All');
  const [searchWord, setSearchWord] = useState('');
  const [displayData, setDisplayData] = useState([...Data])
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  // 改變頁數
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  // 改變一頁顯示幾筆
  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  // 取出隊伍名稱
  const teamAll = []
  for (let v of Data) {
    teamAll.push(v.team_name)
  }
  const teamNameArr = teamAll.filter((v, i, arr) => {
    return arr.indexOf(v) === i
  })

  // 篩選資料
  const handleFilterData = (teamName, searchWord) => {
    let newData = []
    if (teamName === "All" && !searchWord) {
      console.log(teamName, searchWord, 'no');
      setDisplayData([...Data])
      return
    }

    if (teamName === "All" && searchWord) {
      console.log('沒選隊名 有關鍵字')
      newData = Data.filter((v) => v.name.toLowerCase().includes(searchWord.toLowerCase()));
      setDisplayData(newData)
      return
    }

    if (teamName !== "All") {
      console.log('有隊名 關鍵字隨意')
      newData = Data.filter((v) => v.team_name === teamName && v.name.toLowerCase().includes(searchWord.toLowerCase()));
      setDisplayData(newData)
      return

    } else {
      newData = [...Data];
    }
    setDisplayData(newData)
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
          displayData={displayData}
          page={page}
          setPage={setPage}
          rowsPerPage={rowsPerPage}
          setRowsPerPage={setRowsPerPage}
          handleChangePage={handleChangePage}
          handleChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </Container>
    </div>

  )
}

export default PlayerPage