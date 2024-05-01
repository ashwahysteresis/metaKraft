import { Token } from "@mui/icons-material";
import { Box, Button } from "@mui/material";
import React, { useContext } from "react";
import UserStore from "../../contexts/UserStore";
import Title from "../../shared/Title";

export default function Referral() {
    const { user } = useContext(UserStore);

    return (
        <Box height={"100vh"}>
            <Title title="Referral" />
            <main>
                <h1 style={{ textAlign: "center" }}>Referral</h1>
                <h2 style={{ textAlign: "center" }}>Invite your friends</h2>
                <h3 style={{ textAlign: "center" }}>Get</h3>
                <Box sx={{ display: "flex", gap: "1rem", alignItems: "center" }}>
                    <Token
                        sx={{
                            height: "2rem",
                            width: "2rem",
                        }}
                    />
                    <h2>10000</h2>
                </Box>
                <h3 style={{ textAlign: "center" }}>
                    when your referral joins and completes atleast one task
                </h3>

                <Button
                    variant="contained"
                    sx={{
                        borderRadius: "8px",
                        mt: "1rem",
                    }}
                    onClick={() =>
                        window.navigator.clipboard.writeText(
                            `https://t.me/Space_task_bot?start=${user?._id}`,
                        )
                    }
                >
                    Copy Referral Link
                </Button>
            </main>
        </Box>
    );
}
