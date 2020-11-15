goog.provide('crumborn.interop');
goog.require('cljs.core');
crumborn.interop.setup_listener_BANG_ = (function crumborn$interop$setup_listener_BANG_(var_args){
var G__38622 = arguments.length;
switch (G__38622) {
case 3:
return crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 2:
return crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (obj,event_type,callback){
return obj.addEventListener(event_type,callback);
}));

(crumborn.interop.setup_listener_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (event_type,callback){
return window.addEventListener(event_type,callback);
}));

(crumborn.interop.setup_listener_BANG_.cljs$lang$maxFixedArity = 3);

crumborn.interop.get_height = (function crumborn$interop$get_height(){
return window.innerHeight;
});
crumborn.interop.get_width = (function crumborn$interop$get_width(){
return window.innerWidth;
});
crumborn.interop.get_element_by_id = (function crumborn$interop$get_element_by_id(id){
return document.getElementById(id);
});
crumborn.interop.get_window_size = (function crumborn$interop$get_window_size(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"height","height",1025178622),crumborn.interop.get_height(),new cljs.core.Keyword(null,"width","width",-384071477),crumborn.interop.get_width()], null);
});
crumborn.interop.get_hash = (function crumborn$interop$get_hash(var_args){
var G__38639 = arguments.length;
switch (G__38639) {
case 1:
return crumborn.interop.get_hash.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return crumborn.interop.get_hash.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(crumborn.interop.get_hash.cljs$core$IFn$_invoke$arity$1 = (function (event){
return (event["target"]["location"]["hash"]);
}));

(crumborn.interop.get_hash.cljs$core$IFn$_invoke$arity$0 = (function (){
return window.location.hash.substring((1));
}));

(crumborn.interop.get_hash.cljs$lang$maxFixedArity = 1);

crumborn.interop.get_window = (function crumborn$interop$get_window(){
return window;
});
crumborn.interop.set_body_style_BANG_ = (function crumborn$interop$set_body_style_BANG_(key,value){
return (document.body.style[key] = value);
});
crumborn.interop.set_hash_BANG_ = (function crumborn$interop$set_hash_BANG_(loc){
return (window.location.hash = loc);
});
crumborn.interop.get_bounding_client_rect = (function crumborn$interop$get_bounding_client_rect(el){
var rect = cljs.core.js__GT_clj.cljs$core$IFn$_invoke$arity$1(el.getBoundingClientRect());
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),rect.bottom,new cljs.core.Keyword(null,"height","height",1025178622),rect.height,new cljs.core.Keyword(null,"left","left",-399115937),rect.left,new cljs.core.Keyword(null,"right","right",-452581833),rect.right,new cljs.core.Keyword(null,"top","top",-1856271961),rect.top,new cljs.core.Keyword(null,"width","width",-384071477),rect.width,new cljs.core.Keyword(null,"x","x",2099068185),rect.x,new cljs.core.Keyword(null,"y","y",-1757859776),rect.y], null);
});
crumborn.interop.mouse_x = (function crumborn$interop$mouse_x(evt){
return evt.clientX;
});
crumborn.interop.mouse_y = (function crumborn$interop$mouse_y(evt){
return evt.clientY;
});
crumborn.interop.get_type = (function crumborn$interop$get_type(evt){
return evt.type.name;
});
crumborn.interop.first_child = (function crumborn$interop$first_child(node){
return node.firstChild;
});
crumborn.interop.create_range = (function crumborn$interop$create_range(el){
return el.createRange();
});
crumborn.interop.get_client_rects = (function crumborn$interop$get_client_rects(range){
var rects = cljs.core.array_seq.cljs$core$IFn$_invoke$arity$1(range.getClientRects());
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (r){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"bottom","bottom",-1550509018),r.bottom,new cljs.core.Keyword(null,"height","height",1025178622),r.height,new cljs.core.Keyword(null,"left","left",-399115937),r.left,new cljs.core.Keyword(null,"right","right",-452581833),r.right,new cljs.core.Keyword(null,"top","top",-1856271961),r.top,new cljs.core.Keyword(null,"width","width",-384071477),r.width,new cljs.core.Keyword(null,"x","x",2099068185),r.x,new cljs.core.Keyword(null,"y","y",-1757859776),r.y], null);
}),rects);
});
crumborn.interop.document = document;
crumborn.interop.select_node_contents = (function crumborn$interop$select_node_contents(range,node){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(range,"selectNodeContents",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node], 0));
});
crumborn.interop.inner_html = (function crumborn$interop$inner_html(el){
return el.innerHTML;
});
crumborn.interop.is_nan_QMARK_ = (function crumborn$interop$is_nan_QMARK_(x){
return isNaN(x);
});
crumborn.interop.not_nan_QMARK_ = (function crumborn$interop$not_nan_QMARK_(x){
return cljs.core.not(crumborn.interop.is_nan_QMARK_(x));
});
crumborn.interop.querySelectorAll = (function crumborn$interop$querySelectorAll(el,q){
return cljs.core.js_invoke.cljs$core$IFn$_invoke$arity$variadic(el,"querySelectorAll",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([q], 0));
});

//# sourceMappingURL=crumborn.interop.js.map
