(()=>{"use strict";function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var t=function(){function t(e,n){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.previousOperandTextElement=e,this.currentOperandTextElement=n,this.clear()}var n,r,a;return n=t,(r=[{key:"clear",value:function(){this.currentOperand="",this.previousOperand="",this.operation=void 0}},{key:"delete",value:function(){this.currentOperand=this.currentOperand.toString().slice(0,-1)}},{key:"appendNumber",value:function(e){"."===e&&this.currentOperand.includes(".")||(this.currentOperand=this.currentOperand.toString()+e.toString())}},{key:"chooseOperation",value:function(e){""!==this.currentOperand&&(""!==this.previousOperand&&this.compute(),this.operation=e,this.previousOperand=this.currentOperand,this.currentOperand="")}},{key:"compute",value:function(){var e,t=parseFloat(this.previousOperand),n=parseFloat(this.currentOperand);if(!isNaN(t)&&!isNaN(n)){switch(this.operation){case"+":e=t+n;break;case"-":e=t-n;break;case"*":e=t*n;break;case"÷":e=t/n;break;default:return}this.currentOperand=e,this.operation=void 0,this.previousOperand=""}}},{key:"getDisplayNumber",value:function(e){var t,n=e.toString(),r=parseFloat(n.split(".")[0]),a=n.split(".")[1];return t=isNaN(r)?"":r.toLocaleString("en",{maximumFractionDigits:0}),null!=a?(console.log("es aqui veda"),"".concat(t,".").concat(a)):t}},{key:"updateDisplay",value:function(){this.currentOperandTextElement.innerText=this.getDisplayNumber(this.currentOperand),null!=this.operation?this.previousOperandTextElement.innerText="".concat(this.getDisplayNumber(this.previousOperand)," ").concat(this.operation):this.previousOperandTextElement.innerText=""}}])&&e(n.prototype,r),a&&e(n,a),Object.defineProperty(n,"prototype",{writable:!1}),t}(),n=document.querySelectorAll("[data-number]"),r=document.querySelectorAll("[data-operation]"),a=document.querySelector("[data-equals]"),i=document.querySelector("[data-delete]"),o=document.querySelector("[data-all-clear]"),u=new t(document.querySelector("[data-previous-operand]"),document.querySelector("[data-current-operand]"));n.forEach((function(e){e.addEventListener("click",(function(){u.appendNumber(e.innerText),u.updateDisplay()}))})),r.forEach((function(e){e.addEventListener("click",(function(){u.chooseOperation(e.innerText),u.updateDisplay()}))})),a.addEventListener("click",(function(){u.compute(),u.updateDisplay()})),o.addEventListener("click",(function(){u.clear(),u.updateDisplay()})),i.addEventListener("click",(function(){u.delete(),u.updateDisplay()}))})();