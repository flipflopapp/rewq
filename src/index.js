/*  REWQ - v1
 *
 *  File: app.js
 *  Author: Naval Saini
 *  Borrowed from: https://github.com/syndicatefx/textpad
 *  License: MIT
 */

// Include useful dependencies

// FileSaver.js - https://github.com/eligrey/FileSaver.js
var saveAs=saveAs||function(r){"use strict";if("undefined"==typeof navigator||!/MSIE [1-9]\./.test(navigator.userAgent)){var e=r.document,o=function(){return r.URL||r.webkitURL||r},t=e.createElementNS("http://www.w3.org/1999/xhtml","a"),f="download"in t,n=function(r){var e=new MouseEvent("click");r.dispatchEvent(e)},i=/Version\/[\d\.]+.*Safari/.test(navigator.userAgent),a=r.webkitRequestFileSystem,d=r.requestFileSystem||a||r.mozRequestFileSystem,C=function(e){(r.setImmediate||r.setTimeout)(function(){throw e},0)},m="application/octet-stream",S=0,h=4e4,g=function(r){var e=function(){"string"==typeof r?o().revokeObjectURL(r):r.remove()};setTimeout(e,h)},c=function(r,e,o){e=[].concat(e);for(var t=e.length;t--;){var f=r["on"+e[t]];if("function"==typeof f)try{f.call(r,o||r)}catch(n){C(n)}}},u=function(r){return/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(r.type)?new Blob([String.fromCharCode(65279),r],{type:r.type}):r},s=function(e,C,h){h||(e=u(e));var s,l,v,p=this,w=e.type,y=!1,x=function(){c(p,"writestart progress write writeend".split(" "))},R=function(){if(l&&i&&"undefined"!=typeof FileReader){var t=new FileReader;return t.onloadend=function(){var r=t.result;l.location.href="data:attachment/file"+r.slice(r.search(/[,;]/)),p.readyState=p.DONE,x()},t.readAsDataURL(e),void(p.readyState=p.INIT)}if((y||!s)&&(s=o().createObjectURL(e)),l)l.location.href=s;else{var f=r.open(s,"_blank");void 0===f&&i&&(r.location.href=s)}p.readyState=p.DONE,x(),g(s)},O=function(r){return function(){return p.readyState!==p.DONE?r.apply(this,arguments):void 0}},b={create:!0,exclusive:!1};return p.readyState=p.INIT,C||(C="download"),f?(s=o().createObjectURL(e),void setTimeout(function(){t.href=s,t.download=C,n(t),x(),g(s),p.readyState=p.DONE})):(r.chrome&&w&&w!==m&&(v=e.slice||e.webkitSlice,e=v.call(e,0,e.size,m),y=!0),a&&"download"!==C&&(C+=".download"),(w===m||a)&&(l=r),d?(S+=e.size,void d(r.TEMPORARY,S,O(function(r){r.root.getDirectory("saved",b,O(function(r){var o=function(){r.getFile(C,b,O(function(r){r.createWriter(O(function(o){o.onwriteend=function(e){l.location.href=r.toURL(),p.readyState=p.DONE,c(p,"writeend",e),g(r)},o.onerror=function(){var r=o.error;r.code!==r.ABORT_ERR&&R()},"writestart progress write abort".split(" ").forEach(function(r){o["on"+r]=p["on"+r]}),o.write(e),p.abort=function(){o.abort(),p.readyState=p.DONE},p.readyState=p.WRITING}),R)}),R)};r.getFile(C,{create:!1},O(function(r){r.remove(),o()}),O(function(r){r.code===r.NOT_FOUND_ERR?o():R()}))}),R)}),R)):void R())},l=s.prototype,v=function(r,e,o){return new s(r,e,o)};return"undefined"!=typeof navigator&&navigator.msSaveOrOpenBlob?function(r,e,o){return o||(r=u(r)),navigator.msSaveOrOpenBlob(r,e||"download")}:(l.abort=function(){var r=this;r.readyState=r.DONE,c(r,"abort")},l.readyState=l.INIT=0,l.WRITING=1,l.DONE=2,l.error=l.onwritestart=l.onprogress=l.onwrite=l.onabort=l.onerror=l.onwriteend=null,v)}}("undefined"!=typeof self&&self||"undefined"!=typeof window&&window||this.content);"undefined"!=typeof module&&module.exports?module.exports.saveAs=saveAs:"undefined"!=typeof define&&null!==define&&null!==define.amd&&define([],function(){return saveAs});
// Smoke.js - https://github.com/hxgf/smoke.js
(function(e,t){var n={smoketimeout:[],init:false,zindex:1e3,i:0,bodyload:function(e){var r=t.createElement("div");r.setAttribute("id","smoke-out-"+e);r.className="smoke-base";r.style.zIndex=n.zindex;n.zindex++;t.body.appendChild(r)},newdialog:function(){var t=(new Date).getTime();t=Math.random(1,99)+t;if(!n.init){n.listen(e,"load",function(){n.bodyload(t)})}else{n.bodyload(t)}return t},forceload:function(){},build:function(t,r){n.i++;r.stack=n.i;t=t.replace(/\n/g,"<br />");t=t.replace(/\r/g,"<br />");var i="",s="OK",o="Cancel",u="",a="",f;if(r.type==="prompt"){i='<div class="dialog-prompt">'+'<input id="dialog-input-'+r.newid+'" type="text" '+(r.params.value?'value="'+r.params.value+'"':"")+" />"+"</div>"}if(r.params.ok){s=r.params.ok}if(r.params.cancel){o=r.params.cancel}if(r.params.classname){u=r.params.classname}if(r.type!=="signal"){a='<div class="dialog-buttons">';if(r.type==="alert"){a+='<button id="alert-ok-'+r.newid+'">'+s+"</button>"}else if(r.type==="quiz"){if(r.params.button_1){a+='<button class="quiz-button" id="'+r.type+"-ok1-"+r.newid+'">'+r.params.button_1+"</button>"}if(r.params.button_2){a+='<button class="quiz-button" id="'+r.type+"-ok2-"+r.newid+'">'+r.params.button_2+"</button>"}if(r.params.button_3){a+='<button class="quiz-button" id="'+r.type+"-ok3-"+r.newid+'">'+r.params.button_3+"</button>"}if(r.params.button_cancel){a+='<button id="'+r.type+"-cancel-"+r.newid+'" class="cancel">'+r.params.button_cancel+"</button>"}}else if(r.type==="prompt"||r.type==="confirm"){if(r.params.reverseButtons){a+='<button id="'+r.type+"-ok-"+r.newid+'">'+s+"</button>"+'<button id="'+r.type+"-cancel-"+r.newid+'" class="cancel">'+o+"</button>"}else{a+='<button id="'+r.type+"-cancel-"+r.newid+'" class="cancel">'+o+"</button>"+'<button id="'+r.type+"-ok-"+r.newid+'">'+s+"</button>"}}a+="</div>"}f='<div id="smoke-bg-'+r.newid+'" class="smokebg"></div>'+'<div class="dialog smoke '+u+'">'+'<div class="dialog-inner">'+t+i+a+"</div>"+"</div>";if(!n.init){n.listen(e,"load",function(){n.finishbuild(t,r,f)})}else{n.finishbuild(t,r,f)}},finishbuild:function(e,r,i){var s=t.getElementById("smoke-out-"+r.newid);s.className="smoke-base smoke-visible  smoke-"+r.type;s.innerHTML=i;while(s.innerHTML===""){s.innerHTML=i}if(n.smoketimeout[r.newid]){clearTimeout(n.smoketimeout[r.newid])}n.listen(t.getElementById("smoke-bg-"+r.newid),"click",function(){n.destroy(r.type,r.newid);if(r.type==="prompt"||r.type==="confirm"||r.type==="quiz"){r.callback(false)}else if(r.type==="alert"&&typeof r.callback!=="undefined"){r.callback()}});switch(r.type){case"alert":n.finishbuildAlert(e,r,i);break;case"confirm":n.finishbuildConfirm(e,r,i);break;case"quiz":n.finishbuildQuiz(e,r,i);break;case"prompt":n.finishbuildPrompt(e,r,i);break;case"signal":n.finishbuildSignal(e,r,i);break;default:throw"Unknown type: "+r.type}},finishbuildAlert:function(r,i,s){n.listen(t.getElementById("alert-ok-"+i.newid),"click",function(){n.destroy(i.type,i.newid);if(typeof i.callback!=="undefined"){i.callback()}});t.onkeyup=function(t){if(!t){t=e.event}if(t.keyCode===13||t.keyCode===32||t.keyCode===27){n.destroy(i.type,i.newid);if(typeof i.callback!=="undefined"){i.callback()}}}},finishbuildConfirm:function(r,i,s){n.listen(t.getElementById("confirm-cancel-"+i.newid),"click",function(){n.destroy(i.type,i.newid);i.callback(false)});n.listen(t.getElementById("confirm-ok-"+i.newid),"click",function(){n.destroy(i.type,i.newid);i.callback(true)});t.onkeyup=function(t){if(!t){t=e.event}if(t.keyCode===13||t.keyCode===32){n.destroy(i.type,i.newid);i.callback(true)}else if(t.keyCode===27){n.destroy(i.type,i.newid);i.callback(false)}}},finishbuildQuiz:function(r,i,s){var o,u,a;n.listen(t.getElementById("quiz-cancel-"+i.newid),"click",function(){n.destroy(i.type,i.newid);i.callback(false)});if(o=t.getElementById("quiz-ok1-"+i.newid))n.listen(o,"click",function(){n.destroy(i.type,i.newid);i.callback(o.innerHTML)});if(u=t.getElementById("quiz-ok2-"+i.newid))n.listen(u,"click",function(){n.destroy(i.type,i.newid);i.callback(u.innerHTML)});if(a=t.getElementById("quiz-ok3-"+i.newid))n.listen(a,"click",function(){n.destroy(i.type,i.newid);i.callback(a.innerHTML)});t.onkeyup=function(t){if(!t){t=e.event}if(t.keyCode===27){n.destroy(i.type,i.newid);i.callback(false)}}},finishbuildPrompt:function(r,i,s){var o=t.getElementById("dialog-input-"+i.newid);setTimeout(function(){o.focus();o.select()},100);n.listen(t.getElementById("prompt-cancel-"+i.newid),"click",function(){n.destroy(i.type,i.newid);i.callback(false)});n.listen(t.getElementById("prompt-ok-"+i.newid),"click",function(){n.destroy(i.type,i.newid);i.callback(o.value)});t.onkeyup=function(t){if(!t){t=e.event}if(t.keyCode===13){n.destroy(i.type,i.newid);i.callback(o.value)}else if(t.keyCode===27){n.destroy(i.type,i.newid);i.callback(false)}}},finishbuildSignal:function(r,i,s){t.onkeyup=function(t){if(!t){t=e.event}if(t.keyCode===27){n.destroy(i.type,i.newid);if(typeof i.callback!=="undefined"){i.callback()}}};n.smoketimeout[i.newid]=setTimeout(function(){n.destroy(i.type,i.newid);if(typeof i.callback!=="undefined"){i.callback()}},i.timeout)},destroy:function(e,r){var i=t.getElementById("smoke-out-"+r);if(e!=="quiz"){var s=t.getElementById(e+"-ok-"+r)}var o=t.getElementById(e+"-cancel-"+r);i.className="smoke-base";if(s){n.stoplistening(s,"click",function(){});t.onkeyup=null}if(e==="quiz"){var u=t.getElementsByClassName("quiz-button");for(var a=0;a<u.length;a++){n.stoplistening(u[a],"click",function(){});t.onkeyup=null}}if(o){n.stoplistening(o,"click",function(){})}n.i=0;i.innerHTML=""},alert:function(e,t,r){if(typeof r!=="object"){r=false}var i=n.newdialog();n.build(e,{type:"alert",callback:t,params:r,newid:i})},signal:function(e,t,r){if(typeof r!=="object"){r=false}var i=5e3;if(r.duration!=="undefined"){i=r.duration}var s=n.newdialog();n.build(e,{type:"signal",callback:t,timeout:i,params:r,newid:s})},confirm:function(e,t,r){if(typeof r!=="object"){r=false}var i=n.newdialog();n.build(e,{type:"confirm",callback:t,params:r,newid:i})},quiz:function(e,t,r){if(typeof r!=="object"){r=false}var i=n.newdialog();n.build(e,{type:"quiz",callback:t,params:r,newid:i})},prompt:function(e,t,r){if(typeof r!=="object"){r=false}var i=n.newdialog();return n.build(e,{type:"prompt",callback:t,params:r,newid:i})},listen:function(e,t,n){if(e.addEventListener){return e.addEventListener(t,n,false)}if(e.attachEvent){return e.attachEvent("on"+t,n)}return false},stoplistening:function(e,t,n){if(e.removeEventListener){return e.removeEventListener(t,n,false)}if(e.detachEvent){return e.detachEvent("on"+t,n)}return false}};n.init=true;if(typeof module!="undefined"&&module.exports){module.exports=n}else if(typeof define==="function"&&define.amd){define("smoke",[],function(){return n})}else{this.smoke=n}})(window,document)

