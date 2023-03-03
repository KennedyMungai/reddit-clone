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
                required
                _placeholder={
                    {
                        color: 'gray.500'
                    }
                }
                _hover={
                    {
                        bg: 'white',
                        border: '0.01rem solid',
                        borderColor: 'blue.500'
                    }
                }
            />
            <Input
                name='password'
                placeholder='password'
                type={'password'}
                my={1}
                onChange={changeHandler}
                required
                _placeholder={
                    {
                        color: 'gray.500'
                    }
                }
                _hover={
                    {
                        bg: 'white',
                        border: '0.01rem solid',
                        borderColor: 'blue.500'
                    }
                }
            />
            <Button
                variant={'solid'}
                my={1}
                type='submit'
                width={'100%'}
                height='3rem'
                marginY={2}
            >
                Log In
            </Button>
        </form>
    )
}

export default Login