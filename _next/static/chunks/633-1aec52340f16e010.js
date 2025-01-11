(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [633],
  {
    71839: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return u;
        },
      });
      var a = t(57437),
        i = t(2265),
        s = t(26360),
        r = t.n(s),
        p = t(8587);
      let l = p.I0;
      var o = t(37416),
        u = (0, i.memo)((e) => {
          let {
              updateModal: n,
              tolerance: t,
              setTolerance: i,
              deadline: s,
              setDeadline: p,
            } = e,
            handleToleranceChange = (e) => {
              i(e);
            },
            handleDeadlineChange = (e) => {
              p(e);
            };
          return (
            l(),
            (0, a.jsxs)("div", {
              className: "modalInner",
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "w-full flex flex-row items-center justify-between",
                  children: [
                    (0, a.jsx)("p", {
                      className: "modalTitle",
                      children: "transaction settings",
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => n(!1),
                      children: (0, a.jsx)(o._y, {}),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full pt-4 flex flex-row justify-start items-center",
                  children: [
                    (0, a.jsx)(o.mp, {}),
                    (0, a.jsx)("p", {
                      className: "".concat(
                        r().transaction_setting_tolerance,
                        " pl-1"
                      ),
                      children: "Slippage Tolerance",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "w-full !py-[13px] modalItem",
                  children: (0, a.jsxs)("div", {
                    className: "rounded-none flex flex-row justify-between",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-row min-w-[40px]",
                        children: [
                          (0, a.jsx)("input", {
                            className: "".concat(
                              r().transaction_setting_percent,
                              " text-center w-[36px] bg-transparent"
                            ),
                            value: t,
                            onChange: (e) =>
                              handleToleranceChange(parseFloat(e.target.value)),
                          }),
                          "%",
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-row flex-1 justify-around items-center",
                        children: [
                          (0, a.jsx)("button", {
                            className: ""
                              .concat(
                                r().transaction_setting_percent_btn,
                                " animation "
                              )
                              .concat(
                                0.5 == t
                                  ? "border border-primary rounded-[4px] min-h-0 h-6 px-3 bg-primary bg-opacity-10"
                                  : "border-none"
                              ),
                            onClick: () => handleToleranceChange(0.5),
                            children: "0.5%",
                          }),
                          (0, a.jsx)("button", {
                            className: ""
                              .concat(
                                r().transaction_setting_percent_btn,
                                " animation "
                              )
                              .concat(
                                1 == t
                                  ? "border border-primary rounded-[4px] min-h-0 h-6 px-3 bg-primary bg-opacity-10"
                                  : "border-none"
                              ),
                            onClick: () => handleToleranceChange(1),
                            children: "1%",
                          }),
                          (0, a.jsx)("button", {
                            className: ""
                              .concat(
                                r().transaction_setting_percent_btn,
                                " animation "
                              )
                              .concat(
                                2 == t
                                  ? "border border-primary rounded-[4px] min-h-0 h-6 px-3 bg-primary bg-opacity-10"
                                  : "border-none"
                              ),
                            onClick: () => handleToleranceChange(2),
                            children: "2%",
                          }),
                          (0, a.jsx)("button", {
                            className: ""
                              .concat(
                                r().transaction_setting_percent_btn,
                                " animation "
                              )
                              .concat(
                                10 == t
                                  ? "border border-primary rounded-[4px] min-h-0 h-6 px-3 bg-primary bg-opacity-10"
                                  : "border-none"
                              ),
                            onClick: () => handleToleranceChange(10),
                            children: "10%",
                          }),
                        ],
                      }),
                    ],
                  }),
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full pt-6 flex flex-row justify-start items-center",
                  children: [
                    (0, a.jsx)(o.Ml, {}),
                    (0, a.jsx)("p", {
                      className: "".concat(
                        r().transaction_setting_tolerance,
                        " pl-1"
                      ),
                      children: "Transaction deadline",
                    }),
                  ],
                }),
                (0, a.jsx)("div", {
                  className: "w-full !py-[13px] modalItem",
                  children: (0, a.jsxs)("div", {
                    className: "rounded-none flex flex-row justify-between",
                    children: [
                      (0, a.jsx)("input", {
                        className: "".concat(
                          r().transaction_setting_percent,
                          " pl-2 w-10 bg-transparent"
                        ),
                        value: s,
                        onChange: (e) =>
                          handleDeadlineChange(parseFloat(e.target.value)),
                      }),
                      (0, a.jsx)("p", {
                        className: r().transaction_setting_minute,
                        children: "minutes",
                      }),
                    ],
                  }),
                }),
              ],
            })
          );
        });
    },
    95975: function (e, n, t) {
      "use strict";
      var a = t(2265),
        i = t(92424),
        s = t(14817),
        r = t(79256),
        p = t(79037),
        l = t(56129),
        o = t(51763),
        u = t(7487),
        y = t(99720);
      n.Z = function () {
        let { chain: e } = (0, p.m)(),
          [n, t] = (0, a.useState)(BigInt(0)),
          [d, m] = (0, a.useState)(BigInt(0)),
          [c, T] = (0, a.useState)(BigInt(0)),
          b = (0, a.useCallback)(
            async (n, a) => {
              let s = l.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689];
              if (!n || !a) return null;
              if (n === s.IOTX)
                return (
                  t(BigInt(1157920892373162e62 - 1)),
                  BigInt(1157920892373162e62 - 1)
                );
              try {
                let e = s.ROUTER,
                  r = await (0, i.a)({
                    address: n,
                    abi: o.Mt,
                    functionName: "allowance",
                    args: [a, e],
                  });
                return (
                  t((null == r ? void 0 : r.result) || 0n),
                  (null == r ? void 0 : r.result) || 0n
                );
              } catch (e) {
                throw (console.error("Failed to fetch allowance:", e), e);
              }
            },
            [e]
          ),
          _ = (0, a.useCallback)(async (e, n, t) => {
            if (!e || !t || !n) return null;
            try {
              var a;
              let s = await (0, i.a)({
                address: e,
                abi: u.Mt,
                functionName: "allowance",
                args: [t, n],
              });
              return (
                m(
                  (null == s
                    ? void 0
                    : null === (a = s.result) || void 0 === a
                    ? void 0
                    : a.toString()) || "0"
                ),
                (null == s ? void 0 : s.result) || 0n
              );
            } catch (e) {
              throw (console.error("Failed to fetch allowance:", e), e);
            }
          }, []),
          f = (0, a.useCallback)(
            async (n, t) => {
              let a = l.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689];
              if (!n || !t || !a.ROUTER) return null;
              try {
                var s;
                let e = await (0, i.a)({
                  address: n,
                  abi: u.Mt,
                  functionName: "allowance",
                  args: [t, a.ROUTER],
                });
                return (
                  T(
                    (null == e
                      ? void 0
                      : null === (s = e.result) || void 0 === s
                      ? void 0
                      : s.toString()) || "0"
                  ),
                  (null == e ? void 0 : e.result) || 0n
                );
              } catch (e) {
                throw (console.error("Failed to fetch allowance:", e), e);
              }
            },
            [e]
          ),
          w = (0, a.useCallback)(async (e, n, t) => {
            if (!e || !n || !t) return null;
            try {
              let a = await (0, i.a)({
                address: e,
                abi: u.Mt,
                functionName: "allowance",
                args: [n, t],
              });
              return (null == a ? void 0 : a.result) || 0n;
            } catch (e) {
              throw (console.error("Failed to fetch allowance:", e), e);
            }
          }, []),
          h = (0, a.useCallback)(
            async (n, t) => {
              let a = l.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689],
                i = a.ROUTER,
                p = await (0, s.n)(y.vc, {
                  address: n,
                  abi: o.Mt,
                  functionName: "approve",
                  args: [i, t],
                }),
                u = await (0, r.e)(y.vc, { hash: p });
              return u;
            },
            [e]
          ),
          x = (0, a.useCallback)(
            async (n, t, a) => {
              l.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689];
              let i = await (0, s.n)(y.vc, {
                  address: n,
                  abi: u.Mt,
                  functionName: "approve",
                  args: [t, a],
                }),
                p = await (0, r.e)(y.vc, { hash: i });
              return p;
            },
            [e]
          ),
          v = (0, a.useCallback)(
            async (n, t) => {
              let a = l.x[(null == e ? void 0 : e.id) === 4689 ? e.id : 4689];
              try {
                let e = await (0, s.n)(y.vc, {
                    address: n,
                    abi: u.Mt,
                    functionName: "approve",
                    args: [null == a ? void 0 : a.ROUTER, t],
                  }),
                  i = await (0, r.e)(y.vc, { hash: e });
                return i;
              } catch (e) {
                throw (console.error("Failed to approve:", e), e);
              }
            },
            [e]
          );
        return {
          approvedAmount: n,
          voterApprovedAmount: d,
          lpApprovedAmount: c,
          fetchAllowance: b,
          fetchVoteAllowance: _,
          fetchLpAllowance: f,
          approve: h,
          approveGauge: x,
          approveRouter: v,
          fetchGaugeAllowance: w,
        };
      };
    },
    26360: function (e) {
      e.exports = {
        balance: "swap_balance__jlczf",
        token_selection: "swap_token_selection__dVFgI",
        button_amount: "swap_button_amount__5QQUn",
        swap_button: "swap_swap_button__2DEno",
        fuel_accordion_title: "swap_fuel_accordion_title__4rBQM",
        new1: "swap_new1__s6jkf",
        fuel_fee: "swap_fuel_fee__DQCpZ",
        fuel_fee_amount: "swap_fuel_fee_amount__iJIP1",
        fuel_fee_price: "swap_fuel_fee_price__xfIXH",
        fuel_guid_steps: "swap_fuel_guid_steps__7YoEm",
        new2: "swap_new2__47Si8",
        transaction_setting_title: "swap_transaction_setting_title__xJGDA",
        transaction_setting_tolerance:
          "swap_transaction_setting_tolerance__14xZ3",
        transaction_setting_percent_btn:
          "swap_transaction_setting_percent_btn__eYSro",
        transaction_setting_percent: "swap_transaction_setting_percent__38B8Q",
        transaction_setting_percent_icon:
          "swap_transaction_setting_percent_icon__Go1YT",
        transaction_setting_minute: "swap_transaction_setting_minute__5HdcY",
      };
    },
    91888: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_weth","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount0In","type":"uint256"},{"indexed":false,"internalType":"address","name":"_tokenIn","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Swap","type":"event"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"amountTokenDesired","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"addLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"address","name":"tokenIn","type":"address"},{"internalType":"address","name":"tokenOut","type":"address"}],"name":"getAmountOut","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"stable","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"internalType":"struct Router.route[]","name":"routes","type":"tuple[]"}],"name":"getAmountsOut","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"getReserves","outputs":[{"internalType":"uint256","name":"reserveA","type":"uint256"},{"internalType":"uint256","name":"reserveB","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"isPair","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"name":"pairFor","outputs":[{"internalType":"address","name":"pair","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"amountADesired","type":"uint256"},{"internalType":"uint256","name":"amountBDesired","type":"uint256"}],"name":"quoteAddLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"liquidity","type":"uint256"}],"name":"quoteRemoveLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidity","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"removeLiquidityETH","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"token","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountTokenMin","type":"uint256"},{"internalType":"uint256","name":"amountETHMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityETHWithPermit","outputs":[{"internalType":"uint256","name":"amountToken","type":"uint256"},{"internalType":"uint256","name":"amountETH","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"uint256","name":"liquidity","type":"uint256"},{"internalType":"uint256","name":"amountAMin","type":"uint256"},{"internalType":"uint256","name":"amountBMin","type":"uint256"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"},{"internalType":"bool","name":"approveMax","type":"bool"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"removeLiquidityWithPermit","outputs":[{"internalType":"uint256","name":"amountA","type":"uint256"},{"internalType":"uint256","name":"amountB","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"tokenA","type":"address"},{"internalType":"address","name":"tokenB","type":"address"}],"name":"sortTokens","outputs":[{"internalType":"address","name":"token0","type":"address"},{"internalType":"address","name":"token1","type":"address"}],"stateMutability":"pure","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"internalType":"struct Router.route[]","name":"routes","type":"tuple[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactETHForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"internalType":"struct Router.route[]","name":"routes","type":"tuple[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForETH","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"components":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"bool","name":"stable","type":"bool"}],"internalType":"struct Router.route[]","name":"routes","type":"tuple[]"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokens","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"amountIn","type":"uint256"},{"internalType":"uint256","name":"amountOutMin","type":"uint256"},{"internalType":"address","name":"tokenFrom","type":"address"},{"internalType":"address","name":"tokenTo","type":"address"},{"internalType":"bool","name":"stable","type":"bool"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"deadline","type":"uint256"}],"name":"swapExactTokensForTokensSimple","outputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"weth","outputs":[{"internalType":"contract IWETH","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"stateMutability":"payable","type":"receive"}]}'
      );
    },
  },
]);
