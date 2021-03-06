import { useState } from "react";
import styled from "styled-components";
import ContactList from "./components/ContactList";
import Conversation from "./components/Conversation";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  height: 100vh;
  width: 100%;
  background: #f8f9fb;
`;
const Placeholder = styled.div`
  display: flex;
  flex: 3;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  font-size: 14px;
  color: rgba(0,0,0,0.45);
  gap: 10px;

  span {
    font-size: 32px;
    color: #525252;
  }
`;
const ChatPlaceholder = styled.img`
width: 240px;
height: 240px;
border-radius: 50%;
object-fit: contain;
`;

function App() {
  const [selectedChat, setChat] = useState();
  return (
    <Container>
      <ContactList setChat={setChat} />
      {selectedChat ? (
        <Conversation selectedChat={selectedChat} />
      ) : (
        <Placeholder>
          <ChatPlaceholder src="welcome-placeholder.jpeg" />
          <span>Keep your phone connected</span>
          WhatsApp connects to your phone to sync messages.
        </Placeholder>
      )}
    </Container>
  );
}

export default App;
