goog.provide('markdown.core');
goog.require('cljs.core');
goog.require('markdown.common');
goog.require('markdown.links');
goog.require('markdown.transformers');
markdown.core.init_transformer = (function markdown$core$init_transformer(p__39620){
var map__39621 = p__39620;
var map__39621__$1 = (((((!((map__39621 == null))))?(((((map__39621.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39621.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__39621):map__39621);
var replacement_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"replacement-transformers","replacement-transformers",-2028552897));
var custom_transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"custom-transformers","custom-transformers",1440601790));
var inhibit_separator = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__39621__$1,new cljs.core.Keyword(null,"inhibit-separator","inhibit-separator",1268116222));
return (function (html,line,next_line,state){
var _STAR_inhibit_separator_STAR__orig_val__39628 = markdown.common._STAR_inhibit_separator_STAR_;
var _STAR_inhibit_separator_STAR__temp_val__39629 = inhibit_separator;
(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__temp_val__39629);

try{var vec__39630 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__39633,transformer){
var vec__39634 = p__39633;
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39634,(0),null);
var state__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39634,(1),null);
var G__39637 = text;
var G__39638 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"next-line","next-line",-1187000287),next_line);
return (transformer.cljs$core$IFn$_invoke$arity$2 ? transformer.cljs$core$IFn$_invoke$arity$2(G__39637,G__39638) : transformer.call(null,G__39637,G__39638));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [line,state], null),(function (){var or__4185__auto__ = replacement_transformers;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(markdown.transformers.transformer_vector,custom_transformers);
}
})());
var text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39630,(0),null);
var new_state = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39630,(1),null);
html.append(text);

return new_state;
}finally {(markdown.common._STAR_inhibit_separator_STAR_ = _STAR_inhibit_separator_STAR__orig_val__39628);
}});
});
/**
 * Removed from cljs.core 0.0-1885, Ref. http://goo.gl/su7Xkj
 */
markdown.core.format = (function markdown$core$format(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39734 = arguments.length;
var i__4790__auto___39736 = (0);
while(true){
if((i__4790__auto___39736 < len__4789__auto___39734)){
args__4795__auto__.push((arguments[i__4790__auto___39736]));

var G__39737 = (i__4790__auto___39736 + (1));
i__4790__auto___39736 = G__39737;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args);
}));

(markdown.core.format.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.format.cljs$lang$applyTo = (function (seq39639){
var G__39640 = cljs.core.first(seq39639);
var seq39639__$1 = cljs.core.next(seq39639);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39640,seq39639__$1);
}));

