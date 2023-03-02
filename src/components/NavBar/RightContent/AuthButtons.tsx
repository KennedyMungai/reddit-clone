import { Button } from '@chakra-ui/react'
import React from 'react'

const AuthButtons = () =>
{
    return (
        <>
            <Button
                variant='outline'
                height={'2.5rem'}
                display={{ base: 'none', sm: 'flex' }}
                width={{ base: '70px', md: '110px' }}
                mr={2}
            // onClick={() => {}}
            >
                Log In
            </Button>
            <Button>Sign Up</Button>
        </>
    )
}

export default AuthButtons