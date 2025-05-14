import { createElementBlock, openBlock, resolveComponent, createVNode } from "vue";
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var dhtmlxgantt = { exports: {} };
/*
@license

dhtmlxGantt v.7.1.12 Standard

This version of dhtmlxGantt is distributed under GPL 2.0 license and can be legally used in GPL projects.

To use dhtmlxGantt in non-GPL projects (and get Pro version of the product), please obtain Commercial/Enterprise or Ultimate license on our site https://dhtmlx.com/docs/products/dhtmlxGantt/#licensing or contact us at sales@dhtmlx.com

(c) XB Software Ltd.

*/
var hasRequiredDhtmlxgantt;
function requireDhtmlxgantt() {
  if (hasRequiredDhtmlxgantt) return dhtmlxgantt.exports;
  hasRequiredDhtmlxgantt = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(window, function() {
      return function(t) {
        var e = {};
        function n(i) {
          if (e[i]) return e[i].exports;
          var r = e[i] = { i, l: false, exports: {} };
          return t[i].call(r.exports, r, r.exports, n), r.l = true, r.exports;
        }
        return n.m = t, n.c = e, n.d = function(t2, e2, i) {
          n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: i });
        }, n.r = function(t2) {
          "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
        }, n.t = function(t2, e2) {
          if (1 & e2 && (t2 = n(t2)), 8 & e2) return t2;
          if (4 & e2 && "object" == typeof t2 && t2 && t2.__esModule) return t2;
          var i = /* @__PURE__ */ Object.create(null);
          if (n.r(i), Object.defineProperty(i, "default", { enumerable: true, value: t2 }), 2 & e2 && "string" != typeof t2) for (var r in t2) n.d(i, r, (function(e3) {
            return t2[e3];
          }).bind(null, r));
          return i;
        }, n.n = function(t2) {
          var e2 = t2 && t2.__esModule ? function() {
            return t2.default;
          } : function() {
            return t2;
          };
          return n.d(e2, "a", e2), e2;
        }, n.o = function(t2, e2) {
          return Object.prototype.hasOwnProperty.call(t2, e2);
        }, n.p = "/codebase/", n(n.s = 63);
      }([function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r, a = n(2), o = {}.constructor.toString();
        t.exports = { copy: function t2(e2) {
          var n2, r2;
          if (e2 && "object" == i(e2)) switch (true) {
            case a.isDate(e2):
              r2 = new Date(e2);
              break;
            case a.isArray(e2):
              for (r2 = new Array(e2.length), n2 = 0; n2 < e2.length; n2++) r2[n2] = t2(e2[n2]);
              break;
            default:
              for (n2 in r2 = function(t3) {
                return t3.constructor.toString() !== o;
              }(e2) ? Object.create(e2) : {}, e2) Object.prototype.hasOwnProperty.apply(e2, [n2]) && (r2[n2] = t2(e2[n2]));
          }
          return r2 || e2;
        }, defined: function(t2) {
          return void 0 !== t2;
        }, mixin: function(t2, e2, n2) {
          for (var i2 in e2) (void 0 === t2[i2] || n2) && (t2[i2] = e2[i2]);
          return t2;
        }, uid: function() {
          return r || (r = (/* @__PURE__ */ new Date()).valueOf()), ++r;
        }, bind: function(t2, e2) {
          return t2.bind ? t2.bind(e2) : function() {
            return t2.apply(e2, arguments);
          };
        }, event: function(t2, e2, n2, i2) {
          t2.addEventListener ? t2.addEventListener(e2, n2, void 0 !== i2 && i2) : t2.attachEvent && t2.attachEvent("on" + e2, n2);
        }, eventRemove: function(t2, e2, n2, i2) {
          t2.removeEventListener ? t2.removeEventListener(e2, n2, void 0 !== i2 && i2) : t2.detachEvent && t2.detachEvent("on" + e2, n2);
        } };
      }, function(t, e) {
        function n(t2) {
          var e2 = 0, n2 = 0, i2 = 0, r2 = 0;
          if (t2.getBoundingClientRect) {
            var a2 = t2.getBoundingClientRect(), o2 = document.body, s2 = document.documentElement || document.body.parentNode || document.body, l2 = window.pageYOffset || s2.scrollTop || o2.scrollTop, c2 = window.pageXOffset || s2.scrollLeft || o2.scrollLeft, u2 = s2.clientTop || o2.clientTop || 0, d2 = s2.clientLeft || o2.clientLeft || 0;
            e2 = a2.top + l2 - u2, n2 = a2.left + c2 - d2, i2 = document.body.offsetWidth - a2.right, r2 = document.body.offsetHeight - a2.bottom;
          } else {
            for (; t2; ) e2 += parseInt(t2.offsetTop, 10), n2 += parseInt(t2.offsetLeft, 10), t2 = t2.offsetParent;
            i2 = document.body.offsetWidth - t2.offsetWidth - n2, r2 = document.body.offsetHeight - t2.offsetHeight - e2;
          }
          return { y: Math.round(e2), x: Math.round(n2), width: t2.offsetWidth, height: t2.offsetHeight, right: Math.round(i2), bottom: Math.round(r2) };
        }
        function i(t2) {
          var e2 = false, n2 = false;
          if (window.getComputedStyle) {
            var i2 = window.getComputedStyle(t2, null);
            e2 = i2.display, n2 = i2.visibility;
          } else t2.currentStyle && (e2 = t2.currentStyle.display, n2 = t2.currentStyle.visibility);
          return "none" != e2 && "hidden" != n2;
        }
        function r(t2) {
          return !isNaN(t2.getAttribute("tabindex")) && 1 * t2.getAttribute("tabindex") >= 0;
        }
        function a(t2) {
          return !{ a: true, area: true }[t2.nodeName.loLowerCase()] || !!t2.getAttribute("href");
        }
        function o(t2) {
          return !{ input: true, select: true, textarea: true, button: true, object: true }[t2.nodeName.toLowerCase()] || !t2.hasAttribute("disabled");
        }
        function s(t2) {
          if (!t2) return "";
          var e2 = t2.className || "";
          return e2.baseVal && (e2 = e2.baseVal), e2.indexOf || (e2 = ""), u(e2);
        }
        var l;
        function c(t2) {
          var e2;
          return t2.tagName ? e2 = t2 : (e2 = (t2 = t2 || window.event).target || t2.srcElement).shadowRoot && t2.composedPath && (e2 = t2.composedPath()[0]), e2;
        }
        function u(t2) {
          return (String.prototype.trim || function() {
            return this.replace(/^\s+|\s+$/g, "");
          }).apply(t2);
        }
        function d() {
          return document.head.createShadowRoot || document.head.attachShadow;
        }
        function h(t2) {
          if (!t2) return document.body;
          if (!d()) return document.body;
          for (; t2.parentNode && (t2 = t2.parentNode); ) if (t2 instanceof ShadowRoot) return t2.host;
          return document.body;
        }
        t.exports = { getNodePosition: n, getFocusableNodes: function(t2) {
          for (var e2 = t2.querySelectorAll(["a[href]", "area[href]", "input", "select", "textarea", "button", "iframe", "object", "embed", "[tabindex]", "[contenteditable]"].join(", ")), n2 = Array.prototype.slice.call(e2, 0), s2 = 0; s2 < n2.length; s2++) n2[s2].$position = s2;
          for (n2.sort(function(t3, e3) {
            return 0 === t3.tabIndex && 0 !== e3.tabIndex ? 1 : 0 !== t3.tabIndex && 0 === e3.tabIndex ? -1 : t3.tabIndex === e3.tabIndex ? t3.$position - e3.$position : t3.tabIndex < e3.tabIndex ? -1 : 1;
          }), s2 = 0; s2 < n2.length; s2++) {
            var l2 = n2[s2];
            (r(l2) || o(l2) || a(l2)) && i(l2) || (n2.splice(s2, 1), s2--);
          }
          return n2;
        }, getScrollSize: function() {
          var t2 = document.createElement("div");
          t2.style.cssText = "visibility:hidden;position:absolute;left:-1000px;width:100px;padding:0px;margin:0px;height:110px;min-height:100px;overflow-y:scroll;", document.body.appendChild(t2);
          var e2 = t2.offsetWidth - t2.clientWidth;
          return document.body.removeChild(t2), e2;
        }, getClassName: s, addClassName: function(t2, e2) {
          e2 && -1 === t2.className.indexOf(e2) && (t2.className += " " + e2);
        }, removeClassName: function(t2, e2) {
          e2 = e2.split(" ");
          for (var n2 = 0; n2 < e2.length; n2++) {
            var i2 = new RegExp("\\s?\\b" + e2[n2] + "\\b(?![-_.])", "");
            t2.className = t2.className.replace(i2, "");
          }
        }, insertNode: function(t2, e2) {
          l || (l = document.createElement("div")), l.innerHTML = e2;
          var n2 = l.firstChild;
          return t2.appendChild(n2), n2;
        }, removeNode: function(t2) {
          t2 && t2.parentNode && t2.parentNode.removeChild(t2);
        }, getChildNodes: function(t2, e2) {
          for (var n2 = t2.childNodes, i2 = n2.length, r2 = [], a2 = 0; a2 < i2; a2++) {
            var o2 = n2[a2];
            o2.className && -1 !== o2.className.indexOf(e2) && r2.push(o2);
          }
          return r2;
        }, toNode: function(t2) {
          return "string" == typeof t2 ? document.getElementById(t2) || document.querySelector(t2) || document.body : t2 || document.body;
        }, locateClassName: function(t2, e2, n2) {
          var i2 = c(t2), r2 = "";
          for (void 0 === n2 && (n2 = true); i2; ) {
            if (r2 = s(i2)) {
              var a2 = r2.indexOf(e2);
              if (a2 >= 0) {
                if (!n2) return i2;
                var o2 = 0 === a2 || !u(r2.charAt(a2 - 1)), l2 = a2 + e2.length >= r2.length || !u(r2.charAt(a2 + e2.length));
                if (o2 && l2) return i2;
              }
            }
            i2 = i2.parentNode;
          }
          return null;
        }, locateAttribute: function(t2, e2) {
          if (e2) {
            for (var n2 = c(t2); n2; ) {
              if (n2.getAttribute && n2.getAttribute(e2)) return n2;
              n2 = n2.parentNode;
            }
            return null;
          }
        }, getTargetNode: c, getRelativeEventPosition: function(t2, e2) {
          var i2 = document.documentElement, r2 = n(e2);
          return { x: t2.clientX + i2.scrollLeft - i2.clientLeft - r2.x + e2.scrollLeft, y: t2.clientY + i2.scrollTop - i2.clientTop - r2.y + e2.scrollTop };
        }, isChildOf: function(t2, e2) {
          if (!t2 || !e2) return false;
          for (; t2 && t2 != e2; ) t2 = t2.parentNode;
          return t2 === e2;
        }, hasClass: function(t2, e2) {
          return "classList" in t2 ? t2.classList.contains(e2) : new RegExp("\\b" + e2 + "\\b").test(t2.className);
        }, closest: function(t2, e2) {
          if (t2.closest) return t2.closest(e2);
          if (t2.matches || t2.msMatchesSelector || t2.webkitMatchesSelector) {
            var n2 = t2;
            if (!document.documentElement.contains(n2)) return null;
            do {
              if ((n2.matches || n2.msMatchesSelector || n2.webkitMatchesSelector).call(n2, e2)) return n2;
              n2 = n2.parentElement || n2.parentNode;
            } while (null !== n2 && 1 === n2.nodeType);
            return null;
          }
          return console.error("Your browser is not supported"), null;
        }, getRootNode: h, hasShadowParent: function(t2) {
          return !!h(t2);
        }, isShadowDomSupported: d, getActiveElement: function() {
          var t2 = document.activeElement;
          return t2.shadowRoot && (t2 = t2.shadowRoot.activeElement), t2 === document.body && document.getSelection && (t2 = document.getSelection().focusNode || document.body), t2;
        } };
      }, function(t, e) {
        function n(t2) {
          "@babel/helpers - typeof";
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var i = { second: 1, minute: 60, hour: 3600, day: 86400, week: 604800, month: 2592e3, quarter: 7776e3, year: 31536e3 };
        function r(t2) {
          return !(!t2 || "object" !== n(t2)) && !!(t2.getFullYear && t2.getMonth && t2.getDate);
        }
        function a(t2, e2) {
          var n2 = [];
          if (t2.filter) return t2.filter(e2);
          for (var i2 = 0; i2 < t2.length; i2++) e2(t2[i2], i2) && (n2[n2.length] = t2[i2]);
          return n2;
        }
        function o(t2) {
          return 0 === t2;
        }
        t.exports = { getSecondsInUnit: function(t2) {
          return i[t2] || i.hour;
        }, forEach: function(t2, e2) {
          if (t2.forEach) t2.forEach(e2);
          else for (var n2 = t2.slice(), i2 = 0; i2 < n2.length; i2++) e2(n2[i2], i2);
        }, arrayMap: function(t2, e2) {
          if (t2.map) return t2.map(e2);
          for (var n2 = t2.slice(), i2 = [], r2 = 0; r2 < n2.length; r2++) i2.push(e2(n2[r2], r2));
          return i2;
        }, arrayIncludes: function(t2, e2) {
          if (t2.includes) return t2.includes(e2);
          for (var n2 = 0; n2 < t2.length; n2++) if (t2[n2] === e2) return true;
          return false;
        }, arrayFind: function(t2, e2) {
          if (t2.find) return t2.find(e2);
          for (var n2 = 0; n2 < t2.length; n2++) if (e2(t2[n2], n2)) return t2[n2];
        }, arrayFilter: a, arrayDifference: function(t2, e2) {
          return a(t2, function(t3, n2) {
            return !e2(t3, n2);
          });
        }, arraySome: function(t2, e2) {
          if (0 === t2.length) return false;
          for (var n2 = 0; n2 < t2.length; n2++) if (e2(t2[n2], n2, t2)) return true;
          return false;
        }, hashToArray: function(t2) {
          var e2 = [];
          for (var n2 in t2) t2.hasOwnProperty(n2) && e2.push(t2[n2]);
          return e2;
        }, sortArrayOfHash: function(t2, e2, n2) {
          var i2 = function(t3, e3) {
            return t3 < e3;
          };
          t2.sort(function(t3, r2) {
            return t3[e2] === r2[e2] ? 0 : n2 ? i2(t3[e2], r2[e2]) : i2(r2[e2], t3[e2]);
          });
        }, throttle: function(t2, e2) {
          var n2 = false;
          return function() {
            n2 || (t2.apply(null, arguments), n2 = true, setTimeout(function() {
              n2 = false;
            }, e2));
          };
        }, isArray: function(t2) {
          return Array.isArray ? Array.isArray(t2) : t2 && void 0 !== t2.length && t2.pop && t2.push;
        }, isDate: r, isValidDate: function(t2) {
          return r(t2) && !isNaN(t2.getTime());
        }, isStringObject: function(t2) {
          return t2 && "object" === n(t2) && "function String() { [native code] }" === Function.prototype.toString.call(t2.constructor);
        }, isNumberObject: function(t2) {
          return t2 && "object" === n(t2) && "function Number() { [native code] }" === Function.prototype.toString.call(t2.constructor);
        }, isBooleanObject: function(t2) {
          return t2 && "object" === n(t2) && "function Boolean() { [native code] }" === Function.prototype.toString.call(t2.constructor);
        }, delay: function(t2, e2) {
          var n2, i2 = function i3() {
            i3.$cancelTimeout(), i3.$pending = true;
            var r2 = Array.prototype.slice.call(arguments);
            n2 = setTimeout(function() {
              t2.apply(this, r2), i3.$pending = false;
            }, e2);
          };
          return i2.$pending = false, i2.$cancelTimeout = function() {
            clearTimeout(n2), i2.$pending = false;
          }, i2.$execute = function() {
            var e3 = Array.prototype.slice.call(arguments);
            t2.apply(this, e3), i2.$cancelTimeout();
          }, i2;
        }, objectKeys: function(t2) {
          if (Object.keys) return Object.keys(t2);
          var e2, n2 = [];
          for (e2 in t2) Object.prototype.hasOwnProperty.call(t2, e2) && n2.push(e2);
          return n2;
        }, isEventable: function(t2) {
          return t2.attachEvent && t2.detachEvent;
        }, replaceValidZeroId: function(t2, e2) {
          return o(t2) && !o(e2) && (t2 = "0"), t2;
        }, checkZeroId: o, findBinary: function(t2, e2) {
          for (var n2, i2, r2, a2 = 0, o2 = t2.length - 1; a2 <= o2; ) if (i2 = +t2[n2 = Math.floor((a2 + o2) / 2)], r2 = +t2[n2 - 1], i2 < e2) a2 = n2 + 1;
          else {
            if (!(i2 > e2)) {
              for (; +t2[n2] == +t2[n2 + 1]; ) n2++;
              return n2;
            }
            if (!isNaN(r2) && r2 < e2) return n2 - 1;
            o2 = n2 - 1;
          }
          return t2.length - 1;
        } };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          for (var n in e2) e2.hasOwnProperty(n) && (t2[n] = e2[n]);
          function i() {
            this.constructor = t2;
          }
          t2.prototype = null === e2 ? Object.create(e2) : (i.prototype = e2.prototype, new i());
        };
      }, function(t, e) {
        var n = function() {
          this._silent_mode = false, this.listeners = {};
        };
        n.prototype = { _silentStart: function() {
          this._silent_mode = true;
        }, _silentEnd: function() {
          this._silent_mode = false;
        } };
        var i = function(t2) {
          var e2 = {}, n2 = 0, i2 = function() {
            var n3 = true;
            for (var i3 in e2) {
              var r = e2[i3].apply(t2, arguments);
              n3 = n3 && r;
            }
            return n3;
          };
          return i2.addEvent = function(t3, r) {
            if ("function" == typeof t3) {
              var a;
              if (r && r.id ? a = r.id : (a = n2, n2++), r && r.once) {
                var o = t3;
                t3 = function() {
                  o(), i2.removeEvent(a);
                };
              }
              return e2[a] = t3, a;
            }
            return false;
          }, i2.removeEvent = function(t3) {
            delete e2[t3];
          }, i2.clear = function() {
            e2 = {};
          }, i2;
        };
        t.exports = function(t2) {
          var e2 = new n();
          t2.attachEvent = function(t3, n2, r) {
            t3 = "ev_" + t3.toLowerCase(), e2.listeners[t3] || (e2.listeners[t3] = i(this)), r && r.thisObject && (n2 = n2.bind(r.thisObject));
            var a = t3 + ":" + e2.listeners[t3].addEvent(n2, r);
            return r && r.id && (a = r.id), a;
          }, t2.attachAll = function(t3) {
            this.attachEvent("listen_all", t3);
          }, t2.callEvent = function(t3, n2) {
            if (e2._silent_mode) return true;
            var i2 = "ev_" + t3.toLowerCase(), r = e2.listeners;
            return r.ev_listen_all && r.ev_listen_all.apply(this, [t3].concat(n2)), !r[i2] || r[i2].apply(this, n2);
          }, t2.checkEvent = function(t3) {
            return !!e2.listeners["ev_" + t3.toLowerCase()];
          }, t2.detachEvent = function(t3) {
            if (t3) {
              var n2 = e2.listeners;
              for (var i2 in n2) n2[i2].removeEvent(t3);
              var r = t3.split(":");
              if (n2 = e2.listeners, 2 === r.length) {
                var a = r[0], o = r[1];
                n2[a] && n2[a].removeEvent(o);
              }
            }
          }, t2.detachAllEvents = function() {
            for (var t3 in e2.listeners) e2.listeners[t3].clear();
          };
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n, i, r) {
          var a = e2.getItemIndexByTopPosition(r.y) || 0, o = e2.getItemIndexByTopPosition(r.y_end) || i.count();
          return { start: Math.max(0, a - 1), end: Math.min(i.count(), o + 1) };
        };
      }, function(t, e) {
        function n() {
          console.log("Method is not implemented.");
        }
        function i() {
        }
        i.prototype.render = n, i.prototype.set_value = n, i.prototype.get_value = n, i.prototype.focus = n, t.exports = function(t2) {
          return i;
        };
      }, function(t, e) {
        var n = "undefined" != typeof window, i = { isIE: n && (navigator.userAgent.indexOf("MSIE") >= 0 || navigator.userAgent.indexOf("Trident") >= 0), isIE6: n && !XMLHttpRequest && navigator.userAgent.indexOf("MSIE") >= 0, isIE7: n && navigator.userAgent.indexOf("MSIE 7.0") >= 0 && navigator.userAgent.indexOf("Trident") < 0, isIE8: n && navigator.userAgent.indexOf("MSIE 8.0") >= 0 && navigator.userAgent.indexOf("Trident") >= 0, isOpera: n && navigator.userAgent.indexOf("Opera") >= 0, isChrome: n && navigator.userAgent.indexOf("Chrome") >= 0, isKHTML: n && (navigator.userAgent.indexOf("Safari") >= 0 || navigator.userAgent.indexOf("Konqueror") >= 0), isFF: n && navigator.userAgent.indexOf("Firefox") >= 0, isIPad: n && navigator.userAgent.search(/iPad/gi) >= 0, isEdge: n && -1 != navigator.userAgent.indexOf("Edge"), isNode: !n || "undefined" == typeof navigator };
        t.exports = i;
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = function() {
          };
          return e2.prototype = { show: function(t3, e3, n, i) {
          }, hide: function() {
          }, set_value: function(t3, e3, n, i) {
            this.get_input(i).value = t3;
          }, get_value: function(t3, e3, n) {
            return this.get_input(n).value || "";
          }, is_changed: function(t3, e3, n, i) {
            var r = this.get_value(e3, n, i);
            return r && t3 && r.valueOf && t3.valueOf ? r.valueOf() != t3.valueOf() : r != t3;
          }, is_valid: function(t3, e3, n, i) {
            return true;
          }, save: function(t3, e3, n) {
          }, get_input: function(t3) {
            return t3.querySelector("input");
          }, focus: function(t3) {
            var e3 = this.get_input(t3);
            e3 && (e3.focus && e3.focus(), e3.select && e3.select());
          } }, e2;
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n, i) {
          if ((i = e2 ? e2.config : i) && i.placeholder_task && n.exists(t2)) return n.getItem(t2).type === i.types.placeholder;
          return false;
        };
      }, function(t, e, n) {
        var i = n(7);
        t.exports = function(t2) {
          return i.isNode || !t2.$root;
        };
      }, function(t, e, n) {
        var i = n(0), r = n(4), a = n(1), o = function() {
          function t2(t3, e2, n2, o2) {
            t3 && (this.$container = a.toNode(t3), this.$parent = t3), this.$config = i.mixin(e2, { headerHeight: 33 }), this.$gantt = o2, this.$domEvents = o2._createDomEventScope(), this.$id = e2.id || "c" + i.uid(), this.$name = "cell", this.$factory = n2, r(this);
          }
          return t2.prototype.destructor = function() {
            this.$parent = this.$container = this.$view = null, this.$gantt.$services.getService("mouseEvents").detach("click", "gantt_header_arrow", this._headerClickHandler), this.$domEvents.detachAll(), this.callEvent("onDestroy", []), this.detachAllEvents();
          }, t2.prototype.cell = function(t3) {
            return null;
          }, t2.prototype.scrollTo = function(t3, e2) {
            var n2 = this.$view;
            this.$config.html && (n2 = this.$view.firstChild), 1 * t3 == t3 && (n2.scrollLeft = t3), 1 * e2 == e2 && (n2.scrollTop = e2);
          }, t2.prototype.clear = function() {
            this.getNode().innerHTML = "", this.getNode().className = "gantt_layout_content", this.getNode().style.padding = "0";
          }, t2.prototype.resize = function(t3) {
            if (this.$parent) return this.$parent.resize(t3);
            false === t3 && (this.$preResize = true);
            var e2 = this.$container, n2 = e2.offsetWidth, i2 = e2.offsetHeight, r2 = this.getSize();
            e2 === document.body && (n2 = document.body.offsetWidth, i2 = document.body.offsetHeight), n2 < r2.minWidth && (n2 = r2.minWidth), n2 > r2.maxWidth && (n2 = r2.maxWidth), i2 < r2.minHeight && (i2 = r2.minHeight), i2 > r2.maxHeight && (i2 = r2.maxHeight), this.setSize(n2, i2), this.$preResize, this.$preResize = false;
          }, t2.prototype.hide = function() {
            this._hide(true), this.resize();
          }, t2.prototype.show = function(t3) {
            this._hide(false), t3 && this.$parent && this.$parent.show(), this.resize();
          }, t2.prototype._hide = function(t3) {
            if (true === t3 && this.$view.parentNode) this.$view.parentNode.removeChild(this.$view);
            else if (false === t3 && !this.$view.parentNode) {
              var e2 = this.$parent.cellIndex(this.$id);
              this.$parent.moveView(this, e2);
            }
            this.$config.hidden = t3;
          }, t2.prototype.$toHTML = function(t3, e2) {
            void 0 === t3 && (t3 = ""), e2 = [e2 || "", this.$config.css || ""].join(" ");
            var n2 = this.$config, i2 = "";
            n2.raw ? t3 = "string" == typeof n2.raw ? n2.raw : "" : (t3 || (t3 = "<div class='gantt_layout_content' " + (e2 ? " class='" + e2 + "' " : "") + " >" + (n2.html || "") + "</div>"), n2.header && (i2 = "<div class='gantt_layout_header'>" + (n2.canCollapse ? "<div class='gantt_layout_header_arrow'></div>" : "") + "<div class='gantt_layout_header_content'>" + n2.header + "</div></div>"));
            return "<div class='gantt_layout_cell " + e2 + "' data-cell-id='" + this.$id + "'>" + i2 + t3 + "</div>";
          }, t2.prototype.$fill = function(t3, e2) {
            this.$view = t3, this.$parent = e2, this.init();
          }, t2.prototype.getNode = function() {
            return this.$view.querySelector("gantt_layout_cell") || this.$view;
          }, t2.prototype.init = function() {
            var t3 = this;
            this._headerClickHandler = function(e2) {
              a.locateAttribute(e2, "data-cell-id") == t3.$id && t3.toggle();
            }, this.$gantt.$services.getService("mouseEvents").delegate("click", "gantt_header_arrow", this._headerClickHandler), this.callEvent("onReady", []);
          }, t2.prototype.toggle = function() {
            this.$config.collapsed = !this.$config.collapsed, this.resize();
          }, t2.prototype.getSize = function() {
            var t3 = { height: this.$config.height || 0, width: this.$config.width || 0, gravity: this.$config.gravity || 1, minHeight: this.$config.minHeight || 0, minWidth: this.$config.minWidth || 0, maxHeight: this.$config.maxHeight || 1e11, maxWidth: this.$config.maxWidth || 1e11 };
            if (this.$config.collapsed) {
              var e2 = "x" === this.$config.mode;
              t3[e2 ? "width" : "height"] = t3[e2 ? "maxWidth" : "maxHeight"] = this.$config.headerHeight;
            }
            return t3;
          }, t2.prototype.getContentSize = function() {
            var t3 = this.$lastSize.contentX;
            t3 !== 1 * t3 && (t3 = this.$lastSize.width);
            var e2 = this.$lastSize.contentY;
            return e2 !== 1 * e2 && (e2 = this.$lastSize.height), { width: t3, height: e2 };
          }, t2.prototype._getBorderSizes = function() {
            var t3 = { top: 0, right: 0, bottom: 0, left: 0, horizontal: 0, vertical: 0 };
            return this._currentBorders && (this._currentBorders[this._borders.left] && (t3.left = 1, t3.horizontal++), this._currentBorders[this._borders.right] && (t3.right = 1, t3.horizontal++), this._currentBorders[this._borders.top] && (t3.top = 1, t3.vertical++), this._currentBorders[this._borders.bottom] && (t3.bottom = 1, t3.vertical++)), t3;
          }, t2.prototype.setSize = function(t3, e2) {
            this.$view.style.width = t3 + "px", this.$view.style.height = e2 + "px";
            var n2 = this._getBorderSizes(), i2 = e2 - n2.vertical, r2 = t3 - n2.horizontal;
            this.$lastSize = { x: t3, y: e2, contentX: r2, contentY: i2 }, this.$config.header ? this._sizeHeader() : this._sizeContent();
          }, t2.prototype._borders = { left: "gantt_layout_cell_border_left", right: "gantt_layout_cell_border_right", top: "gantt_layout_cell_border_top", bottom: "gantt_layout_cell_border_bottom" }, t2.prototype._setBorders = function(t3, e2) {
            e2 || (e2 = this);
            var n2 = e2.$view;
            for (var i2 in this._borders) a.removeClassName(n2, this._borders[i2]);
            "string" == typeof t3 && (t3 = [t3]);
            var r2 = {};
            for (i2 = 0; i2 < t3.length; i2++) a.addClassName(n2, t3[i2]), r2[t3[i2]] = true;
            e2._currentBorders = r2;
          }, t2.prototype._sizeContent = function() {
            var t3 = this.$view.childNodes[0];
            t3 && "gantt_layout_content" == t3.className && (t3.style.height = this.$lastSize.contentY + "px");
          }, t2.prototype._sizeHeader = function() {
            var t3 = this.$lastSize;
            t3.contentY -= this.$config.headerHeight;
            var e2 = this.$view.childNodes[0], n2 = this.$view.childNodes[1], i2 = "x" === this.$config.mode;
            if (this.$config.collapsed) if (n2.style.display = "none", i2) {
              e2.className = "gantt_layout_header collapsed_x", e2.style.width = t3.y + "px";
              var r2 = Math.floor(t3.y / 2 - t3.x / 2);
              e2.style.transform = "rotate(90deg) translate(" + r2 + "px, " + r2 + "px)", n2.style.display = "none";
            } else e2.className = "gantt_layout_header collapsed_y";
            else e2.className = i2 ? "gantt_layout_header" : "gantt_layout_header vertical", e2.style.width = "auto", e2.style.transform = "", n2.style.display = "", n2.style.height = t3.contentY + "px";
            e2.style.height = this.$config.headerHeight + "px";
          }, t2;
        }();
        t.exports = o;
      }, function(t, e, n) {
        (function(e2) {
          var n2;
          n2 = "undefined" != typeof window ? window : e2, t.exports = n2;
        }).call(this, n(13));
      }, function(t, e) {
        function n(t2) {
          "@babel/helpers - typeof";
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var i;
        i = /* @__PURE__ */ function() {
          return this;
        }();
        try {
          i = i || new Function("return this")();
        } catch (t2) {
          "object" === ("undefined" == typeof window ? "undefined" : n(window)) && (i = window);
        }
        t.exports = i;
      }, function(t, e) {
        t.exports = function(t2) {
          return t2.config.smart_rendering && t2._smart_render;
        };
      }, function(t, e, n) {
        var i = n(3), r = n(43);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function a() {
            return e2.apply(this, arguments) || this;
          }
          return i(a, e2), a.prototype.render = function(t3) {
            var e3 = "<div class='gantt_cal_ltext' style='height:" + ((t3.height || "23") + "px") + ";'>";
            return e3 += r.getHtmlSelect(t3.options, [{ key: "style", value: "width:100%;" }]), e3 += "</div>";
          }, a.prototype.set_value = function(t3, e3, n2, i2) {
            var r2 = t3.firstChild;
            !r2._dhx_onchange && i2.onchange && (r2.onchange = i2.onchange, r2._dhx_onchange = true), void 0 === e3 && (e3 = (r2.options[0] || {}).value), r2.value = e3 || "";
          }, a.prototype.get_value = function(t3) {
            return t3.firstChild.value;
          }, a.prototype.focus = function(e3) {
            var n2 = e3.firstChild;
            t2._focus(n2, true);
          }, a;
        };
      }, function(t, e, n) {
      }, , function(t, e, n) {
        var i = n(0);
        t.exports = function(t2) {
          var e2 = t2.date, n2 = t2.$services;
          return { getSum: function(t3, e3, n3) {
            void 0 === n3 && (n3 = t3.length - 1), void 0 === e3 && (e3 = 0);
            for (var i2 = 0, r = e3; r <= n3; r++) i2 += t3[r];
            return i2;
          }, setSumWidth: function(t3, e3, n3, i2) {
            var r = e3.width;
            void 0 === i2 && (i2 = r.length - 1), void 0 === n3 && (n3 = 0);
            var a = i2 - n3 + 1;
            if (!(n3 > r.length - 1 || a <= 0 || i2 > r.length - 1)) {
              var o = t3 - this.getSum(r, n3, i2);
              this.adjustSize(o, r, n3, i2), this.adjustSize(-o, r, i2 + 1), e3.full_width = this.getSum(r);
            }
          }, splitSize: function(t3, e3) {
            for (var n3 = [], i2 = 0; i2 < e3; i2++) n3[i2] = 0;
            return this.adjustSize(t3, n3), n3;
          }, adjustSize: function(t3, e3, n3, i2) {
            n3 || (n3 = 0), void 0 === i2 && (i2 = e3.length - 1);
            for (var r = i2 - n3 + 1, a = this.getSum(e3, n3, i2), o = n3; o <= i2; o++) {
              var s = Math.floor(t3 * (a ? e3[o] / a : 1 / r));
              a -= e3[o], t3 -= s, r--, e3[o] += s;
            }
            e3[e3.length - 1] += t3;
          }, sortScales: function(t3) {
            function n3(t4, n4) {
              var i3 = new Date(1970, 0, 1);
              return e2.add(i3, n4, t4) - i3;
            }
            t3.sort(function(t4, e3) {
              return n3(t4.unit, t4.step) < n3(e3.unit, e3.step) ? 1 : n3(t4.unit, t4.step) > n3(e3.unit, e3.step) ? -1 : 0;
            });
            for (var i2 = 0; i2 < t3.length; i2++) t3[i2].index = i2;
          }, _isLegacyMode: function(e3) {
            var n3 = e3 || t2.config;
            return n3.scale_unit || n3.date_scale || n3.subscales;
          }, _prepareScaleObject: function(e3) {
            var n3 = e3.format;
            return n3 || (n3 = e3.template || e3.date || "%d %M"), "string" == typeof n3 && (n3 = t2.date.date_to_str(n3)), { unit: e3.unit || "day", step: e3.step || 1, format: n3, css: e3.css };
          }, primaryScale: function(e3) {
            var i2, r = n2.getService("templateLoader"), a = this._isLegacyMode(e3), o = e3 || t2.config;
            if (a) r.initTemplate("date_scale", void 0, void 0, o, t2.config.templates), i2 = { unit: t2.config.scale_unit, step: t2.config.step, template: t2.templates.date_scale, date: t2.config.date_scale, css: t2.templates.scale_cell_class };
            else {
              var s = o.scales[0];
              i2 = { unit: s.unit, step: s.step, template: s.template, format: s.format, date: s.date, css: s.css || t2.templates.scale_cell_class };
            }
            return this._prepareScaleObject(i2);
          }, getSubScales: function(e3) {
            var n3 = this._isLegacyMode(e3), i2 = e3 || t2.config;
            return (n3 ? i2.subscales || [] : i2.scales.slice(1)).map((function(t3) {
              return this._prepareScaleObject(t3);
            }).bind(this));
          }, prepareConfigs: function(t3, e3, n3, i2, r, a, o) {
            for (var s = this.splitSize(i2, t3.length), l = n3, c = [], u = t3.length - 1; u >= 0; u--) {
              var d = u == t3.length - 1, h = this.initScaleConfig(t3[u], r, a);
              d && this.processIgnores(h), this.initColSizes(h, e3, l, s[u]), this.limitVisibleRange(h), d && (l = h.full_width), c.unshift(h);
            }
            for (u = 0; u < c.length - 1; u++) this.alineScaleColumns(c[c.length - 1], c[u]);
            for (u = 0; u < c.length; u++) o && this.reverseScale(c[u]), this.setPosSettings(c[u]);
            return c;
          }, reverseScale: function(t3) {
            t3.width = t3.width.reverse(), t3.trace_x = t3.trace_x.reverse();
            var e3 = t3.trace_indexes;
            t3.trace_indexes = {}, t3.trace_index_transition = {}, t3.rtl = true;
            for (var n3 = 0; n3 < t3.trace_x.length; n3++) t3.trace_indexes[t3.trace_x[n3].valueOf()] = n3, t3.trace_index_transition[e3[t3.trace_x[n3].valueOf()]] = n3;
            return t3;
          }, setPosSettings: function(t3) {
            for (var e3 = 0, n3 = t3.trace_x.length; e3 < n3; e3++) t3.left.push((t3.width[e3 - 1] || 0) + (t3.left[e3 - 1] || 0));
          }, _ignore_time_config: function(n3, i2) {
            if (t2.config.skip_off_time) {
              for (var r = true, a = n3, o = 0; o < i2.step; o++) o && (a = e2.add(n3, o, i2.unit)), r = r && !this.isWorkTime(a, i2.unit);
              return r;
            }
            return false;
          }, processIgnores: function(t3) {
            t3.ignore_x = {}, t3.display_count = t3.count;
          }, initColSizes: function(t3, n3, i2, r) {
            var a = i2;
            t3.height = r;
            var o = void 0 === t3.display_count ? t3.count : t3.display_count;
            o || (o = 1), t3.col_width = Math.floor(a / o), n3 && t3.col_width < n3 && (t3.col_width = n3, a = t3.col_width * o), t3.width = [];
            for (var s = t3.ignore_x || {}, l = 0; l < t3.trace_x.length; l++) if (s[t3.trace_x[l].valueOf()] || t3.display_count == t3.count) t3.width[l] = 0;
            else {
              var c = 1;
              "month" == t3.unit && (c = Math.round((e2.add(t3.trace_x[l], t3.step, t3.unit) - t3.trace_x[l]) / 864e5)), t3.width[l] = c;
            }
            this.adjustSize(a - this.getSum(t3.width), t3.width), t3.full_width = this.getSum(t3.width);
          }, initScaleConfig: function(t3, e3, n3) {
            var r = i.mixin({ count: 0, col_width: 0, full_width: 0, height: 0, width: [], left: [], trace_x: [], trace_indexes: {}, min_date: new Date(e3), max_date: new Date(n3) }, t3);
            return this.eachColumn(t3.unit, t3.step, e3, n3, function(t4) {
              r.count++, r.trace_x.push(new Date(t4)), r.trace_indexes[t4.valueOf()] = r.trace_x.length - 1;
            }), r.trace_x_ascending = r.trace_x.slice(), r;
          }, iterateScales: function(t3, e3, n3, i2, r) {
            for (var a = e3.trace_x, o = t3.trace_x, s = n3 || 0, l = i2 || o.length - 1, c = 0, u = 1; u < a.length; u++) {
              var d = t3.trace_indexes[+a[u]];
              void 0 !== d && d <= l && (r && r.apply(this, [c, u, s, d]), s = d, c = u);
            }
          }, alineScaleColumns: function(t3, e3, n3, i2) {
            this.iterateScales(t3, e3, n3, i2, function(n4, i3, r, a) {
              var o = this.getSum(t3.width, r, a - 1);
              this.getSum(e3.width, n4, i3 - 1) != o && this.setSumWidth(o, e3, n4, i3 - 1);
            });
          }, eachColumn: function(n3, i2, r, a, o) {
            var s = new Date(r), l = new Date(a);
            e2[n3 + "_start"] && (s = e2[n3 + "_start"](s));
            var c = new Date(s);
            for (+c >= +l && (l = e2.add(c, i2, n3)); +c < +l; ) {
              o.call(this, new Date(c));
              var u = c.getTimezoneOffset();
              c = e2.add(c, i2, n3), c = t2._correct_dst_change(c, u, i2, n3), e2[n3 + "_start"] && (c = e2[n3 + "_start"](c));
            }
          }, limitVisibleRange: function(t3) {
            var n3 = t3.trace_x, i2 = t3.width.length - 1, r = 0;
            if (+n3[0] < +t3.min_date && 0 != i2) {
              var a = Math.floor(t3.width[0] * ((n3[1] - t3.min_date) / (n3[1] - n3[0])));
              r += t3.width[0] - a, t3.width[0] = a, n3[0] = new Date(t3.min_date);
            }
            var o = n3.length - 1, s = n3[o], l = e2.add(s, t3.step, t3.unit);
            if (+l > +t3.max_date && o > 0 && (a = t3.width[o] - Math.floor(t3.width[o] * ((l - t3.max_date) / (l - s))), r += t3.width[o] - a, t3.width[o] = a), r) {
              for (var c = this.getSum(t3.width), u = 0, d = 0; d < t3.width.length; d++) {
                var h = Math.floor(r * (t3.width[d] / c));
                t3.width[d] += h, u += h;
              }
              this.adjustSize(r - u, t3.width);
            }
          } };
        };
      }, function(t, e, n) {
        var i = n(1), r = n(0), a = n(4), o = n(132), s = n(38), l = n(134), c = n(135).default, u = function(t2, e2, n2, i2) {
          this.$config = r.mixin({}, e2 || {}), this.$gantt = i2, this.$parent = t2, a(this), this.$state = {}, r.mixin(this, s(this));
        };
        u.prototype = { init: function(t2) {
          var e2 = this.$gantt, i2 = e2._waiAria.gridAttrString(), r2 = e2._waiAria.gridDataAttrString(), a2 = this.$getConfig(), s2 = a2.reorder_grid_columns || false;
          void 0 !== this.$config.reorder_grid_columns && (s2 = this.$config.reorder_grid_columns), t2.innerHTML = "<div class='gantt_grid' style='height:inherit;width:inherit;' " + i2 + "></div>", this.$grid = t2.childNodes[0], this.$grid.innerHTML = "<div class='gantt_grid_scale' " + e2._waiAria.gridScaleRowAttrString() + "></div><div class='gantt_grid_data' " + r2 + "></div>", this.$grid_scale = this.$grid.childNodes[0], this.$grid_data = this.$grid.childNodes[1];
          var u2 = a2[this.$config.bind + "_attribute"];
          if (!u2 && this.$config.bind && (u2 = "data-" + this.$config.bind + "-id"), this.$config.item_attribute = u2 || null, !this.$config.layers) {
            var d = this._createLayerConfig();
            this.$config.layers = d;
          }
          var h = o(e2, this);
          h.init(), this._renderHeaderResizers = h.doOnRender, this._mouseDelegates = n(20)(e2), l(e2, this).init(), this._addLayers(this.$gantt), this._initEvents(), s2 && (this._columnDND = new c(e2, this), this._columnDND.init()), this.callEvent("onReady", []);
        }, _validateColumnWidth: function(t2, e2) {
          var n2 = t2[e2];
          if (n2 && "*" != n2) {
            var i2 = this.$gantt, r2 = 1 * n2;
            isNaN(r2) ? i2.assert(false, "Wrong " + e2 + " value of column " + t2.name) : t2[e2] = r2;
          }
        }, setSize: function(t2, e2) {
          this.$config.width = this.$state.width = t2, this.$config.height = this.$state.height = e2;
          for (var n2, i2 = this.getGridColumns(), r2 = 0, a2 = (u2 = this.$getConfig()).grid_elastic_columns, o2 = 0, s2 = i2.length; o2 < s2; o2++) this._validateColumnWidth(i2[o2], "min_width"), this._validateColumnWidth(i2[o2], "max_width"), this._validateColumnWidth(i2[o2], "width"), r2 += 1 * i2[o2].width;
          if (!isNaN(r2) && this.$config.scrollable || (r2 = n2 = this._setColumnsWidth(t2 + 1)), this.$config.scrollable && a2 && !isNaN(r2)) {
            var l2 = 0;
            i2.forEach(function(t3) {
              l2 += t3.min_width || u2.min_grid_column_width;
            });
            var c2 = Math.max(l2, t2);
            r2 = this._setColumnsWidth(c2), n2 = t2;
          }
          this.$config.scrollable ? (this.$grid_scale.style.width = r2 + "px", this.$grid_data.style.width = r2 + "px") : (this.$grid_scale.style.width = "inherit", this.$grid_data.style.width = "inherit"), this.$config.width -= 1;
          var u2 = this.$getConfig();
          n2 !== t2 && (void 0 !== n2 ? (u2.grid_width = n2, this.$config.width = n2 - 1) : isNaN(r2) || (this._setColumnsWidth(r2), u2.grid_width = r2, this.$config.width = r2 - 1));
          var d = Math.max(this.$state.height - u2.scale_height, 0);
          this.$grid_data.style.height = d + "px", this.refresh();
        }, getSize: function() {
          var t2 = this.$getConfig(), e2 = this.$config.rowStore ? this.getTotalHeight() : 0, n2 = this._getGridWidth();
          return { x: this.$state.width, y: this.$state.height, contentX: this.isVisible() ? n2 : 0, contentY: this.isVisible() ? t2.scale_height + e2 : 0, scrollHeight: this.isVisible() ? e2 : 0, scrollWidth: this.isVisible() ? n2 : 0 };
        }, _bindStore: function() {
          if (this.$config.bind) {
            var t2 = this.$gantt.getDatastore(this.$config.bind);
            if (this.$config.rowStore = t2, t2 && !t2._gridCacheAttached) {
              var e2 = this;
              t2._gridCacheAttached = t2.attachEvent("onBeforeFilter", function() {
                e2._resetTopPositionHeight();
              });
            }
          }
        }, _unbindStore: function() {
          if (this.$config.bind) {
            var t2 = this.$gantt.getDatastore(this.$config.bind);
            t2 && t2._gridCacheAttached && (t2.detachEvent(t2._gridCacheAttached), t2._gridCacheAttached = false);
          }
        }, refresh: function() {
          this._bindStore(), this._resetTopPositionHeight(), this._resetHeight(), this._initSmartRenderingPlaceholder(), this._calculateGridWidth(), this._renderGridHeader();
        }, getViewPort: function() {
          var t2 = this.$config.scrollLeft || 0, e2 = this.$config.scrollTop || 0, n2 = this.$config.height || 0, i2 = this.$config.width || 0;
          return { y: e2, y_end: e2 + n2, x: t2, x_end: t2 + i2, height: n2, width: i2 };
        }, scrollTo: function(t2, e2) {
          if (this.isVisible()) {
            var n2 = false;
            this.$config.scrollTop = this.$config.scrollTop || 0, this.$config.scrollLeft = this.$config.scrollLeft || 0, 1 * t2 == t2 && (this.$config.scrollLeft = this.$state.scrollLeft = this.$grid.scrollLeft = t2, n2 = true), 1 * e2 == e2 && (this.$config.scrollTop = this.$state.scrollTop = this.$grid_data.scrollTop = e2, n2 = true), n2 && this.callEvent("onScroll", [this.$config.scrollLeft, this.$config.scrollTop]);
          }
        }, getColumnIndex: function(t2, e2) {
          for (var n2 = this.$getConfig().columns, i2 = 0, r2 = 0; r2 < n2.length; r2++) if (e2 && n2[r2].hide && i2++, n2[r2].name == t2) return r2 - i2;
          return null;
        }, getColumn: function(t2) {
          var e2 = this.getColumnIndex(t2);
          return null === e2 ? null : this.$getConfig().columns[e2];
        }, getGridColumns: function() {
          return this.$getConfig().columns.slice();
        }, isVisible: function() {
          return this.$parent && this.$parent.$config ? !this.$parent.$config.hidden : this.$grid.offsetWidth;
        }, _createLayerConfig: function() {
          var t2 = this.$gantt, e2 = this;
          return [{ renderer: t2.$ui.layers.gridLine(), container: this.$grid_data, filter: [function() {
            return e2.isVisible();
          }] }, { renderer: t2.$ui.layers.gridTaskRowResizer(), container: this.$grid_data, append: true, filter: [function() {
            return t2.config.resize_rows;
          }] }];
        }, _addLayers: function(t2) {
          if (this.$config.bind) {
            this._taskLayers = [];
            var e2 = this, n2 = this.$gantt.$services.getService("layers"), i2 = n2.getDataRender(this.$config.bind);
            i2 || (i2 = n2.createDataRender({ name: this.$config.bind, defaultContainer: function() {
              return e2.$grid_data;
            } }));
            for (var r2 = this.$config.layers, a2 = 0; r2 && a2 < r2.length; a2++) {
              var o2 = r2[a2];
              o2.view = this;
              var s2 = i2.addLayer(o2);
              this._taskLayers.push(s2);
            }
            this._bindStore(), this._initSmartRenderingPlaceholder();
          }
        }, _refreshPlaceholderOnStoreUpdate: function(t2) {
          var e2 = this.$getConfig(), n2 = this.$config.rowStore;
          if (n2 && null === t2 && this.isVisible() && e2.smart_rendering) {
            var i2;
            if (this.$config.scrollY) {
              var r2 = this.$gantt.$ui.getView(this.$config.scrollY);
              r2 && (i2 = r2.getScrollState().scrollSize);
            }
            if (i2 || (i2 = n2 ? this.getTotalHeight() : 0), i2) {
              this.$rowsPlaceholder && this.$rowsPlaceholder.parentNode && this.$rowsPlaceholder.parentNode.removeChild(this.$rowsPlaceholder);
              var a2 = this.$rowsPlaceholder = document.createElement("div");
              a2.style.visibility = "hidden", a2.style.height = i2 + "px", a2.style.width = "1px", this.$grid_data.appendChild(a2);
            }
          }
        }, _initSmartRenderingPlaceholder: function() {
          var t2 = this.$config.rowStore;
          t2 && (this._initSmartRenderingPlaceholder = function() {
          }, this._staticBgHandler = t2.attachEvent("onStoreUpdated", r.bind(this._refreshPlaceholderOnStoreUpdate, this)));
        }, _initEvents: function() {
          var t2 = this.$gantt;
          this._mouseDelegates.delegate("click", "gantt_close", t2.bind(function(t3, e2, n2) {
            var r2 = this.$config.rowStore;
            if (!r2) return true;
            var a2 = i.locateAttribute(t3, this.$config.item_attribute);
            return a2 && r2.close(a2.getAttribute(this.$config.item_attribute)), false;
          }, this), this.$grid), this._mouseDelegates.delegate("click", "gantt_open", t2.bind(function(t3, e2, n2) {
            var r2 = this.$config.rowStore;
            if (!r2) return true;
            var a2 = i.locateAttribute(t3, this.$config.item_attribute);
            return a2 && r2.open(a2.getAttribute(this.$config.item_attribute)), false;
          }, this), this.$grid);
        }, _clearLayers: function(t2) {
          var e2 = this.$gantt.$services.getService("layers").getDataRender(this.$config.bind);
          if (this._taskLayers) for (var n2 = 0; n2 < this._taskLayers.length; n2++) e2.removeLayer(this._taskLayers[n2]);
          this._taskLayers = [];
        }, _getColumnWidth: function(t2, e2, n2) {
          var i2 = t2.min_width || e2.min_grid_column_width, r2 = Math.max(n2, i2 || 10);
          return t2.max_width && (r2 = Math.min(r2, t2.max_width)), r2;
        }, _checkGridColumnMinWidthLimits: function(t2, e2) {
          for (var n2 = 0, i2 = t2.length; n2 < i2; n2++) {
            var r2 = 1 * t2[n2].width;
            !t2[n2].min_width && r2 < e2.min_grid_column_width && (t2[n2].min_width = r2);
          }
        }, _getGridWidthLimits: function() {
          for (var t2 = this.$getConfig(), e2 = this.getGridColumns(), n2 = 0, i2 = 0, r2 = 0; r2 < e2.length; r2++) n2 += e2[r2].min_width ? e2[r2].min_width : t2.min_grid_column_width, void 0 !== i2 && (i2 = e2[r2].max_width ? i2 + e2[r2].max_width : void 0);
          return this._checkGridColumnMinWidthLimits(e2, t2), [n2, i2];
        }, _setColumnsWidth: function(t2, e2) {
          var n2 = this.$getConfig(), i2 = this.getGridColumns(), r2 = 0, a2 = t2;
          e2 = window.isNaN(e2) ? -1 : e2;
          for (var o2 = 0, s2 = i2.length; o2 < s2; o2++) r2 += 1 * i2[o2].width;
          if (window.isNaN(r2)) {
            this._calculateGridWidth(), r2 = 0;
            for (o2 = 0, s2 = i2.length; o2 < s2; o2++) r2 += 1 * i2[o2].width;
          }
          var l2 = a2 - r2, c2 = 0;
          for (o2 = 0; o2 < e2 + 1; o2++) c2 += i2[o2].width;
          r2 -= c2;
          for (o2 = e2 + 1; o2 < i2.length; o2++) {
            var u2 = i2[o2], d = Math.round(l2 * (u2.width / r2));
            l2 < 0 ? u2.min_width && u2.width + d < u2.min_width ? d = u2.min_width - u2.width : !u2.min_width && n2.min_grid_column_width && u2.width + d < n2.min_grid_column_width && (d = n2.min_grid_column_width - u2.width) : u2.max_width && u2.width + d > u2.max_width && (d = u2.max_width - u2.width), r2 -= u2.width, u2.width += d, l2 -= d;
          }
          for (var h = l2 > 0 ? 1 : -1; l2 > 0 && 1 === h || l2 < 0 && -1 === h; ) {
            var f = l2;
            for (o2 = e2 + 1; o2 < i2.length; o2++) {
              var _;
              if ((_ = i2[o2].width + h) == this._getColumnWidth(i2[o2], n2, _) && (l2 -= h, i2[o2].width = _), !l2) break;
            }
            if (f == l2) break;
          }
          l2 && e2 > -1 && ((_ = i2[e2].width + l2) == this._getColumnWidth(i2[e2], n2, _) && (i2[e2].width = _));
          return this._getColsTotalWidth();
        }, _getColsTotalWidth: function() {
          for (var t2 = this.getGridColumns(), e2 = 0, n2 = 0; n2 < t2.length; n2++) {
            var i2 = parseFloat(t2[n2].width);
            if (window.isNaN(i2)) return false;
            e2 += i2;
          }
          return e2;
        }, _calculateGridWidth: function() {
          for (var t2 = this.$getConfig(), e2 = this.getGridColumns(), n2 = 0, i2 = [], r2 = [], a2 = 0; a2 < e2.length; a2++) {
            var o2 = parseFloat(e2[a2].width);
            window.isNaN(o2) && (o2 = t2.min_grid_column_width || 10, i2.push(a2)), r2[a2] = o2, n2 += o2;
          }
          var s2 = this._getGridWidth() + 1;
          if (t2.autofit || i2.length) {
            var l2 = s2 - n2;
            if (t2.autofit && !t2.grid_elastic_columns) for (a2 = 0; a2 < r2.length; a2++) {
              var c2 = Math.round(l2 / (r2.length - a2));
              r2[a2] += c2, (u2 = this._getColumnWidth(e2[a2], t2, r2[a2])) != r2[a2] && (c2 = u2 - r2[a2], r2[a2] = u2), l2 -= c2;
            }
            else if (i2.length) for (a2 = 0; a2 < i2.length; a2++) {
              c2 = Math.round(l2 / (i2.length - a2));
              var u2, d = i2[a2];
              r2[d] += c2, (u2 = this._getColumnWidth(e2[d], t2, r2[d])) != r2[d] && (c2 = u2 - r2[d], r2[d] = u2), l2 -= c2;
            }
            for (a2 = 0; a2 < r2.length; a2++) e2[a2].width = r2[a2];
          } else {
            var h = s2 != n2;
            this.$config.width = n2 - 1, t2.grid_width = n2, h && this.$parent._setContentSize(this.$config.width, null);
          }
        }, _renderGridHeader: function() {
          var t2 = this.$gantt, e2 = this.$getConfig(), n2 = this.$gantt.locale, i2 = this.$gantt.templates, r2 = this.getGridColumns();
          e2.rtl && (r2 = r2.reverse());
          for (var a2 = [], o2 = 0, s2 = n2.labels, l2 = e2.scale_height - 1, c2 = 0; c2 < r2.length; c2++) {
            var u2 = c2 == r2.length - 1, d = r2[c2];
            d.name || (d.name = t2.uid() + "");
            var h = 1 * d.width, f = this._getGridWidth();
            u2 && f > o2 + h && (d.width = h = f - o2), o2 += h;
            var _ = t2._sort && d.name == t2._sort.name ? "<div class='gantt_sort gantt_" + t2._sort.direction + "'></div>" : "", g = ["gantt_grid_head_cell", "gantt_grid_head_" + d.name, u2 ? "gantt_last_cell" : "", i2.grid_header_class(d.name, d)].join(" "), p = "width:" + (h - (u2 ? 1 : 0)) + "px;", v = d.label || s2["column_" + d.name] || s2[d.name];
            v = v || "";
            var m = "<div class='" + g + "' style='" + p + "' " + t2._waiAria.gridScaleCellAttrString(d, v) + " data-column-id='" + d.name + "' column_id='" + d.name + "' data-column-name='" + d.name + "' data-column-index='" + c2 + "'>" + v + _ + "</div>";
            a2.push(m);
          }
          this.$grid_scale.style.height = e2.scale_height + "px", this.$grid_scale.style.lineHeight = l2 + "px", this.$grid_scale.innerHTML = a2.join(""), this._renderHeaderResizers && this._renderHeaderResizers();
        }, _getGridWidth: function() {
          return this.$config.width;
        }, destructor: function() {
          this._clearLayers(this.$gantt), this._mouseDelegates && (this._mouseDelegates.destructor(), this._mouseDelegates = null), this._unbindStore(), this.$grid = null, this.$grid_scale = null, this.$grid_data = null, this.$gantt = null, this.$config.rowStore && (this.$config.rowStore.detachEvent(this._staticBgHandler), this.$config.rowStore = null), this.callEvent("onDestroy", []), this.detachAllEvents();
        } }, t.exports = u;
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = [];
          return { delegate: function(n, i, r, a) {
            e2.push([n, i, r, a]), t2.$services.getService("mouseEvents").delegate(n, i, r, a);
          }, destructor: function() {
            for (var n = t2.$services.getService("mouseEvents"), i = 0; i < e2.length; i++) {
              var r = e2[i];
              n.detach(r[0], r[1], r[2], r[3]);
            }
            e2 = [];
          } };
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n) {
          return { top: e2.getItemTop(t2.id), height: e2.getItemHeight(t2.id), left: 0, right: 1 / 0 };
        };
      }, function(t, e, n) {
        var i = n(18), r = n(4), a = n(0), o = n(2), s = n(38), l = n(211), c = function(t2, e2, n2, o2) {
          this.$config = a.mixin({}, e2 || {}), this.$scaleHelper = new i(o2), this.$gantt = o2, this._posFromDateCache = {}, this._timelineDragScroll = null, a.mixin(this, s(this)), r(this);
        };
        c.prototype = { init: function(t2) {
          t2.innerHTML += "<div class='gantt_task' style='width:inherit;height:inherit;'></div>", this.$task = t2.childNodes[0], this.$task.innerHTML = "<div class='gantt_task_scale'></div><div class='gantt_data_area'></div>", this.$task_scale = this.$task.childNodes[0], this.$task_data = this.$task.childNodes[1], this.$task_data.innerHTML = "<div class='gantt_task_bg'></div><div class='gantt_links_area'></div><div class='gantt_bars_area'></div>", this.$task_bg = this.$task_data.childNodes[0], this.$task_links = this.$task_data.childNodes[1], this.$task_bars = this.$task_data.childNodes[2], this._tasks = { col_width: 0, width: [], full_width: 0, trace_x: [], rendered: {} };
          var e2 = this.$getConfig(), n2 = e2[this.$config.bind + "_attribute"], i2 = e2[this.$config.bindLinks + "_attribute"];
          !n2 && this.$config.bind && (n2 = "data-" + this.$config.bind + "-id"), !i2 && this.$config.bindLinks && (i2 = "data-" + this.$config.bindLinks + "-id"), this.$config.item_attribute = n2 || null, this.$config.link_attribute = i2 || null;
          var r2 = this._createLayerConfig();
          this.$config.layers || (this.$config.layers = r2.tasks), this.$config.linkLayers || (this.$config.linkLayers = r2.links), this._attachLayers(this.$gantt), this.callEvent("onReady", []), this.$gantt.ext.dragTimeline && (this._timelineDragScroll = this.$gantt.ext.dragTimeline.create(), this._timelineDragScroll.attach(this));
        }, setSize: function(t2, e2) {
          var n2 = this.$getConfig();
          if (1 * t2 === t2 && (this.$config.width = t2), 1 * e2 === e2) {
            this.$config.height = e2;
            var i2 = Math.max(this.$config.height - n2.scale_height);
            this.$task_data.style.height = i2 + "px";
          }
          this.refresh(), this.$task_bg.style.backgroundImage = "", n2.smart_rendering && this.$config.rowStore ? this.$task_bg.style.height = this.getTotalHeight() + "px" : this.$task_bg.style.height = "";
          for (var r2 = this._tasks, a2 = this.$task_data.childNodes, o2 = 0, s2 = a2.length; o2 < s2; o2++) {
            var l2 = a2[o2];
            l2.hasAttribute("data-layer") && l2.style && (l2.style.width = r2.full_width + "px");
          }
        }, isVisible: function() {
          return this.$parent && this.$parent.$config ? !this.$parent.$config.hidden : this.$task.offsetWidth;
        }, getSize: function() {
          var t2 = this.$getConfig(), e2 = this.$config.rowStore ? this.getTotalHeight() : 0, n2 = this.isVisible() ? this._tasks.full_width : 0;
          return { x: this.isVisible() ? this.$config.width : 0, y: this.isVisible() ? this.$config.height : 0, contentX: this.isVisible() ? n2 : 0, contentY: this.isVisible() ? t2.scale_height + e2 : 0, scrollHeight: this.isVisible() ? e2 : 0, scrollWidth: this.isVisible() ? n2 : 0 };
        }, scrollTo: function(t2, e2) {
          if (this.isVisible()) {
            var n2 = false;
            this.$config.scrollTop = this.$config.scrollTop || 0, this.$config.scrollLeft = this.$config.scrollLeft || 0, 1 * e2 === e2 && (this.$config.scrollTop = e2, this.$task_data.scrollTop = this.$config.scrollTop, n2 = true), 1 * t2 === t2 && (this.$task.scrollLeft = t2, this.$config.scrollLeft = this.$task.scrollLeft, this._refreshScales(), n2 = true), n2 && this.callEvent("onScroll", [this.$config.scrollLeft, this.$config.scrollTop]);
          }
        }, _refreshScales: function() {
          if (this.isVisible() && this.$getConfig().smart_scales) {
            var t2 = this.getViewPort(), e2 = this._scales;
            this.$task_scale.innerHTML = this._getScaleChunkHtml(e2, t2.x, t2.x_end);
          }
        }, getViewPort: function() {
          var t2 = this.$config.scrollLeft || 0, e2 = this.$config.scrollTop || 0, n2 = this.$config.height || 0, i2 = this.$config.width || 0;
          return { y: e2, y_end: e2 + n2, x: t2, x_end: t2 + i2, height: n2, width: i2 };
        }, _createLayerConfig: function() {
          var t2 = this, e2 = function() {
            return t2.isVisible();
          };
          return { tasks: [{ expose: true, renderer: this.$gantt.$ui.layers.taskBar(), container: this.$task_bars, filter: [e2, function(t3, e3) {
            return !e3.hide_bar;
          }] }, { renderer: this.$gantt.$ui.layers.taskSplitBar(), filter: [e2], container: this.$task_bars, append: true }, { renderer: this.$gantt.$ui.layers.taskRollupBar(), filter: [e2], container: this.$task_bars, append: true }, { renderer: this.$gantt.$ui.layers.taskBg(), container: this.$task_bg, filter: [e2] }], links: [{ expose: true, renderer: this.$gantt.$ui.layers.link(), container: this.$task_links, filter: [e2] }] };
        }, _attachLayers: function(t2) {
          this._taskLayers = [], this._linkLayers = [];
          var e2 = this, n2 = this.$gantt.$services.getService("layers");
          if (this.$config.bind) {
            this._bindStore();
            var i2 = n2.getDataRender(this.$config.bind);
            i2 || (i2 = n2.createDataRender({ name: this.$config.bind, defaultContainer: function() {
              return e2.$task_data;
            } })), i2.container = function() {
              return e2.$task_data;
            };
            for (var r2 = this.$config.layers, a2 = 0; r2 && a2 < r2.length; a2++) {
              "string" == typeof (c2 = r2[a2]) && (c2 = this.$gantt.$ui.layers[c2]()), ("function" == typeof c2 || c2 && c2.render && c2.update) && (c2 = { renderer: c2 }), c2.view = this;
              var o2 = i2.addLayer(c2);
              this._taskLayers.push(o2), c2.expose && (this._taskRenderer = i2.getLayer(o2));
            }
            this._initStaticBackgroundRender();
          }
          if (this.$config.bindLinks) {
            e2.$config.linkStore = e2.$gantt.getDatastore(e2.$config.bindLinks);
            var s2 = n2.getDataRender(this.$config.bindLinks);
            s2 || (s2 = n2.createDataRender({ name: this.$config.bindLinks, defaultContainer: function() {
              return e2.$task_data;
            } }));
            var l2 = this.$config.linkLayers;
            for (a2 = 0; l2 && a2 < l2.length; a2++) {
              var c2;
              "string" == typeof c2 && (c2 = this.$gantt.$ui.layers[c2]()), (c2 = l2[a2]).view = this;
              var u = s2.addLayer(c2);
              this._taskLayers.push(u), l2[a2].expose && (this._linkRenderer = s2.getLayer(u));
            }
          }
        }, _initStaticBackgroundRender: function() {
          var t2 = this, e2 = l.create(), n2 = t2.$config.rowStore;
          n2 && (this._staticBgHandler = n2.attachEvent("onStoreUpdated", function(n3, i2, r2) {
            if (null === n3 && t2.isVisible()) {
              var a2 = t2.$getConfig();
              if (a2.static_background) {
                var o2 = t2.$gantt.getDatastore(t2.$config.bind), s2 = t2.$task_bg_static;
                s2 || ((s2 = document.createElement("div")).className = "gantt_task_bg", t2.$task_bg_static = s2, t2.$task_bg.nextSibling ? t2.$task_data.insertBefore(s2, t2.$task_bg.nextSibling) : t2.$task_data.appendChild(s2)), o2 && e2.render(s2, a2, t2.getScale(), t2.getTotalHeight(), t2.getItemHeight(i2 ? i2.id : null));
              } else a2.static_background && t2.$task_bg_static && t2.$task_bg_static.parentNode && t2.$task_bg_static.parentNode.removeChild(t2.$task_bg_static);
            }
          }), this.attachEvent("onDestroy", function() {
            e2.destroy();
          }), this._initStaticBackgroundRender = function() {
          });
        }, _clearLayers: function(t2) {
          var e2 = this.$gantt.$services.getService("layers"), n2 = e2.getDataRender(this.$config.bind), i2 = e2.getDataRender(this.$config.bindLinks);
          if (this._taskLayers) for (var r2 = 0; r2 < this._taskLayers.length; r2++) n2.removeLayer(this._taskLayers[r2]);
          if (this._linkLayers) for (r2 = 0; r2 < this._linkLayers.length; r2++) i2.removeLayer(this._linkLayers[r2]);
          this._linkLayers = [], this._taskLayers = [];
        }, _render_tasks_scales: function() {
          var t2 = this.$getConfig(), e2 = "", n2 = 0, i2 = 0, r2 = this.$gantt.getState();
          if (this.isVisible()) {
            var a2 = this.$scaleHelper, o2 = this._getScales();
            i2 = t2.scale_height;
            var s2 = this.$config.width;
            "x" != t2.autosize && "xy" != t2.autosize || (s2 = Math.max(t2.autosize_min_width, 0));
            var l2 = a2.prepareConfigs(o2, t2.min_column_width, s2, i2 - 1, r2.min_date, r2.max_date, t2.rtl), c2 = this._tasks = l2[l2.length - 1];
            this._scales = l2, this._posFromDateCache = {}, e2 = this._getScaleChunkHtml(l2, 0, this.$config.width), n2 = c2.full_width + "px", i2 += "px";
          }
          this.$task_scale.style.height = i2, this.$task_data.style.width = this.$task_scale.style.width = n2, this.$task_scale.innerHTML = e2;
        }, _getScaleChunkHtml: function(t2, e2, n2) {
          for (var i2 = [], r2 = this.$gantt.templates.scale_row_class, a2 = 0; a2 < t2.length; a2++) {
            var o2 = "gantt_scale_line", s2 = r2(t2[a2]);
            s2 && (o2 += " " + s2), i2.push('<div class="' + o2 + '" style="height:' + t2[a2].height + "px;position:relative;line-height:" + t2[a2].height + 'px">' + this._prepareScaleHtml(t2[a2], e2, n2) + "</div>");
          }
          return i2.join("");
        }, _prepareScaleHtml: function(t2, e2, n2) {
          var i2 = this.$getConfig(), r2 = this.$gantt.templates, a2 = [], s2 = null, l2 = null, c2 = t2.format || t2.template || t2.date;
          "string" == typeof c2 && (c2 = this.$gantt.date.date_to_str(c2));
          var u = 0, d = t2.count;
          !i2.smart_scales || isNaN(e2) || isNaN(n2) || (u = o.findBinary(t2.left, e2), d = o.findBinary(t2.left, n2) + 1), l2 = t2.css || function() {
          }, !t2.css && i2.inherit_scale_class && (l2 = r2.scale_cell_class);
          for (var h = u; h < d && t2.trace_x[h]; h++) {
            s2 = new Date(t2.trace_x[h]);
            var f = c2.call(this, s2), _ = t2.width[h], g = t2.height, p = t2.left[h], v = "", m = "", y = "";
            if (_) {
              v = "width:" + _ + "px;height:" + g + "px;" + (i2.smart_scales ? "position:absolute;left:" + p + "px" : ""), y = "gantt_scale_cell" + (h == t2.count - 1 ? " gantt_last_cell" : ""), (m = l2.call(this, s2)) && (y += " " + m);
              var k = "<div class='" + y + "'" + this.$gantt._waiAria.getTimelineCellAttr(f) + " style='" + v + "'>" + f + "</div>";
              a2.push(k);
            }
          }
          return a2.join("");
        }, dateFromPos: function(t2) {
          var e2 = this._tasks;
          if (t2 < 0 || t2 > e2.full_width || !e2.full_width) return null;
          var n2 = o.findBinary(this._tasks.left, t2), i2 = this._tasks.left[n2], r2 = e2.width[n2] || e2.col_width, a2 = 0;
          r2 && (a2 = (t2 - i2) / r2, e2.rtl && (a2 = 1 - a2));
          var s2 = 0;
          return a2 && (s2 = this._getColumnDuration(e2, e2.trace_x[n2])), new Date(e2.trace_x[n2].valueOf() + Math.round(a2 * s2));
        }, posFromDate: function(t2) {
          if (!this.isVisible()) return 0;
          if (!t2) return 0;
          var e2 = String(t2.valueOf());
          if (void 0 !== this._posFromDateCache[e2]) return this._posFromDateCache[e2];
          var n2 = this.columnIndexByDate(t2);
          this.$gantt.assert(n2 >= 0, "Invalid day index");
          var i2 = Math.floor(n2), r2 = n2 % 1, a2 = this._tasks.left[Math.min(i2, this._tasks.width.length - 1)];
          i2 == this._tasks.width.length && (a2 += this._tasks.width[this._tasks.width.length - 1]), r2 && (i2 < this._tasks.width.length ? a2 += this._tasks.width[i2] * (r2 % 1) : a2 += 1);
          var o2 = Math.round(a2);
          return this._posFromDateCache[e2] = o2, Math.round(o2);
        }, _getNextVisibleColumn: function(t2, e2, n2) {
          for (var i2 = +e2[t2], r2 = t2; n2[i2]; ) i2 = +e2[++r2];
          return r2;
        }, _getPrevVisibleColumn: function(t2, e2, n2) {
          for (var i2 = +e2[t2], r2 = t2; n2[i2]; ) i2 = +e2[--r2];
          return r2;
        }, _getClosestVisibleColumn: function(t2, e2, n2) {
          var i2 = this._getNextVisibleColumn(t2, e2, n2);
          return e2[i2] || (i2 = this._getPrevVisibleColumn(t2, e2, n2)), i2;
        }, columnIndexByDate: function(t2) {
          var e2 = new Date(t2).valueOf(), n2 = this._tasks.trace_x_ascending, i2 = this._tasks.ignore_x, r2 = this.$gantt.getState();
          if (e2 <= r2.min_date) return this._tasks.rtl ? n2.length : 0;
          if (e2 >= r2.max_date) return this._tasks.rtl ? 0 : n2.length;
          var a2 = o.findBinary(n2, e2), s2 = this._getClosestVisibleColumn(a2, n2, i2), l2 = n2[s2], c2 = this._tasks.trace_index_transition;
          if (!l2) return c2 ? c2[0] : 0;
          var u = (t2 - n2[s2]) / this._getColumnDuration(this._tasks, n2[s2]);
          return c2 ? c2[s2] + (1 - u) : s2 + u;
        }, getItemPosition: function(t2, e2, n2) {
          var i2, r2, a2;
          return this._tasks.rtl ? (r2 = this.posFromDate(e2 || t2.start_date), i2 = this.posFromDate(n2 || t2.end_date)) : (i2 = this.posFromDate(e2 || t2.start_date), r2 = this.posFromDate(n2 || t2.end_date)), a2 = Math.max(r2 - i2, 0), { left: i2, top: this.getItemTop(t2.id), height: this.getBarHeight(t2.id), width: a2, rowHeight: this.getItemHeight(t2.id) };
        }, getBarHeight: function(t2, e2) {
          var n2 = this.$getConfig(), i2 = this.$config.rowStore.getItem(t2), r2 = i2.task_height || i2.bar_height || n2.bar_height || n2.task_height, a2 = this.getItemHeight(t2);
          "full" == r2 && (r2 = a2 - (n2.task_height_offset || 5));
          return r2 = Math.min(r2, a2), e2 && (r2 = Math.round(r2 / Math.sqrt(2))), Math.max(r2, 0);
        }, getScale: function() {
          return this._tasks;
        }, _getScales: function() {
          var t2 = this.$getConfig(), e2 = this.$scaleHelper, n2 = [e2.primaryScale(t2)].concat(e2.getSubScales(t2));
          return e2.sortScales(n2), n2;
        }, _getColumnDuration: function(t2, e2) {
          return this.$gantt.date.add(e2, t2.step, t2.unit) - e2;
        }, _bindStore: function() {
          if (this.$config.bind) {
            var t2 = this.$gantt.getDatastore(this.$config.bind);
            if (this.$config.rowStore = t2, t2 && !t2._timelineCacheAttached) {
              var e2 = this;
              t2._timelineCacheAttached = t2.attachEvent("onBeforeFilter", function() {
                e2._resetTopPositionHeight();
              });
            }
          }
        }, _unbindStore: function() {
          if (this.$config.bind) {
            var t2 = this.$gantt.getDatastore(this.$config.bind);
            t2 && t2._timelineCacheAttached && (t2.detachEvent(t2._timelineCacheAttached), t2._timelineCacheAttached = false);
          }
        }, refresh: function() {
          this._bindStore(), this.$config.bindLinks && (this.$config.linkStore = this.$gantt.getDatastore(this.$config.bindLinks)), this._resetTopPositionHeight(), this._resetHeight(), this._initStaticBackgroundRender(), this._render_tasks_scales();
        }, destructor: function() {
          var t2 = this.$gantt;
          this._clearLayers(t2), this._unbindStore(), this.$task = null, this.$task_scale = null, this.$task_data = null, this.$task_bg = null, this.$task_links = null, this.$task_bars = null, this.$gantt = null, this.$config.rowStore && (this.$config.rowStore.detachEvent(this._staticBgHandler), this.$config.rowStore = null), this.$config.linkStore && (this.$config.linkStore = null), this._timelineDragScroll && (this._timelineDragScroll.destructor(), this._timelineDragScroll = null), this.callEvent("onDestroy", []), this.detachAllEvents();
        } }, t.exports = c;
      }, function(t, e) {
        t.exports = function(t2, e2, n, i, r) {
          if (!t2.start_date || !t2.end_date) return null;
          var a = n.getItemTop(t2.id), o = n.getItemHeight(t2.id);
          if (a > e2.y_end || a + o < e2.y) return false;
          var s = n.posFromDate(t2.start_date), l = n.posFromDate(t2.end_date), c = Math.min(s, l) - 200, u = Math.max(s, l) + 200;
          return !(c > e2.x_end || u < e2.x);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          function e2(e3, a, o) {
            if (!t2._isAllowedUnscheduledTask(e3) && t2._isTaskInTimelineLimits(e3)) {
              var s = a.getItemPosition(e3), l = o, c = a.$getTemplates(), u = t2.getTaskType(e3.type), d = a.getBarHeight(e3.id, u == l.types.milestone), h = 0;
              u == l.types.milestone && (h = (d - s.height) / 2);
              var f = Math.floor((a.getItemHeight(e3.id) - d) / 2);
              u == l.types.milestone && (s.left -= Math.round(d / 2), s.width = d);
              var _ = document.createElement("div"), g = Math.round(s.width);
              a.$config.item_attribute && (_.setAttribute(a.$config.item_attribute, e3.id), _.setAttribute(a.$config.bind + "_id", e3.id)), l.show_progress && u != l.types.milestone && function(e4, n2, i2, r2, a2) {
                var o2 = 1 * e4.progress || 0;
                i2 = Math.max(i2 - 2, 0);
                var s2 = document.createElement("div"), l2 = Math.round(i2 * o2);
                l2 = Math.min(i2, l2), e4.progressColor && (s2.style.backgroundColor = e4.progressColor, s2.style.opacity = 1), s2.style.width = l2 + "px", s2.className = "gantt_task_progress", s2.innerHTML = a2.progress_text(e4.start_date, e4.end_date, e4), r2.rtl && (s2.style.position = "absolute", s2.style.right = "0px");
                var c2 = document.createElement("div");
                if (c2.className = "gantt_task_progress_wrapper", c2.appendChild(s2), n2.appendChild(c2), t2.config.drag_progress && !t2.isReadonly(e4)) {
                  var u2 = document.createElement("div"), d2 = l2;
                  r2.rtl && (d2 = i2 - l2), u2.style.left = d2 + "px", u2.className = "gantt_task_progress_drag", s2.appendChild(u2), n2.appendChild(u2);
                }
              }(e3, _, g, l, c);
              var p = function(e4, n2, i2) {
                var r2 = document.createElement("div");
                return t2.getTaskType(e4.type) != t2.config.types.milestone ? r2.innerHTML = i2.task_text(e4.start_date, e4.end_date, e4) : t2.getTaskType(e4.type) == t2.config.types.milestone && n2 && (r2.style.height = r2.style.width = n2 + "px"), r2.className = "gantt_task_content", r2;
              }(e3, g, c);
              e3.textColor && (p.style.color = e3.textColor), _.appendChild(p);
              var v = function(e4, n2, i2, r2) {
                var a2 = r2.$getConfig(), o2 = [e4];
                n2 && o2.push(n2);
                var s2 = t2.getState(), l2 = t2.getTask(i2);
                if (t2.getTaskType(l2.type) == a2.types.milestone ? o2.push("gantt_milestone") : t2.getTaskType(l2.type) == a2.types.project && o2.push("gantt_project"), o2.push("gantt_bar_" + t2.getTaskType(l2.type)), t2.isSummaryTask(l2) && o2.push("gantt_dependent_task"), t2.isSplitTask(l2) && (a2.open_split_tasks && !l2.$open || !a2.open_split_tasks) && o2.push("gantt_split_parent"), a2.select_task && t2.isSelectedTask(i2) && o2.push("gantt_selected"), i2 == s2.drag_id && (o2.push("gantt_drag_" + s2.drag_mode), s2.touch_drag && o2.push("gantt_touch_" + s2.drag_mode)), s2.link_source_id == i2 && o2.push("gantt_link_source"), s2.link_target_id == i2 && o2.push("gantt_link_target"), a2.highlight_critical_path && t2.isCriticalTask && t2.isCriticalTask(l2) && o2.push("gantt_critical_task"), s2.link_landing_area && s2.link_target_id && s2.link_source_id && s2.link_target_id != s2.link_source_id && (s2.link_target_id == i2 || s2.link_source_id == i2)) {
                  var c2 = s2.link_source_id, u2 = s2.link_from_start, d2 = s2.link_to_start, h2 = t2.isLinkAllowed(c2, i2, u2, d2), f2 = "";
                  f2 = h2 ? d2 ? "link_start_allow" : "link_finish_allow" : d2 ? "link_start_deny" : "link_finish_deny", o2.push(f2);
                }
                return o2.join(" ");
              }("gantt_task_line", c.task_class(e3.start_date, e3.end_date, e3), e3.id, a);
              (e3.color || e3.progressColor || e3.textColor) && (v += " gantt_task_inline_color"), s.width < 20 && (v += " gantt_thin_task"), _.className = v;
              var m = ["left:" + s.left + "px", "top:" + (f + s.top) + "px", "height:" + (u == l.types.milestone ? s.height : d) + "px", "line-height:" + Math.max(d < 30 ? d - 2 : d, 0) + "px", "width:" + g + "px"];
              e3.color && m.push("background-color:" + e3.color), e3.textColor && m.push("color:" + e3.textColor), _.style.cssText = m.join(";");
              var y = function(t3, e4, r2, a2) {
                var o2 = "gantt_left " + i(!e4.rtl, t3), s2 = null;
                return a2 && (s2 = { type: "marginRight", value: a2 }), n(t3, r2.leftside_text, o2, s2);
              }(e3, l, c, h);
              y && _.appendChild(y), (y = function(t3, e4, r2, a2) {
                var o2 = "gantt_right " + i(!!e4.rtl, t3), s2 = null;
                return a2 && (s2 = { type: "marginLeft", value: a2 }), n(t3, r2.rightside_text, o2, s2);
              }(e3, l, c, h)) && _.appendChild(y), t2._waiAria.setTaskBarAttr(e3, _);
              var k = t2.getState();
              return t2.isReadonly(e3) || (l.drag_resize && !t2.isSummaryTask(e3) && u != l.types.milestone && r(_, "gantt_task_drag", e3, function(t3) {
                var e4 = document.createElement("div");
                return e4.className = t3, e4;
              }, l), l.drag_links && l.show_links && r(_, "gantt_link_control", e3, function(t3) {
                var e4 = document.createElement("div");
                e4.className = t3, e4.style.cssText = ["height:" + d + "px", "line-height:" + d + "px"].join(";");
                var n2 = document.createElement("div");
                n2.className = "gantt_link_point";
                var i2 = false;
                return k.link_source_id && l.touch && (i2 = true), n2.style.display = i2 ? "block" : "", e4.appendChild(n2), e4;
              }, l, h)), _;
            }
          }
          function n(t3, e3, n2, i2) {
            if (!e3) return null;
            var r2 = e3(t3.start_date, t3.end_date, t3);
            if (!r2) return null;
            var a = document.createElement("div");
            return a.className = "gantt_side_content " + n2, a.innerHTML = r2, i2 && (a.style[i2.type] = Math.abs(i2.value) + "px"), a;
          }
          function i(e3, n2) {
            var i2 = function(e4) {
              return e4 ? { $source: [t2.config.links.start_to_start], $target: [t2.config.links.start_to_start, t2.config.links.finish_to_start] } : { $source: [t2.config.links.finish_to_start, t2.config.links.finish_to_finish], $target: [t2.config.links.finish_to_finish] };
            }(e3);
            for (var r2 in i2) for (var a = n2[r2], o = 0; o < a.length; o++) for (var s = t2.getLink(a[o]), l = 0; l < i2[r2].length; l++) if (s.type == i2[r2][l]) return "gantt_link_crossing";
            return "";
          }
          function r(e3, n2, i2, r2, a, o) {
            var s, l = t2.getState();
            +i2.start_date >= +l.min_date && ((s = r2([n2, a.rtl ? "task_right" : "task_left", "task_start_date"].join(" "))).setAttribute("data-bind-property", "start_date"), o && (s.style.marginLeft = o + "px"), e3.appendChild(s)), +i2.end_date <= +l.max_date && ((s = r2([n2, a.rtl ? "task_left" : "task_right", "task_end_date"].join(" "))).setAttribute("data-bind-property", "end_date"), o && (s.style.marginRight = o + "px"), e3.appendChild(s));
          }
          return function(n2, i2, r2) {
            var a = (r2 = i2.$getConfig()).type_renderers[t2.getTaskType(n2.type)], o = e2;
            return a ? a.call(t2, n2, function(e3) {
              return o.call(t2, e3, i2, r2);
            }, i2) : o.call(t2, n2, i2, r2);
          };
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n) {
          return { top: e2.getItemTop(t2.id), height: e2.getItemHeight(t2.id), left: 0, right: 1 / 0 };
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          var n = 0, i = t2.left.length - 1;
          if (e2) for (var r = 0; r < t2.left.length; r++) {
            var a = t2.left[r];
            if (a < e2.x && (n = r), a > e2.x_end) {
              i = r;
              break;
            }
          }
          return { start: n, end: i };
        };
      }, function(t, e, n) {
        var i = n(14);
        t.exports = function(t2, e2, n2, r) {
          var a = e2.width[t2];
          if (a <= 0) return false;
          if (!r.config.smart_rendering || i(r)) return true;
          var o = e2.left[t2] - a, s = e2.left[t2] + a;
          return o <= n2.x_end && s >= n2.x;
        };
      }, function(t, e, n) {
        var i = n(0);
        t.exports = { createDropTargetObject: function(t2) {
          var e2 = { targetParent: null, targetIndex: 0, targetId: null, child: false, nextSibling: false, prevSibling: false };
          return t2 && i.mixin(e2, t2, true), e2;
        }, nextSiblingTarget: function(t2, e2, n2) {
          var i2 = this.createDropTargetObject();
          return i2.targetId = e2, i2.nextSibling = true, i2.targetParent = n2.getParent(i2.targetId), i2.targetIndex = n2.getBranchIndex(i2.targetId), (n2.getParent(t2) != i2.targetParent || i2.targetIndex < n2.getBranchIndex(t2)) && (i2.targetIndex += 1), i2;
        }, prevSiblingTarget: function(t2, e2, n2) {
          var i2 = this.createDropTargetObject();
          return i2.targetId = e2, i2.prevSibling = true, i2.targetParent = n2.getParent(i2.targetId), i2.targetIndex = n2.getBranchIndex(i2.targetId), n2.getParent(t2) == i2.targetParent && i2.targetIndex > n2.getBranchIndex(t2) && (i2.targetIndex -= 1), i2;
        }, firstChildTarget: function(t2, e2, n2) {
          var i2 = this.createDropTargetObject();
          return i2.targetId = e2, i2.targetParent = i2.targetId, i2.targetIndex = 0, i2.child = true, i2;
        }, lastChildTarget: function(t2, e2, n2) {
          var i2 = n2.getChildren(e2), r = this.createDropTargetObject();
          return r.targetId = i2[i2.length - 1], r.targetParent = e2, r.targetIndex = i2.length, r.nextSibling = true, r;
        } };
      }, function(t, e, n) {
        var i = n(0);
        t.exports = function t2(e2, n2) {
          e2 = e2 || i.event, n2 = n2 || i.eventRemove;
          var r = [], a = { attach: function(t3, n3, i2, a2) {
            r.push({ element: t3, event: n3, callback: i2, capture: a2 }), e2(t3, n3, i2, a2);
          }, detach: function(t3, e3, i2, a2) {
            n2(t3, e3, i2, a2);
            for (var o = 0; o < r.length; o++) {
              var s = r[o];
              s.element === t3 && s.event === e3 && s.callback === i2 && s.capture === a2 && (r.splice(o, 1), o--);
            }
          }, detachAll: function() {
            for (var t3 = r.slice(), e3 = 0; e3 < t3.length; e3++) {
              var n3 = t3[e3];
              a.detach(n3.element, n3.event, n3.callback, n3.capture), a.detach(n3.element, n3.event, n3.callback, void 0), a.detach(n3.element, n3.event, n3.callback, false), a.detach(n3.element, n3.event, n3.callback, true);
            }
            r.splice(0, r.length);
          }, extend: function() {
            return t2(this.event, this.eventRemove);
          } };
          return a;
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          if (!e2) return true;
          if (t2._on_timeout) return false;
          var n = Math.ceil(1e3 / e2);
          return n < 2 || (setTimeout(function() {
            delete t2._on_timeout;
          }, n), t2._on_timeout = true, true);
        };
      }, function(t, e) {
        var n, i, r = t.exports = {};
        function a() {
          throw new Error("setTimeout has not been defined");
        }
        function o() {
          throw new Error("clearTimeout has not been defined");
        }
        function s(t2) {
          if (n === setTimeout) return setTimeout(t2, 0);
          if ((n === a || !n) && setTimeout) return n = setTimeout, setTimeout(t2, 0);
          try {
            return n(t2, 0);
          } catch (e2) {
            try {
              return n.call(null, t2, 0);
            } catch (e3) {
              return n.call(this, t2, 0);
            }
          }
        }
        !function() {
          try {
            n = "function" == typeof setTimeout ? setTimeout : a;
          } catch (t2) {
            n = a;
          }
          try {
            i = "function" == typeof clearTimeout ? clearTimeout : o;
          } catch (t2) {
            i = o;
          }
        }();
        var l, c = [], u = false, d = -1;
        function h() {
          u && l && (u = false, l.length ? c = l.concat(c) : d = -1, c.length && f());
        }
        function f() {
          if (!u) {
            var t2 = s(h);
            u = true;
            for (var e2 = c.length; e2; ) {
              for (l = c, c = []; ++d < e2; ) l && l[d].run();
              d = -1, e2 = c.length;
            }
            l = null, u = false, function(t3) {
              if (i === clearTimeout) return clearTimeout(t3);
              if ((i === o || !i) && clearTimeout) return i = clearTimeout, clearTimeout(t3);
              try {
                i(t3);
              } catch (e3) {
                try {
                  return i.call(null, t3);
                } catch (e4) {
                  return i.call(this, t3);
                }
              }
            }(t2);
          }
        }
        function _(t2, e2) {
          this.fun = t2, this.array = e2;
        }
        function g() {
        }
        r.nextTick = function(t2) {
          var e2 = new Array(arguments.length - 1);
          if (arguments.length > 1) for (var n2 = 1; n2 < arguments.length; n2++) e2[n2 - 1] = arguments[n2];
          c.push(new _(t2, e2)), 1 !== c.length || u || s(f);
        }, _.prototype.run = function() {
          this.fun.apply(null, this.array);
        }, r.title = "browser", r.browser = true, r.env = {}, r.argv = [], r.version = "", r.versions = {}, r.on = g, r.addListener = g, r.once = g, r.off = g, r.removeListener = g, r.removeAllListeners = g, r.emit = g, r.prependListener = g, r.prependOnceListener = g, r.listeners = function(t2) {
          return [];
        }, r.binding = function(t2) {
          throw new Error("process.binding is not supported");
        }, r.cwd = function() {
          return "/";
        }, r.chdir = function(t2) {
          throw new Error("process.chdir is not supported");
        }, r.umask = function() {
          return 0;
        };
      }, function(t, e, n) {
        var i = n(33), r = n(0), a = n(4), o = n(9), s = function(t2) {
          return this.pull = {}, this.$initItem = t2.initItem, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this._skip_refresh = false, this._filterRule = null, this._searchVisibleOrder = {}, this._indexRangeCache = {}, this._getItemsCache = null, this.$config = t2, a(this), this._attachDataChange(function() {
            return this._indexRangeCache = {}, this._getItemsCache = null, true;
          }), this;
        };
        s.prototype = { _attachDataChange: function(t2) {
          this.attachEvent("onClearAll", t2), this.attachEvent("onBeforeParse", t2), this.attachEvent("onBeforeUpdate", t2), this.attachEvent("onBeforeDelete", t2), this.attachEvent("onBeforeAdd", t2), this.attachEvent("onParse", t2), this.attachEvent("onBeforeFilter", t2);
        }, _parseInner: function(t2) {
          for (var e2 = null, n2 = [], i2 = 0, a2 = t2.length; i2 < a2; i2++) e2 = t2[i2], this.$initItem && (this.$config.copyOnParse() && (e2 = r.copy(e2)), e2 = this.$initItem(e2)), this.callEvent("onItemLoading", [e2]) && (this.pull.hasOwnProperty(e2.id) || this.fullOrder.push(e2.id), n2.push(e2), this.pull[e2.id] = e2);
          return n2;
        }, parse: function(t2) {
          this.isSilent() || this.callEvent("onBeforeParse", [t2]);
          var e2 = this._parseInner(t2);
          this.isSilent() || (this.refresh(), this.callEvent("onParse", [e2]));
        }, getItem: function(t2) {
          return this.pull[t2];
        }, _updateOrder: function(t2) {
          t2.call(this.visibleOrder), t2.call(this.fullOrder);
        }, updateItem: function(t2, e2) {
          if (r.defined(e2) || (e2 = this.getItem(t2)), !this.isSilent() && false === this.callEvent("onBeforeUpdate", [e2.id, e2])) return false;
          r.mixin(this.pull[t2], e2, true), this.isSilent() || (this.callEvent("onAfterUpdate", [e2.id, e2]), this.callEvent("onStoreUpdated", [e2.id, e2, "update"]));
        }, _removeItemInner: function(t2) {
          this._updateOrder(function() {
            this.$remove(t2);
          }), delete this.pull[t2];
        }, removeItem: function(t2) {
          var e2 = this.getItem(t2);
          if (!this.isSilent() && false === this.callEvent("onBeforeDelete", [e2.id, e2])) return false;
          this.callEvent("onAfterDeleteConfirmed", [e2.id, e2]), this._removeItemInner(t2), this.isSilent() || (this.filter(), this.callEvent("onAfterDelete", [e2.id, e2]), this.callEvent("onStoreUpdated", [e2.id, e2, "delete"]));
        }, _addItemInner: function(t2, e2) {
          if (this.exists(t2.id)) this.silent(function() {
            this.updateItem(t2.id, t2);
          });
          else {
            var n2 = this.visibleOrder, i2 = n2.length;
            (!r.defined(e2) || e2 < 0) && (e2 = i2), e2 > i2 && (e2 = Math.min(n2.length, e2));
          }
          this.pull[t2.id] = t2, this.isSilent() || this._updateOrder(function() {
            -1 === this.$find(t2.id) && this.$insertAt(t2.id, e2);
          }), this.filter();
        }, isVisible: function(t2) {
          return this.visibleOrder.$find(t2) > -1;
        }, getVisibleItems: function() {
          return this.getIndexRange();
        }, addItem: function(t2, e2) {
          return r.defined(t2.id) || (t2.id = r.uid()), this.$initItem && (t2 = this.$initItem(t2)), !(!this.isSilent() && false === this.callEvent("onBeforeAdd", [t2.id, t2])) && (this._addItemInner(t2, e2), this.isSilent() || (this.callEvent("onAfterAdd", [t2.id, t2]), this.callEvent("onStoreUpdated", [t2.id, t2, "add"])), t2.id);
        }, _changeIdInner: function(t2, e2) {
          this.pull[t2] && (this.pull[e2] = this.pull[t2]);
          var n2 = this._searchVisibleOrder[t2];
          this.pull[e2].id = e2, this._updateOrder(function() {
            this[this.$find(t2)] = e2;
          }), this._searchVisibleOrder[e2] = n2, delete this._searchVisibleOrder[t2], delete this.pull[t2];
        }, changeId: function(t2, e2) {
          this._changeIdInner(t2, e2), this.callEvent("onIdChange", [t2, e2]);
        }, exists: function(t2) {
          return !!this.pull[t2];
        }, _moveInner: function(t2, e2) {
          var n2 = this.getIdByIndex(t2);
          this._updateOrder(function() {
            this.$removeAt(t2), this.$insertAt(n2, Math.min(this.length, e2));
          });
        }, move: function(t2, e2) {
          var n2 = this.getIdByIndex(t2), i2 = this.getItem(n2);
          this._moveInner(t2, e2), this.isSilent() || this.callEvent("onStoreUpdated", [i2.id, i2, "move"]);
        }, clearAll: function() {
          this.$destroyed || (this.silent(function() {
            this.unselect();
          }), this.pull = {}, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this.isSilent() || (this.callEvent("onClearAll", []), this.refresh()));
        }, silent: function(t2, e2) {
          var n2 = false;
          this.isSilent() && (n2 = true), this._skip_refresh = true, t2.call(e2 || this), n2 || (this._skip_refresh = false);
        }, isSilent: function() {
          return !!this._skip_refresh;
        }, arraysEqual: function(t2, e2) {
          if (t2.length !== e2.length) return false;
          for (var n2 = 0; n2 < t2.length; n2++) if (t2[n2] !== e2[n2]) return false;
          return true;
        }, refresh: function(t2, e2) {
          var n2, i2;
          if (!this.isSilent() && (t2 && (n2 = this.getItem(t2)), i2 = t2 ? [t2, n2, "paint"] : [null, null, null], false !== this.callEvent("onBeforeStoreUpdate", i2))) {
            var r2 = this._quick_refresh && !this._mark_recompute;
            if (this._mark_recompute = false, t2) {
              if (!e2 && !r2) {
                var a2 = this.visibleOrder;
                this.filter(), this.arraysEqual(a2, this.visibleOrder) || (t2 = void 0);
              }
            } else r2 || this.filter();
            i2 = t2 ? [t2, n2, "paint"] : [null, null, null], this.callEvent("onStoreUpdated", i2);
          }
        }, count: function() {
          return this.fullOrder.length;
        }, countVisible: function() {
          return this.visibleOrder.length;
        }, sort: function(t2) {
        }, serialize: function() {
        }, eachItem: function(t2) {
          for (var e2 = 0; e2 < this.fullOrder.length; e2++) {
            var n2 = this.getItem(this.fullOrder[e2]);
            t2.call(this, n2);
          }
        }, find: function(t2) {
          var e2 = [];
          return this.eachItem(function(n2) {
            t2(n2) && e2.push(n2);
          }), e2;
        }, filter: function(t2) {
          this.isSilent() || this.callEvent("onBeforeFilter", []), this.callEvent("onPreFilter", []);
          var e2 = i.$create(), n2 = [];
          this.eachItem(function(t3) {
            this.callEvent("onFilterItem", [t3.id, t3]) && (o(t3.id, null, this, this._ganttConfig) ? n2.push(t3.id) : e2.push(t3.id));
          });
          for (var r2 = 0; r2 < n2.length; r2++) e2.push(n2[r2]);
          this.visibleOrder = e2, this._searchVisibleOrder = {};
          for (r2 = 0; r2 < this.visibleOrder.length; r2++) this._searchVisibleOrder[this.visibleOrder[r2]] = r2;
          this.isSilent() || this.callEvent("onFilter", []);
        }, getIndexRange: function(t2, e2) {
          var n2 = Math.min(e2 || 1 / 0, this.countVisible() - 1), i2 = t2 || 0, r2 = i2 + "-" + n2;
          if (this._indexRangeCache[r2]) return this._indexRangeCache[r2].slice();
          for (var a2 = [], o2 = i2; o2 <= n2; o2++) a2.push(this.getItem(this.visibleOrder[o2]));
          return this._indexRangeCache[r2] = a2.slice(), a2;
        }, getItems: function() {
          if (this._getItemsCache) return this._getItemsCache.slice();
          var t2 = [];
          for (var e2 in this.pull) t2.push(this.pull[e2]);
          return this._getItemsCache = t2.slice(), t2;
        }, getIdByIndex: function(t2) {
          return this.visibleOrder[t2];
        }, getIndexById: function(t2) {
          var e2 = this._searchVisibleOrder[t2];
          return void 0 === e2 && (e2 = -1), e2;
        }, _getNullIfUndefined: function(t2) {
          return void 0 === t2 ? null : t2;
        }, getFirst: function() {
          return this._getNullIfUndefined(this.visibleOrder[0]);
        }, getLast: function() {
          return this._getNullIfUndefined(this.visibleOrder[this.visibleOrder.length - 1]);
        }, getNext: function(t2) {
          return this._getNullIfUndefined(this.visibleOrder[this.getIndexById(t2) + 1]);
        }, getPrev: function(t2) {
          return this._getNullIfUndefined(this.visibleOrder[this.getIndexById(t2) - 1]);
        }, destructor: function() {
          this.callEvent("onDestroy", []), this.detachAllEvents(), this.$destroyed = true, this.pull = null, this.$initItem = null, this.visibleOrder = null, this.fullOrder = null, this._skip_refresh = null, this._filterRule = null, this._searchVisibleOrder = null, this._indexRangeCache = {};
        } }, t.exports = s;
      }, function(t, e, n) {
        var i = n(0), r = { $create: function(t2) {
          return i.mixin(t2 || [], this);
        }, $removeAt: function(t2, e2) {
          t2 >= 0 && this.splice(t2, e2 || 1);
        }, $remove: function(t2) {
          this.$removeAt(this.$find(t2));
        }, $insertAt: function(t2, e2) {
          if (e2 || 0 === e2) {
            var n2 = this.splice(e2, this.length - e2);
            this[e2] = t2, this.push.apply(this, n2);
          } else this.push(t2);
        }, $find: function(t2) {
          for (var e2 = 0; e2 < this.length; e2++) if (t2 == this[e2]) return e2;
          return -1;
        }, $each: function(t2, e2) {
          for (var n2 = 0; n2 < this.length; n2++) t2.call(e2 || this, this[n2]);
        }, $map: function(t2, e2) {
          for (var n2 = 0; n2 < this.length; n2++) this[n2] = t2.call(e2 || this, this[n2]);
          return this;
        }, $filter: function(t2, e2) {
          for (var n2 = 0; n2 < this.length; n2++) t2.call(e2 || this, this[n2]) || (this.splice(n2, 1), n2--);
          return this;
        } };
        t.exports = r;
      }, function(t, e, n) {
        var i = n(33), r = n(0), a = n(2), o = n(32), s = n(9), l = n(2).replaceValidZeroId;
        o.default && (o = o.default);
        var c = function(t2) {
          o.apply(this, [t2]), this._branches = {}, this.pull = {}, this.$initItem = function(e3) {
            var n3 = e3;
            t2.initItem && (n3 = t2.initItem(n3));
            var i2 = this.getItem(e3.id);
            return i2 && i2.parent != n3.parent && this.move(n3.id, n3.$index || -1, n3.parent || this._ganttConfig.root_id), n3;
          }, this.$parentProperty = t2.parentProperty || "parent", "function" != typeof t2.rootId ? this.$getRootId = /* @__PURE__ */ function(t3) {
            return function() {
              return t3;
            };
          }(t2.rootId || 0) : this.$getRootId = t2.rootId, this.$openInitially = t2.openInitially, this.visibleOrder = i.$create(), this.fullOrder = i.$create(), this._searchVisibleOrder = {}, this._indexRangeCache = {}, this._eachItemMainRangeCache = null, this._getItemsCache = null, this._skip_refresh = false, this._ganttConfig = null, t2.getConfig && (this._ganttConfig = t2.getConfig());
          var e2 = {}, n2 = {}, r2 = {}, a2 = {}, s2 = false;
          return this._attachDataChange(function() {
            return this._indexRangeCache = {}, this._eachItemMainRangeCache = null, this._getItemsCache = null, true;
          }), this.attachEvent("onPreFilter", function() {
            this._indexRangeCache = {}, this._eachItemMainRangeCache = null, e2 = {}, n2 = {}, r2 = {}, a2 = {}, s2 = false, this.eachItem(function(t3) {
              var i2 = this.getParent(t3.id);
              t3.$open && false !== r2[i2] ? r2[t3.id] = true : r2[t3.id] = false, this._isSplitItem(t3) && (s2 = true, e2[t3.id] = true, n2[t3.id] = true), s2 && n2[i2] && (n2[t3.id] = true), r2[i2] || void 0 === r2[i2] ? a2[t3.id] = true : a2[t3.id] = false;
            });
          }), this.attachEvent("onFilterItem", function(t3, i2) {
            var r3 = false;
            if (this._ganttConfig) r3 = this._ganttConfig.open_split_tasks;
            var o2 = a2[i2.id];
            return s2 && (o2 && n2[i2.id] && !e2[i2.id] && (o2 = !!r3), n2[i2.id] && !e2[i2.id] && (i2.$split_subtask = true)), i2.$expanded_branch = !!a2[i2.id], !!o2;
          }), this.attachEvent("onFilter", function() {
            e2 = {}, n2 = {}, r2 = {}, a2 = {};
          }), this;
        };
        c.prototype = r.mixin({ _buildTree: function(t2) {
          for (var e2 = null, n2 = this.$getRootId(), i2 = 0, a2 = t2.length; i2 < a2; i2++) e2 = t2[i2], this.setParent(e2, l(this.getParent(e2), n2) || n2);
          for (i2 = 0, a2 = t2.length; i2 < a2; i2++) e2 = t2[i2], this._add_branch(e2), e2.$level = this.calculateItemLevel(e2), e2.$local_index = this.getBranchIndex(e2.id), r.defined(e2.$open) || (e2.$open = r.defined(e2.open) ? e2.open : this.$openInitially());
          this._updateOrder();
        }, _isSplitItem: function(t2) {
          return "split" == t2.render && this.hasChild(t2.id);
        }, parse: function(t2) {
          this._skip_refresh || this.callEvent("onBeforeParse", [t2]);
          var e2 = this._parseInner(t2);
          this._buildTree(e2), this.filter(), this._skip_refresh || this.callEvent("onParse", [e2]);
        }, _addItemInner: function(t2, e2) {
          var n2 = this.getParent(t2);
          r.defined(n2) || (n2 = this.$getRootId(), this.setParent(t2, n2));
          var i2 = this.getIndexById(n2) + Math.min(Math.max(e2, 0), this.visibleOrder.length);
          1 * i2 !== i2 && (i2 = void 0), o.prototype._addItemInner.call(this, t2, i2), this.setParent(t2, n2), t2.hasOwnProperty("$rendered_parent") && this._move_branch(t2, t2.$rendered_parent), this._add_branch(t2, e2);
        }, _changeIdInner: function(t2, e2) {
          var n2 = this.getChildren(t2), i2 = this._searchVisibleOrder[t2];
          o.prototype._changeIdInner.call(this, t2, e2);
          var r2 = this.getParent(e2);
          this._replace_branch_child(r2, t2, e2), this._branches[t2] && (this._branches[e2] = this._branches[t2]);
          for (var a2 = 0; a2 < n2.length; a2++) {
            var s2 = this.getItem(n2[a2]);
            s2[this.$parentProperty] = e2, s2.$rendered_parent = e2;
          }
          this._searchVisibleOrder[e2] = i2, delete this._branches[t2];
        }, _traverseBranches: function(t2, e2) {
          r.defined(e2) || (e2 = this.$getRootId());
          var n2 = this._branches[e2];
          if (n2) for (var i2 = 0; i2 < n2.length; i2++) {
            var a2 = n2[i2];
            t2.call(this, a2), this._branches[a2] && this._traverseBranches(t2, a2);
          }
        }, _updateOrder: function(t2) {
          this.fullOrder = i.$create(), this._traverseBranches(function(t3) {
            this.fullOrder.push(t3);
          }), t2 && o.prototype._updateOrder.call(this, t2);
        }, _removeItemInner: function(t2) {
          var e2 = [];
          this.eachItem(function(t3) {
            e2.push(t3);
          }, t2), e2.push(this.getItem(t2));
          for (var n2 = 0; n2 < e2.length; n2++) this._move_branch(e2[n2], this.getParent(e2[n2]), null), o.prototype._removeItemInner.call(this, e2[n2].id), this._move_branch(e2[n2], this.getParent(e2[n2]), null);
        }, move: function(t2, e2, n2) {
          var i2 = arguments[3], a2 = (this._ganttConfig || {}).root_id || 0;
          if (i2 = l(i2, a2)) {
            if (i2 === t2) return;
            n2 = this.getParent(i2), e2 = this.getBranchIndex(i2);
          }
          if (t2 != n2) {
            r.defined(n2) || (n2 = this.$getRootId());
            var o2 = this.getItem(t2), c2 = this.getParent(o2.id), u = this.getChildren(n2);
            if (-1 == e2 && (e2 = u.length + 1), c2 == n2) {
              if (this.getBranchIndex(t2) == e2) return;
            }
            if (false === this.callEvent("onBeforeItemMove", [t2, n2, e2])) return false;
            for (var d = [], h = 0; h < u.length; h++) s(u[h], null, this, this._ganttConfig) && (d.push(u[h]), u.splice(h, 1), h--);
            this._replace_branch_child(c2, t2);
            var f = (u = this.getChildren(n2))[e2];
            (f = l(f, a2)) ? u = u.slice(0, e2).concat([t2]).concat(u.slice(e2)) : u.push(t2), d.length && (u = u.concat(d)), this.setParent(o2, n2), this._branches[n2] = u;
            var _ = this.calculateItemLevel(o2) - o2.$level;
            o2.$level += _, this.eachItem(function(t3) {
              t3.$level += _;
            }, o2.id, this), this._moveInner(this.getIndexById(t2), this.getIndexById(n2) + e2), this.callEvent("onAfterItemMove", [t2, n2, e2]), this.refresh();
          }
        }, getBranchIndex: function(t2) {
          for (var e2 = this.getChildren(this.getParent(t2)), n2 = 0; n2 < e2.length; n2++) if (e2[n2] == t2) return n2;
          return -1;
        }, hasChild: function(t2) {
          var e2 = this._branches[t2];
          return e2 && e2.length;
        }, getChildren: function(t2) {
          var e2 = this._branches[t2];
          return e2 || i.$create();
        }, isChildOf: function(t2, e2) {
          if (!this.exists(t2)) return false;
          if (e2 === this.$getRootId()) return true;
          if (!this.hasChild(e2)) return false;
          var n2 = this.getItem(t2), i2 = this.getParent(t2);
          if (this.getItem(e2).$level >= n2.$level) return false;
          for (; n2 && this.exists(i2); ) {
            if ((n2 = this.getItem(i2)) && n2.id == e2) return true;
            i2 = this.getParent(n2);
          }
          return false;
        }, getSiblings: function(t2) {
          if (!this.exists(t2)) return i.$create();
          var e2 = this.getParent(t2);
          return this.getChildren(e2);
        }, getNextSibling: function(t2) {
          for (var e2 = this.getSiblings(t2), n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] == t2) {
            var r2 = e2[n2 + 1];
            return 0 === r2 && n2 > 0 && (r2 = "0"), r2 || null;
          }
          return null;
        }, getPrevSibling: function(t2) {
          for (var e2 = this.getSiblings(t2), n2 = 0, i2 = e2.length; n2 < i2; n2++) if (e2[n2] == t2) {
            var r2 = e2[n2 - 1];
            return 0 === r2 && n2 > 0 && (r2 = "0"), r2 || null;
          }
          return null;
        }, getParent: function(t2) {
          var e2 = null;
          return (e2 = void 0 !== t2.id ? t2 : this.getItem(t2)) ? e2[this.$parentProperty] : this.$getRootId();
        }, clearAll: function() {
          this._branches = {}, o.prototype.clearAll.call(this);
        }, calculateItemLevel: function(t2) {
          var e2 = 0;
          return this.eachParent(function() {
            e2++;
          }, t2), e2;
        }, _setParentInner: function(t2, e2, n2) {
          n2 || (t2.hasOwnProperty("$rendered_parent") ? this._move_branch(t2, t2.$rendered_parent, e2) : this._move_branch(t2, t2[this.$parentProperty], e2));
        }, setParent: function(t2, e2, n2) {
          this._setParentInner(t2, e2, n2), t2[this.$parentProperty] = e2;
        }, _eachItemCached: function(t2, e2) {
          for (var n2 = 0, i2 = e2.length; n2 < i2; n2++) t2.call(this, e2[n2]);
        }, _eachItemIterate: function(t2, e2, n2) {
          var i2 = this.getChildren(e2);
          for (i2.length && (i2 = i2.slice().reverse()); i2.length; ) {
            var r2 = i2.pop(), a2 = this.getItem(r2);
            if (t2.call(this, a2), n2 && n2.push(a2), this.hasChild(a2.id)) for (var o2 = this.getChildren(a2.id), s2 = o2.length - 1; s2 >= 0; s2--) i2.push(o2[s2]);
          }
        }, eachItem: function(t2, e2) {
          var n2 = this.$getRootId();
          r.defined(e2) || (e2 = n2);
          var i2 = l(e2, n2) || n2, a2 = false, o2 = false, s2 = null;
          i2 === n2 && (this._eachItemMainRangeCache ? (a2 = true, s2 = this._eachItemMainRangeCache) : (o2 = true, s2 = this._eachItemMainRangeCache = [])), a2 ? this._eachItemCached(t2, s2) : this._eachItemIterate(t2, i2, o2 ? s2 : null);
        }, eachParent: function(t2, e2) {
          for (var n2 = {}, i2 = e2, r2 = this.getParent(i2); this.exists(r2); ) {
            if (n2[r2]) throw new Error("Invalid tasks tree. Cyclic reference has been detected on task " + r2);
            n2[r2] = true, i2 = this.getItem(r2), t2.call(this, i2), r2 = this.getParent(i2);
          }
        }, _add_branch: function(t2, e2, n2) {
          var r2 = void 0 === n2 ? this.getParent(t2) : n2;
          this.hasChild(r2) || (this._branches[r2] = i.$create());
          for (var a2 = this.getChildren(r2), o2 = false, s2 = 0, l2 = a2.length; s2 < l2; s2++) if (a2[s2] == t2.id) {
            o2 = true;
            break;
          }
          o2 || (1 * e2 == e2 ? a2.splice(e2, 0, t2.id) : a2.push(t2.id), t2.$rendered_parent = r2);
        }, _move_branch: function(t2, e2, n2) {
          this._eachItemMainRangeCache = null, this._replace_branch_child(e2, t2.id), this.exists(n2) || n2 == this.$getRootId() ? this._add_branch(t2, void 0, n2) : delete this._branches[t2.id], t2.$level = this.calculateItemLevel(t2), this.eachItem(function(t3) {
            t3.$level = this.calculateItemLevel(t3);
          }, t2.id);
        }, _replace_branch_child: function(t2, e2, n2) {
          var r2 = this.getChildren(t2);
          if (r2 && void 0 !== t2) {
            for (var a2 = i.$create(), o2 = 0; o2 < r2.length; o2++) r2[o2] != e2 ? a2.push(r2[o2]) : n2 && a2.push(n2);
            this._branches[t2] = a2;
          }
        }, sort: function(t2, e2, n2) {
          this.exists(n2) || (n2 = this.$getRootId()), t2 || (t2 = "order");
          var i2 = "string" == typeof t2 ? function(e3, n3) {
            return e3[t2] == n3[t2] || a.isDate(e3[t2]) && a.isDate(n3[t2]) && e3[t2].valueOf() == n3[t2].valueOf() ? 0 : e3[t2] > n3[t2] ? 1 : -1;
          } : t2;
          if (e2) {
            var r2 = i2;
            i2 = function(t3, e3) {
              return r2(e3, t3);
            };
          }
          var o2 = this.getChildren(n2);
          if (o2) {
            for (var s2 = [], l2 = o2.length - 1; l2 >= 0; l2--) s2[l2] = this.getItem(o2[l2]);
            s2.sort(i2);
            for (l2 = 0; l2 < s2.length; l2++) o2[l2] = s2[l2].id, this.sort(t2, e2, o2[l2]);
          }
        }, filter: function(t2) {
          for (var e2 in this.pull) this.pull[e2].$rendered_parent !== this.getParent(this.pull[e2]) && this._move_branch(this.pull[e2], this.pull[e2].$rendered_parent, this.getParent(this.pull[e2]));
          return o.prototype.filter.apply(this, arguments);
        }, open: function(t2) {
          this.exists(t2) && (this.getItem(t2).$open = true, this.callEvent("onItemOpen", [t2]));
        }, close: function(t2) {
          this.exists(t2) && (this.getItem(t2).$open = false, this.callEvent("onItemClose", [t2]));
        }, destructor: function() {
          o.prototype.destructor.call(this), this._branches = null, this._indexRangeCache = {}, this._eachItemMainRangeCache = null;
        } }, o.prototype), t.exports = c;
      }, function(t, e, n) {
        var i = n(18), r = n(18);
        function a(t2) {
          var e2 = function(t3) {
            var e3 = new r(t3).primaryScale(), n3 = e3.unit, a3 = e3.step;
            if (t3.config.scale_offset_minimal) {
              var o2 = new i(t3), s2 = [o2.primaryScale()].concat(o2.getSubScales());
              o2.sortScales(s2), n3 = s2[s2.length - 1].unit, a3 = s2[s2.length - 1].step || 1;
            }
            return { unit: n3, step: a3 };
          }(t2), n2 = e2.unit, a2 = e2.step, o = function(t3, e3) {
            var n3 = { start_date: null, end_date: null };
            if (e3.config.start_date && e3.config.end_date) {
              n3.start_date = e3.date[t3 + "_start"](new Date(e3.config.start_date));
              var i2 = new Date(e3.config.end_date), r2 = e3.date[t3 + "_start"](new Date(i2));
              i2 = +i2 != +r2 ? e3.date.add(r2, 1, t3) : r2, n3.end_date = i2;
            }
            return n3;
          }(n2, t2);
          if (!o.start_date || !o.end_date) {
            for (var s = true, l = t2.getTaskByTime(), c = 0; c < l.length; c++) {
              if (l[c].type !== t2.config.types.project) {
                s = false;
                break;
              }
            }
            if (l.length && s) {
              var u = l[0].start_date, d = t2.date.add(u, 1, t2.config.duration_unit);
              o = { start_date: new Date(u), end_date: new Date(d) };
            } else o = t2.getSubtaskDates();
            o.start_date && o.end_date || (o = { start_date: /* @__PURE__ */ new Date(), end_date: /* @__PURE__ */ new Date() }), o.start_date = t2.date[n2 + "_start"](o.start_date), o.start_date = t2.calculateEndDate({ start_date: t2.date[n2 + "_start"](o.start_date), duration: -1, unit: n2, step: a2 }), o.end_date = t2.date[n2 + "_start"](o.end_date), o.end_date = t2.calculateEndDate({ start_date: o.end_date, duration: 2, unit: n2, step: a2 });
          }
          t2._min_date = o.start_date, t2._max_date = o.end_date;
        }
        t.exports = function(t2) {
          a(t2), function(t3) {
            if (t3.config.fit_tasks) {
              var e2 = +t3._min_date, n2 = +t3._max_date;
              if (+t3._min_date != e2 || +t3._max_date != n2) return t3.render(), t3.callEvent("onScaleAdjusted", []), true;
            }
          }(t2);
        };
      }, function(t, e) {
        function n(t2, e2, n2) {
          for (var i2 = 0; i2 < e2.length; i2++) t2.isLinkExists(e2[i2]) && (n2[e2[i2]] = t2.getLink(e2[i2]));
        }
        function i(t2, e2, i2) {
          n(t2, e2.$source, i2), n(t2, e2.$target, i2);
        }
        t.exports = { getSubtreeLinks: function(t2, e2) {
          var n2 = {};
          return t2.isTaskExists(e2) && i(t2, t2.getTask(e2), n2), t2.eachTask(function(e3) {
            i(t2, e3, n2);
          }, e2), n2;
        }, getSubtreeTasks: function(t2, e2) {
          var n2 = {};
          return t2.eachTask(function(t3) {
            n2[t3.id] = t3;
          }, e2), n2;
        } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = function() {
          function t2() {
            var t3 = this;
            this.canParse = function(e2) {
              return !isNaN(t3.parse(e2));
            }, this.format = function(t4) {
              return String(t4);
            }, this.parse = function(t4) {
              return parseInt(t4, 10);
            };
          }
          return t2.create = function(e2) {
            return new t2();
          }, t2;
        }();
        e.default = i;
      }, function(t, e, n) {
        var i = n(133);
        t.exports = function(t2) {
          var e2 = {}, n2 = {}, r = null, a = -1, o = null, s = i(t2);
          return { _resetTopPositionHeight: function() {
            e2 = {}, n2 = {}, s.resetCache();
          }, _resetHeight: function() {
            var t3 = this.$config.rowStore, e3 = this.getCacheStateTotalHeight(t3);
            o ? this.shouldClearHeightCache(o, e3) && (o = e3, r = null) : o = e3, a = -1, s.resetCache();
          }, getRowTop: function(t3) {
            if (s.canUseSimpleCalculation()) return s.getRowTop(t3);
            var e3 = this.$config.rowStore;
            if (!e3) return 0;
            if (void 0 !== n2[t3]) return n2[t3];
            for (var i2 = e3.getIndexRange(), r2 = 0, a2 = 0, o2 = 0; o2 < i2.length; o2++) n2[o2] = r2, r2 += this.getItemHeight(i2[o2].id), o2 < t3 && (a2 = r2);
            return a2;
          }, getItemTop: function(t3) {
            if (this.$config.rowStore) {
              if (void 0 !== e2[t3]) return e2[t3];
              var n3 = this.$config.rowStore;
              if (!n3) return 0;
              var i2 = n3.getIndexById(t3);
              if (-1 === i2 && n3.getParent && n3.exists(t3)) {
                var r2 = n3.getParent(t3);
                if (n3.exists(r2)) {
                  var a2 = n3.getItem(r2);
                  if (this.$gantt.isSplitTask(a2)) return this.getItemTop(r2);
                }
              }
              return e2[t3] = this.getRowTop(i2), e2[t3];
            }
            return 0;
          }, getItemHeight: function(t3) {
            if (s.canUseSimpleCalculation()) return s.getItemHeight(t3);
            if (!r && this.$config.rowStore && this._fillHeightCache(this.$config.rowStore), void 0 !== r[t3]) return r[t3];
            var e3 = this.$getConfig().row_height;
            if (this.$config.rowStore) {
              var n3 = this.$config.rowStore;
              if (!n3) return e3;
              var i2 = n3.getItem(t3);
              return r[t3] = i2 && i2.row_height || e3;
            }
            return e3;
          }, _fillHeightCache: function(t3) {
            if (t3) {
              r = {};
              var e3 = this.$getConfig().row_height;
              t3.eachItem(function(t4) {
                return r[t4.id] = t4 && t4.row_height || e3;
              });
            }
          }, getCacheStateTotalHeight: function(t3) {
            var e3 = this.$getConfig().row_height, n3 = {}, i2 = [], r2 = 0;
            return t3 && t3.eachItem(function(t4) {
              i2.push(t4), n3[t4.id] = t4.row_height, r2 += t4.row_height || e3;
            }), { globalHeight: e3, items: i2, count: i2.length, sumHeight: r2 };
          }, shouldClearHeightCache: function(t3, e3) {
            if (t3.count != e3.count) return true;
            if (t3.globalHeight != e3.globalHeight) return true;
            if (t3.sumHeight != e3.sumHeight) return true;
            for (var n3 in t3.items) {
              var i2 = e3.items[n3];
              if (void 0 !== i2 && i2 != t3.items[n3]) return true;
            }
            return false;
          }, getTotalHeight: function() {
            if (s.canUseSimpleCalculation()) return s.getTotalHeight();
            if (-1 != a) return a;
            if (this.$config.rowStore) {
              var t3 = this.$config.rowStore;
              this._fillHeightCache(t3);
              var e3 = this.getItemHeight.bind(this), n3 = 0;
              return t3.getVisibleItems().forEach(function(t4) {
                n3 += e3(t4.id);
              }), a = n3, n3;
            }
            return 0;
          }, getItemIndexByTopPosition: function(t3) {
            if (!this.$config.rowStore) return 0;
            if (s.canUseSimpleCalculation()) return s.getItemIndexByTopPosition(t3);
            for (var e3 = this.$config.rowStore, n3 = 0; n3 < e3.countVisible(); n3++) {
              var i2 = this.getRowTop(n3), r2 = this.getRowTop(n3 + 1);
              if (!r2) {
                var a2 = e3.getIdByIndex(n3);
                r2 = i2 + this.getItemHeight(a2);
              }
              if (t3 >= i2 && t3 < r2) return n3;
            }
          } };
        };
      }, function(t, e, n) {
        var i = n(0), r = n(2);
        function a(t2, e2, n2, i2, r2) {
          return this.date = t2, this.unit = e2, this.task = n2, this.id = i2, this.calendar = r2, this;
        }
        function o(t2, e2, n2, i2, r2, a2) {
          return this.date = t2, this.dir = e2, this.unit = n2, this.task = i2, this.id = r2, this.calendar = a2, this;
        }
        function s(t2, e2, n2, i2, r2, a2, o2) {
          return this.start_date = t2, this.duration = e2, this.unit = n2, this.step = i2, this.task = r2, this.id = a2, this.calendar = o2, this;
        }
        function l(t2, e2, n2, i2) {
          return this.start_date = t2, this.end_date = e2, this.task = n2, this.calendar = i2, this.unit = null, this.step = null, this;
        }
        t.exports = function(t2) {
          return { getWorkHoursArguments: function() {
            var e2 = arguments[0];
            if (e2 = r.isDate(e2) ? { date: e2 } : i.mixin({}, e2), !r.isValidDate(e2.date)) throw t2.assert(false, "Invalid date argument for getWorkHours method"), new Error("Invalid date argument for getWorkHours method");
            return e2;
          }, setWorkTimeArguments: function() {
            return arguments[0];
          }, unsetWorkTimeArguments: function() {
            return arguments[0];
          }, isWorkTimeArguments: function() {
            var e2, n2 = arguments[0];
            if (n2 instanceof a) return n2;
            if ((e2 = n2.date ? new a(n2.date, n2.unit, n2.task, null, n2.calendar) : new a(arguments[0], arguments[1], arguments[2], null, arguments[3])).unit = e2.unit || t2.config.duration_unit, !r.isValidDate(e2.date)) throw t2.assert(false, "Invalid date argument for isWorkTime method"), new Error("Invalid date argument for isWorkTime method");
            return e2;
          }, getClosestWorkTimeArguments: function(e2) {
            var n2, i2 = arguments[0];
            if (i2 instanceof o) return i2;
            if (n2 = r.isDate(i2) ? new o(i2) : new o(i2.date, i2.dir, i2.unit, i2.task, null, i2.calendar), i2.id && (n2.task = i2), n2.dir = i2.dir || "any", n2.unit = i2.unit || t2.config.duration_unit, !r.isValidDate(n2.date)) throw t2.assert(false, "Invalid date argument for getClosestWorkTime method"), new Error("Invalid date argument for getClosestWorkTime method");
            return n2;
          }, _getStartEndConfig: function(e2) {
            var n2, i2 = l;
            if (e2 instanceof i2) return e2;
            if (r.isDate(e2) ? n2 = new i2(arguments[0], arguments[1], arguments[2], arguments[3]) : (n2 = new i2(e2.start_date, e2.end_date, e2.task), null !== e2.id && void 0 !== e2.id && (n2.task = e2)), n2.unit = n2.unit || t2.config.duration_unit, n2.step = n2.step || t2.config.duration_step, n2.start_date = n2.start_date || n2.start || n2.date, !r.isValidDate(n2.start_date)) throw t2.assert(false, "Invalid start_date argument for getDuration method"), new Error("Invalid start_date argument for getDuration method");
            if (!r.isValidDate(n2.end_date)) throw t2.assert(false, "Invalid end_date argument for getDuration method"), new Error("Invalid end_date argument for getDuration method");
            return n2;
          }, getDurationArguments: function(t3, e2, n2, i2) {
            return this._getStartEndConfig.apply(this, arguments);
          }, hasDurationArguments: function(t3, e2, n2, i2) {
            return this._getStartEndConfig.apply(this, arguments);
          }, calculateEndDateArguments: function(e2, n2, i2, a2) {
            var o2, l2 = arguments[0];
            if (l2 instanceof s) return l2;
            if (o2 = r.isDate(l2) ? new s(arguments[0], arguments[1], arguments[2], void 0, arguments[3], void 0, arguments[4]) : new s(l2.start_date, l2.duration, l2.unit, l2.step, l2.task, null, l2.calendar), null !== l2.id && void 0 !== l2.id && (o2.task = l2, o2.unit = null, o2.step = null), o2.unit = o2.unit || t2.config.duration_unit, o2.step = o2.step || t2.config.duration_step, !r.isValidDate(o2.start_date)) throw t2.assert(false, "Invalid start_date argument for calculateEndDate method"), new Error("Invalid start_date argument for calculateEndDate method");
            return o2;
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.createCacheObject = void 0;
        var i = n(145), r = n(146), a = n(147);
        Object.defineProperty(e, "LargerUnitsCache", { enumerable: true, get: function() {
          return a.LargerUnitsCache;
        } }), e.createCacheObject = function() {
          return "undefined" != typeof Map ? new i.WorkUnitsMapCache() : new r.WorkUnitsObjectCache();
        };
      }, function(t, e, n) {
        var i = n(3), r = n(1), a = function(t2) {
          function e2(e3, n2, i2) {
            var r2 = t2.apply(this, arguments) || this;
            return e3 && (r2.$root = true), r2._parseConfig(n2), r2.$name = "layout", r2;
          }
          return i(e2, t2), e2.prototype.destructor = function() {
            this.$container && this.$view && r.removeNode(this.$view);
            for (var e3 = 0; e3 < this.$cells.length; e3++) {
              this.$cells[e3].destructor();
            }
            this.$cells = [], t2.prototype.destructor.call(this);
          }, e2.prototype._resizeScrollbars = function(t3, e3) {
            var n2, i2 = false, r2 = [], a2 = [];
            function o(t4) {
              t4.$parent.show(), i2 = true, r2.push(t4);
            }
            function s(t4) {
              t4.$parent.hide(), i2 = true, a2.push(t4);
            }
            for (var l = 0; l < e3.length; l++) t3[(n2 = e3[l]).$config.scroll] ? s(n2) : n2.shouldHide() ? s(n2) : n2.shouldShow() ? o(n2) : n2.isVisible() ? r2.push(n2) : a2.push(n2);
            var c = {};
            for (l = 0; l < r2.length; l++) r2[l].$config.group && (c[r2[l].$config.group] = true);
            for (l = 0; l < a2.length; l++) if ((n2 = a2[l]).$config.group && c[n2.$config.group]) {
              o(n2);
              for (var u = 0; u < r2.length; u++) if (r2[u] == n2) {
                this.$gantt.$scrollbarRepaint = true;
                break;
              }
            }
            return i2;
          }, e2.prototype._syncCellSizes = function(t3, e3) {
            if (t3) {
              var n2 = {};
              return this._eachChild(function(t4) {
                t4.$config.group && "scrollbar" != t4.$name && "resizer" != t4.$name && (n2[t4.$config.group] || (n2[t4.$config.group] = []), n2[t4.$config.group].push(t4));
              }), n2[t3] && this._syncGroupSize(n2[t3], e3), n2[t3];
            }
          }, e2.prototype._syncGroupSize = function(t3, e3) {
            if (t3.length) for (var n2 = t3[0].$parent._xLayout ? "width" : "height", i2 = t3[0].$parent.getNextSibling(t3[0].$id) ? 1 : -1, r2 = e3.value, a2 = e3.isGravity, o = 0; o < t3.length; o++) {
              var s = t3[o].getSize(), l = i2 > 0 ? t3[o].$parent.getNextSibling(t3[o].$id) : t3[o].$parent.getPrevSibling(t3[o].$id);
              "resizer" == l.$name && (l = i2 > 0 ? l.$parent.getNextSibling(l.$id) : l.$parent.getPrevSibling(l.$id));
              var c = l.getSize();
              if (a2) t3[o].$config.gravity = r2;
              else if (l[n2]) {
                var u = s.gravity + c.gravity, d = s[n2] + c[n2], h = u / d;
                t3[o].$config.gravity = h * r2, l.$config[n2] = d - r2, l.$config.gravity = u - h * r2;
              } else t3[o].$config[n2] = r2;
              var f = this.$gantt.$ui.getView("grid");
              !f || t3[o].$content !== f || f.$config.scrollable || a2 || (this.$gantt.config.grid_width = r2);
            }
          }, e2.prototype.resize = function(e3) {
            var n2 = false;
            if (this.$root && !this._resizeInProgress && (this.callEvent("onBeforeResize", []), n2 = true, this._resizeInProgress = true), t2.prototype.resize.call(this, true), t2.prototype.resize.call(this, false), n2) {
              var i2 = [];
              i2 = (i2 = (i2 = i2.concat(this.getCellsByType("viewCell"))).concat(this.getCellsByType("viewLayout"))).concat(this.getCellsByType("hostCell"));
              for (var r2 = this.getCellsByType("scroller"), a2 = 0; a2 < i2.length; a2++) i2[a2].$config.hidden || i2[a2].setContentSize();
              var o = this._getAutosizeMode(this.$config.autosize), s = this._resizeScrollbars(o, r2);
              if (this.$config.autosize && (this.autosize(this.$config.autosize), i2.forEach(function(t3) {
                var e4 = t3.$parent, n3 = e4.getContentSize(o);
                o.x && (e4.$config.$originalWidthStored || (e4.$config.$originalWidthStored = true, e4.$config.$originalWidth = e4.$config.width), e4.$config.width = n3.width), o.y && (e4.$config.$originalHeightStored || (e4.$config.$originalHeightStored = true, e4.$config.$originalHeight = e4.$config.height), e4.$config.height = n3.height);
              }), s = true), s) {
                this.resize();
                for (a2 = 0; a2 < i2.length; a2++) i2[a2].$config.hidden || i2[a2].setContentSize();
              }
              this.callEvent("onResize", []);
            }
            n2 && (this._resizeInProgress = false);
          }, e2.prototype._eachChild = function(t3, e3) {
            if (t3(e3 = e3 || this), e3.$cells) for (var n2 = 0; n2 < e3.$cells.length; n2++) this._eachChild(t3, e3.$cells[n2]);
          }, e2.prototype.isChild = function(t3) {
            var e3 = false;
            return this._eachChild(function(n2) {
              n2 !== t3 && n2.$content !== t3 || (e3 = true);
            }), e3;
          }, e2.prototype.getCellsByType = function(t3) {
            var n2 = [];
            if (t3 === this.$name && n2.push(this), this.$content && this.$content.$name == t3 && n2.push(this.$content), this.$cells) for (var i2 = 0; i2 < this.$cells.length; i2++) {
              var r2 = e2.prototype.getCellsByType.call(this.$cells[i2], t3);
              r2.length && n2.push.apply(n2, r2);
            }
            return n2;
          }, e2.prototype.getNextSibling = function(t3) {
            var e3 = this.cellIndex(t3);
            return e3 >= 0 && this.$cells[e3 + 1] ? this.$cells[e3 + 1] : null;
          }, e2.prototype.getPrevSibling = function(t3) {
            var e3 = this.cellIndex(t3);
            return e3 >= 0 && this.$cells[e3 - 1] ? this.$cells[e3 - 1] : null;
          }, e2.prototype.cell = function(t3) {
            for (var e3 = 0; e3 < this.$cells.length; e3++) {
              var n2 = this.$cells[e3];
              if (n2.$id === t3) return n2;
              var i2 = n2.cell(t3);
              if (i2) return i2;
            }
          }, e2.prototype.cellIndex = function(t3) {
            for (var e3 = 0; e3 < this.$cells.length; e3++) if (this.$cells[e3].$id === t3) return e3;
            return -1;
          }, e2.prototype.moveView = function(t3, e3) {
            if (this.$cells[e3] !== t3) return window.alert("Not implemented");
            e3 += this.$config.header ? 1 : 0;
            var n2 = this.$view;
            e3 >= n2.childNodes.length ? n2.appendChild(t3.$view) : n2.insertBefore(t3.$view, n2.childNodes[e3]);
          }, e2.prototype._parseConfig = function(t3) {
            this.$cells = [], this._xLayout = !t3.rows;
            for (var e3 = t3.rows || t3.cols || t3.views, n2 = 0; n2 < e3.length; n2++) {
              var i2 = e3[n2];
              i2.mode = this._xLayout ? "x" : "y";
              var r2 = this.$factory.initUI(i2, this);
              r2 ? (r2.$parent = this, this.$cells.push(r2)) : (e3.splice(n2, 1), n2--);
            }
          }, e2.prototype.getCells = function() {
            return this.$cells;
          }, e2.prototype.render = function() {
            var t3 = r.insertNode(this.$container, this.$toHTML());
            this.$fill(t3, null), this.callEvent("onReady", []), this.resize(), this.render = this.resize;
          }, e2.prototype.$fill = function(t3, e3) {
            this.$view = t3, this.$parent = e3;
            for (var n2 = r.getChildNodes(t3, "gantt_layout_cell"), i2 = n2.length - 1; i2 >= 0; i2--) {
              var a2 = this.$cells[i2];
              a2.$fill(n2[i2], this), a2.$config.hidden && a2.$view.parentNode.removeChild(a2.$view);
            }
          }, e2.prototype.$toHTML = function() {
            for (var e3 = this._xLayout ? "x" : "y", n2 = [], i2 = 0; i2 < this.$cells.length; i2++) n2.push(this.$cells[i2].$toHTML());
            return t2.prototype.$toHTML.call(this, n2.join(""), (this.$root ? "gantt_layout_root " : "") + "gantt_layout gantt_layout_" + e3);
          }, e2.prototype.getContentSize = function(t3) {
            for (var e3, n2, i2, r2 = 0, a2 = 0, o = 0; o < this.$cells.length; o++) (n2 = this.$cells[o]).$config.hidden || (e3 = n2.getContentSize(t3), "scrollbar" === n2.$config.view && t3[n2.$config.scroll] && (e3.height = 0, e3.width = 0), n2.$config.resizer && (this._xLayout ? e3.height = 0 : e3.width = 0), i2 = n2._getBorderSizes(), this._xLayout ? (r2 += e3.width + i2.horizontal, a2 = Math.max(a2, e3.height + i2.vertical)) : (r2 = Math.max(r2, e3.width + i2.horizontal), a2 += e3.height + i2.vertical));
            return { width: r2 += (i2 = this._getBorderSizes()).horizontal, height: a2 += i2.vertical };
          }, e2.prototype._cleanElSize = function(t3) {
            return 1 * (t3 || "").toString().replace("px", "") || 0;
          }, e2.prototype._getBoxStyles = function(t3) {
            var e3 = null, n2 = ["width", "height", "paddingTop", "paddingBottom", "paddingLeft", "paddingRight", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"], i2 = { boxSizing: "border-box" == (e3 = window.getComputedStyle ? window.getComputedStyle(t3, null) : { width: t3.clientWidth, height: t3.clientHeight }).boxSizing };
            e3.MozBoxSizing && (i2.boxSizing = "border-box" == e3.MozBoxSizing);
            for (var r2 = 0; r2 < n2.length; r2++) i2[n2[r2]] = e3[n2[r2]] ? this._cleanElSize(e3[n2[r2]]) : 0;
            var a2 = { horPaddings: i2.paddingLeft + i2.paddingRight + i2.borderLeftWidth + i2.borderRightWidth, vertPaddings: i2.paddingTop + i2.paddingBottom + i2.borderTopWidth + i2.borderBottomWidth, borderBox: i2.boxSizing, innerWidth: i2.width, innerHeight: i2.height, outerWidth: i2.width, outerHeight: i2.height };
            return a2.borderBox ? (a2.innerWidth -= a2.horPaddings, a2.innerHeight -= a2.vertPaddings) : (a2.outerWidth += a2.horPaddings, a2.outerHeight += a2.vertPaddings), a2;
          }, e2.prototype._getAutosizeMode = function(t3) {
            var e3 = { x: false, y: false };
            return "xy" === t3 ? e3.x = e3.y = true : "y" === t3 || true === t3 ? e3.y = true : "x" === t3 && (e3.x = true), e3;
          }, e2.prototype.autosize = function(t3) {
            var e3 = this._getAutosizeMode(t3), n2 = this._getBoxStyles(this.$container), i2 = this.getContentSize(t3), r2 = this.$container;
            e3.x && (n2.borderBox && (i2.width += n2.horPaddings), r2.style.width = i2.width + "px"), e3.y && (n2.borderBox && (i2.height += n2.vertPaddings), r2.style.height = i2.height + "px");
          }, e2.prototype.getSize = function() {
            this._sizes = [];
            for (var e3 = 0, n2 = 0, i2 = 1e11, r2 = 0, a2 = 1e11, o = 0, s = 0; s < this.$cells.length; s++) {
              var l = this._sizes[s] = this.$cells[s].getSize();
              this.$cells[s].$config.hidden || (this._xLayout ? (!l.width && l.minWidth ? e3 += l.minWidth : e3 += l.width, i2 += l.maxWidth, n2 += l.minWidth, r2 = Math.max(r2, l.height), a2 = Math.min(a2, l.maxHeight), o = Math.max(o, l.minHeight)) : (!l.height && l.minHeight ? r2 += l.minHeight : r2 += l.height, a2 += l.maxHeight, o += l.minHeight, e3 = Math.max(e3, l.width), i2 = Math.min(i2, l.maxWidth), n2 = Math.max(n2, l.minWidth)));
            }
            var c = t2.prototype.getSize.call(this);
            return c.maxWidth >= 1e5 && (c.maxWidth = i2), c.maxHeight >= 1e5 && (c.maxHeight = a2), c.minWidth = c.minWidth != c.minWidth ? 0 : c.minWidth, c.minHeight = c.minHeight != c.minHeight ? 0 : c.minHeight, this._xLayout ? (c.minWidth += this.$config.margin * this.$cells.length || 0, c.minWidth += 2 * this.$config.padding || 0, c.minHeight += 2 * this.$config.padding || 0) : (c.minHeight += this.$config.margin * this.$cells.length || 0, c.minHeight += 2 * this.$config.padding || 0), c;
          }, e2.prototype._calcFreeSpace = function(t3, e3, n2) {
            var i2 = n2 ? e3.minWidth : e3.minHeight, r2 = e3.maxWidth, a2 = t3;
            return a2 ? (a2 > r2 && (a2 = r2), a2 < i2 && (a2 = i2), this._free -= a2) : ((a2 = Math.floor(this._free / this._gravity * e3.gravity)) > r2 && (a2 = r2, this._free -= a2, this._gravity -= e3.gravity), a2 < i2 && (a2 = i2, this._free -= a2, this._gravity -= e3.gravity)), a2;
          }, e2.prototype._calcSize = function(t3, e3, n2) {
            var i2 = t3, r2 = n2 ? e3.minWidth : e3.minHeight, a2 = n2 ? e3.maxWidth : e3.maxHeight;
            return i2 || (i2 = Math.floor(this._free / this._gravity * e3.gravity)), i2 > a2 && (i2 = a2), i2 < r2 && (i2 = r2), i2;
          }, e2.prototype._configureBorders = function() {
            this.$root && this._setBorders([this._borders.left, this._borders.top, this._borders.right, this._borders.bottom], this);
            for (var t3 = this._xLayout ? this._borders.right : this._borders.bottom, e3 = this.$cells, n2 = e3.length - 1, i2 = n2; i2 >= 0; i2--) if (!e3[i2].$config.hidden) {
              n2 = i2;
              break;
            }
            for (i2 = 0; i2 < e3.length; i2++) if (!e3[i2].$config.hidden) {
              var r2 = i2 >= n2, a2 = "";
              !r2 && e3[i2 + 1] && "scrollbar" == e3[i2 + 1].$config.view && (this._xLayout ? r2 = true : a2 = "gantt_layout_cell_border_transparent"), this._setBorders(r2 ? [] : [t3, a2], e3[i2]);
            }
          }, e2.prototype._updateCellVisibility = function() {
            for (var t3 = this._visibleCells || {}, e3 = !this._visibleCells, n2 = {}, i2 = null, r2 = [], a2 = 0; a2 < this._sizes.length; a2++) (i2 = this.$cells[a2]).$config.hide_empty && r2.push(i2), !e3 && i2.$config.hidden && t3[i2.$id] ? i2._hide(true) : i2.$config.hidden || t3[i2.$id] || i2._hide(false), i2.$config.hidden || (n2[i2.$id] = true);
            this._visibleCells = n2;
            for (a2 = 0; a2 < r2.length; a2++) {
              var o = true;
              (i2 = r2[a2]).$cells.forEach(function(t4) {
                t4.$config.hidden || t4.$config.resizer || (o = false);
              }), i2.$config.hidden = o;
            }
          }, e2.prototype.setSize = function(e3, n2) {
            this._configureBorders(), t2.prototype.setSize.call(this, e3, n2), n2 = this.$lastSize.contentY, e3 = this.$lastSize.contentX;
            var i2, r2, a2 = this.$config.padding || 0;
            this.$view.style.padding = a2 + "px", this._gravity = 0, this._free = this._xLayout ? e3 : n2, this._free -= 2 * a2, this._updateCellVisibility();
            for (var o = 0; o < this._sizes.length; o++) if (!(i2 = this.$cells[o]).$config.hidden) {
              var s = this.$config.margin || 0;
              "resizer" != i2.$name || s || (s = -1);
              var l = i2.$view, c = this._xLayout ? "marginRight" : "marginBottom";
              o !== this.$cells.length - 1 && (l.style[c] = s + "px", this._free -= s), r2 = this._sizes[o], this._xLayout ? r2.width || (this._gravity += r2.gravity) : r2.height || (this._gravity += r2.gravity);
            }
            for (o = 0; o < this._sizes.length; o++) if (!(i2 = this.$cells[o]).$config.hidden) {
              var u = (r2 = this._sizes[o]).width, d = r2.height;
              this._xLayout ? this._calcFreeSpace(u, r2, true) : this._calcFreeSpace(d, r2, false);
            }
            for (o = 0; o < this.$cells.length; o++) if (!(i2 = this.$cells[o]).$config.hidden) {
              r2 = this._sizes[o];
              var h = void 0, f = void 0;
              this._xLayout ? (h = this._calcSize(r2.width, r2, true), f = n2 - 2 * a2) : (h = e3 - 2 * a2, f = this._calcSize(r2.height, r2, false)), i2.setSize(h, f);
            }
          }, e2;
        }(n(11));
        t.exports = a;
      }, function(t, e, n) {
        var i = n(2);
        t.exports = function(t2) {
          var e2 = {};
          return t2.$data.tasksStore.attachEvent("onStoreUpdated", function() {
            e2 = {};
          }), function(n2, r, a, o) {
            var s = n2.id + "_" + r + "_" + a.unit + "_" + a.step;
            return e2[s] ? e2[s] : e2[s] = function(e3, n3, r2, a2) {
              var o2, s2 = false, l = {};
              t2.config.process_resource_assignments && n3 === t2.config.resource_property ? (o2 = "task" == e3.$role ? t2.getResourceAssignments(e3.$resource_id, e3.$task_id) : t2.getResourceAssignments(e3.id), s2 = true) : o2 = "task" == e3.$role ? [] : t2.getTaskBy(n3, e3.id);
              for (var c, u, d, h, f, l = function(e4, n4, r3) {
                for (var a3 = n4.unit, o3 = n4.step, s3 = {}, l2 = {}, c2 = 0; c2 < e4.length; c2++) {
                  var u2 = e4[c2], d2 = u2;
                  r3 && (d2 = t2.getTask(u2.task_id));
                  var h2 = u2.start_date || d2.start_date, f2 = u2.end_date || d2.end_date;
                  r3 && (u2.start_date && (h2 = new Date(Math.max(u2.start_date.valueOf(), d2.start_date.valueOf()))), u2.end_date && (f2 = new Date(Math.min(u2.end_date.valueOf(), d2.end_date.valueOf()))));
                  var _2 = i.findBinary(n4.trace_x, h2.valueOf()), g2 = new Date(n4.trace_x[_2] || t2.date[a3 + "_start"](new Date(h2))), p2 = t2.config.work_time ? t2.getTaskCalendar(d2) : t2;
                  for (l2[p2.id] = {}; g2 < f2; ) {
                    var v2 = l2[p2.id], m2 = g2, y = m2.valueOf();
                    if (g2 = t2.date.add(g2, o3, a3), false !== v2[y]) {
                      var k = p2.isWorkTime({ date: m2, task: d2, unit: a3 });
                      k ? (s3[y] || (s3[y] = { tasks: [], assignments: [] }), s3[y].tasks.push(d2), r3 && s3[y].assignments.push(u2)) : v2[y] = false;
                    }
                  }
                }
                return s3;
              }(o2, r2, s2), _ = r2.unit, g = r2.step, p = [], v = a2.$getConfig(), m = 0; m < r2.trace_x.length; m++) c = new Date(r2.trace_x[m]), u = t2.date.add(c, g, _), f = l[c.valueOf()] || {}, d = f.tasks || [], h = f.assignments || [], d.length || v.resource_render_empty_cells ? p.push({ start_date: c, end_date: u, tasks: d, assignments: h }) : p.push(null);
              return p;
            }(n2, r, a, o);
          };
        };
      }, function(t, e, n) {
        var i = n(2), r = { getHtmlSelect: function(t2, e2, n2) {
          var r2 = "", o2 = this;
          return t2 = t2 || [], i.forEach(t2, function(t3) {
            var e3 = [{ key: "value", value: t3.key }];
            n2 == t3.key && (e3[e3.length] = { key: "selected", value: "selected" }), t3.attributes && (e3 = e3.concat(t3.attributes)), r2 += o2.getHtmlOption({ innerHTML: t3.label }, e3);
          }), a("select", { innerHTML: r2 }, e2);
        }, getHtmlOption: function(t2, e2) {
          return a("option", t2, e2);
        }, getHtmlButton: function(t2, e2) {
          return a("button", t2, e2);
        }, getHtmlDiv: function(t2, e2) {
          return a("div", t2, e2);
        }, getHtmlLabel: function(t2, e2) {
          return a("label", t2, e2);
        }, getHtmlInput: function(t2) {
          return "<input" + o(t2 || []) + ">";
        } };
        function a(t2, e2, n2) {
          return e2 = e2 || [], "<" + t2 + o(n2 || []) + ">" + (e2.innerHTML || "") + "</" + t2 + ">";
        }
        function o(t2) {
          var e2 = "";
          return i.forEach(t2, function(t3) {
            e2 += " " + t3.key + "='" + t3.value + "'";
          }), e2;
        }
        t.exports = r;
      }, , , , , , , , , , , , , , , , , , , , function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.gantt = void 0;
        var i = n(64), r = n(92), a = n(12).gantt = r(i.default);
        e.gantt = a, e.default = a;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(65), r = n(68), a = n(70), o = n(71), s = n(82), l = n(83), c = n(84), u = n(86), d = n(89);
        e.default = { click_drag: i.default, drag_timeline: r.default, fullscreen: a.default, keyboard_navigation: o, quick_info: c.default, tooltip: u.default, undo: d.default, marker: s, multiselect: l };
      }, function(t, e, n) {
        var i = this && this.__assign || function() {
          return (i = Object.assign || function(t2) {
            for (var e2, n2 = 1, i2 = arguments.length; n2 < i2; n2++) for (var r2 in e2 = arguments[n2]) Object.prototype.hasOwnProperty.call(e2, r2) && (t2[r2] = e2[r2]);
            return t2;
          }).apply(this, arguments);
        };
        Object.defineProperty(e, "__esModule", { value: true });
        var r = n(66), a = n(67);
        e.default = function(t2) {
          t2.ext || (t2.ext = {});
          var e2 = { className: "gantt_click_drag_rect", useRequestAnimationFrame: true, callback: void 0, singleRow: false }, n2 = new r.EventsManager(t2);
          t2.ext.clickDrag = n2, t2.attachEvent("onGanttReady", function() {
            var n3 = i({ viewPort: t2.$task_data }, e2);
            if (t2.config.click_drag) {
              var r2 = t2.config.click_drag;
              n3.render = r2.render || e2.render, n3.className = r2.className || e2.className, n3.callback = r2.callback || e2.callback, n3.viewPort = r2.viewPort || t2.$task_data, n3.useRequestAnimationFrame = void 0 === r2.useRequestAnimationFrame ? e2.useRequestAnimationFrame : r2.useRequestAnimationFrame, n3.singleRow = void 0 === r2.singleRow ? e2.singleRow : r2.singleRow;
              var o = t2.$ui.getView("timeline"), s = new a.SelectedRegion(n3, t2, o);
              t2.ext.clickDrag.attach(s, r2.useKey, r2.ignore);
            }
          }), t2.attachEvent("onDestroy", function() {
            n2.destructor();
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.EventsManager = void 0;
        var i = n(1), r = function() {
          function t2(t3) {
            this._mouseDown = false, this._gantt = t3, this._domEvents = t3._createDomEventScope();
          }
          return t2.prototype.attach = function(t3, e2, n2) {
            var r2 = this, a = this._gantt, o = t3.getViewPort();
            this._originPosition = window.getComputedStyle(o).display, this._restoreOriginPosition = function() {
              o.style.position = r2._originPosition;
            }, "static" === this._originPosition && (o.style.position = "relative");
            var s = a.$services.getService("state");
            s.registerProvider("clickDrag", function() {
              return { autoscroll: false };
            });
            var l = null;
            this._domEvents.attach(o, "mousedown", function(i2) {
              l = null;
              var o2 = ".gantt_task_line, .gantt_task_link";
              void 0 !== n2 && (o2 = n2 instanceof Array ? n2.join(", ") : n2), o2 && a.utils.dom.closest(i2.target, o2) || (s.registerProvider("clickDrag", function() {
                return { autoscroll: r2._mouseDown };
              }), e2 && true !== i2[e2] || (l = r2._getCoordinates(i2, t3)));
            });
            var c = i.getRootNode(a.$root) || document.body;
            this._domEvents.attach(c, "mouseup", function(n3) {
              if (l = null, (!e2 || true === n3[e2]) && true === r2._mouseDown) {
                r2._mouseDown = false;
                var i2 = r2._getCoordinates(n3, t3);
                t3.dragEnd(i2);
              }
            }), this._domEvents.attach(o, "mousemove", function(n3) {
              if (!e2 || true === n3[e2]) {
                var i2 = r2._gantt.ext.clickDrag, o2 = (r2._gantt.config.drag_timeline || {}).useKey;
                if (!i2 || !o2 || e2 || !n3[o2]) {
                  var s2 = null;
                  if (!r2._mouseDown && l) return s2 = r2._getCoordinates(n3, t3), void (Math.abs(l.relative.left - s2.relative.left) > 5 && l && (r2._mouseDown = true, t3.setStart(a.copy(l)), t3.setPosition(a.copy(l)), t3.setEnd(a.copy(l)), l = null));
                  true === r2._mouseDown && (s2 = r2._getCoordinates(n3, t3), t3.setEnd(s2), t3.render());
                }
              }
            });
          }, t2.prototype.detach = function() {
            var t3 = this._gantt;
            this._domEvents.detachAll(), this._restoreOriginPosition && this._restoreOriginPosition(), t3.$services.getService("state").unregisterProvider("clickDrag");
          }, t2.prototype.destructor = function() {
            this.detach();
          }, t2.prototype._getCoordinates = function(t3, e2) {
            var n2 = e2.getViewPort(), i2 = n2.getBoundingClientRect(), r2 = t3.clientX, a = t3.clientY;
            return { absolute: { left: r2, top: a }, relative: { left: r2 - i2.left + n2.scrollLeft, top: a - i2.top + n2.scrollTop } };
          }, t2;
        }();
        e.EventsManager = r;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.SelectedRegion = void 0;
        var i = n(4), r = n(2), a = function() {
          function t2(t3, e2, n2) {
            var a2 = this;
            this._el = document.createElement("div"), this.defaultRender = function(t4, e3) {
              a2._el || (a2._el = document.createElement("div"));
              var n3 = a2._el, i2 = Math.min(t4.relative.top, e3.relative.top), r2 = Math.max(t4.relative.top, e3.relative.top), o = Math.min(t4.relative.left, e3.relative.left), s = Math.max(t4.relative.left, e3.relative.left);
              if (a2._singleRow) {
                var l = a2._getTaskPositionByTop(a2._startPoint.relative.top);
                n3.style.height = l.height + "px", n3.style.top = l.top + "px";
              } else n3.style.height = Math.abs(r2 - i2) + "px", n3.style.top = i2 + "px";
              return n3.style.width = Math.abs(s - o) + "px", n3.style.left = o + "px", n3;
            }, this._gantt = e2, this._view = n2, this._viewPort = t3.viewPort, this._el.classList.add(t3.className), "function" == typeof t3.callback && (this._callback = t3.callback), this.render = function() {
              var e3;
              (e3 = t3.render ? t3.render(a2._startPoint, a2._endPoint) : a2.defaultRender(a2._startPoint, a2._endPoint)) !== a2._el && (a2._el && a2._el.parentNode && a2._el.parentNode.removeChild(a2._el), a2._el = e3), "" !== t3.className && a2._el.classList.add(t3.className), a2.draw();
            }, r.isEventable(this._viewPort) || i(this._viewPort), this._singleRow = t3.singleRow, this._useRequestAnimationFrame = t3.useRequestAnimationFrame;
          }
          return t2.prototype.draw = function() {
            var t3 = this;
            if (this._useRequestAnimationFrame) return requestAnimationFrame(function() {
              t3._viewPort.appendChild(t3.getElement());
            });
            this._viewPort.appendChild(this.getElement());
          }, t2.prototype.clear = function() {
            var t3 = this;
            if (this._useRequestAnimationFrame) return requestAnimationFrame(function() {
              t3._el.parentNode && t3._viewPort.removeChild(t3._el);
            });
            this._el.parentNode && this._viewPort.removeChild(this._el);
          }, t2.prototype.getElement = function() {
            return this._el;
          }, t2.prototype.getViewPort = function() {
            return this._viewPort;
          }, t2.prototype.setStart = function(t3) {
            var e2 = this._gantt;
            this._startPoint = t3, this._startDate = e2.dateFromPos(this._startPoint.relative.left), this._viewPort.callEvent("onBeforeDrag", [this._startPoint]);
          }, t2.prototype.setEnd = function(t3) {
            var e2 = this._gantt;
            if (this._endPoint = t3, this._singleRow) {
              var n2 = this._getTaskPositionByTop(this._startPoint.relative.top);
              this._endPoint.relative.top = n2.top;
            }
            this._endDate = e2.dateFromPos(this._endPoint.relative.left), this._startPoint.relative.left > this._endPoint.relative.left && (this._positionPoint = { relative: { left: this._endPoint.relative.left, top: this._positionPoint.relative.top }, absolute: { left: this._endPoint.absolute.left, top: this._positionPoint.absolute.top } }), this._startPoint.relative.top > this._endPoint.relative.top && (this._positionPoint = { relative: { left: this._positionPoint.relative.left, top: this._endPoint.relative.top }, absolute: { left: this._positionPoint.absolute.left, top: this._endPoint.absolute.top } }), this._viewPort.callEvent("onDrag", [this._startPoint, this._endPoint]);
          }, t2.prototype.setPosition = function(t3) {
            this._positionPoint = t3;
          }, t2.prototype.dragEnd = function(t3) {
            var e2, n2 = this._gantt;
            t3.relative.left < 0 && (t3.relative.left = 0), this._viewPort.callEvent("onBeforeDragEnd", [this._startPoint, t3]), this.setEnd(t3), this._endDate = this._endDate || n2.getState().max_date, this._startDate.valueOf() > this._endDate.valueOf() && (e2 = [this._endDate, this._startDate], this._startDate = e2[0], this._endDate = e2[1]), this.clear();
            var i2 = n2.getTaskByTime(this._startDate, this._endDate), r2 = this._getTasksByTop(this._startPoint.relative.top, this._endPoint.relative.top);
            this._viewPort.callEvent("onDragEnd", [this._startPoint, this._endPoint]), this._callback && this._callback(this._startPoint, this._endPoint, this._startDate, this._endDate, i2, r2);
          }, t2.prototype.getInBounds = function() {
            return this._singleRow;
          }, t2.prototype._getTasksByTop = function(t3, e2) {
            var n2 = this._gantt, i2 = t3, r2 = e2;
            t3 > e2 && (i2 = e2, r2 = t3);
            for (var a2 = this._getTaskPositionByTop(i2).index, o = this._getTaskPositionByTop(r2).index, s = [], l = a2; l <= o; l++) {
              n2.getTaskByIndex(l) && s.push(n2.getTaskByIndex(l));
            }
            return s;
          }, t2.prototype._getTaskPositionByTop = function(t3) {
            var e2 = this._gantt, n2 = this._view, i2 = n2.getItemIndexByTopPosition(t3), r2 = e2.getTaskByIndex(i2);
            if (r2) {
              var a2 = n2.getItemHeight(r2.id);
              return { top: n2.getItemTop(r2.id) || 0, height: a2 || 0, index: i2 };
            }
            var o = n2.getTotalHeight();
            return { top: t3 > o ? o : 0, height: e2.config.row_height, index: t3 > o ? e2.getTaskCount() : 0 };
          }, t2;
        }();
        e.SelectedRegion = a;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(69);
        e.default = function(t2) {
          t2.ext || (t2.ext = {}), t2.ext.dragTimeline = { create: function() {
            return i.EventsManager.create(t2);
          } }, t2.config.drag_timeline = { enabled: true };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.EventsManager = void 0;
        var i = function() {
          function t2(t3) {
            var e2 = this;
            this._mouseDown = false, this._calculateDirectionVector = function() {
              if (e2._trace.length >= 10) {
                for (var t4 = e2._trace.slice(e2._trace.length - 10), n2 = [], i2 = 1; i2 < t4.length; i2++) n2.push({ x: t4[i2].x - t4[i2 - 1].x, y: t4[i2].y - t4[i2 - 1].y });
                var r = { x: 0, y: 0 };
                return n2.forEach(function(t5) {
                  r.x += t5.x, r.y += t5.y;
                }), { magnitude: Math.sqrt(r.x * r.x + r.y * r.y), angleDegrees: 180 * Math.atan2(Math.abs(r.y), Math.abs(r.x)) / Math.PI };
              }
              return null;
            }, this._applyDndReadyStyles = function() {
              e2._timeline.$task.classList.add("gantt_timeline_move_available");
            }, this._clearDndReadyStyles = function() {
              e2._timeline.$task.classList.remove("gantt_timeline_move_available");
            }, this._getScrollPosition = function(t4) {
              var n2 = e2._gantt;
              return { x: n2.$ui.getView(t4.$config.scrollX).getScrollState().position, y: n2.$ui.getView(t4.$config.scrollY).getScrollState().position };
            }, this._countNewScrollPosition = function(t4) {
              var n2 = e2._calculateDirectionVector(), i2 = e2._startPoint.x - t4.x, r = e2._startPoint.y - t4.y;
              return n2 && (n2.angleDegrees < 15 ? r = 0 : n2.angleDegrees > 75 && (i2 = 0)), { x: e2._scrollState.x + i2, y: e2._scrollState.y + r };
            }, this._setScrollPosition = function(t4, n2) {
              var i2 = e2._gantt;
              requestAnimationFrame(function() {
                i2.$ui.getView(t4.$config.scrollX).scroll(n2.x), i2.$ui.getView(t4.$config.scrollY).scroll(n2.y);
              });
            }, this._stopDrag = function(t4) {
              var n2 = e2._gantt;
              if (e2._trace = [], n2.$root.classList.remove("gantt_noselect"), void 0 !== e2._originalReadonly && (n2.config.readonly = e2._originalReadonly), void 0 !== e2._originAutoscroll && (n2.config.autoscroll = e2._originAutoscroll), n2.config.drag_timeline) {
                var i2 = n2.config.drag_timeline.useKey;
                if (i2 && true !== t4[i2]) return;
              }
              e2._mouseDown = false;
            }, this._startDrag = function(t4) {
              var n2 = e2._gantt;
              e2._originAutoscroll = n2.config.autoscroll, n2.config.autoscroll = false, n2.$root.classList.add("gantt_noselect"), e2._originalReadonly = n2.config.readonly, n2.config.readonly = true, e2._trace = [], e2._mouseDown = true;
              var i2 = e2._getScrollPosition(e2._timeline), r = i2.x, a = i2.y;
              e2._scrollState = { x: r, y: a }, e2._startPoint = { x: t4.clientX, y: t4.clientY }, e2._trace.push(e2._startPoint);
            }, this._gantt = t3, this._domEvents = t3._createDomEventScope(), this._trace = [];
          }
          return t2.create = function(e2) {
            return new t2(e2);
          }, t2.prototype.destructor = function() {
            this._domEvents.detachAll();
          }, t2.prototype.attach = function(t3) {
            var e2 = this;
            this._timeline = t3;
            var n2 = this._gantt;
            this._domEvents.attach(t3.$task, "mousedown", function(t4) {
              if (n2.config.drag_timeline) {
                var i2 = n2.config.drag_timeline, r = i2.useKey, a = i2.ignore;
                if (false !== i2.enabled) {
                  var o = ".gantt_task_line, .gantt_task_link";
                  void 0 !== a && (o = a instanceof Array ? a.join(", ") : a), o && n2.utils.dom.closest(t4.target, o) || r && true !== t4[r] || e2._startDrag(t4);
                }
              }
            }), this._domEvents.attach(document, "keydown", function(t4) {
              if (n2.config.drag_timeline) {
                var i2 = n2.config.drag_timeline.useKey;
                i2 && true === t4[i2] && e2._applyDndReadyStyles();
              }
            }), this._domEvents.attach(document, "keyup", function(t4) {
              if (n2.config.drag_timeline) {
                var i2 = n2.config.drag_timeline.useKey;
                i2 && false === t4[i2] && (e2._clearDndReadyStyles(), e2._stopDrag(t4));
              }
            }), this._domEvents.attach(document, "mouseup", function(t4) {
              e2._stopDrag(t4);
            }), this._domEvents.attach(n2.$root, "mouseup", function(t4) {
              e2._stopDrag(t4);
            }), this._domEvents.attach(document, "mouseleave", function(t4) {
              e2._stopDrag(t4);
            }), this._domEvents.attach(n2.$root, "mouseleave", function(t4) {
              e2._stopDrag(t4);
            }), this._domEvents.attach(n2.$root, "mousemove", function(i2) {
              if (n2.config.drag_timeline) {
                var r = n2.config.drag_timeline.useKey;
                if (!r || true === i2[r]) {
                  var a = e2._gantt.ext.clickDrag, o = (e2._gantt.config.click_drag || {}).useKey;
                  if ((!a || !o || r || !i2[o]) && true === e2._mouseDown) {
                    e2._trace.push({ x: i2.clientX, y: i2.clientY });
                    var s = e2._countNewScrollPosition({ x: i2.clientX, y: i2.clientY });
                    e2._setScrollPosition(t3, s), e2._scrollState = s, e2._startPoint = { x: i2.clientX, y: i2.clientY };
                  }
                }
              }
            });
          }, t2;
        }();
        e.EventsManager = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.default = function(t2) {
          function e2() {
            var t3 = document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement;
            return !(!t3 || t3 !== document.body);
          }
          t2.$services.getService("state").registerProvider("fullscreen", function() {
            return { fullscreen: e2() };
          });
          var n2 = { overflow: null, padding: null, paddingTop: null, paddingRight: null, paddingBottom: null, paddingLeft: null }, i = { width: null, height: null, top: null, left: null, position: null, zIndex: null, modified: false }, r = null;
          function a(t3, e3) {
            e3.width = t3.width, e3.height = t3.height, e3.top = t3.top, e3.left = t3.left, e3.position = t3.position, e3.zIndex = t3.zIndex;
          }
          var o = false;
          function s() {
            var s2;
            t2.$container && (e2() ? o && (s2 = "onExpand", function() {
              var e3 = t2.ext.fullscreen.getFullscreenElement(), o2 = document.body;
              a(e3.style, i), n2 = { overflow: o2.style.overflow, padding: o2.style.padding ? o2.style.padding : null, paddingTop: o2.style.paddingTop ? o2.style.paddingTop : null, paddingRight: o2.style.paddingRight ? o2.style.paddingRight : null, paddingBottom: o2.style.paddingBottom ? o2.style.paddingBottom : null, paddingLeft: o2.style.paddingLeft ? o2.style.paddingLeft : null }, o2.style.padding && (o2.style.padding = "0"), o2.style.paddingTop && (o2.style.paddingTop = "0"), o2.style.paddingRight && (o2.style.paddingRight = "0"), o2.style.paddingBottom && (o2.style.paddingBottom = "0"), o2.style.paddingLeft && (o2.style.paddingLeft = "0"), o2.style.overflow = "hidden", e3.style.width = "100vw", e3.style.height = "100vh", e3.style.top = "0px", e3.style.left = "0px", e3.style.position = "absolute", e3.style.zIndex = 1, i.modified = true, r = function(t3) {
                for (var e4 = t3.parentNode, n3 = []; e4 && e4.style; ) n3.push({ element: e4, originalPositioning: e4.style.position }), e4.style.position = "static", e4 = e4.parentNode;
                return n3;
              }(e3);
            }()) : o && (o = false, s2 = "onCollapse", function() {
              var e3 = t2.ext.fullscreen.getFullscreenElement(), o2 = document.body;
              i.modified && (n2.padding && (o2.style.padding = n2.padding), n2.paddingTop && (o2.style.paddingTop = n2.paddingTop), n2.paddingRight && (o2.style.paddingRight = n2.paddingRight), n2.paddingBottom && (o2.style.paddingBottom = n2.paddingBottom), n2.paddingLeft && (o2.style.paddingLeft = n2.paddingLeft), o2.style.overflow = n2.overflow, n2 = { overflow: null, padding: null, paddingTop: null, paddingRight: null, paddingBottom: null, paddingLeft: null }, a(i, e3.style), i.modified = false), function(t3) {
                t3.forEach(function(t4) {
                  t4.element.style.position = t4.originalPositioning;
                });
              }(r), r = null;
            }()), setTimeout(function() {
              t2.render();
            }), setTimeout(function() {
              t2.callEvent(s2, [t2.ext.fullscreen.getFullscreenElement()]);
            }));
          }
          function l() {
            return !(t2.$container && t2.ext.fullscreen.getFullscreenElement() && (document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled || ((console.warning || console.log)("The `fullscreen` feature not being allowed, or full-screen mode not being supported"), 0)));
          }
          t2.ext.fullscreen = { expand: function() {
            if (!l() && !e2() && t2.callEvent("onBeforeExpand", [this.getFullscreenElement()])) {
              o = true;
              var n3 = document.body, i2 = n3.webkitRequestFullscreen ? [Element.ALLOW_KEYBOARD_INPUT] : [], r2 = n3.msRequestFullscreen || n3.mozRequestFullScreen || n3.webkitRequestFullscreen || n3.requestFullscreen;
              r2 && r2.apply(n3, i2);
            }
          }, collapse: function() {
            if (!l() && e2() && t2.callEvent("onBeforeCollapse", [this.getFullscreenElement()])) {
              var n3 = document.msExitFullscreen || document.mozCancelFullScreen || document.webkitExitFullscreen || document.exitFullscreen;
              n3 && n3.apply(document);
            }
          }, toggle: function() {
            l() || (e2() ? this.collapse() : this.expand());
          }, getFullscreenElement: function() {
            return t2.$root;
          } }, t2.expand = function() {
            t2.ext.fullscreen.expand();
          }, t2.collapse = function() {
            t2.ext.fullscreen.collapse();
          }, t2.attachEvent("onGanttReady", function() {
            t2.event(document, "webkitfullscreenchange", s), t2.event(document, "mozfullscreenchange", s), t2.event(document, "MSFullscreenChange", s), t2.event(document, "fullscreenChange", s), t2.event(document, "fullscreenchange", s);
          });
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(4);
          !function(t3) {
            t3.config.keyboard_navigation = true, t3.config.keyboard_navigation_cells = false, t3.$keyboardNavigation = {}, t3._compose = function() {
              for (var t4 = Array.prototype.slice.call(arguments, 0), e3 = {}, n2 = 0; n2 < t4.length; n2++) {
                var i2 = t4[n2];
                for (var r in "function" == typeof i2 && (i2 = new i2()), i2) e3[r] = i2[r];
              }
              return e3;
            }, n(72)(t3), n(73)(t3), n(74)(t3), n(75)(t3), n(76)(t3), n(77)(t3), n(78)(t3), n(79)(t3), n(80)(t3), n(81)(t3);
            var i = n(1);
            !function() {
              var n2 = t3.$keyboardNavigation.dispatcher;
              n2.isTaskFocused = function(e3) {
                var i2 = n2.activeNode;
                return (i2 instanceof t3.$keyboardNavigation.TaskRow || i2 instanceof t3.$keyboardNavigation.TaskCell) && i2.taskId == e3;
              };
              var r = function(e3) {
                if (t3.config.keyboard_navigation && (t3.config.keyboard_navigation_cells || !s(e3))) return n2.keyDownHandler(e3);
              }, a = function(e3) {
                if (n2.$preventDefault) return e3.preventDefault(), t3.$container.blur(), false;
                n2.awaitsFocus() || n2.focusGlobalNode();
              }, o = function() {
                if (n2.isEnabled()) {
                  var t4 = n2.getActiveNode();
                  if (t4) {
                    var e3, i2, r2 = t4.getNode();
                    r2 && r2.parentNode && (e3 = r2.parentNode.scrollTop, i2 = r2.parentNode.scrollLeft), t4.focus(true), r2 && r2.parentNode && (r2.parentNode.scrollTop = e3, r2.parentNode.scrollLeft = i2);
                  }
                }
              };
              function s(t4) {
                return !!i.closest(t4.target, ".gantt_grid_editor_placeholder");
              }
              function l(e3) {
                if (!t3.config.keyboard_navigation) return true;
                if (!t3.config.keyboard_navigation_cells && s(e3)) return true;
                var r2, a2 = n2.fromDomElement(e3);
                a2 && (n2.activeNode instanceof t3.$keyboardNavigation.TaskCell && i.isChildOf(e3.target, t3.$task) && (a2 = new t3.$keyboardNavigation.TaskCell(a2.taskId, n2.activeNode.columnIndex)), r2 = a2), r2 ? n2.isEnabled() ? n2.delay(function() {
                  n2.setActiveNode(r2);
                }) : n2.activeNode = r2 : (n2.$preventDefault = true, setTimeout(function() {
                  n2.$preventDefault = false;
                }, 300));
              }
              t3.attachEvent("onDataRender", function() {
                t3.config.keyboard_navigation && o();
              }), t3.attachEvent("onGanttRender", function() {
                t3.eventRemove(t3.$root, "keydown", r), t3.eventRemove(t3.$container, "focus", a), t3.eventRemove(t3.$container, "mousedown", l), t3.config.keyboard_navigation ? (t3.event(t3.$root, "keydown", r), t3.event(t3.$container, "focus", a), t3.event(t3.$container, "mousedown", l), t3.$container.setAttribute("tabindex", "0")) : t3.$container.removeAttribute("tabindex");
              });
              var c = t3.attachEvent("onGanttReady", function() {
                if (t3.detachEvent(c), t3.$data.tasksStore.attachEvent("onStoreUpdated", function(e4) {
                  if (t3.config.keyboard_navigation && n2.isEnabled()) {
                    var i2 = n2.getActiveNode();
                    i2 && i2.taskId == e4 && o();
                  }
                }), t3._smart_render) {
                  var e3 = t3._smart_render._redrawTasks;
                  t3._smart_render._redrawTasks = function(i2, r2) {
                    if (t3.config.keyboard_navigation && n2.isEnabled()) {
                      var a2 = n2.getActiveNode();
                      if (a2 && void 0 !== a2.taskId) {
                        for (var o2 = false, s2 = 0; s2 < r2.length; s2++) if (r2[s2].id == a2.taskId && r2[s2].start_date) {
                          o2 = true;
                          break;
                        }
                        o2 || r2.push(t3.getTask(a2.taskId));
                      }
                    }
                    return e3.apply(this, arguments);
                  };
                }
              });
              t3.attachEvent("onAfterTaskAdd", function(e3, i2) {
                if (!t3.config.keyboard_navigation) return true;
                if (n2.isEnabled()) {
                  var r2 = 0, a2 = n2.activeNode;
                  a2 instanceof t3.$keyboardNavigation.TaskCell && (r2 = a2.columnIndex);
                  var o2 = t3.config.keyboard_navigation_cells ? t3.$keyboardNavigation.TaskCell : t3.$keyboardNavigation.TaskRow;
                  n2.setActiveNode(new o2(e3, r2));
                }
              }), t3.attachEvent("onTaskIdChange", function(e3, i2) {
                if (!t3.config.keyboard_navigation) return true;
                var r2 = n2.activeNode;
                return n2.isTaskFocused(e3) && (r2.taskId = i2), true;
              });
              var u = setInterval(function() {
                t3.config.keyboard_navigation && (n2.isEnabled() || n2.enable());
              }, 500);
              function d(e3) {
                var n3 = { gantt: t3.$keyboardNavigation.GanttNode, headerCell: t3.$keyboardNavigation.HeaderCell, taskRow: t3.$keyboardNavigation.TaskRow, taskCell: t3.$keyboardNavigation.TaskCell };
                return n3[e3] || n3.gantt;
              }
              function h(e3) {
                for (var n3 = t3.getGridColumns(), i2 = 0; i2 < n3.length; i2++) if (n3[i2].name == e3) return i2;
                return 0;
              }
              t3.attachEvent("onDestroy", function() {
                clearInterval(u);
              });
              var f = {};
              e2(f), t3.mixin(f, { addShortcut: function(t4, e3, n3) {
                var i2 = d(n3);
                i2 && i2.prototype.bind(t4, e3);
              }, getShortcutHandler: function(e3, n3) {
                var i2 = t3.$keyboardNavigation.shortcuts.parse(e3);
                if (i2.length) return f.getCommandHandler(i2[0], n3);
              }, getCommandHandler: function(t4, e3) {
                var n3 = d(e3);
                if (n3 && t4) return n3.prototype.findHandler(t4);
              }, removeShortcut: function(t4, e3) {
                var n3 = d(e3);
                n3 && n3.prototype.unbind(t4);
              }, focus: function(t4) {
                var e3, i2 = t4 ? t4.type : null, r2 = d(i2);
                switch (i2) {
                  case "taskCell":
                    e3 = new r2(t4.id, h(t4.column));
                    break;
                  case "taskRow":
                    e3 = new r2(t4.id);
                    break;
                  case "headerCell":
                    e3 = new r2(h(t4.column));
                }
                n2.delay(function() {
                  e3 ? n2.setActiveNode(e3) : (n2.enable(), n2.getActiveNode() ? n2.awaitsFocus() || n2.enable() : n2.setDefaultNode());
                });
              }, getActiveNode: function() {
                if (n2.isEnabled()) {
                  var e3 = n2.getActiveNode(), i2 = function(e4) {
                    return e4 instanceof t3.$keyboardNavigation.GanttNode ? "gantt" : e4 instanceof t3.$keyboardNavigation.HeaderCell ? "headerCell" : e4 instanceof t3.$keyboardNavigation.TaskRow ? "taskRow" : e4 instanceof t3.$keyboardNavigation.TaskCell ? "taskCell" : null;
                  }(e3), r2 = t3.getGridColumns();
                  switch (i2) {
                    case "taskCell":
                      return { type: "taskCell", id: e3.taskId, column: r2[e3.columnIndex].name };
                    case "taskRow":
                      return { type: "taskRow", id: e3.taskId };
                    case "headerCell":
                      return { type: "headerCell", column: r2[e3.index].name };
                  }
                }
                return null;
              } }), t3.$keyboardNavigation.facade = f, t3.ext.keyboardNavigation = f, t3.focus = function() {
                f.focus();
              }, t3.addShortcut = f.addShortcut, t3.getShortcutHandler = f.getShortcutHandler, t3.removeShortcut = f.removeShortcut;
            }();
          }(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.shortcuts = { createCommand: function() {
            return { modifiers: { shift: false, alt: false, ctrl: false, meta: false }, keyCode: null };
          }, parse: function(t3) {
            for (var e2 = [], n = this.getExpressions(this.trim(t3)), i = 0; i < n.length; i++) {
              for (var r = this.getWords(n[i]), a = this.createCommand(), o = 0; o < r.length; o++) this.commandKeys[r[o]] ? a.modifiers[r[o]] = true : this.specialKeys[r[o]] ? a.keyCode = this.specialKeys[r[o]] : a.keyCode = r[o].charCodeAt(0);
              e2.push(a);
            }
            return e2;
          }, getCommandFromEvent: function(t3) {
            var e2 = this.createCommand();
            e2.modifiers.shift = !!t3.shiftKey, e2.modifiers.alt = !!t3.altKey, e2.modifiers.ctrl = !!t3.ctrlKey, e2.modifiers.meta = !!t3.metaKey, e2.keyCode = t3.which || t3.keyCode, e2.keyCode >= 96 && e2.keyCode <= 105 && (e2.keyCode -= 48);
            var n = String.fromCharCode(e2.keyCode);
            return n && (e2.keyCode = n.toLowerCase().charCodeAt(0)), e2;
          }, getHashFromEvent: function(t3) {
            return this.getHash(this.getCommandFromEvent(t3));
          }, getHash: function(t3) {
            var e2 = [];
            for (var n in t3.modifiers) t3.modifiers[n] && e2.push(n);
            return e2.push(t3.keyCode), e2.join(this.junctionChar);
          }, getExpressions: function(t3) {
            return t3.split(this.junctionChar);
          }, getWords: function(t3) {
            return t3.split(this.combinationChar);
          }, trim: function(t3) {
            return t3.replace(/\s/g, "");
          }, junctionChar: ",", combinationChar: "+", commandKeys: { shift: 16, alt: 18, ctrl: 17, meta: true }, specialKeys: { backspace: 8, tab: 9, enter: 13, esc: 27, space: 32, up: 38, down: 40, left: 37, right: 39, home: 36, end: 35, pageup: 33, pagedown: 34, delete: 46, insert: 45, plus: 107, f1: 112, f2: 113, f3: 114, f4: 115, f5: 116, f6: 117, f7: 118, f8: 119, f9: 120, f10: 121, f11: 122, f12: 123 } };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.EventHandler = { _handlers: null, findHandler: function(e2) {
            this._handlers || (this._handlers = {});
            var n = t2.$keyboardNavigation.shortcuts.getHash(e2);
            return this._handlers[n];
          }, doAction: function(e2, n) {
            var i = this.findHandler(e2);
            if (i) {
              if (false === t2.$keyboardNavigation.facade.callEvent("onBeforeAction", [e2, n])) return;
              i.call(this, n), n.preventDefault ? n.preventDefault() : n.returnValue = false;
            }
          }, bind: function(e2, n) {
            this._handlers || (this._handlers = {});
            for (var i = t2.$keyboardNavigation.shortcuts, r = i.parse(e2), a = 0; a < r.length; a++) this._handlers[i.getHash(r[a])] = n;
          }, unbind: function(e2) {
            for (var n = t2.$keyboardNavigation.shortcuts, i = n.parse(e2), r = 0; r < i.length; r++) this._handlers[n.getHash(i[r])] && delete this._handlers[n.getHash(i[r])];
          }, bindAll: function(t3) {
            for (var e2 in t3) this.bind(e2, t3[e2]);
          }, initKeys: function() {
            this._handlers || (this._handlers = {}), this.keys && this.bindAll(this.keys);
          } };
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          !function() {
            var e2 = n(1);
            t2.$keyboardNavigation.getFocusableNodes = e2.getFocusableNodes, t2.$keyboardNavigation.trapFocus = function(n2, i) {
              if (9 != i.keyCode) return false;
              for (var r = t2.$keyboardNavigation.getFocusableNodes(n2), a = e2.getActiveElement(), o = -1, s = 0; s < r.length; s++) if (r[s] == a) {
                o = s;
                break;
              }
              if (i.shiftKey) {
                if (o <= 0) {
                  var l = r[r.length - 1];
                  if (l) return l.focus(), i.preventDefault(), true;
                }
              } else if (o >= r.length - 1) {
                var c = r[0];
                if (c) return c.focus(), i.preventDefault(), true;
              }
              return false;
            };
          }();
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.GanttNode = function() {
          }, t2.$keyboardNavigation.GanttNode.prototype = t2._compose(t2.$keyboardNavigation.EventHandler, { focus: function() {
            t2.focus();
          }, blur: function() {
          }, isEnabled: function() {
            return t2.$container.hasAttribute("tabindex");
          }, scrollHorizontal: function(e2) {
            var n = t2.dateFromPos(t2.getScrollState().x), i = t2.getScale(), r = e2 < 0 ? -i.step : i.step;
            n = t2.date.add(n, r, i.unit), t2.scrollTo(t2.posFromDate(n));
          }, scrollVertical: function(e2) {
            var n = t2.getScrollState().y, i = t2.config.row_height;
            t2.scrollTo(null, n + (e2 < 0 ? -1 : 1) * i);
          }, keys: { "alt+left": function(t3) {
            this.scrollHorizontal(-1);
          }, "alt+right": function(t3) {
            this.scrollHorizontal(1);
          }, "alt+up": function(t3) {
            this.scrollVertical(-1);
          }, "alt+down": function(t3) {
            this.scrollVertical(1);
          }, "ctrl+z": function() {
            t2.undo && t2.undo();
          }, "ctrl+r": function() {
            t2.redo && t2.redo();
          } } }), t2.$keyboardNavigation.GanttNode.prototype.bindAll(t2.$keyboardNavigation.GanttNode.prototype.keys);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.KeyNavNode = function() {
          }, t2.$keyboardNavigation.KeyNavNode.prototype = t2._compose(t2.$keyboardNavigation.EventHandler, { isValid: function() {
            return true;
          }, fallback: function() {
            return null;
          }, moveTo: function(e2) {
            t2.$keyboardNavigation.dispatcher.setActiveNode(e2);
          }, compareTo: function(t3) {
            if (!t3) return false;
            for (var e2 in this) {
              if (!!this[e2] != !!t3[e2]) return false;
              var n = !(!this[e2] || !this[e2].toString), i = !(!t3[e2] || !t3[e2].toString);
              if (i != n) return false;
              if (i && n) {
                if (t3[e2].toString() != this[e2].toString()) return false;
              } else if (t3[e2] != this[e2]) return false;
            }
            return true;
          }, getNode: function() {
          }, focus: function() {
            var e2 = this.getNode();
            if (e2) {
              var n = t2.$keyboardNavigation.facade;
              false !== n.callEvent("onBeforeFocus", [e2]) && e2 && (e2.setAttribute("tabindex", "-1"), e2.$eventAttached || (e2.$eventAttached = true, t2.event(e2, "focus", function(t3) {
                return t3.preventDefault(), false;
              }, false)), e2.focus && e2.focus(), n.callEvent("onFocus", [this.getNode()]));
            }
          }, blur: function() {
            var e2 = this.getNode();
            e2 && (t2.$keyboardNavigation.facade.callEvent("onBlur", [e2]), e2.setAttribute("tabindex", "-1"));
          } });
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(1);
          t2.$keyboardNavigation.HeaderCell = function(t3) {
            this.index = t3 || 0;
          }, t2.$keyboardNavigation.HeaderCell.prototype = t2._compose(t2.$keyboardNavigation.KeyNavNode, { _handlers: null, isValid: function() {
            return !(!t2.config.show_grid && t2.getVisibleTaskCount()) && (!!t2.getGridColumns()[this.index] || !t2.getVisibleTaskCount());
          }, fallback: function() {
            if (!t2.config.show_grid) return t2.getVisibleTaskCount() ? new t2.$keyboardNavigation.TaskRow() : null;
            for (var e3 = t2.getGridColumns(), n2 = this.index; n2 >= 0 && !e3[n2]; ) n2--;
            return e3[n2] ? new t2.$keyboardNavigation.HeaderCell(n2) : null;
          }, fromDomElement: function(n2) {
            var i = e2.locateClassName(n2, "gantt_grid_head_cell");
            if (i) {
              for (var r = 0; i && i.previousSibling; ) i = i.previousSibling, r += 1;
              return new t2.$keyboardNavigation.HeaderCell(r);
            }
            return null;
          }, getNode: function() {
            return t2.$grid_scale.childNodes[this.index];
          }, keys: { left: function() {
            this.index > 0 && this.moveTo(new t2.$keyboardNavigation.HeaderCell(this.index - 1));
          }, right: function() {
            var e3 = t2.getGridColumns();
            this.index < e3.length - 1 && this.moveTo(new t2.$keyboardNavigation.HeaderCell(this.index + 1));
          }, down: function() {
            var e3, n2 = t2.getChildren(t2.config.root_id);
            t2.isTaskExists(n2[0]) && (e3 = n2[0]), e3 && (t2.config.keyboard_navigation_cells ? this.moveTo(new t2.$keyboardNavigation.TaskCell(e3, this.index)) : this.moveTo(new t2.$keyboardNavigation.TaskRow(e3)));
          }, end: function() {
            var e3 = t2.getGridColumns();
            this.moveTo(new t2.$keyboardNavigation.HeaderCell(e3.length - 1));
          }, home: function() {
            this.moveTo(new t2.$keyboardNavigation.HeaderCell(0));
          }, "enter, space": function() {
            e2.getActiveElement().click();
          }, "ctrl+enter": function() {
            t2.isReadonly(this) || t2.createTask({}, this.taskId);
          } } }), t2.$keyboardNavigation.HeaderCell.prototype.bindAll(t2.$keyboardNavigation.HeaderCell.prototype.keys);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.TaskRow = function(e2) {
            if (!e2) {
              var n = t2.getChildren(t2.config.root_id);
              n[0] && (e2 = n[0]);
            }
            this.taskId = e2, t2.isTaskExists(this.taskId) && (this.index = t2.getTaskIndex(this.taskId));
          }, t2.$keyboardNavigation.TaskRow.prototype = t2._compose(t2.$keyboardNavigation.KeyNavNode, { _handlers: null, isValid: function() {
            return t2.isTaskExists(this.taskId) && t2.getTaskIndex(this.taskId) > -1;
          }, fallback: function() {
            if (!t2.getVisibleTaskCount()) {
              var e2 = new t2.$keyboardNavigation.HeaderCell();
              return e2.isValid() ? e2 : null;
            }
            var n = -1;
            if (t2.getTaskByIndex(this.index - 1)) n = this.index - 1;
            else if (t2.getTaskByIndex(this.index + 1)) n = this.index + 1;
            else for (var i = this.index; i >= 0; ) {
              if (t2.getTaskByIndex(i)) {
                n = i;
                break;
              }
              i--;
            }
            if (n > -1) return new t2.$keyboardNavigation.TaskRow(t2.getTaskByIndex(n).id);
          }, fromDomElement: function(e2) {
            if (t2.config.keyboard_navigation_cells) return null;
            var n = t2.locate(e2);
            return t2.isTaskExists(n) ? new t2.$keyboardNavigation.TaskRow(n) : null;
          }, getNode: function() {
            if (t2.isTaskExists(this.taskId) && t2.isTaskVisible(this.taskId)) return t2.config.show_grid ? t2.$grid.querySelector(".gantt_row[" + t2.config.task_attribute + "='" + this.taskId + "']") : t2.getTaskNode(this.taskId);
          }, focus: function(e2) {
            if (!e2) {
              var n, i, r = t2.getTaskPosition(t2.getTask(this.taskId)), a = t2.getTaskHeight(this.taskId), o = t2.getScrollState();
              n = t2.$task ? t2.$task.offsetWidth : o.inner_width, i = t2.$grid_data || t2.$task_data ? (t2.$grid_data || t2.$task_data).offsetHeight : o.inner_height, r.top < o.y || r.top + a > o.y + i ? t2.scrollTo(null, r.top - 5 * a) : t2.config.scroll_on_click && t2.config.show_chart && (r.left > o.x + n ? t2.scrollTo(r.left - t2.config.task_scroll_offset) : r.left + r.width < o.x && t2.scrollTo(r.left + r.width - t2.config.task_scroll_offset));
            }
            t2.$keyboardNavigation.KeyNavNode.prototype.focus.apply(this, [e2]), function() {
              var e3 = t2.$ui.getView("grid"), n2 = parseInt(e3.$grid.scrollLeft), i2 = parseInt(e3.$grid_data.scrollTop), r2 = e3.$config.scrollX;
              if (r2 && e3.$config.scrollable) {
                var a2 = t2.$ui.getView(r2);
                a2 && a2.scrollTo(n2, i2);
              }
              var o2 = e3.$config.scrollY;
              if (o2) {
                var s = t2.$ui.getView(o2);
                s && s.scrollTo(n2, i2);
              }
            }();
          }, keys: { pagedown: function() {
            t2.getVisibleTaskCount() && this.moveTo(new t2.$keyboardNavigation.TaskRow(t2.getTaskByIndex(t2.getVisibleTaskCount() - 1).id));
          }, pageup: function() {
            t2.getVisibleTaskCount() && this.moveTo(new t2.$keyboardNavigation.TaskRow(t2.getTaskByIndex(0).id));
          }, up: function() {
            var e2 = null, n = t2.getPrev(this.taskId);
            e2 = t2.isTaskExists(n) ? new t2.$keyboardNavigation.TaskRow(n) : new t2.$keyboardNavigation.HeaderCell(), this.moveTo(e2);
          }, down: function() {
            var e2 = t2.getNext(this.taskId);
            t2.isTaskExists(e2) && this.moveTo(new t2.$keyboardNavigation.TaskRow(e2));
          }, "shift+down": function() {
            t2.hasChild(this.taskId) && !t2.getTask(this.taskId).$open && t2.open(this.taskId);
          }, "shift+up": function() {
            t2.hasChild(this.taskId) && t2.getTask(this.taskId).$open && t2.close(this.taskId);
          }, "shift+right": function() {
            if (!t2.isReadonly(this)) {
              var e2 = t2.getPrevSibling(this.taskId);
              if (t2.isTaskExists(e2) && !t2.isChildOf(this.taskId, e2)) t2.getTask(e2).$open = true, false !== t2.moveTask(this.taskId, -1, e2) && t2.updateTask(this.taskId);
            }
          }, "shift+left": function() {
            if (!t2.isReadonly(this)) {
              var e2 = t2.getParent(this.taskId);
              if (t2.isTaskExists(e2)) false !== t2.moveTask(this.taskId, t2.getTaskIndex(e2) + 1, t2.getParent(e2)) && t2.updateTask(this.taskId);
            }
          }, space: function(e2) {
            t2.isSelectedTask(this.taskId) ? t2.unselectTask(this.taskId) : t2.selectTask(this.taskId);
          }, "ctrl+left": function(e2) {
            t2.close(this.taskId);
          }, "ctrl+right": function(e2) {
            t2.open(this.taskId);
          }, delete: function(e2) {
            t2.isReadonly(this) || t2.$click.buttons.delete(this.taskId);
          }, enter: function() {
            t2.isReadonly(this) || t2.showLightbox(this.taskId);
          }, "ctrl+enter": function() {
            t2.isReadonly(this) || t2.createTask({}, this.taskId);
          } } }), t2.$keyboardNavigation.TaskRow.prototype.bindAll(t2.$keyboardNavigation.TaskRow.prototype.keys);
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(1), i = n(2).replaceValidZeroId;
          t2.$keyboardNavigation.TaskCell = function(e3, n2) {
            if (!(e3 = i(e3, t2.config.root_id))) {
              var r = t2.getChildren(t2.config.root_id);
              r[0] && (e3 = r[0]);
            }
            this.taskId = e3, this.columnIndex = n2 || 0, t2.isTaskExists(this.taskId) && (this.index = t2.getTaskIndex(this.taskId));
          }, t2.$keyboardNavigation.TaskCell.prototype = t2._compose(t2.$keyboardNavigation.TaskRow, { _handlers: null, isValid: function() {
            return t2.$keyboardNavigation.TaskRow.prototype.isValid.call(this) && !!t2.getGridColumns()[this.columnIndex];
          }, fallback: function() {
            var e3 = t2.$keyboardNavigation.TaskRow.prototype.fallback.call(this), n2 = e3;
            if (e3 instanceof t2.$keyboardNavigation.TaskRow) {
              for (var i2 = t2.getGridColumns(), r = this.columnIndex; r >= 0 && !i2[r]; ) r--;
              i2[r] && (n2 = new t2.$keyboardNavigation.TaskCell(e3.taskId, r));
            }
            return n2;
          }, fromDomElement: function(n2) {
            if (!t2.config.keyboard_navigation_cells) return null;
            var i2 = t2.locate(n2);
            if (t2.isTaskExists(i2)) {
              var r = 0, a = e2.locateAttribute(n2, "data-column-index");
              return a && (r = 1 * a.getAttribute("data-column-index")), new t2.$keyboardNavigation.TaskCell(i2, r);
            }
            return null;
          }, getNode: function() {
            if (t2.isTaskExists(this.taskId) && t2.isTaskVisible(this.taskId)) {
              if (t2.config.show_grid) {
                var e3 = t2.$grid.querySelector(".gantt_row[" + t2.config.task_attribute + "='" + this.taskId + "']");
                return e3 ? e3.querySelector("[data-column-index='" + this.columnIndex + "']") : null;
              }
              return t2.getTaskNode(this.taskId);
            }
          }, keys: { up: function() {
            var e3 = null, n2 = t2.getPrev(this.taskId);
            e3 = t2.isTaskExists(n2) ? new t2.$keyboardNavigation.TaskCell(n2, this.columnIndex) : new t2.$keyboardNavigation.HeaderCell(this.columnIndex), this.moveTo(e3);
          }, down: function() {
            var e3 = t2.getNext(this.taskId);
            t2.isTaskExists(e3) && this.moveTo(new t2.$keyboardNavigation.TaskCell(e3, this.columnIndex));
          }, left: function() {
            this.columnIndex > 0 && this.moveTo(new t2.$keyboardNavigation.TaskCell(this.taskId, this.columnIndex - 1));
          }, right: function() {
            var e3 = t2.getGridColumns();
            this.columnIndex < e3.length - 1 && this.moveTo(new t2.$keyboardNavigation.TaskCell(this.taskId, this.columnIndex + 1));
          }, end: function() {
            var e3 = t2.getGridColumns();
            this.moveTo(new t2.$keyboardNavigation.TaskCell(this.taskId, e3.length - 1));
          }, home: function() {
            this.moveTo(new t2.$keyboardNavigation.TaskCell(this.taskId, 0));
          }, pagedown: function() {
            t2.getVisibleTaskCount() && this.moveTo(new t2.$keyboardNavigation.TaskCell(t2.getTaskByIndex(t2.getVisibleTaskCount() - 1).id, this.columnIndex));
          }, pageup: function() {
            t2.getVisibleTaskCount() && this.moveTo(new t2.$keyboardNavigation.TaskCell(t2.getTaskByIndex(0).id, this.columnIndex));
          } } }), t2.$keyboardNavigation.TaskCell.prototype.bindAll(t2.$keyboardNavigation.TaskRow.prototype.keys), t2.$keyboardNavigation.TaskCell.prototype.bindAll(t2.$keyboardNavigation.TaskCell.prototype.keys);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          !function() {
            var e2 = [];
            function n() {
              return !!e2.length;
            }
            function i(e3) {
              setTimeout(function() {
                n() || t2.$destroyed || t2.focus();
              }, 1);
            }
            function r(n2) {
              t2.eventRemove(n2, "keydown", o), t2.event(n2, "keydown", o), e2.push(n2);
            }
            function a() {
              var n2 = e2.pop();
              n2 && t2.eventRemove(n2, "keydown", o), i();
            }
            function o(n2) {
              var i2 = n2.currentTarget;
              (function(t3) {
                return t3 == e2[e2.length - 1];
              })(i2) && t2.$keyboardNavigation.trapFocus(i2, n2);
            }
            function s() {
              r(t2.getLightbox());
            }
            t2.attachEvent("onLightbox", s), t2.attachEvent("onAfterLightbox", a), t2.attachEvent("onLightboxChange", function() {
              a(), s();
            }), t2.attachEvent("onAfterQuickInfo", function() {
              i();
            }), t2.attachEvent("onMessagePopup", function(e3) {
              l = t2.utils.dom.getActiveElement(), r(e3);
            }), t2.attachEvent("onAfterMessagePopup", function() {
              a(), setTimeout(function() {
                l && (l.focus(), l = null);
              }, 1);
            });
            var l = null;
            t2.$keyboardNavigation.isModal = n;
          }();
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.$keyboardNavigation.dispatcher = { isActive: false, activeNode: null, globalNode: new t2.$keyboardNavigation.GanttNode(), enable: function() {
            this.isActive = true, this.setActiveNode(this.getActiveNode());
          }, disable: function() {
            this.isActive = false;
          }, isEnabled: function() {
            return !!this.isActive;
          }, getDefaultNode: function() {
            var e2;
            return (e2 = t2.config.keyboard_navigation_cells ? new t2.$keyboardNavigation.TaskCell() : new t2.$keyboardNavigation.TaskRow()).isValid() || (e2 = e2.fallback()), e2;
          }, setDefaultNode: function() {
            this.setActiveNode(this.getDefaultNode());
          }, getActiveNode: function() {
            var t3 = this.activeNode;
            return t3 && !t3.isValid() && (t3 = t3.fallback()), t3;
          }, fromDomElement: function(e2) {
            for (var n = [t2.$keyboardNavigation.TaskRow, t2.$keyboardNavigation.TaskCell, t2.$keyboardNavigation.HeaderCell], i = 0; i < n.length; i++) if (n[i].prototype.fromDomElement) {
              var r = n[i].prototype.fromDomElement(e2);
              if (r) return r;
            }
            return null;
          }, focusGlobalNode: function() {
            this.blurNode(this.globalNode), this.focusNode(this.globalNode);
          }, setActiveNode: function(t3) {
            var e2 = true;
            this.activeNode && this.activeNode.compareTo(t3) && (e2 = false), this.isEnabled() && (e2 && this.blurNode(this.activeNode), this.activeNode = t3, this.focusNode(this.activeNode, !e2));
          }, focusNode: function(t3, e2) {
            t3 && t3.focus && t3.focus(e2);
          }, blurNode: function(t3) {
            t3 && t3.blur && t3.blur();
          }, keyDownHandler: function(e2) {
            if (!t2.$keyboardNavigation.isModal() && this.isEnabled() && !e2.defaultPrevented) {
              var n = this.globalNode, i = t2.$keyboardNavigation.shortcuts.getCommandFromEvent(e2), r = this.getActiveNode();
              false !== t2.$keyboardNavigation.facade.callEvent("onKeyDown", [i, e2]) && (r ? r.findHandler(i) ? r.doAction(i, e2) : n.findHandler(i) && n.doAction(i, e2) : this.setDefaultNode());
            }
          }, _timeout: null, awaitsFocus: function() {
            return null !== this._timeout;
          }, delay: function(e2, n) {
            clearTimeout(this._timeout), this._timeout = setTimeout(t2.bind(function() {
              this._timeout = null, e2();
            }, this), n || 1);
          }, clearDelay: function() {
            clearTimeout(this._timeout);
          } };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          function e2(e3) {
            if (!t2.config.show_markers) return false;
            if (!e3.start_date) return false;
            var n2 = t2.getState();
            if (!(+e3.start_date > +n2.max_date || (!e3.end_date || +e3.end_date < +n2.min_date) && +e3.start_date < +n2.min_date)) {
              var i = document.createElement("div");
              i.setAttribute("data-marker-id", e3.id);
              var r = "gantt_marker";
              t2.templates.marker_class && (r += " " + t2.templates.marker_class(e3)), e3.css && (r += " " + e3.css), e3.title && (i.title = e3.title), i.className = r;
              var a = t2.posFromDate(e3.start_date);
              if (i.style.left = a + "px", i.style.height = Math.max(t2.getRowTop(t2.getVisibleTaskCount()), 0) + "px", e3.end_date) {
                var o = t2.posFromDate(e3.end_date);
                i.style.width = Math.max(o - a, 0) + "px";
              }
              return e3.text && (i.innerHTML = "<div class='gantt_marker_content' >" + e3.text + "</div>"), i;
            }
          }
          function n() {
            if (t2.$task_data) {
              var e3 = document.createElement("div");
              e3.className = "gantt_marker_area", t2.$task_data.appendChild(e3), t2.$marker_area = e3;
            }
          }
          t2._markers || (t2._markers = t2.createDatastore({ name: "marker", initItem: function(e3) {
            return e3.id = e3.id || t2.uid(), e3;
          } })), t2.config.show_markers = true, t2.attachEvent("onBeforeGanttRender", function() {
            t2.$marker_area || n();
          }), t2.attachEvent("onDataRender", function() {
            t2.$marker_area || (n(), t2.renderMarkers());
          }), t2.attachEvent("onGanttLayoutReady", function() {
            t2.attachEvent("onBeforeGanttRender", function() {
              n(), t2.$services.getService("layers").createDataRender({ name: "marker", defaultContainer: function() {
                return t2.$marker_area;
              } }).addLayer(e2);
            }, { once: true });
          }), t2.getMarker = function(t3) {
            return this._markers ? this._markers.getItem(t3) : null;
          }, t2.addMarker = function(t3) {
            return this._markers.addItem(t3);
          }, t2.deleteMarker = function(t3) {
            return !!this._markers.exists(t3) && (this._markers.removeItem(t3), true);
          }, t2.updateMarker = function(t3) {
            this._markers.refresh(t3);
          }, t2._getMarkers = function() {
            return this._markers.getItems();
          }, t2.renderMarkers = function() {
            this._markers.refresh();
          };
        };
      }, function(t, e, n) {
        var i = n(2).replaceValidZeroId;
        t.exports = function(t2) {
          t2.config.multiselect = true, t2.config.multiselect_one_level = false, t2._multiselect = { _selected: {}, _one_level: false, _active: true, _first_selected_when_shift: null, getDefaultSelected: function() {
            var t3 = this.getSelected();
            return t3.length ? t3[t3.length - 1] : null;
          }, setFirstSelected: function(t3) {
            this._first_selected_when_shift = t3;
          }, getFirstSelected: function() {
            return this._first_selected_when_shift;
          }, isActive: function() {
            return this.updateState(), this._active;
          }, updateState: function() {
            this._one_level = t2.config.multiselect_one_level;
            var e2 = this._active;
            this._active = t2.config.select_task, this._active != e2 && this.reset();
          }, reset: function() {
            this._selected = {};
          }, setLastSelected: function(e2) {
            t2.$data.tasksStore.silent(function() {
              var n2 = t2.$data.tasksStore;
              e2 ? n2.select(e2 + "") : n2.unselect(null);
            });
          }, getLastSelected: function() {
            var e2 = t2.$data.tasksStore.getSelectedId();
            return e2 && t2.isTaskExists(e2) ? e2 : null;
          }, select: function(e2, n2) {
            return !!(e2 && t2.callEvent("onBeforeTaskMultiSelect", [e2, true, n2]) && t2.callEvent("onBeforeTaskSelected", [e2])) && (this._selected[e2] = true, this.setLastSelected(e2), this.afterSelect(e2), t2.callEvent("onTaskMultiSelect", [e2, true, n2]), t2.callEvent("onTaskSelected", [e2]), true);
          }, toggle: function(t3, e2) {
            this._selected[t3] ? this.unselect(t3, e2) : this.select(t3, e2);
          }, unselect: function(e2, n2) {
            e2 && t2.callEvent("onBeforeTaskMultiSelect", [e2, false, n2]) && (this._selected[e2] = false, this.getLastSelected() == e2 && this.setLastSelected(this.getDefaultSelected()), this.afterSelect(e2), t2.callEvent("onTaskMultiSelect", [e2, false, n2]), t2.callEvent("onTaskUnselected", [e2]));
          }, isSelected: function(e2) {
            return !(!t2.isTaskExists(e2) || !this._selected[e2]);
          }, getSelected: function() {
            var e2 = [];
            for (var n2 in this._selected) this._selected[n2] && t2.isTaskExists(n2) ? e2.push(n2) : this._selected[n2] = false;
            return e2.sort(function(e3, n3) {
              return t2.getGlobalTaskIndex(e3) > t2.getGlobalTaskIndex(n3) ? 1 : -1;
            }), e2;
          }, forSelected: function(t3) {
            for (var e2 = this.getSelected(), n2 = 0; n2 < e2.length; n2++) t3(e2[n2]);
          }, isSameLevel: function(e2) {
            if (!this._one_level) return true;
            var n2 = this.getLastSelected();
            return !n2 || (!t2.isTaskExists(n2) || !t2.isTaskExists(e2) || !(t2.calculateTaskLevel(t2.getTask(n2)) != t2.calculateTaskLevel(t2.getTask(e2))));
          }, afterSelect: function(e2) {
            t2.isTaskExists(e2) && t2._quickRefresh(function() {
              t2.refreshTask(e2);
            });
          }, doSelection: function(e2) {
            if (!this.isActive()) return false;
            if (t2._is_icon_open_click(e2)) return false;
            var n2 = t2.locate(e2);
            if (!n2) return false;
            if (!t2.callEvent("onBeforeMultiSelect", [e2])) return false;
            var i2 = this.getSelected(), r = this.getFirstSelected(), a = false, o = this.getLastSelected(), s = t2.config.multiselect, l = (function() {
              var r2 = t2.ext.inlineEditors, a2 = r2.getState(), o2 = r2.locateCell(e2.target);
              t2.config.inline_editors_multiselect_open && o2 && r2.getEditorConfig(o2.columnName) && (r2.isVisible() && a2.id == o2.id && a2.columnName == o2.columnName || r2.startEdit(o2.id, o2.columnName)), this.setFirstSelected(n2), this.isSelected(n2) || this.select(n2, e2), i2 = this.getSelected();
              for (var s2 = 0; s2 < i2.length; s2++) i2[s2] !== n2 && this.unselect(i2[s2], e2);
            }).bind(this), c = (function() {
              if (o) {
                if (n2) {
                  for (var i3 = t2.getGlobalTaskIndex(this.getFirstSelected()), s2 = t2.getGlobalTaskIndex(n2), l2 = t2.getGlobalTaskIndex(o), c2 = o; t2.getGlobalTaskIndex(c2) !== i3; ) this.unselect(c2, e2), c2 = i3 > l2 ? t2.getNext(c2) : t2.getPrev(c2);
                  for (c2 = n2; t2.getGlobalTaskIndex(c2) !== i3; ) this.select(c2, e2) && !a && (a = true, r = c2), c2 = i3 > s2 ? t2.getNext(c2) : t2.getPrev(c2);
                }
              } else o = n2;
            }).bind(this);
            return s && (e2.ctrlKey || e2.metaKey) ? (this.isSelected(n2) || this.setFirstSelected(n2), n2 && this.toggle(n2, e2)) : s && e2.shiftKey ? (t2.isTaskExists(this.getFirstSelected()) && null !== this.getFirstSelected() || this.setFirstSelected(n2), i2.length ? c() : l()) : l(), this.isSelected(n2) ? this.setLastSelected(n2) : r ? n2 == o && this.setLastSelected(e2.shiftKey ? r : this.getDefaultSelected()) : this.setLastSelected(null), this.getSelected().length || this.setLastSelected(null), this.getLastSelected() && this.isSelected(this.getFirstSelected()) || this.setFirstSelected(this.getLastSelected()), true;
          } }, function() {
            var e2 = t2.selectTask;
            t2.selectTask = function(n3) {
              if (!(n3 = i(n3, this.config.root_id))) return false;
              var r = t2._multiselect, a = n3;
              return r.isActive() ? (r.select(n3, null) && r.setLastSelected(n3), r.setFirstSelected(r.getLastSelected())) : a = e2.call(this, n3), a;
            };
            var n2 = t2.unselectTask;
            t2.unselectTask = function(e3) {
              var i2 = t2._multiselect, r = i2.isActive();
              (e3 = e3 || i2.getLastSelected()) && r && (i2.unselect(e3, null), e3 == i2.getLastSelected() && i2.setLastSelected(null), t2.refreshTask(e3), i2.setFirstSelected(i2.getLastSelected()));
              var a = e3;
              return r || (a = n2.call(this, e3)), a;
            }, t2.toggleTaskSelection = function(e3) {
              var n3 = t2._multiselect;
              e3 && n3.isActive() && (n3.toggle(e3), n3.setFirstSelected(n3.getLastSelected()));
            }, t2.getSelectedTasks = function() {
              var e3 = t2._multiselect;
              return e3.isActive(), e3.getSelected();
            }, t2.eachSelectedTask = function(t3) {
              return this._multiselect.forSelected(t3);
            }, t2.isSelectedTask = function(t3) {
              return this._multiselect.isSelected(t3);
            }, t2.getLastSelectedTask = function() {
              return this._multiselect.getLastSelected();
            }, t2.attachEvent("onGanttReady", function() {
              var e3 = t2.$data.tasksStore.isSelected;
              t2.$data.tasksStore.isSelected = function(n3) {
                return t2._multiselect.isActive() ? t2._multiselect.isSelected(n3) : e3.call(this, n3);
              };
            });
          }(), t2.attachEvent("onTaskIdChange", function(e2, n2) {
            var i2 = t2._multiselect;
            if (!i2.isActive()) return true;
            t2.isSelectedTask(e2) && (i2.unselect(e2, null), i2.select(n2, null));
          }), t2.attachEvent("onAfterTaskDelete", function(e2, n2) {
            var i2 = t2._multiselect;
            if (!i2.isActive()) return true;
            i2._selected[e2] && (i2.unselect(e2, null), i2._selected[e2] = false, i2.setLastSelected(i2.getDefaultSelected())), i2.forSelected(function(e3) {
              t2.isTaskExists(e3) || i2.unselect(e3, null);
            });
          }), t2.attachEvent("onBeforeTaskMultiSelect", function(e2, n2, i2) {
            var r = t2._multiselect;
            return !(n2 && r.isActive() && r._one_level) || r.isSameLevel(e2);
          }), t2.attachEvent("onTaskClick", function(e2, n2) {
            return t2._multiselect.doSelection(n2) && t2.callEvent("onMultiSelect", [n2]), true;
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(85);
        e.default = function(t2) {
          t2.ext || (t2.ext = {}), t2.ext.quickInfo = new i.QuickInfo(t2), t2.config.quickinfo_buttons = ["icon_delete", "icon_edit"], t2.config.quick_info_detached = true, t2.config.show_quick_info = true, t2.templates.quick_info_title = function(t3, e3, n3) {
            return n3.text.substr(0, 50);
          }, t2.templates.quick_info_content = function(t3, e3, n3) {
            return n3.details || n3.text;
          }, t2.templates.quick_info_date = function(e3, n3, i2) {
            return t2.templates.task_time(e3, n3, i2);
          }, t2.templates.quick_info_class = function(t3, e3, n3) {
            return "";
          }, t2.attachEvent("onTaskClick", function(e3, n3) {
            return t2.utils.dom.closest(n3.target, ".gantt_add") || setTimeout(function() {
              t2.ext.quickInfo.show(e3);
            }, 0), true;
          });
          for (var e2 = ["onViewChange", "onLightbox", "onBeforeTaskDelete", "onBeforeDrag"], n2 = function() {
            return t2.ext.quickInfo.hide(), true;
          }, r = 0; r < e2.length; r++) t2.attachEvent(e2[r], n2);
          function a() {
            return t2.ext.quickInfo.hide(), t2.ext.quickInfo._quickInfoBox = null, true;
          }
          t2.attachEvent("onEmptyClick", function(e3) {
            var i2 = true, r2 = document.querySelector(".gantt_cal_quick_info");
            r2 && t2.utils.dom.isChildOf(e3.target, r2) && (i2 = false), i2 && n2();
          }), t2.attachEvent("onGanttReady", a), t2.attachEvent("onDestroy", a), t2.event(window, "keydown", function(e3) {
            27 === e3.keyCode && t2.ext.quickInfo.hide();
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.QuickInfo = void 0;
        var i = function() {
          function t2(t3) {
            var e2 = this;
            this.show = function(t4, n2) {
              void 0 === n2 ? e2._showForTask(t4) : e2._showAtCoordinates(t4, n2);
            }, this.hide = function(t4) {
              var n2 = e2._gantt, i2 = e2._quickInfoBox;
              e2._quickInfoBoxId = 0;
              var r = e2._quickInfoTask;
              if (e2._quickInfoTask = null, i2 && i2.parentNode) {
                if (n2.config.quick_info_detached) return n2.callEvent("onAfterQuickInfo", [r]), i2.parentNode.removeChild(i2);
                i2.className += " gantt_qi_hidden", "auto" === i2.style.right ? i2.style.left = "-350px" : i2.style.right = "-350px", t4 && (i2.style.left = i2.style.right = "", i2.parentNode.removeChild(i2)), n2.callEvent("onAfterQuickInfo", [r]);
              }
            }, this.getNode = function() {
              return e2._quickInfoBox ? e2._quickInfoBox : null;
            }, this.setContainer = function(t4) {
              t4 && (e2._container = "string" == typeof t4 ? document.getElementById(t4) : t4);
            }, this.setContent = function(t4) {
              var n2 = e2._gantt, i2 = { taskId: null, header: { title: "", date: "" }, content: "", buttons: n2.config.quickinfo_buttons };
              t4 || (t4 = i2), t4.taskId || (t4.taskId = i2.taskId), t4.header || (t4.header = i2.header), t4.header.title || (t4.header.title = i2.header.title), t4.header.date || (t4.header.date = i2.header.date), t4.content || (t4.content = i2.content), t4.buttons || (t4.buttons = i2.buttons);
              var r = e2.getNode();
              r || (r = e2._createQuickInfoElement()), t4.taskId && (e2._quickInfoBoxId = t4.taskId);
              var a = r.querySelector(".gantt_cal_qi_title"), o = a.querySelector(".gantt_cal_qi_tcontent"), s = a.querySelector(".gantt_cal_qi_tdate"), l = r.querySelector(".gantt_cal_qi_content"), c = r.querySelector(".gantt_cal_qi_controls");
              n2._waiAria.quickInfoHeader(r, [t4.header.title, t4.header.date].join(" ")), o.innerHTML = t4.header.title, s.innerHTML = t4.header.date, t4.header.title || t4.header.date ? a.style.display = "" : a.style.display = "none", l.innerHTML = t4.content;
              var u = t4.buttons;
              u.length ? c.style.display = "" : c.style.display = "none";
              for (var d = "", h = 0; h < u.length; h++) {
                var f = n2._waiAria.quickInfoButtonAttrString(n2.locale.labels[u[h]]);
                d += '<div class="gantt_qi_big_icon ' + u[h] + '" title="' + n2.locale.labels[u[h]] + '" ' + f + "><div class='gantt_menu_icon " + u[h] + "'></div><div>" + n2.locale.labels[u[h]] + "</div></div>";
              }
              c.innerHTML = d, n2.eventRemove(r, "click", e2._qiButtonClickHandler), n2.eventRemove(r, "keypress", e2._qiKeyPressHandler), n2.event(r, "click", e2._qiButtonClickHandler), n2.event(r, "keypress", e2._qiKeyPressHandler);
            }, this._qiButtonClickHandler = function(t4) {
              t4 = t4 || event, e2._qi_button_click(t4.target || t4.srcElement);
            }, this._qiKeyPressHandler = function(t4) {
              var n2 = (t4 = t4 || event).which || event.keyCode;
              13 !== n2 && 32 !== n2 || setTimeout(function() {
                e2._qi_button_click(t4.target || t4.srcElement);
              }, 1);
            }, this._gantt = t3;
          }
          return t2.prototype._showAtCoordinates = function(t3, e2) {
            this.hide(true), this._quickInfoBoxId = 0, this._quickInfoTask = null, this._quickInfoBox || (this._createQuickInfoElement(), this.setContent()), this._appendAtCoordinates(t3, e2), this._gantt.callEvent("onQuickInfo", [null]);
          }, t2.prototype._showForTask = function(t3) {
            var e2 = this._gantt;
            if ((t3 !== this._quickInfoBoxId || !e2.utils.dom.isChildOf(this._quickInfoBox, document.body)) && e2.config.show_quick_info) {
              this.hide(true);
              var n2 = this._getContainer(), i2 = this._get_event_counter_part(t3, 6, n2.xViewport, n2.yViewport);
              i2 && (this._quickInfoBox = this._init_quick_info(t3), this._quickInfoTask = t3, this._quickInfoBox.className = this._prepare_quick_info_classname(t3), this._fill_quick_data(t3), this._show_quick_info(i2, 6), e2.callEvent("onQuickInfo", [t3]));
            }
          }, t2.prototype._get_event_counter_part = function(t3, e2, n2, i2) {
            var r = this._gantt, a = r.getTaskNode(t3);
            if (!a && !(a = r.getTaskRowNode(t3))) return null;
            var o = 0, s = e2 + a.offsetTop + a.offsetHeight, l = a;
            if (r.utils.dom.isChildOf(l, n2)) for (; l && l !== n2; ) o += l.offsetLeft, l = l.offsetParent;
            var c = r.getScrollState();
            return l ? { left: o, top: s, dx: o + a.offsetWidth / 2 - c.x > n2.offsetWidth / 2 ? 1 : 0, dy: s + a.offsetHeight / 2 - c.y > i2.offsetHeight / 2 ? 1 : 0, width: a.offsetWidth, height: a.offsetHeight } : null;
          }, t2.prototype._createQuickInfoElement = function() {
            var t3 = this, e2 = this._gantt, n2 = document.createElement("div");
            n2.className += "gantt_cal_quick_info", e2._waiAria.quickInfoAttr(n2);
            var i2 = '<div class="gantt_cal_qi_title" ' + e2._waiAria.quickInfoHeaderAttrString() + '><div class="gantt_cal_qi_tcontent"></div><div  class="gantt_cal_qi_tdate"></div></div><div class="gantt_cal_qi_content"></div>';
            if (i2 += '<div class="gantt_cal_qi_controls">', i2 += "</div>", n2.innerHTML = i2, e2.config.quick_info_detached) {
              var r = this._getContainer();
              e2.event(r.parent, "scroll", function() {
                t3.hide();
              });
            }
            return this._quickInfoBox = n2, n2;
          }, t2.prototype._init_quick_info = function(t3) {
            var e2 = this._gantt, n2 = e2.getTask(t3);
            return "boolean" == typeof this._quickInfoReadonly && e2.isReadonly(n2) !== this._quickInfoReadonly && (this.hide(true), this._quickInfoBox = null), this._quickInfoReadonly = e2.isReadonly(n2), this._quickInfoBox || (this._quickInfoBox = this._createQuickInfoElement()), this._quickInfoBox;
          }, t2.prototype._prepare_quick_info_classname = function(t3) {
            var e2 = this._gantt, n2 = e2.getTask(t3), i2 = "gantt_cal_quick_info", r = e2.templates.quick_info_class(n2.start_date, n2.end_date, n2);
            return r && (i2 += " " + r), i2;
          }, t2.prototype._fill_quick_data = function(t3) {
            var e2 = this._gantt, n2 = e2.getTask(t3);
            this._quickInfoBoxId = t3;
            var i2 = [];
            if (this._quickInfoReadonly) for (var r = e2.config.quickinfo_buttons, a = { icon_delete: true, icon_edit: true }, o = 0; o < r.length; o++) this._quickInfoReadonly && a[r[o]] || i2.push(r[o]);
            else i2 = e2.config.quickinfo_buttons;
            this.setContent({ header: { title: e2.templates.quick_info_title(n2.start_date, n2.end_date, n2), date: e2.templates.quick_info_date(n2.start_date, n2.end_date, n2) }, content: e2.templates.quick_info_content(n2.start_date, n2.end_date, n2), buttons: i2 });
          }, t2.prototype._appendAtCoordinates = function(t3, e2) {
            var n2 = this._quickInfoBox, i2 = this._getContainer();
            n2.parentNode && "#document-fragment" !== n2.parentNode.nodeName.toLowerCase() || i2.parent.appendChild(n2), n2.style.left = t3 + "px", n2.style.top = e2 + "px";
          }, t2.prototype._show_quick_info = function(t3, e2) {
            var n2 = this._gantt, i2 = this._quickInfoBox;
            if (n2.config.quick_info_detached) {
              var r = this._getContainer();
              i2.parentNode && "#document-fragment" !== i2.parentNode.nodeName.toLowerCase() || r.parent.appendChild(i2);
              var a = i2.offsetWidth, o = i2.offsetHeight, s = n2.getScrollState(), l = r.xViewport, c = r.yViewport, u = l.offsetWidth + s.x - a, d = t3.top - s.y + o, h = t3.top;
              d > c.offsetHeight / 2 && (h = t3.top - (o + t3.height + 2 * e2)) < s.y && d <= c.offsetHeight && (h = t3.top), h < s.y && (h = s.y);
              var f = Math.min(Math.max(s.x, t3.left - t3.dx * (a - t3.width)), u), _ = h;
              this._appendAtCoordinates(f, _);
            } else i2.style.top = "20px", 1 === t3.dx ? (i2.style.right = "auto", i2.style.left = "-300px", setTimeout(function() {
              i2.style.left = "10px";
            }, 1)) : (i2.style.left = "auto", i2.style.right = "-300px", setTimeout(function() {
              i2.style.right = "10px";
            }, 1)), i2.className += " gantt_qi_" + (1 === t3.dx ? "left" : "right"), n2.$root.appendChild(i2);
          }, t2.prototype._qi_button_click = function(t3) {
            var e2 = this._gantt, n2 = this._quickInfoBox;
            if (t3 && t3 !== n2) {
              var i2 = t3.className;
              if (-1 !== i2.indexOf("_icon")) {
                var r = this._quickInfoBoxId;
                e2.$click.buttons[i2.split(" ")[1].replace("icon_", "")](r);
              } else this._qi_button_click(t3.parentNode);
            }
          }, t2.prototype._getContainer = function() {
            var t3 = this._gantt, e2 = this._container ? this._container : t3.$task_data;
            return e2 && e2.offsetHeight && e2.offsetWidth ? { parent: e2, xViewport: t3.$task, yViewport: t3.$task_data } : (e2 = this._container ? this._container : t3.$grid_data) && e2.offsetHeight && e2.offsetWidth ? { parent: e2, xViewport: t3.$grid, yViewport: t3.$grid_data } : { parent: this._container ? this._container : t3.$layout, xViewport: t3.$layout, yViewport: t3.$layout };
          }, t2;
        }();
        e.QuickInfo = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(87);
        e.default = function(t2) {
          t2.config.tooltip_timeout = 30, t2.config.tooltip_offset_y = 20, t2.config.tooltip_offset_x = 10, t2.config.tooltip_hide_timeout = 30;
          var e2 = new i.TooltipManager(t2);
          t2.ext.tooltips = e2, t2.attachEvent("onGanttReady", function() {
            e2.tooltipFor({ selector: "[" + t2.config.task_attribute + "]:not(.gantt_task_row)", html: function(e3) {
              if (!t2.config.touch || t2.config.touch_tooltip) {
                var n2 = t2.locate(e3);
                if (t2.isTaskExists(n2)) {
                  var i2 = t2.getTask(n2);
                  return t2.templates.tooltip_text(i2.start_date, i2.end_date, i2);
                }
                return null;
              }
            }, global: false });
          }), t2.attachEvent("onDestroy", function() {
            e2.destructor();
          }), t2.attachEvent("onLightbox", function() {
            e2.hideTooltip();
          }), t2.attachEvent("onBeforeTooltip", function() {
            if (t2.getState().link_source_id) return false;
          }), t2.attachEvent("onGanttScroll", function() {
            e2.hideTooltip();
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.TooltipManager = void 0;
        var i = n(29), r = n(1), a = n(2), o = n(88), s = function() {
          function t2(t3) {
            this._listeners = {}, this.tooltip = new o.Tooltip(t3), this._gantt = t3, this._domEvents = i(), this._initDelayedFunctions();
          }
          return t2.prototype.destructor = function() {
            this.tooltip.hide(), this._domEvents.detachAll();
          }, t2.prototype.hideTooltip = function() {
            this.delayHide();
          }, t2.prototype.attach = function(t3) {
            var e2 = this, n2 = document.body, i2 = this._gantt;
            t3.global || (n2 = i2.$root);
            var a2 = null, o2 = function(n3) {
              var i3 = r.getTargetNode(n3), o3 = r.closest(i3, t3.selector);
              if (!r.isChildOf(i3, e2.tooltip.getNode())) {
                var s2 = function() {
                  a2 = o3, t3.onmouseenter(n3, o3);
                };
                a2 ? o3 && o3 === a2 ? t3.onmousemove(n3, o3) : (t3.onmouseleave(n3, a2), a2 = null, o3 && o3 !== a2 && s2()) : o3 && s2();
              }
            };
            this.detach(t3.selector), this._domEvents.attach(n2, "mousemove", o2), this._listeners[t3.selector] = { node: n2, handler: o2 };
          }, t2.prototype.detach = function(t3) {
            var e2 = this._listeners[t3];
            e2 && this._domEvents.detach(e2.node, "mousemove", e2.handler);
          }, t2.prototype.tooltipFor = function(t3) {
            var e2 = this, n2 = function(t4) {
              var e3 = t4;
              return document.createEventObject && !document.createEvent && (e3 = document.createEventObject(t4)), e3;
            };
            this._initDelayedFunctions(), this.attach({ selector: t3.selector, global: t3.global, onmouseenter: function(i2, r2) {
              var a2 = t3.html(i2, r2);
              a2 && e2.delayShow(n2(i2), a2);
            }, onmousemove: function(i2, r2) {
              var a2 = t3.html(i2, r2);
              a2 ? e2.delayShow(n2(i2), a2) : (e2.delayShow.$cancelTimeout(), e2.delayHide());
            }, onmouseleave: function() {
              e2.delayShow.$cancelTimeout(), e2.delayHide();
            } });
          }, t2.prototype._initDelayedFunctions = function() {
            var t3 = this, e2 = this._gantt;
            this.delayShow && this.delayShow.$cancelTimeout(), this.delayHide && this.delayHide.$cancelTimeout(), this.tooltip.hide(), this.delayShow = a.delay(function(n2, i2) {
              false === e2.callEvent("onBeforeTooltip", [n2]) ? t3.tooltip.hide() : (t3.tooltip.setContent(i2), t3.tooltip.show(n2));
            }, e2.config.tooltip_timeout || 1), this.delayHide = a.delay(function() {
              t3.delayShow.$cancelTimeout(), t3.tooltip.hide();
            }, e2.config.tooltip_hide_timeout || 1);
          }, t2;
        }();
        e.TooltipManager = s;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.Tooltip = void 0;
        var i = n(1), r = function() {
          function t2(t3) {
            this._gantt = t3;
          }
          return t2.prototype.getNode = function() {
            var t3 = this._gantt;
            return this._tooltipNode || (this._tooltipNode = document.createElement("div"), this._tooltipNode.className = "gantt_tooltip", t3._waiAria.tooltipAttr(this._tooltipNode)), this._tooltipNode;
          }, t2.prototype.setViewport = function(t3) {
            return this._root = t3, this;
          }, t2.prototype.show = function(t3, e2) {
            var n2 = this._gantt, r2 = document.body, a = this.getNode();
            if (i.isChildOf(a, r2) || (this.hide(), r2.appendChild(a)), this._isLikeMouseEvent(t3)) {
              var o = this._calculateTooltipPosition(t3);
              e2 = o.top, t3 = o.left;
            }
            return a.style.top = e2 + "px", a.style.left = t3 + "px", n2._waiAria.tooltipVisibleAttr(a), this;
          }, t2.prototype.hide = function() {
            var t3 = this._gantt, e2 = this.getNode();
            return e2 && e2.parentNode && e2.parentNode.removeChild(e2), t3._waiAria.tooltipHiddenAttr(e2), this;
          }, t2.prototype.setContent = function(t3) {
            return this.getNode().innerHTML = t3, this;
          }, t2.prototype._isLikeMouseEvent = function(t3) {
            return !(!t3 || "object" != typeof t3) && ("clientX" in t3 && "clientY" in t3);
          }, t2.prototype._getViewPort = function() {
            return this._root || document.body;
          }, t2.prototype._calculateTooltipPosition = function(t3) {
            var e2 = this._gantt, n2 = this._getViewPortSize(), r2 = this.getNode(), a = { top: 0, left: 0, width: r2.offsetWidth, height: r2.offsetHeight, bottom: 0, right: 0 }, o = e2.config.tooltip_offset_x, s = e2.config.tooltip_offset_y, l = document.body, c = i.getRelativeEventPosition(t3, l), u = i.getNodePosition(l);
            c.y += u.y, a.top = c.y, a.left = c.x, a.top += s, a.left += o, a.bottom = a.top + a.height, a.right = a.left + a.width;
            var d = window.scrollY + l.scrollTop;
            return a.top < n2.top - d ? (a.top = n2.top, a.bottom = a.top + a.height) : a.bottom > n2.bottom && (a.bottom = n2.bottom, a.top = a.bottom - a.height), a.left < n2.left ? (a.left = n2.left, a.right = n2.left + a.width) : a.right > n2.right && (a.right = n2.right, a.left = a.right - a.width), c.x >= a.left && c.x <= a.right && (a.left = c.x - a.width - o, a.right = a.left + a.width), c.y >= a.top && c.y <= a.bottom && (a.top = c.y - a.height - s, a.bottom = a.top + a.height), a;
          }, t2.prototype._getViewPortSize = function() {
            var t3, e2 = this._gantt, n2 = this._getViewPort(), r2 = n2, a = window.scrollY + document.body.scrollTop, o = window.scrollX + document.body.scrollLeft;
            return n2 === e2.$task_data ? (r2 = e2.$task, a = 0, o = 0, t3 = i.getNodePosition(e2.$task)) : t3 = i.getNodePosition(r2), { left: t3.x + o, top: t3.y + a, width: t3.width, height: t3.height, bottom: t3.y + t3.height + a, right: t3.x + t3.width + o };
          }, t2;
        }();
        e.Tooltip = r;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(90), r = n(91);
        e.default = function(t2) {
          var e2 = new r.Undo(t2), n2 = new i.Monitor(e2, t2);
          function a(t3, e3, n3) {
            t3 && (t3.id === e3 && (t3.id = n3), t3.parent === e3 && (t3.parent = n3));
          }
          function o(t3, e3, n3) {
            a(t3.value, e3, n3), a(t3.oldValue, e3, n3);
          }
          function s(t3, e3, n3) {
            t3 && (t3.source === e3 && (t3.source = n3), t3.target === e3 && (t3.target = n3));
          }
          function l(t3, e3, n3) {
            s(t3.value, e3, n3), s(t3.oldValue, e3, n3);
          }
          function c(t3, n3, i2) {
            for (var r2 = e2, a2 = 0; a2 < t3.length; a2++) for (var s2 = t3[a2], c2 = 0; c2 < s2.commands.length; c2++) s2.commands[c2].entity === r2.command.entity.task ? o(s2.commands[c2], n3, i2) : s2.commands[c2].entity === r2.command.entity.link && l(s2.commands[c2], n3, i2);
          }
          function u(t3, n3, i2) {
            for (var r2 = e2, a2 = 0; a2 < t3.length; a2++) for (var o2 = t3[a2], s2 = 0; s2 < o2.commands.length; s2++) {
              var l2 = o2.commands[s2];
              l2.entity === r2.command.entity.link && (l2.value && l2.value.id === n3 && (l2.value.id = i2), l2.oldValue && l2.oldValue.id === n3 && (l2.oldValue.id = i2));
            }
          }
          t2.config.undo = true, t2.config.redo = true, t2.config.undo_types = { link: "link", task: "task" }, t2.config.undo_actions = { update: "update", remove: "remove", add: "add", move: "move" }, t2.ext || (t2.ext = {}), t2.ext.undo = { undo: function() {
            return e2.undo();
          }, redo: function() {
            return e2.redo();
          }, getUndoStack: function() {
            return e2.getUndoStack();
          }, getRedoStack: function() {
            return e2.getRedoStack();
          }, clearUndoStack: function() {
            return e2.clearUndoStack();
          }, clearRedoStack: function() {
            return e2.clearRedoStack();
          }, saveState: function(t3, e3) {
            return n2.store(t3, e3, true);
          } }, t2.undo = t2.ext.undo.undo, t2.redo = t2.ext.undo.redo, t2.getUndoStack = t2.ext.undo.getUndoStack, t2.getRedoStack = t2.ext.undo.getRedoStack, t2.clearUndoStack = t2.ext.undo.clearUndoStack, t2.clearRedoStack = t2.ext.undo.clearRedoStack, t2.attachEvent("onTaskIdChange", function(t3, n3) {
            var i2 = e2;
            c(i2.getUndoStack(), t3, n3), c(i2.getRedoStack(), t3, n3);
          }), t2.attachEvent("onLinkIdChange", function(t3, n3) {
            var i2 = e2;
            u(i2.getUndoStack(), t3, n3), u(i2.getRedoStack(), t3, n3);
          }), t2.attachEvent("onGanttReady", function() {
            e2.updateConfigs();
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.Monitor = void 0;
        var i = { onBeforeUndo: "onAfterUndo", onBeforeRedo: "onAfterRedo" }, r = ["onTaskDragStart", "onAfterTaskUpdate", "onAfterTaskDelete", "onBeforeBatchUpdate"], a = function() {
          function t2(t3, e2) {
            this._batchAction = null, this._batchMode = false, this._ignore = false, this._ignoreMoveEvents = false, this._initialTasks = {}, this._initialLinks = {}, this._nestedTasks = {}, this._nestedLinks = {}, this._undo = t3, this._gantt = e2, this._attachEvents();
          }
          return t2.prototype.store = function(t3, e2, n2) {
            return void 0 === n2 && (n2 = false), e2 === this._gantt.config.undo_types.task ? this._storeTask(t3, n2) : e2 === this._gantt.config.undo_types.link && this._storeLink(t3, n2);
          }, t2.prototype.isMoveEventsIgnored = function() {
            return this._ignoreMoveEvents;
          }, t2.prototype.toggleIgnoreMoveEvents = function(t3) {
            this._ignoreMoveEvents = t3 || false;
          }, t2.prototype.startIgnore = function() {
            this._ignore = true;
          }, t2.prototype.stopIgnore = function() {
            this._ignore = false;
          }, t2.prototype.startBatchAction = function() {
            var t3 = this;
            this._timeout || (this._timeout = setTimeout(function() {
              t3.stopBatchAction(), t3._timeout = null;
            }, 10)), this._ignore || this._batchMode || (this._batchMode = true, this._batchAction = this._undo.action.create());
          }, t2.prototype.stopBatchAction = function() {
            if (!this._ignore) {
              var t3 = this._undo;
              this._batchAction && t3.logAction(this._batchAction), this._batchMode = false, this._batchAction = null;
            }
          }, t2.prototype.onTaskAdded = function(t3) {
            this._ignore || this._storeTaskCommand(t3, this._undo.command.type.add);
          }, t2.prototype.onTaskUpdated = function(t3) {
            this._ignore || this._storeTaskCommand(t3, this._undo.command.type.update);
          }, t2.prototype.onTaskMoved = function(t3) {
            if (!this._ignore) {
              t3.$local_index = this._gantt.getTaskIndex(t3.id);
              var e2 = this.getInitialTask(t3.id);
              if (t3.$local_index === e2.$local_index && this._gantt.getParent(t3) === this._gantt.getParent(e2)) return;
              this._storeEntityCommand(t3, this.getInitialTask(t3.id), this._undo.command.type.move, this._undo.command.entity.task);
            }
          }, t2.prototype.onTaskDeleted = function(t3) {
            if (!this._ignore) {
              if (this._storeTaskCommand(t3, this._undo.command.type.remove), this._nestedTasks[t3.id]) for (var e2 = this._nestedTasks[t3.id], n2 = 0; n2 < e2.length; n2++) this._storeTaskCommand(e2[n2], this._undo.command.type.remove);
              if (this._nestedLinks[t3.id]) {
                var i2 = this._nestedLinks[t3.id];
                for (n2 = 0; n2 < i2.length; n2++) this._storeLinkCommand(i2[n2], this._undo.command.type.remove);
              }
            }
          }, t2.prototype.onLinkAdded = function(t3) {
            this._ignore || this._storeLinkCommand(t3, this._undo.command.type.add);
          }, t2.prototype.onLinkUpdated = function(t3) {
            this._ignore || this._storeLinkCommand(t3, this._undo.command.type.update);
          }, t2.prototype.onLinkDeleted = function(t3) {
            this._ignore || this._storeLinkCommand(t3, this._undo.command.type.remove);
          }, t2.prototype.setNestedTasks = function(t3, e2) {
            for (var n2 = this._gantt, i2 = null, r2 = [], a2 = this._getLinks(n2.getTask(t3)), o = 0; o < e2.length; o++) i2 = this.setInitialTask(e2[o]), a2 = a2.concat(this._getLinks(i2)), r2.push(i2);
            var s = {};
            for (o = 0; o < a2.length; o++) s[a2[o]] = true;
            var l = [];
            for (var o in s) l.push(this.setInitialLink(o));
            this._nestedTasks[t3] = r2, this._nestedLinks[t3] = l;
          }, t2.prototype.setInitialTask = function(t3, e2) {
            var n2 = this._gantt;
            if (e2 || !this._initialTasks[t3] || !this._batchMode) {
              var i2 = n2.copy(n2.getTask(t3));
              i2.$index = n2.getGlobalTaskIndex(t3), i2.$local_index = n2.getTaskIndex(t3), this.setInitialTaskObject(t3, i2);
            }
            return this._initialTasks[t3];
          }, t2.prototype.getInitialTask = function(t3) {
            return this._initialTasks[t3];
          }, t2.prototype.clearInitialTasks = function() {
            this._initialTasks = {};
          }, t2.prototype.setInitialTaskObject = function(t3, e2) {
            this._initialTasks[t3] = e2;
          }, t2.prototype.setInitialLink = function(t3, e2) {
            return this._initialLinks[t3] && this._batchMode || (this._initialLinks[t3] = this._gantt.copy(this._gantt.getLink(t3))), this._initialLinks[t3];
          }, t2.prototype.getInitialLink = function(t3) {
            return this._initialLinks[t3];
          }, t2.prototype.clearInitialLinks = function() {
            this._initialLinks = {};
          }, t2.prototype._attachEvents = function() {
            var t3 = this, e2 = null, n2 = this._gantt, a2 = function() {
              e2 || (e2 = setTimeout(function() {
                e2 = null;
              }), t3.clearInitialTasks(), n2.eachTask(function(e3) {
                t3.setInitialTask(e3.id);
              }), t3.clearInitialLinks(), n2.getLinks().forEach(function(e3) {
                t3.setInitialLink(e3.id);
              }));
            }, o = function(t4) {
              return n2.copy(n2.getTask(t4));
            };
            for (var s in i) n2.attachEvent(s, function() {
              return t3.startIgnore(), true;
            }), n2.attachEvent(i[s], function() {
              return t3.stopIgnore(), true;
            });
            for (s = 0; s < r.length; s++) n2.attachEvent(r[s], function() {
              return t3.startBatchAction(), true;
            });
            n2.attachEvent("onParse", function() {
              t3._undo.clearUndoStack(), t3._undo.clearRedoStack(), a2();
            }), n2.attachEvent("onAfterTaskAdd", function(e3, n3) {
              t3.setInitialTask(e3, true), t3.onTaskAdded(n3);
            }), n2.attachEvent("onAfterTaskUpdate", function(e3, n3) {
              t3.onTaskUpdated(n3);
            }), n2.attachEvent("onAfterTaskDelete", function(e3, n3) {
              t3.onTaskDeleted(n3);
            }), n2.attachEvent("onAfterLinkAdd", function(e3, n3) {
              t3.setInitialLink(e3, true), t3.onLinkAdded(n3);
            }), n2.attachEvent("onAfterLinkUpdate", function(e3, n3) {
              t3.onLinkUpdated(n3);
            }), n2.attachEvent("onAfterLinkDelete", function(e3, n3) {
              t3.onLinkDeleted(n3);
            }), n2.attachEvent("onRowDragEnd", function(e3, n3) {
              return t3.onTaskMoved(o(e3)), t3.toggleIgnoreMoveEvents(), true;
            }), n2.attachEvent("onBeforeTaskDelete", function(e3) {
              t3.store(e3, n2.config.undo_types.task);
              var i2 = [];
              return a2(), n2.eachTask(function(t4) {
                i2.push(t4.id);
              }, e3), t3.setNestedTasks(e3, i2), true;
            });
            var l = n2.getDatastore("task");
            l.attachEvent("onBeforeItemMove", function(e3, n3, i2) {
              return t3.isMoveEventsIgnored() || a2(), true;
            }), l.attachEvent("onAfterItemMove", function(e3, n3, i2) {
              return t3.isMoveEventsIgnored() || t3.onTaskMoved(o(e3)), true;
            }), n2.attachEvent("onRowDragStart", function(e3, n3, i2) {
              return t3.toggleIgnoreMoveEvents(true), a2(), true;
            }), n2.attachEvent("onBeforeTaskDrag", function(e3) {
              return t3.store(e3, n2.config.undo_types.task);
            }), n2.attachEvent("onLightbox", function(e3) {
              return t3.store(e3, n2.config.undo_types.task);
            }), n2.attachEvent("onBeforeTaskAutoSchedule", function(e3) {
              return t3.store(e3.id, n2.config.undo_types.task), true;
            }), n2.ext.inlineEditors && n2.ext.inlineEditors.attachEvent("onEditStart", function(e3) {
              t3.store(e3.id, n2.config.undo_types.task);
            });
          }, t2.prototype._storeCommand = function(t3) {
            var e2 = this._undo;
            if (e2.updateConfigs(), e2.undoEnabled) if (this._batchMode) this._batchAction.commands.push(t3);
            else {
              var n2 = e2.action.create([t3]);
              e2.logAction(n2);
            }
          }, t2.prototype._storeEntityCommand = function(t3, e2, n2, i2) {
            var r2 = this._undo.command.create(t3, e2, n2, i2);
            this._storeCommand(r2);
          }, t2.prototype._storeTaskCommand = function(t3, e2) {
            this._gantt.isTaskExists(t3.id) && (t3.$local_index = this._gantt.getTaskIndex(t3.id)), this._storeEntityCommand(t3, this.getInitialTask(t3.id), e2, this._undo.command.entity.task);
          }, t2.prototype._storeLinkCommand = function(t3, e2) {
            this._storeEntityCommand(t3, this.getInitialLink(t3.id), e2, this._undo.command.entity.link);
          }, t2.prototype._getLinks = function(t3) {
            return t3.$source.concat(t3.$target);
          }, t2.prototype._storeTask = function(t3, e2) {
            var n2 = this;
            void 0 === e2 && (e2 = false);
            var i2 = this._gantt;
            return this.setInitialTask(t3, e2), i2.eachTask(function(t4) {
              n2.setInitialTask(t4.id);
            }, t3), true;
          }, t2.prototype._storeLink = function(t3, e2) {
            return void 0 === e2 && (e2 = false), this.setInitialLink(t3, e2), true;
          }, t2;
        }();
        e.Monitor = a;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.Undo = void 0;
        var i = 10, r = function() {
          function t2(t3) {
            var e2 = this;
            this.maxSteps = i, this.undoEnabled = true, this.redoEnabled = true, this.action = { create: function(t4) {
              return { commands: t4 ? t4.slice() : [] };
            }, invert: function(t4) {
              for (var n2, i2 = e2._gantt.copy(t4), r2 = e2.command, a = 0; a < t4.commands.length; a++) {
                var o = i2.commands[a] = r2.invert(i2.commands[a]);
                o.type !== r2.type.update && o.type !== r2.type.move || (n2 = [o.oldValue, o.value], o.value = n2[0], o.oldValue = n2[1]);
              }
              return i2;
            } }, this.command = { entity: null, type: null, create: function(t4, n2, i2, r2) {
              var a = e2._gantt;
              return { entity: r2, type: i2, value: a.copy(t4), oldValue: a.copy(n2 || t4) };
            }, invert: function(t4) {
              var n2 = e2._gantt.copy(t4);
              return n2.type = e2.command.inverseCommands(t4.type), n2;
            }, inverseCommands: function(t4) {
              var n2 = e2._gantt, i2 = e2.command.type;
              switch (t4) {
                case i2.update:
                  return i2.update;
                case i2.remove:
                  return i2.add;
                case i2.add:
                  return i2.remove;
                case i2.move:
                  return i2.move;
                default:
                  return n2.assert(false, "Invalid command " + t4), null;
              }
            } }, this._undoStack = [], this._redoStack = [], this._gantt = t3;
          }
          return t2.prototype.getUndoStack = function() {
            return this._undoStack;
          }, t2.prototype.getRedoStack = function() {
            return this._redoStack;
          }, t2.prototype.clearUndoStack = function() {
            this._undoStack = [];
          }, t2.prototype.clearRedoStack = function() {
            this._redoStack = [];
          }, t2.prototype.updateConfigs = function() {
            var t3 = this._gantt;
            this.maxSteps = t3.config.undo_steps || i, this.command.entity = t3.config.undo_types, this.command.type = t3.config.undo_actions, this.undoEnabled = !!t3.config.undo, this.redoEnabled = !!t3.config.redo;
          }, t2.prototype.undo = function() {
            var t3 = this._gantt;
            if (this.updateConfigs(), this.undoEnabled) {
              var e2 = this._pop(this._undoStack);
              if (e2 && this._reorderCommands(e2), false !== t3.callEvent("onBeforeUndo", [e2]) && e2) return this._applyAction(this.action.invert(e2)), this._push(this._redoStack, t3.copy(e2)), void t3.callEvent("onAfterUndo", [e2]);
              t3.callEvent("onAfterUndo", [null]);
            }
          }, t2.prototype.redo = function() {
            var t3 = this._gantt;
            if (this.updateConfigs(), this.redoEnabled) {
              var e2 = this._pop(this._redoStack);
              if (e2 && this._reorderCommands(e2), false !== t3.callEvent("onBeforeRedo", [e2]) && e2) return this._applyAction(e2), this._push(this._undoStack, t3.copy(e2)), void t3.callEvent("onAfterRedo", [e2]);
              t3.callEvent("onAfterRedo", [null]);
            }
          }, t2.prototype.logAction = function(t3) {
            this._push(this._undoStack, t3), this._redoStack = [];
          }, t2.prototype._push = function(t3, e2) {
            var n2 = this._gantt;
            if (e2.commands.length) {
              var i2 = t3 === this._undoStack ? "onBeforeUndoStack" : "onBeforeRedoStack";
              if (false !== n2.callEvent(i2, [e2]) && e2.commands.length) {
                for (t3.push(e2); t3.length > this.maxSteps; ) t3.shift();
                return e2;
              }
            }
          }, t2.prototype._pop = function(t3) {
            return t3.pop();
          }, t2.prototype._reorderCommands = function(t3) {
            var e2 = { any: 0, link: 1, task: 2 }, n2 = { move: 1, any: 0 };
            t3.commands.sort(function(t4, i2) {
              if ("task" === t4.entity && "task" === i2.entity) return t4.type !== i2.type ? (n2[i2.type] || 0) - (n2[t4.type] || 0) : "move" === t4.type && t4.oldValue && i2.oldValue && i2.oldValue.parent === t4.oldValue.parent ? t4.oldValue.$index - i2.oldValue.$index : 0;
              var r2 = e2[t4.entity] || e2.any;
              return (e2[i2.entity] || e2.any) - r2;
            });
          }, t2.prototype._applyAction = function(t3) {
            var e2 = null, n2 = this.command.entity, i2 = this.command.type, r2 = this._gantt, a = {};
            a[n2.task] = { add: "addTask", get: "getTask", update: "updateTask", remove: "deleteTask", move: "moveTask", isExists: "isTaskExists" }, a[n2.link] = { add: "addLink", get: "getLink", update: "updateLink", remove: "deleteLink", isExists: "isLinkExists" }, r2.batchUpdate(function() {
              for (var n3 = 0; n3 < t3.commands.length; n3++) {
                e2 = t3.commands[n3];
                var o = a[e2.entity][e2.type], s = a[e2.entity].get, l = a[e2.entity].isExists;
                if (e2.type === i2.add) r2[o](e2.oldValue, e2.oldValue.parent, e2.oldValue.$local_index);
                else if (e2.type === i2.remove) r2[l](e2.value.id) && r2[o](e2.value.id);
                else if (e2.type === i2.update) {
                  var c = r2[s](e2.value.id);
                  for (var u in e2.value) u.startsWith("$") || u.startsWith("_") || (c[u] = e2.value[u]);
                  r2[o](e2.value.id);
                } else e2.type === i2.move && (r2[o](e2.value.id, e2.value.$local_index, e2.value.parent), r2.callEvent("onRowDragEnd", [e2.value.id]));
              }
            });
          }, t2;
        }();
        e.Undo = r;
      }, function(t, e, n) {
        n(16);
        var i = n(93);
        t.exports = function(t2) {
          var e2 = i(t2);
          return e2.env.isNode || n(197)(e2), e2;
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        t.exports = function(t2) {
          var e2 = new function() {
            this.constants = n(94), this.version = "7.1.12", this.license = "gpl", this.templates = {}, this.ext = {}, this.keys = { edit_save: this.constants.KEY_CODES.ENTER, edit_cancel: this.constants.KEY_CODES.ESC };
          }(), r = new (n(95)).default(t2), a = {};
          e2.plugins = function(t3) {
            for (var n2 in t3) if (t3[n2] && !a[n2]) {
              var i2 = r.getExtension(n2);
              i2 && (i2(e2), a[n2] = true);
            }
          }, e2.$services = n(96)(), e2.config = n(97)(), e2.ajax = n(98)(e2), e2.date = n(100)(e2);
          var o = n(103)(e2);
          e2.$services.setService("dnd", function() {
            return o;
          });
          var s = n(104)(e2);
          e2.$services.setService("templateLoader", function() {
            return s;
          }), n(4)(e2);
          var l = new (n(105))();
          l.registerProvider("global", function() {
            var t3 = { min_date: e2._min_date, max_date: e2._max_date, selected_task: null };
            return e2.$data && e2.$data.tasksStore && (t3.selected_task = e2.$data.tasksStore.getSelectedId()), t3;
          }), e2.getState = l.getState, e2.$services.setService("state", function() {
            return l;
          });
          var c = n(0);
          c.mixin(e2, c), e2.Promise = n(106), e2.env = n(7), n(110)(e2);
          var u = n(116);
          e2.dataProcessor = u.DEPRECATED_api, e2.createDataProcessor = u.createDataProcessor, n(121)(e2), n(130)(e2), n(131)(e2), n(139)(e2), n(140)(e2), n(141)(e2), n(154)(e2), n(155).default(e2), n(156)(e2), n(157)(e2), n(158)(e2), n(161)(e2), n(162).default(e2);
          var d = n(163).default();
          return e2.i18n = { addLocale: d.addLocale, setLocale: function(t3) {
            if ("string" == typeof t3) {
              var n2 = d.getLocale(t3);
              n2 || (n2 = d.getLocale("en")), e2.locale = n2;
            } else if (t3) if (e2.locale) for (var r2 in t3) t3[r2] && "object" === i(t3[r2]) ? (e2.locale[r2] || (e2.locale[r2] = {}), e2.mixin(e2.locale[r2], t3[r2], true)) : e2.locale[r2] = t3[r2];
            else e2.locale = t3;
          }, getLocale: d.getLocale }, e2.i18n.setLocale("en"), e2;
        };
      }, function(t, e) {
        t.exports = { KEY_CODES: { UP: 38, DOWN: 40, LEFT: 37, RIGHT: 39, SPACE: 32, ENTER: 13, DELETE: 46, ESC: 27, TAB: 9 } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          return function(t2) {
            var e2 = this;
            for (var n2 in this.addExtension = function(t3, n3) {
              e2._extensions[t3] = n3;
            }, this.getExtension = function(t3) {
              return e2._extensions[t3];
            }, this._extensions = {}, t2) this._extensions[n2] = t2[n2];
          };
        }();
        e.default = i;
      }, function(t, e) {
        t.exports = function() {
          var t2 = {};
          return { services: {}, setService: function(e2, n) {
            t2[e2] = n;
          }, getService: function(e2) {
            return t2[e2] ? t2[e2]() : null;
          }, dropService: function(e2) {
            t2[e2] && delete t2[e2];
          }, destructor: function() {
            for (var e2 in t2) if (t2[e2]) {
              var n = t2[e2];
              n && n.destructor && n.destructor();
            }
            t2 = null;
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), t.exports = function() {
          return { layout: { css: "gantt_container", rows: [{ cols: [{ view: "grid", scrollX: "scrollHor", scrollY: "scrollVer" }, { resizer: true, width: 1 }, { view: "timeline", scrollX: "scrollHor", scrollY: "scrollVer" }, { view: "scrollbar", id: "scrollVer" }] }, { view: "scrollbar", id: "scrollHor", height: 20 }] }, links: { finish_to_start: "0", start_to_start: "1", finish_to_finish: "2", start_to_finish: "3" }, types: { task: "task", project: "project", milestone: "milestone" }, auto_types: false, duration_unit: "day", work_time: false, correct_work_time: false, skip_off_time: false, cascade_delete: true, autosize: false, autosize_min_width: 0, autoscroll: true, autoscroll_speed: 30, deepcopy_on_parse: false, show_links: true, show_task_cells: true, static_background: false, static_background_cells: true, branch_loading: false, branch_loading_property: "$has_child", show_loading: false, show_chart: true, show_grid: true, min_duration: 36e5, date_format: "%d-%m-%Y %H:%i", xml_date: void 0, start_on_monday: true, server_utc: false, show_progress: true, fit_tasks: false, select_task: true, scroll_on_click: true, smart_rendering: true, preserve_scroll: true, readonly: false, container_resize_timeout: 20, date_grid: "%Y-%m-%d", drag_links: true, drag_progress: true, drag_resize: true, drag_project: false, drag_move: true, drag_mode: { resize: "resize", progress: "progress", move: "move", ignore: "ignore" }, round_dnd_dates: true, link_wrapper_width: 20, root_id: 0, autofit: false, columns: [{ name: "text", tree: true, width: "*", resize: true }, { name: "start_date", align: "center", resize: true }, { name: "duration", align: "center" }, { name: "add", width: 44 }], scale_offset_minimal: true, inherit_scale_class: false, scales: [{ unit: "day", step: 1, date: "%d %M" }], time_step: 60, duration_step: 1, task_date: "%d %F %Y", time_picker: "%H:%i", task_attribute: "data-task-id", link_attribute: "data-link-id", layer_attribute: "data-layer", buttons_left: ["gantt_save_btn", "gantt_cancel_btn"], _migrate_buttons: { dhx_save_btn: "gantt_save_btn", dhx_cancel_btn: "gantt_cancel_btn", dhx_delete_btn: "gantt_delete_btn" }, buttons_right: ["gantt_delete_btn"], lightbox: { sections: [{ name: "description", height: 70, map_to: "text", type: "textarea", focus: true }, { name: "time", type: "duration", map_to: "auto" }], project_sections: [{ name: "description", height: 70, map_to: "text", type: "textarea", focus: true }, { name: "type", type: "typeselect", map_to: "type" }, { name: "time", type: "duration", readonly: true, map_to: "auto" }], milestone_sections: [{ name: "description", height: 70, map_to: "text", type: "textarea", focus: true }, { name: "type", type: "typeselect", map_to: "type" }, { name: "time", type: "duration", single_date: true, map_to: "auto" }] }, drag_lightbox: true, sort: false, details_on_create: true, details_on_dblclick: true, initial_scroll: true, task_scroll_offset: 100, order_branch: false, order_branch_free: false, task_height: void 0, bar_height: "full", min_column_width: 70, min_grid_column_width: 70, grid_resizer_column_attribute: "data-column-index", keep_grid_width: false, grid_resize: false, grid_elastic_columns: false, show_tasks_outside_timescale: false, show_unscheduled: true, resize_rows: false, task_grid_row_resizer_attribute: "data-row-index", min_task_grid_row_height: 30, readonly_property: "readonly", editable_property: "editable", calendar_property: "calendar_id", resource_calendars: {}, dynamic_resource_calendars: false, inherit_calendar: false, type_renderers: {}, open_tree_initially: false, optimize_render: true, prevent_default_scroll: false, show_errors: true, wai_aria_attributes: true, smart_scales: true, rtl: false, placeholder_task: false, horizontal_scroll_key: "shiftKey", drag_timeline: { useKey: void 0, ignore: ".gantt_task_line, .gantt_task_link" }, drag_multiple: true, csp: "auto" };
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(7), a = n(12), o = n(99).default;
        function s(t2, e2) {
          var n2 = { method: t2 };
          if (0 === e2.length) throw new Error("Arguments list of query is wrong.");
          if (1 === e2.length) return "string" == typeof e2[0] ? (n2.url = e2[0], n2.async = true) : (n2.url = e2[0].url, n2.async = e2[0].async || true, n2.callback = e2[0].callback, n2.headers = e2[0].headers), e2[0].data ? "string" != typeof e2[0].data ? n2.data = o(e2[0].data) : n2.data = e2[0].data : n2.data = "", n2;
          switch (n2.url = e2[0], t2) {
            case "GET":
            case "DELETE":
              n2.callback = e2[1], n2.headers = e2[2];
              break;
            case "POST":
            case "PUT":
              e2[1] ? "string" != typeof e2[1] ? n2.data = o(e2[1]) : n2.data = e2[1] : n2.data = "", n2.callback = e2[2], n2.headers = e2[3];
          }
          return n2;
        }
        t.exports = function(t2) {
          return { cache: true, method: "get", parse: function(t3) {
            return "string" != typeof t3 ? t3 : (t3 = t3.replace(/^[\s]+/, ""), "undefined" == typeof DOMParser || r.isIE ? void 0 !== a.ActiveXObject && ((e2 = new a.ActiveXObject("Microsoft.XMLDOM")).async = "false", e2.loadXML(t3)) : e2 = new DOMParser().parseFromString(t3, "text/xml"), e2);
            var e2;
          }, xmltop: function(e2, n2, i2) {
            if (void 0 === n2.status || n2.status < 400) {
              var r2 = n2.responseXML ? n2.responseXML || n2 : this.parse(n2.responseText || n2);
              if (r2 && null !== r2.documentElement && !r2.getElementsByTagName("parsererror").length) return r2.getElementsByTagName(e2)[0];
            }
            return -1 !== i2 && t2.callEvent("onLoadXMLError", ["Incorrect XML", arguments[1], i2]), document.createElement("DIV");
          }, xpath: function(t3, e2) {
            if (e2.nodeName || (e2 = e2.responseXML || e2), r.isIE) return e2.selectNodes(t3) || [];
            for (var n2, i2 = [], a2 = (e2.ownerDocument || e2).evaluate(t3, e2, null, XPathResult.ANY_TYPE, null); n2 = a2.iterateNext(); ) i2.push(n2);
            return i2;
          }, query: function(t3) {
            return this._call(t3.method || "GET", t3.url, t3.data || "", t3.async || true, t3.callback, t3.headers);
          }, get: function(t3, e2, n2) {
            var i2 = s("GET", arguments);
            return this.query(i2);
          }, getSync: function(t3, e2) {
            var n2 = s("GET", arguments);
            return n2.async = false, this.query(n2);
          }, put: function(t3, e2, n2, i2) {
            var r2 = s("PUT", arguments);
            return this.query(r2);
          }, del: function(t3, e2, n2) {
            var i2 = s("DELETE", arguments);
            return this.query(i2);
          }, post: function(t3, e2, n2, i2) {
            1 == arguments.length ? e2 = "" : 2 == arguments.length && "function" == typeof e2 && (e2 = "");
            var r2 = s("POST", arguments);
            return this.query(r2);
          }, postSync: function(t3, e2, n2) {
            e2 = null === e2 ? "" : String(e2);
            var i2 = s("POST", arguments);
            return i2.async = false, this.query(i2);
          }, _call: function(e2, n2, o2, s2, l, c) {
            return new t2.Promise(function(u, d) {
              var h = void 0 === ("undefined" == typeof XMLHttpRequest ? "undefined" : i(XMLHttpRequest)) || r.isIE ? new a.ActiveXObject("Microsoft.XMLHTTP") : new XMLHttpRequest(), f = null !== navigator.userAgent.match(/AppleWebKit/) && null !== navigator.userAgent.match(/Qt/) && null !== navigator.userAgent.match(/Safari/);
              if (s2 && (h.onreadystatechange = function() {
                if (4 == h.readyState || f && 3 == h.readyState) {
                  if ((200 != h.status || "" === h.responseText) && !t2.callEvent("onAjaxError", [h])) return;
                  setTimeout(function() {
                    "function" == typeof l && l.apply(a, [{ xmlDoc: h, filePath: n2 }]), u(h), "function" == typeof l && (l = null, h = null);
                  }, 0);
                }
              }), "GET" != e2 || this.cache || (n2 += (n2.indexOf("?") >= 0 ? "&" : "?") + "dhxr" + (/* @__PURE__ */ new Date()).getTime() + "=1"), h.open(e2, n2, s2), c) for (var _ in c) h.setRequestHeader(_, c[_]);
              else "POST" == e2.toUpperCase() || "PUT" == e2 || "DELETE" == e2 ? h.setRequestHeader("Content-Type", "application/x-www-form-urlencoded") : "GET" == e2 && (o2 = null);
              if (h.setRequestHeader("X-Requested-With", "XMLHttpRequest"), h.send(o2), !s2) return { xmlDoc: h, filePath: n2 };
            });
          }, urlSeparator: function(t3) {
            return -1 != t3.indexOf("?") ? "&" : "?";
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.default = function(t2) {
          if ("string" == typeof t2 || "number" == typeof t2) return t2;
          var e2 = "";
          for (var n2 in t2) {
            var i = "";
            t2.hasOwnProperty(n2) && (i = n2 + "=" + (i = "string" == typeof t2[n2] ? encodeURIComponent(t2[n2]) : "number" == typeof t2[n2] ? t2[n2] : encodeURIComponent(JSON.stringify(t2[n2]))), e2.length && (i = "&" + i), e2 += i);
          }
          return e2;
        };
      }, function(t, e, n) {
        var i = n(101).default, r = n(102).default;
        t.exports = function(t2) {
          var e2 = null;
          function n2() {
            var n3 = false;
            return "auto" === t2.config.csp ? (null === e2 && function() {
              try {
                new Function("canUseCsp = false;");
              } catch (t3) {
                e2 = true;
              }
            }(), n3 = e2) : n3 = t2.config.csp, n3;
          }
          return { init: function() {
            for (var e3 = t2.locale, n3 = e3.date.month_short, i2 = e3.date.month_short_hash = {}, r2 = 0; r2 < n3.length; r2++) i2[n3[r2]] = r2;
            for (n3 = e3.date.month_full, i2 = e3.date.month_full_hash = {}, r2 = 0; r2 < n3.length; r2++) i2[n3[r2]] = r2;
          }, date_part: function(t3) {
            var e3 = new Date(t3);
            return t3.setHours(0), this.hour_start(t3), t3.getHours() && (t3.getDate() < e3.getDate() || t3.getMonth() < e3.getMonth() || t3.getFullYear() < e3.getFullYear()) && t3.setTime(t3.getTime() + 36e5 * (24 - t3.getHours())), t3;
          }, time_part: function(t3) {
            return (t3.valueOf() / 1e3 - 60 * t3.getTimezoneOffset()) % 86400;
          }, week_start: function(e3) {
            var n3 = e3.getDay();
            return t2.config.start_on_monday && (0 === n3 ? n3 = 6 : n3--), this.date_part(this.add(e3, -1 * n3, "day"));
          }, month_start: function(t3) {
            return t3.setDate(1), this.date_part(t3);
          }, quarter_start: function(t3) {
            this.month_start(t3);
            var e3, n3 = t3.getMonth();
            return e3 = n3 >= 9 ? 9 : n3 >= 6 ? 6 : n3 >= 3 ? 3 : 0, t3.setMonth(e3), t3;
          }, year_start: function(t3) {
            return t3.setMonth(0), this.month_start(t3);
          }, day_start: function(t3) {
            return this.date_part(t3);
          }, hour_start: function(t3) {
            return t3.getMinutes() && t3.setMinutes(0), this.minute_start(t3), t3;
          }, minute_start: function(t3) {
            return t3.getSeconds() && t3.setSeconds(0), t3.getMilliseconds() && t3.setMilliseconds(0), t3;
          }, _add_days: function(t3, e3, n3) {
            t3.setDate(t3.getDate() + e3);
            var i2 = e3 >= 0, r2 = !n3.getHours() && t3.getHours(), a = t3.getDate() <= n3.getDate() || t3.getMonth() < n3.getMonth() || t3.getFullYear() < n3.getFullYear();
            return i2 && r2 && a && t3.setTime(t3.getTime() + 36e5 * (24 - t3.getHours())), e3 > 1 && r2 && t3.setHours(0), t3;
          }, add: function(t3, e3, n3) {
            var i2 = new Date(t3.valueOf());
            switch (n3) {
              case "day":
                i2 = this._add_days(i2, e3, t3);
                break;
              case "week":
                i2 = this._add_days(i2, 7 * e3, t3);
                break;
              case "month":
                i2.setMonth(i2.getMonth() + e3);
                break;
              case "year":
                i2.setYear(i2.getFullYear() + e3);
                break;
              case "hour":
                i2.setTime(i2.getTime() + 60 * e3 * 60 * 1e3);
                break;
              case "minute":
                i2.setTime(i2.getTime() + 60 * e3 * 1e3);
                break;
              default:
                return this["add_" + n3](t3, e3, n3);
            }
            return i2;
          }, add_quarter: function(t3, e3) {
            return this.add(t3, 3 * e3, "month");
          }, to_fixed: function(t3) {
            return t3 < 10 ? "0" + t3 : t3;
          }, copy: function(t3) {
            return new Date(t3.valueOf());
          }, date_to_str: function(e3, a) {
            var o = i;
            return n2() && (o = r), o.date_to_str(e3, a, t2);
          }, str_to_date: function(e3, a) {
            var o = i;
            return n2() && (o = r), o.str_to_date(e3, a, t2);
          }, getISOWeek: function(e3) {
            return t2.date._getWeekNumber(e3, true);
          }, _getWeekNumber: function(t3, e3) {
            if (!t3) return false;
            var n3 = t3.getDay();
            e3 && 0 === n3 && (n3 = 7);
            var i2 = new Date(t3.valueOf());
            i2.setDate(t3.getDate() + (4 - n3));
            var r2 = i2.getFullYear(), a = Math.round((i2.getTime() - new Date(r2, 0, 1).getTime()) / 864e5);
            return 1 + Math.floor(a / 7);
          }, getWeek: function(e3) {
            return t2.date._getWeekNumber(e3, t2.config.start_on_monday);
          }, getUTCISOWeek: function(e3) {
            return t2.date.getISOWeek(e3);
          }, convert_to_utc: function(t3) {
            return new Date(t3.getUTCFullYear(), t3.getUTCMonth(), t3.getUTCDate(), t3.getUTCHours(), t3.getUTCMinutes(), t3.getUTCSeconds());
          }, parseDate: function(e3, n3) {
            return e3 && !e3.getFullYear && ("function" != typeof n3 && (n3 = "string" == typeof n3 ? "parse_date" === n3 || "xml_date" === n3 ? t2.defined(t2.templates.xml_date) ? t2.templates.xml_date : t2.templates.parse_date : t2.defined(t2.templates[n3]) ? t2.templates[n3] : t2.date.str_to_date(n3) : t2.defined(t2.templates.xml_date) ? t2.templates.xml_date : t2.templates.parse_date), e3 = e3 ? n3(e3) : null), e3;
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = { date_to_str: function(t2, e2, n2) {
          t2 = t2.replace(/%[a-zA-Z]/g, function(t3) {
            switch (t3) {
              case "%d":
                return '"+to_fixed(date.get' + (e2 ? "UTC" : "") + 'Date())+"';
              case "%m":
                return '"+to_fixed((date.get' + (e2 ? "UTC" : "") + 'Month()+1))+"';
              case "%j":
                return '"+date.get' + (e2 ? "UTC" : "") + 'Date()+"';
              case "%n":
                return '"+(date.get' + (e2 ? "UTC" : "") + 'Month()+1)+"';
              case "%y":
                return '"+to_fixed(date.get' + (e2 ? "UTC" : "") + 'FullYear()%100)+"';
              case "%Y":
                return '"+date.get' + (e2 ? "UTC" : "") + 'FullYear()+"';
              case "%D":
                return '"+locale.date.day_short[date.get' + (e2 ? "UTC" : "") + 'Day()]+"';
              case "%l":
                return '"+locale.date.day_full[date.get' + (e2 ? "UTC" : "") + 'Day()]+"';
              case "%M":
                return '"+locale.date.month_short[date.get' + (e2 ? "UTC" : "") + 'Month()]+"';
              case "%F":
                return '"+locale.date.month_full[date.get' + (e2 ? "UTC" : "") + 'Month()]+"';
              case "%h":
                return '"+to_fixed((date.get' + (e2 ? "UTC" : "") + 'Hours()+11)%12+1)+"';
              case "%g":
                return '"+((date.get' + (e2 ? "UTC" : "") + 'Hours()+11)%12+1)+"';
              case "%G":
                return '"+date.get' + (e2 ? "UTC" : "") + 'Hours()+"';
              case "%H":
                return '"+to_fixed(date.get' + (e2 ? "UTC" : "") + 'Hours())+"';
              case "%i":
                return '"+to_fixed(date.get' + (e2 ? "UTC" : "") + 'Minutes())+"';
              case "%a":
                return '"+(date.get' + (e2 ? "UTC" : "") + 'Hours()>11?"pm":"am")+"';
              case "%A":
                return '"+(date.get' + (e2 ? "UTC" : "") + 'Hours()>11?"PM":"AM")+"';
              case "%s":
                return '"+to_fixed(date.get' + (e2 ? "UTC" : "") + 'Seconds())+"';
              case "%W":
                return '"+to_fixed(getISOWeek(date))+"';
              case "%w":
                return '"+to_fixed(getWeek(date))+"';
              default:
                return t3;
            }
          });
          var i2 = new Function("date", "to_fixed", "locale", "getISOWeek", "getWeek", 'return "' + t2 + '";');
          return function(t3) {
            return i2(t3, n2.date.to_fixed, n2.locale, n2.date.getISOWeek, n2.date.getWeek);
          };
        }, str_to_date: function(t2, e2, n2) {
          for (var i2 = "var temp=date.match(/[a-zA-Z]+|[0-9]+/g);", r = t2.match(/%[a-zA-Z]/g), a = 0; a < r.length; a++) switch (r[a]) {
            case "%j":
            case "%d":
              i2 += "set[2]=temp[" + a + "]||1;";
              break;
            case "%n":
            case "%m":
              i2 += "set[1]=(temp[" + a + "]||1)-1;";
              break;
            case "%y":
              i2 += "set[0]=temp[" + a + "]*1+(temp[" + a + "]>50?1900:2000);";
              break;
            case "%g":
            case "%G":
            case "%h":
            case "%H":
              i2 += "set[3]=temp[" + a + "]||0;";
              break;
            case "%i":
              i2 += "set[4]=temp[" + a + "]||0;";
              break;
            case "%Y":
              i2 += "set[0]=temp[" + a + "]||0;";
              break;
            case "%a":
            case "%A":
              i2 += "set[3]=set[3]%12+((temp[" + a + "]||'').toLowerCase()=='am'?0:12);";
              break;
            case "%s":
              i2 += "set[5]=temp[" + a + "]||0;";
              break;
            case "%M":
              i2 += "set[1]=locale.date.month_short_hash[temp[" + a + "]]||0;";
              break;
            case "%F":
              i2 += "set[1]=locale.date.month_full_hash[temp[" + a + "]]||0;";
          }
          var o = "set[0],set[1],set[2],set[3],set[4],set[5]";
          e2 && (o = " Date.UTC(" + o + ")");
          var s = new Function("date", "locale", "var set=[0,0,1,0,0,0]; " + i2 + " return new Date(" + o + ");");
          return function(t3) {
            return s(t3, n2.locale);
          };
        } };
        e.default = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = { date_to_str: function(t2, e2, n2) {
          return function(i2) {
            return t2.replace(/%[a-zA-Z]/g, function(t3) {
              switch (t3) {
                case "%d":
                  return e2 ? n2.date.to_fixed(i2.getUTCDate()) : n2.date.to_fixed(i2.getDate());
                case "%m":
                  return e2 ? n2.date.to_fixed(i2.getUTCMonth() + 1) : n2.date.to_fixed(i2.getMonth() + 1);
                case "%j":
                  return e2 ? i2.getUTCDate() : i2.getDate();
                case "%n":
                  return e2 ? i2.getUTCMonth() + 1 : i2.getMonth() + 1;
                case "%y":
                  return e2 ? n2.date.to_fixed(i2.getUTCFullYear() % 100) : n2.date.to_fixed(i2.getFullYear() % 100);
                case "%Y":
                  return e2 ? i2.getUTCFullYear() : i2.getFullYear();
                case "%D":
                  return e2 ? n2.locale.date.day_short[i2.getUTCDay()] : n2.locale.date.day_short[i2.getDay()];
                case "%l":
                  return e2 ? n2.locale.date.day_full[i2.getUTCDay()] : n2.locale.date.day_full[i2.getDay()];
                case "%M":
                  return e2 ? n2.locale.date.month_short[i2.getUTCMonth()] : n2.locale.date.month_short[i2.getMonth()];
                case "%F":
                  return e2 ? n2.locale.date.month_full[i2.getUTCMonth()] : n2.locale.date.month_full[i2.getMonth()];
                case "%h":
                  return e2 ? n2.date.to_fixed((i2.getUTCHours() + 11) % 12 + 1) : n2.date.to_fixed((i2.getHours() + 11) % 12 + 1);
                case "%g":
                  return e2 ? (i2.getUTCHours() + 11) % 12 + 1 : (i2.getHours() + 11) % 12 + 1;
                case "%G":
                  return e2 ? i2.getUTCHours() : i2.getHours();
                case "%H":
                  return e2 ? n2.date.to_fixed(i2.getUTCHours()) : n2.date.to_fixed(i2.getHours());
                case "%i":
                  return e2 ? n2.date.to_fixed(i2.getUTCMinutes()) : n2.date.to_fixed(i2.getMinutes());
                case "%a":
                  return e2 ? i2.getUTCHours() > 11 ? "pm" : "am" : i2.getHours() > 11 ? "pm" : "am";
                case "%A":
                  return e2 ? i2.getUTCHours() > 11 ? "PM" : "AM" : i2.getHours() > 11 ? "PM" : "AM";
                case "%s":
                  return e2 ? n2.date.to_fixed(i2.getUTCSeconds()) : n2.date.to_fixed(i2.getSeconds());
                case "%W":
                  return e2 ? n2.date.to_fixed(n2.date.getUTCISOWeek(i2)) : n2.date.to_fixed(n2.date.getISOWeek(i2));
                default:
                  return t3;
              }
            });
          };
        }, str_to_date: function(t2, e2, n2) {
          return function(i2) {
            for (var r = [0, 0, 1, 0, 0, 0], a = i2.match(/[a-zA-Z]+|[0-9]+/g), o = t2.match(/%[a-zA-Z]/g), s = 0; s < o.length; s++) switch (o[s]) {
              case "%j":
              case "%d":
                r[2] = a[s] || 1;
                break;
              case "%n":
              case "%m":
                r[1] = (a[s] || 1) - 1;
                break;
              case "%y":
                r[0] = 1 * a[s] + (a[s] > 50 ? 1900 : 2e3);
                break;
              case "%g":
              case "%G":
              case "%h":
              case "%H":
                r[3] = a[s] || 0;
                break;
              case "%i":
                r[4] = a[s] || 0;
                break;
              case "%Y":
                r[0] = a[s] || 0;
                break;
              case "%a":
              case "%A":
                r[3] = r[3] % 12 + ("am" === (a[s] || "").toLowerCase() ? 0 : 12);
                break;
              case "%s":
                r[5] = a[s] || 0;
                break;
              case "%M":
                r[1] = n2.locale.date.month_short_hash[a[s]] || 0;
                break;
              case "%F":
                r[1] = n2.locale.date.month_full_hash[a[s]] || 0;
            }
            return e2 ? new Date(Date.UTC(r[0], r[1], r[2], r[3], r[4], r[5])) : new Date(r[0], r[1], r[2], r[3], r[4], r[5]);
          };
        } };
        e.default = i;
      }, function(t, e, n) {
        var i = n(4), r = n(0), a = n(30), o = n(12), s = n(1);
        t.exports = function(t2) {
          function e2(t3) {
            return { target: t3.target || t3.srcElement, pageX: t3.pageX, pageY: t3.pageY, clientX: t3.clientX, clientY: t3.clientY, metaKey: t3.metaKey, shiftKey: t3.shiftKey, ctrlKey: t3.ctrlKey, altKey: t3.altKey };
          }
          function n2(n3, a2) {
            this._obj = n3, this._settings = a2 || {}, i(this);
            var o2 = this.getInputMethods();
            this._drag_start_timer = null, t2.attachEvent("onGanttScroll", r.bind(function(t3, e3) {
              this.clearDragTimer();
            }, this));
            for (var l = { passive: false }, c = 0; c < o2.length; c++) r.bind(function(i2) {
              t2.event(n3, i2.down, r.bind(function(o4) {
                i2.accessor(o4) && (a2.preventDefault && a2.selector && s.closest(o4.target, a2.selector) && o4.preventDefault(), t2.config.touch && o4.timeStamp && o4.timeStamp - 0 < 300 || (this._settings.original_target = e2(o4), t2.config.touch ? (this.clearDragTimer(), this._drag_start_timer = setTimeout(r.bind(function() {
                  t2.getState().lightbox || this.dragStart(n3, o4, i2);
                }, this), t2.config.touch_drag)) : this.dragStart(n3, o4, i2)));
              }, this), l);
              var o3 = document.body;
              t2.event(o3, i2.up, r.bind(function(t3) {
                i2.accessor(t3) && this.clearDragTimer();
              }, this), l);
            }, this)(o2[c]);
          }
          return n2.prototype = { traceDragEvents: function(e3, n3) {
            var i2 = r.bind(function(t3) {
              return this.dragMove(e3, t3, n3.accessor);
            }, this);
            r.bind(function(t3) {
              return this.dragScroll(e3, t3);
            }, this);
            var o2 = r.bind(function(t3) {
              if (!this.config.started || !r.defined(this.config.updates_per_second) || a(this, this.config.updates_per_second)) {
                var e4 = i2(t3);
                if (e4) try {
                  t3 && t3.preventDefault && t3.cancelable && t3.preventDefault();
                } catch (t4) {
                }
                return e4;
              }
            }, this), l = s.getRootNode(t2.$root), c = this.config.mousemoveContainer || s.getRootNode(t2.$root), u = { passive: false }, d = r.bind(function(i3) {
              return t2.eventRemove(c, n3.move, o2), t2.eventRemove(l, n3.up, d, u), this.dragEnd(e3);
            }, this);
            t2.event(c, n3.move, o2, u), t2.event(l, n3.up, d, u);
          }, checkPositionChange: function(t3) {
            var e3 = t3.x - this.config.pos.x, n3 = t3.y - this.config.pos.y;
            return Math.sqrt(Math.pow(Math.abs(e3), 2) + Math.pow(Math.abs(n3), 2)) > this.config.sensitivity;
          }, initDnDMarker: function() {
            var t3 = this.config.marker = document.createElement("div");
            t3.className = "gantt_drag_marker", t3.innerHTML = "", document.body.appendChild(t3);
          }, backupEventTarget: function(n3, i2) {
            if (t2.config.touch) {
              var r2 = i2(n3), a2 = r2.target || r2.srcElement, o2 = a2.cloneNode(true);
              this.config.original_target = e2(r2), this.config.original_target.target = o2, this.config.backup_element = a2, a2.parentNode.appendChild(o2), a2.style.display = "none", (this.config.mousemoveContainer || document.body).appendChild(a2);
            }
          }, getInputMethods: function() {
            var e3 = [];
            if (e3.push({ move: "mousemove", down: "mousedown", up: "mouseup", accessor: function(t3) {
              return t3;
            } }), t2.config.touch) {
              var n3 = true;
              try {
                document.createEvent("TouchEvent");
              } catch (t3) {
                n3 = false;
              }
              n3 ? e3.push({ move: "touchmove", down: "touchstart", up: "touchend", accessor: function(t3) {
                return t3.touches && t3.touches.length > 1 ? null : t3.touches[0] ? { target: document.elementFromPoint(t3.touches[0].clientX, t3.touches[0].clientY), pageX: t3.touches[0].pageX, pageY: t3.touches[0].pageY, clientX: t3.touches[0].clientX, clientY: t3.touches[0].clientY } : t3;
              } }) : o.navigator.pointerEnabled ? e3.push({ move: "pointermove", down: "pointerdown", up: "pointerup", accessor: function(t3) {
                return "mouse" == t3.pointerType ? null : t3;
              } }) : o.navigator.msPointerEnabled && e3.push({ move: "MSPointerMove", down: "MSPointerDown", up: "MSPointerUp", accessor: function(t3) {
                return t3.pointerType == t3.MSPOINTER_TYPE_MOUSE ? null : t3;
              } });
            }
            return e3;
          }, clearDragTimer: function() {
            this._drag_start_timer && (clearTimeout(this._drag_start_timer), this._drag_start_timer = null);
          }, dragStart: function(e3, n3, i2) {
            this.config && this.config.started || (this.config = { obj: e3, marker: null, started: false, pos: this.getPosition(n3), sensitivity: 4 }, this._settings && r.mixin(this.config, this._settings, true), this.traceDragEvents(e3, i2), t2._prevent_touch_scroll = true, document.body.className += " gantt_noselect", t2.config.touch && this.dragMove(e3, n3, i2.accessor));
          }, dragMove: function(e3, n3, i2) {
            var r2 = i2(n3);
            if (!r2) return false;
            if (!this.config.marker && !this.config.started) {
              var a2 = this.getPosition(r2);
              if (t2.config.touch || this.checkPositionChange(a2)) {
                if (this.config.started = true, this.config.ignore = false, false === this.callEvent("onBeforeDragStart", [e3, this.config.original_target])) return this.config.ignore = true, false;
                this.backupEventTarget(n3, i2), this.initDnDMarker(), t2._touch_feedback(), this.callEvent("onAfterDragStart", [e3, this.config.original_target]);
              } else this.config.ignore = true;
            }
            if (!this.config.ignore) {
              if (n3.targetTouches && !r2.target) return;
              return r2.pos = this.getPosition(r2), this.config.marker.style.left = r2.pos.x + "px", this.config.marker.style.top = r2.pos.y + "px", this.callEvent("onDragMove", [e3, r2]), true;
            }
            return false;
          }, dragEnd: function(e3) {
            var n3 = this.config.backup_element;
            n3 && n3.parentNode && n3.parentNode.removeChild(n3), t2._prevent_touch_scroll = false, this.config.marker && (this.config.marker.parentNode.removeChild(this.config.marker), this.config.marker = null, this.callEvent("onDragEnd", [])), this.config.started = false, document.body.className = document.body.className.replace(" gantt_noselect", "");
          }, getPosition: function(t3) {
            var e3 = 0, n3 = 0;
            return t3.pageX || t3.pageY ? (e3 = t3.pageX, n3 = t3.pageY) : (t3.clientX || t3.clientY) && (e3 = t3.clientX + document.body.scrollLeft + document.documentElement.scrollLeft, n3 = t3.clientY + document.body.scrollTop + document.documentElement.scrollTop), { x: e3, y: n3 };
          } }, n2;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = {};
          function n(n2, i, r) {
            r = r || n2;
            var a = t2.config, o = t2.templates;
            t2.config[n2] && e2[r] != a[n2] && (i && o[r] || (o[r] = t2.date.date_to_str(a[n2]), e2[r] = a[n2]));
          }
          return { initTemplates: function() {
            var e3 = t2.locale.labels;
            e3.gantt_save_btn = e3.icon_save, e3.gantt_cancel_btn = e3.icon_cancel, e3.gantt_delete_btn = e3.icon_delete;
            var i = t2.date, r = i.date_to_str, a = t2.config, o = r(a.xml_date || a.date_format, a.server_utc), s = i.str_to_date(a.xml_date || a.date_format, a.server_utc);
            n("date_scale", true, void 0, t2.config, t2.templates), n("date_grid", true, "grid_date_format", t2.config, t2.templates), n("task_date", true, void 0, t2.config, t2.templates), t2.mixin(t2.templates, { xml_format: void 0, format_date: o, xml_date: void 0, parse_date: s, progress_text: function(t3, e4, n2) {
              return "";
            }, grid_header_class: function(t3, e4) {
              return "";
            }, task_text: function(t3, e4, n2) {
              return n2.text;
            }, task_class: function(t3, e4, n2) {
              return "";
            }, task_end_date: function(e4) {
              return t2.templates.task_date(e4);
            }, grid_row_class: function(t3, e4, n2) {
              return "";
            }, task_row_class: function(t3, e4, n2) {
              return "";
            }, timeline_cell_class: function(t3, e4) {
              return "";
            }, scale_cell_class: function(t3) {
              return "";
            }, scale_row_class: function(t3) {
              return "";
            }, grid_indent: function(t3) {
              return "<div class='gantt_tree_indent'></div>";
            }, grid_folder: function(t3) {
              return "<div class='gantt_tree_icon gantt_folder_" + (t3.$open ? "open" : "closed") + "'></div>";
            }, grid_file: function(t3) {
              return "<div class='gantt_tree_icon gantt_file'></div>";
            }, grid_open: function(t3) {
              return "<div class='gantt_tree_icon gantt_" + (t3.$open ? "close" : "open") + "'></div>";
            }, grid_blank: function(t3) {
              return "<div class='gantt_tree_icon gantt_blank'></div>";
            }, date_grid: function(e4, n2, i2) {
              return n2 && t2.isUnscheduledTask(n2) && t2.config.show_unscheduled ? t2.templates.task_unscheduled_time(n2) : t2.templates.grid_date_format(e4, i2);
            }, task_time: function(e4, n2, i2) {
              return t2.isUnscheduledTask(i2) && t2.config.show_unscheduled ? t2.templates.task_unscheduled_time(i2) : t2.templates.task_date(e4) + " - " + t2.templates.task_end_date(n2);
            }, task_unscheduled_time: function(t3) {
              return "";
            }, time_picker: r(a.time_picker), link_class: function(t3) {
              return "";
            }, link_description: function(e4) {
              var n2 = t2.getTask(e4.source), i2 = t2.getTask(e4.target);
              return "<b>" + n2.text + "</b> &ndash;  <b>" + i2.text + "</b>";
            }, drag_link: function(e4, n2, i2, r2) {
              e4 = t2.getTask(e4);
              var a2 = t2.locale.labels, o2 = "<b>" + e4.text + "</b> " + (n2 ? a2.link_start : a2.link_end) + "<br/>";
              return i2 && (o2 += "<b> " + (i2 = t2.getTask(i2)).text + "</b> " + (r2 ? a2.link_start : a2.link_end) + "<br/>"), o2;
            }, drag_link_class: function(e4, n2, i2, r2) {
              var a2 = "";
              return e4 && i2 && (a2 = " " + (t2.isLinkAllowed(e4, i2, n2, r2) ? "gantt_link_allow" : "gantt_link_deny")), "gantt_link_tooltip" + a2;
            }, tooltip_date_format: i.date_to_str("%Y-%m-%d"), tooltip_text: function(e4, n2, i2) {
              return "<b>Task:</b> " + i2.text + "<br/><b>Start date:</b> " + t2.templates.tooltip_date_format(e4) + "<br/><b>End date:</b> " + t2.templates.tooltip_date_format(n2);
            } });
          }, initTemplate: n };
        };
      }, function(t, e, n) {
        var i = n(0);
        t.exports = function() {
          var t2 = {};
          return { getState: function(e2) {
            if (t2[e2]) return t2[e2].method();
            var n2 = {};
            for (var r in t2) t2[r].internal || i.mixin(n2, t2[r].method(), true);
            return n2;
          }, registerProvider: function(e2, n2, i2) {
            t2[e2] = { method: n2, internal: i2 };
          }, unregisterProvider: function(e2) {
            delete t2[e2];
          } };
        };
      }, function(t, e, n) {
        t.exports = n(107);
      }, function(t, e, n) {
        (function(n2, i, r) {
          var a, o, s;
          function l(t2) {
            "@babel/helpers - typeof";
            return (l = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
              return typeof t3;
            } : function(t3) {
              return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
            })(t2);
          }
          /* @preserve
           * The MIT License (MIT)
           * 
           * Copyright (c) 2013-2018 Petka Antonov
           * 
           * Permission is hereby granted, free of charge, to any person obtaining a copy
           * of this software and associated documentation files (the "Software"), to deal
           * in the Software without restriction, including without limitation the rights
           * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
           * copies of the Software, and to permit persons to whom the Software is
           * furnished to do so, subject to the following conditions:
           * 
           * The above copyright notice and this permission notice shall be included in
           * all copies or substantial portions of the Software.
           * 
           * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
           * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
           * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.  IN NO EVENT SHALL THE
           * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
           * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
           * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
           * THE SOFTWARE.
           * 
           */
          !function(n3) {
            "object" == l(e) && void 0 !== t ? t.exports = n3() : (o = [], void 0 === (s = "function" == typeof (a = n3) ? a.apply(e, o) : a) || (t.exports = s));
          }(function() {
            return function t2(e2, n3, i2) {
              function r2(o3, s2) {
                if (!n3[o3]) {
                  if (!e2[o3]) {
                    var l2 = "function" == typeof _dereq_ && _dereq_;
                    if (!s2 && l2) return l2(o3, true);
                    if (a2) return a2(o3, true);
                    var c = new Error("Cannot find module '" + o3 + "'");
                    throw c.code = "MODULE_NOT_FOUND", c;
                  }
                  var u = n3[o3] = { exports: {} };
                  e2[o3][0].call(u.exports, function(t3) {
                    var n4 = e2[o3][1][t3];
                    return r2(n4 || t3);
                  }, u, u.exports, t2, e2, n3, i2);
                }
                return n3[o3].exports;
              }
              for (var a2 = "function" == typeof _dereq_ && _dereq_, o2 = 0; o2 < i2.length; o2++) r2(i2[o2]);
              return r2;
            }({ 1: [function(t2, e2, n3) {
              e2.exports = function(t3) {
                var e3 = t3._SomePromiseArray;
                function n4(t4) {
                  var n5 = new e3(t4), i2 = n5.promise();
                  return n5.setHowMany(1), n5.setUnwrap(), n5.init(), i2;
                }
                t3.any = function(t4) {
                  return n4(t4);
                }, t3.prototype.any = function() {
                  return n4(this);
                };
              };
            }, {}], 2: [function(t2, e2, i2) {
              var r2;
              try {
                throw new Error();
              } catch (t3) {
                r2 = t3;
              }
              var a2 = t2("./schedule"), o2 = t2("./queue"), s2 = t2("./util");
              function l2() {
                this._customScheduler = false, this._isTickUsed = false, this._lateQueue = new o2(16), this._normalQueue = new o2(16), this._haveDrainedQueues = false, this._trampolineEnabled = true;
                var t3 = this;
                this.drainQueues = function() {
                  t3._drainQueues();
                }, this._schedule = a2;
              }
              function c(t3, e3, n3) {
                this._lateQueue.push(t3, e3, n3), this._queueTick();
              }
              function u(t3, e3, n3) {
                this._normalQueue.push(t3, e3, n3), this._queueTick();
              }
              function d(t3) {
                this._normalQueue._pushOne(t3), this._queueTick();
              }
              function h(t3) {
                for (; t3.length() > 0; ) f(t3);
              }
              function f(t3) {
                var e3 = t3.shift();
                if ("function" != typeof e3) e3._settlePromises();
                else {
                  var n3 = t3.shift(), i3 = t3.shift();
                  e3.call(n3, i3);
                }
              }
              l2.prototype.setScheduler = function(t3) {
                var e3 = this._schedule;
                return this._schedule = t3, this._customScheduler = true, e3;
              }, l2.prototype.hasCustomScheduler = function() {
                return this._customScheduler;
              }, l2.prototype.enableTrampoline = function() {
                this._trampolineEnabled = true;
              }, l2.prototype.disableTrampolineIfNecessary = function() {
                s2.hasDevTools && (this._trampolineEnabled = false);
              }, l2.prototype.haveItemsQueued = function() {
                return this._isTickUsed || this._haveDrainedQueues;
              }, l2.prototype.fatalError = function(t3, e3) {
                e3 ? (n2.stderr.write("Fatal " + (t3 instanceof Error ? t3.stack : t3) + "\n"), n2.exit(2)) : this.throwLater(t3);
              }, l2.prototype.throwLater = function(t3, e3) {
                if (1 === arguments.length && (e3 = t3, t3 = function() {
                  throw e3;
                }), "undefined" != typeof setTimeout) setTimeout(function() {
                  t3(e3);
                }, 0);
                else try {
                  this._schedule(function() {
                    t3(e3);
                  });
                } catch (t4) {
                  throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
                }
              }, s2.hasDevTools ? (l2.prototype.invokeLater = function(t3, e3, n3) {
                this._trampolineEnabled ? c.call(this, t3, e3, n3) : this._schedule(function() {
                  setTimeout(function() {
                    t3.call(e3, n3);
                  }, 100);
                });
              }, l2.prototype.invoke = function(t3, e3, n3) {
                this._trampolineEnabled ? u.call(this, t3, e3, n3) : this._schedule(function() {
                  t3.call(e3, n3);
                });
              }, l2.prototype.settlePromises = function(t3) {
                this._trampolineEnabled ? d.call(this, t3) : this._schedule(function() {
                  t3._settlePromises();
                });
              }) : (l2.prototype.invokeLater = c, l2.prototype.invoke = u, l2.prototype.settlePromises = d), l2.prototype._drainQueues = function() {
                h(this._normalQueue), this._reset(), this._haveDrainedQueues = true, h(this._lateQueue);
              }, l2.prototype._queueTick = function() {
                this._isTickUsed || (this._isTickUsed = true, this._schedule(this.drainQueues));
              }, l2.prototype._reset = function() {
                this._isTickUsed = false;
              }, e2.exports = l2, e2.exports.firstLineError = r2;
            }, { "./queue": 26, "./schedule": 29, "./util": 36 }], 3: [function(t2, e2, n3) {
              e2.exports = function(t3, e3, n4, i2) {
                var r2 = false, a2 = function(t4, e4) {
                  this._reject(e4);
                }, o2 = function(t4, e4) {
                  e4.promiseRejectionQueued = true, e4.bindingPromise._then(a2, a2, null, this, t4);
                }, s2 = function(t4, e4) {
                  0 == (50397184 & this._bitField) && this._resolveCallback(e4.target);
                }, l2 = function(t4, e4) {
                  e4.promiseRejectionQueued || this._reject(t4);
                };
                t3.prototype.bind = function(a3) {
                  r2 || (r2 = true, t3.prototype._propagateFrom = i2.propagateFromFunction(), t3.prototype._boundValue = i2.boundValueFunction());
                  var c = n4(a3), u = new t3(e3);
                  u._propagateFrom(this, 1);
                  var d = this._target();
                  if (u._setBoundTo(c), c instanceof t3) {
                    var h = { promiseRejectionQueued: false, promise: u, target: d, bindingPromise: c };
                    d._then(e3, o2, void 0, u, h), c._then(s2, l2, void 0, u, h), u._setOnCancel(c);
                  } else u._resolveCallback(d);
                  return u;
                }, t3.prototype._setBoundTo = function(t4) {
                  void 0 !== t4 ? (this._bitField = 2097152 | this._bitField, this._boundTo = t4) : this._bitField = -2097153 & this._bitField;
                }, t3.prototype._isBound = function() {
                  return 2097152 == (2097152 & this._bitField);
                }, t3.bind = function(e4, n5) {
                  return t3.resolve(n5).bind(e4);
                };
              };
            }, {}], 4: [function(t2, e2, n3) {
              var i2;
              "undefined" != typeof Promise && (i2 = Promise);
              var r2 = t2("./promise")();
              r2.noConflict = function() {
                try {
                  Promise === r2 && (Promise = i2);
                } catch (t3) {
                }
                return r2;
              }, e2.exports = r2;
            }, { "./promise": 22 }], 5: [function(t2, e2, n3) {
              var i2 = Object.create;
              if (i2) {
                var r2 = i2(null), a2 = i2(null);
                r2[" size"] = a2[" size"] = 0;
              }
              e2.exports = function(e3) {
                var n4 = t2("./util"), i3 = n4.canEvaluate;
                n4.isIdentifier;
                function r3(t3) {
                  return function(t4, i4) {
                    var r4;
                    if (null != t4 && (r4 = t4[i4]), "function" != typeof r4) {
                      var a4 = "Object " + n4.classString(t4) + " has no method '" + n4.toString(i4) + "'";
                      throw new e3.TypeError(a4);
                    }
                    return r4;
                  }(t3, this.pop()).apply(t3, this);
                }
                function a3(t3) {
                  return t3[this];
                }
                function o2(t3) {
                  var e4 = +this;
                  return e4 < 0 && (e4 = Math.max(0, e4 + t3.length)), t3[e4];
                }
                e3.prototype.call = function(t3) {
                  var e4 = [].slice.call(arguments, 1);
                  return e4.push(t3), this._then(r3, void 0, void 0, e4, void 0);
                }, e3.prototype.get = function(t3) {
                  var e4;
                  if ("number" == typeof t3) e4 = o2;
                  else if (i3) {
                    var n5 = (void 0)(t3);
                    e4 = null !== n5 ? n5 : a3;
                  } else e4 = a3;
                  return this._then(e4, void 0, void 0, t3, void 0);
                };
              };
            }, { "./util": 36 }], 6: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2) {
                var a2 = t2("./util"), o2 = a2.tryCatch, s2 = a2.errorObj, l2 = e3._async;
                e3.prototype.break = e3.prototype.cancel = function() {
                  if (!r2.cancellation()) return this._warn("cancellation is disabled");
                  for (var t3 = this, e4 = t3; t3._isCancellable(); ) {
                    if (!t3._cancelBy(e4)) {
                      e4._isFollowing() ? e4._followee().cancel() : e4._cancelBranched();
                      break;
                    }
                    var n5 = t3._cancellationParent;
                    if (null == n5 || !n5._isCancellable()) {
                      t3._isFollowing() ? t3._followee().cancel() : t3._cancelBranched();
                      break;
                    }
                    t3._isFollowing() && t3._followee().cancel(), t3._setWillBeCancelled(), e4 = t3, t3 = n5;
                  }
                }, e3.prototype._branchHasCancelled = function() {
                  this._branchesRemainingToCancel--;
                }, e3.prototype._enoughBranchesHaveCancelled = function() {
                  return void 0 === this._branchesRemainingToCancel || this._branchesRemainingToCancel <= 0;
                }, e3.prototype._cancelBy = function(t3) {
                  return t3 === this ? (this._branchesRemainingToCancel = 0, this._invokeOnCancel(), true) : (this._branchHasCancelled(), !!this._enoughBranchesHaveCancelled() && (this._invokeOnCancel(), true));
                }, e3.prototype._cancelBranched = function() {
                  this._enoughBranchesHaveCancelled() && this._cancel();
                }, e3.prototype._cancel = function() {
                  this._isCancellable() && (this._setCancelled(), l2.invoke(this._cancelPromises, this, void 0));
                }, e3.prototype._cancelPromises = function() {
                  this._length() > 0 && this._settlePromises();
                }, e3.prototype._unsetOnCancel = function() {
                  this._onCancelField = void 0;
                }, e3.prototype._isCancellable = function() {
                  return this.isPending() && !this._isCancelled();
                }, e3.prototype.isCancellable = function() {
                  return this.isPending() && !this.isCancelled();
                }, e3.prototype._doInvokeOnCancel = function(t3, e4) {
                  if (a2.isArray(t3)) for (var n5 = 0; n5 < t3.length; ++n5) this._doInvokeOnCancel(t3[n5], e4);
                  else if (void 0 !== t3) if ("function" == typeof t3) {
                    if (!e4) {
                      var i3 = o2(t3).call(this._boundValue());
                      i3 === s2 && (this._attachExtraTrace(i3.e), l2.throwLater(i3.e));
                    }
                  } else t3._resultCancelled(this);
                }, e3.prototype._invokeOnCancel = function() {
                  var t3 = this._onCancel();
                  this._unsetOnCancel(), l2.invoke(this._doInvokeOnCancel, this, t3);
                }, e3.prototype._invokeInternalOnCancel = function() {
                  this._isCancellable() && (this._doInvokeOnCancel(this._onCancel(), true), this._unsetOnCancel());
                }, e3.prototype._resultCancelled = function() {
                  this.cancel();
                };
              };
            }, { "./util": 36 }], 7: [function(t2, e2, n3) {
              e2.exports = function(e3) {
                var n4 = t2("./util"), i2 = t2("./es5").keys, r2 = n4.tryCatch, a2 = n4.errorObj;
                return function(t3, o2, s2) {
                  return function(l2) {
                    var c = s2._boundValue();
                    t: for (var u = 0; u < t3.length; ++u) {
                      var d = t3[u];
                      if (d === Error || null != d && d.prototype instanceof Error) {
                        if (l2 instanceof d) return r2(o2).call(c, l2);
                      } else if ("function" == typeof d) {
                        var h = r2(d).call(c, l2);
                        if (h === a2) return h;
                        if (h) return r2(o2).call(c, l2);
                      } else if (n4.isObject(l2)) {
                        for (var f = i2(d), _ = 0; _ < f.length; ++_) {
                          var g = f[_];
                          if (d[g] != l2[g]) continue t;
                        }
                        return r2(o2).call(c, l2);
                      }
                    }
                    return e3;
                  };
                };
              };
            }, { "./es5": 13, "./util": 36 }], 8: [function(t2, e2, n3) {
              e2.exports = function(t3) {
                var e3 = false, n4 = [];
                function i2() {
                  this._trace = new i2.CapturedTrace(r2());
                }
                function r2() {
                  var t4 = n4.length - 1;
                  if (t4 >= 0) return n4[t4];
                }
                return t3.prototype._promiseCreated = function() {
                }, t3.prototype._pushContext = function() {
                }, t3.prototype._popContext = function() {
                  return null;
                }, t3._peekContext = t3.prototype._peekContext = function() {
                }, i2.prototype._pushContext = function() {
                  void 0 !== this._trace && (this._trace._promiseCreated = null, n4.push(this._trace));
                }, i2.prototype._popContext = function() {
                  if (void 0 !== this._trace) {
                    var t4 = n4.pop(), e4 = t4._promiseCreated;
                    return t4._promiseCreated = null, e4;
                  }
                  return null;
                }, i2.CapturedTrace = null, i2.create = function() {
                  if (e3) return new i2();
                }, i2.deactivateLongStackTraces = function() {
                }, i2.activateLongStackTraces = function() {
                  var n5 = t3.prototype._pushContext, a2 = t3.prototype._popContext, o2 = t3._peekContext, s2 = t3.prototype._peekContext, l2 = t3.prototype._promiseCreated;
                  i2.deactivateLongStackTraces = function() {
                    t3.prototype._pushContext = n5, t3.prototype._popContext = a2, t3._peekContext = o2, t3.prototype._peekContext = s2, t3.prototype._promiseCreated = l2, e3 = false;
                  }, e3 = true, t3.prototype._pushContext = i2.prototype._pushContext, t3.prototype._popContext = i2.prototype._popContext, t3._peekContext = t3.prototype._peekContext = r2, t3.prototype._promiseCreated = function() {
                    var t4 = this._peekContext();
                    t4 && null == t4._promiseCreated && (t4._promiseCreated = this);
                  };
                }, i2;
              };
            }, {}], 9: [function(t2, e2, i2) {
              e2.exports = function(e3, i3) {
                var r2, a2, o2, s2 = e3._getDomain, c = e3._async, u = t2("./errors").Warning, d = t2("./util"), h = t2("./es5"), f = d.canAttachTrace, _ = /[\\\/]bluebird[\\\/]js[\\\/](release|debug|instrumented)/, g = /\((?:timers\.js):\d+:\d+\)/, p = /[\/<\(](.+?):(\d+):(\d+)\)?\s*$/, v = null, m = null, y = false, k = !(0 == d.env("BLUEBIRD_DEBUG")), b = !(0 == d.env("BLUEBIRD_WARNINGS") || !k && !d.env("BLUEBIRD_WARNINGS")), w = !(0 == d.env("BLUEBIRD_LONG_STACK_TRACES") || !k && !d.env("BLUEBIRD_LONG_STACK_TRACES")), x = 0 != d.env("BLUEBIRD_W_FORGOTTEN_RETURN") && (b || !!d.env("BLUEBIRD_W_FORGOTTEN_RETURN"));
                e3.prototype.suppressUnhandledRejections = function() {
                  var t3 = this._target();
                  t3._bitField = -1048577 & t3._bitField | 524288;
                }, e3.prototype._ensurePossibleRejectionHandled = function() {
                  if (0 == (524288 & this._bitField)) {
                    this._setRejectionIsUnhandled();
                    var t3 = this;
                    setTimeout(function() {
                      t3._notifyUnhandledRejection();
                    }, 1);
                  }
                }, e3.prototype._notifyUnhandledRejectionIsHandled = function() {
                  q("rejectionHandled", r2, void 0, this);
                }, e3.prototype._setReturnedNonUndefined = function() {
                  this._bitField = 268435456 | this._bitField;
                }, e3.prototype._returnedNonUndefined = function() {
                  return 0 != (268435456 & this._bitField);
                }, e3.prototype._notifyUnhandledRejection = function() {
                  if (this._isRejectionUnhandled()) {
                    var t3 = this._settledValue();
                    this._setUnhandledRejectionIsNotified(), q("unhandledRejection", a2, t3, this);
                  }
                }, e3.prototype._setUnhandledRejectionIsNotified = function() {
                  this._bitField = 262144 | this._bitField;
                }, e3.prototype._unsetUnhandledRejectionIsNotified = function() {
                  this._bitField = -262145 & this._bitField;
                }, e3.prototype._isUnhandledRejectionNotified = function() {
                  return (262144 & this._bitField) > 0;
                }, e3.prototype._setRejectionIsUnhandled = function() {
                  this._bitField = 1048576 | this._bitField;
                }, e3.prototype._unsetRejectionIsUnhandled = function() {
                  this._bitField = -1048577 & this._bitField, this._isUnhandledRejectionNotified() && (this._unsetUnhandledRejectionIsNotified(), this._notifyUnhandledRejectionIsHandled());
                }, e3.prototype._isRejectionUnhandled = function() {
                  return (1048576 & this._bitField) > 0;
                }, e3.prototype._warn = function(t3, e4, n3) {
                  return z(t3, e4, n3 || this);
                }, e3.onPossiblyUnhandledRejection = function(t3) {
                  var e4 = s2();
                  a2 = "function" == typeof t3 ? null === e4 ? t3 : d.domainBind(e4, t3) : void 0;
                }, e3.onUnhandledRejectionHandled = function(t3) {
                  var e4 = s2();
                  r2 = "function" == typeof t3 ? null === e4 ? t3 : d.domainBind(e4, t3) : void 0;
                };
                var $ = function() {
                };
                e3.longStackTraces = function() {
                  if (c.haveItemsQueued() && !tt.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                  if (!tt.longStackTraces && Y()) {
                    var t3 = e3.prototype._captureStackTrace, n3 = e3.prototype._attachExtraTrace, r3 = e3.prototype._dereferenceTrace;
                    tt.longStackTraces = true, $ = function() {
                      if (c.haveItemsQueued() && !tt.longStackTraces) throw new Error("cannot enable long stack traces after promises have been created\n\n    See http://goo.gl/MqrFmX\n");
                      e3.prototype._captureStackTrace = t3, e3.prototype._attachExtraTrace = n3, e3.prototype._dereferenceTrace = r3, i3.deactivateLongStackTraces(), c.enableTrampoline(), tt.longStackTraces = false;
                    }, e3.prototype._captureStackTrace = H, e3.prototype._attachExtraTrace = F, e3.prototype._dereferenceTrace = B, i3.activateLongStackTraces(), c.disableTrampolineIfNecessary();
                  }
                }, e3.hasLongStackTraces = function() {
                  return tt.longStackTraces && Y();
                };
                var S = function() {
                  try {
                    if ("function" == typeof CustomEvent) {
                      var t3 = new CustomEvent("CustomEvent");
                      return d.global.dispatchEvent(t3), function(t4, e4) {
                        var n3 = { detail: e4, cancelable: true };
                        h.defineProperty(n3, "promise", { value: e4.promise }), h.defineProperty(n3, "reason", { value: e4.reason });
                        var i4 = new CustomEvent(t4.toLowerCase(), n3);
                        return !d.global.dispatchEvent(i4);
                      };
                    }
                    if ("function" == typeof Event) {
                      t3 = new Event("CustomEvent");
                      return d.global.dispatchEvent(t3), function(t4, e4) {
                        var n3 = new Event(t4.toLowerCase(), { cancelable: true });
                        return n3.detail = e4, h.defineProperty(n3, "promise", { value: e4.promise }), h.defineProperty(n3, "reason", { value: e4.reason }), !d.global.dispatchEvent(n3);
                      };
                    }
                    return (t3 = document.createEvent("CustomEvent")).initCustomEvent("testingtheevent", false, true, {}), d.global.dispatchEvent(t3), function(t4, e4) {
                      var n3 = document.createEvent("CustomEvent");
                      return n3.initCustomEvent(t4.toLowerCase(), false, true, e4), !d.global.dispatchEvent(n3);
                    };
                  } catch (t4) {
                  }
                  return function() {
                    return false;
                  };
                }(), T = d.isNode ? function() {
                  return n2.emit.apply(n2, arguments);
                } : d.global ? function(t3) {
                  var e4 = "on" + t3.toLowerCase(), n3 = d.global[e4];
                  return !!n3 && (n3.apply(d.global, [].slice.call(arguments, 1)), true);
                } : function() {
                  return false;
                };
                function C(t3, e4) {
                  return { promise: e4 };
                }
                var E = { promiseCreated: C, promiseFulfilled: C, promiseRejected: C, promiseResolved: C, promiseCancelled: C, promiseChained: function(t3, e4, n3) {
                  return { promise: e4, child: n3 };
                }, warning: function(t3, e4) {
                  return { warning: e4 };
                }, unhandledRejection: function(t3, e4, n3) {
                  return { reason: e4, promise: n3 };
                }, rejectionHandled: C }, D = function(t3) {
                  var e4 = false;
                  try {
                    e4 = T.apply(null, arguments);
                  } catch (t4) {
                    c.throwLater(t4), e4 = true;
                  }
                  var n3 = false;
                  try {
                    n3 = S(t3, E[t3].apply(null, arguments));
                  } catch (t4) {
                    c.throwLater(t4), n3 = true;
                  }
                  return n3 || e4;
                };
                function M() {
                  return false;
                }
                function A(t3, e4, n3) {
                  var i4 = this;
                  try {
                    t3(e4, n3, function(t4) {
                      if ("function" != typeof t4) throw new TypeError("onCancel must be a function, got: " + d.toString(t4));
                      i4._attachCancellationCallback(t4);
                    });
                  } catch (t4) {
                    return t4;
                  }
                }
                function I(t3) {
                  if (!this._isCancellable()) return this;
                  var e4 = this._onCancel();
                  void 0 !== e4 ? d.isArray(e4) ? e4.push(t3) : this._setOnCancel([e4, t3]) : this._setOnCancel(t3);
                }
                function N() {
                  return this._onCancelField;
                }
                function P(t3) {
                  this._onCancelField = t3;
                }
                function L() {
                  this._cancellationParent = void 0, this._onCancelField = void 0;
                }
                function O(t3, e4) {
                  if (0 != (1 & e4)) {
                    this._cancellationParent = t3;
                    var n3 = t3._branchesRemainingToCancel;
                    void 0 === n3 && (n3 = 0), t3._branchesRemainingToCancel = n3 + 1;
                  }
                  0 != (2 & e4) && t3._isBound() && this._setBoundTo(t3._boundTo);
                }
                e3.config = function(t3) {
                  if ("longStackTraces" in (t3 = Object(t3)) && (t3.longStackTraces ? e3.longStackTraces() : !t3.longStackTraces && e3.hasLongStackTraces() && $()), "warnings" in t3) {
                    var n3 = t3.warnings;
                    tt.warnings = !!n3, x = tt.warnings, d.isObject(n3) && "wForgottenReturn" in n3 && (x = !!n3.wForgottenReturn);
                  }
                  if ("cancellation" in t3 && t3.cancellation && !tt.cancellation) {
                    if (c.haveItemsQueued()) throw new Error("cannot enable cancellation after promises are in use");
                    e3.prototype._clearCancellationData = L, e3.prototype._propagateFrom = O, e3.prototype._onCancel = N, e3.prototype._setOnCancel = P, e3.prototype._attachCancellationCallback = I, e3.prototype._execute = A, R = O, tt.cancellation = true;
                  }
                  return "monitoring" in t3 && (t3.monitoring && !tt.monitoring ? (tt.monitoring = true, e3.prototype._fireEvent = D) : !t3.monitoring && tt.monitoring && (tt.monitoring = false, e3.prototype._fireEvent = M)), e3;
                }, e3.prototype._fireEvent = M, e3.prototype._execute = function(t3, e4, n3) {
                  try {
                    t3(e4, n3);
                  } catch (t4) {
                    return t4;
                  }
                }, e3.prototype._onCancel = function() {
                }, e3.prototype._setOnCancel = function(t3) {
                }, e3.prototype._attachCancellationCallback = function(t3) {
                }, e3.prototype._captureStackTrace = function() {
                }, e3.prototype._attachExtraTrace = function() {
                }, e3.prototype._dereferenceTrace = function() {
                }, e3.prototype._clearCancellationData = function() {
                }, e3.prototype._propagateFrom = function(t3, e4) {
                };
                var R = function(t3, e4) {
                  0 != (2 & e4) && t3._isBound() && this._setBoundTo(t3._boundTo);
                };
                function j() {
                  var t3 = this._boundTo;
                  return void 0 !== t3 && t3 instanceof e3 ? t3.isFulfilled() ? t3.value() : void 0 : t3;
                }
                function H() {
                  this._trace = new Q(this._peekContext());
                }
                function F(t3, e4) {
                  if (f(t3)) {
                    var n3 = this._trace;
                    if (void 0 !== n3 && e4 && (n3 = n3._parent), void 0 !== n3) n3.attachExtraTrace(t3);
                    else if (!t3.__stackCleaned__) {
                      var i4 = W(t3);
                      d.notEnumerableProp(t3, "stack", i4.message + "\n" + i4.stack.join("\n")), d.notEnumerableProp(t3, "__stackCleaned__", true);
                    }
                  }
                }
                function B() {
                  this._trace = void 0;
                }
                function z(t3, n3, i4) {
                  if (tt.warnings) {
                    var r3, a3 = new u(t3);
                    if (n3) i4._attachExtraTrace(a3);
                    else if (tt.longStackTraces && (r3 = e3._peekContext())) r3.attachExtraTrace(a3);
                    else {
                      var o3 = W(a3);
                      a3.stack = o3.message + "\n" + o3.stack.join("\n");
                    }
                    D("warning", a3) || U(a3, "", true);
                  }
                }
                function V(t3) {
                  for (var e4 = [], n3 = 0; n3 < t3.length; ++n3) {
                    var i4 = t3[n3], r3 = "    (No stack trace)" === i4 || v.test(i4), a3 = r3 && K(i4);
                    r3 && !a3 && (y && " " !== i4.charAt(0) && (i4 = "    " + i4), e4.push(i4));
                  }
                  return e4;
                }
                function W(t3) {
                  var e4 = t3.stack, n3 = t3.toString();
                  return e4 = "string" == typeof e4 && e4.length > 0 ? function(t4) {
                    for (var e5 = t4.stack.replace(/\s+$/g, "").split("\n"), n4 = 0; n4 < e5.length; ++n4) {
                      var i4 = e5[n4];
                      if ("    (No stack trace)" === i4 || v.test(i4)) break;
                    }
                    return n4 > 0 && "SyntaxError" != t4.name && (e5 = e5.slice(n4)), e5;
                  }(t3) : ["    (No stack trace)"], { message: n3, stack: "SyntaxError" == t3.name ? e4 : V(e4) };
                }
                function U(t3, e4, n3) {
                  if ("undefined" != typeof console) {
                    var i4;
                    if (d.isObject(t3)) {
                      var r3 = t3.stack;
                      i4 = e4 + m(r3, t3);
                    } else i4 = e4 + String(t3);
                    "function" == typeof o2 ? o2(i4, n3) : "function" != typeof console.log && "object" !== l(console.log) || console.log(i4);
                  }
                }
                function q(t3, e4, n3, i4) {
                  var r3 = false;
                  try {
                    "function" == typeof e4 && (r3 = true, "rejectionHandled" === t3 ? e4(i4) : e4(n3, i4));
                  } catch (t4) {
                    c.throwLater(t4);
                  }
                  "unhandledRejection" === t3 ? D(t3, n3, i4) || r3 || U(n3, "Unhandled rejection ") : D(t3, i4);
                }
                function G(t3) {
                  var e4;
                  if ("function" == typeof t3) e4 = "[function " + (t3.name || "anonymous") + "]";
                  else {
                    e4 = t3 && "function" == typeof t3.toString ? t3.toString() : d.toString(t3);
                    if (/\[object [a-zA-Z0-9$_]+\]/.test(e4)) try {
                      e4 = JSON.stringify(t3);
                    } catch (t4) {
                    }
                    0 === e4.length && (e4 = "(empty array)");
                  }
                  return "(<" + function(t4) {
                    if (t4.length < 41) return t4;
                    return t4.substr(0, 38) + "...";
                  }(e4) + ">, no stack trace)";
                }
                function Y() {
                  return "function" == typeof Z;
                }
                var K = function() {
                  return false;
                }, J = /[\/<\(]([^:\/]+):(\d+):(?:\d+)\)?\s*$/;
                function X(t3) {
                  var e4 = t3.match(J);
                  if (e4) return { fileName: e4[1], line: parseInt(e4[2], 10) };
                }
                function Q(t3) {
                  this._parent = t3, this._promisesCreated = 0;
                  var e4 = this._length = 1 + (void 0 === t3 ? 0 : t3._length);
                  Z(this, Q), e4 > 32 && this.uncycle();
                }
                d.inherits(Q, Error), i3.CapturedTrace = Q, Q.prototype.uncycle = function() {
                  var t3 = this._length;
                  if (!(t3 < 2)) {
                    for (var e4 = [], n3 = {}, i4 = 0, r3 = this; void 0 !== r3; ++i4) e4.push(r3), r3 = r3._parent;
                    for (i4 = (t3 = this._length = i4) - 1; i4 >= 0; --i4) {
                      var a3 = e4[i4].stack;
                      void 0 === n3[a3] && (n3[a3] = i4);
                    }
                    for (i4 = 0; i4 < t3; ++i4) {
                      var o3 = n3[e4[i4].stack];
                      if (void 0 !== o3 && o3 !== i4) {
                        o3 > 0 && (e4[o3 - 1]._parent = void 0, e4[o3 - 1]._length = 1), e4[i4]._parent = void 0, e4[i4]._length = 1;
                        var s3 = i4 > 0 ? e4[i4 - 1] : this;
                        o3 < t3 - 1 ? (s3._parent = e4[o3 + 1], s3._parent.uncycle(), s3._length = s3._parent._length + 1) : (s3._parent = void 0, s3._length = 1);
                        for (var l2 = s3._length + 1, c2 = i4 - 2; c2 >= 0; --c2) e4[c2]._length = l2, l2++;
                        return;
                      }
                    }
                  }
                }, Q.prototype.attachExtraTrace = function(t3) {
                  if (!t3.__stackCleaned__) {
                    this.uncycle();
                    for (var e4 = W(t3), n3 = e4.message, i4 = [e4.stack], r3 = this; void 0 !== r3; ) i4.push(V(r3.stack.split("\n"))), r3 = r3._parent;
                    !function(t4) {
                      for (var e5 = t4[0], n4 = 1; n4 < t4.length; ++n4) {
                        for (var i5 = t4[n4], r4 = e5.length - 1, a3 = e5[r4], o3 = -1, s3 = i5.length - 1; s3 >= 0; --s3) if (i5[s3] === a3) {
                          o3 = s3;
                          break;
                        }
                        for (s3 = o3; s3 >= 0; --s3) {
                          var l2 = i5[s3];
                          if (e5[r4] !== l2) break;
                          e5.pop(), r4--;
                        }
                        e5 = i5;
                      }
                    }(i4), function(t4) {
                      for (var e5 = 0; e5 < t4.length; ++e5) (0 === t4[e5].length || e5 + 1 < t4.length && t4[e5][0] === t4[e5 + 1][0]) && (t4.splice(e5, 1), e5--);
                    }(i4), d.notEnumerableProp(t3, "stack", function(t4, e5) {
                      for (var n4 = 0; n4 < e5.length - 1; ++n4) e5[n4].push("From previous event:"), e5[n4] = e5[n4].join("\n");
                      return n4 < e5.length && (e5[n4] = e5[n4].join("\n")), t4 + "\n" + e5.join("\n");
                    }(n3, i4)), d.notEnumerableProp(t3, "__stackCleaned__", true);
                  }
                };
                var Z = function() {
                  var t3 = /^\s*at\s*/, e4 = function(t4, e5) {
                    return "string" == typeof t4 ? t4 : void 0 !== e5.name && void 0 !== e5.message ? e5.toString() : G(e5);
                  };
                  if ("number" == typeof Error.stackTraceLimit && "function" == typeof Error.captureStackTrace) {
                    Error.stackTraceLimit += 6, v = t3, m = e4;
                    var n3 = Error.captureStackTrace;
                    return K = function(t4) {
                      return _.test(t4);
                    }, function(t4, e5) {
                      Error.stackTraceLimit += 6, n3(t4, e5), Error.stackTraceLimit -= 6;
                    };
                  }
                  var i4, r3 = new Error();
                  if ("string" == typeof r3.stack && r3.stack.split("\n")[0].indexOf("stackDetection@") >= 0) return v = /@/, m = e4, y = true, function(t4) {
                    t4.stack = new Error().stack;
                  };
                  try {
                    throw new Error();
                  } catch (t4) {
                    i4 = "stack" in t4;
                  }
                  return "stack" in r3 || !i4 || "number" != typeof Error.stackTraceLimit ? (m = function(t4, e5) {
                    return "string" == typeof t4 ? t4 : "object" !== l(e5) && "function" != typeof e5 || void 0 === e5.name || void 0 === e5.message ? G(e5) : e5.toString();
                  }, null) : (v = t3, m = e4, function(t4) {
                    Error.stackTraceLimit += 6;
                    try {
                      throw new Error();
                    } catch (e5) {
                      t4.stack = e5.stack;
                    }
                    Error.stackTraceLimit -= 6;
                  });
                }();
                "undefined" != typeof console && void 0 !== console.warn && (o2 = function(t3) {
                  console.warn(t3);
                }, d.isNode && n2.stderr.isTTY ? o2 = function(t3, e4) {
                  var n3 = e4 ? "\x1B[33m" : "\x1B[31m";
                  console.warn(n3 + t3 + "\x1B[0m\n");
                } : d.isNode || "string" != typeof new Error().stack || (o2 = function(t3, e4) {
                  console.warn("%c" + t3, e4 ? "color: darkorange" : "color: red");
                }));
                var tt = { warnings: b, longStackTraces: false, cancellation: false, monitoring: false };
                return w && e3.longStackTraces(), { longStackTraces: function() {
                  return tt.longStackTraces;
                }, warnings: function() {
                  return tt.warnings;
                }, cancellation: function() {
                  return tt.cancellation;
                }, monitoring: function() {
                  return tt.monitoring;
                }, propagateFromFunction: function() {
                  return R;
                }, boundValueFunction: function() {
                  return j;
                }, checkForgottenReturns: function(t3, e4, n3, i4, r3) {
                  if (void 0 === t3 && null !== e4 && x) {
                    if (void 0 !== r3 && r3._returnedNonUndefined()) return;
                    if (0 == (65535 & i4._bitField)) return;
                    n3 && (n3 += " ");
                    var a3 = "", o3 = "";
                    if (e4._trace) {
                      for (var s3 = e4._trace.stack.split("\n"), l2 = V(s3), c2 = l2.length - 1; c2 >= 0; --c2) {
                        var u2 = l2[c2];
                        if (!g.test(u2)) {
                          var d2 = u2.match(p);
                          d2 && (a3 = "at " + d2[1] + ":" + d2[2] + ":" + d2[3] + " ");
                          break;
                        }
                      }
                      if (l2.length > 0) {
                        var h2 = l2[0];
                        for (c2 = 0; c2 < s3.length; ++c2) if (s3[c2] === h2) {
                          c2 > 0 && (o3 = "\n" + s3[c2 - 1]);
                          break;
                        }
                      }
                    }
                    var f2 = "a promise was created in a " + n3 + "handler " + a3 + "but was not returned from it, see http://goo.gl/rRqMUw" + o3;
                    i4._warn(f2, true, e4);
                  }
                }, setBounds: function(t3, e4) {
                  if (Y()) {
                    for (var n3, i4, r3 = t3.stack.split("\n"), a3 = e4.stack.split("\n"), o3 = -1, s3 = -1, l2 = 0; l2 < r3.length; ++l2) if (c2 = X(r3[l2])) {
                      n3 = c2.fileName, o3 = c2.line;
                      break;
                    }
                    for (l2 = 0; l2 < a3.length; ++l2) {
                      var c2;
                      if (c2 = X(a3[l2])) {
                        i4 = c2.fileName, s3 = c2.line;
                        break;
                      }
                    }
                    o3 < 0 || s3 < 0 || !n3 || !i4 || n3 !== i4 || o3 >= s3 || (K = function(t4) {
                      if (_.test(t4)) return true;
                      var e5 = X(t4);
                      return !!(e5 && e5.fileName === n3 && o3 <= e5.line && e5.line <= s3);
                    });
                  }
                }, warn: z, deprecated: function(t3, e4) {
                  var n3 = t3 + " is deprecated and will be removed in a future version.";
                  return e4 && (n3 += " Use " + e4 + " instead."), z(n3);
                }, CapturedTrace: Q, fireDomEvent: S, fireGlobalEvent: T };
              };
            }, { "./errors": 12, "./es5": 13, "./util": 36 }], 10: [function(t2, e2, n3) {
              e2.exports = function(t3) {
                function e3() {
                  return this.value;
                }
                function n4() {
                  throw this.reason;
                }
                t3.prototype.return = t3.prototype.thenReturn = function(n5) {
                  return n5 instanceof t3 && n5.suppressUnhandledRejections(), this._then(e3, void 0, void 0, { value: n5 }, void 0);
                }, t3.prototype.throw = t3.prototype.thenThrow = function(t4) {
                  return this._then(n4, void 0, void 0, { reason: t4 }, void 0);
                }, t3.prototype.catchThrow = function(t4) {
                  if (arguments.length <= 1) return this._then(void 0, n4, void 0, { reason: t4 }, void 0);
                  var e4 = arguments[1];
                  return this.caught(t4, function() {
                    throw e4;
                  });
                }, t3.prototype.catchReturn = function(n5) {
                  if (arguments.length <= 1) return n5 instanceof t3 && n5.suppressUnhandledRejections(), this._then(void 0, e3, void 0, { value: n5 }, void 0);
                  var i2 = arguments[1];
                  i2 instanceof t3 && i2.suppressUnhandledRejections();
                  return this.caught(n5, function() {
                    return i2;
                  });
                };
              };
            }, {}], 11: [function(t2, e2, n3) {
              e2.exports = function(t3, e3) {
                var n4 = t3.reduce, i2 = t3.all;
                function r2() {
                  return i2(this);
                }
                t3.prototype.each = function(t4) {
                  return n4(this, t4, e3, 0)._then(r2, void 0, void 0, this, void 0);
                }, t3.prototype.mapSeries = function(t4) {
                  return n4(this, t4, e3, e3);
                }, t3.each = function(t4, i3) {
                  return n4(t4, i3, e3, 0)._then(r2, void 0, void 0, t4, void 0);
                }, t3.mapSeries = function(t4, i3) {
                  return n4(t4, i3, e3, e3);
                };
              };
            }, {}], 12: [function(t2, e2, n3) {
              var i2, r2, a2 = t2("./es5"), o2 = a2.freeze, s2 = t2("./util"), l2 = s2.inherits, c = s2.notEnumerableProp;
              function u(t3, e3) {
                function n4(i3) {
                  if (!(this instanceof n4)) return new n4(i3);
                  c(this, "message", "string" == typeof i3 ? i3 : e3), c(this, "name", t3), Error.captureStackTrace ? Error.captureStackTrace(this, this.constructor) : Error.call(this);
                }
                return l2(n4, Error), n4;
              }
              var d = u("Warning", "warning"), h = u("CancellationError", "cancellation error"), f = u("TimeoutError", "timeout error"), _ = u("AggregateError", "aggregate error");
              try {
                i2 = TypeError, r2 = RangeError;
              } catch (t3) {
                i2 = u("TypeError", "type error"), r2 = u("RangeError", "range error");
              }
              for (var g = "join pop push shift unshift slice filter forEach some every map indexOf lastIndexOf reduce reduceRight sort reverse".split(" "), p = 0; p < g.length; ++p) "function" == typeof Array.prototype[g[p]] && (_.prototype[g[p]] = Array.prototype[g[p]]);
              a2.defineProperty(_.prototype, "length", { value: 0, configurable: false, writable: true, enumerable: true }), _.prototype.isOperational = true;
              var v = 0;
              function m(t3) {
                if (!(this instanceof m)) return new m(t3);
                c(this, "name", "OperationalError"), c(this, "message", t3), this.cause = t3, this.isOperational = true, t3 instanceof Error ? (c(this, "message", t3.message), c(this, "stack", t3.stack)) : Error.captureStackTrace && Error.captureStackTrace(this, this.constructor);
              }
              _.prototype.toString = function() {
                var t3 = Array(4 * v + 1).join(" "), e3 = "\n" + t3 + "AggregateError of:\n";
                v++, t3 = Array(4 * v + 1).join(" ");
                for (var n4 = 0; n4 < this.length; ++n4) {
                  for (var i3 = this[n4] === this ? "[Circular AggregateError]" : this[n4] + "", r3 = i3.split("\n"), a3 = 0; a3 < r3.length; ++a3) r3[a3] = t3 + r3[a3];
                  e3 += (i3 = r3.join("\n")) + "\n";
                }
                return v--, e3;
              }, l2(m, Error);
              var y = Error.__BluebirdErrorTypes__;
              y || (y = o2({ CancellationError: h, TimeoutError: f, OperationalError: m, RejectionError: m, AggregateError: _ }), a2.defineProperty(Error, "__BluebirdErrorTypes__", { value: y, writable: false, enumerable: false, configurable: false })), e2.exports = { Error, TypeError: i2, RangeError: r2, CancellationError: y.CancellationError, OperationalError: y.OperationalError, TimeoutError: y.TimeoutError, AggregateError: y.AggregateError, Warning: d };
            }, { "./es5": 13, "./util": 36 }], 13: [function(t2, e2, n3) {
              var i2 = /* @__PURE__ */ function() {
                return void 0 === this;
              }();
              if (i2) e2.exports = { freeze: Object.freeze, defineProperty: Object.defineProperty, getDescriptor: Object.getOwnPropertyDescriptor, keys: Object.keys, names: Object.getOwnPropertyNames, getPrototypeOf: Object.getPrototypeOf, isArray: Array.isArray, isES5: i2, propertyIsWritable: function(t3, e3) {
                var n4 = Object.getOwnPropertyDescriptor(t3, e3);
                return !(n4 && !n4.writable && !n4.set);
              } };
              else {
                var r2 = {}.hasOwnProperty, a2 = {}.toString, o2 = {}.constructor.prototype, s2 = function(t3) {
                  var e3 = [];
                  for (var n4 in t3) r2.call(t3, n4) && e3.push(n4);
                  return e3;
                };
                e2.exports = { isArray: function(t3) {
                  try {
                    return "[object Array]" === a2.call(t3);
                  } catch (t4) {
                    return false;
                  }
                }, keys: s2, names: s2, defineProperty: function(t3, e3, n4) {
                  return t3[e3] = n4.value, t3;
                }, getDescriptor: function(t3, e3) {
                  return { value: t3[e3] };
                }, freeze: function(t3) {
                  return t3;
                }, getPrototypeOf: function(t3) {
                  try {
                    return Object(t3).constructor.prototype;
                  } catch (t4) {
                    return o2;
                  }
                }, isES5: i2, propertyIsWritable: function() {
                  return true;
                } };
              }
            }, {}], 14: [function(t2, e2, n3) {
              e2.exports = function(t3, e3) {
                var n4 = t3.map;
                t3.prototype.filter = function(t4, i2) {
                  return n4(this, t4, i2, e3);
                }, t3.filter = function(t4, i2, r2) {
                  return n4(t4, i2, r2, e3);
                };
              };
            }, {}], 15: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2) {
                var r2 = t2("./util"), a2 = e3.CancellationError, o2 = r2.errorObj, s2 = t2("./catch_filter")(i2);
                function l2(t3, e4, n5) {
                  this.promise = t3, this.type = e4, this.handler = n5, this.called = false, this.cancelPromise = null;
                }
                function c(t3) {
                  this.finallyHandler = t3;
                }
                function u(t3, e4) {
                  return null != t3.cancelPromise && (arguments.length > 1 ? t3.cancelPromise._reject(e4) : t3.cancelPromise._cancel(), t3.cancelPromise = null, true);
                }
                function d() {
                  return f.call(this, this.promise._target()._settledValue());
                }
                function h(t3) {
                  if (!u(this, t3)) return o2.e = t3, o2;
                }
                function f(t3) {
                  var r3 = this.promise, s3 = this.handler;
                  if (!this.called) {
                    this.called = true;
                    var l3 = this.isFinallyHandler() ? s3.call(r3._boundValue()) : s3.call(r3._boundValue(), t3);
                    if (l3 === i2) return l3;
                    if (void 0 !== l3) {
                      r3._setReturnedNonUndefined();
                      var f2 = n4(l3, r3);
                      if (f2 instanceof e3) {
                        if (null != this.cancelPromise) {
                          if (f2._isCancelled()) {
                            var _ = new a2("late cancellation observer");
                            return r3._attachExtraTrace(_), o2.e = _, o2;
                          }
                          f2.isPending() && f2._attachCancellationCallback(new c(this));
                        }
                        return f2._then(d, h, void 0, this, void 0);
                      }
                    }
                  }
                  return r3.isRejected() ? (u(this), o2.e = t3, o2) : (u(this), t3);
                }
                return l2.prototype.isFinallyHandler = function() {
                  return 0 === this.type;
                }, c.prototype._resultCancelled = function() {
                  u(this.finallyHandler);
                }, e3.prototype._passThrough = function(t3, e4, n5, i3) {
                  return "function" != typeof t3 ? this.then() : this._then(n5, i3, void 0, new l2(this, e4, t3), void 0);
                }, e3.prototype.lastly = e3.prototype.finally = function(t3) {
                  return this._passThrough(t3, 0, f, f);
                }, e3.prototype.tap = function(t3) {
                  return this._passThrough(t3, 1, f);
                }, e3.prototype.tapCatch = function(t3) {
                  var n5 = arguments.length;
                  if (1 === n5) return this._passThrough(t3, 1, void 0, f);
                  var i3, a3 = new Array(n5 - 1), o3 = 0;
                  for (i3 = 0; i3 < n5 - 1; ++i3) {
                    var l3 = arguments[i3];
                    if (!r2.isObject(l3)) return e3.reject(new TypeError("tapCatch statement predicate: expecting an object but got " + r2.classString(l3)));
                    a3[o3++] = l3;
                  }
                  a3.length = o3;
                  var c2 = arguments[i3];
                  return this._passThrough(s2(a3, c2, this), 1, void 0, f);
                }, l2;
              };
            }, { "./catch_filter": 7, "./util": 36 }], 16: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2, o2) {
                var s2 = t2("./errors").TypeError, l2 = t2("./util"), c = l2.errorObj, u = l2.tryCatch, d = [];
                function h(t3, n5, r3, a3) {
                  if (o2.cancellation()) {
                    var s3 = new e3(i2), l3 = this._finallyPromise = new e3(i2);
                    this._promise = s3.lastly(function() {
                      return l3;
                    }), s3._captureStackTrace(), s3._setOnCancel(this);
                  } else {
                    (this._promise = new e3(i2))._captureStackTrace();
                  }
                  this._stack = a3, this._generatorFunction = t3, this._receiver = n5, this._generator = void 0, this._yieldHandlers = "function" == typeof r3 ? [r3].concat(d) : d, this._yieldedPromise = null, this._cancellationPhase = false;
                }
                l2.inherits(h, a2), h.prototype._isResolved = function() {
                  return null === this._promise;
                }, h.prototype._cleanup = function() {
                  this._promise = this._generator = null, o2.cancellation() && null !== this._finallyPromise && (this._finallyPromise._fulfill(), this._finallyPromise = null);
                }, h.prototype._promiseCancelled = function() {
                  if (!this._isResolved()) {
                    var t3;
                    if (void 0 !== this._generator.return) this._promise._pushContext(), t3 = u(this._generator.return).call(this._generator, void 0), this._promise._popContext();
                    else {
                      var n5 = new e3.CancellationError("generator .return() sentinel");
                      e3.coroutine.returnSentinel = n5, this._promise._attachExtraTrace(n5), this._promise._pushContext(), t3 = u(this._generator.throw).call(this._generator, n5), this._promise._popContext();
                    }
                    this._cancellationPhase = true, this._yieldedPromise = null, this._continue(t3);
                  }
                }, h.prototype._promiseFulfilled = function(t3) {
                  this._yieldedPromise = null, this._promise._pushContext();
                  var e4 = u(this._generator.next).call(this._generator, t3);
                  this._promise._popContext(), this._continue(e4);
                }, h.prototype._promiseRejected = function(t3) {
                  this._yieldedPromise = null, this._promise._attachExtraTrace(t3), this._promise._pushContext();
                  var e4 = u(this._generator.throw).call(this._generator, t3);
                  this._promise._popContext(), this._continue(e4);
                }, h.prototype._resultCancelled = function() {
                  if (this._yieldedPromise instanceof e3) {
                    var t3 = this._yieldedPromise;
                    this._yieldedPromise = null, t3.cancel();
                  }
                }, h.prototype.promise = function() {
                  return this._promise;
                }, h.prototype._run = function() {
                  this._generator = this._generatorFunction.call(this._receiver), this._receiver = this._generatorFunction = void 0, this._promiseFulfilled(void 0);
                }, h.prototype._continue = function(t3) {
                  var n5 = this._promise;
                  if (t3 === c) return this._cleanup(), this._cancellationPhase ? n5.cancel() : n5._rejectCallback(t3.e, false);
                  var i3 = t3.value;
                  if (true === t3.done) return this._cleanup(), this._cancellationPhase ? n5.cancel() : n5._resolveCallback(i3);
                  var a3 = r2(i3, this._promise);
                  if (a3 instanceof e3 || null !== (a3 = function(t4, n6, i4) {
                    for (var a4 = 0; a4 < n6.length; ++a4) {
                      i4._pushContext();
                      var o4 = u(n6[a4])(t4);
                      if (i4._popContext(), o4 === c) {
                        i4._pushContext();
                        var s3 = e3.reject(c.e);
                        return i4._popContext(), s3;
                      }
                      var l3 = r2(o4, i4);
                      if (l3 instanceof e3) return l3;
                    }
                    return null;
                  }(a3, this._yieldHandlers, this._promise))) {
                    var o3 = (a3 = a3._target())._bitField;
                    0 == (50397184 & o3) ? (this._yieldedPromise = a3, a3._proxy(this, null)) : 0 != (33554432 & o3) ? e3._async.invoke(this._promiseFulfilled, this, a3._value()) : 0 != (16777216 & o3) ? e3._async.invoke(this._promiseRejected, this, a3._reason()) : this._promiseCancelled();
                  } else this._promiseRejected(new s2("A value %s was yielded that could not be treated as a promise\n\n    See http://goo.gl/MqrFmX\n\n".replace("%s", String(i3)) + "From coroutine:\n" + this._stack.split("\n").slice(1, -7).join("\n")));
                }, e3.coroutine = function(t3, e4) {
                  if ("function" != typeof t3) throw new s2("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                  var n5 = Object(e4).yieldHandler, i3 = h, r3 = new Error().stack;
                  return function() {
                    var e5 = t3.apply(this, arguments), a3 = new i3(void 0, void 0, n5, r3), o3 = a3.promise();
                    return a3._generator = e5, a3._promiseFulfilled(void 0), o3;
                  };
                }, e3.coroutine.addYieldHandler = function(t3) {
                  if ("function" != typeof t3) throw new s2("expecting a function but got " + l2.classString(t3));
                  d.push(t3);
                }, e3.spawn = function(t3) {
                  if (o2.deprecated("Promise.spawn()", "Promise.coroutine()"), "function" != typeof t3) return n4("generatorFunction must be a function\n\n    See http://goo.gl/MqrFmX\n");
                  var i3 = new h(t3, this), r3 = i3.promise();
                  return i3._run(e3.spawn), r3;
                };
              };
            }, { "./errors": 12, "./util": 36 }], 17: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2, o2) {
                var s2 = t2("./util");
                s2.canEvaluate, s2.tryCatch, s2.errorObj;
                e3.join = function() {
                  var t3, e4 = arguments.length - 1;
                  e4 > 0 && "function" == typeof arguments[e4] && (t3 = arguments[e4]);
                  var i3 = [].slice.call(arguments);
                  t3 && i3.pop();
                  var r3 = new n4(i3).promise();
                  return void 0 !== t3 ? r3.spread(t3) : r3;
                };
              };
            }, { "./util": 36 }], 18: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2, o2) {
                var s2 = e3._getDomain, c = t2("./util"), u = c.tryCatch, d = c.errorObj, h = e3._async;
                function f(t3, e4, n5, i3) {
                  this.constructor$(t3), this._promise._captureStackTrace();
                  var r3 = s2();
                  this._callback = null === r3 ? e4 : c.domainBind(r3, e4), this._preservedValues = i3 === a2 ? new Array(this.length()) : null, this._limit = n5, this._inFlight = 0, this._queue = [], h.invoke(this._asyncInit, this, void 0);
                }
                function _(t3, n5, r3, a3) {
                  if ("function" != typeof n5) return i2("expecting a function but got " + c.classString(n5));
                  var o3 = 0;
                  if (void 0 !== r3) {
                    if ("object" !== l(r3) || null === r3) return e3.reject(new TypeError("options argument must be an object but it is " + c.classString(r3)));
                    if ("number" != typeof r3.concurrency) return e3.reject(new TypeError("'concurrency' must be a number but it is " + c.classString(r3.concurrency)));
                    o3 = r3.concurrency;
                  }
                  return new f(t3, n5, o3 = "number" == typeof o3 && isFinite(o3) && o3 >= 1 ? o3 : 0, a3).promise();
                }
                c.inherits(f, n4), f.prototype._asyncInit = function() {
                  this._init$(void 0, -2);
                }, f.prototype._init = function() {
                }, f.prototype._promiseFulfilled = function(t3, n5) {
                  var i3 = this._values, a3 = this.length(), s3 = this._preservedValues, l2 = this._limit;
                  if (n5 < 0) {
                    if (i3[n5 = -1 * n5 - 1] = t3, l2 >= 1 && (this._inFlight--, this._drainQueue(), this._isResolved())) return true;
                  } else {
                    if (l2 >= 1 && this._inFlight >= l2) return i3[n5] = t3, this._queue.push(n5), false;
                    null !== s3 && (s3[n5] = t3);
                    var c2 = this._promise, h2 = this._callback, f2 = c2._boundValue();
                    c2._pushContext();
                    var _2 = u(h2).call(f2, t3, n5, a3), g = c2._popContext();
                    if (o2.checkForgottenReturns(_2, g, null !== s3 ? "Promise.filter" : "Promise.map", c2), _2 === d) return this._reject(_2.e), true;
                    var p = r2(_2, this._promise);
                    if (p instanceof e3) {
                      var v = (p = p._target())._bitField;
                      if (0 == (50397184 & v)) return l2 >= 1 && this._inFlight++, i3[n5] = p, p._proxy(this, -1 * (n5 + 1)), false;
                      if (0 == (33554432 & v)) return 0 != (16777216 & v) ? (this._reject(p._reason()), true) : (this._cancel(), true);
                      _2 = p._value();
                    }
                    i3[n5] = _2;
                  }
                  return ++this._totalResolved >= a3 && (null !== s3 ? this._filter(i3, s3) : this._resolve(i3), true);
                }, f.prototype._drainQueue = function() {
                  for (var t3 = this._queue, e4 = this._limit, n5 = this._values; t3.length > 0 && this._inFlight < e4; ) {
                    if (this._isResolved()) return;
                    var i3 = t3.pop();
                    this._promiseFulfilled(n5[i3], i3);
                  }
                }, f.prototype._filter = function(t3, e4) {
                  for (var n5 = e4.length, i3 = new Array(n5), r3 = 0, a3 = 0; a3 < n5; ++a3) t3[a3] && (i3[r3++] = e4[a3]);
                  i3.length = r3, this._resolve(i3);
                }, f.prototype.preservedValues = function() {
                  return this._preservedValues;
                }, e3.prototype.map = function(t3, e4) {
                  return _(this, t3, e4, null);
                }, e3.map = function(t3, e4, n5, i3) {
                  return _(t3, e4, n5, i3);
                };
              };
            }, { "./util": 36 }], 19: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2) {
                var o2 = t2("./util"), s2 = o2.tryCatch;
                e3.method = function(t3) {
                  if ("function" != typeof t3) throw new e3.TypeError("expecting a function but got " + o2.classString(t3));
                  return function() {
                    var i3 = new e3(n4);
                    i3._captureStackTrace(), i3._pushContext();
                    var r3 = s2(t3).apply(this, arguments), o3 = i3._popContext();
                    return a2.checkForgottenReturns(r3, o3, "Promise.method", i3), i3._resolveFromSyncValue(r3), i3;
                  };
                }, e3.attempt = e3.try = function(t3) {
                  if ("function" != typeof t3) return r2("expecting a function but got " + o2.classString(t3));
                  var i3, l2 = new e3(n4);
                  if (l2._captureStackTrace(), l2._pushContext(), arguments.length > 1) {
                    a2.deprecated("calling Promise.try with more than 1 argument");
                    var c = arguments[1], u = arguments[2];
                    i3 = o2.isArray(c) ? s2(t3).apply(u, c) : s2(t3).call(u, c);
                  } else i3 = s2(t3)();
                  var d = l2._popContext();
                  return a2.checkForgottenReturns(i3, d, "Promise.try", l2), l2._resolveFromSyncValue(i3), l2;
                }, e3.prototype._resolveFromSyncValue = function(t3) {
                  t3 === o2.errorObj ? this._rejectCallback(t3.e, false) : this._resolveCallback(t3, true);
                };
              };
            }, { "./util": 36 }], 20: [function(t2, e2, n3) {
              var i2 = t2("./util"), r2 = i2.maybeWrapAsError, a2 = t2("./errors").OperationalError, o2 = t2("./es5");
              var s2 = /^(?:name|message|stack|cause)$/;
              function l2(t3) {
                var e3;
                if (function(t4) {
                  return t4 instanceof Error && o2.getPrototypeOf(t4) === Error.prototype;
                }(t3)) {
                  (e3 = new a2(t3)).name = t3.name, e3.message = t3.message, e3.stack = t3.stack;
                  for (var n4 = o2.keys(t3), r3 = 0; r3 < n4.length; ++r3) {
                    var l3 = n4[r3];
                    s2.test(l3) || (e3[l3] = t3[l3]);
                  }
                  return e3;
                }
                return i2.markAsOriginatingFromRejection(t3), t3;
              }
              e2.exports = function(t3, e3) {
                return function(n4, i3) {
                  if (null !== t3) {
                    if (n4) {
                      var a3 = l2(r2(n4));
                      t3._attachExtraTrace(a3), t3._reject(a3);
                    } else if (e3) {
                      var o3 = [].slice.call(arguments, 1);
                      t3._fulfill(o3);
                    } else t3._fulfill(i3);
                    t3 = null;
                  }
                };
              };
            }, { "./errors": 12, "./es5": 13, "./util": 36 }], 21: [function(t2, e2, n3) {
              e2.exports = function(e3) {
                var n4 = t2("./util"), i2 = e3._async, r2 = n4.tryCatch, a2 = n4.errorObj;
                function o2(t3, e4) {
                  if (!n4.isArray(t3)) return s2.call(this, t3, e4);
                  var o3 = r2(e4).apply(this._boundValue(), [null].concat(t3));
                  o3 === a2 && i2.throwLater(o3.e);
                }
                function s2(t3, e4) {
                  var n5 = this._boundValue(), o3 = void 0 === t3 ? r2(e4).call(n5, null) : r2(e4).call(n5, null, t3);
                  o3 === a2 && i2.throwLater(o3.e);
                }
                function l2(t3, e4) {
                  if (!t3) {
                    var n5 = new Error(t3 + "");
                    n5.cause = t3, t3 = n5;
                  }
                  var o3 = r2(e4).call(this._boundValue(), t3);
                  o3 === a2 && i2.throwLater(o3.e);
                }
                e3.prototype.asCallback = e3.prototype.nodeify = function(t3, e4) {
                  if ("function" == typeof t3) {
                    var n5 = s2;
                    void 0 !== e4 && Object(e4).spread && (n5 = o2), this._then(n5, l2, void 0, this, t3);
                  }
                  return this;
                };
              };
            }, { "./util": 36 }], 22: [function(t2, e2, i2) {
              e2.exports = function() {
                var i3 = function() {
                  return new _("circular promise resolution chain\n\n    See http://goo.gl/MqrFmX\n");
                }, r2 = function() {
                  return new D.PromiseInspection(this._target());
                }, a2 = function(t3) {
                  return D.reject(new _(t3));
                };
                function o2() {
                }
                var s2, l2 = {}, c = t2("./util");
                s2 = c.isNode ? function() {
                  var t3 = n2.domain;
                  return void 0 === t3 && (t3 = null), t3;
                } : function() {
                  return null;
                }, c.notEnumerableProp(D, "_getDomain", s2);
                var u = t2("./es5"), d = t2("./async"), h = new d();
                u.defineProperty(D, "_async", { value: h });
                var f = t2("./errors"), _ = D.TypeError = f.TypeError;
                D.RangeError = f.RangeError;
                var g = D.CancellationError = f.CancellationError;
                D.TimeoutError = f.TimeoutError, D.OperationalError = f.OperationalError, D.RejectionError = f.OperationalError, D.AggregateError = f.AggregateError;
                var p = function() {
                }, v = {}, m = {}, y = t2("./thenables")(D, p), k = t2("./promise_array")(D, p, y, a2, o2), b = t2("./context")(D), w = b.create, x = t2("./debuggability")(D, b), $ = (x.CapturedTrace, t2("./finally")(D, y, m)), S = t2("./catch_filter")(m), T = t2("./nodeback"), C = c.errorObj, E = c.tryCatch;
                function D(t3) {
                  t3 !== p && function(t4, e3) {
                    if (null == t4 || t4.constructor !== D) throw new _("the promise constructor cannot be invoked directly\n\n    See http://goo.gl/MqrFmX\n");
                    if ("function" != typeof e3) throw new _("expecting a function but got " + c.classString(e3));
                  }(this, t3), this._bitField = 0, this._fulfillmentHandler0 = void 0, this._rejectionHandler0 = void 0, this._promise0 = void 0, this._receiver0 = void 0, this._resolveFromExecutor(t3), this._promiseCreated(), this._fireEvent("promiseCreated", this);
                }
                function M(t3) {
                  this.promise._resolveCallback(t3);
                }
                function A(t3) {
                  this.promise._rejectCallback(t3, false);
                }
                function I(t3) {
                  var e3 = new D(p);
                  e3._fulfillmentHandler0 = t3, e3._rejectionHandler0 = t3, e3._promise0 = t3, e3._receiver0 = t3;
                }
                return D.prototype.toString = function() {
                  return "[object Promise]";
                }, D.prototype.caught = D.prototype.catch = function(t3) {
                  var e3 = arguments.length;
                  if (e3 > 1) {
                    var n3, i4 = new Array(e3 - 1), r3 = 0;
                    for (n3 = 0; n3 < e3 - 1; ++n3) {
                      var o3 = arguments[n3];
                      if (!c.isObject(o3)) return a2("Catch statement predicate: expecting an object but got " + c.classString(o3));
                      i4[r3++] = o3;
                    }
                    return i4.length = r3, t3 = arguments[n3], this.then(void 0, S(i4, t3, this));
                  }
                  return this.then(void 0, t3);
                }, D.prototype.reflect = function() {
                  return this._then(r2, r2, void 0, this, void 0);
                }, D.prototype.then = function(t3, e3) {
                  if (x.warnings() && arguments.length > 0 && "function" != typeof t3 && "function" != typeof e3) {
                    var n3 = ".then() only accepts functions but was passed: " + c.classString(t3);
                    arguments.length > 1 && (n3 += ", " + c.classString(e3)), this._warn(n3);
                  }
                  return this._then(t3, e3, void 0, void 0, void 0);
                }, D.prototype.done = function(t3, e3) {
                  this._then(t3, e3, void 0, void 0, void 0)._setIsFinal();
                }, D.prototype.spread = function(t3) {
                  return "function" != typeof t3 ? a2("expecting a function but got " + c.classString(t3)) : this.all()._then(t3, void 0, void 0, v, void 0);
                }, D.prototype.toJSON = function() {
                  var t3 = { isFulfilled: false, isRejected: false, fulfillmentValue: void 0, rejectionReason: void 0 };
                  return this.isFulfilled() ? (t3.fulfillmentValue = this.value(), t3.isFulfilled = true) : this.isRejected() && (t3.rejectionReason = this.reason(), t3.isRejected = true), t3;
                }, D.prototype.all = function() {
                  return arguments.length > 0 && this._warn(".all() was passed arguments but it does not take any"), new k(this).promise();
                }, D.prototype.error = function(t3) {
                  return this.caught(c.originatesFromRejection, t3);
                }, D.getNewLibraryCopy = e2.exports, D.is = function(t3) {
                  return t3 instanceof D;
                }, D.fromNode = D.fromCallback = function(t3) {
                  var e3 = new D(p);
                  e3._captureStackTrace();
                  var n3 = arguments.length > 1 && !!Object(arguments[1]).multiArgs, i4 = E(t3)(T(e3, n3));
                  return i4 === C && e3._rejectCallback(i4.e, true), e3._isFateSealed() || e3._setAsyncGuaranteed(), e3;
                }, D.all = function(t3) {
                  return new k(t3).promise();
                }, D.cast = function(t3) {
                  var e3 = y(t3);
                  return e3 instanceof D || ((e3 = new D(p))._captureStackTrace(), e3._setFulfilled(), e3._rejectionHandler0 = t3), e3;
                }, D.resolve = D.fulfilled = D.cast, D.reject = D.rejected = function(t3) {
                  var e3 = new D(p);
                  return e3._captureStackTrace(), e3._rejectCallback(t3, true), e3;
                }, D.setScheduler = function(t3) {
                  if ("function" != typeof t3) throw new _("expecting a function but got " + c.classString(t3));
                  return h.setScheduler(t3);
                }, D.prototype._then = function(t3, e3, n3, i4, r3) {
                  var a3 = void 0 !== r3, o3 = a3 ? r3 : new D(p), l3 = this._target(), u2 = l3._bitField;
                  a3 || (o3._propagateFrom(this, 3), o3._captureStackTrace(), void 0 === i4 && 0 != (2097152 & this._bitField) && (i4 = 0 != (50397184 & u2) ? this._boundValue() : l3 === this ? void 0 : this._boundTo), this._fireEvent("promiseChained", this, o3));
                  var d2 = s2();
                  if (0 != (50397184 & u2)) {
                    var f2, _2, v2 = l3._settlePromiseCtx;
                    0 != (33554432 & u2) ? (_2 = l3._rejectionHandler0, f2 = t3) : 0 != (16777216 & u2) ? (_2 = l3._fulfillmentHandler0, f2 = e3, l3._unsetRejectionIsUnhandled()) : (v2 = l3._settlePromiseLateCancellationObserver, _2 = new g("late cancellation observer"), l3._attachExtraTrace(_2), f2 = e3), h.invoke(v2, l3, { handler: null === d2 ? f2 : "function" == typeof f2 && c.domainBind(d2, f2), promise: o3, receiver: i4, value: _2 });
                  } else l3._addCallbacks(t3, e3, o3, i4, d2);
                  return o3;
                }, D.prototype._length = function() {
                  return 65535 & this._bitField;
                }, D.prototype._isFateSealed = function() {
                  return 0 != (117506048 & this._bitField);
                }, D.prototype._isFollowing = function() {
                  return 67108864 == (67108864 & this._bitField);
                }, D.prototype._setLength = function(t3) {
                  this._bitField = -65536 & this._bitField | 65535 & t3;
                }, D.prototype._setFulfilled = function() {
                  this._bitField = 33554432 | this._bitField, this._fireEvent("promiseFulfilled", this);
                }, D.prototype._setRejected = function() {
                  this._bitField = 16777216 | this._bitField, this._fireEvent("promiseRejected", this);
                }, D.prototype._setFollowing = function() {
                  this._bitField = 67108864 | this._bitField, this._fireEvent("promiseResolved", this);
                }, D.prototype._setIsFinal = function() {
                  this._bitField = 4194304 | this._bitField;
                }, D.prototype._isFinal = function() {
                  return (4194304 & this._bitField) > 0;
                }, D.prototype._unsetCancelled = function() {
                  this._bitField = -65537 & this._bitField;
                }, D.prototype._setCancelled = function() {
                  this._bitField = 65536 | this._bitField, this._fireEvent("promiseCancelled", this);
                }, D.prototype._setWillBeCancelled = function() {
                  this._bitField = 8388608 | this._bitField;
                }, D.prototype._setAsyncGuaranteed = function() {
                  h.hasCustomScheduler() || (this._bitField = 134217728 | this._bitField);
                }, D.prototype._receiverAt = function(t3) {
                  var e3 = 0 === t3 ? this._receiver0 : this[4 * t3 - 4 + 3];
                  if (e3 !== l2) return void 0 === e3 && this._isBound() ? this._boundValue() : e3;
                }, D.prototype._promiseAt = function(t3) {
                  return this[4 * t3 - 4 + 2];
                }, D.prototype._fulfillmentHandlerAt = function(t3) {
                  return this[4 * t3 - 4 + 0];
                }, D.prototype._rejectionHandlerAt = function(t3) {
                  return this[4 * t3 - 4 + 1];
                }, D.prototype._boundValue = function() {
                }, D.prototype._migrateCallback0 = function(t3) {
                  t3._bitField;
                  var e3 = t3._fulfillmentHandler0, n3 = t3._rejectionHandler0, i4 = t3._promise0, r3 = t3._receiverAt(0);
                  void 0 === r3 && (r3 = l2), this._addCallbacks(e3, n3, i4, r3, null);
                }, D.prototype._migrateCallbackAt = function(t3, e3) {
                  var n3 = t3._fulfillmentHandlerAt(e3), i4 = t3._rejectionHandlerAt(e3), r3 = t3._promiseAt(e3), a3 = t3._receiverAt(e3);
                  void 0 === a3 && (a3 = l2), this._addCallbacks(n3, i4, r3, a3, null);
                }, D.prototype._addCallbacks = function(t3, e3, n3, i4, r3) {
                  var a3 = this._length();
                  if (a3 >= 65531 && (a3 = 0, this._setLength(0)), 0 === a3) this._promise0 = n3, this._receiver0 = i4, "function" == typeof t3 && (this._fulfillmentHandler0 = null === r3 ? t3 : c.domainBind(r3, t3)), "function" == typeof e3 && (this._rejectionHandler0 = null === r3 ? e3 : c.domainBind(r3, e3));
                  else {
                    var o3 = 4 * a3 - 4;
                    this[o3 + 2] = n3, this[o3 + 3] = i4, "function" == typeof t3 && (this[o3 + 0] = null === r3 ? t3 : c.domainBind(r3, t3)), "function" == typeof e3 && (this[o3 + 1] = null === r3 ? e3 : c.domainBind(r3, e3));
                  }
                  return this._setLength(a3 + 1), a3;
                }, D.prototype._proxy = function(t3, e3) {
                  this._addCallbacks(void 0, void 0, e3, t3, null);
                }, D.prototype._resolveCallback = function(t3, e3) {
                  if (0 == (117506048 & this._bitField)) {
                    if (t3 === this) return this._rejectCallback(i3(), false);
                    var n3 = y(t3, this);
                    if (!(n3 instanceof D)) return this._fulfill(t3);
                    e3 && this._propagateFrom(n3, 2);
                    var r3 = n3._target();
                    if (r3 !== this) {
                      var a3 = r3._bitField;
                      if (0 == (50397184 & a3)) {
                        var o3 = this._length();
                        o3 > 0 && r3._migrateCallback0(this);
                        for (var s3 = 1; s3 < o3; ++s3) r3._migrateCallbackAt(this, s3);
                        this._setFollowing(), this._setLength(0), this._setFollowee(r3);
                      } else if (0 != (33554432 & a3)) this._fulfill(r3._value());
                      else if (0 != (16777216 & a3)) this._reject(r3._reason());
                      else {
                        var l3 = new g("late cancellation observer");
                        r3._attachExtraTrace(l3), this._reject(l3);
                      }
                    } else this._reject(i3());
                  }
                }, D.prototype._rejectCallback = function(t3, e3, n3) {
                  var i4 = c.ensureErrorObject(t3), r3 = i4 === t3;
                  if (!r3 && !n3 && x.warnings()) {
                    var a3 = "a promise was rejected with a non-error: " + c.classString(t3);
                    this._warn(a3, true);
                  }
                  this._attachExtraTrace(i4, !!e3 && r3), this._reject(t3);
                }, D.prototype._resolveFromExecutor = function(t3) {
                  if (t3 !== p) {
                    var e3 = this;
                    this._captureStackTrace(), this._pushContext();
                    var n3 = true, i4 = this._execute(t3, function(t4) {
                      e3._resolveCallback(t4);
                    }, function(t4) {
                      e3._rejectCallback(t4, n3);
                    });
                    n3 = false, this._popContext(), void 0 !== i4 && e3._rejectCallback(i4, true);
                  }
                }, D.prototype._settlePromiseFromHandler = function(t3, e3, n3, i4) {
                  var r3 = i4._bitField;
                  if (0 == (65536 & r3)) {
                    var a3;
                    i4._pushContext(), e3 === v ? n3 && "number" == typeof n3.length ? a3 = E(t3).apply(this._boundValue(), n3) : (a3 = C).e = new _("cannot .spread() a non-array: " + c.classString(n3)) : a3 = E(t3).call(e3, n3);
                    var o3 = i4._popContext();
                    0 == (65536 & (r3 = i4._bitField)) && (a3 === m ? i4._reject(n3) : a3 === C ? i4._rejectCallback(a3.e, false) : (x.checkForgottenReturns(a3, o3, "", i4, this), i4._resolveCallback(a3)));
                  }
                }, D.prototype._target = function() {
                  for (var t3 = this; t3._isFollowing(); ) t3 = t3._followee();
                  return t3;
                }, D.prototype._followee = function() {
                  return this._rejectionHandler0;
                }, D.prototype._setFollowee = function(t3) {
                  this._rejectionHandler0 = t3;
                }, D.prototype._settlePromise = function(t3, e3, n3, i4) {
                  var a3 = t3 instanceof D, s3 = this._bitField, l3 = 0 != (134217728 & s3);
                  0 != (65536 & s3) ? (a3 && t3._invokeInternalOnCancel(), n3 instanceof $ && n3.isFinallyHandler() ? (n3.cancelPromise = t3, E(e3).call(n3, i4) === C && t3._reject(C.e)) : e3 === r2 ? t3._fulfill(r2.call(n3)) : n3 instanceof o2 ? n3._promiseCancelled(t3) : a3 || t3 instanceof k ? t3._cancel() : n3.cancel()) : "function" == typeof e3 ? a3 ? (l3 && t3._setAsyncGuaranteed(), this._settlePromiseFromHandler(e3, n3, i4, t3)) : e3.call(n3, i4, t3) : n3 instanceof o2 ? n3._isResolved() || (0 != (33554432 & s3) ? n3._promiseFulfilled(i4, t3) : n3._promiseRejected(i4, t3)) : a3 && (l3 && t3._setAsyncGuaranteed(), 0 != (33554432 & s3) ? t3._fulfill(i4) : t3._reject(i4));
                }, D.prototype._settlePromiseLateCancellationObserver = function(t3) {
                  var e3 = t3.handler, n3 = t3.promise, i4 = t3.receiver, r3 = t3.value;
                  "function" == typeof e3 ? n3 instanceof D ? this._settlePromiseFromHandler(e3, i4, r3, n3) : e3.call(i4, r3, n3) : n3 instanceof D && n3._reject(r3);
                }, D.prototype._settlePromiseCtx = function(t3) {
                  this._settlePromise(t3.promise, t3.handler, t3.receiver, t3.value);
                }, D.prototype._settlePromise0 = function(t3, e3, n3) {
                  var i4 = this._promise0, r3 = this._receiverAt(0);
                  this._promise0 = void 0, this._receiver0 = void 0, this._settlePromise(i4, t3, r3, e3);
                }, D.prototype._clearCallbackDataAtIndex = function(t3) {
                  var e3 = 4 * t3 - 4;
                  this[e3 + 2] = this[e3 + 3] = this[e3 + 0] = this[e3 + 1] = void 0;
                }, D.prototype._fulfill = function(t3) {
                  var e3 = this._bitField;
                  if (!((117506048 & e3) >>> 16)) {
                    if (t3 === this) {
                      var n3 = i3();
                      return this._attachExtraTrace(n3), this._reject(n3);
                    }
                    this._setFulfilled(), this._rejectionHandler0 = t3, (65535 & e3) > 0 && (0 != (134217728 & e3) ? this._settlePromises() : h.settlePromises(this), this._dereferenceTrace());
                  }
                }, D.prototype._reject = function(t3) {
                  var e3 = this._bitField;
                  if (!((117506048 & e3) >>> 16)) {
                    if (this._setRejected(), this._fulfillmentHandler0 = t3, this._isFinal()) return h.fatalError(t3, c.isNode);
                    (65535 & e3) > 0 ? h.settlePromises(this) : this._ensurePossibleRejectionHandled();
                  }
                }, D.prototype._fulfillPromises = function(t3, e3) {
                  for (var n3 = 1; n3 < t3; n3++) {
                    var i4 = this._fulfillmentHandlerAt(n3), r3 = this._promiseAt(n3), a3 = this._receiverAt(n3);
                    this._clearCallbackDataAtIndex(n3), this._settlePromise(r3, i4, a3, e3);
                  }
                }, D.prototype._rejectPromises = function(t3, e3) {
                  for (var n3 = 1; n3 < t3; n3++) {
                    var i4 = this._rejectionHandlerAt(n3), r3 = this._promiseAt(n3), a3 = this._receiverAt(n3);
                    this._clearCallbackDataAtIndex(n3), this._settlePromise(r3, i4, a3, e3);
                  }
                }, D.prototype._settlePromises = function() {
                  var t3 = this._bitField, e3 = 65535 & t3;
                  if (e3 > 0) {
                    if (0 != (16842752 & t3)) {
                      var n3 = this._fulfillmentHandler0;
                      this._settlePromise0(this._rejectionHandler0, n3, t3), this._rejectPromises(e3, n3);
                    } else {
                      var i4 = this._rejectionHandler0;
                      this._settlePromise0(this._fulfillmentHandler0, i4, t3), this._fulfillPromises(e3, i4);
                    }
                    this._setLength(0);
                  }
                  this._clearCancellationData();
                }, D.prototype._settledValue = function() {
                  var t3 = this._bitField;
                  return 0 != (33554432 & t3) ? this._rejectionHandler0 : 0 != (16777216 & t3) ? this._fulfillmentHandler0 : void 0;
                }, D.defer = D.pending = function() {
                  return x.deprecated("Promise.defer", "new Promise"), { promise: new D(p), resolve: M, reject: A };
                }, c.notEnumerableProp(D, "_makeSelfResolutionError", i3), t2("./method")(D, p, y, a2, x), t2("./bind")(D, p, y, x), t2("./cancel")(D, k, a2, x), t2("./direct_resolve")(D), t2("./synchronous_inspection")(D), t2("./join")(D, k, y, p, h, s2), D.Promise = D, D.version = "3.5.4", t2("./map.js")(D, k, a2, y, p, x), t2("./call_get.js")(D), t2("./using.js")(D, a2, y, w, p, x), t2("./timers.js")(D, p, x), t2("./generators.js")(D, a2, p, y, o2, x), t2("./nodeify.js")(D), t2("./promisify.js")(D, p), t2("./props.js")(D, k, y, a2), t2("./race.js")(D, p, y, a2), t2("./reduce.js")(D, k, a2, y, p, x), t2("./settle.js")(D, k, x), t2("./some.js")(D, k, a2), t2("./filter.js")(D, p), t2("./each.js")(D, p), t2("./any.js")(D), c.toFastProperties(D), c.toFastProperties(D.prototype), I({ a: 1 }), I({ b: 2 }), I({ c: 3 }), I(1), I(function() {
                }), I(void 0), I(false), I(new D(p)), x.setBounds(d.firstLineError, c.lastLineError), D;
              };
            }, { "./any.js": 1, "./async": 2, "./bind": 3, "./call_get.js": 5, "./cancel": 6, "./catch_filter": 7, "./context": 8, "./debuggability": 9, "./direct_resolve": 10, "./each.js": 11, "./errors": 12, "./es5": 13, "./filter.js": 14, "./finally": 15, "./generators.js": 16, "./join": 17, "./map.js": 18, "./method": 19, "./nodeback": 20, "./nodeify.js": 21, "./promise_array": 23, "./promisify.js": 24, "./props.js": 25, "./race.js": 27, "./reduce.js": 28, "./settle.js": 30, "./some.js": 31, "./synchronous_inspection": 32, "./thenables": 33, "./timers.js": 34, "./using.js": 35, "./util": 36 }], 23: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2) {
                var o2 = t2("./util");
                o2.isArray;
                function s2(t3) {
                  var i3 = this._promise = new e3(n4);
                  t3 instanceof e3 && i3._propagateFrom(t3, 3), i3._setOnCancel(this), this._values = t3, this._length = 0, this._totalResolved = 0, this._init(void 0, -2);
                }
                return o2.inherits(s2, a2), s2.prototype.length = function() {
                  return this._length;
                }, s2.prototype.promise = function() {
                  return this._promise;
                }, s2.prototype._init = function t3(n5, a3) {
                  var s3 = i2(this._values, this._promise);
                  if (s3 instanceof e3) {
                    var l2 = (s3 = s3._target())._bitField;
                    if (this._values = s3, 0 == (50397184 & l2)) return this._promise._setAsyncGuaranteed(), s3._then(t3, this._reject, void 0, this, a3);
                    if (0 == (33554432 & l2)) return 0 != (16777216 & l2) ? this._reject(s3._reason()) : this._cancel();
                    s3 = s3._value();
                  }
                  if (null !== (s3 = o2.asArray(s3))) 0 !== s3.length ? this._iterate(s3) : -5 === a3 ? this._resolveEmptyArray() : this._resolve(function(t4) {
                    switch (t4) {
                      case -2:
                        return [];
                      case -3:
                        return {};
                      case -6:
                        return /* @__PURE__ */ new Map();
                    }
                  }(a3));
                  else {
                    var c = r2("expecting an array or an iterable object but got " + o2.classString(s3)).reason();
                    this._promise._rejectCallback(c, false);
                  }
                }, s2.prototype._iterate = function(t3) {
                  var n5 = this.getActualLength(t3.length);
                  this._length = n5, this._values = this.shouldCopyValues() ? new Array(n5) : this._values;
                  for (var r3 = this._promise, a3 = false, o3 = null, s3 = 0; s3 < n5; ++s3) {
                    var l2 = i2(t3[s3], r3);
                    o3 = l2 instanceof e3 ? (l2 = l2._target())._bitField : null, a3 ? null !== o3 && l2.suppressUnhandledRejections() : null !== o3 ? 0 == (50397184 & o3) ? (l2._proxy(this, s3), this._values[s3] = l2) : a3 = 0 != (33554432 & o3) ? this._promiseFulfilled(l2._value(), s3) : 0 != (16777216 & o3) ? this._promiseRejected(l2._reason(), s3) : this._promiseCancelled(s3) : a3 = this._promiseFulfilled(l2, s3);
                  }
                  a3 || r3._setAsyncGuaranteed();
                }, s2.prototype._isResolved = function() {
                  return null === this._values;
                }, s2.prototype._resolve = function(t3) {
                  this._values = null, this._promise._fulfill(t3);
                }, s2.prototype._cancel = function() {
                  !this._isResolved() && this._promise._isCancellable() && (this._values = null, this._promise._cancel());
                }, s2.prototype._reject = function(t3) {
                  this._values = null, this._promise._rejectCallback(t3, false);
                }, s2.prototype._promiseFulfilled = function(t3, e4) {
                  return this._values[e4] = t3, ++this._totalResolved >= this._length && (this._resolve(this._values), true);
                }, s2.prototype._promiseCancelled = function() {
                  return this._cancel(), true;
                }, s2.prototype._promiseRejected = function(t3) {
                  return this._totalResolved++, this._reject(t3), true;
                }, s2.prototype._resultCancelled = function() {
                  if (!this._isResolved()) {
                    var t3 = this._values;
                    if (this._cancel(), t3 instanceof e3) t3.cancel();
                    else for (var n5 = 0; n5 < t3.length; ++n5) t3[n5] instanceof e3 && t3[n5].cancel();
                  }
                }, s2.prototype.shouldCopyValues = function() {
                  return true;
                }, s2.prototype.getActualLength = function(t3) {
                  return t3;
                }, s2;
              };
            }, { "./util": 36 }], 24: [function(t2, e2, n3) {
              e2.exports = function(e3, n4) {
                var i2 = {}, r2 = t2("./util"), a2 = t2("./nodeback"), o2 = r2.withAppended, s2 = r2.maybeWrapAsError, c = r2.canEvaluate, u = t2("./errors").TypeError, d = { __isPromisified__: true }, h = new RegExp("^(?:" + ["arity", "length", "name", "arguments", "caller", "callee", "prototype", "__isPromisified__"].join("|") + ")$"), f = function(t3) {
                  return r2.isIdentifier(t3) && "_" !== t3.charAt(0) && "constructor" !== t3;
                };
                function _(t3) {
                  return !h.test(t3);
                }
                function g(t3) {
                  try {
                    return true === t3.__isPromisified__;
                  } catch (t4) {
                    return false;
                  }
                }
                function p(t3, e4, n5) {
                  var i3 = r2.getDataPropertyOrDefault(t3, e4 + n5, d);
                  return !!i3 && g(i3);
                }
                function v(t3, e4, n5, i3) {
                  for (var a3 = r2.inheritedDataKeys(t3), o3 = [], s3 = 0; s3 < a3.length; ++s3) {
                    var l2 = a3[s3], c2 = t3[l2], d2 = i3 === f || f(l2);
                    "function" != typeof c2 || g(c2) || p(t3, l2, e4) || !i3(l2, c2, t3, d2) || o3.push(l2, c2);
                  }
                  return function(t4, e5, n6) {
                    for (var i4 = 0; i4 < t4.length; i4 += 2) {
                      var r3 = t4[i4];
                      if (n6.test(r3)) {
                        for (var a4 = r3.replace(n6, ""), o4 = 0; o4 < t4.length; o4 += 2) if (t4[o4] === a4) throw new u("Cannot promisify an API that has normal methods with '%s'-suffix\n\n    See http://goo.gl/MqrFmX\n".replace("%s", e5));
                      }
                    }
                  }(o3, e4, n5), o3;
                }
                var m = function(t3) {
                  return t3.replace(/([$])/, "\\$");
                };
                var y = c ? void 0 : function(t3, l2, c2, u2, d2, h2) {
                  var f2 = /* @__PURE__ */ function() {
                    return this;
                  }(), _2 = t3;
                  function g2() {
                    var r3 = l2;
                    l2 === i2 && (r3 = this);
                    var c3 = new e3(n4);
                    c3._captureStackTrace();
                    var u3 = "string" == typeof _2 && this !== f2 ? this[_2] : t3, d3 = a2(c3, h2);
                    try {
                      u3.apply(r3, o2(arguments, d3));
                    } catch (t4) {
                      c3._rejectCallback(s2(t4), true, true);
                    }
                    return c3._isFateSealed() || c3._setAsyncGuaranteed(), c3;
                  }
                  return "string" == typeof _2 && (t3 = u2), r2.notEnumerableProp(g2, "__isPromisified__", true), g2;
                };
                function k(t3, e4, n5, a3, o3) {
                  for (var s3 = new RegExp(m(e4) + "$"), l2 = v(t3, e4, s3, n5), c2 = 0, u2 = l2.length; c2 < u2; c2 += 2) {
                    var d2 = l2[c2], h2 = l2[c2 + 1], f2 = d2 + e4;
                    if (a3 === y) t3[f2] = y(d2, i2, d2, h2, e4, o3);
                    else {
                      var _2 = a3(h2, function() {
                        return y(d2, i2, d2, h2, e4, o3);
                      });
                      r2.notEnumerableProp(_2, "__isPromisified__", true), t3[f2] = _2;
                    }
                  }
                  return r2.toFastProperties(t3), t3;
                }
                e3.promisify = function(t3, e4) {
                  if ("function" != typeof t3) throw new u("expecting a function but got " + r2.classString(t3));
                  if (g(t3)) return t3;
                  var n5 = function(t4, e5, n6) {
                    return y(t4, e5, void 0, t4, null, n6);
                  }(t3, void 0 === (e4 = Object(e4)).context ? i2 : e4.context, !!e4.multiArgs);
                  return r2.copyDescriptors(t3, n5, _), n5;
                }, e3.promisifyAll = function(t3, e4) {
                  if ("function" != typeof t3 && "object" !== l(t3)) throw new u("the target of promisifyAll must be an object or a function\n\n    See http://goo.gl/MqrFmX\n");
                  var n5 = !!(e4 = Object(e4)).multiArgs, i3 = e4.suffix;
                  "string" != typeof i3 && (i3 = "Async");
                  var a3 = e4.filter;
                  "function" != typeof a3 && (a3 = f);
                  var o3 = e4.promisifier;
                  if ("function" != typeof o3 && (o3 = y), !r2.isIdentifier(i3)) throw new RangeError("suffix must be a valid identifier\n\n    See http://goo.gl/MqrFmX\n");
                  for (var s3 = r2.inheritedDataKeys(t3), c2 = 0; c2 < s3.length; ++c2) {
                    var d2 = t3[s3[c2]];
                    "constructor" !== s3[c2] && r2.isClass(d2) && (k(d2.prototype, i3, a3, o3, n5), k(d2, i3, a3, o3, n5));
                  }
                  return k(t3, i3, a3, o3, n5);
                };
              };
            }, { "./errors": 12, "./nodeback": 20, "./util": 36 }], 25: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2) {
                var a2, o2 = t2("./util"), s2 = o2.isObject, l2 = t2("./es5");
                "function" == typeof Map && (a2 = Map);
                var c = /* @__PURE__ */ function() {
                  var t3 = 0, e4 = 0;
                  function n5(n6, i3) {
                    this[t3] = n6, this[t3 + e4] = i3, t3++;
                  }
                  return function(i3) {
                    e4 = i3.size, t3 = 0;
                    var r3 = new Array(2 * i3.size);
                    return i3.forEach(n5, r3), r3;
                  };
                }();
                function u(t3) {
                  var e4, n5 = false;
                  if (void 0 !== a2 && t3 instanceof a2) e4 = c(t3), n5 = true;
                  else {
                    var i3 = l2.keys(t3), r3 = i3.length;
                    e4 = new Array(2 * r3);
                    for (var o3 = 0; o3 < r3; ++o3) {
                      var s3 = i3[o3];
                      e4[o3] = t3[s3], e4[o3 + r3] = s3;
                    }
                  }
                  this.constructor$(e4), this._isMap = n5, this._init$(void 0, n5 ? -6 : -3);
                }
                function d(t3) {
                  var n5, a3 = i2(t3);
                  return s2(a3) ? (n5 = a3 instanceof e3 ? a3._then(e3.props, void 0, void 0, void 0, void 0) : new u(a3).promise(), a3 instanceof e3 && n5._propagateFrom(a3, 2), n5) : r2("cannot await properties of a non-object\n\n    See http://goo.gl/MqrFmX\n");
                }
                o2.inherits(u, n4), u.prototype._init = function() {
                }, u.prototype._promiseFulfilled = function(t3, e4) {
                  if (this._values[e4] = t3, ++this._totalResolved >= this._length) {
                    var n5;
                    if (this._isMap) n5 = function(t4) {
                      for (var e5 = new a2(), n6 = t4.length / 2 | 0, i4 = 0; i4 < n6; ++i4) {
                        var r4 = t4[n6 + i4], o4 = t4[i4];
                        e5.set(r4, o4);
                      }
                      return e5;
                    }(this._values);
                    else {
                      n5 = {};
                      for (var i3 = this.length(), r3 = 0, o3 = this.length(); r3 < o3; ++r3) n5[this._values[r3 + i3]] = this._values[r3];
                    }
                    return this._resolve(n5), true;
                  }
                  return false;
                }, u.prototype.shouldCopyValues = function() {
                  return false;
                }, u.prototype.getActualLength = function(t3) {
                  return t3 >> 1;
                }, e3.prototype.props = function() {
                  return d(this);
                }, e3.props = function(t3) {
                  return d(t3);
                };
              };
            }, { "./es5": 13, "./util": 36 }], 26: [function(t2, e2, n3) {
              function i2(t3) {
                this._capacity = t3, this._length = 0, this._front = 0;
              }
              i2.prototype._willBeOverCapacity = function(t3) {
                return this._capacity < t3;
              }, i2.prototype._pushOne = function(t3) {
                var e3 = this.length();
                this._checkCapacity(e3 + 1), this[this._front + e3 & this._capacity - 1] = t3, this._length = e3 + 1;
              }, i2.prototype.push = function(t3, e3, n4) {
                var i3 = this.length() + 3;
                if (this._willBeOverCapacity(i3)) return this._pushOne(t3), this._pushOne(e3), void this._pushOne(n4);
                var r2 = this._front + i3 - 3;
                this._checkCapacity(i3);
                var a2 = this._capacity - 1;
                this[r2 + 0 & a2] = t3, this[r2 + 1 & a2] = e3, this[r2 + 2 & a2] = n4, this._length = i3;
              }, i2.prototype.shift = function() {
                var t3 = this._front, e3 = this[t3];
                return this[t3] = void 0, this._front = t3 + 1 & this._capacity - 1, this._length--, e3;
              }, i2.prototype.length = function() {
                return this._length;
              }, i2.prototype._checkCapacity = function(t3) {
                this._capacity < t3 && this._resizeTo(this._capacity << 1);
              }, i2.prototype._resizeTo = function(t3) {
                var e3 = this._capacity;
                this._capacity = t3, function(t4, e4, n4, i3, r2) {
                  for (var a2 = 0; a2 < r2; ++a2) n4[a2 + i3] = t4[a2 + e4], t4[a2 + e4] = void 0;
                }(this, 0, this, e3, this._front + this._length & e3 - 1);
              }, e2.exports = i2;
            }, {}], 27: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2) {
                var a2 = t2("./util"), o2 = function(t3) {
                  return t3.then(function(e4) {
                    return s2(e4, t3);
                  });
                };
                function s2(t3, s3) {
                  var l2 = i2(t3);
                  if (l2 instanceof e3) return o2(l2);
                  if (null === (t3 = a2.asArray(t3))) return r2("expecting an array or an iterable object but got " + a2.classString(t3));
                  var c = new e3(n4);
                  void 0 !== s3 && c._propagateFrom(s3, 3);
                  for (var u = c._fulfill, d = c._reject, h = 0, f = t3.length; h < f; ++h) {
                    var _ = t3[h];
                    (void 0 !== _ || h in t3) && e3.cast(_)._then(u, d, void 0, c, null);
                  }
                  return c;
                }
                e3.race = function(t3) {
                  return s2(t3, void 0);
                }, e3.prototype.race = function() {
                  return s2(this, void 0);
                };
              };
            }, { "./util": 36 }], 28: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2, o2) {
                var s2 = e3._getDomain, l2 = t2("./util"), c = l2.tryCatch;
                function u(t3, n5, i3, r3) {
                  this.constructor$(t3);
                  var o3 = s2();
                  this._fn = null === o3 ? n5 : l2.domainBind(o3, n5), void 0 !== i3 && (i3 = e3.resolve(i3))._attachCancellationCallback(this), this._initialValue = i3, this._currentCancellable = null, this._eachValues = r3 === a2 ? Array(this._length) : 0 === r3 ? null : void 0, this._promise._captureStackTrace(), this._init$(void 0, -5);
                }
                function d(t3, e4) {
                  this.isFulfilled() ? e4._resolve(t3) : e4._reject(t3);
                }
                function h(t3, e4, n5, r3) {
                  return "function" != typeof e4 ? i2("expecting a function but got " + l2.classString(e4)) : new u(t3, e4, n5, r3).promise();
                }
                function f(t3) {
                  this.accum = t3, this.array._gotAccum(t3);
                  var n5 = r2(this.value, this.array._promise);
                  return n5 instanceof e3 ? (this.array._currentCancellable = n5, n5._then(_, void 0, void 0, this, void 0)) : _.call(this, n5);
                }
                function _(t3) {
                  var n5, i3 = this.array, r3 = i3._promise, a3 = c(i3._fn);
                  r3._pushContext(), (n5 = void 0 !== i3._eachValues ? a3.call(r3._boundValue(), t3, this.index, this.length) : a3.call(r3._boundValue(), this.accum, t3, this.index, this.length)) instanceof e3 && (i3._currentCancellable = n5);
                  var s3 = r3._popContext();
                  return o2.checkForgottenReturns(n5, s3, void 0 !== i3._eachValues ? "Promise.each" : "Promise.reduce", r3), n5;
                }
                l2.inherits(u, n4), u.prototype._gotAccum = function(t3) {
                  void 0 !== this._eachValues && null !== this._eachValues && t3 !== a2 && this._eachValues.push(t3);
                }, u.prototype._eachComplete = function(t3) {
                  return null !== this._eachValues && this._eachValues.push(t3), this._eachValues;
                }, u.prototype._init = function() {
                }, u.prototype._resolveEmptyArray = function() {
                  this._resolve(void 0 !== this._eachValues ? this._eachValues : this._initialValue);
                }, u.prototype.shouldCopyValues = function() {
                  return false;
                }, u.prototype._resolve = function(t3) {
                  this._promise._resolveCallback(t3), this._values = null;
                }, u.prototype._resultCancelled = function(t3) {
                  if (t3 === this._initialValue) return this._cancel();
                  this._isResolved() || (this._resultCancelled$(), this._currentCancellable instanceof e3 && this._currentCancellable.cancel(), this._initialValue instanceof e3 && this._initialValue.cancel());
                }, u.prototype._iterate = function(t3) {
                  var n5, i3;
                  this._values = t3;
                  var r3 = t3.length;
                  if (void 0 !== this._initialValue ? (n5 = this._initialValue, i3 = 0) : (n5 = e3.resolve(t3[0]), i3 = 1), this._currentCancellable = n5, !n5.isRejected()) for (; i3 < r3; ++i3) {
                    var a3 = { accum: null, value: t3[i3], index: i3, length: r3, array: this };
                    n5 = n5._then(f, void 0, void 0, a3, void 0);
                  }
                  void 0 !== this._eachValues && (n5 = n5._then(this._eachComplete, void 0, void 0, this, void 0)), n5._then(d, d, void 0, n5, this);
                }, e3.prototype.reduce = function(t3, e4) {
                  return h(this, t3, e4, null);
                }, e3.reduce = function(t3, e4, n5, i3) {
                  return h(t3, e4, n5, i3);
                };
              };
            }, { "./util": 36 }], 29: [function(t2, e2, a2) {
              var o2, s2 = t2("./util"), l2 = s2.getNativePromise();
              if (s2.isNode && "undefined" == typeof MutationObserver) {
                var c = i.setImmediate, u = n2.nextTick;
                o2 = s2.isRecentNode ? function(t3) {
                  c.call(i, t3);
                } : function(t3) {
                  u.call(n2, t3);
                };
              } else if ("function" == typeof l2 && "function" == typeof l2.resolve) {
                var d = l2.resolve();
                o2 = function(t3) {
                  d.then(t3);
                };
              } else o2 = "undefined" == typeof MutationObserver || "undefined" != typeof window && window.navigator && (window.navigator.standalone || window.cordova) ? void 0 !== r ? function(t3) {
                r(t3);
              } : "undefined" != typeof setTimeout ? function(t3) {
                setTimeout(t3, 0);
              } : function() {
                throw new Error("No async scheduler available\n\n    See http://goo.gl/MqrFmX\n");
              } : function() {
                var t3 = document.createElement("div"), e3 = { attributes: true }, n3 = false, i2 = document.createElement("div");
                new MutationObserver(function() {
                  t3.classList.toggle("foo"), n3 = false;
                }).observe(i2, e3);
                return function(r2) {
                  var a3 = new MutationObserver(function() {
                    a3.disconnect(), r2();
                  });
                  a3.observe(t3, e3), n3 || (n3 = true, i2.classList.toggle("foo"));
                };
              }();
              e2.exports = o2;
            }, { "./util": 36 }], 30: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2) {
                var r2 = e3.PromiseInspection;
                function a2(t3) {
                  this.constructor$(t3);
                }
                t2("./util").inherits(a2, n4), a2.prototype._promiseResolved = function(t3, e4) {
                  return this._values[t3] = e4, ++this._totalResolved >= this._length && (this._resolve(this._values), true);
                }, a2.prototype._promiseFulfilled = function(t3, e4) {
                  var n5 = new r2();
                  return n5._bitField = 33554432, n5._settledValueField = t3, this._promiseResolved(e4, n5);
                }, a2.prototype._promiseRejected = function(t3, e4) {
                  var n5 = new r2();
                  return n5._bitField = 16777216, n5._settledValueField = t3, this._promiseResolved(e4, n5);
                }, e3.settle = function(t3) {
                  return i2.deprecated(".settle()", ".reflect()"), new a2(t3).promise();
                }, e3.prototype.settle = function() {
                  return e3.settle(this);
                };
              };
            }, { "./util": 36 }], 31: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2) {
                var r2 = t2("./util"), a2 = t2("./errors").RangeError, o2 = t2("./errors").AggregateError, s2 = r2.isArray, l2 = {};
                function c(t3) {
                  this.constructor$(t3), this._howMany = 0, this._unwrap = false, this._initialized = false;
                }
                function u(t3, e4) {
                  if ((0 | e4) !== e4 || e4 < 0) return i2("expecting a positive integer\n\n    See http://goo.gl/MqrFmX\n");
                  var n5 = new c(t3), r3 = n5.promise();
                  return n5.setHowMany(e4), n5.init(), r3;
                }
                r2.inherits(c, n4), c.prototype._init = function() {
                  if (this._initialized) if (0 !== this._howMany) {
                    this._init$(void 0, -5);
                    var t3 = s2(this._values);
                    !this._isResolved() && t3 && this._howMany > this._canPossiblyFulfill() && this._reject(this._getRangeError(this.length()));
                  } else this._resolve([]);
                }, c.prototype.init = function() {
                  this._initialized = true, this._init();
                }, c.prototype.setUnwrap = function() {
                  this._unwrap = true;
                }, c.prototype.howMany = function() {
                  return this._howMany;
                }, c.prototype.setHowMany = function(t3) {
                  this._howMany = t3;
                }, c.prototype._promiseFulfilled = function(t3) {
                  return this._addFulfilled(t3), this._fulfilled() === this.howMany() && (this._values.length = this.howMany(), 1 === this.howMany() && this._unwrap ? this._resolve(this._values[0]) : this._resolve(this._values), true);
                }, c.prototype._promiseRejected = function(t3) {
                  return this._addRejected(t3), this._checkOutcome();
                }, c.prototype._promiseCancelled = function() {
                  return this._values instanceof e3 || null == this._values ? this._cancel() : (this._addRejected(l2), this._checkOutcome());
                }, c.prototype._checkOutcome = function() {
                  if (this.howMany() > this._canPossiblyFulfill()) {
                    for (var t3 = new o2(), e4 = this.length(); e4 < this._values.length; ++e4) this._values[e4] !== l2 && t3.push(this._values[e4]);
                    return t3.length > 0 ? this._reject(t3) : this._cancel(), true;
                  }
                  return false;
                }, c.prototype._fulfilled = function() {
                  return this._totalResolved;
                }, c.prototype._rejected = function() {
                  return this._values.length - this.length();
                }, c.prototype._addRejected = function(t3) {
                  this._values.push(t3);
                }, c.prototype._addFulfilled = function(t3) {
                  this._values[this._totalResolved++] = t3;
                }, c.prototype._canPossiblyFulfill = function() {
                  return this.length() - this._rejected();
                }, c.prototype._getRangeError = function(t3) {
                  var e4 = "Input array must contain at least " + this._howMany + " items but contains only " + t3 + " items";
                  return new a2(e4);
                }, c.prototype._resolveEmptyArray = function() {
                  this._reject(this._getRangeError(0));
                }, e3.some = function(t3, e4) {
                  return u(t3, e4);
                }, e3.prototype.some = function(t3) {
                  return u(this, t3);
                }, e3._SomePromiseArray = c;
              };
            }, { "./errors": 12, "./util": 36 }], 32: [function(t2, e2, n3) {
              e2.exports = function(t3) {
                function e3(t4) {
                  void 0 !== t4 ? (t4 = t4._target(), this._bitField = t4._bitField, this._settledValueField = t4._isFateSealed() ? t4._settledValue() : void 0) : (this._bitField = 0, this._settledValueField = void 0);
                }
                e3.prototype._settledValue = function() {
                  return this._settledValueField;
                };
                var n4 = e3.prototype.value = function() {
                  if (!this.isFulfilled()) throw new TypeError("cannot get fulfillment value of a non-fulfilled promise\n\n    See http://goo.gl/MqrFmX\n");
                  return this._settledValue();
                }, i2 = e3.prototype.error = e3.prototype.reason = function() {
                  if (!this.isRejected()) throw new TypeError("cannot get rejection reason of a non-rejected promise\n\n    See http://goo.gl/MqrFmX\n");
                  return this._settledValue();
                }, r2 = e3.prototype.isFulfilled = function() {
                  return 0 != (33554432 & this._bitField);
                }, a2 = e3.prototype.isRejected = function() {
                  return 0 != (16777216 & this._bitField);
                }, o2 = e3.prototype.isPending = function() {
                  return 0 == (50397184 & this._bitField);
                }, s2 = e3.prototype.isResolved = function() {
                  return 0 != (50331648 & this._bitField);
                };
                e3.prototype.isCancelled = function() {
                  return 0 != (8454144 & this._bitField);
                }, t3.prototype.__isCancelled = function() {
                  return 65536 == (65536 & this._bitField);
                }, t3.prototype._isCancelled = function() {
                  return this._target().__isCancelled();
                }, t3.prototype.isCancelled = function() {
                  return 0 != (8454144 & this._target()._bitField);
                }, t3.prototype.isPending = function() {
                  return o2.call(this._target());
                }, t3.prototype.isRejected = function() {
                  return a2.call(this._target());
                }, t3.prototype.isFulfilled = function() {
                  return r2.call(this._target());
                }, t3.prototype.isResolved = function() {
                  return s2.call(this._target());
                }, t3.prototype.value = function() {
                  return n4.call(this._target());
                }, t3.prototype.reason = function() {
                  var t4 = this._target();
                  return t4._unsetRejectionIsUnhandled(), i2.call(t4);
                }, t3.prototype._value = function() {
                  return this._settledValue();
                }, t3.prototype._reason = function() {
                  return this._unsetRejectionIsUnhandled(), this._settledValue();
                }, t3.PromiseInspection = e3;
              };
            }, {}], 33: [function(t2, e2, n3) {
              e2.exports = function(e3, n4) {
                var i2 = t2("./util"), r2 = i2.errorObj, a2 = i2.isObject;
                var o2 = {}.hasOwnProperty;
                return function(t3, s2) {
                  if (a2(t3)) {
                    if (t3 instanceof e3) return t3;
                    var l2 = function(t4) {
                      try {
                        return function(t5) {
                          return t5.then;
                        }(t4);
                      } catch (t5) {
                        return r2.e = t5, r2;
                      }
                    }(t3);
                    if (l2 === r2) {
                      s2 && s2._pushContext();
                      var c = e3.reject(l2.e);
                      return s2 && s2._popContext(), c;
                    }
                    if ("function" == typeof l2) return function(t4) {
                      try {
                        return o2.call(t4, "_promise0");
                      } catch (t5) {
                        return false;
                      }
                    }(t3) ? (c = new e3(n4), t3._then(c._fulfill, c._reject, void 0, c, null), c) : function(t4, a3, o3) {
                      var s3 = new e3(n4), l3 = s3;
                      o3 && o3._pushContext(), s3._captureStackTrace(), o3 && o3._popContext();
                      var c2 = true, u = i2.tryCatch(a3).call(t4, function(t5) {
                        s3 && (s3._resolveCallback(t5), s3 = null);
                      }, function(t5) {
                        s3 && (s3._rejectCallback(t5, c2, true), s3 = null);
                      });
                      return c2 = false, s3 && u === r2 && (s3._rejectCallback(u.e, true, true), s3 = null), l3;
                    }(t3, l2, s2);
                  }
                  return t3;
                };
              };
            }, { "./util": 36 }], 34: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2) {
                var r2 = t2("./util"), a2 = e3.TimeoutError;
                function o2(t3) {
                  this.handle = t3;
                }
                o2.prototype._resultCancelled = function() {
                  clearTimeout(this.handle);
                };
                var s2 = function(t3) {
                  return l2(+this).thenReturn(t3);
                }, l2 = e3.delay = function(t3, r3) {
                  var a3, l3;
                  return void 0 !== r3 ? (a3 = e3.resolve(r3)._then(s2, null, null, t3, void 0), i2.cancellation() && r3 instanceof e3 && a3._setOnCancel(r3)) : (a3 = new e3(n4), l3 = setTimeout(function() {
                    a3._fulfill();
                  }, +t3), i2.cancellation() && a3._setOnCancel(new o2(l3)), a3._captureStackTrace()), a3._setAsyncGuaranteed(), a3;
                };
                e3.prototype.delay = function(t3) {
                  return l2(t3, this);
                };
                function c(t3) {
                  return clearTimeout(this.handle), t3;
                }
                function u(t3) {
                  throw clearTimeout(this.handle), t3;
                }
                e3.prototype.timeout = function(t3, e4) {
                  var n5, s3;
                  t3 = +t3;
                  var l3 = new o2(setTimeout(function() {
                    n5.isPending() && function(t4, e5, n6) {
                      var i3;
                      i3 = "string" != typeof e5 ? e5 instanceof Error ? e5 : new a2("operation timed out") : new a2(e5), r2.markAsOriginatingFromRejection(i3), t4._attachExtraTrace(i3), t4._reject(i3), null != n6 && n6.cancel();
                    }(n5, e4, s3);
                  }, t3));
                  return i2.cancellation() ? (s3 = this.then(), (n5 = s3._then(c, u, void 0, l3, void 0))._setOnCancel(l3)) : n5 = this._then(c, u, void 0, l3, void 0), n5;
                };
              };
            }, { "./util": 36 }], 35: [function(t2, e2, n3) {
              e2.exports = function(e3, n4, i2, r2, a2, o2) {
                var s2 = t2("./util"), l2 = t2("./errors").TypeError, c = t2("./util").inherits, u = s2.errorObj, d = s2.tryCatch, h = {};
                function f(t3) {
                  setTimeout(function() {
                    throw t3;
                  }, 0);
                }
                function _(t3, n5) {
                  var r3 = 0, o3 = t3.length, s3 = new e3(a2);
                  return function a3() {
                    if (r3 >= o3) return s3._fulfill();
                    var l3 = function(t4) {
                      var e4 = i2(t4);
                      return e4 !== t4 && "function" == typeof t4._isDisposable && "function" == typeof t4._getDisposer && t4._isDisposable() && e4._setDisposable(t4._getDisposer()), e4;
                    }(t3[r3++]);
                    if (l3 instanceof e3 && l3._isDisposable()) {
                      try {
                        l3 = i2(l3._getDisposer().tryDispose(n5), t3.promise);
                      } catch (t4) {
                        return f(t4);
                      }
                      if (l3 instanceof e3) return l3._then(a3, f, null, null, null);
                    }
                    a3();
                  }(), s3;
                }
                function g(t3, e4, n5) {
                  this._data = t3, this._promise = e4, this._context = n5;
                }
                function p(t3, e4, n5) {
                  this.constructor$(t3, e4, n5);
                }
                function v(t3) {
                  return g.isDisposer(t3) ? (this.resources[this.index]._setDisposable(t3), t3.promise()) : t3;
                }
                function m(t3) {
                  this.length = t3, this.promise = null, this[t3 - 1] = null;
                }
                g.prototype.data = function() {
                  return this._data;
                }, g.prototype.promise = function() {
                  return this._promise;
                }, g.prototype.resource = function() {
                  return this.promise().isFulfilled() ? this.promise().value() : h;
                }, g.prototype.tryDispose = function(t3) {
                  var e4 = this.resource(), n5 = this._context;
                  void 0 !== n5 && n5._pushContext();
                  var i3 = e4 !== h ? this.doDispose(e4, t3) : null;
                  return void 0 !== n5 && n5._popContext(), this._promise._unsetDisposable(), this._data = null, i3;
                }, g.isDisposer = function(t3) {
                  return null != t3 && "function" == typeof t3.resource && "function" == typeof t3.tryDispose;
                }, c(p, g), p.prototype.doDispose = function(t3, e4) {
                  return this.data().call(t3, t3, e4);
                }, m.prototype._resultCancelled = function() {
                  for (var t3 = this.length, n5 = 0; n5 < t3; ++n5) {
                    var i3 = this[n5];
                    i3 instanceof e3 && i3.cancel();
                  }
                }, e3.using = function() {
                  var t3 = arguments.length;
                  if (t3 < 2) return n4("you must pass at least 2 arguments to Promise.using");
                  var r3, a3 = arguments[t3 - 1];
                  if ("function" != typeof a3) return n4("expecting a function but got " + s2.classString(a3));
                  var l3 = true;
                  2 === t3 && Array.isArray(arguments[0]) ? (t3 = (r3 = arguments[0]).length, l3 = false) : (r3 = arguments, t3--);
                  for (var c2 = new m(t3), h2 = 0; h2 < t3; ++h2) {
                    var f2 = r3[h2];
                    if (g.isDisposer(f2)) {
                      var p2 = f2;
                      (f2 = f2.promise())._setDisposable(p2);
                    } else {
                      var y = i2(f2);
                      y instanceof e3 && (f2 = y._then(v, null, null, { resources: c2, index: h2 }, void 0));
                    }
                    c2[h2] = f2;
                  }
                  var k = new Array(c2.length);
                  for (h2 = 0; h2 < k.length; ++h2) k[h2] = e3.resolve(c2[h2]).reflect();
                  var b = e3.all(k).then(function(t4) {
                    for (var e4 = 0; e4 < t4.length; ++e4) {
                      var n5 = t4[e4];
                      if (n5.isRejected()) return u.e = n5.error(), u;
                      if (!n5.isFulfilled()) return void b.cancel();
                      t4[e4] = n5.value();
                    }
                    w._pushContext(), a3 = d(a3);
                    var i3 = l3 ? a3.apply(void 0, t4) : a3(t4), r4 = w._popContext();
                    return o2.checkForgottenReturns(i3, r4, "Promise.using", w), i3;
                  }), w = b.lastly(function() {
                    var t4 = new e3.PromiseInspection(b);
                    return _(c2, t4);
                  });
                  return c2.promise = w, w._setOnCancel(c2), w;
                }, e3.prototype._setDisposable = function(t3) {
                  this._bitField = 131072 | this._bitField, this._disposer = t3;
                }, e3.prototype._isDisposable = function() {
                  return (131072 & this._bitField) > 0;
                }, e3.prototype._getDisposer = function() {
                  return this._disposer;
                }, e3.prototype._unsetDisposable = function() {
                  this._bitField = -131073 & this._bitField, this._disposer = void 0;
                }, e3.prototype.disposer = function(t3) {
                  if ("function" == typeof t3) return new p(t3, this, r2());
                  throw new l2();
                };
              };
            }, { "./errors": 12, "./util": 36 }], 36: [function(t2, e2, r2) {
              var a2 = t2("./es5"), o2 = "undefined" == typeof navigator, s2 = { e: {} }, c, u = "undefined" != typeof self ? self : "undefined" != typeof window ? window : void 0 !== i ? i : void 0 !== this ? this : null;
              function d() {
                try {
                  var t3 = c;
                  return c = null, t3.apply(this, arguments);
                } catch (t4) {
                  return s2.e = t4, s2;
                }
              }
              function h(t3) {
                return c = t3, d;
              }
              var f = function(t3, e3) {
                var n3 = {}.hasOwnProperty;
                function i2() {
                  for (var i3 in this.constructor = t3, this.constructor$ = e3, e3.prototype) n3.call(e3.prototype, i3) && "$" !== i3.charAt(i3.length - 1) && (this[i3 + "$"] = e3.prototype[i3]);
                }
                return i2.prototype = e3.prototype, t3.prototype = new i2(), t3.prototype;
              };
              function _(t3) {
                return null == t3 || true === t3 || false === t3 || "string" == typeof t3 || "number" == typeof t3;
              }
              function g(t3) {
                return "function" == typeof t3 || "object" === l(t3) && null !== t3;
              }
              function p(t3) {
                return _(t3) ? new Error(E(t3)) : t3;
              }
              function v(t3, e3) {
                var n3, i2 = t3.length, r3 = new Array(i2 + 1);
                for (n3 = 0; n3 < i2; ++n3) r3[n3] = t3[n3];
                return r3[n3] = e3, r3;
              }
              function m(t3, e3, n3) {
                if (!a2.isES5) return {}.hasOwnProperty.call(t3, e3) ? t3[e3] : void 0;
                var i2 = Object.getOwnPropertyDescriptor(t3, e3);
                return null != i2 ? null == i2.get && null == i2.set ? i2.value : n3 : void 0;
              }
              function y(t3, e3, n3) {
                if (_(t3)) return t3;
                var i2 = { value: n3, configurable: true, enumerable: false, writable: true };
                return a2.defineProperty(t3, e3, i2), t3;
              }
              function k(t3) {
                throw t3;
              }
              var b = function() {
                var t3 = [Array.prototype, Object.prototype, Function.prototype], e3 = function(e4) {
                  for (var n4 = 0; n4 < t3.length; ++n4) if (t3[n4] === e4) return true;
                  return false;
                };
                if (a2.isES5) {
                  var n3 = Object.getOwnPropertyNames;
                  return function(t4) {
                    for (var i3 = [], r3 = /* @__PURE__ */ Object.create(null); null != t4 && !e3(t4); ) {
                      var o3;
                      try {
                        o3 = n3(t4);
                      } catch (t5) {
                        return i3;
                      }
                      for (var s3 = 0; s3 < o3.length; ++s3) {
                        var l2 = o3[s3];
                        if (!r3[l2]) {
                          r3[l2] = true;
                          var c2 = Object.getOwnPropertyDescriptor(t4, l2);
                          null != c2 && null == c2.get && null == c2.set && i3.push(l2);
                        }
                      }
                      t4 = a2.getPrototypeOf(t4);
                    }
                    return i3;
                  };
                }
                var i2 = {}.hasOwnProperty;
                return function(n4) {
                  if (e3(n4)) return [];
                  var r3 = [];
                  t: for (var a3 in n4) if (i2.call(n4, a3)) r3.push(a3);
                  else {
                    for (var o3 = 0; o3 < t3.length; ++o3) if (i2.call(t3[o3], a3)) continue t;
                    r3.push(a3);
                  }
                  return r3;
                };
              }(), w = /this\s*\.\s*\S+\s*=/;
              function x(t3) {
                try {
                  if ("function" == typeof t3) {
                    var e3 = a2.names(t3.prototype), n3 = a2.isES5 && e3.length > 1, i2 = e3.length > 0 && !(1 === e3.length && "constructor" === e3[0]), r3 = w.test(t3 + "") && a2.names(t3).length > 0;
                    if (n3 || i2 || r3) return true;
                  }
                  return false;
                } catch (t4) {
                  return false;
                }
              }
              function $(t3) {
                function e3() {
                }
                e3.prototype = t3;
                var n3 = new e3();
                function i2() {
                  return l(n3.foo);
                }
                return i2(), i2(), t3;
              }
              var S = /^[a-z$_][a-z$_0-9]*$/i;
              function T(t3) {
                return S.test(t3);
              }
              function C(t3, e3, n3) {
                for (var i2 = new Array(t3), r3 = 0; r3 < t3; ++r3) i2[r3] = e3 + r3 + n3;
                return i2;
              }
              function E(t3) {
                try {
                  return t3 + "";
                } catch (t4) {
                  return "[no string representation]";
                }
              }
              function D(t3) {
                return t3 instanceof Error || null !== t3 && "object" === l(t3) && "string" == typeof t3.message && "string" == typeof t3.name;
              }
              function M(t3) {
                try {
                  y(t3, "isOperational", true);
                } catch (t4) {
                }
              }
              function A(t3) {
                return null != t3 && (t3 instanceof Error.__BluebirdErrorTypes__.OperationalError || true === t3.isOperational);
              }
              function I(t3) {
                return D(t3) && a2.propertyIsWritable(t3, "stack");
              }
              var N = "stack" in new Error() ? function(t3) {
                return I(t3) ? t3 : new Error(E(t3));
              } : function(t3) {
                if (I(t3)) return t3;
                try {
                  throw new Error(E(t3));
                } catch (t4) {
                  return t4;
                }
              };
              function P(t3) {
                return {}.toString.call(t3);
              }
              function L(t3, e3, n3) {
                for (var i2 = a2.names(t3), r3 = 0; r3 < i2.length; ++r3) {
                  var o3 = i2[r3];
                  if (n3(o3)) try {
                    a2.defineProperty(e3, o3, a2.getDescriptor(t3, o3));
                  } catch (t4) {
                  }
                }
              }
              var O = function(t3) {
                return a2.isArray(t3) ? t3 : null;
              };
              if ("undefined" != typeof Symbol && Symbol.iterator) {
                var R = "function" == typeof Array.from ? function(t3) {
                  return Array.from(t3);
                } : function(t3) {
                  for (var e3, n3 = [], i2 = t3[Symbol.iterator](); !(e3 = i2.next()).done; ) n3.push(e3.value);
                  return n3;
                };
                O = function(t3) {
                  return a2.isArray(t3) ? t3 : null != t3 && "function" == typeof t3[Symbol.iterator] ? R(t3) : null;
                };
              }
              var j = void 0 !== n2 && "[object process]" === P(n2).toLowerCase(), H = void 0 !== n2 && void 0 !== n2.env;
              function F(t3) {
                return H ? n2.env[t3] : void 0;
              }
              function B() {
                if ("function" == typeof Promise) try {
                  var t3 = new Promise(function() {
                  });
                  if ("[object Promise]" === {}.toString.call(t3)) return Promise;
                } catch (t4) {
                }
              }
              function z(t3, e3) {
                return t3.bind(e3);
              }
              var V = { isClass: x, isIdentifier: T, inheritedDataKeys: b, getDataPropertyOrDefault: m, thrower: k, isArray: a2.isArray, asArray: O, notEnumerableProp: y, isPrimitive: _, isObject: g, isError: D, canEvaluate: o2, errorObj: s2, tryCatch: h, inherits: f, withAppended: v, maybeWrapAsError: p, toFastProperties: $, filledRange: C, toString: E, canAttachTrace: I, ensureErrorObject: N, originatesFromRejection: A, markAsOriginatingFromRejection: M, classString: P, copyDescriptors: L, hasDevTools: "undefined" != typeof chrome && chrome && "function" == typeof chrome.loadTimes, isNode: j, hasEnvVariables: H, env: F, global: u, getNativePromise: B, domainBind: z };
              V.isRecentNode = V.isNode && function() {
                var t3;
                return n2.versions && n2.versions.node ? t3 = n2.versions.node.split(".").map(Number) : n2.version && (t3 = n2.version.split(".").map(Number)), 0 === t3[0] && t3[1] > 10 || t3[0] > 0;
              }(), V.isNode && V.toFastProperties(n2);
              try {
                throw new Error();
              } catch (t3) {
                V.lastLineError = t3;
              }
              e2.exports = V;
            }, { "./es5": 13 }] }, {}, [4])(4);
          }), "undefined" != typeof window && null !== window ? window.P = window.Promise : "undefined" != typeof self && null !== self && (self.P = self.Promise);
        }).call(this, n(31), n(13), n(108).setImmediate);
      }, function(t, e, n) {
        (function(t2) {
          var i = void 0 !== t2 && t2 || "undefined" != typeof self && self || window, r = Function.prototype.apply;
          function a(t3, e2) {
            this._id = t3, this._clearFn = e2;
          }
          e.setTimeout = function() {
            return new a(r.call(setTimeout, i, arguments), clearTimeout);
          }, e.setInterval = function() {
            return new a(r.call(setInterval, i, arguments), clearInterval);
          }, e.clearTimeout = e.clearInterval = function(t3) {
            t3 && t3.close();
          }, a.prototype.unref = a.prototype.ref = function() {
          }, a.prototype.close = function() {
            this._clearFn.call(i, this._id);
          }, e.enroll = function(t3, e2) {
            clearTimeout(t3._idleTimeoutId), t3._idleTimeout = e2;
          }, e.unenroll = function(t3) {
            clearTimeout(t3._idleTimeoutId), t3._idleTimeout = -1;
          }, e._unrefActive = e.active = function(t3) {
            clearTimeout(t3._idleTimeoutId);
            var e2 = t3._idleTimeout;
            e2 >= 0 && (t3._idleTimeoutId = setTimeout(function() {
              t3._onTimeout && t3._onTimeout();
            }, e2));
          }, n(109), e.setImmediate = "undefined" != typeof self && self.setImmediate || void 0 !== t2 && t2.setImmediate || this && this.setImmediate, e.clearImmediate = "undefined" != typeof self && self.clearImmediate || void 0 !== t2 && t2.clearImmediate || this && this.clearImmediate;
        }).call(this, n(13));
      }, function(t, e, n) {
        (function(t2, e2) {
          !function(t3, n2) {
            if (!t3.setImmediate) {
              var i, r = 1, a = {}, o = false, s = t3.document, l = Object.getPrototypeOf && Object.getPrototypeOf(t3);
              l = l && l.setTimeout ? l : t3, "[object process]" === {}.toString.call(t3.process) ? i = function(t4) {
                e2.nextTick(function() {
                  u(t4);
                });
              } : function() {
                if (t3.postMessage && !t3.importScripts) {
                  var e3 = true, n3 = t3.onmessage;
                  return t3.onmessage = function() {
                    e3 = false;
                  }, t3.postMessage("", "*"), t3.onmessage = n3, e3;
                }
              }() ? function() {
                var e3 = "setImmediate$" + Math.random() + "$", n3 = function(n4) {
                  n4.source === t3 && "string" == typeof n4.data && 0 === n4.data.indexOf(e3) && u(+n4.data.slice(e3.length));
                };
                t3.addEventListener ? t3.addEventListener("message", n3, false) : t3.attachEvent("onmessage", n3), i = function(n4) {
                  t3.postMessage(e3 + n4, "*");
                };
              }() : t3.MessageChannel ? function() {
                var t4 = new MessageChannel();
                t4.port1.onmessage = function(t5) {
                  u(t5.data);
                }, i = function(e3) {
                  t4.port2.postMessage(e3);
                };
              }() : s && "onreadystatechange" in s.createElement("script") ? function() {
                var t4 = s.documentElement;
                i = function(e3) {
                  var n3 = s.createElement("script");
                  n3.onreadystatechange = function() {
                    u(e3), n3.onreadystatechange = null, t4.removeChild(n3), n3 = null;
                  }, t4.appendChild(n3);
                };
              }() : i = function(t4) {
                setTimeout(u, 0, t4);
              }, l.setImmediate = function(t4) {
                "function" != typeof t4 && (t4 = new Function("" + t4));
                for (var e3 = new Array(arguments.length - 1), n3 = 0; n3 < e3.length; n3++) e3[n3] = arguments[n3 + 1];
                var o2 = { callback: t4, args: e3 };
                return a[r] = o2, i(r), r++;
              }, l.clearImmediate = c;
            }
            function c(t4) {
              delete a[t4];
            }
            function u(t4) {
              if (o) setTimeout(u, 0, t4);
              else {
                var e3 = a[t4];
                if (e3) {
                  o = true;
                  try {
                    !function(t5) {
                      var e4 = t5.callback, i2 = t5.args;
                      switch (i2.length) {
                        case 0:
                          e4();
                          break;
                        case 1:
                          e4(i2[0]);
                          break;
                        case 2:
                          e4(i2[0], i2[1]);
                          break;
                        case 3:
                          e4(i2[0], i2[1], i2[2]);
                          break;
                        default:
                          e4.apply(n2, i2);
                      }
                    }(e3);
                  } finally {
                    c(t4), o = false;
                  }
                }
              }
            }
          }("undefined" == typeof self ? void 0 === t2 ? this : t2 : self);
        }).call(this, n(13), n(31));
      }, function(t, e, n) {
        var i = n(0), r = n(111), a = n(35), o = n(9);
        t.exports = function(t2) {
          var e2 = r.create();
          i.mixin(t2, e2);
          var s = t2.createDatastore({ name: "task", type: "treeDatastore", rootId: function() {
            return t2.config.root_id;
          }, initItem: i.bind(function(e3) {
            this.defined(e3.id) || (e3.id = this.uid()), e3.start_date && (e3.start_date = t2.date.parseDate(e3.start_date, "parse_date")), e3.end_date && (e3.end_date = t2.date.parseDate(e3.end_date, "parse_date"));
            var n2 = null;
            (e3.duration || 0 === e3.duration) && (e3.duration = n2 = 1 * e3.duration), n2 && (e3.start_date && !e3.end_date ? e3.end_date = this.calculateEndDate(e3) : !e3.start_date && e3.end_date && (e3.start_date = this.calculateEndDate({ start_date: e3.end_date, duration: -e3.duration, task: e3 }))), e3.progress = Number(e3.progress) || 0, this._isAllowedUnscheduledTask(e3) && this._set_default_task_timing(e3), this._init_task_timing(e3), e3.start_date && e3.end_date && this.correctTaskWorkTime(e3), e3.$source = [], e3.$target = [];
            var r2 = this.$data.tasksStore.getItem(e3.id);
            return r2 && !i.defined(e3.open) && (e3.$open = r2.$open), void 0 === e3.parent && (e3.parent = this.config.root_id), e3;
          }, t2), getConfig: function() {
            return t2.config;
          } }), l = t2.createDatastore({ name: "link", initItem: i.bind(function(t3) {
            return this.defined(t3.id) || (t3.id = this.uid()), t3;
          }, t2) });
          function c(e3) {
            var n2 = t2.isTaskVisible(e3);
            if (!n2 && t2.isTaskExists(e3)) {
              var i2 = t2.getParent(e3);
              t2.isTaskExists(i2) && t2.isTaskVisible(i2) && (i2 = t2.getTask(i2), t2.isSplitTask(i2) && (n2 = true));
            }
            return n2;
          }
          function u(e3) {
            if (t2.isTaskExists(e3.source)) {
              var n2 = t2.getTask(e3.source);
              n2.$source = n2.$source || [], n2.$source.push(e3.id);
            }
            if (t2.isTaskExists(e3.target)) {
              var i2 = t2.getTask(e3.target);
              i2.$target = i2.$target || [], i2.$target.push(e3.id);
            }
          }
          function d(e3) {
            if (t2.isTaskExists(e3.source)) {
              for (var n2 = t2.getTask(e3.source), i2 = 0; i2 < n2.$source.length; i2++) if (n2.$source[i2] == e3.id) {
                n2.$source.splice(i2, 1);
                break;
              }
            }
            if (t2.isTaskExists(e3.target)) {
              var r2 = t2.getTask(e3.target);
              for (i2 = 0; i2 < r2.$target.length; i2++) if (r2.$target[i2] == e3.id) {
                r2.$target.splice(i2, 1);
                break;
              }
            }
          }
          function h() {
            for (var e3 = null, n2 = t2.$data.tasksStore.getItems(), i2 = 0, r2 = n2.length; i2 < r2; i2++) (e3 = n2[i2]).$source = [], e3.$target = [];
            var a2 = t2.$data.linksStore.getItems();
            for (i2 = 0, r2 = a2.length; i2 < r2; i2++) u(a2[i2]);
          }
          function f(t3) {
            var e3 = t3.source, n2 = t3.target;
            for (var i2 in t3.events) !function(t4, i3) {
              e3.attachEvent(t4, function() {
                return n2.callEvent(i3, Array.prototype.slice.call(arguments));
              }, i3);
            }(i2, t3.events[i2]);
          }
          t2.attachEvent("onDestroy", function() {
            s.destructor(), l.destructor();
          }), t2.attachEvent("onLinkValidation", function(e3) {
            if (t2.isLinkExists(e3.id) || "predecessor_generated" === e3.id) return true;
            for (var n2 = t2.getTask(e3.source).$source, i2 = 0; i2 < n2.length; i2++) {
              var r2 = t2.getLink(n2[i2]), a2 = e3.source == r2.source, o2 = e3.target == r2.target, s2 = e3.type == r2.type;
              if (a2 && o2 && s2) return false;
            }
            return true;
          }), s.attachEvent("onBeforeRefreshAll", function() {
            for (var e3 = s.getVisibleItems(), n2 = 0; n2 < e3.length; n2++) {
              var i2 = e3[n2];
              i2.$index = n2, i2.$local_index = t2.getTaskIndex(i2.id), t2.resetProjectDates(i2);
            }
          }), s.attachEvent("onFilterItem", function(e3, n2) {
            if (t2.config.show_tasks_outside_timescale) return true;
            var i2 = null, r2 = null;
            if (t2.config.start_date && t2.config.end_date) {
              if (t2._isAllowedUnscheduledTask(n2)) return true;
              if (i2 = t2.config.start_date.valueOf(), r2 = t2.config.end_date.valueOf(), +n2.start_date > r2 || +n2.end_date < +i2) return false;
            }
            return true;
          }), s.attachEvent("onIdChange", function(e3, n2) {
            t2._update_flags(e3, n2);
            var i2 = t2.getTask(n2);
            s.isSilent() || (i2.$split_subtask || i2.rollup) && t2.eachParent(function(e4) {
              t2.refreshTask(e4.id);
            }, n2);
          }), s.attachEvent("onAfterUpdate", function(e3) {
            if (t2._update_parents(e3), t2.getState("batchUpdate").batch_update) return true;
            var n2 = s.getItem(e3);
            n2.$source || (n2.$source = []);
            for (var i2 = 0; i2 < n2.$source.length; i2++) l.refresh(n2.$source[i2]);
            for (n2.$target || (n2.$target = []), i2 = 0; i2 < n2.$target.length; i2++) l.refresh(n2.$target[i2]);
          }), s.attachEvent("onBeforeItemMove", function(e3, n2, i2) {
            return !o(e3, t2, s) || (console.log("The placeholder task cannot be moved to another position."), false);
          }), s.attachEvent("onAfterItemMove", function(e3, n2, i2) {
            var r2 = t2.getTask(e3);
            null !== this.getNextSibling(e3) ? r2.$drop_target = this.getNextSibling(e3) : null !== this.getPrevSibling(e3) ? r2.$drop_target = "next:" + this.getPrevSibling(e3) : r2.$drop_target = "next:null";
          }), s.attachEvent("onStoreUpdated", function(e3, n2, i2) {
            if ("delete" == i2 && t2._update_flags(e3, null), !t2.$services.getService("state").getState("batchUpdate").batch_update) {
              if (t2.config.fit_tasks && "paint" !== i2) {
                var r2 = t2.getState();
                a(t2);
                var o2 = t2.getState();
                if (+r2.min_date != +o2.min_date || +r2.max_date != +o2.max_date) return t2.render(), t2.callEvent("onScaleAdjusted", []), true;
              }
              "add" == i2 || "move" == i2 || "delete" == i2 ? t2.$layout && t2.$layout.resize() : e3 || l.refresh();
            }
          }), l.attachEvent("onAfterAdd", function(t3, e3) {
            u(e3);
          }), l.attachEvent("onAfterUpdate", function(t3, e3) {
            h();
          }), l.attachEvent("onAfterDelete", function(t3, e3) {
            d(e3);
          }), l.attachEvent("onBeforeIdChange", function(e3, n2) {
            d(t2.mixin({ id: e3 }, t2.$data.linksStore.getItem(n2))), u(t2.$data.linksStore.getItem(n2));
          }), l.attachEvent("onFilterItem", function(e3, n2) {
            if (!t2.config.show_links) return false;
            var i2 = c(n2.source), r2 = c(n2.target);
            return !(!i2 || !r2 || t2._isAllowedUnscheduledTask(t2.getTask(n2.source)) || t2._isAllowedUnscheduledTask(t2.getTask(n2.target))) && t2.callEvent("onBeforeLinkDisplay", [e3, n2]);
          }), function() {
            var e3 = n(36), i2 = {};
            t2.attachEvent("onBeforeTaskDelete", function(n2, r2) {
              return i2[n2] = e3.getSubtreeLinks(t2, n2), true;
            }), t2.attachEvent("onAfterTaskDelete", function(e4, n2) {
              i2[e4] && t2.$data.linksStore.silent(function() {
                for (var n3 in i2[e4]) t2.$data.linksStore.removeItem(n3), d(i2[e4][n3]);
                i2[e4] = null;
              });
            });
          }(), t2.attachEvent("onAfterLinkDelete", function(e3, n2) {
            t2.refreshTask(n2.source), t2.refreshTask(n2.target);
          }), t2.attachEvent("onParse", h), f({ source: l, target: t2, events: { onItemLoading: "onLinkLoading", onBeforeAdd: "onBeforeLinkAdd", onAfterAdd: "onAfterLinkAdd", onBeforeUpdate: "onBeforeLinkUpdate", onAfterUpdate: "onAfterLinkUpdate", onBeforeDelete: "onBeforeLinkDelete", onAfterDelete: "onAfterLinkDelete", onIdChange: "onLinkIdChange" } }), f({ source: s, target: t2, events: { onItemLoading: "onTaskLoading", onBeforeAdd: "onBeforeTaskAdd", onAfterAdd: "onAfterTaskAdd", onBeforeUpdate: "onBeforeTaskUpdate", onAfterUpdate: "onAfterTaskUpdate", onBeforeDelete: "onBeforeTaskDelete", onAfterDelete: "onAfterTaskDelete", onIdChange: "onTaskIdChange", onBeforeItemMove: "onBeforeTaskMove", onAfterItemMove: "onAfterTaskMove", onFilterItem: "onBeforeTaskDisplay", onItemOpen: "onTaskOpened", onItemClose: "onTaskClosed", onBeforeSelect: "onBeforeTaskSelected", onAfterSelect: "onTaskSelected", onAfterUnselect: "onTaskUnselected" } }), t2.$data = { tasksStore: s, linksStore: l };
        };
      }, function(t, e, n) {
        var i = n(0), r = n(112), a = n(113), o = n(32), s = n(34), l = n(114), c = n(115), u = n(10), d = n(2).replaceValidZeroId;
        function h() {
          for (var t2 = this.$services.getService("datastores"), e2 = [], n2 = 0; n2 < t2.length; n2++) {
            var i2 = this.getDatastore(t2[n2]);
            i2.$destroyed || e2.push(i2);
          }
          return e2;
        }
        o.default && (o = o.default);
        var f = function() {
          return { createDatastore: function(t2) {
            var e2 = "treedatastore" == (t2.type || "").toLowerCase() ? s : o;
            if (t2) {
              var n2 = this;
              t2.openInitially = function() {
                return n2.config.open_tree_initially;
              }, t2.copyOnParse = function() {
                return n2.config.deepcopy_on_parse;
              };
            }
            var i2 = new e2(t2);
            if (this.mixin(i2, l(i2)), t2.name) {
              var r2 = "datastore:" + t2.name;
              i2.attachEvent("onDestroy", (function() {
                this.$services.dropService(r2);
                for (var e3 = this.$services.getService("datastores"), n3 = 0; n3 < e3.length; n3++) if (e3[n3] === t2.name) {
                  e3.splice(n3, 1);
                  break;
                }
              }).bind(this)), this.$services.dropService(r2), this.$services.setService(r2, function() {
                return i2;
              });
              var a2 = this.$services.getService("datastores");
              a2 ? a2.indexOf(t2.name) < 0 && a2.push(t2.name) : (a2 = [], this.$services.setService("datastores", function() {
                return a2;
              }), a2.push(t2.name)), c.bindDataStore(t2.name, this);
            }
            return i2;
          }, getDatastore: function(t2) {
            return this.$services.getService("datastore:" + t2);
          }, _getDatastores: h, refreshData: function() {
            var t2;
            u(this) || (t2 = this.getScrollState()), this.callEvent("onBeforeDataRender", []);
            for (var e2 = h.call(this), n2 = 0; n2 < e2.length; n2++) e2[n2].refresh();
            this.config.preserve_scroll && !u(this) && (t2.x || t2.y) && this.scrollTo(t2.x, t2.y), this.callEvent("onDataRender", []);
          }, isChildOf: function(t2, e2) {
            return this.$data.tasksStore.isChildOf(t2, e2);
          }, refreshTask: function(t2, e2) {
            var n2 = this.getTask(t2), i2 = this;
            function r2() {
              if (void 0 === e2 || e2) {
                for (var t3 = 0; t3 < n2.$source.length; t3++) i2.refreshLink(n2.$source[t3]);
                for (t3 = 0; t3 < n2.$target.length; t3++) i2.refreshLink(n2.$target[t3]);
              }
            }
            if (n2 && this.isTaskVisible(t2)) this.$data.tasksStore.refresh(t2, !!this.getState("tasksDnd").drag_id || false === e2), r2();
            else if (this.isTaskExists(t2) && this.isTaskExists(this.getParent(t2)) && !this._bulk_dnd) {
              this.refreshTask(this.getParent(t2));
              var a2 = false;
              this.eachParent(function(t3) {
                (a2 || this.isSplitTask(t3)) && (a2 = true);
              }, t2), a2 && r2();
            }
          }, refreshLink: function(t2) {
            this.$data.linksStore.refresh(t2, !!this.getState("tasksDnd").drag_id);
          }, silent: function(t2) {
            var e2 = this;
            e2.$data.tasksStore.silent(function() {
              e2.$data.linksStore.silent(function() {
                t2();
              });
            });
          }, clearAll: function() {
            for (var t2 = h.call(this), e2 = 0; e2 < t2.length; e2++) t2[e2].silent(function() {
              t2[e2].clearAll();
            });
            for (e2 = 0; e2 < t2.length; e2++) t2[e2].clearAll();
            this._update_flags(), this.userdata = {}, this.callEvent("onClear", []), this.render();
          }, _clear_data: function() {
            this.$data.tasksStore.clearAll(), this.$data.linksStore.clearAll(), this._update_flags(), this.userdata = {};
          }, selectTask: function(t2) {
            var e2 = this.$data.tasksStore;
            if (!this.config.select_task) return false;
            if (t2 = d(t2, this.config.root_id)) {
              var n2 = this.getSelectedId();
              e2.select(t2), n2 && e2.pull[n2].$split_subtask && n2 != t2 && this.refreshTask(n2), e2.pull[t2].$split_subtask && n2 != t2 && this.refreshTask(t2);
            }
            return e2.getSelectedId();
          }, unselectTask: function(t2) {
            var e2 = this.$data.tasksStore;
            e2.unselect(t2), t2 && e2.pull[t2].$split_subtask && this.refreshTask(t2);
          }, isSelectedTask: function(t2) {
            return this.$data.tasksStore.isSelected(t2);
          }, getSelectedId: function() {
            return this.$data.tasksStore.getSelectedId();
          } };
        };
        t.exports = { create: function() {
          var t2 = i.mixin({}, f());
          return i.mixin(t2, r()), i.mixin(t2, a()), t2;
        } };
      }, function(t, e, n) {
        var i = n(0), r = n(2).replaceValidZeroId;
        t.exports = function() {
          return { getTask: function(t2) {
            t2 = r(t2, this.config.root_id), this.assert(t2, "Invalid argument for gantt.getTask");
            var e2 = this.$data.tasksStore.getItem(t2);
            return this.assert(e2, "Task not found id=" + t2), e2;
          }, getTaskByTime: function(t2, e2) {
            var n2 = this.$data.tasksStore.getItems(), i2 = [];
            if (t2 || e2) {
              t2 = +t2 || -1 / 0, e2 = +e2 || 1 / 0;
              for (var r2 = 0; r2 < n2.length; r2++) {
                var a = n2[r2];
                +a.start_date < e2 && +a.end_date > t2 && i2.push(a);
              }
            } else i2 = n2;
            return i2;
          }, isTaskExists: function(t2) {
            return !(!this.$data || !this.$data.tasksStore) && this.$data.tasksStore.exists(t2);
          }, updateTask: function(t2, e2) {
            i.defined(e2) || (e2 = this.getTask(t2)), this.$data.tasksStore.updateItem(t2, e2), this.isTaskExists(t2) && this.refreshTask(t2);
          }, addTask: function(t2, e2, n2) {
            return i.defined(t2.id) || (t2.id = i.uid()), this.isTaskExists(t2.id) && this.getTask(t2.id).$index != t2.$index ? (t2.start_date && "string" == typeof t2.start_date && (t2.start_date = this.date.parseDate(t2.start_date, "parse_date")), t2.end_date && "string" == typeof t2.end_date && (t2.end_date = this.date.parseDate(t2.end_date, "parse_date")), this.$data.tasksStore.updateItem(t2.id, t2)) : (i.defined(e2) || (e2 = this.getParent(t2) || 0), this.isTaskExists(e2) || (e2 = this.config.root_id), this.setParent(t2, e2), this.$data.tasksStore.addItem(t2, n2, e2));
          }, deleteTask: function(t2) {
            return t2 = r(t2, this.config.root_id), this.$data.tasksStore.removeItem(t2);
          }, getTaskCount: function() {
            return this.$data.tasksStore.count();
          }, getVisibleTaskCount: function() {
            return this.$data.tasksStore.countVisible();
          }, getTaskIndex: function(t2) {
            return this.$data.tasksStore.getBranchIndex(t2);
          }, getGlobalTaskIndex: function(t2) {
            return t2 = r(t2, this.config.root_id), this.assert(t2, "Invalid argument"), this.$data.tasksStore.getIndexById(t2);
          }, eachTask: function(t2, e2, n2) {
            return this.$data.tasksStore.eachItem(i.bind(t2, n2 || this), e2);
          }, eachParent: function(t2, e2, n2) {
            return this.$data.tasksStore.eachParent(i.bind(t2, n2 || this), e2);
          }, changeTaskId: function(t2, e2) {
            this.$data.tasksStore.changeId(t2, e2);
            var n2 = this.$data.tasksStore.getItem(e2), i2 = [];
            n2.$source && (i2 = i2.concat(n2.$source)), n2.$target && (i2 = i2.concat(n2.$target));
            for (var r2 = 0; r2 < i2.length; r2++) {
              var a = this.getLink(i2[r2]);
              a.source == t2 && (a.source = e2), a.target == t2 && (a.target = e2);
            }
          }, calculateTaskLevel: function(t2) {
            return this.$data.tasksStore.calculateItemLevel(t2);
          }, getNext: function(t2) {
            return this.$data.tasksStore.getNext(t2);
          }, getPrev: function(t2) {
            return this.$data.tasksStore.getPrev(t2);
          }, getParent: function(t2) {
            return this.$data.tasksStore.getParent(t2);
          }, setParent: function(t2, e2, n2) {
            return this.$data.tasksStore.setParent(t2, e2, n2);
          }, getSiblings: function(t2) {
            return this.$data.tasksStore.getSiblings(t2).slice();
          }, getNextSibling: function(t2) {
            return this.$data.tasksStore.getNextSibling(t2);
          }, getPrevSibling: function(t2) {
            return this.$data.tasksStore.getPrevSibling(t2);
          }, getTaskByIndex: function(t2) {
            var e2 = this.$data.tasksStore.getIdByIndex(t2);
            return this.isTaskExists(e2) ? this.getTask(e2) : null;
          }, getChildren: function(t2) {
            return this.hasChild(t2) ? this.$data.tasksStore.getChildren(t2).slice() : [];
          }, hasChild: function(t2) {
            return this.$data.tasksStore.hasChild(t2);
          }, open: function(t2) {
            this.$data.tasksStore.open(t2);
          }, close: function(t2) {
            this.$data.tasksStore.close(t2);
          }, moveTask: function(t2, e2, n2) {
            return n2 = r(n2, this.config.root_id), this.$data.tasksStore.move.apply(this.$data.tasksStore, arguments);
          }, sort: function(t2, e2, n2, i2) {
            var r2 = !i2;
            this.$data.tasksStore.sort(t2, e2, n2), this.callEvent("onAfterSort", [t2, e2, n2]), r2 && this.render();
          } };
        };
      }, function(t, e, n) {
        var i = n(0);
        t.exports = function() {
          return { getLinkCount: function() {
            return this.$data.linksStore.count();
          }, getLink: function(t2) {
            return this.$data.linksStore.getItem(t2);
          }, getLinks: function() {
            return this.$data.linksStore.getItems();
          }, isLinkExists: function(t2) {
            return this.$data.linksStore.exists(t2);
          }, addLink: function(t2) {
            var e2 = this.$data.linksStore.addItem(t2);
            return this.$data.linksStore.isSilent() && this.$data.linksStore.fullOrder.push(e2), e2;
          }, updateLink: function(t2, e2) {
            i.defined(e2) || (e2 = this.getLink(t2)), this.$data.linksStore.updateItem(t2, e2);
          }, deleteLink: function(t2) {
            return this.$data.linksStore.removeItem(t2);
          }, changeLinkId: function(t2, e2) {
            return this.$data.linksStore.changeId(t2, e2);
          } };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = null, n = t2._removeItemInner;
          function i(t3) {
            e2 = null, this.callEvent("onAfterUnselect", [t3]);
          }
          return t2._removeItemInner = function(t3) {
            return e2 == t3 && i.call(this, t3), e2 && this.eachItem && this.eachItem(function(t4) {
              t4.id == e2 && i.call(this, t4.id);
            }, t3), n.apply(this, arguments);
          }, t2.attachEvent("onIdChange", function(e3, n2) {
            t2.getSelectedId() == e3 && t2.silent(function() {
              t2.unselect(e3), t2.select(n2);
            });
          }), { select: function(t3) {
            if (t3) {
              if (e2 == t3) return e2;
              if (!this._skip_refresh && !this.callEvent("onBeforeSelect", [t3])) return false;
              this.unselect(), e2 = t3, this._skip_refresh || (this.refresh(t3), this.callEvent("onAfterSelect", [t3]));
            }
            return e2;
          }, getSelectedId: function() {
            return e2;
          }, isSelected: function(t3) {
            return t3 == e2;
          }, unselect: function(t3) {
            (t3 = t3 || e2) && (e2 = null, this._skip_refresh || (this.refresh(t3), i.call(this, t3)));
          } };
        };
      }, function(t, e, n) {
        var i = n(10);
        t.exports = { bindDataStore: function(t2, e2) {
          var n2 = e2.getDatastore(t2), r = function(t3, e3) {
            var i2 = e3.getLayers(), r2 = n2.getItem(t3);
            if (r2 && n2.isVisible(t3)) for (var a2 = 0; a2 < i2.length; a2++) i2[a2].render_item(r2);
          }, a = function(t3) {
            for (var e3 = t3.getLayers(), i2 = 0; i2 < e3.length; i2++) e3[i2].clear();
            for (var r2 = null, a2 = {}, o2 = 0; o2 < e3.length; o2++) {
              var s2 = e3[o2], l = void 0;
              if (s2.get_visible_range) {
                var c = s2.get_visible_range(n2), u = c.start + " - " + c.end;
                a2[u] ? l = a2[u] : (l = n2.getIndexRange(c.start, c.end), a2[u] = l);
              } else r2 || (r2 = n2.getVisibleItems()), l = r2;
              e3[o2].render_items(l);
            }
          }, o = function(t3) {
            if (t3.update_items) {
              var e3;
              if (t3.get_visible_range) {
                var i2 = t3.get_visible_range(n2);
                e3 = n2.getIndexRange(i2.start, i2.end);
              } else e3 = n2.getVisibleItems();
              t3.update_items(e3);
            }
          };
          function s(t3) {
            return !!t3.$services.getService("state").getState("batchUpdate").batch_update;
          }
          n2.attachEvent("onStoreUpdated", function(n3, r2, a2) {
            if (i(e2)) return true;
            var s2 = e2.$services.getService("layers").getDataRender(t2);
            s2 && (s2.onUpdateRequest = function(t3) {
              o(t3);
            });
          }), n2.attachEvent("onStoreUpdated", function(t3, i2, r2) {
            s(e2) || (t3 && "move" != r2 && "delete" != r2 ? (n2.callEvent("onBeforeRefreshItem", [i2.id]), n2.callEvent("onAfterRefreshItem", [i2.id])) : (n2.callEvent("onBeforeRefreshAll", []), n2.callEvent("onAfterRefreshAll", [])));
          }), n2.attachEvent("onAfterRefreshAll", function() {
            if (i(e2)) return true;
            var n3 = e2.$services.getService("layers").getDataRender(t2);
            n3 && !s(e2) && a(n3);
          }), n2.attachEvent("onAfterRefreshItem", function(n3) {
            if (i(e2)) return true;
            var a2 = e2.$services.getService("layers").getDataRender(t2);
            a2 && r(n3, a2);
          }), n2.attachEvent("onItemOpen", function() {
            if (i(e2)) return true;
            e2.render();
          }), n2.attachEvent("onItemClose", function() {
            if (i(e2)) return true;
            e2.render();
          }), n2.attachEvent("onIdChange", function(a2, o2) {
            if (i(e2)) return true;
            if (n2.callEvent("onBeforeIdChange", [a2, o2]), !s(e2) && !n2.isSilent()) {
              var l = e2.$services.getService("layers").getDataRender(t2);
              l ? (function(t3, e3, n3, i2) {
                for (var r2 = 0; r2 < t3.length; r2++) t3[r2].change_id(e3, n3);
              }(l.getLayers(), a2, o2, n2.getItem(o2)), r(o2, l)) : e2.render();
            }
          });
        } };
      }, function(t, e, n) {
        var i = n(117);
        t.exports = { DEPRECATED_api: function(t2) {
          return new i.DataProcessor(t2);
        }, createDataProcessor: i.createDataProcessor, getDataProcessorModes: i.getAvailableModes };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.DataProcessor = e.createDataProcessor = void 0;
        var i = n(4), r = n(2), a = n(0), o = n(118), s = n(119), l = n(120);
        e.createDataProcessor = function(t2) {
          var e2, n2;
          t2 instanceof Function ? e2 = t2 : t2.hasOwnProperty("router") ? e2 = t2.router : t2.hasOwnProperty("link") && t2.hasOwnProperty("task") && (e2 = t2), n2 = e2 ? "CUSTOM" : t2.mode || "REST-JSON";
          var i2 = new c(t2.url);
          return i2.init(this), i2.setTransactionMode({ mode: n2, router: e2 }, t2.batchUpdate), i2;
        };
        var c = function() {
          function t2(t3) {
            this.serverProcessor = t3, this.action_param = "!nativeeditor_status", this.updatedRows = [], this.autoUpdate = true, this.updateMode = "cell", this._headers = null, this._payload = null, this._postDelim = "_", this._routerParametersFormat = "parameters", this._waitMode = 0, this._in_progress = {}, this._storage = l.default.create(), this._invalid = {}, this.messages = [], this.styles = { updated: "font-weight:bold;", inserted: "font-weight:bold;", deleted: "text-decoration : line-through;", invalid: "background-color:FFE0E0;", invalid_cell: "border-bottom:2px solid red;", error: "color:red;", clear: "font-weight:normal;text-decoration:none;" }, this.enableUTFencoding(true), i(this);
          }
          return t2.prototype.setTransactionMode = function(t3, e2) {
            "object" == typeof t3 ? (this._tMode = t3.mode || this._tMode, a.defined(t3.headers) && (this._headers = t3.headers), a.defined(t3.payload) && (this._payload = t3.payload), this._tSend = !!e2) : (this._tMode = t3, this._tSend = e2), "REST" === this._tMode && (this._tSend = false), "JSON" === this._tMode || "REST-JSON" === this._tMode ? (this._tSend = false, this._serializeAsJson = true, this._headers = this._headers || {}, this._headers["Content-Type"] = "application/json") : this._headers && !this._headers["Content-Type"] && (this._headers["Content-Type"] = "application/x-www-form-urlencoded"), "CUSTOM" === this._tMode && (this._tSend = false, this._router = t3.router);
          }, t2.prototype.escape = function(t3) {
            return this._utf ? encodeURIComponent(t3) : escape(t3);
          }, t2.prototype.enableUTFencoding = function(t3) {
            this._utf = !!t3;
          }, t2.prototype.getSyncState = function() {
            return !this.updatedRows.length;
          }, t2.prototype.setUpdateMode = function(t3, e2) {
            this.autoUpdate = "cell" === t3, this.updateMode = t3, this.dnd = e2;
          }, t2.prototype.ignore = function(t3, e2) {
            this._silent_mode = true, t3.call(e2 || window), this._silent_mode = false;
          }, t2.prototype.setUpdated = function(t3, e2, n2) {
            if (!this._silent_mode) {
              var i2 = this.findRow(t3);
              n2 = n2 || "updated";
              var r2 = this.$gantt.getUserData(t3, this.action_param);
              r2 && "updated" === n2 && (n2 = r2), e2 ? (this.set_invalid(t3, false), this.updatedRows[i2] = t3, this.$gantt.setUserData(t3, this.action_param, n2), this._in_progress[t3] && (this._in_progress[t3] = "wait")) : this.is_invalid(t3) || (this.updatedRows.splice(i2, 1), this.$gantt.setUserData(t3, this.action_param, "")), this.markRow(t3, e2, n2), e2 && this.autoUpdate && this.sendData(t3);
            }
          }, t2.prototype.markRow = function(t3, e2, n2) {
            var i2 = "", r2 = this.is_invalid(t3);
            if (r2 && (i2 = this.styles[r2], e2 = true), this.callEvent("onRowMark", [t3, e2, n2, r2]) && (i2 = this.styles[e2 ? n2 : "clear"] + " " + i2, this.$gantt[this._methods[0]](t3, i2), r2 && r2.details)) {
              i2 += this.styles[r2 + "_cell"];
              for (var a2 = 0; a2 < r2.details.length; a2++) r2.details[a2] && this.$gantt[this._methods[1]](t3, a2, i2);
            }
          }, t2.prototype.getActionByState = function(t3) {
            return "inserted" === t3 ? "create" : "updated" === t3 ? "update" : "deleted" === t3 ? "delete" : "update";
          }, t2.prototype.getState = function(t3) {
            return this.$gantt.getUserData(t3, this.action_param);
          }, t2.prototype.is_invalid = function(t3) {
            return this._invalid[t3];
          }, t2.prototype.set_invalid = function(t3, e2, n2) {
            n2 && (e2 = { value: e2, details: n2, toString: function() {
              return this.value.toString();
            } }), this._invalid[t3] = e2;
          }, t2.prototype.checkBeforeUpdate = function(t3) {
            return true;
          }, t2.prototype.sendData = function(t3) {
            return this.$gantt.editStop && this.$gantt.editStop(), void 0 === t3 || this._tSend ? this.modes && this.modes.task && this.modes.link && this.modes.task.updatedRows.length && this.modes.link.updatedRows.length ? (this.setGanttMode("task"), this.sendAllData(), this.setGanttMode("link"), void this.sendAllData()) : this.sendAllData() : !this._in_progress[t3] && (this.messages = [], !(!this.checkBeforeUpdate(t3) && this.callEvent("onValidationError", [t3, this.messages])) && void this._beforeSendData(this._getRowData(t3), t3));
          }, t2.prototype.serialize = function(t3, e2) {
            if (this._serializeAsJson) return this._serializeAsJSON(t3);
            if ("string" == typeof t3) return t3;
            if (void 0 !== e2) return this.serialize_one(t3, "");
            var n2 = [], i2 = [];
            for (var r2 in t3) t3.hasOwnProperty(r2) && (n2.push(this.serialize_one(t3[r2], r2 + this._postDelim)), i2.push(r2));
            return n2.push("ids=" + this.escape(i2.join(","))), this.$gantt.security_key && n2.push("dhx_security=" + this.$gantt.security_key), n2.join("&");
          }, t2.prototype.serialize_one = function(t3, e2) {
            if ("string" == typeof t3) return t3;
            var n2 = [], i2 = "";
            for (var r2 in t3) if (t3.hasOwnProperty(r2)) {
              if (("id" === r2 || r2 == this.action_param) && "REST" === this._tMode) continue;
              i2 = "string" == typeof t3[r2] || "number" == typeof t3[r2] ? t3[r2] : JSON.stringify(t3[r2]), n2.push(this.escape((e2 || "") + r2) + "=" + this.escape(i2));
            }
            return n2.join("&");
          }, t2.prototype.sendAllData = function() {
            if (this.updatedRows.length) {
              this.messages = [];
              var t3 = true;
              if (this._forEachUpdatedRow(function(e2) {
                t3 = t3 && this.checkBeforeUpdate(e2);
              }), !t3 && !this.callEvent("onValidationError", ["", this.messages])) return false;
              this._tSend ? this._sendData(this._getAllData()) : this._forEachUpdatedRow(function(t4) {
                if (!this._in_progress[t4]) {
                  if (this.is_invalid(t4)) return;
                  this._beforeSendData(this._getRowData(t4), t4);
                }
              });
            }
          }, t2.prototype.findRow = function(t3) {
            var e2 = 0;
            for (e2 = 0; e2 < this.updatedRows.length && t3 != this.updatedRows[e2]; e2++) ;
            return e2;
          }, t2.prototype.defineAction = function(t3, e2) {
            this._uActions || (this._uActions = {}), this._uActions[t3] = e2;
          }, t2.prototype.afterUpdateCallback = function(t3, e2, n2, i2, r2) {
            if (this.$gantt) {
              this.setGanttMode(r2);
              var a2 = t3, o2 = "error" !== n2 && "invalid" !== n2;
              if (o2 || this.set_invalid(t3, n2), this._uActions && this._uActions[n2] && !this._uActions[n2](i2)) return delete this._in_progress[a2];
              "wait" !== this._in_progress[a2] && this.setUpdated(t3, false);
              var s2 = t3;
              switch (n2) {
                case "inserted":
                case "insert":
                  e2 != t3 && (this.setUpdated(t3, false), this.$gantt[this._methods[2]](t3, e2), t3 = e2);
                  break;
                case "delete":
                case "deleted":
                  return this.$gantt.setUserData(t3, this.action_param, "true_deleted"), this.$gantt[this._methods[3]](t3), delete this._in_progress[a2], this.callEvent("onAfterUpdate", [t3, n2, e2, i2]);
              }
              "wait" !== this._in_progress[a2] ? (o2 && this.$gantt.setUserData(t3, this.action_param, ""), delete this._in_progress[a2]) : (delete this._in_progress[a2], this.setUpdated(e2, true, this.$gantt.getUserData(t3, this.action_param))), this.callEvent("onAfterUpdate", [s2, n2, e2, i2]);
            }
          }, t2.prototype.afterUpdate = function(t3, e2, n2) {
            var i2;
            i2 = 3 === arguments.length ? arguments[1] : arguments[4];
            var r2 = this.getGanttMode(), a2 = i2.filePath || i2.url;
            r2 = "REST" !== this._tMode && "REST-JSON" !== this._tMode ? -1 !== a2.indexOf("gantt_mode=links") ? "link" : "task" : a2.indexOf("/link") > a2.indexOf("/task") ? "link" : "task", this.setGanttMode(r2);
            var o2, s2 = this.$gantt.ajax;
            try {
              o2 = JSON.parse(e2.xmlDoc.responseText);
            } catch (t4) {
              e2.xmlDoc.responseText.length || (o2 = {});
            }
            if (o2) {
              var l2 = o2.action || this.getState(n2) || "updated", c2 = o2.sid || n2[0], u = o2.tid || n2[0];
              return t3.afterUpdateCallback(c2, u, l2, o2, r2), t3.finalizeUpdate(), void this.setGanttMode(r2);
            }
            var d = s2.xmltop("data", e2.xmlDoc);
            if (!d) return this.cleanUpdate(n2);
            var h = s2.xpath("//data/action", d);
            if (!h.length) return this.cleanUpdate(n2);
            for (var f = 0; f < h.length; f++) {
              var _ = h[f];
              l2 = _.getAttribute("type"), c2 = _.getAttribute("sid"), u = _.getAttribute("tid");
              t3.afterUpdateCallback(c2, u, l2, _, r2);
            }
            t3.finalizeUpdate();
          }, t2.prototype.cleanUpdate = function(t3) {
            if (t3) for (var e2 = 0; e2 < t3.length; e2++) delete this._in_progress[t3[e2]];
          }, t2.prototype.finalizeUpdate = function() {
            this._waitMode && this._waitMode--, this.callEvent("onAfterUpdateFinish", []), this.updatedRows.length || this.callEvent("onFullSync", []);
          }, t2.prototype.init = function(t3) {
            if (!this._initialized) {
              this.$gantt = t3, this.$gantt._dp_init && this.$gantt._dp_init(this), this._setDefaultTransactionMode(), this.styles = { updated: "gantt_updated", order: "gantt_updated", inserted: "gantt_inserted", deleted: "gantt_deleted", invalid: "gantt_invalid", error: "gantt_error", clear: "" }, this._methods = ["_row_style", "setCellTextStyle", "_change_id", "_delete_task"], s.default(this.$gantt, this);
              var e2 = new o.default(this.$gantt, this);
              e2.attach(), this.attachEvent("onDestroy", function() {
                delete this.setGanttMode, delete this._getRowData, delete this.$gantt._dp, delete this.$gantt._change_id, delete this.$gantt._row_style, delete this.$gantt._delete_task, delete this.$gantt._sendTaskOrder, delete this.$gantt, e2.detach();
              }), this.$gantt.callEvent("onDataProcessorReady", [this]), this._initialized = true;
            }
          }, t2.prototype.setOnAfterUpdate = function(t3) {
            this.attachEvent("onAfterUpdate", t3);
          }, t2.prototype.setOnBeforeUpdateHandler = function(t3) {
            this.attachEvent("onBeforeDataSending", t3);
          }, t2.prototype.setAutoUpdate = function(t3, e2) {
            var n2 = this;
            t3 = t3 || 2e3, this._user = e2 || (/* @__PURE__ */ new Date()).valueOf(), this._needUpdate = false, this._updateBusy = false, this.attachEvent("onAfterUpdate", this.afterAutoUpdate), this.attachEvent("onFullSync", this.fullSync), setInterval(function() {
              n2.loadUpdate();
            }, t3);
          }, t2.prototype.afterAutoUpdate = function(t3, e2, n2, i2) {
            return "collision" !== e2 || (this._needUpdate = true, false);
          }, t2.prototype.fullSync = function() {
            return this._needUpdate && (this._needUpdate = false, this.loadUpdate()), true;
          }, t2.prototype.getUpdates = function(t3, e2) {
            var n2 = this.$gantt.ajax;
            if (this._updateBusy) return false;
            this._updateBusy = true, n2.get(t3, e2);
          }, t2.prototype.loadUpdate = function() {
            var t3 = this, e2 = this.$gantt.ajax, n2 = this.$gantt.getUserData(0, "version"), i2 = this.serverProcessor + e2.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + n2].join("&");
            i2 = i2.replace("editing=true&", ""), this.getUpdates(i2, function(n3) {
              var i3 = e2.xpath("//userdata", n3);
              t3.$gantt.setUserData(0, "version", t3._getXmlNodeValue(i3[0]));
              var r2 = e2.xpath("//update", n3);
              if (r2.length) {
                t3._silent_mode = true;
                for (var a2 = 0; a2 < r2.length; a2++) {
                  var o2 = r2[a2].getAttribute("status"), s2 = r2[a2].getAttribute("id"), l2 = r2[a2].getAttribute("parent");
                  switch (o2) {
                    case "inserted":
                      t3.callEvent("insertCallback", [r2[a2], s2, l2]);
                      break;
                    case "updated":
                      t3.callEvent("updateCallback", [r2[a2], s2, l2]);
                      break;
                    case "deleted":
                      t3.callEvent("deleteCallback", [r2[a2], s2, l2]);
                  }
                }
                t3._silent_mode = false;
              }
              t3._updateBusy = false;
            });
          }, t2.prototype.destructor = function() {
            this.callEvent("onDestroy", []), this.detachAllEvents(), this.updatedRows = [], this._in_progress = {}, this._invalid = {}, this._storage.clear(), this._storage = null, this._headers = null, this._payload = null, delete this._initialized;
          }, t2.prototype.setGanttMode = function(t3) {
            "tasks" === t3 ? t3 = "task" : "links" === t3 && (t3 = "link");
            var e2 = this.modes || {}, n2 = this.getGanttMode();
            n2 && (e2[n2] = { _in_progress: this._in_progress, _invalid: this._invalid, _storage: this._storage, updatedRows: this.updatedRows });
            var i2 = e2[t3];
            i2 || (i2 = e2[t3] = { _in_progress: {}, _invalid: {}, _storage: l.default.create(), updatedRows: [] }), this._in_progress = i2._in_progress, this._invalid = i2._invalid, this._storage = i2._storage, this.updatedRows = i2.updatedRows, this.modes = e2, this._ganttMode = t3;
          }, t2.prototype.getGanttMode = function() {
            return this._ganttMode;
          }, t2.prototype.storeItem = function(t3) {
            this._storage.storeItem(t3);
          }, t2.prototype.url = function(t3) {
            this.serverProcessor = this._serverProcessor = t3;
          }, t2.prototype._beforeSendData = function(t3, e2) {
            if (!this.callEvent("onBeforeUpdate", [e2, this.getState(e2), t3])) return false;
            this._sendData(t3, e2);
          }, t2.prototype._serializeAsJSON = function(t3) {
            if ("string" == typeof t3) return t3;
            var e2 = a.copy(t3);
            return "REST-JSON" === this._tMode && (delete e2.id, delete e2[this.action_param]), JSON.stringify(e2);
          }, t2.prototype._applyPayload = function(t3) {
            var e2 = this.$gantt.ajax;
            if (this._payload) for (var n2 in this._payload) t3 = t3 + e2.urlSeparator(t3) + this.escape(n2) + "=" + this.escape(this._payload[n2]);
            return t3;
          }, t2.prototype._cleanupArgumentsBeforeSend = function(t3) {
            var e2;
            if (void 0 === t3[this.action_param]) for (var n2 in e2 = {}, t3) e2[n2] = this._cleanupArgumentsBeforeSend(t3[n2]);
            else e2 = this._cleanupItemBeforeSend(t3);
            return e2;
          }, t2.prototype._cleanupItemBeforeSend = function(t3) {
            var e2 = null;
            return t3 && ("deleted" === t3[this.action_param] ? ((e2 = {}).id = t3.id, e2[this.action_param] = t3[this.action_param]) : e2 = t3), e2;
          }, t2.prototype._sendData = function(t3, e2) {
            var n2 = this;
            if (t3) {
              if (!this.callEvent("onBeforeDataSending", e2 ? [e2, this.getState(e2), t3] : [null, null, t3])) return false;
              e2 && (this._in_progress[e2] = (/* @__PURE__ */ new Date()).valueOf());
              var i2 = this.$gantt.ajax;
              if ("CUSTOM" !== this._tMode) {
                var r2;
                r2 = { callback: function(i3) {
                  var r3 = [];
                  if (e2) r3.push(e2);
                  else if (t3) for (var a3 in t3) r3.push(a3);
                  return n2.afterUpdate(n2, i3, r3);
                }, headers: this._headers };
                var a2, o2 = this.serverProcessor + (this._user ? i2.urlSeparator(this.serverProcessor) + ["dhx_user=" + this._user, "dhx_version=" + this.$gantt.getUserData(0, "version")].join("&") : ""), s2 = this._applyPayload(o2);
                switch (this._tMode) {
                  case "GET":
                    a2 = this._cleanupArgumentsBeforeSend(t3), r2.url = s2 + i2.urlSeparator(s2) + this.serialize(a2, e2), r2.method = "GET";
                    break;
                  case "POST":
                    a2 = this._cleanupArgumentsBeforeSend(t3), r2.url = s2, r2.method = "POST", r2.data = this.serialize(a2, e2);
                    break;
                  case "JSON":
                    a2 = {};
                    var l2 = this._cleanupItemBeforeSend(t3);
                    for (var c2 in l2) c2 !== this.action_param && "id" !== c2 && "gr_id" !== c2 && (a2[c2] = l2[c2]);
                    r2.url = s2, r2.method = "POST", r2.data = JSON.stringify({ id: e2, action: t3[this.action_param], data: a2 });
                    break;
                  case "REST":
                  case "REST-JSON":
                    switch (s2 = o2.replace(/(&|\?)editing=true/, ""), a2 = "", this.getState(e2)) {
                      case "inserted":
                        r2.method = "POST", r2.data = this.serialize(t3, e2);
                        break;
                      case "deleted":
                        r2.method = "DELETE", s2 = s2 + ("/" === s2.slice(-1) ? "" : "/") + e2;
                        break;
                      default:
                        r2.method = "PUT", r2.data = this.serialize(t3, e2), s2 = s2 + ("/" === s2.slice(-1) ? "" : "/") + e2;
                    }
                    r2.url = this._applyPayload(s2);
                }
                return this._waitMode++, i2.query(r2);
              }
              var u = this.getState(e2), d = this.getActionByState(u), h = this.getGanttMode(), f = function(t4) {
                var i3 = u || "updated", r3 = e2, a3 = e2;
                t4 && (i3 = t4.action || u, r3 = t4.sid || r3, a3 = t4.id || t4.tid || a3), n2.afterUpdateCallback(r3, a3, i3, t4, h);
              }, _ = void 0;
              if (this._router instanceof Function) if ("object" === this._routerParametersFormat) {
                var g = { entity: h, action: d, data: t3, id: e2 };
                _ = this._router(g);
              } else _ = this._router(h, d, t3, e2);
              else if (this._router[h] instanceof Function) _ = this._router[h](d, t3, e2);
              else switch (u) {
                case "inserted":
                  _ = this._router[h].create(t3);
                  break;
                case "deleted":
                  _ = this._router[h].delete(e2);
                  break;
                default:
                  _ = this._router[h].update(t3, e2);
              }
              if (_) {
                if (!_.then && void 0 === _.id && void 0 === _.tid && void 0 === _.action) throw new Error("Incorrect router return value. A Promise or a response object is expected");
                _.then ? _.then(f).catch(function(t4) {
                  t4 && t4.action ? f(t4) : f({ action: "error", value: t4 });
                }) : f(_);
              } else f(null);
            }
          }, t2.prototype._forEachUpdatedRow = function(t3) {
            for (var e2 = this.updatedRows.slice(), n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2];
              this.$gantt.getUserData(i2, this.action_param) && t3.call(this, i2);
            }
          }, t2.prototype._setDefaultTransactionMode = function() {
            this.serverProcessor && (this.setTransactionMode("POST", true), this.serverProcessor += (-1 !== this.serverProcessor.indexOf("?") ? "&" : "?") + "editing=true", this._serverProcessor = this.serverProcessor);
          }, t2.prototype._getXmlNodeValue = function(t3) {
            return t3.firstChild ? t3.firstChild.nodeValue : "";
          }, t2.prototype._getAllData = function() {
            var t3 = {}, e2 = false;
            return this._forEachUpdatedRow(function(n2) {
              if (!this._in_progress[n2] && !this.is_invalid(n2)) {
                var i2 = this._getRowData(n2);
                this.callEvent("onBeforeUpdate", [n2, this.getState(n2), i2]) && (t3[n2] = i2, e2 = true, this._in_progress[n2] = (/* @__PURE__ */ new Date()).valueOf());
              }
            }), e2 ? t3 : null;
          }, t2.prototype._prepareDate = function(t3) {
            return this.$gantt.defined(this.$gantt.templates.xml_format) ? this.$gantt.templates.xml_format(t3) : this.$gantt.templates.format_date(t3);
          }, t2.prototype._prepareArray = function(t3, e2) {
            var n2 = this;
            return e2.push(t3), t3.map(function(t4) {
              return r.isDate(t4) ? n2._prepareDate(t4) : Array.isArray(t4) && !r.arrayIncludes(e2, t4) ? n2._prepareArray(t4, e2) : t4 && "object" == typeof t4 && !r.arrayIncludes(e2, t4) ? n2._prepareObject(t4, e2) : t4;
            });
          }, t2.prototype._prepareObject = function(t3, e2) {
            var n2 = {};
            for (var i2 in e2.push(t3), t3) if ("$" !== i2.substr(0, 1)) {
              var a2 = t3[i2];
              r.isDate(a2) ? n2[i2] = this._prepareDate(a2) : null === a2 ? n2[i2] = "" : Array.isArray(a2) && !r.arrayIncludes(e2, a2) ? n2[i2] = this._prepareArray(a2, e2) : a2 && "object" == typeof a2 && !r.arrayIncludes(e2, a2) ? n2[i2] = this._prepareObject(a2, e2) : n2[i2] = a2;
            }
            return n2;
          }, t2.prototype._prepareDataItem = function(t3) {
            var e2 = this._prepareObject(t3, []);
            return e2[this.action_param] = this.$gantt.getUserData(t3.id, this.action_param), e2;
          }, t2.prototype.getStoredItem = function(t3) {
            return this._storage.getStoredItem(t3);
          }, t2.prototype._getRowData = function(t3) {
            var e2, n2 = this.$gantt;
            return "task" === this.getGanttMode() ? n2.isTaskExists(t3) && (e2 = this.$gantt.getTask(t3)) : n2.isLinkExists(t3) && (e2 = this.$gantt.getLink(t3)), e2 || (e2 = this.getStoredItem(t3)), e2 || (e2 = { id: t3 }), this._prepareDataItem(e2);
          }, t2;
        }();
        e.DataProcessor = c;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(2), r = function() {
          function t2(t3, e2) {
            this.$gantt = t3, this.$dp = e2, this._dataProcessorHandlers = [];
          }
          return t2.prototype.attach = function() {
            var t3 = this.$dp, e2 = this.$gantt, i2 = n(36), r2 = {};
            function a(n2) {
              for (var i3 = t3.updatedRows.slice(), r3 = false, a2 = 0; a2 < i3.length && !t3._in_progress[n2]; a2++) i3[a2] === n2 && ("inserted" === e2.getUserData(n2, "!nativeeditor_status") && (r3 = true), t3.setUpdated(n2, false));
              return r3;
            }
            this._dataProcessorHandlers.push(e2.attachEvent("onAfterTaskAdd", function(n2, i3) {
              e2.isTaskExists(n2) && (t3.setGanttMode("tasks"), t3.setUpdated(n2, true, "inserted"));
            })), this._dataProcessorHandlers.push(e2.attachEvent("onAfterTaskUpdate", function(n2, i3) {
              e2.isTaskExists(n2) && (t3.setGanttMode("tasks"), t3.setUpdated(n2, true), e2._sendTaskOrder && e2._sendTaskOrder(n2, i3));
            })), this._dataProcessorHandlers.push(e2.attachEvent("onBeforeTaskDelete", function(t4, n2) {
              return !e2.config.cascade_delete || (r2[t4] = { tasks: i2.getSubtreeTasks(e2, t4), links: i2.getSubtreeLinks(e2, t4) }, true);
            })), this._dataProcessorHandlers.push(e2.attachEvent("onAfterTaskDelete", function(n2, i3) {
              if (t3.setGanttMode("tasks"), !a(n2)) {
                if (e2.config.cascade_delete && r2[n2]) {
                  var o2 = t3.updateMode;
                  t3.setUpdateMode("off");
                  var s2 = r2[n2];
                  for (var l in s2.tasks) a(l) || (t3.storeItem(s2.tasks[l]), t3.setUpdated(l, true, "deleted"));
                  for (var l in t3.setGanttMode("links"), s2.links) a(l) || (t3.storeItem(s2.links[l]), t3.setUpdated(l, true, "deleted"));
                  r2[n2] = null, "off" !== o2 && t3.sendAllData(), t3.setGanttMode("tasks"), t3.setUpdateMode(o2);
                }
                t3.storeItem(i3), t3.setUpdated(n2, true, "deleted"), "off" === t3.updateMode || t3._tSend || t3.sendAllData();
              }
            })), this._dataProcessorHandlers.push(e2.attachEvent("onAfterLinkUpdate", function(n2, i3) {
              e2.isLinkExists(n2) && (t3.setGanttMode("links"), t3.setUpdated(n2, true));
            })), this._dataProcessorHandlers.push(e2.attachEvent("onAfterLinkAdd", function(n2, i3) {
              e2.isLinkExists(n2) && (t3.setGanttMode("links"), t3.setUpdated(n2, true, "inserted"));
            })), this._dataProcessorHandlers.push(e2.attachEvent("onAfterLinkDelete", function(e3, n2) {
              t3.setGanttMode("links"), !a(e3) && (t3.storeItem(n2), t3.setUpdated(e3, true, "deleted"));
            })), this._dataProcessorHandlers.push(e2.attachEvent("onRowDragEnd", function(t4, n2) {
              e2._sendTaskOrder(t4, e2.getTask(t4));
            }));
            var o = null, s = null;
            this._dataProcessorHandlers.push(e2.attachEvent("onTaskIdChange", function(n2, i3) {
              if (t3._waitMode) {
                var r3 = e2.getChildren(i3);
                if (r3.length) {
                  o = o || {};
                  for (var a2 = 0; a2 < r3.length; a2++) {
                    var l = this.getTask(r3[a2]);
                    o[l.id] = l;
                  }
                }
                var c = function(t4) {
                  var e3 = [];
                  return t4.$source && (e3 = e3.concat(t4.$source)), t4.$target && (e3 = e3.concat(t4.$target)), e3;
                }(this.getTask(i3));
                if (c.length) {
                  s = s || {};
                  for (a2 = 0; a2 < c.length; a2++) {
                    var u = this.getLink(c[a2]);
                    s[u.id] = u;
                  }
                }
              }
            })), t3.attachEvent("onAfterUpdateFinish", function() {
              (o || s) && (e2.batchUpdate(function() {
                for (var t4 in o) e2.updateTask(o[t4].id);
                for (var t4 in s) e2.updateLink(s[t4].id);
                o = null, s = null;
              }), o ? e2._dp.setGanttMode("tasks") : e2._dp.setGanttMode("links"));
            }), t3.attachEvent("onBeforeDataSending", function() {
              if ("CUSTOM" === this._tMode) return true;
              var t4 = this._serverProcessor;
              if ("REST-JSON" === this._tMode || "REST" === this._tMode) {
                var n2 = this._ganttMode;
                t4 = t4.substring(0, t4.indexOf("?") > -1 ? t4.indexOf("?") : t4.length), this.serverProcessor = t4 + ("/" === t4.slice(-1) ? "" : "/") + n2;
              } else {
                var i3 = this._ganttMode + "s";
                this.serverProcessor = t4 + e2.ajax.urlSeparator(t4) + "gantt_mode=" + i3;
              }
              return true;
            }), t3.attachEvent("insertCallback", function(t4, n2, i3, r3) {
              var a2 = t4.data || e2.xml._xmlNodeToJSON(t4.firstChild), o2 = { add: e2.addTask, isExist: e2.isTaskExists };
              "links" === r3 && (o2.add = e2.addLink, o2.isExist = e2.isLinkExists), o2.isExist.call(e2, n2) || (a2.id = n2, o2.add.call(e2, a2));
            }), t3.attachEvent("updateCallback", function(t4, n2) {
              var i3 = t4.data || e2.xml._xmlNodeToJSON(t4.firstChild);
              if (e2.isTaskExists(n2)) {
                var r3 = e2.getTask(n2);
                for (var a2 in i3) {
                  var o2 = i3[a2];
                  switch (a2) {
                    case "id":
                      continue;
                    case "start_date":
                    case "end_date":
                      o2 = e2.defined(e2.templates.xml_date) ? e2.templates.xml_date(o2) : e2.templates.parse_date(o2);
                      break;
                    case "duration":
                      r3.end_date = e2.calculateEndDate({ start_date: r3.start_date, duration: o2, task: r3 });
                  }
                  r3[a2] = o2;
                }
                e2.updateTask(n2), e2.refreshData();
              }
            }), t3.attachEvent("deleteCallback", function(t4, n2, i3, r3) {
              var a2 = { delete: e2.deleteTask, isExist: e2.isTaskExists };
              "links" === r3 && (a2.delete = e2.deleteLink, a2.isExist = e2.isLinkExists), a2.isExist.call(e2, n2) && a2.delete.call(e2, n2);
            });
          }, t2.prototype.detach = function() {
            var t3 = this;
            i.forEach(this._dataProcessorHandlers, function(e2) {
              t3.$gantt.detachEvent(e2);
            }), this._dataProcessorHandlers = [];
          }, t2;
        }();
        e.default = r;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.default = function(t2, e2) {
          t2.getUserData = function(t3, e3) {
            return this.userdata || (this.userdata = {}), this.userdata[t3] && this.userdata[t3][e3] ? this.userdata[t3][e3] : "";
          }, t2.setUserData = function(t3, e3, n2) {
            this.userdata || (this.userdata = {}), this.userdata[t3] || (this.userdata[t3] = {}), this.userdata[t3][e3] = n2;
          }, t2._change_id = function(t3, e3) {
            "task" !== this._dp._ganttMode ? this.changeLinkId(t3, e3) : this.changeTaskId(t3, e3);
          }, t2._row_style = function(e3, n2) {
            "task" === this._dp._ganttMode && t2.isTaskExists(e3) && (t2.getTask(e3).$dataprocessor_class = n2, t2.refreshTask(e3));
          }, t2._delete_task = function(t3, e3) {
          }, t2._sendTaskOrder = function(t3, e3) {
            e3.$drop_target && (this._dp.setGanttMode("task"), this.getTask(t3).target = e3.$drop_target, this._dp.setUpdated(t3, true, "order"), delete this.getTask(t3).$drop_target);
          }, t2.setDp = function() {
            this._dp = e2;
          }, t2.setDp();
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(0), r = function() {
          function t2() {
            var t3 = this;
            this.clear = function() {
              t3._storage = {};
            }, this.storeItem = function(e2) {
              t3._storage[e2.id] = i.copy(e2);
            }, this.getStoredItem = function(e2) {
              return t3._storage[e2] || null;
            }, this._storage = {};
          }
          return t2.create = function() {
            return new t2();
          }, t2;
        }();
        e.default = r;
      }, function(t, e, n) {
        t.exports = function(t2) {
          t2.ext || (t2.ext = {});
          for (var e2 = [n(122), n(123), n(124), n(125), n(126), n(127), n(128)], i = 0; i < e2.length; i++) e2[i] && e2[i](t2);
        };
      }, function(t, e, n) {
        var i = n(12);
        function r(t2) {
          var e2 = {}, n2 = false;
          function r2(t3, n3) {
            n3 = "function" == typeof n3 ? n3 : function() {
            }, e2[t3] || (e2[t3] = this[t3], this[t3] = n3);
          }
          function a(t3) {
            e2[t3] && (this[t3] = e2[t3], e2[t3] = null);
          }
          function o() {
            for (var t3 in e2) a.call(this, t3);
          }
          function s(t3) {
            try {
              t3();
            } catch (t4) {
              i.console.error(t4);
            }
          }
          return t2.$services.getService("state").registerProvider("batchUpdate", function() {
            return { batch_update: n2 };
          }, false), function(t3, e3) {
            if (n2) s(t3);
            else {
              var i2, a2 = this._dp && "off" != this._dp.updateMode;
              a2 && (i2 = this._dp.updateMode, this._dp.setUpdateMode("off"));
              var l = {}, c = { render: true, refreshData: true, refreshTask: true, refreshLink: true, resetProjectDates: function(t4) {
                l[t4.id] = t4;
              } };
              for (var u in (function(t4) {
                for (var e4 in t4) r2.call(this, e4, t4[e4]);
              }).call(this, c), n2 = true, this.callEvent("onBeforeBatchUpdate", []), s(t3), this.callEvent("onAfterBatchUpdate", []), o.call(this), l) this.resetProjectDates(l[u]);
              n2 = false, e3 || this.render(), a2 && (this._dp.setUpdateMode(i2), this._dp.setGanttMode("task"), this._dp.sendData(), this._dp.setGanttMode("link"), this._dp.sendData());
            }
          };
        }
        t.exports = function(t2) {
          t2.batchUpdate = r(t2);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = /* @__PURE__ */ function(t3) {
            return { _needRecalc: true, reset: function() {
              this._needRecalc = true;
            }, _isRecalcNeeded: function() {
              return !this._isGroupSort() && this._needRecalc;
            }, _isGroupSort: function() {
              return !!t3.getState().group_mode;
            }, _getWBSCode: function(t4) {
              return t4 ? (this._isRecalcNeeded() && this._calcWBS(), t4.$virtual ? "" : this._isGroupSort() ? t4.$wbs || "" : (t4.$wbs || (this.reset(), this._calcWBS()), t4.$wbs)) : "";
            }, _setWBSCode: function(t4, e3) {
              t4.$wbs = e3;
            }, getWBSCode: function(t4) {
              return this._getWBSCode(t4);
            }, getByWBSCode: function(e3) {
              for (var n2 = e3.split("."), i = t3.config.root_id, r = 0; r < n2.length; r++) {
                var a = t3.getChildren(i), o = 1 * n2[r] - 1;
                if (!t3.isTaskExists(a[o])) return null;
                i = a[o];
              }
              return t3.isTaskExists(i) ? t3.getTask(i) : null;
            }, _calcWBS: function() {
              if (this._isRecalcNeeded()) {
                var e3 = true;
                t3.eachTask(function(n2) {
                  if (e3) return e3 = false, void this._setWBSCode(n2, "1");
                  var i = t3.getPrevSibling(n2.id);
                  if (null !== i) {
                    var r = t3.getTask(i).$wbs;
                    r && ((r = r.split("."))[r.length - 1]++, this._setWBSCode(n2, r.join(".")));
                  } else {
                    var a = t3.getParent(n2.id);
                    this._setWBSCode(n2, t3.getTask(a).$wbs + ".1");
                  }
                }, t3.config.root_id, this), this._needRecalc = false;
              }
            } };
          }(t2);
          function n() {
            return e2.reset(), true;
          }
          t2.getWBSCode = function(t3) {
            return e2.getWBSCode(t3);
          }, t2.getTaskByWBSCode = function(t3) {
            return e2.getByWBSCode(t3);
          }, t2.attachEvent("onAfterTaskMove", n), t2.attachEvent("onBeforeParse", n), t2.attachEvent("onAfterTaskDelete", n), t2.attachEvent("onAfterTaskAdd", n), t2.attachEvent("onAfterSort", n);
        };
      }, function(t, e, n) {
        var i = n(2);
        function r(t2) {
          var e2 = {}, n2 = false;
          t2.$data.tasksStore.attachEvent("onStoreUpdated", function() {
            e2 = {}, n2 = false;
          }), t2.attachEvent("onBeforeGanttRender", function() {
            e2 = {};
          });
          var r2 = String(Math.random());
          function a(t3) {
            return null === t3 ? r2 + String(t3) : String(t3);
          }
          function o(t3, e3) {
            return Array.isArray(t3) ? t3.map(function(t4) {
              return a(t4);
            }).join("_") + "_" + e3 : a(t3) + "_" + e3;
          }
          function s(r3, s2) {
            var l2, c = o(s2, r3), u = {};
            return i.forEach(s2, function(t3) {
              u[a(t3)] = true;
            }), e2[c] ? l2 = e2[c] : (l2 = e2[c] = [], t2.eachTask(function(s3) {
              var c2;
              s3.type != t2.config.types.project && (r3 in s3 && (c2 = i.isArray(s3[r3]) ? s3[r3] : [s3[r3]], i.forEach(c2, function(t3) {
                var i2 = t3 && t3.resource_id ? t3.resource_id : t3;
                if (u[a(i2)]) l2.push(s3);
                else if (!n2) {
                  var c3 = o(t3, r3);
                  e2[c3] || (e2[c3] = []), e2[c3].push(s3);
                }
              })));
            }), n2 = true), l2;
          }
          function l(e3, n3, i2) {
            var r3 = t2.config.resource_property, a2 = [];
            if (t2.getDatastore("task").exists(n3)) {
              var o2 = t2.getTask(n3);
              a2 = o2[r3] || [];
            }
            Array.isArray(a2) || (a2 = [a2]);
            for (var s2 = 0; s2 < a2.length; s2++) a2[s2].resource_id == e3 && i2.push({ task_id: o2.id, resource_id: a2[s2].resource_id, value: a2[s2].value });
          }
          return { getTaskBy: function(e3, n3) {
            return "function" == typeof e3 ? function(e4) {
              var n4 = [];
              return t2.eachTask(function(t3) {
                e4(t3) && n4.push(t3);
              }), n4;
            }(e3) : i.isArray(n3) ? s(e3, n3) : s(e3, [n3]);
          }, getResourceAssignments: function(e3, n3) {
            var i2 = [], r3 = t2.config.resource_property;
            return void 0 !== n3 ? l(e3, n3, i2) : t2.getTaskBy(r3, e3).forEach(function(t3) {
              l(e3, t3.id, i2);
            }), i2;
          } };
        }
        t.exports = function(t2) {
          var e2 = r(t2);
          t2.getTaskBy = e2.getTaskBy, t2.getResourceAssignments = e2.getResourceAssignments, t2.config.resource_property = "owner_id", t2.config.resource_store = "resource", t2.config.resource_render_empty_cells = false, t2.templates.histogram_cell_class = function(t3, e3, n2, i2, r2) {
          }, t2.templates.histogram_cell_label = function(t3, e3, n2, i2, r2) {
            return i2.length + "/3";
          }, t2.templates.histogram_cell_allocated = function(t3, e3, n2, i2, r2) {
            return i2.length / 3;
          }, t2.templates.histogram_cell_capacity = function(t3, e3, n2, i2, r2) {
            return 0;
          }, t2.templates.resource_cell_class = function(t3, e3, n2, i2, r2) {
            return i2.length <= 1 ? "gantt_resource_marker_ok" : "gantt_resource_marker_overtime";
          }, t2.templates.resource_cell_value = function(t3, e3, n2, i2, r2) {
            return 8 * i2.length;
          };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = "$resourceAssignments";
          t2.config.resource_assignment_store = "resourceAssignments", t2.config.process_resource_assignments = true;
          var n = { auto: "auto", singleValue: "singleValue", valueArray: "valueArray", resourceValueArray: "resourceValueArray", assignmentsArray: "assignmentsArray" }, i = n.auto, r = { fixedDates: "fixedDates", fixedDuration: "fixedDuration", default: "default" };
          function a(e3, n2) {
            e3.start_date ? e3.start_date = t2.date.parseDate(e3.start_date, "parse_date") : e3.start_date = null, e3.end_date ? e3.end_date = t2.date.parseDate(e3.end_date, "parse_date") : e3.end_date = null;
            var i2 = Number(e3.delay), a2 = false;
            if (isNaN(i2) ? (e3.delay = 0, a2 = true) : e3.delay = i2, t2.defined(e3.value) || (e3.value = null), !e3.task_id || !e3.resource_id) return false;
            if (e3.mode = e3.mode || r.default, e3.mode === r.fixedDuration && (isNaN(Number(e3.duration)) && (n2 = n2 || t2.getTask(e3.task_id), e3.duration = t2.calculateDuration({ start_date: e3.start_date, end_date: e3.end_date, id: n2 })), a2 && (n2 = n2 || t2.getTask(e3.task_id), e3.delay = t2.calculateDuration({ start_date: n2.start_date, end_date: e3.start_date, id: n2 }))), e3.mode !== r.fixedDates && (n2 || t2.isTaskExists(e3.task_id))) {
              var o2 = s(e3, n2 = n2 || t2.getTask(e3.task_id));
              e3.start_date = o2.start_date, e3.end_date = o2.end_date, e3.duration = o2.duration;
            }
          }
          var o = t2.createDatastore({ name: t2.config.resource_assignment_store, initItem: function(e3) {
            return e3.id || (e3.id = t2.uid()), a(e3), e3;
          } });
          function s(e3, n2) {
            if (e3.mode === r.fixedDates) return { start_date: e3.start_date, end_date: e3.end_date, duration: e3.duration };
            var i2, a2, o2 = e3.delay ? t2.calculateEndDate({ start_date: n2.start_date, duration: e3.delay, task: n2 }) : new Date(n2.start_date);
            return e3.mode === r.fixedDuration ? (i2 = t2.calculateEndDate({ start_date: o2, duration: e3.duration, task: n2 }), a2 = e3.duration) : (i2 = new Date(n2.end_date), a2 = n2.duration - e3.delay), { start_date: o2, end_date: i2, duration: a2 };
          }
          function l(e3) {
            var o2 = t2.config.resource_property, s2 = e3[o2], l2 = [], c2 = i === n.auto;
            if (t2.defined(s2) && s2) {
              Array.isArray(s2) || (s2 = [s2], c2 && (i = n.singleValue, c2 = false));
              var u2 = {};
              s2.forEach(function(o3) {
                o3.resource_id || (o3 = { resource_id: o3 }, c2 && (i = n.valueArray, c2 = false)), c2 && (o3.id && o3.resource_id ? (i = n.assignmentsArray, c2 = false) : (i = n.resourceValueArray, c2 = false));
                var s3, d2 = r.default;
                o3.mode || (o3.start_date && o3.end_date || o3.start_date && o3.duration) && (d2 = r.fixedDuration), s3 = o3.id || !o3.$id || u2[o3.$id] ? o3.id && !u2[o3.id] ? o3.id : t2.uid() : o3.$id, u2[s3] = true;
                var h2 = { id: s3, start_date: o3.start_date, duration: o3.duration, end_date: o3.end_date, delay: o3.delay, task_id: e3.id, resource_id: o3.resource_id, value: o3.value, mode: o3.mode || d2 };
                h2.start_date && h2.start_date.getMonth && h2.end_date && h2.end_date.getMonth && "number" == typeof h2.duration || a(h2, e3), l2.push(h2);
              });
            }
            return l2;
          }
          function c(e3) {
            if (t2.isTaskExists(e3)) {
              var n2 = t2.getTask(e3);
              u(n2, t2.getTaskAssignments(n2.id));
            }
          }
          function u(r2, a2) {
            a2.sort(function(t3, e3) {
              return t3.start_date && e3.start_date && t3.start_date.valueOf() != e3.start_date.valueOf() ? t3.start_date - e3.start_date : 0;
            }), i == n.assignmentsArray ? r2[t2.config.resource_property] = a2 : i == n.resourceValueArray && (r2[t2.config.resource_property] = a2.map(function(t3) {
              return { $id: t3.id, start_date: t3.start_date, duration: t3.duration, end_date: t3.end_date, delay: t3.delay, resource_id: t3.resource_id, value: t3.value, mode: t3.mode };
            })), r2[e2] = a2;
          }
          function d(e3) {
            var n2 = l(e3);
            return n2.forEach(function(e4) {
              e4.id = e4.id || t2.uid();
            }), n2;
          }
          function h(t3, e3) {
            var a2 = function(t4, e4) {
              var r2 = { inBoth: [], inTaskNotInStore: [], inStoreNotInTask: [] };
              if (i == n.singleValue) {
                var a3 = t4[0], o2 = a3 ? a3.resource_id : null, s2 = false;
                e4.forEach(function(t5) {
                  t5.resource_id != o2 ? r2.inStoreNotInTask.push(t5) : t5.resource_id == o2 && (r2.inBoth.push({ store: t5, task: a3 }), s2 = true);
                }), !s2 && a3 && r2.inTaskNotInStore.push(a3);
              } else if (i == n.valueArray) {
                var l2 = {}, c2 = {}, u2 = {};
                t4.forEach(function(t5) {
                  l2[t5.resource_id] = t5;
                }), e4.forEach(function(t5) {
                  c2[t5.resource_id] = t5;
                }), t4.concat(e4).forEach(function(t5) {
                  if (!u2[t5.resource_id]) {
                    u2[t5.resource_id] = true;
                    var e5 = l2[t5.resource_id], n2 = c2[t5.resource_id];
                    e5 && n2 ? r2.inBoth.push({ store: n2, task: e5 }) : e5 && !n2 ? r2.inTaskNotInStore.push(e5) : !e5 && n2 && r2.inStoreNotInTask.push(n2);
                  }
                });
              } else i != n.assignmentsArray && i != n.resourceValueArray || (l2 = {}, c2 = {}, u2 = {}, t4.forEach(function(t5) {
                l2[t5.id || t5.$id] = t5;
              }), e4.forEach(function(t5) {
                c2[t5.id] = t5;
              }), t4.concat(e4).forEach(function(t5) {
                var e5 = t5.id || t5.$id;
                if (!u2[e5]) {
                  u2[e5] = true;
                  var n2 = l2[e5], i2 = c2[e5];
                  n2 && i2 ? r2.inBoth.push({ store: i2, task: n2 }) : n2 && !i2 ? r2.inTaskNotInStore.push(n2) : !n2 && i2 && r2.inStoreNotInTask.push(i2);
                }
              }));
              return r2;
            }(l(t3), e3);
            a2.inStoreNotInTask.forEach(function(t4) {
              o.removeItem(t4.id);
            }), a2.inTaskNotInStore.forEach(function(t4) {
              o.addItem(t4);
            }), a2.inBoth.forEach(function(e4) {
              if (function(t4, e5) {
                var n3 = { id: true };
                for (var i2 in t4) if (!n3[i2] && String(t4[i2]) !== String(e5[i2])) return true;
                return false;
              }(e4.task, e4.store)) !function(t4, e5) {
                var n3 = { id: true };
                for (var i2 in t4) n3[i2] || (e5[i2] = t4[i2]);
              }(e4.task, e4.store), o.updateItem(e4.store.id);
              else if (e4.task.start_date && e4.task.end_date && e4.task.mode !== r.fixedDates) {
                var n2 = s(e4.store, t3);
                e4.store.start_date.valueOf() == n2.start_date.valueOf() && e4.store.end_date.valueOf() == n2.end_date.valueOf() || (e4.store.start_date = n2.start_date, e4.store.end_date = n2.end_date, e4.store.duration = n2.duration, o.updateItem(e4.store.id));
              }
            }), c(t3.id);
          }
          function f(t3) {
            var n2 = t3[e2] || o.find(function(e3) {
              return e3.task_id == t3.id;
            });
            h(t3, n2);
          }
          t2.attachEvent("onGanttReady", function() {
            if (t2.config.process_resource_assignments) {
              t2.attachEvent("onParse", function() {
                t2.silent(function() {
                  o.clearAll();
                  var e4 = [];
                  t2.eachTask(function(n3) {
                    if (n3.type !== t2.config.types.project) {
                      var i3 = d(n3);
                      u(n3, i3), i3.forEach(function(t3) {
                        e4.push(t3);
                      });
                    }
                  }), o.parse(e4);
                });
              });
              var e3 = false, n2 = false, i2 = {};
              t2.attachEvent("onBeforeBatchUpdate", function() {
                e3 = true;
              }), t2.attachEvent("onAfterBatchUpdate", function() {
                if (n2) {
                  var r3 = {};
                  for (var a3 in i2) r3[a3] = t2.getTaskAssignments(i2[a3].id);
                  for (var a3 in i2) h(i2[a3], r3[a3]);
                }
                n2 = false, e3 = false, i2 = {};
              }), t2.attachEvent("onTaskCreated", function(t3) {
                var e4 = d(t3);
                return o.parse(e4), u(t3, e4), true;
              }), t2.attachEvent("onAfterTaskUpdate", function(t3, r3) {
                e3 ? (n2 = true, i2[t3] = r3) : f(r3);
              }), t2.attachEvent("onAfterTaskAdd", function(t3, r3) {
                e3 ? (n2 = true, i2[t3] = r3) : f(r3);
              }), t2.attachEvent("onRowDragEnd", function(e4) {
                f(t2.getTask(e4));
              }), t2.$data.tasksStore.attachEvent("onAfterDeleteConfirmed", function(e4, n3) {
                var i3 = [e4];
                t2.eachTask(function(t3) {
                  i3.push(t3.id);
                }, e4), function(t3) {
                  var e5 = {};
                  t3.forEach(function(t4) {
                    e5[t4] = true;
                  }), o.find(function(t4) {
                    return e5[t4.task_id];
                  }).forEach(function(t4) {
                    o.removeItem(t4.id);
                  });
                }(i3);
              }), t2.$data.tasksStore.attachEvent("onClearAll", function() {
                return r2 = null, a2 = null, s2 = null, o.clearAll(), true;
              }), t2.attachEvent("onTaskIdChange", function(t3, e4) {
                o.find(function(e5) {
                  return e5.task_id == t3;
                }).forEach(function(t4) {
                  t4.task_id = e4, o.updateItem(t4.id);
                }), c(e4);
              });
              var r2 = null, a2 = null, s2 = null;
              o.attachEvent("onStoreUpdated", function() {
                return !!e3 || (r2 = null, a2 = null, s2 = null, true);
              }), t2.getResourceAssignments = function(e4, n3) {
                var i3 = t2.defined(n3) && null !== n3;
                return null === r2 && (r2 = {}, a2 = {}, o.eachItem(function(t3) {
                  r2[t3.resource_id] || (r2[t3.resource_id] = []), r2[t3.resource_id].push(t3);
                  var e5 = t3.resource_id + "-" + t3.task_id;
                  a2[e5] || (a2[e5] = []), a2[e5].push(t3);
                })), i3 ? (a2[e4 + "-" + n3] || []).slice() : (r2[e4] || []).slice();
              }, t2.getTaskAssignments = function(t3) {
                if (null === s2) {
                  var e4 = [];
                  s2 = {}, o.eachItem(function(n3) {
                    s2[n3.task_id] || (s2[n3.task_id] = []), s2[n3.task_id].push(n3), n3.task_id == t3 && e4.push(n3);
                  });
                }
                return (s2[t3] || []).slice();
              }, t2.updateTaskAssignments = c;
            }
          }, { once: true });
        };
      }, function(t, e) {
        t.exports = function(t2) {
          function e2(e3) {
            return function() {
              return !t2.config.placeholder_task || e3.apply(this, arguments);
            };
          }
          function n() {
            var e3 = t2.getTaskBy("type", t2.config.types.placeholder);
            if (!e3.length || !t2.isTaskExists(e3[0].id)) {
              var n2 = { unscheduled: true, type: t2.config.types.placeholder, duration: 0, text: t2.locale.labels.new_task };
              if (false === t2.callEvent("onTaskCreated", [n2])) return;
              t2.addTask(n2);
            }
          }
          function i(e3) {
            var n2 = t2.getTask(e3);
            n2.type == t2.config.types.placeholder && (n2.start_date && n2.end_date && n2.unscheduled && (n2.unscheduled = false), t2.batchUpdate(function() {
              var e4 = t2.copy(n2);
              t2.silent(function() {
                t2.deleteTask(n2.id);
              }), delete e4["!nativeeditor_status"], e4.type = t2.config.types.task, e4.id = t2.uid(), t2.addTask(e4);
            }));
          }
          t2.config.types.placeholder = "placeholder", t2.attachEvent("onDataProcessorReady", e2(function(n2) {
            n2 && !n2._silencedPlaceholder && (n2._silencedPlaceholder = true, n2.attachEvent("onBeforeUpdate", e2(function(e3, i2, r2) {
              return r2.type != t2.config.types.placeholder || (n2.setUpdated(e3, false), false);
            })));
          }));
          var r = false;
          function a(e3) {
            if (t2.config.types.placeholder && t2.isTaskExists(e3) && t2.getTask(e3).type == t2.config.types.placeholder) return true;
            return false;
          }
          function o(t3) {
            return !(!a(t3.source) && !a(t3.target));
          }
          t2.attachEvent("onGanttReady", function() {
            r || (r = true, t2.attachEvent("onAfterTaskUpdate", e2(i)), t2.attachEvent("onAfterTaskAdd", e2(function(e3, i2) {
              i2.type != t2.config.types.placeholder && (t2.getTaskBy("type", t2.config.types.placeholder).forEach(function(e4) {
                t2.silent(function() {
                  t2.isTaskExists(e4.id) && t2.deleteTask(e4.id);
                });
              }), n());
            })), t2.attachEvent("onParse", e2(n)));
          }), t2.attachEvent("onLinkValidation", function(t3) {
            return !o(t3);
          }), t2.attachEvent("onBeforeLinkAdd", function(t3, e3) {
            return !o(e3);
          }), t2.attachEvent("onBeforeUndoStack", function(e3) {
            for (var n2 = 0; n2 < e3.commands.length; n2++) {
              var i2 = e3.commands[n2];
              "task" === i2.entity && i2.value.type === t2.config.types.placeholder && (e3.commands.splice(n2, 1), n2--);
            }
            return true;
          });
        };
      }, function(t, e) {
        t.exports = function(t2) {
          function e2(e3) {
            return function() {
              return !t2.config.auto_types || t2.getTaskType(t2.config.types.project) != t2.config.types.project || e3.apply(this, arguments);
            };
          }
          function n(e3, n2) {
            var i2 = t2.getTask(e3), r2 = a(i2);
            false !== r2 && t2.getTaskType(i2) !== r2 && (n2.$needsUpdate = true, n2[i2.id] = { task: i2, type: r2 });
          }
          function i(e3) {
            if (!t2.getState().group_mode) {
              var i2 = function(e4, i3) {
                return n(e4, i3 = i3 || {}), t2.eachParent(function(t3) {
                  n(t3.id, i3);
                }, e4), i3;
              }(e3);
              i2.$needsUpdate && t2.batchUpdate(function() {
                !function(e4) {
                  for (var n2 in e4) if (e4[n2] && e4[n2].task) {
                    var i3 = e4[n2].task;
                    i3.type = e4[n2].type, t2.updateTask(i3.id);
                  }
                }(i2);
              });
            }
          }
          var r;
          function a(e3) {
            var n2 = t2.config.types, i2 = t2.hasChild(e3.id), r2 = t2.getTaskType(e3.type);
            return i2 && r2 === n2.task ? n2.project : !i2 && r2 === n2.project && n2.task;
          }
          var o, s, l = true;
          function c(e3) {
            e3 != t2.config.root_id && t2.isTaskExists(e3) && i(e3);
          }
          t2.attachEvent("onParse", e2(function() {
            l = false, t2.getState().group_mode || (t2.batchUpdate(function() {
              t2.eachTask(function(e3) {
                var n2 = a(e3);
                false !== n2 && function(e4, n3) {
                  t2.getState().group_mode || (e4.type = n3, t2.updateTask(e4.id));
                }(e3, n2);
              });
            }), l = true);
          })), t2.attachEvent("onAfterTaskAdd", e2(function(t3) {
            l && i(t3);
          })), t2.attachEvent("onAfterTaskUpdate", e2(function(t3) {
            l && i(t3);
          })), t2.attachEvent("onBeforeTaskDelete", e2(function(e3, n2) {
            return r = t2.getParent(e3), true;
          })), t2.attachEvent("onAfterTaskDelete", e2(function(t3, e3) {
            c(r);
          })), t2.attachEvent("onRowDragStart", e2(function(e3, n2, i2) {
            return o = t2.getParent(e3), true;
          })), t2.attachEvent("onRowDragEnd", e2(function(t3, e3) {
            c(o), i(t3);
          })), t2.attachEvent("onBeforeTaskMove", e2(function(e3, n2, i2) {
            return s = t2.getParent(e3), true;
          })), t2.attachEvent("onAfterTaskMove", e2(function(t3, e3, n2) {
            document.querySelector(".gantt_drag_marker") || (c(s), i(t3));
          }));
        };
      }, function(t, e, n) {
        var i = n(37).default, r = n(129).default;
        t.exports = function(t2) {
          t2.ext.formatters = { durationFormatter: function(e2) {
            return e2 || (e2 = {}), e2.store || (e2.store = t2.config.duration_unit), e2.enter || (e2.enter = t2.config.duration_unit), i.create(e2, t2);
          }, linkFormatter: function(e2) {
            return r.create(e2, t2);
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = function() {
          function t2(t3) {
            var e2 = this;
            this.format = function(t4) {
              return e2._getWBSCode(t4.source);
            }, this.canParse = function(t4) {
              return e2._linkReg.test(t4);
            }, this.parse = function(t4) {
              if (!e2.canParse(t4)) return null;
              var n2 = e2._linkReg.exec(t4)[0].trim();
              return { id: void 0, source: e2._findSource(n2) || null, target: null, type: e2._gantt.config.links.finish_to_start, lag: 0 };
            }, this._getWBSCode = function(t4) {
              var n2 = e2._gantt.getTask(t4);
              return e2._gantt.getWBSCode(n2);
            }, this._findSource = function(t4) {
              var n2 = new RegExp("^[0-9.]+", "i");
              if (n2.exec(t4)) {
                var i2 = n2.exec(t4)[0], r = e2._gantt.getTaskByWBSCode(i2);
                if (r) return r.id;
              }
              return null;
            }, this._linkReg = /^[0-9\.]+/, this._gantt = t3;
          }
          return t2.create = function(e2, n2) {
            return new t2(n2);
          }, t2;
        }();
        e.default = i;
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(34), i = {};
          t2.attachEvent("onClearAll", function() {
            i = {};
          });
          var r = e2.prototype.hasChild;
          t2.$data.tasksStore.hasChild = function(e3) {
            return t2.config.branch_loading ? !!r.call(this, e3) || !!this.exists(e3) && this.getItem(e3)[t2.config.branch_loading_property] : r.call(this, e3);
          }, t2.attachEvent("onTaskOpened", function(e3) {
            if (t2.config.branch_loading && t2._load_url && function(e4) {
              return !(!t2.config.branch_loading || !t2._load_url || i[e4] || t2.getChildren(e4).length || !t2.hasChild(e4));
            }(e3)) {
              var n2 = t2._load_url, r2 = (n2 = n2.replace(/(\?|&)?parent_id=.+&?/, "")).indexOf("?") >= 0 ? "&" : "?", a = t2.getScrollState().y || 0, o = { taskId: e3, url: n2 + r2 + "parent_id=" + encodeURIComponent(e3) };
              if (false === t2.callEvent("onBeforeBranchLoading", [o])) return;
              t2.load(o.url, this._load_type, function() {
                a && t2.scrollTo(null, a), t2.callEvent("onAfterBranchLoading", [o]);
              }), i[e3] = true;
            }
          });
        };
      }, function(t, e, n) {
        var i = n(19);
        t.exports = function(t2) {
          n(138)(t2), i.prototype.getGridColumns = function() {
            for (var t3 = this.$getConfig().columns, e2 = [], n2 = 0; n2 < t3.length; n2++) t3[n2].hide || e2.push(t3[n2]);
            return e2;
          };
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return { init: function() {
          }, doOnRender: function() {
          } };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = -1, n = -1;
          return { resetCache: function() {
            e2 = -1, n = -1;
          }, _getRowHeight: function() {
            return -1 === e2 && (e2 = t2.$getConfig().row_height), e2;
          }, _refreshState: function() {
            this.resetCache(), n = true;
            var e3 = t2.$config.rowStore;
            if (e3) for (var i = this._getRowHeight(), r = 0; r < e3.fullOrder.length; r++) {
              var a = e3.getItem(e3.fullOrder[r]);
              if (a && a.row_height && a.row_height !== i) {
                n = false;
                break;
              }
            }
          }, canUseSimpleCalculation: function() {
            return -1 === n && this._refreshState(), n;
          }, getRowTop: function(e3) {
            return t2.$config.rowStore ? e3 * this._getRowHeight() : 0;
          }, getItemHeight: function(t3) {
            return this._getRowHeight();
          }, getTotalHeight: function() {
            return t2.$config.rowStore ? t2.$config.rowStore.countVisible() * this._getRowHeight() : 0;
          }, getItemIndexByTopPosition: function(e3) {
            return t2.$config.rowStore ? Math.floor(e3 / this._getRowHeight()) : 0;
          } };
        };
      }, function(t, e, n) {
        var i = n(1);
        t.exports = function(t2, e2) {
          var n2 = { row_before_start: t2.bind(function(t3, n3, r) {
            var a = e2.$getConfig(), o = e2.$config.rowStore;
            if (!i.locateAttribute(r, a.task_grid_row_resizer_attribute)) return false;
            var s = this.locate(r, a.task_grid_row_resizer_attribute), l = o.getItem(s);
            return false !== e2.callEvent("onBeforeRowResize", [l]) && void 0;
          }, t2), row_after_start: t2.bind(function(t3, n3, i2) {
            var r = e2.$getConfig(), a = this.locate(i2, r.task_grid_row_resizer_attribute);
            t3.config.marker.innerHTML = "", t3.config.marker.className += " gantt_row_grid_resize_area", t3.config.marker.style.width = e2.$grid.offsetWidth + "px", t3.config.drag_id = a;
          }, t2), row_drag_move: t2.bind(function(t3, n3, r) {
            var a = e2.$config.rowStore, o = e2.$getConfig(), s = t3.config, l = s.drag_id, c = e2.getItemHeight(l), u = e2.getItemTop(l), d = i.getNodePosition(e2.$grid_data), h = parseInt(s.marker.style.top, 10), f = u + d.y, _ = 0, g = o.min_task_grid_row_height;
            return (_ = h - f) < g && (_ = g), s.marker.style.left = d.x + "px", s.marker.style.top = f - 1 + "px", s.marker.style.height = Math.abs(_) + 1 + "px", s.marker_height = _, e2.callEvent("onRowResize", [l, a.getItem(l), _ + c]), true;
          }, t2), row_drag_end: t2.bind(function(n3, i2, r) {
            var a = e2.$config.rowStore, o = n3.config, s = o.drag_id, l = a.getItem(s), c = e2.getItemHeight(s), u = o.marker_height;
            false !== e2.callEvent("onBeforeRowResizeEnd", [s, l, u]) && l.row_height != u && (l.row_height = u, t2.updateTask(s), e2.callEvent("onAfterRowResize", [s, l, c, u]), this.render());
          }, t2) };
          return { init: function() {
            var i2 = t2.$services.getService("dnd"), r = e2.$getConfig(), a = new i2(e2.$grid_data, { updates_per_second: 60 });
            t2.defined(r.dnd_sensitivity) && (a.config.sensitivity = r.dnd_sensitivity), a.attachEvent("onBeforeDragStart", function(t3, e3) {
              return n2.row_before_start(a, t3, e3);
            }), a.attachEvent("onAfterDragStart", function(t3, e3) {
              return n2.row_after_start(a, t3, e3);
            }), a.attachEvent("onDragMove", function(t3, e3) {
              return n2.row_drag_move(a, t3, e3);
            }), a.attachEvent("onDragEnd", function(t3, e3) {
              return n2.row_drag_end(a, t3, e3);
            });
          } };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(136);
        e.default = i.ColumnsGridDnd;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.ColumnsGridDnd = void 0;
        var i = n(1), r = n(137), a = function() {
          function t2(t3, e2) {
            var n2 = this;
            this._targetMarker = null, this.calculateCurrentPosition = function(t4) {
              var e3 = n2.$grid.$grid.getBoundingClientRect(), i2 = e3.right, r2 = e3.left, a2 = t4;
              return a2 > i2 && (a2 = i2), a2 < r2 && (a2 = r2), a2;
            }, this.$gantt = t3, this.$grid = e2;
          }
          return t2.prototype.init = function() {
            var t3 = this.$gantt.$services.getService("dnd");
            this._dnd = new t3(this.$grid.$grid_scale, { updates_per_second: 60 }), this._scrollableGrid = new r.default({ gantt: this.$gantt, grid: this.$grid, dnd: this._dnd, getCurrentX: this.calculateCurrentPosition }), this.attachEvents();
          }, t2.prototype.attachEvents = function() {
            var t3 = this;
            this._dnd.attachEvent("onBeforeDragStart", function(e2, n2) {
              if (t3._draggedCell = t3.$gantt.utils.dom.closest(n2.target, ".gantt_grid_head_cell"), t3._draggedCell) {
                var i2, r2, a2 = t3.$grid.$getConfig().columns, o = t3._draggedCell.getAttribute("data-column-id");
                return a2.map(function(t4, e3) {
                  t4.name === o && (i2 = t4, r2 = e3);
                }), false === t3.$grid.callEvent("onBeforeColumnDragStart", [{ draggedColumn: i2, draggedIndex: r2 }]) ? false : !(!t3._draggedCell || !i2) && (t3._gridConfig = t3.$grid.$getConfig(), t3._originAutoscroll = t3.$gantt.config.autoscroll, t3.$gantt.config.autoscroll = false, true);
              }
            }), this._dnd.attachEvent("onAfterDragStart", function(e2, n2) {
              t3._draggedCell && (t3._dnd.config.column = t3._draggedCell.getAttribute("data-column-id"), t3._dnd.config.marker.innerHTML = t3._draggedCell.outerHTML, t3._dnd.config.marker.classList.add("gantt_column_drag_marker"), t3._dnd.config.marker.style.height = t3._gridConfig.scale_height + "px", t3._dnd.config.marker.style.lineHeight = t3._gridConfig.scale_height + "px", t3._draggedCell.classList.add("gantt_grid_head_cell_dragged"));
            }), this._dnd.attachEvent("onDragMove", function(e2, n2) {
              if (t3._draggedCell) {
                t3._dragX = n2.clientX;
                var i2 = t3.calculateCurrentPosition(n2.clientX), r2 = t3.findColumnsIndexes(), a2 = r2.targetIndex, o = r2.draggedIndex, s = t3.$grid.$getConfig().columns, l = s[o], c = s[a2];
                return false === t3.$grid.callEvent("onColumnDragMove", [{ draggedColumn: l, targetColumn: c, draggedIndex: o, targetIndex: a2 }]) ? (t3.cleanTargetMarker(), false) : (t3.setMarkerPosition(i2), t3.drawTargetMarker(r2), true);
              }
            }), this._dnd.attachEvent("onDragEnd", function() {
              t3._draggedCell && (t3.$gantt.config.autoscroll = t3._originAutoscroll, t3._draggedCell.classList.remove("gantt_grid_head_cell_dragged"), t3.cleanTargetMarker(), t3.reorderColumns());
            });
          }, t2.prototype.reorderColumns = function() {
            var t3 = this.findColumnsIndexes(), e2 = t3.targetIndex, n2 = t3.draggedIndex, i2 = this.$grid.$getConfig().columns, r2 = i2[n2], a2 = i2[e2];
            false !== this.$grid.callEvent("onBeforeColumnReorder", [{ draggedColumn: r2, targetColumn: a2, draggedIndex: n2, targetIndex: e2 }]) && e2 !== n2 && (i2.splice(n2, 1), i2.splice(e2, 0, r2), this.$gantt.render(), this.$grid.callEvent("onAfterColumnReorder", [{ draggedColumn: r2, targetColumn: a2, draggedIndex: n2, targetIndex: e2 }]));
          }, t2.prototype.findColumnsIndexes = function() {
            var t3, e2, n2, i2, r2, a2 = this._dnd.config.column, o = this.$grid.$getConfig().columns, s = { startX: 0, endX: 0 }, l = 0, c = o.length - 1, u = function(t4, e3) {
              return t4 <= e3;
            }, d = function(t4) {
              return ++t4;
            };
            this.$gantt.config.rtl && (l = o.length - 1, c = 0, u = function(t4, e3) {
              return t4 >= e3;
            }, d = function(t4) {
              return --t4;
            });
            for (var h = this._dragX - this.$grid.$grid.getBoundingClientRect().left + this._scrollableGrid.getCorrection(), f = l; u(f, c) && (void 0 === t3 || void 0 === e2); f = d(f)) o[f].hide || (s.startX = s.endX, s.endX += o[f].width, h >= s.startX && (h <= s.endX || !u(d(f), c)) && (t3 = f, n2 = s.startX, i2 = s.endX, r2 = (h - s.startX) / (s.endX - s.startX)), a2 === o[f].name && (e2 = f));
            return { targetIndex: t3, draggedIndex: e2, xBefore: n2, xAfter: i2, columnRelativePos: r2 };
          }, t2.prototype.setMarkerPosition = function(t3, e2) {
            void 0 === e2 && (e2 = 10);
            var n2 = this._dnd.config.marker, i2 = this._dnd._obj.getBoundingClientRect();
            n2.style.top = i2.y + e2 + "px", n2.style.left = t3 + "px";
          }, t2.prototype.drawTargetMarker = function(t3) {
            var e2, n2 = t3.targetIndex, r2 = t3.draggedIndex, a2 = t3.xBefore, o = t3.xAfter, s = t3.columnRelativePos;
            this._targetMarker || (this._targetMarker = document.createElement("div"), i.addClassName(this._targetMarker, "gantt_grid_target_marker"), this._targetMarker.style.display = "none", this._targetMarker.style.height = this._gridConfig.scale_height + "px"), this._targetMarker.parentNode || this.$grid.$grid_scale.appendChild(this._targetMarker), e2 = n2 > r2 ? o : n2 < r2 ? a2 : s > 0.5 ? o : a2, this._targetMarker.style.left = e2 + "px", this._targetMarker.style.display = "block";
          }, t2.prototype.cleanTargetMarker = function() {
            this._targetMarker && this._targetMarker.parentNode && this.$grid.$grid_scale.removeChild(this._targetMarker), this._targetMarker = null;
          }, t2;
        }();
        e.ColumnsGridDnd = a;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = function() {
          function t2(t3) {
            this._scrollOrder = 0;
            var e2 = t3.gantt, n2 = t3.grid, i2 = t3.dnd, r = t3.getCurrentX;
            this.$gantt = e2, this.$grid = n2, this._dnd = i2, this.getCurrentX = r, this._scrollView = this.$gantt.$ui.getView(this.$grid.$config.scrollX), this.attachEvents();
          }
          return t2.prototype.attachEvents = function() {
            var t3 = this;
            this.isScrollable() && (this._dnd.attachEvent("onDragMove", function(e2, n2) {
              var i2 = t3.$grid.$grid.getBoundingClientRect(), r = i2.right, a = i2.left, o = t3.getCurrentX(n2.clientX);
              return o >= r - 20 && (t3.autoscrollRight(), t3.autoscrollStart()), o <= a + 20 && (t3.autoscrollLeft(), t3.autoscrollStart()), o < r - 20 && o > a + 20 && t3.autoscrollStop(), true;
            }), this._dnd.attachEvent("onDragEnd", function() {
              t3.autoscrollStop();
            }));
          }, t2.prototype.autoscrollStart = function() {
            var t3 = this;
            if (0 !== this._scrollOrder) {
              var e2 = 10 * this._scrollOrder, n2 = this._scrollView.getScrollState();
              this._scrollView.scrollTo(n2.position + e2), setTimeout(function() {
                t3.autoscrollStart();
              }, 50);
            }
          }, t2.prototype.autoscrollRight = function() {
            this._scrollOrder = 1;
          }, t2.prototype.autoscrollLeft = function() {
            this._scrollOrder = -1;
          }, t2.prototype.autoscrollStop = function() {
            this._scrollOrder = 0;
          }, t2.prototype.getCorrection = function() {
            return this.isScrollable() ? this._scrollView.getScrollState().position : 0;
          }, t2.prototype.isScrollable = function() {
            return !!this.$grid.$config.scrollable;
          }, t2;
        }();
        e.default = i;
      }, function(t, e) {
        t.exports = function(t2) {
          t2.getGridColumn = function(e2) {
            for (var n = t2.config.columns, i = 0; i < n.length; i++) if (n[i].name == e2) return n[i];
            return null;
          }, t2.getGridColumns = function() {
            return t2.config.columns.slice();
          };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.isReadonly = function(e2) {
            return "number" != typeof e2 && "string" != typeof e2 || !t2.isTaskExists(e2) || (e2 = t2.getTask(e2)), (!e2 || !e2[this.config.editable_property]) && (e2 && e2[this.config.readonly_property] || this.config.readonly);
          };
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(2);
        t.exports = function(t2) {
          function e2(e3) {
            throw t2.assert(false, "Can't parse data: incorrect value of gantt.parse or gantt.load method. Actual argument value: " + JSON.stringify(e3)), new Error("Invalid argument for gantt.parse or gantt.load. An object or a JSON string of format https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#json is expected. Actual argument value: " + JSON.stringify(e3));
          }
          t2.load = function(e3, n2, i2) {
            this._load_url = e3, this.assert(arguments.length, "Invalid load arguments");
            var r2 = "json", a = null;
            return arguments.length >= 3 ? (r2 = n2, a = i2) : "string" == typeof arguments[1] ? r2 = arguments[1] : "function" == typeof arguments[1] && (a = arguments[1]), this._load_type = r2, this.callEvent("onLoadStart", [e3, r2]), this.ajax.get(e3, t2.bind(function(t3) {
              this.on_load(t3, r2), this.callEvent("onLoadEnd", [e3, r2]), "function" == typeof a && a.call(this);
            }, this));
          }, t2.parse = function(t3, e3) {
            this.on_load({ xmlDoc: { responseText: t3 } }, e3);
          }, t2.serialize = function(t3) {
            return this[t3 = t3 || "json"].serialize();
          }, t2.on_load = function(e3, n2) {
            if (e3.xmlDoc && 404 === e3.xmlDoc.status) this.assert(false, "Failed to load the data from <a href='" + e3.xmlDoc.responseURL + "' target='_blank'>" + e3.xmlDoc.responseURL + "</a>, server returns 404");
            else if (!t2.$destroyed) {
              this.callEvent("onBeforeParse", []), n2 || (n2 = "json"), this.assert(this[n2], "Invalid data type:'" + n2 + "'");
              var i2 = e3.xmlDoc.responseText, r2 = this[n2].parse(i2, e3);
              this._process_loading(r2);
            }
          }, t2._process_loading = function(t3) {
            t3.collections && this._load_collections(t3.collections), this.$data.tasksStore.parse(t3.data || t3.tasks);
            var e3 = t3.links || (t3.collections ? t3.collections.links : []);
            this.$data.linksStore.parse(e3), this.callEvent("onParse", []), this.render();
          }, t2._load_collections = function(t3) {
            var e3 = false;
            for (var n2 in t3) if (t3.hasOwnProperty(n2)) {
              e3 = true;
              var i2 = t3[n2], r2 = this.serverList[n2];
              if (!r2) continue;
              r2.splice(0, r2.length);
              for (var a = 0; a < i2.length; a++) {
                var o = i2[a], s = this.copy(o);
                for (var l in s.key = s.value, o) if (o.hasOwnProperty(l)) {
                  if ("value" == l || "label" == l) continue;
                  s[l] = o[l];
                }
                r2.push(s);
              }
            }
            e3 && this.callEvent("onOptionsLoad", []);
          }, t2.attachEvent("onBeforeTaskDisplay", function(t3, e3) {
            return !e3.$ignore;
          }), t2.json = { parse: function(n2) {
            if (n2 || e2(n2), "string" == typeof n2) if (void 0 != ("undefined" == typeof JSON ? "undefined" : i(JSON))) try {
              n2 = JSON.parse(n2);
            } catch (t3) {
              e2(n2);
            }
            else t2.assert(false, "JSON is not supported");
            return n2.data || n2.tasks || e2(n2), n2.dhx_security && (t2.security_key = n2.dhx_security), n2;
          }, serializeTask: function(t3) {
            return this._copyObject(t3);
          }, serializeLink: function(t3) {
            return this._copyLink(t3);
          }, _copyLink: function(t3) {
            var e3 = {};
            for (var n2 in t3) e3[n2] = t3[n2];
            return e3;
          }, _copyObject: function(e3) {
            var n2 = {};
            for (var i2 in e3) "$" != i2.charAt(0) && (n2[i2] = e3[i2], r.isDate(n2[i2]) && (n2[i2] = t2.defined(t2.templates.xml_format) ? t2.templates.xml_format(n2[i2]) : t2.templates.format_date(n2[i2])));
            return n2;
          }, serialize: function() {
            var e3 = [], n2 = [];
            t2.eachTask(function(n3) {
              t2.resetProjectDates(n3), e3.push(this.serializeTask(n3));
            }, t2.config.root_id, this);
            for (var i2 = t2.getLinks(), r2 = 0; r2 < i2.length; r2++) n2.push(this.serializeLink(i2[r2]));
            return { data: e3, links: n2 };
          } }, t2.xml = { _xmlNodeToJSON: function(t3, e3) {
            for (var n2 = {}, i2 = 0; i2 < t3.attributes.length; i2++) n2[t3.attributes[i2].name] = t3.attributes[i2].value;
            if (!e3) {
              for (i2 = 0; i2 < t3.childNodes.length; i2++) {
                var r2 = t3.childNodes[i2];
                1 == r2.nodeType && (n2[r2.tagName] = r2.firstChild ? r2.firstChild.nodeValue : "");
              }
              n2.text || (n2.text = t3.firstChild ? t3.firstChild.nodeValue : "");
            }
            return n2;
          }, _getCollections: function(e3) {
            for (var n2 = {}, i2 = t2.ajax.xpath("//coll_options", e3), r2 = 0; r2 < i2.length; r2++) for (var a = n2[i2[r2].getAttribute("for")] = [], o = t2.ajax.xpath(".//item", i2[r2]), s = 0; s < o.length; s++) {
              for (var l = o[s].attributes, c = { key: o[s].getAttribute("value"), label: o[s].getAttribute("label") }, u = 0; u < l.length; u++) {
                var d = l[u];
                "value" != d.nodeName && "label" != d.nodeName && (c[d.nodeName] = d.nodeValue);
              }
              a.push(c);
            }
            return n2;
          }, _getXML: function(e3, n2, i2) {
            i2 = i2 || "data", n2.getXMLTopNode || (n2 = t2.ajax.parse(n2));
            var r2 = t2.ajax.xmltop(i2, n2.xmlDoc);
            r2 && r2.tagName == i2 || function(e4) {
              throw t2.assert(false, "Can't parse data: incorrect value of gantt.parse or gantt.load method. Actual argument value: " + JSON.stringify(e4)), new Error("Invalid argument for gantt.parse or gantt.load. An XML of format https://docs.dhtmlx.com/gantt/desktop__supported_data_formats.html#xmldhtmlxgantt20 is expected. Actual argument value: " + JSON.stringify(e4));
            }(e3);
            var a = r2.getAttribute("dhx_security");
            return a && (t2.security_key = a), r2;
          }, parse: function(e3, n2) {
            n2 = this._getXML(e3, n2);
            for (var i2 = {}, r2 = i2.data = [], a = t2.ajax.xpath("//task", n2), o = 0; o < a.length; o++) r2[o] = this._xmlNodeToJSON(a[o]);
            return i2.collections = this._getCollections(n2), i2;
          }, _copyLink: function(t3) {
            return "<item id='" + t3.id + "' source='" + t3.source + "' target='" + t3.target + "' type='" + t3.type + "' />";
          }, _copyObject: function(t3) {
            return "<task id='" + t3.id + "' parent='" + (t3.parent || "") + "' start_date='" + t3.start_date + "' duration='" + t3.duration + "' open='" + !!t3.open + "' progress='" + t3.progress + "' end_date='" + t3.end_date + "'><![CDATA[" + t3.text + "]]></task>";
          }, serialize: function() {
            for (var e3 = [], n2 = [], i2 = t2.json.serialize(), r2 = 0, a = i2.data.length; r2 < a; r2++) e3.push(this._copyObject(i2.data[r2]));
            for (r2 = 0, a = i2.links.length; r2 < a; r2++) n2.push(this._copyLink(i2.links[r2]));
            return "<data>" + e3.join("") + "<coll_options for='links'>" + n2.join("") + "</coll_options></data>";
          } }, t2.oldxml = { parse: function(e3, n2) {
            n2 = t2.xml._getXML(e3, n2, "projects");
            for (var i2 = { collections: { links: [] } }, r2 = i2.data = [], a = t2.ajax.xpath("//task", n2), o = 0; o < a.length; o++) {
              r2[o] = t2.xml._xmlNodeToJSON(a[o]);
              var s = a[o].parentNode;
              "project" == s.tagName ? r2[o].parent = "project-" + s.getAttribute("id") : r2[o].parent = s.parentNode.getAttribute("id");
            }
            a = t2.ajax.xpath("//project", n2);
            for (o = 0; o < a.length; o++) {
              (l = t2.xml._xmlNodeToJSON(a[o], true)).id = "project-" + l.id, r2.push(l);
            }
            for (o = 0; o < r2.length; o++) {
              var l;
              (l = r2[o]).start_date = l.startdate || l.est, l.end_date = l.enddate, l.text = l.name, l.duration = l.duration / 8, l.open = 1, l.duration || l.end_date || (l.duration = 1), l.predecessortasks && i2.collections.links.push({ target: l.id, source: l.predecessortasks, type: t2.config.links.finish_to_start });
            }
            return i2;
          }, serialize: function() {
            t2.message("Serialization to 'old XML' is not implemented");
          } }, t2.serverList = function(t3, e3) {
            return e3 ? this.serverList[t3] = e3.slice(0) : this.serverList[t3] || (this.serverList[t3] = []), this.serverList[t3];
          };
        };
      }, function(t, e, n) {
        var i = n(142), r = n(151), a = n(153), o = n(0);
        t.exports = function(t2) {
          var e2 = new i(t2), n2 = new r(e2), s = a.create(e2, n2);
          o.mixin(t2, s);
        };
      }, function(t, e, n) {
        var i = n(0), r = n(39), a = n(143), o = n(144), s = n(149), l = n(150)();
        function c(t2) {
          this.$gantt = t2, this._calendars = {}, this._legacyConfig = void 0, this.$gantt.attachEvent("onGanttReady", (function() {
            this.$gantt.config.resource_calendars && (this._isLegacyConfig = s.isLegacyResourceCalendarFormat(this.$gantt.config.resource_calendars));
          }).bind(this)), this.$gantt.attachEvent("onBeforeGanttReady", (function() {
            this.createDefaultCalendars();
          }).bind(this)), this.$gantt.attachEvent("onBeforeGanttRender", (function() {
            this.createDefaultCalendars();
          }).bind(this));
        }
        c.prototype = { _calendars: {}, _convertWorkTimeSettings: function(t2) {
          var e2 = t2.days;
          if (e2 && !t2.dates) {
            t2.dates = t2.dates || {};
            for (var n2 = 0; n2 < e2.length; n2++) t2.dates[n2] = e2[n2], e2[n2] instanceof Array || (t2.dates[n2] = !!e2[n2]);
          }
          return delete t2.days, t2;
        }, mergeCalendars: function() {
          var t2 = [], e2 = arguments;
          if (Array.isArray(e2[0])) t2 = e2[0].slice();
          else for (var n2 = 0; n2 < arguments.length; n2++) t2.push(arguments[n2]);
          var i2, r2 = new a();
          return t2.forEach((function(t3) {
            i2 = i2 ? this._createCalendarFromConfig(r2.merge(i2, t3)) : t3;
          }).bind(this)), this.createCalendar(i2);
        }, _createCalendarFromConfig: function(t2) {
          var e2 = new o(this.$gantt, r(this.$gantt));
          e2.id = String(i.uid());
          var n2 = this._convertWorkTimeSettings(t2);
          if (n2.customWeeks) for (var a2 in n2.customWeeks) n2.customWeeks[a2] = this._convertWorkTimeSettings(n2.customWeeks[a2]);
          return e2._setConfig(n2), e2;
        }, createCalendar: function(t2) {
          var e2;
          t2 || (t2 = {}), e2 = t2.getConfig ? i.copy(t2.getConfig()) : t2.worktime ? i.copy(t2.worktime) : i.copy(t2);
          var n2 = i.copy(this.defaults.fulltime.worktime);
          return i.mixin(e2, n2), this._createCalendarFromConfig(e2);
        }, getCalendar: function(t2) {
          t2 = t2 || "global";
          var e2 = this._calendars[t2];
          return e2 || (this.createDefaultCalendars(), e2 = this._calendars[t2]), e2;
        }, getCalendars: function() {
          var t2 = [];
          for (var e2 in this._calendars) t2.push(this.getCalendar(e2));
          return t2;
        }, _getOwnCalendar: function(t2) {
          var e2 = this.$gantt.config;
          if (t2[e2.calendar_property]) return this.getCalendar(t2[e2.calendar_property]);
          if (e2.resource_calendars) {
            var n2;
            if (n2 = false === this._legacyConfig ? e2.resource_property : s.getResourceProperty(e2), Array.isArray(t2[n2])) e2.dynamic_resource_calendars && (i2 = l.getCalendarIdFromMultipleResources(t2[n2], this));
            else if (void 0 === this._legacyConfig && (this._legacyConfig = s.isLegacyResourceCalendarFormat(e2.resource_calendars)), this._legacyConfig) var i2 = s.getCalendarIdFromLegacyConfig(t2, e2.resource_calendars);
            else if (n2 && t2[n2] && e2.resource_calendars[t2[n2]]) var r2 = this.getResourceCalendar(t2[n2]);
            if (i2 && (r2 = this.getCalendar(i2)), r2) return r2;
          }
          return null;
        }, getResourceCalendar: function(t2) {
          if (null === t2 || void 0 === t2) return this.getCalendar();
          var e2 = null;
          e2 = "number" == typeof t2 || "string" == typeof t2 ? t2 : t2.id || t2.key;
          var n2 = this.$gantt.config, i2 = n2.resource_calendars, r2 = null;
          if (i2) {
            if (void 0 === this._legacyConfig && (this._legacyConfig = s.isLegacyResourceCalendarFormat(n2.resource_calendars)), this._legacyConfig) {
              for (var a2 in i2) if (i2[a2][e2]) {
                r2 = i2[a2][e2];
                break;
              }
            } else r2 = i2[e2];
            if (r2) return this.getCalendar(r2);
          }
          return this.getCalendar();
        }, getTaskCalendar: function(t2) {
          var e2, n2 = this.$gantt;
          if (null === t2 || void 0 === t2) return this.getCalendar();
          if (!(e2 = "number" != typeof t2 && "string" != typeof t2 || !n2.isTaskExists(t2) ? t2 : n2.getTask(t2))) return this.getCalendar();
          var i2 = this._getOwnCalendar(e2), r2 = !!n2.getState().group_mode;
          if (!i2 && n2.config.inherit_calendar && n2.isTaskExists(e2.parent)) {
            for (var a2 = e2; n2.isTaskExists(a2.parent) && (a2 = n2.getTask(a2.parent), !n2.isSummaryTask(a2) || !(i2 = this._getOwnCalendar(a2))); ) ;
            r2 && !i2 && t2.$effective_calendar && (i2 = this.getCalendar(t2.$effective_calendar));
          }
          return i2 || this.getCalendar();
        }, addCalendar: function(t2) {
          if (!this.isCalendar(t2)) {
            var e2 = t2.id;
            (t2 = this.createCalendar(t2)).id = e2;
          }
          if (t2._tryChangeCalendarSettings(function() {
          })) {
            var n2 = this.$gantt.config;
            return t2.id = t2.id || i.uid(), this._calendars[t2.id] = t2, n2.worktimes || (n2.worktimes = {}), n2.worktimes[t2.id] = t2.getConfig(), t2.id;
          }
          return this.$gantt.callEvent("onCalendarError", [{ message: "Invalid calendar settings, no worktime available" }, t2]), null;
        }, deleteCalendar: function(t2) {
          var e2 = this.$gantt.config;
          return !!t2 && (!!this._calendars[t2] && (delete this._calendars[t2], e2.worktimes && e2.worktimes[t2] && delete e2.worktimes[t2], true));
        }, restoreConfigCalendars: function(t2) {
          for (var e2 in t2) if (!this._calendars[e2]) {
            var n2 = t2[e2], i2 = this.createCalendar(n2);
            i2.id = e2, this.addCalendar(i2);
          }
        }, defaults: { global: { id: "global", worktime: { hours: [8, 12, 13, 17], days: [0, 1, 1, 1, 1, 1, 0] } }, fulltime: { id: "fulltime", worktime: { hours: [0, 24], days: [1, 1, 1, 1, 1, 1, 1] } } }, createDefaultCalendars: function() {
          var t2 = this.$gantt.config;
          this.restoreConfigCalendars(this.defaults), this.restoreConfigCalendars(t2.worktimes);
        }, isCalendar: function(t2) {
          return [t2.isWorkTime, t2.setWorkTime, t2.getWorkHours, t2.unsetWorkTime, t2.getClosestWorkTime, t2.calculateDuration, t2.hasDuration, t2.calculateEndDate].every(function(t3) {
            return t3 instanceof Function;
          });
        } }, t.exports = c;
      }, function(t, e, n) {
        var i = n(0);
        function r() {
        }
        r.prototype = { _getIntervals: function(t2) {
          for (var e2 = [], n2 = 0; n2 < t2.length; n2 += 2) e2.push({ start: t2[n2], end: t2[n2 + 1] });
          return e2;
        }, _toHoursArray: function(t2) {
          var e2 = [];
          function n2(t3) {
            var e3 = Math.floor(t3 / 3600), n3 = t3 - 60 * e3 * 60;
            return e3 + ":" + function(t4) {
              var e4 = String(t4);
              return e4.length < 2 && (e4 = "0" + e4), e4;
            }(Math.floor(n3 / 60));
          }
          for (var i2 = 0; i2 < t2.length; i2++) e2.push(n2(t2[i2].start) + "-" + n2(t2[i2].end));
          return e2;
        }, _intersectHourRanges: function(t2, e2) {
          var n2 = [], i2 = t2.length > e2.length ? t2 : e2, r2 = t2 === i2 ? e2 : t2;
          i2 = i2.slice(), r2 = r2.slice();
          n2 = [];
          for (var a = 0; a < i2.length; a++) for (var o = i2[a], s = 0; s < r2.length; s++) {
            var l = r2[s];
            l.start < o.end && l.end > o.start && (n2.push({ start: Math.max(o.start, l.start), end: Math.min(o.end, l.end) }), o.end > l.end && (r2.splice(s, 1), s--, a--));
          }
          return n2;
        }, _mergeAdjacentIntervals: function(t2) {
          var e2 = t2.slice();
          e2.sort(function(t3, e3) {
            return t3.start - e3.start;
          });
          for (var n2 = e2[0], i2 = 1; i2 < e2.length; i2++) {
            var r2 = e2[i2];
            r2.start <= n2.end ? (r2.end > n2.end && (n2.end = r2.end), e2.splice(i2, 1), i2--) : n2 = r2;
          }
          return e2;
        }, _mergeHoursConfig: function(t2, e2) {
          return this._mergeAdjacentIntervals(this._intersectHourRanges(t2, e2));
        }, merge: function(t2, e2) {
          var n2 = i.copy(t2.getConfig().parsed), r2 = i.copy(e2.getConfig().parsed), a = { hours: this._toHoursArray(this._mergeHoursConfig(n2.hours, r2.hours)), dates: {}, customWeeks: {} };
          for (var o in n2.dates) {
            var s = n2.dates[o], l = r2.dates[o];
            if (s && l) if (Array.isArray(s) || Array.isArray(l)) {
              var c = Array.isArray(s) ? s : n2.hours, u = Array.isArray(l) ? l : r2.hours;
              a.dates[o] = this._toHoursArray(this._mergeHoursConfig(c, u));
            } else a.dates[o] = true;
            else a.dates[o] = false;
          }
          if (n2.customWeeks) for (var o in n2.customWeeks) a.customWeeks[o] = n2.customWeeks[o];
          if (r2.customWeeks) for (var o in r2.customWeeks) a.customWeeks[o] = r2.customWeeks[o];
          return a;
        } }, t.exports = r;
      }, function(t, e, n) {
        var i = n(40).createCacheObject, r = n(40).LargerUnitsCache, a = n(0), o = n(148).DateDurationCache;
        function s(t2, e2) {
          this.argumentsHelper = e2, this.$gantt = t2, this._workingUnitsCache = i(), this._largeUnitsCache = new r(this), this._dateDurationCache = new o(), this._worktime = null, this._cached_timestamps = {}, this._cached_timestamps_count = 0;
        }
        s.prototype = { units: ["year", "month", "week", "day", "hour", "minute"], _clearCaches: function() {
          this._workingUnitsCache.clear(), this._largeUnitsCache.clear(), this._dateDurationCache.clear();
        }, _getUnitOrder: function(t2) {
          for (var e2 = 0, n2 = this.units.length; e2 < n2; e2++) if (this.units[e2] == t2) return e2;
        }, _resetTimestampCache: function() {
          this._cached_timestamps = {}, this._cached_timestamps_count = 0;
        }, _timestamp: function(t2) {
          this._cached_timestamps_count > 1e6 && this._resetTimestampCache();
          var e2 = null;
          if (t2.day || 0 === t2.day) e2 = t2.day;
          else if (t2.date) {
            var n2 = String(t2.date.valueOf());
            this._cached_timestamps[n2] ? e2 = this._cached_timestamps[n2] : (e2 = Date.UTC(t2.date.getFullYear(), t2.date.getMonth(), t2.date.getDate()), this._cached_timestamps[n2] = e2, this._cached_timestamps_count++);
          }
          return e2;
        }, _checkIfWorkingUnit: function(t2, e2) {
          if (!this["_is_work_" + e2]) {
            var n2 = this.$gantt.date["".concat(e2, "_start")](new Date(t2)), i2 = this.$gantt.date.add(n2, 1, e2);
            return this.hasDuration(n2, i2);
          }
          return this["_is_work_" + e2](t2);
        }, _is_work_day: function(t2) {
          var e2 = this._getWorkHours(t2);
          return !!Array.isArray(e2) && e2.length > 0;
        }, _is_work_hour: function(t2) {
          for (var e2 = this._getWorkHours(t2), n2 = t2.getHours(), i2 = 0; i2 < e2.length; i2++) if (n2 >= e2[i2].startHour && n2 < e2[i2].endHour) return true;
          return false;
        }, _getTimeOfDayStamp: function(t2, e2) {
          var n2 = t2.getHours();
          return t2.getHours() || t2.getMinutes() || !e2 || (n2 = 24), 60 * n2 * 60 + 60 * t2.getMinutes();
        }, _is_work_minute: function(t2) {
          for (var e2 = this._getWorkHours(t2), n2 = this._getTimeOfDayStamp(t2), i2 = 0; i2 < e2.length; i2++) if (n2 >= e2[i2].start && n2 < e2[i2].end) return true;
          return false;
        }, _nextDate: function(t2, e2, n2) {
          return this.$gantt.date.add(t2, n2, e2);
        }, _getWorkUnitsBetweenGeneric: function(t2, e2, n2, i2) {
          var r2 = this.$gantt.date, a2 = new Date(t2), o2 = new Date(e2);
          i2 = i2 || 1;
          var s2, l, c = 0, u = null, d = false;
          (s2 = r2[n2 + "_start"](new Date(a2))).valueOf() != a2.valueOf() && (d = true);
          var h = false;
          (l = r2[n2 + "_start"](new Date(e2))).valueOf() != e2.valueOf() && (h = true);
          for (var f = false; a2.valueOf() < o2.valueOf(); ) {
            if (f = (u = this._nextDate(a2, n2, i2)).valueOf() > o2.valueOf(), this._isWorkTime(a2, n2)) (d || h && f) && (s2 = r2[n2 + "_start"](new Date(a2)), l = r2.add(s2, i2, n2)), d ? (d = false, u = this._nextDate(s2, n2, i2), c += (l.valueOf() - a2.valueOf()) / (l.valueOf() - s2.valueOf())) : h && f ? (h = false, c += (o2.valueOf() - a2.valueOf()) / (l.valueOf() - s2.valueOf())) : c++;
            else {
              var _ = this._getUnitOrder(n2), g = this.units[_ - 1];
              g && !this._isWorkTime(a2, g) && (u = this._getClosestWorkTimeFuture(a2, g));
            }
            a2 = u;
          }
          return c;
        }, _getMinutesPerHour: function(t2) {
          var e2 = this._getTimeOfDayStamp(t2), n2 = this._getTimeOfDayStamp(this._nextDate(t2, "hour", 1));
          0 === n2 && (n2 = 86400);
          for (var i2 = this._getWorkHours(t2), r2 = 0; r2 < i2.length; r2++) {
            var a2 = i2[r2];
            if (e2 >= a2.start && n2 <= a2.end) return 60;
            if (e2 < a2.end && n2 > a2.start) return (Math.min(n2, a2.end) - Math.max(e2, a2.start)) / 60;
          }
          return 0;
        }, _getMinutesPerDay: function(t2) {
          var e2 = 0;
          return this._getWorkHours(t2).forEach(function(t3) {
            e2 += t3.durationMinutes;
          }), e2;
        }, getHoursPerDay: function(t2) {
          var e2 = 0;
          return this._getWorkHours(t2).forEach(function(t3) {
            e2 += t3.durationHours;
          }), e2;
        }, _getWorkUnitsForRange: function(t2, e2, n2, i2) {
          var r2, o2 = 0, s2 = new Date(t2), l = new Date(e2);
          for (r2 = "minute" == n2 ? a.bind(this._getMinutesPerDay, this) : a.bind(this.getHoursPerDay, this); s2.valueOf() < l.valueOf(); ) if (l - s2 > 27648e5 && 0 === s2.getDate()) {
            var c = this._largeUnitsCache.getMinutesPerMonth(s2);
            "hour" == n2 && (c /= 60), o2 += c, s2 = this.$gantt.date.add(s2, 1, "month");
          } else {
            if (l - s2 > 13824e5) {
              var u = this.$gantt.date.week_start(new Date(s2));
              if (s2.valueOf() === u.valueOf()) {
                c = this._largeUnitsCache.getMinutesPerWeek(s2);
                "hour" == n2 && (c /= 60), o2 += c, s2 = this.$gantt.date.add(s2, 7, "day");
                continue;
              }
            }
            o2 += r2(s2), s2 = this._nextDate(s2, "day", 1);
          }
          return o2 / i2;
        }, _getMinutesBetweenSingleDay: function(t2, e2) {
          for (var n2 = this._getIntervalTimestamp(t2, e2), i2 = this._getWorkHours(t2), r2 = 0, a2 = 0; a2 < i2.length; a2++) {
            var o2 = i2[a2];
            if (n2.end >= o2.start && n2.start <= o2.end) {
              var s2 = Math.max(o2.start, n2.start), l = Math.min(o2.end, n2.end);
              r2 += (l - s2) / 60, n2.start = l;
            }
          }
          return Math.floor(r2);
        }, _getMinutesBetween: function(t2, e2, n2, i2) {
          var r2 = new Date(t2), a2 = new Date(e2);
          i2 = i2 || 1;
          var o2 = new Date(r2), s2 = this.$gantt.date.add(this.$gantt.date.day_start(new Date(r2)), 1, "day");
          if (a2.valueOf() <= s2.valueOf()) return this._getMinutesBetweenSingleDay(t2, e2);
          var l = this.$gantt.date.day_start(new Date(a2)), c = a2, u = this._getMinutesBetweenSingleDay(o2, s2), d = this._getMinutesBetweenSingleDay(l, c);
          return u + this._getWorkUnitsForRange(s2, l, n2, i2) + d;
        }, _getHoursBetween: function(t2, e2, n2, i2) {
          var r2 = new Date(t2), a2 = new Date(e2);
          i2 = i2 || 1;
          var o2 = new Date(r2), s2 = this.$gantt.date.add(this.$gantt.date.day_start(new Date(r2)), 1, "day");
          if (a2.valueOf() <= s2.valueOf()) return Math.round(this._getMinutesBetweenSingleDay(t2, e2) / 60);
          var l = this.$gantt.date.day_start(new Date(a2)), c = a2, u = this._getMinutesBetweenSingleDay(o2, s2, n2, i2) / 60, d = this._getMinutesBetweenSingleDay(l, c, n2, i2) / 60, h = u + this._getWorkUnitsForRange(s2, l, n2, i2) + d;
          return Math.round(h);
        }, getConfig: function() {
          return this._worktime;
        }, _setConfig: function(t2) {
          this._worktime = t2, this._parseSettings(), this._clearCaches();
        }, _parseSettings: function() {
          var t2 = this.getConfig();
          for (var e2 in t2.parsed = { dates: {}, hours: null, haveCustomWeeks: false, customWeeks: {}, customWeeksRangeStart: null, customWeeksRangeEnd: null, customWeeksBoundaries: [] }, t2.parsed.hours = this._parseHours(t2.hours), t2.dates) t2.parsed.dates[e2] = this._parseHours(t2.dates[e2]);
          if (t2.customWeeks) {
            var n2 = null, i2 = null;
            for (var e2 in t2.customWeeks) {
              var r2 = t2.customWeeks[e2];
              if (r2.from && r2.to) {
                var a2 = r2.from, o2 = r2.to;
                (!n2 || n2 > a2.valueOf()) && (n2 = a2.valueOf()), (!i2 || i2 < o2.valueOf()) && (i2 = o2.valueOf()), t2.parsed.customWeeksBoundaries.push({ from: a2.valueOf(), fromReadable: new Date(a2), to: o2.valueOf(), toReadable: new Date(o2), name: e2 }), t2.parsed.haveCustomWeeks = true;
                var s2 = t2.parsed.customWeeks[e2] = { from: r2.from, to: r2.to, hours: this._parseHours(r2.hours), dates: {} };
                for (var l in r2.dates) s2.dates[l] = this._parseHours(r2.dates[l]);
              }
            }
            t2.parsed.customWeeksRangeStart = n2, t2.parsed.customWeeksRangeEnd = i2;
          }
        }, _tryChangeCalendarSettings: function(t2) {
          var e2 = JSON.stringify(this.getConfig());
          return t2(), !!this.hasWorkTime() || (this._setConfig(JSON.parse(e2)), this._clearCaches(), false);
        }, _arraysEqual: function(t2, e2) {
          if (t2 === e2) return true;
          if (!t2 || !e2) return false;
          if (t2.length != e2.length) return false;
          for (var n2 = 0; n2 < t2.length; ++n2) if (t2[n2] !== e2[n2]) return false;
          return true;
        }, _compareSettings: function(t2, e2) {
          if (!this._arraysEqual(t2.hours, e2.hours)) return false;
          var n2 = Object.keys(t2.dates), i2 = Object.keys(e2.dates);
          if (n2.sort(), i2.sort(), !this._arraysEqual(n2, i2)) return false;
          for (var r2 = 0; r2 < n2.length; r2++) {
            var a2 = n2[r2], o2 = t2.dates[a2], s2 = t2.dates[a2];
            if (o2 !== s2 && !(Array.isArray(o2) && Array.isArray(s2) && this._arraysEqual(o2, s2))) return false;
          }
          return true;
        }, equals: function(t2) {
          if (!(t2 instanceof s)) return false;
          var e2 = this.getConfig(), n2 = t2.getConfig();
          if (!this._compareSettings(e2, n2)) return false;
          if (e2.parsed.haveCustomWeeks && n2.parsed.haveCustomWeeks) {
            if (e2.parsed.customWeeksBoundaries.length != n2.parsed.customWeeksBoundaries.length) return false;
            for (var i2 in e2.parsed.customWeeks) {
              var r2 = e2.parsed.customWeeks[i2], a2 = n2.parsed.customWeeks[i2];
              if (!a2) return false;
              if (!this._compareSettings(r2, a2)) return false;
            }
          } else if (e2.parse.haveCustomWeeks !== n2.parsed.haveCustomWeeks) return false;
          return true;
        }, getWorkHours: function() {
          var t2 = this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper, arguments);
          return this._getWorkHours(t2.date, false);
        }, _getWorkHours: function(t2, e2) {
          var n2 = this.getConfig();
          if (false !== e2 && (n2 = n2.parsed), !t2) return n2.hours;
          var i2 = this._timestamp({ date: t2 });
          if (n2.haveCustomWeeks && n2.customWeeksRangeStart <= i2 && n2.customWeeksRangeEnd > i2) {
            for (var r2 = 0; r2 < n2.customWeeksBoundaries.length; r2++) if (n2.customWeeksBoundaries[r2].from <= i2 && n2.customWeeksBoundaries[r2].to > i2) {
              n2 = n2.customWeeks[n2.customWeeksBoundaries[r2].name];
              break;
            }
          }
          var a2 = true;
          return void 0 !== n2.dates[i2] ? a2 = n2.dates[i2] : void 0 !== n2.dates[t2.getDay()] && (a2 = n2.dates[t2.getDay()]), true === a2 ? n2.hours : a2 || [];
        }, _getIntervalTimestamp: function(t2, e2) {
          var n2 = { start: 0, end: 0 };
          n2.start = 60 * t2.getHours() * 60 + 60 * t2.getMinutes() + t2.getSeconds();
          var i2 = e2.getHours();
          return !i2 && !e2.getMinutes() && !e2.getSeconds() && t2.valueOf() < e2.valueOf() && (i2 = 24), n2.end = 60 * i2 * 60 + 60 * e2.getMinutes() + e2.getSeconds(), n2;
        }, _parseHours: function(t2) {
          if (Array.isArray(t2)) {
            var e2 = [];
            t2.forEach(function(t3) {
              "number" == typeof t3 ? e2.push(60 * t3 * 60) : "string" == typeof t3 && t3.split("-").map(function(t4) {
                return t4.trim();
              }).forEach(function(t4) {
                var n3 = t4.split(":").map(function(t5) {
                  return t5.trim();
                }), i3 = parseInt(60 * n3[0] * 60);
                n3[1] && (i3 += parseInt(60 * n3[1])), n3[2] && (i3 += parseInt(n3[2])), e2.push(i3);
              });
            });
            for (var n2 = [], i2 = 0; i2 < e2.length; i2 += 2) {
              var r2 = e2[i2], a2 = e2[i2 + 1], o2 = a2 - r2;
              n2.push({ start: r2, end: a2, startHour: Math.floor(r2 / 3600), startMinute: Math.floor(r2 / 60), endHour: Math.ceil(a2 / 3600), endMinute: Math.ceil(a2 / 60), durationSeconds: o2, durationMinutes: o2 / 60, durationHours: o2 / 3600 });
            }
            return n2;
          }
          return t2;
        }, setWorkTime: function(t2) {
          return this._tryChangeCalendarSettings(a.bind(function() {
            var e2 = void 0 === t2.hours || t2.hours, n2 = this._timestamp(t2), i2 = this.getConfig();
            if (null !== n2 ? i2.dates[n2] = e2 : t2.customWeeks || (i2.hours = e2), t2.customWeeks) for (var r2 in i2.customWeeks || (i2.customWeeks = {}), t2.customWeeks) i2.customWeeks[r2] = t2.customWeeks[r2];
            this._parseSettings(), this._clearCaches();
          }, this));
        }, unsetWorkTime: function(t2) {
          return this._tryChangeCalendarSettings(a.bind(function() {
            if (t2) {
              var e2 = this._timestamp(t2);
              null !== e2 && delete this.getConfig().dates[e2];
            } else this.reset_calendar();
            this._parseSettings(), this._clearCaches();
          }, this));
        }, _isWorkTime: function(t2, e2) {
          var n2 = -1, i2 = null;
          return i2 = String(t2.valueOf()), -1 == (n2 = this._workingUnitsCache.getItem(e2, i2, t2)) && (n2 = this._checkIfWorkingUnit(t2, e2), this._workingUnitsCache.setItem(e2, i2, n2, t2)), n2;
        }, isWorkTime: function() {
          var t2 = this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper, arguments);
          return this._isWorkTime(t2.date, t2.unit);
        }, calculateDuration: function() {
          var t2 = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
          if (!t2.unit) return false;
          var e2 = this;
          return this._dateDurationCache.getDuration(t2.start_date, t2.end_date, t2.unit, t2.step, function() {
            return e2._calculateDuration(t2.start_date, t2.end_date, t2.unit, t2.step);
          });
        }, _calculateDuration: function(t2, e2, n2, i2) {
          var r2 = 0, a2 = 1;
          if (t2.valueOf() > e2.valueOf()) {
            var o2 = e2;
            e2 = t2, t2 = o2, a2 = -1;
          }
          return r2 = "hour" == n2 && 1 == i2 ? this._getHoursBetween(t2, e2, n2, i2) : "minute" == n2 && 1 == i2 ? this._getMinutesBetween(t2, e2, n2, i2) : this._getWorkUnitsBetweenGeneric(t2, e2, n2, i2), a2 * Math.round(r2);
        }, hasDuration: function() {
          var t2 = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments), e2 = t2.start_date, n2 = t2.end_date, i2 = t2.unit, r2 = t2.step;
          if (!i2) return false;
          var a2 = new Date(e2), o2 = new Date(n2);
          for (r2 = r2 || 1; a2.valueOf() < o2.valueOf(); ) {
            if (this._isWorkTime(a2, i2)) return true;
            a2 = this._nextDate(a2, i2, r2);
          }
          return false;
        }, calculateEndDate: function() {
          var t2 = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments), e2 = t2.start_date, n2 = t2.duration, i2 = t2.unit, r2 = t2.step;
          if (!i2) return false;
          var a2 = t2.duration >= 0 ? 1 : -1;
          n2 = Math.abs(1 * n2);
          var o2 = this;
          return this._dateDurationCache.getEndDate(e2, n2, i2, r2 * a2, function() {
            return o2._calculateEndDate(e2, n2, i2, r2 * a2);
          });
        }, _calculateEndDate: function(t2, e2, n2, i2) {
          return !!n2 && (1 == i2 && "minute" == n2 ? this._calculateMinuteEndDate(t2, e2, i2) : -1 == i2 && "minute" == n2 ? this._subtractMinuteDate(t2, e2, i2) : 1 == i2 && "hour" == n2 ? this._calculateHourEndDate(t2, e2, i2) : this._addInterval(t2, e2, n2, i2, null).end);
        }, _addInterval: function(t2, e2, n2, i2, r2) {
          for (var a2 = 0, o2 = t2, s2 = false; a2 < e2 && (!r2 || !r2(o2)); ) {
            var l = this._nextDate(o2, n2, i2);
            "day" == n2 && (s2 = s2 || !o2.getHours() && l.getHours()) && (l.setHours(0), l.getHours() || (s2 = false));
            var c = new Date(l.valueOf() + 1);
            i2 > 0 && (c = new Date(l.valueOf() - 1)), this._isWorkTime(c, n2) && !s2 && a2++, o2 = l;
          }
          return { end: o2, start: t2, added: a2 };
        }, _addHoursUntilDayEnd: function(t2, e2) {
          for (var n2 = this.$gantt.date.add(this.$gantt.date.day_start(new Date(t2)), 1, "day"), i2 = 0, r2 = e2, a2 = this._getIntervalTimestamp(t2, n2), o2 = this._getWorkHours(t2), s2 = 0; s2 < o2.length && i2 < e2; s2++) {
            var l = o2[s2];
            if (a2.end >= l.start && a2.start <= l.end) {
              var c = Math.max(l.start, a2.start), u = Math.min(l.end, a2.end), d = (u - c) / 3600;
              d > r2 && (d = r2, u = c + 60 * r2 * 60);
              var h = Math.round((u - c) / 3600);
              i2 += h, r2 -= h, a2.start = u;
            }
          }
          var f = n2;
          return i2 === e2 && (f = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate(), 0, 0, a2.start)), { added: i2, end: f };
        }, _calculateHourEndDate: function(t2, e2, n2) {
          var i2 = new Date(t2), r2 = 0;
          n2 = n2 || 1, e2 = Math.abs(1 * e2);
          var a2 = this._addHoursUntilDayEnd(i2, e2);
          if (r2 = a2.added, i2 = a2.end, c = e2 - r2) {
            for (var o2 = i2; r2 < e2; ) {
              var s2 = this._nextDate(o2, "day", n2);
              s2.setHours(0), s2.setMinutes(0), s2.setSeconds(0);
              var l = 0;
              if (r2 + (l = n2 > 0 ? this.getHoursPerDay(new Date(s2.valueOf() - 1)) : this.getHoursPerDay(new Date(s2.valueOf() + 1))) >= e2) break;
              r2 += l, o2 = s2;
            }
            i2 = o2;
          }
          if (r2 < e2) {
            var c = e2 - r2;
            i2 = (a2 = this._addHoursUntilDayEnd(i2, c)).end;
          }
          return i2;
        }, _addMinutesUntilHourEnd: function(t2, e2) {
          if (0 === t2.getMinutes()) return { added: 0, end: new Date(t2) };
          for (var n2 = this.$gantt.date.add(this.$gantt.date.hour_start(new Date(t2)), 1, "hour"), i2 = 0, r2 = e2, a2 = this._getIntervalTimestamp(t2, n2), o2 = this._getWorkHours(t2), s2 = 0; s2 < o2.length && i2 < e2; s2++) {
            var l = o2[s2];
            if (a2.end >= l.start && a2.start <= l.end) {
              var c = Math.max(l.start, a2.start), u = Math.min(l.end, a2.end), d = (u - c) / 60;
              d > r2 && (d = r2, u = c + 60 * r2);
              var h = Math.round((u - c) / 60);
              r2 -= h, i2 += h, a2.start = u;
            }
          }
          var f = n2;
          return i2 === e2 && (f = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate(), 0, 0, a2.start)), { added: i2, end: f };
        }, _subtractMinutesUntilHourStart: function(t2, e2) {
          for (var n2 = this.$gantt.date.hour_start(new Date(t2)), i2 = 0, r2 = e2, a2 = 60 * n2.getHours() * 60 + 60 * n2.getMinutes() + n2.getSeconds(), o2 = 60 * t2.getHours() * 60 + 60 * t2.getMinutes() + t2.getSeconds(), s2 = this._getWorkHours(t2), l = s2.length - 1; l >= 0 && i2 < e2; l--) {
            var c = s2[l];
            if (o2 > c.start && a2 <= c.end) {
              var u = Math.min(o2, c.end), d = Math.max(a2, c.start), h = (u - d) / 60;
              h > r2 && (h = r2, d = u - 60 * r2);
              var f = Math.abs(Math.round((u - d) / 60));
              r2 -= f, i2 += f, o2 = d;
            }
          }
          var _ = n2;
          return i2 === e2 && (_ = new Date(t2.getFullYear(), t2.getMonth(), t2.getDate(), 0, 0, o2)), { added: i2, end: _ };
        }, _subtractMinuteDate: function(t2, e2, n2) {
          var i2 = new Date(t2), r2 = 0;
          n2 = n2 || -1, e2 = Math.abs(1 * e2), e2 = Math.round(e2);
          var a2 = this._subtractMinutesUntilHourStart(i2, e2);
          r2 += a2.added, i2 = a2.end;
          for (var o2 = 0, s2 = [], l = 0; r2 < e2; ) {
            var c = this.$gantt.date.day_start(new Date(i2)), u = false;
            i2.valueOf() === c.valueOf() && (c = this.$gantt.date.add(c, -1, "day"), u = true);
            var d = new Date(c.getFullYear(), c.getMonth(), c.getDate(), 23, 59, 59, 999).valueOf();
            d !== o2 && (s2 = this._getWorkHours(c), l = this._getMinutesPerDay(c), o2 = d);
            var h = e2 - r2, f = this._getTimeOfDayStamp(i2, u);
            if (s2.length && l) if (s2[s2.length - 1].end <= f && h > l) r2 += l, i2 = this.$gantt.date.add(i2, -1, "day");
            else {
              for (var _ = false, g = null, p = s2.length - 1; p >= 0; p--) if (s2[p].start < f - 1 && s2[p].end >= f - 1) {
                _ = true, g = s2[p];
                break;
              }
              if (_) if (f === g.end && h >= g.durationMinutes) r2 += g.durationMinutes, i2 = this.$gantt.date.add(i2, -g.durationMinutes, "minute");
              else if (h <= f / 60 - g.startMinute) r2 += h, i2 = this.$gantt.date.add(i2, -h, "minute");
              else {
                var v = this._getMinutesPerHour(i2);
                v <= h ? (r2 += v, i2 = this._nextDate(i2, "hour", n2)) : (r2 += (a2 = this._subtractMinutesUntilHourStart(i2, h)).added, i2 = a2.end);
              }
              else if (0 === i2.getHours() && 0 === i2.getMinutes() && 0 === i2.getSeconds()) {
                if ((m = this._getClosestWorkTimePast(i2, "hour")).valueOf() === i2.valueOf()) {
                  var m = this.$gantt.date.add(i2, -1, "day"), y = this._getWorkHours(m);
                  if (y.length) {
                    var k = y[y.length - 1];
                    m.setSeconds(k.durationSeconds);
                  }
                }
                i2 = m;
              } else i2 = this._getClosestWorkTimePast(new Date(i2 - 1), "hour");
            }
            else i2 = this.$gantt.date.add(i2, -1, "day");
          }
          if (r2 < e2) {
            var b = e2 - r2;
            r2 += (a2 = this._subtractMinutesUntilHourStart(i2, b)).added, i2 = a2.end;
          }
          return i2;
        }, _calculateMinuteEndDate: function(t2, e2, n2) {
          var i2 = new Date(t2), r2 = 0;
          n2 = n2 || 1, e2 = Math.abs(1 * e2), e2 = Math.round(e2);
          var a2 = this._addMinutesUntilHourEnd(i2, e2);
          r2 += a2.added, i2 = a2.end;
          for (var o2 = 0, s2 = [], l = 0; r2 < e2; ) {
            var c = this.$gantt.date.day_start(new Date(i2)).valueOf();
            c !== o2 && (s2 = this._getWorkHours(i2), l = this._getMinutesPerDay(i2), o2 = c);
            var u = e2 - r2, d = this._getTimeOfDayStamp(i2);
            if (s2.length && l) if (s2[0].start >= d && u >= l) {
              if (r2 += l, u == l) {
                i2 = new Date(i2.getFullYear(), i2.getMonth(), i2.getDate(), 0, 0, s2[s2.length - 1].end);
                break;
              }
              i2 = this.$gantt.date.add(i2, 1, "day"), i2 = this.$gantt.date.day_start(i2);
            } else {
              for (var h = false, f = null, _ = 0; _ < s2.length; _++) if (s2[_].start <= d && s2[_].end > d) {
                h = true, f = s2[_];
                break;
              }
              if (h) if (d === f.start && u >= f.durationMinutes) r2 += f.durationMinutes, i2 = this.$gantt.date.add(i2, f.durationMinutes, "minute");
              else if (u <= f.endMinute - d / 60) r2 += u, i2 = this.$gantt.date.add(i2, u, "minute");
              else {
                var g = this._getMinutesPerHour(i2);
                g <= u ? (r2 += g, i2 = this._nextDate(i2, "hour", n2)) : (r2 += (a2 = this._addMinutesUntilHourEnd(i2, u)).added, i2 = a2.end);
              }
              else i2 = this._getClosestWorkTimeFuture(i2, "hour");
            }
            else i2 = this.$gantt.date.add(this.$gantt.date.day_start(i2), 1, "day");
          }
          if (r2 < e2) {
            var p = e2 - r2;
            r2 += (a2 = this._addMinutesUntilHourEnd(i2, p)).added, i2 = a2.end;
          }
          return i2;
        }, getClosestWorkTime: function() {
          var t2 = this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments);
          return this._getClosestWorkTime(t2.date, t2.unit, t2.dir);
        }, _getClosestWorkTime: function(t2, e2, n2) {
          var i2 = new Date(t2);
          if (this._isWorkTime(i2, e2)) return i2;
          if (i2 = this.$gantt.date[e2 + "_start"](i2), "any" != n2 && n2) i2 = "past" == n2 ? this._getClosestWorkTimePast(i2, e2) : this._getClosestWorkTimeFuture(i2, e2);
          else {
            var r2 = this._getClosestWorkTimeFuture(i2, e2), a2 = this._getClosestWorkTimePast(i2, e2);
            i2 = Math.abs(r2 - t2) <= Math.abs(t2 - a2) ? r2 : a2;
          }
          return i2;
        }, _getClosestWorkTimeFuture: function(t2, e2) {
          return this._getClosestWorkTimeGeneric(t2, e2, 1);
        }, _getClosestWorkTimePast: function(t2, e2) {
          var n2 = this._getClosestWorkTimeGeneric(t2, e2, -1);
          return this.$gantt.date.add(n2, 1, e2);
        }, _findClosestTimeInDay: function(t2, e2, n2) {
          var i2 = new Date(t2), r2 = null, a2 = false;
          this._getWorkHours(i2).length || (i2 = this._getClosestWorkTime(i2, "day", e2 < 0 ? "past" : "future"), e2 < 0 && (i2 = new Date(i2.valueOf() - 1), a2 = true), n2 = this._getWorkHours(i2));
          var o2 = this._getTimeOfDayStamp(i2);
          if (a2 && (o2 = this._getTimeOfDayStamp(new Date(i2.valueOf() + 1), a2)), e2 > 0) {
            for (var s2 = 0; s2 < n2.length; s2++) if (n2[s2].start >= o2) {
              r2 = new Date(i2.getFullYear(), i2.getMonth(), i2.getDate(), 0, 0, n2[s2].start);
              break;
            }
          } else for (s2 = n2.length - 1; s2 >= 0; s2--) {
            if (n2[s2].end <= o2) {
              r2 = new Date(i2.getFullYear(), i2.getMonth(), i2.getDate(), 0, 0, n2[s2].end);
              break;
            }
            if (n2[s2].end > o2 && n2[s2].start <= o2) {
              r2 = new Date(i2.getFullYear(), i2.getMonth(), i2.getDate(), 0, 0, o2);
              break;
            }
          }
          return r2;
        }, _getClosestWorkMinute: function(t2, e2, n2) {
          var i2 = new Date(t2), r2 = this._getWorkHours(i2), a2 = this._findClosestTimeInDay(i2, n2, r2);
          return a2 || (i2 = this.calculateEndDate(i2, n2, "day"), n2 > 0 ? i2 = this.$gantt.date.day_start(i2) : (i2 = this.$gantt.date.day_start(i2), i2 = this.$gantt.date.add(i2, 1, "day"), i2 = new Date(i2.valueOf() - 1)), r2 = this._getWorkHours(i2), a2 = this._findClosestTimeInDay(i2, n2, r2)), n2 < 0 && (a2 = this.$gantt.date.add(a2, -1, e2)), a2;
        }, _getClosestWorkTimeGeneric: function(t2, e2, n2) {
          if ("hour" === e2 || "minute" === e2) return this._getClosestWorkMinute(t2, e2, n2);
          for (var i2 = this._getUnitOrder(e2), r2 = this.units[i2 - 1], a2 = t2, o2 = 0; !this._isWorkTime(a2, e2) && (!r2 || this._isWorkTime(a2, r2) || (a2 = n2 > 0 ? this._getClosestWorkTimeFuture(a2, r2) : this._getClosestWorkTimePast(a2, r2), !this._isWorkTime(a2, e2))); ) {
            if (++o2 > 3e3) return this.$gantt.assert(false, "Invalid working time check"), false;
            var s2 = a2.getTimezoneOffset();
            a2 = this.$gantt.date.add(a2, n2, e2), a2 = this.$gantt._correct_dst_change(a2, s2, n2, e2), this.$gantt.date[e2 + "_start"] && (a2 = this.$gantt.date[e2 + "_start"](a2));
          }
          return a2;
        }, hasWorkTime: function() {
          var t2 = this.getConfig(), e2 = t2.dates, n2 = [];
          for (var i2 in t2.dates) Number(i2) > 6 && n2.push(Number(i2));
          var r2 = this._checkWorkHours(t2.hours), a2 = false;
          return [0, 1, 2, 3, 4, 5, 6].forEach((function(t3) {
            if (!a2) {
              var n3 = e2[t3];
              true === n3 ? a2 = r2 : Array.isArray(n3) && (a2 = this._checkWorkHours(n3));
            }
          }).bind(this)), a2;
        }, _checkWorkHours: function(t2) {
          if (0 === t2.length) return false;
          for (var e2 = false, n2 = 0; n2 < t2.length; n2 += 2) t2[n2] !== t2[n2 + 1] && (e2 = true);
          return e2;
        } }, t.exports = s;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.WorkUnitsMapCache = void 0;
        var i = function() {
          function t2() {
            this.clear();
          }
          return t2.prototype.getItem = function(t3, e2, n2) {
            if (this._cache.has(t3)) {
              var i2 = this._cache.get(t3)[n2.getFullYear()];
              if (i2 && i2.has(e2)) return i2.get(e2);
            }
            return -1;
          }, t2.prototype.setItem = function(t3, e2, n2, i2) {
            if (t3 && e2) {
              var r, a = this._cache, o = i2.getFullYear();
              a.has(t3) ? r = a.get(t3) : (r = [], a.set(t3, r));
              var s = r[o];
              s || (s = r[o] = /* @__PURE__ */ new Map()), s.set(e2, n2);
            }
          }, t2.prototype.clear = function() {
            this._cache = /* @__PURE__ */ new Map();
          }, t2;
        }();
        e.WorkUnitsMapCache = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.WorkUnitsObjectCache = void 0;
        var i = function() {
          function t2() {
            this.clear();
          }
          return t2.prototype.getItem = function(t3, e2, n2) {
            var i2 = this._cache;
            if (i2 && i2[t3]) {
              var r = i2[t3];
              if (void 0 === r) return -1;
              var a = r[n2.getFullYear()];
              if (a && void 0 !== a[e2]) return a[e2];
            }
            return -1;
          }, t2.prototype.setItem = function(t3, e2, n2, i2) {
            if (t3 && e2) {
              var r = this._cache;
              if (r) {
                r[t3] || (r[t3] = []);
                var a = r[t3], o = i2.getFullYear(), s = a[o];
                s || (s = a[o] = {}), s[e2] = n2;
              }
            }
          }, t2.prototype.clear = function() {
            this._cache = {};
          }, t2;
        }();
        e.WorkUnitsObjectCache = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.LargerUnitsCache = void 0;
        var i = /* @__PURE__ */ function() {
          return function(t2) {
            var e2 = this;
            this.getMinutesPerWeek = function(t3) {
              var n2 = t3.valueOf();
              if (e2._weekCache.has(n2)) return e2._weekCache.get(n2);
              for (var i2 = e2._calendar, r = e2._calendar.$gantt, a = 0, o = r.date.week_start(new Date(t3)), s = 0; s < 7; s++) a += 60 * i2.getHoursPerDay(o), o = r.date.add(o, 1, "day");
              return e2._weekCache.set(n2, a), a;
            }, this.getMinutesPerMonth = function(t3) {
              var n2 = t3.valueOf();
              if (e2._monthCache.has(n2)) return e2._monthCache.get(n2);
              for (var i2 = e2._calendar, r = e2._calendar.$gantt, a = 0, o = r.date.week_start(new Date(t3)), s = r.date.add(o, 1, "month").valueOf(); o.valueOf() < s; ) a += 60 * i2.getHoursPerDay(o), o = r.date.add(o, 1, "day");
              return e2._monthCache.set(n2, a), a;
            }, this.clear = function() {
              e2._weekCache = /* @__PURE__ */ new Map(), e2._monthCache = /* @__PURE__ */ new Map();
            }, this.clear(), this._calendar = t2;
          };
        }();
        e.LargerUnitsCache = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.DateDurationCache = void 0;
        var i = function() {
          function t2() {
            this.clear();
          }
          return t2.prototype._getCacheObject = function(t3, e2, n2) {
            var i2 = this._cache;
            i2[e2] || (i2[e2] = []);
            var r = i2[e2];
            r || (r = i2[e2] = {});
            var a = r[n2];
            a || (a = r[n2] = {});
            var o = t3.getFullYear(), s = a[o];
            return s || (s = a[o] = { durations: {}, endDates: {} }), s;
          }, t2.prototype._endDateCacheKey = function(t3, e2) {
            return String(t3) + "-" + String(e2);
          }, t2.prototype._durationCacheKey = function(t3, e2) {
            return String(t3) + "-" + String(e2);
          }, t2.prototype.getEndDate = function(t3, e2, n2, i2, r) {
            var a, o = this._getCacheObject(t3, n2, i2), s = t3.valueOf(), l = this._endDateCacheKey(s, e2);
            if (void 0 === o.endDates[l]) {
              var c = r(), u = c.valueOf();
              o.endDates[l] = u, o.durations[this._durationCacheKey(s, u)] = e2, a = c;
            } else a = new Date(o.endDates[l]);
            return a;
          }, t2.prototype.getDuration = function(t3, e2, n2, i2, r) {
            var a, o = this._getCacheObject(t3, n2, i2), s = t3.valueOf(), l = e2.valueOf(), c = this._durationCacheKey(s, l);
            if (void 0 === o.durations[c]) {
              var u = r();
              o.durations[c] = u.valueOf(), a = u;
            } else a = o.durations[c];
            return a;
          }, t2.prototype.clear = function() {
            this._cache = {};
          }, t2;
        }();
        e.DateDurationCache = i;
      }, function(t, e) {
        function n(t2) {
          "@babel/helpers - typeof";
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        t.exports = { isLegacyResourceCalendarFormat: function(t2) {
          if (!t2) return false;
          for (var e2 in t2) if (t2[e2] && "object" === n(t2[e2])) return true;
          return false;
        }, getResourceProperty: function(t2) {
          var e2 = t2.resource_calendars, n2 = t2.resource_property;
          if (this.isLegacyResourceCalendarFormat(e2)) for (var i in t2) {
            n2 = i;
            break;
          }
          return n2;
        }, getCalendarIdFromLegacyConfig: function(t2, e2) {
          if (e2) for (var n2 in e2) {
            var i = e2[n2];
            if (t2[n2]) {
              var r = i[t2[n2]];
              if (r) return r;
            }
          }
          return null;
        } };
      }, function(t, e) {
        t.exports = function() {
          var t2 = {};
          return { getCalendarIdFromMultipleResources: function(e2, n) {
            var i = function(t3) {
              return t3.map(function(t4) {
                return t4 && t4.resource_id ? t4.resource_id : t4;
              }).sort().join("-");
            }(e2);
            if (e2.length) {
              if (1 === e2.length) return n.getResourceCalendar(i).id;
              if (t2[i]) return t2[i].id;
              var r = function(t3, e3) {
                return e3.mergeCalendars(t3.map(function(t4) {
                  var n2 = t4 && t4.resource_id ? t4.resource_id : t4;
                  return e3.getResourceCalendar(n2);
                }));
              }(e2, n);
              return t2[i] = r, n.addCalendar(r);
            }
            return null;
          } };
        };
      }, function(t, e, n) {
        var i = n(39), r = n(152);
        function a(t2) {
          this.$gantt = t2.$gantt, this.argumentsHelper = i(this.$gantt), this.calendarManager = t2, this.$disabledCalendar = new r(this.$gantt, this.argumentsHelper);
        }
        a.prototype = { _getCalendar: function(t2) {
          var e2;
          if (this.$gantt.config.work_time) {
            var n2 = this.calendarManager;
            t2.task ? e2 = n2.getTaskCalendar(t2.task) : t2.id ? e2 = n2.getTaskCalendar(t2) : t2.calendar && (e2 = t2.calendar), e2 || (e2 = n2.getTaskCalendar());
          } else e2 = this.$disabledCalendar;
          return e2;
        }, getWorkHours: function(t2) {
          return t2 = this.argumentsHelper.getWorkHoursArguments.apply(this.argumentsHelper, arguments), this._getCalendar(t2).getWorkHours(t2.date);
        }, setWorkTime: function(t2, e2) {
          return t2 = this.argumentsHelper.setWorkTimeArguments.apply(this.argumentsHelper, arguments), e2 || (e2 = this.calendarManager.getCalendar()), e2.setWorkTime(t2);
        }, unsetWorkTime: function(t2, e2) {
          return t2 = this.argumentsHelper.unsetWorkTimeArguments.apply(this.argumentsHelper, arguments), e2 || (e2 = this.calendarManager.getCalendar()), e2.unsetWorkTime(t2);
        }, isWorkTime: function(t2, e2, n2, i2) {
          var r2 = this.argumentsHelper.isWorkTimeArguments.apply(this.argumentsHelper, arguments);
          return this._getCalendar(r2).isWorkTime(r2);
        }, getClosestWorkTime: function(t2) {
          return t2 = this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments), this._getCalendar(t2).getClosestWorkTime(t2);
        }, calculateDuration: function() {
          var t2 = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments);
          return this._getCalendar(t2).calculateDuration(t2);
        }, hasDuration: function() {
          var t2 = this.argumentsHelper.hasDurationArguments.apply(this.argumentsHelper, arguments);
          return this._getCalendar(t2).hasDuration(t2);
        }, calculateEndDate: function(t2) {
          t2 = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments);
          return this._getCalendar(t2).calculateEndDate(t2);
        } }, t.exports = a;
      }, function(t, e) {
        function n(t2, e2) {
          this.argumentsHelper = e2, this.$gantt = t2;
        }
        n.prototype = { getWorkHours: function() {
          return [0, 24];
        }, setWorkTime: function() {
          return true;
        }, unsetWorkTime: function() {
          return true;
        }, isWorkTime: function() {
          return true;
        }, getClosestWorkTime: function(t2) {
          return this.argumentsHelper.getClosestWorkTimeArguments.apply(this.argumentsHelper, arguments).date;
        }, calculateDuration: function() {
          var t2 = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments), e2 = t2.start_date, n2 = t2.end_date, i = t2.unit, r = t2.step;
          return this._calculateDuration(e2, n2, i, r);
        }, _calculateDuration: function(t2, e2, n2, i) {
          var r = this.$gantt.date, a = { week: 6048e5, day: 864e5, hour: 36e5, minute: 6e4 }, o = 0;
          if (a[n2]) o = Math.round((e2 - t2) / (i * a[n2]));
          else {
            for (var s = new Date(t2), l = new Date(e2); s.valueOf() < l.valueOf(); ) o += 1, s = r.add(s, i, n2);
            s.valueOf() != e2.valueOf() && (o += (l - s) / (r.add(s, i, n2) - s));
          }
          return Math.round(o);
        }, hasDuration: function() {
          var t2 = this.argumentsHelper.getDurationArguments.apply(this.argumentsHelper, arguments), e2 = t2.start_date, n2 = t2.end_date;
          return !!t2.unit && (e2 = new Date(e2), n2 = new Date(n2), e2.valueOf() < n2.valueOf());
        }, hasWorkTime: function() {
          return true;
        }, equals: function(t2) {
          return t2 instanceof n;
        }, calculateEndDate: function() {
          var t2 = this.argumentsHelper.calculateEndDateArguments.apply(this.argumentsHelper, arguments), e2 = t2.start_date, n2 = t2.duration, i = t2.unit, r = t2.step;
          return this.$gantt.date.add(e2, r * n2, i);
        } }, t.exports = n;
      }, function(t, e, n) {
        var i = n(0);
        t.exports = { create: function(t2, e2) {
          return { getWorkHours: function(t3) {
            return e2.getWorkHours(t3);
          }, setWorkTime: function(t3) {
            return e2.setWorkTime(t3);
          }, unsetWorkTime: function(t3) {
            e2.unsetWorkTime(t3);
          }, isWorkTime: function(t3, n2, i2) {
            return e2.isWorkTime(t3, n2, i2);
          }, getClosestWorkTime: function(t3) {
            return e2.getClosestWorkTime(t3);
          }, calculateDuration: function(t3, n2, i2) {
            return e2.calculateDuration(t3, n2, i2);
          }, _hasDuration: function(t3, n2, i2) {
            return e2.hasDuration(t3, n2, i2);
          }, calculateEndDate: function(t3, n2, i2, r) {
            return e2.calculateEndDate(t3, n2, i2, r);
          }, mergeCalendars: i.bind(t2.mergeCalendars, t2), createCalendar: i.bind(t2.createCalendar, t2), addCalendar: i.bind(t2.addCalendar, t2), getCalendar: i.bind(t2.getCalendar, t2), getCalendars: i.bind(t2.getCalendars, t2), getResourceCalendar: i.bind(t2.getResourceCalendar, t2), getTaskCalendar: i.bind(t2.getTaskCalendar, t2), deleteCalendar: i.bind(t2.deleteCalendar, t2) };
        } };
      }, function(t, e, n) {
        var i = n(2);
        t.exports = function(t2) {
          t2.isUnscheduledTask = function(e3) {
            return t2.assert(e3 && e3 instanceof Object, "Invalid argument <b>task</b>=" + e3 + " of gantt.isUnscheduledTask. Task object was expected"), !!e3.unscheduled || !e3.start_date;
          }, t2._isAllowedUnscheduledTask = function(e3) {
            return !(!e3.unscheduled || !t2.config.show_unscheduled);
          }, t2._isTaskInTimelineLimits = function(t3) {
            var e3 = t3.start_date ? t3.start_date.valueOf() : null, n3 = t3.end_date ? t3.end_date.valueOf() : null;
            return !!(e3 && n3 && e3 <= this._max_date.valueOf() && n3 >= this._min_date.valueOf());
          }, t2.isTaskVisible = function(t3) {
            if (!this.isTaskExists(t3)) return false;
            var e3 = this.getTask(t3);
            return !(!this._isAllowedUnscheduledTask(e3) && !this._isTaskInTimelineLimits(e3)) && !!(this.getGlobalTaskIndex(t3) >= 0);
          }, t2._getProjectEnd = function() {
            if (t2.config.project_end) return t2.config.project_end;
            var e3 = t2.getTaskByTime();
            return (e3 = e3.sort(function(t3, e4) {
              return +t3.end_date > +e4.end_date ? 1 : -1;
            })).length ? e3[e3.length - 1].end_date : null;
          }, t2._getProjectStart = function() {
            if (t2.config.project_start) return t2.config.project_start;
            if (t2.config.start_date) return t2.config.start_date;
            if (t2.getState().min_date) return t2.getState().min_date;
            var e3 = t2.getTaskByTime();
            return (e3 = e3.sort(function(t3, e4) {
              return +t3.start_date > +e4.start_date ? 1 : -1;
            })).length ? e3[0].start_date : null;
          };
          var e2 = function(e3, n3) {
            var i2 = !!(n3 && n3 != t2.config.root_id && t2.isTaskExists(n3)) && t2.getTask(n3), r2 = null;
            if (i2) r2 = t2.config.schedule_from_end ? t2.calculateEndDate({ start_date: i2.end_date, duration: -t2.config.duration_step, task: e3 }) : i2.start_date;
            else if (t2.config.schedule_from_end) r2 = t2.calculateEndDate({ start_date: t2._getProjectEnd(), duration: -t2.config.duration_step, task: e3 });
            else {
              var a2 = t2.getTaskByIndex(0);
              r2 = a2 ? a2.start_date ? a2.start_date : a2.end_date ? t2.calculateEndDate({ start_date: a2.end_date, duration: -t2.config.duration_step, task: e3 }) : null : t2.config.start_date || t2.getState().min_date;
            }
            return t2.assert(r2, "Invalid dates"), new Date(r2);
          };
          t2._set_default_task_timing = function(n3) {
            n3.start_date = n3.start_date || e2(n3, t2.getParent(n3)), n3.duration = n3.duration || t2.config.duration_step, n3.end_date = n3.end_date || t2.calculateEndDate(n3);
          }, t2.createTask = function(n3, i2, r2) {
            (n3 = n3 || {}, t2.defined(n3.id) || (n3.id = t2.uid()), n3.start_date || (n3.start_date = e2(n3, i2)), void 0 === n3.text && (n3.text = t2.locale.labels.new_task), void 0 === n3.duration && (n3.duration = 1), this.isTaskExists(i2)) && (this.setParent(n3, i2, true), this.getTask(i2).$open = true);
            if (!this.callEvent("onTaskCreated", [n3])) return null;
            if (this.config.details_on_create) {
              if (t2.isTaskExists(n3.id)) t2.getTask(n3.id).$index != n3.$index && (n3.start_date && "string" == typeof n3.start_date && (n3.start_date = this.date.parseDate(n3.start_date, "parse_date")), n3.end_date && "string" == typeof n3.end_date && (n3.end_date = this.date.parseDate(n3.end_date, "parse_date")), this.$data.tasksStore.updateItem(n3.id, n3));
              else n3.$new = true, this.silent(function() {
                t2.$data.tasksStore.addItem(n3, r2);
              });
              this.selectTask(n3.id), this.refreshData(), this.showLightbox(n3.id);
            } else this.addTask(n3, i2, r2) && (this.showTask(n3.id), this.selectTask(n3.id));
            return n3.id;
          }, t2._update_flags = function(e3, n3) {
            var i2 = t2.$data.tasksStore;
            void 0 === e3 ? (this._lightbox_id = null, i2.silent(function() {
              i2.unselect();
            }), this.getSelectedTasks && this._multiselect.reset(), this._tasks_dnd && this._tasks_dnd.drag && (this._tasks_dnd.drag.id = null)) : (this._lightbox_id == e3 && (this._lightbox_id = n3), i2.getSelectedId() == e3 && i2.silent(function() {
              i2.unselect(e3), i2.select(n3);
            }), this._tasks_dnd && this._tasks_dnd.drag && this._tasks_dnd.drag.id == e3 && (this._tasks_dnd.drag.id = n3));
          };
          var n2 = function(e3, n3) {
            var i2 = t2.getTaskType(e3.type), r2 = { type: i2, $no_start: false, $no_end: false };
            return n3 || i2 != e3.$rendered_type ? (i2 == t2.config.types.project ? r2.$no_end = r2.$no_start = true : i2 != t2.config.types.milestone && (r2.$no_end = !(e3.end_date || e3.duration), r2.$no_start = !e3.start_date, t2._isAllowedUnscheduledTask(e3) && (r2.$no_end = r2.$no_start = false)), r2) : (r2.$no_start = e3.$no_start, r2.$no_end = e3.$no_end, r2);
          };
          function r(e3) {
            e3.$effective_calendar = t2.getTaskCalendar(e3).id, e3.start_date = t2.getClosestWorkTime({ dir: "future", date: e3.start_date, unit: t2.config.duration_unit, task: e3 }), e3.end_date = t2.calculateEndDate(e3);
          }
          function a(e3) {
            var n3 = null, i2 = null, r2 = void 0 !== e3 ? e3 : t2.config.root_id, a2 = [];
            return t2.eachTask(function(e4) {
              t2.getTaskType(e4.type) == t2.config.types.project || t2.isUnscheduledTask(e4) || (e4.rollup && a2.push(e4.id), e4.start_date && !e4.$no_start && (!n3 || n3 > e4.start_date.valueOf()) && (n3 = e4.start_date.valueOf()), e4.end_date && !e4.$no_end && (!i2 || i2 < e4.end_date.valueOf()) && (i2 = e4.end_date.valueOf()));
            }, r2), { start_date: n3 ? new Date(n3) : null, end_date: i2 ? new Date(i2) : null, rollup: a2 };
          }
          t2._init_task_timing = function(t3) {
            var e3 = n2(t3, true), i2 = t3.$rendered_type != e3.type, a2 = e3.type;
            i2 && (t3.$no_start = e3.$no_start, t3.$no_end = e3.$no_end, t3.$rendered_type = e3.type), i2 && a2 != this.config.types.milestone && a2 == this.config.types.project && (this._set_default_task_timing(t3), t3.$calculate_duration = false), a2 == this.config.types.milestone && (t3.end_date = t3.start_date), t3.start_date && t3.end_date && false !== t3.$calculate_duration && (t3.duration = this.calculateDuration(t3)), t3.$calculate_duration || (t3.$calculate_duration = true), t3.end_date || (t3.end_date = t3.start_date), t3.duration = t3.duration || 0, 0 === this.config.min_duration && 0 === t3.duration && (t3.$no_end = false);
            var o = this.getTaskCalendar(t3);
            t3.$effective_calendar && t3.$effective_calendar !== o.id && (r(t3), this.config.inherit_calendar && this.isSummaryTask(t3) && this.eachTask(function(t4) {
              r(t4);
            }, t3.id)), t3.$effective_calendar = o.id;
          }, t2.isSummaryTask = function(e3) {
            t2.assert(e3 && e3 instanceof Object, "Invalid argument <b>task</b>=" + e3 + " of gantt.isSummaryTask. Task object was expected");
            var i2 = n2(e3);
            return !(!i2.$no_end && !i2.$no_start);
          }, t2.resetProjectDates = function(t3) {
            var i2 = n2(t3);
            if (i2.$no_end || i2.$no_start) {
              var r2 = a(t3.id);
              (function(t4, n3, i3, r3) {
                n3.$no_start && (t4.start_date = i3 ? new Date(i3) : e2(t4, this.getParent(t4)));
                n3.$no_end && (t4.end_date = r3 ? new Date(r3) : this.calculateEndDate({ start_date: t4.start_date, duration: this.config.duration_step, task: t4 }));
                (n3.$no_start || n3.$no_end) && this._init_task_timing(t4);
              }).call(this, t3, i2, r2.start_date, r2.end_date), t3.$rollup = r2.rollup;
            }
          }, t2.getSubtaskDuration = function(e3) {
            var n3 = 0, i2 = void 0 !== e3 ? e3 : t2.config.root_id;
            return this.eachTask(function(e4) {
              this.getTaskType(e4.type) == t2.config.types.project || this.isUnscheduledTask(e4) || (n3 += e4.duration);
            }, i2), n3;
          }, t2.getSubtaskDates = function(t3) {
            var e3 = a(t3);
            return { start_date: e3.start_date, end_date: e3.end_date };
          }, t2._update_parents = function(e3, i2, r2) {
            if (e3) {
              var a2 = this.getTask(e3);
              a2.rollup && (r2 = true);
              var o = this.getParent(a2), s = n2(a2), l = true;
              if (r2 || a2.start_date && a2.end_date && (s.$no_start || s.$no_end)) {
                var c = a2.start_date.valueOf(), u = a2.end_date.valueOf();
                t2.resetProjectDates(a2), r2 || c != a2.start_date.valueOf() || u != a2.end_date.valueOf() || (l = false), l && !i2 && this.refreshTask(a2.id, true);
              }
              l && o && this.isTaskExists(o) && this._update_parents(o, i2, r2);
            }
          }, t2.roundDate = function(e3) {
            var n3 = t2.getScale();
            i.isDate(e3) && (e3 = { date: e3, unit: n3 ? n3.unit : t2.config.duration_unit, step: n3 ? n3.step : t2.config.duration_step });
            var r2, a2, o, s = e3.date, l = e3.step, c = e3.unit;
            if (!n3) return s;
            if (c == n3.unit && l == n3.step && +s >= +n3.min_date && +s <= +n3.max_date) o = Math.floor(t2.columnIndexByDate(s)), n3.trace_x[o] || (o -= 1, n3.rtl && (o = 0)), a2 = new Date(n3.trace_x[o]), r2 = t2.date.add(a2, l, c);
            else {
              for (o = Math.floor(t2.columnIndexByDate(s)), r2 = t2.date[c + "_start"](new Date(n3.min_date)), n3.trace_x[o] && (r2 = t2.date[c + "_start"](n3.trace_x[o])); +r2 < +s; ) {
                var u = (r2 = t2.date[c + "_start"](t2.date.add(r2, l, c))).getTimezoneOffset();
                r2 = t2._correct_dst_change(r2, u, r2, c), t2.date[c + "_start"] && (r2 = t2.date[c + "_start"](r2));
              }
              a2 = t2.date.add(r2, -1 * l, c);
            }
            return e3.dir && "future" == e3.dir ? r2 : e3.dir && "past" == e3.dir ? a2 : Math.abs(s - a2) < Math.abs(r2 - s) ? a2 : r2;
          }, t2.correctTaskWorkTime = function(e3) {
            t2.config.work_time && t2.config.correct_work_time && (this.isWorkTime(e3.start_date, void 0, e3) ? this.isWorkTime(new Date(+e3.end_date - 1), void 0, e3) || (e3.end_date = this.calculateEndDate(e3)) : (e3.start_date = this.getClosestWorkTime({ date: e3.start_date, dir: "future", task: e3 }), e3.end_date = this.calculateEndDate(e3)));
          }, t2.attachEvent("onBeforeTaskUpdate", function(e3, n3) {
            return t2._init_task_timing(n3), true;
          }), t2.attachEvent("onBeforeTaskAdd", function(e3, n3) {
            return t2._init_task_timing(n3), true;
          }), t2.attachEvent("onAfterTaskMove", function(e3, n3, i2) {
            return t2._init_task_timing(t2.getTask(e3)), true;
          });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.default = function() {
        };
      }, function(t, e) {
        function n(t2) {
          "@babel/helpers - typeof";
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        t.exports = function(t2) {
          t2.getTaskType = function(e2) {
            var i = e2;
            for (var r in e2 && "object" == n(e2) && (i = e2.type), this.config.types) if (this.config.types[r] == i) return i;
            return t2.config.types.task;
          };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          function e2() {
            return t2._cached_functions.update_if_changed(t2), t2._cached_functions.active || t2._cached_functions.activate(), true;
          }
          t2._cached_functions = { cache: {}, mode: false, critical_path_mode: false, wrap_methods: function(t3, e3) {
            if (e3._prefetch_originals) for (var n2 in e3._prefetch_originals) e3[n2] = e3._prefetch_originals[n2];
            e3._prefetch_originals = {};
            for (n2 = 0; n2 < t3.length; n2++) this.prefetch(t3[n2], e3);
          }, prefetch: function(t3, e3) {
            var n2 = e3[t3];
            if (n2) {
              var i = this;
              e3._prefetch_originals[t3] = n2, e3[t3] = function() {
                for (var e4 = new Array(arguments.length), r = 0, a = arguments.length; r < a; r++) e4[r] = arguments[r];
                if (i.active) {
                  var o = i.get_arguments_hash(Array.prototype.slice.call(e4));
                  i.cache[t3] || (i.cache[t3] = {});
                  var s = i.cache[t3];
                  if (i.has_cached_value(s, o)) return i.get_cached_value(s, o);
                  var l = n2.apply(this, e4);
                  return i.cache_value(s, o, l), l;
                }
                return n2.apply(this, e4);
              };
            }
            return n2;
          }, cache_value: function(t3, e3, n2) {
            this.is_date(n2) && (n2 = new Date(n2)), t3[e3] = n2;
          }, has_cached_value: function(t3, e3) {
            return t3.hasOwnProperty(e3);
          }, get_cached_value: function(t3, e3) {
            var n2 = t3[e3];
            return this.is_date(n2) && (n2 = new Date(n2)), n2;
          }, is_date: function(t3) {
            return t3 && t3.getUTCDate;
          }, get_arguments_hash: function(t3) {
            for (var e3 = [], n2 = 0; n2 < t3.length; n2++) e3.push(this.stringify_argument(t3[n2]));
            return "(" + e3.join(";") + ")";
          }, stringify_argument: function(t3) {
            return (t3.id ? t3.id : this.is_date(t3) ? t3.valueOf() : t3) + "";
          }, activate: function() {
            this.clear(), this.active = true;
          }, deactivate: function() {
            this.clear(), this.active = false;
          }, clear: function() {
            this.cache = {};
          }, setup: function(t3) {
            var e3 = [], n2 = ["_isProjectEnd", "_getProjectEnd", "_getSlack"];
            "auto" == this.mode ? t3.config.highlight_critical_path && (e3 = n2) : true === this.mode && (e3 = n2), this.wrap_methods(e3, t3);
          }, update_if_changed: function(t3) {
            (this.critical_path_mode != t3.config.highlight_critical_path || this.mode !== t3.config.optimize_render) && (this.critical_path_mode = t3.config.highlight_critical_path, this.mode = t3.config.optimize_render, this.setup(t3));
          } }, t2.attachEvent("onBeforeGanttRender", e2), t2.attachEvent("onBeforeDataRender", e2), t2.attachEvent("onBeforeSmartRender", function() {
            e2();
          }), t2.attachEvent("onBeforeParse", e2), t2.attachEvent("onDataRender", function() {
            t2._cached_functions.deactivate();
          });
          var n = null;
          t2.attachEvent("onSmartRender", function() {
            n && clearTimeout(n), n = setTimeout(function() {
              t2._cached_functions.deactivate();
            }, 1e3);
          }), t2.attachEvent("onBeforeGanttReady", function() {
            return t2._cached_functions.update_if_changed(t2), true;
          });
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(1), a = n(2), o = n(10), s = n(159);
        t.exports = function(t2) {
          var e2 = n(35);
          t2.assert = n(160)(t2);
          var l = "Invalid value of the first argument of `gantt.init`. Supported values: HTMLElement, String (element id).This error means that either invalid object is passed into `gantt.init` or that the element with the specified ID doesn't exist on the page when `gantt.init` is called.";
          function c(e3) {
            if (!e3 || "string" == typeof e3 && document.getElementById(e3)) return true;
            if (function(t3) {
              try {
                t3.cloneNode(false);
              } catch (t4) {
                return false;
              }
              return true;
            }(e3)) return true;
            throw t2.assert(false, l), new Error(l);
          }
          t2.init = function(e3, n2, i2) {
            t2.env.isNode ? e3 = null : c(e3), n2 && i2 && (this.config.start_date = this._min_date = new Date(n2), this.config.end_date = this._max_date = new Date(i2)), this.date.init(), this.init = function(e4) {
              t2.env.isNode ? e4 = null : c(e4), this.$container && this.$container.parentNode && (this.$container.parentNode.removeChild(this.$container), this.$container = null), this.$layout && this.$layout.clear(), this._reinit(e4);
            }, this._reinit(e3);
          }, t2._quickRefresh = function(t3) {
            for (var e3 = this._getDatastores.call(this), n2 = 0; n2 < e3.length; n2++) e3[n2]._quick_refresh = true;
            t3();
            for (n2 = 0; n2 < e3.length; n2++) e3[n2]._quick_refresh = false;
          };
          var u = (function() {
            this._clearTaskLayers && this._clearTaskLayers(), this._clearLinkLayers && this._clearLinkLayers(), this.$layout && (this.$layout.destructor(), this.$layout = null, this.$ui.reset());
          }).bind(t2), d = (function() {
            o(t2) || (this.$root.innerHTML = "", this.$root.gantt = this, e2(this), this.config.layout.id = "main", this.$layout = this.$ui.createView("layout", this.$root, this.config.layout), this.$layout.attachEvent("onBeforeResize", function() {
              for (var e3 = t2.$services.getService("datastores"), n2 = 0; n2 < e3.length; n2++) t2.getDatastore(e3[n2]).filter(), t2.getDatastore(e3[n2]).callEvent("onBeforeRefreshAll", []);
            }), this.$layout.attachEvent("onResize", function() {
              t2._quickRefresh(function() {
                t2.refreshData();
              });
            }), this.callEvent("onGanttLayoutReady", []), this.$layout.render(), this.$container = this.$layout.$container.firstChild, s(this));
          }).bind(t2);
          t2.resetLayout = function() {
            u(), d(), this.render();
          }, t2._reinit = function(t3) {
            this.callEvent("onBeforeGanttReady", []), this._update_flags(), this.$services.getService("templateLoader").initTemplates(this), u(), this.$root = null, t3 && (this.$root = r.toNode(t3), d(), this.$mouseEvents.reset(this.$root)), this.callEvent("onTemplatesReady", []), this.callEvent("onGanttReady", []), this.render();
          }, t2.$click = { buttons: { edit: function(e3) {
            t2.isReadonly(t2.getTask(e3)) || t2.showLightbox(e3);
          }, delete: function(e3) {
            var n2 = t2.getTask(e3);
            if (!t2.isReadonly(n2)) {
              var i2 = t2.locale.labels.confirm_deleting, r2 = t2.locale.labels.confirm_deleting_title;
              t2._dhtmlx_confirm(i2, r2, function() {
                t2.isTaskExists(e3) ? (n2.$new ? (t2.silent(function() {
                  t2.deleteTask(e3, true);
                }), t2.refreshData()) : t2.deleteTask(e3), t2.hideLightbox()) : t2.hideLightbox();
              });
            }
          } } }, t2.render = function() {
            var n2;
            if (this.callEvent("onBeforeGanttRender", []), !o(t2)) {
              !this.config.sort && this._sort && (this._sort = void 0), this.$root && (this.config.rtl ? (this.$root.classList.add("gantt_rtl"), this.$root.firstChild.classList.add("gantt_rtl")) : (this.$root.classList.remove("gantt_rtl"), this.$root.firstChild.classList.remove("gantt_rtl")));
              var i2 = this.getScrollState(), r2 = i2 ? i2.x : 0;
              if (this._getHorizontalScrollbar()) r2 = this._getHorizontalScrollbar().$config.codeScrollLeft || r2 || 0;
              n2 = null, r2 && (n2 = t2.dateFromPos(r2 + this.config.task_scroll_offset));
            }
            if (e2(this), o(t2)) t2.refreshData();
            else {
              this.$layout.$config.autosize = this.config.autosize;
              var a2 = this.config.preserve_scroll;
              if (this.config.preserve_scroll = false, this.$layout.resize(), this.config.preserve_scroll = a2, this.config.preserve_scroll && i2) {
                if (r2 || i2.y) {
                  var s2 = t2.getScrollState();
                  if (+n2 != +t2.dateFromPos(s2.x) || s2.y != i2.y) {
                    r2 = null;
                    var l2 = null;
                    if (n2) r2 = Math.max(t2.posFromDate(n2) - t2.config.task_scroll_offset, 0);
                    i2.y && (l2 = i2.y), t2.scrollTo(r2, l2);
                  }
                }
                var c2 = t2.$ui.getView("grid");
                if (c2) {
                  var u2 = c2.$config.scrollY, d2 = t2.$ui.getView(u2);
                  if (d2) t2.utils.dom.isChildOf(d2.$view, t2.$container) || c2.scrollTo(void 0, 0);
                }
              }
            }
            this.callEvent("onGanttRender", []);
          }, t2.setSizes = t2.render, t2.getTaskRowNode = function(t3) {
            for (var e3 = this.$grid_data.childNodes, n2 = this.config.task_attribute, i2 = 0; i2 < e3.length; i2++) {
              if (e3[i2].getAttribute) {
                if (e3[i2].getAttribute(n2) == t3) return e3[i2];
              }
            }
            return null;
          }, t2.changeLightboxType = function(e3) {
            if (this.getLightboxType() == e3) return true;
            t2._silent_redraw_lightbox(e3);
          }, t2._get_link_type = function(e3, n2) {
            var i2 = null;
            return e3 && n2 ? i2 = t2.config.links.start_to_start : !e3 && n2 ? i2 = t2.config.links.finish_to_start : e3 || n2 ? e3 && !n2 && (i2 = t2.config.links.start_to_finish) : i2 = t2.config.links.finish_to_finish, i2;
          }, t2.isLinkAllowed = function(t3, e3, n2, r2) {
            var a2 = null;
            if (!(a2 = "object" == i(t3) ? t3 : { source: t3, target: e3, type: this._get_link_type(n2, r2) })) return false;
            if (!(a2.source && a2.target && a2.type)) return false;
            if (a2.source == a2.target) return false;
            var o2 = true;
            return this.checkEvent("onLinkValidation") && (o2 = this.callEvent("onLinkValidation", [a2])), o2;
          }, t2._correct_dst_change = function(e3, n2, i2, r2) {
            var o2 = a.getSecondsInUnit(r2) * i2;
            if (o2 > 3600 && o2 < 86400) {
              var s2 = e3.getTimezoneOffset() - n2;
              s2 && (e3 = t2.date.add(e3, s2, "minute"));
            }
            return e3;
          }, t2.isSplitTask = function(e3) {
            return t2.assert(e3 && e3 instanceof Object, "Invalid argument <b>task</b>=" + e3 + " of gantt.isSplitTask. Task object was expected"), this.$data.tasksStore._isSplitItem(e3);
          }, t2._is_icon_open_click = function(t3) {
            if (!t3) return false;
            var e3 = t3.target || t3.srcElement;
            if (!e3 || !e3.className) return false;
            var n2 = r.getClassName(e3);
            return -1 !== n2.indexOf("gantt_tree_icon") && (-1 !== n2.indexOf("gantt_close") || -1 !== n2.indexOf("gantt_open"));
          };
        };
      }, function(t, e) {
        function n(t2, e2) {
          var n2, i = t2.config.container_resize_timeout || 20;
          if ("timeout" == t2.config.container_resize_method) s();
          else try {
            t2.event(e2, "resize", function() {
              t2.$scrollbarRepaint ? t2.$scrollbarRepaint = null : r();
            });
          } catch (t3) {
            s();
          }
          function r() {
            clearTimeout(n2), n2 = setTimeout(function() {
              t2.$destroyed || t2.render();
            }, i);
          }
          var a = t2.$root.offsetHeight, o = t2.$root.offsetWidth;
          function s() {
            t2.$root.offsetHeight == a && t2.$root.offsetWidth == o || r(), a = t2.$root.offsetHeight, o = t2.$root.offsetWidth, setTimeout(s, i);
          }
        }
        t.exports = function(t2) {
          "static" == window.getComputedStyle(t2.$root).getPropertyValue("position") && (t2.$root.style.position = "relative");
          var e2 = document.createElement("iframe");
          e2.className = "gantt_container_resize_watcher", e2.tabIndex = -1, t2.config.wai_aria_attributes && (e2.setAttribute("role", "none"), e2.setAttribute("aria-hidden", true)), (!!window.Sfdc || !!window.$A || window.Aura) && (t2.config.container_resize_method = "timeout"), t2.$root.appendChild(e2), e2.contentWindow ? n(t2, e2.contentWindow) : (t2.$root.removeChild(e2), n(t2, window));
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return function(e2, n) {
            e2 || t2.config.show_errors && false !== t2.callEvent("onError", [n]) && (t2.message ? t2.message({ type: "error", text: n, expire: -1 }) : console.log(n));
          };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.destructor = function() {
            for (var t3 in this.clearAll(), this.callEvent("onDestroy", []), this.$root && delete this.$root.gantt, this._eventRemoveAll && this._eventRemoveAll(), this.$layout && this.$layout.destructor(), this.resetLightbox && this.resetLightbox(), this._dp && this._dp.destructor && this._dp.destructor(), this.$services.destructor(), this.detachAllEvents(), this) 0 === t3.indexOf("$") && delete this[t3];
            this.$destroyed = true;
          };
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true }), e.default = function() {
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(164), r = n(165), a = n(166), o = n(167), s = n(168), l = n(169), c = n(170), u = n(171), d = n(172), h = n(173), f = n(174), _ = n(175), g = n(176), p = n(177), v = n(178), m = n(179), y = n(180), k = n(181), b = n(182), w = n(183), x = n(184), $ = n(185), S = n(186), T = n(187), C = n(188), E = n(189), D = n(190), M = n(191), A = n(192), I = n(193), N = n(194), P = n(195), L = n(196);
        e.default = function() {
          return new x.default({ en: d.default, ar: i.default, be: r.default, ca: a.default, cn: o.default, cs: s.default, da: l.default, de: c.default, el: u.default, es: h.default, fa: f.default, fi: _.default, fr: g.default, he: p.default, hr: v.default, hu: m.default, id: y.default, it: k.default, jp: b.default, kr: w.default, nb: $.default, nl: S.default, no: T.default, pl: C.default, pt: E.default, ro: D.default, ru: M.default, si: A.default, sk: I.default, sv: N.default, tr: P.default, ua: L.default });
        };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["كانون الثاني", "شباط", "آذار", "نيسان", "أيار", "حزيران", "تموز", "آب", "أيلول", "تشرين الأول", "تشرين الثاني", "كانون الأول"], month_short: ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"], day_full: ["الأحد", "الأثنين", "ألثلاثاء", "الأربعاء", "ألحميس", "ألجمعة", "السبت"], day_short: ["احد", "اثنين", "ثلاثاء", "اربعاء", "خميس", "جمعة", "سبت"] }, labels: { new_task: "مهمة جديد", icon_save: "اخزن", icon_cancel: "الغاء", icon_details: "تفاصيل", icon_edit: "تحرير", icon_delete: "حذف", confirm_closing: "التغييرات سوف تضيع, هل انت متأكد؟", confirm_deleting: "الحدث سيتم حذفها نهائيا ، هل أنت متأكد؟", section_description: "الوصف", section_time: "الفترة الزمنية", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "الغاء", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Студзень", "Люты", "Сакавік", "Красавік", "Maй", "Чэрвень", "Ліпень", "Жнівень", "Верасень", "Кастрычнік", "Лістапад", "Снежань"], month_short: ["Студз", "Лют", "Сак", "Крас", "Maй", "Чэр", "Ліп", "Жнів", "Вер", "Каст", "Ліст", "Снеж"], day_full: ["Нядзеля", "Панядзелак", "Аўторак", "Серада", "Чацвер", "Пятніца", "Субота"], day_short: ["Нд", "Пн", "Аўт", "Ср", "Чцв", "Пт", "Сб"] }, labels: { new_task: "Новае заданне", icon_save: "Захаваць", icon_cancel: "Адмяніць", icon_details: "Дэталі", icon_edit: "Змяніць", icon_delete: "Выдаліць", confirm_closing: "", confirm_deleting: "Падзея будзе выдалена незваротна, працягнуць?", section_description: "Апісанне", section_time: "Перыяд часу", section_type: "Тып", column_wbs: "ІСР", column_text: "Задача", column_start_date: "Пачатак", column_duration: "Працяг", column_add: "", link: "Сувязь", confirm_link_deleting: "будзе выдалена", link_start: "(пачатак)", link_end: "(канец)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Хвiлiна", hours: "Гадзiна", days: "Дзень", weeks: "Тыдзень", months: "Месяц", years: "Год", message_ok: "OK", message_cancel: "Адмяніць", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Gener", "Febrer", "Març", "Abril", "Maig", "Juny", "Juliol", "Agost", "Setembre", "Octubre", "Novembre", "Desembre"], month_short: ["Gen", "Feb", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Oct", "Nov", "Des"], day_full: ["Diumenge", "Dilluns", "Dimarts", "Dimecres", "Dijous", "Divendres", "Dissabte"], day_short: ["Dg", "Dl", "Dm", "Dc", "Dj", "Dv", "Ds"] }, labels: { new_task: "Nova tasca", icon_save: "Guardar", icon_cancel: "Cancel·lar", icon_details: "Detalls", icon_edit: "Editar", icon_delete: "Esborrar", confirm_closing: "", confirm_deleting: "L'esdeveniment s'esborrarà definitivament, continuar ?", section_description: "Descripció", section_time: "Periode de temps", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Cancel·lar", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["一月", "二月", "三月", "四月", "五月", "六月", "七月", "八月", "九月", "十月", "十一月", "十二月"], month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], day_full: ["星期日", "星期一", "星期二", "星期三", "星期四", "星期五", "星期六"], day_short: ["日", "一", "二", "三", "四", "五", "六"] }, labels: { new_task: "新任務", icon_save: "保存", icon_cancel: "关闭", icon_details: "详细", icon_edit: "编辑", icon_delete: "删除", confirm_closing: "请确认是否撤销修改!", confirm_deleting: "是否删除日程?", section_description: "描述", section_time: "时间范围", section_type: "类型", column_wbs: "工作分解结构", column_text: "任务名", column_start_date: "开始时间", column_duration: "持续时间", column_add: "", link: "关联", confirm_link_deleting: "将被删除", link_start: " (开始)", link_end: " (结束)", type_task: "任务", type_project: "项目", type_milestone: "里程碑", minutes: "分钟", hours: "小时", days: "天", weeks: "周", months: "月", years: "年", message_ok: "OK", message_cancel: "关闭", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Leden", "Únor", "Březen", "Duben", "Květen", "Červen", "Červenec", "Srpen", "Září", "Říjen", "Listopad", "Prosinec"], month_short: ["Led", "Ún", "Bře", "Dub", "Kvě", "Čer", "Čec", "Srp", "Září", "Říj", "List", "Pro"], day_full: ["Neděle", "Pondělí", "Úterý", "Středa", "Čtvrtek", "Pátek", "Sobota"], day_short: ["Ne", "Po", "Út", "St", "Čt", "Pá", "So"] }, labels: { new_task: "Nová práce", icon_save: "Uložit", icon_cancel: "Zpět", icon_details: "Detail", icon_edit: "Edituj", icon_delete: "Smazat", confirm_closing: "", confirm_deleting: "Událost bude trvale smazána, opravdu?", section_description: "Poznámky", section_time: "Doba platnosti", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Zpět", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januar", "Februar", "Marts", "April", "Maj", "Juni", "Juli", "August", "September", "Oktober", "November", "December"], month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"] }, labels: { new_task: "Ny opgave", icon_save: "Gem", icon_cancel: "Fortryd", icon_details: "Detaljer", icon_edit: "Tilret", icon_delete: "Slet", confirm_closing: "Dine rettelser vil gå tabt.. Er dy sikker?", confirm_deleting: "Bigivenheden vil blive slettet permanent. Er du sikker?", section_description: "Beskrivelse", section_time: "Tidsperiode", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Fortryd", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: [" Januar", " Februar", " März ", " April", " Mai", " Juni", " Juli", " August", " September ", " Oktober", " November ", " Dezember"], month_short: ["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"], day_full: ["Sonntag", "Montag", "Dienstag", " Mittwoch", " Donnerstag", "Freitag", "Samstag"], day_short: ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"] }, labels: { new_task: "Neue Aufgabe", icon_save: "Speichern", icon_cancel: "Abbrechen", icon_details: "Details", icon_edit: "Ändern", icon_delete: "Löschen", confirm_closing: "", confirm_deleting: "Der Eintrag wird gelöscht", section_description: "Beschreibung", section_time: "Zeitspanne", section_type: "Type", column_wbs: "PSP", column_text: "Task-Namen", column_start_date: "Startzeit", column_duration: "Dauer", column_add: "", link: "Link", confirm_link_deleting: "werden gelöscht", link_start: "(starten)", link_end: "(ende)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minuten", hours: "Stunden", days: "Tage", weeks: "Wochen", months: "Monate", years: "Jahre", message_ok: "OK", message_cancel: "Abbrechen", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Ιανουάριος", "Φεβρουάριος", "Μάρτιος", "Απρίλιος", "Μάϊος", "Ιούνιος", "Ιούλιος", "Αύγουστος", "Σεπτέμβριος", "Οκτώβριος", "Νοέμβριος", "Δεκέμβριος"], month_short: ["ΙΑΝ", "ΦΕΒ", "ΜΑΡ", "ΑΠΡ", "ΜΑΙ", "ΙΟΥΝ", "ΙΟΥΛ", "ΑΥΓ", "ΣΕΠ", "ΟΚΤ", "ΝΟΕ", "ΔΕΚ"], day_full: ["Κυριακή", "Δευτέρα", "Τρίτη", "Τετάρτη", "Πέμπτη", "Παρασκευή", "Κυριακή"], day_short: ["ΚΥ", "ΔΕ", "ΤΡ", "ΤΕ", "ΠΕ", "ΠΑ", "ΣΑ"] }, labels: { new_task: "Νέα εργασία", icon_save: "Αποθήκευση", icon_cancel: "Άκυρο", icon_details: "Λεπτομέρειες", icon_edit: "Επεξεργασία", icon_delete: "Διαγραφή", confirm_closing: "", confirm_deleting: "Το έργο θα διαγραφεί οριστικά. Θέλετε να συνεχίσετε;", section_description: "Περιγραφή", section_time: "Χρονική περίοδος", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Άκυρο", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"], month_short: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"], day_full: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"], day_short: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"] }, labels: { new_task: "New task", icon_save: "Save", icon_cancel: "Cancel", icon_details: "Details", icon_edit: "Edit", icon_delete: "Delete", confirm_closing: "", confirm_deleting: "Task will be deleted permanently, are you sure?", section_description: "Description", section_time: "Time period", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Cancel", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"], month_short: ["Ene", "Feb", "Mar", "Abr", "May", "Jun", "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"], day_full: ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"], day_short: ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"] }, labels: { new_task: "Nueva tarea", icon_save: "Guardar", icon_cancel: "Cancelar", icon_details: "Detalles", icon_edit: "Editar", icon_delete: "Eliminar", confirm_closing: "", confirm_deleting: "El evento se borrará definitivamente, ¿continuar?", section_description: "Descripción", section_time: "Período", section_type: "Tipo", column_wbs: "EDT", column_text: "Tarea", column_start_date: "Inicio", column_duration: "Duración", column_add: "", link: "Enlace", confirm_link_deleting: "será borrada", link_start: " (inicio)", link_end: " (fin)", type_task: "Tarea", type_project: "Proyecto", type_milestone: "Hito", minutes: "Minutos", hours: "Horas", days: "Días", weeks: "Semanas", months: "Meses", years: "Años", message_ok: "OK", message_cancel: "Cancelar", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["ژانویه", "فوریه", "مارس", "آوریل", "مه", "ژوئن", "ژوئیه", "اوت", "سپتامبر", "اکتبر", "نوامبر", "دسامبر"], month_short: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12"], day_full: ["يکشنبه", "دوشنبه", "سه‌شنبه", "چهارشنبه", "پنجشنبه", "جمعه", "شنبه"], day_short: ["ی", "د", "س", "چ", "پ", "ج", "ش"] }, labels: { new_task: "وظیفه جدید", icon_save: "ذخیره", icon_cancel: "لغو", icon_details: "جزییات", icon_edit: "ویرایش", icon_delete: "حذف", confirm_closing: "تغییرات شما ازدست خواهد رفت، آیا مطمئن هستید؟", confirm_deleting: "این مورد برای همیشه حذف خواهد شد، آیا مطمئن هستید؟", section_description: "توضیحات", section_time: "مدت زمان", section_type: "نوع", column_wbs: "WBS", column_text: "عنوان", column_start_date: "زمان شروع", column_duration: "مدت", column_add: "", link: "ارتباط", confirm_link_deleting: "حذف خواهد شد", link_start: " (آغاز)", link_end: " (پایان)", type_task: "وظیفه", type_project: "پروژه", type_milestone: "نگارش", minutes: "دقایق", hours: "ساعات", days: "روزها", weeks: "هفته", months: "ماه‌ها", years: "سال‌ها", message_ok: "تایید", message_cancel: "لغو", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Tammikuu", "Helmikuu", "Maaliskuu", "Huhtikuu", "Toukokuu", "Kes&auml;kuu", "Hein&auml;kuu", "Elokuu", "Syyskuu", "Lokakuu", "Marraskuu", "Joulukuu"], month_short: ["Tam", "Hel", "Maa", "Huh", "Tou", "Kes", "Hei", "Elo", "Syy", "Lok", "Mar", "Jou"], day_full: ["Sunnuntai", "Maanantai", "Tiistai", "Keskiviikko", "Torstai", "Perjantai", "Lauantai"], day_short: ["Su", "Ma", "Ti", "Ke", "To", "Pe", "La"] }, labels: { new_task: "Uusi tehtävä", icon_save: "Tallenna", icon_cancel: "Peru", icon_details: "Tiedot", icon_edit: "Muokkaa", icon_delete: "Poista", confirm_closing: "", confirm_deleting: "Haluatko varmasti poistaa tapahtuman?", section_description: "Kuvaus", section_time: "Aikajakso", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Peru", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Janvier", "Février", "Mars", "Avril", "Mai", "Juin", "Juillet", "Août", "Septembre", "Octobre", "Novembre", "Décembre"], month_short: ["Jan", "Fév", "Mar", "Avr", "Mai", "Juin", "Juil", "Aoû", "Sep", "Oct", "Nov", "Déc"], day_full: ["Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"], day_short: ["Dim", "Lun", "Mar", "Mer", "Jeu", "Ven", "Sam"] }, labels: { new_task: "Nouvelle tâche", icon_save: "Enregistrer", icon_cancel: "Annuler", icon_details: "Détails", icon_edit: "Modifier", icon_delete: "Effacer", confirm_closing: "", confirm_deleting: "L'événement sera effacé sans appel, êtes-vous sûr ?", section_description: "Description", section_time: "Période", section_type: "Type", column_wbs: "OTP", column_text: "Nom de la tâche", column_start_date: "Date initiale", column_duration: "Durée", column_add: "", link: "Le lien", confirm_link_deleting: "sera supprimé", link_start: "(début)", link_end: "(fin)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Heures", days: "Jours", weeks: "Semaines", months: "Mois", years: "Années", message_ok: "OK", message_cancel: "Annuler", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["ינואר", "פברואר", "מרץ", "אפריל", "מאי", "יוני", "יולי", "אוגוסט", "ספטמבר", "אוקטובר", "נובמבר", "דצמבר"], month_short: ["ינו", "פבר", "מרץ", "אפר", "מאי", "יונ", "יול", "אוג", "ספט", "אוק", "נוב", "דצמ"], day_full: ["ראשון", "שני", "שלישי", "רביעי", "חמישי", "שישי", "שבת"], day_short: ["א", "ב", "ג", "ד", "ה", "ו", "ש"] }, labels: { new_task: "משימה חדש", icon_save: "שמור", icon_cancel: "בטל", icon_details: "פרטים", icon_edit: "ערוך", icon_delete: "מחק", confirm_closing: "", confirm_deleting: "ארוע ימחק סופית.להמשיך?", section_description: "הסבר", section_time: "תקופה", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "בטל", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac"], month_short: ["Sij", "Velj", "Ožu", "Tra", "Svi", "Lip", "Srp", "Kol", "Ruj", "Lis", "Stu", "Pro"], day_full: ["Nedjelja", "Ponedjeljak", "Utorak", "Srijeda", "Četvrtak", "Petak", "Subota"], day_short: ["Ned", "Pon", "Uto", "Sri", "Čet", "Pet", "Sub"] }, labels: { new_task: "Novi Zadatak", icon_save: "Spremi", icon_cancel: "Odustani", icon_details: "Detalji", icon_edit: "Izmjeni", icon_delete: "Obriši", confirm_closing: "", confirm_deleting: "Zadatak će biti trajno izbrisan, jeste li sigurni?", section_description: "Opis", section_time: "Vremenski Period", section_type: "Tip", column_wbs: "WBS", column_text: "Naziv Zadatka", column_start_date: "Početno Vrijeme", column_duration: "Trajanje", column_add: "", link: "Poveznica", confirm_link_deleting: "će biti izbrisan", link_start: " (početak)", link_end: " (kraj)", type_task: "Zadatak", type_project: "Projekt", type_milestone: "Milestone", minutes: "Minute", hours: "Sati", days: "Dani", weeks: "Tjedni", months: "Mjeseci", years: "Godine", message_ok: "OK", message_cancel: "Odustani", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Január", "Február", "Március", "Április", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December"], month_short: ["Jan", "Feb", "Már", "Ápr", "Máj", "Jún", "Júl", "Aug", "Sep", "Okt", "Nov", "Dec"], day_full: ["Vasárnap", "Hétfõ", "Kedd", "Szerda", "Csütörtök", "Péntek", "szombat"], day_short: ["Va", "Hé", "Ke", "Sze", "Csü", "Pé", "Szo"] }, labels: { new_task: "Új feladat", icon_save: "Mentés", icon_cancel: "Mégse", icon_details: "Részletek", icon_edit: "Szerkesztés", icon_delete: "Törlés", confirm_closing: "", confirm_deleting: "Az esemény törölve lesz, biztosan folytatja?", section_description: "Leírás", section_time: "Idõszak", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Mégse", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember"], month_short: ["Jan", "Feb", "Mar", "Apr", "Mei", "Jun", "Jul", "Ags", "Sep", "Okt", "Nov", "Des"], day_full: ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"], day_short: ["Ming", "Sen", "Sel", "Rab", "Kam", "Jum", "Sab"] }, labels: { new_task: "Tugas baru", icon_save: "Simpan", icon_cancel: "Batal", icon_details: "Detail", icon_edit: "Edit", icon_delete: "Hapus", confirm_closing: "", confirm_deleting: "Acara akan dihapus", section_description: "Keterangan", section_time: "Periode", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Batal", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre"], month_short: ["Gen", "Feb", "Mar", "Apr", "Mag", "Giu", "Lug", "Ago", "Set", "Ott", "Nov", "Dic"], day_full: ["Domenica", "Lunedì", "Martedì", "Mercoledì", "Giovedì", "Venerdì", "Sabato"], day_short: ["Dom", "Lun", "Mar", "Mer", "Gio", "Ven", "Sab"] }, labels: { new_task: "Nuovo compito", icon_save: "Salva", icon_cancel: "Chiudi", icon_details: "Dettagli", icon_edit: "Modifica", icon_delete: "Elimina", confirm_closing: "", confirm_deleting: "Sei sicuro di confermare l'eliminazione?", section_description: "Descrizione", section_time: "Periodo di tempo", section_type: "Tipo", column_wbs: "WBS", column_text: "Nome Attività", column_start_date: "Inizio", column_duration: "Durata", column_add: "", link: "Link", confirm_link_deleting: "sarà eliminato", link_start: " (inizio)", link_end: " (fine)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minuti", hours: "Ore", days: "Giorni", weeks: "Settimane", months: "Mesi", years: "Anni", message_ok: "OK", message_cancel: "Chiudi", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], month_short: ["1月", "2月", "3月", "4月", "5月", "6月", "7月", "8月", "9月", "10月", "11月", "12月"], day_full: ["日曜日", "月曜日", "火曜日", "水曜日", "木曜日", "金曜日", "土曜日"], day_short: ["日", "月", "火", "水", "木", "金", "土"] }, labels: { new_task: "新しい仕事", icon_save: "保存", icon_cancel: "キャンセル", icon_details: "詳細", icon_edit: "編集", icon_delete: "削除", confirm_closing: "", confirm_deleting: "イベント完全に削除されます、宜しいですか？", section_description: "デスクリプション", section_time: "期間", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "キャンセル", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], month_short: ["1월", "2월", "3월", "4월", "5월", "6월", "7월", "8월", "9월", "10월", "11월", "12월"], day_full: ["일요일", "월요일", "화요일", "수요일", "목요일", "금요일", "토요일"], day_short: ["일", "월", "화", "수", "목", "금", "토"] }, labels: { new_task: "이름없는 작업", icon_save: "저장", icon_cancel: "취소", icon_details: "세부 사항", icon_edit: "수정", icon_delete: "삭제", confirm_closing: "", confirm_deleting: "작업을 삭제하시겠습니까?", section_description: "설명", section_time: "기간", section_type: "Type", column_wbs: "WBS", column_text: "작업명", column_start_date: "시작일", column_duration: "기간", column_add: "", link: "전제", confirm_link_deleting: "삭제 하시겠습니까?", link_start: " (start)", link_end: " (end)", type_task: "작업", type_project: "프로젝트", type_milestone: "마일스톤", minutes: "분", hours: "시간", days: "일", weeks: "주", months: "달", years: "년", message_ok: "OK", message_cancel: "취소", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = /* @__PURE__ */ function() {
          return function(t2) {
            var e2 = this;
            for (var n2 in this.addLocale = function(t3, n3) {
              e2._locales[t3] = n3;
            }, this.getLocale = function(t3) {
              return e2._locales[t3];
            }, this._locales = {}, t2) this._locales[n2] = t2[n2];
          };
        }();
        e.default = i;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], day_short: ["Søn", "Mon", "Tir", "Ons", "Tor", "Fre", "Lør"] }, labels: { new_task: "Ny oppgave", icon_save: "Lagre", icon_cancel: "Avbryt", icon_details: "Detaljer", icon_edit: "Rediger", icon_delete: "Slett", confirm_closing: "", confirm_deleting: "Hendelsen vil bli slettet permanent. Er du sikker?", section_description: "Beskrivelse", section_time: "Tidsperiode", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Avbryt", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December"], month_short: ["Jan", "Feb", "mrt", "Apr", "Mei", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], day_full: ["Zondag", "Maandag", "Dinsdag", "Woensdag", "Donderdag", "Vrijdag", "Zaterdag"], day_short: ["Zo", "Ma", "Di", "Wo", "Do", "Vr", "Za"] }, labels: { new_task: "Nieuwe taak", icon_save: "Opslaan", icon_cancel: "Annuleren", icon_details: "Details", icon_edit: "Bewerken", icon_delete: "Verwijderen", confirm_closing: "", confirm_deleting: "Item zal permanent worden verwijderd, doorgaan?", section_description: "Beschrijving", section_time: "Tijd periode", section_type: "Type", column_wbs: "WBS", column_text: "Taak omschrijving", column_start_date: "Startdatum", column_duration: "Duur", column_add: "", link: "Koppeling", confirm_link_deleting: "zal worden verwijderd", link_start: " (start)", link_end: " (eind)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "minuten", hours: "uren", days: "dagen", weeks: "weken", months: "maanden", years: "jaren", message_ok: "OK", message_cancel: "Annuleren", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januar", "Februar", "Mars", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Desember"], month_short: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Des"], day_full: ["Søndag", "Mandag", "Tirsdag", "Onsdag", "Torsdag", "Fredag", "Lørdag"], day_short: ["Søn", "Man", "Tir", "Ons", "Tor", "Fre", "Lør"] }, labels: { new_task: "Ny oppgave", icon_save: "Lagre", icon_cancel: "Avbryt", icon_details: "Detaljer", icon_edit: "Endre", icon_delete: "Slett", confirm_closing: "Endringer blir ikke lagret, er du sikker?", confirm_deleting: "Oppføringen vil bli slettet, er du sikker?", section_description: "Beskrivelse", section_time: "Tidsperiode", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Avbryt", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień"], month_short: ["Sty", "Lut", "Mar", "Kwi", "Maj", "Cze", "Lip", "Sie", "Wrz", "Paź", "Lis", "Gru"], day_full: ["Niedziela", "Poniedziałek", "Wtorek", "Środa", "Czwartek", "Piątek", "Sobota"], day_short: ["Nie", "Pon", "Wto", "Śro", "Czw", "Pią", "Sob"] }, labels: { new_task: "Nowe zadanie", icon_save: "Zapisz", icon_cancel: "Anuluj", icon_details: "Szczegóły", icon_edit: "Edytuj", icon_delete: "Usuń", confirm_closing: "", confirm_deleting: "Zdarzenie zostanie usunięte na zawsze, kontynuować?", section_description: "Opis", section_time: "Okres czasu", section_type: "Typ", column_wbs: "WBS", column_text: "Nazwa zadania", column_start_date: "Początek", column_duration: "Czas trwania", column_add: "", link: "Link", confirm_link_deleting: "zostanie usunięty", link_start: " (początek)", link_end: " (koniec)", type_task: "Zadanie", type_project: "Projekt", type_milestone: "Milestone", minutes: "Minuty", hours: "Godziny", days: "Dni", weeks: "Tydzień", months: "Miesiące", years: "Lata", message_ok: "OK", message_cancel: "Anuluj", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"], month_short: ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"], day_full: ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"], day_short: ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"] }, labels: { new_task: "Nova tarefa", icon_save: "Salvar", icon_cancel: "Cancelar", icon_details: "Detalhes", icon_edit: "Editar", icon_delete: "Excluir", confirm_closing: "", confirm_deleting: "As tarefas serão excluidas permanentemente, confirme?", section_description: "Descrição", section_time: "Período", section_type: "Tipo", column_wbs: "EAP", column_text: "Nome tarefa", column_start_date: "Data início", column_duration: "Duração", column_add: "", link: "Link", confirm_link_deleting: "Será excluído!", link_start: " (início)", link_end: " (fim)", type_task: "Task", type_project: "Projeto", type_milestone: "Marco", minutes: "Minutos", hours: "Horas", days: "Dias", weeks: "Semanas", months: "Meses", years: "Anos", message_ok: "OK", message_cancel: "Cancelar", section_constraint: "Restrição", constraint_type: "Tipo Restrição", constraint_date: "Data restrição", asap: "Mais breve possível", alap: "Mais tarde possível", snet: "Não começar antes de", snlt: "Não começar depois de", fnet: "Não terminar antes de", fnlt: "Não terminar depois de", mso: "Precisa começar em", mfo: "Precisa terminar em", resources_filter_placeholder: "Tipo de filtros", resources_filter_label: "Ocultar vazios" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Ianuarie", "Februarie", "Martie", "Aprilie", "Mai", "Iunie", "Iulie", "August", "Septembrie", "Octombrie", "November", "December"], month_short: ["Ian", "Feb", "Mar", "Apr", "Mai", "Iun", "Iul", "Aug", "Sep", "Oct", "Nov", "Dec"], day_full: ["Duminica", "Luni", "Marti", "Miercuri", "Joi", "Vineri", "Sambata"], day_short: ["Du", "Lu", "Ma", "Mi", "Jo", "Vi", "Sa"] }, labels: { new_task: "Sarcina noua", icon_save: "Salveaza", icon_cancel: "Anuleaza", icon_details: "Detalii", icon_edit: "Editeaza", icon_delete: "Sterge", confirm_closing: "Schimbarile nu vor fi salvate, esti sigur?", confirm_deleting: "Evenimentul va fi sters permanent, esti sigur?", section_description: "Descriere", section_time: "Interval", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Anuleaza", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Январь", "Февраль", "Март", "Апрель", "Maй", "Июнь", "Июль", "Август", "Сентябрь", "Oктябрь", "Ноябрь", "Декабрь"], month_short: ["Янв", "Фев", "Maр", "Aпр", "Maй", "Июн", "Июл", "Aвг", "Сен", "Окт", "Ноя", "Дек"], day_full: ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"], day_short: ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"] }, labels: { new_task: "Новое задание", icon_save: "Сохранить", icon_cancel: "Отменить", icon_details: "Детали", icon_edit: "Изменить", icon_delete: "Удалить", confirm_closing: "", confirm_deleting: "Событие будет удалено безвозвратно, продолжить?", section_description: "Описание", section_time: "Период времени", section_type: "Тип", column_wbs: "ИСР", column_text: "Задача", column_start_date: "Начало", column_duration: "Длительность", column_add: "", link: "Связь", confirm_link_deleting: "будет удалена", link_start: " (начало)", link_end: " (конец)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Минута", hours: "Час", days: "День", weeks: "Неделя", months: "Месяц", years: "Год", message_ok: "OK", message_cancel: "Отменить", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "начните вводить слово для фильтрации", resources_filter_label: "спрятать не установленные" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December"], month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], day_full: ["Nedelja", "Ponedeljek", "Torek", "Sreda", "Četrtek", "Petek", "Sobota"], day_short: ["Ned", "Pon", "Tor", "Sre", "Čet", "Pet", "Sob"] }, labels: { new_task: "Nova naloga", icon_save: "Shrani", icon_cancel: "Prekliči", icon_details: "Podrobnosti", icon_edit: "Uredi", icon_delete: "Izbriši", confirm_closing: "", confirm_deleting: "Dogodek bo izbrisan. Želite nadaljevati?", section_description: "Opis", section_time: "Časovni okvir", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Prekliči", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Január", "Február", "Marec", "Apríl", "Máj", "Jún", "Júl", "August", "September", "Október", "November", "December"], month_short: ["Jan", "Feb", "Mar", "Apr", "Máj", "Jún", "Júl", "Aug", "Sept", "Okt", "Nov", "Dec"], day_full: ["Nedeľa", "Pondelok", "Utorok", "Streda", "Štvrtok", "Piatok", "Sobota"], day_short: ["Ne", "Po", "Ut", "St", "Št", "Pi", "So"] }, labels: { new_task: "Nová úloha", icon_save: "Uložiť", icon_cancel: "Späť", icon_details: "Detail", icon_edit: "Edituj", icon_delete: "Zmazať", confirm_closing: "Vaše zmeny nebudú uložené. Skutočne?", confirm_deleting: "Udalosť bude natrvalo vymazaná. Skutočne?", section_description: "Poznámky", section_time: "Doba platnosti", section_type: "Type", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Späť", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Januari", "Februari", "Mars", "April", "Maj", "Juni", "Juli", "Augusti", "September", "Oktober", "November", "December"], month_short: ["Jan", "Feb", "Mar", "Apr", "Maj", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dec"], day_full: ["Söndag", "Måndag", "Tisdag", "Onsdag", "Torsdag", "Fredag", "Lördag"], day_short: ["Sön", "Mån", "Tis", "Ons", "Tor", "Fre", "Lör"] }, labels: { new_task: "Ny uppgift", icon_save: "Spara", icon_cancel: "Avbryt", icon_details: "Detajer", icon_edit: "Ändra", icon_delete: "Ta bort", confirm_closing: "", confirm_deleting: "Är du säker på att du vill ta bort händelsen permanent?", section_description: "Beskrivning", section_time: "Tid", section_type: "Typ", column_wbs: "WBS", column_text: "Uppgiftsnamn", column_start_date: "Starttid", column_duration: "Varaktighet", column_add: "", link: "Länk", confirm_link_deleting: "kommer tas bort", link_start: " (start)", link_end: " (slut)", type_task: "Uppgift", type_project: "Projekt", type_milestone: "Milstolpe", minutes: "Minuter", hours: "Timmar", days: "Dagar", weeks: "Veckor", months: "Månader", years: "År", message_ok: "OK", message_cancel: "Avbryt", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık"], month_short: ["Oca", "Şub", "Mar", "Nis", "May", "Haz", "Tem", "Ağu", "Eyl", "Eki", "Kas", "Ara"], day_full: ["Pazar", "Pazartesi", "Salı", "Çarşamba", "Perşembe", "Cuma", "Cumartesi"], day_short: ["Paz", "Pzt", "Sal", "Çar", "Per", "Cum", "Cmt"] }, labels: { new_task: "Yeni görev", icon_save: "Kaydet", icon_cancel: "İptal", icon_details: "Detaylar", icon_edit: "Düzenle", icon_delete: "Sil", confirm_closing: "", confirm_deleting: "Görev silinecek, emin misiniz?", section_description: "Açıklama", section_time: "Zaman Aralığı", section_type: "Tip", column_wbs: "WBS", column_text: "Görev Adı", column_start_date: "Başlangıç", column_duration: "Süre", column_add: "", link: "Bağlantı", confirm_link_deleting: "silinecek", link_start: " (başlangıç)", link_end: " (bitiş)", type_task: "Görev", type_project: "Proje", type_milestone: "Kilometretaşı", minutes: "Dakika", hours: "Saat", days: "Gün", weeks: "Hafta", months: "Ay", years: "Yıl", message_ok: "OK", message_cancel: "Ýptal", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        e.default = { date: { month_full: ["Січень", "Лютий", "Березень", "Квітень", "Травень", "Червень", "Липень", "Серпень", "Вересень", "Жовтень", "Листопад", "Грудень"], month_short: ["Січ", "Лют", "Бер", "Кві", "Тра", "Чер", "Лип", "Сер", "Вер", "Жов", "Лис", "Гру"], day_full: ["Неділя", "Понеділок", "Вівторок", "Середа", "Четвер", "П'ятниця", "Субота"], day_short: ["Нед", "Пон", "Вів", "Сер", "Чет", "Птн", "Суб"] }, labels: { new_task: "Нове завдання", icon_save: "Зберегти", icon_cancel: "Відміна", icon_details: "Деталі", icon_edit: "Редагувати", icon_delete: "Вилучити", confirm_closing: "", confirm_deleting: "Подія вилучиться назавжди. Ви впевнені?", section_description: "Опис", section_time: "Часовий проміжок", section_type: "Тип", column_wbs: "WBS", column_text: "Task name", column_start_date: "Start time", column_duration: "Duration", column_add: "", link: "Link", confirm_link_deleting: "will be deleted", link_start: " (start)", link_end: " (end)", type_task: "Task", type_project: "Project", type_milestone: "Milestone", minutes: "Minutes", hours: "Hours", days: "Days", weeks: "Week", months: "Months", years: "Years", message_ok: "OK", message_cancel: "Відміна", section_constraint: "Constraint", constraint_type: "Constraint type", constraint_date: "Constraint date", asap: "As Soon As Possible", alap: "As Late As Possible", snet: "Start No Earlier Than", snlt: "Start No Later Than", fnet: "Finish No Earlier Than", fnlt: "Finish No Later Than", mso: "Must Start On", mfo: "Must Finish On", resources_filter_placeholder: "type to filter", resources_filter_label: "hide empty" } };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(0), i = n(7), r = n(10);
          if (!i.isNode) {
            var a = n(1), o = n(2);
            t2.utils = { arrayFind: o.arrayFind, dom: a };
            var s = n(29)();
            t2.event = s.attach, t2.eventRemove = s.detach, t2._eventRemoveAll = s.detachAll, t2._createDomEventScope = s.extend, e2.mixin(t2, n(198)(t2));
            var l = n(199).init(t2);
            t2.$ui = l.factory, t2.$ui.layers = l.render, t2.$mouseEvents = l.mouseEvents, t2.$services.setService("mouseEvents", function() {
              return t2.$mouseEvents;
            }), t2.mixin(t2, l.layersApi), n(244)(t2), t2.$services.setService("layers", function() {
              return l.layersService;
            });
            var c = n(245);
            t2.mixin(t2, c()), n(246)(t2), n(247)(t2), n(248)(t2), n(249)(t2), n(250)(t2), n(251)(t2), n(252)(t2), n(253)(t2), n(254)(t2), n(259)(t2), n(260)(t2), n(270)(t2), n(271)(t2), t2.locate = function(t3) {
              var e3 = a.getTargetNode(t3);
              if (a.closest(e3, ".gantt_task_row")) return null;
              var n2 = arguments[1] || this.config.task_attribute, i2 = a.locateAttribute(e3, n2);
              return i2 ? i2.getAttribute(n2) : null;
            }, t2._locate_css = function(t3, e3, n2) {
              return a.locateClassName(t3, e3, n2);
            }, t2._locateHTML = function(t3, e3) {
              return a.locateAttribute(t3, e3 || this.config.task_attribute);
            };
          }
          t2.attachEvent("onParse", function() {
            r(t2) || t2.attachEvent("onGanttRender", function() {
              if (t2.config.initial_scroll) {
                var e3 = t2.getTaskByIndex(0), n2 = e3 ? e3.id : t2.config.root_id;
                t2.isTaskExists(n2) && t2.$task && t2.utils.dom.isChildOf(t2.$task, t2.$container) && t2.showTask(n2);
              }
            }, { once: true });
          }), t2.attachEvent("onBeforeGanttReady", function() {
            this.config.scroll_size || (this.config.scroll_size = a.getScrollSize() || 1), r(t2) || (this._eventRemoveAll(), this.$mouseEvents.reset(), this.resetLightbox());
          }), t2.attachEvent("onGanttReady", function() {
            !r(t2) && t2.config.rtl && t2.$layout.getCellsByType("viewCell").forEach(function(e3) {
              var n2 = e3.$config.scrollX;
              if (n2) {
                var i2 = t2.$ui.getView(n2);
                i2 && i2.scrollTo(i2.$config.scrollSize, 0);
              }
            });
          });
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(0), a = n(1);
        t.exports = function(t2) {
          var e2 = "data-dhxbox", n2 = null;
          function o(t3, e3) {
            var i2 = t3.callback;
            y.hide(t3.box), n2 = t3.box = null, i2 && i2(e3);
          }
          function s(t3) {
            if (n2) {
              var e3 = t3.which || t3.keyCode, i2 = false;
              if (k.keyboard) {
                if (13 == e3 || 32 == e3) {
                  var r2 = t3.target || t3.srcElement;
                  a.getClassName(r2).indexOf("gantt_popup_button") > -1 && r2.click ? r2.click() : (o(n2, true), i2 = true);
                }
                27 == e3 && (o(n2, false), i2 = true);
              }
              return i2 ? (t3.preventDefault && t3.preventDefault(), !(t3.cancelBubble = true)) : void 0;
            }
          }
          var l = a.getRootNode(t2.$root) || document;
          function c(t3) {
            c.cover || (c.cover = document.createElement("div"), c.cover.onkeydown = s, c.cover.className = "dhx_modal_cover", document.body.appendChild(c.cover)), c.cover.style.display = t3 ? "inline-block" : "none";
          }
          function u(e3, n3, i2) {
            var r2 = t2._waiAria.messageButtonAttrString(e3), a2 = n3.toLowerCase().replace(/ /g, "_");
            return "<div " + r2 + " class='gantt_popup_button dhtmlx_popup_button " + ("gantt_" + a2 + "_button dhtmlx_" + a2 + "_button") + "' data-result='" + i2 + "' result='" + i2 + "' ><div>" + e3 + "</div></div>";
          }
          function d(e3) {
            k.area || (k.area = document.createElement("div"), k.area.className = "gantt_message_area dhtmlx_message_area", k.area.style[k.position] = "5px", document.body.appendChild(k.area)), k.hide(e3.id);
            var n3 = document.createElement("div");
            return n3.innerHTML = "<div>" + e3.text + "</div>", n3.className = "gantt-info dhtmlx-info gantt-" + e3.type + " dhtmlx-" + e3.type, n3.onclick = function() {
              k.hide(e3.id), e3 = null;
            }, t2._waiAria.messageInfoAttr(n3), "bottom" == k.position && k.area.firstChild ? k.area.insertBefore(n3, k.area.firstChild) : k.area.appendChild(n3), e3.expire > 0 && (k.timers[e3.id] = window.setTimeout(function() {
              k && k.hide(e3.id);
            }, e3.expire)), k.pull[e3.id] = n3, n3 = null, e3.id;
          }
          function h() {
            for (var t3 = [].slice.apply(arguments, [0]), e3 = 0; e3 < t3.length; e3++) if (t3[e3]) return t3[e3];
          }
          function f(l2, d2, f2) {
            var _2 = l2.tagName ? l2 : function(s2, l3, c2) {
              var d3 = document.createElement("div"), f3 = r.uid();
              t2._waiAria.messageModalAttr(d3, f3), d3.className = " gantt_modal_box dhtmlx_modal_box gantt-" + s2.type + " dhtmlx-" + s2.type, d3.setAttribute(e2, 1);
              var _3 = "";
              if (s2.width && (d3.style.width = s2.width), s2.height && (d3.style.height = s2.height), s2.title && (_3 += '<div class="gantt_popup_title dhtmlx_popup_title">' + s2.title + "</div>"), _3 += '<div class="gantt_popup_text dhtmlx_popup_text" id="' + f3 + '"><span>' + (s2.content ? "" : s2.text) + '</span></div><div  class="gantt_popup_controls dhtmlx_popup_controls">', l3 && (_3 += u(h(s2.ok, t2.locale.labels.message_ok, "OK"), "ok", true)), c2 && (_3 += u(h(s2.cancel, t2.locale.labels.message_cancel, "Cancel"), "cancel", false)), s2.buttons) for (var g3 = 0; g3 < s2.buttons.length; g3++) {
                var p3 = s2.buttons[g3];
                "object" == i(p3) ? _3 += u(p3.label, p3.css || "gantt_" + p3.label.toLowerCase() + "_button dhtmlx_" + p3.label.toLowerCase() + "_button", p3.value || g3) : _3 += u(p3, p3, g3);
              }
              if (_3 += "</div>", d3.innerHTML = _3, s2.content) {
                var v2 = s2.content;
                "string" == typeof v2 && (v2 = document.getElementById(v2)), "none" == v2.style.display && (v2.style.display = ""), d3.childNodes[s2.title ? 1 : 0].appendChild(v2);
              }
              return d3.onclick = function(t3) {
                var e3 = t3.target || t3.srcElement;
                if (e3.className || (e3 = e3.parentNode), a.closest(e3, ".gantt_popup_button")) {
                  var n3 = e3.getAttribute("data-result");
                  o(s2, n3 = "true" == n3 || "false" != n3 && n3);
                }
              }, s2.box = d3, (l3 || c2) && (n2 = s2), d3;
            }(l2, d2, f2);
            l2.hidden || c(true), document.body.appendChild(_2);
            var g2 = Math.abs(Math.floor(((window.innerWidth || document.documentElement.offsetWidth) - _2.offsetWidth) / 2)), p2 = Math.abs(Math.floor(((window.innerHeight || document.documentElement.offsetHeight) - _2.offsetHeight) / 2));
            return "top" == l2.position ? _2.style.top = "-3px" : _2.style.top = p2 + "px", _2.style.left = g2 + "px", _2.onkeydown = s, y.focus(_2), l2.hidden && y.hide(_2), t2.callEvent("onMessagePopup", [_2]), _2;
          }
          function _(t3) {
            return f(t3, true, false);
          }
          function g(t3) {
            return f(t3, true, true);
          }
          function p(t3) {
            return f(t3);
          }
          function v(t3, e3, n3) {
            return "object" != i(t3) && ("function" == typeof e3 && (n3 = e3, e3 = ""), t3 = { text: t3, type: e3, callback: n3 }), t3;
          }
          function m(t3, e3, n3, a2) {
            return "object" != i(t3) && (t3 = { text: t3, type: e3, expire: n3, id: a2 }), t3.id = t3.id || r.uid(), t3.expire = t3.expire || k.expire, t3;
          }
          t2.event(l, "keydown", s, true);
          var y = function() {
            var t3 = v.apply(this, arguments);
            return t3.type = t3.type || "alert", p(t3);
          };
          y.hide = function(n3) {
            for (; n3 && n3.getAttribute && !n3.getAttribute(e2); ) n3 = n3.parentNode;
            n3 && (n3.parentNode.removeChild(n3), c(false), t2.callEvent("onAfterMessagePopup", [n3]));
          }, y.focus = function(t3) {
            setTimeout(function() {
              var e3 = a.getFocusableNodes(t3);
              e3.length && e3[0].focus && e3[0].focus();
            }, 1);
          };
          var k = function(t3, e3, n3, i2) {
            switch ((t3 = m.apply(this, arguments)).type = t3.type || "info", t3.type.split("-")[0]) {
              case "alert":
                return _(t3);
              case "confirm":
                return g(t3);
              case "modalbox":
                return p(t3);
              default:
                return d(t3);
            }
          };
          k.seed = (/* @__PURE__ */ new Date()).valueOf(), k.uid = r.uid, k.expire = 4e3, k.keyboard = true, k.position = "top", k.pull = {}, k.timers = {}, k.hideAll = function() {
            for (var t3 in k.pull) k.hide(t3);
          }, k.hide = function(t3) {
            var e3 = k.pull[t3];
            e3 && e3.parentNode && (window.setTimeout(function() {
              e3.parentNode.removeChild(e3), e3 = null;
            }, 2e3), e3.className += " hidden", k.timers[t3] && window.clearTimeout(k.timers[t3]), delete k.pull[t3]);
          };
          var b = [];
          return t2.attachEvent("onMessagePopup", function(t3) {
            b.push(t3);
          }), t2.attachEvent("onAfterMessagePopup", function(t3) {
            for (var e3 = 0; e3 < b.length; e3++) b[e3] === t3 && (b.splice(e3, 1), e3--);
          }), t2.attachEvent("onDestroy", function() {
            c.cover && c.cover.parentNode && c.cover.parentNode.removeChild(c.cover);
            for (var t3 = 0; t3 < b.length; t3++) b[t3].parentNode && b[t3].parentNode.removeChild(b[t3]);
            b = null, k.area && k.area.parentNode && k.area.parentNode.removeChild(k.area), k = null;
          }), { alert: function() {
            var t3 = v.apply(this, arguments);
            return t3.type = t3.type || "confirm", _(t3);
          }, confirm: function() {
            var t3 = v.apply(this, arguments);
            return t3.type = t3.type || "alert", g(t3);
          }, message: k, modalbox: y };
        };
      }, function(t, e, n) {
        var i = n(200), r = n(202), a = n(203), o = n(11), s = n(41), l = n(207), c = n(208), u = n(209), d = n(210), h = n(22), f = n(19), _ = n(19), g = n(22), p = n(22), v = n(212), m = n(223), y = n(224), k = n(226), b = n(227), w = n(228), x = n(230), $ = n(231), S = n(232), T = n(233), C = n(234), E = n(240), D = n(243);
        t.exports = { init: function(t2) {
          function e2(e3, n3) {
            var i2 = n3(t2);
            i2.onCreated && i2.onCreated(e3), e3.attachEvent("onReady", function() {
              i2.onInitialized && i2.onInitialized(e3);
            }), e3.attachEvent("onDestroy", function() {
              i2.onDestroyed && i2.onDestroyed(e3);
            });
          }
          var n2 = i.createFactory(t2);
          n2.registerView("cell", o), n2.registerView("resizer", u), n2.registerView("scrollbar", d), n2.registerView("layout", s, function(t3) {
            "main" === (t3.$config ? t3.$config.id : null) && e2(t3, D);
          }), n2.registerView("viewcell", c), n2.registerView("multiview", l), n2.registerView("timeline", h, function(t3) {
            "timeline" !== (t3.$config ? t3.$config.id : null) && "task" != t3.$config.bind || e2(t3, E);
          }), n2.registerView("grid", f, function(t3) {
            "grid" !== (t3.$config ? t3.$config.id : null) && "task" != t3.$config.bind || e2(t3, C);
          }), n2.registerView("resourceGrid", _), n2.registerView("resourceTimeline", g), n2.registerView("resourceHistogram", p);
          var M = a(t2), A = v(t2);
          return t2.ext.inlineEditors = A, t2.ext._inlineEditors = A, A.init(t2), { factory: n2, mouseEvents: r.init(t2), layersApi: M.init(), render: { gridLine: function() {
            return x(t2);
          }, taskBg: function() {
            return b(t2);
          }, taskBar: function() {
            return m(t2);
          }, taskRollupBar: function() {
            return k(t2);
          }, taskSplitBar: function() {
            return y(t2);
          }, link: function() {
            return w(t2);
          }, resourceRow: function() {
            return $(t2);
          }, resourceHistogram: function() {
            return S(t2);
          }, gridTaskRowResizer: function() {
            return T(t2);
          } }, layersService: { getDataRender: function(e3) {
            return M.getDataRender(e3, t2);
          }, createDataRender: function(e3) {
            return M.createDataRender(e3, t2);
          } } };
        } };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(0), a = n(201);
        t.exports = { createFactory: function(t2) {
          var e2 = {};
          var n2 = {};
          function o(o2, s, l, c) {
            var u = e2[o2];
            if (!u || !u.create) return false;
            "resizer" != o2 || l.mode || (c.$config.cols ? l.mode = "x" : l.mode = "y"), "viewcell" != o2 || "scrollbar" != l.view || l.scroll || (c.$config.cols ? l.scroll = "y" : l.scroll = "x"), (l = r.copy(l)).id || n2[l.view] || (l.id = l.view), l.id && !l.css && (l.css = l.id + "_cell");
            var d = new u.create(s, l, this, t2);
            return u.configure && u.configure(d), a(d, c), d.$id || (d.$id = l.id || t2.uid()), d.$parent || "object" != i(s) || (d.$parent = s), d.$config || (d.$config = l), n2[d.$id] && (d.$id = t2.uid()), n2[d.$id] = d, d;
          }
          return { initUI: function(t3, e3) {
            var n3 = "cell";
            return t3.view ? n3 = "viewcell" : t3.resizer ? n3 = "resizer" : t3.rows || t3.cols ? n3 = "layout" : t3.views && (n3 = "multiview"), o.call(this, n3, null, t3, e3);
          }, reset: function() {
            n2 = {};
          }, registerView: function(t3, n3, i2) {
            e2[t3] = { create: n3, configure: i2 };
          }, createView: o, getView: function(t3) {
            return n2[t3];
          } };
        } };
      }, function(t, e, n) {
        var i = n(0);
        function r(t2, e2) {
          var n2 = this.$config[t2];
          return n2 ? (n2.$extendedConfig || (n2.$extendedConfig = true, Object.setPrototypeOf(n2, e2)), n2) : e2;
        }
        t.exports = function(t2, e2) {
          i.mixin(t2, /* @__PURE__ */ function(t3) {
            var e3, n2;
            return { $getConfig: function() {
              return e3 || (e3 = t3 ? t3.$getConfig() : this.$gantt.config), this.$config.config ? r.call(this, "config", e3) : e3;
            }, $getTemplates: function() {
              return n2 || (n2 = t3 ? t3.$getTemplates() : this.$gantt.templates), this.$config.templates ? r.call(this, "templates", n2) : n2;
            } };
          }(e2));
        };
      }, function(t, e, n) {
        var i = /* @__PURE__ */ function(t2) {
          return function(e2) {
            var n2 = { click: {}, doubleclick: {}, contextMenu: {} };
            function i2(t3, e3, i3, r2) {
              n2[t3][e3] || (n2[t3][e3] = []), n2[t3][e3].push({ handler: i3, root: r2 });
            }
            function r(t3) {
              t3 = t3 || window.event;
              var i3 = e2.locate(t3), r2 = o(t3, n2.click), a2 = true;
              if (null !== i3 ? a2 = !e2.checkEvent("onTaskClick") || e2.callEvent("onTaskClick", [i3, t3]) : e2.callEvent("onEmptyClick", [t3]), a2) {
                if (!s(r2, t3, i3)) return;
                switch (t3.target.nodeName) {
                  case "SELECT":
                  case "INPUT":
                    return;
                }
                i3 && e2.getTask(i3) && !e2._multiselect && e2.config.select_task && e2.selectTask(i3);
              }
            }
            function a(t3) {
              var n3 = (t3 = t3 || window.event).target || t3.srcElement, i3 = e2.locate(n3), r2 = e2.locate(n3, e2.config.link_attribute), a2 = !e2.checkEvent("onContextMenu") || e2.callEvent("onContextMenu", [i3, r2, t3]);
              return a2 || (t3.preventDefault ? t3.preventDefault() : t3.returnValue = false), a2;
            }
            function o(e3, n3) {
              for (var i3 = e3.target || e3.srcElement, r2 = []; i3; ) {
                var a2 = t2.getClassName(i3);
                if (a2) {
                  a2 = a2.split(" ");
                  for (var o2 = 0; o2 < a2.length; o2++) if (a2[o2] && n3[a2[o2]]) for (var s2 = n3[a2[o2]], l2 = 0; l2 < s2.length; l2++) s2[l2].root && !t2.isChildOf(i3, s2[l2].root) || r2.push(s2[l2].handler);
                }
                i3 = i3.parentNode;
              }
              return r2;
            }
            function s(t3, n3, i3) {
              for (var r2 = true, a2 = 0; a2 < t3.length; a2++) {
                var o2 = t3[a2].call(e2, n3, i3, n3.target || n3.srcElement);
                r2 = r2 && !(void 0 !== o2 && true !== o2);
              }
              return r2;
            }
            function l(t3) {
              t3 = t3 || window.event;
              var i3 = e2.locate(t3), r2 = o(t3, n2.doubleclick), a2 = !e2.checkEvent("onTaskDblClick") || null === i3 || e2.callEvent("onTaskDblClick", [i3, t3]);
              if (a2) {
                if (!s(r2, t3, i3)) return;
                null !== i3 && e2.getTask(i3) && a2 && e2.config.details_on_dblclick && !e2.isReadonly(i3) && e2.showLightbox(i3);
              }
            }
            function c(t3) {
              if (e2.checkEvent("onMouseMove")) {
                var n3 = e2.locate(t3);
                e2._last_move_event = t3, e2.callEvent("onMouseMove", [n3, t3]);
              }
            }
            var u = e2._createDomEventScope();
            function d(t3) {
              u.detachAll(), t3 && (u.attach(t3, "click", r), u.attach(t3, "dblclick", l), u.attach(t3, "mousemove", c), u.attach(t3, "contextmenu", a));
            }
            return { reset: d, global: function(t3, e3, n3) {
              i2(t3, e3, n3, null);
            }, delegate: i2, detach: function(t3, e3, i3, r2) {
              if (n2[t3] && n2[t3][e3]) {
                for (var a2 = n2[t3], o2 = a2[e3], s2 = 0; s2 < o2.length; s2++) o2[s2].root == r2 && (o2.splice(s2, 1), s2--);
                o2.length || delete a2[e3];
              }
            }, callHandler: function(t3, e3, i3, r2) {
              var a2 = n2[t3][e3];
              if (a2) for (var o2 = 0; o2 < a2.length; o2++) (i3 || a2[o2].root) && a2[o2].root !== i3 || a2[o2].handler.apply(this, r2);
            }, onDoubleClick: l, onMouseMove: c, onContextMenu: a, onClick: r, destructor: function() {
              d(), n2 = null, u = null;
            } };
          };
        }(n(1));
        t.exports = { init: i };
      }, function(t, e, n) {
        var i = n(204);
        function r(t2, e2) {
          if (t2.view) {
            var n2 = t2.view;
            "string" == typeof n2 && (n2 = e2.$ui.getView(n2)), n2 && n2.attachEvent && n2.attachEvent("onScroll", function() {
              e2.$services.getService("state").getState("batchUpdate").batch_update || n2.$config.$skipSmartRenderOnScroll || t2.requestUpdate && t2.requestUpdate();
            });
          }
        }
        t.exports = function(t2) {
          var e2 = i(t2);
          return { getDataRender: function(e3) {
            return t2.$services.getService("layer:" + e3) || null;
          }, createDataRender: function(n2) {
            var i2 = n2.name, a = n2.defaultContainer, o = n2.defaultContainerSibling, s = e2.createGroup(a, o, function(t3, e3) {
              if (!s.filters) return true;
              for (var n3 = 0; n3 < s.filters.length; n3++) if (false === s.filters[n3](t3, e3)) return false;
            }, r);
            return t2.$services.setService("layer:" + i2, function() {
              return s;
            }), t2.attachEvent("onGanttReady", function() {
              s.addLayer();
            }), s;
          }, init: function() {
            var e3 = this.createDataRender({ name: "task", defaultContainer: function() {
              return t2.$task_data ? t2.$task_data : t2.$ui.getView("timeline") ? t2.$ui.getView("timeline").$task_data : void 0;
            }, defaultContainerSibling: function() {
              return t2.$task_links ? t2.$task_links : t2.$ui.getView("timeline") ? t2.$ui.getView("timeline").$task_links : void 0;
            }, filter: function(t3) {
            } }, t2), n2 = this.createDataRender({ name: "link", defaultContainer: function() {
              return t2.$task_data ? t2.$task_data : t2.$ui.getView("timeline") ? t2.$ui.getView("timeline").$task_data : void 0;
            } }, t2);
            return { addTaskLayer: function(t3) {
              return "function" == typeof t3 && (t3 = { renderer: t3 }), t3.view = "timeline", e3.addLayer(t3);
            }, _getTaskLayers: function() {
              return e3.getLayers();
            }, removeTaskLayer: function(t3) {
              e3.removeLayer(t3);
            }, _clearTaskLayers: function() {
              e3.clear();
            }, addLinkLayer: function(t3) {
              return "function" == typeof t3 && (t3 = { renderer: { render: t3 } }), t3.view = "timeline", n2.addLayer(t3);
            }, _getLinkLayers: function() {
              return n2.getLayers();
            }, removeLinkLayer: function(t3) {
              n2.removeLayer(t3);
            }, _clearLinkLayers: function() {
              n2.clear();
            } };
          } };
        };
      }, function(t, e, n) {
        var i = n(205), r = n(0), a = n(1), o = n(14);
        function s(t2) {
          return t2 instanceof Array || (t2 = Array.prototype.slice.call(arguments, 0)), function(e2) {
            for (var n2 = true, i2 = 0, r2 = t2.length; i2 < r2; i2++) {
              var a2 = t2[i2];
              a2 && (n2 = n2 && false !== a2(e2.id, e2));
            }
            return n2;
          };
        }
        t.exports = function(t2) {
          var e2 = i(t2);
          return { createGroup: function(n2, i2, l, c) {
            var u = { tempCollection: [], renderers: {}, container: n2, filters: [], getLayers: function() {
              this._add();
              var t3 = [];
              for (var e3 in this.renderers) t3.push(this.renderers[e3]);
              return t3;
            }, getLayer: function(t3) {
              return this.renderers[t3];
            }, _add: function(n3) {
              n3 && (n3.id = n3.id || r.uid(), this.tempCollection.push(n3));
              for (var o2 = this.container(), s2 = this.tempCollection, l2 = 0; l2 < s2.length; l2++) if (n3 = s2[l2], this.container() || n3 && n3.container && a.isChildOf(n3.container, document.body)) {
                var u2 = n3.container, d = n3.id, h = n3.topmost;
                if (!u2.parentNode) if (h) o2.appendChild(u2);
                else {
                  var f = i2 ? i2() : o2.firstChild;
                  f && f.parentNode == o2 ? o2.insertBefore(u2, f) : o2.appendChild(u2);
                }
                this.renderers[d] = e2.getRenderer(d, n3, u2), c && c(n3, t2), this.tempCollection.splice(l2, 1), l2--;
              }
            }, addLayer: function(e3) {
              if (e3) {
                "function" == typeof e3 && (e3 = { renderer: e3 }), void 0 === e3.filter ? e3.filter = s(l || []) : e3.filter instanceof Array && (e3.filter.push(l), e3.filter = s(e3.filter)), e3.container || (e3.container = document.createElement("div"));
                var n3 = this;
                e3.requestUpdate = function() {
                  t2.config.smart_rendering && !o(t2) && n3.renderers[e3.id] && n3.onUpdateRequest(n3.renderers[e3.id]);
                };
              }
              return this._add(e3), e3 ? e3.id : void 0;
            }, onUpdateRequest: function(t3) {
            }, eachLayer: function(t3) {
              for (var e3 in this.renderers) t3(this.renderers[e3]);
            }, removeLayer: function(t3) {
              this.renderers[t3] && (this.renderers[t3].destructor(), delete this.renderers[t3]);
            }, clear: function() {
              for (var t3 in this.renderers) this.renderers[t3].destructor();
              this.renderers = {};
            } };
            return t2.attachEvent("onDestroy", function() {
              u.clear(), u = null;
            }), u;
          } };
        };
      }, function(t, e, n) {
        var i = n(206), r = n(14), a = n(21), o = n(5);
        t.exports = function(t2) {
          var e2 = {}, n2 = {};
          function s(e3) {
            var n3 = null;
            return "string" == typeof e3.view ? n3 = t2.$ui.getView(e3.view) : e3.view && (n3 = e3.view), n3;
          }
          function l(l2, c, u) {
            if (n2[l2]) return n2[l2];
            c.renderer || t2.assert(false, "Invalid renderer call");
            var d = null, h = null, f = null, _ = null, g = null;
            "function" == typeof c.renderer ? (d = c.renderer, f = a) : (d = c.renderer.render, h = c.renderer.update, _ = c.renderer.onrender, c.renderer.isInViewPort ? g = c.renderer.isInViewPort : f = c.renderer.getRectangle, f || null === f || (f = a));
            var p = c.filter;
            return u && u.setAttribute(t2.config.layer_attribute, true), n2[l2] = { render_item: function(e3, n3, a2, o2, l3) {
              if (n3 = n3 || u, !p || p(e3)) {
                var h2 = o2 || s(c), v = l3 || (h2 ? h2.$getConfig() : null), m = a2;
                !m && v && v.smart_rendering && (m = h2.getViewPort());
                var y = null;
                !r(t2) && (f || g) && m ? (g ? g(e3, m, h2, v, t2) : i(m, f(e3, h2, v, t2))) && (y = d.call(t2, e3, h2, v, m)) : y = d.call(t2, e3, h2, v, m), this.append(e3, y, n3);
                var k = 11 == n3.nodeType;
                _ && !k && y && _.call(t2, e3, y, h2);
              } else this.remove_item(e3.id);
            }, clear: function(t3) {
              this.rendered = e2[l2] = {}, c.append || this.clear_container(t3);
            }, clear_container: function(t3) {
              (t3 = t3 || u) && (t3.innerHTML = "");
            }, get_visible_range: function(e3) {
              var n3, i2, r2 = s(c), a2 = r2 ? r2.$getConfig() : null;
              return a2 && a2.smart_rendering && (n3 = r2.getViewPort()), r2 && n3 && ("function" == typeof c.renderer ? i2 = o(t2, r2, a2, e3, n3) : c.renderer && c.renderer.getVisibleRange && (i2 = c.renderer.getVisibleRange(t2, r2, a2, e3, n3))), i2 || (i2 = { start: 0, end: e3.count() }), i2;
            }, render_items: function(e3, n3) {
              n3 = n3 || u;
              var i2 = document.createDocumentFragment();
              this.clear(n3);
              var r2 = null, a2 = s(c), o2 = a2 ? a2.$getConfig() : null;
              o2 && o2.smart_rendering && (r2 = a2.getViewPort());
              for (var l3 = 0, d2 = e3.length; l3 < d2; l3++) this.render_item(e3[l3], i2, r2, a2, o2);
              n3.appendChild(i2, n3);
              var h2 = {};
              e3.forEach(function(t3) {
                h2[t3.id] = t3;
              });
              var f2 = {};
              if (_) {
                var g2 = {};
                for (var l3 in this.rendered) f2[l3] || (g2[l3] = this.rendered[l3], _.call(t2, h2[l3], this.rendered[l3], a2));
              }
            }, update_items: function(e3, n3) {
              var a2 = s(c), o2 = a2 ? a2.$getConfig() : null;
              if (a2 && a2.$getConfig().smart_rendering && !r(t2) && this.rendered && (f || g)) {
                n3 = n3 || u;
                var l3 = document.createDocumentFragment(), d2 = null;
                a2 && (d2 = a2.getViewPort());
                var p2 = {};
                e3.forEach(function(t3) {
                  p2[t3.id] = t3;
                });
                var v = {}, m = {};
                for (var y in this.rendered) m[y] = true, v[y] = true;
                for (var k = {}, b = (y = 0, e3.length); y < b; y++) {
                  var w = e3[y], x = this.rendered[w.id];
                  m[w.id] = false, x && x.parentNode ? (g ? g(w, d2, a2, o2, t2) : i(d2, f(w, a2, o2, t2))) ? (h && h.call(t2, w, x, a2, o2, d2), this.restore(w, l3)) : m[w.id] = true : (k[e3[y].id] = true, this.render_item(e3[y], l3, d2, a2, o2));
                }
                for (var y in m) m[y] && this.hide(y);
                if (l3.childNodes.length && n3.appendChild(l3, n3), _) {
                  var $ = {};
                  for (var y in this.rendered) v[y] && !k[y] || ($[y] = this.rendered[y], _.call(t2, p2[y], this.rendered[y], a2));
                }
              }
            }, append: function(t3, e3, n3) {
              this.rendered && (e3 ? (this.rendered[t3.id] && this.rendered[t3.id].parentNode ? this.replace_item(t3.id, e3) : n3.appendChild(e3), this.rendered[t3.id] = e3) : this.rendered[t3.id] && this.remove_item(t3.id));
            }, replace_item: function(t3, e3) {
              var n3 = this.rendered[t3];
              n3 && n3.parentNode && n3.parentNode.replaceChild(e3, n3), this.rendered[t3] = e3;
            }, remove_item: function(t3) {
              this.hide(t3), delete this.rendered[t3];
            }, hide: function(t3) {
              var e3 = this.rendered[t3];
              e3 && e3.parentNode && e3.parentNode.removeChild(e3);
            }, restore: function(t3, e3) {
              var n3 = this.rendered[t3.id];
              n3 ? n3.parentNode || this.append(t3, n3, e3 || u) : this.render_item(t3, e3 || u);
            }, change_id: function(t3, e3) {
              this.rendered[e3] = this.rendered[t3], delete this.rendered[t3];
            }, rendered: e2[l2], node: u, destructor: function() {
              this.clear(), delete n2[l2], delete e2[l2];
            } }, n2[l2];
          }
          return { getRenderer: l, clearRenderers: function() {
            for (var t3 in n2) l(t3).destructor();
          } };
        };
      }, function(t, e) {
        t.exports = function(t2, e2) {
          return !!e2 && (!(e2.left > t2.x_end || e2.left + e2.width < t2.x) && !(e2.top > t2.y_end || e2.top + e2.height < t2.y));
        };
      }, function(t, e, n) {
        var i = n(3), r = n(41), a = n(11), o = function(t2) {
          function e2(e3, n2, i2) {
            for (var r2 = t2.apply(this, arguments) || this, a2 = 0; a2 < r2.$cells.length; a2++) r2.$cells[a2].$config.hidden = 0 !== a2;
            return r2.$cell = r2.$cells[0], r2.$name = "viewLayout", r2;
          }
          return i(e2, t2), e2.prototype.cell = function(e3) {
            var n2 = t2.prototype.cell.call(this, e3);
            return n2.$view || this.$fill(null, this), n2;
          }, e2.prototype.moveView = function(t3) {
            var e3 = this.$view;
            this.$cell && (this.$cell.$config.hidden = true, e3.removeChild(this.$cell.$view)), this.$cell = t3, e3.appendChild(t3.$view);
          }, e2.prototype.setSize = function(t3, e3) {
            a.prototype.setSize.call(this, t3, e3);
          }, e2.prototype.setContentSize = function() {
            var t3 = this.$lastSize;
            this.$cell.setSize(t3.contentX, t3.contentY);
          }, e2.prototype.getSize = function() {
            var e3 = t2.prototype.getSize.call(this);
            if (this.$cell) {
              var n2 = this.$cell.getSize();
              if (this.$config.byMaxSize) for (var i2 = 0; i2 < this.$cells.length; i2++) {
                var r2 = this.$cells[i2].getSize();
                for (var a2 in n2) n2[a2] = Math.max(n2[a2], r2[a2]);
              }
              for (var o2 in e3) e3[o2] = e3[o2] || n2[o2];
              e3.gravity = Math.max(e3.gravity, n2.gravity);
            }
            return e3;
          }, e2;
        }(r);
        t.exports = o;
      }, function(t, e, n) {
        var i = n(3), r = n(0), a = function(t2) {
          function e2(e3, n2, i2) {
            var a2 = t2.apply(this, arguments) || this;
            if (n2.view) {
              n2.id && (this.$id = r.uid());
              var o = r.copy(n2);
              if (delete o.config, delete o.templates, this.$content = this.$factory.createView(n2.view, this, o, this), !this.$content) return false;
            }
            return a2.$name = "viewCell", a2;
          }
          return i(e2, t2), e2.prototype.destructor = function() {
            this.clear(), t2.prototype.destructor.call(this);
          }, e2.prototype.clear = function() {
            if (this.$initialized = false, this.$content) {
              var e3 = this.$content.unload || this.$content.destructor;
              e3 && e3.call(this.$content);
            }
            t2.prototype.clear.call(this);
          }, e2.prototype.scrollTo = function(e3, n2) {
            this.$content && this.$content.scrollTo ? this.$content.scrollTo(e3, n2) : t2.prototype.scrollTo.call(this, e3, n2);
          }, e2.prototype._setContentSize = function(t3, e3) {
            var n2 = this._getBorderSizes();
            if ("number" == typeof t3) {
              var i2 = t3 + n2.horizontal;
              this.$config.width = i2;
            }
            if ("number" == typeof e3) {
              var r2 = e3 + n2.vertical;
              this.$config.height = r2;
            }
          }, e2.prototype.setSize = function(e3, n2) {
            if (t2.prototype.setSize.call(this, e3, n2), !this.$preResize && this.$content && !this.$initialized) {
              this.$initialized = true;
              var i2 = this.$view.childNodes[0], r2 = this.$view.childNodes[1];
              r2 || (r2 = i2), this.$content.init(r2);
            }
          }, e2.prototype.setContentSize = function() {
            !this.$preResize && this.$content && this.$initialized && this.$content.setSize(this.$lastSize.contentX, this.$lastSize.contentY);
          }, e2.prototype.getContentSize = function() {
            var e3 = t2.prototype.getContentSize.call(this);
            if (this.$content && this.$initialized) {
              var n2 = this.$content.getSize();
              e3.width = void 0 === n2.contentX ? n2.width : n2.contentX, e3.height = void 0 === n2.contentY ? n2.height : n2.contentY;
            }
            var i2 = this._getBorderSizes();
            return e3.width += i2.horizontal, e3.height += i2.vertical, e3;
          }, e2;
        }(n(11));
        t.exports = a;
      }, function(t, e) {
        t.exports = null;
      }, function(t, e, n) {
        var i = n(3), r = n(1), a = n(0), o = n(7), s = function(t2) {
          var e2 = ["altKey", "shiftKey", "metaKey"];
          function n2(e3, n3, i2, r2) {
            var o2 = t2.apply(this, arguments) || this;
            this.$config = a.mixin(n3, { scroll: "x" }), o2._scrollHorizontalHandler = a.bind(o2._scrollHorizontalHandler, o2), o2._scrollVerticalHandler = a.bind(o2._scrollVerticalHandler, o2), o2._outerScrollVerticalHandler = a.bind(o2._outerScrollVerticalHandler, o2), o2._outerScrollHorizontalHandler = a.bind(o2._outerScrollHorizontalHandler, o2), o2._mouseWheelHandler = a.bind(o2._mouseWheelHandler, o2), this.$config.hidden = true;
            var s2 = r2.config.scroll_size;
            return r2.env.isIE && (s2 += 1), this._isHorizontal() ? (o2.$config.height = s2, o2.$parent.$config.height = s2) : (o2.$config.width = s2, o2.$parent.$config.width = s2), this.$config.scrollPosition = 0, o2.$name = "scroller", o2;
          }
          return i(n2, t2), n2.prototype.init = function(t3) {
            t3.innerHTML = this.$toHTML(), this.$view = t3.firstChild, this.$view || this.init(), this._isVertical() ? this._initVertical() : this._initHorizontal(), this._initMouseWheel(), this._initLinkedViews();
          }, n2.prototype.$toHTML = function() {
            return "<div class='gantt_layout_cell " + (this._isHorizontal() ? "gantt_hor_scroll" : "gantt_ver_scroll") + "'><div style='" + (this._isHorizontal() ? "width:2000px" : "height:2000px") + "'></div></div>";
          }, n2.prototype._getRootParent = function() {
            for (var t3 = this.$parent; t3 && t3.$parent; ) t3 = t3.$parent;
            if (t3) return t3;
          }, n2.prototype._eachView = function() {
            var t3 = [];
            return function t4(e3, n3) {
              if (n3.push(e3), e3.$cells) for (var i2 = 0; i2 < e3.$cells.length; i2++) t4(e3.$cells[i2], n3);
            }(this._getRootParent(), t3), t3;
          }, n2.prototype._getLinkedViews = function() {
            for (var t3 = this._eachView(), e3 = [], n3 = 0; n3 < t3.length; n3++) t3[n3].$config && (this._isVertical() && t3[n3].$config.scrollY == this.$id || this._isHorizontal() && t3[n3].$config.scrollX == this.$id) && e3.push(t3[n3]);
            return e3;
          }, n2.prototype._initHorizontal = function() {
            this.$scroll_hor = this.$view, this.$domEvents.attach(this.$view, "scroll", this._scrollHorizontalHandler);
          }, n2.prototype._initLinkedViews = function() {
            for (var t3 = this._getLinkedViews(), e3 = this._isVertical() ? "gantt_layout_outer_scroll gantt_layout_outer_scroll_vertical" : "gantt_layout_outer_scroll gantt_layout_outer_scroll_horizontal", n3 = 0; n3 < t3.length; n3++) r.addClassName(t3[n3].$view || t3[n3].getNode(), e3);
          }, n2.prototype._initVertical = function() {
            this.$scroll_ver = this.$view, this.$domEvents.attach(this.$view, "scroll", this._scrollVerticalHandler);
          }, n2.prototype._updateLinkedViews = function() {
          }, n2.prototype._initMouseWheel = function() {
            o.isFF ? this.$domEvents.attach(this._getRootParent().$view, "wheel", this._mouseWheelHandler, { passive: false }) : this.$domEvents.attach(this._getRootParent().$view, "mousewheel", this._mouseWheelHandler, { passive: false });
          }, n2.prototype.scrollHorizontally = function(t3) {
            if (!this._scrolling) {
              this._scrolling = true, this.$scroll_hor.scrollLeft = t3, this.$config.codeScrollLeft = t3, t3 = this.$scroll_hor.scrollLeft;
              for (var e3 = this._getLinkedViews(), n3 = 0; n3 < e3.length; n3++) e3[n3].scrollTo && e3[n3].scrollTo(t3, void 0);
              var i2 = this.$config.scrollPosition;
              this.$config.scrollPosition = t3, this.callEvent("onScroll", [i2, t3, this.$config.scroll]), this._scrolling = false;
            }
          }, n2.prototype.scrollVertically = function(t3) {
            if (!this._scrolling) {
              this._scrolling = true, this.$scroll_ver.scrollTop = t3, t3 = this.$scroll_ver.scrollTop;
              for (var e3 = this._getLinkedViews(), n3 = 0; n3 < e3.length; n3++) e3[n3].scrollTo && e3[n3].scrollTo(void 0, t3);
              var i2 = this.$config.scrollPosition;
              this.$config.scrollPosition = t3, this.callEvent("onScroll", [i2, t3, this.$config.scroll]), this._scrolling = false;
            }
          }, n2.prototype._isVertical = function() {
            return "y" == this.$config.scroll;
          }, n2.prototype._isHorizontal = function() {
            return "x" == this.$config.scroll;
          }, n2.prototype._scrollHorizontalHandler = function(t3) {
            if (!this._isVertical() && !this._scrolling) {
              if (/* @__PURE__ */ new Date() - (this._wheel_time || 0) < 100) return true;
              var e3 = this.$scroll_hor.scrollLeft;
              this.scrollHorizontally(e3), this._oldLeft = this.$scroll_hor.scrollLeft;
            }
          }, n2.prototype._outerScrollHorizontalHandler = function(t3) {
            this._isVertical();
          }, n2.prototype.show = function() {
            this.$parent.show();
          }, n2.prototype.hide = function() {
            this.$parent.hide();
          }, n2.prototype._getScrollSize = function() {
            for (var t3, e3 = 0, n3 = 0, i2 = this._isHorizontal(), r2 = this._getLinkedViews(), a2 = i2 ? "scrollWidth" : "scrollHeight", o2 = i2 ? "contentX" : "contentY", s2 = i2 ? "x" : "y", l = this._getScrollOffset(), c = 0; c < r2.length; c++) if ((t3 = r2[c]) && t3.$content && t3.$content.getSize && !t3.$config.hidden) {
              var u, d = t3.$content.getSize();
              if (u = d.hasOwnProperty(a2) ? d[a2] : d[o2], l) d[o2] > d[s2] && d[o2] > e3 && u > d[s2] - l + 2 && (e3 = u + (i2 ? 0 : 2), n3 = d[s2]);
              else {
                var h = Math.max(d[o2] - u, 0);
                (u += h) > Math.max(d[s2] - h, 0) && u > e3 && (e3 = u, n3 = d[s2]);
              }
            }
            return { outerScroll: n3, innerScroll: e3 };
          }, n2.prototype.scroll = function(t3) {
            this._isHorizontal() ? this.scrollHorizontally(t3) : this.scrollVertically(t3);
          }, n2.prototype.getScrollState = function() {
            return { visible: this.isVisible(), direction: this.$config.scroll, size: this.$config.outerSize, scrollSize: this.$config.scrollSize || 0, position: this.$config.scrollPosition || 0 };
          }, n2.prototype.setSize = function(e3, n3) {
            t2.prototype.setSize.apply(this, arguments);
            var i2 = this._getScrollSize(), r2 = (this._isVertical() ? n3 : e3) - this._getScrollOffset() + (this._isHorizontal() ? 1 : 0);
            i2.innerScroll && r2 > i2.outerScroll && (i2.innerScroll += r2 - i2.outerScroll), this.$config.scrollSize = i2.innerScroll, this.$config.width = e3, this.$config.height = n3, this._setScrollSize(i2.innerScroll);
          }, n2.prototype.isVisible = function() {
            return !(!this.$parent || !this.$parent.$view.parentNode);
          }, n2.prototype.shouldShow = function() {
            var t3 = this._getScrollSize();
            return !(!t3.innerScroll && this.$parent && this.$parent.$view.parentNode) && !(!t3.innerScroll || this.$parent && this.$parent.$view.parentNode);
          }, n2.prototype.shouldHide = function() {
            return !(this._getScrollSize().innerScroll || !this.$parent || !this.$parent.$view.parentNode);
          }, n2.prototype.toggleVisibility = function() {
            this.shouldHide() ? this.hide() : this.shouldShow() && this.show();
          }, n2.prototype._getScaleOffset = function(t3) {
            var e3 = 0;
            return !t3 || "timeline" != t3.$config.view && "grid" != t3.$config.view || (e3 = t3.$content.$getConfig().scale_height), e3;
          }, n2.prototype._getScrollOffset = function() {
            var t3 = 0;
            if (this._isVertical()) {
              var e3 = this.$parent.$parent;
              t3 = Math.max(this._getScaleOffset(e3.getPrevSibling(this.$parent.$id)), this._getScaleOffset(e3.getNextSibling(this.$parent.$id)));
            } else for (var n3 = this._getLinkedViews(), i2 = 0; i2 < n3.length; i2++) {
              var r2 = n3[i2].$parent.$cells, a2 = r2[r2.length - 1];
              if (a2 && "scrollbar" == a2.$config.view && false === a2.$config.hidden) {
                t3 = a2.$config.width;
                break;
              }
            }
            return t3 || 0;
          }, n2.prototype._setScrollSize = function(t3) {
            var e3 = this._isHorizontal() ? "width" : "height", n3 = this._isHorizontal() ? this.$scroll_hor : this.$scroll_ver, i2 = this._getScrollOffset(), a2 = n3.firstChild;
            i2 ? this._isVertical() ? (this.$config.outerSize = this.$config.height - i2 + 3, n3.style.height = this.$config.outerSize + "px", n3.style.top = i2 - 1 + "px", r.addClassName(n3, this.$parent._borders.top), r.addClassName(n3.parentNode, "gantt_task_vscroll")) : (this.$config.outerSize = this.$config.width - i2 + 1, n3.style.width = this.$config.outerSize + "px") : (n3.style.top = "auto", r.removeClassName(n3, this.$parent._borders.top), r.removeClassName(n3.parentNode, "gantt_task_vscroll"), this.$config.outerSize = this.$config.height), a2.style[e3] = t3 + "px";
          }, n2.prototype._scrollVerticalHandler = function(t3) {
            if (!this._scrollHorizontalHandler() && !this._scrolling) {
              var e3 = this.$scroll_ver.scrollTop;
              e3 != this._oldTop && (this.scrollVertically(e3), this._oldTop = this.$scroll_ver.scrollTop);
            }
          }, n2.prototype._outerScrollVerticalHandler = function(t3) {
            this._scrollHorizontalHandler();
          }, n2.prototype._checkWheelTarget = function(t3) {
            for (var e3 = this._getLinkedViews().concat(this), n3 = 0; n3 < e3.length; n3++) {
              var i2 = e3[n3].$view;
              if (r.isChildOf(t3, i2)) return true;
            }
            return false;
          }, n2.prototype._mouseWheelHandler = function(t3) {
            var n3 = t3.target || t3.srcElement;
            if (this._checkWheelTarget(n3)) {
              this._wheel_time = /* @__PURE__ */ new Date();
              var i2 = {}, r2 = { x: 1, y: 1 }, a2 = this.$gantt.config.wheel_scroll_sensitivity;
              "number" == typeof a2 && a2 ? r2 = { x: a2, y: a2 } : "[object Object]" == {}.toString.apply(a2) && (r2 = { x: a2.x, y: a2.y });
              var s2 = o.isFF, l = s2 ? t3.deltaX : t3.wheelDeltaX, c = s2 ? t3.deltaY : t3.wheelDelta, u = -20;
              s2 && (u = 0 !== t3.deltaMode ? -40 : -10);
              var d = s2 ? l * u * r2.x : 2 * l * r2.x, h = s2 ? c * u * r2.y : c * r2.y, f = this.$gantt.config.horizontal_scroll_key;
              if (false !== f && e2.indexOf(f) >= 0 && (!t3[f] || t3.deltaX || t3.wheelDeltaX || (d = 2 * h, h = 0)), d && Math.abs(d) > Math.abs(h)) {
                if (this._isVertical()) return;
                if (i2.x) return true;
                if (!this.$scroll_hor || !this.$scroll_hor.offsetWidth) return true;
                var _ = d / -40, g = this._oldLeft, p = g + 30 * _;
                if (this.scrollHorizontally(p), this.$scroll_hor.scrollLeft = p, g == this.$scroll_hor.scrollLeft) return true;
                this._oldLeft = this.$scroll_hor.scrollLeft;
              } else {
                if (this._isHorizontal()) return;
                if (i2.y) return true;
                if (!this.$scroll_ver || !this.$scroll_ver.offsetHeight) return true;
                _ = h / -40;
                void 0 === h && (_ = t3.detail);
                var v = this._oldTop, m = this.$scroll_ver.scrollTop + 30 * _;
                if (this.scrollVertically(m), this.$scroll_ver.scrollTop = m, v == this.$scroll_ver.scrollTop) return true;
                this._oldTop = this.$scroll_ver.scrollTop;
              }
              return t3.preventDefault && t3.preventDefault(), t3.cancelBubble = true, false;
            }
          }, n2;
        }(n(11));
        t.exports = s;
      }, function(t, e) {
        t.exports = { create: function() {
          return { render: function() {
          }, destroy: function() {
          } };
        } };
      }, function(t, e, n) {
        var i = n(213), r = n(216), a = n(217), o = n(218), s = n(219), l = n(220), c = n(221), u = n(0), d = n(1), h = n(4), f = n(222);
        function _(t2) {
          t2.config.editor_types = { text: new (r(t2))(), number: new (a(t2))(), select: new (o(t2))(), date: new (s(t2))(), predecessor: new (l(t2))(), duration: new (c(t2))() };
        }
        t.exports = function(t2) {
          var e2 = i(t2), n2 = {};
          h(n2);
          var r2 = { init: _, createEditors: function(i2) {
            function r3(t3, e3) {
              var n3 = i2.$getConfig(), r4 = function(t4, e4) {
                for (var n4 = i2.$getConfig(), r5 = i2.getItemTop(t4), a4 = i2.getItemHeight(t4), o4 = i2.getGridColumns(), s3 = 0, l3 = 0, c3 = 0, u2 = 0; u2 < o4.length; u2++) {
                  if (o4[u2].name == e4) {
                    c3 = o4[u2].width;
                    break;
                  }
                  n4.rtl ? l3 += o4[u2].width : s3 += o4[u2].width;
                }
                return n4.rtl ? { top: r5, right: l3, height: a4, width: c3 } : { top: r5, left: s3, height: a4, width: c3 };
              }(t3, e3), a3 = document.createElement("div");
              a3.className = "gantt_grid_editor_placeholder", a3.setAttribute(i2.$config.item_attribute, t3), a3.setAttribute(i2.$config.bind + "_id", t3), a3.setAttribute("data-column-name", e3);
              var o3 = function(t4, e4) {
                for (var n4 = t4.getGridColumns(), i3 = 0; i3 < n4.length; i3++) if (n4[i3].name == e4) return i3;
                return 0;
              }(i2, e3);
              return a3.setAttribute("data-column-index", o3), n3.rtl ? a3.style.cssText = ["top:" + r4.top + "px", "right:" + r4.right + "px", "width:" + r4.width + "px", "height:" + r4.height + "px"].join(";") : a3.style.cssText = ["top:" + r4.top + "px", "left:" + r4.left + "px", "width:" + r4.width + "px", "height:" + r4.height + "px"].join(";"), a3;
            }
            var a2 = f(t2), o2 = [], s2 = [], l2 = null, c2 = { _itemId: null, _columnName: null, _editor: null, _editorType: null, _placeholder: null, locateCell: function(t3) {
              if (!d.isChildOf(t3, i2.$grid)) return null;
              var e3 = d.locateAttribute(t3, i2.$config.item_attribute), n3 = d.locateAttribute(t3, "data-column-name");
              if (e3 && n3) {
                var r4 = n3.getAttribute("data-column-name");
                return { id: e3.getAttribute(i2.$config.item_attribute), columnName: r4 };
              }
              return null;
            }, getEditorConfig: function(t3) {
              return i2.getColumn(t3).editor;
            }, init: function() {
              var n3 = e2.getMapping();
              n3.init && n3.init(this, i2), l2 = i2.$gantt.getDatastore(i2.$config.bind);
              var r4 = this;
              o2.push(l2.attachEvent("onIdChange", function(t3, e3) {
                r4._itemId == t3 && (r4._itemId = e3);
              })), o2.push(l2.attachEvent("onStoreUpdated", function() {
                i2.$gantt.getState("batchUpdate").batch_update || r4.isVisible() && !l2.isVisible(r4._itemId) && r4.hide();
              })), s2.push(t2.attachEvent("onDataRender", function() {
                r4._editor && r4._placeholder && !d.isChildOf(r4._placeholder, t2.$root) && i2.$grid_data.appendChild(r4._placeholder);
              })), this.init = function() {
              };
            }, getState: function() {
              return { editor: this._editor, editorType: this._editorType, placeholder: this._placeholder, id: this._itemId, columnName: this._columnName };
            }, startEdit: function(e3, n3) {
              if (this.isVisible() && this.save(), l2.exists(e3)) {
                var i3 = { id: e3, columnName: n3 };
                t2.isReadonly(l2.getItem(e3)) ? this.callEvent("onEditPrevent", [i3]) : false !== this.callEvent("onBeforeEditStart", [i3]) ? (this.show(i3.id, i3.columnName), this.setValue(), this.callEvent("onEditStart", [i3])) : this.callEvent("onEditPrevent", [i3]);
              }
            }, isVisible: function() {
              return !(!this._editor || !d.isChildOf(this._placeholder, t2.$root));
            }, show: function(t3, n3) {
              this.isVisible() && this.save();
              var a3 = { id: t3, columnName: n3 }, o3 = i2.getColumn(a3.columnName), s3 = this.getEditorConfig(o3.name);
              if (s3) {
                var l3 = i2.$getConfig().editor_types[s3.type], c3 = r3(a3.id, a3.columnName);
                i2.$grid_data.appendChild(c3), l3.show(a3.id, o3, s3, c3), this._editor = l3, this._placeholder = c3, this._itemId = a3.id, this._columnName = a3.columnName, this._editorType = s3.type;
                var u2 = e2.getMapping();
                u2.onShow && u2.onShow(this, c3, i2);
              }
            }, setValue: function() {
              var t3 = this.getState(), e3 = t3.id, n3 = t3.columnName, r4 = i2.getColumn(n3), a3 = l2.getItem(e3), o3 = this.getEditorConfig(n3);
              if (o3) {
                var s3 = a3[o3.map_to];
                "auto" == o3.map_to && (s3 = l2.getItem(e3)), this._editor.set_value(s3, e3, r4, this._placeholder), this.focus();
              }
            }, focus: function() {
              this._editor.focus(this._placeholder);
            }, getValue: function() {
              var t3 = i2.getColumn(this._columnName);
              return this._editor.get_value(this._itemId, t3, this._placeholder);
            }, _getItemValue: function() {
              var e3 = this.getEditorConfig(this._columnName);
              if (e3) {
                var n3 = t2.getTask(this._itemId)[e3.map_to];
                return "auto" == e3.map_to && (n3 = l2.getItem(this._itemId)), n3;
              }
            }, isChanged: function() {
              var t3 = i2.getColumn(this._columnName), e3 = this._getItemValue();
              return this._editor.is_changed(e3, this._itemId, t3, this._placeholder);
            }, hide: function() {
              if (this._itemId) {
                var t3 = this._itemId, n3 = this._columnName, r4 = e2.getMapping();
                r4.onHide && r4.onHide(this, this._placeholder, i2), this._itemId = null, this._columnName = null, this._editorType = null, this._placeholder && (this._editor && this._editor.hide && this._editor.hide(this._placeholder), this._editor = null, this._placeholder.parentNode && this._placeholder.parentNode.removeChild(this._placeholder), this._placeholder = null, this.callEvent("onEditEnd", [{ id: t3, columnName: n3 }]));
              }
            }, save: function() {
              if (this.isVisible() && l2.exists(this._itemId) && this.isChanged()) {
                var e3 = this._itemId, n3 = this._columnName;
                if (l2.exists(e3)) {
                  var r4 = l2.getItem(e3), o3 = this.getEditorConfig(n3), s3 = { id: e3, columnName: n3, newValue: this.getValue(), oldValue: this._getItemValue() };
                  if (false !== this.callEvent("onBeforeSave", [s3]) && (!this._editor.is_valid || this._editor.is_valid(s3.newValue, s3.id, s3.columnName, this._placeholder))) {
                    var c3 = o3.map_to, u2 = s3.newValue;
                    "auto" != c3 ? (r4[c3] = u2, a2(r4, c3, t2.config.inline_editors_date_processing), l2.updateItem(e3)) : this._editor.save(e3, i2.getColumn(n3), this._placeholder), this.callEvent("onSave", [s3]);
                  }
                  this.hide();
                }
              } else this.hide();
            }, _findEditableCell: function(t3, e3) {
              var n3 = t3, r4 = i2.getGridColumns()[n3], a3 = r4 ? r4.name : null;
              if (a3) {
                for (; a3 && !this.getEditorConfig(a3); ) a3 = this._findEditableCell(t3 + e3, e3);
                return a3;
              }
              return null;
            }, getNextCell: function(t3) {
              return this._findEditableCell(i2.getColumnIndex(this._columnName, true) + t3, t3);
            }, getFirstCell: function() {
              return this._findEditableCell(0, 1);
            }, getLastCell: function() {
              return this._findEditableCell(i2.getGridColumns().length - 1, -1);
            }, editNextCell: function(t3) {
              var e3 = this.getNextCell(1);
              if (e3) {
                var n3 = this.getNextCell(1);
                n3 && this.getEditorConfig(n3) && this.startEdit(this._itemId, n3);
              } else if (t3 && this.moveRow(1)) {
                var i3 = this.moveRow(1);
                (e3 = this.getFirstCell()) && this.getEditorConfig(e3) && this.startEdit(i3, e3);
              }
            }, editPrevCell: function(t3) {
              var e3 = this.getNextCell(-1);
              if (e3) {
                var n3 = this.getNextCell(-1);
                n3 && this.getEditorConfig(n3) && this.startEdit(this._itemId, n3);
              } else if (t3 && this.moveRow(-1)) {
                var i3 = this.moveRow(-1);
                (e3 = this.getLastCell()) && this.getEditorConfig(e3) && this.startEdit(i3, e3);
              }
            }, moveRow: function(e3) {
              for (var n3 = e3 > 0 ? t2.getNext : t2.getPrev, i3 = (n3 = t2.bind(n3, t2))(this._itemId); t2.isTaskExists(i3) && t2.isReadonly(t2.getTask(i3)); ) i3 = n3(i3);
              return i3;
            }, editNextRow: function(e3) {
              var n3 = this.getState().id;
              if (t2.isTaskExists(n3)) {
                var i3 = null;
                i3 = e3 ? this.moveRow(1) : t2.getNext(n3), t2.isTaskExists(i3) && this.startEdit(i3, this._columnName);
              }
            }, editPrevRow: function(e3) {
              var n3 = this.getState().id;
              if (t2.isTaskExists(n3)) {
                var i3 = null;
                i3 = e3 ? this.moveRow(-1) : t2.getPrev(n3), t2.isTaskExists(i3) && this.startEdit(i3, this._columnName);
              }
            }, destructor: function() {
              o2.forEach(function(t3) {
                l2.detachEvent(t3);
              }), s2.forEach(function(e3) {
                t2.detachEvent(e3);
              }), o2 = [], s2 = [], l2 = null, this.hide(), this.detachAllEvents();
            } };
            return u.mixin(c2, e2), u.mixin(c2, n2), c2;
          } };
          return u.mixin(r2, e2), u.mixin(r2, n2), r2;
        };
      }, function(t, e, n) {
        var i = n(214), r = n(215);
        t.exports = function(t2) {
          var e2 = null;
          return { setMapping: function(t3) {
            e2 = t3;
          }, getMapping: function() {
            return e2 || (t2.config.keyboard_navigation_cells && t2.ext.keyboardNavigation ? r : i);
          } };
        };
      }, function(t, e) {
        t.exports = { init: function(t2, e2) {
          var n = e2.$gantt;
          n.attachEvent("onTaskClick", function(e3, i) {
            if (n._is_icon_open_click(i)) return true;
            var r = t2.getState(), a = t2.locateCell(i.target);
            return !a || !t2.getEditorConfig(a.columnName) || (t2.isVisible() && r.id == a.id && r.columnName == a.columnName || t2.startEdit(a.id, a.columnName), false);
          }), n.attachEvent("onEmptyClick", function() {
            return t2.isVisible() && t2.isChanged() ? t2.save() : t2.hide(), true;
          }), n.attachEvent("onTaskDblClick", function(e3, n2) {
            var i = t2.getState(), r = t2.locateCell(n2.target);
            return !r || !t2.isVisible() || r.columnName != i.columnName;
          });
        }, onShow: function(t2, e2, n) {
          var i = n.$gantt;
          i.ext && i.ext.keyboardNavigation && i.ext.keyboardNavigation.attachEvent("onKeyDown", function(e3, n2) {
            var r = i.constants.KEY_CODES, a = false;
            switch (n2.keyCode) {
              case r.SPACE:
                t2.isVisible() && (a = true);
            }
            return !a;
          });
          e2.onkeydown = function(e3) {
            e3 = e3 || window.event;
            var n2 = i.constants.KEY_CODES;
            if (!(e3.defaultPrevented || e3.shiftKey && e3.keyCode != n2.TAB)) {
              var r = true;
              switch (e3.keyCode) {
                case i.keys.edit_save:
                  t2.save();
                  break;
                case i.keys.edit_cancel:
                  t2.hide();
                  break;
                case n2.UP:
                case n2.DOWN:
                  t2.isVisible() && (t2.hide(), r = false);
                  break;
                case n2.TAB:
                  e3.shiftKey ? t2.editPrevCell(true) : t2.editNextCell(true);
                  break;
                default:
                  r = false;
              }
              r && e3.preventDefault();
            }
          };
        }, onHide: function() {
        }, destroy: function() {
        } };
      }, function(t, e) {
        t.exports = { init: function(t2, e2) {
          var n = t2, i = e2.$gantt, r = null, a = i.ext.keyboardNavigation;
          a.attachEvent("onBeforeFocus", function(e3) {
            var i2 = t2.locateCell(e3);
            if (clearTimeout(r), i2) {
              var a2 = i2.columnName, o = i2.id, s = n.getState();
              if (n.isVisible() && s.id == o && s.columnName === a2) return false;
            }
            return true;
          }), a.attachEvent("onFocus", function(e3) {
            var i2 = t2.locateCell(e3), a2 = t2.getState();
            return clearTimeout(r), !i2 || i2.id == a2.id && i2.columnName == a2.columnName || n.isVisible() && n.save(), true;
          }), t2.attachEvent("onHide", function() {
            clearTimeout(r);
          }), a.attachEvent("onBlur", function() {
            return r = setTimeout(function() {
              n.save();
            }), true;
          }), i.attachEvent("onTaskDblClick", function(e3, n2) {
            var i2 = t2.getState(), r2 = t2.locateCell(n2.target);
            return !r2 || !t2.isVisible() || r2.columnName != i2.columnName;
          }), i.attachEvent("onTaskClick", function(e3, n2) {
            if (i._is_icon_open_click(n2)) return true;
            var r2 = t2.getState(), a2 = t2.locateCell(n2.target);
            return !a2 || !t2.getEditorConfig(a2.columnName) || (t2.isVisible() && r2.id == a2.id && r2.columnName == a2.columnName || t2.startEdit(a2.id, a2.columnName), false);
          }), i.attachEvent("onEmptyClick", function() {
            return n.save(), true;
          }), a.attachEvent("onKeyDown", function(e3, r2) {
            var o = t2.locateCell(r2.target), s = !!o && t2.getEditorConfig(o.columnName), l = t2.getState(), c = i.constants.KEY_CODES, u = r2.keyCode, d = false;
            switch (u) {
              case c.ENTER:
                t2.isVisible() ? (t2.save(), r2.preventDefault(), d = true) : s && !(r2.ctrlKey || r2.metaKey || r2.shiftKey) && (n.startEdit(o.id, o.columnName), r2.preventDefault(), d = true);
                break;
              case c.ESC:
                t2.isVisible() && (t2.hide(), r2.preventDefault(), d = true);
                break;
              case c.UP:
              case c.DOWN:
                break;
              case c.LEFT:
              case c.RIGHT:
                (s && t2.isVisible() || "date" === l.editorType) && (d = true);
                break;
              case c.SPACE:
                t2.isVisible() && (d = true), s && !t2.isVisible() && (n.startEdit(o.id, o.columnName), r2.preventDefault(), d = true);
                break;
              case c.DELETE:
                s && !t2.isVisible() ? (n.startEdit(o.id, o.columnName), d = true) : s && t2.isVisible() && (d = true);
                break;
              case c.TAB:
                if (t2.isVisible()) {
                  r2.shiftKey ? t2.editPrevCell(true) : t2.editNextCell(true);
                  var h = t2.getState();
                  h.id && a.focus({ type: "taskCell", id: h.id, column: h.columnName }), r2.preventDefault(), d = true;
                }
                break;
              default:
                if (t2.isVisible()) d = true;
                else if (u >= 48 && u <= 57 || u > 95 && u < 112 || u >= 64 && u <= 91 || u > 185 && u < 193 || u > 218 && u < 223) {
                  var f = e3.modifiers, _ = f.alt || f.ctrl || f.meta || f.shift;
                  f.alt || _ && a.getCommandHandler(e3, "taskCell") || s && !t2.isVisible() && (n.startEdit(o.id, o.columnName), d = true);
                }
            }
            return !d;
          });
        }, onShow: function(t2, e2, n) {
        }, onHide: function(t2, e2, n) {
          n.$gantt.focus();
        }, destroy: function() {
        } };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return n(3)(r, e2), i.mixin(r.prototype, { show: function(t3, e3, n2, i2) {
            var r2 = "<div><input type='text' name='" + e3.name + "'></div>";
            i2.innerHTML = r2;
          } }, true), r;
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return n(3)(r, e2), i.mixin(r.prototype, { show: function(t3, e3, n2, i2) {
            var r2 = "<div><input type='number' min='" + (n2.min || 0) + "' max='" + (n2.max || 100) + "' name='" + e3.name + "'></div>";
            i2.innerHTML = r2;
          }, get_value: function(t3, e3, n2) {
            return this.get_input(n2).value || "";
          }, is_valid: function(t3, e3, n2, i2) {
            return !isNaN(parseInt(t3, 10));
          } }, true), r;
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return n(3)(r, e2), i.mixin(r.prototype, { show: function(t3, e3, n2, i2) {
            for (var r2 = "<div><select name='" + e3.name + "'>", a = [], o = n2.options || [], s = 0; s < o.length; s++) a.push("<option value='" + n2.options[s].key + "'>" + o[s].label + "</option>");
            r2 += a.join("") + "</select></div>", i2.innerHTML = r2;
          }, get_input: function(t3) {
            return t3.querySelector("select");
          } }, true), r;
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0), r = "%Y-%m-%d", a = null, o = null;
          function s() {
            return e2.apply(this, arguments) || this;
          }
          return n(3)(s, e2), i.mixin(s.prototype, { show: function(e3, n2, i2, s2) {
            a || (a = t2.date.date_to_str(r)), o || (o = t2.date.str_to_date(r));
            var l = null, c = null;
            l = "function" == typeof i2.min ? i2.min(e3, n2) : i2.min, c = "function" == typeof i2.max ? i2.max(e3, n2) : i2.max;
            var u = "<div style='width:140px'><input type='date' " + (l ? " min='" + a(l) + "' " : "") + (c ? " max='" + a(c) + "' " : "") + " name='" + n2.name + "'></div>";
            s2.innerHTML = u;
          }, set_value: function(t3, e3, n2, i2) {
            t3 && t3.getFullYear ? this.get_input(i2).value = a(t3) : this.get_input(i2).value = t3;
          }, is_valid: function(t3, e3, n2, i2) {
            return !(!t3 || isNaN(t3.getTime()));
          }, get_value: function(t3, e3, n2) {
            var i2;
            try {
              i2 = o(this.get_input(n2).value || "");
            } catch (t4) {
              i2 = null;
            }
            return i2;
          } }, true), s;
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          function a(e3) {
            return e3.formatter || t2.ext.formatters.linkFormatter();
          }
          function o(t3, e3) {
            for (var n2 = (t3 || "").split(e3.delimiter || ","), i2 = 0; i2 < n2.length; i2++) {
              var r2 = n2[i2].trim();
              r2 ? n2[i2] = r2 : (n2.splice(i2, 1), i2--);
            }
            return n2.sort(), n2;
          }
          function s(t3, e3, n2) {
            for (var i2 = t3.$target, r2 = [], o2 = 0; o2 < i2.length; o2++) {
              var s2 = n2.getLink(i2[o2]);
              r2.push(a(e3).format(s2));
            }
            return r2.join((e3.delimiter || ",") + " ");
          }
          function l(t3) {
            return t3.source + "_" + t3.target + "_" + t3.type + "_" + (t3.lag || 0);
          }
          function c(e3, n2, i2) {
            var r2 = function(e4, n3, i3) {
              var r3 = [];
              return n3.forEach(function(n4) {
                var o3 = a(i3).parse(n4);
                o3 && (o3.target = e4, o3.id = "predecessor_generated", t2.isLinkAllowed(o3) && (o3.id = void 0, r3.push(o3)));
              }), r3;
            }(e3.id, n2, i2), o2 = {};
            e3.$target.forEach(function(e4) {
              var n3 = t2.getLink(e4);
              o2[l(n3)] = n3.id;
            });
            var s2 = [];
            r2.forEach(function(t3) {
              var e4 = l(t3);
              o2[e4] ? delete o2[e4] : s2.push(t3);
            });
            var c2 = [];
            for (var u in o2) c2.push(o2[u]);
            return { add: s2, remove: c2 };
          }
          return n(3)(r, e2), i.mixin(r.prototype, { show: function(t3, e3, n2, i2) {
            var r2 = "<div><input type='text' name='" + e3.name + "'></div>";
            i2.innerHTML = r2;
          }, hide: function() {
          }, set_value: function(e3, n2, i2, r2) {
            this.get_input(r2).value = s(e3, i2.editor, t2);
          }, get_value: function(t3, e3, n2) {
            return o(this.get_input(n2).value || "", e3.editor);
          }, save: function(e3, n2, i2) {
            var r2 = c(t2.getTask(e3), this.get_value(e3, n2, i2), n2.editor);
            (r2.add.length || r2.remove.length) && t2.batchUpdate(function() {
              r2.add.forEach(function(e4) {
                t2.addLink(e4);
              }), r2.remove.forEach(function(e4) {
                t2.deleteLink(e4);
              }), t2.autoSchedule && t2.autoSchedule();
            });
          }, is_changed: function(e3, n2, i2, r2) {
            var a2 = this.get_value(n2, i2, r2), l2 = o(s(e3, i2.editor, t2), i2.editor);
            return a2.join() !== l2.join();
          } }, true), r;
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          var e2 = n(8)(t2), i = n(0);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          function a(e3) {
            return e3.formatter || t2.ext.formatters.durationFormatter();
          }
          return n(3)(r, e2), i.mixin(r.prototype, { show: function(t3, e3, n2, i2) {
            var r2 = "<div><input type='text' name='" + e3.name + "'></div>";
            i2.innerHTML = r2;
          }, set_value: function(t3, e3, n2, i2) {
            this.get_input(i2).value = a(n2.editor).format(t3);
          }, get_value: function(t3, e3, n2) {
            return a(e3.editor).parse(this.get_input(n2).value || "");
          } }, true), r;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          return function(n, i, r) {
            "keepDates" == r ? function(e3, n2) {
              "duration" == n2 ? e3.end_date = t2.calculateEndDate(e3) : "end_date" != n2 && "start_date" != n2 || (e3.duration = t2.calculateDuration(e3));
            }(n, i) : "keepDuration" == r ? function(n2, i2) {
              "end_date" == i2 ? n2.start_date = e2(n2) : "start_date" != i2 && "duration" != i2 || (n2.end_date = t2.calculateEndDate(n2));
            }(n, i) : function(n2, i2) {
              t2.config.schedule_from_end ? "end_date" == i2 || "duration" == i2 ? n2.start_date = e2(n2) : "start_date" == i2 && (n2.duration = t2.calculateDuration(n2)) : "start_date" == i2 || "duration" == i2 ? n2.end_date = t2.calculateEndDate(n2) : "end_date" == i2 && (n2.duration = t2.calculateDuration(n2));
            }(n, i);
          };
          function e2(e3) {
            return t2.calculateEndDate({ start_date: e3.end_date, duration: -e3.duration, task: e3 });
          }
        };
      }, function(t, e, n) {
        var i = n(23), r = n(5), a = n(24);
        t.exports = function(t2) {
          return { render: a(t2), update: null, isInViewPort: i, getVisibleRange: r };
        };
      }, function(t, e, n) {
        var i = n(24), r = n(225), a = n(5);
        t.exports = function(t2) {
          var e2 = i(t2);
          return { render: function(n2, i2) {
            if (t2.isSplitTask(n2) && (t2.config.open_split_tasks && !n2.$open || !t2.config.open_split_tasks)) {
              var r2 = document.createElement("div"), a2 = t2.getTaskPosition(n2);
              return t2.hasChild(n2.id) && t2.eachTask(function(o) {
                var s = t2.isSummaryTask(o);
                if (s && t2.resetProjectDates(o), !o.hide_bar) {
                  var l = e2(o, i2);
                  if (l) {
                    var c = i2.getBarHeight(n2.id, o.type == t2.config.types.milestone), u = Math.floor((i2.getItemHeight(n2.id) - c) / 2);
                    l.style.top = a2.top + u + "px", l.classList.add("gantt_split_child"), s && l.classList.add("gantt_split_subproject"), r2.appendChild(l);
                  }
                }
              }, n2.id), r2;
            }
            return false;
          }, update: null, isInViewPort: r, getVisibleRange: a };
        };
      }, function(t, e, n) {
        var i = n(23);
        t.exports = function(t2, e2, n2, r, a) {
          if (!a.isSplitTask(t2)) return false;
          var o = a.getSubtaskDates(t2.id);
          return i({ id: t2.id, start_date: o.start_date, end_date: o.end_date, parent: t2.parent }, e2, n2, a);
        };
      }, function(t, e, n) {
        var i = n(24), r = n(23), a = n(5);
        t.exports = function(t2) {
          var e2 = i(t2);
          return { render: function(n2, i2) {
            if (n2.$rollup && n2.$rollup.length) {
              var r2 = document.createElement("div"), a2 = t2.getTaskPosition(n2);
              return n2.$rollup.forEach(function(o) {
                var s = t2.getTask(o), l = e2(s, i2);
                if (l) {
                  var c = i2.getBarHeight(n2.id, s.type == t2.config.types.milestone), u = Math.floor((i2.getItemHeight(n2.id) - c) / 2);
                  l.style.top = a2.top + u + "px", l.classList.add("gantt_rollup_child"), r2.appendChild(l);
                }
              }), r2;
            }
            return false;
          }, update: null, isInViewPort: r, getVisibleRange: a };
        };
      }, function(t, e, n) {
        var i = n(25), r = n(14), a = n(5), o = n(26), s = n(27);
        t.exports = function(t2) {
          var e2 = {}, n2 = {};
          function l(t3, n3) {
            return !(!e2[t3.id][n3] || !e2[t3.id][n3].parentNode);
          }
          function c(t3, n3) {
            e2[t3] && e2[t3][n3] && e2[t3][n3].parentNode && e2[t3][n3].parentNode.removeChild(e2[t3][n3]);
          }
          function u(t3) {
            var e3, n3 = t3.$getTemplates();
            return void 0 !== n3.task_cell_class ? (e3 = n3.task_cell_class, (console.warn || console.log)("gantt.templates.task_cell_class template is deprecated and will be removed soon. Please use gantt.templates.timeline_cell_class instead.")) : e3 = n3.timeline_cell_class, e3;
          }
          function d(i2, r2, a2, o2, l2, c2, u2) {
            var d2 = i2.width[r2], h = "";
            if (s(r2, i2, o2, t2)) {
              var f = c2(a2, i2.trace_x[r2]);
              if (u2.static_background && (!u2.static_background_cells || !f)) return null;
              if (e2[a2.id][r2]) return n2[a2.id][r2] = r2, e2[a2.id][r2];
              var _ = document.createElement("div");
              return _.style.width = d2 + "px", h = "gantt_task_cell" + (r2 == l2 - 1 ? " gantt_last_cell" : ""), f && (h += " " + f), _.className = h, _.style.position = "absolute", _.style.left = i2.left[r2] + "px", e2[a2.id][r2] = _, n2[a2.id][r2] = r2, _;
            }
            return null;
          }
          return { render: function(i2, a2, s2, l2) {
            var c2 = a2.$getTemplates(), h = a2.getScale(), f = h.count;
            if (s2.static_background && !s2.static_background_cells) return null;
            var _, g = document.createElement("div"), p = u(a2);
            if (_ = l2 && s2.smart_rendering && !r(t2) ? o(h, l2.x) : { start: 0, end: f - 1 }, s2.show_task_cells) {
              e2[i2.id] = {}, n2[i2.id] = {};
              for (var v = _.start; v <= _.end; v++) {
                var m = d(h, v, i2, l2, f, p, s2);
                m && g.appendChild(m);
              }
            }
            var y = t2.getGlobalTaskIndex(i2.id) % 2 != 0, k = c2.task_row_class(i2.start_date, i2.end_date, i2), b = "gantt_task_row" + (y ? " odd" : "") + (k ? " " + k : "");
            return a2.$config.rowStore.isSelected(i2.id) && (b += " gantt_selected"), g.className = b, s2.smart_rendering ? (g.style.position = "absolute", g.style.top = a2.getItemTop(i2.id) + "px", g.style.width = "100%") : g.style.position = "relative", g.style.height = a2.getItemHeight(i2.id) + "px", a2.$config.item_attribute && (g.setAttribute(a2.$config.item_attribute, i2.id), g.setAttribute(a2.$config.bind + "_id", i2.id)), g;
          }, update: function(t3, i2, r2, a2, s2) {
            var h = r2.getScale(), f = h.count, _ = u(r2);
            if (a2.show_task_cells) {
              e2[t3.id] || (e2[t3.id] = {}), n2[t3.id] || (n2[t3.id] = {});
              var g = o(h, s2);
              for (var p in n2[t3.id]) {
                var v = n2[t3.id][p];
                (Number(v) < g.start || Number(v) > g.end) && c(t3.id, v);
              }
              n2[t3.id] = {};
              for (var m = g.start; m <= g.end; m++) {
                var y = d(h, m, t3, s2, f, _, a2);
                !y && l(t3, m) ? c(t3.id, m) : y && !y.parentNode && i2.appendChild(y);
              }
            }
          }, getRectangle: i, getVisibleRange: a };
        };
      }, function(t, e, n) {
        var i = n(229);
        t.exports = function(t2) {
          var e2 = { current_pos: null, dirs: { left: "left", right: "right", up: "up", down: "down" }, path: [], clear: function() {
            this.current_pos = null, this.path = [];
          }, point: function(e3) {
            this.current_pos = t2.copy(e3);
          }, get_lines: function(t3) {
            this.clear(), this.point(t3[0]);
            for (var e3 = 1; e3 < t3.length; e3++) this.line_to(t3[e3]);
            return this.get_path();
          }, line_to: function(e3) {
            var n3 = t2.copy(e3), i2 = this.current_pos, r2 = this._get_line(i2, n3);
            this.path.push(r2), this.current_pos = n3;
          }, get_path: function() {
            return this.path;
          }, get_wrapper_sizes: function(t3, e3, n3) {
            var i2, r2 = e3.$getConfig().link_wrapper_width, a = t3.y - r2 / 2;
            switch (t3.direction) {
              case this.dirs.left:
                i2 = { top: a, height: r2, lineHeight: r2, left: t3.x - t3.size - r2 / 2, width: t3.size + r2 };
                break;
              case this.dirs.right:
                i2 = { top: a, lineHeight: r2, height: r2, left: t3.x - r2 / 2, width: t3.size + r2 };
                break;
              case this.dirs.up:
                i2 = { top: a - t3.size, lineHeight: t3.size + r2, height: t3.size + r2, left: t3.x - r2 / 2, width: r2 };
                break;
              case this.dirs.down:
                i2 = { top: a, lineHeight: t3.size + r2, height: t3.size + r2, left: t3.x - r2 / 2, width: r2 };
            }
            return i2;
          }, get_line_sizes: function(t3, e3) {
            var n3, i2 = e3.$getConfig(), r2 = i2.link_line_width, a = i2.link_wrapper_width, o = t3.size + r2;
            switch (t3.direction) {
              case this.dirs.left:
              case this.dirs.right:
                n3 = { height: r2, width: o, marginTop: (a - r2) / 2, marginLeft: (a - r2) / 2 };
                break;
              case this.dirs.up:
              case this.dirs.down:
                n3 = { height: o, width: r2, marginTop: (a - r2) / 2, marginLeft: (a - r2) / 2 };
            }
            return n3;
          }, render_line: function(t3, e3, n3, i2) {
            var r2 = this.get_wrapper_sizes(t3, n3, i2), a = document.createElement("div");
            a.style.cssText = ["top:" + r2.top + "px", "left:" + r2.left + "px", "height:" + r2.height + "px", "width:" + r2.width + "px"].join(";"), a.className = "gantt_line_wrapper";
            var o = this.get_line_sizes(t3, n3), s = document.createElement("div");
            return s.style.cssText = ["height:" + o.height + "px", "width:" + o.width + "px", "margin-top:" + o.marginTop + "px", "margin-left:" + o.marginLeft + "px"].join(";"), s.className = "gantt_link_line_" + t3.direction, a.appendChild(s), a;
          }, _get_line: function(t3, e3) {
            var n3 = this.get_direction(t3, e3), i2 = { x: t3.x, y: t3.y, direction: this.get_direction(t3, e3) };
            return n3 == this.dirs.left || n3 == this.dirs.right ? i2.size = Math.abs(t3.x - e3.x) : i2.size = Math.abs(t3.y - e3.y), i2;
          }, get_direction: function(t3, e3) {
            return e3.x < t3.x ? this.dirs.left : e3.x > t3.x ? this.dirs.right : e3.y > t3.y ? this.dirs.down : this.dirs.up;
          } }, n2 = { path: [], clear: function() {
            this.path = [];
          }, current: function() {
            return this.path[this.path.length - 1];
          }, point: function(e3) {
            return e3 ? (this.path.push(t2.copy(e3)), e3) : this.current();
          }, point_to: function(n3, i2, r2) {
            r2 = r2 ? { x: r2.x, y: r2.y } : t2.copy(this.point());
            var a = e2.dirs;
            switch (n3) {
              case a.left:
                r2.x -= i2;
                break;
              case a.right:
                r2.x += i2;
                break;
              case a.up:
                r2.y -= i2;
                break;
              case a.down:
                r2.y += i2;
            }
            return this.point(r2);
          }, get_points: function(n3, i2, r2, a) {
            var o = this.get_endpoint(n3, i2, r2, a), s = t2.config, l = o.e_y - o.y, c = o.e_x - o.x, u = e2.dirs, d = i2.getItemHeight(n3.source);
            this.clear(), this.point({ x: o.x, y: o.y });
            var h = 2 * s.link_arrow_size, f = this.get_line_type(n3, i2.$getConfig()), _ = o.e_x > o.x;
            if (f.from_start && f.to_start) this.point_to(u.left, h), _ ? (this.point_to(u.down, l), this.point_to(u.right, c)) : (this.point_to(u.right, c), this.point_to(u.down, l)), this.point_to(u.right, h);
            else if (!f.from_start && f.to_start) if (_ = o.e_x > o.x + 2 * h, this.point_to(u.right, h), _) c -= h, this.point_to(u.down, l), this.point_to(u.right, c);
            else {
              c -= 2 * h;
              var g = l > 0 ? 1 : -1;
              this.point_to(u.down, g * (d / 2)), this.point_to(u.right, c), this.point_to(u.down, g * (Math.abs(l) - d / 2)), this.point_to(u.right, h);
            }
            else f.from_start || f.to_start ? f.from_start && !f.to_start && (_ = o.e_x > o.x - 2 * h, this.point_to(u.left, h), _ ? (c += 2 * h, g = l > 0 ? 1 : -1, this.point_to(u.down, g * (d / 2)), this.point_to(u.right, c), this.point_to(u.down, g * (Math.abs(l) - d / 2)), this.point_to(u.left, h)) : (c += h, this.point_to(u.down, l), this.point_to(u.right, c))) : (this.point_to(u.right, h), _ ? (this.point_to(u.right, c), this.point_to(u.down, l)) : (this.point_to(u.down, l), this.point_to(u.right, c)), this.point_to(u.left, h));
            return this.path;
          }, get_line_type: function(e3, n3) {
            var i2 = n3.links, r2 = false, a = false;
            return e3.type == i2.start_to_start ? r2 = a = true : e3.type == i2.finish_to_finish ? r2 = a = false : e3.type == i2.finish_to_start ? (r2 = false, a = true) : e3.type == i2.start_to_finish ? (r2 = true, a = false) : t2.assert(false, "Invalid link type"), n3.rtl && (r2 = !r2, a = !a), { from_start: r2, to_start: a };
          }, get_endpoint: function(t3, e3, n3, i2) {
            var a = e3.$getConfig(), o = this.get_line_type(t3, a), s = o.from_start, l = o.to_start, c = r(n3, e3, a), u = r(i2, e3, a);
            return { x: s ? c.left : c.left + c.width, e_x: l ? u.left : u.left + u.width, y: c.top + c.rowHeight / 2 - 1, e_y: u.top + u.rowHeight / 2 - 1 };
          } };
          function r(e3, n3, i2) {
            var r2 = n3.getItemPosition(e3);
            if (t2.getTaskType(e3.type) == i2.types.milestone) {
              var a = n3.getBarHeight(e3.id, true), o = Math.sqrt(2 * a * a);
              r2.left -= o / 2, r2.width = o;
            }
            return r2;
          }
          return { render: function(i2, r2, a) {
            var o = t2.getTask(i2.source);
            if (!o.hide_bar) {
              var s = t2.getTask(i2.target);
              if (!s.hide_bar) {
                var l = n2.get_endpoint(i2, r2, o, s), c = l.e_y - l.y;
                if (!(l.e_x - l.x || c)) return null;
                var u = n2.get_points(i2, r2, o, s), d = e2.get_lines(u, r2), h = document.createElement("div"), f = "gantt_task_link";
                i2.color && (f += " gantt_link_inline_color");
                var _ = t2.templates.link_class ? t2.templates.link_class(i2) : "";
                _ && (f += " " + _), a.highlight_critical_path && t2.isCriticalLink && t2.isCriticalLink(i2) && (f += " gantt_critical_link"), h.className = f, r2.$config.link_attribute && (h.setAttribute(r2.$config.link_attribute, i2.id), h.setAttribute("link_id", i2.id));
                for (var g = 0; g < d.length; g++) {
                  g == d.length - 1 && (d[g].size -= a.link_arrow_size);
                  var p = e2.render_line(d[g], d[g + 1], r2, i2.source);
                  i2.color && (p.firstChild.style.backgroundColor = i2.color), h.appendChild(p);
                }
                var v = d[d.length - 1].direction, m = function(t3, n3, i3, r3) {
                  var a2 = i3.$getConfig(), o2 = document.createElement("div"), s2 = t3.y, l2 = t3.x, c2 = a2.link_arrow_size, u2 = "gantt_link_arrow gantt_link_arrow_" + n3;
                  switch (n3) {
                    case e2.dirs.right:
                      s2 -= c2 / 2, l2 -= c2;
                      break;
                    case e2.dirs.left:
                      s2 -= c2 / 2;
                      break;
                    case e2.dirs.up:
                      l2 -= c2;
                      break;
                    case e2.dirs.down:
                      s2 += 2 * c2, l2 -= c2;
                  }
                  return o2.style.cssText = ["top:" + s2 + "px", "left:" + l2 + "px"].join(";"), o2.className = u2, o2;
                }(u[u.length - 1], v, r2, i2.source);
                return i2.color && (m.style.borderColor = i2.color), h.appendChild(m), t2._waiAria.linkAttr(i2, h), h;
              }
            }
          }, update: null, isInViewPort: i };
        };
      }, function(t, e) {
        t.exports = function(t2, e2, n, i, r) {
          var a = n.$gantt.getTask(t2.source), o = n.$gantt.getTask(t2.target), s = n.getItemTop(a.id), l = n.getItemHeight(a.id), c = n.getItemTop(o.id), u = n.getItemHeight(o.id);
          if (e2.y > s + l && e2.y > c + u) return false;
          if (e2.y_end < c && e2.y_end < s) return false;
          var d = n.posFromDate(a.start_date), h = n.posFromDate(a.end_date), f = n.posFromDate(o.start_date), _ = n.posFromDate(o.end_date);
          if (d > h) {
            var g = h;
            h = d, d = g;
          }
          if (f > _) {
            g = _;
            _ = f, f = g;
          }
          return d += -100, h += 100, f += -100, _ += 100, !(e2.x > h && e2.x > _) && !(e2.x_end < d && e2.x_end < f);
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        var r = n(2), a = n(21), o = n(5);
        t.exports = function(t2) {
          return { render: function(e2, n2, i2, a2) {
            for (var o2 = n2.getGridColumns(), s = n2.$getTemplates(), l = n2.$config.rowStore, c = [], u = 0; u < o2.length; u++) {
              var d, h, f, _ = u == o2.length - 1, g = o2[u];
              "add" == g.name ? (h = "<div " + (b = t2._waiAria.gridAddButtonAttrString(g)) + " class='gantt_add'></div>", f = "") : (h = g.template ? g.template(e2) : e2[g.name], r.isDate(h) && (h = s.date_grid(h, e2, g.name)), null !== h && void 0 !== h || (h = ""), f = h, h = "<div class='gantt_tree_content'>" + h + "</div>");
              var p = "gantt_cell" + (_ ? " gantt_last_cell" : ""), v = [];
              if (g.tree) {
                p += " gantt_cell_tree";
                for (var m = 0; m < e2.$level; m++) v.push(s.grid_indent(e2));
                !l.hasChild(e2.id) || t2.isSplitTask(e2) && !t2.config.open_split_tasks ? (v.push(s.grid_blank(e2)), v.push(s.grid_file(e2))) : (v.push(s.grid_open(e2)), v.push(s.grid_folder(e2)));
              }
              var y = "width:" + (g.width - (_ ? 1 : 0)) + "px;";
              if (this.defined(g.align)) {
                var k = { right: "flex-end", left: "flex-start", center: "center" }[g.align];
                y += "text-align:" + g.align + ";justify-content:" + k + ";";
              }
              var b = t2._waiAria.gridCellAttrString(g, f, e2);
              v.push(h), d = "<div class='" + p + "' data-column-index='" + u + "' data-column-name='" + g.name + "' style='" + y + "' " + b + ">" + v.join("") + "</div>", c.push(d);
            }
            if (p = t2.getGlobalTaskIndex(e2.id) % 2 == 0 ? "" : " odd", p += e2.$transparent ? " gantt_transparent" : "", p += e2.$dataprocessor_class ? " " + e2.$dataprocessor_class : "", s.grid_row_class) {
              var w = s.grid_row_class.call(t2, e2.start_date, e2.end_date, e2);
              w && (p += " " + w);
            }
            l.isSelected(e2.id) && (p += " gantt_selected");
            var x = document.createElement("div");
            x.className = "gantt_row" + p + " gantt_row_" + t2.getTaskType(e2.type);
            var $ = n2.getItemHeight(e2.id);
            return x.style.height = $ + "px", x.style.lineHeight = $ + "px", i2.smart_rendering && (x.style.position = "absolute", x.style.left = "0px", x.style.top = n2.getItemTop(e2.id) + "px"), n2.$config.item_attribute && (x.setAttribute(n2.$config.item_attribute, e2.id), x.setAttribute(n2.$config.bind + "_id", e2.id)), t2._waiAria.taskRowAttr(e2, x), x.innerHTML = c.join(""), x;
          }, update: null, getRectangle: a, getVisibleRange: o, onrender: function(e2, n2, r2) {
            for (var a2 = r2.getGridColumns(), o2 = 0; o2 < a2.length; o2++) {
              var s = a2[o2];
              if (s.onrender) {
                var l = n2.querySelector("[data-column-name=" + s.name + "]");
                if (l) {
                  var c = s.onrender(e2, l);
                  if (c && "string" == typeof c) l.innerHTML = c;
                  else if (c && "object" === i(c) && t2.config.external_render) {
                    var u = t2.config.external_render;
                    u.isElement(c) && u.renderElement(c, l);
                  }
                }
              }
            }
          } };
        };
      }, function(t, e, n) {
        var i = n(25), r = n(5), a = n(26), o = n(27), s = n(42);
        t.exports = function(t2) {
          var e2 = s(t2), n2 = {};
          function l(t3, e3, n3, i2, r2) {
            var a2 = n3.resource_cell_class(e3.start_date, e3.end_date, t3, e3.tasks, e3.assignments), o2 = n3.resource_cell_value(e3.start_date, e3.end_date, t3, e3.tasks, e3.assignments), s2 = r2.getItemHeight(t3.id) - 1;
            if (a2 || o2) {
              var l2 = r2.getItemPosition(t3, e3.start_date, e3.end_date), c2 = document.createElement("div");
              return c2.setAttribute(r2.$config.item_attribute, t3.id), c2.className = ["gantt_resource_marker", a2].join(" "), c2.style.cssText = ["left:" + l2.left + "px", "width:" + l2.width + "px", "height:" + s2 + "px", "line-height:" + s2 + "px", "top:" + l2.top + "px"].join(";"), o2 && (c2.innerHTML = o2), c2;
            }
            return null;
          }
          function c(t3, e3) {
            n2[t3] && n2[t3][e3] && n2[t3][e3].parentNode && n2[t3][e3].parentNode.removeChild(n2[t3][e3]);
          }
          return { render: function(i2, r2, s2, c2) {
            var u = r2.$getTemplates(), d = r2.getScale(), h = e2(i2, s2.resource_property, r2.getScale(), r2), f = !!c2, _ = [];
            n2[i2.id] = {};
            for (var g = a(d, c2), p = g.start; p <= g.end; p++) {
              var v = h[p];
              if (v && (!f || o(p, d, c2, t2))) {
                var m = l(i2, v, u, 0, r2);
                m && (_.push(m), n2[i2.id][p] = m);
              }
            }
            var y = null;
            if (_.length) {
              y = document.createElement("div");
              for (var k = 0; k < _.length; k++) y.appendChild(_[k]);
            }
            return y;
          }, update: function(i2, r2, s2, u, d) {
            var h = s2.$getTemplates(), f = s2.getScale(), _ = e2(i2, u.resource_property, s2.getScale(), s2), g = a(f, d), p = {};
            if (n2 && n2[i2.id]) for (var v in n2[i2.id]) p[v] = v;
            for (var m = g.start; m <= g.end; m++) {
              var y = _[m];
              if (p[m] = false, y) if (o(m, f, d, t2)) if (n2[i2.id] && n2[i2.id][m]) n2[i2.id] && n2[i2.id][m] && !n2[i2.id][m].parentNode && r2.appendChild(n2[i2.id][m]);
              else {
                var k = l(i2, y, h, 0, s2);
                k && (r2.appendChild(k), n2[i2.id][m] = k);
              }
              else c(i2.id, m);
            }
            for (var v in p) false !== p[v] && c(i2.id, v);
          }, getRectangle: i, getVisibleRange: r };
        };
      }, function(t, e, n) {
        var i = n(25), r = n(5), a = n(26), o = n(27), s = n(42);
        function l(t2, e2, n2, i2) {
          var r2 = 100 * (1 - (1 * t2 || 0)), a2 = i2.posFromDate(e2), o2 = i2.posFromDate(n2), s2 = document.createElement("div");
          return s2.className = "gantt_histogram_hor_bar", s2.style.top = r2 + "%", s2.style.left = a2 + "px", s2.style.width = o2 - a2 + 1 + "px", s2;
        }
        function c(t2, e2, n2) {
          if (t2 === e2) return null;
          var i2 = 1 - Math.max(t2, e2), r2 = Math.abs(t2 - e2), a2 = document.createElement("div");
          return a2.className = "gantt_histogram_vert_bar", a2.style.top = 100 * i2 + "%", a2.style.height = 100 * r2 + "%", a2.style.left = n2 + "px", a2;
        }
        t.exports = function(t2) {
          var e2 = s(t2), n2 = {}, u = {}, d = {};
          function h(t3, e3) {
            var i2 = n2[t3];
            i2 && i2[e3] && i2[e3].parentNode && i2[e3].parentNode.removeChild(i2[e3]);
          }
          function f(e3, n3, i2, r2, o2, s2, u2) {
            var h2 = d[e3.id];
            h2 && h2.parentNode && h2.parentNode.removeChild(h2);
            var f2 = function(e4, n4, i3, r3) {
              for (var o3 = n4.getScale(), s3 = document.createElement("div"), u3 = a(o3, r3), d2 = u3.start; d2 <= u3.end; d2++) {
                var h3 = o3.trace_x[d2], f3 = o3.trace_x[d2 + 1] || t2.date.add(h3, o3.step, o3.unit), _2 = o3.trace_x[d2].valueOf(), g = Math.min(e4[_2] / i3, 1) || 0;
                if (g < 0) return null;
                var p = Math.min(e4[f3.valueOf()] / i3, 1) || 0, v = l(g, h3, f3, n4);
                v && s3.appendChild(v);
                var m = c(g, p, n4.posFromDate(f3));
                m && s3.appendChild(m);
              }
              return s3;
            }(i2, o2, s2, u2);
            return f2 && n3 && (f2.setAttribute("data-resource-id", e3.id), f2.setAttribute(o2.$config.item_attribute, e3.id), f2.style.position = "absolute", f2.style.top = n3.top + 1 + "px", f2.style.height = o2.getItemHeight(e3.id) - 1 + "px", f2.style.left = 0), f2;
          }
          function _(t3, e3, n3, i2, r2, a2, o2) {
            var s2 = r2.histogram_cell_class(a2.start_date, a2.end_date, t3, a2.tasks, a2.assignments), l2 = r2.histogram_cell_label(a2.start_date, a2.end_date, t3, a2.tasks, a2.assignments), c2 = r2.histogram_cell_allocated(a2.start_date, a2.end_date, t3, a2.tasks, a2.assignments), u2 = o2.getItemHeight(t3.id) - 1;
            if (s2 || l2) {
              var d2 = document.createElement("div");
              return d2.className = ["gantt_histogram_cell", s2].join(" "), d2.setAttribute(o2.$config.item_attribute, t3.id), d2.style.cssText = ["left:" + e3.left + "px", "width:" + e3.width + "px", "height:" + u2 + "px", "line-height:" + u2 + "px", "top:" + (e3.top + 1) + "px"].join(";"), l2 && (l2 = "<div class='gantt_histogram_label'>" + l2 + "</div>"), c2 && (l2 = "<div class='gantt_histogram_fill' style='height:" + 100 * Math.min(c2 / n3 || 0, 1) + "%;'></div>" + l2), l2 && (d2.innerHTML = l2), d2;
            }
            return null;
          }
          return { render: function(i2, r2, s2, l2) {
            var c2 = r2.$getTemplates(), h2 = r2.getScale(), g = e2(i2, s2.resource_property, h2, r2), p = [], v = {}, m = i2.capacity || r2.$config.capacity || 24;
            n2[i2.id] = {}, u[i2.id] = null, d[i2.id] = null;
            for (var y = !!l2, k = a(h2, l2), b = k.start; b <= k.end; b++) {
              var w = g[b];
              if (w && (!y || o(b, h2, l2, t2))) {
                var x = c2.histogram_cell_capacity(w.start_date, w.end_date, i2, w.tasks, w.assignments);
                v[w.start_date.valueOf()] = x || 0;
                var $ = r2.getItemPosition(i2, w.start_date, w.end_date), S = _(i2, $, m, 0, c2, w, r2);
                S && (p.push(S), n2[i2.id][b] = S);
              }
            }
            var T = null;
            if (p.length) {
              T = document.createElement("div");
              for (var C = 0; C < p.length; C++) T.appendChild(p[C]);
              var E = f(i2, $, v, 0, r2, m, l2);
              E && (T.appendChild(E), d[i2.id] = E), u[i2.id] = T;
            }
            return T;
          }, update: function(i2, r2, s2, l2, c2) {
            var u2 = s2.$getTemplates(), g = s2.getScale(), p = e2(i2, l2.resource_property, g, s2), v = i2.capacity || s2.$config.capacity || 24, m = {}, y = !!c2, k = a(g, c2), b = {};
            if (n2 && n2[i2.id]) for (var w in n2[i2.id]) b[w] = w;
            for (var x = k.start; x <= k.end; x++) {
              var $ = p[x];
              if (b[x] = false, $) {
                var S = u2.histogram_cell_capacity($.start_date, $.end_date, i2, $.tasks, $.assignments);
                m[$.start_date.valueOf()] = S || 0;
                var T = s2.getItemPosition(i2, $.start_date, $.end_date);
                if (!y || o(x, g, c2, t2)) {
                  var C = n2[i2.id];
                  if (C && C[x]) C && C[x] && !C[x].parentNode && r2.appendChild(C[x]);
                  else {
                    var E = _(i2, T, v, 0, u2, $, s2);
                    E && (r2.appendChild(E), n2[i2.id][x] = E);
                  }
                } else h(i2.id, x);
              }
            }
            for (var w in b) false !== b[w] && h(i2.id, w);
            var D = f(i2, T, m, 0, s2, v, c2);
            D && (r2.appendChild(D), d[i2.id] = D);
          }, getRectangle: i, getVisibleRange: r };
        };
      }, function(t, e, n) {
        var i = n(21), r = n(5);
        t.exports = function(t2) {
          return { render: function(e2, n2, i2) {
            var r2 = n2.$getConfig(), a = document.createElement("div");
            return a.className = "gantt_task_grid_row_resize_wrap", a.style.top = n2.getItemTop(e2.id) + n2.getItemHeight(e2.id) + "px", a.innerHTML = "<div class='gantt_task_grid_row_resize'></div>", a.setAttribute(r2.task_grid_row_resizer_attribute, e2.id), t2._waiAria.gridSeparatorAttr(a), a;
          }, update: null, getRectangle: i, getVisibleRange: r };
        };
      }, function(t, e, n) {
        var i = n(0), r = n(235), a = n(236), o = function(t2) {
          return { onCreated: function(e2) {
            e2.$config = i.mixin(e2.$config, { bind: "task" }), "grid" == e2.$config.id && (this.extendGantt(e2), t2.ext.inlineEditors = t2.ext._inlineEditors.createEditors(e2), t2.ext.inlineEditors.init()), this._mouseDelegates = n(20)(t2);
          }, onInitialized: function(e2) {
            var n2 = e2.$getConfig();
            n2.order_branch && ("marker" == n2.order_branch ? a.init(e2.$gantt, e2) : r.init(e2.$gantt, e2)), this.initEvents(e2, t2), "grid" == e2.$config.id && this.extendDom(e2);
          }, onDestroyed: function(e2) {
            "grid" == e2.$config.id && t2.ext.inlineEditors.destructor(), this.clearEvents(e2, t2);
          }, initEvents: function(t3, e2) {
            this._mouseDelegates.delegate("click", "gantt_row", e2.bind(function(n2, i2, r2) {
              var a2 = t3.$getConfig();
              if (null !== i2) {
                var o2 = this.getTask(i2);
                a2.scroll_on_click && !e2._is_icon_open_click(n2) && this.showDate(o2.start_date), e2.callEvent("onTaskRowClick", [i2, r2]);
              }
            }, e2), t3.$grid), this._mouseDelegates.delegate("click", "gantt_grid_head_cell", e2.bind(function(n2, i2, r2) {
              var a2 = r2.getAttribute("data-column-id");
              if (e2.callEvent("onGridHeaderClick", [a2, n2])) {
                var o2 = t3.$getConfig();
                if ("add" != a2) {
                  if (o2.sort && a2) {
                    for (var s, l = a2, c = 0; c < o2.columns.length; c++) if (o2.columns[c].name == a2) {
                      s = o2.columns[c];
                      break;
                    }
                    if (s && void 0 !== s.sort && true !== s.sort && !(l = s.sort)) return;
                    var u = this._sort && this._sort.direction && this._sort.name == a2 ? this._sort.direction : "desc";
                    u = "desc" == u ? "asc" : "desc", this._sort = { name: a2, direction: u }, this.sort(l, "desc" == u);
                  }
                } else e2.$services.getService("mouseEvents").callHandler("click", "gantt_add", t3.$grid, [n2, o2.root_id]);
              }
            }, e2), t3.$grid), this._mouseDelegates.delegate("click", "gantt_add", e2.bind(function(n2, i2, r2) {
              if (!t3.$getConfig().readonly) return this.createTask({}, i2 || e2.config.root_id), false;
            }, e2), t3.$grid);
          }, clearEvents: function(t3, e2) {
            this._mouseDelegates.destructor(), this._mouseDelegates = null;
          }, extendDom: function(e2) {
            t2.$grid = e2.$grid, t2.$grid_scale = e2.$grid_scale, t2.$grid_data = e2.$grid_data;
          }, extendGantt: function(e2) {
            t2.getGridColumns = t2.bind(e2.getGridColumns, e2), e2.attachEvent("onColumnResizeStart", function() {
              return t2.callEvent("onColumnResizeStart", arguments);
            }), e2.attachEvent("onColumnResize", function() {
              return t2.callEvent("onColumnResize", arguments);
            }), e2.attachEvent("onColumnResizeEnd", function() {
              return t2.callEvent("onColumnResizeEnd", arguments);
            }), e2.attachEvent("onColumnResizeComplete", function(e3, n2) {
              t2.config.grid_width = n2;
            }), e2.attachEvent("onBeforeRowResize", function() {
              return t2.callEvent("onBeforeRowResize", arguments);
            }), e2.attachEvent("onRowResize", function() {
              return t2.callEvent("onRowResize", arguments);
            }), e2.attachEvent("onBeforeRowResizeEnd", function() {
              return t2.callEvent("onBeforeRowResizeEnd", arguments);
            }), e2.attachEvent("onAfterRowResize", function() {
              return t2.callEvent("onAfterRowResize", arguments);
            });
          } };
        };
        t.exports = o;
      }, function(t, e, n) {
        var i = n(1), r = n(9);
        t.exports = { init: function(t2, e2) {
          var n2 = t2.$services.getService("dnd");
          if (e2.$config.bind && t2.getDatastore(e2.$config.bind)) {
            var a = new n2(e2.$grid_data, { updates_per_second: 60 });
            t2.defined(e2.$getConfig().dnd_sensitivity) && (a.config.sensitivity = e2.$getConfig().dnd_sensitivity), a.attachEvent("onBeforeDragStart", t2.bind(function(n3, r2) {
              var c = o(r2);
              if (!c) return false;
              if (t2.hideQuickInfo && t2._hideQuickInfo(), i.closest(r2.target, ".gantt_grid_editor_placeholder")) return false;
              var u = c.getAttribute(e2.$config.item_attribute);
              if (l(u)) return false;
              var d = s().getItem(u);
              return !t2.isReadonly(d) && (a.config.initial_open_state = d.$open, !!t2.callEvent("onRowDragStart", [u, r2.target || r2.srcElement, r2]) && void 0);
            }, t2)), a.attachEvent("onAfterDragStart", t2.bind(function(t3, n3) {
              var i2 = o(n3);
              a.config.marker.innerHTML = i2.outerHTML;
              var r2 = a.config.marker.firstChild;
              r2 && (r2.style.position = "static"), a.config.id = i2.getAttribute(e2.$config.item_attribute);
              var l2 = s(), c = l2.getItem(a.config.id);
              a.config.index = l2.getBranchIndex(a.config.id), a.config.parent = c.parent, c.$open = false, c.$transparent = true, this.refreshData();
            }, t2)), a.lastTaskOfLevel = function(t3) {
              for (var e3 = null, n3 = s().getItems(), i2 = 0, r2 = n3.length; i2 < r2; i2++) n3[i2].$level == t3 && (e3 = n3[i2]);
              return e3 ? e3.id : null;
            }, a._getGridPos = t2.bind(function(t3) {
              var n3 = i.getNodePosition(e2.$grid_data), r2 = n3.x, o2 = t3.pos.y - 10, s2 = e2.getItemHeight(a.config.id);
              o2 < n3.y && (o2 = n3.y);
              var l2 = e2.getTotalHeight();
              return o2 > n3.y + l2 - s2 && (o2 = n3.y + l2 - s2), n3.x = r2, n3.y = o2, n3;
            }, t2), a._getTargetY = t2.bind(function(n3) {
              var r2 = i.getNodePosition(e2.$grid_data), a2 = e2.$state.scrollTop || 0, o2 = t2.$grid_data.getBoundingClientRect().height + a2, s2 = n3.pageY - r2.y + a2;
              return s2 > o2 ? s2 = o2 : s2 < a2 && (s2 = a2), s2;
            }, t2), a._getTaskByY = t2.bind(function(t3, n3) {
              var i2 = s();
              t3 = t3 || 0;
              var r2 = e2.getItemIndexByTopPosition(t3);
              return (r2 = n3 < r2 ? r2 - 1 : r2) > i2.countVisible() - 1 ? null : i2.getIdByIndex(r2);
            }, t2), a.attachEvent("onDragMove", t2.bind(function(n3, i2) {
              var r2 = t2.$grid_data.getBoundingClientRect(), o2 = r2.height + r2.y + (e2.$state.scrollTop || 0) + window.scrollY, c = a.config, u = a._getGridPos(i2), d = e2.$getConfig(), h = s();
              u.y < o2 ? c.marker.style.top = u.y + "px" : c.marker.style.top = o2 + "px", c.marker.style.left = u.x + 10 + "px";
              var f = h.getItem(a.config.id), _ = a._getTargetY(i2), g = a._getTaskByY(_, h.getIndexById(f.id));
              function p(t3, e3) {
                return !h.isChildOf(v.id, e3.id) && (t3.$level == e3.$level || d.order_branch_free);
              }
              if (h.exists(g) || (g = a.lastTaskOfLevel(d.order_branch_free ? f.$level : 0)) == a.config.id && (g = null), h.exists(g)) {
                var v = h.getItem(g), m = e2.getItemTop(v.id), y = e2.getItemHeight(v.id);
                if (m + y / 2 < _) {
                  var k = h.getIndexById(v.id), b = h.getNext(v.id), w = h.getItem(b);
                  if (l(b)) {
                    var x = h.getPrev(w.id);
                    w = h.getItem(x);
                  }
                  if (w) {
                    if (w.id == f.id) return d.order_branch_free && h.isChildOf(f.id, v.id) && 1 == h.getChildren(v.id).length ? void h.move(f.id, h.getBranchIndex(v.id) + 1, h.getParent(v.id)) : void 0;
                    v = w;
                  } else if (b = h.getIdByIndex(k), w = h.getItem(b), l(b) && (x = h.getPrev(w.id), w = h.getItem(x)), p(w, f) && w.id != f.id) return void h.move(f.id, -1, h.getParent(w.id));
                } else if (d.order_branch_free && v.id != f.id && p(v, f) && !l(v.id)) {
                  if (!h.hasChild(v.id)) return v.$open = true, void h.move(f.id, -1, v.id);
                  if (h.getIndexById(v.id) || y / 3 < _) return;
                }
                k = h.getIndexById(v.id), x = h.getIdByIndex(k - 1);
                for (var $ = h.getItem(x), S = 1; (!$ || $.id == v.id) && k - S >= 0; ) x = h.getIdByIndex(k - S), $ = h.getItem(x), S++;
                if (f.id == v.id || l(v.id)) return;
                p(v, f) && f.id != v.id ? h.move(f.id, 0, 0, v.id) : v.$level != f.$level - 1 || h.getChildren(v.id).length ? $ && p($, f) && f.id != $.id && h.move(f.id, -1, h.getParent($.id)) : h.move(f.id, 0, v.id);
              }
              return true;
            }, t2)), a.attachEvent("onDragEnd", t2.bind(function() {
              var e3 = s(), n3 = e3.getItem(a.config.id);
              n3.$transparent = false, n3.$open = a.config.initial_open_state, false === this.callEvent("onBeforeRowDragEnd", [a.config.id, a.config.parent, a.config.index]) ? (e3.move(a.config.id, a.config.index, a.config.parent), n3.$drop_target = null) : this.callEvent("onRowDragEnd", [a.config.id, n3.$drop_target]), t2.render(), this.refreshData();
            }, t2));
          }
          function o(t3) {
            return i.locateAttribute(t3, e2.$config.item_attribute);
          }
          function s() {
            return t2.getDatastore(e2.$config.bind);
          }
          function l(e3) {
            return r(e3, t2, s());
          }
        } };
      }, function(t, e, n) {
        var i = n(1), r = n(28), a = n(237), o = n(238), s = n(239), l = n(9);
        t.exports = { init: function(t2, e2) {
          var n2 = t2.$services.getService("dnd");
          if (e2.$config.bind && t2.getDatastore(e2.$config.bind)) {
            var c = new n2(e2.$grid_data, { updates_per_second: 60 });
            t2.defined(e2.$getConfig().dnd_sensitivity) && (c.config.sensitivity = e2.$getConfig().dnd_sensitivity), c.attachEvent("onBeforeDragStart", t2.bind(function(n3, r2) {
              var a2 = u(r2);
              if (!a2) return false;
              if (t2.hideQuickInfo && t2._hideQuickInfo(), i.closest(r2.target, ".gantt_grid_editor_placeholder")) return false;
              var o2 = a2.getAttribute(e2.$config.item_attribute), s2 = e2.$config.rowStore.getItem(o2);
              return !t2.isReadonly(s2) && !d(o2) && (c.config.initial_open_state = s2.$open, !!t2.callEvent("onRowDragStart", [o2, r2.target || r2.srcElement, r2]) && void 0);
            }, t2)), c.attachEvent("onAfterDragStart", t2.bind(function(t3, n3) {
              var i2 = u(n3);
              c.config.marker.innerHTML = i2.outerHTML;
              var a2 = c.config.marker.firstChild;
              a2 && (c.config.marker.style.opacity = 0.4, a2.style.position = "static", a2.style.pointerEvents = "none"), c.config.id = i2.getAttribute(e2.$config.item_attribute);
              var o2 = e2.$config.rowStore, s2 = o2.getItem(c.config.id);
              c.config.level = o2.calculateItemLevel(s2), c.config.drop_target = r.createDropTargetObject({ targetParent: o2.getParent(s2.id), targetIndex: o2.getBranchIndex(s2.id), targetId: s2.id, nextSibling: true }), s2.$open = false, s2.$transparent = true, this.refreshData();
            }, t2)), c.attachEvent("onDragMove", t2.bind(function(n3, i2) {
              var a2 = h(i2);
              return a2 && false !== t2.callEvent("onBeforeRowDragMove", [c.config.id, a2.targetParent, a2.targetIndex]) || (a2 = r.createDropTargetObject(c.config.drop_target)), s.highlightPosition(a2, c.config, e2), c.config.drop_target = a2, this.callEvent("onRowDragMove", [c.config.id, a2.targetParent, a2.targetIndex]), true;
            }, t2)), c.attachEvent("onDragEnd", t2.bind(function() {
              var n3 = e2.$config.rowStore, i2 = n3.getItem(c.config.id);
              s.removeLineHighlight(c.config), i2.$transparent = false, i2.$open = c.config.initial_open_state;
              var r2 = c.config.drop_target;
              false === this.callEvent("onBeforeRowDragEnd", [c.config.id, r2.targetParent, r2.targetIndex]) ? i2.$drop_target = null : (n3.move(c.config.id, r2.targetIndex, r2.targetParent), t2.render(), this.callEvent("onRowDragEnd", [c.config.id, r2.targetParent, r2.targetIndex])), n3.refresh(i2.id);
            }, t2));
          }
          function u(t3) {
            return i.locateAttribute(t3, e2.$config.item_attribute);
          }
          function d(n3) {
            return l(n3, t2, t2.getDatastore(e2.$config.bind));
          }
          function h(n3) {
            var r2, s2 = function(n4) {
              var r3 = i.getRelativeEventPosition(n4, e2.$grid_data).y, a2 = e2.$config.rowStore;
              document.doctype || (r3 += window.scrollY), r3 = r3 || 0;
              var o2 = e2.$state.scrollTop || 0, s3 = t2.$grid_data.getBoundingClientRect().height + o2 + window.scrollY, l3 = o2, c2 = e2.getItemIndexByTopPosition(e2.$state.scrollTop);
              if (a2.exists(c2) || (c2 = a2.countVisible() - 1), c2 < 0) return a2.$getRootId();
              var u3 = a2.getIdByIndex(c2), h3 = e2.$state.scrollTop / e2.getItemHeight(u3), f2 = h3 - Math.floor(h3);
              f2 > 0.1 && f2 < 0.9 && (s3 -= e2.getItemHeight(u3) * f2, l3 += e2.getItemHeight(u3) * (1 - f2)), r3 >= s3 ? r3 = s3 : r3 <= l3 && (r3 = l3);
              var _ = e2.getItemIndexByTopPosition(r3);
              if (_ > a2.countVisible() - 1 || _ < 0) return a2.$getRootId();
              var g = a2.getIdByIndex(_);
              return d(g) ? a2.getPrevSibling(g) : a2.getIdByIndex(_);
            }(n3), l2 = null, u2 = e2.$config.rowStore, h2 = !e2.$getConfig().order_branch_free, f = i.getRelativeEventPosition(n3, e2.$grid_data).y;
            return document.doctype || (f += window.scrollY), s2 !== u2.$getRootId() && (l2 = (f - e2.getItemTop(s2)) / e2.getItemHeight(s2)), h2 ? (r2 = a(c.config.id, s2, l2, f, u2, c.config.level)) && r2.targetParent && d(r2.targetParent) && (s2 = u2.getPrevSibling(r2.targetParent), r2 = a(c.config.id, s2, l2, f, u2, c.config.level)) : r2 = o(c.config.id, s2, l2, f, u2), r2;
          }
        } };
      }, function(t, e, n) {
        var i = n(28);
        function r(t2, e2, n2, r2, a2) {
          for (var o2 = e2; r2.exists(o2); ) {
            var s = r2.calculateItemLevel(r2.getItem(o2));
            if ((s === n2 || s === n2 - 1) && r2.getBranchIndex(o2) > -1) break;
            o2 = a2 ? r2.getPrev(o2) : r2.getNext(o2);
          }
          return r2.exists(o2) ? r2.calculateItemLevel(r2.getItem(o2)) === n2 ? a2 ? i.nextSiblingTarget(t2, o2, r2) : i.prevSiblingTarget(t2, o2, r2) : i.firstChildTarget(t2, o2, r2) : null;
        }
        function a(t2, e2, n2, i2) {
          return r(t2, e2, n2, i2, true);
        }
        function o(t2, e2, n2, i2) {
          return r(t2, e2, n2, i2, false);
        }
        t.exports = function(t2, e2, n2, r2, s, l) {
          var c;
          if (e2 !== s.$getRootId()) {
            var u = s.getItem(e2), d = s.calculateItemLevel(u);
            if (d === l) {
              var h = s.getPrevSibling(e2);
              n2 < 0.5 && !h ? c = i.prevSiblingTarget(t2, e2, s) : (n2 < 0.5 && (e2 = h), c = i.nextSiblingTarget(t2, e2, s));
            } else if (d > l) s.eachParent(function(t3) {
              s.calculateItemLevel(t3) === l && (e2 = t3.id);
            }, u), c = a(t2, e2, l, s);
            else {
              var f = a(t2, e2, l, s), _ = o(t2, e2, l, s);
              c = n2 < 0.5 ? f : _;
            }
          } else {
            var g = s.$getRootId(), p = s.getChildren(g);
            c = i.createDropTargetObject(), c = p.length && r2 >= 0 ? a(t2, function(t3) {
              for (var e3 = t3.getNext(); t3.exists(e3); ) {
                var n3 = t3.getNext(e3);
                if (!t3.exists(n3)) return e3;
                e3 = n3;
              }
              return null;
            }(s), l, s) : o(t2, g, l, s);
          }
          return c;
        };
      }, function(t, e, n) {
        var i = n(28);
        t.exports = function(t2, e2, n2, r, a) {
          var o;
          if (e2 !== a.$getRootId()) o = n2 < 0.25 ? i.prevSiblingTarget(t2, e2, a) : !(n2 > 0.6) || a.hasChild(e2) && a.getItem(e2).$open ? i.firstChildTarget(t2, e2, a) : i.nextSiblingTarget(t2, e2, a);
          else {
            var s = a.$getRootId();
            o = a.hasChild(s) && r >= 0 ? i.lastChildTarget(t2, s, a) : i.firstChildTarget(t2, s, a);
          }
          return o;
        };
      }, function(t, e, n) {
        var i = n(1);
        function r(t2, e2) {
          var n2 = i.getNodePosition(e2.$grid_data);
          return t2.x += n2.x - e2.$grid.scrollLeft, t2.y += n2.y - e2.$grid_data.scrollTop, t2;
        }
        t.exports = { removeLineHighlight: function(t2) {
          t2.markerLine && t2.markerLine.parentNode && t2.markerLine.parentNode.removeChild(t2.markerLine), t2.markerLine = null;
        }, highlightPosition: function(t2, e2, n2) {
          var a = function(t3, e3) {
            var n3 = i.getNodePosition(e3.$grid_data), r2 = i.getRelativeEventPosition(t3, e3.$grid_data), a2 = n3.x, o2 = r2.y - 10, s = e3.getItemHeight(t3.targetId);
            o2 < n3.y && (o2 = n3.y);
            var l = e3.getTotalHeight();
            return o2 > n3.y + l - s && (o2 = n3.y + l - s), n3.x = a2, n3.y = o2, n3;
          }(t2, n2);
          e2.marker.style.left = a.x + 9 + "px";
          var o = e2.markerLine;
          o || ((o = document.createElement("div")).className = "gantt_drag_marker gantt_grid_dnd_marker", o.innerHTML = "<div class='gantt_grid_dnd_marker_line'></div>", o.style.pointerEvents = "none"), t2.child ? function(t3, e3, n3) {
            var i2 = t3.targetParent, a2 = r({ x: 0, y: n3.getItemTop(i2) }, n3), o2 = n3.$grid_data.getBoundingClientRect().bottom + window.scrollY;
            e3.innerHTML = "<div class='gantt_grid_dnd_marker_folder'></div>", e3.style.width = n3.$grid_data.offsetWidth + "px", e3.style.top = a2.y + "px", e3.style.left = a2.x + "px", e3.style.height = n3.getItemHeight(i2) + "px", a2.y > o2 && (e3.style.top = o2 + "px");
          }(t2, o, n2) : function(t3, e3, n3) {
            var i2 = function(t4, e4) {
              var n4 = e4.$config.rowStore, i3 = { x: 0, y: 0 }, a3 = e4.$grid_data.querySelector(".gantt_tree_indent"), o3 = 15, s = 0;
              if (a3 && (o3 = a3.offsetWidth), t4.targetId !== n4.$getRootId()) {
                var l = e4.getItemTop(t4.targetId), c = e4.getItemHeight(t4.targetId);
                if (s = n4.exists(t4.targetId) ? n4.calculateItemLevel(n4.getItem(t4.targetId)) : 0, t4.prevSibling) i3.y = l;
                else if (t4.nextSibling) {
                  var u = 0;
                  n4.eachItem(function(t5) {
                    -1 !== n4.getIndexById(t5.id) && u++;
                  }, t4.targetId), i3.y = l + c + u * c;
                } else i3.y = l + c, s += 1;
              }
              return i3.x = 40 + s * o3, i3.width = Math.max(e4.$grid_data.offsetWidth - i3.x, 0), r(i3, e4);
            }(t3, n3), a2 = n3.$grid_data.getBoundingClientRect().bottom + window.scrollY;
            e3.innerHTML = "<div class='gantt_grid_dnd_marker_line'></div>", e3.style.left = i2.x + "px", e3.style.height = "4px";
            var o2 = i2.y - 2;
            e3.style.top = o2 + "px", e3.style.width = i2.width + "px", o2 > a2 && (e3.style.top = a2 + "px");
          }(t2, o, n2), e2.markerLine || (document.body.appendChild(o), e2.markerLine = o);
        } };
      }, function(t, e, n) {
        var i = n(0), r = n(241), a = n(242), o = n(1), s = function(t2) {
          var e2 = t2.$services;
          return { onCreated: function(e3) {
            var o2 = e3.$config;
            o2.bind = i.defined(o2.bind) ? o2.bind : "task", o2.bindLinks = i.defined(o2.bindLinks) ? o2.bindLinks : "link", e3._linksDnD = a.createLinkDND(), e3._tasksDnD = r.createTaskDND(), e3._tasksDnD.extend(e3), this._mouseDelegates = n(20)(t2);
          }, onInitialized: function(e3) {
            this._attachDomEvents(t2), this._attachStateProvider(t2, e3), e3._tasksDnD.init(e3, t2), e3._linksDnD.init(e3, t2), "timeline" == e3.$config.id && this.extendDom(e3);
          }, onDestroyed: function(e3) {
            this._clearDomEvents(t2), this._clearStateProvider(t2), e3._tasksDnD && e3._tasksDnD.destructor();
          }, extendDom: function(e3) {
            t2.$task = e3.$task, t2.$task_scale = e3.$task_scale, t2.$task_data = e3.$task_data, t2.$task_bg = e3.$task_bg, t2.$task_links = e3.$task_links, t2.$task_bars = e3.$task_bars;
          }, _clearDomEvents: function() {
            this._mouseDelegates.destructor(), this._mouseDelegates = null;
          }, _attachDomEvents: function(t3) {
            function e3(e4, n2) {
              if (e4 && this.callEvent("onLinkDblClick", [e4, n2])) {
                var i2 = this.getLink(e4);
                if (this.isReadonly(i2)) return;
                var r2 = this.locale.labels.link + " " + this.templates.link_description(this.getLink(e4)) + " " + this.locale.labels.confirm_link_deleting;
                window.setTimeout(function() {
                  t3._dhtmlx_confirm(r2, "", function() {
                    t3.deleteLink(e4);
                  });
                }, this.config.touch ? 300 : 1);
              }
            }
            this._mouseDelegates.delegate("click", "gantt_task_link", t3.bind(function(t4, e4) {
              var n2 = this.locate(t4, this.config.link_attribute);
              n2 && this.callEvent("onLinkClick", [n2, t4]);
            }, t3), this.$task), this._mouseDelegates.delegate("click", "gantt_scale_cell", t3.bind(function(e4, n2) {
              var i2 = o.getRelativeEventPosition(e4, t3.$task_data), r2 = t3.dateFromPos(i2.x), a2 = Math.floor(t3.columnIndexByDate(r2)), s2 = t3.getScale().trace_x[a2];
              t3.callEvent("onScaleClick", [e4, s2]);
            }, t3), this.$task), this._mouseDelegates.delegate("doubleclick", "gantt_task_link", t3.bind(function(n2, i2, r2) {
              i2 = this.locate(n2, t3.config.link_attribute), e3.call(this, i2, n2);
            }, t3), this.$task), this._mouseDelegates.delegate("doubleclick", "gantt_link_point", t3.bind(function(t4, n2, i2) {
              n2 = this.locate(t4);
              var r2 = this.getTask(n2), a2 = null;
              return i2.parentNode && o.getClassName(i2.parentNode) && (a2 = o.getClassName(i2.parentNode).indexOf("_left") > -1 ? r2.$target[0] : r2.$source[0]), a2 && e3.call(this, a2, t4), false;
            }, t3), this.$task);
          }, _attachStateProvider: function(t3, n2) {
            var i2 = n2;
            e2.getService("state").registerProvider("tasksTimeline", function() {
              return { scale_unit: i2._tasks ? i2._tasks.unit : void 0, scale_step: i2._tasks ? i2._tasks.step : void 0 };
            });
          }, _clearStateProvider: function() {
            e2.getService("state").unregisterProvider("tasksTimeline");
          } };
        };
        t.exports = s;
      }, function(t, e, n) {
        var i = n(1), r = n(0), a = n(30), o = n(2);
        t.exports = { createTaskDND: function() {
          var t2;
          return { extend: function(e2) {
            e2.roundTaskDates = function(e3) {
              t2.round_task_dates(e3);
            };
          }, init: function(e2, n2) {
            return t2 = function(t3, e3) {
              var n3 = e3.$services;
              return { drag: null, dragMultiple: {}, _events: { before_start: {}, before_finish: {}, after_finish: {} }, _handlers: {}, init: function() {
                this._domEvents = e3._createDomEventScope(), this.clear_drag_state();
                var t4 = e3.config.drag_mode;
                this.set_actions(), n3.getService("state").registerProvider("tasksDnd", r.bind(function() {
                  return { drag_id: this.drag ? this.drag.id : void 0, drag_mode: this.drag ? this.drag.mode : void 0, drag_from_start: this.drag ? this.drag.left : void 0 };
                }, this));
                var i2 = { before_start: "onBeforeTaskDrag", before_finish: "onBeforeTaskChanged", after_finish: "onAfterTaskDrag" };
                for (var a2 in this._events) for (var o2 in t4) this._events[a2][o2] = i2[a2];
                this._handlers[t4.move] = this._move, this._handlers[t4.resize] = this._resize, this._handlers[t4.progress] = this._resize_progress;
              }, set_actions: function() {
                var n4 = t3.$task_data;
                this._domEvents.attach(n4, "mousemove", e3.bind(function(t4) {
                  this.on_mouse_move(t4);
                }, this)), this._domEvents.attach(n4, "mousedown", e3.bind(function(t4) {
                  this.on_mouse_down(t4);
                }, this)), this._domEvents.attach(document.body, "mouseup", e3.bind(function(t4) {
                  this.on_mouse_up(t4);
                }, this));
              }, clear_drag_state: function() {
                this.drag = { id: null, mode: null, pos: null, start_x: null, start_y: null, obj: null, left: null }, this.dragMultiple = {};
              }, _resize: function(n4, i2, r2) {
                var a2 = t3.$getConfig(), o2 = this._drag_task_coords(n4, r2);
                r2.left ? (n4.start_date = e3.dateFromPos(o2.start + i2), n4.start_date || (n4.start_date = new Date(e3.getState().min_date))) : (n4.end_date = e3.dateFromPos(o2.end + i2), n4.end_date || (n4.end_date = new Date(e3.getState().max_date)));
                var s = this._calculateMinDuration(a2.min_duration, a2.duration_unit);
                n4.end_date - n4.start_date < a2.min_duration && (r2.left ? n4.start_date = e3.calculateEndDate(n4.end_date, -s, a2.duration_unit, n4) : n4.end_date = e3.calculateEndDate(n4.start_date, s, a2.duration_unit, n4)), e3._init_task_timing(n4);
              }, _calculateMinDuration: function(t4, e4) {
                return Math.ceil(t4 / { minute: 6e4, hour: 36e5, day: 864e5, week: 6048e5, month: 24192e5, year: 31356e6 }[e4]);
              }, _resize_progress: function(e4, n4, i2) {
                var r2 = this._drag_task_coords(e4, i2), a2 = t3.$getConfig().rtl ? r2.start - i2.pos.x : i2.pos.x - r2.start, o2 = Math.max(0, a2);
                e4.progress = Math.min(1, o2 / Math.abs(r2.end - r2.start));
              }, _find_max_shift: function(t4, n4) {
                var i2;
                for (var r2 in t4) {
                  var a2 = t4[r2], o2 = e3.getTask(a2.id), s = this._drag_task_coords(o2, a2), l = e3.posFromDate(new Date(e3.getState().min_date)), c = e3.posFromDate(new Date(e3.getState().max_date));
                  if (s.end + n4 > c) {
                    var u = c - s.end;
                    (u < i2 || void 0 === i2) && (i2 = u);
                  } else if (s.start + n4 < l) {
                    var d = l - s.start;
                    (d > i2 || void 0 === i2) && (i2 = d);
                  }
                }
                return i2;
              }, _move: function(t4, n4, i2, r2) {
                var a2 = this._drag_task_coords(t4, i2), o2 = null, s = null;
                r2 ? (o2 = new Date(+i2.obj.start_date + r2), s = new Date(+i2.obj.end_date + r2)) : (o2 = e3.dateFromPos(a2.start + n4), s = e3.dateFromPos(a2.end + n4)), o2 ? s ? (t4.start_date = o2, t4.end_date = s) : (t4.end_date = new Date(e3.getState().max_date), t4.start_date = e3.dateFromPos(e3.posFromDate(t4.end_date) - (a2.end - a2.start))) : (t4.start_date = new Date(e3.getState().min_date), t4.end_date = e3.dateFromPos(e3.posFromDate(t4.start_date) + (a2.end - a2.start)));
              }, _drag_task_coords: function(t4, n4) {
                return { start: n4.obj_s_x = n4.obj_s_x || e3.posFromDate(t4.start_date), end: n4.obj_e_x = n4.obj_e_x || e3.posFromDate(t4.end_date) };
              }, _mouse_position_change: function(t4, e4) {
                var n4 = t4.x - e4.x, i2 = t4.y - e4.y;
                return Math.sqrt(n4 * n4 + i2 * i2);
              }, _is_number: function(t4) {
                return !isNaN(parseFloat(t4)) && isFinite(t4);
              }, on_mouse_move: function(t4) {
                if (this.drag.start_drag) {
                  var n4 = i.getRelativeEventPosition(t4, e3.$task_data), r2 = this.drag.start_drag.start_x, o2 = this.drag.start_drag.start_y;
                  (Date.now() - this.drag.timestamp > 50 || this._is_number(r2) && this._is_number(o2) && this._mouse_position_change({ x: r2, y: o2 }, n4) > 20) && this._start_dnd(t4);
                }
                if (this.drag.mode) {
                  if (!a(this, 40)) return;
                  this._update_on_move(t4);
                }
              }, _update_item_on_move: function(t4, n4, i2, r2, a2, o2) {
                var s = e3.getTask(n4), l = e3.mixin({}, s), c = e3.mixin({}, s);
                this._handlers[i2].apply(this, [c, t4, r2, o2]), e3.mixin(s, c, true), e3.callEvent("onTaskDrag", [s.id, i2, c, l, a2]), e3.mixin(s, c, true), e3.refreshTask(n4);
              }, _update_on_move: function(n4) {
                var a2 = this.drag, o2 = t3.$getConfig();
                if (a2.mode) {
                  var s = i.getRelativeEventPosition(n4, t3.$task_data);
                  if (a2.pos && a2.pos.x == s.x) return;
                  a2.pos = s;
                  var l = e3.dateFromPos(s.x);
                  if (!l || isNaN(l.getTime())) return;
                  var c = s.x - a2.start_x, u = e3.getTask(a2.id);
                  if (this._handlers[a2.mode]) {
                    if (a2.mode === o2.drag_mode.move) {
                      var d = {};
                      this._isMultiselect() && e3.getSelectedTasks().indexOf(a2.id) >= 0 && (d = this.dragMultiple);
                      var h = false;
                      if (e3.isSummaryTask(u) && e3.config.drag_project) {
                        var f = {};
                        f[a2.id] = r.copy(a2), h = true, d = r.mixin(f, this.dragMultiple);
                      }
                      var _ = this._find_max_shift(d, c);
                      for (var g in void 0 !== _ && (c = _), this._update_item_on_move(c, a2.id, a2.mode, a2, n4), d) {
                        var p = d[g];
                        if (h && p.id != a2.id && (e3._bulk_dnd = true), void 0 === _ && (h || Object.keys(d).length > 1)) var v = l - e3.dateFromPos(a2.start_x);
                        this._update_item_on_move(c, p.id, p.mode, p, n4, v);
                      }
                      e3._bulk_dnd = false;
                    } else this._update_item_on_move(c, a2.id, a2.mode, a2, n4);
                    e3._update_parents(a2.id);
                  }
                }
              }, on_mouse_down: function(n4, r2) {
                if (2 != n4.button || void 0 === n4.button) {
                  var a2 = t3.$getConfig(), o2 = e3.locate(n4), s = null;
                  if (e3.isTaskExists(o2) && (s = e3.getTask(o2)), !e3.isReadonly(s) && !this.drag.mode) {
                    this.clear_drag_state(), r2 = r2 || n4.target || n4.srcElement;
                    var l = i.getClassName(r2), c = this._get_drag_mode(l, r2);
                    if (!l || !c) return r2.parentNode ? this.on_mouse_down(n4, r2.parentNode) : void 0;
                    if (c) if (c.mode && c.mode != a2.drag_mode.ignore && a2["drag_" + c.mode]) {
                      if (o2 = e3.locate(r2), s = e3.copy(e3.getTask(o2) || {}), e3.isReadonly(s)) return this.clear_drag_state(), false;
                      if (e3.isSummaryTask(s) && !a2.drag_project && c.mode != a2.drag_mode.progress) return void this.clear_drag_state();
                      c.id = o2;
                      var u = i.getRelativeEventPosition(n4, e3.$task_data);
                      c.start_x = u.x, c.start_y = u.y, c.obj = s, this.drag.start_drag = c, this.drag.timestamp = Date.now();
                    } else this.clear_drag_state();
                    else if (e3.checkEvent("onMouseDown") && e3.callEvent("onMouseDown", [l.split(" ")[0]]) && r2.parentNode) return this.on_mouse_down(n4, r2.parentNode);
                  }
                }
              }, _fix_dnd_scale_time: function(n4, i2) {
                var r2 = t3.$getConfig(), a2 = e3.getScale().unit, o2 = e3.getScale().step;
                function s(n5) {
                  if (e3.config.correct_work_time) {
                    var i3 = t3.$getConfig();
                    e3.isWorkTime(n5.start_date, void 0, n5) || (n5.start_date = e3.calculateEndDate({ start_date: n5.start_date, duration: -1, unit: i3.duration_unit, task: n5 }));
                  }
                }
                r2.round_dnd_dates || (a2 = "minute", o2 = r2.time_step), i2.mode == r2.drag_mode.resize ? i2.left ? (n4.start_date = e3.roundDate({ date: n4.start_date, unit: a2, step: o2 }), s(n4)) : (n4.end_date = e3.roundDate({ date: n4.end_date, unit: a2, step: o2 }), function(n5) {
                  if (e3.config.correct_work_time) {
                    var i3 = t3.$getConfig();
                    e3.isWorkTime(new Date(n5.end_date - 1), void 0, n5) || (n5.end_date = e3.calculateEndDate({ start_date: n5.end_date, duration: 1, unit: i3.duration_unit, task: n5 }));
                  }
                }(n4)) : i2.mode == r2.drag_mode.move && (n4.start_date = e3.roundDate({ date: n4.start_date, unit: a2, step: o2 }), s(n4), n4.end_date = e3.calculateEndDate(n4));
              }, _fix_working_times: function(n4, i2) {
                var r2 = t3.$getConfig();
                (i2 = i2 || { mode: r2.drag_mode.move }).mode == r2.drag_mode.resize ? i2.left ? n4.start_date = e3.getClosestWorkTime({ date: n4.start_date, dir: "future", task: n4 }) : n4.end_date = e3.getClosestWorkTime({ date: n4.end_date, dir: "past", task: n4 }) : i2.mode == r2.drag_mode.move && e3.correctTaskWorkTime(n4);
              }, _finalize_mouse_up: function(t4, n4, i2, r2) {
                var a2 = e3.getTask(t4);
                if (n4.work_time && n4.correct_work_time && this._fix_working_times(a2, i2), this._fix_dnd_scale_time(a2, i2), this._fireEvent("before_finish", i2.mode, [t4, i2.mode, e3.copy(i2.obj), r2])) {
                  var o2 = t4;
                  e3._init_task_timing(a2), this.clear_drag_state(), e3.updateTask(a2.id), this._fireEvent("after_finish", i2.mode, [o2, i2.mode, r2]);
                } else this.clear_drag_state(), t4 == i2.id && (i2.obj._dhx_changed = false, e3.mixin(a2, i2.obj, true)), e3.refreshTask(a2.id);
              }, on_mouse_up: function(n4) {
                var i2 = this.drag;
                if (i2.mode && i2.id) {
                  var r2 = t3.$getConfig(), a2 = e3.getTask(i2.id), o2 = this.dragMultiple, s = false, l = 0;
                  i2.mode === r2.drag_mode.move && (e3.isSummaryTask(a2) && r2.drag_project || this._isMultiselect()) && (s = true, l = Object.keys(o2).length);
                  var c = function() {
                    if (s) for (var t4 in o2) this._finalize_mouse_up(o2[t4].id, r2, o2[t4], n4);
                    this._finalize_mouse_up(i2.id, r2, i2, n4);
                  };
                  s && l > 10 ? e3.batchUpdate((function() {
                    c.call(this);
                  }).bind(this)) : c.call(this);
                }
                this.clear_drag_state();
              }, _get_drag_mode: function(e4, n4) {
                var i2 = t3.$getConfig().drag_mode, r2 = { mode: null, left: null };
                switch ((e4 || "").split(" ")[0]) {
                  case "gantt_task_line":
                  case "gantt_task_content":
                    r2.mode = i2.move;
                    break;
                  case "gantt_task_drag":
                    r2.mode = i2.resize;
                    var a2 = n4.getAttribute("data-bind-property");
                    r2.left = "start_date" == a2;
                    break;
                  case "gantt_task_progress_drag":
                    r2.mode = i2.progress;
                    break;
                  case "gantt_link_control":
                  case "gantt_link_point":
                    r2.mode = i2.ignore;
                    break;
                  default:
                    r2 = null;
                }
                return r2;
              }, _start_dnd: function(n4) {
                var i2 = this.drag = this.drag.start_drag;
                delete i2.start_drag;
                var r2 = t3.$getConfig(), a2 = i2.id;
                if (r2["drag_" + i2.mode] && e3.callEvent("onBeforeDrag", [a2, i2.mode, n4]) && this._fireEvent("before_start", i2.mode, [a2, i2.mode, n4])) {
                  delete i2.start_drag;
                  var s = e3.getTask(a2);
                  if (e3.isReadonly(s)) return void this.clear_drag_state();
                  if (this._isMultiselect()) {
                    var l = e3.getSelectedTasks();
                    l.indexOf(i2.id) >= 0 && o.forEach(l, e3.bind(function(t4) {
                      var n5 = e3.getTask(t4);
                      e3.isSummaryTask(n5) && e3.config.drag_project && i2.mode == r2.drag_mode.move && this._addSubtasksToDragMultiple(n5.id), this.dragMultiple[t4] = e3.mixin({ id: n5.id, obj: e3.copy(n5) }, this.drag);
                    }, this));
                  }
                  e3.isSummaryTask(s) && e3.config.drag_project && i2.mode == r2.drag_mode.move && this._addSubtasksToDragMultiple(s.id), e3.callEvent("onTaskDragStart", []);
                } else this.clear_drag_state();
              }, _fireEvent: function(t4, n4, i2) {
                e3.assert(this._events[t4], "Invalid stage:{" + t4 + "}");
                var r2 = this._events[t4][n4];
                return e3.assert(r2, "Unknown after drop mode:{" + n4 + "}"), e3.assert(i2, "Invalid event arguments"), !e3.checkEvent(r2) || e3.callEvent(r2, i2);
              }, round_task_dates: function(e4) {
                var n4 = this.drag, i2 = t3.$getConfig();
                n4 || (n4 = { mode: i2.drag_mode.move }), this._fix_dnd_scale_time(e4, n4);
              }, destructor: function() {
                this._domEvents.detachAll();
              }, _isMultiselect: function() {
                return e3.config.drag_multiple && !!(e3.getSelectedTasks && e3.getSelectedTasks().length > 0);
              }, _addSubtasksToDragMultiple: function(t4) {
                e3.eachTask(function(t5) {
                  this.dragMultiple[t5.id] = e3.mixin({ id: t5.id, obj: e3.copy(t5) }, this.drag);
                }, t4, this);
              } };
            }(e2, n2), e2._tasks_dnd = t2, t2.init(n2);
          }, destructor: function() {
            t2 && (t2.destructor(), t2 = null);
          } };
        } };
      }, function(t, e, n) {
        var i = n(1), r = function(t2, e2) {
          var n2, r2, a, o, s, l = 10, c = 18;
          function u() {
            return { link_source_id: o, link_target_id: r2, link_from_start: s, link_to_start: a, link_landing_area: n2 };
          }
          var d = e2.$services, h = d.getService("state"), f = d.getService("dnd");
          h.registerProvider("linksDnD", u);
          var _ = new f(t2.$task_bars, { sensitivity: 0, updates_per_second: 60, mousemoveContainer: e2.$root, selector: ".gantt_link_point", preventDefault: true });
          function g(n3, i2, r3, a2, o2) {
            var s2 = function(n4, i3, r4) {
              var a3 = i3(n4), o3 = { x: a3.left, y: a3.top, width: a3.width, height: a3.height };
              r4.rtl ? (o3.xEnd = o3.x, o3.x = o3.xEnd + o3.width) : o3.xEnd = o3.x + o3.width;
              if (o3.yEnd = o3.y + o3.height, e2.getTaskType(n4.type) == e2.config.types.milestone) {
                var s3 = function(e3) {
                  var n5 = t2.getBarHeight(e3, true);
                  return Math.round(Math.sqrt(2 * n5 * n5)) - 2;
                }(n4.id);
                o3.x += (r4.rtl ? 1 : -1) * (s3 / 2), o3.xEnd += (r4.rtl ? -1 : 1) * (s3 / 2), o3.width = a3.xEnd - a3.x;
              }
              return o3;
            }(n3, function(t3) {
              return e2.getTaskPosition(t3);
            }, a2), l2 = { x: s2.x, y: s2.y };
            i2 || (l2.x = s2.xEnd), l2.y += e2.getTaskHeight(n3.id) / 2;
            var c2 = function(t3) {
              return e2.getTaskType(t3.type) == e2.config.types.milestone;
            }(n3) && o2 ? 2 : 0;
            return r3 = r3 || 0, a2.rtl && (r3 *= -1), l2.x += (i2 ? -1 : 1) * r3 - c2, l2;
          }
          function p(t3, n3) {
            var i2 = _.getPosition(t3), r3 = function(t4) {
              var e3 = 0, n4 = 0;
              return t4 && (e3 = t4.offsetWidth || 0, n4 = t4.offsetHeight || 0), { width: e3, height: n4 };
            }(n3), a2 = function() {
              var t4 = e2.$root;
              return { right: t4.offsetWidth, bottom: t4.offsetHeight };
            }(), o2 = e2.config.tooltip_offset_x || l, s2 = e2.config.tooltip_offset_y || l, u2 = e2.config.scroll_size || c, d2 = e2.$container.getBoundingClientRect().y + window.scrollY, h2 = { y: i2.y + s2, x: i2.x + o2, bottom: i2.y + r3.height + s2 + u2, right: i2.x + r3.width + o2 + u2 };
            return h2.bottom > a2.bottom + d2 && (h2.y = a2.bottom + d2 - r3.height - s2), h2.right > a2.right && (h2.x = a2.right - r3.width - o2), h2;
          }
          function v(t3) {
            var n3 = u(), i2 = ["gantt_link_tooltip"];
            n3.link_source_id && n3.link_target_id && (e2.isLinkAllowed(n3.link_source_id, n3.link_target_id, n3.link_from_start, n3.link_to_start) ? i2.push("gantt_allowed_link") : i2.push("gantt_invalid_link"));
            var r3 = e2.templates.drag_link_class(n3.link_source_id, n3.link_from_start, n3.link_target_id, n3.link_to_start);
            r3 && i2.push(r3);
            var a2 = "<div class='" + r3 + "'>" + e2.templates.drag_link(n3.link_source_id, n3.link_from_start, n3.link_target_id, n3.link_to_start) + "</div>";
            t3.innerHTML = a2;
          }
          function m() {
            o = s = r2 = null, a = true;
          }
          function y(n3, i2, r3, a2) {
            var o2 = function() {
              _._direction && _._direction.parentNode || (_._direction = document.createElement("div"), t2.$task_links.appendChild(_._direction));
              return _._direction;
            }(), s2 = u(), l2 = ["gantt_link_direction"];
            e2.templates.link_direction_class && l2.push(e2.templates.link_direction_class(s2.link_source_id, s2.link_from_start, s2.link_target_id, s2.link_to_start));
            var c2 = Math.sqrt(Math.pow(r3 - n3, 2) + Math.pow(a2 - i2, 2));
            if (c2 = Math.max(0, c2 - 3)) {
              o2.className = l2.join(" ");
              var d2 = (a2 - i2) / (r3 - n3), h2 = Math.atan(d2);
              2 == k(n3, r3, i2, a2) ? h2 += Math.PI : 3 == k(n3, r3, i2, a2) && (h2 -= Math.PI);
              var f2 = Math.sin(h2), g2 = Math.cos(h2), p2 = Math.round(i2), v2 = Math.round(n3), m2 = ["-webkit-transform: rotate(" + h2 + "rad)", "-moz-transform: rotate(" + h2 + "rad)", "-ms-transform: rotate(" + h2 + "rad)", "-o-transform: rotate(" + h2 + "rad)", "transform: rotate(" + h2 + "rad)", "width:" + Math.round(c2) + "px"];
              if (-1 != window.navigator.userAgent.indexOf("MSIE 8.0")) {
                m2.push('-ms-filter: "' + function(t3, e3) {
                  return "progid:DXImageTransform.Microsoft.Matrix(M11 = " + e3 + ",M12 = -" + t3 + ",M21 = " + t3 + ",M22 = " + e3 + ",SizingMethod = 'auto expand')";
                }(f2, g2) + '"');
                var y2 = Math.abs(Math.round(n3 - r3)), b = Math.abs(Math.round(a2 - i2));
                switch (k(n3, r3, i2, a2)) {
                  case 1:
                    p2 -= b;
                    break;
                  case 2:
                    v2 -= y2, p2 -= b;
                    break;
                  case 3:
                    v2 -= y2;
                }
              }
              m2.push("top:" + p2 + "px"), m2.push("left:" + v2 + "px"), o2.style.cssText = m2.join(";");
            }
          }
          function k(t3, e3, n3, i2) {
            return e3 >= t3 ? i2 <= n3 ? 1 : 4 : i2 <= n3 ? 2 : 3;
          }
          _.attachEvent("onBeforeDragStart", e2.bind(function(n3, r3) {
            var a2 = r3.target || r3.srcElement;
            if (m(), e2.getState("tasksDnd").drag_id) return false;
            if (i.locateClassName(a2, "gantt_link_point")) {
              i.locateClassName(a2, "task_start_date") && (s = true);
              var l2 = e2.locate(r3);
              o = l2;
              var c2 = e2.getTask(l2);
              if (e2.isReadonly(c2)) return m(), false;
              return this._dir_start = g(c2, !!s, 0, t2.$getConfig(), true), true;
            }
            return false;
          }, this)), _.attachEvent("onAfterDragStart", e2.bind(function(t3, n3) {
            e2.config.touch && e2.refreshData(), v(_.config.marker);
          }, this)), _.attachEvent("onDragMove", e2.bind(function(o2, s2) {
            var l2 = _.config, c2 = p(s2, l2.marker);
            !function(t3, e3) {
              t3.style.left = e3.x + "px", t3.style.top = e3.y + "px";
            }(l2.marker, c2);
            var u2 = !!i.locateClassName(s2, "gantt_link_control"), d2 = r2, h2 = n2, f2 = a, m2 = e2.locate(s2), k2 = true, b = i.getTargetNode(s2);
            if (i.isChildOf(b, e2.$root) || (u2 = false, m2 = null), u2 && (k2 = !i.locateClassName(s2, "task_end_date"), u2 = !!m2), r2 = m2, n2 = u2, a = k2, u2) {
              var w = e2.getTask(m2), x = t2.$getConfig(), $ = i.locateClassName(s2, "gantt_link_control"), S = 0;
              $ && (S = Math.floor($.offsetWidth / 2)), this._dir_end = g(w, !!a, S, x);
            } else this._dir_end = i.getRelativeEventPosition(s2, t2.$task_data), e2.env.isEdge && (this._dir_end.y += window.scrollY);
            var T = !(h2 == u2 && d2 == m2 && f2 == k2);
            return T && (d2 && e2.refreshTask(d2, false), m2 && e2.refreshTask(m2, false)), T && v(l2.marker), y(this._dir_start.x, this._dir_start.y, this._dir_end.x, this._dir_end.y), true;
          }, this)), _.attachEvent("onDragEnd", e2.bind(function() {
            var t3 = u();
            if (t3.link_source_id && t3.link_target_id && t3.link_source_id != t3.link_target_id) {
              var n3 = e2._get_link_type(t3.link_from_start, t3.link_to_start), i2 = { source: t3.link_source_id, target: t3.link_target_id, type: n3 };
              i2.type && e2.isLinkAllowed(i2) && e2.callEvent("onLinkCreated", [i2]) && e2.addLink(i2);
            }
            m(), e2.config.touch ? e2.refreshData() : (t3.link_source_id && e2.refreshTask(t3.link_source_id, false), t3.link_target_id && e2.refreshTask(t3.link_target_id, false)), _._direction && (_._direction.parentNode && _._direction.parentNode.removeChild(_._direction), _._direction = null);
          }, this)), e2.attachEvent("onGanttRender", e2.bind(function() {
            _._direction && y(this._dir_start.x, this._dir_start.y, this._dir_end.x, this._dir_end.y);
          }, this));
        };
        t.exports = { createLinkDND: function() {
          return { init: r };
        } };
      }, function(t, e, n) {
        var i = n(1), r = function(t2) {
          return { getVerticalScrollbar: function() {
            return t2.$ui.getView("scrollVer");
          }, getHorizontalScrollbar: function() {
            return t2.$ui.getView("scrollHor");
          }, _legacyGridResizerClass: function(t3) {
            for (var e2 = t3.getCellsByType("resizer"), n2 = 0; n2 < e2.length; n2++) {
              var i2 = e2[n2], r2 = false, a = i2.$parent.getPrevSibling(i2.$id);
              if (a && a.$config && "grid" === a.$config.id) r2 = true;
              else {
                var o = i2.$parent.getNextSibling(i2.$id);
                o && o.$config && "grid" === o.$config.id && (r2 = true);
              }
              r2 && (i2.$config.css = (i2.$config.css ? i2.$config.css + " " : "") + "gantt_grid_resize_wrap");
            }
          }, onCreated: function(e2) {
            var n2 = true;
            this._legacyGridResizerClass(e2), e2.attachEvent("onBeforeResize", function() {
              var r2 = t2.$ui.getView("timeline");
              r2 && (r2.$config.hidden = r2.$parent.$config.hidden = !t2.config.show_chart);
              var a = t2.$ui.getView("grid");
              if (a) {
                var o = a._getColsTotalWidth(), s = !t2.config.show_grid || !t2.config.grid_width || 0 === o;
                if (n2 && !s && false !== o && (t2.config.grid_width = o), a.$config.hidden = a.$parent.$config.hidden = s, !a.$config.hidden) {
                  var l = a._getGridWidthLimits();
                  if (l[0] && t2.config.grid_width < l[0] && (t2.config.grid_width = l[0]), l[1] && t2.config.grid_width > l[1] && (t2.config.grid_width = l[1]), r2 && t2.config.show_chart) {
                    if (a.$config.width = t2.config.grid_width - 1, !a.$config.scrollable && a.$config.scrollY && t2.$root.offsetWidth) {
                      var c = a.$gantt.$layout.$container.offsetWidth, u = t2.$ui.getView(a.$config.scrollY).$config.width, d = c - (a.$config.width + u);
                      d < 0 && (a.$config.width += d, t2.config.grid_width += d);
                    }
                    if (n2) a.$parent.$config.width = t2.config.grid_width, a.$parent.$config.group && t2.$layout._syncCellSizes(a.$parent.$config.group, { value: a.$parent.$config.width, isGravity: false });
                    else if (r2 && !i.isChildOf(r2.$task, e2.$view)) {
                      if (!a.$config.original_grid_width) {
                        var h = t2.skins[t2.skin];
                        h && h.config && h.config.grid_width ? a.$config.original_grid_width = h.config.grid_width : a.$config.original_grid_width = 0;
                      }
                      t2.config.grid_width = a.$config.original_grid_width, a.$parent.$config.width = t2.config.grid_width;
                    } else a.$parent._setContentSize(a.$config.width, null), t2.$layout._syncCellSizes(a.$parent.$config.group, { value: t2.config.grid_width, isGravity: false });
                  } else r2 && i.isChildOf(r2.$task, e2.$view) && (a.$config.original_grid_width = t2.config.grid_width), n2 || (a.$parent.$config.width = 0);
                }
                n2 = false;
              }
            }), this._initScrollStateEvents(e2);
          }, _initScrollStateEvents: function(e2) {
            t2._getVerticalScrollbar = this.getVerticalScrollbar, t2._getHorizontalScrollbar = this.getHorizontalScrollbar;
            var n2 = this.getVerticalScrollbar(), i2 = this.getHorizontalScrollbar();
            n2 && n2.attachEvent("onScroll", function(e3, n3, i3) {
              var r2 = t2.getScrollState();
              t2.callEvent("onGanttScroll", [r2.x, e3, r2.x, n3]);
            }), i2 && i2.attachEvent("onScroll", function(e3, n3, i3) {
              var r2 = t2.getScrollState();
              t2.callEvent("onGanttScroll", [e3, r2.y, n3, r2.y]);
              var a = t2.$ui.getView("grid");
              a && a.$grid_data && !a.$config.scrollable && (a.$grid_data.style.left = a.$grid.scrollLeft + "px", a.$grid_data.scrollLeft = a.$grid.scrollLeft);
            }), e2.attachEvent("onResize", function() {
              n2 && !t2.$scroll_ver && (t2.$scroll_ver = n2.$scroll_ver), i2 && !t2.$scroll_hor && (t2.$scroll_hor = i2.$scroll_hor);
            });
          }, _findGridResizer: function(t3, e2) {
            for (var n2, i2 = t3.getCellsByType("resizer"), r2 = true, a = 0; a < i2.length; a++) {
              var o = i2[a];
              o._getSiblings();
              var s = o._behind, l = o._front;
              if (s && s.$content === e2 || s.isChild && s.isChild(e2)) {
                n2 = o, r2 = true;
                break;
              }
              if (l && l.$content === e2 || l.isChild && l.isChild(e2)) {
                n2 = o, r2 = false;
                break;
              }
            }
            return { resizer: n2, gridFirst: r2 };
          }, onInitialized: function(e2) {
            var n2 = t2.$ui.getView("grid"), i2 = this._findGridResizer(e2, n2);
            if (i2.resizer) {
              var r2, a = i2.gridFirst, o = i2.resizer;
              if ("x" !== o.$config.mode) return;
              o.attachEvent("onResizeStart", function(e3, n3) {
                var i3 = t2.$ui.getView("grid"), o2 = i3 ? i3.$parent : null;
                if (o2) {
                  var s = i3._getGridWidthLimits();
                  i3.$config.scrollable || (o2.$config.minWidth = s[0]), o2.$config.maxWidth = s[1];
                }
                return r2 = a ? e3 : n3, t2.callEvent("onGridResizeStart", [r2]);
              }), o.attachEvent("onResize", function(e3, n3) {
                var i3 = a ? e3 : n3;
                return t2.callEvent("onGridResize", [r2, i3]);
              }), o.attachEvent("onResizeEnd", function(e3, n3, i3, r3) {
                var o2 = a ? e3 : n3, s = a ? i3 : r3, l = t2.$ui.getView("grid"), c = l ? l.$parent : null;
                c && (c.$config.minWidth = void 0);
                var u = t2.callEvent("onGridResizeEnd", [o2, s]);
                return u && 0 !== s && (t2.config.grid_width = s), u;
              });
            }
          }, onDestroyed: function(t3) {
          } };
        };
        t.exports = r;
      }, function(t, e) {
        t.exports = function(t2) {
          delete t2.addTaskLayer, delete t2.addLinkLayer;
        };
      }, function(t, e) {
        t.exports = function() {
          function t2(t3) {
            return t3.$ui.getView("timeline");
          }
          function e2(t3) {
            return t3.$ui.getView("grid");
          }
          function n(n2) {
            var i2 = t2(n2);
            if (i2 && !i2.$config.hidden) return i2;
            var r2 = e2(n2);
            return r2 && !r2.$config.hidden ? r2 : null;
          }
          function i(t3) {
            var i2 = null, r2 = false;
            return [".gantt_drag_marker.gantt_grid_resize_area", ".gantt_drag_marker .gantt_row.gantt_row_task", ".gantt_drag_marker.gantt_grid_dnd_marker"].forEach(function(t4) {
              r2 = r2 || !!document.querySelector(t4);
            }), (i2 = r2 ? e2(t3) : n(t3)) ? a(t3, i2, "scrollY") : null;
          }
          function r(t3) {
            var e3 = n(t3);
            return e3 && "grid" != e3.id ? a(t3, e3, "scrollX") : null;
          }
          function a(t3, e3, n2) {
            var i2 = e3.$config[n2];
            return t3.$ui.getView(i2);
          }
          var o = "DEFAULT_VALUE";
          function s(t3, e3, n2, i2) {
            var r2 = t3(this);
            return r2 && r2.isVisible() ? r2[e3].apply(r2, n2) : i2 ? i2() : o;
          }
          return { getColumnIndex: function(t3) {
            var n2 = s.call(this, e2, "getColumnIndex", [t3]);
            return n2 === o ? 0 : n2;
          }, dateFromPos: function(e3) {
            var n2 = s.call(this, t2, "dateFromPos", Array.prototype.slice.call(arguments));
            return n2 === o ? this.getState().min_date : n2;
          }, posFromDate: function(e3) {
            var n2 = s.call(this, t2, "posFromDate", [e3]);
            return n2 === o ? 0 : n2;
          }, getRowTop: function(n2) {
            var i2 = this, r2 = s.call(i2, t2, "getRowTop", [n2], function() {
              return s.call(i2, e2, "getRowTop", [n2]);
            });
            return r2 === o ? 0 : r2;
          }, getTaskTop: function(n2) {
            var i2 = this, r2 = s.call(i2, t2, "getItemTop", [n2], function() {
              return s.call(i2, e2, "getItemTop", [n2]);
            });
            return r2 === o ? 0 : r2;
          }, getTaskPosition: function(e3, n2, i2) {
            var r2 = s.call(this, t2, "getItemPosition", [e3, n2, i2]);
            return r2 === o ? { left: 0, top: this.getTaskTop(e3.id), height: this.getTaskBarHeight(e3.id), width: 0 } : r2;
          }, getTaskBarHeight: function(n2, i2) {
            var r2 = this, a2 = s.call(r2, t2, "getBarHeight", [n2, i2], function() {
              return s.call(r2, e2, "getItemHeight", [n2]);
            });
            return a2 === o ? 0 : a2;
          }, getTaskHeight: function(n2) {
            var i2 = this, r2 = s.call(i2, t2, "getItemHeight", [n2], function() {
              return s.call(i2, e2, "getItemHeight", [n2]);
            });
            return r2 === o ? 0 : r2;
          }, columnIndexByDate: function(e3) {
            var n2 = s.call(this, t2, "columnIndexByDate", [e3]);
            return n2 === o ? 0 : n2;
          }, roundTaskDates: function() {
            s.call(this, t2, "roundTaskDates", []);
          }, getScale: function() {
            var e3 = s.call(this, t2, "getScale", []);
            return e3 === o ? null : e3;
          }, getTaskNode: function(e3) {
            var n2 = t2(this);
            if (n2 && n2.isVisible()) {
              var i2 = n2._taskRenderer.rendered[e3];
              if (!i2) {
                var r2 = n2.$config.item_attribute;
                i2 = n2.$task_bars.querySelector("[" + r2 + "='" + e3 + "']");
              }
              return i2 || null;
            }
            return null;
          }, getLinkNode: function(e3) {
            var n2 = t2(this);
            return n2.isVisible() ? n2._linkRenderer.rendered[e3] : null;
          }, scrollTo: function(t3, e3) {
            var n2 = i(this), a2 = r(this), o2 = { position: 0 }, s2 = { position: 0 };
            n2 && (s2 = n2.getScrollState()), a2 && (o2 = a2.getScrollState());
            var l = a2 && 1 * t3 == t3, c = n2 && 1 * e3 == e3;
            if (l && c) for (var u = n2._getLinkedViews(), d = a2._getLinkedViews(), h = [], f = 0; f < u.length; f++) for (var _ = 0; _ < d.length; _++) u[f].$config.id && d[_].$config.id && u[f].$config.id === d[_].$config.id && h.push(u[f].$config.id);
            l && (h && h.forEach((function(t4) {
              this.$ui.getView(t4).$config.$skipSmartRenderOnScroll = true;
            }).bind(this)), a2.scroll(t3), h && h.forEach((function(t4) {
              this.$ui.getView(t4).$config.$skipSmartRenderOnScroll = false;
            }).bind(this))), c && n2.scroll(e3);
            var g = { position: 0 }, p = { position: 0 };
            n2 && (g = n2.getScrollState()), a2 && (p = a2.getScrollState()), this.callEvent("onGanttScroll", [o2.position, s2.position, p.position, g.position]);
          }, showDate: function(t3) {
            var e3 = this.posFromDate(t3), n2 = Math.max(e3 - this.config.task_scroll_offset, 0);
            this.scrollTo(n2);
          }, showTask: function(n2) {
            var i2 = this.getTaskPosition(this.getTask(n2)), r2 = i2.left;
            this.config.rtl && (r2 = i2.left + i2.width);
            var o2, s2 = Math.max(r2 - this.config.task_scroll_offset, 0), l = this._scroll_state().y;
            o2 = l ? i2.top - (l - this.getTaskBarHeight(n2)) / 2 : i2.top, this.scrollTo(s2, o2);
            var c = e2(this), u = t2(this);
            c && u && c.$config.scrollY != u.$config.scrollY && a(this, c, "scrollY").scrollTo(null, o2);
          }, _scroll_state: function() {
            var t3 = { x: false, y: false, x_pos: 0, y_pos: 0, scroll_size: this.config.scroll_size + 1, x_inner: 0, y_inner: 0 }, e3 = i(this), n2 = r(this);
            if (n2) {
              var a2 = n2.getScrollState();
              a2.visible && (t3.x = a2.size, t3.x_inner = a2.scrollSize), t3.x_pos = a2.position || 0;
            }
            if (e3) {
              var o2 = e3.getScrollState();
              o2.visible && (t3.y = o2.size, t3.y_inner = o2.scrollSize), t3.y_pos = o2.position || 0;
            }
            return t3;
          }, getScrollState: function() {
            var t3 = this._scroll_state();
            return { x: t3.x_pos, y: t3.y_pos, inner_width: t3.x, inner_height: t3.y, width: t3.x_inner, height: t3.y_inner };
          } };
        };
      }, function(t, e) {
        function n(t2, e2) {
          var n2 = e2.skin;
          if (!n2 || t2) for (var i = document.getElementsByTagName("link"), r = 0; r < i.length; r++) {
            var a = i[r].href.match("dhtmlxgantt_([a-z_]+).css");
            if (a && (e2.skins[a[1]] || !n2)) {
              n2 = a[1];
              break;
            }
          }
          e2.skin = n2 || "terrace";
          var o = e2.skins[e2.skin] || e2.skins.terrace;
          !function(t3, e3, n3) {
            for (var i2 in e3) (void 0 === t3[i2] || n3) && (t3[i2] = e3[i2]);
          }(e2.config, o.config, t2);
          var s = e2.getGridColumns();
          s[1] && !e2.defined(s[1].width) && (s[1].width = o._second_column_width), s[2] && !e2.defined(s[2].width) && (s[2].width = o._third_column_width);
          for (r = 0; r < s.length; r++) {
            var l = s[r];
            "add" == l.name && (l.width || (l.width = 44), e2.defined(l.min_width) && e2.defined(l.max_width) || (l.min_width = l.min_width || l.width, l.max_width = l.max_width || l.width), l.min_width && (l.min_width = +l.min_width), l.max_width && (l.max_width = +l.max_width), l.width && (l.width = +l.width, l.width = l.min_width && l.min_width > l.width ? l.min_width : l.width, l.width = l.max_width && l.max_width < l.width ? l.max_width : l.width));
          }
          o.config.task_height && (e2.config.task_height = o.config.task_height || "full"), o.config.bar_height && (e2.config.bar_height = o.config.bar_height || "full"), o._lightbox_template && (e2._lightbox_template = o._lightbox_template), o._redefine_lightbox_buttons && (e2.config.buttons_right = o._redefine_lightbox_buttons.buttons_right, e2.config.buttons_left = o._redefine_lightbox_buttons.buttons_left), e2.resetLightbox();
        }
        t.exports = function(t2) {
          t2.resetSkin || (t2.resetSkin = function() {
            this.skin = "", n(true, this);
          }, t2.skins = {}, t2.attachEvent("onGanttLayoutReady", function() {
            n(false, this);
          }));
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.skyblue = { config: { grid_width: 350, row_height: 27, scale_height: 27, link_line_width: 1, link_arrow_size: 8, lightbox_additional_height: 75 }, _second_column_width: 95, _third_column_width: 80 };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.meadow = { config: { grid_width: 350, row_height: 27, scale_height: 30, link_line_width: 2, link_arrow_size: 6, lightbox_additional_height: 72 }, _second_column_width: 95, _third_column_width: 80 };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.terrace = { config: { grid_width: 360, row_height: 35, scale_height: 35, link_line_width: 2, link_arrow_size: 6, lightbox_additional_height: 75 }, _second_column_width: 90, _third_column_width: 70 };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.broadway = { config: { grid_width: 360, row_height: 35, scale_height: 35, link_line_width: 1, link_arrow_size: 7, lightbox_additional_height: 86 }, _second_column_width: 90, _third_column_width: 80, _lightbox_template: "<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span><div class='gantt_cancel_btn'></div></div><div class='gantt_cal_larea'></div>", _config_buttons_left: {}, _config_buttons_right: { gantt_delete_btn: "icon_delete", gantt_save_btn: "icon_save" } };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.material = { config: { grid_width: 411, row_height: 34, task_height_offset: 6, scale_height: 36, link_line_width: 2, link_arrow_size: 6, lightbox_additional_height: 80 }, _second_column_width: 110, _third_column_width: 75, _redefine_lightbox_buttons: { buttons_left: ["dhx_delete_btn"], buttons_right: ["dhx_save_btn", "dhx_cancel_btn"] } }, t2.attachEvent("onAfterTaskDrag", function(e2) {
            var n = t2.getTaskNode(e2);
            n && (n.className += " gantt_drag_animation", setTimeout(function() {
              var t3 = n.className.indexOf(" gantt_drag_animation");
              t3 > -1 && (n.className = n.className.slice(0, t3));
            }, 200));
          });
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.contrast_black = { config: { grid_width: 360, row_height: 35, scale_height: 35, link_line_width: 2, link_arrow_size: 6, lightbox_additional_height: 75 }, _second_column_width: 100, _third_column_width: 80 };
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2.skins.contrast_white = { config: { grid_width: 360, row_height: 35, scale_height: 35, link_line_width: 2, link_arrow_size: 6, lightbox_additional_height: 75 }, _second_column_width: 100, _third_column_width: 80 };
        };
      }, function(t, e, n) {
        t.exports = function(t2) {
          t2.ext || (t2.ext = {});
          for (var e2 = [n(255), n(256), n(257)], i = 0; i < e2.length; i++) e2[i] && e2[i](t2);
          var r = n(258).default;
          t2.ext.zoom = new r(t2);
        };
      }, function(t, e, n) {
        var i = n(1), r = n(10);
        t.exports = function(t2) {
          var e2 = 50, n2 = 30, a = 10, o = 50, s = null, l = false, c = null, u = { started: false }, d = {};
          function h(e3) {
            return e3 && i.isChildOf(e3, t2.$root) && e3.offsetHeight;
          }
          function f() {
            var e3 = !!document.querySelector(".gantt_drag_marker"), n3 = !!document.querySelector(".gantt_drag_marker.gantt_grid_resize_area") || !!document.querySelector(".gantt_drag_marker.gantt_row_grid_resize_area"), i2 = !!document.querySelector(".gantt_link_direction"), r2 = t2.getState(), a2 = r2.autoscroll;
            return l = e3 && !n3 && !i2, !(!r2.drag_mode && !e3 || n3) || a2;
          }
          function _(e3) {
            if (c && (clearTimeout(c), c = null), e3) {
              var n3 = t2.config.autoscroll_speed;
              n3 && n3 < 10 && (n3 = 10), c = setTimeout(function() {
                s = setInterval(v, n3 || o);
              }, t2.config.autoscroll_delay || a);
            }
          }
          function g(t3) {
            t3 ? (_(true), u.started || (u.x = d.x, u.y = d.y, u.started = true)) : (s && (clearInterval(s), s = null), _(false), u.started = false);
          }
          function p(e3) {
            var n3 = f();
            if (!s && !c || n3 || g(false), !t2.config.autoscroll || !n3) return false;
            d = { x: e3.clientX, y: e3.clientY }, "touchmove" == e3.type && (d.x = e3.targetTouches[0].clientX, d.y = e3.targetTouches[0].clientY), !s && n3 && g(true);
          }
          function v() {
            if (!f()) return g(false), false;
            var e3 = h(t2.$task) ? t2.$task : h(t2.$grid) ? t2.$grid : t2.$root;
            if (e3) {
              var r2 = false;
              [".gantt_drag_marker.gantt_grid_resize_area", ".gantt_drag_marker .gantt_row.gantt_row_task", ".gantt_drag_marker.gantt_grid_dnd_marker"].forEach(function(t3) {
                r2 = r2 || !!document.querySelector(t3);
              }), r2 && (e3 = t2.$grid);
              var a2 = i.getNodePosition(e3), o2 = d.x - a2.x, s2 = d.y - a2.y + window.scrollY, c2 = l ? 0 : m(o2, a2.width, u.x - a2.x), _2 = m(s2, a2.height, u.y - a2.y + window.scrollY), p2 = t2.getScrollState(), v2 = p2.y, y = p2.inner_height, k = p2.height, b = p2.x, w = p2.inner_width, x = p2.width;
              _2 && !y ? _2 = 0 : _2 < 0 && !v2 ? _2 = 0 : _2 > 0 && v2 + y >= k + 2 && (_2 = 0), c2 && !w ? c2 = 0 : c2 < 0 && !b ? c2 = 0 : c2 > 0 && b + w >= x && (c2 = 0);
              var $ = t2.config.autoscroll_step;
              $ && $ < 2 && ($ = 2), c2 *= $ || n2, _2 *= $ || n2, (c2 || _2) && function(e4, n3) {
                var i2 = t2.getScrollState(), r3 = null, a3 = null;
                e4 && (r3 = i2.x + e4, r3 = Math.min(i2.width, r3), r3 = Math.max(0, r3));
                n3 && (a3 = i2.y + n3, a3 = Math.min(i2.height, a3), a3 = Math.max(0, a3));
                t2.scrollTo(r3, a3);
              }(c2, _2);
            }
          }
          function m(t3, n3, i2) {
            return t3 - e2 < 0 && t3 < i2 ? -1 : t3 > n3 - e2 && t3 > i2 ? 1 : 0;
          }
          t2.attachEvent("onGanttReady", function() {
            if (!r(t2)) {
              var e3 = i.getRootNode(t2.$root) || document.body;
              t2.eventRemove(e3, "mousemove", p), t2.event(e3, "mousemove", p), t2.eventRemove(e3, "touchmove", p), t2.event(e3, "touchmove", p), t2.eventRemove(e3, "pointermove", p), t2.event(e3, "pointermove", p);
            }
          }), t2.attachEvent("onDestroy", function() {
            g(false);
          });
        };
      }, function(t, e) {
        function n(t2) {
          "@babel/helpers - typeof";
          return (n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        window.jQuery && function(t2) {
          var e2 = [];
          t2.fn.dhx_gantt = function(i) {
            if ("string" != typeof (i = i || {})) {
              var r = [];
              return this.each(function() {
                if (this && this.getAttribute) if (this.gantt || window.gantt.$root == this) r.push("object" == n(this.gantt) ? this.gantt : window.gantt);
                else {
                  var t3 = window.gantt.$container && window.Gantt ? window.Gantt.getGanttInstance() : window.gantt;
                  for (var e3 in i) "data" != e3 && (t3.config[e3] = i[e3]);
                  t3.init(this), i.data && t3.parse(i.data), r.push(t3);
                }
              }), 1 === r.length ? r[0] : r;
            }
            if (e2[i]) return e2[i].apply(this, []);
            t2.error("Method " + i + " does not exist on jQuery.dhx_gantt");
          };
        }(window.jQuery), t.exports = null;
      }, function(t, e) {
        window.dhtmlx && (window.dhtmlx.attaches || (window.dhtmlx.attaches = {}), window.dhtmlx.attaches.attachGantt = function(t2, e2, n) {
          var i = document.createElement("DIV");
          n = n || window.gantt, i.id = "gantt_" + n.uid(), i.style.width = "100%", i.style.height = "100%", i.cmp = "grid", document.body.appendChild(i), this.attachObject(i.id), this.dataType = "gantt", this.dataObj = n;
          var r = this.vs[this.av];
          r.grid = n, n.init(i.id, t2, e2), i.firstChild.style.border = "none", r.gridId = i.id, r.gridObj = i;
          return this.vs[this._viewRestore()].grid;
        }), void 0 !== window.dhtmlXCellObject && (window.dhtmlXCellObject.prototype.attachGantt = function(t2, e2, n) {
          n = n || window.gantt;
          var i = document.createElement("DIV");
          return i.id = "gantt_" + n.uid(), i.style.width = "100%", i.style.height = "100%", i.cmp = "grid", document.body.appendChild(i), this.attachObject(i.id), this.dataType = "gantt", this.dataObj = n, n.init(i.id, t2, e2), i.firstChild.style.border = "none", i = null, this.callEvent("_onContentAttach", []), this.dataObj;
        }), t.exports = null;
      }, function(t, e, n) {
        Object.defineProperty(e, "__esModule", { value: true });
        var i = n(7), r = n(4), a = ["ctrlKey", "altKey", "shiftKey", "metaKey"], o = [[{ unit: "month", date: "%M", step: 1 }, { unit: "day", date: "%d", step: 1 }], [{ unit: "day", date: "%d %M", step: 1 }], [{ unit: "day", date: "%d %M", step: 1 }, { unit: "hour", date: "%H:00", step: 8 }], [{ unit: "day", date: "%d %M", step: 1 }, { unit: "hour", date: "%H:00", step: 1 }]], s = function() {
          function t2(t3) {
            var e2 = this;
            this.zoomIn = function() {
              var t4 = e2.getCurrentLevel() - 1;
              t4 < 0 || e2.setLevel(t4);
            }, this.zoomOut = function() {
              var t4 = e2.getCurrentLevel() + 1;
              t4 > e2._levels.length - 1 || e2.setLevel(t4);
            }, this.getCurrentLevel = function() {
              return e2._activeLevelIndex;
            }, this.getLevels = function() {
              return e2._levels;
            }, this.setLevel = function(t4) {
              var n2 = e2._getZoomIndexByName(t4);
              -1 === n2 && e2.$gantt.assert(-1 !== n2, "Invalid zoom level for gantt.ext.zoom.setLevel. " + t4 + " is not an expected value."), e2._setLevel(n2, 0);
            }, this._getZoomIndexByName = function(t4) {
              var n2 = -1;
              if ("string" == typeof t4) {
                if (!isNaN(Number(t4)) && e2._levels[Number(t4)]) n2 = Number(t4);
                else for (var i2 = 0; i2 < e2._levels.length; i2++) if (e2._levels[i2].name === t4) {
                  n2 = i2;
                  break;
                }
              } else n2 = t4;
              return n2;
            }, this._getVisibleDate = function() {
              if (!e2.$gantt.$task) return null;
              var t4 = e2.$gantt.getScrollState().x, n2 = e2.$gantt.$task.offsetWidth;
              e2._visibleDate = e2.$gantt.dateFromPos(t4 + n2 / 2);
            }, this._setLevel = function(t4, n2) {
              e2._activeLevelIndex = t4;
              var i2 = e2.$gantt, r2 = i2.copy(e2._levels[e2._activeLevelIndex]), a2 = i2.copy(r2);
              if (delete a2.name, i2.mixin(i2.config, a2, true), !!i2.$root && !!i2.$task) {
                if (n2) {
                  var o2 = e2.$gantt.dateFromPos(n2 + e2.$gantt.getScrollState().x);
                  e2.$gantt.render();
                  var s2 = e2.$gantt.posFromDate(o2);
                  e2.$gantt.scrollTo(s2 - n2);
                } else {
                  var l = e2.$gantt.$task.offsetWidth;
                  e2._visibleDate || e2._getVisibleDate();
                  var c = e2._visibleDate;
                  e2.$gantt.render();
                  s2 = e2.$gantt.posFromDate(c);
                  e2.$gantt.scrollTo(s2 - l / 2);
                }
                e2.callEvent("onAfterZoom", [e2._activeLevelIndex, r2]);
              }
            }, this._attachWheelEvent = function(t4) {
              var n2, r2 = i.isFF ? "wheel" : "mousewheel";
              (n2 = "function" == typeof t4.element ? t4.element() : t4.element) && e2._domEvents.attach(n2, r2, e2.$gantt.bind(function(t5) {
                if (this._useKey) {
                  if (a.indexOf(this._useKey) < 0) return false;
                  if (!t5[this._useKey]) return false;
                }
                if ("function" == typeof this._handler) return this._handler.apply(this, [t5]), true;
              }, e2), { passive: false });
            }, this._defaultHandler = function(t4) {
              var n2 = e2.$gantt.$task.getBoundingClientRect().x, i2 = t4.clientX - n2, r2 = false;
              (e2.$gantt.env.isFF ? -40 * t4.deltaY : t4.wheelDelta) > 0 && (r2 = true), t4.preventDefault(), t4.stopPropagation(), e2._setScaleSettings(r2, i2);
            }, this._setScaleDates = function() {
              e2._initialStartDate && e2._initialEndDate && (e2.$gantt.config.start_date = e2._initialStartDate, e2.$gantt.config.end_date = e2._initialEndDate);
            }, this.$gantt = t3, this._domEvents = this.$gantt._createDomEventScope();
          }
          return t2.prototype.init = function(t3) {
            var e2 = this;
            this.$gantt.env.isNode || (this._initialStartDate = t3.startDate, this._initialEndDate = t3.endDate, this._activeLevelIndex = t3.activeLevelIndex ? t3.activeLevelIndex : 0, this._levels = this._mapScales(t3.levels || o), this._handler = t3.handler || this._defaultHandler, this._minColumnWidth = t3.minColumnWidth || 60, this._maxColumnWidth = t3.maxColumnWidth || 240, this._widthStep = t3.widthStep || 3 / 8 * t3.minColumnWidth, this._useKey = t3.useKey, this._initialized || (r(this), this.$gantt.attachEvent("onGanttScroll", function() {
              e2._getVisibleDate();
            })), this._domEvents.detachAll(), "wheel" === t3.trigger && (this.$gantt.$root ? this._attachWheelEvent(t3) : this.$gantt.attachEvent("onGanttReady", function() {
              e2._attachWheelEvent(t3);
            })), this._initialized = true, this.setLevel(this._activeLevelIndex));
          }, t2.prototype._mapScales = function(t3) {
            return t3.map(function(t4) {
              return Array.isArray(t4) ? { scales: t4 } : t4;
            });
          }, t2.prototype._setScaleSettings = function(t3, e2) {
            t3 ? this._stepUp(e2) : this._stepDown(e2);
          }, t2.prototype._stepUp = function(t3) {
            if (!(this._activeLevelIndex >= this._levels.length - 1)) {
              var e2 = this._activeLevelIndex;
              if (this._setScaleDates(), this._widthStep) {
                var n2 = this.$gantt.config.min_column_width + this._widthStep;
                n2 > this._maxColumnWidth && (n2 = this._minColumnWidth, e2++), this.$gantt.config.min_column_width = n2;
              } else e2++;
              this._setLevel(e2, t3);
            }
          }, t2.prototype._stepDown = function(t3) {
            if (!(this._activeLevelIndex < 1)) {
              var e2 = this._activeLevelIndex;
              if (this._setScaleDates(), this._widthStep) {
                var n2 = this.$gantt.config.min_column_width - this._widthStep;
                n2 < this._minColumnWidth && (n2 = this._maxColumnWidth, e2--), this.$gantt.config.min_column_width = n2;
              } else e2--;
              this._setLevel(e2, t3);
            }
          }, t2;
        }();
        e.default = s;
      }, function(t, e) {
        t.exports = function(t2) {
          function e2(e3) {
            var n2 = e3.$config.scrollX ? t2.$ui.getView(e3.$config.scrollX) : null, i2 = e3.$config.scrollY ? t2.$ui.getView(e3.$config.scrollY) : null, r = { x: null, y: null };
            n2 && (n2.getScrollState().visible && (r.x = n2.$view.scrollLeft));
            i2 && (i2.getScrollState().visible && (r.y = i2.$view.scrollTop));
            return r;
          }
          function n() {
            var e3;
            return t2.$ui.getView("timeline") && (e3 = t2.$ui.getView("timeline")._tasks_dnd), e3;
          }
          t2.config.touch_drag = 500, t2.config.touch = true, t2.config.touch_feedback = true, t2.config.touch_feedback_duration = 1, t2._prevent_touch_scroll = false, t2._touch_feedback = function() {
            t2.config.touch_feedback && navigator.vibrate && navigator.vibrate(t2.config.touch_feedback_duration);
          }, t2.attachEvent("onGanttReady", t2.bind(function() {
            if ("force" != this.config.touch && (this.config.touch = this.config.touch && (-1 != navigator.userAgent.indexOf("Mobile") || -1 != navigator.userAgent.indexOf("iPad") || -1 != navigator.userAgent.indexOf("Android") || -1 != navigator.userAgent.indexOf("Touch")) || "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1), this.config.touch) {
              var t3 = true;
              try {
                document.createEvent("TouchEvent");
              } catch (e3) {
                t3 = false;
              }
              t3 ? this._touch_events(["touchmove", "touchstart", "touchend"], function(t4) {
                return t4.touches && t4.touches.length > 1 ? null : t4.touches[0] ? { target: t4.target, pageX: t4.touches[0].pageX, pageY: t4.touches[0].pageY, clientX: t4.touches[0].clientX, clientY: t4.touches[0].clientY } : t4;
              }, function() {
                return false;
              }) : window.navigator.pointerEnabled ? this._touch_events(["pointermove", "pointerdown", "pointerup"], function(t4) {
                return "mouse" == t4.pointerType ? null : t4;
              }, function(t4) {
                return !t4 || "mouse" == t4.pointerType;
              }) : window.navigator.msPointerEnabled && this._touch_events(["MSPointerMove", "MSPointerDown", "MSPointerUp"], function(t4) {
                return t4.pointerType == t4.MSPOINTER_TYPE_MOUSE ? null : t4;
              }, function(t4) {
                return !t4 || t4.pointerType == t4.MSPOINTER_TYPE_MOUSE;
              });
            }
          }, t2));
          var i = [];
          t2._touch_events = function(r, a, o) {
            for (var s, l = 0, c = false, u = false, d = null, h = null, f = null, _ = [], g = null, p = 0; p < i.length; p++) t2.eventRemove(i[p][0], i[p][1], i[p][2]);
            (i = []).push([t2.$container, r[0], function(i2) {
              var r2 = n();
              if (!o(i2) && c) {
                h && clearTimeout(h);
                var f2 = a(i2);
                if (r2 && (r2.drag.id || r2.drag.start_drag)) return r2.on_mouse_move(f2), i2.preventDefault && i2.preventDefault(), i2.cancelBubble = true, false;
                if (!t2._prevent_touch_scroll) {
                  if (f2 && d) {
                    var _2 = d.pageX - f2.pageX, p2 = d.pageY - f2.pageY;
                    if (!u && (Math.abs(_2) > 5 || Math.abs(p2) > 5) && (u = true, l = 0, s = g ? e2(g) : t2.getScrollState()), u) {
                      var m, y = s.x + _2, k = s.y + p2;
                      if (g ? (!function(e3, n2, i3) {
                        var r3 = e3.$config.scrollX ? t2.$ui.getView(e3.$config.scrollX) : null, a2 = e3.$config.scrollY ? t2.$ui.getView(e3.$config.scrollY) : null;
                        r3 && r3.scrollTo(n2, null), a2 && a2.scrollTo(null, i3);
                      }(g, y, k), m = e2(g)) : (t2.scrollTo(y, k), m = t2.getScrollState()), s.x != m.x && p2 > 2 * _2 || s.y != m.y && _2 > 2 * p2) return v(i2);
                    }
                  }
                  return v(i2);
                }
                return true;
              }
            }]), i.push([this.$container, "contextmenu", function(t3) {
              if (c) return v(t3);
            }]), i.push([this.$container, r[1], function(e3) {
              if (document && document.body && document.body.classList.add("gantt_touch_active"), !o(e3)) if (e3.touches && e3.touches.length > 1) c = false;
              else {
                d = a(e3), g = function(e4) {
                  for (var n2 = t2.$layout.getCellsByType("viewCell"), i3 = 0; i3 < n2.length; i3++) {
                    var r2 = n2[i3].$view.getBoundingClientRect();
                    if (e4.clientX >= r2.left && e4.clientX <= r2.right && e4.clientY <= r2.bottom && e4.clientY >= r2.top) return n2[i3];
                  }
                }(d), t2._locate_css(d, "gantt_hor_scroll") || t2._locate_css(d, "gantt_ver_scroll") || (c = true);
                var i2 = n();
                h = setTimeout(function() {
                  var e4 = t2.locate(d);
                  i2 && e4 && !t2._locate_css(d, "gantt_link_control") && !t2._locate_css(d, "gantt_grid_data") && (i2.on_mouse_down(d), i2.drag && i2.drag.start_drag && (!function(e5) {
                    var n2 = t2._getTaskLayers(), i3 = t2.getTask(e5);
                    if (i3 && t2.isTaskVisible(e5)) {
                      f = e5;
                      for (var r2 = 0; r2 < n2.length; r2++) if ((i3 = n2[r2].rendered[e5]) && i3.getAttribute(t2.config.task_attribute) && i3.getAttribute(t2.config.task_attribute) == e5) {
                        var a2 = i3.cloneNode(true);
                        _.push(i3), n2[r2].rendered[e5] = a2, i3.style.display = "none", a2.className += " gantt_drag_move ", i3.parentNode.appendChild(a2);
                      }
                    }
                  }(e4), i2._start_dnd(d), t2._touch_drag = true, t2.refreshTask(e4), t2._touch_feedback())), h = null;
                }, t2.config.touch_drag);
              }
            }]), i.push([this.$container, r[2], function(e3) {
              if (document && document.body && document.body.classList.remove("gantt_touch_active"), !o(e3)) {
                h && clearTimeout(h), t2._touch_drag = false, c = false;
                var i2 = a(e3), r2 = n();
                if (r2 && r2.on_mouse_up(i2), f && t2.isTaskExists(f) && (t2.refreshTask(f), _.length && (_.forEach(function(t3) {
                  t3.parentNode && t3.parentNode.removeChild(t3);
                }), t2._touch_feedback())), c = u = false, _ = [], f = null, d && l) {
                  var s2 = /* @__PURE__ */ new Date();
                  if (s2 - l < 500) t2.$services.getService("mouseEvents").onDoubleClick(d), v(e3);
                  else l = s2;
                } else l = /* @__PURE__ */ new Date();
              }
            }]);
            for (p = 0; p < i.length; p++) t2.event(i[p][0], i[p][1], i[p][2]);
            function v(t3) {
              return t3 && t3.preventDefault && t3.preventDefault(), t3.cancelBubble = true, false;
            }
          };
        };
      }, function(t, e, n) {
        function i(t2) {
          "@babel/helpers - typeof";
          return (i = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(t3) {
            return typeof t3;
          } : function(t3) {
            return t3 && "function" == typeof Symbol && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
          })(t2);
        }
        t.exports = function(t2) {
          var e2 = n(1), r = n(2), a = n(261)(t2), o = n(262)(t2), s = n(263)(t2), l = n(15)(t2), c = n(264)(t2), u = n(265)(t2), d = n(266)(t2), h = n(267)(t2), f = n(15)(t2), _ = n(268)(t2), g = n(269)(t2);
          function p(e3, n2) {
            var i2, r2, a2 = "";
            for (r2 = 0; r2 < e3.length; r2++) i2 = t2.config._migrate_buttons[e3[r2]] ? t2.config._migrate_buttons[e3[r2]] : e3[r2], a2 += "<div " + t2._waiAria.lightboxButtonAttrString(i2) + " class='gantt_btn_set gantt_left_btn_set " + i2 + "_set'" + (n2 ? " style='float:right;'" : "") + "><div dhx_button='1' data-dhx-button='1' class='" + i2 + "'></div><div>" + t2.locale.labels[i2] + "</div></div>";
            return a2;
          }
          function v(e3, n2, i2) {
            var r2, a2, o2, s2, l2, c2, u2 = "";
            switch (i2.timeFormat[n2]) {
              case "%Y":
                for (e3._time_format_order[2] = n2, e3._time_format_order.size++, e3.year_range && (isNaN(e3.year_range) ? e3.year_range.push && (o2 = e3.year_range[0], s2 = e3.year_range[1]) : r2 = e3.year_range), r2 = r2 || 10, a2 = a2 || Math.floor(r2 / 2), o2 = o2 || i2.date.getFullYear() - a2, s2 = s2 || t2.getState().max_date.getFullYear() + a2, l2 = o2; l2 < s2; l2++) u2 += "<option value='" + l2 + "'>" + l2 + "</option>";
                break;
              case "%m":
                for (e3._time_format_order[1] = n2, e3._time_format_order.size++, l2 = 0; l2 < 12; l2++) u2 += "<option value='" + l2 + "'>" + t2.locale.date.month_full[l2] + "</option>";
                break;
              case "%d":
                for (e3._time_format_order[0] = n2, e3._time_format_order.size++, l2 = 1; l2 < 32; l2++) u2 += "<option value='" + l2 + "'>" + l2 + "</option>";
                break;
              case "%H:%i":
                for (e3._time_format_order[3] = n2, e3._time_format_order.size++, l2 = i2.first, c2 = i2.date.getDate(), e3._time_values = []; l2 < i2.last; ) u2 += "<option value='" + l2 + "'>" + t2.templates.time_picker(i2.date) + "</option>", e3._time_values.push(l2), i2.date.setTime(i2.date.valueOf() + 60 * t2._get_timepicker_step() * 1e3), l2 = 24 * (i2.date.getDate() != c2 ? 1 : 0) * 60 + 60 * i2.date.getHours() + i2.date.getMinutes();
            }
            return u2;
          }
          t2._lightbox_methods = {}, t2._lightbox_template = "<div class='gantt_cal_ltitle'><span class='gantt_mark'>&nbsp;</span><span class='gantt_time'></span><span class='gantt_title'></span></div><div class='gantt_cal_larea'></div>", t2.$services.getService("state").registerProvider("lightbox", function() {
            return { lightbox: t2._lightbox_id };
          }), t2.showLightbox = function(t3) {
            if (this.callEvent("onBeforeLightbox", [t3])) {
              var e3 = this.getTask(t3), n2 = this.getLightbox(this.getTaskType(e3.type));
              this._center_lightbox(n2), this.showCover(), this._fill_lightbox(t3, n2), this._waiAria.lightboxVisibleAttr(n2), this.callEvent("onLightbox", [t3]);
            }
          }, t2._get_timepicker_step = function() {
            if (this.config.round_dnd_dates) {
              var e3;
              if (function(t3) {
                var e4 = t3.$ui.getView("timeline");
                return !(!e4 || !e4.isVisible());
              }(this)) {
                var n2 = t2.getScale();
                e3 = r.getSecondsInUnit(n2.unit) * n2.step / 60;
              }
              return (!e3 || e3 >= 1440) && (e3 = this.config.time_step), e3;
            }
            return this.config.time_step;
          }, t2.getLabel = function(t3, e3) {
            for (var n2 = this._get_typed_lightbox_config(), i2 = 0; i2 < n2.length; i2++) if (n2[i2].map_to == t3) {
              for (var r2 = n2[i2].options, a2 = 0; a2 < r2.length; a2++) if (r2[a2].key == e3) return r2[a2].label;
            }
            return "";
          }, t2.updateCollection = function(e3, n2) {
            n2 = n2.slice(0);
            var i2 = t2.serverList(e3);
            if (!i2) return false;
            i2.splice(0, i2.length), i2.push.apply(i2, n2 || []), t2.resetLightbox();
          }, t2.getLightboxType = function() {
            return this.getTaskType(this._lightbox_type);
          }, t2.getLightbox = function(e3) {
            var n2, i2, r2, a2, o2, s2 = "";
            if (void 0 === e3 && (e3 = this.getLightboxType()), !this._lightbox || this.getLightboxType() != this.getTaskType(e3)) {
              this._lightbox_type = this.getTaskType(e3), n2 = document.createElement("div"), s2 = "gantt_cal_light", i2 = this._is_lightbox_timepicker(), (t2.config.wide_form || i2) && (s2 += " gantt_cal_light_wide"), i2 && (t2.config.wide_form = true, s2 += " gantt_cal_light_full"), n2.className = s2, n2.style.visibility = "hidden", r2 = this._lightbox_template, r2 += p(this.config.buttons_left), r2 += p(this.config.buttons_right, true), n2.innerHTML = r2, t2._waiAria.lightboxAttr(n2), t2.config.drag_lightbox && (n2.firstChild.onmousedown = t2._ready_to_dnd, n2.firstChild.onselectstart = function() {
                return false;
              }, n2.firstChild.style.cursor = "pointer", t2._init_dnd_events()), this._lightbox && this.resetLightbox(), document.body.insertBefore(n2, document.body.firstChild), this._lightbox = n2, a2 = this._get_typed_lightbox_config(e3), r2 = this._render_sections(a2);
              var l2 = (o2 = n2.querySelector("div.gantt_cal_larea")).style.overflow;
              o2.style.overflow = "hidden", o2.innerHTML = r2, function(e4) {
                var n3, i3, r3, a3, o3, s3;
                for (s3 = 0; s3 < e4.length; s3++) n3 = e4[s3], r3 = document.getElementById(n3.id), n3.id && r3 && (i3 = r3.querySelector("label"), (a3 = r3.nextSibling) && (o3 = a3.querySelector("input, select, textarea")) && (o3.id = o3.id || "input_" + t2.uid(), n3.inputId = o3.id, i3.setAttribute("for", n3.inputId)));
              }(a2), this.resizeLightbox(), o2.style.overflow = l2, this._init_lightbox_events(this), n2.style.display = "none", n2.style.visibility = "visible";
            }
            return this._lightbox;
          }, t2._render_sections = function(t3) {
            for (var e3 = "", n2 = 0; n2 < t3.length; n2++) {
              var i2 = this.form_blocks[t3[n2].type];
              if (i2) {
                t3[n2].id = "area_" + this.uid();
                var r2 = t3[n2].hidden ? " style='display:none'" : "", a2 = "";
                t3[n2].button && (a2 = "<div class='gantt_custom_button' data-index='" + n2 + "'><div class='gantt_custom_button_" + t3[n2].button + "'></div><div class='gantt_custom_button_label'>" + this.locale.labels["button_" + t3[n2].button] + "</div></div>"), this.config.wide_form && (e3 += "<div class='gantt_wrap_section' " + r2 + ">"), e3 += "<div id='" + t3[n2].id + "' class='gantt_cal_lsection'><label>" + a2 + this.locale.labels["section_" + t3[n2].name] + "</label></div>" + i2.render.call(this, t3[n2]), e3 += "</div>";
              }
            }
            return e3;
          }, t2.resizeLightbox = function() {
            if (this._lightbox) {
              var t3 = this._lightbox.querySelector(".gantt_cal_larea");
              t3.style.height = "0px", t3.style.height = t3.scrollHeight + "px", this._lightbox.style.height = t3.scrollHeight + this.config.lightbox_additional_height + "px", t3.style.height = t3.scrollHeight + "px";
            }
          }, t2._center_lightbox = function(t3) {
            if (t3) {
              t3.style.display = "block";
              var e3 = window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, n2 = window.pageXOffset || document.body.scrollLeft || document.documentElement.scrollLeft, i2 = window.innerHeight || document.documentElement.clientHeight;
              t3.style.top = e3 ? Math.round(e3 + Math.max((i2 - t3.offsetHeight) / 2, 0)) + "px" : Math.round(Math.max((i2 - t3.offsetHeight) / 2, 0) + 9) + "px", document.documentElement.scrollWidth > document.body.offsetWidth ? t3.style.left = Math.round(n2 + (document.body.offsetWidth - t3.offsetWidth) / 2) + "px" : t3.style.left = Math.round((document.body.offsetWidth - t3.offsetWidth) / 2) + "px";
            }
          }, t2.showCover = function() {
            this._cover || (this._cover = document.createElement("DIV"), this._cover.className = "gantt_cal_cover", document.body.appendChild(this._cover));
          }, t2.event(window, "deviceorientation", function() {
            t2.getState().lightbox && t2._center_lightbox(t2.getLightbox());
          }), t2._init_lightbox_events = function() {
            t2.lightbox_events = {}, t2.lightbox_events.gantt_save_btn = function() {
              t2._save_lightbox();
            }, t2.lightbox_events.gantt_delete_btn = function() {
              t2._lightbox_new_type = null, t2.callEvent("onLightboxDelete", [t2._lightbox_id]) && (t2.isTaskExists(t2._lightbox_id) ? t2.$click.buttons.delete(t2._lightbox_id) : t2.hideLightbox());
            }, t2.lightbox_events.gantt_cancel_btn = function() {
              t2._cancel_lightbox();
            }, t2.lightbox_events.default = function(n2, i2) {
              if (i2.getAttribute("data-dhx-button")) t2.callEvent("onLightboxButton", [i2.className, i2, n2]);
              else {
                var r2, a2, o2 = e2.getClassName(i2);
                if (-1 != o2.indexOf("gantt_custom_button")) if (-1 != o2.indexOf("gantt_custom_button_")) for (r2 = i2.parentNode.getAttribute("data-index"), a2 = i2; a2 && -1 == e2.getClassName(a2).indexOf("gantt_cal_lsection"); ) a2 = a2.parentNode;
                else r2 = i2.getAttribute("data-index"), a2 = i2.parentNode, i2 = i2.firstChild;
                var s2 = t2._get_typed_lightbox_config();
                r2 && (r2 *= 1, t2.form_blocks[s2[1 * r2].type].button_click(r2, i2, a2, a2.nextSibling));
              }
            }, this.event(t2.getLightbox(), "click", function(n2) {
              n2 = n2 || window.event;
              var i2 = e2.getTargetNode(n2), r2 = e2.getClassName(i2);
              return r2 || (i2 = i2.previousSibling, r2 = e2.getClassName(i2)), i2 && r2 && 0 === r2.indexOf("gantt_btn_set") && (i2 = i2.firstChild, r2 = e2.getClassName(i2)), !(!i2 || !r2) && (t2.defined(t2.lightbox_events[i2.className]) ? t2.lightbox_events[i2.className] : t2.lightbox_events.default)(n2, i2);
            }), t2.getLightbox().onkeydown = function(n2) {
              var i2 = n2 || window.event, r2 = n2.target || n2.srcElement, a2 = e2.getClassName(r2).indexOf("gantt_btn_set") > -1;
              switch ((n2 || i2).keyCode) {
                case t2.constants.KEY_CODES.SPACE:
                  if ((n2 || i2).shiftKey) return;
                  a2 && r2.click && r2.click();
                  break;
                case t2.keys.edit_save:
                  if ((n2 || i2).shiftKey) return;
                  a2 && r2.click ? r2.click() : t2._save_lightbox();
                  break;
                case t2.keys.edit_cancel:
                  t2._cancel_lightbox();
              }
            };
          }, t2._cancel_lightbox = function() {
            var e3 = this.getLightboxValues();
            this.callEvent("onLightboxCancel", [this._lightbox_id, e3.$new]), t2.isTaskExists(e3.id) && e3.$new && this.silent(function() {
              t2.$data.tasksStore.removeItem(e3.id), t2._update_flags(e3.id, null);
            }), this.refreshData(), this.hideLightbox();
          }, t2._save_lightbox = function() {
            var t3 = this.getLightboxValues();
            this.callEvent("onLightboxSave", [this._lightbox_id, t3, !!t3.$new]) && (t3.$new ? (delete t3.$new, this.addTask(t3, t3.parent, this.getTaskIndex(t3.id))) : this.isTaskExists(t3.id) && (this.mixin(this.getTask(t3.id), t3, true), this.refreshTask(t3.id), this.updateTask(t3.id)), this.refreshData(), this.hideLightbox());
          }, t2._resolve_default_mapping = function(t3) {
            var e3 = t3.map_to;
            return !{ time: true, time_optional: true, duration: true, duration_optional: true }[t3.type] ? "constraint" === t3.type && (t3.map_to && "string" != typeof t3.map_to || (e3 = { constraint_type: "constraint_type", constraint_date: "constraint_date" })) : "auto" == t3.map_to ? e3 = { start_date: "start_date", end_date: "end_date", duration: "duration" } : "string" == typeof t3.map_to && (e3 = { start_date: t3.map_to }), e3;
          }, t2.getLightboxValues = function() {
            var e3 = {};
            t2.isTaskExists(this._lightbox_id) && (e3 = this.mixin({}, this.getTask(this._lightbox_id)));
            for (var n2 = this._get_typed_lightbox_config(), r2 = 0; r2 < n2.length; r2++) {
              var a2 = document.getElementById(n2[r2].id);
              a2 = a2 ? a2.nextSibling : a2;
              var o2 = this.form_blocks[n2[r2].type];
              if (o2) {
                var s2 = o2.get_value.call(this, a2, e3, n2[r2]), l2 = t2._resolve_default_mapping(n2[r2]);
                if ("string" == typeof l2 && "auto" != l2) e3[l2] = s2;
                else if ("object" == i(l2)) for (var c2 in l2) l2[c2] && (e3[l2[c2]] = s2[c2]);
              }
            }
            return "task" == t2._lightbox_new_type && (e3.type = t2.config.types.task, t2._lightbox_new_type = null), e3;
          }, t2.hideLightbox = function() {
            var t3 = this.getLightbox();
            t3 && (t3.style.display = "none"), this._waiAria.lightboxHiddenAttr(t3), this._lightbox_id = null, this.hideCover(), this.callEvent("onAfterLightbox", []);
          }, t2.hideCover = function() {
            this._cover && this._cover.parentNode.removeChild(this._cover), this._cover = null;
          }, t2.resetLightbox = function() {
            t2._lightbox && !t2._custom_lightbox && t2._lightbox.parentNode.removeChild(t2._lightbox), t2._lightbox = null, t2.hideCover();
          }, t2._set_lightbox_values = function(e3, n2) {
            var i2 = e3, r2 = n2.getElementsByTagName("span"), a2 = [];
            t2.templates.lightbox_header ? (a2.push(""), a2.push(t2.templates.lightbox_header(i2.start_date, i2.end_date, i2)), r2[1].innerHTML = "", r2[2].innerHTML = t2.templates.lightbox_header(i2.start_date, i2.end_date, i2)) : (a2.push(this.templates.task_time(i2.start_date, i2.end_date, i2)), a2.push(String(this.templates.task_text(i2.start_date, i2.end_date, i2) || "").substr(0, 70)), r2[1].innerHTML = this.templates.task_time(i2.start_date, i2.end_date, i2), r2[2].innerHTML = String(this.templates.task_text(i2.start_date, i2.end_date, i2) || "").substr(0, 70)), r2[1].innerHTML = a2[0], r2[2].innerHTML = a2[1], t2._waiAria.lightboxHeader(n2, a2.join(" "));
            for (var o2 = this._get_typed_lightbox_config(this.getLightboxType()), s2 = 0; s2 < o2.length; s2++) {
              var l2 = o2[s2];
              if (this.form_blocks[l2.type]) {
                var c2 = document.getElementById(l2.id).nextSibling, u2 = this.form_blocks[l2.type], d2 = t2._resolve_default_mapping(o2[s2]), h2 = this.defined(i2[d2]) ? i2[d2] : l2.default_value;
                u2.set_value.call(t2, c2, h2, i2, l2), l2.focus && u2.focus.call(t2, c2);
              }
            }
            t2.isTaskExists(e3.id) && (t2._lightbox_id = e3.id);
          }, t2._fill_lightbox = function(t3, e3) {
            var n2 = this.getTask(t3);
            this._set_lightbox_values(n2, e3);
          }, t2.getLightboxSection = function(e3) {
            for (var n2 = this._get_typed_lightbox_config(), i2 = 0; i2 < n2.length && n2[i2].name != e3; i2++) ;
            var r2 = n2[i2];
            if (!r2) return null;
            this._lightbox || this.getLightbox();
            var a2 = document.getElementById(r2.id), o2 = a2.nextSibling, s2 = { section: r2, header: a2, node: o2, getValue: function(e4) {
              return t2.form_blocks[r2.type].get_value.call(t2, o2, e4 || {}, r2);
            }, setValue: function(e4, n3) {
              return t2.form_blocks[r2.type].set_value.call(t2, o2, e4, n3 || {}, r2);
            } }, l2 = this._lightbox_methods["get_" + r2.type + "_control"];
            return l2 ? l2(s2) : s2;
          }, t2._lightbox_methods.get_template_control = function(t3) {
            return t3.control = t3.node, t3;
          }, t2._lightbox_methods.get_select_control = function(t3) {
            return t3.control = t3.node.getElementsByTagName("select")[0], t3;
          }, t2._lightbox_methods.get_textarea_control = function(t3) {
            return t3.control = t3.node.getElementsByTagName("textarea")[0], t3;
          }, t2._lightbox_methods.get_time_control = function(t3) {
            return t3.control = t3.node.getElementsByTagName("select"), t3;
          }, t2._init_dnd_events = function() {
            var e3 = document.body;
            this.event(e3, "mousemove", t2._move_while_dnd), this.event(e3, "mouseup", t2._finish_dnd), t2._init_dnd_events = function() {
            };
          }, t2._move_while_dnd = function(e3) {
            if (t2._dnd_start_lb) {
              document.gantt_unselectable || (document.body.className += " gantt_unselectable", document.gantt_unselectable = true);
              var n2 = t2.getLightbox(), i2 = [e3.pageX, e3.pageY];
              n2.style.top = t2._lb_start[1] + i2[1] - t2._dnd_start_lb[1] + "px", n2.style.left = t2._lb_start[0] + i2[0] - t2._dnd_start_lb[0] + "px";
            }
          }, t2._ready_to_dnd = function(e3) {
            var n2 = t2.getLightbox();
            t2._lb_start = [parseInt(n2.style.left, 10), parseInt(n2.style.top, 10)], t2._dnd_start_lb = [e3.pageX, e3.pageY];
          }, t2._finish_dnd = function() {
            t2._lb_start && (t2._lb_start = t2._dnd_start_lb = false, document.body.className = document.body.className.replace(" gantt_unselectable", ""), document.gantt_unselectable = false);
          }, t2._focus = function(e3, n2) {
            if (e3 && e3.focus) if (t2.config.touch) ;
            else try {
              n2 && e3.select && e3.select(), e3.focus();
            } catch (t3) {
            }
          }, t2.form_blocks = { getTimePicker: function(e3, n2) {
            var i2, a2, o2, s2 = "", l2 = this.config, c2 = { first: 0, last: 1440, date: this.date.date_part(new Date(t2._min_date.valueOf())), timeFormat: function(e4) {
              var n3, i3, a3;
              if (e4.time_format) return e4.time_format;
              a3 = ["%d", "%m", "%Y"], n3 = t2.getScale(), i3 = n3 ? n3.unit : t2.config.duration_unit, r.getSecondsInUnit(i3) < r.getSecondsInUnit("day") && a3.push("%H:%i");
              return a3;
            }(e3) };
            for (e3._time_format_order = { size: 0 }, t2.config.limit_time_select && (c2.first = 60 * l2.first_hour, c2.last = 60 * l2.last_hour + 1, c2.date.setHours(l2.first_hour)), i2 = 0; i2 < c2.timeFormat.length; i2++) i2 > 0 && (s2 += " "), (a2 = v(e3, i2, c2)) && (o2 = t2._waiAria.lightboxSelectAttrString(c2.timeFormat[i2]), s2 += "<select " + (e3.readonly ? "disabled='disabled'" : "") + (n2 ? " style='display:none' " : "") + o2 + ">" + a2 + "</select>");
            return s2;
          }, getTimePickerValue: function(e3, n2, i2) {
            var r2, a2 = n2._time_format_order, o2 = t2.defined(a2[3]), s2 = 0, l2 = 0, c2 = i2 || 0;
            return o2 && (r2 = parseInt(e3[a2[3] + c2].value, 10), s2 = Math.floor(r2 / 60), l2 = r2 % 60), new Date(e3[a2[2] + c2].value, e3[a2[1] + c2].value, e3[a2[0] + c2].value, s2, l2);
          }, _fill_lightbox_select: function(e3, n2, i2, r2) {
            if (e3[n2 + r2[0]].value = i2.getDate(), e3[n2 + r2[1]].value = i2.getMonth(), e3[n2 + r2[2]].value = i2.getFullYear(), t2.defined(r2[3])) {
              var a2 = 60 * i2.getHours() + i2.getMinutes();
              a2 = Math.round(a2 / t2._get_timepicker_step()) * t2._get_timepicker_step();
              var o2 = e3[n2 + r2[3]];
              o2.value = a2, o2.setAttribute("data-value", a2);
            }
          }, template: new a(), textarea: new o(), select: new l(), time: new s(), duration: new d(), parent: new h(), radio: new u(), checkbox: new c(), resources: new f(), constraint: new _(), typeselect: new g() }, t2._is_lightbox_timepicker = function() {
            for (var t3 = this._get_typed_lightbox_config(), e3 = 0; e3 < t3.length; e3++) if ("time" == t3[e3].name && "time" == t3[e3].type) return true;
            return false;
          }, t2._dhtmlx_confirm = function(e3, n2, i2, r2) {
            if (!e3) return i2();
            var a2 = { text: e3 };
            n2 && (a2.title = n2), r2 && (a2.ok = r2), i2 && (a2.callback = function(t3) {
              t3 && i2();
            }), t2.confirm(a2);
          }, t2._get_typed_lightbox_config = function(e3) {
            void 0 === e3 && (e3 = this.getLightboxType());
            var n2 = (function(t3) {
              for (var e4 in this.config.types) if (this.config.types[e4] == t3) return e4;
              return "task";
            }).call(this, e3);
            return t2.config.lightbox[n2 + "_sections"] ? t2.config.lightbox[n2 + "_sections"] : t2.config.lightbox.sections;
          }, t2._silent_redraw_lightbox = function(t3) {
            var e3 = this.getLightboxType();
            if (this.getState().lightbox) {
              var n2 = this.getState().lightbox, i2 = this.getLightboxValues(), r2 = this.copy(this.getTask(n2));
              this.resetLightbox();
              var a2 = this.mixin(r2, i2, true), o2 = this.getLightbox(t3 || void 0);
              this._center_lightbox(this.getLightbox()), this._set_lightbox_values(a2, o2), this.showCover();
            } else this.resetLightbox(), this.getLightbox(t3 || void 0);
            this.callEvent("onLightboxChange", [e3, this.getLightboxType()]);
          };
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return i(r, e2), r.prototype.render = function(t3) {
            return "<div class='gantt_cal_ltext gantt_cal_template' style='height:" + ((t3.height || "30") + "px") + ";'></div>";
          }, r.prototype.set_value = function(t3, e3) {
            t3.innerHTML = e3 || "";
          }, r.prototype.get_value = function(t3) {
            return t3.innerHTML || "";
          }, r.prototype.focus = function() {
          }, r;
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return i(r, e2), r.prototype.render = function(t3) {
            return "<div class='gantt_cal_ltext' style='height:" + ((t3.height || "130") + "px") + ";'><textarea></textarea></div>";
          }, r.prototype.set_value = function(e3, n2) {
            t2.form_blocks.textarea._get_input(e3).value = n2 || "";
          }, r.prototype.get_value = function(e3) {
            return t2.form_blocks.textarea._get_input(e3).value;
          }, r.prototype.focus = function(e3) {
            var n2 = t2.form_blocks.textarea._get_input(e3);
            t2._focus(n2, true);
          }, r.prototype._get_input = function(t3) {
            return t3.querySelector("textarea");
          }, r;
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return i(r, e2), r.prototype.render = function(e3) {
            var n2 = t2.form_blocks.getTimePicker.call(this, e3), i2 = "<div style='height:" + (e3.height || 30) + "px;padding-top:0px;font-size:inherit;text-align:center;' class='gantt_section_time'>";
            return i2 += n2, e3.single_date ? (n2 = t2.form_blocks.getTimePicker.call(this, e3, true), i2 += "<span></span>") : i2 += "<span style='font-weight:normal; font-size:10pt;'> &nbsp;&ndash;&nbsp; </span>", i2 += n2, i2 += "</div>";
          }, r.prototype.set_value = function(e3, n2, i2, r2) {
            var a = r2, o = e3.getElementsByTagName("select"), s = r2._time_format_order;
            if (a.auto_end_date) for (var l = function() {
              d = new Date(o[s[2]].value, o[s[1]].value, o[s[0]].value, 0, 0), h = t2.calculateEndDate({ start_date: d, duration: 1, task: i2 }), t2.form_blocks._fill_lightbox_select(o, s.size, h, s, a);
            }, c = 0; c < 4; c++) o[c].onchange = l;
            var u = t2._resolve_default_mapping(r2);
            "string" == typeof u && (u = { start_date: u });
            var d = i2[u.start_date] || /* @__PURE__ */ new Date(), h = i2[u.end_date] || t2.calculateEndDate({ start_date: d, duration: 1, task: i2 });
            t2.form_blocks._fill_lightbox_select(o, 0, d, s, a), t2.form_blocks._fill_lightbox_select(o, s.size, h, s, a);
          }, r.prototype.get_value = function(e3, n2, i2) {
            var r2, a = e3.getElementsByTagName("select"), o = i2._time_format_order;
            return r2 = t2.form_blocks.getTimePickerValue(a, i2), "string" == typeof t2._resolve_default_mapping(i2) ? r2 : { start_date: r2, end_date: function(e4, n3, r3) {
              var a2 = t2.form_blocks.getTimePickerValue(e4, i2, n3.size);
              return a2 <= r3 && (false !== i2.autofix_end || i2.single_date) ? t2.date.add(r3, t2._get_timepicker_step(), "minute") : a2;
            }(a, o, r2) };
          }, r.prototype.focus = function(e3) {
            t2._focus(e3.getElementsByTagName("select")[0]);
          }, r;
        };
      }, function(t, e, n) {
        var i = n(2), r = n(3);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function a() {
            return e2.apply(this, arguments) || this;
          }
          return r(a, e2), a.prototype.render = function(t3) {
            var e3 = "<div class='gantt_cal_ltext' style='height:" + ((t3.height || "23") + "px") + ";'>";
            if (t3.options && t3.options.length) for (var n2 = 0; n2 < t3.options.length; n2++) e3 += "<label><input type='checkbox' value='" + t3.options[n2].key + "' name='" + t3.name + "'>" + t3.options[n2].label + "</label>";
            else t3.single_value = true, e3 += "<label><input type='checkbox' name='" + t3.name + "'></label>";
            return e3 += "</div>";
          }, a.prototype.set_value = function(t3, e3, n2, r2) {
            var a2 = Array.prototype.slice.call(t3.querySelectorAll("input[type=checkbox]"));
            (!t3._dhx_onchange && r2.onchange && (t3.onchange = r2.onchange, t3._dhx_onchange = true), r2.single_value) ? a2[0].checked = !!e3 : i.forEach(a2, function(t4) {
              t4.checked = !!e3 && e3.indexOf(t4.value) >= 0;
            });
          }, a.prototype.get_value = function(t3, e3, n2) {
            return n2.single_value ? t3.querySelector("input[type=checkbox]").checked : i.arrayMap(Array.prototype.slice.call(t3.querySelectorAll("input[type=checkbox]:checked")), function(t4) {
              return t4.value;
            });
          }, a.prototype.focus = function(e3) {
            t2._focus(e3.querySelector("input[type=checkbox]"));
          }, a;
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return i(r, e2), r.prototype.render = function(t3) {
            var e3 = "<div class='gantt_cal_ltext' style='height:" + ((t3.height || "23") + "px") + ";'>";
            if (t3.options && t3.options.length) for (var n2 = 0; n2 < t3.options.length; n2++) e3 += "<label><input type='radio' value='" + t3.options[n2].key + "' name='" + t3.name + "'>" + t3.options[n2].label + "</label>";
            return e3 += "</div>";
          }, r.prototype.set_value = function(t3, e3, n2, i2) {
            var r2;
            i2.options && i2.options.length && (r2 = t3.querySelector("input[type=radio][value='" + e3 + "']") || t3.querySelector("input[type=radio][value='" + i2.default_value + "']")) && (!t3._dhx_onchange && i2.onchange && (t3.onchange = i2.onchange, t3._dhx_onchange = true), r2.checked = true);
          }, r.prototype.get_value = function(t3, e3) {
            var n2 = t3.querySelector("input[type=radio]:checked");
            return n2 ? n2.value : "";
          }, r.prototype.focus = function(e3) {
            t2._focus(e3.querySelector("input[type=radio]"));
          }, r;
        };
      }, function(t, e, n) {
        var i = n(3), r = n(37).default;
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function a() {
            return e2.apply(this, arguments) || this;
          }
          function o(t3) {
            return t3.formatter || new r();
          }
          function s(e3, n2) {
            var i2 = e3.getElementsByTagName("select"), r2 = n2._time_format_order, a2 = 0, o2 = 0;
            if (t2.defined(r2[3])) {
              var s2 = i2[r2[3]], l2 = parseInt(s2.value, 10);
              isNaN(l2) && s2.hasAttribute("data-value") && (l2 = parseInt(s2.getAttribute("data-value"), 10)), a2 = Math.floor(l2 / 60), o2 = l2 % 60;
            }
            return new Date(i2[r2[2]].value, i2[r2[1]].value, i2[r2[0]].value, a2, o2);
          }
          function l(t3, e3) {
            var n2 = t3.getElementsByTagName("input")[1];
            return (n2 = o(e3).parse(n2.value)) && !window.isNaN(n2) || (n2 = 1), n2 < 0 && (n2 *= -1), n2;
          }
          return i(a, e2), a.prototype.render = function(e3) {
            var n2 = "<div class='gantt_time_selects'>" + t2.form_blocks.getTimePicker.call(this, e3) + "</div>", i2 = " " + t2.locale.labels[t2.config.duration_unit + "s"] + " ", r2 = e3.single_date ? " style='display:none'" : "", a2 = e3.readonly ? " disabled='disabled'" : "", o2 = t2._waiAria.lightboxDurationInputAttrString(e3), s2 = "gantt_duration_value";
            e3.formatter && (i2 = "", s2 += " gantt_duration_value_formatted");
            var l2 = "<div class='gantt_duration' " + r2 + "><input type='button' class='gantt_duration_dec' value='−'" + a2 + "><input type='text' value='5days' class='" + s2 + "'" + a2 + " " + o2 + "><input type='button' class='gantt_duration_inc' value='+'" + a2 + ">" + i2 + "<span></span></div>";
            return "<div style='height:" + (e3.height || 30) + "px;padding-top:0px;font-size:inherit;' class='gantt_section_time'>" + n2 + " " + l2 + "</div>";
          }, a.prototype.set_value = function(e3, n2, i2, r2) {
            var a2, c, u, d, h = e3.getElementsByTagName("select"), f = e3.getElementsByTagName("input"), _ = f[1], g = [f[0], f[2]], p = e3.getElementsByTagName("span")[0], v = r2._time_format_order;
            function m() {
              var n3 = s.call(t2, e3, r2), a3 = l.call(t2, e3, r2), o2 = t2.calculateEndDate({ start_date: n3, duration: a3, task: i2 }), c2 = t2.templates.task_end_date || t2.templates.task_date;
              p.innerHTML = c2(o2);
            }
            function y(t3) {
              var e4 = _.value;
              e4 = o(r2).parse(e4), window.isNaN(e4) && (e4 = 0), (e4 += t3) < 1 && (e4 = 1), _.value = o(r2).format(e4), m();
            }
            g[0].onclick = t2.bind(function() {
              y(-1 * t2.config.duration_step);
            }, this), g[1].onclick = t2.bind(function() {
              y(1 * t2.config.duration_step);
            }, this), h[0].onchange = m, h[1].onchange = m, h[2].onchange = m, h[3] && (h[3].onchange = m), _.onkeydown = t2.bind(function(e4) {
              var n3;
              return (n3 = (e4 = e4 || window.event).charCode || e4.keyCode || e4.which) == t2.constants.KEY_CODES.DOWN ? (y(-1 * t2.config.duration_step), false) : n3 == t2.constants.KEY_CODES.UP ? (y(1 * t2.config.duration_step), false) : void window.setTimeout(m, 1);
            }, this), _.onchange = t2.bind(m, this), "string" == typeof (a2 = t2._resolve_default_mapping(r2)) && (a2 = { start_date: a2 }), c = i2[a2.start_date] || /* @__PURE__ */ new Date(), u = i2[a2.end_date] || t2.calculateEndDate({ start_date: c, duration: 1, task: i2 }), d = Math.round(i2[a2.duration]) || t2.calculateDuration({ start_date: c, end_date: u, task: i2 }), d = o(r2).format(d), t2.form_blocks._fill_lightbox_select(h, 0, c, v, r2), _.value = d, m();
          }, a.prototype.get_value = function(e3, n2, i2) {
            var r2 = s(e3, i2), a2 = l(e3, i2), o2 = t2.calculateEndDate({ start_date: r2, duration: a2, task: n2 });
            return "string" == typeof t2._resolve_default_mapping(i2) ? r2 : { start_date: r2, end_date: o2, duration: a2 };
          }, a.prototype.focus = function(e3) {
            t2._focus(e3.getElementsByTagName("select")[0]);
          }, a;
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(15)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          function a(e3, n2) {
            var i2 = [], r2 = [];
            n2 && (i2 = t2.getTaskByTime(), e3.allow_root && i2.unshift({ id: t2.config.root_id, text: e3.root_label || "" }), i2 = function(e4, n3, i3) {
              var r3 = n3.filter || function() {
                return true;
              };
              e4 = e4.slice(0);
              for (var a3 = 0; a3 < e4.length; a3++) {
                var o2 = e4[a3];
                (o2.id == i3 || t2.isChildOf(o2.id, i3) || false === r3(o2.id, o2)) && (e4.splice(a3, 1), a3--);
              }
              return e4;
            }(i2, e3, n2), e3.sort && i2.sort(e3.sort));
            for (var a2 = e3.template || t2.templates.task_text, o = 0; o < i2.length; o++) {
              var s = a2.apply(t2, [i2[o].start_date, i2[o].end_date, i2[o]]);
              void 0 === s && (s = ""), r2.push({ key: i2[o].id, label: s });
            }
            return e3.options = r2, e3.map_to = e3.map_to || "parent", t2.form_blocks.select.render.apply(this, arguments);
          }
          return i(r, e2), r.prototype.render = function(t3) {
            return a(t3, false);
          }, r.prototype.set_value = function(e3, n2, i2, r2) {
            0 === n2 && (n2 = "0");
            var o = document.createElement("div");
            o.innerHTML = a(r2, i2.id);
            var s = o.removeChild(o.firstChild);
            return e3.onselect = null, e3.parentNode.replaceChild(s, e3), t2.form_blocks.select.set_value.apply(t2, [s, n2, i2, r2]);
          }, r;
        };
      }, function(t, e, n) {
        var i = n(3), r = n(43);
        t.exports = function(t2) {
          var e2 = n(6)(t2);
          function a() {
            return e2.apply(this, arguments) || this;
          }
          function o(e3) {
            return !e3 || e3 === t2.config.constraint_types.ASAP || e3 === t2.config.constraint_types.ALAP;
          }
          function s(t3, e3) {
            for (var n2 = o(e3), i2 = 0; i2 < t3.length; i2++) t3[i2].disabled = n2;
          }
          return i(a, e2), a.prototype.render = function(e3) {
            var n2 = (e3.height || 30) + "px", i2 = "<div class='gantt_cal_ltext gantt_section_" + e3.name + "' style='height:" + n2 + ";'>", a2 = [];
            for (var o2 in t2.config.constraint_types) a2.push({ key: t2.config.constraint_types[o2], label: t2.locale.labels[t2.config.constraint_types[o2]] });
            return e3.options = e3.options || a2, i2 += "<span data-constraint-type-select>" + r.getHtmlSelect(e3.options, [{ key: "data-type", value: "constraint-type" }]) + "</span>", i2 += "<label data-constraint-time-select>" + (t2.locale.labels.constraint_date || "Constraint date") + ": " + t2.form_blocks.getTimePicker.call(this, e3) + "</label>", i2 += "</div>";
          }, a.prototype.set_value = function(e3, n2, i2, r2) {
            var a2 = e3.querySelector("[data-constraint-type-select] select"), o2 = e3.querySelectorAll("[data-constraint-time-select] select"), l = r2._time_format_order, c = t2._resolve_default_mapping(r2);
            a2._eventsInitialized || (a2.addEventListener("change", function(t3) {
              s(o2, t3.target.value);
            }), a2._eventsInitialized = true);
            var u = i2[c.constraint_date] || /* @__PURE__ */ new Date();
            t2.form_blocks._fill_lightbox_select(o2, 0, u, l, r2);
            var d = i2[c.constraint_type] || t2.getConstraintType(i2);
            a2.value = d, s(o2, d);
          }, a.prototype.get_value = function(e3, n2, i2) {
            var r2 = e3.querySelector("[data-constraint-type-select] select"), a2 = e3.querySelectorAll("[data-constraint-time-select] select"), s2 = r2.value, l = null;
            return o(s2) || (l = t2.form_blocks.getTimePickerValue(a2, i2)), { constraint_type: s2, constraint_date: l };
          }, a.prototype.focus = function(e3) {
            t2._focus(e3.querySelector("select"));
          }, a;
        };
      }, function(t, e, n) {
        var i = n(3);
        t.exports = function(t2) {
          var e2 = n(15)(t2);
          function r() {
            return e2.apply(this, arguments) || this;
          }
          return i(r, e2), r.prototype.render = function(n2) {
            var i2 = t2.config.types, r2 = t2.locale.labels, a = [], o = n2.filter || function(t3, e3) {
              return !i2.placeholder || e3 !== i2.placeholder;
            };
            for (var s in i2) false == !o(s, i2[s]) && a.push({ key: i2[s], label: r2["type_" + s] });
            n2.options = a;
            var l = n2.onchange;
            return n2.onchange = function() {
              t2.changeLightboxType(this.value), this.value === t2.config.types.task && (t2._lightbox_new_type = "task"), "function" == typeof l && l.apply(this, arguments);
            }, e2.prototype.render.apply(this, arguments);
          }, r;
        };
      }, function(t, e) {
        t.exports = function(t2) {
          t2._extend_to_optional = function(e2) {
            var n = e2, i = { render: n.render, focus: n.focus, set_value: function(e3, r, a, o) {
              var s = t2._resolve_default_mapping(o);
              if (!a[s.start_date] || "start_date" == s.start_date && this._isAllowedUnscheduledTask(a)) {
                i.disable(e3, o);
                var l = {};
                for (var c in s) l[s[c]] = a[c];
                return n.set_value.call(t2, e3, r, l, o);
              }
              return i.enable(e3, o), n.set_value.call(t2, e3, r, a, o);
            }, get_value: function(e3, i2, r) {
              return r.disabled ? { start_date: null } : n.get_value.call(t2, e3, i2, r);
            }, update_block: function(e3, n2) {
              if (t2.callEvent("onSectionToggle", [t2._lightbox_id, n2]), e3.style.display = n2.disabled ? "none" : "block", n2.button) {
                var i2 = e3.previousSibling.querySelector(".gantt_custom_button_label"), r = t2.locale.labels, a = n2.disabled ? r[n2.name + "_enable_button"] : r[n2.name + "_disable_button"];
                i2.innerHTML = a;
              }
              t2.resizeLightbox();
            }, disable: function(t3, e3) {
              e3.disabled = true, i.update_block(t3, e3);
            }, enable: function(t3, e3) {
              e3.disabled = false, i.update_block(t3, e3);
            }, button_click: function(e3, n2, r, a) {
              if (false !== t2.callEvent("onSectionButton", [t2._lightbox_id, r])) {
                var o = t2._get_typed_lightbox_config()[e3];
                o.disabled ? i.enable(a, o) : i.disable(a, o);
              }
            } };
            return i;
          }, t2.form_blocks.duration_optional = t2._extend_to_optional(t2.form_blocks.duration), t2.form_blocks.time_optional = t2._extend_to_optional(t2.form_blocks.time);
        };
      }, function(t, e) {
        t.exports = function(t2) {
          var e2 = new RegExp("<(?:.|\n)*?>", "gm"), n = new RegExp(" +", "gm");
          function i(t3) {
            return (t3 + "").replace(e2, " ").replace(n, " ");
          }
          var r = new RegExp("'", "gm");
          function a(t3) {
            return (t3 + "").replace(r, "&#39;");
          }
          for (var o in t2._waiAria = { getAttributeString: function(t3) {
            var e3 = [" "];
            for (var n2 in t3) {
              var r2 = a(i(t3[n2]));
              e3.push(n2 + "='" + r2 + "'");
            }
            return e3.push(" "), e3.join(" ");
          }, getTimelineCellAttr: function(e3) {
            return t2._waiAria.getAttributeString({ "aria-label": e3 });
          }, _taskCommonAttr: function(e3, n2) {
            e3.start_date && e3.end_date && (n2.setAttribute("aria-label", i(t2.templates.tooltip_text(e3.start_date, e3.end_date, e3))), e3.$dataprocessor_class && n2.setAttribute("aria-busy", true), n2.setAttribute("aria-selected", t2.isSelectedTask(e3.id) ? "true" : "false"));
          }, setTaskBarAttr: function(e3, n2) {
            this._taskCommonAttr(e3, n2), !t2.isReadonly(e3) && t2.config.drag_move && (e3.id != t2.getState("tasksDnd").drag_id ? n2.setAttribute("aria-grabbed", false) : n2.setAttribute("aria-grabbed", true));
          }, taskRowAttr: function(e3, n2) {
            this._taskCommonAttr(e3, n2), !t2.isReadonly(e3) && t2.config.order_branch && n2.setAttribute("aria-grabbed", false), n2.setAttribute("role", "row"), n2.setAttribute("aria-level", e3.$level), t2.hasChild(e3.id) && n2.setAttribute("aria-expanded", e3.$open ? "true" : "false");
          }, linkAttr: function(e3, n2) {
            var r2 = t2.config.links, a2 = e3.type == r2.finish_to_start || e3.type == r2.start_to_start, o2 = e3.type == r2.start_to_start || e3.type == r2.start_to_finish, s = t2.locale.labels.link + " " + t2.templates.drag_link(e3.source, o2, e3.target, a2);
            n2.setAttribute("aria-label", i(s)), t2.isReadonly(e3) && n2.setAttribute("aria-readonly", true);
          }, gridSeparatorAttr: function(t3) {
            t3.setAttribute("role", "separator");
          }, lightboxHiddenAttr: function(t3) {
            t3.setAttribute("aria-hidden", "true");
          }, lightboxVisibleAttr: function(t3) {
            t3.setAttribute("aria-hidden", "false");
          }, lightboxAttr: function(t3) {
            t3.setAttribute("role", "dialog"), t3.setAttribute("aria-hidden", "true"), t3.firstChild.setAttribute("role", "heading");
          }, lightboxButtonAttrString: function(e3) {
            return this.getAttributeString({ role: "button", "aria-label": t2.locale.labels[e3], tabindex: "0" });
          }, lightboxHeader: function(t3, e3) {
            t3.setAttribute("aria-label", e3);
          }, lightboxSelectAttrString: function(e3) {
            var n2 = "";
            switch (e3) {
              case "%Y":
                n2 = t2.locale.labels.years;
                break;
              case "%m":
                n2 = t2.locale.labels.months;
                break;
              case "%d":
                n2 = t2.locale.labels.days;
                break;
              case "%H:%i":
                n2 = t2.locale.labels.hours + t2.locale.labels.minutes;
            }
            return t2._waiAria.getAttributeString({ "aria-label": n2 });
          }, lightboxDurationInputAttrString: function(e3) {
            return this.getAttributeString({ "aria-label": t2.locale.labels.column_duration, "aria-valuemin": "0" });
          }, gridAttrString: function() {
            return [" role='treegrid'", t2.config.multiselect ? "aria-multiselectable='true'" : "aria-multiselectable='false'", " "].join(" ");
          }, gridScaleRowAttrString: function() {
            return "role='row'";
          }, gridScaleCellAttrString: function(e3, n2) {
            var i2 = "";
            if ("add" == e3.name) i2 = this.getAttributeString({ role: "button", "aria-label": t2.locale.labels.new_task });
            else {
              var r2 = { role: "columnheader", "aria-label": n2 };
              t2._sort && t2._sort.name == e3.name && ("asc" == t2._sort.direction ? r2["aria-sort"] = "ascending" : r2["aria-sort"] = "descending"), i2 = this.getAttributeString(r2);
            }
            return i2;
          }, gridDataAttrString: function() {
            return "role='rowgroup'";
          }, gridCellAttrString: function(e3, n2, i2) {
            var r2 = { role: "gridcell", "aria-label": n2 };
            return e3.editor && !t2.isReadonly(i2) || (r2["aria-readonly"] = true), this.getAttributeString(r2);
          }, gridAddButtonAttrString: function(e3) {
            return this.getAttributeString({ role: "button", "aria-label": t2.locale.labels.new_task });
          }, messageButtonAttrString: function(t3) {
            return "tabindex='0' role='button' aria-label='" + t3 + "'";
          }, messageInfoAttr: function(t3) {
            t3.setAttribute("role", "alert");
          }, messageModalAttr: function(t3, e3) {
            t3.setAttribute("role", "dialog"), e3 && t3.setAttribute("aria-labelledby", e3);
          }, quickInfoAttr: function(t3) {
            t3.setAttribute("role", "dialog");
          }, quickInfoHeaderAttrString: function() {
            return " role='heading' ";
          }, quickInfoHeader: function(t3, e3) {
            t3.setAttribute("aria-label", e3);
          }, quickInfoButtonAttrString: function(e3) {
            return t2._waiAria.getAttributeString({ role: "button", "aria-label": e3, tabindex: "0" });
          }, tooltipAttr: function(t3) {
            t3.setAttribute("role", "tooltip");
          }, tooltipVisibleAttr: function(t3) {
            t3.setAttribute("aria-hidden", "false");
          }, tooltipHiddenAttr: function(t3) {
            t3.setAttribute("aria-hidden", "true");
          } }, t2._waiAria) t2._waiAria[o] = /* @__PURE__ */ function(e3) {
            return function() {
              return t2.config.wai_aria_attributes ? e3.apply(this, arguments) : "";
            };
          }(t2._waiAria[o]);
        };
      }]);
    });
  })(dhtmlxgantt);
  return dhtmlxgantt.exports;
}
var dhtmlxganttExports = requireDhtmlxgantt();
var dayjs_min$1 = { exports: {} };
var dayjs_min = dayjs_min$1.exports;
var hasRequiredDayjs_min;
function requireDayjs_min() {
  if (hasRequiredDayjs_min) return dayjs_min$1.exports;
  hasRequiredDayjs_min = 1;
  (function(module, exports) {
    !function(t, e) {
      module.exports = e();
    }(dayjs_min, function() {
      var t = 1e3, e = 6e4, n = 36e5, r = "millisecond", i = "second", s = "minute", u = "hour", a = "day", o = "week", f = "month", h = "quarter", c = "year", d = "date", l = "Invalid Date", $ = /^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/, y = /\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g, M = { name: "en", weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), ordinal: function(t2) {
        var e2 = ["th", "st", "nd", "rd"], n2 = t2 % 100;
        return "[" + t2 + (e2[(n2 - 20) % 10] || e2[n2] || e2[0]) + "]";
      } }, m = function(t2, e2, n2) {
        var r2 = String(t2);
        return !r2 || r2.length >= e2 ? t2 : "" + Array(e2 + 1 - r2.length).join(n2) + t2;
      }, v = { s: m, z: function(t2) {
        var e2 = -t2.utcOffset(), n2 = Math.abs(e2), r2 = Math.floor(n2 / 60), i2 = n2 % 60;
        return (e2 <= 0 ? "+" : "-") + m(r2, 2, "0") + ":" + m(i2, 2, "0");
      }, m: function t2(e2, n2) {
        if (e2.date() < n2.date()) return -t2(n2, e2);
        var r2 = 12 * (n2.year() - e2.year()) + (n2.month() - e2.month()), i2 = e2.clone().add(r2, f), s2 = n2 - i2 < 0, u2 = e2.clone().add(r2 + (s2 ? -1 : 1), f);
        return +(-(r2 + (n2 - i2) / (s2 ? i2 - u2 : u2 - i2)) || 0);
      }, a: function(t2) {
        return t2 < 0 ? Math.ceil(t2) || 0 : Math.floor(t2);
      }, p: function(t2) {
        return { M: f, y: c, w: o, d: a, D: d, h: u, m: s, s: i, ms: r, Q: h }[t2] || String(t2 || "").toLowerCase().replace(/s$/, "");
      }, u: function(t2) {
        return void 0 === t2;
      } }, g = "en", D = {};
      D[g] = M;
      var p = function(t2) {
        return t2 instanceof _;
      }, S = function t2(e2, n2, r2) {
        var i2;
        if (!e2) return g;
        if ("string" == typeof e2) {
          var s2 = e2.toLowerCase();
          D[s2] && (i2 = s2), n2 && (D[s2] = n2, i2 = s2);
          var u2 = e2.split("-");
          if (!i2 && u2.length > 1) return t2(u2[0]);
        } else {
          var a2 = e2.name;
          D[a2] = e2, i2 = a2;
        }
        return !r2 && i2 && (g = i2), i2 || !r2 && g;
      }, w = function(t2, e2) {
        if (p(t2)) return t2.clone();
        var n2 = "object" == typeof e2 ? e2 : {};
        return n2.date = t2, n2.args = arguments, new _(n2);
      }, O = v;
      O.l = S, O.i = p, O.w = function(t2, e2) {
        return w(t2, { locale: e2.$L, utc: e2.$u, x: e2.$x, $offset: e2.$offset });
      };
      var _ = function() {
        function M2(t2) {
          this.$L = S(t2.locale, null, true), this.parse(t2);
        }
        var m2 = M2.prototype;
        return m2.parse = function(t2) {
          this.$d = function(t3) {
            var e2 = t3.date, n2 = t3.utc;
            if (null === e2) return /* @__PURE__ */ new Date(NaN);
            if (O.u(e2)) return /* @__PURE__ */ new Date();
            if (e2 instanceof Date) return new Date(e2);
            if ("string" == typeof e2 && !/Z$/i.test(e2)) {
              var r2 = e2.match($);
              if (r2) {
                var i2 = r2[2] - 1 || 0, s2 = (r2[7] || "0").substring(0, 3);
                return n2 ? new Date(Date.UTC(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2)) : new Date(r2[1], i2, r2[3] || 1, r2[4] || 0, r2[5] || 0, r2[6] || 0, s2);
              }
            }
            return new Date(e2);
          }(t2), this.$x = t2.x || {}, this.init();
        }, m2.init = function() {
          var t2 = this.$d;
          this.$y = t2.getFullYear(), this.$M = t2.getMonth(), this.$D = t2.getDate(), this.$W = t2.getDay(), this.$H = t2.getHours(), this.$m = t2.getMinutes(), this.$s = t2.getSeconds(), this.$ms = t2.getMilliseconds();
        }, m2.$utils = function() {
          return O;
        }, m2.isValid = function() {
          return !(this.$d.toString() === l);
        }, m2.isSame = function(t2, e2) {
          var n2 = w(t2);
          return this.startOf(e2) <= n2 && n2 <= this.endOf(e2);
        }, m2.isAfter = function(t2, e2) {
          return w(t2) < this.startOf(e2);
        }, m2.isBefore = function(t2, e2) {
          return this.endOf(e2) < w(t2);
        }, m2.$g = function(t2, e2, n2) {
          return O.u(t2) ? this[e2] : this.set(n2, t2);
        }, m2.unix = function() {
          return Math.floor(this.valueOf() / 1e3);
        }, m2.valueOf = function() {
          return this.$d.getTime();
        }, m2.startOf = function(t2, e2) {
          var n2 = this, r2 = !!O.u(e2) || e2, h2 = O.p(t2), l2 = function(t3, e3) {
            var i2 = O.w(n2.$u ? Date.UTC(n2.$y, e3, t3) : new Date(n2.$y, e3, t3), n2);
            return r2 ? i2 : i2.endOf(a);
          }, $2 = function(t3, e3) {
            return O.w(n2.toDate()[t3].apply(n2.toDate("s"), (r2 ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(e3)), n2);
          }, y2 = this.$W, M3 = this.$M, m3 = this.$D, v2 = "set" + (this.$u ? "UTC" : "");
          switch (h2) {
            case c:
              return r2 ? l2(1, 0) : l2(31, 11);
            case f:
              return r2 ? l2(1, M3) : l2(0, M3 + 1);
            case o:
              var g2 = this.$locale().weekStart || 0, D2 = (y2 < g2 ? y2 + 7 : y2) - g2;
              return l2(r2 ? m3 - D2 : m3 + (6 - D2), M3);
            case a:
            case d:
              return $2(v2 + "Hours", 0);
            case u:
              return $2(v2 + "Minutes", 1);
            case s:
              return $2(v2 + "Seconds", 2);
            case i:
              return $2(v2 + "Milliseconds", 3);
            default:
              return this.clone();
          }
        }, m2.endOf = function(t2) {
          return this.startOf(t2, false);
        }, m2.$set = function(t2, e2) {
          var n2, o2 = O.p(t2), h2 = "set" + (this.$u ? "UTC" : ""), l2 = (n2 = {}, n2[a] = h2 + "Date", n2[d] = h2 + "Date", n2[f] = h2 + "Month", n2[c] = h2 + "FullYear", n2[u] = h2 + "Hours", n2[s] = h2 + "Minutes", n2[i] = h2 + "Seconds", n2[r] = h2 + "Milliseconds", n2)[o2], $2 = o2 === a ? this.$D + (e2 - this.$W) : e2;
          if (o2 === f || o2 === c) {
            var y2 = this.clone().set(d, 1);
            y2.$d[l2]($2), y2.init(), this.$d = y2.set(d, Math.min(this.$D, y2.daysInMonth())).$d;
          } else l2 && this.$d[l2]($2);
          return this.init(), this;
        }, m2.set = function(t2, e2) {
          return this.clone().$set(t2, e2);
        }, m2.get = function(t2) {
          return this[O.p(t2)]();
        }, m2.add = function(r2, h2) {
          var d2, l2 = this;
          r2 = Number(r2);
          var $2 = O.p(h2), y2 = function(t2) {
            var e2 = w(l2);
            return O.w(e2.date(e2.date() + Math.round(t2 * r2)), l2);
          };
          if ($2 === f) return this.set(f, this.$M + r2);
          if ($2 === c) return this.set(c, this.$y + r2);
          if ($2 === a) return y2(1);
          if ($2 === o) return y2(7);
          var M3 = (d2 = {}, d2[s] = e, d2[u] = n, d2[i] = t, d2)[$2] || 1, m3 = this.$d.getTime() + r2 * M3;
          return O.w(m3, this);
        }, m2.subtract = function(t2, e2) {
          return this.add(-1 * t2, e2);
        }, m2.format = function(t2) {
          var e2 = this, n2 = this.$locale();
          if (!this.isValid()) return n2.invalidDate || l;
          var r2 = t2 || "YYYY-MM-DDTHH:mm:ssZ", i2 = O.z(this), s2 = this.$H, u2 = this.$m, a2 = this.$M, o2 = n2.weekdays, f2 = n2.months, h2 = function(t3, n3, i3, s3) {
            return t3 && (t3[n3] || t3(e2, r2)) || i3[n3].slice(0, s3);
          }, c2 = function(t3) {
            return O.s(s2 % 12 || 12, t3, "0");
          }, d2 = n2.meridiem || function(t3, e3, n3) {
            var r3 = t3 < 12 ? "AM" : "PM";
            return n3 ? r3.toLowerCase() : r3;
          }, $2 = { YY: String(this.$y).slice(-2), YYYY: this.$y, M: a2 + 1, MM: O.s(a2 + 1, 2, "0"), MMM: h2(n2.monthsShort, a2, f2, 3), MMMM: h2(f2, a2), D: this.$D, DD: O.s(this.$D, 2, "0"), d: String(this.$W), dd: h2(n2.weekdaysMin, this.$W, o2, 2), ddd: h2(n2.weekdaysShort, this.$W, o2, 3), dddd: o2[this.$W], H: String(s2), HH: O.s(s2, 2, "0"), h: c2(1), hh: c2(2), a: d2(s2, u2, true), A: d2(s2, u2, false), m: String(u2), mm: O.s(u2, 2, "0"), s: String(this.$s), ss: O.s(this.$s, 2, "0"), SSS: O.s(this.$ms, 3, "0"), Z: i2 };
          return r2.replace(y, function(t3, e3) {
            return e3 || $2[t3] || i2.replace(":", "");
          });
        }, m2.utcOffset = function() {
          return 15 * -Math.round(this.$d.getTimezoneOffset() / 15);
        }, m2.diff = function(r2, d2, l2) {
          var $2, y2 = O.p(d2), M3 = w(r2), m3 = (M3.utcOffset() - this.utcOffset()) * e, v2 = this - M3, g2 = O.m(this, M3);
          return g2 = ($2 = {}, $2[c] = g2 / 12, $2[f] = g2, $2[h] = g2 / 3, $2[o] = (v2 - m3) / 6048e5, $2[a] = (v2 - m3) / 864e5, $2[u] = v2 / n, $2[s] = v2 / e, $2[i] = v2 / t, $2)[y2] || v2, l2 ? g2 : O.a(g2);
        }, m2.daysInMonth = function() {
          return this.endOf(f).$D;
        }, m2.$locale = function() {
          return D[this.$L];
        }, m2.locale = function(t2, e2) {
          if (!t2) return this.$L;
          var n2 = this.clone(), r2 = S(t2, e2, true);
          return r2 && (n2.$L = r2), n2;
        }, m2.clone = function() {
          return O.w(this.$d, this);
        }, m2.toDate = function() {
          return new Date(this.valueOf());
        }, m2.toJSON = function() {
          return this.isValid() ? this.toISOString() : null;
        }, m2.toISOString = function() {
          return this.$d.toISOString();
        }, m2.toString = function() {
          return this.$d.toUTCString();
        }, M2;
      }(), T = _.prototype;
      return w.prototype = T, [["$ms", r], ["$s", i], ["$m", s], ["$H", u], ["$W", a], ["$M", f], ["$y", c], ["$D", d]].forEach(function(t2) {
        T[t2[1]] = function(e2) {
          return this.$g(e2, t2[0], t2[1]);
        };
      }), w.extend = function(t2, e2) {
        return t2.$i || (t2(e2, _, w), t2.$i = true), w;
      }, w.locale = S, w.isDayjs = p, w.unix = function(t2) {
        return w(1e3 * t2);
      }, w.en = D[g], w.Ls = D, w.p = {}, w;
    });
  })(dayjs_min$1);
  return dayjs_min$1.exports;
}
var dayjs_minExports = requireDayjs_min();
const Dayjs = /* @__PURE__ */ getDefaultExportFromCjs(dayjs_minExports);
const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const toDay = Dayjs().format("YYYYMMDDHHmmss");
dhtmlxganttExports.gantt.plugins({
  fullscreen: true,
  tooltip: true
  // auto_scheduling: true
});
dhtmlxganttExports.gantt.ext.fullscreen.getFullscreenElement = function() {
  return document.getElementById("gantt-container");
};
dhtmlxganttExports.gantt.config.show_links = false;
dhtmlxganttExports.gantt.config.drag_links = false;
dhtmlxganttExports.gantt.config.drag_progress = false;
dhtmlxganttExports.gantt.config.drag_move = false;
dhtmlxganttExports.gantt.config.drag_resize = false;
dhtmlxganttExports.gantt.config.details_on_dblclick = false;
dhtmlxganttExports.gantt.config.resize_rows = true;
dhtmlxganttExports.gantt.config.fit_tasks = false;
dhtmlxganttExports.gantt.config.open_split_tasks = true;
dhtmlxganttExports.gantt.config.grid_elastic_columns = true;
dhtmlxganttExports.gantt.config.keep_grid_width = false;
dhtmlxganttExports.gantt.config.grid_width = 540;
dhtmlxganttExports.gantt.config.show_grid = false;
dhtmlxganttExports.gantt.config.scale_height = 60;
dhtmlxganttExports.gantt.templates.task_class = (start, end, task) => {
  const formatEnd = Dayjs(end).format("YYYYMMDD");
  const today = Dayjs().format("YYYYMMDD");
  if (today > formatEnd && task.progress !== 1) {
    return "task-bar-beOverdue";
  } else {
    return "task-bar";
  }
};
const levelColor = {
  "低": "#22cc88",
  "中": "#fa8c16",
  "高": "#f55651"
};
const weekScaleTemplate = function(date) {
  return `第${dhtmlxganttExports.gantt.date.date_to_str("%W")(date)}周`;
};
const monthFormat = function(date) {
  return `${dhtmlxganttExports.gantt.date.date_to_str("%n")(date)}月`;
};
const dayFormat = function(date) {
  const weeks = ["周日", "周一", "周二", "周三", "周四", "周五", "周六"];
  return `${dhtmlxganttExports.gantt.date.date_to_str("%d")(date)} ${weeks[Dayjs(date).day()]}`;
};
const daysStyle = function(date) {
  if (date.getDay() == 0 || date.getDay() == 6) {
    return "weekend";
  }
};
const processTaskText = function(end, task) {
  const endTime = Dayjs(end).format("YYYYMMDDHHmmss");
  if (toDay > endTime && task.progress !== 1) return "已逾期";
  return task.progress === 1 ? "已完成" : "进行中";
};
dhtmlxganttExports.gantt.config.scales = [
  { unit: "year", step: 1, format: "%Y年" },
  { unit: "month", step: 1, format: monthFormat },
  { unit: "day", step: 1, format: dayFormat, css: daysStyle }
];
dhtmlxganttExports.gantt.templates.timeline_cell_class = function(task, date) {
  if (date.getDay() == 0 || date.getDay() == 6) {
    return "weekend";
  }
};
dhtmlxganttExports.gantt.config.columns = [
  {
    name: "wbs",
    label: "WBS",
    tree: true,
    resize: true,
    min_width: 80,
    template: function(obj) {
      return obj.WBSName;
    }
  },
  {
    name: "text",
    label: "任务名称",
    width: 160,
    resize: true,
    align: "center",
    template: function(obj) {
      return obj.text;
    }
  },
  {
    name: "start_date",
    label: "开始时间",
    width: 80,
    align: "center",
    template: function(obj) {
      return obj.start_date;
    }
  },
  {
    name: "end_date",
    label: "结束时间",
    width: 80,
    align: "center",
    template: function(obj) {
      return obj.end_date;
    }
  },
  {
    name: "progress",
    label: "进度",
    width: 65,
    align: "center",
    template: function(obj) {
      return `${(obj.progress * 100).toFixed(2)}%`;
    }
  }
];
dhtmlxganttExports.gantt.attachEvent("onLinkDblClick", function() {
  return false;
});
dhtmlxganttExports.gantt.templates.task_text = function(start, end, task) {
  return `
    <span>
      ${task.text}
      <span
        style="
          color: white;
          width: 30px;
          height: 20px;
          margin-left: 5px;
          background-color: ${levelColor[task.priority]};
          display: inline-block;
          border-radius: 5px;
          line-height: 20px;
          text-align: center;
        "
      >
        ${task.priority}
      </span>
      <span
        style="
          display: inline-block;
          width: 25px;
          height:25px;
          border-radius: 50%;
          color:white;
          background-color: #3ea5d4;
          text-align:center;
          line-height:25px
        "
      >
        张
      </span>
      ${Dayjs(task.start_date).format("MM月DD日 HH:ss")}开始
      <span style="color: white">(${processTaskText(end, task)})</span>
    </span>`;
};
dhtmlxganttExports.gantt.templates.tooltip_text = function(start, end, task) {
  if (task.type == dhtmlxganttExports.gantt.config.types.milestone) {
    return task.text + "<br/><b>完成时间:</b> " + dhtmlxganttExports.gantt.templates.tooltip_date_format(end);
  }
  return "<b>任务名:</b> " + task.text + "<br/><b>完成进度: </b>" + (task.progress * 100).toFixed(2) + "%<br/><b>计划用时: </b> " + task.duration + " 天 (" + dhtmlxganttExports.gantt.templates.tooltip_date_format(start) + " 至 " + dhtmlxganttExports.gantt.templates.tooltip_date_format(end) + ")";
};
dhtmlxganttExports.gantt.templates.rightside_text = function(start, end) {
  const finish = Dayjs(end).format("MM月DD日 HH:ss截至");
  return finish;
};
const _sfc_main$1 = {
  props: {
    tasks: {
      type: Object,
      default() {
        return { data: [], links: [] };
      }
    }
  },
  methods: {
    $_initGanttEvents: function() {
      if (!dhtmlxganttExports.gantt.$_eventsInitialized) {
        dhtmlxganttExports.gantt.attachEvent("onTaskSelected", (id) => {
          let task = dhtmlxganttExports.gantt.getTask(id);
          this.$emit("task-selected", task);
        });
        dhtmlxganttExports.gantt.attachEvent("onTaskIdChange", (id, new_id) => {
          if (dhtmlxganttExports.gantt.getSelectedId() == new_id) {
            let task = dhtmlxganttExports.gantt.getTask(new_id);
            this.$emit("task-selected", task);
          }
        });
        dhtmlxganttExports.gantt.$_eventsInitialized = true;
      }
    },
    $_initDataProcessor: function() {
      if (!dhtmlxganttExports.gantt.$_dataProcessorInitialized) {
        dhtmlxganttExports.gantt.createDataProcessor((entity, action, data, id) => {
          this.$emit(`${entity}-updated`, id, action, data);
        });
        dhtmlxganttExports.gantt.$_dataProcessorInitialized = true;
      }
    },
    changeView(type) {
      if (type === "week") {
        dhtmlxganttExports.gantt.config.scale_height = 50;
        dhtmlxganttExports.gantt.config.scales = [
          { unit: "year", step: 1, format: "%Y年" },
          { unit: "week", step: 1, format: weekScaleTemplate, css: () => "week-cell" }
        ];
      } else if (type === "day") {
        dhtmlxganttExports.gantt.config.scale_height = 60;
        dhtmlxganttExports.gantt.config.scales = [
          { unit: "year", step: 1, format: "%Y年" },
          { unit: "week", step: 1, format: "第%W周" },
          { unit: "day", step: 1, format: dayFormat, css: daysStyle }
        ];
      } else if (type === "year") {
        dhtmlxganttExports.gantt.config.scale_height = 30;
        dhtmlxganttExports.gantt.config.scales = [
          { unit: "year", step: 1, format: "%Y年" }
        ];
      }
      dhtmlxganttExports.gantt.render();
    },
    toggleFullScreen() {
      if (!dhtmlxganttExports.gantt.getState().fullscreen) {
        dhtmlxganttExports.gantt.expand();
      } else {
        dhtmlxganttExports.gantt.collapse();
      }
    },
    toggleGanttGrid() {
      dhtmlxganttExports.gantt.config.show_grid = !dhtmlxganttExports.gantt.config.show_grid;
      dhtmlxganttExports.gantt.render();
    }
  },
  mounted: function() {
    this.$_initGanttEvents();
    dhtmlxganttExports.gantt.config.date_format = "%Y-%m-%d";
    dhtmlxganttExports.gantt.init(this.$refs.ganttContainer);
    dhtmlxganttExports.gantt.parse(this.$props.tasks);
    dhtmlxganttExports.gantt.scrollTo(0);
    this.$_initDataProcessor();
  }
};
const _hoisted_1$1 = {
  ref: "ganttContainer",
  style: { "height": "100%" }
};
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$1, null, 512);
}
const GanttComponent = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "app",
  components: { GanttComponent },
  props: {
    tasks: {
      type: Object,
      default() {
        return {
          data: [
            {
              id: 1e4,
              text: "我是项目名",
              start_date: "2025-06-01",
              end_date: "2025-06-12",
              type: "project1",
              // 任务名前缀
              // "WBSName": '0',
              progress: 0.12,
              priority: "中"
            },
            {
              id: 10001,
              text: "任务 1",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project2",
              priority: "高"
            },
            {
              id: 10002,
              text: "任务 2",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project3",
              priority: "高"
            },
            {
              id: 10003,
              text: "任务 3",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 1,
              type: "project4",
              priority: "高"
            },
            {
              id: 10004,
              text: "任务 4",
              start_date: "2025-04-01",
              end_date: "2025-04-18",
              WBSName: "1",
              progress: 0.5,
              type: "project5",
              priority: "高"
            }
          ]
        };
      }
    }
  },
  data() {
    return {
      selectedTask: null,
      messages: []
    };
  },
  computed: {
    progressPercentage() {
      let taskProgress = this.selectedTask.progress;
      if (!taskProgress) {
        return "0";
      }
      return `${Math.round(+taskProgress * 100)} %`;
    },
    formattedStartDate() {
      let taskStart = this.selectedTask.start_date;
      return `${taskStart.getFullYear()} / ${taskStart.getMonth() + 1} / ${taskStart.getDate()}`;
    },
    formattedEndDate() {
      let taskEnd = this.selectedTask.end_date;
      return `${taskEnd.getFullYear()} / ${taskEnd.getMonth() + 1} / ${taskEnd.getDate()}`;
    }
  },
  methods: {
    selectTask(task) {
      this.selectedTask = task;
    },
    addMessage(message) {
      this.messages.unshift(message);
      if (this.messages.length > 40) {
        this.messages.pop();
      }
    },
    logTaskUpdate(id, mode, task) {
      let text = task && task.text ? ` (${task.text})` : "";
      let message = `Task ${mode}: ${id} ${text}`;
      this.addMessage(message);
    },
    logLinkUpdate(id, mode, link) {
      let message = `Link ${mode}: ${id}`;
      if (link) {
        message += ` ( source: ${link.source}, target: ${link.target} )`;
      }
      this.addMessage(message);
    }
  }
};
const _hoisted_1 = { class: "container" };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_GanttComponent = resolveComponent("GanttComponent");
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createVNode(_component_GanttComponent, {
      class: "left-container",
      tasks: $props.tasks,
      onTaskUpdated: $options.logTaskUpdate,
      onLinkUpdated: $options.logLinkUpdate,
      onTaskSelected: $options.selectTask
    }, null, 8, ["tasks", "onTaskUpdated", "onLinkUpdated", "onTaskSelected"])
  ]);
}
const App = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
export {
  App as default
};
