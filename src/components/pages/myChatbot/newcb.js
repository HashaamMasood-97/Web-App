import React from 'react'
import $ from 'jquery'
import RiveScript from 'rivescript'
import './bot.css';
import './js/datadumper';
import 'jquery';



export default function newcb() {
// Create our RiveScript interpreter.
var rs = new RiveScript({
	
});

// This won't work on the web!
//rs.loadDirectory("brain");

// Load our files from the brain/ folder.
rs.loadFile([
	"brain/begin.rive", //This is where substitutions and info about your bot is stored (name, favourite stuff)
	"brain/clients.rive", //This is where the bot learns about the user (change or remove if you want to spice up the convo)
	"brain/myself.rive", //This is where the user asks questions about the bot.
	"brain/myexpert.rive", //This is your chatbot - spent most of your time here customising responses.
	"brain/extra.rive"
	], on_load_success, on_load_error);

// You can register objects that can then be called 
// using <call></call> syntax
rs.setSubroutine('fancyJSObject', function(rs, args){
	// doing complex stuff here
});

function on_load_success () {
	$("#message").removeAttr("disabled");
	$("#message").attr("placeholder", "Send message");
	$("#message").focus();

	// Now to sort the replies!
	rs.sortReplies();
}

function on_load_error (err) {
	console.log("Loading error: " + err);
}

// Handle sending a message to the bot.
function sendMessage () {
	var text = $("#message").val();
	$("#message").val("");
	$("#dialogue").append("<div class='userText'> <span class='user'>You:</span> " + text + "</div>");
	try {
	var reply = rs.reply("soandso", text);
	reply = reply.replace(/\n/g, "<br>");
	$("#dialogue").append("<div class='botText'><span class='bot'>Expert:</span> " + reply + "</div>");
	$("#dialogue").animate({ scrollTop: $("#dialogue").prop('scrollHeight')  }, 1000);
	} catch(e) {
		window.alert(e.message + "\n" + e.line);
		console.log(e);
	}

	return false;
}


function escapeHtml(text) {
	return text.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}


    return (
        <div>
            <fieldset>
  <legend>Conversation</legend>
	<div id="dialogue"></div>
</fieldset>

<form onSubmit= {sendMessage()}>
	<fieldset>
		<legend>Ask a Question</legend>

		<table class="input-table">
			<tr>
				<td width="960" class="text-box">
					<input type="text" size="40" name="message" id="message" autocomplete="off" disabled placeholder="Please wait... loading..." />
				</td>
				<td width="99" class="send-button">
					<input type="submit" value="Send" />
				</td>
			</tr>
		</table>
	</fieldset>
</form>
        </div>
    )
}
