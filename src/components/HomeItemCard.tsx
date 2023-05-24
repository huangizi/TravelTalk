import React from "react";
import {Card, Image} from "@arco-design/web-react";


function HomeItemCard(props: any) {
    const {item,selectScene} = props;
    return (
        <Card className="playground-card" bordered={false}
              onClick={()=>{selectScene(item?.url)}}
              title={
                  <div style={{alignItems:"center"}} >
                      <Image src={item?.icon} height={24} style={{float: "left", marginLeft: "auto", marginRight: 10}}/>
                      <div className="playground-card-title" >
                          {item?.title}
                      </div>
                  </div>
              }
        >
            {item?.desc}
        </Card>
    );
}

export default HomeItemCard;
