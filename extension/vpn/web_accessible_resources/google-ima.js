"use strict";if(!window.google||!window.google.ima||!window.google.ima.VERSION){const e="3.517.2",t=function(){const e=new Blob([new Uint32Array([469762048,1887007846,1752392036,0,913273705,1717987696,828601953,-1878917120,1987014509,1811939328,1684567661,0,0,0,-402456576,0,256,1,0,0,256,0,0,0,256,0,0,0,64,0,0,0,0,0,0,33554432,-201261056,1801548404,1744830464,1684564852,251658241,0,0,0,0,16777216,0,-1,-1,0,0,0,0,256,0,0,0,256,0,0,0,64,5,53250,-2080309248,1634296941,738197504,1684563053,1,0,0,0,0,-2137614336,-1,-1,50261,754974720,1919706216,0,0,1701079414,0,0,0,1701079382,1851869295,1919249508,16777216,1852402979,102,1752004116,100,1,0,0,1852400676,102,1701995548,102,0,1,1819440396,32,1,1651799011,108,1937011607,100,0,1,1668702599,49,0,1,0,0,0,33555712,4718800,4718592,0,65536,0,0,0,0,0,0,0,0,16776984,1630601216,21193590,-14745500,1729626337,-1407254428,89161945,1049019,9453056,-251611125,27269507,-379058688,-1329024392,268435456,1937011827,0,0,268435456,1668510835,0,0,335544320,2054386803,0,0,0,268435456,1868788851,0,0,671088640,2019915373,536870912,2019914356,0,16777216,16777216,0,0,0])],{type:"video/mp4"});let t;return function(){return t||(t=document.createElement("video"),t.style="position:absolute; width:0; height:0; left:0; right:0; z-index:-1; border:0",t.setAttribute("muted","muted"),t.setAttribute("playsinline","playsinline"),t.src=URL.createObjectURL(e),document.body.appendChild(t)),t.play()}}(),r={};class s{destroy(){}initialize(){}}class n{constructor(){this.c=!0,this.f={},this.i=!1,this.l="",this.p="",this.r=0,this.t="",this.v=""}getCompanionBackfill(){}getDisableCustomPlaybackForIOS10Plus(){return this.i}getFeatureFlags(){return this.f}getLocale(){return this.l}getNumRedirects(){return this.r}getPlayerType(){return this.t}getPlayerVersion(){return this.v}getPpid(){return this.p}isCookiesEnabled(){return this.c}setAutoPlayAdBreaks(){}setCompanionBackfill(){}setCookiesEnabled(e){this.c=!!e}setDisableCustomPlaybackForIOS10Plus(e){this.i=!!e}setFeatureFlags(e){this.f=e}setLocale(e){this.l=e}setNumRedirects(e){this.r=e}setPlayerType(e){this.t=e}setPlayerVersion(e){this.v=e}setPpid(e){this.p=e}setSessionId(){}setVpaidAllowed(){}setVpaidMode(){}getDisableFlashAds(){}setDisableFlashAds(){}}n.CompanionBackfillMode={ALWAYS:"always",ON_MASTER_AD:"on_master_ad"},n.VpaidMode={DISABLED:0,ENABLED:1,INSECURE:2};class i{constructor(){this.listeners=new Map}_dispatch(e){const t=this.listeners.get(e.type)||[];for(const r of Array.from(t))try{r(e)}catch(e){console.error(e)}}addEventListener(e,t){this.listeners.has(e)||this.listeners.set(e,new Set),this.listeners.get(e).add(t)}removeEventListener(e,t){const r=this.listeners.get(e);r&&r.delete(t)}}class a extends i{constructor(){super(),this.settings=new n}contentComplete(){}destroy(){}getSettings(){return this.settings}getVersion(){return e}requestAds(){t().then((()=>{const{ADS_MANAGER_LOADED:e}=T.Type;this._dispatch(new r.AdsManagerLoadedEvent(e))}),(()=>{const e=new r.AdError("adPlayError",1205,1205,"The browser prevented playback initiated without user interaction.");this._dispatch(new r.AdErrorEvent(e))}))}}class o extends i{constructor(){super(),this.volume=1}collapse(){}configureAdsManager(){}destroy(){}discardAdBreak(){}expand(){}focus(){}getAdSkippableState(){return!1}getCuePoints(){return[0]}getCurrentAd(){return E}getCurrentAdCuePoints(){return[]}getRemainingTime(){return 0}getVolume(){return this.volume}init(){}isCustomClickTrackingUsed(){return!1}isCustomPlaybackUsed(){return!1}pause(){}requestNextAdBreak(){}resize(){}resume(){}setVolume(e){this.volume=e}skip(){}start(){requestAnimationFrame((()=>{for(const e of[p.Type.LOADED,p.Type.STARTED,p.Type.CONTENT_RESUME_REQUESTED,p.Type.AD_BUFFERING,p.Type.FIRST_QUARTILE,p.Type.MIDPOINT,p.Type.THIRD_QUARTILE,p.Type.COMPLETE,p.Type.ALL_ADS_COMPLETED])try{this._dispatch(new r.AdEvent(e))}catch(e){console.error(e)}}))}stop(){}updateAdsRenderingSettings(){}}class d{}class u{setAdWillAutoPlay(){}setAdWillPlayMuted(){}setContinuousPlayback(){}}class l{getAdPosition(){return 1}getIsBumper(){return!1}getMaxDuration(){return-1}getPodIndex(){return 1}getTimeOffset(){return 0}getTotalAds(){return 1}}class g{constructor(){this._pi=new l}getAdId(){return""}getAdPodInfo(){return this._pi}getAdSystem(){return""}getAdvertiserName(){return""}getApiFramework(){return null}getCompanionAds(){return[]}getContentType(){return""}getCreativeAdId(){return""}getCreativeId(){return""}getDealId(){return""}getDescription(){return""}getDuration(){return 8.5}getHeight(){return 0}getMediaUrl(){return null}getMinSuggestedDuration(){return-2}getSkipTimeOffset(){return-1}getSurveyUrl(){return null}getTitle(){return""}getTraffickingParameters(){return{}}getTraffickingParametersString(){return""}getUiElements(){return[""]}getUniversalAdIdRegistry(){return"unknown"}getUniversalAdIds(){return[""]}getUniversalAdIdValue(){return"unknown"}getVastMediaBitrate(){return 0}getVastMediaHeight(){return 0}getVastMediaWidth(){return 0}getWidth(){return 0}getWrapperAdIds(){return[""]}getWrapperAdSystems(){return[""]}getWrapperCreativeIds(){return[""]}isLinear(){return!0}isSkippable(){return!0}}class A{getAdSlotId(){return""}getContent(){return""}getContentType(){return""}getHeight(){return 1}getWidth(){return 1}}class c{constructor(e,t,r,s){this.errorCode=t,this.message=s,this.type=e,this.vastErrorCode=r}getErrorCode(){return this.errorCode}getInnerError(){return null}getMessage(){return this.message}getType(){return this.type}getVastErrorCode(){return this.vastErrorCode}toString(){return`AdError ${this.errorCode}: ${this.message}`}}c.ErrorCode={},c.Type={};const E=(()=>{try{for(const e of Object.values(window.vidible._getContexts())){const t=e.getPlayer();if(!t)continue;const r=t.div;if(r&&r.innerHTML.includes("www.engadget.com"))return!0}}catch(e){}return!1})()?void 0:new g;class p{constructor(e){this.type=e}getAd(){return E}getAdData(){return{}}}p.Type={AD_BREAK_READY:"adBreakReady",AD_BUFFERING:"adBuffering",AD_CAN_PLAY:"adCanPlay",AD_METADATA:"adMetadata",AD_PROGRESS:"adProgress",ALL_ADS_COMPLETED:"allAdsCompleted",CLICK:"click",COMPLETE:"complete",CONTENT_PAUSE_REQUESTED:"contentPauseRequested",CONTENT_RESUME_REQUESTED:"contentResumeRequested",DURATION_CHANGE:"durationChange",EXPANDED_CHANGED:"expandedChanged",FIRST_QUARTILE:"firstQuartile",IMPRESSION:"impression",INTERACTION:"interaction",LINEAR_CHANGE:"linearChange",LINEAR_CHANGED:"linearChanged",LOADED:"loaded",LOG:"log",MIDPOINT:"midpoint",PAUSED:"pause",RESUMED:"resume",SKIPPABLE_STATE_CHANGED:"skippableStateChanged",SKIPPED:"skip",STARTED:"start",THIRD_QUARTILE:"thirdQuartile",USER_CLOSE:"userClose",VIDEO_CLICKED:"videoClicked",VIDEO_ICON_CLICKED:"videoIconClicked",VIEWABLE_IMPRESSION:"viewable_impression",VOLUME_CHANGED:"volumeChange",VOLUME_MUTED:"mute"};class h{constructor(e){this.type="adError",this.error=e}getError(){return this.error}getUserRequestContext(){return{}}}h.Type={AD_ERROR:"adError"};const C=new o;class T{constructor(e){this.type=e}getAdsManager(){return C}getUserRequestContext(){return{}}}T.Type={ADS_MANAGER_LOADED:"adsManagerLoaded"};class I{}I.Type={CUSTOM_CONTENT_LOADED:"deprecated-event"};class m{}m.CreativeType={ALL:"All",FLASH:"Flash",IMAGE:"Image"},m.ResourceType={ALL:"All",HTML:"Html",IFRAME:"IFrame",STATIC:"Static"},m.SizeCriteria={IGNORE:"IgnoreSize",SELECT_EXACT_MATCH:"SelectExactMatch",SELECT_NEAR_MATCH:"SelectNearMatch"};class D{getCuePoints(){return[]}}class y{}class S{getAdIdRegistry(){return""}getAdIsValue(){return""}}Object.assign(r,{AdCuePoints:D,AdDisplayContainer:s,AdError:c,AdErrorEvent:h,AdEvent:p,AdPodInfo:l,AdProgressData:y,AdsLoader:a,AdsManager:C,AdsManagerLoadedEvent:T,AdsRenderingSettings:d,AdsRequest:u,CompanionAd:A,CompanionAdSelectionSettings:m,CustomContentLoadedEvent:I,gptProxyInstance:{},ImaSdkSettings:n,OmidAccessMode:{DOMAIN:"domain",FULL:"full",LIMITED:"limited"},OmidVerificationVendor:new Proxy({},{get:(e,t)=>"number"==typeof t?"":0}),settings:new n,UiElements:{AD_ATTRIBUTION:"adAttribution",COUNTDOWN:"countdown"},UniversalAdIdInfo:S,VERSION:e,ViewMode:{FULLSCREEN:"fullscreen",NORMAL:"normal"}}),window.google||(window.google={}),window.google.ima=r}