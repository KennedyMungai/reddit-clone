import { authModalState } from '@/src/atoms/authModalAtom'
import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { useRecoilState } from 'recoil'

const AuthModal = () =>
{
    const [modalState, setModalState] = useRecoilState(authModalState)

    return (
        <>
            <Button onClick={onOpen}>Open Modal</Button>
            <Modal
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Modal Title</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        Here is the modal body
                    </ModalBody>

                    <ModalFooter>
                        <Button
                            colorScheme={'blue'}
                            mr={3}
                            onClick={onClose}
                        >
                            Close
                        </Button>
                        <Button
                            variant={'ghost'}
                        >
                            Secondary Action
                        </Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    )
}

export default AuthModal