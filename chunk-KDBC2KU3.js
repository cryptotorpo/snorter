import { e as z, g as G } from "./chunk-JOVT4LBN.js";
var V_ = {};
G(V_, { clsx: () => l_, default: () => B_ });
function u_(e) {
  var _,
    t,
    n = "";
  if (typeof e == "string" || typeof e == "number") n += e;
  else if (typeof e == "object")
    if (Array.isArray(e))
      for (_ = 0; _ < e.length; _++)
        e[_] && (t = u_(e[_])) && (n && (n += " "), (n += t));
    else for (_ in e) e[_] && (n && (n += " "), (n += _));
  return n;
}
function l_() {
  for (var e, _, t = 0, n = ""; t < arguments.length; )
    (e = arguments[t++]) && (_ = u_(e)) && (n && (n += " "), (n += _));
  return n;
}
var B_,
  O_ = z(() => {
    "use strict";
    B_ = l_;
  });
var _e = {};
G(_e, {
  Component: () => M,
  Fragment: () => R,
  cloneElement: () => Y_,
  createContext: () => Z_,
  createElement: () => g_,
  createRef: () => G_,
  h: () => g_,
  hydrate: () => S_,
  isValidElement: () => p_,
  options: () => h,
  render: () => P_,
  toChildArray: () => x_,
});
function x(e, _) {
  for (var t in _) e[t] = _[t];
  return e;
}
function Z(e) {
  e && e.parentNode && e.parentNode.removeChild(e);
}
function g_(e, _, t) {
  var n,
    i,
    r,
    u = {};
  for (r in _)
    r == "key" ? (n = _[r]) : r == "ref" ? (i = _[r]) : (u[r] = _[r]);
  if (
    (arguments.length > 2 &&
      (u.children = arguments.length > 3 ? L.call(arguments, 2) : t),
    typeof e == "function" && e.defaultProps != null)
  )
    for (r in e.defaultProps) u[r] === void 0 && (u[r] = e.defaultProps[r]);
  return F(e, u, n, i, null);
}
function F(e, _, t, n, i) {
  var r = {
    type: e,
    props: _,
    key: t,
    ref: n,
    __k: null,
    __: null,
    __b: 0,
    __e: null,
    __c: null,
    constructor: void 0,
    __v: i ?? ++a_,
    __i: -1,
    __u: 0,
  };
  return i == null && h.vnode != null && h.vnode(r), r;
}
function G_() {
  return { current: null };
}
function R(e) {
  return e.children;
}
function M(e, _) {
  (this.props = e), (this.context = _);
}
function U(e, _) {
  if (_ == null) return e.__ ? U(e.__, e.__i + 1) : null;
  for (var t; _ < e.__k.length; _++)
    if ((t = e.__k[_]) != null && t.__e != null) return t.__e;
  return typeof e.type == "function" ? U(e) : null;
}
function b_(e) {
  var _, t;
  if ((e = e.__) != null && e.__c != null) {
    for (e.__e = e.__c.base = null, _ = 0; _ < e.__k.length; _++)
      if ((t = e.__k[_]) != null && t.__e != null) {
        e.__e = e.__c.base = t.__e;
        break;
      }
    return b_(e);
  }
}
function Q(e) {
  ((!e.__d && (e.__d = !0) && P.push(e) && !B.__r++) ||
    c_ != h.debounceRendering) &&
    ((c_ = h.debounceRendering) || h_)(B);
}
function B() {
  for (var e, _, t, n, i, r, u, c = 1; P.length; )
    P.length > c && P.sort(d_),
      (e = P.shift()),
      (c = P.length),
      e.__d &&
        ((t = void 0),
        (i = (n = (_ = e).__v).__e),
        (r = []),
        (u = []),
        _.__P &&
          (((t = x({}, n)).__v = n.__v + 1),
          h.vnode && h.vnode(t),
          __(
            _.__P,
            t,
            n,
            _.__n,
            _.__P.namespaceURI,
            32 & n.__u ? [i] : null,
            r,
            i ?? U(n),
            !!(32 & n.__u),
            u
          ),
          (t.__v = n.__v),
          (t.__.__k[t.__i] = t),
          C_(r, t, u),
          t.__e != i && b_(t)));
  B.__r = 0;
}
function k_(e, _, t, n, i, r, u, c, a, l, s) {
  var o,
    p,
    f,
    g,
    k,
    b,
    v,
    m = (n && n.__k) || y_,
    H = _.length;
  for (a = J_(t, _, m, a, H), o = 0; o < H; o++)
    (f = t.__k[o]) != null &&
      ((p = f.__i == -1 ? W : m[f.__i] || W),
      (f.__i = o),
      (b = __(e, f, p, i, r, u, c, a, l, s)),
      (g = f.__e),
      f.ref &&
        p.ref != f.ref &&
        (p.ref && e_(p.ref, null, f), s.push(f.ref, f.__c || g, f)),
      k == null && g != null && (k = g),
      (v = !!(4 & f.__u)) || p.__k === f.__k
        ? (a = w_(f, a, e, v))
        : typeof f.type == "function" && b !== void 0
        ? (a = b)
        : g && (a = g.nextSibling),
      (f.__u &= -7));
  return (t.__e = k), a;
}
function J_(e, _, t, n, i) {
  var r,
    u,
    c,
    a,
    l,
    s = t.length,
    o = s,
    p = 0;
  for (e.__k = new Array(i), r = 0; r < i; r++)
    (u = _[r]) != null && typeof u != "boolean" && typeof u != "function"
      ? ((a = r + p),
        ((u = e.__k[r] =
          typeof u == "string" ||
          typeof u == "number" ||
          typeof u == "bigint" ||
          u.constructor == String
            ? F(null, u, null, null, null)
            : I(u)
            ? F(R, { children: u }, null, null, null)
            : u.constructor == null && u.__b > 0
            ? F(u.type, u.props, u.key, u.ref ? u.ref : null, u.__v)
            : u).__ = e),
        (u.__b = e.__b + 1),
        (c = null),
        (l = u.__i = K_(u, t, a, o)) != -1 && (o--, (c = t[l]) && (c.__u |= 2)),
        c == null || c.__v == null
          ? (l == -1 && (i > s ? p-- : i < s && p++),
            typeof u.type != "function" && (u.__u |= 4))
          : l != a &&
            (l == a - 1
              ? p--
              : l == a + 1
              ? p++
              : (l > a ? p-- : p++, (u.__u |= 4))))
      : (e.__k[r] = null);
  if (o)
    for (r = 0; r < s; r++)
      (c = t[r]) != null &&
        !(2 & c.__u) &&
        (c.__e == n && (n = U(c)), E_(c, c));
  return n;
}
function w_(e, _, t, n) {
  var i, r;
  if (typeof e.type == "function") {
    for (i = e.__k, r = 0; i && r < i.length; r++)
      i[r] && ((i[r].__ = e), (_ = w_(i[r], _, t, n)));
    return _;
  }
  e.__e != _ &&
    (n &&
      (_ && e.type && !_.parentNode && (_ = U(e)),
      t.insertBefore(e.__e, _ || null)),
    (_ = e.__e));
  do _ = _ && _.nextSibling;
  while (_ != null && _.nodeType == 8);
  return _;
}
function x_(e, _) {
  return (
    (_ = _ || []),
    e == null ||
      typeof e == "boolean" ||
      (I(e)
        ? e.some(function (t) {
            x_(t, _);
          })
        : _.push(e)),
    _
  );
}
function K_(e, _, t, n) {
  var i,
    r,
    u,
    c = e.key,
    a = e.type,
    l = _[t],
    s = l != null && (2 & l.__u) == 0;
  if ((l === null && e.key == null) || (s && c == l.key && a == l.type))
    return t;
  if (n > (s ? 1 : 0)) {
    for (i = t - 1, r = t + 1; i >= 0 || r < _.length; )
      if (
        (l = _[(u = i >= 0 ? i-- : r++)]) != null &&
        !(2 & l.__u) &&
        c == l.key &&
        a == l.type
      )
        return u;
  }
  return -1;
}
function f_(e, _, t) {
  _[0] == "-"
    ? e.setProperty(_, t ?? "")
    : (e[_] =
        t == null ? "" : typeof t != "number" || z_.test(_) ? t : t + "px");
}
function q(e, _, t, n, i) {
  var r, u;
  _: if (_ == "style")
    if (typeof t == "string") e.style.cssText = t;
    else {
      if ((typeof n == "string" && (e.style.cssText = n = ""), n))
        for (_ in n) (t && _ in t) || f_(e.style, _, "");
      if (t) for (_ in t) (n && t[_] == n[_]) || f_(e.style, _, t[_]);
    }
  else if (_[0] == "o" && _[1] == "n")
    (r = _ != (_ = _.replace(v_, "$1"))),
      (u = _.toLowerCase()),
      (_ =
        u in e || _ == "onFocusOut" || _ == "onFocusIn"
          ? u.slice(2)
          : _.slice(2)),
      e.l || (e.l = {}),
      (e.l[_ + r] = t),
      t
        ? n
          ? (t.u = n.u)
          : ((t.u = Y), e.addEventListener(_, r ? K : J, r))
        : e.removeEventListener(_, r ? K : J, r);
  else {
    if (i == "http://www.w3.org/2000/svg")
      _ = _.replace(/xlink(H|:h)/, "h").replace(/sName$/, "s");
    else if (
      _ != "width" &&
      _ != "height" &&
      _ != "href" &&
      _ != "list" &&
      _ != "form" &&
      _ != "tabIndex" &&
      _ != "download" &&
      _ != "rowSpan" &&
      _ != "colSpan" &&
      _ != "role" &&
      _ != "popover" &&
      _ in e
    )
      try {
        e[_] = t ?? "";
        break _;
      } catch {}
    typeof t == "function" ||
      (t == null || (t === !1 && _[4] != "-")
        ? e.removeAttribute(_)
        : e.setAttribute(_, _ == "popover" && t == 1 ? "" : t));
  }
}
function s_(e) {
  return function (_) {
    if (this.l) {
      var t = this.l[_.type + e];
      if (_.t == null) _.t = Y++;
      else if (_.t < t.u) return;
      return t(h.event ? h.event(_) : _);
    }
  };
}
function __(e, _, t, n, i, r, u, c, a, l) {
  var s,
    o,
    p,
    f,
    g,
    k,
    b,
    v,
    m,
    H,
    E,
    $,
    D,
    i_,
    j,
    A,
    O,
    w = _.type;
  if (_.constructor != null) return null;
  128 & t.__u && ((a = !!(32 & t.__u)), (r = [(c = _.__e = t.__e)])),
    (s = h.__b) && s(_);
  _: if (typeof w == "function")
    try {
      if (
        ((v = _.props),
        (m = "prototype" in w && w.prototype.render),
        (H = (s = w.contextType) && n[s.__c]),
        (E = s ? (H ? H.props.value : s.__) : n),
        t.__c
          ? (b = (o = _.__c = t.__c).__ = o.__E)
          : (m
              ? (_.__c = o = new w(v, E))
              : ((_.__c = o = new M(v, E)),
                (o.constructor = w),
                (o.render = X_)),
            H && H.sub(o),
            (o.props = v),
            o.state || (o.state = {}),
            (o.context = E),
            (o.__n = n),
            (p = o.__d = !0),
            (o.__h = []),
            (o._sb = [])),
        m && o.__s == null && (o.__s = o.state),
        m &&
          w.getDerivedStateFromProps != null &&
          (o.__s == o.state && (o.__s = x({}, o.__s)),
          x(o.__s, w.getDerivedStateFromProps(v, o.__s))),
        (f = o.props),
        (g = o.state),
        (o.__v = _),
        p)
      )
        m &&
          w.getDerivedStateFromProps == null &&
          o.componentWillMount != null &&
          o.componentWillMount(),
          m && o.componentDidMount != null && o.__h.push(o.componentDidMount);
      else {
        if (
          (m &&
            w.getDerivedStateFromProps == null &&
            v !== f &&
            o.componentWillReceiveProps != null &&
            o.componentWillReceiveProps(v, E),
          (!o.__e &&
            o.shouldComponentUpdate != null &&
            o.shouldComponentUpdate(v, o.__s, E) === !1) ||
            _.__v == t.__v)
        ) {
          for (
            _.__v != t.__v && ((o.props = v), (o.state = o.__s), (o.__d = !1)),
              _.__e = t.__e,
              _.__k = t.__k,
              _.__k.some(function (N) {
                N && (N.__ = _);
              }),
              $ = 0;
            $ < o._sb.length;
            $++
          )
            o.__h.push(o._sb[$]);
          (o._sb = []), o.__h.length && u.push(o);
          break _;
        }
        o.componentWillUpdate != null && o.componentWillUpdate(v, o.__s, E),
          m &&
            o.componentDidUpdate != null &&
            o.__h.push(function () {
              o.componentDidUpdate(f, g, k);
            });
      }
      if (
        ((o.context = E),
        (o.props = v),
        (o.__P = e),
        (o.__e = !1),
        (D = h.__r),
        (i_ = 0),
        m)
      ) {
        for (
          o.state = o.__s,
            o.__d = !1,
            D && D(_),
            s = o.render(o.props, o.state, o.context),
            j = 0;
          j < o._sb.length;
          j++
        )
          o.__h.push(o._sb[j]);
        o._sb = [];
      } else
        do
          (o.__d = !1),
            D && D(_),
            (s = o.render(o.props, o.state, o.context)),
            (o.state = o.__s);
        while (o.__d && ++i_ < 25);
      (o.state = o.__s),
        o.getChildContext != null && (n = x(x({}, n), o.getChildContext())),
        m &&
          !p &&
          o.getSnapshotBeforeUpdate != null &&
          (k = o.getSnapshotBeforeUpdate(f, g)),
        (A = s),
        s != null &&
          s.type === R &&
          s.key == null &&
          (A = H_(s.props.children)),
        (c = k_(e, I(A) ? A : [A], _, t, n, i, r, u, c, a, l)),
        (o.base = _.__e),
        (_.__u &= -161),
        o.__h.length && u.push(o),
        b && (o.__E = o.__ = null);
    } catch (N) {
      if (((_.__v = null), a || r != null))
        if (N.then) {
          for (_.__u |= a ? 160 : 128; c && c.nodeType == 8 && c.nextSibling; )
            c = c.nextSibling;
          (r[r.indexOf(c)] = null), (_.__e = c);
        } else {
          for (O = r.length; O--; ) Z(r[O]);
          X(_);
        }
      else (_.__e = t.__e), (_.__k = t.__k), N.then || X(_);
      h.__e(N, _, t);
    }
  else
    r == null && _.__v == t.__v
      ? ((_.__k = t.__k), (_.__e = t.__e))
      : (c = _.__e = Q_(t.__e, _, t, n, i, r, u, a, l));
  return (s = h.diffed) && s(_), 128 & _.__u ? void 0 : c;
}
function X(e) {
  e && e.__c && (e.__c.__e = !0), e && e.__k && e.__k.forEach(X);
}
function C_(e, _, t) {
  for (var n = 0; n < t.length; n++) e_(t[n], t[++n], t[++n]);
  h.__c && h.__c(_, e),
    e.some(function (i) {
      try {
        (e = i.__h),
          (i.__h = []),
          e.some(function (r) {
            r.call(i);
          });
      } catch (r) {
        h.__e(r, i.__v);
      }
    });
}
function H_(e) {
  return typeof e != "object" || e == null || (e.__b && e.__b > 0)
    ? e
    : I(e)
    ? e.map(H_)
    : x({}, e);
}
function Q_(e, _, t, n, i, r, u, c, a) {
  var l,
    s,
    o,
    p,
    f,
    g,
    k,
    b = t.props,
    v = _.props,
    m = _.type;
  if (
    (m == "svg"
      ? (i = "http://www.w3.org/2000/svg")
      : m == "math"
      ? (i = "http://www.w3.org/1998/Math/MathML")
      : i || (i = "http://www.w3.org/1999/xhtml"),
    r != null)
  ) {
    for (l = 0; l < r.length; l++)
      if (
        (f = r[l]) &&
        "setAttribute" in f == !!m &&
        (m ? f.localName == m : f.nodeType == 3)
      ) {
        (e = f), (r[l] = null);
        break;
      }
  }
  if (e == null) {
    if (m == null) return document.createTextNode(v);
    (e = document.createElementNS(i, m, v.is && v)),
      c && (h.__m && h.__m(_, r), (c = !1)),
      (r = null);
  }
  if (m == null) b === v || (c && e.data == v) || (e.data = v);
  else {
    if (((r = r && L.call(e.childNodes)), (b = t.props || W), !c && r != null))
      for (b = {}, l = 0; l < e.attributes.length; l++)
        b[(f = e.attributes[l]).name] = f.value;
    for (l in b)
      if (((f = b[l]), l != "children")) {
        if (l == "dangerouslySetInnerHTML") o = f;
        else if (!(l in v)) {
          if (
            (l == "value" && "defaultValue" in v) ||
            (l == "checked" && "defaultChecked" in v)
          )
            continue;
          q(e, l, null, f, i);
        }
      }
    for (l in v)
      (f = v[l]),
        l == "children"
          ? (p = f)
          : l == "dangerouslySetInnerHTML"
          ? (s = f)
          : l == "value"
          ? (g = f)
          : l == "checked"
          ? (k = f)
          : (c && typeof f != "function") || b[l] === f || q(e, l, f, b[l], i);
    if (s)
      c ||
        (o && (s.__html == o.__html || s.__html == e.innerHTML)) ||
        (e.innerHTML = s.__html),
        (_.__k = []);
    else if (
      (o && (e.innerHTML = ""),
      k_(
        _.type == "template" ? e.content : e,
        I(p) ? p : [p],
        _,
        t,
        n,
        m == "foreignObject" ? "http://www.w3.org/1999/xhtml" : i,
        r,
        u,
        r ? r[0] : t.__k && U(t, 0),
        c,
        a
      ),
      r != null)
    )
      for (l = r.length; l--; ) Z(r[l]);
    c ||
      ((l = "value"),
      m == "progress" && g == null
        ? e.removeAttribute("value")
        : g != null &&
          (g !== e[l] ||
            (m == "progress" && !g) ||
            (m == "option" && g != b[l])) &&
          q(e, l, g, b[l], i),
      (l = "checked"),
      k != null && k != e[l] && q(e, l, k, b[l], i));
  }
  return e;
}
function e_(e, _, t) {
  try {
    if (typeof e == "function") {
      var n = typeof e.__u == "function";
      n && e.__u(), (n && _ == null) || (e.__u = e(_));
    } else e.current = _;
  } catch (i) {
    h.__e(i, t);
  }
}
function E_(e, _, t) {
  var n, i;
  if (
    (h.unmount && h.unmount(e),
    (n = e.ref) && ((n.current && n.current != e.__e) || e_(n, null, _)),
    (n = e.__c) != null)
  ) {
    if (n.componentWillUnmount)
      try {
        n.componentWillUnmount();
      } catch (r) {
        h.__e(r, _);
      }
    n.base = n.__P = null;
  }
  if ((n = e.__k))
    for (i = 0; i < n.length; i++)
      n[i] && E_(n[i], _, t || typeof e.type != "function");
  t || Z(e.__e), (e.__c = e.__ = e.__e = void 0);
}
function X_(e, _, t) {
  return this.constructor(e, t);
}
function P_(e, _, t) {
  var n, i, r, u;
  _ == document && (_ = document.documentElement),
    h.__ && h.__(e, _),
    (i = (n = typeof t == "function") ? null : (t && t.__k) || _.__k),
    (r = []),
    (u = []),
    __(
      _,
      (e = ((!n && t) || _).__k = g_(R, null, [e])),
      i || W,
      W,
      _.namespaceURI,
      !n && t ? [t] : i ? null : _.firstChild ? L.call(_.childNodes) : null,
      r,
      !n && t ? t : i ? i.__e : _.firstChild,
      n,
      u
    ),
    C_(r, e, u);
}
function S_(e, _) {
  P_(e, _, S_);
}
function Y_(e, _, t) {
  var n,
    i,
    r,
    u,
    c = x({}, e.props);
  for (r in (e.type && e.type.defaultProps && (u = e.type.defaultProps), _))
    r == "key"
      ? (n = _[r])
      : r == "ref"
      ? (i = _[r])
      : (c[r] = _[r] === void 0 && u != null ? u[r] : _[r]);
  return (
    arguments.length > 2 &&
      (c.children = arguments.length > 3 ? L.call(arguments, 2) : t),
    F(e.type, c, n || e.key, i || e.ref, null)
  );
}
function Z_(e) {
  function _(t) {
    var n, i;
    return (
      this.getChildContext ||
        ((n = new Set()),
        ((i = {})[_.__c] = this),
        (this.getChildContext = function () {
          return i;
        }),
        (this.componentWillUnmount = function () {
          n = null;
        }),
        (this.shouldComponentUpdate = function (r) {
          this.props.value != r.value &&
            n.forEach(function (u) {
              (u.__e = !0), Q(u);
            });
        }),
        (this.sub = function (r) {
          n.add(r);
          var u = r.componentWillUnmount;
          r.componentWillUnmount = function () {
            n && n.delete(r), u && u.call(r);
          };
        })),
      t.children
    );
  }
  return (
    (_.__c = "__cC" + m_++),
    (_.__ = e),
    (_.Provider =
      _.__l =
      (_.Consumer = function (t, n) {
        return t.children(n);
      }).contextType =
        _),
    _
  );
}
var L,
  h,
  a_,
  p_,
  P,
  c_,
  h_,
  d_,
  v_,
  Y,
  J,
  K,
  m_,
  W,
  y_,
  z_,
  I,
  N_ = z(() => {
    "use strict";
    (W = {}),
      (y_ = []),
      (z_ =
        /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i),
      (I = Array.isArray);
    (L = y_.slice),
      (h = {
        __e: function (e, _, t, n) {
          for (var i, r, u; (_ = _.__); )
            if ((i = _.__c) && !i.__)
              try {
                if (
                  ((r = i.constructor) &&
                    r.getDerivedStateFromError != null &&
                    (i.setState(r.getDerivedStateFromError(e)), (u = i.__d)),
                  i.componentDidCatch != null &&
                    (i.componentDidCatch(e, n || {}), (u = i.__d)),
                  u)
                )
                  return (i.__E = i);
              } catch (c) {
                e = c;
              }
          throw e;
        },
      }),
      (a_ = 0),
      (p_ = function (e) {
        return e != null && e.constructor == null;
      }),
      (M.prototype.setState = function (e, _) {
        var t;
        (t =
          this.__s != null && this.__s != this.state
            ? this.__s
            : (this.__s = x({}, this.state))),
          typeof e == "function" && (e = e(x({}, t), this.props)),
          e && x(t, e),
          e != null && this.__v && (_ && this._sb.push(_), Q(this));
      }),
      (M.prototype.forceUpdate = function (e) {
        this.__v && ((this.__e = !0), e && this.__h.push(e), Q(this));
      }),
      (M.prototype.render = R),
      (P = []),
      (h_ =
        typeof Promise == "function"
          ? Promise.prototype.then.bind(Promise.resolve())
          : setTimeout),
      (d_ = function (e, _) {
        return e.__v.__b - _.__v.__b;
      }),
      (B.__r = 0),
      (v_ = /(PointerCapture)$|Capture$/i),
      (Y = 0),
      (J = s_(!1)),
      (K = s_(!0)),
      (m_ = 0);
  });
