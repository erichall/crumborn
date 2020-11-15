goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
goog.require('goog.string');
goog.require('goog.string.format');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__34024){
var map__34025 = p__34024;
var map__34025__$1 = (((((!((map__34025 == null))))?(((((map__34025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34025):map__34025);
var m = map__34025__$1;
var n = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34025__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["-------------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__4185__auto__ = new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return [(function (){var temp__5735__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5735__auto__)){
var ns = temp__5735__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})(),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('');
}
})()], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Protocol"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34035_34558 = cljs.core.seq(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34036_34559 = null;
var count__34037_34560 = (0);
var i__34038_34561 = (0);
while(true){
if((i__34038_34561 < count__34037_34560)){
var f_34562 = chunk__34036_34559.cljs$core$IIndexed$_nth$arity$2(null,i__34038_34561);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34562], 0));


var G__34567 = seq__34035_34558;
var G__34568 = chunk__34036_34559;
var G__34569 = count__34037_34560;
var G__34570 = (i__34038_34561 + (1));
seq__34035_34558 = G__34567;
chunk__34036_34559 = G__34568;
count__34037_34560 = G__34569;
i__34038_34561 = G__34570;
continue;
} else {
var temp__5735__auto___34571 = cljs.core.seq(seq__34035_34558);
if(temp__5735__auto___34571){
var seq__34035_34572__$1 = temp__5735__auto___34571;
if(cljs.core.chunked_seq_QMARK_(seq__34035_34572__$1)){
var c__4609__auto___34574 = cljs.core.chunk_first(seq__34035_34572__$1);
var G__34575 = cljs.core.chunk_rest(seq__34035_34572__$1);
var G__34576 = c__4609__auto___34574;
var G__34577 = cljs.core.count(c__4609__auto___34574);
var G__34578 = (0);
seq__34035_34558 = G__34575;
chunk__34036_34559 = G__34576;
count__34037_34560 = G__34577;
i__34038_34561 = G__34578;
continue;
} else {
var f_34583 = cljs.core.first(seq__34035_34572__$1);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["  ",f_34583], 0));


var G__34585 = cljs.core.next(seq__34035_34572__$1);
var G__34586 = null;
var G__34587 = (0);
var G__34588 = (0);
seq__34035_34558 = G__34585;
chunk__34036_34559 = G__34586;
count__34037_34560 = G__34587;
i__34038_34561 = G__34588;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_34593 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__4185__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([arglists_34593], 0));
} else {
cljs.core.prn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first(arglists_34593)))?cljs.core.second(arglists_34593):arglists_34593)], 0));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Special Form"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.contains_QMARK_(m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
} else {
return null;
}
} else {
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join('')], 0));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Macro"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"spec","spec",347520401).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["REPL Special Function"], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m)], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__34057_34601 = cljs.core.seq(new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__34058_34602 = null;
var count__34059_34603 = (0);
var i__34060_34604 = (0);
while(true){
if((i__34060_34604 < count__34059_34603)){
var vec__34106_34607 = chunk__34058_34602.cljs$core$IIndexed$_nth$arity$2(null,i__34060_34604);
var name_34608 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106_34607,(0),null);
var map__34109_34610 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34106_34607,(1),null);
var map__34109_34611__$1 = (((((!((map__34109_34610 == null))))?(((((map__34109_34610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34109_34610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34109_34610):map__34109_34610);
var doc_34612 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34109_34611__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34613 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34109_34611__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34608], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34613], 0));

if(cljs.core.truth_(doc_34612)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34612], 0));
} else {
}


