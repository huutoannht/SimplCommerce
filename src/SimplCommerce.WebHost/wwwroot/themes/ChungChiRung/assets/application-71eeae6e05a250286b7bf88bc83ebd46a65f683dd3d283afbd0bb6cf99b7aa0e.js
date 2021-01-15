﻿function initMenu() {
    $(document).on("click", ".fhmm .dropdown-menu", function (t) {
        t.stopPropagation()
    })
}

function initSliders() {
    $(".sliders-container").length > 0 && ($(".sliders-container").each(function () {
        var t = .402 * parseInt($(this).find(".slider").css("width"));
        $(this).css("min-height", parseInt(t) + 5 + "px"), $(".slider").find("img").css("height", parseInt(t) + 5 + "px")
    }), $(".h1-slider-text").each(function () {
        var t = parseInt($(".sliders-container").css("width")),
            e = $(".slider-text-small").data("font_size"),
            n = $(".slider-text-small").data("default_width");
        $(this).css("font-size", calculateX2(e, n, t) + "px")
    }), $(".sliders-container").find(".slider").length > 1 && $(".sliders-container").cycle())
}

function calculateX2(t, e, n) {
    return parseInt(t) * parseInt(n) / parseInt(e)
}

function initChain() {
    $(".chain-images").length && $(document).on("mouseover", ".chain-images img", function () {
        var t = $(this).attr("data-position");
        if ($(".chain-text p").hide(), $(".chain-text .chain-" + t).show(), 1 == t) var e = 7.1;
        else if (2 == t) e = 23.2;
        else if (3 == t) e = 40.3;
        else if (4 == t) e = 56.7;
        else if (5 == t) e = 73.1;
        else if (6 == t) e = 89.9;
        $(".chain-bar").css("left", e + "%"), $(".chain-images img").removeClass("active"), $(this).addClass("active")
    })
    $(".chain-images1").length && $(document).on("mouseover", ".chain-images1 img", function () {
        var t = $(this).attr("data-position");
        if ($(".chain-text1 p").hide(), $(".chain-text1 .chain-" + t).show(), 1 == t) var e = 7.1;
        else if (2 == t) e = 23.2;
        else if (3 == t) e = 40.3;
        else if (4 == t) e = 56.7;
        else if (5 == t) e = 73.1;
        else if (6 == t) e = 89.9;
        $(".chain-bar1").css("left", e + "%"), $(".chain-images1 img").removeClass("active"), $(this).addClass("active")
    })
}

function initSdg() {
    var t = getSelectedSdg();
    $(".sdgdiv").hide(), $("#sdg" + t).toggle(), $('a[data-id="sdg' + t + '"]').addClass("selected"), $(".sdg-button").click(function () {
        var t = "#" + $(this).attr("data-id");
        $(".sdg-button").removeClass("selected"), $(".sdgdiv").hide(), $(this).addClass("selected"), $(t).toggle()
    })
}

