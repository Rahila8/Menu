(()=>{var e={888:e=>{e.exports=function(){const e=document.querySelector(".calculating__result span");let t,n,o,s,a;function r(){e.textContent=t&&n&&o&&s&&a?"female"===t?Math.round((447.6+9.2*o+3.1*n-4.3*s)*a):Math.round((88.36+13.4*o+4.8*n-5.7*s)*a):"____"}function i(e,t){document.querySelectorAll(e).forEach((e=>{e.classList.remove(t),e.getAttribute("id")===localStorage.getItem("sex")&&e.classList.add(t),e.getAttribute("data-ratio")===localStorage.getItem("ratio")&&e.classList.add(t)}))}function c(e,n){const o=document.querySelectorAll(e);o.forEach((e=>{e.addEventListener("click",(e=>{e.target.getAttribute("data-ratio")?(a=+e.target.getAttribute("data-ratio"),localStorage.setItem("ratio",+e.target.getAttribute("data-ratio"))):(t=e.target.getAttribute("id"),localStorage.setItem("sex",e.target.getAttribute("id"))),o.forEach((e=>{e.classList.remove(n)})),e.target.classList.add(n),r()}))}))}function l(e){const t=document.querySelector(e);t.addEventListener("input",(()=>{switch(t.value.match(/\D/g)?t.style.border="1px solid red":t.style.border="none",t.getAttribute("id")){case"height":n=+t.value;break;case"weight":o=+t.value;break;case"age":s=+t.value}r()}))}localStorage.getItem("sex")?t=localStorage.getItem("sex"):(t="female",localStorage.setItem("sex","female")),localStorage.getItem("ratio")?a=localStorage.getItem("ratio"):(a=1.375,localStorage.setItem("ratio",1.375)),r(),i("#gender div","calculating__choose-item_active"),i(".calculating__choose_big div","calculating__choose-item_active"),c("#gender div","calculating__choose-item_active"),c(".calculating__choose_big div","calculating__choose-item_active"),l("#height"),l("#weight"),l("#age")}},996:e=>{e.exports=function(){class e{constructor(e,t,n,o,s,a,...r){this.src=e,this.alt=t,this.title=n,this.descr=o,this.price=s,this.classes=r,this.parent=document.querySelector(a),this.transfer=27,this.changeToUAH()}changeToUAH(){this.price=this.price*this.transfer}render(){const e=document.createElement("div");0===this.classes.length?(this.classes="menu__item",e.classList.add(this.classes)):this.classes.forEach((t=>e.classList.add(t))),e.innerHTML=`\n                <img src=${this.src} alt=${this.alt}>\n                <h3 class="menu__item-subtitle">${this.title}</h3>\n                <div class="menu__item-descr">${this.descr}</div>\n                <div class="menu__item-divider"></div>\n                <div class="menu__item-price">\n                    <div class="menu__item-cost">Цена:</div>\n                    <div class="menu__item-total"><span>${this.price}</span> грн/день</div>\n                </div>\n            `,this.parent.append(e)}}getResource("http://localhost:3000/menu").then((t=>{t.forEach((({img:t,altimg:n,title:o,descr:s,price:a})=>{new e(t,n,o,s,a,".menu .container").render()}))}))}},824:(e,t,n)=>{(e=n.nmd(e)).export=function(){const e=document.querySelectorAll("form");e.forEach((e=>{var o;(o=e).addEventListener("submit",(e=>{e.preventDefault();let s=document.createElement("img");s.src="img/form/spinner.svg",s.style.cssText="\n                display: block;\n                margin: 0 auto;\n            ",o.insertAdjacentElement("afterend",s);const a=new FormData(o),r=JSON.stringify(Object.fromEntries(a.entries()));t("http://localhost:3000/requests",r).then((e=>{console.log(e),n("Спасибо! Скоро мы с вами свяжемся"),s.remove()})).catch((()=>{n("Что-то пошло не так...")})).finally((()=>{o.reset()}))}))}));const t=async(e,t)=>{let n=await fetch(e,{method:"POST",headers:{"Content-Type":"application/json"},body:t});return await n.json()};function n(e){const t=document.querySelector(".modal__dialog");t.classList.add("hide"),openModal();const n=document.createElement("div");n.classList.add("modal__dialog"),n.innerHTML=`\n            <div class="modal__content">\n                <div class="modal__close" data-close>×</div>\n                <div class="modal__title">${e}</div>\n            </div>\n        `,document.querySelector(".modal").append(n),setTimeout((()=>{n.remove(),t.classList.add("show"),t.classList.remove("hide"),closeModal()}),4e3)}}},221:(e,t,n)=>{(e=n.nmd(e)).export=function(){const e=document.querySelectorAll("[data-modal]"),t=document.querySelector(".modal");function n(){t.classList.add("hide"),t.classList.remove("show"),document.body.style.overflow=""}function o(){t.classList.add("show"),t.classList.remove("hide"),document.body.style.overflow="hidden",clearInterval(s)}e.forEach((e=>{e.addEventListener("click",o)})),t.addEventListener("click",(e=>{e.target!==t&&""!=e.target.getAttribute("data-close")||n()})),document.addEventListener("keydown",(e=>{"Escape"===e.code&&t.classList.contains("show")&&n()}));const s=setTimeout(o,3e5);window.addEventListener("scroll",(function e(){window.pageYOffset+document.documentElement.clientHeight>=document.documentElement.scrollHeight&&(o(),window.removeEventListener("scroll",e))}))}},459:e=>{e.exports=function(){let e=0,t=1;const n=document.querySelectorAll(".offer__slide"),o=document.querySelector(".offer__slider"),s=document.querySelector(".offer__slider-prev"),a=document.querySelector(".offer__slider-next"),r=document.querySelector("#total"),i=document.querySelector("#current"),c=document.querySelector(".offer__slider-wrapper"),l=window.getComputedStyle(c).width,d=document.querySelector(".offer__slider-inner");n.length<10?(r.textContent=`0${n.length}`,i.textContent=`0${t}`):(r.textContent=n.length,i.textContent=t),d.style.width=100*n.length+"%",d.style.display="flex",d.style.transition="0.5s all",c.style.overflow="hidden",n.forEach((e=>{e.style.width=l})),o.style.position="relative";const u=document.createElement("ol"),m=[];u.classList.add("carousel-indicators"),u.style.cssText="\n        position: absolute;\n        right: 0;\n        bottom: 0;\n        left: 0;\n        z-index: 15;\n        display: flex;\n        justify-content: center;\n        margin-right: 15%;\n        margin-left: 15%;\n        list-style: none;\n    ",o.append(u);for(let e=0;e<n.length;e++){const t=document.createElement("li");t.setAttribute("data-slide-to",e+1),t.style.cssText="\n            box-sizing: content-box;\n            flex: 0 1 auto;\n            width: 30px;\n            height: 6px;\n            margin-right: 3px;\n            margin-left: 3px;\n            cursor: pointer;\n            background-color: #fff;\n            background-clip: padding-box;\n            border-top: 10px solid transparent;\n            border-bottom: 10px solid transparent;\n            opacity: .5;\n            transition: opacity .6s ease;\n        ",0==e&&(t.style.opacity=1),u.append(t),m.push(t)}function h(e){return+e.replace(/\D/g,"")}a.addEventListener("click",(()=>{e==h(l)*(n.length-1)?e=0:e+=h(l),d.style.transform=`translateX(-${e}px)`,t==n.length?t=1:t++,n.length<10?i.textContent=`0${t}`:i.textContent=t,m.forEach((e=>e.style.opacity=".5")),m[t-1].style.opacity=1})),s.addEventListener("click",(()=>{0==e?e=h(l)*(n.length-1):e-=h(l),d.style.transform=`translateX(-${e}px)`,1==t?t=n.length:t--,n.length<10?i.textContent=`0${t}`:i.textContent=t,m.forEach((e=>e.style.opacity=".5")),m[t-1].style.opacity=1})),m.forEach((o=>{o.addEventListener("click",(o=>{const s=o.target.getAttribute("data-slide-to");t=s,e=h(l)*(s-1),d.style.transform=`translateX(-${e}px)`,n.length<10?i.textContent=`0${t}`:i.textContent=t,m.forEach((e=>e.style.opacity=".5")),m[t-1].style.opacity=1}))}))}},523:e=>{e.exports=function(){let e=document.querySelectorAll(".tabheader__item"),t=document.querySelectorAll(".tabcontent"),n=document.querySelector(".tabheader__items");function o(){t.forEach((e=>{e.classList.add("hide"),e.classList.remove("show","fade")})),e.forEach((e=>{e.classList.remove("tabheader__item_active")}))}function s(n=0){t[n].classList.add("show","fade"),t[n].classList.remove("hide"),e[n].classList.add("tabheader__item_active")}o(),s(),n.addEventListener("click",(function(t){const n=t.target;n&&n.classList.contains("tabheader__item")&&e.forEach(((e,t)=>{n==e&&(o(),s(t))}))}))}},945:e=>{e.exports=function(){function e(e){return e>=0&&e<10?"0"+e:e}!function(t,n){const o=document.querySelector(".timer"),s=o.querySelector("#days"),a=o.querySelector("#hours"),r=o.querySelector("#minutes"),i=o.querySelector("#seconds"),c=setInterval(l,1e3);function l(){const t=function(e){const t=Date.parse(e)-Date.parse(new Date),n=Math.floor(t/864e5),o=Math.floor(t/1e3%60),s=Math.floor(t/1e3/60%60);return{total:t,days:n,hours:Math.floor(t/36e5%24),minutes:s,seconds:o}}("2023-06-11");s.innerHTML=e(t.days),a.innerHTML=e(t.hours),r.innerHTML=e(t.minutes),i.innerHTML=e(t.seconds),t.total<=0&&clearInterval(c)}l()}()}}},t={};function n(o){var s=t[o];if(void 0!==s)return s.exports;var a=t[o]={id:o,loaded:!1,exports:{}};return e[o](a,a.exports,n),a.loaded=!0,a.exports}n.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),window.addEventListener("DOMContentLoaded",(()=>{const e=n(523),t=n(221),o=n(945),s=n(996),a=n(888),r=n(824),i=n(459);e(),t(),o(),s(),a(),r(),i()}))})();