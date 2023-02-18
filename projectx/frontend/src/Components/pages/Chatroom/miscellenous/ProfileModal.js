import { IconButton ,Button} from '@chakra-ui/button'
import {useDisclosure} from '@chakra-ui/hooks'
import { ViewIcon } from '@chakra-ui/icons'
import React from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Image,
    Text,
    
  } from '@chakra-ui/react'

const ProfileModal = ({user , children}) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
   
      {
      children ? (<span onClick={onOpen}>{children}</span>):(
        <IconButton 
            d={{base:"flex"}}
            icon={<ViewIcon/>}
            onClick={onOpen}
        />
      )
    } 

<Modal size="lg" isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent h="410px">
          <ModalHeader fontSize="40px" fontfamily="Work Sans" d="flex" justifyContent="center">
            {user.firstname}
          </ModalHeader>
          <ModalCloseButton />
          <ModalBody 
          d="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="space-between"
          >
           <Image
           borderRadius="full"
           boxSize="150px"
           src={user.pic}
           alt={user.name}
           cursor="pointer"
           />
           <Text 
           fontSize={{base: "28px",md: "30px"}}
           fontFamily="Work Sans"
           >
            Email:{user.email }

           </Text>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
            
          </ModalFooter>
        </ModalContent>
      </Modal> 
    </>
  )
}

export default ProfileModal