var G__34617 = seq__34057_34601;
var G__34618 = chunk__34058_34602;
var G__34619 = count__34059_34603;
var G__34620 = (i__34060_34604 + (1));
seq__34057_34601 = G__34617;
chunk__34058_34602 = G__34618;
count__34059_34603 = G__34619;
i__34060_34604 = G__34620;
continue;
} else {
var temp__5735__auto___34622 = cljs.core.seq(seq__34057_34601);
if(temp__5735__auto___34622){
var seq__34057_34626__$1 = temp__5735__auto___34622;
if(cljs.core.chunked_seq_QMARK_(seq__34057_34626__$1)){
var c__4609__auto___34627 = cljs.core.chunk_first(seq__34057_34626__$1);
var G__34630 = cljs.core.chunk_rest(seq__34057_34626__$1);
var G__34631 = c__4609__auto___34627;
var G__34632 = cljs.core.count(c__4609__auto___34627);
var G__34633 = (0);
seq__34057_34601 = G__34630;
chunk__34058_34602 = G__34631;
count__34059_34603 = G__34632;
i__34060_34604 = G__34633;
continue;
} else {
var vec__34136_34634 = cljs.core.first(seq__34057_34626__$1);
var name_34635 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34634,(0),null);
var map__34139_34636 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34136_34634,(1),null);
var map__34139_34637__$1 = (((((!((map__34139_34636 == null))))?(((((map__34139_34636.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34139_34636.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34139_34636):map__34139_34636);
var doc_34638 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34139_34637__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_34639 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34139_34637__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",name_34635], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",arglists_34639], 0));

if(cljs.core.truth_(doc_34638)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" ",doc_34638], 0));
} else {
}


var G__34649 = cljs.core.next(seq__34057_34626__$1);
var G__34650 = null;
var G__34651 = (0);
var G__34652 = (0);
seq__34057_34601 = G__34649;
chunk__34058_34602 = G__34650;
count__34059_34603 = G__34651;
i__34060_34604 = G__34652;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5735__auto__ = cljs.spec.alpha.get_spec(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name(n)),cljs.core.name(nm)));
if(cljs.core.truth_(temp__5735__auto__)){
var fnspec = temp__5735__auto__;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Spec"], 0));

var seq__34157 = cljs.core.seq(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__34158 = null;
var count__34159 = (0);
var i__34160 = (0);
while(true){
if((i__34160 < count__34159)){
var role = chunk__34158.cljs$core$IIndexed$_nth$arity$2(null,i__34160);
var temp__5735__auto___34665__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34665__$1)){
var spec_34666 = temp__5735__auto___34665__$1;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34666)], 0));
} else {
}


var G__34668 = seq__34157;
var G__34669 = chunk__34158;
var G__34670 = count__34159;
var G__34671 = (i__34160 + (1));
seq__34157 = G__34668;
chunk__34158 = G__34669;
count__34159 = G__34670;
i__34160 = G__34671;
continue;
} else {
var temp__5735__auto____$1 = cljs.core.seq(seq__34157);
if(temp__5735__auto____$1){
var seq__34157__$1 = temp__5735__auto____$1;
if(cljs.core.chunked_seq_QMARK_(seq__34157__$1)){
var c__4609__auto__ = cljs.core.chunk_first(seq__34157__$1);
var G__34679 = cljs.core.chunk_rest(seq__34157__$1);
var G__34680 = c__4609__auto__;
var G__34681 = cljs.core.count(c__4609__auto__);
var G__34682 = (0);
seq__34157 = G__34679;
chunk__34158 = G__34680;
count__34159 = G__34681;
i__34160 = G__34682;
continue;
} else {
var role = cljs.core.first(seq__34157__$1);
var temp__5735__auto___34687__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fnspec,role);
if(cljs.core.truth_(temp__5735__auto___34687__$2)){
var spec_34689 = temp__5735__auto___34687__$2;
cljs.core.print.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["\n ",cljs.core.name(role),":"].join(''),cljs.spec.alpha.describe(spec_34689)], 0));
} else {
}


var G__34691 = cljs.core.next(seq__34157__$1);
var G__34692 = null;
var G__34693 = (0);
var G__34694 = (0);
seq__34157 = G__34691;
chunk__34158 = G__34692;
count__34159 = G__34693;
i__34160 = G__34694;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Constructs a data representation for a Error with keys:
 *  :cause - root cause message
 *  :phase - error phase
 *  :via - cause chain, with cause keys:
 *           :type - exception class symbol
 *           :message - exception message
 *           :data - ex-data
 *           :at - top stack element
 *  :trace - root cause stack elements
 */
