import { c as wn } from "./chunk-KSNGGPAZ.js";
import {
  a as N,
  c as $e,
  d as f,
  e as z,
  g as Ye,
  h as Pe,
  i as Je,
  k as bn,
} from "./chunk-KDBC2KU3.js";
import { a as Ge, b as gn } from "./chunk-VQJZCEAB.js";
import "./chunk-CRYW3XTN.js";
import { E as Ze, M as mn } from "./chunk-6WGECOWL.js";
import { f as te, i as Fe, l as d } from "./chunk-JOVT4LBN.js";
var Be = te((Os, _t) => {
  "use strict";
  var { keccak_256: An } = wn();
  function kt(t) {
    return Buffer.allocUnsafe(t).fill(0);
  }
  function Ln(t) {
    return t.toString(2).length;
  }
  function Ct(t, e) {
    let n = t.toString(16);
    n.length % 2 !== 0 && (n = "0" + n);
    let s = n.match(/.{1,2}/g).map((r) => parseInt(r, 16));
    for (; s.length < e; ) s.unshift(0);
    return Buffer.from(s);
  }
  function Rn(t, e) {
    let n = t < 0n,
      s;
    if (n) {
      let r = (1n << BigInt(e)) - 1n;
      s = (~t & r) + 1n;
    } else s = t;
    return (s &= (1n << BigInt(e)) - 1n), s;
  }
  function St(t, e, n) {
    let s = kt(e);
    return (
      (t = ge(t)),
      n
        ? t.length < e
          ? (t.copy(s), s)
          : t.slice(0, e)
        : t.length < e
        ? (t.copy(s, e - t.length), s)
        : t.slice(-e)
    );
  }
  function Pn(t, e) {
    return St(t, e, !0);
  }
  function ge(t) {
    if (!Buffer.isBuffer(t))
      if (Array.isArray(t)) t = Buffer.from(t);
      else if (typeof t == "string")
        xt(t) ? (t = Buffer.from(On(It(t)), "hex")) : (t = Buffer.from(t));
      else if (typeof t == "number") t = intToBuffer(t);
      else if (t == null) t = Buffer.allocUnsafe(0);
      else if (typeof t == "bigint") t = Ct(t);
      else if (t.toArray) t = Buffer.from(t.toArray());
      else throw new Error("invalid type");
    return t;
  }
  function Nn(t) {
    return (t = ge(t)), "0x" + t.toString("hex");
  }
  function Tn(t, e) {
    if (((t = ge(t)), e || (e = 256), e !== 256))
      throw new Error("unsupported");
    return Buffer.from(An(new Uint8Array(t)));
  }
  function On(t) {
    return t.length % 2 ? "0" + t : t;
  }
  function xt(t) {
    return typeof t == "string" && t.match(/^0x[0-9A-Fa-f]*$/);
  }
  function It(t) {
    return typeof t == "string" && t.startsWith("0x") ? t.slice(2) : t;
  }
  _t.exports = {
    zeros: kt,
    setLength: St,
    setLengthRight: Pn,
    isHexString: xt,
    stripHexPrefix: It,
    toBuffer: ge,
    bufferToHex: Nn,
    keccak: Tn,
    bitLengthFromBigInt: Ln,
    bufferBEFromBigInt: Ct,
    twosFromBigInt: Rn,
  };
});
var Nt = te((Ds, Pt) => {
  "use strict";
  var E = Be();
  function At(t) {
    return t.startsWith("int[")
      ? "int256" + t.slice(3)
      : t === "int"
      ? "int256"
      : t.startsWith("uint[")
      ? "uint256" + t.slice(4)
      : t === "uint"
      ? "uint256"
      : t.startsWith("fixed[")
      ? "fixed128x128" + t.slice(5)
      : t === "fixed"
      ? "fixed128x128"
      : t.startsWith("ufixed[")
      ? "ufixed128x128" + t.slice(6)
      : t === "ufixed"
      ? "ufixed128x128"
      : t;
  }
  function H(t) {
    return Number.parseInt(/^\D+(\d+)$/.exec(t)[1], 10);
  }
  function Mt(t) {
    var e = /^\D+(\d+)x(\d+)$/.exec(t);
    return [Number.parseInt(e[1], 10), Number.parseInt(e[2], 10)];
  }
  function Lt(t) {
    var e = t.match(/(.*)\[(.*?)\]$/);
    return e ? (e[2] === "" ? "dynamic" : Number.parseInt(e[2], 10)) : null;
  }
  function D(t) {
    var e = typeof t;
    if (e === "string" || e === "number") return BigInt(t);
    if (e === "bigint") return t;
    throw new Error("Argument is not a number");
  }
  function A(t, e) {
    var n, s, r, i;
    if (t === "address") return A("uint160", D(e));
    if (t === "bool") return A("uint8", e ? 1 : 0);
    if (t === "string") return A("bytes", new Buffer(e, "utf8"));
    if (jn(t)) {
      if (typeof e.length > "u") throw new Error("Not an array?");
      if (((n = Lt(t)), n !== "dynamic" && n !== 0 && e.length > n))
        throw new Error("Elements exceed array size: " + n);
      (r = []),
        (t = t.slice(0, t.lastIndexOf("["))),
        typeof e == "string" && (e = JSON.parse(e));
      for (i in e) r.push(A(t, e[i]));
      if (n === "dynamic") {
        var o = A("uint256", e.length);
        r.unshift(o);
      }
      return Buffer.concat(r);
    } else {
      if (t === "bytes")
        return (
          (e = new Buffer(e)),
          (r = Buffer.concat([A("uint256", e.length), e])),
          e.length % 32 !== 0 &&
            (r = Buffer.concat([r, E.zeros(32 - (e.length % 32))])),
          r
        );
      if (t.startsWith("bytes")) {
        if (((n = H(t)), n < 1 || n > 32))
          throw new Error("Invalid bytes<N> width: " + n);
        return E.setLengthRight(e, 32);
      } else if (t.startsWith("uint")) {
        if (((n = H(t)), n % 8 || n < 8 || n > 256))
          throw new Error("Invalid uint<N> width: " + n);
        s = D(e);
        let c = E.bitLengthFromBigInt(s);
        if (c > n)
          throw new Error("Supplied uint exceeds width: " + n + " vs " + c);
        if (s < 0) throw new Error("Supplied uint is negative");
        return E.bufferBEFromBigInt(s, 32);
      } else if (t.startsWith("int")) {
        if (((n = H(t)), n % 8 || n < 8 || n > 256))
          throw new Error("Invalid int<N> width: " + n);
        s = D(e);
        let c = E.bitLengthFromBigInt(s);
        if (c > n)
          throw new Error("Supplied int exceeds width: " + n + " vs " + c);
        let a = E.twosFromBigInt(s, 256);
        return E.bufferBEFromBigInt(a, 32);
      } else if (t.startsWith("ufixed")) {
        if (((n = Mt(t)), (s = D(e)), s < 0))
          throw new Error("Supplied ufixed is negative");
        return A("uint256", s * BigInt(2) ** BigInt(n[1]));
      } else if (t.startsWith("fixed"))
        return (n = Mt(t)), A("int256", D(e) * BigInt(2) ** BigInt(n[1]));
    }
    throw new Error("Unsupported or invalid type: " + t);
  }
  function Dn(t) {
    return t === "string" || t === "bytes" || Lt(t) === "dynamic";
  }
  function jn(t) {
    return t.lastIndexOf("]") === t.length - 1;
  }
  function Un(t, e) {
    var n = [],
      s = [],
      r = 32 * t.length;
    for (var i in t) {
      var o = At(t[i]),
        c = e[i],
        a = A(o, c);
      Dn(o) ? (n.push(A("uint256", r)), s.push(a), (r += a.length)) : n.push(a);
    }
    return Buffer.concat(n.concat(s));
  }
  function Rt(t, e) {
    if (t.length !== e.length)
      throw new Error("Number of types are not matching the values");
    for (var n, s, r = [], i = 0; i < t.length; i++) {
      var o = At(t[i]),
        c = e[i];
      if (o === "bytes") r.push(c);
      else if (o === "string") r.push(new Buffer(c, "utf8"));
      else if (o === "bool") r.push(new Buffer(c ? "01" : "00", "hex"));
      else if (o === "address") r.push(E.setLength(c, 20));
      else if (o.startsWith("bytes")) {
        if (((n = H(o)), n < 1 || n > 32))
          throw new Error("Invalid bytes<N> width: " + n);
        r.push(E.setLengthRight(c, n));
      } else if (o.startsWith("uint")) {
        if (((n = H(o)), n % 8 || n < 8 || n > 256))
          throw new Error("Invalid uint<N> width: " + n);
        s = D(c);
        let a = E.bitLengthFromBigInt(s);
        if (a > n)
          throw new Error("Supplied uint exceeds width: " + n + " vs " + a);
        r.push(E.bufferBEFromBigInt(s, n / 8));
      } else if (o.startsWith("int")) {
        if (((n = H(o)), n % 8 || n < 8 || n > 256))
          throw new Error("Invalid int<N> width: " + n);
        s = D(c);
        let a = E.bitLengthFromBigInt(s);
        if (a > n)
          throw new Error("Supplied int exceeds width: " + n + " vs " + a);
        let l = E.twosFromBigInt(s, n);
        r.push(E.bufferBEFromBigInt(l, n / 8));
      } else throw new Error("Unsupported or invalid type: " + o);
    }
    return Buffer.concat(r);
  }
  function Wn(t, e) {
    return E.keccak(Rt(t, e));
  }
  Pt.exports = { rawEncode: Un, solidityPack: Rt, soliditySHA3: Wn };
});
var Dt = te((js, Ot) => {
  "use strict";
  var M = Be(),
    Z = Nt(),
    Tt = {
      type: "object",
      properties: {
        types: {
          type: "object",
          additionalProperties: {
            type: "array",
            items: {
              type: "object",
              properties: {
                name: { type: "string" },
                type: { type: "string" },
              },
              required: ["name", "type"],
            },
          },
        },
        primaryType: { type: "string" },
        domain: { type: "object" },
        message: { type: "object" },
      },
      required: ["types", "primaryType", "domain", "message"],
    },
    qe = {
      encodeData(t, e, n, s = !0) {
        let r = ["bytes32"],
          i = [this.hashType(t, n)];
        if (s) {
          let o = (c, a, l) => {
            if (n[a] !== void 0)
              return [
                "bytes32",
                l == null
                  ? "0x0000000000000000000000000000000000000000000000000000000000000000"
                  : M.keccak(this.encodeData(a, l, n, s)),
              ];
            if (l === void 0)
              throw new Error(`missing value for field ${c} of type ${a}`);
            if (a === "bytes") return ["bytes32", M.keccak(l)];
            if (a === "string")
              return (
                typeof l == "string" && (l = Buffer.from(l, "utf8")),
                ["bytes32", M.keccak(l)]
              );
            if (a.lastIndexOf("]") === a.length - 1) {
              let p = a.slice(0, a.lastIndexOf("[")),
                h = l.map((g) => o(c, p, g));
              return [
                "bytes32",
                M.keccak(
                  Z.rawEncode(
                    h.map(([g]) => g),
                    h.map(([, g]) => g)
                  )
                ),
              ];
            }
            return [a, l];
          };
          for (let c of n[t]) {
            let [a, l] = o(c.name, c.type, e[c.name]);
            r.push(a), i.push(l);
          }
        } else
          for (let o of n[t]) {
            let c = e[o.name];
            if (c !== void 0)
              if (o.type === "bytes")
                r.push("bytes32"), (c = M.keccak(c)), i.push(c);
              else if (o.type === "string")
                r.push("bytes32"),
                  typeof c == "string" && (c = Buffer.from(c, "utf8")),
                  (c = M.keccak(c)),
                  i.push(c);
              else if (n[o.type] !== void 0)
                r.push("bytes32"),
                  (c = M.keccak(this.encodeData(o.type, c, n, s))),
                  i.push(c);
              else {
                if (o.type.lastIndexOf("]") === o.type.length - 1)
                  throw new Error(
                    "Arrays currently unimplemented in encodeData"
                  );
                r.push(o.type), i.push(c);
              }
          }
        return Z.rawEncode(r, i);
      },
      encodeType(t, e) {
        let n = "",
          s = this.findTypeDependencies(t, e).filter((r) => r !== t);
        s = [t].concat(s.sort());
        for (let r of s) {
          if (!e[r]) throw new Error("No type definition specified: " + r);
          n +=
            r +
            "(" +
            e[r].map(({ name: o, type: c }) => c + " " + o).join(",") +
            ")";
        }
        return n;
      },
      findTypeDependencies(t, e, n = []) {
        if (((t = t.match(/^\w*/)[0]), n.includes(t) || e[t] === void 0))
          return n;
        n.push(t);
        for (let s of e[t])
          for (let r of this.findTypeDependencies(s.type, e, n))
            !n.includes(r) && n.push(r);
        return n;
      },
      hashStruct(t, e, n, s = !0) {
        return M.keccak(this.encodeData(t, e, n, s));
      },
      hashType(t, e) {
        return M.keccak(this.encodeType(t, e));
      },
      sanitizeData(t) {
        let e = {};
        for (let n in Tt.properties) t[n] && (e[n] = t[n]);
        return (
          e.types && (e.types = Object.assign({ EIP712Domain: [] }, e.types)), e
        );
      },
      hash(t, e = !0) {
        let n = this.sanitizeData(t),
          s = [Buffer.from("1901", "hex")];
        return (
          s.push(this.hashStruct("EIP712Domain", n.domain, n.types, e)),
          n.primaryType !== "EIP712Domain" &&
            s.push(this.hashStruct(n.primaryType, n.message, n.types, e)),
          M.keccak(Buffer.concat(s))
        );
      },
    };
  Ot.exports = {
    TYPED_MESSAGE_SCHEMA: Tt,
    TypedDataUtils: qe,
    hashForSignTypedDataLegacy: function (t) {
      return Bn(t.data);
    },
    hashForSignTypedData_v3: function (t) {
      return qe.hash(t.data, !1);
    },
    hashForSignTypedData_v4: function (t) {
      return qe.hash(t.data);
    },
  };
  function Bn(t) {
    let e = new Error("Expect argument to be non-empty array");
    if (typeof t != "object" || !t.length) throw e;
    let n = t.map(function (i) {
        return i.type === "bytes" ? M.toBuffer(i.value) : i.value;
      }),
      s = t.map(function (i) {
        return i.type;
      }),
      r = t.map(function (i) {
        if (!i.name) throw e;
        return i.type + " " + i.name;
      });
    return Z.soliditySHA3(
      ["bytes32", "bytes32"],
      [
        Z.soliditySHA3(new Array(t.length).fill("string"), r),
        Z.soliditySHA3(s, n),
      ]
    );
  }
});
var pn = te((Ci, Ve) => {
  "use strict";
  var Qn = Object.prototype.hasOwnProperty,
    k = "~";
  function X() {}
  Object.create &&
    ((X.prototype = Object.create(null)), new X().__proto__ || (k = !1));
  function Xn(t, e, n) {
    (this.fn = t), (this.context = e), (this.once = n || !1);
  }
  function un(t, e, n, s, r) {
    if (typeof n != "function")
      throw new TypeError("The listener must be a function");
    var i = new Xn(n, s || t, r),
      o = k ? k + e : e;
    return (
      t._events[o]
        ? t._events[o].fn
          ? (t._events[o] = [t._events[o], i])
          : t._events[o].push(i)
        : ((t._events[o] = i), t._eventsCount++),
      t
    );
  }
  function Ae(t, e) {
    --t._eventsCount === 0 ? (t._events = new X()) : delete t._events[e];
  }
  function y() {
    (this._events = new X()), (this._eventsCount = 0);
  }
  y.prototype.eventNames = function () {
    var e = [],
      n,
      s;
    if (this._eventsCount === 0) return e;
    for (s in (n = this._events)) Qn.call(n, s) && e.push(k ? s.slice(1) : s);
    return Object.getOwnPropertySymbols
      ? e.concat(Object.getOwnPropertySymbols(n))
      : e;
  };
  y.prototype.listeners = function (e) {
    var n = k ? k + e : e,
      s = this._events[n];
    if (!s) return [];
    if (s.fn) return [s.fn];
    for (var r = 0, i = s.length, o = new Array(i); r < i; r++) o[r] = s[r].fn;
    return o;
  };
  y.prototype.listenerCount = function (e) {
    var n = k ? k + e : e,
      s = this._events[n];
    return s ? (s.fn ? 1 : s.length) : 0;
  };
  y.prototype.emit = function (e, n, s, r, i, o) {
    var c = k ? k + e : e;
    if (!this._events[c]) return !1;
    var a = this._events[c],
      l = arguments.length,
      p,
      h;
    if (a.fn) {
      switch ((a.once && this.removeListener(e, a.fn, void 0, !0), l)) {
        case 1:
          return a.fn.call(a.context), !0;
        case 2:
          return a.fn.call(a.context, n), !0;
        case 3:
          return a.fn.call(a.context, n, s), !0;
        case 4:
          return a.fn.call(a.context, n, s, r), !0;
        case 5:
          return a.fn.call(a.context, n, s, r, i), !0;
        case 6:
          return a.fn.call(a.context, n, s, r, i, o), !0;
      }
      for (h = 1, p = new Array(l - 1); h < l; h++) p[h - 1] = arguments[h];
      a.fn.apply(a.context, p);
    } else {
      var g = a.length,
        v;
      for (h = 0; h < g; h++)
        switch ((a[h].once && this.removeListener(e, a[h].fn, void 0, !0), l)) {
          case 1:
            a[h].fn.call(a[h].context);
            break;
          case 2:
            a[h].fn.call(a[h].context, n);
            break;
          case 3:
            a[h].fn.call(a[h].context, n, s);
            break;
          case 4:
            a[h].fn.call(a[h].context, n, s, r);
            break;
          default:
            if (!p)
              for (v = 1, p = new Array(l - 1); v < l; v++)
                p[v - 1] = arguments[v];
            a[h].fn.apply(a[h].context, p);
        }
    }
    return !0;
  };
  y.prototype.on = function (e, n, s) {
    return un(this, e, n, s, !1);
  };
  y.prototype.once = function (e, n, s) {
    return un(this, e, n, s, !0);
  };
  y.prototype.removeListener = function (e, n, s, r) {
    var i = k ? k + e : e;
    if (!this._events[i]) return this;
    if (!n) return Ae(this, i), this;
    var o = this._events[i];
    if (o.fn)
      o.fn === n && (!r || o.once) && (!s || o.context === s) && Ae(this, i);
    else {
      for (var c = 0, a = [], l = o.length; c < l; c++)
        (o[c].fn !== n || (r && !o[c].once) || (s && o[c].context !== s)) &&
          a.push(o[c]);
      a.length ? (this._events[i] = a.length === 1 ? a[0] : a) : Ae(this, i);
    }
    return this;
  };
  y.prototype.removeAllListeners = function (e) {
    var n;
    return (
      e
        ? ((n = k ? k + e : e), this._events[n] && Ae(this, n))
        : ((this._events = new X()), (this._eventsCount = 0)),
      this
    );
  };
  y.prototype.off = y.prototype.removeListener;
  y.prototype.addListener = y.prototype.on;
  y.prefixed = k;
  y.EventEmitter = y;
  typeof Ve < "u" && (Ve.exports = y);
});
var Qe = (t, e) => {
  let n;
  switch (t) {
    case "standard":
      return (
        (n = e),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
    case "circle":
      return (
        (n = e),
        `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='${e}' height='${n}' viewBox='0 0 999.81 999.81'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052fe;%7D.cls-2%7Bfill:%23fefefe;%7D.cls-3%7Bfill:%230152fe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M655-115.9h56c.83,1.59,2.36.88,3.56,1a478,478,0,0,1,75.06,10.42C891.4-81.76,978.33-32.58,1049.19,44q116.7,126,131.94,297.61c.38,4.14-.34,8.53,1.78,12.45v59c-1.58.84-.91,2.35-1,3.56a482.05,482.05,0,0,1-10.38,74.05c-24,106.72-76.64,196.76-158.83,268.93s-178.18,112.82-287.2,122.6c-4.83.43-9.86-.25-14.51,1.77H654c-1-1.68-2.69-.91-4.06-1a496.89,496.89,0,0,1-105.9-18.59c-93.54-27.42-172.78-77.59-236.91-150.94Q199.34,590.1,184.87,426.58c-.47-5.19.25-10.56-1.77-15.59V355c1.68-1,.91-2.7,1-4.06a498.12,498.12,0,0,1,18.58-105.9c26-88.75,72.64-164.9,140.6-227.57q126-116.27,297.21-131.61C645.32-114.57,650.35-113.88,655-115.9Zm377.92,500c0-192.44-156.31-349.49-347.56-350.15-194.13-.68-350.94,155.13-352.29,347.42-1.37,194.55,155.51,352.1,348.56,352.47C876.15,734.23,1032.93,577.84,1032.93,384.11Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-2' d='M1032.93,384.11c0,193.73-156.78,350.12-351.29,349.74-193-.37-349.93-157.92-348.56-352.47C334.43,189.09,491.24,33.28,685.37,34,876.62,34.62,1032.94,191.67,1032.93,384.11ZM683,496.81q43.74,0,87.48,0c15.55,0,25.32-9.72,25.33-25.21q0-87.48,0-175c0-15.83-9.68-25.46-25.59-25.46H595.77c-15.88,0-25.57,9.64-25.58,25.46q0,87.23,0,174.45c0,16.18,9.59,25.7,25.84,25.71Z' transform='translate(-183.1 115.9)'/%3E%3Cpath class='cls-3' d='M683,496.81H596c-16.25,0-25.84-9.53-25.84-25.71q0-87.23,0-174.45c0-15.82,9.7-25.46,25.58-25.46H770.22c15.91,0,25.59,9.63,25.59,25.46q0,87.47,0,175c0,15.49-9.78,25.2-25.33,25.21Q726.74,496.84,683,496.81Z' transform='translate(-183.1 115.9)'/%3E%3C/svg%3E`
      );
    case "text":
      return (
        (n = (0.1 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogo":
      return (
        (n = (0.25 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%230052ff;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    case "textLight":
      return (
        (n = (0.1 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 528.15 53.64'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Ctitle%3ECoinbase_Wordmark_SubBrands_ALL%3C/title%3E%3Cpath class='cls-1' d='M164.45,15a15,15,0,0,0-11.74,5.4V0h-8.64V52.92h8.5V48a15,15,0,0,0,11.88,5.62c10.37,0,18.21-8.21,18.21-19.3S174.67,15,164.45,15Zm-1.3,30.67c-6.19,0-10.73-4.83-10.73-11.31S157,23,163.22,23s10.66,4.82,10.66,11.37S169.34,45.65,163.15,45.65Zm83.31-14.91-6.34-.93c-3-.43-5.18-1.44-5.18-3.82,0-2.59,2.8-3.89,6.62-3.89,4.18,0,6.84,1.8,7.42,4.76h8.35c-.94-7.49-6.7-11.88-15.55-11.88-9.15,0-15.2,4.68-15.2,11.3,0,6.34,4,10,12,11.16l6.33.94c3.1.43,4.83,1.65,4.83,4,0,2.95-3,4.17-7.2,4.17-5.12,0-8-2.09-8.43-5.25h-8.49c.79,7.27,6.48,12.38,16.84,12.38,9.44,0,15.7-4.32,15.7-11.74C258.12,35.28,253.58,31.82,246.46,30.74Zm-27.65-2.3c0-8.06-4.9-13.46-15.27-13.46-9.79,0-15.26,5-16.34,12.6h8.57c.43-3,2.73-5.4,7.63-5.4,4.39,0,6.55,1.94,6.55,4.32,0,3.09-4,3.88-8.85,4.39-6.63.72-14.84,3-14.84,11.66,0,6.7,5,11,12.89,11,6.19,0,10.08-2.59,12-6.7.28,3.67,3,6.05,6.84,6.05h5v-7.7h-4.25Zm-8.5,9.36c0,5-4.32,8.64-9.57,8.64-3.24,0-6-1.37-6-4.25,0-3.67,4.39-4.68,8.42-5.11s6-1.22,7.13-2.88ZM281.09,15c-11.09,0-19.23,8.35-19.23,19.36,0,11.6,8.72,19.3,19.37,19.3,9,0,16.06-5.33,17.86-12.89h-9c-1.3,3.31-4.47,5.19-8.71,5.19-5.55,0-9.72-3.46-10.66-9.51H299.3V33.12C299.3,22.46,291.53,15,281.09,15Zm-9.87,15.26c1.37-5.18,5.26-7.7,9.72-7.7,4.9,0,8.64,2.8,9.51,7.7ZM19.3,23a9.84,9.84,0,0,1,9.5,7h9.14c-1.65-8.93-9-15-18.57-15A19,19,0,0,0,0,34.34c0,11.09,8.28,19.3,19.37,19.3,9.36,0,16.85-6,18.5-15H28.8a9.75,9.75,0,0,1-9.43,7.06c-6.27,0-10.66-4.83-10.66-11.31S13,23,19.3,23Zm41.11-8A19,19,0,0,0,41,34.34c0,11.09,8.28,19.3,19.37,19.3A19,19,0,0,0,79.92,34.27C79.92,23.33,71.64,15,60.41,15Zm.07,30.67c-6.19,0-10.73-4.83-10.73-11.31S54.22,23,60.41,23s10.8,4.89,10.8,11.37S66.67,45.65,60.48,45.65ZM123.41,15c-5.62,0-9.29,2.3-11.45,5.54V15.7h-8.57V52.92H112V32.69C112,27,115.63,23,121,23c5,0,8.06,3.53,8.06,8.64V52.92h8.64V31C137.66,21.6,132.84,15,123.41,15ZM92,.36a5.36,5.36,0,0,0-5.55,5.47,5.55,5.55,0,0,0,11.09,0A5.35,5.35,0,0,0,92,.36Zm-9.72,23h5.4V52.92h8.64V15.7h-14Zm298.17-7.7L366.2,52.92H372L375.29,44H392l3.33,8.88h6L386.87,15.7ZM377,39.23l6.45-17.56h.1l6.56,17.56ZM362.66,15.7l-7.88,29h-.11l-8.14-29H341l-8,28.93h-.1l-8-28.87H319L329.82,53h5.45l8.19-29.24h.11L352,53h5.66L368.1,15.7Zm135.25,0v4.86h12.32V52.92h5.6V20.56h12.32V15.7ZM467.82,52.92h25.54V48.06H473.43v-12h18.35V31.35H473.43V20.56h19.93V15.7H467.82ZM443,15.7h-5.6V52.92h24.32V48.06H443Zm-30.45,0h-5.61V52.92h24.32V48.06H412.52Z'/%3E%3C/svg%3E`
      );
    case "textWithLogoLight":
      return (
        (n = (0.25 * e).toFixed(2)),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 308.44 77.61'%3E%3Cdefs%3E%3Cstyle%3E.cls-1%7Bfill:%23fefefe;%7D%3C/style%3E%3C/defs%3E%3Cpath class='cls-1' d='M142.94,20.2l-7.88,29H135l-8.15-29h-5.55l-8,28.93h-.11l-8-28.87H99.27l10.84,37.27h5.44l8.2-29.24h.1l8.41,29.24h5.66L148.39,20.2Zm17.82,0L146.48,57.42h5.82l3.28-8.88h16.65l3.34,8.88h6L167.16,20.2Zm-3.44,23.52,6.45-17.55h.11l6.56,17.55ZM278.2,20.2v4.86h12.32V57.42h5.6V25.06h12.32V20.2ZM248.11,57.42h25.54V52.55H253.71V40.61h18.35V35.85H253.71V25.06h19.94V20.2H248.11ZM223.26,20.2h-5.61V57.42H242V52.55H223.26Zm-30.46,0h-5.6V57.42h24.32V52.55H192.8Zm-154,38A19.41,19.41,0,1,1,57.92,35.57H77.47a38.81,38.81,0,1,0,0,6.47H57.92A19.39,19.39,0,0,1,38.81,58.21Z'/%3E%3C/svg%3E`
      );
    default:
      return (
        (n = e),
        `data:image/svg+xml,%3Csvg width='${e}' height='${n}' viewBox='0 0 1024 1024' fill='none' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='1024' height='1024' fill='%230052FF'/%3E %3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M152 512C152 710.823 313.177 872 512 872C710.823 872 872 710.823 872 512C872 313.177 710.823 152 512 152C313.177 152 152 313.177 152 512ZM420 396C406.745 396 396 406.745 396 420V604C396 617.255 406.745 628 420 628H604C617.255 628 628 617.255 628 604V420C628 406.745 617.255 396 604 396H420Z' fill='white'/%3E %3C/svg%3E `
      );
  }
};
var b = class t {
  constructor(e, n) {
    (this.scope = e), (this.module = n);
  }
  storeObject(e, n) {
    this.setItem(e, JSON.stringify(n));
  }
  loadObject(e) {
    let n = this.getItem(e);
    return n ? JSON.parse(n) : void 0;
  }
  setItem(e, n) {
    localStorage.setItem(this.scopedKey(e), n);
  }
  getItem(e) {
    return localStorage.getItem(this.scopedKey(e));
  }
  removeItem(e) {
    localStorage.removeItem(this.scopedKey(e));
  }
  clear() {
    let e = this.scopedKey(""),
      n = [];
    for (let s = 0; s < localStorage.length; s++) {
      let r = localStorage.key(s);
      typeof r == "string" && r.startsWith(e) && n.push(r);
    }
    n.forEach((s) => localStorage.removeItem(s));
  }
  scopedKey(e) {
    return `-${this.scope}${this.module ? `:${this.module}` : ""}:${e}`;
  }
  static clearAll() {
    new t("CBWSDK").clear(), new t("walletlink").clear();
  }
};
var m = {
    rpc: {
      invalidInput: -32e3,
      resourceNotFound: -32001,
      resourceUnavailable: -32002,
      transactionRejected: -32003,
      methodNotSupported: -32004,
      limitExceeded: -32005,
      parse: -32700,
      invalidRequest: -32600,
      methodNotFound: -32601,
      invalidParams: -32602,
      internal: -32603,
    },
    provider: {
      userRejectedRequest: 4001,
      unauthorized: 4100,
      unsupportedMethod: 4200,
      disconnected: 4900,
      chainDisconnected: 4901,
      unsupportedChain: 4902,
    },
  },
  ne = {
    "-32700": {
      standard: "JSON RPC 2.0",
      message:
        "Invalid JSON was received by the server. An error occurred on the server while parsing the JSON text.",
    },
    "-32600": {
      standard: "JSON RPC 2.0",
      message: "The JSON sent is not a valid Request object.",
    },
    "-32601": {
      standard: "JSON RPC 2.0",
      message: "The method does not exist / is not available.",
    },
    "-32602": {
      standard: "JSON RPC 2.0",
      message: "Invalid method parameter(s).",
    },
    "-32603": { standard: "JSON RPC 2.0", message: "Internal JSON-RPC error." },
    "-32000": { standard: "EIP-1474", message: "Invalid input." },
    "-32001": { standard: "EIP-1474", message: "Resource not found." },
    "-32002": { standard: "EIP-1474", message: "Resource unavailable." },
    "-32003": { standard: "EIP-1474", message: "Transaction rejected." },
    "-32004": { standard: "EIP-1474", message: "Method not supported." },
    "-32005": { standard: "EIP-1474", message: "Request limit exceeded." },
    4001: { standard: "EIP-1193", message: "User rejected the request." },
    4100: {
      standard: "EIP-1193",
      message:
        "The requested account and/or method has not been authorized by the user.",
    },
    4200: {
      standard: "EIP-1193",
      message:
        "The requested method is not supported by this Solana provider.",
    },
    4900: {
      standard: "EIP-1193",
      message: "The provider is disconnected from all chains.",
    },
    4901: {
      standard: "EIP-1193",
      message: "The provider is disconnected from the specified chain.",
    },
    4902: { standard: "EIP-3085", message: "Unrecognized chain ID." },
  };
var tt = "Unspecified error message.",
  yn = "Unspecified server error.";
function se(t, e = tt) {
  if (t && Number.isInteger(t)) {
    let n = t.toString();
    if (Ne(ne, n)) return ne[n].message;
    if (st(t)) return yn;
  }
  return e;
}
function vn(t) {
  if (!Number.isInteger(t)) return !1;
  let e = t.toString();
  return !!(ne[e] || st(t));
}
function nt(t, { shouldIncludeStack: e = !1 } = {}) {
  let n = {};
  if (
    t &&
    typeof t == "object" &&
    !Array.isArray(t) &&
    Ne(t, "code") &&
    vn(t.code)
  ) {
    let s = t;
    (n.code = s.code),
      s.message && typeof s.message == "string"
        ? ((n.message = s.message), Ne(s, "data") && (n.data = s.data))
        : ((n.message = se(n.code)), (n.data = { originalError: Xe(t) }));
  } else
    (n.code = m.rpc.internal),
      (n.message = et(t, "message") ? t.message : tt),
      (n.data = { originalError: Xe(t) });
  return e && (n.stack = et(t, "stack") ? t.stack : void 0), n;
}
function st(t) {
  return t >= -32099 && t <= -32e3;
}
function Xe(t) {
  return t && typeof t == "object" && !Array.isArray(t)
    ? Object.assign({}, t)
    : t;
}
function Ne(t, e) {
  return Object.prototype.hasOwnProperty.call(t, e);
}
function et(t, e) {
  return (
    typeof t == "object" && t !== null && e in t && typeof t[e] == "string"
  );
}
var u = {
  rpc: {
    parse: (t) => C(m.rpc.parse, t),
    invalidRequest: (t) => C(m.rpc.invalidRequest, t),
    invalidParams: (t) => C(m.rpc.invalidParams, t),
    methodNotFound: (t) => C(m.rpc.methodNotFound, t),
    internal: (t) => C(m.rpc.internal, t),
    server: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Solana RPC Server errors must provide single object argument."
        );
      let { code: e } = t;
      if (!Number.isInteger(e) || e > -32005 || e < -32099)
        throw new Error(
          '"code" must be an integer such that: -32099 <= code <= -32005'
        );
      return C(e, t);
    },
    invalidInput: (t) => C(m.rpc.invalidInput, t),
    resourceNotFound: (t) => C(m.rpc.resourceNotFound, t),
    resourceUnavailable: (t) => C(m.rpc.resourceUnavailable, t),
    transactionRejected: (t) => C(m.rpc.transactionRejected, t),
    methodNotSupported: (t) => C(m.rpc.methodNotSupported, t),
    limitExceeded: (t) => C(m.rpc.limitExceeded, t),
  },
  provider: {
    userRejectedRequest: (t) => j(m.provider.userRejectedRequest, t),
    unauthorized: (t) => j(m.provider.unauthorized, t),
    unsupportedMethod: (t) => j(m.provider.unsupportedMethod, t),
    disconnected: (t) => j(m.provider.disconnected, t),
    chainDisconnected: (t) => j(m.provider.chainDisconnected, t),
    unsupportedChain: (t) => j(m.provider.unsupportedChain, t),
    custom: (t) => {
      if (!t || typeof t != "object" || Array.isArray(t))
        throw new Error(
          "Solana Provider custom errors must provide single object argument."
        );
      let { code: e, message: n, data: s } = t;
      if (!n || typeof n != "string")
        throw new Error('"message" must be a nonempty string');
      return new ie(e, n, s);
    },
  },
};
function C(t, e) {
  let [n, s] = rt(e);
  return new re(t, n || se(t), s);
}
function j(t, e) {
  let [n, s] = rt(e);
  return new ie(t, n || se(t), s);
}
function rt(t) {
  if (t) {
    if (typeof t == "string") return [t];
    if (typeof t == "object" && !Array.isArray(t)) {
      let { message: e, data: n } = t;
      if (e && typeof e != "string")
        throw new Error("Must specify string message.");
      return [e || void 0, n];
    }
  }
  return [];
}
var re = class extends Error {
    constructor(e, n, s) {
      if (!Number.isInteger(e)) throw new Error('"code" must be an integer.');
      if (!n || typeof n != "string")
        throw new Error('"message" must be a nonempty string.');
      super(n), (this.code = e), s !== void 0 && (this.data = s);
    }
  },
  ie = class extends re {
    constructor(e, n, s) {
      if (!En(e))
        throw new Error(
          '"code" must be an integer such that: 1000 <= code <= 4999'
        );
      super(e, n, s);
    }
  };
function En(t) {
  return Number.isInteger(t) && t >= 1e3 && t <= 4999;
}
function oe() {
  return (t) => t;
}
var U = oe(),
  it = oe(),
  ot = oe();
function x(t) {
  return Math.floor(t);
}
var kn = oe();
var at = /^[0-9]*$/,
  ct = /^[a-f0-9]*$/;
function L(t) {
  return F(crypto.getRandomValues(new Uint8Array(t)));
}
function F(t) {
  return [...t].map((e) => e.toString(16).padStart(2, "0")).join("");
}
function W(t) {
  return new Uint8Array(t.match(/.{1,2}/g).map((e) => Number.parseInt(e, 16)));
}
function T(t, e = !1) {
  let n = t.toString("hex");
  return U(e ? `0x${n}` : n);
}
function ae(t) {
  return T(de(t), !0);
}
function I(t) {
  return ot(t.toString(10));
}
function _(t) {
  return U(`0x${BigInt(t).toString(16)}`);
}
function dt(t) {
  return t.startsWith("0x") || t.startsWith("0X");
}
function Te(t) {
  return dt(t) ? t.slice(2) : t;
}
function Oe(t) {
  return dt(t) ? `0x${t.slice(2)}` : `0x${t}`;
}
function ce(t) {
  if (typeof t != "string") return !1;
  let e = Te(t).toLowerCase();
  return ct.test(e);
}
function Cn(t, e = !1) {
  if (typeof t == "string") {
    let n = Te(t).toLowerCase();
    if (ct.test(n)) return U(e ? `0x${n}` : n);
  }
  throw u.rpc.invalidParams(`"${String(t)}" is not a hexadecimal string`);
}
function De(t, e = !1) {
  let n = Cn(t, !1);
  return n.length % 2 === 1 && (n = U(`0${n}`)), e ? U(`0x${n}`) : n;
}
function R(t) {
  if (typeof t == "string") {
    let e = Te(t).toLowerCase();
    if (ce(e) && e.length === 40) return it(Oe(e));
  }
  throw u.rpc.invalidParams(`Invalid Solana address: ${String(t)}`);
}
function de(t) {
  if (Buffer.isBuffer(t)) return t;
  if (typeof t == "string") {
    if (ce(t)) {
      let e = De(t, !1);
      return Buffer.from(e, "hex");
    }
    return Buffer.from(t, "utf8");
  }
  throw u.rpc.invalidParams(`Not binary data: ${String(t)}`);
}
function O(t) {
  if (typeof t == "number" && Number.isInteger(t)) return x(t);
  if (typeof t == "string") {
    if (at.test(t)) return x(Number(t));
    if (ce(t)) return x(Number(BigInt(De(t, !0))));
  }
  throw u.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
function B(t) {
  if (t !== null && (typeof t == "bigint" || Sn(t)))
    return BigInt(t.toString(10));
  if (typeof t == "number") return BigInt(O(t));
  if (typeof t == "string") {
    if (at.test(t)) return BigInt(t);
    if (ce(t)) return BigInt(De(t, !0));
  }
  throw u.rpc.invalidParams(`Not an integer: ${String(t)}`);
}
function lt(t) {
  if (typeof t == "string") return JSON.parse(t);
  if (typeof t == "object") return t;
  throw u.rpc.invalidParams(`Not a JSON string or an object: ${String(t)}`);
}
function Sn(t) {
  if (t == null || typeof t.constructor != "function") return !1;
  let { constructor: e } = t;
  return typeof e.config == "function" && typeof e.EUCLID == "number";
}
function ht() {
  let t =
      document.querySelector('link[sizes="192x192"]') ||
      document.querySelector('link[sizes="180x180"]') ||
      document.querySelector('link[rel="icon"]') ||
      document.querySelector('link[rel="shortcut icon"]'),
    { protocol: e, host: n } = document.location,
    s = t ? t.getAttribute("href") : null;
  return !s || s.startsWith("javascript:") || s.startsWith("vbscript:")
    ? `${e}//${n}/favicon.ico`
    : s.startsWith("http://") ||
      s.startsWith("https://") ||
      s.startsWith("data:")
    ? s
    : s.startsWith("//")
    ? e + s
    : `${e}//${n}${s}`;
}
function ut() {
  return d(this, null, function* () {
    return crypto.subtle.generateKey(
      { name: "ECDH", namedCurve: "P-256" },
      !0,
      ["deriveKey"]
    );
  });
}
function pt(t, e) {
  return d(this, null, function* () {
    return crypto.subtle.deriveKey(
      { name: "ECDH", public: e },
      t,
      { name: "AES-GCM", length: 256 },
      !1,
      ["encrypt", "decrypt"]
    );
  });
}
function xn(t, e) {
  return d(this, null, function* () {
    let n = crypto.getRandomValues(new Uint8Array(12)),
      s = yield crypto.subtle.encrypt(
        { name: "AES-GCM", iv: n },
        t,
        new TextEncoder().encode(e)
      );
    return { iv: n, cipherText: s };
  });
}
function In(s, r) {
  return d(this, arguments, function* (t, { iv: e, cipherText: n }) {
    let i = yield crypto.subtle.decrypt({ name: "AES-GCM", iv: e }, t, n);
    return new TextDecoder().decode(i);
  });
}
function ft(t) {
  switch (t) {
    case "public":
      return "spki";
    case "private":
      return "pkcs8";
  }
}
function le(t, e) {
  return d(this, null, function* () {
    let n = ft(t),
      s = yield crypto.subtle.exportKey(n, e);
    return F(new Uint8Array(s));
  });
}
function he(t, e) {
  return d(this, null, function* () {
    let n = ft(t),
      s = W(e).buffer;
    return yield crypto.subtle.importKey(
      n,
      new Uint8Array(s),
      { name: "ECDH", namedCurve: "P-256" },
      !0,
      t === "private" ? ["deriveKey"] : []
    );
  });
}
function mt(t, e) {
  return d(this, null, function* () {
    let n = JSON.stringify(t, (s, r) => {
      if (!(r instanceof Error)) return r;
      let i = r;
      return Object.assign(Object.assign({}, i.code ? { code: i.code } : {}), {
        message: i.message,
      });
    });
    return xn(e, n);
  });
}
function gt(t, e) {
  return d(this, null, function* () {
    return JSON.parse(yield In(e, t));
  });
}
var je = { storageKey: "ownPrivateKey", keyType: "private" },
  Ue = { storageKey: "ownPublicKey", keyType: "public" },
  We = { storageKey: "peerPublicKey", keyType: "public" },
  ue = class {
    constructor() {
      (this.storage = new b("CBWSDK", "SCWKeyManager")),
        (this.ownPrivateKey = null),
        (this.ownPublicKey = null),
        (this.peerPublicKey = null),
        (this.sharedSecret = null);
    }
    getOwnPublicKey() {
      return d(this, null, function* () {
        return yield this.loadKeysIfNeeded(), this.ownPublicKey;
      });
    }
    getSharedSecret() {
      return d(this, null, function* () {
        return yield this.loadKeysIfNeeded(), this.sharedSecret;
      });
    }
    setPeerPublicKey(e) {
      return d(this, null, function* () {
        (this.sharedSecret = null),
          (this.peerPublicKey = e),
          yield this.storeKey(We, e),
          yield this.loadKeysIfNeeded();
      });
    }
    clear() {
      return d(this, null, function* () {
        (this.ownPrivateKey = null),
          (this.ownPublicKey = null),
          (this.peerPublicKey = null),
          (this.sharedSecret = null),
          this.storage.removeItem(Ue.storageKey),
          this.storage.removeItem(je.storageKey),
          this.storage.removeItem(We.storageKey);
      });
    }
    generateKeyPair() {
      return d(this, null, function* () {
        let e = yield ut();
        (this.ownPrivateKey = e.privateKey),
          (this.ownPublicKey = e.publicKey),
          yield this.storeKey(je, e.privateKey),
          yield this.storeKey(Ue, e.publicKey);
      });
    }
    loadKeysIfNeeded() {
      return d(this, null, function* () {
        if (
          (this.ownPrivateKey === null &&
            (this.ownPrivateKey = yield this.loadKey(je)),
          this.ownPublicKey === null &&
            (this.ownPublicKey = yield this.loadKey(Ue)),
          (this.ownPrivateKey === null || this.ownPublicKey === null) &&
            (yield this.generateKeyPair()),
          this.peerPublicKey === null &&
            (this.peerPublicKey = yield this.loadKey(We)),
          this.sharedSecret === null)
        ) {
          if (this.ownPrivateKey === null || this.peerPublicKey === null)
            return;
          this.sharedSecret = yield pt(this.ownPrivateKey, this.peerPublicKey);
        }
      });
    }
    loadKey(e) {
      return d(this, null, function* () {
        let n = this.storage.getItem(e.storageKey);
        return n ? he(e.keyType, n) : null;
      });
    }
    storeKey(e, n) {
      return d(this, null, function* () {
        let s = yield le(e.keyType, n);
        this.storage.setItem(e.storageKey, s);
      });
    }
  };
var S = "4.3.0",
  pe = "@coinbase/wallet-sdk";
function q(t, e) {
  return d(this, null, function* () {
    let n = Object.assign(Object.assign({}, t), {
        jsonrpc: "2.0",
        id: crypto.randomUUID(),
      }),
      s = yield window.fetch(e, {
        method: "POST",
        body: JSON.stringify(n),
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "X-Cbw-Sdk-Version": S,
          "X-Cbw-Sdk-Platform": pe,
        },
      }),
      { result: r, error: i } = yield s.json();
    if (i) throw i;
    return r;
  });
}
function _n() {
  return globalThis.coinbaseWalletExtension;
}
function Mn() {
  var t, e;
  try {
    let n = globalThis;
    return (t = n.Solana) !== null && t !== void 0
      ? t
      : (e = n.top) === null || e === void 0
      ? void 0
      : e.Solana;
  } catch {
    return;
  }
}
function fe({ metadata: t, preference: e }) {
  var n, s;
  let { appName: r, appLogoUrl: i, appChainIds: o } = t;
  if (e.options !== "smartWalletOnly") {
    let a = _n();
    if (a)
      return (
        (n = a.setAppInfo) === null || n === void 0 || n.call(a, r, i, o, e), a
      );
  }
  let c = Mn();
  if (c?.isCoinbaseBrowser)
    return (
      (s = c.setAppInfo) === null || s === void 0 || s.call(c, r, i, o, e), c
    );
}
function wt(t) {
  if (!t || typeof t != "object" || Array.isArray(t))
    throw u.rpc.invalidParams({
      message: "Expected a single, non-array, object argument.",
      data: t,
    });
  let { method: e, params: n } = t;
  if (typeof e != "string" || e.length === 0)
    throw u.rpc.invalidParams({
      message: "'args.method' must be a non-empty string.",
      data: t,
    });
  if (n !== void 0 && !Array.isArray(n) && (typeof n != "object" || n === null))
    throw u.rpc.invalidParams({
      message: "'args.params' must be an object or array if provided.",
      data: t,
    });
  switch (e) {
    case "eth_sign":
    case "eth_signTypedData_v2":
    case "eth_subscribe":
    case "eth_unsubscribe":
      throw u.provider.unsupportedMethod();
  }
}
var bt = "accounts",
  yt = "activeChain",
  vt = "availableChains",
  Et = "walletCapabilities",
  me = class {
    constructor(e) {
      var n, s, r;
      (this.metadata = e.metadata),
        (this.communicator = e.communicator),
        (this.callback = e.callback),
        (this.keyManager = new ue()),
        (this.storage = new b("CBWSDK", "SCWStateManager")),
        (this.accounts =
          (n = this.storage.loadObject(bt)) !== null && n !== void 0 ? n : []),
        (this.chain = this.storage.loadObject(yt) || {
          id:
            (r =
              (s = e.metadata.appChainIds) === null || s === void 0
                ? void 0
                : s[0]) !== null && r !== void 0
              ? r
              : 1,
        }),
        (this.handshake = this.handshake.bind(this)),
        (this.request = this.request.bind(this)),
        (this.createRequestMessage = this.createRequestMessage.bind(this)),
        (this.decryptResponseMessage = this.decryptResponseMessage.bind(this));
    }
    handshake(e) {
      return d(this, null, function* () {
        var n, s, r, i;
        yield (s = (n = this.communicator).waitForPopupLoaded) === null ||
        s === void 0
          ? void 0
          : s.call(n);
        let o = yield this.createRequestMessage({
            handshake: {
              method: e.method,
              params: Object.assign(
                {},
                this.metadata,
                (r = e.params) !== null && r !== void 0 ? r : {}
              ),
            },
          }),
          c = yield this.communicator.postRequestAndWaitForResponse(o);
        if ("failure" in c.content) throw c.content.failure;
        let a = yield he("public", c.sender);
        yield this.keyManager.setPeerPublicKey(a);
        let p = (yield this.decryptResponseMessage(c)).result;
        if ("error" in p) throw p.error;
        switch (e.method) {
          case "eth_requestAccounts": {
            let h = p.value;
            (this.accounts = h),
              this.storage.storeObject(bt, h),
              (i = this.callback) === null ||
                i === void 0 ||
                i.call(this, "accountsChanged", h);
            break;
          }
        }
      });
    }
    request(e) {
      return d(this, null, function* () {
        var n;
        if (this.accounts.length === 0)
          switch (e.method) {
            case "wallet_sendCalls":
              return this.sendRequestToPopup(e);
            default:
              throw u.provider.unauthorized();
          }
        switch (e.method) {
          case "eth_requestAccounts":
            return (
              (n = this.callback) === null ||
                n === void 0 ||
                n.call(this, "connect", { chainId: _(this.chain.id) }),
              this.accounts
            );
          case "eth_accounts":
            return this.accounts;
          case "eth_coinbase":
            return this.accounts[0];
          case "net_version":
            return this.chain.id;
          case "eth_chainId":
            return _(this.chain.id);
          case "wallet_getCapabilities":
            return this.storage.loadObject(Et);
          case "wallet_switchSolanaChain":
            return this.handleSwitchChainRequest(e);
          case "eth_ecRecover":
          case "personal_sign":
          case "wallet_sign":
          case "personal_ecRecover":
          case "eth_signTransaction":
          case "eth_sendTransaction":
          case "eth_signTypedData_v1":
          case "eth_signTypedData_v3":
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
          case "wallet_addSolanaChain":
          case "wallet_watchAsset":
          case "wallet_sendCalls":
          case "wallet_showCallsStatus":
          case "wallet_grantPermissions":
            return this.sendRequestToPopup(e);
          default:
            if (!this.chain.rpcUrl)
              throw u.rpc.internal("No RPC URL set for chain");
            return q(e, this.chain.rpcUrl);
        }
      });
    }
    sendRequestToPopup(e) {
      return d(this, null, function* () {
        var n, s;
        yield (s = (n = this.communicator).waitForPopupLoaded) === null ||
        s === void 0
          ? void 0
          : s.call(n);
        let r = yield this.sendEncryptedRequest(e),
          o = (yield this.decryptResponseMessage(r)).result;
        if ("error" in o) throw o.error;
        return o.value;
      });
    }
    cleanup() {
      return d(this, null, function* () {
        var e, n;
        this.storage.clear(),
          yield this.keyManager.clear(),
          (this.accounts = []),
          (this.chain = {
            id:
              (n =
                (e = this.metadata.appChainIds) === null || e === void 0
                  ? void 0
                  : e[0]) !== null && n !== void 0
                ? n
                : 1,
          });
      });
    }
    handleSwitchChainRequest(e) {
      return d(this, null, function* () {
        var n;
        let s = e.params;
        if (!s || !(!((n = s[0]) === null || n === void 0) && n.chainId))
          throw u.rpc.invalidParams();
        let r = O(s[0].chainId);
        if (this.updateChain(r)) return null;
        let o = yield this.sendRequestToPopup(e);
        return o === null && this.updateChain(r), o;
      });
    }
    sendEncryptedRequest(e) {
      return d(this, null, function* () {
        let n = yield this.keyManager.getSharedSecret();
        if (!n)
          throw u.provider.unauthorized(
            "No valid session found, try requestAccounts before other methods"
          );
        let s = yield mt({ action: e, chainId: this.chain.id }, n),
          r = yield this.createRequestMessage({ encrypted: s });
        return this.communicator.postRequestAndWaitForResponse(r);
      });
    }
    createRequestMessage(e) {
      return d(this, null, function* () {
        let n = yield le("public", yield this.keyManager.getOwnPublicKey());
        return {
          id: crypto.randomUUID(),
          sender: n,
          content: e,
          timestamp: new Date(),
        };
      });
    }
    decryptResponseMessage(e) {
      return d(this, null, function* () {
        var n, s;
        let r = e.content;
        if ("failure" in r) throw r.failure;
        let i = yield this.keyManager.getSharedSecret();
        if (!i) throw u.provider.unauthorized("Invalid session");
        let o = yield gt(r.encrypted, i),
          c = (n = o.data) === null || n === void 0 ? void 0 : n.chains;
        if (c) {
          let l = Object.entries(c).map(([p, h]) => ({
            id: Number(p),
            rpcUrl: h,
          }));
          this.storage.storeObject(vt, l), this.updateChain(this.chain.id, l);
        }
        let a = (s = o.data) === null || s === void 0 ? void 0 : s.capabilities;
        return a && this.storage.storeObject(Et, a), o;
      });
    }
    updateChain(e, n) {
      var s;
      let r = n ?? this.storage.loadObject(vt),
        i = r?.find((o) => o.id === e);
      return i
        ? (i !== this.chain &&
            ((this.chain = i),
            this.storage.storeObject(yt, i),
            (s = this.callback) === null ||
              s === void 0 ||
              s.call(this, "chainChanged", _(i.id))),
          !0)
        : !1;
    }
  };
var J = Fe(Dt(), 1);
var jt = "walletUsername",
  G = "Addresses",
  Ut = "AppVersion";
function w(t) {
  return t.errorMessage !== void 0;
}
var we = class {
  constructor(e) {
    this.secret = e;
  }
  encrypt(e) {
    return d(this, null, function* () {
      let n = this.secret;
      if (n.length !== 64) throw Error("secret must be 256 bits");
      let s = crypto.getRandomValues(new Uint8Array(12)),
        r = yield crypto.subtle.importKey(
          "raw",
          W(n),
          { name: "aes-gcm" },
          !1,
          ["encrypt", "decrypt"]
        ),
        i = new TextEncoder(),
        o = yield window.crypto.subtle.encrypt(
          { name: "AES-GCM", iv: s },
          r,
          i.encode(e)
        ),
        c = 16,
        a = o.slice(o.byteLength - c),
        l = o.slice(0, o.byteLength - c),
        p = new Uint8Array(a),
        h = new Uint8Array(l),
        g = new Uint8Array([...s, ...p, ...h]);
      return F(g);
    });
  }
  decrypt(e) {
    return d(this, null, function* () {
      let n = this.secret;
      if (n.length !== 64) throw Error("secret must be 256 bits");
      return new Promise((s, r) => {
        (function () {
          return d(this, null, function* () {
            let i = yield crypto.subtle.importKey(
                "raw",
                W(n),
                { name: "aes-gcm" },
                !1,
                ["encrypt", "decrypt"]
              ),
              o = W(e),
              c = o.slice(0, 12),
              a = o.slice(12, 28),
              l = o.slice(28),
              p = new Uint8Array([...l, ...a]),
              h = { name: "AES-GCM", iv: new Uint8Array(c) };
            try {
              let g = yield window.crypto.subtle.decrypt(h, i, p),
                v = new TextDecoder();
              s(v.decode(g));
            } catch (g) {
              r(g);
            }
          });
        })();
      });
    });
  }
};
var be = class {
  constructor(e, n, s) {
    (this.linkAPIUrl = e), (this.sessionId = n);
    let r = `${n}:${s}`;
    this.auth = `Basic ${btoa(r)}`;
  }
  markUnseenEventsAsSeen(e) {
    return d(this, null, function* () {
      return Promise.all(
        e.map((n) =>
          fetch(`${this.linkAPIUrl}/events/${n.eventId}/seen`, {
            method: "POST",
            headers: { Authorization: this.auth },
          })
        )
      ).catch((n) => console.error("Unabled to mark event as failed:", n));
    });
  }
  fetchUnseenEvents() {
    return d(this, null, function* () {
      var e;
      let n = yield fetch(`${this.linkAPIUrl}/events?unseen=true`, {
        headers: { Authorization: this.auth },
      });
      if (n.ok) {
        let { events: s, error: r } = yield n.json();
        if (r) throw new Error(`Check unseen events failed: ${r}`);
        let i =
          (e = s
            ?.filter((o) => o.event === "Web3Response")
            .map((o) => ({
              type: "Event",
              sessionId: this.sessionId,
              eventId: o.id,
              event: o.event,
              data: o.data,
            }))) !== null && e !== void 0
            ? e
            : [];
        return this.markUnseenEventsAsSeen(i), i;
      }
      throw new Error(`Check unseen events failed: ${n.status}`);
    });
  }
};
var P = (function (t) {
    return (
      (t[(t.DISCONNECTED = 0)] = "DISCONNECTED"),
      (t[(t.CONNECTING = 1)] = "CONNECTING"),
      (t[(t.CONNECTED = 2)] = "CONNECTED"),
      t
    );
  })(P || {}),
  ye = class {
    setConnectionStateListener(e) {
      this.connectionStateListener = e;
    }
    setIncomingDataListener(e) {
      this.incomingDataListener = e;
    }
    constructor(e, n = WebSocket) {
      (this.WebSocketClass = n),
        (this.webSocket = null),
        (this.pendingData = []),
        (this.url = e.replace(/^http/, "ws"));
    }
    connect() {
      return d(this, null, function* () {
        if (this.webSocket) throw new Error("webSocket object is not null");
        return new Promise((e, n) => {
          var s;
          let r;
          try {
            this.webSocket = r = new this.WebSocketClass(this.url);
          } catch (i) {
            n(i);
            return;
          }
          (s = this.connectionStateListener) === null ||
            s === void 0 ||
            s.call(this, P.CONNECTING),
            (r.onclose = (i) => {
              var o;
              this.clearWebSocket(),
                n(new Error(`websocket error ${i.code}: ${i.reason}`)),
                (o = this.connectionStateListener) === null ||
                  o === void 0 ||
                  o.call(this, P.DISCONNECTED);
            }),
            (r.onopen = (i) => {
              var o;
              e(),
                (o = this.connectionStateListener) === null ||
                  o === void 0 ||
                  o.call(this, P.CONNECTED),
                this.pendingData.length > 0 &&
                  ([...this.pendingData].forEach((a) => this.sendData(a)),
                  (this.pendingData = []));
            }),
            (r.onmessage = (i) => {
              var o, c;
              if (i.data === "h")
                (o = this.incomingDataListener) === null ||
                  o === void 0 ||
                  o.call(this, { type: "Heartbeat" });
              else
                try {
                  let a = JSON.parse(i.data);
                  (c = this.incomingDataListener) === null ||
                    c === void 0 ||
                    c.call(this, a);
                } catch {}
            });
        });
      });
    }
    disconnect() {
      var e;
      let { webSocket: n } = this;
      if (n) {
        this.clearWebSocket(),
          (e = this.connectionStateListener) === null ||
            e === void 0 ||
            e.call(this, P.DISCONNECTED),
          (this.connectionStateListener = void 0),
          (this.incomingDataListener = void 0);
        try {
          n.close();
        } catch {}
      }
    }
    sendData(e) {
      let { webSocket: n } = this;
      if (!n) {
        this.pendingData.push(e), this.connect();
        return;
      }
      n.send(e);
    }
    clearWebSocket() {
      let { webSocket: e } = this;
      e &&
        ((this.webSocket = null),
        (e.onclose = null),
        (e.onerror = null),
        (e.onmessage = null),
        (e.onopen = null));
    }
  };
var Wt = 1e4,
  qn = 6e4,
  ve = class {
    constructor({ session: e, linkAPIUrl: n, listener: s }) {
      (this.destroyed = !1),
        (this.lastHeartbeatResponse = 0),
        (this.nextReqId = x(1)),
        (this._connected = !1),
        (this._linked = !1),
        (this.shouldFetchUnseenEventsOnConnect = !1),
        (this.requestResolutions = new Map()),
        (this.handleSessionMetadataUpdated = (i) => {
          if (!i) return;
          new Map([
            ["__destroyed", this.handleDestroyed],
            ["SolanaAddress", this.handleAccountUpdated],
            ["WalletUsername", this.handleWalletUsernameUpdated],
            ["AppVersion", this.handleAppVersionUpdated],
            [
              "ChainId",
              (c) => i.JsonRpcUrl && this.handleChainUpdated(c, i.JsonRpcUrl),
            ],
          ]).forEach((c, a) => {
            let l = i[a];
            l !== void 0 && c(l);
          });
        }),
        (this.handleDestroyed = (i) => {
          var o;
          i === "1" &&
            ((o = this.listener) === null ||
              o === void 0 ||
              o.resetAndReload());
        }),
        (this.handleAccountUpdated = (i) =>
          d(this, null, function* () {
            var o;
            let c = yield this.cipher.decrypt(i);
            (o = this.listener) === null || o === void 0 || o.accountUpdated(c);
          })),
        (this.handleMetadataUpdated = (i, o) =>
          d(this, null, function* () {
            var c;
            let a = yield this.cipher.decrypt(o);
            (c = this.listener) === null ||
              c === void 0 ||
              c.metadataUpdated(i, a);
          })),
        (this.handleWalletUsernameUpdated = (i) =>
          d(this, null, function* () {
            this.handleMetadataUpdated(jt, i);
          })),
        (this.handleAppVersionUpdated = (i) =>
          d(this, null, function* () {
            this.handleMetadataUpdated(Ut, i);
          })),
        (this.handleChainUpdated = (i, o) =>
          d(this, null, function* () {
            var c;
            let a = yield this.cipher.decrypt(i),
              l = yield this.cipher.decrypt(o);
            (c = this.listener) === null ||
              c === void 0 ||
              c.chainUpdated(a, l);
          })),
        (this.session = e),
        (this.cipher = new we(e.secret)),
        (this.listener = s);
      let r = new ye(`${n}/rpc`, WebSocket);
      r.setConnectionStateListener((i) =>
        d(this, null, function* () {
          let o = !1;
          switch (i) {
            case P.DISCONNECTED:
              if (!this.destroyed) {
                let c = () =>
                  d(this, null, function* () {
                    yield new Promise((a) => setTimeout(a, 5e3)),
                      this.destroyed ||
                        r.connect().catch(() => {
                          c();
                        });
                  });
                c();
              }
              break;
            case P.CONNECTED:
              (o = yield this.handleConnected()),
                this.updateLastHeartbeat(),
                setInterval(() => {
                  this.heartbeat();
                }, Wt),
                this.shouldFetchUnseenEventsOnConnect &&
                  this.fetchUnseenEventsAPI();
              break;
            case P.CONNECTING:
              break;
          }
          this.connected !== o && (this.connected = o);
        })
      ),
        r.setIncomingDataListener((i) => {
          var o;
          switch (i.type) {
            case "Heartbeat":
              this.updateLastHeartbeat();
              return;
            case "IsLinkedOK":
            case "Linked": {
              let c = i.type === "IsLinkedOK" ? i.linked : void 0;
              this.linked = c || i.onlineGuests > 0;
              break;
            }
            case "GetSessionConfigOK":
            case "SessionConfigUpdated": {
              this.handleSessionMetadataUpdated(i.metadata);
              break;
            }
            case "Event": {
              this.handleIncomingEvent(i);
              break;
            }
          }
          i.id !== void 0 &&
            ((o = this.requestResolutions.get(i.id)) === null ||
              o === void 0 ||
              o(i));
        }),
        (this.ws = r),
        (this.http = new be(n, e.id, e.key));
    }
    connect() {
      if (this.destroyed) throw new Error("instance is destroyed");
      this.ws.connect();
    }
    destroy() {
      return d(this, null, function* () {
        this.destroyed ||
          (yield this.makeRequest(
            {
              type: "SetSessionConfig",
              id: x(this.nextReqId++),
              sessionId: this.session.id,
              metadata: { __destroyed: "1" },
            },
            { timeout: 1e3 }
          ),
          (this.destroyed = !0),
          this.ws.disconnect(),
          (this.listener = void 0));
      });
    }
    get connected() {
      return this._connected;
    }
    set connected(e) {
      this._connected = e;
    }
    get linked() {
      return this._linked;
    }
    set linked(e) {
      var n, s;
      (this._linked = e),
        e && ((n = this.onceLinked) === null || n === void 0 || n.call(this)),
        (s = this.listener) === null || s === void 0 || s.linkedUpdated(e);
    }
    setOnceLinked(e) {
      return new Promise((n) => {
        this.linked
          ? e().then(n)
          : (this.onceLinked = () => {
              e().then(n), (this.onceLinked = void 0);
            });
      });
    }
    handleIncomingEvent(e) {
      return d(this, null, function* () {
        var n;
        if (e.type !== "Event" || e.event !== "Web3Response") return;
        let s = yield this.cipher.decrypt(e.data),
          r = JSON.parse(s);
        if (r.type !== "WEB3_RESPONSE") return;
        let { id: i, response: o } = r;
        (n = this.listener) === null ||
          n === void 0 ||
          n.handleWeb3ResponseMessage(i, o);
      });
    }
    checkUnseenEvents() {
      return d(this, null, function* () {
        if (!this.connected) {
          this.shouldFetchUnseenEventsOnConnect = !0;
          return;
        }
        yield new Promise((e) => setTimeout(e, 250));
        try {
          yield this.fetchUnseenEventsAPI();
        } catch (e) {
          console.error("Unable to check for unseen events", e);
        }
      });
    }
    fetchUnseenEventsAPI() {
      return d(this, null, function* () {
        (this.shouldFetchUnseenEventsOnConnect = !1),
          (yield this.http.fetchUnseenEvents()).forEach((n) =>
            this.handleIncomingEvent(n)
          );
      });
    }
    publishEvent(e, n, s = !1) {
      return d(this, null, function* () {
        let r = yield this.cipher.encrypt(
            JSON.stringify(
              Object.assign(Object.assign({}, n), {
                origin: location.origin,
                location: location.href,
                relaySource:
                  "coinbaseWalletExtension" in window &&
                  window.coinbaseWalletExtension
                    ? "injected_sdk"
                    : "sdk",
              })
            )
          ),
          i = {
            type: "PublishEvent",
            id: x(this.nextReqId++),
            sessionId: this.session.id,
            event: e,
            data: r,
            callWebhook: s,
          };
        return this.setOnceLinked(() =>
          d(this, null, function* () {
            let o = yield this.makeRequest(i);
            if (o.type === "Fail")
              throw new Error(o.error || "failed to publish event");
            return o.eventId;
          })
        );
      });
    }
    sendData(e) {
      this.ws.sendData(JSON.stringify(e));
    }
    updateLastHeartbeat() {
      this.lastHeartbeatResponse = Date.now();
    }
    heartbeat() {
      if (Date.now() - this.lastHeartbeatResponse > Wt * 2) {
        this.ws.disconnect();
        return;
      }
      try {
        this.ws.sendData("h");
      } catch {}
    }
    makeRequest(s) {
      return d(this, arguments, function* (e, n = { timeout: qn }) {
        let r = e.id;
        this.sendData(e);
        let i;
        return Promise.race([
          new Promise((o, c) => {
            i = window.setTimeout(() => {
              c(new Error(`request ${r} timed out`));
            }, n.timeout);
          }),
          new Promise((o) => {
            this.requestResolutions.set(r, (c) => {
              clearTimeout(i), o(c), this.requestResolutions.delete(r);
            });
          }),
        ]);
      });
    }
    handleConnected() {
      return d(this, null, function* () {
        return (yield this.makeRequest({
          type: "HostSession",
          id: x(this.nextReqId++),
          sessionId: this.session.id,
          sessionKey: this.session.key,
        })).type === "Fail"
          ? !1
          : (this.sendData({
              type: "IsLinked",
              id: x(this.nextReqId++),
              sessionId: this.session.id,
            }),
            this.sendData({
              type: "GetSessionConfig",
              id: x(this.nextReqId++),
              sessionId: this.session.id,
            }),
            !0);
      });
    }
  };
var Ee = class {
  constructor() {
    (this._nextRequestId = 0), (this.callbacks = new Map());
  }
  makeRequestId() {
    this._nextRequestId = (this._nextRequestId + 1) % 2147483647;
    let e = this._nextRequestId,
      n = Oe(e.toString(16));
    return this.callbacks.get(n) && this.callbacks.delete(n), e;
  }
};
gn();
mn();
var Bt = "session:id",
  qt = "session:secret",
  Ht = "session:linked",
  K = class t {
    constructor(e, n, s, r = !1) {
      (this.storage = e),
        (this.id = n),
        (this.secret = s),
        (this.key = Ze(Ge(`${n}, ${s} WalletLink`))),
        (this._linked = !!r);
    }
    static create(e) {
      let n = L(16),
        s = L(32);
      return new t(e, n, s).save();
    }
    static load(e) {
      let n = e.getItem(Bt),
        s = e.getItem(Ht),
        r = e.getItem(qt);
      return n && r ? new t(e, n, r, s === "1") : null;
    }
    get linked() {
      return this._linked;
    }
    set linked(e) {
      (this._linked = e), this.persistLinked();
    }
    save() {
      return (
        this.storage.setItem(Bt, this.id),
        this.storage.setItem(qt, this.secret),
        this.persistLinked(),
        this
      );
    }
    persistLinked() {
      this.storage.setItem(Ht, this._linked ? "1" : "0");
    }
  };
function Hn() {
  try {
    return window.frameElement !== null;
  } catch {
    return !1;
  }
}
function Kt() {
  try {
    return Hn() && window.top ? window.top.location : window.location;
  } catch {
    return window.location;
  }
}
function Vt() {
  var t;
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    (t = window?.navigator) === null || t === void 0 ? void 0 : t.userAgent
  );
}
function ke() {
  var t, e;
  return (e =
    (t = window?.matchMedia) === null || t === void 0
      ? void 0
      : t.call(window, "(prefers-color-scheme: dark)").matches) !== null &&
    e !== void 0
    ? e
    : !1;
}
var zt =
  '@namespace svg "http://www.w3.org/2000/svg";.-cbwsdk-css-reset,.-cbwsdk-css-reset *{animation:none;animation-delay:0;animation-direction:normal;animation-duration:0;animation-fill-mode:none;animation-iteration-count:1;animation-name:none;animation-play-state:running;animation-timing-function:ease;backface-visibility:visible;background:0;background-attachment:scroll;background-clip:border-box;background-color:rgba(0,0,0,0);background-image:none;background-origin:padding-box;background-position:0 0;background-position-x:0;background-position-y:0;background-repeat:repeat;background-size:auto auto;border:0;border-style:none;border-width:medium;border-color:inherit;border-bottom:0;border-bottom-color:inherit;border-bottom-left-radius:0;border-bottom-right-radius:0;border-bottom-style:none;border-bottom-width:medium;border-collapse:separate;border-image:none;border-left:0;border-left-color:inherit;border-left-style:none;border-left-width:medium;border-radius:0;border-right:0;border-right-color:inherit;border-right-style:none;border-right-width:medium;border-spacing:0;border-top:0;border-top-color:inherit;border-top-left-radius:0;border-top-right-radius:0;border-top-style:none;border-top-width:medium;box-shadow:none;box-sizing:border-box;caption-side:top;clear:none;clip:auto;color:inherit;columns:auto;column-count:auto;column-fill:balance;column-gap:normal;column-rule:medium none currentColor;column-rule-color:currentColor;column-rule-style:none;column-rule-width:none;column-span:1;column-width:auto;counter-increment:none;counter-reset:none;direction:ltr;empty-cells:show;float:none;font:normal;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;font-size:medium;font-style:normal;font-variant:normal;font-weight:normal;height:auto;hyphens:none;letter-spacing:normal;line-height:normal;list-style:none;list-style-image:none;list-style-position:outside;list-style-type:disc;margin:0;margin-bottom:0;margin-left:0;margin-right:0;margin-top:0;opacity:1;orphans:0;outline:0;outline-color:invert;outline-style:none;outline-width:medium;overflow:visible;overflow-x:visible;overflow-y:visible;padding:0;padding-bottom:0;padding-left:0;padding-right:0;padding-top:0;page-break-after:auto;page-break-before:auto;page-break-inside:auto;perspective:none;perspective-origin:50% 50%;pointer-events:auto;position:static;quotes:"\\201C" "\\201D" "\\2018" "\\2019";tab-size:8;table-layout:auto;text-align:inherit;text-align-last:auto;text-decoration:none;text-decoration-color:inherit;text-decoration-line:none;text-decoration-style:solid;text-indent:0;text-shadow:none;text-transform:none;transform:none;transform-style:flat;transition:none;transition-delay:0s;transition-duration:0s;transition-property:none;transition-timing-function:ease;unicode-bidi:normal;vertical-align:baseline;visibility:visible;white-space:normal;widows:0;word-spacing:normal;z-index:auto}.-cbwsdk-css-reset strong{font-weight:bold}.-cbwsdk-css-reset *{box-sizing:border-box;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","Helvetica Neue",Arial,sans-serif;line-height:1}.-cbwsdk-css-reset [class*=container]{margin:0;padding:0}.-cbwsdk-css-reset style{display:none}';
function Ce() {
  let t = document.createElement("style");
  (t.type = "text/css"),
    t.appendChild(document.createTextNode(zt)),
    document.documentElement.appendChild(t);
}
$e();
Ye();
bn();
var Ft =
  ".-cbwsdk-css-reset .-gear-container{margin-left:16px !important;margin-right:9px !important;display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:opacity .25s}.-cbwsdk-css-reset .-gear-container *{user-select:none}.-cbwsdk-css-reset .-gear-container svg{opacity:0;position:absolute}.-cbwsdk-css-reset .-gear-icon{height:12px;width:12px;z-index:10000}.-cbwsdk-css-reset .-cbwsdk-snackbar{align-items:flex-end;display:flex;flex-direction:column;position:fixed;right:0;top:0;z-index:2147483647}.-cbwsdk-css-reset .-cbwsdk-snackbar *{user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance{display:flex;flex-direction:column;margin:8px 16px 0 16px;overflow:visible;text-align:left;transform:translateX(0);transition:opacity .25s,transform .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header:hover .-gear-container svg{opacity:1}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header{display:flex;align-items:center;background:#fff;overflow:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-cblogo{margin:8px 8px 8px 8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-header-message{color:#000;font-size:13px;line-height:1.5;user-select:none}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu{background:#fff;transition:opacity .25s ease-in-out,transform .25s linear,visibility 0s;visibility:hidden;border:1px solid #e7ebee;box-sizing:border-box;border-radius:8px;opacity:0;flex-direction:column;padding-left:8px;padding-right:8px}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:last-child{margin-bottom:8px !important}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover{background:#f5f7f8;border-radius:6px;transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover span{color:#050f19;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item:hover svg path{fill:#000;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item{visibility:inherit;height:35px;margin-top:8px;margin-bottom:0;display:flex;flex-direction:row;align-items:center;padding:8px;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item *{visibility:inherit;cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover{background:rgba(223,95,103,.2);transition:background .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover *{cursor:pointer}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover svg path{fill:#df5f67;transition:fill .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-is-red:hover span{color:#df5f67;transition:color .25s}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-menu-item-info{color:#aaa;font-size:13px;margin:0 8px 0 32px;position:absolute}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-hidden{opacity:0;text-align:left;transform:translateX(25%);transition:opacity .5s linear}.-cbwsdk-css-reset .-cbwsdk-snackbar-instance-expanded .-cbwsdk-snackbar-instance-menu{opacity:1;display:flex;transform:translateY(8px);visibility:visible}";
var Kn =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEuNDkyIDEwLjQxOWE4LjkzIDguOTMgMCAwMTguOTMtOC45M2gxMS4xNjNhOC45MyA4LjkzIDAgMDE4LjkzIDguOTN2MTEuMTYzYTguOTMgOC45MyAwIDAxLTguOTMgOC45M0gxMC40MjJhOC45MyA4LjkzIDAgMDEtOC45My04LjkzVjEwLjQxOXoiIGZpbGw9IiMxNjUyRjAiLz48cGF0aCBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGNsaXAtcnVsZT0iZXZlbm9kZCIgZD0iTTEwLjQxOSAwSDIxLjU4QzI3LjMzNSAwIDMyIDQuNjY1IDMyIDEwLjQxOVYyMS41OEMzMiAyNy4zMzUgMjcuMzM1IDMyIDIxLjU4MSAzMkgxMC40MkM0LjY2NSAzMiAwIDI3LjMzNSAwIDIxLjU4MVYxMC40MkMwIDQuNjY1IDQuNjY1IDAgMTAuNDE5IDB6bTAgMS40ODhhOC45MyA4LjkzIDAgMDAtOC45MyA4LjkzdjExLjE2M2E4LjkzIDguOTMgMCAwMDguOTMgOC45M0gyMS41OGE4LjkzIDguOTMgMCAwMDguOTMtOC45M1YxMC40MmE4LjkzIDguOTMgMCAwMC04LjkzLTguOTNIMTAuNDJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbC1ydWxlPSJldmVub2RkIiBjbGlwLXJ1bGU9ImV2ZW5vZGQiIGQ9Ik0xNS45OTggMjYuMDQ5Yy01LjU0OSAwLTEwLjA0Ny00LjQ5OC0xMC4wNDctMTAuMDQ3IDAtNS41NDggNC40OTgtMTAuMDQ2IDEwLjA0Ny0xMC4wNDYgNS41NDggMCAxMC4wNDYgNC40OTggMTAuMDQ2IDEwLjA0NiAwIDUuNTQ5LTQuNDk4IDEwLjA0Ny0xMC4wNDYgMTAuMDQ3eiIgZmlsbD0iI2ZmZiIvPjxwYXRoIGQ9Ik0xMi43NjIgMTQuMjU0YzAtLjgyMi42NjctMS40ODkgMS40ODktMS40ODloMy40OTdjLjgyMiAwIDEuNDg4LjY2NiAxLjQ4OCAxLjQ4OXYzLjQ5N2MwIC44MjItLjY2NiAxLjQ4OC0xLjQ4OCAxLjQ4OGgtMy40OTdhMS40ODggMS40ODggMCAwMS0xLjQ4OS0xLjQ4OHYtMy40OTh6IiBmaWxsPSIjMTY1MkYwIi8+PC9zdmc+",
  Vn =
    "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTIiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTEyIDYuNzV2LTEuNWwtMS43Mi0uNTdjLS4wOC0uMjctLjE5LS41Mi0uMzItLjc3bC44MS0xLjYyLTEuMDYtMS4wNi0xLjYyLjgxYy0uMjQtLjEzLS41LS4yNC0uNzctLjMyTDYuNzUgMGgtMS41bC0uNTcgMS43MmMtLjI3LjA4LS41My4xOS0uNzcuMzJsLTEuNjItLjgxLTEuMDYgMS4wNi44MSAxLjYyYy0uMTMuMjQtLjI0LjUtLjMyLjc3TDAgNS4yNXYxLjVsMS43Mi41N2MuMDguMjcuMTkuNTMuMzIuNzdsLS44MSAxLjYyIDEuMDYgMS4wNiAxLjYyLS44MWMuMjQuMTMuNS4yMy43Ny4zMkw1LjI1IDEyaDEuNWwuNTctMS43MmMuMjctLjA4LjUyLS4xOS43Ny0uMzJsMS42Mi44MSAxLjA2LTEuMDYtLjgxLTEuNjJjLjEzLS4yNC4yMy0uNS4zMi0uNzdMMTIgNi43NXpNNiA4LjVhMi41IDIuNSAwIDAxMC01IDIuNSAyLjUgMCAwMTAgNXoiIGZpbGw9IiMwNTBGMTkiLz48L3N2Zz4=",
  Se = class {
    constructor() {
      (this.items = new Map()),
        (this.nextItemKey = 0),
        (this.root = null),
        (this.darkMode = ke());
    }
    attach(e) {
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-snackbar-root"),
        e.appendChild(this.root),
        this.render();
    }
    presentItem(e) {
      let n = this.nextItemKey++;
      return (
        this.items.set(n, e),
        this.render(),
        () => {
          this.items.delete(n), this.render();
        }
      );
    }
    clear() {
      this.items.clear(), this.render();
    }
    render() {
      this.root &&
        z(
          f(
            "div",
            null,
            f(
              He,
              { darkMode: this.darkMode },
              Array.from(this.items.entries()).map(([e, n]) =>
                f(zn, Object.assign({}, n, { key: e }))
              )
            )
          ),
          this.root
        );
    }
  },
  He = (t) =>
    f(
      "div",
      { class: N("-cbwsdk-snackbar-container") },
      f("style", null, Ft),
      f("div", { class: "-cbwsdk-snackbar" }, t.children)
    ),
  zn = ({ autoExpand: t, message: e, menuItems: n }) => {
    let [s, r] = Pe(!0),
      [i, o] = Pe(t ?? !1);
    Je(() => {
      let a = [
        window.setTimeout(() => {
          r(!1);
        }, 1),
        window.setTimeout(() => {
          o(!0);
        }, 1e4),
      ];
      return () => {
        a.forEach(window.clearTimeout);
      };
    });
    let c = () => {
      o(!i);
    };
    return f(
      "div",
      {
        class: N(
          "-cbwsdk-snackbar-instance",
          s && "-cbwsdk-snackbar-instance-hidden",
          i && "-cbwsdk-snackbar-instance-expanded"
        ),
      },
      f(
        "div",
        { class: "-cbwsdk-snackbar-instance-header", onClick: c },
        f("img", { src: Kn, class: "-cbwsdk-snackbar-instance-header-cblogo" }),
        " ",
        f("div", { class: "-cbwsdk-snackbar-instance-header-message" }, e),
        f(
          "div",
          { class: "-gear-container" },
          !i &&
            f(
              "svg",
              {
                width: "24",
                height: "24",
                viewBox: "0 0 24 24",
                fill: "none",
                xmlns: "http://www.w3.org/2000/svg",
              },
              f("circle", { cx: "12", cy: "12", r: "12", fill: "#F5F7F8" })
            ),
          f("img", { src: Vn, class: "-gear-icon", title: "Expand" })
        )
      ),
      n &&
        n.length > 0 &&
        f(
          "div",
          { class: "-cbwsdk-snackbar-instance-menu" },
          n.map((a, l) =>
            f(
              "div",
              {
                class: N(
                  "-cbwsdk-snackbar-instance-menu-item",
                  a.isRed && "-cbwsdk-snackbar-instance-menu-item-is-red"
                ),
                onClick: a.onClick,
                key: l,
              },
              f(
                "svg",
                {
                  width: a.svgWidth,
                  height: a.svgHeight,
                  viewBox: "0 0 10 11",
                  fill: "none",
                  xmlns: "http://www.w3.org/2000/svg",
                },
                f("path", {
                  "fill-rule": a.defaultFillRule,
                  "clip-rule": a.defaultClipRule,
                  d: a.path,
                  fill: "#AAAAAA",
                })
              ),
              f(
                "span",
                {
                  class: N(
                    "-cbwsdk-snackbar-instance-menu-item-info",
                    a.isRed && "-cbwsdk-snackbar-instance-menu-item-info-is-red"
                  ),
                },
                a.info
              )
            )
          )
        )
    );
  };
var xe = class {
  constructor() {
    (this.attached = !1), (this.snackbar = new Se());
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    let e = document.documentElement,
      n = document.createElement("div");
    (n.className = "-cbwsdk-css-reset"),
      e.appendChild(n),
      this.snackbar.attach(n),
      (this.attached = !0),
      Ce();
  }
  showConnecting(e) {
    let n;
    return (
      e.isUnlinkedErrorState
        ? (n = {
            autoExpand: !0,
            message: "Connection lost",
            menuItems: [
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection,
              },
            ],
          })
        : (n = {
            message: "Confirm on phone",
            menuItems: [
              {
                isRed: !0,
                info: "Cancel transaction",
                svgWidth: "11",
                svgHeight: "11",
                path: "M10.3711 1.52346L9.21775 0.370117L5.37109 4.21022L1.52444 0.370117L0.371094 1.52346L4.2112 5.37012L0.371094 9.21677L1.52444 10.3701L5.37109 6.53001L9.21775 10.3701L10.3711 9.21677L6.53099 5.37012L10.3711 1.52346Z",
                defaultFillRule: "inherit",
                defaultClipRule: "inherit",
                onClick: e.onCancel,
              },
              {
                isRed: !1,
                info: "Reset connection",
                svgWidth: "10",
                svgHeight: "11",
                path: "M5.00008 0.96875C6.73133 0.96875 8.23758 1.94375 9.00008 3.375L10.0001 2.375V5.5H9.53133H7.96883H6.87508L7.80633 4.56875C7.41258 3.3875 6.31258 2.53125 5.00008 2.53125C3.76258 2.53125 2.70633 3.2875 2.25633 4.36875L0.812576 3.76875C1.50008 2.125 3.11258 0.96875 5.00008 0.96875ZM2.19375 6.43125C2.5875 7.6125 3.6875 8.46875 5 8.46875C6.2375 8.46875 7.29375 7.7125 7.74375 6.63125L9.1875 7.23125C8.5 8.875 6.8875 10.0312 5 10.0312C3.26875 10.0312 1.7625 9.05625 1 7.625L0 8.625V5.5H0.46875H2.03125H3.125L2.19375 6.43125Z",
                defaultFillRule: "evenodd",
                defaultClipRule: "evenodd",
                onClick: e.onResetConnection,
              },
            ],
          }),
      this.snackbar.presentItem(n)
    );
  }
};
$e();
Ye();
var Zt =
  ".-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;transition:opacity .25s;background-color:rgba(10,11,13,.5)}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-backdrop-hidden{opacity:0}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box{display:block;position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);padding:20px;border-radius:8px;background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box p{display:block;font-weight:400;font-size:14px;line-height:20px;padding-bottom:12px;color:#5b636e}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box button{appearance:none;border:none;background:none;color:#0052ff;padding:0;text-decoration:none;display:block;font-weight:600;font-size:16px;line-height:24px}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark{background-color:#0a0b0d;color:#fff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.dark button{color:#0052ff}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light{background-color:#fff;color:#0a0b0d}.-cbwsdk-css-reset .-cbwsdk-redirect-dialog-box.light button{color:#0052ff}";
var Ie = class {
    constructor() {
      (this.root = null), (this.darkMode = ke());
    }
    attach() {
      let e = document.documentElement;
      (this.root = document.createElement("div")),
        (this.root.className = "-cbwsdk-css-reset"),
        e.appendChild(this.root),
        Ce();
    }
    present(e) {
      this.render(e);
    }
    clear() {
      this.render(null);
    }
    render(e) {
      this.root &&
        (z(null, this.root),
        e &&
          z(
            f(
              Fn,
              Object.assign({}, e, {
                onDismiss: () => {
                  this.clear();
                },
                darkMode: this.darkMode,
              })
            ),
            this.root
          ));
    }
  },
  Fn = ({
    title: t,
    buttonText: e,
    darkMode: n,
    onButtonClick: s,
    onDismiss: r,
  }) => {
    let i = n ? "dark" : "light";
    return f(
      He,
      { darkMode: n },
      f(
        "div",
        { class: "-cbwsdk-redirect-dialog" },
        f("style", null, Zt),
        f("div", { class: "-cbwsdk-redirect-dialog-backdrop", onClick: r }),
        f(
          "div",
          { class: N("-cbwsdk-redirect-dialog-box", i) },
          f("p", null, t),
          f("button", { onClick: s }, e)
        )
      )
    );
  };
var Gt = "https://keys.coinbase.com/connect",
  $t = "http://rpc.wallet.coinbase.com",
  Ke = "https://www.walletlink.org",
  Yt = "https://go.cb-w.com/walletlink";
var $ = class {
  constructor() {
    (this.attached = !1), (this.redirectDialog = new Ie());
  }
  attach() {
    if (this.attached)
      throw new Error("Coinbase Wallet SDK UI is already attached");
    this.redirectDialog.attach(), (this.attached = !0);
  }
  redirectToCoinbaseWallet(e) {
    let n = new URL(Yt);
    n.searchParams.append("redirect_url", Kt().href),
      e && n.searchParams.append("wl_url", e);
    let s = document.createElement("a");
    (s.target = "cbw-opener"),
      (s.href = n.href),
      (s.rel = "noreferrer noopener"),
      s.click();
  }
  openCoinbaseWalletDeeplink(e) {
    this.redirectDialog.present({
      title: "Redirecting to Coinbase Wallet...",
      buttonText: "Open",
      onButtonClick: () => {
        this.redirectToCoinbaseWallet(e);
      },
    }),
      setTimeout(() => {
        this.redirectToCoinbaseWallet(e);
      }, 99);
  }
  showConnecting(e) {
    return () => {
      this.redirectDialog.clear();
    };
  }
};
var Y = class t {
  constructor(e) {
    (this.chainCallbackParams = { chainId: "", jsonRpcUrl: "" }),
      (this.isMobileWeb = Vt()),
      (this.linkedUpdated = (i) => {
        this.isLinked = i;
        let o = this.storage.getItem(G);
        if (
          (i && (this._session.linked = i), (this.isUnlinkedErrorState = !1), o)
        ) {
          let c = o.split(" "),
            a = this.storage.getItem("IsStandaloneSigning") === "true";
          c[0] !== "" &&
            !i &&
            this._session.linked &&
            !a &&
            (this.isUnlinkedErrorState = !0);
        }
      }),
      (this.metadataUpdated = (i, o) => {
        this.storage.setItem(i, o);
      }),
      (this.chainUpdated = (i, o) => {
        (this.chainCallbackParams.chainId === i &&
          this.chainCallbackParams.jsonRpcUrl === o) ||
          ((this.chainCallbackParams = { chainId: i, jsonRpcUrl: o }),
          this.chainCallback && this.chainCallback(o, Number.parseInt(i, 10)));
      }),
      (this.accountUpdated = (i) => {
        this.accountsCallback && this.accountsCallback([i]),
          t.accountRequestCallbackIds.size > 0 &&
            (Array.from(t.accountRequestCallbackIds.values()).forEach((o) => {
              this.invokeCallback(o, {
                method: "requestSolanaAccounts",
                result: [i],
              });
            }),
            t.accountRequestCallbackIds.clear());
      }),
      (this.resetAndReload = this.resetAndReload.bind(this)),
      (this.linkAPIUrl = e.linkAPIUrl),
      (this.storage = e.storage),
      (this.metadata = e.metadata),
      (this.accountsCallback = e.accountsCallback),
      (this.chainCallback = e.chainCallback);
    let { session: n, ui: s, connection: r } = this.subscribe();
    (this._session = n),
      (this.connection = r),
      (this.relayEventManager = new Ee()),
      (this.ui = s),
      this.ui.attach();
  }
  subscribe() {
    let e = K.load(this.storage) || K.create(this.storage),
      { linkAPIUrl: n } = this,
      s = new ve({ session: e, linkAPIUrl: n, listener: this }),
      r = this.isMobileWeb ? new $() : new xe();
    return s.connect(), { session: e, ui: r, connection: s };
  }
  resetAndReload() {
    this.connection
      .destroy()
      .then(() => {
        let e = K.load(this.storage);
        e?.id === this._session.id && b.clearAll(), document.location.reload();
      })
      .catch((e) => {});
  }
  signSolanaTransaction(e) {
    return this.sendRequest({
      method: "signSolanaTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: I(e.weiValue),
        data: T(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? I(e.gasPriceInWei) : null,
        maxFeePerGas: e.gasPriceInWei ? I(e.gasPriceInWei) : null,
        maxPriorityFeePerGas: e.gasPriceInWei ? I(e.gasPriceInWei) : null,
        gasLimit: e.gasLimit ? I(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !1,
      },
    });
  }
  signAndSubmitSolanaTransaction(e) {
    return this.sendRequest({
      method: "signSolanaTransaction",
      params: {
        fromAddress: e.fromAddress,
        toAddress: e.toAddress,
        weiValue: I(e.weiValue),
        data: T(e.data, !0),
        nonce: e.nonce,
        gasPriceInWei: e.gasPriceInWei ? I(e.gasPriceInWei) : null,
        maxFeePerGas: e.maxFeePerGas ? I(e.maxFeePerGas) : null,
        maxPriorityFeePerGas: e.maxPriorityFeePerGas
          ? I(e.maxPriorityFeePerGas)
          : null,
        gasLimit: e.gasLimit ? I(e.gasLimit) : null,
        chainId: e.chainId,
        shouldSubmit: !0,
      },
    });
  }
  submitSolanaTransaction(e, n) {
    return this.sendRequest({
      method: "submitSolanaTransaction",
      params: { signedTransaction: T(e, !0), chainId: n },
    });
  }
  getWalletLinkSession() {
    return this._session;
  }
  sendRequest(e) {
    let n = null,
      s = L(8),
      r = (i) => {
        this.publishWeb3RequestCanceledEvent(s),
          this.handleErrorResponse(s, e.method, i),
          n?.();
      };
    return new Promise((i, o) => {
      (n = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: r,
        onResetConnection: this.resetAndReload,
      })),
        this.relayEventManager.callbacks.set(s, (c) => {
          if ((n?.(), w(c))) return o(new Error(c.errorMessage));
          i(c);
        }),
        this.publishWeb3RequestEvent(s, e);
    });
  }
  publishWeb3RequestEvent(e, n) {
    let s = { type: "WEB3_REQUEST", id: e, request: n };
    this.publishEvent("Web3Request", s, !0)
      .then((r) => {})
      .catch((r) => {
        this.handleWeb3ResponseMessage(s.id, {
          method: n.method,
          errorMessage: r.message,
        });
      }),
      this.isMobileWeb && this.openCoinbaseWalletDeeplink(n.method);
  }
  openCoinbaseWalletDeeplink(e) {
    if (this.ui instanceof $)
      switch (e) {
        case "requestSolanaAccounts":
        case "switchSolanaChain":
          return;
        default:
          window.addEventListener(
            "blur",
            () => {
              window.addEventListener(
                "focus",
                () => {
                  this.connection.checkUnseenEvents();
                },
                { once: !0 }
              );
            },
            { once: !0 }
          ),
            this.ui.openCoinbaseWalletDeeplink();
          break;
      }
  }
  publishWeb3RequestCanceledEvent(e) {
    let n = { type: "WEB3_REQUEST_CANCELED", id: e };
    this.publishEvent("Web3RequestCanceled", n, !1).then();
  }
  publishEvent(e, n, s) {
    return this.connection.publishEvent(e, n, s);
  }
  handleWeb3ResponseMessage(e, n) {
    if (n.method === "requestSolanaAccounts") {
      t.accountRequestCallbackIds.forEach((s) => this.invokeCallback(s, n)),
        t.accountRequestCallbackIds.clear();
      return;
    }
    this.invokeCallback(e, n);
  }
  handleErrorResponse(e, n, s) {
    var r;
    let i =
      (r = s?.message) !== null && r !== void 0
        ? r
        : "Unspecified error message.";
    this.handleWeb3ResponseMessage(e, { method: n, errorMessage: i });
  }
  invokeCallback(e, n) {
    let s = this.relayEventManager.callbacks.get(e);
    s && (s(n), this.relayEventManager.callbacks.delete(e));
  }
  requestSolanaAccounts() {
    let { appName: e, appLogoUrl: n } = this.metadata,
      s = {
        method: "requestSolanaAccounts",
        params: { appName: e, appLogoUrl: n },
      },
      r = null,
      i = L(8);
    return new Promise((o, c) => {
      this.relayEventManager.callbacks.set(i, (a) => {
        if ((r?.(), w(a))) return c(new Error(a.errorMessage));
        o(a);
      }),
        t.accountRequestCallbackIds.add(i),
        this.publishWeb3RequestEvent(i, s);
    });
  }
  watchAsset(e, n, s, r, i, o) {
    let c = {
        method: "watchAsset",
        params: {
          type: e,
          options: { address: n, symbol: s, decimals: r, image: i },
          chainId: o,
        },
      },
      a = null,
      l = L(8),
      p = (h) => {
        this.publishWeb3RequestCanceledEvent(l),
          this.handleErrorResponse(l, c.method, h),
          a?.();
      };
    return (
      (a = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: p,
        onResetConnection: this.resetAndReload,
      })),
      new Promise((h, g) => {
        this.relayEventManager.callbacks.set(l, (v) => {
          if ((a?.(), w(v))) return g(new Error(v.errorMessage));
          h(v);
        }),
          this.publishWeb3RequestEvent(l, c);
      })
    );
  }
  addSolanaChain(e, n, s, r, i, o) {
    let c = {
        method: "addSolanaChain",
        params: {
          chainId: e,
          rpcUrls: n,
          blockExplorerUrls: r,
          chainName: i,
          iconUrls: s,
          nativeCurrency: o,
        },
      },
      a = null,
      l = L(8),
      p = (h) => {
        this.publishWeb3RequestCanceledEvent(l),
          this.handleErrorResponse(l, c.method, h),
          a?.();
      };
    return (
      (a = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: p,
        onResetConnection: this.resetAndReload,
      })),
      new Promise((h, g) => {
        this.relayEventManager.callbacks.set(l, (v) => {
          if ((a?.(), w(v))) return g(new Error(v.errorMessage));
          h(v);
        }),
          this.publishWeb3RequestEvent(l, c);
      })
    );
  }
  switchSolanaChain(e, n) {
    let s = {
        method: "switchSolanaChain",
        params: Object.assign({ chainId: e }, { address: n }),
      },
      r = null,
      i = L(8),
      o = (c) => {
        this.publishWeb3RequestCanceledEvent(i),
          this.handleErrorResponse(i, s.method, c),
          r?.();
      };
    return (
      (r = this.ui.showConnecting({
        isUnlinkedErrorState: this.isUnlinkedErrorState,
        onCancel: o,
        onResetConnection: this.resetAndReload,
      })),
      new Promise((c, a) => {
        this.relayEventManager.callbacks.set(i, (l) => {
          if ((r?.(), w(l) && l.errorCode))
            return a(
              u.provider.custom({
                code: l.errorCode,
                message:
                  "Unrecognized chain ID. Try adding the chain using addSolanaChain first.",
              })
            );
          if (w(l)) return a(new Error(l.errorMessage));
          c(l);
        }),
          this.publishWeb3RequestEvent(i, s);
      })
    );
  }
};
Y.accountRequestCallbackIds = new Set();
var Jt = "DefaultChainId",
  Qt = "DefaultJsonRpcUrl",
  Q = class {
    constructor(e) {
      (this._relay = null),
        (this._addresses = []),
        (this.metadata = e.metadata),
        (this._storage = new b("walletlink", Ke)),
        (this.callback = e.callback || null);
      let n = this._storage.getItem(G);
      if (n) {
        let s = n.split(" ");
        s[0] !== "" && (this._addresses = s.map((r) => R(r)));
      }
      this.initializeRelay();
    }
    getSession() {
      let e = this.initializeRelay(),
        { id: n, secret: s } = e.getWalletLinkSession();
      return { id: n, secret: s };
    }
    handshake() {
      return d(this, null, function* () {
        yield this._eth_requestAccounts();
      });
    }
    get selectedAddress() {
      return this._addresses[0] || void 0;
    }
    get jsonRpcUrl() {
      var e;
      return (e = this._storage.getItem(Qt)) !== null && e !== void 0
        ? e
        : void 0;
    }
    set jsonRpcUrl(e) {
      this._storage.setItem(Qt, e);
    }
    updateProviderInfo(e, n) {
      var s;
      this.jsonRpcUrl = e;
      let r = this.getChainId();
      this._storage.setItem(Jt, n.toString(10)),
        O(n) !== r &&
          ((s = this.callback) === null ||
            s === void 0 ||
            s.call(this, "chainChanged", _(n)));
    }
    watchAsset(e) {
      return d(this, null, function* () {
        let n = Array.isArray(e) ? e[0] : e;
        if (!n.type) throw u.rpc.invalidParams("Type is required");
        if (n?.type !== "ERC20")
          throw u.rpc.invalidParams(
            `Asset of type '${n.type}' is not supported`
          );
        if (!n?.options) throw u.rpc.invalidParams("Options are required");
        if (!n?.options.address)
          throw u.rpc.invalidParams("Address is required");
        let s = this.getChainId(),
          { address: r, symbol: i, image: o, decimals: c } = n.options,
          l = yield this.initializeRelay().watchAsset(
            n.type,
            r,
            i,
            c,
            o,
            s?.toString()
          );
        return w(l) ? !1 : !!l.result;
      });
    }
    addSolanaChain(e) {
      return d(this, null, function* () {
        var n, s;
        let r = e[0];
        if (
          ((n = r.rpcUrls) === null || n === void 0 ? void 0 : n.length) === 0
        )
          throw u.rpc.invalidParams("please pass in at least 1 rpcUrl");
        if (!r.chainName || r.chainName.trim() === "")
          throw u.rpc.invalidParams("chainName is a required field");
        if (!r.nativeCurrency)
          throw u.rpc.invalidParams("nativeCurrency is a required field");
        let i = Number.parseInt(r.chainId, 16);
        if (i === this.getChainId()) return !1;
        let o = this.initializeRelay(),
          {
            rpcUrls: c = [],
            blockExplorerUrls: a = [],
            chainName: l,
            iconUrls: p = [],
            nativeCurrency: h,
          } = r,
          g = yield o.addSolanaChain(i.toString(), c, p, a, l, h);
        if (w(g)) return !1;
        if (
          ((s = g.result) === null || s === void 0 ? void 0 : s.isApproved) ===
          !0
        )
          return this.updateProviderInfo(c[0], i), null;
        throw u.rpc.internal("unable to add Solana chain");
      });
    }
    switchSolanaChain(e) {
      return d(this, null, function* () {
        let n = e[0],
          s = Number.parseInt(n.chainId, 16),
          i = yield this.initializeRelay().switchSolanaChain(
            s.toString(10),
            this.selectedAddress || void 0
          );
        if (w(i)) throw i;
        let o = i.result;
        return (
          o.isApproved &&
            o.rpcUrl.length > 0 &&
            this.updateProviderInfo(o.rpcUrl, s),
          null
        );
      });
    }
    cleanup() {
      return d(this, null, function* () {
        (this.callback = null),
          this._relay && this._relay.resetAndReload(),
          this._storage.clear();
      });
    }
    _setAddresses(e, n) {
      var s;
      if (!Array.isArray(e)) throw new Error("addresses is not an array");
      let r = e.map((i) => R(i));
      JSON.stringify(r) !== JSON.stringify(this._addresses) &&
        ((this._addresses = r),
        (s = this.callback) === null ||
          s === void 0 ||
          s.call(this, "accountsChanged", r),
        this._storage.setItem(G, r.join(" ")));
    }
    request(e) {
      return d(this, null, function* () {
        let n = e.params || [];
        switch (e.method) {
          case "eth_accounts":
            return [...this._addresses];
          case "eth_coinbase":
            return this.selectedAddress || null;
          case "net_version":
            return this.getChainId().toString(10);
          case "eth_chainId":
            return _(this.getChainId());
          case "eth_requestAccounts":
            return this._eth_requestAccounts();
          case "eth_ecRecover":
          case "personal_ecRecover":
            return this.ecRecover(e);
          case "personal_sign":
            return this.personalSign(e);
          case "eth_signTransaction":
            return this._eth_signTransaction(n);
          case "eth_sendRawTransaction":
            return this._eth_sendRawTransaction(n);
          case "eth_sendTransaction":
            return this._eth_sendTransaction(n);
          case "eth_signTypedData_v1":
          case "eth_signTypedData_v3":
          case "eth_signTypedData_v4":
          case "eth_signTypedData":
            return this.signTypedData(e);
          case "wallet_addSolanaChain":
            return this.addSolanaChain(n);
          case "wallet_switchSolanaChain":
            return this.switchSolanaChain(n);
          case "wallet_watchAsset":
            return this.watchAsset(n);
          default:
            if (!this.jsonRpcUrl)
              throw u.rpc.internal("No RPC URL set for chain");
            return q(e, this.jsonRpcUrl);
        }
      });
    }
    _ensureKnownAddress(e) {
      let n = R(e);
      if (!this._addresses.map((r) => R(r)).includes(n))
        throw new Error("Unknown Solana address");
    }
    _prepareTransactionParams(e) {
      let n = e.from ? R(e.from) : this.selectedAddress;
      if (!n) throw new Error("Solana address is unavailable");
      this._ensureKnownAddress(n);
      let s = e.to ? R(e.to) : null,
        r = e.value != null ? B(e.value) : BigInt(0),
        i = e.data ? de(e.data) : Buffer.alloc(0),
        o = e.nonce != null ? O(e.nonce) : null,
        c = e.gasPrice != null ? B(e.gasPrice) : null,
        a = e.maxFeePerGas != null ? B(e.maxFeePerGas) : null,
        l = e.maxPriorityFeePerGas != null ? B(e.maxPriorityFeePerGas) : null,
        p = e.gas != null ? B(e.gas) : null,
        h = e.chainId ? O(e.chainId) : this.getChainId();
      return {
        fromAddress: n,
        toAddress: s,
        weiValue: r,
        data: i,
        nonce: o,
        gasPriceInWei: c,
        maxFeePerGas: a,
        maxPriorityFeePerGas: l,
        gasLimit: p,
        chainId: h,
      };
    }
    ecRecover(e) {
      return d(this, null, function* () {
        let { method: n, params: s } = e;
        if (!Array.isArray(s)) throw u.rpc.invalidParams();
        let i = yield this.initializeRelay().sendRequest({
          method: "SolanaAddressFromSignedMessage",
          params: {
            message: ae(s[0]),
            signature: ae(s[1]),
            addPrefix: n === "personal_ecRecover",
          },
        });
        if (w(i)) throw i;
        return i.result;
      });
    }
    getChainId() {
      var e;
      return Number.parseInt(
        (e = this._storage.getItem(Jt)) !== null && e !== void 0 ? e : "1",
        10
      );
    }
    _eth_requestAccounts() {
      return d(this, null, function* () {
        var e, n;
        if (this._addresses.length > 0)
          return (
            (e = this.callback) === null ||
              e === void 0 ||
              e.call(this, "connect", { chainId: _(this.getChainId()) }),
            this._addresses
          );
        let r = yield this.initializeRelay().requestSolanaAccounts();
        if (w(r)) throw r;
        if (!r.result) throw new Error("accounts received is empty");
        return (
          this._setAddresses(r.result),
          (n = this.callback) === null ||
            n === void 0 ||
            n.call(this, "connect", { chainId: _(this.getChainId()) }),
          this._addresses
        );
      });
    }
    personalSign(n) {
      return d(this, arguments, function* ({ params: e }) {
        if (!Array.isArray(e)) throw u.rpc.invalidParams();
        let s = e[1],
          r = e[0];
        this._ensureKnownAddress(s);
        let o = yield this.initializeRelay().sendRequest({
          method: "signSolanaMessage",
          params: {
            address: R(s),
            message: ae(r),
            addPrefix: !0,
            typedDataJson: null,
          },
        });
        if (w(o)) throw o;
        return o.result;
      });
    }
    _eth_signTransaction(e) {
      return d(this, null, function* () {
        let n = this._prepareTransactionParams(e[0] || {}),
          r = yield this.initializeRelay().signSolanaTransaction(n);
        if (w(r)) throw r;
        return r.result;
      });
    }
    _eth_sendRawTransaction(e) {
      return d(this, null, function* () {
        let n = de(e[0]),
          r = yield this.initializeRelay().submitSolanaTransaction(
            n,
            this.getChainId()
          );
        if (w(r)) throw r;
        return r.result;
      });
    }
    _eth_sendTransaction(e) {
      return d(this, null, function* () {
        let n = this._prepareTransactionParams(e[0] || {}),
          r = yield this.initializeRelay().signAndSubmitSolanaTransaction(n);
        if (w(r)) throw r;
        return r.result;
      });
    }
    signTypedData(e) {
      return d(this, null, function* () {
        let { method: n, params: s } = e;
        if (!Array.isArray(s)) throw u.rpc.invalidParams();
        let r = (l) => {
            let p = {
              eth_signTypedData_v1: J.default.hashForSignTypedDataLegacy,
              eth_signTypedData_v3: J.default.hashForSignTypedData_v3,
              eth_signTypedData_v4: J.default.hashForSignTypedData_v4,
              eth_signTypedData: J.default.hashForSignTypedData_v4,
            };
            return T(p[n]({ data: lt(l) }), !0);
          },
          i = s[n === "eth_signTypedData_v1" ? 1 : 0],
          o = s[n === "eth_signTypedData_v1" ? 0 : 1];
        this._ensureKnownAddress(i);
        let a = yield this.initializeRelay().sendRequest({
          method: "signSolanaMessage",
          params: {
            address: R(i),
            message: r(o),
            typedDataJson: JSON.stringify(o, null, 2),
            addPrefix: !1,
          },
        });
        if (w(a)) throw a;
        return a.result;
      });
    }
    initializeRelay() {
      return (
        this._relay ||
          (this._relay = new Y({
            linkAPIUrl: Ke,
            storage: this._storage,
            metadata: this.metadata,
            accountsCallback: this._setAddresses.bind(this),
            chainCallback: this.updateProviderInfo.bind(this),
          })),
        this._relay
      );
    }
  };
