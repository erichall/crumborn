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
crumborn.view.editor.editor_width = (function crumborn$view$editor$editor_width(p__42534){
var map__42535 = p__42534;
var map__42535__$1 = (((((!((map__42535 == null))))?(((((map__42535.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42535.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42535):map__42535);
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42535__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return new cljs.core.Keyword(null,"editor-width","editor-width",156837177).cljs$core$IFn$_invoke$arity$1(styles);
});
crumborn.view.editor.listen = (function crumborn$view$editor$listen(element,type){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3(element,type,(function (evt){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(out,evt);
}));

return out;
});
crumborn.view.editor.get_row = (function crumborn$view$editor$get_row(p__42537,row_number){
var map__42538 = p__42537;
var map__42538__$1 = (((((!((map__42538 == null))))?(((((map__42538.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42538.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42538):map__42538);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42538__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(buffer,row_number);
});
crumborn.view.editor.get_row_length = (function crumborn$view$editor$get_row_length(state,row_number){
return cljs.core.count(crumborn.view.editor.get_row(state,row_number));
});
crumborn.view.editor.get_row_width = (function crumborn$view$editor$get_row_width(p__42540,row_num){
var map__42541 = p__42540;
var map__42541__$1 = (((((!((map__42541 == null))))?(((((map__42541.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42541.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42541):map__42541);
var state = map__42541__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42541__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
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
crumborn.view.editor.count_rows = (function crumborn$view$editor$count_rows(p__42543){
var map__42544 = p__42543;
var map__42544__$1 = (((((!((map__42544 == null))))?(((((map__42544.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42544.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42544):map__42544);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42544__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
return cljs.core.count(buffer);
});
crumborn.view.editor.row_id = (function crumborn$view$editor$row_id(row_number){
return ["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(row_number)].join('');
});
crumborn.view.editor.row_heights = (function crumborn$view$editor$row_heights(p__42546){
var map__42547 = p__42546;
var map__42547__$1 = (((((!((map__42547 == null))))?(((((map__42547.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42547.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42547):map__42547);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42547__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__42549){
var vec__42550 = p__42549;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42550,(0),null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42550,(1),null);
var map__42553 = styles;
var map__42553__$1 = (((((!((map__42553 == null))))?(((((map__42553.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42553.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42553):map__42553);
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var editor_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42553__$1,new cljs.core.Keyword(null,"editor-width","editor-width",156837177));
var span = (function (){var G__42555 = (1);
var G__42556 = (function (){var G__42557 = ((char_width * cljs.core.count(row)) / editor_width);
return Math.ceil(G__42557);
})();
return Math.max(G__42555,G__42556);
})();
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"row","row",-570139521),i,new cljs.core.Keyword(null,"span","span",1394872991),span,new cljs.core.Keyword(null,"inner-lines","inner-lines",930263625),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return ((r * i) * line_height);
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(span + (1)))),new cljs.core.Keyword(null,"total-height","total-height",1751510523),(span * line_height),new cljs.core.Keyword(null,"span-start","span-start",-60020793),(i * line_height),new cljs.core.Keyword(null,"span-end","span-end",-1371378399),((i * line_height) + (span * line_height))], null));
}),cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(buffer)),buffer));
});
crumborn.view.editor.y__GT_row = (function crumborn$view$editor$y__GT_row(p__42558,y){
var map__42559 = p__42558;
var map__42559__$1 = (((((!((map__42559 == null))))?(((((map__42559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42559.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42559):map__42559);
var state = map__42559__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42559__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42559__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var a = cljs.core.some((function (p__42561){
var map__42562 = p__42561;
var map__42562__$1 = (((((!((map__42562 == null))))?(((((map__42562.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42562.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42562):map__42562);
var s = map__42562__$1;
var span_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562__$1,new cljs.core.Keyword(null,"span-start","span-start",-60020793));
var span_end = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42562__$1,new cljs.core.Keyword(null,"span-end","span-end",-1371378399));
if((((y >= span_start)) && ((y < span_end)))){
return s;
} else {
return null;
}
}),crumborn.view.editor.row_heights(state));
var b = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (prev,cur){
if(((function (){var G__42564 = (cur - y);
return Math.abs(G__42564);
})() < (function (){var G__42565 = (prev - y);
return Math.abs(G__42565);
})())){
return cur;
} else {
return prev;
}
}),(-1),new cljs.core.Keyword(null,"inner-lines","inner-lines",930263625).cljs$core$IFn$_invoke$arity$1(a));
return new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(a);
});
crumborn.view.editor.clamp_to_chars = (function crumborn$view$editor$clamp_to_chars(p__42566,row_number,value){
var map__42567 = p__42566;
var map__42567__$1 = (((((!((map__42567 == null))))?(((((map__42567.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42567.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42567):map__42567);
var state = map__42567__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42567__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
if(crumborn.interop.not_nan_QMARK_(value)){
} else {
throw (new Error("Assert failed: (interop/not-nan? value)"));
}

var _PERCENT_ = (function (){var chars = crumborn.view.editor.get_row_length(state,row_number);
return (char_width * (function (){var x__4276__auto__ = chars;
var y__4277__auto__ = (function (){var G__42569 = (value / char_width);
return Math.round(G__42569);
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
crumborn.view.editor.clamp_cursor = (function crumborn$view$editor$clamp_cursor(state,p__42570){
var map__42571 = p__42570;
var map__42571__$1 = (((((!((map__42571 == null))))?(((((map__42571.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42571.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42571):map__42571);
var mouse = map__42571__$1;
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42571__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(mouse,new cljs.core.Keyword(null,"x","x",2099068185),crumborn.view.editor.clamp_to_chars(state,crumborn.view.editor.y__GT_row(state,y),x));
});
crumborn.view.editor.get_active_row = (function crumborn$view$editor$get_active_row(p__42573){
var map__42574 = p__42573;
var map__42574__$1 = (((((!((map__42574 == null))))?(((((map__42574.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42574.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42574):map__42574);
var state = map__42574__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42574__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return crumborn.view.editor.get_row(state,crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor)));
});
/**
 * Increase cursor position x with one char
 */
crumborn.view.editor.inc_cursor_x = (function crumborn$view$editor$inc_cursor_x(p__42577){
var map__42578 = p__42577;
var map__42578__$1 = (((((!((map__42578 == null))))?(((((map__42578.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42578.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42578):map__42578);
var state = map__42578__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42578__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__42576_SHARP_){
return (char_width + p1__42576_SHARP_);
}));
});
/**
 * Decrease cursor position x with one char
 */
crumborn.view.editor.dec_cursor_x = (function crumborn$view$editor$dec_cursor_x(p__42581){
var map__42582 = p__42581;
var map__42582__$1 = (((((!((map__42582 == null))))?(((((map__42582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42582.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42582):map__42582);
var state = map__42582__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42582__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),(function (p1__42580_SHARP_){
var x__4273__auto__ = (0);
var y__4274__auto__ = crumborn.view.editor.clamp_to_chars(state,active_line,(p1__42580_SHARP_ - char_width));
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
crumborn.view.editor.set_cursor_start = (function crumborn$view$editor$set_cursor_start(p__42584){
var map__42585 = p__42584;
var map__42585__$1 = (((((!((map__42585 == null))))?(((((map__42585.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42585.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42585):map__42585);
var state = map__42585__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42585__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
return crumborn.view.editor.set_cursor(state,(0),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
});
crumborn.view.editor.x__GT_char_pos = (function crumborn$view$editor$x__GT_char_pos(p__42587,x){
var map__42588 = p__42587;
var map__42588__$1 = (((((!((map__42588 == null))))?(((((map__42588.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42588.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42588):map__42588);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42588__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return (x / char_width);
});
crumborn.view.editor.dec_cursor_y = (function crumborn$view$editor$dec_cursor_y(y,line_height){
if((y <= line_height)){
return y;
} else {
return (y - line_height);
}
});
crumborn.view.editor.inc_cursor_y = (function crumborn$view$editor$inc_cursor_y(p__42591){
var map__42592 = p__42591;
var map__42592__$1 = (((((!((map__42592 == null))))?(((((map__42592.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42592.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42592):map__42592);
var state = map__42592__$1;
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42592__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null),(function (p1__42590_SHARP_){
return (p1__42590_SHARP_ + new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(styles));
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
}catch (e42594){var t__8952__auto__ = e42594;
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
}catch (e42595){var t__8952__auto__ = e42595;
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
}catch (e42596){var t__8952__auto__ = e42596;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-last-char","remove-last-char",1878190374,null),"hej"),"he"),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.row_overflow_QMARK_ = (function crumborn$view$editor$row_overflow_QMARK_(p__42597,row){
var map__42598 = p__42597;
var map__42598__$1 = (((((!((map__42598 == null))))?(((((map__42598.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42598.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42598):map__42598);
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42598__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
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
}catch (e42600){var t__8952__auto__ = e42600;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"row-overflow?","row-overflow?",1305574615,null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),(11),new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editor-width","editor-width",156837177),(100)], null)], null),cljs.core.list(new cljs.core.Symbol("s","join","s/join",881670040,null),cljs.core.list(new cljs.core.Symbol(null,"repeat","repeat",-1821743682,null),(9),"a"))),true),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.remove_row = (function crumborn$view$editor$remove_row(p__42601,row_number){
var map__42602 = p__42601;
var map__42602__$1 = (((((!((map__42602 == null))))?(((((map__42602.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42602.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42602):map__42602);
var state = map__42602__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42602__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
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
}catch (e42604){var t__8952__auto__ = e42604;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"remove-row","remove-row",665181062,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2","r3"], null)], null),(1)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r3"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.insert_row_at = (function crumborn$view$editor$insert_row_at(p__42605,row_number,new_row){
var map__42606 = p__42605;
var map__42606__$1 = (((((!((map__42606 == null))))?(((((map__42606.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42606.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42606):map__42606);
var state = map__42606__$1;
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42606__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([" WHAT ON EARTH ",buffer,row_number,new_row], 0));

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
}catch (e42608){var t__8952__auto__ = e42608;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"insert-row-at","insert-row-at",910323685,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","r2"], null)], null),(1),"new-row"),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"buffer","buffer",617295198),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["r1","new-row","r2"], null)], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.cursor_end_of_row_QMARK_ = (function crumborn$view$editor$cursor_end_of_row_QMARK_(p__42609){
var map__42610 = p__42609;
var map__42610__$1 = (((((!((map__42610 == null))))?(((((map__42610.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42610.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42610):map__42610);
var state = map__42610__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42610__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42610__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
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
crumborn.view.editor.split_row_at = (function crumborn$view$editor$split_row_at(row,i){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(row,(0),i),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(row,i)], null);
});
crumborn.view.editor.split_row_at.cljs$lang$test = (function (){
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.split_row_at("hello everybody",(4)),(new cljs.core.List(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hell","o everybody"], null),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split-row-at","split-row-at",-690888832,null),"hello everybody",(4)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hell","o everybody"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split-row-at","split-row-at",-690888832,null),"hello everybody",(4)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hell","o everybody"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e42612){var t__8952__auto__ = e42612;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"split-row-at","split-row-at",-690888832,null),"hello everybody",(4)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["hell","o everybody"], null)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.process_char = (function crumborn$view$editor$process_char(p__42613,key){
var map__42614 = p__42613;
var map__42614__$1 = (((((!((map__42614 == null))))?(((((map__42614.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42614.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42614):map__42614);
var state = map__42614__$1;
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42614__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var row = crumborn.view.editor.get_active_row(state);
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
var cursor_x = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null));
var pos = crumborn.view.editor.x__GT_char_pos(state,cursor_x);
var new_row = crumborn.view.editor.str_insert(row,key,pos);
var overflow_QMARK_ = crumborn.view.editor.row_overflow_QMARK_(state,row);
var eor_QMARK_ = crumborn.view.editor.cursor_end_of_row_QMARK_(state);
if(((overflow_QMARK_) && (eor_QMARK_))){
return crumborn.view.editor.inc_cursor_x(crumborn.view.editor.set_cursor_start(crumborn.view.editor.inc_cursor_y(crumborn.view.editor.insert_row_at(state,(active_line + (1)),key))));
} else {
if(((overflow_QMARK_) && ((!(eor_QMARK_))))){
var vec__42616 = crumborn.view.editor.split_row_at(row,cursor_x);
var first = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42616,(0),null);
var rest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42616,(1),null);
var _ = cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["FIRST: ",first,"AND REST",rest," POS IS ",pos], 0));
var a = crumborn.view.editor.inc_cursor_x(crumborn.view.editor.insert_row_at(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(key),crumborn.view.editor.remove_last_char(rest)].join('')),(active_line + (1)),cljs.core.last(row)));
cljs.pprint.pprint.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"buffer","buffer",617295198).cljs$core$IFn$_invoke$arity$1(a));

return a;
} else {
return crumborn.view.editor.inc_cursor_x(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),crumborn.view.editor.str_insert(row,key,pos)));

}
}
});
crumborn.view.editor.empty_row_QMARK_ = (function crumborn$view$editor$empty_row_QMARK_(state,row_number){
return cljs.core.empty_QMARK_(crumborn.view.editor.get_row(state,row_number));
});
crumborn.view.editor.process_backspace = (function crumborn$view$editor$process_backspace(p__42620){
var map__42621 = p__42620;
var map__42621__$1 = (((((!((map__42621 == null))))?(((((map__42621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42621):map__42621);
var state = map__42621__$1;
var cursor = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"cursor","cursor",1011937484));
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42621__$1,new cljs.core.Keyword(null,"styles","styles",1954480375));
var active_line = crumborn.view.editor.y__GT_row(state,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor));
if(crumborn.view.editor.empty_row_QMARK_(state,active_line)){
return cljs.core.assoc_in(cljs.core.assoc_in(cljs.core.update.cljs$core$IFn$_invoke$arity$3(crumborn.view.editor.remove_row(state,active_line),new cljs.core.Keyword(null,"active-line","active-line",-1837778552),(function (p1__42619_SHARP_){
var x__4273__auto__ = (0);
var y__4274__auto__ = (new cljs.core.Keyword(null,"active-line","active-line",-1837778552).cljs$core$IFn$_invoke$arity$1(p1__42619_SHARP_) - (1));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null),crumborn.view.editor.dec_cursor_y(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cursor),new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(styles))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null),crumborn.view.editor.set_cursor_end_of_row(state,new cljs.core.Keyword(null,"active-line","active-line",-1837778552).cljs$core$IFn$_invoke$arity$1(state)));
} else {
var pos = crumborn.view.editor.x__GT_char_pos(state,(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cursor) - (1)));
return crumborn.view.editor.dec_cursor_x(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"buffer","buffer",617295198),active_line], null),crumborn.view.editor.remove_char_at(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(buffer,active_line),pos)));

}
});
crumborn.view.editor.process_key_down = (function crumborn$view$editor$process_key_down(state,p__42623){
var map__42624 = p__42623;
var map__42624__$1 = (((((!((map__42624 == null))))?(((((map__42624.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42624.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42624):map__42624);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42624__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var pred__42626 = cljs.core.re_matches;
var expr__42627 = key;
if(cljs.core.truth_((function (){var G__42629 = /Enter/;
var G__42630 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42629,G__42630) : pred__42626.call(null,G__42629,G__42630));
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.conj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
} else {
if(cljs.core.truth_((function (){var G__42631 = /Shift/;
var G__42632 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42631,G__42632) : pred__42626.call(null,G__42631,G__42632));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42633 = /Meta/;
var G__42634 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42633,G__42634) : pred__42626.call(null,G__42633,G__42634));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42635 = /ArrowRight/;
var G__42636 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42635,G__42636) : pred__42626.call(null,G__42635,G__42636));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42637 = /ArrowLeft/;
var G__42638 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42637,G__42638) : pred__42626.call(null,G__42637,G__42638));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42639 = /ArrowUp/;
var G__42640 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42639,G__42640) : pred__42626.call(null,G__42639,G__42640));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42641 = /ArrowDown/;
var G__42642 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42641,G__42642) : pred__42626.call(null,G__42641,G__42642));
})())){
return null;
} else {
if(cljs.core.truth_((function (){var G__42643 = /Backspace/;
var G__42644 = expr__42627;
return (pred__42626.cljs$core$IFn$_invoke$arity$2 ? pred__42626.cljs$core$IFn$_invoke$arity$2(G__42643,G__42644) : pred__42626.call(null,G__42643,G__42644));
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
crumborn.view.editor.process_key_up = (function crumborn$view$editor$process_key_up(state,p__42645){
var map__42646 = p__42645;
var map__42646__$1 = (((((!((map__42646 == null))))?(((((map__42646.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42646.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42646):map__42646);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42646__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"keys-down","keys-down",318034904),cljs.core.disj,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key));
});
crumborn.view.editor.process_key = (function crumborn$view$editor$process_key(state,p__42648){
var map__42649 = p__42648;
var map__42649__$1 = (((((!((map__42649 == null))))?(((((map__42649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42649.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42649):map__42649);
var data = map__42649__$1;
var key_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42649__$1,new cljs.core.Keyword(null,"key-type","key-type",-1494232916));
var pred__42651 = cljs.core._EQ_;
var expr__42652 = key_type;
if(cljs.core.truth_((function (){var G__42654 = new cljs.core.Keyword(null,"keydown","keydown",-629268186);
var G__42655 = expr__42652;
return (pred__42651.cljs$core$IFn$_invoke$arity$2 ? pred__42651.cljs$core$IFn$_invoke$arity$2(G__42654,G__42655) : pred__42651.call(null,G__42654,G__42655));
})())){
return crumborn.view.editor.process_key_down(state,data);
} else {
if(cljs.core.truth_((function (){var G__42656 = new cljs.core.Keyword(null,"keyup","keyup",-794526927);
var G__42657 = expr__42652;
return (pred__42651.cljs$core$IFn$_invoke$arity$2 ? pred__42651.cljs$core$IFn$_invoke$arity$2(G__42656,G__42657) : pred__42651.call(null,G__42656,G__42657));
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
var map__42658 = crumborn.interop.get_bounding_client_rect(el);
var map__42658__$1 = (((((!((map__42658 == null))))?(((((map__42658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42658.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42658):map__42658);
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42658__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42658__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var x = crumborn.interop.mouse_x(js_evt);
var y = crumborn.interop.mouse_y(js_evt);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(x - left),new cljs.core.Keyword(null,"y","y",-1757859776),(y - top),new cljs.core.Keyword(null,"x-screen","x-screen",192702489),x,new cljs.core.Keyword(null,"y-screen","y-screen",-343099654),y], null);
});
crumborn.view.editor.clamp_to_row = (function crumborn$view$editor$clamp_to_row(row_height,y){
return ((function (){var G__42660 = (y / row_height);
return Math.floor(G__42660);
})() | (0));
});
crumborn.view.editor.clamp_to_row.cljs$lang$test = (function (){
try{var values__8921__auto___42839 = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(18)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__8922__auto___42840 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___42839);
if(cljs.core.truth_(result__8922__auto___42840)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___42839),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___42839),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42661){var t__8952__auto___42841 = e42661;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(18)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___42841,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto___42842 = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(0)),(new cljs.core.List(null,(0),null,(1),null)),(2),null));
var result__8922__auto___42843 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto___42842);
if(cljs.core.truth_(result__8922__auto___42843)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto___42842),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto___42842),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

}catch (e42662){var t__8952__auto___42844 = e42662;
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(0)),(0)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto___42844,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}
try{var values__8921__auto__ = (new cljs.core.List(null,crumborn.view.editor.clamp_to_row((19),(38)),(new cljs.core.List(null,(2),null,(1),null)),(2),null));
var result__8922__auto__ = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,values__8921__auto__);
if(cljs.core.truth_(result__8922__auto__)){
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pass","pass",1574159993),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),cljs.core.cons(cljs.core._EQ_,values__8921__auto__),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
} else {
cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"fail","fail",1706214930),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),(new cljs.core.List(null,new cljs.core.Symbol(null,"not","not",1044554643,null),(new cljs.core.List(null,cljs.core.cons(new cljs.core.Symbol(null,"=","=",-1501502141,null),values__8921__auto__),null,(1),null)),(2),null)),new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}

return result__8922__auto__;
}catch (e42663){var t__8952__auto__ = e42663;
return cljs.test.do_report(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"expected","expected",1583670997),cljs.core.list(new cljs.core.Symbol(null,"=","=",-1501502141,null),cljs.core.list(new cljs.core.Symbol(null,"clamp-to-row","clamp-to-row",448883284,null),(19),(38)),(2)),new cljs.core.Keyword(null,"actual","actual",107306363),t__8952__auto__,new cljs.core.Keyword(null,"message","message",-406056002),null], null));
}});
crumborn.view.editor.in_editor_QMARK_ = (function crumborn$view$editor$in_editor_QMARK_(p__42664){
var map__42665 = p__42664;
var map__42665__$1 = (((((!((map__42665 == null))))?(((((map__42665.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42665.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42665):map__42665);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42665__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42665__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
return (((x >= (0))) && ((x <= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null)))) && ((y >= (0))) && ((y <= cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null)))));
});
crumborn.view.editor.process_mouse_down = (function crumborn$view$editor$process_mouse_down(state,p__42667){
var map__42668 = p__42667;
var map__42668__$1 = (((((!((map__42668 == null))))?(((((map__42668.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42668.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42668):map__42668);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42668__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
var mouse = crumborn.view.editor.get_relative_mouse_cords(js_evt,crumborn.view.editor.get_dom_el("editor-area"));
if(crumborn.view.editor.in_editor_QMARK_(mouse)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"start","start",-355208981)], null),mouse),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mouse","mouse",478628972),new cljs.core.Keyword(null,"is-down","is-down",-961831145)], null),true),new cljs.core.Keyword(null,"cursor","cursor",1011937484),crumborn.view.editor.clamp_cursor(state,mouse)),new cljs.core.Keyword(null,"selections","selections",-1277610233),cljs.core.PersistentVector.EMPTY);
} else {
return null;
}
});
crumborn.view.editor.process_mouse_up = (function crumborn$view$editor$process_mouse_up(state,p__42670){
var map__42671 = p__42670;
var map__42671__$1 = (((((!((map__42671 == null))))?(((((map__42671.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42671.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42671):map__42671);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42671__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
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
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),crumborn.view.editor.clamp_to_chars(state,fixed_row,(function (){var x__4276__auto__ = (function (){var G__42674 = (fixed_x - moving_x);
return Math.abs(G__42674);
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
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__42673_SHARP_){
return ((p1__42673_SHARP_ + (1)) + (function (){var x__4276__auto__ = fixed_row;
var y__4277__auto__ = moving_row;
return ((x__4276__auto__ < y__4277__auto__) ? x__4276__auto__ : y__4277__auto__);
})());
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1((function (){var x__4273__auto__ = (0);
var y__4274__auto__ = (crumborn.view.editor.ge_sub(fixed_row,moving_row) - (1));
return ((x__4273__auto__ > y__4274__auto__) ? x__4273__auto__ : y__4274__auto__);
})()))),(((fixed_row > moving_row))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.selection_x__GT_end(state,moving_row,moving_x,moving_row_width,line_height),crumborn.view.editor.selection_zero__GT_x(state,fixed_row,fixed_x,line_height)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.selection_x__GT_end(state,fixed_row,fixed_x,fixed_row_width,line_height),crumborn.view.editor.selection_zero__GT_x(state,moving_row,moving_x,line_height)], null)));
}
});
crumborn.view.editor.process_mouse_move = (function crumborn$view$editor$process_mouse_move(state,p__42675){
var map__42676 = p__42675;
var map__42676__$1 = (((((!((map__42676 == null))))?(((((map__42676.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42676.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42676):map__42676);
var js_evt = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42676__$1,new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416));
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
crumborn.view.editor.handle_mouse_event = (function crumborn$view$editor$handle_mouse_event(state,p__42678){
var map__42679 = p__42678;
var map__42679__$1 = (((((!((map__42679 == null))))?(((((map__42679.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42679.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42679):map__42679);
var data = map__42679__$1;
var mouse_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42679__$1,new cljs.core.Keyword(null,"mouse-type","mouse-type",-1777318068));
var pred__42681 = cljs.core._EQ_;
var expr__42682 = mouse_type;
if(cljs.core.truth_((function (){var G__42684 = new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734);
var G__42685 = expr__42682;
return (pred__42681.cljs$core$IFn$_invoke$arity$2 ? pred__42681.cljs$core$IFn$_invoke$arity$2(G__42684,G__42685) : pred__42681.call(null,G__42684,G__42685));
})())){
return crumborn.view.editor.process_mouse_move(state,data);
} else {
if(cljs.core.truth_((function (){var G__42686 = new cljs.core.Keyword(null,"mousedown","mousedown",1391242074);
var G__42687 = expr__42682;
return (pred__42681.cljs$core$IFn$_invoke$arity$2 ? pred__42681.cljs$core$IFn$_invoke$arity$2(G__42686,G__42687) : pred__42681.call(null,G__42686,G__42687));
})())){
return crumborn.view.editor.process_mouse_down(state,data);
} else {
if(cljs.core.truth_((function (){var G__42688 = new cljs.core.Keyword(null,"mouseup","mouseup",350619456);
var G__42689 = expr__42682;
return (pred__42681.cljs$core$IFn$_invoke$arity$2 ? pred__42681.cljs$core$IFn$_invoke$arity$2(G__42688,G__42689) : pred__42681.call(null,G__42688,G__42689));
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

var pred__42690 = cljs.core._EQ_;
var expr__42691 = name;
if(cljs.core.truth_((function (){var G__42693 = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364);
var G__42694 = expr__42691;
return (pred__42690.cljs$core$IFn$_invoke$arity$2 ? pred__42690.cljs$core$IFn$_invoke$arity$2(G__42693,G__42694) : pred__42690.call(null,G__42693,G__42694));
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
if(cljs.core.truth_((function (){var G__42695 = new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181);
var G__42696 = expr__42691;
return (pred__42690.cljs$core$IFn$_invoke$arity$2 ? pred__42690.cljs$core$IFn$_invoke$arity$2(G__42695,G__42696) : pred__42690.call(null,G__42695,G__42696));
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
if(cljs.core.truth_((function (){var G__42697 = new cljs.core.Keyword(null,"measure-char","measure-char",-2020995091);
var G__42698 = expr__42691;
return (pred__42690.cljs$core$IFn$_invoke$arity$2 ? pred__42690.cljs$core$IFn$_invoke$arity$2(G__42697,G__42698) : pred__42690.call(null,G__42697,G__42698));
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
var G__42699_42845 = new cljs.core.Keyword(null,"measure-char","measure-char",-2020995091);
var G__42700_42846 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"char-width","char-width",1545126729),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(crumborn.interop.get_bounding_client_rect(crumborn.interop.get_element_by_id("ruler")))], null);
(trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__42699_42845,G__42700_42846) : trigger_event.call(null,G__42699_42845,G__42700_42846));
}

var chans = cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [crumborn.view.editor.listen(crumborn.interop.get_element_by_id("editor-input"),"keydown"),crumborn.view.editor.listen(crumborn.interop.get_element_by_id("editor-input"),"keyup"),crumborn.view.editor.listen(crumborn.interop.document,"mousedown"),crumborn.view.editor.listen(crumborn.interop.document,"mouseup"),crumborn.view.editor.listen(crumborn.interop.document,"mousemove")], null));
var c__25675__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__25676__auto__ = (function (){var switch__25637__auto__ = (function (state_42735){
var state_val_42736 = (state_42735[(1)]);
if((state_val_42736 === (7))){
var inst_42705 = (state_42735[(7)]);
var inst_42717 = (state_42735[(2)]);
var inst_42718 = [new cljs.core.Keyword(null,"keydown","keydown",-629268186),null,new cljs.core.Keyword(null,"keyup","keyup",-794526927),null];
var inst_42719 = (new cljs.core.PersistentArrayMap(null,2,inst_42718,null));
var inst_42720 = (new cljs.core.PersistentHashSet(null,inst_42719,null));
var inst_42721 = cljs.core.contains_QMARK_(inst_42720,inst_42705);
var state_42735__$1 = (function (){var statearr_42737 = state_42735;
(statearr_42737[(8)] = inst_42717);

return statearr_42737;
})();
if(inst_42721){
var statearr_42738_42847 = state_42735__$1;
(statearr_42738_42847[(1)] = (8));

} else {
var statearr_42739_42848 = state_42735__$1;
(statearr_42739_42848[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (1))){
var state_42735__$1 = state_42735;
var statearr_42740_42849 = state_42735__$1;
(statearr_42740_42849[(2)] = null);

(statearr_42740_42849[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (4))){
var inst_42703 = (state_42735[(9)]);
var inst_42705 = (state_42735[(7)]);
var inst_42703__$1 = (state_42735[(2)]);
var inst_42704 = inst_42703__$1.type;
var inst_42705__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(inst_42704);
var inst_42706 = [new cljs.core.Keyword(null,"mouseup","mouseup",350619456),null,new cljs.core.Keyword(null,"mousemove","mousemove",-1077794734),null,new cljs.core.Keyword(null,"mousedown","mousedown",1391242074),null];
var inst_42707 = (new cljs.core.PersistentArrayMap(null,3,inst_42706,null));
var inst_42708 = (new cljs.core.PersistentHashSet(null,inst_42707,null));
var inst_42709 = cljs.core.contains_QMARK_(inst_42708,inst_42705__$1);
var state_42735__$1 = (function (){var statearr_42741 = state_42735;
(statearr_42741[(9)] = inst_42703__$1);

(statearr_42741[(7)] = inst_42705__$1);

return statearr_42741;
})();
if(inst_42709){
var statearr_42742_42850 = state_42735__$1;
(statearr_42742_42850[(1)] = (5));

} else {
var statearr_42743_42851 = state_42735__$1;
(statearr_42743_42851[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (6))){
var state_42735__$1 = state_42735;
var statearr_42744_42852 = state_42735__$1;
(statearr_42744_42852[(2)] = null);

(statearr_42744_42852[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (3))){
var inst_42733 = (state_42735[(2)]);
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.return_chan(state_42735__$1,inst_42733);
} else {
if((state_val_42736 === (2))){
var state_42735__$1 = state_42735;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_42735__$1,(4),chans);
} else {
if((state_val_42736 === (9))){
var state_42735__$1 = state_42735;
var statearr_42745_42853 = state_42735__$1;
(statearr_42745_42853[(2)] = null);

(statearr_42745_42853[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (5))){
var inst_42703 = (state_42735[(9)]);
var inst_42705 = (state_42735[(7)]);
var inst_42711 = [new cljs.core.Keyword(null,"mouse-type","mouse-type",-1777318068),new cljs.core.Keyword(null,"js-evt","js-evt",-1534435416)];
var inst_42712 = [inst_42705,inst_42703];
var inst_42713 = cljs.core.PersistentHashMap.fromArrays(inst_42711,inst_42712);
var inst_42714 = (function (){var G__42746 = new cljs.core.Keyword(null,"mouse-event","mouse-event",189077181);
var G__42747 = inst_42713;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__42746,G__42747) : trigger_event.call(null,G__42746,G__42747));
})();
var state_42735__$1 = state_42735;
var statearr_42748_42854 = state_42735__$1;
(statearr_42748_42854[(2)] = inst_42714);

(statearr_42748_42854[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (10))){
var inst_42730 = (state_42735[(2)]);
var state_42735__$1 = (function (){var statearr_42749 = state_42735;
(statearr_42749[(10)] = inst_42730);

return statearr_42749;
})();
var statearr_42750_42855 = state_42735__$1;
(statearr_42750_42855[(2)] = null);

(statearr_42750_42855[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_42736 === (8))){
var inst_42703 = (state_42735[(9)]);
var inst_42705 = (state_42735[(7)]);
var inst_42723 = [new cljs.core.Keyword(null,"key-type","key-type",-1494232916),new cljs.core.Keyword(null,"key","key",-1516042587)];
var inst_42724 = inst_42703.key;
var inst_42725 = [inst_42705,inst_42724];
var inst_42726 = cljs.core.PersistentHashMap.fromArrays(inst_42723,inst_42725);
var inst_42727 = (function (){var G__42751 = new cljs.core.Keyword(null,"key-pressed","key-pressed",-757100364);
var G__42752 = inst_42726;
return (trigger_event.cljs$core$IFn$_invoke$arity$2 ? trigger_event.cljs$core$IFn$_invoke$arity$2(G__42751,G__42752) : trigger_event.call(null,G__42751,G__42752));
})();
var state_42735__$1 = state_42735;
var statearr_42753_42856 = state_42735__$1;
(statearr_42753_42856[(2)] = inst_42727);

(statearr_42753_42856[(1)] = (10));


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
var crumborn$view$editor$editor_$_state_machine__25638__auto__ = null;
var crumborn$view$editor$editor_$_state_machine__25638__auto____0 = (function (){
var statearr_42754 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_42754[(0)] = crumborn$view$editor$editor_$_state_machine__25638__auto__);

(statearr_42754[(1)] = (1));

return statearr_42754;
});
var crumborn$view$editor$editor_$_state_machine__25638__auto____1 = (function (state_42735){
while(true){
var ret_value__25639__auto__ = (function (){try{while(true){
var result__25640__auto__ = switch__25637__auto__(state_42735);
if(cljs.core.keyword_identical_QMARK_(result__25640__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__25640__auto__;
}
break;
}
}catch (e42755){if((e42755 instanceof Object)){
var ex__25641__auto__ = e42755;
var statearr_42756_42857 = state_42735;
(statearr_42756_42857[(5)] = ex__25641__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_42735);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e42755;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__25639__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__42858 = state_42735;
state_42735 = G__42858;
continue;
} else {
return ret_value__25639__auto__;
}
break;
}
});
crumborn$view$editor$editor_$_state_machine__25638__auto__ = function(state_42735){
switch(arguments.length){
case 0:
return crumborn$view$editor$editor_$_state_machine__25638__auto____0.call(this);
case 1:
return crumborn$view$editor$editor_$_state_machine__25638__auto____1.call(this,state_42735);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
crumborn$view$editor$editor_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$0 = crumborn$view$editor$editor_$_state_machine__25638__auto____0;
crumborn$view$editor$editor_$_state_machine__25638__auto__.cljs$core$IFn$_invoke$arity$1 = crumborn$view$editor$editor_$_state_machine__25638__auto____1;
return crumborn$view$editor$editor_$_state_machine__25638__auto__;
})()
})();
var state__25677__auto__ = (function (){var statearr_42757 = (f__25676__auto__.cljs$core$IFn$_invoke$arity$0 ? f__25676__auto__.cljs$core$IFn$_invoke$arity$0() : f__25676__auto__.call(null));
(statearr_42757[(6)] = c__25675__auto__);

return statearr_42757;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__25677__auto__);
}));

return c__25675__auto__;
}),new cljs.core.Keyword(null,"reagent-render","reagent-render",-985383853),(function (){
var map__42758 = cljs.core.deref(crumborn.view.editor.state_atom);
var map__42758__$1 = (((((!((map__42758 == null))))?(((((map__42758.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42758.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42758):map__42758);
var buffer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"buffer","buffer",617295198));
var selections = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"selections","selections",-1277610233));
var char_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42758__$1,new cljs.core.Keyword(null,"char-width","char-width",1545126729));
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"margin-bottom","margin-bottom",388334941),"20px"], null)], null),"toolbar"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor-input",new cljs.core.Keyword(null,"on-blur","on-blur",814300747),(function (){
return crumborn.interop.get_element_by_id("editor-input").focus();
}),new cljs.core.Keyword(null,"rows","rows",850049680),(1),new cljs.core.Keyword(null,"wrap","wrap",851669987),"soft",new cljs.core.Keyword(null,"spell-check","spell-check",-2060352968),false,new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"width","width",-384071477),"1px",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"height","height",1025178622),"1px",new cljs.core.Keyword(null,"opacity","opacity",397153780),(0),new cljs.core.Keyword(null,"border","border",1444987323),"none",new cljs.core.Keyword(null,"resize","resize",297367086),"none",new cljs.core.Keyword(null,"outline","outline",793464534),"none"], null)], null)], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"id","id",-1388402092),"editor-area",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(0),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return crumborn.interop.get_element_by_id("editor-input").focus();
}),new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"background-color","background-color",570434026),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"font","font",-1506159249),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join(''),"none","transparent",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),"text","Monaco","none","absolute","monospace",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null))),"px"].join('')])], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"active-row",new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"outline","outline",793464534),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"height","height",1025178622)],[[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join(''),[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null)) * crumborn.view.editor.y__GT_row(cljs.core.deref(crumborn.view.editor.state_atom),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null))))),"px"].join(''),"none",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),"#ecece7","text",(-1),"none","absolute","monospace",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')])], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,line){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"key","key",-1516042587),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"id","id",-1388402092),["row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"width","width",-384071477),"100%"], null)], null),line], null)], null);
}),buffer))], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),"selections",new cljs.core.Keyword(null,"draggable","draggable",1676206163),false,new cljs.core.Keyword(null,"tab-index","tab-index",895755393),(-1),new cljs.core.Keyword(null,"userselect","userselect",1118136118),"none",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"z-index","z-index",1892827090),(-1),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-width","editor-width",156837177)], null))),"px"].join(''),new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"editor-height","editor-height",1880786218)], null))),"px"].join(''),new cljs.core.Keyword(null,"outline","outline",793464534),"none",new cljs.core.Keyword(null,"-webkit-user-select","-webkit-user-select",-651687510),"none",new cljs.core.Keyword(null,"cursor","cursor",1011937484),"text",new cljs.core.Keyword(null,"line-height","line-height",1870784992),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')], null)], null),cljs.core.doall.cljs$core$IFn$_invoke$arity$1(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__42760){
var map__42761 = p__42760;
var map__42761__$1 = (((((!((map__42761 == null))))?(((((map__42761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__42761.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__42761):map__42761);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42761__$1,new cljs.core.Keyword(null,"left","left",-399115937));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),["selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"key","key",-1516042587),["selection-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(i)].join(''),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"background","background",-863952629),"#B5D5FF",new cljs.core.Keyword(null,"position","position",-2011731912),"absolute",new cljs.core.Keyword(null,"height","height",1025178622),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join(''),new cljs.core.Keyword(null,"width","width",-384071477),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),"px"].join(''),new cljs.core.Keyword(null,"top","top",-1856271961),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(top),"px"].join(''),new cljs.core.Keyword(null,"left","left",-399115937),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(left),"px"].join('')], null)], null)], null);
}),selections))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"caret",new cljs.core.Keyword(null,"style","style",-496642736),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"animation","animation",-1248293244),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"height","height",1025178622)],[["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"x","x",2099068185)], null))),"px,",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null)) * crumborn.view.editor.y__GT_row(cljs.core.deref(crumborn.view.editor.state_atom),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"cursor","cursor",1011937484),new cljs.core.Keyword(null,"y","y",-1757859776)], null))))),"px)"].join(''),"typing 3.5s steps(40, end),  blink-caret .75s step-end infinite","1px","text","0.3","block","absolute","1px solid black",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"line-height","line-height",1870784992)], null))),"px"].join('')])], null)], null),(cljs.core.truth_(char_width)?null:new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"ruler",new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),"hidden",new cljs.core.Keyword(null,"display","display",242065432),"inline-block",new cljs.core.Keyword(null,"white-space","white-space",-707351930),"nowrap",new cljs.core.Keyword(null,"font-family","font-family",-667419874),"monospace",new cljs.core.Keyword(null,"font-size","font-size",-1847940346),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(crumborn.view.editor.state_atom),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"styles","styles",1954480375),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null))),"px"].join('')], null)], null),"!"], null))], null);
})], null));
});

//# sourceMappingURL=crumborn.view.editor.js.map
