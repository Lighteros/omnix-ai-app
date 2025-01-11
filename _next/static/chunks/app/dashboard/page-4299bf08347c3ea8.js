(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [702],
  {
    41380: function (e, a, s) {
      Promise.resolve().then(s.t.bind(s, 19167, 23)),
        Promise.resolve().then(s.bind(s, 36517)),
        Promise.resolve().then(s.bind(s, 76005)),
        Promise.resolve().then(s.bind(s, 96492));
    },
    36517: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return SwapLayout;
          },
        });
      var l = s(57437),
        t = s(15187),
        r = s(37359),
        n = s(72692);
      function SwapLayout(e) {
        let { children: a } = e,
          { isSupported: s } = (0, r.$)();
        return (0, l.jsx)(l.Fragment, {
          children: (0, l.jsxs)("main", {
            children: [
              (0, l.jsx)(t.Z, {}),
              s ? (0, l.jsx)(l.Fragment, { children: a }) : (0, l.jsx)(n.Z, {}),
            ],
          }),
        });
      }
    },
    76005: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          DashboardProvider: function () {
            return DashboardProvider;
          },
          useDashboard: function () {
            return useDashboard;
          },
        });
      var l = s(57437),
        t = s(2265),
        r = s(79037),
        n = s(68204),
        i = s(33275),
        d = s(46094),
        o = s(52098),
        c = s(92980),
        u = s(41658);
      let m = (0, t.createContext)(void 0),
        DashboardProvider = (e) => {
          let { children: a } = e,
            { address: s, chain: t } = (0, r.m)(),
            { VeNFTBalance: x, isLoading: h } = (0, n.Z)(s),
            { fetchDiamond: p, claimPerpRewards: f } = (0, u.Z)(s),
            {
              balances: b,
              initial: v,
              prices: j,
              isLoading: w,
              period: g,
              activePeriod: N,
              earnedList: _,
              fetchData: y,
              init: k,
              entirePairs: S,
            } = (0, c.useTokenContext)(),
            {
              fetchTradersList: R,
              claimBribes: C,
              claimFees: D,
              claimVeDist: F,
              ClaimTraderReward: T,
              claimGauge: O,
              claimPerpRewards: L,
            } = (0, i.Z)(s),
            {
              getRewardBalances: I,
              fetchVeDistEarned: X,
              getVoteData: B,
            } = (0, d.Z)(s),
            {
              balanceOf: A,
              StakedTokenIds: E,
              pendingReward: M,
              claim: P,
            } = (0, o.Z)(s);
          return (0, l.jsx)(m.Provider, {
            value: {
              address: s,
              balances: b,
              isLoading: w,
              VeNFTBalance: x,
              isHoldersLoading: h,
              earnedList: _,
              fetchTradersList: R,
              fetchDiamond: p,
              claim: P,
              claimBribes: C,
              init: k,
              prices: j,
              claimFees: D,
              claimVeDist: F,
              fetchData: y,
              ClaimTraderReward: T,
              claimGauge: O,
              claimPerpLoxoRewards: f,
              claimPerpRewards: L,
              getRewardBalances: I,
              fetchVeDistEarned: X,
              period: g,
              activePeriod: N,
              getVoteData: B,
              balanceOf: A,
              StakedTokenIds: E,
              pendingReward: M,
              entirePairs: S,
            },
            children: j && j.length && g ? a : null,
          });
        },
        useDashboard = () => {
          let e = (0, t.useContext)(m);
          if (void 0 === e)
            throw Error("useDashboard must be used within a DashboardProvider");
          return e;
        };
    },
    96492: function (e, a, s) {
      "use strict";
      s.r(a),
        s.d(a, {
          default: function () {
            return views_Dashboard;
          },
        });
      var l = s(57437),
        t = s(2265),
        r = s(93293),
        n = s.n(r),
        i = s(17423),
        d = s(30724),
        o = s(61396),
        c = s.n(o),
        u = s(62776),
        m = s(54968),
        x = s(24033),
        h = s(41472),
        p = s(37416),
        f = s(10712),
        b = s(76005),
        v = s(16775),
        j = s(79352),
        components_Gauge = (e) => {
          let {
              dataSource: a,
              loading: s = !1,
              upDataList: r,
              totalClaimable: i = 0,
            } = e,
            {
              claimGauge: o,
              balances: w,
              isLoading: g,
              address: N,
              entirePairs: _,
              prices: y,
            } = (0, b.useDashboard)(),
            k = (0, x.useRouter)(),
            S = (0, t.useRef)(!1),
            R = (0, h.useToastError)(),
            C = (0, h.useToastSuccess)(),
            [D, F] = (0, t.useState)([]),
            [T, O] = (0, t.useState)(!1);
          function calculateTokenAmounts(e, a, s, l, t, r) {
            let n, i;
            let d = parseFloat(a) * 10 ** (18 - Number(t)),
              o = parseFloat(s) * 10 ** (18 - Number(r));
            if (0 === parseFloat(l)) return [BigInt(0), BigInt(0)];
            {
              let a = (parseFloat(e) * d) / parseFloat(l),
                s = (parseFloat(e) * o) / parseFloat(l);
              (n = a / 10 ** (18 - Number(t))),
                (i = s / 10 ** (18 - Number(r)));
              let c = n.toLocaleString("fullwide", {
                  useGrouping: !1,
                  maximumFractionDigits: 0,
                }),
                u = i.toLocaleString("fullwide", {
                  useGrouping: !1,
                  maximumFractionDigits: 0,
                });
              return [BigInt(c), BigInt(u)];
            }
          }
          async function handleClaimRewards(e, a) {
            if (!S.current)
              try {
                let s = (0, m.p$)(D);
                (s[a].isClaim = !0), F(s), (S.current = !0);
                let l = await o(e);
                C("Claim Successfully", "", 1, l), r();
              } catch (e) {
                R(e);
              } finally {
                S.current = !1;
                let e = (0, m.p$)(D);
                (e[a].isClaim = !1), F(e);
              }
          }
          (0, t.useEffect)(() => {
            F(a);
          }, [a]);
          let claimAll = async () => {
              if (T) return;
              O(!0);
              let e = D.filter((e) => e.account_gauge_earned !== BigInt(0));
              await Promise.all(
                e.map(async (e) => {
                  try {
                    let a = await o(e.gauge);
                    return C("Claim Successfully", "", 1, a), !0;
                  } catch (e) {
                    return R(e), !1;
                  }
                })
              ),
                r(),
                O(!1);
            },
            getYourStake = (e) => {
              let a = calculateTokenAmounts(
                  e.account_gauge_balance,
                  e.reserve0,
                  e.reserve1,
                  e.total_supply,
                  e.token0_decimals,
                  e.token1_decimals
                ),
                s = (function (e, a, s, l, t) {
                  let r = 0;
                  for (let n of e)
                    if (n.symbol === a) {
                      let e = parseFloat(s),
                        a = n.price;
                      r += e * a;
                    } else if (n.symbol === l) {
                      let e = parseFloat(t),
                        a = n.price;
                      r += e * a;
                    }
                  return (0, m.J2)(r);
                })(
                  y,
                  e.token0_symbol,
                  parseFloat((0, v.b)(a[0], Number(e.token0_decimals))).toFixed(
                    3
                  ),
                  e.token1_symbol,
                  parseFloat((0, v.b)(a[1], Number(e.token1_decimals))).toFixed(
                    3
                  )
                );
              return e.account_gauge_balance === BigInt(0) || Number(s)
                ? (0, m.pw)(s, 2, !0)
                : "<0.01";
            },
            L = [
              {
                title: "Position",
                key: "Position",
                width: "30%",
                dataIndex: "token0_symbol",
                render: (e) =>
                  (0, l.jsx)(u.Z, {
                    token0Symbol: e.token0_symbol,
                    token1Symbol: e.token1_symbol,
                    name: ""
                      .concat(e.token0_symbol, "/")
                      .concat(e.token1_symbol),
                    detail: !0 === e.stable ? "Stable" : "Volatile",
                  }),
              },
              {
                title: "Your Stake",
                key: "YourPosition",
                dataIndex: "",
                width: "22%",
                preSymbol: "$",
                tooltip: N
                  ? (e) =>
                      (0, l.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, l.jsxs)("span", {
                            children: [
                              parseFloat(
                                (0, v.b)(
                                  calculateTokenAmounts(
                                    e.account_gauge_balance,
                                    e.reserve0,
                                    e.reserve1,
                                    e.total_supply,
                                    e.token0_decimals,
                                    e.token1_decimals
                                  )[0],
                                  Number(e.token0_decimals)
                                )
                              ).toFixed(3),
                              " ",
                              e.token0_symbol,
                              " ",
                            ],
                          }),
                          (0, l.jsxs)("span", {
                            children: [
                              parseFloat(
                                (0, v.b)(
                                  calculateTokenAmounts(
                                    e.account_gauge_balance,
                                    e.reserve0,
                                    e.reserve1,
                                    e.total_supply,
                                    e.token0_decimals,
                                    e.token1_decimals
                                  )[1],
                                  Number(e.token1_decimals)
                                )
                              ).toFixed(3),
                              " ",
                              e.token1_symbol,
                            ],
                          }),
                        ],
                      })
                  : void 0,
                render: (e) => (N ? getYourStake(e) : "-"),
              },
              {
                title: "You Earned",
                key: "YouEarned",
                dataIndex: "",
                width: "22%",
                render: (e) =>
                  (0, l.jsxs)("div", {
                    children: [
                      e.account_gauge_earned
                        ? (0, m.Xh)((0, j.d)(e.account_gauge_earned), 4, !0)
                        : "0",
                      " LOXO",
                    ],
                  }),
              },
              {
                title: "Actions",
                dataIndex: "",
                width: "26%",
                key: "operation",
                align: "right",
                render: (e, a, s) =>
                  (0, l.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children: (0, l.jsxs)(l.Fragment, {
                      children: [
                        e.account_lp_balance > 0n &&
                          e.account_gauge_balance <= 0n &&
                          (0, l.jsx)("button", {
                            onClick: () =>
                              k.push(
                                "/liquidity?openManage=".concat(
                                  e.pair_address,
                                  "&autoBalance=true"
                                )
                              ),
                            className: "offButton",
                            children: "Go To Stake LP",
                          }),
                        (0, l.jsxs)("button", {
                          disabled: e.account_gauge_earned === BigInt(0),
                          onClick: () => handleClaimRewards(e.gauge, s),
                          className: "offButton",
                          children: [
                            e.isClaim && (0, l.jsx)(p.yM, {}),
                            " Claim",
                          ],
                        }),
                      ],
                    }),
                  }),
              },
            ];
          return (0, l.jsxs)("div", {
            className: n().container,
            children: [
              (0, l.jsxs)("div", {
                className: "w-full flex flex-row items-center justify-between",
                children: [
                  (0, l.jsx)("div", {
                    className: n().tableTitle,
                    children: "Gauge Farming Rewards",
                  }),
                  (0, l.jsx)("div", {
                    className: n().dataArea,
                    children: N
                      ? (0, l.jsxs)("button", {
                          disabled: !i,
                          onClick: claimAll,
                          className:
                            "disabled:opacity-50 disabled:bg-base-200 !text-[14px] !py-[6px] disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn mr-[5px]",
                          children: [
                            T && (0, l.jsx)(p.yM, {}),
                            (0, l.jsx)("span", { children: "Claim All:" }),
                            (0, l.jsx)("span", {
                              children: "".concat((0, m.Xh)(i, 4, !0), " LOXO"),
                            }),
                          ],
                        })
                      : (0, l.jsx)(f.C, {
                          BtnClassName: "min-h-[2.3rem] py-0 h-[2.3rem]",
                          noTitle: !0,
                        }),
                  }),
                ],
              }),
              s
                ? (0, l.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, l.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, l.jsx)("div", {
                    className: n().tableArea,
                    children:
                      N && D && D.length
                        ? (0, l.jsx)(d.Z, {
                            hairstyle: "white",
                            columns: L,
                            type: "collapsed",
                            dataSource: D,
                          })
                        : (0, l.jsxs)("div", {
                            className: n().nodataArea,
                            children: [
                              "Add some LP to a ",
                              (0, l.jsx)(c(), {
                                className: "text-[#2BDFB4] px-1",
                                href: "/liquidity",
                                children: "Liquidity Pool",
                              }),
                              " to start earn daily emissions.",
                            ],
                          }),
                  }),
            ],
          });
        },
        w = s(26573),
        g = s(79037),
        GaugeCard = (e) => {
          let {
              dataSource: a,
              loading: s = !1,
              upDataList: r,
              totalClaimable: i = 0,
            } = e,
            { address: d } = (0, g.m)(),
            { claimGauge: o, balances: u, prices: f } = (0, b.useDashboard)(),
            N = (0, h.useToastError)(),
            [_, y] = (0, t.useState)(!1),
            k = (0, h.useToastSuccess)(),
            S = (0, t.useRef)(!1),
            [R, C] = (0, t.useState)([]),
            D = (0, x.useRouter)();
          async function handleClaimRewards(e, a) {
            if (!S.current)
              try {
                let s = (0, m.p$)(R);
                (s[a].isClaim = !0), C(s), (S.current = !0);
                let l = await o(e);
                k("Claim Successfully", "", 1, l), r();
              } catch (e) {
                N(e);
              } finally {
                S.current = !1;
                let e = (0, m.p$)(R);
                (e[a].isClaim = !1), C(e);
              }
          }
          function calculateTokenAmounts(e, a, s, l, t, r) {
            let n, i;
            let d = parseFloat(a) * 10 ** (18 - Number(t)),
              o = parseFloat(s) * 10 ** (18 - Number(r));
            if (0 === parseFloat(l)) return [BigInt(0), BigInt(0)];
            {
              let a = (parseFloat(e) * d) / parseFloat(l),
                s = (parseFloat(e) * o) / parseFloat(l);
              (n = a / 10 ** (18 - Number(t))),
                (i = s / 10 ** (18 - Number(r)));
              let c = n.toLocaleString("fullwide", {
                  useGrouping: !1,
                  maximumFractionDigits: 0,
                }),
                u = i.toLocaleString("fullwide", {
                  useGrouping: !1,
                  maximumFractionDigits: 0,
                });
              return [BigInt(c), BigInt(u)];
            }
          }
          (0, t.useEffect)(() => {
            C(a);
          }, [a]);
          let claimAll = async () => {
              if (_) return;
              y(!0);
              let e = R.filter((e) => e.account_gauge_earned !== BigInt(0));
              await Promise.all(
                e.map(async (e) => {
                  try {
                    let a = await o(e.gauge);
                    return k("Claim Successfully", "", 1, a), !0;
                  } catch (e) {
                    return N(e), !1;
                  }
                })
              ),
                r(),
                y(!1);
            },
            getYourStake = (e) => {
              let a = calculateTokenAmounts(
                  e.account_gauge_balance,
                  e.reserve0,
                  e.reserve1,
                  e.total_supply,
                  e.token0_decimals,
                  e.token1_decimals
                ),
                s = (function (e, a, s, l, t) {
                  let r = 0;
                  for (let n of e)
                    if (n.symbol === a) {
                      let e = parseFloat(s),
                        a = n.price;
                      r += e * a;
                    } else if (n.symbol === l) {
                      let e = parseFloat(t),
                        a = n.price;
                      r += e * a;
                    }
                  return (0, m.J2)(r);
                })(
                  f,
                  e.token0_symbol,
                  parseFloat((0, v.b)(a[0], Number(e.token0_decimals))).toFixed(
                    3
                  ),
                  e.token1_symbol,
                  parseFloat((0, v.b)(a[1], Number(e.token1_decimals))).toFixed(
                    3
                  )
                );
              return e.account_gauge_balance === BigInt(0) || Number(s)
                ? (0, m.pw)(s, 2, !0)
                : "<0.01";
            };
          return (0, l.jsxs)("div", {
            className: n().container,
            children: [
              R && R.length
                ? (0, l.jsxs)("div", {
                    className: "w-full flex flex-col items-center mb-8",
                    children: [
                      (0, l.jsxs)("div", {
                        className: n().dataAreaCard,
                        children: [
                          "Total Claimable Rewards:",
                          (0, l.jsxs)("span", {
                            className: n().dataDesc,
                            children: [(0, m.Xh)(i, 4, !0), " LOXO"],
                          }),
                        ],
                      }),
                      (0, l.jsxs)("button", {
                        disabled: !i,
                        onClick: claimAll,
                        className: "".concat(
                          n().buttonAll,
                          " mr-[5px] w-full mt-2"
                        ),
                        children: [
                          _ && (0, l.jsx)(p.yM, {}),
                          (0, l.jsx)("span", {
                            className: n().buttonText,
                            children: "Claim All:",
                          }),
                          (0, l.jsx)("span", {
                            children: "".concat((0, m.Xh)(i, 4, !0), " LOXO"),
                          }),
                        ],
                      }),
                    ],
                  })
                : null,
              s
                ? (0, l.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, l.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, l.jsx)("div", {
                    className: n().tableArea,
                    children:
                      d && R && R.length
                        ? null == R
                          ? void 0
                          : R.map((e, a) => {
                              let s = [
                                  {
                                    title: "Stake",
                                    value: d ? getYourStake(e) : "-",
                                    key: "Position",
                                    preSymbol: "$",
                                    tooltip: (a) =>
                                      (0, l.jsxs)("div", {
                                        className: "flex flex-col items-center",
                                        children: [
                                          (0, l.jsxs)("span", {
                                            children: [
                                              parseFloat(
                                                (0, v.b)(
                                                  calculateTokenAmounts(
                                                    e.account_lp_balance,
                                                    e.reserve0,
                                                    e.reserve1,
                                                    e.total_supply,
                                                    e.token0_decimals,
                                                    e.token1_decimals
                                                  )[0],
                                                  Number(e.token0_decimals)
                                                )
                                              ).toFixed(3),
                                              " ",
                                              e.token0_symbol,
                                              " ",
                                            ],
                                          }),
                                          (0, l.jsxs)("span", {
                                            children: [
                                              parseFloat(
                                                (0, v.b)(
                                                  calculateTokenAmounts(
                                                    e.account_lp_balance,
                                                    e.reserve0,
                                                    e.reserve1,
                                                    e.total_supply,
                                                    e.token0_decimals,
                                                    e.token1_decimals
                                                  )[1],
                                                  Number(e.token1_decimals)
                                                )
                                              ).toFixed(3),
                                              " ",
                                              e.token1_symbol,
                                            ],
                                          }),
                                        ],
                                      }),
                                  },
                                  {
                                    title: "You Earned",
                                    value: "".concat(
                                      e.account_gauge_earned
                                        ? (0, m.Xh)(
                                            (0, j.d)(e.account_gauge_earned),
                                            4,
                                            !0
                                          )
                                        : "0",
                                      " LOXO"
                                    ),
                                    key: "YouEarned",
                                  },
                                ],
                                t = (0, l.jsx)(l.Fragment, {
                                  children: (0, l.jsx)("div", {
                                    className:
                                      "flex flex-wrap items-center justify-center w-full",
                                    children: (0, l.jsxs)("div", {
                                      className: "flex gap-[14px] w-full",
                                      children: [
                                        e.account_lp_balance > 0n &&
                                          e.account_gauge_balance <= 0n &&
                                          (0, l.jsx)("button", {
                                            onClick: () =>
                                              D.push(
                                                "/liquidity?openManage=".concat(
                                                  e.pair_address,
                                                  "&autoBalance=true"
                                                )
                                              ),
                                            style: { flex: 1 },
                                            className: "offButton",
                                            children: "Go To Stake LP",
                                          }),
                                        (0, l.jsxs)("button", {
                                          disabled:
                                            e.account_gauge_earned ===
                                            BigInt(0),
                                          style: {
                                            flex:
                                              e.account_lp_balance > 0n &&
                                              e.account_gauge_balance <= 0n
                                                ? 1
                                                : "auto",
                                            width: "100%",
                                          },
                                          onClick: () =>
                                            handleClaimRewards(e.gauge, a),
                                          className: "offButton",
                                          children: [
                                            e.isClaim && (0, l.jsx)(p.yM, {}),
                                            " Claim",
                                          ],
                                        }),
                                      ],
                                    }),
                                  }),
                                });
                              return (0, l.jsx)(
                                w.Z,
                                {
                                  footer: t,
                                  columns: s,
                                  asymmetrical: !0,
                                  token0Symbol:
                                    null == e ? void 0 : e.token0_symbol,
                                  token1Symbol:
                                    null == e ? void 0 : e.token1_symbol,
                                  name: ""
                                    .concat(e.token0_symbol, "/")
                                    .concat(e.token1_symbol),
                                  detail:
                                    !0 === e.stable ? "Stable" : "Volatile",
                                },
                                a
                              );
                            })
                        : (0, l.jsxs)("div", {
                            className: n().nodataCard,
                            children: [
                              (0, l.jsx)("span", {
                                children: "Add some LP to a",
                              }),
                              " ",
                              (0, l.jsx)(c(), {
                                className: "text-[#2BDFB4] px-1",
                                href: "/liquidity",
                                children: "Liquidity Pool",
                              }),
                              " ",
                              (0, l.jsx)("span", {
                                children: "to start earn daily emissions.",
                              }),
                            ],
                          }),
                  }),
            ],
          });
        },
        N = s(16691),
        _ = s.n(N),
        y = s(77778);
      let useHolders = () => {
        let {
            claimBribes: e,
            claimFees: a,
            claimVeDist: s,
            balances: l,
            isLoading: r,
            address: n,
            prices: i,
            claimPerpRewards: d,
          } = (0, b.useDashboard)(),
          [o, c] = (0, t.useState)(!1),
          [u, x] = (0, t.useState)(""),
          [p, f] = (0, t.useState)(!1),
          [j, w] = (0, t.useState)(!1),
          [g, N] = (0, t.useState)(!1),
          [_, k] = (0, t.useState)(!1),
          [S, R] = (0, t.useState)(""),
          [C, D] = (0, t.useState)(!1),
          [F, T] = (0, t.useState)(""),
          O = (0, h.useToastError)(),
          L = (0, h.useToastSuccess)(),
          calculateTotalReward = (e, a) =>
            e && Array.isArray(e) && 0 !== e.length
              ? e.reduce((e, s) => {
                  if (0 !== parseFloat(s.amount)) {
                    let l = (0, m.Xh)((0, v.b)(s.amount, Number(s.decimals))),
                      t = parseFloat((0, m.bp)(a, s.symbol, l, "LOXO", "0"));
                    return e + t;
                  }
                  return e;
                }, 0)
              : 0;
        return {
          txError: o,
          IsLoadingClaimfees: p,
          IsLoadingClaimBribes: j,
          IsLoadingClaimVe: g,
          IsLoadingClaimPerp: _,
          open: C,
          IsConfirmedTx: u,
          tokenId: S,
          isLoading: r,
          errorMsg: F,
          getRecord: (e, a) => {
            let s =
              (a.fees || []).some((e) => (0, y.Z)(e.amount).isGreaterThan(0)) ||
              (a.bribes || []).some((e) => (0, y.Z)(e.amount).isGreaterThan(0));
            return s && "0.00" === e ? "<0.01" : (0, m.pw)(e, 2, !0);
          },
          setTxError: c,
          setIsConfirmedTx: x,
          getPerpData: (e) => {
            if (!e || !e.length) return { tokenRecord: [], tokenSum: 0 };
            let a = e.map((e) => {
                let a =
                    null == i
                      ? void 0
                      : i.find((a) => {
                          var s, l;
                          return (
                            (null == a
                              ? void 0
                              : null === (s = a.address) || void 0 === s
                              ? void 0
                              : s.toLowerCase()) ===
                            (null == e
                              ? void 0
                              : null === (l = e.tokenAddress) || void 0 === l
                              ? void 0
                              : l.toLowerCase())
                          );
                        }),
                  s = (0, v.b)(
                    (null == e ? void 0 : e.claimData) || 0,
                    (null == a ? void 0 : a.decimals) || 0
                  ),
                  l =
                    parseFloat(
                      (0, v.b)(
                        (null == e ? void 0 : e.claimData) || 0,
                        (null == a ? void 0 : a.decimals) || 0
                      )
                    ) * (null == a ? void 0 : a.price) || 0;
                return {
                  symbol: (null == a ? void 0 : a.symbol) || "",
                  tokenNum: (0, m.Xh)(s || "0", 4, !0),
                  totalUSD: l || 0,
                };
              }),
              s = a.reduce((e, a) => e + a.totalUSD, 0);
            return { tokenRecord: a || [], tokenSum: (0, m.pw)(s || 0, 2, !0) };
          },
          handleClaimAllRewards: async function (l, t, r) {
            try {
              var n, i;
              x("loading"), f(!0), w(!0), N(!0), k(!0), c(!1);
              let o = "",
                u = "",
                h = "",
                p = "";
              if (l.fees.length > 0) {
                let e = await a(l.fees, Number(t));
                if (!e) throw Error("Failed to claim fees");
                o = e;
              }
              if (
                (f(!1),
                (null == l
                  ? void 0
                  : null === (n = l.bribes) || void 0 === n
                  ? void 0
                  : n.length) > 0)
              ) {
                let a = await e(l.bribes, Number(t));
                if (!a) throw Error("Failed to claim bribes");
                u = a;
              }
              if (
                (w(!1),
                (null == l
                  ? void 0
                  : null === (i = l.veDist) || void 0 === i
                  ? void 0
                  : i.length) > 0)
              ) {
                let e = await s(Number(t));
                if (!e) throw Error("Failed to claim veDist");
                h = e;
              }
              if ((N(!1), !(0, m.D_)(r))) {
                let e = await d(Number(t));
                if (!e) throw Error("Failed to claim perpRewards");
                p = e;
              }
              k(!1),
                L(
                  "Claim all reward",
                  "Claim fees & bribes & Rebase Rewards & Perp Rewards",
                  1,
                  p || h || u || o
                ),
                N(!1),
                f(!1),
                w(!1),
                k(!1),
                setTimeout(() => {
                  D(!1);
                }, 5e3);
            } catch (e) {
              console.error(e),
                c(!0),
                O(e),
                f(!1),
                w(!1),
                N(!1),
                k(!1),
                x("error"),
                setTimeout(() => {
                  D(!1);
                }, 5e3);
            }
          },
          setIsLoadingClaimfees: f,
          checkEmptyArraysInElements: (e) => {
            if (!e) return !0;
            let a = !e.bribes || 0 === e.bribes.length,
              s = !e.fees || 0 === e.fees.length,
              l = !e.veDist || 0 === e.veDist.length;
            return a && s && l;
          },
          setIsLoadingClaimBribes: w,
          setIsLoadingClaimVe: N,
          setOpen: D,
          setErrorMsg: T,
          getSum: (e) => {
            let a = calculateTotalReward(e.bribes, i),
              s = calculateTotalReward(e.fees, i);
            return 0 + (a + s);
          },
          getVeDist: (e) => {
            let a = 0;
            return (
              e.veDist.forEach((e) => {
                let s = (0, m.bp)(
                  i,
                  "LOXO",
                  parseFloat(e.earned).toFixed(3),
                  "LOXO",
                  "0"
                );
                a += Number(s);
              }),
              a
            );
          },
        };
      };
      var k = s(37927),
        S = s(54724),
        R = s(85068),
        Table = (e) => {
          let {
              dataSource: a,
              loading: s = !1,
              rewardLoading: r = !1,
              loadMore: o,
              moreLoading: u,
              hasMore: h,
            } = e,
            f = (0, x.useRouter)(),
            { address: w, prices: g } = (0, b.useDashboard)(),
            {
              txError: N,
              tokenId: y,
              handleClaimAllRewards: C,
              IsLoadingClaimfees: D,
              IsLoadingClaimBribes: F,
              IsLoadingClaimVe: T,
              open: O,
              IsLoadingClaimPerp: L,
              getPerpData: I,
              checkEmptyArraysInElements: X,
              setOpen: B,
              getRecord: A,
              getSum: E,
            } = useHolders(),
            { block: M } = (0, R.Z)(),
            P = (0, t.useCallback)(
              (e) => {
                if (!e) return 0;
                let a = Number(M.timestamp),
                  s = Number(e || 0) - a;
                return s > 0 ? Math.ceil(s / 86400) : 0;
              },
              [M]
            ),
            load = () => {
              h && o();
            },
            Z = [
              {
                title: "Position",
                key: "Position",
                width: "26%",
                dataIndex: "",
                render: (e) =>
                  (0, l.jsxs)("div", {
                    className:
                      "flex flex-row justify-between items-center pt-2",
                    children: [
                      (0, l.jsx)("div", {
                        className: "w-auto",
                        children: (0, l.jsx)(_(), {
                          loading: "lazy",
                          "data-src": "/static/images/zohal.png",
                          className: "lazyload",
                          src: "/static/images/zohal.png",
                          alt: "veLOXO image",
                          width: 40,
                          height: 40,
                        }),
                      }),
                      (0, l.jsxs)("div", {
                        className: "flex flex-col px-2",
                        children: [
                          (0, l.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              (0, l.jsx)("div", {
                                className: "".concat(n().after_image_title),
                                children: "ve".concat(e.tokenSymbol),
                              }),
                              (0, l.jsxs)("div", {
                                className: "".concat(
                                  n().after_image_title,
                                  " ml-2"
                                ),
                                children: ["# ", e.id.toString()],
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "flex flex-row items-center mt-2",
                            children: [
                              (0, l.jsx)("div", {
                                className: "".concat(
                                  n().after_image_value,
                                  " text-[#7e7e7e]"
                                ),
                                children: "".concat(
                                  parseFloat(
                                    (0, j.d)(
                                      (null == e ? void 0 : e.amount) || 0
                                    )
                                  ).toFixed(2),
                                  " veLOXO"
                                ),
                              }),
                              (0, l.jsx)("div", {
                                className: "".concat(
                                  n().after_image_value,
                                  " ml-2 text-[#7e7e7e]"
                                ),
                                children: "Expires in ".concat(
                                  P((null == e ? void 0 : e.lockEnd) || 0),
                                  " days"
                                ),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
              },
              {
                title: "Vote Rewards",
                key: "VoteRewards",
                width: "17%",
                dataIndex: "",
                preSymbol: r ? "" : "$",
                render: (e) =>
                  r
                    ? (0, l.jsx)("div", {
                        className: "text-left",
                        children: (0, l.jsx)("span", {
                          className: "loading loading-bars loading-sm",
                        }),
                      })
                    : A(E(e), e),
                tooltip: r
                  ? void 0
                  : (e) => {
                      var a, s;
                      return (0, l.jsxs)("div", {
                        className: "flex flex-col",
                        children: [
                          (0, l.jsxs)("div", {
                            className: n().holdersRewardsTitle,
                            children: [
                              (0, l.jsx)("span", {
                                className: "text-[#7e7e7e]",
                                children: "Fees :\xa0",
                              }),
                              (0, l.jsx)("div", {
                                children: (
                                  null == e
                                    ? void 0
                                    : null === (a = e.fees) || void 0 === a
                                    ? void 0
                                    : a.length
                                )
                                  ? e.fees.map((e, a) =>
                                      (0, l.jsx)(
                                        "div",
                                        {
                                          className: n().holdersRewardsDesc,
                                          children: (0, l.jsxs)("span", {
                                            className: "text-sm text-white",
                                            children: [
                                              (0, m.Xh)(
                                                (0, v.b)(
                                                  (null == e
                                                    ? void 0
                                                    : e.amount) || 0,
                                                  Number(e.decimals)
                                                ),
                                                4,
                                                !0
                                              ),
                                              " ",
                                              e.symbol,
                                              " ",
                                            ],
                                          }),
                                        },
                                        a
                                      )
                                    )
                                  : (0, l.jsx)("span", {
                                      className: "text-sm text-white",
                                      children: "0.00",
                                    }),
                              }),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: n().holdersRewardsTitle,
                            children: [
                              (0, l.jsx)("span", {
                                className: "text-[#7e7e7e]",
                                children: "Incentive :\xa0",
                              }),
                              (0, l.jsx)("div", {
                                children: (
                                  null == e
                                    ? void 0
                                    : null === (s = e.bribes) || void 0 === s
                                    ? void 0
                                    : s.length
                                )
                                  ? e.bribes.map((e, a) =>
                                      (0, l.jsx)(
                                        "div",
                                        {
                                          className: n().holdersRewardsDesc,
                                          children: (0, l.jsxs)("span", {
                                            className: "text-sm text-white",
                                            children: [
                                              (0, m.Xh)(
                                                (0, v.b)(
                                                  (null == e
                                                    ? void 0
                                                    : e.amount) || 0,
                                                  Number(e.decimals)
                                                ),
                                                4,
                                                !0
                                              ),
                                              " ",
                                              e.symbol,
                                              " ",
                                            ],
                                          }),
                                        },
                                        a
                                      )
                                    )
                                  : (0, l.jsx)("span", {
                                      className: "text-sm text-white",
                                      children: "0.00",
                                    }),
                              }),
                            ],
                          }),
                        ],
                      });
                    },
              },
              {
                title: "Rebase",
                key: "Rebase",
                width: "17%",
                titleHover: (0, l.jsxs)("div", {
                  children: [
                    "If you abstain from voting, the rebase",
                    (0, l.jsx)("br", {}),
                    "  reward will be decreased by 20-25%.",
                  ],
                }),
                dataIndex: "",
                render: (e) => {
                  var a;
                  return r
                    ? (0, l.jsx)("div", {
                        className: "text-left",
                        children: (0, l.jsx)("span", {
                          className: "loading loading-bars loading-sm",
                        }),
                      })
                    : null != e && e.veDist && e.veDist.length
                    ? (0, l.jsx)("div", {
                        className: "flex flex-col",
                        children:
                          null === (a = e.veDist) || void 0 === a
                            ? void 0
                            : a.map((e, a) =>
                                (0, l.jsx)(
                                  "div",
                                  {
                                    className: "flex flex-col",
                                    children: (0, l.jsxs)("span", {
                                      children: [
                                        (0, m.Xh)(e.earned, 4, !0),
                                        " ",
                                        (0, l.jsx)("span", {
                                          className: "text-[#7e7e7e]",
                                          children: "LOXO",
                                        }),
                                        " ",
                                      ],
                                    }),
                                  },
                                  a
                                )
                              ),
                      })
                    : (0, l.jsxs)("span", {
                        children: [
                          " 0 ",
                          (0, l.jsx)("span", {
                            className: "text-[#7e7e7e]",
                            children: "LOXO",
                          }),
                          " ",
                        ],
                      });
                },
              },
              {
                title: "Perp Rewards",
                key: "Perp",
                width: "17%",
                dataIndex: "",
                preSymbol: r ? "" : "$",
                render: (e) =>
                  r
                    ? (0, l.jsx)("div", {
                        className: "text-left",
                        children: (0, l.jsx)("span", {
                          className: "loading loading-bars loading-sm",
                        }),
                      })
                    : I((null == e ? void 0 : e.perpRewards) || []).tokenSum,
                tooltip: r
                  ? void 0
                  : (e) => {
                      var a;
                      return (0, l.jsx)("div", {
                        className: "flex flex-col",
                        children:
                          null ===
                            (a = I(
                              (null == e ? void 0 : e.perpRewards) || []
                            )) || void 0 === a
                            ? void 0
                            : a.tokenRecord.map((e, a) =>
                                (0, l.jsxs)(
                                  "div",
                                  {
                                    children: [
                                      (0, l.jsx)("span", {
                                        children: e.tokenNum,
                                      }),
                                      (0, l.jsx)("span", {
                                        className: "ml-2",
                                        children: e.symbol,
                                      }),
                                    ],
                                  },
                                  "wd" + a
                                )
                              ),
                      });
                    },
              },
              {
                title: "Actions",
                dataIndex: "",
                key: "operation",
                width: "22%",
                align: "right",
                render: (e, a, s) =>
                  (0, l.jsxs)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children: [
                      (0, l.jsx)("button", {
                        disabled: e.account_gauge_earned === BigInt(0),
                        onClick: () => f.push("/lock?openManage=".concat(e.id)),
                        className: "offButton",
                        children: "Manage",
                      }),
                      (0, l.jsx)(i.Z, {
                        position: "left-top",
                        handle: (0, l.jsx)("button", {
                          disabled: !0,
                          className: "offButton",
                          children: "Vote",
                        }),
                        renderContent: () =>
                          (0, l.jsx)("span", {
                            className: "text-left",
                            children: "Coming Soon",
                          }),
                      }),
                      (0, l.jsx)("button", {
                        disabled: X(e.rewardList) && (0, m.D_)(e.perpRewards),
                        onClick: () => {
                          C(e.rewardList, e.id, e.perpRewards), B(!0);
                        },
                        className: "offButton",
                        children: "Claim",
                      }),
                    ],
                  }),
              },
            ];
          return s && w
            ? (0, l.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, l.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, l.jsxs)("div", {
                className: n().container,
                children: [
                  (0, l.jsx)("div", {
                    className: n().tableTitle,
                    children: "veLOXO Holders & Voters Rewards",
                  }),
                  (0, l.jsx)("div", {
                    className: n().tableArea,
                    children:
                      w && a && a.length
                        ? (0, l.jsxs)(l.Fragment, {
                            children: [
                              (0, l.jsx)(d.Z, {
                                hairstyle: "white",
                                columns: Z,
                                dataSource: a,
                              }),
                              h &&
                                (0, l.jsx)("div", {
                                  onClick: () => {
                                    load();
                                  },
                                  className:
                                    "transition-transform duration-300 cursor-pointer absolute -bottom-[11px] z-10 left-[49%] w-[24px] h-[24px] rounded-full bg-[#353535] flex flex-row justify-center items-center",
                                  children: u
                                    ? (0, l.jsx)(p.yM, {})
                                    : (0, l.jsx)(p.un, {
                                        color: "#fff",
                                        width: "13",
                                        height: "8",
                                      }),
                                }),
                            ],
                          })
                        : (0, l.jsxs)("div", {
                            className: n().nodataArea,
                            children: [
                              "You don’t have veLOXO yet, please ",
                              (0, l.jsx)(c(), {
                                className: "text-[#2BDFB4] px-1",
                                href: "/lock",
                                children: "Create a Lock",
                              }),
                              " first.",
                            ],
                          }),
                  }),
                  (0, l.jsx)(k.Z, {
                    id: "ClaimAll",
                    className: "w-full flex flex-row-reverse",
                    open: O,
                    children: (0, l.jsx)(S.Z, {
                      title: "Claim for veLOXO ".concat(y),
                      updateModal: () => {
                        B(!1);
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
                                    children: "Claim fees ",
                                  }),
                                  D
                                    ? (0, l.jsx)(p.yM, {})
                                    : N
                                    ? (0, l.jsx)(p.Uc, {})
                                    : (0, l.jsx)(p.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Claim bribes",
                                  }),
                                  F
                                    ? (0, l.jsx)(p.yM, {})
                                    : N
                                    ? (0, l.jsx)(p.Uc, {})
                                    : (0, l.jsx)(p.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Claim rebase",
                                  }),
                                  T
                                    ? (0, l.jsx)(p.yM, {})
                                    : N
                                    ? (0, l.jsx)(p.Uc, {})
                                    : (0, l.jsx)(p.NO, {}),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, l.jsx)("span", {
                                    children: "Claim perp rewards",
                                  }),
                                  L
                                    ? (0, l.jsx)(p.yM, {})
                                    : N
                                    ? (0, l.jsx)(p.Uc, {})
                                    : (0, l.jsx)(p.NO, {}),
                                ],
                              }),
                            ],
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              });
        },
        Holders_Card = (e) => {
          let {
              dataSource: a,
              loading: s = !1,
              rewardLoading: t,
              loadMore: r,
              moreLoading: d,
              hasMore: o,
            } = e,
            { address: u } = (0, g.m)(),
            h = (0, x.useRouter)(),
            {
              txError: f,
              tokenId: b,
              handleClaimAllRewards: j,
              IsLoadingClaimfees: N,
              IsLoadingClaimBribes: _,
              IsLoadingClaimVe: y,
              open: R,
              getRecord: C,
              checkEmptyArraysInElements: D,
              getPerpData: F,
              IsLoadingClaimPerp: T,
              setOpen: O,
              getSum: L,
            } = useHolders(),
            load = () => {
              o && r();
            };
          return (0, l.jsxs)("div", {
            className: n().container,
            children: [
              s && u
                ? (0, l.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, l.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, l.jsxs)("div", {
                    className: n().tableArea,
                    children: [
                      u && a && a.length
                        ? null == a
                          ? void 0
                          : a.map((e, a) => {
                              let s = [
                                  {
                                    title: "Rebase",
                                    value: "",
                                    key: "Rebase",
                                    titleHover: (0, l.jsxs)("div", {
                                      className: "text-center",
                                      children: [
                                        "If you abstain from voting, the rebase",
                                        (0, l.jsx)("br", {}),
                                        " reward will be decreased by 20-25%.",
                                      ],
                                    }),
                                    render: () => {
                                      var a;
                                      return t
                                        ? (0, l.jsx)("div", {
                                            className: "text-left",
                                            children: (0, l.jsx)("span", {
                                              className:
                                                "loading loading-bars loading-sm",
                                            }),
                                          })
                                        : e.veDist && e.veDist.length
                                        ? (0, l.jsx)("div", {
                                            className: "flex flex-col",
                                            children:
                                              null == e
                                                ? void 0
                                                : null === (a = e.veDist) ||
                                                  void 0 === a
                                                ? void 0
                                                : a.map((e, a) =>
                                                    (0, l.jsx)(
                                                      "div",
                                                      {
                                                        className:
                                                          "flex flex-col",
                                                        children: (0, l.jsxs)(
                                                          "span",
                                                          {
                                                            children: [
                                                              (0, m.Xh)(
                                                                e.earned,
                                                                4,
                                                                !0
                                                              ),
                                                              " ",
                                                              (0, l.jsx)(
                                                                "span",
                                                                {
                                                                  className:
                                                                    "text-[#7e7e7e]",
                                                                  children:
                                                                    "LOXO",
                                                                }
                                                              ),
                                                              " ",
                                                            ],
                                                          }
                                                        ),
                                                      },
                                                      a
                                                    )
                                                  ),
                                          })
                                        : (0, l.jsxs)("span", {
                                            children: [
                                              " 0 ",
                                              (0, l.jsx)("span", {
                                                className: "text-[#7e7e7e]",
                                                children: "LOXO",
                                              }),
                                              " ",
                                            ],
                                          });
                                    },
                                  },
                                  {
                                    title: "Vote Rewards",
                                    value: "",
                                    key: "YouEarned",
                                    render: () =>
                                      t
                                        ? (0, l.jsx)("div", {
                                            className: "text-left",
                                            children: (0, l.jsx)("span", {
                                              className:
                                                "loading loading-bars loading-sm",
                                            }),
                                          })
                                        : C(L(e), e),
                                    tooltip: t
                                      ? void 0
                                      : (a) => {
                                          var s, t;
                                          return (0, l.jsxs)("div", {
                                            className: "flex flex-col",
                                            children: [
                                              (0, l.jsxs)("div", {
                                                className:
                                                  n().holdersRewardsTitle,
                                                children: [
                                                  (0, l.jsx)("span", {
                                                    className: "text-[#7e7e7e]",
                                                    children: "Fees :\xa0",
                                                  }),
                                                  (0, l.jsx)("div", {
                                                    children: (
                                                      null == e
                                                        ? void 0
                                                        : null ===
                                                            (s = e.fees) ||
                                                          void 0 === s
                                                        ? void 0
                                                        : s.length
                                                    )
                                                      ? e.fees.map((e, a) =>
                                                          (0, l.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                n()
                                                                  .holdersRewardsDesc,
                                                              children: (0,
                                                              l.jsxs)("span", {
                                                                className:
                                                                  "text-sm text-white",
                                                                children: [
                                                                  (0, m.Xh)(
                                                                    (0, v.b)(
                                                                      e.amount,
                                                                      Number(
                                                                        e.decimals
                                                                      )
                                                                    ),
                                                                    4,
                                                                    !0
                                                                  ),
                                                                  " ",
                                                                  e.symbol,
                                                                  " ",
                                                                ],
                                                              }),
                                                            },
                                                            a
                                                          )
                                                        )
                                                      : (0, l.jsx)("span", {
                                                          className:
                                                            "ml-1 text-sm text-white",
                                                          children: "0.00",
                                                        }),
                                                  }),
                                                ],
                                              }),
                                              (0, l.jsxs)("div", {
                                                className:
                                                  n().holdersRewardsTitle,
                                                children: [
                                                  (0, l.jsx)("span", {
                                                    className: "text-[#7e7e7e]",
                                                    children: "Incentive :\xa0",
                                                  }),
                                                  (0, l.jsx)("div", {
                                                    children: (
                                                      null == e
                                                        ? void 0
                                                        : null ===
                                                            (t = e.bribes) ||
                                                          void 0 === t
                                                        ? void 0
                                                        : t.length
                                                    )
                                                      ? e.bribes.map((e, a) =>
                                                          (0, l.jsx)(
                                                            "div",
                                                            {
                                                              className:
                                                                n()
                                                                  .holdersRewardsDesc,
                                                              children: (0,
                                                              l.jsxs)("span", {
                                                                className:
                                                                  "text-sm text-white",
                                                                children: [
                                                                  (0, m.Xh)(
                                                                    (0, v.b)(
                                                                      e.amount,
                                                                      Number(
                                                                        e.decimals
                                                                      )
                                                                    ),
                                                                    4,
                                                                    !0
                                                                  ),
                                                                  " ",
                                                                  e.symbol,
                                                                  " ",
                                                                ],
                                                              }),
                                                            },
                                                            a
                                                          )
                                                        )
                                                      : (0, l.jsx)("span", {
                                                          className:
                                                            "ml-1 text-sm text-white",
                                                          children: "0.00",
                                                        }),
                                                  }),
                                                ],
                                              }),
                                            ],
                                          });
                                        },
                                  },
                                  {
                                    title: "Perp Rewards",
                                    key: "Perp",
                                    value: "",
                                    preSymbol: t ? "" : "$",
                                    render: () =>
                                      t
                                        ? (0, l.jsx)("div", {
                                            className: "text-left",
                                            children: (0, l.jsx)("span", {
                                              className:
                                                "loading loading-bars loading-sm",
                                            }),
                                          })
                                        : F(
                                            (null == e
                                              ? void 0
                                              : e.perpRewards) || []
                                          ).tokenSum,
                                    tooltip: t
                                      ? void 0
                                      : () => {
                                          var a;
                                          return (0, l.jsx)("div", {
                                            className: "flex flex-col",
                                            children:
                                              null ===
                                                (a = F(
                                                  (null == e
                                                    ? void 0
                                                    : e.perpRewards) || []
                                                )) || void 0 === a
                                                ? void 0
                                                : a.tokenRecord.map((e, a) =>
                                                    (0, l.jsxs)(
                                                      "div",
                                                      {
                                                        children: [
                                                          (0, l.jsx)("span", {
                                                            children:
                                                              e.tokenNum,
                                                          }),
                                                          (0, l.jsx)("span", {
                                                            className: "ml-2",
                                                            children: e.symbol,
                                                          }),
                                                        ],
                                                      },
                                                      "wd" + a
                                                    )
                                                  ),
                                          });
                                        },
                                  },
                                ],
                                r = (0, l.jsxs)("div", {
                                  className: "w-full flex justify-between",
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "flex-1",
                                      style: { marginRight: "7px" },
                                      children: (0, l.jsx)("button", {
                                        disabled:
                                          e.account_gauge_earned === BigInt(0),
                                        onClick: () => h.push("/lock"),
                                        className: "offButton",
                                        style: { width: "100%" },
                                        children: "Manage",
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "flex-1",
                                      style: { margin: "0 7px" },
                                      children: (0, l.jsx)(i.Z, {
                                        className: "w-full z-100",
                                        handleClassName: "w-full",
                                        position: "left-top",
                                        handle: (0, l.jsx)("button", {
                                          disabled: !0,
                                          className: "w-full offButton",
                                          children: "Vote",
                                        }),
                                        renderContent: () =>
                                          (0, l.jsx)("div", {
                                            className: "text-center",
                                            children: "Coming Soon",
                                          }),
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "flex-1",
                                      style: { marginLeft: "7px" },
                                      children: (0, l.jsx)("button", {
                                        disabled:
                                          D(e.rewardList) &&
                                          (0, m.D_)(e.perpRewards),
                                        onClick: () => {
                                          j(e.rewardList, e.id, e.perpRewards),
                                            O(!0);
                                        },
                                        className: "offButton",
                                        style: { width: "100%" },
                                        children: "Claim",
                                      }),
                                    }),
                                  ],
                                });
                              return (0, l.jsx)(
                                w.Z,
                                {
                                  footer: r,
                                  columns: s,
                                  asymmetrical: !0,
                                  titleImg: "/static/images/zohal.png",
                                  name: "ve".concat(e.tokenSymbol),
                                  detail: "# ".concat(e.id.toString()),
                                },
                                a
                              );
                            })
                        : (0, l.jsxs)("div", {
                            className: n().nodataCard,
                            children: [
                              "You don’t have veLOXO yet, please ",
                              (0, l.jsx)(c(), {
                                className: "text-[#2BDFB4] px-1",
                                href: "/lock",
                                children: "Create a Lock",
                              }),
                              " first.",
                            ],
                          }),
                      u
                        ? o &&
                          (0, l.jsx)("div", {
                            className:
                              "text-center flex items-center justify-center mt-10",
                            children: (0, l.jsx)("div", {
                              onClick: () => {
                                load();
                              },
                              className:
                                "transition-transform duration-300 cursor-pointer rounded-[6px] px-4 py-2 bg-[#353535] border border-black border-solid flex flex-row justify-center items-center",
                              children: d
                                ? (0, l.jsx)(p.yM, {})
                                : (0, l.jsx)("span", {
                                    className: "text-xs",
                                    children: "Load More",
                                  }),
                            }),
                          })
                        : null,
                    ],
                  }),
              (0, l.jsx)(k.Z, {
                id: "ClaimAll",
                className: "w-full flex flex-row-reverse",
                open: R,
                children: (0, l.jsx)(S.Z, {
                  title: "Claim for veLOXO ".concat(b),
                  updateModal: () => {
                    O(!1);
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
                              (0, l.jsx)("span", { children: "Claim fees " }),
                              N
                                ? (0, l.jsx)(p.yM, {})
                                : f
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, l.jsx)("span", {
                                children: "Claim incentives",
                              }),
                              _
                                ? (0, l.jsx)(p.yM, {})
                                : f
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, l.jsx)("span", { children: "Claim Rebase" }),
                              y
                                ? (0, l.jsx)(p.yM, {})
                                : f
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                          (0, l.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, l.jsx)("span", {
                                children: "Claim perp rewards",
                              }),
                              T
                                ? (0, l.jsx)(p.yM, {})
                                : f
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                        ],
                      }),
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        C = s(23751),
        Stakers = (e) => {
          let {
              balanceOf: a,
              stakedTokenIds: s,
              menu: r,
              totalRewards: o,
              perpRewards: u,
            } = e,
            [f, v] = (0, t.useState)(!1),
            {
              address: w,
              balances: g,
              claim: N,
              claimPerpLoxoRewards: _,
            } = (0, b.useDashboard)(),
            [y, k] = (0, t.useState)(!1),
            [R, D] = (0, t.useState)(!1),
            [F, T] = (0, t.useState)(""),
            [O, L] = (0, t.useState)(!1),
            [I, X] = (0, t.useState)(!1),
            B = (0, x.useRouter)(),
            A = (0, h.useToastError)(),
            E = (0, h.useToastSuccess)();
          async function claimHandler() {
            if (!I)
              try {
                if ((L(!1), X(!0), w)) {
                  T("loading"), k(!0), D(!0);
                  let e = "",
                    a = "";
                  if ((o[0] && Number(o[0])) || (o[1] && Number(o[1]))) {
                    let a = await N();
                    if (!a) throw Error("Failed to claim ve33 rewards");
                    e = a;
                  }
                  if ((k(!1), !(0, m.y_)(null == u ? void 0 : u.tokenRecord))) {
                    let e = await _();
                    if (!e) throw Error("Failed to claim perp rewards");
                    a = e;
                  }
                  D(!1),
                    E(
                      "Claim Successfully",
                      "Claim reward for LOXONFT stakers",
                      1,
                      a || e
                    ),
                    setTimeout(() => {
                      v(!1);
                    }, 5e3);
                }
              } catch (e) {
                A(e),
                  k(!1),
                  D(!1),
                  L(!0),
                  T("rejected"),
                  setTimeout(() => {
                    v(!1);
                  }, 5e3);
              } finally {
                X(!1);
              }
          }
          let getRewards = () => {
              let e = (0, j.d)(o[0] || BigInt(0)),
                a = (0, j.d)(o[1] || BigInt(0)),
                s = (0, m.bp)(g, "IOTX", e, "LOXO", a);
              return Number(e) + Number(a) === 0 || Number(s)
                ? (0, m.pw)(s)
                : "<0.01";
            },
            M = [
              {
                title: "Total Staked",
                key: "TotalStaked",
                width: "26%",
                dataIndex: "balanceOf",
                unit: "OmnixNFT",
                render: (e) => (e.balanceOf ? e.balanceOf.toString() : "0"),
              },
              {
                title: "My Stake",
                key: "MyStaked",
                width: "17%",
                dataIndex: "stakedTokenIds",
                render: (e) =>
                  e.stakedTokenIds
                    ? "".concat(e.stakedTokenIds.length, " LOXONFT")
                    : "--",
              },
              {
                title: "ve33 Rewards",
                titleHover: (0, l.jsxs)("div", {
                  className: "text-[12px] font-normal text-white leading-6",
                  children: [
                    "Total LOXO emissions earned from staking LOXONFT. ",
                    (0, l.jsx)("br", {}),
                    "Please claim within two epochs, otherwise it will be burned.",
                  ],
                }),
                key: "TotalRewards",
                width: "17%",
                dataIndex: "",
                tooltip: () =>
                  (0, l.jsxs)(l.Fragment, {
                    children: [
                      (0, l.jsxs)("div", {
                        children: [(0, m.Xh)((0, j.d)(o[0]), 4, !0), " WIOTX"],
                      }),
                      (0, l.jsxs)("div", {
                        children: [(0, m.Xh)((0, j.d)(o[1]), 4, !0), " LOXO"],
                      }),
                    ],
                  }),
                render: () =>
                  (0, l.jsxs)("span", {
                    className: n().content_stake,
                    children: [" $ ", getRewards()],
                  }),
              },
              {
                title: "Perp Rewards",
                key: "PerpRewards",
                width: "17%",
                dataIndex: "",
                tooltip: (e) => {
                  var a;
                  return (0, l.jsx)("div", {
                    className: "flex flex-col",
                    children:
                      null === (a = e.perpRewards.tokenRecord) || void 0 === a
                        ? void 0
                        : a.map((e, a) =>
                            (0, l.jsxs)(
                              "div",
                              {
                                children: [
                                  (0, l.jsx)("span", { children: e.tokenNum }),
                                  (0, l.jsx)("span", {
                                    className: "ml-2",
                                    children: e.symbol,
                                  }),
                                ],
                              },
                              "wd" + a
                            )
                          ),
                  });
                },
                render: (e) => {
                  var a;
                  return (0, l.jsxs)("span", {
                    className: n().content_stake,
                    children: [
                      "$ ",
                      null == e
                        ? void 0
                        : null === (a = e.perpRewards) || void 0 === a
                        ? void 0
                        : a.tokenSum,
                    ],
                  });
                },
              },
              {
                title: "Actions",
                dataIndex: "",
                width: "22%",
                key: "operation",
                align: "right",
                render: (e, a, s) =>
                  (0, l.jsxs)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children: [
                      (0, l.jsx)("button", {
                        onClick: () => B.push("/LOXONFT?openManage=1"),
                        className: "offButton",
                        children: "Stake",
                      }),
                      (0, l.jsx)("div", {
                        className: "flex flex-row md:text-right",
                        children: (0, l.jsxs)(C.Z, {
                          id: "split",
                          open: f,
                          children: [
                            (0, l.jsxs)("button", {
                              disabled:
                                !o[0] &&
                                !o[1] &&
                                (0, m.y_)(null == u ? void 0 : u.tokenRecord),
                              onClick: () => {
                                v(!0), claimHandler();
                              },
                              className: "offButton",
                              children: [I && (0, l.jsx)(p.yM, {}), " Claim"],
                            }),
                            (0, l.jsx)(S.Z, {
                              title: "Claim",
                              updateModal: () => {
                                v(!1);
                              },
                              children: (0, l.jsx)("div", {
                                className: "flex p-3 flex-wrap w-full",
                                children: (0, l.jsxs)(l.Fragment, {
                                  children: [
                                    (0, l.jsx)("div", {
                                      className: "w-full flex flex-wrap  ",
                                      children: (0, l.jsxs)("div", {
                                        className: "popupItem",
                                        children: [
                                          (0, l.jsx)("span", {
                                            children: "Claim ve33 rewards ",
                                          }),
                                          y
                                            ? (0, l.jsx)(p.yM, {})
                                            : O
                                            ? (0, l.jsx)(p.Uc, {})
                                            : (0, l.jsx)(p.NO, {}),
                                        ],
                                      }),
                                    }),
                                    (0, l.jsx)("div", {
                                      className: "w-full flex flex-wrap  ",
                                      children: (0, l.jsxs)("div", {
                                        className: "popupItem",
                                        children: [
                                          (0, l.jsx)("span", {
                                            children: "Claim perp rewards ",
                                          }),
                                          R
                                            ? (0, l.jsx)(p.yM, {})
                                            : O
                                            ? (0, l.jsx)(p.Uc, {})
                                            : (0, l.jsx)(p.NO, {}),
                                        ],
                                      }),
                                    }),
                                  ],
                                }),
                              }),
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
              },
            ];
          return (0, l.jsxs)("div", {
            className: n().container,
            children: [
              (0, l.jsxs)("div", {
                className: n().tableTitle,
                children: [
                  (0, l.jsx)("span", { children: "OmnixNFT Stakers Rewards" }),
                  (0, l.jsxs)("span", {
                    className: "ml-2",
                    children: [
                      "".concat(r),
                      (0, l.jsx)("span", {
                        className: "text-[#7e7e7e]",
                        children: "/24",
                      }),
                    ],
                  }),
                  (0, l.jsx)(i.Z, {
                    position: "bottom",
                    className: "ml-2 z-100",
                    handle: (0, l.jsx)(p.EG, {}),
                    renderContent: () =>
                      (0, l.jsxs)("span", {
                        className:
                          "text-[12px] font-normal text-white leading-6",
                        children: [
                          "OmnixNFT staker rewards: 24 epochs. 50% LOXO",
                          (0, l.jsx)("br", {}),
                          " direct to wallet, 50% locked as veLOXO for 2 years.",
                        ],
                      }),
                  }),
                ],
              }),
              (0, l.jsx)("div", {
                className: n().tableArea,
                children:
                  w && (a || s)
                    ? (0, l.jsx)(d.Z, {
                        hairstyle: "white",
                        columns: M,
                        type: "collapsed",
                        dataSource: [
                          { balanceOf: a, stakedTokenIds: s, perpRewards: u },
                        ],
                      })
                    : (0, l.jsxs)("div", {
                        className: n().nodataArea,
                        children: [
                          "You haven't staked any LOXONFT yet, go ",
                          (0, l.jsx)(c(), {
                            className: "text-[#2BDFB4] px-1",
                            href: "/LOXONFT",
                            children: "Stake LOXONFT",
                          }),
                          " to earn daily emissions.",
                        ],
                      }),
              }),
            ],
          });
        },
        StakersCard = (e) => {
          let { dataSource: a } = e,
            { address: s } = (0, g.m)(),
            r = (0, x.useRouter)(),
            i = (0, h.useToastError)(),
            d = (0, h.useToastSuccess)(),
            {
              balances: o,
              isLoading: u,
              claim: f,
              claimPerpLoxoRewards: v,
            } = (0, b.useDashboard)(),
            [N, _] = (0, t.useState)(!1),
            [y, R] = (0, t.useState)(),
            [C, D] = (0, t.useState)(!1),
            [F, T] = (0, t.useState)(""),
            [O, L] = (0, t.useState)(""),
            [I, X] = (0, t.useState)(!1),
            [B, A] = (0, t.useState)(""),
            [E, M] = (0, t.useState)(!1),
            [P, Z] = (0, t.useState)(!1);
          async function claimHandler() {
            if (!P)
              try {
                if ((M(!1), Z(!0), s)) {
                  var e, l, t, r, n, o;
                  L("loading"), _(!0), X(!0);
                  let s = "",
                    i = "";
                  if (
                    ((null == a
                      ? void 0
                      : null === (e = a[0]) || void 0 === e
                      ? void 0
                      : e.pendingReward[0]) &&
                      Number(
                        (null == a
                          ? void 0
                          : null === (l = a[0]) || void 0 === l
                          ? void 0
                          : l.pendingReward[0]) || 0
                      )) ||
                    ((null == a
                      ? void 0
                      : null === (t = a[0]) || void 0 === t
                      ? void 0
                      : t.pendingReward[1]) &&
                      Number(
                        (null == a
                          ? void 0
                          : null === (r = a[0]) || void 0 === r
                          ? void 0
                          : r.pendingReward[1]) || 0
                      ))
                  ) {
                    let e = await f();
                    if (!e) throw Error("Failed to claim ve33 rewards");
                    s = e;
                  }
                  if (
                    (_(!1),
                    !(0, m.y_)(
                      null == a
                        ? void 0
                        : null === (o = a[0]) || void 0 === o
                        ? void 0
                        : null === (n = o.perpRewards) || void 0 === n
                        ? void 0
                        : n.tokenRecord
                    ))
                  ) {
                    let e = await v();
                    if (!e) throw Error("Failed to claim perp rewards");
                    i = e;
                  }
                  X(!1),
                    d(
                      "Claim Successfully",
                      "Claim reward for LOXONFT stakers",
                      1,
                      i || s
                    ),
                    setTimeout(() => {
                      D(!1);
                    }, 5e3);
                }
              } catch (e) {
                i(e),
                  _(!1),
                  X(!1),
                  M(!0),
                  L("rejected"),
                  setTimeout(() => {
                    D(!1);
                  }, 5e3);
              } finally {
                Z(!1);
              }
          }
          let getRewards = (e) => {
            let a = (0, j.d)(e.pendingReward[0]),
              s = (0, j.d)(e.pendingReward[1]),
              l = (0, m.bp)(o, "IOTX", a, "LOXO", s);
            return Number(a) + Number(s) === 0 || Number(l)
              ? (0, m.pw)(l)
              : "<0.01";
          };
          return (0, l.jsxs)("div", {
            className: n().container,
            children: [
              (0, l.jsx)("div", {
                className: n().tableArea,
                children:
                  a && a.length
                    ? a.map((e, a) => {
                        var s, t;
                        let n = [
                            {
                              title: "Total Staked",
                              value: e.balanceOf ? e.balanceOf.toString() : "0",
                              key: "TotalStaked",
                              unit: "OmnixNFT",
                            },
                            {
                              title: "My Stake",
                              value: e.stakedTokenIds
                                ? "".concat(e.stakedTokenIds.length, " LOXONFT")
                                : "--",
                              key: "MyStaked",
                            },
                            {
                              title: "ve33 Rewards",
                              titleHover: (0, l.jsx)("div", {
                                className: "text-center",
                                children:
                                  "Total LOXO emissions earned from staking LOXONFT.Please claim within two epochs, otherwise it will be burned.",
                              }),
                              value: getRewards(e),
                              key: "TotalRewards",
                              preSymbol: "$",
                              tooltip: () =>
                                (0, l.jsxs)("div", {
                                  className: "flex flex-col items-center",
                                  children: [
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, m.Xh)(
                                          (0, j.d)(e.pendingReward[0]),
                                          4,
                                          !0
                                        ),
                                        " WIOTX",
                                      ],
                                    }),
                                    (0, l.jsxs)("div", {
                                      children: [
                                        (0, m.Xh)(
                                          (0, j.d)(e.pendingReward[1]),
                                          4,
                                          !0
                                        ),
                                        " LOXO",
                                      ],
                                    }),
                                  ],
                                }),
                            },
                            {
                              title: "Perp Rewards",
                              value:
                                (null == e
                                  ? void 0
                                  : null === (s = e.perpRewards) || void 0 === s
                                  ? void 0
                                  : s.tokenSum) || 0,
                              key: "perpRewards",
                              preSymbol: "$",
                              tooltip: () => {
                                var a;
                                return (0, l.jsx)("div", {
                                  className: "flex flex-col",
                                  children:
                                    null === (a = e.perpRewards.tokenRecord) ||
                                    void 0 === a
                                      ? void 0
                                      : a.map((e, a) =>
                                          (0, l.jsxs)(
                                            "div",
                                            {
                                              children: [
                                                (0, l.jsx)("span", {
                                                  children: e.tokenNum,
                                                }),
                                                (0, l.jsx)("span", {
                                                  className: "ml-2",
                                                  children: e.symbol,
                                                }),
                                              ],
                                            },
                                            "wd" + a
                                          )
                                        ),
                                });
                              },
                            },
                          ],
                          i = (0, l.jsxs)("div", {
                            className:
                              "w-full flex flex-row justify-between flex-wrap gap-2.5",
                            children: [
                              (0, l.jsx)("button", {
                                onClick: () => r.push("/LOXONFT?openManage=1"),
                                className: "offButton w-[calc(50%-7px)]",
                                children: "Stake",
                              }),
                              (0, l.jsxs)("button", {
                                disabled:
                                  !e.pendingReward[0] &&
                                  !e.pendingReward[1] &&
                                  (0, m.y_)(
                                    null === (t = e.perpRewards) || void 0 === t
                                      ? void 0
                                      : t.tokenRecord
                                  ),
                                onClick: () => {
                                  D(!0), claimHandler();
                                },
                                className: "offButton w-[calc(50%-7px)]",
                                children: [P && (0, l.jsx)(p.yM, {}), " Claim"],
                              }),
                            ],
                          });
                        return (0, l.jsx)(
                          w.Z,
                          {
                            footer: i,
                            columns: n,
                            asymmetrical: !0,
                            noTitle: !0,
                          },
                          a
                        );
                      })
                    : (0, l.jsxs)("div", {
                        className: n().nodataCard,
                        children: [
                          "You haven't staked any LOXONFT yet, go ",
                          (0, l.jsx)(c(), {
                            className: "text-[#2BDFB4] px-1",
                            href: "/LOXONFT",
                            children: "Stake LOXONFT",
                          }),
                          " to earn daily emissions.",
                        ],
                      }),
              }),
              (0, l.jsx)(k.Z, {
                id: "split",
                open: C,
                className: "w-full",
                children: (0, l.jsx)(S.Z, {
                  title: "Claim",
                  updateModal: () => {
                    D(!1);
                  },
                  children: (0, l.jsx)("div", {
                    className: "flex p-3 flex-wrap w-full",
                    children: (0, l.jsxs)(l.Fragment, {
                      children: [
                        (0, l.jsx)("div", {
                          className: "w-full flex flex-wrap  ",
                          children: (0, l.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, l.jsx)("span", {
                                children: "Claim ve33 rewards ",
                              }),
                              N
                                ? (0, l.jsx)(p.yM, {})
                                : E
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                        }),
                        (0, l.jsx)("div", {
                          className: "w-full flex flex-wrap  ",
                          children: (0, l.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, l.jsx)("span", {
                                children: "Claim perp rewards ",
                              }),
                              I
                                ? (0, l.jsx)(p.yM, {})
                                : E
                                ? (0, l.jsx)(p.Uc, {})
                                : (0, l.jsx)(p.NO, {}),
                            ],
                          }),
                        }),
                      ],
                    }),
                  }),
                }),
              }),
            ],
          });
        },
        D = s(15051),
        views_Dashboard = () => {
          let e = [
              { title: "Gauge Farming Rewards", id: 0 },
              { title: "veLOXO Holders & Voters Rewards", id: 1 },
              { title: "OmnixNFT Stakers Rewards", id: 3 },
            ],
            {
              address: a,
              getRewardBalances: s,
              fetchVeDistEarned: r,
              period: d,
              prices: o,
              VeNFTBalance: c,
              getVoteData: u,
              balances: x,
              isHoldersLoading: h,
              fetchDiamond: f,
              entirePairs: w,
              balanceOf: N,
              StakedTokenIds: _,
              pendingReward: y,
              earnedList: k,
              fetchData: S,
              init: R,
            } = (0, b.useDashboard)(),
            { chain: C } = (0, g.m)(),
            [F, T] = (0, t.useState)([]),
            O = (0, t.useRef)(),
            [L, I] = (0, t.useState)(e[0]),
            [X, B] = (0, t.useState)({
              1: { bribes: [], fees: [], rewards: [], veDist: [] },
            }),
            [A, E] = (0, t.useState)(!1),
            [M, P] = (0, t.useState)(!1),
            [Z, G] = (0, t.useState)([]),
            [U, H] = (0, t.useState)([]),
            [Y, z] = (0, t.useState)(!0),
            [$, V] = (0, t.useState)(0),
            [q, J] = (0, t.useState)(!1),
            W = (0, t.useRef)(4),
            [K, Q] = (0, t.useState)({ tokenRecord: [], tokenSum: "-" }),
            [ee, ea] = (0, t.useState)(0),
            es = (0, t.useMemo)(() => {
              let e = D.vn[(null == C ? void 0 : C.id) === 4689 ? C.id : 4689];
              return d && e && D.gE, 0;
            }, [C, d]);
          (0, t.useEffect)(() => {
            a || T([]);
          }, [a]),
            (0, t.useEffect)(() => {
              a || T([]);
            }, [a]),
            (0, t.useEffect)(() => {
              R && P(!1);
            }, [k, R]),
            (0, t.useEffect)(() => {
              a
                ? H([
                    {
                      balanceOf: N || 0,
                      stakedTokenIds: _ || 0,
                      pendingReward: y || 0,
                      perpRewards: K || {},
                    },
                  ])
                : H([]);
            }, [N, _, y, a, K]),
            (0, t.useEffect)(() => {
              let handleClickOutside = (e) => {
                O.current &&
                  !O.current.contains(e.target) &&
                  O.current.removeAttribute("open");
              };
              return (
                document.addEventListener("click", handleClickOutside),
                () => {
                  document.removeEventListener("click", handleClickOutside);
                }
              );
            }, []),
            (0, t.useEffect)(() => {
              let e = 0;
              w &&
                w.length &&
                w.forEach((a) => {
                  let s = parseFloat(
                    (0, j.d)(
                      (null == a ? void 0 : a.account_gauge_earned) || 0n
                    )
                  );
                  e += s;
                }),
                ea(e);
            }, [x, w]),
            (0, t.useEffect)(() => {
              let getPerpData = async () => {
                let e = await f(a),
                  s = countPerpData((null == e ? void 0 : e[0]) || []);
                s && Q(s);
              };
              o && a && getPerpData();
            }, [o, a]);
          let countPerpData = (e) => {
            if (!e || !e.length) return { tokenRecord: [], tokenSum: 0 };
            let a = e.map((e) => {
                let a =
                    null == o
                      ? void 0
                      : o.find((a) => {
                          var s, l;
                          return (
                            (null == a
                              ? void 0
                              : null === (s = a.address) || void 0 === s
                              ? void 0
                              : s.toLowerCase()) ===
                            (null == e
                              ? void 0
                              : null === (l = e.token) || void 0 === l
                              ? void 0
                              : l.toLowerCase())
                          );
                        }),
                  s = (0, v.b)(
                    null == e ? void 0 : e.amount,
                    (null == a ? void 0 : a.decimals) || 0
                  ),
                  l =
                    parseFloat(
                      (0, v.b)(
                        null == e ? void 0 : e.amount,
                        (null == a ? void 0 : a.decimals) || 0
                      )
                    ) * (null == a ? void 0 : a.price) || 0;
                return {
                  symbol: (null == a ? void 0 : a.symbol) || "",
                  tokenNum: (0, m.Xh)(s || "0", 4, !0),
                  totalUSD: l || 0,
                };
              }),
              s = a.reduce((e, a) => e + a.totalUSD, 0);
            return { tokenRecord: a || [], tokenSum: (0, m.pw)(s || 0, 2, !0) };
          };
          async function fetching(e, l, t) {
            let n = {},
              i = await r(l);
            await Promise.all(
              l.map(async (l, t) => {
                let r = await s(e, l, l.id, a);
                return (r.veDist = i[t]), r && null !== r && (n[l.id] = r), r;
              })
            ),
              [].push(n);
            let d = Object.keys(n),
              o = l.map((e, a) => {
                let s = Number(e.id);
                return d.includes(s.toString())
                  ? { ...e, ...n[s], rewardList: n[s] }
                  : { ...e, bribes: [], fees: [], veDist: [], rewardList: {} };
              });
            return T([...t, ...o]), J(!1), n;
          }
          (0, t.useEffect)(() => {
            k && G(k);
          }, [k]);
          let loadMore = () => {
            q || (J(!0), V($ + 1));
          };
          (0, t.useEffect)(() => {
            let fetchData = async () => {
              if (a && c && c.length) {
                let e = c.length,
                  a = W.current * $,
                  s = W.current * ($ + 1),
                  l = s < e,
                  t = l ? s : e;
                z(l);
                let r = await u(),
                  n = (0, m.p$)(F),
                  i = c.slice(a, t);
                T([...n, ...i]), E(!0);
                try {
                  let e = await fetching(r, i, n);
                  B(e);
                } catch (e) {
                  console.error(
                    "Error fetching rewards using fetching function:",
                    e
                  );
                } finally {
                  E(!1);
                }
              }
            };
            fetchData();
          }, [a, c, $]);
          let StakersMenu = () =>
            (0, l.jsxs)("div", {
              className: "flex flex-row items-center",
              children: [
                (0, l.jsx)("span", { children: "OmnixNFT Stakers Rewards" }),
                (0, l.jsx)("span", {
                  className: "ml-2",
                  children: "".concat(
                    a ? (2808 == es ? "0" : es) : "--",
                    "/24"
                  ),
                }),
                (0, l.jsx)(i.Z, {
                  position: "bottom",
                  className: "ml-2 z-100",
                  handle: (0, l.jsx)(p.EG, {}),
                  renderContent: () =>
                    (0, l.jsx)("span", {
                      children:
                        "OmnixNFT staker rewards: 24 epochs. 50% LOXO direct to wallet, 50% locked as veLOXO for 2 years.",
                    }),
                }),
              ],
            });
          return (0, l.jsxs)("div", {
            className: "pageContainer",
            children: [
              (0, l.jsx)("div", {
                className: "flex flex-wrap items-center justify-between",
                children: (0, l.jsxs)("div", {
                  className: "w-full",
                  children: [
                    (0, l.jsx)("div", {
                      className: "pageTitle",
                      children: "Dashboard",
                    }),
                    (0, l.jsx)("div", {
                      className: "pageContent",
                      children:
                        "Claim any rewards from locking tokens, any new emissions, bribes and the fees of any pool you have voted.",
                    }),
                  ],
                }),
              }),
              (0, l.jsxs)("div", {
                className: "lg:hidden mt-12 mb-10",
                children: [
                  (0, l.jsxs)("details", {
                    ref: O,
                    className: "dropdown w-full lg:w-auto",
                    children: [
                      (0, l.jsxs)("summary", {
                        className:
                          "w-full btn btn-neutral !normal-case rounded-none border border-slate-500/50 flex flex-row justify-between border-1 border-slate-500/50-content/2 hover:border-primary hover:bg-secondary min-h-0 h-10 xs:h-12 px-[6px] xs:px-[12px]",
                        children: [
                          (0, l.jsx)("span", {
                            className: n().dropdownRewards,
                            children:
                              3 === L.id
                                ? (0, l.jsx)(StakersMenu, {})
                                : L.title,
                          }),
                          (0, l.jsx)(p.u4, { pathFill: "#7E7E7E" }),
                        ],
                      }),
                      (0, l.jsx)("ul", {
                        className:
                          "p-2 border-slate-500/50 menu dropdown-content z-[1] bg-neutral shadow-3xl w-full",
                        children: e.map((e, a) =>
                          (0, l.jsx)(
                            "li",
                            {
                              className: n().dropdownRewards2,
                              onClick: (a) => {
                                var s;
                                null == O ||
                                  null === (s = O.current) ||
                                  void 0 === s ||
                                  s.removeAttribute("open"),
                                  I(e);
                              },
                              children: (0, l.jsx)("button", {
                                className:
                                  "flex flex-row justify-between px-[4px] xs:px-4",
                                children:
                                  3 !== a
                                    ? (0, l.jsx)("span", { children: e.title })
                                    : (0, l.jsx)(StakersMenu, {}),
                              }),
                            },
                            a
                          )
                        ),
                      }),
                    ],
                  }),
                  0 === L.id &&
                    (0, l.jsx)(GaugeCard, {
                      totalClaimable: ee,
                      upDataList: () => {
                        setTimeout(() => {
                          S();
                        }, 3e3);
                      },
                      dataSource: Z,
                      loading: M,
                    }),
                  1 === L.id &&
                    (0, l.jsx)(Holders_Card, {
                      dataSource: F,
                      loading: h,
                      rewardLoading: A,
                      hasMore: Y,
                      moreLoading: q,
                      loadMore: loadMore,
                    }),
                  3 === L.id && (0, l.jsx)(StakersCard, { dataSource: U }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "hidden lg:block mt-11 mb-10",
                children: [
                  (0, l.jsx)(components_Gauge, {
                    upDataList: () => {
                      setTimeout(() => {
                        S();
                      }, 3e3);
                    },
                    totalClaimable: ee,
                    dataSource: Z,
                    loading: M,
                  }),
                  (0, l.jsx)(Table, {
                    dataSource: F,
                    hasMore: Y,
                    moreLoading: q,
                    loading: h,
                    rewardLoading: A,
                    loadMore: loadMore,
                  }),
                  (0, l.jsx)(Stakers, {
                    balanceOf: N,
                    stakedTokenIds: _,
                    perpRewards: K,
                    totalRewards: y,
                    menu: a ? (2808 == es ? "0" : es) : "--",
                  }),
                ],
              }),
            ],
          });
        };
    },
    93293: function (e) {
      e.exports = {
        container: "Dashboard_container___FfTZ",
        tableTitle: "Dashboard_tableTitle__mhYBv",
        dataArea: "Dashboard_dataArea__tSHUM",
        dataDesc: "Dashboard_dataDesc__CRnO1",
        tableArea: "Dashboard_tableArea__hVdyM",
        title: "Dashboard_title__6c8Ix",
        content: "Dashboard_content___Ij2d",
        nodataArea: "Dashboard_nodataArea__zaLlB",
        nodataCard: "Dashboard_nodataCard__uPn9c",
        holdersRewardsTitle: "Dashboard_holdersRewardsTitle__BDXEJ",
        holdersRewardsDesc: "Dashboard_holdersRewardsDesc__gnzIU",
        buttonAll: "Dashboard_buttonAll__VaLin",
        "button-pop": "Dashboard_button-pop__1A7RR",
        "btn-group": "Dashboard_btn-group__1xmG7",
        glass: "Dashboard_glass__Bn8sR",
        "btn-outline": "Dashboard_btn-outline__mY41a",
        "btn-active": "Dashboard_btn-active__dG5cu",
        "btn-disabled": "Dashboard_btn-disabled__K8chV",
        "btn-group-horizontal": "Dashboard_btn-group-horizontal__VJEDz",
        "btn-group-vertical": "Dashboard_btn-group-vertical__yTD5H",
        buttonText: "Dashboard_buttonText__X_IZP",
        button: "Dashboard_button__rEDlX",
        dataAreaCard: "Dashboard_dataAreaCard__Z5BAr",
        dropdownRewards: "Dashboard_dropdownRewards__2JCuW",
        dropdownRewards2: "Dashboard_dropdownRewards2__2dLKm",
        after_image_title: "Dashboard_after_image_title___SP8n",
        after_image_value: "Dashboard_after_image_value__TikmB",
      };
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 958, 795, 984, 133, 451, 744], function () {
      return e((e.s = 41380));
    }),
      (_N_E = e.O());
  },
]);
