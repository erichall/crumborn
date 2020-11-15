goog.provide('crumborn.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('cljs.test');
goog.require('crumborn.interop');
goog.require('goog.async.Debouncer');
/**
 * @define {string}
 */
crumborn.core.env = goog.define("crumborn.core.env","none");
/**
 * @define {string}
 */
crumborn.core.ws_url = goog.define("crumborn.core.ws_url","none");
crumborn.core.get_ws_url = (function crumborn$core$get_ws_url(){
return crumborn.core.ws_url;
});
crumborn.core.get_env = (function crumborn$core$get_env(){
return crumborn.core.env;
});
crumborn.core.is_release_QMARK_ = (function crumborn$core$is_release_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(crumborn.core.get_env(),"release");
});
crumborn.core.is_dev_QMARK_ = (function crumborn$core$is_dev_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(crumborn.core.get_env(),"dev");
});
crumborn.core.debounce = (function crumborn$core$debounce(f,interval){
var dbnc = (new goog.async.Debouncer(f,interval));
return (function() { 
var G__31767__delegate = function (args){
return dbnc.fire.apply(dbnc,cljs.core.to_array(args));
};
var G__31767 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__31768__i = 0, G__31768__a = new Array(arguments.length -  0);
while (G__31768__i < G__31768__a.length) {G__31768__a[G__31768__i] = arguments[G__31768__i + 0]; ++G__31768__i;}
  args = new cljs.core.IndexedSeq(G__31768__a,0,null);
} 
return G__31767__delegate.call(this,args);};
G__31767.cljs$lang$maxFixedArity = 0;
G__31767.cljs$lang$applyTo = (function (arglist__31769){
var args = cljs.core.seq(arglist__31769);
return G__31767__delegate(args);
});
G__31767.cljs$core$IFn$_invoke$arity$variadic = G__31767__delegate;
return G__31767;
})()
;
});
crumborn.core.get_page_and_slug = (function crumborn$core$get_page_and_slug(var_args){
var G__31747 = arguments.length;
switch (G__31747) {
case 1:
return crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$1 = (function (event){
var vec__31748 = clojure.string.split.cljs$core$IFn$_invoke$arity$2(clojure.string.replace(crumborn.interop.get_hash.cljs$core$IFn$_invoke$arity$1(event),/#/,""),/\//);
var page = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31748,(0),null);
var slug = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31748,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),((cljs.core.empty_QMARK_(page))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(page)),new cljs.core.Keyword(null,"slug","slug",2029314850),((cljs.core.empty_QMARK_(slug))?null:slug)], null);
}));

(crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0 = (function (){
return crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$1(cljs.core.clj__GT_js(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"target","target",253001721),crumborn.interop.get_window()], null)));
}));

(crumborn.core.get_page_and_slug.cljs$lang$maxFixedArity = 1);

