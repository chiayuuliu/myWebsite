import * as React from 'react';
import { Box, Stack, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { indigo } from '@mui/material/colors';
import { LoadingButton } from '@mui/lab';


const Filter = ({ teamNameArr, teamName, setTeamName, searchWord, setSearchWord, handleFilterData }) => {


  return (
    <Box
      className='filterWrap'
      fullWidth
      justifyContent="space-between"
      sx={{
        height: 100,
        display: "flex",
      }}
    >
      <div className="filterSelect ">
        <p>Team：</p>
        <FormControl sx={{ m: 0, minWidth: 250 }} size="small">
          <InputLabel id="demo-select-small">
            Team
          </InputLabel>
          <Select
            labelId="demo-select-small"
            id="demo-select-small"
            value={teamName}
            label="Team"
            onChange={(e) => {
              setTeamName(e.target.value);
            }}
          >
            <MenuItem value='All'>All</MenuItem>
            {teamNameArr.map((v) => {
              return (
                <MenuItem value={v}>{v}</MenuItem>
              )
            })}
          </Select>
        </FormControl>
        <div className="searchWrap">
          <SearchIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            sx={{ color: 'action.active', ml: 0.5, mr: 1 }}
            id="input-with-sx" label="Search" variant="standard"
            value={searchWord}
            onChange={(e) => {
              setSearchWord(e.target.value)
            }}
          />
        </div>
        <LoadingButton
          sx={{ bgcolor: indigo[500], ml: 3.5 }}
          // loading={createloading}
          type="submit"
          variant="contained"
          onClick={() => {
            handleFilterData(teamName, searchWord)
          }}
        >
          Search
        </LoadingButton>
      </div>
    </Box>
  )
}

export default Filter