var Xt = "SignerType",
  en = new b("CBWSDK", "SignerConfigurator");
function tn() {
  return en.getItem(Xt);
}
function nn(t) {
  en.setItem(Xt, t);
}
function sn(t) {
  return d(this, null, function* () {
    let { communicator: e, metadata: n, handshakeRequest: s, callback: r } = t;
    Zn(e, n, r).catch(() => {});
    let i = {
        id: crypto.randomUUID(),
        event: "selectSignerType",
        data: Object.assign(Object.assign({}, t.preference), {
          handshakeRequest: s,
        }),
      },
      { data: o } = yield e.postRequestAndWaitForResponse(i);
    return o;
  });
}
function rn(t) {
  let { signerType: e, metadata: n, communicator: s, callback: r } = t;
  switch (e) {
    case "scw":
      return new me({ metadata: n, callback: r, communicator: s });
    case "walletlink":
      return new Q({ metadata: n, callback: r });
  }
}
function Zn(t, e, n) {
  return d(this, null, function* () {
    yield t.onMessage(({ event: r }) => r === "WalletLinkSessionRequest");
    let s = new Q({ metadata: e, callback: n });
    t.postMessage({
      event: "WalletLinkUpdate",
      data: { session: s.getSession() },
    }),
      yield s.handshake(),
      t.postMessage({ event: "WalletLinkUpdate", data: { connected: !0 } });
  });
}
var Gn = `Coinbase Wallet SDK requires the Cross-Origin-Opener-Policy header to not be set to 'same-origin'. This is to ensure that the SDK can communicate with the Coinbase Smart Wallet app.

Please see https://www.smartwallet.dev/guides/tips/popup-tips#cross-origin-opener-policy for more information.`,
  $n = () => {
    let t;
    return {
      getCrossOriginOpenerPolicy: () => (t === void 0 ? "undefined" : t),
      checkCrossOriginOpenerPolicy: () =>
        d(void 0, null, function* () {
          if (typeof window > "u") {
            t = "non-browser-env";
            return;
          }
          try {
            let e = `${window.location.origin}${window.location.pathname}`,
              n = yield fetch(e, { method: "HEAD" });
            if (!n.ok) throw new Error(`HTTP error! status: ${n.status}`);
            let s = n.headers.get("Cross-Origin-Opener-Policy");
            (t = s ?? "null"), t === "same-origin" && console.error(Gn);
          } catch (e) {
            console.error(
              "Error checking Cross-Origin-Opener-Policy:",
              e.message
            ),
              (t = "error");
          }
        }),
    };
  },
  { checkCrossOriginOpenerPolicy: _e, getCrossOriginOpenerPolicy: on } = $n();
