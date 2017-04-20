if (self.CavalryLogger) { CavalryLogger.start_js(["V7ZA9"]); }

__d("OmniMActionType",[],(function a(b,c,d,e,f,g){f.exports={CREATE_EVENT:1,LOCATION:2,PAYMENT:3,POLL:4,STICKER:5,TEXT:6,TRANSPORTATION:7,ORDER_FOOD:8,MAKE_RESERVATION:9,SCHEDULE_CALL:10,LIVE_LOCATION:11,VIDEO_CALL:12,VOICE_CALL:13,SAVE_CONTENT:14,PLAY_GAME:15,SHARE_CONTACT:16,SEND_PHOTO:17,CREATE_REMINDER_DEPRECATED:18,CREATE_REMINDER:19};}),null);
__d("OmniMDirectiveType",[],(function a(b,c,d,e,f,g){f.exports={ADD_ACTIONS:1,CLEAR_ACTIONS:2,ADD_RANGES:3,INVOKE_NATIVE_AGENT:4,MUTATE_FLOW_STATE:5};}),null);
__d("OmniMLoggerEvents",[],(function a(b,c,d,e,f,g){f.exports={MESSAGE_ANALYZED:"omni_m_message_analyzed",INTENT_DETECTED:"omni_m_intent_detected",INTENT_HANDLED:"omni_m_intent_handled",SUGGESTION_GENERATED:"omni_m_suggestion_generated",SUGGESTION_SENT:"omni_m_suggestion_sent",SUGGESTION_DISPLAYED:"omni_m_suggestion_displayed",SUGGESTION_CLICKED:"omni_m_suggestion_clicked",SUGGESTION_COMPLETED:"omni_m_suggestion_completed",SUGGESTION_DISMISSED:"omni_m_suggestion_dismissed",SUGGESTION_DISAPPEARED:"omni_m_suggestion_disappeared",BAR_DISMISSED:"omni_m_bar_dismissed",BAR_DISPLAYED:"omni_m_bar_displayed",BAR_DISAPPEARED:"omni_m_bar_disappeared",ORGANIC_CLICKED:"omni_m_organic_clicked",ORGANIC_COMPLETED:"omni_m_organic_completed"};}),null);
__d('OmniMEventTypedLogger',['Banzai','GeneratedLoggerUtils','nullthrows'],(function a(b,c,d,e,f,g){'use strict';function h(){this.clear();}h.prototype.log=function(){c('GeneratedLoggerUtils').log('logger:OmniMEventLoggerConfig',this.$OmniMEventTypedLogger1,c('Banzai').BASIC);};h.prototype.logVital=function(){c('GeneratedLoggerUtils').log('logger:OmniMEventLoggerConfig',this.$OmniMEventTypedLogger1,c('Banzai').VITAL);};h.prototype.clear=function(){this.$OmniMEventTypedLogger1={};return this;};h.prototype.updateData=function(j){this.$OmniMEventTypedLogger1=babelHelpers['extends']({},this.$OmniMEventTypedLogger1,j);return this;};h.prototype.setActionID=function(j){this.$OmniMEventTypedLogger1.action_id=j;return this;};h.prototype.setActionTypeFromBlob=function(j){this.$OmniMEventTypedLogger1.action_type_from_blob=j;return this;};h.prototype.setAgentName=function(j){this.$OmniMEventTypedLogger1.agent_name=j;return this;};h.prototype.setAppID=function(j){this.$OmniMEventTypedLogger1.appid=j;return this;};h.prototype.setAppversion=function(j){this.$OmniMEventTypedLogger1.appversion=j;return this;};h.prototype.setClientUserID=function(j){this.$OmniMEventTypedLogger1.client_userid=j;return this;};h.prototype.setClienttime=function(j){this.$OmniMEventTypedLogger1.clienttime=j;return this;};h.prototype.setConfidence=function(j){this.$OmniMEventTypedLogger1.confidence=j;return this;};h.prototype.setConfidenceRemapped=function(j){this.$OmniMEventTypedLogger1.confidence_remapped=j;return this;};h.prototype.setContextUserID=function(j){this.$OmniMEventTypedLogger1.context_user_id=j;return this;};h.prototype.setCuApp=function(j){this.$OmniMEventTypedLogger1.cu_app=j;return this;};h.prototype.setEventName=function(j){this.$OmniMEventTypedLogger1.event_name=j;return this;};h.prototype.setIntentID=function(j){this.$OmniMEventTypedLogger1.intent_id=j;return this;};h.prototype.setMessageID=function(j){this.$OmniMEventTypedLogger1.message_id=j;return this;};h.prototype.setMessageLength=function(j){this.$OmniMEventTypedLogger1.message_length=j;return this;};h.prototype.setName=function(j){this.$OmniMEventTypedLogger1.name=j;return this;};h.prototype.setPersonalization=function(j){this.$OmniMEventTypedLogger1.personalization=j;return this;};h.prototype.setPigeonID=function(j){this.$OmniMEventTypedLogger1.pigeon_id=j;return this;};h.prototype.setPosition=function(j){this.$OmniMEventTypedLogger1.position=j;return this;};h.prototype.setSource=function(j){this.$OmniMEventTypedLogger1.source=j;return this;};h.prototype.setSuggestionData=function(j){this.$OmniMEventTypedLogger1.suggestion_data=c('GeneratedLoggerUtils').serializeMap(j);return this;};h.prototype.setSuggestionIds=function(j){this.$OmniMEventTypedLogger1.suggestion_ids=c('GeneratedLoggerUtils').serializeVector(j);return this;};h.prototype.setSuggestionMode=function(j){this.$OmniMEventTypedLogger1.suggestion_mode=j;return this;};h.prototype.setSuggestionTitle=function(j){this.$OmniMEventTypedLogger1.suggestion_title=j;return this;};h.prototype.setSuggestionType=function(j){this.$OmniMEventTypedLogger1.suggestion_type=j;return this;};h.prototype.setThreadID=function(j){this.$OmniMEventTypedLogger1.thread_id=j;return this;};h.prototype.setTotalSuggestions=function(j){this.$OmniMEventTypedLogger1.total_suggestions=j;return this;};h.prototype.setVC=function(j){this.$OmniMEventTypedLogger1.vc=j;return this;};var i={action_id:true,action_type_from_blob:true,agent_name:true,appid:true,appversion:true,client_userid:true,clienttime:true,confidence:true,confidence_remapped:true,context_user_id:true,cu_app:true,event_name:true,intent_id:true,message_id:true,message_length:true,name:true,personalization:true,pigeon_id:true,position:true,source:true,suggestion_data:true,suggestion_ids:true,suggestion_mode:true,suggestion_title:true,suggestion_type:true,thread_id:true,total_suggestions:true,vc:true};f.exports=h;}),null);
__d('ChatEmojiSkinTonePreferencePicker.react',['ChatEmojiPicker.react','MessengerEmojiConfig','React','SkinToneEmoji'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=c('React').PropTypes,k=128077;h=babelHelpers.inherits(l,c('React').PureComponent);i=h&&h.prototype;function l(){var m,n;for(var o=arguments.length,p=Array(o),q=0;q<o;q++)p[q]=arguments[q];return n=(m=i.constructor).call.apply(m,[this].concat(p)),this.$ChatEmojiSkinTonePreferencePicker1=function(r){var s=c('SkinToneEmoji').getTone(r);this.props.onSelect&&this.props.onSelect(s);}.bind(this),n;}l.prototype.render=function(){var m=null;try{m=this.props.currentPreference?String.fromCodePoint.apply(String,c('SkinToneEmoji').applyTone([k],this.props.currentPreference)):String.fromCodePoint(k);}catch(n){m=String.fromCodePoint(k);}return c('React').createElement(c('ChatEmojiPicker.react'),{className:this.props.className,columns:this.props.columns,currentEmoji:m,emojiChoices:c('MessengerEmojiConfig').emoji_colors.map(function(n){return c('SkinToneEmoji').applyTone([k],n);}),onSelect:this.$ChatEmojiSkinTonePreferencePicker1});};l.propTypes={className:j.string,columns:j.number,currentPreference:j.number,onSelect:j.func};l.defaultProps={columns:6};f.exports=l;}),null);
__d('AbstractCheckboxInput.react',['cx','invariant','React','joinClasses'],(function a(b,c,d,e,f,g,h,i){var j,k,l=c('React').PropTypes;j=babelHelpers.inherits(m,c('React').Component);k=j&&j.prototype;m.prototype.render=function(){'use strict';!this.props.children||this.props.children.length===0||i(0);var n=c('joinClasses')(this.props.className,"_kv1"),o=c('React').createElement('input',babelHelpers['extends']({},this.props,{'data-testid':undefined,className:null,ref:function(p){return this.$AbstractCheckboxInput1=p;}.bind(this),type:'checkbox'}),undefined);return c('React').createElement('label',{className:n,'data-testid':this.props['data-testid']},o,c('React').createElement('span',{'data-hover':this.props.tooltip?'tooltip':null,'data-tooltip-content':this.props.tooltip}));};m.prototype.focusInput=function(){'use strict';this.$AbstractCheckboxInput1&&this.$AbstractCheckboxInput1.focus();};m.prototype.blurInput=function(){'use strict';this.$AbstractCheckboxInput1&&this.$AbstractCheckboxInput1.blur();};function m(){'use strict';j.apply(this,arguments);}m.propTypes={'data-testid':l.string,tooltip:l.string};f.exports=m;}),null);
__d('MessengerCheckboxInput.react',['cx','AbstractCheckboxInput.react','React','joinClasses'],(function a(b,c,d,e,f,g,h){var i,j;i=babelHelpers.inherits(k,c('React').PureComponent);j=i&&i.prototype;k.prototype.render=function(){'use strict';return c('React').createElement(c('AbstractCheckboxInput.react'),babelHelpers['extends']({},this.props,{className:c('joinClasses')(this.props.className,"_55sg _4ng2")}));};function k(){'use strict';i.apply(this,arguments);}f.exports=k;}),null);
__d('OmniMLogHelpers',['OmniMEventTypedLogger','MNOmniMConstants','OmniMLoggerEvents','CurrentUser'],(function a(b,c,d,e,f,g){function h(s){return c('MNOmniMConstants').SUGGESTION_MODES[s];}function i(s,t,u,v){new (c('OmniMEventTypedLogger'))().setEventName(s).setPosition(u+'').setMessageID(t.messageID).setPigeonID(t.suggestionID).setSuggestionMode(h(v)).setContextUserID(c('CurrentUser').getID()).setConfidence(Math.round(t.confidence*10000)).log();}function j(s,t,u){new (c('OmniMEventTypedLogger'))().setEventName(s).setSuggestionMode(h(u)).setContextUserID(c('CurrentUser').getID()).setSuggestionIds(t.map(function(v){return v.suggestionID;})).log();}function k(s,t,u){i(c('OmniMLoggerEvents').SUGGESTION_DISPLAYED,s,t,u);}function l(s,t,u){i(c('OmniMLoggerEvents').SUGGESTION_DISAPPEARED,s,t,u);}function m(s,t,u){i(c('OmniMLoggerEvents').SUGGESTION_DISMISSED,s,t,u);}function n(s,t,u){i(c('OmniMLoggerEvents').SUGGESTION_CLICKED,s,t,u);}function o(s,t,u){i(c('OmniMLoggerEvents').SUGGESTION_COMPLETED,s,t,u);}function p(s,t){j(c('OmniMLoggerEvents').BAR_DISAPPEARED,s,t);}function q(s,t){j(c('OmniMLoggerEvents').BAR_DISMISSED,s,t);}function r(s,t){j(c('OmniMLoggerEvents').BAR_DISPLAYED,s,t);}f.exports={barDisappeared:p,barDisplayed:r,barDismissed:q,suggestionDisplayed:k,suggestionDisappeared:l,suggestionDismissed:m,suggestionClicked:n,suggestionCompleted:o};}),null);
__d("XMessagingOmniMSetPrefController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/messaging\/set_omnim_prefs\/",{});}),null);
__d('OmniMReducer',['AsyncRequest','immutable','MercuryActionType','MercuryConfig','MercuryIDs','MercuryPayloadSource','MNOmniMConstants','OmniMActions','OmniMActionType','OmniMDirectiveType','OmniMLogHelpers','P2PGKValues','XMessagingOmniMSetPrefController'],(function a(b,c,d,e,f,g){'use strict';var h,i=c('OmniMActions').Types,j=c('immutable').Set([c('MercuryActionType').SEND_MESSAGE,c('MercuryActionType').REPLACE_MESSAGE,c('MercuryActionType').USER_GENERATED_MESSAGE]),k=c('immutable').Set([c('MercuryActionType').SEND_MESSAGE,c('MercuryActionType').USER_GENERATED_MESSAGE]),l=2;function m(oa,pa){switch(oa.content_type){case 'text':return true;case 'location':if(pa===c('MNOmniMConstants').OMNIM)return c('MercuryConfig').OmniMLocationSuggestion;return c('MercuryConfig').MessengerLocationQuickReply;case 'sticker':return c('MercuryConfig').MessengerStickerQuickReply;case 'ride_service':return c('MercuryConfig').MessengerRideServiceQuickReply;case 'p2p_payment':return c('P2PGKValues').P2PVisible&&c('MercuryConfig').MessengerP2PPaymentQuickReply;default:return false;}}function n(oa){return Array.isArray(oa);}function o(oa){if(!oa)return {};var pa=JSON.parse(oa)||{},qa=n(pa.quick_replies)?pa.quick_replies:[],ra=pa.m_directives;return {quickReplies:qa,directives:ra};}function p(oa){var pa=oa.other_user_fbid,qa=oa.thread_fbid;return pa?c('MercuryIDs').getThreadIDFromUserID(pa):c('MercuryIDs').getThreadIDFromThreadFBID(qa);}var q=c('immutable').Map((h={},h[c('OmniMActionType').CREATE_EVENT]='create_event',h[c('OmniMActionType').LOCATION]='location',h[c('OmniMActionType').PAYMENT]='p2p_payment',h[c('OmniMActionType').POLL]='poll',h[c('OmniMActionType').STICKER]='sticker',h[c('OmniMActionType').TEXT]='text',h[c('OmniMActionType').TRANSPORTATION]='ride_service',h[c('OmniMActionType').ORDER_FOOD]='order_food',h[c('OmniMActionType').MAKE_RESERVATION]='make_reservation',h[c('OmniMActionType').SCHEDULE_CALL]='schedule_call',h[c('OmniMActionType').LIVE_LOCATION]='live_location',h));function r(oa){var pa=oa.confidence,qa=oa.id,ra=oa.label,sa=oa.type,ta=oa.data,ua=oa.icon,va=oa.message_id,wa=oa.thread_key;return {content_type:q.get(sa+''),data:ta,image_url:ua,title:ra,confidence:pa,messageID:va,suggestionID:qa,threadID:p(wa),messageDepth:1};}function s(oa,pa){var qa=o(pa),ra=(qa.quickReplies||[]).filter(function(ta){return m(ta,c('MNOmniMConstants').QUICKREPLIES);}),sa=(qa.directives||[]).filter(function(ta){return ta.type===c('OmniMDirectiveType').ADD_ACTIONS;}).map(function(ta){return ta.data.actions;}).reduce(function(ta,ua){return ta.concat(ua);},[]).map(r).filter(function(ta){return m(ta,c('MNOmniMConstants').OMNIM);}).reduce(function(ta,ua){var va=ua.threadID;return ta.updateIn([va,'agentSuggestions'],[],function(wa){return wa.concat([ua]);});},c('immutable').Map({}));return sa.setIn([oa,'quickReplies'],ra);}function t(oa){var pa=oa.content_type;Object.keys(oa.data||{}).sort().map(function(qa){pa+=''+qa+oa.data[qa];});return pa;}function u(oa){var pa=c('immutable').Set(),qa=[];for(var ra=oa.length-1;ra>=0;ra--){var sa=oa[ra],ta=t(sa);if(!pa.has(ta)){pa=pa.add(ta);qa.unshift(sa);}}return qa;}function v(oa){var pa=0;return oa.filter(function(qa){if(qa.content_type==='sticker'){if(pa>=l)return false;pa+=1;}return true;});}function w(oa,pa,qa,ra){var sa=oa.getIn(['threadMetadata',pa,'timestamp']);if(sa&&sa>ra)return oa;var ta=qa.agentSuggestions,ua=qa.quickReplies,va=(oa.getIn(['suggestionsByThread',pa])||{}).agentSuggestions||[],wa=ta||[];if(va.length)wa=v(wa);var xa=u(wa.concat(va));return oa.setIn(['threadMetadata',pa,'timestamp'],ra).setIn(['suggestionsByThread',pa],{agentSuggestions:xa,quickReplies:ua});}function x(oa,pa,qa,ra,sa){var ta=s(pa,ra);return ta.reduce(function(ua,va,wa){return w(ua,wa,va.toJS(),sa);},oa);}function y(oa){if(!oa)return null;var pa=oa.agentSuggestions,qa=(pa||[]).reduce(function(ra,sa){if(sa.messageDepth>=c('MercuryConfig').OmniMMessagesToLive)return ra;return ra.concat([babelHelpers['extends']({},sa,{messageDepth:sa.messageDepth+1})]);},[]);return babelHelpers['extends']({},oa,{agentSuggestions:qa});}function z(oa,pa){var qa=pa.thread_id,ra=pa.message_id,sa=pa.platform_xmd,ta=pa.timestamp;if(k.has(pa.action_type))oa=oa.updateIn(['suggestionsByThread',qa],y);return x(oa,qa,ra,sa,ta);}function aa(oa,pa){if(pa.type!==i.MERCURY_DISPATCHED)return oa;var qa=pa.data;switch(pa.mercuryType){case 'update-messages':if(qa.payload_source!==c('MercuryPayloadSource').CLIENT_CHANNEL_MESSAGE)return oa;return qa.actions.filter(function(ra){return j.has(ra.action_type);}).reduce(z,oa);case 'invalidate-thread-state':return oa.deleteIn(['suggestionsByThread',qa.threadID]).deleteIn(['threadMetadata',qa.threadID]);case 'invalidate-global-state':return oa.set('suggestionsByThread',c('immutable').Map()).set('threadMetadata',c('immutable').Map());}return oa;}function ba(oa,pa){if(pa.type!==i.FETCH_SUGGESTIONS)return oa;var qa=pa.message,ra=pa.threadID;return x(oa,ra,qa.message_id,qa.platform_xmd,qa.timestamp);}function ca(oa){return oa.getIn(['prefs','suggestion_mode'],0);}function da(oa,pa){if(pa.type!==i.SUGGESTION_CLICKED)return oa;var qa=pa.option,ra=pa.position,sa=pa.source;if(sa===c('MNOmniMConstants').OMNIM)c('OmniMLogHelpers').suggestionClicked(qa,ra,ca(oa));return oa;}function ea(oa,pa){if(pa.type!==i.SUGGESTION_COMPLETED)return oa;var qa=pa.threadID,ra=pa.option,sa=pa.position,ta=pa.source;if(ta===c('MNOmniMConstants').OMNIM)c('OmniMLogHelpers').suggestionCompleted(ra,sa,ca(oa));return oa.deleteIn(['suggestionsByThread',qa]);}function fa(oa,pa){if(pa.type!==i.SUGGESTION_DISMISSED)return oa;var qa=pa.threadID,ra=pa.option,sa=pa.source,ta=pa.position;if(sa===c('MNOmniMConstants').OMNIM)c('OmniMLogHelpers').suggestionDismissed(ra,ta,ca(oa));var ua=oa.getIn(['suggestionsByThread',qa]);if(!ua||!ua.agentSuggestions)return oa;var va=ua.agentSuggestions.map(function(wa){if(wa.suggestionID===ra.suggestionID)return babelHelpers['extends']({},wa,{dismissed:true});return wa;});return oa.setIn(['suggestionsByThread',qa],babelHelpers['extends']({},ua,{agentSuggestions:va}));}function ga(oa,pa){if(pa.type!==i.SUGGESTIONS_DISMISSED_FOR_THREAD)return oa;var qa=pa.threadID,ra=oa.getIn(['suggestionsByThread',qa]);if(!ra||!ra.agentSuggestions)return oa;c('OmniMLogHelpers').barDismissed(ra.agentSuggestions,ca(oa));var sa=ra.agentSuggestions.map(function(ta,ua){if(ta.dismissed)return ta;c('OmniMLogHelpers').suggestionDismissed(ta,ua,ca(oa));return babelHelpers['extends']({},ta,{dismissed:true});});return oa.setIn(['suggestionsByThread',qa],babelHelpers['extends']({},ra,{agentSuggestions:sa}));}function ha(oa,pa){if(pa.type!==i.PREFS_UPDATED)return oa;var qa=pa.prefs;return oa.updateIn(['prefs'],function(ra){return ra.merge(c('immutable').fromJS(qa));});}function ia(oa,pa){if(pa.type!==i.SUGGESTION_MODE_SET)return oa;var qa=pa.mode,ra=c('XMessagingOmniMSetPrefController').getURIBuilder().getURI();new (c('AsyncRequest'))(ra).setMethod('POST').setData({suggestion_mode:qa}).send();return oa.setIn(['prefs','suggestion_mode'],qa);}function ja(oa,pa){if(pa.type!==i.SUGGESTION_DISPLAYED)return oa;var qa=pa.option,ra=pa.position;if(!qa.dismissed)c('OmniMLogHelpers').suggestionDisplayed(qa,ra,ca(oa));return oa;}function ka(oa,pa){if(pa.type!==i.SUGGESTION_DISAPPEARED)return oa;var qa=pa.option,ra=pa.position;if(!qa.dismissed)c('OmniMLogHelpers').suggestionDisappeared(qa,ra,ca(oa));return oa;}function la(oa,pa){if(pa.type!==i.BAR_TIMED_OUT)return oa;var qa=pa.threadID,ra=pa.options;c('OmniMLogHelpers').barDisappeared(ra,ca(oa));return oa.deleteIn(['suggestionsByThread',qa]);}function ma(oa,pa){if(pa.type!==i.BAR_DISAPPEARED)return oa;c('OmniMLogHelpers').barDisappeared(pa.options,ca(oa));return oa;}function na(oa,pa){if(pa.type!==i.BAR_DISPLAYED)return oa;c('OmniMLogHelpers').barDisplayed(pa.options,ca(oa));return oa;}f.exports={barDisappeared:ma,barDisplayed:na,barTimedOut:la,mercuryDispatch:aa,messageFetched:ba,prefsUpdated:ha,suggestionClicked:da,suggestionCompleted:ea,suggestionDisappeared:ka,suggestionDismissed:fa,suggestionDisplayed:ja,suggestionModeSet:ia,suggestionsDismissedForThread:ga};}),null);
__d('OmniMState',['immutable'],(function a(b,c,d,e,f,g){'use strict';var h,i,j={suggestionsByThread:c('immutable').Map(),threadMetadata:c('immutable').Map(),prefs:c('immutable').Map()};h=babelHelpers.inherits(k,c('immutable').Record(j));i=h&&h.prototype;function k(){h.apply(this,arguments);}f.exports=k;}),null);
__d("XMessagingOmniMPrefController",["XController"],(function a(b,c,d,e,f,g){f.exports=c("XController").create("\/messaging\/get_omnim_prefs\/",{});}),null);
__d('OmniMStore',['AsyncRequest','FluxReduceStore','immutable','MercuryConfig','MercuryDispatcher','MercuryMessages','MessengerFluxReduceDispatcher','OmniMHelpers','OmniMReducer','OmniMState','OmniMActions','XMessagingOmniMPrefController'],(function a(b,c,d,e,f,g){'use strict';var h,i,j=5,k=[].concat(Object.values(c('OmniMReducer')));h=babelHelpers.inherits(l,c('FluxReduceStore'));i=h&&h.prototype;l.prototype.getInitialState=function(){return new (c('OmniMState'))();};l.prototype.reduce=function(m,n){if(n.namespace!==c('OmniMActions').Namespace)return m;return k.reduce(function(o,p){return p(o,n);},m);};l.prototype.$OmniMStore1=function(m){c('MercuryMessages').get().getThreadMessagesRange(m,0,1,function(n){if(n&&n.length){var o=n[0];c('OmniMActions').messageFetched(m,o);}});};l.prototype.$OmniMStore2=function(){var m=this.getState().get('prefs'),n=c('OmniMHelpers').suggestionMode(m),o=c('MercuryConfig').OmniMConfidenceThresholds[n];return o||.9;};l.prototype.$OmniMStore3=function(m){var n=this.$OmniMStore2();return (m||[]).filter(function(o){return o.confidence&&o.confidence>n;});};l.prototype.suggestionsForThread=function(m){var n=this.getState();if(!n.getIn(['threadMetadata',m]))this.$OmniMStore1(m);var o=n.getIn(['suggestionsByThread',m],{}),p=this.$OmniMStore3(o.agentSuggestions).slice(0,j);return babelHelpers['extends']({},o,{agentSuggestions:p});};l.prototype.prefs=function(){return this.getState().get('prefs');};l.prototype.$OmniMStore4=function(){var m=c('MercuryDispatcher').get();m.subscribe('update-messages',function(n,o){c('OmniMActions').mercuryDispatched(n,o);});m.subscribe('invalidate-thread-state',function(n,o){c('OmniMActions').mercuryDispatched(n,{threadID:o});});m.subscribe('invalidate-global-state',function(n){return c('OmniMActions').mercuryDispatched(n);});};l.prototype.$OmniMStore5=function(){if(c('MercuryConfig').OmniMEditConfidenceThreshold){var m=c('XMessagingOmniMPrefController').getURIBuilder().getURI();new (c('AsyncRequest'))(m).setAllowCrossPageTransition(true).setReadOnly(true).setMethod('POST').setHandler(function(n){return c('OmniMActions').prefsUpdated(n.payload);}).send();}};l.prototype.setUp=function(){this.$OmniMStore4();this.$OmniMStore5();};function l(){h.apply(this,arguments);}f.exports=new l(c('MessengerFluxReduceDispatcher'));}),null);
__d('MessengerSettingsDialog.react',['cx','fbt','invariant','ChatEmojiSkinTonePreferencePicker.react','CurrentUser','EmojiActions','EmojiDispatcher','EmojiStateStore','ImageBlock.react','Link.react','MercuryIDs','MercuryParticipants','messengerDialogsRe','MessengerButton.react','MessengerCheckboxInput.react','MessengerConfig','messengerContactImageReact','MessengerDesktopNotifications','MessengerDialog.react','MessengerDialogButton.react','MessengerDialogHeader.react','MessengerDialogTitle.react','MessengerSettingsActions','MessengerSettingsStore','MessengerSpinner.react','messengerViewerCardReact','MercuryConfig','OmniMActions','OmniMHelpers','OmniMStore','PresencePrivacy','React','StoreAndPropBasedStateMixin','XUISingleSelector.react'],(function a(b,c,d,e,f,g,h,i,j){'use strict';var k=c('messengerContactImageReact').comp,l=c('messengerViewerCardReact').comp,m=c('XUISingleSelector.react').Option,n=c('React').PropTypes,o=50,p=c('React').createClass({displayName:'MessengerSettingsDialog',mixins:[c('StoreAndPropBasedStateMixin')(c('EmojiStateStore'),c('MercuryParticipants'),c('MessengerSettingsStore'),c('OmniMStore'),c('PresencePrivacy'))],_privacyToken:null,propTypes:{viewer:n.string.isRequired},statics:{calculateState:function q(r){var s=c('EmojiStateStore').getState();return {emojiColorPref:s.emojiColor,isUserAvailable:c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE,viewerParticipant:c('MercuryParticipants').getOrFetch(c('MercuryIDs').getParticipantIDFromUserID(r.viewer)),settings:c('MessengerSettingsStore').getSettings(),mPrefs:c('OmniMStore').prefs()};}},getInitialState:function q(){return {desktopNotifsDenied:c('MessengerDesktopNotifications').isDenied(),desktopNotifsGranted:c('MessengerDesktopNotifications').isGranted()};},componentWillMount:function q(){c('EmojiDispatcher').explicitlyRegisterStores([c('EmojiStateStore')]);this._privacyToken=c('PresencePrivacy').subscribe('privacy-user-presence-changed',function(){this.setState({isUserAvailable:c('PresencePrivacy').getVisibility()===c('PresencePrivacy').ONLINE});}.bind(this));},componentDidMount:function q(){if(this.state.emojiColorPref===undefined)c('EmojiActions').getEmojiColor();},componentWillUnmount:function q(){this._privacyToken&&this._privacyToken.unsubscribe();},render:function q(){return c('React').createElement(c('MessengerDialog.react'),{onToggle:this._handleToggle,ref:'dialog',type:'default',width:544},c('React').createElement(c('MessengerDialogHeader.react'),null,c('React').createElement(c('MessengerDialogTitle.react'),null,i._("Settings")),c('React').createElement(c('MessengerDialogButton.react'),{label:i._("Done"),onClick:this._handleDone,type:'primary'})),c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("Account")),c('React').createElement('div',{className:"_374d"},this._renderAccountSection())),c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("Sounds")),c('React').createElement('div',{className:"_374d"},c('React').createElement(c('MessengerCheckboxInput.react'),{checked:this.state.settings.sound_enabled,onChange:this._handleSoundChange}),c('React').createElement('span',{className:"_1pr_"},i._("Enabled")))),this._renderConstrainWidthSection(),this._renderNotificationsSection(),this._renderBlockingSection(),c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("Emoji")),c('React').createElement('div',{className:"_374d _5jb0"},this._renderEmojiColorSection())),this._renderOmniMSection());},_renderBlockingSection:function q(){if(c('CurrentUser').isWorkUser())return null;return c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("Blocking")),c('React').createElement('div',{className:"_374d"},c('React').createElement(c('Link.react'),{href:'https://www.facebook.com/settings?tab=blocking',target:'_blank'},i._("Manage on Facebook"))));},_renderAccountSection:function q(){if(!this.state.viewerParticipant)return c('React').createElement(c('MessengerSpinner.react'),null);return c('React').createElement(l,{className:"_3xld",isUserAvailable:this.state.isUserAvailable,onAvailabilityChange:this._handleTogglePresence,viewerData:this.state.viewerParticipant});},_renderOmniMSection:function q(){if(!c('MercuryConfig').OmniMEditConfidenceThreshold)return null;var r=this.state.mPrefs,s=c('OmniMHelpers').suggestionMode(r);return c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("M Suggestion Mode")),c('React').createElement('div',{className:"_374d"},c('React').createElement(c('XUISingleSelector.react'),{value:s,className:"_4_ff",onChange:this._handleOmniMModeChange},c('React').createElement(m,{key:3,value:3},i._("Muted")),c('React').createElement(m,{key:0,value:0},i._("Conservative")),c('React').createElement(m,{key:1,value:1},i._("Balanced")),c('React').createElement(m,{key:2,value:2},i._("Aggressive")))));},_renderNotificationsSection:function q(){if(!c('MessengerDesktopNotifications').isSupported())return null;return c('React').createElement('div',{className:"_374b"+(this.state.desktopNotifsDenied?' '+"_2bd0":'')},c('React').createElement('div',{className:"_374c"},i._("Notifications")),c('React').createElement('div',{className:"_374d"},this._renderNotificationsContent()));},_renderConstrainWidthSection:function q(){if(!c('MessengerConfig').ConstrainWidth)return null;return c('React').createElement('div',{className:"_374b"},c('React').createElement('div',{className:"_374c"},i._("Max Width")),c('React').createElement('div',{className:"_374d"},c('React').createElement(c('MessengerCheckboxInput.react'),{checked:this.state.settings.constrained_width,onChange:this._handleWidthChange}),c('React').createElement('span',{className:"_1pr_"},i._("Constrained"))));},_renderNotificationsContent:function q(){if(this.state.desktopNotifsDenied){return i._("You can allow Messenger to send you desktop notifications from your browser preferences.");}else return [c('React').createElement(c('MessengerCheckboxInput.react'),{checked:this.state.settings.desktopNotifsEnabled&&this.state.desktopNotifsGranted,key:'notifications-checkox',onChange:this._handleNotificationsChange}),c('React').createElement('span',{key:'notifications-checkbox-label',className:"_1pr_"},i._("Desktop notifications enabled"))];},_renderEmojiColorSection:function q(){if(this.state.emojiColorPref===undefined)return c('React').createElement(c('MessengerSpinner.react'),null);return c('React').createElement(c('ChatEmojiSkinTonePreferencePicker.react'),{currentPreference:this.state.emojiColorPref,onSelect:this._handleChooseEmojiColor});},_handleOmniMModeChange:function q(r){if(r.value!==null&&r.value!==undefined)c('OmniMActions').suggestionModeSet(parseInt(r.value,10));},_handleSoundChange:function q(event){event.target instanceof HTMLInputElement||j(0);c('MessengerSettingsActions').changeSettings({sound_enabled:event.target.checked});},_handleWidthChange:function q(event){event.target instanceof HTMLInputElement||j(0);c('MessengerSettingsActions').changeSettings({constrained_width:event.target.checked});},_handleNotificationsChange:function q(){c('MessengerSettingsActions').changeDesktopNotifs(!this.state.settings.desktopNotifsEnabled,this._handleDenied);},_handleChooseEmojiColor:function q(r){if(r!==this.state.emojiColorPref)c('EmojiActions').changeEmojiColor(r);},_handleDenied:function q(){this.setState({desktopNotifsDenied:true});},_handleDone:function q(event){event.preventDefault();c('messengerDialogsRe').removeDialog();},_handleToggle:function q(r){if(!r)c('messengerDialogsRe').removeDialog();},_handleTogglePresence:function q(){c('PresencePrivacy').setVisibility(this.state.isUserAvailable?c('PresencePrivacy').OFFLINE:c('PresencePrivacy').ONLINE);this.setState({isUserAvailable:!this.state.isUserAvailable});}});f.exports=p;}),null);