/* eslint-disable react/prop-types */
import { Stack, Box } from '@mui/material';
import { VideoCard, ChannelCard } from "./index";

export default function Videos({ videos, direction }) {
  return (
    <Stack direction={direction || "row"} flexWrap="wrap" gap={2}>
      {
        videos.map((item, index) => (
          <Box key={index}>
            {item.id.videoId && <VideoCard video={item} />}
            {item.id.channelId && <ChannelCard channel={item} />}
          </Box>
        ))
      }
    </Stack>
  );
}
