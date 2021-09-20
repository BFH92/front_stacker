import React, { useState, useEffect } from 'react';
import StacksManager from '../../Services/RailsApi/StacksFetch';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';

const StacksTable = () => {
  const [stacks, setStacks] = useState([]);
  const [backendStacks, setBackendStacks]= useState([]);
  const [frontendStacks, setFrontendStacks]= useState([]);
  const [devopsStacks, setDevopsStacks]= useState([]);
  const [dataStacks, setDataStacks]= useState([]);
  const [mobileStacks, setMobileStacks]= useState([]);
  const [projectStacks, setProjectStacks]= useState([]);
  const [ideStacks, setIdeStacks]= useState([]);
  const [noCodeStacks, setNoCodeStacks]= useState([]);

  const getAllStacks = async () => {
    const response = await StacksManager.getAllStacks()
    console.log(response)
    setStacks(response.data)  
  }

  useEffect(() => {
    getAllStacks()
  }, []);

  useEffect(() => {
    setBackendStacks(stacks.filter((stack) => stack.stack_category_id === 1));
    setFrontendStacks(stacks.filter((stack) => stack.stack_category_id === 2));
    setDevopsStacks(stacks.filter((stack) => stack.stack_category_id === 3));
    setDataStacks(stacks.filter((stack) => stack.stack_category_id === 4));
    setMobileStacks(stacks.filter((stack) => stack.stack_category_id === 5));
    setProjectStacks(stacks.filter((stack) => stack.stack_category_id === 6));
    setIdeStacks(stacks.filter((stack) => stack.stack_category_id === 7));
    setNoCodeStacks(stacks.filter((stack) => stack.stack_category_id === 8));
  }, [stacks]);

  const useRowStyles = makeStyles({
    root: {
      '& > *': {
        borderBottom: 'unset',
      },
    },
  });
  
  function createData(
    categoryName: string,
    countStacks: number
  ) {
    return {
      categoryName,
      countStacks,
      stacks: [
        { date: '2020-01-05', customerId: '11091700', amount: 3 },
        { date: '2020-01-02', customerId: 'Anonymous', amount: 1 },
      ],
    };
  }
  
  function Row(props: { row: ReturnType<typeof createData> }) {
    const { row } = props;
    const [open, setOpen] = useState(false);
    const classes = useRowStyles();
  
    return (
      <React.Fragment>
        <TableRow className={classes.root}>
          <TableCell>
            <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
              {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
            </IconButton>
          </TableCell>
          <TableCell component="th" scope="row">
            {row.categoryName}
          </TableCell>
          <TableCell align="right">{row.countStacks}</TableCell>
        </TableRow>
        <TableRow>
          <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
            <Collapse in={open} timeout="auto" unmountOnExit>
              <Box margin={1}>
                <Typography variant="h6" gutterBottom component="div">
                  Stacks
                </Typography>
                <Table size="small" aria-label="purchases">
                  <TableHead>
                    <TableRow>
                      <TableCell>Nom</TableCell>
                      <TableCell>Count Entreprise</TableCell>
                      <TableCell>Lien</TableCell>
                      <TableCell align="right">Année sortie</TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {row.stacks.map((historyRow) => (
                      <TableRow key={historyRow.date}>
                        <TableCell component="th" scope="row">
                          React.JS
                        </TableCell>
                        <TableCell>99</TableCell>
                        <TableCell>google.com</TableCell>
                        <TableCell align="right">
                          2000
                        </TableCell>
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
    createData('Backend Frameworks & Languages', backendStacks.count),
    createData('FrontEnd Frameworks & Languages', frontendStacks.count),
    createData('DevOps', devopsStacks.count),
    createData('Data', dataStacks.count),
    createData('Mobile', mobileStacks.count),
    createData('Project Management', projectStacks.count),
    createData('IDE', ideStacks.count),
    createData('NoCode', noCodeStacks.count)
  ];

  return (
    <TableContainer component={Paper}>
      <Table aria-label="collapsible table">
        <TableHead>
          <TableRow>
            <TableCell />
            <TableCell>Catégories</TableCell>
            <TableCell align="right">Nombre de stacks</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <Row key={row.categoryName} row={row} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default StacksTable;
