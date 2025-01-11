(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [133],
  {
    42480: function () {},
    19743: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return a;
        },
      });
      let a = !0;
    },
    68204: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useLock;
        },
        h: function () {
          return f;
        },
      });
      var a = n(2265),
        i = n(14817),
        s = n(92424),
        p = n(28936),
        u = n(35078),
        r = n(68671),
        y = n(56129),
        d = n(63246),
        o = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"address","name":"","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_recipient","type":"address"}],"name":"initialMint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"initialMinted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"merkleClaim","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"mint","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"redemptionReceiver","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        l = n(23190),
        m = n(79037),
        c = n(79352),
        T = n(99720);
      let b = new u.vU(p.M),
        f = {
          account: "",
          amount: BigInt(0),
          attachments: BigInt(0),
          decimals: 0,
          id: 0,
          lockEnd: 0,
          rebase_amount: BigInt(0),
          token: "",
          tokenDecimals: BigInt(0),
          tokenSymbol: "",
          vote_ts: BigInt(0),
          voted: !1,
          votes: [],
          voting_amount: BigInt(0),
        };
      var useLock = function (e) {
        let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1],
          [n, p] = (0, a.useState)([]),
          [u, w] = (0, a.useState)(""),
          [v, M] = (0, a.useState)(BigInt(0)),
          { chain: g } = (0, m.m)(),
          [_, k] = (0, a.useState)(!0),
          [x, h] = (0, a.useState)([]),
          [I, N] = (0, a.useState)([f]);
        (0, a.useEffect)(() => {
          t || getVeNFTBalance();
        }, [e, g]);
        let getNFTList = async () => {
            try {
              let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                n = await (0, s.L)({
                  address: t.veNFTAPIV2,
                  abi: d.Mt,
                  functionName: "getNFTFromAddress",
                  args: [e],
                });
              return n;
            } catch (e) {
              return [];
            }
          },
          fetchDiamond = async (e) => {
            try {
              let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                n = e.map((e) => ({
                  target: t.Diamond,
                  allowFailure: !0,
                  callData: b.encodeFunctionData("claimable", [e.id]),
                })),
                a = await (0, r.Qj)(
                  (null == g ? void 0 : g.id) === 4689 ? g.id : 4689,
                  n
                );
              if (null == a ? void 0 : a.length)
                return a.map((e, t) => {
                  if (!(0, r.aX)(e)) return {};
                  let n = b.decodeFunctionResult("claimable", e.returnData)[0],
                    a = n.map((e) => ({
                      tokenAddress: e[0] || "",
                      claimData: e[1] || 0n,
                    }));
                  return a;
                });
              return [];
            } catch (e) {
              console.error("Transaction Error ", e);
            }
          },
          getVeNFTBalance = async () => {
            if (!e) return [];
            {
              let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                n = [];
              try {
                n = await (0, s.L)({
                  address: t.veNFTAPIV2,
                  abi: d.Mt,
                  functionName: "getNFTFromAddress",
                  args: [e],
                });
                let a = await fetchDiamond(n),
                  i = n.map((e, t) => ({
                    ...e,
                    perpRewards: (null == a ? void 0 : a[t]) || [],
                  }));
                return k(!1), p(i), i || [];
              } catch (e) {
                return k(!1), null;
              }
            }
          };
        (0, a.useEffect)(() => {
          e && F();
        }, [e, g]);
        let F = (0, a.useCallback)(async () => {
          try {
            let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
              n = await (0, s.L)({
                address: t.LOX,
                abi: o.Mt,
                functionName: "balanceOf",
                args: [e],
              });
            w((0, c.d)(n));
          } catch (e) {
            console.log("caught: ", e);
          }
        }, [e, g]);
        async function fetchAllowance(e) {
          try {
            let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
              n = await (0, s.L)({
                address: t.LOX,
                abi: o.Mt,
                functionName: "allowance",
                args: [e, t.VotingEscrow],
              });
            return n;
          } catch (e) {
            console.log("error fetching allowance");
          }
        }
        (0, a.useEffect)(() => {
          e &&
            (async () => {
              let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                n = await (0, s.L)({
                  address: t.LOX,
                  abi: o.Mt,
                  functionName: "allowance",
                  args: [e, t.VotingEscrow],
                });
              M(n);
            })().catch((e) => {
              console.log("caught: ", e);
            });
        }, [e]);
        let R = (0, a.useCallback)(
            async (e, t) => {
              try {
                let n = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                  a = await (0, i.n)(T.vc, {
                    address: n.VotingEscrow,
                    abi: l.Mt,
                    functionName: "create_lock",
                    args: [e, 86400 * t + ""],
                  });
                return a;
              } catch (e) {
                throw (console.error("Transaction Error ", e), e);
              }
            },
            [g]
          ),
          A = (0, a.useCallback)(
            async (e) => {
              let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                n = await (0, i.n)(T.vc, {
                  address: t.LOX,
                  abi: o.Mt,
                  functionName: "approve",
                  args: [t.VotingEscrow, e],
                });
              return n;
            },
            [g]
          ),
          C = (0, a.useCallback)(
            async (e, t) => {
              try {
                let n = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                  a = await (0, i.n)(T.vc, {
                    address: n.VotingEscrow,
                    abi: l.Mt,
                    functionName: "merge",
                    args: [e, t],
                  });
                return a;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            },
            [g]
          ),
          E = (0, a.useCallback)(
            async (e, t, n) => {
              let a = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                s = await (0, i.n)(T.vc, {
                  address: a.VotingEscrow,
                  abi: l.Mt,
                  functionName: "transferFrom",
                  args: [e, t, n],
                });
              return s;
            },
            [g]
          ),
          O = (0, a.useCallback)(
            async (e, t) => {
              let n = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                a = await (0, i.n)(T.vc, {
                  address: n.VotingEscrow,
                  abi: l.Mt,
                  functionName: "split",
                  args: [e, t],
                });
              return a;
            },
            [g]
          ),
          D = (0, a.useCallback)(
            async (e, t) => {
              let n = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                a = await (0, i.n)(T.vc, {
                  address: n.VotingEscrow,
                  abi: l.Mt,
                  functionName: "increase_amount",
                  args: [t, e],
                });
              return a;
            },
            [g]
          ),
          P = (0, a.useCallback)(
            async (e, t) => {
              try {
                let n = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                  a = await (0, i.n)(T.vc, {
                    address: n.VotingEscrow,
                    abi: l.Mt,
                    functionName: "increase_unlock_time",
                    args: [e, 86400 * t + ""],
                  });
                return { status: !0, msg: a };
              } catch (e) {
                return (
                  console.error("Transaction Error ", e), { status: !1, msg: e }
                );
              }
            },
            [g]
          ),
          S = (0, a.useCallback)(
            async (e) => {
              try {
                let t = y.x[(null == g ? void 0 : g.id) === 4689 ? g.id : 4689],
                  n = await (0, i.n)(T.vc, {
                    address: t.VotingEscrow,
                    abi: l.Mt,
                    functionName: "withdraw",
                    args: [e],
                  });
                return n;
              } catch (e) {
                throw (console.error("Transaction Error ", e), e);
              }
            },
            [g]
          );
        return {
          getNFTList,
          balanceOf: u,
          VeNFTBalance: n,
          allowance: v,
          isLoading: _,
          mergedList: x,
          fetchAllowance,
          createLock: R,
          approveLock: A,
          mergeLock: C,
          transferLock: E,
          splitNFT: O,
          increaseLock: D,
          extendDurationLock: P,
          getVeNFTBalance,
          getBalance: F,
          withdraw: S,
        };
      };
    },
    33275: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useRewards;
        },
      });
      var a = n(79037),
        i = n(2265),
        s = n(63575),
        p = n(14817),
        u = n(28936),
        r = n(92424),
        y = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weight","type":"uint256"}],"name":"Abstained","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Attach","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Detach","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DistributeReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"address","name":"creator","type":"address"},{"indexed":false,"internalType":"address","name":"internal_bribe","type":"address"},{"indexed":true,"internalType":"address","name":"external_bribe","type":"address"},{"indexed":true,"internalType":"address","name":"pool","type":"address"}],"name":"GaugeCreated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"gauge","type":"address"}],"name":"GaugeKilled","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"gauge","type":"address"}],"name":"GaugeRevived","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"sender","type":"address"},{"indexed":true,"internalType":"address","name":"reward","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"NotifyReward","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"voter","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"weight","type":"uint256"}],"name":"Voted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"whitelister","type":"address"},{"indexed":true,"internalType":"address","name":"token","type":"address"}],"name":"Whitelisted","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"lp","type":"address"},{"indexed":true,"internalType":"address","name":"gauge","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"address","name":"_minter","type":"address"}],"name":"_initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"_ve","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"attachTokenToGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"bribefactory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_bribes","type":"address[]"},{"internalType":"address[][]","name":"_tokens","type":"address[][]"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimBribes","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_fees","type":"address[]"},{"internalType":"address[][]","name":"_tokens","type":"address[][]"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_gauges","type":"address[]"},{"internalType":"address[][]","name":"_tokens","type":"address[][]"}],"name":"claimRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_pool","type":"address"}],"name":"createGauge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"account","type":"address"}],"name":"detachTokenFromGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_gauges","type":"address[]"}],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gauge","type":"address"}],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"finish","type":"uint256"}],"name":"distribute","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"distributeAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_gauges","type":"address[]"}],"name":"distributeFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"emergencyCouncil","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emitDeposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"emitWithdraw","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"external_bribes","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"factory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"gaugefactory","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gauges","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"gaugesDistributionTimestmap","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"governor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"__ve","type":"address"},{"internalType":"address","name":"_factory","type":"address"},{"internalType":"address","name":"_gauges","type":"address"},{"internalType":"address","name":"_bribes","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"internal_bribes","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isAlive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isGauge","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isWhitelisted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_gauge","type":"address"}],"name":"killGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"lastVoted","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"length","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"minter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"notifyRewardAmount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"poke","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"poolForGauge","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"poolVote","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"poolVoteLength","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"pools","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"reset","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gauge","type":"address"}],"name":"reviveGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_bribeFactory","type":"address"}],"name":"setBribeFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_council","type":"address"}],"name":"setEmergencyCouncil","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gaugeFactory","type":"address"}],"name":"setGaugeFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_governor","type":"address"}],"name":"setGovernor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_minter","type":"address"}],"name":"setMinter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_factory","type":"address"}],"name":"setPairFacotry","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"totalWeight","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"updateAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address[]","name":"_gauges","type":"address[]"}],"name":"updateFor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"start","type":"uint256"},{"internalType":"uint256","name":"end","type":"uint256"}],"name":"updateForRange","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_gauge","type":"address"}],"name":"updateGauge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"usedWeights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"address[]","name":"_poolVote","type":"address[]"},{"internalType":"uint256[]","name":"_weights","type":"uint256[]"}],"name":"vote","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"address","name":"","type":"address"}],"name":"votes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"weights","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"whitelist","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
        ),
        d = n(55969),
        o = n(7487),
        l = n(18531),
        m = n(33843),
        c = n(59069),
        T = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"addNotReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"tokenId","type":"uint256"},{"internalType":"address[]","name":"pairs","type":"address[]"}],"name":"getExpectedClaimForNextEpoch","outputs":[{"components":[{"components":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"string[]","name":"symbols","type":"string[]"},{"internalType":"uint256[]","name":"decimals","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"internalType":"struct RewardAPI.Bribes[]","name":"bribes","type":"tuple[]"}],"internalType":"struct RewardAPI.Rewards[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"pair","type":"address"}],"name":"getPairBribe","outputs":[{"components":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"string[]","name":"symbols","type":"string[]"},{"internalType":"uint256[]","name":"decimals","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"internalType":"struct RewardAPI.Bribes[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"offset","type":"uint256"},{"internalType":"uint256","name":"limit","type":"uint256"}],"name":"getPairsBribeRewards","outputs":[{"components":[{"internalType":"address","name":"pair","type":"address"},{"components":[{"internalType":"address[]","name":"tokens","type":"address[]"},{"internalType":"string[]","name":"symbols","type":"string[]"},{"internalType":"uint256[]","name":"decimals","type":"uint256[]"},{"internalType":"uint256[]","name":"amounts","type":"uint256[]"}],"internalType":"struct RewardAPI.Bribes[]","name":"bribes","type":"tuple[]"}],"internalType":"struct RewardAPI.PairsBribeRewards[]","name":"","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"notReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairFactory","outputs":[{"internalType":"contract IPairFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"removeNotReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"underlyingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"contract IVoter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}'
        ),
        b = n(63246),
        f = n(99720),
        w = n(79352),
        v = n(27064),
        M = n(5120),
        g = n(54829),
        _ = n(41650),
        useRewards = function (e) {
          let { chain: t } = (0, a.m)(),
            [n, k] = (0, i.useState)(!0),
            x = (0, i.useCallback)(async () => {
              try {
                let e =
                    s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  n = await (0, r.L)({
                    address: e.Minter,
                    abi: c.Mt,
                    functionName: "calculate_emission",
                    args: [],
                  }),
                  a = (0.675 * parseFloat((0, w.d)(BigInt(n)))) / 100;
                return a;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            }, [t]),
            h = (0, i.useCallback)(
              async (e, n) => {
                let a = e.reduce((e, t) => {
                    let { bribe: n, token: a } = t;
                    return e[n] || (e[n] = []), e[n].push(a), e;
                  }, {}),
                  i = Object.keys(a),
                  u = Object.values(a),
                  r = s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689];
                try {
                  let e = await (0, p.n)(f.vc, {
                    address: r.Voter,
                    abi: y.Mt,
                    functionName: "claimBribes",
                    args: [i, u, n],
                  });
                  return k(!1), e;
                } catch (e) {
                  console.error("claimBribes Transaction Error", e);
                }
              },
              [t]
            ),
            I = (0, i.useCallback)(
              async (e, n, a) => {
                try {
                  let e =
                      s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                    i = n.bribes,
                    u = n.fees,
                    r = n.rewards,
                    o = n.veDist,
                    l = i.map((e) => e.bribe),
                    m = i.map((e) =>
                      e.bribesEarned.map((e) => e.token.address)
                    ),
                    c = [];
                  if (0 == i.length && 0 == u.length && 0 == r.length)
                    return console.log("Nothing to claim"), c;
                  if (i.length > 0) {
                    let t = await (0, p.n)(f.vc, {
                      address: e.Voter,
                      abi: y.Mt,
                      functionName: "claimBribes",
                      args: [l, m, a],
                    });
                    c.push(t);
                  }
                  if (u.length > 0)
                    for (let e = 0; e < u.length; e++) {
                      let t = await R(u[e].pair_address);
                      c.push(t);
                    }
                  if (o.length > 0)
                    for (let t = 0; t < o.length; t++) {
                      let t = await (0, p.n)(f.vc, {
                        address: e.RewardDistributor,
                        abi: d.Mt,
                        functionName: "claim",
                        args: [a],
                      });
                      c.push(t);
                    }
                  return c;
                } catch (e) {
                  throw (console.error("Transaction Error ", e), e);
                }
              },
              [t]
            ),
            N = (0, i.useCallback)(
              async (e, n) => {
                let a = e.map((e) => [e.token]),
                  i = e.map((e) => e.fee),
                  u = s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689];
                try {
                  let e = await (0, p.n)(f.vc, {
                    address: u.Voter,
                    abi: y.Mt,
                    functionName: "claimFees",
                    args: [i, a, n],
                  });
                  return k(!1), e;
                } catch (e) {
                  console.error("Transaction Error", e);
                }
              },
              [t]
            ),
            claimPerpRewards = async (e) => {
              try {
                let n =
                    s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, p.n)(f.vc, {
                    address: n.Diamond,
                    abi: u.M,
                    functionName: "claim",
                    args: [e],
                  });
                return k(!1), a;
              } catch (e) {
                return console.log(e, "===>error"), null;
              }
            },
            F = (0, i.useCallback)(
              async (e) => {
                let n =
                    s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  a = await (0, p.n)(f.vc, {
                    address: n.RewardDistributor,
                    abi: d.Mt,
                    functionName: "claim",
                    args: [e],
                  });
                return k(!1), a;
              },
              [t]
            ),
            R = (0, i.useCallback)(
              async (e) => {
                let t = await (0, p.n)(f.vc, {
                  address: e,
                  abi: o.Mt,
                  functionName: "claimFees",
                  args: [],
                });
                return k(!1), t;
              },
              [t]
            ),
            A = (0, i.useCallback)(
              async (e, n) => {
                try {
                  let a =
                      s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                    i = await (0, p.n)(f.vc, {
                      address: a.Voter,
                      abi: y.Mt,
                      functionName: "claimRewards",
                      args: [e, n],
                    });
                  return k(!1), i;
                } catch (e) {
                  console.error("Transaction Error ", e);
                }
              },
              [t]
            ),
            C = (0, i.useCallback)(async (e) => {
              let t = await (0, p.n)(f.vc, {
                address: e,
                abi: l.Mt,
                functionName: "getReward",
                args: [],
              });
              return k(!1), t;
            }, []),
            E = (0, i.useCallback)(
              async (e) => {
                try {
                  let n =
                      s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                    a = await (0, r.L)({
                      address: n.Voter,
                      abi: y.Mt,
                      functionName: "gauges",
                      args: [e],
                    });
                  return a;
                } catch (e) {
                  console.error("Error gauge address:", e);
                }
              },
              [t]
            ),
            O = (0, i.useCallback)(
              async (e) => {
                try {
                  let n =
                      s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                    a = await (0, r.L)({
                      address: n.rewardApi,
                      abi: T.Mt,
                      functionName: "getPairBribe",
                      args: [e],
                    });
                  return a[0];
                } catch (e) {
                  console.error("Error gauge address:", e);
                }
              },
              [t]
            ),
            D = (0, i.useCallback)(
              async (e, n) => {
                try {
                  let a =
                      s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                    i = await (0, r.L)({
                      address: a.veNFTAPIV2,
                      abi: b.Mt,
                      functionName: "singlePairReward",
                      args: [e, n],
                    });
                  return i;
                } catch (e) {
                  console.error("Error gauge address:", e);
                }
              },
              [t]
            ),
            P = (0, i.useCallback)(async () => {
              try {
                let e =
                    s.xk[(null == t ? void 0 : t.id) === 4689 ? t.id : 4689],
                  n = await (0, r.L)({
                    address: e.TraderRewards,
                    abi: m.Mt,
                    functionName: "currentEpoch",
                    args: [],
                  }),
                  a = await (0, r.L)({
                    address: e.TraderRewards,
                    abi: m.Mt,
                    functionName: "epochDataURIs",
                    args: [Number(n)],
                  }),
                  i = await (0, r.L)({
                    address: e.TraderRewards,
                    abi: m.Mt,
                    functionName: "epochDataURIs",
                    args: [Number(n) - 1],
                  }),
                  p = await (0, r.L)({
                    address: e.TraderRewards,
                    abi: m.Mt,
                    functionName: "epochDataURIs",
                    args: [Number(n) - 2],
                  });
                if (!a && i) throw Error("URI not found for the given epoch");
                let [u, y, d] = await Promise.all([
                  g.Z.get(a),
                  g.Z.get(i),
                  g.Z.get(p),
                ]);
                if (u.status && 200 !== y.status)
                  throw Error(
                    "Failed to fetch data: HTTP status ".concat(u.status)
                  );
                let o = u.data || [],
                  l = y.data || [],
                  c = d.data || [];
                return {
                  currentEpoch: Number(n),
                  currentEpochList: o,
                  preEpoch: l,
                  twoProEpoch: c,
                };
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            }, [t]);
          async function generateMerkleProof(e, t, n) {
            let a = n.map((e) =>
                (0, v.w)(
                  (0, M._)(
                    ["address", "uint256"],
                    [e.trader, e.reward.toString()]
                  )
                )
              ),
              i = new _.MerkleTree(a, v.w, { sortPairs: !0 });
            i.getRoot().toString("hex");
            let s = (0, v.w)((0, M._)(["address", "uint256"], [e, t])),
              p = i.getHexProof(s);
            return p;
          }
          let S = (0, i.useCallback)(
            async (e, n, a, i) => {
              try {
                let u = await generateMerkleProof(e, n, a),
                  y = s.xk[t ? t.id : 4689],
                  d = await (0, r.L)({
                    address: y.TraderRewards,
                    abi: m.Mt,
                    functionName: "currentEpoch",
                    args: [],
                  }),
                  o = await (0, p.n)(f.vc, {
                    address: y.TraderRewards,
                    abi: m.Mt,
                    functionName: "claimReward",
                    args: [Number(d) - (2 - i), n, u],
                  });
                return o;
              } catch (e) {
                throw (console.error("Error claiming trader reward:", e), e);
              }
            },
            [t]
          );
          return {
            isLoading: n,
            emisionClaimable: x,
            claimVeDist: F,
            claimPairFees: R,
            claimGauge: C,
            claimAllRewards: I,
            claimBribes: h,
            claimPerpRewards,
            ClaimTraderReward: S,
            claimFees: N,
            claimRewards: A,
            fetchGaugeAddress: E,
            getPairBribes: O,
            getTokenNameFromVote: D,
            fetchTradersList: P,
          };
        };
    },
    46094: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return useVote;
        },
      });
      var a = n(2265),
        i = n(63575),
        s = n(92424),
        p = n(14817),
        u = n(79256),
        r = n(28936),
        y = n(23190),
        d = n(16291),
        o = JSON.parse(
          '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"timestamp","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toStake","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"toRoyalties","type":"uint256"}],"name":"Split","type":"event"},{"inputs":[],"name":"PRECISION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"WEEK","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"converterFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"royalties","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"royaltiesFee","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_converter","type":"address"}],"name":"setConverter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amountToStaking","type":"uint256"},{"internalType":"uint256","name":"_amountToRoyalties","type":"uint256"}],"name":"setFees","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_royal","type":"address"}],"name":"setRoyalties","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_splitter","type":"address"},{"internalType":"bool","name":"_what","type":"bool"}],"name":"setSplitter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"split","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"splitter","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"stakingConverter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"swapWIOTXToIOTX","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"wIOTX","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"},{"stateMutability":"payable","type":"receive"}]}'
        ),
        l = n(33843),
        m = n(79037),
        c = n(99720),
        T = n(55969),
        b = n(77778),
        f = n(63246),
        w = n(35078),
        v = n(3605);
      n(93923);
      var M = n(63120),
        g = n(42329);
      n(93754);
      var _ = n(68671);
      let k = new w.vU(d.Mt);
      async function multicallWeights(e, t) {
        let n = i.xk[4689 === e ? e : 4689],
          a = t.map((e) => ({
            target: n.Voter,
            allowFailure: !0,
            callData: k.encodeFunctionData("weights", [e]),
          })),
          s = await (0, _.Qj)(e, a);
        return s
          ? s.map((e) =>
              e.success && "0x" !== e.returnData
                ? k.decodeFunctionResult("weights", e.returnData)[0]
                : BigInt(0)
            )
          : [0n];
      }
      var x = n(92980),
        h = n(19743);
      let I = new w.vU(T.Mt);
      new w.vU(r.M);
      var useVote = function (e) {
        let {
            period: t,
            getPeriod: n,
            allPairs: r,
            fetchData: w,
          } = (0, x.useTokenContext)(),
          { chain: k } = (0, m.m)(),
          [N, F] = (0, a.useState)(!0),
          [R, A] = (0, a.useState)(!0),
          [C, E] = (0, a.useState)(0),
          [O, D] = (0, a.useState)(-1),
          [P, S] = (0, a.useState)({}),
          [V, L] = (0, a.useState)({}),
          [B, U] = (0, a.useState)(),
          G = (0, a.useCallback)(
            async (e, t, n) => {
              let a = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                s = await (0, p.n)(c.vc, {
                  address: a.Voter,
                  abi: d.Mt,
                  functionName: "vote",
                  args: [e, t, n],
                });
              return s;
            },
            [k]
          ),
          W = (0, a.useCallback)(async () => {
            try {
              let e = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                t = await (0, s.L)({
                  address: e.PAIR_FACTORY,
                  abi: M.Mt,
                  functionName: "allPairsLength",
                  args: [],
                });
              return t;
            } catch (e) {
              console.error("Error fetching allPairsLength:", e);
            }
          }, [k]),
          Z = (0, a.useCallback)(
            async (e, t, n) => {
              try {
                i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689];
                let e = null;
                e = r || (await w());
                let t = e.map((e) =>
                    e.users && e.users.length ? { ...e, ...e.users[0] } : e
                  ),
                  n = t.filter(
                    (e) =>
                      "0x0000000000000000000000000000000000000000" !== e.bribe
                  );
                return n;
              } catch (e) {
                return console.error("Error fetching getAllPair :", e), [];
              }
            },
            [t, r, k]
          ),
          z = (0, a.useCallback)(
            async (e, t) => {
              if (!t) return [];
              try {
                let n = await (0, g.K6)(
                  (null == k ? void 0 : k.id) === 4689 ? k.id : 4689,
                  t,
                  e
                );
                return n;
              } catch (e) {
                console.error(e);
              }
              try {
                let n =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                  a = await Promise.all(
                    e.map(async (e) => {
                      let a = await (0, s.L)({
                        address: n.Voter,
                        abi: d.Mt,
                        functionName: "votes",
                        args: [t, e.pair_address],
                      });
                      return a;
                    })
                  ),
                  p = [],
                  u = await (0, s.L)({
                    address: n.Voter,
                    abi: d.Mt,
                    functionName: "totalWeight",
                    args: [],
                  }),
                  r = a.reduce((e, t) => {
                    let n = new b.Z(t).gt(0)
                      ? t
                      : new b.Z(t).times(-1).toNumber();
                    return new b.Z(e).plus(n);
                  }, 0);
                for (let t = 0; t < a.length; t++)
                  try {
                    p.push({
                      address: e[t],
                      totalWeight: (0, v.dF)(u),
                      total: (0, v.dF)(BigInt(a[t])),
                      votePercent:
                        new b.Z(r).gt(0) || new b.Z(r).lt(0)
                          ? new b.Z(a[t]).times(100).div(r).toFixed(0)
                          : "0",
                    });
                  } catch (e) {
                    console.log("error here");
                  }
                return p;
              } catch (e) {
                console.error(e);
              }
            },
            [k]
          ),
          X = (0, a.useCallback)(
            async (e, a) => {
              try {
                F(!0), A(!0);
                let a = [],
                  s = await W();
                if ((D(Number(s) || 0), !(a = await Z(e)))) return [];
                {
                  let e =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689];
                  if (!e)
                    return (
                      console.error("Contract list is undefined"),
                      F(!1),
                      A(!1),
                      null
                    );
                  t || (await n());
                  let s = [];
                  return (
                    (s = await multicallWeights(
                      (null == k ? void 0 : k.id) === 4689 ? k.id : 4689,
                      a.map((e) => e.pair_address)
                    )),
                    a.forEach((e, t) => {
                      e.weights = s[t] ? s[t] : 0n;
                    }),
                    a || []
                  );
                }
              } catch (e) {
                return console.error(e), [];
              } finally {
                F(!1), A(!1);
              }
            },
            [t, k]
          ),
          J = (0, a.useCallback)(
            async (e) => {
              if (!e.length) return [];
              if (!h.N) return e.map((e) => []);
              let t = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                n = e.map((e) => ({
                  target: t.RewardDistributor,
                  allowFailure: !0,
                  callData: I.encodeFunctionData("claimable", [e.id]),
                })),
                a = await (0, _.Qj)(
                  (null == k ? void 0 : k.id) === 4689 ? k.id : 4689,
                  n
                );
              return a
                ? a.map((t, n) => {
                    if (!(0, _.aX)(t)) return [];
                    let a = I.decodeFunctionResult(
                      "claimable",
                      t.returnData
                    )[0];
                    if (a > 0)
                      return [
                        {
                          token: e[n].id,
                          nft: e[n],
                          earned: new b.Z(Number(a)).div(1e18).toFixed(18),
                          rewardType: "Distribution",
                        },
                      ];
                  })
                : [];
            },
            [k]
          ),
          H = (0, a.useCallback)(
            async (e, t, n, a, p) => {
              try {
                let a = await W();
                if ((D(Number(a) || 0), e)) {
                  let a =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689];
                  if (!a)
                    return (
                      console.error("Contract list is undefined"),
                      F(!1),
                      A(!1),
                      null
                    );
                  let p = [];
                  if (!h.N && n) {
                    let e = await (0, s.L)({
                      address: a.RewardDistributor,
                      abi: T.Mt,
                      functionName: "claimable",
                      args: [n],
                    });
                    t &&
                      new b.Z(e.toString()).gt(0) &&
                      p.push({
                        token: n,
                        nft: t,
                        earned: new b.Z(e).div(1e18).toFixed(18),
                        rewardType: "Distribution",
                      });
                  }
                  let u = await (0, s.L)({
                      address: a.veNFTAPIV2,
                      abi: f.Mt,
                      functionName: "allPairRewards",
                      args: [30, 0, n],
                    }),
                    r = u.flatMap((e) =>
                      e.rewards.filter(
                        (e) =>
                          e.amount > BigInt(0) &&
                          "0x0000000000000000000000000000000000000000" !== e.fee
                      )
                    ),
                    y = u.flatMap((e) =>
                      e.rewards.filter(
                        (e) =>
                          e.amount > BigInt(0) &&
                          "0x0000000000000000000000000000000000000000" !==
                            e.bribe
                      )
                    ),
                    d = e
                      .filter((e) => e.gauge && new b.Z(e.rewards).gt(0))
                      .map((e) => ({ ...e, rewardType: "Reward" })),
                    o = { bribes: y, fees: r, rewards: d, veDist: p || [] };
                  return S(o), o;
                }
              } catch (e) {
                return console.error(e), null;
              } finally {
                F(!1), A(!1);
              }
            },
            [t, e, k]
          ),
          K = (0, a.useCallback)(
            async (e) => {
              try {
                let t =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                  n = await (0, s.L)({
                    address: t.VotingEscrow,
                    abi: y.Mt,
                    functionName: "balanceOfNFT",
                    args: [e],
                  });
                return F(!1), n;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            },
            [k]
          ),
          j = (0, a.useCallback)(
            async (e) => {
              try {
                let t =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                  n = await (0, s.L)({
                    address: t.veNFTAPIV2,
                    abi: f.Mt,
                    functionName: "getNFTFromAddress",
                    args: [e],
                  });
                return F(!1), n;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            },
            [k]
          ),
          Q = (0, a.useCallback)(
            async (e) => {
              let t = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                n = await (0, p.n)(c.vc, {
                  address: t.Voter,
                  abi: d.Mt,
                  functionName: "reset",
                  args: [e],
                }),
                a = await (0, u.e)(c.vc, { hash: n });
              return a;
            },
            [k]
          ),
          Y = (0, a.useCallback)(async () => {
            try {
              let e = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                t = await (0, p.n)(c.vc, {
                  address: e.Voter,
                  abi: d.Mt,
                  functionName: "distributeAll",
                  args: [],
                });
              return t;
            } catch (e) {
              console.error("Transaction Error ", e);
            }
          }, [k]),
          q = (0, a.useCallback)(async () => {
            try {
              let e = i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                t = await (0, p.n)(c.vc, {
                  address: e.NFTSalesSplitter,
                  abi: o.Mt,
                  functionName: "split",
                  args: [],
                });
              return t;
            } catch (e) {
              console.error("Transaction Error ", e);
            }
          }, [k]),
          $ = (0, a.useCallback)(
            async (e) => {
              try {
                let t =
                    i.xk[(null == k ? void 0 : k.id) === 4689 ? k.id : 4689],
                  n = await (0, p.n)(c.vc, {
                    address: t.TraderRewards,
                    abi: l.Mt,
                    functionName: "updateRewards",
                    args: [e],
                  });
                return n;
              } catch (e) {
                console.error("Transaction Error ", e);
              }
            },
            [k]
          );
        return {
          isLoading: N,
          AllReward: P,
          pairsReawards: B,
          castVote: G,
          resetVote: Q,
          balanceOfNFT: K,
          activePeriod: C,
          rewardForNextEpoch: V,
          fetchLiquidityPools: Z,
          veNFTAPI: j,
          getVestVotes: z,
          pairsLength: O,
          isVoteLoading: R,
          getRewardBalances: H,
          fetchVeDistEarned: J,
          distributeAll: Y,
          distributeFee: q,
          setTradersList: $,
          getVoteData: X,
        };
      };
    },
    63246: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint8","name":"version","type":"uint8"}],"name":"Initialized","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"oldOwner","type":"address"},{"indexed":false,"internalType":"address","name":"newOwner","type":"address"}],"name":"Owner","type":"event"},{"inputs":[],"name":"MAX_PAIRS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_RESULTS","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amount","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"}],"name":"allPairRewards","outputs":[{"components":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"fee","type":"address"},{"internalType":"address","name":"bribe","type":"address"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct veNFTAPI.Reward[]","name":"rewards","type":"tuple[]"}],"internalType":"struct veNFTAPI.AllPairRewards[]","name":"rewards","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_amounts","type":"uint256"},{"internalType":"uint256","name":"_offset","type":"uint256"}],"name":"getAllNFT","outputs":[{"components":[{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"uint256","name":"attachments","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"uint256","name":"voting_amount","type":"uint256"},{"internalType":"uint256","name":"rebase_amount","type":"uint256"},{"internalType":"uint256","name":"lockEnd","type":"uint256"},{"internalType":"uint256","name":"vote_ts","type":"uint256"},{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"internalType":"struct veNFTAPI.pairVotes[]","name":"votes","type":"tuple[]"},{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"tokenDecimals","type":"uint256"}],"internalType":"struct veNFTAPI.veNFT[]","name":"_veNFT","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_user","type":"address"}],"name":"getNFTFromAddress","outputs":[{"components":[{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"uint256","name":"attachments","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"uint256","name":"voting_amount","type":"uint256"},{"internalType":"uint256","name":"rebase_amount","type":"uint256"},{"internalType":"uint256","name":"lockEnd","type":"uint256"},{"internalType":"uint256","name":"vote_ts","type":"uint256"},{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"internalType":"struct veNFTAPI.pairVotes[]","name":"votes","type":"tuple[]"},{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"tokenDecimals","type":"uint256"}],"internalType":"struct veNFTAPI.veNFT[]","name":"venft","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"}],"name":"getNFTFromId","outputs":[{"components":[{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"bool","name":"voted","type":"bool"},{"internalType":"uint256","name":"attachments","type":"uint256"},{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint128","name":"amount","type":"uint128"},{"internalType":"uint256","name":"voting_amount","type":"uint256"},{"internalType":"uint256","name":"rebase_amount","type":"uint256"},{"internalType":"uint256","name":"lockEnd","type":"uint256"},{"internalType":"uint256","name":"vote_ts","type":"uint256"},{"components":[{"internalType":"address","name":"pair","type":"address"},{"internalType":"uint256","name":"weight","type":"uint256"}],"internalType":"struct veNFTAPI.pairVotes[]","name":"votes","type":"tuple[]"},{"internalType":"address","name":"account","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"string","name":"tokenSymbol","type":"string"},{"internalType":"uint256","name":"tokenDecimals","type":"uint256"}],"internalType":"struct veNFTAPI.veNFT","name":"","type":"tuple"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"},{"internalType":"address","name":"_rewarddistro","type":"address"},{"internalType":"address","name":"_pairApi","type":"address"},{"internalType":"address","name":"_pairFactory","type":"address"}],"name":"initialize","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"notReward","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairAPI","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pairFactory","outputs":[{"internalType":"contract IPairFactory","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardDisitributor","outputs":[{"internalType":"contract IRewardsDistributor","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pairApi","type":"address"}],"name":"setPairAPI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_pairFactory","type":"address"}],"name":"setPairFactory","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_rewarddistro","type":"address"}],"name":"setRewardDistro","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"address","name":"_pair","type":"address"}],"name":"singlePairReward","outputs":[{"components":[{"internalType":"uint256","name":"id","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint8","name":"decimals","type":"uint8"},{"internalType":"address","name":"pair","type":"address"},{"internalType":"address","name":"token","type":"address"},{"internalType":"address","name":"fee","type":"address"},{"internalType":"address","name":"bribe","type":"address"},{"internalType":"string","name":"symbol","type":"string"}],"internalType":"struct veNFTAPI.Reward[]","name":"_reward","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"underlyingToken","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"ve","outputs":[{"internalType":"contract IVotingEscrow","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"contract IVoter","name":"","type":"address"}],"stateMutability":"view","type":"function"}]}'
      );
    },
    28936: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"M":[{"inputs":[{"internalType":"address","name":"_contractOwner","type":"address"},{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"components":[{"internalType":"address","name":"initContract","type":"address"},{"internalType":"bytes","name":"initData","type":"bytes"}],"internalType":"struct Diamond.Initialization[]","name":"_initializations","type":"tuple[]"}],"stateMutability":"payable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"enum LibController.OperatorManage","name":"action","type":"uint8"}],"name":"OperatorsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"activateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOperator","type":"address"}],"name":"addOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deactivateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isEmergencyModeActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"toRemove","type":"address"}],"name":"removeOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"veAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftAmount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"veAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftAmount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_ve","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_masterChef","type":"address"}],"name":"initializeLoxodromeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"isERC20","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterChef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract ILoxoHolders","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftClaimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftRewards","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"closed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"nftUserClaimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardList","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardTokenWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"OMNIX","outputs":[{"internalType":"contract IVotingEscrow","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"veRewards","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bool","name":"closed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"}],"name":"whitelistRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"indexed":false,"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"indexed":false,"internalType":"address","name":"_init","type":"address"},{"indexed":false,"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"DiamondCut","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"internalType":"address","name":"_init","type":"address"},{"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"diamondCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_functionSelector","type":"bytes4"}],"name":"facetAddress","outputs":[{"internalType":"address","name":"facetAddress_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facetAddresses","outputs":[{"internalType":"address[]","name":"facetAddresses_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_facet","type":"address"}],"name":"facetFunctionSelectors","outputs":[{"internalType":"bytes4[]","name":"facetFunctionSelectors_","type":"bytes4[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facets","outputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondLoupe.Facet[]","name":"facets_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}'
      );
    },
    55969: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"address","name":"_voting_escrow","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"time","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"tokens","type":"uint256"}],"name":"CheckpointToken","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"claim_epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"max_epoch","type":"uint256"}],"name":"Claimed","type":"event"},{"inputs":[],"name":"checkpoint_token","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"checkpoint_total_supply","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claim","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"_tokenIds","type":"uint256[]"}],"name":"claim_many","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimable","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"depositor","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"last_token_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_depositor","type":"address"}],"name":"setDepositor","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"setOwner","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_Penalty","type":"uint256"}],"name":"setVoterPenalty","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"start_time","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"time_cursor","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"time_cursor_of","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"timestamp","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token_last_balance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"tokens_per_week","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_epoch_of","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_timestamp","type":"uint256"}],"name":"ve_for_at","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ve_supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voting_escrow","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
      );
    },
    33843: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"contract IERC20","name":"_rewardToken","type":"address"},{"internalType":"address","name":"_fundAddress","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"newDeadline","type":"uint256"}],"name":"DeadlineUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"string","name":"dataURI","type":"string"}],"name":"EpochDataURIUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"newFundAddress","type":"address"}],"name":"FundAddressUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"trader","type":"address"},{"indexed":false,"internalType":"uint256","name":"reward","type":"uint256"}],"name":"RewardClaimed","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"RewardsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"epoch","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"UnclaimedRewardsWithdrawn","type":"event"},{"inputs":[],"name":"CLAIM_DEADLINE","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"EPOCH_DURATION","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_keepers","type":"address[]"}],"name":"addKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"uint256","name":"rewardAmount","type":"uint256"},{"internalType":"bytes32[]","name":"merkleProof","type":"bytes32[]"}],"name":"claimReward","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"claimedRewards","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"currentEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochDataURIs","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"epochMerkleRoots","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"fundAddress","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"isKeeper","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"lastUpdateTime","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_keepers","type":"address[]"}],"name":"removeKeeper","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"renounceOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"rewardToken","outputs":[{"internalType":"contract IERC20","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardTokenBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalClaimedPerEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"totalRewardsPerEpoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_epochNumber","type":"uint256"}],"name":"updateDeadline","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"epoch","type":"uint256"},{"internalType":"string","name":"newDataURI","type":"string"}],"name":"updateEpochDataURI","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newFundAddress","type":"address"}],"name":"updateFundAddress","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes32","name":"merkleRoot","type":"bytes32"}],"name":"updateRewards","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"withdrawERC20","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
      );
    },
    23190: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"address","name":"token_addr","type":"address"},{"internalType":"address","name":"art_proxy","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"approved","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"bool","name":"approved","type":"bool"}],"name":"ApprovalForAll","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegator","type":"address"},{"indexed":true,"internalType":"address","name":"fromDelegate","type":"address"},{"indexed":true,"internalType":"address","name":"toDelegate","type":"address"}],"name":"DelegateChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"delegate","type":"address"},{"indexed":false,"internalType":"uint256","name":"previousBalance","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"newBalance","type":"uint256"}],"name":"DelegateVotesChanged","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":true,"internalType":"uint256","name":"locktime","type":"uint256"},{"indexed":false,"internalType":"enum VotingEscrow.DepositType","name":"deposit_type","type":"uint8"},{"indexed":false,"internalType":"uint256","name":"ts","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"uint256","name":"prevSupply","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"supply","type":"uint256"}],"name":"Supply","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":true,"internalType":"uint256","name":"tokenId","type":"uint256"}],"name":"Transfer","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"provider","type":"address"},{"indexed":false,"internalType":"uint256","name":"tokenId","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"ts","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[],"name":"DELEGATION_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"DOMAIN_TYPEHASH","outputs":[{"internalType":"bytes32","name":"","type":"bytes32"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"MAX_DELEGATES","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"abstain","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_approved","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"approve","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"artProxy","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"attach","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"attachments","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"balanceOfAtNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"balanceOfNFT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_t","type":"uint256"}],"name":"balanceOfNFTAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"block_number","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"checkpoint","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"},{"internalType":"uint32","name":"","type":"uint32"}],"name":"checkpoints","outputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"}],"name":"create_lock","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_value","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"},{"internalType":"address","name":"_to","type":"address"}],"name":"create_lock_for","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"}],"name":"delegate","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegatee","type":"address"},{"internalType":"uint256","name":"nonce","type":"uint256"},{"internalType":"uint256","name":"expiry","type":"uint256"},{"internalType":"uint8","name":"v","type":"uint8"},{"internalType":"bytes32","name":"r","type":"bytes32"},{"internalType":"bytes32","name":"s","type":"bytes32"}],"name":"delegateBySig","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"delegator","type":"address"}],"name":"delegates","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"deposit_for","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"detach","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"getApproved","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastTotalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"},{"internalType":"uint256","name":"timestamp","type":"uint256"}],"name":"getPastVotesIndex","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"getVotes","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"get_last_user_slope","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_value","type":"uint256"}],"name":"increase_amount","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_lock_duration","type":"uint256"}],"name":"increase_unlock_time","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"address","name":"_operator","type":"address"}],"name":"isApprovedForAll","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_spender","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"isApprovedOrOwner","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"locked","outputs":[{"internalType":"int128","name":"amount","type":"int128"},{"internalType":"uint256","name":"end","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"locked__end","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_from","type":"uint256"},{"internalType":"uint256","name":"_to","type":"uint256"}],"name":"merge","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"nonces","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"numCheckpoints","outputs":[{"internalType":"uint32","name":"","type":"uint32"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"ownerOf","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"ownership_change","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"point_history","outputs":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"bytes","name":"_data","type":"bytes"}],"name":"safeTransferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_operator","type":"address"},{"internalType":"bool","name":"_approved","type":"bool"}],"name":"setApprovalForAll","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_proxy","type":"address"}],"name":"setArtProxy","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_team","type":"address"}],"name":"setTeam","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_voter","type":"address"}],"name":"setVoter","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"slope_changes","outputs":[{"internalType":"int128","name":"","type":"int128"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256[]","name":"amounts","type":"uint256[]"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"split","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"supply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceID","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"team","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"token","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_owner","type":"address"},{"internalType":"uint256","name":"_tokenIndex","type":"uint256"}],"name":"tokenOfOwnerByIndex","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"tokenURI","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_block","type":"uint256"}],"name":"totalSupplyAt","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"t","type":"uint256"}],"name":"totalSupplyAtT","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_from","type":"address"},{"internalType":"address","name":"_to","type":"address"},{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"transferFrom","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_point_epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"user_point_history","outputs":[{"internalType":"int128","name":"bias","type":"int128"},{"internalType":"int128","name":"slope","type":"int128"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blk","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"},{"internalType":"uint256","name":"_idx","type":"uint256"}],"name":"user_point_history__ts","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"version","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"}],"name":"voted","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"voter","outputs":[{"internalType":"address","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"voting","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}'
      );
    },
  },
]);
