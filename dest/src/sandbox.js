// generatedy by JSX compiler 0.9.66 (2013-10-13 12:37:20 +0900; 4525320577693075e52957231caaac892755c6fb)
var JSX = {};
(function (JSX) {
/**
 * extends the class
 */
function $__jsx_extend(derivations, base) {
	var ctor = function () {};
	ctor.prototype = base.prototype;
	var proto = new ctor();
	for (var i in derivations) {
		derivations[i].prototype = proto;
	}
}

/**
 * copies the implementations from source interface to target
 */
function $__jsx_merge_interface(target, source) {
	for (var k in source.prototype)
		if (source.prototype.hasOwnProperty(k))
			target.prototype[k] = source.prototype[k];
}

/**
 * defers the initialization of the property
 */
function $__jsx_lazy_init(obj, prop, func) {
	function reset(obj, prop, value) {
		delete obj[prop];
		obj[prop] = value;
		return value;
	}

	Object.defineProperty(obj, prop, {
		get: function () {
			return reset(obj, prop, func());
		},
		set: function (v) {
			reset(obj, prop, v);
		},
		enumerable: true,
		configurable: true
	});
}

/**
 * sideeffect().a /= b
 */
function $__jsx_div_assign(obj, prop, divisor) {
	return obj[prop] = (obj[prop] / divisor) | 0;
}

/*
 * global functions, renamed to avoid conflict with local variable names
 */
var $__jsx_parseInt = parseInt;
var $__jsx_parseFloat = parseFloat;
function $__jsx_isNaN(n) { return n !== n; }
var $__jsx_isFinite = isFinite;

var $__jsx_encodeURIComponent = encodeURIComponent;
var $__jsx_decodeURIComponent = decodeURIComponent;
var $__jsx_encodeURI = encodeURI;
var $__jsx_decodeURI = decodeURI;

var $__jsx_ObjectToString = Object.prototype.toString;
var $__jsx_ObjectHasOwnProperty = Object.prototype.hasOwnProperty;

/*
 * profiler object, initialized afterwards
 */
function $__jsx_profiler() {
}

/*
 * public interface to JSX code
 */
JSX.require = function (path) {
	var m = $__jsx_classMap[path];
	return m !== undefined ? m : null;
};

JSX.profilerIsRunning = function () {
	return $__jsx_profiler.getResults != null;
};

JSX.getProfileResults = function () {
	return ($__jsx_profiler.getResults || function () { return {}; })();
};

JSX.postProfileResults = function (url, cb) {
	if ($__jsx_profiler.postResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.postResults(url, cb);
};

JSX.resetProfileResults = function () {
	if ($__jsx_profiler.resetResults == null)
		throw new Error("profiler has not been turned on");
	return $__jsx_profiler.resetResults();
};
JSX.DEBUG = false;
function StopIteration() {
	Error.call(this);
	this.name = "StopIteration";
	if (Error.captureStackTrace) Error.captureStackTrace(this, StopIteration);
};

$__jsx_extend([StopIteration], Error);
function Config() {
};

$__jsx_extend([Config], Object);
function _Main() {
};

$__jsx_extend([_Main], Object);
function _Main$main$AS(args) {
	var canvas;
	var cx;
	var stage;
	canvas = dom.document.getElementById("world");
	cx = canvas.getContext("2d");
	canvas.width = 465;
	canvas.height = 465;
	stage = new Stage(cx);
	canvas.addEventListener("mousemove", (function (event) {
		var e;
		var rect;
		e = event;
		rect = canvas.getBoundingClientRect();
		stage.mouseX = e.clientX - rect.left;
		stage.mouseY = e.clientY - rect.top;
	}));
	dom.document.getElementById("tweet").addEventListener("click", (function (e) {
		_Main$tweet$N(stage.score);
	}));
	dom.document.getElementById("retry").addEventListener("click", (function (e) {
		_Main$start$LStage$(stage);
	}));
	_Main$start$LStage$(stage);
};

_Main.main = _Main$main$AS;
_Main.main$AS = _Main$main$AS;

function _Main$start$LStage$(stage) {
	dom.document.getElementById("tweet").style.visibility = "hidden";
	dom.document.getElementById("retry").style.visibility = "hidden";
	Stage$initialize$LStage$(stage);
	(function tick(elapsed) {
		if (Stage$tick$LStage$(stage)) {
			Timer._requestAnimationFrame(tick);
		} else {
			dom.window.setTimeout((function () {
				Stage$gameOver$LStage$(stage);
			}), 100);
		}
	})(9);
};

_Main.start$LStage$ = _Main$start$LStage$;

function _Main$tweet$N(score) {
	var status;
	var url;
	status = "Score:" + (score + "") + "pt" + " 【" + dom.window.document.title + "】 #BulletTornado #jsdoit" + " " + dom.window.location.href.replace(/\bjsrun\b/, "jsdo");
	url = 'http://twitter.com/home?status=' + $__jsx_encodeURIComponent(status);
	dom.window.open(url, '_blank');
};

_Main.tweet$N = _Main$tweet$N;

function Util() {
};

$__jsx_extend([Util], Object);
function Util$toRadian$N(deg) {
	return 2 * (deg * 0.017453292519943295);
};

Util.toRadian$N = Util$toRadian$N;

function Util$distance$NNNN(x, y, o, p) {
	return Math.sqrt((x - o) * (x - o) + (y - p) * (y - p));
};

Util.distance$NNNN = Util$distance$NNNN;

function Util$getPattern$() {
	var a;
	var b;
	a = Math.random() * 4 | 0;
	b = Math.random() * 4 | 0;
	return [ a, b ];
};

Util.getPattern$ = Util$getPattern$;

function Stage(cx) {
	var cx$0;
	var cx$1;
	this.x = 0;
	this.y = 0;
	this.r = 0;
	this.bullets = null;
	this.pattern = null;
	this.score = 0;
	this.num = 0;
	this.rad = 0;
	this.mouseX = 0;
	this.mouseY = 0;
	this.shownGameOver = false;
	this.cx = null;
	Stage$initialize$LStage$(this);
	cx$0 = this.cx = cx;
	cx$0.beginPath();
	(cx$1 = this.cx).fillStyle = "rgb(0, 0, 0)";
	cx$1.fillRect(0, 0, 465, 465);
	this.cx.fill();
};

$__jsx_extend([Stage], Object);
Stage.prototype.initialize$ = function () {
	this.x = 0;
	this.r = 0;
	this.bullets = [  ];
	this.pattern = [ 2, 2 ];
	this.score = 0;
	this.num = 100;
	this.rad = 3;
	this.mouseX = 232.5;
	this.mouseY = 348.75;
	this.shownGameOver = false;
};


function Stage$initialize$LStage$($this) {
	$this.x = 0;
	$this.r = 0;
	$this.bullets = [  ];
	$this.pattern = [ 2, 2 ];
	$this.score = 0;
	$this.num = 100;
	$this.rad = 3;
	$this.mouseX = 232.5;
	$this.mouseY = 348.75;
	$this.shownGameOver = false;
};

Stage.initialize$LStage$ = Stage$initialize$LStage$;

Stage.prototype.tick$ = function () {
	var $this = this;
	var living;
	var dx;
	var dy;
	var j;
	var deg$0;
	var deg$1;
	var a$0;
	var b$0;
	var cx$0;
	var cx$1;
	var cx$2;
	var cx$3;
	living = true;
	(cx$0 = this.cx).fillStyle = "rgba(0, 0, 0, 0.3)";
	cx$0.fillRect(0, 0, 465, 465);
	dx = 2 * Math.cos((deg$0 = this.r, 2 * (deg$0 * 0.017453292519943295)) * this.pattern[0]);
	dy = 2 * Math.sin((deg$1 = this.r, 2 * (deg$1 * 0.017453292519943295)) * this.pattern[1]);
	this.x = 232.5 + dx * 24;
	this.y = 116.25 + dy * 24;
	for (j = 0; j < this.num * 2; j += this.num) {
		this.bullets.push(({x: this.x, y: this.y, r: j + this.r, s: 2}));
	}
	(cx$1 = this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$1.strokeStyle = "rgb(255, 150, 150)";
	this.bullets.forEach((function (b, i) {
		var x$0;
		var y$0;
		var o$0;
		var p$0;
		var x$1;
		var y$1;
		Bullet$update$LBullet$(b);
		$this.cx.beginPath();
		$this.cx.arc(b.x, b.y, 5, 0, 6.283185307179586, false);
		$this.cx.fill();
		$this.cx.stroke();
		if (5 > (x$0 = $this.mouseX, y$0 = $this.mouseY, o$0 = b.x, p$0 = b.y, Math.sqrt((x$0 - o$0) * (x$0 - o$0) + (y$0 - p$0) * (y$0 - p$0)))) {
			living = false;
		} else if ((x$1 = b.x) <= 0 || (y$1 = b.y) <= 0 || x$1 > 465 || y$1 > 465) {
			$this.bullets.splice(i, 1);
		}
	}));
	this.cx.beginPath();
	(cx$2 = this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$2.fillRect(this.mouseX - 2.5, this.mouseY - 2.5, 5, 5);
	this.cx.fill();
	this.cx.beginPath();
	(cx$3 = this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$3.font = "12px Tahoma,sans-serif";
	cx$3.fillText("Score : " + (this.score + "") + " pt", 2, 12);
	this.cx.fill();
	this.r += this.rad;
	this.score++;
	if (this.score % 100 === 0) {
		a$0 = Math.random() * 4 | 0;
		b$0 = Math.random() * 4 | 0;
		this.pattern = [ a$0, b$0 ];
		this.num -= (this.num <= 80 ? 0 : Math.random() * 10);
		this.rad -= (this.rad <= 1.8 ? 0 : Math.random() * 0.3);
	}
	return living;
};


function Stage$tick$LStage$($this) {
	var living;
	var dx;
	var dy;
	var j;
	var deg$0;
	var deg$1;
	var a$0;
	var b$0;
	var cx$0;
	var cx$1;
	var cx$2;
	var cx$3;
	living = true;
	(cx$0 = $this.cx).fillStyle = "rgba(0, 0, 0, 0.3)";
	cx$0.fillRect(0, 0, 465, 465);
	dx = 2 * Math.cos((deg$0 = $this.r, 2 * (deg$0 * 0.017453292519943295)) * $this.pattern[0]);
	dy = 2 * Math.sin((deg$1 = $this.r, 2 * (deg$1 * 0.017453292519943295)) * $this.pattern[1]);
	$this.x = 232.5 + dx * 24;
	$this.y = 116.25 + dy * 24;
	for (j = 0; j < $this.num * 2; j += $this.num) {
		$this.bullets.push(({x: $this.x, y: $this.y, r: j + $this.r, s: 2}));
	}
	(cx$1 = $this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$1.strokeStyle = "rgb(255, 150, 150)";
	$this.bullets.forEach((function (b, i) {
		var x$0;
		var y$0;
		var o$0;
		var p$0;
		var x$1;
		var y$1;
		Bullet$update$LBullet$(b);
		$this.cx.beginPath();
		$this.cx.arc(b.x, b.y, 5, 0, 6.283185307179586, false);
		$this.cx.fill();
		$this.cx.stroke();
		if (5 > (x$0 = $this.mouseX, y$0 = $this.mouseY, o$0 = b.x, p$0 = b.y, Math.sqrt((x$0 - o$0) * (x$0 - o$0) + (y$0 - p$0) * (y$0 - p$0)))) {
			living = false;
		} else if ((x$1 = b.x) <= 0 || (y$1 = b.y) <= 0 || x$1 > 465 || y$1 > 465) {
			$this.bullets.splice(i, 1);
		}
	}));
	$this.cx.beginPath();
	(cx$2 = $this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$2.fillRect($this.mouseX - 2.5, $this.mouseY - 2.5, 5, 5);
	$this.cx.fill();
	$this.cx.beginPath();
	(cx$3 = $this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$3.font = "12px Tahoma,sans-serif";
	cx$3.fillText("Score : " + ($this.score + "") + " pt", 2, 12);
	$this.cx.fill();
	$this.r += $this.rad;
	$this.score++;
	if ($this.score % 100 === 0) {
		a$0 = Math.random() * 4 | 0;
		b$0 = Math.random() * 4 | 0;
		$this.pattern = [ a$0, b$0 ];
		$this.num -= ($this.num <= 80 ? 0 : Math.random() * 10);
		$this.rad -= ($this.rad <= 1.8 ? 0 : Math.random() * 0.3);
	}
	return living;
};

Stage.tick$LStage$ = Stage$tick$LStage$;

Stage.prototype.gameOver$ = function () {
	var btn_t;
	var btn_c;
	var cx$0;
	var cx$1;
	if (this.shownGameOver) {
		return;
	}
	this.shownGameOver = false;
	this.cx.beginPath();
	this.cx.clearRect(0, 0, 465, 465);
	(cx$0 = this.cx).fillStyle = "rgb(0, 0, 0)";
	cx$0.fillRect(0, 0, 465, 465);
	this.cx.fill();
	this.cx.beginPath();
	(cx$1 = this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$1.font = "18px Tahoma,sans-serif";
	cx$1.textAlign = "center";
	cx$1.fillText("Score : " + (this.score + "") + " pt", 232.5, 116.25);
	this.cx.fill();
	btn_t = dom.document.getElementById("tweet");
	btn_c = dom.document.getElementById("retry");
	btn_c.style.visibility = btn_t.style.visibility = "visible";
	btn_c.style.width = btn_t.style.width = "200px";
	btn_c.style.left = btn_t.style.left = "132px";
	btn_t.style.top = "216px";
	btn_c.style.top = "276px";
};


function Stage$gameOver$LStage$($this) {
	var btn_t;
	var btn_c;
	var cx$0;
	var cx$1;
	if ($this.shownGameOver) {
		return;
	}
	$this.shownGameOver = false;
	$this.cx.beginPath();
	$this.cx.clearRect(0, 0, 465, 465);
	(cx$0 = $this.cx).fillStyle = "rgb(0, 0, 0)";
	cx$0.fillRect(0, 0, 465, 465);
	$this.cx.fill();
	$this.cx.beginPath();
	(cx$1 = $this.cx).fillStyle = "rgb(255, 255, 255)";
	cx$1.font = "18px Tahoma,sans-serif";
	cx$1.textAlign = "center";
	cx$1.fillText("Score : " + ($this.score + "") + " pt", 232.5, 116.25);
	$this.cx.fill();
	btn_t = dom.document.getElementById("tweet");
	btn_c = dom.document.getElementById("retry");
	btn_c.style.visibility = btn_t.style.visibility = "visible";
	btn_c.style.width = btn_t.style.width = "200px";
	btn_c.style.left = btn_t.style.left = "132px";
	btn_t.style.top = "216px";
	btn_c.style.top = "276px";
};

Stage.gameOver$LStage$ = Stage$gameOver$LStage$;

function Bullet(x, y, r, s) {
	this.x = x;
	this.y = y;
	this.r = r;
	this.s = s;
};

$__jsx_extend([Bullet], Object);
function Bullet$update$LBullet$($this) {
	var deg$0;
	var deg$1;
	$this.x += Math.cos((deg$0 = $this.r, 2 * (deg$0 * 0.017453292519943295))) * $this.s;
	$this.y += Math.sin((deg$1 = $this.r, 2 * (deg$1 * 0.017453292519943295))) * $this.s;
};

Bullet.update$LBullet$ = Bullet$update$LBullet$;

var js$0 = (function () { var global = (function () { return this; }()); return { global: global, eval: global.eval, invoke: function(invocant, methodName, args) { return invocant[methodName].apply(invocant, args); } }; }());
function dom() {}
$__jsx_extend([dom], Object);
function dom$id$S(id) {
	return dom.document.getElementById(id);
};

dom.id$S = dom$id$S;

function dom$getElementById$S(id) {
	return dom.document.getElementById(id);
};

dom.getElementById$S = dom$getElementById$S;

function dom$createElement$S(tag) {
	return dom.document.createElement(tag);
};

dom.createElement$S = dom$createElement$S;

function EventInit() {
	this.bubbles = false;
	this.cancelable = false;
};

$__jsx_extend([EventInit], Object);
function CustomEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.detail = null;
};

$__jsx_extend([CustomEventInit], EventInit);
function MutationObserverInit() {
	this.childList = false;
	this.attributes = false;
	this.characterData = false;
	this.subtree = false;
	this.attributeOldValue = false;
	this.characterDataOldValue = false;
	this.attributeFilter = null;
};

$__jsx_extend([MutationObserverInit], Object);
function UIEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
};

$__jsx_extend([UIEventInit], EventInit);
function FocusEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.relatedTarget = null;
};

$__jsx_extend([FocusEventInit], Object);
function MouseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.region = null;
};

$__jsx_extend([MouseEventInit], UIEventInit);
function WheelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.screenX = 0;
	this.screenY = 0;
	this.clientX = 0;
	this.clientY = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.button = 0;
	this.buttons = 0;
	this.relatedTarget = null;
	this.deltaX = 0;
	this.deltaY = 0;
	this.deltaZ = 0;
	this.deltaMode = 0;
};

$__jsx_extend([WheelEventInit], Object);
function KeyboardEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.char = "";
	this.key = "";
	this.location = 0;
	this.ctrlKey = false;
	this.shiftKey = false;
	this.altKey = false;
	this.metaKey = false;
	this.repeat = false;
	this.locale = "";
	this.charCode = 0;
	this.keyCode = 0;
	this.which = 0;
};

$__jsx_extend([KeyboardEventInit], Object);
function CompositionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.view = null;
	this.detail = 0;
	this.data = null;
	this.locale = "";
};

$__jsx_extend([CompositionEventInit], Object);
function ProgressEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.lengthComputable = false;
	this.loaded = 0;
	this.total = 0;
};

$__jsx_extend([ProgressEventInit], EventInit);
function XMLHttpRequestOptions() {
	this.anon = false;
};

$__jsx_extend([XMLHttpRequestOptions], Object);
function ScrollOptions() {
	this.x = 0;
	this.y = 0;
	this.behavior = "";
};

$__jsx_extend([ScrollOptions], Object);
function TrackEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.track = null;
};

$__jsx_extend([TrackEventInit], EventInit);
function PopStateEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.state = null;
};

