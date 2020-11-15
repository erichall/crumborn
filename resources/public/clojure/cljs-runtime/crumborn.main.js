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
var seq__42937 = cljs.core.seq(mutations);
var chunk__42938 = null;
var count__42939 = (0);
var i__42940 = (0);
while(true){
if((i__42940 < count__42939)){
var m = chunk__42938.cljs$core$IIndexed$_nth$arity$2(null,i__42940);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_channel,m);


var G__43481 = seq__42937;
var G__43482 = chunk__42938;
var G__43483 = count__42939;
var G__43484 = (i__42940 + (1));
seq__42937 = G__43481;
chunk__42938 = G__43482;
count__42939 = G__43483;
i__42940 = G__43484;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__42937);
if(temp__5735__auto__){
var seq__42937__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__42937__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__42937__$1);
var G__43485 = cljs.core.chunk_rest(seq__42937__$1);
var G__43486 = c__4609__auto__;
var G__43487 = cljs.core.count(c__4609__auto__);
var G__43488 = (0);
seq__42937 = G__43485;
chunk__42938 = G__43486;
count__42939 = G__43487;
i__42940 = G__43488;
continue;
} else {
var m = cljs.core.first(seq__42937__$1);
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(mutation_channel,m);


var G__43489 = cljs.core.next(seq__42937__$1);
var G__43490 = null;
var G__43491 = (0);
var G__43492 = (0);
seq__42937 = G__43489;
chunk__42938 = G__43490;
count__42939 = G__43491;
i__42940 = G__43492;
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
crumborn.main.subscribe = (function crumborn$main$subscribe(p__42941){
var map__42942 = p__42941;
var map__42942__$1 = (((((!((map__42942 == null))))?(((((map__42942.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42942.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42942):map__42942);
var event_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42942__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42942__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var callback_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42942__$1,new cljs.core.Keyword(null,"callback-fn","callback-fn",2018892720));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.consumers_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [event_name,id], null),callback_fn);

var c__25675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25676__auto__ = (function (){var switch__25637__auto__ = (function (state_43018){
var state_val_43019 = (state_43018[(1)]);
if((state_val_43019 === (7))){
var inst_42963 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
if(cljs.core.truth_(inst_42963)){
var statearr_43020_43493 = state_43018__$1;
(statearr_43020_43493[(1)] = (11));

} else {
var statearr_43021_43494 = state_43018__$1;
(statearr_43021_43494[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (20))){
var state_43018__$1 = state_43018;
var statearr_43022_43495 = state_43018__$1;
(statearr_43022_43495[(2)] = null);

(statearr_43022_43495[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (1))){
var state_43018__$1 = state_43018;
var statearr_43023_43496 = state_43018__$1;
(statearr_43023_43496[(2)] = null);

(statearr_43023_43496[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (24))){
var inst_43006 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
var statearr_43024_43497 = state_43018__$1;
(statearr_43024_43497[(2)] = inst_43006);

(statearr_43024_43497[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (4))){
var inst_42947 = (state_43018[(7)]);
var inst_42947__$1 = (state_43018[(2)]);
var inst_42949 = (inst_42947__$1 == null);
var inst_42950 = cljs.core.not(inst_42949);
var state_43018__$1 = (function (){var statearr_43025 = state_43018;
(statearr_43025[(7)] = inst_42947__$1);

return statearr_43025;
})();
if(inst_42950){
var statearr_43026_43498 = state_43018__$1;
(statearr_43026_43498[(1)] = (5));

} else {
var statearr_43027_43499 = state_43018__$1;
(statearr_43027_43499[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (15))){
var inst_43013 = (state_43018[(2)]);
var state_43018__$1 = (function (){var statearr_43028 = state_43018;
(statearr_43028[(8)] = inst_43013);

return statearr_43028;
})();
var statearr_43029_43500 = state_43018__$1;
(statearr_43029_43500[(2)] = null);

(statearr_43029_43500[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (21))){
var inst_43009 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
var statearr_43030_43501 = state_43018__$1;
(statearr_43030_43501[(2)] = inst_43009);

(statearr_43030_43501[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (13))){
var inst_42968 = (state_43018[(2)]);
var inst_42969 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42968,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var inst_42970 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42968,new cljs.core.Keyword(null,"data","data",-232669377));
var inst_42975 = cljs.core.deref(crumborn.main.consumers_atom);
var inst_42976 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_42975,inst_42969);
var inst_42977 = cljs.core.vals(inst_42976);
var inst_42978 = cljs.core.seq(inst_42977);
var inst_42979 = inst_42978;
var inst_42980 = null;
var inst_42981 = (0);
var inst_42982 = (0);
var state_43018__$1 = (function (){var statearr_43031 = state_43018;
(statearr_43031[(9)] = inst_42980);

(statearr_43031[(10)] = inst_42982);

(statearr_43031[(11)] = inst_42970);

(statearr_43031[(12)] = inst_42979);

(statearr_43031[(13)] = inst_42981);

return statearr_43031;
})();
var statearr_43032_43502 = state_43018__$1;
(statearr_43032_43502[(2)] = null);

(statearr_43032_43502[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (22))){
var inst_42992 = (state_43018[(14)]);
var inst_42996 = cljs.core.chunk_first(inst_42992);
var inst_42997 = cljs.core.chunk_rest(inst_42992);
var inst_42998 = cljs.core.count(inst_42996);
var inst_42979 = inst_42997;
var inst_42980 = inst_42996;
var inst_42981 = inst_42998;
var inst_42982 = (0);
var state_43018__$1 = (function (){var statearr_43033 = state_43018;
(statearr_43033[(9)] = inst_42980);

(statearr_43033[(10)] = inst_42982);

(statearr_43033[(12)] = inst_42979);

(statearr_43033[(13)] = inst_42981);

return statearr_43033;
})();
var statearr_43034_43503 = state_43018__$1;
(statearr_43034_43503[(2)] = null);

(statearr_43034_43503[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (6))){
var state_43018__$1 = state_43018;
var statearr_43035_43504 = state_43018__$1;
(statearr_43035_43504[(2)] = false);

(statearr_43035_43504[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (17))){
var inst_42992 = (state_43018[(14)]);
var inst_42979 = (state_43018[(12)]);
var inst_42992__$1 = cljs.core.seq(inst_42979);
var state_43018__$1 = (function (){var statearr_43036 = state_43018;
(statearr_43036[(14)] = inst_42992__$1);

return statearr_43036;
})();
if(inst_42992__$1){
var statearr_43037_43505 = state_43018__$1;
(statearr_43037_43505[(1)] = (19));

} else {
var statearr_43038_43506 = state_43018__$1;
(statearr_43038_43506[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (3))){
var inst_43016 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43018__$1,inst_43016);
} else {
if((state_val_43019 === (12))){
var inst_42947 = (state_43018[(7)]);
var state_43018__$1 = state_43018;
var statearr_43039_43507 = state_43018__$1;
(statearr_43039_43507[(2)] = inst_42947);

(statearr_43039_43507[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (2))){
var state_43018__$1 = state_43018;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43018__$1,(4),crumborn.main.subscription_channel);
} else {
if((state_val_43019 === (23))){
var inst_42992 = (state_43018[(14)]);
var inst_42970 = (state_43018[(11)]);
var inst_43001 = cljs.core.first(inst_42992);
var inst_43002 = (inst_43001.cljs$core$IFn$_invoke$arity$1 ? inst_43001.cljs$core$IFn$_invoke$arity$1(inst_42970) : inst_43001.call(null,inst_42970));
var inst_43003 = cljs.core.next(inst_42992);
var inst_42979 = inst_43003;
var inst_42980 = null;
var inst_42981 = (0);
var inst_42982 = (0);
var state_43018__$1 = (function (){var statearr_43040 = state_43018;
(statearr_43040[(9)] = inst_42980);

(statearr_43040[(15)] = inst_43002);

(statearr_43040[(10)] = inst_42982);

(statearr_43040[(12)] = inst_42979);

(statearr_43040[(13)] = inst_42981);

return statearr_43040;
})();
var statearr_43041_43508 = state_43018__$1;
(statearr_43041_43508[(2)] = null);

(statearr_43041_43508[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (19))){
var inst_42992 = (state_43018[(14)]);
var inst_42994 = cljs.core.chunked_seq_QMARK_(inst_42992);
var state_43018__$1 = state_43018;
if(inst_42994){
var statearr_43042_43509 = state_43018__$1;
(statearr_43042_43509[(1)] = (22));

} else {
var statearr_43043_43510 = state_43018__$1;
(statearr_43043_43510[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (11))){
var inst_42947 = (state_43018[(7)]);
var inst_42965 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_42947);
var state_43018__$1 = state_43018;
var statearr_43044_43511 = state_43018__$1;
(statearr_43044_43511[(2)] = inst_42965);

(statearr_43044_43511[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (9))){
var state_43018__$1 = state_43018;
var statearr_43045_43512 = state_43018__$1;
(statearr_43045_43512[(2)] = false);

(statearr_43045_43512[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (5))){
var inst_42947 = (state_43018[(7)]);
var inst_42952 = inst_42947.cljs$lang$protocol_mask$partition0$;
var inst_42953 = (inst_42952 & (64));
var inst_42954 = inst_42947.cljs$core$ISeq$;
var inst_42955 = (cljs.core.PROTOCOL_SENTINEL === inst_42954);
var inst_42956 = ((inst_42953) || (inst_42955));
var state_43018__$1 = state_43018;
if(cljs.core.truth_(inst_42956)){
var statearr_43049_43513 = state_43018__$1;
(statearr_43049_43513[(1)] = (8));

} else {
var statearr_43050_43514 = state_43018__$1;
(statearr_43050_43514[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (14))){
var inst_42982 = (state_43018[(10)]);
var inst_42981 = (state_43018[(13)]);
var inst_42984 = (inst_42982 < inst_42981);
var inst_42985 = inst_42984;
var state_43018__$1 = state_43018;
if(cljs.core.truth_(inst_42985)){
var statearr_43051_43515 = state_43018__$1;
(statearr_43051_43515[(1)] = (16));

} else {
var statearr_43052_43516 = state_43018__$1;
(statearr_43052_43516[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (16))){
var inst_42980 = (state_43018[(9)]);
var inst_42982 = (state_43018[(10)]);
var inst_42970 = (state_43018[(11)]);
var inst_42979 = (state_43018[(12)]);
var inst_42981 = (state_43018[(13)]);
var inst_42987 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_42980,inst_42982);
var inst_42988 = (inst_42987.cljs$core$IFn$_invoke$arity$1 ? inst_42987.cljs$core$IFn$_invoke$arity$1(inst_42970) : inst_42987.call(null,inst_42970));
var inst_42989 = (inst_42982 + (1));
var tmp43046 = inst_42980;
var tmp43047 = inst_42979;
var tmp43048 = inst_42981;
var inst_42979__$1 = tmp43047;
var inst_42980__$1 = tmp43046;
var inst_42981__$1 = tmp43048;
var inst_42982__$1 = inst_42989;
var state_43018__$1 = (function (){var statearr_43053 = state_43018;
(statearr_43053[(9)] = inst_42980__$1);

(statearr_43053[(10)] = inst_42982__$1);

(statearr_43053[(16)] = inst_42988);

(statearr_43053[(12)] = inst_42979__$1);

(statearr_43053[(13)] = inst_42981__$1);

return statearr_43053;
})();
var statearr_43054_43517 = state_43018__$1;
(statearr_43054_43517[(2)] = null);

(statearr_43054_43517[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (10))){
var inst_42960 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
var statearr_43055_43518 = state_43018__$1;
(statearr_43055_43518[(2)] = inst_42960);

(statearr_43055_43518[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (18))){
var inst_43011 = (state_43018[(2)]);
var state_43018__$1 = state_43018;
var statearr_43056_43519 = state_43018__$1;
(statearr_43056_43519[(2)] = inst_43011);

(statearr_43056_43519[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43019 === (8))){
var state_43018__$1 = state_43018;
var statearr_43057_43520 = state_43018__$1;
(statearr_43057_43520[(2)] = true);

(statearr_43057_43520[(1)] = (10));


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
var crumborn$main$subscribe_$_state_machine__25638__auto__ = null;
var crumborn$main$subscribe_$_state_machine__25638__auto____0 = (function (){
var statearr_43058 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43058[(0)] = crumborn$main$subscribe_$_state_machine__25638__auto__);

(statearr_43058[(1)] = (1));

return statearr_43058;
});
var crumborn$main$subscribe_$_state_machine__25638__auto____1 = (function (state_43018){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_43018);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e43059){if((e43059 instanceof Object)){
var ex__25641__auto__ = e43059;
var statearr_43060_43521 = state_43018;
(statearr_43060_43521[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43059;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43522 = state_43018;
state_43018 = G__43522;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
crumborn$main$subscribe_$_state_machine__25638__auto__ = function(state_43018){
switch(arguments.length){
case 0:
return crumborn$main$subscribe_$_state_machine__25638__auto____0.call(this);
case 1:
return crumborn$main$subscribe_$_state_machine__25638__auto____1.call(this,state_43018);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$subscribe_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$subscribe_$_state_machine__25638__auto____0;
crumborn$main$subscribe_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$subscribe_$_state_machine__25638__auto____1;
return crumborn$main$subscribe_$_state_machine__25638__auto__;
})()
})();
var state__25677__auto__ = (function (){var statearr_43061 = (f__25676__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25676__auto__.cljs$core$IFn$_invoke$arity$0() : f__25676__auto__.call(null));
(statearr_43061[(6)] = c__25675__auto__);

return statearr_43061;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25677__auto__);
}));

return c__25675__auto__;
});
crumborn.main.pages = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"front-page","front-page",-663760939),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"front-page","front-page",-663760939),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.front_page,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43523__delegate = function (p__43062){
var vec__43063 = p__43062;
var map__43066 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43063,(0),null);
var map__43066__$1 = (((((!((map__43066 == null))))?(((((map__43066.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43066.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43066):map__43066);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43066__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"front-page","front-page",-663760939)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"front-page-facts","front-page-facts",155343637)], null));
}
};
var G__43523 = function (var_args){
var p__43062 = null;
if (arguments.length > 0) {
var G__43524__i = 0, G__43524__a = new Array(arguments.length -  0);
while (G__43524__i < G__43524__a.length) {G__43524__a[G__43524__i] = arguments[G__43524__i + 0]; ++G__43524__i;}
  p__43062 = new cljs.core.IndexedSeq(G__43524__a,0,null);
} 
return G__43523__delegate.call(this,p__43062);};
G__43523.cljs$lang$maxFixedArity = 0;
G__43523.cljs$lang$applyTo = (function (arglist__43525){
var p__43062 = cljs.core.seq(arglist__43525);
return G__43523__delegate(p__43062);
});
G__43523.cljs$core$IFn$_invoke$arity$variadic = G__43523__delegate;
return G__43523;
})()
], null),new cljs.core.Keyword(null,"resume","resume",-118572261),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"resume","resume",-118572261),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.resume,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43526__delegate = function (p__43068){
var vec__43069 = p__43068;
var map__43072 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43069,(0),null);
var map__43072__$1 = (((((!((map__43072 == null))))?(((((map__43072.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43072.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43072):map__43072);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43072__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"resume","resume",-118572261)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"resume-facts","resume-facts",1205573116)], null));
}
};
var G__43526 = function (var_args){
var p__43068 = null;
if (arguments.length > 0) {
var G__43527__i = 0, G__43527__a = new Array(arguments.length -  0);
while (G__43527__i < G__43527__a.length) {G__43527__a[G__43527__i] = arguments[G__43527__i + 0]; ++G__43527__i;}
  p__43068 = new cljs.core.IndexedSeq(G__43527__a,0,null);
} 
return G__43526__delegate.call(this,p__43068);};
G__43526.cljs$lang$maxFixedArity = 0;
G__43526.cljs$lang$applyTo = (function (arglist__43528){
var p__43068 = cljs.core.seq(arglist__43528);
return G__43526__delegate(p__43068);
});
G__43526.cljs$core$IFn$_invoke$arity$variadic = G__43526__delegate;
return G__43526;
})()
], null),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.posts,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43529__delegate = function (p__43074){
var vec__43075 = p__43074;
var map__43078 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43075,(0),null);
var map__43078__$1 = (((((!((map__43078 == null))))?(((((map__43078.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43078.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43078):map__43078);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43078__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
if(crumborn.core.has_fact_QMARK_(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"posts","posts",760043164)], null))){
return null;
} else {
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"posts-facts","posts-facts",1079449565)], null));
}
};
var G__43529 = function (var_args){
var p__43074 = null;
if (arguments.length > 0) {
var G__43530__i = 0, G__43530__a = new Array(arguments.length -  0);
while (G__43530__i < G__43530__a.length) {G__43530__a[G__43530__i] = arguments[G__43530__i + 0]; ++G__43530__i;}
  p__43074 = new cljs.core.IndexedSeq(G__43530__a,0,null);
} 
return G__43529__delegate.call(this,p__43074);};
G__43529.cljs$lang$maxFixedArity = 0;
G__43529.cljs$lang$applyTo = (function (arglist__43531){
var p__43074 = cljs.core.seq(arglist__43531);
return G__43529__delegate(p__43074);
});
G__43529.cljs$core$IFn$_invoke$arity$variadic = G__43529__delegate;
return G__43529;
})()
], null),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.post,new cljs.core.Keyword(null,"slug-prefix","slug-prefix",-2094149790),"posts/",new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43532__delegate = function (p__43080){
var vec__43081 = p__43080;
var map__43084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43081,(0),null);
var map__43084__$1 = (((((!((map__43084 == null))))?(((((map__43084.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43084.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43084):map__43084);
var app_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43084__$1,new cljs.core.Keyword(null,"app-state","app-state",-1509963278));
var page_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43084__$1,new cljs.core.Keyword(null,"page-data","page-data",1443840710));
var slug = new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(page_data);
var maybe_post = crumborn.core.get_post(app_state,slug);
if(cljs.core.truth_(maybe_post)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"post","post",269697687)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),maybe_post,new cljs.core.Keyword(null,"error","error",-978969032),null], null));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"post","post",269697687)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"post","post",269697687),null,new cljs.core.Keyword(null,"error","error",-978969032),null], null));

return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-facts","post-facts",1954913486),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"slug","slug",2029314850),crumborn.core.space__GT_dash(slug)], null)], null));
}
};
var G__43532 = function (var_args){
var p__43080 = null;
if (arguments.length > 0) {
var G__43533__i = 0, G__43533__a = new Array(arguments.length -  0);
while (G__43533__i < G__43533__a.length) {G__43533__a[G__43533__i] = arguments[G__43533__i + 0]; ++G__43533__i;}
  p__43080 = new cljs.core.IndexedSeq(G__43533__a,0,null);
} 
return G__43532__delegate.call(this,p__43080);};
G__43532.cljs$lang$maxFixedArity = 0;
G__43532.cljs$lang$applyTo = (function (arglist__43534){
var p__43080 = cljs.core.seq(arglist__43534);
return G__43532__delegate(p__43080);
});
G__43532.cljs$core$IFn$_invoke$arity$variadic = G__43532__delegate;
return G__43532;
})()
], null),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"portfolio","portfolio",957568598),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.portfolio,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43535__delegate = function (_){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"portfolio-facts","portfolio-facts",-1952094314)], null));
};
var G__43535 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43536__i = 0, G__43536__a = new Array(arguments.length -  0);
while (G__43536__i < G__43536__a.length) {G__43536__a[G__43536__i] = arguments[G__43536__i + 0]; ++G__43536__i;}
  _ = new cljs.core.IndexedSeq(G__43536__a,0,null);
} 
return G__43535__delegate.call(this,_);};
G__43535.cljs$lang$maxFixedArity = 0;
G__43535.cljs$lang$applyTo = (function (arglist__43537){
var _ = cljs.core.seq(arglist__43537);
return G__43535__delegate(_);
});
G__43535.cljs$core$IFn$_invoke$arity$variadic = G__43535__delegate;
return G__43535;
})()
], null),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"view","view",1247994814),crumborn.view.app.login,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865),(function() { 
var G__43538__delegate = function (_){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"login-facts","login-facts",-390628207)], null));
};
var G__43538 = function (var_args){
var _ = null;
if (arguments.length > 0) {
var G__43539__i = 0, G__43539__a = new Array(arguments.length -  0);
while (G__43539__i < G__43539__a.length) {G__43539__a[G__43539__i] = arguments[G__43539__i + 0]; ++G__43539__i;}
  _ = new cljs.core.IndexedSeq(G__43539__a,0,null);
} 
return G__43538__delegate.call(this,_);};
G__43538.cljs$lang$maxFixedArity = 0;
G__43538.cljs$lang$applyTo = (function (arglist__43540){
var _ = cljs.core.seq(arglist__43540);
return G__43538__delegate(_);
});
G__43538.cljs$core$IFn$_invoke$arity$variadic = G__43538__delegate;
return G__43538;
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
var c__25675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25676__auto__ = (function (){var switch__25637__auto__ = (function (state_43157){
var state_val_43159 = (state_43157[(1)]);
if((state_val_43159 === (7))){
var inst_43105 = (state_43157[(2)]);
var state_43157__$1 = state_43157;
if(cljs.core.truth_(inst_43105)){
var statearr_43160_43541 = state_43157__$1;
(statearr_43160_43541[(1)] = (11));

} else {
var statearr_43161_43542 = state_43157__$1;
(statearr_43161_43542[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (20))){
var inst_43113 = (state_43157[(7)]);
var inst_43114 = (state_43157[(8)]);
var inst_43130 = crumborn.core.space__GT_dash(inst_43113);
var inst_43131 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_43114),inst_43130].join('');
var state_43157__$1 = state_43157;
var statearr_43162_43543 = state_43157__$1;
(statearr_43162_43543[(2)] = inst_43131);

(statearr_43162_43543[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (27))){
var state_43157__$1 = state_43157;
var statearr_43163_43544 = state_43157__$1;
(statearr_43163_43544[(2)] = null);

(statearr_43163_43544[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (1))){
var state_43157__$1 = state_43157;
var statearr_43164_43545 = state_43157__$1;
(statearr_43164_43545[(2)] = null);

(statearr_43164_43545[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (24))){
var inst_43112 = (state_43157[(9)]);
var state_43157__$1 = state_43157;
var statearr_43165_43546 = state_43157__$1;
(statearr_43165_43546[(2)] = inst_43112);

(statearr_43165_43546[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (4))){
var inst_43089 = (state_43157[(10)]);
var inst_43089__$1 = (state_43157[(2)]);
var inst_43091 = (inst_43089__$1 == null);
var inst_43092 = cljs.core.not(inst_43091);
var state_43157__$1 = (function (){var statearr_43166 = state_43157;
(statearr_43166[(10)] = inst_43089__$1);

return statearr_43166;
})();
if(inst_43092){
var statearr_43167_43547 = state_43157__$1;
(statearr_43167_43547[(1)] = (5));

} else {
var statearr_43168_43548 = state_43157__$1;
(statearr_43168_43548[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (15))){
var inst_43110 = (state_43157[(11)]);
var inst_43113 = (state_43157[(7)]);
var inst_43114 = (state_43157[(8)]);
var inst_43115 = (state_43157[(12)]);
var inst_43111 = (state_43157[(13)]);
var inst_43112 = (state_43157[(9)]);
var inst_43119 = (function (){var map__43087 = inst_43110;
var page_data = inst_43110;
var auth_fn = inst_43111;
var prepare_fn = inst_43112;
var slug = inst_43113;
var slug_prefix = inst_43114;
var id = inst_43115;
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-page","active-page",370357330),new cljs.core.Keyword(null,"front-page","front-page",-663760939)),new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),null);
});
})();
var inst_43120 = reagent.core.rswap_BANG_(crumborn.main.app_state_atom,inst_43119);
var state_43157__$1 = (function (){var statearr_43169 = state_43157;
(statearr_43169[(14)] = inst_43120);

return statearr_43169;
})();
var statearr_43170_43549 = state_43157__$1;
(statearr_43170_43549[(2)] = null);

(statearr_43170_43549[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (21))){
var inst_43115 = (state_43157[(12)]);
var inst_43133 = cljs.core.name(inst_43115);
var state_43157__$1 = state_43157;
var statearr_43171_43550 = state_43157__$1;
(statearr_43171_43550[(2)] = inst_43133);

(statearr_43171_43550[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (13))){
var inst_43110 = (state_43157[(11)]);
var inst_43115 = (state_43157[(12)]);
var inst_43110__$1 = (state_43157[(2)]);
var inst_43111 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43110__$1,new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384));
var inst_43112 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43110__$1,new cljs.core.Keyword(null,"prepare-fn","prepare-fn",1273985865));
var inst_43113 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43110__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
var inst_43114 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43110__$1,new cljs.core.Keyword(null,"slug-prefix","slug-prefix",-2094149790));
var inst_43115__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43110__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var inst_43116 = cljs.core.contains_QMARK_(crumborn.main.pages,inst_43115__$1);
var state_43157__$1 = (function (){var statearr_43172 = state_43157;
(statearr_43172[(11)] = inst_43110__$1);

(statearr_43172[(7)] = inst_43113);

(statearr_43172[(8)] = inst_43114);

(statearr_43172[(12)] = inst_43115__$1);

(statearr_43172[(13)] = inst_43111);

(statearr_43172[(9)] = inst_43112);

return statearr_43172;
})();
if(inst_43116){
var statearr_43173_43551 = state_43157__$1;
(statearr_43173_43551[(1)] = (14));

} else {
var statearr_43174_43552 = state_43157__$1;
(statearr_43174_43552[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (22))){
var inst_43135 = (state_43157[(2)]);
var inst_43136 = crumborn.interop.set_hash_BANG_(inst_43135);
var state_43157__$1 = state_43157;
var statearr_43175_43553 = state_43157__$1;
(statearr_43175_43553[(2)] = inst_43136);

(statearr_43175_43553[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (6))){
var state_43157__$1 = state_43157;
var statearr_43176_43554 = state_43157__$1;
(statearr_43176_43554[(2)] = false);

(statearr_43176_43554[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (28))){
var inst_43152 = (state_43157[(2)]);
var state_43157__$1 = (function (){var statearr_43177 = state_43157;
(statearr_43177[(15)] = inst_43152);

return statearr_43177;
})();
var statearr_43178_43555 = state_43157__$1;
(statearr_43178_43555[(2)] = null);

(statearr_43178_43555[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (25))){
var inst_43143 = (state_43157[(2)]);
var state_43157__$1 = state_43157;
if(cljs.core.truth_(inst_43143)){
var statearr_43179_43556 = state_43157__$1;
(statearr_43179_43556[(1)] = (26));

} else {
var statearr_43180_43557 = state_43157__$1;
(statearr_43180_43557[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (17))){
var inst_43111 = (state_43157[(13)]);
var inst_43125 = (inst_43111.cljs$core$IFn$_invoke$arity$0 ? inst_43111.cljs$core$IFn$_invoke$arity$0() : inst_43111.call(null));
var state_43157__$1 = state_43157;
var statearr_43181_43558 = state_43157__$1;
(statearr_43181_43558[(2)] = inst_43125);

(statearr_43181_43558[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (3))){
var inst_43155 = (state_43157[(2)]);
var state_43157__$1 = state_43157;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43157__$1,inst_43155);
} else {
if((state_val_43159 === (12))){
var inst_43089 = (state_43157[(10)]);
var state_43157__$1 = state_43157;
var statearr_43182_43559 = state_43157__$1;
(statearr_43182_43559[(2)] = inst_43089);

(statearr_43182_43559[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (2))){
var state_43157__$1 = state_43157;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43157__$1,(4),channel);
} else {
if((state_val_43159 === (23))){
var inst_43111 = (state_43157[(13)]);
var inst_43140 = cljs.core.not(inst_43111);
var state_43157__$1 = state_43157;
var statearr_43183_43560 = state_43157__$1;
(statearr_43183_43560[(2)] = inst_43140);

(statearr_43183_43560[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (19))){
var inst_43112 = (state_43157[(9)]);
var inst_43138 = (state_43157[(2)]);
var state_43157__$1 = (function (){var statearr_43184 = state_43157;
(statearr_43184[(16)] = inst_43138);

return statearr_43184;
})();
if(cljs.core.truth_(inst_43112)){
var statearr_43185_43561 = state_43157__$1;
(statearr_43185_43561[(1)] = (23));

} else {
var statearr_43186_43562 = state_43157__$1;
(statearr_43186_43562[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (11))){
var inst_43089 = (state_43157[(10)]);
var inst_43107 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43089);
var state_43157__$1 = state_43157;
var statearr_43187_43563 = state_43157__$1;
(statearr_43187_43563[(2)] = inst_43107);

(statearr_43187_43563[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (9))){
var state_43157__$1 = state_43157;
var statearr_43188_43564 = state_43157__$1;
(statearr_43188_43564[(2)] = false);

(statearr_43188_43564[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (5))){
var inst_43089 = (state_43157[(10)]);
var inst_43094 = inst_43089.cljs$lang$protocol_mask$partition0$;
var inst_43095 = (inst_43094 & (64));
var inst_43096 = inst_43089.cljs$core$ISeq$;
var inst_43097 = (cljs.core.PROTOCOL_SENTINEL === inst_43096);
var inst_43098 = ((inst_43095) || (inst_43097));
var state_43157__$1 = state_43157;
if(cljs.core.truth_(inst_43098)){
var statearr_43189_43565 = state_43157__$1;
(statearr_43189_43565[(1)] = (8));

} else {
var statearr_43190_43566 = state_43157__$1;
(statearr_43190_43566[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (14))){
var state_43157__$1 = state_43157;
var statearr_43191_43567 = state_43157__$1;
(statearr_43191_43567[(2)] = null);

(statearr_43191_43567[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (26))){
var inst_43110 = (state_43157[(11)]);
var inst_43112 = (state_43157[(9)]);
var inst_43145 = [new cljs.core.Keyword(null,"page-data","page-data",1443840710),new cljs.core.Keyword(null,"app-state","app-state",-1509963278)];
var inst_43146 = cljs.core.deref(crumborn.main.app_state_atom);
var inst_43147 = [inst_43110,inst_43146];
var inst_43148 = cljs.core.PersistentHashMap.fromArrays(inst_43145,inst_43147);
var inst_43149 = (inst_43112.cljs$core$IFn$_invoke$arity$1 ? inst_43112.cljs$core$IFn$_invoke$arity$1(inst_43148) : inst_43112.call(null,inst_43148));
var state_43157__$1 = state_43157;
var statearr_43192_43568 = state_43157__$1;
(statearr_43192_43568[(2)] = inst_43149);

(statearr_43192_43568[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (16))){
var inst_43111 = (state_43157[(13)]);
var inst_43123 = (state_43157[(2)]);
var state_43157__$1 = (function (){var statearr_43193 = state_43157;
(statearr_43193[(17)] = inst_43123);

return statearr_43193;
})();
if(cljs.core.truth_(inst_43111)){
var statearr_43194_43569 = state_43157__$1;
(statearr_43194_43569[(1)] = (17));

} else {
var statearr_43195_43570 = state_43157__$1;
(statearr_43195_43570[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (10))){
var inst_43102 = (state_43157[(2)]);
var state_43157__$1 = state_43157;
var statearr_43196_43571 = state_43157__$1;
(statearr_43196_43571[(2)] = inst_43102);

(statearr_43196_43571[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (18))){
var inst_43110 = (state_43157[(11)]);
var inst_43113 = (state_43157[(7)]);
var inst_43114 = (state_43157[(8)]);
var inst_43115 = (state_43157[(12)]);
var inst_43111 = (state_43157[(13)]);
var inst_43112 = (state_43157[(9)]);
var inst_43127 = (function (){var map__43087 = inst_43110;
var page_data = inst_43110;
var auth_fn = inst_43111;
var prepare_fn = inst_43112;
var slug = inst_43113;
var slug_prefix = inst_43114;
var id = inst_43115;
return (function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-page","active-page",370357330),id),new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),(cljs.core.truth_(slug)?slug:null));
});
})();
var inst_43128 = reagent.core.rswap_BANG_(crumborn.main.app_state_atom,inst_43127);
var state_43157__$1 = (function (){var statearr_43197 = state_43157;
(statearr_43197[(18)] = inst_43128);

return statearr_43197;
})();
if(cljs.core.truth_(inst_43113)){
var statearr_43198_43572 = state_43157__$1;
(statearr_43198_43572[(1)] = (20));

} else {
var statearr_43199_43573 = state_43157__$1;
(statearr_43199_43573[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43159 === (8))){
var state_43157__$1 = state_43157;
var statearr_43200_43574 = state_43157__$1;
(statearr_43200_43574[(2)] = true);

(statearr_43200_43574[(1)] = (10));


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
var crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__ = null;
var crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____0 = (function (){
var statearr_43201 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43201[(0)] = crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__);

(statearr_43201[(1)] = (1));

return statearr_43201;
});
var crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____1 = (function (state_43157){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_43157);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e43202){if((e43202 instanceof Object)){
var ex__25641__auto__ = e43202;
var statearr_43203_43575 = state_43157;
(statearr_43203_43575[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43157);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43202;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43576 = state_43157;
state_43157 = G__43576;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__ = function(state_43157){
switch(arguments.length){
case 0:
return crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____0.call(this);
case 1:
return crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____1.call(this,state_43157);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____0;
crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$consume_pages_BANG__$_state_machine__25638__auto____1;
return crumborn$main$consume_pages_BANG__$_state_machine__25638__auto__;
})()
})();
var state__25677__auto__ = (function (){var statearr_43204 = (f__25676__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25676__auto__.cljs$core$IFn$_invoke$arity$0() : f__25676__auto__.call(null));
(statearr_43204[(6)] = c__25675__auto__);

return statearr_43204;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25677__auto__);
}));

return c__25675__auto__;
});
crumborn.main.channel_msg_handler = (function crumborn$main$channel_msg_handler(p__43205){
var map__43206 = p__43205;
var map__43206__$1 = (((((!((map__43206 == null))))?(((((map__43206.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43206.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43206):map__43206);
var event_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43206__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43206__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__43208 = cljs.core._EQ_;
var expr__43209 = event_name;
if(cljs.core.truth_((function (){var G__43211 = new cljs.core.Keyword(null,"connected","connected",-169833045);
var G__43212 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43211,G__43212) : pred__43208.call(null,G__43211,G__43212));
})())){
reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(data),new cljs.core.Keyword(null,"loading","loading",-737050189),false)], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__43213 = new cljs.core.Keyword(null,"authenticate-success","authenticate-success",1559436070);
var G__43214 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43213,G__43214) : pred__43208.call(null,G__43213,G__43214));
})())){
reagent.core.rswap_BANG_(crumborn.main.app_state_atom,(function (state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"identity","identity",1647396035),new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"loading","loading",-737050189),false);
}));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,crumborn.core.get_page(crumborn.main.pages,new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)));

return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-template","post-template",-136412588)], null));
} else {
if(cljs.core.truth_((function (){var G__43216 = new cljs.core.Keyword(null,"authenticate-fail","authenticate-fail",1883092039);
var G__43217 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43216,G__43217) : pred__43208.call(null,G__43216,G__43217));
})())){
return reagent.core.rswap_BANG_(crumborn.main.app_state_atom,(function (state){
return crumborn.core.set_loading(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"identity","identity",1647396035),null),false);
}));
} else {
if(cljs.core.truth_((function (){var G__43218 = new cljs.core.Keyword(null,"is-authenticated","is-authenticated",-1486996910);
var G__43219 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43218,G__43219) : pred__43208.call(null,G__43218,G__43219));
})())){
var page = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(crumborn.core.get_page(crumborn.main.pages,new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384));
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,page);
} else {
if(cljs.core.truth_((function (){var G__43220 = new cljs.core.Keyword(null,"posts","posts",760043164);
var G__43221 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43220,G__43221) : pred__43208.call(null,G__43220,G__43221));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"posts","posts",760043164).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__43222 = new cljs.core.Keyword(null,"not-authenticated","not-authenticated",1520694193);
var G__43223 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43222,G__43223) : pred__43208.call(null,G__43222,G__43223));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"identity","identity",1647396035),null);
} else {
if(cljs.core.truth_((function (){var G__43224 = new cljs.core.Keyword(null,"ping","ping",-1670114784);
var G__43225 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43224,G__43225) : pred__43208.call(null,G__43224,G__43225));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"pong","pong",-172484958)], null));
} else {
if(cljs.core.truth_((function (){var G__43226 = new cljs.core.Keyword(null,"page-count","page-count",2081744960);
var G__43227 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43226,G__43227) : pred__43208.call(null,G__43226,G__43227));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"visitors","visitors",1404506988),new cljs.core.Keyword(null,"visitors","visitors",1404506988).cljs$core$IFn$_invoke$arity$1(data)], 0));
} else {
if(cljs.core.truth_((function (){var G__43228 = new cljs.core.Keyword(null,"post-template","post-template",-136412588);
var G__43229 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43228,G__43229) : pred__43208.call(null,G__43228,G__43229));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"post-template","post-template",-136412588),new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__43230 = new cljs.core.Keyword(null,"post-created","post-created",-358771998);
var G__43231 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43230,G__43231) : pred__43208.call(null,G__43230,G__43231));
})())){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.subscription_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"post-created","post-created",-358771998),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__43232 = new cljs.core.Keyword(null,"notification","notification",-222338233);
var G__43233 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43232,G__43233) : pred__43208.call(null,G__43232,G__43233));
})())){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.subscription_channel,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"notification","notification",-222338233),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__43234 = new cljs.core.Keyword(null,"front-page-facts","front-page-facts",155343637);
var G__43235 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43234,G__43235) : pred__43208.call(null,G__43234,G__43235));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43236 = new cljs.core.Keyword(null,"resume-page-facts","resume-page-facts",-486559793);
var G__43237 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43236,G__43237) : pred__43208.call(null,G__43236,G__43237));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43238 = new cljs.core.Keyword(null,"posts-page-facts","posts-page-facts",1793686667);
var G__43239 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43238,G__43239) : pred__43208.call(null,G__43238,G__43239));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43240 = new cljs.core.Keyword(null,"post-page-facts","post-page-facts",-161725084);
var G__43241 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43240,G__43241) : pred__43208.call(null,G__43240,G__43241));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43242 = new cljs.core.Keyword(null,"portfolio-page-facts","portfolio-page-facts",1873954989);
var G__43243 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43242,G__43243) : pred__43208.call(null,G__43242,G__43243));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43244 = new cljs.core.Keyword(null,"login-page-facts","login-page-facts",741050376);
var G__43245 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43244,G__43245) : pred__43208.call(null,G__43244,G__43245));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43246 = new cljs.core.Keyword(null,"create-post-facts","create-post-facts",-1278472112);
var G__43247 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43246,G__43247) : pred__43208.call(null,G__43246,G__43247));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43248 = new cljs.core.Keyword(null,"dashboard-page-facts","dashboard-page-facts",-777755034);
var G__43249 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43248,G__43249) : pred__43208.call(null,G__43248,G__43249));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
if(cljs.core.truth_((function (){var G__43250 = new cljs.core.Keyword(null,"fact-change","fact-change",1008969562);
var G__43251 = expr__43209;
return (pred__43208.cljs$core$IFn$_invoke$arity$2 ? pred__43208.cljs$core$IFn$_invoke$arity$2(G__43250,G__43251) : pred__43208.call(null,G__43250,G__43251));
})())){
return reagent.core.rswap_BANG_.cljs$core$IFn$_invoke$arity$variadic(crumborn.main.app_state_atom,crumborn.core.change_fact,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([data], 0));
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,220,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["no matching clause for ",event_name], null);
}),null)),null,-251252229,null);
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
crumborn.main.handle_event_BANG_ = (function crumborn$main$handle_event_BANG_(p__43252){
var map__43253 = p__43252;
var map__43253__$1 = (((((!((map__43253 == null))))?(((((map__43253.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43253.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43253):map__43253);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43253__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var pred__43255 = cljs.core._EQ_;
var expr__43256 = name;
if(cljs.core.truth_((function (){var G__43258 = new cljs.core.Keyword(null,"post-selected","post-selected",-897816517);
var G__43259 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43258,G__43259) : pred__43255.call(null,G__43258,G__43259));
})())){
var state = cljs.core.deref(crumborn.main.app_state_atom);
var acsd = (((!((new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190).cljs$core$IFn$_invoke$arity$1(state) == null))))?crumborn.core.space__GT_dash(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190).cljs$core$IFn$_invoke$arity$1(state))):null);
if(crumborn.core.new_slug_QMARK_(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190),acsd),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"slug","slug",2029314850),new cljs.core.Keyword(null,"slug","slug",2029314850).cljs$core$IFn$_invoke$arity$1(data)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__43260 = new cljs.core.Keyword(null,"page-selected","page-selected",2091820182);
var G__43261 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43260,G__43261) : pred__43255.call(null,G__43260,G__43261));
})())){
if(crumborn.core.new_page_QMARK_(cljs.core.deref(crumborn.main.app_state_atom),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.main.page_channel,cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(data)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var G__43262 = new cljs.core.Keyword(null,"toggle-theme","toggle-theme",-91905156);
var G__43263 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43262,G__43263) : pred__43255.call(null,G__43262,G__43263));
})())){
cljs.core.reset_BANG_(crumborn.theme.theme_atom,((crumborn.theme.is_dark_theme_QMARK_())?crumborn.theme.light.theme:crumborn.theme.dark.theme));

return crumborn.interop.set_body_style_BANG_("background-color",crumborn.theme.get_style(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background-color","background-color",570434026)], null)));
} else {
if(cljs.core.truth_((function (){var G__43264 = new cljs.core.Keyword(null,"resize","resize",297367086);
var G__43265 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43264,G__43265) : pred__43255.call(null,G__43264,G__43265));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.app_state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),data);
} else {
if(cljs.core.truth_((function (){var G__43266 = new cljs.core.Keyword(null,"login","login",55217519);
var G__43267 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43266,G__43267) : pred__43255.call(null,G__43266,G__43267));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"login","login",55217519),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__43268 = new cljs.core.Keyword(null,"channel-initialized","channel-initialized",1258005104);
var G__43269 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43268,G__43269) : pred__43255.call(null,G__43268,G__43269));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.assoc,new cljs.core.Keyword(null,"channel","channel",734187692),new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(data));
} else {
if(cljs.core.truth_((function (){var G__43270 = new cljs.core.Keyword(null,"channel-received-msg","channel-received-msg",1856577583);
var G__43271 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43270,G__43271) : pred__43255.call(null,G__43270,G__43271));
})())){
return crumborn.main.channel_msg_handler(data);
} else {
if(cljs.core.truth_((function (){var G__43272 = new cljs.core.Keyword(null,"publish-message","publish-message",-726820327);
var G__43273 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43272,G__43273) : pred__43255.call(null,G__43272,G__43273));
})())){
return crumborn.main.publish_message(data);
} else {
if(cljs.core.truth_((function (){var G__43274 = new cljs.core.Keyword(null,"vote-up","vote-up",1903766974);
var G__43275 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43274,G__43275) : pred__43255.call(null,G__43274,G__43275));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"vote-up","vote-up",1903766974),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)], null));
} else {
if(cljs.core.truth_((function (){var G__43276 = new cljs.core.Keyword(null,"vote-down","vote-down",-153544248);
var G__43277 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43276,G__43277) : pred__43255.call(null,G__43276,G__43277));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"vote-down","vote-down",-153544248),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data)], null)], null));
} else {
if(cljs.core.truth_((function (){var G__43278 = new cljs.core.Keyword(null,"page-count-requested","page-count-requested",-1354124023);
var G__43279 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43278,G__43279) : pred__43255.call(null,G__43278,G__43279));
})())){
return crumborn.main.publish_message(data);
} else {
if(cljs.core.truth_((function (){var G__43280 = new cljs.core.Keyword(null,"create-post","create-post",887715866);
var G__43281 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43280,G__43281) : pred__43255.call(null,G__43280,G__43281));
})())){
return crumborn.main.publish_message(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"event-name","event-name",927259778),new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.Keyword(null,"data","data",-232669377),data], null));
} else {
if(cljs.core.truth_((function (){var G__43282 = new cljs.core.Keyword(null,"reconnect","reconnect",596420411);
var G__43283 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43282,G__43283) : pred__43255.call(null,G__43282,G__43283));
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(crumborn.main.channel_atom,cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"channel","channel",734187692),null,new cljs.core.Keyword(null,"id","id",-1388402092),null], null));

