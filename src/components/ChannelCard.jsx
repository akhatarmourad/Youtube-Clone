/* eslint-disable react/prop-types */
import { Box, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoProfilePicture } from "../utils/constants";
import { Link } from "react-router-dom";

export default function ChannelCard({ channel }) {
  return (
    <Box
        sx={{
          boxShadow: "none", 
          borderRadius: "10px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 2,
          width: {lg: "280px", md: "320px", xs: "356px"},
          height: "260px",
          backgroundColor: "#222",
          margin: "auto"
        }}
    >
        <Link to={`/channel/${channel?.id?.channelId}`}>
            <CardContent sx={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", gap: 2}}>
              <CardMedia
                image={channel?.snippet?.thumbnails?.high?.url || demoProfilePicture}
                at={channel?.snippet?.title}
                sx={{borderRadius: '50%', height: "140px", width: "140px", border: "1px solid #333"}}
              />

              <Typography variant="h6" sx={{ display: "flex", alignItems: "center", color: "white"}}>
                {channel?.snippet?.title}
                <CheckCircle sx={{ fontSize: 18, color: "gray", ml: "5px"}} />
              </Typography>
              
              {channel?.statistics?.subscriberCount && (
                <Typography sx={{ fontSize: '15px', fontWeight: 500, color: 'gray' }}>
                  {parseInt(channel?.statistics?.subscriberCount).toLocaleString('en-US')} Subscribers
                </Typography>
              )}
            </CardContent>
        </Link>
    </Box>
  )
}
