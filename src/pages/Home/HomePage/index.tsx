import {Card, PageHeader, Tag,Image} from "@arco-design/web-react";
import Row from "@arco-design/web-react/es/Grid/row";
import _ from "lodash";
import Col from "@arco-design/web-react/es/Grid/col";
import homeItem from "../../../consts/homeItem";
import HomeItemCard from "../../../components/HomeItemCard";
import discord from "../../../assets/icon/discord.png"

function HomePage(props:any) {
    const {selectScene}=props;

    return (
        <Card bordered={false} className="content-card">
            <PageHeader
                style={{background: 'var(--color-bg-2)'}}
                title={
                    <div className="title">
                        Start with EchoChatGPT!
                    </div>
                }
                subTitle={
                    <div className="text">
                    </div>
                }
                extra={
                    <div onClick={()=>{window.open("https://discord.gg/KVkZFmZH")}}>
                        <Image src={discord} width={32} style={{cursor:"pointer"}}/>
                        <Tag color='purple' style={{margin: 10,cursor:"pointer"}} >
                            Join our Discord group
                        </Tag>
                    </div>
                }
            >
                <Row  style={{margin:12}}>
                    {
                        _.map(homeItem, (item: any) => {
                            return (
                                <Col span={8} >
                                    <HomeItemCard selectScene={selectScene} item={item}/>
                                </Col>
                            )
                        })
                    }
                </Row>
            </PageHeader>
        </Card>
    );
}

export default HomePage;
