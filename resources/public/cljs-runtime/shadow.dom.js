goog.provide('shadow.dom');
goog.require('cljs.core');
goog.require('goog.dom');
goog.require('goog.dom.forms');
goog.require('goog.dom.classlist');
goog.require('goog.style');
goog.require('goog.style.transition');
goog.require('goog.string');
goog.require('clojure.string');
goog.require('cljs.core.async');
shadow.dom.transition_supported_QMARK_ = (((typeof window !== 'undefined'))?goog.style.transition.isSupported():null);

/**
 * @interface
 */
shadow.dom.IElement = function(){};

shadow.dom._to_dom = (function shadow$dom$_to_dom(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$IElement$_to_dom$arity$1 == null)))))){
return this$.shadow$dom$IElement$_to_dom$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_dom[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_dom["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("IElement.-to-dom",this$);
}
}
}
});


/**
 * @interface
 */
shadow.dom.SVGElement = function(){};

shadow.dom._to_svg = (function shadow$dom$_to_svg(this$){
if((((!((this$ == null)))) && ((!((this$.shadow$dom$SVGElement$_to_svg$arity$1 == null)))))){
return this$.shadow$dom$SVGElement$_to_svg$arity$1(this$);
} else {
var x__4487__auto__ = (((this$ == null))?null:this$);
var m__4488__auto__ = (shadow.dom._to_svg[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4488__auto__.call(null,this$));
} else {
var m__4485__auto__ = (shadow.dom._to_svg["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__4485__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("SVGElement.-to-svg",this$);
}
}
}
});

shadow.dom.lazy_native_coll_seq = (function shadow$dom$lazy_native_coll_seq(coll,idx){
if((idx < coll.length)){
return (new cljs.core.LazySeq(null,(function (){
return cljs.core.cons((coll[idx]),(function (){var G__32158 = coll;
var G__32159 = (idx + (1));
return (shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2 ? shadow.dom.lazy_native_coll_seq.cljs$core$IFn$_invoke$arity$2(G__32158,G__32159) : shadow.dom.lazy_native_coll_seq.call(null,G__32158,G__32159));
})());
}),null,null));
} else {
return null;
}
});

/**
* @constructor
 * @implements {cljs.core.IIndexed}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IDeref}
 * @implements {shadow.dom.IElement}
*/
shadow.dom.NativeColl = (function (coll){
this.coll = coll;
this.cljs$lang$protocol_mask$partition0$ = 8421394;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(shadow.dom.NativeColl.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$2 = (function (this$,n){
var self__ = this;
var this$__$1 = this;
return (self__.coll[n]);
}));

(shadow.dom.NativeColl.prototype.cljs$core$IIndexed$_nth$arity$3 = (function (this$,n,not_found){
var self__ = this;
var this$__$1 = this;
var or__4185__auto__ = (self__.coll[n]);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return not_found;
}
}));

(shadow.dom.NativeColl.prototype.cljs$core$ICounted$_count$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll.length;
}));

(shadow.dom.NativeColl.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return shadow.dom.lazy_native_coll_seq(self__.coll,(0));
}));

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(shadow.dom.NativeColl.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
return self__.coll;
}));

(shadow.dom.NativeColl.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"coll","coll",-1006698606,null)], null);
}));

(shadow.dom.NativeColl.cljs$lang$type = true);

(shadow.dom.NativeColl.cljs$lang$ctorStr = "shadow.dom/NativeColl");

(shadow.dom.NativeColl.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"shadow.dom/NativeColl");
}));

/**
 * Positional factory function for shadow.dom/NativeColl.
 */
shadow.dom.__GT_NativeColl = (function shadow$dom$__GT_NativeColl(coll){
return (new shadow.dom.NativeColl(coll));
});

shadow.dom.native_coll = (function shadow$dom$native_coll(coll){
return (new shadow.dom.NativeColl(coll));
});
shadow.dom.dom_node = (function shadow$dom$dom_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$IElement$))))?true:false):false)){
return el.shadow$dom$IElement$_to_dom$arity$1(null);
} else {
if(typeof el === 'string'){
return document.createTextNode(el);
} else {
if(typeof el === 'number'){
return document.createTextNode(cljs.core.str.cljs$core$IFn$_invoke$arity$1(el));
} else {
return el;

}
}
}
}
});
shadow.dom.query_one = (function shadow$dom$query_one(var_args){
var G__32196 = arguments.length;
switch (G__32196) {
case 1:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return document.querySelector(sel);
}));

(shadow.dom.query_one.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return shadow.dom.dom_node(root).querySelector(sel);
}));

(shadow.dom.query_one.cljs$lang$maxFixedArity = 2);

