import {
    Button,
    Card,
    Form,
    Input, List, Message,
    PageHeader,
    Select,
    Steps,
    Tag, Upload,
} from "@arco-design/web-react";
import {useEffect, useState} from "react";
import {IconLeft, IconRight} from "@arco-design/web-react/icon";
import {getIdeaDomain, postIdeaGeneratorStep1, postIdeaGeneratorStep2} from "../../../service/IdeaGenerator";
import _ from "lodash";

const TextArea = Input.TextArea;


function IdeaGenerator() {

    const Step = Steps.Step;

    const [currentStep, setCurrentStep] = useState(1);
    const [resume,setResume]=useState("");
    const [domain, setDomain] = useState("");
    const [domainOptions,setDomainOptions]=useState([]);
    const [passion, setPassion] = useState("");

    const [ideaOptions,setIdeaOptions]=useState([])
    const [idea,setIdea]=useState("")

    const [analyse,setAnalyse]=useState("")

    useEffect(()=>{
        if(currentStep===1){
            getIdeaDomain().then((res)=>{
                setDomainOptions(res?.data)}
            );
        }
        if(currentStep===4){
            const params={
                resume:resume,
                domain:domain,
                passion:passion
            }
            postIdeaGeneratorStep1(params).then((res)=>{
                setIdeaOptions(res?.data)}
            )
        }
        else if(currentStep===5){
            const params={
                resume:resume,
                domain:domain,
                passion:passion,
                idea:idea
            }
            postIdeaGeneratorStep2(params).then((res)=>{
                console.log('res',res)
                setAnalyse(res?.data)})
        }
    },[currentStep])

    return (
            <Card bordered={false} className="content-card">
                                <PageHeader
                    style={{background: 'var(--color-bg-2)'}}
                    title={
                        <div className="title">
                            Idea Generator
                        </div>
                    }
                    subTitle={
                        <div className="text">
                            The first step to success 🚶
                            <Tag color='purple' style={{margin: 8}}>
                                brainstorm
                            </Tag>
                            <Tag color='blue' style={{margin: 8}}>
                                idea
                            </Tag>
                        </div>
                    }
                    extra={
                        <div>

                        </div>
                    }
                    footer={
                        <div className="step-btn">
                            <Button
                                type='secondary'
                                shape='round'
                                disabled={currentStep <= 1}
                                onClick={() => setCurrentStep(currentStep - 1)}
                                style={{ paddingLeft: 8,fontWeight:700 ,marginRight:24}}
                            >
                                <IconLeft />
                                Back
                            </Button>
                            <Button
                                disabled={currentStep >= 5}
                                shape='round'
                                onClick={() => setCurrentStep(currentStep + 1)}
                                style={{ paddingRight: 8 }}
                                type='primary'
                            >
                                Next
                                <IconRight />
                            </Button>
                        </div>
                    }
                >
                    <div className="step-card">
                        <Steps
                            type='navigation'
                            current={currentStep}
                            onChange={setCurrentStep}
                            style={{ width:"100%", marginBottom: 60 }}
                        >
                            <Step title='关键词' />
                            <Step title='主题' />
                            <Step title='作者' />
                            <Step title='文献' />
                            <Step title='分析' />
                        </Steps>

                        {
                            currentStep===1?
                                <div style={{fontWeight: "bold", fontSize: "large"}}>
                                    Please enter the search term<br/><br/>
                                    <TextArea placeholder='Please enter ...'
                                              style={{ borderRadius:24,minHeight: "10vh", width: "100%" ,marginTop:12}}
                                              value={resume}
                                              onChange={(value)=>{setResume(value)}}
                                    />
                                </div>
                                :null
                        }
                        {
                            currentStep === 2 ?
                                domainOptions?.length === 0 ?
                                    <div style={{fontWeight: "bold", fontSize: "large"}}>
                                        Getting domains...<br/><br/>
                                        <div style={{fontWeight: "normal", fontSize: "initial"}}>
                                            This may take a few several seconds, please wait 😊 <br/><br/>
                                        </div>
                                    </div> :
                                    <div style={{fontWeight: "bold", fontSize: "large"}}>
                                        Your selected domain is<br/><br/>
                                        <Select
                                            showSearch
                                            style={{fontWeight: "normal", fontSize: "large"}}
                                    options={_.map(domainOptions,(item:any)=>{return item?.name})}
                                    value={domain}
                                    onChange={(value) => {setDomain(value)}}
                                    placeholder="Please select..."
                                /></div> : null
                        }
                        {
                            currentStep===3?
                                <div style={{width: "100%",fontWeight:"bold",fontSize:"large"}}>
                                    Please enter the author of the search<br /><br />
                                    <TextArea placeholder='Please enter ...'
                                              style={{ minHeight: "12vh", width: "100%",borderRadius:24 }}
                                              value={passion}
                                              onChange={(value)=>{setPassion(value)}}
                                    />
                                </div> : null
                        }
                        {
                            currentStep === 4 ?
                        
                                    <div style={{fontWeight:"bold",fontSize:"large"}}>
                                        Search literature...<br/><br/>
                                        <div style={{fontWeight: "normal", fontSize: "initial"}}>
                                            This may take a few several seconds, please wait 😊 <br/><br/>
                                        </div>
                                    </div> : null
                                    
                        }
                        {
                            currentStep === 5 ?
                                    <div style={{fontWeight:"bold",fontSize:"large"}}>
                                        Analyzing...<br/><br/>
                                        <div style={{fontWeight: "normal", fontSize: "initial"}}>
                                            This may take a few seconds, please wait 😊 <br/><br/>
                                        </div>
                                    </div> : null
                        }
                    </div>
                </PageHeader>
            </Card>
    );
}

export default IdeaGenerator;