const { parseAndSave } = require('./parse-user-input');

/*--------------------------------------
 *  Let's build this puppy!
 *  Bare with me, i'm not a Javascript guru.
 *-------------------------------------*/

document.addEventListener("DOMContentLoaded", function(event) {

  // Declare our variables

  var content = document.getElementById("content"),
      start   = document.getElementById("start"),
      home    = document.getElementById("homepage"),
      save    = document.getElementById("save"),
      clear   = document.getElementById("clear"),
      settings= document.getElementById("settings"),
      setMenu = document.getElementById("setMenu"),
      lw      = document.getElementById("lw"),
      theme   = document.getElementById("theme"),
      info    = document.getElementById("info"),
      apply   = document.getElementById("apply")
      ;

  /*-------------------------------------
   *  Deal with LocalStorage availability
   *  1.Test to see if LocalStorage is available.
   *  2.If available, set and get items, where good to go.
   *  3.If NOT available fire alert message to user.
   *------------------------------------*/

  function hasStorage() {  //1
    var test = 'test';
    try {
      localStorage.setItem(test, test);
      localStorage.removeItem(test);
      return true;
    } catch(e) {
      return false;
    }
  };

  if(hasStorage() === true){  //2

    content.addEventListener("keyup", function() {
      localStorage.setItem("textPad-content", this.value);
    });

    if(localStorage.getItem("textPad-content")) {
      content.value = localStorage.getItem("textPad-content");
    }

    if(localStorage.getItem("textPad-theme")) {
      var themeClass = localStorage.getItem("textPad-theme");
      document.querySelector("html").classList.add(themeClass);
    }

    if(localStorage.getItem("textPad-settings")) {
      content.style.cssText = localStorage.getItem("textPad-settings");
    }

    if(localStorage.getItem("textPad-settings-lw")) {
      lw.value = localStorage.getItem("textPad-settings-lw");
    }



  }else{  //3
    smoke.alert("Sorry, either your browser doesn't support LocalStorage, or you have exceeded storage limits!");
  };

  /*-----------------------------------
   * Menu actions
   *----------------------------------*/

  // Save File(icon)

  save.addEventListener("click", function(event) {
    event.preventDefault();
    var blob = new Blob([content.value || content.placeholder],{type: "text/plain;charset=utf-8"});
    saveAs(blob, ".rewq");
  }, false);

  // Delete/clear(icon)

  clear.addEventListener("click", function(e) {
    if(content.value == "") {
      smoke.alert("There is nothing to delete!\nGo ahead and write something first.")
    } else {
      smoke.confirm("This will trash your current text and clear it from REWQ's  localstorage data, are you sure?",function(e) {
        if(e) {
          localStorage.removeItem('textPad-content');
          content.value = "";
        }}, {
        reverseButtons: true,
        ok: "YES",
        cancel: "NO"
      });
    };
  });

  // Settings(icon)

  settings.addEventListener("click", function() {
    this.classList.toggle("settings-btn--active");
    setMenu.classList.toggle("settings-menu--open");
  });

  /*-----------------------------------
   * Settings Sub-Menu actions
   *----------------------------------*/

  // Store all text settings

  function textSettings() {
    // Get the element values
    lwValue = lw.value;

    // Set styles with new values
    settingValues = "padding-left:" + lwValue + "em;padding-right:" + lwValue + "em;";
    
    // Store settings
    localStorage.setItem("textPad-settings", settingValues);
    localStorage.setItem("textPad-settings-lw", lwValue);
  };

  // Line width (simulated by using paddings on textarea)

  lw.addEventListener("input", function() {
    val = lw.value;
    content.style.paddingLeft = val + "em";
    content.style.paddingRight = val + "em";
    textSettings();
  });

  // Change Theme

  theme.addEventListener("click", function() {
    document.querySelector("html").classList.toggle("night");

    var themeClass = localStorage.getItem("textPad-theme");

    if(themeClass == "night") {
      localStorage.removeItem("textPad-theme");
    } else {
      localStorage.setItem("textPad-theme", "night");
    }
  });

  // Close sub-menu on content focus

  content.addEventListener("click", function() {
    setMenu.classList.remove("settings-menu--open");
    settings.classList.remove("settings-btn--active");
  });

  /*-----------------------------------
   * Info Panel
   *----------------------------------*/

  // Start writing button

  start.addEventListener("click", function() {
    home.classList.remove("active");
    content.focus();
  });

  // Show info(icon)

  info.addEventListener("click", function() {
    home.classList.add("active");
  });

  /* Apply */

  apply.addEventListener("click", function() {
    saveShortcuts();
  });

  function saveShortcuts() {
    const count = parseAndSave(content.value || content.placeholder);
    apply.classList.remove("active");
    content.focus();
  }

});