shadow.dom.query = (function shadow$dom$query(var_args){
var G__32215 = arguments.length;
switch (G__32215) {
case 1:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.query.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.query.cljs$core$IFn$_invoke$arity$1 = (function (sel){
return (new shadow.dom.NativeColl(document.querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$core$IFn$_invoke$arity$2 = (function (sel,root){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(root).querySelectorAll(sel)));
}));

(shadow.dom.query.cljs$lang$maxFixedArity = 2);

shadow.dom.by_id = (function shadow$dom$by_id(var_args){
var G__32234 = arguments.length;
switch (G__32234) {
case 2:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$2 = (function (id,el){
return shadow.dom.dom_node(el).getElementById(id);
}));

(shadow.dom.by_id.cljs$core$IFn$_invoke$arity$1 = (function (id){
return document.getElementById(id);
}));

(shadow.dom.by_id.cljs$lang$maxFixedArity = 2);

shadow.dom.build = shadow.dom.dom_node;
shadow.dom.ev_stop = (function shadow$dom$ev_stop(var_args){
var G__32239 = arguments.length;
switch (G__32239) {
case 1:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1 = (function (e){
if(cljs.core.truth_(e.stopPropagation)){
e.stopPropagation();

e.preventDefault();
} else {
(e.cancelBubble = true);

(e.returnValue = false);
}

return e;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$2 = (function (e,el){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$4 = (function (e,el,scope,owner){
shadow.dom.ev_stop.cljs$core$IFn$_invoke$arity$1(e);

return el;
}));

(shadow.dom.ev_stop.cljs$lang$maxFixedArity = 4);

/**
 * check wether a parent node (or the document) contains the child
 */
shadow.dom.contains_QMARK_ = (function shadow$dom$contains_QMARK_(var_args){
var G__32258 = arguments.length;
switch (G__32258) {
case 1:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$1 = (function (el){
var G__32266 = document;
var G__32267 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32266,G__32267);
}));

(shadow.dom.contains_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (parent,el){
var G__32269 = shadow.dom.dom_node(parent);
var G__32270 = shadow.dom.dom_node(el);
return goog.dom.contains(G__32269,G__32270);
}));

(shadow.dom.contains_QMARK_.cljs$lang$maxFixedArity = 2);

shadow.dom.add_class = (function shadow$dom$add_class(el,cls){
var G__32272 = shadow.dom.dom_node(el);
var G__32273 = cls;
return goog.dom.classlist.add(G__32272,G__32273);
});
shadow.dom.remove_class = (function shadow$dom$remove_class(el,cls){
var G__32276 = shadow.dom.dom_node(el);
var G__32277 = cls;
return goog.dom.classlist.remove(G__32276,G__32277);
});
shadow.dom.toggle_class = (function shadow$dom$toggle_class(var_args){
var G__32289 = arguments.length;
switch (G__32289) {
case 2:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$2 = (function (el,cls){
var G__32294 = shadow.dom.dom_node(el);
var G__32295 = cls;
return goog.dom.classlist.toggle(G__32294,G__32295);
}));

(shadow.dom.toggle_class.cljs$core$IFn$_invoke$arity$3 = (function (el,cls,v){
if(cljs.core.truth_(v)){
return shadow.dom.add_class(el,cls);
} else {
return shadow.dom.remove_class(el,cls);
}
}));

(shadow.dom.toggle_class.cljs$lang$maxFixedArity = 3);

shadow.dom.dom_listen = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.addEventListener;
}
})())?(function shadow$dom$dom_listen_good(el,ev,handler){
return el.addEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_ie(el,ev,handler){
try{return el.attachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),(function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
}));
}catch (e32301){if((e32301 instanceof Object)){
var e = e32301;
return console.log("didnt support attachEvent",el,e);
} else {
throw e32301;

}
}}));
shadow.dom.dom_listen_remove = (cljs.core.truth_((function (){var or__4185__auto__ = (!((typeof document !== 'undefined')));
if(or__4185__auto__){
return or__4185__auto__;
} else {
return document.removeEventListener;
}
})())?(function shadow$dom$dom_listen_remove_good(el,ev,handler){
return el.removeEventListener(ev,handler,false);
}):(function shadow$dom$dom_listen_remove_ie(el,ev,handler){
return el.detachEvent(["on",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ev)].join(''),handler);
}));
shadow.dom.on_query = (function shadow$dom$on_query(root_el,ev,selector,handler){
var seq__32306 = cljs.core.seq(shadow.dom.query.cljs$core$IFn$_invoke$arity$2(selector,root_el));
var chunk__32307 = null;
var count__32308 = (0);
var i__32309 = (0);
while(true){
if((i__32309 < count__32308)){
var el = chunk__32307.cljs$core$IIndexed$_nth$arity$2(null,i__32309);
var handler_33418__$1 = ((function (seq__32306,chunk__32307,count__32308,i__32309,el){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32306,chunk__32307,count__32308,i__32309,el))
;
var G__32320_33419 = el;
var G__32321_33420 = cljs.core.name(ev);
var G__32322_33421 = handler_33418__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32320_33419,G__32321_33420,G__32322_33421) : shadow.dom.dom_listen.call(null,G__32320_33419,G__32321_33420,G__32322_33421));


var G__33424 = seq__32306;
var G__33425 = chunk__32307;
var G__33426 = count__32308;
var G__33427 = (i__32309 + (1));
seq__32306 = G__33424;
chunk__32307 = G__33425;
count__32308 = G__33426;
i__32309 = G__33427;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32306);
if(temp__5735__auto__){
var seq__32306__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32306__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32306__$1);
var G__33429 = cljs.core.chunk_rest(seq__32306__$1);
var G__33430 = c__4609__auto__;
var G__33431 = cljs.core.count(c__4609__auto__);
var G__33432 = (0);
seq__32306 = G__33429;
chunk__32307 = G__33430;
count__32308 = G__33431;
i__32309 = G__33432;
continue;
} else {
var el = cljs.core.first(seq__32306__$1);
var handler_33434__$1 = ((function (seq__32306,chunk__32307,count__32308,i__32309,el,seq__32306__$1,temp__5735__auto__){
return (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});})(seq__32306,chunk__32307,count__32308,i__32309,el,seq__32306__$1,temp__5735__auto__))
;
var G__32327_33437 = el;
var G__32328_33438 = cljs.core.name(ev);
var G__32329_33439 = handler_33434__$1;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32327_33437,G__32328_33438,G__32329_33439) : shadow.dom.dom_listen.call(null,G__32327_33437,G__32328_33438,G__32329_33439));


var G__33440 = cljs.core.next(seq__32306__$1);
var G__33441 = null;
var G__33442 = (0);
var G__33443 = (0);
seq__32306 = G__33440;
chunk__32307 = G__33441;
count__32308 = G__33442;
i__32309 = G__33443;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.on = (function shadow$dom$on(var_args){
var G__32335 = arguments.length;
switch (G__32335) {
case 3:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.on.cljs$core$IFn$_invoke$arity$3 = (function (el,ev,handler){
return shadow.dom.on.cljs$core$IFn$_invoke$arity$4(el,ev,handler,false);
}));

(shadow.dom.on.cljs$core$IFn$_invoke$arity$4 = (function (el,ev,handler,capture){
if(cljs.core.vector_QMARK_(ev)){
return shadow.dom.on_query(el,cljs.core.first(ev),cljs.core.second(ev),handler);
} else {
var handler__$1 = (function (e){
return (handler.cljs$core$IFn$_invoke$arity$2 ? handler.cljs$core$IFn$_invoke$arity$2(e,el) : handler.call(null,e,el));
});
var G__32342 = shadow.dom.dom_node(el);
var G__32343 = cljs.core.name(ev);
var G__32344 = handler__$1;
return (shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__32342,G__32343,G__32344) : shadow.dom.dom_listen.call(null,G__32342,G__32343,G__32344));
}
}));

(shadow.dom.on.cljs$lang$maxFixedArity = 4);

shadow.dom.remove_event_handler = (function shadow$dom$remove_event_handler(el,ev,handler){
var G__32347 = shadow.dom.dom_node(el);
var G__32348 = cljs.core.name(ev);
var G__32349 = handler;
return (shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen_remove.cljs$core$IFn$_invoke$arity$3(G__32347,G__32348,G__32349) : shadow.dom.dom_listen_remove.call(null,G__32347,G__32348,G__32349));
});
shadow.dom.add_event_listeners = (function shadow$dom$add_event_listeners(el,events){
var seq__32353 = cljs.core.seq(events);
var chunk__32354 = null;
var count__32355 = (0);
var i__32356 = (0);
while(true){
if((i__32356 < count__32355)){
var vec__32367 = chunk__32354.cljs$core$IIndexed$_nth$arity$2(null,i__32356);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32367,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32367,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33452 = seq__32353;
var G__33453 = chunk__32354;
var G__33454 = count__32355;
var G__33455 = (i__32356 + (1));
seq__32353 = G__33452;
chunk__32354 = G__33453;
count__32355 = G__33454;
i__32356 = G__33455;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32353);
if(temp__5735__auto__){
var seq__32353__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32353__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32353__$1);
var G__33464 = cljs.core.chunk_rest(seq__32353__$1);
var G__33465 = c__4609__auto__;
var G__33466 = cljs.core.count(c__4609__auto__);
var G__33467 = (0);
seq__32353 = G__33464;
chunk__32354 = G__33465;
count__32355 = G__33466;
i__32356 = G__33467;
continue;
} else {
var vec__32373 = cljs.core.first(seq__32353__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32373,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32373,(1),null);
shadow.dom.on.cljs$core$IFn$_invoke$arity$3(el,k,v);


var G__33474 = cljs.core.next(seq__32353__$1);
var G__33475 = null;
var G__33476 = (0);
var G__33477 = (0);
seq__32353 = G__33474;
chunk__32354 = G__33475;
count__32355 = G__33476;
i__32356 = G__33477;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_style = (function shadow$dom$set_style(el,styles){
var dom = shadow.dom.dom_node(el);
var seq__32379 = cljs.core.seq(styles);
var chunk__32380 = null;
var count__32381 = (0);
var i__32382 = (0);
while(true){
if((i__32382 < count__32381)){
var vec__32398 = chunk__32380.cljs$core$IIndexed$_nth$arity$2(null,i__32382);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32398,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32398,(1),null);
var G__32404_33488 = dom;
var G__32405_33489 = cljs.core.name(k);
var G__32406_33490 = (((v == null))?"":v);
goog.style.setStyle(G__32404_33488,G__32405_33489,G__32406_33490);


var G__33494 = seq__32379;
var G__33495 = chunk__32380;
var G__33496 = count__32381;
var G__33497 = (i__32382 + (1));
seq__32379 = G__33494;
chunk__32380 = G__33495;
count__32381 = G__33496;
i__32382 = G__33497;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32379);
if(temp__5735__auto__){
var seq__32379__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32379__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32379__$1);
var G__33506 = cljs.core.chunk_rest(seq__32379__$1);
var G__33507 = c__4609__auto__;
var G__33508 = cljs.core.count(c__4609__auto__);
var G__33509 = (0);
seq__32379 = G__33506;
chunk__32380 = G__33507;
count__32381 = G__33508;
i__32382 = G__33509;
continue;
} else {
var vec__32408 = cljs.core.first(seq__32379__$1);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32408,(1),null);
var G__32411_33516 = dom;
var G__32412_33517 = cljs.core.name(k);
var G__32413_33518 = (((v == null))?"":v);
goog.style.setStyle(G__32411_33516,G__32412_33517,G__32413_33518);


var G__33521 = cljs.core.next(seq__32379__$1);
var G__33522 = null;
var G__33523 = (0);
var G__33524 = (0);
seq__32379 = G__33521;
chunk__32380 = G__33522;
count__32381 = G__33523;
i__32382 = G__33524;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.dom.set_attr_STAR_ = (function shadow$dom$set_attr_STAR_(el,key,value){
var G__32420_33529 = key;
var G__32420_33530__$1 = (((G__32420_33529 instanceof cljs.core.Keyword))?G__32420_33529.fqn:null);
switch (G__32420_33530__$1) {
case "id":
(el.id = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "class":
(el.className = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));

break;
case "for":
(el.htmlFor = value);

break;
case "cellpadding":
el.setAttribute("cellPadding",value);

break;
case "cellspacing":
el.setAttribute("cellSpacing",value);

break;
case "colspan":
el.setAttribute("colSpan",value);

break;
case "frameborder":
el.setAttribute("frameBorder",value);

break;
case "height":
el.setAttribute("height",value);

break;
case "maxlength":
el.setAttribute("maxLength",value);

break;
case "role":
el.setAttribute("role",value);

break;
case "rowspan":
el.setAttribute("rowSpan",value);

break;
case "type":
el.setAttribute("type",value);

break;
case "usemap":
el.setAttribute("useMap",value);

break;
case "valign":
el.setAttribute("vAlign",value);

break;
case "width":
el.setAttribute("width",value);

break;
case "on":
shadow.dom.add_event_listeners(el,value);

break;
case "style":
if((value == null)){
} else {
if(typeof value === 'string'){
el.setAttribute("style",value);
} else {
if(cljs.core.map_QMARK_(value)){
shadow.dom.set_style(el,value);
} else {
goog.style.setStyle(el,value);

}
}
}

break;
default:
var ks_33540 = cljs.core.name(key);
if(cljs.core.truth_((function (){var or__4185__auto__ = goog.string.startsWith(ks_33540,"data-");
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return goog.string.startsWith(ks_33540,"aria-");
}
})())){
el.setAttribute(ks_33540,value);
} else {
(el[ks_33540] = value);
}

}

return el;
});
shadow.dom.set_attrs = (function shadow$dom$set_attrs(el,attrs){
return cljs.core.reduce_kv((function (el__$1,key,value){
shadow.dom.set_attr_STAR_(el__$1,key,value);

return el__$1;
}),shadow.dom.dom_node(el),attrs);
});
shadow.dom.set_attr = (function shadow$dom$set_attr(el,key,value){
return shadow.dom.set_attr_STAR_(shadow.dom.dom_node(el),key,value);
});
shadow.dom.has_class_QMARK_ = (function shadow$dom$has_class_QMARK_(el,cls){
var G__32436 = shadow.dom.dom_node(el);
var G__32437 = cls;
return goog.dom.classlist.contains(G__32436,G__32437);
});
shadow.dom.merge_class_string = (function shadow$dom$merge_class_string(current,extra_class){
if(cljs.core.seq(current)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(current)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(extra_class)].join('');
} else {
return extra_class;
}
});
shadow.dom.parse_tag = (function shadow$dom$parse_tag(spec){
var spec__$1 = cljs.core.name(spec);
var fdot = spec__$1.indexOf(".");
var fhash = spec__$1.indexOf("#");
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1,null,null], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fhash)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fdot),null,clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((-1),fdot)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1))),null], null);
} else {
if((fhash > fdot)){
throw ["cant have id after class?",spec__$1].join('');
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [spec__$1.substring((0),fhash),spec__$1.substring((fhash + (1)),fdot),clojure.string.replace(spec__$1.substring((fdot + (1))),/\./," ")], null);

}
}
}
}
});
shadow.dom.create_dom_node = (function shadow$dom$create_dom_node(tag_def,p__32482){
var map__32483 = p__32482;
var map__32483__$1 = (((((!((map__32483 == null))))?(((((map__32483.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32483.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32483):map__32483);
var props = map__32483__$1;
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32483__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var tag_props = ({});
var vec__32492 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32492,(2),null);
if(cljs.core.truth_(tag_id)){
(tag_props["id"] = tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
(tag_props["class"] = shadow.dom.merge_class_string(class$,tag_classes));
} else {
}

var G__32500 = goog.dom.createDom(tag_name,tag_props);
shadow.dom.set_attrs(G__32500,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)));

return G__32500;
});
shadow.dom.append = (function shadow$dom$append(var_args){
var G__32507 = arguments.length;
switch (G__32507) {
case 1:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.append.cljs$core$IFn$_invoke$arity$1 = (function (node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
document.body.appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$core$IFn$_invoke$arity$2 = (function (el,node){
if(cljs.core.truth_(node)){
var temp__5735__auto__ = shadow.dom.dom_node(node);
if(cljs.core.truth_(temp__5735__auto__)){
var n = temp__5735__auto__;
shadow.dom.dom_node(el).appendChild(n);

return n;
} else {
return null;
}
} else {
return null;
}
}));

(shadow.dom.append.cljs$lang$maxFixedArity = 2);

shadow.dom.destructure_node = (function shadow$dom$destructure_node(create_fn,p__32533){
var vec__32535 = p__32533;
var seq__32536 = cljs.core.seq(vec__32535);
var first__32537 = cljs.core.first(seq__32536);
var seq__32536__$1 = cljs.core.next(seq__32536);
var nn = first__32537;
var first__32537__$1 = cljs.core.first(seq__32536__$1);
var seq__32536__$2 = cljs.core.next(seq__32536__$1);
var np = first__32537__$1;
var nc = seq__32536__$2;
var node = vec__32535;
if((nn instanceof cljs.core.Keyword)){
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid dom node",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"node","node",581201198),node], null));
}

if((((np == null)) && ((nc == null)))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32538 = nn;
var G__32539 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32538,G__32539) : create_fn.call(null,G__32538,G__32539));
})(),cljs.core.List.EMPTY], null);
} else {
if(cljs.core.map_QMARK_(np)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(nn,np) : create_fn.call(null,nn,np)),nc], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__32540 = nn;
var G__32541 = cljs.core.PersistentArrayMap.EMPTY;
return (create_fn.cljs$core$IFn$_invoke$arity$2 ? create_fn.cljs$core$IFn$_invoke$arity$2(G__32540,G__32541) : create_fn.call(null,G__32540,G__32541));
})(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nc,np)], null);

}
}
});
shadow.dom.make_dom_node = (function shadow$dom$make_dom_node(structure){
var vec__32544 = shadow.dom.destructure_node(shadow.dom.create_dom_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32544,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32544,(1),null);
var seq__32548_33604 = cljs.core.seq(node_children);
var chunk__32549_33605 = null;
var count__32550_33606 = (0);
var i__32551_33607 = (0);
while(true){
if((i__32551_33607 < count__32550_33606)){
var child_struct_33609 = chunk__32549_33605.cljs$core$IIndexed$_nth$arity$2(null,i__32551_33607);
var children_33611 = shadow.dom.dom_node(child_struct_33609);
if(cljs.core.seq_QMARK_(children_33611)){
var seq__32591_33613 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33611));
var chunk__32593_33614 = null;
var count__32594_33615 = (0);
var i__32595_33616 = (0);
while(true){
if((i__32595_33616 < count__32594_33615)){
var child_33619 = chunk__32593_33614.cljs$core$IIndexed$_nth$arity$2(null,i__32595_33616);
if(cljs.core.truth_(child_33619)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33619);


var G__33625 = seq__32591_33613;
var G__33626 = chunk__32593_33614;
var G__33627 = count__32594_33615;
var G__33628 = (i__32595_33616 + (1));
seq__32591_33613 = G__33625;
chunk__32593_33614 = G__33626;
count__32594_33615 = G__33627;
i__32595_33616 = G__33628;
continue;
} else {
var G__33633 = seq__32591_33613;
var G__33634 = chunk__32593_33614;
var G__33635 = count__32594_33615;
var G__33636 = (i__32595_33616 + (1));
seq__32591_33613 = G__33633;
chunk__32593_33614 = G__33634;
count__32594_33615 = G__33635;
i__32595_33616 = G__33636;
continue;
}
} else {
var temp__5735__auto___33637 = cljs.core.seq(seq__32591_33613);
if(temp__5735__auto___33637){
var seq__32591_33640__$1 = temp__5735__auto___33637;
if(cljs.core.chunked_seq_QMARK_(seq__32591_33640__$1)){
var c__4609__auto___33641 = cljs.core.chunk_first(seq__32591_33640__$1);
var G__33642 = cljs.core.chunk_rest(seq__32591_33640__$1);
var G__33643 = c__4609__auto___33641;
var G__33644 = cljs.core.count(c__4609__auto___33641);
var G__33645 = (0);
seq__32591_33613 = G__33642;
chunk__32593_33614 = G__33643;
count__32594_33615 = G__33644;
i__32595_33616 = G__33645;
continue;
} else {
var child_33649 = cljs.core.first(seq__32591_33640__$1);
if(cljs.core.truth_(child_33649)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33649);


var G__33651 = cljs.core.next(seq__32591_33640__$1);
var G__33652 = null;
var G__33653 = (0);
var G__33654 = (0);
seq__32591_33613 = G__33651;
chunk__32593_33614 = G__33652;
count__32594_33615 = G__33653;
i__32595_33616 = G__33654;
continue;
} else {
var G__33656 = cljs.core.next(seq__32591_33640__$1);
var G__33657 = null;
var G__33658 = (0);
var G__33659 = (0);
seq__32591_33613 = G__33656;
chunk__32593_33614 = G__33657;
count__32594_33615 = G__33658;
i__32595_33616 = G__33659;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33611);
}


var G__33662 = seq__32548_33604;
var G__33663 = chunk__32549_33605;
var G__33664 = count__32550_33606;
var G__33665 = (i__32551_33607 + (1));
seq__32548_33604 = G__33662;
chunk__32549_33605 = G__33663;
count__32550_33606 = G__33664;
i__32551_33607 = G__33665;
continue;
} else {
var temp__5735__auto___33666 = cljs.core.seq(seq__32548_33604);
if(temp__5735__auto___33666){
var seq__32548_33667__$1 = temp__5735__auto___33666;
if(cljs.core.chunked_seq_QMARK_(seq__32548_33667__$1)){
var c__4609__auto___33668 = cljs.core.chunk_first(seq__32548_33667__$1);
var G__33669 = cljs.core.chunk_rest(seq__32548_33667__$1);
var G__33670 = c__4609__auto___33668;
var G__33671 = cljs.core.count(c__4609__auto___33668);
var G__33672 = (0);
seq__32548_33604 = G__33669;
chunk__32549_33605 = G__33670;
count__32550_33606 = G__33671;
i__32551_33607 = G__33672;
continue;
} else {
var child_struct_33675 = cljs.core.first(seq__32548_33667__$1);
var children_33676 = shadow.dom.dom_node(child_struct_33675);
if(cljs.core.seq_QMARK_(children_33676)){
var seq__32607_33679 = cljs.core.seq(cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom.dom_node,children_33676));
var chunk__32609_33680 = null;
var count__32610_33681 = (0);
var i__32611_33682 = (0);
while(true){
if((i__32611_33682 < count__32610_33681)){
var child_33688 = chunk__32609_33680.cljs$core$IIndexed$_nth$arity$2(null,i__32611_33682);
if(cljs.core.truth_(child_33688)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33688);


var G__33690 = seq__32607_33679;
var G__33691 = chunk__32609_33680;
var G__33692 = count__32610_33681;
var G__33693 = (i__32611_33682 + (1));
seq__32607_33679 = G__33690;
chunk__32609_33680 = G__33691;
count__32610_33681 = G__33692;
i__32611_33682 = G__33693;
continue;
} else {
var G__33695 = seq__32607_33679;
var G__33696 = chunk__32609_33680;
var G__33697 = count__32610_33681;
var G__33698 = (i__32611_33682 + (1));
seq__32607_33679 = G__33695;
chunk__32609_33680 = G__33696;
count__32610_33681 = G__33697;
i__32611_33682 = G__33698;
continue;
}
} else {
var temp__5735__auto___33700__$1 = cljs.core.seq(seq__32607_33679);
if(temp__5735__auto___33700__$1){
var seq__32607_33702__$1 = temp__5735__auto___33700__$1;
if(cljs.core.chunked_seq_QMARK_(seq__32607_33702__$1)){
var c__4609__auto___33704 = cljs.core.chunk_first(seq__32607_33702__$1);
var G__33705 = cljs.core.chunk_rest(seq__32607_33702__$1);
var G__33706 = c__4609__auto___33704;
var G__33707 = cljs.core.count(c__4609__auto___33704);
var G__33708 = (0);
seq__32607_33679 = G__33705;
chunk__32609_33680 = G__33706;
count__32610_33681 = G__33707;
i__32611_33682 = G__33708;
continue;
} else {
var child_33710 = cljs.core.first(seq__32607_33702__$1);
if(cljs.core.truth_(child_33710)){
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,child_33710);


var G__33712 = cljs.core.next(seq__32607_33702__$1);
var G__33713 = null;
var G__33714 = (0);
var G__33715 = (0);
seq__32607_33679 = G__33712;
chunk__32609_33680 = G__33713;
count__32610_33681 = G__33714;
i__32611_33682 = G__33715;
continue;
} else {
var G__33716 = cljs.core.next(seq__32607_33702__$1);
var G__33717 = null;
var G__33718 = (0);
var G__33719 = (0);
seq__32607_33679 = G__33716;
chunk__32609_33680 = G__33717;
count__32610_33681 = G__33718;
i__32611_33682 = G__33719;
continue;
}
}
} else {
}
}
break;
}
} else {
shadow.dom.append.cljs$core$IFn$_invoke$arity$2(node,children_33676);
}


var G__33722 = cljs.core.next(seq__32548_33667__$1);
var G__33723 = null;
var G__33724 = (0);
var G__33725 = (0);
seq__32548_33604 = G__33722;
chunk__32549_33605 = G__33723;
count__32550_33606 = G__33724;
i__32551_33607 = G__33725;
continue;
}
} else {
}
}
break;
}

