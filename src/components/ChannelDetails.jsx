import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchFromAPI } from "../utils/FetchFromAPI";
import { Stack, Box } from "@mui/material";
import { VideoCard, ChannelCard } from "./index";

export default function ChannelDetails() {

  const { id } = useParams();
  const [channelDetails, setChannelDetails] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromAPI(`channels?part=snippet&id=${id}`)
      .then((data) => setChannelDetails(data.items[0]))
      .catch((error) => console.log(error));

    fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`)
      .then((data) => setVideos(data.items))
      .catch((error) => console.log(error));

  }, [id]);

  return (
    <div>
        <Box minHeight="95vh" padding={2}>
          <Box>
            {/* Gradient Box */}
            <div 
              style={{
                background: 'linear-gradient(90deg, rgba(80,0,0,1) 0%, rgba(208,3,13,1) 46%, rgba(166,0,0,1) 100%)',
                height: "250px",
                width: "100%",
                margin: "auto",
                borderRadius: "20px",
                zIndex: -1,
              }}
            />

            {/* Channel Details */}
            <Box sx={{transform: 'translateY(-125px)'}}>
              <ChannelCard channel={channelDetails} />
            </Box>

            {/* Videos */}
            <Stack direction="row" flexWrap="wrap" gap={2} justifyContent="center">
              {
                videos.map((item, index) => (
                  <Box key={index}>
                    {item.id.videoId && <VideoCard video={item} />}
                    {item.id.channelId && <ChannelCard channel={item} />}
                  </Box>
                ))
              }
            </Stack>
          </Box>
        </Box>
    </div>
  )
}
