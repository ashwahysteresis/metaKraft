import { Box } from "@mui/material";
import React from "react";
import money from "../../../src/assets/icons/money-icon.jpg";
import arrow from "../../../src/assets/images/arrow.jpg";
import award from "../../../src/assets/images/award.jpg";
import metakrapftx from "../../../src/assets/images/metakraft.jpg";


import "../../../src/assets/styles/boost.css";
import { balance } from "../../../src/pages/Home/index.js";
import Title from "../../shared/Title";



export default function Boost() {
    let bal=balance;
    return (
        <Box height={"100vh"}>
            <Title title="Boost" />
            <main>
            <img id="icon-imag" src={metakrapftx} />

            <div  id="showbalance" > Your Balance :  <div><img id="icon" src={money} /></div>  {bal}</div>
            
            <h3 id="boosters">Daily Boosters</h3>
            <hr id="hr"></hr>
            <div id="rewardtag"> <div><img style={{height:'44px',width:'44px',marginTop:'10px' ,marginRight:'12px',marginLeft:'21px',}} src={award} /> </div> 
            GET 3x MORE POINTS FOR EACH TASK 
            <div><img style={{height:'24px',width:'24px',float:'right',marginTop:'20px',marginLeft:'33px'}} src={arrow} /> </div>
            </div>
            <div style={{display:'flex',marginTop:'-55px',marginLeft:'-179px'}}>-<div style={{fontSize:'20px'}}><img id="ico" src={money} /></div> 2000</div>
            <div id="dailyboost">
            <div id="comingsoon"> <p style={{paddingTop:'30px'}}>Coming Soon</p> </div>
            <div id="comingsoon"> <p style={{paddingTop:'30px'}}>Coming Soon</p> </div>
            

            </div>
            <h3 id="boosters">Weekly Boosters</h3>
            <hr id="hr"></hr>
            <div style={{gap:'20px'}}> 
                <div style={{display:'flex',gap:'10px'}}>
                <div id="weeklyboost"> <p style={{paddingTop:'50px'}}>Coming Soon</p>  </div>
            <div id="weeklyboost"> <p style={{paddingTop:'50px'}}>Coming Soon</p>  </div>
                    
                </div>
        

            <div id="logbox"> <p style={{paddingTop:'50px'}}>Coming Soon</p></div>
            </div>
            
            </main>
        </Box>
    );
}