return node;
});
(cljs.core.Keyword.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.Keyword.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$__$1], null));
}));

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_dom_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_dom,this$__$1);
}));
if(cljs.core.truth_(((typeof HTMLElement) != 'undefined'))){
(HTMLElement.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(HTMLElement.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
if(cljs.core.truth_(((typeof DocumentFragment) != 'undefined'))){
(DocumentFragment.prototype.shadow$dom$IElement$ = cljs.core.PROTOCOL_SENTINEL);

(DocumentFragment.prototype.shadow$dom$IElement$_to_dom$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1;
}));
} else {
}
/**
 * clear node children
 */
shadow.dom.reset = (function shadow$dom$reset(node){
var G__32631 = shadow.dom.dom_node(node);
return goog.dom.removeChildren(G__32631);
});
shadow.dom.remove = (function shadow$dom$remove(node){
if((((!((node == null))))?(((((node.cljs$lang$protocol_mask$partition0$ & (8388608))) || ((cljs.core.PROTOCOL_SENTINEL === node.cljs$core$ISeqable$))))?true:false):false)){
var seq__32658 = cljs.core.seq(node);
var chunk__32659 = null;
var count__32660 = (0);
var i__32661 = (0);
while(true){
if((i__32661 < count__32660)){
var n = chunk__32659.cljs$core$IIndexed$_nth$arity$2(null,i__32661);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33744 = seq__32658;
var G__33745 = chunk__32659;
var G__33746 = count__32660;
var G__33747 = (i__32661 + (1));
seq__32658 = G__33744;
chunk__32659 = G__33745;
count__32660 = G__33746;
i__32661 = G__33747;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32658);
if(temp__5735__auto__){
var seq__32658__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32658__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32658__$1);
var G__33748 = cljs.core.chunk_rest(seq__32658__$1);
var G__33749 = c__4609__auto__;
var G__33750 = cljs.core.count(c__4609__auto__);
var G__33751 = (0);
seq__32658 = G__33748;
chunk__32659 = G__33749;
count__32660 = G__33750;
i__32661 = G__33751;
continue;
} else {
var n = cljs.core.first(seq__32658__$1);
(shadow.dom.remove.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.remove.cljs$core$IFn$_invoke$arity$1(n) : shadow.dom.remove.call(null,n));


var G__33756 = cljs.core.next(seq__32658__$1);
var G__33757 = null;
var G__33758 = (0);
var G__33759 = (0);
seq__32658 = G__33756;
chunk__32659 = G__33757;
count__32660 = G__33758;
i__32661 = G__33759;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return goog.dom.removeNode(node);
}
});
shadow.dom.replace_node = (function shadow$dom$replace_node(old,new$){
var G__32682 = shadow.dom.dom_node(new$);
var G__32683 = shadow.dom.dom_node(old);
return goog.dom.replaceNode(G__32682,G__32683);
});
shadow.dom.text = (function shadow$dom$text(var_args){
var G__32685 = arguments.length;
switch (G__32685) {
case 2:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return shadow.dom.text.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.text.cljs$core$IFn$_invoke$arity$2 = (function (el,new_text){
return (shadow.dom.dom_node(el).innerText = new_text);
}));

(shadow.dom.text.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.dom_node(el).innerText;
}));

(shadow.dom.text.cljs$lang$maxFixedArity = 2);

shadow.dom.check = (function shadow$dom$check(var_args){
var G__32689 = arguments.length;
switch (G__32689) {
case 1:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.check.cljs$core$IFn$_invoke$arity$1 = (function (el){
return shadow.dom.check.cljs$core$IFn$_invoke$arity$2(el,true);
}));

(shadow.dom.check.cljs$core$IFn$_invoke$arity$2 = (function (el,checked){
return (shadow.dom.dom_node(el).checked = checked);
}));

(shadow.dom.check.cljs$lang$maxFixedArity = 2);

shadow.dom.checked_QMARK_ = (function shadow$dom$checked_QMARK_(el){
return shadow.dom.dom_node(el).checked;
});
shadow.dom.form_elements = (function shadow$dom$form_elements(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).elements));
});
shadow.dom.children = (function shadow$dom$children(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).children));
});
shadow.dom.child_nodes = (function shadow$dom$child_nodes(el){
return (new shadow.dom.NativeColl(shadow.dom.dom_node(el).childNodes));
});
shadow.dom.attr = (function shadow$dom$attr(var_args){
var G__32701 = arguments.length;
switch (G__32701) {
case 2:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.attr.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$2 = (function (el,key){
return shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
}));

(shadow.dom.attr.cljs$core$IFn$_invoke$arity$3 = (function (el,key,default$){
var or__4185__auto__ = shadow.dom.dom_node(el).getAttribute(cljs.core.name(key));
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return default$;
}
}));

(shadow.dom.attr.cljs$lang$maxFixedArity = 3);

shadow.dom.del_attr = (function shadow$dom$del_attr(el,key){
return shadow.dom.dom_node(el).removeAttribute(cljs.core.name(key));
});
shadow.dom.data = (function shadow$dom$data(el,key){
return shadow.dom.dom_node(el).getAttribute(["data-",cljs.core.name(key)].join(''));
});
shadow.dom.set_data = (function shadow$dom$set_data(el,key,value){
return shadow.dom.dom_node(el).setAttribute(["data-",cljs.core.name(key)].join(''),cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
shadow.dom.set_html = (function shadow$dom$set_html(node,text){
return (shadow.dom.dom_node(node).innerHTML = text);
});
shadow.dom.get_html = (function shadow$dom$get_html(node){
return shadow.dom.dom_node(node).innerHTML;
});
shadow.dom.fragment = (function shadow$dom$fragment(var_args){
var args__4795__auto__ = [];
var len__4789__auto___33789 = arguments.length;
var i__4790__auto___33792 = (0);
while(true){
if((i__4790__auto___33792 < len__4789__auto___33789)){
args__4795__auto__.push((arguments[i__4790__auto___33792]));

var G__33794 = (i__4790__auto___33792 + (1));
i__4790__auto___33792 = G__33794;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});

(shadow.dom.fragment.cljs$core$IFn$_invoke$arity$variadic = (function (nodes){
var fragment = document.createDocumentFragment();
var seq__32720_33799 = cljs.core.seq(nodes);
var chunk__32721_33800 = null;
var count__32722_33801 = (0);
var i__32723_33802 = (0);
while(true){
if((i__32723_33802 < count__32722_33801)){
var node_33803 = chunk__32721_33800.cljs$core$IIndexed$_nth$arity$2(null,i__32723_33802);
fragment.appendChild(shadow.dom._to_dom(node_33803));


var G__33804 = seq__32720_33799;
var G__33805 = chunk__32721_33800;
var G__33806 = count__32722_33801;
var G__33807 = (i__32723_33802 + (1));
seq__32720_33799 = G__33804;
chunk__32721_33800 = G__33805;
count__32722_33801 = G__33806;
i__32723_33802 = G__33807;
continue;
} else {
var temp__5735__auto___33808 = cljs.core.seq(seq__32720_33799);
if(temp__5735__auto___33808){
var seq__32720_33811__$1 = temp__5735__auto___33808;
if(cljs.core.chunked_seq_QMARK_(seq__32720_33811__$1)){
var c__4609__auto___33812 = cljs.core.chunk_first(seq__32720_33811__$1);
var G__33813 = cljs.core.chunk_rest(seq__32720_33811__$1);
var G__33814 = c__4609__auto___33812;
var G__33815 = cljs.core.count(c__4609__auto___33812);
var G__33816 = (0);
seq__32720_33799 = G__33813;
chunk__32721_33800 = G__33814;
count__32722_33801 = G__33815;
i__32723_33802 = G__33816;
continue;
} else {
var node_33819 = cljs.core.first(seq__32720_33811__$1);
fragment.appendChild(shadow.dom._to_dom(node_33819));


var G__33820 = cljs.core.next(seq__32720_33811__$1);
var G__33821 = null;
var G__33822 = (0);
var G__33823 = (0);
seq__32720_33799 = G__33820;
chunk__32721_33800 = G__33821;
count__32722_33801 = G__33822;
i__32723_33802 = G__33823;
continue;
}
} else {
}
}
break;
}

return (new shadow.dom.NativeColl(fragment));
}));

(shadow.dom.fragment.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(shadow.dom.fragment.cljs$lang$applyTo = (function (seq32714){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq32714));
}));

/**
 * given a html string, eval all <script> tags and return the html without the scripts
 * don't do this for everything, only content you trust.
 */
shadow.dom.eval_scripts = (function shadow$dom$eval_scripts(s){
var scripts = cljs.core.re_seq(/<script[^>]*?>(.+?)<\/script>/,s);
var seq__32733_33827 = cljs.core.seq(scripts);
var chunk__32734_33828 = null;
var count__32735_33829 = (0);
var i__32736_33830 = (0);
while(true){
if((i__32736_33830 < count__32735_33829)){
var vec__32745_33835 = chunk__32734_33828.cljs$core$IIndexed$_nth$arity$2(null,i__32736_33830);
var script_tag_33836 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745_33835,(0),null);
var script_body_33837 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32745_33835,(1),null);
eval(script_body_33837);


var G__33841 = seq__32733_33827;
var G__33842 = chunk__32734_33828;
var G__33843 = count__32735_33829;
var G__33844 = (i__32736_33830 + (1));
seq__32733_33827 = G__33841;
chunk__32734_33828 = G__33842;
count__32735_33829 = G__33843;
i__32736_33830 = G__33844;
continue;
} else {
var temp__5735__auto___33845 = cljs.core.seq(seq__32733_33827);
if(temp__5735__auto___33845){
var seq__32733_33846__$1 = temp__5735__auto___33845;
if(cljs.core.chunked_seq_QMARK_(seq__32733_33846__$1)){
var c__4609__auto___33848 = cljs.core.chunk_first(seq__32733_33846__$1);
var G__33849 = cljs.core.chunk_rest(seq__32733_33846__$1);
var G__33850 = c__4609__auto___33848;
var G__33851 = cljs.core.count(c__4609__auto___33848);
var G__33852 = (0);
seq__32733_33827 = G__33849;
chunk__32734_33828 = G__33850;
count__32735_33829 = G__33851;
i__32736_33830 = G__33852;
continue;
} else {
var vec__32749_33855 = cljs.core.first(seq__32733_33846__$1);
var script_tag_33856 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32749_33855,(0),null);
var script_body_33857 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32749_33855,(1),null);
eval(script_body_33857);


var G__33864 = cljs.core.next(seq__32733_33846__$1);
var G__33865 = null;
var G__33866 = (0);
var G__33867 = (0);
seq__32733_33827 = G__33864;
chunk__32734_33828 = G__33865;
count__32735_33829 = G__33866;
i__32736_33830 = G__33867;
continue;
}
} else {
}
}
break;
}

return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s__$1,p__32752){
var vec__32753 = p__32752;
var script_tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(0),null);
var script_body = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32753,(1),null);
return clojure.string.replace(s__$1,script_tag,"");
}),s,scripts);
});
shadow.dom.str__GT_fragment = (function shadow$dom$str__GT_fragment(s){
var el = document.createElement("div");
(el.innerHTML = s);

return (new shadow.dom.NativeColl(goog.dom.childrenToNode_(document,el)));
});
shadow.dom.node_name = (function shadow$dom$node_name(el){
return shadow.dom.dom_node(el).nodeName;
});
shadow.dom.ancestor_by_class = (function shadow$dom$ancestor_by_class(el,cls){
var G__32761 = shadow.dom.dom_node(el);
var G__32762 = cls;
return goog.dom.getAncestorByClass(G__32761,G__32762);
});
shadow.dom.ancestor_by_tag = (function shadow$dom$ancestor_by_tag(var_args){
var G__32765 = arguments.length;
switch (G__32765) {
case 2:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$2 = (function (el,tag){
var G__32768 = shadow.dom.dom_node(el);
var G__32769 = cljs.core.name(tag);
return goog.dom.getAncestorByTagNameAndClass(G__32768,G__32769);
}));

(shadow.dom.ancestor_by_tag.cljs$core$IFn$_invoke$arity$3 = (function (el,tag,cls){
var G__32771 = shadow.dom.dom_node(el);
var G__32772 = cljs.core.name(tag);
var G__32773 = cljs.core.name(cls);
return goog.dom.getAncestorByTagNameAndClass(G__32771,G__32772,G__32773);
}));

(shadow.dom.ancestor_by_tag.cljs$lang$maxFixedArity = 3);

shadow.dom.get_value = (function shadow$dom$get_value(dom){
var G__32774 = shadow.dom.dom_node(dom);
return goog.dom.forms.getValue(G__32774);
});
shadow.dom.set_value = (function shadow$dom$set_value(dom,value){
var G__32786 = shadow.dom.dom_node(dom);
var G__32787 = value;
return goog.dom.forms.setValue(G__32786,G__32787);
});
shadow.dom.px = (function shadow$dom$px(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1((value | (0))),"px"].join('');
});
shadow.dom.pct = (function shadow$dom$pct(value){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"%"].join('');
});
shadow.dom.remove_style_STAR_ = (function shadow$dom$remove_style_STAR_(el,style){
return el.style.removeProperty(cljs.core.name(style));
});
shadow.dom.remove_style = (function shadow$dom$remove_style(el,style){
var el__$1 = shadow.dom.dom_node(el);
return shadow.dom.remove_style_STAR_(el__$1,style);
});
shadow.dom.remove_styles = (function shadow$dom$remove_styles(el,style_keys){
var el__$1 = shadow.dom.dom_node(el);
var seq__32820 = cljs.core.seq(style_keys);
var chunk__32821 = null;
var count__32822 = (0);
var i__32823 = (0);
while(true){
if((i__32823 < count__32822)){
var it = chunk__32821.cljs$core$IIndexed$_nth$arity$2(null,i__32823);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33914 = seq__32820;
var G__33915 = chunk__32821;
var G__33916 = count__32822;
var G__33917 = (i__32823 + (1));
seq__32820 = G__33914;
chunk__32821 = G__33915;
count__32822 = G__33916;
i__32823 = G__33917;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__32820);
if(temp__5735__auto__){
var seq__32820__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__32820__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__32820__$1);
var G__33921 = cljs.core.chunk_rest(seq__32820__$1);
var G__33922 = c__4609__auto__;
var G__33923 = cljs.core.count(c__4609__auto__);
var G__33924 = (0);
seq__32820 = G__33921;
chunk__32821 = G__33922;
count__32822 = G__33923;
i__32823 = G__33924;
continue;
} else {
var it = cljs.core.first(seq__32820__$1);
shadow.dom.remove_style_STAR_(el__$1,it);


var G__33927 = cljs.core.next(seq__32820__$1);
var G__33928 = null;
var G__33929 = (0);
var G__33930 = (0);
seq__32820 = G__33927;
chunk__32821 = G__33928;
count__32822 = G__33929;
i__32823 = G__33930;
continue;
}
} else {
return null;
}
}
break;
}
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Coordinate = (function (x,y,__meta,__extmap,__hash){
this.x = x;
this.y = y;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Coordinate.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32838,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32859 = k32838;
var G__32859__$1 = (((G__32859 instanceof cljs.core.Keyword))?G__32859.fqn:null);
switch (G__32859__$1) {
case "x":
return self__.x;

break;
case "y":
return self__.y;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32838,else__4442__auto__);

}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32866){
var vec__32869 = p__32866;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32869,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Coordinate.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Coordinate{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"x","x",2099068185),self__.x],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"y","y",-1757859776),self__.y],null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32837){
var self__ = this;
var G__32837__$1 = this;
return (new cljs.core.RecordIter((0),G__32837__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32879 = (function (coll__4436__auto__){
return (145542109 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32879(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32839,other32840){
var self__ = this;
var this32839__$1 = this;
return (((!((other32840 == null)))) && ((this32839__$1.constructor === other32840.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32839__$1.x,other32840.x)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32839__$1.y,other32840.y)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32839__$1.__extmap,other32840.__extmap)));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32837){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32887 = cljs.core.keyword_identical_QMARK_;
var expr__32888 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32890 = new cljs.core.Keyword(null,"x","x",2099068185);
var G__32891 = expr__32888;
return (pred__32887.cljs$core$IFn$_invoke$arity$2 ? pred__32887.cljs$core$IFn$_invoke$arity$2(G__32890,G__32891) : pred__32887.call(null,G__32890,G__32891));
})())){
return (new shadow.dom.Coordinate(G__32837,self__.y,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32892 = new cljs.core.Keyword(null,"y","y",-1757859776);
var G__32893 = expr__32888;
return (pred__32887.cljs$core$IFn$_invoke$arity$2 ? pred__32887.cljs$core$IFn$_invoke$arity$2(G__32892,G__32893) : pred__32887.call(null,G__32892,G__32893));
})())){
return (new shadow.dom.Coordinate(self__.x,G__32837,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Coordinate(self__.x,self__.y,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32837),null));
}
}
}));

