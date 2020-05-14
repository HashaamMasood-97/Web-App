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
        
        outputEl.value += `> ${message}\n`
        

        setTimeout(() => {
          outputEl.value += `${messages(message)}\n`
          }, 300)
        
    
      }

    const  messages = (messages) => {
        const message = messages.toLowerCase()
        switch (message) {
          case 'hello':
          case 'hi':
          return 'Hello!' 
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
            <textarea id="outputtt" disabled="disabled">> Hi, How are you feeling today?       (Good or bad)                           </textarea>
            <input id="inputtt" autofocus />
            <button id="send-buttonnn">Send</button>
        </div>
    )
    
}
