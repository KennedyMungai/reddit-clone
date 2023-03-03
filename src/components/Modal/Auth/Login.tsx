import { Button, Input } from '@chakra-ui/react'
import React, { useState } from 'react'

type Props = {}

const Login = (props: Props) =>
{
    const [loginForm, setLoginForm] = useState(
        {
            email: '',
            password: ''
        }
    )

    const submitHandler = (e) =>
    {
        e.preventDefault()
    }

    return (
        <form onSubmit={submitHandler}>
            <Input
                name='email'
                placeholder='email'
                type={'email'}
                my={1}
                onChange={() => { }}
            />
            <Input
                name='password'
                placeholder='password'
                type={'password'}
                my={1}
                onChange={() => { }}
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