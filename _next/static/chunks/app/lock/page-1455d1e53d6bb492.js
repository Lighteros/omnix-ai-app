(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [310],
  {
    77547: function (e, t, s) {
      Promise.resolve().then(s.t.bind(s, 19167, 23)),
        Promise.resolve().then(s.bind(s, 22075)),
        Promise.resolve().then(s.bind(s, 98610)),
        Promise.resolve().then(s.bind(s, 33023));
    },
    22075: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return LockLayout;
          },
        });
      var l = s(57437),
        a = s(37359),
        n = s(15187),
        i = s(72692);
      function LockLayout(e) {
        let { children: t } = e,
          { isSupported: s } = (0, a.$)();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("main", {
            className: "main",
            children: [
              (0, l.jsx)(n.Z, {}),
              s ? (0, l.jsx)(l.Fragment, { children: t }) : (0, l.jsx)(i.Z, {}),
            ],
          }),
        });
      }
    },
    98610: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          LockProvider: function () {
            return LockProvider;
          },
          useLock: function () {
            return useLock;
          },
        });
      var l = s(57437),
        a = s(2265),
        n = s(79037),
        i = s(68204),
        r = s(33275),
        c = s(46094),
        o = s(92980);
      let d = (0, a.createContext)(void 0),
        LockProvider = (e) => {
          let { children: t } = e,
            { address: s, isDisconnected: a } = (0, n.m)(),
            { balances: u, prices: x } = (0, o.useTokenContext)(),
            { claimVeDist: m, claimPerpRewards: p } = (0, r.Z)(s),
            {
              VeNFTBalance: h,
              withdraw: f,
              isLoading: j,
              mergedList: v,
              allowance: w,
              extendDurationLock: g,
              increaseLock: N,
              fetchAllowance: b,
              balanceOf: y,
              createLock: k,
              approveLock: _,
              mergeLock: O,
              transferLock: S,
              getBalance: C,
              getVeNFTBalance: L,
            } = (0, i.Z)(s),
            { resetVote: T } = (0, c.Z)(s);
          return (0, l.jsx)(d.Provider, {
            value: {
              transferLock: S,
              claimVeDist: m,
              extendDurationLock: g,
              mergeLock: O,
              increaseLock: N,
              balanceOf: y,
              address: s,
              isDisconnected: a,
              balances: u,
              resetVote: T,
              prices: x,
              claimPerpRewards: p,
              VeNFTBalance: h,
              withdraw: f,
              isLoading: j,
              mergedList: v,
              allowance: w,
              getVeNFTBalance: L,
              fetchAllowance: b,
              getBalance: C,
              createLock: k,
              approveLock: _,
            },
            children: t,
          });
        },
        useLock = () => {
          let e = (0, a.useContext)(d);
          if (void 0 === e)
            throw Error("useLockContext must be used within a LockProvider");
          return e;
        };
    },
    23751: function (e, t, s) {
      "use strict";
      var l = s(57437);
      s(2265),
        (t.Z = (e) => {
          let { id: t, children: s, className: a, open: n, setOpen: i } = e;
          return (0, l.jsxs)(l.Fragment, {
            children: [
              (0, l.jsx)("label", { htmlFor: t, className: a, children: s[0] }),
              (0, l.jsx)("input", {
                type: "checkbox",
                id: t,
                className: "modal-toggle",
                checked: n,
                readOnly: !0,
              }),
              (0, l.jsxs)("div", {
                className: "modal",
                children: [
                  (0, l.jsx)("div", {
                    className: "modal-box modalContainer",
                    children: s[1],
                  }),
                  (0, l.jsx)("label", {
                    className: "modal-backdrop",
                    htmlFor: t,
                    onClick: () => i && i(!1),
                    children: "Close",
                  }),
                ],
              }),
            ],
          });
        });
    },
    72692: function (e, t, s) {
      "use strict";
      var l = s(57437);
      s(2265);
      var a = s(16691),
        n = s.n(a),
        i = s(73616);
      t.Z = () => {
        let { openChainModal: e } = (0, i.iC)();
        return (0, l.jsxs)("div", {
          className: "flex flex-col items-center h-screen pt-[34vh]",
          children: [
            (0, l.jsxs)("div", {
              className: "w-60 md:w-96 flex flex-col items-center",
              children: [
                (0, l.jsx)(n(), {
                  loading: "lazy",
                  className: "lazyload",
                  src: "/static/img/icon/network.svg",
                  alt: "networkError",
                  width: 20,
                  height: 20,
                }),
                (0, l.jsx)("h1", { children: "Unsupported Network" }),
                (0, l.jsx)("div", {
                  children: (0, l.jsx)("p", {
                    children: "Switch to supported network.",
                  }),
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "mt-6",
              children: (0, l.jsx)("button", {
                className: "offButton",
                onClick: e,
                children: "Switch Network",
              }),
            }),
          ],
        });
      };
    },
    33023: function (e, t, s) {
      "use strict";
      s.r(t),
        s.d(t, {
          default: function () {
            return views_Lock;
          },
        });
      var l = s(57437),
        a = s(2265),
        n = s(30365),
        i = s.n(n),
        r = s(61396),
        c = s.n(r),
        o = s(23751),
        d = s(54724),
        u = s(17423),
        x = s(68204),
        m = s(24033),
        p = s(79352),
        h = s(79256),
        f = s(99720),
        j = s(16691),
        v = s.n(j),
        w = s(42218),
        g = s.n(w);
      s(1240);
      var N = s(3605),
        b = s(77778),
        y = s(79037),
        k = s(98610),
        _ = s(54968),
        O = s(41472),
        S = s(37416),
        extras_CreateNewLock = function (e) {
          let {
              updateModal: t,
              refresh: s,
              VeNFTBalance: n,
              updateOpen: r,
            } = e,
            [c, u] = (0, a.useState)(0),
            {
              address: x,
              balanceOf: m,
              allowance: p,
              fetchAllowance: j,
              createLock: w,
              approveLock: C,
            } = (0, k.useLock)();
          new b.Z(2).pow(256).minus(1).toFixed(0);
          let [L, T] = (0, a.useState)(new Date()),
            [F, M] = (0, a.useState)(730),
            [E, I] = (0, a.useState)(0),
            [X, Z] = (0, a.useState)(BigInt(0)),
            [A, B] = (0, a.useState)(!1),
            { chain: U } = (0, y.m)(),
            [D, R] = (0, a.useState)(!1),
            [V, H] = (0, a.useState)(""),
            [P, z] = (0, a.useState)(!1),
            [Y, W] = (0, a.useState)(!1),
            [q, G] = (0, a.useState)("0"),
            $ = (0, a.useRef)(null),
            J = (0, a.useRef)(null),
            K = (0, O.useToastError)(),
            Q = (0, O.useToastSuccess)();
          async function fetchAllow() {
            if (x) {
              let e = await j(x);
              e && Z(e);
            }
          }
          async function lockHandler() {
            try {
              H("loading"), z(!0), B(!0), W(!1);
              let e = await j(x),
                t = new b.Z(q),
                l = new b.Z(1e18);
              if (
                ((t = t.times(l).integerValue(b.Z.ROUND_DOWN)),
                parseFloat((0, N.dF)(e)) < c)
              ) {
                let e = await C(BigInt(t.toFixed())),
                  s = await (0, h.e)(f.vc, { hash: e });
                if (!s || (null == s ? void 0 : s.status) !== "success")
                  throw Error("Approval transaction failed");
              }
              B(!1);
              let a = await w(t.toFixed(), F);
              if ((s(), !a)) throw Error("Failed to lock");
              Q("Lock Successfully", "", 1, a),
                z(!1),
                (J.current = setTimeout(() => {
                  R(!1);
                }, 5e3));
            } catch (e) {
              console.log(e),
                K(e),
                B(!1),
                H("rejected"),
                z(!1),
                W(!0),
                (J.current = setTimeout(() => {
                  R(!1);
                }, 5e3));
            }
          }
          return (
            (0, a.useEffect)(() => {
              r(D), J.current && (clearTimeout(J.current), (J.current = null));
            }, [D]),
            (0, a.useEffect)(
              () => () => {
                $.current && clearTimeout($.current);
              },
              []
            ),
            (0, a.useEffect)(() => {
              fetchAllow();
            }, [p, c]),
            (0, a.useEffect)(() => {
              I(parseFloat((c * (F / 730)).toFixed(2)));
            }, [F, c]),
            (0, l.jsxs)("div", {
              className: "modalInner",
              children: [
                (0, l.jsx)("div", {
                  className:
                    "flex flex-row items-center justify-between w-full",
                  children: (0, l.jsxs)("div", {
                    className: "modalTitle",
                    children: [
                      (0, l.jsx)("button", {
                        className: "pr-1",
                        onClick: () => t(!1),
                        children: (0, l.jsx)(S.Y4, {}),
                      }),
                      (0, l.jsx)("span", {
                        className: i().manage_echonft_title,
                        children: "Create New Lock",
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className: "w-full mt-[33px] flex-wrap",
                  children: [
                    (0, l.jsx)("div", {
                      className: "text-[12px] text-[#7e7e7e] leading-[16px]",
                      children: "Amount",
                    }),
                    (0, l.jsxs)("div", {
                      className: "modalItem",
                      children: [
                        (0, l.jsxs)("div", {
                          className:
                            "flex flex-row justify-between  items-center",
                          children: [
                            (0, l.jsx)("div", {
                              children: (0, l.jsxs)("div", {
                                className:
                                  "text-[12px] text-[#7e7e7e] leading-[16px]",
                                children: ["Balance: ", (0, _.Xh)(m, 4, !0)],
                              }),
                            }),
                            (0, l.jsx)("div", {
                              className: "flex flex-row gap-2",
                              children: [0.25, 0.5, 0.75, 1].map((e, t) =>
                                (0, l.jsx)(
                                  "div",
                                  {
                                    children: (0, l.jsx)("button", {
                                      onClick: () =>
                                        (function (e) {
                                          let t = new b.Z(m),
                                            s = new b.Z(e),
                                            l = t.times(s);
                                          u(l.toNumber() || 0),
                                            G(l.toString() || "0");
                                        })(e),
                                      className: "advance",
                                      children:
                                        1 === e
                                          ? "MAX"
                                          : "".concat(100 * e, "%"),
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, l.jsxs)("div", {
                          className:
                            "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                          children: [
                            (0, l.jsxs)("button", {
                              className: "tokenBtn",
                              children: [
                                (0, l.jsx)(v(), {
                                  loading: "lazy",
                                  "data-src": "/echo.svg",
                                  className: "lazyload rounded-full",
                                  src: "/echo.svg",
                                  alt: "echo icon",
                                  width: 20,
                                  height: 20,
                                }),
                                (0, l.jsx)("span", {
                                  className: "".concat(
                                    i().token_selection,
                                    " w-max"
                                  ),
                                  children: "LOXO",
                                }),
                              ],
                            }),
                            (0, l.jsx)("input", {
                              value: q,
                              onFocus: (e) => {
                                0 === c && G("");
                              },
                              onBlur: (e) => {
                                "" === e.target.value && G(c.toString());
                              },
                              onChange: (e) => {
                                let t = e.target.value;
                                if (/^\d*\.?\d*$/.test(t) || "" === t) {
                                  if ("" === t) u(0), G("");
                                  else {
                                    let e = (0, _.Md)(t, 13);
                                    u(e), G(t);
                                  }
                                }
                              },
                              type: "text",
                              className: "inputStyle",
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full text-[12px] text-[#7e7e7e] leading-[16px] mt-[28px]",
                  children: [
                    "Lock Until",
                    (0, l.jsx)("div", {
                      className: "modalItem w-full",
                      children: (0, l.jsx)(g(), {
                        className:
                          "w-full text-white flex bg-transparent focus:outline-0 focus:border-0 text-[14px] leading-[20px]",
                        selected: L,
                        onChange: (e) => {
                          let t, s;
                          return (
                            T(e),
                            (t = new Date()),
                            void (M(
                              (s = Math.ceil(
                                (e.getTime() - t.getTime()) / 864e5
                              ))
                            ),
                            I(parseFloat((c * (s / 730)).toFixed(2))))
                          );
                        },
                      }),
                    }),
                    F < 0 &&
                      (0, l.jsxs)("span", {
                        className: "animation ".concat(i().date_error),
                        children: [
                          (0, l.jsx)(S.hG, {}),
                          "Please select future date",
                        ],
                      }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "w-full p-0 flex  mt-[25px]  flex-wrap",
                  children: [
                    { day: 14, label: "2 Weeks" },
                    { day: 186, label: "6 months" },
                    { day: 365, label: "1 year" },
                    { day: 730, label: "2 years" },
                  ].map((e, t) =>
                    (0, l.jsx)(
                      "div",
                      {
                        onClick: () => {
                          (function (e, t) {
                            M(e);
                            let s = new Date(t);
                            s.setDate(t.getDate() + e);
                            let l = ""
                                .concat(s.getMonth() + 1, "/")
                                .concat(s.getDate(), "/")
                                .concat(s.getFullYear()),
                              a = new Date(l);
                            T(a);
                          })(e.day, new Date()),
                            M(e.day);
                        },
                        className:
                          "flex-row w-1/4 flex items-center justify-center py-[13px] cursor-pointer text-[14px] leading-[14px] text-white ".concat(
                            F === e.day ? "btnActive" : "border-transparent"
                          ),
                        children: e.label,
                      },
                      t
                    )
                  ),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full mt-[25px] flex justify-between items-center text-[14px] text-[#eaecef] leading-[20px]",
                  children: [
                    (0, l.jsx)("span", {
                      children: "Your Voting Power will be:",
                    }),
                    (0, l.jsx)("span", {
                      className: "text-[20px]",
                      children: E,
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "w-full mt-[40px]",
                  children: (0, l.jsxs)(o.Z, {
                    id: "AddLiquidity",
                    className: "w-full",
                    open: D,
                    children: [
                      (0, l.jsx)("button", {
                        disabled: (() => {
                          let e = new b.Z(q),
                            t = new b.Z(m);
                          return !!(e.gt(t) || e.isEqualTo(0) || !q);
                        })(),
                        type: "button",
                        onClick: () => {
                          lockHandler(), R(!0);
                        },
                        className:
                          "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                        children: "Lock",
                      }),
                      (0, l.jsx)(d.Z, {
                        title: "Create New Lock",
                        updateModal: () => {
                          R(!1);
                        },
                        children: (0, l.jsx)("div", {
                          className: "flex p-3 flex-wrap w-full",
                          children: (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsxs)("div", {
                              className: "w-full flex flex-wrap  ",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsx)("span", {
                                      children: "Approve LOXO ",
                                    }),
                                    A
                                      ? (0, l.jsx)(S.yM, {})
                                      : Y
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsxs)("span", {
                                      children: [
                                        "Lock ",
                                        c.toFixed(5),
                                        " for ",
                                        F,
                                        " Day",
                                        " ",
                                      ],
                                    }),
                                    P
                                      ? (0, l.jsx)(S.yM, {})
                                      : Y
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        },
        extensions_CalculateAmount = function (e, t) {
          let s = new b.Z(t).times(e);
          return { num: s.toNumber(), str: s.toFixed() };
        },
        C = s(16775),
        L = s(85068);
      function ManageComponent(e) {
        let { data: t, onOpenChange: s, refresh: n } = e,
          [r, c] = (0, a.useState)(14),
          [u, x] = (0, a.useState)(0),
          {
            balanceOf: m,
            allowance: j,
            increaseLock: w,
            extendDurationLock: N,
            isLoading: y,
            approveLock: L,
            fetchAllowance: T,
            address: F,
          } = (0, k.useLock)(),
          [M, E] = (0, a.useState)(new Date()),
          [I, X] = (0, a.useState)(!1),
          [Z, A] = (0, a.useState)("0"),
          [B, U] = (0, a.useState)(!1),
          [D, R] = (0, a.useState)(!1),
          [V, H] = (0, a.useState)(0),
          [P, z] = (0, a.useState)(0),
          [Y, W] = (0, a.useState)(!1),
          [q, G] = (0, a.useState)(!1),
          [$, J] = (0, a.useState)(!1);
        (0, a.useRef)("0");
        let [K, Q] = (0, a.useState)("0"),
          ee = (0, O.useToastError)(),
          et = (0, O.useToastSuccess)(),
          es = (0, a.useRef)(null);
        function percentButtonHandler(e) {
          let t = extensions_CalculateAmount(e, m);
          Q(t.str), x(t.num);
        }
        (0, a.useEffect)(() => {
          if (t) {
            A(
              (0, C.b)(
                (null == t ? void 0 : t.voting_amount) || 0n,
                Number((null == t ? void 0 : t.decimals) || 0n)
              )
            );
            let e =
              1e3 * Number((null == t ? void 0 : t.lockEnd) || 0) + 6048e5;
            E(new Date(e));
          }
        }, [t]),
          (0, a.useEffect)(() => {
            s(I), es.current && (clearTimeout(es.current), (es.current = null));
          }, [I]),
          (0, a.useEffect)(() => {
            if (t) {
              let e = new Date(1e3 * Number(t.lockEnd)),
                s = new Date();
              s.setHours(0, 0, 0, 0);
              let l = Math.abs(s.getTime() - e.getTime());
              H(parseFloat((u * (Math.ceil(l / 864e5) / 730)).toFixed(2)));
            }
          }, [u, Z, t]),
          (0, a.useEffect)(() => {
            if (t) {
              let e = (0, C.b)(
                (null == t ? void 0 : t.amount) || 0n,
                Number((null == t ? void 0 : t.decimals) || 0n)
              );
              z(parseFloat((parseFloat(e) * (r / 730)).toFixed(2)));
            }
          }, [t, r]);
        let increaseLockHandler = async () => {
          try {
            W(!1), U(!0), R(!0);
            let e = await T(F),
              s = new b.Z(K),
              l = new b.Z(1e18);
            if (
              ((s = s.times(l).integerValue(b.Z.ROUND_DOWN)),
              parseFloat((0, p.d)(e)) < u)
            ) {
              let e = await L(BigInt(s.toFixed())),
                t = await (0, h.e)(f.vc, { hash: e });
              if (!t || (null == t ? void 0 : t.status) !== "success")
                throw Error("Approval transaction failed");
            }
            U(!1);
            let a = await w(s, t.id);
            R(!1),
              et("Increase Successfully", "", 1, a),
              (es.current = setTimeout(() => {
                X(!1);
              }, 5e3));
          } catch (e) {
            ee(e),
              W(!0),
              U(!1),
              R(!1),
              (es.current = setTimeout(() => {
                X(!1);
              }, 5e3));
          }
        };
        async function extendLockHandler() {
          if ($) return;
          J(!0);
          let e = new Date(1e3 * Number(t.lockEnd)),
            s = new Date();
          s.setHours(0, 0, 0, 0);
          let l = Math.abs(s.getTime() - e.getTime()),
            a = Math.ceil(l / 864e5) + r;
          N(t.id, a).then((e) => {
            e.status ? et("Extend Successfully", "", 1, e.msg) : ee(e.msg),
              J(!1);
          });
        }
        return (0, l.jsxs)("div", {
          className: "w-full flex mt-[25px] flex-wrap overflow-y-auto",
          children: [
            (0, l.jsx)("div", {
              className: "text-[12px] text-[#7e7e7e] leading-[16px]",
              children: "Amount",
            }),
            (0, l.jsxs)("div", {
              className: "modalItem",
              children: [
                (0, l.jsxs)("div", {
                  className:
                    "flex flex-row justify-between flex-wrap items-center",
                  children: [
                    (0, l.jsx)("div", {
                      children: (0, l.jsxs)("div", {
                        className: "text-[12px] text-[#7e7e7e] leading-[16px]",
                        children: [
                          "Balance: ",
                          y
                            ? (0, l.jsx)("span", {
                                className:
                                  "loading loading-spinner text-primary loading-xs",
                              })
                            : (0, _.Xh)(m, 4, !0),
                        ],
                      }),
                    }),
                    (0, l.jsxs)("div", {
                      className: "flex flex-row gap-2",
                      children: [
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)("button", {
                            onClick: () => percentButtonHandler(0.25),
                            className: "advance",
                            children: "25%",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)("button", {
                            onClick: () => percentButtonHandler(0.5),
                            className: "advance",
                            children: "50%",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)("button", {
                            onClick: () => percentButtonHandler(0.75),
                            className: "advance",
                            children: "75%",
                          }),
                        }),
                        (0, l.jsx)("div", {
                          children: (0, l.jsx)("button", {
                            onClick: () => percentButtonHandler(1),
                            className: "advance",
                            children: "MAX",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                  children: [
                    (0, l.jsxs)("button", {
                      className: "tokenBtn",
                      children: [
                        (0, l.jsx)(v(), {
                          loading: "lazy",
                          "data-src": "/echo.svg",
                          className: "lazyload rounded-full",
                          src: "/echo.svg",
                          alt: "echo icon",
                          width: 20,
                          height: 20,
                        }),
                        (0, l.jsx)("span", {
                          className: "".concat(i().token_selection, " w-max"),
                          children: "LOXO",
                        }),
                      ],
                    }),
                    (0, l.jsx)("input", {
                      type: "text",
                      value: K,
                      onFocus: (e) => {
                        0 === u && Q("");
                      },
                      onBlur: (e) => {
                        "" === e.target.value && Q(u.toString());
                      },
                      onChange: (e) => {
                        let t = e.target.value;
                        if (/^\d*\.?\d*$/.test(t) || "" === t) {
                          if ("" === t) x(0), Q("");
                          else {
                            let e = (0, _.Md)(t, 13);
                            x(e), Q(t);
                          }
                        }
                      },
                      className: "inputStyle",
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsxs)("div", {
              className:
                "w-full mt-[25px] flex justify-between items-center text-[14px] text-[#eaecef] leading-[20px]",
              children: [
                (0, l.jsx)("span", { children: "Your Voting Power will be:" }),
                (0, l.jsxs)("span", {
                  children: [
                    (0, _.Xh)(Z, 4),
                    (0, l.jsxs)("span", {
                      className: "ml-1 text-blue text-[20px]",
                      children: ["(+", V, ")"],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "w-full mt-[25px]",
              children: (0, l.jsxs)(o.Z, {
                id: "manage",
                className: "w-full",
                open: I,
                children: [
                  (0, l.jsxs)("button", {
                    disabled: 0 == u,
                    type: "button",
                    onClick: () => {
                      X(!0), increaseLockHandler();
                    },
                    className:
                      "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                    children: [
                      q && (0, l.jsx)(S.yM, {}),
                      "Increase Lock Amount",
                    ],
                  }),
                  (0, l.jsx)(d.Z, {
                    title: "Increase Lock",
                    updateModal: () => {
                      X(!1);
                    },
                    children: (0, l.jsx)("div", {
                      className: "flex p-3 flex-wrap w-full",
                      children: (0, l.jsx)(l.Fragment, {
                        children: (0, l.jsxs)("div", {
                          className: "w-full flex flex-wrap  ",
                          children: [
                            (0, l.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, l.jsx)("span", {
                                  children: "Approve LOXO ",
                                }),
                                B
                                  ? (0, l.jsx)(S.yM, {})
                                  : Y
                                  ? (0, l.jsx)(S.Uc, {})
                                  : (0, l.jsx)(S.NO, {}),
                              ],
                            }),
                            (0, l.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, l.jsx)("span", {
                                  children: "Increase Lock ",
                                }),
                                D
                                  ? (0, l.jsx)(S.yM, {})
                                  : Y
                                  ? (0, l.jsx)(S.Uc, {})
                                  : (0, l.jsx)(S.NO, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            }),
            (0, l.jsxs)("div", {
              className: "w-full mt-[25px] text-xs flex-wrap",
              children: [
                (0, l.jsx)("div", {
                  className: "text-[12px] text-[#7e7e7e] leading-[16px]",
                  children: "Lock Until",
                }),
                (0, l.jsx)("div", {
                  className: "modalItem",
                  children: (0, l.jsx)(g(), {
                    className:
                      "w-full text-white flex bg-transparent focus:outline-0 focus:border-0 text-[14px] leading-[20px]",
                    selected: M,
                    onChange: (e) => {
                      let t, s;
                      return (
                        E(e),
                        (t = new Date()),
                        void (c(
                          (s = Math.ceil((e.getTime() - t.getTime()) / 864e4))
                        ),
                        H(parseFloat((u * (s / 730)).toFixed(2))))
                      );
                    },
                  }),
                }),
                r < 0 &&
                  (0, l.jsxs)("span", {
                    className: "animation ".concat(i().date_error),
                    children: [
                      (0, l.jsx)(S.hG, {}),
                      "Please select future date",
                    ],
                  }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "w-full p-0 flex mt-[25px] flex-wrap",
              children: [
                { day: 14, label: "2 Weeks" },
                { day: 186, label: "6 months" },
                { day: 365, label: "1 year" },
                { day: 730, label: "2 years" },
              ].map((e, s) =>
                (0, l.jsx)(
                  "div",
                  {
                    onClick: () => {
                      !(function (e) {
                        c(e);
                        let s = 86400 * e,
                          l =
                            1e3 *
                              Number((null == t ? void 0 : t.lockEnd) || 0) +
                            1e3 * s;
                        E(new Date(l));
                      })(e.day);
                    },
                    className:
                      "flex-row w-1/4 flex items-center justify-center py-[13px] cursor-pointer text-[14px] leading-[14px] text-white ".concat(
                        r === e.day ? "btnActive" : "border-transparent"
                      ),
                    children: e.label,
                  },
                  s
                )
              ),
            }),
            (0, l.jsxs)("div", {
              className:
                "w-full mt-[25px] flex justify-between items-center text-[14px] text-[#eaecef] leading-[20px]",
              children: [
                (0, l.jsx)("span", { children: "Your Voting Power will be:" }),
                (0, l.jsxs)("span", {
                  children: [
                    (0, _.Xh)(Z, 4),
                    (0, l.jsxs)("span", {
                      className: "ml-1 text-blue text-[20px]",
                      children: ["(+", P, ")"],
                    }),
                  ],
                }),
              ],
            }),
            (0, l.jsx)("div", {
              className: "w-full mt-[25px]",
              children: (0, l.jsxs)("button", {
                onClick: extendLockHandler,
                type: "button",
                className:
                  "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                children: [$ && (0, l.jsx)(S.yM, {}), "Extend Duration"],
              }),
            }),
          ],
        });
      }
      function MergeComponent(e) {
        let { data: t, onOpenChange: s } = e,
          n = (0, a.useRef)(),
          {
            resetVote: r,
            VeNFTBalance: c,
            mergeLock: u,
            claimVeDist: x,
            claimPerpRewards: m,
          } = (0, k.useLock)(),
          { block: h } = (0, L.Z)(),
          [f, j] = (0, a.useState)(),
          [v, w] = (0, a.useState)(!1),
          [g, N] = (0, a.useState)(!1),
          [y, C] = (0, a.useState)(!1),
          [T, F] = (0, a.useState)(!1),
          [M, E] = (0, a.useState)(!1),
          [I, X] = (0, a.useState)(""),
          [Z, A] = (0, a.useState)(""),
          [B, U] = (0, a.useState)(""),
          [D, R] = (0, a.useState)(!1);
        (0, a.useEffect)(() => {
          s(D);
        }, [D]);
        let V = (0, O.useToastError)(),
          H = (0, O.useToastSuccess)(),
          P = (0, a.useCallback)(
            (e) => {
              if (!e) return 0;
              let t = Number(h.timestamp),
                s = Number(e || 0) - t;
              return s > 0 ? Math.ceil(s / 86400) : 0;
            },
            [h]
          ),
          z = (0, a.useMemo)(() => {
            try {
              let e = (0, p.d)(t.voting_amount),
                s = "0";
              if (f) {
                let l = Number(t.lockEnd) > Number(f.lockEnd) ? t : f,
                  a = Number(t.lockEnd) > Number(f.lockEnd) ? f : t,
                  n = new b.Z((0, p.d)(l.amount)),
                  i = new b.Z((0, p.d)(a.amount)),
                  r = new b.Z((0, p.d)(l.voting_amount)),
                  c = i.div(n).times(r);
                Number(t.lockEnd) > Number(f.lockEnd)
                  ? (s = c.toString())
                  : ((e = c.toString()), (s = (0, p.d)(f.voting_amount)));
              }
              let l = parseFloat(e) + parseFloat(s),
                a = (0, _.Xh)(l - parseFloat((0, p.d)(t.voting_amount)), 4, !0);
              return [(0, _.Xh)(l, 4, !0), a || "0"];
            } catch (e) {
              return ["0", "0"];
            }
          }, [t, f]);
        async function mergeHandler() {
          try {
            var e;
            if (
              (X("loading"),
              N(!0),
              C(!0),
              F(!0),
              E(!0),
              w(!1),
              (null == t
                ? void 0
                : null === (e = t.votes) || void 0 === e
                ? void 0
                : e.length) !== 0 && (await r(t.id)),
              N(!1),
              await x(t.id),
              C(!1),
              !(0, _.D_)(t.perpRewards))
            ) {
              let e = await m(Number(t.id));
              if (!e) throw Error("Failed to claim perpRewards");
            }
            E(!1);
            let s = await u(t.id, f.id);
            if (!s) throw Error("Failed to approve merge");
            H("Merge Successfully", "veLOXO ".concat(t.id, " merged"), 1, s),
              F(!1),
              setTimeout(() => {
                R(!1);
              }, 5e3);
          } catch (e) {
            console.log("error stake NFT ", e),
              V(e),
              N(!1),
              C(!1),
              E(!1),
              F(!1),
              w(!0),
              X("rejected"),
              setTimeout(() => {
                R(!1);
              }, 5e3);
          }
        }
        return 0 == c.length || 1 == c.length
          ? (0, l.jsx)("div", {
              className: "w-full flex mt-[25px] items-center",
              children: (0, l.jsxs)("div", {
                className: "modalTitle",
                children: [
                  (0, l.jsx)(S.hG, {}),
                  (0, l.jsx)("div", {
                    className: "text-amber-500 text-xs ml-2",
                    children: "You can not merge with 1 NFT in your wallet!",
                  }),
                ],
              }),
            })
          : (0, l.jsxs)("div", {
              className: "w-full flex mt-[25px] flex-wrap overflow-y-auto",
              children: [
                (0, l.jsxs)("div", {
                  className: "w-full flex justify-between text-xs flex-wrap",
                  children: [
                    (0, l.jsx)("span", { children: "veLOXO ID" }),
                    (0, l.jsxs)("span", {
                      children: [
                        "veLOXO balance: ",
                        (0, _.Xh)((0, p.d)(t.voting_amount), 4, !0),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "w-full border-white  mt-2 flex flex-col",
                      children: (0, l.jsx)("input", {
                        disabled: !0,
                        type: "text",
                        defaultValue: "Token #".concat(t.id.toString()),
                        className:
                          "disabled:bg-neutral input input-bordered rounded-none w-full  min-h-0 h-12 border disabled:border-accent",
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full flex justify-between text-xs mt-5 flex-wrap",
                  children: [
                    (0, l.jsx)("span", { children: "Merge To" }),
                    (0, l.jsxs)("span", {
                      children: [
                        "veLOXO balance: ",
                        (0, _.Xh)(
                          (0, p.d)(
                            (null == f ? void 0 : f.voting_amount)
                              ? null == f
                                ? void 0
                                : f.voting_amount
                              : BigInt(0)
                          ),
                          4,
                          !0
                        ),
                      ],
                    }),
                    (0, l.jsx)("div", {
                      className: "w-full border-white  mt-2 flex flex-col",
                      children: (0, l.jsxs)("details", {
                        ref: n,
                        className: "dropdown w-full",
                        children: [
                          (0, l.jsxs)("summary", {
                            className:
                              "btn btn-neutral rounded-none border border-accent w-full flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary min-h-0 h-12",
                            children: [
                              (0, l.jsxs)("span", {
                                className: i().dropdown_rewards,
                                children: [
                                  "NFT #",
                                  null == f ? void 0 : f.id.toString(),
                                ],
                              }),
                              (0, l.jsx)(S.u4, { pathFill: "#7E7E7E" }),
                            ],
                          }),
                          (0, l.jsx)("ul", {
                            className:
                              "p-2 border-accent menu dropdown-content z-[1] bg-neutral shadow-3xl w-full",
                            children: c
                              .filter(
                                (e) => e.id !== t.id && 0 !== P(e.lockEnd || 0)
                              )
                              .map((e, t) =>
                                (0, l.jsx)(
                                  "li",
                                  {
                                    className: i().nft_items,
                                    onClick: () => {
                                      var t;
                                      null === (t = n.current) ||
                                        void 0 === t ||
                                        t.removeAttribute("open"),
                                        j(e);
                                    },
                                    children: (0, l.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-between",
                                      children: [
                                        (0, l.jsxs)("span", {
                                          children: ["NFT#", e.id.toString()],
                                        }),
                                        (0, l.jsxs)("span", {
                                          children: [
                                            Number(
                                              (0, p.d)(
                                                e.voting_amount
                                              ).toString()
                                            ).toFixed(6),
                                            " OMNIX",
                                          ],
                                        }),
                                      ],
                                    }),
                                  },
                                  t
                                )
                              ),
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full flex justify-between items-center text-xs mt-5 flex-wrap",
                  children: [
                    (0, l.jsx)("span", { children: "New veLOXO balance" }),
                    (0, l.jsxs)("span", {
                      className: "text-xl",
                      children: [
                        " ",
                        z[0],
                        " ",
                        (0, l.jsxs)("span", {
                          className: "text-xs text-blue",
                          children: ["( +", z[1], " )"],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, l.jsx)("div", {
                  className: "w-full mt-5",
                  children: (0, l.jsxs)(o.Z, {
                    id: "merge",
                    className: "w-full",
                    open: D,
                    children: [
                      (0, l.jsx)("button", {
                        disabled: void 0 == f,
                        type: "button",
                        onClick: () => {
                          R(!0), mergeHandler();
                        },
                        className:
                          "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                        children: "Merge",
                      }),
                      (0, l.jsx)(d.Z, {
                        title: "Merge",
                        updateModal: () => {
                          R(!1);
                        },
                        children: (0, l.jsx)("div", {
                          className: "flex p-3 flex-wrap w-full",
                          children: (0, l.jsx)(l.Fragment, {
                            children: (0, l.jsxs)("div", {
                              className: "w-full flex flex-wrap  ",
                              children: [
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsxs)("span", {
                                      children: [
                                        "Reset votes for veLOXO ",
                                        t.id,
                                        " ",
                                      ],
                                    }),
                                    g
                                      ? (0, l.jsx)(S.yM, {})
                                      : v
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsxs)("span", {
                                      children: [
                                        "Claim rebase for veLOXO ",
                                        t.id,
                                        " ",
                                      ],
                                    }),
                                    y
                                      ? (0, l.jsx)(S.yM, {})
                                      : v
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsx)("span", {
                                      children: "Claim perp rewards for veLOXO",
                                    }),
                                    M
                                      ? (0, l.jsx)(S.yM, {})
                                      : v
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                                (0, l.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, l.jsxs)("span", {
                                      children: ["Merge veLOXO ", t.id],
                                    }),
                                    T
                                      ? (0, l.jsx)(S.yM, {})
                                      : v
                                      ? (0, l.jsx)(S.Uc, {})
                                      : (0, l.jsx)(S.NO, {}),
                                  ],
                                }),
                              ],
                            }),
                          }),
                        }),
                      }),
                    ],
                  }),
                }),
                (0, l.jsxs)("div", {
                  className:
                    "w-full flex bg-amber-400 bg-opacity-10 justify-evenly p-3 flex-wrap mt-[25px]",
                  children: [
                    (0, l.jsx)("div", {
                      className: "w-1/12",
                      children: (0, l.jsx)(S.hG, {}),
                    }),
                    (0, l.jsx)("div", {
                      className: "w-10/12 text-amber-500 text-xs",
                      children:
                        "Merging/splitting will cause a loss of unclaimed and pending rewards, make sure to claim everything beforehand.",
                    }),
                  ],
                }),
              ],
            });
      }
      function SplitComponent(e) {
        let { data: t, onOpenChange: s } = e,
          n = (0, O.useToastError)(),
          i = (0, O.useToastSuccess)(),
          { address: r } = (0, y.m)(),
          { splitNFT: c } = (0, x.Z)(r),
          {
            resetVote: u,
            claimVeDist: m,
            claimPerpRewards: h,
          } = (0, k.useLock)(),
          f = parseFloat(t.voting_amount.toString().slice(0, 6)),
          [j, v] = (0, a.useState)(2),
          w = [],
          [g, N] = (0, a.useState)(),
          [b, C] = (0, a.useState)(!1),
          [L, T] = (0, a.useState)(!1),
          [F, M] = (0, a.useState)(!1),
          [E, I] = (0, a.useState)(!1),
          [X, Z] = (0, a.useState)(!1),
          [A, B] = (0, a.useState)(""),
          [U, D] = (0, a.useState)(""),
          [R, V] = (0, a.useState)(""),
          [H, P] = (0, a.useState)(!1);
        async function splitHandler() {
          try {
            var e;
            if (
              (B("loading"),
              T(!0),
              M(!0),
              I(!0),
              Z(!0),
              C(!1),
              (null == t
                ? void 0
                : null === (e = t.votes) || void 0 === e
                ? void 0
                : e.length) !== 0 && (await u(t.id)),
              T(!1),
              await m(t.id),
              M(!1),
              !(0, _.D_)(t.perpRewards))
            ) {
              let e = await h(Number(t.id));
              if (!e) throw Error("Failed to claim perpRewards");
            }
            Z(!1);
            let s = [];
            for (let e = 0; e < g.length; e++) {
              let t = g[e].percent;
              t && s.push(Math.floor(t));
            }
            let l = await c(s, Number(t.id));
            i("Split Successfully", "veLOXO ".concat(t.id, " splited"), 1, l),
              I(!1),
              setTimeout(() => {
                P(!1);
              }, 5e3);
          } catch (e) {
            console.log("error stake NFT ", e),
              n(e),
              T(!1),
              Z(!1),
              M(!1),
              I(!1),
              C(!0),
              B("rejected"),
              setTimeout(() => {
                P(!1);
              }, 5e3);
          }
        }
        (0, a.useEffect)(() => {
          s(H);
        }, [H]);
        let increase = (e) => {
            N([]);
            for (let t = 0; t <= e; t++)
              w.push({ id: t + 1, amount: f / j, percent: 100 / j });
            N(w);
          },
          decrease = (e) => {
            for (let t = 0; t <= e; t++) w.slice(e, w.length - 1);
            N(w);
          };
        function handleInputChange(e, t, s) {
          let l =
            null == g
              ? void 0
              : g.map((l) =>
                  l.id === t ? { ...l, [s]: Number(e.target.value) } : l
                );
          N(l);
        }
        return (
          (0, a.useEffect)(() => {
            j > w.length ? increase(j - 1) : decrease(j - 1);
          }, [j]),
          (0, l.jsxs)("div", {
            className: "w-full flex mt-[25px] flex-wrap overflow-y-auto",
            children: [
              (0, l.jsxs)("div", {
                className:
                  "w-full flex justify-between text-xs flex-wrap pr-[1px]",
                children: [
                  (0, l.jsx)("span", { children: "veLOXO ID" }),
                  (0, l.jsxs)("span", {
                    children: [
                      "veLOXO balance: ",
                      (0, _.Xh)((0, p.d)(t.voting_amount), 4, !0),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "w-full p-0 flex  mt-5  flex-wrap",
                    children: [
                      (0, l.jsx)("div", {
                        onClick: () => v(2),
                        className:
                          "flex-row w-1/4 flex items-center justify-center py-[13px] cursor-pointer text-[14px] leading-[14px] text-white ".concat(
                            2 === j ? "btnActive" : "border-transparent"
                          ),
                        children: "2 Tokens",
                      }),
                      (0, l.jsx)("div", {
                        onClick: () => v(3),
                        className:
                          "flex-row w-1/4 flex items-center justify-center py-[13px] cursor-pointer text-[14px] leading-[14px] text-white ".concat(
                            3 === j ? "btnActive" : "border-transparent"
                          ),
                        children: "3 Tokens",
                      }),
                      (0, l.jsx)("div", {
                        onClick: () => v(4),
                        className:
                          "flex-row w-1/4 flex items-center justify-center py-[13px] cursor-pointer text-[14px] leading-[14px] text-white ".concat(
                            4 === j ? "btnActive" : "border-transparent"
                          ),
                        children: "4 Tokens",
                      }),
                      (0, l.jsx)("input", {
                        type: "number",
                        placeholder: "Enter",
                        onChange: (e) => v(Number(e.target.value)),
                        contentEditable: "true",
                        className:
                          "lex-row w-1/4 flex items-center justify-center py-[13px] text-[14px] leading-[14px] !bg-[unset] text-center !border-none focus:border-none focus:outline-0",
                      }),
                    ],
                  }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "w-full mt-[25px] text-xs flex flex-wrap ",
                children: [
                  (0, l.jsxs)("div", {
                    className:
                      "w-full justify-between flex flex-wrap pb-[10px]",
                    children: [
                      (0, l.jsx)("div", { children: "NO" }),
                      (0, l.jsx)("div", { children: "veLOXO Amount" }),
                      (0, l.jsx)("div", { children: "Percentage" }),
                    ],
                  }),
                  null == g
                    ? void 0
                    : g.map((e, s) =>
                        (0, l.jsxs)(
                          "div",
                          {
                            className:
                              "flex !flex-row w-full flex-wrap justify-between modalItem",
                            children: [
                              (0, l.jsx)("input", {
                                disabled: !0,
                                value: g[s].id,
                                type: "number",
                                className: "p-2 rounded bg-transparent w-1/3",
                                name: "",
                                id: "",
                              }),
                              (0, l.jsx)("input", {
                                onChange: (t) =>
                                  handleInputChange(t, e.id, "amount"),
                                value: (
                                  (parseFloat((0, p.d)(t.voting_amount)) *
                                    g[s].percent) /
                                  100
                                ).toFixed(6),
                                type: "number",
                                className: "p-2 rounded bg-transparent w-1/3",
                                name: "",
                                id: "",
                              }),
                              (0, l.jsx)("input", {
                                onChange: (t) =>
                                  handleInputChange(t, e.id, "percent"),
                                value: Math.floor(g[s].percent),
                                type: "number",
                                className:
                                  "p-2 rounded bg-transparent w-1/3 text-right",
                                name: "",
                                id: "",
                              }),
                            ],
                          },
                          s
                        )
                      ),
                ],
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full mt-[25px] text-xs flex justify-between items-center flex-wrap ",
                children: [
                  (0, l.jsx)("span", {
                    className: "text-xs",
                    children: "Total Split Amount：100%",
                  }),
                  (0, l.jsx)("button", {
                    onClick: () =>
                      (function () {
                        for (let e = 0; e <= g.length - 1; e++)
                          w.push({ id: e + 1, amount: f / j, percent: 0 });
                        N(w);
                      })(),
                    className: "text-xs btn p-1 btn-neutral",
                    children: "Reset",
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "w-full mt-[25px]",
                children: (0, l.jsxs)(o.Z, {
                  id: "split",
                  className: "w-full",
                  open: H,
                  children: [
                    (0, l.jsx)("button", {
                      disabled:
                        !!g &&
                        (null == g
                          ? void 0
                          : g.reduce((e, t) => e + t.percent, 0)) > 100,
                      onClick: () => {
                        P(!0), splitHandler();
                      },
                      className:
                        "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                      children: "Split",
                    }),
                    (0, l.jsx)(d.Z, {
                      title: "Split",
                      updateModal: () => {
                        P(!1);
                      },
                      children: (0, l.jsx)("div", {
                        className: "flex p-3 flex-wrap w-full",
                        children: (0, l.jsx)(l.Fragment, {
                          children: (0, l.jsxs)("div", {
                            className: "w-full flex flex-wrap  ",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: [
                                      "Reset votes for veLOXO ",
                                      t.id,
                                      " ",
                                    ],
                                  }),
                                  L
                                    ? (0, l.jsx)(S.yM, {})
                                    : b
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: [
                                      "Claim rebase for veLOXO ",
                                      t.id,
                                      " ",
                                    ],
                                  }),
                                  F
                                    ? (0, l.jsx)(S.yM, {})
                                    : b
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Claim perp rewards for veLOXO",
                                  }),
                                  X
                                    ? (0, l.jsx)(S.yM, {})
                                    : b
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: ["Split veLOXO ", t.id],
                                  }),
                                  E
                                    ? (0, l.jsx)(S.yM, {})
                                    : b
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full flex bg-amber-400 bg-opacity-10 justify-evenly p-3 flex-wrap mt-[25px]",
                children: [
                  (0, l.jsx)("div", {
                    className: "w-1/12",
                    children: (0, l.jsx)(S.hG, {}),
                  }),
                  (0, l.jsx)("div", {
                    className: "w-10/12 text-amber-500 text-xs",
                    children:
                      "Merging/splitting will cause a loss of unclaimed and pending rewards, make sure to claim everything beforehand.",
                  }),
                ],
              }),
            ],
          })
        );
      }
      function TransferComponent(e) {
        let { data: t, onOpenChange: s } = e,
          {
            address: n,
            transferLock: i,
            resetVote: r,
            claimVeDist: c,
          } = (0, k.useLock)(),
          u = (0, O.useToastError)(),
          x = (0, O.useToastSuccess)(),
          [m, p] = (0, a.useState)(""),
          [h, f] = (0, a.useState)(!1),
          [j, v] = (0, a.useState)(!1),
          [w, g] = (0, a.useState)(!1),
          [N, b] = (0, a.useState)(!1),
          [y, _] = (0, a.useState)(""),
          [C, L] = (0, a.useState)(""),
          [T, F] = (0, a.useState)(""),
          [M, E] = (0, a.useState)(!1);
        async function transferHandler() {
          try {
            var e;
            _("loading"),
              f(!1),
              v(!0),
              g(!0),
              b(!0),
              (null == t
                ? void 0
                : null === (e = t.votes) || void 0 === e
                ? void 0
                : e.length) !== 0 && (await r(t.id)),
              v(!1),
              await c(t.id),
              g(!1);
            let s = await i(n, m, t.id);
            x(
              "Transfer Successfully",
              "Transfer of veLOXO "
                .concat(t.id, " to  ")
                .concat(m.slice(0, 6) + "..." + m.slice(-4)),
              1,
              s
            ),
              b(!1),
              setTimeout(() => {
                E(!1);
              }, 5e3);
          } catch (e) {
            console.log("error stake NFT ", e),
              u(e),
              v(!1),
              g(!1),
              b(!1),
              f(!0),
              _("rejected"),
              setTimeout(() => {
                E(!1);
              }, 5e3);
          }
        }
        return (
          (0, a.useEffect)(() => {
            s(M);
          }, [M]),
          (0, l.jsxs)("div", {
            className: "w-full flex mt-[25px] flex-wrap overflow-y-auto",
            children: [
              (0, l.jsxs)("div", {
                className: "w-full flex justify-between text-xs flex-wrap",
                children: [
                  (0, l.jsx)("span", { children: "Transfer OMNIX to" }),
                  (0, l.jsx)("div", {
                    className: "w-full border-white  mt-2 flex flex-col",
                    children: (0, l.jsx)("input", {
                      type: "text",
                      onChange: (e) => p(e.target.value),
                      placeholder: "0x",
                      className:
                        "input input-bordered rounded-none w-full  min-h-0 h-12 border border-accent",
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "w-full mt-5",
                children: (0, l.jsxs)(o.Z, {
                  id: "StakeNFT",
                  className: "w-full",
                  open: M,
                  children: [
                    (0, l.jsx)("button", {
                      disabled: "" === m.trim(),
                      type: "button",
                      onClick: () => {
                        E(!0), transferHandler();
                      },
                      className:
                        "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                      children: "Transfer",
                    }),
                    (0, l.jsx)(d.Z, {
                      title: "Transfer",
                      updateModal: () => {
                        E(!1);
                      },
                      children: (0, l.jsx)("div", {
                        className: "flex p-3 flex-wrap w-full",
                        children: (0, l.jsx)(l.Fragment, {
                          children: (0, l.jsxs)("div", {
                            className: "w-full flex flex-wrap  ",
                            children: [
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: [
                                      "Reset votes for veLOXO ",
                                      t.id,
                                      " ",
                                    ],
                                  }),
                                  j
                                    ? (0, l.jsx)(S.yM, {})
                                    : h
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: [
                                      "Claim rebase for veLOXO ",
                                      t.id,
                                      " ",
                                    ],
                                  }),
                                  w
                                    ? (0, l.jsx)(S.yM, {})
                                    : h
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsxs)("span", {
                                    children: ["Transfer veLOXO ", t.id],
                                  }),
                                  N
                                    ? (0, l.jsx)(S.yM, {})
                                    : h
                                    ? (0, l.jsx)(S.Uc, {})
                                    : (0, l.jsx)(S.NO, {}),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  ],
                }),
              }),
            ],
          })
        );
      }
      var extras_ManageLock = function (e) {
          let { updateModal: t, data: s, openChange: n, refresh: r } = e,
            [c, o] = (0, a.useState)("manage"),
            onOpenChange = (e) => {
              n(e);
            };
          return (0, l.jsxs)("div", {
            className: "modalInner",
            children: [
              (0, l.jsx)("div", {
                className: "flex flex-row items-center justify-between w-full",
                children: (0, l.jsxs)("div", {
                  className: "flex flex-row justify-between",
                  children: [
                    (0, l.jsx)("button", {
                      className: "pr-1",
                      onClick: () => t(!1),
                      children: (0, l.jsx)(S.Y4, {}),
                    }),
                    (0, l.jsxs)("span", {
                      className: i().manage_echonft_title,
                      children: ["Manage veNFT #", s.id.toString()],
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className:
                  "w-full min-h-[46px] mt-[20px] border border-[#2bdfb4] flex flex-wrap justify-between overflow-hidden items-center rounded-full h-[46px]",
                children: [
                  (0, l.jsx)("div", {
                    onClick: () => o("manage"),
                    className: "tabItem ".concat(
                      "manage" === c ? "tabItemActive" : ""
                    ),
                    children: "Manage",
                  }),
                  (0, l.jsx)("div", {
                    onClick: () => o("merge"),
                    className: "tabItem ".concat(
                      "merge" === c ? "tabItemActive" : ""
                    ),
                    children: "Merge",
                  }),
                  (0, l.jsx)("div", {
                    onClick: () => o("split"),
                    className: "tabItem ".concat(
                      "split" === c ? "tabItemActive" : ""
                    ),
                    children: "Split",
                  }),
                  (0, l.jsx)("div", {
                    onClick: () => o("transfer"),
                    className: "tabItem ".concat(
                      "transfer" === c ? "tabItemActive" : ""
                    ),
                    children: "Transfer",
                  }),
                ],
              }),
              "manage" === c &&
                (0, l.jsx)(ManageComponent, {
                  data: s,
                  refresh: r,
                  onOpenChange: onOpenChange,
                }),
              "merge" === c &&
                (0, l.jsx)(MergeComponent, {
                  data: s,
                  onOpenChange: onOpenChange,
                }),
              "split" === c &&
                (0, l.jsx)(SplitComponent, {
                  data: s,
                  onOpenChange: onOpenChange,
                }),
              "transfer" === c &&
                (0, l.jsx)(TransferComponent, {
                  data: s,
                  onOpenChange: onOpenChange,
                }),
            ],
          });
        },
        T = s(10712),
        F = s(26573),
        M = s(30724),
        E = s(37927),
        views_Lock = () => {
          let {
              address: e,
              resetVote: t,
              VeNFTBalance: s,
              withdraw: n,
              isLoading: r,
              getBalance: h,
              getVeNFTBalance: f,
            } = (0, k.useLock)(),
            j = (0, m.useSearchParams)(),
            [w, g] = (0, a.useState)(!1),
            [N, b] = (0, a.useState)(!1),
            [y, C] = (0, a.useState)(),
            [I, X] = (0, a.useState)(x.h),
            [Z, A] = (0, a.useState)(!1),
            [B, U] = (0, a.useState)(!1),
            [D, R] = (0, a.useState)(!1),
            [V, H] = (0, a.useState)(""),
            [P, z] = (0, a.useState)("");
          (0, m.useRouter)();
          let [Y, W] = (0, a.useState)(""),
            [q, G] = (0, a.useState)({ id: "" }),
            [$, J] = (0, a.useState)(!1),
            [K, Q] = (0, a.useState)(!1),
            ee = (0, a.useRef)(null),
            et = (0, a.useRef)(null),
            es = (0, O.useToastError)(),
            el = (0, O.useToastSuccess)(),
            ea = (0, a.useRef)(!1),
            { block: en } = (0, L.Z)();
          (0, a.useEffect)(() => {
            let e = setInterval(h, 5e3);
            return () => clearInterval(e);
          }, []),
            (0, a.useEffect)(() => {
              et.current && (clearTimeout(et.current), (et.current = null));
            }, [w]),
            (0, a.useEffect)(() => {
              let e = j.get("openCreate");
              e && g(!0);
            }, []),
            (0, a.useEffect)(() => {
              let e = j.get("openManage");
              if (s && e && !ea.current) {
                let t = s.find((t) => t.id.toString() == e);
                t &&
                  ((ea.current = !0),
                  X(t),
                  setTimeout(() => {
                    b(!0);
                  }, 500));
              }
            }, [s]);
          let refresh = async () => {
            if (null !== ee.current) return;
            let e = JSON.stringify(
                (0, _.p$)(s).map((e) =>
                  Number((null == e ? void 0 : e.id) || "")
                )
              ),
              poll = async () => {
                try {
                  let t = await f();
                  if (t) {
                    let s = JSON.stringify(
                      (0, _.p$)(t || []).map((e) =>
                        Number((null == e ? void 0 : e.id) || "")
                      )
                    );
                    e !== s
                      ? (console.log("Data changed, stopping polling"),
                        clearTimeout(ee.current),
                        (ee.current = null))
                      : (ee.current = setTimeout(poll, 3e3));
                  } else ee.current = setTimeout(poll, 3e3);
                } catch (e) {
                  console.error("Error fetching data:", e),
                    clearTimeout(ee.current),
                    (ee.current = null);
                }
              };
            ee.current = setTimeout(poll, 3e3);
          };
          async function _withdraw(e) {
            try {
              var s;
              H("loading"),
                R(!0),
                A(!0),
                U(!1),
                (null == e
                  ? void 0
                  : null === (s = e.votes) || void 0 === s
                  ? void 0
                  : s.length) !== 0 && (await t(e.id)),
                A(!1);
              let l = await n(e.id);
              el("Withdraw Successfully", "", 1, l),
                refresh(),
                R(!1),
                (et.current = setTimeout(() => {
                  g(!1);
                }, 5e3));
            } catch (e) {
              console.log("error stake NFT ", e),
                es(e),
                R(!1),
                U(!0),
                H("rejected"),
                (et.current = setTimeout(() => {
                  g(!1);
                }, 5e3));
            }
          }
          let ei = (0, a.useCallback)(
            (e) => {
              if (!e) return 0;
              let t = Number(en.timestamp),
                s = Number(e || 0) - t;
              return s > 0 ? Math.ceil(s / 86400) : 0;
            },
            [en]
          );
          function VoteHandler(e) {
            var t;
            let l = BigInt(0),
              a = BigInt(0),
              n = s.filter((t) => t.id === e)[0];
            return (
              null == n ||
                null === (t = n.votes) ||
                void 0 === t ||
                t.map((e) => {
                  l += e.weight;
                }),
              (a =
                n.voting_amount !== BigInt(0)
                  ? (l / (null == n ? void 0 : n.voting_amount) || 1n) *
                    BigInt(100)
                  : BigInt(0)) > BigInt(100) && (a = BigInt(100)),
              a.toString()
            );
          }
          let handleOpenModal = (e) => {
              X(e), b(!0);
            },
            er = [
              {
                title: "veLOXO NFT",
                dataIndex: "tokenSymbol",
                key: "tokenSymbol",
                render: (e) =>
                  (0, l.jsxs)("div", {
                    className: "flex flex-row justify-between items-start pt-2",
                    children: [
                      (0, l.jsx)("div", {
                        className: "w-auto",
                        children: (0, l.jsx)(v(), {
                          loading: "lazy",
                          "data-src": "/static/images/zohal.png",
                          className: "lazyload",
                          src: "/static/images/zohal.png",
                          alt: "veLOXO image",
                          width: 50,
                          height: 50,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-wrap px-2  w-auto",
                        children: [
                          (0, l.jsx)("div", {
                            className: "".concat(
                              i().after_image_title,
                              " w-full"
                            ),
                            children: "ve".concat(e.tokenSymbol),
                          }),
                          (0, l.jsxs)("div", {
                            className: "".concat(
                              i().after_image_value,
                              " w-full mt-1"
                            ),
                            children: ["# ", e.id.toString()],
                          }),
                        ],
                      }),
                    ],
                  }),
              },
              {
                title: "Rebase APR",
                dataIndex: "Rebase APR",
                key: "RebaseAPR",
                render: (e) => {
                  var t;
                  return (null == e
                    ? void 0
                    : null === (t = e.votes) || void 0 === t
                    ? void 0
                    : t.length) === 0
                    ? "0.00"
                    : (
                        (100 *
                          parseFloat(
                            (0, p.d)(
                              (null == e ? void 0 : e.rebase_amount) || 0
                            )
                          )) /
                        parseFloat((0, p.d)(e.amount))
                      ).toFixed(2);
                },
                subUnit: "%",
              },
              {
                title: "Locked Amount",
                dataIndex: "Locked Amount",
                key: "LockAmount",
                render: (e) => (0, _.Xh)((0, p.d)(e.amount), 4, !0),
                subUnit: "LOXO",
              },
              {
                title: "Lock Expire",
                dataIndex: "Lock Expire",
                key: "LockExpire",
                render: (e) => {
                  let t = ei(e.lockEnd || 0);
                  return t
                    ? "Expires in ".concat(ei(e.lockEnd || 0), " days")
                    : "Lock has expired";
                },
              },
              {
                title: "Votes Used",
                dataIndex: "Votes Used",
                key: "VotesUsed",
                render: (e) => (e.voted ? VoteHandler(e.id) : 0),
                subUnit: "%",
              },
              {
                title: "Voting Amount",
                dataIndex: "Voting Amount",
                key: "VotingAmount",
                render: (e) =>
                  (0, _.Xh)(
                    (0, p.d)((null == e ? void 0 : e.voting_amount) || 0n),
                    4,
                    !0
                  ),
                subUnit: "OMNIX",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                align: "center",
                render: (e, t, s) =>
                  (0, l.jsxs)("div", {
                    className: "flex flex-row gap-2",
                    children: [
                      (0, l.jsx)(u.Z, {
                        className: "z-100",
                        position: "left-top",
                        handle: (0, l.jsx)("button", {
                          disabled: !0,
                          className: "offButton",
                          children: "Vote",
                        }),
                        renderContent: () =>
                          (0, l.jsx)("span", {
                            className: "text-center lg:text-left",
                            children: "Coming Soon",
                          }),
                      }),
                      (0, l.jsx)("div", {
                        className: "w-full lg:w-auto  lg:mt-0",
                        children:
                          0 === ei(e.lockEnd || 0)
                            ? (0, l.jsx)("button", {
                                onClick: () => {
                                  G(e), J(!0), _withdraw(e);
                                },
                                className: "offButton",
                                children: (0, l.jsx)("div", {
                                  children: "Withdraw",
                                }),
                              })
                            : (0, l.jsx)("button", {
                                onClick: () => {
                                  handleOpenModal(e);
                                },
                                className: "offButton",
                                children: (0, l.jsx)("div", {
                                  children: "Manage",
                                }),
                              }),
                      }),
                    ],
                  }),
              },
            ];
          return (0, l.jsxs)("div", {
            className: "pageContainer",
            children: [
              (0, l.jsxs)("div", {
                className: "flex flex-wrap items-center justify-between",
                children: [
                  (0, l.jsxs)("div", {
                    className: "w-full lg:w-auto",
                    children: [
                      (0, l.jsx)("h1", {
                        className: "pageTitle",
                        children: "Lock",
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-row justify-between",
                        children: (0, l.jsxs)("div", {
                          className: "pageContent max-w-[630px]",
                          children: [
                            "Lock OMNIX to earn and govern. Vote with OMNIX to earn incentives and trading fees. OMNIX can be transferred, merged and split. You can hold multiple positions.",
                            (0, l.jsx)(c(), {
                              className: "text-blue hover:underline",
                              target: "_blank",
                              href: "https://alexeys-organization-9.gitbook.io/omnix-ai/how-to-earn/how-to-earn",
                              children: "Learn More",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, l.jsx)("div", {
                    className: "w-full lg:w-auto mt-3 lg:mt-0   ",
                    children: (0, l.jsxs)(o.Z, {
                      id: "choose_pool",
                      className: "w-full",
                      open: w,
                      setOpen: () => {
                        K || g(!1);
                      },
                      children: [
                        (0, l.jsxs)("button", {
                          disabled: !e,
                          onClick: () => g(!0),
                          className: "addBtn",
                          children: [
                            (0, l.jsx)(S.mB, {}),
                            (0, l.jsx)("span", {
                              className: "ml-[10px]",
                              children: "Create lock",
                            }),
                          ],
                        }),
                        (0, l.jsx)(extras_CreateNewLock, {
                          updateOpen: (e) => {
                            Q(e);
                          },
                          VeNFTBalance: s,
                          refresh: refresh,
                          updateModal: (e) => g(e),
                        }),
                      ],
                    }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: "flex flex-col gap-16 pt-10 pb-10",
                children: e
                  ? (0, l.jsxs)(l.Fragment, {
                      children: [
                        r
                          ? (0, l.jsx)("div", {
                              className:
                                "w-full flex flex-row items-center justify-center",
                              children: (0, l.jsx)("span", {
                                className: "loading loading-bars loading-lg",
                              }),
                            })
                          : 0 === s.length
                          ? (0, l.jsxs)("div", {
                              className:
                                "flex flex-row gap-2 justify-center mt-6",
                              children: [
                                (0, l.jsx)(v(), {
                                  loading: "lazy",
                                  "data-src": "/static/img/icon/yellowInfo.svg",
                                  className: "lazyload",
                                  src: "/static/img/icon/yellowInfo.svg",
                                  alt: "warning icon to connect wallet",
                                  width: 25,
                                  height: 25,
                                }),
                                (0, l.jsx)("div", {
                                  className: i().content,
                                  style: { color: "#FF9D00" },
                                  children: "No positions found",
                                }),
                              ],
                            })
                          : (0, l.jsxs)(l.Fragment, {
                              children: [
                                (0, l.jsx)("div", {
                                  className:
                                    "hidden lg:block mb-10 w-full overflow-x-auto",
                                  children: (0, l.jsx)(M.Z, {
                                    hairstyle: "white",
                                    columns: er,
                                    type: "list",
                                    dataSource: s,
                                  }),
                                }),
                                (0, l.jsx)("div", {
                                  className: "block lg:hidden mb-10",
                                  children: s.map((e, t) => {
                                    var s;
                                    let a = [
                                        {
                                          title: "Rebase APR",
                                          value: "".concat(
                                            (null == e
                                              ? void 0
                                              : null === (s = e.votes) ||
                                                void 0 === s
                                              ? void 0
                                              : s.length) === 0
                                              ? "0.00"
                                              : (
                                                  (100 *
                                                    parseFloat(
                                                      (0, p.d)(
                                                        (null == e
                                                          ? void 0
                                                          : e.rebase_amount) ||
                                                          0
                                                      )
                                                    )) /
                                                  parseFloat((0, p.d)(e.amount))
                                                ).toFixed(2)
                                          ),
                                          unit: "%",
                                          key: "RebaseAPR",
                                          width: "40.5%",
                                        },
                                        {
                                          title: "Locked Amount",
                                          value: (0, _.Xh)(
                                            (0, p.d)(e.amount),
                                            4,
                                            !0
                                          ),
                                          key: "LockedAmount",
                                          unit: "LOXO",
                                          width: "59.5%",
                                        },
                                        {
                                          title: "Lock Expire",
                                          value: "Expires in ".concat(
                                            ei(e.lockEnd || 0),
                                            " days"
                                          ),
                                          key: "LockExpire",
                                        },
                                        {
                                          title: "Voting Amount",
                                          value: "".concat(
                                            (0, _.Xh)(
                                              (0, p.d)(
                                                (null == e
                                                  ? void 0
                                                  : e.voting_amount) || 0n
                                              ),
                                              4,
                                              !0
                                            ),
                                            " OMNIX"
                                          ),
                                          key: "VotingAmount",
                                        },
                                        {
                                          title: "Votes Used",
                                          value: e.voted
                                            ? VoteHandler(e.id)
                                            : 0,
                                          key: "VotesUsed",
                                          unit: "%",
                                        },
                                      ],
                                      n = (0, l.jsxs)("div", {
                                        className:
                                          "flex flex-row w-full mt-2 gap-2",
                                        children: [
                                          (0, l.jsx)(u.Z, {
                                            className: "w-1/2 z-100",
                                            handleClassName: "w-full",
                                            position: "left-top",
                                            handle: (0, l.jsx)("button", {
                                              disabled: !0,
                                              className: "w-full offButton",
                                              children: "Vote",
                                            }),
                                            renderContent: () =>
                                              (0, l.jsx)("span", {
                                                className:
                                                  "text-center lg:text-left",
                                                children: "Coming Soon",
                                              }),
                                          }),
                                          0 === ei(e.lockEnd || 0)
                                            ? (0, l.jsx)("button", {
                                                onClick: () => {
                                                  G(e), J(!0), _withdraw(e);
                                                },
                                                className: "offButton w-1/2",
                                                children: (0, l.jsx)("div", {
                                                  children: "Withdraw",
                                                }),
                                              })
                                            : (0, l.jsx)("button", {
                                                onClick: () =>
                                                  handleOpenModal(e),
                                                className: "offButton w-1/2",
                                                children: (0, l.jsx)("div", {
                                                  children: "Manage",
                                                }),
                                              }),
                                        ],
                                      });
                                    return (0, l.jsx)(
                                      F.Z,
                                      {
                                        footer: n,
                                        isOpen: y === t,
                                        onCollapse: () => {
                                          y === t ? C(null) : C(t);
                                        },
                                        columns: a,
                                        titleImg: "/static/images/zohal.png",
                                        name: "ve".concat(e.tokenSymbol),
                                        detail: "# ".concat(e.id.toString()),
                                      },
                                      t
                                    );
                                  }),
                                }),
                              ],
                            }),
                        (0, l.jsx)(E.Z, {
                          id: "StakeNFT",
                          className: "w-full",
                          open: $,
                          children: (0, l.jsx)(d.Z, {
                            title: "Withdraw",
                            updateModal: () => {
                              J(!1);
                            },
                            children: (0, l.jsx)("div", {
                              className: "flex p-3 flex-wrap w-full",
                              children: (0, l.jsx)(l.Fragment, {
                                children: (0, l.jsxs)("div", {
                                  className: "w-full flex flex-wrap  ",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      className: "popupItem",
                                      children: [
                                        (0, l.jsxs)("span", {
                                          children: [
                                            "Reset votes for veLOXO ",
                                            q.id,
                                            " ",
                                          ],
                                        }),
                                        Z
                                          ? (0, l.jsx)(S.yM, {})
                                          : B
                                          ? (0, l.jsx)(S.Uc, {})
                                          : (0, l.jsx)(S.NO, {}),
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      className: "popupItem",
                                      children: [
                                        (0, l.jsxs)("span", {
                                          children: [
                                            "Withdraw veLOXO ",
                                            q.id,
                                            " ",
                                          ],
                                        }),
                                        D
                                          ? (0, l.jsx)(S.yM, {})
                                          : B
                                          ? (0, l.jsx)(S.Uc, {})
                                          : (0, l.jsx)(S.NO, {}),
                                      ],
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                        (0, l.jsx)(E.Z, {
                          id: "choose_pool",
                          className: "w-full",
                          open: N,
                          setOpen: () => {
                            K || b(!1);
                          },
                          children:
                            N &&
                            (0, l.jsx)(extras_ManageLock, {
                              refresh: refresh,
                              openChange: (e) => {
                                Q(e);
                              },
                              data: I,
                              updateModal: (e) => b(e),
                            }),
                        }),
                      ],
                    })
                  : (0, l.jsx)("div", {
                      children: (0, l.jsx)(T.C, {
                        className: "flex content-center gap-4",
                        BtnClassName: "",
                      }),
                    }),
              }),
            ],
          });
        };
    },
    30365: function (e) {
      e.exports = {
        main: "lock_main__N1sps",
        title: "lock_title__JzgYp",
        learn_more: "lock_learn_more__nVsXq",
        content: "lock_content__atsTx",
        add_remove_lock_btn: "lock_add_remove_lock_btn__KISwL",
        filter_btn: "lock_filter_btn__COq_Z",
        stake_switch: "lock_stake_switch__J_mys",
        veNFT_button: "lock_veNFT_button__DQADr",
        after_image_title: "lock_after_image_title__B0egv",
        after_image_value: "lock_after_image_value__xYMc8",
        other_row_title: "lock_other_row_title__mytTU",
        other_row_value: "lock_other_row_value__BqgtF",
        date_error: "lock_date_error__U4v9S",
      };
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 958, 795, 984, 133, 744], function () {
      return e((e.s = 77547));
    }),
      (_N_E = e.O());
  },
]);
