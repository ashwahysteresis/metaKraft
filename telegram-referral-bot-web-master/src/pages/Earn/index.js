import { ArrowRight, Token } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useCallback, useContext, useEffect, useState } from "react";
import arrow from "../../../src/assets/images/arrow.jpg";
import checkin from "../../../src/assets/images/checkin.jpg";
import creativeWriting from "../../../src/assets/images/creative-writting.jpg";
import mask from "../../../src/assets/images/mask.jpg";
import metakrapftx from "../../../src/assets/images/metakraft.jpg";
import twitter from "../../../src/assets/images/twitter.jpg";

import "../../../src/assets/styles/earn.css";
import { verifyTask } from "../../apis/activity";
import UserStore from "../../contexts/UserStore";
import Title from "../../shared/Title";



export default function Earn() {
    const { telegram, user } = useContext(UserStore);
    const [taskStatus, setTaskStatus] = useState({ task1: false });
    const [reward,totalReward] = useState(0);

    const verifyTasks = useCallback(
        async taskId => {
            if (user) {
                const res = await verifyTask(user.telegram_uid, taskId);
                if (res) {
                    setTaskStatus({ ...taskStatus, [taskId]: true });
                }
            }
        },
        [user],
    );

    useEffect(() => {
        verifyTasks("task1");
    }, [verifyTasks]);

    const joinTGChannel = () => {
        if (telegram && user) {
            telegram.openTelegramLink("https://t.me/metakraftai");
            const interval = setInterval(async () => {
                const done = await verifyTask(user.telegram_uid, "task1");
                if (done) {
                    totalReward(reward+2000)
                    setTaskStatus({ ...taskStatus, task1: true });
                    clearInterval(interval);
                }
            }, 1000);
        }
    };

    return (
        <Box height={"100vh"}>
            <Title title="Earn" />
            <main>
            <img id="icon-imag" src={metakrapftx} style={{marginTop: "100px"}} />
            <img id="mask-img" src={mask} />
            <div  id="earncoin" >Want to earn more coins?</div>
            <h3 style={{marginLeft:'-220px'}}>Daily  Tasks</h3>
            <hr id="hr"></hr>
            <div style={{display:'flex',gap:'18px'}}>
            <div id="dailytweet">
                <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px'}} src={twitter}/></div>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px',marginLeft:'33px'}} src={arrow} /></div>
                </div>
                 Retweet Daily Tweet
                 
                 </div>

            <div id="dailytweet"> 
            <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px'}} src={checkin}/></div>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px',marginLeft:'33px'}} src={arrow} /></div>
                </div>
            Daily Check In</div>
            <div id="dailytweet">
            <div style={{display:'flex',justifyContent:'space-between'}}>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px'}} src={creativeWriting}/></div>
                    <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'10px',marginLeft:'33px'}} src={arrow} /></div>
                </div>
                Enter Prompts(Max 3) </div>
            </div>
                <Token
                    sx={{
                        height: "5rem",
                        width: "5rem",
                    }}
                />
                <h1>Earn Coins</h1>
                <p>Earn coins by completing the following tasks</p>

                {/* Create grid of 3 columns */}
                <Box
                    sx={{
                        display: "grid",
                        gridTemplateColumns: "1fr 1fr",
                        gap: "1rem",
                    }}
                >
                    <Box
                        display={"flex"}
                        padding="1rem"
                        flexDirection={"column"}
                        border="1px solid #FFFFFF"
                        borderRadius={"10px"}
                        minWidth={"150px"}
                        sx={{ cursor: "pointer" }}
                        backgroundColor={taskStatus.task1 ? "#c4c4c4" : "transparent"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width={"100%"}
                            onClick={joinTGChannel}
                        >
                            <h6>Join TG group</h6>
                            <ArrowRight />
                        </Box>
                        <Box display={"flex"} gap={"0.2rem"} alignItems={"center"} width={"100%"}>
                            <p>Reward: {reward}</p>
                            <Token />
                        </Box>
                        <h5>{taskStatus.task1 ? "Completed" : ""}</h5>
                    </Box>
                    <Box
                        display={"flex"}
                        padding="1rem"
                        flexDirection={"column"}
                        border="1px solid #FFFFFF"
                        borderRadius={"10px"}
                        minWidth={"150px"}
                        sx={{ cursor: "pointer" }}
                        backgroundColor={"#c4c4c4"}
                    >
                        <Box
                            display={"flex"}
                            justifyContent={"space-between"}
                            alignItems={"center"}
                            width={"100%"}
                        >
                            <h6>Follow Twitter</h6>
                            <ArrowRight />
                        </Box>
                        <Box display={"flex"} gap={"0.2rem"} alignItems={"center"} width={"100%"}>
                            <p>Reward: {reward}</p>
                            <Token />
                        </Box>
                        <h5>Coming Soon</h5>
                    </Box>
                </Box>
            </main>
        </Box>
    );
}
