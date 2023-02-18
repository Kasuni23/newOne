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
import { Avatar } from '@chakra-ui/react';
import {ChatState} from "../../../../context/ChatProvider";
import ProfileModal from './ProfileModal';

const SideDrawer = () => {
  const [serach,setSerach] = useState("");
  const[searchResult,setSerachResult] = useState("");
  const[loading, setloading] = useState("");
  const[loadingChat, setloadingChat] = useState("");

  


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
          <Tooltip label="serach Users tp chat " hasArrow placement="bottom-end">
          <Button variant="ghost">
          <i className="fa-solid fa-magnifying-glass"></i>
          <Text d={{base:"none",md:"flex"}}>Serch user</Text>
          </Button>
          </Tooltip>
          <div>
            <Menu>
              <MenuButton p={1}>
              <BellIcon fontSize="2*l" m={1}/>
              </MenuButton>
            </Menu>
            
          </div>
      </Box>
    </div>
  )
}

export default SideDrawer
