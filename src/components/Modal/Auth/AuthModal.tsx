import { authModalState } from '@/src/atoms/authModalAtom'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/react'
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
                    <ModalHeader>{modalState.view}</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Here is the modal body
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthModal