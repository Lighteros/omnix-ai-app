(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [962],
  {
    96717: function (e, t, a) {
      Promise.resolve().then(a.t.bind(a, 19167, 23)),
        Promise.resolve().then(a.bind(a, 64899)),
        Promise.resolve().then(a.bind(a, 84947)),
        Promise.resolve().then(a.bind(a, 39511));
    },
    64899: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return LiqLayout;
          },
        });
      var n = a(57437),
        s = a(15187),
        l = a(92980);
      function LiqLayout(e) {
        let { children: t } = e,
          { balances: a, prices: i } = (0, l.useTokenContext)();
        return (0, n.jsx)(n.Fragment, {
          children: (0, n.jsxs)("main", {
            className: "main",
            children: [(0, n.jsx)(s.Z, {}), i && i.length ? t : null],
          }),
        });
      }
    },
    84947: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          LiquidityProvider: function () {
            return LiquidityProvider;
          },
          useLiquidity: function () {
            return provider_useLiquidity;
          },
        });
      var n = a(57437),
        s = a(2265),
        l = a(79037);
      a(93923);
      var i = a(91888),
        o = a(16291),
        r = a(18531),
        d = a(79256),
        c = a(7487),
        u = a(92424),
        m = a(14817),
        p = a(99720),
        x = a(56129),
        y = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"Owner","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldVoter","type":"address"},{"indexed":false,"internalType":"address","name":"newVoter","type":"address"}],"name":"Voter","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldWBF","type":"address"},{"indexed":false,"internalType":"address","name":"newWBF","type":"address"}],"name":"WBF","type":"event"},{"inputs":[],"name":"MAX_EPOCHS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_PAIRS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_REWARDS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WEEK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"},{"internalType":"uint256","name":"_amounts","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"}],"name":"getAllPair","outputs":[{"components":[{"internalType":"address","name":"pair_address","type":"address"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"total_supply","type":"uint256"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"string","name":"token0_symbol","type":"string"},{"internalType":"uint256","name":"token0_decimals","type":"uint256"},{"internalType":"uint256","name":"reserve0","type":"uint256"},{"internalType":"uint256","name":"claimable0","type":"uint256"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"string","name":"token1_symbol","type":"string"},{"internalType":"uint256","name":"token1_decimals","type":"uint256"},{"internalType":"uint256","name":"reserve1","type":"uint256"},{"internalType":"uint256","name":"claimable1","type":"uint256"},{"internalType":"address","name":"gauge","type":"address"},{"internalType":"uint256","name":"gauge_total_supply","type":"uint256"},{"internalType":"address","name":"fee","type":"address"},{"internalType":"address","name":"bribe","type":"address"},{"internalType":"uint256","name":"emissions","type":"uint256"},{"internalType":"address","name":"emissions_token","type":"address"},{"internalType":"uint256","name":"emissions_token_decimals","type":"uint256"},{"internalType":"uint256","name":"account_lp_balance","type":"uint256"},{"internalType":"uint256","name":"account_token0_balance","type":"uint256"},{"internalType":"uint256","name":"account_token1_balance","type":"uint256"},{"internalType":"uint256","name":"account_gauge_balance","type":"uint256"},{"internalType":"uint256","name":"account_gauge_earned","type":"uint256"}],"internalType":"struct PairAPI.pairInfo[]","name":"Pairs","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"},{"internalType":"address","name":"_account","type":"address"}],"name":"getPair","outputs":[{"components":[{"internalType":"address","name":"pair_address","type":"address"},{"internalType":"string","name":"symbol","type":"string"},{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"decimals","type":"uint256"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"total_supply","type":"uint256"},{"internalType":"address","name":"token0","type":"address"},{"internalType":"string","name":"token0_symbol","type":"string"},{"internalType":"uint256","name":"token0_decimals","type":"uint256"},{"internalType":"uint256","name":"reserve0","type":"uint256"},{"internalType":"uint256","name":"claimable0","type":"uint256"},{"internalType":"address","name":"token1","type":"address"},{"internalType":"string","name":"token1_symbol","type":"string"},{"internalType":"uint256","name":"token1_decimals","type":"uint256"},{"internalType":"uint256","name":"reserve1","type":"uint256"},{"internalType":"uint256","name":"claimable1","type":"uint256"},{"internalType":"address","name":"gauge","type":"address"},{"internalType":"uint256","name":"gauge_total_supply","type":"uint256"},{"internalType":"address","name":"fee","type":"address"},{"internalType":"address","name":"bribe","type":"address"},{"internalType":"uint256","name":"emissions","type":"uint256"},{"internalType":"address","name":"emissions_token","type":"address"},{"internalType":"uint256","name":"emissions_token_decimals","type":"uint256"},{"internalType":"uint256","name":"account_lp_balance","type":"uint256"},{"internalType":"uint256","name":"account_token0_balance","type":"uint256"},{"internalType":"uint256","name":"account_token1_balance","type":"uint256"},{"internalType":"uint256","name":"account_gauge_balance","type":"uint256"},{"internalType":"uint256","name":"account_gauge_earned","type":"uint256"}],"internalType":"struct PairAPI.pairInfo","name":"_pairInfo","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amounts","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"address","name":"_pair","type":"address"}],"name":"getPairBribe","outputs":[{"components":[{"internalType":"uint256","name":"epochTimestamp","type":"uint256"},{"internalType":"uint256","name":"totalVotes","type":"uint256"},{"internalType":"address","name":"pair","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct PairAPI.tokenBribe[]","name":"bribes","type":"tuple[]"}],"internalType":"struct PairAPI.pairBribeEpoch[]","name":"_pairEpoch","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amounts","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"address","name":"_pair","type":"address"}],"name":"getPairfees","outputs":[{"components":[{"internalType":"uint256","name":"epochTimestamp","type":"uint256"},{"internalType":"uint256","name":"totalVotes","type":"uint256"},{"internalType":"address","name":"pair","type":"address"},{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct PairAPI.tokenBribe[]","name":"bribes","type":"tuple[]"}],"internalType":"struct PairAPI.pairBribeEpoch[]","name":"_pairEpoch","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pair","type":"address"},{"internalType":"address","name":"_token","type":"address"}],"name":"left","outputs":[{"internalType":"uint256","name":"_rewPerEpoch","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairFactory","outputs":[{"internalType":"contract IPairFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlyingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"contract IVoter","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wBribeFactory","outputs":[{"internalType":"contract IWrappedBribeFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}'
        ),
        h = a(63120),
        f = a(41472),
        b = a(92980),
        v = a(85068),
        useAddLiquidity = function () {
          let [e, t] = (0, s.useState)(!1),
            [a, n] = (0, s.useState)(BigInt(0)),
            [g, w] = (0, s.useState)(),
            { entirePairs: _, fetchData: k } = (0, b.useTokenContext)(),
            [j, N] = (0, s.useState)(),
            [T, S] = (0, s.useState)(),
            [I, C] = (0, s.useState)(),
            { chain: P } = (0, l.m)(),
            [A, O] = (0, s.useState)(!1),
            [M, L] = (0, s.useState)();
          (0, f.useToastError)();
          let [E, R] = (0, s.useState)(!1),
            [B, F] = (0, s.useState)(!1),
            [X, q] = (0, s.useState)(!1),
            [D, W] = (0, s.useState)(!1),
            [z, Z] = (0, s.useState)(!1),
            [V, U] = (0, s.useState)(!1),
            [$, Y] = (0, s.useState)(!1),
            [J, H] = (0, s.useState)(0),
            { block: G } = (0, v.Z)(),
            K = (0, s.useCallback)(async (e, t, a) => {
              try {
                let n = await (0, u.L)({
                  address: e,
                  abi: c.Mt,
                  functionName: "getAmountOut",
                  args: [a, t],
                });
                return n;
              } catch (e) {
                console.error("Error fetching getAmountOut:", e);
              }
            }, []),
            Q = (0, s.useCallback)(async (e, t, a, n) => {
              try {
                let s = await el(t, a, n),
                  l = await (0, u.L)({
                    address: s,
                    abi: c.Mt,
                    functionName: "balanceOf",
                    args: [e],
                  });
                return { data: l, pairFor: s };
              } catch (e) {
                return (
                  console.error("Error pool and balance:", e),
                  {
                    data: BigInt(0),
                    pairFor: "0x0000000000000000000000000000000000000000",
                  }
                );
              }
            }, []),
            ee = (0, s.useCallback)(
              async (e) => {
                try {
                  let t =
                      x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689],
                    a = await (0, u.L)({
                      address: t.Voter,
                      abi: o.Mt,
                      functionName: "gauges",
                      args: [e],
                    });
                  return a;
                } catch (e) {
                  console.error("Error gauge address:", e);
                }
              },
              [P]
            ),
            et = (0, s.useCallback)(
              async (e, t, a, n) => {
                try {
                  let s =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  if ((s.ROUTER, !t)) return BigInt(0);
                  {
                    let l = await (0, u.L)({
                      address: s.PAIR_FACTORY,
                      abi: h.Mt,
                      functionName: "getPair",
                      args: [
                        e === s.IOTX ? s.WRAPPED_IOTX : e,
                        t === s.IOTX ? s.WRAPPED_IOTX : t,
                        a,
                      ],
                    });
                    if (
                      !l ||
                      "0x0000000000000000000000000000000000000000" === l
                    )
                      return BigInt(0);
                    {
                      let t = await K(l, e === s.IOTX ? s.WRAPPED_IOTX : e, n);
                      return t;
                    }
                  }
                } catch (e) {
                  return BigInt(0);
                }
              },
              [P]
            ),
            ea = (0, s.useCallback)(
              async (e, t, a) => {
                try {
                  let n =
                      x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689],
                    s = await (0, u.L)({
                      address: n.PAIR_FACTORY,
                      abi: h.Mt,
                      functionName: "getPair",
                      args: [
                        e === n.IOTX ? n.WRAPPED_IOTX : e,
                        t === n.IOTX ? n.WRAPPED_IOTX : t,
                        a,
                      ],
                    });
                  return s;
                } catch (e) {
                  return (
                    console.log(e, "===>error"),
                    "0x0000000000000000000000000000000000000000"
                  );
                }
              },
              [P]
            ),
            en = (0, s.useCallback)(
              async (e, a, s, l) => {
                try {
                  let i =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  if ((O(!0), i.ROUTER, a)) {
                    let o = await (0, u.L)({
                      address: i.PAIR_FACTORY,
                      abi: h.Mt,
                      functionName: "getPair",
                      args: [
                        e === i.IOTX ? i.WRAPPED_IOTX : e,
                        a === i.IOTX ? i.WRAPPED_IOTX : a,
                        s,
                      ],
                    });
                    if (
                      !o ||
                      "0x0000000000000000000000000000000000000000" === o
                    )
                      return (
                        t(!1),
                        n(BigInt(0)),
                        "0x0000000000000000000000000000000000000000"
                      );
                    {
                      t(!0);
                      let a = await K(o, e === i.IOTX ? i.WRAPPED_IOTX : e, l);
                      return (
                        l === BigInt(0) || a < BigInt(9e3)
                          ? n(BigInt(0))
                          : n(a),
                        o
                      );
                    }
                  }
                  console.log("set tokenA and tokenB first");
                } catch (e) {
                  console.error("Error fetching liquidity pool existence:", e);
                }
                O(!1);
              },
              [P]
            ),
            es = (0, s.useCallback)(
              async (e, t, a) => {
                try {
                  let n =
                      x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689],
                    s = await (0, u.L)({
                      address: n.PAIR_FACTORY,
                      abi: h.Mt,
                      functionName: "getPair",
                      args: [
                        e === n.IOTX ? n.WRAPPED_IOTX : e,
                        t === n.IOTX ? n.WRAPPED_IOTX : t,
                        a,
                      ],
                    });
                  return s;
                } catch (e) {
                  console.error("Error fetching liquidity pool existence:", e);
                }
              },
              [P]
            ),
            el = (0, s.useCallback)(
              async (e, a, n) => {
                try {
                  let s =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  if ((s.ROUTER, a)) {
                    let l = await (0, u.L)({
                      address: s.ROUTER,
                      abi: i.Mt,
                      functionName: "pairFor",
                      args: [
                        e === s.IOTX ? s.WRAPPED_IOTX : e,
                        a === s.IOTX ? s.WRAPPED_IOTX : a,
                        n,
                      ],
                    });
                    if (l && "0x0000000000000000000000000000000000000000" !== l)
                      return t(!0), l;
                    return t(!1), "0x0000000000000000000000000000000000000000";
                  }
                  console.log("pair address");
                } catch (e) {
                  console.error("Error fetching liquidity pool existence:", e);
                }
              },
              [P]
            ),
            ei = (0, s.useCallback)(
              async (e, t) => {
                try {
                  let a =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  if (a.ROUTER) {
                    let n = await (0, u.L)({
                      address: a.pairAPI,
                      abi: y.Mt,
                      functionName: "getPair",
                      args: [e, t],
                    });
                    return n;
                  }
                  console.log("pair error");
                } catch (e) {
                  console.error("Error fetching liquidity pool existence:", e);
                }
              },
              [P]
            ),
            eo = (0, s.useCallback)(async () => {
              try {
                let e = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689],
                  t = await (0, u.L)({
                    address: e.PAIR_FACTORY,
                    abi: h.Mt,
                    functionName: "allPairsLength",
                    args: [],
                  });
                return t;
              } catch (e) {
                console.error("Error fetching allPairsLength:", e);
              }
            }, [P]),
            er = (0, s.useCallback)(
              async (e, t, a, n, s) => {
                try {
                  let l =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  Y(!0);
                  let o = await (0, u.L)({
                    address: l.ROUTER,
                    abi: i.Mt,
                    functionName: "quoteAddLiquidity",
                    args: [
                      e === l.IOTX ? l.WRAPPED_IOTX : e,
                      t === l.IOTX ? l.WRAPPED_IOTX : t,
                      a,
                      n,
                      s,
                    ],
                  });
                  return Y(!1), o;
                } catch (e) {
                  console.error("Error fetching quote Add liquidity :", e);
                }
              },
              [P]
            ),
            ed = (0, s.useCallback)(
              async (e, t, a, n) => {
                try {
                  let s =
                    x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                  Y(!0);
                  let l = await (0, u.L)({
                    address: s.ROUTER,
                    abi: i.Mt,
                    functionName: "quoteRemoveLiquidity",
                    args: [
                      e === s.IOTX ? s.WRAPPED_IOTX : e,
                      t === s.IOTX ? s.WRAPPED_IOTX : t,
                      a,
                      n,
                    ],
                  });
                  return Y(!1), l;
                } catch (e) {
                  console.error("Error fetching remove liquidity :", e);
                }
              },
              [P]
            ),
            ec = (0, s.useCallback)(
              async (e, t, a) => {
                Z(!0);
                let n = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689],
                  s = await (0, m.n)(p.vc, {
                    address: n.PAIR_FACTORY,
                    abi: h.Mt,
                    functionName: "createPair",
                    args: [e, t, a],
                  });
                return Z(!1), s;
              },
              [P]
            ),
            eu = (0, s.useCallback)(
              async (e, t, a, n, s, l, o) => {
                let r, d;
                let c = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                F(!0);
                let u = t === c.IOTX ? c.WRAPPED_IOTX : t,
                  y = a === c.IOTX ? c.WRAPPED_IOTX : a,
                  h = await er(u, y, n, s, l),
                  f = calculateAmountOutMin(h[0], o),
                  b = calculateAmountOutMin(h[1], o),
                  v = Math.floor(Date.now() / 1e3) + 1200;
                t === c.IOTX || a === c.IOTX
                  ? ((r = "addLiquidityETH"),
                    (d = [
                      t === c.IOTX ? a : t,
                      n,
                      t === c.IOTX ? l : s,
                      t === c.IOTX ? b : f,
                      t === c.IOTX ? f : b,
                      e,
                      v,
                    ]))
                  : ((r = "addLiquidity"), (d = [t, a, n, s, l, f, b, e, v]));
                let g = t === c.IOTX ? s : a === c.IOTX ? l : BigInt(0),
                  w = await (0, m.n)(p.vc, {
                    address: c.ROUTER,
                    abi: i.Mt,
                    functionName: r,
                    args: d,
                    value: g,
                  });
                return F(!1), w;
              },
              [P, G]
            ),
            em = (0, s.useCallback)(
              async (e, t, a) => {
                let n = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                W(!0);
                let s = await el(e, t, a),
                  l = await (0, m.n)(p.vc, {
                    address: n.Voter,
                    abi: o.Mt,
                    functionName: "createGauge",
                    args: [s],
                  }),
                  i = await (0, d.e)(p.vc, { hash: l });
                return W(!1), i;
              },
              [P]
            ),
            ep = (0, s.useCallback)(
              async (e, t) => {
                let a = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                U(!0);
                let n = "0x";
                try {
                  let t = await (0, u.L)({
                    address: a.Voter,
                    abi: o.Mt,
                    functionName: "gauges",
                    args: [e],
                  });
                  n = t;
                } catch (e) {
                  console.error("Error fetching gauges:", e);
                }
                let s = await (0, m.n)(p.vc, {
                  address: n,
                  abi: r.Mt,
                  functionName: "deposit",
                  args: [t],
                });
                return U(!1), s;
              },
              [P]
            ),
            ex = (0, s.useCallback)(async (e, t) => {
              let a = await (0, m.n)(p.vc, {
                address: e,
                abi: r.Mt,
                functionName: "deposit",
                args: [t],
              });
              return a;
            }, []),
            ey = (0, s.useCallback)(async (e, t) => {
              U(!0);
              let a = await (0, m.n)(p.vc, {
                address: e,
                abi: r.Mt,
                functionName: "withdraw",
                args: [t],
              });
              return U(!1), a;
            }, []),
            eh = (0, s.useCallback)(
              async (e, t, a, n, s, l) => {
                let o, r;
                let d = x.x[(null == P ? void 0 : P.id) === 4689 ? P.id : 4689];
                q(!0);
                let c = await ed(t, a, n, s),
                  u = Math.floor(Date.now() / 1e3) + 1200;
                if (c) {
                  t === d.WRAPPED_IOTX
                    ? ((o = "removeLiquidityETH"),
                      (r = [
                        a,
                        n,
                        s,
                        calculateAmountOutMin(c[1], l),
                        calculateAmountOutMin(c[0], l),
                        e,
                        u,
                      ]))
                    : a === d.WRAPPED_IOTX
                    ? ((o = "removeLiquidityETH"),
                      (r = [
                        t,
                        n,
                        s,
                        calculateAmountOutMin(c[0], l),
                        calculateAmountOutMin(c[1], l),
                        e,
                        u,
                      ]))
                    : ((o = "removeLiquidity"),
                      (r = [
                        t,
                        a,
                        n,
                        s,
                        calculateAmountOutMin(c[0], l),
                        calculateAmountOutMin(c[1], l),
                        e,
                        u,
                      ]));
                  let x = await (0, m.n)(p.vc, {
                    address: d.ROUTER,
                    abi: i.Mt,
                    functionName: o,
                    args: r,
                  });
                  return q(!1), x;
                }
                console.log(
                  "can not estmate the amount out of tokenA and tokenB"
                );
              },
              [P, G]
            );
          function calculateAmountOutMin(e, t) {
            let a = Number(e);
            return Math.floor(a * (1 - t / 100));
          }
          return (
            (0, s.useCallback)(async (e, t, a, n, s) => {
              try {
                let l = await (0, u.L)({
                  address: e,
                  abi: i.Mt,
                  functionName: "quoteRemoveLiquidity",
                  args: [t, a, n, s],
                });
                return l;
              } catch (e) {
                console.error("Error quote Remove Liquidit:", e);
              }
            }, []),
            {
              isLoadingLiquidity: E,
              isLoadingCreatePair: z,
              isLoadingAdd: B,
              isLoadingRemove: X,
              isLoadingAmountOut: A,
              entirePairs: j,
              pairsReawards: T,
              fetchPoolAddress: ea,
              liquidityPools: g,
              liquidityBalance: I,
              isLiquidityPoolExists: e,
              estimatedAmountInTokenB: a,
              isLoadingCreateGauge: D,
              isLoadingGaugeDeposit: V,
              pairsLength: J,
              fetchAmount: et,
              fetchLiquidityPoolExistence: en,
              PoolExistence: es,
              allPairsLength: eo,
              earnedList: M,
              createPair: ec,
              addLiquidity: eu,
              removeLiquidity: eh,
              createGauge: em,
              ManageGaugeDeposit: ex,
              GaugeDeposit: ep,
              GaugeWithdraw: ey,
              fetchPoolBalance: Q,
              fetchGaugeAddress: ee,
              getPair: ei,
            }
          );
        },
        g = a(95975);
      let w = (0, s.createContext)(void 0),
        LiquidityProvider = (e) => {
          let { children: t } = e,
            { address: a, isDisconnected: s, chain: i } = (0, l.m)(),
            {
              balances: o,
              entirePairs: r,
              liquidityPools: d,
              init: c,
              fetchData: u,
              prices: m,
            } = (0, b.useTokenContext)(),
            {
              isLoadingLiquidity: p,
              isLiquidityPoolExists: x,
              estimatedAmountInTokenB: y,
              pairsLength: h,
              fetchLiquidityPoolExistence: f,
              PoolExistence: v,
              getPair: _,
              createPair: k,
              addLiquidity: j,
              removeLiquidity: N,
              createGauge: T,
              GaugeDeposit: S,
              fetchPoolBalance: I,
              fetchGaugeAddress: C,
              allPairsLength: P,
              ManageGaugeDeposit: A,
              fetchAmount: O,
              fetchPoolAddress: M,
              GaugeWithdraw: L,
            } = useAddLiquidity(),
            {
              approvedAmount: E,
              voterApprovedAmount: R,
              lpApprovedAmount: B,
              fetchAllowance: F,
              fetchLpAllowance: X,
              fetchGaugeAllowance: q,
              fetchVoteAllowance: D,
              approve: W,
              approveGauge: z,
              approveRouter: Z,
            } = (0, g.Z)();
          return (0, n.jsx)(w.Provider, {
            value: {
              address: a,
              fetchAmount: O,
              fetchPoolAddress: M,
              isDisconnected: s,
              pairsLength: h,
              balances: o,
              prices: m,
              isLoadingLiquidity: p,
              isLiquidityPoolExists: x,
              estimatedAmountInTokenB: y,
              init: c,
              GaugeWithdraw: L,
              ManageGaugeDeposit: A,
              fetchLiquidityPoolExistence: f,
              PoolExistence: v,
              getPair: _,
              createPair: k,
              addLiquidity: j,
              removeLiquidity: N,
              createGauge: T,
              allPairsLength: P,
              entirePairs: r,
              GaugeDeposit: S,
              fetchData: u,
              fetchPoolBalance: I,
              fetchGaugeAddress: C,
              liquidityPools: d,
              approvedAmount: E,
              voterApprovedAmount: R,
              lpApprovedAmount: B,
              chain: i,
              fetchAllowance: F,
              fetchLpAllowance: X,
              fetchGaugeAllowance: q,
              fetchVoteAllowance: D,
              approve: W,
              approveGauge: z,
              approveRouter: Z,
            },
            children: t,
          });
        },
        provider_useLiquidity = () => {
          let e = (0, s.useContext)(w);
          if (void 0 === e)
            throw Error(
              "useLiquidityContext must be used within a LiquidityProvider"
            );
          return e;
        };
    },
    77637: function (e, t, a) {
      "use strict";
      var n = a(57437),
        s = a(2265);
      t.Z = (e) => {
        let { isLoading: t, hasMore: a, onLoadMore: l } = e,
          [i, o] = (0, s.useState)(!1);
        return (
          (0, s.useEffect)(() => {
            let handleScroll = () => {
              window.scrollY + window.innerHeight >=
                document.documentElement.scrollHeight &&
              a &&
              !t
                ? (o(!0), l())
                : o(!1);
            };
            return (
              window.addEventListener("scroll", handleScroll),
              () => window.removeEventListener("scroll", handleScroll)
            );
          }, [t, a, l]),
          (0, n.jsxs)("div", {
            children: [
              i &&
                (0, n.jsx)("div", {
                  className: "text-center",
                  children: "Pulling Data...",
                }),
              t &&
                (0, n.jsx)("div", {
                  className: "w-full text-center mt-12",
                  children: (0, n.jsx)("span", {
                    className: "loading loading-bars loading-lg",
                  }),
                }),
              !a &&
                !t &&
                (0, n.jsx)("div", {
                  className: "text-center",
                  children: "No More Data",
                }),
            ],
          })
        );
      };
    },
    73689: function (e, t, a) {
      "use strict";
      var n = a(57437),
        s = a(2265),
        l = a(37416),
        i = a(67815),
        o = a.n(i);
      t.Z = (e) => {
        let {
            currentPage: t,
            itemsPerPage: a,
            totalItems: i,
            onPageChange: r,
            onItemsPerPageChange: d,
          } = e,
          [c, u] = (0, s.useState)([]),
          m = (0, s.useRef)(null);
        (0, s.useEffect)(() => {
          let e = [];
          for (let t = 1; t <= Math.ceil(i / a); t++) e.push(t);
          u(e);
        }, [a, i]);
        let handlePageChange = (e) => {
            e >= 1 && e <= c.length && r(e);
          },
          handleItemsPerPageChange = (e) => {
            var t;
            d(e),
              null === (t = m.current) ||
                void 0 === t ||
                t.removeAttribute("open");
          };
        return (0, n.jsx)("div", {
          className: "pt-8",
          children: (0, n.jsxs)("div", {
            className: "flex flex-row justify-end items-center gap-2",
            children: [
              (0, n.jsxs)("details", {
                ref: m,
                className: "dropdown dropdown-top w-full md:w-auto",
                children: [
                  (0, n.jsxs)("summary", {
                    className:
                      "btn rounded-none bg-transparent border-transparent ".concat(
                        o().btn_show_rows_cases
                      ),
                    children: ["Show：", a, " Rows", (0, n.jsx)(l.KL, {})],
                  }),
                  (0, n.jsx)("ul", {
                    className:
                      "p-2 border-accent menu dropdown-content z-[1] bg-neutral",
                    children: [5, 10, 15, 20].map((e) =>
                      (0, n.jsx)(
                        "li",
                        {
                          onClick: () => handleItemsPerPageChange(e),
                          children: (0, n.jsx)("button", {
                            className: "flex flex-row justify-between",
                            children: (0, n.jsxs)("span", {
                              children: [e, " Rows"],
                            }),
                          }),
                        },
                        e
                      )
                    ),
                  }),
                ],
              }),
              (0, n.jsxs)("span", {
                className: o().number_in_page,
                children: [
                  Math.min((t - 1) * a + 1, i),
                  "-",
                  Math.min(t * a, i),
                  " of ",
                  i,
                ],
              }),
              (0, n.jsxs)("div", {
                className: "join items-center",
                children: [
                  (0, n.jsx)("button", {
                    onClick: () => handlePageChange(t - 1),
                    disabled: 1 === t,
                    className:
                      "px-3 rounded-none min-h-0 h-9 join-item btn bg-transparent btn-primary border-transparent",
                    children: (0, n.jsx)(l.To, {
                      style: { transform: "rotate(180deg)" },
                    }),
                  }),
                  c.map((e) =>
                    (0, n.jsx)(
                      "button",
                      {
                        onClick: () => handlePageChange(e),
                        className:
                          "text-[#706f6f] px-2 rounded-none min-h-0 h-[24px] join-item btn btn-primary mr-[1px] ".concat(
                            t === e
                              ? "bg-opacity-80 border border-primary"
                              : "bg-transparent border-transparent"
                          ),
                        children: e,
                      },
                      e
                    )
                  ),
                  (0, n.jsx)("button", {
                    onClick: () => handlePageChange(t + 1),
                    disabled: t === c.length,
                    className:
                      "px-3 rounded-none min-h-0 h-9 join-item btn bg-transparent btn-primary border-transparent",
                    children: (0, n.jsx)(l.To, {}),
                  }),
                ],
              }),
            ],
          }),
        });
      };
    },
    39511: function (e, t, a) {
      "use strict";
      a.r(t),
        a.d(t, {
          default: function () {
            return views_Liquidity;
          },
        });
      var n = a(57437),
        s = a(2265),
        l = a(61396),
        i = a.n(l),
        o = a(36708),
        r = a.n(o),
        d = a(90413),
        c = a(30113),
        u = a.n(c),
        m = a(79352),
        p = a(3605),
        x = a(84947),
        y = a(37927),
        h = a(37416),
        f = a(77778),
        b = a(24033),
        v = a(54968),
        g = a(41472),
        w = a(54724),
        extras_ManageLpStaking = (e) => {
          let { updateModal: t, lp: a, updateOpen: l, closeModal: i } = e;
          new f.Z(2).pow(256).minus(1).toFixed(0);
          let {
              address: o,
              createGauge: r,
              GaugeWithdraw: c,
              ManageGaugeDeposit: _,
              fetchGaugeAddress: k,
              fetchGaugeAllowance: j,
              approveGauge: N,
              fetchData: T,
            } = (0, x.useLiquidity)(),
            S = (0, g.useToastError)(),
            I = (0, b.useRouter)(),
            C = (0, g.useToastSuccess)(),
            [P, A] = (0, s.useState)(!0);
          (0, b.useSearchParams)();
          let [O, M] = (0, s.useState)(BigInt(0)),
            [L, E] = (0, s.useState)(""),
            [R, B] = (0, s.useState)(BigInt(0)),
            [F, X] = (0, s.useState)("0"),
            [q, D] = (0, s.useState)(!1),
            [W, z] = (0, s.useState)(!1),
            [Z, V] = (0, s.useState)(!1),
            [U, $] = (0, s.useState)(""),
            [Y, J] = (0, s.useState)(""),
            { addToast: H } = (0, g.useToast)(),
            [G, K] = (0, s.useState)(!1),
            [Q, ee] = (0, s.useState)(!1),
            [et, ea] = (0, s.useState)(!1),
            [en, es] = (0, s.useState)(!1),
            [el, ei] = (0, s.useState)(!1),
            [eo, er] = (0, s.useState)("");
          (0, s.useRef)(!1);
          let ed = (0, s.useRef)(null);
          async function fetch() {
            if (a && o) {
              "0x0000000000000000000000000000000000000000" === a.gauge
                ? ee(!1)
                : ee(!0);
              try {
                let e = await j(a.pair_address, o, a.gauge);
                X(parseFloat((0, m.d)(e)).toFixed(8));
              } catch (e) {
                console.log("error fetching Gauge allowance");
              }
            }
          }
          async function getGaugeAddress(e) {
            for (let t = 0; t < 5; t++) {
              let a = await k(e);
              if ("0x0000000000000000000000000000000000000000" !== a) return a;
              await new Promise((e) => setTimeout(e, 5e3 * (t + 1)));
            }
            throw Error(
              "Failed to get the created gauge address after retries"
            );
          }
          async function handleDeposit() {
            try {
              er("loading"), D(!0), V(!0), z(!0), ei(!1);
              let e = a.gauge;
              if (
                "0x0000000000000000000000000000000000000000" === e &&
                (await r(a.token0, a.token1, a.stable),
                (e = await getGaugeAddress(a.pair_address)),
                "0x0000000000000000000000000000000000000000" === e)
              )
                throw Error("Failed to get the created gauge address");
              z(!1);
              let t = await j(a.pair_address, o, e);
              parseFloat((0, m.d)(t)) < parseFloat((0, m.d)(O)) &&
                (await N(a.pair_address, e, O)),
                D(!1);
              let n = await _(e, O);
              C(
                "Deposit LP",
                "Deposit ".concat((0, m.d)(O), " ").concat(a.symbol),
                1,
                n,
                8e3
              ),
                setTimeout(() => {
                  T();
                }, 8e3),
                V(!1),
                (ed.current = setTimeout(() => {
                  es(!1);
                }, 5e3));
            } catch (e) {
              console.error(e, "===>error"),
                ei(!0),
                S(e),
                er("error"),
                (ed.current = setTimeout(() => {
                  es(!1);
                }, 5e3)),
                z(!1),
                D(!1),
                V(!1);
            }
          }
          async function handleWithdraw() {
            try {
              er("loading"), K(!0), ei(!1);
              let e = await c(a.gauge, O);
              C(
                "Withdraw LP",
                "Withdraw ".concat((0, m.d)(O), " ").concat(a.symbol),
                1,
                e,
                8e3
              ),
                K(!1),
                setTimeout(() => {
                  T();
                }, 8e3),
                (ed.current = setTimeout(() => {
                  ea(!1);
                }, 5e3));
            } catch (e) {
              console.error(e, "===>error"),
                ei(!0),
                S(e),
                er("error"),
                (ed.current = setTimeout(() => {
                  ea(!1);
                }, 5e3)),
                K(!1);
            }
          }
          return (
            (0, s.useEffect)(() => {
              let e = P ? a.account_lp_balance : a.account_gauge_balance;
              B(e);
              let t = (0, m.d)(e);
              E(t), M(e);
            }, [P, a]),
            (0, s.useEffect)(() => {
              et || en ? l(!0) : l(!1),
                ed.current && (clearTimeout(ed.current), (ed.current = null));
            }, [et, en]),
            (0, s.useEffect)(() => {
              fetch();
            }, [O, a, o]),
            (0, n.jsxs)("div", {
              className: "modalInner",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-row items-center justify-between w-full",
                  children: [
                    (0, n.jsxs)("span", {
                      className: "modalTitle",
                      children: [
                        "Manage ",
                        a
                          ? ""
                              .concat(a.token0_symbol || "", "/")
                              .concat(a.token1_symbol || "")
                          : "Unknown",
                        " ",
                        (null == a ? void 0 : a.stable) === !0
                          ? "(Stable)"
                          : "(Volatile)",
                        " ",
                      ],
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => t(!1),
                      className:
                        "btn btn-neutral  hover:border-none p-0 border-none min-h-0 h-5",
                      children: (0, n.jsx)(h._y, {}),
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "w-full mt-[25px] min-h-[46px] border border-[#2bdfb4] flex flex-wrap justify-between overflow-hidden items-center rounded-full h-[46px]",
                  children: [
                    (0, n.jsx)("button", {
                      onClick: () => A(!0),
                      className: "tabItem !w-1/2 ".concat(
                        P ? "tabItemActive" : ""
                      ),
                      children: "Stake",
                    }),
                    (0, n.jsx)("button", {
                      onClick: () => A(!1),
                      className: "tabItem !w-1/2 ".concat(
                        P ? "" : "tabItemActive"
                      ),
                      children: "Unstake",
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className: "modalItem !mt-[25px]",
                  children: [
                    (0, n.jsxs)("div", {
                      className:
                        "flex flex-row flex-wrap justify-between items-center",
                      children: [
                        (0, n.jsxs)("div", {
                          className:
                            "text-[12px] text-[#7e7e7e] leading-[16px]",
                          children: [
                            "Balance: ",
                            (0, v.Xh)((0, m.d)((0, v.Bw)(R, 4)), 4, !0),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "flex flex-row gap-2",
                          children: [25, 50, 75, 100].map((e, t) =>
                            100 !== e
                              ? (0, n.jsx)(
                                  "div",
                                  {
                                    className: "hidden md:block",
                                    children: (0, n.jsxs)("button", {
                                      onClick: () => {
                                        let t = (BigInt(e) * R) / 100n,
                                          a = (0, m.d)(t);
                                        E(a), M(t);
                                      },
                                      className: "advance",
                                      children: [e, " %"],
                                    }),
                                  },
                                  t
                                )
                              : (0, n.jsx)(
                                  "div",
                                  {
                                    children: (0, n.jsxs)("button", {
                                      onClick: () => {
                                        let t = (BigInt(e) * R) / 100n,
                                          a = (0, m.d)(t);
                                        E(a), M(t);
                                      },
                                      className: "advance",
                                      children: [e, " %"],
                                    }),
                                  },
                                  t
                                )
                          ),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "avatar-group -space-x-2 mr-2",
                          children: [
                            (0, n.jsx)("div", {
                              className: "avatar border-none ".concat(
                                u().avatarIcon
                              ),
                              children: (0, n.jsx)("div", {
                                className: "w-8",
                                children: (0, n.jsx)(d.Image, {
                                  loading: "lazy",
                                  "data-src": "/static/img/icon/tokens/".concat(
                                    (null == a ? void 0 : a.token0_symbol) ||
                                      "",
                                    ".svg"
                                  ),
                                  className: "lazyload",
                                  src: "/static/img/icon/tokens/".concat(
                                    (null == a ? void 0 : a.token0_symbol) ||
                                      "",
                                    ".svg"
                                  ),
                                  alt: a.token0_symbol,
                                  width: 12,
                                  height: 12,
                                }),
                              }),
                            }),
                            (0, n.jsx)("div", {
                              className: "avatar border-none ".concat(
                                u().avatarIcon
                              ),
                              children: (0, n.jsx)("div", {
                                className: "w-8",
                                children: (0, n.jsx)(d.Image, {
                                  loading: "lazy",
                                  "data-src": "/static/img/icon/tokens/".concat(
                                    (null == a ? void 0 : a.token1_symbol) ||
                                      "",
                                    ".svg"
                                  ),
                                  className: "lazyload",
                                  src: "/static/img/icon/tokens/".concat(
                                    (null == a ? void 0 : a.token1_symbol) ||
                                      "",
                                    ".svg"
                                  ),
                                  alt: a.token1_symbol,
                                  width: 12,
                                  height: 12,
                                }),
                              }),
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "w-[30%] overflow-hidden",
                          children: (0, n.jsxs)("span", {
                            className: "".concat(
                              u().token_selection,
                              " flex-1 text-[12px]"
                            ),
                            children: [
                              " ",
                              ""
                                .concat(a.token0_symbol, " / ")
                                .concat(a.token1_symbol),
                              " ",
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "w-[50%] pl-[4px]",
                          children: (0, n.jsx)("input", {
                            type: "text",
                            value: L,
                            onFocus: (e) => {
                              0 == Number(O) && E("");
                            },
                            onBlur: (e) => {
                              "" === e.target.value && E(O.toString());
                            },
                            onChange: (e) => {
                              let t = e.target.value;
                              if (/^\d*\.?\d*$/.test(t) || "" === t) {
                                if ("" === t) M(BigInt(0)), E("");
                                else {
                                  let e = (0, v.og)(t, 18);
                                  M(BigInt(e)), E(t);
                                }
                              }
                            },
                            className:
                              "w-full p-0 input text-end input-ghost max-w-xs min-h-0 h-5 border-none",
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
                P
                  ? (0, n.jsxs)("div", {
                      className:
                        "w-full pb-6 flex flex-row justify-between mt-7",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () => {
                            handleDeposit(), es(!0);
                          },
                          disabled: 0 == Number(O) || Number(O) > Number(R),
                          className:
                            "w-[calc(50%-9px)] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn",
                          children:
                            "0x0000000000000000000000000000000000000000" ===
                            a.gauge
                              ? "Create Gauge & Stake"
                              : "Stake LP",
                        }),
                        (0, n.jsx)("button", {
                          onClick: () => {
                            i();
                          },
                          className: "w-[calc(50%-9px)] cancelBtn",
                          children: "Cancel",
                        }),
                      ],
                    })
                  : (0, n.jsxs)("div", {
                      className:
                        "w-full pb-6 flex flex-row justify-between mt-7",
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () => {
                            i();
                          },
                          className: "w-[calc(50%-9px)] cancelBtn",
                          children: "Cancel",
                        }),
                        (0, n.jsx)("button", {
                          onClick: () => {
                            handleWithdraw(), ea(!0);
                          },
                          disabled:
                            a.account_gauge_balance === BigInt(0) ||
                            "0" === (0, m.d)(O),
                          className:
                            "w-[calc(50%-9px)] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn",
                          children: "Unstake Lp",
                        }),
                      ],
                    }),
                (0, n.jsxs)("div", {
                  className: "w-full flex flex-wrap justify-between",
                  children: [
                    (0, n.jsx)("div", {
                      className: "liquidityTitle",
                      children: "Your Balance",
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "w-full flex flex-row items-center justify-between pt-[6px]",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "w-1/2 flex flex-col text-stone-400 py-1",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                              children: a
                                ? (0, v.Xh)(
                                    (0, p.bM)(
                                      a.account_lp_balance.toString(),
                                      18
                                    ),
                                    4
                                  )
                                : "0",
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                              children: [
                                "Pooled ",
                                a
                                  ? ""
                                      .concat(a.token0_symbol || "", "/")
                                      .concat(a.token1_symbol || "")
                                  : "Unknown",
                              ],
                            }),
                          ],
                        }),
                        (0, n.jsxs)("div", {
                          className:
                            "w-1/2 flex items-end flex-col text-stone-400 py-1",
                          children: [
                            (0, n.jsx)("div", {
                              className:
                                "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                              children: a
                                ? (0, v.Xh)(
                                    (0, p.bM)(
                                      a.account_gauge_balance.toString(),
                                      18
                                    ),
                                    4
                                  )
                                : "0",
                            }),
                            (0, n.jsxs)("div", {
                              className:
                                "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                              children: [
                                "Staked ",
                                a
                                  ? ""
                                      .concat(a.token0_symbol || "", "/")
                                      .concat(a.token1_symbol || "")
                                  : "Unknown",
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  onClick: () => {
                    I.push("/dashboard");
                  },
                  className:
                    "pt-6 pb-4 text-blue flex flex-row items-center justify-center cursor-pointer hover:underline",
                  children: [
                    (0, n.jsx)("span", {
                      className: "pr-2",
                      children: "View Earnings",
                    }),
                    (0, n.jsx)(h.LZ, { className: "mt-1", size: 24 }),
                  ],
                }),
                (0, n.jsx)(y.Z, {
                  id: "StakeLp",
                  className: "w-full",
                  open: en,
                  children: (0, n.jsx)(w.Z, {
                    title: "Create gauge & Stake",
                    updateModal: () => {
                      es(!1);
                    },
                    children: (0, n.jsx)("div", {
                      className: "flex p-3 flex-wrap w-full",
                      children: (0, n.jsx)(n.Fragment, {
                        children: (0, n.jsxs)("div", {
                          className: "w-full flex flex-wrap  ",
                          children: [
                            (0, n.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, n.jsxs)("span", {
                                  children: ["Approve ", a.symbol, " "],
                                }),
                                q
                                  ? (0, n.jsx)(h.yM, {})
                                  : el
                                  ? (0, n.jsx)(h.Uc, {})
                                  : (0, n.jsx)(h.NO, {}),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, n.jsx)("span", {
                                  children: "Create gauge",
                                }),
                                W
                                  ? (0, n.jsx)(h.yM, {})
                                  : el
                                  ? (0, n.jsx)(h.Uc, {})
                                  : (0, n.jsx)(h.NO, {}),
                              ],
                            }),
                            (0, n.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, n.jsx)("span", {
                                  children: "Stake LP token in the gauge",
                                }),
                                Z
                                  ? (0, n.jsx)(h.yM, {})
                                  : el
                                  ? (0, n.jsx)(h.Uc, {})
                                  : (0, n.jsx)(h.NO, {}),
                              ],
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
                (0, n.jsx)(y.Z, {
                  id: "StakeLp",
                  className: "w-full",
                  open: et,
                  children: (0, n.jsx)(w.Z, {
                    title: "Withdraw LP",
                    updateModal: () => {
                      ea(!1);
                    },
                    children: (0, n.jsx)("div", {
                      className: "flex p-3 flex-wrap w-full",
                      children: (0, n.jsx)("div", {
                        className: "w-full flex flex-wrap  ",
                        children: (0, n.jsxs)("div", {
                          className: "popupItem",
                          children: [
                            (0, n.jsxs)("span", {
                              children: [
                                "Withdraw ",
                                (0, m.d)(O),
                                " ",
                                a.symbol,
                                " ",
                              ],
                            }),
                            G
                              ? (0, n.jsx)(h.yM, {})
                              : el
                              ? (0, n.jsx)(h.Uc, {})
                              : (0, n.jsx)(h.NO, {}),
                          ],
                        }),
                      }),
                    }),
                  }),
                }),
              ],
            })
          );
        },
        _ = a(16775),
        k = a(23751),
        j = a(10712),
        N = a(30724),
        T = a(62776),
        S = a(73689),
        I = a(37359);
      let C = (0, s.forwardRef)((e, t) => {
        var a;
        let l = (0, b.useSearchParams)(),
          { isSupported: i } = (0, I.$)(),
          o = e.sortManage,
          r = e.openAdd,
          [d, c] = (0, s.useState)(!1),
          [u, m] = (0, s.useState)(10),
          [p, y] = (0, s.useState)(0),
          [h, f] = (0, s.useState)(!1),
          [g, w] = (0, s.useState)(0),
          [C, P] = (0, s.useState)("GUIDE"),
          {
            address: A,
            balances: O,
            pairsLength: M,
            allPairsLength: L,
          } = (0, x.useLiquidity)(),
          E = e.data;
        e.loading, (0, s.useRef)();
        let [R, B] = (0, s.useState)(1),
          F = (0, s.useRef)(!1),
          X = (0, s.useRef)(),
          q = E.length;
        (0, s.useImperativeHandle)(t, () => ({ setCurrentPage: B, initSort }));
        let initSort = () => {
            var e;
            null == X ||
              null === (e = X.current) ||
              void 0 === e ||
              e.initSort();
          },
          D = [];
        for (let e = 1; e <= Math.ceil(q / u); e++) D.push(e);
        let W = (0, s.useMemo)(() => {
          let t = (R - 1) * u,
            a = t + u;
          return e.data.slice(t, a);
        }, [R, u, e.data]);
        function calculateTokenAmounts(e, t, a, n, s, l) {
          let i = (0, v.cz)(e),
            o = (0, v.cz)(t),
            r = (0, v.cz)(a),
            d = (0, v.cz)(n),
            c = (0, v.cz)(s),
            u = (0, v.cz)(l);
          if (0n === d) return [0n, 0n];
          let m = (
              (i * (o * 10n ** (18n - c))) /
              d /
              10n ** (18n - c)
            ).toString(),
            p = (
              (i * (r * 10n ** (18n - u))) /
              d /
              10n ** (18n - u)
            ).toString();
          return [BigInt(m), BigInt(p)];
        }
        (0, s.useEffect)(() => {
          if (e.data && e.data.length && !F.current) {
            let t = l.get("openManage");
            if (t) {
              F.current = !0;
              let a = e.data.findIndex((e) => e.pair_address === t);
              a >= 0 && (y(a), f(!0));
            }
          }
        }, [e.data]);
        let z = [
          {
            title: "Name",
            dataIndex: "token0_symbol",
            width: "20%",
            key: "token0_symbol",
            render: (t) =>
              (0, n.jsxs)("div", {
                className: "flex flex-row",
                children: [
                  (0, n.jsx)(T.Z, {
                    token0Symbol: t.token0_symbol,
                    token1Symbol: t.token1_symbol,
                    name: ""
                      .concat(t.token0_symbol, "/")
                      .concat(t.token1_symbol),
                    detail: !0 === t.stable ? "Stable" : "Volatile",
                  }),
                  (e.DP_ADDRESS.includes(t.token0.toLowerCase()) ||
                    e.DP_ADDRESS.includes(t.token1.toLowerCase())) &&
                    (0, n.jsx)("div", {
                      className:
                        "ml-3 bg-[#343434] px-2 h-[1.5rem] leading-[1.5rem] text-white text-xs",
                      children: "DePIN Pool",
                    }),
                ],
              }),
          },
          {
            title: "APR",
            dataIndex: "aprValue",
            key: "totalVotes",
            width: "14%",
            unit: "%",
            sort: !0,
            sortManage: (e) => {
              o("aprCount", e);
            },
          },
          {
            title: "Total Staked",
            dataIndex: "stakedValue",
            width: "14%",
            preSymbol: "$",
            key: "totalStaked",
            sort: !0,
            sortManage: (e) => {
              o("stakedCount", e);
            },
            tooltip: (e) =>
              (0, n.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, n.jsxs)("span", {
                    children: [
                      (0, v.Xh)(
                        (0, _.b)(
                          calculateTokenAmounts(
                            e.gauge_total_supply,
                            e.reserve0,
                            e.reserve1,
                            e.total_supply,
                            e.token0_decimals,
                            e.token1_decimals
                          )[0],
                          Number(e.token0_decimals)
                        )
                      ),
                      " ",
                      e.token0_symbol,
                      " ",
                    ],
                  }),
                  (0, n.jsxs)("span", {
                    children: [
                      (0, v.Xh)(
                        (0, _.b)(
                          calculateTokenAmounts(
                            e.gauge_total_supply,
                            e.reserve0,
                            e.reserve1,
                            e.total_supply,
                            e.token0_decimals,
                            e.token1_decimals
                          )[1],
                          Number(e.token1_decimals)
                        )
                      ),
                      " ",
                      e.token1_symbol,
                    ],
                  }),
                ],
              }),
          },
          {
            title: "My Stake",
            dataIndex: A && i ? "myStakeValue" : "-",
            key: "myStaked",
            width: "14%",
            sort: !!A && !!i,
            sortManage: (e) => {
              o("myStakeCount", e);
            },
            tooltip:
              A && i
                ? (e) =>
                    (0, n.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, n.jsxs)("span", {
                          children: [
                            (0, v.Xh)(
                              (0, _.b)(
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
                            ),
                            " ",
                            e.token0_symbol,
                            " ",
                          ],
                        }),
                        (0, n.jsxs)("span", {
                          children: [
                            (0, v.Xh)(
                              (0, _.b)(
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
                            ),
                            " ",
                            e.token1_symbol,
                          ],
                        }),
                      ],
                    })
                : void 0,
            preSymbol: A && i ? "$" : "",
          },
          {
            title: "My Pool",
            dataIndex: A && i ? "myPoolValue" : "-",
            key: "rewardEstimate",
            width: "14%",
            sort: !!A && !!i,
            preSymbol: A && i ? "$" : "",
            sortManage: (e) => {
              o("myPoolCount", e);
            },
            tooltip:
              A && i
                ? (e, t, a) =>
                    (0, n.jsxs)("div", {
                      className: "flex flex-col",
                      children: [
                        (0, n.jsxs)("span", {
                          children: [
                            (0, v.Xh)(
                              (0, _.b)(
                                calculateTokenAmounts(
                                  (
                                    parseFloat(e.account_lp_balance) +
                                    parseFloat(e.account_gauge_balance)
                                  ).toString(),
                                  e.reserve0,
                                  e.reserve1,
                                  e.total_supply,
                                  e.token0_decimals,
                                  e.token1_decimals
                                )[0],
                                Number(e.token0_decimals)
                              )
                            ),
                            " ",
                            e.token0_symbol,
                            " ",
                          ],
                        }),
                        (0, n.jsxs)("span", {
                          children: [
                            (0, v.Xh)(
                              (0, _.b)(
                                calculateTokenAmounts(
                                  (
                                    parseFloat(e.account_lp_balance) +
                                    parseFloat(e.account_gauge_balance)
                                  ).toString(),
                                  e.reserve0,
                                  e.reserve1,
                                  e.total_supply,
                                  e.token0_decimals,
                                  e.token1_decimals
                                )[1],
                                Number(e.token1_decimals)
                              )
                            ),
                            " ",
                            e.token1_symbol,
                          ],
                        }),
                      ],
                    })
                : void 0,
          },
          {
            title: "",
            dataIndex: "operation",
            key: "operation",
            width: "23%",
            align: "center",
            className: A ? "" : "!pr-0",
            render: (e, t, a) =>
              (0, n.jsx)("div", {
                className: "flex flex-row flex-wrap gap-2.5",
                children:
                  A && i
                    ? (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsx)("button", {
                            disabled:
                              !A ||
                              (0 === parseFloat(e.account_lp_balance) &&
                                0 === parseFloat(e.account_gauge_balance)),
                            onClick: () => {
                              f(!0), y(a);
                            },
                            className: "offButton",
                            children: "Stake Manage",
                          }),
                          (0, n.jsx)("button", {
                            className: "offButton",
                            onClick: () => {
                              r(e);
                            },
                            children: "Add",
                          }),
                        ],
                      })
                    : (0, n.jsx)(j.C, { noTitle: !0 }),
              }),
          },
        ];
        return (0, n.jsxs)(n.Fragment, {
          children: [
            e.loading
              ? (0, n.jsx)("div", {
                  className: "w-full text-center mt-12",
                  children: (0, n.jsx)("span", {
                    className: "loading loading-bars loading-lg",
                  }),
                })
              : 0 === e.data.length
              ? (0, n.jsx)("div", {
                  className: "flex flex-col items-center mt-12 text-[#7f7f7f]",
                  children: (0, n.jsx)("span", { children: "No Data" }),
                })
              : (0, n.jsxs)(n.Fragment, {
                  children: [
                    (0, n.jsx)(N.Z, {
                      hairstyle: "white",
                      ref: X,
                      columns: z,
                      dataSource: W,
                    }),
                    A &&
                      (0, n.jsxs)(k.Z, {
                        id: "echo_nft",
                        className: "hidden md:block",
                        open: h,
                        setOpen: () => {
                          d || f(!1);
                        },
                        children: [
                          (0, n.jsx)("div", {}),
                          (p || 0 === p) &&
                            W.length &&
                            h &&
                            (0, n.jsx)(extras_ManageLpStaking, {
                              closeModal: () => {
                                f(!1);
                              },
                              updateOpen: (e) => {
                                c(e);
                              },
                              lp: W[p],
                              updateModal: (e) => f(e),
                            }),
                        ],
                      }),
                  ],
                }),
            (0, n.jsx)(S.Z, {
              currentPage: R,
              itemsPerPage: u,
              totalItems:
                (null === (a = e.data) || void 0 === a ? void 0 : a.length) ||
                0,
              onPageChange: (e) => {
                B(e);
              },
              onItemsPerPageChange: (e) => {
                m(e), B(1);
              },
            }),
          ],
        });
      });
      var P = a(16691),
        A = a.n(P),
        O = a(49600),
        M = a(71839),
        L = a(92980),
        E = a(62936),
        R = a(56129),
        B = a(38425),
        F = a(68143),
        X = a.n(F),
        extras_ManageLiquidity = (e) => {
          var t, a, l, i, o, r, d, c, y, b, _, N, T, S;
          let {
              liquidityPoolsBalance: I,
              openRemove: C,
              updateOpen: P,
              updateModal: F,
              refreshList: q,
              entirePairs: D,
              open: W,
              addTokenA: z,
              addTokenB: Z,
              addStable: V,
            } = e,
            U = new f.Z(2).pow(256).minus(1).toFixed(0),
            {
              address: $,
              approvedAmount: Y,
              voterApprovedAmount: J,
              lpApprovedAmount: H,
              fetchAllowance: G,
              fetchLpAllowance: K,
              fetchGaugeAllowance: Q,
              fetchVoteAllowance: ee,
              approve: et,
              fetchPoolAddress: ea,
              approveGauge: en,
              approveRouter: es,
              chain: el,
              isLoadingLiquidity: ei,
              isLiquidityPoolExists: eo,
              estimatedAmountInTokenB: er,
              fetchLiquidityPoolExistence: ed,
              PoolExistence: ec,
              getPair: eu,
              createPair: em,
              addLiquidity: ep,
              removeLiquidity: ex,
              createGauge: ey,
              GaugeDeposit: eh,
              fetchPoolBalance: ef,
              fetchGaugeAddress: eb,
              fetchData: ev,
            } = (0, x.useLiquidity)(),
            {
              balances: eg,
              initial: ew,
              isLoading: e_,
              prices: ek,
            } = (0, L.useTokenContext)(),
            [ej, eN] = (0, s.useState)(
              B.M[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689].tokenA
            ),
            [eT, eS] = (0, s.useState)(
              B.M[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689].tokenB
            ),
            [eI, eC] = (0, s.useState)(!1),
            [eP, eA] = (0, s.useState)(null),
            eO = [0.25, 0.5, 0.75, 1],
            [eM, eL] = (0, s.useState)(0),
            [eE, eR] = (0, s.useState)(),
            [eB, eF] = (0, s.useState)("Deposit"),
            [eX, eq] = (0, s.useState)(!1),
            [eD, eW] = (0, s.useState)(!1),
            [ez, eZ] = (0, s.useState)(!1),
            [eV, eU] = (0, s.useState)(!1),
            [e$, eY] = (0, s.useState)(!1),
            [eJ, eH] = (0, s.useState)(!1),
            [eG, eK] = (0, s.useState)(!1),
            [eQ, e0] = (0, s.useState)(20),
            [e1, e2] = (0, s.useState)(0),
            [e6, e5] = (0, s.useState)(!1),
            [e4, e8] = (0, s.useState)(BigInt(0)),
            [e7, e3] = (0, s.useState)(0),
            [e9, te] = (0, s.useState)(0),
            [tt, ta] = (0, s.useState)("0"),
            [tn, ts] = (0, s.useState)("0"),
            [tl, ti] = (0, s.useState)(BigInt(U)),
            [to, tr] = (0, s.useState)(BigInt(U)),
            [td, tc] = (0, s.useState)(BigInt(0)),
            [tu, tm] = (0, s.useState)([]),
            [tp, tx] = (0, s.useState)(!1),
            [ty, th] = (0, s.useState)(!1),
            [tf, tb] = (0, s.useState)(!1),
            [tv, tg] = (0, s.useState)(!1),
            [tw, t_] = (0, s.useState)(!1),
            [tk, tj] = (0, s.useState)(!1),
            [tN, tT] = (0, s.useState)(!1),
            [tS, tI] = (0, s.useState)(!1),
            [tC, tP] = (0, s.useState)("0"),
            [tA, tO] = (0, s.useState)("0"),
            [tM, tL] = (0, s.useState)(!1),
            [tE, tR] = (0, s.useState)(!1),
            [tB, tF] = (0, s.useState)(!1),
            [tX, tq] = (0, s.useState)(!1),
            [tD, tW] = (0, s.useState)(""),
            [tz, tZ] = (0, s.useState)(""),
            [tV, tU] = (0, s.useState)(0.1),
            [t$, tY] = (0, s.useState)(
              B.M[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689].tokenA
                .address
            ),
            [tJ, tH] = (0, s.useState)(
              B.M[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689].tokenB
                .address
            ),
            [tG, tK] = (0, s.useState)(30),
            [tQ, t0] = (0, s.useState)(""),
            [t1, t2] = (0, s.useState)(""),
            [t6, t5] = (0, s.useState)(!1),
            t4 = (0, g.useToastError)(),
            t8 = (0, g.useToastSuccess)(),
            t7 = (0, s.useRef)(null),
            t3 = (0, s.useRef)(""),
            t9 = (0, s.useRef)("");
          async function fetchData(e, t) {
            if ($)
              try {
                let a = (await G(e, $)) || BigInt(0);
                0 === t && ti(a), 1 === t && tr(a);
              } catch (e) {
                console.error("Failed to fetch data:", e);
              }
          }
          async function fetchRouterAllowance() {
            if (I[eM] && $) {
              let e = await K(I[eM].pair_address, $);
              tc(e);
            }
          }
          (0, s.useEffect)(() => {
            C && eF("Remove");
          }, [C]),
            (0, s.useEffect)(() => {
              eV || e$ ? P(!0) : P(!1),
                t7.current && (clearTimeout(t7.current), (t7.current = null));
            }, [eV, e$]),
            (0, s.useEffect)(() => {
              let setPool = async () => {
                eC(!0), eK(V || !1);
                let e = eg.find(
                  (e) => e.address.toLowerCase() === z.toLowerCase()
                );
                e && (eN(e), tY(e.address)),
                  setTimeout(() => {
                    ta(e.balance.toString());
                  }, 500);
                let t = eg.find(
                  (e) => e.address.toLowerCase() === Z.toLowerCase()
                );
                t && (eS(t), tH(t.address)),
                  setTimeout(() => {
                    ts(t.balance.toString());
                  }, 500),
                  setTimeout(async () => {
                    try {
                      await fetchPoolExistence(e.address, t.address, V);
                    } finally {
                      setTimeout(() => {
                        eC(!1);
                      }, 200);
                    }
                  }, 500);
              };
              z && Z && setPool();
            }, []),
            (0, s.useEffect)(() => {
              setBalances(),
                handleTokenFetchData(ej, 0),
                handleTokenFetchData(eT, 1);
            }, [ej, eT]),
            (0, s.useEffect)(() => {
              if (eE) {
                let e = (0, p.bM)(
                    eE.reserve0.toString(),
                    Number(eE.token0_decimals)
                  ),
                  t = (0, p.bM)(
                    eE.reserve1.toString(),
                    Number(eE.token1_decimals)
                  ),
                  a = new f.Z(e || 0).div(new f.Z(t || 1)),
                  n = new f.Z(t || 0).div(new f.Z(e || 1));
                (t3.current = a.toFixed()), (t9.current = n.toFixed()), ae(tC);
              }
            }, [eE]);
          let setBalances = () => {
              ej.balance && ta(ej.balance.toString()),
                eT.balance && ts(eT.balance.toString());
            },
            handleTokenFetchData = (e, t) => {
              "IOTX" !== e.symbol
                ? fetchData(e.address, t)
                : 0 === t
                ? ti(BigInt(U))
                : 1 === t && tr(BigInt(U));
            },
            handleEstimatedAmountA = (e) => {
              e && Number(e)
                ? (tP(e), e3(parseFloat(e)))
                : Number(e) || (e3(0), tP("0"));
            },
            handleEstimatedAmountB = (e) => {
              e && Number(e)
                ? (tO(e), te(parseFloat(e)))
                : Number(e) || (te(0), tO("0"));
            },
            ae = (0, s.useCallback)(
              X()((e) => {
                if (!Number(e)) {
                  handleEstimatedAmountB("0");
                  return;
                }
                try {
                  var t, a, n;
                  let s =
                      R.x[
                        (null == el ? void 0 : el.id) === 4689 ? el.id : 4689
                      ],
                    l = s.IOTX.toLowerCase(),
                    i = s.WRAPPED_IOTX.toLowerCase(),
                    o =
                      (null == ej
                        ? void 0
                        : null === (t = ej.address) || void 0 === t
                        ? void 0
                        : t.toLowerCase()) === l
                        ? i
                        : null == ej
                        ? void 0
                        : null === (a = ej.address) || void 0 === a
                        ? void 0
                        : a.toLowerCase(),
                    r =
                      null == eE
                        ? void 0
                        : null === (n = eE.token0) || void 0 === n
                        ? void 0
                        : n.toLowerCase(),
                    d = aa(e, o === r);
                  d ? handleEstimatedAmountB(d) : handleEstimatedAmountB("0");
                } catch (e) {}
              }, 300),
              [ej, eT, eE, el]
            ),
            at = (0, s.useCallback)(
              X()((e) => {
                if (!Number(e)) {
                  handleEstimatedAmountA("0");
                  return;
                }
                try {
                  var t, a, n;
                  let s =
                      R.x[
                        (null == el ? void 0 : el.id) === 4689 ? el.id : 4689
                      ],
                    l = s.IOTX.toLowerCase(),
                    i = s.WRAPPED_IOTX.toLowerCase(),
                    o =
                      (null == ej
                        ? void 0
                        : null === (t = ej.address) || void 0 === t
                        ? void 0
                        : t.toLowerCase()) === l
                        ? i
                        : null == ej
                        ? void 0
                        : null === (a = ej.address) || void 0 === a
                        ? void 0
                        : a.toLowerCase(),
                    r =
                      o !==
                      (null == eE
                        ? void 0
                        : null === (n = eE.token0) || void 0 === n
                        ? void 0
                        : n.toLowerCase()),
                    d = aa(e, r);
                  d ? handleEstimatedAmountA(d) : handleEstimatedAmountA("0");
                } catch (e) {}
              }, 300),
              [ej, eT, eE]
            ),
            aa = (0, s.useCallback)(
              (e, t) => {
                let a = new f.Z(e),
                  n = new f.Z(t ? t9.current : t3.current),
                  s = a.times(n);
                return s.toFixed();
              },
              [t9, t3]
            ),
            fetchPoolExistence = async (e, t, a) => {
              try {
                t5(!0);
                let n = await ea(e, t, a);
                if (n === E.DR) return;
                let s = await eu(n, $);
                return eR(s), s;
              } catch (e) {
                return null;
              } finally {
                setTimeout(() => {
                  t5(!1);
                }, 300);
              }
            };
          (0, s.useEffect)(() => {
            fetchPoolExistence(t$, tJ, eG);
          }, [t$, tJ, eG]),
            (0, s.useEffect)(() => {
              let e =
                  R.x[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689],
                t = e.IOTX,
                a = e.WRAPPED_IOTX,
                n = ej.address === t ? a : ej.address,
                s = eT.address === t ? a : eT.address,
                l =
                  null == D
                    ? void 0
                    : D.some((e) => {
                        var t, a, l, i;
                        return (
                          (((null == e
                            ? void 0
                            : null === (t = e.token0) || void 0 === t
                            ? void 0
                            : t.toLowerCase()) ===
                            (null == n ? void 0 : n.toLowerCase()) &&
                            (null == e
                              ? void 0
                              : null === (a = e.token1) || void 0 === a
                              ? void 0
                              : a.toLowerCase()) ===
                              (null == s ? void 0 : s.toLowerCase())) ||
                            ((null == e
                              ? void 0
                              : null === (l = e.token0) || void 0 === l
                              ? void 0
                              : l.toLowerCase()) ===
                              (null == s ? void 0 : s.toLowerCase()) &&
                              (null == e
                                ? void 0
                                : null === (i = e.token1) || void 0 === i
                                ? void 0
                                : i.toLowerCase()) === n.toLowerCase())) &&
                          e.stable === eG
                        );
                      });
              e5(l);
            }, [ej, eT, eG, W, el]),
            (0, s.useEffect)(() => {
              if (eg && !e_) {
                var e, t;
                let a =
                    (null === (e = eg.find((e) => e.address === ej.address)) ||
                    void 0 === e
                      ? void 0
                      : e.balance) || "0",
                  n =
                    (null === (t = eg.find((e) => e.address === eT.address)) ||
                    void 0 === t
                      ? void 0
                      : t.balance) || "0";
                tm(eg),
                  eN((e) => ({ ...e, balance: a })),
                  eS((e) => ({ ...e, balance: n }));
              }
            }, [eg, e_]),
            (0, s.useEffect)(() => {
              if (I[eM] && "Withdraw" === eB) {
                var e;
                let t =
                    ((null === (e = I[eM]) || void 0 === e
                      ? void 0
                      : e.account_lp_balance) *
                      BigInt(eQ)) /
                    100n,
                  a = (0, v.Ve)((0, m.d)(t));
                e8(t), e2(a);
              }
              fetchRouterAllowance(), tc(H);
            }, [eQ, eM, H, eB]);
          let an = (0, s.useMemo)(() => {
              var e, t, a, n, s, l, i, o, r;
              let d = new f.Z(e1).times(1e18),
                c = calculateTokenAmounts(
                  BigInt(d.toFixed()),
                  null === (e = I[eM]) || void 0 === e ? void 0 : e.reserve0,
                  null === (t = I[eM]) || void 0 === t ? void 0 : t.reserve1,
                  null === (a = I[eM]) || void 0 === a
                    ? void 0
                    : a.total_supply,
                  null === (n = I[eM]) || void 0 === n
                    ? void 0
                    : n.token0_decimals,
                  null === (s = I[eM]) || void 0 === s
                    ? void 0
                    : s.token1_decimals
                ),
                u = calculateTotalValue(
                  ek,
                  null === (l = I[eM]) || void 0 === l
                    ? void 0
                    : l.token0_symbol,
                  parseFloat(
                    (0, p.bM)(
                      c[0],
                      null === (i = I[eM]) || void 0 === i
                        ? void 0
                        : i.token0_decimals
                    )
                  ).toFixed(4),
                  "",
                  ""
                ),
                m = calculateTotalValue(
                  ek,
                  null === (o = I[eM]) || void 0 === o
                    ? void 0
                    : o.token0_symbol,
                  parseFloat(
                    (0, p.bM)(
                      c[1],
                      null === (r = I[eM]) || void 0 === r
                        ? void 0
                        : r.token1_decimals
                    )
                  ).toFixed(4),
                  "",
                  ""
                ),
                x = (0, v.Xh)(u, 4, !0),
                y = (0, v.Xh)(m, 4, !0);
              return [x, y];
            }, [e1, ek, I, eM]),
            as = (0, s.useMemo)(() => {
              if (!e1 || !I[eM]) return 0;
              {
                var e, t, a, n, s, l;
                let i = new f.Z(e1).times(1e18);
                return (0, v.Xh)(
                  (0, p.bM)(
                    calculateTokenAmounts(
                      BigInt(i.toFixed()),
                      null === (e = I[eM]) || void 0 === e
                        ? void 0
                        : e.reserve0,
                      null === (t = I[eM]) || void 0 === t
                        ? void 0
                        : t.reserve1,
                      null === (a = I[eM]) || void 0 === a
                        ? void 0
                        : a.total_supply,
                      null === (n = I[eM]) || void 0 === n
                        ? void 0
                        : n.token0_decimals,
                      null === (s = I[eM]) || void 0 === s
                        ? void 0
                        : s.token1_decimals
                    )[0],
                    null === (l = I[eM]) || void 0 === l
                      ? void 0
                      : l.token0_decimals
                  ),
                  4,
                  !0
                );
              }
            }, [e1]),
            al = (0, s.useMemo)(() => {
              if (!e1 || !I[eM]) return 0;
              {
                var e, t, a, n, s, l;
                let i = new f.Z(e1).times(1e18);
                return (0, v.Xh)(
                  (0, p.bM)(
                    calculateTokenAmounts(
                      BigInt(i.toFixed()),
                      null === (e = I[eM]) || void 0 === e
                        ? void 0
                        : e.reserve0,
                      null === (t = I[eM]) || void 0 === t
                        ? void 0
                        : t.reserve1,
                      null === (a = I[eM]) || void 0 === a
                        ? void 0
                        : a.total_supply,
                      null === (n = I[eM]) || void 0 === n
                        ? void 0
                        : n.token0_decimals,
                      null === (s = I[eM]) || void 0 === s
                        ? void 0
                        : s.token1_decimals
                    )[1],
                    null === (l = I[eM]) || void 0 === l
                      ? void 0
                      : l.token1_decimals
                  ),
                  4,
                  !0
                );
              }
            }, [e1]);
          async function handleAddLiquidity() {
            let e = R.x[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689];
            try {
              var t, a;
              tg(!0), tT(!0), tI(!0), tW("loading"), tx(!0), tF(!1);
              let n =
                  (null == ej ? void 0 : ej.address) === e.IOTX
                    ? e.WRAPPED_IOTX
                    : ej.address,
                s =
                  (null == eT ? void 0 : eT.address) === e.IOTX
                    ? e.WRAPPED_IOTX
                    : eT.address,
                l = BigInt((0, v.og)(tC, ej.decimals)),
                i = BigInt((0, v.og)(tA, eT.decimals)),
                o = eg.find((e) => n === e.address),
                r = (null == o ? void 0 : o.decimals) ? l : BigInt(U);
              (null == ej
                ? void 0
                : null === (t = ej.address) || void 0 === t
                ? void 0
                : t.toLowerCase()) !== e.IOTX.toLowerCase() &&
                parseFloat(tl.toString()) < parseFloat(l.toString()) &&
                (await et(n, r),
                fetchData(ej.address, 0),
                fetchData(eT.address, 1)),
                tg(!1);
              let d = eg.find((e) => s === e.address),
                c = (null == d ? void 0 : d.decimals) ? i : BigInt(U);
              (null == eT
                ? void 0
                : null === (a = eT.address) || void 0 === a
                ? void 0
                : a.toLowerCase()) !== e.IOTX.toLowerCase() &&
                parseFloat(to.toString()) < parseFloat(i.toString()) &&
                (await et(s, c),
                fetchData(ej.address, 0),
                fetchData(eT.address, 1)),
                tT(!1);
              let u = await ef($, ej.address, eT.address, eG);
              (null == u ? void 0 : u.pairFor) ===
                "0x0000000000000000000000000000000000000000" &&
                (await em(n, s, eG), tI(!1)),
                await new Promise((e) => setTimeout(e, 5e3)),
                tI(!1);
              let m = await ep($, ej.address, eT.address, eG, l, i, tV);
              t8(
                "Deposit Successfully",
                "You deposit "
                  .concat(e7, "  ")
                  .concat(ej.symbol, " and ")
                  .concat(e9, "  ")
                  .concat(eT.symbol, " to the pool  ")
                  .concat(ej.symbol, " /  ")
                  .concat(eT.symbol, " "),
                1,
                m
              ),
                tx(!1),
                setTimeout(() => {
                  ev();
                }, 8e3),
                (t7.current = setTimeout(() => {
                  eU(!1);
                }, 5e3));
            } catch (e) {
              console.log(e),
                t4(e),
                tF(!0),
                tg(!1),
                tT(!1),
                tI(!1),
                tx(!1),
                tW("rejected"),
                (t7.current = setTimeout(() => {
                  eU(!1);
                }, 5e3));
            }
          }
          async function handleRemoveLiquidity() {
            try {
              var e, t, a;
              if (
                (tW("loading"),
                tb(!0),
                tq(!0),
                tF(!1),
                td <
                  (null === (e = I[eM]) || void 0 === e
                    ? void 0
                    : e.account_lp_balance))
              ) {
                let e = await es(
                  null === (a = I[eM]) || void 0 === a
                    ? void 0
                    : a.pair_address,
                  e4
                );
                if (!e) throw Error("Failed to approve Lp");
                await fetchRouterAllowance(), tb(!1);
              }
              tb(!1);
              let n = await ex(
                $,
                I[eM].token0,
                I[eM].token1,
                I[eM].stable,
                e4,
                tV
              );
              t8(
                "Remove Liquidity Successfully",
                "You Remove "
                  .concat(e1, " of ")
                  .concat(
                    null === (t = I[eM]) || void 0 === t ? void 0 : t.symbol
                  ),
                1,
                n,
                8e3
              ),
                tq(!1),
                tF(!1),
                100 == eQ && (eF("Remove"), eZ(!0)),
                setTimeout(() => {
                  ev(),
                    setTimeout(() => {
                      eZ(!1);
                    }, 1e3);
                }, 8e3),
                (t7.current = setTimeout(() => {
                  eY(!1);
                }, 5e3));
            } catch (e) {
              console.log("error adding liquidity and deposit", e),
                tF(!0),
                t4(e),
                tb(!1),
                tq(!1),
                tW("rejected"),
                (t7.current = setTimeout(() => {
                  eY(!1);
                }, 5e3));
            }
          }
          (0, s.useEffect)(() => {
            eA(
              (function (e) {
                let t =
                    R.x[(null == el ? void 0 : el.id) === 4689 ? el.id : 4689],
                  a = ej.address,
                  n = eT.address;
                return (t && ej.address === t.IOTX && (a = t.WRAPPED_IOTX),
                t && eT.address === t.IOTX && (n = t.WRAPPED_IOTX),
                e)
                  ? e.filter(
                      (e) =>
                        (e.token0 === a && e.token1 === n && e.stable === eG) ||
                        (e.token0 === n && e.token1 === a && e.stable === eG)
                    )
                  : null;
              })(I)
            );
          }, [ej.address, eT.address, eG, el]);
          let [ai, ao] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            ao(e7 > Number(tt) || e9 > Number(tn));
          }, [e7, e9, tt, tn]);
          let [ar, ad] = (0, s.useState)(!0);
          function calculateTokenAmounts(e, t, a, n, s, l) {
            if (!e || !t || !a || !n || !s || !l) return [BigInt(0), BigInt(0)];
            let i = t * BigInt(10 ** (18 - Number(s))),
              o = a * BigInt(10 ** (18 - Number(l)));
            return n !== BigInt(0)
              ? [
                  (e * i) / n / BigInt(10 ** (18 - Number(s))),
                  (e * o) / n / BigInt(10 ** (18 - Number(l))),
                ]
              : [BigInt(0), BigInt(0)];
          }
          function calculateTotalValue(e, t, a, n, s) {
            let l = 0;
            for (let i of e)
              if (i.symbol === t) {
                let e = parseFloat(a),
                  t = i.price;
                l += e * t;
              } else if (i.symbol === n) {
                let e = parseFloat(s),
                  t = i.price;
                l += e * t;
              }
            return l;
          }
          return (
            (0, s.useEffect)(() => {
              ad(!!(e7 <= 0 || e9 <= 0));
            }, [e7, e9]),
            (0, n.jsxs)("div", {
              className: "modalInner",
              children: [
                (0, n.jsxs)("div", {
                  className:
                    "flex flex-row items-center justify-between w-full",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "flex flex-row justify-between",
                      children: [
                        (0, n.jsx)("button", {
                          className: "pr-2",
                          onClick: () => {
                            "Withdraw" === eB ? eF("Remove") : F(!1);
                          },
                          children: (0, n.jsx)(h.D6, {}),
                        }),
                        (0, n.jsx)("span", {
                          className: "modalTitle",
                          children: "Manage Liquidity",
                        }),
                      ],
                    }),
                    (0, n.jsxs)(k.Z, {
                      id: "advance_setting",
                      open: eJ,
                      setOpen: () => eH(!1),
                      children: [
                        (0, n.jsx)("button", {
                          onClick: () => eH(!0),
                          className:
                            "btn btn-neutral  hover:border-none p-0 border-none min-h-0 h-5",
                          children: (0, n.jsx)(h.k0, {}),
                        }),
                        (0, n.jsx)(M.Z, {
                          updateModal: (e) => eH(e),
                          tolerance: tV,
                          setTolerance: tU,
                          deadline: tG,
                          setDeadline: tK,
                        }),
                      ],
                    }),
                  ],
                }),
                (0, n.jsxs)("div", {
                  className:
                    "w-full mt-[25px] border border-[#2bdfb4] min-h-[46px] flex flex-wrap justify-between overflow-hidden items-center rounded-full h-[46px]",
                  children: [
                    (0, n.jsx)("div", {
                      onClick: () => eF("Deposit"),
                      className: "tabItem !w-1/2 ".concat(
                        "Deposit" === eB ? "tabItemActive" : ""
                      ),
                      children: "Deposit",
                    }),
                    (0, n.jsx)("div", {
                      onClick: () => eF("Remove"),
                      className: "tabItem !w-1/2 ".concat(
                        "Remove" === eB || "Withdraw" === eB
                          ? "tabItemActive"
                          : ""
                      ),
                      children: "Remove",
                    }),
                  ],
                }),
                !e6 &&
                  "Deposit" === eB &&
                  (0, n.jsxs)("div", {
                    className:
                      "w-full p-2 mt-[20px] text-sm text-blue bg-blue bg-opacity-20 rounded-[12px] flex flex-col",
                    children: [
                      (0, n.jsx)("span", {
                        style: { fontFamily: "Outfit-SemiBold" },
                        children: "You are the first liquidity provider.",
                      }),
                      (0, n.jsx)("span", {
                        style: { fontFamily: "Outfit-Thin" },
                        children:
                          "The ratio of tokens you add will set the price of this pool. ",
                      }),
                      (0, n.jsx)("span", {
                        style: { fontFamily: "Outfit-Thin" },
                        children:
                          "Once you are happy with the rate click supply to review.",
                      }),
                    ],
                  }),
                (0, n.jsxs)("div", {
                  className: "w-full mt-[25px] flex flex-wrap overflow-y-auto",
                  children: [
                    "Deposit" === eB &&
                      (0, n.jsxs)(n.Fragment, {
                        children: [
                          (0, n.jsxs)("div", {
                            className: "w-full flex flex-row  ",
                            children: [
                              (0, n.jsx)("button", {
                                onClick: () => !eG && eK(!0),
                                className: "filterBtn ".concat(
                                  !0 === eG ? "filterBtnActive" : ""
                                ),
                                children: "Stable",
                              }),
                              (0, n.jsx)("button", {
                                onClick: () => eG && eK(!1),
                                className: "filterBtn ".concat(
                                  !1 === eG ? "filterBtnActive" : ""
                                ),
                                children: "Volatile",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "modalItem",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-row flex-wrap justify-between items-center",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "text-[12px] text-[#7e7e7e] leading-[16px]",
                                    children: [
                                      "Balance: ",
                                      (0, v.Xh)(tt, 4, !0),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex flex-row gap-2",
                                    children: eO.map((e, t) =>
                                      (0, n.jsx)(
                                        "div",
                                        {
                                          children: (0, n.jsxs)("button", {
                                            onClick: () => {
                                              if (eI) return;
                                              let t = new f.Z(tt),
                                                a = new f.Z(e),
                                                n = t.times(a);
                                              e3(n.toNumber() || 0),
                                                tP(n.toString() || "0"),
                                                e6 && ae(n.toString() || "0");
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
                              (0, n.jsxs)("div", {
                                className:
                                  "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                                children: [
                                  (0, n.jsxs)(k.Z, {
                                    id: "choose_tokenA",
                                    className: "w-full",
                                    open: eX,
                                    setOpen: () => eq(!1),
                                    children: [
                                      (0, n.jsxs)("button", {
                                        onClick: () => eq(!0),
                                        className: "tokenBtn",
                                        children: [
                                          (0, n.jsx)(A(), {
                                            loading: "lazy",
                                            "data-src": ej.logoURI,
                                            className: "lazyload rounded-full",
                                            src: ej.logoURI,
                                            alt: ej.name,
                                            width: 20,
                                            height: 21,
                                          }),
                                          (0, n.jsxs)("span", {
                                            className: "".concat(
                                              u().token_selection,
                                              " w-max"
                                            ),
                                            children: [" ", ej.symbol, " "],
                                          }),
                                          (0, n.jsx)("div", {
                                            children: (0, n.jsx)(h.BD, {}),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)(O.Z, {
                                        filter_button: !0,
                                        otherAddress: tJ,
                                        balances: tu,
                                        prices: ek,
                                        isLoading: e_,
                                        handleToken: (e) => {
                                          let t = JSON.parse(
                                              JSON.stringify(ej)
                                            ),
                                            a = JSON.parse(JSON.stringify(eT));
                                          e.address === a.address
                                            ? (eS(t),
                                              eN(a),
                                              tY(a.address),
                                              tH(t.address))
                                            : (eN(e), tY(e.address));
                                        },
                                        updateModal: (e) => eq(e),
                                      }),
                                    ],
                                  }),
                                  eI || (!eE && e6)
                                    ? (0, n.jsx)("span", {
                                        className:
                                          "loading loading-bars loading-sm",
                                      })
                                    : (0, n.jsx)("input", {
                                        type: "text",
                                        value: tC,
                                        onFocus: (e) => {
                                          0 === e7 && tP("");
                                        },
                                        onBlur: (e) => {
                                          "" === e.target.value &&
                                            tP(e7.toString());
                                        },
                                        onChange: (e) => {
                                          let t = e.target.value;
                                          if (
                                            /^\d*\.?\d*$/.test(t) ||
                                            "" === t
                                          ) {
                                            if ("" === t) e3(0), tP("");
                                            else {
                                              let e = (0, v.Md)(t, 13);
                                              e3(e), tP(t);
                                            }
                                            e6 && ae(t);
                                          }
                                        },
                                        className: "inputStyle",
                                      }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className: "modalItem !mt-[14px]",
                            children: [
                              (0, n.jsxs)("div", {
                                className:
                                  "flex flex-row flex-wrap justify-between items-center",
                                children: [
                                  (0, n.jsx)("div", {
                                    children: (0, n.jsxs)("p", {
                                      className:
                                        "text-[12px] text-[#7e7e7e] leading-[16px]",
                                      children: [
                                        "Balance: ",
                                        (0, v.Xh)(tn, 4, !0),
                                        " ",
                                      ],
                                    }),
                                  }),
                                  (0, n.jsx)("div", {
                                    className: "flex flex-row gap-2",
                                    children: eO.map((e, t) =>
                                      (0, n.jsx)(
                                        "div",
                                        {
                                          children: (0, n.jsxs)("button", {
                                            onClick: () => {
                                              if (eI) return;
                                              let t = new f.Z(tn),
                                                a = new f.Z(e),
                                                n = t.times(a);
                                              te(n.toNumber() || 0),
                                                tO(n.toString() || "0"),
                                                e6 && at(n.toString() || "0");
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
                              (0, n.jsxs)("div", {
                                className:
                                  "pt-2.5 pb-2.5 flex flex-row items-center justify-between",
                                children: [
                                  (0, n.jsxs)(k.Z, {
                                    id: "choose_tokenB",
                                    className: "w-full",
                                    open: eD,
                                    setOpen: () => eW(!1),
                                    children: [
                                      (0, n.jsxs)("button", {
                                        onClick: () => eW(!0),
                                        className: "tokenBtn",
                                        children: [
                                          (0, n.jsx)(A(), {
                                            loading: "lazy",
                                            "data-src": eT.logoURI,
                                            className: "lazyload rounded-full",
                                            src: eT.logoURI,
                                            alt: eT.name,
                                            width: 20,
                                            height: 21,
                                          }),
                                          (0, n.jsxs)("span", {
                                            className: "".concat(
                                              u().token_selection,
                                              " w-max"
                                            ),
                                            children: [" ", eT.symbol, " "],
                                          }),
                                          (0, n.jsx)("div", {
                                            children: (0, n.jsx)(h.BD, {}),
                                          }),
                                        ],
                                      }),
                                      (0, n.jsx)(O.Z, {
                                        filter_button: !0,
                                        otherAddress: t$,
                                        prices: ek,
                                        balances: tu,
                                        isLoading: e_,
                                        handleToken: (e) => {
                                          let t = JSON.parse(
                                              JSON.stringify(ej)
                                            ),
                                            a = JSON.parse(JSON.stringify(eT));
                                          e.address === t.address
                                            ? (eS(t),
                                              eN(a),
                                              tY(a.address),
                                              tH(t.address))
                                            : (eS(e), tH(e.address));
                                        },
                                        updateModal: (e) => eW(e),
                                      }),
                                    ],
                                  }),
                                  eI || (!eE && e6)
                                    ? (0, n.jsx)("span", {
                                        className:
                                          "loading loading-bars loading-sm",
                                      })
                                    : (0, n.jsx)("input", {
                                        type: "text",
                                        value: tA,
                                        onFocus: (e) => {
                                          0 === e9 && tO("");
                                        },
                                        onBlur: (e) => {
                                          "" === e.target.value &&
                                            tO(e7.toString());
                                        },
                                        onChange: (e) => {
                                          let t = e.target.value;
                                          if (
                                            /^\d*\.?\d*$/.test(t) ||
                                            "" === t
                                          ) {
                                            if ("" === t) te(0), tO("");
                                            else {
                                              let e = (0, v.Md)(t, 13);
                                              te(e), tO(t);
                                            }
                                            e6 && at(t);
                                          }
                                        },
                                        className: "inputStyle",
                                      }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "w-full flex flex-wrap flex-col mt-[10px] justify-between",
                            children: [
                              (0, n.jsx)("div", {
                                className: "liquidityTitle",
                                children: "Reserve Info",
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-full flex flex-row items-center justify-between pt-[6px]",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: [
                                          " ",
                                          e6
                                            ? eE
                                              ? (0, v.Xh)(
                                                  (0, p.bM)(
                                                    eE.reserve0.toString(),
                                                    Number(eE.token0_decimals)
                                                  ),
                                                  4,
                                                  !0
                                                )
                                              : "0"
                                            : "-",
                                          "  ",
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: [
                                          " ",
                                          e6
                                            ? eE
                                              ? eE.token0_symbol
                                              : ""
                                            : ej.symbol,
                                          " ",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "text-center",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: e6
                                          ? eE
                                            ? (0, v.Xh)(
                                                (0, p.bM)(
                                                  eE.reserve1.toString(),
                                                  Number(eE.token1_decimals)
                                                ).toString(),
                                                4,
                                                !0
                                              )
                                            : "0"
                                          : "-",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: [
                                          " ",
                                          e6
                                            ? eE
                                              ? eE.token1_symbol
                                              : ""
                                            : eT.symbol,
                                          " ",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "text-right",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: ["  ", tV, " % "],
                                      }),
                                      (0, n.jsx)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: "Slippage",
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "w-full flex flex-wrap mt-[20px] justify-between",
                            children: [
                              (0, n.jsx)("div", {
                                className: "liquidityTitle",
                                children: "Your Balance",
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-full flex flex-row items-center justify-between pt-[6px]",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "w-1/2 flex flex-col text-stone-400 py-1",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: e6
                                          ? eE
                                            ? (0, v.Xh)(
                                                (0, p.bM)(
                                                  eE.account_lp_balance.toString(),
                                                  18
                                                ),
                                                4,
                                                !0
                                              )
                                            : "0"
                                          : "-",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: [
                                          "Pooled ",
                                          e6
                                            ? eE
                                              ? ""
                                                  .concat(
                                                    (null == eE
                                                      ? void 0
                                                      : eE.token0_symbol) || "",
                                                    "/"
                                                  )
                                                  .concat(
                                                    (null == eE
                                                      ? void 0
                                                      : eE.token1_symbol) || ""
                                                  )
                                              : "Unknown"
                                            : ""
                                                .concat(
                                                  (null == ej
                                                    ? void 0
                                                    : ej.symbol) || "",
                                                  "/"
                                                )
                                                .concat(
                                                  (null == eT
                                                    ? void 0
                                                    : eT.symbol) || ""
                                                ),
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className:
                                      "w-1/2 flex items-end flex-col text-stone-400 py-1",
                                    children: [
                                      (0, n.jsx)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: e6
                                          ? eE
                                            ? (0, v.Xh)(
                                                (0, p.bM)(
                                                  eE.account_gauge_balance.toString(),
                                                  18
                                                ),
                                                4,
                                                !0
                                              )
                                            : "0"
                                          : "-",
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "max-w-full break-words text-[12px] text-[#7e7e7e] leading-[20px]",
                                        children: [
                                          "Staked ",
                                          e6
                                            ? eE
                                              ? ""
                                                  .concat(
                                                    (null == eE
                                                      ? void 0
                                                      : eE.token0_symbol) || "",
                                                    "/"
                                                  )
                                                  .concat(
                                                    (null == eE
                                                      ? void 0
                                                      : eE.token1_symbol) || ""
                                                  )
                                              : "Unknown"
                                            : ""
                                                .concat(
                                                  (null == ej
                                                    ? void 0
                                                    : ej.symbol) || "",
                                                  "/"
                                                )
                                                .concat(
                                                  (null == eT
                                                    ? void 0
                                                    : eT.symbol) || ""
                                                ),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          ai &&
                            (0, n.jsx)("button", {
                              disabled: !0,
                              className:
                                "disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                              children: "Insufficient balance",
                            }),
                          $
                            ? (0, n.jsxs)(k.Z, {
                                id: "AddLiquidity",
                                className: "w-full",
                                open: eV,
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "".concat(ai ? "hidden" : ""),
                                    children: (0, n.jsx)("button", {
                                      disabled: t6 || ar,
                                      className:
                                        "mt-[25px] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                                      onClick: () => {
                                        handleAddLiquidity(),
                                          eU(!0),
                                          tZ("AddLiquidity");
                                      },
                                      children: t6
                                        ? "Please wait"
                                        : 0 !== e7 && 0 !== e9
                                        ? "Add Liquidity"
                                        : "Enter an amount",
                                    }),
                                  }),
                                  (0, n.jsx)(w.Z, {
                                    title: "Add Liquidity",
                                    updateModal: () => {
                                      eU(!1);
                                    },
                                    children: (0, n.jsx)("div", {
                                      className: "flex p-3 flex-wrap w-full",
                                      children: (0, n.jsx)(n.Fragment, {
                                        children: (0, n.jsxs)("div", {
                                          className: "w-full flex flex-wrap  ",
                                          children: [
                                            (0, n.jsxs)("div", {
                                              className: "popupItem",
                                              children: [
                                                (0, n.jsxs)("span", {
                                                  children: [
                                                    "Approve ",
                                                    ej.symbol,
                                                    " ",
                                                  ],
                                                }),
                                                tv
                                                  ? (0, n.jsx)(h.yM, {})
                                                  : tB
                                                  ? (0, n.jsx)(h.Uc, {})
                                                  : (0, n.jsx)(h.NO, {}),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "popupItem",
                                              children: [
                                                (0, n.jsxs)("span", {
                                                  children: [
                                                    "Approve ",
                                                    eT.symbol,
                                                    " ",
                                                  ],
                                                }),
                                                tN
                                                  ? (0, n.jsx)(h.yM, {})
                                                  : tB
                                                  ? (0, n.jsx)(h.Uc, {})
                                                  : (0, n.jsx)(h.NO, {}),
                                              ],
                                            }),
                                            (0, n.jsxs)("div", {
                                              className: "popupItem",
                                              children: [
                                                (0, n.jsx)("span", {
                                                  children:
                                                    "Deposit token in the pool",
                                                }),
                                                tp
                                                  ? (0, n.jsx)(h.yM, {})
                                                  : tB
                                                  ? (0, n.jsx)(h.Uc, {})
                                                  : (0, n.jsx)(h.NO, {}),
                                              ],
                                            }),
                                            "AddLiquidityAndStake" === tz &&
                                              (0, n.jsxs)(n.Fragment, {
                                                children: [
                                                  (0, n.jsxs)("div", {
                                                    className: "popupItem",
                                                    children: [
                                                      (0, n.jsxs)("span", {
                                                        children: [
                                                          "Approve ",
                                                          ej.symbol,
                                                          " / ",
                                                          eT.symbol,
                                                          " ",
                                                        ],
                                                      }),
                                                      tf
                                                        ? (0, n.jsx)(h.yM, {})
                                                        : tB
                                                        ? (0, n.jsx)(h.Uc, {})
                                                        : (0, n.jsx)(h.NO, {}),
                                                    ],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                    className: "popupItem",
                                                    children: [
                                                      (0, n.jsx)("span", {
                                                        children:
                                                          "Create gauge",
                                                      }),
                                                      ty
                                                        ? (0, n.jsx)(h.yM, {})
                                                        : tB
                                                        ? (0, n.jsx)(h.Uc, {})
                                                        : (0, n.jsx)(h.NO, {}),
                                                    ],
                                                  }),
                                                  (0, n.jsxs)("div", {
                                                    className: "popupItem",
                                                    children: [
                                                      (0, n.jsx)("span", {
                                                        children:
                                                          "Stake LP token in the gauge",
                                                      }),
                                                      tM
                                                        ? (0, n.jsx)(h.yM, {})
                                                        : tB
                                                        ? (0, n.jsx)(h.Uc, {})
                                                        : (0, n.jsx)(h.NO, {}),
                                                    ],
                                                  }),
                                                ],
                                              }),
                                          ],
                                        }),
                                      }),
                                    }),
                                  }),
                                ],
                              })
                            : (0, n.jsx)("div", {
                                className: "w-full my-4",
                                children: (0, n.jsx)(j.C, {
                                  btnBoxClassName: "w-full",
                                  className: "w-full",
                                  BtnClassName: "w-full",
                                  noTitle: !0,
                                }),
                              }),
                        ],
                      }),
                    "Remove" === eB &&
                      ((null == I ? void 0 : I.length) > 0
                        ? (0, n.jsx)(n.Fragment, {
                            children: I.map((e, t) =>
                              (0, n.jsxs)(
                                "div",
                                {
                                  className:
                                    "modalItem !py-[16px] !flex-row justify-between",
                                  children: [
                                    (0, n.jsxs)("div", {
                                      className: "flex flex-wrap  flex-row",
                                      children: [
                                        (0, n.jsxs)("div", {
                                          className: "flex",
                                          children: [
                                            (0, n.jsx)("div", {
                                              className:
                                                "rounded-full overflow-hidden",
                                              children: (0, n.jsx)(A(), {
                                                loading: "lazy",
                                                "data-src":
                                                  "/static/img/icon/tokens/".concat(
                                                    e.token0_symbol,
                                                    ".svg"
                                                  ),
                                                className: "lazyload",
                                                src: "/static/img/icon/tokens/".concat(
                                                  e.token0_symbol,
                                                  ".svg"
                                                ),
                                                alt: e.token0_symbol,
                                                width: 20,
                                                height: 20,
                                              }),
                                            }),
                                            (0, n.jsx)("div", {
                                              className:
                                                "-mx-2 rounded-full overflow-hidden",
                                              children: (0, n.jsx)(A(), {
                                                loading: "lazy",
                                                "data-src":
                                                  "/static/img/icon/tokens/".concat(
                                                    e.token1_symbol,
                                                    ".svg"
                                                  ),
                                                className: "lazyload",
                                                src: "/static/img/icon/tokens/".concat(
                                                  e.token1_symbol,
                                                  ".svg"
                                                ),
                                                alt: e.token1_symbol,
                                                width: 20,
                                                height: 20,
                                              }),
                                            }),
                                          ],
                                        }),
                                        (0, n.jsxs)("span", {
                                          className:
                                            "pl-[16px] text-xs w-auto text-end ",
                                          children: [
                                            " ",
                                            ""
                                              .concat(e.token0_symbol, " / ")
                                              .concat(e.token1_symbol),
                                            " ",
                                          ],
                                        }),
                                      ],
                                    }),
                                    ez
                                      ? (0, n.jsx)("div", {
                                          className: "text-left",
                                          children: (0, n.jsx)("span", {
                                            className:
                                              "loading loading-bars loading-sm",
                                          }),
                                        })
                                      : (0, n.jsx)("div", {
                                          className:
                                            "flex justify-end items-center",
                                          children: (0, n.jsx)("span", {
                                            onClick: () => {
                                              eF("Withdraw"), eL(t);
                                            },
                                            className:
                                              "text-blue-600 cursor-pointer text-xs",
                                            children: "Withdraw Liquidity",
                                          }),
                                        }),
                                  ],
                                },
                                t
                              )
                            ),
                          })
                        : (0, n.jsx)("div", {
                            className: "".concat(
                              u().not__liquidity__found,
                              " text-center w-full"
                            ),
                            children: "No liquidity found",
                          })),
                    "Withdraw" === eB &&
                      (0, n.jsxs)("div", {
                        className: "w-full flex flex-wrap",
                        children: [
                          (0, n.jsxs)("div", {
                            className: "w-full",
                            children: [
                              (0, n.jsxs)("div", {
                                className: "w-full flex justify-between",
                                children: [
                                  (0, n.jsx)("span", { children: "Amount" }),
                                  (0, n.jsxs)("span", {
                                    children: [" ", (0, v.Xh)(e1, 4, !0), " "],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-full flex items-center justify-between text-xs  p-2",
                                children: [
                                  (0, n.jsx)("span", {
                                    className: "text-xl",
                                    children: "0%",
                                  }),
                                  (0, n.jsx)("span", { children: "25%" }),
                                  (0, n.jsx)("span", { children: "50%" }),
                                  (0, n.jsx)("span", { children: "75%" }),
                                  (0, n.jsx)("span", { children: "MAX" }),
                                ],
                              }),
                              (0, n.jsx)("input", {
                                type: "range",
                                min: "0",
                                max: "100",
                                value: eQ,
                                onChange: (e) => e0(e.target.value),
                                className: "range range-primary",
                                step: "25",
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "w-full flex flex-wrap mt-5 justify-between",
                            children: [
                              (0, n.jsx)("div", {
                                className: "w-full flex py-2 border-b",
                                children: "You will receive at least",
                              }),
                              (0, n.jsxs)("div", {
                                className: "mt-2 w-full flex justify-between",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "w-1/3 flex items-center  text-stone-400 py-1",
                                    children: [
                                      (0, n.jsx)(A(), {
                                        loading: "lazy",
                                        "data-src":
                                          "/static/img/icon/tokens/".concat(
                                            null === (t = I[eM]) || void 0 === t
                                              ? void 0
                                              : t.token0_symbol,
                                            ".svg"
                                          ),
                                        className: "lazyload",
                                        src: "/static/img/icon/tokens/".concat(
                                          null === (a = I[eM]) || void 0 === a
                                            ? void 0
                                            : a.token0_symbol,
                                          ".svg"
                                        ),
                                        alt:
                                          null === (l = I[eM]) || void 0 === l
                                            ? void 0
                                            : l.token0_symbol,
                                        width: 20,
                                        height: 20,
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "text-xs px-1 text-white",
                                        children: as,
                                      }),
                                      (0, n.jsxs)("span", {
                                        className: "text-xs",
                                        children: [
                                          " ",
                                          null === (i = I[eM]) || void 0 === i
                                            ? void 0
                                            : i.token0_symbol,
                                          " ",
                                        ],
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-1/3 flex items-end flex-col text-stone-400 py-1",
                                    children: (0, n.jsxs)("div", {
                                      className: "font-bold text-xs",
                                      children: ["$ ", an[0] || 0, " "],
                                    }),
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className: "mt-2 w-full flex justify-between",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className:
                                      "w-1/3 flex items-center  text-stone-400 py-1",
                                    children: [
                                      (0, n.jsx)(A(), {
                                        loading: "lazy",
                                        "data-src":
                                          "/static/img/icon/tokens/".concat(
                                            null === (o = I[eM]) || void 0 === o
                                              ? void 0
                                              : o.token1_symbol,
                                            ".svg"
                                          ),
                                        className: "lazyload",
                                        src: "/static/img/icon/tokens/".concat(
                                          null === (r = I[eM]) || void 0 === r
                                            ? void 0
                                            : r.token1_symbol,
                                          ".svg"
                                        ),
                                        alt:
                                          null === (d = I[eM]) || void 0 === d
                                            ? void 0
                                            : d.token1_symbol,
                                        width: 20,
                                        height: 20,
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "text-xs px-1 text-white",
                                        children: al,
                                      }),
                                      (0, n.jsx)("span", {
                                        className: "text-xs",
                                        children:
                                          null === (c = I[eM]) || void 0 === c
                                            ? void 0
                                            : c.token1_symbol,
                                      }),
                                    ],
                                  }),
                                  (0, n.jsx)("div", {
                                    className:
                                      "w-1/3 flex items-end flex-col text-stone-400 py-1",
                                    children: (0, n.jsxs)("div", {
                                      className: "font-bold text-xs",
                                      children: ["$ ", an[1] || 0],
                                    }),
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)("div", {
                            className:
                              "w-full flex flex-wrap mt-5 justify-between",
                            children: [
                              (0, n.jsx)("div", {
                                className:
                                  "w-full flex py-2 border-b text-[12px] sm:text-[14px] md:text-[16px]",
                                children: "Your Balance",
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-1/2 flex flex-col text-stone-400 py-1",
                                children: [
                                  (0, n.jsxs)("div", {
                                    className: "font-bold",
                                    children: [
                                      " ",
                                      e6
                                        ? (0, v.Xh)(
                                            parseFloat(
                                              (0, m.d)(
                                                (null === (y = I[eM]) ||
                                                void 0 === y
                                                  ? void 0
                                                  : y.account_lp_balance) ||
                                                  BigInt(0)
                                              )
                                            ),
                                            4,
                                            !0
                                          )
                                        : "-",
                                      " ",
                                    ],
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "text-xs",
                                    children: [
                                      "Pooled ",
                                      e6
                                        ? ""
                                            .concat(
                                              (null === (b = I[eM]) ||
                                              void 0 === b
                                                ? void 0
                                                : b.token0_symbol) || "",
                                              "/"
                                            )
                                            .concat(
                                              (null === (_ = I[eM]) ||
                                              void 0 === _
                                                ? void 0
                                                : _.token1_symbol) || ""
                                            )
                                        : ""
                                            .concat(
                                              (null == ej
                                                ? void 0
                                                : ej.symbol) || "",
                                              "/"
                                            )
                                            .concat(
                                              (null == eT
                                                ? void 0
                                                : eT.symbol) || ""
                                            ),
                                      " ",
                                    ],
                                  }),
                                ],
                              }),
                              (0, n.jsxs)("div", {
                                className:
                                  "w-1/2 flex items-end flex-col text-stone-400 py-1",
                                children: [
                                  (0, n.jsx)("div", {
                                    className: "font-bold",
                                    children: e6
                                      ? (0, v.Xh)(
                                          parseFloat(
                                            (0, m.d)(
                                              (null === (N = I[eM]) ||
                                              void 0 === N
                                                ? void 0
                                                : N.account_gauge_balance) ||
                                                BigInt(0)
                                            )
                                          ),
                                          4,
                                          !0
                                        )
                                      : "-",
                                  }),
                                  (0, n.jsxs)("div", {
                                    className: "text-xs",
                                    children: [
                                      "Staked ",
                                      e6
                                        ? ""
                                            .concat(
                                              (null === (T = I[eM]) ||
                                              void 0 === T
                                                ? void 0
                                                : T.token0_symbol) || "",
                                              "/"
                                            )
                                            .concat(
                                              (null === (S = I[eM]) ||
                                              void 0 === S
                                                ? void 0
                                                : S.token1_symbol) || ""
                                            )
                                        : ""
                                            .concat(
                                              (null == ej
                                                ? void 0
                                                : ej.symbol) || "",
                                              "/"
                                            )
                                            .concat(
                                              (null == eT
                                                ? void 0
                                                : eT.symbol) || ""
                                            ),
                                    ],
                                  }),
                                ],
                              }),
                            ],
                          }),
                          (0, n.jsxs)(k.Z, {
                            id: "RemoveLiquidity",
                            className: "w-full",
                            open: e$,
                            children: [
                              (0, n.jsx)("button", {
                                disabled: !eQ || "0" === eQ,
                                className:
                                  "mt-[25px] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                                onClick: () => {
                                  handleRemoveLiquidity(), eY(!0);
                                },
                                children: "Remove Liquidity",
                              }),
                              (0, n.jsx)(w.Z, {
                                title: "Remove Liquidity",
                                updateModal: () => {
                                  eY(!1);
                                },
                                children: (0, n.jsx)("div", {
                                  className: "flex p-3 flex-wrap w-full",
                                  children: (0, n.jsxs)("div", {
                                    className: "w-full flex flex-wrap",
                                    children: [
                                      (0, n.jsxs)("div", {
                                        className: "popupItem",
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "Approve LP token",
                                          }),
                                          tf
                                            ? (0, n.jsx)(h.yM, {})
                                            : tB
                                            ? (0, n.jsx)(h.Uc, {})
                                            : (0, n.jsx)(h.NO, {}),
                                        ],
                                      }),
                                      (0, n.jsxs)("div", {
                                        className:
                                          "w-full border-b flex items-center py-4 px-3 justify-between",
                                        children: [
                                          (0, n.jsx)("span", {
                                            children: "Remove Liquidity",
                                          }),
                                          tX
                                            ? (0, n.jsx)(h.yM, {})
                                            : tB
                                            ? (0, n.jsx)(h.Uc, {})
                                            : (0, n.jsx)(h.NO, {}),
                                        ],
                                      }),
                                    ],
                                  }),
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                  ],
                }),
              ],
            })
          );
        },
        q = a(26573),
        D = a(77637),
        layouts_LiquidityMobileCard = (e) => {
          let t = e.data;
          e.allData;
          let [a, l] = (0, s.useState)(),
            { isSupported: i } = (0, I.$)(),
            [o, r] = (0, s.useState)(e.data.slice(0, 10)),
            [d, c] = (0, s.useState)(0),
            [u, m] = (0, s.useState)(null),
            [p, h] = (0, s.useState)(!1),
            [f, g] = (0, s.useState)(!1),
            [w, k] = (0, s.useState)(Array(t.length).fill(!1)),
            { address: N, balances: T, pairsLength: S } = (0, x.useLiquidity)(),
            C = e.loading,
            P = e.openAdd;
          e.onLoadMore;
          let A = (0, s.useRef)(!1),
            O = (0, b.useSearchParams)();
          (0, s.useEffect)(() => {
            r(e.data.slice(0, 10));
          }, [e.data]);
          let M = (0, s.useMemo)(
            () => e.data.filter((e) => e.total_supply > BigInt(1e4)),
            [e.data]
          );
          function calculateTokenAmounts(e, t, a, n, s, l) {
            let i = (0, v.cz)(e),
              o = (0, v.cz)(t),
              r = (0, v.cz)(a),
              d = (0, v.cz)(n),
              c = (0, v.cz)(s),
              u = (0, v.cz)(l);
            if (0n === d) return [0n, 0n];
            let m = (
                (i * (o * 10n ** (18n - c))) /
                d /
                10n ** (18n - c)
              ).toString(),
              p = (
                (i * (r * 10n ** (18n - u))) /
                d /
                10n ** (18n - u)
              ).toString();
            return [BigInt(m), BigInt(p)];
          }
          return (
            (0, s.useEffect)(() => {
              if (M && M.length && !A.current) {
                let e = O.get("openManage");
                if (e) {
                  A.current = !0;
                  let a = t.findIndex((t) => t.pair_address === e);
                  h(!0), c(a);
                }
              }
            }, [M]),
            (0, n.jsxs)(n.Fragment, {
              children: [
                null == o
                  ? void 0
                  : o.map((e, t) => {
                      let s = [
                          {
                            title: "APR",
                            value: e.aprValue,
                            key: "APR",
                            unit: "%",
                          },
                          {
                            title: "Total Staked",
                            value: e.stakedValue,
                            key: "TotalStaked",
                            preSymbol: "$",
                            tooltip: () =>
                              (0, n.jsxs)("div", {
                                className: "flex flex-col items-center",
                                children: [
                                  (0, n.jsxs)("span", {
                                    children: [
                                      parseFloat(
                                        (0, _.b)(
                                          calculateTokenAmounts(
                                            e.gauge_total_supply,
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
                                  (0, n.jsxs)("span", {
                                    children: [
                                      parseFloat(
                                        (0, _.b)(
                                          calculateTokenAmounts(
                                            e.gauge_total_supply,
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
                            title: "My Staked",
                            value: N && i ? e.myStakeValue : "-",
                            preSymbol: N && i ? "$" : "",
                            key: "MyStaked",
                            tooltip:
                              N && i
                                ? (t) =>
                                    (0, n.jsxs)("div", {
                                      className: "flex flex-col items-center",
                                      children: [
                                        (0, n.jsxs)("span", {
                                          children: [
                                            (0, v.Xh)(
                                              (0, _.b)(
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
                                            ),
                                            " ",
                                            e.token0_symbol,
                                            " ",
                                          ],
                                        }),
                                        (0, n.jsxs)("span", {
                                          children: [
                                            (0, v.Xh)(
                                              (0, _.b)(
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
                                            ),
                                            " ",
                                            e.token1_symbol,
                                          ],
                                        }),
                                      ],
                                    })
                                : void 0,
                          },
                          {
                            title: "My Pool",
                            value: N && i ? e.myPoolValue : "-",
                            preSymbol: N && i ? "$" : "",
                            key: "MyPool",
                            tooltip:
                              N && i
                                ? (t, a, s) =>
                                    (0, n.jsxs)("div", {
                                      className: "flex flex-col items-center",
                                      children: [
                                        (0, n.jsxs)("span", {
                                          children: [
                                            (0, v.Xh)(
                                              (0, _.b)(
                                                calculateTokenAmounts(
                                                  (
                                                    parseFloat(
                                                      e.account_lp_balance
                                                    ) +
                                                    parseFloat(
                                                      e.account_gauge_balance
                                                    )
                                                  ).toString(),
                                                  e.reserve0,
                                                  e.reserve1,
                                                  e.total_supply,
                                                  e.token0_decimals,
                                                  e.token1_decimals
                                                )[0],
                                                Number(e.token0_decimals)
                                              )
                                            ),
                                            " ",
                                            e.token0_symbol,
                                            " ",
                                          ],
                                        }),
                                        (0, n.jsxs)("span", {
                                          children: [
                                            (0, v.Xh)(
                                              (0, _.b)(
                                                calculateTokenAmounts(
                                                  (
                                                    parseFloat(
                                                      e.account_lp_balance
                                                    ) +
                                                    parseFloat(
                                                      e.account_gauge_balance
                                                    )
                                                  ).toString(),
                                                  e.reserve0,
                                                  e.reserve1,
                                                  e.total_supply,
                                                  e.token0_decimals,
                                                  e.token1_decimals
                                                )[1],
                                                Number(e.token1_decimals)
                                              )
                                            ),
                                            " ",
                                            e.token1_symbol,
                                          ],
                                        }),
                                      ],
                                    })
                                : void 0,
                          },
                        ],
                        o = (0, n.jsx)(n.Fragment, {
                          children: (0, n.jsx)("div", {
                            className:
                              "flex flex-wrap items-center justify-center w-full",
                            children:
                              N && i
                                ? (0, n.jsxs)("div", {
                                    className:
                                      "flex flex-row items-center justify-between w-full",
                                    children: [
                                      (0, n.jsx)("button", {
                                        disabled: !N,
                                        onClick: () => {
                                          h(!0), c(t), m(e);
                                        },
                                        className: "offButton w-[48%]",
                                        children: "Stake Manage",
                                      }),
                                      (0, n.jsx)("button", {
                                        className: "offButton w-[48%]",
                                        onClick: () => {
                                          P(e);
                                        },
                                        children: "Add",
                                      }),
                                    ],
                                  })
                                : (0, n.jsx)(j.C, {
                                    btnBoxClassName: "w-full",
                                    BtnClassName: "w-full",
                                    noTitle: !0,
                                  }),
                          }),
                        });
                      return (0, n.jsx)(
                        q.Z,
                        {
                          footer: o,
                          asymmetrical: !0,
                          twoHalf: !0,
                          isOpen: a === t,
                          onCollapse: () => {
                            a === t ? l(null) : l(t);
                          },
                          columns: s,
                          token0Symbol: null == e ? void 0 : e.token0_symbol,
                          token1Symbol: null == e ? void 0 : e.token1_symbol,
                          name: ""
                            .concat(e.token0_symbol, "/")
                            .concat(e.token1_symbol),
                          detail: e.detail,
                        },
                        t
                      );
                    }),
                (0, n.jsx)(D.Z, {
                  hasMore: !(o.length >= t.length),
                  onLoadMore: () => {
                    let t = o.length,
                      a = t + 10,
                      n = e.data.slice(t, a);
                    r((e) => [...e, ...n]);
                  },
                  isLoading: C,
                }),
                N &&
                  (0, n.jsx)(y.Z, {
                    id: "echo_nft",
                    className: "hidden md:block",
                    open: p,
                    setOpen: () => {
                      f || h(!1);
                    },
                    children:
                      u &&
                      p &&
                      (0, n.jsx)(extras_ManageLpStaking, {
                        closeModal: () => {
                          h(!1);
                        },
                        updateOpen: (e) => {
                          g(e);
                        },
                        lp: u,
                        updateModal: (e) => h(e),
                      }),
                  }),
              ],
            })
          );
        },
        W = a(79037),
        z = a(83516),
        Z = a(64698),
        V = a.n(Z),
        U = (0, s.memo)((e) => {
          let {
              updateModal: t,
              handleStableClick: a,
              handleVolatileClick: l,
              handleAllClick: i,
              handleStakedOnlyToggle: o,
              handleDPOnlyToggle: r,
              handleInputChange: d,
            } = e,
            [c, u] = (0, s.useState)(1),
            [m, p] = (0, s.useState)(""),
            [x, y] = (0, s.useState)(!1),
            [f, b] = (0, s.useState)(!1);
          (0, s.useRef)(!1);
          let handleSelectorChange = (e) => {
            u(e), 1 === e ? i() : 2 === e ? a() : l();
          };
          return (0, n.jsxs)("div", {
            className: "shadow-3xl bg-neutral border border-white px-4 py-8",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex flex-row justify-between items-center pb-3 sm:pb-4 md:pb-6",
                children: [
                  (0, n.jsx)("p", {
                    className: V().title,
                    children: "Filters",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => t(!1),
                    children: (0, n.jsx)(h.zt, {}),
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "flex flex-row justify-between",
                children: [
                  (0, n.jsx)("button", {
                    onClick: () => handleSelectorChange(1),
                    className: "animation "
                      .concat(V().button, " ")
                      .concat(
                        1 == c
                          ? "text-white bg-primary w-1/3"
                          : "text-accent w-1/3 border border-r-transparent border-l-primary border-t-primary border-b-primary"
                      ),
                    children: "all",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => handleSelectorChange(2),
                    className: "animation "
                      .concat(V().button, " ")
                      .concat(
                        2 == c
                          ? "text-white bg-primary w-1/3"
                          : "text-accent w-1/3 border border-r-transparent border-l-transparent border-t-primary border-b-primary"
                      ),
                    children: "stable",
                  }),
                  (0, n.jsx)("button", {
                    onClick: () => handleSelectorChange(3),
                    className: "animation "
                      .concat(V().button, " ")
                      .concat(
                        3 == c
                          ? "text-white bg-primary w-1/3"
                          : "text-accent w-1/3 border border-r-primary border-l-transparent border-t-primary border-b-primary"
                      ),
                    children: "volatile",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className:
                  "relative text-gray-600 focus-within:text-gray-400 w-full md:w-44 lg:w-60 mt-5 sm:mt-7 md:mt-10 mb-5 sm:mb-7 md:mb-10 ",
                children: [
                  (0, n.jsx)("span", {
                    className:
                      "absolute inset-y-0 left-0 flex items-center pl-2",
                    children: (0, n.jsx)("button", {
                      type: "submit",
                      className: "p-1 focus:outline-none focus:shadow-outline",
                      children: (0, n.jsx)(h.W1, {}),
                    }),
                  }),
                  (0, n.jsx)("input", {
                    value: m,
                    onChange: (e) => {
                      let t = e.target.value;
                      d(e), p(t);
                    },
                    autoComplete: "off",
                    type: "search",
                    name: "q",
                    placeholder: "Search Pair or Token",
                    className:
                      "w-full md:w-44 lg:w-60 pl-10 input input-bordered rounded-none min-h-0 h-12 border md:border-accent",
                  }),
                ],
              }),
              (0, n.jsxs)("div", {
                className: "w-full flex flex-row items-center",
                children: [
                  (0, n.jsx)("div", {
                    className: "form-control",
                    children: (0, n.jsxs)("label", {
                      className:
                        "cursor-pointer label flex flex-row justify-start gap-2",
                      children: [
                        (0, n.jsx)("input", {
                          type: "checkbox",
                          className: "toggle toggle-primary",
                          onChange: (e) => {
                            let t = e.target.checked;
                            y(t), o();
                          },
                        }),
                        (0, n.jsx)("span", {
                          className: "label-text text-xs sm:text-sm",
                          children: "Staked Only",
                        }),
                      ],
                    }),
                  }),
                  (0, n.jsx)("div", {
                    className: "form-control",
                    children: (0, n.jsxs)("label", {
                      className:
                        "cursor-pointer label flex flex-row justify-start gap-2",
                      children: [
                        (0, n.jsx)("input", {
                          type: "checkbox",
                          className: "toggle toggle-primary",
                          onChange: (e) => {
                            let t = e.target.checked;
                            b(t), r();
                          },
                        }),
                        (0, n.jsx)("span", {
                          className: "label-text text-xs sm:text-sm",
                          children: "DePIN Only",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            ],
          });
        }),
        views_Liquidity = () => {
          let { chain: e } = (0, W.m)(),
            [t, a] = (0, s.useState)(!1),
            l = (0, b.useSearchParams)(),
            [o, d] = (0, s.useState)(window.innerWidth > 1024),
            [c, u] = (0, s.useState)(!1),
            { isSupported: p } = (0, I.$)(),
            [y, f] = (0, s.useState)([]),
            [g, w] = (0, s.useState)("all"),
            [j, N] = (0, s.useState)([]),
            [T, S] = (0, s.useState)(""),
            [P, A] = (0, s.useState)(!1),
            [O, M] = (0, s.useState)(!0),
            [L, E] = (0, s.useState)(!0),
            [B, F] = (0, s.useState)(!1),
            [X, q] = (0, s.useState)(""),
            [D, Z] = (0, s.useState)(""),
            [V, $] = (0, s.useState)(!1),
            [Y, J] = (0, s.useState)(!1),
            H = (0, s.useRef)(),
            G = (0, s.useRef)(null),
            {
              address: K,
              entirePairs: Q,
              init: ee,
              liquidityPools: et,
              fetchData: ea,
              prices: en,
            } = (0, x.useLiquidity)(),
            es = (0, s.useRef)([]),
            el = (0, s.useRef)([]),
            ei = (0, s.useRef)([]),
            eo = (0, s.useRef)(!1),
            er = [
              "Name",
              "ARP",
              "Total Staked",
              "My Staked",
              "My Pool",
              "Earnings",
            ],
            [ed, ec] = (0, s.useState)([]),
            [eu, em] = (0, s.useState)(!1);
          function calculateTotalValue(e, t, a, n, s) {
            let l =
                arguments.length > 5 && void 0 !== arguments[5]
                  ? arguments[5]
                  : 2,
              i = 0;
            for (let l of e)
              if (l.symbol === t) {
                let e = parseFloat(a),
                  t = l.price;
                i += e * t;
              } else if (l.symbol === n) {
                let e = parseFloat(s),
                  t = l.price;
                i += e * t;
              }
            return (0, v.J2)(i, l);
          }
          function calculateTokenAmounts(e, t, a, n, s, l) {
            let i = (0, v.cz)(e),
              o = (0, v.cz)(t),
              r = (0, v.cz)(a),
              d = (0, v.cz)(n),
              c = (0, v.cz)(s),
              u = (0, v.cz)(l);
            if (0n === d) return [0n, 0n];
            let m = (
                (i * (o * 10n ** (18n - c))) /
                d /
                10n ** (18n - c)
              ).toString(),
              p = (
                (i * (r * 10n ** (18n - u))) /
                d /
                10n ** (18n - u)
              ).toString();
            return [BigInt(m), BigInt(p)];
          }
          (0, s.useEffect)(() => {
            ea();
          }, []),
            (0, s.useEffect)(() => {
              let e = l.get("remove"),
                t = l.get("openAdd");
              if (t && !eo.current) {
                let e = JSON.parse(t);
                setTimeout(() => {
                  (eo.current = !0), openAdd(e);
                }, 2e3);
              }
              e &&
                setTimeout(() => {
                  a(!0),
                    $(!0),
                    setTimeout(() => {
                      $(!1);
                    }, 3e3);
                }, 2e3);
            }, []),
            (0, s.useEffect)(() => {
              let t = z.w[
                (null == e ? void 0 : e.id) === 4689 ? e.id : 4689
              ].map((e) => e.toLowerCase());
              f(t), a(!1);
            }, [K, e]),
            (0, s.useEffect)(() => {
              function handleResize() {
                d(window.innerWidth > 1023);
              }
              return (
                window.addEventListener("resize", handleResize),
                () => window.removeEventListener("resize", handleResize)
              );
            }, []),
            (0, s.useEffect)(() => {
              ee && M(!1);
            }, [j, ee]),
            (0, s.useEffect)(() => {
              t || (q(""), Z(""), J(!1));
            }, [t]);
          let getMyPool = (e) => {
              let t = calculateTokenAmounts(
                  e.account_lp_balance + e.account_gauge_balance,
                  e.reserve0,
                  e.reserve1,
                  e.total_supply,
                  e.token0_decimals,
                  e.token1_decimals
                ),
                a = calculateTotalValue(
                  en,
                  e.token0_symbol,
                  parseFloat((0, _.b)(t[0], Number(e.token0_decimals))).toFixed(
                    3
                  ),
                  e.token1_symbol,
                  parseFloat((0, _.b)(t[1], Number(e.token1_decimals))).toFixed(
                    3
                  )
                );
              return a;
            },
            countList = (e) => {
              let t = e.map((e, t) => {
                  let a = calculateTotalValue(
                      en,
                      e.token0_symbol,
                      parseFloat(
                        (0, _.b)(
                          calculateTokenAmounts(
                            e.gauge_total_supply,
                            e.reserve0,
                            e.reserve1,
                            e.total_supply,
                            e.token0_decimals,
                            e.token1_decimals
                          )[0],
                          Number(e.token0_decimals)
                        )
                      ).toFixed(3),
                      e.token1_symbol,
                      parseFloat(
                        (0, _.b)(
                          calculateTokenAmounts(
                            e.gauge_total_supply,
                            e.reserve0,
                            e.reserve1,
                            e.total_supply,
                            e.token0_decimals,
                            e.token1_decimals
                          )[1],
                          Number(e.token1_decimals)
                        )
                      ).toFixed(3)
                    ),
                    n = calculateTotalValue(
                      en,
                      e.token0_symbol,
                      parseFloat(
                        (0, _.b)(
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
                      e.token1_symbol,
                      parseFloat(
                        (0, _.b)(
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
                      ).toFixed(3)
                    ),
                    s = getMyPool(e),
                    l = (function (e, t) {
                      if (0 === parseFloat(t)) return "0.00";
                      let a = (172800 * parseFloat(e)) / parseFloat(t);
                      return ((100 * a) / 2) * 365;
                    })(
                      calculateTotalValue(
                        en,
                        "LOXO",
                        (0, m.d)(BigInt(e.emissions)),
                        "",
                        "",
                        13
                      ),
                      calculateTotalValue(
                        en,
                        e.token0_symbol,
                        parseFloat(
                          (0, _.b)(
                            calculateTokenAmounts(
                              e.gauge_total_supply,
                              e.reserve0,
                              e.reserve1,
                              e.total_supply,
                              e.token0_decimals,
                              e.token1_decimals
                            )[0],
                            Number(e.token0_decimals)
                          )
                        ).toFixed(3),
                        e.token1_symbol,
                        parseFloat(
                          (0, _.b)(
                            calculateTokenAmounts(
                              e.gauge_total_supply,
                              e.reserve0,
                              e.reserve1,
                              e.total_supply,
                              e.token0_decimals,
                              e.token1_decimals
                            )[1],
                            Number(e.token1_decimals)
                          )
                        ).toFixed(3)
                      )
                    );
                  return {
                    ...e,
                    stakedCount: a,
                    myStakeCount: n,
                    myPoolCount: s,
                    aprCount: l,
                    aprValue: (0, v.en)(l),
                    stakedValue:
                      Number(a) || e.gauge_total_supply === BigInt(0)
                        ? (0, v.pw)(a, 2, !0)
                        : "<0.01",
                    myStakeValue:
                      Number(n) || e.account_gauge_balance === BigInt(0)
                        ? (0, v.pw)(n, 2, !0)
                        : "<0.01",
                    myPoolValue:
                      Number(s) ||
                      e.account_lp_balance + e.account_gauge_balance ===
                        BigInt(0)
                        ? (0, v.pw)(s, 2, !0)
                        : "<0.01",
                  };
                }),
                a = t.sort(
                  (e, t) => Number(t.stakedCount) - Number(e.stakedCount)
                );
              return a;
            };
          function handleAllClick() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              w("all");
          }
          function handleStableClick() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              w("stable");
          }
          (0, s.useEffect)(() => {
            if (Q) {
              let e = Q.filter((e) => e.total_supply > BigInt(1e4)),
                t = countList(e);
              G.current
                ? sortManage(G.current.label, G.current.type, t)
                : searchRecord(t),
                (es.current = t),
                (el.current = t);
            }
          }, [Q, K]),
            (0, s.useEffect)(() => {
              et && ec(et);
            }, [et, K]),
            (0, s.useEffect)(() => {
              ei.current = (0, v.p$)(es.current);
            }, [es.current]),
            (0, s.useEffect)(() => {
              if (L) {
                E(!1);
                return;
              }
              searchRecord();
            }, [g, P, eu, T]);
          let searchRecord = (e) => {
              var t, a;
              let n = e || (0, v.p$)(ei.current);
              "stable" === g && (n = n.filter((e) => !0 === e.stable)),
                "volatile" === g && (n = n.filter((e) => !1 === e.stable)),
                P &&
                  (n = n.filter(
                    (e) =>
                      y.includes(e.token0.toLowerCase()) ||
                      y.includes(e.token1.toLowerCase())
                  )),
                eu &&
                  (n =
                    (a = n) && a.length
                      ? a.filter(
                          (e) =>
                            e.bribe &&
                            "0x0000000000000000000000000000000000000000" !==
                              e.bribe &&
                            e.account_gauge_balance &&
                            e.account_gauge_balance !== BigInt(0)
                        )
                      : []);
              let s = T.trim();
              T &&
                (n = n.filter((e) => {
                  let t =
                      e.symbol &&
                      e.symbol.toLowerCase().includes(s.toLowerCase()),
                    a =
                      e.name && e.name.toLowerCase().includes(s.toLowerCase());
                  return t || a;
                })),
                null == H ||
                  null === (t = H.current) ||
                  void 0 === t ||
                  t.setCurrentPage(1),
                N(n);
            },
            handleInputChange = (e) => {
              let t = e.target.value;
              S(t);
            };
          function handleVolatileClick() {
            arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
              w("volatile");
          }
          (0, s.useEffect)(() => {
            var e, t;
            let a;
            if (L) {
              E(!1);
              return;
            }
            N(
              ((e = es.current),
              (a = ""),
              "" === (a = t || T).trim()
                ? e
                : e.filter((e) => {
                    let t =
                        e.symbol &&
                        e.symbol.toLowerCase().includes(a.toLowerCase()),
                      n =
                        e.name &&
                        e.name.toLowerCase().includes(a.toLowerCase());
                    return t || n;
                  }))
            );
          }, [T]);
          let handleStakedOnlyToggle = () => {
              em((e) => !e);
            },
            handleDPOnlyToggle = () => {
              A((e) => !e);
            },
            openAdd = (t) => {
              let n = R.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689],
                s =
                  t.token0.toLowerCase() === n.WRAPPED_IOTX.toLowerCase()
                    ? n.IOTX
                    : t.token0,
                l =
                  t.token1.toLowerCase() === n.WRAPPED_IOTX.toLowerCase()
                    ? n.IOTX
                    : t.token1;
              q(s), Z(l), J(t.stable), a(!0);
            },
            sortManage = (e, t, a) => {
              let n = a || (0, v.p$)(es.current);
              (G.current = { label: e, type: t }),
                "asc" === t
                  ? n.sort((t, a) => Number(a[e]) - Number(t[e]))
                  : "desc" === t &&
                    n.sort((t, a) => Number(t[e]) - Number(a[e])),
                (ei.current = n),
                searchRecord(n);
            },
            refresh = () => {
              w("all"), S(""), A(!1), em(!1), refresh();
            };
          return (0, n.jsxs)("div", {
            className: "pageContainer",
            children: [
              (0, n.jsxs)("div", {
                className:
                  "flex flex-row flex-wrap items-center justify-between",
                children: [
                  (0, n.jsxs)("div", {
                    children: [
                      (0, n.jsx)("h1", {
                        className: "pageTitle",
                        children: "Liquidity",
                      }),
                      (0, n.jsxs)("div", {
                        className: "pageContent  max-w-[330px]",
                        children: [
                          "Pair your tokens to provide liquidity. Stake the LP tokens to earn LOXO.",
                          (0, n.jsx)(i(), {
                            target: "_blank",
                            className: "text-blue hover:underline",
                            href: "https://docs.loxodrome.xyz/terminology-know/liquidity",
                            children: "Learn More",
                          }),
                        ],
                      }),
                    ],
                  }),
                  K && p
                    ? (0, n.jsx)("div", {
                        className: "w-full lg:w-48",
                        children: (0, n.jsxs)(k.Z, {
                          id: "choose_pool",
                          open: t,
                          setOpen: () => {
                            B || a(!1);
                          },
                          children: [
                            (0, n.jsx)("div", {
                              className: "flex flex-row flex-wrap gap-2.5",
                              children: (0, n.jsx)("button", {
                                onClick: () => {
                                  a(!0);
                                },
                                disabled: !p,
                                style: { fontFamily: "Outfit-SemiBold" },
                                className: "addBtn",
                                children: "Add/remove liquidity",
                              }),
                            }),
                            t &&
                              (0, n.jsx)(extras_ManageLiquidity, {
                                updateOpen: (e) => {
                                  F(e);
                                },
                                openRemove: V,
                                updateModal: (e) => a(e),
                                entirePairs: Q,
                                liquidityPoolsBalance: ed,
                                addTokenA: X,
                                addTokenB: D,
                                addStable: Y,
                                refreshList: refresh,
                                open: t,
                              }),
                          ],
                        }),
                      })
                    : null,
                ],
              }),
              (0, n.jsx)("div", {
                className:
                  "flex flex-row items-center justify-between pt-2 pb-0 lg:pt-[64px] lg:pb-[20px]",
                children: (0, n.jsxs)("div", {
                  className:
                    "flex flex-row items-center gap-4 sm:gap-0 w-full lg:w-60",
                  children: [
                    (0, n.jsxs)("div", {
                      className: "hidden lg:flex flex-row items-center gap-4",
                      children: [
                        (0, n.jsxs)("div", {
                          className: "flex flex-row gap-2 items-center",
                          children: [
                            (0, n.jsx)("button", {
                              onClick: () => {
                                handleAllClick();
                              },
                              className:
                                "all" === g
                                  ? "filterBtn filterBtnActive"
                                  : "filterBtn",
                              children: "All",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => {
                                handleStableClick();
                              },
                              className:
                                "stable" === g
                                  ? "filterBtn filterBtnActive"
                                  : "filterBtn",
                              children: "Stable",
                            }),
                            (0, n.jsx)("button", {
                              onClick: () => {
                                handleVolatileClick();
                              },
                              className:
                                "volatile" === g
                                  ? "filterBtn filterBtnActive"
                                  : "filterBtn",
                              children: "Volatile",
                            }),
                          ],
                        }),
                        (0, n.jsx)("div", {
                          className: "pl-8 pr-2",
                          children: (0, n.jsxs)("div", {
                            className:
                              "form-control flex items-center flex-row",
                            children: [
                              (0, n.jsxs)("label", {
                                className: "switch",
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    checked: P,
                                    onChange: handleDPOnlyToggle,
                                  }),
                                  (0, n.jsx)("span", { className: "slider" }),
                                ],
                              }),
                              (0, n.jsx)("span", {
                                className: "label-text pl-2 ".concat(
                                  r().stake_switch
                                ),
                                children: "DePIN Only",
                              }),
                            ],
                          }),
                        }),
                        (0, n.jsx)("div", {
                          className: "pr-8",
                          children: (0, n.jsxs)("div", {
                            className:
                              "form-control flex items-center flex-row",
                            children: [
                              (0, n.jsxs)("label", {
                                className: "switch",
                                children: [
                                  (0, n.jsx)("input", {
                                    type: "checkbox",
                                    checked: eu,
                                    onChange: handleStakedOnlyToggle,
                                  }),
                                  (0, n.jsx)("span", { className: "slider" }),
                                ],
                              }),
                              (0, n.jsx)("span", {
                                className: "label-text pl-2 ".concat(
                                  r().stake_switch
                                ),
                                children: "Staked Only",
                              }),
                            ],
                          }),
                        }),
                      ],
                    }),
                    (0, n.jsxs)("div", {
                      className:
                        "relative text-gray-600 focus-within:text-gray-400 w-full lg:w-60",
                      children: [
                        (0, n.jsx)("span", {
                          className:
                            "absolute inset-y-0 left-0 flex items-center pl-2",
                          children: (0, n.jsx)("button", {
                            type: "submit",
                            className:
                              "p-1 focus:outline-none focus:shadow-outline",
                            children: (0, n.jsx)(h.W1, {}),
                          }),
                        }),
                        (0, n.jsx)("input", {
                          autoComplete: "off",
                          type: "search",
                          name: "q",
                          placeholder: "Search Pair or Token",
                          className: "searchInput",
                          value: T,
                          onChange: handleInputChange,
                        }),
                      ],
                    }),
                    (0, n.jsx)("div", {
                      className: "block lg:hidden",
                      children: (0, n.jsxs)(k.Z, {
                        id: "mobile_filter",
                        open: c,
                        setOpen: () => u(!1),
                        children: [
                          (0, n.jsx)("button", {
                            className: "".concat(r().mobile_filter_btn),
                            onClick: () => u(!0),
                            children: (0, n.jsx)(h.k1, {}),
                          }),
                          (0, n.jsx)(U, {
                            open: c,
                            updateModal: (e) => u(e),
                            handleAllClick: handleAllClick,
                            handleVolatileClick: handleVolatileClick,
                            handleStableClick: handleStableClick,
                            handleDPOnlyToggle: handleDPOnlyToggle,
                            handleStakedOnlyToggle: handleStakedOnlyToggle,
                            handleInputChange: handleInputChange,
                          }),
                        ],
                      }),
                    }),
                  ],
                }),
              }),
              (0, n.jsx)("div", {
                className: "mb-10",
                children: o
                  ? (0, n.jsx)(C, {
                      ref: H,
                      openAdd: openAdd,
                      refresh: refresh,
                      sortManage: sortManage,
                      heads: er,
                      data: j,
                      DP_ADDRESS: y,
                      loading: O,
                    })
                  : (0, n.jsx)(layouts_LiquidityMobileCard, {
                      refresh: refresh,
                      openAdd: openAdd,
                      heads: er,
                      data: j,
                      loading: O,
                    }),
              }),
            ],
          });
        };
    },
    64698: function (e) {
      e.exports = {
        title: "filter_title__JixuC",
        button: "filter_button__s30Dr",
      };
    },
    36708: function (e) {
      e.exports = {
        main: "liquidity_main__YRlqx",
        title: "liquidity_title__oxa_F",
        learn_more: "liquidity_learn_more__L_q60",
        content: "liquidity_content__qSmoL",
        add_remove_liquidity_btn: "liquidity_add_remove_liquidity_btn__Y5rP0",
        filter_btn: "liquidity_filter_btn__mZA99",
        stake_switch: "liquidity_stake_switch__cIqoX",
        mobile_filter_btn: "liquidity_mobile_filter_btn__6bsub",
      };
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 958, 795, 984, 284, 633, 744], function () {
      return e((e.s = 96717));
    }),
      (_N_E = e.O());
  },
]);
