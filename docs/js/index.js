"use strict";function updateAllProgress(){var e=document.querySelectorAll(".progress");null==e||e.forEach((function(e){var t=339.292,n=t-parseInt(e.getAttribute("data-percent"),10)/100*t;e.querySelector("path").style.strokeDashoffset=n}))}document.querySelectorAll(".course__top").forEach((function(e){e.addEventListener("click",(function(){var e=this.parentElement;e.classList.toggle("active"),e.classList.contains("active")?e.nextElementSibling.style.display="block":document.querySelectorAll(".course").forEach((function(e){e.classList.remove("active")}))}))})),document.addEventListener("mouseup",(function(e){var t=document.querySelector(".course.active");t&&!t.contains(e.target)&&t.classList.remove("active")})),document.addEventListener("DOMContentLoaded",updateAllProgress),document.querySelectorAll(".course-programm__top").forEach((function(e){e.addEventListener("click",(function(){var e=this.parentElement;e.classList.toggle("active"),e.classList.contains("active")?e.nextElementSibling.style.display="block":document.querySelectorAll(".course-programm__accordion").forEach((function(e){e.classList.remove("active")}))}))})),document.addEventListener("mouseup",(function(e){var t=document.querySelector(".course-programm__accordion.active");t&&!t.contains(e.target)&&t.classList.remove("active")})),document.querySelectorAll(".faq-accordion__top").forEach((function(e){e.addEventListener("click",(function(){var e=this.parentElement;e.classList.toggle("active"),e.classList.contains("active")?e.nextElementSibling.style.display="block":document.querySelectorAll(".faq-accordion").forEach((function(e){e.classList.remove("active")}))}))})),document.addEventListener("mouseup",(function(e){var t=document.querySelector(".faq-accordion.active");t&&!t.contains(e.target)&&t.classList.remove("active")})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".form");null==e||e.addEventListener("submit",(function(e){var t=!1;document.querySelectorAll(".form__label").forEach((function(e){var n=e.querySelector(".form__field"),r=e.querySelector(".form__error");r||((r=document.createElement("div")).classList.add("form__error"),e.appendChild(r)),""===n.value.trim()?(r.textContent="Проверьте корректность введенных данных",r.classList.add("active"),t=!0):(r.classList.remove("active"),r.textContent="",r.parentNode.removeChild(r))})),t&&e.preventDefault()}))}));var passwordFields=document.querySelectorAll(".form__password");null==passwordFields||passwordFields.forEach((function(e){e.addEventListener("click",(function(){var t=e.previousElementSibling;"password"===t.getAttribute("type")?t.setAttribute("type","text"):t.setAttribute("type","password"),e.classList.toggle("active")}))}));var phoneMask=document.querySelector(".phone-mask");function _slicedToArray(e,t){return _arrayWithHoles(e)||_iterableToArrayLimit(e,t)||_unsupportedIterableToArray(e,t)||_nonIterableRest()}function _nonIterableRest(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function _iterableToArrayLimit(e,t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e)){var n=[],r=!0,o=!1,a=void 0;try{for(var c,i=e[Symbol.iterator]();!(r=(c=i.next()).done)&&(n.push(c.value),!t||n.length!==t);r=!0);}catch(e){o=!0,a=e}finally{try{r||null==i.return||i.return()}finally{if(o)throw a}}return n}}function _arrayWithHoles(e){if(Array.isArray(e))return e}function _createForOfIteratorHelper(e,t){var n;if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(n=_unsupportedIterableToArray(e))||t&&e&&"number"==typeof e.length){n&&(e=n);var r=0,o=function(){};return{s:o,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,c=!0,i=!1;return{s:function(){n=e[Symbol.iterator]()},n:function(){var e=n.next();return c=e.done,e},e:function(e){i=!0,a=e},f:function(){try{c||null==n.return||n.return()}finally{if(i)throw a}}}}function _unsupportedIterableToArray(e,t){if(e){if("string"==typeof e)return _arrayLikeToArray(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?_arrayLikeToArray(e,t):void 0}}function _arrayLikeToArray(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}null==phoneMask||phoneMask.addEventListener("focus",(function(){this.value.startsWith("+7")&&this.value.startsWith("8")||(this.value="+7")})),null==phoneMask||phoneMask.addEventListener("input",(function(e){if("deleteContentBackward"!=e.inputType){var t=this.value;if((t=t.replace(/\D/g,"")).length>0){var n=t.substring(0,1),r=t.substring(1,4),o=t.substring(4,7),a=t.substring(7,9),c=t.substring(9,11);t="+"+n+" ("+r+") "+o+a+c}this.value=t}})),document.addEventListener("DOMContentLoaded",(function(){document.querySelectorAll('.menu-search--js [name="category"]').forEach((function(e){e.addEventListener("keyup",(function(){var e,t,n=this.value.toLowerCase();""===n?(document.querySelectorAll(".menu__course-box.selected").forEach((function(e){return e.classList.remove("selected")})),document.querySelectorAll(".menu__course").forEach((function(e){return e.classList.remove("hide-accardeon")}))):(document.querySelectorAll("[data-name-menu]").forEach((function(e){e.getAttribute("data-name-menu").toLowerCase().includes(n)?e.classList.remove("hide-accardeon"):e.classList.add("hide-accardeon")})),document.querySelectorAll(".menu__list").forEach((function(e){if(e.querySelectorAll("li").length===e.querySelectorAll("li.hide-accardeon").length){var t=e.closest(".menu__course-box");if(t){t.classList.remove("selected");var n=t.previousElementSibling;n&&n.classList.remove("selected")}e.closest(".menu__course").classList.add("hide-accardeon")}else{var r=e.closest(".menu__course-box");if(r){r.classList.add("selected");var o=r.previousElementSibling;o&&o.classList.add("selected")}e.closest(".menu__course").classList.remove("hide-accardeon")}}))),e=document.querySelectorAll(".menu__course:not(.hide-accardeon)").length,(t=document.querySelector(".not-found"))&&(t.style.display=0===e?"block":"none")}))}))})),document.querySelectorAll(".menu__course-top").forEach((function(e){e.addEventListener("click",(function(){var e=this.parentElement;e.classList.toggle("active"),e.classList.contains("active")?e.nextElementSibling.style.display="block":document.querySelectorAll(".menu__course").forEach((function(e){e.classList.remove("active")}))}))})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".header__burger"),t=document.querySelector(".menu");null==e||e.addEventListener("click",(function(e){this.classList.toggle("active"),t.classList.toggle("active")}))})),document.addEventListener("DOMContentLoaded",(function(){Fancybox.bind("[data-fancybox]",{})})),document.addEventListener("DOMContentLoaded",(function(){var e=document.querySelector(".lessen-like--js"),t=document.querySelector(".modal-closed--js"),n=document.querySelector(".modal-form--js"),r=document.querySelector(".modal"),o="",a=document.querySelector(".modal-form"),c=null==a?void 0:a.getAttribute("action"),i=null==a?void 0:a.getAttribute("method");null==e||e.addEventListener("click",(function(e){r.classList.add("active")})),null==t||t.addEventListener("click",(function(e){r.classList.remove("active")})),document.addEventListener("mouseup",(function(e){var t=document.querySelector(".modal__body");t&&!(null==t?void 0:t.contains(e.target))&&r.classList.remove("active")})),null==n||n.addEventListener("click",(function(t){var n=function(e){var t,n={},r=_createForOfIteratorHelper(new FormData(e).entries());try{for(r.s();!(t=r.n()).done;){var o=_slicedToArray(t.value,2),a=o[0],c=o[1];n[a]=c}}catch(e){r.e(e)}finally{r.f()}return new URLSearchParams(n).toString()}(a);fetch(c,{method:i,headers:{"Content-Type":"application/x-www-form-urlencoded"},body:n}).then((function(e){return e.text()})).then((function(e){console.log("Success:",e)})).catch((function(e){console.error("Error:",e)})),r.classList.remove("active");var s=document.querySelector('input[name="reviews"]:checked');if(s){var l=s.value;o&&e.classList.remove(o),e.classList.add(l),o=l}}))})),document.addEventListener("DOMContentLoaded",function(e){var t=e.querySelectorAll(".inputfile");Array.prototype.forEach.call(t,(function(e){var t=e.nextElementSibling,n=t.innerHTML;e.addEventListener("change",(function(e){var r="";(r=this.files&&this.files.length>1?(this.getAttribute("data-multiple-caption")||"").replace("{count}",this.files.length):e.target.value.split("\\").pop())?t.querySelector("span").innerHTML=r:t.innerHTML=n})),e.addEventListener("focus",(function(){e.classList.add("has-focus")})),e.addEventListener("blur",(function(){e.classList.remove("has-focus")}))}))}(document,window));