import React, { useState, useEffect } from 'react';
import './Chatbot';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import {
    MainContainer,
    ChatContainer,
    MessageList,
    Message,
    MessageInput,
    TypingIndicator
} from "@chatscope/chat-ui-kit-react"
const API_KEY = "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"

function Chatbot() {
    const [typing, setTyping] = useState(false);
    const [messages, setMessages] = useState([
        {
            message: 'hello, I am Chatbot!',
            sender: 'ChatGPT'
        }
    ]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setTyping(false);
        }, 2000); // Set the duration of the typewriter effect (2 seconds in this case)
        return () => clearTimeout(timer);
    }, [typing]);

    const handleSend = async (message) => {
        const newMessage = {
            message: message,
            sender: 'user',
            direction: "outgoing"
        }
        const newMessages = [...messages, newMessage];
        //update our msg state
        setMessages(newMessages);
        //set typing indicator
        setTyping(true);
        //process message to chatgpt
        await processMessageToChatGPT(newMessages);
    }

    async function processMessageToChatGPT(chatMessages) {
        //chatMessages{sender:"user" o}

        let apiMessages = chatMessages.map((messageObject) => {
            let role = "";
            if (messageObject.send === "ChatGPT") {
                role = "assistant"
            }
            else {
                role = 'user'
            }
            return { role: role, content: messageObject.message }
        });

        const systemMessage = {
            role: 'system',
            content: 'Explain in as simple as possible in short'
        }

        const apiRequestBody = {
            "model": "gpt-3.5-turbo",
            "messages": [
                systemMessage,
                ...apiMessages
            ]
        }
        await fetch("https://api.openai.com/v1/chat/completions", {
            method: 'POST',
            headers: {
                "Authorization": "Bearer " + API_KEY,
                "Content-Type": 'application/json'
            },
            body: JSON.stringify(apiRequestBody)
        }).then((data) => {
            return data.json();
        }).then((data) => {
            console.log(data);
            console.log(data.choices[0].message.content);
            setMessages(
                [...chatMessages, {
                    message: data.choices[0].message.content,
                    sender: 'ChatGPT'
                }]
            );
        });
    }

    return (
        <div className='App'
            style={{
                backgroundImage: 'url("data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAASwAAACoCAMAAABt9SM9AAAAA1BMVEWJ0PB1GyrWAAAAR0lEQVR4nO3BAQEAAACCIP+vbkhAAQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAO8GxYgAAb0jQ/cAAAAASUVORK5CYII=")',  // Set your background image URL here
                backgroundSize: 'cover',  // Adjust the background size as needed
                backgroundPosition: 'center',
                padding: '20px',  // Add some padding
                display: 'flex',  // Use flexbox for layout
                justifyContent: 'flex-start',  // Align items at the start of the flex container
                alignItems: 'flex-start',  // Align items at the start of the flex container
            }}>
            <div>
                <h1 style={{ color: "black", fontFamily: "YourFontStyle", fontSize: "50px", fontWeight: "bold" }}>ChatBot</h1>
                <p>Ask your queries without hesitation</p>
            </div>
            <div style={{
                position: "relative",
                marginLeft: '250px',  // Adjust the margin as needed
                marginTop: '10px',
                width: '700px',
                height: "650px"  // Adjust the width as needed
            }}>
                <MainContainer>
                    <ChatContainer>
                        <MessageList
                            scrollBehavior='smooth'
                            typingIndicator={typing ? <TypingIndicator content="Chatbot is typing" /> : null}
                        >
                            {messages.map((message, i) => {
                                return <Message key={i} model={message} />
                            })}
                        </MessageList>
                        <MessageInput placeholder='Type message here' onSend={handleSend} />
                    </ChatContainer>
                </MainContainer>
            </div>
        </div>
    )
}

export default Chatbot;
