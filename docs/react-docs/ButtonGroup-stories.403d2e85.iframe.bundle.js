"use strict";(self.webpackChunkreact_examples=self.webpackChunkreact_examples||[]).push([[9704],{"./stories/ButtonGroup.stories.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{PreviousNextButton:()=>PreviousNextButton,SimpleGroup:()=>SimpleGroup,StatsButton:()=>StatsButton,__namedExportsOrder:()=>__namedExportsOrder,default:()=>ButtonGroup_stories});var react=__webpack_require__("./node_modules/react/index.js");function ButtonGroup(param){var children=param.children,enhancedChildren=react.Children.map(children,(function(child){return react.isValidElement(child)?react.cloneElement(child,{background:"",color:"",overwriteClass:"py-3 px-4 inline-flex items-center gap-x-2 -ms-px first:rounded-s-lg first:ms-0 last:rounded-e-lg text-sm font-medium focus:z-10 border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 focus:outline-none focus:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800 dark:focus:bg-neutral-800"}):child}));return react.createElement("div",{className:"inline-flex rounded-lg shadow-sm"},enhancedChildren)}const ButtonGroup_ButtonGroup=ButtonGroup;ButtonGroup.__docgenInfo={description:"",methods:[],displayName:"ButtonGroup"};var Button=__webpack_require__("../react/src/CallsToAction/Button/index.js"),Icon=__webpack_require__("../react/src/Icon.js");const ButtonGroup_stories={title:"Call To Action/TwixtButtonGroup",component:ButtonGroup_ButtonGroup,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{children:{type:{name:"string",required:!0},description:"The content of the button",defaultValue:"Button"}},docs:{description:{component:"This is a customizable button group component used in various parts of the application. You can overwrite the class and define click actions."},source:{type:"code",language:"jsx"}}};var SimpleGroup={args:{children:[react.createElement(Button.A,{key:"left",label:"Left"}),react.createElement(Button.A,{key:"center",label:"Center"}),react.createElement(Button.A,{key:"right",label:"Left"})]}},PreviousNextButton={args:{children:[react.createElement(Button.A,{hideLabel:!0,leftIcon:react.createElement(Icon.A,{type:"chevronLeft"})}),react.createElement(Button.A,{hideLabel:!0,rightIcon:react.createElement(Icon.A,{type:"chevronRight"})})]}},StatsButton={args:{children:[react.createElement(Button.A,{label:"Bookmark",leftIcon:react.createElement(Icon.A,{type:"chevronLeft"})}),react.createElement(Button.A,{label:"12K"})]}};const __namedExportsOrder=["SimpleGroup","PreviousNextButton","StatsButton"];SimpleGroup.parameters={...SimpleGroup.parameters,docs:{...SimpleGroup.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<TwixtButton key="left" label="Left" />, <TwixtButton key="center" label="Center" />, <TwixtButton key="right" label="Left" />]\n  }\n}',...SimpleGroup.parameters?.docs?.source}}},PreviousNextButton.parameters={...PreviousNextButton.parameters,docs:{...PreviousNextButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<TwixtButton hideLabel={true} leftIcon={<TwixtIcon type="chevronLeft" />} />, <TwixtButton hideLabel={true} rightIcon={<TwixtIcon type="chevronRight" />} />]\n  }\n}',...PreviousNextButton.parameters?.docs?.source}}},StatsButton.parameters={...StatsButton.parameters,docs:{...StatsButton.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: [<TwixtButton label="Bookmark" leftIcon={<TwixtIcon type="chevronLeft" />} />, <TwixtButton label="12K" />]\n  }\n}',...StatsButton.parameters?.docs?.source}}}},"../react/src/CallsToAction/Button/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtButton});var react=__webpack_require__("./node_modules/react/index.js");function TwixtButton(param){var _param_background=param.background,background=void 0===_param_background?"bg-indigo-500":_param_background,_param_color=param.color,color=void 0===_param_color?"text-white":_param_color,children=param.children,_param_leftIcon=param.leftIcon,leftIcon=void 0===_param_leftIcon?null:_param_leftIcon,_param_rightIcon=param.rightIcon,rightIcon=void 0===_param_rightIcon?null:_param_rightIcon,label=param.label,_param_hideLabel=param.hideLabel,hideLabel=void 0!==_param_hideLabel&&_param_hideLabel,_param_disabled=param.disabled,disabled=void 0!==_param_disabled&&_param_disabled,_param_showSpinner=param.showSpinner,showSpinner=void 0!==_param_showSpinner&&_param_showSpinner,onClick=param.onClick,buttonClasses=param.overwriteClass||"px-4 py-2 rounded-md",spinnerIcon=react.createElement("div",{role:"status"},react.createElement("svg",{"aria-hidden":"true",className:"inline w-4 h-4 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600",viewBox:"0 0 100 101",fill:"none",xmlns:"http://www.w3.org/2000/svg"},react.createElement("path",{d:"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z",fill:"currentColor"}),react.createElement("path",{d:"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z",fill:"currentFill"})),react.createElement("span",{className:"sr-only"},"Loading..."));return react.createElement("button",{onClick,className:"flex items-center justify-center space-x-2 ".concat(background," ").concat(color," ").concat(buttonClasses),disabled:showSpinner||disabled},children||react.createElement(react.Fragment,null,leftIcon&&react.createElement("span",null,leftIcon),!hideLabel&&react.createElement("span",null,label),showSpinner&&react.createElement("span",null,spinnerIcon),rightIcon&&react.createElement("span",null,rightIcon)))}TwixtButton.__docgenInfo={description:"",methods:[],displayName:"TwixtButton",props:{background:{defaultValue:{value:"'bg-indigo-500'",computed:!1},required:!1},color:{defaultValue:{value:"'text-white'",computed:!1},required:!1},leftIcon:{defaultValue:{value:"null",computed:!1},required:!1},rightIcon:{defaultValue:{value:"null",computed:!1},required:!1},hideLabel:{defaultValue:{value:"false",computed:!1},required:!1},disabled:{defaultValue:{value:"false",computed:!1},required:!1},showSpinner:{defaultValue:{value:"false",computed:!1},required:!1}}}},"../react/src/Icon.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>TwixtIcon});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),react_icons_fa__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("../react/node_modules/react-icons/fa/index.mjs"),react_icons_ci__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("../react/node_modules/react-icons/ci/index.mjs"),react_icons_pi__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("../react/node_modules/react-icons/pi/index.mjs"),iconTypes={notification:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jNV,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.CzP},terminal:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.iuJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaTerminalSlash},help:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.gZZ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaQuestionCircleSlash},magnifier:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KSO,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.onj},hamburger:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OXb,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hcp},verticalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.H_v},horizontalThreeDots:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.HFM},pin:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.LBY,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaThumbtackSlash},delete:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.qbC,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.RCe},add:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.OiG,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Hw0},chevronUp:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Ucs},chevronDown:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Vr3},chevronLeft:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__._Jj},chevronRight:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.X6T},note:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.jie},pencil:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbp},refresh:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Swo,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.KP4},learn:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.vd0,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.hko},monitor:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Wqt,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaDesktopAlt},import:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.PiR},export:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.Mbn},filter:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.YsJ,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.FaFilterAlt},userAvatar:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.x$1,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.NBi},clipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.O6N},checkedClipboard:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA,outline:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.aZA},headphone:{filled:react_icons_fa__WEBPACK_IMPORTED_MODULE_1__.tLl,outline:react_icons_ci__WEBPACK_IMPORTED_MODULE_2__.WLS},watch:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.CqA,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.V3h},speaker:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.e8f,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.lvJ},speakerSlashed:{filled:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.$3T,outline:react_icons_pi__WEBPACK_IMPORTED_MODULE_3__.TVP}};function TwixtIcon(param){var _iconTypes_type,_iconTypes_type1,_param_type=param.type,type=void 0===_param_type?"notification":_param_type,_param_variant=param.variant,variant=void 0===_param_variant?"filled":_param_variant,_param_size=param.size,size=void 0===_param_size?12:_param_size,_param_color=param.color,color=void 0===_param_color?"black":_param_color;if(!iconTypes[type]||!(null===(_iconTypes_type=iconTypes[type])||void 0===_iconTypes_type?void 0:_iconTypes_type[variant]))return null;var IconComponent=(null===(_iconTypes_type1=iconTypes[type])||void 0===_iconTypes_type1?void 0:_iconTypes_type1[variant])||iconTypes.notification[filled];return react__WEBPACK_IMPORTED_MODULE_0__.createElement(IconComponent,{size,color})}TwixtIcon.__docgenInfo={description:"",methods:[],displayName:"TwixtIcon",props:{type:{defaultValue:{value:"'notification'",computed:!1},required:!1},variant:{defaultValue:{value:"'filled'",computed:!1},required:!1},size:{defaultValue:{value:"12",computed:!1},required:!1},color:{defaultValue:{value:"'black'",computed:!1},required:!1}}}}}]);