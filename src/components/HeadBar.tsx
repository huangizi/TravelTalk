import {Avatar, Tag} from "@arco-design/web-react";
import Button from "@arco-design/web-react/es/Button";
import React, {useState} from "react";
import logo from "../assets/nameplate.png"
import "../index.css"
import {IconUser} from "@arco-design/web-react/icon";
import useUserInfo from "../hooks/useUserInfo";


function HeadBar() {
    //const user=useUserInfo();
    const user={userId:undefined};
    const [navColour, updateNavbar] = useState(false);

    function scrollHandler() {
        if (window.scrollY >= 20) {
            updateNavbar(true);
        } else {
            updateNavbar(false);
        }
    }
    window.addEventListener("scroll", scrollHandler);

    return (
        <div className="header">
            <img
                src={logo}
                alt="logo"
                style={{width: '64px'}}
                onClick={()=>{
                    window.location.replace("/")
                }}
            />
            <div className="header-title">
                EchoGPT
            </div>
            <Tag color="white" style={{color:"rgb(180,22,22)",fontSize:"large",fontWeight:"bolder",borderRadius:12}}>
                beta
            </Tag>
            <div className="header-info">
                {
                    user && user?.userId ? <Avatar style={{backgroundColor: '#5B9CFB', width: 36, height: 36}}>
                            <IconUser/>
                        </Avatar> :
                        <>
                            <Button style={{fontWeight: 700}} shape='round' onClick={() => {
                                window.location.replace("/log-in")
                            }}>Log In</Button>
                            <Button type="primary" shape='round' onClick={() => {
                                window.location.replace("/sign-up")
                            }}>Sign Up</Button>
                        </>
                }
            </div>

        </div>
    );
}

export default HeadBar;