(shadow.dom.Coordinate.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"x","x",2099068185),self__.x,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"y","y",-1757859776),self__.y,null))], null),self__.__extmap));
}));

(shadow.dom.Coordinate.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32837){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Coordinate(self__.x,self__.y,G__32837,self__.__extmap,self__.__hash));
}));

(shadow.dom.Coordinate.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Coordinate.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"x","x",-555367584,null),new cljs.core.Symbol(null,"y","y",-117328249,null)], null);
}));

(shadow.dom.Coordinate.cljs$lang$type = true);

(shadow.dom.Coordinate.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Coordinate",null,(1),null));
}));

(shadow.dom.Coordinate.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Coordinate");
}));

/**
 * Positional factory function for shadow.dom/Coordinate.
 */
shadow.dom.__GT_Coordinate = (function shadow$dom$__GT_Coordinate(x,y){
return (new shadow.dom.Coordinate(x,y,null,null,null));
});

/**
 * Factory function for shadow.dom/Coordinate, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Coordinate = (function shadow$dom$map__GT_Coordinate(G__32846){
var extmap__4478__auto__ = (function (){var G__32905 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32846,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"y","y",-1757859776)], 0));
if(cljs.core.record_QMARK_(G__32846)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32905);
} else {
return G__32905;
}
})();
return (new shadow.dom.Coordinate(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(G__32846),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(G__32846),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.get_position = (function shadow$dom$get_position(el){
var pos = (function (){var G__32911 = shadow.dom.dom_node(el);
return goog.style.getPosition(G__32911);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_client_position = (function shadow$dom$get_client_position(el){
var pos = (function (){var G__32912 = shadow.dom.dom_node(el);
return goog.style.getClientPosition(G__32912);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});
shadow.dom.get_page_offset = (function shadow$dom$get_page_offset(el){
var pos = (function (){var G__32914 = shadow.dom.dom_node(el);
return goog.style.getPageOffset(G__32914);
})();
return shadow.dom.__GT_Coordinate(pos.x,pos.y);
});

/**
* @constructor
 * @implements {cljs.core.IRecord}
 * @implements {cljs.core.IKVReduce}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.ICollection}
 * @implements {cljs.core.ICounted}
 * @implements {cljs.core.ISeqable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.ICloneable}
 * @implements {cljs.core.IPrintWithWriter}
 * @implements {cljs.core.IIterable}
 * @implements {cljs.core.IWithMeta}
 * @implements {cljs.core.IAssociative}
 * @implements {cljs.core.IMap}
 * @implements {cljs.core.ILookup}
*/
shadow.dom.Size = (function (w,h,__meta,__extmap,__hash){
this.w = w;
this.h = h;
this.__meta = __meta;
this.__extmap = __extmap;
this.__hash = __hash;
this.cljs$lang$protocol_mask$partition0$ = 2230716170;
this.cljs$lang$protocol_mask$partition1$ = 139264;
});
(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$2 = (function (this__4439__auto__,k__4440__auto__){
var self__ = this;
var this__4439__auto____$1 = this;
return this__4439__auto____$1.cljs$core$ILookup$_lookup$arity$3(null,k__4440__auto__,null);
}));