$__jsx_extend([PopStateEventInit], EventInit);
function HashChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldURL = "";
	this.newURL = "";
};

$__jsx_extend([HashChangeEventInit], EventInit);
function PageTransitionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.persisted = false;
};

$__jsx_extend([PageTransitionEventInit], EventInit);
function ErrorEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.message = "";
	this.filename = "";
	this.lineno = 0;
	this.column = 0;
};

$__jsx_extend([ErrorEventInit], EventInit);
function DragEventInit() {
	MouseEventInit.call(this);
	this.dataTransfer = null;
};

$__jsx_extend([DragEventInit], MouseEventInit);
function CloseEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.wasClean = false;
	this.code = 0;
	this.reason = "";
};

$__jsx_extend([CloseEventInit], EventInit);
function StorageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.key = null;
	this.oldValue = null;
	this.newValue = null;
	this.url = "";
	this.storageArea = null;
};

$__jsx_extend([StorageEventInit], EventInit);
function MessageEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.data = null;
	this.origin = "";
	this.lastEventId = "";
	this.source = null;
	this.ports = null;
};

$__jsx_extend([MessageEventInit], EventInit);
function EventSourceInit() {
	this.withCredentials = false;
};

$__jsx_extend([EventSourceInit], Object);
function IDBObjectStoreParameters() {
	this.keyPath = null;
	this.autoIncrement = false;
};

