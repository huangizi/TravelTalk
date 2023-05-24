import {Button, Card, Checkbox, Form, Input, Layout, Space} from "@arco-design/web-react";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import React, {useState} from "react";
import HeadBar from "../../components/HeadBar";
import {postSignup} from "../../service/user";

function Signup() {
    const [form] = Form.useForm();

    const handleSignup = (data:object) => {
        const res=postSignup(data)
        window.location.replace("/user-info")
    }

    return (
        <Layout style={{minHeight: '100vh',backgroundColor: "var(--color-fill-3)"}}>
            <HeadBar />
            <Card className="login-card" bordered={false}>
                <Form form={form} className="login-form" autoComplete='off'
                onSubmit={(v) => {
                    handleSignup(v)
            }}
                >
                    <FormItem label='Email' field='email'>
                        <Input placeholder='please enter email' style={{borderRadius:16}}/>
                    </FormItem>
                    <FormItem label='Password' field='password'>
                        <Input placeholder='please enter your password' style={{borderRadius:16}}/>
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }} required>
                        <Checkbox>I have read the manual</Checkbox>
                    </FormItem>
                    <FormItem wrapperCol={{ offset: 5 }}>
                        <Button htmlType="submit" shape="round" type='primary' onClick={handleSignup}>Sign Up</Button>
                    </FormItem>
                </Form>
            </Card>
            {/*<FootBar/>*/}
        </Layout>
    );
}

export default Signup;