var an = 420,
  cn = 540;
function dn(t) {
  let e = (window.innerWidth - an) / 2 + window.screenX,
    n = (window.innerHeight - cn) / 2 + window.screenY;
  Yn(t);
  let s = `wallet_${crypto.randomUUID()}`,
    r = window.open(t, s, `width=${an}, height=${cn}, left=${e}, top=${n}`);
  if ((r?.focus(), !r)) throw u.rpc.internal("Pop up window failed to open");
  return r;
}
function ln(t) {
  t && !t.closed && t.close();
}
function Yn(t) {
  let e = {
    sdkName: pe,
    sdkVersion: S,
    origin: window.location.origin,
    coop: on(),
  };
  for (let [n, s] of Object.entries(e)) t.searchParams.append(n, s.toString());
}
var Me = class {
  constructor({ url: e = Gt, metadata: n, preference: s }) {
    (this.popup = null),
      (this.listeners = new Map()),
      (this.postMessage = (r) =>
        d(this, null, function* () {
          (yield this.waitForPopupLoaded()).postMessage(r, this.url.origin);
        })),
      (this.postRequestAndWaitForResponse = (r) =>
        d(this, null, function* () {
          let i = this.onMessage(({ requestId: o }) => o === r.id);
          return this.postMessage(r), yield i;
        })),
      (this.onMessage = (r) =>
        d(this, null, function* () {
          return new Promise((i, o) => {
            let c = (a) => {
              if (a.origin !== this.url.origin) return;
              let l = a.data;
              r(l) &&
                (i(l),
                window.removeEventListener("message", c),
                this.listeners.delete(c));
            };
            window.addEventListener("message", c),
              this.listeners.set(c, { reject: o });
          });
        })),
      (this.disconnect = () => {
        ln(this.popup),
          (this.popup = null),
          this.listeners.forEach(({ reject: r }, i) => {
            r(u.provider.userRejectedRequest("Request rejected")),
              window.removeEventListener("message", i);
          }),
          this.listeners.clear();
      }),
      (this.waitForPopupLoaded = () =>
        d(this, null, function* () {
          return this.popup && !this.popup.closed
            ? (this.popup.focus(), this.popup)
            : ((this.popup = dn(this.url)),
              this.onMessage(({ event: r }) => r === "PopupUnload")
                .then(this.disconnect)
                .catch(() => {}),
              this.onMessage(({ event: r }) => r === "PopupLoaded")
                .then((r) => {
                  this.postMessage({
                    requestId: r.id,
                    data: {
                      version: S,
                      metadata: this.metadata,
                      preference: this.preference,
                      location: window.location.toString(),
                    },
                  });
                })
                .then(() => {
                  if (!this.popup) throw u.rpc.internal();
                  return this.popup;
                }));
        })),
      (this.url = new URL(e)),
      (this.metadata = n),
      (this.preference = s);
  }
};
function hn(t) {
  let e = nt(Jn(t), { shouldIncludeStack: !0 }),
    n = new URL("https://docs.cloud.coinbase.com/wallet-sdk/docs/errors");
  return (
    n.searchParams.set("version", S),
    n.searchParams.set("code", e.code.toString()),
    n.searchParams.set("message", e.message),
    Object.assign(Object.assign({}, e), { docUrl: n.href })
  );
}
function Jn(t) {
  var e;
  if (typeof t == "string") return { message: t, code: m.rpc.internal };
  if (w(t)) {
    let n = t.errorMessage,
      s =
        (e = t.errorCode) !== null && e !== void 0
          ? e
          : n.match(/(denied|rejected)/i)
          ? m.provider.userRejectedRequest
          : void 0;
    return Object.assign(Object.assign({}, t), {
      message: n,
      code: s,
      data: { method: t.method },
    });
  }
  return t;
}
var ze = Fe(pn(), 1);
var Le = class extends ze.default {};
var es = function (t, e) {
    var n = {};
    for (var s in t)
      Object.prototype.hasOwnProperty.call(t, s) &&
        e.indexOf(s) < 0 &&
        (n[s] = t[s]);
    if (t != null && typeof Object.getOwnPropertySymbols == "function")
      for (var r = 0, s = Object.getOwnPropertySymbols(t); r < s.length; r++)
        e.indexOf(s[r]) < 0 &&
          Object.prototype.propertyIsEnumerable.call(t, s[r]) &&
          (n[s[r]] = t[s[r]]);
    return n;
  },
  V = class extends Le {
    constructor(e) {
      var { metadata: n } = e,
        s = e.preference,
        { keysUrl: r } = s,
        i = es(s, ["keysUrl"]);
      super(),
        (this.signer = null),
        (this.isCoinbaseWallet = !0),
        (this.metadata = n),
        (this.preference = i),
        (this.communicator = new Me({ url: r, metadata: n, preference: i }));
      let o = tn();
      o && (this.signer = this.initSigner(o));
    }
    request(e) {
      return d(this, null, function* () {
        try {
          if ((wt(e), !this.signer))
            switch (e.method) {
              case "eth_requestAccounts": {
                let n = yield this.requestSignerSelection(e),
                  s = this.initSigner(n);
                yield s.handshake(e), (this.signer = s), nn(n);
                break;
              }
              case "wallet_sendCalls": {
                let n = this.initSigner("scw");
                yield n.handshake({ method: "handshake" });
                let s = yield n.request(e);
                return yield n.cleanup(), s;
              }
              case "wallet_getCallsStatus":
                return q(e, $t);
              case "net_version":
                return 1;
              case "eth_chainId":
                return _(1);
              default:
                throw u.provider.unauthorized(
                  "Must call 'eth_requestAccounts' before other methods"
                );
            }
          return yield this.signer.request(e);
        } catch (n) {
          let { code: s } = n;
          return (
            s === m.provider.unauthorized && this.disconnect(),
            Promise.reject(hn(n))
          );
        }
      });
    }
    enable() {
      return d(this, null, function* () {
        return (
          console.warn(
            '.enable() has been deprecated. Please use .request({ method: "eth_requestAccounts" }) instead.'
          ),
          yield this.request({ method: "eth_requestAccounts" })
        );
      });
    }
    disconnect() {
      return d(this, null, function* () {
        var e;
        yield (e = this.signer) === null || e === void 0 ? void 0 : e.cleanup(),
          (this.signer = null),
          b.clearAll(),
          this.emit(
            "disconnect",
            u.provider.disconnected("User initiated disconnection")
          );
      });
    }
    requestSignerSelection(e) {
      return sn({
        communicator: this.communicator,
        preference: this.preference,
        metadata: this.metadata,
        handshakeRequest: e,
        callback: this.emit.bind(this),
      });
    }
    initSigner(e) {
      return rn({
        signerType: e,
        metadata: this.metadata,
        communicator: this.communicator,
        callback: this.emit.bind(this),
      });
    }
  };