cljs.repl.Error__GT_map = (function cljs$repl$Error__GT_map(o){
var base = (function (t){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),(((t instanceof cljs.core.ExceptionInfo))?new cljs.core.Symbol(null,"ExceptionInfo","ExceptionInfo",294935087,null):(((t instanceof Error))?cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("js",t.name):null
))], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(t);
if(cljs.core.truth_(temp__5735__auto__)){
var msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(t);
if(cljs.core.truth_(temp__5735__auto__)){
var ed = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),ed], null);
} else {
return null;
}
})()], 0));
});
var via = (function (){var via = cljs.core.PersistentVector.EMPTY;
var t = o;
while(true){
if(cljs.core.truth_(t)){
var G__34710 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(via,t);
var G__34711 = cljs.core.ex_cause(t);
via = G__34710;
t = G__34711;
continue;
} else {
return via;
}
break;
}
})();
var root = cljs.core.peek(via);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"via","via",-1904457336),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(base,via)),new cljs.core.Keyword(null,"trace","trace",-1082747415),null], null),(function (){var temp__5735__auto__ = cljs.core.ex_message(root);
if(cljs.core.truth_(temp__5735__auto__)){
var root_msg = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cause","cause",231901252),root_msg], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = cljs.core.ex_data(root);
if(cljs.core.truth_(temp__5735__auto__)){
var data = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),data], null);
} else {
return null;
}
})(),(function (){var temp__5735__auto__ = new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358).cljs$core$IFn$_invoke$arity$1(cljs.core.ex_data(o));
if(cljs.core.truth_(temp__5735__auto__)){
var phase = temp__5735__auto__;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"phase","phase",575722892),phase], null);
} else {
return null;
}
})()], 0));
});
/**
 * Returns an analysis of the phase, error, cause, and location of an error that occurred
 *   based on Throwable data, as returned by Throwable->map. All attributes other than phase
 *   are optional:
 *  :clojure.error/phase - keyword phase indicator, one of:
 *    :read-source :compile-syntax-check :compilation :macro-syntax-check :macroexpansion
 *    :execution :read-eval-result :print-eval-result
 *  :clojure.error/source - file name (no path)
 *  :clojure.error/line - integer line number
 *  :clojure.error/column - integer column number
 *  :clojure.error/symbol - symbol being expanded/compiled/invoked
 *  :clojure.error/class - cause exception class symbol
 *  :clojure.error/cause - cause exception message
 *  :clojure.error/spec - explain-data for spec error
 */
