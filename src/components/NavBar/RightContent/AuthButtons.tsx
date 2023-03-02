import { authModalState } from '@/src/atoms/authModalAtom'
import { Button } from '@chakra-ui/react'
import React from 'react'
import { useSetRecoilState } from 'recoil'

const AuthButtons = () =>
{
    const setAuthModalState = useSetRecoilState(authModalState)

    return (
        <>
            <Button
                variant='outline'
                height={'3rem'}
                display={{ base: 'none', sm: 'flex' }}
                width={{ base: '70px', md: '110px' }}
                mr={2}
                onClick={() =>
                {
                    setAuthModalState({ open: true, view: 'login' })
                }}
            >
                Log In
            </Button>
            <Button
                height={'3rem'}
                display={{ base: 'none', sm: 'flex' }}
                width={{ base: '70px', md: '110px' }}
                mr={2}
                onClick={() => { }}
            >
                Sign Up
            </Button>
        </>
    )
}

export default AuthButtons