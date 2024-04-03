import U,{useRef as E,useEffect as R}from"react";var v=[["Afghanistan","af","93"],["Albania","al","355"],["Algeria","dz","213"],["American Samoa","as","1",5,["684"]],["Andorra","ad","376"],["Angola","ao","244"],["Anguilla","ai","1",6,["264"]],["Antigua & Barbuda","ag","1",7,["268"]],["Argentina","ar","54"],["Armenia","am","374"],["Aruba","aw","297"],["Ascension Island","ac","247"],["Australia","au","61",0],["Austria","at","43"],["Azerbaijan","az","994"],["Bahamas","bs","1",8,["242"]],["Bahrain","bh","973"],["Bangladesh","bd","880"],["Barbados","bb","1",9,["246"]],["Belarus","by","375"],["Belgium","be","32"],["Belize","bz","501"],["Benin","bj","229"],["Bermuda","bm","1",10,["441"]],["Bhutan","bt","975"],["Bolivia","bo","591"],["Bosnia & Herzegovina","ba","387"],["Botswana","bw","267"],["Brazil","br","55"],["British Indian Ocean Territory","io","246"],["British Virgin Islands","vg","1",11,["284"]],["Brunei","bn","673"],["Bulgaria","bg","359"],["Burkina Faso","bf","226"],["Burundi","bi","257"],["Cambodia","kh","855"],["Cameroon","cm","237"],["Canada","ca","1",1,["204","226","236","249","250","263","289","306","343","354","365","367","368","382","387","403","416","418","428","431","437","438","450","584","468","474","506","514","519","548","579","581","584","587","604","613","639","647","672","683","705","709","742","753","778","780","782","807","819","825","867","873","902","905"]],["Cape Verde","cv","238"],["Caribbean Netherlands","bq","599",1,["3","4","7"]],["Cayman Islands","ky","1",12,["345"]],["Central African Republic","cf","236"],["Chad","td","235"],["Chile","cl","56"],["China","cn","86"],["Christmas Island","cx","61",2,["89164"]],["Cocos (Keeling) Islands","cc","61",1,["89162"]],["Colombia","co","57"],["Comoros","km","269"],["Congo - Brazzaville","cg","242"],["Congo - Kinshasa","cd","243"],["Cook Islands","ck","682"],["Costa Rica","cr","506"],["C\xF4te d\u2019Ivoire","ci","225"],["Croatia","hr","385"],["Cuba","cu","53"],["Cura\xE7ao","cw","599",0],["Cyprus","cy","357"],["Czech Republic","cz","420"],["Denmark","dk","45"],["Djibouti","dj","253"],["Dominica","dm","1",13,["767"]],["Dominican Republic","do","1",2,["809","829","849"]],["Ecuador","ec","593"],["Egypt","eg","20"],["El Salvador","sv","503"],["Equatorial Guinea","gq","240"],["Eritrea","er","291"],["Estonia","ee","372"],["Eswatini","sz","268"],["Ethiopia","et","251"],["Falkland Islands","fk","500"],["Faroe Islands","fo","298"],["Fiji","fj","679"],["Finland","fi","358",0],["France","fr","33"],["French Guiana","gf","594"],["French Polynesia","pf","689"],["Gabon","ga","241"],["Gambia","gm","220"],["Georgia","ge","995"],["Germany","de","49"],["Ghana","gh","233"],["Gibraltar","gi","350"],["Greece","gr","30"],["Greenland","gl","299"],["Grenada","gd","1",14,["473"]],["Guadeloupe","gp","590",0],["Guam","gu","1",15,["671"]],["Guatemala","gt","502"],["Guernsey","gg","44",1,["1481","7781","7839","7911"]],["Guinea","gn","224"],["Guinea-Bissau","gw","245"],["Guyana","gy","592"],["Haiti","ht","509"],["Honduras","hn","504"],["Hong Kong","hk","852"],["Hungary","hu","36"],["Iceland","is","354"],["India","in","91"],["Indonesia","id","62"],["Iran","ir","98"],["Iraq","iq","964"],["Ireland","ie","353"],["Isle of Man","im","44",2,["1624","74576","7524","7924","7624"]],["Israel","il","972"],["Italy","it","39",0],["Jamaica","jm","1",4,["876","658"]],["Japan","jp","81"],["Jersey","je","44",3,["1534","7509","7700","7797","7829","7937"]],["Jordan","jo","962"],["Kazakhstan","kz","7",1,["33","7"]],["Kenya","ke","254"],["Kiribati","ki","686"],["Kosovo","xk","383"],["Kuwait","kw","965"],["Kyrgyzstan","kg","996"],["Laos","la","856"],["Latvia","lv","371"],["Lebanon","lb","961"],["Lesotho","ls","266"],["Liberia","lr","231"],["Libya","ly","218"],["Liechtenstein","li","423"],["Lithuania","lt","370"],["Luxembourg","lu","352"],["Macau","mo","853"],["Madagascar","mg","261"],["Malawi","mw","265"],["Malaysia","my","60"],["Maldives","mv","960"],["Mali","ml","223"],["Malta","mt","356"],["Marshall Islands","mh","692"],["Martinique","mq","596"],["Mauritania","mr","222"],["Mauritius","mu","230"],["Mayotte","yt","262",1,["269","639"]],["Mexico","mx","52"],["Micronesia","fm","691"],["Moldova","md","373"],["Monaco","mc","377"],["Mongolia","mn","976"],["Montenegro","me","382"],["Montserrat","ms","1",16,["664"]],["Morocco","ma","212",0],["Mozambique","mz","258"],["Myanmar (Burma)","mm","95"],["Namibia","na","264"],["Nauru","nr","674"],["Nepal","np","977"],["Netherlands","nl","31"],["New Caledonia","nc","687"],["New Zealand","nz","64"],["Nicaragua","ni","505"],["Niger","ne","227"],["Nigeria","ng","234"],["Niue","nu","683"],["Norfolk Island","nf","672"],["North Korea","kp","850"],["North Macedonia","mk","389"],["Northern Mariana Islands","mp","1",17,["670"]],["Norway","no","47",0],["Oman","om","968"],["Pakistan","pk","92"],["Palau","pw","680"],["Palestine","ps","970"],["Panama","pa","507"],["Papua New Guinea","pg","675"],["Paraguay","py","595"],["Peru","pe","51"],["Philippines","ph","63"],["Poland","pl","48"],["Portugal","pt","351"],["Puerto Rico","pr","1",3,["787","939"]],["Qatar","qa","974"],["R\xE9union","re","262",0],["Romania","ro","40"],["Russia","ru","7",0],["Rwanda","rw","250"],["Samoa","ws","685"],["San Marino","sm","378"],["S\xE3o Tom\xE9 & Pr\xEDncipe","st","239"],["Saudi Arabia","sa","966"],["Senegal","sn","221"],["Serbia","rs","381"],["Seychelles","sc","248"],["Sierra Leone","sl","232"],["Singapore","sg","65"],["Sint Maarten","sx","1",21,["721"]],["Slovakia","sk","421"],["Slovenia","si","386"],["Solomon Islands","sb","677"],["Somalia","so","252"],["South Africa","za","27"],["South Korea","kr","82"],["South Sudan","ss","211"],["Spain","es","34"],["Sri Lanka","lk","94"],["St Barth\xE9lemy","bl","590",1],["St Helena","sh","290"],["St Kitts & Nevis","kn","1",18,["869"]],["St Lucia","lc","1",19,["758"]],["St Martin","mf","590",2],["St Pierre & Miquelon","pm","508"],["St Vincent & Grenadines","vc","1",20,["784"]],["Sudan","sd","249"],["Suriname","sr","597"],["Svalbard & Jan Mayen","sj","47",1,["79"]],["Sweden","se","46"],["Switzerland","ch","41"],["Syria","sy","963"],["Taiwan","tw","886"],["Tajikistan","tj","992"],["Tanzania","tz","255"],["Thailand","th","66"],["Timor-Leste","tl","670"],["Togo","tg","228"],["Tokelau","tk","690"],["Tonga","to","676"],["Trinidad & Tobago","tt","1",22,["868"]],["Tunisia","tn","216"],["Turkey","tr","90"],["Turkmenistan","tm","993"],["Turks & Caicos Islands","tc","1",23,["649"]],["Tuvalu","tv","688"],["Uganda","ug","256"],["Ukraine","ua","380"],["United Arab Emirates","ae","971"],["United Kingdom","gb","44",0],["United States","us","1",0],["Uruguay","uy","598"],["US Virgin Islands","vi","1",24,["340"]],["Uzbekistan","uz","998"],["Vanuatu","vu","678"],["Vatican City","va","39",1,["06698"]],["Venezuela","ve","58"],["Vietnam","vn","84"],["Wallis & Futuna","wf","681"],["Western Sahara","eh","212",1,["5288","5289"]],["Yemen","ye","967"],["Zambia","zm","260"],["Zimbabwe","zw","263"],["\xC5land Islands","ax","358",1,["18"]]],w=[];for(let l=0;l<v.length;l++){let e=v[l];w[l]={name:e[0],iso2:e[1],dialCode:e[2],priority:e[3]||0,areaCodes:e[4]||null,nodeById:{}}}var C=w;var D=0,L={allowDropdown:!0,autoPlaceholder:"polite",countrySearch:!0,containerClass:"",customPlaceholder:null,dropdownContainer:null,excludeCountries:[],fixDropdownWidth:!0,formatAsYouType:!0,formatOnDisplay:!0,geoIpLookup:null,hiddenInput:null,i18n:{},initialCountry:"",nationalMode:!0,onlyCountries:[],placeholderNumberType:"MOBILE",preferredCountries:[],showFlags:!0,showSelectedDialCode:!1,strictMode:!1,useFullscreenPopup:typeof navigator<"u"&&typeof window<"u"?/Android.+Mobile|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)||window.innerWidth<=500:!1,utilsScript:""},N=["800","822","833","844","855","866","877","880","881","882","883","884","885","886","887","888","889"],f=l=>l.replace(/\D/g,""),I=(l="")=>l.normalize("NFD").replace(/[\u0300-\u036f]/g,"").toLowerCase(),A=(l,e,t)=>{t&&!l.classList.contains(e)?l.classList.add(e):!t&&l.classList.contains(e)&&l.classList.remove(e)},_=l=>{let e=f(l);if(e.charAt(0)==="1"){let t=e.substr(1,3);return N.indexOf(t)!==-1}return!1},M=(l,e)=>l.name<e.name?-1:l.name>e.name?1:0,k=(l,e,t,i)=>{if(t===0&&!i)return 0;let n=0;for(let s=0;s<e.length;s++){if(/[+0-9]/.test(e[s])&&n++,n===l&&!i)return s+1;if(i&&n===l+1)return s}return e.length},p=(l,e,t)=>{let i=document.createElement(l);return e&&Object.entries(e).forEach(([n,s])=>i.setAttribute(n,s)),t&&t.appendChild(i),i},y=l=>{let{instances:e}=window.intlTelInputGlobals;Object.values(e).forEach(t=>t[l]())},b=class{id;promise;telInput;activeItem;highlightedItem;options;hadInitialPlaceholder;isRTL;selectedCountryData;countries;dialCodeMaxLen;dialCodeToIso2Map;dialCodes;preferredCountries;countryContainer;selectedCountry;selectedCountryInner;selectedCountryA11yText;selectedDialCode;dropdownArrow;dropdownContent;searchInput;searchResultsA11yText;countryList;dropdown;hiddenInput;hiddenInputCountry;maxCoreNumberLength;defaultCountry;_handleHiddenInputSubmit;_handleLabelClick;_handleClickSelectedCountry;_handleCountryContainerKeydown;_handleInputEvent;_handleKeydownEvent;_handleWindowScroll;_handleMouseoverCountryList;_handleClickCountryList;_handleClickOffToClose;_handleKeydownOnDropdown;_handleSearchChange;resolveAutoCountryPromise;rejectAutoCountryPromise;resolveUtilsScriptPromise;rejectUtilsScriptPromise;constructor(e,t={}){this.id=D++,this.telInput=e,this.activeItem=null,this.highlightedItem=null,this.options=Object.assign({},L,t),this.hadInitialPlaceholder=!!e.getAttribute("placeholder")}_init(){this.options.useFullscreenPopup&&(this.options.fixDropdownWidth=!1),this.options.countrySearch&&!this.options.useFullscreenPopup&&(this.options.fixDropdownWidth=!0);let e=this.options.allowDropdown&&!this.options.showSelectedDialCode;!this.options.showFlags&&e&&(this.options.showFlags=!0),this.options.useFullscreenPopup&&!this.options.dropdownContainer&&(this.options.dropdownContainer=document.body),this.isRTL=!!this.telInput.closest("[dir=rtl]");let t=new Promise((n,s)=>{this.resolveAutoCountryPromise=n,this.rejectAutoCountryPromise=s}),i=new Promise((n,s)=>{this.resolveUtilsScriptPromise=n,this.rejectUtilsScriptPromise=s});this.promise=Promise.all([t,i]),this.selectedCountryData={},this._processCountryData(),this._generateMarkup(),this._setInitialState(),this._initListeners(),this._initRequests()}_processCountryData(){this._processAllCountries(),this._processDialCodes(),this._processPreferredCountries(),this._translateCountryNames(),(this.options.onlyCountries.length||this.options.i18n)&&this.countries.sort(M)}_addToDialCodeMap(e,t,i){t.length>this.dialCodeMaxLen&&(this.dialCodeMaxLen=t.length),this.dialCodeToIso2Map.hasOwnProperty(t)||(this.dialCodeToIso2Map[t]=[]);for(let s=0;s<this.dialCodeToIso2Map[t].length;s++)if(this.dialCodeToIso2Map[t][s]===e)return;let n=i!==void 0?i:this.dialCodeToIso2Map[t].length;this.dialCodeToIso2Map[t][n]=e}_processAllCountries(){let{onlyCountries:e,excludeCountries:t}=this.options;if(e.length){let i=e.map(n=>n.toLowerCase());this.countries=C.filter(n=>i.indexOf(n.iso2)>-1)}else if(t.length){let i=t.map(n=>n.toLowerCase());this.countries=C.filter(n=>i.indexOf(n.iso2)===-1)}else this.countries=C}_translateCountryNames(){for(let e=0;e<this.countries.length;e++){let t=this.countries[e].iso2.toLowerCase();this.options.i18n.hasOwnProperty(t)&&(this.countries[e].name=this.options.i18n[t])}}_processDialCodes(){this.dialCodes={},this.dialCodeMaxLen=0,this.dialCodeToIso2Map={};for(let e=0;e<this.countries.length;e++){let t=this.countries[e];this.dialCodes[t.dialCode]||(this.dialCodes[t.dialCode]=!0),this._addToDialCodeMap(t.iso2,t.dialCode,t.priority)}for(let e=0;e<this.countries.length;e++){let t=this.countries[e];if(t.areaCodes){let i=this.dialCodeToIso2Map[t.dialCode][0];for(let n=0;n<t.areaCodes.length;n++){let s=t.areaCodes[n];for(let r=1;r<s.length;r++){let d=t.dialCode+s.substr(0,r);this._addToDialCodeMap(i,d),this._addToDialCodeMap(t.iso2,d)}this._addToDialCodeMap(t.iso2,t.dialCode+s)}}}}_processPreferredCountries(){this.preferredCountries=[];for(let e=0;e<this.options.preferredCountries.length;e++){let t=this.options.preferredCountries[e].toLowerCase(),i=this._getCountryData(t,!0);i&&this.preferredCountries.push(i)}}_generateMarkup(){this.telInput.classList.add("iti__tel-input"),!this.telInput.hasAttribute("autocomplete")&&!(this.telInput.form&&this.telInput.form.hasAttribute("autocomplete"))&&this.telInput.setAttribute("autocomplete","off");let{allowDropdown:e,showSelectedDialCode:t,showFlags:i,containerClass:n,hiddenInput:s,dropdownContainer:r,fixDropdownWidth:d,useFullscreenPopup:a,countrySearch:o,i18n:c}=this.options,u="iti";e&&(u+=" iti--allow-dropdown"),t&&(u+=" iti--show-selected-dial-code"),i&&(u+=" iti--show-flags"),n&&(u+=` ${n}`),a||(u+=" iti--inline-dropdown");let h=p("div",{class:u});if(this.telInput.parentNode?.insertBefore(h,this.telInput),(i||t)&&(this.countryContainer=p("div",{class:"iti__country-container"},h),this.selectedCountry=p("button",{type:"button",class:"iti__selected-country",...e&&{"aria-expanded":"false","aria-label":this.options.i18n.selectedCountryAriaLabel||"Selected country","aria-haspopup":o?"true":"listbox","aria-controls":o?`iti-${this.id}__dropdown-content`:`iti-${this.id}__country-listbox`,...o?{role:"combobox"}:{}}},this.countryContainer),this.selectedCountryInner=p("div",null,this.selectedCountry),this.selectedCountryA11yText=p("span",{class:"iti__a11y-text"},this.selectedCountryInner)),h.appendChild(this.telInput),this.selectedCountry&&this.telInput.disabled&&this.selectedCountry.setAttribute("aria-disabled","true"),t&&(this.selectedDialCode=p("div",{class:"iti__selected-dial-code"},this.selectedCountry)),e){this.telInput.disabled||this.selectedCountry.setAttribute("tabindex","0"),this.dropdownArrow=p("div",{class:"iti__arrow","aria-hidden":"true"},this.selectedCountry);let m=d?"":"iti--flexible-dropdown-width";if(this.dropdownContent=p("div",{id:`iti-${this.id}__dropdown-content`,class:`iti__dropdown-content iti__hide ${m}`}),o&&(this.searchInput=p("input",{type:"text",class:"iti__search-input",placeholder:c.searchPlaceholder||"Search",role:"combobox","aria-expanded":"true","aria-label":c.searchPlaceholder||"Search","aria-controls":`iti-${this.id}__country-listbox`,"aria-autocomplete":"list",autocomplete:"off"},this.dropdownContent),this.searchResultsA11yText=p("span",{class:"iti__a11y-text"},this.dropdownContent)),this.countryList=p("ul",{class:"iti__country-list",id:`iti-${this.id}__country-listbox`,role:"listbox","aria-label":c.countryListAriaLabel||"List of countries"},this.dropdownContent),this.preferredCountries.length&&!o&&(this._appendListItems(this.preferredCountries,"iti__preferred",!0),p("li",{class:"iti__divider","aria-hidden":"true"},this.countryList)),this._appendListItems(this.countries,"iti__standard"),o&&this._updateSearchResultsText(),r){let g="iti iti--container";a?g+=" iti--fullscreen-popup":g+=" iti--inline-dropdown",o&&(g+=" iti--country-search"),this.dropdown=p("div",{class:g}),this.dropdown.appendChild(this.dropdownContent)}else this.countryContainer.appendChild(this.dropdownContent)}if(s){let m=this.telInput.getAttribute("name")||"",g=s(m);g.phone&&(this.hiddenInput=p("input",{type:"hidden",name:g.phone}),h.appendChild(this.hiddenInput)),g.country&&(this.hiddenInputCountry=p("input",{type:"hidden",name:g.country}),h.appendChild(this.hiddenInputCountry))}}_appendListItems(e,t,i){for(let n=0;n<e.length;n++){let s=e[n],r=i?"-preferred":"",d=p("li",{id:`iti-${this.id}__item-${s.iso2}${r}`,class:`iti__country ${t}`,tabindex:"-1",role:"option","data-dial-code":s.dialCode,"data-country-code":s.iso2,"aria-selected":"false"},this.countryList);s.nodeById[this.id]=d;let a="";this.options.showFlags&&(a+=`<div class='iti__flag-box'><div class='iti__flag iti__${s.iso2}'></div></div>`),a+=`<span class='iti__country-name'>${s.name}</span>`,a+=`<span class='iti__dial-code'>+${s.dialCode}</span>`,d.insertAdjacentHTML("beforeend",a)}}_setInitialState(e=!1){let t=this.telInput.getAttribute("value"),i=this.telInput.value,s=t&&t.charAt(0)==="+"&&(!i||i.charAt(0)!=="+")?t:i,r=this._getDialCode(s),d=_(s),{initialCountry:a}=this.options;if(r&&!d)this._updateCountryFromNumber(s);else if(a!=="auto"||e){let o=a?a.toLowerCase():"";o&&this._getCountryData(o,!0)?this._setCountry(o):r&&d?this._setCountry("us"):this._setCountry()}s&&this._updateValFromNumber(s)}_initListeners(){this._initTelInputListeners(),this.options.allowDropdown&&this._initDropdownListeners(),(this.hiddenInput||this.hiddenInputCountry)&&this.telInput.form&&this._initHiddenInputListener()}_initHiddenInputListener(){this._handleHiddenInputSubmit=()=>{this.hiddenInput&&(this.hiddenInput.value=this.getNumber()),this.hiddenInputCountry&&(this.hiddenInputCountry.value=this.getSelectedCountryData().iso2||"")},this.telInput.form?.addEventListener("submit",this._handleHiddenInputSubmit)}_initDropdownListeners(){this._handleLabelClick=t=>{this.dropdownContent.classList.contains("iti__hide")?this.telInput.focus():t.preventDefault()};let e=this.telInput.closest("label");e&&e.addEventListener("click",this._handleLabelClick),this._handleClickSelectedCountry=()=>{this.dropdownContent.classList.contains("iti__hide")&&!this.telInput.disabled&&!this.telInput.readOnly&&this._openDropdown()},this.selectedCountry.addEventListener("click",this._handleClickSelectedCountry),this._handleCountryContainerKeydown=t=>{this.dropdownContent.classList.contains("iti__hide")&&["ArrowUp","ArrowDown"," ","Enter"].includes(t.key)&&(t.preventDefault(),t.stopPropagation(),this._openDropdown()),t.key==="Tab"&&this._closeDropdown()},this.countryContainer.addEventListener("keydown",this._handleCountryContainerKeydown)}_initRequests(){this.options.utilsScript&&!window.intlTelInputUtils?window.intlTelInputGlobals.documentReady()?window.intlTelInputGlobals.loadUtils(this.options.utilsScript):window.addEventListener("load",()=>{window.intlTelInputGlobals.loadUtils(this.options.utilsScript)}):this.resolveUtilsScriptPromise(),this.options.initialCountry==="auto"&&!this.selectedCountryData.iso2?this._loadAutoCountry():this.resolveAutoCountryPromise()}_loadAutoCountry(){window.intlTelInputGlobals.autoCountry?this.handleAutoCountry():window.intlTelInputGlobals.startedLoadingAutoCountry||(window.intlTelInputGlobals.startedLoadingAutoCountry=!0,typeof this.options.geoIpLookup=="function"&&this.options.geoIpLookup((e="")=>{let t=e.toLowerCase();t&&this._getCountryData(t,!0)?(window.intlTelInputGlobals.autoCountry=t,setTimeout(()=>y("handleAutoCountry"))):(this._setInitialState(!0),y("rejectAutoCountryPromise"))},()=>{this._setInitialState(!0),y("rejectAutoCountryPromise")}))}_initTelInputListeners(){let{strictMode:e,formatAsYouType:t}=this.options,i=!1;this._handleInputEvent=n=>{this._updateCountryFromNumber(this.telInput.value)&&this._triggerCountryChange();let s=n&&n.data&&/[^+0-9]/.test(n.data),r=n&&n.inputType==="insertFromPaste"&&this.telInput.value;if(s||r&&!e?i=!0:/[^+0-9]/.test(this.telInput.value)||(i=!1),t&&!i){let d=this.telInput.selectionStart||0,o=this.telInput.value.substring(0,d).replace(/[^+0-9]/g,"").length,c=n&&n.inputType==="deleteContentForward",u=this._formatNumberAsYouType(),h=k(o,u,d,c);this.telInput.value=u,this.telInput.setSelectionRange(h,h)}},this.telInput.addEventListener("input",this._handleInputEvent),e&&(this._handleKeydownEvent=n=>{if(n.key.length===1&&!n.altKey&&!n.ctrlKey&&!n.metaKey){let s=this.telInput.selectionStart===0&&n.key==="+",r=/^[0-9]$/.test(n.key),d=s||r,a=this._getFullNumber(),o=window.intlTelInputUtils.getCoreNumber(a,this.selectedCountryData.iso2),c=this.maxCoreNumberLength&&o.length>=this.maxCoreNumberLength;(!d||c)&&n.preventDefault()}},this.telInput.addEventListener("keydown",this._handleKeydownEvent))}_cap(e){let t=parseInt(this.telInput.getAttribute("maxlength")||"",10);return t&&e.length>t?e.substr(0,t):e}_trigger(e){let t=new Event(e,{bubbles:!0,cancelable:!0});this.telInput.dispatchEvent(t)}_openDropdown(){let{fixDropdownWidth:e,countrySearch:t}=this.options;if(e&&(this.dropdownContent.style.width=`${this.telInput.offsetWidth}px`),this.dropdownContent.classList.remove("iti__hide"),this.selectedCountry.setAttribute("aria-expanded","true"),this._setDropdownPosition(),this.activeItem&&!t)this._highlightListItem(this.activeItem,!1),this._scrollTo(this.activeItem,!0);else{let i=this.countryList.firstElementChild;i&&(this._highlightListItem(i,!1),this.countryList.scrollTop=0),t&&this.searchInput.focus()}this._bindDropdownListeners(),this.dropdownArrow.classList.add("iti__arrow--up"),this._trigger("open:countrydropdown")}_setDropdownPosition(){if(this.options.dropdownContainer&&this.options.dropdownContainer.appendChild(this.dropdown),!this.options.useFullscreenPopup){let e=this.telInput.getBoundingClientRect(),t=document.documentElement.scrollTop,i=e.top+t,n=this.dropdownContent.offsetHeight,s=i+this.telInput.offsetHeight+n<t+window.innerHeight,r=i-n>t,d=!this.options.countrySearch&&!s&&r;if(A(this.dropdownContent,"iti__dropdown-content--dropup",d),this.options.dropdownContainer){let a=d?0:this.telInput.offsetHeight;this.dropdown.style.top=`${i+a}px`,this.dropdown.style.left=`${e.left+document.body.scrollLeft}px`,this._handleWindowScroll=()=>this._closeDropdown(),window.addEventListener("scroll",this._handleWindowScroll)}}}_bindDropdownListeners(){this._handleMouseoverCountryList=n=>{let s=n.target?.closest(".iti__country");s&&this._highlightListItem(s,!1)},this.countryList.addEventListener("mouseover",this._handleMouseoverCountryList),this._handleClickCountryList=n=>{let s=n.target?.closest(".iti__country");s&&this._selectListItem(s)},this.countryList.addEventListener("click",this._handleClickCountryList);let e=!0;this._handleClickOffToClose=()=>{e||this._closeDropdown(),e=!1},document.documentElement.addEventListener("click",this._handleClickOffToClose);let t="",i=null;if(this._handleKeydownOnDropdown=n=>{["ArrowUp","ArrowDown","Enter","Escape"].includes(n.key)&&(n.preventDefault(),n.stopPropagation(),n.key==="ArrowUp"||n.key==="ArrowDown"?this._handleUpDownKey(n.key):n.key==="Enter"?this._handleEnterKey():n.key==="Escape"&&this._closeDropdown()),!this.options.countrySearch&&/^[a-zA-ZÀ-ÿа-яА-Я ]$/.test(n.key)&&(n.stopPropagation(),i&&clearTimeout(i),t+=n.key.toLowerCase(),this._searchForCountry(t),i=setTimeout(()=>{t=""},1e3))},document.addEventListener("keydown",this._handleKeydownOnDropdown),this.options.countrySearch){let n=()=>{let r=this.searchInput.value.trim();r?this._filterCountries(r):this._filterCountries("",!0)},s=null;this._handleSearchChange=()=>{s&&clearTimeout(s),s=setTimeout(()=>{n(),s=null},100)},this.searchInput.addEventListener("input",this._handleSearchChange),this.searchInput.addEventListener("click",r=>r.stopPropagation())}}_filterCountries(e,t=!1){let i=!0;this.countryList.innerHTML="";let n=I(e);for(let s=0;s<this.countries.length;s++){let r=this.countries[s],d=I(r.name),a=`+${r.dialCode}`;if(t||d.includes(n)||a.includes(n)||r.iso2.includes(n)){let o=r.nodeById[this.id];o&&this.countryList.appendChild(o),i&&(this._highlightListItem(o,!1),i=!1)}}this.countryList.scrollTop=0,this._updateSearchResultsText()}_updateSearchResultsText(){let{i18n:e}=this.options,t=this.countryList.childElementCount,i;t===0?i=e.zeroSearchResults||"No results found":t===1?i=e.oneSearchResult||"1 result found":i=e.multipleSearchResults?e.multipleSearchResults.replace("${count}",t.toString()):`${t} results found`,this.searchResultsA11yText.textContent=i}_handleUpDownKey(e){let t=e==="ArrowUp"?this.highlightedItem?.previousElementSibling:this.highlightedItem?.nextElementSibling;if(t?t.classList.contains("iti__divider")&&(t=e==="ArrowUp"?t.previousElementSibling:t.nextElementSibling):this.countryList.childElementCount>1&&(t=e==="ArrowUp"?this.countryList.lastElementChild:this.countryList.firstElementChild),t){this._scrollTo(t,!1);let i=!this.options.countrySearch;this._highlightListItem(t,i)}}_handleEnterKey(){this.highlightedItem&&this._selectListItem(this.highlightedItem)}_searchForCountry(e){for(let t=0;t<this.countries.length;t++){let i=this.countries[t];if(i.name.substr(0,e.length).toLowerCase()===e){let s=i.nodeById[this.id];this._highlightListItem(s,!1),this._scrollTo(s,!0);break}}}_updateValFromNumber(e){let t=e;if(this.options.formatOnDisplay&&window.intlTelInputUtils&&this.selectedCountryData){let i=this.options.nationalMode||t.charAt(0)!=="+"&&!this.options.showSelectedDialCode,{NATIONAL:n,INTERNATIONAL:s}=window.intlTelInputUtils.numberFormat,r=i?n:s;t=window.intlTelInputUtils.formatNumber(t,this.selectedCountryData.iso2,r)}t=this._beforeSetNumber(t),this.telInput.value=t}_updateCountryFromNumber(e){let t=e.indexOf("+"),i=t?e.substring(t):e,n=this.selectedCountryData.dialCode;i&&n==="1"&&i.charAt(0)!=="+"&&(i.charAt(0)!=="1"&&(i=`1${i}`),i=`+${i}`),this.options.showSelectedDialCode&&n&&i.charAt(0)!=="+"&&(i=`+${n}${i}`);let r=this._getDialCode(i,!0),d=f(i),a=null;if(r){let o=this.dialCodeToIso2Map[f(r)],c=o.indexOf(this.selectedCountryData.iso2)!==-1&&d.length<=r.length-1;if(!(n==="1"&&_(d))&&!c){for(let h=0;h<o.length;h++)if(o[h]){a=o[h];break}}}else i.charAt(0)==="+"&&d.length?a="":(!i||i==="+")&&!this.selectedCountryData.iso2&&(a=this.defaultCountry);return a!==null?this._setCountry(a):!1}_highlightListItem(e,t){let i=this.highlightedItem;i&&(i.classList.remove("iti__highlight"),i.setAttribute("aria-selected","false")),this.highlightedItem=e,this.highlightedItem.classList.add("iti__highlight"),this.highlightedItem.setAttribute("aria-selected","true"),this.selectedCountry.setAttribute("aria-activedescendant",e.getAttribute("id")||""),this.options.countrySearch&&this.searchInput.setAttribute("aria-activedescendant",e.getAttribute("id")||""),t&&this.highlightedItem.focus()}_getCountryData(e,t){for(let i=0;i<this.countries.length;i++)if(this.countries[i].iso2===e)return this.countries[i];if(t)return null;throw new Error(`No country data for '${e}'`)}_setCountry(e){let{allowDropdown:t,showSelectedDialCode:i,showFlags:n,countrySearch:s,i18n:r}=this.options,d=this.selectedCountryData.iso2?this.selectedCountryData:{};if(this.selectedCountryData=e?this._getCountryData(e,!1)||{}:{},this.selectedCountryData.iso2&&(this.defaultCountry=this.selectedCountryData.iso2),this.selectedCountryInner){let a="",o="";e?n&&(a=`iti__flag iti__${e}`,o=`${this.selectedCountryData.name} +${this.selectedCountryData.dialCode}`):(a="iti__flag iti__globe",o=r.noCountrySelected||"No country selected"),this.selectedCountryInner.className=a,this.selectedCountryA11yText.textContent=o}if(this._setSelectedCountryTitleAttribute(e,i),i){let a=this.selectedCountryData.dialCode?`+${this.selectedCountryData.dialCode}`:"";this.selectedDialCode.innerHTML=a;let o=this.selectedCountry.offsetWidth||this._getHiddenSelectedCountryWidth();this.isRTL?this.telInput.style.paddingRight=`${o+6}px`:this.telInput.style.paddingLeft=`${o+6}px`}if(this._updatePlaceholder(),this._updateMaxLength(),t&&!s){let a=this.activeItem;if(a&&(a.classList.remove("iti__active"),a.setAttribute("aria-selected","false")),e){let o=this.countryList.querySelector(`#iti-${this.id}__item-${e}-preferred`)||this.countryList.querySelector(`#iti-${this.id}__item-${e}`);o&&(o.setAttribute("aria-selected","true"),o.classList.add("iti__active"),this.activeItem=o)}}return d.iso2!==e}_updateMaxLength(){if(this.options.strictMode&&window.intlTelInputUtils)if(this.selectedCountryData.iso2){let e=window.intlTelInputUtils.numberType[this.options.placeholderNumberType],t=window.intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,!1,e,!0),i=t;for(;window.intlTelInputUtils.isPossibleNumber(t,this.selectedCountryData.iso2);)i=t,t+="0";let n=window.intlTelInputUtils.getCoreNumber(i,this.selectedCountryData.iso2);this.maxCoreNumberLength=n.length}else this.maxCoreNumberLength=null}_setSelectedCountryTitleAttribute(e=null,t){if(!this.selectedCountry)return;let i;e&&!t?i=`${this.selectedCountryData.name}: +${this.selectedCountryData.dialCode}`:e?i=this.selectedCountryData.name:i="Unknown",this.selectedCountry.setAttribute("title",i)}_getHiddenSelectedCountryWidth(){if(this.telInput.parentNode){let e=this.telInput.parentNode.cloneNode(!1);e.style.visibility="hidden",document.body.appendChild(e);let t=this.countryContainer.cloneNode();e.appendChild(t);let i=this.selectedCountry.cloneNode(!0);t.appendChild(i);let n=i.offsetWidth;return document.body.removeChild(e),n}return 0}_updatePlaceholder(){let{autoPlaceholder:e,placeholderNumberType:t,nationalMode:i,customPlaceholder:n}=this.options,s=e==="aggressive"||!this.hadInitialPlaceholder&&e==="polite";if(window.intlTelInputUtils&&s){let r=window.intlTelInputUtils.numberType[t],d=this.selectedCountryData.iso2?window.intlTelInputUtils.getExampleNumber(this.selectedCountryData.iso2,i,r):"";d=this._beforeSetNumber(d),typeof n=="function"&&(d=n(d,this.selectedCountryData)),this.telInput.setAttribute("placeholder",d)}}_selectListItem(e){let t=this._setCountry(e.getAttribute("data-country-code"));this._closeDropdown(),this._updateDialCode(e.getAttribute("data-dial-code")),this.telInput.focus(),t&&this._triggerCountryChange()}_closeDropdown(){this.dropdownContent.classList.add("iti__hide"),this.selectedCountry.setAttribute("aria-expanded","false"),this.selectedCountry.removeAttribute("aria-activedescendant"),this.highlightedItem&&this.highlightedItem.setAttribute("aria-selected","false"),this.options.countrySearch&&this.searchInput.removeAttribute("aria-activedescendant"),this.dropdownArrow.classList.remove("iti__arrow--up"),document.removeEventListener("keydown",this._handleKeydownOnDropdown),this.options.countrySearch&&this.searchInput.removeEventListener("input",this._handleSearchChange),document.documentElement.removeEventListener("click",this._handleClickOffToClose),this.countryList.removeEventListener("mouseover",this._handleMouseoverCountryList),this.countryList.removeEventListener("click",this._handleClickCountryList),this.options.dropdownContainer&&(this.options.useFullscreenPopup||window.removeEventListener("scroll",this._handleWindowScroll),this.dropdown.parentNode&&this.dropdown.parentNode.removeChild(this.dropdown)),this._trigger("close:countrydropdown")}_scrollTo(e,t){let i=this.countryList,n=document.documentElement.scrollTop,s=i.offsetHeight,r=i.getBoundingClientRect().top+n,d=r+s,a=e.offsetHeight,o=e.getBoundingClientRect().top+n,c=o+a,u=o-r+i.scrollTop,h=s/2-a/2;if(o<r)t&&(u-=h),i.scrollTop=u;else if(c>d){t&&(u+=h);let m=s-a;i.scrollTop=u-m}}_updateDialCode(e){let t=this.telInput.value,i=`+${e}`,n;if(t.charAt(0)==="+"){let s=this._getDialCode(t);s?n=t.replace(s,i):n=i,this.telInput.value=n}}_getDialCode(e,t){let i="";if(e.charAt(0)==="+"){let n="";for(let s=0;s<e.length;s++){let r=e.charAt(s);if(!isNaN(parseInt(r,10))){if(n+=r,t)this.dialCodeToIso2Map[n]&&(i=e.substr(0,s+1));else if(this.dialCodes[n]){i=e.substr(0,s+1);break}if(n.length===this.dialCodeMaxLen)break}}}return i}_getFullNumber(){let e=this.telInput.value.trim(),{dialCode:t}=this.selectedCountryData,i,n=f(e);return this.options.showSelectedDialCode&&!this.options.nationalMode&&e.charAt(0)!=="+"&&t&&n?i=`+${t}`:i="",i+e}_beforeSetNumber(e){let t=e;if(this.options.showSelectedDialCode){let i=this._getDialCode(t);if(i){i=`+${this.selectedCountryData.dialCode}`;let n=t[i.length]===" "||t[i.length]==="-"?i.length+1:i.length;t=t.substr(n)}}return this._cap(t)}_triggerCountryChange(){this._trigger("countrychange")}_formatNumberAsYouType(){let e=this._getFullNumber(),t=window.intlTelInputUtils?window.intlTelInputUtils.formatNumberAsYouType(e,this.selectedCountryData.iso2):e,{dialCode:i}=this.selectedCountryData;return this.options.showSelectedDialCode&&!this.options.nationalMode&&this.telInput.value.charAt(0)!=="+"&&t.includes(`+${i}`)?(t.split(`+${i}`)[1]||"").trim():t}handleAutoCountry(){this.options.initialCountry==="auto"&&window.intlTelInputGlobals.autoCountry&&(this.defaultCountry=window.intlTelInputGlobals.autoCountry,this.telInput.value||this.setCountry(this.defaultCountry),this.resolveAutoCountryPromise())}handleUtils(){window.intlTelInputUtils&&(this.telInput.value&&this._updateValFromNumber(this.telInput.value),this.selectedCountryData.iso2&&(this._updatePlaceholder(),this._updateMaxLength())),this.resolveUtilsScriptPromise()}destroy(){if(this.options.allowDropdown){this._closeDropdown(),this.selectedCountry.removeEventListener("click",this._handleClickSelectedCountry),this.countryContainer.removeEventListener("keydown",this._handleCountryContainerKeydown);let i=this.telInput.closest("label");i&&i.removeEventListener("click",this._handleLabelClick)}let{form:e}=this.telInput;this._handleHiddenInputSubmit&&e&&e.removeEventListener("submit",this._handleHiddenInputSubmit),this.telInput.removeEventListener("input",this._handleInputEvent),this._handleKeydownEvent&&this.telInput.removeEventListener("keydown",this._handleKeydownEvent),this.telInput.removeAttribute("data-intl-tel-input-id");let t=this.telInput.parentNode;t?.parentNode?.insertBefore(this.telInput,t),t?.parentNode?.removeChild(t),delete window.intlTelInputGlobals.instances[this.id]}getExtension(){return window.intlTelInputUtils?window.intlTelInputUtils.getExtension(this._getFullNumber(),this.selectedCountryData.iso2):""}getNumber(e){if(window.intlTelInputUtils){let{iso2:t}=this.selectedCountryData;return window.intlTelInputUtils.formatNumber(this._getFullNumber(),t,e)}return""}getNumberType(){return window.intlTelInputUtils?window.intlTelInputUtils.getNumberType(this._getFullNumber(),this.selectedCountryData.iso2):-99}getSelectedCountryData(){return this.selectedCountryData}getValidationError(){if(window.intlTelInputUtils){let{iso2:e}=this.selectedCountryData;return window.intlTelInputUtils.getValidationError(this._getFullNumber(),e)}return-99}isValidNumber(e=!0){let t=this._getFullNumber();return/\p{L}/u.test(t)?!1:window.intlTelInputUtils?window.intlTelInputUtils.isPossibleNumber(t,this.selectedCountryData.iso2,e):null}isValidNumberPrecise(){let e=this._getFullNumber();return/\p{L}/u.test(e)?!1:window.intlTelInputUtils?window.intlTelInputUtils.isValidNumber(e,this.selectedCountryData.iso2):null}setCountry(e){let t=e.toLowerCase();this.selectedCountryData.iso2!==t&&(this._setCountry(t),this._updateDialCode(this.selectedCountryData.dialCode),this._triggerCountryChange())}setNumber(e){let t=this._updateCountryFromNumber(e);this._updateValFromNumber(e),t&&this._triggerCountryChange()}setPlaceholderNumberType(e){this.options.placeholderNumberType=e,this._updatePlaceholder()}},x=(l,e,t)=>{let i=document.createElement("script");i.onload=()=>{y("handleUtils"),e&&e()},i.onerror=()=>{y("rejectUtilsScriptPromise"),t&&t()},i.className="iti-load-utils",i.async=!0,i.src=l,document.body.appendChild(i)},P=l=>!window.intlTelInputUtils&&!window.intlTelInputGlobals.startedLoadingUtilsScript?(window.intlTelInputGlobals.startedLoadingUtilsScript=!0,new Promise((e,t)=>x(l,e,t))):null;if(typeof window=="object"){let l={defaults:L,documentReady:()=>document.readyState==="complete",getCountryData:()=>C,getInstance:e=>{let t=e.getAttribute("data-intl-tel-input-id");return t?l.instances[t]:null},instances:{},loadUtils:P,version:"21.0.2"};window.intlTelInputGlobals=l}var H=(l,e)=>{let t=new b(l,e);return t._init(),l.setAttribute("data-intl-tel-input-id",t.id.toString()),window.intlTelInputGlobals.instances[t.id]=t,t},T=H;var S=({initialValue:l,onChangeNumber:e,onChangeCountry:t,onChangeValidity:i,onChangeErrorCode:n,usePreciseValidation:s,initOptions:r,inputProps:d})=>{let a=E(null),o=E(null),c=()=>{let u=o.current?.getNumber()||"",h=o.current?.getSelectedCountryData().iso2||"";if(e(u),t(h),o.current)if(s?o.current.isValidNumberPrecise():o.current.isValidNumber())i(!0),n(null);else{let g=o.current.getValidationError();i(!1),n(g)}};return R(()=>{let u=a.current;return u&&(o.current=T(u,r),u.addEventListener("countrychange",c)),()=>{u&&u.removeEventListener("countrychange",c),o.current?.destroy()}},[]),U.createElement("input",{type:"tel",ref:a,onInput:c,defaultValue:l,...d})};S.defaultProps={initialValue:"",onChangeNumber:()=>{},onChangeCountry:()=>{},onChangeValidity:()=>{},onChangeErrorCode:()=>{},usePreciseValidation:!1,initOptions:{},inputProps:{}};var W=S;export{W as default};
