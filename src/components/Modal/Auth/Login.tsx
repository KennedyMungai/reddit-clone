import { Button, Input } from '@chakra-ui/react'
import React, { ChangeEvent, FormEvent, useState } from 'react'

type Props = {}

const Login = (props: Props) =>
{
    const [loginForm, setLoginForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const submitHandler = (e: FormEvent<HTMLFormElement>) =>
    {
        e.preventDefault()
    }

    const changeHandler = (e: ChangeEvent<HTMLInputElement>) => 
    {
        setLoginForm(prev => (
            {
                ...prev,
                [e.target.name]: e?.target.value
            }
        ))
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                name='email'
                placeholder='email'
                type={'email'}
                my={1}
                onChange={changeHandler}
            />
            <Input
                name='password'
                placeholder='password'
                type={'password'}
                my={1}
                onChange={changeHandler}
            />
            <Button
                variant={'solid'}
                my={1}
                type='submit'
            >
                Log In
            </Button>
        </form>
    )
}

export default Login