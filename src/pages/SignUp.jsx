import React from 'react'
import 'antd/dist/antd.css';
import {Form, Input, Button} from "antd"; 
 


export default function  SignUp() {

    return (
      <div className="SignUp">
        <header className = "SignUp-header">
            <Form >
                <Form.Item name="FullName" label= "Full Name:" 
                rules={[
                    {
                        required : true, 
                        message: 'Please enter your name!'
                    },
                    { whitespace : true },
                    {min : 3}
                     ]}>
                    <Input placeholder="Type your name" />
                    </Form.Item>

                <Form.Item  name="Email" label= "Email ID:"
                rules={[
                    {
                        required : true, 
                        message: 'Please enter your email!'
                    },
                    { type : 'email', message: "Please enter a valid email ID" }
                     ]}>
                    <Input placeholder="Type your email" />
                </Form.Item>

                <Form.Item name="Password" label= "Password:"
                rules={[
                    {
                        required : true, 
                        message: 'Required*'
                    },
                    {min: 8},
                    {
                        validator: (_, value) =>
                        value && value.includes(validPassword) ? Promise.resolve() : Promise.reject("Please enter a strong password")

                    }
                     ]}
                     >
                    <Input.Password placeholder="Type your password" />
                </Form.Item>

                <Form.Item name="ConfPassword" label= "Confirm Password:"
                dependencies= {["Password"]}
                rules={[
                    {
                        required : true, 
                        message: 'Required*'
                    },
                    ({getFieldValue})=> ({
                        validator(_, value){
                            if(!value || getFieldValue('Password')== value){
                                return Promise.resolve()
                            }
                            return Promise.reject( "Passwords do not match");
                        },
                      }),
                
                     ]}> 


                    
                    <Input.Password placeholder="Re-enter your password" />
                </Form.Item>

                <Form.Item>
                 <Button  type= "primary"  htmlType="submit"  shape="round">    Sign Up     </Button>
                </Form.Item>

            </Form>
        </header>
      </div>
    )
  }