$__jsx_extend([IDBObjectStoreParameters], Object);
function IDBIndexParameters() {
	this.unique = false;
	this.multiEntry = false;
};

$__jsx_extend([IDBIndexParameters], Object);
function IDBVersionChangeEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.oldVersion = 0;
	this.newVersion = null;
};

$__jsx_extend([IDBVersionChangeEventInit], EventInit);
function NotificationOptions() {
	this.titleDir = "";
	this.body = "";
	this.bodyDir = "";
	this.tag = "";
	this.iconUrl = "";
};

$__jsx_extend([NotificationOptions], Object);
function RTCSessionDescriptionInit() {
	this.type = "";
	this.sdp = "";
};

$__jsx_extend([RTCSessionDescriptionInit], Object);
function RTCIceCandidateInit() {
	this.candidate = "";
	this.sdpMid = "";
	this.sdpMLineIndex = 0;
};

$__jsx_extend([RTCIceCandidateInit], Object);
function RTCIceServer() {
	this.url = "";
	this.credential = null;
};

$__jsx_extend([RTCIceServer], Object);
function RTCConfiguration() {
	this.iceServers = null;
};

$__jsx_extend([RTCConfiguration], Object);
function DataChannelInit() {
	this.reliable = false;
};

$__jsx_extend([DataChannelInit], Object);
function RTCPeerConnectionIceEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.candidate = null;
};