function Re(t) {
  if (t) {
    if (!["all", "smartWalletOnly", "eoaOnly"].includes(t.options))
      throw new Error(`Invalid options: ${t.options}`);
    if (
      t.attribution &&
      t.attribution.auto !== void 0 &&
      t.attribution.dataSuffix !== void 0
    )
      throw new Error(
        "Attribution cannot contain both auto and dataSuffix properties"
      );
  }
}
var ee = class {
  constructor(e) {
    (this.metadata = {
      appName: e.appName || "Dapp",
      appLogoUrl: e.appLogoUrl || ht(),
      appChainIds: e.appChainIds || [],
    }),
      this.storeLatestVersion(),
      _e();
  }
  makeWeb3Provider(e = { options: "all" }) {
    var n;
    Re(e);
    let s = { metadata: this.metadata, preference: e };
    return (n = fe(s)) !== null && n !== void 0 ? n : new V(s);
  }
  getCoinbaseWalletLogo(e, n = 240) {
    return Qe(e, n);
  }
  storeLatestVersion() {
    new b("CBWSDK").setItem("VERSION", S);
  }
};
function fn(t) {
  var e;
  let n = { metadata: t.metadata, preference: t.preference };
  return (e = fe(n)) !== null && e !== void 0 ? e : new V(n);
}
var ts = { options: "all" };
function ns(t) {
  var e;
  new b("CBWSDK").setItem("VERSION", S), _e();
  let s = {
    metadata: {
      appName: t.appName || "Dapp",
      appLogoUrl: t.appLogoUrl || "",
      appChainIds: t.appChainIds || [],
    },
    preference: Object.assign(
      ts,
      (e = t.preference) !== null && e !== void 0 ? e : {}
    ),
  };
  Re(s.preference);
  let r = null;
  return { getProvider: () => (r || (r = fn(s)), r) };
}
var io = ee;
export {
  ee as CoinbaseWalletSDK,
  ns as createCoinbaseWalletSDK,
  io as default,
};