(shadow.dom.Size.prototype.cljs$core$ILookup$_lookup$arity$3 = (function (this__4441__auto__,k32918,else__4442__auto__){
var self__ = this;
var this__4441__auto____$1 = this;
var G__32939 = k32918;
var G__32939__$1 = (((G__32939 instanceof cljs.core.Keyword))?G__32939.fqn:null);
switch (G__32939__$1) {
case "w":
return self__.w;

break;
case "h":
return self__.h;

break;
default:
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k32918,else__4442__auto__);

}
}));

(shadow.dom.Size.prototype.cljs$core$IKVReduce$_kv_reduce$arity$3 = (function (this__4458__auto__,f__4459__auto__,init__4460__auto__){
var self__ = this;
var this__4458__auto____$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (ret__4461__auto__,p__32940){
var vec__32942 = p__32940;
var k__4462__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942,(0),null);
var v__4463__auto__ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32942,(1),null);
return (f__4459__auto__.cljs$core$IFn$_invoke$arity$3 ? f__4459__auto__.cljs$core$IFn$_invoke$arity$3(ret__4461__auto__,k__4462__auto__,v__4463__auto__) : f__4459__auto__.call(null,ret__4461__auto__,k__4462__auto__,v__4463__auto__));
}),init__4460__auto__,this__4458__auto____$1);
}));

