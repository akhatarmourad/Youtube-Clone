import { useState, useEffect } from "react";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New");
  const [videos, setVideos] = useState([]);

  // Load the data from the API
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory === "New" ? "AI and Data Projects" : selectedCategory}`)
        .then((data) => setVideos(data.items))
        .catch((error) => console.log(error));
  }, [selectedCategory]);

  console.log(videos);

  return (
    <Stack sx={{flexDirection: {sm: "column", md: "row"}}}>
        {/* Side Bar */}
        <Box sx={{height: {sm: 'auto', md: '92vh'}, borderRight: '1px solid #222', px: {sm: 0, md: 2}}}>
            <SideBar selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
            <Typography className="copyright" variant="body2" sx={{mt: 1.5, color: '#ddd'}}>
                Copyright © 2024 All Rights Reserved
            </Typography>
        </Box>

        {/* Main Feed */}
        <Box
            p={2}
            sx={{
                overflowY: "auto",
                height: "90vh",
                flex: 2
            }}
        >
            <Typography
                variant="h5"
                fontWeight="bold"
                mb={2}
                sx={{color: "white"}}
            >
                {selectedCategory}<span style={{color: "#EC1503"}}> Videos</span>
            </Typography>

            <Videos videos={videos}/>
        </Box>
    </Stack>
  )
}
