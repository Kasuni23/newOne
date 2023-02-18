const express = require('express');
const {protect}= require("../middleware/authMiddleware");
const router = express.Router();
const {acceschat,fetchChats,createGroupChat,removeFromGroup,renameGroup, addtoGroup} = require("../controllers/ChatController");

router.post("/",protect,acceschat);
router.get("/",protect,fetchChats);
router.post("/group",protect,createGroupChat);
router.put("/rename",protect,renameGroup);
router.put("/groupadd",protect,addtoGroup);
router.put("/groupremove",protect,removeFromGroup);
module.exports = router;