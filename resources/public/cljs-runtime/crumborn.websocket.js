goog.provide('crumborn.websocket');
goog.require('cljs.core');
goog.require('taoensso.timbre');
goog.require('clojure.edn');
crumborn.websocket.get_ready_state = (function crumborn$websocket$get_ready_state(channel){
return (channel["readyState"]);
});
crumborn.websocket.ready_state = (function crumborn$websocket$ready_state(channel,n){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(crumborn.websocket.get_ready_state(channel),n);
});
crumborn.websocket.socket_is_connecting_QMARK_ = (function crumborn$websocket$socket_is_connecting_QMARK_(channel){
if(cljs.core.truth_(channel)){
return crumborn.websocket.ready_state(channel,(0));
} else {
return null;
}
});
crumborn.websocket.socket_is_open_QMARK_ = (function crumborn$websocket$socket_is_open_QMARK_(channel){
if(cljs.core.truth_(channel)){
return crumborn.websocket.ready_state(channel,(1));
} else {
return null;
}
});
crumborn.websocket.socket_is_closing_QMARK_ = (function crumborn$websocket$socket_is_closing_QMARK_(channel){
if(cljs.core.truth_(channel)){
return crumborn.websocket.ready_state(channel,(2));
} else {
return null;
}
});
crumborn.websocket.socket_is_closed_QMARK_ = (function crumborn$websocket$socket_is_closed_QMARK_(channel){
if(cljs.core.truth_(channel)){
return crumborn.websocket.ready_state(channel,(3));
} else {
return null;
}
});
/**
 * Receive and trigger event from the websocket.
 */
crumborn.websocket.receive_msg = (function crumborn$websocket$receive_msg(trigger_event){
return (function (msg){
var G__41763 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"channel-received-msg","channel-received-msg",1856577583),new cljs.core.Keyword(null,"data","data",-232669377),clojure.edn.read_string.cljs$core$IFn$_invoke$arity$1(msg.data)], null);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__41763) : trigger_event.call(null,G__41763));
});
});
/**
 * Send message through the websocket, assoc an id to the data.
 */
crumborn.websocket.send_msg_BANG_ = (function crumborn$websocket$send_msg_BANG_(p__41764,msg){
var map__41765 = p__41764;
var map__41765__$1 = (((((!((map__41765 == null))))?(((((map__41765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__41765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__41765):map__41765);
var channel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"channel","channel",734187692));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__41765__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(crumborn.websocket.socket_is_open_QMARK_(channel))){
return channel.send(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(msg,new cljs.core.Keyword(null,"id","id",-1388402092),id));
} else {
throw (new Error("Socket is not open"));
}
});
crumborn.websocket.on_open = (function crumborn$websocket$on_open(data,channel,trigger_event){
taoensso.timbre._log_BANG_.cljs$core$IFn$_invoke$arity$11(taoensso.timbre._STAR_config_STAR_,new cljs.core.Keyword(null,"debug","debug",-1608172596),"crumborn.websocket",null,29,new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"auto","auto",-566279492),(new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [" Websocket established"], null);
}),null)),null,-1018067096,null);

var G__41777 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"channel-initialized","channel-initialized",1258005104),new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"channel","channel",734187692),channel], null)], null);
return (trigger_event.cljs$core$IFn$_invoke$arity$1 ? trigger_event.cljs$core$IFn$_invoke$arity$1(G__41777) : trigger_event.call(null,G__41777));
});
crumborn.websocket.on_close = (function crumborn$websocket$on_close(){
return null;
});
crumborn.websocket.on_error = (function crumborn$websocket$on_error(){
return null;
});
/**
 * Create a websocket with url, triggers event on messages
 */
crumborn.websocket.make_websocket_BANG_ = (function crumborn$websocket$make_websocket_BANG_(url,trigger_event){
var temp__5733__auto__ = (new WebSocket(url));
if(cljs.core.truth_(temp__5733__auto__)){
var chan = temp__5733__auto__;
(chan.onmessage = crumborn.websocket.receive_msg(trigger_event));

(chan.onopen = (function (data){
return crumborn.websocket.on_open(data,chan,trigger_event);
}));

(chan.onclose = crumborn.websocket.on_close);

return (chan.onerror = crumborn.websocket.on_error);
} else {
throw (new Error(" Unable to establish websocket "));
}
});

//# sourceMappingURL=crumborn.websocket.js.map
