import {Card, PageHeader, Comment, Avatar, Input, Divider, Button} from "@arco-design/web-react";
import Row from "@arco-design/web-react/es/Grid/row";
import chatgpt from "../../../assets/icon/chatgpt.png"
import user from "../../../assets/user.png"
import React, {useState} from "react";
import Col from "@arco-design/web-react/es/Grid/col";
import _ from "lodash";
import PlaygroundCard from "../../../components/PlaygroundCard";
import ChatBotCard from "../../../components/ChatBotCard";
import chatBotItem from "../../../consts/ChatBotItem";


function ChatBot() {
    const [select,setSelect]=useState(false);
    const [historyMessage, setHistoryMessage] = useState([
        {
            author: "Qi",
            avator: chatgpt,
            content: "Hello! I'm Lu Qi. Glad to meet you here."
        }
    ])

    const selectCard =(data:boolean)=>{
        setSelect(data)
    }

    return (
        <Card bordered={false} className="content-card">
            <PageHeader
                style={{background: 'var(--color-bg-2)'}}
                title={
                    <div className="title">
                        Chat Bot
                    </div>
                }
                subTitle={
                    <div className="text">
                        Enjoy chat with Bot 💬 (coming soon)
                    </div>
                }
                extra={
                    <div>
                        {
                            select?
                                <Button type="primary" shape="round" onClick={()=>{selectCard(false)}}>back</Button>:null
                        }
                    </div>

                }
            >
                {
                    select ?
                        <div className="message-container">
                            <div className="message-main">
                                {
                                    _.map(historyMessage, (item) => {
                                        return (
                                            <div className="message-left">
                                                <div className="bubble-text">
                                                    <p>{item.content}</p>
                                                </div>
                                            </div>
                                        )
                                    })
                                }
                            </div>
                            <Card bordered={false} className="chat-card" style={{width: "100%"}}>
                                <Row gutter={12}>
                                    <Col span={22}>
                                        <Input.TextArea autoSize={{minRows: 2, maxRows: 2}} className="chat-input"/>
                                    </Col>
                                    <Col span={2} style={{marginTop: 12}}>
                                        <Button htmlType="submit" shape="round" type='primary'>send</Button>
                                    </Col>
                                </Row>
                            </Card>
                        </div> :

                        <Row style={{margin: 12}}>
                            {
                                _.map(chatBotItem, (item: any) => {
                                    return (
                                        <Col span={8}>
                                            <ChatBotCard selectCard={selectCard} item={item}/>
                                        </Col>
                                    )
                                })
                            }
                        </Row>
                }
            </PageHeader>
        </Card>
    );
}

export default ChatBot;
