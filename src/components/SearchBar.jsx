import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

export default function SearchBar() {

  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(query) {
        navigate(`/search/${query}`);
        setQuery('');
    }
  }
  
  return (
    <Paper
        onSubmit={handleSubmit}
        component="form"
        sx={{
            backgroundColor: '#222',
            borderRadis: 25,
            border: "1px solid #333",
            boxShadow: "none",
            pl: 2,
            mr: {sm: 5}
        }}
    >
        <input 
            type="text"
            placeholder="Search..."
            className="search-bar"
            style={{backgroundColor: "#222", color: "white"}} 
            value={query}
            onChange={(e) => setQuery(e.target.value)}
        />
        <IconButton type="submit" sx={{p: '10px', color: 'red'}}>
            <SearchIcon />
        </IconButton>
    </Paper>
  )
}
