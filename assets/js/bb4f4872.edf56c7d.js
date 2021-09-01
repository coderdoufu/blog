(self.webpackChunkjasperlai=self.webpackChunkjasperlai||[]).push([[681],{2122:function(e,t,n){"use strict";function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return o}})},9756:function(e,t,n){"use strict";function o(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}n.d(t,{Z:function(){return o}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return f},kt:function(){return m}});var o=n(7294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},s=Object.keys(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(o=0;o<s.length;o++)n=s[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=o.createContext({}),c=function(e){var t=o.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},f=function(e){var t=c(e.components);return o.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,l=e.parentName,f=i(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,p=d["".concat(l,".").concat(m)]||d[m]||u[m]||s;return n?o.createElement(p,a(a({ref:t},f),{},{components:n})):o.createElement(p,a({ref:t},f))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,a=new Array(s);a[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,a[1]=i;for(var c=2;c<s;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1934:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},contentTitle:function(){return i},metadata:function(){return l},toc:function(){return c},default:function(){return u}});var o=n(2122),r=n(9756),s=(n(7294),n(3905)),a={id:"recsys-offline-system",title:"Offline System",slug:"/recsys/recsys-offline-system",description:"What is offline system?",keywords:["ai","recommendation system","offline system"]},i=void 0,l={unversionedId:"recsys/recsys-offline-system",id:"recsys/recsys-offline-system",isDocsHomePage:!1,title:"Offline System",description:"What is offline system?",source:"@site/docs/recsys/2021-07-21-offline-system-recsys.md",sourceDirName:"recsys",slug:"/recsys/recsys-offline-system",permalink:"/docs/recsys/recsys-offline-system",version:"current",lastUpdatedAt:1626839992,formattedLastUpdatedAt:"7/21/2021",frontMatter:{id:"recsys-offline-system",title:"Offline System",slug:"/recsys/recsys-offline-system",description:"What is offline system?",keywords:["ai","recommendation system","offline system"]}},c=[{value:"The Basic Components of the Offline System",id:"the-basic-components-of-the-offline-system",children:[]},{value:"The Structure of the Offline System",id:"the-structure-of-the-offline-system",children:[]}],f={toc:c};function u(e){var t=e.components,a=(0,r.Z)(e,["components"]);return(0,s.kt)("wrapper",(0,o.Z)({},f,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"In this article, we will delve into design of the offline system. For data scientists, we spend a lot of time on collecting data, validating data, building models, working on the production code and monitoring the model performance (these steps are usually known as MLOps, which also consists of many other important steps which are worth to explore in the future in another dedicated doc page). These works are grouped under offline system. That's why offline system is so important to data scientist."),(0,s.kt)("h3",{id:"the-basic-components-of-the-offline-system"},"The Basic Components of the Offline System"),(0,s.kt)("p",null,"Before we talk about the offline system, we will need to have a basic understanding of the main components of the recommendation system."),(0,s.kt)("p",null,"The basic components of a recommendation systems are:\n",(0,s.kt)("img",{alt:"haha",src:n(1248).Z})),(0,s.kt)("p",null,"Let's talk about the purpose of some of the important components."),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Retrieval - The purpose of this component is to retrieve a predefined number of potential candidates.  Simply speaking, we can do scoring for every items in our database and retrieve only the top n candidates for the ranking model. However, doing so would certainly degrade your user experience as the number of items for scoring could be hundred of thousand, if not millions. This inefficiency led to the idea of retrieval. The big picture is to retrieve a number of managable candidates from the database and select the top n candidates based on some scoring methods."),(0,s.kt)("li",{parentName:"ol"},"Ranking - Based on the scores, system will re-rank the candidates and return them in the order of highest-to-lowest score. Now you may ask why ranking is needed. This is because users usually see related items from left to right. If we can list our targeted items at the front, users will most probably click it first. ")),(0,s.kt)("h3",{id:"the-structure-of-the-offline-system"},"The Structure of the Offline System"),(0,s.kt)("p",null,"The basic structure of the offline system includes:"),(0,s.kt)("ol",null,(0,s.kt)("li",{parentName:"ol"},"Collection of source data;"),(0,s.kt)("li",{parentName:"ol"},"Collection of logging files;"),(0,s.kt)("li",{parentName:"ol"},"Offline model training.")),(0,s.kt)("span",null,"\n    ",(0,s.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-9908832188464078","data-ad-slot":"3539166782"}),"\n  ",(0,s.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,s.kt)("h4",{id:"collection-of-source-data"},"Collection of source data"),(0,s.kt)("p",null,"What is collection of source data? Let's take an example for news articles. For news website, the main products are the news articles. These news articles are what we call source data. These source data will be first stored in a database. There are many database you can use, for instance, mongoDB, redis, mysql, hdfs (for very large data) and etc. Depending upon your business needs, different database can be employed. For the subsequent paragraph, I will use news articles as our example. However, the concept can be generally applied to other use case."),(0,s.kt)("p",null,"After you have collected your news articles (or you retrieve it from the backend with the help of data engineering team), you then need to do some preprocessing. For example, you have another team who is responsibly of doing Named Entity Recognition (NER) and keywords system and they provide you API to extract the named entities and keywords from the articles. You then use the available APIs or your Natural Language Processing (NLP) techniques to extract some important information from your articles. These tags are extremely important for your recommendation system as they can provide accurate interest mapping for your users. Moreover, they are useful to build a knowledge graph to generate more benefits to the downstream tasks."),(0,s.kt)("span",null,"\n    ",(0,s.kt)("ins",{parentName:"span",className:"adsbygoogle",style:{display:"block",textAlign:"center"},"data-ad-layout":"in-article","data-ad-format":"fluid","data-ad-client":"ca-pub-9908832188464078","data-ad-slot":"1964508460"}),"\n  ",(0,s.kt)("script",{parentName:"span"},"\n     (adsbygoogle = window.adsbygoogle || []).push({});\n  ")),(0,s.kt)("p",null,"For some large companies, they will not stop at this stage before using these data for modelling."))}u.isMDXComponent=!0},1248:function(e,t,n){"use strict";t.Z=n.p+"assets/images/basic_recsys-6cb16a9c4dd1696e4123593bc7e905bf.jpg"}}]);