markdown.core.parse_references = (function markdown$core$parse_references(lines){
var references = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var seq__39646_39739 = cljs.core.seq(lines);
var chunk__39647_39740 = null;
var count__39648_39741 = (0);
var i__39649_39742 = (0);
while(true){
if((i__39649_39742 < count__39648_39741)){
var line_39743 = chunk__39647_39740.cljs$core$IIndexed$_nth$arity$2(null,i__39649_39742);
markdown.links.parse_reference_link(line_39743,references);


var G__39744 = seq__39646_39739;
var G__39745 = chunk__39647_39740;
var G__39746 = count__39648_39741;
var G__39747 = (i__39649_39742 + (1));
seq__39646_39739 = G__39744;
chunk__39647_39740 = G__39745;
count__39648_39741 = G__39746;
i__39649_39742 = G__39747;
continue;
} else {
var temp__5735__auto___39748 = cljs.core.seq(seq__39646_39739);
if(temp__5735__auto___39748){
var seq__39646_39749__$1 = temp__5735__auto___39748;
if(cljs.core.chunked_seq_QMARK_(seq__39646_39749__$1)){
var c__4609__auto___39750 = cljs.core.chunk_first(seq__39646_39749__$1);
var G__39751 = cljs.core.chunk_rest(seq__39646_39749__$1);
var G__39752 = c__4609__auto___39750;
var G__39753 = cljs.core.count(c__4609__auto___39750);
var G__39754 = (0);
seq__39646_39739 = G__39751;
chunk__39647_39740 = G__39752;
count__39648_39741 = G__39753;
i__39649_39742 = G__39754;
continue;
} else {
var line_39755 = cljs.core.first(seq__39646_39749__$1);
markdown.links.parse_reference_link(line_39755,references);


var G__39756 = cljs.core.next(seq__39646_39749__$1);
var G__39757 = null;
var G__39758 = (0);
var G__39759 = (0);
seq__39646_39739 = G__39756;
chunk__39647_39740 = G__39757;
count__39648_39741 = G__39758;
i__39649_39742 = G__39759;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(references);
});
markdown.core.parse_footnotes = (function markdown$core$parse_footnotes(lines){
var footnotes = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"next-fn-id","next-fn-id",738579636),(1),new cljs.core.Keyword(null,"processed","processed",800622264),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"unprocessed","unprocessed",766771972),cljs.core.PersistentArrayMap.EMPTY], null));
var seq__39650_39760 = cljs.core.seq(lines);
var chunk__39651_39761 = null;
var count__39652_39762 = (0);
var i__39653_39763 = (0);
while(true){
if((i__39653_39763 < count__39652_39762)){
var line_39764 = chunk__39651_39761.cljs$core$IIndexed$_nth$arity$2(null,i__39653_39763);
markdown.links.parse_footnote_link(line_39764,footnotes);


var G__39765 = seq__39650_39760;
var G__39766 = chunk__39651_39761;
var G__39767 = count__39652_39762;
var G__39768 = (i__39653_39763 + (1));
seq__39650_39760 = G__39765;
chunk__39651_39761 = G__39766;
count__39652_39762 = G__39767;
i__39653_39763 = G__39768;
continue;
} else {
var temp__5735__auto___39771 = cljs.core.seq(seq__39650_39760);
if(temp__5735__auto___39771){
var seq__39650_39772__$1 = temp__5735__auto___39771;
if(cljs.core.chunked_seq_QMARK_(seq__39650_39772__$1)){
var c__4609__auto___39773 = cljs.core.chunk_first(seq__39650_39772__$1);
var G__39775 = cljs.core.chunk_rest(seq__39650_39772__$1);
var G__39776 = c__4609__auto___39773;
var G__39777 = cljs.core.count(c__4609__auto___39773);
var G__39778 = (0);
seq__39650_39760 = G__39775;
chunk__39651_39761 = G__39776;
count__39652_39762 = G__39777;
i__39653_39763 = G__39778;
continue;
} else {
var line_39779 = cljs.core.first(seq__39650_39772__$1);
markdown.links.parse_footnote_link(line_39779,footnotes);


var G__39780 = cljs.core.next(seq__39650_39772__$1);
var G__39781 = null;
var G__39782 = (0);
var G__39783 = (0);
seq__39650_39760 = G__39780;
chunk__39651_39761 = G__39781;
count__39652_39762 = G__39782;
i__39653_39763 = G__39783;
continue;
}
} else {
}
}
break;
}

return cljs.core.deref(footnotes);
});
markdown.core.parse_metadata = (function markdown$core$parse_metadata(lines){
var vec__39661 = cljs.core.split_with((function (p1__39660_SHARP_){
return cljs.core.not_empty(p1__39660_SHARP_.trim());
}),lines);
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39661,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39661,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [markdown.transformers.parse_metadata_headers(metadata),lines__$1], null);
});
/**
 * processes input text line by line and outputs an HTML string
 */