return crumborn.websocket.make_websocket_BANG_([crumborn.core.get_ws_url(),"/api/ws/"].join(''),crumborn.main.handle_event_BANG_);
} else {
if(cljs.core.truth_((function (){var G__43284 = new cljs.core.Keyword(null,"subscribe","subscribe",416253756);
var G__43285 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43284,G__43285) : pred__43255.call(null,G__43284,G__43285));
})())){
return crumborn.main.subscribe(data);
} else {
if(cljs.core.truth_((function (){var G__43286 = new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974);
var G__43287 = expr__43256;
return (pred__43255.cljs$core$IFn$_invoke$arity$2 ? pred__43255.cljs$core$IFn$_invoke$arity$2(G__43286,G__43287) : pred__43255.call(null,G__43286,G__43287));
})())){
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,262,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(data)], null);
}),null)),null,739252096,null);
} else {
return taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.main",null,265,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["Handle event has no clause for ",name], null);
}),null)),null,-1404663504,null);
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
var c__25675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25676__auto__ = (function (){var switch__25637__auto__ = (function (state_43410){
var state_val_43411 = (state_43410[(1)]);
if((state_val_43411 === (7))){
var inst_43298 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43298)){
var statearr_43412_43577 = state_43410__$1;
(statearr_43412_43577[(1)] = (8));

} else {
var statearr_43413_43578 = state_43410__$1;
(statearr_43413_43578[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (20))){
var inst_43333 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43334 = [new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43335 = ["Max connection attempts reached.."];
var inst_43336 = cljs.core.PersistentHashMap.fromArrays(inst_43334,inst_43335);
var inst_43337 = [new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974),inst_43336];
var inst_43338 = cljs.core.PersistentHashMap.fromArrays(inst_43333,inst_43337);
var inst_43339 = crumborn.main.handle_event_BANG_(inst_43338);
var state_43410__$1 = state_43410;
var statearr_43414_43579 = state_43410__$1;
(statearr_43414_43579[(2)] = inst_43339);

(statearr_43414_43579[(1)] = (22));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (27))){
var state_43410__$1 = state_43410;
var statearr_43415_43580 = state_43410__$1;
(statearr_43415_43580[(2)] = false);

(statearr_43415_43580[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (1))){
var state_43410__$1 = state_43410;
var statearr_43416_43581 = state_43410__$1;
(statearr_43416_43581[(2)] = null);

(statearr_43416_43581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (24))){
var inst_43292 = (state_43410[(7)]);
var inst_43388 = crumborn.websocket.socket_is_connecting_QMARK_(inst_43292);
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43388)){
var statearr_43417_43582 = state_43410__$1;
(statearr_43417_43582[(1)] = (38));

} else {
var statearr_43418_43583 = state_43410__$1;
(statearr_43418_43583[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (39))){
var state_43410__$1 = state_43410;
var statearr_43419_43584 = state_43410__$1;
(statearr_43419_43584[(1)] = (41));



return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (4))){
var inst_43293 = (state_43410[(8)]);
var inst_43292 = (state_43410[(7)]);
var inst_43290 = (state_43410[(2)]);
var inst_43291 = cljs.core.deref(crumborn.main.channel_atom);
var inst_43292__$1 = new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(inst_43291);
var inst_43293__$1 = crumborn.websocket.socket_is_closed_QMARK_(inst_43292__$1);
var state_43410__$1 = (function (){var statearr_43421 = state_43410;
(statearr_43421[(8)] = inst_43293__$1);

(statearr_43421[(9)] = inst_43290);

(statearr_43421[(7)] = inst_43292__$1);

return statearr_43421;
})();
if(cljs.core.truth_(inst_43293__$1)){
var statearr_43422_43585 = state_43410__$1;
(statearr_43422_43585[(1)] = (5));

} else {
var statearr_43423_43586 = state_43410__$1;
(statearr_43423_43586[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (15))){
var state_43410__$1 = state_43410;
var statearr_43424_43587 = state_43410__$1;
(statearr_43424_43587[(2)] = false);

(statearr_43424_43587[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (21))){
var state_43410__$1 = state_43410;
var statearr_43425_43588 = state_43410__$1;
(statearr_43425_43588[(2)] = null);

(statearr_43425_43588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (31))){
var inst_43363 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43426_43589 = state_43410__$1;
(statearr_43426_43589[(2)] = inst_43363);

(statearr_43426_43589[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (32))){
var inst_43350 = (state_43410[(10)]);
var inst_43368 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43350);
var state_43410__$1 = state_43410;
var statearr_43427_43590 = state_43410__$1;
(statearr_43427_43590[(2)] = inst_43368);

(statearr_43427_43590[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (40))){
var inst_43402 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43428_43591 = state_43410__$1;
(statearr_43428_43591[(2)] = inst_43402);

(statearr_43428_43591[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (33))){
var inst_43350 = (state_43410[(10)]);
var state_43410__$1 = state_43410;
var statearr_43429_43592 = state_43410__$1;
(statearr_43429_43592[(2)] = inst_43350);

(statearr_43429_43592[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (13))){
var inst_43323 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43323)){
var statearr_43430_43593 = state_43410__$1;
(statearr_43430_43593[(1)] = (17));

} else {
var statearr_43431_43594 = state_43410__$1;
(statearr_43431_43594[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (22))){
var inst_43343 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43432_43595 = state_43410__$1;
(statearr_43432_43595[(2)] = inst_43343);

(statearr_43432_43595[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (36))){
var state_43410__$1 = state_43410;
var statearr_43433_43596 = state_43410__$1;
(statearr_43433_43596[(2)] = null);

(statearr_43433_43596[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (41))){
var inst_43290 = (state_43410[(9)]);
var inst_43395 = cljs.core.deref(crumborn.main.channel_atom);
var inst_43396 = crumborn.websocket.send_msg_BANG_(inst_43395,inst_43290);
var state_43410__$1 = (function (){var statearr_43434 = state_43410;
(statearr_43434[(11)] = inst_43396);

return statearr_43434;
})();
var statearr_43435_43597 = state_43410__$1;
(statearr_43435_43597[(2)] = null);

(statearr_43435_43597[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (43))){
var inst_43400 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43436_43598 = state_43410__$1;
(statearr_43436_43598[(2)] = inst_43400);

(statearr_43436_43598[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (29))){
var state_43410__$1 = state_43410;
var statearr_43437_43599 = state_43410__$1;
(statearr_43437_43599[(2)] = true);

(statearr_43437_43599[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (6))){
var inst_43292 = (state_43410[(7)]);
var inst_43296 = crumborn.websocket.socket_is_closing_QMARK_(inst_43292);
var state_43410__$1 = state_43410;
var statearr_43438_43600 = state_43410__$1;
(statearr_43438_43600[(2)] = inst_43296);

(statearr_43438_43600[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (28))){
var inst_43366 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43366)){
var statearr_43439_43601 = state_43410__$1;
(statearr_43439_43601[(1)] = (32));

} else {
var statearr_43440_43602 = state_43410__$1;
(statearr_43440_43602[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (25))){
var inst_43404 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43441_43603 = state_43410__$1;
(statearr_43441_43603[(2)] = inst_43404);

(statearr_43441_43603[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (34))){
var inst_43371 = (state_43410[(2)]);
var inst_43372 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43371,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521));
var inst_43373 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43371,new cljs.core.Keyword(null,"max-reconnection-attemps","max-reconnection-attemps",1643202530));
var inst_43374 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43372,inst_43373);
var state_43410__$1 = state_43410;
if(inst_43374){
var statearr_43442_43604 = state_43410__$1;
(statearr_43442_43604[(1)] = (35));

} else {
var statearr_43443_43605 = state_43410__$1;
(statearr_43443_43605[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (17))){
var inst_43307 = (state_43410[(12)]);
var inst_43325 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_43307);
var state_43410__$1 = state_43410;
var statearr_43444_43606 = state_43410__$1;
(statearr_43444_43606[(2)] = inst_43325);

(statearr_43444_43606[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (3))){
var inst_43408 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_43410__$1,inst_43408);
} else {
if((state_val_43411 === (12))){
var state_43410__$1 = state_43410;
var statearr_43445_43607 = state_43410__$1;
(statearr_43445_43607[(2)] = false);

(statearr_43445_43607[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (2))){
var state_43410__$1 = state_43410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_43410__$1,(4),channel);
} else {
if((state_val_43411 === (23))){
var inst_43290 = (state_43410[(9)]);
var inst_43292 = (state_43410[(7)]);
var inst_43350 = (state_43410[(10)]);
var inst_43347 = (function (){var data = inst_43290;
var socket = inst_43292;
return (function (){
crumborn.main.publish_message(data);

if(cljs.core.truth_(crumborn.websocket.socket_is_open_QMARK_(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.main.channel_atom))))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.update,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521),cljs.core.inc);
}
});
})();
var inst_43348 = setTimeout(inst_43347,(150));
var inst_43350__$1 = cljs.core.deref(crumborn.main.channel_atom);
var inst_43352 = (inst_43350__$1 == null);
var inst_43353 = cljs.core.not(inst_43352);
var state_43410__$1 = (function (){var statearr_43446 = state_43410;
(statearr_43446[(10)] = inst_43350__$1);

(statearr_43446[(13)] = inst_43348);

return statearr_43446;
})();
if(inst_43353){
var statearr_43447_43608 = state_43410__$1;
(statearr_43447_43608[(1)] = (26));

} else {
var statearr_43448_43609 = state_43410__$1;
(statearr_43448_43609[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (35))){
var inst_43376 = [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"data","data",-232669377)];
var inst_43377 = [new cljs.core.Keyword(null,"message","message",-406056002)];
var inst_43378 = ["Max connection attempts reached.."];
var inst_43379 = cljs.core.PersistentHashMap.fromArrays(inst_43377,inst_43378);
var inst_43380 = [new cljs.core.Keyword(null,"ws-closed","ws-closed",-1922016974),inst_43379];
var inst_43381 = cljs.core.PersistentHashMap.fromArrays(inst_43376,inst_43380);
var inst_43382 = crumborn.main.handle_event_BANG_(inst_43381);
var state_43410__$1 = state_43410;
var statearr_43449_43610 = state_43410__$1;
(statearr_43449_43610[(2)] = inst_43382);

(statearr_43449_43610[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (19))){
var inst_43328 = (state_43410[(2)]);
var inst_43329 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43328,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521));
var inst_43330 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_43328,new cljs.core.Keyword(null,"max-reconnection-attemps","max-reconnection-attemps",1643202530));
var inst_43331 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_43329,inst_43330);
var state_43410__$1 = state_43410;
if(inst_43331){
var statearr_43450_43611 = state_43410__$1;
(statearr_43450_43611[(1)] = (20));

} else {
var statearr_43451_43612 = state_43410__$1;
(statearr_43451_43612[(1)] = (21));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (11))){
var inst_43307 = (state_43410[(12)]);
var inst_43312 = inst_43307.cljs$lang$protocol_mask$partition0$;
var inst_43313 = (inst_43312 & (64));
var inst_43314 = inst_43307.cljs$core$ISeq$;
var inst_43315 = (cljs.core.PROTOCOL_SENTINEL === inst_43314);
var inst_43316 = ((inst_43313) || (inst_43315));
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43316)){
var statearr_43452_43613 = state_43410__$1;
(statearr_43452_43613[(1)] = (14));

} else {
var statearr_43453_43614 = state_43410__$1;
(statearr_43453_43614[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (9))){
var inst_43292 = (state_43410[(7)]);
var inst_43345 = (inst_43292 == null);
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43345)){
var statearr_43454_43615 = state_43410__$1;
(statearr_43454_43615[(1)] = (23));

} else {
var statearr_43455_43616 = state_43410__$1;
(statearr_43455_43616[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (5))){
var inst_43293 = (state_43410[(8)]);
var state_43410__$1 = state_43410;
var statearr_43456_43617 = state_43410__$1;
(statearr_43456_43617[(2)] = inst_43293);

(statearr_43456_43617[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (14))){
var state_43410__$1 = state_43410;
var statearr_43457_43618 = state_43410__$1;
(statearr_43457_43618[(2)] = true);

(statearr_43457_43618[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (26))){
var inst_43350 = (state_43410[(10)]);
var inst_43355 = inst_43350.cljs$lang$protocol_mask$partition0$;
var inst_43356 = (inst_43355 & (64));
var inst_43357 = inst_43350.cljs$core$ISeq$;
var inst_43358 = (cljs.core.PROTOCOL_SENTINEL === inst_43357);
var inst_43359 = ((inst_43356) || (inst_43358));
var state_43410__$1 = state_43410;
if(cljs.core.truth_(inst_43359)){
var statearr_43458_43619 = state_43410__$1;
(statearr_43458_43619[(1)] = (29));

} else {
var statearr_43459_43620 = state_43410__$1;
(statearr_43459_43620[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (16))){
var inst_43320 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43460_43621 = state_43410__$1;
(statearr_43460_43621[(2)] = inst_43320);

(statearr_43460_43621[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (38))){
var inst_43290 = (state_43410[(9)]);
var inst_43292 = (state_43410[(7)]);
var inst_43390 = (function (){var data = inst_43290;
var socket = inst_43292;
return (function (){
return crumborn.main.publish_message(data);
});
})();
var inst_43391 = setTimeout(inst_43390,(150));
var state_43410__$1 = (function (){var statearr_43461 = state_43410;
(statearr_43461[(14)] = inst_43391);

return statearr_43461;
})();
var statearr_43462_43622 = state_43410__$1;
(statearr_43462_43622[(2)] = null);

(statearr_43462_43622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (30))){
var state_43410__$1 = state_43410;
var statearr_43463_43623 = state_43410__$1;
(statearr_43463_43623[(2)] = false);

(statearr_43463_43623[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (10))){
var inst_43406 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43464_43624 = state_43410__$1;
(statearr_43464_43624[(2)] = inst_43406);

(statearr_43464_43624[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (18))){
var inst_43307 = (state_43410[(12)]);
var state_43410__$1 = state_43410;
var statearr_43465_43625 = state_43410__$1;
(statearr_43465_43625[(2)] = inst_43307);

(statearr_43465_43625[(1)] = (19));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (42))){
var state_43410__$1 = state_43410;
var statearr_43466_43626 = state_43410__$1;
(statearr_43466_43626[(2)] = null);

(statearr_43466_43626[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (37))){
var inst_43386 = (state_43410[(2)]);
var state_43410__$1 = state_43410;
var statearr_43467_43627 = state_43410__$1;
(statearr_43467_43627[(2)] = inst_43386);

(statearr_43467_43627[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_43411 === (8))){
var inst_43290 = (state_43410[(9)]);
var inst_43292 = (state_43410[(7)]);
var inst_43307 = (state_43410[(12)]);
var inst_43300 = [new cljs.core.Keyword(null,"name","name",1843675177)];
var inst_43301 = [new cljs.core.Keyword(null,"reconnect","reconnect",596420411)];
var inst_43302 = cljs.core.PersistentHashMap.fromArrays(inst_43300,inst_43301);
var inst_43303 = crumborn.main.handle_event_BANG_(inst_43302);
var inst_43304 = (function (){var data = inst_43290;
var socket = inst_43292;
return (function (){
crumborn.main.publish_message(data);

if(cljs.core.truth_(crumborn.websocket.socket_is_open_QMARK_(new cljs.core.Keyword(null,"channel","channel",734187692).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.main.channel_atom))))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.main.channel_atom,cljs.core.update,new cljs.core.Keyword(null,"connection-attempts","connection-attempts",-18106521),cljs.core.inc);
}
});
})();
var inst_43305 = setTimeout(inst_43304,(150));
var inst_43307__$1 = cljs.core.deref(crumborn.main.channel_atom);
var inst_43309 = (inst_43307__$1 == null);
var inst_43310 = cljs.core.not(inst_43309);
var state_43410__$1 = (function (){var statearr_43468 = state_43410;
(statearr_43468[(15)] = inst_43305);

(statearr_43468[(16)] = inst_43303);

(statearr_43468[(12)] = inst_43307__$1);

return statearr_43468;
})();
if(inst_43310){
var statearr_43469_43628 = state_43410__$1;
(statearr_43469_43628[(1)] = (11));

} else {
var statearr_43470_43629 = state_43410__$1;
(statearr_43470_43629[(1)] = (12));

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
var crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__ = null;
var crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____0 = (function (){
var statearr_43471 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_43471[(0)] = crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__);

(statearr_43471[(1)] = (1));

return statearr_43471;
});
var crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____1 = (function (state_43410){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_43410);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e43472){if((e43472 instanceof Object)){
var ex__25641__auto__ = e43472;
var statearr_43473_43630 = state_43410;
(statearr_43473_43630[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_43410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e43472;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__43631 = state_43410;
state_43410 = G__43631;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__ = function(state_43410){
switch(arguments.length){
case 0:
return crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____0.call(this);
case 1:
return crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____1.call(this,state_43410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____0;
crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$main$consume_messages_BANG__$_state_machine__25638__auto____1;
return crumborn$main$consume_messages_BANG__$_state_machine__25638__auto__;
})()
})();
var state__25677__auto__ = (function (){var statearr_43474 = (f__25676__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25676__auto__.cljs$core$IFn$_invoke$arity$0() : f__25676__auto__.call(null));
(statearr_43474[(6)] = c__25675__auto__);

return statearr_43474;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25677__auto__);
}));

return c__25675__auto__;
});
crumborn.main.app = (function crumborn$main$app(app_state){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.app.app_component,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pages","pages",-285406513),crumborn.main.pages,new cljs.core.Keyword(null,"app-state","app-state",-1509963278),app_state,new cljs.core.Keyword(null,"app-state-atom","app-state-atom",511250812),crumborn.main.app_state_atom,new cljs.core.Keyword(null,"trigger-event","trigger-event",772166906),crumborn.main.handle_event_BANG_,new cljs.core.Keyword(null,"subscribe","subscribe",416253756),crumborn.main.subscribe], null)], null);
});
crumborn.main.render = (function crumborn$main$render(app_state){
var G__43475 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Var(function(){return crumborn.main.app;},new cljs.core.Symbol("crumborn.main","app","crumborn.main/app",-1813594555,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"crumborn.main","crumborn.main",-2020454326,null),new cljs.core.Symbol(null,"app","app",1079569820,null),"crumborn/main.cljs",10,1,316,316,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"app-state","app-state",130568249,null)], null)),null,(cljs.core.truth_(crumborn.main.app)?crumborn.main.app.cljs$lang$test:null)])),app_state], null);
var G__43476 = crumborn.interop.get_element_by_id("app");
return (reagent.core.render_component.cljs$core$IFn$_invoke$arity$2 ? reagent.core.render_component.cljs$core$IFn$_invoke$arity$2(G__43475,G__43476) : reagent.core.render_component.call(null,G__43475,G__43476));
});
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2("resize",(function (){
return crumborn.core.debounce(crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"resize","resize",297367086),new cljs.core.Keyword(null,"data","data",-232669377),crumborn.interop.get_window_size()], null)),(250));
}));
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2("hashchange",(function (event){
var map__43477 = crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$1(event);
var map__43477__$1 = (((((!((map__43477 == null))))?(((((map__43477.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43477.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43477):map__43477);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43477__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43477__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
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
var map__43479_43632 = crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0();
var map__43479_43633__$1 = (((((!((map__43479_43632 == null))))?(((((map__43479_43632.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__43479_43632.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__43479_43632):map__43479_43632);
var page_43634 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43479_43633__$1,new cljs.core.Keyword(null,"page","page",849072397));
var slug_43635 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43479_43633__$1,new cljs.core.Keyword(null,"slug","slug",2029314850));
if(cljs.core.truth_(slug_43635)){
crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"post-selected","post-selected",-897816517),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"post","post",269697687),new cljs.core.Keyword(null,"slug","slug",2029314850),slug_43635], null)], null));
} else {
crumborn.main.handle_event_BANG_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"page-selected","page-selected",2091820182),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),((((cljs.core.contains_QMARK_(crumborn.main.pages,page_43634)) && (cljs.core.not(new cljs.core.Keyword(null,"auth-fn","auth-fn",-677285384).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(crumborn.main.pages,page_43634))))))?page_43634:new cljs.core.Keyword(null,"front-page","front-page",-663760939))], null)], null));
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
}),null)),null,910507452,null);
});

//# sourceMappingURL=crumborn.main.js.map
