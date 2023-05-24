import {Button, Card, Checkbox, Form, Input, Layout, Message} from "@arco-design/web-react";
import HeadBar from "../../components/HeadBar";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import React, {useState} from "react";
import {postLogin} from "../../service/user";

function Login() {

    const [form] = Form.useForm();
    const [back,setBack]=useState(false);

    const handleLogin = (data:object) => {
        //const res=postLogin(data)
        setBack(true)
        Message.info("Sorry, we are still coordinating the number of internal testers. Please wait for email notification")
    }

    return (
        <Layout style={{minHeight: '100vh',backgroundColor: "var(--color-fill-3)"}}>
            <HeadBar />
            <Card className="login-card" bordered={false}>
                <Form form={form} className="login-form" autoComplete='off'
                      onSubmit={(v) => {
                          handleLogin(v)
                      }}
                >
                    <FormItem label='Email' field='email'>
                        <Input placeholder='please enter email' style={{borderRadius:16}}/>
                    </FormItem>
                    <FormItem label='Password' field='password'>
                        <Input placeholder='please enter your password' style={{borderRadius:16}}/>
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }}>
                        <Button style={{marginTop:12}} htmlType="submit" shape="round" type='primary'>Login</Button>
                        {
                            back?
                                <Button style={{marginTop:12,marginLeft:12}} onClick={()=>{window.location.replace("/")}} shape="round" >Back</Button>:null
                        }
                    </FormItem>
                </Form>
            </Card>
            {/*<FootBar/>*/}
        </Layout>
    );
}


export default Login;
