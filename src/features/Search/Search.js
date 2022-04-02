import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {selectTerm, changeTerm} from './searchSlice';
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import './Search.css';

export default function Search(){
  const term = useSelector(selectTerm);
    const [input, setInput] = useState(term)

    const dispatch = useDispatch();

    const handleSearchChange = (e) => {
      setInput(e.target.value)
        if (e.key === 'Enter') {
        dispatch(changeTerm(e.target.value));
        }
      }

    return (
        <div>
    <Paper
      style={{margin: 'auto'}}
      className="search"
      sx={{ p: '0px 4px', display: 'flex', alignItems: 'center', width: 400, border: '1px solid grey', borderRadius: '5px'}}
    >
      <IconButton  sx={{ p: '10px' }} aria-label="search">
        <SearchIcon />
      </IconButton>
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Search for a subreddit" onChange={handleSearchChange} onKeyDown={handleSearchChange}
        inputProps={{ 'aria-label': 'search google maps' }}
        id="search"
        value={input}
      />
    </Paper>
        </div>
    )
}