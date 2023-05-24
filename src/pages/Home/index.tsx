import React, { useState, useEffect } from "react";
import "@arco-design/web-react/dist/css/arco.css";
import {Card, Layout,Grid} from "@arco-design/web-react";
import HeadBar from "../../components/HeadBar";
import SideBar from "../../components/SideBar";
import FootBar from "../../components/FootBar";

import HomePage from "./HomePage";
import IdeaGenerator from "./IdeaGenerator";
import Playground from "./Playground";
import ChatBot from "./ChatBot";
import logo from "../../assets/nameplate.png";
const Row = Grid.Row;
const Col = Grid.Col;

const Content = Layout.Content;
const Sider = Layout.Sider;

function Home() {
    const [select, setSelect] = useState<string>('1');
    const selectScene =(data:string)=>{
        setSelect(data)
    }

    function isPc(){
        if(window.navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i)) {
            return true; // 移动端
        }else{
            return false; // PC端
        }
    }
    const controlView=isPc();

    return (
        <Layout style={{height: '100%'}}>
            {
                controlView?
                    <div className="content" style={{margin:48}}>
                        <img
                            src={logo}
                            alt="logo"
                            style={{width: '128px',margin:"auto"}}
                            onClick={()=>{
                                window.location.replace("/")
                            }}
                        />
                        <div className="header-title" >
                          EchoGPT
                        </div>
                        <div  style={{color:"lightgrey",fontSize:"large",fontWeight:600}}>
                            Please use desktop devices to get a better experience.<br/>
                            Mobile version is comming soon.
                        </div>
                    </div>
                    :<div>
                        <HeadBar />
                        <Layout>
                            <Row>
                                <Col span={4} style={{paddingLeft:10,background:"var(--color-fill-3)"}}>
                                    <SideBar selectScene={selectScene} scene={select}/>
                                </Col>
                                <Col span={20} style={{background:"var(--color-fill-3)"}} >
                                    {select==='1'?<HomePage selectScene={selectScene} />:null}
                                    {select==='2'?<ChatBot />:null}
                                </Col>
                            </Row>

                        </Layout>
                    </div>
            }
            <FootBar/>
        </Layout>
    );
}

export default Home;
