import React, {useEffect, useState} from "react";
import {Layout, Menu, Message,Image} from "@arco-design/web-react";
import {IconCaretLeft, IconCaretRight} from "@arco-design/web-react/icon";
import house_blue from "../assets/icon/house-2.png"
import home_grey from "../assets/icon/home-2.png"
import house_black from "../assets/icon/house.png"
import horse_grey from "../assets/icon/horse.png"
import horse_black from "../assets/icon/horse-3.png"
import horse_blue from "../assets/icon/horse-2.png"
import idea_black from "../assets/icon/idea.png"
import idea_grey from "../assets/icon/idea-3.png"
import idea_blue from "../assets/icon/idea-2.png"
import chatbot_black from "../assets/icon/chatbot.png"
import chatbot_blue from "../assets/icon/chatbot-2.png"

const Sider = Layout.Sider;
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;


function SideBar(props:any) {
    const {selectScene,scene}=props
    const [select, setSelect] = useState('1');
    const [collapsed, setCollapsed] = useState(false);

    useEffect(()=>{
        if(scene!==select){
            setSelect(scene)
        }
    },scene)

    return (
        <Menu
            //hasCollapseButton
            className="menu"
            selectedKeys={[select]}
            onClickMenuItem={(key) =>{
                setSelect(key)
                selectScene(key)
            }
            }
            onCollapseChange={() => {
                setCollapsed(!collapsed)
            }}
        >
            <MenuItem key='1'>
                <Image src={select === '1' ? house_blue : house_black} width={20}/>
                {
                    collapsed ? null :
                        <div>
                            Home
                        </div>
                }
            </MenuItem>
            <MenuItem key='2'>
                <Image src={select === '2' ? chatbot_blue : chatbot_black} width={20}/>
                {
                    collapsed ? null :
                        <div>
                            Chat Bot
                        </div>
                }
            </MenuItem>
        </Menu>
    );
}

export default SideBar;