var se = {};
G(se, {
  useCallback: () => re,
  useContext: () => oe,
  useDebugValue: () => ie,
  useEffect: () => ee,
  useErrorBoundary: () => ue,
  useId: () => le,
  useImperativeHandle: () => ne,
  useLayoutEffect: () => j_,
  useMemo: () => r_,
  useReducer: () => $_,
  useRef: () => te,
  useState: () => R_,
});
function S(e, _) {
  y.__h && y.__h(d, e, T || _), (T = 0);
  var t = d.__H || (d.__H = { __: [], __h: [] });
  return e >= t.__.length && t.__.push({}), t.__[e];
}
function R_(e) {
  return (T = 1), $_(q_, e);
}
function $_(e, _, t) {
  var n = S(C++, 2);
  if (
    ((n.t = e),
    !n.__c &&
      ((n.__ = [
        t ? t(_) : q_(void 0, _),
        function (c) {
          var a = n.__N ? n.__N[0] : n.__[0],
            l = n.t(a, c);
          a !== l && ((n.__N = [l, n.__[1]]), n.__c.setState({}));
        },
      ]),
      (n.__c = d),
      !d.__f))
  ) {
    var i = function (c, a, l) {
      if (!n.__c.__H) return !0;
      var s = n.__c.__H.__.filter(function (p) {
        return !!p.__c;
      });
      if (
        s.every(function (p) {
          return !p.__N;
        })
      )
        return !r || r.call(this, c, a, l);
      var o = n.__c.props !== c;
      return (
        s.forEach(function (p) {
          if (p.__N) {
            var f = p.__[0];
            (p.__ = p.__N), (p.__N = void 0), f !== p.__[0] && (o = !0);
          }
        }),
        (r && r.call(this, c, a, l)) || o
      );
    };
    d.__f = !0;
    var r = d.shouldComponentUpdate,
      u = d.componentWillUpdate;
    (d.componentWillUpdate = function (c, a, l) {
      if (this.__e) {
        var s = r;
        (r = void 0), i(c, a, l), (r = s);
      }
      u && u.call(this, c, a, l);
    }),
      (d.shouldComponentUpdate = i);
  }
  return n.__N || n.__;
}
function ee(e, _) {
  var t = S(C++, 3);
  !y.__s && o_(t.__H, _) && ((t.__ = e), (t.u = _), d.__H.__h.push(t));
}
function j_(e, _) {
  var t = S(C++, 4);
  !y.__s && o_(t.__H, _) && ((t.__ = e), (t.u = _), d.__h.push(t));
}
function te(e) {
  return (
    (T = 5),
    r_(function () {
      return { current: e };
    }, [])
  );
}
function ne(e, _, t) {
  (T = 6),
    j_(
      function () {
        if (typeof e == "function") {
          var n = e(_());
          return function () {
            e(null), n && typeof n == "function" && n();
          };
        }
        if (e)
          return (
            (e.current = _()),
            function () {
              return (e.current = null);
            }
          );
      },
      t == null ? t : t.concat(e)
    );
}
function r_(e, _) {
  var t = S(C++, 7);
  return o_(t.__H, _) && ((t.__ = e()), (t.__H = _), (t.__h = e)), t.__;
}
function re(e, _) {
  return (
    (T = 8),
    r_(function () {
      return e;
    }, _)
  );
}
function oe(e) {
  var _ = d.context[e.__c],
    t = S(C++, 9);
  return (
    (t.c = e),
    _ ? (t.__ == null && ((t.__ = !0), _.sub(d)), _.props.value) : e.__
  );
}
function ie(e, _) {
  y.useDebugValue && y.useDebugValue(_ ? _(e) : e);
}
function ue(e) {
  var _ = S(C++, 10),
    t = R_();
  return (
    (_.__ = e),
    d.componentDidCatch ||
      (d.componentDidCatch = function (n, i) {
        _.__ && _.__(n, i), t[1](n);
      }),
    [
      t[0],
      function () {
        t[1](void 0);
      },
    ]
  );
}
function le() {
  var e = S(C++, 11);
  if (!e.__) {
    for (var _ = d.__v; _ !== null && !_.__m && _.__ !== null; ) _ = _.__;
    var t = _.__m || (_.__m = [0, 0]);
    e.__ = "P" + t[0] + "-" + t[1]++;
  }
  return e.__;
}
function ce() {
  for (var e; (e = I_.shift()); )
    if (e.__P && e.__H)
      try {
        e.__H.__h.forEach(V), e.__H.__h.forEach(n_), (e.__H.__h = []);
      } catch (_) {
        (e.__H.__h = []), y.__e(_, e.__v);
      }
}
function fe(e) {
  var _,
    t = function () {
      clearTimeout(n), L_ && cancelAnimationFrame(_), setTimeout(e);
    },
    n = setTimeout(t, 35);
  L_ && (_ = requestAnimationFrame(t));
}
function V(e) {
  var _ = d,
    t = e.__c;
  typeof t == "function" && ((e.__c = void 0), t()), (d = _);
}
function n_(e) {
  var _ = d;
  (e.__c = e.__()), (d = _);
}
function o_(e, _) {
  return (
    !e ||
    e.length !== _.length ||
    _.some(function (t, n) {
      return t !== e[n];
    })
  );
}
function q_(e, _) {
  return typeof _ == "function" ? _(e) : _;
}
var C,
  d,
  t_,
  U_,
  T,
  I_,
  y,
  T_,
  D_,
  A_,
  F_,
  M_,
  W_,
  L_,
  ae = z(() => {
    "use strict";
    N_();
    (T = 0),
      (I_ = []),
      (y = h),
      (T_ = y.__b),
      (D_ = y.__r),
      (A_ = y.diffed),
      (F_ = y.__c),
      (M_ = y.unmount),
      (W_ = y.__);
    (y.__b = function (e) {
      (d = null), T_ && T_(e);
    }),
      (y.__ = function (e, _) {
        e && _.__k && _.__k.__m && (e.__m = _.__k.__m), W_ && W_(e, _);
      }),
      (y.__r = function (e) {
        D_ && D_(e), (C = 0);
        var _ = (d = e.__c).__H;
        _ &&
          (t_ === d
            ? ((_.__h = []),
              (d.__h = []),
              _.__.forEach(function (t) {
                t.__N && (t.__ = t.__N), (t.u = t.__N = void 0);
              }))
            : (_.__h.forEach(V), _.__h.forEach(n_), (_.__h = []), (C = 0))),
          (t_ = d);
      }),
      (y.diffed = function (e) {
        A_ && A_(e);
        var _ = e.__c;
        _ &&
          _.__H &&
          (_.__H.__h.length &&
            ((I_.push(_) !== 1 && U_ === y.requestAnimationFrame) ||
              ((U_ = y.requestAnimationFrame) || fe)(ce)),
          _.__H.__.forEach(function (t) {
            t.u && (t.__H = t.u), (t.u = void 0);
          })),
          (t_ = d = null);
      }),
      (y.__c = function (e, _) {
        _.some(function (t) {
          try {
            t.__h.forEach(V),
              (t.__h = t.__h.filter(function (n) {
                return !n.__ || n_(n);
              }));
          } catch (n) {
            _.some(function (i) {
              i.__h && (i.__h = []);
            }),
              (_ = []),
              y.__e(n, t.__v);
          }
        }),
          F_ && F_(e, _);
      }),
      (y.unmount = function (e) {
        M_ && M_(e);
        var _,
          t = e.__c;
        t &&
          t.__H &&
          (t.__H.__.forEach(function (n) {
            try {
              V(n);
            } catch (i) {
              _ = i;
            }
          }),
          (t.__H = void 0),
          _ && y.__e(_, t.__v));
      });
    L_ = typeof requestAnimationFrame == "function";
  });
export {
  l_ as a,
  V_ as b,
  O_ as c,
  g_ as d,
  P_ as e,
  _e as f,
  N_ as g,
  R_ as h,
  ee as i,
  se as j,
  ae as k,
};
