import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box, Typography } from "@mui/material";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function SearchResults() {

  const { query } = useParams();
  const [videos, setVideos] = useState([]);

  // Load the data from the API
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${query}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.log(error));
  }, [query]);

  console.log(videos);

  return (
    <Box p={2} sx={{overflowY: "auto", height: "90vh", flex: 2}}>
      <Typography variant="h5" fontWeight="bold" mb={2} sx={{color: "white"}}>
          Search Results for <span style={{color: "#EC1503"}}> {query}</span>
      </Typography>
      <Videos videos={videos} />
    </Box>
  );
}
