import React from 'react'
import { Redirect } from 'react-router-dom'

export default function chatbot() {

    window.onload=function(){
    const outputEl = document.querySelector('#outputtt')
    const inputEl = document.querySelector('#inputtt')
    const sendButton = document.querySelector('#send-buttonnn')
  

 
    
     
    
    const onSubmit = e => {
        const message = inputEl.value

        inputEl.value = ''
        
        outputEl.value += `You: ${message}\n`
        

        setTimeout(() => {
          outputEl.value += `Expert: ${messages(message)}\n`
          }, 300)
        
    
      }

    const  messages = (messages) => {
        const message = messages.toLowerCase()
        switch (message) {
          case 'hello':
          case 'hi':
          return 'Hello! How may I assisst you now?' 
          case 'bye':
          case 'goodbye':
          return 'See ya!'
          default: {
          if (message.startsWith('my name is ')) return 'Hello '
          + messages.substring(11) + '!'
          if (message.startsWith('how')) return 'I do not know how!'
          if (message.includes('your name')) return 'My name is Hue Maan.'
          if (message.includes('your age')) return 'I was born today!'
          if (message.includes('time')) return 'Time? I guess its ' + 
          +   Date.now().toString()
          if (message.includes('good')) return 'Great. How may I assisst you now?'
          if (message.includes('bad')) return 'Do not worry we will take care of your health.\nSelect your symptoms from the following:\nsore throat || fever || cold' 
          if (message.includes('fever')) return 'you should book our general physician'
          if (message.includes('feeling')) return 'Oh, thats bad ! can you please elaborate'
          if (message.includes('fever')) return 'No need to worry ! Book your general physician'
          if (message.includes('thank you')) return 'Its always a pleasure assisting you'
      
          return 'bad input'
          }
          }
        }  

        inputEl.addEventListener('keyup', e => {
            if (e.key === 'Enter') {
            onSubmit(e)
            }
            }, true)
    
    
      sendButton.addEventListener('click', onSubmit, true)
      
    
    }

    
    return (
        <div id="chatbot">
            <h1>Chatbot</h1>
            <fieldset>
        <legend>Conversation</legend>
            <textarea id="outputtt" disabled="disabled"/> 
                 </fieldset>
              <fieldset id="newfs"><legend> Ask a Question </legend>  
            <input id="inputtt" autofocus placeholder="send message" />
            <button id="send-buttonnn">Send</button>
            
            </fieldset>
        </div>
    )
    
}
