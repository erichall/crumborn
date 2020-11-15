goog.provide('crumborn.main');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('taoensso.timbre');
goog.require('crumborn.view.app');
goog.require('crumborn.interop');
goog.require('crumborn.core');
goog.require('crumborn.theme');
goog.require('crumborn.theme.light');
goog.require('crumborn.theme.dark');
goog.require('crumborn.websocket');
goog.require('cljs.core.async');
cljs.core.enable_console_print_BANG_();
if(crumborn.core.is_release_QMARK_()){
taoensso.timbre.set_level_BANG_(new cljs.core.Keyword(null,"fatal","fatal",1874419888));
} else {
}
crumborn.main.message_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
crumborn.main.page_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
crumborn.main.subscription_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
if((typeof crumborn !== 'undefined') && (typeof crumborn.main !== 'undefined') && (typeof crumborn.main.app_state_atom !== 'undefined')){
} else {
crumborn.main.app_state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof crumborn !== 'undefined') && (typeof crumborn.main !== 'undefined') && (typeof crumborn.main.channel_atom !== 'undefined')){
} else {
crumborn.main.channel_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"channel","channel",734187692),null,new cljs.core.Keyword(null,"id","id",-1388402092),null,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521),(0),new cljs.core.Keyword(null,"max-reconnection-attemps","max-reconnection-attemps",1643202530),(10)], null));
}
crumborn.main.make_mutation_channel = (function crumborn$main$make_mutation_channel(node){
var mutation_channel = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var observer = (new MutationObserver((function (mutations){
var seq__31771 = cljs.core.seq(mutations);
var chunk__31772 = null;
var count__31773 = (0);
var i__31774 = (0);
while(true){
if((i__31774 < count__31773)){
var m = chunk__31772.cljs$core$IIndexed$_nth$arity$2(null,i__31774);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_channel,m);


var G__32313 = seq__31771;
var G__32314 = chunk__31772;
var G__32315 = count__31773;
var G__32316 = (i__31774 + (1));
seq__31771 = G__32313;
chunk__31772 = G__32314;
count__31773 = G__32315;
i__31774 = G__32316;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__31771);
if(temp__5735__auto__){
var seq__31771__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__31771__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__31771__$1);
var G__32317 = cljs.core.chunk_rest(seq__31771__$1);
var G__32318 = c__4609__auto__;
var G__32319 = cljs.core.count(c__4609__auto__);
var G__32320 = (0);
seq__31771 = G__32317;
chunk__31772 = G__32318;
count__31773 = G__32319;
i__31774 = G__32320;
continue;
} else {
var m = cljs.core.first(seq__31771__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_channel,m);


var G__32321 = cljs.core.next(seq__31771__$1);
var G__32322 = null;
var G__32323 = (0);
var G__32324 = (0);
seq__31771 = G__32321;
chunk__31772 = G__32322;
count__31773 = G__32323;
i__31774 = G__32324;
continue;
}
} else {
return null;
}
}
break;
}
})));
observer.observe(node,({"characterData": true, "childList": false, "subtree": true}));

