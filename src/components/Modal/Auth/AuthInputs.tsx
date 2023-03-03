import { authModalState } from '@/src/atoms/authModalAtom'
import { Flex } from '@chakra-ui/react'
import React from 'react'
import { useRecoilValue } from 'recoil'
import Login from './Login'

type Props = {}

const AuthInputs = (props: Props) =>
{
    const { view } = useRecoilValue(authModalState)

    return (
        <Flex
            direction={'column'}
            align='center'
            width={'100%'}
            mt={4}
        >
            {view === 'login' && <Login />}
            {/* {view === 'signup' && <Signup />} */}
        </Flex>
    )
}

export default AuthInputs