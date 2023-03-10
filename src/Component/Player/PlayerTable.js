import * as React from 'react';
import { Paper, Table, TableBody, TableContainer, TableHead, TablePagination, TableRow, Button, ListItemText, DialogTitle, Dialog, Card } from '@mui/material';
import PlayerDetailPop from './PlayerDetailPop';
import { useNavigate } from "react-router-dom";
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled, createTheme } from '@mui/material/styles';
import { indigo, red, blueGrey } from '@mui/material/colors';
import PlagiarismIcon from '@mui/icons-material/Plagiarism';
const columns = [
  {
    id: 'Team',
    label: 'Team',
    minWidth: 100,
    align: 'left',
    filter: false,
  },
  {
    id: 'Name',
    label: 'Name',
    minWidth: 100,
    align: 'left',
    filter: false,
  },
  {
    id: 'Games',
    label: 'Games',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Points',
    label: 'Points',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Rebounds',
    label: 'Rebounds',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Assists',
    label: 'Assists',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Steals',
    label: 'Steals',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Blocks',
    label: 'Blocks',
    minWidth: 100,
    align: 'center',
    filter: true,
  },
  {
    id: 'Details',
    label: 'Details',
    minWidth: 80,
    align: 'center',
    filter: false,
  },
];
export default function PlayerTable({ page, setPage, rowsPerPage, setRowsPerPage, displayData, handleChangePage, handleChangeRowsPerPage }) {
  const navigate = useNavigate();
  const [open, setOpen] = React.useState(true);
  const [playerInfo, setPlayerInfo] = React.useState({})
  const [playerDetail, setPlayerDetail] = React.useState([])

  const handleClickOpen = (v) => {
    setPlayerInfo(v)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const StyledTableCell = styled(TableCell)(() => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: blueGrey[50],
      color: indigo[500],
    }
  }));

  return (
    <>

      {/* ????????? */}
      {open &&
        <PlayerDetailPop
          playerInfo={playerInfo}
          setOpen={setOpen}
          handleClose={handleClose}
          playerDetail={playerDetail}
        />
      }

      <Paper sx={{ width: '100%', overflow: 'hidden', mt: 3 }}>
        <TableContainer sx={{ maxHeight: 520 }}>
          <Table stickyHeader aria-label="sticky table">
            {/* ?????? */}
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    className={column.filter && 'filterItem'}
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth, color: '#3f51b5', fontWeight: "bold", fontSize: 16 }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>

            <TableBody>
              {displayData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((v, i) => {
                  return (
                    <TableRow>
                      <TableCell>
                        {v.team_name}
                      </TableCell>
                      <TableCell >
                        {v.name}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}
                      >
                        {v.games_played}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        {v.points_per_game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        {v.rebounds_per_game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        {v.assists_per_game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        {v.steals_per_game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        {v.blocks_per_game}
                      </TableCell>
                      <TableCell
                        align="center"
                        sx={{ fontSize: 16 }}>
                        <Button onClick={() => {
                          setPlayerDetail(v)
                          handleClickOpen(v)
                        }}>
                          <PlagiarismIcon
                            className='icon'
                            sx={{ color: indigo[500] }} />
                        </Button>
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10]}
          component="div"
          count={displayData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
}