return mutation_channel;
});
crumborn.main.initial_state = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"size","size",1098693007),crumborn.interop.get_window_size(),new cljs.core.Keyword(null,"active-page","active-page",370357330),(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0());
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"front-page","front-page",-663760939);
}
})(),new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"loading","loading",-737050189),true,new cljs.core.Keyword(null,"identity","identity",1647396035),null,new cljs.core.Keyword(null,"visitors","visitors",1404506988),null], null);
if((typeof crumborn !== 'undefined') && (typeof crumborn.main !== 'undefined') && (typeof crumborn.main.consumers_atom !== 'undefined')){
} else {
crumborn.main.consumers_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
}
crumborn.main.publish_message = (function crumborn$main$publish_message(message){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.message_channel,message);
});
crumborn.main.subscribe = (function crumborn$main$subscribe(p__31775){
var map__31776 = p__31775;
var map__31776__$1 = (((((!((map__31776 == null))))?(((((map__31776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31776.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31776):map__31776);
var event_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callback_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31776__$1,new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.consumers_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),callback_fn);

var c__25761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25762__auto__ = (function (){var switch__25723__auto__ = (function (state_31852){
var state_val_31853 = (state_31852[(1)]);
if((state_val_31853 === (7))){
var inst_31797 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31797)){
var statearr_31854_32325 = state_31852__$1;
(statearr_31854_32325[(1)] = (11));

} else {
var statearr_31855_32326 = state_31852__$1;
(statearr_31855_32326[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (20))){
var state_31852__$1 = state_31852;
var statearr_31856_32327 = state_31852__$1;
(statearr_31856_32327[(2)] = null);

(statearr_31856_32327[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (1))){
var state_31852__$1 = state_31852;
var statearr_31857_32328 = state_31852__$1;
(statearr_31857_32328[(2)] = null);

(statearr_31857_32328[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (24))){
var inst_31840 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31858_32329 = state_31852__$1;
(statearr_31858_32329[(2)] = inst_31840);

(statearr_31858_32329[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (4))){
var inst_31781 = (state_31852[(7)]);
var inst_31781__$1 = (state_31852[(2)]);
var inst_31783 = (inst_31781__$1 == null);
var inst_31784 = cljs.core.not(inst_31783);
var state_31852__$1 = (function (){var statearr_31859 = state_31852;
(statearr_31859[(7)] = inst_31781__$1);

return statearr_31859;
})();
if(inst_31784){
var statearr_31860_32330 = state_31852__$1;
(statearr_31860_32330[(1)] = (5));

} else {
var statearr_31861_32331 = state_31852__$1;
(statearr_31861_32331[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (15))){
var inst_31847 = (state_31852[(2)]);
var state_31852__$1 = (function (){var statearr_31862 = state_31852;
(statearr_31862[(8)] = inst_31847);

return statearr_31862;
})();
var statearr_31863_32332 = state_31852__$1;
(statearr_31863_32332[(2)] = null);

(statearr_31863_32332[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (21))){
var inst_31843 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31864_32333 = state_31852__$1;
(statearr_31864_32333[(2)] = inst_31843);

(statearr_31864_32333[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (13))){
var inst_31802 = (state_31852[(2)]);
var inst_31803 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31802,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var inst_31804 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31802,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_31809 = cljs.core.deref(crumborn.main.consumers_atom);
var inst_31810 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31809,inst_31803);
var inst_31811 = cljs.core.vals(inst_31810);
var inst_31812 = cljs.core.seq(inst_31811);
var inst_31813 = inst_31812;
var inst_31814 = null;
var inst_31815 = (0);
var inst_31816 = (0);
var state_31852__$1 = (function (){var statearr_31865 = state_31852;
(statearr_31865[(9)] = inst_31813);

(statearr_31865[(10)] = inst_31815);

(statearr_31865[(11)] = inst_31814);

(statearr_31865[(12)] = inst_31816);

(statearr_31865[(13)] = inst_31804);

return statearr_31865;
})();
var statearr_31866_32334 = state_31852__$1;
(statearr_31866_32334[(2)] = null);

(statearr_31866_32334[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (22))){
var inst_31826 = (state_31852[(14)]);
var inst_31830 = cljs.core.chunk_first(inst_31826);
var inst_31831 = cljs.core.chunk_rest(inst_31826);
var inst_31832 = cljs.core.count(inst_31830);
var inst_31813 = inst_31831;
var inst_31814 = inst_31830;
var inst_31815 = inst_31832;
var inst_31816 = (0);
var state_31852__$1 = (function (){var statearr_31867 = state_31852;
(statearr_31867[(9)] = inst_31813);

(statearr_31867[(10)] = inst_31815);

(statearr_31867[(11)] = inst_31814);

(statearr_31867[(12)] = inst_31816);

return statearr_31867;
})();
var statearr_31868_32335 = state_31852__$1;
(statearr_31868_32335[(2)] = null);

(statearr_31868_32335[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (6))){
var state_31852__$1 = state_31852;
var statearr_31869_32336 = state_31852__$1;
(statearr_31869_32336[(2)] = false);

(statearr_31869_32336[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (17))){
var inst_31813 = (state_31852[(9)]);
var inst_31826 = (state_31852[(14)]);
var inst_31826__$1 = cljs.core.seq(inst_31813);
var state_31852__$1 = (function (){var statearr_31870 = state_31852;
(statearr_31870[(14)] = inst_31826__$1);

return statearr_31870;
})();
if(inst_31826__$1){
var statearr_31871_32337 = state_31852__$1;
(statearr_31871_32337[(1)] = (19));

} else {
var statearr_31872_32338 = state_31852__$1;
(statearr_31872_32338[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (3))){
var inst_31850 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31852__$1,inst_31850);
} else {
if((state_val_31853 === (12))){
var inst_31781 = (state_31852[(7)]);
var state_31852__$1 = state_31852;
var statearr_31873_32339 = state_31852__$1;
(statearr_31873_32339[(2)] = inst_31781);

(statearr_31873_32339[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (2))){
var state_31852__$1 = state_31852;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31852__$1,(4),crumborn.main.subscription_channel);
} else {
if((state_val_31853 === (23))){
var inst_31826 = (state_31852[(14)]);
var inst_31804 = (state_31852[(13)]);
var inst_31835 = cljs.core.first(inst_31826);
var inst_31836 = (inst_31835.cljs$core$IFn$_invoke$arity$1 ? inst_31835.cljs$core$IFn$_invoke$arity$1(inst_31804) : inst_31835.call(null,inst_31804));
var inst_31837 = cljs.core.next(inst_31826);
var inst_31813 = inst_31837;
var inst_31814 = null;
var inst_31815 = (0);
var inst_31816 = (0);
var state_31852__$1 = (function (){var statearr_31874 = state_31852;
(statearr_31874[(9)] = inst_31813);

(statearr_31874[(10)] = inst_31815);

(statearr_31874[(11)] = inst_31814);

(statearr_31874[(12)] = inst_31816);

(statearr_31874[(15)] = inst_31836);

return statearr_31874;
})();
var statearr_31875_32340 = state_31852__$1;
(statearr_31875_32340[(2)] = null);

(statearr_31875_32340[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (19))){
var inst_31826 = (state_31852[(14)]);
var inst_31828 = cljs.core.chunked_seq_QMARK_(inst_31826);
var state_31852__$1 = state_31852;
if(inst_31828){
var statearr_31876_32341 = state_31852__$1;
(statearr_31876_32341[(1)] = (22));

} else {
var statearr_31877_32342 = state_31852__$1;
(statearr_31877_32342[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (11))){
var inst_31781 = (state_31852[(7)]);
var inst_31799 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31781);
var state_31852__$1 = state_31852;
var statearr_31878_32343 = state_31852__$1;
(statearr_31878_32343[(2)] = inst_31799);

(statearr_31878_32343[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (9))){
var state_31852__$1 = state_31852;
var statearr_31879_32344 = state_31852__$1;
(statearr_31879_32344[(2)] = false);

(statearr_31879_32344[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (5))){
var inst_31781 = (state_31852[(7)]);
var inst_31786 = inst_31781.cljs$lang$protocol_mask$partition0$;
var inst_31787 = (inst_31786 & (64));
var inst_31788 = inst_31781.cljs$core$ISeq$;
var inst_31789 = (cljs.core.PROTOCOL_SENTINEL === inst_31788);
var inst_31790 = ((inst_31787) || (inst_31789));
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31790)){
var statearr_31883_32345 = state_31852__$1;
(statearr_31883_32345[(1)] = (8));

} else {
var statearr_31884_32346 = state_31852__$1;
(statearr_31884_32346[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (14))){
var inst_31815 = (state_31852[(10)]);
var inst_31816 = (state_31852[(12)]);
var inst_31818 = (inst_31816 < inst_31815);
var inst_31819 = inst_31818;
var state_31852__$1 = state_31852;
if(cljs.core.truth_(inst_31819)){
var statearr_31885_32347 = state_31852__$1;
(statearr_31885_32347[(1)] = (16));

} else {
var statearr_31886_32348 = state_31852__$1;
(statearr_31886_32348[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (16))){
var inst_31813 = (state_31852[(9)]);
var inst_31815 = (state_31852[(10)]);
var inst_31814 = (state_31852[(11)]);
var inst_31816 = (state_31852[(12)]);
var inst_31804 = (state_31852[(13)]);
var inst_31821 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31814,inst_31816);
var inst_31822 = (inst_31821.cljs$core$IFn$_invoke$arity$1 ? inst_31821.cljs$core$IFn$_invoke$arity$1(inst_31804) : inst_31821.call(null,inst_31804));
var inst_31823 = (inst_31816 + (1));
var tmp31880 = inst_31813;
var tmp31881 = inst_31815;
var tmp31882 = inst_31814;
var inst_31813__$1 = tmp31880;
var inst_31814__$1 = tmp31882;
var inst_31815__$1 = tmp31881;
var inst_31816__$1 = inst_31823;
var state_31852__$1 = (function (){var statearr_31887 = state_31852;
(statearr_31887[(9)] = inst_31813__$1);

(statearr_31887[(16)] = inst_31822);

(statearr_31887[(10)] = inst_31815__$1);

(statearr_31887[(11)] = inst_31814__$1);

(statearr_31887[(12)] = inst_31816__$1);

return statearr_31887;
})();
var statearr_31888_32349 = state_31852__$1;
(statearr_31888_32349[(2)] = null);

(statearr_31888_32349[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (10))){
var inst_31794 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31889_32350 = state_31852__$1;
(statearr_31889_32350[(2)] = inst_31794);

(statearr_31889_32350[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (18))){
var inst_31845 = (state_31852[(2)]);
var state_31852__$1 = state_31852;
var statearr_31890_32351 = state_31852__$1;
(statearr_31890_32351[(2)] = inst_31845);

(statearr_31890_32351[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31853 === (8))){
var state_31852__$1 = state_31852;
var statearr_31891_32352 = state_31852__$1;
(statearr_31891_32352[(2)] = true);

(statearr_31891_32352[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var crumborn$main$subscribe_$_state_machine__25724__auto__ = null;
var crumborn$main$subscribe_$_state_machine__25724__auto____0 = (function (){
var statearr_31892 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31892[(0)] = crumborn$main$subscribe_$_state_machine__25724__auto__);

(statearr_31892[(1)] = (1));

return statearr_31892;
});
var crumborn$main$subscribe_$_state_machine__25724__auto____1 = (function (state_31852){
while(true){
var ret_value__25725__auto__ = (function (){try{while(true){
var result__25726__auto__ = switch__25723__auto__(state_31852);
if(cljs.core.keyword_identical_QMARK_(result__25726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25726__auto__;
}
break;
}
}catch (e31893){if((e31893 instanceof Object)){
var ex__25727__auto__ = e31893;
var statearr_31894_32353 = state_31852;
(statearr_31894_32353[(5)] = ex__25727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31852);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31893;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32354 = state_31852;
state_31852 = G__32354;
continue;
} else {
return ret_value__25725__auto__;
}
break;
}
});
crumborn$main$subscribe_$_state_machine__25724__auto__ = function(state_31852){
switch(arguments.length){
case 0:
return crumborn$main$subscribe_$_state_machine__25724__auto____0.call(this);
case 1:
return crumborn$main$subscribe_$_state_machine__25724__auto____1.call(this,state_31852);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$subscribe_$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$subscribe_$_state_machine__25724__auto____0;
crumborn$main$subscribe_$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$subscribe_$_state_machine__25724__auto____1;
return crumborn$main$subscribe_$_state_machine__25724__auto__;
})()
})();
var state__25763__auto__ = (function (){var statearr_31895 = (f__25762__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25762__auto__.cljs$core$IFn$_invoke$arity$0() : f__25762__auto__.call(null));
(statearr_31895[(6)] = c__25761__auto__);

return statearr_31895;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25763__auto__);
}));

return c__25761__auto__;
});
crumborn.main.pages = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"front-page","front-page",-663760939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"front-page","front-page",-663760939),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.front_page,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32355__delegate = function (p__31896){
var vec__31897 = p__31896;
var map__31900 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31897,(0),null);
var map__31900__$1 = (((((!((map__31900 == null))))?(((((map__31900.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31900.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31900):map__31900);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31900__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"front-page","front-page",-663760939)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"front-page-facts","front-page-facts",155343637)], null));
}
};
var G__32355 = function (var_args){
var p__31896 = null;
if (arguments.length > 0) {
var G__32356__i = 0, G__32356__a = new Array(arguments.length -  0);
while (G__32356__i < G__32356__a.length) {G__32356__a[G__32356__i] = arguments[G__32356__i + 0]; ++G__32356__i;}
  p__31896 = new cljs.core.IndexedSeq(G__32356__a,0,null);
} 
return G__32355__delegate.call(this,p__31896);};
G__32355.cljs$lang$maxFixedArity = 0;
G__32355.cljs$lang$applyTo = (function (arglist__32357){
var p__31896 = cljs.core.seq(arglist__32357);
return G__32355__delegate(p__31896);
});
G__32355.cljs$core$IFn$_invoke$arity$variadic = G__32355__delegate;
return G__32355;
})()
], null),new cljs.core.Keyword(null,"resume","resume",-118572261),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resume","resume",-118572261),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.resume,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32358__delegate = function (p__31902){
var vec__31903 = p__31902;
var map__31906 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31903,(0),null);
var map__31906__$1 = (((((!((map__31906 == null))))?(((((map__31906.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31906.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31906):map__31906);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31906__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"resume","resume",-118572261)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"resume-facts","resume-facts",1205573116)], null));
}
};
var G__32358 = function (var_args){
var p__31902 = null;
if (arguments.length > 0) {
var G__32359__i = 0, G__32359__a = new Array(arguments.length -  0);
while (G__32359__i < G__32359__a.length) {G__32359__a[G__32359__i] = arguments[G__32359__i + 0]; ++G__32359__i;}
  p__31902 = new cljs.core.IndexedSeq(G__32359__a,0,null);
} 
return G__32358__delegate.call(this,p__31902);};
G__32358.cljs$lang$maxFixedArity = 0;
G__32358.cljs$lang$applyTo = (function (arglist__32360){
var p__31902 = cljs.core.seq(arglist__32360);
return G__32358__delegate(p__31902);
});
G__32358.cljs$core$IFn$_invoke$arity$variadic = G__32358__delegate;
return G__32358;
})()
], null),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.posts,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32361__delegate = function (p__31908){
var vec__31909 = p__31908;
var map__31912 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31909,(0),null);
var map__31912__$1 = (((((!((map__31912 == null))))?(((((map__31912.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31912.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31912):map__31912);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31912__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"posts","posts",760043164)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"posts-facts","posts-facts",1079449565)], null));
}
};
var G__32361 = function (var_args){
var p__31908 = null;
if (arguments.length > 0) {
var G__32362__i = 0, G__32362__a = new Array(arguments.length -  0);
while (G__32362__i < G__32362__a.length) {G__32362__a[G__32362__i] = arguments[G__32362__i + 0]; ++G__32362__i;}
  p__31908 = new cljs.core.IndexedSeq(G__32362__a,0,null);
} 
return G__32361__delegate.call(this,p__31908);};
G__32361.cljs$lang$maxFixedArity = 0;
G__32361.cljs$lang$applyTo = (function (arglist__32363){
var p__31908 = cljs.core.seq(arglist__32363);
return G__32361__delegate(p__31908);
});
G__32361.cljs$core$IFn$_invoke$arity$variadic = G__32361__delegate;
return G__32361;
})()
], null),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.post,new cljs.core.Keyword(null,"slug-prefix","slug-prefix",-2094149790),"posts/",new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32364__delegate = function (p__31914){
var vec__31915 = p__31914;
var map__31918 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31915,(0),null);
var map__31918__$1 = (((((!((map__31918 == null))))?(((((map__31918.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31918.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31918):map__31918);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31918__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31918__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(page_data);
var maybe_post = crumborn.core.get_post(app_state,slug);
if(cljs.core.truth_(maybe_post)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"post","post",269697687)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),maybe_post,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"post","post",269697687)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null));

return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-facts","post-facts",1954913486),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),crumborn.core.space__GT_dash(slug)], null)], null));
}
};
var G__32364 = function (var_args){
var p__31914 = null;
if (arguments.length > 0) {
var G__32365__i = 0, G__32365__a = new Array(arguments.length -  0);
while (G__32365__i < G__32365__a.length) {G__32365__a[G__32365__i] = arguments[G__32365__i + 0]; ++G__32365__i;}
  p__31914 = new cljs.core.IndexedSeq(G__32365__a,0,null);
} 
return G__32364__delegate.call(this,p__31914);};
G__32364.cljs$lang$maxFixedArity = 0;
G__32364.cljs$lang$applyTo = (function (arglist__32366){
var p__31914 = cljs.core.seq(arglist__32366);
return G__32364__delegate(p__31914);
});
G__32364.cljs$core$IFn$_invoke$arity$variadic = G__32364__delegate;
return G__32364;
})()
], null),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.portfolio,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32367__delegate = function (_){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"portfolio-facts","portfolio-facts",-1952094314)], null));
};
var G__32367 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__32368__i = 0, G__32368__a = new Array(arguments.length -  0);
while (G__32368__i < G__32368__a.length) {G__32368__a[G__32368__i] = arguments[G__32368__i + 0]; ++G__32368__i;}
  _ = new cljs.core.IndexedSeq(G__32368__a,0,null);
} 
return G__32367__delegate.call(this,_);};
G__32367.cljs$lang$maxFixedArity = 0;
G__32367.cljs$lang$applyTo = (function (arglist__32369){
var _ = cljs.core.seq(arglist__32369);
return G__32367__delegate(_);
});
G__32367.cljs$core$IFn$_invoke$arity$variadic = G__32367__delegate;
return G__32367;
})()
], null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.login,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__32370__delegate = function (_){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"login-facts","login-facts",-390628207)], null));
};
var G__32370 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__32371__i = 0, G__32371__a = new Array(arguments.length -  0);
while (G__32371__i < G__32371__a.length) {G__32371__a[G__32371__i] = arguments[G__32371__i + 0]; ++G__32371__i;}
  _ = new cljs.core.IndexedSeq(G__32371__a,0,null);
} 
return G__32370__delegate.call(this,_);};
G__32370.cljs$lang$maxFixedArity = 0;
G__32370.cljs$lang$applyTo = (function (arglist__32372){
var _ = cljs.core.seq(arglist__32372);
return G__32370__delegate(_);
});
G__32370.cljs$core$IFn$_invoke$arity$variadic = G__32370__delegate;
return G__32370;
})()
], null),new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384),(function (){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"page-selected","page-selected",2091820182),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.Keyword(null,"token","token",-1211463215),crumborn.core.get_identitiy(cljs.core.deref(crumborn.main.app_state_atom))], null)], null));
}),new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function (){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"create-post-facts","create-post-facts",-1278472112)], null));
}),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.create_post], null),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384),(function (){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"page-selected","page-selected",2091820182),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"token","token",-1211463215),crumborn.core.get_identitiy(cljs.core.deref(crumborn.main.app_state_atom))], null)], null));
}),new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function (){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"dashboard-facts","dashboard-facts",942648789)], null));
}),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.dashboard], null)], null);
/**
 * Async rendering of pages
 */
