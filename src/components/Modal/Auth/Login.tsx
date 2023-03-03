import { Input } from '@chakra-ui/react'
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

    return (
        <form>
            <Input name='email' placeholder='email' type={'email'} my={1} />
            <Input name='password' placeholder='password' type={'password'} my={1} />
        </form>
    )
}

export default Login