markdown.core.md_to_html_string_STAR_ = (function markdown$core$md_to_html_string_STAR_(text,params){
var _STAR_substring_STAR__orig_val__39664 = markdown.common._STAR_substring_STAR_;
var _STAR_formatter_STAR__orig_val__39665 = markdown.transformers._STAR_formatter_STAR_;
var _STAR_substring_STAR__temp_val__39666 = (function (s,n){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.drop.cljs$core$IFn$_invoke$arity$2(n,s));
});
var _STAR_formatter_STAR__temp_val__39667 = markdown.core.format;
(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__temp_val__39666);

(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__temp_val__39667);

try{var params__$1 = (cljs.core.truth_(params)?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc,cljs.core.PersistentArrayMap.EMPTY),params):null);
var lines = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"\n"].join('').split("\n");
var html = (new goog.string.StringBuffer(""));
var references = (cljs.core.truth_(new cljs.core.Keyword(null,"reference-links?","reference-links?",-2003778981).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_references(lines):null);
var footnotes = (cljs.core.truth_(new cljs.core.Keyword(null,"footnotes?","footnotes?",-1590157845).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_footnotes(lines):null);
var vec__39673 = (cljs.core.truth_(new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742).cljs$core$IFn$_invoke$arity$1(params__$1))?markdown.core.parse_metadata(lines):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,lines], null));
var metadata = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(0),null);
var lines__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__39673,(1),null);
var transformer = markdown.core.init_transformer(params__$1);
var G__39680_39796 = lines__$1;
var vec__39681_39797 = G__39680_39796;
var seq__39682_39798 = cljs.core.seq(vec__39681_39797);
var first__39683_39799 = cljs.core.first(seq__39682_39798);
var seq__39682_39800__$1 = cljs.core.next(seq__39682_39798);
var line_39801 = first__39683_39799;
var more_39802 = seq__39682_39800__$1;
var state_39803 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"clojurescript","clojurescript",-299769403),true,new cljs.core.Keyword(null,"references","references",882562509),references,new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205),footnotes,new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true], null),params__$1], 0));
var G__39680_39808__$1 = G__39680_39796;
var state_39809__$1 = state_39803;
while(true){
var vec__39699_39810 = G__39680_39808__$1;
var seq__39700_39811 = cljs.core.seq(vec__39699_39810);
var first__39701_39812 = cljs.core.first(seq__39700_39811);
var seq__39700_39813__$1 = cljs.core.next(seq__39700_39811);
var line_39814__$1 = first__39701_39812;
var more_39815__$1 = seq__39700_39813__$1;
var state_39816__$2 = state_39809__$1;
var line_39817__$2 = (cljs.core.truth_(new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749).cljs$core$IFn$_invoke$arity$1(state_39816__$2))?"":line_39814__$1);
var state_39818__$3 = (cljs.core.truth_(new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39816__$2))?(function (){var G__39702 = html;
var G__39703 = new cljs.core.Keyword(null,"buf","buf",-213913340).cljs$core$IFn$_invoke$arity$1(state_39816__$2);
var G__39704 = new cljs.core.Keyword(null,"next-line","next-line",-1187000287).cljs$core$IFn$_invoke$arity$1(state_39816__$2);
var G__39705 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state_39816__$2,new cljs.core.Keyword(null,"buf","buf",-213913340),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"lists","lists",-884730684),new cljs.core.Keyword(null,"next-line","next-line",-1187000287)], 0)),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),true);
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__39702,G__39703,G__39704,G__39705) : transformer.call(null,G__39702,G__39703,G__39704,G__39705));
})():state_39816__$2);
if(cljs.core.truth_(cljs.core.not_empty(more_39815__$1))){
var G__39819 = more_39815__$1;
var G__39820 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3((function (){var G__39706 = html;
var G__39707 = line_39817__$2;
var G__39708 = cljs.core.first(more_39815__$1);
var G__39709 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state_39818__$3,new cljs.core.Keyword(null,"skip-next-line?","skip-next-line?",1683617749));
return (transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__39706,G__39707,G__39708,G__39709) : transformer.call(null,G__39706,G__39707,G__39708,G__39709));
})(),new cljs.core.Keyword(null,"last-line-empty?","last-line-empty?",1279111527),cljs.core.empty_QMARK_(line_39817__$2.trim()));
G__39680_39808__$1 = G__39819;
state_39809__$1 = G__39820;
continue;
} else {
var G__39710_39823 = html.append(markdown.transformers.footer(new cljs.core.Keyword(null,"footnotes","footnotes",-1842778205).cljs$core$IFn$_invoke$arity$1(state_39818__$3)));
var G__39711_39824 = line_39817__$2;
var G__39712_39825 = "";
var G__39713_39826 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state_39818__$3,new cljs.core.Keyword(null,"eof","eof",-489063237),true);
(transformer.cljs$core$IFn$_invoke$arity$4 ? transformer.cljs$core$IFn$_invoke$arity$4(G__39710_39823,G__39711_39824,G__39712_39825,G__39713_39826) : transformer.call(null,G__39710_39823,G__39711_39824,G__39712_39825,G__39713_39826));
}
break;
}

