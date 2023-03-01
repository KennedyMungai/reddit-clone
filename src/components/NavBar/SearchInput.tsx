import { SearchIcon } from '@chakra-ui/icons'
import { Flex, Input, InputGroup, InputLeftElement } from '@chakra-ui/react'

type Props = {

}

const SearchInput = () =>
{
    return (
        <Flex>
            <InputGroup>
                <InputLeftElement
                    pointerEvents='none'
                    children={<SearchIcon color='gray.300' />}
                />
                <Input
                    type='text'
                    placeholder='Search Reddit'
                    _placeholder={{ color: 'gray.500' }}
                    _hover={
                        {
                            bg: 'white',
                            border: '0.01rem solid'
                        }
                    }
                    _focus={
                        {
                            outline: 'none',
                            border: '0.01rem solid'
                        }
                    }

                    height='3rem'
                    bg={'gray.50'}
                />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput