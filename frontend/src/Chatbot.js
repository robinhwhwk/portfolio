import React, { useState, useRef, useEffect } from 'react';
import { FaRedo } from 'react-icons/fa';
import EmailForm from './EmailForm';

// Define the knowledge base
const knowledge = {
    "start": {
      id: "start",
      prompts: ["What can I help you with today?",],
      options: [
        {command:"Tell me about yourself.", nextId: "intro"}, 
        {command:"Any hobbies?", nextId: "hobby"}, 
        {command:"Send a message", nextId: "message"}],
    },
    "intro": {
      id: "intro",
      prompts: ["I'm Robin. I'm a student at Georgia Tech studying computer science.", "I like building fun things in my free time."],
      options: [
        {command:"Any hobbies?", nextId: "hobby"}, 
        {command:"Send a message", nextId: "message"}],
    }, 
    "hobby": {
      id: 'hobby',
      prompts: ["Outside of work, I enjoy reading, spending time with family, and playing basketball.",],
      options: [
        {command:"Tell me about yourself.", nextId: "intro"}, 
        {command:"Send a message", nextId: "message"}],
    },
    "message": {
      id: "message",
      prompts: ["Great! Just type your message below.", "I will be notified when it's sent."],
      options: [
        {command:"Tell me about yourself.", nextId: "intro"}, 
        {command:"Any hobbies?", nextId: "hobby"}, ]
    }
    // Add more conversational flows here
  };

let conversationList = [];
conversationList.push({...knowledge["start"]})

const Chatbot = () => {
  const [currentConversation, setCurrentConversation] = useState(knowledge["start"]);
  const chatbox = useRef(null);
  useEffect(() => chatbox.current.scrollIntoView(false), [currentConversation]);
  // const scrollToBottom = () => {
  //   chatbox.current?.scrollIntoView({ behavior: "smooth", block: "end"})
  // }
  
  const handleChat = (option) => {

    conversationList[conversationList.length - 1].options = [option]
    conversationList.push({prompts:["thinking..."], options:[]});
    setCurrentConversation({prompts:["thinking..."], options:[]});
    
    
    setTimeout(() => {
      // display "thinking..." message for a bit
      conversationList.pop();
      // Update the conversation state based on the selected option
      setCurrentConversation(knowledge[option.nextId]); // Assuming options match knowledge keys
      // current render of conversation:
      // prompt 1, chosen option 1
      // prompt 2, chosen option 2, ...
      // prompt n, options for n 
      const clone = {...knowledge[option.nextId]};
      conversationList.push(clone);
    }, 800)
  };

  const handleRestart = () => {
    setCurrentConversation(knowledge["start"]);
    conversationList = [{...knowledge["start"]}];
  }

  const ChatInput = (props) => {
    if (props.index === conversationList.length - 1) {
      if (props.conversation.id == "message") {
        return (
          <EmailForm></EmailForm>
        )
      }
      return (
        <li key={props.index} className="chat input">
        {currentConversation.options.map((option) => (
          <button onClick={() => handleChat(option)}>
            <p>{option.command}</p>
          </button>
        ))}
        </li>
      )
    }
    return null;
  }

  const ChatOutgoing = (props) => {
    if (props.index != conversationList.length - 1) {
      return (
        <li key={props.index} className="chat outgoing">
            {props.conv.options.map((option) => {
            return (<p>{option.command}</p>)  
          })}
        </li>
      )
    }
    return null;
  }

  return (
    <div>
      <header className='profile'>
        <img className="profile-photo" src={require("./images/profile-picture.png")} 
        alt={"Robin Kim"}
        />
        <span>Robin</span>
      </header>
      <div className="chatbot">
        <ul className="chatbox" ref={chatbox} >
        {conversationList.map((conversation, index) => {
          return (
            <div>
              {conversation.prompts.map((prompt) => {
                return (
                  <li key={index} className="chat incoming">
                    <p>{prompt}</p>
                  </li>)
              })}
            <ChatOutgoing conv={conversation} index={index}></ChatOutgoing>
  
            <ChatInput conversation={conversation} index={index}></ChatInput>
          </div>
          )
        })}
        <button className="restart_btn" onClick={()=> {
        handleRestart()
      }}><FaRedo></FaRedo> Restart conversation
      </button>
        </ul>
    </div>
    </div>
  );
}

export default Chatbot;