$__jsx_extend([RTCPeerConnectionIceEventInit], EventInit);
function MediaStreamEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.stream = null;
};

$__jsx_extend([MediaStreamEventInit], EventInit);
function DataChannelEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.channel = null;
};

$__jsx_extend([DataChannelEventInit], EventInit);
function MediaStreamConstraints() {
	this.video = null;
	this.audio = null;
};

$__jsx_extend([MediaStreamConstraints], Object);
function MediaTrackConstraints() {
	this.mandatory = null;
	this.optional = null;
};

$__jsx_extend([MediaTrackConstraints], Object);
function HitRegionOptions() {
	this.path = null;
	this.id = "";
	this.parentID = null;
	this.cursor = "";
	this.control = null;
	this.label = null;
	this.role = null;
};

$__jsx_extend([HitRegionOptions], Object);
function WebGLContextAttributes() {
	this.alpha = false;
	this.depth = false;
	this.stencil = false;
	this.antialias = false;
	this.premultipliedAlpha = false;
	this.preserveDrawingBuffer = false;
};

$__jsx_extend([WebGLContextAttributes], Object);
function WebGLContextEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.statusMessage = "";
};

$__jsx_extend([WebGLContextEventInit], EventInit);
function DeviceOrientationEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.alpha = null;
	this.beta = null;
	this.gamma = null;
	this.absolute = false;
};

