import React from 'react'
import RiveScript from 'rivescript'
import 'jquery'



export default function rivescriptcb() {


    window.onload=function(){
     
        var bot = new RiveScript();
        
        bot.loadFile("brain/extra.rive").then(brainReady).catch(brainError);
       
        function brainReady(){
            console.log('Chatbot ready')
            bot.sortReplies();
        }
       
        function brainError(){
            console.log('Chatbot Error')
        }
       
        let button =document.querySelector('#submit');
        let user_input =document.querySelector('#user_input');
        let output =document.querySelector('#output');
       
       
       button.addEventListener('click', chat, true)
      

       function chat() {
           let input = user_input.value;
           bot.reply("local-user", input).then(function(reply) {
               output.html(reply);
           });
       }
    }

    return (
        
        <div>
    
            <h1>Chatbot</h1>
     <p>
	      say: <input id="user_input"></input>
          <button id="submit">Submit</button>
          </p>
      <p>
        reply: <span id="output"></span>
        </p>
        </div>
    )
}
