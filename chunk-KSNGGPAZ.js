import { f as _, l as I } from "./chunk-JOVT4LBN.js";
var et = _((i) => {
  "use strict";
  Object.defineProperty(i, "__esModule", { value: !0 });
  i.toBig =
    i.shrSL =
    i.shrSH =
    i.rotrSL =
    i.rotrSH =
    i.rotrBL =
    i.rotrBH =
    i.rotr32L =
    i.rotr32H =
    i.rotlSL =
    i.rotlSH =
    i.rotlBL =
    i.rotlBH =
    i.add5L =
    i.add5H =
    i.add4L =
    i.add4H =
    i.add3L =
    i.add3H =
      void 0;
  i.add = G;
  i.fromBig = m;
  i.split = X;
  var H = BigInt(2 ** 32 - 1),
    S = BigInt(32);
  function m(t, e = !1) {
    return e
      ? { h: Number(t & H), l: Number((t >> S) & H) }
      : { h: Number((t >> S) & H) | 0, l: Number(t & H) | 0 };
  }
  function X(t, e = !1) {
    let n = t.length,
      r = new Uint32Array(n),
      o = new Uint32Array(n);
    for (let c = 0; c < n; c++) {
      let { h: u, l: a } = m(t[c], e);
      [r[c], o[c]] = [u, a];
    }
    return [r, o];
  }
  var j = (t, e) => (BigInt(t >>> 0) << S) | BigInt(e >>> 0);
  i.toBig = j;
  var v = (t, e, n) => t >>> n;
  i.shrSH = v;
  var M = (t, e, n) => (t << (32 - n)) | (e >>> n);
  i.shrSL = M;
  var P = (t, e, n) => (t >>> n) | (e << (32 - n));
  i.rotrSH = P;
  var V = (t, e, n) => (t << (32 - n)) | (e >>> n);
  i.rotrSL = V;
  var C = (t, e, n) => (t << (64 - n)) | (e >>> (n - 32));
  i.rotrBH = C;
  var N = (t, e, n) => (t >>> (n - 32)) | (e << (64 - n));
  i.rotrBL = N;
  var R = (t, e) => e;
  i.rotr32H = R;
  var D = (t, e) => t;
  i.rotr32L = D;
  var W = (t, e, n) => (t << n) | (e >>> (32 - n));
  i.rotlSH = W;
  var q = (t, e, n) => (e << n) | (t >>> (32 - n));
  i.rotlSL = q;
  var K = (t, e, n) => (e << (n - 32)) | (t >>> (64 - n));
  i.rotlBH = K;
  var z = (t, e, n) => (t << (n - 32)) | (e >>> (64 - n));
  i.rotlBL = z;
  function G(t, e, n, r) {
    let o = (e >>> 0) + (r >>> 0);
    return { h: (t + n + ((o / 2 ** 32) | 0)) | 0, l: o | 0 };
  }
  var J = (t, e, n) => (t >>> 0) + (e >>> 0) + (n >>> 0);
  i.add3L = J;
  var Q = (t, e, n, r) => (e + n + r + ((t / 2 ** 32) | 0)) | 0;
  i.add3H = Q;
  var Y = (t, e, n, r) => (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0);
  i.add4L = Y;
  var Z = (t, e, n, r, o) => (e + n + r + o + ((t / 2 ** 32) | 0)) | 0;
  i.add4H = Z;
  var $ = (t, e, n, r, o) =>
    (t >>> 0) + (e >>> 0) + (n >>> 0) + (r >>> 0) + (o >>> 0);
  i.add5L = $;
  var tt = (t, e, n, r, o, c) => (e + n + r + o + c + ((t / 2 ** 32) | 0)) | 0;
  i.add5H = tt;
  var Bt = {
    fromBig: m,
    split: X,
    toBig: j,
    shrSH: v,
    shrSL: M,
    rotrSH: P,
    rotrSL: V,
    rotrBH: C,
    rotrBL: N,
    rotr32H: R,
    rotr32L: D,
    rotlSH: W,
    rotlSL: q,
    rotlBH: K,
    rotlBL: z,
    add: G,
    add3L: J,
    add3H: Q,
    add4L: Y,
    add4H: Z,
    add5H: tt,
    add5L: $,
  };
  i.default = Bt;
});
var nt = _((O) => {
  "use strict";
  Object.defineProperty(O, "__esModule", { value: !0 });
  O.crypto = void 0;
  O.crypto =
    typeof globalThis == "object" && "crypto" in globalThis
      ? globalThis.crypto
      : void 0;
});
var at = _((s) => {
  "use strict";
  Object.defineProperty(s, "__esModule", { value: !0 });
  s.wrapXOFConstructorWithOpts =
    s.wrapConstructorWithOpts =
    s.wrapConstructor =
    s.Hash =
    s.nextTick =
    s.swap32IfBE =
    s.byteSwapIfBE =
    s.swap8IfBE =
    s.isLE =
      void 0;
  s.isBytes = ot;
  s.anumber = E;
  s.abytes = g;
  s.ahash = kt;
  s.aexists = _t;
  s.aoutput = Ht;
  s.u8 = Ot;
  s.u32 = At;
  s.clean = It;
  s.createView = St;
  s.rotr = mt;
  s.rotl = Et;
  s.byteSwap = U;
  s.byteSwap32 = st;
  s.bytesToHex = Ut;
  s.hexToBytes = Ft;
  s.asyncLoop = jt;
  s.utf8ToBytes = F;
  s.bytesToUtf8 = vt;
  s.toBytes = A;
  s.kdfInputToBytes = Mt;
  s.concatBytes = Pt;
  s.checkOpts = Vt;
  s.createHasher = ct;
  s.createOptHasher = ut;
  s.createXOFer = ft;
  s.randomBytes = Ct;
  var w = nt();
  function ot(t) {
    return (
      t instanceof Uint8Array ||
      (ArrayBuffer.isView(t) && t.constructor.name === "Uint8Array")
    );
  }
  function E(t) {
    if (!Number.isSafeInteger(t) || t < 0)
      throw new Error("positive integer expected, got " + t);
  }
  function g(t, ...e) {
    if (!ot(t)) throw new Error("Uint8Array expected");
    if (e.length > 0 && !e.includes(t.length))
      throw new Error(
        "Uint8Array expected of length " + e + ", got length=" + t.length
      );
  }
  function kt(t) {
    if (typeof t != "function" || typeof t.create != "function")
      throw new Error("Hash should be wrapped by utils.createHasher");
    E(t.outputLen), E(t.blockLen);
  }
  function _t(t, e = !0) {
    if (t.destroyed) throw new Error("Hash instance has been destroyed");
    if (e && t.finished)
      throw new Error("Hash#digest() has already been called");
  }
  function Ht(t, e) {
    g(t);
    let n = e.outputLen;
    if (t.length < n)
      throw new Error(
        "digestInto() expects output buffer of length at least " + n
      );
  }
  function Ot(t) {
    return new Uint8Array(t.buffer, t.byteOffset, t.byteLength);
  }
  function At(t) {
    return new Uint32Array(
      t.buffer,
      t.byteOffset,
      Math.floor(t.byteLength / 4)
    );
  }
  function It(...t) {
    for (let e = 0; e < t.length; e++) t[e].fill(0);
  }
  function St(t) {
    return new DataView(t.buffer, t.byteOffset, t.byteLength);
  }
  function mt(t, e) {
    return (t << (32 - e)) | (t >>> e);
  }
  function Et(t, e) {
    return (t << e) | ((t >>> (32 - e)) >>> 0);
  }
  s.isLE = new Uint8Array(new Uint32Array([287454020]).buffer)[0] === 68;
  function U(t) {
    return (
      ((t << 24) & 4278190080) |
      ((t << 8) & 16711680) |
      ((t >>> 8) & 65280) |
      ((t >>> 24) & 255)
    );
  }
  s.swap8IfBE = s.isLE ? (t) => t : (t) => U(t);
  s.byteSwapIfBE = s.swap8IfBE;
  function st(t) {
    for (let e = 0; e < t.length; e++) t[e] = U(t[e]);
    return t;
  }
  s.swap32IfBE = s.isLE ? (t) => t : st;
  var it =
      typeof Uint8Array.from([]).toHex == "function" &&
      typeof Uint8Array.fromHex == "function",
    Tt = Array.from({ length: 256 }, (t, e) => e.toString(16).padStart(2, "0"));
  function Ut(t) {
    if ((g(t), it)) return t.toHex();
    let e = "";
    for (let n = 0; n < t.length; n++) e += Tt[t[n]];
    return e;
  }
  var l = { _0: 48, _9: 57, A: 65, F: 70, a: 97, f: 102 };
  function rt(t) {
    if (t >= l._0 && t <= l._9) return t - l._0;
    if (t >= l.A && t <= l.F) return t - (l.A - 10);
    if (t >= l.a && t <= l.f) return t - (l.a - 10);
  }
  function Ft(t) {
    if (typeof t != "string")
      throw new Error("hex string expected, got " + typeof t);
    if (it) return Uint8Array.fromHex(t);
    let e = t.length,
      n = e / 2;
    if (e % 2)
      throw new Error("hex string expected, got unpadded hex of length " + e);
    let r = new Uint8Array(n);
    for (let o = 0, c = 0; o < n; o++, c += 2) {
      let u = rt(t.charCodeAt(c)),
        a = rt(t.charCodeAt(c + 1));
      if (u === void 0 || a === void 0) {
        let y = t[c] + t[c + 1];
        throw new Error(
          'hex string expected, got non-hex character "' + y + '" at index ' + c
        );
      }
      r[o] = u * 16 + a;
    }
    return r;
  }
  var Xt = () => I(s, null, function* () {});
  s.nextTick = Xt;
  function jt(t, e, n) {
    return I(this, null, function* () {
      let r = Date.now();
      for (let o = 0; o < t; o++) {
        n(o);
        let c = Date.now() - r;
        (c >= 0 && c < e) || (yield (0, s.nextTick)(), (r += c));
      }
    });
  }
  function F(t) {
    if (typeof t != "string") throw new Error("string expected");
    return new Uint8Array(new TextEncoder().encode(t));
  }
  function vt(t) {
    return new TextDecoder().decode(t);
  }
  function A(t) {
    return typeof t == "string" && (t = F(t)), g(t), t;
  }
  function Mt(t) {
    return typeof t == "string" && (t = F(t)), g(t), t;
  }
  function Pt(...t) {
    let e = 0;
    for (let r = 0; r < t.length; r++) {
      let o = t[r];
      g(o), (e += o.length);
    }
    let n = new Uint8Array(e);
    for (let r = 0, o = 0; r < t.length; r++) {
      let c = t[r];
      n.set(c, o), (o += c.length);
    }
    return n;
  }
  function Vt(t, e) {
    if (e !== void 0 && {}.toString.call(e) !== "[object Object]")
      throw new Error("options should be object or undefined");
    return Object.assign(t, e);
  }
  var T = class {};
  s.Hash = T;
  function ct(t) {
    let e = (r) => t().update(A(r)).digest(),
      n = t();
    return (
      (e.outputLen = n.outputLen),
      (e.blockLen = n.blockLen),
      (e.create = () => t()),
      e
    );
  }
  function ut(t) {
    let e = (r, o) => t(o).update(A(r)).digest(),
      n = t({});
    return (
      (e.outputLen = n.outputLen),
      (e.blockLen = n.blockLen),
      (e.create = (r) => t(r)),
      e
    );
  }
  function ft(t) {
    let e = (r, o) => t(o).update(A(r)).digest(),
      n = t({});
    return (
      (e.outputLen = n.outputLen),
      (e.blockLen = n.blockLen),
      (e.create = (r) => t(r)),
      e
    );
  }
  s.wrapConstructor = ct;
  s.wrapConstructorWithOpts = ut;
  s.wrapXOFConstructorWithOpts = ft;
  function Ct(t = 32) {
    if (w.crypto && typeof w.crypto.getRandomValues == "function")
      return w.crypto.getRandomValues(new Uint8Array(t));
    if (w.crypto && typeof w.crypto.randomBytes == "function")
      return Uint8Array.from(w.crypto.randomBytes(t));
    throw new Error("crypto.getRandomValues must be defined");
  }
});
var Gt = _((f) => {
  "use strict";
  Object.defineProperty(f, "__esModule", { value: !0 });
  f.shake256 =
    f.shake128 =
    f.keccak_512 =
    f.keccak_384 =
    f.keccak_256 =
    f.keccak_224 =
    f.sha3_512 =
    f.sha3_384 =
    f.sha3_256 =
    f.sha3_224 =
    f.Keccak =
      void 0;
  f.keccakP = gt;
  var b = et(),
    h = at(),
    Nt = BigInt(0),
    L = BigInt(1),
    Rt = BigInt(2),
    Dt = BigInt(7),
    Wt = BigInt(256),
    qt = BigInt(113),
    dt = [],
    pt = [],
    yt = [];
  for (let t = 0, e = L, n = 1, r = 0; t < 24; t++) {
    ([n, r] = [r, (2 * n + 3 * r) % 5]),
      dt.push(2 * (5 * r + n)),
      pt.push((((t + 1) * (t + 2)) / 2) % 64);
    let o = Nt;
    for (let c = 0; c < 7; c++)
      (e = ((e << L) ^ ((e >> Dt) * qt)) % Wt),
        e & Rt && (o ^= L << ((L << BigInt(c)) - L));
    yt.push(o);
  }
  var wt = (0, b.split)(yt, !0),
    Kt = wt[0],
    zt = wt[1],
    ht = (t, e, n) =>
      n > 32 ? (0, b.rotlBH)(t, e, n) : (0, b.rotlSH)(t, e, n),
    lt = (t, e, n) =>
      n > 32 ? (0, b.rotlBL)(t, e, n) : (0, b.rotlSL)(t, e, n);
  function gt(t, e = 24) {
    let n = new Uint32Array(10);
    for (let r = 24 - e; r < 24; r++) {
      for (let u = 0; u < 10; u++)
        n[u] = t[u] ^ t[u + 10] ^ t[u + 20] ^ t[u + 30] ^ t[u + 40];
      for (let u = 0; u < 10; u += 2) {
        let a = (u + 8) % 10,
          y = (u + 2) % 10,
          B = n[y],
          p = n[y + 1],
          bt = ht(B, p, 1) ^ n[a],
          xt = lt(B, p, 1) ^ n[a + 1];
        for (let k = 0; k < 50; k += 10) (t[u + k] ^= bt), (t[u + k + 1] ^= xt);
      }
      let o = t[2],
        c = t[3];
      for (let u = 0; u < 24; u++) {
        let a = pt[u],
          y = ht(o, c, a),
          B = lt(o, c, a),
          p = dt[u];
        (o = t[p]), (c = t[p + 1]), (t[p] = y), (t[p + 1] = B);
      }
      for (let u = 0; u < 50; u += 10) {
        for (let a = 0; a < 10; a++) n[a] = t[u + a];
        for (let a = 0; a < 10; a++)
          t[u + a] ^= ~n[(a + 2) % 10] & n[(a + 4) % 10];
      }
      (t[0] ^= Kt[r]), (t[1] ^= zt[r]);
    }
    (0, h.clean)(n);
  }
  var x = class t extends h.Hash {
    constructor(e, n, r, o = !1, c = 24) {
      if (
        (super(),
        (this.pos = 0),
        (this.posOut = 0),
        (this.finished = !1),
        (this.destroyed = !1),
        (this.enableXOF = !1),
        (this.blockLen = e),
        (this.suffix = n),
        (this.outputLen = r),
        (this.enableXOF = o),
        (this.rounds = c),
        (0, h.anumber)(r),
        !(0 < e && e < 200))
      )
        throw new Error("only keccak-f1600 function is supported");
      (this.state = new Uint8Array(200)),
        (this.state32 = (0, h.u32)(this.state));
    }
    clone() {
      return this._cloneInto();
    }
    keccak() {
      (0, h.swap32IfBE)(this.state32),
        gt(this.state32, this.rounds),
        (0, h.swap32IfBE)(this.state32),
        (this.posOut = 0),
        (this.pos = 0);
    }
    update(e) {
      (0, h.aexists)(this), (e = (0, h.toBytes)(e)), (0, h.abytes)(e);
      let { blockLen: n, state: r } = this,
        o = e.length;
      for (let c = 0; c < o; ) {
        let u = Math.min(n - this.pos, o - c);
        for (let a = 0; a < u; a++) r[this.pos++] ^= e[c++];
        this.pos === n && this.keccak();
      }
      return this;
    }
    finish() {
      if (this.finished) return;
      this.finished = !0;
      let { state: e, suffix: n, pos: r, blockLen: o } = this;
      (e[r] ^= n),
        n & 128 && r === o - 1 && this.keccak(),
        (e[o - 1] ^= 128),
        this.keccak();
    }
    writeInto(e) {
      (0, h.aexists)(this, !1), (0, h.abytes)(e), this.finish();
      let n = this.state,
        { blockLen: r } = this;
      for (let o = 0, c = e.length; o < c; ) {
        this.posOut >= r && this.keccak();
        let u = Math.min(r - this.posOut, c - o);
        e.set(n.subarray(this.posOut, this.posOut + u), o),
          (this.posOut += u),
          (o += u);
      }
      return e;
    }
    xofInto(e) {
      if (!this.enableXOF)
        throw new Error("XOF is not possible for this instance");
      return this.writeInto(e);
    }
    xof(e) {
      return (0, h.anumber)(e), this.xofInto(new Uint8Array(e));
    }
    digestInto(e) {
      if (((0, h.aoutput)(e, this), this.finished))
        throw new Error("digest() was already called");
      return this.writeInto(e), this.destroy(), e;
    }
    digest() {
      return this.digestInto(new Uint8Array(this.outputLen));
    }
    destroy() {
      (this.destroyed = !0), (0, h.clean)(this.state);
    }
    _cloneInto(e) {
      let {
        blockLen: n,
        suffix: r,
        outputLen: o,
        rounds: c,
        enableXOF: u,
      } = this;
      return (
        e || (e = new t(n, r, o, u, c)),
        e.state32.set(this.state32),
        (e.pos = this.pos),
        (e.posOut = this.posOut),
        (e.finished = this.finished),
        (e.rounds = c),
        (e.suffix = r),
        (e.outputLen = o),
        (e.enableXOF = u),
        (e.destroyed = this.destroyed),
        e
      );
    }
  };
  f.Keccak = x;
  var d = (t, e, n) => (0, h.createHasher)(() => new x(e, t, n));
  f.sha3_224 = d(6, 144, 224 / 8);
  f.sha3_256 = d(6, 136, 256 / 8);
  f.sha3_384 = d(6, 104, 384 / 8);
  f.sha3_512 = d(6, 72, 512 / 8);
  f.keccak_224 = d(1, 144, 224 / 8);
  f.keccak_256 = d(1, 136, 256 / 8);
  f.keccak_384 = d(1, 104, 384 / 8);
  f.keccak_512 = d(1, 72, 512 / 8);
  var Lt = (t, e, n) =>
    (0, h.createXOFer)(
      (r = {}) => new x(e, t, r.dkLen === void 0 ? n : r.dkLen, !0)
    );
  f.shake128 = Lt(31, 168, 128 / 8);
  f.shake256 = Lt(31, 136, 256 / 8);
});
export { et as a, at as b, Gt as c };
