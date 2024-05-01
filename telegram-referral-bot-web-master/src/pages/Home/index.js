import { Box } from "@mui/material";
import React, { useEffect, useState } from "react";
import metakrapftx from "../../../src/assets/images/metakraftx.jpg";
import "../../../src/assets/styles/home.css";
import Title from "../../shared/Title";


let balance = 0;
export { balance };

export default function Home() {
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    //const [user,setUser] = useState(UserStore);
    //setUser(userStore.getUser);
    // const history = useHistory();
    if(data!=null){
        balance = data.points;
    }
    
    
    useEffect(() => {
        getProfile();
    },[])
    var getProfile = () => {
        fetch(`http://127.0.0.1:8000/profile/1143086766`)
        .then(response => {
            if (!response.ok) {
                throw new Error('Failed to fetch data');
            }
            return response.json();
        })
        .then(data => {
            setData(data);
        })
        .catch(error => {
            setError(error);
        });
        if (error) {
            return <div>Error: {error.message}</div>;
        }
        
        if (!data) {
            return <div>Loading...</div>;
        }
    };
    
    console.log(data);



    const handleClick = () => {
        // Redirect to another page
       // history.push('/play');
      };
    return (
        <Box height={"100vh"} sx={{background: "#121212" }}>
            <main >
            
            <Title title="Play" />
            {/* <img style="objectFit:cover; margin-top:-700px; height:800px;" src={metakraftx} /> */}
    {/* background-image: url(../images/metakraftx.jpg); */}
            <img id="image"  style={{width:"80%",marginTop:"-200px"}} src={metakrapftx} />
            <div id='input-box' style={{justifyContent:'center',alignItems:'center',marginLeft:'-60px'}}>
            <div className="input-container">
            <img className="icon" />
            <input id="balance" style={{height:'40px',width:'85%',backgroundColor:'#9898D4',color:'white',fontSize:'20px',paddingLeft:'10px',borderRadius:'30px',marginLeft:'40px'}} readOnly value={`Your Balance :      ${balance}`}/>
            </div>
            <div >
                <button id="playbutton" onClick={handleClick} >Play Now</button><br></br>
                <button id='leaderboard'>Leaderboard</button>
            </div>
            </div>
            </main>
        </Box>
    );
    
}