$__jsx_extend([DeviceOrientationEventInit], EventInit);
function DeviceMotionEventInit() {
	this.bubbles = false;
	this.cancelable = false;
	this.acceleration = null;
	this.accelerationIncludingGravity = null;
	this.rotationRate = null;
	this.interval = null;
};

$__jsx_extend([DeviceMotionEventInit], EventInit);
function Timer() {
};

$__jsx_extend([Timer], Object);
function Timer$setTimeout$F$V$N(callback, intervalMS) {
	return js$0.global.setTimeout(callback, intervalMS);
};

Timer.setTimeout$F$V$N = Timer$setTimeout$F$V$N;

function Timer$clearTimeout$LTimerHandle$(timer) {
	js$0.global.clearTimeout(timer);
};

Timer.clearTimeout$LTimerHandle$ = Timer$clearTimeout$LTimerHandle$;

function Timer$setInterval$F$V$N(callback, intervalMS) {
	return js$0.global.setInterval(callback, intervalMS);
};

Timer.setInterval$F$V$N = Timer$setInterval$F$V$N;

function Timer$clearInterval$LTimerHandle$(timer) {
	js$0.global.clearInterval(timer);
};

Timer.clearInterval$LTimerHandle$ = Timer$clearInterval$LTimerHandle$;

