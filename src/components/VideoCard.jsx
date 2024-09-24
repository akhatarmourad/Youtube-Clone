/* eslint-disable react/prop-types */
import { Card, CardActionArea, CardMedia, CardContent, Typography } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { demoThumbnailUrl, demoVideoTitle, demoVideoUrl, demoChannelTitle, demoChannelUrl } from "../utils/constants";
import { Link } from "react-router-dom";

export default function VideoCard({ video }) {
  return (
    // Make the card dark
    <Card sx={{ width: {md: "320px", xs: "100%"}, backgroundColor: "#222", color: "white", borderRadius: "8px" }}>
      <CardActionArea>
        <Link to={video.id.videoId ? `/videos/${video.id.videoId}` : demoVideoUrl}>
            <CardMedia
                component="img"
                height="140"
                image={video.snippet.thumbnails ? video.snippet.thumbnails.high.url : demoThumbnailUrl}
                alt="green iguana"
            />
        </Link>
        <CardContent>
            <Link to={video.id.videoId ? `/videos/${video.id.videoId}` : demoVideoUrl}>
                <Typography gutterBottom variant="h5" component="div" sx={{ color: "white"}}>
                    {video.snippet?.title.slice(0, 20) || demoVideoTitle.slice(0,20)}...
                </Typography>
            </Link>

            <Link to={video.snippet?.channelId ? `/channels/${video.snippet?.channelId}` : demoChannelUrl}>
                <Typography variant="subtitle1" sx={{ color: "#777", display: "flex", alignItems: "center"}}>
                    {video.snippet?.channelTitle || demoChannelTitle}
                    <CheckCircle sx={{ color: "#888", ml: 0.65, fontSize: "1.2rem" }} />
                </Typography>
                <Typography variant="body2" sx={{ color: '#555' }}>
                    {video.snippet?.description.slice(0, 30)}...
                </Typography>
          </Link>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}