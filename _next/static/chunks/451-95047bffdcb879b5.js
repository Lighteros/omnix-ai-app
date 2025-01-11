"use strict";
(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [451],
  {
    23751: function (e, t, n) {
      var a = n(57437);
      n(2265),
        (t.Z = (e) => {
          let { id: t, children: n, className: i, open: s, setOpen: u } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("label", { htmlFor: t, className: i, children: n[0] }),
              (0, a.jsx)("input", {
                type: "checkbox",
                id: t,
                className: "modal-toggle",
                checked: s,
                readOnly: !0,
              }),
              (0, a.jsxs)("div", {
                className: "modal",
                children: [
                  (0, a.jsx)("div", {
                    className: "modal-box modalContainer",
                    children: n[1],
                  }),
                  (0, a.jsx)("label", {
                    className: "modal-backdrop",
                    htmlFor: t,
                    onClick: () => u && u(!1),
                    children: "Close",
                  }),
                ],
              }),
            ],
          });
        });
    },
    72692: function (e, t, n) {
      var a = n(57437);
      n(2265);
      var i = n(16691),
        s = n.n(i),
        u = n(73616);
      t.Z = () => {
        let { openChainModal: e } = (0, u.iC)();
        return (0, a.jsxs)("div", {
          className: "flex flex-col items-center h-screen pt-[34vh]",
          children: [
            (0, a.jsxs)("div", {
              className: "w-60 md:w-96 flex flex-col items-center",
              children: [
                (0, a.jsx)(s(), {
                  loading: "lazy",
                  className: "lazyload",
                  src: "/static/img/icon/network.svg",
                  alt: "networkError",
                  width: 20,
                  height: 20,
                }),
                (0, a.jsx)("h1", { children: "Unsupported Network" }),
                (0, a.jsx)("div", {
                  children: (0, a.jsx)("p", {
                    children: "Switch to supported network.",
                  }),
                }),
              ],
            }),
            (0, a.jsx)("div", {
              className: "mt-6",
              children: (0, a.jsx)("button", {
                className: "offButton",
                onClick: e,
                children: "Switch Network",
              }),
            }),
          ],
        });
      };
    },
    52098: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return useEcho;
        },
      });
      var a = n(2265),
        i = n(63575),
        s = n(94727),
        u = n(14817),
        r = n(92424),
        p = n(79037),
        o = n(17513),
        l = JSON.parse(
          '{"Mt":[{"inputs":[{"internalType":"contract IERC20","name":"_WIOTX","type":"address"},{"internalType":"address","name":"__ve","type":"address"},{"internalType":"contract IERC721","name":"_NFT","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"pendingWIOTX","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"pendingLOXO","type":"uint256"}],"name":"Harvest","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"limitToLock","type":"uint256"}],"name":"LogLimit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"rewardPerSecondWIOTX","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPerSecondLOXO","type":"uint256"}],"name":"LogRewardPerSecond","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"lastRewardTime","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPerSecondWIOTX","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"rewardPerSecondLOXO","type":"uint256"}],"name":"LogUpdatePool","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"user","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":true,"internalType":"address","name":"to","type":"address"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"LOXO","outputs":[{"internalType":"contract ILoxo","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT","outputs":[{"internalType":"contract IERC721","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WIOTX","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"_ve","outputs":[{"internalType":"contract IVotingEscrow","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_keepers","type":"address[]"}],"name":"addKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributePeriod","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"harvest","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isKeeper","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastDistributedTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"bytes","name":"","type":"bytes"}],"name":"onERC721Received","outputs":[{"internalType":"bytes4","name":"","type":"bytes4"}],"stateMutability":"pure","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"pendingReward","outputs":[{"internalType":"uint256","name":"pendingWIOTX","type":"uint256"},{"internalType":"uint256","name":"pendingLOXO","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"poolInfo","outputs":[{"internalType":"uint256","name":"accRewardPerShareWIOTX","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShareLOXO","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_keepers","type":"address[]"}],"name":"removeKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardPerSecond","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardPerSecondLOXO","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"amountLOXO","type":"uint256"}],"name":"setDistributionRate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_limitToLock","type":"uint256"}],"name":"setLimit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_rewardPerSecond","type":"uint256"},{"internalType":"uint256","name":"_rewardPerSecondNewToken","type":"uint256"}],"name":"setRewardPerSecond","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"stakedTokenIds","outputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokenOwner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updatePool","outputs":[{"components":[{"internalType":"uint256","name":"accRewardPerShareWIOTX","type":"uint256"},{"internalType":"uint256","name":"accRewardPerShareLOXO","type":"uint256"},{"internalType":"uint256","name":"lastRewardTime","type":"uint256"}],"internalType":"struct MasterChef.PoolInfo","name":"pool","type":"tuple"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userInfo","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"int256","name":"rewardDebtWIOTX","type":"int256"},{"internalType":"int256","name":"rewardDebtLOXO","type":"int256"},{"internalType":"int256","name":"rewardDebt","type":"int256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"tokenIds","type":"uint256[]"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        y = n(35078),
        d = n(19743),
        m = n(68671),
        c = n(99720);
      let f = new y.vU(l.Mt),
        T = new y.vU(o.Mt);
      var useEcho = function (e) {
        let { chain: t } = (0, p.m)(),
          [n, y] = (0, a.useState)(!0),
          [b, w] = (0, a.useState)(""),
          [v, M] = (0, a.useState)(""),
          [x, h] = (0, a.useState)(""),
          [k, g] = (0, a.useState)([""]),
          [O, S] = (0, a.useState)([BigInt(0)]),
          [I, C] = (0, a.useState)(BigInt(0)),
          [L, N] = (0, a.useState)(BigInt(0)),
          [R, F] = (0, a.useState)(""),
          [D, _] = (0, a.useState)([BigInt(0)]),
          [P, X] = (0, a.useState)([BigInt(0), BigInt(0)]),
          [E, A] = (0, a.useState)([]);
        (0, a.useEffect)(() => {
          t && e && H();
        }, [e, t]);
        let H = (0, a.useCallback)(async () => {
            try {
              var n, a, u, r, p, b, v, x, k, O;
              let I = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                L = d.N
                  ? await (async () => {
                      let n = [
                          {
                            target: I.LoxoHolders,
                            allowFailure: !0,
                            callData: T.encodeFunctionData("MAX_SUPPLY", []),
                          },
                          {
                            target: I.LoxoHolders,
                            allowFailure: !0,
                            callData: T.encodeFunctionData("totalSupply", []),
                          },
                          {
                            target: I.LoxoHolders,
                            allowFailure: !0,
                            callData: T.encodeFunctionData("balanceOf", [
                              I.MaterChef,
                            ]),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData("stakedTokenIds", [
                              e,
                            ]),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData("tokenOwner", [e]),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData(
                              "rewardPerSecond",
                              []
                            ),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData("pendingReward", [
                              e,
                            ]),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData("userInfo", [e]),
                          },
                          {
                            target: I.MaterChef,
                            allowFailure: !0,
                            callData: f.encodeFunctionData(
                              "rewardPerSecondLOXO",
                              []
                            ),
                          },
                          {
                            target: I.LoxoHolders,
                            allowFailure: !0,
                            callData: T.encodeFunctionData("tokensOfOwner", [
                              e,
                            ]),
                          },
                        ],
                        a = await (0, m.Qj)(
                          (null == t ? void 0 : t.id) === 4689 ? t.id : 4689,
                          n
                        );
                      return a
                        ? [
                            {
                              result: (0, m.aX)(a[0])
                                ? T.decodeFunctionResult(
                                    "MAX_SUPPLY",
                                    a[0].returnData
                                  )[0]
                                : 0n,
                            },
                            {
                              result: (0, m.aX)(a[1])
                                ? T.decodeFunctionResult(
                                    "totalSupply",
                                    a[1].returnData
                                  )[0]
                                : 0n,
                            },
                            {
                              result: (0, m.aX)(a[2])
                                ? T.decodeFunctionResult(
                                    "balanceOf",
                                    a[2].returnData
                                  )[0]
                                : 0n,
                            },
                            {
                              result: (0, m.aX)(a[3])
                                ? f.decodeFunctionResult(
                                    "stakedTokenIds",
                                    a[3].returnData
                                  )[0]
                                : [],
                            },
                            {
                              result: (0, m.aX)(a[4])
                                ? f.decodeFunctionResult(
                                    "tokenOwner",
                                    a[4].returnData
                                  )[0]
                                : [],
                            },
                            {
                              result: (0, m.aX)(a[5])
                                ? f.decodeFunctionResult(
                                    "rewardPerSecond",
                                    a[5].returnData
                                  )[0]
                                : 0n,
                            },
                            {
                              result: (0, m.aX)(a[6])
                                ? f.decodeFunctionResult(
                                    "pendingReward",
                                    a[6].returnData
                                  )
                                : [],
                            },
                            {
                              result: (0, m.aX)(a[7])
                                ? f.decodeFunctionResult(
                                    "userInfo",
                                    a[7].returnData
                                  )[0]
                                : [],
                            },
                            {
                              result: (0, m.aX)(a[8])
                                ? f.decodeFunctionResult(
                                    "rewardPerSecondLOXO",
                                    a[8].returnData
                                  )[0]
                                : 0n,
                            },
                            {
                              result: (0, m.aX)(a[9])
                                ? T.decodeFunctionResult(
                                    "tokensOfOwner",
                                    a[9].returnData
                                  )[0]
                                : 0n,
                            },
                          ]
                        : [
                            { result: 0n },
                            { result: 0n },
                            { result: 0n },
                            { result: [] },
                            { result: [] },
                            { result: 0n },
                            { result: [] },
                            { result: [] },
                            { result: 0n },
                            { result: 0n },
                          ];
                    })()
                  : await (0, s.J)(c.vc, {
                      contracts: [
                        {
                          address: I.LoxoHolders,
                          abi: o.Mt,
                          functionName: "MAX_SUPPLY",
                          args: [],
                        },
                        {
                          address: I.LoxoHolders,
                          abi: o.Mt,
                          functionName: "totalSupply",
                          args: [],
                        },
                        {
                          address: I.LoxoHolders,
                          abi: o.Mt,
                          functionName: "balanceOf",
                          args: [I.MaterChef],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "stakedTokenIds",
                          args: [e],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "tokenOwner",
                          args: [e],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "rewardPerSecond",
                          args: [],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "pendingReward",
                          args: [e],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "userInfo",
                          args: [e],
                        },
                        {
                          address: I.MaterChef,
                          abi: l.Mt,
                          functionName: "rewardPerSecondLOXO",
                          args: [],
                        },
                        {
                          address: I.LoxoHolders,
                          abi: o.Mt,
                          functionName: "tokensOfOwner",
                          args: [e],
                        },
                      ],
                    });
              return (
                M(null === (n = L[0]) || void 0 === n ? void 0 : n.result),
                w(null === (a = L[1]) || void 0 === a ? void 0 : a.result),
                h(null === (u = L[2]) || void 0 === u ? void 0 : u.result),
                S(null === (r = L[3]) || void 0 === r ? void 0 : r.result),
                g(null === (p = L[4]) || void 0 === p ? void 0 : p.result),
                C(null === (b = L[5]) || void 0 === b ? void 0 : b.result),
                X(null === (v = L[6]) || void 0 === v ? void 0 : v.result),
                A(null === (x = L[7]) || void 0 === x ? void 0 : x.result),
                N(null === (k = L[8]) || void 0 === k ? void 0 : k.result),
                _(null === (O = L[9]) || void 0 === O ? void 0 : O.result),
                y(!1),
                L || []
              );
            } catch (e) {
              return console.error("Caught an error:", e), y(!1), [];
            }
          }, [t, e]),
          j = (0, a.useCallback)(async () => {
            let e = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
              n = await (0, u.n)(c.vc, {
                address: e.MaterChef,
                abi: l.Mt,
                functionName: "harvest",
                args: [],
              });
            return y(!1), n;
          }, [t]),
          U = (0, a.useCallback)(
            async (e) => {
              let n = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                a = await (0, u.n)(c.vc, {
                  address: n.MaterChef,
                  abi: l.Mt,
                  functionName: "deposit",
                  args: [e],
                });
              return y(!1), a;
            },
            [t]
          ),
          B = (0, a.useCallback)(
            async (e) => {
              let n = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                a = await (0, u.n)(c.vc, {
                  address: n.MaterChef,
                  abi: l.Mt,
                  functionName: "withdraw",
                  args: [e],
                });
              return y(!1), a;
            },
            [t]
          ),
          W = (0, a.useCallback)(
            async (e) => {
              let n = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                a = await (0, u.n)(c.vc, {
                  address: n.LoxoHolders,
                  abi: o.Mt,
                  functionName: "setApprovalForAll",
                  args: [n.MaterChef, e],
                });
              return y(!1), a;
            },
            [t]
          ),
          J = (0, a.useCallback)(async () => {
            try {
              let n = i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                a = await (0, r.L)({
                  address: n.LoxoHolders,
                  abi: o.Mt,
                  functionName: "isApprovedForAll",
                  args: [e, n.MaterChef],
                });
              return y(!1), a;
            } catch (e) {
              console.error("Transaction Error ", e);
            }
          }, [t, e]),
          Y = (0, a.useCallback)(
            async (e) => {
              try {
                let n =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, r.L)({
                    address: n.LoxoHolders,
                    abi: o.Mt,
                    functionName: "balanceOf",
                    args: [e],
                  });
                return a;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            },
            [t, e]
          );
        return {
          totalStaked: b,
          max_supply: v,
          balanceOf: x,
          isLoading: n,
          StakedTokenIds: O,
          rewardsPerSecond: I,
          rewardsPerSecondLOXO: L,
          claimableFees: R,
          userInfo: E,
          claim: j,
          fetchData: H,
          tokensOfOwner: D,
          stake: U,
          unstake: B,
          approval: W,
          isApproveForAll: J,
          accountNFTBalance: Y,
          pendingReward: P,
        };
      };
    },
    41658: function (e, t, n) {
      n.d(t, {
        Z: function () {
          return useLoxoHolders;
        },
      });
      var a = n(2265),
        i = n(63575),
        s = n(14817),
        u = n(92424),
        r = n(79037),
        p = n(17513),
        o = n(28936),
        l = JSON.parse(
          '{"Mt":[{"inputs":[{"internalType":"address","name":"_wbnb","type":"address"},{"internalType":"address","name":"_Loxoholders","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"balance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"vesting_period","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokenPerSec","type":"uint256"}],"name":"VestingUpdate","type":"event"},{"inputs":[],"name":"DISTRIBUTION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"Loxoholders","outputs":[{"internalType":"contract LoxoHolders","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"deposit","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"depositors","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"feesPerEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"depositor","type":"address"}],"name":"removeDepositor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"reservedAmounts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"depositor","type":"address"}],"name":"setDepositor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"userCheckpoint","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"wbnb","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}'
        ),
        y = n(99720),
        useLoxoHolders = function (e) {
          let { chain: t } = (0, r.m)(),
            [n, d] = (0, a.useState)(!0),
            [m, c] = (0, a.useState)(0),
            [f, T] = (0, a.useState)(0),
            claimPerpRewards = async () => {
              try {
                let e =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  n = await (0, s.n)(y.vc, {
                    address: e.Diamond,
                    abi: o.M,
                    functionName: "nftClaim",
                    args: [],
                  });
                return d(!1), n;
              } catch (e) {
                return console.log(e, "===>error"), null;
              }
            },
            fetchDiamond = async (e) => {
              try {
                let n =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, u.L)({
                    address: n.Diamond,
                    abi: o.M,
                    functionName: "nftUserClaimable",
                    args: [e],
                  });
                return a;
              } catch (e) {
                return console.error("Transaction Error", e), null;
              }
            },
            b = (0, a.useCallback)(async () => {
              try {
                let n =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, u.L)({
                    address: n.LoxoHolders,
                    abi: p.Mt,
                    functionName: "originalMinters",
                    args: [e],
                  });
                return c(a), a;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            }, [t, e]),
            w = (0, a.useCallback)(async () => {
              try {
                let n =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, u.L)({
                    address: n.Royalties,
                    abi: l.Mt,
                    functionName: "claimable",
                    args: [e],
                  });
                return T(a), a;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            }, [e, t]),
            v = (0, a.useCallback)(
              async (e) => {
                let n =
                    i.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, s.n)(y.vc, {
                    address: n.Royalties,
                    abi: l.Mt,
                    functionName: "claim",
                    args: [e],
                  });
                return d(!1), a;
              },
              [t, e]
            );
          return {
            claimableAmount: f,
            originalMinters: m,
            isOriginalMinters: b,
            claimable: w,
            fetchDiamond,
            claimPerpRewards,
            claimRoyalties: v,
          };
        };
    },
    17513: function (e) {
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"uint256","name":"_maxSupply","type":"uint256"},{"internalType":"uint256","name":"_nftPrice","type":"uint256"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[],"name":"MAX_PER_MINT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_RESERVE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_SUPPLY","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"NFT_PRICE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"baseURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bytes32[]","name":"proof","type":"bytes32[]"}],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"originalMinters","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"presale","outputs":[{"internalType":"enum LoxoHolders.Status","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"privateSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"publicSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"reserveNFTs","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"reservedAmount","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"root","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"bytes","name":"data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"operator","type":"address"},{"internalType":"bool","name":"approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"baseURI_","type":"string"}],"name":"setBaseURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_nftPrice","type":"uint256"}],"name":"setNftPrice","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"_root","type":"bytes32"}],"name":"setRoot","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"uint256","name":"index","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"tokensOfOwner","outputs":[{"internalType":"uint256[]","name":"","type":"uint256[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_NFT_PRICE","type":"uint256"},{"internalType":"uint256","name":"_MAX_PER_MINT","type":"uint256"},{"internalType":"enum LoxoHolders.Status","name":"_newStatus","type":"uint8"}],"name":"updateStatus","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"whiteListSale","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"payable","type":"function"}]}'
      );
    },
  },
]);
