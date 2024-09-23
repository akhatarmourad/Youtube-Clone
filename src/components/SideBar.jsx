import { Stack } from "@mui/material";
import { categories } from "../utils/constants";


export default function SideBar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
        direction="row"
        sx={{
            height: {sx: 'auto', md: '93%'},
            overflowY: 'auto',
            flexDirection: {md: 'column'}
        }}
    >
        {
            categories.map((category, index) => {
                return (
                    <button
                        key={index}
                        className="category-btn"
                        style={{
                            backgroundColor: category.name === selectedCategory && "#222",
                            color: "white",
                        }}
                        onClick={() => setSelectedCategory(category.name)}
                    >
                        <span>{category.icon}</span>
                        <span>{category.name}</span>
                    </button>
                );
            })
        }
    </Stack>
  )
}