function Timer$requestAnimationFrame$F$NV$(callback) {
	return Timer._requestAnimationFrame(callback);
};

Timer.requestAnimationFrame$F$NV$ = Timer$requestAnimationFrame$F$NV$;

function Timer$cancelAnimationFrame$LTimerHandle$(timer) {
	Timer._cancelAnimationFrame(timer);
};

Timer.cancelAnimationFrame$LTimerHandle$ = Timer$cancelAnimationFrame$LTimerHandle$;

function Timer$useNativeRAF$B(enable) {
	Timer._requestAnimationFrame = Timer$_getRequestAnimationFrameImpl$B(enable);
	Timer._cancelAnimationFrame = Timer$_getCancelAnimationFrameImpl$B(enable);
};

Timer.useNativeRAF$B = Timer$useNativeRAF$B;

function Timer$_getRequestAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var lastTime;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "r", "webkitR", "mozR", "oR", "msR" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++ i) {
			name = prefixes[i] + "equestAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (callback) {
					return js$0.global[name](callback);
				});
			}
		}
	}
	lastTime = 0;
	return (function (callback) {
		var now;
		var timeToCall;
		var value2$0;
		now = Date.now();
		value2$0 = 16 - (now - lastTime);
		timeToCall = (0 >= value2$0 ? 0 : value2$0);
		lastTime = now + timeToCall;
		return js$0.global.setTimeout((function () {
			callback(now + timeToCall);
		}), timeToCall);
	});
};

