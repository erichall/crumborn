goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('goog.array');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__28973 = arguments.length;
switch (G__28973) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(f,true);
}));

(cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async28981 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async28981 = (function (f,blockable,meta28982){
this.f = f;
this.blockable = blockable;
this.meta28982 = meta28982;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_28983,meta28982__$1){
var self__ = this;
var _28983__$1 = this;
return (new cljs.core.async.t_cljs$core$async28981(self__.f,self__.blockable,meta28982__$1));
}));

(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_28983){
var self__ = this;
var _28983__$1 = this;
return self__.meta28982;
}));

(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
}));

(cljs.core.async.t_cljs$core$async28981.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
}));

(cljs.core.async.t_cljs$core$async28981.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta28982","meta28982",-612322872,null)], null);
}));

(cljs.core.async.t_cljs$core$async28981.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async28981.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async28981");

(cljs.core.async.t_cljs$core$async28981.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async28981");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async28981.
 */
cljs.core.async.__GT_t_cljs$core$async28981 = (function cljs$core$async$__GT_t_cljs$core$async28981(f__$1,blockable__$1,meta28982){
return (new cljs.core.async.t_cljs$core$async28981(f__$1,blockable__$1,meta28982));
});

}

return (new cljs.core.async.t_cljs$core$async28981(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
}));

(cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2);

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer(n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer(n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if((!((buff == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$)))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_(cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__29037 = arguments.length;
switch (G__29037) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,null,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(buf_or_n,xform,null);
}));

(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3(((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer(buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
}));

(cljs.core.async.chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__29043 = arguments.length;
switch (G__29043) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1(null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2(xform,null);
}));

(cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3(cljs.core.async.impl.buffers.promise_buffer(),xform,ex_handler);
}));

(cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout(msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__29071 = arguments.length;
switch (G__29071) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3(port,fn1,true);
}));

(cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(ret)){
var val_32016 = cljs.core.deref(ret);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32016) : fn1.call(null,val_32016));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(val_32016) : fn1.call(null,val_32016));
}));
}
} else {
}

return null;
}));

(cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3);

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn1 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn1 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__29112 = arguments.length;
switch (G__29112) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5733__auto__)){
var ret = temp__5733__auto__;
return cljs.core.deref(ret);
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4(port,val,fn1,true);
}));

(cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5733__auto__ = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1(fn1));
if(cljs.core.truth_(temp__5733__auto__)){
var retb = temp__5733__auto__;
var ret = cljs.core.deref(retb);
if(cljs.core.truth_(on_caller_QMARK_)){
(fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
} else {
cljs.core.async.impl.dispatch.run((function (){
return (fn1.cljs$core$IFn$_invoke$arity$1 ? fn1.cljs$core$IFn$_invoke$arity$1(ret) : fn1.call(null,ret));
}));
}

return ret;
} else {
return true;
}
}));

(cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4);

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_(port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__4666__auto___32047 = n;
var x_32050 = (0);
while(true){
if((x_32050 < n__4666__auto___32047)){
(a[x_32050] = x_32050);

var G__32053 = (x_32050 + (1));
x_32050 = G__32053;
continue;
} else {
}
break;
}

goog.array.shuffle(a);

return a;
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(true);
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29127 = (function (flag,meta29128){
this.flag = flag;
this.meta29128 = meta29128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29129,meta29128__$1){
var self__ = this;
var _29129__$1 = this;
return (new cljs.core.async.t_cljs$core$async29127(self__.flag,meta29128__$1));
}));

(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29129){
var self__ = this;
var _29129__$1 = this;
return self__.meta29128;
}));

(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29127.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.flag,null);

return true;
}));

(cljs.core.async.t_cljs$core$async29127.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta29128","meta29128",629371390,null)], null);
}));

(cljs.core.async.t_cljs$core$async29127.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29127");

(cljs.core.async.t_cljs$core$async29127.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29127");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29127.
 */
cljs.core.async.__GT_t_cljs$core$async29127 = (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async29127(flag__$1,meta29128){
return (new cljs.core.async.t_cljs$core$async29127(flag__$1,meta29128));
});

}

return (new cljs.core.async.t_cljs$core$async29127(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29156 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29156 = (function (flag,cb,meta29157){
this.flag = flag;
this.cb = cb;
this.meta29157 = meta29157;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29158,meta29157__$1){
var self__ = this;
var _29158__$1 = this;
return (new cljs.core.async.t_cljs$core$async29156(self__.flag,self__.cb,meta29157__$1));
}));

(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29158){
var self__ = this;
var _29158__$1 = this;
return self__.meta29157;
}));

(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.flag);
}));

(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async29156.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit(self__.flag);

return self__.cb;
}));

(cljs.core.async.t_cljs$core$async29156.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta29157","meta29157",186643218,null)], null);
}));

(cljs.core.async.t_cljs$core$async29156.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29156.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29156");

(cljs.core.async.t_cljs$core$async29156.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29156");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29156.
 */
cljs.core.async.__GT_t_cljs$core$async29156 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async29156(flag__$1,cb__$1,meta29157){
return (new cljs.core.async.t_cljs$core$async29156(flag__$1,cb__$1,meta29157));
});

}

