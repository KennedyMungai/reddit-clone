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
                <Input type='tel' placeholder='Search Posts' />
            </InputGroup>
        </Flex>
    )
}

export default SearchInput