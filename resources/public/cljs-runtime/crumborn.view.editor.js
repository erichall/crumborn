goog.provide('crumborn.view.editor');
goog.require('cljs.core');
goog.require('reagent.core');
goog.require('clojure.string');
goog.require('cljs.core.async');
goog.require('crumborn.interop');
goog.require('cljs.test');
cljs.core.enable_console_print_BANG_();
crumborn.view.editor.get_lines = (function crumborn$view$editor$get_lines(buffer){
return clojure.string.split_lines(buffer);
});
if((typeof crumborn !== 'undefined') && (typeof crumborn.view !== 'undefined') && (typeof crumborn.view.editor !== 'undefined') && (typeof crumborn.view.editor.state_atom !== 'undefined')){
} else {
crumborn.view.editor.state_atom = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
crumborn.view.editor.initial_state = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"editable","editable",1930280326),new cljs.core.Keyword(null,"active-line","active-line",-1837778552),new cljs.core.Keyword(null,"char-width","char-width",1545126729),new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"keys-down","keys-down",318034904),new cljs.core.Keyword(null,"selection","selection",975998651),new cljs.core.Keyword(null,"buffer","buffer",617295198)],[true,(0),null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"is-down","is-down",-961831145),false,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"x-screen","x-screen",192702489),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"y-screen","y-screen",-343099654),(0)], null),new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"x-screen","x-screen",192702489),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"y-screen","y-screen",-343099654),(0)], null)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"x-screen","x-screen",192702489),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"y-screen","y-screen",-343099654),(0)], null),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),(21),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),(12),new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(500),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218),(900)], null),cljs.core.PersistentHashSet.EMPTY,cljs.core.PersistentVector.EMPTY,crumborn.view.editor.get_lines("a\nThis is a editor\nwith text!\na\n.\n\n\nhejsan\n")]);
if(cljs.core.truth_(cljs.core.deref(crumborn.view.editor.state_atom))){
} else {
cljs.core.reset_BANG_(crumborn.view.editor.state_atom,crumborn.view.editor.initial_state);
}
crumborn.view.editor.editor_width = (function crumborn$view$editor$editor_width(p__32974){
var map__32975 = p__32974;
var map__32975__$1 = (((((!((map__32975 == null))))?(((((map__32975.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32975.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32975):map__32975);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32975__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.Keyword(null,"editor-width","editor-width",156837177).cljs$core$IFn$_invoke$arity$1(styles);
});
crumborn.view.editor.listen = (function crumborn$view$editor$listen(element,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3(element,type,(function (evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,evt);
}));

return out;
});
crumborn.view.editor.get_row = (function crumborn$view$editor$get_row(p__32977,row_number){
var map__32978 = p__32977;
var map__32978__$1 = (((((!((map__32978 == null))))?(((((map__32978.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32978.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32978):map__32978);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32978__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(buffer,row_number);
});
crumborn.view.editor.get_row_length = (function crumborn$view$editor$get_row_length(state,row_number){
return cljs.core.count(crumborn.view.editor.get_row(state,row_number));
});
crumborn.view.editor.get_row_width = (function crumborn$view$editor$get_row_width(p__32980,row_num){
var map__32981 = p__32980;
var map__32981__$1 = (((((!((map__32981 == null))))?(((((map__32981.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32981.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32981):map__32981);
var state = map__32981__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32981__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
if(cljs.core.int_QMARK_(row_num)){
} else {
throw (new Error("Assert failed: (int? row-num)"));
}

var _PERCENT_ = (crumborn.view.editor.get_row_length(state,row_num) * char_width);
if(crumborn.interop.not_nan_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (interop/not-nan? %)"));
}

if(cljs.core.double_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (double? %)"));
}

return _PERCENT_;
});
crumborn.view.editor.count_rows = (function crumborn$view$editor$count_rows(p__32983){
var map__32984 = p__32983;
var map__32984__$1 = (((((!((map__32984 == null))))?(((((map__32984.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32984.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32984):map__32984);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32984__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.count(buffer);
});
crumborn.view.editor.row_id = (function crumborn$view$editor$row_id(row_number){
return ["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
});
crumborn.view.editor.row_heights = (function crumborn$view$editor$row_heights(p__32986){
var map__32987 = p__32986;
var map__32987__$1 = (((((!((map__32987 == null))))?(((((map__32987.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32987.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32987):map__32987);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32987__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32987__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32987__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__32989){
var vec__32990 = p__32989;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__32990,(1),null);
var map__32993 = styles;
var map__32993__$1 = (((((!((map__32993 == null))))?(((((map__32993.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32993.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32993):map__32993);
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32993__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var editor_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32993__$1,new cljs.core.Keyword(null,"editor-width","editor-width",156837177));
var span = (function (){var G__32995 = (1);
var G__32996 = (function (){var G__32997 = ((char_width * cljs.core.count(row)) / editor_width);
return Math.ceil(G__32997);
})();
return Math.max(G__32995,G__32996);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"row","row",-570139521),i,new cljs.core.Keyword(null,"span","span",1394872991),span,new cljs.core.Keyword(null,"inner-lines","inner-lines",930263625),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return ((r * i) * line_height);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(span + (1)))),new cljs.core.Keyword(null,"total-height","total-height",1751510523),(span * line_height),new cljs.core.Keyword(null,"span-start","span-start",-60020793),(i * line_height),new cljs.core.Keyword(null,"span-end","span-end",-1371378399),((i * line_height) + (span * line_height))], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(buffer)),buffer));
});
crumborn.view.editor.y__GT_row = (function crumborn$view$editor$y__GT_row(p__32998,y){
var map__32999 = p__32998;
var map__32999__$1 = (((((!((map__32999 == null))))?(((((map__32999.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__32999.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__32999):map__32999);
var state = map__32999__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__32999__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var a = cljs.core.some((function (p__33001){
var map__33002 = p__33001;
var map__33002__$1 = (((((!((map__33002 == null))))?(((((map__33002.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33002.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33002):map__33002);
var s = map__33002__$1;
var span_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33002__$1,new cljs.core.Keyword(null,"span-start","span-start",-60020793));
var span_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33002__$1,new cljs.core.Keyword(null,"span-end","span-end",-1371378399));
if((((y >= span_start)) && ((y < span_end)))){
return s;
} else {
return null;
}
}),crumborn.view.editor.row_heights(state));
var b = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev,cur){
if(((function (){var G__33004 = (cur - y);
return Math.abs(G__33004);
})() < (function (){var G__33005 = (prev - y);
return Math.abs(G__33005);
})())){
return cur;
} else {
return prev;
}
}),(-1),new cljs.core.Keyword(null,"inner-lines","inner-lines",930263625).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(a);
});
crumborn.view.editor.clamp_to_chars = (function crumborn$view$editor$clamp_to_chars(p__33006,row_number,value){
var map__33007 = p__33006;
var map__33007__$1 = (((((!((map__33007 == null))))?(((((map__33007.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33007.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33007):map__33007);
var state = map__33007__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33007__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
if(crumborn.interop.not_nan_QMARK_(value)){
} else {
throw (new Error("Assert failed: (interop/not-nan? value)"));
}

var _PERCENT_ = (function (){var chars = crumborn.view.editor.get_row_length(state,row_number);
return (char_width * (function (){var x__4276__auto__ = chars;
var y__4277__auto__ = (function (){var G__33009 = (value / char_width);
return Math.round(G__33009);
})();
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
})();
if(cljs.core.double_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (double? %)"));
}

if(crumborn.interop.not_nan_QMARK_(_PERCENT_)){
} else {
throw (new Error("Assert failed: (interop/not-nan? %)"));
}

return _PERCENT_;
});
/**
 * Clamp x-position of cursor position between chars
 */
crumborn.view.editor.clamp_cursor = (function crumborn$view$editor$clamp_cursor(state,p__33010){
var map__33011 = p__33010;
var map__33011__$1 = (((((!((map__33011 == null))))?(((((map__33011.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33011.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33011):map__33011);
var mouse = map__33011__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33011__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33011__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mouse,new cljs.core.Keyword(null,"x","x",2099068185),crumborn.view.editor.clamp_to_chars(state,crumborn.view.editor.y__GT_row(state,y),x));
});
crumborn.view.editor.get_active_row = (function crumborn$view$editor$get_active_row(p__33013){
var map__33014 = p__33013;
var map__33014__$1 = (((((!((map__33014 == null))))?(((((map__33014.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33014.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33014):map__33014);
var state = map__33014__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33014__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return crumborn.view.editor.get_row(state,crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor)));
});
/**
 * Increase cursor position x with one char
 */
crumborn.view.editor.inc_cursor_x = (function crumborn$view$editor$inc_cursor_x(p__33017){
var map__33018 = p__33017;
var map__33018__$1 = (((((!((map__33018 == null))))?(((((map__33018.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33018.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33018):map__33018);
var state = map__33018__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33018__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__33016_SHARP_){
return (char_width + p1__33016_SHARP_);
}));
});
/**
 * Decrease cursor position x with one char
 */
crumborn.view.editor.dec_cursor_x = (function crumborn$view$editor$dec_cursor_x(p__33021){
var map__33022 = p__33021;
var map__33022__$1 = (((((!((map__33022 == null))))?(((((map__33022.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33022.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33022):map__33022);
var state = map__33022__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33022__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__33020_SHARP_){
var x__4273__auto__ = (0);
var y__4274__auto__ = crumborn.view.editor.clamp_to_chars(state,active_line,(p1__33020_SHARP_ - char_width));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
}));
});
crumborn.view.editor.set_cursor_end_of_row = (function crumborn$view$editor$set_cursor_end_of_row(state,row_number){
if((row_number >= (0))){
} else {
throw (new Error("Assert failed: (>= row-number 0)"));
}

return crumborn.view.editor.clamp_to_chars(state,row_number,crumborn.view.editor.get_row_width(state,row_number));
});
crumborn.view.editor.set_cursor = (function crumborn$view$editor$set_cursor(state,x,y){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484)], null),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([y], 0));
});
crumborn.view.editor.set_cursor_start = (function crumborn$view$editor$set_cursor_start(p__33024){
var map__33025 = p__33024;
var map__33025__$1 = (((((!((map__33025 == null))))?(((((map__33025.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33025.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33025):map__33025);
var state = map__33025__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33025__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return crumborn.view.editor.set_cursor(state,(0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
});
crumborn.view.editor.x__GT_char_pos = (function crumborn$view$editor$x__GT_char_pos(p__33027,x){
var map__33028 = p__33027;
var map__33028__$1 = (((((!((map__33028 == null))))?(((((map__33028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33028.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33028):map__33028);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33028__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return (x / char_width);
});
crumborn.view.editor.dec_cursor_y = (function crumborn$view$editor$dec_cursor_y(y,line_height){
if((y <= line_height)){
return y;
} else {
return (y - line_height);
}
});
crumborn.view.editor.inc_cursor_y = (function crumborn$view$editor$inc_cursor_y(p__33031){
var map__33032 = p__33031;
var map__33032__$1 = (((((!((map__33032 == null))))?(((((map__33032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33032.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33032):map__33032);
var state = map__33032__$1;
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33032__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(function (p1__33030_SHARP_){
return (p1__33030_SHARP_ + new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(styles));
}));
});
crumborn.view.editor.str_insert = (function crumborn$view$editor$str_insert(s,c,i){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.str.cljs$core$IFn$_invoke$arity$1(c),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,i)].join('');
});
crumborn.view.editor.str_insert.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.str_insert("hej","B",(1)),(new cljs.core.List(null,"hBej",null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-insert","str-insert",-149283154,null),"hej","B",(1)),"hBej"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-insert","str-insert",-149283154,null),"hej","B",(1)),"hBej"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33034){var t__8952__auto__ = e33034;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"str-insert","str-insert",-149283154,null),"hej","B",(1)),"hBej"),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.remove_char_at = (function crumborn$view$editor$remove_char_at(s,i){
return [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,((1) + i))].join('');
});
crumborn.view.editor.remove_char_at.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.remove_char_at("hej",(0)),(new cljs.core.List(null,"ej",null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-char-at","remove-char-at",-1589943689,null),"hej",(0)),"ej"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-char-at","remove-char-at",-1589943689,null),"hej",(0)),"ej"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33035){var t__8952__auto__ = e33035;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-char-at","remove-char-at",-1589943689,null),"hej",(0)),"ej"),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.remove_last_char = (function crumborn$view$editor$remove_last_char(s){
return crumborn.view.editor.remove_char_at(s,(cljs.core.count(s) - (1)));
});
crumborn.view.editor.remove_last_char.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.remove_last_char("hej"),(new cljs.core.List(null,"he",null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-last-char","remove-last-char",1878190374,null),"hej"),"he"),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-last-char","remove-last-char",1878190374,null),"hej"),"he"),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33036){var t__8952__auto__ = e33036;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-last-char","remove-last-char",1878190374,null),"hej"),"he"),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.row_overflow_QMARK_ = (function crumborn$view$editor$row_overflow_QMARK_(p__33037,row){
var map__33038 = p__33037;
var map__33038__$1 = (((((!((map__33038 == null))))?(((((map__33038.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33038.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33038):map__33038);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33038__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33038__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return (((cljs.core.count(row) * char_width) + char_width) > new cljs.core.Keyword(null,"editor-width","editor-width",156837177).cljs$core$IFn$_invoke$arity$1(styles));
});
crumborn.view.editor.row_overflow_QMARK_.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.row_overflow_QMARK_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),(11),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(100)], null)], null),clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.repeat.cljs$core$IFn$_invoke$arity$2((9),"a"))),(new cljs.core.List(null,true,null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"row-overflow?","row-overflow?",1305574615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),(11),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(100)], null)], null),cljs.core.list(new cljs.core.Symbol("s","join","s/join",881670040,null),cljs.core.list(new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null),(9),"a"))),true),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"row-overflow?","row-overflow?",1305574615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),(11),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(100)], null)], null),cljs.core.list(new cljs.core.Symbol("s","join","s/join",881670040,null),cljs.core.list(new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null),(9),"a"))),true),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33040){var t__8952__auto__ = e33040;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"row-overflow?","row-overflow?",1305574615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),(11),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(100)], null)], null),cljs.core.list(new cljs.core.Symbol("s","join","s/join",881670040,null),cljs.core.list(new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null),(9),"a"))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.remove_row = (function crumborn$view$editor$remove_row(p__33041,row_number){
var map__33042 = p__33041;
var map__33042__$1 = (((((!((map__33042 == null))))?(((((map__33042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33042.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33042):map__33042);
var state = map__33042__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33042__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(buffer,(0),row_number),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(buffer,(row_number + (1))))));
});
crumborn.view.editor.remove_row.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.remove_row(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null)], null),(1)),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r3"], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-row","remove-row",665181062,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null)], null),(1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r3"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-row","remove-row",665181062,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null)], null),(1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r3"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33044){var t__8952__auto__ = e33044;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-row","remove-row",665181062,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null)], null),(1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r3"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.insert_row_at = (function crumborn$view$editor$insert_row_at(p__33045,row_number,new_row){
var map__33046 = p__33045;
var map__33046__$1 = (((((!((map__33046 == null))))?(((((map__33046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33046.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33046):map__33046);
var state = map__33046__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33046__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"buffer","buffer",617295198),cljs.core.vec(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(buffer,(0),row_number),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_row], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(buffer,row_number)], 0))));
});
crumborn.view.editor.insert_row_at.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.insert_row_at(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2"], null)], null),(1),"new-row"),(new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","new-row","r2"], null)], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"insert-row-at","insert-row-at",910323685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2"], null)], null),(1),"new-row"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","new-row","r2"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"insert-row-at","insert-row-at",910323685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2"], null)], null),(1),"new-row"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","new-row","r2"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33048){var t__8952__auto__ = e33048;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"insert-row-at","insert-row-at",910323685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2"], null)], null),(1),"new-row"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","new-row","r2"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.cursor_end_of_row_QMARK_ = (function crumborn$view$editor$cursor_end_of_row_QMARK_(p__33049){
var map__33050 = p__33049;
var map__33050__$1 = (((((!((map__33050 == null))))?(((((map__33050.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33050.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33050):map__33050);
var state = map__33050__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33050__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33050__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return ((crumborn.view.editor.editor_width(state) - (char_width + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor))) < char_width);
});
/**
 * Get chars after x, INCLUDING x
 */
crumborn.view.editor.rest_of_row = (function crumborn$view$editor$rest_of_row(state,row,x){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(row,crumborn.view.editor.x__GT_char_pos(state,x));
});
/**
 * Get chars up to x, EXCLUDING x
 */
crumborn.view.editor.first_of_row = (function crumborn$view$editor$first_of_row(state,row,x){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(row,(0),crumborn.view.editor.x__GT_char_pos(state,x));
});
crumborn.view.editor.last_char = (function crumborn$view$editor$last_char(row){
return cljs.core.last(row);
});
crumborn.view.editor.process_char = (function crumborn$view$editor$process_char(p__33052,key){
var map__33053 = p__33052;
var map__33053__$1 = (((((!((map__33053 == null))))?(((((map__33053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33053.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33053):map__33053);
var state = map__33053__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33053__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var row = crumborn.view.editor.get_active_row(state);
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
var cursor_x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var pos = crumborn.view.editor.x__GT_char_pos(state,cursor_x);
var new_row = crumborn.view.editor.str_insert(row,key,pos);
var overflow_QMARK_ = crumborn.view.editor.row_overflow_QMARK_(state,row);
if(overflow_QMARK_){
if(crumborn.view.editor.cursor_end_of_row_QMARK_(state)){
return crumborn.view.editor.inc_cursor_x(crumborn.view.editor.set_cursor_start(crumborn.view.editor.inc_cursor_y(crumborn.view.editor.insert_row_at(state,(active_line + (1)),key))));
} else {
return crumborn.view.editor.inc_cursor_x(cljs.core.assoc_in(crumborn.view.editor.insert_row_at(state,(active_line + (1)),crumborn.view.editor.last_char(row)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),[crumborn.view.editor.first_of_row(state,row,cursor_x),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join('')));
}
} else {
return crumborn.view.editor.inc_cursor_x(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),new_row));
}
});
crumborn.view.editor.empty_row_QMARK_ = (function crumborn$view$editor$empty_row_QMARK_(state,row_number){
return cljs.core.empty_QMARK_(crumborn.view.editor.get_row(state,row_number));
});
crumborn.view.editor.process_backspace = (function crumborn$view$editor$process_backspace(p__33056){
var map__33057 = p__33056;
var map__33057__$1 = (((((!((map__33057 == null))))?(((((map__33057.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33057.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33057):map__33057);
var state = map__33057__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33057__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33057__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33057__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
if(crumborn.view.editor.empty_row_QMARK_(state,active_line)){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(crumborn.view.editor.remove_row(state,active_line),new cljs.core.Keyword(null,"active-line","active-line",-1837778552),(function (p1__33055_SHARP_){
var x__4273__auto__ = (0);
var y__4274__auto__ = (new cljs.core.Keyword(null,"active-line","active-line",-1837778552).cljs$core$IFn$_invoke$arity$1(p1__33055_SHARP_) - (1));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null),crumborn.view.editor.dec_cursor_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(styles))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),crumborn.view.editor.set_cursor_end_of_row(state,new cljs.core.Keyword(null,"active-line","active-line",-1837778552).cljs$core$IFn$_invoke$arity$1(state)));
} else {
var pos = crumborn.view.editor.x__GT_char_pos(state,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor) - (1)));
return crumborn.view.editor.dec_cursor_x(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),crumborn.view.editor.remove_char_at(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(buffer,active_line),pos)));

}
});
crumborn.view.editor.process_key_down = (function crumborn$view$editor$process_key_down(state,p__33059){
var map__33060 = p__33059;
var map__33060__$1 = (((((!((map__33060 == null))))?(((((map__33060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33060.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33060):map__33060);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33060__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pred__33062 = cljs.core.re_matches;
var expr__33063 = key;
if(cljs.core.truth_((function (){var G__33065 = /Enter/;
var G__33066 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33065,G__33066) : pred__33062.call(null,G__33065,G__33066));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
} else {
if(cljs.core.truth_((function (){var G__33067 = /Shift/;
var G__33068 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33067,G__33068) : pred__33062.call(null,G__33067,G__33068));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33069 = /Meta/;
var G__33070 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33069,G__33070) : pred__33062.call(null,G__33069,G__33070));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33071 = /ArrowRight/;
var G__33072 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33071,G__33072) : pred__33062.call(null,G__33071,G__33072));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33073 = /ArrowLeft/;
var G__33074 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33073,G__33074) : pred__33062.call(null,G__33073,G__33074));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33075 = /ArrowUp/;
var G__33076 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33075,G__33076) : pred__33062.call(null,G__33075,G__33076));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33077 = /ArrowDown/;
var G__33078 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33077,G__33078) : pred__33062.call(null,G__33077,G__33078));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__33079 = /Backspace/;
var G__33080 = expr__33063;
return (pred__33062.cljs$core$IFn$_invoke$arity$2 ? pred__33062.cljs$core$IFn$_invoke$arity$2(G__33079,G__33080) : pred__33062.call(null,G__33079,G__33080));
})())){
return crumborn.view.editor.process_backspace(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)));
} else {
return crumborn.view.editor.process_char(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key)),key);
}
}
}
}
}
}
}
}
});
crumborn.view.editor.process_key_up = (function crumborn$view$editor$process_key_up(state,p__33081){
var map__33082 = p__33081;
var map__33082__$1 = (((((!((map__33082 == null))))?(((((map__33082.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33082.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33082):map__33082);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33082__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.disj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
});
crumborn.view.editor.process_key = (function crumborn$view$editor$process_key(state,p__33084){
var map__33085 = p__33084;
var map__33085__$1 = (((((!((map__33085 == null))))?(((((map__33085.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33085.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33085):map__33085);
var data = map__33085__$1;
var key_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33085__$1,new cljs.core.Keyword(null,"key-type","key-type",-1494232916));
var pred__33087 = cljs.core._EQ_;
var expr__33088 = key_type;
if(cljs.core.truth_((function (){var G__33090 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__33091 = expr__33088;
return (pred__33087.cljs$core$IFn$_invoke$arity$2 ? pred__33087.cljs$core$IFn$_invoke$arity$2(G__33090,G__33091) : pred__33087.call(null,G__33090,G__33091));
})())){
return crumborn.view.editor.process_key_down(state,data);
} else {
if(cljs.core.truth_((function (){var G__33092 = new cljs.core.Keyword(null,"keyup","keyup",-794526927);
var G__33093 = expr__33088;
return (pred__33087.cljs$core$IFn$_invoke$arity$2 ? pred__33087.cljs$core$IFn$_invoke$arity$2(G__33092,G__33093) : pred__33087.call(null,G__33092,G__33093));
})())){
return crumborn.view.editor.process_key_up(state,data);
} else {
return console.warn("unable to process key event",key_type);
}
}
});
crumborn.view.editor.get_dom_el = (function crumborn$view$editor$get_dom_el(id){
return crumborn.interop.get_element_by_id(id);
});
crumborn.view.editor.get_relative_mouse_cords = (function crumborn$view$editor$get_relative_mouse_cords(js_evt,el){
var map__33094 = crumborn.interop.get_bounding_client_rect(el);
var map__33094__$1 = (((((!((map__33094 == null))))?(((((map__33094.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33094.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33094):map__33094);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33094__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33094__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var x = crumborn.interop.mouse_x(js_evt);
var y = crumborn.interop.mouse_y(js_evt);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - left),new cljs.core.Keyword(null,"y","y",-1757859776),(y - top),new cljs.core.Keyword(null,"x-screen","x-screen",192702489),x,new cljs.core.Keyword(null,"y-screen","y-screen",-343099654),y], null);
});
crumborn.view.editor.clamp_to_row = (function crumborn$view$editor$clamp_to_row(row_height,y){
return ((function (){var G__33096 = (y / row_height);
return Math.floor(G__33096);
})() | (0));
});
crumborn.view.editor.clamp_to_row.cljs$lang$test = (function (){
try{var values__8921__auto___33199 = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(18)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__8922__auto___33200 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___33199);
if(cljs.core.truth_(result__8922__auto___33200)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___33199),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___33199),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33097){var t__8952__auto___33201 = e33097;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___33201,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___33202 = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(0)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__8922__auto___33203 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___33202);
if(cljs.core.truth_(result__8922__auto___33203)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___33202),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___33202),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e33098){var t__8952__auto___33204 = e33098;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___33204,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(38)),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e33099){var t__8952__auto__ = e33099;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.in_editor_QMARK_ = (function crumborn$view$editor$in_editor_QMARK_(p__33100){
var map__33101 = p__33100;
var map__33101__$1 = (((((!((map__33101 == null))))?(((((map__33101.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33101.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33101):map__33101);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33101__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33101__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((x >= (0))) && ((x <= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null)))) && ((y >= (0))) && ((y <= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null)))));
});
crumborn.view.editor.process_mouse_down = (function crumborn$view$editor$process_mouse_down(state,p__33103){
var map__33104 = p__33103;
var map__33104__$1 = (((((!((map__33104 == null))))?(((((map__33104.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33104.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33104):map__33104);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33104__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
var mouse = crumborn.view.editor.get_relative_mouse_cords(js_evt,crumborn.view.editor.get_dom_el("editor-area"));
if(crumborn.view.editor.in_editor_QMARK_(mouse)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"start","start",-355208981)], null),mouse),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"is-down","is-down",-961831145)], null),true),new cljs.core.Keyword(null,"cursor","cursor",1011937484),crumborn.view.editor.clamp_cursor(state,mouse)),new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
crumborn.view.editor.process_mouse_up = (function crumborn$view$editor$process_mouse_up(state,p__33106){
var map__33107 = p__33106;
var map__33107__$1 = (((((!((map__33107 == null))))?(((((map__33107.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33107.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33107):map__33107);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33107__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972)], null),cljs.core.assoc,new cljs.core.Keyword(null,"end","end",-268185958),crumborn.view.editor.get_relative_mouse_cords(js_evt,crumborn.view.editor.get_dom_el("editor-area")),new cljs.core.Keyword(null,"is-down","is-down",-961831145),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([false], 0));
});
crumborn.view.editor.ge_sub = (function crumborn$view$editor$ge_sub(a,b){
if((a > b)){
return (a - b);
} else {
return (b - a);
}
});
crumborn.view.editor.selection_top_dist = (function crumborn$view$editor$selection_top_dist(row_num,line_height){
return (line_height * row_num);
});
/**
 * position of a row from x to the end of that row
 */
crumborn.view.editor.selection_x__GT_end = (function crumborn$view$editor$selection_x__GT_end(state,row_num,x,full_width,line_height){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),crumborn.view.editor.clamp_to_chars(state,row_num,(full_width - x)),new cljs.core.Keyword(null,"top","top",-1856271961),crumborn.view.editor.selection_top_dist(row_num,line_height),new cljs.core.Keyword(null,"left","left",-399115937),crumborn.view.editor.clamp_to_chars(state,row_num,x)], null);
});
/**
 * position of a row from start of the row to coordinate x
 */
crumborn.view.editor.selection_zero__GT_x = (function crumborn$view$editor$selection_zero__GT_x(state,row_num,x,line_height){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),crumborn.view.editor.clamp_to_chars(state,row_num,x),new cljs.core.Keyword(null,"top","top",-1856271961),crumborn.view.editor.selection_top_dist(row_num,line_height),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});
/**
 * position of a fully selected row
 */
crumborn.view.editor.selection_zero__GT_end = (function crumborn$view$editor$selection_zero__GT_end(state,line_height,row_num){
var width = crumborn.view.editor.get_row_width(state,row_num);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(((width === (0)))?7.2:width),new cljs.core.Keyword(null,"top","top",-1856271961),crumborn.view.editor.selection_top_dist(row_num,line_height),new cljs.core.Keyword(null,"left","left",-399115937),(0)], null);
});
crumborn.view.editor.select_rows_between = (function crumborn$view$editor$select_rows_between(state,a,b,line_height){
var fixed_row = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(a));
var moving_row = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(b));
var fixed_row_width = crumborn.view.editor.get_row_width(state,fixed_row);
var moving_row_width = crumborn.view.editor.get_row_width(state,moving_row);
var fixed_x = (function (){var x__4276__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(a);
var y__4277__auto__ = fixed_row_width;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
var moving_x = (function (){var x__4276__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(b);
var y__4277__auto__ = moving_row_width;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(fixed_row,moving_row)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),crumborn.view.editor.clamp_to_chars(state,fixed_row,(function (){var x__4276__auto__ = (function (){var G__33110 = (fixed_x - moving_x);
return Math.abs(G__33110);
})();
var y__4277__auto__ = fixed_row_width;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})()),new cljs.core.Keyword(null,"top","top",-1856271961),(fixed_row * line_height),new cljs.core.Keyword(null,"left","left",-399115937),crumborn.view.editor.clamp_to_chars(state,fixed_row,(function (){var x__4276__auto__ = fixed_x;
var y__4277__auto__ = moving_x;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})())], null)], null);
} else {
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (row_num){
return crumborn.view.editor.selection_zero__GT_end(state,line_height,row_num);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__33109_SHARP_){
return ((p1__33109_SHARP_ + (1)) + (function (){var x__4276__auto__ = fixed_row;
var y__4277__auto__ = moving_row;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = (0);
var y__4274__auto__ = (crumborn.view.editor.ge_sub(fixed_row,moving_row) - (1));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))),(((fixed_row > moving_row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.selection_x__GT_end(state,moving_row,moving_x,moving_row_width,line_height),crumborn.view.editor.selection_zero__GT_x(state,fixed_row,fixed_x,line_height)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.selection_x__GT_end(state,fixed_row,fixed_x,fixed_row_width,line_height),crumborn.view.editor.selection_zero__GT_x(state,moving_row,moving_x,line_height)], null)));
}
});
crumborn.view.editor.process_mouse_move = (function crumborn$view$editor$process_mouse_move(state,p__33111){
var map__33112 = p__33111;
var map__33112__$1 = (((((!((map__33112 == null))))?(((((map__33112.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33112.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33112):map__33112);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33112__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"is-down","is-down",-961831145)], null)))){
var mouse = crumborn.view.editor.get_relative_mouse_cords(js_evt,crumborn.view.editor.get_dom_el("editor-area"));
if(crumborn.view.editor.in_editor_QMARK_(mouse)){
var state__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"end","end",-268185958)], null),mouse),new cljs.core.Keyword(null,"cursor","cursor",1011937484),crumborn.view.editor.clamp_cursor(state,mouse));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233),crumborn.view.editor.select_rows_between(state__$1,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"start","start",-355208981)], null)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))));
} else {
return null;
}
} else {
return null;
}
});
crumborn.view.editor.handle_mouse_event = (function crumborn$view$editor$handle_mouse_event(state,p__33114){
var map__33115 = p__33114;
var map__33115__$1 = (((((!((map__33115 == null))))?(((((map__33115.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33115.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33115):map__33115);
var data = map__33115__$1;
var mouse_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33115__$1,new cljs.core.Keyword(null,"mouse-type","mouse-type",-1777318068));
var pred__33117 = cljs.core._EQ_;
var expr__33118 = mouse_type;
if(cljs.core.truth_((function (){var G__33120 = new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734);
var G__33121 = expr__33118;
return (pred__33117.cljs$core$IFn$_invoke$arity$2 ? pred__33117.cljs$core$IFn$_invoke$arity$2(G__33120,G__33121) : pred__33117.call(null,G__33120,G__33121));
})())){
return crumborn.view.editor.process_mouse_move(state,data);
} else {
if(cljs.core.truth_((function (){var G__33122 = new cljs.core.Keyword(null,"mousedown","mousedown",1391242074);
var G__33123 = expr__33118;
return (pred__33117.cljs$core$IFn$_invoke$arity$2 ? pred__33117.cljs$core$IFn$_invoke$arity$2(G__33122,G__33123) : pred__33117.call(null,G__33122,G__33123));
})())){
return crumborn.view.editor.process_mouse_down(state,data);
} else {
if(cljs.core.truth_((function (){var G__33124 = new cljs.core.Keyword(null,"mouseup","mouseup",350619456);
var G__33125 = expr__33118;
return (pred__33117.cljs$core$IFn$_invoke$arity$2 ? pred__33117.cljs$core$IFn$_invoke$arity$2(G__33124,G__33125) : pred__33117.call(null,G__33124,G__33125));
})())){
return crumborn.view.editor.process_mouse_up(state,data);
} else {
return console.warn("Unable to process mouse event: ",cljs.core.type);
}
}
}
});
crumborn.view.editor.handle_event_BANG_ = (function crumborn$view$editor$handle_event_BANG_(name,data){
if((name instanceof cljs.core.Keyword)){
} else {
throw (new Error("Assert failed: (keyword? name)"));
}

var pred__33126 = cljs.core._EQ_;
var expr__33127 = name;
if(cljs.core.truth_((function (){var G__33129 = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364);
var G__33130 = expr__33127;
return (pred__33126.cljs$core$IFn$_invoke$arity$2 ? pred__33126.cljs$core$IFn$_invoke$arity$2(G__33129,G__33130) : pred__33126.call(null,G__33129,G__33130));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.view.editor.state_atom,(function (state){
var temp__5733__auto__ = crumborn.view.editor.process_key(state,data);
if(cljs.core.truth_(temp__5733__auto__)){
var new_state = temp__5733__auto__;
return new_state;
} else {
return state;
}
}));
} else {
if(cljs.core.truth_((function (){var G__33131 = new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181);
var G__33132 = expr__33127;
return (pred__33126.cljs$core$IFn$_invoke$arity$2 ? pred__33126.cljs$core$IFn$_invoke$arity$2(G__33131,G__33132) : pred__33126.call(null,G__33131,G__33132));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(crumborn.view.editor.state_atom,(function (state){
var temp__5733__auto__ = crumborn.view.editor.handle_mouse_event(state,data);
if(cljs.core.truth_(temp__5733__auto__)){
var new_state = temp__5733__auto__;
return new_state;
} else {
return state;
}
}));
} else {
if(cljs.core.truth_((function (){var G__33133 = new cljs.core.Keyword(null,"measure-char","measure-char",-2020995091);
var G__33134 = expr__33127;
return (pred__33126.cljs$core$IFn$_invoke$arity$2 ? pred__33126.cljs$core$IFn$_invoke$arity$2(G__33133,G__33134) : pred__33126.call(null,G__33133,G__33134));
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(crumborn.view.editor.state_atom,cljs.core.assoc,new cljs.core.Keyword(null,"char-width","char-width",1545126729),new cljs.core.Keyword(null,"char-width","char-width",1545126729).cljs$core$IFn$_invoke$arity$1(data));
} else {
return console.warn("Unable to handle event",name,data);
}
}
}
});
crumborn.view.editor.editor = (function crumborn$view$editor$editor(){
var trigger_event = crumborn.view.editor.handle_event_BANG_;
return reagent.core.create_class(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"component-did-mount","component-did-mount",-1126910518),(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"char-width","char-width",1545126729).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(crumborn.view.editor.state_atom)))){
} else {
var G__33135_33205 = new cljs.core.Keyword(null,"measure-char","measure-char",-2020995091);
var G__33136_33206 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(crumborn.interop.get_bounding_client_rect(crumborn.interop.get_element_by_id("ruler")))], null);
(trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__33135_33205,G__33136_33206) : trigger_event.call(null,G__33135_33205,G__33136_33206));
}

var chans = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.listen(crumborn.interop.get_element_by_id("editor-input"),"keydown"),crumborn.view.editor.listen(crumborn.interop.get_element_by_id("editor-input"),"keyup"),crumborn.view.editor.listen(crumborn.interop.document,"mousedown"),crumborn.view.editor.listen(crumborn.interop.document,"mouseup"),crumborn.view.editor.listen(crumborn.interop.document,"mousemove")], null));
var c__25761__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25762__auto__ = (function (){var switch__25723__auto__ = (function (state_33171){
var state_val_33172 = (state_33171[(1)]);
if((state_val_33172 === (7))){
var inst_33141 = (state_33171[(7)]);
var inst_33153 = (state_33171[(2)]);
var inst_33154 = [new cljs.core.Keyword(null,"keydown","keydown",-629268186),null,new cljs.core.Keyword(null,"keyup","keyup",-794526927),null];
var inst_33155 = (new cljs.core.PersistentArrayMap(null,2,inst_33154,null));
var inst_33156 = (new cljs.core.PersistentHashSet(null,inst_33155,null));
var inst_33157 = cljs.core.contains_QMARK_(inst_33156,inst_33141);
var state_33171__$1 = (function (){var statearr_33173 = state_33171;
(statearr_33173[(8)] = inst_33153);

return statearr_33173;
})();
if(inst_33157){
var statearr_33174_33207 = state_33171__$1;
(statearr_33174_33207[(1)] = (8));

} else {
var statearr_33175_33208 = state_33171__$1;
(statearr_33175_33208[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (1))){
var state_33171__$1 = state_33171;
var statearr_33176_33209 = state_33171__$1;
(statearr_33176_33209[(2)] = null);

(statearr_33176_33209[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (4))){
var inst_33141 = (state_33171[(7)]);
var inst_33139 = (state_33171[(9)]);
var inst_33139__$1 = (state_33171[(2)]);
var inst_33140 = inst_33139__$1.type;
var inst_33141__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_33140);
var inst_33142 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456),null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),null];
var inst_33143 = (new cljs.core.PersistentArrayMap(null,3,inst_33142,null));
var inst_33144 = (new cljs.core.PersistentHashSet(null,inst_33143,null));
var inst_33145 = cljs.core.contains_QMARK_(inst_33144,inst_33141__$1);
var state_33171__$1 = (function (){var statearr_33177 = state_33171;
(statearr_33177[(7)] = inst_33141__$1);

(statearr_33177[(9)] = inst_33139__$1);

return statearr_33177;
})();
if(inst_33145){
var statearr_33178_33210 = state_33171__$1;
(statearr_33178_33210[(1)] = (5));

} else {
var statearr_33179_33211 = state_33171__$1;
(statearr_33179_33211[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (6))){
var state_33171__$1 = state_33171;
var statearr_33180_33212 = state_33171__$1;
(statearr_33180_33212[(2)] = null);

(statearr_33180_33212[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (3))){
var inst_33169 = (state_33171[(2)]);
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.return_chan(state_33171__$1,inst_33169);
} else {
if((state_val_33172 === (2))){
var state_33171__$1 = state_33171;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_33171__$1,(4),chans);
} else {
if((state_val_33172 === (9))){
var state_33171__$1 = state_33171;
var statearr_33181_33213 = state_33171__$1;
(statearr_33181_33213[(2)] = null);

(statearr_33181_33213[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (5))){
var inst_33141 = (state_33171[(7)]);
var inst_33139 = (state_33171[(9)]);
var inst_33147 = [new cljs.core.Keyword(null,"mouse-type","mouse-type",-1777318068),new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416)];
var inst_33148 = [inst_33141,inst_33139];
var inst_33149 = cljs.core.PersistentHashMap.fromArrays(inst_33147,inst_33148);
var inst_33150 = (function (){var G__33182 = new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181);
var G__33183 = inst_33149;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__33182,G__33183) : trigger_event.call(null,G__33182,G__33183));
})();
var state_33171__$1 = state_33171;
var statearr_33184_33214 = state_33171__$1;
(statearr_33184_33214[(2)] = inst_33150);

(statearr_33184_33214[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (10))){
var inst_33166 = (state_33171[(2)]);
var state_33171__$1 = (function (){var statearr_33185 = state_33171;
(statearr_33185[(10)] = inst_33166);

return statearr_33185;
})();
var statearr_33186_33215 = state_33171__$1;
(statearr_33186_33215[(2)] = null);

(statearr_33186_33215[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33172 === (8))){
var inst_33141 = (state_33171[(7)]);
var inst_33139 = (state_33171[(9)]);
var inst_33159 = [new cljs.core.Keyword(null,"key-type","key-type",-1494232916),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_33160 = inst_33139.key;
var inst_33161 = [inst_33141,inst_33160];
var inst_33162 = cljs.core.PersistentHashMap.fromArrays(inst_33159,inst_33161);
var inst_33163 = (function (){var G__33187 = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364);
var G__33188 = inst_33162;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__33187,G__33188) : trigger_event.call(null,G__33187,G__33188));
})();
var state_33171__$1 = state_33171;
var statearr_33189_33216 = state_33171__$1;
(statearr_33189_33216[(2)] = inst_33163);

(statearr_33189_33216[(1)] = (10));


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
});
return (function() {
var crumborn$view$editor$editor_$_state_machine__25724__auto__ = null;
var crumborn$view$editor$editor_$_state_machine__25724__auto____0 = (function (){
var statearr_33190 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33190[(0)] = crumborn$view$editor$editor_$_state_machine__25724__auto__);

(statearr_33190[(1)] = (1));

return statearr_33190;
});
var crumborn$view$editor$editor_$_state_machine__25724__auto____1 = (function (state_33171){
while(true){
var ret_value__25725__auto__ = (function (){try{while(true){
var result__25726__auto__ = switch__25723__auto__(state_33171);
if(cljs.core.keyword_identical_QMARK_(result__25726__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25726__auto__;
}
break;
}
}catch (e33191){if((e33191 instanceof Object)){
var ex__25727__auto__ = e33191;
var statearr_33192_33217 = state_33171;
(statearr_33192_33217[(5)] = ex__25727__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_33171);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33191;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25725__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33218 = state_33171;
state_33171 = G__33218;
continue;
} else {
return ret_value__25725__auto__;
}
break;
}
});
crumborn$view$editor$editor_$_state_machine__25724__auto__ = function(state_33171){
switch(arguments.length){
case 0:
return crumborn$view$editor$editor_$_state_machine__25724__auto____0.call(this);
case 1:
return crumborn$view$editor$editor_$_state_machine__25724__auto____1.call(this,state_33171);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$view$editor$editor_$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$view$editor$editor_$_state_machine__25724__auto____0;
crumborn$view$editor$editor_$_state_machine__25724__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$view$editor$editor_$_state_machine__25724__auto____1;
return crumborn$view$editor$editor_$_state_machine__25724__auto__;
})()
})();
var state__25763__auto__ = (function (){var statearr_33193 = (f__25762__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25762__auto__.cljs$core$IFn$_invoke$arity$0() : f__25762__auto__.call(null));
(statearr_33193[(6)] = c__25761__auto__);

return statearr_33193;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25763__auto__);
}));

return c__25761__auto__;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__33194 = cljs.core.deref(crumborn.view.editor.state_atom);
var map__33194__$1 = (((((!((map__33194 == null))))?(((((map__33194.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33194.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33194):map__33194);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33194__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33194__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33194__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),"toolbar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor-input",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return crumborn.interop.get_element_by_id("editor-input").focus();
}),new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"wrap","wrap",851669987),"soft",new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"resize","resize",297367086),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor-area",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return crumborn.interop.get_element_by_id("editor-input").focus();
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join(''),"none","transparent",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),"text","Monaco","none","absolute","monospace",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null))),"px"].join('')])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"active-row",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null)) * crumborn.view.editor.y__GT_row(cljs.core.deref(crumborn.view.editor.state_atom),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null))))),"px"].join(''),"none",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),"#ecece7","text",(-1),"none","absolute","monospace",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')])], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,line){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"word-break","word-break",-407281356),"break-all",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),line], null)], null);
}),buffer))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"selections",new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(-1),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null))),"px"].join(''),new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text",new cljs.core.Keyword(null,"line-height","line-height",1870784992),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__33196){
var map__33197 = p__33196;
var map__33197__$1 = (((((!((map__33197 == null))))?(((((map__33197.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33197.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__33197):map__33197);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33197__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33197__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__33197__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#B5D5FF",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),"px"].join('')], null)], null)], null);
}),selections))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"caret",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],[["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null)) * crumborn.view.editor.y__GT_row(cljs.core.deref(crumborn.view.editor.state_atom),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null))))),"px)"].join(''),"typing 3.5s steps(40, end),  blink-caret .75s step-end infinite","1px","text","0.3","block","absolute","1px solid black",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')])], null)], null),(cljs.core.truth_(char_width)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ruler",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join('')], null)], null),"!"], null))], null);
})], null));
});

//# sourceMappingURL=crumborn.view.editor.js.map
