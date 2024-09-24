import SearchBar from "./SearchBar.jsx";
import { Link } from "react-router-dom";
import Stack from '@mui/material/Stack';

export default function NavBar() {
  return (
    <Stack
        direction="row"
        p={2}
        alignItems={"center"}
        zIndex={10}
        sx={{position: 'sticky', top: 0, backgroundColor: "#111", justifyContent: "space-between"}}
    >
        <Link to={'/'} style={{display: 'flex', alignItems: 'center'}}>
            <img src="./youtube.svg" alt="Youtube Brand" height={40} />
        </Link>
        <SearchBar />
    </Stack>
  )
}