cljs.repl.ex_triage = (function cljs$repl$ex_triage(datafied_throwable){
var map__34321 = datafied_throwable;
var map__34321__$1 = (((((!((map__34321 == null))))?(((((map__34321.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34321.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34321):map__34321);
var via = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34321__$1,new cljs.core.Keyword(null,"via","via",-1904457336));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34321__$1,new cljs.core.Keyword(null,"trace","trace",-1082747415));
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__34321__$1,new cljs.core.Keyword(null,"phase","phase",575722892),new cljs.core.Keyword(null,"execution","execution",253283524));
var map__34322 = cljs.core.last(via);
var map__34322__$1 = (((((!((map__34322 == null))))?(((((map__34322.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34322.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34322):map__34322);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34322__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34322__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34322__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var map__34327 = data;
var map__34327__$1 = (((((!((map__34327 == null))))?(((((map__34327.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34327.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34327):map__34327);
var problems = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327__$1,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814));
var fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327__$1,new cljs.core.Keyword("cljs.spec.alpha","fn","cljs.spec.alpha/fn",408600443));
var caller = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34327__$1,new cljs.core.Keyword("cljs.spec.test.alpha","caller","cljs.spec.test.alpha/caller",-398302390));
var map__34329 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.first(via));
var map__34329__$1 = (((((!((map__34329 == null))))?(((((map__34329.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34329.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34329):map__34329);
var top_data = map__34329__$1;
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34329__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__34369 = phase;
var G__34369__$1 = (((G__34369 instanceof cljs.core.Keyword))?G__34369.fqn:null);
switch (G__34369__$1) {
case "read-source":
var map__34380 = data;
var map__34380__$1 = (((((!((map__34380 == null))))?(((((map__34380.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34380.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34380):map__34380);
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34380__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var G__34384 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.second(via)),top_data], 0));
var G__34384__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34384,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34384);
var G__34384__$2 = (cljs.core.truth_((function (){var fexpr__34390 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34390.cljs$core$IFn$_invoke$arity$1 ? fexpr__34390.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34390.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34384__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34384__$1);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34384__$2,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34384__$2;
}

break;
case "compile-syntax-check":
case "compilation":
case "macro-syntax-check":
case "macroexpansion":
var G__34400 = top_data;
var G__34400__$1 = (cljs.core.truth_(source)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34400,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),source):G__34400);
var G__34400__$2 = (cljs.core.truth_((function (){var fexpr__34410 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34410.cljs$core$IFn$_invoke$arity$1 ? fexpr__34410.cljs$core$IFn$_invoke$arity$1(source) : fexpr__34410.call(null,source));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__34400__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397)):G__34400__$1);
var G__34400__$3 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34400__$2,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34400__$2);
var G__34400__$4 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34400__$3,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34400__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34400__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34400__$4;
}

break;
case "read-eval-result":
case "print-eval-result":
var vec__34421 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34421,(3),null);
var G__34425 = top_data;
var G__34425__$1 = (cljs.core.truth_(line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34425,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),line):G__34425);
var G__34425__$2 = (cljs.core.truth_(file)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34425__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file):G__34425__$1);
var G__34425__$3 = (cljs.core.truth_((function (){var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34425__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null))):G__34425__$2);
var G__34425__$4 = (cljs.core.truth_(type)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34425__$3,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type):G__34425__$3);
if(cljs.core.truth_(message)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34425__$4,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message);
} else {
return G__34425__$4;
}

break;
case "execution":
var vec__34429 = cljs.core.first(trace);
var source__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(0),null);
var method = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(1),null);
var file = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(2),null);
var line = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__34429,(3),null);
var file__$1 = cljs.core.first(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__34305_SHARP_){
var or__4185__auto__ = (p1__34305_SHARP_ == null);
if(or__4185__auto__){
return or__4185__auto__;
} else {
var fexpr__34443 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["NO_SOURCE_PATH",null,"NO_SOURCE_FILE",null], null), null);
return (fexpr__34443.cljs$core$IFn$_invoke$arity$1 ? fexpr__34443.cljs$core$IFn$_invoke$arity$1(p1__34305_SHARP_) : fexpr__34443.call(null,p1__34305_SHARP_));
}
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(caller),file], null)));
var err_line = (function (){var or__4185__auto__ = new cljs.core.Keyword(null,"line","line",212345235).cljs$core$IFn$_invoke$arity$1(caller);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return line;
}
})();
var G__34447 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890),type], null);
var G__34447__$1 = (cljs.core.truth_(err_line)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34447,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471),err_line):G__34447);
var G__34447__$2 = (cljs.core.truth_(message)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34447__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742),message):G__34447__$1);
var G__34447__$3 = (cljs.core.truth_((function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
var and__4174__auto__ = source__$1;
if(cljs.core.truth_(and__4174__auto__)){
return method;
} else {
return and__4174__auto__;
}
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34447__$2,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994),(function (){var or__4185__auto__ = fn;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[source__$1,method],null));
}
})()):G__34447__$2);
var G__34447__$4 = (cljs.core.truth_(file__$1)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34447__$3,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397),file__$1):G__34447__$3);
if(cljs.core.truth_(problems)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__34447__$4,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595),data);
} else {
return G__34447__$4;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34369__$1)].join('')));

}
})(),new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358),phase);
});
/**
 * Returns a string from exception data, as produced by ex-triage.
 *   The first line summarizes the exception phase and location.
 *   The subsequent lines describe the cause.
 */
cljs.repl.ex_str = (function cljs$repl$ex_str(p__34474){
var map__34479 = p__34474;
var map__34479__$1 = (((((!((map__34479 == null))))?(((((map__34479.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34479.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__34479):map__34479);
var triage_data = map__34479__$1;
var phase = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","phase","clojure.error/phase",275140358));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","source","clojure.error/source",-2011936397));
var line = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","line","clojure.error/line",-1816287471));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","column","clojure.error/column",304721553));
var symbol = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","symbol","clojure.error/symbol",1544821994));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","class","clojure.error/class",278435890));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","cause","clojure.error/cause",-1879175742));
var spec = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__34479__$1,new cljs.core.Keyword("clojure.error","spec","clojure.error/spec",2055032595));
var loc = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = source;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "<cljs repl>";
}
})()),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__4185__auto__ = line;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return (1);
}
})()),(cljs.core.truth_(column)?[":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join(''):"")].join('');
var class_name = cljs.core.name((function (){var or__4185__auto__ = class$;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return "";
}
})());
var simple_class = class_name;
var cause_type = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["RuntimeException",null,"Exception",null], null), null),simple_class))?"":[" (",simple_class,")"].join(''));
var format = goog.string.format;
var G__34495 = phase;
var G__34495__$1 = (((G__34495 instanceof cljs.core.Keyword))?G__34495.fqn:null);
switch (G__34495__$1) {
case "read-source":
return (format.cljs$core$IFn$_invoke$arity$3 ? format.cljs$core$IFn$_invoke$arity$3("Syntax error reading source at (%s).\n%s\n",loc,cause) : format.call(null,"Syntax error reading source at (%s).\n%s\n",loc,cause));

break;
case "macro-syntax-check":
var G__34496 = "Syntax error macroexpanding %sat (%s).\n%s";
var G__34497 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34498 = loc;
var G__34499 = (cljs.core.truth_(spec)?(function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34500_34842 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34501_34843 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34502_34844 = true;
var _STAR_print_fn_STAR__temp_val__34503_34845 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34502_34844);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34503_34845);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34469_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34469_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34501_34843);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34500_34842);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})():(format.cljs$core$IFn$_invoke$arity$2 ? format.cljs$core$IFn$_invoke$arity$2("%s\n",cause) : format.call(null,"%s\n",cause)));
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34496,G__34497,G__34498,G__34499) : format.call(null,G__34496,G__34497,G__34498,G__34499));