(shadow.dom.Size.prototype.cljs$core$IPrintWithWriter$_pr_writer$arity$3 = (function (this__4453__auto__,writer__4454__auto__,opts__4455__auto__){
var self__ = this;
var this__4453__auto____$1 = this;
var pr_pair__4456__auto__ = (function (keyval__4457__auto__){
return cljs.core.pr_sequential_writer(writer__4454__auto__,cljs.core.pr_writer,""," ","",opts__4455__auto__,keyval__4457__auto__);
});
return cljs.core.pr_sequential_writer(writer__4454__auto__,pr_pair__4456__auto__,"#shadow.dom.Size{",", ","}",opts__4455__auto__,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"w","w",354169001),self__.w],null)),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"h","h",1109658740),self__.h],null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IIterable$_iterator$arity$1 = (function (G__32917){
var self__ = this;
var G__32917__$1 = this;
return (new cljs.core.RecordIter((0),G__32917__$1,2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"w","w",354169001),new cljs.core.Keyword(null,"h","h",1109658740)], null),(cljs.core.truth_(self__.__extmap)?cljs.core._iterator(self__.__extmap):cljs.core.nil_iter())));
}));

(shadow.dom.Size.prototype.cljs$core$IMeta$_meta$arity$1 = (function (this__4437__auto__){
var self__ = this;
var this__4437__auto____$1 = this;
return self__.__meta;
}));

(shadow.dom.Size.prototype.cljs$core$ICloneable$_clone$arity$1 = (function (this__4434__auto__){
var self__ = this;
var this__4434__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICounted$_count$arity$1 = (function (this__4443__auto__){
var self__ = this;
var this__4443__auto____$1 = this;
return (2 + cljs.core.count(self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IHash$_hash$arity$1 = (function (this__4435__auto__){
var self__ = this;
var this__4435__auto____$1 = this;
var h__4297__auto__ = self__.__hash;
if((!((h__4297__auto__ == null)))){
return h__4297__auto__;
} else {
var h__4297__auto____$1 = (function (){var fexpr__32948 = (function (coll__4436__auto__){
return (-1228019642 ^ cljs.core.hash_unordered_coll(coll__4436__auto__));
});
return fexpr__32948(this__4435__auto____$1);
})();
(self__.__hash = h__4297__auto____$1);

return h__4297__auto____$1;
}
}));

(shadow.dom.Size.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (this32919,other32920){
var self__ = this;
var this32919__$1 = this;
return (((!((other32920 == null)))) && ((this32919__$1.constructor === other32920.constructor)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.w,other32920.w)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.h,other32920.h)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(this32919__$1.__extmap,other32920.__extmap)));
}));

(shadow.dom.Size.prototype.cljs$core$IMap$_dissoc$arity$2 = (function (this__4448__auto__,k__4449__auto__){
var self__ = this;
var this__4448__auto____$1 = this;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"w","w",354169001),null,new cljs.core.Keyword(null,"h","h",1109658740),null], null), null),k__4449__auto__)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core._with_meta(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,this__4448__auto____$1),self__.__meta),k__4449__auto__);
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.__extmap,k__4449__auto__)),null));
}
}));

(shadow.dom.Size.prototype.cljs$core$IAssociative$_assoc$arity$3 = (function (this__4446__auto__,k__4447__auto__,G__32917){
var self__ = this;
var this__4446__auto____$1 = this;
var pred__32960 = cljs.core.keyword_identical_QMARK_;
var expr__32961 = k__4447__auto__;
if(cljs.core.truth_((function (){var G__32963 = new cljs.core.Keyword(null,"w","w",354169001);
var G__32964 = expr__32961;
return (pred__32960.cljs$core$IFn$_invoke$arity$2 ? pred__32960.cljs$core$IFn$_invoke$arity$2(G__32963,G__32964) : pred__32960.call(null,G__32963,G__32964));
})())){
return (new shadow.dom.Size(G__32917,self__.h,self__.__meta,self__.__extmap,null));
} else {
if(cljs.core.truth_((function (){var G__32966 = new cljs.core.Keyword(null,"h","h",1109658740);
var G__32967 = expr__32961;
return (pred__32960.cljs$core$IFn$_invoke$arity$2 ? pred__32960.cljs$core$IFn$_invoke$arity$2(G__32966,G__32967) : pred__32960.call(null,G__32966,G__32967));
})())){
return (new shadow.dom.Size(self__.w,G__32917,self__.__meta,self__.__extmap,null));
} else {
return (new shadow.dom.Size(self__.w,self__.h,self__.__meta,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.__extmap,k__4447__auto__,G__32917),null));
}
}
}));

(shadow.dom.Size.prototype.cljs$core$ISeqable$_seq$arity$1 = (function (this__4451__auto__){
var self__ = this;
var this__4451__auto____$1 = this;
return cljs.core.seq(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(new cljs.core.MapEntry(new cljs.core.Keyword(null,"w","w",354169001),self__.w,null)),(new cljs.core.MapEntry(new cljs.core.Keyword(null,"h","h",1109658740),self__.h,null))], null),self__.__extmap));
}));

(shadow.dom.Size.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (this__4438__auto__,G__32917){
var self__ = this;
var this__4438__auto____$1 = this;
return (new shadow.dom.Size(self__.w,self__.h,G__32917,self__.__extmap,self__.__hash));
}));

(shadow.dom.Size.prototype.cljs$core$ICollection$_conj$arity$2 = (function (this__4444__auto__,entry__4445__auto__){
var self__ = this;
var this__4444__auto____$1 = this;
if(cljs.core.vector_QMARK_(entry__4445__auto__)){
return this__4444__auto____$1.cljs$core$IAssociative$_assoc$arity$3(null,cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(0)),cljs.core._nth.cljs$core$IFn$_invoke$arity$2(entry__4445__auto__,(1)));
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core._conj,this__4444__auto____$1,entry__4445__auto__);
}
}));

(shadow.dom.Size.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"w","w",1994700528,null),new cljs.core.Symbol(null,"h","h",-1544777029,null)], null);
}));

(shadow.dom.Size.cljs$lang$type = true);

(shadow.dom.Size.cljs$lang$ctorPrSeq = (function (this__4482__auto__){
return (new cljs.core.List(null,"shadow.dom/Size",null,(1),null));
}));

(shadow.dom.Size.cljs$lang$ctorPrWriter = (function (this__4482__auto__,writer__4483__auto__){
return cljs.core._write(writer__4483__auto__,"shadow.dom/Size");
}));

/**
 * Positional factory function for shadow.dom/Size.
 */
shadow.dom.__GT_Size = (function shadow$dom$__GT_Size(w,h){
return (new shadow.dom.Size(w,h,null,null,null));
});

/**
 * Factory function for shadow.dom/Size, taking a map of keywords to field values.
 */
shadow.dom.map__GT_Size = (function shadow$dom$map__GT_Size(G__32933){
var extmap__4478__auto__ = (function (){var G__32973 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__32933,new cljs.core.Keyword(null,"w","w",354169001),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"h","h",1109658740)], 0));
if(cljs.core.record_QMARK_(G__32933)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,G__32973);
} else {
return G__32973;
}
})();
return (new shadow.dom.Size(new cljs.core.Keyword(null,"w","w",354169001).cljs$core$IFn$_invoke$arity$1(G__32933),new cljs.core.Keyword(null,"h","h",1109658740).cljs$core$IFn$_invoke$arity$1(G__32933),null,cljs.core.not_empty(extmap__4478__auto__),null));
});