crumborn.main.consume_pages_BANG_ = (function crumborn$main$consume_pages_BANG_(channel){
var c__25761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25762__auto__ = (function (){var switch__25723__auto__ = (function (state_31991){
var state_val_31992 = (state_31991[(1)]);
if((state_val_31992 === (7))){
var inst_31939 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31939)){
var statearr_31993_32373 = state_31991__$1;
(statearr_31993_32373[(1)] = (11));

} else {
var statearr_31994_32374 = state_31991__$1;
(statearr_31994_32374[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (20))){
var inst_31948 = (state_31991[(7)]);
var inst_31947 = (state_31991[(8)]);
var inst_31964 = crumborn.core.space__GT_dash(inst_31947);
var inst_31965 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_31948),inst_31964].join('');
var state_31991__$1 = state_31991;
var statearr_31995_32375 = state_31991__$1;
(statearr_31995_32375[(2)] = inst_31965);

(statearr_31995_32375[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (27))){
var state_31991__$1 = state_31991;
var statearr_31996_32376 = state_31991__$1;
(statearr_31996_32376[(2)] = null);

(statearr_31996_32376[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (1))){
var state_31991__$1 = state_31991;
var statearr_31997_32377 = state_31991__$1;
(statearr_31997_32377[(2)] = null);

(statearr_31997_32377[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (24))){
var inst_31946 = (state_31991[(9)]);
var state_31991__$1 = state_31991;
var statearr_31998_32378 = state_31991__$1;
(statearr_31998_32378[(2)] = inst_31946);

(statearr_31998_32378[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (4))){
var inst_31923 = (state_31991[(10)]);
var inst_31923__$1 = (state_31991[(2)]);
var inst_31925 = (inst_31923__$1 == null);
var inst_31926 = cljs.core.not(inst_31925);
var state_31991__$1 = (function (){var statearr_31999 = state_31991;
(statearr_31999[(10)] = inst_31923__$1);

return statearr_31999;
})();
if(inst_31926){
var statearr_32000_32379 = state_31991__$1;
(statearr_32000_32379[(1)] = (5));

} else {
var statearr_32001_32380 = state_31991__$1;
(statearr_32001_32380[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (15))){
var inst_31944 = (state_31991[(11)]);
var inst_31945 = (state_31991[(12)]);
var inst_31949 = (state_31991[(13)]);
var inst_31948 = (state_31991[(7)]);
var inst_31947 = (state_31991[(8)]);
var inst_31946 = (state_31991[(9)]);
var inst_31953 = (function (){var map__31921 = inst_31944;
var page_data = inst_31944;
var auth_fn = inst_31945;
var prepare_fn = inst_31946;
var slug = inst_31947;
var slug_prefix = inst_31948;
var id = inst_31949;
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"front-page","front-page",-663760939)),new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),null);
});
})();
var inst_31954 = reagent.core.rswap_BANG_(crumborn.main.app_state_atom,inst_31953);
var state_31991__$1 = (function (){var statearr_32002 = state_31991;
(statearr_32002[(14)] = inst_31954);

return statearr_32002;
})();
var statearr_32003_32381 = state_31991__$1;
(statearr_32003_32381[(2)] = null);

(statearr_32003_32381[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (21))){
var inst_31949 = (state_31991[(13)]);
var inst_31967 = cljs.core.name(inst_31949);
var state_31991__$1 = state_31991;
var statearr_32004_32382 = state_31991__$1;
(statearr_32004_32382[(2)] = inst_31967);

(statearr_32004_32382[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (13))){
var inst_31944 = (state_31991[(11)]);
var inst_31949 = (state_31991[(13)]);
var inst_31944__$1 = (state_31991[(2)]);
var inst_31945 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31944__$1,new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384));
var inst_31946 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31944__$1,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865));
var inst_31947 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31944__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var inst_31948 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31944__$1,new cljs.core.Keyword(null,"slug-prefix","slug-prefix",-2094149790));
var inst_31949__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_31944__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_31950 = cljs.core.contains_QMARK_(crumborn.main.pages,inst_31949__$1);
var state_31991__$1 = (function (){var statearr_32005 = state_31991;
(statearr_32005[(11)] = inst_31944__$1);

(statearr_32005[(12)] = inst_31945);

(statearr_32005[(13)] = inst_31949__$1);

(statearr_32005[(7)] = inst_31948);

(statearr_32005[(8)] = inst_31947);

(statearr_32005[(9)] = inst_31946);

return statearr_32005;
})();
if(inst_31950){
var statearr_32006_32383 = state_31991__$1;
(statearr_32006_32383[(1)] = (14));

} else {
var statearr_32007_32384 = state_31991__$1;
(statearr_32007_32384[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (22))){
var inst_31969 = (state_31991[(2)]);
var inst_31970 = crumborn.interop.set_hash_BANG_(inst_31969);
var state_31991__$1 = state_31991;
var statearr_32008_32385 = state_31991__$1;
(statearr_32008_32385[(2)] = inst_31970);

(statearr_32008_32385[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (6))){
var state_31991__$1 = state_31991;
var statearr_32009_32386 = state_31991__$1;
(statearr_32009_32386[(2)] = false);

(statearr_32009_32386[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (28))){
var inst_31986 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32010 = state_31991;
(statearr_32010[(15)] = inst_31986);

return statearr_32010;
})();
var statearr_32011_32387 = state_31991__$1;
(statearr_32011_32387[(2)] = null);

(statearr_32011_32387[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (25))){
var inst_31977 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31977)){
var statearr_32012_32388 = state_31991__$1;
(statearr_32012_32388[(1)] = (26));

} else {
var statearr_32013_32389 = state_31991__$1;
(statearr_32013_32389[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (17))){
var inst_31945 = (state_31991[(12)]);
var inst_31959 = (inst_31945.cljs$core$IFn$_invoke$arity$0 ? inst_31945.cljs$core$IFn$_invoke$arity$0() : inst_31945.call(null));
var state_31991__$1 = state_31991;
var statearr_32014_32390 = state_31991__$1;
(statearr_32014_32390[(2)] = inst_31959);

(statearr_32014_32390[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (3))){
var inst_31989 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31991__$1,inst_31989);
} else {
if((state_val_31992 === (12))){
var inst_31923 = (state_31991[(10)]);
var state_31991__$1 = state_31991;
var statearr_32015_32391 = state_31991__$1;
(statearr_32015_32391[(2)] = inst_31923);

(statearr_32015_32391[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (2))){
var state_31991__$1 = state_31991;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31991__$1,(4),channel);
} else {
if((state_val_31992 === (23))){
var inst_31945 = (state_31991[(12)]);
var inst_31974 = cljs.core.not(inst_31945);
var state_31991__$1 = state_31991;
var statearr_32016_32392 = state_31991__$1;
(statearr_32016_32392[(2)] = inst_31974);

(statearr_32016_32392[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (19))){
var inst_31946 = (state_31991[(9)]);
var inst_31972 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32017 = state_31991;
(statearr_32017[(16)] = inst_31972);

return statearr_32017;
})();
if(cljs.core.truth_(inst_31946)){
var statearr_32018_32393 = state_31991__$1;
(statearr_32018_32393[(1)] = (23));

} else {
var statearr_32019_32394 = state_31991__$1;
(statearr_32019_32394[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (11))){
var inst_31923 = (state_31991[(10)]);
var inst_31941 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_31923);
var state_31991__$1 = state_31991;
var statearr_32020_32395 = state_31991__$1;
(statearr_32020_32395[(2)] = inst_31941);

(statearr_32020_32395[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (9))){
var state_31991__$1 = state_31991;
var statearr_32021_32396 = state_31991__$1;
(statearr_32021_32396[(2)] = false);

(statearr_32021_32396[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (5))){
var inst_31923 = (state_31991[(10)]);
var inst_31928 = inst_31923.cljs$lang$protocol_mask$partition0$;
var inst_31929 = (inst_31928 & (64));
var inst_31930 = inst_31923.cljs$core$ISeq$;
var inst_31931 = (cljs.core.PROTOCOL_SENTINEL === inst_31930);
var inst_31932 = ((inst_31929) || (inst_31931));
var state_31991__$1 = state_31991;
if(cljs.core.truth_(inst_31932)){
var statearr_32022_32397 = state_31991__$1;
(statearr_32022_32397[(1)] = (8));

} else {
var statearr_32023_32398 = state_31991__$1;
(statearr_32023_32398[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (14))){
var state_31991__$1 = state_31991;
var statearr_32024_32399 = state_31991__$1;
(statearr_32024_32399[(2)] = null);

(statearr_32024_32399[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (26))){
var inst_31944 = (state_31991[(11)]);
var inst_31946 = (state_31991[(9)]);
var inst_31979 = [new cljs.core.Keyword(null,"page-data","page-data",1443840710),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)];
var inst_31980 = cljs.core.deref(crumborn.main.app_state_atom);
var inst_31981 = [inst_31944,inst_31980];
var inst_31982 = cljs.core.PersistentHashMap.fromArrays(inst_31979,inst_31981);
var inst_31983 = (inst_31946.cljs$core$IFn$_invoke$arity$1 ? inst_31946.cljs$core$IFn$_invoke$arity$1(inst_31982) : inst_31946.call(null,inst_31982));
var state_31991__$1 = state_31991;
var statearr_32025_32400 = state_31991__$1;
(statearr_32025_32400[(2)] = inst_31983);

(statearr_32025_32400[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (16))){
var inst_31945 = (state_31991[(12)]);
var inst_31957 = (state_31991[(2)]);
var state_31991__$1 = (function (){var statearr_32026 = state_31991;
(statearr_32026[(17)] = inst_31957);

return statearr_32026;
})();
if(cljs.core.truth_(inst_31945)){
var statearr_32027_32401 = state_31991__$1;
(statearr_32027_32401[(1)] = (17));

} else {
var statearr_32028_32402 = state_31991__$1;
(statearr_32028_32402[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (10))){
var inst_31936 = (state_31991[(2)]);
var state_31991__$1 = state_31991;
var statearr_32029_32403 = state_31991__$1;
(statearr_32029_32403[(2)] = inst_31936);

(statearr_32029_32403[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (18))){
var inst_31944 = (state_31991[(11)]);
var inst_31945 = (state_31991[(12)]);
var inst_31949 = (state_31991[(13)]);
var inst_31948 = (state_31991[(7)]);
var inst_31947 = (state_31991[(8)]);
var inst_31946 = (state_31991[(9)]);
var inst_31961 = (function (){var map__31921 = inst_31944;
var page_data = inst_31944;
var auth_fn = inst_31945;
var prepare_fn = inst_31946;
var slug = inst_31947;
var slug_prefix = inst_31948;
var id = inst_31949;
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-page","active-page",370357330),id),new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),(cljs.core.truth_(slug)?slug:null));
});
})();
var inst_31962 = reagent.core.rswap_BANG_(crumborn.main.app_state_atom,inst_31961);
var state_31991__$1 = (function (){var statearr_32030 = state_31991;
(statearr_32030[(18)] = inst_31962);

return statearr_32030;
})();
if(cljs.core.truth_(inst_31947)){
var statearr_32031_32404 = state_31991__$1;
(statearr_32031_32404[(1)] = (20));

} else {
var statearr_32032_32405 = state_31991__$1;
(statearr_32032_32405[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31992 === (8))){
var state_31991__$1 = state_31991;
var statearr_32033_32406 = state_31991__$1;
(statearr_32033_32406[(2)] = true);

(statearr_32033_32406[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__ = null;
var crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____0 = (function (){
var statearr_32034 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32034[(0)] = crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__);

(statearr_32034[(1)] = (1));

return statearr_32034;
});
var crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____1 = (function (state_31991){
while(true){
var ret_value__25725__auto__ = (function (){try{while(true){
var result__25726__auto__ = switch__25723__auto__(state_31991);
if(cljs.core.keyword_identical_QMARK_(result__25726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25726__auto__;
}
break;
}
}catch (e32035){if((e32035 instanceof Object)){
var ex__25727__auto__ = e32035;
var statearr_32036_32407 = state_31991;
(statearr_32036_32407[(5)] = ex__25727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31991);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32035;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32408 = state_31991;
state_31991 = G__32408;
continue;
} else {
return ret_value__25725__auto__;
}
break;
}
});
crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__ = function(state_31991){
switch(arguments.length){
case 0:
return crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____0.call(this);
case 1:
return crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____1.call(this,state_31991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____0;
crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$consume_pages_BANG__$_state_machine__25724__auto____1;
return crumborn$main$consume_pages_BANG__$_state_machine__25724__auto__;
})()
})();
var state__25763__auto__ = (function (){var statearr_32037 = (f__25762__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25762__auto__.cljs$core$IFn$_invoke$arity$0() : f__25762__auto__.call(null));
(statearr_32037[(6)] = c__25761__auto__);

return statearr_32037;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25763__auto__);
}));

return c__25761__auto__;
});
crumborn.main.channel_msg_handler = (function crumborn$main$channel_msg_handler(p__32038){
var map__32039 = p__32038;
var map__32039__$1 = (((((!((map__32039 == null))))?(((((map__32039.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32039.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32039):map__32039);
var event_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32039__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32039__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__32041 = cljs.core._EQ_;
var expr__32042 = event_name;
if(cljs.core.truth_((function (){var G__32044 = new cljs.core.Keyword(null,"connected","connected",-169833045);
var G__32045 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32044,G__32045) : pred__32041.call(null,G__32044,G__32045));
})())){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"loading","loading",-737050189),false)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__32046 = new cljs.core.Keyword(null,"authenticate-success","authenticate-success",1559436070);
var G__32047 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32046,G__32047) : pred__32041.call(null,G__32046,G__32047));
})())){
reagent.core.rswap_BANG_(crumborn.main.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,crumborn.core.get_page(crumborn.main.pages,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)));

return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-template","post-template",-136412588)], null));
} else {
if(cljs.core.truth_((function (){var G__32048 = new cljs.core.Keyword(null,"authenticate-fail","authenticate-fail",1883092039);
var G__32049 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32048,G__32049) : pred__32041.call(null,G__32048,G__32049));
})())){
return reagent.core.rswap_BANG_(crumborn.main.app_state_atom,(function (state){
return crumborn.core.set_loading(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"identity","identity",1647396035),null),false);
}));
} else {
if(cljs.core.truth_((function (){var G__32050 = new cljs.core.Keyword(null,"is-authenticated","is-authenticated",-1486996910);
var G__32051 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32050,G__32051) : pred__32041.call(null,G__32050,G__32051));
})())){
var page = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(crumborn.core.get_page(crumborn.main.pages,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,page);
} else {
if(cljs.core.truth_((function (){var G__32052 = new cljs.core.Keyword(null,"posts","posts",760043164);
var G__32053 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32052,G__32053) : pred__32041.call(null,G__32052,G__32053));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__32054 = new cljs.core.Keyword(null,"not-authenticated","not-authenticated",1520694193);
var G__32055 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32054,G__32055) : pred__32041.call(null,G__32054,G__32055));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"identity","identity",1647396035),null);
} else {
if(cljs.core.truth_((function (){var G__32056 = new cljs.core.Keyword(null,"ping","ping",-1670114784);
var G__32057 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32056,G__32057) : pred__32041.call(null,G__32056,G__32057));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
} else {
if(cljs.core.truth_((function (){var G__32058 = new cljs.core.Keyword(null,"page-count","page-count",2081744960);
var G__32059 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32058,G__32059) : pred__32041.call(null,G__32058,G__32059));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitors","visitors",1404506988),new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(data)], 0));
} else {
if(cljs.core.truth_((function (){var G__32060 = new cljs.core.Keyword(null,"post-template","post-template",-136412588);
var G__32061 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32060,G__32061) : pred__32041.call(null,G__32060,G__32061));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"post-template","post-template",-136412588),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__32062 = new cljs.core.Keyword(null,"post-created","post-created",-358771998);
var G__32063 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32062,G__32063) : pred__32041.call(null,G__32062,G__32063));
})())){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.subscription_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-created","post-created",-358771998),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__32064 = new cljs.core.Keyword(null,"notification","notification",-222338233);
var G__32065 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32064,G__32065) : pred__32041.call(null,G__32064,G__32065));
})())){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.subscription_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__32066 = new cljs.core.Keyword(null,"front-page-facts","front-page-facts",155343637);
var G__32067 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32066,G__32067) : pred__32041.call(null,G__32066,G__32067));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32068 = new cljs.core.Keyword(null,"resume-page-facts","resume-page-facts",-486559793);
var G__32069 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32068,G__32069) : pred__32041.call(null,G__32068,G__32069));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32070 = new cljs.core.Keyword(null,"posts-page-facts","posts-page-facts",1793686667);
var G__32071 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32070,G__32071) : pred__32041.call(null,G__32070,G__32071));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32072 = new cljs.core.Keyword(null,"post-page-facts","post-page-facts",-161725084);
var G__32073 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32072,G__32073) : pred__32041.call(null,G__32072,G__32073));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32074 = new cljs.core.Keyword(null,"portfolio-page-facts","portfolio-page-facts",1873954989);
var G__32075 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32074,G__32075) : pred__32041.call(null,G__32074,G__32075));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32076 = new cljs.core.Keyword(null,"login-page-facts","login-page-facts",741050376);
var G__32077 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32076,G__32077) : pred__32041.call(null,G__32076,G__32077));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32078 = new cljs.core.Keyword(null,"create-post-facts","create-post-facts",-1278472112);
var G__32079 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32078,G__32079) : pred__32041.call(null,G__32078,G__32079));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32080 = new cljs.core.Keyword(null,"dashboard-page-facts","dashboard-page-facts",-777755034);
var G__32081 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32080,G__32081) : pred__32041.call(null,G__32080,G__32081));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__32082 = new cljs.core.Keyword(null,"fact-change","fact-change",1008969562);
var G__32083 = expr__32042;
return (pred__32041.cljs$core$IFn$_invoke$arity$2 ? pred__32041.cljs$core$IFn$_invoke$arity$2(G__32082,G__32083) : pred__32041.call(null,G__32082,G__32083));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no matching clause for ",event_name], null);
}),null)),null,-2079585609,null);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
crumborn.main.handle_event_BANG_ = (function crumborn$main$handle_event_BANG_(p__32084){
var map__32085 = p__32084;
var map__32085__$1 = (((((!((map__32085 == null))))?(((((map__32085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32085):map__32085);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32085__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32085__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__32087 = cljs.core._EQ_;
var expr__32088 = name;
if(cljs.core.truth_((function (){var G__32090 = new cljs.core.Keyword(null,"post-selected","post-selected",-897816517);
var G__32091 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32090,G__32091) : pred__32087.call(null,G__32090,G__32091));
})())){
var state = cljs.core.deref(crumborn.main.app_state_atom);
var acsd = (((!((new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190).cljs$core$IFn$_invoke$arity$1(state) == null))))?crumborn.core.space__GT_dash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190).cljs$core$IFn$_invoke$arity$1(state))):null);
if(crumborn.core.new_slug_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),acsd),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__32092 = new cljs.core.Keyword(null,"page-selected","page-selected",2091820182);
var G__32093 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32092,G__32093) : pred__32087.call(null,G__32092,G__32093));
})())){
if(crumborn.core.new_page_QMARK_(cljs.core.deref(crumborn.main.app_state_atom),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__32094 = new cljs.core.Keyword(null,"toggle-theme","toggle-theme",-91905156);
var G__32095 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32094,G__32095) : pred__32087.call(null,G__32094,G__32095));
})())){
cljs.core.reset_BANG_(crumborn.theme.theme_atom,((crumborn.theme.is_dark_theme_QMARK_())?crumborn.theme.light.theme:crumborn.theme.dark.theme));

return crumborn.interop.set_body_style_BANG_("background-color",crumborn.theme.get_style(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026)], null)));
} else {
if(cljs.core.truth_((function (){var G__32096 = new cljs.core.Keyword(null,"resize","resize",297367086);
var G__32097 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32096,G__32097) : pred__32087.call(null,G__32096,G__32097));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),data);
} else {
if(cljs.core.truth_((function (){var G__32098 = new cljs.core.Keyword(null,"login","login",55217519);
var G__32099 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32098,G__32099) : pred__32087.call(null,G__32098,G__32099));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__32100 = new cljs.core.Keyword(null,"channel-initialized","channel-initialized",1258005104);
var G__32101 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32100,G__32101) : pred__32087.call(null,G__32100,G__32101));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.assoc,new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__32102 = new cljs.core.Keyword(null,"channel-received-msg","channel-received-msg",1856577583);
var G__32103 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32102,G__32103) : pred__32087.call(null,G__32102,G__32103));
})())){
return crumborn.main.channel_msg_handler(data);
} else {
if(cljs.core.truth_((function (){var G__32104 = new cljs.core.Keyword(null,"publish-message","publish-message",-726820327);
var G__32105 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32104,G__32105) : pred__32087.call(null,G__32104,G__32105));
})())){
return crumborn.main.publish_message(data);
} else {
if(cljs.core.truth_((function (){var G__32106 = new cljs.core.Keyword(null,"vote-up","vote-up",1903766974);
var G__32107 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32106,G__32107) : pred__32087.call(null,G__32106,G__32107));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"vote-up","vote-up",1903766974),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)], null));
} else {
if(cljs.core.truth_((function (){var G__32108 = new cljs.core.Keyword(null,"vote-down","vote-down",-153544248);
var G__32109 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32108,G__32109) : pred__32087.call(null,G__32108,G__32109));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"vote-down","vote-down",-153544248),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)], null));
} else {
if(cljs.core.truth_((function (){var G__32110 = new cljs.core.Keyword(null,"page-count-requested","page-count-requested",-1354124023);
var G__32111 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32110,G__32111) : pred__32087.call(null,G__32110,G__32111));
})())){
return crumborn.main.publish_message(data);
} else {
if(cljs.core.truth_((function (){var G__32112 = new cljs.core.Keyword(null,"create-post","create-post",887715866);
var G__32113 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32112,G__32113) : pred__32087.call(null,G__32112,G__32113));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__32114 = new cljs.core.Keyword(null,"reconnect","reconnect",596420411);
var G__32115 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32114,G__32115) : pred__32087.call(null,G__32114,G__32115));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crumborn.main.channel_atom,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null));

