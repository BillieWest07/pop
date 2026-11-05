/*
	
	Progression of Projecotrs
	Author:  Billie Jo Westfall 
	Date:     11/1/2026
   
	Filename: pop_formmessage.js
   
	This file is based off of the "rb_formsubmit.js"
	file from chapter 07, and simply displays a message
	when a survey is completed.
*/

window.onload = function() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Your survey was successfully completed!");
      return false;
   };
};