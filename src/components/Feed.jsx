import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Stack, Box, Typography } from "@mui/material";
import SideBar from "./SideBar";
import Videos from "./Videos";
import { fetchFromAPI } from "../utils/FetchFromAPI";

export default function Feed() {

  const [selectedCategory, setSelectedCategory] = useState("New");

  // Load the data from the API
  useEffect(() => {
    fetchFromAPI(`search?part=snippet&q=${selectedCategory}`)
  }, [selectedCategory]);

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
                Latest<span style={{color: "#EC1503"}}> Videos</span>
            </Typography>

            <Videos />
        </Box>
    </Stack>
  )
}