return (new cljs.core.async.t_cljs$core$async29156(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
if((cljs.core.count(ports) > (0))){
} else {
throw (new Error(["Assert failed: ","alts must have at least one channel operation","\n","(pos? (count ports))"].join('')));
}

var flag = cljs.core.async.alt_flag();
var n = cljs.core.count(ports);
var idxs = cljs.core.async.random_array(n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(ports,idx);
var wport = ((cljs.core.vector_QMARK_(port))?(port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((0)) : port.call(null,(0))):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = (port.cljs$core$IFn$_invoke$arity$1 ? port.cljs$core$IFn$_invoke$arity$1((1)) : port.call(null,(1)));
return cljs.core.async.impl.protocols.put_BANG_(wport,val,cljs.core.async.alt_handler(flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29179_SHARP_){
var G__29185 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29179_SHARP_,wport], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29185) : fret.call(null,G__29185));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.alt_handler(flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__29180_SHARP_){
var G__29189 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__29180_SHARP_,port], null);
return (fret.cljs$core$IFn$_invoke$arity$1 ? fret.cljs$core$IFn$_invoke$arity$1(G__29189) : fret.call(null,G__29189));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref(vbox),(function (){var or__4185__auto__ = wport;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return port;
}
})()], null));
} else {
var G__32090 = (i + (1));
i = G__32090;
continue;
}
} else {
return null;
}
break;
}
})();
var or__4185__auto__ = ret;
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
if(cljs.core.contains_QMARK_(opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5735__auto__ = (function (){var and__4174__auto__ = flag.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1(null);
if(cljs.core.truth_(and__4174__auto__)){
return flag.cljs$core$async$impl$protocols$Handler$commit$arity$1(null);
} else {
return and__4174__auto__;
}
})();
if(cljs.core.truth_(temp__5735__auto__)){
var got = temp__5735__auto__;
return cljs.core.async.impl.channels.box(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32101 = arguments.length;
var i__4790__auto___32102 = (0);
while(true){
if((i__4790__auto___32102 < len__4789__auto___32101)){
args__4795__auto__.push((arguments[i__4790__auto___32102]));

var G__32104 = (i__4790__auto___32102 + (1));
i__4790__auto___32102 = G__32104;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((1) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__4796__auto__);
});

(cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__29199){
var map__29200 = p__29199;
var map__29200__$1 = (((((!((map__29200 == null))))?(((((map__29200.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__29200.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__29200):map__29200);
var opts = map__29200__$1;
throw (new Error("alts! used not in (go ...) block"));
}));

(cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq29194){
var G__29196 = cljs.core.first(seq29194);
var seq29194__$1 = cljs.core.next(seq29194);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__29196,seq29194__$1);
}));

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_(port,val,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_(port,cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2(cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref(ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__29207 = arguments.length;
switch (G__29207) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3(from,to,true);
}));

(cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__28836__auto___32124 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29299){
var state_val_29302 = (state_29299[(1)]);
if((state_val_29302 === (7))){
var inst_29285 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29333_32136 = state_29299__$1;
(statearr_29333_32136[(2)] = inst_29285);

(statearr_29333_32136[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (1))){
var state_29299__$1 = state_29299;
var statearr_29341_32139 = state_29299__$1;
(statearr_29341_32139[(2)] = null);

(statearr_29341_32139[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (4))){
var inst_29240 = (state_29299[(7)]);
var inst_29240__$1 = (state_29299[(2)]);
var inst_29259 = (inst_29240__$1 == null);
var state_29299__$1 = (function (){var statearr_29353 = state_29299;
(statearr_29353[(7)] = inst_29240__$1);

return statearr_29353;
})();
if(cljs.core.truth_(inst_29259)){
var statearr_29360_32144 = state_29299__$1;
(statearr_29360_32144[(1)] = (5));

} else {
var statearr_29361_32145 = state_29299__$1;
(statearr_29361_32145[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (13))){
var state_29299__$1 = state_29299;
var statearr_29374_32146 = state_29299__$1;
(statearr_29374_32146[(2)] = null);

(statearr_29374_32146[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (6))){
var inst_29240 = (state_29299[(7)]);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29299__$1,(11),to,inst_29240);
} else {
if((state_val_29302 === (3))){
var inst_29294 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29299__$1,inst_29294);
} else {
if((state_val_29302 === (12))){
var state_29299__$1 = state_29299;
var statearr_29376_32147 = state_29299__$1;
(statearr_29376_32147[(2)] = null);

(statearr_29376_32147[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (2))){
var state_29299__$1 = state_29299;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29299__$1,(4),from);
} else {
if((state_val_29302 === (11))){
var inst_29276 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
if(cljs.core.truth_(inst_29276)){
var statearr_29381_32148 = state_29299__$1;
(statearr_29381_32148[(1)] = (12));

} else {
var statearr_29382_32149 = state_29299__$1;
(statearr_29382_32149[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (9))){
var state_29299__$1 = state_29299;
var statearr_29383_32150 = state_29299__$1;
(statearr_29383_32150[(2)] = null);

(statearr_29383_32150[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (5))){
var state_29299__$1 = state_29299;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29384_32151 = state_29299__$1;
(statearr_29384_32151[(1)] = (8));

} else {
var statearr_29385_32152 = state_29299__$1;
(statearr_29385_32152[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (14))){
var inst_29283 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29387_32153 = state_29299__$1;
(statearr_29387_32153[(2)] = inst_29283);

(statearr_29387_32153[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (10))){
var inst_29272 = (state_29299[(2)]);
var state_29299__$1 = state_29299;
var statearr_29388_32157 = state_29299__$1;
(statearr_29388_32157[(2)] = inst_29272);

(statearr_29388_32157[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29302 === (8))){
var inst_29267 = cljs.core.async.close_BANG_(to);
var state_29299__$1 = state_29299;
var statearr_29391_32160 = state_29299__$1;
(statearr_29391_32160[(2)] = inst_29267);

(statearr_29391_32160[(1)] = (10));


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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_29393 = [null,null,null,null,null,null,null,null];
(statearr_29393[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_29393[(1)] = (1));

return statearr_29393;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_29299){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29299);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29394){if((e29394 instanceof Object)){
var ex__28499__auto__ = e29394;
var statearr_29395_32171 = state_29299;
(statearr_29395_32171[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29299);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29394;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32172 = state_29299;
state_29299 = G__32172;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_29299){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_29299);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29397 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29397[(6)] = c__28836__auto___32124);

return statearr_29397;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return to;
}));

(cljs.core.async.pipe.cljs$lang$maxFixedArity = 3);

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var results = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(n);
var process = (function (p__29402){
var vec__29403 = p__29402;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29403,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29403,(1),null);
var job = vec__29403;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((1),xf,ex_handler);
var c__28836__auto___32178 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29413){
var state_val_29414 = (state_29413[(1)]);
if((state_val_29414 === (1))){
var state_29413__$1 = state_29413;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29413__$1,(2),res,v);
} else {
if((state_val_29414 === (2))){
var inst_29410 = (state_29413[(2)]);
var inst_29411 = cljs.core.async.close_BANG_(res);
var state_29413__$1 = (function (){var statearr_29419 = state_29413;
(statearr_29419[(7)] = inst_29410);

return statearr_29419;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_29413__$1,inst_29411);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_29420 = [null,null,null,null,null,null,null,null];
(statearr_29420[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__);

(statearr_29420[(1)] = (1));

return statearr_29420;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1 = (function (state_29413){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29413);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29425){if((e29425 instanceof Object)){
var ex__28499__auto__ = e29425;
var statearr_29426_32188 = state_29413;
(statearr_29426_32188[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29413);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29425;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32189 = state_29413;
state_29413 = G__32189;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = function(state_29413){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1.call(this,state_29413);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29430 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29430[(6)] = c__28836__auto___32178);

return statearr_29430;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var async = (function (p__29441){
var vec__29442 = p__29441;
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29442,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__29442,(1),null);
var job = vec__29442;
if((job == null)){
cljs.core.async.close_BANG_(results);

return null;
} else {
var res = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
(xf.cljs$core$IFn$_invoke$arity$2 ? xf.cljs$core$IFn$_invoke$arity$2(v,res) : xf.call(null,v,res));

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(p,res);

return true;
}
});
var n__4666__auto___32205 = n;
var __32206 = (0);
while(true){
if((__32206 < n__4666__auto___32205)){
var G__29448_32207 = type;
var G__29448_32208__$1 = (((G__29448_32207 instanceof cljs.core.Keyword))?G__29448_32207.fqn:null);
switch (G__29448_32208__$1) {
case "compute":
var c__28836__auto___32214 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32206,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = ((function (__32206,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function (state_29461){
var state_val_29462 = (state_29461[(1)]);
if((state_val_29462 === (1))){
var state_29461__$1 = state_29461;
var statearr_29464_32221 = state_29461__$1;
(statearr_29464_32221[(2)] = null);

(statearr_29464_32221[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (2))){
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29461__$1,(4),jobs);
} else {
if((state_val_29462 === (3))){
var inst_29459 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29461__$1,inst_29459);
} else {
if((state_val_29462 === (4))){
var inst_29451 = (state_29461[(2)]);
var inst_29452 = process(inst_29451);
var state_29461__$1 = state_29461;
if(cljs.core.truth_(inst_29452)){
var statearr_29468_32230 = state_29461__$1;
(statearr_29468_32230[(1)] = (5));

} else {
var statearr_29469_32233 = state_29461__$1;
(statearr_29469_32233[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (5))){
var state_29461__$1 = state_29461;
var statearr_29473_32235 = state_29461__$1;
(statearr_29473_32235[(2)] = null);

(statearr_29473_32235[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (6))){
var state_29461__$1 = state_29461;
var statearr_29474_32236 = state_29461__$1;
(statearr_29474_32236[(2)] = null);

(statearr_29474_32236[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29462 === (7))){
var inst_29457 = (state_29461[(2)]);
var state_29461__$1 = state_29461;
var statearr_29475_32237 = state_29461__$1;
(statearr_29475_32237[(2)] = inst_29457);

(statearr_29475_32237[(1)] = (3));


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
});})(__32206,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
;
return ((function (__32206,switch__28495__auto__,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_29476 = [null,null,null,null,null,null,null];
(statearr_29476[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__);

(statearr_29476[(1)] = (1));

return statearr_29476;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1 = (function (state_29461){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29461);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29477){if((e29477 instanceof Object)){
var ex__28499__auto__ = e29477;
var statearr_29478_32240 = state_29461;
(statearr_29478_32240[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29461);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29477;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32245 = state_29461;
state_29461 = G__32245;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = function(state_29461){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1.call(this,state_29461);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__;
})()
;})(__32206,switch__28495__auto__,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
})();
var state__28838__auto__ = (function (){var statearr_29479 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29479[(6)] = c__28836__auto___32214);

return statearr_29479;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
});})(__32206,c__28836__auto___32214,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
);


break;
case "async":
var c__28836__auto___32248 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run(((function (__32206,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = ((function (__32206,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function (state_29492){
var state_val_29493 = (state_29492[(1)]);
if((state_val_29493 === (1))){
var state_29492__$1 = state_29492;
var statearr_29497_32256 = state_29492__$1;
(statearr_29497_32256[(2)] = null);

(statearr_29497_32256[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (2))){
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29492__$1,(4),jobs);
} else {
if((state_val_29493 === (3))){
var inst_29490 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29492__$1,inst_29490);
} else {
if((state_val_29493 === (4))){
var inst_29482 = (state_29492[(2)]);
var inst_29483 = async(inst_29482);
var state_29492__$1 = state_29492;
if(cljs.core.truth_(inst_29483)){
var statearr_29501_32260 = state_29492__$1;
(statearr_29501_32260[(1)] = (5));

} else {
var statearr_29502_32261 = state_29492__$1;
(statearr_29502_32261[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (5))){
var state_29492__$1 = state_29492;
var statearr_29503_32262 = state_29492__$1;
(statearr_29503_32262[(2)] = null);

(statearr_29503_32262[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (6))){
var state_29492__$1 = state_29492;
var statearr_29504_32268 = state_29492__$1;
(statearr_29504_32268[(2)] = null);

(statearr_29504_32268[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29493 === (7))){
var inst_29488 = (state_29492[(2)]);
var state_29492__$1 = state_29492;
var statearr_29505_32271 = state_29492__$1;
(statearr_29505_32271[(2)] = inst_29488);

(statearr_29505_32271[(1)] = (3));


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
});})(__32206,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
;
return ((function (__32206,switch__28495__auto__,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_29506 = [null,null,null,null,null,null,null];
(statearr_29506[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__);

(statearr_29506[(1)] = (1));

return statearr_29506;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1 = (function (state_29492){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29492);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29507){if((e29507 instanceof Object)){
var ex__28499__auto__ = e29507;
var statearr_29509_32274 = state_29492;
(statearr_29509_32274[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29492);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29507;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32275 = state_29492;
state_29492 = G__32275;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = function(state_29492){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1.call(this,state_29492);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__;
})()
;})(__32206,switch__28495__auto__,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
})();
var state__28838__auto__ = (function (){var statearr_29513 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29513[(6)] = c__28836__auto___32248);

return statearr_29513;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
});})(__32206,c__28836__auto___32248,G__29448_32207,G__29448_32208__$1,n__4666__auto___32205,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__29448_32208__$1)].join('')));

}

var G__32283 = (__32206 + (1));
__32206 = G__32283;
continue;
} else {
}
break;
}

var c__28836__auto___32285 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29536){
var state_val_29537 = (state_29536[(1)]);
if((state_val_29537 === (7))){
var inst_29531 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
var statearr_29541_32290 = state_29536__$1;
(statearr_29541_32290[(2)] = inst_29531);

(statearr_29541_32290[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (1))){
var state_29536__$1 = state_29536;
var statearr_29542_32293 = state_29536__$1;
(statearr_29542_32293[(2)] = null);

(statearr_29542_32293[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (4))){
var inst_29516 = (state_29536[(7)]);
var inst_29516__$1 = (state_29536[(2)]);
var inst_29517 = (inst_29516__$1 == null);
var state_29536__$1 = (function (){var statearr_29543 = state_29536;
(statearr_29543[(7)] = inst_29516__$1);

return statearr_29543;
})();
if(cljs.core.truth_(inst_29517)){
var statearr_29545_32296 = state_29536__$1;
(statearr_29545_32296[(1)] = (5));

} else {
var statearr_29549_32297 = state_29536__$1;
(statearr_29549_32297[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (6))){
var inst_29521 = (state_29536[(8)]);
var inst_29516 = (state_29536[(7)]);
var inst_29521__$1 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var inst_29522 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_29523 = [inst_29516,inst_29521__$1];
var inst_29524 = (new cljs.core.PersistentVector(null,2,(5),inst_29522,inst_29523,null));
var state_29536__$1 = (function (){var statearr_29550 = state_29536;
(statearr_29550[(8)] = inst_29521__$1);

return statearr_29550;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29536__$1,(8),jobs,inst_29524);
} else {
if((state_val_29537 === (3))){
var inst_29533 = (state_29536[(2)]);
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29536__$1,inst_29533);
} else {
if((state_val_29537 === (2))){
var state_29536__$1 = state_29536;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29536__$1,(4),from);
} else {
if((state_val_29537 === (9))){
var inst_29528 = (state_29536[(2)]);
var state_29536__$1 = (function (){var statearr_29555 = state_29536;
(statearr_29555[(9)] = inst_29528);

return statearr_29555;
})();
var statearr_29557_32302 = state_29536__$1;
(statearr_29557_32302[(2)] = null);

(statearr_29557_32302[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (5))){
var inst_29519 = cljs.core.async.close_BANG_(jobs);
var state_29536__$1 = state_29536;
var statearr_29559_32305 = state_29536__$1;
(statearr_29559_32305[(2)] = inst_29519);

(statearr_29559_32305[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29537 === (8))){
var inst_29521 = (state_29536[(8)]);
var inst_29526 = (state_29536[(2)]);
var state_29536__$1 = (function (){var statearr_29561 = state_29536;
(statearr_29561[(10)] = inst_29526);

return statearr_29561;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29536__$1,(9),results,inst_29521);
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
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_29562 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29562[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__);

(statearr_29562[(1)] = (1));

return statearr_29562;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1 = (function (state_29536){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29536);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29564){if((e29564 instanceof Object)){
var ex__28499__auto__ = e29564;
var statearr_29565_32314 = state_29536;
(statearr_29565_32314[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29536);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29564;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32319 = state_29536;
state_29536 = G__32319;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = function(state_29536){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1.call(this,state_29536);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29566 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29566[(6)] = c__28836__auto___32285);

return statearr_29566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


var c__28836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29613){
var state_val_29614 = (state_29613[(1)]);
if((state_val_29614 === (7))){
var inst_29609 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29615_32324 = state_29613__$1;
(statearr_29615_32324[(2)] = inst_29609);

(statearr_29615_32324[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (20))){
var state_29613__$1 = state_29613;
var statearr_29621_32326 = state_29613__$1;
(statearr_29621_32326[(2)] = null);

(statearr_29621_32326[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (1))){
var state_29613__$1 = state_29613;
var statearr_29625_32330 = state_29613__$1;
(statearr_29625_32330[(2)] = null);

(statearr_29625_32330[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (4))){
var inst_29569 = (state_29613[(7)]);
var inst_29569__$1 = (state_29613[(2)]);
var inst_29570 = (inst_29569__$1 == null);
var state_29613__$1 = (function (){var statearr_29626 = state_29613;
(statearr_29626[(7)] = inst_29569__$1);

return statearr_29626;
})();
if(cljs.core.truth_(inst_29570)){
var statearr_29633_32332 = state_29613__$1;
(statearr_29633_32332[(1)] = (5));

} else {
var statearr_29634_32334 = state_29613__$1;
(statearr_29634_32334[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (15))){
var inst_29587 = (state_29613[(8)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29613__$1,(18),to,inst_29587);
} else {
if((state_val_29614 === (21))){
var inst_29604 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29641_32336 = state_29613__$1;
(statearr_29641_32336[(2)] = inst_29604);

(statearr_29641_32336[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (13))){
var inst_29606 = (state_29613[(2)]);
var state_29613__$1 = (function (){var statearr_29642 = state_29613;
(statearr_29642[(9)] = inst_29606);

return statearr_29642;
})();
var statearr_29643_32339 = state_29613__$1;
(statearr_29643_32339[(2)] = null);

(statearr_29643_32339[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (6))){
var inst_29569 = (state_29613[(7)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29613__$1,(11),inst_29569);
} else {
if((state_val_29614 === (17))){
var inst_29599 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
if(cljs.core.truth_(inst_29599)){
var statearr_29644_32341 = state_29613__$1;
(statearr_29644_32341[(1)] = (19));

} else {
var statearr_29645_32345 = state_29613__$1;
(statearr_29645_32345[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (3))){
var inst_29611 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29613__$1,inst_29611);
} else {
if((state_val_29614 === (12))){
var inst_29583 = (state_29613[(10)]);
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29613__$1,(14),inst_29583);
} else {
if((state_val_29614 === (2))){
var state_29613__$1 = state_29613;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29613__$1,(4),results);
} else {
if((state_val_29614 === (19))){
var state_29613__$1 = state_29613;
var statearr_29658_32352 = state_29613__$1;
(statearr_29658_32352[(2)] = null);

(statearr_29658_32352[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (11))){
var inst_29583 = (state_29613[(2)]);
var state_29613__$1 = (function (){var statearr_29659 = state_29613;
(statearr_29659[(10)] = inst_29583);

return statearr_29659;
})();
var statearr_29660_32357 = state_29613__$1;
(statearr_29660_32357[(2)] = null);

(statearr_29660_32357[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (9))){
var state_29613__$1 = state_29613;
var statearr_29662_32361 = state_29613__$1;
(statearr_29662_32361[(2)] = null);

(statearr_29662_32361[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (5))){
var state_29613__$1 = state_29613;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29663_32362 = state_29613__$1;
(statearr_29663_32362[(1)] = (8));

} else {
var statearr_29664_32363 = state_29613__$1;
(statearr_29664_32363[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (14))){
var inst_29587 = (state_29613[(8)]);
var inst_29587__$1 = (state_29613[(2)]);
var inst_29589 = (inst_29587__$1 == null);
var inst_29590 = cljs.core.not(inst_29589);
var state_29613__$1 = (function (){var statearr_29665 = state_29613;
(statearr_29665[(8)] = inst_29587__$1);

return statearr_29665;
})();
if(inst_29590){
var statearr_29666_32370 = state_29613__$1;
(statearr_29666_32370[(1)] = (15));

} else {
var statearr_29667_32371 = state_29613__$1;
(statearr_29667_32371[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (16))){
var state_29613__$1 = state_29613;
var statearr_29668_32372 = state_29613__$1;
(statearr_29668_32372[(2)] = false);

(statearr_29668_32372[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (10))){
var inst_29578 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29669_32376 = state_29613__$1;
(statearr_29669_32376[(2)] = inst_29578);

(statearr_29669_32376[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (18))){
var inst_29596 = (state_29613[(2)]);
var state_29613__$1 = state_29613;
var statearr_29670_32378 = state_29613__$1;
(statearr_29670_32378[(2)] = inst_29596);

(statearr_29670_32378[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29614 === (8))){
var inst_29575 = cljs.core.async.close_BANG_(to);
var state_29613__$1 = state_29613;
var statearr_29671_32383 = state_29613__$1;
(statearr_29671_32383[(2)] = inst_29575);

(statearr_29671_32383[(1)] = (10));


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
}
});
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_29675 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_29675[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__);

(statearr_29675[(1)] = (1));

return statearr_29675;
});
var cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1 = (function (state_29613){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29613);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29676){if((e29676 instanceof Object)){
var ex__28499__auto__ = e29676;
var statearr_29677_32390 = state_29613;
(statearr_29677_32390[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29613);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29676;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32397 = state_29613;
state_29613 = G__32397;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__ = function(state_29613){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1.call(this,state_29613);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29679 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29679[(6)] = c__28836__auto__);

return statearr_29679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

return c__28836__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__29683 = arguments.length;
switch (G__29683) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5(n,to,af,from,true);
}));

(cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_(n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
}));

(cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5);

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__29698 = arguments.length;
switch (G__29698) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5(n,to,xf,from,true);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6(n,to,xf,from,close_QMARK_,null);
}));

(cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
}));

(cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6);

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__29700 = arguments.length;
switch (G__29700) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4(p,ch,null,null);
}));

(cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(t_buf_or_n);
var fc = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(f_buf_or_n);
var c__28836__auto___32427 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29736){
var state_val_29737 = (state_29736[(1)]);
if((state_val_29737 === (7))){
var inst_29732 = (state_29736[(2)]);
var state_29736__$1 = state_29736;
var statearr_29738_32429 = state_29736__$1;
(statearr_29738_32429[(2)] = inst_29732);

(statearr_29738_32429[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (1))){
var state_29736__$1 = state_29736;
var statearr_29739_32430 = state_29736__$1;
(statearr_29739_32430[(2)] = null);

(statearr_29739_32430[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (4))){
var inst_29712 = (state_29736[(7)]);
var inst_29712__$1 = (state_29736[(2)]);
var inst_29713 = (inst_29712__$1 == null);
var state_29736__$1 = (function (){var statearr_29740 = state_29736;
(statearr_29740[(7)] = inst_29712__$1);

return statearr_29740;
})();
if(cljs.core.truth_(inst_29713)){
var statearr_29741_32439 = state_29736__$1;
(statearr_29741_32439[(1)] = (5));

} else {
var statearr_29742_32443 = state_29736__$1;
(statearr_29742_32443[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (13))){
var state_29736__$1 = state_29736;
var statearr_29744_32464 = state_29736__$1;
(statearr_29744_32464[(2)] = null);

(statearr_29744_32464[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (6))){
var inst_29712 = (state_29736[(7)]);
var inst_29719 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_29712) : p.call(null,inst_29712));
var state_29736__$1 = state_29736;
if(cljs.core.truth_(inst_29719)){
var statearr_29746_32465 = state_29736__$1;
(statearr_29746_32465[(1)] = (9));

} else {
var statearr_29747_32466 = state_29736__$1;
(statearr_29747_32466[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (3))){
var inst_29734 = (state_29736[(2)]);
var state_29736__$1 = state_29736;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29736__$1,inst_29734);
} else {
if((state_val_29737 === (12))){
var state_29736__$1 = state_29736;
var statearr_29748_32475 = state_29736__$1;
(statearr_29748_32475[(2)] = null);

(statearr_29748_32475[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (2))){
var state_29736__$1 = state_29736;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29736__$1,(4),ch);
} else {
if((state_val_29737 === (11))){
var inst_29712 = (state_29736[(7)]);
var inst_29723 = (state_29736[(2)]);
var state_29736__$1 = state_29736;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29736__$1,(8),inst_29723,inst_29712);
} else {
if((state_val_29737 === (9))){
var state_29736__$1 = state_29736;
var statearr_29751_32488 = state_29736__$1;
(statearr_29751_32488[(2)] = tc);

(statearr_29751_32488[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (5))){
var inst_29715 = cljs.core.async.close_BANG_(tc);
var inst_29716 = cljs.core.async.close_BANG_(fc);
var state_29736__$1 = (function (){var statearr_29753 = state_29736;
(statearr_29753[(8)] = inst_29715);

return statearr_29753;
})();
var statearr_29754_32501 = state_29736__$1;
(statearr_29754_32501[(2)] = inst_29716);

(statearr_29754_32501[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (14))){
var inst_29730 = (state_29736[(2)]);
var state_29736__$1 = state_29736;
var statearr_29758_32506 = state_29736__$1;
(statearr_29758_32506[(2)] = inst_29730);

(statearr_29758_32506[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (10))){
var state_29736__$1 = state_29736;
var statearr_29759_32508 = state_29736__$1;
(statearr_29759_32508[(2)] = fc);

(statearr_29759_32508[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29737 === (8))){
var inst_29725 = (state_29736[(2)]);
var state_29736__$1 = state_29736;
if(cljs.core.truth_(inst_29725)){
var statearr_29767_32523 = state_29736__$1;
(statearr_29767_32523[(1)] = (12));

} else {
var statearr_29768_32524 = state_29736__$1;
(statearr_29768_32524[(1)] = (13));

}

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
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_29769 = [null,null,null,null,null,null,null,null,null];
(statearr_29769[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_29769[(1)] = (1));

return statearr_29769;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_29736){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29736);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29770){if((e29770 instanceof Object)){
var ex__28499__auto__ = e29770;
var statearr_29771_32532 = state_29736;
(statearr_29771_32532[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29736);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32534 = state_29736;
state_29736 = G__32534;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_29736){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_29736);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29772 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29772[(6)] = c__28836__auto___32427);

return statearr_29772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
}));

(cljs.core.async.split.cljs$lang$maxFixedArity = 4);

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__28836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29799){
var state_val_29800 = (state_29799[(1)]);
if((state_val_29800 === (7))){
var inst_29791 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29802_32547 = state_29799__$1;
(statearr_29802_32547[(2)] = inst_29791);

(statearr_29802_32547[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (1))){
var inst_29775 = init;
var state_29799__$1 = (function (){var statearr_29803 = state_29799;
(statearr_29803[(7)] = inst_29775);

return statearr_29803;
})();
var statearr_29804_32559 = state_29799__$1;
(statearr_29804_32559[(2)] = null);

(statearr_29804_32559[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (4))){
var inst_29778 = (state_29799[(8)]);
var inst_29778__$1 = (state_29799[(2)]);
var inst_29779 = (inst_29778__$1 == null);
var state_29799__$1 = (function (){var statearr_29805 = state_29799;
(statearr_29805[(8)] = inst_29778__$1);

return statearr_29805;
})();
if(cljs.core.truth_(inst_29779)){
var statearr_29807_32568 = state_29799__$1;
(statearr_29807_32568[(1)] = (5));

} else {
var statearr_29808_32569 = state_29799__$1;
(statearr_29808_32569[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (6))){
var inst_29782 = (state_29799[(9)]);
var inst_29775 = (state_29799[(7)]);
var inst_29778 = (state_29799[(8)]);
var inst_29782__$1 = (f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(inst_29775,inst_29778) : f.call(null,inst_29775,inst_29778));
var inst_29783 = cljs.core.reduced_QMARK_(inst_29782__$1);
var state_29799__$1 = (function (){var statearr_29810 = state_29799;
(statearr_29810[(9)] = inst_29782__$1);

return statearr_29810;
})();
if(inst_29783){
var statearr_29811_32574 = state_29799__$1;
(statearr_29811_32574[(1)] = (8));

} else {
var statearr_29812_32575 = state_29799__$1;
(statearr_29812_32575[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (3))){
var inst_29793 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29799__$1,inst_29793);
} else {
if((state_val_29800 === (2))){
var state_29799__$1 = state_29799;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29799__$1,(4),ch);
} else {
if((state_val_29800 === (9))){
var inst_29782 = (state_29799[(9)]);
var inst_29775 = inst_29782;
var state_29799__$1 = (function (){var statearr_29818 = state_29799;
(statearr_29818[(7)] = inst_29775);

return statearr_29818;
})();
var statearr_29819_32585 = state_29799__$1;
(statearr_29819_32585[(2)] = null);

(statearr_29819_32585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (5))){
var inst_29775 = (state_29799[(7)]);
var state_29799__$1 = state_29799;
var statearr_29821_32586 = state_29799__$1;
(statearr_29821_32586[(2)] = inst_29775);

(statearr_29821_32586[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (10))){
var inst_29789 = (state_29799[(2)]);
var state_29799__$1 = state_29799;
var statearr_29823_32589 = state_29799__$1;
(statearr_29823_32589[(2)] = inst_29789);

(statearr_29823_32589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29800 === (8))){
var inst_29782 = (state_29799[(9)]);
var inst_29785 = cljs.core.deref(inst_29782);
var state_29799__$1 = state_29799;
var statearr_29824_32590 = state_29799__$1;
(statearr_29824_32590[(2)] = inst_29785);

(statearr_29824_32590[(1)] = (10));


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
var cljs$core$async$reduce_$_state_machine__28496__auto__ = null;
var cljs$core$async$reduce_$_state_machine__28496__auto____0 = (function (){
var statearr_29825 = [null,null,null,null,null,null,null,null,null,null];
(statearr_29825[(0)] = cljs$core$async$reduce_$_state_machine__28496__auto__);

(statearr_29825[(1)] = (1));

return statearr_29825;
});
var cljs$core$async$reduce_$_state_machine__28496__auto____1 = (function (state_29799){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29799);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29827){if((e29827 instanceof Object)){
var ex__28499__auto__ = e29827;
var statearr_29828_32597 = state_29799;
(statearr_29828_32597[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29799);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29827;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32599 = state_29799;
state_29799 = G__32599;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__28496__auto__ = function(state_29799){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__28496__auto____1.call(this,state_29799);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$reduce_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__28496__auto____0;
cljs$core$async$reduce_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__28496__auto____1;
return cljs$core$async$reduce_$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29829 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29829[(6)] = c__28836__auto__);

return statearr_29829;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

return c__28836__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = (xform.cljs$core$IFn$_invoke$arity$1 ? xform.cljs$core$IFn$_invoke$arity$1(f) : xform.call(null,f));
var c__28836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29838){
var state_val_29839 = (state_29838[(1)]);
if((state_val_29839 === (1))){
var inst_29833 = cljs.core.async.reduce(f__$1,init,ch);
var state_29838__$1 = state_29838;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_29838__$1,(2),inst_29833);
} else {
if((state_val_29839 === (2))){
var inst_29835 = (state_29838[(2)]);
var inst_29836 = (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(inst_29835) : f__$1.call(null,inst_29835));
var state_29838__$1 = state_29838;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29838__$1,inst_29836);
} else {
return null;
}
}
});
return (function() {
var cljs$core$async$transduce_$_state_machine__28496__auto__ = null;
var cljs$core$async$transduce_$_state_machine__28496__auto____0 = (function (){
var statearr_29842 = [null,null,null,null,null,null,null];
(statearr_29842[(0)] = cljs$core$async$transduce_$_state_machine__28496__auto__);

(statearr_29842[(1)] = (1));

return statearr_29842;
});
var cljs$core$async$transduce_$_state_machine__28496__auto____1 = (function (state_29838){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29838);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29843){if((e29843 instanceof Object)){
var ex__28499__auto__ = e29843;
var statearr_29844_32613 = state_29838;
(statearr_29844_32613[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29838);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29843;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32614 = state_29838;
state_29838 = G__32614;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__28496__auto__ = function(state_29838){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__28496__auto____1.call(this,state_29838);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$transduce_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__28496__auto____0;
cljs$core$async$transduce_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__28496__auto____1;
return cljs$core$async$transduce_$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29853 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29853[(6)] = c__28836__auto__);

return statearr_29853;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

return c__28836__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__29861 = arguments.length;
switch (G__29861) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3(ch,coll,true);
}));

(cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__28836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_29888){
var state_val_29889 = (state_29888[(1)]);
if((state_val_29889 === (7))){
var inst_29869 = (state_29888[(2)]);
var state_29888__$1 = state_29888;
var statearr_29890_32620 = state_29888__$1;
(statearr_29890_32620[(2)] = inst_29869);

(statearr_29890_32620[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (1))){
var inst_29863 = cljs.core.seq(coll);
var inst_29864 = inst_29863;
var state_29888__$1 = (function (){var statearr_29894 = state_29888;
(statearr_29894[(7)] = inst_29864);

return statearr_29894;
})();
var statearr_29895_32622 = state_29888__$1;
(statearr_29895_32622[(2)] = null);

(statearr_29895_32622[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (4))){
var inst_29864 = (state_29888[(7)]);
var inst_29867 = cljs.core.first(inst_29864);
var state_29888__$1 = state_29888;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_29888__$1,(7),ch,inst_29867);
} else {
if((state_val_29889 === (13))){
var inst_29882 = (state_29888[(2)]);
var state_29888__$1 = state_29888;
var statearr_29902_32626 = state_29888__$1;
(statearr_29902_32626[(2)] = inst_29882);

(statearr_29902_32626[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (6))){
var inst_29872 = (state_29888[(2)]);
var state_29888__$1 = state_29888;
if(cljs.core.truth_(inst_29872)){
var statearr_29904_32627 = state_29888__$1;
(statearr_29904_32627[(1)] = (8));

} else {
var statearr_29905_32628 = state_29888__$1;
(statearr_29905_32628[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (3))){
var inst_29886 = (state_29888[(2)]);
var state_29888__$1 = state_29888;
return cljs.core.async.impl.ioc_helpers.return_chan(state_29888__$1,inst_29886);
} else {
if((state_val_29889 === (12))){
var state_29888__$1 = state_29888;
var statearr_29908_32629 = state_29888__$1;
(statearr_29908_32629[(2)] = null);

(statearr_29908_32629[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (2))){
var inst_29864 = (state_29888[(7)]);
var state_29888__$1 = state_29888;
if(cljs.core.truth_(inst_29864)){
var statearr_29913_32630 = state_29888__$1;
(statearr_29913_32630[(1)] = (4));

} else {
var statearr_29915_32633 = state_29888__$1;
(statearr_29915_32633[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (11))){
var inst_29879 = cljs.core.async.close_BANG_(ch);
var state_29888__$1 = state_29888;
var statearr_29916_32637 = state_29888__$1;
(statearr_29916_32637[(2)] = inst_29879);

(statearr_29916_32637[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (9))){
var state_29888__$1 = state_29888;
if(cljs.core.truth_(close_QMARK_)){
var statearr_29917_32641 = state_29888__$1;
(statearr_29917_32641[(1)] = (11));

} else {
var statearr_29918_32642 = state_29888__$1;
(statearr_29918_32642[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (5))){
var inst_29864 = (state_29888[(7)]);
var state_29888__$1 = state_29888;
var statearr_29919_32648 = state_29888__$1;
(statearr_29919_32648[(2)] = inst_29864);

(statearr_29919_32648[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (10))){
var inst_29884 = (state_29888[(2)]);
var state_29888__$1 = state_29888;
var statearr_29920_32662 = state_29888__$1;
(statearr_29920_32662[(2)] = inst_29884);

(statearr_29920_32662[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_29889 === (8))){
var inst_29864 = (state_29888[(7)]);
var inst_29875 = cljs.core.next(inst_29864);
var inst_29864__$1 = inst_29875;
var state_29888__$1 = (function (){var statearr_29922 = state_29888;
(statearr_29922[(7)] = inst_29864__$1);

return statearr_29922;
})();
var statearr_29923_32671 = state_29888__$1;
(statearr_29923_32671[(2)] = null);

(statearr_29923_32671[(1)] = (2));


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
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_29926 = [null,null,null,null,null,null,null,null];
(statearr_29926[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_29926[(1)] = (1));

return statearr_29926;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_29888){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_29888);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e29928){if((e29928 instanceof Object)){
var ex__28499__auto__ = e29928;
var statearr_29929_32680 = state_29888;
(statearr_29929_32680[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_29888);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e29928;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32681 = state_29888;
state_29888 = G__32681;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_29888){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_29888);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_29933 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_29933[(6)] = c__28836__auto__);

return statearr_29933;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

return c__28836__auto__;
}));

(cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3);

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(cljs.core.bounded_count((100),coll));
cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2(ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((((!((_ == null)))) && ((!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__4487__auto__ = (((_ == null))?null:_);
var m__4488__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4488__auto__.call(null,_));
} else {
var m__4485__auto__ = (cljs.core.async.muxch_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(_) : m__4485__auto__.call(null,_));
} else {
throw cljs.core.missing_protocol("Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4488__auto__.call(null,m,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.tap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(m,ch,close_QMARK_) : m__4485__auto__.call(null,m,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.untap_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.untap_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async29978 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async29978 = (function (ch,cs,meta29979){
this.ch = ch;
this.cs = cs;
this.meta29979 = meta29979;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29980,meta29979__$1){
var self__ = this;
var _29980__$1 = this;
return (new cljs.core.async.t_cljs$core$async29978(self__.ch,self__.cs,meta29979__$1));
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29980){
var self__ = this;
var _29980__$1 = this;
return self__.meta29979;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch__$1);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
}));

(cljs.core.async.t_cljs$core$async29978.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta29979","meta29979",-569028062,null)], null);
}));

(cljs.core.async.t_cljs$core$async29978.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async29978.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async29978");

(cljs.core.async.t_cljs$core$async29978.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async29978");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async29978.
 */
cljs.core.async.__GT_t_cljs$core$async29978 = (function cljs$core$async$mult_$___GT_t_cljs$core$async29978(ch__$1,cs__$1,meta29979){
return (new cljs.core.async.t_cljs$core$async29978(ch__$1,cs__$1,meta29979));
});

}

return (new cljs.core.async.t_cljs$core$async29978(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = (function (_){
if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,true);
} else {
return null;
}
});
var c__28836__auto___32711 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_30159){
var state_val_30161 = (state_30159[(1)]);
if((state_val_30161 === (7))){
var inst_30152 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30167_32712 = state_30159__$1;
(statearr_30167_32712[(2)] = inst_30152);

(statearr_30167_32712[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (20))){
var inst_30032 = (state_30159[(7)]);
var inst_30054 = cljs.core.first(inst_30032);
var inst_30055 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30054,(0),null);
var inst_30056 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30054,(1),null);
var state_30159__$1 = (function (){var statearr_30170 = state_30159;
(statearr_30170[(8)] = inst_30055);

return statearr_30170;
})();
if(cljs.core.truth_(inst_30056)){
var statearr_30171_32717 = state_30159__$1;
(statearr_30171_32717[(1)] = (22));

} else {
var statearr_30174_32718 = state_30159__$1;
(statearr_30174_32718[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (27))){
var inst_30093 = (state_30159[(9)]);
var inst_29996 = (state_30159[(10)]);
var inst_30098 = (state_30159[(11)]);
var inst_30091 = (state_30159[(12)]);
var inst_30098__$1 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30091,inst_30093);
var inst_30099 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30098__$1,inst_29996,done);
var state_30159__$1 = (function (){var statearr_30177 = state_30159;
(statearr_30177[(11)] = inst_30098__$1);

return statearr_30177;
})();
if(cljs.core.truth_(inst_30099)){
var statearr_30178_32724 = state_30159__$1;
(statearr_30178_32724[(1)] = (30));

} else {
var statearr_30179_32725 = state_30159__$1;
(statearr_30179_32725[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (1))){
var state_30159__$1 = state_30159;
var statearr_30180_32726 = state_30159__$1;
(statearr_30180_32726[(2)] = null);

(statearr_30180_32726[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (24))){
var inst_30032 = (state_30159[(7)]);
var inst_30061 = (state_30159[(2)]);
var inst_30063 = cljs.core.next(inst_30032);
var inst_30007 = inst_30063;
var inst_30008 = null;
var inst_30009 = (0);
var inst_30010 = (0);
var state_30159__$1 = (function (){var statearr_30182 = state_30159;
(statearr_30182[(13)] = inst_30010);

(statearr_30182[(14)] = inst_30061);

(statearr_30182[(15)] = inst_30008);

(statearr_30182[(16)] = inst_30009);

(statearr_30182[(17)] = inst_30007);

return statearr_30182;
})();
var statearr_30184_32727 = state_30159__$1;
(statearr_30184_32727[(2)] = null);

(statearr_30184_32727[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (39))){
var state_30159__$1 = state_30159;
var statearr_30190_32728 = state_30159__$1;
(statearr_30190_32728[(2)] = null);

(statearr_30190_32728[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (4))){
var inst_29996 = (state_30159[(10)]);
var inst_29996__$1 = (state_30159[(2)]);
var inst_29998 = (inst_29996__$1 == null);
var state_30159__$1 = (function (){var statearr_30194 = state_30159;
(statearr_30194[(10)] = inst_29996__$1);

return statearr_30194;
})();
if(cljs.core.truth_(inst_29998)){
var statearr_30196_32731 = state_30159__$1;
(statearr_30196_32731[(1)] = (5));

} else {
var statearr_30198_32732 = state_30159__$1;
(statearr_30198_32732[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (15))){
var inst_30010 = (state_30159[(13)]);
var inst_30008 = (state_30159[(15)]);
var inst_30009 = (state_30159[(16)]);
var inst_30007 = (state_30159[(17)]);
var inst_30027 = (state_30159[(2)]);
var inst_30028 = (inst_30010 + (1));
var tmp30187 = inst_30008;
var tmp30188 = inst_30009;
var tmp30189 = inst_30007;
var inst_30007__$1 = tmp30189;
var inst_30008__$1 = tmp30187;
var inst_30009__$1 = tmp30188;
var inst_30010__$1 = inst_30028;
var state_30159__$1 = (function (){var statearr_30201 = state_30159;
(statearr_30201[(13)] = inst_30010__$1);

(statearr_30201[(15)] = inst_30008__$1);

(statearr_30201[(18)] = inst_30027);

(statearr_30201[(16)] = inst_30009__$1);

(statearr_30201[(17)] = inst_30007__$1);

return statearr_30201;
})();
var statearr_30202_32740 = state_30159__$1;
(statearr_30202_32740[(2)] = null);

(statearr_30202_32740[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (21))){
var inst_30067 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30208_32741 = state_30159__$1;
(statearr_30208_32741[(2)] = inst_30067);

(statearr_30208_32741[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (31))){
var inst_30098 = (state_30159[(11)]);
var inst_30103 = done(null);
var inst_30104 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30098);
var state_30159__$1 = (function (){var statearr_30210 = state_30159;
(statearr_30210[(19)] = inst_30103);

return statearr_30210;
})();
var statearr_30212_32748 = state_30159__$1;
(statearr_30212_32748[(2)] = inst_30104);

(statearr_30212_32748[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (32))){
var inst_30090 = (state_30159[(20)]);
var inst_30093 = (state_30159[(9)]);
var inst_30092 = (state_30159[(21)]);
var inst_30091 = (state_30159[(12)]);
var inst_30106 = (state_30159[(2)]);
var inst_30107 = (inst_30093 + (1));
var tmp30204 = inst_30090;
var tmp30205 = inst_30092;
var tmp30206 = inst_30091;
var inst_30090__$1 = tmp30204;
var inst_30091__$1 = tmp30206;
var inst_30092__$1 = tmp30205;
var inst_30093__$1 = inst_30107;
var state_30159__$1 = (function (){var statearr_30213 = state_30159;
(statearr_30213[(20)] = inst_30090__$1);

(statearr_30213[(9)] = inst_30093__$1);

(statearr_30213[(21)] = inst_30092__$1);

(statearr_30213[(12)] = inst_30091__$1);

(statearr_30213[(22)] = inst_30106);

return statearr_30213;
})();
var statearr_30215_32756 = state_30159__$1;
(statearr_30215_32756[(2)] = null);

(statearr_30215_32756[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (40))){
var inst_30122 = (state_30159[(23)]);
var inst_30127 = done(null);
var inst_30128 = m.cljs$core$async$Mult$untap_STAR_$arity$2(null,inst_30122);
var state_30159__$1 = (function (){var statearr_30221 = state_30159;
(statearr_30221[(24)] = inst_30127);

return statearr_30221;
})();
var statearr_30222_32760 = state_30159__$1;
(statearr_30222_32760[(2)] = inst_30128);

(statearr_30222_32760[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (33))){
var inst_30111 = (state_30159[(25)]);
var inst_30114 = cljs.core.chunked_seq_QMARK_(inst_30111);
var state_30159__$1 = state_30159;
if(inst_30114){
var statearr_30225_32764 = state_30159__$1;
(statearr_30225_32764[(1)] = (36));

} else {
var statearr_30226_32766 = state_30159__$1;
(statearr_30226_32766[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (13))){
var inst_30021 = (state_30159[(26)]);
var inst_30024 = cljs.core.async.close_BANG_(inst_30021);
var state_30159__$1 = state_30159;
var statearr_30237_32767 = state_30159__$1;
(statearr_30237_32767[(2)] = inst_30024);

(statearr_30237_32767[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (22))){
var inst_30055 = (state_30159[(8)]);
var inst_30058 = cljs.core.async.close_BANG_(inst_30055);
var state_30159__$1 = state_30159;
var statearr_30238_32770 = state_30159__$1;
(statearr_30238_32770[(2)] = inst_30058);

(statearr_30238_32770[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (36))){
var inst_30111 = (state_30159[(25)]);
var inst_30116 = cljs.core.chunk_first(inst_30111);
var inst_30117 = cljs.core.chunk_rest(inst_30111);
var inst_30118 = cljs.core.count(inst_30116);
var inst_30090 = inst_30117;
var inst_30091 = inst_30116;
var inst_30092 = inst_30118;
var inst_30093 = (0);
var state_30159__$1 = (function (){var statearr_30245 = state_30159;
(statearr_30245[(20)] = inst_30090);

(statearr_30245[(9)] = inst_30093);

(statearr_30245[(21)] = inst_30092);

(statearr_30245[(12)] = inst_30091);

return statearr_30245;
})();
var statearr_30249_32775 = state_30159__$1;
(statearr_30249_32775[(2)] = null);

(statearr_30249_32775[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (41))){
var inst_30111 = (state_30159[(25)]);
var inst_30130 = (state_30159[(2)]);
var inst_30132 = cljs.core.next(inst_30111);
var inst_30090 = inst_30132;
var inst_30091 = null;
var inst_30092 = (0);
var inst_30093 = (0);
var state_30159__$1 = (function (){var statearr_30251 = state_30159;
(statearr_30251[(20)] = inst_30090);

(statearr_30251[(27)] = inst_30130);

(statearr_30251[(9)] = inst_30093);

(statearr_30251[(21)] = inst_30092);

(statearr_30251[(12)] = inst_30091);

return statearr_30251;
})();
var statearr_30253_32788 = state_30159__$1;
(statearr_30253_32788[(2)] = null);

(statearr_30253_32788[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (43))){
var state_30159__$1 = state_30159;
var statearr_30255_32792 = state_30159__$1;
(statearr_30255_32792[(2)] = null);

(statearr_30255_32792[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (29))){
var inst_30140 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30257_32793 = state_30159__$1;
(statearr_30257_32793[(2)] = inst_30140);

(statearr_30257_32793[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (44))){
var inst_30149 = (state_30159[(2)]);
var state_30159__$1 = (function (){var statearr_30260 = state_30159;
(statearr_30260[(28)] = inst_30149);

return statearr_30260;
})();
var statearr_30261_32802 = state_30159__$1;
(statearr_30261_32802[(2)] = null);

(statearr_30261_32802[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (6))){
var inst_30082 = (state_30159[(29)]);
var inst_30081 = cljs.core.deref(cs);
var inst_30082__$1 = cljs.core.keys(inst_30081);
var inst_30083 = cljs.core.count(inst_30082__$1);
var inst_30084 = cljs.core.reset_BANG_(dctr,inst_30083);
var inst_30089 = cljs.core.seq(inst_30082__$1);
var inst_30090 = inst_30089;
var inst_30091 = null;
var inst_30092 = (0);
var inst_30093 = (0);
var state_30159__$1 = (function (){var statearr_30267 = state_30159;
(statearr_30267[(20)] = inst_30090);

(statearr_30267[(9)] = inst_30093);

(statearr_30267[(21)] = inst_30092);

(statearr_30267[(29)] = inst_30082__$1);

(statearr_30267[(30)] = inst_30084);

(statearr_30267[(12)] = inst_30091);

return statearr_30267;
})();
var statearr_30268_32824 = state_30159__$1;
(statearr_30268_32824[(2)] = null);

(statearr_30268_32824[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (28))){
var inst_30090 = (state_30159[(20)]);
var inst_30111 = (state_30159[(25)]);
var inst_30111__$1 = cljs.core.seq(inst_30090);
var state_30159__$1 = (function (){var statearr_30270 = state_30159;
(statearr_30270[(25)] = inst_30111__$1);

return statearr_30270;
})();
if(inst_30111__$1){
var statearr_30271_32828 = state_30159__$1;
(statearr_30271_32828[(1)] = (33));

} else {
var statearr_30272_32833 = state_30159__$1;
(statearr_30272_32833[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (25))){
var inst_30093 = (state_30159[(9)]);
var inst_30092 = (state_30159[(21)]);
var inst_30095 = (inst_30093 < inst_30092);
var inst_30096 = inst_30095;
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30096)){
var statearr_30273_32841 = state_30159__$1;
(statearr_30273_32841[(1)] = (27));

} else {
var statearr_30274_32845 = state_30159__$1;
(statearr_30274_32845[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (34))){
var state_30159__$1 = state_30159;
var statearr_30276_32847 = state_30159__$1;
(statearr_30276_32847[(2)] = null);

(statearr_30276_32847[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (17))){
var state_30159__$1 = state_30159;
var statearr_30277_32856 = state_30159__$1;
(statearr_30277_32856[(2)] = null);

(statearr_30277_32856[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (3))){
var inst_30154 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30159__$1,inst_30154);
} else {
if((state_val_30161 === (12))){
var inst_30072 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30285_32860 = state_30159__$1;
(statearr_30285_32860[(2)] = inst_30072);

(statearr_30285_32860[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (2))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30159__$1,(4),ch);
} else {
if((state_val_30161 === (23))){
var state_30159__$1 = state_30159;
var statearr_30291_32865 = state_30159__$1;
(statearr_30291_32865[(2)] = null);

(statearr_30291_32865[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (35))){
var inst_30138 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30292_32872 = state_30159__$1;
(statearr_30292_32872[(2)] = inst_30138);

(statearr_30292_32872[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (19))){
var inst_30032 = (state_30159[(7)]);
var inst_30045 = cljs.core.chunk_first(inst_30032);
var inst_30047 = cljs.core.chunk_rest(inst_30032);
var inst_30048 = cljs.core.count(inst_30045);
var inst_30007 = inst_30047;
var inst_30008 = inst_30045;
var inst_30009 = inst_30048;
var inst_30010 = (0);
var state_30159__$1 = (function (){var statearr_30295 = state_30159;
(statearr_30295[(13)] = inst_30010);

(statearr_30295[(15)] = inst_30008);

(statearr_30295[(16)] = inst_30009);

(statearr_30295[(17)] = inst_30007);

return statearr_30295;
})();
var statearr_30297_32873 = state_30159__$1;
(statearr_30297_32873[(2)] = null);

(statearr_30297_32873[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (11))){
var inst_30032 = (state_30159[(7)]);
var inst_30007 = (state_30159[(17)]);
var inst_30032__$1 = cljs.core.seq(inst_30007);
var state_30159__$1 = (function (){var statearr_30302 = state_30159;
(statearr_30302[(7)] = inst_30032__$1);

return statearr_30302;
})();
if(inst_30032__$1){
var statearr_30303_32874 = state_30159__$1;
(statearr_30303_32874[(1)] = (16));

} else {
var statearr_30304_32875 = state_30159__$1;
(statearr_30304_32875[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (9))){
var inst_30074 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30307_32876 = state_30159__$1;
(statearr_30307_32876[(2)] = inst_30074);

(statearr_30307_32876[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (5))){
var inst_30005 = cljs.core.deref(cs);
var inst_30006 = cljs.core.seq(inst_30005);
var inst_30007 = inst_30006;
var inst_30008 = null;
var inst_30009 = (0);
var inst_30010 = (0);
var state_30159__$1 = (function (){var statearr_30310 = state_30159;
(statearr_30310[(13)] = inst_30010);

(statearr_30310[(15)] = inst_30008);

(statearr_30310[(16)] = inst_30009);

(statearr_30310[(17)] = inst_30007);

return statearr_30310;
})();
var statearr_30313_32877 = state_30159__$1;
(statearr_30313_32877[(2)] = null);

(statearr_30313_32877[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (14))){
var state_30159__$1 = state_30159;
var statearr_30314_32878 = state_30159__$1;
(statearr_30314_32878[(2)] = null);

(statearr_30314_32878[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (45))){
var inst_30146 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30315_32880 = state_30159__$1;
(statearr_30315_32880[(2)] = inst_30146);

(statearr_30315_32880[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (26))){
var inst_30082 = (state_30159[(29)]);
var inst_30142 = (state_30159[(2)]);
var inst_30143 = cljs.core.seq(inst_30082);
var state_30159__$1 = (function (){var statearr_30318 = state_30159;
(statearr_30318[(31)] = inst_30142);

return statearr_30318;
})();
if(inst_30143){
var statearr_30319_32881 = state_30159__$1;
(statearr_30319_32881[(1)] = (42));

} else {
var statearr_30320_32882 = state_30159__$1;
(statearr_30320_32882[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (16))){
var inst_30032 = (state_30159[(7)]);
var inst_30043 = cljs.core.chunked_seq_QMARK_(inst_30032);
var state_30159__$1 = state_30159;
if(inst_30043){
var statearr_30322_32883 = state_30159__$1;
(statearr_30322_32883[(1)] = (19));

} else {
var statearr_30323_32884 = state_30159__$1;
(statearr_30323_32884[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (38))){
var inst_30135 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30324_32885 = state_30159__$1;
(statearr_30324_32885[(2)] = inst_30135);

(statearr_30324_32885[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (30))){
var state_30159__$1 = state_30159;
var statearr_30329_32886 = state_30159__$1;
(statearr_30329_32886[(2)] = null);

(statearr_30329_32886[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (10))){
var inst_30010 = (state_30159[(13)]);
var inst_30008 = (state_30159[(15)]);
var inst_30020 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30008,inst_30010);
var inst_30021 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30020,(0),null);
var inst_30022 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30020,(1),null);
var state_30159__$1 = (function (){var statearr_30334 = state_30159;
(statearr_30334[(26)] = inst_30021);

return statearr_30334;
})();
if(cljs.core.truth_(inst_30022)){
var statearr_30339_32894 = state_30159__$1;
(statearr_30339_32894[(1)] = (13));

} else {
var statearr_30340_32895 = state_30159__$1;
(statearr_30340_32895[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (18))){
var inst_30070 = (state_30159[(2)]);
var state_30159__$1 = state_30159;
var statearr_30341_32896 = state_30159__$1;
(statearr_30341_32896[(2)] = inst_30070);

(statearr_30341_32896[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (42))){
var state_30159__$1 = state_30159;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30159__$1,(45),dchan);
} else {
if((state_val_30161 === (37))){
var inst_30122 = (state_30159[(23)]);
var inst_29996 = (state_30159[(10)]);
var inst_30111 = (state_30159[(25)]);
var inst_30122__$1 = cljs.core.first(inst_30111);
var inst_30123 = cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3(inst_30122__$1,inst_29996,done);
var state_30159__$1 = (function (){var statearr_30352 = state_30159;
(statearr_30352[(23)] = inst_30122__$1);

return statearr_30352;
})();
if(cljs.core.truth_(inst_30123)){
var statearr_30353_32903 = state_30159__$1;
(statearr_30353_32903[(1)] = (39));

} else {
var statearr_30354_32904 = state_30159__$1;
(statearr_30354_32904[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30161 === (8))){
var inst_30010 = (state_30159[(13)]);
var inst_30009 = (state_30159[(16)]);
var inst_30012 = (inst_30010 < inst_30009);
var inst_30013 = inst_30012;
var state_30159__$1 = state_30159;
if(cljs.core.truth_(inst_30013)){
var statearr_30355_32906 = state_30159__$1;
(statearr_30355_32906[(1)] = (10));

} else {
var statearr_30356_32909 = state_30159__$1;
(statearr_30356_32909[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$mult_$_state_machine__28496__auto__ = null;
var cljs$core$async$mult_$_state_machine__28496__auto____0 = (function (){
var statearr_30362 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30362[(0)] = cljs$core$async$mult_$_state_machine__28496__auto__);

(statearr_30362[(1)] = (1));

return statearr_30362;
});
var cljs$core$async$mult_$_state_machine__28496__auto____1 = (function (state_30159){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_30159);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e30367){if((e30367 instanceof Object)){
var ex__28499__auto__ = e30367;
var statearr_30368_32913 = state_30159;
(statearr_30368_32913[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30159);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30367;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__32915 = state_30159;
state_30159 = G__32915;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__28496__auto__ = function(state_30159){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__28496__auto____1.call(this,state_30159);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mult_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__28496__auto____0;
cljs$core$async$mult_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__28496__auto____1;
return cljs$core$async$mult_$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_30369 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_30369[(6)] = c__28836__auto___32711);

return statearr_30369;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__30377 = arguments.length;
switch (G__30377) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(mult,ch,true);
}));

(cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_(mult,ch,close_QMARK_);

return ch;
}));

(cljs.core.async.tap.cljs$lang$maxFixedArity = 3);

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_(mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_(mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.admix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4488__auto__.call(null,m,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,ch) : m__4485__auto__.call(null,m,ch));
} else {
throw cljs.core.missing_protocol("Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4488__auto__.call(null,m));
} else {
var m__4485__auto__ = (cljs.core.async.unmix_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(m) : m__4485__auto__.call(null,m));
} else {
throw cljs.core.missing_protocol("Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4488__auto__.call(null,m,state_map));
} else {
var m__4485__auto__ = (cljs.core.async.toggle_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,state_map) : m__4485__auto__.call(null,m,state_map));
} else {
throw cljs.core.missing_protocol("Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((((!((m == null)))) && ((!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__4487__auto__ = (((m == null))?null:m);
var m__4488__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4488__auto__.call(null,m,mode));
} else {
var m__4485__auto__ = (cljs.core.async.solo_mode_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(m,mode) : m__4485__auto__.call(null,m,mode));
} else {
throw cljs.core.missing_protocol("Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__4795__auto__ = [];
var len__4789__auto___32954 = arguments.length;
var i__4790__auto___32955 = (0);
while(true){
if((i__4790__auto___32955 < len__4789__auto___32954)){
args__4795__auto__.push((arguments[i__4790__auto___32955]));

var G__32958 = (i__4790__auto___32955 + (1));
i__4790__auto___32955 = G__32958;
continue;
} else {
}
break;
}

var argseq__4796__auto__ = ((((3) < args__4795__auto__.length))?(new cljs.core.IndexedSeq(args__4795__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__4796__auto__);
});

(cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__30412){
var map__30414 = p__30412;
var map__30414__$1 = (((((!((map__30414 == null))))?(((((map__30414.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__30414.cljs$core$ISeq$))))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__30414):map__30414);
var opts = map__30414__$1;
var statearr_30417_32969 = state;
(statearr_30417_32969[(1)] = cont_block);


var temp__5735__auto__ = cljs.core.async.do_alts((function (val){
var statearr_30418_32970 = state;
(statearr_30418_32970[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state);
}),ports,opts);
if(cljs.core.truth_(temp__5735__auto__)){
var cb = temp__5735__auto__;
var statearr_30420_32971 = state;
(statearr_30420_32971[(2)] = cljs.core.deref(cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}));

(cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq30405){
var G__30406 = cljs.core.first(seq30405);
var seq30405__$1 = cljs.core.next(seq30405);
var G__30407 = cljs.core.first(seq30405__$1);
var seq30405__$2 = cljs.core.next(seq30405__$1);
var G__30408 = cljs.core.first(seq30405__$2);
var seq30405__$3 = cljs.core.next(seq30405__$2);
var self__4776__auto__ = this;
return self__4776__auto__.cljs$core$IFn$_invoke$arity$variadic(G__30406,G__30407,G__30408,seq30405__$3);
}));

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();
var changed = (function (){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(change,true);
});
var pick = (function (attr,chs){
return cljs.core.reduce_kv((function (ret,c,v){
if(cljs.core.truth_((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(v) : attr.call(null,v)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(ret,c);
} else {
return ret;
}
}),cljs.core.PersistentHashSet.EMPTY,chs);
});
var calc_state = (function (){
var chs = cljs.core.deref(cs);
var mode = cljs.core.deref(solo_mode);
var solos = pick(new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick(new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick(new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && ((!(cljs.core.empty_QMARK_(solos))))))?cljs.core.vec(solos):cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(pauses,cljs.core.keys(chs)))),change)], null);
});
var m = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30430 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30430 = (function (change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta30431){
this.change = change;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta30431 = meta30431;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30432,meta30431__$1){
var self__ = this;
var _30432__$1 = this;
return (new cljs.core.async.t_cljs$core$async30430(self__.change,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta30431__$1));
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30432){
var self__ = this;
var _30432__$1 = this;
return self__.meta30431;
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.dissoc,ch);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_(self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.cs,cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.merge_with,cljs.core.merge),state_map);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30430.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.solo_modes.cljs$core$IFn$_invoke$arity$1 ? self__.solo_modes.cljs$core$IFn$_invoke$arity$1(mode) : self__.solo_modes.call(null,mode)))){
} else {
throw (new Error(["Assert failed: ",["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join(''),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_(self__.solo_mode,mode);

return (self__.changed.cljs$core$IFn$_invoke$arity$0 ? self__.changed.cljs$core$IFn$_invoke$arity$0() : self__.changed.call(null));
}));

(cljs.core.async.t_cljs$core$async30430.getBasis = (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"meta30431","meta30431",-843896333,null)], null);
}));

(cljs.core.async.t_cljs$core$async30430.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30430.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30430");

(cljs.core.async.t_cljs$core$async30430.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30430");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30430.
 */
cljs.core.async.__GT_t_cljs$core$async30430 = (function cljs$core$async$mix_$___GT_t_cljs$core$async30430(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30431){
return (new cljs.core.async.t_cljs$core$async30430(change__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta30431));
});

}

return (new cljs.core.async.t_cljs$core$async30430(change,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28836__auto___32994 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_30580){
var state_val_30581 = (state_30580[(1)]);
if((state_val_30581 === (7))){
var inst_30480 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30583_32997 = state_30580__$1;
(statearr_30583_32997[(2)] = inst_30480);

(statearr_30583_32997[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (20))){
var inst_30492 = (state_30580[(7)]);
var state_30580__$1 = state_30580;
var statearr_30584_33000 = state_30580__$1;
(statearr_30584_33000[(2)] = inst_30492);

(statearr_30584_33000[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (27))){
var state_30580__$1 = state_30580;
var statearr_30585_33003 = state_30580__$1;
(statearr_30585_33003[(2)] = null);

(statearr_30585_33003[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (1))){
var inst_30462 = (state_30580[(8)]);
var inst_30462__$1 = calc_state();
var inst_30464 = (inst_30462__$1 == null);
var inst_30465 = cljs.core.not(inst_30464);
var state_30580__$1 = (function (){var statearr_30586 = state_30580;
(statearr_30586[(8)] = inst_30462__$1);

return statearr_30586;
})();
if(inst_30465){
var statearr_30588_33006 = state_30580__$1;
(statearr_30588_33006[(1)] = (2));

} else {
var statearr_30589_33007 = state_30580__$1;
(statearr_30589_33007[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (24))){
var inst_30550 = (state_30580[(9)]);
var inst_30520 = (state_30580[(10)]);
var inst_30533 = (state_30580[(11)]);
var inst_30550__$1 = (inst_30520.cljs$core$IFn$_invoke$arity$1 ? inst_30520.cljs$core$IFn$_invoke$arity$1(inst_30533) : inst_30520.call(null,inst_30533));
var state_30580__$1 = (function (){var statearr_30590 = state_30580;
(statearr_30590[(9)] = inst_30550__$1);

return statearr_30590;
})();
if(cljs.core.truth_(inst_30550__$1)){
var statearr_30592_33014 = state_30580__$1;
(statearr_30592_33014[(1)] = (29));

} else {
var statearr_30595_33016 = state_30580__$1;
(statearr_30595_33016[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (4))){
var inst_30483 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30483)){
var statearr_30599_33017 = state_30580__$1;
(statearr_30599_33017[(1)] = (8));

} else {
var statearr_30600_33020 = state_30580__$1;
(statearr_30600_33020[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (15))){
var inst_30511 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30511)){
var statearr_30603_33024 = state_30580__$1;
(statearr_30603_33024[(1)] = (19));

} else {
var statearr_30604_33025 = state_30580__$1;
(statearr_30604_33025[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (21))){
var inst_30517 = (state_30580[(12)]);
var inst_30517__$1 = (state_30580[(2)]);
var inst_30520 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30517__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30522 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30517__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30523 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30517__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_30580__$1 = (function (){var statearr_30608 = state_30580;
(statearr_30608[(12)] = inst_30517__$1);

(statearr_30608[(13)] = inst_30522);

(statearr_30608[(10)] = inst_30520);

return statearr_30608;
})();
return cljs.core.async.ioc_alts_BANG_(state_30580__$1,(22),inst_30523);
} else {
if((state_val_30581 === (31))){
var inst_30558 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30558)){
var statearr_30610_33032 = state_30580__$1;
(statearr_30610_33032[(1)] = (32));

} else {
var statearr_30611_33033 = state_30580__$1;
(statearr_30611_33033[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (32))){
var inst_30531 = (state_30580[(14)]);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30580__$1,(35),out,inst_30531);
} else {
if((state_val_30581 === (33))){
var inst_30517 = (state_30580[(12)]);
var inst_30492 = inst_30517;
var state_30580__$1 = (function (){var statearr_30613 = state_30580;
(statearr_30613[(7)] = inst_30492);

return statearr_30613;
})();
var statearr_30614_33037 = state_30580__$1;
(statearr_30614_33037[(2)] = null);

(statearr_30614_33037[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (13))){
var inst_30492 = (state_30580[(7)]);
var inst_30499 = inst_30492.cljs$lang$protocol_mask$partition0$;
var inst_30500 = (inst_30499 & (64));
var inst_30502 = inst_30492.cljs$core$ISeq$;
var inst_30503 = (cljs.core.PROTOCOL_SENTINEL === inst_30502);
var inst_30504 = ((inst_30500) || (inst_30503));
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30504)){
var statearr_30616_33038 = state_30580__$1;
(statearr_30616_33038[(1)] = (16));

} else {
var statearr_30619_33039 = state_30580__$1;
(statearr_30619_33039[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (22))){
var inst_30533 = (state_30580[(11)]);
var inst_30531 = (state_30580[(14)]);
var inst_30529 = (state_30580[(2)]);
var inst_30531__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30529,(0),null);
var inst_30533__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_30529,(1),null);
var inst_30534 = (inst_30531__$1 == null);
var inst_30535 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_30533__$1,change);
var inst_30536 = ((inst_30534) || (inst_30535));
var state_30580__$1 = (function (){var statearr_30623 = state_30580;
(statearr_30623[(11)] = inst_30533__$1);

(statearr_30623[(14)] = inst_30531__$1);

return statearr_30623;
})();
if(cljs.core.truth_(inst_30536)){
var statearr_30624_33040 = state_30580__$1;
(statearr_30624_33040[(1)] = (23));

} else {
var statearr_30625_33042 = state_30580__$1;
(statearr_30625_33042[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (36))){
var inst_30517 = (state_30580[(12)]);
var inst_30492 = inst_30517;
var state_30580__$1 = (function (){var statearr_30631 = state_30580;
(statearr_30631[(7)] = inst_30492);

return statearr_30631;
})();
var statearr_30633_33043 = state_30580__$1;
(statearr_30633_33043[(2)] = null);

(statearr_30633_33043[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (29))){
var inst_30550 = (state_30580[(9)]);
var state_30580__$1 = state_30580;
var statearr_30635_33052 = state_30580__$1;
(statearr_30635_33052[(2)] = inst_30550);

(statearr_30635_33052[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (6))){
var state_30580__$1 = state_30580;
var statearr_30636_33053 = state_30580__$1;
(statearr_30636_33053[(2)] = false);

(statearr_30636_33053[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (28))){
var inst_30546 = (state_30580[(2)]);
var inst_30547 = calc_state();
var inst_30492 = inst_30547;
var state_30580__$1 = (function (){var statearr_30638 = state_30580;
(statearr_30638[(7)] = inst_30492);

(statearr_30638[(15)] = inst_30546);

return statearr_30638;
})();
var statearr_30639_33058 = state_30580__$1;
(statearr_30639_33058[(2)] = null);

(statearr_30639_33058[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (25))){
var inst_30572 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30643_33059 = state_30580__$1;
(statearr_30643_33059[(2)] = inst_30572);

(statearr_30643_33059[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (34))){
var inst_30570 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30644_33061 = state_30580__$1;
(statearr_30644_33061[(2)] = inst_30570);

(statearr_30644_33061[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (17))){
var state_30580__$1 = state_30580;
var statearr_30645_33071 = state_30580__$1;
(statearr_30645_33071[(2)] = false);

(statearr_30645_33071[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (3))){
var state_30580__$1 = state_30580;
var statearr_30646_33073 = state_30580__$1;
(statearr_30646_33073[(2)] = false);

(statearr_30646_33073[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (12))){
var inst_30574 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30580__$1,inst_30574);
} else {
if((state_val_30581 === (2))){
var inst_30462 = (state_30580[(8)]);
var inst_30468 = inst_30462.cljs$lang$protocol_mask$partition0$;
var inst_30469 = (inst_30468 & (64));
var inst_30470 = inst_30462.cljs$core$ISeq$;
var inst_30471 = (cljs.core.PROTOCOL_SENTINEL === inst_30470);
var inst_30472 = ((inst_30469) || (inst_30471));
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30472)){
var statearr_30651_33079 = state_30580__$1;
(statearr_30651_33079[(1)] = (5));

} else {
var statearr_30653_33080 = state_30580__$1;
(statearr_30653_33080[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (23))){
var inst_30531 = (state_30580[(14)]);
var inst_30541 = (inst_30531 == null);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30541)){
var statearr_30657_33083 = state_30580__$1;
(statearr_30657_33083[(1)] = (26));

} else {
var statearr_30658_33091 = state_30580__$1;
(statearr_30658_33091[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (35))){
var inst_30561 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
if(cljs.core.truth_(inst_30561)){
var statearr_30665_33093 = state_30580__$1;
(statearr_30665_33093[(1)] = (36));

} else {
var statearr_30668_33094 = state_30580__$1;
(statearr_30668_33094[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (19))){
var inst_30492 = (state_30580[(7)]);
var inst_30513 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30492);
var state_30580__$1 = state_30580;
var statearr_30671_33095 = state_30580__$1;
(statearr_30671_33095[(2)] = inst_30513);

(statearr_30671_33095[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (11))){
var inst_30492 = (state_30580[(7)]);
var inst_30496 = (inst_30492 == null);
var inst_30497 = cljs.core.not(inst_30496);
var state_30580__$1 = state_30580;
if(inst_30497){
var statearr_30672_33101 = state_30580__$1;
(statearr_30672_33101[(1)] = (13));

} else {
var statearr_30673_33103 = state_30580__$1;
(statearr_30673_33103[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (9))){
var inst_30462 = (state_30580[(8)]);
var state_30580__$1 = state_30580;
var statearr_30675_33108 = state_30580__$1;
(statearr_30675_33108[(2)] = inst_30462);

(statearr_30675_33108[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (5))){
var state_30580__$1 = state_30580;
var statearr_30676_33112 = state_30580__$1;
(statearr_30676_33112[(2)] = true);

(statearr_30676_33112[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (14))){
var state_30580__$1 = state_30580;
var statearr_30679_33113 = state_30580__$1;
(statearr_30679_33113[(2)] = false);

(statearr_30679_33113[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (26))){
var inst_30533 = (state_30580[(11)]);
var inst_30543 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(cs,cljs.core.dissoc,inst_30533);
var state_30580__$1 = state_30580;
var statearr_30682_33116 = state_30580__$1;
(statearr_30682_33116[(2)] = inst_30543);

(statearr_30682_33116[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (16))){
var state_30580__$1 = state_30580;
var statearr_30685_33117 = state_30580__$1;
(statearr_30685_33117[(2)] = true);

(statearr_30685_33117[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (38))){
var inst_30566 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30687_33124 = state_30580__$1;
(statearr_30687_33124[(2)] = inst_30566);

(statearr_30687_33124[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (30))){
var inst_30522 = (state_30580[(13)]);
var inst_30520 = (state_30580[(10)]);
var inst_30533 = (state_30580[(11)]);
var inst_30553 = cljs.core.empty_QMARK_(inst_30520);
var inst_30554 = (inst_30522.cljs$core$IFn$_invoke$arity$1 ? inst_30522.cljs$core$IFn$_invoke$arity$1(inst_30533) : inst_30522.call(null,inst_30533));
var inst_30555 = cljs.core.not(inst_30554);
var inst_30556 = ((inst_30553) && (inst_30555));
var state_30580__$1 = state_30580;
var statearr_30695_33130 = state_30580__$1;
(statearr_30695_33130[(2)] = inst_30556);

(statearr_30695_33130[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (10))){
var inst_30462 = (state_30580[(8)]);
var inst_30488 = (state_30580[(2)]);
var inst_30489 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30488,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_30490 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30488,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_30491 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30488,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_30492 = inst_30462;
var state_30580__$1 = (function (){var statearr_30699 = state_30580;
(statearr_30699[(16)] = inst_30489);

(statearr_30699[(17)] = inst_30491);

(statearr_30699[(7)] = inst_30492);

(statearr_30699[(18)] = inst_30490);

return statearr_30699;
})();
var statearr_30700_33136 = state_30580__$1;
(statearr_30700_33136[(2)] = null);

(statearr_30700_33136[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (18))){
var inst_30508 = (state_30580[(2)]);
var state_30580__$1 = state_30580;
var statearr_30703_33137 = state_30580__$1;
(statearr_30703_33137[(2)] = inst_30508);

(statearr_30703_33137[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (37))){
var state_30580__$1 = state_30580;
var statearr_30705_33141 = state_30580__$1;
(statearr_30705_33141[(2)] = null);

(statearr_30705_33141[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30581 === (8))){
var inst_30462 = (state_30580[(8)]);
var inst_30485 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,inst_30462);
var state_30580__$1 = state_30580;
var statearr_30706_33147 = state_30580__$1;
(statearr_30706_33147[(2)] = inst_30485);

(statearr_30706_33147[(1)] = (10));


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
var cljs$core$async$mix_$_state_machine__28496__auto__ = null;
var cljs$core$async$mix_$_state_machine__28496__auto____0 = (function (){
var statearr_30707 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_30707[(0)] = cljs$core$async$mix_$_state_machine__28496__auto__);

(statearr_30707[(1)] = (1));

return statearr_30707;
});
var cljs$core$async$mix_$_state_machine__28496__auto____1 = (function (state_30580){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_30580);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e30709){if((e30709 instanceof Object)){
var ex__28499__auto__ = e30709;
var statearr_30710_33158 = state_30580;
(statearr_30710_33158[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30580);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e30709;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33160 = state_30580;
state_30580 = G__33160;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__28496__auto__ = function(state_30580){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__28496__auto____1.call(this,state_30580);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mix_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__28496__auto____0;
cljs$core$async$mix_$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__28496__auto____1;
return cljs$core$async$mix_$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_30712 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_30712[(6)] = c__28836__auto___32994);

return statearr_30712;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_(mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_(mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_(mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_(mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_(mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4488__auto__.call(null,p,v,ch,close_QMARK_));
} else {
var m__4485__auto__ = (cljs.core.async.sub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$4 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$4(p,v,ch,close_QMARK_) : m__4485__auto__.call(null,p,v,ch,close_QMARK_));
} else {
throw cljs.core.missing_protocol("Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4488__auto__.call(null,p,v,ch));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$3 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$3(p,v,ch) : m__4485__auto__.call(null,p,v,ch));
} else {
throw cljs.core.missing_protocol("Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__30764 = arguments.length;
switch (G__30764) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4488__auto__.call(null,p));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$1 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$1(p) : m__4485__auto__.call(null,p));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((((!((p == null)))) && ((!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__4487__auto__ = (((p == null))?null:p);
var m__4488__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4487__auto__)]);
if((!((m__4488__auto__ == null)))){
return (m__4488__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4488__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4488__auto__.call(null,p,v));
} else {
var m__4485__auto__ = (cljs.core.async.unsub_all_STAR_["_"]);
if((!((m__4485__auto__ == null)))){
return (m__4485__auto__.cljs$core$IFn$_invoke$arity$2 ? m__4485__auto__.cljs$core$IFn$_invoke$arity$2(p,v) : m__4485__auto__.call(null,p,v));
} else {
throw cljs.core.missing_protocol("Pub.unsub-all*",p);
}
}
}
}));

(cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2);


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__30795 = arguments.length;
switch (G__30795) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3(ch,topic_fn,cljs.core.constantly(null));
}));

(cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = (function (topic){
var or__4185__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(mults),topic);
if(cljs.core.truth_(or__4185__auto__)){
return or__4185__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mults,(function (p1__30789_SHARP_){
if(cljs.core.truth_((p1__30789_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__30789_SHARP_.cljs$core$IFn$_invoke$arity$1(topic) : p1__30789_SHARP_.call(null,topic)))){
return p1__30789_SHARP_;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__30789_SHARP_,topic,cljs.core.async.mult(cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((buf_fn.cljs$core$IFn$_invoke$arity$1 ? buf_fn.cljs$core$IFn$_invoke$arity$1(topic) : buf_fn.call(null,topic)))));
}
})),topic);
}
});
var p = (function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async30810 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async30810 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta30811){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta30811 = meta30811;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_30812,meta30811__$1){
var self__ = this;
var _30812__$1 = this;
return (new cljs.core.async.t_cljs$core$async30810(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta30811__$1));
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_30812){
var self__ = this;
var _30812__$1 = this;
return self__.meta30811;
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = (self__.ensure_mult.cljs$core$IFn$_invoke$arity$1 ? self__.ensure_mult.cljs$core$IFn$_invoke$arity$1(topic) : self__.ensure_mult.call(null,topic));
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3(m,ch__$1,close_QMARK_);
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5735__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(self__.mults),topic);
if(cljs.core.truth_(temp__5735__auto__)){
var m = temp__5735__auto__;
return cljs.core.async.untap(m,ch__$1);
} else {
return null;
}
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_(self__.mults,cljs.core.PersistentArrayMap.EMPTY);
}));

(cljs.core.async.t_cljs$core$async30810.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(self__.mults,cljs.core.dissoc,topic);
}));

(cljs.core.async.t_cljs$core$async30810.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta30811","meta30811",-2080528979,null)], null);
}));

(cljs.core.async.t_cljs$core$async30810.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async30810.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async30810");

(cljs.core.async.t_cljs$core$async30810.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async30810");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async30810.
 */
cljs.core.async.__GT_t_cljs$core$async30810 = (function cljs$core$async$__GT_t_cljs$core$async30810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30811){
return (new cljs.core.async.t_cljs$core$async30810(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta30811));
});

}

return (new cljs.core.async.t_cljs$core$async30810(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__28836__auto___33224 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_30926){
var state_val_30927 = (state_30926[(1)]);
if((state_val_30927 === (7))){
var inst_30920 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30930_33234 = state_30926__$1;
(statearr_30930_33234[(2)] = inst_30920);

(statearr_30930_33234[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (20))){
var state_30926__$1 = state_30926;
var statearr_30932_33238 = state_30926__$1;
(statearr_30932_33238[(2)] = null);

(statearr_30932_33238[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (1))){
var state_30926__$1 = state_30926;
var statearr_30933_33239 = state_30926__$1;
(statearr_30933_33239[(2)] = null);

(statearr_30933_33239[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (24))){
var inst_30903 = (state_30926[(7)]);
var inst_30912 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(mults,cljs.core.dissoc,inst_30903);
var state_30926__$1 = state_30926;
var statearr_30937_33244 = state_30926__$1;
(statearr_30937_33244[(2)] = inst_30912);

(statearr_30937_33244[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (4))){
var inst_30846 = (state_30926[(8)]);
var inst_30846__$1 = (state_30926[(2)]);
var inst_30847 = (inst_30846__$1 == null);
var state_30926__$1 = (function (){var statearr_30939 = state_30926;
(statearr_30939[(8)] = inst_30846__$1);

return statearr_30939;
})();
if(cljs.core.truth_(inst_30847)){
var statearr_30943_33248 = state_30926__$1;
(statearr_30943_33248[(1)] = (5));

} else {
var statearr_30944_33251 = state_30926__$1;
(statearr_30944_33251[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (15))){
var inst_30897 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30945_33252 = state_30926__$1;
(statearr_30945_33252[(2)] = inst_30897);

(statearr_30945_33252[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (21))){
var inst_30917 = (state_30926[(2)]);
var state_30926__$1 = (function (){var statearr_30951 = state_30926;
(statearr_30951[(9)] = inst_30917);

return statearr_30951;
})();
var statearr_30952_33253 = state_30926__$1;
(statearr_30952_33253[(2)] = null);

(statearr_30952_33253[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (13))){
var inst_30875 = (state_30926[(10)]);
var inst_30877 = cljs.core.chunked_seq_QMARK_(inst_30875);
var state_30926__$1 = state_30926;
if(inst_30877){
var statearr_30958_33260 = state_30926__$1;
(statearr_30958_33260[(1)] = (16));

} else {
var statearr_30959_33261 = state_30926__$1;
(statearr_30959_33261[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (22))){
var inst_30909 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30909)){
var statearr_30961_33262 = state_30926__$1;
(statearr_30961_33262[(1)] = (23));

} else {
var statearr_30962_33263 = state_30926__$1;
(statearr_30962_33263[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (6))){
var inst_30846 = (state_30926[(8)]);
var inst_30905 = (state_30926[(11)]);
var inst_30903 = (state_30926[(7)]);
var inst_30903__$1 = (topic_fn.cljs$core$IFn$_invoke$arity$1 ? topic_fn.cljs$core$IFn$_invoke$arity$1(inst_30846) : topic_fn.call(null,inst_30846));
var inst_30904 = cljs.core.deref(mults);
var inst_30905__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inst_30904,inst_30903__$1);
var state_30926__$1 = (function (){var statearr_30965 = state_30926;
(statearr_30965[(11)] = inst_30905__$1);

(statearr_30965[(7)] = inst_30903__$1);

return statearr_30965;
})();
if(cljs.core.truth_(inst_30905__$1)){
var statearr_30966_33275 = state_30926__$1;
(statearr_30966_33275[(1)] = (19));

} else {
var statearr_30968_33276 = state_30926__$1;
(statearr_30968_33276[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (25))){
var inst_30914 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30971_33277 = state_30926__$1;
(statearr_30971_33277[(2)] = inst_30914);

(statearr_30971_33277[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (17))){
var inst_30875 = (state_30926[(10)]);
var inst_30887 = cljs.core.first(inst_30875);
var inst_30889 = cljs.core.async.muxch_STAR_(inst_30887);
var inst_30890 = cljs.core.async.close_BANG_(inst_30889);
var inst_30891 = cljs.core.next(inst_30875);
var inst_30859 = inst_30891;
var inst_30860 = null;
var inst_30861 = (0);
var inst_30862 = (0);
var state_30926__$1 = (function (){var statearr_30973 = state_30926;
(statearr_30973[(12)] = inst_30862);

(statearr_30973[(13)] = inst_30890);

(statearr_30973[(14)] = inst_30860);

(statearr_30973[(15)] = inst_30861);

(statearr_30973[(16)] = inst_30859);

return statearr_30973;
})();
var statearr_30975_33288 = state_30926__$1;
(statearr_30975_33288[(2)] = null);

(statearr_30975_33288[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (3))){
var inst_30922 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.return_chan(state_30926__$1,inst_30922);
} else {
if((state_val_30927 === (12))){
var inst_30899 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30985_33295 = state_30926__$1;
(statearr_30985_33295[(2)] = inst_30899);

(statearr_30985_33295[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (2))){
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_30926__$1,(4),ch);
} else {
if((state_val_30927 === (23))){
var state_30926__$1 = state_30926;
var statearr_30992_33298 = state_30926__$1;
(statearr_30992_33298[(2)] = null);

(statearr_30992_33298[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (19))){
var inst_30846 = (state_30926[(8)]);
var inst_30905 = (state_30926[(11)]);
var inst_30907 = cljs.core.async.muxch_STAR_(inst_30905);
var state_30926__$1 = state_30926;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_30926__$1,(22),inst_30907,inst_30846);
} else {
if((state_val_30927 === (11))){
var inst_30875 = (state_30926[(10)]);
var inst_30859 = (state_30926[(16)]);
var inst_30875__$1 = cljs.core.seq(inst_30859);
var state_30926__$1 = (function (){var statearr_30994 = state_30926;
(statearr_30994[(10)] = inst_30875__$1);

return statearr_30994;
})();
if(inst_30875__$1){
var statearr_30995_33308 = state_30926__$1;
(statearr_30995_33308[(1)] = (13));

} else {
var statearr_30996_33311 = state_30926__$1;
(statearr_30996_33311[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (9))){
var inst_30901 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_30998_33321 = state_30926__$1;
(statearr_30998_33321[(2)] = inst_30901);

(statearr_30998_33321[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (5))){
var inst_30856 = cljs.core.deref(mults);
var inst_30857 = cljs.core.vals(inst_30856);
var inst_30858 = cljs.core.seq(inst_30857);
var inst_30859 = inst_30858;
var inst_30860 = null;
var inst_30861 = (0);
var inst_30862 = (0);
var state_30926__$1 = (function (){var statearr_31002 = state_30926;
(statearr_31002[(12)] = inst_30862);

(statearr_31002[(14)] = inst_30860);

(statearr_31002[(15)] = inst_30861);

(statearr_31002[(16)] = inst_30859);

return statearr_31002;
})();
var statearr_31006_33322 = state_30926__$1;
(statearr_31006_33322[(2)] = null);

(statearr_31006_33322[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (14))){
var state_30926__$1 = state_30926;
var statearr_31010_33324 = state_30926__$1;
(statearr_31010_33324[(2)] = null);

(statearr_31010_33324[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (16))){
var inst_30875 = (state_30926[(10)]);
var inst_30880 = cljs.core.chunk_first(inst_30875);
var inst_30881 = cljs.core.chunk_rest(inst_30875);
var inst_30883 = cljs.core.count(inst_30880);
var inst_30859 = inst_30881;
var inst_30860 = inst_30880;
var inst_30861 = inst_30883;
var inst_30862 = (0);
var state_30926__$1 = (function (){var statearr_31012 = state_30926;
(statearr_31012[(12)] = inst_30862);

(statearr_31012[(14)] = inst_30860);

(statearr_31012[(15)] = inst_30861);

(statearr_31012[(16)] = inst_30859);

return statearr_31012;
})();
var statearr_31015_33332 = state_30926__$1;
(statearr_31015_33332[(2)] = null);

(statearr_31015_33332[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (10))){
var inst_30862 = (state_30926[(12)]);
var inst_30860 = (state_30926[(14)]);
var inst_30861 = (state_30926[(15)]);
var inst_30859 = (state_30926[(16)]);
var inst_30869 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_30860,inst_30862);
var inst_30870 = cljs.core.async.muxch_STAR_(inst_30869);
var inst_30871 = cljs.core.async.close_BANG_(inst_30870);
var inst_30872 = (inst_30862 + (1));
var tmp31007 = inst_30860;
var tmp31008 = inst_30861;
var tmp31009 = inst_30859;
var inst_30859__$1 = tmp31009;
var inst_30860__$1 = tmp31007;
var inst_30861__$1 = tmp31008;
var inst_30862__$1 = inst_30872;
var state_30926__$1 = (function (){var statearr_31034 = state_30926;
(statearr_31034[(12)] = inst_30862__$1);

(statearr_31034[(14)] = inst_30860__$1);

(statearr_31034[(15)] = inst_30861__$1);

(statearr_31034[(17)] = inst_30871);

(statearr_31034[(16)] = inst_30859__$1);

return statearr_31034;
})();
var statearr_31035_33343 = state_30926__$1;
(statearr_31035_33343[(2)] = null);

(statearr_31035_33343[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (18))){
var inst_30894 = (state_30926[(2)]);
var state_30926__$1 = state_30926;
var statearr_31037_33344 = state_30926__$1;
(statearr_31037_33344[(2)] = inst_30894);

(statearr_31037_33344[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_30927 === (8))){
var inst_30862 = (state_30926[(12)]);
var inst_30861 = (state_30926[(15)]);
var inst_30865 = (inst_30862 < inst_30861);
var inst_30866 = inst_30865;
var state_30926__$1 = state_30926;
if(cljs.core.truth_(inst_30866)){
var statearr_31038_33351 = state_30926__$1;
(statearr_31038_33351[(1)] = (10));

} else {
var statearr_31039_33352 = state_30926__$1;
(statearr_31039_33352[(1)] = (11));

}

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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31041[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31041[(1)] = (1));

return statearr_31041;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_30926){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_30926);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31042){if((e31042 instanceof Object)){
var ex__28499__auto__ = e31042;
var statearr_31043_33360 = state_30926;
(statearr_31043_33360[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_30926);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31042;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33364 = state_30926;
state_30926 = G__33364;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_30926){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_30926);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31045 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31045[(6)] = c__28836__auto___33224);

return statearr_31045;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return p;
}));

(cljs.core.async.pub.cljs$lang$maxFixedArity = 3);

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__31048 = arguments.length;
switch (G__31048) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4(p,topic,ch,true);
}));

(cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_(p,topic,ch,close_QMARK_);
}));

(cljs.core.async.sub.cljs$lang$maxFixedArity = 4);

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_(p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__31053 = arguments.length;
switch (G__31053) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1(p);
}));

(cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2(p,topic);
}));

(cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2);

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__31091 = arguments.length;
switch (G__31091) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3(f,chs,null);
}));

(cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec(chs);
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var cnt = cljs.core.count(chs__$1);
var rets = cljs.core.object_array.cljs$core$IFn$_invoke$arity$1(cnt);
var dchan = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
var dctr = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
var done = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (i){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2(dchan,rets.slice((0)));
} else {
return null;
}
});
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(cnt));
var c__28836__auto___33396 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31150){
var state_val_31151 = (state_31150[(1)]);
if((state_val_31151 === (7))){
var state_31150__$1 = state_31150;
var statearr_31156_33401 = state_31150__$1;
(statearr_31156_33401[(2)] = null);

(statearr_31156_33401[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (1))){
var state_31150__$1 = state_31150;
var statearr_31158_33406 = state_31150__$1;
(statearr_31158_33406[(2)] = null);

(statearr_31158_33406[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (4))){
var inst_31109 = (state_31150[(7)]);
var inst_31112 = (inst_31109 < cnt);
var state_31150__$1 = state_31150;
if(cljs.core.truth_(inst_31112)){
var statearr_31159_33407 = state_31150__$1;
(statearr_31159_33407[(1)] = (6));

} else {
var statearr_31161_33408 = state_31150__$1;
(statearr_31161_33408[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (15))){
var inst_31146 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31162_33409 = state_31150__$1;
(statearr_31162_33409[(2)] = inst_31146);

(statearr_31162_33409[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (13))){
var inst_31138 = cljs.core.async.close_BANG_(out);
var state_31150__$1 = state_31150;
var statearr_31164_33410 = state_31150__$1;
(statearr_31164_33410[(2)] = inst_31138);

(statearr_31164_33410[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (6))){
var state_31150__$1 = state_31150;
var statearr_31167_33416 = state_31150__$1;
(statearr_31167_33416[(2)] = null);

(statearr_31167_33416[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (3))){
var inst_31148 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31150__$1,inst_31148);
} else {
if((state_val_31151 === (12))){
var inst_31135 = (state_31150[(8)]);
var inst_31135__$1 = (state_31150[(2)]);
var inst_31136 = cljs.core.some(cljs.core.nil_QMARK_,inst_31135__$1);
var state_31150__$1 = (function (){var statearr_31174 = state_31150;
(statearr_31174[(8)] = inst_31135__$1);

return statearr_31174;
})();
if(cljs.core.truth_(inst_31136)){
var statearr_31177_33422 = state_31150__$1;
(statearr_31177_33422[(1)] = (13));

} else {
var statearr_31179_33423 = state_31150__$1;
(statearr_31179_33423[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (2))){
var inst_31108 = cljs.core.reset_BANG_(dctr,cnt);
var inst_31109 = (0);
var state_31150__$1 = (function (){var statearr_31180 = state_31150;
(statearr_31180[(7)] = inst_31109);

(statearr_31180[(9)] = inst_31108);

return statearr_31180;
})();
var statearr_31181_33433 = state_31150__$1;
(statearr_31181_33433[(2)] = null);

(statearr_31181_33433[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (11))){
var inst_31109 = (state_31150[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame(state_31150,(10),Object,null,(9));
var inst_31119 = (chs__$1.cljs$core$IFn$_invoke$arity$1 ? chs__$1.cljs$core$IFn$_invoke$arity$1(inst_31109) : chs__$1.call(null,inst_31109));
var inst_31120 = (done.cljs$core$IFn$_invoke$arity$1 ? done.cljs$core$IFn$_invoke$arity$1(inst_31109) : done.call(null,inst_31109));
var inst_31121 = cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2(inst_31119,inst_31120);
var state_31150__$1 = state_31150;
var statearr_31183_33444 = state_31150__$1;
(statearr_31183_33444[(2)] = inst_31121);


cljs.core.async.impl.ioc_helpers.process_exception(state_31150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (9))){
var inst_31109 = (state_31150[(7)]);
var inst_31123 = (state_31150[(2)]);
var inst_31124 = (inst_31109 + (1));
var inst_31109__$1 = inst_31124;
var state_31150__$1 = (function (){var statearr_31184 = state_31150;
(statearr_31184[(10)] = inst_31123);

(statearr_31184[(7)] = inst_31109__$1);

return statearr_31184;
})();
var statearr_31185_33446 = state_31150__$1;
(statearr_31185_33446[(2)] = null);

(statearr_31185_33446[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (5))){
var inst_31130 = (state_31150[(2)]);
var state_31150__$1 = (function (){var statearr_31186 = state_31150;
(statearr_31186[(11)] = inst_31130);

return statearr_31186;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31150__$1,(12),dchan);
} else {
if((state_val_31151 === (14))){
var inst_31135 = (state_31150[(8)]);
var inst_31140 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,inst_31135);
var state_31150__$1 = state_31150;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31150__$1,(16),out,inst_31140);
} else {
if((state_val_31151 === (16))){
var inst_31143 = (state_31150[(2)]);
var state_31150__$1 = (function (){var statearr_31187 = state_31150;
(statearr_31187[(12)] = inst_31143);

return statearr_31187;
})();
var statearr_31189_33448 = state_31150__$1;
(statearr_31189_33448[(2)] = null);

(statearr_31189_33448[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (10))){
var inst_31114 = (state_31150[(2)]);
var inst_31115 = cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(dctr,cljs.core.dec);
var state_31150__$1 = (function (){var statearr_31192 = state_31150;
(statearr_31192[(13)] = inst_31114);

return statearr_31192;
})();
var statearr_31193_33450 = state_31150__$1;
(statearr_31193_33450[(2)] = inst_31115);


cljs.core.async.impl.ioc_helpers.process_exception(state_31150__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31151 === (8))){
var inst_31128 = (state_31150[(2)]);
var state_31150__$1 = state_31150;
var statearr_31195_33451 = state_31150__$1;
(statearr_31195_33451[(2)] = inst_31128);

(statearr_31195_33451[(1)] = (5));


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
}
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31196 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31196[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31196[(1)] = (1));

return statearr_31196;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31150){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31150);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31200){if((e31200 instanceof Object)){
var ex__28499__auto__ = e31200;
var statearr_31201_33456 = state_31150;
(statearr_31201_33456[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31150);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31200;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33469 = state_31150;
state_31150 = G__33469;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31150){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31150);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31203 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31203[(6)] = c__28836__auto___33396);

return statearr_31203;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.map.cljs$lang$maxFixedArity = 3);

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__31213 = arguments.length;
switch (G__31213) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2(chs,null);
}));

(cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___33487 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31251){
var state_val_31252 = (state_31251[(1)]);
if((state_val_31252 === (7))){
var inst_31228 = (state_31251[(7)]);
var inst_31227 = (state_31251[(8)]);
var inst_31227__$1 = (state_31251[(2)]);
var inst_31228__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31227__$1,(0),null);
var inst_31229 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(inst_31227__$1,(1),null);
var inst_31230 = (inst_31228__$1 == null);
var state_31251__$1 = (function (){var statearr_31258 = state_31251;
(statearr_31258[(7)] = inst_31228__$1);

(statearr_31258[(9)] = inst_31229);

(statearr_31258[(8)] = inst_31227__$1);

return statearr_31258;
})();
if(cljs.core.truth_(inst_31230)){
var statearr_31261_33515 = state_31251__$1;
(statearr_31261_33515[(1)] = (8));

} else {
var statearr_31263_33519 = state_31251__$1;
(statearr_31263_33519[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (1))){
var inst_31217 = cljs.core.vec(chs);
var inst_31218 = inst_31217;
var state_31251__$1 = (function (){var statearr_31265 = state_31251;
(statearr_31265[(10)] = inst_31218);

return statearr_31265;
})();
var statearr_31266_33528 = state_31251__$1;
(statearr_31266_33528[(2)] = null);

(statearr_31266_33528[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (4))){
var inst_31218 = (state_31251[(10)]);
var state_31251__$1 = state_31251;
return cljs.core.async.ioc_alts_BANG_(state_31251__$1,(7),inst_31218);
} else {
if((state_val_31252 === (6))){
var inst_31247 = (state_31251[(2)]);
var state_31251__$1 = state_31251;
var statearr_31271_33535 = state_31251__$1;
(statearr_31271_33535[(2)] = inst_31247);

(statearr_31271_33535[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (3))){
var inst_31249 = (state_31251[(2)]);
var state_31251__$1 = state_31251;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31251__$1,inst_31249);
} else {
if((state_val_31252 === (2))){
var inst_31218 = (state_31251[(10)]);
var inst_31220 = cljs.core.count(inst_31218);
var inst_31221 = (inst_31220 > (0));
var state_31251__$1 = state_31251;
if(cljs.core.truth_(inst_31221)){
var statearr_31276_33538 = state_31251__$1;
(statearr_31276_33538[(1)] = (4));

} else {
var statearr_31277_33539 = state_31251__$1;
(statearr_31277_33539[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (11))){
var inst_31218 = (state_31251[(10)]);
var inst_31240 = (state_31251[(2)]);
var tmp31273 = inst_31218;
var inst_31218__$1 = tmp31273;
var state_31251__$1 = (function (){var statearr_31278 = state_31251;
(statearr_31278[(11)] = inst_31240);

(statearr_31278[(10)] = inst_31218__$1);

return statearr_31278;
})();
var statearr_31281_33542 = state_31251__$1;
(statearr_31281_33542[(2)] = null);

(statearr_31281_33542[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (9))){
var inst_31228 = (state_31251[(7)]);
var state_31251__$1 = state_31251;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31251__$1,(11),out,inst_31228);
} else {
if((state_val_31252 === (5))){
var inst_31245 = cljs.core.async.close_BANG_(out);
var state_31251__$1 = state_31251;
var statearr_31287_33547 = state_31251__$1;
(statearr_31287_33547[(2)] = inst_31245);

(statearr_31287_33547[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (10))){
var inst_31243 = (state_31251[(2)]);
var state_31251__$1 = state_31251;
var statearr_31290_33548 = state_31251__$1;
(statearr_31290_33548[(2)] = inst_31243);

(statearr_31290_33548[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31252 === (8))){
var inst_31228 = (state_31251[(7)]);
var inst_31218 = (state_31251[(10)]);
var inst_31229 = (state_31251[(9)]);
var inst_31227 = (state_31251[(8)]);
var inst_31234 = (function (){var cs = inst_31218;
var vec__31223 = inst_31227;
var v = inst_31228;
var c = inst_31229;
return (function (p1__31210_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(c,p1__31210_SHARP_);
});
})();
var inst_31235 = cljs.core.filterv(inst_31234,inst_31218);
var inst_31218__$1 = inst_31235;
var state_31251__$1 = (function (){var statearr_31291 = state_31251;
(statearr_31291[(10)] = inst_31218__$1);

return statearr_31291;
})();
var statearr_31293_33551 = state_31251__$1;
(statearr_31293_33551[(2)] = null);

(statearr_31293_33551[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31294 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31294[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31294[(1)] = (1));

return statearr_31294;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31251){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31251);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31295){if((e31295 instanceof Object)){
var ex__28499__auto__ = e31295;
var statearr_31296_33560 = state_31251;
(statearr_31296_33560[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31251);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31295;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33562 = state_31251;
state_31251 = G__33562;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31251){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31251);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31297 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31297[(6)] = c__28836__auto___33487);

return statearr_31297;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.merge.cljs$lang$maxFixedArity = 2);

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce(cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__31300 = arguments.length;
switch (G__31300) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___33575 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31328){
var state_val_31329 = (state_31328[(1)]);
if((state_val_31329 === (7))){
var inst_31309 = (state_31328[(7)]);
var inst_31309__$1 = (state_31328[(2)]);
var inst_31311 = (inst_31309__$1 == null);
var inst_31312 = cljs.core.not(inst_31311);
var state_31328__$1 = (function (){var statearr_31330 = state_31328;
(statearr_31330[(7)] = inst_31309__$1);

return statearr_31330;
})();
if(inst_31312){
var statearr_31331_33581 = state_31328__$1;
(statearr_31331_33581[(1)] = (8));

} else {
var statearr_31332_33582 = state_31328__$1;
(statearr_31332_33582[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (1))){
var inst_31302 = (0);
var state_31328__$1 = (function (){var statearr_31333 = state_31328;
(statearr_31333[(8)] = inst_31302);

return statearr_31333;
})();
var statearr_31334_33588 = state_31328__$1;
(statearr_31334_33588[(2)] = null);

(statearr_31334_33588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (4))){
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31328__$1,(7),ch);
} else {
if((state_val_31329 === (6))){
var inst_31323 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31335_33589 = state_31328__$1;
(statearr_31335_33589[(2)] = inst_31323);

(statearr_31335_33589[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (3))){
var inst_31325 = (state_31328[(2)]);
var inst_31326 = cljs.core.async.close_BANG_(out);
var state_31328__$1 = (function (){var statearr_31336 = state_31328;
(statearr_31336[(9)] = inst_31325);

return statearr_31336;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31328__$1,inst_31326);
} else {
if((state_val_31329 === (2))){
var inst_31302 = (state_31328[(8)]);
var inst_31304 = (inst_31302 < n);
var state_31328__$1 = state_31328;
if(cljs.core.truth_(inst_31304)){
var statearr_31337_33601 = state_31328__$1;
(statearr_31337_33601[(1)] = (4));

} else {
var statearr_31338_33602 = state_31328__$1;
(statearr_31338_33602[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (11))){
var inst_31302 = (state_31328[(8)]);
var inst_31315 = (state_31328[(2)]);
var inst_31316 = (inst_31302 + (1));
var inst_31302__$1 = inst_31316;
var state_31328__$1 = (function (){var statearr_31339 = state_31328;
(statearr_31339[(8)] = inst_31302__$1);

(statearr_31339[(10)] = inst_31315);

return statearr_31339;
})();
var statearr_31341_33617 = state_31328__$1;
(statearr_31341_33617[(2)] = null);

(statearr_31341_33617[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (9))){
var state_31328__$1 = state_31328;
var statearr_31342_33632 = state_31328__$1;
(statearr_31342_33632[(2)] = null);

(statearr_31342_33632[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (5))){
var state_31328__$1 = state_31328;
var statearr_31343_33638 = state_31328__$1;
(statearr_31343_33638[(2)] = null);

(statearr_31343_33638[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (10))){
var inst_31320 = (state_31328[(2)]);
var state_31328__$1 = state_31328;
var statearr_31344_33647 = state_31328__$1;
(statearr_31344_33647[(2)] = inst_31320);

(statearr_31344_33647[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31329 === (8))){
var inst_31309 = (state_31328[(7)]);
var state_31328__$1 = state_31328;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31328__$1,(11),out,inst_31309);
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
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31346 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31346[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31346[(1)] = (1));

return statearr_31346;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31328){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31328);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31347){if((e31347 instanceof Object)){
var ex__28499__auto__ = e31347;
var statearr_31348_33673 = state_31328;
(statearr_31348_33673[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31328);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31347;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33678 = state_31328;
state_31328 = G__33678;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31328){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31328);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31349 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31349[(6)] = c__28836__auto___33575);

return statearr_31349;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.take.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31352 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31352 = (function (f,ch,meta31353){
this.f = f;
this.ch = ch;
this.meta31353 = meta31353;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31354,meta31353__$1){
var self__ = this;
var _31354__$1 = this;
return (new cljs.core.async.t_cljs$core$async31352(self__.f,self__.ch,meta31353__$1));
}));

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31354){
var self__ = this;
var _31354__$1 = this;
return self__.meta31353;
}));

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_(self__.ch,(function (){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31358 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31358 = (function (f,ch,meta31353,_,fn1,meta31359){
this.f = f;
this.ch = ch;
this.meta31353 = meta31353;
this._ = _;
this.fn1 = fn1;
this.meta31359 = meta31359;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31360,meta31359__$1){
var self__ = this;
var _31360__$1 = this;
return (new cljs.core.async.t_cljs$core$async31358(self__.f,self__.ch,self__.meta31353,self__._,self__.fn1,meta31359__$1));
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31360){
var self__ = this;
var _31360__$1 = this;
return self__.meta31359;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_(self__.fn1);
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
}));

(cljs.core.async.t_cljs$core$async31358.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit(self__.fn1);
return (function (p1__31351_SHARP_){
var G__31365 = (((p1__31351_SHARP_ == null))?null:(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(p1__31351_SHARP_) : self__.f.call(null,p1__31351_SHARP_)));
return (f1.cljs$core$IFn$_invoke$arity$1 ? f1.cljs$core$IFn$_invoke$arity$1(G__31365) : f1.call(null,G__31365));
});
}));

(cljs.core.async.t_cljs$core$async31358.getBasis = (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async31352","cljs.core.async/t_cljs$core$async31352",-449319615,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta31359","meta31359",1291521572,null)], null);
}));

(cljs.core.async.t_cljs$core$async31358.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31358");

(cljs.core.async.t_cljs$core$async31358.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31358");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31358.
 */
cljs.core.async.__GT_t_cljs$core$async31358 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31358(f__$1,ch__$1,meta31353__$1,___$2,fn1__$1,meta31359){
return (new cljs.core.async.t_cljs$core$async31358(f__$1,ch__$1,meta31353__$1,___$2,fn1__$1,meta31359));
});

}

return (new cljs.core.async.t_cljs$core$async31358(self__.f,self__.ch,self__.meta31353,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__4174__auto__ = ret;
if(cljs.core.truth_(and__4174__auto__)){
return (!((cljs.core.deref(ret) == null)));
} else {
return and__4174__auto__;
}
})())){
return cljs.core.async.impl.channels.box((function (){var G__31368 = cljs.core.deref(ret);
return (self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(G__31368) : self__.f.call(null,G__31368));
})());
} else {
return ret;
}
}));

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31352.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
}));

(cljs.core.async.t_cljs$core$async31352.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31353","meta31353",-129301686,null)], null);
}));

(cljs.core.async.t_cljs$core$async31352.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31352.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31352");

(cljs.core.async.t_cljs$core$async31352.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31352");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31352.
 */
cljs.core.async.__GT_t_cljs$core$async31352 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async31352(f__$1,ch__$1,meta31353){
return (new cljs.core.async.t_cljs$core$async31352(f__$1,ch__$1,meta31353));
});

}

return (new cljs.core.async.t_cljs$core$async31352(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31370 = (function (f,ch,meta31371){
this.f = f;
this.ch = ch;
this.meta31371 = meta31371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31372,meta31371__$1){
var self__ = this;
var _31372__$1 = this;
return (new cljs.core.async.t_cljs$core$async31370(self__.f,self__.ch,meta31371__$1));
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31372){
var self__ = this;
var _31372__$1 = this;
return self__.meta31371;
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31370.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,(self__.f.cljs$core$IFn$_invoke$arity$1 ? self__.f.cljs$core$IFn$_invoke$arity$1(val) : self__.f.call(null,val)),fn1);
}));

(cljs.core.async.t_cljs$core$async31370.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31371","meta31371",2107928915,null)], null);
}));

(cljs.core.async.t_cljs$core$async31370.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31370");

(cljs.core.async.t_cljs$core$async31370.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31370");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31370.
 */
cljs.core.async.__GT_t_cljs$core$async31370 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async31370(f__$1,ch__$1,meta31371){
return (new cljs.core.async.t_cljs$core$async31370(f__$1,ch__$1,meta31371));
});

}

return (new cljs.core.async.t_cljs$core$async31370(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if((typeof cljs !== 'undefined') && (typeof cljs.core !== 'undefined') && (typeof cljs.core.async !== 'undefined') && (typeof cljs.core.async.t_cljs$core$async31384 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async31384 = (function (p,ch,meta31385){
this.p = p;
this.ch = ch;
this.meta31385 = meta31385;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_31386,meta31385__$1){
var self__ = this;
var _31386__$1 = this;
return (new cljs.core.async.t_cljs$core$async31384(self__.p,self__.ch,meta31385__$1));
}));

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_31386){
var self__ = this;
var _31386__$1 = this;
return self__.meta31385;
}));

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_(self__.ch);
}));

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_(self__.ch,fn1);
}));

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL);

(cljs.core.async.t_cljs$core$async31384.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((self__.p.cljs$core$IFn$_invoke$arity$1 ? self__.p.cljs$core$IFn$_invoke$arity$1(val) : self__.p.call(null,val)))){
return cljs.core.async.impl.protocols.put_BANG_(self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box(cljs.core.not(cljs.core.async.impl.protocols.closed_QMARK_(self__.ch)));
}
}));

(cljs.core.async.t_cljs$core$async31384.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta31385","meta31385",-1922077284,null)], null);
}));

(cljs.core.async.t_cljs$core$async31384.cljs$lang$type = true);

(cljs.core.async.t_cljs$core$async31384.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async31384");

(cljs.core.async.t_cljs$core$async31384.cljs$lang$ctorPrWriter = (function (this__4428__auto__,writer__4429__auto__,opt__4430__auto__){
return cljs.core._write(writer__4429__auto__,"cljs.core.async/t_cljs$core$async31384");
}));

/**
 * Positional factory function for cljs.core.async/t_cljs$core$async31384.
 */
cljs.core.async.__GT_t_cljs$core$async31384 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async31384(p__$1,ch__$1,meta31385){
return (new cljs.core.async.t_cljs$core$async31384(p__$1,ch__$1,meta31385));
});

}

return (new cljs.core.async.t_cljs$core$async31384(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_(cljs.core.complement(p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__31389 = arguments.length;
switch (G__31389) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___33847 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31410){
var state_val_31411 = (state_31410[(1)]);
if((state_val_31411 === (7))){
var inst_31406 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31417_33859 = state_31410__$1;
(statearr_31417_33859[(2)] = inst_31406);

(statearr_31417_33859[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (1))){
var state_31410__$1 = state_31410;
var statearr_31418_33870 = state_31410__$1;
(statearr_31418_33870[(2)] = null);

(statearr_31418_33870[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (4))){
var inst_31392 = (state_31410[(7)]);
var inst_31392__$1 = (state_31410[(2)]);
var inst_31393 = (inst_31392__$1 == null);
var state_31410__$1 = (function (){var statearr_31419 = state_31410;
(statearr_31419[(7)] = inst_31392__$1);

return statearr_31419;
})();
if(cljs.core.truth_(inst_31393)){
var statearr_31420_33876 = state_31410__$1;
(statearr_31420_33876[(1)] = (5));

} else {
var statearr_31421_33878 = state_31410__$1;
(statearr_31421_33878[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (6))){
var inst_31392 = (state_31410[(7)]);
var inst_31397 = (p.cljs$core$IFn$_invoke$arity$1 ? p.cljs$core$IFn$_invoke$arity$1(inst_31392) : p.call(null,inst_31392));
var state_31410__$1 = state_31410;
if(cljs.core.truth_(inst_31397)){
var statearr_31424_33884 = state_31410__$1;
(statearr_31424_33884[(1)] = (8));

} else {
var statearr_31426_33888 = state_31410__$1;
(statearr_31426_33888[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (3))){
var inst_31408 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31410__$1,inst_31408);
} else {
if((state_val_31411 === (2))){
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31410__$1,(4),ch);
} else {
if((state_val_31411 === (11))){
var inst_31400 = (state_31410[(2)]);
var state_31410__$1 = state_31410;
var statearr_31430_33892 = state_31410__$1;
(statearr_31430_33892[(2)] = inst_31400);

(statearr_31430_33892[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (9))){
var state_31410__$1 = state_31410;
var statearr_31431_33894 = state_31410__$1;
(statearr_31431_33894[(2)] = null);

(statearr_31431_33894[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (5))){
var inst_31395 = cljs.core.async.close_BANG_(out);
var state_31410__$1 = state_31410;
var statearr_31432_33902 = state_31410__$1;
(statearr_31432_33902[(2)] = inst_31395);

(statearr_31432_33902[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (10))){
var inst_31403 = (state_31410[(2)]);
var state_31410__$1 = (function (){var statearr_31436 = state_31410;
(statearr_31436[(8)] = inst_31403);

return statearr_31436;
})();
var statearr_31437_33903 = state_31410__$1;
(statearr_31437_33903[(2)] = null);

(statearr_31437_33903[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31411 === (8))){
var inst_31392 = (state_31410[(7)]);
var state_31410__$1 = state_31410;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31410__$1,(11),out,inst_31392);
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
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31440 = [null,null,null,null,null,null,null,null,null];
(statearr_31440[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31440[(1)] = (1));

return statearr_31440;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31410){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31410);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31441){if((e31441 instanceof Object)){
var ex__28499__auto__ = e31441;
var statearr_31442_33913 = state_31410;
(statearr_31442_33913[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31410);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31441;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33918 = state_31410;
state_31410 = G__33918;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31410){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31410);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31446 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31446[(6)] = c__28836__auto___33847);

return statearr_31446;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__31448 = arguments.length;
switch (G__31448) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3(p,ch,null);
}));

(cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3(cljs.core.complement(p),ch,buf_or_n);
}));

(cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3);

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__28836__auto__ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31520){
var state_val_31526 = (state_31520[(1)]);
if((state_val_31526 === (7))){
var inst_31516 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31534_33943 = state_31520__$1;
(statearr_31534_33943[(2)] = inst_31516);

(statearr_31534_33943[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (20))){
var inst_31483 = (state_31520[(7)]);
var inst_31496 = (state_31520[(2)]);
var inst_31498 = cljs.core.next(inst_31483);
var inst_31468 = inst_31498;
var inst_31469 = null;
var inst_31470 = (0);
var inst_31471 = (0);
var state_31520__$1 = (function (){var statearr_31536 = state_31520;
(statearr_31536[(8)] = inst_31469);

(statearr_31536[(9)] = inst_31468);

(statearr_31536[(10)] = inst_31496);

(statearr_31536[(11)] = inst_31471);

(statearr_31536[(12)] = inst_31470);

return statearr_31536;
})();
var statearr_31538_33952 = state_31520__$1;
(statearr_31538_33952[(2)] = null);

(statearr_31538_33952[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (1))){
var state_31520__$1 = state_31520;
var statearr_31543_33953 = state_31520__$1;
(statearr_31543_33953[(2)] = null);

(statearr_31543_33953[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (4))){
var inst_31453 = (state_31520[(13)]);
var inst_31453__$1 = (state_31520[(2)]);
var inst_31455 = (inst_31453__$1 == null);
var state_31520__$1 = (function (){var statearr_31550 = state_31520;
(statearr_31550[(13)] = inst_31453__$1);

return statearr_31550;
})();
if(cljs.core.truth_(inst_31455)){
var statearr_31555_33956 = state_31520__$1;
(statearr_31555_33956[(1)] = (5));

} else {
var statearr_31556_33957 = state_31520__$1;
(statearr_31556_33957[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (15))){
var state_31520__$1 = state_31520;
var statearr_31564_33958 = state_31520__$1;
(statearr_31564_33958[(2)] = null);

(statearr_31564_33958[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (21))){
var state_31520__$1 = state_31520;
var statearr_31565_33959 = state_31520__$1;
(statearr_31565_33959[(2)] = null);

(statearr_31565_33959[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (13))){
var inst_31469 = (state_31520[(8)]);
var inst_31468 = (state_31520[(9)]);
var inst_31471 = (state_31520[(11)]);
var inst_31470 = (state_31520[(12)]);
var inst_31478 = (state_31520[(2)]);
var inst_31480 = (inst_31471 + (1));
var tmp31560 = inst_31469;
var tmp31561 = inst_31468;
var tmp31562 = inst_31470;
var inst_31468__$1 = tmp31561;
var inst_31469__$1 = tmp31560;
var inst_31470__$1 = tmp31562;
var inst_31471__$1 = inst_31480;
var state_31520__$1 = (function (){var statearr_31566 = state_31520;
(statearr_31566[(8)] = inst_31469__$1);

(statearr_31566[(9)] = inst_31468__$1);

(statearr_31566[(14)] = inst_31478);

(statearr_31566[(11)] = inst_31471__$1);

(statearr_31566[(12)] = inst_31470__$1);

return statearr_31566;
})();
var statearr_31571_33962 = state_31520__$1;
(statearr_31571_33962[(2)] = null);

(statearr_31571_33962[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (22))){
var state_31520__$1 = state_31520;
var statearr_31575_33963 = state_31520__$1;
(statearr_31575_33963[(2)] = null);

(statearr_31575_33963[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (6))){
var inst_31453 = (state_31520[(13)]);
var inst_31466 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31453) : f.call(null,inst_31453));
var inst_31467 = cljs.core.seq(inst_31466);
var inst_31468 = inst_31467;
var inst_31469 = null;
var inst_31470 = (0);
var inst_31471 = (0);
var state_31520__$1 = (function (){var statearr_31577 = state_31520;
(statearr_31577[(8)] = inst_31469);

(statearr_31577[(9)] = inst_31468);

(statearr_31577[(11)] = inst_31471);

(statearr_31577[(12)] = inst_31470);

return statearr_31577;
})();
var statearr_31578_33972 = state_31520__$1;
(statearr_31578_33972[(2)] = null);

(statearr_31578_33972[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (17))){
var inst_31483 = (state_31520[(7)]);
var inst_31488 = cljs.core.chunk_first(inst_31483);
var inst_31489 = cljs.core.chunk_rest(inst_31483);
var inst_31490 = cljs.core.count(inst_31488);
var inst_31468 = inst_31489;
var inst_31469 = inst_31488;
var inst_31470 = inst_31490;
var inst_31471 = (0);
var state_31520__$1 = (function (){var statearr_31583 = state_31520;
(statearr_31583[(8)] = inst_31469);

(statearr_31583[(9)] = inst_31468);

(statearr_31583[(11)] = inst_31471);

(statearr_31583[(12)] = inst_31470);

return statearr_31583;
})();
var statearr_31587_33991 = state_31520__$1;
(statearr_31587_33991[(2)] = null);

(statearr_31587_33991[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (3))){
var inst_31518 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31520__$1,inst_31518);
} else {
if((state_val_31526 === (12))){
var inst_31506 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31589_33999 = state_31520__$1;
(statearr_31589_33999[(2)] = inst_31506);

(statearr_31589_33999[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (2))){
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31520__$1,(4),in$);
} else {
if((state_val_31526 === (23))){
var inst_31514 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31594_34001 = state_31520__$1;
(statearr_31594_34001[(2)] = inst_31514);

(statearr_31594_34001[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (19))){
var inst_31501 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31595_34003 = state_31520__$1;
(statearr_31595_34003[(2)] = inst_31501);

(statearr_31595_34003[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (11))){
var inst_31468 = (state_31520[(9)]);
var inst_31483 = (state_31520[(7)]);
var inst_31483__$1 = cljs.core.seq(inst_31468);
var state_31520__$1 = (function (){var statearr_31597 = state_31520;
(statearr_31597[(7)] = inst_31483__$1);

return statearr_31597;
})();
if(inst_31483__$1){
var statearr_31600_34007 = state_31520__$1;
(statearr_31600_34007[(1)] = (14));

} else {
var statearr_31601_34008 = state_31520__$1;
(statearr_31601_34008[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (9))){
var inst_31508 = (state_31520[(2)]);
var inst_31509 = cljs.core.async.impl.protocols.closed_QMARK_(out);
var state_31520__$1 = (function (){var statearr_31602 = state_31520;
(statearr_31602[(15)] = inst_31508);

return statearr_31602;
})();
if(cljs.core.truth_(inst_31509)){
var statearr_31604_34009 = state_31520__$1;
(statearr_31604_34009[(1)] = (21));

} else {
var statearr_31605_34010 = state_31520__$1;
(statearr_31605_34010[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (5))){
var inst_31460 = cljs.core.async.close_BANG_(out);
var state_31520__$1 = state_31520;
var statearr_31610_34015 = state_31520__$1;
(statearr_31610_34015[(2)] = inst_31460);

(statearr_31610_34015[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (14))){
var inst_31483 = (state_31520[(7)]);
var inst_31486 = cljs.core.chunked_seq_QMARK_(inst_31483);
var state_31520__$1 = state_31520;
if(inst_31486){
var statearr_31615_34018 = state_31520__$1;
(statearr_31615_34018[(1)] = (17));

} else {
var statearr_31616_34019 = state_31520__$1;
(statearr_31616_34019[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (16))){
var inst_31504 = (state_31520[(2)]);
var state_31520__$1 = state_31520;
var statearr_31621_34020 = state_31520__$1;
(statearr_31621_34020[(2)] = inst_31504);

(statearr_31621_34020[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31526 === (10))){
var inst_31469 = (state_31520[(8)]);
var inst_31471 = (state_31520[(11)]);
var inst_31476 = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(inst_31469,inst_31471);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31520__$1,(13),out,inst_31476);
} else {
if((state_val_31526 === (18))){
var inst_31483 = (state_31520[(7)]);
var inst_31493 = cljs.core.first(inst_31483);
var state_31520__$1 = state_31520;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31520__$1,(20),out,inst_31493);
} else {
if((state_val_31526 === (8))){
var inst_31471 = (state_31520[(11)]);
var inst_31470 = (state_31520[(12)]);
var inst_31473 = (inst_31471 < inst_31470);
var inst_31474 = inst_31473;
var state_31520__$1 = state_31520;
if(cljs.core.truth_(inst_31474)){
var statearr_31626_34021 = state_31520__$1;
(statearr_31626_34021[(1)] = (10));

} else {
var statearr_31627_34022 = state_31520__$1;
(statearr_31627_34022[(1)] = (11));

}

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
}
}
}
});
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____0 = (function (){
var statearr_31632 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31632[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__);

(statearr_31632[(1)] = (1));

return statearr_31632;
});
var cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____1 = (function (state_31520){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31520);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31635){if((e31635 instanceof Object)){
var ex__28499__auto__ = e31635;
var statearr_31637_34027 = state_31520;
(statearr_31637_34027[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31520);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31635;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34032 = state_31520;
state_31520 = G__34032;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__ = function(state_31520){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____1.call(this,state_31520);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__28496__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31639 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31639[(6)] = c__28836__auto__);

return statearr_31639;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));

return c__28836__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__31646 = arguments.length;
switch (G__31646) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3(f,in$,null);
}));

(cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return out;
}));

(cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__31660 = arguments.length;
switch (G__31660) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3(f,out,null);
}));

(cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
cljs.core.async.mapcat_STAR_(f,in$,out);

return in$;
}));

(cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__31684 = arguments.length;
switch (G__31684) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2(ch,null);
}));

(cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___34046 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31726){
var state_val_31728 = (state_31726[(1)]);
if((state_val_31728 === (7))){
var inst_31721 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31731_34047 = state_31726__$1;
(statearr_31731_34047[(2)] = inst_31721);

(statearr_31731_34047[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (1))){
var inst_31700 = null;
var state_31726__$1 = (function (){var statearr_31732 = state_31726;
(statearr_31732[(7)] = inst_31700);

return statearr_31732;
})();
var statearr_31733_34052 = state_31726__$1;
(statearr_31733_34052[(2)] = null);

(statearr_31733_34052[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (4))){
var inst_31704 = (state_31726[(8)]);
var inst_31704__$1 = (state_31726[(2)]);
var inst_31705 = (inst_31704__$1 == null);
var inst_31706 = cljs.core.not(inst_31705);
var state_31726__$1 = (function (){var statearr_31739 = state_31726;
(statearr_31739[(8)] = inst_31704__$1);

return statearr_31739;
})();
if(inst_31706){
var statearr_31740_34061 = state_31726__$1;
(statearr_31740_34061[(1)] = (5));

} else {
var statearr_31744_34066 = state_31726__$1;
(statearr_31744_34066[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (6))){
var state_31726__$1 = state_31726;
var statearr_31747_34072 = state_31726__$1;
(statearr_31747_34072[(2)] = null);

(statearr_31747_34072[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (3))){
var inst_31723 = (state_31726[(2)]);
var inst_31724 = cljs.core.async.close_BANG_(out);
var state_31726__$1 = (function (){var statearr_31748 = state_31726;
(statearr_31748[(9)] = inst_31723);

return statearr_31748;
})();
return cljs.core.async.impl.ioc_helpers.return_chan(state_31726__$1,inst_31724);
} else {
if((state_val_31728 === (2))){
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31726__$1,(4),ch);
} else {
if((state_val_31728 === (11))){
var inst_31704 = (state_31726[(8)]);
var inst_31715 = (state_31726[(2)]);
var inst_31700 = inst_31704;
var state_31726__$1 = (function (){var statearr_31753 = state_31726;
(statearr_31753[(7)] = inst_31700);

(statearr_31753[(10)] = inst_31715);

return statearr_31753;
})();
var statearr_31754_34085 = state_31726__$1;
(statearr_31754_34085[(2)] = null);

(statearr_31754_34085[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (9))){
var inst_31704 = (state_31726[(8)]);
var state_31726__$1 = state_31726;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31726__$1,(11),out,inst_31704);
} else {
if((state_val_31728 === (5))){
var inst_31704 = (state_31726[(8)]);
var inst_31700 = (state_31726[(7)]);
var inst_31709 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31704,inst_31700);
var state_31726__$1 = state_31726;
if(inst_31709){
var statearr_31760_34095 = state_31726__$1;
(statearr_31760_34095[(1)] = (8));

} else {
var statearr_31761_34100 = state_31726__$1;
(statearr_31761_34100[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (10))){
var inst_31718 = (state_31726[(2)]);
var state_31726__$1 = state_31726;
var statearr_31765_34101 = state_31726__$1;
(statearr_31765_34101[(2)] = inst_31718);

(statearr_31765_34101[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31728 === (8))){
var inst_31700 = (state_31726[(7)]);
var tmp31759 = inst_31700;
var inst_31700__$1 = tmp31759;
var state_31726__$1 = (function (){var statearr_31767 = state_31726;
(statearr_31767[(7)] = inst_31700__$1);

return statearr_31767;
})();
var statearr_31768_34119 = state_31726__$1;
(statearr_31768_34119[(2)] = null);

(statearr_31768_34119[(1)] = (2));


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
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31769 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_31769[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31769[(1)] = (1));

return statearr_31769;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31726){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31726);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31770){if((e31770 instanceof Object)){
var ex__28499__auto__ = e31770;
var statearr_31771_34128 = state_31726;
(statearr_31771_34128[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31726);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31770;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34130 = state_31726;
state_31726 = G__34130;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31726){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31726);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31772 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31772[(6)] = c__28836__auto___34046);

return statearr_31772;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.unique.cljs$lang$maxFixedArity = 2);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__31781 = arguments.length;
switch (G__31781) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3(n,ch,null);
}));

(cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___34156 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31826){
var state_val_31827 = (state_31826[(1)]);
if((state_val_31827 === (7))){
var inst_31820 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31831_34167 = state_31826__$1;
(statearr_31831_34167[(2)] = inst_31820);

(statearr_31831_34167[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (1))){
var inst_31783 = (new Array(n));
var inst_31784 = inst_31783;
var inst_31785 = (0);
var state_31826__$1 = (function (){var statearr_31832 = state_31826;
(statearr_31832[(7)] = inst_31785);

(statearr_31832[(8)] = inst_31784);

return statearr_31832;
})();
var statearr_31833_34181 = state_31826__$1;
(statearr_31833_34181[(2)] = null);

(statearr_31833_34181[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (4))){
var inst_31788 = (state_31826[(9)]);
var inst_31788__$1 = (state_31826[(2)]);
var inst_31789 = (inst_31788__$1 == null);
var inst_31790 = cljs.core.not(inst_31789);
var state_31826__$1 = (function (){var statearr_31835 = state_31826;
(statearr_31835[(9)] = inst_31788__$1);

return statearr_31835;
})();
if(inst_31790){
var statearr_31837_34187 = state_31826__$1;
(statearr_31837_34187[(1)] = (5));

} else {
var statearr_31838_34190 = state_31826__$1;
(statearr_31838_34190[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (15))){
var inst_31814 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31839_34191 = state_31826__$1;
(statearr_31839_34191[(2)] = inst_31814);

(statearr_31839_34191[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (13))){
var state_31826__$1 = state_31826;
var statearr_31841_34192 = state_31826__$1;
(statearr_31841_34192[(2)] = null);

(statearr_31841_34192[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (6))){
var inst_31785 = (state_31826[(7)]);
var inst_31810 = (inst_31785 > (0));
var state_31826__$1 = state_31826;
if(cljs.core.truth_(inst_31810)){
var statearr_31843_34201 = state_31826__$1;
(statearr_31843_34201[(1)] = (12));

} else {
var statearr_31844_34206 = state_31826__$1;
(statearr_31844_34206[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (3))){
var inst_31822 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31826__$1,inst_31822);
} else {
if((state_val_31827 === (12))){
var inst_31784 = (state_31826[(8)]);
var inst_31812 = cljs.core.vec(inst_31784);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31826__$1,(15),out,inst_31812);
} else {
if((state_val_31827 === (2))){
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31826__$1,(4),ch);
} else {
if((state_val_31827 === (11))){
var inst_31800 = (state_31826[(2)]);
var inst_31801 = (new Array(n));
var inst_31784 = inst_31801;
var inst_31785 = (0);
var state_31826__$1 = (function (){var statearr_31845 = state_31826;
(statearr_31845[(10)] = inst_31800);

(statearr_31845[(7)] = inst_31785);

(statearr_31845[(8)] = inst_31784);

return statearr_31845;
})();
var statearr_31846_34242 = state_31826__$1;
(statearr_31846_34242[(2)] = null);

(statearr_31846_34242[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (9))){
var inst_31784 = (state_31826[(8)]);
var inst_31798 = cljs.core.vec(inst_31784);
var state_31826__$1 = state_31826;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31826__$1,(11),out,inst_31798);
} else {
if((state_val_31827 === (5))){
var inst_31788 = (state_31826[(9)]);
var inst_31785 = (state_31826[(7)]);
var inst_31784 = (state_31826[(8)]);
var inst_31793 = (state_31826[(11)]);
var inst_31792 = (inst_31784[inst_31785] = inst_31788);
var inst_31793__$1 = (inst_31785 + (1));
var inst_31794 = (inst_31793__$1 < n);
var state_31826__$1 = (function (){var statearr_31850 = state_31826;
(statearr_31850[(12)] = inst_31792);

(statearr_31850[(11)] = inst_31793__$1);

return statearr_31850;
})();
if(cljs.core.truth_(inst_31794)){
var statearr_31851_34257 = state_31826__$1;
(statearr_31851_34257[(1)] = (8));

} else {
var statearr_31852_34260 = state_31826__$1;
(statearr_31852_34260[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (14))){
var inst_31817 = (state_31826[(2)]);
var inst_31818 = cljs.core.async.close_BANG_(out);
var state_31826__$1 = (function (){var statearr_31854 = state_31826;
(statearr_31854[(13)] = inst_31817);

return statearr_31854;
})();
var statearr_31857_34271 = state_31826__$1;
(statearr_31857_34271[(2)] = inst_31818);

(statearr_31857_34271[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (10))){
var inst_31804 = (state_31826[(2)]);
var state_31826__$1 = state_31826;
var statearr_31859_34289 = state_31826__$1;
(statearr_31859_34289[(2)] = inst_31804);

(statearr_31859_34289[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31827 === (8))){
var inst_31784 = (state_31826[(8)]);
var inst_31793 = (state_31826[(11)]);
var tmp31853 = inst_31784;
var inst_31784__$1 = tmp31853;
var inst_31785 = inst_31793;
var state_31826__$1 = (function (){var statearr_31860 = state_31826;
(statearr_31860[(7)] = inst_31785);

(statearr_31860[(8)] = inst_31784__$1);

return statearr_31860;
})();
var statearr_31861_34306 = state_31826__$1;
(statearr_31861_34306[(2)] = null);

(statearr_31861_34306[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31862 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31862[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31862[(1)] = (1));

return statearr_31862;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31826){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31826);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31863){if((e31863 instanceof Object)){
var ex__28499__auto__ = e31863;
var statearr_31864_34323 = state_31826;
(statearr_31864_34323[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31826);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31863;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34337 = state_31826;
state_31826 = G__34337;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31826){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31826);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31865 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31865[(6)] = c__28836__auto___34156);

return statearr_31865;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.partition.cljs$lang$maxFixedArity = 3);

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__31871 = arguments.length;
switch (G__31871) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3(f,ch,null);
}));

(cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1(buf_or_n);
var c__28836__auto___34359 = cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((1));
cljs.core.async.impl.dispatch.run((function (){
var f__28837__auto__ = (function (){var switch__28495__auto__ = (function (state_31918){
var state_val_31919 = (state_31918[(1)]);
if((state_val_31919 === (7))){
var inst_31914 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31925_34367 = state_31918__$1;
(statearr_31925_34367[(2)] = inst_31914);

(statearr_31925_34367[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (1))){
var inst_31876 = [];
var inst_31877 = inst_31876;
var inst_31878 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_31918__$1 = (function (){var statearr_31926 = state_31918;
(statearr_31926[(7)] = inst_31878);

(statearr_31926[(8)] = inst_31877);

return statearr_31926;
})();
var statearr_31927_34379 = state_31918__$1;
(statearr_31927_34379[(2)] = null);

(statearr_31927_34379[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (4))){
var inst_31881 = (state_31918[(9)]);
var inst_31881__$1 = (state_31918[(2)]);
var inst_31882 = (inst_31881__$1 == null);
var inst_31883 = cljs.core.not(inst_31882);
var state_31918__$1 = (function (){var statearr_31928 = state_31918;
(statearr_31928[(9)] = inst_31881__$1);

return statearr_31928;
})();
if(inst_31883){
var statearr_31929_34382 = state_31918__$1;
(statearr_31929_34382[(1)] = (5));

} else {
var statearr_31930_34383 = state_31918__$1;
(statearr_31930_34383[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (15))){
var inst_31908 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31931_34385 = state_31918__$1;
(statearr_31931_34385[(2)] = inst_31908);

(statearr_31931_34385[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (13))){
var state_31918__$1 = state_31918;
var statearr_31935_34391 = state_31918__$1;
(statearr_31935_34391[(2)] = null);

(statearr_31935_34391[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (6))){
var inst_31877 = (state_31918[(8)]);
var inst_31903 = inst_31877.length;
var inst_31904 = (inst_31903 > (0));
var state_31918__$1 = state_31918;
if(cljs.core.truth_(inst_31904)){
var statearr_31945_34402 = state_31918__$1;
(statearr_31945_34402[(1)] = (12));

} else {
var statearr_31946_34405 = state_31918__$1;
(statearr_31946_34405[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (3))){
var inst_31916 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.return_chan(state_31918__$1,inst_31916);
} else {
if((state_val_31919 === (12))){
var inst_31877 = (state_31918[(8)]);
var inst_31906 = cljs.core.vec(inst_31877);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31918__$1,(15),out,inst_31906);
} else {
if((state_val_31919 === (2))){
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.take_BANG_(state_31918__$1,(4),ch);
} else {
if((state_val_31919 === (11))){
var inst_31885 = (state_31918[(10)]);
var inst_31881 = (state_31918[(9)]);
var inst_31896 = (state_31918[(2)]);
var inst_31897 = [];
var inst_31898 = inst_31897.push(inst_31881);
var inst_31877 = inst_31897;
var inst_31878 = inst_31885;
var state_31918__$1 = (function (){var statearr_31949 = state_31918;
(statearr_31949[(11)] = inst_31898);

(statearr_31949[(7)] = inst_31878);

(statearr_31949[(8)] = inst_31877);

(statearr_31949[(12)] = inst_31896);

return statearr_31949;
})();
var statearr_31950_34427 = state_31918__$1;
(statearr_31950_34427[(2)] = null);

(statearr_31950_34427[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (9))){
var inst_31877 = (state_31918[(8)]);
var inst_31894 = cljs.core.vec(inst_31877);
var state_31918__$1 = state_31918;
return cljs.core.async.impl.ioc_helpers.put_BANG_(state_31918__$1,(11),out,inst_31894);
} else {
if((state_val_31919 === (5))){
var inst_31885 = (state_31918[(10)]);
var inst_31881 = (state_31918[(9)]);
var inst_31878 = (state_31918[(7)]);
var inst_31885__$1 = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(inst_31881) : f.call(null,inst_31881));
var inst_31887 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(inst_31885__$1,inst_31878);
var inst_31888 = cljs.core.keyword_identical_QMARK_(inst_31878,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_31889 = ((inst_31887) || (inst_31888));
var state_31918__$1 = (function (){var statearr_31951 = state_31918;
(statearr_31951[(10)] = inst_31885__$1);

return statearr_31951;
})();
if(cljs.core.truth_(inst_31889)){
var statearr_31953_34436 = state_31918__$1;
(statearr_31953_34436[(1)] = (8));

} else {
var statearr_31954_34438 = state_31918__$1;
(statearr_31954_34438[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (14))){
var inst_31911 = (state_31918[(2)]);
var inst_31912 = cljs.core.async.close_BANG_(out);
var state_31918__$1 = (function (){var statearr_31956 = state_31918;
(statearr_31956[(13)] = inst_31911);

return statearr_31956;
})();
var statearr_31957_34444 = state_31918__$1;
(statearr_31957_34444[(2)] = inst_31912);

(statearr_31957_34444[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (10))){
var inst_31901 = (state_31918[(2)]);
var state_31918__$1 = state_31918;
var statearr_31958_34446 = state_31918__$1;
(statearr_31958_34446[(2)] = inst_31901);

(statearr_31958_34446[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_31919 === (8))){
var inst_31885 = (state_31918[(10)]);
var inst_31881 = (state_31918[(9)]);
var inst_31877 = (state_31918[(8)]);
var inst_31891 = inst_31877.push(inst_31881);
var tmp31955 = inst_31877;
var inst_31877__$1 = tmp31955;
var inst_31878 = inst_31885;
var state_31918__$1 = (function (){var statearr_31960 = state_31918;
(statearr_31960[(7)] = inst_31878);

(statearr_31960[(8)] = inst_31877__$1);

(statearr_31960[(14)] = inst_31891);

return statearr_31960;
})();
var statearr_31962_34448 = state_31918__$1;
(statearr_31962_34448[(2)] = null);

(statearr_31962_34448[(1)] = (2));


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
}
}
}
}
}
});
return (function() {
var cljs$core$async$state_machine__28496__auto__ = null;
var cljs$core$async$state_machine__28496__auto____0 = (function (){
var statearr_31963 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_31963[(0)] = cljs$core$async$state_machine__28496__auto__);

(statearr_31963[(1)] = (1));

return statearr_31963;
});
var cljs$core$async$state_machine__28496__auto____1 = (function (state_31918){
while(true){
var ret_value__28497__auto__ = (function (){try{while(true){
var result__28498__auto__ = switch__28495__auto__(state_31918);
if(cljs.core.keyword_identical_QMARK_(result__28498__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__28498__auto__;
}
break;
}
}catch (e31964){if((e31964 instanceof Object)){
var ex__28499__auto__ = e31964;
var statearr_31966_34467 = state_31918;
(statearr_31966_34467[(5)] = ex__28499__auto__);


cljs.core.async.impl.ioc_helpers.process_exception(state_31918);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e31964;

}
}})();
if(cljs.core.keyword_identical_QMARK_(ret_value__28497__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34471 = state_31918;
state_31918 = G__34471;
continue;
} else {
return ret_value__28497__auto__;
}
break;
}
});
cljs$core$async$state_machine__28496__auto__ = function(state_31918){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__28496__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__28496__auto____1.call(this,state_31918);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__28496__auto____0;
cljs$core$async$state_machine__28496__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__28496__auto____1;
return cljs$core$async$state_machine__28496__auto__;
})()
})();
var state__28838__auto__ = (function (){var statearr_31972 = (f__28837__auto__.cljs$core$IFn$_invoke$arity$0 ? f__28837__auto__.cljs$core$IFn$_invoke$arity$0() : f__28837__auto__.call(null));
(statearr_31972[(6)] = c__28836__auto___34359);

return statearr_31972;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped(state__28838__auto__);
}));


return out;
}));

(cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=cljs.core.async.js.map
