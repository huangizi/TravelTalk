import {Button, Card, Divider, Message, PageHeader, Tag} from "@arco-design/web-react";
import Col from "@arco-design/web-react/es/Grid/col";
import Row from "@arco-design/web-react/es/Grid/row";
import _ from 'lodash'
import PlaygroundCard from "../../../components/PlaygroundCard";
import { Input } from '@arco-design/web-react';

import chatgpt from "../../../assets/icon/chatgpt.png"
import pic from "../../../assets/icon/magic-wand.png"
import mj from "../../../assets/icon/MJ.png"
import lekai from "../../../assets/icon/lekai.png"
import {useEffect, useState} from "react";
import {getIdeaDomain, postIdeaGeneratorStep1, postIdeaGeneratorStep2} from "../../../service/IdeaGenerator";
import {getPlaygroundCard} from "../../../service/Playground";

const InputSearch = Input.Search;


function Playground() {
    const [cardItems,setCardItems]=useState();

    useEffect(() => {
        if (!cardItems) {
            getPlaygroundCard().then((res) => {
                    setCardItems(res?.data)
                }
            );
        }
    }, cardItems)


    return (
        <Card bordered={false} className="content-card">
            <PageHeader
                title={
                    <div className="title">
                        Playground
                    </div>
                }
                subTitle={
                    <div className="text">
                        ✨ Have fun here ✨
                    </div>
                }
                //backIcon
                onBack={() => Message.info('点击了返回按钮')}
                extra={
                    <div>
                        <InputSearch
                            className="playground-search"
                            placeholder='Please input keyword'
                        />
                    </div>
                }
            >
            <Row  style={{margin:12}}>
                {
                    _.map(cardItems, (item: any) => {
                        return (
                            <Col span={8}>
                                <PlaygroundCard item={item}/>
                            </Col>
                        )
                    })
                }
            </Row>
            </PageHeader>
        </Card>
    );
}

export default Playground;