crumborn.core.get_identitiy = (function crumborn$core$get_identitiy(state){
return new cljs.core.Keyword(null,"identity","identity",1647396035).cljs$core$IFn$_invoke$arity$1(state);
});
crumborn.core.authenticated_QMARK_ = (function crumborn$core$authenticated_QMARK_(state){
return (!((crumborn.core.get_identitiy(state) == null)));
});
crumborn.core.loading_QMARK_ = (function crumborn$core$loading_QMARK_(state){
return new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(state);
});
crumborn.core.page_is_create_post_QMARK_ = (function crumborn$core$page_is_create_post_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-post","create-post",887715866),new cljs.core.Keyword(null,"page","page",849072397).cljs$core$IFn$_invoke$arity$1(crumborn.core.get_page_and_slug.cljs$core$IFn$_invoke$arity$0()));
});
crumborn.core.active_page_is_QMARK_ = (function crumborn$core$active_page_is_QMARK_(state,page){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(state),page);
});
crumborn.core.get_uuid = (function crumborn$core$get_uuid(){
return btoa(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.random_uuid()));
});
crumborn.core.set_loading = (function crumborn$core$set_loading(state,value){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"loading","loading",-737050189),value);
});
crumborn.core.new_page_QMARK_ = (function crumborn$core$new_page_QMARK_(state,page){
return (((!((page == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-page","active-page",370357330).cljs$core$IFn$_invoke$arity$1(state),page)));
});
crumborn.core.new_slug_QMARK_ = (function crumborn$core$new_slug_QMARK_(state,slug){
return (((!((slug == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"active-slug","active-slug",-1213605190).cljs$core$IFn$_invoke$arity$1(state),slug)));
});
/**
 * Get a page, if it not defined in pages, default to front-page
 */
crumborn.core.get_page = (function crumborn$core$get_page(pages,page_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$1((page_id instanceof cljs.core.Keyword))){
} else {
throw (new Error("Assert failed: (= (keyword? page-id))"));
}

var _PERCENT_ = ((cljs.core.contains_QMARK_(pages,page_id))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,page_id):cljs.core.get.cljs$core$IFn$_invoke$arity$2(pages,new cljs.core.Keyword(null,"front-page","front-page",-663760939)));
if(cljs.core.map_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (map? %)"));
}

return _PERCENT_;
});
crumborn.core.valid_edn_QMARK_ = (function crumborn$core$valid_edn_QMARK_(maybe_edn){
try{return cljs.reader.read_string.cljs$core$IFn$_invoke$arity$1(maybe_edn);
}catch (e31751){if((e31751 instanceof Error)){
var _ = e31751;
return null;
} else {
throw e31751;

}
}});
crumborn.core.map__GT_pretty_string = (function crumborn$core$map__GT_pretty_string(m){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc_str,p__31756){
var vec__31757 = p__31756;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31757,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__31757,(1),null);
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(acc_str),cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,""))?"\"\"":((typeof v === 'string')?["\"",v,"\""].join(''):v
))),"\n "].join('');
}),"{\n ",m)),"}"].join('');
});
crumborn.core.has_fact_QMARK_ = (function crumborn$core$has_fact_QMARK_(state,path){
return cljs.core.boolean$(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,path));
});
crumborn.core.space__GT_space = (function crumborn$core$space__GT_space(s){
return clojure.string.replace(s,/%20/," ");
});
crumborn.core.space__GT_dash = (function crumborn$core$space__GT_dash(s){
return clojure.string.replace(clojure.string.replace(s,/%20/,"-"),/ /,"-");
});
crumborn.core.dash__GT_space = (function crumborn$core$dash__GT_space(s){
return clojure.string.replace(s,/-/," ");
});
/**
 * Get a post by name from the state
 */
crumborn.core.get_post = (function crumborn$core$get_post(app_state,slug){
var posts = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(app_state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"posts","posts",760043164),new cljs.core.Keyword(null,"posts","posts",760043164)], null)));
if((!((posts == null)))){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__31760){
var map__31761 = p__31760;
var map__31761__$1 = (((((!((map__31761 == null))))?(((((map__31761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31761):map__31761);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31761__$1,new cljs.core.Keyword(null,"title","title",636505583));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(title,crumborn.core.dash__GT_space(slug));
}),posts));
} else {
return null;
}
});
crumborn.core.assocs_in = (function crumborn$core$assocs_in(m,paths,data){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m__$1,path){
return cljs.core.assoc_in(m__$1,path,data);
}),m,paths);
});
crumborn.core.assocs_in.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.core.assocs_in(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null),"data"),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),"data"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"data"], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assocs-in","assocs-in",-1111832819,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null),"data"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),"data"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"data"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assocs-in","assocs-in",-1111832819,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null),"data"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),"data"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"data"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e31763){var t__8952__auto__ = e31763;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"assocs-in","assocs-in",-1111832819,null),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.Keyword(null,"b","b",1482224470)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.Keyword(null,"d","d",1972142424)], null)], null),"data"),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"b","b",1482224470),"data"], null),new cljs.core.Keyword(null,"c","c",-1763192079),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"d","d",1972142424),"data"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.core.change_fact = (function crumborn$core$change_fact(state,p__31764){
var map__31765 = p__31764;
var map__31765__$1 = (((((!((map__31765 == null))))?(((((map__31765.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__31765.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__31765):map__31765);
var paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31765__$1,new cljs.core.Keyword(null,"paths","paths",-1807389588));
var fact = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__31765__$1,new cljs.core.Keyword(null,"fact","fact",-799816531));
return crumborn.core.assocs_in(state,paths,fact);
});

//# sourceMappingURL=crumborn.core.js.map
