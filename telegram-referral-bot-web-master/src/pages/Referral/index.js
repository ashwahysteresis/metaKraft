import { Add } from "@mui/icons-material";
import { Box } from "@mui/material";
import React, { useContext } from "react";
import money from "../../../src/assets/icons/money-icon.jpg";
import metakrapftx from "../../../src/assets/images/metakraft.jpg";
import "../../../src/assets/styles/referral.css";
import UserStore from "../../contexts/UserStore";
 

import Title from "../../shared/Title";

export default function Referral() {
    const { user } = useContext(UserStore);
    let balance = 2500;
    return (
        <Box height={"100vh"}>
            <Title title="Referral" />
            <main>
                <img id="icon-image" src={metakrapftx} />
                <div id="text">
                <Add  style={{height:'50px',width:'50px',marginTop:'10px' }}/>   
                 <img className="icons"  src={money}/>
                  <h3 style={{marginTop:'10px',marginLeft:'-10px'}} > {balance}</h3>
                </div>
                <div id='dailytask'>
                Every person who you refer joins and complete hi 1st daily tasks 
                </div>
                 <button 
                 id='refer'
                 onClick={() =>
                    window.navigator.clipboard.writeText(
                        `https://t.me/Space_task_bot?start=${user?._id}`,
                    )
                } > Refer a Friend </button>

                 <p id="invitedf">Invited Friendis</p>
                 <hr id="hr"></hr>

                <div id="invited">
                    <p style={{marginTop:'15%'}}>No One Invited</p> </div>


                {/* <h1 style={{ textAlign: "center" }}>Referral</h1>
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
                */}
            </main>
        </Box>
    );
}