return crumborn.websocket.make_websocket_BANG_([crumborn.core.get_ws_url(),"/api/ws/"].join(''),crumborn.main.handle_event_BANG_);
} else {
if(cljs.core.truth_((function (){var G__32116 = new cljs.core.Keyword(null,"subscribe","subscribe",416253756);
var G__32117 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32116,G__32117) : pred__32087.call(null,G__32116,G__32117));
})())){
return crumborn.main.subscribe(data);
} else {
if(cljs.core.truth_((function (){var G__32118 = new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974);
var G__32119 = expr__32088;
return (pred__32087.cljs$core$IFn$_invoke$arity$2 ? pred__32087.cljs$core$IFn$_invoke$arity$2(G__32118,G__32119) : pred__32087.call(null,G__32118,G__32119));
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,262,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data)], null);
}),null)),null,1491382307,null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,265,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handle event has no clause for ",name], null);
}),null)),null,1900104603,null);
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
crumborn.main.wait = (function crumborn$main$wait(ms,fn){
return setTimeout(fn,ms);
});
crumborn.main.consume_messages_BANG_ = (function crumborn$main$consume_messages_BANG_(channel){
var c__25761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25762__auto__ = (function (){var switch__25723__auto__ = (function (state_32242){
var state_val_32243 = (state_32242[(1)]);
if((state_val_32243 === (7))){
var inst_32130 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32130)){
var statearr_32244_32409 = state_32242__$1;
(statearr_32244_32409[(1)] = (8));

} else {
var statearr_32245_32410 = state_32242__$1;
(statearr_32245_32410[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (20))){
var inst_32165 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_32166 = [new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32167 = ["Max connection attempts reached.."];
var inst_32168 = cljs.core.PersistentHashMap.fromArrays(inst_32166,inst_32167);
var inst_32169 = [new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974),inst_32168];
var inst_32170 = cljs.core.PersistentHashMap.fromArrays(inst_32165,inst_32169);
var inst_32171 = crumborn.main.handle_event_BANG_(inst_32170);
var state_32242__$1 = state_32242;
var statearr_32246_32411 = state_32242__$1;
(statearr_32246_32411[(2)] = inst_32171);

(statearr_32246_32411[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (27))){
var state_32242__$1 = state_32242;
var statearr_32247_32412 = state_32242__$1;
(statearr_32247_32412[(2)] = false);

(statearr_32247_32412[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (1))){
var state_32242__$1 = state_32242;
var statearr_32248_32413 = state_32242__$1;
(statearr_32248_32413[(2)] = null);

(statearr_32248_32413[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (24))){
var inst_32124 = (state_32242[(7)]);
var inst_32220 = crumborn.websocket.socket_is_connecting_QMARK_(inst_32124);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32220)){
var statearr_32249_32414 = state_32242__$1;
(statearr_32249_32414[(1)] = (38));

} else {
var statearr_32250_32415 = state_32242__$1;
(statearr_32250_32415[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (39))){
var state_32242__$1 = state_32242;
var statearr_32251_32416 = state_32242__$1;
(statearr_32251_32416[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (4))){
var inst_32124 = (state_32242[(7)]);
var inst_32125 = (state_32242[(8)]);
var inst_32122 = (state_32242[(2)]);
var inst_32123 = cljs.core.deref(crumborn.main.channel_atom);
var inst_32124__$1 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_32123);
var inst_32125__$1 = crumborn.websocket.socket_is_closed_QMARK_(inst_32124__$1);
var state_32242__$1 = (function (){var statearr_32253 = state_32242;
(statearr_32253[(7)] = inst_32124__$1);

(statearr_32253[(9)] = inst_32122);

(statearr_32253[(8)] = inst_32125__$1);

return statearr_32253;
})();
if(cljs.core.truth_(inst_32125__$1)){
var statearr_32254_32417 = state_32242__$1;
(statearr_32254_32417[(1)] = (5));

} else {
var statearr_32255_32418 = state_32242__$1;
(statearr_32255_32418[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (15))){
var state_32242__$1 = state_32242;
var statearr_32256_32419 = state_32242__$1;
(statearr_32256_32419[(2)] = false);

(statearr_32256_32419[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (21))){
var state_32242__$1 = state_32242;
var statearr_32257_32420 = state_32242__$1;
(statearr_32257_32420[(2)] = null);

(statearr_32257_32420[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (31))){
var inst_32195 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32258_32421 = state_32242__$1;
(statearr_32258_32421[(2)] = inst_32195);

(statearr_32258_32421[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (32))){
var inst_32182 = (state_32242[(10)]);
var inst_32200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32182);
var state_32242__$1 = state_32242;
var statearr_32259_32422 = state_32242__$1;
(statearr_32259_32422[(2)] = inst_32200);

(statearr_32259_32422[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (40))){
var inst_32234 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32260_32423 = state_32242__$1;
(statearr_32260_32423[(2)] = inst_32234);

(statearr_32260_32423[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (33))){
var inst_32182 = (state_32242[(10)]);
var state_32242__$1 = state_32242;
var statearr_32261_32424 = state_32242__$1;
(statearr_32261_32424[(2)] = inst_32182);

(statearr_32261_32424[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (13))){
var inst_32155 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32155)){
var statearr_32262_32425 = state_32242__$1;
(statearr_32262_32425[(1)] = (17));

} else {
var statearr_32263_32426 = state_32242__$1;
(statearr_32263_32426[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (22))){
var inst_32175 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32264_32427 = state_32242__$1;
(statearr_32264_32427[(2)] = inst_32175);

(statearr_32264_32427[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (36))){
var state_32242__$1 = state_32242;
var statearr_32265_32428 = state_32242__$1;
(statearr_32265_32428[(2)] = null);

(statearr_32265_32428[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (41))){
var inst_32122 = (state_32242[(9)]);
var inst_32227 = cljs.core.deref(crumborn.main.channel_atom);
var inst_32228 = crumborn.websocket.send_msg_BANG_(inst_32227,inst_32122);
var state_32242__$1 = (function (){var statearr_32266 = state_32242;
(statearr_32266[(11)] = inst_32228);

return statearr_32266;
})();
var statearr_32267_32429 = state_32242__$1;
(statearr_32267_32429[(2)] = null);

(statearr_32267_32429[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (43))){
var inst_32232 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32268_32430 = state_32242__$1;
(statearr_32268_32430[(2)] = inst_32232);

(statearr_32268_32430[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (29))){
var state_32242__$1 = state_32242;
var statearr_32269_32431 = state_32242__$1;
(statearr_32269_32431[(2)] = true);

(statearr_32269_32431[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (6))){
var inst_32124 = (state_32242[(7)]);
var inst_32128 = crumborn.websocket.socket_is_closing_QMARK_(inst_32124);
var state_32242__$1 = state_32242;
var statearr_32270_32432 = state_32242__$1;
(statearr_32270_32432[(2)] = inst_32128);

(statearr_32270_32432[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (28))){
var inst_32198 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32198)){
var statearr_32271_32433 = state_32242__$1;
(statearr_32271_32433[(1)] = (32));

} else {
var statearr_32272_32434 = state_32242__$1;
(statearr_32272_32434[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (25))){
var inst_32236 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32273_32435 = state_32242__$1;
(statearr_32273_32435[(2)] = inst_32236);

(statearr_32273_32435[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (34))){
var inst_32203 = (state_32242[(2)]);
var inst_32204 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32203,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521));
var inst_32205 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32203,new cljs.core.Keyword(null,"max-reconnection-attemps","max-reconnection-attemps",1643202530));
var inst_32206 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32204,inst_32205);
var state_32242__$1 = state_32242;
if(inst_32206){
var statearr_32274_32436 = state_32242__$1;
(statearr_32274_32436[(1)] = (35));

} else {
var statearr_32275_32437 = state_32242__$1;
(statearr_32275_32437[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (17))){
var inst_32139 = (state_32242[(12)]);
var inst_32157 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_32139);
var state_32242__$1 = state_32242;
var statearr_32276_32438 = state_32242__$1;
(statearr_32276_32438[(2)] = inst_32157);

(statearr_32276_32438[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (3))){
var inst_32240 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
return cljs.core.async.impl.ioc_helpers.return_chan(state_32242__$1,inst_32240);
} else {
if((state_val_32243 === (12))){
var state_32242__$1 = state_32242;
var statearr_32277_32439 = state_32242__$1;
(statearr_32277_32439[(2)] = false);

(statearr_32277_32439[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (2))){
var state_32242__$1 = state_32242;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_32242__$1,(4),channel);
} else {
if((state_val_32243 === (23))){
var inst_32124 = (state_32242[(7)]);
var inst_32182 = (state_32242[(10)]);
var inst_32122 = (state_32242[(9)]);
var inst_32179 = (function (){var data = inst_32122;
var socket = inst_32124;
return (function (){
crumborn.main.publish_message(data);

if(cljs.core.truth_(crumborn.websocket.socket_is_open_QMARK_(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.main.channel_atom))))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.update,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521),cljs.core.inc);
}
});
})();
var inst_32180 = setTimeout(inst_32179,(150));
var inst_32182__$1 = cljs.core.deref(crumborn.main.channel_atom);
var inst_32184 = (inst_32182__$1 == null);
var inst_32185 = cljs.core.not(inst_32184);
var state_32242__$1 = (function (){var statearr_32278 = state_32242;
(statearr_32278[(10)] = inst_32182__$1);

(statearr_32278[(13)] = inst_32180);

return statearr_32278;
})();
if(inst_32185){
var statearr_32279_32440 = state_32242__$1;
(statearr_32279_32440[(1)] = (26));

} else {
var statearr_32280_32441 = state_32242__$1;
(statearr_32280_32441[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (35))){
var inst_32208 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_32209 = [new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_32210 = ["Max connection attempts reached.."];
var inst_32211 = cljs.core.PersistentHashMap.fromArrays(inst_32209,inst_32210);
var inst_32212 = [new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974),inst_32211];
var inst_32213 = cljs.core.PersistentHashMap.fromArrays(inst_32208,inst_32212);
var inst_32214 = crumborn.main.handle_event_BANG_(inst_32213);
var state_32242__$1 = state_32242;
var statearr_32281_32442 = state_32242__$1;
(statearr_32281_32442[(2)] = inst_32214);

(statearr_32281_32442[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (19))){
var inst_32160 = (state_32242[(2)]);
var inst_32161 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32160,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521));
var inst_32162 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_32160,new cljs.core.Keyword(null,"max-reconnection-attemps","max-reconnection-attemps",1643202530));
var inst_32163 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_32161,inst_32162);
var state_32242__$1 = state_32242;
if(inst_32163){
var statearr_32282_32443 = state_32242__$1;
(statearr_32282_32443[(1)] = (20));

} else {
var statearr_32283_32444 = state_32242__$1;
(statearr_32283_32444[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (11))){
var inst_32139 = (state_32242[(12)]);
var inst_32144 = inst_32139.cljs$lang$protocol_mask$partition0$;
var inst_32145 = (inst_32144 & (64));
var inst_32146 = inst_32139.cljs$core$ISeq$;
var inst_32147 = (cljs.core.PROTOCOL_SENTINEL === inst_32146);
var inst_32148 = ((inst_32145) || (inst_32147));
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32148)){
var statearr_32284_32445 = state_32242__$1;
(statearr_32284_32445[(1)] = (14));

} else {
var statearr_32285_32446 = state_32242__$1;
(statearr_32285_32446[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (9))){
var inst_32124 = (state_32242[(7)]);
var inst_32177 = (inst_32124 == null);
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32177)){
var statearr_32286_32447 = state_32242__$1;
(statearr_32286_32447[(1)] = (23));

} else {
var statearr_32287_32448 = state_32242__$1;
(statearr_32287_32448[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (5))){
var inst_32125 = (state_32242[(8)]);
var state_32242__$1 = state_32242;
var statearr_32288_32449 = state_32242__$1;
(statearr_32288_32449[(2)] = inst_32125);

(statearr_32288_32449[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (14))){
var state_32242__$1 = state_32242;
var statearr_32289_32450 = state_32242__$1;
(statearr_32289_32450[(2)] = true);

(statearr_32289_32450[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (26))){
var inst_32182 = (state_32242[(10)]);
var inst_32187 = inst_32182.cljs$lang$protocol_mask$partition0$;
var inst_32188 = (inst_32187 & (64));
var inst_32189 = inst_32182.cljs$core$ISeq$;
var inst_32190 = (cljs.core.PROTOCOL_SENTINEL === inst_32189);
var inst_32191 = ((inst_32188) || (inst_32190));
var state_32242__$1 = state_32242;
if(cljs.core.truth_(inst_32191)){
var statearr_32290_32451 = state_32242__$1;
(statearr_32290_32451[(1)] = (29));

} else {
var statearr_32291_32452 = state_32242__$1;
(statearr_32291_32452[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (16))){
var inst_32152 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32292_32453 = state_32242__$1;
(statearr_32292_32453[(2)] = inst_32152);

(statearr_32292_32453[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (38))){
var inst_32124 = (state_32242[(7)]);
var inst_32122 = (state_32242[(9)]);
var inst_32222 = (function (){var data = inst_32122;
var socket = inst_32124;
return (function (){
return crumborn.main.publish_message(data);
});
})();
var inst_32223 = setTimeout(inst_32222,(150));
var state_32242__$1 = (function (){var statearr_32293 = state_32242;
(statearr_32293[(14)] = inst_32223);

return statearr_32293;
})();
var statearr_32294_32454 = state_32242__$1;
(statearr_32294_32454[(2)] = null);

(statearr_32294_32454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (30))){
var state_32242__$1 = state_32242;
var statearr_32295_32455 = state_32242__$1;
(statearr_32295_32455[(2)] = false);

(statearr_32295_32455[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (10))){
var inst_32238 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32296_32456 = state_32242__$1;
(statearr_32296_32456[(2)] = inst_32238);

(statearr_32296_32456[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (18))){
var inst_32139 = (state_32242[(12)]);
var state_32242__$1 = state_32242;
var statearr_32297_32457 = state_32242__$1;
(statearr_32297_32457[(2)] = inst_32139);

(statearr_32297_32457[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (42))){
var state_32242__$1 = state_32242;
var statearr_32298_32458 = state_32242__$1;
(statearr_32298_32458[(2)] = null);

(statearr_32298_32458[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (37))){
var inst_32218 = (state_32242[(2)]);
var state_32242__$1 = state_32242;
var statearr_32299_32459 = state_32242__$1;
(statearr_32299_32459[(2)] = inst_32218);

(statearr_32299_32459[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_32243 === (8))){
var inst_32124 = (state_32242[(7)]);
var inst_32139 = (state_32242[(12)]);
var inst_32122 = (state_32242[(9)]);
var inst_32132 = [new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_32133 = [new cljs.core.Keyword(null,"reconnect","reconnect",596420411)];
var inst_32134 = cljs.core.PersistentHashMap.fromArrays(inst_32132,inst_32133);
var inst_32135 = crumborn.main.handle_event_BANG_(inst_32134);
var inst_32136 = (function (){var data = inst_32122;
var socket = inst_32124;
return (function (){
crumborn.main.publish_message(data);

if(cljs.core.truth_(crumborn.websocket.socket_is_open_QMARK_(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.main.channel_atom))))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.update,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521),cljs.core.inc);
}
});
})();
var inst_32137 = setTimeout(inst_32136,(150));
var inst_32139__$1 = cljs.core.deref(crumborn.main.channel_atom);
var inst_32141 = (inst_32139__$1 == null);
var inst_32142 = cljs.core.not(inst_32141);
var state_32242__$1 = (function (){var statearr_32300 = state_32242;
(statearr_32300[(15)] = inst_32137);

(statearr_32300[(16)] = inst_32135);

(statearr_32300[(12)] = inst_32139__$1);

return statearr_32300;
})();
if(inst_32142){
var statearr_32301_32460 = state_32242__$1;
(statearr_32301_32460[(1)] = (11));

} else {
var statearr_32302_32461 = state_32242__$1;
(statearr_32302_32461[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});
return (function() {
var crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__ = null;
var crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____0 = (function (){
var statearr_32303 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_32303[(0)] = crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__);

(statearr_32303[(1)] = (1));

return statearr_32303;
});
var crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____1 = (function (state_32242){
while(true){
var ret_value__25725__auto__ = (function (){try{while(true){
var result__25726__auto__ = switch__25723__auto__(state_32242);
if(cljs.core.keyword_identical_QMARK_(result__25726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25726__auto__;
}
break;
}
}catch (e32304){if((e32304 instanceof Object)){
var ex__25727__auto__ = e32304;
var statearr_32305_32462 = state_32242;
(statearr_32305_32462[(5)] = ex__25727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_32242);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e32304;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32463 = state_32242;
state_32242 = G__32463;
continue;
} else {
return ret_value__25725__auto__;
}
break;
}
});
crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__ = function(state_32242){
switch(arguments.length){
case 0:
return crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____0.call(this);
case 1:
return crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____1.call(this,state_32242);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____0;
crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$consume_messages_BANG__$_state_machine__25724__auto____1;
return crumborn$main$consume_messages_BANG__$_state_machine__25724__auto__;
})()
})();
var state__25763__auto__ = (function (){var statearr_32306 = (f__25762__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25762__auto__.cljs$core$IFn$_invoke$arity$0() : f__25762__auto__.call(null));
(statearr_32306[(6)] = c__25761__auto__);

return statearr_32306;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25763__auto__);
}));

return c__25761__auto__;
});
crumborn.main.app = (function crumborn$main$app(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.app.app_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pages","pages",-285406513),crumborn.main.pages,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),app_state,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812),crumborn.main.app_state_atom,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906),crumborn.main.handle_event_BANG_,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),crumborn.main.subscribe], null)], null);
});
crumborn.main.render = (function crumborn$main$render(app_state){
var G__32307 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return crumborn.main.app;},new cljs.core.Symbol("crumborn.main","app","crumborn.main/app",-1813594555,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crumborn.main","crumborn.main",-2020454326,null),new cljs.core.Symbol(null,"app","app",1079569820,null),"crumborn/main.cljs",10,1,316,316,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null)], null)),null,(cljs.core.truth_(crumborn.main.app)?crumborn.main.app.cljs$lang$test:null)])),app_state], null);
var G__32308 = crumborn.interop.get_element_by_id("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__32307,G__32308) : reagent.core.render_component.call(null,G__32307,G__32308));
});
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2("resize",(function (){
return crumborn.core.debounce(crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"data","data",-232669377),crumborn.interop.get_window_size()], null)),(250));
}));
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2("hashchange",(function (event){
var map__32309 = crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$1(event);
var map__32309__$1 = (((((!((map__32309 == null))))?(((((map__32309.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32309.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32309):map__32309);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32309__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32309__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
if(cljs.core.truth_(slug)){
return crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"post-selected","post-selected",-897816517),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"slug","slug",2029314850),slug,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"post","post",269697687)], null)], null));
} else {
if(cljs.core.contains_QMARK_(crumborn.main.pages,page)){
return crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page-selected","page-selected",2091820182),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page], null)], null));
} else {
return null;
}
}
}));
crumborn.main.consume_pages_BANG_(crumborn.main.page_channel);
crumborn.main.consume_messages_BANG_(crumborn.main.message_channel);
if((cljs.core.deref(crumborn.main.app_state_atom) == null)){
var map__32311_32464 = crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0();
var map__32311_32465__$1 = (((((!((map__32311_32464 == null))))?(((((map__32311_32464.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32311_32464.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32311_32464):map__32311_32464);
var page_32466 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32311_32465__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug_32467 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32311_32465__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
if(cljs.core.truth_(slug_32467)){
crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"post-selected","post-selected",-897816517),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"slug","slug",2029314850),slug_32467], null)], null));
} else {
crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page-selected","page-selected",2091820182),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),((((cljs.core.contains_QMARK_(crumborn.main.pages,page_32466)) && (cljs.core.not(new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,page_32466))))))?page_32466:new cljs.core.Keyword(null,"front-page","front-page",-663760939))], null)], null));
}

reagent.core.rswap_BANG_(crumborn.main.app_state_atom,(function (_){
return crumborn.main.initial_state;
}));

crumborn.main.render(cljs.core.deref(crumborn.main.app_state_atom));
} else {
}
if((cljs.core.deref(crumborn.theme.theme_atom) == null)){
cljs.core.add_watch(crumborn.theme.theme_atom,new cljs.core.Keyword(null,"theme-game-loop","theme-game-loop",1959781964),(function (_,___$1,___$2,___$3){
reagent.core.force_update_all();

return crumborn.main.render(cljs.core.deref(crumborn.main.app_state_atom));
}));

cljs.core.reset_BANG_(crumborn.theme.theme_atom,crumborn.theme.light.theme);
} else {
}
if((new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.main.channel_atom)) == null)){
crumborn.websocket.make_websocket_BANG_([crumborn.core.get_ws_url(),"/api/ws/"].join(''),crumborn.main.handle_event_BANG_);
} else {
}
crumborn.main.reload_BANG_ = (function crumborn$main$reload_BANG_(){
return crumborn.main.render(cljs.core.deref(crumborn.main.app_state_atom));
});
crumborn.main.init_BANG_ = (function crumborn$main$init_BANG_(){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,386,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Initializing main..."], null);
}),null)),null,1825219853,null);
});

//# sourceMappingURL=crumborn.main.js.map
