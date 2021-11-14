import React from "react";
import {Form, Field} from 'react-final-form';
import {Redirect} from "react-router-dom";

const LoginForm = (props) => {
    const required = (value) => (value ? undefined : "Required");
    const onSubmit = (values) => {
            props.logIn(values);
        }

    if (props.isAuth) {
        return <Redirect to="/profile"/>
    }
        return (
            <Form
                onSubmit={onSubmit}
                render={({handleSubmit, form}) => (
                    <form onSubmit={handleSubmit} id="loginForm"                 onChange={() => props.setAuthError([])}
                    >
                        <Field name={"email"} validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="text" placeholder="Enter your login..."/>
                                    {(meta.error || meta.submitError) && meta.touched && <div style={{color: 'red'}}>{meta.error}</div>}
                                </div>
                            )}
                        </Field>
                        <Field name="password" placeholder={"password"} validate={required}>
                            {({input, meta}) => (
                                <div>
                                    <input {...input} type="text" placeholder="Password..."/>
                                    {(meta.error || meta.submitError) && meta.touched && <div style={{color: 'red'}}>{meta.error}</div>}
                                </div>
                            )}
                        </Field>
                        <div>
                            Remember me
                            <Field name="rememberMe" component="input" label={"rememberMe"} type={"checkbox"}/>
                        </div>
                        <div>
                            Captcha
                            <Field name="captcha" component="input" label={"rememberMe"} type={"checkbox"}/>
                        </div>
                        {props.validationError.length > 0 && <div style={{color: 'red'}}>{props.validationError[0]}</div>}
                        <button type="submit">Submit</button>
                    </form>
                )}
            />
        )

}


export default LoginForm;

