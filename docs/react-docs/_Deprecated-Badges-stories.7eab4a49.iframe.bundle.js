"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[6062],{"./stories/_Deprecated/Badges.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomBadge:()=>CustomBadge,DefaultBadge:()=>DefaultBadge,__namedExportsOrder:()=>__namedExportsOrder,default:()=>Badges_stories});var react=__webpack_require__("./node_modules/react/index.js"),TwixtBadges=function(param){var text=param.text,overwriteClass=param.overwriteClass,_param_variant=param.variant,badgeClass="violet"===(void 0===_param_variant?"violet":_param_variant)?"cursor-pointer w-8 h-8 grid place-items-center text-base rounded-full text-white bg-violet-700":"cursor-pointer max-w-16 px-4 py-2 flex items-center text-base rounded-full text-indigo-500 border border-indigo-500";return react.createElement("div",{className:overwriteClass||badgeClass},react.createElement("span",{className:"p-1"},text))};const Badges=TwixtBadges;TwixtBadges.__docgenInfo={description:"",methods:[],displayName:"TwixtBadges",props:{variant:{defaultValue:{value:"'violet'",computed:!1},required:!1}}};const Badges_stories={title:"Common/TwixtBadges",component:Badges,argTypes:{text:{control:"text"},overwriteClass:{type:{name:"string"}}},docs:{description:{component:"This component represents different styles of badges used across the application. The badges can be customized with different colors, borders, and icons."}}};var Template=function(args){return react.createElement(Badges,args)},DefaultBadge=Template.bind({});DefaultBadge.args={text:"Default Badge",overwriteClass:"bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded dark:bg-red-900 dark:text-red-300"},DefaultBadge.parameters={docs:{storyDescription:"This is the default `Badges` component with a violet badge and an indigo badge."}};var CustomBadge=Template.bind({});CustomBadge.args={text:""},CustomBadge.parameters={docs:{storyDescription:"This is a custom `Badges` component where you can modify the text prop."}};const __namedExportsOrder=["DefaultBadge","CustomBadge"];DefaultBadge.parameters={...DefaultBadge.parameters,docs:{...DefaultBadge.parameters?.docs,source:{originalSource:"args => <TwixtBadges_DEPRECATED {...args} />",...DefaultBadge.parameters?.docs?.source}}},CustomBadge.parameters={...CustomBadge.parameters,docs:{...CustomBadge.parameters?.docs,source:{originalSource:"args => <TwixtBadges_DEPRECATED {...args} />",...CustomBadge.parameters?.docs?.source}}}}}]);