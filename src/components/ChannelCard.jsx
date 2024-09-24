/* eslint-disable react/prop-types */
import { Box, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

export default function ChannelCard({ channel }) {
  return (
    <Box
        sx={{boxShadow: "none", borderRadius: "20px"}}
    >
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2}}>
              <CardMedia
                image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                at={channel?.snippet?.title}
                sx={{borderRadius: '50%', height: "180px", width: "180px", border: "1px solid #333"}}
              />
              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", color: "white"}}>
                {channel?.snippet?.title}
                <CheckCircle sx={{ fontSize: 18, color: "gray", ml: "5px"}} />
              </Typography>
            </CardContent>
        </Link>
    </Box>
  )
}
