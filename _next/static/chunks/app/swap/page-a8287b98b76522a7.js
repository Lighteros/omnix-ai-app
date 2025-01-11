(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [998],
  {
    57476: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 19167, 23)),
        Promise.resolve().then(a.bind(a, 89394)),
        Promise.resolve().then(a.bind(a, 17616));
    },
    89394: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return SwapLayout;
          },
        });
      var s = a(57437),
        n = a(15187),
        l = a(37359),
        i = a(72692);
      function SwapLayout(e) {
        let { children: t } = e,
          { isSupported: a } = (0, l.$)();
        return (0, s.jsx)(s.Fragment, {
          children: (0, s.jsxs)("main", {
            children: [
              (0, s.jsx)(n.Z, {}),
              a ? (0, s.jsx)(s.Fragment, { children: t }) : (0, s.jsx)(i.Z, {}),
            ],
          }),
        });
      }
    },
    72692: function (e, t, a) {
      "use strict";
      var s = a(57437);
      a(2265);
      var n = a(16691),
        l = a.n(n),
        i = a(73616);
      t.Z = () => {
        let { openChainModal: e } = (0, i.iC)();
        return (0, s.jsxs)("div", {
          className: "flex flex-col items-center h-screen pt-[34vh]",
          children: [
            (0, s.jsxs)("div", {
              className: "w-60 md:w-96 flex flex-col items-center",
              children: [
                (0, s.jsx)(l(), {
                  loading: "lazy",
                  className: "lazyload",
                  src: "/static/img/icon/network.svg",
                  alt: "networkError",
                  width: 20,
                  height: 20,
                }),
                (0, s.jsx)("h1", { children: "Unsupported Network" }),
                (0, s.jsx)("div", {
                  children: (0, s.jsx)("p", {
                    children: "Switch to supported network.",
                  }),
                }),
              ],
            }),
            (0, s.jsx)("div", {
              className: "mt-6",
              children: (0, s.jsx)("button", {
                className: "offButton",
                onClick: e,
                children: "Switch Network",
              }),
            }),
          ],
        });
      };
    },
    85068: function (e, t, a) {
      "use strict";
      var s = a(83658),
        n = a(2265),
        l = a(99720);
      let i = {
        baseFeePerGas: BigInt(0),
        difficulty: BigInt(0),
        extraData: "",
        gasLimit: BigInt(0),
        gasUsed: BigInt(0),
        hash: "",
        logsBloom: "",
        miner: "",
        mixHash: "",
        nonce: "",
        number: BigInt(0),
        parentHash: "",
        receiptsRoot: "",
        sha3Uncles: "",
        size: BigInt(0),
        stateRoot: "",
        timestamp: BigInt(0),
        totalDifficulty: BigInt(0),
        transactions: [""],
        transactionsRoot: "",
        uncles: [],
      };
      t.Z = function () {
        let [e, t] = (0, n.useState)(!0),
          [a, r] = (0, n.useState)(i);
        return (
          (0, n.useEffect)(() => {
            (async function () {
              try {
                let e = await (0, s.Q)(l.vc);
                r(e), t(!1);
              } catch (e) {
                console.error("Error fetching block:", e), t(!1);
              }
            })();
          }, []),
          { isLoading: e, block: a }
        );
      };
    },
    17616: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return views_Swap;
          },
        });
      var s = a(57437),
        n = a(2265),
        l = a(26360),
        i = a.n(l),
        r = a(16691),
        o = a.n(r),
        d = a(49600),
        u = a(23751),
        c = a(37927),
        p = a(71839),
        m = a(22798),
        y = a(79037),
        f = a(95975),
        x = a(92980),
        b = a(79352),
        h = a(29147),
        w = a(16775),
        v = a(56129),
        g = a(24033),
        j = a(92424),
        N = a(91888),
        T = JSON.parse(
          '{"Mt":[{"inputs":[{"internalType":"address","name":"_router","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"getMinimumValue","outputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"getSample","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"getTradeDiff","outputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"pair","type":"address"}],"name":"getTradeDiff","outputs":[{"internalType":"uint256","name":"a","type":"uint256"},{"internalType":"uint256","name":"b","type":"uint256"}],"stateMutability":"view","type":"function"}]}'
        ),
        S = a(93923),
        I = a(77778),
        k = a(99720);
      async function getAmountsOut(e, t, a) {
        if (!a && !e && !t) return console.log("error "), null;
        try {
          let s = await (0, j.L)({
            address: a,
            abi: N.Mt,
            functionName: "getAmountsOut",
            args: [e, t],
          });
          if (s) return s;
          return (
            console.error("Unable to fetch output amounts"),
            [BigInt(0), BigInt(0), BigInt(0)]
          );
        } catch (e) {
          throw (console.error("Error in getAmountsOut:", e), e);
        }
      }
      async function getTradeDiff(e, t, a, s, n, l) {
        let i = "0x0000000000000000000000000000000000000000";
        try {
          let r = await (0, j.L)({
            address: n,
            abi: N.Mt,
            functionName: "pairFor",
            args: [t, a, s],
          });
          if (
            (r && (i = r),
            "0x0000000000000000000000000000000000000000" !== i && l && e)
          )
            try {
              let n = await (0, j.L)({
                address: l,
                abi: T.Mt,
                functionName: "getTradeDiff",
                args: [e, t, a, s],
              });
              return n || [];
            } catch (e) {
              return console.log(e), [BigInt(100), BigInt(100)];
            }
        } catch (e) {
          throw (console.error("Error encountered:", e), e);
        }
        return console.log("Error in retrieving trade data"), null;
      }
      async function findBestPath2(e, t, a, s, n) {
        var l, i, r, o;
        if (!t || !a || !e || !t.address || !a.address || "0" === e)
          return null;
        let d = t.address,
          u = a.address;
        (null == t
          ? void 0
          : null === (l = t.address) || void 0 === l
          ? void 0
          : l.toLowerCase()) ===
          (null == s
            ? void 0
            : null === (i = s.IOTX) || void 0 === i
            ? void 0
            : i.toLowerCase()) && (d = s.WRAPPED_IOTX),
          (null == a
            ? void 0
            : null === (r = a.address) || void 0 === r
            ? void 0
            : r.toLowerCase()) ===
            (null == s
              ? void 0
              : null === (o = s.IOTX) || void 0 === o
              ? void 0
              : o.toLowerCase()) && (u = s.WRAPPED_IOTX);
        let c = n.find(
            (e) =>
              "WIOTX" === e.symbol ||
              "TWIOTX" === e.symbol ||
              "tWIOTX" === e.symbol
          ),
          p = c
            ? [c]
            : [
                {
                  name: "wrapped IOTX Token",
                  symbol: "WIOTX",
                  decimals: 18,
                  address: "0xA00744882684C3e4747faEFD68D283eA44099D03",
                  logoURI: "/static/img/icon/tokens/IOTEX.svg",
                },
              ],
          m = p.filter(
            (e) =>
              e.address.toLowerCase() == d.toLowerCase() ||
              e.address.toLowerCase() == u.toLowerCase()
          ),
          y = [];
        0 === m.length &&
          (y = p
            .map((e) => [
              {
                routes: [
                  { from: d, to: e.address, stable: !0 },
                  { from: e.address, to: u, stable: !0 },
                ],
                routeAsset: e,
              },
              {
                routes: [
                  { from: d, to: e.address, stable: !1 },
                  { from: e.address, to: u, stable: !1 },
                ],
                routeAsset: e,
              },
              {
                routes: [
                  { from: d, to: e.address, stable: !0 },
                  { from: e.address, to: u, stable: !1 },
                ],
                routeAsset: e,
              },
              {
                routes: [
                  { from: d, to: e.address, stable: !1 },
                  { from: e.address, to: u, stable: !0 },
                ],
                routeAsset: e,
              },
            ])
            .flat()),
          y.push({
            routes: [{ from: d, to: u, stable: !0 }],
            routeAsset: null,
          }),
          y.push({
            routes: [{ from: d, to: u, stable: !1 }],
            routeAsset: null,
          });
        let f = await Promise.all(
          y.map(async (t) => {
            try {
              let a = await getAmountsOut(BigInt(e), t.routes, s.ROUTER);
              return a;
            } catch (e) {
              return console.log(e), [BigInt(0), BigInt(0), BigInt(0)];
            }
          })
        );
        for (let e = 0; e < f.length; e++)
          (y[e].receiveAmounts = f[e]),
            (y[e].finalValue = new I.Z(f[e][f[e].length - 1])
              .div(10 ** a.decimals)
              .toFixed(a.decimals));
        let x = y
          .filter((e) => null != e)
          .reduce(
            (e, t) => (e && new I.Z(e.finalValue).gt(t.finalValue) ? e : t),
            0
          );
        if (!x) return null;
        let b = 1;
        for (let e = 0; e < x.routes.length; e++) {
          let t;
          let a = x.receiveAmounts[e];
          if (e === x.receiveAmounts.length - 1) break;
          if (
            (x.receiveAmounts[e + 1],
            (t = await getTradeDiff(
              a,
              x.routes[e].from,
              x.routes[e].to,
              x.routes[e].stable,
              s.ROUTER,
              s.LOXlibrary
            )) &&
              t[0] &&
              t[1])
          ) {
            let e = new I.Z(t[1]).minus(new I.Z(t[0])).div(new I.Z(t[0]));
            b = parseFloat(e.times(100).toFixed(15));
          } else console.error("Unexpected result from getTradeDiff:", t);
        }
        let h = {
          inputs: { fromAmount: e, fromAsset: t, toAsset: a },
          output: x,
          priceImpact: b.toFixed(2),
        };
        return { returnValue: h };
      }
      var O = JSON.parse(
          '{"Mt":[{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"guy","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":true,"internalType":"address","name":"dst","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"src","type":"address"},{"indexed":false,"internalType":"uint256","name":"wad","type":"uint256"}],"name":"Withdrawal","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"guy","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"src","type":"address"},{"internalType":"address","name":"dst","type":"address"},{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"wad","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}'
        ),
        _ = a(14817),
        B = a(85068),
        useSwap = function () {
          let { block: e } = (0, B.Z)(),
            t = (0, n.useCallback)(
              async (e, t, a, s, n, l, i, r, o) => {
                let d, u;
                let c = v.x[t],
                  p = (function (e, t) {
                    let a = new I.Z(e.slice()),
                      s = a.times(t / 100),
                      n = a.minus(s);
                    return n.toFixed(0);
                  })(r, i),
                  m = Math.floor(Date.now() / 1e3) + 60 * o;
                a === c.IOTX
                  ? s === c.WRAPPED_IOTX
                    ? ((d = "deposit"), (u = []))
                    : ((d = "swapExactETHForTokens"), (u = [p, l, e, m]))
                  : s === c.IOTX
                  ? a === c.WRAPPED_IOTX
                    ? ((d = "withdraw"), (u = [n]))
                    : ((d = "swapExactTokensForETH"), (u = [n, p, l, e, m]))
                  : ((d = "swapExactTokensForTokens"), (u = [n, p, l, e, m]));
                let y =
                    "deposit" === d || "withdraw" === d
                      ? v.x[t].WRAPPED_IOTX
                      : v.x[t].ROUTER,
                  f = "deposit" === d || "withdraw" === d ? O.Mt : N.Mt,
                  x = a === c.IOTX ? BigInt(n) : BigInt(0);
                try {
                  let e = await (0, _.n)(k.vc, {
                    address: y,
                    abi: f,
                    functionName: d,
                    args: u,
                    value: x,
                  });
                  return console.log("Transaction Successfully, Hash:", e), e;
                } catch (e) {
                  throw (console.error("Swap failed:", e), e);
                }
              },
              [e]
            );
          return { swap: t };
        },
        A = a(37359),
        C = a(73616),
        shared_SwapConnectButton = () =>
          (0, s.jsx)(C.NL.Custom, {
            children: (e) => {
              let {
                  account: t,
                  chain: a,
                  openAccountModal: n,
                  openChainModal: l,
                  openConnectModal: i,
                  authenticationStatus: r,
                  mounted: o,
                } = e,
                d = o && "loading" !== r,
                u = d && t && a && (!r || "authenticated" === r);
              return (0, s.jsx)("div", {
                ...(!d && {
                  "aria-hidden": !0,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                }),
                children: (() => {
                  if (!u)
                    return (0, s.jsx)("button", {
                      onClick: i,
                      className:
                        "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                      disabled: !1,
                      children: (0, s.jsx)("span", {
                        className: "h-full",
                        children: "Connect your Wallet to use OmniX",
                      }),
                    });
                })(),
              });
            },
          }),
        E = a(54724),
        F = a(38425),
        L = a(37416),
        M = a(41472),
        P = a(54968),
        D = a(68143),
        X = a.n(D),
        views_Swap = () => {
          let e = (0, g.useRouter)(),
            t = (0, g.usePathname)(),
            a = (0, g.useSearchParams)(),
            { data: l, isError: r } = (0, m.G)(),
            {
              address: j,
              isConnecting: N,
              isDisconnected: T,
              chain: k,
            } = (0, y.m)(),
            { isSupported: O } = (0, A.$)(),
            {
              balances: _,
              initial: B,
              isLoading: C,
              prices: D,
            } = (0, x.useTokenContext)(),
            R = new I.Z(2).pow(256).minus(1).toFixed(0),
            [Z, W] = (0, n.useState)(
              F.M[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689].tokenA
            ),
            [U, J] = (0, n.useState)(
              F.M[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689].tokenB
            ),
            [z, V] = (0, n.useState)("0"),
            [G, H] = (0, n.useState)("0"),
            [$, q] = (0, n.useState)([]),
            [Y, K] = (0, n.useState)(0),
            [Q, ee] = (0, n.useState)(0),
            [et, ea] = (0, n.useState)("0"),
            [es, en] = (0, n.useState)("0"),
            [el, ei] = (0, n.useState)(BigInt(R)),
            [er, eo] = (0, n.useState)(BigInt(R)),
            [ed, eu] = (0, n.useState)([]),
            [ec, ep] = (0, n.useState)(!1),
            [em, ey] = (0, n.useState)(!1),
            [ef, ex] = (0, n.useState)(!1),
            [eb, eh] = (0, n.useState)(!1),
            [ew, ev] = (0, n.useState)(!1),
            [eg, ej] = (0, n.useState)(!1),
            [eN, eT] = (0, n.useState)(!1),
            [eS, eI] = (0, n.useState)(!1),
            [ek, eO] = (0, n.useState)(!1),
            [e_, eB] = (0, n.useState)(!1),
            [eA, eC] = (0, n.useState)(0),
            eE = localStorage.getItem("tolerance"),
            [eF, eL] = (0, n.useState)(null !== eE ? parseFloat(eE) : 0.1),
            [eM, eP] = (0, n.useState)("0"),
            [eD, eX] = (0, n.useState)(30),
            [eR, eZ] = (0, n.useState)(30),
            [eW, eU] = (0, n.useState)(""),
            [eJ, ez] = (0, n.useState)(!1),
            [eV, eG] = (0, n.useState)(""),
            [eH, e$] = (0, n.useState)(!1),
            [eq, eY] = (0, n.useState)(""),
            [eK, eQ] = (0, n.useState)({ a: "0", b: "0" }),
            e0 = (0, M.useToastError)(),
            [e2, e1] = (0, n.useState)(!1),
            e6 = (0, M.useToastSuccess)(),
            e5 = (0, n.useRef)(null);
          localStorage.setItem("tolerance", eF.toString()),
            (0, n.useEffect)(() => {
              localStorage.setItem("tolerance", eF.toString());
            }, [eF]);
          let {
              fetchAmount: e4,
              result: e7,
              path: e9,
              error: e3,
              swapType: e8,
              isLoading: te,
              priceImpact: tt,
              bestPath2: ta,
            } = (function () {
              let { chain: e } = (0, y.m)(),
                [t, a] = (0, n.useState)(null),
                [s, l] = (0, n.useState)(1 / 0),
                [i, r] = (0, n.useState)(null),
                [o, d] = (0, n.useState)([]),
                [u, c] = (0, n.useState)(!1),
                [p, m] = (0, n.useState)(""),
                [f, x] = (0, n.useState)(null),
                b = (0, n.useCallback)(
                  async (t, a, s) => {
                    let n =
                        v.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689],
                      l =
                        S.e[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689];
                    try {
                      var i, r, o, d, u, p, m, y;
                      if (
                        (c(!0),
                        ((null == t
                          ? void 0
                          : null === (i = t.address) || void 0 === i
                          ? void 0
                          : i.toLowerCase()) ===
                          (null == n
                            ? void 0
                            : null === (r = n.IOTX) || void 0 === r
                            ? void 0
                            : r.toLowerCase()) &&
                          (null == a
                            ? void 0
                            : null === (o = a.address) || void 0 === o
                            ? void 0
                            : o.toLowerCase()) ===
                            (null == n
                              ? void 0
                              : null === (d = n.WRAPPED_IOTX) || void 0 === d
                              ? void 0
                              : d.toLowerCase())) ||
                          ((null == a
                            ? void 0
                            : null === (u = a.address) || void 0 === u
                            ? void 0
                            : u.toLowerCase()) ===
                            (null == n
                              ? void 0
                              : null === (p = n.IOTX) || void 0 === p
                              ? void 0
                              : p.toLowerCase()) &&
                            (null == t
                              ? void 0
                              : null === (m = t.address) || void 0 === m
                              ? void 0
                              : m.toLowerCase()) ===
                              (null == n
                                ? void 0
                                : null === (y = n.WRAPPED_IOTX) || void 0 === y
                                ? void 0
                                : y.toLowerCase())))
                      )
                        return { type: "worrap", swapData: null };
                      {
                        let e = await findBestPath2(s.toString(), t, a, n, l);
                        return { type: "swap", swapData: e };
                      }
                    } catch (e) {
                      return { type: "worrap", swapData: null };
                    }
                  },
                  [e]
                );
              return {
                fetchAmount: b,
                result: t,
                path: o,
                swapType: p,
                error: i,
                isLoading: u,
                priceImpact: s,
                bestPath2: f,
              };
            })(),
            { fetchAllowance: ts, approve: tn } = (0, f.Z)(),
            { swap: tl } = useSwap();
          async function fetchData(e, t) {
            try {
              let a = await ts(e, j);
              0 === t && a && ei(a), 1 === t && a && eo(a);
            } catch (e) {
              console.error("Failed to fetch data:", e);
            }
          }
          (0, n.useEffect)(() => {
            e5.current && (clearTimeout(e5.current), (e5.current = null));
          }, [eb]),
            (0, n.useEffect)(() => {
              if (
                (null == Z ? void 0 : Z.balance) &&
                (null == U ? void 0 : U.balance)
              ) {
                var e, t;
                ea(
                  null === (e = Z.balance) || void 0 === e
                    ? void 0
                    : e.toString()
                ),
                  en(
                    null === (t = U.balance) || void 0 === t
                      ? void 0
                      : t.toString()
                  );
              }
              if (
                (null == l ? void 0 : l.gasPrice) &&
                l.maxFeePerGas &&
                l.maxPriorityFeePerGas
              ) {
                let e = (
                  parseFloat((0, b.d)(l.gasPrice)) +
                  parseFloat((0, b.d)(l.maxFeePerGas)) +
                  parseFloat((0, b.d)(l.maxPriorityFeePerGas))
                ).toFixed(9);
                eP(e);
              }
            }, [j, Z, U]),
            (0, n.useEffect)(() => {
              if (_ && !C) {
                var e;
                let t =
                    (null === (e = _.find((e) => e.address === Z.address)) ||
                    void 0 === e
                      ? void 0
                      : e.balance) || "0",
                  a = _.find((e) => e.address === U.address);
                W((e) => ({ ...e, balance: t })),
                  J((e) => ({
                    ...e,
                    balance: (null == a ? void 0 : a.balance) || "0",
                    price:
                      (0, P.aS)(D, (null == a ? void 0 : a.address) || "") || 0,
                  }));
              }
            }, [_, C, D]),
            (0, n.useEffect)(() => {
              j &&
                (setBalances(),
                handleTokenFetchData(Z, 0),
                handleTokenFetchData(U, 1));
            }, [Z, U, j]);
          let handleTokenFetchData = (e, t) => {
              "IOTX" !== e.symbol
                ? fetchData(e.address, t)
                : 0 === t
                ? ei(BigInt(R))
                : 1 === t && eo(BigInt(R));
            },
            setBalances = () => {
              Z.balance && ea(Z.balance.toString()),
                U.balance && en(U.balance.toString());
            },
            handleFlipp = () => {
              let e = JSON.parse(JSON.stringify(Z)),
                t = JSON.parse(JSON.stringify(U));
              J(e), W(t), ti(z, t, e);
            };
          (0, n.useEffect)(() => {
            _ && !C && q(_);
          }, [_, C]);
          let ti = (0, n.useCallback)(
              X()(async (e, t, a) => {
                if (!Number(e)) {
                  handleEstimatedAmountB("0"), ej(!1);
                  return;
                }
                try {
                  ej(!0);
                  let s = (0, h.v)(
                      e,
                      (null == t ? void 0 : t.decimals)
                        ? t.decimals
                        : Z.decimals
                    ),
                    n = await e4(t || Z, a || U, s);
                  "worrap" === n.type
                    ? (eB(!1), eC(0), handleEstimatedAmountB(e))
                    : (eZ(ta),
                      n.swapData.returnValue.output.routes &&
                        eu(n.swapData.returnValue.output.routes),
                      n.swapData.returnValue.priceImpact &&
                        eC(parseFloat(n.swapData.returnValue.priceImpact)),
                      handleEstimatedAmountB(
                        n.swapData.returnValue.output.finalValue
                      ),
                      0 == parseFloat(n.swapData.returnValue.output.finalValue)
                        ? eB(!0)
                        : eB(!1));
                } catch (e) {
                } finally {
                  ej(!1);
                }
              }, 500),
              [Z, U]
            ),
            tr = (0, n.useMemo)(() => {
              let e = new I.Z(z),
                t = new I.Z(G || 1),
                a = (0, P.Xh)(e.div(t).toFixed(), 4, !0);
              return a;
            }, [z, G]),
            to = (0, n.useMemo)(() => {
              let e = new I.Z(Q),
                t = e.times(U.price),
                a = (0, P.pw)(t.toFixed() || 0);
              return a;
            }, [Q, U]),
            handleEstimatedAmountA = (e) => {
              if (e && 0 !== Number(e)) {
                let t = (0, P.Xh)(e, 4);
                K(parseFloat(t)), V((0, P.Xh)(e, 4));
              } else 0 === Number(e) && (K(0), V("0"));
            },
            handleEstimatedAmountB = (e) => {
              if (e && 0 !== Number(e)) {
                let t = (0, P.Xh)(e, 4);
                ee(parseFloat(t)), H(e);
              } else 0 === Number(e) && (ee(0), H("0"));
            };
          async function handleSwap() {
            try {
              var e;
              eQ({ a: z, b: G });
              let t = v.x[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689];
              eO(!0), eU("loading"), ez(!0), e$(!1);
              let a = (0, P.og)(z, Z.decimals),
                s = (0, P.og)(G, U.decimals),
                n = Z.address === t.IOTX ? t.WRAPPED_IOTX : Z.address,
                l = (await ts(Z.address, j)) || BigInt(0);
              if (
                (null == Z
                  ? void 0
                  : null === (e = Z.address) || void 0 === e
                  ? void 0
                  : e.toLowerCase()) !== t.IOTX.toLowerCase() &&
                parseFloat((0, w.b)(l, Z.decimals)) < Y
              ) {
                let e = await tn(n, BigInt(a || R));
                if (!e) throw Error("Failed to approve token A");
                fetchData(Z.address, 0);
              }
              ez(!1);
              let i = await tl(
                j,
                (null == k ? void 0 : k.id) === 4689 ? k.id : 4689,
                Z.address,
                U.address,
                a,
                ed,
                eF,
                s,
                eD
              );
              e6(
                "Swap Successfully",
                "You pay "
                  .concat(Y, "  ")
                  .concat(Z.symbol, " and you receive ")
                  .concat(Q, "  ")
                  .concat(U.symbol),
                1,
                i,
                8e3
              ),
                handleEstimatedAmountB("0"),
                handleEstimatedAmountA("0"),
                eO(!1),
                (e5.current = setTimeout(() => {
                  eh(!1);
                }, 5e3));
            } catch (e) {
              console.log(e),
                e0(e),
                eO(!1),
                eU("rejected"),
                ez(!1),
                e$(!0),
                (e5.current = setTimeout(() => {
                  eh(!1);
                }, 5e3));
            }
          }
          async function handleApprove(e, t) {
            await tn(e.address, BigInt(R)),
              fetchData(e.address, 0),
              fetchData(e.address, 1);
          }
          return (0, s.jsxs)("div", {
            className: "flex flex-col items-center",
            children: [
              (0, s.jsx)("div", {
                className:
                  "w-[92vw] xs:w-[85vw] md:w-[500px] mt-20 xs:mt-[108px]",
                children: (0, s.jsxs)("div", {
                  className: "modalContainer opacityContainer",
                  children: [
                    (0, s.jsxs)(u.Z, {
                      id: "advance_setting",
                      className: "w-full",
                      open: ec,
                      setOpen: () => ep(!1),
                      children: [
                        (0, s.jsx)("div", {
                          className: "flex flex-row-reverse items-center",
                          children: (0, s.jsxs)("button", {
                            onClick: () => ep(!0),
                            className: "advance",
                            children: [
                              (0, s.jsx)(L.mJ, {}),
                              (0, s.jsx)("span", {
                                className:
                                  "text-[12px] text-[#7e7e7e] leading-[16px]",
                                children: "Advance",
                              }),
                            ],
                          }),
                        }),
                        (0, s.jsx)(p.Z, {
                          updateModal: (e) => ep(e),
                          tolerance: eF,
                          setTolerance: eL,
                          deadline: eD,
                          setDeadline: eX,
                        }),
                      ],
                    }),
                    (0, s.jsxs)("div", {
                      className: "mt-[10px] modalItem !py-[12px] !px-[14px]",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-row justify-between items-center",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "text-[12px] text-[#7e7e7e] leading-[16px]",
                              children: ["Balance: ", (0, P.Xh)(et, 4, !0)],
                            }),
                            (0, s.jsx)("div", {
                              className: "flex flex-row gap-2",
                              children: [0.25, 0.5, 0.75, 1].map((e, t) =>
                                (0, s.jsx)(
                                  "div",
                                  {
                                    children: (0, s.jsxs)("button", {
                                      onClick: () => {
                                        let t = new I.Z(et),
                                          a = new I.Z(e),
                                          s = t.times(a);
                                        K(s.toNumber()),
                                          V(s.toString()),
                                          ti(s.toString());
                                      },
                                      className: "advance",
                                      children: [100 * e, " %"],
                                    }),
                                  },
                                  t
                                )
                              ),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                          children: [
                            (0, s.jsxs)(u.Z, {
                              id: "choose_token",
                              className: "w-full",
                              open: em,
                              setOpen: () => ey(!1),
                              children: [
                                (0, s.jsxs)("button", {
                                  onClick: () => ey(!0),
                                  className: "tokenBtn",
                                  children: [
                                    (0, s.jsx)(o(), {
                                      loading: "lazy",
                                      "data-src": Z.logoURI,
                                      className: "lazyload rounded-full",
                                      src: Z.logoURI,
                                      alt: Z.name,
                                      width: 20,
                                      height: 21,
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "".concat(
                                        i().token_selection,
                                        " w-max"
                                      ),
                                      children: [" ", Z.symbol, " "],
                                    }),
                                    (0, s.jsx)("div", {
                                      children: (0, s.jsx)(L.u4, {}),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(d.Z, {
                                  updateModal: (e) => ey(e),
                                  prices: D,
                                  filter_button: !0,
                                  balances: $,
                                  isLoading: C,
                                  handleToken: (s) => {
                                    var n, l;
                                    let i = JSON.parse(JSON.stringify(Z)),
                                      r = JSON.parse(JSON.stringify(U));
                                    (null == s
                                      ? void 0
                                      : null === (n = s.address) || void 0 === n
                                      ? void 0
                                      : n.toLowerCase()) ===
                                    (null == r
                                      ? void 0
                                      : null === (l = r.address) || void 0 === l
                                      ? void 0
                                      : l.toLowerCase())
                                      ? (J(i), W(r), ti(z, r, i))
                                      : (W(s), ti(z, s, r));
                                    let o = new URLSearchParams(
                                        Array.from(a.entries())
                                      ),
                                      d = Z.address;
                                    d
                                      ? o.set("from", Z.address)
                                      : o.delete("from");
                                    let u = o.toString(),
                                      c = u ? "?".concat(u) : "";
                                    e.push("".concat(t).concat(c));
                                  },
                                }),
                              ],
                            }),
                            ew
                              ? (0, s.jsx)("span", {
                                  className: "loading loading-bars loading-sm",
                                })
                              : (0, s.jsx)("input", {
                                  type: "text",
                                  value: z,
                                  onFocus: (e) => {
                                    0 === Y && V("");
                                  },
                                  onBlur: (e) => {
                                    "" === e.target.value && V(Y.toString());
                                  },
                                  onChange: (e) => {
                                    let t = e.target.value;
                                    if (
                                      (t && ej(!0),
                                      /^\d*\.?\d*$/.test(t) || "" === t)
                                    ) {
                                      if ("" === t) K(0), V("");
                                      else {
                                        let e = (0, P.Md)(t, 13);
                                        K(e), V(t);
                                      }
                                      ti(t);
                                    }
                                  },
                                  className: "inputStyle",
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "pt-6 pb-6 flex justify-center",
                      children: (0, s.jsx)("button", {
                        onClick: () => handleFlipp(),
                        className:
                          "btn btn-neutral min-h-0 h-auto border-transparent  hover:border-transparent",
                        children: (0, s.jsx)(L.KW, {}),
                      }),
                    }),
                    (0, s.jsxs)("div", {
                      className: "modalItem !py-[12px] !px-[14px]",
                      children: [
                        (0, s.jsxs)("div", {
                          className:
                            "flex flex-row justify-between items-center h-[28px]",
                          children: [
                            (0, s.jsxs)("div", {
                              className:
                                "text-[12px] text-[#7e7e7e] leading-[16px]",
                              children: ["Balance: ", (0, P.Xh)(es, 4, !0)],
                            }),
                            (0, s.jsx)("p", {
                              className: "".concat(i().balance, " pr-1"),
                              children: "$".concat(to || 0),
                            }),
                          ],
                        }),
                        (0, s.jsxs)("div", {
                          className:
                            "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                          children: [
                            (0, s.jsxs)(u.Z, {
                              id: "choose_token_2",
                              className: "w-full",
                              open: ef,
                              setOpen: () => ex(!1),
                              children: [
                                (0, s.jsxs)("button", {
                                  onClick: () => ex(!0),
                                  className: "tokenBtn",
                                  children: [
                                    (0, s.jsx)(o(), {
                                      loading: "lazy",
                                      "data-src": U.logoURI,
                                      className: "lazyload rounded-full",
                                      src: U.logoURI,
                                      alt: U.name,
                                      width: 20,
                                      height: 21,
                                    }),
                                    (0, s.jsxs)("span", {
                                      className: "".concat(
                                        i().token_selection,
                                        " w-max"
                                      ),
                                      children: [" ", U.symbol, " "],
                                    }),
                                    (0, s.jsx)("div", {
                                      children: (0, s.jsx)(L.u4, {}),
                                    }),
                                  ],
                                }),
                                (0, s.jsx)(d.Z, {
                                  updateModal: (e) => ex(e),
                                  filter_button: !0,
                                  prices: D,
                                  balances: $,
                                  isLoading: C,
                                  handleToken: (s) => {
                                    var n, l;
                                    let i = JSON.parse(JSON.stringify(Z)),
                                      r = JSON.parse(JSON.stringify(U));
                                    (null == Z
                                      ? void 0
                                      : null === (n = Z.address) || void 0 === n
                                      ? void 0
                                      : n.toLowerCase()) ===
                                    (null == s
                                      ? void 0
                                      : null === (l = s.address) || void 0 === l
                                      ? void 0
                                      : l.toLowerCase())
                                      ? (J(i), W(r), ti(z, r, i))
                                      : (J(s), ti(z, i, s));
                                    let o = new URLSearchParams(
                                        Array.from(a.entries())
                                      ),
                                      d = U.address;
                                    d ? o.set("to", U.address) : o.delete("to");
                                    let u = o.toString(),
                                      c = u ? "?".concat(u) : "";
                                    e.push("".concat(t).concat(c));
                                  },
                                }),
                              ],
                            }),
                            eg
                              ? (0, s.jsx)("span", {
                                  className: "loading loading-bars loading-sm",
                                })
                              : (0, s.jsx)("input", {
                                  type: "text",
                                  readOnly: !0,
                                  value: G,
                                  className: "inputStyle",
                                }),
                          ],
                        }),
                      ],
                    }),
                    (0, s.jsx)("div", {
                      className: "py-3",
                      children: (0, s.jsxs)("div", {
                        className:
                          "m-0 cursor-pointer flex-wrap bg-transparent !p-0",
                        children: [
                          (0, s.jsxs)("div", {
                            className:
                              "w-full flex flex-wrap justify-between  items-center ",
                            children: [
                              (0, s.jsxs)("div", {
                                onClick: () => (eN ? eT(!1) : eT(!0)),
                                className:
                                  "collapse-title w-auto text-xl !p-0 font-medium flex flex-col justify-center",
                                children: [
                                  0 !== Q &&
                                    !eg &&
                                    (0, s.jsxs)("span", {
                                      className: "p-0 m-0 items-center ".concat(
                                        i().fuel_accordion_title,
                                        " text-gray-400}"
                                      ),
                                      children: [
                                        "1 ",
                                        U.symbol,
                                        " = ",
                                        tr,
                                        " ",
                                        " ",
                                        " ",
                                        Z.symbol,
                                        " ",
                                      ],
                                    }),
                                  eA <= -2
                                    ? (0, s.jsxs)("p", {
                                        className:
                                          " flex flex-row p-0 m-0 items-center ".concat(
                                            i().fuel_accordion_title
                                          ),
                                        children: [
                                          (0, s.jsx)(L.Y, {}),
                                          (0, s.jsx)("span", {
                                            className: "px-2 text-red-600",
                                            children:
                                              "High Negative Price Impact: Consider Reducing Trade Size.",
                                          }),
                                        ],
                                      })
                                    : eA >= 2
                                    ? (0, s.jsxs)("p", {
                                        className:
                                          " flex flex-row p-0 m-0 items-center ".concat(
                                            i().fuel_accordion_title
                                          ),
                                        children: [
                                          (0, s.jsx)(L.Y, { color: "#42FEAE" }),
                                          (0, s.jsx)("span", {
                                            className: "px-2 text-green-600",
                                            children: "Favorable Price Impact!",
                                          }),
                                        ],
                                      })
                                    : null,
                                ],
                              }),
                              (0, s.jsx)("div", {
                                onClick: () => (eN ? eT(!1) : eT(!0)),
                                className: "py-2",
                                children: (0, s.jsx)(L.LF, {
                                  className: eN ? "rotate-180" : "rotate-0",
                                }),
                              }),
                            ],
                          }),
                          eN &&
                            (0, s.jsx)("div", {
                              className: "mt-3 border-t pt-2 p-0",
                              children: (0, s.jsxs)("div", {
                                children: [
                                  (0, s.jsxs)("div", {
                                    className: "flex flex-col gap-2",
                                    children: [
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-row justify-between items-center",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: i().fuel_fee,
                                            children: "Network fee",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: i().fuel_fee_amount,
                                            children: ["≈ ", eM, " "],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-row justify-between items-center",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: i().fuel_fee,
                                            children: "Price impact",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: i().fuel_fee_price,
                                            children: [
                                              " ",
                                              eA ? eA.toFixed(2) : "0",
                                              " %",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-row justify-between items-center",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: i().fuel_fee,
                                            children: "Minimum output",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: i().fuel_fee_price,
                                            children: [
                                              " ",
                                              (0, P.Xh)(
                                                Q - (Q * eF) / 100,
                                                4,
                                                !0
                                              ),
                                              " ",
                                              U.symbol,
                                              " ",
                                            ],
                                          }),
                                        ],
                                      }),
                                      (0, s.jsxs)("div", {
                                        className:
                                          "flex flex-row justify-between items-center",
                                        children: [
                                          (0, s.jsx)("span", {
                                            className: i().fuel_fee,
                                            children: "Expected output",
                                          }),
                                          (0, s.jsxs)("span", {
                                            className: i().fuel_fee_price,
                                            children: [
                                              " ",
                                              (0, P.Xh)(Q, 4, !0),
                                              " ",
                                              U.symbol,
                                            ],
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "mt-3 pt-2 border-t",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-between items-center",
                                      children: [
                                        (0, s.jsx)("span", {
                                          className: i().fuel_fee,
                                          children: "Routing source",
                                        }),
                                        (0, s.jsx)("span", {
                                          className: i().fuel_fee_price,
                                          children: "OmniX AI",
                                        }),
                                      ],
                                    }),
                                  }),
                                  (0, s.jsx)("div", {
                                    className: "pt-3 ",
                                    children: (0, s.jsxs)("div", {
                                      className:
                                        "flex relative flex-wrap justify-between items-center pb-4",
                                      children: [
                                        (0, s.jsxs)("button", {
                                          className:
                                            "px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ".concat(
                                              i().fuel_guid_steps
                                            ),
                                          children: [
                                            (0, s.jsx)(o(), {
                                              loading: "lazy",
                                              "data-src":
                                                "/static/img/icon/tokens/".concat(
                                                  Z.symbol,
                                                  ".svg"
                                                ),
                                              className: "lazyload",
                                              src: "/static/img/icon/tokens/".concat(
                                                Z.symbol,
                                                ".svg"
                                              ),
                                              alt: Z.symbol,
                                              width: 15,
                                              height: 15,
                                            }),
                                            Z.symbol,
                                          ],
                                        }),
                                        ed.length >= 2 &&
                                          (0, s.jsxs)("button", {
                                            className:
                                              "px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ".concat(
                                                i().fuel_guid_steps
                                              ),
                                            children: [
                                              (0, s.jsx)(o(), {
                                                loading: "lazy",
                                                "data-src":
                                                  "/static/img/icon/tokens/WIOTX.svg",
                                                className: "lazyload",
                                                src: "/static/img/icon/tokens/WIOTX.svg",
                                                alt: U.symbol,
                                                width: 15,
                                                height: 15,
                                              }),
                                              "WIOTX",
                                            ],
                                          }),
                                        (0, s.jsxs)("button", {
                                          className:
                                            "px-3 btn btn-neutral border-white rounded-none min-h-0 h-6 ".concat(
                                              i().fuel_guid_steps
                                            ),
                                          children: [
                                            (0, s.jsx)(o(), {
                                              loading: "lazy",
                                              "data-src":
                                                "/static/img/icon/tokens/".concat(
                                                  U.symbol,
                                                  ".svg"
                                                ),
                                              className: "lazyload",
                                              src: "/static/img/icon/tokens/".concat(
                                                U.symbol,
                                                ".svg"
                                              ),
                                              alt: U.symbol,
                                              width: 15,
                                              height: 15,
                                            }),
                                            U.symbol,
                                          ],
                                        }),
                                        (0, s.jsx)("span", {
                                          className:
                                            "w-full flex absolute  py-[1px] bg-white",
                                        }),
                                      ],
                                    }),
                                  }),
                                ],
                              }),
                            }),
                        ],
                      }),
                    }),
                    (0, s.jsx)("div", {
                      className: "pt-0 pb-10",
                      children: T
                        ? (0, s.jsx)(shared_SwapConnectButton, {})
                        : 0 === Y || eg
                        ? (0, s.jsx)("button", {
                            className:
                              "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                            disabled: !0,
                            children: e_
                              ? "Insufficient Liquidity"
                              : Y && eg
                              ? "Please wait"
                              : "Enter Amount",
                          })
                        : Y > parseFloat(null == Z ? void 0 : Z.balance)
                        ? (0, s.jsx)("button", {
                            className:
                              "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full ".concat(
                                i().swap_button
                              ),
                            disabled: !0,
                            children: "Insufficient Balance",
                          })
                        : e_
                        ? (0, s.jsx)("button", {
                            className:
                              "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full ".concat(
                                i().swap_button
                              ),
                            disabled: !0,
                            children: "Insufficient Liquidity",
                          })
                        : parseFloat(
                            (0, h.v)(el.toString(), Z.decimals).toString()
                          ) < Y
                        ? (0, s.jsxs)("button", {
                            className:
                              "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full ".concat(
                                i().swap_button
                              ),
                            onClick: () => handleApprove(Z, et),
                            children: ["Approve ", Z.symbol],
                          })
                        : (0, s.jsx)("button", {
                            className:
                              "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full ".concat(
                                i().swap_button
                              ),
                            disabled: !O,
                            onClick: () => {
                              handleSwap(), eh(!0);
                            },
                            children: "Swap",
                          }),
                    }),
                  ],
                }),
              }),
              (0, s.jsx)(c.Z, {
                id: "AddLiquidity",
                className: "w-full",
                open: eb,
                children: (0, s.jsx)(E.Z, {
                  title: "Swap Token",
                  updateModal: () => {
                    eh(!1);
                  },
                  children: (0, s.jsx)("div", {
                    className: "flex p-3 flex-wrap w-full",
                    children: (0, s.jsx)(s.Fragment, {
                      children: (0, s.jsxs)("div", {
                        className: "w-full flex flex-wrap  ",
                        children: [
                          (0, s.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, s.jsxs)("span", {
                                children: ["Approve ", Z.symbol, " "],
                              }),
                              eJ
                                ? (0, s.jsx)(L.yM, {})
                                : eH
                                ? (0, s.jsx)(L.Uc, {})
                                : (0, s.jsx)(L.NO, {}),
                            ],
                          }),
                          (0, s.jsxs)("div", {
                            className: "popupItem",
                            children: [
                              (0, s.jsxs)("span", {
                                children: [
                                  "Swap ",
                                  eK.a,
                                  " ",
                                  Z.symbol,
                                  " for ",
                                  eK.b,
                                  " ",
                                  U.symbol,
                                  " ",
                                ],
                              }),
                              ek
                                ? (0, s.jsx)(L.yM, {})
                                : eH
                                ? (0, s.jsx)(L.Uc, {})
                                : (0, s.jsx)(L.NO, {}),
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
        };
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 284, 633, 70, 744], function () {
      return e((e.s = 57476));
    }),
      (_N_E = e.O());
  },
]);
