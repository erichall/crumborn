goog.provide('shadow.cljs.devtools.client.browser');
goog.require('cljs.core');
goog.require('cljs.reader');
goog.require('clojure.string');
goog.require('goog.dom');
goog.require('goog.userAgent.product');
goog.require('goog.Uri');
goog.require('goog.net.XhrIo');
goog.require('shadow.cljs.devtools.client.env');
goog.require('shadow.cljs.devtools.client.console');
goog.require('shadow.cljs.devtools.client.hud');
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.repl_ns_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.repl_ns_ref = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.socket_ref !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.socket_ref = cljs.core.volatile_BANG_(null);
}
shadow.cljs.devtools.client.browser.devtools_msg = (function shadow$cljs$devtools$client$browser$devtools_msg(var_args){
var args__4795__auto__ = [];
var len__4789__auto___36234 = arguments.length;
var i__4790__auto___36235 = (0);
while(true){
if((i__4790__auto___36235 < len__4789__auto___36234)){
args__4795__auto__.push((arguments[i__4790__auto___36235]));

var G__36236 = (i__4790__auto___36235 + (1));
i__4790__auto___36235 = G__36236;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic = (function (msg,args){
if(cljs.core.seq(shadow.cljs.devtools.client.env.log_style)){
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [["%c\uD83E\uDC36 shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join(''),shadow.cljs.devtools.client.env.log_style], null),args)));
} else {
return console.log.apply(console,cljs.core.into_array.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [["shadow-cljs: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg)].join('')], null),args)));
}
}));

(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(shadow.cljs.devtools.client.browser.devtools_msg.cljs$lang$applyTo = (function (seq35787){
var G__35788 = cljs.core.first(seq35787);
var seq35787__$1 = cljs.core.next(seq35787);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__35788,seq35787__$1);
}));

shadow.cljs.devtools.client.browser.ws_msg = (function shadow$cljs$devtools$client$browser$ws_msg(msg){
var temp__5733__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5733__auto__)){
var s = temp__5733__auto__;
return s.send(cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
} else {
return console.warn("WEBSOCKET NOT CONNECTED",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([msg], 0)));
}
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.scripts_to_load !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.scripts_to_load = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
}
shadow.cljs.devtools.client.browser.loaded_QMARK_ = goog.isProvided_;
shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$goog_is_loaded_QMARK_(name){
return $CLJS.SHADOW_ENV.isLoaded(name);
});
shadow.cljs.devtools.client.browser.goog_base_rc = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("shadow.build.classpath","resource","shadow.build.classpath/resource",-879517823),"goog/base.js"], null);
shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_ = (function shadow$cljs$devtools$client$browser$src_is_loaded_QMARK_(p__35811){
var map__35812 = p__35811;
var map__35812__$1 = (((((!((map__35812 == null))))?(((((map__35812.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35812.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35812):map__35812);
var src = map__35812__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35812__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var or__4185__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.goog_base_rc,resource_id);
if(or__4185__auto__){
return or__4185__auto__;
} else {
return shadow.cljs.devtools.client.browser.goog_is_loaded_QMARK_(output_name);
}
});
shadow.cljs.devtools.client.browser.script_eval = (function shadow$cljs$devtools$client$browser$script_eval(code){
return goog.globalEval(code);
});
shadow.cljs.devtools.client.browser.do_js_load = (function shadow$cljs$devtools$client$browser$do_js_load(sources){
var seq__35817 = cljs.core.seq(sources);
var chunk__35818 = null;
var count__35819 = (0);
var i__35820 = (0);
while(true){
if((i__35820 < count__35819)){
var map__35834 = chunk__35818.cljs$core$IIndexed$_nth$arity$2(null,i__35820);
var map__35834__$1 = (((((!((map__35834 == null))))?(((((map__35834.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35834.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35834):map__35834);
var src = map__35834__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35834__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35837){var e_36251 = e35837;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36251);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36251.message)].join('')));
}

var G__36253 = seq__35817;
var G__36254 = chunk__35818;
var G__36255 = count__35819;
var G__36256 = (i__35820 + (1));
seq__35817 = G__36253;
chunk__35818 = G__36254;
count__35819 = G__36255;
i__35820 = G__36256;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35817);
if(temp__5735__auto__){
var seq__35817__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35817__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35817__$1);
var G__36257 = cljs.core.chunk_rest(seq__35817__$1);
var G__36258 = c__4609__auto__;
var G__36259 = cljs.core.count(c__4609__auto__);
var G__36260 = (0);
seq__35817 = G__36257;
chunk__35818 = G__36258;
count__35819 = G__36259;
i__35820 = G__36260;
continue;
} else {
var map__35844 = cljs.core.first(seq__35817__$1);
var map__35844__$1 = (((((!((map__35844 == null))))?(((((map__35844.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35844.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35844):map__35844);
var src = map__35844__$1;
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
var output_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"output-name","output-name",-1769107767));
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35844__$1,new cljs.core.Keyword(null,"js","js",1768080579));
$CLJS.SHADOW_ENV.setLoaded(output_name);

shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load JS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resource_name], 0));

shadow.cljs.devtools.client.env.before_load_src(src);

try{shadow.cljs.devtools.client.browser.script_eval([cljs.core.str.cljs$core$IFn$_invoke$arity$1(js),"\n//# sourceURL=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''));
}catch (e35850){var e_36267 = e35850;
console.error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name)].join(''),e_36267);

throw (new Error(["Failed to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_36267.message)].join('')));
}

var G__36271 = cljs.core.next(seq__35817__$1);
var G__36272 = null;
var G__36273 = (0);
var G__36274 = (0);
seq__35817 = G__36271;
chunk__35818 = G__36272;
count__35819 = G__36273;
i__35820 = G__36274;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.do_js_reload = (function shadow$cljs$devtools$client$browser$do_js_reload(msg,sources,complete_fn,failure_fn){
return shadow.cljs.devtools.client.env.do_js_reload.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(msg,new cljs.core.Keyword(null,"log-missing-fn","log-missing-fn",732676765),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["can't find fn ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"log-call-async","log-call-async",183826192),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call async ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
}),new cljs.core.Keyword(null,"log-call","log-call",412404391),(function (fn_sym){
return shadow.cljs.devtools.client.browser.devtools_msg(["call ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(fn_sym)].join(''));
})], 0)),(function (){
return shadow.cljs.devtools.client.browser.do_js_load(sources);
}),complete_fn,failure_fn);
});
/**
 * when (require '["some-str" :as x]) is done at the REPL we need to manually call the shadow.js.require for it
 * since the file only adds the shadow$provide. only need to do this for shadow-js.
 */
shadow.cljs.devtools.client.browser.do_js_requires = (function shadow$cljs$devtools$client$browser$do_js_requires(js_requires){
var seq__35854 = cljs.core.seq(js_requires);
var chunk__35855 = null;
var count__35856 = (0);
var i__35857 = (0);
while(true){
if((i__35857 < count__35856)){
var js_ns = chunk__35855.cljs$core$IIndexed$_nth$arity$2(null,i__35857);
var require_str_36280 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36280);


var G__36281 = seq__35854;
var G__36282 = chunk__35855;
var G__36283 = count__35856;
var G__36284 = (i__35857 + (1));
seq__35854 = G__36281;
chunk__35855 = G__36282;
count__35856 = G__36283;
i__35857 = G__36284;
continue;
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35854);
if(temp__5735__auto__){
var seq__35854__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35854__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35854__$1);
var G__36286 = cljs.core.chunk_rest(seq__35854__$1);
var G__36287 = c__4609__auto__;
var G__36288 = cljs.core.count(c__4609__auto__);
var G__36289 = (0);
seq__35854 = G__36286;
chunk__35855 = G__36287;
count__35856 = G__36288;
i__35857 = G__36289;
continue;
} else {
var js_ns = cljs.core.first(seq__35854__$1);
var require_str_36290 = ["var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns)," = shadow.js.require(\"",cljs.core.str.cljs$core$IFn$_invoke$arity$1(js_ns),"\");"].join('');
shadow.cljs.devtools.client.browser.script_eval(require_str_36290);


var G__36291 = cljs.core.next(seq__35854__$1);
var G__36292 = null;
var G__36293 = (0);
var G__36294 = (0);
seq__35854 = G__36291;
chunk__35855 = G__36292;
count__35856 = G__36293;
i__35857 = G__36294;
continue;
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.load_sources = (function shadow$cljs$devtools$client$browser$load_sources(sources,callback){
if(cljs.core.empty_QMARK_(sources)){
var G__35868 = cljs.core.PersistentVector.EMPTY;
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(G__35868) : callback.call(null,G__35868));
} else {
var G__35869 = shadow.cljs.devtools.client.env.files_url();
var G__35870 = (function (res){
var req = this;
var content = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(content) : callback.call(null,content));
});
var G__35871 = "POST";
var G__35872 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"client","client",-1323448117),new cljs.core.Keyword(null,"browser","browser",828191719),new cljs.core.Keyword(null,"sources","sources",-321166424),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582)),sources)], null)], 0));
var G__35873 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__35869,G__35870,G__35871,G__35872,G__35873);
}
});
shadow.cljs.devtools.client.browser.handle_build_complete = (function shadow$cljs$devtools$client$browser$handle_build_complete(p__35878){
var map__35879 = p__35878;
var map__35879__$1 = (((((!((map__35879 == null))))?(((((map__35879.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35879.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35879):map__35879);
var msg = map__35879__$1;
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35879__$1,new cljs.core.Keyword(null,"info","info",-317069002));
var reload_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35879__$1,new cljs.core.Keyword(null,"reload-info","reload-info",1648088086));
var map__35881 = info;
var map__35881__$1 = (((((!((map__35881 == null))))?(((((map__35881.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35881.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35881):map__35881);
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var compiled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35881__$1,new cljs.core.Keyword(null,"compiled","compiled",850043082));
var warnings = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$1((function (){var iter__4582__auto__ = (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35883(s__35884){
return (new cljs.core.LazySeq(null,(function (){
var s__35884__$1 = s__35884;
while(true){
var temp__5735__auto__ = cljs.core.seq(s__35884__$1);
if(temp__5735__auto__){
var xs__6292__auto__ = temp__5735__auto__;
var map__35890 = cljs.core.first(xs__6292__auto__);
var map__35890__$1 = (((((!((map__35890 == null))))?(((((map__35890.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35890.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35890):map__35890);
var src = map__35890__$1;
var resource_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35890__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
var warnings = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35890__$1,new cljs.core.Keyword(null,"warnings","warnings",-735437651));
if(cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))){
var iterys__4578__auto__ = ((function (s__35884__$1,map__35890,map__35890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35881,map__35881__$1,sources,compiled,map__35879,map__35879__$1,msg,info,reload_info){
return (function shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35883_$_iter__35885(s__35886){
return (new cljs.core.LazySeq(null,((function (s__35884__$1,map__35890,map__35890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35881,map__35881__$1,sources,compiled,map__35879,map__35879__$1,msg,info,reload_info){
return (function (){
var s__35886__$1 = s__35886;
while(true){
var temp__5735__auto____$1 = cljs.core.seq(s__35886__$1);
if(temp__5735__auto____$1){
var s__35886__$2 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__35886__$2)){
var c__4580__auto__ = cljs.core.chunk_first(s__35886__$2);
var size__4581__auto__ = cljs.core.count(c__4580__auto__);
var b__35888 = cljs.core.chunk_buffer(size__4581__auto__);
if((function (){var i__35887 = (0);
while(true){
if((i__35887 < size__4581__auto__)){
var warning = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__4580__auto__,i__35887);
cljs.core.chunk_append(b__35888,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name));

var G__36318 = (i__35887 + (1));
i__35887 = G__36318;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__35888),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35883_$_iter__35885(cljs.core.chunk_rest(s__35886__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__35888),null);
}
} else {
var warning = cljs.core.first(s__35886__$2);
return cljs.core.cons(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(warning,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100),resource_name),shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35883_$_iter__35885(cljs.core.rest(s__35886__$2)));
}
} else {
return null;
}
break;
}
});})(s__35884__$1,map__35890,map__35890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35881,map__35881__$1,sources,compiled,map__35879,map__35879__$1,msg,info,reload_info))
,null,null));
});})(s__35884__$1,map__35890,map__35890__$1,src,resource_name,warnings,xs__6292__auto__,temp__5735__auto__,map__35881,map__35881__$1,sources,compiled,map__35879,map__35879__$1,msg,info,reload_info))
;
var fs__4579__auto__ = cljs.core.seq(iterys__4578__auto__(warnings));
if(fs__4579__auto__){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fs__4579__auto__,shadow$cljs$devtools$client$browser$handle_build_complete_$_iter__35883(cljs.core.rest(s__35884__$1)));
} else {
var G__36330 = cljs.core.rest(s__35884__$1);
s__35884__$1 = G__36330;
continue;
}
} else {
var G__36333 = cljs.core.rest(s__35884__$1);
s__35884__$1 = G__36333;
continue;
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__4582__auto__(sources);
})()));
var seq__35894_36335 = cljs.core.seq(warnings);
var chunk__35895_36336 = null;
var count__35896_36337 = (0);
var i__35897_36338 = (0);
while(true){
if((i__35897_36338 < count__35896_36337)){
var map__35904_36341 = chunk__35895_36336.cljs$core$IIndexed$_nth$arity$2(null,i__35897_36338);
var map__35904_36342__$1 = (((((!((map__35904_36341 == null))))?(((((map__35904_36341.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35904_36341.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35904_36341):map__35904_36341);
var w_36343 = map__35904_36342__$1;
var msg_36344__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904_36342__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36345 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904_36342__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36346 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904_36342__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36347 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35904_36342__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36347)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36345),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36346),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36344__$1)].join(''));


var G__36357 = seq__35894_36335;
var G__36358 = chunk__35895_36336;
var G__36359 = count__35896_36337;
var G__36360 = (i__35897_36338 + (1));
seq__35894_36335 = G__36357;
chunk__35895_36336 = G__36358;
count__35896_36337 = G__36359;
i__35897_36338 = G__36360;
continue;
} else {
var temp__5735__auto___36365 = cljs.core.seq(seq__35894_36335);
if(temp__5735__auto___36365){
var seq__35894_36366__$1 = temp__5735__auto___36365;
if(cljs.core.chunked_seq_QMARK_(seq__35894_36366__$1)){
var c__4609__auto___36367 = cljs.core.chunk_first(seq__35894_36366__$1);
var G__36372 = cljs.core.chunk_rest(seq__35894_36366__$1);
var G__36373 = c__4609__auto___36367;
var G__36374 = cljs.core.count(c__4609__auto___36367);
var G__36375 = (0);
seq__35894_36335 = G__36372;
chunk__35895_36336 = G__36373;
count__35896_36337 = G__36374;
i__35897_36338 = G__36375;
continue;
} else {
var map__35908_36376 = cljs.core.first(seq__35894_36366__$1);
var map__35908_36377__$1 = (((((!((map__35908_36376 == null))))?(((((map__35908_36376.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35908_36376.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35908_36376):map__35908_36376);
var w_36378 = map__35908_36377__$1;
var msg_36379__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908_36377__$1,new cljs.core.Keyword(null,"msg","msg",-1386103444));
var line_36380 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908_36377__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column_36381 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908_36377__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var resource_name_36382 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35908_36377__$1,new cljs.core.Keyword(null,"resource-name","resource-name",2001617100));
console.warn(["BUILD-WARNING in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(resource_name_36382)," at [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line_36380),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column_36381),"]\n\t",cljs.core.str.cljs$core$IFn$_invoke$arity$1(msg_36379__$1)].join(''));


var G__36387 = cljs.core.next(seq__35894_36366__$1);
var G__36388 = null;
var G__36389 = (0);
var G__36390 = (0);
seq__35894_36335 = G__36387;
chunk__35895_36336 = G__36388;
count__35896_36337 = G__36389;
i__35897_36338 = G__36390;
continue;
}
} else {
}
}
break;
}

if((!(shadow.cljs.devtools.client.env.autoload))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(((cljs.core.empty_QMARK_(warnings)) || (shadow.cljs.devtools.client.env.ignore_warnings))){
var sources_to_get = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35920){
var map__35921 = p__35920;
var map__35921__$1 = (((((!((map__35921 == null))))?(((((map__35921.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35921.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35921):map__35921);
var src = map__35921__$1;
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var resource_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35921__$1,new cljs.core.Keyword(null,"resource-id","resource-id",-1308422582));
return ((cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"always-load","always-load",66405637).cljs$core$IFn$_invoke$arity$1(reload_info),ns)) || (cljs.core.not(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src))) || (((cljs.core.contains_QMARK_(compiled,resource_id)) && (cljs.core.not(new cljs.core.Keyword(null,"from-jar","from-jar",1050932827).cljs$core$IFn$_invoke$arity$1(src))))));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__35923){
var map__35924 = p__35923;
var map__35924__$1 = (((((!((map__35924 == null))))?(((((map__35924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35924.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35924):map__35924);
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35924__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"never-load","never-load",1300896819).cljs$core$IFn$_invoke$arity$1(reload_info),ns);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__35930){
var map__35931 = p__35930;
var map__35931__$1 = (((((!((map__35931 == null))))?(((((map__35931.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35931.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35931):map__35931);
var rc = map__35931__$1;
var module = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35931__$1,new cljs.core.Keyword(null,"module","module",1424618191));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",shadow.cljs.devtools.client.env.module_format)) || (shadow.cljs.devtools.client.env.module_is_active_QMARK_(module)));
}),sources))));
if(cljs.core.not(cljs.core.seq(sources_to_get))){
return shadow.cljs.devtools.client.hud.load_end_success();
} else {
if(cljs.core.seq(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(msg,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reload-info","reload-info",1648088086),new cljs.core.Keyword(null,"after-load","after-load",-1278503285)], null)))){
} else {
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("reloading code but no :after-load hooks are configured!",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["https://shadow-cljs.github.io/docs/UsersGuide.html#_lifecycle_hooks"], 0));
}

return shadow.cljs.devtools.client.browser.load_sources(sources_to_get,(function (p1__35876_SHARP_){
return shadow.cljs.devtools.client.browser.do_js_reload(msg,p1__35876_SHARP_,shadow.cljs.devtools.client.hud.load_end_success,shadow.cljs.devtools.client.hud.load_failure);
}));
}
} else {
return null;
}
}
});
shadow.cljs.devtools.client.browser.page_load_uri = (cljs.core.truth_(goog.global.document)?goog.Uri.parse(document.location.href):null);
shadow.cljs.devtools.client.browser.match_paths = (function shadow$cljs$devtools$client$browser$match_paths(old,new$){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("file",shadow.cljs.devtools.client.browser.page_load_uri.getScheme())){
var rel_new = cljs.core.subs.cljs$core$IFn$_invoke$arity$2(new$,(1));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(old,rel_new)) || (clojure.string.starts_with_QMARK_(old,[rel_new,"?"].join(''))))){
return rel_new;
} else {
return null;
}
} else {
var node_uri = goog.Uri.parse(old);
var node_uri_resolved = shadow.cljs.devtools.client.browser.page_load_uri.resolve(node_uri);
var node_abs = node_uri_resolved.getPath();
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.browser.page_load_uri.hasSameDomainAs(node_uri))) || (cljs.core.not(node_uri.hasDomain())))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node_abs,new$)){
return new$;
} else {
return false;
}
} else {
return false;
}
}
});
shadow.cljs.devtools.client.browser.handle_asset_watch = (function shadow$cljs$devtools$client$browser$handle_asset_watch(p__35957){
var map__35958 = p__35957;
var map__35958__$1 = (((((!((map__35958 == null))))?(((((map__35958.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35958.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__35958):map__35958);
var msg = map__35958__$1;
var updates = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__35958__$1,new cljs.core.Keyword(null,"updates","updates",2013983452));
var seq__35969 = cljs.core.seq(updates);
var chunk__35971 = null;
var count__35972 = (0);
var i__35973 = (0);
while(true){
if((i__35973 < count__35972)){
var path = chunk__35971.cljs$core$IIndexed$_nth$arity$2(null,i__35973);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36058_36424 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36061_36425 = null;
var count__36062_36426 = (0);
var i__36063_36427 = (0);
while(true){
if((i__36063_36427 < count__36062_36426)){
var node_36428 = chunk__36061_36425.cljs$core$IIndexed$_nth$arity$2(null,i__36063_36427);
var path_match_36429 = shadow.cljs.devtools.client.browser.match_paths(node_36428.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36429)){
var new_link_36430 = (function (){var G__36072 = node_36428.cloneNode(true);
G__36072.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36429),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36072;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36429], 0));

goog.dom.insertSiblingAfter(new_link_36430,node_36428);

goog.dom.removeNode(node_36428);


var G__36432 = seq__36058_36424;
var G__36433 = chunk__36061_36425;
var G__36434 = count__36062_36426;
var G__36435 = (i__36063_36427 + (1));
seq__36058_36424 = G__36432;
chunk__36061_36425 = G__36433;
count__36062_36426 = G__36434;
i__36063_36427 = G__36435;
continue;
} else {
var G__36436 = seq__36058_36424;
var G__36437 = chunk__36061_36425;
var G__36438 = count__36062_36426;
var G__36439 = (i__36063_36427 + (1));
seq__36058_36424 = G__36436;
chunk__36061_36425 = G__36437;
count__36062_36426 = G__36438;
i__36063_36427 = G__36439;
continue;
}
} else {
var temp__5735__auto___36440 = cljs.core.seq(seq__36058_36424);
if(temp__5735__auto___36440){
var seq__36058_36441__$1 = temp__5735__auto___36440;
if(cljs.core.chunked_seq_QMARK_(seq__36058_36441__$1)){
var c__4609__auto___36442 = cljs.core.chunk_first(seq__36058_36441__$1);
var G__36443 = cljs.core.chunk_rest(seq__36058_36441__$1);
var G__36444 = c__4609__auto___36442;
var G__36445 = cljs.core.count(c__4609__auto___36442);
var G__36446 = (0);
seq__36058_36424 = G__36443;
chunk__36061_36425 = G__36444;
count__36062_36426 = G__36445;
i__36063_36427 = G__36446;
continue;
} else {
var node_36447 = cljs.core.first(seq__36058_36441__$1);
var path_match_36448 = shadow.cljs.devtools.client.browser.match_paths(node_36447.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36448)){
var new_link_36449 = (function (){var G__36076 = node_36447.cloneNode(true);
G__36076.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36448),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36076;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36448], 0));

goog.dom.insertSiblingAfter(new_link_36449,node_36447);

goog.dom.removeNode(node_36447);


var G__36450 = cljs.core.next(seq__36058_36441__$1);
var G__36451 = null;
var G__36452 = (0);
var G__36453 = (0);
seq__36058_36424 = G__36450;
chunk__36061_36425 = G__36451;
count__36062_36426 = G__36452;
i__36063_36427 = G__36453;
continue;
} else {
var G__36454 = cljs.core.next(seq__36058_36441__$1);
var G__36455 = null;
var G__36456 = (0);
var G__36457 = (0);
seq__36058_36424 = G__36454;
chunk__36061_36425 = G__36455;
count__36062_36426 = G__36456;
i__36063_36427 = G__36457;
continue;
}
}
} else {
}
}
break;
}


var G__36458 = seq__35969;
var G__36459 = chunk__35971;
var G__36460 = count__35972;
var G__36461 = (i__35973 + (1));
seq__35969 = G__36458;
chunk__35971 = G__36459;
count__35972 = G__36460;
i__35973 = G__36461;
continue;
} else {
var G__36462 = seq__35969;
var G__36463 = chunk__35971;
var G__36464 = count__35972;
var G__36465 = (i__35973 + (1));
seq__35969 = G__36462;
chunk__35971 = G__36463;
count__35972 = G__36464;
i__35973 = G__36465;
continue;
}
} else {
var temp__5735__auto__ = cljs.core.seq(seq__35969);
if(temp__5735__auto__){
var seq__35969__$1 = temp__5735__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__35969__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__35969__$1);
var G__36468 = cljs.core.chunk_rest(seq__35969__$1);
var G__36469 = c__4609__auto__;
var G__36470 = cljs.core.count(c__4609__auto__);
var G__36471 = (0);
seq__35969 = G__36468;
chunk__35971 = G__36469;
count__35972 = G__36470;
i__35973 = G__36471;
continue;
} else {
var path = cljs.core.first(seq__35969__$1);
if(clojure.string.ends_with_QMARK_(path,"css")){
var seq__36084_36474 = cljs.core.seq(cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(document.querySelectorAll("link[rel=\"stylesheet\"]")));
var chunk__36087_36475 = null;
var count__36088_36476 = (0);
var i__36089_36477 = (0);
while(true){
if((i__36089_36477 < count__36088_36476)){
var node_36479 = chunk__36087_36475.cljs$core$IIndexed$_nth$arity$2(null,i__36089_36477);
var path_match_36480 = shadow.cljs.devtools.client.browser.match_paths(node_36479.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36480)){
var new_link_36481 = (function (){var G__36108 = node_36479.cloneNode(true);
G__36108.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36480),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36108;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36480], 0));

goog.dom.insertSiblingAfter(new_link_36481,node_36479);

goog.dom.removeNode(node_36479);


var G__36482 = seq__36084_36474;
var G__36483 = chunk__36087_36475;
var G__36484 = count__36088_36476;
var G__36485 = (i__36089_36477 + (1));
seq__36084_36474 = G__36482;
chunk__36087_36475 = G__36483;
count__36088_36476 = G__36484;
i__36089_36477 = G__36485;
continue;
} else {
var G__36487 = seq__36084_36474;
var G__36488 = chunk__36087_36475;
var G__36489 = count__36088_36476;
var G__36490 = (i__36089_36477 + (1));
seq__36084_36474 = G__36487;
chunk__36087_36475 = G__36488;
count__36088_36476 = G__36489;
i__36089_36477 = G__36490;
continue;
}
} else {
var temp__5735__auto___36491__$1 = cljs.core.seq(seq__36084_36474);
if(temp__5735__auto___36491__$1){
var seq__36084_36492__$1 = temp__5735__auto___36491__$1;
if(cljs.core.chunked_seq_QMARK_(seq__36084_36492__$1)){
var c__4609__auto___36493 = cljs.core.chunk_first(seq__36084_36492__$1);
var G__36494 = cljs.core.chunk_rest(seq__36084_36492__$1);
var G__36495 = c__4609__auto___36493;
var G__36496 = cljs.core.count(c__4609__auto___36493);
var G__36497 = (0);
seq__36084_36474 = G__36494;
chunk__36087_36475 = G__36495;
count__36088_36476 = G__36496;
i__36089_36477 = G__36497;
continue;
} else {
var node_36498 = cljs.core.first(seq__36084_36492__$1);
var path_match_36499 = shadow.cljs.devtools.client.browser.match_paths(node_36498.getAttribute("href"),path);
if(cljs.core.truth_(path_match_36499)){
var new_link_36502 = (function (){var G__36114 = node_36498.cloneNode(true);
G__36114.setAttribute("href",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(path_match_36499),"?r=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.rand.cljs$core$IFn$_invoke$arity$0())].join(''));

return G__36114;
})();
shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("load CSS",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([path_match_36499], 0));

goog.dom.insertSiblingAfter(new_link_36502,node_36498);

goog.dom.removeNode(node_36498);


var G__36509 = cljs.core.next(seq__36084_36492__$1);
var G__36510 = null;
var G__36511 = (0);
var G__36512 = (0);
seq__36084_36474 = G__36509;
chunk__36087_36475 = G__36510;
count__36088_36476 = G__36511;
i__36089_36477 = G__36512;
continue;
} else {
var G__36513 = cljs.core.next(seq__36084_36492__$1);
var G__36514 = null;
var G__36515 = (0);
var G__36516 = (0);
seq__36084_36474 = G__36513;
chunk__36087_36475 = G__36514;
count__36088_36476 = G__36515;
i__36089_36477 = G__36516;
continue;
}
}
} else {
}
}
break;
}


var G__36518 = cljs.core.next(seq__35969__$1);
var G__36519 = null;
var G__36520 = (0);
var G__36521 = (0);
seq__35969 = G__36518;
chunk__35971 = G__36519;
count__35972 = G__36520;
i__35973 = G__36521;
continue;
} else {
var G__36522 = cljs.core.next(seq__35969__$1);
var G__36523 = null;
var G__36524 = (0);
var G__36525 = (0);
seq__35969 = G__36522;
chunk__35971 = G__36523;
count__35972 = G__36524;
i__35973 = G__36525;
continue;
}
}
} else {
return null;
}
}
break;
}
});
shadow.cljs.devtools.client.browser.get_ua_product = (function shadow$cljs$devtools$client$browser$get_ua_product(){
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
});
shadow.cljs.devtools.client.browser.get_asset_root = (function shadow$cljs$devtools$client$browser$get_asset_root(){
var loc = (new goog.Uri(document.location.href));
var cbp = (new goog.Uri(CLOSURE_BASE_PATH));
var s = loc.resolve(cbp).toString();
return clojure.string.replace(s,/^file:\//,"file:///");
});
shadow.cljs.devtools.client.browser.repl_error = (function shadow$cljs$devtools$client$browser$repl_error(e){
console.error("repl/invoke error",e);

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shadow.cljs.devtools.client.env.repl_error(e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),shadow.cljs.devtools.client.browser.get_ua_product(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"asset-root","asset-root",1771735072),shadow.cljs.devtools.client.browser.get_asset_root()], 0));
});
shadow.cljs.devtools.client.browser.global_eval = (function shadow$cljs$devtools$client$browser$global_eval(js){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("undefined",typeof(module))){
return eval(js);
} else {
return (0,eval)(js);;
}
});
shadow.cljs.devtools.client.browser.repl_invoke = (function shadow$cljs$devtools$client$browser$repl_invoke(p__36129){
var map__36130 = p__36129;
var map__36130__$1 = (((((!((map__36130 == null))))?(((((map__36130.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36130.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36130):map__36130);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var js = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36130__$1,new cljs.core.Keyword(null,"js","js",1768080579));
var result = shadow.cljs.devtools.client.env.repl_call((function (){
return shadow.cljs.devtools.client.browser.global_eval(js);
}),shadow.cljs.devtools.client.browser.repl_error);
return shadow.cljs.devtools.client.browser.ws_msg(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"id","id",-1388402092),id));
});
shadow.cljs.devtools.client.browser.repl_require = (function shadow$cljs$devtools$client$browser$repl_require(p__36137,done){
var map__36138 = p__36137;
var map__36138__$1 = (((((!((map__36138 == null))))?(((((map__36138.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36138.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36138):map__36138);
var msg = map__36138__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var sources = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"sources","sources",-321166424));
var reload_namespaces = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"reload-namespaces","reload-namespaces",250210134));
var js_requires = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36138__$1,new cljs.core.Keyword(null,"js-requires","js-requires",-1311472051));
var sources_to_load = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p__36145){
var map__36146 = p__36145;
var map__36146__$1 = (((((!((map__36146 == null))))?(((((map__36146.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36146.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36146):map__36146);
var src = map__36146__$1;
var provides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36146__$1,new cljs.core.Keyword(null,"provides","provides",-1634397992));
var and__4174__auto__ = shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_(src);
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core.not(cljs.core.some(reload_namespaces,provides));
} else {
return and__4174__auto__;
}
}),sources));
return shadow.cljs.devtools.client.browser.load_sources(sources_to_load,(function (sources__$1){
try{shadow.cljs.devtools.client.browser.do_js_load(sources__$1);

if(cljs.core.seq(js_requires)){
shadow.cljs.devtools.client.browser.do_js_requires(js_requires);
} else {
}

return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-complete","repl/require-complete",-2140254719),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));
}catch (e36155){var e = e36155;
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","require-error","repl/require-error",1689310021),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"error","error",-978969032),e.message], null));
}finally {(done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}}));
});
shadow.cljs.devtools.client.browser.repl_init = (function shadow$cljs$devtools$client$browser$repl_init(p__36158,done){
var map__36160 = p__36158;
var map__36160__$1 = (((((!((map__36160 == null))))?(((((map__36160.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36160.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36160):map__36160);
var repl_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"repl-state","repl-state",-1733780387));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36160__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return shadow.cljs.devtools.client.browser.load_sources(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(shadow.cljs.devtools.client.browser.src_is_loaded_QMARK_,new cljs.core.Keyword(null,"repl-sources","repl-sources",723867535).cljs$core$IFn$_invoke$arity$1(repl_state))),(function (sources){
shadow.cljs.devtools.client.browser.do_js_load(sources);

shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","init-complete","repl/init-complete",-162252879),new cljs.core.Keyword(null,"id","id",-1388402092),id], null));

shadow.cljs.devtools.client.browser.devtools_msg("REPL session start successful");

return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}));
});
shadow.cljs.devtools.client.browser.repl_set_ns = (function shadow$cljs$devtools$client$browser$repl_set_ns(p__36170){
var map__36171 = p__36170;
var map__36171__$1 = (((((!((map__36171 == null))))?(((((map__36171.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36171.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36171):map__36171);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ns = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36171__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
return shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","set-ns-complete","repl/set-ns-complete",680944662),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ns","ns",441598760),ns], null));
});
shadow.cljs.devtools.client.browser.close_reason_ref = cljs.core.volatile_BANG_(null);
shadow.cljs.devtools.client.browser.stale_client_detected = cljs.core.volatile_BANG_(false);
shadow.cljs.devtools.client.browser.handle_message = (function shadow$cljs$devtools$client$browser$handle_message(p__36181,done){
var map__36183 = p__36181;
var map__36183__$1 = (((((!((map__36183 == null))))?(((((map__36183.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__36183.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__36183):map__36183);
var msg = map__36183__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__36183__$1,new cljs.core.Keyword(null,"type","type",1174270348));
shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

var G__36187_36530 = type;
var G__36187_36531__$1 = (((G__36187_36530 instanceof cljs.core.Keyword))?G__36187_36530.fqn:null);
switch (G__36187_36531__$1) {
case "asset-watch":
shadow.cljs.devtools.client.browser.handle_asset_watch(msg);

break;
case "repl/invoke":
shadow.cljs.devtools.client.browser.repl_invoke(msg);

break;
case "repl/require":
shadow.cljs.devtools.client.browser.repl_require(msg,done);

break;
case "repl/set-ns":
shadow.cljs.devtools.client.browser.repl_set_ns(msg);

break;
case "repl/init":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/session-start":
shadow.cljs.devtools.client.browser.repl_init(msg,done);

break;
case "repl/ping":
shadow.cljs.devtools.client.browser.ws_msg(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("repl","pong","repl/pong",-166610159),new cljs.core.Keyword(null,"time-server","time-server",786726561),new cljs.core.Keyword(null,"time-server","time-server",786726561).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"time-runtime","time-runtime",-40294923),Date.now()], null));

break;
case "build-complete":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

shadow.cljs.devtools.client.browser.handle_build_complete(msg);

break;
case "build-failure":
shadow.cljs.devtools.client.hud.load_end();

shadow.cljs.devtools.client.hud.hud_error(msg);

break;
case "build-init":
shadow.cljs.devtools.client.hud.hud_warnings(msg);

break;
case "build-start":
shadow.cljs.devtools.client.hud.hud_hide();

shadow.cljs.devtools.client.hud.load_start();

break;
case "pong":

break;
case "client/stale":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,"Stale Client! You are not using the latest compilation output!");

break;
case "client/no-worker":
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.stale_client_detected,true);

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,["watch for build \"",shadow.cljs.devtools.client.env.build_id,"\" not running"].join(''));

break;
case "custom-msg":
shadow.cljs.devtools.client.env.publish_BANG_(new cljs.core.Keyword(null,"payload","payload",-383036092).cljs$core$IFn$_invoke$arity$1(msg));

break;
default:

}

if(cljs.core.contains_QMARK_(shadow.cljs.devtools.client.env.async_ops,type)){
return null;
} else {
return (done.cljs$core$IFn$_invoke$arity$0 ? done.cljs$core$IFn$_invoke$arity$0() : done.call(null));
}
});
shadow.cljs.devtools.client.browser.compile = (function shadow$cljs$devtools$client$browser$compile(text,callback){
var G__36193 = ["http",((shadow.cljs.devtools.client.env.ssl)?"s":null),"://",shadow.cljs.devtools.client.env.server_host,":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shadow.cljs.devtools.client.env.server_port),"/worker/compile/",shadow.cljs.devtools.client.env.build_id,"/",shadow.cljs.devtools.client.env.proc_id,"/browser"].join('');
var G__36194 = (function (res){
var req = this;
var actions = cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(req.getResponseText());
if(cljs.core.truth_(callback)){
return (callback.cljs$core$IFn$_invoke$arity$1 ? callback.cljs$core$IFn$_invoke$arity$1(actions) : callback.call(null,actions));
} else {
return null;
}
});
var G__36195 = "POST";
var G__36196 = cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"input","input",556931961),text], null)], 0));
var G__36197 = ({"content-type": "application/edn; charset=utf-8"});
return goog.net.XhrIo.send(G__36193,G__36194,G__36195,G__36196,G__36197);
});
if((typeof shadow !== 'undefined') && (typeof shadow.cljs !== 'undefined') && (typeof shadow.cljs.devtools !== 'undefined') && (typeof shadow.cljs.devtools.client !== 'undefined') && (typeof shadow.cljs.devtools.client.browser !== 'undefined') && (typeof shadow.cljs.devtools.client.browser.ws_status !== 'undefined')){
} else {
shadow.cljs.devtools.client.browser.ws_status = cljs.core.volatile_BANG_(new cljs.core.Keyword(null,"init","init",-1875481434));
}
shadow.cljs.devtools.client.browser.ws_connect = (function shadow$cljs$devtools$client$browser$ws_connect(){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((function (){var G__36211 = new cljs.core.Keyword(null,"init","init",-1875481434);
var fexpr__36210 = cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status);
return (fexpr__36210.cljs$core$IFn$_invoke$arity$1 ? fexpr__36210.cljs$core$IFn$_invoke$arity$1(G__36211) : fexpr__36210.call(null,G__36211));
})())){
return (shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0 ? shadow.cljs.devtools.client.browser.ws_connect_impl.cljs$core$IFn$_invoke$arity$0() : shadow.cljs.devtools.client.browser.ws_connect_impl.call(null));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.maybe_reconnect = (function shadow$cljs$devtools$client$browser$maybe_reconnect(){
if(((cljs.core.not(cljs.core.deref(shadow.cljs.devtools.client.browser.stale_client_detected))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(shadow.cljs.devtools.client.browser.ws_status),new cljs.core.Keyword(null,"init","init",-1875481434))))){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"init","init",-1875481434));

return setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(3000));
} else {
return null;
}
});
shadow.cljs.devtools.client.browser.ws_connect_impl = (function shadow$cljs$devtools$client$browser$ws_connect_impl(){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connecting","connecting",-1347943866));

try{var print_fn = cljs.core._STAR_print_fn_STAR_;
var ws_url = shadow.cljs.devtools.client.env.ws_url(new cljs.core.Keyword(null,"browser","browser",828191719));
var socket = (new WebSocket(ws_url));
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,socket);

(socket.onmessage = (function (e){
return shadow.cljs.devtools.client.env.process_ws_msg(e.data,shadow.cljs.devtools.client.browser.handle_message);
}));

(socket.onopen = (function (e){
cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.ws_status,new cljs.core.Keyword(null,"connected","connected",-169833045));

shadow.cljs.devtools.client.hud.connection_error_clear_BANG_();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.close_reason_ref,null);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("goog",shadow.cljs.devtools.client.env.module_format)){
(goog.provide = goog.constructNamespace_);
} else {
}

shadow.cljs.devtools.client.env.set_print_fns_BANG_(shadow.cljs.devtools.client.browser.ws_msg);

return shadow.cljs.devtools.client.browser.devtools_msg("WebSocket connected!");
}));

(socket.onclose = (function (e){
shadow.cljs.devtools.client.browser.devtools_msg("WebSocket disconnected!");

shadow.cljs.devtools.client.hud.connection_error((function (){var or__4185__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.close_reason_ref);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "Connection closed!";
}
})());

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);

shadow.cljs.devtools.client.env.reset_print_fns_BANG_();

return shadow.cljs.devtools.client.browser.maybe_reconnect();
}));

return (socket.onerror = (function (e){
shadow.cljs.devtools.client.hud.connection_error("Connection failed!");

shadow.cljs.devtools.client.browser.maybe_reconnect();

return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("websocket error",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}));
}catch (e36212){var e = e36212;
return shadow.cljs.devtools.client.browser.devtools_msg.cljs$core$IFn$_invoke$arity$variadic("WebSocket setup failed",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([e], 0));
}});
if(shadow.cljs.devtools.client.env.enabled){
var temp__5735__auto___36550 = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto___36550)){
var s_36552 = temp__5735__auto___36550;
shadow.cljs.devtools.client.browser.devtools_msg("connection reset!");

(s_36552.onclose = (function (e){
return null;
}));

s_36552.close();

cljs.core.vreset_BANG_(shadow.cljs.devtools.client.browser.socket_ref,null);
} else {
}

window.addEventListener("beforeunload",(function (){
var temp__5735__auto__ = cljs.core.deref(shadow.cljs.devtools.client.browser.socket_ref);
if(cljs.core.truth_(temp__5735__auto__)){
var s = temp__5735__auto__;
return s.close();
} else {
return null;
}
}));

if(cljs.core.truth_((function (){var and__4174__auto__ = document;
if(cljs.core.truth_(and__4174__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("loading",document.readyState);
} else {
return and__4174__auto__;
}
})())){
window.addEventListener("DOMContentLoaded",shadow.cljs.devtools.client.browser.ws_connect);
} else {
setTimeout(shadow.cljs.devtools.client.browser.ws_connect,(10));
}
} else {
}

//# sourceMappingURL=shadow.cljs.devtools.client.browser.js.map
