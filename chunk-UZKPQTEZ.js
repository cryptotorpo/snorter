import { a as Fs, b as bc } from "./chunk-HDYV33KX.js";
import { a as Vs, b as oo, c as Sc } from "./chunk-5OD6RQ4E.js";
import { a as no, b as Rc } from "./chunk-YTUIZ7QE.js";
import { a as ro, b as Ec } from "./chunk-VQJZCEAB.js";
import { a as zs, b as Ms, c as Ks } from "./chunk-CRYW3XTN.js";
import {
  E as tt,
  F as Ct,
  I as We,
  L as Xt,
  M as to,
  t as Et,
  u as Qr,
  v as eo,
  w as Us,
} from "./chunk-6WGECOWL.js";
import {
  a as K,
  b as H,
  d as et,
  e as ae,
  f as xt,
  g as Zr,
  i as lt,
  j as Jr,
  l as A,
} from "./chunk-JOVT4LBN.js";
function ht(r, e = "") {
  if (typeof r != "boolean") {
    let t = e && `"${e}"`;
    throw new Error(t + "expected boolean, got type=" + typeof r);
  }
  return r;
}
function Ye(r, e, t = "") {
  let n = Et(r),
    o = r?.length,
    s = e !== void 0;
  if (!n || (s && o !== e)) {
    let i = t && `"${t}" `,
      c = s ? ` of length ${e}` : "",
      a = n ? `length=${o}` : `type=${typeof r}`;
    throw new Error(i + "expected Uint8Array" + c + ", got " + a);
  }
  return r;
}
function mn(r) {
  let e = r.toString(16);
  return e.length & 1 ? "0" + e : e;
}
function $s(r) {
  if (typeof r != "string")
    throw new Error("hex string expected, got " + typeof r);
  return r === "" ? ao : BigInt("0x" + r);
}
function Zt(r) {
  return $s(tt(r));
}
function Pt(r) {
  return eo(r), $s(tt(Uint8Array.from(r).reverse()));
}
function Gn(r, e) {
  return Ct(r.toString(16).padStart(e * 2, "0"));
}
function co(r, e) {
  return Gn(r, e).reverse();
}
function _e(r, e, t) {
  let n;
  if (typeof e == "string")
    try {
      n = Ct(e);
    } catch (s) {
      throw new Error(r + " must be hex string or Uint8Array, cause: " + s);
    }
  else if (Et(e)) n = Uint8Array.from(e);
  else throw new Error(r + " must be hex string or Uint8Array");
  let o = n.length;
  if (typeof t == "number" && o !== t)
    throw new Error(r + " of length " + t + " expected, got " + o);
  return n;
}
function uo(r) {
  return Uint8Array.from(r);
}
function qs(r, e, t) {
  return so(r) && so(e) && so(t) && e <= r && r < t;
}
function Rn(r, e, t, n) {
  if (!qs(e, t, n))
    throw new Error(
      "expected valid " + r + ": " + t + " <= n < " + n + ", got " + e
    );
}
function Hn(r) {
  let e;
  for (e = 0; r > ao; r >>= io, e += 1);
  return e;
}
function Ws(r, e, t) {
  if (typeof r != "number" || r < 2)
    throw new Error("hashLen must be a number");
  if (typeof e != "number" || e < 2)
    throw new Error("qByteLen must be a number");
  if (typeof t != "function") throw new Error("hmacFn must be a function");
  let n = (d) => new Uint8Array(d),
    o = (d) => Uint8Array.of(d),
    s = n(r),
    i = n(r),
    c = 0,
    a = () => {
      s.fill(1), i.fill(0), (c = 0);
    },
    u = (...d) => t(i, s, ...d),
    l = (d = n(0)) => {
      (i = u(o(0), d)),
        (s = u()),
        d.length !== 0 && ((i = u(o(1), d)), (s = u()));
    },
    _ = () => {
      if (c++ >= 1e3) throw new Error("drbg: tried 1000 values");
      let d = 0,
        h = [];
      for (; d < e; ) {
        s = u();
        let p = s.slice();
        h.push(p), (d += s.length);
      }
      return We(...h);
    };
  return (d, h) => {
    a(), l(d);
    let p;
    for (; !(p = h(_())); ) l();
    return a(), p;
  };
}
function At(r, e, t = {}) {
  if (!r || typeof r != "object")
    throw new Error("expected valid options object");
  function n(o, s, i) {
    let c = r[o];
    if (i && c === void 0) return;
    let a = typeof c;
    if (a !== s || c === null)
      throw new Error(`param "${o}" is invalid: expected ${s}, got ${a}`);
  }
  Object.entries(e).forEach(([o, s]) => n(o, s, !1)),
    Object.entries(t).forEach(([o, s]) => n(o, s, !0));
}
function Jt(r) {
  let e = new WeakMap();
  return (t, ...n) => {
    let o = e.get(t);
    if (o !== void 0) return o;
    let s = r(t, ...n);
    return e.set(t, s), s;
  };
}
var ao,
  io,
  so,
  St,
  bn = ae(() => {
    "use strict";
    to();
    to();
    (ao = BigInt(0)), (io = BigInt(1));
    so = (r) => typeof r == "bigint" && ao <= r;
    St = (r) => (io << BigInt(r)) - io;
  });
function Ae(r, e) {
  let t = r % e;
  return t >= Fe ? t : e + t;
}
function pe(r, e, t) {
  let n = r;
  for (; e-- > Fe; ) (n *= n), (n %= t);
  return n;
}
function Gs(r, e) {
  if (r === Fe) throw new Error("invert: expected non-zero number");
  if (e <= Fe) throw new Error("invert: expected positive modulus, got " + e);
  let t = Ae(r, e),
    n = e,
    o = Fe,
    s = Oe,
    i = Oe,
    c = Fe;
  for (; t !== Fe; ) {
    let u = n / t,
      l = n % t,
      _ = o - i * u,
      y = s - c * u;
    (n = t), (t = l), (o = i), (s = c), (i = _), (c = y);
  }
  if (n !== Oe) throw new Error("invert: does not exist");
  return Ae(o, e);
}
function fo(r, e, t) {
  if (!r.eql(r.sqr(e), t)) throw new Error("Cannot find square root");
}
function Qs(r, e) {
  let t = (r.ORDER + Oe) / Ys,
    n = r.pow(e, t);
  return fo(r, n, e), n;
}
function Ic(r, e) {
  let t = (r.ORDER - Xs) / Zs,
    n = r.mul(e, Dt),
    o = r.pow(n, t),
    s = r.mul(e, o),
    i = r.mul(r.mul(s, Dt), o),
    c = r.mul(s, r.sub(i, r.ONE));
  return fo(r, c, e), c;
}
function Oc(r) {
  let e = Je(r),
    t = ei(r),
    n = t(e, e.neg(e.ONE)),
    o = t(e, n),
    s = t(e, e.neg(n)),
    i = (r + Ac) / Js;
  return (c, a) => {
    let u = c.pow(a, i),
      l = c.mul(u, n),
      _ = c.mul(u, o),
      y = c.mul(u, s),
      d = c.eql(c.sqr(l), a),
      h = c.eql(c.sqr(_), a);
    (u = c.cmov(u, l, d)), (l = c.cmov(y, _, h));
    let p = c.eql(c.sqr(l), a),
      b = c.cmov(u, l, p);
    return fo(c, b, a), b;
  };
}
function ei(r) {
  if (r < js) throw new Error("sqrt is not defined for small field");
  let e = r - Oe,
    t = 0;
  for (; e % Dt === Fe; ) (e /= Dt), t++;
  let n = Dt,
    o = Je(r);
  for (; Hs(o, n) === 1; )
    if (n++ > 1e3)
      throw new Error("Cannot find square root: probably non-prime P");
  if (t === 1) return Qs;
  let s = o.pow(n, e),
    i = (e + Oe) / Dt;
  return function (a, u) {
    if (a.is0(u)) return u;
    if (Hs(a, u) !== 1) throw new Error("Cannot find square root");
    let l = t,
      _ = a.mul(a.ONE, s),
      y = a.pow(u, e),
      d = a.pow(u, i);
    for (; !a.eql(y, a.ONE); ) {
      if (a.is0(y)) return a.ZERO;
      let h = 1,
        p = a.sqr(y);
      for (; !a.eql(p, a.ONE); )
        if ((h++, (p = a.sqr(p)), h === l))
          throw new Error("Cannot find square root");
      let b = Oe << BigInt(l - h - 1),
        R = a.pow(_, b);
      (l = h), (_ = a.sqr(R)), (y = a.mul(y, _)), (d = a.mul(d, R));
    }
    return d;
  };
}
function Nc(r) {
  return r % Ys === js
    ? Qs
    : r % Zs === Xs
    ? Ic
    : r % Js === wc
    ? Oc(r)
    : ei(r);
}
function lo(r) {
  let e = { ORDER: "bigint", MASK: "bigint", BYTES: "number", BITS: "number" },
    t = kc.reduce((n, o) => ((n[o] = "function"), n), e);
  return At(r, t), r;
}
function Tc(r, e, t) {
  if (t < Fe) throw new Error("invalid exponent, negatives unsupported");
  if (t === Fe) return r.ONE;
  if (t === Oe) return e;
  let n = r.ONE,
    o = e;
  for (; t > Fe; ) t & Oe && (n = r.mul(n, o)), (o = r.sqr(o)), (t >>= Oe);
  return n;
}
function En(r, e, t = !1) {
  let n = new Array(e.length).fill(t ? r.ZERO : void 0),
    o = e.reduce(
      (i, c, a) => (r.is0(c) ? i : ((n[a] = i), r.mul(i, c))),
      r.ONE
    ),
    s = r.inv(o);
  return (
    e.reduceRight(
      (i, c, a) => (r.is0(c) ? i : ((n[a] = r.mul(i, n[a])), r.mul(i, c))),
      s
    ),
    n
  );
}
function Hs(r, e) {
  let t = (r.ORDER - Oe) / Dt,
    n = r.pow(e, t),
    o = r.eql(n, r.ONE),
    s = r.eql(n, r.ZERO),
    i = r.eql(n, r.neg(r.ONE));
  if (!o && !s && !i) throw new Error("invalid Legendre symbol result");
  return o ? 1 : s ? 0 : -1;
}
function jn(r, e) {
  e !== void 0 && Qr(e);
  let t = e !== void 0 ? e : r.toString(2).length,
    n = Math.ceil(t / 8);
  return { nBitLength: t, nByteLength: n };
}
function Je(r, e, t = !1, n = {}) {
  if (r <= Fe) throw new Error("invalid field: expected ORDER > 0, got " + r);
  let o,
    s,
    i = !1,
    c;
  if (typeof e == "object" && e != null) {
    if (n.sqrt || t) throw new Error("cannot specify opts in two arguments");
    let y = e;
    y.BITS && (o = y.BITS),
      y.sqrt && (s = y.sqrt),
      typeof y.isLE == "boolean" && (t = y.isLE),
      typeof y.modFromBytes == "boolean" && (i = y.modFromBytes),
      (c = y.allowedLengths);
  } else typeof e == "number" && (o = e), n.sqrt && (s = n.sqrt);
  let { nBitLength: a, nByteLength: u } = jn(r, o);
  if (u > 2048)
    throw new Error("invalid field: expected ORDER of <= 2048 bytes");
  let l,
    _ = Object.freeze({
      ORDER: r,
      isLE: t,
      BITS: a,
      BYTES: u,
      MASK: St(a),
      ZERO: Fe,
      ONE: Oe,
      allowedLengths: c,
      create: (y) => Ae(y, r),
      isValid: (y) => {
        if (typeof y != "bigint")
          throw new Error(
            "invalid field element: expected bigint, got " + typeof y
          );
        return Fe <= y && y < r;
      },
      is0: (y) => y === Fe,
      isValidNot0: (y) => !_.is0(y) && _.isValid(y),
      isOdd: (y) => (y & Oe) === Oe,
      neg: (y) => Ae(-y, r),
      eql: (y, d) => y === d,
      sqr: (y) => Ae(y * y, r),
      add: (y, d) => Ae(y + d, r),
      sub: (y, d) => Ae(y - d, r),
      mul: (y, d) => Ae(y * d, r),
      pow: (y, d) => Tc(_, y, d),
      div: (y, d) => Ae(y * Gs(d, r), r),
      sqrN: (y) => y * y,
      addN: (y, d) => y + d,
      subN: (y, d) => y - d,
      mulN: (y, d) => y * d,
      inv: (y) => Gs(y, r),
      sqrt: s || ((y) => (l || (l = Nc(r)), l(_, y))),
      toBytes: (y) => (t ? co(y, u) : Gn(y, u)),
      fromBytes: (y, d = !0) => {
        if (c) {
          if (!c.includes(y.length) || y.length > u)
            throw new Error(
              "Field.fromBytes: expected " + c + " bytes, got " + y.length
            );
          let p = new Uint8Array(u);
          p.set(y, t ? 0 : p.length - y.length), (y = p);
        }
        if (y.length !== u)
          throw new Error(
            "Field.fromBytes: expected " + u + " bytes, got " + y.length
          );
        let h = t ? Pt(y) : Zt(y);
        if ((i && (h = Ae(h, r)), !d && !_.isValid(h)))
          throw new Error("invalid field element: outside of range 0..ORDER");
        return h;
      },
      invertBatch: (y) => En(_, y),
      cmov: (y, d, h) => (h ? d : y),
    });
  return Object.freeze(_);
}
function ni(r) {
  if (typeof r != "bigint") throw new Error("field order must be bigint");
  let e = r.toString(2).length;
  return Math.ceil(e / 8);
}
function ho(r) {
  let e = ni(r);
  return e + Math.ceil(e / 2);
}
function yo(r, e, t = !1) {
  let n = r.length,
    o = ni(e),
    s = ho(e);
  if (n < 16 || n < s || n > 1024)
    throw new Error("expected " + s + "-1024 bytes of input, got " + n);
  let i = t ? Pt(r) : Zt(r),
    c = Ae(i, e - Oe) + Oe;
  return t ? co(c, o) : Gn(c, o);
}
var Fe,
  Oe,
  Dt,
  js,
  Ys,
  Xs,
  Ac,
  Zs,
  wc,
  Js,
  ti,
  kc,
  Qt = ae(() => {
    "use strict";
    bn();
    (Fe = BigInt(0)),
      (Oe = BigInt(1)),
      (Dt = BigInt(2)),
      (js = BigInt(3)),
      (Ys = BigInt(4)),
      (Xs = BigInt(5)),
      (Ac = BigInt(7)),
      (Zs = BigInt(8)),
      (wc = BigInt(9)),
      (Js = BigInt(16));
    (ti = (r, e) => (Ae(r, e) & Oe) === Oe),
      (kc = [
        "create",
        "isValid",
        "is0",
        "neg",
        "inv",
        "sqrt",
        "sqr",
        "eql",
        "add",
        "sub",
        "mul",
        "pow",
        "div",
        "addN",
        "subN",
        "mulN",
        "sqrN",
      ]);
  });
function Sn(r, e) {
  let t = e.negate();
  return r ? t : e;
}
function yt(r, e) {
  let t = En(
    r.Fp,
    e.map((n) => n.Z)
  );
  return e.map((n, o) => r.fromAffine(n.toAffine(t[o])));
}
function ii(r, e) {
  if (!Number.isSafeInteger(r) || r <= 0 || r > e)
    throw new Error("invalid window size, expected [1.." + e + "], got W=" + r);
}
function go(r, e) {
  ii(r, e);
  let t = Math.ceil(e / r) + 1,
    n = 2 ** (r - 1),
    o = 2 ** r,
    s = St(r),
    i = BigInt(r);
  return { windows: t, windowSize: n, mask: s, maxNumber: o, shiftBy: i };
}
function ri(r, e, t) {
  let { windowSize: n, mask: o, maxNumber: s, shiftBy: i } = t,
    c = Number(r & o),
    a = r >> i;
  c > n && ((c -= s), (a += Ut));
  let u = e * n,
    l = u + Math.abs(c) - 1,
    _ = c === 0,
    y = c < 0,
    d = e % 2 !== 0;
  return { nextN: a, offset: l, isZero: _, isNeg: y, isNegF: d, offsetF: u };
}
function vc(r, e) {
  if (!Array.isArray(r)) throw new Error("array expected");
  r.forEach((t, n) => {
    if (!(t instanceof e)) throw new Error("invalid point at index " + n);
  });
}
function Lc(r, e) {
  if (!Array.isArray(r)) throw new Error("array of scalars expected");
  r.forEach((t, n) => {
    if (!e.isValid(t)) throw new Error("invalid scalar at index " + n);
  });
}
function po(r) {
  return ai.get(r) || 1;
}
function oi(r) {
  if (r !== en) throw new Error("invalid wNAF");
}
function ci(r, e, t, n) {
  let o = e,
    s = r.ZERO,
    i = r.ZERO;
  for (; t > en || n > en; )
    t & Ut && (s = s.add(o)),
      n & Ut && (i = i.add(o)),
      (o = o.double()),
      (t >>= Ut),
      (n >>= Ut);
  return { p1: s, p2: i };
}
function Yn(r, e, t, n) {
  vc(t, r), Lc(n, e);
  let o = t.length,
    s = n.length;
  if (o !== s)
    throw new Error("arrays of points and scalars must have equal length");
  let i = r.ZERO,
    c = Hn(BigInt(o)),
    a = 1;
  c > 12 ? (a = c - 3) : c > 4 ? (a = c - 2) : c > 0 && (a = 2);
  let u = St(a),
    l = new Array(Number(u) + 1).fill(i),
    _ = Math.floor((e.BITS - 1) / a) * a,
    y = i;
  for (let d = _; d >= 0; d -= a) {
    l.fill(i);
    for (let p = 0; p < s; p++) {
      let b = n[p],
        R = Number((b >> BigInt(d)) & u);
      l[R] = l[R].add(t[p]);
    }
    let h = i;
    for (let p = l.length - 1, b = i; p > 0; p--)
      (b = b.add(l[p])), (h = h.add(b));
    if (((y = y.add(h)), d !== 0)) for (let p = 0; p < a; p++) y = y.double();
  }
  return y;
}
function si(r, e, t) {
  if (e) {
    if (e.ORDER !== r)
      throw new Error("Field.ORDER must match order: Fp == p, Fn == n");
    return lo(e), e;
  } else return Je(r, { isLE: t });
}
function Xn(r, e, t = {}, n) {
  if ((n === void 0 && (n = r === "edwards"), !e || typeof e != "object"))
    throw new Error(`expected valid ${r} CURVE object`);
  for (let a of ["p", "n", "h"]) {
    let u = e[a];
    if (!(typeof u == "bigint" && u > en))
      throw new Error(`CURVE.${a} must be positive bigint`);
  }
  let o = si(e.p, t.Fp, n),
    s = si(e.n, t.Fn, n),
    c = ["Gx", "Gy", "a", r === "weierstrass" ? "b" : "d"];
  for (let a of c)
    if (!o.isValid(e[a]))
      throw new Error(`CURVE.${a} must be valid field element of CURVE.Fp`);
  return (e = Object.freeze(Object.assign({}, e))), { CURVE: e, Fp: o, Fn: s };
}
var en,
  Ut,
  _o,
  ai,
  tn,
  mo = ae(() => {
    "use strict";
    bn();
    Qt();
    (en = BigInt(0)), (Ut = BigInt(1));
    (_o = new WeakMap()), (ai = new WeakMap());
    tn = class {
      constructor(e, t) {
        (this.BASE = e.BASE),
          (this.ZERO = e.ZERO),
          (this.Fn = e.Fn),
          (this.bits = t);
      }
      _unsafeLadder(e, t, n = this.ZERO) {
        let o = e;
        for (; t > en; ) t & Ut && (n = n.add(o)), (o = o.double()), (t >>= Ut);
        return n;
      }
      precomputeWindow(e, t) {
        let { windows: n, windowSize: o } = go(t, this.bits),
          s = [],
          i = e,
          c = i;
        for (let a = 0; a < n; a++) {
          (c = i), s.push(c);
          for (let u = 1; u < o; u++) (c = c.add(i)), s.push(c);
          i = c.double();
        }
        return s;
      }
      wNAF(e, t, n) {
        if (!this.Fn.isValid(n)) throw new Error("invalid scalar");
        let o = this.ZERO,
          s = this.BASE,
          i = go(e, this.bits);
        for (let c = 0; c < i.windows; c++) {
          let {
            nextN: a,
            offset: u,
            isZero: l,
            isNeg: _,
            isNegF: y,
            offsetF: d,
          } = ri(n, c, i);
          (n = a), l ? (s = s.add(Sn(y, t[d]))) : (o = o.add(Sn(_, t[u])));
        }
        return oi(n), { p: o, f: s };
      }
      wNAFUnsafe(e, t, n, o = this.ZERO) {
        let s = go(e, this.bits);
        for (let i = 0; i < s.windows && n !== en; i++) {
          let { nextN: c, offset: a, isZero: u, isNeg: l } = ri(n, i, s);
          if (((n = c), !u)) {
            let _ = t[a];
            o = o.add(l ? _.negate() : _);
          }
        }
        return oi(n), o;
      }
      getPrecomputes(e, t, n) {
        let o = _o.get(t);
        return (
          o ||
            ((o = this.precomputeWindow(t, e)),
            e !== 1 && (typeof n == "function" && (o = n(o)), _o.set(t, o))),
          o
        );
      }
      cached(e, t, n) {
        let o = po(e);
        return this.wNAF(o, this.getPrecomputes(o, e, n), t);
      }
      unsafe(e, t, n, o) {
        let s = po(e);
        return s === 1
          ? this._unsafeLadder(e, t, o)
          : this.wNAFUnsafe(s, this.getPrecomputes(s, e, n), t, o);
      }
      createCache(e, t) {
        ii(t, this.bits), ai.set(e, t), _o.delete(e);
      }
      hasCache(e) {
        return po(e) !== 1;
      }
    };
  });
function xc(r, e, t, n) {
  let o = r.sqr(t),
    s = r.sqr(n),
    i = r.add(r.mul(e.a, o), s),
    c = r.add(r.ONE, r.mul(e.d, r.mul(o, s)));
  return r.eql(i, c);
}
function Cc(r, e = {}) {
  let t = Xn("edwards", r, e, e.FpFnLE),
    { Fp: n, Fn: o } = t,
    s = t.CURVE,
    { h: i } = s;
  At(e, {}, { uvRatio: "function" });
  let c = Ro << (BigInt(o.BYTES * 8) - Ne),
    a = (b) => n.create(b),
    u =
      e.uvRatio ||
      ((b, R) => {
        try {
          return { isValid: !0, value: n.sqrt(n.div(b, R)) };
        } catch {
          return { isValid: !1, value: wt };
        }
      });
  if (!xc(n, s, s.Gx, s.Gy))
    throw new Error("bad curve params: generator point");
  function l(b, R, T = !1) {
    let N = T ? Ne : wt;
    return Rn("coordinate " + b, R, N, c), R;
  }
  function _(b) {
    if (!(b instanceof h)) throw new Error("ExtendedPoint expected");
  }
  let y = Jt((b, R) => {
      let { X: T, Y: N, Z: D } = b,
        J = b.is0();
      R == null && (R = J ? Bc : n.inv(D));
      let ee = a(T * R),
        te = a(N * R),
        ne = n.mul(D, R);
      if (J) return { x: wt, y: Ne };
      if (ne !== Ne) throw new Error("invZ was invalid");
      return { x: ee, y: te };
    }),
    d = Jt((b) => {
      let { a: R, d: T } = s;
      if (b.is0()) throw new Error("bad point: ZERO");
      let { X: N, Y: D, Z: J, T: ee } = b,
        te = a(N * N),
        ne = a(D * D),
        O = a(J * J),
        $ = a(O * O),
        j = a(te * R),
        q = a(O * a(j + ne)),
        w = a($ + a(T * a(te * ne)));
      if (q !== w) throw new Error("bad point: equation left != right (1)");
      let E = a(N * D),
        S = a(J * ee);
      if (E !== S) throw new Error("bad point: equation left != right (2)");
      return !0;
    });
  class h {
    constructor(R, T, N, D) {
      (this.X = l("x", R)),
        (this.Y = l("y", T)),
        (this.Z = l("z", N, !0)),
        (this.T = l("t", D)),
        Object.freeze(this);
    }
    static CURVE() {
      return s;
    }
    static fromAffine(R) {
      if (R instanceof h) throw new Error("extended point not allowed");
      let { x: T, y: N } = R || {};
      return l("x", T), l("y", N), new h(T, N, Ne, a(T * N));
    }
    static fromBytes(R, T = !1) {
      let N = n.BYTES,
        { a: D, d: J } = s;
      (R = uo(Ye(R, N, "point"))), ht(T, "zip215");
      let ee = uo(R),
        te = R[N - 1];
      ee[N - 1] = te & -129;
      let ne = Pt(ee),
        O = T ? c : n.ORDER;
      Rn("point.y", ne, wt, O);
      let $ = a(ne * ne),
        j = a($ - Ne),
        q = a(J * $ - D),
        { isValid: w, value: E } = u(j, q);
      if (!w) throw new Error("bad point: invalid y coordinate");
      let S = (E & Ne) === Ne,
        v = (te & 128) !== 0;
      if (!T && E === wt && v) throw new Error("bad point: x=0 and x_0=1");
      return v !== S && (E = a(-E)), h.fromAffine({ x: E, y: ne });
    }
    static fromHex(R, T = !1) {
      return h.fromBytes(_e("point", R), T);
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(R = 8, T = !0) {
      return p.createCache(this, R), T || this.multiply(Ro), this;
    }
    assertValidity() {
      d(this);
    }
    equals(R) {
      _(R);
      let { X: T, Y: N, Z: D } = this,
        { X: J, Y: ee, Z: te } = R,
        ne = a(T * te),
        O = a(J * D),
        $ = a(N * te),
        j = a(ee * D);
      return ne === O && $ === j;
    }
    is0() {
      return this.equals(h.ZERO);
    }
    negate() {
      return new h(a(-this.X), this.Y, this.Z, a(-this.T));
    }
    double() {
      let { a: R } = s,
        { X: T, Y: N, Z: D } = this,
        J = a(T * T),
        ee = a(N * N),
        te = a(Ro * a(D * D)),
        ne = a(R * J),
        O = T + N,
        $ = a(a(O * O) - J - ee),
        j = ne + ee,
        q = j - te,
        w = ne - ee,
        E = a($ * q),
        S = a(j * w),
        v = a($ * w),
        P = a(q * j);
      return new h(E, S, P, v);
    }
    add(R) {
      _(R);
      let { a: T, d: N } = s,
        { X: D, Y: J, Z: ee, T: te } = this,
        { X: ne, Y: O, Z: $, T: j } = R,
        q = a(D * ne),
        w = a(J * O),
        E = a(te * N * j),
        S = a(ee * $),
        v = a((D + J) * (ne + O) - q - w),
        P = S - E,
        V = S + E,
        z = a(w - T * q),
        M = a(v * P),
        G = a(V * z),
        Y = a(v * z),
        be = a(P * V);
      return new h(M, G, be, Y);
    }
    subtract(R) {
      return this.add(R.negate());
    }
    multiply(R) {
      if (!o.isValidNot0(R))
        throw new Error("invalid scalar: expected 1 <= sc < curve.n");
      let { p: T, f: N } = p.cached(this, R, (D) => yt(h, D));
      return yt(h, [T, N])[0];
    }
    multiplyUnsafe(R, T = h.ZERO) {
      if (!o.isValid(R))
        throw new Error("invalid scalar: expected 0 <= sc < curve.n");
      return R === wt
        ? h.ZERO
        : this.is0() || R === Ne
        ? this
        : p.unsafe(this, R, (N) => yt(h, N), T);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    isTorsionFree() {
      return p.unsafe(this, s.n).is0();
    }
    toAffine(R) {
      return y(this, R);
    }
    clearCofactor() {
      return i === Ne ? this : this.multiplyUnsafe(i);
    }
    toBytes() {
      let { x: R, y: T } = this.toAffine(),
        N = n.toBytes(T);
      return (N[N.length - 1] |= R & Ne ? 128 : 0), N;
    }
    toHex() {
      return tt(this.toBytes());
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get ex() {
      return this.X;
    }
    get ey() {
      return this.Y;
    }
    get ez() {
      return this.Z;
    }
    get et() {
      return this.T;
    }
    static normalizeZ(R) {
      return yt(h, R);
    }
    static msm(R, T) {
      return Yn(h, o, R, T);
    }
    _setWindowSize(R) {
      this.precompute(R);
    }
    toRawBytes() {
      return this.toBytes();
    }
  }
  (h.BASE = new h(s.Gx, s.Gy, Ne, a(s.Gx * s.Gy))),
    (h.ZERO = new h(wt, Ne, Ne, wt)),
    (h.Fp = n),
    (h.Fn = o);
  let p = new tn(h, o.BITS);
  return h.BASE.precompute(8), h;
}
function Pc(r, e, t = {}) {
  if (typeof e != "function")
    throw new Error('"hash" function param is required');
  At(
    t,
    {},
    {
      adjustScalarBytes: "function",
      randomBytes: "function",
      domain: "function",
      prehash: "function",
      mapToCurve: "function",
    }
  );
  let { prehash: n } = t,
    { BASE: o, Fp: s, Fn: i } = r,
    c = t.randomBytes || Xt,
    a = t.adjustScalarBytes || ((O) => O),
    u =
      t.domain ||
      ((O, $, j) => {
        if ((ht(j, "phflag"), $.length || j))
          throw new Error("Contexts/pre-hash are not supported");
        return O;
      });
  function l(O) {
    return i.create(Pt(O));
  }
  function _(O) {
    let $ = N.secretKey;
    O = _e("private key", O, $);
    let j = _e("hashed private key", e(O), 2 * $),
      q = a(j.slice(0, $)),
      w = j.slice($, 2 * $),
      E = l(q);
    return { head: q, prefix: w, scalar: E };
  }
  function y(O) {
    let { head: $, prefix: j, scalar: q } = _(O),
      w = o.multiply(q),
      E = w.toBytes();
    return { head: $, prefix: j, scalar: q, point: w, pointBytes: E };
  }
  function d(O) {
    return y(O).pointBytes;
  }
  function h(O = Uint8Array.of(), ...$) {
    let j = We(...$);
    return l(e(u(j, _e("context", O), !!n)));
  }
  function p(O, $, j = {}) {
    (O = _e("message", O)), n && (O = n(O));
    let { prefix: q, scalar: w, pointBytes: E } = y($),
      S = h(j.context, q, O),
      v = o.multiply(S).toBytes(),
      P = h(j.context, v, E, O),
      V = i.create(S + P * w);
    if (!i.isValid(V)) throw new Error("sign failed: invalid s");
    let z = We(v, i.toBytes(V));
    return Ye(z, N.signature, "result");
  }
  let b = { zip215: !0 };
  function R(O, $, j, q = b) {
    let { context: w, zip215: E } = q,
      S = N.signature;
    (O = _e("signature", O, S)),
      ($ = _e("message", $)),
      (j = _e("publicKey", j, N.publicKey)),
      E !== void 0 && ht(E, "zip215"),
      n && ($ = n($));
    let v = S / 2,
      P = O.subarray(0, v),
      V = Pt(O.subarray(v, S)),
      z,
      M,
      G;
    try {
      (z = r.fromBytes(j, E)),
        (M = r.fromBytes(P, E)),
        (G = o.multiplyUnsafe(V));
    } catch {
      return !1;
    }
    if (!E && z.isSmallOrder()) return !1;
    let Y = h(w, M.toBytes(), z.toBytes(), $);
    return M.add(z.multiplyUnsafe(Y)).subtract(G).clearCofactor().is0();
  }
  let T = s.BYTES,
    N = { secretKey: T, publicKey: T, signature: 2 * T, seed: T };
  function D(O = c(N.seed)) {
    return Ye(O, N.seed, "seed");
  }
  function J(O) {
    let $ = ne.randomSecretKey(O);
    return { secretKey: $, publicKey: d($) };
  }
  function ee(O) {
    return Et(O) && O.length === i.BYTES;
  }
  function te(O, $) {
    try {
      return !!r.fromBytes(O, $);
    } catch {
      return !1;
    }
  }
  let ne = {
    getExtendedPublicKey: y,
    randomSecretKey: D,
    isValidSecretKey: ee,
    isValidPublicKey: te,
    toMontgomery(O) {
      let { y: $ } = r.fromBytes(O),
        j = N.publicKey,
        q = j === 32;
      if (!q && j !== 57) throw new Error("only defined for 25519 and 448");
      let w = q ? s.div(Ne + $, Ne - $) : s.div($ - Ne, $ + Ne);
      return s.toBytes(w);
    },
    toMontgomerySecret(O) {
      let $ = N.secretKey;
      Ye(O, $);
      let j = e(O.subarray(0, $));
      return a(j).subarray(0, $);
    },
    randomPrivateKey: D,
    precompute(O = 8, $ = r.BASE) {
      return $.precompute(O, !1);
    },
  };
  return Object.freeze({
    keygen: J,
    getPublicKey: d,
    sign: p,
    verify: R,
    utils: ne,
    Point: r,
    lengths: N,
  });
}
function Dc(r) {
  let e = { a: r.a, d: r.d, p: r.Fp.ORDER, n: r.n, h: r.h, Gx: r.Gx, Gy: r.Gy },
    t = r.Fp,
    n = Je(e.n, r.nBitLength, !0),
    o = { Fp: t, Fn: n, uvRatio: r.uvRatio },
    s = {
      randomBytes: r.randomBytes,
      adjustScalarBytes: r.adjustScalarBytes,
      domain: r.domain,
      prehash: r.prehash,
      mapToCurve: r.mapToCurve,
    };
  return { CURVE: e, curveOpts: o, hash: r.hash, eddsaOpts: s };
}
function Uc(r, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ExtendedPoint: t,
    CURVE: r,
    nBitLength: t.Fn.BITS,
    nByteLength: t.Fn.BYTES,
  });
}
function ui(r) {
  let { CURVE: e, curveOpts: t, hash: n, eddsaOpts: o } = Dc(r),
    s = Cc(e, t),
    i = Pc(s, n, o);
  return Uc(r, i);
}
var wt,
  Ne,
  Ro,
  Bc,
  fi = ae(() => {
    "use strict";
    bn();
    mo();
    Qt();
    (wt = BigInt(0)), (Ne = BigInt(1)), (Ro = BigInt(2)), (Bc = BigInt(8));
  });
function Fc(r) {
  let e = BigInt(10),
    t = BigInt(20),
    n = BigInt(40),
    o = BigInt(80),
    s = bo,
    c = (((r * r) % s) * r) % s,
    a = (pe(c, di, s) * c) % s,
    u = (pe(a, zc, s) * r) % s,
    l = (pe(u, Mc, s) * u) % s,
    _ = (pe(l, e, s) * l) % s,
    y = (pe(_, t, s) * _) % s,
    d = (pe(y, n, s) * y) % s,
    h = (pe(d, o, s) * d) % s,
    p = (pe(h, o, s) * d) % s,
    b = (pe(p, e, s) * l) % s;
  return { pow_p_5_8: (pe(b, di, s) * r) % s, b2: c };
}
function Vc(r) {
  return (r[0] &= 248), (r[31] &= 127), (r[31] |= 64), r;
}
function $c(r, e) {
  let t = bo,
    n = Ae(e * e * e, t),
    o = Ae(n * n * e, t),
    s = Fc(r * o).pow_p_5_8,
    i = Ae(r * n * s, t),
    c = Ae(e * i * i, t),
    a = i,
    u = Ae(i * li, t),
    l = c === r,
    _ = c === Ae(-r, t),
    y = c === Ae(-r * li, t);
  return (
    l && (i = a),
    (_ || y) && (i = u),
    ti(i, t) && (i = Ae(-i, t)),
    { isValid: l || _, value: i }
  );
}
var zc,
  di,
  M_,
  Mc,
  Kc,
  bo,
  hi,
  li,
  qc,
  Wc,
  zt,
  yi = ae(() => {
    "use strict";
    Ks();
    fi();
    Qt();
    (zc = BigInt(1)),
      (di = BigInt(2)),
      (M_ = BigInt(3)),
      (Mc = BigInt(5)),
      (Kc = BigInt(8)),
      (bo = BigInt(
        "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffed"
      )),
      (hi = {
        p: bo,
        n: BigInt(
          "0x1000000000000000000000000000000014def9dea2f79cd65812631a5cf5d3ed"
        ),
        h: Kc,
        a: BigInt(
          "0x7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffec"
        ),
        d: BigInt(
          "0x52036cee2b6ffe738cc740797779e89800700a4d4141d8ab75eb4dca135978a3"
        ),
        Gx: BigInt(
          "0x216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a"
        ),
        Gy: BigInt(
          "0x6666666666666666666666666666666666666666666666666666666666666658"
        ),
      });
    li = BigInt(
      "19681161376707505956807079304988542015446066515923890162744021073123829784752"
    );
    (qc = Je(hi.p, { isLE: !0 })),
      (Wc = H(K({}, hi), {
        Fp: qc,
        hash: Ms,
        adjustScalarBytes: Vc,
        uvRatio: $c,
      })),
      (zt = ui(Wc));
  });
var _i = xt((V_, gi) => {
  "use strict";
  var Zn = Sc().Buffer;
  function Gc(r) {
    if (r.length >= 255) throw new TypeError("Alphabet too long");
    for (var e = new Uint8Array(256), t = 0; t < e.length; t++) e[t] = 255;
    for (var n = 0; n < r.length; n++) {
      var o = r.charAt(n),
        s = o.charCodeAt(0);
      if (e[s] !== 255) throw new TypeError(o + " is ambiguous");
      e[s] = n;
    }
    var i = r.length,
      c = r.charAt(0),
      a = Math.log(i) / Math.log(256),
      u = Math.log(256) / Math.log(i);
    function l(d) {
      if (
        ((Array.isArray(d) || d instanceof Uint8Array) && (d = Zn.from(d)),
        !Zn.isBuffer(d))
      )
        throw new TypeError("Expected Buffer");
      if (d.length === 0) return "";
      for (var h = 0, p = 0, b = 0, R = d.length; b !== R && d[b] === 0; )
        b++, h++;
      for (var T = ((R - b) * u + 1) >>> 0, N = new Uint8Array(T); b !== R; ) {
        for (
          var D = d[b], J = 0, ee = T - 1;
          (D !== 0 || J < p) && ee !== -1;
          ee--, J++
        )
          (D += (256 * N[ee]) >>> 0),
            (N[ee] = D % i >>> 0),
            (D = (D / i) >>> 0);
        if (D !== 0) throw new Error("Non-zero carry");
        (p = J), b++;
      }
      for (var te = T - p; te !== T && N[te] === 0; ) te++;
      for (var ne = c.repeat(h); te < T; ++te) ne += r.charAt(N[te]);
      return ne;
    }
    function _(d) {
      if (typeof d != "string") throw new TypeError("Expected String");
      if (d.length === 0) return Zn.alloc(0);
      for (var h = 0, p = 0, b = 0; d[h] === c; ) p++, h++;
      for (
        var R = ((d.length - h) * a + 1) >>> 0, T = new Uint8Array(R);
        h < d.length;

      ) {
        var N = d.charCodeAt(h);
        if (N > 255) return;
        var D = e[N];
        if (D === 255) return;
        for (var J = 0, ee = R - 1; (D !== 0 || J < b) && ee !== -1; ee--, J++)
          (D += (i * T[ee]) >>> 0),
            (T[ee] = D % 256 >>> 0),
            (D = (D / 256) >>> 0);
        if (D !== 0) throw new Error("Non-zero carry");
        (b = J), h++;
      }
      for (var te = R - b; te !== R && T[te] === 0; ) te++;
      var ne = Zn.allocUnsafe(p + (R - te));
      ne.fill(0, 0, p);
      for (var O = p; te !== R; ) ne[O++] = T[te++];
      return ne;
    }
    function y(d) {
      var h = _(d);
      if (h) return h;
      throw new Error("Non-base" + i + " character");
    }
    return { encode: l, decodeUnsafe: _, decode: y };
  }
  gi.exports = Gc;
});
var Eo = xt(($_, pi) => {
  "use strict";
  var Hc = _i(),
    jc = "123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";
  pi.exports = Hc(jc);
});
var mi = {};
Zr(mi, { TextDecoder: () => er, TextEncoder: () => tr });
function gt(r, e, t) {
  return e <= r && r <= t;
}
function nr(r) {
  if (r === void 0) return {};
  if (r === Object(r)) return r;
  throw TypeError("Could not convert argument to dictionary");
}
function Yc(r) {
  for (var e = String(r), t = e.length, n = 0, o = []; n < t; ) {
    var s = e.charCodeAt(n);
    if (s < 55296 || s > 57343) o.push(s);
    else if (56320 <= s && s <= 57343) o.push(65533);
    else if (55296 <= s && s <= 56319)
      if (n === t - 1) o.push(65533);
      else {
        var i = r.charCodeAt(n + 1);
        if (56320 <= i && i <= 57343) {
          var c = s & 1023,
            a = i & 1023;
          o.push(65536 + (c << 10) + a), (n += 1);
        } else o.push(65533);
      }
    n += 1;
  }
  return o;
}
function Xc(r) {
  for (var e = "", t = 0; t < r.length; ++t) {
    var n = r[t];
    n <= 65535
      ? (e += String.fromCharCode(n))
      : ((n -= 65536),
        (e += String.fromCharCode((n >> 10) + 55296, (n & 1023) + 56320)));
  }
  return e;
}
function Ao(r) {
  this.tokens = [].slice.call(r);
}
function So(r, e) {
  if (r) throw TypeError("Decoder error");
  return e || 65533;
}
function Zc() {}
function Jc() {}
function er(r, e) {
  if (!(this instanceof er)) return new er(r, e);
  if (((r = r !== void 0 ? String(r).toLowerCase() : Qn), r !== Qn))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = nr(e)),
    (this._streaming = !1),
    (this._BOMseen = !1),
    (this._decoder = null),
    (this._fatal = !!e.fatal),
    (this._ignoreBOM = !!e.ignoreBOM),
    Object.defineProperty(this, "encoding", { value: "utf-8" }),
    Object.defineProperty(this, "fatal", { value: this._fatal }),
    Object.defineProperty(this, "ignoreBOM", { value: this._ignoreBOM });
}
function tr(r, e) {
  if (!(this instanceof tr)) return new tr(r, e);
  if (((r = r !== void 0 ? String(r).toLowerCase() : Qn), r !== Qn))
    throw new Error("Encoding not supported. Only utf-8 is supported");
  (e = nr(e)),
    (this._streaming = !1),
    (this._encoder = null),
    (this._options = { fatal: !!e.fatal }),
    Object.defineProperty(this, "encoding", { value: "utf-8" });
}
function Qc(r) {
  var e = r.fatal,
    t = 0,
    n = 0,
    o = 0,
    s = 128,
    i = 191;
  this.handler = function (c, a) {
    if (a === Jn && o !== 0) return (o = 0), So(e);
    if (a === Jn) return nn;
    if (o === 0) {
      if (gt(a, 0, 127)) return a;
      if (gt(a, 194, 223)) (o = 1), (t = a - 192);
      else if (gt(a, 224, 239))
        a === 224 && (s = 160), a === 237 && (i = 159), (o = 2), (t = a - 224);
      else if (gt(a, 240, 244))
        a === 240 && (s = 144), a === 244 && (i = 143), (o = 3), (t = a - 240);
      else return So(e);
      return (t = t << (6 * o)), null;
    }
    if (!gt(a, s, i))
      return (t = o = n = 0), (s = 128), (i = 191), c.prepend(a), So(e);
    if (
      ((s = 128),
      (i = 191),
      (n += 1),
      (t += (a - 128) << (6 * (o - n))),
      n !== o)
    )
      return null;
    var u = t;
    return (t = o = n = 0), u;
  };
}
function eu(r) {
  var e = r.fatal;
  this.handler = function (t, n) {
    if (n === Jn) return nn;
    if (gt(n, 0, 127)) return n;
    var o, s;
    gt(n, 128, 2047)
      ? ((o = 1), (s = 192))
      : gt(n, 2048, 65535)
      ? ((o = 2), (s = 224))
      : gt(n, 65536, 1114111) && ((o = 3), (s = 240));
    for (var i = [(n >> (6 * o)) + s]; o > 0; ) {
      var c = n >> (6 * (o - 1));
      i.push(128 | (c & 63)), (o -= 1);
    }
    return i;
  };
}
var Jn,
  nn,
  Qn,
  Ri = ae(() => {
    "use strict";
    Jn = -1;
    Ao.prototype = {
      endOfStream: function () {
        return !this.tokens.length;
      },
      read: function () {
        return this.tokens.length ? this.tokens.shift() : Jn;
      },
      prepend: function (r) {
        if (Array.isArray(r))
          for (var e = r; e.length; ) this.tokens.unshift(e.pop());
        else this.tokens.unshift(r);
      },
      push: function (r) {
        if (Array.isArray(r))
          for (var e = r; e.length; ) this.tokens.push(e.shift());
        else this.tokens.push(r);
      },
    };
    nn = -1;
    Zc.prototype = { handler: function (r, e) {} };
    Jc.prototype = { handler: function (r, e) {} };
    Qn = "utf-8";
    er.prototype = {
      decode: function (e, t) {
        var n;
        typeof e == "object" && e instanceof ArrayBuffer
          ? (n = new Uint8Array(e))
          : typeof e == "object" &&
            "buffer" in e &&
            e.buffer instanceof ArrayBuffer
          ? (n = new Uint8Array(e.buffer, e.byteOffset, e.byteLength))
          : (n = new Uint8Array(0)),
          (t = nr(t)),
          this._streaming ||
            ((this._decoder = new Qc({ fatal: this._fatal })),
            (this._BOMseen = !1)),
          (this._streaming = !!t.stream);
        for (
          var o = new Ao(n), s = [], i;
          !o.endOfStream() &&
          ((i = this._decoder.handler(o, o.read())), i !== nn);

        )
          i !== null && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
        if (!this._streaming) {
          do {
            if (((i = this._decoder.handler(o, o.read())), i === nn)) break;
            i !== null && (Array.isArray(i) ? s.push.apply(s, i) : s.push(i));
          } while (!o.endOfStream());
          this._decoder = null;
        }
        return (
          s.length &&
            ["utf-8"].indexOf(this.encoding) !== -1 &&
            !this._ignoreBOM &&
            !this._BOMseen &&
            (s[0] === 65279
              ? ((this._BOMseen = !0), s.shift())
              : (this._BOMseen = !0)),
          Xc(s)
        );
      },
    };
    tr.prototype = {
      encode: function (e, t) {
        (e = e ? String(e) : ""),
          (t = nr(t)),
          this._streaming || (this._encoder = new eu(this._options)),
          (this._streaming = !!t.stream);
        for (
          var n = [], o = new Ao(Yc(e)), s;
          !o.endOfStream() &&
          ((s = this._encoder.handler(o, o.read())), s !== nn);

        )
          Array.isArray(s) ? n.push.apply(n, s) : n.push(s);
        if (!this._streaming) {
          for (; (s = this._encoder.handler(o, o.read())), s !== nn; )
            Array.isArray(s) ? n.push.apply(n, s) : n.push(s);
          this._encoder = null;
        }
        return new Uint8Array(n);
      },
    };
  });
var wi = xt((le) => {
  "use strict";
  var tu =
      (le && le.__createBinding) ||
      (Object.create
        ? function (r, e, t, n) {
            n === void 0 && (n = t),
              Object.defineProperty(r, n, {
                enumerable: !0,
                get: function () {
                  return e[t];
                },
              });
          }
        : function (r, e, t, n) {
            n === void 0 && (n = t), (r[n] = e[t]);
          }),
    nu =
      (le && le.__setModuleDefault) ||
      (Object.create
        ? function (r, e) {
            Object.defineProperty(r, "default", { enumerable: !0, value: e });
          }
        : function (r, e) {
            r.default = e;
          }),
    ot =
      (le && le.__decorate) ||
      function (r, e, t, n) {
        var o = arguments.length,
          s =
            o < 3
              ? e
              : n === null
              ? (n = Object.getOwnPropertyDescriptor(e, t))
              : n,
          i;
        if (typeof Reflect == "object" && typeof Reflect.decorate == "function")
          s = Reflect.decorate(r, e, t, n);
        else
          for (var c = r.length - 1; c >= 0; c--)
            (i = r[c]) &&
              (s = (o < 3 ? i(s) : o > 3 ? i(e, t, s) : i(e, t)) || s);
        return o > 3 && s && Object.defineProperty(e, t, s), s;
      },
    ru =
      (le && le.__importStar) ||
      function (r) {
        if (r && r.__esModule) return r;
        var e = {};
        if (r != null)
          for (var t in r)
            t !== "default" && Object.hasOwnProperty.call(r, t) && tu(e, r, t);
        return nu(e, r), e;
      },
    bi =
      (le && le.__importDefault) ||
      function (r) {
        return r && r.__esModule ? r : { default: r };
      };
  Object.defineProperty(le, "__esModule", { value: !0 });
  le.deserializeUnchecked =
    le.deserialize =
    le.serialize =
    le.BinaryReader =
    le.BinaryWriter =
    le.BorshError =
    le.baseDecode =
    le.baseEncode =
      void 0;
  var It = bi(Vs()),
    Ei = bi(Eo()),
    ou = ru((Ri(), Jr(mi))),
    su = typeof TextDecoder != "function" ? ou.TextDecoder : TextDecoder,
    iu = new su("utf-8", { fatal: !0 });
  function au(r) {
    return (
      typeof r == "string" && (r = Buffer.from(r, "utf8")),
      Ei.default.encode(Buffer.from(r))
    );
  }
  le.baseEncode = au;
  function cu(r) {
    return Buffer.from(Ei.default.decode(r));
  }
  le.baseDecode = cu;
  var wo = 1024,
    ve = class extends Error {
      constructor(e) {
        super(e), (this.fieldPath = []), (this.originalMessage = e);
      }
      addToFieldPath(e) {
        this.fieldPath.splice(0, 0, e),
          (this.message =
            this.originalMessage + ": " + this.fieldPath.join("."));
      }
    };
  le.BorshError = ve;
  var rr = class {
    constructor() {
      (this.buf = Buffer.alloc(wo)), (this.length = 0);
    }
    maybeResize() {
      this.buf.length < 16 + this.length &&
        (this.buf = Buffer.concat([this.buf, Buffer.alloc(wo)]));
    }
    writeU8(e) {
      this.maybeResize(),
        this.buf.writeUInt8(e, this.length),
        (this.length += 1);
    }
    writeU16(e) {
      this.maybeResize(),
        this.buf.writeUInt16LE(e, this.length),
        (this.length += 2);
    }
    writeU32(e) {
      this.maybeResize(),
        this.buf.writeUInt32LE(e, this.length),
        (this.length += 4);
    }
    writeU64(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new It.default(e).toArray("le", 8)));
    }
    writeU128(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new It.default(e).toArray("le", 16)));
    }
    writeU256(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new It.default(e).toArray("le", 32)));
    }
    writeU512(e) {
      this.maybeResize(),
        this.writeBuffer(Buffer.from(new It.default(e).toArray("le", 64)));
    }
    writeBuffer(e) {
      (this.buf = Buffer.concat([
        Buffer.from(this.buf.subarray(0, this.length)),
        e,
        Buffer.alloc(wo),
      ])),
        (this.length += e.length);
    }
    writeString(e) {
      this.maybeResize();
      let t = Buffer.from(e, "utf8");
      this.writeU32(t.length), this.writeBuffer(t);
    }
    writeFixedArray(e) {
      this.writeBuffer(Buffer.from(e));
    }
    writeArray(e, t) {
      this.maybeResize(), this.writeU32(e.length);
      for (let n of e) this.maybeResize(), t(n);
    }
    toArray() {
      return this.buf.subarray(0, this.length);
    }
  };
  le.BinaryWriter = rr;
  function st(r, e, t) {
    let n = t.value;
    t.value = function (...o) {
      try {
        return n.apply(this, o);
      } catch (s) {
        if (s instanceof RangeError) {
          let i = s.code;
          if (["ERR_BUFFER_OUT_OF_BOUNDS", "ERR_OUT_OF_RANGE"].indexOf(i) >= 0)
            throw new ve("Reached the end of buffer when deserializing");
        }
        throw s;
      }
    };
  }
  var Ve = class {
    constructor(e) {
      (this.buf = e), (this.offset = 0);
    }
    readU8() {
      let e = this.buf.readUInt8(this.offset);
      return (this.offset += 1), e;
    }
    readU16() {
      let e = this.buf.readUInt16LE(this.offset);
      return (this.offset += 2), e;
    }
    readU32() {
      let e = this.buf.readUInt32LE(this.offset);
      return (this.offset += 4), e;
    }
    readU64() {
      let e = this.readBuffer(8);
      return new It.default(e, "le");
    }
    readU128() {
      let e = this.readBuffer(16);
      return new It.default(e, "le");
    }
    readU256() {
      let e = this.readBuffer(32);
      return new It.default(e, "le");
    }
    readU512() {
      let e = this.readBuffer(64);
      return new It.default(e, "le");
    }
    readBuffer(e) {
      if (this.offset + e > this.buf.length)
        throw new ve(`Expected buffer length ${e} isn't within bounds`);
      let t = this.buf.slice(this.offset, this.offset + e);
      return (this.offset += e), t;
    }
    readString() {
      let e = this.readU32(),
        t = this.readBuffer(e);
      try {
        return iu.decode(t);
      } catch (n) {
        throw new ve(`Error decoding UTF-8 string: ${n}`);
      }
    }
    readFixedArray(e) {
      return new Uint8Array(this.readBuffer(e));
    }
    readArray(e) {
      let t = this.readU32(),
        n = Array();
      for (let o = 0; o < t; ++o) n.push(e());
      return n;
    }
  };
  ot([st], Ve.prototype, "readU8", null);
  ot([st], Ve.prototype, "readU16", null);
  ot([st], Ve.prototype, "readU32", null);
  ot([st], Ve.prototype, "readU64", null);
  ot([st], Ve.prototype, "readU128", null);
  ot([st], Ve.prototype, "readU256", null);
  ot([st], Ve.prototype, "readU512", null);
  ot([st], Ve.prototype, "readString", null);
  ot([st], Ve.prototype, "readFixedArray", null);
  ot([st], Ve.prototype, "readArray", null);
  le.BinaryReader = Ve;
  function Si(r) {
    return r.charAt(0).toUpperCase() + r.slice(1);
  }
  function Mt(r, e, t, n, o) {
    try {
      if (typeof n == "string") o[`write${Si(n)}`](t);
      else if (n instanceof Array)
        if (typeof n[0] == "number") {
          if (t.length !== n[0])
            throw new ve(
              `Expecting byte array of length ${n[0]}, but got ${t.length} bytes`
            );
          o.writeFixedArray(t);
        } else if (n.length === 2 && typeof n[1] == "number") {
          if (t.length !== n[1])
            throw new ve(
              `Expecting byte array of length ${n[1]}, but got ${t.length} bytes`
            );
          for (let s = 0; s < n[1]; s++) Mt(r, null, t[s], n[0], o);
        } else
          o.writeArray(t, (s) => {
            Mt(r, e, s, n[0], o);
          });
      else if (n.kind !== void 0)
        switch (n.kind) {
          case "option": {
            t == null ? o.writeU8(0) : (o.writeU8(1), Mt(r, e, t, n.type, o));
            break;
          }
          case "map": {
            o.writeU32(t.size),
              t.forEach((s, i) => {
                Mt(r, e, i, n.key, o), Mt(r, e, s, n.value, o);
              });
            break;
          }
          default:
            throw new ve(`FieldType ${n} unrecognized`);
        }
      else Ai(r, t, o);
    } catch (s) {
      throw (s instanceof ve && s.addToFieldPath(e), s);
    }
  }
  function Ai(r, e, t) {
    if (typeof e.borshSerialize == "function") {
      e.borshSerialize(t);
      return;
    }
    let n = r.get(e.constructor);
    if (!n) throw new ve(`Class ${e.constructor.name} is missing in schema`);
    if (n.kind === "struct")
      n.fields.map(([o, s]) => {
        Mt(r, o, e[o], s, t);
      });
    else if (n.kind === "enum") {
      let o = e[n.field];
      for (let s = 0; s < n.values.length; ++s) {
        let [i, c] = n.values[s];
        if (i === o) {
          t.writeU8(s), Mt(r, i, e[i], c, t);
          break;
        }
      }
    } else
      throw new ve(
        `Unexpected schema kind: ${n.kind} for ${e.constructor.name}`
      );
  }
  function uu(r, e, t = rr) {
    let n = new t();
    return Ai(r, e, n), n.toArray();
  }
  le.serialize = uu;
  function Kt(r, e, t, n) {
    try {
      if (typeof t == "string") return n[`read${Si(t)}`]();
      if (t instanceof Array) {
        if (typeof t[0] == "number") return n.readFixedArray(t[0]);
        if (typeof t[1] == "number") {
          let o = [];
          for (let s = 0; s < t[1]; s++) o.push(Kt(r, null, t[0], n));
          return o;
        } else return n.readArray(() => Kt(r, e, t[0], n));
      }
      if (t.kind === "option") return n.readU8() ? Kt(r, e, t.type, n) : void 0;
      if (t.kind === "map") {
        let o = new Map(),
          s = n.readU32();
        for (let i = 0; i < s; i++) {
          let c = Kt(r, e, t.key, n),
            a = Kt(r, e, t.value, n);
          o.set(c, a);
        }
        return o;
      }
      return Io(r, t, n);
    } catch (o) {
      throw (o instanceof ve && o.addToFieldPath(e), o);
    }
  }
  function Io(r, e, t) {
    if (typeof e.borshDeserialize == "function") return e.borshDeserialize(t);
    let n = r.get(e);
    if (!n) throw new ve(`Class ${e.name} is missing in schema`);
    if (n.kind === "struct") {
      let o = {};
      for (let [s, i] of r.get(e).fields) o[s] = Kt(r, s, i, t);
      return new e(o);
    }
    if (n.kind === "enum") {
      let o = t.readU8();
      if (o >= n.values.length)
        throw new ve(`Enum index: ${o} is out of range`);
      let [s, i] = n.values[o],
        c = Kt(r, s, i, t);
      return new e({ [s]: c });
    }
    throw new ve(`Unexpected schema kind: ${n.kind} for ${e.constructor.name}`);
  }
  function fu(r, e, t, n = Ve) {
    let o = new n(t),
      s = Io(r, e, o);
    if (o.offset < t.length)
      throw new ve(
        `Unexpected ${t.length - o.offset} bytes after deserialized data`
      );
    return s;
  }
  le.deserialize = fu;
  function du(r, e, t, n = Ve) {
    let o = new n(t);
    return Io(r, e, o);
  }
  le.deserializeUnchecked = du;
});
var To = xt((m) => {
  "use strict";
  Object.defineProperty(m, "__esModule", { value: !0 });
  m.s16 =
    m.s8 =
    m.nu64be =
    m.u48be =
    m.u40be =
    m.u32be =
    m.u24be =
    m.u16be =
    m.nu64 =
    m.u48 =
    m.u40 =
    m.u32 =
    m.u24 =
    m.u16 =
    m.u8 =
    m.offset =
    m.greedy =
    m.Constant =
    m.UTF8 =
    m.CString =
    m.Blob =
    m.Boolean =
    m.BitField =
    m.BitStructure =
    m.VariantLayout =
    m.Union =
    m.UnionLayoutDiscriminator =
    m.UnionDiscriminator =
    m.Structure =
    m.Sequence =
    m.DoubleBE =
    m.Double =
    m.FloatBE =
    m.Float =
    m.NearInt64BE =
    m.NearInt64 =
    m.NearUInt64BE =
    m.NearUInt64 =
    m.IntBE =
    m.Int =
    m.UIntBE =
    m.UInt =
    m.OffsetLayout =
    m.GreedyCount =
    m.ExternalLayout =
    m.bindConstructorLayout =
    m.nameWithProperty =
    m.Layout =
    m.uint8ArrayToBuffer =
    m.checkUint8Array =
      void 0;
  m.constant =
    m.utf8 =
    m.cstr =
    m.blob =
    m.unionLayoutDiscriminator =
    m.union =
    m.seq =
    m.bits =
    m.struct =
    m.f64be =
    m.f64 =
    m.f32be =
    m.f32 =
    m.ns64be =
    m.s48be =
    m.s40be =
    m.s32be =
    m.s24be =
    m.s16be =
    m.ns64 =
    m.s48 =
    m.s40 =
    m.s32 =
    m.s24 =
      void 0;
  var No = oo();
  function sn(r) {
    if (!(r instanceof Uint8Array))
      throw new TypeError("b must be a Uint8Array");
  }
  m.checkUint8Array = sn;
  function se(r) {
    return sn(r), No.Buffer.from(r.buffer, r.byteOffset, r.length);
  }
  m.uint8ArrayToBuffer = se;
  var ce = class {
    constructor(e, t) {
      if (!Number.isInteger(e)) throw new TypeError("span must be an integer");
      (this.span = e), (this.property = t);
    }
    makeDestinationObject() {
      return {};
    }
    getSpan(e, t) {
      if (0 > this.span) throw new RangeError("indeterminate span");
      return this.span;
    }
    replicate(e) {
      let t = Object.create(this.constructor.prototype);
      return Object.assign(t, this), (t.property = e), t;
    }
    fromArray(e) {}
  };
  m.Layout = ce;
  function ko(r, e) {
    return e.property ? r + "[" + e.property + "]" : r;
  }
  m.nameWithProperty = ko;
  function lu(r, e) {
    if (typeof r != "function")
      throw new TypeError("Class must be constructor");
    if (Object.prototype.hasOwnProperty.call(r, "layout_"))
      throw new Error("Class is already bound to a layout");
    if (!(e && e instanceof ce)) throw new TypeError("layout must be a Layout");
    if (Object.prototype.hasOwnProperty.call(e, "boundConstructor_"))
      throw new Error("layout is already bound to a constructor");
    (r.layout_ = e),
      (e.boundConstructor_ = r),
      (e.makeDestinationObject = () => new r()),
      Object.defineProperty(r.prototype, "encode", {
        value(t, n) {
          return e.encode(this, t, n);
        },
        writable: !0,
      }),
      Object.defineProperty(r, "decode", {
        value(t, n) {
          return e.decode(t, n);
        },
        writable: !0,
      });
  }
  m.bindConstructorLayout = lu;
  var Ce = class extends ce {
    isCount() {
      throw new Error("ExternalLayout is abstract");
    }
  };
  m.ExternalLayout = Ce;
  var or = class extends Ce {
    constructor(e = 1, t) {
      if (!Number.isInteger(e) || 0 >= e)
        throw new TypeError("elementSpan must be a (positive) integer");
      super(-1, t), (this.elementSpan = e);
    }
    isCount() {
      return !0;
    }
    decode(e, t = 0) {
      sn(e);
      let n = e.length - t;
      return Math.floor(n / this.elementSpan);
    }
    encode(e, t, n) {
      return 0;
    }
  };
  m.GreedyCount = or;
  var An = class extends Ce {
    constructor(e, t = 0, n) {
      if (!(e instanceof ce)) throw new TypeError("layout must be a Layout");
      if (!Number.isInteger(t))
        throw new TypeError("offset must be integer or undefined");
      super(e.span, n || e.property), (this.layout = e), (this.offset = t);
    }
    isCount() {
      return this.layout instanceof Ge || this.layout instanceof Xe;
    }
    decode(e, t = 0) {
      return this.layout.decode(e, t + this.offset);
    }
    encode(e, t, n = 0) {
      return this.layout.encode(e, t, n + this.offset);
    }
  };
  m.OffsetLayout = An;
  var Ge = class extends ce {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return se(e).readUIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return se(t).writeUIntLE(e, n, this.span), this.span;
    }
  };
  m.UInt = Ge;
  var Xe = class extends ce {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return se(e).readUIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return se(t).writeUIntBE(e, n, this.span), this.span;
    }
  };
  m.UIntBE = Xe;
  var _t = class extends ce {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return se(e).readIntLE(t, this.span);
    }
    encode(e, t, n = 0) {
      return se(t).writeIntLE(e, n, this.span), this.span;
    }
  };
  m.Int = _t;
  var Ot = class extends ce {
    constructor(e, t) {
      if ((super(e, t), 6 < this.span))
        throw new RangeError("span must not exceed 6 bytes");
    }
    decode(e, t = 0) {
      return se(e).readIntBE(t, this.span);
    }
    encode(e, t, n = 0) {
      return se(t).writeIntBE(e, n, this.span), this.span;
    }
  };
  m.IntBE = Ot;
  var Oo = Math.pow(2, 32);
  function Er(r) {
    let e = Math.floor(r / Oo),
      t = r - e * Oo;
    return { hi32: e, lo32: t };
  }
  function Sr(r, e) {
    return r * Oo + e;
  }
  var sr = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = se(e),
        o = n.readUInt32LE(t),
        s = n.readUInt32LE(t + 4);
      return Sr(s, o);
    }
    encode(e, t, n = 0) {
      let o = Er(e),
        s = se(t);
      return s.writeUInt32LE(o.lo32, n), s.writeUInt32LE(o.hi32, n + 4), 8;
    }
  };
  m.NearUInt64 = sr;
  var ir = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = se(e),
        o = n.readUInt32BE(t),
        s = n.readUInt32BE(t + 4);
      return Sr(o, s);
    }
    encode(e, t, n = 0) {
      let o = Er(e),
        s = se(t);
      return s.writeUInt32BE(o.hi32, n), s.writeUInt32BE(o.lo32, n + 4), 8;
    }
  };
  m.NearUInt64BE = ir;
  var ar = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = se(e),
        o = n.readUInt32LE(t),
        s = n.readInt32LE(t + 4);
      return Sr(s, o);
    }
    encode(e, t, n = 0) {
      let o = Er(e),
        s = se(t);
      return s.writeUInt32LE(o.lo32, n), s.writeInt32LE(o.hi32, n + 4), 8;
    }
  };
  m.NearInt64 = ar;
  var cr = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      let n = se(e),
        o = n.readInt32BE(t),
        s = n.readUInt32BE(t + 4);
      return Sr(o, s);
    }
    encode(e, t, n = 0) {
      let o = Er(e),
        s = se(t);
      return s.writeInt32BE(o.hi32, n), s.writeUInt32BE(o.lo32, n + 4), 8;
    }
  };
  m.NearInt64BE = cr;
  var ur = class extends ce {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return se(e).readFloatLE(t);
    }
    encode(e, t, n = 0) {
      return se(t).writeFloatLE(e, n), 4;
    }
  };
  m.Float = ur;
  var fr = class extends ce {
    constructor(e) {
      super(4, e);
    }
    decode(e, t = 0) {
      return se(e).readFloatBE(t);
    }
    encode(e, t, n = 0) {
      return se(t).writeFloatBE(e, n), 4;
    }
  };
  m.FloatBE = fr;
  var dr = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return se(e).readDoubleLE(t);
    }
    encode(e, t, n = 0) {
      return se(t).writeDoubleLE(e, n), 8;
    }
  };
  m.Double = dr;
  var lr = class extends ce {
    constructor(e) {
      super(8, e);
    }
    decode(e, t = 0) {
      return se(e).readDoubleBE(t);
    }
    encode(e, t, n = 0) {
      return se(t).writeDoubleBE(e, n), 8;
    }
  };
  m.DoubleBE = lr;
  var hr = class extends ce {
    constructor(e, t, n) {
      if (!(e instanceof ce))
        throw new TypeError("elementLayout must be a Layout");
      if (
        !((t instanceof Ce && t.isCount()) || (Number.isInteger(t) && 0 <= t))
      )
        throw new TypeError(
          "count must be non-negative integer or an unsigned integer ExternalLayout"
        );
      let o = -1;
      !(t instanceof Ce) && 0 < e.span && (o = t * e.span),
        super(o, n),
        (this.elementLayout = e),
        (this.count = t);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0,
        o = this.count;
      if (
        (o instanceof Ce && (o = o.decode(e, t)), 0 < this.elementLayout.span)
      )
        n = o * this.elementLayout.span;
      else {
        let s = 0;
        for (; s < o; ) (n += this.elementLayout.getSpan(e, t + n)), ++s;
      }
      return n;
    }
    decode(e, t = 0) {
      let n = [],
        o = 0,
        s = this.count;
      for (s instanceof Ce && (s = s.decode(e, t)); o < s; )
        n.push(this.elementLayout.decode(e, t)),
          (t += this.elementLayout.getSpan(e, t)),
          (o += 1);
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.elementLayout,
        s = e.reduce((i, c) => i + o.encode(c, t, n + i), 0);
      return this.count instanceof Ce && this.count.encode(e.length, t, n), s;
    }
  };
  m.Sequence = hr;
  var yr = class extends ce {
    constructor(e, t, n) {
      if (!(Array.isArray(e) && e.reduce((s, i) => s && i instanceof ce, !0)))
        throw new TypeError("fields must be array of Layout instances");
      typeof t == "boolean" && n === void 0 && ((n = t), (t = void 0));
      for (let s of e)
        if (0 > s.span && s.property === void 0)
          throw new Error(
            "fields cannot contain unnamed variable-length layout"
          );
      let o = -1;
      try {
        o = e.reduce((s, i) => s + i.getSpan(), 0);
      } catch {}
      super(o, t), (this.fields = e), (this.decodePrefixes = !!n);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      try {
        n = this.fields.reduce((o, s) => {
          let i = s.getSpan(e, t);
          return (t += i), o + i;
        }, 0);
      } catch {
        throw new RangeError("indeterminate span");
      }
      return n;
    }
    decode(e, t = 0) {
      sn(e);
      let n = this.makeDestinationObject();
      for (let o of this.fields)
        if (
          (o.property !== void 0 && (n[o.property] = o.decode(e, t)),
          (t += o.getSpan(e, t)),
          this.decodePrefixes && e.length === t)
        )
          break;
      return n;
    }
    encode(e, t, n = 0) {
      let o = n,
        s = 0,
        i = 0;
      for (let c of this.fields) {
        let a = c.span;
        if (((i = 0 < a ? a : 0), c.property !== void 0)) {
          let u = e[c.property];
          u !== void 0 &&
            ((i = c.encode(u, t, n)), 0 > a && (a = c.getSpan(t, n)));
        }
        (s = n), (n += a);
      }
      return s + i - o;
    }
    fromArray(e) {
      let t = this.makeDestinationObject();
      for (let n of this.fields)
        n.property !== void 0 && 0 < e.length && (t[n.property] = e.shift());
      return t;
    }
    layoutFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
    offsetOf(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      let t = 0;
      for (let n of this.fields) {
        if (n.property === e) return t;
        0 > n.span ? (t = -1) : 0 <= t && (t += n.span);
      }
    }
  };
  m.Structure = yr;
  var wn = class {
    constructor(e) {
      this.property = e;
    }
    decode(e, t) {
      throw new Error("UnionDiscriminator is abstract");
    }
    encode(e, t, n) {
      throw new Error("UnionDiscriminator is abstract");
    }
  };
  m.UnionDiscriminator = wn;
  var on = class extends wn {
    constructor(e, t) {
      if (!(e instanceof Ce && e.isCount()))
        throw new TypeError(
          "layout must be an unsigned integer ExternalLayout"
        );
      super(t || e.property || "variant"), (this.layout = e);
    }
    decode(e, t) {
      return this.layout.decode(e, t);
    }
    encode(e, t, n) {
      return this.layout.encode(e, t, n);
    }
  };
  m.UnionLayoutDiscriminator = on;
  var In = class extends ce {
    constructor(e, t, n) {
      let o;
      if (e instanceof Ge || e instanceof Xe) o = new on(new An(e));
      else if (e instanceof Ce && e.isCount()) o = new on(e);
      else if (e instanceof wn) o = e;
      else
        throw new TypeError(
          "discr must be a UnionDiscriminator or an unsigned integer layout"
        );
      if ((t === void 0 && (t = null), !(t === null || t instanceof ce)))
        throw new TypeError("defaultLayout must be null or a Layout");
      if (t !== null) {
        if (0 > t.span)
          throw new Error("defaultLayout must have constant span");
        t.property === void 0 && (t = t.replicate("content"));
      }
      let s = -1;
      t &&
        ((s = t.span),
        0 <= s && (e instanceof Ge || e instanceof Xe) && (s += o.layout.span)),
        super(s, n),
        (this.discriminator = o),
        (this.usesPrefixDiscriminator = e instanceof Ge || e instanceof Xe),
        (this.defaultLayout = t),
        (this.registry = {});
      let i = this.defaultGetSourceVariant.bind(this);
      (this.getSourceVariant = function (c) {
        return i(c);
      }),
        (this.configGetSourceVariant = function (c) {
          i = c.bind(this);
        });
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = this.getVariant(e, t);
      if (!n)
        throw new Error("unable to determine span for unrecognized variant");
      return n.getSpan(e, t);
    }
    defaultGetSourceVariant(e) {
      if (
        Object.prototype.hasOwnProperty.call(e, this.discriminator.property)
      ) {
        if (
          this.defaultLayout &&
          this.defaultLayout.property &&
          Object.prototype.hasOwnProperty.call(e, this.defaultLayout.property)
        )
          return;
        let t = this.registry[e[this.discriminator.property]];
        if (
          t &&
          (!t.layout ||
            (t.property && Object.prototype.hasOwnProperty.call(e, t.property)))
        )
          return t;
      } else
        for (let t in this.registry) {
          let n = this.registry[t];
          if (n.property && Object.prototype.hasOwnProperty.call(e, n.property))
            return n;
        }
      throw new Error("unable to infer src variant");
    }
    decode(e, t = 0) {
      let n,
        o = this.discriminator,
        s = o.decode(e, t),
        i = this.registry[s];
      if (i === void 0) {
        let c = this.defaultLayout,
          a = 0;
        this.usesPrefixDiscriminator && (a = o.layout.span),
          (n = this.makeDestinationObject()),
          (n[o.property] = s),
          (n[c.property] = c.decode(e, t + a));
      } else n = i.decode(e, t);
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.getSourceVariant(e);
      if (o === void 0) {
        let s = this.discriminator,
          i = this.defaultLayout,
          c = 0;
        return (
          this.usesPrefixDiscriminator && (c = s.layout.span),
          s.encode(e[s.property], t, n),
          c + i.encode(e[i.property], t, n + c)
        );
      }
      return o.encode(e, t, n);
    }
    addVariant(e, t, n) {
      let o = new gr(this, e, t, n);
      return (this.registry[e] = o), o;
    }
    getVariant(e, t = 0) {
      let n;
      return (
        e instanceof Uint8Array
          ? (n = this.discriminator.decode(e, t))
          : (n = e),
        this.registry[n]
      );
    }
  };
  m.Union = In;
  var gr = class extends ce {
    constructor(e, t, n, o) {
      if (!(e instanceof In)) throw new TypeError("union must be a Union");
      if (!Number.isInteger(t) || 0 > t)
        throw new TypeError("variant must be a (non-negative) integer");
      if ((typeof n == "string" && o === void 0 && ((o = n), (n = null)), n)) {
        if (!(n instanceof ce)) throw new TypeError("layout must be a Layout");
        if (
          e.defaultLayout !== null &&
          0 <= n.span &&
          n.span > e.defaultLayout.span
        )
          throw new Error("variant span exceeds span of containing union");
        if (typeof o != "string")
          throw new TypeError("variant must have a String property");
      }
      let s = e.span;
      0 > e.span &&
        ((s = n ? n.span : 0),
        0 <= s &&
          e.usesPrefixDiscriminator &&
          (s += e.discriminator.layout.span)),
        super(s, o),
        (this.union = e),
        (this.variant = t),
        (this.layout = n || null);
    }
    getSpan(e, t = 0) {
      if (0 <= this.span) return this.span;
      let n = 0;
      this.union.usesPrefixDiscriminator &&
        (n = this.union.discriminator.layout.span);
      let o = 0;
      return this.layout && (o = this.layout.getSpan(e, t + n)), n + o;
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject();
      if (this !== this.union.getVariant(e, t))
        throw new Error("variant mismatch");
      let o = 0;
      return (
        this.union.usesPrefixDiscriminator &&
          (o = this.union.discriminator.layout.span),
        this.layout
          ? (n[this.property] = this.layout.decode(e, t + o))
          : this.property
          ? (n[this.property] = !0)
          : this.union.usesPrefixDiscriminator &&
            (n[this.union.discriminator.property] = this.variant),
        n
      );
    }
    encode(e, t, n = 0) {
      let o = 0;
      if (
        (this.union.usesPrefixDiscriminator &&
          (o = this.union.discriminator.layout.span),
        this.layout && !Object.prototype.hasOwnProperty.call(e, this.property))
      )
        throw new TypeError("variant lacks property " + this.property);
      this.union.discriminator.encode(this.variant, t, n);
      let s = o;
      if (
        this.layout &&
        (this.layout.encode(e[this.property], t, n + o),
        (s += this.layout.getSpan(t, n + o)),
        0 <= this.union.span && s > this.union.span)
      )
        throw new Error("encoded variant overruns containing union");
      return s;
    }
    fromArray(e) {
      if (this.layout) return this.layout.fromArray(e);
    }
  };
  m.VariantLayout = gr;
  function rn(r) {
    return 0 > r && (r += 4294967296), r;
  }
  var On = class extends ce {
    constructor(e, t, n) {
      if (!(e instanceof Ge || e instanceof Xe))
        throw new TypeError("word must be a UInt or UIntBE layout");
      if (
        (typeof t == "string" && n === void 0 && ((n = t), (t = !1)),
        4 < e.span)
      )
        throw new RangeError("word cannot exceed 32 bits");
      super(e.span, n), (this.word = e), (this.msb = !!t), (this.fields = []);
      let o = 0;
      (this._packedSetValue = function (s) {
        return (o = rn(s)), this;
      }),
        (this._packedGetValue = function () {
          return o;
        });
    }
    decode(e, t = 0) {
      let n = this.makeDestinationObject(),
        o = this.word.decode(e, t);
      this._packedSetValue(o);
      for (let s of this.fields)
        s.property !== void 0 && (n[s.property] = s.decode(e));
      return n;
    }
    encode(e, t, n = 0) {
      let o = this.word.decode(t, n);
      this._packedSetValue(o);
      for (let s of this.fields)
        if (s.property !== void 0) {
          let i = e[s.property];
          i !== void 0 && s.encode(i);
        }
      return this.word.encode(this._packedGetValue(), t, n);
    }
    addField(e, t) {
      let n = new Nn(this, e, t);
      return this.fields.push(n), n;
    }
    addBoolean(e) {
      let t = new _r(this, e);
      return this.fields.push(t), t;
    }
    fieldFor(e) {
      if (typeof e != "string") throw new TypeError("property must be string");
      for (let t of this.fields) if (t.property === e) return t;
    }
  };
  m.BitStructure = On;
  var Nn = class {
    constructor(e, t, n) {
      if (!(e instanceof On))
        throw new TypeError("container must be a BitStructure");
      if (!Number.isInteger(t) || 0 >= t)
        throw new TypeError("bits must be positive integer");
      let o = 8 * e.span,
        s = e.fields.reduce((i, c) => i + c.bits, 0);
      if (t + s > o)
        throw new Error(
          "bits too long for span remainder (" +
            (o - s) +
            " of " +
            o +
            " remain)"
        );
      (this.container = e),
        (this.bits = t),
        (this.valueMask = (1 << t) - 1),
        t === 32 && (this.valueMask = 4294967295),
        (this.start = s),
        this.container.msb && (this.start = o - s - t),
        (this.wordMask = rn(this.valueMask << this.start)),
        (this.property = n);
    }
    decode(e, t) {
      let n = this.container._packedGetValue();
      return rn(n & this.wordMask) >>> this.start;
    }
    encode(e) {
      if (
        typeof e != "number" ||
        !Number.isInteger(e) ||
        e !== rn(e & this.valueMask)
      )
        throw new TypeError(
          ko("BitField.encode", this) +
            " value must be integer not exceeding " +
            this.valueMask
        );
      let t = this.container._packedGetValue(),
        n = rn(e << this.start);
      this.container._packedSetValue(rn(t & ~this.wordMask) | n);
    }
  };
  m.BitField = Nn;
  var _r = class extends Nn {
    constructor(e, t) {
      super(e, 1, t);
    }
    decode(e, t) {
      return !!super.decode(e, t);
    }
    encode(e) {
      typeof e == "boolean" && (e = +e), super.encode(e);
    }
  };
  m.Boolean = _r;
  var pr = class extends ce {
    constructor(e, t) {
      if (
        !((e instanceof Ce && e.isCount()) || (Number.isInteger(e) && 0 <= e))
      )
        throw new TypeError(
          "length must be positive integer or an unsigned integer ExternalLayout"
        );
      let n = -1;
      e instanceof Ce || (n = e), super(n, t), (this.length = e);
    }
    getSpan(e, t) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), n;
    }
    decode(e, t = 0) {
      let n = this.span;
      return 0 > n && (n = this.length.decode(e, t)), se(e).slice(t, t + n);
    }
    encode(e, t, n) {
      let o = this.length;
      if (
        (this.length instanceof Ce && (o = e.length),
        !(e instanceof Uint8Array && o === e.length))
      )
        throw new TypeError(
          ko("Blob.encode", this) +
            " requires (length " +
            o +
            ") Uint8Array as src"
        );
      if (n + o > t.length)
        throw new RangeError("encoding overruns Uint8Array");
      let s = se(e);
      return (
        se(t).write(s.toString("hex"), n, o, "hex"),
        this.length instanceof Ce && this.length.encode(o, t, n),
        o
      );
    }
  };
  m.Blob = pr;
  var mr = class extends ce {
    constructor(e) {
      super(-1, e);
    }
    getSpan(e, t = 0) {
      sn(e);
      let n = t;
      for (; n < e.length && e[n] !== 0; ) n += 1;
      return 1 + n - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      return se(e)
        .slice(t, t + n - 1)
        .toString("utf-8");
    }
    encode(e, t, n = 0) {
      typeof e != "string" && (e = String(e));
      let o = No.Buffer.from(e, "utf8"),
        s = o.length;
      if (n + s > t.length) throw new RangeError("encoding overruns Buffer");
      let i = se(t);
      return o.copy(i, n), (i[n + s] = 0), s + 1;
    }
  };
  m.CString = mr;
  var Rr = class extends ce {
    constructor(e, t) {
      if (
        (typeof e == "string" && t === void 0 && ((t = e), (e = void 0)),
        e === void 0)
      )
        e = -1;
      else if (!Number.isInteger(e))
        throw new TypeError("maxSpan must be an integer");
      super(-1, t), (this.maxSpan = e);
    }
    getSpan(e, t = 0) {
      return sn(e), e.length - t;
    }
    decode(e, t = 0) {
      let n = this.getSpan(e, t);
      if (0 <= this.maxSpan && this.maxSpan < n)
        throw new RangeError("text length exceeds maxSpan");
      return se(e)
        .slice(t, t + n)
        .toString("utf-8");
    }
    encode(e, t, n = 0) {
      typeof e != "string" && (e = String(e));
      let o = No.Buffer.from(e, "utf8"),
        s = o.length;
      if (0 <= this.maxSpan && this.maxSpan < s)
        throw new RangeError("text length exceeds maxSpan");
      if (n + s > t.length) throw new RangeError("encoding overruns Buffer");
      return o.copy(se(t), n), s;
    }
  };
  m.UTF8 = Rr;
  var br = class extends ce {
    constructor(e, t) {
      super(0, t), (this.value = e);
    }
    decode(e, t) {
      return this.value;
    }
    encode(e, t, n) {
      return 0;
    }
  };
  m.Constant = br;
  m.greedy = (r, e) => new or(r, e);
  m.offset = (r, e, t) => new An(r, e, t);
  m.u8 = (r) => new Ge(1, r);
  m.u16 = (r) => new Ge(2, r);
  m.u24 = (r) => new Ge(3, r);
  m.u32 = (r) => new Ge(4, r);
  m.u40 = (r) => new Ge(5, r);
  m.u48 = (r) => new Ge(6, r);
  m.nu64 = (r) => new sr(r);
  m.u16be = (r) => new Xe(2, r);
  m.u24be = (r) => new Xe(3, r);
  m.u32be = (r) => new Xe(4, r);
  m.u40be = (r) => new Xe(5, r);
  m.u48be = (r) => new Xe(6, r);
  m.nu64be = (r) => new ir(r);
  m.s8 = (r) => new _t(1, r);
  m.s16 = (r) => new _t(2, r);
  m.s24 = (r) => new _t(3, r);
  m.s32 = (r) => new _t(4, r);
  m.s40 = (r) => new _t(5, r);
  m.s48 = (r) => new _t(6, r);
  m.ns64 = (r) => new ar(r);
  m.s16be = (r) => new Ot(2, r);
  m.s24be = (r) => new Ot(3, r);
  m.s32be = (r) => new Ot(4, r);
  m.s40be = (r) => new Ot(5, r);
  m.s48be = (r) => new Ot(6, r);
  m.ns64be = (r) => new cr(r);
  m.f32 = (r) => new ur(r);
  m.f32be = (r) => new fr(r);
  m.f64 = (r) => new dr(r);
  m.f64be = (r) => new lr(r);
  m.struct = (r, e, t) => new yr(r, e, t);
  m.bits = (r, e, t) => new On(r, e, t);
  m.seq = (r, e, t) => new hr(r, e, t);
  m.union = (r, e, t) => new In(r, e, t);
  m.unionLayoutDiscriminator = (r, e) => new on(r, e);
  m.blob = (r, e) => new pr(r, e);
  m.cstr = (r) => new mr(r);
  m.utf8 = (r, e) => new Rr(r, e);
  m.constant = (r, e) => new br(r, e);
});
function Li(r) {
  return Array.isArray(r)
    ? "%5B" + r.map(Li).join("%2C%20") + "%5D"
    : typeof r == "bigint"
    ? `${r}n`
    : encodeURIComponent(
        String(r != null && Object.getPrototypeOf(r) === null ? K({}, r) : r)
      );
}
function hh([r, e]) {
  return `${r}=${Li(e)}`;
}
function yh(r) {
  let e = Object.entries(r).map(hh).join("&");
  return btoa(e);
}
function gh(r, e = {}) {
  {
    let t = `Solana error #${r}; Decode this error by running \`npx @solana/errors decode -- ${r}`;
    return Object.keys(e).length && (t += ` '${yh(e)}'`), `${t}\``;
  }
}
var hu,
  yu,
  gu,
  _u,
  pu,
  mu,
  Ru,
  bu,
  Eu,
  Su,
  Au,
  wu,
  Iu,
  Ou,
  Nu,
  ku,
  Tu,
  vu,
  Lu,
  Bu,
  xu,
  Cu,
  Pu,
  Du,
  Uu,
  zu,
  Mu,
  Ku,
  Fu,
  Vu,
  $u,
  qu,
  Wu,
  Gu,
  Hu,
  ju,
  Yu,
  Xu,
  Zu,
  Ju,
  Qu,
  ef,
  tf,
  nf,
  rf,
  of,
  sf,
  af,
  cf,
  uf,
  ff,
  df,
  lf,
  hf,
  yf,
  gf,
  _f,
  pf,
  mf,
  Rf,
  bf,
  Ef,
  Sf,
  Af,
  wf,
  If,
  Of,
  Nf,
  kf,
  Tf,
  vf,
  Lf,
  Bf,
  xf,
  Cf,
  Pf,
  Df,
  Uf,
  zf,
  Mf,
  Kf,
  Ff,
  Vf,
  $f,
  qf,
  Wf,
  Gf,
  Hf,
  jf,
  Yf,
  Xf,
  Zf,
  Jf,
  Qf,
  ed,
  td,
  nd,
  rd,
  od,
  sd,
  id,
  ad,
  cd,
  ud,
  fd,
  dd,
  ld,
  hd,
  yd,
  gd,
  _d,
  pd,
  md,
  Rd,
  bd,
  Ed,
  Sd,
  Ad,
  wd,
  Id,
  Od,
  Nd,
  kd,
  Td,
  vd,
  Ld,
  Bd,
  xd,
  Cd,
  Pd,
  Dd,
  Ud,
  zd,
  Md,
  Kd,
  Fd,
  Vd,
  $d,
  qd,
  Wd,
  Gd,
  Hd,
  jd,
  Yd,
  Xd,
  Zd,
  Jd,
  Qd,
  el,
  tl,
  nl,
  rl,
  ol,
  sl,
  il,
  al,
  cl,
  ul,
  fl,
  dl,
  ll,
  hl,
  yl,
  gl,
  _l,
  pl,
  ml,
  Rl,
  bl,
  El,
  Sl,
  Al,
  wl,
  Il,
  Ol,
  Nl,
  kl,
  Tl,
  vl,
  Ll,
  Bl,
  xl,
  Cl,
  Pl,
  Dl,
  Ul,
  zl,
  Ml,
  Kl,
  Fl,
  vo,
  Lo,
  Ii,
  Oi,
  Bo,
  xo,
  Co,
  Vl,
  $l,
  ql,
  Wl,
  Po,
  Gl,
  Ni,
  ki,
  Hl,
  jl,
  Yl,
  Xl,
  Zl,
  Ti,
  vi,
  Jl,
  Ql,
  eh,
  th,
  nh,
  rh,
  oh,
  sh,
  ih,
  ah,
  ch,
  uh,
  fh,
  dh,
  lh,
  G_,
  Nt,
  Do = ae(() => {
    "use strict";
    (hu = 1),
      (yu = 2),
      (gu = 3),
      (_u = 4),
      (pu = 5),
      (mu = 6),
      (Ru = 7),
      (bu = 8),
      (Eu = 9),
      (Su = 10),
      (Au = -32700),
      (wu = -32603),
      (Iu = -32602),
      (Ou = -32601),
      (Nu = -32600),
      (ku = -32016),
      (Tu = -32015),
      (vu = -32014),
      (Lu = -32013),
      (Bu = -32012),
      (xu = -32011),
      (Cu = -32010),
      (Pu = -32009),
      (Du = -32008),
      (Uu = -32007),
      (zu = -32006),
      (Mu = -32005),
      (Ku = -32004),
      (Fu = -32003),
      (Vu = -32002),
      ($u = -32001),
      (qu = 28e5),
      (Wu = 2800001),
      (Gu = 2800002),
      (Hu = 2800003),
      (ju = 2800004),
      (Yu = 2800005),
      (Xu = 2800006),
      (Zu = 2800007),
      (Ju = 2800008),
      (Qu = 2800009),
      (ef = 2800010),
      (tf = 2800011),
      (nf = 323e4),
      (rf = 32300001),
      (of = 3230002),
      (sf = 3230003),
      (af = 3230004),
      (cf = 361e4),
      (uf = 3610001),
      (ff = 3610002),
      (df = 3610003),
      (lf = 3610004),
      (hf = 3610005),
      (yf = 3610006),
      (gf = 3610007),
      (_f = 3611e3),
      (pf = 3704e3),
      (mf = 3704001),
      (Rf = 3704002),
      (bf = 3704003),
      (Ef = 3704004),
      (Sf = 4128e3),
      (Af = 4128001),
      (wf = 4128002),
      (If = 4615e3),
      (Of = 4615001),
      (Nf = 4615002),
      (kf = 4615003),
      (Tf = 4615004),
      (vf = 4615005),
      (Lf = 4615006),
      (Bf = 4615007),
      (xf = 4615008),
      (Cf = 4615009),
      (Pf = 4615010),
      (Df = 4615011),
      (Uf = 4615012),
      (zf = 4615013),
      (Mf = 4615014),
      (Kf = 4615015),
      (Ff = 4615016),
      (Vf = 4615017),
      ($f = 4615018),
      (qf = 4615019),
      (Wf = 4615020),
      (Gf = 4615021),
      (Hf = 4615022),
      (jf = 4615023),
      (Yf = 4615024),
      (Xf = 4615025),
      (Zf = 4615026),
      (Jf = 4615027),
      (Qf = 4615028),
      (ed = 4615029),
      (td = 4615030),
      (nd = 4615031),
      (rd = 4615032),
      (od = 4615033),
      (sd = 4615034),
      (id = 4615035),
      (ad = 4615036),
      (cd = 4615037),
      (ud = 4615038),
      (fd = 4615039),
      (dd = 4615040),
      (ld = 4615041),
      (hd = 4615042),
      (yd = 4615043),
      (gd = 4615044),
      (_d = 4615045),
      (pd = 4615046),
      (md = 4615047),
      (Rd = 4615048),
      (bd = 4615049),
      (Ed = 4615050),
      (Sd = 4615051),
      (Ad = 4615052),
      (wd = 4615053),
      (Id = 4615054),
      (Od = 5508e3),
      (Nd = 5508001),
      (kd = 5508002),
      (Td = 5508003),
      (vd = 5508004),
      (Ld = 5508005),
      (Bd = 5508006),
      (xd = 5508007),
      (Cd = 5508008),
      (Pd = 5508009),
      (Dd = 5508010),
      (Ud = 5508011),
      (zd = 5663e3),
      (Md = 5663001),
      (Kd = 5663002),
      (Fd = 5663003),
      (Vd = 5663004),
      ($d = 5663005),
      (qd = 5663006),
      (Wd = 5663007),
      (Gd = 5663008),
      (Hd = 5663009),
      (jd = 5663010),
      (Yd = 5663011),
      (Xd = 5663012),
      (Zd = 5663013),
      (Jd = 5663014),
      (Qd = 5663015),
      (el = 5663016),
      (tl = 5663017),
      (nl = 5663018),
      (rl = 5663019),
      (ol = 5663020),
      (sl = 705e4),
      (il = 7050001),
      (al = 7050002),
      (cl = 7050003),
      (ul = 7050004),
      (fl = 7050005),
      (dl = 7050006),
      (ll = 7050007),
      (hl = 7050008),
      (yl = 7050009),
      (gl = 7050010),
      (_l = 7050011),
      (pl = 7050012),
      (ml = 7050013),
      (Rl = 7050014),
      (bl = 7050015),
      (El = 7050016),
      (Sl = 7050017),
      (Al = 7050018),
      (wl = 7050019),
      (Il = 7050020),
      (Ol = 7050021),
      (Nl = 7050022),
      (kl = 7050023),
      (Tl = 7050024),
      (vl = 7050025),
      (Ll = 7050026),
      (Bl = 7050027),
      (xl = 7050028),
      (Cl = 7050029),
      (Pl = 7050030),
      (Dl = 7050031),
      (Ul = 7050032),
      (zl = 7050033),
      (Ml = 7050034),
      (Kl = 7050035),
      (Fl = 7050036),
      (vo = 8078e3),
      (Lo = 8078001),
      (Ii = 8078002),
      (Oi = 8078003),
      (Bo = 8078004),
      (xo = 8078005),
      (Co = 8078006),
      (Vl = 8078007),
      ($l = 8078008),
      (ql = 8078009),
      (Wl = 8078010),
      (Po = 8078011),
      (Gl = 8078012),
      (Ni = 8078013),
      (ki = 8078014),
      (Hl = 8078015),
      (jl = 8078016),
      (Yl = 8078017),
      (Xl = 8078018),
      (Zl = 8078019),
      (Ti = 8078020),
      (vi = 8078021),
      (Jl = 8078022),
      (Ql = 81e5),
      (eh = 8100001),
      (th = 8100002),
      (nh = 8100003),
      (rh = 819e4),
      (oh = 8190001),
      (sh = 8190002),
      (ih = 8190003),
      (ah = 8190004),
      (ch = 99e5),
      (uh = 9900001),
      (fh = 9900002),
      (dh = 9900003),
      (lh = 9900004);
    G_ = {
      [nf]: "Account not found at address: $address",
      [af]: "Not all accounts were decoded. Encoded accounts found at addresses: $addresses.",
      [sf]: "Expected decoded account at address: $address",
      [of]: "Failed to decode account data at address: $address",
      [rf]: "Accounts not found at addresses: $addresses",
      [Qu]: "Unable to find a viable program address bump seed.",
      [Gu]: "$putativeAddress is not a base58-encoded address.",
      [qu]: "Expected base58 encoded address to decode to a byte array of length 32. Actual length: $actualLength.",
      [Hu]: "The `CryptoKey` must be an `Ed25519` public key.",
      [tf]: "$putativeOffCurveAddress is not a base58-encoded off-curve address.",
      [Ju]: "Invalid seeds; point must fall off the Ed25519 curve.",
      [ju]: "Expected given program derived address to have the following format: [Address, ProgramDerivedAddressBump].",
      [Xu]: "A maximum of $maxSeeds seeds, including the bump seed, may be supplied when creating an address. Received: $actual.",
      [Zu]: "The seed at index $index with length $actual exceeds the maximum length of $maxSeedLength bytes.",
      [Yu]: "Expected program derived address bump to be in the range [0, 255], got: $bump.",
      [ef]: "Program address cannot end with PDA marker.",
      [Wu]: "Expected base58-encoded address string of length in the range [32, 44]. Actual length: $actualLength.",
      [_u]: "Expected base58-encoded blockash string of length in the range [32, 44]. Actual length: $actualLength.",
      [hu]: "The network has progressed past the last block for which this transaction could have been committed.",
      [vo]: "Codec [$codecDescription] cannot decode empty byte arrays.",
      [Jl]: "Enum codec cannot use lexical values [$stringValues] as discriminators. Either remove all lexical values or set `useValuesAsDiscriminators` to `false`.",
      [Ti]: "Sentinel [$hexSentinel] must not be present in encoded bytes [$hexEncodedBytes].",
      [xo]: "Encoder and decoder must have the same fixed size, got [$encoderFixedSize] and [$decoderFixedSize].",
      [Co]: "Encoder and decoder must have the same max size, got [$encoderMaxSize] and [$decoderMaxSize].",
      [Bo]: "Encoder and decoder must either both be fixed-size or variable-size.",
      [$l]: "Enum discriminator out of range. Expected a number in [$formattedValidDiscriminators], got $discriminator.",
      [Ii]: "Expected a fixed-size codec, got a variable-size one.",
      [Ni]: "Codec [$codecDescription] expected a positive byte length, got $bytesLength.",
      [Oi]: "Expected a variable-size codec, got a fixed-size one.",
      [Zl]: "Codec [$codecDescription] expected zero-value [$hexZeroValue] to have the same size as the provided fixed-size item [$expectedSize bytes].",
      [Lo]: "Codec [$codecDescription] expected $expected bytes, got $bytesLength.",
      [Xl]: "Expected byte array constant [$hexConstant] to be present in data [$hexData] at offset [$offset].",
      [ql]: "Invalid discriminated union variant. Expected one of [$variants], got $value.",
      [Wl]: "Invalid enum variant. Expected one of [$stringValues] or a number in [$formattedNumericalValues], got $variant.",
      [Hl]: "Invalid literal union variant. Expected one of [$variants], got $value.",
      [Vl]: "Expected [$codecDescription] to have $expected items, got $actual.",
      [Gl]: "Invalid value $value for base $base with alphabet $alphabet.",
      [jl]: "Literal union discriminator out of range. Expected a number between $minRange and $maxRange, got $discriminator.",
      [Po]: "Codec [$codecDescription] expected number to be in the range [$min, $max], got $value.",
      [ki]: "Codec [$codecDescription] expected offset to be in the range [0, $bytesLength], got $offset.",
      [vi]: "Expected sentinel [$hexSentinel] to be present in decoded bytes [$hexDecodedBytes].",
      [Yl]: "Union variant out of range. Expected an index between $minRange and $maxRange, got $variant.",
      [_f]: "No random values implementation could be found.",
      [Cf]: "instruction requires an uninitialized account",
      [jf]: "instruction tries to borrow reference for an account which is already borrowed",
      [Yf]: "instruction left account with an outstanding borrowed reference",
      [Gf]: "program other than the account's owner changed the size of the account data",
      [vf]: "account data too small for instruction",
      [Hf]: "instruction expected an executable account",
      [pd]: "An account does not have enough lamports to be rent-exempt",
      [Rd]: "Program arithmetic overflowed",
      [_d]: "Failed to serialize or deserialize account data: $encodedData",
      [Id]: "Builtin programs must consume compute units",
      [rd]: "Cross-program invocation call depth too deep",
      [ud]: "Computational budget exceeded",
      [Zf]: "custom program error: #$code",
      [Vf]: "instruction contains duplicate accounts",
      [Xf]: "instruction modifications of multiply-passed account differ",
      [td]: "executable accounts must be rent exempt",
      [Qf]: "instruction changed executable accounts data",
      [ed]: "instruction changed the balance of an executable account",
      [$f]: "instruction changed executable bit of an account",
      [Mf]: "instruction modified data of an account it does not own",
      [zf]: "instruction spent from the balance of an account it does not own",
      [Of]: "generic instruction error",
      [Ed]: "Provided owner is not allowed",
      [yd]: "Account is immutable",
      [gd]: "Incorrect authority provided",
      [Bf]: "incorrect program id for instruction",
      [Lf]: "insufficient funds for instruction",
      [Tf]: "invalid account data for instruction",
      [md]: "Invalid account owner",
      [Nf]: "invalid program argument",
      [Jf]: "program returned invalid error code",
      [kf]: "invalid instruction data",
      [cd]: "Failed to reallocate account data",
      [ad]: "Provided seeds do not result in a valid address",
      [Sd]: "Accounts data allocations exceeded the maximum allowed per transaction",
      [Ad]: "Max accounts exceeded",
      [wd]: "Max instruction trace length exceeded",
      [id]: "Length of the seed is too long for address generation",
      [od]: "An account required by the instruction is missing",
      [xf]: "missing required signature for instruction",
      [Uf]: "instruction illegally modified the program id of an account",
      [Wf]: "insufficient account keys for instruction",
      [fd]: "Cross-program invocation with unauthorized signer or writable account",
      [dd]: "Failed to create program execution environment",
      [hd]: "Program failed to compile",
      [ld]: "Program failed to complete",
      [Ff]: "instruction modified data of a read-only account",
      [Kf]: "instruction changed the balance of a read-only account",
      [sd]: "Cross-program invocation reentrancy not allowed for this instruction",
      [qf]: "instruction modified rent epoch of an account",
      [Df]: "sum of account balances before and after instruction do not match",
      [Pf]: "instruction requires an initialized account",
      [If]: "",
      [nd]: "Unsupported program id",
      [bd]: "Unsupported sysvar",
      [Sf]: "The instruction does not have any accounts.",
      [Af]: "The instruction does not have any data.",
      [wf]: "Expected instruction to have progress address $expectedProgramAddress, got $actualProgramAddress.",
      [pu]: "Expected base58 encoded blockhash to decode to a byte array of length 32. Actual length: $actualLength.",
      [yu]: "The nonce `$expectedNonceValue` is no longer valid. It has advanced to `$actualNonceValue`",
      [fh]: "Invariant violation: Found no abortable iterable cache entry for key `$cacheKey`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
      [lh]: "Invariant violation: This data publisher does not publish to the channel named `$channelName`. Supported channels include $supportedChannelNames.",
      [uh]: "Invariant violation: WebSocket message iterator state is corrupt; iterated without first resolving existing message promise. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
      [ch]: "Invariant violation: WebSocket message iterator is missing state storage. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
      [dh]: "Invariant violation: Switch statement non-exhaustive. Received unexpected value `$unexpectedValue`. It should be impossible to hit this error; please file an issue at https://sola.na/web3invariant",
      [wu]: "JSON-RPC error: Internal JSON-RPC error ($__serverMessage)",
      [Iu]: "JSON-RPC error: Invalid method parameter(s) ($__serverMessage)",
      [Nu]: "JSON-RPC error: The JSON sent is not a valid `Request` object ($__serverMessage)",
      [Ou]: "JSON-RPC error: The method does not exist / is not available ($__serverMessage)",
      [Au]: "JSON-RPC error: An error occurred on the server while parsing the JSON text ($__serverMessage)",
      [Bu]: "$__serverMessage",
      [$u]: "$__serverMessage",
      [Ku]: "$__serverMessage",
      [vu]: "$__serverMessage",
      [Cu]: "$__serverMessage",
      [Pu]: "$__serverMessage",
      [ku]: "Minimum context slot has not been reached",
      [Mu]: "Node is unhealthy; behind by $numSlotsBehind slots",
      [Du]: "No snapshot",
      [Vu]: "Transaction simulation failed",
      [Uu]: "$__serverMessage",
      [xu]: "Transaction history is not available from this node",
      [zu]: "$__serverMessage",
      [Lu]: "Transaction signature length mismatch",
      [Fu]: "Transaction signature verification failure",
      [Tu]: "$__serverMessage",
      [pf]: "Key pair bytes must be of length 64, got $byteLength.",
      [mf]: "Expected private key bytes with length 32. Actual length: $actualLength.",
      [Rf]: "Expected base58-encoded signature to decode to a byte array of length 64. Actual length: $actualLength.",
      [Ef]: "The provided private key does not match the provided public key.",
      [bf]: "Expected base58-encoded signature string of length in the range [64, 88]. Actual length: $actualLength.",
      [mu]: "Lamports value must be in the range [0, 2e64-1]",
      [Ru]: "`$value` cannot be parsed as a `BigInt`",
      [Su]: "$message",
      [bu]: "`$value` cannot be parsed as a `Number`",
      [gu]: "No nonce account could be found at address `$nonceAccountAddress`",
      [rh]: "The notification name must end in 'Notifications' and the API must supply a subscription plan creator function for the notification '$notificationName'.",
      [sh]: "WebSocket was closed before payload could be added to the send buffer",
      [ih]: "WebSocket connection closed",
      [ah]: "WebSocket failed to connect",
      [oh]: "Failed to obtain a subscription id from the server",
      [nh]: "Could not find an API plan for RPC method: `$method`",
      [Ql]: "The $argumentLabel argument to the `$methodName` RPC method$optionalPathLabel was `$value`. This number is unsafe for use with the Solana JSON-RPC because it exceeds `Number.MAX_SAFE_INTEGER`.",
      [th]: "HTTP error ($statusCode): $message",
      [eh]: "HTTP header(s) forbidden: $headers. Learn more at https://developer.mozilla.org/en-US/docs/Glossary/Forbidden_header_name.",
      [Od]: "Multiple distinct signers were identified for address `$address`. Please ensure that you are using the same signer instance for each address.",
      [Nd]: "The provided value does not implement the `KeyPairSigner` interface",
      [Td]: "The provided value does not implement the `MessageModifyingSigner` interface",
      [vd]: "The provided value does not implement the `MessagePartialSigner` interface",
      [kd]: "The provided value does not implement any of the `MessageSigner` interfaces",
      [Bd]: "The provided value does not implement the `TransactionModifyingSigner` interface",
      [xd]: "The provided value does not implement the `TransactionPartialSigner` interface",
      [Cd]: "The provided value does not implement the `TransactionSendingSigner` interface",
      [Ld]: "The provided value does not implement any of the `TransactionSigner` interfaces",
      [Pd]: "More than one `TransactionSendingSigner` was identified.",
      [Dd]: "No `TransactionSendingSigner` was identified. Please provide a valid `TransactionWithSingleSendingSigner` transaction.",
      [Ud]: "Wallet account signers do not support signing multiple messages/transactions in a single operation",
      [gf]: "Cannot export a non-extractable key.",
      [uf]: "No digest implementation could be found.",
      [cf]: "Cryptographic operations are only allowed in secure browser contexts. Read more here: https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts.",
      [ff]: `This runtime does not support the generation of Ed25519 key pairs.

Install @solana/webcrypto-ed25519-polyfill and call its \`install\` function before generating keys in environments that do not support Ed25519.

For a list of runtimes that currently support Ed25519 operations, visit https://github.com/WICG/webcrypto-secure-curves/issues/20.`,
      [df]: "No signature verification implementation could be found.",
      [lf]: "No key generation implementation could be found.",
      [hf]: "No signing implementation could be found.",
      [yf]: "No key export implementation could be found.",
      [Eu]: "Timestamp value must be in the range [-(2n ** 63n), (2n ** 63n) - 1]. `$value` given",
      [El]: "Transaction processing left an account with an outstanding borrowed reference",
      [il]: "Account in use",
      [al]: "Account loaded twice",
      [cl]: "Attempt to debit an account but found no record of a prior credit.",
      [kl]: "Transaction loads an address table account that doesn't exist",
      [ll]: "This transaction has already been processed",
      [hl]: "Blockhash not found",
      [yl]: "Loader call chain is too deep",
      [bl]: "Transactions are currently disabled due to cluster maintenance",
      [Pl]: "Transaction contains a duplicate instruction ($index) that is not allowed",
      [fl]: "Insufficient funds for fee",
      [Dl]: "Transaction results in an account ($accountIndex) with insufficient funds for rent",
      [dl]: "This account may not be used to pay transaction fees",
      [_l]: "Transaction contains an invalid account reference",
      [vl]: "Transaction loads an address table account with invalid data",
      [Ll]: "Transaction address table lookup uses an invalid index",
      [Tl]: "Transaction loads an address table account with an invalid owner",
      [zl]: "LoadedAccountsDataSizeLimit set for transaction must be greater than 0.",
      [ml]: "This program may not be used for executing instructions",
      [Bl]: "Transaction leaves an account with a lower balance than rent-exempt minimum",
      [wl]: "Transaction loads a writable account that cannot be written",
      [Ul]: "Transaction exceeded max loaded accounts data size cap",
      [gl]: "Transaction requires a fee but has no signature present",
      [ul]: "Attempt to load a program that does not exist",
      [Kl]: "Execution of the program referenced by account at index $accountIndex is temporarily restricted.",
      [Ml]: "ResanitizationNeeded",
      [Rl]: "Transaction failed to sanitize accounts offsets correctly",
      [pl]: "Transaction did not pass signature verification",
      [Nl]: "Transaction locked too many accounts",
      [Fl]: "Sum of account balances before and after transaction do not match",
      [sl]: "The transaction failed with the error `$errorName`",
      [Al]: "Transaction version is unsupported",
      [Ol]: "Transaction would exceed account data limit within the block",
      [Cl]: "Transaction would exceed total account data limit",
      [Il]: "Transaction would exceed max account limit within the block",
      [Sl]: "Transaction would exceed max Block Cost Limit",
      [xl]: "Transaction would exceed max Vote Cost Limit",
      [Qd]: "Attempted to sign a transaction with an address that is not a signer for it",
      [jd]: "Transaction is missing an address at index: $index.",
      [el]: "Transaction has no expected signers therefore it cannot be encoded",
      [ol]: "Transaction size $transactionSize exceeds limit of $transactionSizeLimit bytes",
      [Kd]: "Transaction does not have a blockhash lifetime",
      [Fd]: "Transaction is not a durable nonce transaction",
      [$d]: "Contents of these address lookup tables unknown: $lookupTableAddresses",
      [qd]: "Lookup of address at index $highestRequestedIndex failed for lookup table `$lookupTableAddress`. Highest known index is $highestKnownIndex. The lookup table may have been extended since its contents were retrieved",
      [Gd]: "No fee payer set in CompiledTransaction",
      [Wd]: "Could not find program address at index $index",
      [nl]: "Failed to estimate the compute unit consumption for this transaction message. This is likely because simulating the transaction failed. Inspect the `cause` property of this error to learn more",
      [rl]: "Transaction failed when it was simulated in order to estimate the compute unit consumption. The compute unit estimate provided is for a transaction that failed when simulated and may not be representative of the compute units this transaction would consume if successful. Inspect the `cause` property of this error to learn more",
      [Yd]: "Transaction is missing a fee payer.",
      [Xd]: "Could not determine this transaction's signature. Make sure that the transaction has been signed by its fee payer.",
      [Jd]: "Transaction first instruction is not advance nonce account instruction.",
      [Zd]: "Transaction with no instructions cannot be durable nonce transaction.",
      [zd]: "This transaction includes an address (`$programAddress`) which is both invoked and set as the fee payer. Program addresses may not pay fees",
      [Md]: "This transaction includes an address (`$programAddress`) which is both invoked and marked writable. Program addresses may not be writable",
      [tl]: "The transaction message expected the transaction to have $signerAddressesLength signatures, got $signaturesLength.",
      [Hd]: "Transaction is missing signatures for addresses: $addresses.",
      [Vd]: "Transaction version must be in the range [0, 127]. `$actualVersion` given",
    };
    Nt = class extends Error {
      cause = this.cause;
      context;
      constructor(...[r, e]) {
        let t, n;
        if (e) {
          let s = e,
            { cause: i } = s,
            c = et(s, ["cause"]);
          i && (n = { cause: i }), Object.keys(c).length > 0 && (t = c);
        }
        let o = gh(r, t);
        super(o, n),
          (this.context = K({ __code: r }, t)),
          (this.name = "SolanaError");
      }
    };
  });
function _h(r, e) {
  return "fixedSize" in e ? e.fixedSize : e.getSizeFromValue(r);
}
function Bi(r) {
  return Object.freeze(
    H(K({}, r), {
      encode: (e) => {
        let t = new Uint8Array(_h(e, r));
        return r.write(e, t, 0), t;
      },
    })
  );
}
function xi(r) {
  return Object.freeze(H(K({}, r), { decode: (e, t = 0) => r.read(e, t)[0] }));
}
function an(r) {
  return "fixedSize" in r && typeof r.fixedSize == "number";
}
function Ci(r, e) {
  if (an(r) !== an(e)) throw new Nt(Bo);
  if (an(r) && an(e) && r.fixedSize !== e.fixedSize)
    throw new Nt(xo, {
      decoderFixedSize: e.fixedSize,
      encoderFixedSize: r.fixedSize,
    });
  if (!an(r) && !an(e) && r.maxSize !== e.maxSize)
    throw new Nt(Co, { decoderMaxSize: e.maxSize, encoderMaxSize: r.maxSize });
  return H(K(K({}, e), r), {
    decode: e.decode,
    encode: r.encode,
    read: e.read,
    write: r.write,
  });
}
function Pi(r, e, t = 0) {
  if (e.length - t <= 0) throw new Nt(vo, { codecDescription: r });
}
function Di(r, e, t, n = 0) {
  let o = t.length - n;
  if (o < e)
    throw new Nt(Lo, { bytesLength: o, codecDescription: r, expected: e });
}
var Ui = ae(() => {
  "use strict";
  Do();
});
function ph(r, e, t, n) {
  if (n < e || n > t)
    throw new Nt(Po, { codecDescription: r, max: t, min: e, value: n });
}
function zi(r) {
  return r?.endian !== 1;
}
function mh(r) {
  return Bi({
    fixedSize: r.size,
    write(e, t, n) {
      r.range && ph(r.name, r.range[0], r.range[1], e);
      let o = new ArrayBuffer(r.size);
      return (
        r.set(new DataView(o), e, zi(r.config)),
        t.set(new Uint8Array(o), n),
        n + r.size
      );
    },
  });
}
function Rh(r) {
  return xi({
    fixedSize: r.size,
    read(e, t = 0) {
      Pi(r.name, e, t), Di(r.name, r.size, e, t);
      let n = new DataView(bh(e, t, r.size));
      return [r.get(n, zi(r.config)), t + r.size];
    },
  });
}
function bh(r, e, t) {
  let n = r.byteOffset + (e ?? 0),
    o = t ?? r.byteLength;
  return r.buffer.slice(n, n + o);
}
var Uo,
  Eh,
  Mi,
  Ki = ae(() => {
    "use strict";
    Do();
    Ui();
    (Uo = (r = {}) =>
      mh({
        config: r,
        name: "u64",
        range: [0n, BigInt("0xffffffffffffffff")],
        set: (e, t, n) => e.setBigUint64(0, BigInt(t), n),
        size: 8,
      })),
      (Eh = (r = {}) =>
        Rh({
          config: r,
          get: (e, t) => e.getBigUint64(0, t),
          name: "u64",
          size: 8,
        })),
      (Mi = (r = {}) => Ci(Uo(r), Eh(r)));
  });
function Sh(r) {
  return kn(r) && typeof r[Symbol.iterator] == "function";
}
function kn(r) {
  return typeof r == "object" && r != null;
}
function Ar(r) {
  return kn(r) && !Array.isArray(r);
}
function nt(r) {
  return typeof r == "symbol"
    ? r.toString()
    : typeof r == "string"
    ? JSON.stringify(r)
    : `${r}`;
}
function Ah(r) {
  let { done: e, value: t } = r.next();
  return e ? void 0 : t;
}
function wh(r, e, t, n) {
  if (r === !0) return;
  r === !1 ? (r = {}) : typeof r == "string" && (r = { message: r });
  let { path: o, branch: s } = e,
    { type: i } = t,
    {
      refinement: c,
      message: a = `Expected a value of type \`${i}\`${
        c ? ` with refinement \`${c}\`` : ""
      }, but received: \`${nt(n)}\``,
    } = r;
  return H(
    K(
      {
        value: n,
        type: i,
        refinement: c,
        key: o[o.length - 1],
        path: o,
        branch: s,
      },
      r
    ),
    { message: a }
  );
}
function* Fi(r, e, t, n) {
  Sh(r) || (r = [r]);
  for (let o of r) {
    let s = wh(o, e, t, n);
    s && (yield s);
  }
}
function* Mo(r, e, t = {}) {
  let { path: n = [], branch: o = [r], coerce: s = !1, mask: i = !1 } = t,
    c = { path: n, branch: o, mask: i };
  s && (r = e.coercer(r, c));
  let a = "valid";
  for (let u of e.validator(r, c))
    (u.explanation = t.message), (a = "not_valid"), yield [u, void 0];
  for (let [u, l, _] of e.entries(r, c)) {
    let y = Mo(l, _, {
      path: u === void 0 ? n : [...n, u],
      branch: u === void 0 ? o : [...o, l],
      coerce: s,
      mask: i,
      message: t.message,
    });
    for (let d of y)
      d[0]
        ? ((a = d[0].refinement != null ? "not_refined" : "not_valid"),
          yield [d[0], void 0])
        : s &&
          ((l = d[1]),
          u === void 0
            ? (r = l)
            : r instanceof Map
            ? r.set(u, l)
            : r instanceof Set
            ? r.add(l)
            : kn(r) && (l !== void 0 || u in r) && (r[u] = l));
  }
  if (a !== "not_valid")
    for (let u of e.refiner(r, c))
      (u.explanation = t.message), (a = "not_refined"), yield [u, void 0];
  a === "valid" && (yield [void 0, r]);
}
function Ko(r, e, t) {
  let n = Tn(r, e, { message: t });
  if (n[0]) throw n[0];
}
function L(r, e, t) {
  let n = Tn(r, e, { coerce: !0, message: t });
  if (n[0]) throw n[0];
  return n[1];
}
function Ih(r, e, t) {
  let n = Tn(r, e, { coerce: !0, mask: !0, message: t });
  if (n[0]) throw n[0];
  return n[1];
}
function Vi(r, e) {
  return !Tn(r, e)[0];
}
function Tn(r, e, t = {}) {
  let n = Mo(r, e, t),
    o = Ah(n);
  return o[0]
    ? [
        new zo(o[0], function* () {
          for (let i of n) i[0] && (yield i[0]);
        }),
        void 0,
      ]
    : [void 0, o[1]];
}
function Ft(r, e) {
  return new Qe({ type: r, schema: null, validator: e });
}
function $i() {
  return Ft("any", () => !0);
}
function x(r) {
  return new Qe({
    type: "array",
    schema: r,
    *entries(e) {
      if (r && Array.isArray(e))
        for (let [t, n] of e.entries()) yield [t, n, r];
    },
    coercer(e) {
      return Array.isArray(e) ? e.slice() : e;
    },
    validator(e) {
      return (
        Array.isArray(e) || `Expected an array value, but received: ${nt(e)}`
      );
    },
  });
}
function rt() {
  return Ft("boolean", (r) => typeof r == "boolean");
}
function wr(r) {
  return Ft(
    "instance",
    (e) =>
      e instanceof r ||
      `Expected a \`${r.name}\` instance, but received: ${nt(e)}`
  );
}
function me(r) {
  let e = nt(r),
    t = typeof r;
  return new Qe({
    type: "literal",
    schema: t === "string" || t === "number" || t === "boolean" ? r : null,
    validator(n) {
      return n === r || `Expected the literal \`${e}\`, but received: ${nt(n)}`;
    },
  });
}
function Oh() {
  return Ft("never", () => !1);
}
function C(r) {
  return new Qe(
    H(K({}, r), {
      validator: (e, t) => e === null || r.validator(e, t),
      refiner: (e, t) => e === null || r.refiner(e, t),
    })
  );
}
function g() {
  return Ft(
    "number",
    (r) =>
      (typeof r == "number" && !isNaN(r)) ||
      `Expected a number, but received: ${nt(r)}`
  );
}
function F(r) {
  return new Qe(
    H(K({}, r), {
      validator: (e, t) => e === void 0 || r.validator(e, t),
      refiner: (e, t) => e === void 0 || r.refiner(e, t),
    })
  );
}
function Fo(r, e) {
  return new Qe({
    type: "record",
    schema: null,
    *entries(t) {
      if (kn(t))
        for (let n in t) {
          let o = t[n];
          yield [n, n, r], yield [n, o, e];
        }
    },
    validator(t) {
      return Ar(t) || `Expected an object, but received: ${nt(t)}`;
    },
    coercer(t) {
      return Ar(t) ? K({}, t) : t;
    },
  });
}
function k() {
  return Ft(
    "string",
    (r) => typeof r == "string" || `Expected a string, but received: ${nt(r)}`
  );
}
function Ir(r) {
  let e = Oh();
  return new Qe({
    type: "tuple",
    schema: null,
    *entries(t) {
      if (Array.isArray(t)) {
        let n = Math.max(r.length, t.length);
        for (let o = 0; o < n; o++) yield [o, t[o], r[o] || e];
      }
    },
    validator(t) {
      return Array.isArray(t) || `Expected an array, but received: ${nt(t)}`;
    },
    coercer(t) {
      return Array.isArray(t) ? t.slice() : t;
    },
  });
}
function I(r) {
  let e = Object.keys(r);
  return new Qe({
    type: "type",
    schema: r,
    *entries(t) {
      if (kn(t)) for (let n of e) yield [n, t[n], r[n]];
    },
    validator(t) {
      return Ar(t) || `Expected an object, but received: ${nt(t)}`;
    },
    coercer(t) {
      return Ar(t) ? K({}, t) : t;
    },
  });
}
function Pe(r) {
  let e = r.map((t) => t.type).join(" | ");
  return new Qe({
    type: "union",
    schema: null,
    coercer(t, n) {
      for (let o of r) {
        let [s, i] = o.validate(t, { coerce: !0, mask: n.mask });
        if (!s) return i;
      }
      return t;
    },
    validator(t, n) {
      let o = [];
      for (let s of r) {
        let [...i] = Mo(t, s, n),
          [c] = i;
        if (c[0]) for (let [a] of i) a && o.push(a);
        else return [];
      }
      return [
        `Expected the value to satisfy a union of \`${e}\`, but received: ${nt(
          t
        )}`,
        ...o,
      ];
    },
  });
}
function Vt() {
  return Ft("unknown", () => !0);
}
function cn(r, e, t) {
  return new Qe(
    H(K({}, r), {
      coercer: (n, o) => (Vi(n, e) ? r.coercer(t(n, o), o) : r.coercer(n, o)),
    })
  );
}
var zo,
  Qe,
  qi = ae(() => {
    "use strict";
    zo = class extends TypeError {
      constructor(e, t) {
        let n,
          u = e,
          { message: o, explanation: s } = u,
          i = et(u, ["message", "explanation"]),
          { path: c } = e,
          a = c.length === 0 ? o : `At path: ${c.join(".")} -- ${o}`;
        super(s ?? a),
          s != null && (this.cause = a),
          Object.assign(this, i),
          (this.name = this.constructor.name),
          (this.failures = () => n ?? (n = [e, ...t()]));
      }
    };
    Qe = class {
      constructor(e) {
        let {
          type: t,
          schema: n,
          validator: o,
          refiner: s,
          coercer: i = (a) => a,
          entries: c = function* () {},
        } = e;
        (this.type = t),
          (this.schema = n),
          (this.entries = c),
          (this.coercer = i),
          o
            ? (this.validator = (a, u) => {
                let l = o(a, u);
                return Fi(l, u, this, a);
              })
            : (this.validator = () => []),
          s
            ? (this.refiner = (a, u) => {
                let l = s(a, u);
                return Fi(l, u, this, a);
              })
            : (this.refiner = () => []);
      }
      assert(e, t) {
        return Ko(e, this, t);
      }
      create(e, t) {
        return L(e, this, t);
      }
      is(e) {
        return Vi(e, this);
      }
      mask(e, t) {
        return Ih(e, this, t);
      }
      validate(e, t = {}) {
        return Tn(e, this, t);
      }
    };
  });
function vn() {
  if (
    !Or &&
    ((Or =
      (typeof crypto < "u" &&
        crypto.getRandomValues &&
        crypto.getRandomValues.bind(crypto)) ||
      (typeof msCrypto < "u" &&
        typeof msCrypto.getRandomValues == "function" &&
        msCrypto.getRandomValues.bind(msCrypto))),
    !Or)
  )
    throw new Error(
      "crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported"
    );
  return Or(Nh);
}
var Or,
  Nh,
  Vo = ae(() => {
    "use strict";
    Nh = new Uint8Array(16);
  });
var Wi,
  Gi = ae(() => {
    "use strict";
    Wi =
      /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
  });
function kh(r) {
  return typeof r == "string" && Wi.test(r);
}
var kt,
  Ln = ae(() => {
    "use strict";
    Gi();
    kt = kh;
  });
function Th(r) {
  var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0,
    t = (
      Le[r[e + 0]] +
      Le[r[e + 1]] +
      Le[r[e + 2]] +
      Le[r[e + 3]] +
      "-" +
      Le[r[e + 4]] +
      Le[r[e + 5]] +
      "-" +
      Le[r[e + 6]] +
      Le[r[e + 7]] +
      "-" +
      Le[r[e + 8]] +
      Le[r[e + 9]] +
      "-" +
      Le[r[e + 10]] +
      Le[r[e + 11]] +
      Le[r[e + 12]] +
      Le[r[e + 13]] +
      Le[r[e + 14]] +
      Le[r[e + 15]]
    ).toLowerCase();
  if (!kt(t)) throw TypeError("Stringified UUID is invalid");
  return t;
}
var Le,
  Nr,
  Tt,
  Bn = ae(() => {
    "use strict";
    Ln();
    Le = [];
    for (Nr = 0; Nr < 256; ++Nr) Le.push((Nr + 256).toString(16).substr(1));
    Tt = Th;
  });
function vh(r, e, t) {
  var n = (e && t) || 0,
    o = e || new Array(16);
  r = r || {};
  var s = r.node || Hi,
    i = r.clockseq !== void 0 ? r.clockseq : $o;
  if (s == null || i == null) {
    var c = r.random || (r.rng || vn)();
    s == null && (s = Hi = [c[0] | 1, c[1], c[2], c[3], c[4], c[5]]),
      i == null && (i = $o = ((c[6] << 8) | c[7]) & 16383);
  }
  var a = r.msecs !== void 0 ? r.msecs : Date.now(),
    u = r.nsecs !== void 0 ? r.nsecs : Wo + 1,
    l = a - qo + (u - Wo) / 1e4;
  if (
    (l < 0 && r.clockseq === void 0 && (i = (i + 1) & 16383),
    (l < 0 || a > qo) && r.nsecs === void 0 && (u = 0),
    u >= 1e4)
  )
    throw new Error("uuid.v1(): Can't create more than 10M uuids/sec");
  (qo = a), (Wo = u), ($o = i), (a += 122192928e5);
  var _ = ((a & 268435455) * 1e4 + u) % 4294967296;
  (o[n++] = (_ >>> 24) & 255),
    (o[n++] = (_ >>> 16) & 255),
    (o[n++] = (_ >>> 8) & 255),
    (o[n++] = _ & 255);
  var y = ((a / 4294967296) * 1e4) & 268435455;
  (o[n++] = (y >>> 8) & 255),
    (o[n++] = y & 255),
    (o[n++] = ((y >>> 24) & 15) | 16),
    (o[n++] = (y >>> 16) & 255),
    (o[n++] = (i >>> 8) | 128),
    (o[n++] = i & 255);
  for (var d = 0; d < 6; ++d) o[n + d] = s[d];
  return e || Tt(o);
}
var Hi,
  $o,
  qo,
  Wo,
  ji,
  Yi = ae(() => {
    "use strict";
    Vo();
    Bn();
    (qo = 0), (Wo = 0);
    ji = vh;
  });
function Lh(r) {
  if (!kt(r)) throw TypeError("Invalid UUID");
  var e,
    t = new Uint8Array(16);
  return (
    (t[0] = (e = parseInt(r.slice(0, 8), 16)) >>> 24),
    (t[1] = (e >>> 16) & 255),
    (t[2] = (e >>> 8) & 255),
    (t[3] = e & 255),
    (t[4] = (e = parseInt(r.slice(9, 13), 16)) >>> 8),
    (t[5] = e & 255),
    (t[6] = (e = parseInt(r.slice(14, 18), 16)) >>> 8),
    (t[7] = e & 255),
    (t[8] = (e = parseInt(r.slice(19, 23), 16)) >>> 8),
    (t[9] = e & 255),
    (t[10] = ((e = parseInt(r.slice(24, 36), 16)) / 1099511627776) & 255),
    (t[11] = (e / 4294967296) & 255),
    (t[12] = (e >>> 24) & 255),
    (t[13] = (e >>> 16) & 255),
    (t[14] = (e >>> 8) & 255),
    (t[15] = e & 255),
    t
  );
}
var kr,
  Go = ae(() => {
    "use strict";
    Ln();
    kr = Lh;
  });
function Bh(r) {
  r = unescape(encodeURIComponent(r));
  for (var e = [], t = 0; t < r.length; ++t) e.push(r.charCodeAt(t));
  return e;
}
function Tr(r, e, t) {
  function n(o, s, i, c) {
    if (
      (typeof o == "string" && (o = Bh(o)),
      typeof s == "string" && (s = kr(s)),
      s.length !== 16)
    )
      throw TypeError(
        "Namespace must be array-like (16 iterable integer values, 0-255)"
      );
    var a = new Uint8Array(16 + o.length);
    if (
      (a.set(s),
      a.set(o, s.length),
      (a = t(a)),
      (a[6] = (a[6] & 15) | e),
      (a[8] = (a[8] & 63) | 128),
      i)
    ) {
      c = c || 0;
      for (var u = 0; u < 16; ++u) i[c + u] = a[u];
      return i;
    }
    return Tt(a);
  }
  try {
    n.name = r;
  } catch {}
  return (n.DNS = xh), (n.URL = Ch), n;
}
var xh,
  Ch,
  Ho = ae(() => {
    "use strict";
    Bn();
    Go();
    (xh = "6ba7b810-9dad-11d1-80b4-00c04fd430c8"),
      (Ch = "6ba7b811-9dad-11d1-80b4-00c04fd430c8");
  });
function Ph(r) {
  if (typeof r == "string") {
    var e = unescape(encodeURIComponent(r));
    r = new Uint8Array(e.length);
    for (var t = 0; t < e.length; ++t) r[t] = e.charCodeAt(t);
  }
  return Dh(Uh(zh(r), r.length * 8));
}
function Dh(r) {
  for (
    var e = [], t = r.length * 32, n = "0123456789abcdef", o = 0;
    o < t;
    o += 8
  ) {
    var s = (r[o >> 5] >>> o % 32) & 255,
      i = parseInt(n.charAt((s >>> 4) & 15) + n.charAt(s & 15), 16);
    e.push(i);
  }
  return e;
}
function Xi(r) {
  return (((r + 64) >>> 9) << 4) + 14 + 1;
}
function Uh(r, e) {
  (r[e >> 5] |= 128 << e % 32), (r[Xi(e) - 1] = e);
  for (
    var t = 1732584193, n = -271733879, o = -1732584194, s = 271733878, i = 0;
    i < r.length;
    i += 16
  ) {
    var c = t,
      a = n,
      u = o,
      l = s;
    (t = De(t, n, o, s, r[i], 7, -680876936)),
      (s = De(s, t, n, o, r[i + 1], 12, -389564586)),
      (o = De(o, s, t, n, r[i + 2], 17, 606105819)),
      (n = De(n, o, s, t, r[i + 3], 22, -1044525330)),
      (t = De(t, n, o, s, r[i + 4], 7, -176418897)),
      (s = De(s, t, n, o, r[i + 5], 12, 1200080426)),
      (o = De(o, s, t, n, r[i + 6], 17, -1473231341)),
      (n = De(n, o, s, t, r[i + 7], 22, -45705983)),
      (t = De(t, n, o, s, r[i + 8], 7, 1770035416)),
      (s = De(s, t, n, o, r[i + 9], 12, -1958414417)),
      (o = De(o, s, t, n, r[i + 10], 17, -42063)),
      (n = De(n, o, s, t, r[i + 11], 22, -1990404162)),
      (t = De(t, n, o, s, r[i + 12], 7, 1804603682)),
      (s = De(s, t, n, o, r[i + 13], 12, -40341101)),
      (o = De(o, s, t, n, r[i + 14], 17, -1502002290)),
      (n = De(n, o, s, t, r[i + 15], 22, 1236535329)),
      (t = Ue(t, n, o, s, r[i + 1], 5, -165796510)),
      (s = Ue(s, t, n, o, r[i + 6], 9, -1069501632)),
      (o = Ue(o, s, t, n, r[i + 11], 14, 643717713)),
      (n = Ue(n, o, s, t, r[i], 20, -373897302)),
      (t = Ue(t, n, o, s, r[i + 5], 5, -701558691)),
      (s = Ue(s, t, n, o, r[i + 10], 9, 38016083)),
      (o = Ue(o, s, t, n, r[i + 15], 14, -660478335)),
      (n = Ue(n, o, s, t, r[i + 4], 20, -405537848)),
      (t = Ue(t, n, o, s, r[i + 9], 5, 568446438)),
      (s = Ue(s, t, n, o, r[i + 14], 9, -1019803690)),
      (o = Ue(o, s, t, n, r[i + 3], 14, -187363961)),
      (n = Ue(n, o, s, t, r[i + 8], 20, 1163531501)),
      (t = Ue(t, n, o, s, r[i + 13], 5, -1444681467)),
      (s = Ue(s, t, n, o, r[i + 2], 9, -51403784)),
      (o = Ue(o, s, t, n, r[i + 7], 14, 1735328473)),
      (n = Ue(n, o, s, t, r[i + 12], 20, -1926607734)),
      (t = ze(t, n, o, s, r[i + 5], 4, -378558)),
      (s = ze(s, t, n, o, r[i + 8], 11, -2022574463)),
      (o = ze(o, s, t, n, r[i + 11], 16, 1839030562)),
      (n = ze(n, o, s, t, r[i + 14], 23, -35309556)),
      (t = ze(t, n, o, s, r[i + 1], 4, -1530992060)),
      (s = ze(s, t, n, o, r[i + 4], 11, 1272893353)),
      (o = ze(o, s, t, n, r[i + 7], 16, -155497632)),
      (n = ze(n, o, s, t, r[i + 10], 23, -1094730640)),
      (t = ze(t, n, o, s, r[i + 13], 4, 681279174)),
      (s = ze(s, t, n, o, r[i], 11, -358537222)),
      (o = ze(o, s, t, n, r[i + 3], 16, -722521979)),
      (n = ze(n, o, s, t, r[i + 6], 23, 76029189)),
      (t = ze(t, n, o, s, r[i + 9], 4, -640364487)),
      (s = ze(s, t, n, o, r[i + 12], 11, -421815835)),
      (o = ze(o, s, t, n, r[i + 15], 16, 530742520)),
      (n = ze(n, o, s, t, r[i + 2], 23, -995338651)),
      (t = Me(t, n, o, s, r[i], 6, -198630844)),
      (s = Me(s, t, n, o, r[i + 7], 10, 1126891415)),
      (o = Me(o, s, t, n, r[i + 14], 15, -1416354905)),
      (n = Me(n, o, s, t, r[i + 5], 21, -57434055)),
      (t = Me(t, n, o, s, r[i + 12], 6, 1700485571)),
      (s = Me(s, t, n, o, r[i + 3], 10, -1894986606)),
      (o = Me(o, s, t, n, r[i + 10], 15, -1051523)),
      (n = Me(n, o, s, t, r[i + 1], 21, -2054922799)),
      (t = Me(t, n, o, s, r[i + 8], 6, 1873313359)),
      (s = Me(s, t, n, o, r[i + 15], 10, -30611744)),
      (o = Me(o, s, t, n, r[i + 6], 15, -1560198380)),
      (n = Me(n, o, s, t, r[i + 13], 21, 1309151649)),
      (t = Me(t, n, o, s, r[i + 4], 6, -145523070)),
      (s = Me(s, t, n, o, r[i + 11], 10, -1120210379)),
      (o = Me(o, s, t, n, r[i + 2], 15, 718787259)),
      (n = Me(n, o, s, t, r[i + 9], 21, -343485551)),
      (t = vt(t, c)),
      (n = vt(n, a)),
      (o = vt(o, u)),
      (s = vt(s, l));
  }
  return [t, n, o, s];
}
function zh(r) {
  if (r.length === 0) return [];
  for (var e = r.length * 8, t = new Uint32Array(Xi(e)), n = 0; n < e; n += 8)
    t[n >> 5] |= (r[n / 8] & 255) << n % 32;
  return t;
}
function vt(r, e) {
  var t = (r & 65535) + (e & 65535),
    n = (r >> 16) + (e >> 16) + (t >> 16);
  return (n << 16) | (t & 65535);
}
function Mh(r, e) {
  return (r << e) | (r >>> (32 - e));
}
function vr(r, e, t, n, o, s) {
  return vt(Mh(vt(vt(e, r), vt(n, s)), o), t);
}
function De(r, e, t, n, o, s, i) {
  return vr((e & t) | (~e & n), r, e, o, s, i);
}
function Ue(r, e, t, n, o, s, i) {
  return vr((e & n) | (t & ~n), r, e, o, s, i);
}
function ze(r, e, t, n, o, s, i) {
  return vr(e ^ t ^ n, r, e, o, s, i);
}
function Me(r, e, t, n, o, s, i) {
  return vr(t ^ (e | ~n), r, e, o, s, i);
}
var Zi,
  Ji = ae(() => {
    "use strict";
    Zi = Ph;
  });
var Kh,
  Qi,
  ea = ae(() => {
    "use strict";
    Ho();
    Ji();
    (Kh = Tr("v3", 48, Zi)), (Qi = Kh);
  });
function Fh(r, e, t) {
  r = r || {};
  var n = r.random || (r.rng || vn)();
  if (((n[6] = (n[6] & 15) | 64), (n[8] = (n[8] & 63) | 128), e)) {
    t = t || 0;
    for (var o = 0; o < 16; ++o) e[t + o] = n[o];
    return e;
  }
  return Tt(n);
}
var ta,
  na = ae(() => {
    "use strict";
    Vo();
    Bn();
    ta = Fh;
  });
function Vh(r, e, t, n) {
  switch (r) {
    case 0:
      return (e & t) ^ (~e & n);
    case 1:
      return e ^ t ^ n;
    case 2:
      return (e & t) ^ (e & n) ^ (t & n);
    case 3:
      return e ^ t ^ n;
  }
}
function jo(r, e) {
  return (r << e) | (r >>> (32 - e));
}
function $h(r) {
  var e = [1518500249, 1859775393, 2400959708, 3395469782],
    t = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
  if (typeof r == "string") {
    var n = unescape(encodeURIComponent(r));
    r = [];
    for (var o = 0; o < n.length; ++o) r.push(n.charCodeAt(o));
  } else Array.isArray(r) || (r = Array.prototype.slice.call(r));
  r.push(128);
  for (
    var s = r.length / 4 + 2, i = Math.ceil(s / 16), c = new Array(i), a = 0;
    a < i;
    ++a
  ) {
    for (var u = new Uint32Array(16), l = 0; l < 16; ++l)
      u[l] =
        (r[a * 64 + l * 4] << 24) |
        (r[a * 64 + l * 4 + 1] << 16) |
        (r[a * 64 + l * 4 + 2] << 8) |
        r[a * 64 + l * 4 + 3];
    c[a] = u;
  }
  (c[i - 1][14] = ((r.length - 1) * 8) / Math.pow(2, 32)),
    (c[i - 1][14] = Math.floor(c[i - 1][14])),
    (c[i - 1][15] = ((r.length - 1) * 8) & 4294967295);
  for (var _ = 0; _ < i; ++_) {
    for (var y = new Uint32Array(80), d = 0; d < 16; ++d) y[d] = c[_][d];
    for (var h = 16; h < 80; ++h)
      y[h] = jo(y[h - 3] ^ y[h - 8] ^ y[h - 14] ^ y[h - 16], 1);
    for (
      var p = t[0], b = t[1], R = t[2], T = t[3], N = t[4], D = 0;
      D < 80;
      ++D
    ) {
      var J = Math.floor(D / 20),
        ee = (jo(p, 5) + Vh(J, b, R, T) + N + e[J] + y[D]) >>> 0;
      (N = T), (T = R), (R = jo(b, 30) >>> 0), (b = p), (p = ee);
    }
    (t[0] = (t[0] + p) >>> 0),
      (t[1] = (t[1] + b) >>> 0),
      (t[2] = (t[2] + R) >>> 0),
      (t[3] = (t[3] + T) >>> 0),
      (t[4] = (t[4] + N) >>> 0);
  }
  return [
    (t[0] >> 24) & 255,
    (t[0] >> 16) & 255,
    (t[0] >> 8) & 255,
    t[0] & 255,
    (t[1] >> 24) & 255,
    (t[1] >> 16) & 255,
    (t[1] >> 8) & 255,
    t[1] & 255,
    (t[2] >> 24) & 255,
    (t[2] >> 16) & 255,
    (t[2] >> 8) & 255,
    t[2] & 255,
    (t[3] >> 24) & 255,
    (t[3] >> 16) & 255,
    (t[3] >> 8) & 255,
    t[3] & 255,
    (t[4] >> 24) & 255,
    (t[4] >> 16) & 255,
    (t[4] >> 8) & 255,
    t[4] & 255,
  ];
}
var ra,
  oa = ae(() => {
    "use strict";
    ra = $h;
  });
var qh,
  sa,
  ia = ae(() => {
    "use strict";
    Ho();
    oa();
    (qh = Tr("v5", 80, ra)), (sa = qh);
  });
var aa,
  ca = ae(() => {
    "use strict";
    aa = "00000000-0000-0000-0000-000000000000";
  });
function Wh(r) {
  if (!kt(r)) throw TypeError("Invalid UUID");
  return parseInt(r.substr(14, 1), 16);
}
var ua,
  fa = ae(() => {
    "use strict";
    Ln();
    ua = Wh;
  });
var Yo = {};
Zr(Yo, {
  NIL: () => aa,
  parse: () => kr,
  stringify: () => Tt,
  v1: () => ji,
  v3: () => Qi,
  v4: () => ta,
  v5: () => sa,
  validate: () => kt,
  version: () => ua,
});
var Xo = ae(() => {
  "use strict";
  Yi();
  ea();
  na();
  ia();
  ca();
  fa();
  Ln();
  Bn();
  Go();
});
var la = xt((Vp, da) => {
  "use strict";
  var Gh = (Xo(), Jr(Yo)).v4,
    Hh = function (r, e, t, n) {
      if (typeof r != "string") throw new TypeError(r + " must be a string");
      n = n || {};
      let o = typeof n.version == "number" ? n.version : 2;
      if (o !== 1 && o !== 2) throw new TypeError(o + " must be 1 or 2");
      let s = { method: r };
      if ((o === 2 && (s.jsonrpc = "2.0"), e)) {
        if (typeof e != "object" && !Array.isArray(e))
          throw new TypeError(e + " must be an object, array or omitted");
        s.params = e;
      }
      if (typeof t > "u") {
        let i =
          typeof n.generator == "function"
            ? n.generator
            : function () {
                return Gh();
              };
        s.id = i(s, n);
      } else
        o === 2 && t === null
          ? n.notificationIdNull && (s.id = null)
          : (s.id = t);
      return s;
    };
  da.exports = Hh;
});
var ya = xt(($p, ha) => {
  "use strict";
  var jh = (Xo(), Jr(Yo)).v4,
    Yh = la(),
    xn = function (r, e) {
      if (!(this instanceof xn)) return new xn(r, e);
      e || (e = {}),
        (this.options = {
          reviver: typeof e.reviver < "u" ? e.reviver : null,
          replacer: typeof e.replacer < "u" ? e.replacer : null,
          generator:
            typeof e.generator < "u"
              ? e.generator
              : function () {
                  return jh();
                },
          version: typeof e.version < "u" ? e.version : 2,
          notificationIdNull:
            typeof e.notificationIdNull == "boolean"
              ? e.notificationIdNull
              : !1,
        }),
        (this.callServer = r);
    };
  ha.exports = xn;
  xn.prototype.request = function (r, e, t, n) {
    let o = this,
      s = null,
      i = Array.isArray(r) && typeof e == "function";
    if (this.options.version === 1 && i)
      throw new TypeError("JSON-RPC 1.0 does not support batching");
    if (i || (!i && r && typeof r == "object" && typeof e == "function"))
      (n = e), (s = r);
    else {
      typeof t == "function" && ((n = t), (t = void 0));
      let u = typeof n == "function";
      try {
        s = Yh(r, e, t, {
          generator: this.options.generator,
          version: this.options.version,
          notificationIdNull: this.options.notificationIdNull,
        });
      } catch (l) {
        if (u) return n(l);
        throw l;
      }
      if (!u) return s;
    }
    let a;
    try {
      a = JSON.stringify(s, this.options.replacer);
    } catch (u) {
      return n(u);
    }
    return (
      this.callServer(a, function (u, l) {
        o._parseResponse(u, l, n);
      }),
      s
    );
  };
  xn.prototype._parseResponse = function (r, e, t) {
    if (r) {
      t(r);
      return;
    }
    if (!e) return t();
    let n;
    try {
      n = JSON.parse(e, this.options.reviver);
    } catch (o) {
      return t(o);
    }
    if (t.length === 3)
      if (Array.isArray(n)) {
        let o = function (i) {
            return typeof i.error < "u";
          },
          s = function (i) {
            return !o(i);
          };
        return t(null, n.filter(o), n.filter(s));
      } else return t(null, n.error, n.result);
    t(null, n);
  };
});
var _a = xt((qp, Zo) => {
  "use strict";
  var Xh = Object.prototype.hasOwnProperty,
    $e = "~";
  function Cn() {}
  Object.create &&
    ((Cn.prototype = Object.create(null)), new Cn().__proto__ || ($e = !1));
  function Zh(r, e, t) {
    (this.fn = r), (this.context = e), (this.once = t || !1);
  }
  function ga(r, e, t, n, o) {
    if (typeof t != "function")
      throw new TypeError("The listener must be a function");
    var s = new Zh(t, n || r, o),
      i = $e ? $e + e : e;
    return (
      r._events[i]
        ? r._events[i].fn
          ? (r._events[i] = [r._events[i], s])
          : r._events[i].push(s)
        : ((r._events[i] = s), r._eventsCount++),
      r
    );
  }
  function Lr(r, e) {
    --r._eventsCount === 0 ? (r._events = new Cn()) : delete r._events[e];
  }
  function Ke() {
    (this._events = new Cn()), (this._eventsCount = 0);
  }
  Ke.prototype.eventNames = function () {
    var e = [],
      t,
      n;
    if (this._eventsCount === 0) return e;
    for (n in (t = this._events)) Xh.call(t, n) && e.push($e ? n.slice(1) : n);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(t))
      : e;
  };
  Ke.prototype.listeners = function (e) {
    var t = $e ? $e + e : e,
      n = this._events[t];
    if (!n) return [];
    if (n.fn) return [n.fn];
    for (var o = 0, s = n.length, i = new Array(s); o < s; o++) i[o] = n[o].fn;
    return i;
  };
  Ke.prototype.listenerCount = function (e) {
    var t = $e ? $e + e : e,
      n = this._events[t];
    return n ? (n.fn ? 1 : n.length) : 0;
  };
  Ke.prototype.emit = function (e, t, n, o, s, i) {
    var c = $e ? $e + e : e;
    if (!this._events[c]) return !1;
    var a = this._events[c],
      u = arguments.length,
      l,
      _;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), u)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, t), !0;
        case 3:
          return a.fn.call(a.context, t, n), !0;
        case 4:
          return a.fn.call(a.context, t, n, o), !0;
        case 5:
          return a.fn.call(a.context, t, n, o, s), !0;
        case 6:
          return a.fn.call(a.context, t, n, o, s, i), !0;
      }
      for (_ = 1, l = new Array(u - 1); _ < u; _++) l[_ - 1] = arguments[_];
      a.fn.apply(a.context, l);
    } else {
      var y = a.length,
        d;
      for (_ = 0; _ < y; _++)
        switch ((a[_].once && this.removeListener(e, a[_].fn, void 0, !0), u)) {
          case 1:
            a[_].fn.call(a[_].context);
            break;
          case 2:
            a[_].fn.call(a[_].context, t);
            break;
          case 3:
            a[_].fn.call(a[_].context, t, n);
            break;
          case 4:
            a[_].fn.call(a[_].context, t, n, o);
            break;
          default:
            if (!l)
              for (d = 1, l = new Array(u - 1); d < u; d++)
                l[d - 1] = arguments[d];
            a[_].fn.apply(a[_].context, l);
        }
    }
    return !0;
  };
  Ke.prototype.on = function (e, t, n) {
    return ga(this, e, t, n, !1);
  };
  Ke.prototype.once = function (e, t, n) {
    return ga(this, e, t, n, !0);
  };
  Ke.prototype.removeListener = function (e, t, n, o) {
    var s = $e ? $e + e : e;
    if (!this._events[s]) return this;
    if (!t) return Lr(this, s), this;
    var i = this._events[s];
    if (i.fn)
      i.fn === t && (!o || i.once) && (!n || i.context === n) && Lr(this, s);
    else {
      for (var c = 0, a = [], u = i.length; c < u; c++)
        (i[c].fn !== t || (o && !i[c].once) || (n && i[c].context !== n)) &&
          a.push(i[c]);
      a.length ? (this._events[s] = a.length === 1 ? a[0] : a) : Lr(this, s);
    }
    return this;
  };
  Ke.prototype.removeAllListeners = function (e) {
    var t;
    return (
      e
        ? ((t = $e ? $e + e : e), this._events[t] && Lr(this, t))
        : ((this._events = new Cn()), (this._eventsCount = 0)),
      this
    );
  };
  Ke.prototype.off = Ke.prototype.removeListener;
  Ke.prototype.addListener = Ke.prototype.on;
  Ke.prefixed = $e;
  Ke.EventEmitter = Ke;
  typeof Zo < "u" && (Zo.exports = Ke);
});
var Br,
  pa = ae(() => {
    "use strict";
    Br = lt(_a(), 1);
  });
function Ra(r, e) {
  return new Jh(r, e);
}
var ma,
  Jh,
  Qh,
  ba,
  Ea = ae(() => {
    "use strict";
    ma = lt(oo(), 1);
    pa();
    Jh = class extends Br.default {
      socket;
      constructor(r, e, t) {
        super(),
          (this.socket = new window.WebSocket(r, t)),
          (this.socket.onopen = () => this.emit("open")),
          (this.socket.onmessage = (n) => this.emit("message", n.data)),
          (this.socket.onerror = (n) => this.emit("error", n)),
          (this.socket.onclose = (n) => {
            this.emit("close", n.code, n.reason);
          });
      }
      send(r, e, t) {
        let n = t || e;
        try {
          this.socket.send(r), n();
        } catch (o) {
          n(o);
        }
      }
      close(r, e) {
        this.socket.close(r, e);
      }
      addEventListener(r, e, t) {
        this.socket.addEventListener(r, e, t);
      }
    };
    (Qh = class {
      encode(r) {
        return JSON.stringify(r);
      }
      decode(r) {
        return JSON.parse(r);
      }
    }),
      (ba = class extends Br.default {
        address;
        rpc_id;
        queue;
        options;
        autoconnect;
        ready;
        reconnect;
        reconnect_timer_id;
        reconnect_interval;
        max_reconnects;
        rest_options;
        current_reconnects;
        generate_request_id;
        socket;
        webSocketFactory;
        dataPack;
        constructor(r, e = "ws://localhost:8080", u = {}, c, a) {
          var l = u,
            {
              autoconnect: t = !0,
              reconnect: n = !0,
              reconnect_interval: o = 1e3,
              max_reconnects: s = 5,
            } = l,
            i = et(l, [
              "autoconnect",
              "reconnect",
              "reconnect_interval",
              "max_reconnects",
            ]);
          super(),
            (this.webSocketFactory = r),
            (this.queue = {}),
            (this.rpc_id = 0),
            (this.address = e),
            (this.autoconnect = t),
            (this.ready = !1),
            (this.reconnect = n),
            (this.reconnect_timer_id = void 0),
            (this.reconnect_interval = o),
            (this.max_reconnects = s),
            (this.rest_options = i),
            (this.current_reconnects = 0),
            (this.generate_request_id =
              c ||
              (() =>
                typeof this.rpc_id == "number"
                  ? ++this.rpc_id
                  : Number(this.rpc_id) + 1)),
            a ? (this.dataPack = a) : (this.dataPack = new Qh()),
            this.autoconnect &&
              this._connect(
                this.address,
                K(
                  {
                    autoconnect: this.autoconnect,
                    reconnect: this.reconnect,
                    reconnect_interval: this.reconnect_interval,
                    max_reconnects: this.max_reconnects,
                  },
                  this.rest_options
                )
              );
        }
        connect() {
          this.socket ||
            this._connect(
              this.address,
              K(
                {
                  autoconnect: this.autoconnect,
                  reconnect: this.reconnect,
                  reconnect_interval: this.reconnect_interval,
                  max_reconnects: this.max_reconnects,
                },
                this.rest_options
              )
            );
        }
        call(r, e, t, n) {
          return (
            !n && typeof t == "object" && ((n = t), (t = null)),
            new Promise((o, s) => {
              if (!this.ready) return s(new Error("socket not ready"));
              let i = this.generate_request_id(r, e),
                c = { jsonrpc: "2.0", method: r, params: e || void 0, id: i };
              this.socket.send(this.dataPack.encode(c), n, (a) => {
                if (a) return s(a);
                (this.queue[i] = { promise: [o, s] }),
                  t &&
                    (this.queue[i].timeout = setTimeout(() => {
                      delete this.queue[i], s(new Error("reply timeout"));
                    }, t));
              });
            })
          );
        }
        login(r) {
          return A(this, null, function* () {
            let e = yield this.call("rpc.login", r);
            if (!e) throw new Error("authentication failed");
            return e;
          });
        }
        listMethods() {
          return A(this, null, function* () {
            return yield this.call("__listMethods");
          });
        }
        notify(r, e) {
          return new Promise((t, n) => {
            if (!this.ready) return n(new Error("socket not ready"));
            let o = { jsonrpc: "2.0", method: r, params: e };
            this.socket.send(this.dataPack.encode(o), (s) => {
              if (s) return n(s);
              t();
            });
          });
        }
        subscribe(r) {
          return A(this, null, function* () {
            typeof r == "string" && (r = [r]);
            let e = yield this.call("rpc.on", r);
            if (typeof r == "string" && e[r] !== "ok")
              throw new Error(
                "Failed subscribing to an event '" + r + "' with: " + e[r]
              );
            return e;
          });
        }
        unsubscribe(r) {
          return A(this, null, function* () {
            typeof r == "string" && (r = [r]);
            let e = yield this.call("rpc.off", r);
            if (typeof r == "string" && e[r] !== "ok")
              throw new Error("Failed unsubscribing from an event with: " + e);
            return e;
          });
        }
        close(r, e) {
          this.socket.close(r || 1e3, e);
        }
        setAutoReconnect(r) {
          this.reconnect = r;
        }
        setReconnectInterval(r) {
          this.reconnect_interval = r;
        }
        setMaxReconnects(r) {
          this.max_reconnects = r;
        }
        _connect(r, e) {
          clearTimeout(this.reconnect_timer_id),
            (this.socket = this.webSocketFactory(r, e)),
            this.socket.addEventListener("open", () => {
              (this.ready = !0),
                this.emit("open"),
                (this.current_reconnects = 0);
            }),
            this.socket.addEventListener("message", ({ data: t }) => {
              t instanceof ArrayBuffer && (t = ma.Buffer.from(t).toString());
              try {
                t = this.dataPack.decode(t);
              } catch {
                return;
              }
              if (t.notification && this.listeners(t.notification).length) {
                if (!Object.keys(t.params).length)
                  return this.emit(t.notification);
                let n = [t.notification];
                if (t.params.constructor === Object) n.push(t.params);
                else
                  for (let o = 0; o < t.params.length; o++) n.push(t.params[o]);
                return Promise.resolve().then(() => {
                  this.emit.apply(this, n);
                });
              }
              if (!this.queue[t.id])
                return t.method
                  ? Promise.resolve().then(() => {
                      this.emit(t.method, t?.params);
                    })
                  : void 0;
              "error" in t == "result" in t &&
                this.queue[t.id].promise[1](
                  new Error(
                    'Server response malformed. Response must include either "result" or "error", but not both.'
                  )
                ),
                this.queue[t.id].timeout &&
                  clearTimeout(this.queue[t.id].timeout),
                t.error
                  ? this.queue[t.id].promise[1](t.error)
                  : this.queue[t.id].promise[0](t.result),
                delete this.queue[t.id];
            }),
            this.socket.addEventListener("error", (t) => this.emit("error", t)),
            this.socket.addEventListener("close", ({ code: t, reason: n }) => {
              this.ready && setTimeout(() => this.emit("close", t, n), 0),
                (this.ready = !1),
                (this.socket = void 0),
                t !== 1e3 &&
                  (this.current_reconnects++,
                  this.reconnect &&
                    (this.max_reconnects > this.current_reconnects ||
                      this.max_reconnects === 0) &&
                    (this.reconnect_timer_id = setTimeout(
                      () => this._connect(r, e),
                      this.reconnect_interval
                    )));
            });
        }
      });
  });
function ey(r, e, t) {
  let [[n, o], [s, i]] = e,
    c = Sa(i * r, t),
    a = Sa(-o * r, t),
    u = r - c * n - a * s,
    l = -c * o - a * i,
    _ = u < mt,
    y = l < mt;
  _ && (u = -u), y && (l = -l);
  let d = St(Math.ceil(Hn(t) / 2)) + fn;
  if (u < mt || u >= d || l < mt || l >= d)
    throw new Error("splitScalar (endomorphism): failed, k=" + r);
  return { k1neg: _, k1: u, k2neg: y, k2: l };
}
function Qo(r) {
  if (!["compact", "recovered", "der"].includes(r))
    throw new Error(
      'Signature format must be "compact", "recovered", or "der"'
    );
  return r;
}
function Jo(r, e) {
  let t = {};
  for (let n of Object.keys(e)) t[n] = r[n] === void 0 ? e[n] : r[n];
  return (
    ht(t.lowS, "lowS"),
    ht(t.prehash, "prehash"),
    t.format !== void 0 && Qo(t.format),
    t
  );
}
function un(r, e) {
  let { BYTES: t } = r,
    n;
  if (typeof e == "bigint") n = e;
  else {
    let o = _e("private key", e);
    try {
      n = r.fromBytes(o);
    } catch {
      throw new Error(
        `invalid private key: expected ui8a of size ${t}, got ${typeof e}`
      );
    }
  }
  if (!r.isValidNot0(n))
    throw new Error("invalid private key: out of range [1..N-1]");
  return n;
}
function ny(r, e = {}) {
  let t = Xn("weierstrass", r, e),
    { Fp: n, Fn: o } = t,
    s = t.CURVE,
    { h: i, n: c } = s;
  At(
    e,
    {},
    {
      allowInfinityPoint: "boolean",
      clearCofactor: "function",
      isTorsionFree: "function",
      fromBytes: "function",
      toBytes: "function",
      endo: "object",
      wrapPrivateKey: "boolean",
    }
  );
  let { endo: a } = e;
  if (
    a &&
    (!n.is0(s.a) || typeof a.beta != "bigint" || !Array.isArray(a.basises))
  )
    throw new Error(
      'invalid endo: expected "beta": bigint and "basises": array'
    );
  let u = Ia(n, o);
  function l() {
    if (!n.isOdd)
      throw new Error(
        "compression is not supported: Field does not have .isOdd()"
      );
  }
  function _(q, w, E) {
    let { x: S, y: v } = w.toAffine(),
      P = n.toBytes(S);
    if ((ht(E, "isCompressed"), E)) {
      l();
      let V = !n.isOdd(v);
      return We(wa(V), P);
    } else return We(Uint8Array.of(4), P, n.toBytes(v));
  }
  function y(q) {
    Ye(q, void 0, "Point");
    let { publicKey: w, publicKeyUncompressed: E } = u,
      S = q.length,
      v = q[0],
      P = q.subarray(1);
    if (S === w && (v === 2 || v === 3)) {
      let V = n.fromBytes(P);
      if (!n.isValid(V)) throw new Error("bad point: is not on curve, wrong x");
      let z = p(V),
        M;
      try {
        M = n.sqrt(z);
      } catch (be) {
        let he = be instanceof Error ? ": " + be.message : "";
        throw new Error("bad point: is not on curve, sqrt error" + he);
      }
      l();
      let G = n.isOdd(M);
      return ((v & 1) === 1) !== G && (M = n.neg(M)), { x: V, y: M };
    } else if (S === E && v === 4) {
      let V = n.BYTES,
        z = n.fromBytes(P.subarray(0, V)),
        M = n.fromBytes(P.subarray(V, V * 2));
      if (!b(z, M)) throw new Error("bad point: is not on curve");
      return { x: z, y: M };
    } else
      throw new Error(
        `bad point: got length ${S}, expected compressed=${w} or uncompressed=${E}`
      );
  }
  let d = e.toBytes || _,
    h = e.fromBytes || y;
  function p(q) {
    let w = n.sqr(q),
      E = n.mul(w, q);
    return n.add(n.add(E, n.mul(q, s.a)), s.b);
  }
  function b(q, w) {
    let E = n.sqr(w),
      S = p(q);
    return n.eql(E, S);
  }
  if (!b(s.Gx, s.Gy)) throw new Error("bad curve params: generator point");
  let R = n.mul(n.pow(s.a, xr), ty),
    T = n.mul(n.sqr(s.b), BigInt(27));
  if (n.is0(n.add(R, T))) throw new Error("bad curve params: a or b");
  function N(q, w, E = !1) {
    if (!n.isValid(w) || (E && n.is0(w)))
      throw new Error(`bad point coordinate ${q}`);
    return w;
  }
  function D(q) {
    if (!(q instanceof O)) throw new Error("ProjectivePoint expected");
  }
  function J(q) {
    if (!a || !a.basises) throw new Error("no endo");
    return ey(q, a.basises, o.ORDER);
  }
  let ee = Jt((q, w) => {
      let { X: E, Y: S, Z: v } = q;
      if (n.eql(v, n.ONE)) return { x: E, y: S };
      let P = q.is0();
      w == null && (w = P ? n.ONE : n.inv(v));
      let V = n.mul(E, w),
        z = n.mul(S, w),
        M = n.mul(v, w);
      if (P) return { x: n.ZERO, y: n.ZERO };
      if (!n.eql(M, n.ONE)) throw new Error("invZ was invalid");
      return { x: V, y: z };
    }),
    te = Jt((q) => {
      if (q.is0()) {
        if (e.allowInfinityPoint && !n.is0(q.Y)) return;
        throw new Error("bad point: ZERO");
      }
      let { x: w, y: E } = q.toAffine();
      if (!n.isValid(w) || !n.isValid(E))
        throw new Error("bad point: x or y not field elements");
      if (!b(w, E)) throw new Error("bad point: equation left != right");
      if (!q.isTorsionFree())
        throw new Error("bad point: not in prime-order subgroup");
      return !0;
    });
  function ne(q, w, E, S, v) {
    return (
      (E = new O(n.mul(E.X, q), E.Y, E.Z)),
      (w = Sn(S, w)),
      (E = Sn(v, E)),
      w.add(E)
    );
  }
  class O {
    constructor(w, E, S) {
      (this.X = N("x", w)),
        (this.Y = N("y", E, !0)),
        (this.Z = N("z", S)),
        Object.freeze(this);
    }
    static CURVE() {
      return s;
    }
    static fromAffine(w) {
      let { x: E, y: S } = w || {};
      if (!w || !n.isValid(E) || !n.isValid(S))
        throw new Error("invalid affine point");
      if (w instanceof O) throw new Error("projective point not allowed");
      return n.is0(E) && n.is0(S) ? O.ZERO : new O(E, S, n.ONE);
    }
    static fromBytes(w) {
      let E = O.fromAffine(h(Ye(w, void 0, "point")));
      return E.assertValidity(), E;
    }
    static fromHex(w) {
      return O.fromBytes(_e("pointHex", w));
    }
    get x() {
      return this.toAffine().x;
    }
    get y() {
      return this.toAffine().y;
    }
    precompute(w = 8, E = !0) {
      return j.createCache(this, w), E || this.multiply(xr), this;
    }
    assertValidity() {
      te(this);
    }
    hasEvenY() {
      let { y: w } = this.toAffine();
      if (!n.isOdd) throw new Error("Field doesn't support isOdd");
      return !n.isOdd(w);
    }
    equals(w) {
      D(w);
      let { X: E, Y: S, Z: v } = this,
        { X: P, Y: V, Z: z } = w,
        M = n.eql(n.mul(E, z), n.mul(P, v)),
        G = n.eql(n.mul(S, z), n.mul(V, v));
      return M && G;
    }
    negate() {
      return new O(this.X, n.neg(this.Y), this.Z);
    }
    double() {
      let { a: w, b: E } = s,
        S = n.mul(E, xr),
        { X: v, Y: P, Z: V } = this,
        z = n.ZERO,
        M = n.ZERO,
        G = n.ZERO,
        Y = n.mul(v, v),
        be = n.mul(P, P),
        he = n.mul(V, V),
        oe = n.mul(v, P);
      return (
        (oe = n.add(oe, oe)),
        (G = n.mul(v, V)),
        (G = n.add(G, G)),
        (z = n.mul(w, G)),
        (M = n.mul(S, he)),
        (M = n.add(z, M)),
        (z = n.sub(be, M)),
        (M = n.add(be, M)),
        (M = n.mul(z, M)),
        (z = n.mul(oe, z)),
        (G = n.mul(S, G)),
        (he = n.mul(w, he)),
        (oe = n.sub(Y, he)),
        (oe = n.mul(w, oe)),
        (oe = n.add(oe, G)),
        (G = n.add(Y, Y)),
        (Y = n.add(G, Y)),
        (Y = n.add(Y, he)),
        (Y = n.mul(Y, oe)),
        (M = n.add(M, Y)),
        (he = n.mul(P, V)),
        (he = n.add(he, he)),
        (Y = n.mul(he, oe)),
        (z = n.sub(z, Y)),
        (G = n.mul(he, be)),
        (G = n.add(G, G)),
        (G = n.add(G, G)),
        new O(z, M, G)
      );
    }
    add(w) {
      D(w);
      let { X: E, Y: S, Z: v } = this,
        { X: P, Y: V, Z: z } = w,
        M = n.ZERO,
        G = n.ZERO,
        Y = n.ZERO,
        be = s.a,
        he = n.mul(s.b, xr),
        oe = n.mul(E, P),
        Ee = n.mul(S, V),
        Ie = n.mul(v, z),
        qe = n.add(E, S),
        Se = n.add(P, V);
      (qe = n.mul(qe, Se)),
        (Se = n.add(oe, Ee)),
        (qe = n.sub(qe, Se)),
        (Se = n.add(E, v));
      let xe = n.add(P, z);
      return (
        (Se = n.mul(Se, xe)),
        (xe = n.add(oe, Ie)),
        (Se = n.sub(Se, xe)),
        (xe = n.add(S, v)),
        (M = n.add(V, z)),
        (xe = n.mul(xe, M)),
        (M = n.add(Ee, Ie)),
        (xe = n.sub(xe, M)),
        (Y = n.mul(be, Se)),
        (M = n.mul(he, Ie)),
        (Y = n.add(M, Y)),
        (M = n.sub(Ee, Y)),
        (Y = n.add(Ee, Y)),
        (G = n.mul(M, Y)),
        (Ee = n.add(oe, oe)),
        (Ee = n.add(Ee, oe)),
        (Ie = n.mul(be, Ie)),
        (Se = n.mul(he, Se)),
        (Ee = n.add(Ee, Ie)),
        (Ie = n.sub(oe, Ie)),
        (Ie = n.mul(be, Ie)),
        (Se = n.add(Se, Ie)),
        (oe = n.mul(Ee, Se)),
        (G = n.add(G, oe)),
        (oe = n.mul(xe, Se)),
        (M = n.mul(qe, M)),
        (M = n.sub(M, oe)),
        (oe = n.mul(qe, Ee)),
        (Y = n.mul(xe, Y)),
        (Y = n.add(Y, oe)),
        new O(M, G, Y)
      );
    }
    subtract(w) {
      return this.add(w.negate());
    }
    is0() {
      return this.equals(O.ZERO);
    }
    multiply(w) {
      let { endo: E } = e;
      if (!o.isValidNot0(w)) throw new Error("invalid scalar: out of range");
      let S,
        v,
        P = (V) => j.cached(this, V, (z) => yt(O, z));
      if (E) {
        let { k1neg: V, k1: z, k2neg: M, k2: G } = J(w),
          { p: Y, f: be } = P(z),
          { p: he, f: oe } = P(G);
        (v = be.add(oe)), (S = ne(E.beta, Y, he, V, M));
      } else {
        let { p: V, f: z } = P(w);
        (S = V), (v = z);
      }
      return yt(O, [S, v])[0];
    }
    multiplyUnsafe(w) {
      let { endo: E } = e,
        S = this;
      if (!o.isValid(w)) throw new Error("invalid scalar: out of range");
      if (w === mt || S.is0()) return O.ZERO;
      if (w === fn) return S;
      if (j.hasCache(this)) return this.multiply(w);
      if (E) {
        let { k1neg: v, k1: P, k2neg: V, k2: z } = J(w),
          { p1: M, p2: G } = ci(O, S, P, z);
        return ne(E.beta, M, G, v, V);
      } else return j.unsafe(S, w);
    }
    multiplyAndAddUnsafe(w, E, S) {
      let v = this.multiplyUnsafe(E).add(w.multiplyUnsafe(S));
      return v.is0() ? void 0 : v;
    }
    toAffine(w) {
      return ee(this, w);
    }
    isTorsionFree() {
      let { isTorsionFree: w } = e;
      return i === fn ? !0 : w ? w(O, this) : j.unsafe(this, c).is0();
    }
    clearCofactor() {
      let { clearCofactor: w } = e;
      return i === fn ? this : w ? w(O, this) : this.multiplyUnsafe(i);
    }
    isSmallOrder() {
      return this.multiplyUnsafe(i).is0();
    }
    toBytes(w = !0) {
      return ht(w, "isCompressed"), this.assertValidity(), d(O, this, w);
    }
    toHex(w = !0) {
      return tt(this.toBytes(w));
    }
    toString() {
      return `<Point ${this.is0() ? "ZERO" : this.toHex()}>`;
    }
    get px() {
      return this.X;
    }
    get py() {
      return this.X;
    }
    get pz() {
      return this.Z;
    }
    toRawBytes(w = !0) {
      return this.toBytes(w);
    }
    _setWindowSize(w) {
      this.precompute(w);
    }
    static normalizeZ(w) {
      return yt(O, w);
    }
    static msm(w, E) {
      return Yn(O, o, w, E);
    }
    static fromPrivateKey(w) {
      return O.BASE.multiply(un(o, w));
    }
  }
  (O.BASE = new O(s.Gx, s.Gy, n.ONE)),
    (O.ZERO = new O(n.ZERO, n.ONE, n.ZERO)),
    (O.Fp = n),
    (O.Fn = o);
  let $ = o.BITS,
    j = new tn(O, e.endo ? Math.ceil($ / 2) : $);
  return O.BASE.precompute(8), O;
}
function wa(r) {
  return Uint8Array.of(r ? 2 : 3);
}
function Ia(r, e) {
  return {
    secretKey: e.BYTES,
    publicKey: 1 + r.BYTES,
    publicKeyUncompressed: 1 + 2 * r.BYTES,
    publicKeyHasPrefix: !0,
    signature: 2 * e.BYTES,
  };
}
function ry(r, e = {}) {
  let { Fn: t } = r,
    n = e.randomBytes || Xt,
    o = Object.assign(Ia(r.Fp, t), { seed: ho(t.ORDER) });
  function s(d) {
    try {
      return !!un(t, d);
    } catch {
      return !1;
    }
  }
  function i(d, h) {
    let { publicKey: p, publicKeyUncompressed: b } = o;
    try {
      let R = d.length;
      return (h === !0 && R !== p) || (h === !1 && R !== b)
        ? !1
        : !!r.fromBytes(d);
    } catch {
      return !1;
    }
  }
  function c(d = n(o.seed)) {
    return yo(Ye(d, o.seed, "seed"), t.ORDER);
  }
  function a(d, h = !0) {
    return r.BASE.multiply(un(t, d)).toBytes(h);
  }
  function u(d) {
    let h = c(d);
    return { secretKey: h, publicKey: a(h) };
  }
  function l(d) {
    if (typeof d == "bigint") return !1;
    if (d instanceof r) return !0;
    let { secretKey: h, publicKey: p, publicKeyUncompressed: b } = o;
    if (t.allowedLengths || h === p) return;
    let R = _e("key", d).length;
    return R === p || R === b;
  }
  function _(d, h, p = !0) {
    if (l(d) === !0) throw new Error("first arg must be private key");
    if (l(h) === !1) throw new Error("second arg must be public key");
    let b = un(t, d);
    return r.fromHex(h).multiply(b).toBytes(p);
  }
  return Object.freeze({
    getPublicKey: a,
    getSharedSecret: _,
    keygen: u,
    Point: r,
    utils: {
      isValidSecretKey: s,
      isValidPublicKey: i,
      randomSecretKey: c,
      isValidPrivateKey: s,
      randomPrivateKey: c,
      normPrivateKeyToScalar: (d) => un(t, d),
      precompute(d = 8, h = r.BASE) {
        return h.precompute(d, !1);
      },
    },
    lengths: o,
  });
}
function oy(r, e, t = {}) {
  Us(e),
    At(
      t,
      {},
      {
        hmac: "function",
        lowS: "boolean",
        randomBytes: "function",
        bits2int: "function",
        bits2int_modN: "function",
      }
    );
  let n = t.randomBytes || Xt,
    o = t.hmac || ((E, ...S) => Fs(e, E, We(...S))),
    { Fp: s, Fn: i } = r,
    { ORDER: c, BITS: a } = i,
    {
      keygen: u,
      getPublicKey: l,
      getSharedSecret: _,
      utils: y,
      lengths: d,
    } = ry(r, t),
    h = {
      prehash: !1,
      lowS: typeof t.lowS == "boolean" ? t.lowS : !1,
      format: void 0,
      extraEntropy: !1,
    },
    p = "compact";
  function b(E) {
    let S = c >> fn;
    return E > S;
  }
  function R(E, S) {
    if (!i.isValidNot0(S))
      throw new Error(`invalid signature ${E}: out of range 1..Point.Fn.ORDER`);
    return S;
  }
  function T(E, S) {
    Qo(S);
    let v = d.signature,
      P = S === "compact" ? v : S === "recovered" ? v + 1 : void 0;
    return Ye(E, P, `${S} signature`);
  }
  class N {
    constructor(S, v, P) {
      (this.r = R("r", S)),
        (this.s = R("s", v)),
        P != null && (this.recovery = P),
        Object.freeze(this);
    }
    static fromBytes(S, v = p) {
      T(S, v);
      let P;
      if (v === "der") {
        let { r: G, s: Y } = pt.toSig(Ye(S));
        return new N(G, Y);
      }
      v === "recovered" && ((P = S[0]), (v = "compact"), (S = S.subarray(1)));
      let V = i.BYTES,
        z = S.subarray(0, V),
        M = S.subarray(V, V * 2);
      return new N(i.fromBytes(z), i.fromBytes(M), P);
    }
    static fromHex(S, v) {
      return this.fromBytes(Ct(S), v);
    }
    addRecoveryBit(S) {
      return new N(this.r, this.s, S);
    }
    recoverPublicKey(S) {
      let v = s.ORDER,
        { r: P, s: V, recovery: z } = this;
      if (z == null || ![0, 1, 2, 3].includes(z))
        throw new Error("recovery id invalid");
      if (c * Aa < v && z > 1)
        throw new Error("recovery id is ambiguous for h>1 curve");
      let G = z === 2 || z === 3 ? P + c : P;
      if (!s.isValid(G)) throw new Error("recovery id 2 or 3 invalid");
      let Y = s.toBytes(G),
        be = r.fromBytes(We(wa((z & 1) === 0), Y)),
        he = i.inv(G),
        oe = J(_e("msgHash", S)),
        Ee = i.create(-oe * he),
        Ie = i.create(V * he),
        qe = r.BASE.multiplyUnsafe(Ee).add(be.multiplyUnsafe(Ie));
      if (qe.is0()) throw new Error("point at infinify");
      return qe.assertValidity(), qe;
    }
    hasHighS() {
      return b(this.s);
    }
    toBytes(S = p) {
      if ((Qo(S), S === "der")) return Ct(pt.hexFromSig(this));
      let v = i.toBytes(this.r),
        P = i.toBytes(this.s);
      if (S === "recovered") {
        if (this.recovery == null)
          throw new Error("recovery bit must be present");
        return We(Uint8Array.of(this.recovery), v, P);
      }
      return We(v, P);
    }
    toHex(S) {
      return tt(this.toBytes(S));
    }
    assertValidity() {}
    static fromCompact(S) {
      return N.fromBytes(_e("sig", S), "compact");
    }
    static fromDER(S) {
      return N.fromBytes(_e("sig", S), "der");
    }
    normalizeS() {
      return this.hasHighS()
        ? new N(this.r, i.neg(this.s), this.recovery)
        : this;
    }
    toDERRawBytes() {
      return this.toBytes("der");
    }
    toDERHex() {
      return tt(this.toBytes("der"));
    }
    toCompactRawBytes() {
      return this.toBytes("compact");
    }
    toCompactHex() {
      return tt(this.toBytes("compact"));
    }
  }
  let D =
      t.bits2int ||
      function (S) {
        if (S.length > 8192) throw new Error("input is too large");
        let v = Zt(S),
          P = S.length * 8 - a;
        return P > 0 ? v >> BigInt(P) : v;
      },
    J =
      t.bits2int_modN ||
      function (S) {
        return i.create(D(S));
      },
    ee = St(a);
  function te(E) {
    return Rn("num < 2^" + a, E, mt, ee), i.toBytes(E);
  }
  function ne(E, S) {
    return (
      Ye(E, void 0, "message"), S ? Ye(e(E), void 0, "prehashed message") : E
    );
  }
  function O(E, S, v) {
    if (["recovered", "canonical"].some((Ee) => Ee in v))
      throw new Error("sign() legacy options not supported");
    let { lowS: P, prehash: V, extraEntropy: z } = Jo(v, h);
    E = ne(E, V);
    let M = J(E),
      G = un(i, S),
      Y = [te(G), te(M)];
    if (z != null && z !== !1) {
      let Ee = z === !0 ? n(d.secretKey) : z;
      Y.push(_e("extraEntropy", Ee));
    }
    let be = We(...Y),
      he = M;
    function oe(Ee) {
      let Ie = D(Ee);
      if (!i.isValidNot0(Ie)) return;
      let qe = i.inv(Ie),
        Se = r.BASE.multiply(Ie).toAffine(),
        xe = i.create(Se.x);
      if (xe === mt) return;
      let Wn = i.create(qe * i.create(he + xe * G));
      if (Wn === mt) return;
      let Ps = (Se.x === xe ? 0 : 2) | Number(Se.y & fn),
        Ds = Wn;
      return P && b(Wn) && ((Ds = i.neg(Wn)), (Ps ^= 1)), new N(xe, Ds, Ps);
    }
    return { seed: be, k2sig: oe };
  }
  function $(E, S, v = {}) {
    E = _e("message", E);
    let { seed: P, k2sig: V } = O(E, S, v);
    return Ws(e.outputLen, i.BYTES, o)(P, V);
  }
  function j(E) {
    let S,
      v = typeof E == "string" || Et(E),
      P =
        !v &&
        E !== null &&
        typeof E == "object" &&
        typeof E.r == "bigint" &&
        typeof E.s == "bigint";
    if (!v && !P)
      throw new Error(
        "invalid signature, expected Uint8Array, hex string or Signature instance"
      );
    if (P) S = new N(E.r, E.s);
    else if (v) {
      try {
        S = N.fromBytes(_e("sig", E), "der");
      } catch (V) {
        if (!(V instanceof pt.Err)) throw V;
      }
      if (!S)
        try {
          S = N.fromBytes(_e("sig", E), "compact");
        } catch {
          return !1;
        }
    }
    return S || !1;
  }
  function q(E, S, v, P = {}) {
    let { lowS: V, prehash: z, format: M } = Jo(P, h);
    if (
      ((v = _e("publicKey", v)), (S = ne(_e("message", S), z)), "strict" in P)
    )
      throw new Error("options.strict was renamed to lowS");
    let G = M === void 0 ? j(E) : N.fromBytes(_e("sig", E), M);
    if (G === !1) return !1;
    try {
      let Y = r.fromBytes(v);
      if (V && G.hasHighS()) return !1;
      let { r: be, s: he } = G,
        oe = J(S),
        Ee = i.inv(he),
        Ie = i.create(oe * Ee),
        qe = i.create(be * Ee),
        Se = r.BASE.multiplyUnsafe(Ie).add(Y.multiplyUnsafe(qe));
      return Se.is0() ? !1 : i.create(Se.x) === be;
    } catch {
      return !1;
    }
  }
  function w(E, S, v = {}) {
    let { prehash: P } = Jo(v, h);
    return (
      (S = ne(S, P)), N.fromBytes(E, "recovered").recoverPublicKey(S).toBytes()
    );
  }
  return Object.freeze({
    keygen: u,
    getPublicKey: l,
    getSharedSecret: _,
    utils: y,
    lengths: d,
    Point: r,
    sign: $,
    verify: q,
    recoverPublicKey: w,
    Signature: N,
    hash: e,
  });
}
function sy(r) {
  let e = { a: r.a, b: r.b, p: r.Fp.ORDER, n: r.n, h: r.h, Gx: r.Gx, Gy: r.Gy },
    t = r.Fp,
    n = r.allowedPrivateKeyLengths
      ? Array.from(
          new Set(r.allowedPrivateKeyLengths.map((i) => Math.ceil(i / 2)))
        )
      : void 0,
    o = Je(e.n, {
      BITS: r.nBitLength,
      allowedLengths: n,
      modFromBytes: r.wrapPrivateKey,
    }),
    s = {
      Fp: t,
      Fn: o,
      allowInfinityPoint: r.allowInfinityPoint,
      endo: r.endo,
      isTorsionFree: r.isTorsionFree,
      clearCofactor: r.clearCofactor,
      fromBytes: r.fromBytes,
      toBytes: r.toBytes,
    };
  return { CURVE: e, curveOpts: s };
}
function iy(r) {
  let { CURVE: e, curveOpts: t } = sy(r),
    n = {
      hmac: r.hmac,
      randomBytes: r.randomBytes,
      lowS: r.lowS,
      bits2int: r.bits2int,
      bits2int_modN: r.bits2int_modN,
    };
  return { CURVE: e, curveOpts: t, hash: r.hash, ecdsaOpts: n };
}
function ay(r, e) {
  let t = e.Point;
  return Object.assign({}, e, {
    ProjectivePoint: t,
    CURVE: Object.assign({}, r, jn(t.Fn.ORDER, t.Fn.BITS)),
  });
}
function Oa(r) {
  let { CURVE: e, curveOpts: t, hash: n, ecdsaOpts: o } = iy(r),
    s = ny(e, t),
    i = oy(s, n, o);
  return ay(r, i);
}
var Sa,
  es,
  pt,
  mt,
  fn,
  Aa,
  xr,
  ty,
  Na = ae(() => {
    "use strict";
    bc();
    to();
    bn();
    mo();
    Qt();
    Sa = (r, e) => (r + (r >= 0 ? e : -e) / Aa) / e;
    (es = class extends Error {
      constructor(e = "") {
        super(e);
      }
    }),
      (pt = {
        Err: es,
        _tlv: {
          encode: (r, e) => {
            let { Err: t } = pt;
            if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
            if (e.length & 1) throw new t("tlv.encode: unpadded data");
            let n = e.length / 2,
              o = mn(n);
            if ((o.length / 2) & 128)
              throw new t("tlv.encode: long form length too big");
            let s = n > 127 ? mn((o.length / 2) | 128) : "";
            return mn(r) + s + o + e;
          },
          decode(r, e) {
            let { Err: t } = pt,
              n = 0;
            if (r < 0 || r > 256) throw new t("tlv.encode: wrong tag");
            if (e.length < 2 || e[n++] !== r)
              throw new t("tlv.decode: wrong tlv");
            let o = e[n++],
              s = !!(o & 128),
              i = 0;
            if (!s) i = o;
            else {
              let a = o & 127;
              if (!a)
                throw new t(
                  "tlv.decode(long): indefinite length not supported"
                );
              if (a > 4)
                throw new t("tlv.decode(long): byte length is too big");
              let u = e.subarray(n, n + a);
              if (u.length !== a)
                throw new t("tlv.decode: length bytes not complete");
              if (u[0] === 0)
                throw new t("tlv.decode(long): zero leftmost byte");
              for (let l of u) i = (i << 8) | l;
              if (((n += a), i < 128))
                throw new t("tlv.decode(long): not minimal encoding");
            }
            let c = e.subarray(n, n + i);
            if (c.length !== i) throw new t("tlv.decode: wrong value length");
            return { v: c, l: e.subarray(n + i) };
          },
        },
        _int: {
          encode(r) {
            let { Err: e } = pt;
            if (r < mt)
              throw new e("integer: negative integers are not allowed");
            let t = mn(r);
            if ((Number.parseInt(t[0], 16) & 8 && (t = "00" + t), t.length & 1))
              throw new e("unexpected DER parsing assertion: unpadded hex");
            return t;
          },
          decode(r) {
            let { Err: e } = pt;
            if (r[0] & 128) throw new e("invalid signature integer: negative");
            if (r[0] === 0 && !(r[1] & 128))
              throw new e(
                "invalid signature integer: unnecessary leading zero"
              );
            return Zt(r);
          },
        },
        toSig(r) {
          let { Err: e, _int: t, _tlv: n } = pt,
            o = _e("signature", r),
            { v: s, l: i } = n.decode(48, o);
          if (i.length)
            throw new e("invalid signature: left bytes after parsing");
          let { v: c, l: a } = n.decode(2, s),
            { v: u, l } = n.decode(2, a);
          if (l.length)
            throw new e("invalid signature: left bytes after parsing");
          return { r: t.decode(c), s: t.decode(u) };
        },
        hexFromSig(r) {
          let { _tlv: e, _int: t } = pt,
            n = e.encode(2, t.encode(r.r)),
            o = e.encode(2, t.encode(r.s)),
            s = n + o;
          return e.encode(48, s);
        },
      }),
      (mt = BigInt(0)),
      (fn = BigInt(1)),
      (Aa = BigInt(2)),
      (xr = BigInt(3)),
      (ty = BigInt(4));
  });
function ka(r, e) {
  let t = (n) => Oa(H(K({}, r), { hash: n }));
  return H(K({}, t(e)), { create: t });
}
var Ta = ae(() => {
  "use strict";
  Na();
});
function uy(r) {
  let e = ns.p,
    t = BigInt(3),
    n = BigInt(6),
    o = BigInt(11),
    s = BigInt(22),
    i = BigInt(23),
    c = BigInt(44),
    a = BigInt(88),
    u = (r * r * r) % e,
    l = (u * u * r) % e,
    _ = (pe(l, t, e) * l) % e,
    y = (pe(_, t, e) * l) % e,
    d = (pe(y, va, e) * u) % e,
    h = (pe(d, o, e) * d) % e,
    p = (pe(h, s, e) * h) % e,
    b = (pe(p, c, e) * p) % e,
    R = (pe(b, a, e) * b) % e,
    T = (pe(R, c, e) * p) % e,
    N = (pe(T, t, e) * l) % e,
    D = (pe(N, i, e) * h) % e,
    J = (pe(D, n, e) * u) % e,
    ee = pe(J, va, e);
  if (!ts.eql(ts.sqr(ee), r)) throw new Error("Cannot find square root");
  return ee;
}
var ns,
  cy,
  va,
  ts,
  Cr,
  La = ae(() => {
    "use strict";
    Ks();
    Ta();
    Qt();
    (ns = {
      p: BigInt(
        "0xfffffffffffffffffffffffffffffffffffffffffffffffffffffffefffffc2f"
      ),
      n: BigInt(
        "0xfffffffffffffffffffffffffffffffebaaedce6af48a03bbfd25e8cd0364141"
      ),
      h: BigInt(1),
      a: BigInt(0),
      b: BigInt(7),
      Gx: BigInt(
        "0x79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798"
      ),
      Gy: BigInt(
        "0x483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8"
      ),
    }),
      (cy = {
        beta: BigInt(
          "0x7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee"
        ),
        basises: [
          [
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
            -BigInt("0xe4437ed6010e88286f547fa90abfe4c3"),
          ],
          [
            BigInt("0x114ca50f7a8e2f3f657c1108d9d44cfd8"),
            BigInt("0x3086d221a7d46bcde86c90e49284eb15"),
          ],
        ],
      }),
      (va = BigInt(2));
    (ts = Je(ns.p, { sqrt: uy })),
      (Cr = ka(H(K({}, ns), { Fp: ts, lowS: !0, endo: cy }), zs));
  });
var g_ = {};
Zr(g_, {
  Account: () => ds,
  AddressLookupTableAccount: () => Fn,
  AddressLookupTableInstruction: () => ws,
  AddressLookupTableProgram: () => $n,
  Authorized: () => Gr,
  BLOCKHASH_CACHE_TIMEOUT_MS: () => ic,
  BPF_LOADER_DEPRECATED_PROGRAM_ID: () => hy,
  BPF_LOADER_PROGRAM_ID: () => vy,
  BpfLoader: () => ms,
  COMPUTE_BUDGET_INSTRUCTION_LAYOUTS: () => ct,
  ComputeBudgetInstruction: () => Is,
  ComputeBudgetProgram: () => qn,
  Connection: () => As,
  Ed25519Program: () => qr,
  Enum: () => fs,
  EpochSchedule: () => Fr,
  FeeCalculatorLayout: () => rc,
  Keypair: () => $r,
  LAMPORTS_PER_SOL: () => y_,
  LOOKUP_TABLE_INSTRUCTION_LAYOUTS: () => bt,
  Loader: () => ps,
  Lockup: () => Ht,
  MAX_SEED_LENGTH: () => Qa,
  Message: () => dt,
  MessageAccountKeys: () => Wt,
  MessageV0: () => dn,
  NONCE_ACCOUNT_LENGTH: () => gs,
  NonceAccount: () => Kr,
  PACKET_DATA_SIZE: () => Bt,
  PUBLIC_KEY_LENGTH: () => ft,
  PublicKey: () => B,
  SIGNATURE_LENGTH_IN_BYTES: () => zn,
  SOLANA_SCHEMA: () => Dn,
  STAKE_CONFIG_ID: () => pc,
  STAKE_INSTRUCTION_LAYOUTS: () => ke,
  SYSTEM_INSTRUCTION_LAYOUTS: () => ge,
  SYSVAR_CLOCK_PUBKEY: () => it,
  SYSVAR_EPOCH_SCHEDULE_PUBKEY: () => Ay,
  SYSVAR_INSTRUCTIONS_PUBKEY: () => wy,
  SYSVAR_RECENT_BLOCKHASHES_PUBKEY: () => Dr,
  SYSVAR_RENT_PUBKEY: () => ln,
  SYSVAR_REWARDS_PUBKEY: () => Iy,
  SYSVAR_SLOT_HASHES_PUBKEY: () => Oy,
  SYSVAR_SLOT_HISTORY_PUBKEY: () => Ny,
  SYSVAR_STAKE_HISTORY_PUBKEY: () => Ur,
  Secp256k1Program: () => Wr,
  SendTransactionError: () => Gt,
  SolanaJSONRPCError: () => U,
  SolanaJSONRPCErrorCode: () => ky,
  StakeAuthorizationLayout: () => s_,
  StakeInstruction: () => Os,
  StakeProgram: () => yn,
  Struct: () => Un,
  SystemInstruction: () => _s,
  SystemProgram: () => Be,
  Transaction: () => fe,
  TransactionExpiredBlockheightExceededError: () => Mn,
  TransactionExpiredNonceInvalidError: () => Lt,
  TransactionExpiredTimeoutError: () => Kn,
  TransactionInstruction: () => de,
  TransactionMessage: () => ls,
  TransactionStatus: () => Rt,
  VALIDATOR_INFO_KEY: () => mc,
  VERSION_PREFIX_MASK: () => jr,
  VOTE_PROGRAM_ID: () => c_,
  ValidatorInfo: () => ks,
  VersionedMessage: () => Ls,
  VersionedTransaction: () => hs,
  VoteAccount: () => Ts,
  VoteAuthorizationLayout: () => i_,
  VoteInit: () => Hr,
  VoteInstruction: () => Ns,
  VoteProgram: () => gn,
  clusterApiUrl: () => l_,
  sendAndConfirmRawTransaction: () => h_,
  sendAndConfirmTransaction: () => ys,
});
function xa(r) {
  try {
    return zt.ExtendedPoint.fromHex(r), !0;
  } catch {
    return !1;
  }
}
function ly(r) {
  return r._bn !== void 0;
}
function ec(r, e) {
  let t = (o) => {
      if (o.span >= 0) return o.span;
      if (typeof o.alloc == "function") return o.alloc(e[o.property]);
      if ("count" in o && "elementLayout" in o) {
        let s = e[o.property];
        if (Array.isArray(s)) return s.length * t(o.elementLayout);
      } else if ("fields" in o) return ec({ layout: o }, e[o.property]);
      return 0;
    },
    n = 0;
  return (
    r.layout.fields.forEach((o) => {
      n += t(o);
    }),
    n
  );
}
function He(r) {
  let e = 0,
    t = 0;
  for (;;) {
    let n = r.shift();
    if (((e |= (n & 127) << (t * 7)), (t += 1), !(n & 128))) break;
  }
  return e;
}
function Ze(r, e) {
  let t = e;
  for (;;) {
    let n = t & 127;
    if (((t >>= 7), t == 0)) {
      r.push(n);
      break;
    } else (n |= 128), r.push(n);
  }
}
function ie(r, e) {
  if (!r) throw new Error(e || "Assertion failed");
}
function at(r) {
  if (r.length === 0) throw new Error(tc);
  return r.shift();
}
function je(r, ...e) {
  let [t] = e;
  if (e.length === 2 ? t + (e[1] ?? 0) > r.length : t >= r.length)
    throw new Error(tc);
  return r.splice(...e);
}
function ys(r, e, t, n) {
  return A(this, null, function* () {
    let o = n && {
        skipPreflight: n.skipPreflight,
        preflightCommitment: n.preflightCommitment || n.commitment,
        maxRetries: n.maxRetries,
        minContextSlot: n.minContextSlot,
      },
      s = yield r.sendTransaction(e, t, o),
      i;
    if (e.recentBlockhash != null && e.lastValidBlockHeight != null)
      i = (yield r.confirmTransaction(
        {
          abortSignal: n?.abortSignal,
          signature: s,
          blockhash: e.recentBlockhash,
          lastValidBlockHeight: e.lastValidBlockHeight,
        },
        n && n.commitment
      )).value;
    else if (e.minNonceContextSlot != null && e.nonceInfo != null) {
      let { nonceInstruction: c } = e.nonceInfo,
        a = c.keys[0].pubkey;
      i = (yield r.confirmTransaction(
        {
          abortSignal: n?.abortSignal,
          minContextSlot: e.minNonceContextSlot,
          nonceAccountPubkey: a,
          nonceValue: e.nonceInfo.nonce,
          signature: s,
        },
        n && n.commitment
      )).value;
    } else
      n?.abortSignal != null &&
        console.warn(
          "sendAndConfirmTransaction(): A transaction with a deprecated confirmation strategy was supplied along with an `abortSignal`. Only transactions having `lastValidBlockHeight` or a combination of `nonceInfo` and `minNonceContextSlot` are abortable."
        ),
        (i = (yield r.confirmTransaction(s, n && n.commitment)).value);
    if (i.err)
      throw s != null
        ? new Gt({
            action: "send",
            signature: s,
            transactionMessage: `Status: (${JSON.stringify(i)})`,
          })
        : new Error(`Transaction ${s} failed (${JSON.stringify(i)})`);
    return s;
  });
}
function $t(r) {
  return new Promise((e) => setTimeout(e, r));
}
function re(r, e) {
  let t = r.layout.span >= 0 ? r.layout.span : ec(r, e),
    n = W.Buffer.alloc(t),
    o = Object.assign({ instruction: r.index }, e);
  return r.layout.encode(o, n), n;
}
function ue(r, e) {
  let t;
  try {
    t = r.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.instruction !== r.index)
    throw new Error(
      `invalid instruction; instruction index mismatch ${t.instruction} != ${r.index}`
    );
  return t;
}
function hn(r) {
  let e = (0, Xa.blob)(8, r),
    t = e.decode.bind(e),
    n = e.encode.bind(e),
    o = e,
    s = Mi();
  return (
    (o.decode = (i, c) => {
      let a = t(i, c);
      return s.decode(a);
    }),
    (o.encode = (i, c, a) => {
      let u = s.encode(i);
      return n(u, c, a);
    }),
    o
  );
}
function Ly(r) {
  return r && r.__esModule && Object.prototype.hasOwnProperty.call(r, "default")
    ? r.default
    : r;
}
function By() {
  if (Pa) return rs;
  Pa = 1;
  var r = Object.prototype.toString,
    e =
      Object.keys ||
      function (n) {
        var o = [];
        for (var s in n) o.push(s);
        return o;
      };
  function t(n, o) {
    var s, i, c, a, u, l, _;
    if (n === !0) return "true";
    if (n === !1) return "false";
    switch (typeof n) {
      case "object":
        if (n === null) return null;
        if (n.toJSON && typeof n.toJSON == "function") return t(n.toJSON(), o);
        if (((_ = r.call(n)), _ === "[object Array]")) {
          for (c = "[", i = n.length - 1, s = 0; s < i; s++)
            c += t(n[s], !0) + ",";
          return i > -1 && (c += t(n[s], !0)), c + "]";
        } else if (_ === "[object Object]") {
          for (a = e(n).sort(), i = a.length, c = "", s = 0; s < i; )
            (u = a[s]),
              (l = t(n[u], !1)),
              l !== void 0 &&
                (c && (c += ","), (c += JSON.stringify(u) + ":" + l)),
              s++;
          return "{" + c + "}";
        } else return JSON.stringify(n);
      case "function":
      case "undefined":
        return o ? null : void 0;
      case "string":
        return JSON.stringify(n);
      default:
        return isFinite(n) ? n : null;
    }
  }
  return (
    (rs = function (n) {
      var o = t(n, !1);
      if (o !== void 0) return "" + o;
    }),
    rs
  );
}
function os(r) {
  let e = 0;
  for (; r > 1; ) (r /= 2), e++;
  return e;
}
function Cy(r) {
  return r === 0
    ? 1
    : (r--,
      (r |= r >> 1),
      (r |= r >> 2),
      (r |= r >> 4),
      (r |= r >> 8),
      (r |= r >> 16),
      (r |= r >> 32),
      r + 1);
}
function Dy(r, e) {
  let t;
  try {
    t = r.layout.decode(e);
  } catch (n) {
    throw new Error("invalid instruction; " + n);
  }
  if (t.typeIndex !== r.index)
    throw new Error(
      `invalid account data; account type mismatch ${t.typeIndex} != ${r.index}`
    );
  return t;
}
function My(r) {
  let e = r.match(zy);
  if (e == null) throw TypeError(`Failed to validate endpoint URL \`${r}\``);
  let [t, n, o, s] = e,
    i = r.startsWith("https:") ? "wss:" : "ws:",
    c = o == null ? null : parseInt(o.slice(1), 10),
    a = c == null ? "" : `:${c + 1}`;
  return `${i}//${n}${a}${s}`;
}
function Ky(r) {
  if (/^https?:/.test(r) === !1)
    throw new TypeError("Endpoint URL must start with `http:` or `https:`.");
  return r;
}
function ye(r) {
  let e, t;
  if (typeof r == "string") e = r;
  else if (r) {
    let n = r,
      { commitment: o } = n,
      s = et(n, ["commitment"]);
    (e = o), (t = s);
  }
  return { commitment: e, config: t };
}
function za(r) {
  return r.map((e) =>
    "memcmp" in e
      ? H(K({}, e), {
          memcmp: H(K({}, e.memcmp), {
            encoding: e.memcmp.encoding ?? "base58",
          }),
        })
      : e
  );
}
function ac(r) {
  return Pe([
    I({ jsonrpc: me("2.0"), id: k(), result: r }),
    I({
      jsonrpc: me("2.0"),
      id: k(),
      error: I({ code: Vt(), message: k(), data: F($i()) }),
    }),
  ]);
}
function X(r) {
  return cn(ac(r), Fy, (e) =>
    "error" in e ? e : H(K({}, e), { result: L(e.result, r) })
  );
}
function we(r) {
  return X(I({ context: I({ slot: g() }), value: r }));
}
function Yr(r) {
  return I({ context: I({ slot: g() }), value: r });
}
function ss(r, e) {
  return r === 0
    ? new dn({
        header: e.header,
        staticAccountKeys: e.accountKeys.map((t) => new B(t)),
        recentBlockhash: e.recentBlockhash,
        compiledInstructions: e.instructions.map((t) => ({
          programIdIndex: t.programIdIndex,
          accountKeyIndexes: t.accounts,
          data: Te.default.decode(t.data),
        })),
        addressTableLookups: e.addressTableLookups,
      })
    : new dt(e);
}
function tg(r, e, t, n, o, s) {
  let i = t || Py,
    c;
  s != null &&
    console.warn(
      "You have supplied an `httpAgent` when creating a `Connection` in a browser environment.It has been ignored; `httpAgent` is only used in Node environments."
    );
  let a;
  return (
    n &&
      (a = (l, _) =>
        A(this, null, function* () {
          let y = yield new Promise((d, h) => {
            try {
              n(l, _, (p, b) => d([p, b]));
            } catch (p) {
              h(p);
            }
          });
          return yield i(...y);
        })),
    new Za.default(
      (l, _) =>
        A(this, null, function* () {
          let y = {
            method: "POST",
            body: l,
            agent: c,
            headers: Object.assign(
              { "Content-Type": "application/json" },
              e || {},
              t_
            ),
          };
          try {
            let d = 5,
              h,
              p = 500;
            for (
              ;
              a ? (h = yield a(r, y)) : (h = yield i(r, y)),
                !(h.status !== 429 || o === !0 || ((d -= 1), d === 0));

            )
              console.error(
                `Server responded with ${h.status} ${h.statusText}.  Retrying after ${p}ms delay...`
              ),
                yield $t(p),
                (p *= 2);
            let b = yield h.text();
            h.ok
              ? _(null, b)
              : _(new Error(`${h.status} ${h.statusText}: ${b}`));
          } catch (d) {
            d instanceof Error && _(d);
          }
        }),
      {}
    )
  );
}
function ng(r) {
  return (e, t) =>
    new Promise((n, o) => {
      r.request(e, t, (s, i) => {
        if (s) {
          o(s);
          return;
        }
        n(i);
      });
    });
}
function rg(r) {
  return (e) =>
    new Promise((t, n) => {
      e.length === 0 && t([]);
      let o = e.map((s) => r.request(s.methodName, s.args));
      r.request(o, (s, i) => {
        if (s) {
          n(s);
          return;
        }
        t(i);
      });
    });
}
function f_({ authorizedVoter: r, epoch: e }) {
  return { epoch: e, authorizedVoter: new B(r) };
}
function ja({
  authorizedPubkey: r,
  epochOfLastAuthorizedSwitch: e,
  targetEpoch: t,
}) {
  return {
    authorizedPubkey: new B(r),
    epochOfLastAuthorizedSwitch: e,
    targetEpoch: t,
  };
}
function d_({ buf: r, idx: e, isEmpty: t }) {
  return t ? [] : [...r.slice(e + 1).map(ja), ...r.slice(0, e).map(ja)];
}
function l_(r, e) {
  let t = e === !1 ? "http" : "https";
  if (!r) return Ya[t].devnet;
  let n = Ya[t][r];
  if (!n) throw new Error(`Unknown ${t} cluster: ${r}`);
  return n;
}
function h_(r, e, t, n) {
  return A(this, null, function* () {
    let o, s;
    (t && Object.prototype.hasOwnProperty.call(t, "lastValidBlockHeight")) ||
    (t && Object.prototype.hasOwnProperty.call(t, "nonceValue"))
      ? ((o = t), (s = n))
      : (s = t);
    let i = s && {
        skipPreflight: s.skipPreflight,
        preflightCommitment: s.preflightCommitment || s.commitment,
        minContextSlot: s.minContextSlot,
      },
      c = yield r.sendRawTransaction(e, i),
      a = s && s.commitment,
      l = (yield o ? r.confirmTransaction(o, a) : r.confirmTransaction(c, a))
        .value;
    if (l.err)
      throw c != null
        ? new Gt({
            action: i?.skipPreflight ? "send" : "simulate",
            signature: c,
            transactionMessage: `Status: (${JSON.stringify(l)})`,
          })
        : new Error(`Raw transaction ${c} failed (${JSON.stringify(l)})`);
    return c;
  });
}
var W,
  us,
  Te,
  _n,
  f,
  Xa,
  Za,
  fy,
  Ba,
  zr,
  vs,
  dy,
  Z,
  Un,
  fs,
  Dn,
  Ja,
  Qa,
  ft,
  Ca,
  B,
  ds,
  hy,
  Bt,
  jr,
  zn,
  Mn,
  Kn,
  Lt,
  Wt,
  Q,
  yy,
  qt,
  gy,
  _y,
  py,
  my,
  Mr,
  tc,
  dt,
  dn,
  Ls,
  Rt,
  Ry,
  de,
  fe,
  ls,
  hs,
  by,
  Ey,
  Sy,
  nc,
  it,
  Ay,
  wy,
  Dr,
  ln,
  Iy,
  Oy,
  Ny,
  Ur,
  Gt,
  ky,
  U,
  rc,
  oc,
  gs,
  Kr,
  _s,
  ge,
  Be,
  Ty,
  ps,
  vy,
  ms,
  rs,
  Pa,
  xy,
  Da,
  Pn,
  Fr,
  Py,
  Rs,
  Ua,
  Fn,
  Uy,
  zy,
  Re,
  sc,
  Bs,
  ic,
  Fy,
  Vy,
  $y,
  qy,
  Wy,
  Gy,
  Hy,
  jy,
  jt,
  Yy,
  Xy,
  Zy,
  Jy,
  Qy,
  Ma,
  eg,
  og,
  sg,
  ig,
  ag,
  cg,
  ug,
  fg,
  dg,
  bs,
  lg,
  hg,
  Es,
  yg,
  gg,
  Vn,
  _g,
  pg,
  Ss,
  mg,
  Rg,
  bg,
  Eg,
  Sg,
  Ag,
  wg,
  Ig,
  Og,
  Ng,
  kg,
  Tg,
  vg,
  Lg,
  Ka,
  Bg,
  xg,
  Cg,
  Pg,
  Dg,
  cc,
  xs,
  uc,
  fc,
  dc,
  lc,
  Ug,
  zg,
  hc,
  yc,
  Vr,
  gc,
  Xr,
  Cs,
  pn,
  Yt,
  Mg,
  Kg,
  Fg,
  Vg,
  $g,
  qg,
  Wg,
  Fa,
  is,
  Pr,
  Gg,
  Hg,
  jg,
  Yg,
  Xg,
  Zg,
  Jg,
  Qg,
  e_,
  t_,
  As,
  $r,
  bt,
  ws,
  $n,
  Is,
  ct,
  qn,
  Va,
  $a,
  qa,
  Wa,
  qr,
  n_,
  r_,
  Ga,
  as,
  Ha,
  o_,
  cs,
  Wr,
  _c,
  pc,
  Gr,
  Ht,
  Os,
  ke,
  s_,
  yn,
  Hr,
  Ns,
  ut,
  i_,
  gn,
  mc,
  a_,
  ks,
  c_,
  u_,
  Ts,
  Ya,
  y_,
  __ = ae(() => {
    W = lt(oo());
    yi();
    (us = lt(Vs())), (Te = lt(Eo()));
    Ec();
    (_n = lt(wi())), (f = lt(To())), (Xa = lt(To()));
    Ki();
    qi();
    Za = lt(ya());
    Ea();
    Rc();
    La();
    (fy = zt.utils.randomPrivateKey),
      (Ba = () => {
        let r = zt.utils.randomPrivateKey(),
          e = zr(r),
          t = new Uint8Array(64);
        return t.set(r), t.set(e, 32), { publicKey: e, secretKey: t };
      }),
      (zr = zt.getPublicKey);
    (vs = (r, e) => zt.sign(r, e.slice(0, 32))),
      (dy = zt.verify),
      (Z = (r) =>
        W.Buffer.isBuffer(r)
          ? r
          : r instanceof Uint8Array
          ? W.Buffer.from(r.buffer, r.byteOffset, r.byteLength)
          : W.Buffer.from(r)),
      (Un = class {
        constructor(e) {
          Object.assign(this, e);
        }
        encode() {
          return W.Buffer.from((0, _n.serialize)(Dn, this));
        }
        static decode(e) {
          return (0, _n.deserialize)(Dn, this, e);
        }
        static decodeUnchecked(e) {
          return (0, _n.deserializeUnchecked)(Dn, this, e);
        }
      }),
      (fs = class extends Un {
        constructor(e) {
          if ((super(e), (this.enum = ""), Object.keys(e).length !== 1))
            throw new Error("Enum can only take single value");
          Object.keys(e).map((t) => {
            this.enum = t;
          });
        }
      }),
      (Dn = new Map()),
      (Qa = 32),
      (ft = 32);
    (Ca = 1),
      (B = class r extends Un {
        constructor(e) {
          if ((super({}), (this._bn = void 0), ly(e))) this._bn = e._bn;
          else {
            if (typeof e == "string") {
              let t = Te.default.decode(e);
              if (t.length != ft) throw new Error("Invalid public key input");
              this._bn = new us.default(t);
            } else this._bn = new us.default(e);
            if (this._bn.byteLength() > ft)
              throw new Error("Invalid public key input");
          }
        }
        static unique() {
          let e = new r(Ca);
          return (Ca += 1), new r(e.toBuffer());
        }
        equals(e) {
          return this._bn.eq(e._bn);
        }
        toBase58() {
          return Te.default.encode(this.toBytes());
        }
        toJSON() {
          return this.toBase58();
        }
        toBytes() {
          let e = this.toBuffer();
          return new Uint8Array(e.buffer, e.byteOffset, e.byteLength);
        }
        toBuffer() {
          let e = this._bn.toArrayLike(W.Buffer);
          if (e.length === ft) return e;
          let t = W.Buffer.alloc(32);
          return e.copy(t, 32 - e.length), t;
        }
        get [Symbol.toStringTag]() {
          return `PublicKey(${this.toString()})`;
        }
        toString() {
          return this.toBase58();
        }
        static createWithSeed(e, t, n) {
          return A(this, null, function* () {
            let o = W.Buffer.concat([
                e.toBuffer(),
                W.Buffer.from(t),
                n.toBuffer(),
              ]),
              s = ro(o);
            return new r(s);
          });
        }
        static createProgramAddressSync(e, t) {
          let n = W.Buffer.alloc(0);
          e.forEach(function (s) {
            if (s.length > Qa) throw new TypeError("Max seed length exceeded");
            n = W.Buffer.concat([n, Z(s)]);
          }),
            (n = W.Buffer.concat([
              n,
              t.toBuffer(),
              W.Buffer.from("ProgramDerivedAddress"),
            ]));
          let o = ro(n);
          if (xa(o))
            throw new Error("Invalid seeds, address must fall off the curve");
          return new r(o);
        }
        static createProgramAddress(e, t) {
          return A(this, null, function* () {
            return this.createProgramAddressSync(e, t);
          });
        }
        static findProgramAddressSync(e, t) {
          let n = 255,
            o;
          for (; n != 0; ) {
            try {
              let s = e.concat(W.Buffer.from([n]));
              o = this.createProgramAddressSync(s, t);
            } catch (s) {
              if (s instanceof TypeError) throw s;
              n--;
              continue;
            }
            return [o, n];
          }
          throw new Error("Unable to find a viable program address nonce");
        }
        static findProgramAddress(e, t) {
          return A(this, null, function* () {
            return this.findProgramAddressSync(e, t);
          });
        }
        static isOnCurve(e) {
          let t = new r(e);
          return xa(t.toBytes());
        }
      });
    Ja = B;
    B.default = new Ja("11111111111111111111111111111111");
    Dn.set(B, { kind: "struct", fields: [["_bn", "u256"]] });
    (ds = class {
      constructor(e) {
        if (((this._publicKey = void 0), (this._secretKey = void 0), e)) {
          let t = Z(e);
          if (e.length !== 64) throw new Error("bad secret key size");
          (this._publicKey = t.slice(32, 64)),
            (this._secretKey = t.slice(0, 32));
        } else
          (this._secretKey = Z(fy())),
            (this._publicKey = Z(zr(this._secretKey)));
      }
      get publicKey() {
        return new B(this._publicKey);
      }
      get secretKey() {
        return W.Buffer.concat([this._secretKey, this._publicKey], 64);
      }
    }),
      (hy = new B("BPFLoader1111111111111111111111111111111111")),
      (Bt = 1232),
      (jr = 127),
      (zn = 64),
      (Mn = class extends Error {
        constructor(e) {
          super(`Signature ${e} has expired: block height exceeded.`),
            (this.signature = void 0),
            (this.signature = e);
        }
      });
    Object.defineProperty(Mn.prototype, "name", {
      value: "TransactionExpiredBlockheightExceededError",
    });
    Kn = class extends Error {
      constructor(e, t) {
        super(
          `Transaction was not confirmed in ${t.toFixed(
            2
          )} seconds. It is unknown if it succeeded or failed. Check signature ${e} using the Solana Explorer or CLI tools.`
        ),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(Kn.prototype, "name", {
      value: "TransactionExpiredTimeoutError",
    });
    Lt = class extends Error {
      constructor(e) {
        super(`Signature ${e} has expired: the nonce is no longer valid.`),
          (this.signature = void 0),
          (this.signature = e);
      }
    };
    Object.defineProperty(Lt.prototype, "name", {
      value: "TransactionExpiredNonceInvalidError",
    });
    (Wt = class {
      constructor(e, t) {
        (this.staticAccountKeys = void 0),
          (this.accountKeysFromLookups = void 0),
          (this.staticAccountKeys = e),
          (this.accountKeysFromLookups = t);
      }
      keySegments() {
        let e = [this.staticAccountKeys];
        return (
          this.accountKeysFromLookups &&
            (e.push(this.accountKeysFromLookups.writable),
            e.push(this.accountKeysFromLookups.readonly)),
          e
        );
      }
      get(e) {
        for (let t of this.keySegments()) {
          if (e < t.length) return t[e];
          e -= t.length;
        }
      }
      get length() {
        return this.keySegments().flat().length;
      }
      compileInstructions(e) {
        if (this.length > 256)
          throw new Error(
            "Account index overflow encountered during compilation"
          );
        let n = new Map();
        this.keySegments()
          .flat()
          .forEach((s, i) => {
            n.set(s.toBase58(), i);
          });
        let o = (s) => {
          let i = n.get(s.toBase58());
          if (i === void 0)
            throw new Error(
              "Encountered an unknown instruction account key during compilation"
            );
          return i;
        };
        return e.map((s) => ({
          programIdIndex: o(s.programId),
          accountKeyIndexes: s.keys.map((i) => o(i.pubkey)),
          data: s.data,
        }));
      }
    }),
      (Q = (r = "publicKey") => f.blob(32, r)),
      (yy = (r = "signature") => f.blob(64, r)),
      (qt = (r = "string") => {
        let e = f.struct(
            [
              f.u32("length"),
              f.u32("lengthPadding"),
              f.blob(f.offset(f.u32(), -8), "chars"),
            ],
            r
          ),
          t = e.decode.bind(e),
          n = e.encode.bind(e),
          o = e;
        return (
          (o.decode = (s, i) => t(s, i).chars.toString()),
          (o.encode = (s, i, c) => {
            let a = { chars: W.Buffer.from(s, "utf8") };
            return n(a, i, c);
          }),
          (o.alloc = (s) =>
            f.u32().span + f.u32().span + W.Buffer.from(s, "utf8").length),
          o
        );
      }),
      (gy = (r = "authorized") => f.struct([Q("staker"), Q("withdrawer")], r)),
      (_y = (r = "lockup") =>
        f.struct(
          [f.ns64("unixTimestamp"), f.ns64("epoch"), Q("custodian")],
          r
        )),
      (py = (r = "voteInit") =>
        f.struct(
          [
            Q("nodePubkey"),
            Q("authorizedVoter"),
            Q("authorizedWithdrawer"),
            f.u8("commission"),
          ],
          r
        )),
      (my = (r = "voteAuthorizeWithSeedArgs") =>
        f.struct(
          [
            f.u32("voteAuthorizationType"),
            Q("currentAuthorityDerivedKeyOwnerPubkey"),
            qt("currentAuthorityDerivedKeySeed"),
            Q("newAuthorized"),
          ],
          r
        ));
    (Mr = class r {
      constructor(e, t) {
        (this.payer = void 0),
          (this.keyMetaMap = void 0),
          (this.payer = e),
          (this.keyMetaMap = t);
      }
      static compile(e, t) {
        let n = new Map(),
          o = (i) => {
            let c = i.toBase58(),
              a = n.get(c);
            return (
              a === void 0 &&
                ((a = { isSigner: !1, isWritable: !1, isInvoked: !1 }),
                n.set(c, a)),
              a
            );
          },
          s = o(t);
        (s.isSigner = !0), (s.isWritable = !0);
        for (let i of e) {
          o(i.programId).isInvoked = !0;
          for (let c of i.keys) {
            let a = o(c.pubkey);
            (a.isSigner ||= c.isSigner), (a.isWritable ||= c.isWritable);
          }
        }
        return new r(t, n);
      }
      getMessageComponents() {
        let e = [...this.keyMetaMap.entries()];
        ie(e.length <= 256, "Max static account keys length exceeded");
        let t = e.filter(([, a]) => a.isSigner && a.isWritable),
          n = e.filter(([, a]) => a.isSigner && !a.isWritable),
          o = e.filter(([, a]) => !a.isSigner && a.isWritable),
          s = e.filter(([, a]) => !a.isSigner && !a.isWritable),
          i = {
            numRequiredSignatures: t.length + n.length,
            numReadonlySignedAccounts: n.length,
            numReadonlyUnsignedAccounts: s.length,
          };
        {
          ie(t.length > 0, "Expected at least one writable signer key");
          let [a] = t[0];
          ie(
            a === this.payer.toBase58(),
            "Expected first writable signer key to be the fee payer"
          );
        }
        let c = [
          ...t.map(([a]) => new B(a)),
          ...n.map(([a]) => new B(a)),
          ...o.map(([a]) => new B(a)),
          ...s.map(([a]) => new B(a)),
        ];
        return [i, c];
      }
      extractTableLookup(e) {
        let [t, n] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && i.isWritable
          ),
          [o, s] = this.drainKeysFoundInLookupTable(
            e.state.addresses,
            (i) => !i.isSigner && !i.isInvoked && !i.isWritable
          );
        if (!(t.length === 0 && o.length === 0))
          return [
            { accountKey: e.key, writableIndexes: t, readonlyIndexes: o },
            { writable: n, readonly: s },
          ];
      }
      drainKeysFoundInLookupTable(e, t) {
        let n = new Array(),
          o = new Array();
        for (let [s, i] of this.keyMetaMap.entries())
          if (t(i)) {
            let c = new B(s),
              a = e.findIndex((u) => u.equals(c));
            a >= 0 &&
              (ie(a < 256, "Max lookup table index exceeded"),
              n.push(a),
              o.push(c),
              this.keyMetaMap.delete(s));
          }
        return [n, o];
      }
    }),
      (tc = "Reached end of buffer unexpectedly");
    (dt = class r {
      constructor(e) {
        (this.header = void 0),
          (this.accountKeys = void 0),
          (this.recentBlockhash = void 0),
          (this.instructions = void 0),
          (this.indexToProgramIds = new Map()),
          (this.header = e.header),
          (this.accountKeys = e.accountKeys.map((t) => new B(t))),
          (this.recentBlockhash = e.recentBlockhash),
          (this.instructions = e.instructions),
          this.instructions.forEach((t) =>
            this.indexToProgramIds.set(
              t.programIdIndex,
              this.accountKeys[t.programIdIndex]
            )
          );
      }
      get version() {
        return "legacy";
      }
      get staticAccountKeys() {
        return this.accountKeys;
      }
      get compiledInstructions() {
        return this.instructions.map((e) => ({
          programIdIndex: e.programIdIndex,
          accountKeyIndexes: e.accounts,
          data: Te.default.decode(e.data),
        }));
      }
      get addressTableLookups() {
        return [];
      }
      getAccountKeys() {
        return new Wt(this.staticAccountKeys);
      }
      static compile(e) {
        let t = Mr.compile(e.instructions, e.payerKey),
          [n, o] = t.getMessageComponents(),
          i = new Wt(o)
            .compileInstructions(e.instructions)
            .map((c) => ({
              programIdIndex: c.programIdIndex,
              accounts: c.accountKeyIndexes,
              data: Te.default.encode(c.data),
            }));
        return new r({
          header: n,
          accountKeys: o,
          recentBlockhash: e.recentBlockhash,
          instructions: i,
        });
      }
      isAccountSigner(e) {
        return e < this.header.numRequiredSignatures;
      }
      isAccountWritable(e) {
        let t = this.header.numRequiredSignatures;
        if (e >= this.header.numRequiredSignatures) {
          let n = e - t,
            s =
              this.accountKeys.length -
              t -
              this.header.numReadonlyUnsignedAccounts;
          return n < s;
        } else {
          let n = t - this.header.numReadonlySignedAccounts;
          return e < n;
        }
      }
      isProgramId(e) {
        return this.indexToProgramIds.has(e);
      }
      programIds() {
        return [...this.indexToProgramIds.values()];
      }
      nonProgramIds() {
        return this.accountKeys.filter((e, t) => !this.isProgramId(t));
      }
      serialize() {
        let e = this.accountKeys.length,
          t = [];
        Ze(t, e);
        let n = this.instructions.map((_) => {
            let { accounts: y, programIdIndex: d } = _,
              h = Array.from(Te.default.decode(_.data)),
              p = [];
            Ze(p, y.length);
            let b = [];
            return (
              Ze(b, h.length),
              {
                programIdIndex: d,
                keyIndicesCount: W.Buffer.from(p),
                keyIndices: y,
                dataLength: W.Buffer.from(b),
                data: h,
              }
            );
          }),
          o = [];
        Ze(o, n.length);
        let s = W.Buffer.alloc(Bt);
        W.Buffer.from(o).copy(s);
        let i = o.length;
        n.forEach((_) => {
          let d = f
            .struct([
              f.u8("programIdIndex"),
              f.blob(_.keyIndicesCount.length, "keyIndicesCount"),
              f.seq(f.u8("keyIndex"), _.keyIndices.length, "keyIndices"),
              f.blob(_.dataLength.length, "dataLength"),
              f.seq(f.u8("userdatum"), _.data.length, "data"),
            ])
            .encode(_, s, i);
          i += d;
        }),
          (s = s.slice(0, i));
        let c = f.struct([
            f.blob(1, "numRequiredSignatures"),
            f.blob(1, "numReadonlySignedAccounts"),
            f.blob(1, "numReadonlyUnsignedAccounts"),
            f.blob(t.length, "keyCount"),
            f.seq(Q("key"), e, "keys"),
            Q("recentBlockhash"),
          ]),
          a = {
            numRequiredSignatures: W.Buffer.from([
              this.header.numRequiredSignatures,
            ]),
            numReadonlySignedAccounts: W.Buffer.from([
              this.header.numReadonlySignedAccounts,
            ]),
            numReadonlyUnsignedAccounts: W.Buffer.from([
              this.header.numReadonlyUnsignedAccounts,
            ]),
            keyCount: W.Buffer.from(t),
            keys: this.accountKeys.map((_) => Z(_.toBytes())),
            recentBlockhash: Te.default.decode(this.recentBlockhash),
          },
          u = W.Buffer.alloc(2048),
          l = c.encode(a, u);
        return s.copy(u, l), u.slice(0, l + s.length);
      }
      static from(e) {
        let t = [...e],
          n = at(t);
        if (n !== (n & jr))
          throw new Error(
            "Versioned messages must be deserialized with VersionedMessage.deserialize()"
          );
        let o = at(t),
          s = at(t),
          i = He(t),
          c = [];
        for (let y = 0; y < i; y++) {
          let d = je(t, 0, ft);
          c.push(new B(W.Buffer.from(d)));
        }
        let a = je(t, 0, ft),
          u = He(t),
          l = [];
        for (let y = 0; y < u; y++) {
          let d = at(t),
            h = He(t),
            p = je(t, 0, h),
            b = He(t),
            R = je(t, 0, b),
            T = Te.default.encode(W.Buffer.from(R));
          l.push({ programIdIndex: d, accounts: p, data: T });
        }
        let _ = {
          header: {
            numRequiredSignatures: n,
            numReadonlySignedAccounts: o,
            numReadonlyUnsignedAccounts: s,
          },
          recentBlockhash: Te.default.encode(W.Buffer.from(a)),
          accountKeys: c,
          instructions: l,
        };
        return new r(_);
      }
    }),
      (dn = class r {
        constructor(e) {
          (this.header = void 0),
            (this.staticAccountKeys = void 0),
            (this.recentBlockhash = void 0),
            (this.compiledInstructions = void 0),
            (this.addressTableLookups = void 0),
            (this.header = e.header),
            (this.staticAccountKeys = e.staticAccountKeys),
            (this.recentBlockhash = e.recentBlockhash),
            (this.compiledInstructions = e.compiledInstructions),
            (this.addressTableLookups = e.addressTableLookups);
        }
        get version() {
          return 0;
        }
        get numAccountKeysFromLookups() {
          let e = 0;
          for (let t of this.addressTableLookups)
            e += t.readonlyIndexes.length + t.writableIndexes.length;
          return e;
        }
        getAccountKeys(e) {
          let t;
          if (e && "accountKeysFromLookups" in e && e.accountKeysFromLookups) {
            if (
              this.numAccountKeysFromLookups !=
              e.accountKeysFromLookups.writable.length +
                e.accountKeysFromLookups.readonly.length
            )
              throw new Error(
                "Failed to get account keys because of a mismatch in the number of account keys from lookups"
              );
            t = e.accountKeysFromLookups;
          } else if (
            e &&
            "addressLookupTableAccounts" in e &&
            e.addressLookupTableAccounts
          )
            t = this.resolveAddressTableLookups(e.addressLookupTableAccounts);
          else if (this.addressTableLookups.length > 0)
            throw new Error(
              "Failed to get account keys because address table lookups were not resolved"
            );
          return new Wt(this.staticAccountKeys, t);
        }
        isAccountSigner(e) {
          return e < this.header.numRequiredSignatures;
        }
        isAccountWritable(e) {
          let t = this.header.numRequiredSignatures,
            n = this.staticAccountKeys.length;
          if (e >= n) {
            let o = e - n,
              s = this.addressTableLookups.reduce(
                (i, c) => i + c.writableIndexes.length,
                0
              );
            return o < s;
          } else if (e >= this.header.numRequiredSignatures) {
            let o = e - t,
              i = n - t - this.header.numReadonlyUnsignedAccounts;
            return o < i;
          } else {
            let o = t - this.header.numReadonlySignedAccounts;
            return e < o;
          }
        }
        resolveAddressTableLookups(e) {
          let t = { writable: [], readonly: [] };
          for (let n of this.addressTableLookups) {
            let o = e.find((s) => s.key.equals(n.accountKey));
            if (!o)
              throw new Error(
                `Failed to find address lookup table account for table key ${n.accountKey.toBase58()}`
              );
            for (let s of n.writableIndexes)
              if (s < o.state.addresses.length)
                t.writable.push(o.state.addresses[s]);
              else
                throw new Error(
                  `Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`
                );
            for (let s of n.readonlyIndexes)
              if (s < o.state.addresses.length)
                t.readonly.push(o.state.addresses[s]);
              else
                throw new Error(
                  `Failed to find address for index ${s} in address lookup table ${n.accountKey.toBase58()}`
                );
          }
          return t;
        }
        static compile(e) {
          let t = Mr.compile(e.instructions, e.payerKey),
            n = new Array(),
            o = { writable: new Array(), readonly: new Array() },
            s = e.addressLookupTableAccounts || [];
          for (let l of s) {
            let _ = t.extractTableLookup(l);
            if (_ !== void 0) {
              let [y, { writable: d, readonly: h }] = _;
              n.push(y), o.writable.push(...d), o.readonly.push(...h);
            }
          }
          let [i, c] = t.getMessageComponents(),
            u = new Wt(c, o).compileInstructions(e.instructions);
          return new r({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: e.recentBlockhash,
            compiledInstructions: u,
            addressTableLookups: n,
          });
        }
        serialize() {
          let e = Array();
          Ze(e, this.staticAccountKeys.length);
          let t = this.serializeInstructions(),
            n = Array();
          Ze(n, this.compiledInstructions.length);
          let o = this.serializeAddressTableLookups(),
            s = Array();
          Ze(s, this.addressTableLookups.length);
          let i = f.struct([
              f.u8("prefix"),
              f.struct(
                [
                  f.u8("numRequiredSignatures"),
                  f.u8("numReadonlySignedAccounts"),
                  f.u8("numReadonlyUnsignedAccounts"),
                ],
                "header"
              ),
              f.blob(e.length, "staticAccountKeysLength"),
              f.seq(Q(), this.staticAccountKeys.length, "staticAccountKeys"),
              Q("recentBlockhash"),
              f.blob(n.length, "instructionsLength"),
              f.blob(t.length, "serializedInstructions"),
              f.blob(s.length, "addressTableLookupsLength"),
              f.blob(o.length, "serializedAddressTableLookups"),
            ]),
            c = new Uint8Array(Bt),
            u = i.encode(
              {
                prefix: 128,
                header: this.header,
                staticAccountKeysLength: new Uint8Array(e),
                staticAccountKeys: this.staticAccountKeys.map((l) =>
                  l.toBytes()
                ),
                recentBlockhash: Te.default.decode(this.recentBlockhash),
                instructionsLength: new Uint8Array(n),
                serializedInstructions: t,
                addressTableLookupsLength: new Uint8Array(s),
                serializedAddressTableLookups: o,
              },
              c
            );
          return c.slice(0, u);
        }
        serializeInstructions() {
          let e = 0,
            t = new Uint8Array(Bt);
          for (let n of this.compiledInstructions) {
            let o = Array();
            Ze(o, n.accountKeyIndexes.length);
            let s = Array();
            Ze(s, n.data.length);
            let i = f.struct([
              f.u8("programIdIndex"),
              f.blob(o.length, "encodedAccountKeyIndexesLength"),
              f.seq(f.u8(), n.accountKeyIndexes.length, "accountKeyIndexes"),
              f.blob(s.length, "encodedDataLength"),
              f.blob(n.data.length, "data"),
            ]);
            e += i.encode(
              {
                programIdIndex: n.programIdIndex,
                encodedAccountKeyIndexesLength: new Uint8Array(o),
                accountKeyIndexes: n.accountKeyIndexes,
                encodedDataLength: new Uint8Array(s),
                data: n.data,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        serializeAddressTableLookups() {
          let e = 0,
            t = new Uint8Array(Bt);
          for (let n of this.addressTableLookups) {
            let o = Array();
            Ze(o, n.writableIndexes.length);
            let s = Array();
            Ze(s, n.readonlyIndexes.length);
            let i = f.struct([
              Q("accountKey"),
              f.blob(o.length, "encodedWritableIndexesLength"),
              f.seq(f.u8(), n.writableIndexes.length, "writableIndexes"),
              f.blob(s.length, "encodedReadonlyIndexesLength"),
              f.seq(f.u8(), n.readonlyIndexes.length, "readonlyIndexes"),
            ]);
            e += i.encode(
              {
                accountKey: n.accountKey.toBytes(),
                encodedWritableIndexesLength: new Uint8Array(o),
                writableIndexes: n.writableIndexes,
                encodedReadonlyIndexesLength: new Uint8Array(s),
                readonlyIndexes: n.readonlyIndexes,
              },
              t,
              e
            );
          }
          return t.slice(0, e);
        }
        static deserialize(e) {
          let t = [...e],
            n = at(t),
            o = n & jr;
          ie(n !== o, "Expected versioned message but received legacy message");
          let s = o;
          ie(
            s === 0,
            `Expected versioned message with version 0 but found version ${s}`
          );
          let i = {
              numRequiredSignatures: at(t),
              numReadonlySignedAccounts: at(t),
              numReadonlyUnsignedAccounts: at(t),
            },
            c = [],
            a = He(t);
          for (let h = 0; h < a; h++) c.push(new B(je(t, 0, ft)));
          let u = Te.default.encode(je(t, 0, ft)),
            l = He(t),
            _ = [];
          for (let h = 0; h < l; h++) {
            let p = at(t),
              b = He(t),
              R = je(t, 0, b),
              T = He(t),
              N = new Uint8Array(je(t, 0, T));
            _.push({ programIdIndex: p, accountKeyIndexes: R, data: N });
          }
          let y = He(t),
            d = [];
          for (let h = 0; h < y; h++) {
            let p = new B(je(t, 0, ft)),
              b = He(t),
              R = je(t, 0, b),
              T = He(t),
              N = je(t, 0, T);
            d.push({ accountKey: p, writableIndexes: R, readonlyIndexes: N });
          }
          return new r({
            header: i,
            staticAccountKeys: c,
            recentBlockhash: u,
            compiledInstructions: _,
            addressTableLookups: d,
          });
        }
      }),
      (Ls = {
        deserializeMessageVersion(r) {
          let e = r[0],
            t = e & jr;
          return t === e ? "legacy" : t;
        },
        deserialize: (r) => {
          let e = Ls.deserializeMessageVersion(r);
          if (e === "legacy") return dt.from(r);
          if (e === 0) return dn.deserialize(r);
          throw new Error(
            `Transaction message version ${e} deserialization is not supported`
          );
        },
      }),
      (Rt = (function (r) {
        return (
          (r[(r.BLOCKHEIGHT_EXCEEDED = 0)] = "BLOCKHEIGHT_EXCEEDED"),
          (r[(r.PROCESSED = 1)] = "PROCESSED"),
          (r[(r.TIMED_OUT = 2)] = "TIMED_OUT"),
          (r[(r.NONCE_INVALID = 3)] = "NONCE_INVALID"),
          r
        );
      })({})),
      (Ry = W.Buffer.alloc(zn).fill(0)),
      (de = class {
        constructor(e) {
          (this.keys = void 0),
            (this.programId = void 0),
            (this.data = W.Buffer.alloc(0)),
            (this.programId = e.programId),
            (this.keys = e.keys),
            e.data && (this.data = e.data);
        }
        toJSON() {
          return {
            keys: this.keys.map(
              ({ pubkey: e, isSigner: t, isWritable: n }) => ({
                pubkey: e.toJSON(),
                isSigner: t,
                isWritable: n,
              })
            ),
            programId: this.programId.toJSON(),
            data: [...this.data],
          };
        }
      }),
      (fe = class r {
        get signature() {
          return this.signatures.length > 0
            ? this.signatures[0].signature
            : null;
        }
        constructor(e) {
          if (
            ((this.signatures = []),
            (this.feePayer = void 0),
            (this.instructions = []),
            (this.recentBlockhash = void 0),
            (this.lastValidBlockHeight = void 0),
            (this.nonceInfo = void 0),
            (this.minNonceContextSlot = void 0),
            (this._message = void 0),
            (this._json = void 0),
            !!e)
          )
            if (
              (e.feePayer && (this.feePayer = e.feePayer),
              e.signatures && (this.signatures = e.signatures),
              Object.prototype.hasOwnProperty.call(e, "nonceInfo"))
            ) {
              let { minContextSlot: t, nonceInfo: n } = e;
              (this.minNonceContextSlot = t), (this.nonceInfo = n);
            } else if (
              Object.prototype.hasOwnProperty.call(e, "lastValidBlockHeight")
            ) {
              let { blockhash: t, lastValidBlockHeight: n } = e;
              (this.recentBlockhash = t), (this.lastValidBlockHeight = n);
            } else {
              let { recentBlockhash: t, nonceInfo: n } = e;
              n && (this.nonceInfo = n), (this.recentBlockhash = t);
            }
        }
        toJSON() {
          return {
            recentBlockhash: this.recentBlockhash || null,
            feePayer: this.feePayer ? this.feePayer.toJSON() : null,
            nonceInfo: this.nonceInfo
              ? {
                  nonce: this.nonceInfo.nonce,
                  nonceInstruction: this.nonceInfo.nonceInstruction.toJSON(),
                }
              : null,
            instructions: this.instructions.map((e) => e.toJSON()),
            signers: this.signatures.map(({ publicKey: e }) => e.toJSON()),
          };
        }
        add(...e) {
          if (e.length === 0) throw new Error("No instructions");
          return (
            e.forEach((t) => {
              "instructions" in t
                ? (this.instructions = this.instructions.concat(t.instructions))
                : "data" in t && "programId" in t && "keys" in t
                ? this.instructions.push(t)
                : this.instructions.push(new de(t));
            }),
            this
          );
        }
        compileMessage() {
          if (
            this._message &&
            JSON.stringify(this.toJSON()) === JSON.stringify(this._json)
          )
            return this._message;
          let e, t;
          if (
            (this.nonceInfo
              ? ((e = this.nonceInfo.nonce),
                this.instructions[0] != this.nonceInfo.nonceInstruction
                  ? (t = [
                      this.nonceInfo.nonceInstruction,
                      ...this.instructions,
                    ])
                  : (t = this.instructions))
              : ((e = this.recentBlockhash), (t = this.instructions)),
            !e)
          )
            throw new Error("Transaction recentBlockhash required");
          t.length < 1 && console.warn("No instructions provided");
          let n;
          if (this.feePayer) n = this.feePayer;
          else if (this.signatures.length > 0 && this.signatures[0].publicKey)
            n = this.signatures[0].publicKey;
          else throw new Error("Transaction fee payer required");
          for (let p = 0; p < t.length; p++)
            if (t[p].programId === void 0)
              throw new Error(
                `Transaction instruction index ${p} has undefined program id`
              );
          let o = [],
            s = [];
          t.forEach((p) => {
            p.keys.forEach((R) => {
              s.push(K({}, R));
            });
            let b = p.programId.toString();
            o.includes(b) || o.push(b);
          }),
            o.forEach((p) => {
              s.push({ pubkey: new B(p), isSigner: !1, isWritable: !1 });
            });
          let i = [];
          s.forEach((p) => {
            let b = p.pubkey.toString(),
              R = i.findIndex((T) => T.pubkey.toString() === b);
            R > -1
              ? ((i[R].isWritable = i[R].isWritable || p.isWritable),
                (i[R].isSigner = i[R].isSigner || p.isSigner))
              : i.push(p);
          }),
            i.sort(function (p, b) {
              if (p.isSigner !== b.isSigner) return p.isSigner ? -1 : 1;
              if (p.isWritable !== b.isWritable) return p.isWritable ? -1 : 1;
              let R = {
                localeMatcher: "best fit",
                usage: "sort",
                sensitivity: "variant",
                ignorePunctuation: !1,
                numeric: !1,
                caseFirst: "lower",
              };
              return p.pubkey
                .toBase58()
                .localeCompare(b.pubkey.toBase58(), "en", R);
            });
          let c = i.findIndex((p) => p.pubkey.equals(n));
          if (c > -1) {
            let [p] = i.splice(c, 1);
            (p.isSigner = !0), (p.isWritable = !0), i.unshift(p);
          } else i.unshift({ pubkey: n, isSigner: !0, isWritable: !0 });
          for (let p of this.signatures) {
            let b = i.findIndex((R) => R.pubkey.equals(p.publicKey));
            if (b > -1)
              i[b].isSigner ||
                ((i[b].isSigner = !0),
                console.warn(
                  "Transaction references a signature that is unnecessary, only the fee payer and instruction signer accounts should sign a transaction. This behavior is deprecated and will throw an error in the next major version release."
                ));
            else throw new Error(`unknown signer: ${p.publicKey.toString()}`);
          }
          let a = 0,
            u = 0,
            l = 0,
            _ = [],
            y = [];
          i.forEach(({ pubkey: p, isSigner: b, isWritable: R }) => {
            b
              ? (_.push(p.toString()), (a += 1), R || (u += 1))
              : (y.push(p.toString()), R || (l += 1));
          });
          let d = _.concat(y),
            h = t.map((p) => {
              let { data: b, programId: R } = p;
              return {
                programIdIndex: d.indexOf(R.toString()),
                accounts: p.keys.map((T) => d.indexOf(T.pubkey.toString())),
                data: Te.default.encode(b),
              };
            });
          return (
            h.forEach((p) => {
              ie(p.programIdIndex >= 0), p.accounts.forEach((b) => ie(b >= 0));
            }),
            new dt({
              header: {
                numRequiredSignatures: a,
                numReadonlySignedAccounts: u,
                numReadonlyUnsignedAccounts: l,
              },
              accountKeys: d,
              recentBlockhash: e,
              instructions: h,
            })
          );
        }
        _compile() {
          let e = this.compileMessage(),
            t = e.accountKeys.slice(0, e.header.numRequiredSignatures);
          return (
            (this.signatures.length === t.length &&
              this.signatures.every((o, s) => t[s].equals(o.publicKey))) ||
              (this.signatures = t.map((n) => ({
                signature: null,
                publicKey: n,
              }))),
            e
          );
        }
        serializeMessage() {
          return this._compile().serialize();
        }
        getEstimatedFee(e) {
          return A(this, null, function* () {
            return (yield e.getFeeForMessage(this.compileMessage())).value;
          });
        }
        setSigners(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set();
          this.signatures = e
            .filter((n) => {
              let o = n.toString();
              return t.has(o) ? !1 : (t.add(o), !0);
            })
            .map((n) => ({ signature: null, publicKey: n }));
        }
        sign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            n = [];
          for (let s of e) {
            let i = s.publicKey.toString();
            t.has(i) || (t.add(i), n.push(s));
          }
          this.signatures = n.map((s) => ({
            signature: null,
            publicKey: s.publicKey,
          }));
          let o = this._compile();
          this._partialSign(o, ...n);
        }
        partialSign(...e) {
          if (e.length === 0) throw new Error("No signers");
          let t = new Set(),
            n = [];
          for (let s of e) {
            let i = s.publicKey.toString();
            t.has(i) || (t.add(i), n.push(s));
          }
          let o = this._compile();
          this._partialSign(o, ...n);
        }
        _partialSign(e, ...t) {
          let n = e.serialize();
          t.forEach((o) => {
            let s = vs(n, o.secretKey);
            this._addSignature(o.publicKey, Z(s));
          });
        }
        addSignature(e, t) {
          this._compile(), this._addSignature(e, t);
        }
        _addSignature(e, t) {
          ie(t.length === 64);
          let n = this.signatures.findIndex((o) => e.equals(o.publicKey));
          if (n < 0) throw new Error(`unknown signer: ${e.toString()}`);
          this.signatures[n].signature = W.Buffer.from(t);
        }
        verifySignatures(e = !0) {
          return !this._getMessageSignednessErrors(this.serializeMessage(), e);
        }
        _getMessageSignednessErrors(e, t) {
          let n = {};
          for (let { signature: o, publicKey: s } of this.signatures)
            o === null
              ? t && (n.missing ||= []).push(s)
              : dy(o, e, s.toBytes()) || (n.invalid ||= []).push(s);
          return n.invalid || n.missing ? n : void 0;
        }
        serialize(e) {
          let { requireAllSignatures: t, verifySignatures: n } = Object.assign(
              { requireAllSignatures: !0, verifySignatures: !0 },
              e
            ),
            o = this.serializeMessage();
          if (n) {
            let s = this._getMessageSignednessErrors(o, t);
            if (s) {
              let i = "Signature verification failed.";
              throw (
                (s.invalid &&
                  (i += `
Invalid signature for public key${
                    s.invalid.length === 1 ? "" : "(s)"
                  } [\`${s.invalid.map((c) => c.toBase58()).join("`, `")}\`].`),
                s.missing &&
                  (i += `
Missing signature for public key${
                    s.missing.length === 1 ? "" : "(s)"
                  } [\`${s.missing.map((c) => c.toBase58()).join("`, `")}\`].`),
                new Error(i))
              );
            }
          }
          return this._serialize(o);
        }
        _serialize(e) {
          let { signatures: t } = this,
            n = [];
          Ze(n, t.length);
          let o = n.length + t.length * 64 + e.length,
            s = W.Buffer.alloc(o);
          return (
            ie(t.length < 256),
            W.Buffer.from(n).copy(s, 0),
            t.forEach(({ signature: i }, c) => {
              i !== null &&
                (ie(i.length === 64, "signature has invalid length"),
                W.Buffer.from(i).copy(s, n.length + c * 64));
            }),
            e.copy(s, n.length + t.length * 64),
            ie(s.length <= Bt, `Transaction too large: ${s.length} > ${Bt}`),
            s
          );
        }
        get keys() {
          return (
            ie(this.instructions.length === 1),
            this.instructions[0].keys.map((e) => e.pubkey)
          );
        }
        get programId() {
          return (
            ie(this.instructions.length === 1), this.instructions[0].programId
          );
        }
        get data() {
          return ie(this.instructions.length === 1), this.instructions[0].data;
        }
        static from(e) {
          let t = [...e],
            n = He(t),
            o = [];
          for (let s = 0; s < n; s++) {
            let i = je(t, 0, zn);
            o.push(Te.default.encode(W.Buffer.from(i)));
          }
          return r.populate(dt.from(t), o);
        }
        static populate(e, t = []) {
          let n = new r();
          return (
            (n.recentBlockhash = e.recentBlockhash),
            e.header.numRequiredSignatures > 0 &&
              (n.feePayer = e.accountKeys[0]),
            t.forEach((o, s) => {
              let i = {
                signature:
                  o == Te.default.encode(Ry) ? null : Te.default.decode(o),
                publicKey: e.accountKeys[s],
              };
              n.signatures.push(i);
            }),
            e.instructions.forEach((o) => {
              let s = o.accounts.map((i) => {
                let c = e.accountKeys[i];
                return {
                  pubkey: c,
                  isSigner:
                    n.signatures.some(
                      (a) => a.publicKey.toString() === c.toString()
                    ) || e.isAccountSigner(i),
                  isWritable: e.isAccountWritable(i),
                };
              });
              n.instructions.push(
                new de({
                  keys: s,
                  programId: e.accountKeys[o.programIdIndex],
                  data: Te.default.decode(o.data),
                })
              );
            }),
            (n._message = e),
            (n._json = n.toJSON()),
            n
          );
        }
      }),
      (ls = class r {
        constructor(e) {
          (this.payerKey = void 0),
            (this.instructions = void 0),
            (this.recentBlockhash = void 0),
            (this.payerKey = e.payerKey),
            (this.instructions = e.instructions),
            (this.recentBlockhash = e.recentBlockhash);
        }
        static decompile(e, t) {
          let { header: n, compiledInstructions: o, recentBlockhash: s } = e,
            {
              numRequiredSignatures: i,
              numReadonlySignedAccounts: c,
              numReadonlyUnsignedAccounts: a,
            } = n,
            u = i - c;
          ie(u > 0, "Message header is invalid");
          let l = e.staticAccountKeys.length - i - a;
          ie(l >= 0, "Message header is invalid");
          let _ = e.getAccountKeys(t),
            y = _.get(0);
          if (y === void 0)
            throw new Error(
              "Failed to decompile message because no account keys were found"
            );
          let d = [];
          for (let h of o) {
            let p = [];
            for (let R of h.accountKeyIndexes) {
              let T = _.get(R);
              if (T === void 0)
                throw new Error(
                  `Failed to find key for account key index ${R}`
                );
              let N = R < i,
                D;
              N
                ? (D = R < u)
                : R < _.staticAccountKeys.length
                ? (D = R - i < l)
                : (D =
                    R - _.staticAccountKeys.length <
                    _.accountKeysFromLookups.writable.length),
                p.push({
                  pubkey: T,
                  isSigner: R < n.numRequiredSignatures,
                  isWritable: D,
                });
            }
            let b = _.get(h.programIdIndex);
            if (b === void 0)
              throw new Error(
                `Failed to find program id for program id index ${h.programIdIndex}`
              );
            d.push(new de({ programId: b, data: Z(h.data), keys: p }));
          }
          return new r({ payerKey: y, instructions: d, recentBlockhash: s });
        }
        compileToLegacyMessage() {
          return dt.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
          });
        }
        compileToV0Message(e) {
          return dn.compile({
            payerKey: this.payerKey,
            recentBlockhash: this.recentBlockhash,
            instructions: this.instructions,
            addressLookupTableAccounts: e,
          });
        }
      }),
      (hs = class r {
        get version() {
          return this.message.version;
        }
        constructor(e, t) {
          if (
            ((this.signatures = void 0), (this.message = void 0), t !== void 0)
          )
            ie(
              t.length === e.header.numRequiredSignatures,
              "Expected signatures length to be equal to the number of required signatures"
            ),
              (this.signatures = t);
          else {
            let n = [];
            for (let o = 0; o < e.header.numRequiredSignatures; o++)
              n.push(new Uint8Array(zn));
            this.signatures = n;
          }
          this.message = e;
        }
        serialize() {
          let e = this.message.serialize(),
            t = Array();
          Ze(t, this.signatures.length);
          let n = f.struct([
              f.blob(t.length, "encodedSignaturesLength"),
              f.seq(yy(), this.signatures.length, "signatures"),
              f.blob(e.length, "serializedMessage"),
            ]),
            o = new Uint8Array(2048),
            s = n.encode(
              {
                encodedSignaturesLength: new Uint8Array(t),
                signatures: this.signatures,
                serializedMessage: e,
              },
              o
            );
          return o.slice(0, s);
        }
        static deserialize(e) {
          let t = [...e],
            n = [],
            o = He(t);
          for (let i = 0; i < o; i++) n.push(new Uint8Array(je(t, 0, zn)));
          let s = Ls.deserialize(new Uint8Array(t));
          return new r(s, n);
        }
        sign(e) {
          let t = this.message.serialize(),
            n = this.message.staticAccountKeys.slice(
              0,
              this.message.header.numRequiredSignatures
            );
          for (let o of e) {
            let s = n.findIndex((i) => i.equals(o.publicKey));
            ie(
              s >= 0,
              `Cannot sign with non signer key ${o.publicKey.toBase58()}`
            ),
              (this.signatures[s] = vs(t, o.secretKey));
          }
        }
        addSignature(e, t) {
          ie(t.byteLength === 64, "Signature must be 64 bytes long");
          let o = this.message.staticAccountKeys
            .slice(0, this.message.header.numRequiredSignatures)
            .findIndex((s) => s.equals(e));
          ie(
            o >= 0,
            `Can not add signature; \`${e.toBase58()}\` is not required to sign this transaction`
          ),
            (this.signatures[o] = t);
        }
      }),
      (by = 160),
      (Ey = 64),
      (Sy = by / Ey),
      (nc = 1e3 / Sy),
      (it = new B("SysvarC1ock11111111111111111111111111111111")),
      (Ay = new B("SysvarEpochSchedu1e111111111111111111111111")),
      (wy = new B("Sysvar1nstructions1111111111111111111111111")),
      (Dr = new B("SysvarRecentB1ockHashes11111111111111111111")),
      (ln = new B("SysvarRent111111111111111111111111111111111")),
      (Iy = new B("SysvarRewards111111111111111111111111111111")),
      (Oy = new B("SysvarS1otHashes111111111111111111111111111")),
      (Ny = new B("SysvarS1otHistory11111111111111111111111111")),
      (Ur = new B("SysvarStakeHistory1111111111111111111111111")),
      (Gt = class extends Error {
        constructor({
          action: e,
          signature: t,
          transactionMessage: n,
          logs: o,
        }) {
          let s = o
              ? `Logs: 
${JSON.stringify(o.slice(-10), null, 2)}. `
              : "",
            i =
              "\nCatch the `SendTransactionError` and call `getLogs()` on it for full details.",
            c;
          switch (e) {
            case "send":
              c =
                `Transaction ${t} resulted in an error. 
${n}. ` +
                s +
                i;
              break;
            case "simulate":
              c =
                `Simulation failed. 
Message: ${n}. 
` +
                s +
                i;
              break;
            default:
              c = `Unknown action '${((a) => a)(e)}'`;
          }
          super(c),
            (this.signature = void 0),
            (this.transactionMessage = void 0),
            (this.transactionLogs = void 0),
            (this.signature = t),
            (this.transactionMessage = n),
            (this.transactionLogs = o || void 0);
        }
        get transactionError() {
          return {
            message: this.transactionMessage,
            logs: Array.isArray(this.transactionLogs)
              ? this.transactionLogs
              : void 0,
          };
        }
        get logs() {
          let e = this.transactionLogs;
          if (!(e != null && typeof e == "object" && "then" in e)) return e;
        }
        getLogs(e) {
          return A(this, null, function* () {
            return (
              Array.isArray(this.transactionLogs) ||
                (this.transactionLogs = new Promise((t, n) => {
                  e.getTransaction(this.signature)
                    .then((o) => {
                      if (o && o.meta && o.meta.logMessages) {
                        let s = o.meta.logMessages;
                        (this.transactionLogs = s), t(s);
                      } else n(new Error("Log messages not found"));
                    })
                    .catch(n);
                })),
              yield this.transactionLogs
            );
          });
        }
      }),
      (ky = {
        JSON_RPC_SERVER_ERROR_BLOCK_CLEANED_UP: -32001,
        JSON_RPC_SERVER_ERROR_SEND_TRANSACTION_PREFLIGHT_FAILURE: -32002,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_VERIFICATION_FAILURE:
          -32003,
        JSON_RPC_SERVER_ERROR_BLOCK_NOT_AVAILABLE: -32004,
        JSON_RPC_SERVER_ERROR_NODE_UNHEALTHY: -32005,
        JSON_RPC_SERVER_ERROR_TRANSACTION_PRECOMPILE_VERIFICATION_FAILURE:
          -32006,
        JSON_RPC_SERVER_ERROR_SLOT_SKIPPED: -32007,
        JSON_RPC_SERVER_ERROR_NO_SNAPSHOT: -32008,
        JSON_RPC_SERVER_ERROR_LONG_TERM_STORAGE_SLOT_SKIPPED: -32009,
        JSON_RPC_SERVER_ERROR_KEY_EXCLUDED_FROM_SECONDARY_INDEX: -32010,
        JSON_RPC_SERVER_ERROR_TRANSACTION_HISTORY_NOT_AVAILABLE: -32011,
        JSON_RPC_SCAN_ERROR: -32012,
        JSON_RPC_SERVER_ERROR_TRANSACTION_SIGNATURE_LEN_MISMATCH: -32013,
        JSON_RPC_SERVER_ERROR_BLOCK_STATUS_NOT_AVAILABLE_YET: -32014,
        JSON_RPC_SERVER_ERROR_UNSUPPORTED_TRANSACTION_VERSION: -32015,
        JSON_RPC_SERVER_ERROR_MIN_CONTEXT_SLOT_NOT_REACHED: -32016,
      }),
      (U = class extends Error {
        constructor({ code: e, message: t, data: n }, o) {
          super(o != null ? `${o}: ${t}` : t),
            (this.code = void 0),
            (this.data = void 0),
            (this.code = e),
            (this.data = n),
            (this.name = "SolanaJSONRPCError");
        }
      });
    (rc = f.nu64("lamportsPerSignature")),
      (oc = f.struct([
        f.u32("version"),
        f.u32("state"),
        Q("authorizedPubkey"),
        Q("nonce"),
        f.struct([rc], "feeCalculator"),
      ])),
      (gs = oc.span),
      (Kr = class r {
        constructor(e) {
          (this.authorizedPubkey = void 0),
            (this.nonce = void 0),
            (this.feeCalculator = void 0),
            (this.authorizedPubkey = e.authorizedPubkey),
            (this.nonce = e.nonce),
            (this.feeCalculator = e.feeCalculator);
        }
        static fromAccountData(e) {
          let t = oc.decode(Z(e), 0);
          return new r({
            authorizedPubkey: new B(t.authorizedPubkey),
            nonce: new B(t.nonce).toString(),
            feeCalculator: t.feeCalculator,
          });
        }
      });
    (_s = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let n = f.u32("instruction").decode(e.data),
          o;
        for (let [s, i] of Object.entries(ge))
          if (i.index == n) {
            o = s;
            break;
          }
        if (!o)
          throw new Error(
            "Instruction type incorrect; not a SystemInstruction"
          );
        return o;
      }
      static decodeCreateAccount(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { lamports: t, space: n, programId: o } = ue(ge.Create, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          newAccountPubkey: e.keys[1].pubkey,
          lamports: t,
          space: n,
          programId: new B(o),
        };
      }
      static decodeTransfer(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { lamports: t } = ue(ge.Transfer, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          toPubkey: e.keys[1].pubkey,
          lamports: t,
        };
      }
      static decodeTransferWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let {
          lamports: t,
          seed: n,
          programId: o,
        } = ue(ge.TransferWithSeed, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          basePubkey: e.keys[1].pubkey,
          toPubkey: e.keys[2].pubkey,
          lamports: t,
          seed: n,
          programId: new B(o),
        };
      }
      static decodeAllocate(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { space: t } = ue(ge.Allocate, e.data);
        return { accountPubkey: e.keys[0].pubkey, space: t };
      }
      static decodeAllocateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let {
          base: t,
          seed: n,
          space: o,
          programId: s,
        } = ue(ge.AllocateWithSeed, e.data);
        return {
          accountPubkey: e.keys[0].pubkey,
          basePubkey: new B(t),
          seed: n,
          space: o,
          programId: new B(s),
        };
      }
      static decodeAssign(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { programId: t } = ue(ge.Assign, e.data);
        return { accountPubkey: e.keys[0].pubkey, programId: new B(t) };
      }
      static decodeAssignWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 1);
        let { base: t, seed: n, programId: o } = ue(ge.AssignWithSeed, e.data);
        return {
          accountPubkey: e.keys[0].pubkey,
          basePubkey: new B(t),
          seed: n,
          programId: new B(o),
        };
      }
      static decodeCreateWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
          base: t,
          seed: n,
          lamports: o,
          space: s,
          programId: i,
        } = ue(ge.CreateWithSeed, e.data);
        return {
          fromPubkey: e.keys[0].pubkey,
          newAccountPubkey: e.keys[1].pubkey,
          basePubkey: new B(t),
          seed: n,
          lamports: o,
          space: s,
          programId: new B(i),
        };
      }
      static decodeNonceInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { authorized: t } = ue(ge.InitializeNonceAccount, e.data);
        return { noncePubkey: e.keys[0].pubkey, authorizedPubkey: new B(t) };
      }
      static decodeNonceAdvance(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ue(ge.AdvanceNonceAccount, e.data),
          { noncePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static decodeNonceWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = ue(ge.WithdrawNonceAccount, e.data);
        return {
          noncePubkey: e.keys[0].pubkey,
          toPubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[4].pubkey,
          lamports: t,
        };
      }
      static decodeNonceAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t } = ue(ge.AuthorizeNonceAccount, e.data);
        return {
          noncePubkey: e.keys[0].pubkey,
          authorizedPubkey: e.keys[1].pubkey,
          newAuthorizedPubkey: new B(t),
        };
      }
      static checkProgramId(e) {
        if (!e.equals(Be.programId))
          throw new Error(
            "invalid instruction; programId is not SystemProgram"
          );
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw new Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }),
      (ge = Object.freeze({
        Create: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        Assign: {
          index: 1,
          layout: f.struct([f.u32("instruction"), Q("programId")]),
        },
        Transfer: {
          index: 2,
          layout: f.struct([f.u32("instruction"), hn("lamports")]),
        },
        CreateWithSeed: {
          index: 3,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            qt("seed"),
            f.ns64("lamports"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AdvanceNonceAccount: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        WithdrawNonceAccount: {
          index: 5,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        InitializeNonceAccount: {
          index: 6,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        AuthorizeNonceAccount: {
          index: 7,
          layout: f.struct([f.u32("instruction"), Q("authorized")]),
        },
        Allocate: {
          index: 8,
          layout: f.struct([f.u32("instruction"), f.ns64("space")]),
        },
        AllocateWithSeed: {
          index: 9,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            qt("seed"),
            f.ns64("space"),
            Q("programId"),
          ]),
        },
        AssignWithSeed: {
          index: 10,
          layout: f.struct([
            f.u32("instruction"),
            Q("base"),
            qt("seed"),
            Q("programId"),
          ]),
        },
        TransferWithSeed: {
          index: 11,
          layout: f.struct([
            f.u32("instruction"),
            hn("lamports"),
            qt("seed"),
            Q("programId"),
          ]),
        },
        UpgradeNonceAccount: {
          index: 12,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (Be = class r {
        constructor() {}
        static createAccount(e) {
          let t = ge.Create,
            n = re(t, {
              lamports: e.lamports,
              space: e.space,
              programId: Z(e.programId.toBuffer()),
            });
          return new de({
            keys: [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !0, isWritable: !0 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static transfer(e) {
          let t, n;
          if ("basePubkey" in e) {
            let o = ge.TransferWithSeed;
            (t = re(o, {
              lamports: BigInt(e.lamports),
              seed: e.seed,
              programId: Z(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          } else {
            let o = ge.Transfer;
            (t = re(o, { lamports: BigInt(e.lamports) })),
              (n = [
                { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
                { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              ]);
          }
          return new de({ keys: n, programId: this.programId, data: t });
        }
        static assign(e) {
          let t, n;
          if ("basePubkey" in e) {
            let o = ge.AssignWithSeed;
            (t = re(o, {
              base: Z(e.basePubkey.toBuffer()),
              seed: e.seed,
              programId: Z(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let o = ge.Assign;
            (t = re(o, { programId: Z(e.programId.toBuffer()) })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new de({ keys: n, programId: this.programId, data: t });
        }
        static createAccountWithSeed(e) {
          let t = ge.CreateWithSeed,
            n = re(t, {
              base: Z(e.basePubkey.toBuffer()),
              seed: e.seed,
              lamports: e.lamports,
              space: e.space,
              programId: Z(e.programId.toBuffer()),
            }),
            o = [
              { pubkey: e.fromPubkey, isSigner: !0, isWritable: !0 },
              { pubkey: e.newAccountPubkey, isSigner: !1, isWritable: !0 },
            ];
          return (
            e.basePubkey.equals(e.fromPubkey) ||
              o.push({ pubkey: e.basePubkey, isSigner: !0, isWritable: !1 }),
            new de({ keys: o, programId: this.programId, data: n })
          );
        }
        static createNonceAccount(e) {
          let t = new fe();
          "basePubkey" in e && "seed" in e
            ? t.add(
                r.createAccountWithSeed({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  basePubkey: e.basePubkey,
                  seed: e.seed,
                  lamports: e.lamports,
                  space: gs,
                  programId: this.programId,
                })
              )
            : t.add(
                r.createAccount({
                  fromPubkey: e.fromPubkey,
                  newAccountPubkey: e.noncePubkey,
                  lamports: e.lamports,
                  space: gs,
                  programId: this.programId,
                })
              );
          let n = {
            noncePubkey: e.noncePubkey,
            authorizedPubkey: e.authorizedPubkey,
          };
          return t.add(this.nonceInitialize(n)), t;
        }
        static nonceInitialize(e) {
          let t = ge.InitializeNonceAccount,
            n = re(t, { authorized: Z(e.authorizedPubkey.toBuffer()) }),
            o = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: Dr, isSigner: !1, isWritable: !1 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: n,
            };
          return new de(o);
        }
        static nonceAdvance(e) {
          let t = ge.AdvanceNonceAccount,
            n = re(t),
            o = {
              keys: [
                { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
                { pubkey: Dr, isSigner: !1, isWritable: !1 },
                { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: n,
            };
          return new de(o);
        }
        static nonceWithdraw(e) {
          let t = ge.WithdrawNonceAccount,
            n = re(t, { lamports: e.lamports });
          return new de({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.toPubkey, isSigner: !1, isWritable: !0 },
              { pubkey: Dr, isSigner: !1, isWritable: !1 },
              { pubkey: ln, isSigner: !1, isWritable: !1 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static nonceAuthorize(e) {
          let t = ge.AuthorizeNonceAccount,
            n = re(t, { authorized: Z(e.newAuthorizedPubkey.toBuffer()) });
          return new de({
            keys: [
              { pubkey: e.noncePubkey, isSigner: !1, isWritable: !0 },
              { pubkey: e.authorizedPubkey, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: n,
          });
        }
        static allocate(e) {
          let t, n;
          if ("basePubkey" in e) {
            let o = ge.AllocateWithSeed;
            (t = re(o, {
              base: Z(e.basePubkey.toBuffer()),
              seed: e.seed,
              space: e.space,
              programId: Z(e.programId.toBuffer()),
            })),
              (n = [
                { pubkey: e.accountPubkey, isSigner: !1, isWritable: !0 },
                { pubkey: e.basePubkey, isSigner: !0, isWritable: !1 },
              ]);
          } else {
            let o = ge.Allocate;
            (t = re(o, { space: e.space })),
              (n = [{ pubkey: e.accountPubkey, isSigner: !0, isWritable: !0 }]);
          }
          return new de({ keys: n, programId: this.programId, data: t });
        }
      });
    Be.programId = new B("11111111111111111111111111111111");
    (Ty = Bt - 300),
      (ps = (() => {
        class r {
          constructor() {}
          static getMinNumSignatures(t) {
            return 2 * (Math.ceil(t / r.chunkSize) + 1 + 1);
          }
          static load(t, n, o, s, i) {
            return A(this, null, function* () {
              {
                let y = yield t.getMinimumBalanceForRentExemption(i.length),
                  d = yield t.getAccountInfo(o.publicKey, "confirmed"),
                  h = null;
                if (d !== null) {
                  if (d.executable)
                    return (
                      console.error(
                        "Program load failed, account is already executable"
                      ),
                      !1
                    );
                  d.data.length !== i.length &&
                    ((h = h || new fe()),
                    h.add(
                      Be.allocate({
                        accountPubkey: o.publicKey,
                        space: i.length,
                      })
                    )),
                    d.owner.equals(s) ||
                      ((h = h || new fe()),
                      h.add(
                        Be.assign({ accountPubkey: o.publicKey, programId: s })
                      )),
                    d.lamports < y &&
                      ((h = h || new fe()),
                      h.add(
                        Be.transfer({
                          fromPubkey: n.publicKey,
                          toPubkey: o.publicKey,
                          lamports: y - d.lamports,
                        })
                      ));
                } else h = new fe().add(Be.createAccount({ fromPubkey: n.publicKey, newAccountPubkey: o.publicKey, lamports: y > 0 ? y : 1, space: i.length, programId: s }));
                h !== null &&
                  (yield ys(t, h, [n, o], { commitment: "confirmed" }));
              }
              let c = f.struct([
                  f.u32("instruction"),
                  f.u32("offset"),
                  f.u32("bytesLength"),
                  f.u32("bytesLengthPadding"),
                  f.seq(f.u8("byte"), f.offset(f.u32(), -8), "bytes"),
                ]),
                a = r.chunkSize,
                u = 0,
                l = i,
                _ = [];
              for (; l.length > 0; ) {
                let y = l.slice(0, a),
                  d = W.Buffer.alloc(a + 16);
                c.encode(
                  {
                    instruction: 0,
                    offset: u,
                    bytes: y,
                    bytesLength: 0,
                    bytesLengthPadding: 0,
                  },
                  d
                );
                let h = new fe().add({
                  keys: [{ pubkey: o.publicKey, isSigner: !0, isWritable: !0 }],
                  programId: s,
                  data: d,
                });
                _.push(ys(t, h, [n, o], { commitment: "confirmed" })),
                  t._rpcEndpoint.includes("solana.com") && (yield $t(1e3 / 4)),
                  (u += a),
                  (l = l.slice(a));
              }
              yield Promise.all(_);
              {
                let y = f.struct([f.u32("instruction")]),
                  d = W.Buffer.alloc(y.span);
                y.encode({ instruction: 1 }, d);
                let h = new fe().add({
                    keys: [
                      { pubkey: o.publicKey, isSigner: !0, isWritable: !0 },
                      { pubkey: ln, isSigner: !1, isWritable: !1 },
                    ],
                    programId: s,
                    data: d,
                  }),
                  p = "processed",
                  b = yield t.sendTransaction(h, [n, o], {
                    preflightCommitment: p,
                  }),
                  { context: R, value: T } = yield t.confirmTransaction(
                    {
                      signature: b,
                      lastValidBlockHeight: h.lastValidBlockHeight,
                      blockhash: h.recentBlockhash,
                    },
                    p
                  );
                if (T.err)
                  throw new Error(
                    `Transaction ${b} failed (${JSON.stringify(T)})`
                  );
                for (;;) {
                  try {
                    if ((yield t.getSlot({ commitment: p })) > R.slot) break;
                  } catch {}
                  yield new Promise((N) => setTimeout(N, Math.round(nc / 2)));
                }
              }
              return !0;
            });
          }
        }
        return (r.chunkSize = Ty), r;
      })()),
      (vy = new B("BPFLoader2111111111111111111111111111111111")),
      (ms = class {
        static getMinNumSignatures(e) {
          return ps.getMinNumSignatures(e);
        }
        static load(e, t, n, o, s) {
          return ps.load(e, t, n, s, o);
        }
      });
    (xy = By()), (Da = Ly(xy)), (Pn = 32);
    (Fr = class {
      constructor(e, t, n, o, s) {
        (this.slotsPerEpoch = void 0),
          (this.leaderScheduleSlotOffset = void 0),
          (this.warmup = void 0),
          (this.firstNormalEpoch = void 0),
          (this.firstNormalSlot = void 0),
          (this.slotsPerEpoch = e),
          (this.leaderScheduleSlotOffset = t),
          (this.warmup = n),
          (this.firstNormalEpoch = o),
          (this.firstNormalSlot = s);
      }
      getEpoch(e) {
        return this.getEpochAndSlotIndex(e)[0];
      }
      getEpochAndSlotIndex(e) {
        if (e < this.firstNormalSlot) {
          let t = os(Cy(e + Pn + 1)) - os(Pn) - 1,
            n = this.getSlotsInEpoch(t),
            o = e - (n - Pn);
          return [t, o];
        } else {
          let t = e - this.firstNormalSlot,
            n = Math.floor(t / this.slotsPerEpoch),
            o = this.firstNormalEpoch + n,
            s = t % this.slotsPerEpoch;
          return [o, s];
        }
      }
      getFirstSlotInEpoch(e) {
        return e <= this.firstNormalEpoch
          ? (Math.pow(2, e) - 1) * Pn
          : (e - this.firstNormalEpoch) * this.slotsPerEpoch +
              this.firstNormalSlot;
      }
      getLastSlotInEpoch(e) {
        return this.getFirstSlotInEpoch(e) + this.getSlotsInEpoch(e) - 1;
      }
      getSlotsInEpoch(e) {
        return e < this.firstNormalEpoch
          ? Math.pow(2, e + os(Pn))
          : this.slotsPerEpoch;
      }
    }),
      (Py = globalThis.fetch),
      (Rs = class extends ba {
        constructor(e, t, n) {
          let o = (s) => {
            let i = Ra(
              s,
              K(
                {
                  autoconnect: !0,
                  max_reconnects: 5,
                  reconnect: !0,
                  reconnect_interval: 1e3,
                },
                t
              )
            );
            return (
              "socket" in i
                ? (this.underlyingSocket = i.socket)
                : (this.underlyingSocket = i),
              i
            );
          };
          super(o, e, t, n), (this.underlyingSocket = void 0);
        }
        call(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.call(...e)
            : Promise.reject(
                new Error(
                  "Tried to call a JSON-RPC method `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
        notify(...e) {
          let t = this.underlyingSocket?.readyState;
          return t === 1
            ? super.notify(...e)
            : Promise.reject(
                new Error(
                  "Tried to send a JSON-RPC notification `" +
                    e[0] +
                    "` but the socket was not `CONNECTING` or `OPEN` (`readyState` was " +
                    t +
                    ")"
                )
              );
        }
      });
    (Ua = 56),
      (Fn = class {
        constructor(e) {
          (this.key = void 0),
            (this.state = void 0),
            (this.key = e.key),
            (this.state = e.state);
        }
        isActive() {
          let e = BigInt("0xffffffffffffffff");
          return this.state.deactivationSlot === e;
        }
        static deserialize(e) {
          let t = Dy(Uy, e),
            n = e.length - Ua;
          ie(n >= 0, "lookup table is invalid"),
            ie(n % 32 === 0, "lookup table is invalid");
          let o = n / 32,
            { addresses: s } = f
              .struct([f.seq(Q(), o, "addresses")])
              .decode(e.slice(Ua));
          return {
            deactivationSlot: t.deactivationSlot,
            lastExtendedSlot: t.lastExtendedSlot,
            lastExtendedSlotStartIndex: t.lastExtendedStartIndex,
            authority:
              t.authority.length !== 0 ? new B(t.authority[0]) : void 0,
            addresses: s.map((i) => new B(i)),
          };
        }
      }),
      (Uy = {
        index: 1,
        layout: f.struct([
          f.u32("typeIndex"),
          hn("deactivationSlot"),
          f.nu64("lastExtendedSlot"),
          f.u8("lastExtendedStartIndex"),
          f.u8(),
          f.seq(Q(), f.offset(f.u8(), -1), "authority"),
        ]),
      }),
      (zy = /^[^:]+:\/\/([^:[]+|\[[^\]]+\])(:\d+)?(.*)/i);
    (Re = cn(wr(B), k(), (r) => new B(r))),
      (sc = Ir([k(), me("base64")])),
      (Bs = cn(wr(W.Buffer), sc, (r) => W.Buffer.from(r[0], "base64"))),
      (ic = 30 * 1e3);
    Fy = ac(Vt());
    (Vy = I({
      foundation: g(),
      foundationTerm: g(),
      initial: g(),
      taper: g(),
      terminal: g(),
    })),
      ($y = X(
        x(
          C(
            I({
              epoch: g(),
              effectiveSlot: g(),
              amount: g(),
              postBalance: g(),
              commission: F(C(g())),
            })
          )
        )
      )),
      (qy = x(I({ slot: g(), prioritizationFee: g() }))),
      (Wy = I({ total: g(), validator: g(), foundation: g(), epoch: g() })),
      (Gy = I({
        epoch: g(),
        slotIndex: g(),
        slotsInEpoch: g(),
        absoluteSlot: g(),
        blockHeight: F(g()),
        transactionCount: F(g()),
      })),
      (Hy = I({
        slotsPerEpoch: g(),
        leaderScheduleSlotOffset: g(),
        warmup: rt(),
        firstNormalEpoch: g(),
        firstNormalSlot: g(),
      })),
      (jy = Fo(k(), x(g()))),
      (jt = C(Pe([I({}), k()]))),
      (Yy = I({ err: jt })),
      (Xy = me("receivedSignature")),
      (Zy = I({ "solana-core": k(), "feature-set": F(g()) })),
      (Jy = I({ program: k(), programId: Re, parsed: Vt() })),
      (Qy = I({ programId: Re, accounts: x(Re), data: k() })),
      (Ma = we(
        I({
          err: C(Pe([I({}), k()])),
          logs: C(x(k())),
          accounts: F(
            C(
              x(
                C(
                  I({
                    executable: rt(),
                    owner: k(),
                    lamports: g(),
                    data: x(k()),
                    rentEpoch: F(g()),
                  })
                )
              )
            )
          ),
          unitsConsumed: F(g()),
          returnData: F(
            C(I({ programId: k(), data: Ir([k(), me("base64")]) }))
          ),
          innerInstructions: F(
            C(x(I({ index: g(), instructions: x(Pe([Jy, Qy])) })))
          ),
        })
      )),
      (eg = we(
        I({
          byIdentity: Fo(k(), x(g())),
          range: I({ firstSlot: g(), lastSlot: g() }),
        })
      ));
    (og = X(Vy)),
      (sg = X(Wy)),
      (ig = X(qy)),
      (ag = X(Gy)),
      (cg = X(Hy)),
      (ug = X(jy)),
      (fg = X(g())),
      (dg = we(
        I({
          total: g(),
          circulating: g(),
          nonCirculating: g(),
          nonCirculatingAccounts: x(Re),
        })
      )),
      (bs = I({
        amount: k(),
        uiAmount: C(g()),
        decimals: g(),
        uiAmountString: F(k()),
      })),
      (lg = we(
        x(
          I({
            address: Re,
            amount: k(),
            uiAmount: C(g()),
            decimals: g(),
            uiAmountString: F(k()),
          })
        )
      )),
      (hg = we(
        x(
          I({
            pubkey: Re,
            account: I({
              executable: rt(),
              owner: Re,
              lamports: g(),
              data: Bs,
              rentEpoch: g(),
            }),
          })
        )
      )),
      (Es = I({ program: k(), parsed: Vt(), space: g() })),
      (yg = we(
        x(
          I({
            pubkey: Re,
            account: I({
              executable: rt(),
              owner: Re,
              lamports: g(),
              data: Es,
              rentEpoch: g(),
            }),
          })
        )
      )),
      (gg = we(x(I({ lamports: g(), address: Re })))),
      (Vn = I({
        executable: rt(),
        owner: Re,
        lamports: g(),
        data: Bs,
        rentEpoch: g(),
      })),
      (_g = I({ pubkey: Re, account: Vn })),
      (pg = cn(Pe([wr(W.Buffer), Es]), Pe([sc, Es]), (r) =>
        Array.isArray(r) ? L(r, Bs) : r
      )),
      (Ss = I({
        executable: rt(),
        owner: Re,
        lamports: g(),
        data: pg,
        rentEpoch: g(),
      })),
      (mg = I({ pubkey: Re, account: Ss })),
      (Rg = I({
        state: Pe([
          me("active"),
          me("inactive"),
          me("activating"),
          me("deactivating"),
        ]),
        active: g(),
        inactive: g(),
      })),
      (bg = X(
        x(
          I({
            signature: k(),
            slot: g(),
            err: jt,
            memo: C(k()),
            blockTime: F(C(g())),
          })
        )
      )),
      (Eg = X(
        x(
          I({
            signature: k(),
            slot: g(),
            err: jt,
            memo: C(k()),
            blockTime: F(C(g())),
          })
        )
      )),
      (Sg = I({ subscription: g(), result: Yr(Vn) })),
      (Ag = I({ pubkey: Re, account: Vn })),
      (wg = I({ subscription: g(), result: Yr(Ag) })),
      (Ig = I({ parent: g(), slot: g(), root: g() })),
      (Og = I({ subscription: g(), result: Ig })),
      (Ng = Pe([
        I({
          type: Pe([
            me("firstShredReceived"),
            me("completed"),
            me("optimisticConfirmation"),
            me("root"),
          ]),
          slot: g(),
          timestamp: g(),
        }),
        I({ type: me("createdBank"), parent: g(), slot: g(), timestamp: g() }),
        I({
          type: me("frozen"),
          slot: g(),
          timestamp: g(),
          stats: I({
            numTransactionEntries: g(),
            numSuccessfulTransactions: g(),
            numFailedTransactions: g(),
            maxTransactionsPerEntry: g(),
          }),
        }),
        I({ type: me("dead"), slot: g(), timestamp: g(), err: k() }),
      ])),
      (kg = I({ subscription: g(), result: Ng })),
      (Tg = I({ subscription: g(), result: Yr(Pe([Yy, Xy])) })),
      (vg = I({ subscription: g(), result: g() })),
      (Lg = I({
        pubkey: k(),
        gossip: C(k()),
        tpu: C(k()),
        rpc: C(k()),
        version: C(k()),
      })),
      (Ka = I({
        votePubkey: k(),
        nodePubkey: k(),
        activatedStake: g(),
        epochVoteAccount: rt(),
        epochCredits: x(Ir([g(), g(), g()])),
        commission: g(),
        lastVote: g(),
        rootSlot: C(g()),
      })),
      (Bg = X(I({ current: x(Ka), delinquent: x(Ka) }))),
      (xg = Pe([me("processed"), me("confirmed"), me("finalized")])),
      (Cg = I({
        slot: g(),
        confirmations: C(g()),
        err: jt,
        confirmationStatus: F(xg),
      })),
      (Pg = we(x(C(Cg)))),
      (Dg = X(g())),
      (cc = I({
        accountKey: Re,
        writableIndexes: x(g()),
        readonlyIndexes: x(g()),
      })),
      (xs = I({
        signatures: x(k()),
        message: I({
          accountKeys: x(k()),
          header: I({
            numRequiredSignatures: g(),
            numReadonlySignedAccounts: g(),
            numReadonlyUnsignedAccounts: g(),
          }),
          instructions: x(
            I({ accounts: x(g()), data: k(), programIdIndex: g() })
          ),
          recentBlockhash: k(),
          addressTableLookups: F(x(cc)),
        }),
      })),
      (uc = I({
        pubkey: Re,
        signer: rt(),
        writable: rt(),
        source: F(Pe([me("transaction"), me("lookupTable")])),
      })),
      (fc = I({ accountKeys: x(uc), signatures: x(k()) })),
      (dc = I({ parsed: Vt(), program: k(), programId: Re })),
      (lc = I({ accounts: x(Re), data: k(), programId: Re })),
      (Ug = Pe([lc, dc])),
      (zg = Pe([
        I({ parsed: Vt(), program: k(), programId: k() }),
        I({ accounts: x(k()), data: k(), programId: k() }),
      ])),
      (hc = cn(Ug, zg, (r) => ("accounts" in r ? L(r, lc) : L(r, dc)))),
      (yc = I({
        signatures: x(k()),
        message: I({
          accountKeys: x(uc),
          instructions: x(hc),
          recentBlockhash: k(),
          addressTableLookups: F(C(x(cc))),
        }),
      })),
      (Vr = I({
        accountIndex: g(),
        mint: k(),
        owner: F(k()),
        programId: F(k()),
        uiTokenAmount: bs,
      })),
      (gc = I({ writable: x(Re), readonly: x(Re) })),
      (Xr = I({
        err: jt,
        fee: g(),
        innerInstructions: F(
          C(
            x(
              I({
                index: g(),
                instructions: x(
                  I({ accounts: x(g()), data: k(), programIdIndex: g() })
                ),
              })
            )
          )
        ),
        preBalances: x(g()),
        postBalances: x(g()),
        logMessages: F(C(x(k()))),
        preTokenBalances: F(C(x(Vr))),
        postTokenBalances: F(C(x(Vr))),
        loadedAddresses: F(gc),
        computeUnitsConsumed: F(g()),
        costUnits: F(g()),
      })),
      (Cs = I({
        err: jt,
        fee: g(),
        innerInstructions: F(C(x(I({ index: g(), instructions: x(hc) })))),
        preBalances: x(g()),
        postBalances: x(g()),
        logMessages: F(C(x(k()))),
        preTokenBalances: F(C(x(Vr))),
        postTokenBalances: F(C(x(Vr))),
        loadedAddresses: F(gc),
        computeUnitsConsumed: F(g()),
        costUnits: F(g()),
      })),
      (pn = Pe([me(0), me("legacy")])),
      (Yt = I({
        pubkey: k(),
        lamports: g(),
        postBalance: C(g()),
        rewardType: C(k()),
        commission: F(C(g())),
      })),
      (Mg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            transactions: x(
              I({ transaction: xs, meta: C(Xr), version: F(pn) })
            ),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      (Kg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      (Fg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            transactions: x(
              I({ transaction: fc, meta: C(Xr), version: F(pn) })
            ),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      (Vg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            transactions: x(
              I({ transaction: yc, meta: C(Cs), version: F(pn) })
            ),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      ($g = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            transactions: x(
              I({ transaction: fc, meta: C(Cs), version: F(pn) })
            ),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      (qg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            rewards: F(x(Yt)),
            blockTime: C(g()),
            blockHeight: C(g()),
          })
        )
      )),
      (Wg = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            transactions: x(I({ transaction: xs, meta: C(Xr) })),
            rewards: F(x(Yt)),
            blockTime: C(g()),
          })
        )
      )),
      (Fa = X(
        C(
          I({
            blockhash: k(),
            previousBlockhash: k(),
            parentSlot: g(),
            signatures: x(k()),
            blockTime: C(g()),
          })
        )
      )),
      (is = X(
        C(
          I({
            slot: g(),
            meta: C(Xr),
            blockTime: F(C(g())),
            transaction: xs,
            version: F(pn),
          })
        )
      )),
      (Pr = X(
        C(
          I({
            slot: g(),
            transaction: yc,
            meta: C(Cs),
            blockTime: F(C(g())),
            version: F(pn),
          })
        )
      )),
      (Gg = we(I({ blockhash: k(), lastValidBlockHeight: g() }))),
      (Hg = we(rt())),
      (jg = I({
        slot: g(),
        numTransactions: g(),
        numSlots: g(),
        samplePeriodSecs: g(),
      })),
      (Yg = X(x(jg))),
      (Xg = we(C(I({ feeCalculator: I({ lamportsPerSignature: g() }) })))),
      (Zg = X(k())),
      (Jg = X(k())),
      (Qg = I({ err: jt, logs: x(k()), signature: k() })),
      (e_ = I({ result: Yr(Qg), subscription: g() })),
      (t_ = { "solana-client": "js/1.0.0-maintenance" }),
      (As = class {
        constructor(e, t) {
          (this._commitment = void 0),
            (this._confirmTransactionInitialTimeout = void 0),
            (this._rpcEndpoint = void 0),
            (this._rpcWsEndpoint = void 0),
            (this._rpcClient = void 0),
            (this._rpcRequest = void 0),
            (this._rpcBatchRequest = void 0),
            (this._rpcWebSocket = void 0),
            (this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketHeartbeat = null),
            (this._rpcWebSocketIdleTimeout = null),
            (this._rpcWebSocketGeneration = 0),
            (this._disableBlockhashCaching = !1),
            (this._pollingBlockhash = !1),
            (this._blockhashInfo = {
              latestBlockhash: null,
              lastFetch: 0,
              transactionSignatures: [],
              simulatedSignatures: [],
            }),
            (this._nextClientSubscriptionId = 0),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId = {}),
            (this._subscriptionHashByClientSubscriptionId = {}),
            (this._subscriptionStateChangeCallbacksByHash = {}),
            (this._subscriptionCallbacksByServerSubscriptionId = {}),
            (this._subscriptionsByHash = {}),
            (this._subscriptionsAutoDisposedByRpc = new Set()),
            (this.getBlockHeight = (() => {
              let u = {};
              return (l) =>
                A(this, null, function* () {
                  let { commitment: _, config: y } = ye(l),
                    d = this._buildArgs([], _, void 0, y),
                    h = Da(d);
                  return (
                    (u[h] =
                      u[h] ??
                      A(this, null, function* () {
                        try {
                          let p = yield this._rpcRequest("getBlockHeight", d),
                            b = L(p, X(g()));
                          if ("error" in b)
                            throw new U(
                              b.error,
                              "failed to get block height information"
                            );
                          return b.result;
                        } finally {
                          delete u[h];
                        }
                      })),
                    yield u[h]
                  );
                });
            })());
          let n, o, s, i, c, a;
          t && typeof t == "string"
            ? (this._commitment = t)
            : t &&
              ((this._commitment = t.commitment),
              (this._confirmTransactionInitialTimeout =
                t.confirmTransactionInitialTimeout),
              (n = t.wsEndpoint),
              (o = t.httpHeaders),
              (s = t.fetch),
              (i = t.fetchMiddleware),
              (c = t.disableRetryOnRateLimit),
              (a = t.httpAgent)),
            (this._rpcEndpoint = Ky(e)),
            (this._rpcWsEndpoint = n || My(e)),
            (this._rpcClient = tg(e, o, s, i, c, a)),
            (this._rpcRequest = ng(this._rpcClient)),
            (this._rpcBatchRequest = rg(this._rpcClient)),
            (this._rpcWebSocket = new Rs(this._rpcWsEndpoint, {
              autoconnect: !1,
              max_reconnects: 1 / 0,
            })),
            this._rpcWebSocket.on("open", this._wsOnOpen.bind(this)),
            this._rpcWebSocket.on("error", this._wsOnError.bind(this)),
            this._rpcWebSocket.on("close", this._wsOnClose.bind(this)),
            this._rpcWebSocket.on(
              "accountNotification",
              this._wsOnAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "programNotification",
              this._wsOnProgramAccountNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotNotification",
              this._wsOnSlotNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "slotsUpdatesNotification",
              this._wsOnSlotUpdatesNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "signatureNotification",
              this._wsOnSignatureNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "rootNotification",
              this._wsOnRootNotification.bind(this)
            ),
            this._rpcWebSocket.on(
              "logsNotification",
              this._wsOnLogsNotification.bind(this)
            );
        }
        get commitment() {
          return this._commitment;
        }
        get rpcEndpoint() {
          return this._rpcEndpoint;
        }
        getBalanceAndContext(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgs([e.toBase58()], n, void 0, o),
              i = yield this._rpcRequest("getBalance", s),
              c = L(i, we(g()));
            if ("error" in c)
              throw new U(c.error, `failed to get balance for ${e.toBase58()}`);
            return c.result;
          });
        }
        getBalance(e, t) {
          return A(this, null, function* () {
            return yield this.getBalanceAndContext(e, t)
              .then((n) => n.value)
              .catch((n) => {
                throw new Error(
                  "failed to get balance of account " + e.toBase58() + ": " + n
                );
              });
          });
        }
        getBlockTime(e) {
          return A(this, null, function* () {
            let t = yield this._rpcRequest("getBlockTime", [e]),
              n = L(t, X(C(g())));
            if ("error" in n)
              throw new U(n.error, `failed to get block time for slot ${e}`);
            return n.result;
          });
        }
        getMinimumLedgerSlot() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("minimumLedgerSlot", []),
              t = L(e, X(g()));
            if ("error" in t)
              throw new U(t.error, "failed to get minimum ledger slot");
            return t.result;
          });
        }
        getFirstAvailableBlock() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getFirstAvailableBlock", []),
              t = L(e, fg);
            if ("error" in t)
              throw new U(t.error, "failed to get first available block");
            return t.result;
          });
        }
        getSupply(e) {
          return A(this, null, function* () {
            let t = {};
            typeof e == "string"
              ? (t = { commitment: e })
              : e
              ? (t = H(K({}, e), {
                  commitment: (e && e.commitment) || this.commitment,
                }))
              : (t = { commitment: this.commitment });
            let n = yield this._rpcRequest("getSupply", [t]),
              o = L(n, dg);
            if ("error" in o) throw new U(o.error, "failed to get supply");
            return o.result;
          });
        }
        getTokenSupply(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              o = yield this._rpcRequest("getTokenSupply", n),
              s = L(o, we(bs));
            if ("error" in s)
              throw new U(s.error, "failed to get token supply");
            return s.result;
          });
        }
        getTokenAccountBalance(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              o = yield this._rpcRequest("getTokenAccountBalance", n),
              s = L(o, we(bs));
            if ("error" in s)
              throw new U(s.error, "failed to get token account balance");
            return s.result;
          });
        }
        getTokenAccountsByOwner(e, t, n) {
          return A(this, null, function* () {
            let { commitment: o, config: s } = ye(n),
              i = [e.toBase58()];
            "mint" in t
              ? i.push({ mint: t.mint.toBase58() })
              : i.push({ programId: t.programId.toBase58() });
            let c = this._buildArgs(i, o, "base64", s),
              a = yield this._rpcRequest("getTokenAccountsByOwner", c),
              u = L(a, hg);
            if ("error" in u)
              throw new U(
                u.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return u.result;
          });
        }
        getParsedTokenAccountsByOwner(e, t, n) {
          return A(this, null, function* () {
            let o = [e.toBase58()];
            "mint" in t
              ? o.push({ mint: t.mint.toBase58() })
              : o.push({ programId: t.programId.toBase58() });
            let s = this._buildArgs(o, n, "jsonParsed"),
              i = yield this._rpcRequest("getTokenAccountsByOwner", s),
              c = L(i, yg);
            if ("error" in c)
              throw new U(
                c.error,
                `failed to get token accounts owned by account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getLargestAccounts(e) {
          return A(this, null, function* () {
            let t = H(K({}, e), {
                commitment: (e && e.commitment) || this.commitment,
              }),
              n = t.filter || t.commitment ? [t] : [],
              o = yield this._rpcRequest("getLargestAccounts", n),
              s = L(o, gg);
            if ("error" in s)
              throw new U(s.error, "failed to get largest accounts");
            return s.result;
          });
        }
        getTokenLargestAccounts(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgs([e.toBase58()], t),
              o = yield this._rpcRequest("getTokenLargestAccounts", n),
              s = L(o, lg);
            if ("error" in s)
              throw new U(s.error, "failed to get token largest accounts");
            return s.result;
          });
        }
        getAccountInfoAndContext(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgs([e.toBase58()], n, "base64", o),
              i = yield this._rpcRequest("getAccountInfo", s),
              c = L(i, we(C(Vn)));
            if ("error" in c)
              throw new U(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getParsedAccountInfo(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgs([e.toBase58()], n, "jsonParsed", o),
              i = yield this._rpcRequest("getAccountInfo", s),
              c = L(i, we(C(Ss)));
            if ("error" in c)
              throw new U(
                c.error,
                `failed to get info about account ${e.toBase58()}`
              );
            return c.result;
          });
        }
        getAccountInfo(e, t) {
          return A(this, null, function* () {
            try {
              return (yield this.getAccountInfoAndContext(e, t)).value;
            } catch (n) {
              throw new Error(
                "failed to get info about account " + e.toBase58() + ": " + n
              );
            }
          });
        }
        getMultipleParsedAccounts(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = e.map((u) => u.toBase58()),
              i = this._buildArgs([s], n, "jsonParsed", o),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = L(c, we(x(C(Ss))));
            if ("error" in a)
              throw new U(a.error, `failed to get info for accounts ${s}`);
            return a.result;
          });
        }
        getMultipleAccountsInfoAndContext(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = e.map((u) => u.toBase58()),
              i = this._buildArgs([s], n, "base64", o),
              c = yield this._rpcRequest("getMultipleAccounts", i),
              a = L(c, we(x(C(Vn))));
            if ("error" in a)
              throw new U(a.error, `failed to get info for accounts ${s}`);
            return a.result;
          });
        }
        getMultipleAccountsInfo(e, t) {
          return A(this, null, function* () {
            return (yield this.getMultipleAccountsInfoAndContext(e, t)).value;
          });
        }
        getStakeActivation(e, t, n) {
          return A(this, null, function* () {
            let { commitment: o, config: s } = ye(t),
              i = this._buildArgs(
                [e.toBase58()],
                o,
                void 0,
                H(K({}, s), { epoch: n ?? s?.epoch })
              ),
              c = yield this._rpcRequest("getStakeActivation", i),
              a = L(c, X(Rg));
            if ("error" in a)
              throw new U(
                a.error,
                `failed to get Stake Activation ${e.toBase58()}`
              );
            return a.result;
          });
        }
        getProgramAccounts(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              _ = o || {},
              { encoding: s } = _,
              i = et(_, ["encoding"]),
              c = this._buildArgs(
                [e.toBase58()],
                n,
                s || "base64",
                K(K({}, i), i.filters ? { filters: za(i.filters) } : null)
              ),
              a = yield this._rpcRequest("getProgramAccounts", c),
              u = x(_g),
              l = i.withContext === !0 ? L(a, we(u)) : L(a, X(u));
            if ("error" in l)
              throw new U(
                l.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return l.result;
          });
        }
        getParsedProgramAccounts(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgs([e.toBase58()], n, "jsonParsed", o),
              i = yield this._rpcRequest("getProgramAccounts", s),
              c = L(i, X(x(mg)));
            if ("error" in c)
              throw new U(
                c.error,
                `failed to get accounts owned by program ${e.toBase58()}`
              );
            return c.result;
          });
        }
        confirmTransaction(e, t) {
          return A(this, null, function* () {
            let n;
            if (typeof e == "string") n = e;
            else {
              let s = e;
              if (s.abortSignal?.aborted)
                return Promise.reject(s.abortSignal.reason);
              n = s.signature;
            }
            let o;
            try {
              o = Te.default.decode(n);
            } catch {
              throw new Error("signature must be base58 encoded: " + n);
            }
            return (
              ie(o.length === 64, "signature has invalid length"),
              typeof e == "string"
                ? yield this.confirmTransactionUsingLegacyTimeoutStrategy({
                    commitment: t || this.commitment,
                    signature: n,
                  })
                : "lastValidBlockHeight" in e
                ? yield this.confirmTransactionUsingBlockHeightExceedanceStrategy(
                    { commitment: t || this.commitment, strategy: e }
                  )
                : yield this.confirmTransactionUsingDurableNonceStrategy({
                    commitment: t || this.commitment,
                    strategy: e,
                  })
            );
          });
        }
        getCancellationPromise(e) {
          return new Promise((t, n) => {
            e != null &&
              (e.aborted
                ? n(e.reason)
                : e.addEventListener("abort", () => {
                    n(e.reason);
                  }));
          });
        }
        getTransactionConfirmationPromise({ commitment: e, signature: t }) {
          let n,
            o,
            s = !1,
            i = new Promise((a, u) => {
              try {
                n = this.onSignature(
                  t,
                  (_, y) => {
                    n = void 0;
                    let d = { context: y, value: _ };
                    a({ __type: Rt.PROCESSED, response: d });
                  },
                  e
                );
                let l = new Promise((_) => {
                  n == null
                    ? _()
                    : (o = this._onSubscriptionStateChange(n, (y) => {
                        y === "subscribed" && _();
                      }));
                });
                A(this, null, function* () {
                  if ((yield l, s)) return;
                  let _ = yield this.getSignatureStatus(t);
                  if (s || _ == null) return;
                  let { context: y, value: d } = _;
                  if (d != null)
                    if (d?.err) u(d.err);
                    else {
                      switch (e) {
                        case "confirmed":
                        case "single":
                        case "singleGossip": {
                          if (d.confirmationStatus === "processed") return;
                          break;
                        }
                        case "finalized":
                        case "max":
                        case "root": {
                          if (
                            d.confirmationStatus === "processed" ||
                            d.confirmationStatus === "confirmed"
                          )
                            return;
                          break;
                        }
                        case "processed":
                        case "recent":
                      }
                      (s = !0),
                        a({
                          __type: Rt.PROCESSED,
                          response: { context: y, value: d },
                        });
                    }
                });
              } catch (l) {
                u(l);
              }
            });
          return {
            abortConfirmation: () => {
              o && (o(), (o = void 0)),
                n != null && (this.removeSignatureListener(n), (n = void 0));
            },
            confirmationPromise: i,
          };
        }
        confirmTransactionUsingBlockHeightExceedanceStrategy(s) {
          return A(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                lastValidBlockHeight: n,
                signature: o,
              },
            }) {
              let i = !1,
                c = new Promise((y) => {
                  let d = () =>
                    A(this, null, function* () {
                      try {
                        return yield this.getBlockHeight(e);
                      } catch {
                        return -1;
                      }
                    });
                  A(this, null, function* () {
                    let h = yield d();
                    if (!i) {
                      for (; h <= n; )
                        if ((yield $t(1e3), i || ((h = yield d()), i))) return;
                      y({ __type: Rt.BLOCKHEIGHT_EXCEEDED });
                    }
                  });
                }),
                { abortConfirmation: a, confirmationPromise: u } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: o,
                  }),
                l = this.getCancellationPromise(t),
                _;
              try {
                let y = yield Promise.race([l, u, c]);
                if (y.__type === Rt.PROCESSED) _ = y.response;
                else throw new Mn(o);
              } finally {
                (i = !0), a();
              }
              return _;
            }
          );
        }
        confirmTransactionUsingDurableNonceStrategy(c) {
          return A(
            this,
            arguments,
            function* ({
              commitment: e,
              strategy: {
                abortSignal: t,
                minContextSlot: n,
                nonceAccountPubkey: o,
                nonceValue: s,
                signature: i,
              },
            }) {
              let a = !1,
                u = new Promise((h) => {
                  let p = s,
                    b = null,
                    R = () =>
                      A(this, null, function* () {
                        try {
                          let { context: T, value: N } =
                            yield this.getNonceAndContext(o, {
                              commitment: e,
                              minContextSlot: n,
                            });
                          return (b = T.slot), N?.nonce;
                        } catch {
                          return p;
                        }
                      });
                  A(this, null, function* () {
                    if (((p = yield R()), !a))
                      for (;;) {
                        if (s !== p) {
                          h({
                            __type: Rt.NONCE_INVALID,
                            slotInWhichNonceDidAdvance: b,
                          });
                          return;
                        }
                        if ((yield $t(2e3), a || ((p = yield R()), a))) return;
                      }
                  });
                }),
                { abortConfirmation: l, confirmationPromise: _ } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: i,
                  }),
                y = this.getCancellationPromise(t),
                d;
              try {
                let h = yield Promise.race([y, _, u]);
                if (h.__type === Rt.PROCESSED) d = h.response;
                else {
                  let p;
                  for (;;) {
                    let b = yield this.getSignatureStatus(i);
                    if (b == null) break;
                    if (b.context.slot < (h.slotInWhichNonceDidAdvance ?? n)) {
                      yield $t(400);
                      continue;
                    }
                    p = b;
                    break;
                  }
                  if (p?.value) {
                    let b = e || "finalized",
                      { confirmationStatus: R } = p.value;
                    switch (b) {
                      case "processed":
                      case "recent":
                        if (
                          R !== "processed" &&
                          R !== "confirmed" &&
                          R !== "finalized"
                        )
                          throw new Lt(i);
                        break;
                      case "confirmed":
                      case "single":
                      case "singleGossip":
                        if (R !== "confirmed" && R !== "finalized")
                          throw new Lt(i);
                        break;
                      case "finalized":
                      case "max":
                      case "root":
                        if (R !== "finalized") throw new Lt(i);
                        break;
                      default:
                    }
                    d = { context: p.context, value: { err: p.value.err } };
                  } else throw new Lt(i);
                }
              } finally {
                (a = !0), l();
              }
              return d;
            }
          );
        }
        confirmTransactionUsingLegacyTimeoutStrategy(n) {
          return A(
            this,
            arguments,
            function* ({ commitment: e, signature: t }) {
              let o,
                s = new Promise((u) => {
                  let l = this._confirmTransactionInitialTimeout || 6e4;
                  switch (e) {
                    case "processed":
                    case "recent":
                    case "single":
                    case "confirmed":
                    case "singleGossip": {
                      l = this._confirmTransactionInitialTimeout || 3e4;
                      break;
                    }
                  }
                  o = setTimeout(
                    () => u({ __type: Rt.TIMED_OUT, timeoutMs: l }),
                    l
                  );
                }),
                { abortConfirmation: i, confirmationPromise: c } =
                  this.getTransactionConfirmationPromise({
                    commitment: e,
                    signature: t,
                  }),
                a;
              try {
                let u = yield Promise.race([c, s]);
                if (u.__type === Rt.PROCESSED) a = u.response;
                else throw new Kn(t, u.timeoutMs / 1e3);
              } finally {
                clearTimeout(o), i();
              }
              return a;
            }
          );
        }
        getClusterNodes() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getClusterNodes", []),
              t = L(e, X(x(Lg)));
            if ("error" in t)
              throw new U(t.error, "failed to get cluster nodes");
            return t.result;
          });
        }
        getVoteAccounts(e) {
          return A(this, null, function* () {
            let t = this._buildArgs([], e),
              n = yield this._rpcRequest("getVoteAccounts", t),
              o = L(n, Bg);
            if ("error" in o)
              throw new U(o.error, "failed to get vote accounts");
            return o.result;
          });
        }
        getSlot(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, void 0, n),
              s = yield this._rpcRequest("getSlot", o),
              i = L(s, X(g()));
            if ("error" in i) throw new U(i.error, "failed to get slot");
            return i.result;
          });
        }
        getSlotLeader(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, void 0, n),
              s = yield this._rpcRequest("getSlotLeader", o),
              i = L(s, X(k()));
            if ("error" in i) throw new U(i.error, "failed to get slot leader");
            return i.result;
          });
        }
        getSlotLeaders(e, t) {
          return A(this, null, function* () {
            let n = [e, t],
              o = yield this._rpcRequest("getSlotLeaders", n),
              s = L(o, X(x(Re)));
            if ("error" in s)
              throw new U(s.error, "failed to get slot leaders");
            return s.result;
          });
        }
        getSignatureStatus(e, t) {
          return A(this, null, function* () {
            let { context: n, value: o } = yield this.getSignatureStatuses(
              [e],
              t
            );
            ie(o.length === 1);
            let s = o[0];
            return { context: n, value: s };
          });
        }
        getSignatureStatuses(e, t) {
          return A(this, null, function* () {
            let n = [e];
            t && n.push(t);
            let o = yield this._rpcRequest("getSignatureStatuses", n),
              s = L(o, Pg);
            if ("error" in s)
              throw new U(s.error, "failed to get signature status");
            return s.result;
          });
        }
        getTransactionCount(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, void 0, n),
              s = yield this._rpcRequest("getTransactionCount", o),
              i = L(s, X(g()));
            if ("error" in i)
              throw new U(i.error, "failed to get transaction count");
            return i.result;
          });
        }
        getTotalSupply(e) {
          return A(this, null, function* () {
            return (yield this.getSupply({
              commitment: e,
              excludeNonCirculatingAccountsList: !0,
            })).value.total;
          });
        }
        getInflationGovernor(e) {
          return A(this, null, function* () {
            let t = this._buildArgs([], e),
              n = yield this._rpcRequest("getInflationGovernor", t),
              o = L(n, og);
            if ("error" in o) throw new U(o.error, "failed to get inflation");
            return o.result;
          });
        }
        getInflationReward(e, t, n) {
          return A(this, null, function* () {
            let { commitment: o, config: s } = ye(n),
              i = this._buildArgs(
                [e.map((u) => u.toBase58())],
                o,
                void 0,
                H(K({}, s), { epoch: t ?? s?.epoch })
              ),
              c = yield this._rpcRequest("getInflationReward", i),
              a = L(c, $y);
            if ("error" in a)
              throw new U(a.error, "failed to get inflation reward");
            return a.result;
          });
        }
        getInflationRate() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getInflationRate", []),
              t = L(e, sg);
            if ("error" in t)
              throw new U(t.error, "failed to get inflation rate");
            return t.result;
          });
        }
        getEpochInfo(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, void 0, n),
              s = yield this._rpcRequest("getEpochInfo", o),
              i = L(s, ag);
            if ("error" in i) throw new U(i.error, "failed to get epoch info");
            return i.result;
          });
        }
        getEpochSchedule() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getEpochSchedule", []),
              t = L(e, cg);
            if ("error" in t)
              throw new U(t.error, "failed to get epoch schedule");
            let n = t.result;
            return new Fr(
              n.slotsPerEpoch,
              n.leaderScheduleSlotOffset,
              n.warmup,
              n.firstNormalEpoch,
              n.firstNormalSlot
            );
          });
        }
        getLeaderSchedule() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getLeaderSchedule", []),
              t = L(e, ug);
            if ("error" in t)
              throw new U(t.error, "failed to get leader schedule");
            return t.result;
          });
        }
        getMinimumBalanceForRentExemption(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgs([e], t),
              o = yield this._rpcRequest(
                "getMinimumBalanceForRentExemption",
                n
              ),
              s = L(o, Dg);
            return "error" in s
              ? (console.warn(
                  "Unable to fetch minimum balance for rent exemption"
                ),
                0)
              : s.result;
          });
        }
        getRecentBlockhashAndContext(e) {
          return A(this, null, function* () {
            let {
              context: t,
              value: { blockhash: n },
            } = yield this.getLatestBlockhashAndContext(e);
            return {
              context: t,
              value: {
                blockhash: n,
                feeCalculator: {
                  get lamportsPerSignature() {
                    throw new Error(
                      "The capability to fetch `lamportsPerSignature` using the `getRecentBlockhash` API is no longer offered by the network. Use the `getFeeForMessage` API to obtain the fee for a given message."
                    );
                  },
                  toJSON() {
                    return {};
                  },
                },
              },
            };
          });
        }
        getRecentPerformanceSamples(e) {
          return A(this, null, function* () {
            let t = yield this._rpcRequest(
                "getRecentPerformanceSamples",
                e ? [e] : []
              ),
              n = L(t, Yg);
            if ("error" in n)
              throw new U(n.error, "failed to get recent performance samples");
            return n.result;
          });
        }
        getFeeCalculatorForBlockhash(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgs([e], t),
              o = yield this._rpcRequest("getFeeCalculatorForBlockhash", n),
              s = L(o, Xg);
            if ("error" in s)
              throw new U(s.error, "failed to get fee calculator");
            let { context: i, value: c } = s.result;
            return { context: i, value: c !== null ? c.feeCalculator : null };
          });
        }
        getFeeForMessage(e, t) {
          return A(this, null, function* () {
            let n = Z(e.serialize()).toString("base64"),
              o = this._buildArgs([n], t),
              s = yield this._rpcRequest("getFeeForMessage", o),
              i = L(s, we(C(g())));
            if ("error" in i)
              throw new U(i.error, "failed to get fee for message");
            if (i.result === null) throw new Error("invalid blockhash");
            return i.result;
          });
        }
        getRecentPrioritizationFees(e) {
          return A(this, null, function* () {
            let t = e?.lockedWritableAccounts?.map((i) => i.toBase58()),
              n = t?.length ? [t] : [],
              o = yield this._rpcRequest("getRecentPrioritizationFees", n),
              s = L(o, ig);
            if ("error" in s)
              throw new U(s.error, "failed to get recent prioritization fees");
            return s.result;
          });
        }
        getRecentBlockhash(e) {
          return A(this, null, function* () {
            try {
              return (yield this.getRecentBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhash(e) {
          return A(this, null, function* () {
            try {
              return (yield this.getLatestBlockhashAndContext(e)).value;
            } catch (t) {
              throw new Error("failed to get recent blockhash: " + t);
            }
          });
        }
        getLatestBlockhashAndContext(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, void 0, n),
              s = yield this._rpcRequest("getLatestBlockhash", o),
              i = L(s, Gg);
            if ("error" in i)
              throw new U(i.error, "failed to get latest blockhash");
            return i.result;
          });
        }
        isBlockhashValid(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgs([e], n, void 0, o),
              i = yield this._rpcRequest("isBlockhashValid", s),
              c = L(i, Hg);
            if ("error" in c)
              throw new U(
                c.error,
                "failed to determine if the blockhash `" + e + "`is valid"
              );
            return c.result;
          });
        }
        getVersion() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getVersion", []),
              t = L(e, X(Zy));
            if ("error" in t) throw new U(t.error, "failed to get version");
            return t.result;
          });
        }
        getGenesisHash() {
          return A(this, null, function* () {
            let e = yield this._rpcRequest("getGenesisHash", []),
              t = L(e, X(k()));
            if ("error" in t)
              throw new U(t.error, "failed to get genesis hash");
            return t.result;
          });
        }
        getBlock(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgsAtLeastConfirmed([e], n, void 0, o),
              i = yield this._rpcRequest("getBlock", s);
            try {
              switch (o?.transactionDetails) {
                case "accounts": {
                  let c = L(i, Fg);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = L(i, Kg);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = L(i, Mg);
                  if ("error" in c) throw c.error;
                  let { result: a } = c;
                  return a
                    ? H(K({}, a), {
                        transactions: a.transactions.map(
                          ({ transaction: u, meta: l, version: _ }) => ({
                            meta: l,
                            transaction: H(K({}, u), {
                              message: ss(_, u.message),
                            }),
                            version: _,
                          })
                        ),
                      })
                    : null;
                }
              }
            } catch (c) {
              throw new U(c, "failed to get confirmed block");
            }
          });
        }
        getParsedBlock(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", o),
              i = yield this._rpcRequest("getBlock", s);
            try {
              switch (o?.transactionDetails) {
                case "accounts": {
                  let c = L(i, $g);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                case "none": {
                  let c = L(i, qg);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
                default: {
                  let c = L(i, Vg);
                  if ("error" in c) throw c.error;
                  return c.result;
                }
              }
            } catch (c) {
              throw new U(c, "failed to get block");
            }
          });
        }
        getBlockProduction(e) {
          return A(this, null, function* () {
            let t, n;
            if (typeof e == "string") n = e;
            else if (e) {
              let c = e,
                { commitment: a } = c,
                u = et(c, ["commitment"]);
              (n = a), (t = u);
            }
            let o = this._buildArgs([], n, "base64", t),
              s = yield this._rpcRequest("getBlockProduction", o),
              i = L(s, eg);
            if ("error" in i)
              throw new U(
                i.error,
                "failed to get block production information"
              );
            return i.result;
          });
        }
        getTransaction(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgsAtLeastConfirmed([e], n, void 0, o),
              i = yield this._rpcRequest("getTransaction", s),
              c = L(i, is);
            if ("error" in c) throw new U(c.error, "failed to get transaction");
            let a = c.result;
            return (
              a &&
              H(K({}, a), {
                transaction: H(K({}, a.transaction), {
                  message: ss(a.version, a.transaction.message),
                }),
              })
            );
          });
        }
        getParsedTransaction(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = this._buildArgsAtLeastConfirmed([e], n, "jsonParsed", o),
              i = yield this._rpcRequest("getTransaction", s),
              c = L(i, Pr);
            if ("error" in c) throw new U(c.error, "failed to get transaction");
            return c.result;
          });
        }
        getParsedTransactions(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], n, "jsonParsed", o),
              }));
            return (yield this._rpcBatchRequest(s)).map((a) => {
              let u = L(a, Pr);
              if ("error" in u)
                throw new U(u.error, "failed to get transactions");
              return u.result;
            });
          });
        }
        getTransactions(e, t) {
          return A(this, null, function* () {
            let { commitment: n, config: o } = ye(t),
              s = e.map((a) => ({
                methodName: "getTransaction",
                args: this._buildArgsAtLeastConfirmed([a], n, void 0, o),
              }));
            return (yield this._rpcBatchRequest(s)).map((a) => {
              let u = L(a, is);
              if ("error" in u)
                throw new U(u.error, "failed to get transactions");
              let l = u.result;
              return (
                l &&
                H(K({}, l), {
                  transaction: H(K({}, l.transaction), {
                    message: ss(l.version, l.transaction.message),
                  }),
                })
              );
            });
          });
        }
        getConfirmedBlock(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t),
              o = yield this._rpcRequest("getBlock", n),
              s = L(o, Wg);
            if ("error" in s)
              throw new U(s.error, "failed to get confirmed block");
            let i = s.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            let c = H(K({}, i), {
              transactions: i.transactions.map(
                ({ transaction: a, meta: u }) => {
                  let l = new dt(a.message);
                  return { meta: u, transaction: H(K({}, a), { message: l }) };
                }
              ),
            });
            return H(K({}, c), {
              transactions: c.transactions.map(
                ({ transaction: a, meta: u }) => ({
                  meta: u,
                  transaction: fe.populate(a.message, a.signatures),
                })
              ),
            });
          });
        }
        getBlocks(e, t, n) {
          return A(this, null, function* () {
            let o = this._buildArgsAtLeastConfirmed(
                t !== void 0 ? [e, t] : [e],
                n
              ),
              s = yield this._rpcRequest("getBlocks", o),
              i = L(s, X(x(g())));
            if ("error" in i) throw new U(i.error, "failed to get blocks");
            return i.result;
          });
        }
        getBlockSignatures(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              o = yield this._rpcRequest("getBlock", n),
              s = L(o, Fa);
            if ("error" in s) throw new U(s.error, "failed to get block");
            let i = s.result;
            if (!i) throw new Error("Block " + e + " not found");
            return i;
          });
        }
        getConfirmedBlockSignatures(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, void 0, {
                transactionDetails: "signatures",
                rewards: !1,
              }),
              o = yield this._rpcRequest("getBlock", n),
              s = L(o, Fa);
            if ("error" in s)
              throw new U(s.error, "failed to get confirmed block");
            let i = s.result;
            if (!i) throw new Error("Confirmed block " + e + " not found");
            return i;
          });
        }
        getConfirmedTransaction(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t),
              o = yield this._rpcRequest("getTransaction", n),
              s = L(o, is);
            if ("error" in s) throw new U(s.error, "failed to get transaction");
            let i = s.result;
            if (!i) return i;
            let c = new dt(i.transaction.message),
              a = i.transaction.signatures;
            return H(K({}, i), { transaction: fe.populate(c, a) });
          });
        }
        getParsedConfirmedTransaction(e, t) {
          return A(this, null, function* () {
            let n = this._buildArgsAtLeastConfirmed([e], t, "jsonParsed"),
              o = yield this._rpcRequest("getTransaction", n),
              s = L(o, Pr);
            if ("error" in s)
              throw new U(s.error, "failed to get confirmed transaction");
            return s.result;
          });
        }
        getParsedConfirmedTransactions(e, t) {
          return A(this, null, function* () {
            let n = e.map((i) => ({
              methodName: "getTransaction",
              args: this._buildArgsAtLeastConfirmed([i], t, "jsonParsed"),
            }));
            return (yield this._rpcBatchRequest(n)).map((i) => {
              let c = L(i, Pr);
              if ("error" in c)
                throw new U(c.error, "failed to get confirmed transactions");
              return c.result;
            });
          });
        }
        getConfirmedSignaturesForAddress(e, t, n) {
          return A(this, null, function* () {
            let o = {},
              s = yield this.getFirstAvailableBlock();
            for (; !("until" in o) && (t--, !(t <= 0 || t < s)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(t, "finalized");
                a.signatures.length > 0 &&
                  (o.until = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            let i = yield this.getSlot("finalized");
            for (; !("before" in o) && (n++, !(n > i)); )
              try {
                let a = yield this.getConfirmedBlockSignatures(n);
                a.signatures.length > 0 &&
                  (o.before = a.signatures[a.signatures.length - 1].toString());
              } catch (a) {
                if (a instanceof Error && a.message.includes("skipped"))
                  continue;
                throw a;
              }
            return (yield this.getConfirmedSignaturesForAddress2(e, o)).map(
              (a) => a.signature
            );
          });
        }
        getConfirmedSignaturesForAddress2(e, t, n) {
          return A(this, null, function* () {
            let o = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                n,
                void 0,
                t
              ),
              s = yield this._rpcRequest(
                "getConfirmedSignaturesForAddress2",
                o
              ),
              i = L(s, bg);
            if ("error" in i)
              throw new U(
                i.error,
                "failed to get confirmed signatures for address"
              );
            return i.result;
          });
        }
        getSignaturesForAddress(e, t, n) {
          return A(this, null, function* () {
            let o = this._buildArgsAtLeastConfirmed(
                [e.toBase58()],
                n,
                void 0,
                t
              ),
              s = yield this._rpcRequest("getSignaturesForAddress", o),
              i = L(s, Eg);
            if ("error" in i)
              throw new U(i.error, "failed to get signatures for address");
            return i.result;
          });
        }
        getAddressLookupTable(e, t) {
          return A(this, null, function* () {
            let { context: n, value: o } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              s = null;
            return (
              o !== null &&
                (s = new Fn({ key: e, state: Fn.deserialize(o.data) })),
              { context: n, value: s }
            );
          });
        }
        getNonceAndContext(e, t) {
          return A(this, null, function* () {
            let { context: n, value: o } = yield this.getAccountInfoAndContext(
                e,
                t
              ),
              s = null;
            return (
              o !== null && (s = Kr.fromAccountData(o.data)),
              { context: n, value: s }
            );
          });
        }
        getNonce(e, t) {
          return A(this, null, function* () {
            return yield this.getNonceAndContext(e, t)
              .then((n) => n.value)
              .catch((n) => {
                throw new Error(
                  "failed to get nonce for account " + e.toBase58() + ": " + n
                );
              });
          });
        }
        requestAirdrop(e, t) {
          return A(this, null, function* () {
            let n = yield this._rpcRequest("requestAirdrop", [e.toBase58(), t]),
              o = L(n, Zg);
            if ("error" in o)
              throw new U(o.error, `airdrop to ${e.toBase58()} failed`);
            return o.result;
          });
        }
        _blockhashWithExpiryBlockHeight(e) {
          return A(this, null, function* () {
            if (!e) {
              for (; this._pollingBlockhash; ) yield $t(100);
              let n = Date.now() - this._blockhashInfo.lastFetch >= ic;
              if (this._blockhashInfo.latestBlockhash !== null && !n)
                return this._blockhashInfo.latestBlockhash;
            }
            return yield this._pollNewBlockhash();
          });
        }
        _pollNewBlockhash() {
          return A(this, null, function* () {
            this._pollingBlockhash = !0;
            try {
              let e = Date.now(),
                t = this._blockhashInfo.latestBlockhash,
                n = t ? t.blockhash : null;
              for (let o = 0; o < 50; o++) {
                let s = yield this.getLatestBlockhash("finalized");
                if (n !== s.blockhash)
                  return (
                    (this._blockhashInfo = {
                      latestBlockhash: s,
                      lastFetch: Date.now(),
                      transactionSignatures: [],
                      simulatedSignatures: [],
                    }),
                    s
                  );
                yield $t(nc / 2);
              }
              throw new Error(
                `Unable to obtain a new blockhash after ${Date.now() - e}ms`
              );
            } finally {
              this._pollingBlockhash = !1;
            }
          });
        }
        getStakeMinimumDelegation(e) {
          return A(this, null, function* () {
            let { commitment: t, config: n } = ye(e),
              o = this._buildArgs([], t, "base64", n),
              s = yield this._rpcRequest("getStakeMinimumDelegation", o),
              i = L(s, we(g()));
            if ("error" in i)
              throw new U(i.error, "failed to get stake minimum delegation");
            return i.result;
          });
        }
        simulateTransaction(e, t, n) {
          return A(this, null, function* () {
            if ("message" in e) {
              let p = e.serialize(),
                b = W.Buffer.from(p).toString("base64");
              if (Array.isArray(t) || n !== void 0)
                throw new Error("Invalid arguments");
              let R = t || {};
              (R.encoding = "base64"),
                "commitment" in R || (R.commitment = this.commitment),
                t &&
                  typeof t == "object" &&
                  "innerInstructions" in t &&
                  (R.innerInstructions = t.innerInstructions);
              let T = [b, R],
                N = yield this._rpcRequest("simulateTransaction", T),
                D = L(N, Ma);
              if ("error" in D)
                throw new Error(
                  "failed to simulate transaction: " + D.error.message
                );
              return D.result;
            }
            let o;
            if (e instanceof fe) {
              let h = e;
              (o = new fe()),
                (o.feePayer = h.feePayer),
                (o.instructions = e.instructions),
                (o.nonceInfo = h.nonceInfo),
                (o.signatures = h.signatures);
            } else (o = fe.populate(e)), (o._message = o._json = void 0);
            if (t !== void 0 && !Array.isArray(t))
              throw new Error("Invalid arguments");
            let s = t;
            if (o.nonceInfo && s) o.sign(...s);
            else {
              let h = this._disableBlockhashCaching;
              for (;;) {
                let p = yield this._blockhashWithExpiryBlockHeight(h);
                if (
                  ((o.lastValidBlockHeight = p.lastValidBlockHeight),
                  (o.recentBlockhash = p.blockhash),
                  !s)
                )
                  break;
                if ((o.sign(...s), !o.signature)) throw new Error("!signature");
                let b = o.signature.toString("base64");
                if (
                  !this._blockhashInfo.simulatedSignatures.includes(b) &&
                  !this._blockhashInfo.transactionSignatures.includes(b)
                ) {
                  this._blockhashInfo.simulatedSignatures.push(b);
                  break;
                } else h = !0;
              }
            }
            let i = o._compile(),
              c = i.serialize(),
              u = o._serialize(c).toString("base64"),
              l = { encoding: "base64", commitment: this.commitment };
            if (n) {
              let h = (Array.isArray(n) ? n : i.nonProgramIds()).map((p) =>
                p.toBase58()
              );
              l.accounts = { encoding: "base64", addresses: h };
            }
            s && (l.sigVerify = !0),
              t &&
                typeof t == "object" &&
                "innerInstructions" in t &&
                (l.innerInstructions = t.innerInstructions);
            let _ = [u, l],
              y = yield this._rpcRequest("simulateTransaction", _),
              d = L(y, Ma);
            if ("error" in d) {
              let h;
              if (
                "data" in d.error &&
                ((h = d.error.data.logs), h && Array.isArray(h))
              ) {
                let p = `
    `,
                  b = p + h.join(p);
                console.error(d.error.message, b);
              }
              throw new Gt({
                action: "simulate",
                signature: "",
                transactionMessage: d.error.message,
                logs: h,
              });
            }
            return d.result;
          });
        }
        sendTransaction(e, t, n) {
          return A(this, null, function* () {
            if ("version" in e) {
              if (t && Array.isArray(t)) throw new Error("Invalid arguments");
              let i = e.serialize();
              return yield this.sendRawTransaction(i, t);
            }
            if (t === void 0 || !Array.isArray(t))
              throw new Error("Invalid arguments");
            let o = t;
            if (e.nonceInfo) e.sign(...o);
            else {
              let i = this._disableBlockhashCaching;
              for (;;) {
                let c = yield this._blockhashWithExpiryBlockHeight(i);
                if (
                  ((e.lastValidBlockHeight = c.lastValidBlockHeight),
                  (e.recentBlockhash = c.blockhash),
                  e.sign(...o),
                  !e.signature)
                )
                  throw new Error("!signature");
                let a = e.signature.toString("base64");
                if (this._blockhashInfo.transactionSignatures.includes(a))
                  i = !0;
                else {
                  this._blockhashInfo.transactionSignatures.push(a);
                  break;
                }
              }
            }
            let s = e.serialize();
            return yield this.sendRawTransaction(s, n);
          });
        }
        sendRawTransaction(e, t) {
          return A(this, null, function* () {
            let n = Z(e).toString("base64");
            return yield this.sendEncodedTransaction(n, t);
          });
        }
        sendEncodedTransaction(e, t) {
          return A(this, null, function* () {
            let n = { encoding: "base64" },
              o = t && t.skipPreflight,
              s =
                o === !0
                  ? "processed"
                  : (t && t.preflightCommitment) || this.commitment;
            t && t.maxRetries != null && (n.maxRetries = t.maxRetries),
              t &&
                t.minContextSlot != null &&
                (n.minContextSlot = t.minContextSlot),
              o && (n.skipPreflight = o),
              s && (n.preflightCommitment = s);
            let i = [e, n],
              c = yield this._rpcRequest("sendTransaction", i),
              a = L(c, Jg);
            if ("error" in a) {
              let u;
              throw (
                ("data" in a.error && (u = a.error.data.logs),
                new Gt({
                  action: o ? "send" : "simulate",
                  signature: "",
                  transactionMessage: a.error.message,
                  logs: u,
                }))
              );
            }
            return a.result;
          });
        }
        _wsOnOpen() {
          (this._rpcWebSocketConnected = !0),
            (this._rpcWebSocketHeartbeat = setInterval(() => {
              A(this, null, function* () {
                try {
                  yield this._rpcWebSocket.notify("ping");
                } catch {}
              });
            }, 5e3)),
            this._updateSubscriptions();
        }
        _wsOnError(e) {
          (this._rpcWebSocketConnected = !1),
            console.error("ws error:", e.message);
        }
        _wsOnClose(e) {
          if (
            ((this._rpcWebSocketConnected = !1),
            (this._rpcWebSocketGeneration =
              (this._rpcWebSocketGeneration + 1) % Number.MAX_SAFE_INTEGER),
            this._rpcWebSocketIdleTimeout &&
              (clearTimeout(this._rpcWebSocketIdleTimeout),
              (this._rpcWebSocketIdleTimeout = null)),
            this._rpcWebSocketHeartbeat &&
              (clearInterval(this._rpcWebSocketHeartbeat),
              (this._rpcWebSocketHeartbeat = null)),
            e === 1e3)
          ) {
            this._updateSubscriptions();
            return;
          }
          (this._subscriptionCallbacksByServerSubscriptionId = {}),
            Object.entries(this._subscriptionsByHash).forEach(([t, n]) => {
              this._setSubscription(t, H(K({}, n), { state: "pending" }));
            });
        }
        _setSubscription(e, t) {
          let n = this._subscriptionsByHash[e]?.state;
          if (((this._subscriptionsByHash[e] = t), n !== t.state)) {
            let o = this._subscriptionStateChangeCallbacksByHash[e];
            o &&
              o.forEach((s) => {
                try {
                  s(t.state);
                } catch {}
              });
          }
        }
        _onSubscriptionStateChange(e, t) {
          let n = this._subscriptionHashByClientSubscriptionId[e];
          if (n == null) return () => {};
          let o = (this._subscriptionStateChangeCallbacksByHash[n] ||=
            new Set());
          return (
            o.add(t),
            () => {
              o.delete(t),
                o.size === 0 &&
                  delete this._subscriptionStateChangeCallbacksByHash[n];
            }
          );
        }
        _updateSubscriptions() {
          return A(this, null, function* () {
            if (Object.keys(this._subscriptionsByHash).length === 0) {
              this._rpcWebSocketConnected &&
                ((this._rpcWebSocketConnected = !1),
                (this._rpcWebSocketIdleTimeout = setTimeout(() => {
                  this._rpcWebSocketIdleTimeout = null;
                  try {
                    this._rpcWebSocket.close();
                  } catch (n) {
                    n instanceof Error &&
                      console.log(
                        `Error when closing socket connection: ${n.message}`
                      );
                  }
                }, 500)));
              return;
            }
            if (
              (this._rpcWebSocketIdleTimeout !== null &&
                (clearTimeout(this._rpcWebSocketIdleTimeout),
                (this._rpcWebSocketIdleTimeout = null),
                (this._rpcWebSocketConnected = !0)),
              !this._rpcWebSocketConnected)
            ) {
              this._rpcWebSocket.connect();
              return;
            }
            let e = this._rpcWebSocketGeneration,
              t = () => e === this._rpcWebSocketGeneration;
            yield Promise.all(
              Object.keys(this._subscriptionsByHash).map((n) =>
                A(this, null, function* () {
                  let o = this._subscriptionsByHash[n];
                  if (o !== void 0)
                    switch (o.state) {
                      case "pending":
                      case "unsubscribed":
                        if (o.callbacks.size === 0) {
                          delete this._subscriptionsByHash[n],
                            o.state === "unsubscribed" &&
                              delete this
                                ._subscriptionCallbacksByServerSubscriptionId[
                                o.serverSubscriptionId
                              ],
                            yield this._updateSubscriptions();
                          return;
                        }
                        yield A(this, null, function* () {
                          let { args: s, method: i } = o;
                          try {
                            this._setSubscription(
                              n,
                              H(K({}, o), { state: "subscribing" })
                            );
                            let c = yield this._rpcWebSocket.call(i, s);
                            this._setSubscription(
                              n,
                              H(K({}, o), {
                                serverSubscriptionId: c,
                                state: "subscribed",
                              })
                            ),
                              (this._subscriptionCallbacksByServerSubscriptionId[
                                c
                              ] = o.callbacks),
                              yield this._updateSubscriptions();
                          } catch (c) {
                            if (
                              (console.error(
                                `Received ${
                                  c instanceof Error ? "" : "JSON-RPC "
                                }error calling \`${i}\``,
                                { args: s, error: c }
                              ),
                              !t())
                            )
                              return;
                            this._setSubscription(
                              n,
                              H(K({}, o), { state: "pending" })
                            ),
                              yield this._updateSubscriptions();
                          }
                        });
                        break;
                      case "subscribed":
                        o.callbacks.size === 0 &&
                          (yield A(this, null, function* () {
                            let {
                              serverSubscriptionId: s,
                              unsubscribeMethod: i,
                            } = o;
                            if (this._subscriptionsAutoDisposedByRpc.has(s))
                              this._subscriptionsAutoDisposedByRpc.delete(s);
                            else {
                              this._setSubscription(
                                n,
                                H(K({}, o), { state: "unsubscribing" })
                              ),
                                this._setSubscription(
                                  n,
                                  H(K({}, o), { state: "unsubscribing" })
                                );
                              try {
                                yield this._rpcWebSocket.call(i, [s]);
                              } catch (c) {
                                if (
                                  (c instanceof Error &&
                                    console.error(`${i} error:`, c.message),
                                  !t())
                                )
                                  return;
                                this._setSubscription(
                                  n,
                                  H(K({}, o), { state: "subscribed" })
                                ),
                                  yield this._updateSubscriptions();
                                return;
                              }
                            }
                            this._setSubscription(
                              n,
                              H(K({}, o), { state: "unsubscribed" })
                            ),
                              yield this._updateSubscriptions();
                          }));
                        break;
                    }
                })
              )
            );
          });
        }
        _handleServerNotification(e, t) {
          let n = this._subscriptionCallbacksByServerSubscriptionId[e];
          n !== void 0 &&
            n.forEach((o) => {
              try {
                o(...t);
              } catch (s) {
                console.error(s);
              }
            });
        }
        _wsOnAccountNotification(e) {
          let { result: t, subscription: n } = L(e, Sg);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _makeSubscription(e, t) {
          let n = this._nextClientSubscriptionId++,
            o = Da([e.method, t]),
            s = this._subscriptionsByHash[o];
          return (
            s === void 0
              ? (this._subscriptionsByHash[o] = H(K({}, e), {
                  args: t,
                  callbacks: new Set([e.callback]),
                  state: "pending",
                }))
              : s.callbacks.add(e.callback),
            (this._subscriptionHashByClientSubscriptionId[n] = o),
            (this._subscriptionDisposeFunctionsByClientSubscriptionId[n] = () =>
              A(this, null, function* () {
                delete this._subscriptionDisposeFunctionsByClientSubscriptionId[
                  n
                ],
                  delete this._subscriptionHashByClientSubscriptionId[n];
                let i = this._subscriptionsByHash[o];
                ie(
                  i !== void 0,
                  `Could not find a \`Subscription\` when tearing down client subscription #${n}`
                ),
                  i.callbacks.delete(e.callback),
                  yield this._updateSubscriptions();
              })),
            this._updateSubscriptions(),
            n
          );
        }
        onAccountChange(e, t, n) {
          let { commitment: o, config: s } = ye(n),
            i = this._buildArgs(
              [e.toBase58()],
              o || this._commitment || "finalized",
              "base64",
              s
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "accountSubscribe",
              unsubscribeMethod: "accountUnsubscribe",
            },
            i
          );
        }
        removeAccountChangeListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "account change");
          });
        }
        _wsOnProgramAccountNotification(e) {
          let { result: t, subscription: n } = L(e, wg);
          this._handleServerNotification(n, [
            { accountId: t.value.pubkey, accountInfo: t.value.account },
            t.context,
          ]);
        }
        onProgramAccountChange(e, t, n, o) {
          let { commitment: s, config: i } = ye(n),
            c = this._buildArgs(
              [e.toBase58()],
              s || this._commitment || "finalized",
              "base64",
              i || (o ? { filters: za(o) } : void 0)
            );
          return this._makeSubscription(
            {
              callback: t,
              method: "programSubscribe",
              unsubscribeMethod: "programUnsubscribe",
            },
            c
          );
        }
        removeProgramAccountChangeListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(
              e,
              "program account change"
            );
          });
        }
        onLogs(e, t, n) {
          let o = this._buildArgs(
            [typeof e == "object" ? { mentions: [e.toString()] } : e],
            n || this._commitment || "finalized"
          );
          return this._makeSubscription(
            {
              callback: t,
              method: "logsSubscribe",
              unsubscribeMethod: "logsUnsubscribe",
            },
            o
          );
        }
        removeOnLogsListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "logs");
          });
        }
        _wsOnLogsNotification(e) {
          let { result: t, subscription: n } = L(e, e_);
          this._handleServerNotification(n, [t.value, t.context]);
        }
        _wsOnSlotNotification(e) {
          let { result: t, subscription: n } = L(e, Og);
          this._handleServerNotification(n, [t]);
        }
        onSlotChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotSubscribe",
              unsubscribeMethod: "slotUnsubscribe",
            },
            []
          );
        }
        removeSlotChangeListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot change");
          });
        }
        _wsOnSlotUpdatesNotification(e) {
          let { result: t, subscription: n } = L(e, kg);
          this._handleServerNotification(n, [t]);
        }
        onSlotUpdate(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "slotsUpdatesSubscribe",
              unsubscribeMethod: "slotsUpdatesUnsubscribe",
            },
            []
          );
        }
        removeSlotUpdateListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "slot update");
          });
        }
        _unsubscribeClientSubscription(e, t) {
          return A(this, null, function* () {
            let n = this._subscriptionDisposeFunctionsByClientSubscriptionId[e];
            n
              ? yield n()
              : console.warn(
                  `Ignored unsubscribe request because an active subscription with id \`${e}\` for '${t}' events could not be found.`
                );
          });
        }
        _buildArgs(e, t, n, o) {
          let s = t || this._commitment;
          if (s || n || o) {
            let i = {};
            n && (i.encoding = n),
              s && (i.commitment = s),
              o && (i = Object.assign(i, o)),
              e.push(i);
          }
          return e;
        }
        _buildArgsAtLeastConfirmed(e, t, n, o) {
          let s = t || this._commitment;
          if (s && !["confirmed", "finalized"].includes(s))
            throw new Error(
              "Using Connection with default commitment: `" +
                this._commitment +
                "`, but method requires at least `confirmed`"
            );
          return this._buildArgs(e, t, n, o);
        }
        _wsOnSignatureNotification(e) {
          let { result: t, subscription: n } = L(e, Tg);
          t.value !== "receivedSignature" &&
            this._subscriptionsAutoDisposedByRpc.add(n),
            this._handleServerNotification(
              n,
              t.value === "receivedSignature"
                ? [{ type: "received" }, t.context]
                : [{ type: "status", result: t.value }, t.context]
            );
        }
        onSignature(e, t, n) {
          let o = this._buildArgs([e], n || this._commitment || "finalized"),
            s = this._makeSubscription(
              {
                callback: (i, c) => {
                  if (i.type === "status") {
                    t(i.result, c);
                    try {
                      this.removeSignatureListener(s);
                    } catch {}
                  }
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              o
            );
          return s;
        }
        onSignatureWithOptions(e, t, n) {
          let a = H(K({}, n), {
              commitment:
                (n && n.commitment) || this._commitment || "finalized",
            }),
            { commitment: o } = a,
            s = et(a, ["commitment"]),
            i = this._buildArgs([e], o, void 0, s),
            c = this._makeSubscription(
              {
                callback: (u, l) => {
                  t(u, l);
                  try {
                    this.removeSignatureListener(c);
                  } catch {}
                },
                method: "signatureSubscribe",
                unsubscribeMethod: "signatureUnsubscribe",
              },
              i
            );
          return c;
        }
        removeSignatureListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "signature result");
          });
        }
        _wsOnRootNotification(e) {
          let { result: t, subscription: n } = L(e, vg);
          this._handleServerNotification(n, [t]);
        }
        onRootChange(e) {
          return this._makeSubscription(
            {
              callback: e,
              method: "rootSubscribe",
              unsubscribeMethod: "rootUnsubscribe",
            },
            []
          );
        }
        removeRootChangeListener(e) {
          return A(this, null, function* () {
            yield this._unsubscribeClientSubscription(e, "root change");
          });
        }
      }),
      ($r = class r {
        constructor(e) {
          (this._keypair = void 0), (this._keypair = e ?? Ba());
        }
        static generate() {
          return new r(Ba());
        }
        static fromSecretKey(e, t) {
          if (e.byteLength !== 64) throw new Error("bad secret key size");
          let n = e.slice(32, 64);
          if (!t || !t.skipValidation) {
            let o = e.slice(0, 32),
              s = zr(o);
            for (let i = 0; i < 32; i++)
              if (n[i] !== s[i])
                throw new Error("provided secretKey is invalid");
          }
          return new r({ publicKey: n, secretKey: e });
        }
        static fromSeed(e) {
          let t = zr(e),
            n = new Uint8Array(64);
          return n.set(e), n.set(t, 32), new r({ publicKey: t, secretKey: n });
        }
        get publicKey() {
          return new B(this._keypair.publicKey);
        }
        get secretKey() {
          return new Uint8Array(this._keypair.secretKey);
        }
      }),
      (bt = Object.freeze({
        CreateLookupTable: {
          index: 0,
          layout: f.struct([
            f.u32("instruction"),
            hn("recentSlot"),
            f.u8("bumpSeed"),
          ]),
        },
        FreezeLookupTable: {
          index: 1,
          layout: f.struct([f.u32("instruction")]),
        },
        ExtendLookupTable: {
          index: 2,
          layout: f.struct([
            f.u32("instruction"),
            hn(),
            f.seq(Q(), f.offset(f.u32(), -8), "addresses"),
          ]),
        },
        DeactivateLookupTable: {
          index: 3,
          layout: f.struct([f.u32("instruction")]),
        },
        CloseLookupTable: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
      })),
      (ws = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let n = f.u32("instruction").decode(e.data),
            o;
          for (let [s, i] of Object.entries(bt))
            if (i.index == n) {
              o = s;
              break;
            }
          if (!o)
            throw new Error(
              "Invalid Instruction. Should be a LookupTable Instruction"
            );
          return o;
        }
        static decodeCreateLookupTable(e) {
          this.checkProgramId(e.programId), this.checkKeysLength(e.keys, 4);
          let { recentSlot: t } = ue(bt.CreateLookupTable, e.data);
          return {
            authority: e.keys[1].pubkey,
            payer: e.keys[2].pubkey,
            recentSlot: Number(t),
          };
        }
        static decodeExtendLookupTable(e) {
          if ((this.checkProgramId(e.programId), e.keys.length < 2))
            throw new Error(
              `invalid instruction; found ${e.keys.length} keys, expected at least 2`
            );
          let { addresses: t } = ue(bt.ExtendLookupTable, e.data);
          return {
            lookupTable: e.keys[0].pubkey,
            authority: e.keys[1].pubkey,
            payer: e.keys.length > 2 ? e.keys[2].pubkey : void 0,
            addresses: t.map((n) => new B(n)),
          };
        }
        static decodeCloseLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 3),
            {
              lookupTable: e.keys[0].pubkey,
              authority: e.keys[1].pubkey,
              recipient: e.keys[2].pubkey,
            }
          );
        }
        static decodeFreezeLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static decodeDeactivateLookupTable(e) {
          return (
            this.checkProgramId(e.programId),
            this.checkKeysLength(e.keys, 2),
            { lookupTable: e.keys[0].pubkey, authority: e.keys[1].pubkey }
          );
        }
        static checkProgramId(e) {
          if (!e.equals($n.programId))
            throw new Error(
              "invalid instruction; programId is not AddressLookupTable Program"
            );
        }
        static checkKeysLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      ($n = class {
        constructor() {}
        static createLookupTable(e) {
          let [t, n] = B.findProgramAddressSync(
              [e.authority.toBuffer(), Uo().encode(e.recentSlot)],
              this.programId
            ),
            o = bt.CreateLookupTable,
            s = re(o, { recentSlot: BigInt(e.recentSlot), bumpSeed: n }),
            i = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.payer, isSigner: !0, isWritable: !0 },
              { pubkey: Be.programId, isSigner: !1, isWritable: !1 },
            ];
          return [new de({ programId: this.programId, keys: i, data: s }), t];
        }
        static freezeLookupTable(e) {
          let t = bt.FreezeLookupTable,
            n = re(t),
            o = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new de({ programId: this.programId, keys: o, data: n });
        }
        static extendLookupTable(e) {
          let t = bt.ExtendLookupTable,
            n = re(t, { addresses: e.addresses.map((s) => s.toBytes()) }),
            o = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return (
            e.payer &&
              o.push(
                { pubkey: e.payer, isSigner: !0, isWritable: !0 },
                { pubkey: Be.programId, isSigner: !1, isWritable: !1 }
              ),
            new de({ programId: this.programId, keys: o, data: n })
          );
        }
        static deactivateLookupTable(e) {
          let t = bt.DeactivateLookupTable,
            n = re(t),
            o = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
            ];
          return new de({ programId: this.programId, keys: o, data: n });
        }
        static closeLookupTable(e) {
          let t = bt.CloseLookupTable,
            n = re(t),
            o = [
              { pubkey: e.lookupTable, isSigner: !1, isWritable: !0 },
              { pubkey: e.authority, isSigner: !0, isWritable: !1 },
              { pubkey: e.recipient, isSigner: !1, isWritable: !0 },
            ];
          return new de({ programId: this.programId, keys: o, data: n });
        }
      });
    $n.programId = new B("AddressLookupTab1e1111111111111111111111111");
    (Is = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let n = f.u8("instruction").decode(e.data),
          o;
        for (let [s, i] of Object.entries(ct))
          if (i.index == n) {
            o = s;
            break;
          }
        if (!o)
          throw new Error(
            "Instruction type incorrect; not a ComputeBudgetInstruction"
          );
        return o;
      }
      static decodeRequestUnits(e) {
        this.checkProgramId(e.programId);
        let { units: t, additionalFee: n } = ue(ct.RequestUnits, e.data);
        return { units: t, additionalFee: n };
      }
      static decodeRequestHeapFrame(e) {
        this.checkProgramId(e.programId);
        let { bytes: t } = ue(ct.RequestHeapFrame, e.data);
        return { bytes: t };
      }
      static decodeSetComputeUnitLimit(e) {
        this.checkProgramId(e.programId);
        let { units: t } = ue(ct.SetComputeUnitLimit, e.data);
        return { units: t };
      }
      static decodeSetComputeUnitPrice(e) {
        this.checkProgramId(e.programId);
        let { microLamports: t } = ue(ct.SetComputeUnitPrice, e.data);
        return { microLamports: t };
      }
      static checkProgramId(e) {
        if (!e.equals(qn.programId))
          throw new Error(
            "invalid instruction; programId is not ComputeBudgetProgram"
          );
      }
    }),
      (ct = Object.freeze({
        RequestUnits: {
          index: 0,
          layout: f.struct([
            f.u8("instruction"),
            f.u32("units"),
            f.u32("additionalFee"),
          ]),
        },
        RequestHeapFrame: {
          index: 1,
          layout: f.struct([f.u8("instruction"), f.u32("bytes")]),
        },
        SetComputeUnitLimit: {
          index: 2,
          layout: f.struct([f.u8("instruction"), f.u32("units")]),
        },
        SetComputeUnitPrice: {
          index: 3,
          layout: f.struct([f.u8("instruction"), hn("microLamports")]),
        },
      })),
      (qn = class {
        constructor() {}
        static requestUnits(e) {
          let t = ct.RequestUnits,
            n = re(t, e);
          return new de({ keys: [], programId: this.programId, data: n });
        }
        static requestHeapFrame(e) {
          let t = ct.RequestHeapFrame,
            n = re(t, e);
          return new de({ keys: [], programId: this.programId, data: n });
        }
        static setComputeUnitLimit(e) {
          let t = ct.SetComputeUnitLimit,
            n = re(t, e);
          return new de({ keys: [], programId: this.programId, data: n });
        }
        static setComputeUnitPrice(e) {
          let t = ct.SetComputeUnitPrice,
            n = re(t, { microLamports: BigInt(e.microLamports) });
          return new de({ keys: [], programId: this.programId, data: n });
        }
      });
    qn.programId = new B("ComputeBudget111111111111111111111111111111");
    (Va = 64),
      ($a = 32),
      (qa = 64),
      (Wa = f.struct([
        f.u8("numSignatures"),
        f.u8("padding"),
        f.u16("signatureOffset"),
        f.u16("signatureInstructionIndex"),
        f.u16("publicKeyOffset"),
        f.u16("publicKeyInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u16("messageInstructionIndex"),
      ])),
      (qr = class r {
        constructor() {}
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: n,
            signature: o,
            instructionIndex: s,
          } = e;
          ie(
            t.length === $a,
            `Public Key must be ${$a} bytes but received ${t.length} bytes`
          ),
            ie(
              o.length === qa,
              `Signature must be ${qa} bytes but received ${o.length} bytes`
            );
          let i = Wa.span,
            c = i + t.length,
            a = c + o.length,
            u = 1,
            l = W.Buffer.alloc(a + n.length),
            _ = s ?? 65535;
          return (
            Wa.encode(
              {
                numSignatures: u,
                padding: 0,
                signatureOffset: c,
                signatureInstructionIndex: _,
                publicKeyOffset: i,
                publicKeyInstructionIndex: _,
                messageDataOffset: a,
                messageDataSize: n.length,
                messageInstructionIndex: _,
              },
              l
            ),
            l.fill(t, i),
            l.fill(o, c),
            l.fill(n, a),
            new de({ keys: [], programId: r.programId, data: l })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: n, instructionIndex: o } = e;
          ie(
            t.length === Va,
            `Private key must be ${Va} bytes but received ${t.length} bytes`
          );
          try {
            let s = $r.fromSecretKey(t),
              i = s.publicKey.toBytes(),
              c = vs(n, s.secretKey);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: n,
              signature: c,
              instructionIndex: o,
            });
          } catch (s) {
            throw new Error(`Error creating instruction; ${s}`);
          }
        }
      });
    qr.programId = new B("Ed25519SigVerify111111111111111111111111111");
    n_ = (r, e) => {
      let t = Cr.sign(r, e);
      return [t.toCompactRawBytes(), t.recovery];
    };
    Cr.utils.isValidPrivateKey;
    (r_ = Cr.getPublicKey),
      (Ga = 32),
      (as = 20),
      (Ha = 64),
      (o_ = 11),
      (cs = f.struct([
        f.u8("numSignatures"),
        f.u16("signatureOffset"),
        f.u8("signatureInstructionIndex"),
        f.u16("ethAddressOffset"),
        f.u8("ethAddressInstructionIndex"),
        f.u16("messageDataOffset"),
        f.u16("messageDataSize"),
        f.u8("messageInstructionIndex"),
        f.blob(20, "ethAddress"),
        f.blob(64, "signature"),
        f.u8("recoveryId"),
      ])),
      (Wr = class r {
        constructor() {}
        static publicKeyToEthAddress(e) {
          ie(
            e.length === Ha,
            `Public key must be ${Ha} bytes but received ${e.length} bytes`
          );
          try {
            return W.Buffer.from(no(Z(e))).slice(-as);
          } catch (t) {
            throw new Error(`Error constructing Solana address: ${t}`);
          }
        }
        static createInstructionWithPublicKey(e) {
          let {
            publicKey: t,
            message: n,
            signature: o,
            recoveryId: s,
            instructionIndex: i,
          } = e;
          return r.createInstructionWithEthAddress({
            ethAddress: r.publicKeyToEthAddress(t),
            message: n,
            signature: o,
            recoveryId: s,
            instructionIndex: i,
          });
        }
        static createInstructionWithEthAddress(e) {
          let {
              ethAddress: t,
              message: n,
              signature: o,
              recoveryId: s,
              instructionIndex: i = 0,
            } = e,
            c;
          typeof t == "string"
            ? t.startsWith("0x")
              ? (c = W.Buffer.from(t.substr(2), "hex"))
              : (c = W.Buffer.from(t, "hex"))
            : (c = t),
            ie(
              c.length === as,
              `Address must be ${as} bytes but received ${c.length} bytes`
            );
          let a = 1 + o_,
            u = a,
            l = a + c.length,
            _ = l + o.length + 1,
            y = 1,
            d = W.Buffer.alloc(cs.span + n.length);
          return (
            cs.encode(
              {
                numSignatures: y,
                signatureOffset: l,
                signatureInstructionIndex: i,
                ethAddressOffset: u,
                ethAddressInstructionIndex: i,
                messageDataOffset: _,
                messageDataSize: n.length,
                messageInstructionIndex: i,
                signature: Z(o),
                ethAddress: Z(c),
                recoveryId: s,
              },
              d
            ),
            d.fill(Z(n), cs.span),
            new de({ keys: [], programId: r.programId, data: d })
          );
        }
        static createInstructionWithPrivateKey(e) {
          let { privateKey: t, message: n, instructionIndex: o } = e;
          ie(
            t.length === Ga,
            `Private key must be ${Ga} bytes but received ${t.length} bytes`
          );
          try {
            let s = Z(t),
              i = r_(s, !1).slice(1),
              c = W.Buffer.from(no(Z(n))),
              [a, u] = n_(c, s);
            return this.createInstructionWithPublicKey({
              publicKey: i,
              message: n,
              signature: a,
              recoveryId: u,
              instructionIndex: o,
            });
          } catch (s) {
            throw new Error(`Error creating instruction; ${s}`);
          }
        }
      });
    Wr.programId = new B("KeccakSecp256k11111111111111111111111111111");
    (pc = new B("StakeConfig11111111111111111111111111111111")),
      (Gr = class {
        constructor(e, t) {
          (this.staker = void 0),
            (this.withdrawer = void 0),
            (this.staker = e),
            (this.withdrawer = t);
        }
      }),
      (Ht = class {
        constructor(e, t, n) {
          (this.unixTimestamp = void 0),
            (this.epoch = void 0),
            (this.custodian = void 0),
            (this.unixTimestamp = e),
            (this.epoch = t),
            (this.custodian = n);
        }
      });
    _c = Ht;
    Ht.default = new _c(0, 0, B.default);
    (Os = class {
      constructor() {}
      static decodeInstructionType(e) {
        this.checkProgramId(e.programId);
        let n = f.u32("instruction").decode(e.data),
          o;
        for (let [s, i] of Object.entries(ke))
          if (i.index == n) {
            o = s;
            break;
          }
        if (!o)
          throw new Error("Instruction type incorrect; not a StakeInstruction");
        return o;
      }
      static decodeInitialize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let { authorized: t, lockup: n } = ue(ke.Initialize, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          authorized: new Gr(new B(t.staker), new B(t.withdrawer)),
          lockup: new Ht(n.unixTimestamp, n.epoch, new B(n.custodian)),
        };
      }
      static decodeDelegate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 6),
          ue(ke.Delegate, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            votePubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[5].pubkey,
          }
        );
      }
      static decodeAuthorize(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { newAuthorized: t, stakeAuthorizationType: n } = ue(
            ke.Authorize,
            e.data
          ),
          o = {
            stakePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new B(t),
            stakeAuthorizationType: { index: n },
          };
        return e.keys.length > 3 && (o.custodianPubkey = e.keys[3].pubkey), o;
      }
      static decodeAuthorizeWithSeed(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 2);
        let {
            newAuthorized: t,
            stakeAuthorizationType: n,
            authoritySeed: o,
            authorityOwner: s,
          } = ue(ke.AuthorizeWithSeed, e.data),
          i = {
            stakePubkey: e.keys[0].pubkey,
            authorityBase: e.keys[1].pubkey,
            authoritySeed: o,
            authorityOwner: new B(s),
            newAuthorizedPubkey: new B(t),
            stakeAuthorizationType: { index: n },
          };
        return e.keys.length > 3 && (i.custodianPubkey = e.keys[3].pubkey), i;
      }
      static decodeSplit(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
        let { lamports: t } = ue(ke.Split, e.data);
        return {
          stakePubkey: e.keys[0].pubkey,
          splitStakePubkey: e.keys[1].pubkey,
          authorizedPubkey: e.keys[2].pubkey,
          lamports: t,
        };
      }
      static decodeMerge(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ue(ke.Merge, e.data),
          {
            stakePubkey: e.keys[0].pubkey,
            sourceStakePubKey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
          }
        );
      }
      static decodeWithdraw(e) {
        this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 5);
        let { lamports: t } = ue(ke.Withdraw, e.data),
          n = {
            stakePubkey: e.keys[0].pubkey,
            toPubkey: e.keys[1].pubkey,
            authorizedPubkey: e.keys[4].pubkey,
            lamports: t,
          };
        return e.keys.length > 5 && (n.custodianPubkey = e.keys[5].pubkey), n;
      }
      static decodeDeactivate(e) {
        return (
          this.checkProgramId(e.programId),
          this.checkKeyLength(e.keys, 3),
          ue(ke.Deactivate, e.data),
          { stakePubkey: e.keys[0].pubkey, authorizedPubkey: e.keys[2].pubkey }
        );
      }
      static checkProgramId(e) {
        if (!e.equals(yn.programId))
          throw new Error("invalid instruction; programId is not StakeProgram");
      }
      static checkKeyLength(e, t) {
        if (e.length < t)
          throw new Error(
            `invalid instruction; found ${e.length} keys, expected at least ${t}`
          );
      }
    }),
      (ke = Object.freeze({
        Initialize: {
          index: 0,
          layout: f.struct([f.u32("instruction"), gy(), _y()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
          ]),
        },
        Delegate: { index: 2, layout: f.struct([f.u32("instruction")]) },
        Split: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Withdraw: {
          index: 4,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        Deactivate: { index: 5, layout: f.struct([f.u32("instruction")]) },
        Merge: { index: 7, layout: f.struct([f.u32("instruction")]) },
        AuthorizeWithSeed: {
          index: 8,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("stakeAuthorizationType"),
            qt("authoritySeed"),
            Q("authorityOwner"),
          ]),
        },
      })),
      (s_ = Object.freeze({ Staker: { index: 0 }, Withdrawer: { index: 1 } })),
      (yn = class {
        constructor() {}
        static initialize(e) {
          let { stakePubkey: t, authorized: n, lockup: o } = e,
            s = o || Ht.default,
            i = ke.Initialize,
            c = re(i, {
              authorized: {
                staker: Z(n.staker.toBuffer()),
                withdrawer: Z(n.withdrawer.toBuffer()),
              },
              lockup: {
                unixTimestamp: s.unixTimestamp,
                epoch: s.epoch,
                custodian: Z(s.custodian.toBuffer()),
              },
            }),
            a = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
              ],
              programId: this.programId,
              data: c,
            };
          return new de(a);
        }
        static createAccountWithSeed(e) {
          let t = new fe();
          t.add(
            Be.createAccountWithSeed({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              basePubkey: e.basePubkey,
              seed: e.seed,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: n, authorized: o, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: o, lockup: s })
          );
        }
        static createAccount(e) {
          let t = new fe();
          t.add(
            Be.createAccount({
              fromPubkey: e.fromPubkey,
              newAccountPubkey: e.stakePubkey,
              lamports: e.lamports,
              space: this.space,
              programId: this.programId,
            })
          );
          let { stakePubkey: n, authorized: o, lockup: s } = e;
          return t.add(
            this.initialize({ stakePubkey: n, authorized: o, lockup: s })
          );
        }
        static delegate(e) {
          let { stakePubkey: t, authorizedPubkey: n, votePubkey: o } = e,
            s = ke.Delegate,
            i = re(s);
          return new fe().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Ur, isSigner: !1, isWritable: !1 },
              { pubkey: pc, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static authorize(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: o,
              stakeAuthorizationType: s,
              custodianPubkey: i,
            } = e,
            c = ke.Authorize,
            a = re(c, {
              newAuthorized: Z(o.toBuffer()),
              stakeAuthorizationType: s.index,
            }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new fe().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static authorizeWithSeed(e) {
          let {
              stakePubkey: t,
              authorityBase: n,
              authoritySeed: o,
              authorityOwner: s,
              newAuthorizedPubkey: i,
              stakeAuthorizationType: c,
              custodianPubkey: a,
            } = e,
            u = ke.AuthorizeWithSeed,
            l = re(u, {
              newAuthorized: Z(i.toBuffer()),
              stakeAuthorizationType: c.index,
              authoritySeed: o,
              authorityOwner: Z(s.toBuffer()),
            }),
            _ = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
            ];
          return (
            a && _.push({ pubkey: a, isSigner: !0, isWritable: !1 }),
            new fe().add({ keys: _, programId: this.programId, data: l })
          );
        }
        static splitInstruction(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              splitStakePubkey: o,
              lamports: s,
            } = e,
            i = ke.Split,
            c = re(i, { lamports: s });
          return new de({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: c,
          });
        }
        static split(e, t) {
          let n = new fe();
          return (
            n.add(
              Be.createAccount({
                fromPubkey: e.authorizedPubkey,
                newAccountPubkey: e.splitStakePubkey,
                lamports: t,
                space: this.space,
                programId: this.programId,
              })
            ),
            n.add(this.splitInstruction(e))
          );
        }
        static splitWithSeed(e, t) {
          let {
              stakePubkey: n,
              authorizedPubkey: o,
              splitStakePubkey: s,
              basePubkey: i,
              seed: c,
              lamports: a,
            } = e,
            u = new fe();
          return (
            u.add(
              Be.allocate({
                accountPubkey: s,
                basePubkey: i,
                seed: c,
                space: this.space,
                programId: this.programId,
              })
            ),
            t &&
              t > 0 &&
              u.add(
                Be.transfer({
                  fromPubkey: e.authorizedPubkey,
                  toPubkey: s,
                  lamports: t,
                })
              ),
            u.add(
              this.splitInstruction({
                stakePubkey: n,
                authorizedPubkey: o,
                splitStakePubkey: s,
                lamports: a,
              })
            )
          );
        }
        static merge(e) {
          let { stakePubkey: t, sourceStakePubKey: n, authorizedPubkey: o } = e,
            s = ke.Merge,
            i = re(s);
          return new fe().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Ur, isSigner: !1, isWritable: !1 },
              { pubkey: o, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: i,
          });
        }
        static withdraw(e) {
          let {
              stakePubkey: t,
              authorizedPubkey: n,
              toPubkey: o,
              lamports: s,
              custodianPubkey: i,
            } = e,
            c = ke.Withdraw,
            a = re(c, { lamports: s }),
            u = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: Ur, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return (
            i && u.push({ pubkey: i, isSigner: !0, isWritable: !1 }),
            new fe().add({ keys: u, programId: this.programId, data: a })
          );
        }
        static deactivate(e) {
          let { stakePubkey: t, authorizedPubkey: n } = e,
            o = ke.Deactivate,
            s = re(o);
          return new fe().add({
            keys: [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ],
            programId: this.programId,
            data: s,
          });
        }
      });
    yn.programId = new B("Stake11111111111111111111111111111111111111");
    yn.space = 200;
    (Hr = class {
      constructor(e, t, n, o) {
        (this.nodePubkey = void 0),
          (this.authorizedVoter = void 0),
          (this.authorizedWithdrawer = void 0),
          (this.commission = void 0),
          (this.nodePubkey = e),
          (this.authorizedVoter = t),
          (this.authorizedWithdrawer = n),
          (this.commission = o);
      }
    }),
      (Ns = class {
        constructor() {}
        static decodeInstructionType(e) {
          this.checkProgramId(e.programId);
          let n = f.u32("instruction").decode(e.data),
            o;
          for (let [s, i] of Object.entries(ut))
            if (i.index == n) {
              o = s;
              break;
            }
          if (!o)
            throw new Error(
              "Instruction type incorrect; not a VoteInstruction"
            );
          return o;
        }
        static decodeInitializeAccount(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 4);
          let { voteInit: t } = ue(ut.InitializeAccount, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            nodePubkey: e.keys[3].pubkey,
            voteInit: new Hr(
              new B(t.nodePubkey),
              new B(t.authorizedVoter),
              new B(t.authorizedWithdrawer),
              t.commission
            ),
          };
        }
        static decodeAuthorize(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { newAuthorized: t, voteAuthorizationType: n } = ue(
            ut.Authorize,
            e.data
          );
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedPubkey: e.keys[2].pubkey,
            newAuthorizedPubkey: new B(t),
            voteAuthorizationType: { index: n },
          };
        }
        static decodeAuthorizeWithSeed(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let {
            voteAuthorizeWithSeedArgs: {
              currentAuthorityDerivedKeyOwnerPubkey: t,
              currentAuthorityDerivedKeySeed: n,
              newAuthorized: o,
              voteAuthorizationType: s,
            },
          } = ue(ut.AuthorizeWithSeed, e.data);
          return {
            currentAuthorityDerivedKeyBasePubkey: e.keys[2].pubkey,
            currentAuthorityDerivedKeyOwnerPubkey: new B(t),
            currentAuthorityDerivedKeySeed: n,
            newAuthorizedPubkey: new B(o),
            voteAuthorizationType: { index: s },
            votePubkey: e.keys[0].pubkey,
          };
        }
        static decodeWithdraw(e) {
          this.checkProgramId(e.programId), this.checkKeyLength(e.keys, 3);
          let { lamports: t } = ue(ut.Withdraw, e.data);
          return {
            votePubkey: e.keys[0].pubkey,
            authorizedWithdrawerPubkey: e.keys[2].pubkey,
            lamports: t,
            toPubkey: e.keys[1].pubkey,
          };
        }
        static checkProgramId(e) {
          if (!e.equals(gn.programId))
            throw new Error(
              "invalid instruction; programId is not VoteProgram"
            );
        }
        static checkKeyLength(e, t) {
          if (e.length < t)
            throw new Error(
              `invalid instruction; found ${e.length} keys, expected at least ${t}`
            );
        }
      }),
      (ut = Object.freeze({
        InitializeAccount: {
          index: 0,
          layout: f.struct([f.u32("instruction"), py()]),
        },
        Authorize: {
          index: 1,
          layout: f.struct([
            f.u32("instruction"),
            Q("newAuthorized"),
            f.u32("voteAuthorizationType"),
          ]),
        },
        Withdraw: {
          index: 3,
          layout: f.struct([f.u32("instruction"), f.ns64("lamports")]),
        },
        UpdateValidatorIdentity: {
          index: 4,
          layout: f.struct([f.u32("instruction")]),
        },
        AuthorizeWithSeed: {
          index: 10,
          layout: f.struct([f.u32("instruction"), my()]),
        },
      })),
      (i_ = Object.freeze({ Voter: { index: 0 }, Withdrawer: { index: 1 } })),
      (gn = class r {
        constructor() {}
        static initializeAccount(e) {
          let { votePubkey: t, nodePubkey: n, voteInit: o } = e,
            s = ut.InitializeAccount,
            i = re(s, {
              voteInit: {
                nodePubkey: Z(o.nodePubkey.toBuffer()),
                authorizedVoter: Z(o.authorizedVoter.toBuffer()),
                authorizedWithdrawer: Z(o.authorizedWithdrawer.toBuffer()),
                commission: o.commission,
              },
            }),
            c = {
              keys: [
                { pubkey: t, isSigner: !1, isWritable: !0 },
                { pubkey: ln, isSigner: !1, isWritable: !1 },
                { pubkey: it, isSigner: !1, isWritable: !1 },
                { pubkey: n, isSigner: !0, isWritable: !1 },
              ],
              programId: this.programId,
              data: i,
            };
          return new de(c);
        }
        static createAccount(e) {
          let t = new fe();
          return (
            t.add(
              Be.createAccount({
                fromPubkey: e.fromPubkey,
                newAccountPubkey: e.votePubkey,
                lamports: e.lamports,
                space: this.space,
                programId: this.programId,
              })
            ),
            t.add(
              this.initializeAccount({
                votePubkey: e.votePubkey,
                nodePubkey: e.voteInit.nodePubkey,
                voteInit: e.voteInit,
              })
            )
          );
        }
        static authorize(e) {
          let {
              votePubkey: t,
              authorizedPubkey: n,
              newAuthorizedPubkey: o,
              voteAuthorizationType: s,
            } = e,
            i = ut.Authorize,
            c = re(i, {
              newAuthorized: Z(o.toBuffer()),
              voteAuthorizationType: s.index,
            }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new fe().add({ keys: a, programId: this.programId, data: c });
        }
        static authorizeWithSeed(e) {
          let {
              currentAuthorityDerivedKeyBasePubkey: t,
              currentAuthorityDerivedKeyOwnerPubkey: n,
              currentAuthorityDerivedKeySeed: o,
              newAuthorizedPubkey: s,
              voteAuthorizationType: i,
              votePubkey: c,
            } = e,
            a = ut.AuthorizeWithSeed,
            u = re(a, {
              voteAuthorizeWithSeedArgs: {
                currentAuthorityDerivedKeyOwnerPubkey: Z(n.toBuffer()),
                currentAuthorityDerivedKeySeed: o,
                newAuthorized: Z(s.toBuffer()),
                voteAuthorizationType: i.index,
              },
            }),
            l = [
              { pubkey: c, isSigner: !1, isWritable: !0 },
              { pubkey: it, isSigner: !1, isWritable: !1 },
              { pubkey: t, isSigner: !0, isWritable: !1 },
            ];
          return new fe().add({ keys: l, programId: this.programId, data: u });
        }
        static withdraw(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              lamports: o,
              toPubkey: s,
            } = e,
            i = ut.Withdraw,
            c = re(i, { lamports: o }),
            a = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: s, isSigner: !1, isWritable: !0 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new fe().add({ keys: a, programId: this.programId, data: c });
        }
        static safeWithdraw(e, t, n) {
          if (e.lamports > t - n)
            throw new Error(
              "Withdraw will leave vote account with insufficient funds."
            );
          return r.withdraw(e);
        }
        static updateValidatorIdentity(e) {
          let {
              votePubkey: t,
              authorizedWithdrawerPubkey: n,
              nodePubkey: o,
            } = e,
            s = ut.UpdateValidatorIdentity,
            i = re(s),
            c = [
              { pubkey: t, isSigner: !1, isWritable: !0 },
              { pubkey: o, isSigner: !0, isWritable: !1 },
              { pubkey: n, isSigner: !0, isWritable: !1 },
            ];
          return new fe().add({ keys: c, programId: this.programId, data: i });
        }
      });
    gn.programId = new B("Vote111111111111111111111111111111111111111");
    gn.space = 3762;
    (mc = new B("Va1idator1nfo111111111111111111111111111111")),
      (a_ = I({
        name: k(),
        website: F(k()),
        details: F(k()),
        iconUrl: F(k()),
        keybaseUsername: F(k()),
      })),
      (ks = class r {
        constructor(e, t) {
          (this.key = void 0),
            (this.info = void 0),
            (this.key = e),
            (this.info = t);
        }
        static fromConfigData(e) {
          let t = [...e];
          if (He(t) !== 2) return null;
          let o = [];
          for (let s = 0; s < 2; s++) {
            let i = new B(je(t, 0, ft)),
              c = at(t) === 1;
            o.push({ publicKey: i, isSigner: c });
          }
          if (o[0].publicKey.equals(mc) && o[1].isSigner) {
            let s = qt().decode(W.Buffer.from(t)),
              i = JSON.parse(s);
            return Ko(i, a_), new r(o[1].publicKey, i);
          }
          return null;
        }
      }),
      (c_ = new B("Vote111111111111111111111111111111111111111")),
      (u_ = f.struct([
        Q("nodePubkey"),
        Q("authorizedWithdrawer"),
        f.u8("commission"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("slot"), f.u32("confirmationCount")]),
          f.offset(f.u32(), -8),
          "votes"
        ),
        f.u8("rootSlotValid"),
        f.nu64("rootSlot"),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), Q("authorizedVoter")]),
          f.offset(f.u32(), -8),
          "authorizedVoters"
        ),
        f.struct(
          [
            f.seq(
              f.struct([
                Q("authorizedPubkey"),
                f.nu64("epochOfLastAuthorizedSwitch"),
                f.nu64("targetEpoch"),
              ]),
              32,
              "buf"
            ),
            f.nu64("idx"),
            f.u8("isEmpty"),
          ],
          "priorVoters"
        ),
        f.nu64(),
        f.seq(
          f.struct([f.nu64("epoch"), f.nu64("credits"), f.nu64("prevCredits")]),
          f.offset(f.u32(), -8),
          "epochCredits"
        ),
        f.struct([f.nu64("slot"), f.nu64("timestamp")], "lastTimestamp"),
      ])),
      (Ts = class r {
        constructor(e) {
          (this.nodePubkey = void 0),
            (this.authorizedWithdrawer = void 0),
            (this.commission = void 0),
            (this.rootSlot = void 0),
            (this.votes = void 0),
            (this.authorizedVoters = void 0),
            (this.priorVoters = void 0),
            (this.epochCredits = void 0),
            (this.lastTimestamp = void 0),
            (this.nodePubkey = e.nodePubkey),
            (this.authorizedWithdrawer = e.authorizedWithdrawer),
            (this.commission = e.commission),
            (this.rootSlot = e.rootSlot),
            (this.votes = e.votes),
            (this.authorizedVoters = e.authorizedVoters),
            (this.priorVoters = e.priorVoters),
            (this.epochCredits = e.epochCredits),
            (this.lastTimestamp = e.lastTimestamp);
        }
        static fromAccountData(e) {
          let n = u_.decode(Z(e), 4),
            o = n.rootSlot;
          return (
            n.rootSlotValid || (o = null),
            new r({
              nodePubkey: new B(n.nodePubkey),
              authorizedWithdrawer: new B(n.authorizedWithdrawer),
              commission: n.commission,
              votes: n.votes,
              rootSlot: o,
              authorizedVoters: n.authorizedVoters.map(f_),
              priorVoters: d_(n.priorVoters),
              epochCredits: n.epochCredits,
              lastTimestamp: n.lastTimestamp,
            })
          );
        }
      });
    Ya = {
      http: {
        devnet: "http://api.devnet.solana.com",
        testnet: "http://api.testnet.solana.com",
        "mainnet-beta": "http://api.mainnet-beta.solana.com/",
      },
      https: {
        devnet: "https://api.devnet.solana.com",
        testnet: "https://api.testnet.solana.com",
        "mainnet-beta": "https://api.mainnet-beta.solana.com/",
      },
    };
    y_ = 1e9;
  });
export {
  Eo as a,
  Un as b,
  fs as c,
  Dn as d,
  Qa as e,
  ft as f,
  B as g,
  ds as h,
  hy as i,
  Bt as j,
  jr as k,
  zn as l,
  Mn as m,
  Kn as n,
  Lt as o,
  Wt as p,
  dt as q,
  dn as r,
  Ls as s,
  Rt as t,
  de as u,
  fe as v,
  ls as w,
  hs as x,
  it as y,
  Ay as z,
  wy as A,
  Dr as B,
  ln as C,
  Iy as D,
  Oy as E,
  Ny as F,
  Ur as G,
  Gt as H,
  ky as I,
  U as J,
  ys as K,
  rc as L,
  gs as M,
  Kr as N,
  _s as O,
  ge as P,
  Be as Q,
  ps as R,
  vy as S,
  ms as T,
  Fr as U,
  Fn as V,
  ic as W,
  As as X,
  $r as Y,
  bt as Z,
  ws as _,
  $n as $,
  Is as aa,
  ct as ba,
  qn as ca,
  qr as da,
  Wr as ea,
  pc as fa,
  Gr as ga,
  Ht as ha,
  Os as ia,
  ke as ja,
  s_ as ka,
  yn as la,
  Hr as ma,
  Ns as na,
  i_ as oa,
  gn as pa,
  mc as qa,
  ks as ra,
  c_ as sa,
  Ts as ta,
  l_ as ua,
  h_ as va,
  y_ as wa,
  g_ as xa,
  __ as ya,
};
