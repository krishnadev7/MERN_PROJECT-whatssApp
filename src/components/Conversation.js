import React, { useState } from "react";
import styled from "styled-components";
import { messagesList } from "../mockData";
import { SearchContainer, SearchInput } from "./ContactList";
import Picker from "emoji-picker-react";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  flex: 3;
  background: #f6f7f8;
`;
const ProfileHeader = styled.div`
  display: flex;
  flex-direction: row;
  background: #ededed;
  padding: 10px;
  align-items: center;
  gap: 10px;
`;
const ProfileImage = styled.img`
  width: 32px;
  height: 32px;
  border-radius: 50%;
`;
const Chatbox = styled.div`
  display: flex;
  background: #f0f0f0;
  padding: 10px;
  align-items: center;
  bottom: 0;
`;
const EmojiImage = styled.img`
  width: 28px;
  height: 28px;
  opacity: 0.4;
  cursor: pointer;
`;
const MessageContainer = styled.div`
display:flex;
flex-direction: column;
height: 100%;
background: #e5ddd6;
overflow-y: auto;
`;
const MessageDiv = styled.div`
justify-content: ${(props) => (props.isYours ? "flex-end" : "flex-start")};
display:flex;
margin: 5px 15px;
`;
const Message = styled.div`
  background: ${(props) => (props.isYours ? "#daf8cb" : "white")};
  max-width: 50%;
  color: #303030;
  padding: 8px 10px;
  font-size: 14px;
`;


const Conversation = (props) => {
  const {selectedChat} = props;
  const [text, setText] = useState("");
  const [pickerVisible, togglePicker] = useState(false);
  const [messageList, setMessageList] = useState(messagesList);

  const onEmojiClick = (event, emojiObj) => {
    setText(text + emojiObj.emoji);
    togglePicker(false);
  };
  const onEnterPress = (event) => {
    if (event.key === "Enter") {
    const messages = [...messagesList];
    messages.push({
      id: 0,
      messageType: "TEXT",
      text,
      senderID: 0,
      addedOn: "12:00 PM",
    });
    setMessageList(messages);
    setText("");
    } 
  }
  return (
    <Container>
      <ProfileHeader>
        <ProfileImage src={selectedChat.profilePic} />
        {selectedChat.name}
      </ProfileHeader>
      <MessageContainer>
        {messageList.map((messageData) => (
          <MessageDiv isYours={messageData.senderID === 0}>
            <Message isYours={messageData.senderID === 0}>
              {messageData.text}
            </Message>
          </MessageDiv>
        ))}
      </MessageContainer>
      <Chatbox>
        <SearchContainer>
          {pickerVisible && (
            <Picker
              pickerStyle={{ position: "absolute", bottom: "60px" }}
              onEmojiClick={onEmojiClick}
            />
          )}

          <EmojiImage src={"profile/data.svg"}
          onClick={() => togglePicker(!pickerVisible)}
          />
          <SearchInput
            placeholder="Type a message"
            value={text}
            onKeyDown={onEnterPress}
            onChange={(e) => setText(e.target.value)}
          />
        </SearchContainer>
      </Chatbox>
    </Container>
  );
}

export default Conversation;
