import React,{useState,useEffect,useContext,createContext} from 'react'


const ChatContext = createContext();


export const ChatContextProvider =({children})=>{
    const [user,setUser] = useState();

    
    useEffect(() => {
      const userInfo = JSON.parse(localStorage.getItem('user'));
      setUser(userInfo);  
      if(!userInfo){
  
      }
    }, []);
    return(
<ChatContext.Provider value={{user,setUser}}>
    {children}
</ChatContext.Provider>
    )
}


export const ChatState = () =>{
    return useContext(ChatContext);
}
export default ChatContextProvider;