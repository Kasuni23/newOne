
import {ChatState} from "../../../context/ChatProvider"
import SideDrawer from "./miscellenous/SideDrawer";
import Sidebar from "../Sidebar"
import MyChat  from "./Mychat";
import ChatBox from "./Chatbox";
import { Box } from "@chakra-ui/layout";

const ChatPage = () =>{
  const {user}=  ChatState();

    return(
        
        <>
            <Sidebar>
                <div style={{width:"100%"}}>
            {user && <SideDrawer/>}
            <Box
            display="flex"
            justifyContent="space-between"
            width='790%'
            height="91.5vh"
            padding="10px"
            
            >
                {user && <MyChat/>}
                {user && <ChatBox/>}
            </Box>
            </div>
            </Sidebar>
        </>
        
    )
}

export default ChatPage;