shadow.dom.size__GT_clj = (function shadow$dom$size__GT_clj(size){
return (new shadow.dom.Size(size.width,size.height,null,null,null));
});
shadow.dom.get_size = (function shadow$dom$get_size(el){
return shadow.dom.size__GT_clj((function (){var G__32983 = shadow.dom.dom_node(el);
return goog.style.getSize(G__32983);
})());
});
shadow.dom.get_height = (function shadow$dom$get_height(el){
return shadow.dom.get_size(el).h;
});
shadow.dom.get_viewport_size = (function shadow$dom$get_viewport_size(){
return shadow.dom.size__GT_clj(goog.dom.getViewportSize());
});
shadow.dom.first_child = (function shadow$dom$first_child(el){
return (shadow.dom.dom_node(el).children[(0)]);
});
shadow.dom.select_option_values = (function shadow$dom$select_option_values(el){
var native$ = shadow.dom.dom_node(el);
var opts = (native$["options"]);
var a__4663__auto__ = opts;
var l__4664__auto__ = a__4663__auto__.length;
var i = (0);
var ret = cljs.core.PersistentVector.EMPTY;
while(true){
if((i < l__4664__auto__)){
var G__34080 = (i + (1));
var G__34081 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,(opts[i]["value"]));
i = G__34080;
ret = G__34081;
continue;
} else {
return ret;
}
break;
}
});
shadow.dom.build_url = (function shadow$dom$build_url(path,query_params){
if(cljs.core.empty_QMARK_(query_params)){
return path;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"?",clojure.string.join.cljs$core$IFn$_invoke$arity$2("&",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__32990){
var vec__32991 = p__32990;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32991,(1),null);
return [cljs.core.name(k),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(encodeURIComponent(cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)))].join('');
}),query_params))].join('');
}
});
shadow.dom.redirect = (function shadow$dom$redirect(var_args){
var G__32996 = arguments.length;
switch (G__32996) {
case 1:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$1 = (function (path){
return shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2(path,cljs.core.PersistentArrayMap.EMPTY);
}));

(shadow.dom.redirect.cljs$core$IFn$_invoke$arity$2 = (function (path,query_params){
return (document["location"]["href"] = shadow.dom.build_url(path,query_params));
}));

(shadow.dom.redirect.cljs$lang$maxFixedArity = 2);

shadow.dom.reload_BANG_ = (function shadow$dom$reload_BANG_(){
return (document.location.href = document.location.href);
});
shadow.dom.tag_name = (function shadow$dom$tag_name(el){
var dom = shadow.dom.dom_node(el);
return dom.tagName;
});
shadow.dom.insert_after = (function shadow$dom$insert_after(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33029_34113 = new_node;
var G__33030_34114 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingAfter(G__33029_34113,G__33030_34114);

return new_node;
});
shadow.dom.insert_before = (function shadow$dom$insert_before(ref,new$){
var new_node = shadow.dom.dom_node(new$);
var G__33034_34121 = new_node;
var G__33035_34122 = shadow.dom.dom_node(ref);
goog.dom.insertSiblingBefore(G__33034_34121,G__33035_34122);

return new_node;
});
shadow.dom.insert_first = (function shadow$dom$insert_first(ref,new$){
var temp__5733__auto__ = shadow.dom.dom_node(ref).firstChild;
if(cljs.core.truth_(temp__5733__auto__)){
var child = temp__5733__auto__;
return shadow.dom.insert_before(child,new$);
} else {
return shadow.dom.append.cljs$core$IFn$_invoke$arity$2(ref,new$);
}
});
shadow.dom.index_of = (function shadow$dom$index_of(el){
var el__$1 = shadow.dom.dom_node(el);
var i = (0);
while(true){
var ps = el__$1.previousSibling;
if((ps == null)){
return i;
} else {
var G__34125 = ps;
var G__34126 = (i + (1));
el__$1 = G__34125;
i = G__34126;
continue;
}
break;
}
});
shadow.dom.get_parent = (function shadow$dom$get_parent(el){
var G__33041 = shadow.dom.dom_node(el);
return goog.dom.getParentElement(G__33041);
});
shadow.dom.parents = (function shadow$dom$parents(el){
var parent = shadow.dom.get_parent(el);
if(cljs.core.truth_(parent)){
return cljs.core.cons(parent,(new cljs.core.LazySeq(null,(function (){
return (shadow.dom.parents.cljs$core$IFn$_invoke$arity$1 ? shadow.dom.parents.cljs$core$IFn$_invoke$arity$1(parent) : shadow.dom.parents.call(null,parent));
}),null,null)));
} else {
return null;
}
});
shadow.dom.matches = (function shadow$dom$matches(el,sel){
return shadow.dom.dom_node(el).matches(sel);
});
shadow.dom.get_next_sibling = (function shadow$dom$get_next_sibling(el){
var G__33072 = shadow.dom.dom_node(el);
return goog.dom.getNextElementSibling(G__33072);
});
shadow.dom.get_previous_sibling = (function shadow$dom$get_previous_sibling(el){
var G__33078 = shadow.dom.dom_node(el);
return goog.dom.getPreviousElementSibling(G__33078);
});
shadow.dom.xmlns = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, ["svg","http://www.w3.org/2000/svg","xlink","http://www.w3.org/1999/xlink"], null));
shadow.dom.create_svg_node = (function shadow$dom$create_svg_node(tag_def,props){
var vec__33097 = shadow.dom.parse_tag(tag_def);
var tag_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(0),null);
var tag_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(1),null);
var tag_classes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33097,(2),null);
var el = document.createElementNS("http://www.w3.org/2000/svg",tag_name);
if(cljs.core.truth_(tag_id)){
el.setAttribute("id",tag_id);
} else {
}

if(cljs.core.truth_(tag_classes)){
el.setAttribute("class",shadow.dom.merge_class_string(new cljs.core.Keyword(null,"class","class",-2030961996).cljs$core$IFn$_invoke$arity$1(props),tag_classes));
} else {
}

var seq__33104_34145 = cljs.core.seq(props);
var chunk__33105_34146 = null;
var count__33106_34147 = (0);
var i__33107_34148 = (0);
while(true){
if((i__33107_34148 < count__33106_34147)){
var vec__33127_34152 = chunk__33105_34146.cljs$core$IIndexed$_nth$arity$2(null,i__33107_34148);
var k_34153 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127_34152,(0),null);
var v_34154 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33127_34152,(1),null);
el.setAttributeNS((function (){var temp__5735__auto__ = cljs.core.namespace(k_34153);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34153),v_34154);


var G__34163 = seq__33104_34145;
var G__34164 = chunk__33105_34146;
var G__34165 = count__33106_34147;
var G__34166 = (i__33107_34148 + (1));
seq__33104_34145 = G__34163;
chunk__33105_34146 = G__34164;
count__33106_34147 = G__34165;
i__33107_34148 = G__34166;
continue;
} else {
var temp__5735__auto___34168 = cljs.core.seq(seq__33104_34145);
if(temp__5735__auto___34168){
var seq__33104_34169__$1 = temp__5735__auto___34168;
if(cljs.core.chunked_seq_QMARK_(seq__33104_34169__$1)){
var c__4609__auto___34170 = cljs.core.chunk_first(seq__33104_34169__$1);
var G__34171 = cljs.core.chunk_rest(seq__33104_34169__$1);
var G__34172 = c__4609__auto___34170;
var G__34173 = cljs.core.count(c__4609__auto___34170);
var G__34174 = (0);
seq__33104_34145 = G__34171;
chunk__33105_34146 = G__34172;
count__33106_34147 = G__34173;
i__33107_34148 = G__34174;
continue;
} else {
var vec__33133_34178 = cljs.core.first(seq__33104_34169__$1);
var k_34179 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_34178,(0),null);
var v_34180 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33133_34178,(1),null);
el.setAttributeNS((function (){var temp__5735__auto____$1 = cljs.core.namespace(k_34179);
if(cljs.core.truth_(temp__5735__auto____$1)){
var ns = temp__5735__auto____$1;
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.dom.xmlns),ns);
} else {
return null;
}
})(),cljs.core.name(k_34179),v_34180);


var G__34183 = cljs.core.next(seq__33104_34169__$1);
var G__34184 = null;
var G__34185 = (0);
var G__34186 = (0);
seq__33104_34145 = G__34183;
chunk__33105_34146 = G__34184;
count__33106_34147 = G__34185;
i__33107_34148 = G__34186;
continue;
}
} else {
}
}
break;
}