function getSelectedSdg() {
    var t, e = [],
        n = document.URL.split("?")[1];
    if (n != undefined) {
        n = n.split("&");
        for (var i = 0; i < n.length; i++) t = n[i].split("="), e.push(t[1]), e[t[0]] = t[1]
    }
    return e.sdg != undefined ? e.sdg : 1
}
var loadTwitterSDK, renderTimelines;
! function (t, e) {
    "object" == typeof module && "object" == typeof module.exports ? module.exports = t.document ? e(t, !0) : function (t) {
        if (!t.document) throw new Error("jQuery requires a window with a document");
        return e(t)
    } : e(t)
}("undefined" != typeof window ? window : this, function (t, e) {
    function n(t) {
        var e = !!t && "length" in t && t.length,
            n = ht.type(t);
        return "function" !== n && !ht.isWindow(t) && ("array" === n || 0 === e || "number" == typeof e && e > 0 && e - 1 in t)
    }

    function i(t, e, n) {
        if (ht.isFunction(e)) return ht.grep(t, function (t, i) {
            return !!e.call(t, i, t) !== n
        });
        if (e.nodeType) return ht.grep(t, function (t) {
            return t === e !== n
        });
        if ("string" == typeof e) {
            if (Ct.test(e)) return ht.filter(e, t, n);
            e = ht.filter(e, t)
        }
        return ht.grep(t, function (t) {
            return ht.inArray(t, e) > -1 !== n
        })
    }

    function r(t, e) {
        do {
            t = t[e]
        } while (t && 1 !== t.nodeType);
        return t
    }

    function o(t) {
        var e = {};
        return ht.each(t.match($t) || [], function (t, n) {
            e[n] = !0
        }), e
    }

    function s() {
        it.addEventListener ? (it.removeEventListener("DOMContentLoaded", a), t.removeEventListener("load", a)) : (it.detachEvent("onreadystatechange", a), t.detachEvent("onload", a))
    }

    function a() {
        (it.addEventListener || "load" === t.event.type || "complete" === it.readyState) && (s(), ht.ready())
    }

    function l(t, e, n) {
        if (n === undefined && 1 === t.nodeType) {
            var i = "data-" + e.replace(Rt, "-$1").toLowerCase();
            if ("string" == typeof (n = t.getAttribute(i))) {
                try {
                    n = "true" === n || "false" !== n && ("null" === n ? null : +n + "" === n ? +n : Pt.test(n) ? ht.parseJSON(n) : n)
                } catch (r) { }
                ht.data(t, e, n)
            } else n = undefined
        }
        return n
    }

    function u(t) {
        var e;
        for (e in t)
            if (("data" !== e || !ht.isEmptyObject(t[e])) && "toJSON" !== e) return !1;
        return !0
    }

    function c(t, e, n, i) {
        if (jt(t)) {
            var r, o, s = ht.expando,
                a = t.nodeType,
                l = a ? ht.cache : t,
                u = a ? t[s] : t[s] && s;
            if (u && l[u] && (i || l[u].data) || n !== undefined || "string" != typeof e) return u || (u = a ? t[s] = nt.pop() || ht.guid++ : s), l[u] || (l[u] = a ? {} : {
                toJSON: ht.noop
            }), "object" != typeof e && "function" != typeof e || (i ? l[u] = ht.extend(l[u], e) : l[u].data = ht.extend(l[u].data, e)), o = l[u], i || (o.data || (o.data = {}), o = o.data), n !== undefined && (o[ht.camelCase(e)] = n), "string" == typeof e ? null == (r = o[e]) && (r = o[ht.camelCase(e)]) : r = o, r
        }
    }

    function d(t, e, n) {
        if (jt(t)) {
            var i, r, o = t.nodeType,
                s = o ? ht.cache : t,
                a = o ? t[ht.expando] : ht.expando;
            if (s[a]) {
                if (e && (i = n ? s[a] : s[a].data)) {
                    r = (e = ht.isArray(e) ? e.concat(ht.map(e, ht.camelCase)) : e in i ? [e] : (e = ht.camelCase(e)) in i ? [e] : e.split(" ")).length;
                    for (; r--;) delete i[e[r]];
                    if (n ? !u(i) : !ht.isEmptyObject(i)) return
                } (n || (delete s[a].data, u(s[a]))) && (o ? ht.cleanData([t], !0) : dt.deleteExpando || s != s.window ? delete s[a] : s[a] = undefined)
            }
        }
    }

    function p(t, e, n, i) {
        var r, o = 1,
            s = 20,
            a = i ? function () {
                return i.cur()
            } : function () {
                return ht.css(t, e, "")
            },
            l = a(),
            u = n && n[3] || (ht.cssNumber[e] ? "" : "px"),
            c = (ht.cssNumber[e] || "px" !== u && +l) && Bt.exec(ht.css(t, e));
        if (c && c[3] !== u) {
            u = u || c[3], n = n || [], c = +l || 1;
            do {
                c /= o = o || ".5", ht.style(t, e, c + u)
            } while (o !== (o = a() / l) && 1 !== o && --s)
        }
        return n && (c = +c || +l || 0, r = n[1] ? c + (n[1] + 1) * n[2] : +n[2], i && (i.unit = u, i.start = c, i.end = r)), r
    }

    function h(t) {
        var e = Xt.split("|"),
            n = t.createDocumentFragment();
        if (n.createElement)
            for (; e.length;) n.createElement(e.pop());
        return n
    }

    function f(t, e) {
        var n, i, r = 0,
            o = "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e || "*") : "undefined" != typeof t.querySelectorAll ? t.querySelectorAll(e || "*") : undefined;
        if (!o)
            for (o = [], n = t.childNodes || t; null != (i = n[r]); r++) !e || ht.nodeName(i, e) ? o.push(i) : ht.merge(o, f(i, e));
        return e === undefined || e && ht.nodeName(t, e) ? ht.merge([t], o) : o
    }

    function m(t, e) {
        for (var n, i = 0; null != (n = t[i]); i++) ht._data(n, "globalEval", !e || ht._data(e[i], "globalEval"))
    }

    function g(t) {
        _t.test(t.type) && (t.defaultChecked = t.checked)
    }

    function y(t, e, n, i, r) {
        for (var o, s, a, l, u, c, d, p = t.length, y = h(e), v = [], b = 0; b < p; b++)
            if ((s = t[b]) || 0 === s)
                if ("object" === ht.type(s)) ht.merge(v, s.nodeType ? [s] : s);
                else if (Kt.test(s)) {
                    for (l = l || y.appendChild(e.createElement("div")), u = (zt.exec(s) || ["", ""])[1].toLowerCase(), d = Qt[u] || Qt._default, l.innerHTML = d[1] + ht.htmlPrefilter(s) + d[2], o = d[0]; o--;) l = l.lastChild;
                    if (!dt.leadingWhitespace && Vt.test(s) && v.push(e.createTextNode(Vt.exec(s)[0])), !dt.tbody)
                        for (o = (s = "table" !== u || Yt.test(s) ? "<table>" !== d[1] || Yt.test(s) ? 0 : l : l.firstChild) && s.childNodes.length; o--;) ht.nodeName(c = s.childNodes[o], "tbody") && !c.childNodes.length && s.removeChild(c);
                    for (ht.merge(v, l.childNodes), l.textContent = ""; l.firstChild;) l.removeChild(l.firstChild);
                    l = y.lastChild
                } else v.push(e.createTextNode(s));
        for (l && y.removeChild(l), dt.appendChecked || ht.grep(f(v, "input"), g), b = 0; s = v[b++];)
            if (i && ht.inArray(s, i) > -1) r && r.push(s);
            else if (a = ht.contains(s.ownerDocument, s), l = f(y.appendChild(s), "script"), a && m(l), n)
                for (o = 0; s = l[o++];) Ut.test(s.type || "") && n.push(s);
        return l = null, y
    }

    function v() {
        return !0
    }

    function b() {
        return !1
    }

    function w() {
        try {
            return it.activeElement
        } catch (t) { }
    }

    function x(t, e, n, i, r, o) {
        var s, a;
        if ("object" == typeof e) {
            for (a in "string" != typeof n && (i = i || n, n = undefined), e) x(t, a, n, i, e[a], o);
            return t
        }
        if (null == i && null == r ? (r = n, i = n = undefined) : null == r && ("string" == typeof n ? (r = i, i = undefined) : (r = i, i = n, n = undefined)), !1 === r) r = b;
        else if (!r) return t;
        return 1 === o && (s = r, (r = function (t) {
            return ht().off(t), s.apply(this, arguments)
        }).guid = s.guid || (s.guid = ht.guid++)), t.each(function () {
            ht.event.add(this, e, r, i, n)
        })
    }

    function T(t, e) {
        return ht.nodeName(t, "table") && ht.nodeName(11 !== e.nodeType ? e : e.firstChild, "tr") ? t.getElementsByTagName("tbody")[0] || t.appendChild(t.ownerDocument.createElement("tbody")) : t
    }

    function C(t) {
        return t.type = (null !== ht.find.attr(t, "type")) + "/" + t.type, t
    }

    function k(t) {
        var e = ae.exec(t.type);
        return e ? t.type = e[1] : t.removeAttribute("type"), t
    }

    function E(t, e) {
        if (1 === e.nodeType && ht.hasData(t)) {
            var n, i, r, o = ht._data(t),
                s = ht._data(e, o),
                a = o.events;
            if (a)
                for (n in delete s.handle, s.events = {}, a)
                    for (i = 0, r = a[n].length; i < r; i++) ht.event.add(e, n, a[n][i]);
            s.data && (s.data = ht.extend({}, s.data))
        }
    }

    function S(t, e) {
        var n, i, r;
        if (1 === e.nodeType) {
            if (n = e.nodeName.toLowerCase(), !dt.noCloneEvent && e[ht.expando]) {
                for (i in (r = ht._data(e)).events) ht.removeEvent(e, i, r.handle);
                e.removeAttribute(ht.expando)
            }
            "script" === n && e.text !== t.text ? (C(e).text = t.text, k(e)) : "object" === n ? (e.parentNode && (e.outerHTML = t.outerHTML), dt.html5Clone && t.innerHTML && !ht.trim(e.innerHTML) && (e.innerHTML = t.innerHTML)) : "input" === n && _t.test(t.type) ? (e.defaultChecked = e.checked = t.checked, e.value !== t.value && (e.value = t.value)) : "option" === n ? e.defaultSelected = e.selected = t.defaultSelected : "input" !== n && "textarea" !== n || (e.defaultValue = t.defaultValue)
        }
    }

    function L(t, e, n, i) {
        e = ot.apply([], e);
        var r, o, s, a, l, u, c = 0,
            d = t.length,
            p = d - 1,
            h = e[0],
            m = ht.isFunction(h);
        if (m || d > 1 && "string" == typeof h && !dt.checkClone && se.test(h)) return t.each(function (r) {
            var o = t.eq(r);
            m && (e[0] = h.call(this, r, o.html())), L(o, e, n, i)
        });
        if (d && (r = (u = y(e, t[0].ownerDocument, !1, t, i)).firstChild, 1 === u.childNodes.length && (u = r), r || i)) {
            for (s = (a = ht.map(f(u, "script"), C)).length; c < d; c++) o = u, c !== p && (o = ht.clone(o, !0, !0), s && ht.merge(a, f(o, "script"))), n.call(t[c], o, c);
            if (s)
                for (l = a[a.length - 1].ownerDocument, ht.map(a, k), c = 0; c < s; c++) o = a[c], Ut.test(o.type || "") && !ht._data(o, "globalEval") && ht.contains(l, o) && (o.src ? ht._evalUrl && ht._evalUrl(o.src) : ht.globalEval((o.text || o.textContent || o.innerHTML || "").replace(le, "")));
            u = r = null
        }
        return t
    }

    function A(t, e, n) {
        for (var i, r = e ? ht.filter(e, t) : t, o = 0; null != (i = r[o]); o++) n || 1 !== i.nodeType || ht.cleanData(f(i)), i.parentNode && (n && ht.contains(i.ownerDocument, i) && m(f(i, "script")), i.parentNode.removeChild(i));
        return t
    }

    function N(t, e) {
        var n = ht(e.createElement(t)).appendTo(e.body),
            i = ht.css(n[0], "display");
        return n.detach(), i
    }

    function $(t) {
        var e = it,
            n = de[t];
        return n || ("none" !== (n = N(t, e)) && n || ((e = ((ce = (ce || ht("<iframe frameborder='0' width='0' height='0'/>")).appendTo(e.documentElement))[0].contentWindow || ce[0].contentDocument).document).write(), e.close(), n = N(t, e), ce.detach()), de[t] = n), n
    }

    function D(t, e) {
        return {
            get: function () {
                if (!t()) return (this.get = e).apply(this, arguments);
                delete this.get
            }
        }
    }

    function j(t) {
        if (t in Se) return t;
        for (var e = t.charAt(0).toUpperCase() + t.slice(1), n = Ee.length; n--;)
            if ((t = Ee[n] + e) in Se) return t
    }

    function P(t, e) {
        for (var n, i, r, o = [], s = 0, a = t.length; s < a; s++)(i = t[s]).style && (o[s] = ht._data(i, "olddisplay"), n = i.style.display, e ? (o[s] || "none" !== n || (i.style.display = ""), "" === i.style.display && Ot(i) && (o[s] = ht._data(i, "olddisplay", $(i.nodeName)))) : (r = Ot(i), (n && "none" !== n || !r) && ht._data(i, "olddisplay", r ? n : ht.css(i, "display"))));
        for (s = 0; s < a; s++)(i = t[s]).style && (e && "none" !== i.style.display && "" !== i.style.display || (i.style.display = e ? o[s] || "" : "none"));
        return t
    }

    function R(t, e, n) {
        var i = Te.exec(e);
        return i ? Math.max(0, i[1] - (n || 0)) + (i[2] || "px") : e
    }

    function q(t, e, n, i, r) {
        for (var o = n === (i ? "border" : "content") ? 4 : "width" === e ? 1 : 0, s = 0; o < 4; o += 2) "margin" === n && (s += ht.css(t, n + Mt[o], !0, r)), i ? ("content" === n && (s -= ht.css(t, "padding" + Mt[o], !0, r)), "margin" !== n && (s -= ht.css(t, "border" + Mt[o] + "Width", !0, r))) : (s += ht.css(t, "padding" + Mt[o], !0, r), "padding" !== n && (s += ht.css(t, "border" + Mt[o] + "Width", !0, r)));
        return s
    }

    function H(t, e, n) {
        var i = !0,
            r = "width" === e ? t.offsetWidth : t.offsetHeight,
            o = ge(t),
            s = dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, o);
        if (r <= 0 || null == r) {
            if (((r = ye(t, e, o)) < 0 || null == r) && (r = t.style[e]), he.test(r)) return r;
            i = s && (dt.boxSizingReliable() || r === t.style[e]), r = parseFloat(r) || 0
        }
        return r + q(t, e, n || (s ? "border" : "content"), i, o) + "px"
    }

    function F(t, e, n, i, r) {
        return new F.prototype.init(t, e, n, i, r)
    }

    function I() {
        return t.setTimeout(function () {
            Le = undefined
        }), Le = ht.now()
    }

    function B(t, e) {
        var n, i = {
            height: t
        },
            r = 0;
        for (e = e ? 1 : 0; r < 4; r += 2 - e) i["margin" + (n = Mt[r])] = i["padding" + n] = t;
        return e && (i.opacity = i.width = t), i
    }

    function M(t, e, n) {
        for (var i, r = (_.tweeners[e] || []).concat(_.tweeners["*"]), o = 0, s = r.length; o < s; o++)
            if (i = r[o].call(n, e, t)) return i
    }

    function O(t, e, n) {
        var i, r, o, s, a, l, u, c = this,
            d = {},
            p = t.style,
            h = t.nodeType && Ot(t),
            f = ht._data(t, "fxshow");
        for (i in n.queue || (null == (a = ht._queueHooks(t, "fx")).unqueued && (a.unqueued = 0, l = a.empty.fire, a.empty.fire = function () {
            a.unqueued || l()
        }), a.unqueued++, c.always(function () {
            c.always(function () {
                a.unqueued--, ht.queue(t, "fx").length || a.empty.fire()
            })
        })), 1 === t.nodeType && ("height" in e || "width" in e) && (n.overflow = [p.overflow, p.overflowX, p.overflowY], "inline" === ("none" === (u = ht.css(t, "display")) ? ht._data(t, "olddisplay") || $(t.nodeName) : u) && "none" === ht.css(t, "float") && (dt.inlineBlockNeedsLayout && "inline" !== $(t.nodeName) ? p.zoom = 1 : p.display = "inline-block")), n.overflow && (p.overflow = "hidden", dt.shrinkWrapBlocks() || c.always(function () {
            p.overflow = n.overflow[0], p.overflowX = n.overflow[1], p.overflowY = n.overflow[2]
        })), e)
            if (r = e[i], Re.exec(r)) {
                if (delete e[i], o = o || "toggle" === r, r === (h ? "hide" : "show")) {
                    if ("show" !== r || !f || f[i] === undefined) continue;
                    h = !0
                }
                d[i] = f && f[i] || ht.style(t, i)
            } else u = undefined;
        if (ht.isEmptyObject(d)) "inline" === ("none" === u ? $(t.nodeName) : u) && (p.display = u);
        else
            for (i in f ? "hidden" in f && (h = f.hidden) : f = ht._data(t, "fxshow", {}), o && (f.hidden = !h), h ? ht(t).show() : c.done(function () {
                ht(t).hide()
            }), c.done(function () {
                var e;
                for (e in ht._removeData(t, "fxshow"), d) ht.style(t, e, d[e])
            }), d) s = M(h ? f[i] : 0, i, c), i in f || (f[i] = s.start, h && (s.end = s.start, s.start = "width" === i || "height" === i ? 1 : 0))
    }

    function W(t, e) {
        var n, i, r, o, s;
        for (n in t)
            if (r = e[i = ht.camelCase(n)], o = t[n], ht.isArray(o) && (r = o[1], o = t[n] = o[0]), n !== i && (t[i] = o, delete t[n]), (s = ht.cssHooks[i]) && "expand" in s)
                for (n in o = s.expand(o), delete t[i], o) n in t || (t[n] = o[n], e[n] = r);
            else e[i] = r
    }

    function _(t, e, n) {
        var i, r, o = 0,
            s = _.prefilters.length,
            a = ht.Deferred().always(function () {
                delete l.elem
            }),
            l = function () {
                if (r) return !1;
                for (var e = Le || I(), n = Math.max(0, u.startTime + u.duration - e), i = 1 - (n / u.duration || 0), o = 0, s = u.tweens.length; o < s; o++) u.tweens[o].run(i);
                return a.notifyWith(t, [u, i, n]), i < 1 && s ? n : (a.resolveWith(t, [u]), !1)
            },
            u = a.promise({
                elem: t,
                props: ht.extend({}, e),
                opts: ht.extend(!0, {
                    specialEasing: {},
                    easing: ht.easing._default
                }, n),
                originalProperties: e,
                originalOptions: n,
                startTime: Le || I(),
                duration: n.duration,
                tweens: [],
                createTween: function (e, n) {
                    var i = ht.Tween(t, u.opts, e, n, u.opts.specialEasing[e] || u.opts.easing);
                    return u.tweens.push(i), i
                },
                stop: function (e) {
                    var n = 0,
                        i = e ? u.tweens.length : 0;
                    if (r) return this;
                    for (r = !0; n < i; n++) u.tweens[n].run(1);
                    return e ? (a.notifyWith(t, [u, 1, 0]), a.resolveWith(t, [u, e])) : a.rejectWith(t, [u, e]), this
                }
            }),
            c = u.props;
        for (W(c, u.opts.specialEasing); o < s; o++)
            if (i = _.prefilters[o].call(u, t, c, u.opts)) return ht.isFunction(i.stop) && (ht._queueHooks(u.elem, u.opts.queue).stop = ht.proxy(i.stop, i)), i;
        return ht.map(c, M, u), ht.isFunction(u.opts.start) && u.opts.start.call(t, u), ht.fx.timer(ht.extend(l, {
            elem: t,
            anim: u,
            queue: u.opts.queue
        })), u.progress(u.opts.progress).done(u.opts.done, u.opts.complete).fail(u.opts.fail).always(u.opts.always)
    }

    function z(t) {
        return ht.attr(t, "class") || ""
    }

    function U(t) {
        return function (e, n) {
            "string" != typeof e && (n = e, e = "*");
            var i, r = 0,
                o = e.toLowerCase().match($t) || [];
            if (ht.isFunction(n))
                for (; i = o[r++];) "+" === i.charAt(0) ? (i = i.slice(1) || "*", (t[i] = t[i] || []).unshift(n)) : (t[i] = t[i] || []).push(n)
        }
    }

    function V(t, e, n, i) {
        function r(a) {
            var l;
            return o[a] = !0, ht.each(t[a] || [], function (t, a) {
                var u = a(e, n, i);
                return "string" != typeof u || s || o[u] ? s ? !(l = u) : void 0 : (e.dataTypes.unshift(u), r(u), !1)
            }), l
        }
        var o = {},
            s = t === sn;
        return r(e.dataTypes[0]) || !o["*"] && r("*")
    }

    function X(t, e) {
        var n, i, r = ht.ajaxSettings.flatOptions || {};
        for (i in e) e[i] !== undefined && ((r[i] ? t : n || (n = {}))[i] = e[i]);
        return n && ht.extend(!0, t, n), t
    }

    function Q(t, e, n) {
        for (var i, r, o, s, a = t.contents, l = t.dataTypes;
            "*" === l[0];) l.shift(), r === undefined && (r = t.mimeType || e.getResponseHeader("Content-Type"));
        if (r)
            for (s in a)
                if (a[s] && a[s].test(r)) {
                    l.unshift(s);
                    break
                }
        if (l[0] in n) o = l[0];
        else {
            for (s in n) {
                if (!l[0] || t.converters[s + " " + l[0]]) {
                    o = s;
                    break
                }
                i || (i = s)
            }
            o = o || i
        }
        if (o) return o !== l[0] && l.unshift(o), n[o]
    }

    function K(t, e, n, i) {
        var r, o, s, a, l, u = {},
            c = t.dataTypes.slice();
        if (c[1])
            for (s in t.converters) u[s.toLowerCase()] = t.converters[s];
        for (o = c.shift(); o;)
            if (t.responseFields[o] && (n[t.responseFields[o]] = e), !l && i && t.dataFilter && (e = t.dataFilter(e, t.dataType)), l = o, o = c.shift())
                if ("*" === o) o = l;
                else if ("*" !== l && l !== o) {
                    if (!(s = u[l + " " + o] || u["* " + o]))
                        for (r in u)
                            if ((a = r.split(" "))[1] === o && (s = u[l + " " + a[0]] || u["* " + a[0]])) {
                                !0 === s ? s = u[r] : !0 !== u[r] && (o = a[0], c.unshift(a[1]));
                                break
                            }
                    if (!0 !== s)
                        if (s && t["throws"]) e = s(e);
                        else try {
                            e = s(e)
                        } catch (d) {
                            return {
                                state: "parsererror",
                                error: s ? d : "No conversion from " + l + " to " + o
                            }
                        }
                }
        return {
            state: "success",
            data: e
        }
    }

    function Y(t) {
        return t.style && t.style.display || ht.css(t, "display")
    }

    function G(t) {
        if (!ht.contains(t.ownerDocument || it, t)) return !0;
        for (; t && 1 === t.nodeType;) {
            if ("none" === Y(t) || "hidden" === t.type) return !0;
            t = t.parentNode
        }
        return !1
    }

    function J(t, e, n, i) {
        var r;
        if (ht.isArray(e)) ht.each(e, function (e, r) {
            n || dn.test(t) ? i(t, r) : J(t + "[" + ("object" == typeof r && null != r ? e : "") + "]", r, n, i)
        });
        else if (n || "object" !== ht.type(e)) i(t, e);
        else
            for (r in e) J(t + "[" + r + "]", e[r], n, i)
    }

    function Z() {
        try {
            return new t.XMLHttpRequest
        } catch (e) { }
    }

    function tt() {
        try {
            return new t.ActiveXObject("Microsoft.XMLHTTP")
        } catch (e) { }
    }

    function et(t) {
        return ht.isWindow(t) ? t : 9 === t.nodeType && (t.defaultView || t.parentWindow)
    }
    var nt = [],
        it = t.document,
        rt = nt.slice,
        ot = nt.concat,
        st = nt.push,
        at = nt.indexOf,
        lt = {},
        ut = lt.toString,
        ct = lt.hasOwnProperty,
        dt = {},
        pt = "1.12.4",
        ht = function (t, e) {
            return new ht.fn.init(t, e)
        },
        ft = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,
        mt = /^-ms-/,
        gt = /-([\da-z])/gi,
        yt = function (t, e) {
            return e.toUpperCase()
        };
    ht.fn = ht.prototype = {
        jquery: pt,
        constructor: ht,
        selector: "",
        length: 0,
        toArray: function () {
            return rt.call(this)
        },
        get: function (t) {
            return null != t ? t < 0 ? this[t + this.length] : this[t] : rt.call(this)
        },
        pushStack: function (t) {
            var e = ht.merge(this.constructor(), t);
            return e.prevObject = this, e.context = this.context, e
        },
        each: function (t) {
            return ht.each(this, t)
        },
        map: function (t) {
            return this.pushStack(ht.map(this, function (e, n) {
                return t.call(e, n, e)
            }))
        },
        slice: function () {
            return this.pushStack(rt.apply(this, arguments))
        },
        first: function () {
            return this.eq(0)
        },
        last: function () {
            return this.eq(-1)
        },
        eq: function (t) {
            var e = this.length,
                n = +t + (t < 0 ? e : 0);
            return this.pushStack(n >= 0 && n < e ? [this[n]] : [])
        },
        end: function () {
            return this.prevObject || this.constructor()
        },
        push: st,
        sort: nt.sort,
        splice: nt.splice
    }, ht.extend = ht.fn.extend = function () {
        var t, e, n, i, r, o, s = arguments[0] || {},
            a = 1,
            l = arguments.length,
            u = !1;
        for ("boolean" == typeof s && (u = s, s = arguments[a] || {}, a++), "object" == typeof s || ht.isFunction(s) || (s = {}), a === l && (s = this, a--); a < l; a++)
            if (null != (r = arguments[a]))
                for (i in r) t = s[i], s !== (n = r[i]) && (u && n && (ht.isPlainObject(n) || (e = ht.isArray(n))) ? (e ? (e = !1, o = t && ht.isArray(t) ? t : []) : o = t && ht.isPlainObject(t) ? t : {}, s[i] = ht.extend(u, o, n)) : n !== undefined && (s[i] = n));
        return s
    }, ht.extend({
        expando: "jQuery" + (pt + Math.random()).replace(/\D/g, ""),
        isReady: !0,
        error: function (t) {
            throw new Error(t)
        },
        noop: function () { },
        isFunction: function (t) {
            return "function" === ht.type(t)
        },
        isArray: Array.isArray || function (t) {
            return "array" === ht.type(t)
        },
        isWindow: function (t) {
            return null != t && t == t.window
        },
        isNumeric: function (t) {
            var e = t && t.toString();
            return !ht.isArray(t) && e - parseFloat(e) + 1 >= 0
        },
        isEmptyObject: function (t) {
            var e;
            for (e in t) return !1;
            return !0
        },
        isPlainObject: function (t) {
            var e;
            if (!t || "object" !== ht.type(t) || t.nodeType || ht.isWindow(t)) return !1;
            try {
                if (t.constructor && !ct.call(t, "constructor") && !ct.call(t.constructor.prototype, "isPrototypeOf")) return !1
            } catch (n) {
                return !1
            }
            if (!dt.ownFirst)
                for (e in t) return ct.call(t, e);
            for (e in t);
            return e === undefined || ct.call(t, e)
        },
        type: function (t) {
            return null == t ? t + "" : "object" == typeof t || "function" == typeof t ? lt[ut.call(t)] || "object" : typeof t
        },
        globalEval: function (e) {
            e && ht.trim(e) && (t.execScript || function (e) {
                t.eval.call(t, e)
            })(e)
        },
        camelCase: function (t) {
            return t.replace(mt, "ms-").replace(gt, yt)
        },
        nodeName: function (t, e) {
            return t.nodeName && t.nodeName.toLowerCase() === e.toLowerCase()
        },
        each: function (t, e) {
            var i, r = 0;
            if (n(t))
                for (i = t.length; r < i && !1 !== e.call(t[r], r, t[r]); r++);
            else
                for (r in t)
                    if (!1 === e.call(t[r], r, t[r])) break;
            return t
        },
        trim: function (t) {
            return null == t ? "" : (t + "").replace(ft, "")
        },
        makeArray: function (t, e) {
            var i = e || [];
            return null != t && (n(Object(t)) ? ht.merge(i, "string" == typeof t ? [t] : t) : st.call(i, t)), i
        },
        inArray: function (t, e, n) {
            var i;
            if (e) {
                if (at) return at.call(e, t, n);
                for (i = e.length, n = n ? n < 0 ? Math.max(0, i + n) : n : 0; n < i; n++)
                    if (n in e && e[n] === t) return n
            }
            return -1
        },
        merge: function (t, e) {
            for (var n = +e.length, i = 0, r = t.length; i < n;) t[r++] = e[i++];
            if (n != n)
                for (; e[i] !== undefined;) t[r++] = e[i++];
            return t.length = r, t
        },
        grep: function (t, e, n) {
            for (var i = [], r = 0, o = t.length, s = !n; r < o; r++) !e(t[r], r) !== s && i.push(t[r]);
            return i
        },
        map: function (t, e, i) {
            var r, o, s = 0,
                a = [];
            if (n(t))
                for (r = t.length; s < r; s++) null != (o = e(t[s], s, i)) && a.push(o);
            else
                for (s in t) null != (o = e(t[s], s, i)) && a.push(o);
            return ot.apply([], a)
        },
        guid: 1,
        proxy: function (t, e) {
            var n, i, r;
            return "string" == typeof e && (r = t[e], e = t, t = r), ht.isFunction(t) ? (n = rt.call(arguments, 2), (i = function () {
                return t.apply(e || this, n.concat(rt.call(arguments)))
            }).guid = t.guid = t.guid || ht.guid++, i) : undefined
        },
        now: function () {
            return +new Date
        },
        support: dt
    }), "function" == typeof Symbol && (ht.fn[Symbol.iterator] = nt[Symbol.iterator]), ht.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function (t, e) {
        lt["[object " + e + "]"] = e.toLowerCase()
    });
    var vt = function (t) {
        function e(t, e, n, i) {
            var r, o, s, a, l, u, d, h, f = e && e.ownerDocument,
                m = e ? e.nodeType : 9;
            if (n = n || [], "string" != typeof t || !t || 1 !== m && 9 !== m && 11 !== m) return n;
            if (!i && ((e ? e.ownerDocument || e : M) !== j && D(e), e = e || j, R)) {
                if (11 !== m && (u = yt.exec(t)))
                    if (r = u[1]) {
                        if (9 === m) {
                            if (!(s = e.getElementById(r))) return n;
                            if (s.id === r) return n.push(s), n
                        } else if (f && (s = f.getElementById(r)) && I(e, s) && s.id === r) return n.push(s), n
                    } else {
                        if (u[2]) return J.apply(n, e.getElementsByTagName(t)), n;
                        if ((r = u[3]) && x.getElementsByClassName && e.getElementsByClassName) return J.apply(n, e.getElementsByClassName(r)), n
                    }
                if (x.qsa && !U[t + " "] && (!q || !q.test(t))) {
                    if (1 !== m) f = e, h = t;
                    else if ("object" !== e.nodeName.toLowerCase()) {
                        for ((a = e.getAttribute("id")) ? a = a.replace(bt, "\\$&") : e.setAttribute("id", a = B), o = (d = E(t)).length, l = pt.test(a) ? "#" + a : "[id='" + a + "']"; o--;) d[o] = l + " " + p(d[o]);
                        h = d.join(","), f = vt.test(t) && c(e.parentNode) || e
                    }
                    if (h) try {
                        return J.apply(n, f.querySelectorAll(h)), n
                    } catch (g) { } finally {
                            a === B && e.removeAttribute("id")
                        }
                }
            }
            return L(t.replace(at, "$1"), e, n, i)
        }

        function n() {
            function t(n, i) {
                return e.push(n + " ") > T.cacheLength && delete t[e.shift()], t[n + " "] = i
            }
            var e = [];
            return t
        }

        function i(t) {
            return t[B] = !0, t
        }

        function r(t) {
            var e = j.createElement("div");
            try {
                return !!t(e)
            } catch (n) {
                return !1
            } finally {
                e.parentNode && e.parentNode.removeChild(e), e = null
            }
        }

        function o(t, e) {
            for (var n = t.split("|"), i = n.length; i--;) T.attrHandle[n[i]] = e
        }

        function s(t, e) {
            var n = e && t,
                i = n && 1 === t.nodeType && 1 === e.nodeType && (~e.sourceIndex || X) - (~t.sourceIndex || X);
            if (i) return i;
            if (n)
                for (; n = n.nextSibling;)
                    if (n === e) return -1;
            return t ? 1 : -1
        }

        function a(t) {
            return function (e) {
                return "input" === e.nodeName.toLowerCase() && e.type === t
            }
        }

        function l(t) {
            return function (e) {
                var n = e.nodeName.toLowerCase();
                return ("input" === n || "button" === n) && e.type === t
            }
        }

        function u(t) {
            return i(function (e) {
                return e = +e, i(function (n, i) {
                    for (var r, o = t([], n.length, e), s = o.length; s--;) n[r = o[s]] && (n[r] = !(i[r] = n[r]))
                })
            })
        }

        function c(t) {
            return t && "undefined" != typeof t.getElementsByTagName && t
        }

        function d() { }

        function p(t) {
            for (var e = 0, n = t.length, i = ""; e < n; e++) i += t[e].value;
            return i
        }

        function h(t, e, n) {
            var i = e.dir,
                r = n && "parentNode" === i,
                o = W++;
            return e.first ? function (e, n, o) {
                for (; e = e[i];)
                    if (1 === e.nodeType || r) return t(e, n, o)
            } : function (e, n, s) {
                var a, l, u, c = [O, o];
                if (s) {
                    for (; e = e[i];)
                        if ((1 === e.nodeType || r) && t(e, n, s)) return !0
                } else
                    for (; e = e[i];)
                        if (1 === e.nodeType || r) {
                            if ((a = (l = (u = e[B] || (e[B] = {}))[e.uniqueID] || (u[e.uniqueID] = {}))[i]) && a[0] === O && a[1] === o) return c[2] = a[2];
                            if (l[i] = c, c[2] = t(e, n, s)) return !0
                        }
            }
        }

        function f(t) {
            return t.length > 1 ? function (e, n, i) {
                for (var r = t.length; r--;)
                    if (!t[r](e, n, i)) return !1;
                return !0
            } : t[0]
        }

        function m(t, n, i) {
            for (var r = 0, o = n.length; r < o; r++) e(t, n[r], i);
            return i
        }

        function g(t, e, n, i, r) {
            for (var o, s = [], a = 0, l = t.length, u = null != e; a < l; a++)(o = t[a]) && (n && !n(o, i, r) || (s.push(o), u && e.push(a)));
            return s
        }

        function y(t, e, n, r, o, s) {
            return r && !r[B] && (r = y(r)), o && !o[B] && (o = y(o, s)), i(function (i, s, a, l) {
                var u, c, d, p = [],
                    h = [],
                    f = s.length,
                    y = i || m(e || "*", a.nodeType ? [a] : a, []),
                    v = !t || !i && e ? y : g(y, p, t, a, l),
                    b = n ? o || (i ? t : f || r) ? [] : s : v;
                if (n && n(v, b, a, l), r)
                    for (u = g(b, h), r(u, [], a, l), c = u.length; c--;)(d = u[c]) && (b[h[c]] = !(v[h[c]] = d));
                if (i) {
                    if (o || t) {
                        if (o) {
                            for (u = [], c = b.length; c--;)(d = b[c]) && u.push(v[c] = d);
                            o(null, b = [], u, l)
                        }
                        for (c = b.length; c--;)(d = b[c]) && (u = o ? tt(i, d) : p[c]) > -1 && (i[u] = !(s[u] = d))
                    }
                } else b = g(b === s ? b.splice(f, b.length) : b), o ? o(null, s, b, l) : J.apply(s, b)
            })
        }

        function v(t) {
            for (var e, n, i, r = t.length, o = T.relative[t[0].type], s = o || T.relative[" "], a = o ? 1 : 0, l = h(function (t) {
                return t === e
            }, s, !0), u = h(function (t) {
                return tt(e, t) > -1
            }, s, !0), c = [function (t, n, i) {
                var r = !o && (i || n !== A) || ((e = n).nodeType ? l(t, n, i) : u(t, n, i));
                return e = null, r
            }]; a < r; a++)
                if (n = T.relative[t[a].type]) c = [h(f(c), n)];
                else {
                    if ((n = T.filter[t[a].type].apply(null, t[a].matches))[B]) {
                        for (i = ++a; i < r && !T.relative[t[i].type]; i++);
                        return y(a > 1 && f(c), a > 1 && p(t.slice(0, a - 1).concat({
                            value: " " === t[a - 2].type ? "*" : ""
                        })).replace(at, "$1"), n, a < i && v(t.slice(a, i)), i < r && v(t = t.slice(i)), i < r && p(t))
                    }
                    c.push(n)
                }
            return f(c)
        }

        function b(t, n) {
            var r = n.length > 0,
                o = t.length > 0,
                s = function (i, s, a, l, u) {
                    var c, d, p, h = 0,
                        f = "0",
                        m = i && [],
                        y = [],
                        v = A,
                        b = i || o && T.find.TAG("*", u),
                        w = O += null == v ? 1 : Math.random() || .1,
                        x = b.length;
                    for (u && (A = s === j || s || u); f !== x && null != (c = b[f]); f++) {
                        if (o && c) {
                            for (d = 0, s || c.ownerDocument === j || (D(c), a = !R); p = t[d++];)
                                if (p(c, s || j, a)) {
                                    l.push(c);
                                    break
                                }
                            u && (O = w)
                        }
                        r && ((c = !p && c) && h--, i && m.push(c))
                    }
                    if (h += f, r && f !== h) {
                        for (d = 0; p = n[d++];) p(m, y, s, a);
                        if (i) {
                            if (h > 0)
                                for (; f--;) m[f] || y[f] || (y[f] = Y.call(l));
                            y = g(y)
                        }
                        J.apply(l, y), u && !i && y.length > 0 && h + n.length > 1 && e.uniqueSort(l)
                    }
                    return u && (O = w, A = v), m
                };
            return r ? i(s) : s
        }
        var w, x, T, C, k, E, S, L, A, N, $, D, j, P, R, q, H, F, I, B = "sizzle" + 1 * new Date,
            M = t.document,
            O = 0,
            W = 0,
            _ = n(),
            z = n(),
            U = n(),
            V = function (t, e) {
                return t === e && ($ = !0), 0
            },
            X = 1 << 31,
            Q = {}.hasOwnProperty,
            K = [],
            Y = K.pop,
            G = K.push,
            J = K.push,
            Z = K.slice,
            tt = function (t, e) {
                for (var n = 0, i = t.length; n < i; n++)
                    if (t[n] === e) return n;
                return -1
            },
            et = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",
            nt = "[\\x20\\t\\r\\n\\f]",
            it = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",
            rt = "\\[" + nt + "*(" + it + ")(?:" + nt + "*([*^$|!~]?=)" + nt + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + it + "))|)" + nt + "*\\]",
            ot = ":(" + it + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + rt + ")*)|.*)\\)|)",
            st = new RegExp(nt + "+", "g"),
            at = new RegExp("^" + nt + "+|((?:^|[^\\\\])(?:\\\\.)*)" + nt + "+$", "g"),
            lt = new RegExp("^" + nt + "*," + nt + "*"),
            ut = new RegExp("^" + nt + "*([>+~]|" + nt + ")" + nt + "*"),
            ct = new RegExp("=" + nt + "*([^\\]'\"]*?)" + nt + "*\\]", "g"),
            dt = new RegExp(ot),
            pt = new RegExp("^" + it + "$"),
            ht = {
                ID: new RegExp("^#(" + it + ")"),
                CLASS: new RegExp("^\\.(" + it + ")"),
                TAG: new RegExp("^(" + it + "|[*])"),
                ATTR: new RegExp("^" + rt),
                PSEUDO: new RegExp("^" + ot),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + nt + "*(even|odd|(([+-]|)(\\d*)n|)" + nt + "*(?:([+-]|)" + nt + "*(\\d+)|))" + nt + "*\\)|)", "i"),
                bool: new RegExp("^(?:" + et + ")$", "i"),
                needsContext: new RegExp("^" + nt + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + nt + "*((?:-\\d)?\\d*)" + nt + "*\\)|)(?=[^-]|$)", "i")
            },
            ft = /^(?:input|select|textarea|button)$/i,
            mt = /^h\d$/i,
            gt = /^[^{]+\{\s*\[native \w/,
            yt = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,
            vt = /[+~]/,
            bt = /'|\\/g,
            wt = new RegExp("\\\\([\\da-f]{1,6}" + nt + "?|(" + nt + ")|.)", "ig"),
            xt = function (t, e, n) {
                var i = "0x" + e - 65536;
                return i != i || n ? e : i < 0 ? String.fromCharCode(i + 65536) : String.fromCharCode(i >> 10 | 55296, 1023 & i | 56320)
            },
            Tt = function () {
                D()
            };
        try {
            J.apply(K = Z.call(M.childNodes), M.childNodes), K[M.childNodes.length].nodeType
        } catch (Ct) {
            J = {
                apply: K.length ? function (t, e) {
                    G.apply(t, Z.call(e))
                } : function (t, e) {
                    for (var n = t.length, i = 0; t[n++] = e[i++];);
                    t.length = n - 1
                }
            }
        }
        for (w in x = e.support = {}, k = e.isXML = function (t) {
            var e = t && (t.ownerDocument || t).documentElement;
            return !!e && "HTML" !== e.nodeName
        }, D = e.setDocument = function (t) {
            var e, n, i = t ? t.ownerDocument || t : M;
            return i !== j && 9 === i.nodeType && i.documentElement ? (P = (j = i).documentElement, R = !k(j), (n = j.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", Tt, !1) : n.attachEvent && n.attachEvent("onunload", Tt)), x.attributes = r(function (t) {
                return t.className = "i", !t.getAttribute("className")
            }), x.getElementsByTagName = r(function (t) {
                return t.appendChild(j.createComment("")), !t.getElementsByTagName("*").length
            }), x.getElementsByClassName = gt.test(j.getElementsByClassName), x.getById = r(function (t) {
                return P.appendChild(t).id = B, !j.getElementsByName || !j.getElementsByName(B).length
            }), x.getById ? (T.find.ID = function (t, e) {
                if ("undefined" != typeof e.getElementById && R) {
                    var n = e.getElementById(t);
                    return n ? [n] : []
                }
            }, T.filter.ID = function (t) {
                var e = t.replace(wt, xt);
                return function (t) {
                    return t.getAttribute("id") === e
                }
            }) : (delete T.find.ID, T.filter.ID = function (t) {
                var e = t.replace(wt, xt);
                return function (t) {
                    var n = "undefined" != typeof t.getAttributeNode && t.getAttributeNode("id");
                    return n && n.value === e
                }
            }), T.find.TAG = x.getElementsByTagName ? function (t, e) {
                return "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t) : x.qsa ? e.querySelectorAll(t) : void 0
            } : function (t, e) {
                var n, i = [],
                    r = 0,
                    o = e.getElementsByTagName(t);
                if ("*" === t) {
                    for (; n = o[r++];) 1 === n.nodeType && i.push(n);
                    return i
                }
                return o
            }, T.find.CLASS = x.getElementsByClassName && function (t, e) {
                if ("undefined" != typeof e.getElementsByClassName && R) return e.getElementsByClassName(t)
            }, H = [], q = [], (x.qsa = gt.test(j.querySelectorAll)) && (r(function (t) {
                P.appendChild(t).innerHTML = "<a id='" + B + "'></a><select id='" + B + "-\r\\' msallowcapture=''><option selected=''></option></select>", t.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + nt + "*(?:''|\"\")"), t.querySelectorAll("[selected]").length || q.push("\\[" + nt + "*(?:value|" + et + ")"), t.querySelectorAll("[id~=" + B + "-]").length || q.push("~="), t.querySelectorAll(":checked").length || q.push(":checked"), t.querySelectorAll("a#" + B + "+*").length || q.push(".#.+[+~]")
            }), r(function (t) {
                var e = j.createElement("input");
                e.setAttribute("type", "hidden"), t.appendChild(e).setAttribute("name", "D"), t.querySelectorAll("[name=d]").length && q.push("name" + nt + "*[*^$|!~]?="), t.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"), t.querySelectorAll("*,:x"), q.push(",.*:")
            })), (x.matchesSelector = gt.test(F = P.matches || P.webkitMatchesSelector || P.mozMatchesSelector || P.oMatchesSelector || P.msMatchesSelector)) && r(function (t) {
                x.disconnectedMatch = F.call(t, "div"), F.call(t, "[s!='']:x"), H.push("!=", ot)
            }), q = q.length && new RegExp(q.join("|")), H = H.length && new RegExp(H.join("|")), e = gt.test(P.compareDocumentPosition), I = e || gt.test(P.contains) ? function (t, e) {
                var n = 9 === t.nodeType ? t.documentElement : t,
                    i = e && e.parentNode;
                return t === i || !(!i || 1 !== i.nodeType || !(n.contains ? n.contains(i) : t.compareDocumentPosition && 16 & t.compareDocumentPosition(i)))
            } : function (t, e) {
                if (e)
                    for (; e = e.parentNode;)
                        if (e === t) return !0;
                return !1
            }, V = e ? function (t, e) {
                if (t === e) return $ = !0, 0;
                var n = !t.compareDocumentPosition - !e.compareDocumentPosition;
                return n || (1 & (n = (t.ownerDocument || t) === (e.ownerDocument || e) ? t.compareDocumentPosition(e) : 1) || !x.sortDetached && e.compareDocumentPosition(t) === n ? t === j || t.ownerDocument === M && I(M, t) ? -1 : e === j || e.ownerDocument === M && I(M, e) ? 1 : N ? tt(N, t) - tt(N, e) : 0 : 4 & n ? -1 : 1)
            } : function (t, e) {
                if (t === e) return $ = !0, 0;
                var n, i = 0,
                    r = t.parentNode,
                    o = e.parentNode,
                    a = [t],
                    l = [e];
                if (!r || !o) return t === j ? -1 : e === j ? 1 : r ? -1 : o ? 1 : N ? tt(N, t) - tt(N, e) : 0;
                if (r === o) return s(t, e);
                for (n = t; n = n.parentNode;) a.unshift(n);
                for (n = e; n = n.parentNode;) l.unshift(n);
                for (; a[i] === l[i];) i++;
                return i ? s(a[i], l[i]) : a[i] === M ? -1 : l[i] === M ? 1 : 0
            }, j) : j
        }, e.matches = function (t, n) {
            return e(t, null, null, n)
        }, e.matchesSelector = function (t, n) {
            if ((t.ownerDocument || t) !== j && D(t), n = n.replace(ct, "='$1']"), x.matchesSelector && R && !U[n + " "] && (!H || !H.test(n)) && (!q || !q.test(n))) try {
                var i = F.call(t, n);
                if (i || x.disconnectedMatch || t.document && 11 !== t.document.nodeType) return i
            } catch (Ct) { }
            return e(n, j, null, [t]).length > 0
        }, e.contains = function (t, e) {
            return (t.ownerDocument || t) !== j && D(t), I(t, e)
        }, e.attr = function (t, e) {
            (t.ownerDocument || t) !== j && D(t);
            var n = T.attrHandle[e.toLowerCase()],
                i = n && Q.call(T.attrHandle, e.toLowerCase()) ? n(t, e, !R) : undefined;
            return i !== undefined ? i : x.attributes || !R ? t.getAttribute(e) : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }, e.error = function (t) {
            throw new Error("Syntax error, unrecognized expression: " + t)
        }, e.uniqueSort = function (t) {
            var e, n = [],
                i = 0,
                r = 0;
            if ($ = !x.detectDuplicates, N = !x.sortStable && t.slice(0), t.sort(V), $) {
                for (; e = t[r++];) e === t[r] && (i = n.push(r));
                for (; i--;) t.splice(n[i], 1)
            }
            return N = null, t
        }, C = e.getText = function (t) {
            var e, n = "",
                i = 0,
                r = t.nodeType;
            if (r) {
                if (1 === r || 9 === r || 11 === r) {
                    if ("string" == typeof t.textContent) return t.textContent;
                    for (t = t.firstChild; t; t = t.nextSibling) n += C(t)
                } else if (3 === r || 4 === r) return t.nodeValue
            } else
                for (; e = t[i++];) n += C(e);
            return n
        }, (T = e.selectors = {
            cacheLength: 50,
            createPseudo: i,
            match: ht,
            attrHandle: {},
            find: {},
            relative: {
                ">": {
                    dir: "parentNode",
                    first: !0
                },
                " ": {
                    dir: "parentNode"
                },
                "+": {
                    dir: "previousSibling",
                    first: !0
                },
                "~": {
                    dir: "previousSibling"
                }
            },
            preFilter: {
                ATTR: function (t) {
                    return t[1] = t[1].replace(wt, xt), t[3] = (t[3] || t[4] || t[5] || "").replace(wt, xt), "~=" === t[2] && (t[3] = " " + t[3] + " "), t.slice(0, 4)
                },
                CHILD: function (t) {
                    return t[1] = t[1].toLowerCase(), "nth" === t[1].slice(0, 3) ? (t[3] || e.error(t[0]), t[4] = +(t[4] ? t[5] + (t[6] || 1) : 2 * ("even" === t[3] || "odd" === t[3])), t[5] = +(t[7] + t[8] || "odd" === t[3])) : t[3] && e.error(t[0]), t
                },
                PSEUDO: function (t) {
                    var e, n = !t[6] && t[2];
                    return ht.CHILD.test(t[0]) ? null : (t[3] ? t[2] = t[4] || t[5] || "" : n && dt.test(n) && (e = E(n, !0)) && (e = n.indexOf(")", n.length - e) - n.length) && (t[0] = t[0].slice(0, e), t[2] = n.slice(0, e)), t.slice(0, 3))
                }
            },
            filter: {
                TAG: function (t) {
                    var e = t.replace(wt, xt).toLowerCase();
                    return "*" === t ? function () {
                        return !0
                    } : function (t) {
                        return t.nodeName && t.nodeName.toLowerCase() === e
                    }
                },
                CLASS: function (t) {
                    var e = _[t + " "];
                    return e || (e = new RegExp("(^|" + nt + ")" + t + "(" + nt + "|$)")) && _(t, function (t) {
                        return e.test("string" == typeof t.className && t.className || "undefined" != typeof t.getAttribute && t.getAttribute("class") || "")
                    })
                },
                ATTR: function (t, n, i) {
                    return function (r) {
                        var o = e.attr(r, t);
                        return null == o ? "!=" === n : !n || (o += "", "=" === n ? o === i : "!=" === n ? o !== i : "^=" === n ? i && 0 === o.indexOf(i) : "*=" === n ? i && o.indexOf(i) > -1 : "$=" === n ? i && o.slice(-i.length) === i : "~=" === n ? (" " + o.replace(st, " ") + " ").indexOf(i) > -1 : "|=" === n && (o === i || o.slice(0, i.length + 1) === i + "-"))
                    }
                },
                CHILD: function (t, e, n, i, r) {
                    var o = "nth" !== t.slice(0, 3),
                        s = "last" !== t.slice(-4),
                        a = "of-type" === e;
                    return 1 === i && 0 === r ? function (t) {
                        return !!t.parentNode
                    } : function (e, n, l) {
                        var u, c, d, p, h, f, m = o !== s ? "nextSibling" : "previousSibling",
                            g = e.parentNode,
                            y = a && e.nodeName.toLowerCase(),
                            v = !l && !a,
                            b = !1;
                        if (g) {
                            if (o) {
                                for (; m;) {
                                    for (p = e; p = p[m];)
                                        if (a ? p.nodeName.toLowerCase() === y : 1 === p.nodeType) return !1;
                                    f = m = "only" === t && !f && "nextSibling"
                                }
                                return !0
                            }
                            if (f = [s ? g.firstChild : g.lastChild], s && v) {
                                for (b = (h = (u = (c = (d = (p = g)[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === O && u[1]) && u[2], p = h && g.childNodes[h]; p = ++h && p && p[m] || (b = h = 0) || f.pop();)
                                    if (1 === p.nodeType && ++b && p === e) {
                                        c[t] = [O, h, b];
                                        break
                                    }
                            } else if (v && (b = h = (u = (c = (d = (p = e)[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] || [])[0] === O && u[1]), !1 === b)
                                for (;
                                    (p = ++h && p && p[m] || (b = h = 0) || f.pop()) && ((a ? p.nodeName.toLowerCase() !== y : 1 !== p.nodeType) || !++b || (v && ((c = (d = p[B] || (p[B] = {}))[p.uniqueID] || (d[p.uniqueID] = {}))[t] = [O, b]), p !== e)););
                            return (b -= r) === i || b % i == 0 && b / i >= 0
                        }
                    }
                },
                PSEUDO: function (t, n) {
                    var r, o = T.pseudos[t] || T.setFilters[t.toLowerCase()] || e.error("unsupported pseudo: " + t);
                    return o[B] ? o(n) : o.length > 1 ? (r = [t, t, "", n], T.setFilters.hasOwnProperty(t.toLowerCase()) ? i(function (t, e) {
                        for (var i, r = o(t, n), s = r.length; s--;) t[i = tt(t, r[s])] = !(e[i] = r[s])
                    }) : function (t) {
                        return o(t, 0, r)
                    }) : o
                }
            },
            pseudos: {
                not: i(function (t) {
                    var e = [],
                        n = [],
                        r = S(t.replace(at, "$1"));
                    return r[B] ? i(function (t, e, n, i) {
                        for (var o, s = r(t, null, i, []), a = t.length; a--;)(o = s[a]) && (t[a] = !(e[a] = o))
                    }) : function (t, i, o) {
                        return e[0] = t, r(e, null, o, n), e[0] = null, !n.pop()
                    }
                }),
                has: i(function (t) {
                    return function (n) {
                        return e(t, n).length > 0
                    }
                }),
                contains: i(function (t) {
                    return t = t.replace(wt, xt),
                        function (e) {
                            return (e.textContent || e.innerText || C(e)).indexOf(t) > -1
                        }
                }),
                lang: i(function (t) {
                    return pt.test(t || "") || e.error("unsupported lang: " + t), t = t.replace(wt, xt).toLowerCase(),
                        function (e) {
                            var n;
                            do {
                                if (n = R ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang")) return (n = n.toLowerCase()) === t || 0 === n.indexOf(t + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                }),
                target: function (e) {
                    var n = t.location && t.location.hash;
                    return n && n.slice(1) === e.id
                },
                root: function (t) {
                    return t === P
                },
                focus: function (t) {
                    return t === j.activeElement && (!j.hasFocus || j.hasFocus()) && !!(t.type || t.href || ~t.tabIndex)
                },
                enabled: function (t) {
                    return !1 === t.disabled
                },
                disabled: function (t) {
                    return !0 === t.disabled
                },
                checked: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && !!t.checked || "option" === e && !!t.selected
                },
                selected: function (t) {
                    return t.parentNode && t.parentNode.selectedIndex, !0 === t.selected
                },
                empty: function (t) {
                    for (t = t.firstChild; t; t = t.nextSibling)
                        if (t.nodeType < 6) return !1;
                    return !0
                },
                parent: function (t) {
                    return !T.pseudos.empty(t)
                },
                header: function (t) {
                    return mt.test(t.nodeName)
                },
                input: function (t) {
                    return ft.test(t.nodeName)
                },
                button: function (t) {
                    var e = t.nodeName.toLowerCase();
                    return "input" === e && "button" === t.type || "button" === e
                },
                text: function (t) {
                    var e;
                    return "input" === t.nodeName.toLowerCase() && "text" === t.type && (null == (e = t.getAttribute("type")) || "text" === e.toLowerCase())
                },
                first: u(function () {
                    return [0]
                }),
                last: u(function (t, e) {
                    return [e - 1]
                }),
                eq: u(function (t, e, n) {
                    return [n < 0 ? n + e : n]
                }),
                even: u(function (t, e) {
                    for (var n = 0; n < e; n += 2) t.push(n);
                    return t
                }),
                odd: u(function (t, e) {
                    for (var n = 1; n < e; n += 2) t.push(n);
                    return t
                }),
                lt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; --i >= 0;) t.push(i);
                    return t
                }),
                gt: u(function (t, e, n) {
                    for (var i = n < 0 ? n + e : n; ++i < e;) t.push(i);
                    return t
                })
            }
        }).pseudos.nth = T.pseudos.eq, {
            radio: !0,
            checkbox: !0,
            file: !0,
            password: !0,
            image: !0
        }) T.pseudos[w] = a(w);
        for (w in {
            submit: !0,
            reset: !0
        }) T.pseudos[w] = l(w);
        return d.prototype = T.filters = T.pseudos, T.setFilters = new d, E = e.tokenize = function (t, n) {
            var i, r, o, s, a, l, u, c = z[t + " "];
            if (c) return n ? 0 : c.slice(0);
            for (a = t, l = [], u = T.preFilter; a;) {
                for (s in i && !(r = lt.exec(a)) || (r && (a = a.slice(r[0].length) || a), l.push(o = [])), i = !1, (r = ut.exec(a)) && (i = r.shift(), o.push({
                    value: i,
                    type: r[0].replace(at, " ")
                }), a = a.slice(i.length)), T.filter) !(r = ht[s].exec(a)) || u[s] && !(r = u[s](r)) || (i = r.shift(), o.push({
                    value: i,
                    type: s,
                    matches: r
                }), a = a.slice(i.length));
                if (!i) break
            }
            return n ? a.length : a ? e.error(t) : z(t, l).slice(0)
        }, S = e.compile = function (t, e) {
            var n, i = [],
                r = [],
                o = U[t + " "];
            if (!o) {
                for (e || (e = E(t)), n = e.length; n--;)(o = v(e[n]))[B] ? i.push(o) : r.push(o);
                (o = U(t, b(r, i))).selector = t
            }
            return o
        }, L = e.select = function (t, e, n, i) {
            var r, o, s, a, l, u = "function" == typeof t && t,
                d = !i && E(t = u.selector || t);
            if (n = n || [], 1 === d.length) {
                if ((o = d[0] = d[0].slice(0)).length > 2 && "ID" === (s = o[0]).type && x.getById && 9 === e.nodeType && R && T.relative[o[1].type]) {
                    if (!(e = (T.find.ID(s.matches[0].replace(wt, xt), e) || [])[0])) return n;
                    u && (e = e.parentNode), t = t.slice(o.shift().value.length)
                }
                for (r = ht.needsContext.test(t) ? 0 : o.length; r-- && (s = o[r], !T.relative[a = s.type]);)
                    if ((l = T.find[a]) && (i = l(s.matches[0].replace(wt, xt), vt.test(o[0].type) && c(e.parentNode) || e))) {
                        if (o.splice(r, 1), !(t = i.length && p(o))) return J.apply(n, i), n;
                        break
                    }
            }
            return (u || S(t, d))(i, e, !R, n, !e || vt.test(t) && c(e.parentNode) || e), n
        }, x.sortStable = B.split("").sort(V).join("") === B, x.detectDuplicates = !!$, D(), x.sortDetached = r(function (t) {
            return 1 & t.compareDocumentPosition(j.createElement("div"))
        }), r(function (t) {
            return t.innerHTML = "<a href='#'></a>", "#" === t.firstChild.getAttribute("href")
        }) || o("type|href|height|width", function (t, e, n) {
            if (!n) return t.getAttribute(e, "type" === e.toLowerCase() ? 1 : 2)
        }), x.attributes && r(function (t) {
            return t.innerHTML = "<input/>", t.firstChild.setAttribute("value", ""), "" === t.firstChild.getAttribute("value")
        }) || o("value", function (t, e, n) {
            if (!n && "input" === t.nodeName.toLowerCase()) return t.defaultValue
        }), r(function (t) {
            return null == t.getAttribute("disabled")
        }) || o(et, function (t, e, n) {
            var i;
            if (!n) return !0 === t[e] ? e.toLowerCase() : (i = t.getAttributeNode(e)) && i.specified ? i.value : null
        }), e
    }(t);
    ht.find = vt, ht.expr = vt.selectors, ht.expr[":"] = ht.expr.pseudos, ht.uniqueSort = ht.unique = vt.uniqueSort, ht.text = vt.getText, ht.isXMLDoc = vt.isXML, ht.contains = vt.contains;
    var bt = function (t, e, n) {
        for (var i = [], r = n !== undefined;
            (t = t[e]) && 9 !== t.nodeType;)
            if (1 === t.nodeType) {
                if (r && ht(t).is(n)) break;
                i.push(t)
            }
        return i
    },
        wt = function (t, e) {
            for (var n = []; t; t = t.nextSibling) 1 === t.nodeType && t !== e && n.push(t);
            return n
        },
        xt = ht.expr.match.needsContext,
        Tt = /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,
        Ct = /^.[^:#\[\.,]*$/;
    ht.filter = function (t, e, n) {
        var i = e[0];
        return n && (t = ":not(" + t + ")"), 1 === e.length && 1 === i.nodeType ? ht.find.matchesSelector(i, t) ? [i] : [] : ht.find.matches(t, ht.grep(e, function (t) {
            return 1 === t.nodeType
        }))
    }, ht.fn.extend({
        find: function (t) {
            var e, n = [],
                i = this,
                r = i.length;
            if ("string" != typeof t) return this.pushStack(ht(t).filter(function () {
                for (e = 0; e < r; e++)
                    if (ht.contains(i[e], this)) return !0
            }));
            for (e = 0; e < r; e++) ht.find(t, i[e], n);
            return (n = this.pushStack(r > 1 ? ht.unique(n) : n)).selector = this.selector ? this.selector + " " + t : t, n
        },
        filter: function (t) {
            return this.pushStack(i(this, t || [], !1))
        },
        not: function (t) {
            return this.pushStack(i(this, t || [], !0))
        },
        is: function (t) {
            return !!i(this, "string" == typeof t && xt.test(t) ? ht(t) : t || [], !1).length
        }
    });
    var kt, Et = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/;
    (ht.fn.init = function (t, e, n) {
        var i, r;
        if (!t) return this;
        if (n = n || kt, "string" == typeof t) {
            if (!(i = "<" === t.charAt(0) && ">" === t.charAt(t.length - 1) && t.length >= 3 ? [null, t, null] : Et.exec(t)) || !i[1] && e) return !e || e.jquery ? (e || n).find(t) : this.constructor(e).find(t);
            if (i[1]) {
                if (e = e instanceof ht ? e[0] : e, ht.merge(this, ht.parseHTML(i[1], e && e.nodeType ? e.ownerDocument || e : it, !0)), Tt.test(i[1]) && ht.isPlainObject(e))
                    for (i in e) ht.isFunction(this[i]) ? this[i](e[i]) : this.attr(i, e[i]);
                return this
            }
            if ((r = it.getElementById(i[2])) && r.parentNode) {
                if (r.id !== i[2]) return kt.find(t);
                this.length = 1, this[0] = r
            }
            return this.context = it, this.selector = t, this
        }
        return t.nodeType ? (this.context = this[0] = t, this.length = 1, this) : ht.isFunction(t) ? "undefined" != typeof n.ready ? n.ready(t) : t(ht) : (t.selector !== undefined && (this.selector = t.selector, this.context = t.context), ht.makeArray(t, this))
    }).prototype = ht.fn, kt = ht(it);
    var St = /^(?:parents|prev(?:Until|All))/,
        Lt = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
    ht.fn.extend({
        has: function (t) {
            var e, n = ht(t, this),
                i = n.length;
            return this.filter(function () {
                for (e = 0; e < i; e++)
                    if (ht.contains(this, n[e])) return !0
            })
        },
        closest: function (t, e) {
            for (var n, i = 0, r = this.length, o = [], s = xt.test(t) || "string" != typeof t ? ht(t, e || this.context) : 0; i < r; i++)
                for (n = this[i]; n && n !== e; n = n.parentNode)
                    if (n.nodeType < 11 && (s ? s.index(n) > -1 : 1 === n.nodeType && ht.find.matchesSelector(n, t))) {
                        o.push(n);
                        break
                    }
            return this.pushStack(o.length > 1 ? ht.uniqueSort(o) : o)
        },
        index: function (t) {
            return t ? "string" == typeof t ? ht.inArray(this[0], ht(t)) : ht.inArray(t.jquery ? t[0] : t, this) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
        },
        add: function (t, e) {
            return this.pushStack(ht.uniqueSort(ht.merge(this.get(), ht(t, e))))
        },
        addBack: function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }
    }), ht.each({
        parent: function (t) {
            var e = t.parentNode;
            return e && 11 !== e.nodeType ? e : null
        },
        parents: function (t) {
            return bt(t, "parentNode")
        },
        parentsUntil: function (t, e, n) {
            return bt(t, "parentNode", n)
        },
        next: function (t) {
            return r(t, "nextSibling")
        },
        prev: function (t) {
            return r(t, "previousSibling")
        },
        nextAll: function (t) {
            return bt(t, "nextSibling")
        },
        prevAll: function (t) {
            return bt(t, "previousSibling")
        },
        nextUntil: function (t, e, n) {
            return bt(t, "nextSibling", n)
        },
        prevUntil: function (t, e, n) {
            return bt(t, "previousSibling", n)
        },
        siblings: function (t) {
            return wt((t.parentNode || {}).firstChild, t)
        },
        children: function (t) {
            return wt(t.firstChild)
        },
        contents: function (t) {
            return ht.nodeName(t, "iframe") ? t.contentDocument || t.contentWindow.document : ht.merge([], t.childNodes)
        }
    }, function (t, e) {
        ht.fn[t] = function (n, i) {
            var r = ht.map(this, e, n);
            return "Until" !== t.slice(-5) && (i = n), i && "string" == typeof i && (r = ht.filter(i, r)), this.length > 1 && (Lt[t] || (r = ht.uniqueSort(r)), St.test(t) && (r = r.reverse())), this.pushStack(r)
        }
    });
    var At, Nt, $t = /\S+/g;
    for (Nt in ht.Callbacks = function (t) {
        t = "string" == typeof t ? o(t) : ht.extend({}, t);
        var e, n, i, r, s = [],
            a = [],
            l = -1,
            u = function () {
                for (r = t.once, i = e = !0; a.length; l = -1)
                    for (n = a.shift(); ++l < s.length;) !1 === s[l].apply(n[0], n[1]) && t.stopOnFalse && (l = s.length, n = !1);
                t.memory || (n = !1), e = !1, r && (s = n ? [] : "")
            },
            c = {
                add: function () {
                    return s && (n && !e && (l = s.length - 1, a.push(n)), function i(e) {
                        ht.each(e, function (e, n) {
                            ht.isFunction(n) ? t.unique && c.has(n) || s.push(n) : n && n.length && "string" !== ht.type(n) && i(n)
                        })
                    }(arguments), n && !e && u()), this
                },
                remove: function () {
                    return ht.each(arguments, function (t, e) {
                        for (var n;
                            (n = ht.inArray(e, s, n)) > -1;) s.splice(n, 1), n <= l && l--
                    }), this
                },
                has: function (t) {
                    return t ? ht.inArray(t, s) > -1 : s.length > 0
                },
                empty: function () {
                    return s && (s = []), this
                },
                disable: function () {
                    return r = a = [], s = n = "", this
                },
                disabled: function () {
                    return !s
                },
                lock: function () {
                    return r = !0, n || c.disable(), this
                },
                locked: function () {
                    return !!r
                },
                fireWith: function (t, n) {
                    return r || (n = [t, (n = n || []).slice ? n.slice() : n], a.push(n), e || u()), this
                },
                fire: function () {
                    return c.fireWith(this, arguments), this
                },
                fired: function () {
                    return !!i
                }
            };
        return c
    }, ht.extend({
        Deferred: function (t) {
            var e = [
                ["resolve", "done", ht.Callbacks("once memory"), "resolved"],
                ["reject", "fail", ht.Callbacks("once memory"), "rejected"],
                ["notify", "progress", ht.Callbacks("memory")]
            ],
                n = "pending",
                i = {
                    state: function () {
                        return n
                    },
                    always: function () {
                        return r.done(arguments).fail(arguments), this
                    },
                    then: function () {
                        var t = arguments;
                        return ht.Deferred(function (n) {
                            ht.each(e, function (e, o) {
                                var s = ht.isFunction(t[e]) && t[e];
                                r[o[1]](function () {
                                    var t = s && s.apply(this, arguments);
                                    t && ht.isFunction(t.promise) ? t.promise().progress(n.notify).done(n.resolve).fail(n.reject) : n[o[0] + "With"](this === i ? n.promise() : this, s ? [t] : arguments)
                                })
                            }), t = null
                        }).promise()
                    },
                    promise: function (t) {
                        return null != t ? ht.extend(t, i) : i
                    }
                },
                r = {};
            return i.pipe = i.then, ht.each(e, function (t, o) {
                var s = o[2],
                    a = o[3];
                i[o[1]] = s.add, a && s.add(function () {
                    n = a
                }, e[1 ^ t][2].disable, e[2][2].lock), r[o[0]] = function () {
                    return r[o[0] + "With"](this === r ? i : this, arguments), this
                }, r[o[0] + "With"] = s.fireWith
            }), i.promise(r), t && t.call(r, r), r
        },
        when: function (t) {
            var e, n, i, r = 0,
                o = rt.call(arguments),
                s = o.length,
                a = 1 !== s || t && ht.isFunction(t.promise) ? s : 0,
                l = 1 === a ? t : ht.Deferred(),
                u = function (t, n, i) {
                    return function (r) {
                        n[t] = this, i[t] = arguments.length > 1 ? rt.call(arguments) : r, i === e ? l.notifyWith(n, i) : --a || l.resolveWith(n, i)
                    }
                };
            if (s > 1)
                for (e = new Array(s), n = new Array(s), i = new Array(s); r < s; r++) o[r] && ht.isFunction(o[r].promise) ? o[r].promise().progress(u(r, n, e)).done(u(r, i, o)).fail(l.reject) : --a;
            return a || l.resolveWith(i, o), l.promise()
        }
    }), ht.fn.ready = function (t) {
        return ht.ready.promise().done(t), this
    }, ht.extend({
        isReady: !1,
        readyWait: 1,
        holdReady: function (t) {
            t ? ht.readyWait++ : ht.ready(!0)
        },
        ready: function (t) {
            (!0 === t ? --ht.readyWait : ht.isReady) || (ht.isReady = !0, !0 !== t && --ht.readyWait > 0 || (At.resolveWith(it, [ht]), ht.fn.triggerHandler && (ht(it).triggerHandler("ready"), ht(it).off("ready"))))
        }
    }), ht.ready.promise = function (e) {
        if (!At)
            if (At = ht.Deferred(), "complete" === it.readyState || "loading" !== it.readyState && !it.documentElement.doScroll) t.setTimeout(ht.ready);
            else if (it.addEventListener) it.addEventListener("DOMContentLoaded", a), t.addEventListener("load", a);
            else {
                it.attachEvent("onreadystatechange", a), t.attachEvent("onload", a);
                var n = !1;
                try {
                    n = null == t.frameElement && it.documentElement
                } catch (i) { }
                n && n.doScroll && function r() {
                    if (!ht.isReady) {
                        try {
                            n.doScroll("left")
                        } catch (i) {
                            return t.setTimeout(r, 50)
                        }
                        s(), ht.ready()
                    }
                }()
            }
        return At.promise(e)
    }, ht.ready.promise(), ht(dt)) break;
    dt.ownFirst = "0" === Nt, dt.inlineBlockNeedsLayout = !1, ht(function () {
        var t, e, n, i;
        (n = it.getElementsByTagName("body")[0]) && n.style && (e = it.createElement("div"), (i = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", n.appendChild(i).appendChild(e), "undefined" != typeof e.style.zoom && (e.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1", dt.inlineBlockNeedsLayout = t = 3 === e.offsetWidth, t && (n.style.zoom = 1)), n.removeChild(i))
    }),
        function () {
            var t = it.createElement("div");
            dt.deleteExpando = !0;
            try {
                delete t.test
            } catch (e) {
                dt.deleteExpando = !1
            }
            t = null
        }();
    var Dt, jt = function (t) {
        var e = ht.noData[(t.nodeName + " ").toLowerCase()],
            n = +t.nodeType || 1;
        return (1 === n || 9 === n) && (!e || !0 !== e && t.getAttribute("classid") === e)
    },
        Pt = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
        Rt = /([A-Z])/g;
    ht.extend({
        cache: {},
        noData: {
            "applet ": !0,
            "embed ": !0,
            "object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
        },
        hasData: function (t) {
            return !!(t = t.nodeType ? ht.cache[t[ht.expando]] : t[ht.expando]) && !u(t)
        },
        data: function (t, e, n) {
            return c(t, e, n)
        },
        removeData: function (t, e) {
            return d(t, e)
        },
        _data: function (t, e, n) {
            return c(t, e, n, !0)
        },
        _removeData: function (t, e) {
            return d(t, e, !0)
        }
    }), ht.fn.extend({
        data: function (t, e) {
            var n, i, r, o = this[0],
                s = o && o.attributes;
            if (t === undefined) {
                if (this.length && (r = ht.data(o), 1 === o.nodeType && !ht._data(o, "parsedAttrs"))) {
                    for (n = s.length; n--;) s[n] && 0 === (i = s[n].name).indexOf("data-") && l(o, i = ht.camelCase(i.slice(5)), r[i]);
                    ht._data(o, "parsedAttrs", !0)
                }
                return r
            }
            return "object" == typeof t ? this.each(function () {
                ht.data(this, t)
            }) : arguments.length > 1 ? this.each(function () {
                ht.data(this, t, e)
            }) : o ? l(o, t, ht.data(o, t)) : undefined
        },
        removeData: function (t) {
            return this.each(function () {
                ht.removeData(this, t)
            })
        }
    }), ht.extend({
        queue: function (t, e, n) {
            var i;
            if (t) return e = (e || "fx") + "queue", i = ht._data(t, e), n && (!i || ht.isArray(n) ? i = ht._data(t, e, ht.makeArray(n)) : i.push(n)), i || []
        },
        dequeue: function (t, e) {
            e = e || "fx";
            var n = ht.queue(t, e),
                i = n.length,
                r = n.shift(),
                o = ht._queueHooks(t, e),
                s = function () {
                    ht.dequeue(t, e)
                };
            "inprogress" === r && (r = n.shift(), i--), r && ("fx" === e && n.unshift("inprogress"), delete o.stop, r.call(t, s, o)), !i && o && o.empty.fire()
        },
        _queueHooks: function (t, e) {
            var n = e + "queueHooks";
            return ht._data(t, n) || ht._data(t, n, {
                empty: ht.Callbacks("once memory").add(function () {
                    ht._removeData(t, e + "queue"), ht._removeData(t, n)
                })
            })
        }
    }), ht.fn.extend({
        queue: function (t, e) {
            var n = 2;
            return "string" != typeof t && (e = t, t = "fx", n--), arguments.length < n ? ht.queue(this[0], t) : e === undefined ? this : this.each(function () {
                var n = ht.queue(this, t, e);
                ht._queueHooks(this, t), "fx" === t && "inprogress" !== n[0] && ht.dequeue(this, t)
            })
        },
        dequeue: function (t) {
            return this.each(function () {
                ht.dequeue(this, t)
            })
        },
        clearQueue: function (t) {
            return this.queue(t || "fx", [])
        },
        promise: function (t, e) {
            var n, i = 1,
                r = ht.Deferred(),
                o = this,
                s = this.length,
                a = function () {
                    --i || r.resolveWith(o, [o])
                };
            for ("string" != typeof t && (e = t, t = undefined), t = t || "fx"; s--;)(n = ht._data(o[s], t + "queueHooks")) && n.empty && (i++, n.empty.add(a));
            return a(), r.promise(e)
        }
    }), dt.shrinkWrapBlocks = function () {
        return null != Dt ? Dt : (Dt = !1, (e = it.getElementsByTagName("body")[0]) && e.style ? (t = it.createElement("div"), (n = it.createElement("div")).style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px", e.appendChild(n).appendChild(t), "undefined" != typeof t.style.zoom && (t.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:1px;width:1px;zoom:1", t.appendChild(it.createElement("div")).style.width = "5px", Dt = 3 !== t.offsetWidth), e.removeChild(n), Dt) : void 0);
        var t, e, n
    };
    var qt, Ht, Ft, It = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,
        Bt = new RegExp("^(?:([+-])=|)(" + It + ")([a-z%]*)$", "i"),
        Mt = ["Top", "Right", "Bottom", "Left"],
        Ot = function (t, e) {
            return t = e || t, "none" === ht.css(t, "display") || !ht.contains(t.ownerDocument, t)
        },
        Wt = function (t, e, n, i, r, o, s) {
            var a = 0,
                l = t.length,
                u = null == n;
            if ("object" === ht.type(n))
                for (a in r = !0, n) Wt(t, e, a, n[a], !0, o, s);
            else if (i !== undefined && (r = !0, ht.isFunction(i) || (s = !0), u && (s ? (e.call(t, i), e = null) : (u = e, e = function (t, e, n) {
                return u.call(ht(t), n)
            })), e))
                for (; a < l; a++) e(t[a], n, s ? i : i.call(t[a], a, e(t[a], n)));
            return r ? t : u ? e.call(t) : l ? e(t[0], n) : o
        },
        _t = /^(?:checkbox|radio)$/i,
        zt = /<([\w:-]+)/,
        Ut = /^$|\/(?:java|ecma)script/i,
        Vt = /^\s+/,
        Xt = "abbr|article|aside|audio|bdi|canvas|data|datalist|details|dialog|figcaption|figure|footer|header|hgroup|main|mark|meter|nav|output|picture|progress|section|summary|template|time|video";
    qt = it.createElement("div"), Ht = it.createDocumentFragment(), Ft = it.createElement("input"), qt.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", dt.leadingWhitespace = 3 === qt.firstChild.nodeType, dt.tbody = !qt.getElementsByTagName("tbody").length, dt.htmlSerialize = !!qt.getElementsByTagName("link").length, dt.html5Clone = "<:nav></:nav>" !== it.createElement("nav").cloneNode(!0).outerHTML, Ft.type = "checkbox", Ft.checked = !0, Ht.appendChild(Ft), dt.appendChecked = Ft.checked, qt.innerHTML = "<textarea>x</textarea>", dt.noCloneChecked = !!qt.cloneNode(!0).lastChild.defaultValue, Ht.appendChild(qt), (Ft = it.createElement("input")).setAttribute("type", "radio"), Ft.setAttribute("checked", "checked"), Ft.setAttribute("name", "t"), qt.appendChild(Ft), dt.checkClone = qt.cloneNode(!0).cloneNode(!0).lastChild.checked, dt.noCloneEvent = !!qt.addEventListener, qt[ht.expando] = 1, dt.attributes = !qt.getAttribute(ht.expando);
    var Qt = {
        option: [1, "<select multiple='multiple'>", "</select>"],
        legend: [1, "<fieldset>", "</fieldset>"],
        area: [1, "<map>", "</map>"],
        param: [1, "<object>", "</object>"],
        thead: [1, "<table>", "</table>"],
        tr: [2, "<table><tbody>", "</tbody></table>"],
        col: [2, "<table><tbody></tbody><colgroup>", "</colgroup></table>"],
        td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
        _default: dt.htmlSerialize ? [0, "", ""] : [1, "X<div>", "</div>"]
    };
    Qt.optgroup = Qt.option, Qt.tbody = Qt.tfoot = Qt.colgroup = Qt.caption = Qt.thead, Qt.th = Qt.td;
    var Kt = /<|&#?\w+;/,
        Yt = /<tbody/i;
    ! function () {
        var e, n, i = it.createElement("div");
        for (e in {
            submit: !0,
            change: !0,
            focusin: !0
        }) n = "on" + e, (dt[e] = n in t) || (i.setAttribute(n, "t"), dt[e] = !1 === i.attributes[n].expando);
        i = null
    }();
    var Gt = /^(?:input|select|textarea)$/i,
        Jt = /^key/,
        Zt = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        te = /^(?:focusinfocus|focusoutblur)$/,
        ee = /^([^.]*)(?:\.(.+)|)/;
    ht.event = {
        global: {},
        add: function (t, e, n, i, r) {
            var o, s, a, l, u, c, d, p, h, f, m, g = ht._data(t);
            if (g) {
                for (n.handler && (n = (l = n).handler, r = l.selector), n.guid || (n.guid = ht.guid++), (s = g.events) || (s = g.events = {}), (c = g.handle) || ((c = g.handle = function (t) {
                    return void 0 === ht || t && ht.event.triggered === t.type ? undefined : ht.event.dispatch.apply(c.elem, arguments)
                }).elem = t), a = (e = (e || "").match($t) || [""]).length; a--;) h = m = (o = ee.exec(e[a]) || [])[1], f = (o[2] || "").split(".").sort(), h && (u = ht.event.special[h] || {}, h = (r ? u.delegateType : u.bindType) || h, u = ht.event.special[h] || {}, d = ht.extend({
                    type: h,
                    origType: m,
                    data: i,
                    handler: n,
                    guid: n.guid,
                    selector: r,
                    needsContext: r && ht.expr.match.needsContext.test(r),
                    namespace: f.join(".")
                }, l), (p = s[h]) || ((p = s[h] = []).delegateCount = 0, u.setup && !1 !== u.setup.call(t, i, f, c) || (t.addEventListener ? t.addEventListener(h, c, !1) : t.attachEvent && t.attachEvent("on" + h, c))), u.add && (u.add.call(t, d), d.handler.guid || (d.handler.guid = n.guid)), r ? p.splice(p.delegateCount++, 0, d) : p.push(d), ht.event.global[h] = !0);
                t = null
            }
        },
        remove: function (t, e, n, i, r) {
            var o, s, a, l, u, c, d, p, h, f, m, g = ht.hasData(t) && ht._data(t);
            if (g && (c = g.events)) {
                for (u = (e = (e || "").match($t) || [""]).length; u--;)
                    if (h = m = (a = ee.exec(e[u]) || [])[1], f = (a[2] || "").split(".").sort(), h) {
                        for (d = ht.event.special[h] || {}, p = c[h = (i ? d.delegateType : d.bindType) || h] || [], a = a[2] && new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)"), l = o = p.length; o--;) s = p[o], !r && m !== s.origType || n && n.guid !== s.guid || a && !a.test(s.namespace) || i && i !== s.selector && ("**" !== i || !s.selector) || (p.splice(o, 1), s.selector && p.delegateCount--, d.remove && d.remove.call(t, s));
                        l && !p.length && (d.teardown && !1 !== d.teardown.call(t, f, g.handle) || ht.removeEvent(t, h, g.handle), delete c[h])
                    } else
                        for (h in c) ht.event.remove(t, h + e[u], n, i, !0);
                ht.isEmptyObject(c) && (delete g.handle, ht._removeData(t, "events"))
            }
        },
        trigger: function (e, n, i, r) {
            var o, s, a, l, u, c, d, p = [i || it],
                h = ct.call(e, "type") ? e.type : e,
                f = ct.call(e, "namespace") ? e.namespace.split(".") : [];
            if (a = c = i = i || it, 3 !== i.nodeType && 8 !== i.nodeType && !te.test(h + ht.event.triggered) && (h.indexOf(".") > -1 && (h = (f = h.split(".")).shift(), f.sort()), s = h.indexOf(":") < 0 && "on" + h, (e = e[ht.expando] ? e : new ht.Event(h, "object" == typeof e && e)).isTrigger = r ? 2 : 3, e.namespace = f.join("."), e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + f.join("\\.(?:.*\\.|)") + "(\\.|$)") : null, e.result = undefined, e.target || (e.target = i), n = null == n ? [e] : ht.makeArray(n, [e]), u = ht.event.special[h] || {}, r || !u.trigger || !1 !== u.trigger.apply(i, n))) {
                if (!r && !u.noBubble && !ht.isWindow(i)) {
                    for (l = u.delegateType || h, te.test(l + h) || (a = a.parentNode); a; a = a.parentNode) p.push(a), c = a;
                    c === (i.ownerDocument || it) && p.push(c.defaultView || c.parentWindow || t)
                }
                for (d = 0;
                    (a = p[d++]) && !e.isPropagationStopped();) e.type = d > 1 ? l : u.bindType || h, (o = (ht._data(a, "events") || {})[e.type] && ht._data(a, "handle")) && o.apply(a, n), (o = s && a[s]) && o.apply && jt(a) && (e.result = o.apply(a, n), !1 === e.result && e.preventDefault());
                if (e.type = h, !r && !e.isDefaultPrevented() && (!u._default || !1 === u._default.apply(p.pop(), n)) && jt(i) && s && i[h] && !ht.isWindow(i)) {
                    (c = i[s]) && (i[s] = null), ht.event.triggered = h;
                    try {
                        i[h]()
                    } catch (m) { }
                    ht.event.triggered = undefined, c && (i[s] = c)
                }
                return e.result
            }
        },
        dispatch: function (t) {
            t = ht.event.fix(t);
            var e, n, i, r, o, s = [],
                a = rt.call(arguments),
                l = (ht._data(this, "events") || {})[t.type] || [],
                u = ht.event.special[t.type] || {};
            if (a[0] = t, t.delegateTarget = this, !u.preDispatch || !1 !== u.preDispatch.call(this, t)) {
                for (s = ht.event.handlers.call(this, t, l), e = 0;
                    (r = s[e++]) && !t.isPropagationStopped();)
                    for (t.currentTarget = r.elem, n = 0;
                        (o = r.handlers[n++]) && !t.isImmediatePropagationStopped();) t.rnamespace && !t.rnamespace.test(o.namespace) || (t.handleObj = o, t.data = o.data, (i = ((ht.event.special[o.origType] || {}).handle || o.handler).apply(r.elem, a)) !== undefined && !1 === (t.result = i) && (t.preventDefault(), t.stopPropagation()));
                return u.postDispatch && u.postDispatch.call(this, t), t.result
            }
        },
        handlers: function (t, e) {
            var n, i, r, o, s = [],
                a = e.delegateCount,
                l = t.target;
            if (a && l.nodeType && ("click" !== t.type || isNaN(t.button) || t.button < 1))
                for (; l != this; l = l.parentNode || this)
                    if (1 === l.nodeType && (!0 !== l.disabled || "click" !== t.type)) {
                        for (i = [], n = 0; n < a; n++) i[r = (o = e[n]).selector + " "] === undefined && (i[r] = o.needsContext ? ht(r, this).index(l) > -1 : ht.find(r, this, null, [l]).length), i[r] && i.push(o);
                        i.length && s.push({
                            elem: l,
                            handlers: i
                        })
                    }
            return a < e.length && s.push({
                elem: this,
                handlers: e.slice(a)
            }), s
        },
        fix: function (t) {
            if (t[ht.expando]) return t;
            var e, n, i, r = t.type,
                o = t,
                s = this.fixHooks[r];
            for (s || (this.fixHooks[r] = s = Zt.test(r) ? this.mouseHooks : Jt.test(r) ? this.keyHooks : {}), i = s.props ? this.props.concat(s.props) : this.props, t = new ht.Event(o), e = i.length; e--;) t[n = i[e]] = o[n];
            return t.target || (t.target = o.srcElement || it), 3 === t.target.nodeType && (t.target = t.target.parentNode), t.metaKey = !!t.metaKey, s.filter ? s.filter(t, o) : t
        },
        props: "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
        fixHooks: {},
        keyHooks: {
            props: "char charCode key keyCode".split(" "),
            filter: function (t, e) {
                return null == t.which && (t.which = null != e.charCode ? e.charCode : e.keyCode), t
            }
        },
        mouseHooks: {
            props: "button buttons clientX clientY fromElement offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
            filter: function (t, e) {
                var n, i, r, o = e.button,
                    s = e.fromElement;
                return null == t.pageX && null != e.clientX && (r = (i = t.target.ownerDocument || it).documentElement, n = i.body, t.pageX = e.clientX + (r && r.scrollLeft || n && n.scrollLeft || 0) - (r && r.clientLeft || n && n.clientLeft || 0), t.pageY = e.clientY + (r && r.scrollTop || n && n.scrollTop || 0) - (r && r.clientTop || n && n.clientTop || 0)), !t.relatedTarget && s && (t.relatedTarget = s === t.target ? e.toElement : s), t.which || o === undefined || (t.which = 1 & o ? 1 : 2 & o ? 3 : 4 & o ? 2 : 0), t
            }
        },
        special: {
            load: {
                noBubble: !0
            },
            focus: {
                trigger: function () {
                    if (this !== w() && this.focus) try {
                        return this.focus(), !1
                    } catch (t) { }
                },
                delegateType: "focusin"
            },
            blur: {
                trigger: function () {
                    if (this === w() && this.blur) return this.blur(), !1
                },
                delegateType: "focusout"
            },
            click: {
                trigger: function () {
                    if (ht.nodeName(this, "input") && "checkbox" === this.type && this.click) return this.click(), !1
                },
                _default: function (t) {
                    return ht.nodeName(t.target, "a")
                }
            },
            beforeunload: {
                postDispatch: function (t) {
                    t.result !== undefined && t.originalEvent && (t.originalEvent.returnValue = t.result)
                }
            }
        },
        simulate: function (t, e, n) {
            var i = ht.extend(new ht.Event, n, {
                type: t,
                isSimulated: !0
            });
            ht.event.trigger(i, null, e), i.isDefaultPrevented() && n.preventDefault()
        }
    }, ht.removeEvent = it.removeEventListener ? function (t, e, n) {
        t.removeEventListener && t.removeEventListener(e, n)
    } : function (t, e, n) {
        var i = "on" + e;
        t.detachEvent && ("undefined" == typeof t[i] && (t[i] = null), t.detachEvent(i, n))
    }, ht.Event = function (t, e) {
        if (!(this instanceof ht.Event)) return new ht.Event(t, e);
        t && t.type ? (this.originalEvent = t, this.type = t.type, this.isDefaultPrevented = t.defaultPrevented || t.defaultPrevented === undefined && !1 === t.returnValue ? v : b) : this.type = t, e && ht.extend(this, e), this.timeStamp = t && t.timeStamp || ht.now(), this[ht.expando] = !0
    }, ht.Event.prototype = {
        constructor: ht.Event,
        isDefaultPrevented: b,
        isPropagationStopped: b,
        isImmediatePropagationStopped: b,
        preventDefault: function () {
            var t = this.originalEvent;
            this.isDefaultPrevented = v, t && (t.preventDefault ? t.preventDefault() : t.returnValue = !1)
        },
        stopPropagation: function () {
            var t = this.originalEvent;
            this.isPropagationStopped = v, t && !this.isSimulated && (t.stopPropagation && t.stopPropagation(), t.cancelBubble = !0)
        },
        stopImmediatePropagation: function () {
            var t = this.originalEvent;
            this.isImmediatePropagationStopped = v, t && t.stopImmediatePropagation && t.stopImmediatePropagation(), this.stopPropagation()
        }
    }, ht.each({
        mouseenter: "mouseover",
        mouseleave: "mouseout",
        pointerenter: "pointerover",
        pointerleave: "pointerout"
    }, function (t, e) {
        ht.event.special[t] = {
            delegateType: e,
            bindType: e,
            handle: function (t) {
                var n, i = this,
                    r = t.relatedTarget,
                    o = t.handleObj;
                return r && (r === i || ht.contains(i, r)) || (t.type = o.origType, n = o.handler.apply(this, arguments), t.type = e), n
            }
        }
    }), dt.submit || (ht.event.special.submit = {
        setup: function () {
            if (ht.nodeName(this, "form")) return !1;
            ht.event.add(this, "click._submit keypress._submit", function (t) {
                var e = t.target,
                    n = ht.nodeName(e, "input") || ht.nodeName(e, "button") ? ht.prop(e, "form") : undefined;
                n && !ht._data(n, "submit") && (ht.event.add(n, "submit._submit", function (t) {
                    t._submitBubble = !0
                }), ht._data(n, "submit", !0))
            })
        },
        postDispatch: function (t) {
            t._submitBubble && (delete t._submitBubble, this.parentNode && !t.isTrigger && ht.event.simulate("submit", this.parentNode, t))
        },
        teardown: function () {
            if (ht.nodeName(this, "form")) return !1;
            ht.event.remove(this, "._submit")
        }
    }), dt.change || (ht.event.special.change = {
        setup: function () {
            if (Gt.test(this.nodeName)) return "checkbox" !== this.type && "radio" !== this.type || (ht.event.add(this, "propertychange._change", function (t) {
                "checked" === t.originalEvent.propertyName && (this._justChanged = !0)
            }), ht.event.add(this, "click._change", function (t) {
                this._justChanged && !t.isTrigger && (this._justChanged = !1), ht.event.simulate("change", this, t)
            })), !1;
            ht.event.add(this, "beforeactivate._change", function (t) {
                var e = t.target;
                Gt.test(e.nodeName) && !ht._data(e, "change") && (ht.event.add(e, "change._change", function (t) {
                    !this.parentNode || t.isSimulated || t.isTrigger || ht.event.simulate("change", this.parentNode, t)
                }), ht._data(e, "change", !0))
            })
        },
        handle: function (t) {
            var e = t.target;
            if (this !== e || t.isSimulated || t.isTrigger || "radio" !== e.type && "checkbox" !== e.type) return t.handleObj.handler.apply(this, arguments)
        },
        teardown: function () {
            return ht.event.remove(this, "._change"), !Gt.test(this.nodeName)
        }
    }), dt.focusin || ht.each({
        focus: "focusin",
        blur: "focusout"
    }, function (t, e) {
        var n = function (t) {
            ht.event.simulate(e, t.target, ht.event.fix(t))
        };
        ht.event.special[e] = {
            setup: function () {
                var i = this.ownerDocument || this,
                    r = ht._data(i, e);
                r || i.addEventListener(t, n, !0), ht._data(i, e, (r || 0) + 1)
            },
            teardown: function () {
                var i = this.ownerDocument || this,
                    r = ht._data(i, e) - 1;
                r ? ht._data(i, e, r) : (i.removeEventListener(t, n, !0), ht._removeData(i, e))
            }
        }
    }), ht.fn.extend({
        on: function (t, e, n, i) {
            return x(this, t, e, n, i)
        },
        one: function (t, e, n, i) {
            return x(this, t, e, n, i, 1)
        },
        off: function (t, e, n) {
            var i, r;
            if (t && t.preventDefault && t.handleObj) return i = t.handleObj, ht(t.delegateTarget).off(i.namespace ? i.origType + "." + i.namespace : i.origType, i.selector, i.handler), this;
            if ("object" == typeof t) {
                for (r in t) this.off(r, e, t[r]);
                return this
            }
            return !1 !== e && "function" != typeof e || (n = e, e = undefined), !1 === n && (n = b), this.each(function () {
                ht.event.remove(this, t, n, e)
            })
        },
        trigger: function (t, e) {
            return this.each(function () {
                ht.event.trigger(t, e, this)
            })
        },
        triggerHandler: function (t, e) {
            var n = this[0];
            if (n) return ht.event.trigger(t, e, n, !0)
        }
    });
    var ne = / jQuery\d+="(?:null|\d+)"/g,
        ie = new RegExp("<(?:" + Xt + ")[\\s/>]", "i"),
        re = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,
        oe = /<script|<style|<link/i,
        se = /checked\s*(?:[^=]|=\s*.checked.)/i,
        ae = /^true\/(.*)/,
        le = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
        ue = h(it).appendChild(it.createElement("div"));
    ht.extend({
        htmlPrefilter: function (t) {
            return t.replace(re, "<$1></$2>")
        },
        clone: function (t, e, n) {
            var i, r, o, s, a, l = ht.contains(t.ownerDocument, t);
            if (dt.html5Clone || ht.isXMLDoc(t) || !ie.test("<" + t.nodeName + ">") ? o = t.cloneNode(!0) : (ue.innerHTML = t.outerHTML, ue.removeChild(o = ue.firstChild)), !(dt.noCloneEvent && dt.noCloneChecked || 1 !== t.nodeType && 11 !== t.nodeType || ht.isXMLDoc(t)))
                for (i = f(o), a = f(t), s = 0; null != (r = a[s]); ++s) i[s] && S(r, i[s]);
            if (e)
                if (n)
                    for (a = a || f(t), i = i || f(o), s = 0; null != (r = a[s]); s++) E(r, i[s]);
                else E(t, o);
            return (i = f(o, "script")).length > 0 && m(i, !l && f(t, "script")), i = a = r = null, o
        },
        cleanData: function (t, e) {
            for (var n, i, r, o, s = 0, a = ht.expando, l = ht.cache, u = dt.attributes, c = ht.event.special; null != (n = t[s]); s++)
                if ((e || jt(n)) && (o = (r = n[a]) && l[r])) {
                    if (o.events)
                        for (i in o.events) c[i] ? ht.event.remove(n, i) : ht.removeEvent(n, i, o.handle);
                    l[r] && (delete l[r], u || "undefined" == typeof n.removeAttribute ? n[a] = undefined : n.removeAttribute(a), nt.push(r))
                }
        }
    }), ht.fn.extend({
        domManip: L,
        detach: function (t) {
            return A(this, t, !0)
        },
        remove: function (t) {
            return A(this, t)
        },
        text: function (t) {
            return Wt(this, function (t) {
                return t === undefined ? ht.text(this) : this.empty().append((this[0] && this[0].ownerDocument || it).createTextNode(t))
            }, null, t, arguments.length)
        },
        append: function () {
            return L(this, arguments, function (t) {
                1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || T(this, t).appendChild(t)
            })
        },
        prepend: function () {
            return L(this, arguments, function (t) {
                if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                    var e = T(this, t);
                    e.insertBefore(t, e.firstChild)
                }
            })
        },
        before: function () {
            return L(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this)
            })
        },
        after: function () {
            return L(this, arguments, function (t) {
                this.parentNode && this.parentNode.insertBefore(t, this.nextSibling)
            })
        },
        empty: function () {
            for (var t, e = 0; null != (t = this[e]); e++) {
                for (1 === t.nodeType && ht.cleanData(f(t, !1)); t.firstChild;) t.removeChild(t.firstChild);
                t.options && ht.nodeName(t, "select") && (t.options.length = 0)
            }
            return this
        },
        clone: function (t, e) {
            return t = null != t && t, e = null == e ? t : e, this.map(function () {
                return ht.clone(this, t, e)
            })
        },
        html: function (t) {
            return Wt(this, function (t) {
                var e = this[0] || {},
                    n = 0,
                    i = this.length;
                if (t === undefined) return 1 === e.nodeType ? e.innerHTML.replace(ne, "") : undefined;
                if ("string" == typeof t && !oe.test(t) && (dt.htmlSerialize || !ie.test(t)) && (dt.leadingWhitespace || !Vt.test(t)) && !Qt[(zt.exec(t) || ["", ""])[1].toLowerCase()]) {
                    t = ht.htmlPrefilter(t);
                    try {
                        for (; n < i; n++) 1 === (e = this[n] || {}).nodeType && (ht.cleanData(f(e, !1)), e.innerHTML = t);
                        e = 0
                    } catch (r) { }
                }
                e && this.empty().append(t)
            }, null, t, arguments.length)
        },
        replaceWith: function () {
            var t = [];
            return L(this, arguments, function (e) {
                var n = this.parentNode;
                ht.inArray(this, t) < 0 && (ht.cleanData(f(this)), n && n.replaceChild(e, this))
            }, t)
        }
    }), ht.each({
        appendTo: "append",
        prependTo: "prepend",
        insertBefore: "before",
        insertAfter: "after",
        replaceAll: "replaceWith"
    }, function (t, e) {
        ht.fn[t] = function (t) {
            for (var n, i = 0, r = [], o = ht(t), s = o.length - 1; i <= s; i++) n = i === s ? this : this.clone(!0), ht(o[i])[e](n), st.apply(r, n.get());
            return this.pushStack(r)
        }
    });
    var ce, de = {
        HTML: "block",
        BODY: "block"
    },
        pe = /^margin/,
        he = new RegExp("^(" + It + ")(?!px)[a-z%]+$", "i"),
        fe = function (t, e, n, i) {
            var r, o, s = {};
            for (o in e) s[o] = t.style[o], t.style[o] = e[o];
            for (o in r = n.apply(t, i || []), e) t.style[o] = s[o];
            return r
        },
        me = it.documentElement;
    ! function () {
        function e() {
            var e, c, d = it.documentElement;
            d.appendChild(l), u.style.cssText = "-webkit-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%", n = r = a = !1, i = s = !0, t.getComputedStyle && (c = t.getComputedStyle(u), n = "1%" !== (c || {}).top, a = "2px" === (c || {}).marginLeft, r = "4px" === (c || {
                width: "4px"
            }).width, u.style.marginRight = "50%", i = "4px" === (c || {
                marginRight: "4px"
            }).marginRight, (e = u.appendChild(it.createElement("div"))).style.cssText = u.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0", e.style.marginRight = e.style.width = "0", u.style.width = "1px", s = !parseFloat((t.getComputedStyle(e) || {}).marginRight), u.removeChild(e)), u.style.display = "none", (o = 0 === u.getClientRects().length) && (u.style.display = "", u.innerHTML = "<table><tr><td></td><td>t</td></tr></table>", u.childNodes[0].style.borderCollapse = "separate", (e = u.getElementsByTagName("td"))[0].style.cssText = "margin:0;border:0;padding:0;display:none", (o = 0 === e[0].offsetHeight) && (e[0].style.display = "", e[1].style.display = "none", o = 0 === e[0].offsetHeight)), d.removeChild(l)
        }
        var n, i, r, o, s, a, l = it.createElement("div"),
            u = it.createElement("div");
        u.style && (u.style.cssText = "float:left;opacity:.5", dt.opacity = "0.5" === u.style.opacity, dt.cssFloat = !!u.style.cssFloat, u.style.backgroundClip = "content-box", u.cloneNode(!0).style.backgroundClip = "", dt.clearCloneStyle = "content-box" === u.style.backgroundClip, (l = it.createElement("div")).style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute", u.innerHTML = "", l.appendChild(u), dt.boxSizing = "" === u.style.boxSizing || "" === u.style.MozBoxSizing || "" === u.style.WebkitBoxSizing, ht.extend(dt, {
            reliableHiddenOffsets: function () {
                return null == n && e(), o
            },
            boxSizingReliable: function () {
                return null == n && e(), r
            },
            pixelMarginRight: function () {
                return null == n && e(), i
            },
            pixelPosition: function () {
                return null == n && e(), n
            },
            reliableMarginRight: function () {
                return null == n && e(), s
            },
            reliableMarginLeft: function () {
                return null == n && e(), a
            }
        }))
    }();
    var ge, ye, ve = /^(top|right|bottom|left)$/;
    t.getComputedStyle ? (ge = function (e) {
        var n = e.ownerDocument.defaultView;
        return n && n.opener || (n = t), n.getComputedStyle(e)
    }, ye = function (t, e, n) {
        var i, r, o, s, a = t.style;
        return "" !== (s = (n = n || ge(t)) ? n.getPropertyValue(e) || n[e] : undefined) && s !== undefined || ht.contains(t.ownerDocument, t) || (s = ht.style(t, e)), n && !dt.pixelMarginRight() && he.test(s) && pe.test(e) && (i = a.width, r = a.minWidth, o = a.maxWidth, a.minWidth = a.maxWidth = a.width = s, s = n.width, a.width = i, a.minWidth = r, a.maxWidth = o), s === undefined ? s : s + ""
    }) : me.currentStyle && (ge = function (t) {
        return t.currentStyle
    }, ye = function (t, e, n) {
        var i, r, o, s, a = t.style;
        return null == (s = (n = n || ge(t)) ? n[e] : undefined) && a && a[e] && (s = a[e]), he.test(s) && !ve.test(e) && (i = a.left, (o = (r = t.runtimeStyle) && r.left) && (r.left = t.currentStyle.left), a.left = "fontSize" === e ? "1em" : s, s = a.pixelLeft + "px", a.left = i, o && (r.left = o)), s === undefined ? s : s + "" || "auto"
    });
    var be = /alpha\([^)]*\)/i,
        we = /opacity\s*=\s*([^)]*)/i,
        xe = /^(none|table(?!-c[ea]).+)/,
        Te = new RegExp("^(" + It + ")(.*)$", "i"),
        Ce = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        },
        ke = {
            letterSpacing: "0",
            fontWeight: "400"
        },
        Ee = ["Webkit", "O", "Moz", "ms"],
        Se = it.createElement("div").style;
    ht.extend({
        cssHooks: {
            opacity: {
                get: function (t, e) {
                    if (e) {
                        var n = ye(t, "opacity");
                        return "" === n ? "1" : n
                    }
                }
            }
        },
        cssNumber: {
            animationIterationCount: !0,
            columnCount: !0,
            fillOpacity: !0,
            flexGrow: !0,
            flexShrink: !0,
            fontWeight: !0,
            lineHeight: !0,
            opacity: !0,
            order: !0,
            orphans: !0,
            widows: !0,
            zIndex: !0,
            zoom: !0
        },
        cssProps: {
            "float": dt.cssFloat ? "cssFloat" : "styleFloat"
        },
        style: function (t, e, n, i) {
            if (t && 3 !== t.nodeType && 8 !== t.nodeType && t.style) {
                var r, o, s, a = ht.camelCase(e),
                    l = t.style;
                if (e = ht.cssProps[a] || (ht.cssProps[a] = j(a) || a), s = ht.cssHooks[e] || ht.cssHooks[a], n === undefined) return s && "get" in s && (r = s.get(t, !1, i)) !== undefined ? r : l[e];
                if ("string" === (o = typeof n) && (r = Bt.exec(n)) && r[1] && (n = p(t, e, r), o = "number"), null != n && n == n && ("number" === o && (n += r && r[3] || (ht.cssNumber[a] ? "" : "px")), dt.clearCloneStyle || "" !== n || 0 !== e.indexOf("background") || (l[e] = "inherit"), !(s && "set" in s && (n = s.set(t, n, i)) === undefined))) try {
                    l[e] = n
                } catch (u) { }
            }
        },
        css: function (t, e, n, i) {
            var r, o, s, a = ht.camelCase(e);
            return e = ht.cssProps[a] || (ht.cssProps[a] = j(a) || a), (s = ht.cssHooks[e] || ht.cssHooks[a]) && "get" in s && (o = s.get(t, !0, n)), o === undefined && (o = ye(t, e, i)), "normal" === o && e in ke && (o = ke[e]), "" === n || n ? (r = parseFloat(o), !0 === n || isFinite(r) ? r || 0 : o) : o
        }
    }), ht.each(["height", "width"], function (t, e) {
        ht.cssHooks[e] = {
            get: function (t, n, i) {
                if (n) return xe.test(ht.css(t, "display")) && 0 === t.offsetWidth ? fe(t, Ce, function () {
                    return H(t, e, i)
                }) : H(t, e, i)
            },
            set: function (t, n, i) {
                var r = i && ge(t);
                return R(t, n, i ? q(t, e, i, dt.boxSizing && "border-box" === ht.css(t, "boxSizing", !1, r), r) : 0)
            }
        }
    }), dt.opacity || (ht.cssHooks.opacity = {
        get: function (t, e) {
            return we.test((e && t.currentStyle ? t.currentStyle.filter : t.style.filter) || "") ? .01 * parseFloat(RegExp.$1) + "" : e ? "1" : ""
        },
        set: function (t, e) {
            var n = t.style,
                i = t.currentStyle,
                r = ht.isNumeric(e) ? "alpha(opacity=" + 100 * e + ")" : "",
                o = i && i.filter || n.filter || "";
            n.zoom = 1, (e >= 1 || "" === e) && "" === ht.trim(o.replace(be, "")) && n.removeAttribute && (n.removeAttribute("filter"), "" === e || i && !i.filter) || (n.filter = be.test(o) ? o.replace(be, r) : o + " " + r)
        }
    }), ht.cssHooks.marginRight = D(dt.reliableMarginRight, function (t, e) {
        if (e) return fe(t, {
            display: "inline-block"
        }, ye, [t, "marginRight"])
    }), ht.cssHooks.marginLeft = D(dt.reliableMarginLeft, function (t, e) {
        if (e) return (parseFloat(ye(t, "marginLeft")) || (ht.contains(t.ownerDocument, t) ? t.getBoundingClientRect().left - fe(t, {
            marginLeft: 0
        }, function () {
            return t.getBoundingClientRect().left
        }) : 0)) + "px"
    }), ht.each({
        margin: "",
        padding: "",
        border: "Width"
    }, function (t, e) {
        ht.cssHooks[t + e] = {
            expand: function (n) {
                for (var i = 0, r = {}, o = "string" == typeof n ? n.split(" ") : [n]; i < 4; i++) r[t + Mt[i] + e] = o[i] || o[i - 2] || o[0];
                return r
            }
        }, pe.test(t) || (ht.cssHooks[t + e].set = R)
    }), ht.fn.extend({
        css: function (t, e) {
            return Wt(this, function (t, e, n) {
                var i, r, o = {},
                    s = 0;
                if (ht.isArray(e)) {
                    for (i = ge(t), r = e.length; s < r; s++) o[e[s]] = ht.css(t, e[s], !1, i);
                    return o
                }
                return n !== undefined ? ht.style(t, e, n) : ht.css(t, e)
            }, t, e, arguments.length > 1)
        },
        show: function () {
            return P(this, !0)
        },
        hide: function () {
            return P(this)
        },
        toggle: function (t) {
            return "boolean" == typeof t ? t ? this.show() : this.hide() : this.each(function () {
                Ot(this) ? ht(this).show() : ht(this).hide()
            })
        }
    }), ht.Tween = F, F.prototype = {
        constructor: F,
        init: function (t, e, n, i, r, o) {
            this.elem = t, this.prop = n, this.easing = r || ht.easing._default, this.options = e, this.start = this.now = this.cur(), this.end = i, this.unit = o || (ht.cssNumber[n] ? "" : "px")
        },
        cur: function () {
            var t = F.propHooks[this.prop];
            return t && t.get ? t.get(this) : F.propHooks._default.get(this)
        },
        run: function (t) {
            var e, n = F.propHooks[this.prop];
            return this.options.duration ? this.pos = e = ht.easing[this.easing](t, this.options.duration * t, 0, 1, this.options.duration) : this.pos = e = t, this.now = (this.end - this.start) * e + this.start, this.options.step && this.options.step.call(this.elem, this.now, this), n && n.set ? n.set(this) : F.propHooks._default.set(this), this
        }
    }, F.prototype.init.prototype = F.prototype, F.propHooks = {
        _default: {
            get: function (t) {
                var e;
                return 1 !== t.elem.nodeType || null != t.elem[t.prop] && null == t.elem.style[t.prop] ? t.elem[t.prop] : (e = ht.css(t.elem, t.prop, "")) && "auto" !== e ? e : 0
            },
            set: function (t) {
                ht.fx.step[t.prop] ? ht.fx.step[t.prop](t) : 1 !== t.elem.nodeType || null == t.elem.style[ht.cssProps[t.prop]] && !ht.cssHooks[t.prop] ? t.elem[t.prop] = t.now : ht.style(t.elem, t.prop, t.now + t.unit)
            }
        }
    }, F.propHooks.scrollTop = F.propHooks.scrollLeft = {
        set: function (t) {
            t.elem.nodeType && t.elem.parentNode && (t.elem[t.prop] = t.now)
        }
    }, ht.easing = {
        linear: function (t) {
            return t
        },
        swing: function (t) {
            return .5 - Math.cos(t * Math.PI) / 2
        },
        _default: "swing"
    }, ht.fx = F.prototype.init, ht.fx.step = {};
    var Le, Ae, Ne, $e, De, je, Pe, Re = /^(?:toggle|show|hide)$/,
        qe = /queueHooks$/;
    ht.Animation = ht.extend(_, {
        tweeners: {
            "*": [function (t, e) {
                var n = this.createTween(t, e);
                return p(n.elem, t, Bt.exec(e), n), n
            }]
        },
        tweener: function (t, e) {
            ht.isFunction(t) ? (e = t, t = ["*"]) : t = t.match($t);
            for (var n, i = 0, r = t.length; i < r; i++) n = t[i], _.tweeners[n] = _.tweeners[n] || [], _.tweeners[n].unshift(e)
        },
        prefilters: [O],
        prefilter: function (t, e) {
            e ? _.prefilters.unshift(t) : _.prefilters.push(t)
        }
    }), ht.speed = function (t, e, n) {
        var i = t && "object" == typeof t ? ht.extend({}, t) : {
            complete: n || !n && e || ht.isFunction(t) && t,
            duration: t,
            easing: n && e || e && !ht.isFunction(e) && e
        };
        return i.duration = ht.fx.off ? 0 : "number" == typeof i.duration ? i.duration : i.duration in ht.fx.speeds ? ht.fx.speeds[i.duration] : ht.fx.speeds._default, null != i.queue && !0 !== i.queue || (i.queue = "fx"), i.old = i.complete, i.complete = function () {
            ht.isFunction(i.old) && i.old.call(this), i.queue && ht.dequeue(this, i.queue)
        }, i
    }, ht.fn.extend({
        fadeTo: function (t, e, n, i) {
            return this.filter(Ot).css("opacity", 0).show().end().animate({
                opacity: e
            }, t, n, i)
        },
        animate: function (t, e, n, i) {
            var r = ht.isEmptyObject(t),
                o = ht.speed(e, n, i),
                s = function () {
                    var e = _(this, ht.extend({}, t), o);
                    (r || ht._data(this, "finish")) && e.stop(!0)
                };
            return s.finish = s, r || !1 === o.queue ? this.each(s) : this.queue(o.queue, s)
        },
        stop: function (t, e, n) {
            var i = function (t) {
                var e = t.stop;
                delete t.stop, e(n)
            };
            return "string" != typeof t && (n = e, e = t, t = undefined), e && !1 !== t && this.queue(t || "fx", []), this.each(function () {
                var e = !0,
                    r = null != t && t + "queueHooks",
                    o = ht.timers,
                    s = ht._data(this);
                if (r) s[r] && s[r].stop && i(s[r]);
                else
                    for (r in s) s[r] && s[r].stop && qe.test(r) && i(s[r]);
                for (r = o.length; r--;) o[r].elem !== this || null != t && o[r].queue !== t || (o[r].anim.stop(n), e = !1, o.splice(r, 1));
                !e && n || ht.dequeue(this, t)
            })
        },
        finish: function (t) {
            return !1 !== t && (t = t || "fx"), this.each(function () {
                var e, n = ht._data(this),
                    i = n[t + "queue"],
                    r = n[t + "queueHooks"],
                    o = ht.timers,
                    s = i ? i.length : 0;
                for (n.finish = !0, ht.queue(this, t, []), r && r.stop && r.stop.call(this, !0), e = o.length; e--;) o[e].elem === this && o[e].queue === t && (o[e].anim.stop(!0), o.splice(e, 1));
                for (e = 0; e < s; e++) i[e] && i[e].finish && i[e].finish.call(this);
                delete n.finish
            })
        }
    }), ht.each(["toggle", "show", "hide"], function (t, e) {
        var n = ht.fn[e];
        ht.fn[e] = function (t, i, r) {
            return null == t || "boolean" == typeof t ? n.apply(this, arguments) : this.animate(B(e, !0), t, i, r)
        }
    }), ht.each({
        slideDown: B("show"),
        slideUp: B("hide"),
        slideToggle: B("toggle"),
        fadeIn: {
            opacity: "show"
        },
        fadeOut: {
            opacity: "hide"
        },
        fadeToggle: {
            opacity: "toggle"
        }
    }, function (t, e) {
        ht.fn[t] = function (t, n, i) {
            return this.animate(e, t, n, i)
        }
    }), ht.timers = [], ht.fx.tick = function () {
        var t, e = ht.timers,
            n = 0;
        for (Le = ht.now(); n < e.length; n++)(t = e[n])() || e[n] !== t || e.splice(n--, 1);
        e.length || ht.fx.stop(), Le = undefined
    }, ht.fx.timer = function (t) {
        ht.timers.push(t), t() ? ht.fx.start() : ht.timers.pop()
    }, ht.fx.interval = 13, ht.fx.start = function () {
        Ae || (Ae = t.setInterval(ht.fx.tick, ht.fx.interval))
    }, ht.fx.stop = function () {
        t.clearInterval(Ae), Ae = null
    }, ht.fx.speeds = {
        slow: 600,
        fast: 200,
        _default: 400
    }, ht.fn.delay = function (e, n) {
        return e = ht.fx && ht.fx.speeds[e] || e, n = n || "fx", this.queue(n, function (n, i) {
            var r = t.setTimeout(n, e);
            i.stop = function () {
                t.clearTimeout(r)
            }
        })
    }, $e = it.createElement("input"), De = it.createElement("div"), je = it.createElement("select"), Pe = je.appendChild(it.createElement("option")), (De = it.createElement("div")).setAttribute("className", "t"), De.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>", Ne = De.getElementsByTagName("a")[0], $e.setAttribute("type", "checkbox"), De.appendChild($e), (Ne = De.getElementsByTagName("a")[0]).style.cssText = "top:1px", dt.getSetAttribute = "t" !== De.className, dt.style = /top/.test(Ne.getAttribute("style")), dt.hrefNormalized = "/a" === Ne.getAttribute("href"), dt.checkOn = !!$e.value, dt.optSelected = Pe.selected, dt.enctype = !!it.createElement("form").enctype, je.disabled = !0, dt.optDisabled = !Pe.disabled, ($e = it.createElement("input")).setAttribute("value", ""), dt.input = "" === $e.getAttribute("value"), $e.value = "t", $e.setAttribute("type", "radio"), dt.radioValue = "t" === $e.value;
    var He = /\r/g,
        Fe = /[\x20\t\r\n\f]+/g;
    ht.fn.extend({
        val: function (t) {
            var e, n, i, r = this[0];
            return arguments.length ? (i = ht.isFunction(t), this.each(function (n) {
                var r;
                1 === this.nodeType && (null == (r = i ? t.call(this, n, ht(this).val()) : t) ? r = "" : "number" == typeof r ? r += "" : ht.isArray(r) && (r = ht.map(r, function (t) {
                    return null == t ? "" : t + ""
                })), (e = ht.valHooks[this.type] || ht.valHooks[this.nodeName.toLowerCase()]) && "set" in e && e.set(this, r, "value") !== undefined || (this.value = r))
            })) : r ? (e = ht.valHooks[r.type] || ht.valHooks[r.nodeName.toLowerCase()]) && "get" in e && (n = e.get(r, "value")) !== undefined ? n : "string" == typeof (n = r.value) ? n.replace(He, "") : null == n ? "" : n : void 0
        }
    }), ht.extend({
        valHooks: {
            option: {
                get: function (t) {
                    var e = ht.find.attr(t, "value");
                    return null != e ? e : ht.trim(ht.text(t)).replace(Fe, " ")
                }
            },
            select: {
                get: function (t) {
                    for (var e, n, i = t.options, r = t.selectedIndex, o = "select-one" === t.type || r < 0, s = o ? null : [], a = o ? r + 1 : i.length, l = r < 0 ? a : o ? r : 0; l < a; l++)
                        if (((n = i[l]).selected || l === r) && (dt.optDisabled ? !n.disabled : null === n.getAttribute("disabled")) && (!n.parentNode.disabled || !ht.nodeName(n.parentNode, "optgroup"))) {
                            if (e = ht(n).val(), o) return e;
                            s.push(e)
                        }
                    return s
                },
                set: function (t, e) {
                    for (var n, i, r = t.options, o = ht.makeArray(e), s = r.length; s--;)
                        if (i = r[s], ht.inArray(ht.valHooks.option.get(i), o) > -1) try {
                            i.selected = n = !0
                        } catch (a) {
                            i.scrollHeight
                        } else i.selected = !1;
                    return n || (t.selectedIndex = -1), r
                }
            }
        }
    }), ht.each(["radio", "checkbox"], function () {
        ht.valHooks[this] = {
            set: function (t, e) {
                if (ht.isArray(e)) return t.checked = ht.inArray(ht(t).val(), e) > -1
            }
        }, dt.checkOn || (ht.valHooks[this].get = function (t) {
            return null === t.getAttribute("value") ? "on" : t.value
        })
    });
    var Ie, Be, Me = ht.expr.attrHandle,
        Oe = /^(?:checked|selected)$/i,
        We = dt.getSetAttribute,
        _e = dt.input;
    ht.fn.extend({
        attr: function (t, e) {
            return Wt(this, ht.attr, t, e, arguments.length > 1)
        },
        removeAttr: function (t) {
            return this.each(function () {
                ht.removeAttr(this, t)
            })
        }
    }), ht.extend({
        attr: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return "undefined" == typeof t.getAttribute ? ht.prop(t, e, n) : (1 === o && ht.isXMLDoc(t) || (e = e.toLowerCase(), r = ht.attrHooks[e] || (ht.expr.match.bool.test(e) ? Be : Ie)), n !== undefined ? null === n ? void ht.removeAttr(t, e) : r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : (t.setAttribute(e, n + ""), n) : r && "get" in r && null !== (i = r.get(t, e)) ? i : null == (i = ht.find.attr(t, e)) ? undefined : i)
        },
        attrHooks: {
            type: {
                set: function (t, e) {
                    if (!dt.radioValue && "radio" === e && ht.nodeName(t, "input")) {
                        var n = t.value;
                        return t.setAttribute("type", e), n && (t.value = n), e
                    }
                }
            }
        },
        removeAttr: function (t, e) {
            var n, i, r = 0,
                o = e && e.match($t);
            if (o && 1 === t.nodeType)
                for (; n = o[r++];) i = ht.propFix[n] || n, ht.expr.match.bool.test(n) ? _e && We || !Oe.test(n) ? t[i] = !1 : t[ht.camelCase("default-" + n)] = t[i] = !1 : ht.attr(t, n, ""), t.removeAttribute(We ? n : i)
        }
    }), Be = {
        set: function (t, e, n) {
            return !1 === e ? ht.removeAttr(t, n) : _e && We || !Oe.test(n) ? t.setAttribute(!We && ht.propFix[n] || n, n) : t[ht.camelCase("default-" + n)] = t[n] = !0, n
        }
    }, ht.each(ht.expr.match.bool.source.match(/\w+/g), function (t, e) {
        var n = Me[e] || ht.find.attr;
        _e && We || !Oe.test(e) ? Me[e] = function (t, e, i) {
            var r, o;
            return i || (o = Me[e], Me[e] = r, r = null != n(t, e, i) ? e.toLowerCase() : null, Me[e] = o), r
        } : Me[e] = function (t, e, n) {
            if (!n) return t[ht.camelCase("default-" + e)] ? e.toLowerCase() : null
        }
    }), _e && We || (ht.attrHooks.value = {
        set: function (t, e, n) {
            if (!ht.nodeName(t, "input")) return Ie && Ie.set(t, e, n);
            t.defaultValue = e
        }
    }), We || (Ie = {
        set: function (t, e, n) {
            var i = t.getAttributeNode(n);
            if (i || t.setAttributeNode(i = t.ownerDocument.createAttribute(n)), i.value = e += "", "value" === n || e === t.getAttribute(n)) return e
        }
    }, Me.id = Me.name = Me.coords = function (t, e, n) {
        var i;
        if (!n) return (i = t.getAttributeNode(e)) && "" !== i.value ? i.value : null
    }, ht.valHooks.button = {
        get: function (t, e) {
            var n = t.getAttributeNode(e);
            if (n && n.specified) return n.value
        },
        set: Ie.set
    }, ht.attrHooks.contenteditable = {
        set: function (t, e, n) {
            Ie.set(t, "" !== e && e, n)
        }
    }, ht.each(["width", "height"], function (t, e) {
        ht.attrHooks[e] = {
            set: function (t, n) {
                if ("" === n) return t.setAttribute(e, "auto"), n
            }
        }
    })), dt.style || (ht.attrHooks.style = {
        get: function (t) {
            return t.style.cssText || undefined
        },
        set: function (t, e) {
            return t.style.cssText = e + ""
        }
    });
    var ze = /^(?:input|select|textarea|button|object)$/i,
        Ue = /^(?:a|area)$/i;
    ht.fn.extend({
        prop: function (t, e) {
            return Wt(this, ht.prop, t, e, arguments.length > 1)
        },
        removeProp: function (t) {
            return t = ht.propFix[t] || t, this.each(function () {
                try {
                    this[t] = undefined, delete this[t]
                } catch (e) { }
            })
        }
    }), ht.extend({
        prop: function (t, e, n) {
            var i, r, o = t.nodeType;
            if (3 !== o && 8 !== o && 2 !== o) return 1 === o && ht.isXMLDoc(t) || (e = ht.propFix[e] || e, r = ht.propHooks[e]), n !== undefined ? r && "set" in r && (i = r.set(t, n, e)) !== undefined ? i : t[e] = n : r && "get" in r && null !== (i = r.get(t, e)) ? i : t[e]
        },
        propHooks: {
            tabIndex: {
                get: function (t) {
                    var e = ht.find.attr(t, "tabindex");
                    return e ? parseInt(e, 10) : ze.test(t.nodeName) || Ue.test(t.nodeName) && t.href ? 0 : -1
                }
            }
        },
        propFix: {
            "for": "htmlFor",
            "class": "className"
        }
    }), dt.hrefNormalized || ht.each(["href", "src"], function (t, e) {
        ht.propHooks[e] = {
            get: function (t) {
                return t.getAttribute(e, 4)
            }
        }
    }), dt.optSelected || (ht.propHooks.selected = {
        get: function (t) {
            var e = t.parentNode;
            return e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex), null
        },
        set: function (t) {
            var e = t.parentNode;
            e && (e.selectedIndex, e.parentNode && e.parentNode.selectedIndex)
        }
    }), ht.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function () {
        ht.propFix[this.toLowerCase()] = this
    }), dt.enctype || (ht.propFix.enctype = "encoding");
    var Ve = /[\t\r\n\f]/g;
    ht.fn.extend({
        addClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ht.isFunction(t)) return this.each(function (e) {
                ht(this).addClass(t.call(this, e, z(this)))
            });
            if ("string" == typeof t && t)
                for (e = t.match($t) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ve, " ")) {
                        for (s = 0; o = e[s++];) i.indexOf(" " + o + " ") < 0 && (i += o + " ");
                        r !== (a = ht.trim(i)) && ht.attr(n, "class", a)
                    }
            return this
        },
        removeClass: function (t) {
            var e, n, i, r, o, s, a, l = 0;
            if (ht.isFunction(t)) return this.each(function (e) {
                ht(this).removeClass(t.call(this, e, z(this)))
            });
            if (!arguments.length) return this.attr("class", "");
            if ("string" == typeof t && t)
                for (e = t.match($t) || []; n = this[l++];)
                    if (r = z(n), i = 1 === n.nodeType && (" " + r + " ").replace(Ve, " ")) {
                        for (s = 0; o = e[s++];)
                            for (; i.indexOf(" " + o + " ") > -1;) i = i.replace(" " + o + " ", " ");
                        r !== (a = ht.trim(i)) && ht.attr(n, "class", a)
                    }
            return this
        },
        toggleClass: function (t, e) {
            var n = typeof t;
            return "boolean" == typeof e && "string" === n ? e ? this.addClass(t) : this.removeClass(t) : ht.isFunction(t) ? this.each(function (n) {
                ht(this).toggleClass(t.call(this, n, z(this), e), e)
            }) : this.each(function () {
                var e, i, r, o;
                if ("string" === n)
                    for (i = 0, r = ht(this), o = t.match($t) || []; e = o[i++];) r.hasClass(e) ? r.removeClass(e) : r.addClass(e);
                else t !== undefined && "boolean" !== n || ((e = z(this)) && ht._data(this, "__className__", e), ht.attr(this, "class", e || !1 === t ? "" : ht._data(this, "__className__") || ""))
            })
        },
        hasClass: function (t) {
            var e, n, i = 0;
            for (e = " " + t + " "; n = this[i++];)
                if (1 === n.nodeType && (" " + z(n) + " ").replace(Ve, " ").indexOf(e) > -1) return !0;
            return !1
        }
    }), ht.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function (t, e) {
        ht.fn[e] = function (t, n) {
            return arguments.length > 0 ? this.on(e, null, t, n) : this.trigger(e)
        }
    }), ht.fn.extend({
        hover: function (t, e) {
            return this.mouseenter(t).mouseleave(e || t)
        }
    });
    var Xe = t.location,
        Qe = ht.now(),
        Ke = /\?/,
        Ye = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;
    ht.parseJSON = function (e) {
        if (t.JSON && t.JSON.parse) return t.JSON.parse(e + "");
        var n, i = null,
            r = ht.trim(e + "");
        return r && !ht.trim(r.replace(Ye, function (t, e, r, o) {
            return n && e && (i = 0), 0 === i ? t : (n = r || e, i += !o - !r, "")
        })) ? Function("return " + r)() : ht.error("Invalid JSON: " + e)
    }, ht.parseXML = function (e) {
        var n, i;
        if (!e || "string" != typeof e) return null;
        try {
            t.DOMParser ? (i = new t.DOMParser, n = i.parseFromString(e, "text/xml")) : ((n = new t.ActiveXObject("Microsoft.XMLDOM")).async = "false", n.loadXML(e))
        } catch (r) {
            n = undefined
        }
        return n && n.documentElement && !n.getElementsByTagName("parsererror").length || ht.error("Invalid XML: " + e), n
    };
    var Ge = /#.*$/,
        Je = /([?&])_=[^&]*/,
        Ze = /^(.*?):[ \t]*([^\r\n]*)\r?$/gm,
        tn = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
        en = /^(?:GET|HEAD)$/,
        nn = /^\/\//,
        rn = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,
        on = {},
        sn = {},
        an = "*/".concat("*"),
        ln = Xe.href,
        un = rn.exec(ln.toLowerCase()) || [];
    ht.extend({
        active: 0,
        lastModified: {},
        etag: {},
        ajaxSettings: {
            url: ln,
            type: "GET",
            isLocal: tn.test(un[1]),
            global: !0,
            processData: !0,
            async: !0,
            contentType: "application/x-www-form-urlencoded; charset=UTF-8",
            accepts: {
                "*": an,
                text: "text/plain",
                html: "text/html",
                xml: "application/xml, text/xml",
                json: "application/json, text/javascript"
            },
            contents: {
                xml: /\bxml\b/,
                html: /\bhtml/,
                json: /\bjson\b/
            },
            responseFields: {
                xml: "responseXML",
                text: "responseText",
                json: "responseJSON"
            },
            converters: {
                "* text": String,
                "text html": !0,
                "text json": ht.parseJSON,
                "text xml": ht.parseXML
            },
            flatOptions: {
                url: !0,
                context: !0
            }
        },
        ajaxSetup: function (t, e) {
            return e ? X(X(t, ht.ajaxSettings), e) : X(ht.ajaxSettings, t)
        },
        ajaxPrefilter: U(on),
        ajaxTransport: U(sn),
        ajax: function (e, n) {
            function i(e, n, i, r) {
                var o, d, v, b, x, C = n;
                2 !== w && (w = 2, l && t.clearTimeout(l), c = undefined, a = r || "", T.readyState = e > 0 ? 4 : 0, o = e >= 200 && e < 300 || 304 === e, i && (b = Q(p, T, i)), b = K(p, b, T, o), o ? (p.ifModified && ((x = T.getResponseHeader("Last-Modified")) && (ht.lastModified[s] = x), (x = T.getResponseHeader("etag")) && (ht.etag[s] = x)), 204 === e || "HEAD" === p.type ? C = "nocontent" : 304 === e ? C = "notmodified" : (C = b.state, d = b.data, o = !(v = b.error))) : (v = C, !e && C || (C = "error", e < 0 && (e = 0))), T.status = e, T.statusText = (n || C) + "", o ? m.resolveWith(h, [d, C, T]) : m.rejectWith(h, [T, C, v]), T.statusCode(y), y = undefined, u && f.trigger(o ? "ajaxSuccess" : "ajaxError", [T, p, o ? d : v]), g.fireWith(h, [T, C]), u && (f.trigger("ajaxComplete", [T, p]), --ht.active || ht.event.trigger("ajaxStop")))
            }
            "object" == typeof e && (n = e, e = undefined), n = n || {};
            var r, o, s, a, l, u, c, d, p = ht.ajaxSetup({}, n),
                h = p.context || p,
                f = p.context && (h.nodeType || h.jquery) ? ht(h) : ht.event,
                m = ht.Deferred(),
                g = ht.Callbacks("once memory"),
                y = p.statusCode || {},
                v = {},
                b = {},
                w = 0,
                x = "canceled",
                T = {
                    readyState: 0,
                    getResponseHeader: function (t) {
                        var e;
                        if (2 === w) {
                            if (!d)
                                for (d = {}; e = Ze.exec(a);) d[e[1].toLowerCase()] = e[2];
                            e = d[t.toLowerCase()]
                        }
                        return null == e ? null : e
                    },
                    getAllResponseHeaders: function () {
                        return 2 === w ? a : null
                    },
                    setRequestHeader: function (t, e) {
                        var n = t.toLowerCase();
                        return w || (t = b[n] = b[n] || t, v[t] = e), this
                    },
                    overrideMimeType: function (t) {
                        return w || (p.mimeType = t), this
                    },
                    statusCode: function (t) {
                        var e;
                        if (t)
                            if (w < 2)
                                for (e in t) y[e] = [y[e], t[e]];
                            else T.always(t[T.status]);
                        return this
                    },
                    abort: function (t) {
                        var e = t || x;
                        return c && c.abort(e), i(0, e), this
                    }
                };
            if (m.promise(T).complete = g.add, T.success = T.done, T.error = T.fail, p.url = ((e || p.url || ln) + "").replace(Ge, "").replace(nn, un[1] + "//"), p.type = n.method || n.type || p.method || p.type, p.dataTypes = ht.trim(p.dataType || "*").toLowerCase().match($t) || [""], null == p.crossDomain && (r = rn.exec(p.url.toLowerCase()), p.crossDomain = !(!r || r[1] === un[1] && r[2] === un[2] && (r[3] || ("http:" === r[1] ? "80" : "443")) === (un[3] || ("http:" === un[1] ? "80" : "443")))), p.data && p.processData && "string" != typeof p.data && (p.data = ht.param(p.data, p.traditional)), V(on, p, n, T), 2 === w) return T;
            for (o in (u = ht.event && p.global) && 0 == ht.active++ && ht.event.trigger("ajaxStart"), p.type = p.type.toUpperCase(), p.hasContent = !en.test(p.type), s = p.url, p.hasContent || (p.data && (s = p.url += (Ke.test(s) ? "&" : "?") + p.data, delete p.data), !1 === p.cache && (p.url = Je.test(s) ? s.replace(Je, "$1_=" + Qe++) : s + (Ke.test(s) ? "&" : "?") + "_=" + Qe++)), p.ifModified && (ht.lastModified[s] && T.setRequestHeader("If-Modified-Since", ht.lastModified[s]), ht.etag[s] && T.setRequestHeader("If-None-Match", ht.etag[s])), (p.data && p.hasContent && !1 !== p.contentType || n.contentType) && T.setRequestHeader("Content-Type", p.contentType), T.setRequestHeader("Accept", p.dataTypes[0] && p.accepts[p.dataTypes[0]] ? p.accepts[p.dataTypes[0]] + ("*" !== p.dataTypes[0] ? ", " + an + "; q=0.01" : "") : p.accepts["*"]), p.headers) T.setRequestHeader(o, p.headers[o]);
            if (p.beforeSend && (!1 === p.beforeSend.call(h, T, p) || 2 === w)) return T.abort();
            for (o in x = "abort", {
                success: 1,
                error: 1,
                complete: 1
            }) T[o](p[o]);
            if (c = V(sn, p, n, T)) {
                if (T.readyState = 1, u && f.trigger("ajaxSend", [T, p]), 2 === w) return T;
                p.async && p.timeout > 0 && (l = t.setTimeout(function () {
                    T.abort("timeout")
                }, p.timeout));
                try {
                    w = 1, c.send(v, i)
                } catch (C) {
                    if (!(w < 2)) throw C;
                    i(-1, C)
                }
            } else i(-1, "No Transport");
            return T
        },
        getJSON: function (t, e, n) {
            return ht.get(t, e, n, "json")
        },
        getScript: function (t, e) {
            return ht.get(t, undefined, e, "script")
        }
    }), ht.each(["get", "post"], function (t, e) {
        ht[e] = function (t, n, i, r) {
            return ht.isFunction(n) && (r = r || i, i = n, n = undefined), ht.ajax(ht.extend({
                url: t,
                type: e,
                dataType: r,
                data: n,
                success: i
            }, ht.isPlainObject(t) && t))
        }
    }), ht._evalUrl = function (t) {
        return ht.ajax({
            url: t,
            type: "GET",
            dataType: "script",
            cache: !0,
            async: !1,
            global: !1,
            "throws": !0
        })
    }, ht.fn.extend({
        wrapAll: function (t) {
            if (ht.isFunction(t)) return this.each(function (e) {
                ht(this).wrapAll(t.call(this, e))
            });
            if (this[0]) {
                var e = ht(t, this[0].ownerDocument).eq(0).clone(!0);
                this[0].parentNode && e.insertBefore(this[0]), e.map(function () {
                    for (var t = this; t.firstChild && 1 === t.firstChild.nodeType;) t = t.firstChild;
                    return t
                }).append(this)
            }
            return this
        },
        wrapInner: function (t) {
            return ht.isFunction(t) ? this.each(function (e) {
                ht(this).wrapInner(t.call(this, e))
            }) : this.each(function () {
                var e = ht(this),
                    n = e.contents();
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        wrap: function (t) {
            var e = ht.isFunction(t);
            return this.each(function (n) {
                ht(this).wrapAll(e ? t.call(this, n) : t)
            })
        },
        unwrap: function () {
            return this.parent().each(function () {
                ht.nodeName(this, "body") || ht(this).replaceWith(this.childNodes)
            }).end()
        }
    }), ht.expr.filters.hidden = function (t) {
        return dt.reliableHiddenOffsets() ? t.offsetWidth <= 0 && t.offsetHeight <= 0 && !t.getClientRects().length : G(t)
    }, ht.expr.filters.visible = function (t) {
        return !ht.expr.filters.hidden(t)
    };
    var cn = /%20/g,
        dn = /\[\]$/,
        pn = /\r?\n/g,
        hn = /^(?:submit|button|image|reset|file)$/i,
        fn = /^(?:input|select|textarea|keygen)/i;
    ht.param = function (t, e) {
        var n, i = [],
            r = function (t, e) {
                e = ht.isFunction(e) ? e() : null == e ? "" : e, i[i.length] = encodeURIComponent(t) + "=" + encodeURIComponent(e)
            };
        if (e === undefined && (e = ht.ajaxSettings && ht.ajaxSettings.traditional), ht.isArray(t) || t.jquery && !ht.isPlainObject(t)) ht.each(t, function () {
            r(this.name, this.value)
        });
        else
            for (n in t) J(n, t[n], e, r);
        return i.join("&").replace(cn, "+")
    }, ht.fn.extend({
        serialize: function () {
            return ht.param(this.serializeArray())
        },
        serializeArray: function () {
            return this.map(function () {
                var t = ht.prop(this, "elements");
                return t ? ht.makeArray(t) : this
            }).filter(function () {
                var t = this.type;
                return this.name && !ht(this).is(":disabled") && fn.test(this.nodeName) && !hn.test(t) && (this.checked || !_t.test(t))
            }).map(function (t, e) {
                var n = ht(this).val();
                return null == n ? null : ht.isArray(n) ? ht.map(n, function (t) {
                    return {
                        name: e.name,
                        value: t.replace(pn, "\r\n")
                    }
                }) : {
                        name: e.name,
                        value: n.replace(pn, "\r\n")
                    }
            }).get()
        }
    }), ht.ajaxSettings.xhr = t.ActiveXObject !== undefined ? function () {
        return this.isLocal ? tt() : it.documentMode > 8 ? Z() : /^(get|post|head|put|delete|options)$/i.test(this.type) && Z() || tt()
    } : Z;
    var mn = 0,
        gn = {},
        yn = ht.ajaxSettings.xhr();
    t.attachEvent && t.attachEvent("onunload", function () {
        for (var t in gn) gn[t](undefined, !0)
    }), dt.cors = !!yn && "withCredentials" in yn, (yn = dt.ajax = !!yn) && ht.ajaxTransport(function (e) {
        var n;
        if (!e.crossDomain || dt.cors) return {
            send: function (i, r) {
                var o, s = e.xhr(),
                    a = ++mn;
                if (s.open(e.type, e.url, e.async, e.username, e.password), e.xhrFields)
                    for (o in e.xhrFields) s[o] = e.xhrFields[o];
                for (o in e.mimeType && s.overrideMimeType && s.overrideMimeType(e.mimeType), e.crossDomain || i["X-Requested-With"] || (i["X-Requested-With"] = "XMLHttpRequest"), i) i[o] !== undefined && s.setRequestHeader(o, i[o] + "");
                s.send(e.hasContent && e.data || null), n = function (t, i) {
                    var o, l, u;
                    if (n && (i || 4 === s.readyState))
                        if (delete gn[a], n = undefined, s.onreadystatechange = ht.noop, i) 4 !== s.readyState && s.abort();
                        else {
                            u = {}, o = s.status, "string" == typeof s.responseText && (u.text = s.responseText);
                            try {
                                l = s.statusText
                            } catch (c) {
                                l = ""
                            }
                            o || !e.isLocal || e.crossDomain ? 1223 === o && (o = 204) : o = u.text ? 200 : 404
                        }
                    u && r(o, l, u, s.getAllResponseHeaders())
                }, e.async ? 4 === s.readyState ? t.setTimeout(n) : s.onreadystatechange = gn[a] = n : n()
            },
            abort: function () {
                n && n(undefined, !0)
            }
        }
    }), ht.ajaxSetup({
        accepts: {
            script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
        },
        contents: {
            script: /\b(?:java|ecma)script\b/
        },
        converters: {
            "text script": function (t) {
                return ht.globalEval(t), t
            }
        }
    }), ht.ajaxPrefilter("script", function (t) {
        t.cache === undefined && (t.cache = !1), t.crossDomain && (t.type = "GET", t.global = !1)
    }), ht.ajaxTransport("script", function (t) {
        if (t.crossDomain) {
            var e, n = it.head || ht("head")[0] || it.documentElement;
            return {
                send: function (i, r) {
                    (e = it.createElement("script")).async = !0, t.scriptCharset && (e.charset = t.scriptCharset), e.src = t.url, e.onload = e.onreadystatechange = function (t, n) {
                        (n || !e.readyState || /loaded|complete/.test(e.readyState)) && (e.onload = e.onreadystatechange = null, e.parentNode && e.parentNode.removeChild(e), e = null, n || r(200, "success"))
                    }, n.insertBefore(e, n.firstChild)
                },
                abort: function () {
                    e && e.onload(undefined, !0)
                }
            }
        }
    });
    var vn = [],
        bn = /(=)\?(?=&|$)|\?\?/;
    ht.ajaxSetup({
        jsonp: "callback",
        jsonpCallback: function () {
            var t = vn.pop() || ht.expando + "_" + Qe++;
            return this[t] = !0, t
        }
    }), ht.ajaxPrefilter("json jsonp", function (e, n, i) {
        var r, o, s, a = !1 !== e.jsonp && (bn.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && bn.test(e.data) && "data");
        if (a || "jsonp" === e.dataTypes[0]) return r = e.jsonpCallback = ht.isFunction(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback, a ? e[a] = e[a].replace(bn, "$1" + r) : !1 !== e.jsonp && (e.url += (Ke.test(e.url) ? "&" : "?") + e.jsonp + "=" + r), e.converters["script json"] = function () {
            return s || ht.error(r + " was not called"), s[0]
        }, e.dataTypes[0] = "json", o = t[r], t[r] = function () {
            s = arguments
        }, i.always(function () {
            o === undefined ? ht(t).removeProp(r) : t[r] = o, e[r] && (e.jsonpCallback = n.jsonpCallback, vn.push(r)), s && ht.isFunction(o) && o(s[0]), s = o = undefined
        }), "script"
    }), ht.parseHTML = function (t, e, n) {
        if (!t || "string" != typeof t) return null;
        "boolean" == typeof e && (n = e, e = !1), e = e || it;
        var i = Tt.exec(t),
            r = !n && [];
        return i ? [e.createElement(i[1])] : (i = y([t], e, r), r && r.length && ht(r).remove(), ht.merge([], i.childNodes))
    };
    var wn = ht.fn.load;
    ht.fn.load = function (t, e, n) {
        if ("string" != typeof t && wn) return wn.apply(this, arguments);
        var i, r, o, s = this,
            a = t.indexOf(" ");
        return a > -1 && (i = ht.trim(t.slice(a, t.length)), t = t.slice(0, a)), ht.isFunction(e) ? (n = e, e = undefined) : e && "object" == typeof e && (r = "POST"), s.length > 0 && ht.ajax({
            url: t,
            type: r || "GET",
            dataType: "html",
            data: e
        }).done(function (t) {
            o = arguments, s.html(i ? ht("<div>").append(ht.parseHTML(t)).find(i) : t)
        }).always(n && function (t, e) {
            s.each(function () {
                n.apply(this, o || [t.responseText, e, t])
            })
        }), this
    }, ht.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function (t, e) {
        ht.fn[e] = function (t) {
            return this.on(e, t)
        }
    }), ht.expr.filters.animated = function (t) {
        return ht.grep(ht.timers, function (e) {
            return t === e.elem
        }).length
    }, ht.offset = {
        setOffset: function (t, e, n) {
            var i, r, o, s, a, l, u = ht.css(t, "position"),
                c = ht(t),
                d = {};
            "static" === u && (t.style.position = "relative"), a = c.offset(), o = ht.css(t, "top"), l = ht.css(t, "left"), ("absolute" === u || "fixed" === u) && ht.inArray("auto", [o, l]) > -1 ? (s = (i = c.position()).top, r = i.left) : (s = parseFloat(o) || 0, r = parseFloat(l) || 0), ht.isFunction(e) && (e = e.call(t, n, ht.extend({}, a))), null != e.top && (d.top = e.top - a.top + s), null != e.left && (d.left = e.left - a.left + r), "using" in e ? e.using.call(t, d) : c.css(d)
        }
    }, ht.fn.extend({
        offset: function (t) {
            if (arguments.length) return t === undefined ? this : this.each(function (e) {
                ht.offset.setOffset(this, t, e)
            });
            var e, n, i = {
                top: 0,
                left: 0
            },
                r = this[0],
                o = r && r.ownerDocument;
            return o ? (e = o.documentElement, ht.contains(e, r) ? ("undefined" != typeof r.getBoundingClientRect && (i = r.getBoundingClientRect()), n = et(o), {
                top: i.top + (n.pageYOffset || e.scrollTop) - (e.clientTop || 0),
                left: i.left + (n.pageXOffset || e.scrollLeft) - (e.clientLeft || 0)
            }) : i) : void 0
        },
        position: function () {
            if (this[0]) {
                var t, e, n = {
                    top: 0,
                    left: 0
                },
                    i = this[0];
                return "fixed" === ht.css(i, "position") ? e = i.getBoundingClientRect() : (t = this.offsetParent(), e = this.offset(), ht.nodeName(t[0], "html") || (n = t.offset()), n.top += ht.css(t[0], "borderTopWidth", !0), n.left += ht.css(t[0], "borderLeftWidth", !0)), {
                    top: e.top - n.top - ht.css(i, "marginTop", !0),
                    left: e.left - n.left - ht.css(i, "marginLeft", !0)
                }
            }
        },
        offsetParent: function () {
            return this.map(function () {
                for (var t = this.offsetParent; t && !ht.nodeName(t, "html") && "static" === ht.css(t, "position");) t = t.offsetParent;
                return t || me
            })
        }
    }), ht.each({
        scrollLeft: "pageXOffset",
        scrollTop: "pageYOffset"
    }, function (t, e) {
        var n = /Y/.test(e);
        ht.fn[t] = function (i) {
            return Wt(this, function (t, i, r) {
                var o = et(t);
                if (r === undefined) return o ? e in o ? o[e] : o.document.documentElement[i] : t[i];
                o ? o.scrollTo(n ? ht(o).scrollLeft() : r, n ? r : ht(o).scrollTop()) : t[i] = r
            }, t, i, arguments.length, null)
        }
    }), ht.each(["top", "left"], function (t, e) {
        ht.cssHooks[e] = D(dt.pixelPosition, function (t, n) {
            if (n) return n = ye(t, e), he.test(n) ? ht(t).position()[e] + "px" : n
        })
    }), ht.each({
        Height: "height",
        Width: "width"
    }, function (t, e) {
        ht.each({
            padding: "inner" + t,
            content: e,
            "": "outer" + t
        }, function (n, i) {
            ht.fn[i] = function (i, r) {
                var o = arguments.length && (n || "boolean" != typeof i),
                    s = n || (!0 === i || !0 === r ? "margin" : "border");
                return Wt(this, function (e, n, i) {
                    var r;
                    return ht.isWindow(e) ? e.document.documentElement["client" + t] : 9 === e.nodeType ? (r = e.documentElement, Math.max(e.body["scroll" + t], r["scroll" + t], e.body["offset" + t], r["offset" + t], r["client" + t])) : i === undefined ? ht.css(e, n, s) : ht.style(e, n, i, s)
                }, e, o ? i : undefined, o, null)
            }
        })
    }), ht.fn.extend({
        bind: function (t, e, n) {
            return this.on(t, null, e, n)
        },
        unbind: function (t, e) {
            return this.off(t, null, e)
        },
        delegate: function (t, e, n, i) {
            return this.on(e, t, n, i)
        },
        undelegate: function (t, e, n) {
            return 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", n)
        }
    }), ht.fn.size = function () {
        return this.length
    }, ht.fn.andSelf = ht.fn.addBack, "function" == typeof define && define.amd && define("jquery", [], function () {
        return ht
    });
    var xn = t.jQuery,
        Tn = t.$;
    return ht.noConflict = function (e) {
        return t.$ === ht && (t.$ = Tn), e && t.jQuery === ht && (t.jQuery = xn), ht
    }, e || (t.jQuery = t.$ = ht), ht
}),
    function () {
        var t, e;
        t = window.jQuery || ("function" == typeof require ? require("jquery") : void 0), e = t(document), t.turbo = {
            version: "2.1.0",
            isReady: !1,
            use: function (t, n) {
                return e.off(".turbo").on(t + ".turbo", this.onLoad).on(n + ".turbo", this.onFetch)
            },
            addCallback: function (n) {
                return t.turbo.isReady && n(t), e.on("turbo:ready", function () {
                    return n(t)
                })
            },
            onLoad: function () {
                return t.turbo.isReady = !0, e.trigger("turbo:ready")
            },
            onFetch: function () {
                return t.turbo.isReady = !1
            },
            register: function () {
                return t(this.onLoad), t.fn.ready = this.addCallback
            }
        }, t.turbo.register(), t.turbo.use("page:load", "page:fetch")
    }.call(this),
    function (t, e) {
        "use strict";
        var n;
        t.rails !== e && t.error("jquery-ujs has already been loaded!");
        var i = t(document);
        t.rails = n = {
            linkClickSelector: "a[data-confirm], a[data-method], a[data-remote]:not([disabled]), a[data-disable-with], a[data-disable]",
            buttonClickSelector: "button[data-remote]:not([form]):not(form button), button[data-confirm]:not([form]):not(form button)",
            inputChangeSelector: "select[data-remote], input[data-remote], textarea[data-remote]",
            formSubmitSelector: "form",
            formInputClickSelector: "form input[type=submit], form input[type=image], form button[type=submit], form button:not([type]), input[type=submit][form], input[type=image][form], button[type=submit][form], button[form]:not([type])",
            disableSelector: "input[data-disable-with]:enabled, button[data-disable-with]:enabled, textarea[data-disable-with]:enabled, input[data-disable]:enabled, button[data-disable]:enabled, textarea[data-disable]:enabled",
            enableSelector: "input[data-disable-with]:disabled, button[data-disable-with]:disabled, textarea[data-disable-with]:disabled, input[data-disable]:disabled, button[data-disable]:disabled, textarea[data-disable]:disabled",
            requiredInputSelector: "input[name][required]:not([disabled]), textarea[name][required]:not([disabled])",
            fileInputSelector: "input[name][type=file]:not([disabled])",
            linkDisableSelector: "a[data-disable-with], a[data-disable]",
            buttonDisableSelector: "button[data-remote][data-disable-with], button[data-remote][data-disable]",
            csrfToken: function () {
                return t("meta[name=csrf-token]").attr("content")
            },
            csrfParam: function () {
                return t("meta[name=csrf-param]").attr("content")
            },
            CSRFProtection: function (t) {
                var e = n.csrfToken();
                e && t.setRequestHeader("X-CSRF-Token", e)
            },
            refreshCSRFTokens: function () {
                t('form input[name="' + n.csrfParam() + '"]').val(n.csrfToken())
            },
            fire: function (e, n, i) {
                var r = t.Event(n);
                return e.trigger(r, i), !1 !== r.result
            },
            confirm: function (t) {
                return confirm(t)
            },
            ajax: function (e) {
                return t.ajax(e)
            },
            href: function (t) {
                return t[0].href
            },
            isRemote: function (t) {
                return t.data("remote") !== e && !1 !== t.data("remote")
            },
            handleRemote: function (i) {
                var r, o, s, a, l, u;
                if (n.fire(i, "ajax:before")) {
                    if (a = i.data("with-credentials") || null, l = i.data("type") || t.ajaxSettings && t.ajaxSettings.dataType, i.is("form")) {
                        r = i.data("ujs:submit-button-formmethod") || i.attr("method"), o = i.data("ujs:submit-button-formaction") || i.attr("action"), s = t(i[0]).serializeArray();
                        var c = i.data("ujs:submit-button");
                        c && (s.push(c), i.data("ujs:submit-button", null)), i.data("ujs:submit-button-formmethod", null), i.data("ujs:submit-button-formaction", null)
                    } else i.is(n.inputChangeSelector) ? (r = i.data("method"), o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : i.is(n.buttonClickSelector) ? (r = i.data("method") || "get", o = i.data("url"), s = i.serialize(), i.data("params") && (s = s + "&" + i.data("params"))) : (r = i.data("method"), o = n.href(i), s = i.data("params") || null);
                    return u = {
                        type: r || "GET",
                        data: s,
                        dataType: l,
                        beforeSend: function (t, r) {
                            if (r.dataType === e && t.setRequestHeader("accept", "*/*;q=0.5, " + r.accepts.script), !n.fire(i, "ajax:beforeSend", [t, r])) return !1;
                            i.trigger("ajax:send", t)
                        },
                        success: function (t, e, n) {
                            i.trigger("ajax:success", [t, e, n])
                        },
                        complete: function (t, e) {
                            i.trigger("ajax:complete", [t, e])
                        },
                        error: function (t, e, n) {
                            i.trigger("ajax:error", [t, e, n])
                        },
                        crossDomain: n.isCrossDomain(o)
                    }, a && (u.xhrFields = {
                        withCredentials: a
                    }), o && (u.url = o), n.ajax(u)
                }
                return !1
            },
            isCrossDomain: function (t) {
                var e = document.createElement("a");
                e.href = location.href;
                var n = document.createElement("a");
                try {
                    return n.href = t, n.href = n.href, !((!n.protocol || ":" === n.protocol) && !n.host || e.protocol + "//" + e.host == n.protocol + "//" + n.host)
                } catch (i) {
                    return !0
                }
            },
            handleMethod: function (i) {
                var r = n.href(i),
                    o = i.data("method"),
                    s = i.attr("target"),
                    a = n.csrfToken(),
                    l = n.csrfParam(),
                    u = t('<form method="post" action="' + r + '"></form>'),
                    c = '<input name="_method" value="' + o + '" type="hidden" />';
                l === e || a === e || n.isCrossDomain(r) || (c += '<input name="' + l + '" value="' + a + '" type="hidden" />'), s && u.attr("target", s), u.hide().append(c).appendTo("body"), u.submit()
            },
            formElements: function (e, n) {
                return e.is("form") ? t(e[0].elements).filter(n) : e.find(n)
            },
            disableFormElements: function (e) {
                n.formElements(e, n.disableSelector).each(function () {
                    n.disableFormElement(t(this))
                })
            },
            disableFormElement: function (t) {
                var n, i;
                n = t.is("button") ? "html" : "val", (i = t.data("disable-with")) !== e && (t.data("ujs:enable-with", t[n]()), t[n](i)), t.prop("disabled", !0), t.data("ujs:disabled", !0)
            },
            enableFormElements: function (e) {
                n.formElements(e, n.enableSelector).each(function () {
                    n.enableFormElement(t(this))
                })
            },
            enableFormElement: function (t) {
                var n = t.is("button") ? "html" : "val";
                t.data("ujs:enable-with") !== e && (t[n](t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.prop("disabled", !1), t.removeData("ujs:disabled")
            },
            allowAction: function (t) {
                var e, i = t.data("confirm"),
                    r = !1;
                if (!i) return !0;
                if (n.fire(t, "confirm")) {
                    try {
                        r = n.confirm(i)
                    } catch (o) {
                        (console.error || console.log).call(console, o.stack || o)
                    }
                    e = n.fire(t, "confirm:complete", [r])
                }
                return r && e
            },
            blankInputs: function (e, n, i) {
                var r, o, s, a = t(),
                    l = n || "input,textarea",
                    u = {};
                return e.find(l).each(function () {
                    (r = t(this)).is("input[type=radio]") ? (s = r.attr("name"), u[s] || (0 === e.find('input[type=radio]:checked[name="' + s + '"]').length && (o = e.find('input[type=radio][name="' + s + '"]'), a = a.add(o)), u[s] = s)) : (r.is("input[type=checkbox],input[type=radio]") ? r.is(":checked") : !!r.val()) === i && (a = a.add(r))
                }), !!a.length && a
            },
            nonBlankInputs: function (t, e) {
                return n.blankInputs(t, e, !0)
            },
            stopEverything: function (e) {
                return t(e.target).trigger("ujs:everythingStopped"), e.stopImmediatePropagation(), !1
            },
            disableElement: function (t) {
                var i = t.data("disable-with");
                i !== e && (t.data("ujs:enable-with", t.html()), t.html(i)), t.bind("click.railsDisable", function (t) {
                    return n.stopEverything(t)
                }), t.data("ujs:disabled", !0)
            },
            enableElement: function (t) {
                t.data("ujs:enable-with") !== e && (t.html(t.data("ujs:enable-with")), t.removeData("ujs:enable-with")), t.unbind("click.railsDisable"), t.removeData("ujs:disabled")
            }
        }, n.fire(i, "rails:attachBindings") && (t.ajaxPrefilter(function (t, e, i) {
            t.crossDomain || n.CSRFProtection(i)
        }), t(window).on("pageshow.rails", function () {
            t(t.rails.enableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableFormElement(e)
            }), t(t.rails.linkDisableSelector).each(function () {
                var e = t(this);
                e.data("ujs:disabled") && t.rails.enableElement(e)
            })
        }), i.on("ajax:complete", n.linkDisableSelector, function () {
            n.enableElement(t(this))
        }), i.on("ajax:complete", n.buttonDisableSelector, function () {
            n.enableFormElement(t(this))
        }), i.on("click.rails", n.linkClickSelector, function (e) {
            var i = t(this),
                r = i.data("method"),
                o = i.data("params"),
                s = e.metaKey || e.ctrlKey;
            if (!n.allowAction(i)) return n.stopEverything(e);
            if (!s && i.is(n.linkDisableSelector) && n.disableElement(i), n.isRemote(i)) {
                if (s && (!r || "GET" === r) && !o) return !0;
                var a = n.handleRemote(i);
                return !1 === a ? n.enableElement(i) : a.fail(function () {
                    n.enableElement(i)
                }), !1
            }
            return r ? (n.handleMethod(i), !1) : void 0
        }), i.on("click.rails", n.buttonClickSelector, function (e) {
            var i = t(this);
            if (!n.allowAction(i) || !n.isRemote(i)) return n.stopEverything(e);
            i.is(n.buttonDisableSelector) && n.disableFormElement(i);
            var r = n.handleRemote(i);
            return !1 === r ? n.enableFormElement(i) : r.fail(function () {
                n.enableFormElement(i)
            }), !1
        }), i.on("change.rails", n.inputChangeSelector, function (e) {
            var i = t(this);
            return n.allowAction(i) && n.isRemote(i) ? (n.handleRemote(i), !1) : n.stopEverything(e)
        }), i.on("submit.rails", n.formSubmitSelector, function (i) {
            var r, o, s = t(this),
                a = n.isRemote(s);
            if (!n.allowAction(s)) return n.stopEverything(i);
            if (s.attr("novalidate") === e)
                if (s.data("ujs:formnovalidate-button") === e) {
                    if ((r = n.blankInputs(s, n.requiredInputSelector, !1)) && n.fire(s, "ajax:aborted:required", [r])) return n.stopEverything(i)
                } else s.data("ujs:formnovalidate-button", e);
            if (a) {
                if (o = n.nonBlankInputs(s, n.fileInputSelector)) {
                    setTimeout(function () {
                        n.disableFormElements(s)
                    }, 13);
                    var l = n.fire(s, "ajax:aborted:file", [o]);
                    return l || setTimeout(function () {
                        n.enableFormElements(s)
                    }, 13), l
                }
                return n.handleRemote(s), !1
            }
            setTimeout(function () {
                n.disableFormElements(s)
            }, 13)
        }), i.on("click.rails", n.formInputClickSelector, function (e) {
            var i = t(this);
            if (!n.allowAction(i)) return n.stopEverything(e);
            var r = i.attr("name"),
                o = r ? {
                    name: r,
                    value: i.val()
                } : null,
                s = i.closest("form");
            0 === s.length && (s = t("#" + i.attr("form"))), s.data("ujs:submit-button", o), s.data("ujs:formnovalidate-button", i.attr("formnovalidate")), s.data("ujs:submit-button-formaction", i.attr("formaction")), s.data("ujs:submit-button-formmethod", i.attr("formmethod"))
        }), i.on("ajax:send.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.disableFormElements(t(this))
        }), i.on("ajax:complete.rails", n.formSubmitSelector, function (e) {
            this === e.target && n.enableFormElements(t(this))
        }), t(function () {
            n.refreshCSRFTokens()
        }))
    }(jQuery),
    function () {
        this.Turbolinks = {
            supported: null != window.history.pushState && null != window.requestAnimationFrame && null != window.addEventListener,
            visit: function (t, e) {
                return Turbolinks.controller.visit(t, e)
            },
            clearCache: function () {
                return Turbolinks.controller.clearCache()
            },
            setProgressBarDelay: function (t) {
                return Turbolinks.controller.setProgressBarDelay(t)
            }
        }
    }.call(this),
    function () {
        var t, e, n, i, r, o, s, a, l, u = [].slice;
        Turbolinks.copyObject = function (t) {
            var e, n, i;
            for (e in n = {}, t) i = t[e], n[e] = i;
            return n
        }, Turbolinks.closest = function (e, n) {
            return t.call(e, n)
        }, t = null != (l = document.documentElement.closest) ? l : function (t) {
            var n;
            for (n = this; n;) {
                if (n.nodeType === Node.ELEMENT_NODE && e.call(n, t)) return n;
                n = n.parentNode
            }
        }, Turbolinks.defer = function (t) {
            return setTimeout(t, 1)
        }, Turbolinks.throttle = function (t) {
            var e;
            return e = null,
                function () {
                    var n, i;
                    return n = 1 <= arguments.length ? u.call(arguments, 0) : [], null != e ? e : e = requestAnimationFrame((i = this, function () {
                        return e = null, t.apply(i, n)
                    }))
                }
        }, Turbolinks.dispatch = function (t, e) {
            var i, r, o, s, a, l;
            return l = (a = null != e ? e : {}).target, i = a.cancelable, r = a.data, (o = document.createEvent("Events")).initEvent(t, !0, !0 === i), o.data = null != r ? r : {}, o.cancelable && !n && (s = o.preventDefault, o.preventDefault = function () {
                return this.defaultPrevented || Object.defineProperty(this, "defaultPrevented", {
                    get: function () {
                        return !0
                    }
                }), s.call(this)
            }), (null != l ? l : document).dispatchEvent(o), o
        }, (a = document.createEvent("Events")).initEvent("test", !0, !0), a.preventDefault(), n = a.defaultPrevented, Turbolinks.match = function (t, n) {
            return e.call(t, n)
        }, e = null != (r = null != (o = null != (s = (i = document.documentElement).matchesSelector) ? s : i.webkitMatchesSelector) ? o : i.msMatchesSelector) ? r : i.mozMatchesSelector, Turbolinks.uuid = function () {
            var t, e, n;
            for (n = "", t = e = 1; 36 >= e; t = ++e) n += 9 === t || 14 === t || 19 === t || 24 === t ? "-" : 15 === t ? "4" : 20 === t ? (Math.floor(4 * Math.random()) + 8).toString(16) : Math.floor(15 * Math.random()).toString(16);
            return n
        }
    }.call(this),
    function () {
        Turbolinks.Location = function () {
            function t(t) {
                var e, n;
                null == t && (t = ""), (n = document.createElement("a")).href = t.toString(), this.absoluteURL = n.href, 2 > (e = n.hash.length) ? this.requestURL = this.absoluteURL : (this.requestURL = this.absoluteURL.slice(0, -e), this.anchor = n.hash.slice(1))
            }
            var e, n, i, r;
            return t.wrap = function (t) {
                return t instanceof this ? t : new this(t)
            }, t.prototype.getOrigin = function () {
                return this.absoluteURL.split("/", 3).join("/")
            }, t.prototype.getPath = function () {
                var t, e;
                return null != (t = null != (e = this.requestURL.match(/\/\/[^\/]*(\/[^?;]*)/)) ? e[1] : void 0) ? t : "/"
            }, t.prototype.getPathComponents = function () {
                return this.getPath().split("/").slice(1)
            }, t.prototype.getLastPathComponent = function () {
                return this.getPathComponents().slice(-1)[0]
            }, t.prototype.getExtension = function () {
                var t, e;
                return null != (t = null != (e = this.getLastPathComponent().match(/\.[^.]*$/)) ? e[0] : void 0) ? t : ""
            }, t.prototype.isHTML = function () {
                return this.getExtension().match(/^(?:|\.(?:htm|html|xhtml))$/)
            }, t.prototype.isPrefixedBy = function (t) {
                var e;
                return e = n(t), this.isEqualTo(t) || r(this.absoluteURL, e)
            }, t.prototype.isEqualTo = function (t) {
                return this.absoluteURL === (null != t ? t.absoluteURL : void 0)
            }, t.prototype.toCacheKey = function () {
                return this.requestURL
            }, t.prototype.toJSON = function () {
                return this.absoluteURL
            }, t.prototype.toString = function () {
                return this.absoluteURL
            }, t.prototype.valueOf = function () {
                return this.absoluteURL
            }, n = function (t) {
                return e(t.getOrigin() + t.getPath())
            }, e = function (t) {
                return i(t, "/") ? t : t + "/"
            }, r = function (t, e) {
                return t.slice(0, e.length) === e
            }, i = function (t, e) {
                return t.slice(-e.length) === e
            }, t
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.HttpRequest = function () {
            function e(e, n, i) {
                this.delegate = e, this.requestCanceled = t(this.requestCanceled, this), this.requestTimedOut = t(this.requestTimedOut, this), this.requestFailed = t(this.requestFailed, this), this.requestLoaded = t(this.requestLoaded, this), this.requestProgressed = t(this.requestProgressed, this), this.url = Turbolinks.Location.wrap(n).requestURL, this.referrer = Turbolinks.Location.wrap(i).absoluteURL, this.createXHR()
            }
            return e.NETWORK_FAILURE = 0, e.TIMEOUT_FAILURE = -1, e.timeout = 60, e.prototype.send = function () {
                var t;
                return this.xhr && !this.sent ? (this.notifyApplicationBeforeRequestStart(), this.setProgress(0), this.xhr.send(), this.sent = !0, "function" == typeof (t = this.delegate).requestStarted ? t.requestStarted() : void 0) : void 0
            }, e.prototype.cancel = function () {
                return this.xhr && this.sent ? this.xhr.abort() : void 0
            }, e.prototype.requestProgressed = function (t) {
                return t.lengthComputable ? this.setProgress(t.loaded / t.total) : void 0
            }, e.prototype.requestLoaded = function () {
                return this.endRequest((t = this, function () {
                    var e;
                    return 200 <= (e = t.xhr.status) && 300 > e ? t.delegate.requestCompletedWithResponse(t.xhr.responseText, t.xhr.getResponseHeader("Turbolinks-Location")) : (t.failed = !0, t.delegate.requestFailedWithStatusCode(t.xhr.status, t.xhr.responseText))
                }));
                var t
            }, e.prototype.requestFailed = function () {
                return this.endRequest((t = this, function () {
                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.NETWORK_FAILURE)
                }));
                var t
            }, e.prototype.requestTimedOut = function () {
                return this.endRequest((t = this, function () {
                    return t.failed = !0, t.delegate.requestFailedWithStatusCode(t.constructor.TIMEOUT_FAILURE)
                }));
                var t
            }, e.prototype.requestCanceled = function () {
                return this.endRequest()
            }, e.prototype.notifyApplicationBeforeRequestStart = function () {
                return Turbolinks.dispatch("turbolinks:request-start", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, e.prototype.notifyApplicationAfterRequestEnd = function () {
                return Turbolinks.dispatch("turbolinks:request-end", {
                    data: {
                        url: this.url,
                        xhr: this.xhr
                    }
                })
            }, e.prototype.createXHR = function () {
                return this.xhr = new XMLHttpRequest, this.xhr.open("GET", this.url, !0), this.xhr.timeout = 1e3 * this.constructor.timeout, this.xhr.setRequestHeader("Accept", "text/html, application/xhtml+xml"), this.xhr.setRequestHeader("Turbolinks-Referrer", this.referrer), this.xhr.onprogress = this.requestProgressed, this.xhr.onload = this.requestLoaded, this.xhr.onerror = this.requestFailed, this.xhr.ontimeout = this.requestTimedOut, this.xhr.onabort = this.requestCanceled
            }, e.prototype.endRequest = function (t) {
                return this.xhr ? (this.notifyApplicationAfterRequestEnd(), null != t && t.call(this), this.destroy()) : void 0
            }, e.prototype.setProgress = function (t) {
                var e;
                return this.progress = t, "function" == typeof (e = this.delegate).requestProgressed ? e.requestProgressed(this.progress) : void 0
            }, e.prototype.destroy = function () {
                var t;
                return this.setProgress(1), "function" == typeof (t = this.delegate).requestFinished && t.requestFinished(), this.delegate = null, this.xhr = null
            }, e
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.ProgressBar = function () {
            function e() {
                this.trickle = t(this.trickle, this), this.stylesheetElement = this.createStylesheetElement(), this.progressElement = this.createProgressElement()
            }
            var n;
            return n = 300, e.defaultCSS = ".turbolinks-progress-bar {\n  position: fixed;\n  display: block;\n  top: 0;\n  left: 0;\n  height: 3px;\n  background: #0076ff;\n  z-index: 9999;\n  transition: width " + n + "ms ease-out, opacity " + n / 2 + "ms " + n / 2 + "ms ease-in;\n  transform: translate3d(0, 0, 0);\n}", e.prototype.show = function () {
                return this.visible ? void 0 : (this.visible = !0, this.installStylesheetElement(), this.installProgressElement(), this.startTrickling())
            }, e.prototype.hide = function () {
                return this.visible && !this.hiding ? (this.hiding = !0, this.fadeProgressElement((t = this, function () {
                    return t.uninstallProgressElement(), t.stopTrickling(), t.visible = !1, t.hiding = !1
                }))) : void 0;
                var t
            }, e.prototype.setValue = function (t) {
                return this.value = t, this.refresh()
            }, e.prototype.installStylesheetElement = function () {
                return document.head.insertBefore(this.stylesheetElement, document.head.firstChild)
            }, e.prototype.installProgressElement = function () {
                return this.progressElement.style.width = 0, this.progressElement.style.opacity = 1, document.documentElement.insertBefore(this.progressElement, document.body), this.refresh()
            }, e.prototype.fadeProgressElement = function (t) {
                return this.progressElement.style.opacity = 0, setTimeout(t, 1.5 * n)
            }, e.prototype.uninstallProgressElement = function () {
                return this.progressElement.parentNode ? document.documentElement.removeChild(this.progressElement) : void 0
            }, e.prototype.startTrickling = function () {
                return null != this.trickleInterval ? this.trickleInterval : this.trickleInterval = setInterval(this.trickle, n)
            }, e.prototype.stopTrickling = function () {
                return clearInterval(this.trickleInterval), this.trickleInterval = null
            }, e.prototype.trickle = function () {
                return this.setValue(this.value + Math.random() / 100)
            }, e.prototype.refresh = function () {
                return requestAnimationFrame((t = this, function () {
                    return t.progressElement.style.width = 10 + 90 * t.value + "%"
                }));
                var t
            }, e.prototype.createStylesheetElement = function () {
                var t;
                return (t = document.createElement("style")).type = "text/css", t.textContent = this.constructor.defaultCSS, t
            }, e.prototype.createProgressElement = function () {
                var t;
                return (t = document.createElement("div")).className = "turbolinks-progress-bar", t
            }, e
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.BrowserAdapter = function () {
            function e(e) {
                this.controller = e, this.showProgressBar = t(this.showProgressBar, this), this.progressBar = new Turbolinks.ProgressBar
            }
            var n, i, r;
            return r = Turbolinks.HttpRequest, n = r.NETWORK_FAILURE, i = r.TIMEOUT_FAILURE, e.prototype.visitProposedToLocationWithAction = function (t, e) {
                return this.controller.startVisitToLocationWithAction(t, e)
            }, e.prototype.visitStarted = function (t) {
                return t.issueRequest(), t.changeHistory(), t.loadCachedSnapshot()
            }, e.prototype.visitRequestStarted = function (t) {
                return this.progressBar.setValue(0), t.hasCachedSnapshot() || "restore" !== t.action ? this.showProgressBarAfterDelay() : this.showProgressBar()
            }, e.prototype.visitRequestProgressed = function (t) {
                return this.progressBar.setValue(t.progress)
            }, e.prototype.visitRequestCompleted = function (t) {
                return t.loadResponse()
            }, e.prototype.visitRequestFailedWithStatusCode = function (t, e) {
                switch (e) {
                    case n:
                    case i:
                        return this.reload();
                    default:
                        return t.loadResponse()
                }
            }, e.prototype.visitRequestFinished = function () {
                return this.hideProgressBar()
            }, e.prototype.visitCompleted = function (t) {
                return t.followRedirect()
            }, e.prototype.pageInvalidated = function () {
                return this.reload()
            }, e.prototype.showProgressBarAfterDelay = function () {
                return this.progressBarTimeout = setTimeout(this.showProgressBar, this.controller.progressBarDelay)
            }, e.prototype.showProgressBar = function () {
                return this.progressBar.show()
            }, e.prototype.hideProgressBar = function () {
                return this.progressBar.hide(), clearTimeout(this.progressBarTimeout)
            }, e.prototype.reload = function () {
                return window.location.reload()
            }, e
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.History = function () {
            function e(e) {
                this.delegate = e, this.onPageLoad = t(this.onPageLoad, this), this.onPopState = t(this.onPopState, this)
            }
            return e.prototype.start = function () {
                return this.started ? void 0 : (addEventListener("popstate", this.onPopState, !1), addEventListener("load", this.onPageLoad, !1), this.started = !0)
            }, e.prototype.stop = function () {
                return this.started ? (removeEventListener("popstate", this.onPopState, !1), removeEventListener("load", this.onPageLoad, !1), this.started = !1) : void 0
            }, e.prototype.push = function (t, e) {
                return t = Turbolinks.Location.wrap(t), this.update("push", t, e)
            }, e.prototype.replace = function (t, e) {
                return t = Turbolinks.Location.wrap(t), this.update("replace", t, e)
            }, e.prototype.onPopState = function (t) {
                var e, n, i, r;
                return this.shouldHandlePopState() && (r = null != (n = t.state) ? n.turbolinks : void 0) ? (e = Turbolinks.Location.wrap(window.location), i = r.restorationIdentifier, this.delegate.historyPoppedToLocationWithRestorationIdentifier(e, i)) : void 0
            }, e.prototype.onPageLoad = function () {
                return Turbolinks.defer((t = this, function () {
                    return t.pageLoaded = !0
                }));
                var t
            }, e.prototype.shouldHandlePopState = function () {
                return this.pageIsLoaded()
            }, e.prototype.pageIsLoaded = function () {
                return this.pageLoaded || "complete" === document.readyState
            }, e.prototype.update = function (t, e, n) {
                var i;
                return i = {
                    turbolinks: {
                        restorationIdentifier: n
                    }
                }, history[t + "State"](i, null, e)
            }, e
        }()
    }.call(this),
    function () {
        Turbolinks.Snapshot = function () {
            function t(t) {
                var e, n;
                n = t.head, e = t.body, this.head = null != n ? n : document.createElement("head"), this.body = null != e ? e : document.createElement("body")
            }
            return t.wrap = function (t) {
                return t instanceof this ? t : this.fromHTML(t)
            }, t.fromHTML = function (t) {
                var e;
                return (e = document.createElement("html")).innerHTML = t, this.fromElement(e)
            }, t.fromElement = function (t) {
                return new this({
                    head: t.querySelector("head"),
                    body: t.querySelector("body")
                })
            }, t.prototype.clone = function () {
                return new t({
                    head: this.head.cloneNode(!0),
                    body: this.body.cloneNode(!0)
                })
            }, t.prototype.getRootLocation = function () {
                var t, e;
                return e = null != (t = this.getSetting("root")) ? t : "/", new Turbolinks.Location(e)
            }, t.prototype.getCacheControlValue = function () {
                return this.getSetting("cache-control")
            }, t.prototype.getElementForAnchor = function (t) {
                try {
                    return this.body.querySelector("[id='" + t + "'], a[name='" + t + "']")
                } catch (e) { }
            }, t.prototype.hasAnchor = function (t) {
                return null != this.getElementForAnchor(t)
            }, t.prototype.isPreviewable = function () {
                return "no-preview" !== this.getCacheControlValue()
            }, t.prototype.isCacheable = function () {
                return "no-cache" !== this.getCacheControlValue()
            }, t.prototype.isVisitable = function () {
                return "reload" !== this.getSetting("visit-control")
            }, t.prototype.getSetting = function (t) {
                var e, n;
                return null != (e = (n = this.head.querySelectorAll("meta[name='turbolinks-" + t + "']"))[n.length - 1]) ? e.getAttribute("content") : void 0
            }, t
        }()
    }.call(this),
    function () {
        var t = [].slice;
        Turbolinks.Renderer = function () {
            function e() { }
            var n;
            return e.render = function () {
                var e, n, i;
                return n = arguments[0], e = arguments[1], (i = function (t, e, n) {
                    n.prototype = t.prototype;
                    var i = new n,
                        r = t.apply(i, e);
                    return Object(r) === r ? r : i
                }(this, 3 <= arguments.length ? t.call(arguments, 2) : [], function () { })).delegate = n, i.render(e), i
            }, e.prototype.renderView = function (t) {
                return this.delegate.viewWillRender(this.newBody), t(), this.delegate.viewRendered(this.newBody)
            }, e.prototype.invalidateView = function () {
                return this.delegate.viewInvalidated()
            }, e.prototype.createScriptElement = function (t) {
                var e;
                return "false" === t.getAttribute("data-turbolinks-eval") ? t : ((e = document.createElement("script")).textContent = t.textContent, e.async = !1, n(e, t), e)
            }, n = function (t, e) {
                var n, i, r, o, s, a, l;
                for (a = [], n = 0, i = (o = e.attributes).length; i > n; n++) r = (s = o[n]).name, l = s.value, a.push(t.setAttribute(r, l));
                return a
            }, e
        }()
    }.call(this),
    function () {
        Turbolinks.HeadDetails = function () {
            function t(t) {
                var e, n, o, s, a, l;
                for (this.element = t, this.elements = {}, o = 0, a = (l = this.element.childNodes).length; a > o; o++)(n = l[o]).nodeType === Node.ELEMENT_NODE && (s = n.outerHTML, (null != (e = this.elements)[s] ? e[s] : e[s] = {
                    type: r(n),
                    tracked: i(n),
                    elements: []
                }).elements.push(n))
            }
            var e, n, i, r;
            return t.prototype.hasElementWithKey = function (t) {
                return t in this.elements
            }, t.prototype.getTrackedElementSignature = function () {
                var t;
                return function () {
                    var e, n;
                    for (t in n = [], e = this.elements) e[t].tracked && n.push(t);
                    return n
                }.call(this).join("")
            }, t.prototype.getScriptElementsNotInDetails = function (t) {
                return this.getElementsMatchingTypeNotInDetails("script", t)
            }, t.prototype.getStylesheetElementsNotInDetails = function (t) {
                return this.getElementsMatchingTypeNotInDetails("stylesheet", t)
            }, t.prototype.getElementsMatchingTypeNotInDetails = function (t, e) {
                var n, i, r, o, s, a;
                for (i in s = [], r = this.elements) a = (o = r[i]).type, n = o.elements, a !== t || e.hasElementWithKey(i) || s.push(n[0]);
                return s
            }, t.prototype.getProvisionalElements = function () {
                var t, e, n, i, r, o, s;
                for (e in n = [], i = this.elements) s = (r = i[e]).type, o = r.tracked, t = r.elements, null != s || o ? t.length > 1 && n.push.apply(n, t.slice(1)) : n.push.apply(n, t);
                return n
            }, r = function (t) {
                return e(t) ? "script" : n(t) ? "stylesheet" : void 0
            }, i = function (t) {
                return "reload" === t.getAttribute("data-turbolinks-track")
            }, e = function (t) {
                return "script" === t.tagName.toLowerCase()
            }, n = function (t) {
                var e;
                return "style" === (e = t.tagName.toLowerCase()) || "link" === e && "stylesheet" === t.getAttribute("rel")
            }, t
        }()
    }.call(this),
    function () {
        var t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        },
            e = {}.hasOwnProperty;
        Turbolinks.SnapshotRenderer = function (e) {
            function n(t, e, n) {
                this.currentSnapshot = t, this.newSnapshot = e, this.isPreview = n, this.currentHeadDetails = new Turbolinks.HeadDetails(this.currentSnapshot.head), this.newHeadDetails = new Turbolinks.HeadDetails(this.newSnapshot.head), this.newBody = this.newSnapshot.body
            }
            return t(n, e), n.prototype.render = function (t) {
                return this.shouldRender() ? (this.mergeHead(), this.renderView((e = this, function () {
                    return e.replaceBody(), e.isPreview || e.focusFirstAutofocusableElement(), t()
                }))) : this.invalidateView();
                var e
            }, n.prototype.mergeHead = function () {
                return this.copyNewHeadStylesheetElements(), this.copyNewHeadScriptElements(), this.removeCurrentHeadProvisionalElements(), this.copyNewHeadProvisionalElements()
            }, n.prototype.replaceBody = function () {
                return this.activateBodyScriptElements(), this.importBodyPermanentElements(), this.assignNewBody()
            }, n.prototype.shouldRender = function () {
                return this.newSnapshot.isVisitable() && this.trackedElementsAreIdentical()
            }, n.prototype.trackedElementsAreIdentical = function () {
                return this.currentHeadDetails.getTrackedElementSignature() === this.newHeadDetails.getTrackedElementSignature()
            }, n.prototype.copyNewHeadStylesheetElements = function () {
                var t, e, n, i, r;
                for (r = [], e = 0, n = (i = this.getNewHeadStylesheetElements()).length; n > e; e++) t = i[e], r.push(document.head.appendChild(t));
                return r
            }, n.prototype.copyNewHeadScriptElements = function () {
                var t, e, n, i, r;
                for (r = [], e = 0, n = (i = this.getNewHeadScriptElements()).length; n > e; e++) t = i[e], r.push(document.head.appendChild(this.createScriptElement(t)));
                return r
            }, n.prototype.removeCurrentHeadProvisionalElements = function () {
                var t, e, n, i, r;
                for (r = [], e = 0, n = (i = this.getCurrentHeadProvisionalElements()).length; n > e; e++) t = i[e], r.push(document.head.removeChild(t));
                return r
            }, n.prototype.copyNewHeadProvisionalElements = function () {
                var t, e, n, i, r;
                for (r = [], e = 0, n = (i = this.getNewHeadProvisionalElements()).length; n > e; e++) t = i[e], r.push(document.head.appendChild(t));
                return r
            }, n.prototype.importBodyPermanentElements = function () {
                var t, e, n, i, r, o;
                for (o = [], e = 0, n = (i = this.getNewBodyPermanentElements()).length; n > e; e++) r = i[e], (t = this.findCurrentBodyPermanentElement(r)) ? o.push(r.parentNode.replaceChild(t, r)) : o.push(void 0);
                return o
            }, n.prototype.activateBodyScriptElements = function () {
                var t, e, n, i, r, o;
                for (o = [], e = 0, n = (i = this.getNewBodyScriptElements()).length; n > e; e++) r = i[e], t = this.createScriptElement(r), o.push(r.parentNode.replaceChild(t, r));
                return o
            }, n.prototype.assignNewBody = function () {
                return document.body = this.newBody
            }, n.prototype.focusFirstAutofocusableElement = function () {
                var t;
                return null != (t = this.findFirstAutofocusableElement()) ? t.focus() : void 0
            }, n.prototype.getNewHeadStylesheetElements = function () {
                return this.newHeadDetails.getStylesheetElementsNotInDetails(this.currentHeadDetails)
            }, n.prototype.getNewHeadScriptElements = function () {
                return this.newHeadDetails.getScriptElementsNotInDetails(this.currentHeadDetails)
            }, n.prototype.getCurrentHeadProvisionalElements = function () {
                return this.currentHeadDetails.getProvisionalElements()
            }, n.prototype.getNewHeadProvisionalElements = function () {
                return this.newHeadDetails.getProvisionalElements()
            }, n.prototype.getNewBodyPermanentElements = function () {
                return this.newBody.querySelectorAll("[id][data-turbolinks-permanent]")
            }, n.prototype.findCurrentBodyPermanentElement = function (t) {
                return document.body.querySelector("#" + t.id + "[data-turbolinks-permanent]")
            }, n.prototype.getNewBodyScriptElements = function () {
                return this.newBody.querySelectorAll("script")
            }, n.prototype.findFirstAutofocusableElement = function () {
                return document.body.querySelector("[autofocus]")
            }, n
        }(Turbolinks.Renderer)
    }.call(this),
    function () {
        var t = function (t, n) {
            function i() {
                this.constructor = t
            }
            for (var r in n) e.call(n, r) && (t[r] = n[r]);
            return i.prototype = n.prototype, t.prototype = new i, t.__super__ = n.prototype, t
        },
            e = {}.hasOwnProperty;
        Turbolinks.ErrorRenderer = function (e) {
            function n(t) {
                this.html = t
            }
            return t(n, e), n.prototype.render = function (t) {
                return this.renderView((e = this, function () {
                    return e.replaceDocumentHTML(), e.activateBodyScriptElements(), t()
                }));
                var e
            }, n.prototype.replaceDocumentHTML = function () {
                return document.documentElement.innerHTML = this.html
            }, n.prototype.activateBodyScriptElements = function () {
                var t, e, n, i, r, o;
                for (o = [], e = 0, n = (i = this.getScriptElements()).length; n > e; e++) r = i[e], t = this.createScriptElement(r), o.push(r.parentNode.replaceChild(t, r));
                return o
            }, n.prototype.getScriptElements = function () {
                return document.documentElement.querySelectorAll("script")
            }, n
        }(Turbolinks.Renderer)
    }.call(this),
    function () {
        Turbolinks.View = function () {
            function t(t) {
                this.delegate = t, this.element = document.documentElement
            }
            return t.prototype.getRootLocation = function () {
                return this.getSnapshot().getRootLocation()
            }, t.prototype.getElementForAnchor = function (t) {
                return this.getSnapshot().getElementForAnchor(t)
            }, t.prototype.getSnapshot = function () {
                return Turbolinks.Snapshot.fromElement(this.element)
            }, t.prototype.render = function (t, e) {
                var n, i, r;
                return r = t.snapshot, n = t.error, i = t.isPreview, this.markAsPreview(i), null != r ? this.renderSnapshot(r, i, e) : this.renderError(n, e)
            }, t.prototype.markAsPreview = function (t) {
                return t ? this.element.setAttribute("data-turbolinks-preview", "") : this.element.removeAttribute("data-turbolinks-preview")
            }, t.prototype.renderSnapshot = function (t, e, n) {
                return Turbolinks.SnapshotRenderer.render(this.delegate, n, this.getSnapshot(), Turbolinks.Snapshot.wrap(t), e)
            }, t.prototype.renderError = function (t, e) {
                return Turbolinks.ErrorRenderer.render(this.delegate, e, t)
            }, t
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.ScrollManager = function () {
            function e(e) {
                this.delegate = e, this.onScroll = t(this.onScroll, this), this.onScroll = Turbolinks.throttle(this.onScroll)
            }
            return e.prototype.start = function () {
                return this.started ? void 0 : (addEventListener("scroll", this.onScroll, !1), this.onScroll(), this.started = !0)
            }, e.prototype.stop = function () {
                return this.started ? (removeEventListener("scroll", this.onScroll, !1), this.started = !1) : void 0
            }, e.prototype.scrollToElement = function (t) {
                return t.scrollIntoView()
            }, e.prototype.scrollToPosition = function (t) {
                var e, n;
                return e = t.x, n = t.y, window.scrollTo(e, n)
            }, e.prototype.onScroll = function () {
                return this.updatePosition({
                    x: window.pageXOffset,
                    y: window.pageYOffset
                })
            }, e.prototype.updatePosition = function (t) {
                var e;
                return this.position = t, null != (e = this.delegate) ? e.scrollPositionChanged(this.position) : void 0
            }, e
        }()
    }.call(this),
    function () {
        Turbolinks.SnapshotCache = function () {
            function t(t) {
                this.size = t, this.keys = [], this.snapshots = {}
            }
            var e;
            return t.prototype.has = function (t) {
                return e(t) in this.snapshots
            }, t.prototype.get = function (t) {
                var e;
                if (this.has(t)) return e = this.read(t), this.touch(t), e
            }, t.prototype.put = function (t, e) {
                return this.write(t, e), this.touch(t), e
            }, t.prototype.read = function (t) {
                var n;
                return n = e(t), this.snapshots[n]
            }, t.prototype.write = function (t, n) {
                var i;
                return i = e(t), this.snapshots[i] = n
            }, t.prototype.touch = function (t) {
                var n, i;
                return i = e(t), (n = this.keys.indexOf(i)) > -1 && this.keys.splice(n, 1), this.keys.unshift(i), this.trim()
            }, t.prototype.trim = function () {
                var t, e, n, i, r;
                for (r = [], t = 0, n = (i = this.keys.splice(this.size)).length; n > t; t++) e = i[t], r.push(delete this.snapshots[e]);
                return r
            }, e = function (t) {
                return Turbolinks.Location.wrap(t).toCacheKey()
            }, t
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.Visit = function () {
            function e(e, n, i) {
                this.controller = e, this.action = i, this.performScroll = t(this.performScroll, this), this.identifier = Turbolinks.uuid(), this.location = Turbolinks.Location.wrap(n), this.adapter = this.controller.adapter, this.state = "initialized", this.timingMetrics = {}
            }
            var n;
            return e.prototype.start = function () {
                return "initialized" === this.state ? (this.recordTimingMetric("visitStart"), this.state = "started", this.adapter.visitStarted(this)) : void 0
            }, e.prototype.cancel = function () {
                var t;
                return "started" === this.state ? (null != (t = this.request) && t.cancel(), this.cancelRender(), this.state = "canceled") : void 0
            }, e.prototype.complete = function () {
                var t;
                return "started" === this.state ? (this.recordTimingMetric("visitEnd"), this.state = "completed", "function" == typeof (t = this.adapter).visitCompleted && t.visitCompleted(this), this.controller.visitCompleted(this)) : void 0
            }, e.prototype.fail = function () {
                var t;
                return "started" === this.state ? (this.state = "failed", "function" == typeof (t = this.adapter).visitFailed ? t.visitFailed(this) : void 0) : void 0
            }, e.prototype.changeHistory = function () {
                var t, e;
                return this.historyChanged ? void 0 : (t = this.location.isEqualTo(this.referrer) ? "replace" : this.action, e = n(t), this.controller[e](this.location, this.restorationIdentifier), this.historyChanged = !0)
            }, e.prototype.issueRequest = function () {
                return this.shouldIssueRequest() && null == this.request ? (this.progress = 0, this.request = new Turbolinks.HttpRequest(this, this.location, this.referrer), this.request.send()) : void 0
            }, e.prototype.getCachedSnapshot = function () {
                var t;
                return !(t = this.controller.getCachedSnapshotForLocation(this.location)) || null != this.location.anchor && !t.hasAnchor(this.location.anchor) || "restore" !== this.action && !t.isPreviewable() ? void 0 : t
            }, e.prototype.hasCachedSnapshot = function () {
                return null != this.getCachedSnapshot()
            }, e.prototype.loadCachedSnapshot = function () {
                var t, e;
                return (e = this.getCachedSnapshot()) ? (t = this.shouldIssueRequest(), this.render(function () {
                    var n;
                    return this.cacheSnapshot(), this.controller.render({
                        snapshot: e,
                        isPreview: t
                    }, this.performScroll), "function" == typeof (n = this.adapter).visitRendered && n.visitRendered(this), t ? void 0 : this.complete()
                })) : void 0
            }, e.prototype.loadResponse = function () {
                return null != this.response ? this.render(function () {
                    var t, e;
                    return this.cacheSnapshot(), this.request.failed ? (this.controller.render({
                        error: this.response
                    }, this.performScroll), "function" == typeof (t = this.adapter).visitRendered && t.visitRendered(this), this.fail()) : (this.controller.render({
                        snapshot: this.response
                    }, this.performScroll), "function" == typeof (e = this.adapter).visitRendered && e.visitRendered(this), this.complete())
                }) : void 0
            }, e.prototype.followRedirect = function () {
                return this.redirectedToLocation && !this.followedRedirect ? (this.location = this.redirectedToLocation, this.controller.replaceHistoryWithLocationAndRestorationIdentifier(this.redirectedToLocation, this.restorationIdentifier), this.followedRedirect = !0) : void 0
            }, e.prototype.requestStarted = function () {
                var t;
                return this.recordTimingMetric("requestStart"), "function" == typeof (t = this.adapter).visitRequestStarted ? t.visitRequestStarted(this) : void 0
            }, e.prototype.requestProgressed = function (t) {
                var e;
                return this.progress = t, "function" == typeof (e = this.adapter).visitRequestProgressed ? e.visitRequestProgressed(this) : void 0
            }, e.prototype.requestCompletedWithResponse = function (t, e) {
                return this.response = t, null != e && (this.redirectedToLocation = Turbolinks.Location.wrap(e)), this.adapter.visitRequestCompleted(this)
            }, e.prototype.requestFailedWithStatusCode = function (t, e) {
                return this.response = e, this.adapter.visitRequestFailedWithStatusCode(this, t)
            }, e.prototype.requestFinished = function () {
                var t;
                return this.recordTimingMetric("requestEnd"), "function" == typeof (t = this.adapter).visitRequestFinished ? t.visitRequestFinished(this) : void 0
            }, e.prototype.performScroll = function () {
                return this.scrolled ? void 0 : ("restore" === this.action ? this.scrollToRestoredPosition() || this.scrollToTop() : this.scrollToAnchor() || this.scrollToTop(), this.scrolled = !0)
            }, e.prototype.scrollToRestoredPosition = function () {
                var t, e;
                return null != (t = null != (e = this.restorationData) ? e.scrollPosition : void 0) ? (this.controller.scrollToPosition(t), !0) : void 0
            }, e.prototype.scrollToAnchor = function () {
                return null != this.location.anchor ? (this.controller.scrollToAnchor(this.location.anchor), !0) : void 0
            }, e.prototype.scrollToTop = function () {
                return this.controller.scrollToPosition({
                    x: 0,
                    y: 0
                })
            }, e.prototype.recordTimingMetric = function (t) {
                var e;
                return null != (e = this.timingMetrics)[t] ? e[t] : e[t] = (new Date).getTime()
            }, e.prototype.getTimingMetrics = function () {
                return Turbolinks.copyObject(this.timingMetrics)
            }, n = function (t) {
                switch (t) {
                    case "replace":
                        return "replaceHistoryWithLocationAndRestorationIdentifier";
                    case "advance":
                    case "restore":
                        return "pushHistoryWithLocationAndRestorationIdentifier"
                }
            }, e.prototype.shouldIssueRequest = function () {
                return "restore" !== this.action || !this.hasCachedSnapshot()
            }, e.prototype.cacheSnapshot = function () {
                return this.snapshotCached ? void 0 : (this.controller.cacheSnapshot(), this.snapshotCached = !0)
            }, e.prototype.render = function (t) {
                return this.cancelRender(), this.frame = requestAnimationFrame((e = this, function () {
                    return e.frame = null, t.call(e)
                }));
                var e
            }, e.prototype.cancelRender = function () {
                return this.frame ? cancelAnimationFrame(this.frame) : void 0
            }, e
        }()
    }.call(this),
    function () {
        var t = function (t, e) {
            return function () {
                return t.apply(e, arguments)
            }
        };
        Turbolinks.Controller = function () {
            function e() {
                this.clickBubbled = t(this.clickBubbled, this), this.clickCaptured = t(this.clickCaptured, this), this.pageLoaded = t(this.pageLoaded, this), this.history = new Turbolinks.History(this), this.view = new Turbolinks.View(this), this.scrollManager = new Turbolinks.ScrollManager(this), this.restorationData = {}, this.clearCache(), this.setProgressBarDelay(500)
            }
            return e.prototype.start = function () {
                return Turbolinks.supported && !this.started ? (addEventListener("click", this.clickCaptured, !0), addEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.start(), this.startHistory(), this.started = !0, this.enabled = !0) : void 0
            }, e.prototype.disable = function () {
                return this.enabled = !1
            }, e.prototype.stop = function () {
                return this.started ? (removeEventListener("click", this.clickCaptured, !0), removeEventListener("DOMContentLoaded", this.pageLoaded, !1), this.scrollManager.stop(), this.stopHistory(), this.started = !1) : void 0
            }, e.prototype.clearCache = function () {
                return this.cache = new Turbolinks.SnapshotCache(10)
            }, e.prototype.visit = function (t, e) {
                var n, i;
                return null == e && (e = {}), t = Turbolinks.Location.wrap(t), this.applicationAllowsVisitingLocation(t) ? this.locationIsVisitable(t) ? (n = null != (i = e.action) ? i : "advance", this.adapter.visitProposedToLocationWithAction(t, n)) : window.location = t : void 0
            }, e.prototype.startVisitToLocationWithAction = function (t, e, n) {
                var i;
                return Turbolinks.supported ? (i = this.getRestorationDataForIdentifier(n), this.startVisit(t, e, {
                    restorationData: i
                })) : window.location = t
            }, e.prototype.setProgressBarDelay = function (t) {
                return this.progressBarDelay = t
            }, e.prototype.startHistory = function () {
                return this.location = Turbolinks.Location.wrap(window.location), this.restorationIdentifier = Turbolinks.uuid(), this.history.start(), this.history.replace(this.location, this.restorationIdentifier)
            }, e.prototype.stopHistory = function () {
                return this.history.stop()
            }, e.prototype.pushHistoryWithLocationAndRestorationIdentifier = function (t, e) {
                return this.restorationIdentifier = e, this.location = Turbolinks.Location.wrap(t), this.history.push(this.location, this.restorationIdentifier)
            }, e.prototype.replaceHistoryWithLocationAndRestorationIdentifier = function (t, e) {
                return this.restorationIdentifier = e, this.location = Turbolinks.Location.wrap(t), this.history.replace(this.location, this.restorationIdentifier)
            }, e.prototype.historyPoppedToLocationWithRestorationIdentifier = function (t, e) {
                var n;
                return this.restorationIdentifier = e, this.enabled ? (n = this.getRestorationDataForIdentifier(this.restorationIdentifier), this.startVisit(t, "restore", {
                    restorationIdentifier: this.restorationIdentifier,
                    restorationData: n,
                    historyChanged: !0
                }), this.location = Turbolinks.Location.wrap(t)) : this.adapter.pageInvalidated()
            }, e.prototype.getCachedSnapshotForLocation = function (t) {
                var e;
                return (e = this.cache.get(t)) ? e.clone() : void 0
            }, e.prototype.shouldCacheSnapshot = function () {
                return this.view.getSnapshot().isCacheable()
            }, e.prototype.cacheSnapshot = function () {
                var t;
                return this.shouldCacheSnapshot() ? (this.notifyApplicationBeforeCachingSnapshot(), t = this.view.getSnapshot(), this.cache.put(this.lastRenderedLocation, t.clone())) : void 0
            }, e.prototype.scrollToAnchor = function (t) {
                var e;
                return (e = this.view.getElementForAnchor(t)) ? this.scrollToElement(e) : this.scrollToPosition({
                    x: 0,
                    y: 0
                })
            }, e.prototype.scrollToElement = function (t) {
                return this.scrollManager.scrollToElement(t)
            }, e.prototype.scrollToPosition = function (t) {
                return this.scrollManager.scrollToPosition(t)
            }, e.prototype.scrollPositionChanged = function (t) {
                return this.getCurrentRestorationData().scrollPosition = t
            }, e.prototype.render = function (t, e) {
                return this.view.render(t, e)
            }, e.prototype.viewInvalidated = function () {
                return this.adapter.pageInvalidated()
            }, e.prototype.viewWillRender = function (t) {
                return this.notifyApplicationBeforeRender(t)
            }, e.prototype.viewRendered = function () {
                return this.lastRenderedLocation = this.currentVisit.location, this.notifyApplicationAfterRender()
            }, e.prototype.pageLoaded = function () {
                return this.lastRenderedLocation = this.location, this.notifyApplicationAfterPageLoad()
            }, e.prototype.clickCaptured = function () {
                return removeEventListener("click", this.clickBubbled, !1), addEventListener("click", this.clickBubbled, !1)
            }, e.prototype.clickBubbled = function (t) {
                var e, n, i;
                return this.enabled && this.clickEventIsSignificant(t) && (n = this.getVisitableLinkForNode(t.target)) && (i = this.getVisitableLocationForLink(n)) && this.applicationAllowsFollowingLinkToLocation(n, i) ? (t.preventDefault(), e = this.getActionForLink(n), this.visit(i, {
                    action: e
                })) : void 0
            }, e.prototype.applicationAllowsFollowingLinkToLocation = function (t, e) {
                return !this.notifyApplicationAfterClickingLinkToLocation(t, e).defaultPrevented
            }, e.prototype.applicationAllowsVisitingLocation = function (t) {
                return !this.notifyApplicationBeforeVisitingLocation(t).defaultPrevented
            }, e.prototype.notifyApplicationAfterClickingLinkToLocation = function (t, e) {
                return Turbolinks.dispatch("turbolinks:click", {
                    target: t,
                    data: {
                        url: e.absoluteURL
                    },
                    cancelable: !0
                })
            }, e.prototype.notifyApplicationBeforeVisitingLocation = function (t) {
                return Turbolinks.dispatch("turbolinks:before-visit", {
                    data: {
                        url: t.absoluteURL
                    },
                    cancelable: !0
                })
            }, e.prototype.notifyApplicationAfterVisitingLocation = function (t) {
                return Turbolinks.dispatch("turbolinks:visit", {
                    data: {
                        url: t.absoluteURL
                    }
                })
            }, e.prototype.notifyApplicationBeforeCachingSnapshot = function () {
                return Turbolinks.dispatch("turbolinks:before-cache")
            }, e.prototype.notifyApplicationBeforeRender = function (t) {
                return Turbolinks.dispatch("turbolinks:before-render", {
                    data: {
                        newBody: t
                    }
                })
            }, e.prototype.notifyApplicationAfterRender = function () {
                return Turbolinks.dispatch("turbolinks:render")
            }, e.prototype.notifyApplicationAfterPageLoad = function (t) {
                return null == t && (t = {}), Turbolinks.dispatch("turbolinks:load", {
                    data: {
                        url: this.location.absoluteURL,
                        timing: t
                    }
                })
            }, e.prototype.startVisit = function (t, e, n) {
                var i;
                return null != (i = this.currentVisit) && i.cancel(), this.currentVisit = this.createVisit(t, e, n), this.currentVisit.start(), this.notifyApplicationAfterVisitingLocation(t)
            }, e.prototype.createVisit = function (t, e, n) {
                var i, r, o, s, a;
                return s = (r = null != n ? n : {}).restorationIdentifier, o = r.restorationData, i = r.historyChanged, (a = new Turbolinks.Visit(this, t, e)).restorationIdentifier = null != s ? s : Turbolinks.uuid(), a.restorationData = Turbolinks.copyObject(o), a.historyChanged = i, a.referrer = this.location, a
            }, e.prototype.visitCompleted = function (t) {
                return this.notifyApplicationAfterPageLoad(t.getTimingMetrics())
            }, e.prototype.clickEventIsSignificant = function (t) {
                return !(t.defaultPrevented || t.target.isContentEditable || t.which > 1 || t.altKey || t.ctrlKey || t.metaKey || t.shiftKey)
            }, e.prototype.getVisitableLinkForNode = function (t) {
                return this.nodeIsVisitable(t) ? Turbolinks.closest(t, "a[href]:not([target]):not([download])") : void 0
            }, e.prototype.getVisitableLocationForLink = function (t) {
                var e;
                return e = new Turbolinks.Location(t.getAttribute("href")), this.locationIsVisitable(e) ? e : void 0
            }, e.prototype.getActionForLink = function (t) {
                var e;
                return null != (e = t.getAttribute("data-turbolinks-action")) ? e : "advance"
            }, e.prototype.nodeIsVisitable = function (t) {
                var e;
                return !(e = Turbolinks.closest(t, "[data-turbolinks]")) || "false" !== e.getAttribute("data-turbolinks")
            }, e.prototype.locationIsVisitable = function (t) {
                return t.isPrefixedBy(this.view.getRootLocation()) && t.isHTML()
            }, e.prototype.getCurrentRestorationData = function () {
                return this.getRestorationDataForIdentifier(this.restorationIdentifier)
            }, e.prototype.getRestorationDataForIdentifier = function (t) {
                var e;
                return null != (e = this.restorationData)[t] ? e[t] : e[t] = {}
            }, e
        }()
    }.call(this),
    function () {
        ! function () {
            var t, e;
            if ((t = e = document.currentScript) && !e.hasAttribute("data-turbolinks-suppress-warning"))
                for (; t = t.parentNode;)
                    if (t === document.body) return console.warn("You are loading Turbolinks from a <script> element inside the <body> element. This is probably not what you meant to do!\n\nLoad your application\u2019s JavaScript bundle inside the <head> element instead. <script> elements in <body> are evaluated with each page change.\n\nFor more information, see: https://github.com/turbolinks/turbolinks#working-with-script-elements\n\n\u2014\u2014\nSuppress this warning by adding a `data-turbolinks-suppress-warning` attribute to: %s", e.outerHTML)
        }()
    }.call(this),
    function () {
        var t, e, n;
        Turbolinks.start = function () {
            return e() ? (null == Turbolinks.controller && (Turbolinks.controller = t()), Turbolinks.controller.start()) : void 0
        }, e = function () {
            return null == window.Turbolinks && (window.Turbolinks = Turbolinks), n()
        }, t = function () {
            var t;
            return (t = new Turbolinks.Controller).adapter = new Turbolinks.BrowserAdapter(t), t
        }, (n = function () {
            return window.Turbolinks === Turbolinks
        })() && Turbolinks.start()
    }.call(this),
    function (t) {
        "use strict";
        var e = function (n, i) {
            this.options = t.extend({}, e.DEFAULTS, i), this.$window = t(window).on("scroll.bs.affix.data-api", t.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", t.proxy(this.checkPositionWithEventLoop, this)), this.$element = t(n), this.affixed = this.unpin = this.pinnedOffset = null, this.checkPosition()
        };
        e.RESET = "affix affix-top affix-bottom", e.DEFAULTS = {
            offset: 0
        }, e.prototype.getPinnedOffset = function () {
            if (this.pinnedOffset) return this.pinnedOffset;
            this.$element.removeClass(e.RESET).addClass("affix");
            var t = this.$window.scrollTop(),
                n = this.$element.offset();
            return this.pinnedOffset = n.top - t
        }, e.prototype.checkPositionWithEventLoop = function () {
            setTimeout(t.proxy(this.checkPosition, this), 1)
        }, e.prototype.checkPosition = function () {
            if (this.$element.is(":visible")) {
                var n = t(document).height(),
                    i = this.$window.scrollTop(),
                    r = this.$element.offset(),
                    o = this.options.offset,
                    s = o.top,
                    a = o.bottom;
                "object" != typeof o && (a = s = o), "function" == typeof s && (s = o.top(this.$element)), "function" == typeof a && (a = o.bottom(this.$element));
                var l = !(null != this.unpin && i + this.unpin <= r.top) && (null != a && r.top + this.$element.height() >= n - a ? "bottom" : null != s && i <= s && "top");
                if (this.affixed !== l) {
                    null != this.unpin && this.$element.css("top", "");
                    var u = "affix" + (l ? "-" + l : ""),
                        c = t.Event(u + ".bs.affix");
                    this.$element.trigger(c), c.isDefaultPrevented() || (this.affixed = l, this.unpin = "bottom" == l ? this.getPinnedOffset() : null, this.$element.removeClass(e.RESET).addClass(u).trigger(t.Event(u.replace("affix", "affixed"))), "bottom" == l && this.$element.offset({
                        top: r.top
                    }))
                }
            }
        };
        var n = t.fn.affix;
        t.fn.affix = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.affix"),
                    o = "object" == typeof n && n;
                r || i.data("bs.affix", r = new e(this, o)), "string" == typeof n && r[n]()
            })
        }, t.fn.affix.Constructor = e, t.fn.affix.noConflict = function () {
            return t.fn.affix = n, this
        }, t(window).on("load", function () {
            t('[data-spy="affix"]').each(function () {
                var e = t(this),
                    n = e.data();
                n.offset = n.offset || {}, n.offsetBottom && (n.offset.bottom = n.offsetBottom), n.offsetTop && (n.offset.top = n.offsetTop), e.affix(n)
            })
        })
    }(jQuery),
    function (t) {
        "use strict";
        var e = '[data-dismiss="alert"]',
            n = function (n) {
                t(n).on("click", e, this.close)
            };
        n.prototype.close = function (e) {
            function n() {
                o.trigger("closed.bs.alert").remove()
            }
            var i = t(this),
                r = i.attr("data-target");
            r || (r = (r = i.attr("href")) && r.replace(/.*(?=#[^\s]*$)/, ""));
            var o = t(r);
            e && e.preventDefault(), o.length || (o = i.hasClass("alert") ? i : i.parent()), o.trigger(e = t.Event("close.bs.alert")), e.isDefaultPrevented() || (o.removeClass("in"), t.support.transition && o.hasClass("fade") ? o.one(t.support.transition.end, n).emulateTransitionEnd(150) : n())
        };
        var i = t.fn.alert;
        t.fn.alert = function (e) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.alert");
                r || i.data("bs.alert", r = new n(this)), "string" == typeof e && r[e].call(i)
            })
        }, t.fn.alert.Constructor = n, t.fn.alert.noConflict = function () {
            return t.fn.alert = i, this
        }, t(document).on("click.bs.alert.data-api", e, n.prototype.close)
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.isLoading = !1
        };
        e.DEFAULTS = {
            loadingText: "loading..."
        }, e.prototype.setState = function (e) {
            var n = "disabled",
                i = this.$element,
                r = i.is("input") ? "val" : "html",
                o = i.data();
            e += "Text", o.resetText || i.data("resetText", i[r]()), i[r](o[e] || this.options[e]), setTimeout(t.proxy(function () {
                "loadingText" == e ? (this.isLoading = !0, i.addClass(n).attr(n, n)) : this.isLoading && (this.isLoading = !1, i.removeClass(n).removeAttr(n))
            }, this), 0)
        }, e.prototype.toggle = function () {
            var t = !0,
                e = this.$element.closest('[data-toggle="buttons"]');
            if (e.length) {
                var n = this.$element.find("input");
                "radio" == n.prop("type") && (n.prop("checked") && this.$element.hasClass("active") ? t = !1 : e.find(".active").removeClass("active")), t && n.prop("checked", !this.$element.hasClass("active")).trigger("change")
            }
            t && this.$element.toggleClass("active")
        };
        var n = t.fn.button;
        t.fn.button = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.button"),
                    o = "object" == typeof n && n;
                r || i.data("bs.button", r = new e(this, o)), "toggle" == n ? r.toggle() : n && r.setState(n)
            })
        }, t.fn.button.Constructor = e, t.fn.button.noConflict = function () {
            return t.fn.button = n, this
        }, t(document).on("click.bs.button.data-api", "[data-toggle^=button]", function (e) {
            var n = t(e.target);
            n.hasClass("btn") || (n = n.closest(".btn")), n.button("toggle"), e.preventDefault()
        })
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e, n) {
            this.$element = t(e), this.$indicators = this.$element.find(".carousel-indicators"), this.options = n, this.paused = this.sliding = this.interval = this.$active = this.$items = null, "hover" == this.options.pause && this.$element.on("mouseenter", t.proxy(this.pause, this)).on("mouseleave", t.proxy(this.cycle, this))
        };
        e.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0
        }, e.prototype.cycle = function (e) {
            return e || (this.paused = !1), this.interval && clearInterval(this.interval), this.options.interval && !this.paused && (this.interval = setInterval(t.proxy(this.next, this), this.options.interval)), this
        }, e.prototype.getActiveIndex = function () {
            return this.$active = this.$element.find(".item.active"), this.$items = this.$active.parent().children(".item"), this.$items.index(this.$active)
        }, e.prototype.to = function (e) {
            var n = this,
                i = this.getActiveIndex();
            if (!(e > this.$items.length - 1 || e < 0)) return this.sliding ? this.$element.one("slid.bs.carousel", function () {
                n.to(e)
            }) : i == e ? this.pause().cycle() : this.slide(e > i ? "next" : "prev", t(this.$items[e]))
        }, e.prototype.pause = function (e) {
            return e || (this.paused = !0), this.$element.find(".next, .prev").length && t.support.transition && (this.$element.trigger(t.support.transition.end), this.cycle(!0)), this.interval = clearInterval(this.interval), this
        }, e.prototype.next = function () {
            if (!this.sliding) return this.slide("next")
        }, e.prototype.prev = function () {
            if (!this.sliding) return this.slide("prev")
        }, e.prototype.slide = function (e, n) {
            var i = this.$element.find(".item.active"),
                r = n || i[e](),
                o = this.interval,
                s = "next" == e ? "left" : "right",
                a = "next" == e ? "first" : "last",
                l = this;
            if (!r.length) {
                if (!this.options.wrap) return;
                r = this.$element.find(".item")[a]()
            }
            if (r.hasClass("active")) return this.sliding = !1;
            var u = t.Event("slide.bs.carousel", {
                relatedTarget: r[0],
                direction: s
            });
            return this.$element.trigger(u), u.isDefaultPrevented() ? void 0 : (this.sliding = !0, o && this.pause(), this.$indicators.length && (this.$indicators.find(".active").removeClass("active"), this.$element.one("slid.bs.carousel", function () {
                var e = t(l.$indicators.children()[l.getActiveIndex()]);
                e && e.addClass("active")
            })), t.support.transition && this.$element.hasClass("slide") ? (r.addClass(e), r[0].offsetWidth, i.addClass(s), r.addClass(s), i.one(t.support.transition.end, function () {
                r.removeClass([e, s].join(" ")).addClass("active"), i.removeClass(["active", s].join(" ")), l.sliding = !1, setTimeout(function () {
                    l.$element.trigger("slid.bs.carousel")
                }, 0)
            }).emulateTransitionEnd(1e3 * i.css("transition-duration").slice(0, -1))) : (i.removeClass("active"), r.addClass("active"), this.sliding = !1, this.$element.trigger("slid.bs.carousel")), o && this.cycle(), this)
        };
        var n = t.fn.carousel;
        t.fn.carousel = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.carousel"),
                    o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n),
                    s = "string" == typeof n ? n : o.slide;
                r || i.data("bs.carousel", r = new e(this, o)), "number" == typeof n ? r.to(n) : s ? r[s]() : o.interval && r.pause().cycle()
            })
        }, t.fn.carousel.Constructor = e, t.fn.carousel.noConflict = function () {
            return t.fn.carousel = n, this
        }, t(document).on("click.bs.carousel.data-api", "[data-slide], [data-slide-to]", function (e) {
            var n, i = t(this),
                r = t(i.attr("data-target") || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, "")),
                o = t.extend({}, r.data(), i.data()),
                s = i.attr("data-slide-to");
            s && (o.interval = !1), r.carousel(o), (s = i.attr("data-slide-to")) && r.data("bs.carousel").to(s), e.preventDefault()
        }), t(window).on("load", function () {
            t('[data-ride="carousel"]').each(function () {
                var e = t(this);
                e.carousel(e.data())
            })
        })
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (n, i) {
            this.$element = t(n), this.options = t.extend({}, e.DEFAULTS, i), this.transitioning = null, this.options.parent && (this.$parent = t(this.options.parent)), this.options.toggle && this.toggle()
        };
        e.DEFAULTS = {
            toggle: !0
        }, e.prototype.dimension = function () {
            return this.$element.hasClass("width") ? "width" : "height"
        }, e.prototype.show = function () {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var e = t.Event("show.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.$parent && this.$parent.find("> .panel > .in");
                    if (n && n.length) {
                        var i = n.data("bs.collapse");
                        if (i && i.transitioning) return;
                        n.collapse("hide"), i || n.data("bs.collapse", null)
                    }
                    var r = this.dimension();
                    this.$element.removeClass("collapse").addClass("collapsing")[r](0), this.transitioning = 1;
                    var o = function (e) {
                        e && e.target != this.$element[0] ? this.$element.one(t.support.transition.end, t.proxy(o, this)) : (this.$element.removeClass("collapsing").addClass("collapse in")[r]("auto"), this.transitioning = 0, this.$element.trigger("shown.bs.collapse"))
                    };
                    if (!t.support.transition) return o.call(this);
                    var s = t.camelCase(["scroll", r].join("-"));
                    this.$element.one(t.support.transition.end, t.proxy(o, this)).emulateTransitionEnd(350)[r](this.$element[0][s])
                }
            }
        }, e.prototype.hide = function () {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var e = t.Event("hide.bs.collapse");
                if (this.$element.trigger(e), !e.isDefaultPrevented()) {
                    var n = this.dimension();
                    this.$element[n](this.$element[n]())[0].offsetHeight, this.$element.addClass("collapsing").removeClass("collapse").removeClass("in"), this.transitioning = 1;
                    var i = function (e) {
                        e && e.target != this.$element[0] ? this.$element.one(t.support.transition.end, t.proxy(i, this)) : (this.transitioning = 0, this.$element.trigger("hidden.bs.collapse").removeClass("collapsing").addClass("collapse"))
                    };
                    if (!t.support.transition) return i.call(this);
                    this.$element[n](0).one(t.support.transition.end, t.proxy(i, this)).emulateTransitionEnd(350)
                }
            }
        }, e.prototype.toggle = function () {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        };
        var n = t.fn.collapse;
        t.fn.collapse = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.collapse"),
                    o = t.extend({}, e.DEFAULTS, i.data(), "object" == typeof n && n);
                !r && o.toggle && "show" == n && (n = !n), r || i.data("bs.collapse", r = new e(this, o)), "string" == typeof n && r[n]()
            })
        }, t.fn.collapse.Constructor = e, t.fn.collapse.noConflict = function () {
            return t.fn.collapse = n, this
        }, t(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function (e) {
            var n, i = t(this),
                r = i.attr("data-target") || e.preventDefault() || (n = i.attr("href")) && n.replace(/.*(?=#[^\s]+$)/, ""),
                o = t(r),
                s = o.data("bs.collapse"),
                a = s ? "toggle" : i.data(),
                l = i.attr("data-parent"),
                u = l && t(l);
            s && s.transitioning || (u && u.find('[data-toggle="collapse"][data-parent="' + l + '"]').not(i).addClass("collapsed"), i[o.hasClass("in") ? "addClass" : "removeClass"]("collapsed")), o.collapse(a)
        })
    }(jQuery),
    function (t) {
        "use strict";

        function e(e) {
            t(i).remove(), t(r).each(function () {
                var i = n(t(this)),
                    r = {
                        relatedTarget: this
                    };
                i.hasClass("open") && (i.trigger(e = t.Event("hide.bs.dropdown", r)), e.isDefaultPrevented() || i.removeClass("open").trigger("hidden.bs.dropdown", r))
            })
        }

        function n(e) {
            var n = e.attr("data-target");
            n || (n = (n = e.attr("href")) && /#[A-Za-z]/.test(n) && n.replace(/.*(?=#[^\s]*$)/, ""));
            var i = n && t(n);
            return i && i.length ? i : e.parent()
        }
        var i = ".dropdown-backdrop",
            r = '[data-toggle="dropdown"]',
            o = function (e) {
                t(e).on("click.bs.dropdown", this.toggle)
            };
        o.prototype.toggle = function (i) {
            var r = t(this);
            if (!r.is(".disabled, :disabled")) {
                var o = n(r),
                    s = o.hasClass("open");
                if (e(), !s) {
                    "ontouchstart" in document.documentElement && !o.closest(".navbar-nav").length && t('<div class="dropdown-backdrop"/>').insertAfter(t(this)).on("click", e);
                    var a = {
                        relatedTarget: this
                    };
                    if (o.trigger(i = t.Event("show.bs.dropdown", a)), i.isDefaultPrevented()) return;
                    r.trigger("focus"), o.toggleClass("open").trigger("shown.bs.dropdown", a)
                }
                return !1
            }
        }, o.prototype.keydown = function (e) {
            if (/(38|40|27)/.test(e.keyCode)) {
                var i = t(this);
                if (e.preventDefault(), e.stopPropagation(), !i.is(".disabled, :disabled")) {
                    var o = n(i),
                        s = o.hasClass("open");
                    if (!s || s && 27 == e.keyCode) return 27 == e.which && o.find(r).trigger("focus"), i.trigger("click");
                    var a = " li:not(.divider):visible a",
                        l = o.find('[role="menu"]' + a + ', [role="listbox"]' + a);
                    if (l.length) {
                        var u = l.index(l.filter(":focus"));
                        38 == e.keyCode && u > 0 && u--, 40 == e.keyCode && u < l.length - 1 && u++, ~u || (u = 0), l.eq(u).trigger("focus")
                    }
                }
            }
        };
        var s = t.fn.dropdown;
        t.fn.dropdown = function (e) {
            return this.each(function () {
                var n = t(this),
                    i = n.data("bs.dropdown");
                i || n.data("bs.dropdown", i = new o(this)), "string" == typeof e && i[e].call(n)
            })
        }, t.fn.dropdown.Constructor = o, t.fn.dropdown.noConflict = function () {
            return t.fn.dropdown = s, this
        }, t(document).on("click.bs.dropdown.data-api", e).on("click.bs.dropdown.data-api", ".dropdown form", function (t) {
            t.stopPropagation()
        }).on("click.bs.dropdown.data-api", r, o.prototype.toggle).on("keydown.bs.dropdown.data-api", r + ', [role="menu"], [role="listbox"]', o.prototype.keydown)
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e) {
            this.element = t(e)
        };
        e.prototype.show = function () {
            var e = this.element,
                n = e.closest("ul:not(.dropdown-menu)"),
                i = e.data("target");
            if (i || (i = (i = e.attr("href")) && i.replace(/.*(?=#[^\s]*$)/, "")), !e.parent("li").hasClass("active")) {
                var r = n.find(".active:last a")[0],
                    o = t.Event("show.bs.tab", {
                        relatedTarget: r
                    });
                if (e.trigger(o), !o.isDefaultPrevented()) {
                    var s = t(i);
                    this.activate(e.parent("li"), n), this.activate(s, s.parent(), function () {
                        e.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: r
                        })
                    })
                }
            }
        }, e.prototype.activate = function (e, n, i) {
            function r() {
                o.removeClass("active").find("> .dropdown-menu > .active").removeClass("active"), e.addClass("active"), s ? (e[0].offsetWidth, e.addClass("in")) : e.removeClass("fade"), e.parent(".dropdown-menu") && e.closest("li.dropdown").addClass("active"), i && i()
            }
            var o = n.find("> .active"),
                s = i && t.support.transition && o.hasClass("fade");
            s ? o.one(t.support.transition.end, r).emulateTransitionEnd(150) : r(), o.removeClass("in")
        };
        var n = t.fn.tab;
        t.fn.tab = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.tab");
                r || i.data("bs.tab", r = new e(this)), "string" == typeof n && r[n]()
            })
        }, t.fn.tab.Constructor = e, t.fn.tab.noConflict = function () {
            return t.fn.tab = n, this
        }, t(document).on("click.bs.tab.data-api", '[data-toggle="tab"], [data-toggle="pill"]', function (e) {
            e.preventDefault(), t(this).tab("show")
        })
    }(jQuery),
    function (t) {
        "use strict";

        function e() {
            var t = document.createElement("bootstrap"),
                e = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                };
            for (var n in e)
                if (t.style[n] !== undefined) return {
                    end: e[n]
                };
            return !1
        }
        t.fn.emulateTransitionEnd = function (e) {
            var n = !1,
                i = this;
            return t(this).one(t.support.transition.end, function () {
                n = !0
            }), setTimeout(function () {
                n || t(i).trigger(t.support.transition.end)
            }, e), this
        }, t(function () {
            t.support.transition = e()
        })
    }(jQuery),
    function (t) {
        "use strict";

        function e(n, i) {
            var r, o = t.proxy(this.process, this);
            this.$element = t(n).is("body") ? t(window) : t(n), this.$body = t("body"), this.$scrollElement = this.$element.on("scroll.bs.scrollspy", o), this.options = t.extend({}, e.DEFAULTS, i), this.selector = (this.options.target || (r = t(n).attr("href")) && r.replace(/.*(?=#[^\s]+$)/, "") || "") + " .nav li > a", this.offsets = t([]), this.targets = t([]), this.activeTarget = null, this.refresh(), this.process()
        }
        e.DEFAULTS = {
            offset: 10
        }, e.prototype.refresh = function () {
            var e = this.$element[0] == window ? "offset" : "position";
            this.offsets = t([]), this.targets = t([]);
            var n = this;
            this.$body.find(this.selector).map(function () {
                var i = t(this),
                    r = i.data("target") || i.attr("href"),
                    o = /^#./.test(r) && t(r);
                return o && o.length && o.is(":visible") && [
                    [o[e]().top + (!t.isWindow(n.$scrollElement.get(0)) && n.$scrollElement.scrollTop()), r]
                ] || null
            }).sort(function (t, e) {
                return t[0] - e[0]
            }).each(function () {
                n.offsets.push(this[0]), n.targets.push(this[1])
            })
        }, e.prototype.process = function () {
            var t, e = this.$scrollElement.scrollTop() + this.options.offset,
                n = (this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)) - this.$scrollElement.height(),
                i = this.offsets,
                r = this.targets,
                o = this.activeTarget;
            if (e >= n) return o != (t = r.last()[0]) && this.activate(t);
            if (o && e <= i[0]) return o != (t = r[0]) && this.activate(t);
            for (t = i.length; t--;) o != r[t] && e >= i[t] && (!i[t + 1] || e <= i[t + 1]) && this.activate(r[t])
        }, e.prototype.activate = function (e) {
            this.activeTarget = e, t(this.selector).parentsUntil(this.options.target, ".active").removeClass("active");
            var n = this.selector + '[data-target="' + e + '"],' + this.selector + '[href="' + e + '"]',
                i = t(n).parents("li").addClass("active");
            i.parent(".dropdown-menu").length && (i = i.closest("li.dropdown").addClass("active")), i.trigger("activate.bs.scrollspy")
        };
        var n = t.fn.scrollspy;
        t.fn.scrollspy = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.scrollspy"),
                    o = "object" == typeof n && n;
                r || i.data("bs.scrollspy", r = new e(this, o)), "string" == typeof n && r[n]()
            })
        }, t.fn.scrollspy.Constructor = e, t.fn.scrollspy.noConflict = function () {
            return t.fn.scrollspy = n, this
        }, t(window).on("load.bs.scrollspy.data-api", function () {
            t('[data-spy="scroll"]').each(function () {
                var e = t(this);
                e.scrollspy(e.data())
            })
        })
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (e, n) {
            this.options = n, this.$body = t(document.body), this.$element = t(e), this.$backdrop = this.isShown = null, this.scrollbarWidth = 0, this.options.remote && this.$element.find(".modal-content").load(this.options.remote, t.proxy(function () {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        e.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        }, e.prototype.toggle = function (t) {
            return this.isShown ? this.hide() : this.show(t)
        }, e.prototype.show = function (e) {
            var n = this,
                i = t.Event("show.bs.modal", {
                    relatedTarget: e
                });
            this.$element.trigger(i), this.isShown || i.isDefaultPrevented() || (this.isShown = !0, this.checkScrollbar(), this.$body.addClass("modal-open"), this.setScrollbar(), this.escape(), this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', t.proxy(this.hide, this)), this.backdrop(function () {
                var i = t.support.transition && n.$element.hasClass("fade");
                n.$element.parent().length || n.$element.appendTo(n.$body), n.$element.show().scrollTop(0), i && n.$element[0].offsetWidth,
                    n.$element.addClass("in").attr("aria-hidden", !1), n.enforceFocus();
                var r = t.Event("shown.bs.modal", {
                    relatedTarget: e
                });
                i ? n.$element.find(".modal-dialog").one(t.support.transition.end, function () {
                    n.$element.trigger("focus").trigger(r)
                }).emulateTransitionEnd(300) : n.$element.trigger("focus").trigger(r)
            }))
        }, e.prototype.hide = function (e) {
            e && e.preventDefault(), e = t.Event("hide.bs.modal"), this.$element.trigger(e), this.isShown && !e.isDefaultPrevented() && (this.isShown = !1, this.$body.removeClass("modal-open"), this.resetScrollbar(), this.escape(), t(document).off("focusin.bs.modal"), this.$element.removeClass("in").attr("aria-hidden", !0).off("click.dismiss.bs.modal"), t.support.transition && this.$element.hasClass("fade") ? this.$element.one(t.support.transition.end, t.proxy(this.hideModal, this)).emulateTransitionEnd(300) : this.hideModal())
        }, e.prototype.enforceFocus = function () {
            t(document).off("focusin.bs.modal").on("focusin.bs.modal", t.proxy(function (t) {
                this.$element[0] === t.target || this.$element.has(t.target).length || this.$element.trigger("focus")
            }, this))
        }, e.prototype.escape = function () {
            this.isShown && this.options.keyboard ? this.$element.on("keyup.dismiss.bs.modal", t.proxy(function (t) {
                27 == t.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keyup.dismiss.bs.modal")
        }, e.prototype.hideModal = function () {
            var t = this;
            this.$element.hide(), this.backdrop(function () {
                t.removeBackdrop(), t.$element.trigger("hidden.bs.modal")
            })
        }, e.prototype.removeBackdrop = function () {
            this.$backdrop && this.$backdrop.remove(), this.$backdrop = null
        }, e.prototype.backdrop = function (e) {
            var n = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var i = t.support.transition && n;
                if (this.$backdrop = t('<div class="modal-backdrop ' + n + '" />').appendTo(this.$body), this.$element.on("click.dismiss.bs.modal", t.proxy(function (t) {
                    t.target === t.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus.call(this.$element[0]) : this.hide.call(this))
                }, this)), i && this.$backdrop[0].offsetWidth, this.$backdrop.addClass("in"), !e) return;
                i ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()
            } else !this.isShown && this.$backdrop ? (this.$backdrop.removeClass("in"), t.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one(t.support.transition.end, e).emulateTransitionEnd(150) : e()) : e && e()
        }, e.prototype.checkScrollbar = function () {
            document.body.clientWidth >= window.innerWidth || (this.scrollbarWidth = this.scrollbarWidth || this.measureScrollbar())
        }, e.prototype.setScrollbar = function () {
            var t = parseInt(this.$body.css("padding-right") || 0);
            this.scrollbarWidth && this.$body.css("padding-right", t + this.scrollbarWidth)
        }, e.prototype.resetScrollbar = function () {
            this.$body.css("padding-right", "")
        }, e.prototype.measureScrollbar = function () {
            var t = document.createElement("div");
            t.className = "modal-scrollbar-measure", this.$body.append(t);
            var e = t.offsetWidth - t.clientWidth;
            return this.$body[0].removeChild(t), e
        };
        var n = t.fn.modal;
        t.fn.modal = function (n, i) {
            return this.each(function () {
                var r = t(this),
                    o = r.data("bs.modal"),
                    s = t.extend({}, e.DEFAULTS, r.data(), "object" == typeof n && n);
                o || r.data("bs.modal", o = new e(this, s)), "string" == typeof n ? o[n](i) : s.show && o.show(i)
            })
        }, t.fn.modal.Constructor = e, t.fn.modal.noConflict = function () {
            return t.fn.modal = n, this
        }, t(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function (e) {
            var n = t(this),
                i = n.attr("href"),
                r = t(n.attr("data-target") || i && i.replace(/.*(?=#[^\s]+$)/, "")),
                o = r.data("bs.modal") ? "toggle" : t.extend({
                    remote: !/#/.test(i) && i
                }, r.data(), n.data());
            n.is("a") && e.preventDefault(), r.modal(o, this).one("hide", function () {
                n.is(":visible") && n.trigger("focus")
            })
        })
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (t, e) {
            this.type = this.options = this.enabled = this.timeout = this.hoverState = this.$element = null, this.init("tooltip", t, e)
        };
        e.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        }, e.prototype.init = function (e, n, i) {
            this.enabled = !0, this.type = e, this.$element = t(n), this.options = this.getOptions(i), this.$viewport = this.options.viewport && t(this.options.viewport.selector || this.options.viewport);
            for (var r = this.options.trigger.split(" "), o = r.length; o--;) {
                var s = r[o];
                if ("click" == s) this.$element.on("click." + this.type, this.options.selector, t.proxy(this.toggle, this));
                else if ("manual" != s) {
                    var a = "hover" == s ? "mouseenter" : "focusin",
                        l = "hover" == s ? "mouseleave" : "focusout";
                    this.$element.on(a + "." + this.type, this.options.selector, t.proxy(this.enter, this)), this.$element.on(l + "." + this.type, this.options.selector, t.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = t.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.getOptions = function (e) {
            return (e = t.extend({}, this.getDefaults(), this.$element.data(), e)).delay && "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e
        }, e.prototype.getDelegateOptions = function () {
            var e = {},
                n = this.getDefaults();
            return this._options && t.each(this._options, function (t, i) {
                n[t] != i && (e[t] = i)
            }), e
        }, e.prototype.enter = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            if (clearTimeout(n.timeout), n.hoverState = "in", !n.options.delay || !n.options.delay.show) return n.show();
            n.timeout = setTimeout(function () {
                "in" == n.hoverState && n.show()
            }, n.options.delay.show)
        }, e.prototype.leave = function (e) {
            var n = e instanceof this.constructor ? e : t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type);
            if (clearTimeout(n.timeout), n.hoverState = "out", !n.options.delay || !n.options.delay.hide) return n.hide();
            n.timeout = setTimeout(function () {
                "out" == n.hoverState && n.hide()
            }, n.options.delay.hide)
        }, e.prototype.show = function () {
            var e = t.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                if (this.$element.trigger(e), e.isDefaultPrevented()) return;
                var n = this,
                    i = this.tip();
                this.setContent(), this.options.animation && i.addClass("fade");
                var r = "function" == typeof this.options.placement ? this.options.placement.call(this, i[0], this.$element[0]) : this.options.placement,
                    o = /\s?auto?\s?/i,
                    s = o.test(r);
                s && (r = r.replace(o, "") || "top"), i.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(r), this.options.container ? i.appendTo(this.options.container) : i.insertAfter(this.$element);
                var a = this.getPosition(),
                    l = i[0].offsetWidth,
                    u = i[0].offsetHeight;
                if (s) {
                    var c = r,
                        d = this.$element.parent(),
                        p = this.getPosition(d);
                    r = "bottom" == r && a.top + a.height + u - p.scroll > p.height ? "top" : "top" == r && a.top - p.scroll - u < 0 ? "bottom" : "right" == r && a.right + l > p.width ? "left" : "left" == r && a.left - l < p.left ? "right" : r, i.removeClass(c).addClass(r)
                }
                var h = this.getCalculatedOffset(r, a, l, u);
                this.applyPlacement(h, r), this.hoverState = null;
                var f = function () {
                    n.$element.trigger("shown.bs." + n.type)
                };
                t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, f).emulateTransitionEnd(150) : f()
            }
        }, e.prototype.applyPlacement = function (e, n) {
            var i = this.tip(),
                r = i[0].offsetWidth,
                o = i[0].offsetHeight,
                s = parseInt(i.css("margin-top"), 10),
                a = parseInt(i.css("margin-left"), 10);
            isNaN(s) && (s = 0), isNaN(a) && (a = 0), e.top = e.top + s, e.left = e.left + a, t.offset.setOffset(i[0], t.extend({
                using: function (t) {
                    i.css({
                        top: Math.round(t.top),
                        left: Math.round(t.left)
                    })
                }
            }, e), 0), i.addClass("in");
            var l = i[0].offsetWidth,
                u = i[0].offsetHeight;
            "top" == n && u != o && (e.top = e.top + o - u);
            var c = this.getViewportAdjustedDelta(n, e, l, u);
            c.left ? e.left += c.left : e.top += c.top;
            var d = c.left ? 2 * c.left - r + l : 2 * c.top - o + u,
                p = c.left ? "left" : "top",
                h = c.left ? "offsetWidth" : "offsetHeight";
            i.offset(e), this.replaceArrow(d, i[0][h], p)
        }, e.prototype.replaceArrow = function (t, e, n) {
            this.arrow().css(n, t ? 50 * (1 - t / e) + "%" : "")
        }, e.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle();
            t.find(".tooltip-inner")[this.options.html ? "html" : "text"](e), t.removeClass("fade in top bottom left right")
        }, e.prototype.hide = function () {
            function e() {
                "in" != n.hoverState && i.detach(), n.$element.trigger("hidden.bs." + n.type)
            }
            var n = this,
                i = this.tip(),
                r = t.Event("hide.bs." + this.type);
            if (this.$element.trigger(r), !r.isDefaultPrevented()) return i.removeClass("in"), t.support.transition && this.$tip.hasClass("fade") ? i.one(t.support.transition.end, e).emulateTransitionEnd(150) : e(), this.hoverState = null, this
        }, e.prototype.fixTitle = function () {
            var t = this.$element;
            (t.attr("title") || "string" != typeof t.attr("data-original-title")) && t.attr("data-original-title", t.attr("title") || "").attr("title", "")
        }, e.prototype.hasContent = function () {
            return this.getTitle()
        }, e.prototype.getPosition = function (e) {
            var n = (e = e || this.$element)[0],
                i = "BODY" == n.tagName;
            return t.extend({}, "function" == typeof n.getBoundingClientRect ? n.getBoundingClientRect() : null, {
                scroll: i ? document.documentElement.scrollTop || document.body.scrollTop : e.scrollTop(),
                width: i ? t(window).width() : e.outerWidth(),
                height: i ? t(window).height() : e.outerHeight()
            }, i ? {
                top: 0,
                left: 0
            } : e.offset())
        }, e.prototype.getCalculatedOffset = function (t, e, n, i) {
            return "bottom" == t ? {
                top: e.top + e.height,
                left: e.left + e.width / 2 - n / 2
            } : "top" == t ? {
                top: e.top - i,
                left: e.left + e.width / 2 - n / 2
            } : "left" == t ? {
                top: e.top + e.height / 2 - i / 2,
                left: e.left - n
            } : {
                            top: e.top + e.height / 2 - i / 2,
                            left: e.left + e.width
                        }
        }, e.prototype.getViewportAdjustedDelta = function (t, e, n, i) {
            var r = {
                top: 0,
                left: 0
            };
            if (!this.$viewport) return r;
            var o = this.options.viewport && this.options.viewport.padding || 0,
                s = this.getPosition(this.$viewport);
            if (/right|left/.test(t)) {
                var a = e.top - o - s.scroll,
                    l = e.top + o - s.scroll + i;
                a < s.top ? r.top = s.top - a : l > s.top + s.height && (r.top = s.top + s.height - l)
            } else {
                var u = e.left - o,
                    c = e.left + o + n;
                u < s.left ? r.left = s.left - u : c > s.width && (r.left = s.left + s.width - c)
            }
            return r
        }, e.prototype.getTitle = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-original-title") || ("function" == typeof e.title ? e.title.call(t[0]) : e.title)
        }, e.prototype.tip = function () {
            return this.$tip = this.$tip || t(this.options.template)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }, e.prototype.validate = function () {
            this.$element[0].parentNode || (this.hide(), this.$element = null, this.options = null)
        }, e.prototype.enable = function () {
            this.enabled = !0
        }, e.prototype.disable = function () {
            this.enabled = !1
        }, e.prototype.toggleEnabled = function () {
            this.enabled = !this.enabled
        }, e.prototype.toggle = function (e) {
            var n = e ? t(e.currentTarget)[this.type](this.getDelegateOptions()).data("bs." + this.type) : this;
            n.tip().hasClass("in") ? n.leave(n) : n.enter(n)
        }, e.prototype.destroy = function () {
            clearTimeout(this.timeout), this.hide().$element.off("." + this.type).removeData("bs." + this.type)
        };
        var n = t.fn.tooltip;
        t.fn.tooltip = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.tooltip"),
                    o = "object" == typeof n && n;
                (r || "destroy" != n) && (r || i.data("bs.tooltip", r = new e(this, o)), "string" == typeof n && r[n]())
            })
        }, t.fn.tooltip.Constructor = e, t.fn.tooltip.noConflict = function () {
            return t.fn.tooltip = n, this
        }
    }(jQuery),
    function (t) {
        "use strict";
        var e = function (t, e) {
            this.init("popover", t, e)
        };
        if (!t.fn.tooltip) throw new Error("Popover requires tooltip.js");
        e.DEFAULTS = t.extend({}, t.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }), e.prototype = t.extend({}, t.fn.tooltip.Constructor.prototype), e.prototype.constructor = e, e.prototype.getDefaults = function () {
            return e.DEFAULTS
        }, e.prototype.setContent = function () {
            var t = this.tip(),
                e = this.getTitle(),
                n = this.getContent();
            t.find(".popover-title")[this.options.html ? "html" : "text"](e), t.find(".popover-content").empty()[this.options.html ? "string" == typeof n ? "html" : "append" : "text"](n), t.removeClass("fade top bottom left right in"), t.find(".popover-title").html() || t.find(".popover-title").hide()
        }, e.prototype.hasContent = function () {
            return this.getTitle() || this.getContent()
        }, e.prototype.getContent = function () {
            var t = this.$element,
                e = this.options;
            return t.attr("data-content") || ("function" == typeof e.content ? e.content.call(t[0]) : e.content)
        }, e.prototype.arrow = function () {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }, e.prototype.tip = function () {
            return this.$tip || (this.$tip = t(this.options.template)), this.$tip
        };
        var n = t.fn.popover;
        t.fn.popover = function (n) {
            return this.each(function () {
                var i = t(this),
                    r = i.data("bs.popover"),
                    o = "object" == typeof n && n;
                (r || "destroy" != n) && (r || i.data("bs.popover", r = new e(this, o)), "string" == typeof n && r[n]())
            })
        }, t.fn.popover.Constructor = e, t.fn.popover.noConflict = function () {
            return t.fn.popover = n, this
        }
    }(jQuery),
    function (t, e) {
        var n = t();
        t.fn.dropdownHover = function (i) {
            return "ontouchstart" in document ? this : (n = n.add(this.parent()), this.each(function () {
                var r, o = t(this),
                    s = o.parent(),
                    a = {
                        delay: 500,
                        instantlyCloseOthers: !0
                    },
                    l = {
                        delay: t(this).data("delay"),
                        instantlyCloseOthers: t(this).data("close-others")
                    },
                    u = "show.bs.dropdown",
                    c = "hide.bs.dropdown",
                    d = t.extend(!0, {}, a, i, l);
                s.hover(function (t) {
                    if (!s.hasClass("open") && !o.is(t.target)) return !0;
                    n.find(":focus").blur(), !0 === d.instantlyCloseOthers && n.removeClass("open"), e.clearTimeout(r), s.addClass("open"), o.trigger(u)
                }, function () {
                    r = e.setTimeout(function () {
                        s.removeClass("open"), o.trigger(c)
                    }, d.delay)
                }), o.hover(function () {
                    n.find(":focus").blur(), !0 === d.instantlyCloseOthers && n.removeClass("open"), e.clearTimeout(r), s.addClass("open"), o.trigger(u)
                }), s.find(".dropdown-submenu").each(function () {
                    var n, i = t(this);
                    i.hover(function () {
                        e.clearTimeout(n), i.children(".dropdown-menu").show(), i.siblings().children(".dropdown-menu").hide()
                    }, function () {
                        var t = i.children(".dropdown-menu");
                        n = e.setTimeout(function () {
                            t.hide()
                        }, d.delay)
                    })
                })
            }))
        }, t(document).ready(function () {
            t('[data-hover="dropdown"]').dropdownHover()
        })
    }(jQuery, this),
    function (t) {
        "use strict";
        t.fn.fitVids = function (e) {
            var n = {
                customSelector: null
            };
            if (!document.getElementById("fit-vids-style")) {
                var i = document.createElement("div"),
                    r = document.getElementsByTagName("base")[0] || document.getElementsByTagName("script")[0],
                    o = "­<style>.fluid-width-video-wrapper{width:100%;position:relative;padding:0;}.fluid-width-video-wrapper iframe,.fluid-width-video-wrapper object,.fluid-width-video-wrapper embed {position:absolute;top:0;left:0;width:100%;height:100%;}</style>";
                i.className = "fit-vids-style", i.id = "fit-vids-style", i.style.display = "none", i.innerHTML = o, r.parentNode.insertBefore(i, r)
            }
            return e && t.extend(n, e), this.each(function () {
                var e = ["iframe[src*='player.vimeo.com']", "iframe[src*='youtube.com']", "iframe[src*='youtube-nocookie.com']", "iframe[src*='kickstarter.com'][src*='video.html']", "object", "embed"];
                n.customSelector && e.push(n.customSelector);
                var i = t(this).find(e.join(","));
                (i = i.not("object object")).each(function () {
                    var e = t(this);
                    if (!("embed" === this.tagName.toLowerCase() && e.parent("object").length || e.parent(".fluid-width-video-wrapper").length)) {
                        var n = ("object" === this.tagName.toLowerCase() || e.attr("height") && !isNaN(parseInt(e.attr("height"), 10)) ? parseInt(e.attr("height"), 10) : e.height()) / (isNaN(parseInt(e.attr("width"), 10)) ? e.width() : parseInt(e.attr("width"), 10));
                        if (!e.attr("id")) {
                            var i = "fitvid" + Math.floor(999999 * Math.random());
                            e.attr("id", i)
                        }
                        e.wrap('<div class="fluid-width-video-wrapper"></div>').parent(".fluid-width-video-wrapper").css("padding-top", 100 * n + "%"), e.removeAttr("height").removeAttr("width")
                    }
                })
            })
        }
    }(window.jQuery || window.Zepto), $(document).on("turbolinks:load", initMenu),
    function (t) {
        "use strict";

        function e(n, i, o, s) {
            function a(t) {
                t.timeout && (l.cycleTimeout = setTimeout(function () {
                    e(n, t, 0, !t.rev)
                }, t.timeout))
            }
            if (!i.busy) {
                var l = n[0].parentNode,
                    u = n[i.currSlide],
                    c = n[i.nextSlide];
                if (0 !== l.cycleTimeout || o)
                    if (o || !l.cyclePause) {
                        i.before.length && t.each(i.before, function (t, e) {
                            e.apply(c, [u, c, i, s])
                        });
                        var d = function () {
                            r && this.style.removeAttribute("filter"), t.each(i.after, function (t, e) {
                                e.apply(c, [u, c, i, s])
                            }), a(i)
                        };
                        i.nextSlide != i.currSlide && (i.busy = 1, t.fn.cycle.custom(u, c, i, d));
                        var p = i.nextSlide + 1 == n.length;
                        i.nextSlide = p ? 0 : i.nextSlide + 1, i.currSlide = p ? n.length - 1 : i.nextSlide - 1
                    } else a(i)
            }
        }

        function n(t, n, i) {
            var r = t[0].parentNode,
                o = r.cycleTimeout;
            return o && (clearTimeout(o), r.cycleTimeout = 0), n.nextSlide = n.currSlide + i, n.nextSlide < 0 ? n.nextSlide = t.length - 1 : n.nextSlide >= t.length && (n.nextSlide = 0), e(t, n, 1, i >= 0), !1
        }
        var i = "Lite-1.7",
            r = /MSIE/.test(navigator.userAgent);
        t.fn.cycle = function (i) {
            return this.each(function () {
                i = i || {}, this.cycleTimeout && clearTimeout(this.cycleTimeout), this.cycleTimeout = 0, this.cyclePause = 0;
                var o = t(this),
                    s = i.slideExpr ? t(i.slideExpr, this) : o.children(),
                    a = s.get();
                if (a.length < 2) window.console && console.log("terminating; too few slides: " + a.length);
                else {
                    var l = t.extend({}, t.fn.cycle.defaults, i || {}, t.metadata ? o.metadata() : t.meta ? o.data() : {}),
                        u = t.isFunction(o.data) ? o.data(l.metaAttr) : null;
                    u && (l = t.extend(l, u)), l.before = l.before ? [l.before] : [], l.after = l.after ? [l.after] : [], l.after.unshift(function () {
                        l.busy = 0
                    });
                    var c = this.className;
                    l.width = parseInt((c.match(/w:(\d+)/) || [])[1], 10) || l.width, l.height = parseInt((c.match(/h:(\d+)/) || [])[1], 10) || l.height, l.timeout = parseInt((c.match(/t:(\d+)/) || [])[1], 10) || l.timeout, "static" == o.css("position") && o.css("position", "relative"), l.width && o.width(l.width), l.height && "auto" != l.height && o.height(l.height);
                    var d = 0;
                    s.css({
                        position: "absolute",
                        top: 0
                    }).each(function (e) {
                        t(this).css("z-index", a.length - e)
                    }), t(a[d]).css("opacity", 1).show(), r && a[d].style.removeAttribute("filter"), l.fit && l.width && s.width(l.width), l.fit && l.height && "auto" != l.height && s.height(l.height), l.pause && o.hover(function () {
                        this.cyclePause = 1
                    }, function () {
                        this.cyclePause = 0
                    });
                    var p = t.fn.cycle.transitions[l.fx];
                    if (p && p(o, s, l), s.each(function () {
                        var e = t(this);
                        this.cycleH = l.fit && l.height ? l.height : e.height(), this.cycleW = l.fit && l.width ? l.width : e.width()
                    }), l.cssFirst && t(s[d]).css(l.cssFirst), l.timeout)
                        for (l.speed.constructor == String && (l.speed = {
                            slow: 600,
                            fast: 200
                        }[l.speed] || 400), l.sync || (l.speed = l.speed / 2); l.timeout - l.speed < 250;) l.timeout += l.speed;
                    l.speedIn = l.speed, l.speedOut = l.speed, l.slideCount = a.length, l.currSlide = d, l.nextSlide = 1;
                    var h = s[d];
                    l.before.length && l.before[0].apply(h, [h, h, l, !0]), l.after.length > 1 && l.after[1].apply(h, [h, h, l, !0]), l.click && !l.next && (l.next = l.click), l.next && t(l.next).unbind("click.cycle").bind("click.cycle", function () {
                        return n(a, l, l.rev ? -1 : 1)
                    }), l.prev && t(l.prev).unbind("click.cycle").bind("click.cycle", function () {
                        return n(a, l, l.rev ? 1 : -1)
                    }), l.timeout && (this.cycleTimeout = setTimeout(function () {
                        e(a, l, 0, !l.rev)
                    }, l.timeout + (l.delay || 0)))
                }
            })
        }, t.fn.cycle.custom = function (e, n, i, r) {
            var o = t(e),
                s = t(n);
            s.css(i.cssBefore);
            var a = function () {
                s.animate(i.animIn, i.speedIn, i.easeIn, r)
            };
            o.animate(i.animOut, i.speedOut, i.easeOut, function () {
                o.css(i.cssAfter), i.sync || a()
            }), i.sync && a()
        }, t.fn.cycle.transitions = {
            fade: function (t, e, n) {
                e.not(":eq(0)").hide(), n.cssBefore = {
                    opacity: 0,
                    display: "block"
                }, n.cssAfter = {
                    display: "none"
                }, n.animOut = {
                    opacity: 0
                }, n.animIn = {
                    opacity: 1
                }
            },
            fadeout: function (e, n, i) {
                i.before.push(function (e, n, i, r) {
                    t(e).css("zIndex", i.slideCount + (!0 === r ? 1 : 0)), t(n).css("zIndex", i.slideCount + (!0 === r ? 0 : 1))
                }), n.not(":eq(0)").hide(), i.cssBefore = {
                    opacity: 1,
                    display: "block",
                    zIndex: 1
                }, i.cssAfter = {
                    display: "none",
                    zIndex: 0
                }, i.animOut = {
                    opacity: 0
                }, i.animIn = {
                    opacity: 1
                }
            }
        }, t.fn.cycle.ver = function () {
            return i
        }, t.fn.cycle.defaults = {
            animIn: {},
            animOut: {},
            fx: "fade",
            after: null,
            before: null,
            cssBefore: {},
            cssAfter: {},
            delay: 0,
            fit: 0,
            height: "auto",
            metaAttr: "cycle",
            next: null,
            pause: !1,
            prev: null,
            speed: 1e3,
            slideExpr: null,
            sync: !0,
            timeout: 4e3
        }
    }(jQuery), $(document).on("turbolinks:load", initSliders), $(document).on("turbolinks:load", initChain), $(document).on("turbolinks:load", initSdg), $(function () {
        return loadTwitterSDK(), $(document).on("turbolinks:load", renderTimelines)
    }), loadTwitterSDK = function () {
        return $.getScript("//platform.twitter.com/widgets.js", function () {
            return renderTimelines()
        })
    }, renderTimelines = function () {
        return $(".twitter-timeline-container").each(function () {
            var t, e, n;
            return e = (t = $(this)).data("widget-id"), n = t.data("widget-options"), t.empty(), "undefined" != typeof twttr && null !== twttr ? twttr.widgets.createTimeline(e, t[0], null, n) : void 0
        })
    };
