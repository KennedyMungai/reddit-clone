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
            <Input />
            <Input />
        </form>
    )
}

export default Login