return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"metadata","metadata",1799301597),metadata,new cljs.core.Keyword(null,"html","html",-998796897),html.toString()], null);
}finally {(markdown.transformers._STAR_formatter_STAR_ = _STAR_formatter_STAR__orig_val__39665);

(markdown.common._STAR_substring_STAR_ = _STAR_substring_STAR__orig_val__39664);
}});
markdown.core.md__GT_html = (function markdown$core$md__GT_html(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39829 = arguments.length;
var i__4790__auto___39830 = (0);
while(true){
if((i__4790__auto___39830 < len__4789__auto___39829)){
args__4795__auto__.push((arguments[i__4790__auto___39830]));

var G__39831 = (i__4790__auto___39830 + (1));
i__4790__auto___39830 = G__39831;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return new cljs.core.Keyword(null,"html","html",-998796897).cljs$core$IFn$_invoke$arity$1(markdown.core.md_to_html_string_STAR_(text,params));
}));

(markdown.core.md__GT_html.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html.cljs$lang$applyTo = (function (seq39719){
var G__39720 = cljs.core.first(seq39719);
var seq39719__$1 = cljs.core.next(seq39719);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39720,seq39719__$1);
}));

markdown.core.md__GT_html_with_meta = (function markdown$core$md__GT_html_with_meta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39836 = arguments.length;
var i__4790__auto___39837 = (0);
while(true){
if((i__4790__auto___39837 < len__4789__auto___39836)){
args__4795__auto__.push((arguments[i__4790__auto___39837]));

var G__39839 = (i__4790__auto___39837 + (1));
i__4790__auto___39837 = G__39839;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(markdown.core.md__GT_html_with_meta.cljs$core$IFn$_invoke$arity$variadic = (function (text,params){
return markdown.core.md_to_html_string_STAR_(text,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parse-meta?","parse-meta?",-1938948742),true], null),params));
}));

(markdown.core.md__GT_html_with_meta.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(markdown.core.md__GT_html_with_meta.cljs$lang$applyTo = (function (seq39722){
var G__39723 = cljs.core.first(seq39722);
var seq39722__$1 = cljs.core.next(seq39722);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__39723,seq39722__$1);
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtml = (function markdown$core$mdToHtml(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39842 = arguments.length;
var i__4790__auto___39843 = (0);
while(true){
if((i__4790__auto___39843 < len__4789__auto___39842)){
args__4795__auto__.push((arguments[i__4790__auto___39843]));

var G__39844 = (i__4790__auto___39843 + (1));
i__4790__auto___39843 = G__39844;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtml', markdown.core.mdToHtml);

(markdown.core.mdToHtml.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html,params);
}));

(markdown.core.mdToHtml.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtml.cljs$lang$applyTo = (function (seq39724){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39724));
}));

/**
 * Js accessible wrapper
 */
markdown.core.mdToHtmlWithMeta = (function markdown$core$mdToHtmlWithMeta(var_args){
var args__4795__auto__ = [];
var len__4789__auto___39845 = arguments.length;
var i__4790__auto___39846 = (0);
while(true){
if((i__4790__auto___39846 < len__4789__auto___39845)){
args__4795__auto__.push((arguments[i__4790__auto___39846]));

var G__39847 = (i__4790__auto___39846 + (1));
i__4790__auto___39846 = G__39847;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((0) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((0)),(0),null)):null);
return markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic(argseq__4796__auto__);
});
goog.exportSymbol('markdown.core.mdToHtmlWithMeta', markdown.core.mdToHtmlWithMeta);

(markdown.core.mdToHtmlWithMeta.cljs$core$IFn$_invoke$arity$variadic = (function (params){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(markdown.core.md__GT_html_with_meta,params);
}));

(markdown.core.mdToHtmlWithMeta.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(markdown.core.mdToHtmlWithMeta.cljs$lang$applyTo = (function (seq39731){
var self__4777__auto__ = this;
return self__4777__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39731));
}));


//# sourceMappingURL=markdown.core.js.map
