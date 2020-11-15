goog.provide("goog.async.Debouncer");
goog.require("goog.Disposable");
goog.require("goog.Timer");
/**
 * @final
 * @struct
 * @constructor
 * @extends {goog.Disposable}
 * @param {function(this:T,...?)} listener
 * @param {number} interval
 * @param {T=} opt_handler
 * @template T
 */
goog.async.Debouncer = function(listener, interval, opt_handler) {
  goog.async.Debouncer.base(this, "constructor");
  /** @private @const @type {function(this:T,...?)} */ this.listener_ = opt_handler != null ? goog.bind(listener, opt_handler) : listener;
  /** @private @const @type {number} */ this.interval_ = interval;
  /** @private @const @type {!Function} */ this.callback_ = goog.bind(this.onTimer_, this);
  /** @private @type {boolean} */ this.shouldFire_ = false;
  /** @private @type {number} */ this.pauseCount_ = 0;
  /** @private @type {?number} */ this.timer_ = null;
  /** @private @type {?number} */ this.refireAt_ = null;
  /** @private @type {!IArrayLike} */ this.args_ = [];
};
goog.inherits(goog.async.Debouncer, goog.Disposable);
/**
 * @param {...?} var_args
 */
goog.async.Debouncer.prototype.fire = function(var_args) {
  this.args_ = arguments;
  this.shouldFire_ = false;
  if (this.timer_) {
    this.refireAt_ = goog.now() + this.interval_;
    return;
  }
  this.timer_ = goog.Timer.callOnce(this.callback_, this.interval_);
};
goog.async.Debouncer.prototype.stop = function() {
  if (this.timer_) {
    goog.Timer.clear(this.timer_);
    this.timer_ = null;
  }
  this.refireAt_ = null;
  this.shouldFire_ = false;
  this.args_ = [];
};
goog.async.Debouncer.prototype.pause = function() {
  ++this.pauseCount_;
};
goog.async.Debouncer.prototype.resume = function() {
  if (!this.pauseCount_) {
    return;
  }
  --this.pauseCount_;
  if (!this.pauseCount_ && this.shouldFire_) {
    this.doAction_();
  }
};
/** @override */ goog.async.Debouncer.prototype.disposeInternal = function() {
  this.stop();
  goog.async.Debouncer.base(this, "disposeInternal");
};
/** @private */ goog.async.Debouncer.prototype.onTimer_ = function() {
  if (this.refireAt_) {
    this.timer_ = goog.Timer.callOnce(this.callback_, this.refireAt_ - goog.now());
    this.refireAt_ = null;
    return;
  }
  this.timer_ = null;
  if (!this.pauseCount_) {
    this.doAction_();
  } else {
    this.shouldFire_ = true;
  }
};
/** @private */ goog.async.Debouncer.prototype.doAction_ = function() {
  this.shouldFire_ = false;
  this.listener_.apply(null, this.args_);
};

//# sourceMappingURL=goog.async.debouncer.js.map