Timer._getRequestAnimationFrameImpl$B = Timer$_getRequestAnimationFrameImpl$B;

function Timer$_getCancelAnimationFrameImpl$B(useNativeImpl) {
	var prefixes;
	var i;
	var name;
	var prefixes$len$0;
	if (useNativeImpl) {
		prefixes = [ "c", "webkitC", "mozC", "oC", "msC" ];
		for ((i = 0, prefixes$len$0 = prefixes.length); i < prefixes$len$0; ++ i) {
			name = prefixes[i] + "ancelAnimationFrame";
			if (js$0.global[name] instanceof Function) {
				return (function (timer) {
					js$0.global[name](timer);
				});
			}
		}
	}
	return Timer$clearTimeout$LTimerHandle$;
};

Timer._getCancelAnimationFrameImpl$B = Timer$_getCancelAnimationFrameImpl$B;

function TimerHandle() {}
$__jsx_extend([TimerHandle], Object);
Config.INVINCIBLE = false;
Config.SIZE = 5;
Config.MOVE = 24;
Config.STEP = 100;
Config.SPEED = 2;
Config.WIDTH = 465;
Config.HEIGHT = 465;
$__jsx_lazy_init(dom, "window", function () {
	return js$0.global.window;
});
$__jsx_lazy_init(dom, "document", function () {
	return js$0.global.document;
});
$__jsx_lazy_init(Timer, "_requestAnimationFrame", function () {
	return Timer$_getRequestAnimationFrameImpl$B(true);
});
$__jsx_lazy_init(Timer, "_cancelAnimationFrame", function () {
	return Timer$_getCancelAnimationFrameImpl$B(true);
});

