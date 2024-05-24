"use strict";(self.blocksyJsonP=self.blocksyJsonP||[]).push([[719],{7719:function(e,t,o){o.r(t),o.d(t,{mount:function(){return r}});var n=o(1381),c=o(5652),l=o(5311),s=o.n(l);var a=function(e){let{initialStatus:t,url:o,pluginUrl:l,pluginLink:a}=e;const[i,r]=(0,n.useState)("installed"),[u,m]=(0,n.useState)(!1),y=(0,n.useRef)(null);return(0,n.useEffect)((function(){r(t)}),[]),(0,n.createElement)("div",{className:"ct-blocksy-plugin-inner",ref:y},(0,n.createElement)("button",{onClick:function(){y.current.closest(".notice-blocksy-plugin").parentNode.removeChild(y.current.closest(".notice-blocksy-plugin")),s().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_dismissed_notice_handler"}})},type:"button",className:"notice-dismiss"},(0,n.createElement)("span",{className:"screen-reader-text"},(0,c.__)("Dismiss this notice.","blocksy"))),(0,n.createElement)("span",{className:"ct-notification-icon"},(0,n.createElement)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fill:"#000000",d:"M50,25C50,11.2,38.8,0,25,0C11.2,0,0,11.2,0,25c0,13.8,11.2,25,25,25C38.8,50,50,38.8,50,25z"}),(0,n.createElement)("path",{fill:"#ffffff",d:"M23.4,19.5H29c0.7,0,1.3,0.6,1.3,1.4c0,0.8-0.6,1.4-1.4,1.4h-4.4L23.4,19.5z M34.6,25.1c0.9-1.2,1.4-2.7,1.4-4.2c0-1.6-0.5-3-1.4-4.2c-1.3-1.7-3.3-2.9-5.6-2.9c-0.1,0-0.1,0-0.2,0v0H15.5c-0.4,0-0.6,0.4-0.5,0.7l3.2,7.8h-2.8c-0.4,0-0.6,0.4-0.5,0.7l5.6,13.6h8.2c3.9,0,7.1-3.2,7.1-7.1C36,27.8,35.5,26.4,34.6,25.1C34.6,25.2,34.6,25.1,34.6,25.1zM23.4,28H29c0.7,0,1.3,0.6,1.3,1.4c0,0.8-0.6,1.4-1.4,1.4h-4.4L23.4,28z"}))),(0,n.createElement)("div",{className:"ct-notification-content"},(0,n.createElement)("h2",null,(0,c.__)("Thanks for installing Blocksy, you rock!","blocksy")),(0,n.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,c.__)("We strongly recommend you to activate the <b>Blocksy Companion</b> plugin.<br>This way you will have access to custom extensions, demo templates and many other awesome features.","blocksy")}}),(0,n.createElement)("div",{className:"notice-actions"},null,(0,n.createElement)("button",{className:"button button-primary",disabled:u||"active"===i,onClick:function(){m(!0),setTimeout((function(){})),s().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_notice_button_click",nonce:ct_localizations.nonce}}).then((function(e){let{success:t,data:o}=e;t&&(r(o.status),"active"===o.status&&location.assign(l)),m(!1)}))}},u?(0,c.__)("Installing & activating...","blocksy"):"uninstalled"===i?(0,c.__)("Install Blocksy Companion","blocksy"):"installed"===i?(0,c.__)("Activate Blocksy Companion","blocksy"):(0,c.__)("Blocksy Companion active!","blocksy"),u&&(0,n.createElement)("i",{className:"dashicons dashicons-update"})),(0,n.createElement)("a",{className:"ct-why-button button",href:"https://creativethemes.com/blocksy/companion/"},(0,c.__)("Why you need Blocksy Companion?","blocksy")))))};var i=function(e){let{initialStatus:t,url:o,pluginUrl:l,pluginLink:a}=e;const[i,r]=(0,n.useState)("installed"),[u,m]=(0,n.useState)(!1),y=(0,n.useRef)(null);(0,n.useEffect)((function(){r(t)}),[]);return(0,n.createElement)("div",{className:"ct-blocksy-blocks-move-inner",ref:y},(0,n.createElement)("button",{onClick:function(){y.current.closest(".notice").remove(),s().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_dismissed_blocks_move_notice_handler"}})},type:"button",className:"notice-dismiss"},(0,n.createElement)("span",{className:"screen-reader-text"},(0,c.__)("Dismiss this notice.","blocksy"))),(0,n.createElement)("span",{className:"ct-notification-icon"},(0,n.createElement)("svg",{width:"50",height:"50",viewBox:"0 0 50 50",xmlns:"http://www.w3.org/2000/svg"},(0,n.createElement)("path",{fill:"#000000",d:"M50,25C50,11.2,38.8,0,25,0C11.2,0,0,11.2,0,25c0,13.8,11.2,25,25,25C38.8,50,50,38.8,50,25z"}),(0,n.createElement)("path",{fill:"#ffffff",d:"M23.4,19.5H29c0.7,0,1.3,0.6,1.3,1.4c0,0.8-0.6,1.4-1.4,1.4h-4.4L23.4,19.5z M34.6,25.1c0.9-1.2,1.4-2.7,1.4-4.2c0-1.6-0.5-3-1.4-4.2c-1.3-1.7-3.3-2.9-5.6-2.9c-0.1,0-0.1,0-0.2,0v0H15.5c-0.4,0-0.6,0.4-0.5,0.7l3.2,7.8h-2.8c-0.4,0-0.6,0.4-0.5,0.7l5.6,13.6h8.2c3.9,0,7.1-3.2,7.1-7.1C36,27.8,35.5,26.4,34.6,25.1C34.6,25.2,34.6,25.1,34.6,25.1zM23.4,28H29c0.7,0,1.3,0.6,1.3,1.4c0,0.8-0.6,1.4-1.4,1.4h-4.4L23.4,28z"}))),(0,n.createElement)("div",{className:"ct-notification-content"},(0,n.createElement)("h2",null,(0,c.__)("Heads up - soon theme blocks are going to be moved to the Blocksy Companion plugin","blocksy")),(0,n.createElement)("p",{dangerouslySetInnerHTML:{__html:(0,c.__)("By some enforced requirements, we have to move the theme blocks in to the companion plugin.","blocksy")+"<br>"+(0,c.__)("If you where using the theme blocks before, there is no need to worry, just activate the Blocksy Companion plugin and you will have access to those blocks as before.","blocksy")}}),(0,n.createElement)("div",{className:"notice-actions"},(0,n.createElement)("button",{className:"button button-primary",disabled:u||"active"===i,onClick:function(){m(!0),setTimeout((function(){})),s().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_notice_button_click",nonce:ct_localizations.nonce}}).then((function(e){let{success:t,data:o}=e;t&&(r(o.status),"active"===o.status&&location.assign(l)),m(!1)}))}},u?(0,c.__)("Installing & activating...","blocksy"):"uninstalled"===i?(0,c.__)("Install Blocksy Companion","blocksy"):"installed"===i?(0,c.__)("Activate Blocksy Companion","blocksy"):(0,c.__)("Blocksy Companion active!","blocksy"),u&&(0,n.createElement)("i",{className:"dashicons dashicons-update"})),(0,n.createElement)("a",{className:"ct-why-button button",href:"https://creativethemes.com/blocksy/companion/"},(0,c.__)("Why you need Blocksy Companion?","blocksy")))))};const r=function(e){e.querySelector(".notice-blocksy-blocks-move-root")&&(0,n.render)((0,n.createElement)(i,{initialStatus:e.querySelector(".notice-blocksy-blocks-move-root").dataset.pluginStatus,url:e.querySelector(".notice-blocksy-blocks-move-root").dataset.url,pluginUrl:e.querySelector(".notice-blocksy-blocks-move-root").dataset.pluginUrl,pluginLink:e.querySelector(".notice-blocksy-blocks-move-root").dataset.link}),e.querySelector(".notice-blocksy-blocks-move-root")),e.querySelector(".notice-blocksy-plugin-root")&&(0,n.render)((0,n.createElement)(a,{initialStatus:e.querySelector(".notice-blocksy-plugin-root").dataset.pluginStatus,url:e.querySelector(".notice-blocksy-plugin-root").dataset.url,pluginUrl:e.querySelector(".notice-blocksy-plugin-root").dataset.pluginUrl,pluginLink:e.querySelector(".notice-blocksy-plugin-root").dataset.link}),e.querySelector(".notice-blocksy-plugin-root")),[...document.querySelectorAll("[data-dismiss]")].map((function(e){e.addEventListener("click",(function(t){t.preventDefault(),e.closest(".notice-blocksy-woo-deprecation").remove(),s().ajax(ajaxurl,{type:"POST",data:{action:"blocksy_dismissed_notice_woo_deprecation"}})}))}))}}}]);