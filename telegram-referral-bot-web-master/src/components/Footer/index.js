import { Home, People, Rocket, Task } from "@mui/icons-material";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function Footer() {
    const location = useLocation();

    const locations = [
        {
            path: "/",
            label: "Play",
            icon: <Home />,
        },
        {
            path: "/referral",
            label: "Referral",
            icon: <People />,
        },
        {
            path: "/boost",
            label: "Boost",
            icon: <Rocket />,
        },
        {
            path: "/earn",
            label: "Earn",
            icon: <Task />,
        },
       
    ];

    const [value, setValue] = useState(locations.findIndex(l => l.path === location.pathname));
    const navigate = useNavigate();

    return (
        <Paper
            sx={{
                position: "fixed",
                bottom: 0,
                left: 0,
                right: 0,
            }}
            elevation={3}
        >
            <BottomNavigation
                showLabels
                value={value}
                onChange={(_e, newValue) => {
                    setValue(newValue);
                    navigate(`${locations[newValue].path}`);
                }}
                sx={{
                    background: "#121212",
                }}
            >
                {locations.map((location, index) => (
                    <BottomNavigationAction
                        key={index}
                        label={location.label}
                        icon={location.icon}
                        sx={{ color: "#FFFFFF" }}
                    />
                ))}
            </BottomNavigation>
        </Paper>
    );
}

