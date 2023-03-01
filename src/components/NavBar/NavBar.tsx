import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const NavBar = (props: Props) =>
{
    return (
        <Flex
            bg={'white'}
            height='5rem'
            padding='2rem 4rem'
        >
            <Flex>
                <Image src='images/redditFace.svg' alt='Reddit Logo' />
                <Image src='images/redditText.svg' alt='Reddit Text' />
            </Flex>
        </Flex>
    )
}

export default NavBar