return el;
});
shadow.dom.svg_node = (function shadow$dom$svg_node(el){
if((el == null)){
return null;
} else {
if((((!((el == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === el.shadow$dom$SVGElement$))))?true:false):false)){
return el.shadow$dom$SVGElement$_to_svg$arity$1(null);
} else {
return el;

}
}
});
shadow.dom.make_svg_node = (function shadow$dom$make_svg_node(structure){
var vec__33149 = shadow.dom.destructure_node(shadow.dom.create_svg_node,structure);
var node = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(0),null);
var node_children = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__33149,(1),null);
var seq__33152_34193 = cljs.core.seq(node_children);
var chunk__33154_34194 = null;
var count__33155_34195 = (0);
var i__33156_34196 = (0);
while(true){
if((i__33156_34196 < count__33155_34195)){
var child_struct_34197 = chunk__33154_34194.cljs$core$IIndexed$_nth$arity$2(null,i__33156_34196);
if((!((child_struct_34197 == null)))){
if(typeof child_struct_34197 === 'string'){
var text_34199 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34199),child_struct_34197].join(''));
} else {
var children_34200 = shadow.dom.svg_node(child_struct_34197);
if(cljs.core.seq_QMARK_(children_34200)){
var seq__33193_34202 = cljs.core.seq(children_34200);
var chunk__33195_34203 = null;
var count__33196_34204 = (0);
var i__33197_34205 = (0);
while(true){
if((i__33197_34205 < count__33196_34204)){
var child_34207 = chunk__33195_34203.cljs$core$IIndexed$_nth$arity$2(null,i__33197_34205);
if(cljs.core.truth_(child_34207)){
node.appendChild(child_34207);


var G__34209 = seq__33193_34202;
var G__34210 = chunk__33195_34203;
var G__34211 = count__33196_34204;
var G__34212 = (i__33197_34205 + (1));
seq__33193_34202 = G__34209;
chunk__33195_34203 = G__34210;
count__33196_34204 = G__34211;
i__33197_34205 = G__34212;
continue;
} else {
var G__34213 = seq__33193_34202;
var G__34214 = chunk__33195_34203;
var G__34215 = count__33196_34204;
var G__34216 = (i__33197_34205 + (1));
seq__33193_34202 = G__34213;
chunk__33195_34203 = G__34214;
count__33196_34204 = G__34215;
i__33197_34205 = G__34216;
continue;
}
} else {
var temp__5735__auto___34217 = cljs.core.seq(seq__33193_34202);
if(temp__5735__auto___34217){
var seq__33193_34218__$1 = temp__5735__auto___34217;
if(cljs.core.chunked_seq_QMARK_(seq__33193_34218__$1)){
var c__4609__auto___34219 = cljs.core.chunk_first(seq__33193_34218__$1);
var G__34220 = cljs.core.chunk_rest(seq__33193_34218__$1);
var G__34221 = c__4609__auto___34219;
var G__34222 = cljs.core.count(c__4609__auto___34219);
var G__34223 = (0);
seq__33193_34202 = G__34220;
chunk__33195_34203 = G__34221;
count__33196_34204 = G__34222;
i__33197_34205 = G__34223;
continue;
} else {
var child_34224 = cljs.core.first(seq__33193_34218__$1);
if(cljs.core.truth_(child_34224)){
node.appendChild(child_34224);


var G__34225 = cljs.core.next(seq__33193_34218__$1);
var G__34226 = null;
var G__34227 = (0);
var G__34228 = (0);
seq__33193_34202 = G__34225;
chunk__33195_34203 = G__34226;
count__33196_34204 = G__34227;
i__33197_34205 = G__34228;
continue;
} else {
var G__34229 = cljs.core.next(seq__33193_34218__$1);
var G__34230 = null;
var G__34231 = (0);
var G__34232 = (0);
seq__33193_34202 = G__34229;
chunk__33195_34203 = G__34230;
count__33196_34204 = G__34231;
i__33197_34205 = G__34232;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34200);
}
}


var G__34237 = seq__33152_34193;
var G__34238 = chunk__33154_34194;
var G__34239 = count__33155_34195;
var G__34240 = (i__33156_34196 + (1));
seq__33152_34193 = G__34237;
chunk__33154_34194 = G__34238;
count__33155_34195 = G__34239;
i__33156_34196 = G__34240;
continue;
} else {
var G__34244 = seq__33152_34193;
var G__34245 = chunk__33154_34194;
var G__34246 = count__33155_34195;
var G__34247 = (i__33156_34196 + (1));
seq__33152_34193 = G__34244;
chunk__33154_34194 = G__34245;
count__33155_34195 = G__34246;
i__33156_34196 = G__34247;
continue;
}
} else {
var temp__5735__auto___34248 = cljs.core.seq(seq__33152_34193);
if(temp__5735__auto___34248){
var seq__33152_34249__$1 = temp__5735__auto___34248;
if(cljs.core.chunked_seq_QMARK_(seq__33152_34249__$1)){
var c__4609__auto___34250 = cljs.core.chunk_first(seq__33152_34249__$1);
var G__34251 = cljs.core.chunk_rest(seq__33152_34249__$1);
var G__34252 = c__4609__auto___34250;
var G__34253 = cljs.core.count(c__4609__auto___34250);
var G__34254 = (0);
seq__33152_34193 = G__34251;
chunk__33154_34194 = G__34252;
count__33155_34195 = G__34253;
i__33156_34196 = G__34254;
continue;
} else {
var child_struct_34255 = cljs.core.first(seq__33152_34249__$1);
if((!((child_struct_34255 == null)))){
if(typeof child_struct_34255 === 'string'){
var text_34256 = (node["textContent"]);
(node["textContent"] = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text_34256),child_struct_34255].join(''));
} else {
var children_34259 = shadow.dom.svg_node(child_struct_34255);
if(cljs.core.seq_QMARK_(children_34259)){
var seq__33212_34262 = cljs.core.seq(children_34259);
var chunk__33214_34263 = null;
var count__33215_34264 = (0);
var i__33216_34265 = (0);
while(true){
if((i__33216_34265 < count__33215_34264)){
var child_34270 = chunk__33214_34263.cljs$core$IIndexed$_nth$arity$2(null,i__33216_34265);
if(cljs.core.truth_(child_34270)){
node.appendChild(child_34270);


var G__34276 = seq__33212_34262;
var G__34277 = chunk__33214_34263;
var G__34278 = count__33215_34264;
var G__34279 = (i__33216_34265 + (1));
seq__33212_34262 = G__34276;
chunk__33214_34263 = G__34277;
count__33215_34264 = G__34278;
i__33216_34265 = G__34279;
continue;
} else {
var G__34290 = seq__33212_34262;
var G__34291 = chunk__33214_34263;
var G__34292 = count__33215_34264;
var G__34293 = (i__33216_34265 + (1));
seq__33212_34262 = G__34290;
chunk__33214_34263 = G__34291;
count__33215_34264 = G__34292;
i__33216_34265 = G__34293;
continue;
}
} else {
var temp__5735__auto___34296__$1 = cljs.core.seq(seq__33212_34262);
if(temp__5735__auto___34296__$1){
var seq__33212_34297__$1 = temp__5735__auto___34296__$1;
if(cljs.core.chunked_seq_QMARK_(seq__33212_34297__$1)){
var c__4609__auto___34298 = cljs.core.chunk_first(seq__33212_34297__$1);
var G__34299 = cljs.core.chunk_rest(seq__33212_34297__$1);
var G__34300 = c__4609__auto___34298;
var G__34301 = cljs.core.count(c__4609__auto___34298);
var G__34302 = (0);
seq__33212_34262 = G__34299;
chunk__33214_34263 = G__34300;
count__33215_34264 = G__34301;
i__33216_34265 = G__34302;
continue;
} else {
var child_34303 = cljs.core.first(seq__33212_34297__$1);
if(cljs.core.truth_(child_34303)){
node.appendChild(child_34303);


var G__34307 = cljs.core.next(seq__33212_34297__$1);
var G__34308 = null;
var G__34309 = (0);
var G__34310 = (0);
seq__33212_34262 = G__34307;
chunk__33214_34263 = G__34308;
count__33215_34264 = G__34309;
i__33216_34265 = G__34310;
continue;
} else {
var G__34311 = cljs.core.next(seq__33212_34297__$1);
var G__34312 = null;
var G__34313 = (0);
var G__34314 = (0);
seq__33212_34262 = G__34311;
chunk__33214_34263 = G__34312;
count__33215_34264 = G__34313;
i__33216_34265 = G__34314;
continue;
}
}
} else {
}
}
break;
}
} else {
node.appendChild(children_34259);
}
}


var G__34317 = cljs.core.next(seq__33152_34249__$1);
var G__34318 = null;
var G__34319 = (0);
var G__34320 = (0);
seq__33152_34193 = G__34317;
chunk__33154_34194 = G__34318;
count__33155_34195 = G__34319;
i__33156_34196 = G__34320;
continue;
} else {
var G__34324 = cljs.core.next(seq__33152_34249__$1);
var G__34325 = null;
var G__34326 = (0);
var G__34328 = (0);
seq__33152_34193 = G__34324;
chunk__33154_34194 = G__34325;
count__33155_34195 = G__34326;
i__33156_34196 = G__34328;
continue;
}
}
} else {
}
}
break;
}

return node;
});
goog.object.set(shadow.dom.SVGElement,"string",true);

var G__33231_34334 = shadow.dom._to_svg;
var G__33232_34335 = "string";
var G__33233_34336 = (function (this$){
if((this$ instanceof cljs.core.Keyword)){
return shadow.dom.make_svg_node(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [this$], null));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("strings cannot be in svgs",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"this","this",-611633625),this$], null));
}
});
goog.object.set(G__33231_34334,G__33232_34335,G__33233_34336);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.PersistentVector.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return shadow.dom.make_svg_node(this$__$1);
}));

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.LazySeq.prototype.shadow$dom$SVGElement$_to_svg$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(shadow.dom._to_svg,this$__$1);
}));

goog.object.set(shadow.dom.SVGElement,"null",true);

var G__33245_34351 = shadow.dom._to_svg;
var G__33246_34352 = "null";
var G__33247_34353 = (function (_){
return null;
});
goog.object.set(G__33245_34351,G__33246_34352,G__33247_34353);
shadow.dom.svg = (function shadow$dom$svg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___34355 = arguments.length;
var i__4790__auto___34356 = (0);
while(true){
if((i__4790__auto___34356 < len__4789__auto___34355)){
args__4795__auto__.push((arguments[i__4790__auto___34356]));

var G__34357 = (i__4790__auto___34356 + (1));
i__4790__auto___34356 = G__34357;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.dom.svg.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,children){
return shadow.dom._to_svg(cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg","svg",856789142),attrs], null),children)));
}));

(shadow.dom.svg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.dom.svg.cljs$lang$applyTo = (function (seq33249){
var G__33250 = cljs.core.first(seq33249);
var seq33249__$1 = cljs.core.next(seq33249);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__33250,seq33249__$1);
}));

/**
 * returns a channel for events on el
 * transform-fn should be a (fn [e el] some-val) where some-val will be put on the chan
 * once-or-cleanup handles the removal of the event handler
 * - true: remove after one event
 * - false: never removed
 * - chan: remove on msg/close
 */
shadow.dom.event_chan = (function shadow$dom$event_chan(var_args){
var G__33267 = arguments.length;
switch (G__33267) {
case 2:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$2 = (function (el,event){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,null,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$3 = (function (el,event,xf){
return shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4(el,event,xf,false);
}));

(shadow.dom.event_chan.cljs$core$IFn$_invoke$arity$4 = (function (el,event,xf,once_or_cleanup){
var buf = cljs.core.async.sliding_buffer((1));
var chan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2(buf,xf);
var event_fn = (function shadow$dom$event_fn(e){
cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(chan,e);

if(once_or_cleanup === true){
shadow.dom.remove_event_handler(el,event,shadow$dom$event_fn);

return cljs.core.async.close_BANG_(chan);
} else {
return null;
}
});
var G__33279_34396 = shadow.dom.dom_node(el);
var G__33280_34397 = cljs.core.name(event);
var G__33281_34398 = event_fn;
(shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3 ? shadow.dom.dom_listen.cljs$core$IFn$_invoke$arity$3(G__33279_34396,G__33280_34397,G__33281_34398) : shadow.dom.dom_listen.call(null,G__33279_34396,G__33280_34397,G__33281_34398));

if(cljs.core.truth_((function (){var and__4174__auto__ = once_or_cleanup;
if(cljs.core.truth_(and__4174__auto__)){
return (!(once_or_cleanup === true));
} else {
return and__4174__auto__;
}
})())){
var c__28836__auto___34404 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_33289){
var state_val_33290 = (state_33289[(1)]);
if((state_val_33290 === (1))){
var state_33289__$1 = state_33289;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33289__$1,(2),once_or_cleanup);
} else {
if((state_val_33290 === (2))){
var inst_33285 = (state_33289[(2)]);
var inst_33286 = shadow.dom.remove_event_handler(el,event,event_fn);
var state_33289__$1 = (function (){var statearr_33299 = state_33289;
(statearr_33299[(7)] = inst_33285);

return statearr_33299;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_33289__$1,inst_33286);
} else {
return null;
}
}
});
return (function() {
var shadow$dom$state_machine__28496__auto__ = null;
var shadow$dom$state_machine__28496__auto____0 = (function (){
var statearr_33301 = [null,null,null,null,null,null,null,null];
(statearr_33301[(0)] = shadow$dom$state_machine__28496__auto__);

(statearr_33301[(1)] = (1));

return statearr_33301;
});
var shadow$dom$state_machine__28496__auto____1 = (function (state_33289){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_33289);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e33302){if((e33302 instanceof Object)){
var ex__28499__auto__ = e33302;
var statearr_33309_34426 = state_33289;
(statearr_33309_34426[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33289);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33302;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34428 = state_33289;
state_33289 = G__34428;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
shadow$dom$state_machine__28496__auto__ = function(state_33289){
switch(arguments.length){
case 0:
return shadow$dom$state_machine__28496__auto____0.call(this);
case 1:
return shadow$dom$state_machine__28496__auto____1.call(this,state_33289);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
shadow$dom$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = shadow$dom$state_machine__28496__auto____0;
shadow$dom$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = shadow$dom$state_machine__28496__auto____1;
return shadow$dom$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_33320 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_33320[(6)] = c__28836__auto___34404);

return statearr_33320;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

} else {
}

return chan;
}));

(shadow.dom.event_chan.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=shadow.dom.js.map
