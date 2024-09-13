"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[5155],{"./stories/Containers/StackBox.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{HorizontalStack:()=>HorizontalStack,NestedStack:()=>NestedStack,VerticalStack:()=>VerticalStack,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/src/Containers/BoxItem/index.js"),_react_src_Containers_StackBox__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/src/Containers/StackBox/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread_props(target,source){return source=null!=source?source:{},Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))})),target}const __WEBPACK_DEFAULT_EXPORT__={title:"Containers/StackBox",component:_react_src_Containers_StackBox__WEBPACK_IMPORTED_MODULE_2__.A,subcomponents:{TwixtBoxItem:_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A},argTypes:{direction:{control:{type:"select"},options:["horizontal","vertical"],defaultValue:"horizontal"},className:{control:"text",defaultValue:""}}};var Template=function(args){return react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_StackBox__WEBPACK_IMPORTED_MODULE_2__.A,_object_spread_props(function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}({},args),{className:"bg-gray-100 p-4"}),args.children)},HorizontalStack=Template.bind({});HorizontalStack.args={direction:"horizontal",className:"gap-4",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"0",overwriteClass:"bg-blue-500 p-2 text-white"},"Column 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"1",overwriteClass:"bg-green-500 p-2 text-white"},"Column 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"2",overwriteClass:"bg-red-500 p-2 text-white"},"Column 3"))};var VerticalStack=Template.bind({});VerticalStack.args={direction:"vertical",className:"gap-4",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"0",overwriteClass:"bg-blue-500 p-2 text-white"},"Row 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"1",overwriteClass:"bg-green-500 p-2 text-white"},"Row 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"2",overwriteClass:"bg-red-500 p-2 text-white"},"Row 3"))};var NestedStack=Template.bind({});NestedStack.args={direction:"horizontal",className:"gap-4",children:react__WEBPACK_IMPORTED_MODULE_0__.createElement(react__WEBPACK_IMPORTED_MODULE_0__.Fragment,null,react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"0",overwriteClass:"bg-blue-500 p-2 text-white"},"Column 1"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_StackBox__WEBPACK_IMPORTED_MODULE_2__.A,{direction:"vertical",className:"bg-green-500 p-2 text-white gap-2"},react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"0",overwriteClass:"bg-yellow-500 p-2 text-white"},"Row 1 in Column 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"1",overwriteClass:"bg-orange-500 p-2 text-white"},"Row 2 in Column 2"),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"2",overwriteClass:"bg-pink-500 p-2 text-white"},"Row 3 in Column 2")),react__WEBPACK_IMPORTED_MODULE_0__.createElement(_react_src_Containers_BoxItem__WEBPACK_IMPORTED_MODULE_1__.A,{key:"2",overwriteClass:"bg-red-500 p-2 text-white"},"Column 3"))};const __namedExportsOrder=["HorizontalStack","VerticalStack","NestedStack"];HorizontalStack.parameters={...HorizontalStack.parameters,docs:{...HorizontalStack.parameters?.docs,source:{originalSource:'args => <StackBox {...args} className="bg-gray-100 p-4">\n    {args.children}\n  </StackBox>',...HorizontalStack.parameters?.docs?.source}}},VerticalStack.parameters={...VerticalStack.parameters,docs:{...VerticalStack.parameters?.docs,source:{originalSource:'args => <StackBox {...args} className="bg-gray-100 p-4">\n    {args.children}\n  </StackBox>',...VerticalStack.parameters?.docs?.source}}},NestedStack.parameters={...NestedStack.parameters,docs:{...NestedStack.parameters?.docs,source:{originalSource:'args => <StackBox {...args} className="bg-gray-100 p-4">\n    {args.children}\n  </StackBox>',...NestedStack.parameters?.docs?.source}}}},"../react/src/Containers/BoxItem/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>BoxItem_BoxItem});var react=__webpack_require__("./node_modules/react/index.js");function _define_property(obj,key,value){return key in obj?Object.defineProperty(obj,key,{value,enumerable:!0,configurable:!0,writable:!0}):obj[key]=value,obj}function _object_spread(target){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{},ownKeys=Object.keys(source);"function"==typeof Object.getOwnPropertySymbols&&(ownKeys=ownKeys.concat(Object.getOwnPropertySymbols(source).filter((function(sym){return Object.getOwnPropertyDescriptor(source,sym).enumerable})))),ownKeys.forEach((function(key){_define_property(target,key,source[key])}))}return target}function _object_without_properties(source,excluded){if(null==source)return{};var key,i,target=function _object_without_properties_loose(source,excluded){if(null==source)return{};var key,i,target={},sourceKeys=Object.keys(source);for(i=0;i<sourceKeys.length;i++)key=sourceKeys[i],excluded.indexOf(key)>=0||(target[key]=source[key]);return target}(source,excluded);if(Object.getOwnPropertySymbols){var sourceSymbolKeys=Object.getOwnPropertySymbols(source);for(i=0;i<sourceSymbolKeys.length;i++)key=sourceSymbolKeys[i],excluded.indexOf(key)>=0||Object.prototype.propertyIsEnumerable.call(source,key)&&(target[key]=source[key])}return target}function BoxItem(_param){var _param_type=_param.type,type=void 0===_param_type?"block":_param_type,children=_param.children,_param_overwriteClass=_param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,props=_object_without_properties(_param,["type","children","overwriteClass"]);return"block"==type?react.createElement("div",_object_spread({className:overwriteClass},props),children):"inline"==type?react.createElement("span",_object_spread({className:overwriteClass},props),children):null}const BoxItem_BoxItem=BoxItem;BoxItem.__docgenInfo={description:"",methods:[],displayName:"BoxItem",props:{type:{defaultValue:{value:"'block'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}},"../react/src/Containers/StackBox/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>StackBox_StackBox});var react=__webpack_require__("./node_modules/react/index.js");function StackBox(param){var _param_direction=param.direction,direction=void 0===_param_direction?"horizontal":_param_direction,children=param.children,_param_overwriteClass=param.overwriteClass,overwriteClass=void 0===_param_overwriteClass?"":_param_overwriteClass,stackClasses="horizontal"===direction?"flex":"flex flex-col";return react.createElement("div",{className:"".concat(stackClasses," ").concat(overwriteClass)},children)}const StackBox_StackBox=StackBox;StackBox.__docgenInfo={description:"",methods:[],displayName:"StackBox",props:{direction:{defaultValue:{value:"'horizontal'",computed:!1},required:!1},overwriteClass:{defaultValue:{value:"''",computed:!1},required:!1}}}}}]);