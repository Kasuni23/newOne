import React,{useState} from 'react'
import { Button } from "@chakra-ui/button";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BellIcon, ChevronDownIcon } from "@chakra-ui/icons";
import {
  Menu,
  MenuButton,
  MenuDivider,
  MenuItem,
  MenuList,
} from "@chakra-ui/menu";
import { Box,Text } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { Avatar, Drawer, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react';
import {ChatState} from "../../../../context/ChatProvider";
import ProfileModal from './ProfileModal';
import {useNavigate} from "react-router-dom";
import {useDisclosure} from "@chakra-ui/hooks"

const SideDrawer = () => {
  const [serach,setSerach] = useState("");
  const[searchResult,setSerachResult] = useState("");
  const[loading, setloading] = useState("");
  const[loadingChat, setloadingChat] = useState("");

  const {user} =ChatState();
  const history = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure()

  const logoutHandler = () => {
    localStorage.removeItem("user");
    history.push("/");
  };


  return (
    <div>
      <Box
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      bg="white"
      w="790%"
      p="5px 10px 5px 10px"
      borderWidth="5px">
          <Tooltip label="serach Users t0 chat " hasArrow placement="bottom-end">
          <Button variant="ghost" onClick={onOpen}>
          <i className="fa-solid fa-magnifying-glass"></i>
          <Text d={{base:"none",md:"flex"}} px={4}>Serch user</Text>
          </Button>
          </Tooltip>
          <div>
            <Menu>
              <MenuButton p={1}>
              <BellIcon fontSize="2*l" m={1}/>
              </MenuButton>
            </Menu>
            <Menu>
              <MenuButton as={Button} rightIcon={<ChevronDownIcon/>}>
              <Avatar size='sm' cursor='pointer' name={user.firstname} src={user.pic}/>
              </MenuButton>
              <MenuList>
                <ProfileModal user={user}>
                <MenuItem>My Profile</MenuItem>
                </ProfileModal>
                
                <MenuDivider/>
                <MenuItem onClick={logoutHandler}>Logout</MenuItem>
              </MenuList>
            </Menu>
          </div>
      </Box>
      <Drawer placement='left' onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay/>
          <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Search Users</DrawerHeader>
          </DrawerContent>
      </Drawer>
    </div>
  )
}

export default SideDrawer

