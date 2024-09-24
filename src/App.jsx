import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Box } from "@mui/material";
import { Feed, VideoDetails, ChannelDetails, SearchResults, PublishVideo, NavBar } from "./components/index";

function App() {

  return (
    <Router>
      <Box sx={{ backgroundColor: "#111"}}>
        <NavBar />
        <Routes>
            <Route path="/" exact element={<Feed />} />
            <Route path="/video/:id" element={<VideoDetails />} />
            <Route path="/channel/:id" element={<ChannelDetails />} />
            <Route path="/Search/:query" element={<SearchResults />} />
            <Route path="/publish" element={<PublishVideo />} />
        </Routes>
      </Box>
    </Router>
  )
}

export default App;