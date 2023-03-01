import { Flex, Image } from '@chakra-ui/react'
import React from 'react'

type Props = {}

const NavBar = (props: Props) =>
{
    return (
        <Flex
            bg={'white'}
            height='5rem'
            padding='1rem 4rem'
        >
            <Flex align={'center'}>
                <Image src='images/redditFace.svg' alt='Reddit Logo' height={'3rem'} />
                <Image
                    src='images/redditText.svg'
                    alt='Reddit Text'
                    height={'4rem'}
                    display={{ base: 'none', md: 'unset' }} />
            </Flex>
            {/* <Directory />
            <SearchInput />
            <RightContent /> */}
        </Flex>
    )
}

export default NavBar