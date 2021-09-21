import React from 'react';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

export const TablePreview = ({stacks}) => {
function createData(name, number,category) {
  return {
    name,
    number,
    category,
    stack: [
      {
        name: "",
        website: "www.lien.com",
        year: 2021,
      },
    ],
  };
}
function Row(props) {
  const {row} = props
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <TableRow sx={{ "& > *": { borderBottom: "unset" } }}>
        <TableCell>
          <IconButton
            aria-label="expand row"
            size="small"
            onClick={() => setOpen(!open)}
          >
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {row.name}
        </TableCell>
        <TableCell>{row.number}</TableCell>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box sx={{ margin: 1 }}>
              <Typography variant="h6" gutterBottom component="div">
                Stack
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>Nom</TableCell>
                    <TableCell>Lien</TableCell>
                    <TableCell align="right">Total</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {row.category.map((historyRow) => (
                    <TableRow key={historyRow.id}>
                      <TableCell component="th" scope="row">
                        {historyRow.name}
                      </TableCell>
                      <TableCell>{historyRow.stack_category}</TableCell>
                      <TableCell align="right">{historyRow.stack_category_id}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}
const rows = [
  createData('Backend Frameworks & Languages',stacks.filter((stack) => stack.stack_category_id === 1).length, stacks.filter((stack) => stack.stack_category_id === 1) ),
  createData('Frontend Frameworks & Languages',stacks.filter((stack) => stack.stack_category_id === 2).length, stacks.filter((stack) => stack.stack_category_id === 2) ),
  createData('DevOps',stacks.filter((stack) => stack.stack_category_id === 3).length, stacks.filter((stack) => stack.stack_category_id === 3) ),
  createData('Data',stacks.filter((stack) => stack.stack_category_id === 4).length, stacks.filter((stack) => stack.stack_category_id === 4) ),
  createData('Mobile',stacks.filter((stack) => stack.stack_category_id === 5).length, stacks.filter((stack) => stack.stack_category_id === 5) ),
  createData('Project Management',stacks.filter((stack) => stack.stack_category_id === 6).length, stacks.filter((stack) => stack.stack_category_id === 6) ),
  createData('IDE',stacks.filter((stack) => stack.stack_category_id === 7).length, stacks.filter((stack) => stack.stack_category_id === 7) ),
  createData('NoCode',stacks.filter((stack) => stack.stack_category_id === 8).length, stacks.filter((stack) => stack.stack_category_id === 8) ),
];
return (
  <>
  <TableContainer component={Paper}>
    <Table aria-label="collapsible table">
      <TableHead>
        <TableRow>
          <TableCell>Catégories de Stack</TableCell>
          <TableCell>Nom</TableCell>
          <TableCell>Total</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {rows.map((row) => (
          <Row key={row.name} row={row} />
        ))}
      </TableBody>
    </Table>
  </TableContainer>
  </>
);
};