import { authModalState } from '@/src/atoms/authModalAtom'
import { Button, Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
import { useRecoilState } from 'recoil'

const AuthModal = () =>
{
    const [modalState, setModalState] = useRecoilState(authModalState)

    const handleClose = () => 
    {
        setModalState((prev) => (
            {
                ...prev,
                open: false
            }
        ))
    }

    return (
        <>
            <Modal
                isOpen={modalState.open}
                onClose={handleClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>
                        {modalState.view === 'login' && 'Login'}
                        {modalState.view === 'signup' && 'Sign Up'}
                        {modalState.view === 'resetPassword' && 'Reset Password'}
                    </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody
                        display={'flex'}
                        flexDirection='column'
                        alignItems='center'
                        justifyContent={'center'}
                    >
                        <Flex>

                        </Flex>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthModal