import {Button, Card, Checkbox, Form, Input, Layout} from "@arco-design/web-react";
import HeadBar from "../../components/HeadBar";
import FormItem from "@arco-design/web-react/es/Form/form-item";
import React from "react";
import FootBar from "../../components/FootBar";

export function UserInfo() {
    const [form] = Form.useForm();

    const handleBack = (data:object) => {
        window.location.replace("/")
    }

    return (
        <Layout style={{minHeight: '100vh',backgroundColor: "var(--color-fill-3)"}}>
            <HeadBar/>
                <div className="login-card">
                    <div className="user-info">
                        🎉🎉🎉 Congratulations! <br /><br />
                        You are already on the waiting list, please wait for email notification<br/><br/>

                        <Button style={{marginTop:12}}  shape="round" type='primary' onClick={handleBack}>back</Button>
                    </div>
                </div>
            <FootBar/>
        </Layout>
    );
}
export default UserInfo;
