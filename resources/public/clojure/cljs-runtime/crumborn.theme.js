goog.provide('crumborn.theme');
goog.require('cljs.core');
goog.require('crumborn.theme.light');
goog.require('crumborn.interop');
if((typeof crumborn !== 'undefined') && (typeof crumborn.theme !== 'undefined') && (typeof crumborn.theme.theme_atom !== 'undefined')){
} else {
crumborn.theme.theme_atom = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
crumborn.theme.get_style = (function crumborn$theme$get_style(var_args){
var args__4795__auto__ = [];
var len__4789__auto___38724 = arguments.length;
var i__4790__auto___38725 = (0);
while(true){
if((i__4790__auto___38725 < len__4789__auto___38724)){
args__4795__auto__.push((arguments[i__4790__auto___38725]));

var G__38726 = (i__4790__auto___38725 + (1));
i__4790__auto___38725 = G__38726;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return crumborn.theme.get_style.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(crumborn.theme.get_style.cljs$core$IFn$_invoke$arity$variadic = (function (path,extra_styles){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.merge,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.theme.theme_atom),path),extra_styles);
}));

(crumborn.theme.get_style.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(crumborn.theme.get_style.cljs$lang$applyTo = (function (seq38708){
var G__38710 = cljs.core.first(seq38708);
var seq38708__$1 = cljs.core.next(seq38708);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__38710,seq38708__$1);
}));

crumborn.theme.is_dark_theme_QMARK_ = (function crumborn$theme$is_dark_theme_QMARK_(){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.theme.theme_atom),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"dark","dark",1818973999));
});

//# sourceMappingURL=crumborn.theme.js.map
