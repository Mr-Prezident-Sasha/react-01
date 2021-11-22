import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder={'login'} name={'login'} component={'input'} />
            </div>
            <div>
                <Field placeholder={'password'} name={'password'} component={'input'} />
            </div>
            <div>
                <Field type={'checkbox'} name={'rememberMe'} component={'input'} />remember me
            </div>
            <div>
                <button>LOGIN</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (dataForm) => {
        console.log(dataForm)
    }
    return (
        <div>
            <h1>LOGIN</h1>
            <LoginReduxForm onSubmit={onSubmit} />
        </div>
    )
}

export default Login