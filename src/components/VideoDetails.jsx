import { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { Stack, Box, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";

import { Videos } from "./index";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function VideoDetails() {

  const [videoDetails, setVideoDetails] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
     .then((data) => setVideoDetails(data.items[0]))
     .catch((error) => console.log(error));
  }, [id]);

  // Check if Data is Loaded
  if(!videoDetails?.snippet) return <div>Loading...</div>;

  const {snippet: {title, channelId, channelTitle}, statistics: {viewCount, likeCount}} = videoDetails;

  return (
    <Box minHeight="95vh">
      <Stack direction={{ xs: "column", md: "row"}}>
        <Box flex={1}>
          <Box sx={{ width: "100%", position: "sticky", top: "86px"}}>
            <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`} controls className="react-player" />
            <Typography variant="h5" color="#fff" sx={{ py: 1, px: 2}}>{title}</Typography>

            <Stack direction="row" justifyContent="space-between" alignItems="center" px={2} py={1} color="#fff" sx={{borderTop: "1px solid #333", borderBottom: "1px solid #333", marginTop: "10px"}}>
              <Link to={`/channel/${channelId}`}>
                <Typography color="#fff" variant={{sm: "body1", md: "h6"}} sx={{display: "flex", alignItems: "center"}}>
                  {channelTitle}
                  <CheckCircle sx={{fontSize: "15px", color: "gray", ml: "5px"}} />
                </Typography>
              </Link>

              <Stack direction="row" spacing={3} alignItems="center">
                <Typography variant="body2" sx={{opacity: 0.65}}>{parseInt(viewCount).toLocaleString()} Views</Typography>
                <Typography variant="body2" sx={{opacity: 0.65}}>{parseInt(likeCount).toLocaleString()} Likes</Typography>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Stack>
    </Box>
  )
}
