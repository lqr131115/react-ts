import React, { FormEvent } from "react";


const BASE_URL = process.env.REACT_APP_DEV_URL

export const Login = () => {
    const login  = (params:{username:string,password:string}) => {
        fetch(`${BASE_URL}/register`,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body: JSON.stringify(params)
        }).then(async res => {
            if (res.status === 200) {
                alert`success`
            }else{
                alert`fail`
            }
        })
    }
    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault()
        const username = (event.currentTarget.elements[0] as HTMLFormElement).value
        const password = (event.currentTarget.elements[1] as HTMLFormElement).value
        login({username,password})      
    }
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="username">用户名</label>
                <input type="text" id={'username'} />
            </div>
            <div>
                <label htmlFor="password">密码</label>
                <input type="password" id={'password'} />
            </div>
            <button type={'submit'}>提交</button>
        </form>
    )
}