break;
case "macroexpansion":
var G__34506 = "Unexpected error%s macroexpanding %sat (%s).\n%s\n";
var G__34507 = cause_type;
var G__34508 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34509 = loc;
var G__34510 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34506,G__34507,G__34508,G__34509,G__34510) : format.call(null,G__34506,G__34507,G__34508,G__34509,G__34510));

break;
case "compile-syntax-check":
var G__34512 = "Syntax error%s compiling %sat (%s).\n%s\n";
var G__34513 = cause_type;
var G__34514 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34515 = loc;
var G__34516 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34512,G__34513,G__34514,G__34515,G__34516) : format.call(null,G__34512,G__34513,G__34514,G__34515,G__34516));

break;
case "compilation":
var G__34518 = "Unexpected error%s compiling %sat (%s).\n%s\n";
var G__34519 = cause_type;
var G__34520 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34521 = loc;
var G__34522 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34518,G__34519,G__34520,G__34521,G__34522) : format.call(null,G__34518,G__34519,G__34520,G__34521,G__34522));

break;
case "read-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error reading eval result%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "print-eval-result":
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5("Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause) : format.call(null,"Error printing return value%s at %s (%s).\n%s\n",cause_type,symbol,loc,cause));

break;
case "execution":
if(cljs.core.truth_(spec)){
var G__34527 = "Execution error - invalid arguments to %s at (%s).\n%s";
var G__34528 = symbol;
var G__34529 = loc;
var G__34530 = (function (){var sb__4720__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__34532_34856 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__34533_34857 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__34534_34858 = true;
var _STAR_print_fn_STAR__temp_val__34535_34859 = (function (x__4721__auto__){
return sb__4720__auto__.append(x__4721__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__34534_34858);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__34535_34859);

try{cljs.spec.alpha.explain_out(cljs.core.update.cljs$core$IFn$_invoke$arity$3(spec,new cljs.core.Keyword("cljs.spec.alpha","problems","cljs.spec.alpha/problems",447400814),(function (probs){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__34473_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__34473_SHARP_,new cljs.core.Keyword(null,"in","in",-1531184865));
}),probs);
}))
);
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__34533_34857);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__34532_34856);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__4720__auto__);
})();
return (format.cljs$core$IFn$_invoke$arity$4 ? format.cljs$core$IFn$_invoke$arity$4(G__34527,G__34528,G__34529,G__34530) : format.call(null,G__34527,G__34528,G__34529,G__34530));
} else {
var G__34539 = "Execution error%s at %s(%s).\n%s\n";
var G__34540 = cause_type;
var G__34541 = (cljs.core.truth_(symbol)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(symbol)," "].join(''):"");
var G__34542 = loc;
var G__34543 = cause;
return (format.cljs$core$IFn$_invoke$arity$5 ? format.cljs$core$IFn$_invoke$arity$5(G__34539,G__34540,G__34541,G__34542,G__34543) : format.call(null,G__34539,G__34540,G__34541,G__34542,G__34543));
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34495__$1)].join('')));

}
});
cljs.repl.error__GT_str = (function cljs$repl$error__GT_str(error){
return cljs.repl.ex_str(cljs.repl.ex_triage(cljs.repl.Error__GT_map(error)));
});

//# sourceMappingURL=cljs.repl.js.map
