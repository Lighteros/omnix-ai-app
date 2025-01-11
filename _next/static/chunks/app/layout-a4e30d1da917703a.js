(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [185],
  {
    34968: function (e, t, r) {
      Promise.resolve().then(r.t.bind(r, 33955, 23)),
        Promise.resolve().then(r.t.bind(r, 92489, 23)),
        Promise.resolve().then(r.t.bind(r, 8780, 23)),
        Promise.resolve().then(r.t.bind(r, 87155, 23)),
        Promise.resolve().then(r.t.bind(r, 68892, 23)),
        Promise.resolve().then(r.bind(r, 41472)),
        Promise.resolve().then(r.bind(r, 33519)),
        Promise.resolve().then(r.bind(r, 92980)),
        Promise.resolve().then(r.bind(r, 80522));
    },
    33519: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          default: function () {
            return Toast_ToastContainer;
          },
        });
      var n = r(57437),
        s = r(2265),
        o = r(41472),
        a = r(50278),
        i = r.n(a),
        l = r(37416),
        Toast = (e) => {
          var t;
          let { toast: r, onClose: o } = e,
            [a, c] = (0, s.useState)("100%"),
            d = (0, s.useRef)(
              null !== (t = r.duration) && void 0 !== t ? t : 0
            ),
            u = (0, s.useRef)(null);
          return (
            (0, s.useEffect)(() => {
              if (0 !== r.duration)
                return (
                  (u.current = setInterval(() => {
                    var e;
                    let t = null !== (e = r.duration) && void 0 !== e ? e : 0;
                    d.current;
                    let n = (d.current / t) * 100;
                    c("".concat(n, "%")),
                      (d.current -= 50),
                      d.current <= 0 &&
                        (o(r.id), u.current && clearInterval(u.current));
                  }, 50)),
                  () => {
                    u.current && clearInterval(u.current);
                  }
                );
            }, [r, o]),
            (0, n.jsxs)("div", {
              className: i().container,
              onMouseEnter: () => {
                0 !== r.duration && u.current && clearInterval(u.current);
              },
              onMouseLeave: () => {
                0 !== r.duration &&
                  (u.current = setInterval(() => {
                    var e;
                    let t = null !== (e = r.duration) && void 0 !== e ? e : 0;
                    d.current;
                    let n = (d.current / t) * 100;
                    c("".concat(n, "%")),
                      (d.current -= 50),
                      d.current <= 0 &&
                        (o(r.id), u.current && clearInterval(u.current));
                  }, 50));
              },
              children: [
                (0, n.jsx)("div", {
                  className: i().close,
                  onClick: () => o(r.id),
                  children: (0, n.jsx)(l._y, {}),
                }),
                (0, n.jsxs)("div", {
                  className: i().status,
                  children: [
                    "info" === r.status && (0, n.jsx)(l.m4, { size: 24 }),
                    "success" === r.status && (0, n.jsx)(l.k8, { size: 24 }),
                    "error" === r.status && (0, n.jsx)(l.Ho, { size: 24 }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: i().content,
                  children: [
                    (0, n.jsx)("div", {
                      className: i().title,
                      children: r.title,
                    }),
                    (0, n.jsx)("div", {
                      className: i().desc,
                      children: r.desc,
                    }),
                  ],
                }),
                (0, n.jsx)("div", {
                  className: i().progressBar,
                  style: { width: a },
                }),
              ],
            })
          );
        },
        Toast_ToastContainer = () => {
          let { toasts: e, removeToast: t } = (0, o.useToast)(),
            [r, a] = (0, s.useState)(e);
          return (
            (0, s.useEffect)(() => {
              a(e);
            }, [e]),
            (0, n.jsx)("div", {
              className:
                "fixed top-[80px] left-[13vw] md:top-[unset] md:left-[unset] md:bottom-[30px] md:right-[20px] z-[1050]",
              children: r.map((e) =>
                (0, n.jsx)(Toast, { toast: e, onClose: t }, e.id)
              ),
            })
          );
        };
    },
    80522: function (e, t, r) {
      "use strict";
      r.r(t),
        r.d(t, {
          Providers: function () {
            return Providers;
          },
        });
      var n = r(57437),
        s = r(80263),
        o = r(66346),
        a = r(59990),
        i = r(29930);
      let l = "GET_SAMPLE",
        c = "SAMPLE_ERROR",
        d = {
          selectedToken: {
            firstToken: {
              id: "",
              logoURI: "",
              decimals: 0,
              address: "0x",
              symbol: "",
              name: "",
              price: 0,
            },
            secondToken: {
              id: "",
              logoURI: "",
              decimals: 0,
              address: "0x",
              symbol: "",
              name: "",
              price: 0,
            },
          },
          loading: !0,
        },
        u = { isChoose: !1, loading: !0 },
        v = { transactionSpeed: "0", tolerance: 0, transactionDeadline: "" },
        h = [o.Z];
      (0, a.Uo)((0, s.md)(...h));
      let m = (0, i.xC)({
        reducer: {
          tokenList: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : d,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case l:
                return { ...e, sample: t.payload, loading: !1 };
              case c:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          choosePool: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : u,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case l:
                return { ...e, isChoose: t.payload, loading: !1 };
              case c:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
          settingModalData: function () {
            let e =
                arguments.length > 0 && void 0 !== arguments[0]
                  ? arguments[0]
                  : v,
              t = arguments.length > 1 ? arguments[1] : void 0;
            switch (t.type) {
              case l:
                return { ...e, isChoose: t.payload, loading: !1 };
              case c:
                return { loading: !1, error: t.payload };
              default:
                return e;
            }
          },
        },
      });
      var f = r(8587),
        p = r(78908),
        _ = r(38038),
        x = r(81229),
        g = r(36572),
        T = r(99720),
        j = r(73616),
        b = r(16336);
      function Providers(e) {
        let { children: t } = e,
          r = new p.S();
        return (0, n.jsx)(x.F, {
          config: T.vc,
          children: (0, n.jsx)(_.aH, {
            client: r,
            children: (0, n.jsx)(j.pj, {
              initialChain: g.p,
              appInfo: { appName: "Loxodrome" },
              theme: (0, b.$)({
                accentColor: "#FFFFFF",
                accentColorForeground: "#000000",
                overlayBlur: "small",
                borderRadius: "none",
              }),
              modalSize: "compact",
              children: (0, n.jsx)(f.zt, { store: m, children: t }),
            }),
          }),
        });
      }
    },
    92489: function () {},
    87155: function () {},
    68892: function () {},
    50278: function (e) {
      e.exports = {
        container: "Toast_container__IGtOM",
        close: "Toast_close___vPif",
        content: "Toast_content__2HJYy",
        title: "Toast_title__D448F",
        desc: "Toast_desc__D2fmb",
        status: "Toast_status__o4T2A",
        progressBar: "Toast_progressBar__Ol0Wd",
      };
    },
  },
  function (e) {
    e.O(0, [736, 216, 744], function () {
      return e((e.s = 34968));
    }),
      (_N_E = e.O());
  },
]);
