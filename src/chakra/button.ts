import { ComponentStyleConfig } from "@chakra-ui/react";


export const Button: ComponentStyleConfig = {
    baseStyle: {
        borderRadius: '4rem',
        // color: 'brand.100',
        // border: '0.05rem solid red',
        fontSize: '10pt',
        fontWeight: 700,
        _focus: {
            boxShadow: 'none'
        }
    },
    sizes: {
        sm: {
            fontSize: '8pt'
        },
        md: {
            fontSize: '10pt'
        }
    },
    variants: {
        solid: {
            color: 'white',
            bg: 'blue.500',
            _hover: {
                bg: 'blue.400'
            }
        },
        outline: {
            color: 'blue.500',
            border: '0.05rem solid',
            borderColor: 'blue.500',
        },
        oath: {
            height: '2rem',
            border: '0.05rem solid',
            borderColor: 'gray.300',
            _hover: {
                bg: 'gra'
            }
        }
    }
}