var $__jsx_classMap = {
	"system:lib/built-in.jsx": {
		StopIteration: StopIteration,
		StopIteration$: StopIteration
	},
	"src/sandbox.jsx": {
		Config: Config,
		Config$: Config,
		_Main: _Main,
		_Main$: _Main,
		Util: Util,
		Util$: Util,
		Stage: Stage,
		Stage$LCanvasRenderingContext2D$: Stage,
		Bullet: Bullet,
		Bullet$NNNN: Bullet
	},
	"system:lib/js/js/web.jsx": {
		dom: dom,
		EventInit: EventInit,
		EventInit$: EventInit,
		CustomEventInit: CustomEventInit,
		CustomEventInit$: CustomEventInit,
		MutationObserverInit: MutationObserverInit,
		MutationObserverInit$: MutationObserverInit,
		UIEventInit: UIEventInit,
		UIEventInit$: UIEventInit,
		FocusEventInit: FocusEventInit,
		FocusEventInit$: FocusEventInit,
		MouseEventInit: MouseEventInit,
		MouseEventInit$: MouseEventInit,
		WheelEventInit: WheelEventInit,
		WheelEventInit$: WheelEventInit,
		KeyboardEventInit: KeyboardEventInit,
		KeyboardEventInit$: KeyboardEventInit,
		CompositionEventInit: CompositionEventInit,
		CompositionEventInit$: CompositionEventInit,
		ProgressEventInit: ProgressEventInit,
		ProgressEventInit$: ProgressEventInit,
		XMLHttpRequestOptions: XMLHttpRequestOptions,
		XMLHttpRequestOptions$: XMLHttpRequestOptions,
		ScrollOptions: ScrollOptions,
		ScrollOptions$: ScrollOptions,
		TrackEventInit: TrackEventInit,
		TrackEventInit$: TrackEventInit,
		PopStateEventInit: PopStateEventInit,
		PopStateEventInit$: PopStateEventInit,
		HashChangeEventInit: HashChangeEventInit,
		HashChangeEventInit$: HashChangeEventInit,
		PageTransitionEventInit: PageTransitionEventInit,
		PageTransitionEventInit$: PageTransitionEventInit,
		ErrorEventInit: ErrorEventInit,
		ErrorEventInit$: ErrorEventInit,
		DragEventInit: DragEventInit,
		DragEventInit$: DragEventInit,
		CloseEventInit: CloseEventInit,
		CloseEventInit$: CloseEventInit,
		StorageEventInit: StorageEventInit,
		StorageEventInit$: StorageEventInit,
		MessageEventInit: MessageEventInit,
		MessageEventInit$: MessageEventInit,
		EventSourceInit: EventSourceInit,
		EventSourceInit$: EventSourceInit,
		IDBObjectStoreParameters: IDBObjectStoreParameters,
		IDBObjectStoreParameters$: IDBObjectStoreParameters,
		IDBIndexParameters: IDBIndexParameters,
		IDBIndexParameters$: IDBIndexParameters,
		IDBVersionChangeEventInit: IDBVersionChangeEventInit,
		IDBVersionChangeEventInit$: IDBVersionChangeEventInit,
		NotificationOptions: NotificationOptions,
		NotificationOptions$: NotificationOptions,
		RTCSessionDescriptionInit: RTCSessionDescriptionInit,
		RTCSessionDescriptionInit$: RTCSessionDescriptionInit,
		RTCIceCandidateInit: RTCIceCandidateInit,
		RTCIceCandidateInit$: RTCIceCandidateInit,
		RTCIceServer: RTCIceServer,
		RTCIceServer$: RTCIceServer,
		RTCConfiguration: RTCConfiguration,
		RTCConfiguration$: RTCConfiguration,
		DataChannelInit: DataChannelInit,
		DataChannelInit$: DataChannelInit,
		RTCPeerConnectionIceEventInit: RTCPeerConnectionIceEventInit,
		RTCPeerConnectionIceEventInit$: RTCPeerConnectionIceEventInit,
		MediaStreamEventInit: MediaStreamEventInit,
		MediaStreamEventInit$: MediaStreamEventInit,
		DataChannelEventInit: DataChannelEventInit,
		DataChannelEventInit$: DataChannelEventInit,
		MediaStreamConstraints: MediaStreamConstraints,
		MediaStreamConstraints$: MediaStreamConstraints,
		MediaTrackConstraints: MediaTrackConstraints,
		MediaTrackConstraints$: MediaTrackConstraints,
		HitRegionOptions: HitRegionOptions,
		HitRegionOptions$: HitRegionOptions,
		WebGLContextAttributes: WebGLContextAttributes,
		WebGLContextAttributes$: WebGLContextAttributes,
		WebGLContextEventInit: WebGLContextEventInit,
		WebGLContextEventInit$: WebGLContextEventInit,
		DeviceOrientationEventInit: DeviceOrientationEventInit,
		DeviceOrientationEventInit$: DeviceOrientationEventInit,
		DeviceMotionEventInit: DeviceMotionEventInit,
		DeviceMotionEventInit$: DeviceMotionEventInit
	},
	"system:lib/js/timer.jsx": {
		Timer: Timer,
		Timer$: Timer,
		TimerHandle: TimerHandle
	}
};


})(JSX);


var module = JSX.require("src/sandbox.jsx");
if (!module) {
    throw new ReferenceError("entry point module not found");
}
if (!module._Main) {
    throw new ReferenceError("entry point _Main not found");
}
if (!module._Main.onmessage$LMessageEvent$) {
    throw new ReferenceError("entry point _Main.onmessage(:Event):void not found");
}
addEventListener('message', function(e) {
    module._Main.onmessage$LMessageEvent$(e);
}, false);
if (module._Main.main) {
    module._Main.main([]);
}
