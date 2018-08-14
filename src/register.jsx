import React from 'react';
import {Form, Icon, Input, Button,message} from 'antd';
import axios from 'axios';
import qs from 'qs';
import './login.less';

const FormItem = Form.Item;
const FormCreate = Form.create();

@FormCreate

export default class Register extends React.Component {
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
            if (!err) {
                axios.post('/api/register',qs.stringify({name:values.userName,password:values.password})).then(res=>{
                    let db = res.data;
                    if(db.code === 200){
                        message.success(db.message);
                        setTimeout(() => {
                            this.props.history.push('/register');
                        },500);
                    }else{
                        message.error(db.message);
                    }
                });
            }
        });
    }

    login(){
        this.props.history.push('/login');
    }

    render() {
        const {getFieldDecorator} = this.props.form;
        return (<div className="bg">
            <Form onSubmit={this.handleSubmit} className="login-form">
                <FormItem>
                    {
                        getFieldDecorator('userName', {
                            rules: [
                                {
                                    // required: true,
                                    message: 'Please input your username!'
                                }
                            ]
                        })(<Input prefix={<Icon type = "user" style = {{ color: 'rgba(0,0,0,.25)' }}/>} placeholder="Username"/>)
                    }
                </FormItem>
                <FormItem>
                    {
                        getFieldDecorator('password', {
                            rules: [
                                {
                                    // required: true,
                                    message: 'Please input your Password!'
                                }
                            ]
                        })(<Input prefix={<Icon type = "lock" style = {{ color: 'rgba(0,0,0,.25)' }}/>} type="password" placeholder="Password"/>)
                    }
                </FormItem>
                <FormItem>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        register in
                    </Button>
                    <a onClick={this.login.bind(this)}>login now!</a>
                </FormItem>
            </Form>
        </div>);
    }
}
