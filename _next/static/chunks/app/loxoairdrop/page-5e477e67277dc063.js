(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [556],
  {
    39405: function (e, t, l) {
      Promise.resolve().then(l.t.bind(l, 19167, 23)),
        Promise.resolve().then(l.bind(l, 34576)),
        Promise.resolve().then(l.bind(l, 11394));
    },
    34576: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return SwapLayout;
          },
        });
      var a = l(57437),
        s = l(15187);
      function SwapLayout(e) {
        let { children: t } = e;
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("main", { children: [(0, a.jsx)(s.Z, {}), t] }),
        });
      }
    },
    11394: function (e, t, l) {
      "use strict";
      l.r(t),
        l.d(t, {
          default: function () {
            return LoxoAirdrop;
          },
        });
      var a = l(57437),
        s = l(2265),
        r = l(33373),
        i = l.n(r),
        o = l(54829),
        n = l(79037),
        d = l(79352),
        x = l(54968),
        c = l(60230),
        m = l(41683),
        p = l(67389);
      function _templateObject1() {
        let e = (0, c._)([
          "{\n        pairs(where: {id_in: ",
          "}) {\n            symbol\n            stable\n            token0 {\n                name\n                symbol\n                decimals\n                id\n            }\n            id\n            token1 {\n                decimals\n                name\n                symbol\n                id\n            }\n        }\n    }",
        ]);
        return (
          (_templateObject1 = function () {
            return e;
          }),
          e
        );
      }
      l(56129);
      var u = l(68522),
        h = l(37416),
        v = l(30724),
        f = l(62776),
        layouts_ProgressBar = (e) => {
          let { progress: t, className: l } = e,
            s = Math.min(Math.max(t, 0), 100);
          return (0, a.jsxs)("div", {
            className: "flex items-center justify-center ".concat(
              l,
              " relative"
            ),
            children: [
              (0, a.jsx)("div", {
                className:
                  "w-full h-[12px] bg-[#6C6C6C] overflow-hidden rounded-[4px]",
                children: (0, a.jsx)("div", {
                  className: "h-full bg-[#2CE3B3] bg-opacity-60",
                  style: {
                    width: s + "%",
                    transition: "width 0.5s ease-in-out",
                  },
                }),
              }),
              (0, a.jsx)("div", {
                className: "absolute top-[2px] smallText leading-[10px]",
                children: "".concat(s.toFixed(2), "%"),
              }),
            ],
          });
        },
        j = l(10712),
        b = l(17423),
        w = l(41472),
        N = l(37359),
        g = l(24033),
        components_Native = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: r,
              dataSource: o,
              loading: d = !1,
              lps: c,
              claimLps: m,
              refreshData: p,
            } = e,
            { address: u } = (0, n.m)(),
            y = (0, g.useRouter)();
          (0, w.useToastError)();
          let { isSupported: T } = (0, N.$)();
          (0, w.useToastSuccess)();
          let [O, L] = (0, s.useState)(!1),
            openAdd = (e) => {
              let t = JSON.stringify({
                token0: e.token0.id,
                token1: e.token1.id,
                stable: e.stable,
              });
              y.push("/liquidity?openAdd=".concat(t));
            },
            _ = [
              {
                title: "Phase-2 Airdrop",
                dataIndex: "",
                width: "17%",
                key: "AirdropproportionNative",
                align: "left",
                render: (e) =>
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("span", {
                        children: [
                          e.totalEstimated ? (0, x.pw)(e.totalEstimated) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(layouts_ProgressBar, {
                        className: "w-[132px] mt-[2px]",
                        progress: e.progress || 0,
                      }),
                    ],
                  }),
              },
              {
                title: "Pools",
                key: "PoolsNative",
                width: "17%",
                dataIndex: "",
                align: "left",
                render: (e) => {
                  var t, l, s, r;
                  return (0, a.jsx)(f.Z, {
                    token0Symbol:
                      (null === (t = e.token0) || void 0 === t
                        ? void 0
                        : t.symbol) || "",
                    token1Symbol:
                      null === (l = e.token1) || void 0 === l
                        ? void 0
                        : l.symbol,
                    name: ""
                      .concat(
                        null === (s = e.token0) || void 0 === s
                          ? void 0
                          : s.symbol,
                        " / "
                      )
                      .concat(
                        null === (r = e.token1) || void 0 === r
                          ? void 0
                          : r.symbol
                      ),
                    detail: !0 === e.stable ? "Stable" : "Volatile",
                  });
                },
              },
              {
                title: "Total LP Values",
                key: "TotalLPValuesNative",
                dataIndex: "totalValue",
                width: "17%",
                align: "left",
                preSymbol: "$",
                render: (e) =>
                  (0, x.pw)(Number(e.totalValue).toFixed(4), 2, !0),
              },
              {
                title: "Your LP Values",
                key: "MyLPValuesNative",
                titleHover: (0, a.jsx)("div", {
                  children:
                    "The LP value is randomly snapshot on an hourly basis.",
                }),
                dataIndex: u ? "myValue" : "-",
                width: "17%",
                posRight: !0,
                align: "left",
                preSymbol: u ? "$" : "",
                render: (e) =>
                  u ? (0, x.pw)(Number(e.myValue).toFixed(4)) : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Hourly snapshots distribute rewards based on LP",
                    (0, a.jsx)("br", {}),
                    " value proportion, accumulating total rewards",
                    (0, a.jsx)("br", {}),
                    " accordingly.",
                  ],
                }),
                width: "22%",
                posRight: !0,
                key: "MyEstimatedAirdropNative",
                align: "left",
                render: (e) =>
                  u
                    ? (0, a.jsxs)("div", {
                        className: "flex flex-row items-center",
                        children: [
                          (0, a.jsxs)("span", {
                            children: [(0, x.pw)(e.estimated, 4), " veLOXO"],
                          }),
                          e.isOld
                            ? (0, a.jsx)(b.Z, {
                                position: "right-bottom",
                                className: "ml-2",
                                handle: (0, a.jsx)(h.EG, {}),
                                renderContent: () =>
                                  (0, a.jsxs)("div", {
                                    className:
                                      "text-[12px] font-normal text-white leading-6",
                                    children: [
                                      "Delayed Data: Kindly note that the displayed information",
                                      (0, a.jsx)("br", {}),
                                      " may be subject to slight delays.",
                                    ],
                                  }),
                              })
                            : null,
                        ],
                      })
                    : "-",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "10%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      u && T
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                openAdd(e);
                              },
                              children: "Add",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (0, a.jsxs)("div", {
            className: i().container,
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center justify-between",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex flex-row items-center w-[45%]",
                    children: (0, a.jsx)("div", {
                      className: "".concat(i().tableTitle),
                      children: (0, a.jsx)("span", {
                        children: "Liquidity Minting Competition",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[30%]",
                    children: t
                      ? null
                      : !r &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-row items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "timeText",
                              children: "End In:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex flex-row items-center timeText ml-[2px]",
                              children: l,
                            }),
                          ],
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[25%] text-right",
                    children: t
                      ? null
                      : r
                      ? (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-[#8A8A8A]",
                          children: "Coming Soon",
                        })
                      : (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-blue",
                          children: "In Progress",
                        }),
                  }),
                ],
              }),
              d
                ? (0, a.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, a.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, a.jsx)("div", {
                    className: i().tableArea2,
                    children: (0, a.jsx)(v.Z, {
                      columns: _,
                      type: "collapsed",
                      dataSource: o,
                      hairstyle: "white",
                    }),
                  }),
            ],
          });
        },
        y = l(26573),
        components_NativeCard = (e) => {
          let {
              initTime: t,
              dataSource: l,
              loading: r = !1,
              lps: o,
              claimLps: d,
              refreshData: c,
              expired: m,
            } = e,
            { address: p } = (0, n.m)(),
            [u, v] = (0, s.useState)("-- : -- : -- : --"),
            { isSupported: f } = (0, N.$)();
          (0, w.useToastError)();
          let T = (0, g.useRouter)();
          (0, w.useToastSuccess)();
          let [O, L] = (0, s.useState)(!1),
            openAdd = (e) => {
              let t = JSON.stringify({
                token0: e.token0.id,
                token1: e.token1.id,
                stable: e.stable,
              });
              T.push("/liquidity?openAdd=".concat(t));
            };
          return r
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                children: (0, a.jsx)("div", {
                  className: " mt-10",
                  children: (0, a.jsx)("div", {
                    className: i().tableArea2,
                    children:
                      l && l.length
                        ? l.map((e, t) => {
                            var l, s, r, i;
                            let o = [
                                {
                                  title: "Phase-2 Airdrop",
                                  value: e.totalEstimated
                                    ? (0, x.pw)(e.totalEstimated)
                                    : "-",
                                  key: "AirdropproportionNativeCard",
                                  render: () =>
                                    (0, a.jsxs)("div", {
                                      className: "w-full",
                                      children: [
                                        (0, a.jsxs)("div", {
                                          style: { whiteSpace: "normal" },
                                          children: [
                                            e.totalEstimated
                                              ? (0, x.pw)(e.totalEstimated)
                                              : "-",
                                            " veLOXO",
                                          ],
                                        }),
                                        (0, a.jsx)(layouts_ProgressBar, {
                                          className: "mt-[2px] max-w-[132px]",
                                          progress: e.progress || 0,
                                        }),
                                      ],
                                    }),
                                },
                                {
                                  title: "Total LP Values",
                                  value: (0, x.pw)(
                                    Number(e.totalValue).toFixed(4),
                                    2,
                                    !0
                                  ),
                                  key: "TotalVolumeNativeCard",
                                  preSymbol: "$",
                                },
                                {
                                  title: "Your LP Values",
                                  value: p
                                    ? (0, x.pw)(Number(e.myValue).toFixed(4))
                                    : "-",
                                  key: "YourVolumeNativeCard",
                                  titleHover: (0, a.jsx)("div", {
                                    className: "text-center",
                                    children:
                                      "The LP value is randomly snapshot on an hourly basis.",
                                  }),
                                  preSymbol: p ? "$" : "",
                                },
                                {
                                  title: "Your Estimated Airdrop",
                                  value: p
                                    ? (0, a.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            children: [
                                              (0, x.pw)(e.estimated, 4),
                                              " veLOXO",
                                            ],
                                          }),
                                          e.isOld
                                            ? (0, a.jsx)(b.Z, {
                                                position: "right-bottom",
                                                className: "ml-2",
                                                handle: (0, a.jsx)(h.EG, {}),
                                                renderContent: () =>
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "text-[12px] font-normal text-white leading-6 text-center",
                                                    children: [
                                                      "Delayed Data: Kindly note that the displayed information",
                                                      (0, a.jsx)("br", {}),
                                                      " may be subject to slight delays.",
                                                    ],
                                                  }),
                                              })
                                            : null,
                                        ],
                                      })
                                    : "-",
                                  titleHover: (0, a.jsx)("div", {
                                    className: "text-center",
                                    children:
                                      "Hourly snapshots distribute rewards based on LP value proportion, accumulating total rewards accordingly.",
                                  }),
                                  key: "MyEstimatedAirdropNativeCard",
                                },
                              ],
                              n = (0, a.jsx)(a.Fragment, {
                                children: (0, a.jsx)("div", {
                                  className:
                                    "flex flex-wrap items-center justify-center w-full",
                                  children:
                                    p && f
                                      ? (0, a.jsx)("button", {
                                          className: "offButton w-full",
                                          onClick: () => {
                                            openAdd(e);
                                          },
                                          children: "Add",
                                        })
                                      : (0, a.jsx)(j.C, {
                                          btnBoxClassName: "w-full",
                                          BtnClassName: "w-full",
                                          noTitle: !0,
                                        }),
                                }),
                              });
                            return (0, a.jsx)(
                              y.Z,
                              {
                                footer: n,
                                columns: o,
                                asymmetrical: !0,
                                token0Symbol:
                                  (null === (l = e.token0) || void 0 === l
                                    ? void 0
                                    : l.symbol) || "",
                                token1Symbol:
                                  (null === (s = e.token1) || void 0 === s
                                    ? void 0
                                    : s.symbol) || "",
                                name: ""
                                  .concat(
                                    null === (r = e.token0) || void 0 === r
                                      ? void 0
                                      : r.symbol,
                                    " / "
                                  )
                                  .concat(
                                    null === (i = e.token1) || void 0 === i
                                      ? void 0
                                      : i.symbol
                                  ),
                                detail: !0 === e.stable ? "Stable" : "Volatile",
                              },
                              t
                            );
                          })
                        : (0, a.jsx)("div", {
                            className: i().nodataCard,
                            children: "No Data",
                          }),
                  }),
                }),
              });
        },
        components_Loxo = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: s,
              dataSource: r,
              loading: o = !1,
            } = e,
            { address: d } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: c } = (0, N.$)(),
            m = [
              {
                title: "Phase-1 Airdrop",
                key: "PhraseAirdrop",
                width: "21%",
                dataIndex: "",
                align: "left",
                render: (e) =>
                  (0, a.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "mr-[5px]",
                        children: [
                          e.totalAirdrop ? (0, x.pw)(e.totalAirdrop) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(b.Z, {
                        position: "left-top",
                        handle: (0, a.jsxs)("div", {
                          className: "flex flex-row relative w-[25px] h-[18px]",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-0 w-[4px] h-[9px] ".concat(
                                  Number(e.section) > -1
                                    ? "bg-blue"
                                    : "bg-white",
                                  " "
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[7px] w-[4px] h-[11px] ".concat(
                                  Number(e.section) > 0 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[14px] w-[4px] h-[14px] ".concat(
                                  Number(e.section) > 1 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[21px] w-[4px] h-[18px] ".concat(
                                  Number(e.section) > 2 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[28px] w-[4px] h-[22px] ".concat(
                                  Number(e.section) > 3 ? "bg-blue" : "bg-white"
                                ),
                            }),
                          ],
                        }),
                        renderContent: () =>
                          (0, a.jsxs)("div", {
                            className:
                              "text-[12px] flex flex-col font-normal text-white leading-6",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [
                                  "The veLOXO airdrop will be distributed across multiple",
                                  (0, a.jsx)("br", {}),
                                  " sectors based on trading fees: ",
                                ],
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 0 ＜ Trade fees ≤ 10K; 36,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 10K ＜ Trade fees ≤ 50K; 108,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 50K ＜ Trade fees ≤ 100K; 1,800,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 100K ＜ Trade fees ≤ 200K; 1,800,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 200K ＜ Trade fees; 360,000 veLOXO",
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
              },
              {
                title: "Total Staked",
                key: "TotalStakedLoxo",
                width: "21%",
                dataIndex: "totalStaked",
                unit: "LoxoNFT",
                align: "left",
                render: (e) =>
                  Number(e.totalStaked) ? (0, x.pw)(e.totalStaked) : 0,
              },
              {
                title: "Total NFT Points",
                key: "MyStakeLoxo",
                dataIndex: d ? "tokenBalance" : "-",
                width: "21%",
                align: "left",
                unit: d ? "LoxoNFT" : "",
                render: (e) =>
                  d
                    ? Number(e.totalPoints)
                      ? (0, x.pw)(e.totalPoints)
                      : 0
                    : "-",
              },
              {
                title: "Your NFT Points",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Hourly snapshots distribute rewards based on",
                    (0, a.jsx)("br", {}),
                    " your LoxoNFT stake, accumulating total rewards.",
                  ],
                }),
                width: "21%",
                key: "MyEstimatedAirdropLoxo",
                align: "left",
                render: (e) =>
                  d
                    ? (0, a.jsxs)("div", {
                        className: "flex flex-row items-center",
                        children: [
                          (0, a.jsxs)("span", {
                            children: [(0, x.pw)(e.myPoints, 4), " veLOXO"],
                          }),
                          e.isOld
                            ? (0, a.jsx)(b.Z, {
                                position: "right-bottom",
                                className: "ml-2",
                                handle: (0, a.jsx)(h.EG, {}),
                                renderContent: () =>
                                  (0, a.jsxs)("div", {
                                    className:
                                      "text-[12px] font-normal text-white leading-6",
                                    children: [
                                      "Delayed Data: Kindly note that the displayed information",
                                      (0, a.jsx)("br", {}),
                                      " may be subject to slight delays.",
                                    ],
                                  }),
                              })
                            : null,
                        ],
                      })
                    : "-",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "16%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      d && c
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                window.open("https://loxodrome.xyz/mint");
                              },
                              children: "Go to Mint",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (0, a.jsxs)("div", {
            className: i().container,
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex flex-row items-center w-[45%]",
                    children: (0, a.jsx)("div", {
                      className: "".concat(i().tableTitle),
                      children: (0, a.jsx)("span", {
                        children: "LoxoNFT Stakers Airdrop",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[30%]",
                    children: t
                      ? null
                      : !s &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-row items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "timeText",
                              children: "Claims expire at:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex flex-row items-center timeText ml-[2px]",
                              children: l,
                            }),
                          ],
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[25%] text-right",
                    children: t
                      ? null
                      : s
                      ? (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-[#8A8A8A]",
                          children: "Ended",
                        })
                      : (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-blue",
                          children: "In Progress",
                        }),
                  }),
                ],
              }),
              o
                ? (0, a.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, a.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, a.jsx)("div", {
                    className: i().tableArea,
                    children:
                      r && r.length
                        ? (0, a.jsx)(v.Z, {
                            columns: m,
                            type: "collapsed",
                            dataSource: r,
                            hairstyle: "white",
                          })
                        : (0, a.jsx)("div", {
                            className: "mt-12 text-center text-[#7e7e7e]",
                            children: "No Data",
                          }),
                  }),
            ],
          });
        },
        components_LoxoCard = (e) => {
          let { expired: t, dataSource: l, loading: s = !1 } = e,
            { address: r } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: o } = (0, N.$)();
          return s
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                className: "".concat(i().container, " mt-10"),
                children: (0, a.jsx)("div", {
                  className: i().tableArea,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                              {
                                title: "Phase-1 Airdrop",
                                value: "-",
                                key: "PhraseAirdrop",
                                render: () =>
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "mr-[5px]",
                                        children: [
                                          e.totalAirdrop
                                            ? (0, x.pw)(e.totalAirdrop)
                                            : "-",
                                          " veLOXO",
                                        ],
                                      }),
                                      (0, a.jsx)(b.Z, {
                                        position: t ? "left-top" : "bottom",
                                        handle: (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-row relative w-[25px] h-[18px]",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-0 w-[2px] h-[7px] xs:left-0 xs:w-[3.5px] xs:h-[9px] ".concat(
                                                  Number(e.section) > -1
                                                    ? "bg-blue"
                                                    : "bg-white",
                                                  " "
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[5px] w-[2px] h-[9px] xs:left-[7px] xs:w-[3.5px] xs:h-[11px] ".concat(
                                                  Number(e.section) > 0
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[10px] w-[2px] h-[11px] xs:left-[14px] xs:w-[3.5px] xs:h-[14px] ".concat(
                                                  Number(e.section) > 1
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[15px] w-[2px] h-[14px] xs:left-[21px] xs:w-[3.5px] xs:h-[18px] ".concat(
                                                  Number(e.section) > 2
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[28px] w-[4px] h-[22px] ".concat(
                                                  Number(e.section) > 3
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                          ],
                                        }),
                                        renderContent: () =>
                                          (0, a.jsxs)("div", {
                                            className:
                                              "text-[12px] flex flex-col font-normal text-white leading-6",
                                            children: [
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "The veLOXO airdrop will be distributed across multiple sectors based on trading fees: ",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 0 ＜ Trade fees ≤ 10K; 36,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 10K ＜ Trade fees ≤ 50K; 108,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 50K ＜ Trade fees ≤ 100K; 1,800,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 100K ＜ Trade fees ≤ 200K; 1,800,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 200K ＜ Trade fees; 360,000 veLOXO",
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                              },
                              {
                                title: "Total Staked",
                                value: "-",
                                key: "TotalVolumeLoxoCard",
                                unit: "LoxoNFT",
                                render: () =>
                                  Number(e.totalStaked)
                                    ? (0, x.pw)(e.totalStaked)
                                    : 0,
                              },
                              {
                                title: "Total NFT Points",
                                value: "-",
                                key: "YourVolumeLoxoCard",
                                unit: r ? "LoxoNFT" : "",
                                render: () =>
                                  r
                                    ? Number(e.totalPoints)
                                      ? (0, x.pw)(e.totalPoints)
                                      : 0
                                    : "-",
                              },
                              {
                                title: "Your NFT Points",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "Hourly snapshots distribute rewards based on your LoxoNFT stake, accumulating total rewards.",
                                }),
                                value: "-",
                                key: "MyEstimatedAirdropLoxoCard",
                                render: () =>
                                  r
                                    ? (0, a.jsxs)("div", {
                                        className: "flex flex-row items-center",
                                        children: [
                                          (0, a.jsxs)("span", {
                                            children: [
                                              (0, x.pw)(e.myPoints, 4),
                                              " veLOXO",
                                            ],
                                          }),
                                          e.isOld
                                            ? (0, a.jsx)(b.Z, {
                                                position: "right-bottom",
                                                className: "ml-2",
                                                handle: (0, a.jsx)(h.EG, {}),
                                                renderContent: () =>
                                                  (0, a.jsxs)("div", {
                                                    className:
                                                      "text-[12px] font-normal text-white leading-6",
                                                    children: [
                                                      "Delayed Data: Kindly note that the displayed information",
                                                      (0, a.jsx)("br", {}),
                                                      " may be subject to slight delays.",
                                                    ],
                                                  }),
                                              })
                                            : null,
                                        ],
                                      })
                                    : "-",
                              },
                            ],
                            s = (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap items-center justify-center w-full",
                                children:
                                  r && o
                                    ? (0, a.jsx)("button", {
                                        className: "offButton w-full",
                                        onClick: () => {
                                          window.open(
                                            "https://loxodrome.xyz/mint"
                                          );
                                        },
                                        children: "Add",
                                      })
                                    : (0, a.jsx)(j.C, {
                                        btnBoxClassName: "w-full",
                                        BtnClassName: "w-full",
                                        noTitle: !0,
                                      }),
                              }),
                            });
                          return (0, a.jsx)(
                            y.Z,
                            {
                              footer: s,
                              columns: l,
                              asymmetrical: !0,
                              noTitle: !0,
                            },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              });
        },
        components_Ve = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: s,
              dataSource: r,
              loading: o = !1,
            } = e,
            { address: d } = (0, n.m)(),
            c = (0, g.useRouter)(),
            { isSupported: m } = (0, N.$)(),
            p = [
              {
                title: "Phase-1 Airdrop",
                key: "PhraseAirdrop",
                width: "21%",
                dataIndex: "",
                align: "left",
                render: (e) =>
                  (0, a.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "mr-[5px]",
                        children: [
                          e.totalAirdrop ? (0, x.pw)(e.totalAirdrop) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(b.Z, {
                        position: "left-top",
                        handle: (0, a.jsxs)("div", {
                          className: "flex flex-row relative w-[25px] h-[18px]",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-0 w-[4px] h-[9px] ".concat(
                                  Number(e.section) > -1
                                    ? "bg-blue"
                                    : "bg-white",
                                  " "
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[7px] w-[4px] h-[11px] ".concat(
                                  Number(e.section) > 0 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[14px] w-[4px] h-[14px] ".concat(
                                  Number(e.section) > 1 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[21px] w-[4px] h-[18px] ".concat(
                                  Number(e.section) > 2 ? "bg-blue" : "bg-white"
                                ),
                            }),
                          ],
                        }),
                        renderContent: () =>
                          (0, a.jsxs)("div", {
                            className:
                              "text-[12px] flex flex-col font-normal text-white leading-6",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [
                                  "The veLOXO airdrop will be distributed across multiple",
                                  (0, a.jsx)("br", {}),
                                  " sectors based on trading fees: ",
                                ],
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 0 ＜ Trade fees ≤ 10K; 36,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 10K ＜ Trade fees ≤ 50K; 108,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 50K ＜ Trade fees ≤ 100K; 1,800,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 100K ＜ Trade fees ≤ 200K; 1,800,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 200K ＜ Trade fees; 360,000 veLOXO",
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
              },
              {
                title: "Total veLOXO Locked",
                key: "TotalStaked",
                width: "21%",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Total for all veLOXOs, calculated as the sum of",
                    (0, a.jsx)("br", {}),
                    " the latest hourly snapshot.",
                  ],
                }),
                unit: "veLOXO",
                align: "left",
                render: (e) => (0, x.pw)(e.totalLocked),
              },
              {
                title: "Your veLOXO",
                key: "MyStake",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Your total number of veLOXOs, calculated as",
                    (0, a.jsx)("br", {}),
                    " the sum of the latest hourly snapshot.",
                  ],
                }),
                width: "21%",
                align: "left",
                unit: d ? "veLOXO" : "",
                render: (e) =>
                  d ? (Number(e.myLoxo) ? (0, x.pw)(e.myLoxo) : 0) : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Hourly snapshots distribute rewards based on",
                    (0, a.jsx)("br", {}),
                    " your veLOXO balance proportion,",
                    (0, a.jsx)("br", {}),
                    " accumulating total rewards.",
                  ],
                }),
                width: "21%",
                key: "MyEstimatedAirdrop",
                unit: d ? "veLOXO" : "",
                align: "left",
                render: (e) => (d ? (0, x.pw)(e.estimated, 4) : "-"),
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "16%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      d && m
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                c.push("/swap");
                              },
                              children: "Swap",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (0, a.jsxs)("div", {
            className: i().container,
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center",
                children: [
                  (0, a.jsx)("div", {
                    className: "flex flex-row items-center w-[45%]",
                    children: (0, a.jsx)("div", {
                      className: "".concat(i().tableTitle),
                      children: (0, a.jsx)("span", {
                        children: "LOXO Lockers Incentive",
                      }),
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[30%]",
                    children: t
                      ? null
                      : !s &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-row items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "timeText",
                              children: "Claims expire at:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex flex-row items-center timeText ml-[2px]",
                              children: l,
                            }),
                          ],
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[25%] text-right",
                    children: t
                      ? null
                      : s
                      ? (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-[#8A8A8A]",
                          children: "Ended",
                        })
                      : (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-blue",
                          children: "In Progress",
                        }),
                  }),
                ],
              }),
              o
                ? (0, a.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, a.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, a.jsx)("div", {
                    className: i().tableArea,
                    children:
                      r && r.length
                        ? (0, a.jsx)(v.Z, {
                            columns: p,
                            type: "collapsed",
                            dataSource: r,
                            hairstyle: "white",
                          })
                        : (0, a.jsx)("div", {
                            className: "mt-12 text-center text-[#7e7e7e]",
                            children: "No Data",
                          }),
                  }),
            ],
          });
        },
        components_VeCard = (e) => {
          let { expired: t, dataSource: l, loading: s = !1 } = e,
            { address: r } = (0, n.m)(),
            { isSupported: o } = (0, N.$)(),
            d = (0, g.useRouter)();
          return s
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                className: "".concat(i().container, " mt-10"),
                children: (0, a.jsx)("div", {
                  className: i().tableArea,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                              {
                                title: "Phase-1 Airdrop",
                                value: "",
                                key: "PhraseAirdrop",
                                render: () =>
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "mr-[5px]",
                                        children: [
                                          e.totalAirdrop
                                            ? (0, x.pw)(e.totalAirdrop)
                                            : "-",
                                          " veLOXO",
                                        ],
                                      }),
                                      (0, a.jsx)(b.Z, {
                                        position: t ? "left-top" : "bottom",
                                        handle: (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-row relative w-[25px] h-[18px]",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-0 w-[2px] h-[7px] xs:left-0 xs:w-[3.5px] xs:h-[9px] ".concat(
                                                  Number(e.section) > -1
                                                    ? "bg-blue"
                                                    : "bg-white",
                                                  " "
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[5px] w-[2px] h-[9px] xs:left-[7px] xs:w-[3.5px] xs:h-[11px] ".concat(
                                                  Number(e.section) > 0
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[10px] w-[2px] h-[11px] xs:left-[14px] xs:w-[3.5px] xs:h-[14px] ".concat(
                                                  Number(e.section) > 1
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[15px] w-[2px] h-[14px] xs:left-[21px] xs:w-[3.5px] xs:h-[18px] ".concat(
                                                  Number(e.section) > 2
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[28px] w-[4px] h-[22px] ".concat(
                                                  Number(e.section) > 3
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                          ],
                                        }),
                                        renderContent: () =>
                                          (0, a.jsxs)("div", {
                                            className:
                                              "text-[12px] flex flex-col font-normal text-white leading-6",
                                            children: [
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "The veLOXO airdrop will be distributed across multiple sectors based on trading fees: ",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 0 ＜ Trade fees ≤ 10K; 36,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 10K ＜ Trade fees ≤ 50K; 108,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 50K ＜ Trade fees ≤ 100K; 1,800,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 100K ＜ Trade fees ≤ 200K; 1,800,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 200K ＜ Trade fees; 360,000 veLOXO",
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                              },
                              {
                                title: "Total veLOXO Locked",
                                value: "",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "Total for all veLOXOs, calculated as the sum of the latest hourly snapshot.",
                                }),
                                key: "TotalVolume",
                                unit: "veLOXO",
                                render: () => (0, x.pw)(e.totalLocked),
                              },
                              {
                                title: "Your veLOXO",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "Your total number of veLOXOs, calculated as the sum of the latest hourly snapshot.",
                                }),
                                value: "",
                                key: "YourVolume",
                                unit: r ? "veLOXO" : "",
                                render: () =>
                                  r
                                    ? Number(e.myLoxo)
                                      ? (0, x.pw)(e.myLoxo)
                                      : 0
                                    : "-",
                              },
                              {
                                title: "Your Estimated Airdrop",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "Hourly snapshots distribute rewards based on your veLOXO balance proportion,accumulating total rewards.",
                                }),
                                value: "",
                                unit: r ? "veLOXO" : "",
                                key: "MyEstimatedAirdrop",
                                render: () =>
                                  r ? (0, x.pw)(e.estimated, 4) : "-",
                              },
                            ],
                            s = (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap items-center justify-center w-full",
                                children:
                                  r && o
                                    ? (0, a.jsx)("button", {
                                        className: "offButton w-full",
                                        onClick: () => {
                                          d.push("/swap");
                                        },
                                        children: "Swap",
                                      })
                                    : (0, a.jsx)(j.C, {
                                        btnBoxClassName: "w-full",
                                        BtnClassName: "w-full",
                                        noTitle: !0,
                                      }),
                              }),
                            });
                          return (0, a.jsx)(
                            y.Z,
                            {
                              footer: s,
                              columns: l,
                              asymmetrical: !0,
                              noTitle: !0,
                            },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              });
        },
        components_Iotx = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: r,
              dataSource: o,
              loading: c = !1,
              ioTexState: m,
              claimIoTexStaker: p,
              refreshData: u,
            } = e,
            { address: f } = (0, n.m)(),
            [N, g] = (0, s.useState)(3),
            y = (0, w.useToastError)(),
            T = (0, w.useToastSuccess)(),
            [O, L] = (0, s.useState)(!1);
          (0, s.useEffect)(() => {
            !m.claimed && m.claimableVeLOXO > 0
              ? g(1)
              : m.claimed
              ? g(2)
              : g(3);
          }, [m]);
          let _ = [
              {
                title: "Total Airdrop",
                key: "PhraseAirdrop",
                width: "25%",
                dataIndex: "",
                unit: "veLOXO",
                align: "left",
                render: (e) => (0, x.Xh)(144e4, 4, !0),
              },
              {
                title: "Total Staked IOTX",
                key: "TotalIOTXIoxt",
                width: "25%",
                dataIndex: "totalStaked",
                unit: "IOTX",
                align: "left",
                render: (e) => (0, x.Xh)(4277600966, 4, !0),
              },
              {
                title: "Your Staked IOTX",
                key: "YourIOTXIoxt",
                dataIndex: f ? "tokenBalance" : "-",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "Only addresses with a stake of 500 IOTX or",
                    (0, a.jsx)("br", {}),
                    " more are eligible for the airdrop.",
                  ],
                }),
                width: "25%",
                align: "left",
                unit: f ? "IOTX" : "",
                render: (e) =>
                  f
                    ? 500 > Number((0, d.d)(m.stakedAmount))
                      ? "＜500"
                      : (0, x.Xh)((0, d.d)(m.stakedAmount), 4, !0)
                    : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                width: "25%",
                titleHover: (0, a.jsxs)("div", {
                  className: "flex flex-col",
                  children: [
                    (0, a.jsxs)("span", {
                      children: [
                        "The distribution of airdrop is based on the amount of IOTX you have",
                        (0, a.jsx)("br", {}),
                        " staked.Please refer to the following rules for detailed information:",
                      ],
                    }),
                    (0, a.jsx)("span", {
                      children: "\xb7\xa0\xa0\xa0IOTX ≥ 1M: 302 Wallets (7%)",
                    }),
                    (0, a.jsx)("span", {
                      children:
                        "\xb7\xa0\xa0\xa0100K ≤ IOTX ＜ 1M: 723 Wallets (10%)",
                    }),
                    (0, a.jsx)("span", {
                      children:
                        "\xb7\xa0\xa0\xa01K ≤ IOTX ＜ 100K: 7567 Wallets (76%)",
                    }),
                    (0, a.jsx)("span", {
                      children:
                        "\xb7\xa0\xa0\xa0500 ≤ IOTX ＜ 1K: 978 Wallets (7%)",
                    }),
                  ],
                }),
                key: "MyEstimatedAirdropIoxt",
                align: "right",
                unit: "veLOXO",
                render: (e) =>
                  f ? (0, x.Xh)((0, d.d)(m.claimableVeLOXO), 4, !0) : "-",
              },
            ],
            claimAll = async () => {
              if (!O) {
                L(!0);
                try {
                  let e = await p();
                  e && (0, x.YG)(e, u), T("Claim Successfully", "", 1, e);
                } catch (e) {
                  console.log(e), y(e);
                } finally {
                  L(!1);
                }
              }
            };
          return (0, a.jsxs)("div", {
            className: i().container,
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row justify-between items-center",
                children: [
                  (0, a.jsxs)("div", {
                    className: "flex flex-row items-center w-[45%]",
                    children: [
                      (0, a.jsx)("div", {
                        className: "".concat(i().tableTitle),
                        children: (0, a.jsx)("span", {
                          children: "IOTX Stakers Airdrop",
                        }),
                      }),
                      (0, a.jsx)(b.Z, {
                        className: "ml-2",
                        handle: (0, a.jsx)(h.EG, {}),
                        renderContent: () =>
                          (0, a.jsxs)("div", {
                            children: [
                              "Airdrop eligibility requires a minimum of 500 IOTX staked",
                              (0, a.jsx)("br", {}),
                              " on ",
                              (0, a.jsx)("span", {
                                className:
                                  "text-blue hover:underline cursor-pointer",
                                onClick: () => {
                                  window.open("https://stake.iotex.io");
                                },
                                children: "stake.iotex.io",
                              }),
                              " before April 24, 2024, UTC",
                            ],
                          }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[30%]",
                    children: t
                      ? null
                      : !r &&
                        (0, a.jsxs)("div", {
                          className: "flex flex-row items-center",
                          children: [
                            (0, a.jsx)("div", {
                              className: "timeText",
                              children: "Claims Countdown:",
                            }),
                            (0, a.jsx)("div", {
                              className:
                                "flex flex-row items-center timeText ml-[2px]",
                              children: l,
                            }),
                          ],
                        }),
                  }),
                  (0, a.jsx)("div", {
                    className: "w-[25%] flex flex-row justify-end",
                    children: t
                      ? null
                      : r
                      ? (0, a.jsx)("div", {
                          className: "text-[sm] font-normal text-[#8A8A8A]",
                          children: "Ended",
                        })
                      : f
                      ? (0, a.jsxs)("button", {
                          disabled: !m.claimableVeLOXO || r || 1 !== N,
                          onClick: claimAll,
                          className: "".concat(i().buttonAll, " mr-[5px]"),
                          children: [
                            O && (0, a.jsx)(h.yM, {}),
                            r
                              ? (0, a.jsx)("span", { children: "Ended" })
                              : 2 === N
                              ? (0, a.jsx)("span", { children: "Claimed" })
                              : (0, a.jsxs)(a.Fragment, {
                                  children: [
                                    (0, a.jsx)("span", {
                                      className: i().buttonText,
                                      children: "Claim:",
                                    }),
                                    (0, a.jsx)("span", {
                                      children: "".concat(
                                        (0, x.Xh)(
                                          (0, d.d)(m.claimableVeLOXO),
                                          4,
                                          !0
                                        ),
                                        " veLOXO"
                                      ),
                                    }),
                                  ],
                                }),
                          ],
                        })
                      : (0, a.jsx)("div", {
                          children: (0, a.jsx)(j.C, { noTitle: !0 }),
                        }),
                  }),
                ],
              }),
              c
                ? (0, a.jsx)("div", {
                    className: "w-full text-center mt-12",
                    children: (0, a.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    }),
                  })
                : (0, a.jsx)("div", {
                    className: i().tableArea2,
                    children:
                      o && o.length
                        ? (0, a.jsx)(v.Z, {
                            columns: _,
                            type: "collapsed",
                            dataSource: o,
                            hairstyle: "white",
                          })
                        : (0, a.jsx)("div", {
                            className: "mt-12 text-center text-[#7e7e7e]",
                            children: "No Data",
                          }),
                  }),
            ],
          });
        },
        components_IotxCard = (e) => {
          let {
              initTime: t,
              dataSource: l,
              loading: r = !1,
              ioTexState: o,
              claimIoTexStaker: c,
              refreshData: m,
              expired: p,
            } = e,
            { address: u } = (0, n.m)(),
            v = (0, w.useToastError)(),
            f = (0, w.useToastSuccess)(),
            [b, N] = (0, s.useState)(3),
            [g, T] = (0, s.useState)("-- : -- : -- : --"),
            [O, L] = (0, s.useState)(!1);
          if (
            ((0, s.useEffect)(() => {
              !o.claimed && o.claimableVeLOXO > 0
                ? N(1)
                : o.claimed
                ? N(2)
                : N(3);
            }, [o]),
            r)
          )
            return (0, a.jsx)("div", {
              className: "w-full text-center mt-12",
              children: (0, a.jsx)("span", {
                className: "loading loading-bars loading-lg",
              }),
            });
          let claimAll = async () => {
            if (!O) {
              L(!0);
              try {
                let e = await c();
                e && (0, x.YG)(e, m), f("Claim Successfully", "", 1, e);
              } catch (e) {
                console.log(e), v(e);
              } finally {
                L(!1);
              }
            }
          };
          return (0, a.jsxs)("div", {
            children: [
              t || p
                ? null
                : u
                ? (0, a.jsxs)("button", {
                    disabled: !o.claimableVeLOXO || p || 1 !== b,
                    onClick: () => claimAll(),
                    className: "offButton mt-4 w-full",
                    children: [
                      O && (0, a.jsx)(h.yM, {}),
                      2 === b
                        ? (0, a.jsx)("span", { children: "Claimed" })
                        : p
                        ? (0, a.jsx)("span", { children: "Claim has expired" })
                        : (0, a.jsxs)(a.Fragment, {
                            children: [
                              (0, a.jsx)("span", {
                                className: i().buttonText,
                                children: "Claim:",
                              }),
                              (0, a.jsx)("span", {
                                children: "".concat(
                                  (0, x.Xh)((0, d.d)(o.claimableVeLOXO), 4, !0),
                                  " veLOXO"
                                ),
                              }),
                            ],
                          }),
                    ],
                  })
                : (0, a.jsx)(j.C, {
                    btnBoxClassName: "w-full mt-4",
                    BtnClassName: "w-full",
                    noTitle: !0,
                  }),
              (0, a.jsx)("div", {
                className: "mt-10",
                children: (0, a.jsx)("div", {
                  className: i().tableArea2,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                            {
                              title: "Total Airdrop",
                              value: (0, x.Xh)(144e4, 4, !0),
                              key: "PhraseAirdrop",
                              unit: "veLOXO",
                            },
                            {
                              title: "Total Staked IOTX",
                              value: (0, x.Xh)(4277600966, 4, !0),
                              key: "TotalVolumeIoxtCard",
                              unit: "IOTX",
                            },
                            {
                              title: "Your Staked IOTX",
                              titleHover: (0, a.jsx)("div", {
                                className: "text-center",
                                children:
                                  "Only addresses with a stake of 500 IOTX or more are eligible for the airdrop.",
                              }),
                              value: u
                                ? 500 > Number((0, d.d)(o.stakedAmount))
                                  ? "＜500"
                                  : (0, x.Xh)((0, d.d)(o.stakedAmount), 4, !0)
                                : "-",
                              key: "YourVolumeIoxtCard",
                              unit: u ? "IOTX" : "",
                            },
                            {
                              title: "Your Estimated Airdrop",
                              titleHover: (0, a.jsxs)("div", {
                                className: "flex flex-col",
                                children: [
                                  (0, a.jsx)("span", {
                                    children:
                                      "The distribution of airdrop is based on the amount of IOTX you have staked.Please refer to the following rules for detailed information:",
                                  }),
                                  (0, a.jsx)("span", {
                                    children:
                                      "\xb7\xa0\xa0\xa0IOTX ≥ 1M: 302 Wallets (7%)",
                                  }),
                                  (0, a.jsx)("span", {
                                    children:
                                      "\xb7\xa0\xa0\xa0100K ≤ IOTX ＜ 1M: 723 Wallets (10%)",
                                  }),
                                  (0, a.jsx)("span", {
                                    children:
                                      "\xb7\xa0\xa0\xa01K ≤ IOTX ＜ 100K: 7567 Wallets (76%)",
                                  }),
                                  (0, a.jsx)("span", {
                                    children:
                                      "\xb7\xa0\xa0\xa0500 ≤ IOTX ＜ 1K: 978 Wallets (7%)",
                                  }),
                                ],
                              }),
                              value: "",
                              unit: "veLOXO",
                              key: "MyEstimatedAirdropIoxtCard",
                              render: () =>
                                u
                                  ? (0, x.Xh)(
                                      (0, d.d)(o.claimableVeLOXO),
                                      4,
                                      !0
                                    )
                                  : "-",
                            },
                          ];
                          return (0, a.jsx)(
                            y.Z,
                            { columns: l, asymmetrical: !0, noTitle: !0 },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              }),
            ],
          });
        },
        components_Traders = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: s,
              dataSource: r,
              loading: o = !1,
            } = e,
            { address: d } = (0, n.m)(),
            c = (0, g.useRouter)(),
            { isSupported: m } = (0, N.$)(),
            p = [
              {
                title: "Phase-2 Airdrop",
                key: "PhraseAirdrop",
                width: "21%",
                dataIndex: "",
                align: "left",
                render: (e, t, l) =>
                  (0, a.jsxs)("div", {
                    className: "flex flex-row",
                    children: [
                      (0, a.jsxs)("span", {
                        className: "mr-[5px]",
                        children: [
                          e.totalAirdrop ? (0, x.pw)(e.totalAirdrop) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(b.Z, {
                        position: "left-top",
                        handle: (0, a.jsxs)("div", {
                          className: "flex flex-row relative w-[25px] h-[18px]",
                          children: [
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-0 w-[4px] h-[9px] ".concat(
                                  Number(e.section) > -1
                                    ? "bg-blue"
                                    : "bg-white",
                                  " "
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[7px] w-[4px] h-[11px] ".concat(
                                  Number(e.section) > 0 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[14px] w-[4px] h-[14px] ".concat(
                                  Number(e.section) > 1 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[21px] w-[4px] h-[18px] ".concat(
                                  Number(e.section) > 2 ? "bg-blue" : "bg-white"
                                ),
                            }),
                            (0, a.jsx)("span", {
                              className:
                                "absolute bottom-[3px] left-[28px] w-[4px] h-[22px] ".concat(
                                  Number(e.section) > 3 ? "bg-blue" : "bg-white"
                                ),
                            }),
                          ],
                        }),
                        renderContent: () =>
                          (0, a.jsxs)("div", {
                            className:
                              "text-[12px] flex flex-col font-normal text-white leading-6",
                            children: [
                              (0, a.jsxs)("span", {
                                children: [
                                  "The veLOXO airdrop will be distributed across multiple",
                                  (0, a.jsx)("br", {}),
                                  " sectors based on trading fees: ",
                                ],
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 0 ＜ Trade fees ≤ $2.5K; 25,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 $2.5K ＜ Trade fees ≤ $5K; 60,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 $5K ＜ Trade fees ≤ $10K; 120,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 $10K ＜ Trade fees ＜ $20K; 300,000 veLOXO",
                              }),
                              (0, a.jsx)("span", {
                                children:
                                  "\xb7 $20K ＜ Trade fees; 500,000 veLOXO",
                              }),
                            ],
                          }),
                      }),
                    ],
                  }),
              },
              {
                title: "Total Trade Fees",
                key: "TotalTradeFees",
                width: "21%",
                dataIndex: "totalStaked",
                unit: "IOTX",
                align: "left",
                render: (e) =>
                  Number(e.total) ? Number(e.total).toFixed(4) : 0,
              },
              {
                title: "Your Trade Fees",
                key: "YourTradeFees",
                dataIndex: "tokenBalance",
                width: "21%",
                unit: d ? "IOTX" : "",
                align: "left",
                render: (e) =>
                  d ? (Number(e.fee) ? Number(e.fee).toFixed(4) : 0) : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                titleHover: (0, a.jsxs)("div", {
                  children: [
                    "The airdrop is distributed based on the trade fees you generate during the",
                    (0, a.jsx)("br", {}),
                    " trading competition. Your Estimated Airdrop = (your trade fees/total trade",
                    (0, a.jsx)("br", {}),
                    " fees) * airdrop sector veLOXO.",
                  ],
                }),
                width: "21%",
                key: "MyEstimatedAirdrop",
                align: "left",
                unit: d ? "veLOXO" : "",
                render: (e) =>
                  d
                    ? (0, a.jsx)("div", {
                        className: "flex flex-row items-center",
                        children: (0, a.jsx)("span", {
                          children: (0, x.pw)(e.airdrop, 4),
                        }),
                      })
                    : "-",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "16%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      d && m
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                c.push("/swap");
                              },
                              children: "Swap",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (
            r.length && ((r[0].totalStaked / 15e4) * 100).toFixed(2),
            (0, a.jsxs)("div", {
              className: i().container,
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-row items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex flex-row items-center w-[45%]",
                      children: (0, a.jsx)("div", {
                        className: "".concat(i().tableTitle),
                        children: (0, a.jsx)("span", {
                          children: "Trading Competition",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[30%]",
                      children: t
                        ? null
                        : !s &&
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "timeText",
                                children: "End In:",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-row items-center timeText ml-[2px]",
                                children: l,
                              }),
                            ],
                          }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[25%] text-right",
                      children: t
                        ? null
                        : s
                        ? (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-[#8A8A8A]",
                            children: "Ended",
                          })
                        : (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-blue",
                            children: "In Progress",
                          }),
                    }),
                  ],
                }),
                o
                  ? (0, a.jsx)("div", {
                      className: "w-full text-center mt-12",
                      children: (0, a.jsx)("span", {
                        className: "loading loading-bars loading-lg",
                      }),
                    })
                  : (0, a.jsx)("div", {
                      className: i().tableArea2,
                      children:
                        r && r.length
                          ? (0, a.jsx)(v.Z, {
                              columns: p,
                              type: "collapsed",
                              dataSource: r,
                              hairstyle: "white",
                            })
                          : (0, a.jsx)("div", {
                              className: "mt-12 text-center text-[#7e7e7e]",
                              children: "No Data",
                            }),
                    }),
              ],
            })
          );
        },
        components_TradersCard = (e) => {
          let { expired: t, dataSource: l, loading: s = !1 } = e,
            { address: r } = (0, n.m)(),
            o = (0, g.useRouter)(),
            { isSupported: d } = (0, N.$)();
          return s
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                className: "mt-10",
                children: (0, a.jsx)("div", {
                  className: i().tableArea2,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                              {
                                title: "Phase-2 Airdrop",
                                value: "-",
                                key: "PhraseAirdrop",
                                render: () =>
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-row",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        className: "mr-[5px]",
                                        children: [
                                          e.totalAirdrop
                                            ? (0, x.pw)(e.totalAirdrop)
                                            : "-",
                                          " veLOXO",
                                        ],
                                      }),
                                      (0, a.jsx)(b.Z, {
                                        position: t ? "left-top" : "bottom",
                                        handle: (0, a.jsxs)("div", {
                                          className:
                                            "flex flex-row relative w-[25px] h-[18px]",
                                          children: [
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-0 w-[2px] h-[7px] xs:left-0 xs:w-[3.5px] xs:h-[9px] ".concat(
                                                  Number(e.section) > -1
                                                    ? "bg-blue"
                                                    : "bg-white",
                                                  " "
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[5px] w-[2px] h-[9px] xs:left-[7px] xs:w-[3.5px] xs:h-[11px] ".concat(
                                                  Number(e.section) > 0
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[10px] w-[2px] h-[11px] xs:left-[14px] xs:w-[3.5px] xs:h-[14px] ".concat(
                                                  Number(e.section) > 1
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[15px] w-[2px] h-[14px] xs:left-[21px] xs:w-[3.5px] xs:h-[18px] ".concat(
                                                  Number(e.section) > 2
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                            (0, a.jsx)("span", {
                                              className:
                                                "absolute bottom-[3px] left-[28px] w-[4px] h-[22px] ".concat(
                                                  Number(e.section) > 3
                                                    ? "bg-blue"
                                                    : "bg-white"
                                                ),
                                            }),
                                          ],
                                        }),
                                        renderContent: () =>
                                          (0, a.jsxs)("div", {
                                            className:
                                              "text-[12px] flex flex-col font-normal text-white leading-6",
                                            children: [
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "The veLOXO airdrop will be distributed across multiple sectors based on trading fees: ",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 0 ＜ Trade fees ≤ $2.5K; 25,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 $2.5K ＜ Trade fees ≤ $5K; 60,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 $5K ＜ Trade fees ≤ $10K; 120,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 $10K ＜ Trade fees ＜ $20K; 300,000 veLOXO",
                                              }),
                                              (0, a.jsx)("span", {
                                                style: { textWrap: "wrap" },
                                                children:
                                                  "\xb7 $20K ＜ Trade fees; 500,000 veLOXO",
                                              }),
                                            ],
                                          }),
                                      }),
                                    ],
                                  }),
                              },
                              {
                                title: "Total Trade Fees",
                                value: "",
                                key: "TotalVolume",
                                unit: "IOTX",
                                render: () =>
                                  Number(e.total)
                                    ? Number(e.total).toFixed(4)
                                    : 0,
                              },
                              {
                                title: "Your Trade Fees",
                                value: "",
                                key: "YourVolume",
                                unit: r ? "IOTX" : "",
                                render: () =>
                                  r
                                    ? Number(e.fee)
                                      ? Number(e.fee).toFixed(4)
                                      : 0
                                    : "-",
                              },
                              {
                                title: "Your Estimated Airdrop",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "The airdrop is distributed based on the trade fees you generate during the trading competition. Your Estimated Airdrop = (your trade fees/total trade fees) * airdrop sector veLOXO.",
                                }),
                                value: "",
                                key: "MyEstimatedAirdrop",
                                unit: r ? "veLOXO" : "",
                                render: () =>
                                  r
                                    ? (0, a.jsx)("div", {
                                        className: "flex flex-row items-center",
                                        children: (0, a.jsx)("span", {
                                          children: (0, x.pw)(e.airdrop, 4),
                                        }),
                                      })
                                    : "-",
                              },
                            ],
                            s = (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap items-center justify-center w-full",
                                children:
                                  r && d
                                    ? (0, a.jsx)("button", {
                                        className: "offButton w-full",
                                        onClick: () => {
                                          o.push("/swap");
                                        },
                                        children: "Swap",
                                      })
                                    : (0, a.jsx)(j.C, {
                                        btnBoxClassName: "w-full",
                                        BtnClassName: "w-full",
                                        noTitle: !0,
                                      }),
                              }),
                            });
                          return (0, a.jsx)(
                            y.Z,
                            {
                              footer: s,
                              columns: l,
                              asymmetrical: !0,
                              noTitle: !0,
                            },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              });
        },
        Perp = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: s,
              dataSource: r,
              loading: o = !1,
            } = e,
            { address: d } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: c } = (0, N.$)(),
            m = [
              {
                title: "Phase-1 Airdrop",
                key: "PhraseAirdrop",
                width: "21%",
                dataIndex: "",
                align: "left",
                render: (e) =>
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("span", {
                        children: [
                          e.totalAirdrop ? (0, x.pw)(e.totalAirdrop) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(layouts_ProgressBar, {
                        className: "w-[132px] mt-[2px]",
                        progress: e.airdropProcess || 0,
                      }),
                    ],
                  }),
              },
              {
                title: "Total LOXOLP",
                key: "TotalTradeFees",
                width: "21%",
                dataIndex: "totalStaked",
                align: "left",
                render: (e) =>
                  Number(e.total) ? Number(e.total).toFixed(4) : 0,
              },
              {
                title: "Your LOXOLP",
                key: "YourTradeFees",
                dataIndex: "tokenBalance",
                width: "21%",
                align: "left",
                render: (e) =>
                  d ? (Number(e.fee) ? Number(e.fee).toFixed(4) : 0) : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                titleHover: (0, a.jsx)("div", {
                  children:
                    "For every 100 LOXOLP held for 24 hours, you get 8 veLOXO.",
                }),
                width: "21%",
                key: "MyEstimatedAirdrop",
                align: "left",
                unit: d ? "veLOXO" : "",
                render: (e) =>
                  d
                    ? (0, a.jsx)("div", {
                        className: "flex flex-row items-center",
                        children: (0, a.jsx)("span", {
                          children: (0, x.pw)(e.airdrop, 4),
                        }),
                      })
                    : "-",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "16%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      d && c
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                window.open(
                                  "https://perp.loxodrome.xyz/#/pools"
                                );
                              },
                              children: "Get LOXOLP",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (
            r.length && ((r[0].totalStaked / 15e4) * 100).toFixed(2),
            (0, a.jsxs)("div", {
              className: i().container,
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-row items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex flex-row items-center w-[45%]",
                      children: (0, a.jsx)("div", {
                        className: "".concat(i().tableTitle),
                        children: (0, a.jsx)("span", {
                          children: "Perp Liquidity Minting Competition",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[30%]",
                      children: t
                        ? null
                        : !s &&
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "timeText",
                                children: "End In:",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-row items-center timeText ml-[2px]",
                                children: l,
                              }),
                            ],
                          }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[25%] text-right",
                      children: t
                        ? null
                        : s
                        ? (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-[#8A8A8A]",
                            children: "Ended",
                          })
                        : (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-blue",
                            children: "In Progress",
                          }),
                    }),
                  ],
                }),
                o
                  ? (0, a.jsx)("div", {
                      className: "w-full text-center mt-12",
                      children: (0, a.jsx)("span", {
                        className: "loading loading-bars loading-lg",
                      }),
                    })
                  : (0, a.jsx)("div", {
                      className: i().tableArea2,
                      children:
                        r && r.length
                          ? (0, a.jsx)(v.Z, {
                              columns: m,
                              type: "collapsed",
                              dataSource: r,
                              hairstyle: "white",
                            })
                          : (0, a.jsx)("div", {
                              className: "mt-12 text-center text-[#7e7e7e]",
                              children: "No Data",
                            }),
                    }),
              ],
            })
          );
        },
        PerpCard = (e) => {
          let { expired: t, dataSource: l, loading: s = !1 } = e,
            { address: r } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: o } = (0, N.$)();
          return s
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                className: "mt-10",
                children: (0, a.jsx)("div", {
                  className: i().tableArea2,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                              {
                                title: "Phase-1 Airdrop",
                                value: "-",
                                key: "PhraseAirdrop",
                                render: () =>
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: [
                                          e.totalAirdrop
                                            ? (0, x.pw)(e.totalAirdrop)
                                            : "-",
                                          " veLOXO",
                                        ],
                                      }),
                                      (0, a.jsx)(layouts_ProgressBar, {
                                        className: "w-[26vw] mt-[2px]",
                                        progress: e.airdropProcess || 0,
                                      }),
                                    ],
                                  }),
                              },
                              {
                                title: "Total LOXOLP",
                                value: "",
                                key: "TotalVolume",
                                render: () =>
                                  Number(e.total)
                                    ? Number(e.total).toFixed(4)
                                    : 0,
                              },
                              {
                                title: "Your LOXOLP",
                                value: "",
                                key: "YourVolume",
                                render: () =>
                                  r
                                    ? Number(e.fee)
                                      ? Number(e.fee).toFixed(4)
                                      : 0
                                    : "-",
                              },
                              {
                                title: "Your Estimated Airdrop",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "For every 100 LOXOLP held for 24 hours, you get 8 veLOXO.",
                                }),
                                value: "",
                                key: "MyEstimatedAirdrop",
                                unit: r ? "veLOXO" : "",
                                render: () =>
                                  r
                                    ? (0, a.jsx)("div", {
                                        className: "flex flex-row items-center",
                                        children: (0, a.jsx)("span", {
                                          children: (0, x.pw)(e.airdrop, 4),
                                        }),
                                      })
                                    : "-",
                              },
                            ],
                            s = (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap items-center justify-center w-full",
                                children:
                                  r && o
                                    ? (0, a.jsx)("button", {
                                        className: "offButton w-full",
                                        onClick: () => {
                                          window.open(
                                            "https://perp.loxodrome.xyz/#/pools"
                                          );
                                        },
                                        children: "Get LOXOLP",
                                      })
                                    : (0, a.jsx)(j.C, {
                                        btnBoxClassName: "w-full",
                                        BtnClassName: "w-full",
                                        noTitle: !0,
                                      }),
                              }),
                            });
                          return (0, a.jsx)(
                            y.Z,
                            {
                              footer: s,
                              columns: l,
                              asymmetrical: !0,
                              noTitle: !0,
                            },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              });
        },
        Perpetual = (e) => {
          let {
              initTime: t,
              countdown: l,
              expired: s,
              dataSource: r,
              loading: o = !1,
            } = e,
            { address: d } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: c } = (0, N.$)(),
            m = [
              {
                title: "Phase-1 Airdrop",
                key: "PhraseAirdrop",
                width: "21%",
                dataIndex: "",
                align: "left",
                render: (e) =>
                  (0, a.jsxs)("div", {
                    children: [
                      (0, a.jsxs)("span", {
                        children: [
                          e.totalAirdrop ? (0, x.pw)(e.totalAirdrop) : "-",
                          " veLOXO",
                        ],
                      }),
                      (0, a.jsx)(layouts_ProgressBar, {
                        className: "w-[132px] mt-[2px]",
                        progress: e.airdropProcess || 0,
                      }),
                    ],
                  }),
              },
              {
                title: "Total Trading Volume",
                key: "TotalTradingVolume",
                width: "21%",
                dataIndex: "totalStaked",
                preSymbol: d ? "$" : "",
                align: "left",
                render: (e) =>
                  Number(e.total) ? (0, x.pw)(e.total, 2, !0) : 0,
              },
              {
                title: "Your Trading Volume",
                key: "YourTradingVolume",
                dataIndex: "tokenBalance",
                width: "21%",
                preSymbol: d ? "$" : "",
                align: "left",
                render: (e) =>
                  d ? (Number(e.fee) ? (0, x.pw)(e.fee, 2, !0) : 0) : "-",
              },
              {
                title: "Your Estimated Airdrop",
                dataIndex: "",
                titleHover: (0, a.jsx)("div", {
                  children: "Earn 2 veLOXO per $100 trading volume.",
                }),
                width: "21%",
                key: "MyEstimatedAirdrop",
                align: "left",
                unit: d ? "veLOXO" : "",
                render: (e) =>
                  d
                    ? (0, a.jsx)("div", {
                        className: "flex flex-row items-center",
                        children: (0, a.jsx)("span", {
                          children: (0, x.pw)(e.airdrop, 4),
                        }),
                      })
                    : "-",
              },
              {
                title: "",
                dataIndex: "operation",
                key: "operation",
                width: "16%",
                align: "right",
                render: (e, t) =>
                  (0, a.jsx)("div", {
                    className: "flex flex-row flex-wrap gap-2.5",
                    children:
                      d && c
                        ? (0, a.jsx)(a.Fragment, {
                            children: (0, a.jsx)("button", {
                              className: "offButton",
                              onClick: () => {
                                window.open(
                                  "https://perp.loxodrome.xyz/#/trade"
                                );
                              },
                              children: "Trade",
                            }),
                          })
                        : (0, a.jsx)(j.C, { noTitle: !0 }),
                  }),
              },
            ];
          return (
            r.length && ((r[0].totalStaked / 15e4) * 100).toFixed(2),
            (0, a.jsxs)("div", {
              className: i().container,
              children: [
                (0, a.jsxs)("div", {
                  className: "flex flex-row items-center",
                  children: [
                    (0, a.jsx)("div", {
                      className: "flex flex-row items-center w-[45%]",
                      children: (0, a.jsx)("div", {
                        className: "".concat(i().tableTitle),
                        children: (0, a.jsx)("span", {
                          children: "Perpetual Trading Competition",
                        }),
                      }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[30%]",
                      children: t
                        ? null
                        : !s &&
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "timeText",
                                children: "End In:",
                              }),
                              (0, a.jsx)("div", {
                                className:
                                  "flex flex-row items-center timeText ml-[2px]",
                                children: l,
                              }),
                            ],
                          }),
                    }),
                    (0, a.jsx)("div", {
                      className: "w-[25%] text-right",
                      children: t
                        ? null
                        : s
                        ? (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-[#8A8A8A]",
                            children: "Ended",
                          })
                        : (0, a.jsx)("div", {
                            className: "text-[sm] font-normal text-blue",
                            children: "In Progress",
                          }),
                    }),
                  ],
                }),
                o
                  ? (0, a.jsx)("div", {
                      className: "w-full text-center mt-12",
                      children: (0, a.jsx)("span", {
                        className: "loading loading-bars loading-lg",
                      }),
                    })
                  : (0, a.jsx)("div", {
                      className: i().tableArea2,
                      children:
                        r && r.length
                          ? (0, a.jsx)(v.Z, {
                              columns: m,
                              type: "collapsed",
                              dataSource: r,
                              hairstyle: "white",
                            })
                          : (0, a.jsx)("div", {
                              className: "mt-12 text-center text-[#7e7e7e]",
                              children: "No Data",
                            }),
                    }),
              ],
            })
          );
        },
        PerpetualCard = (e) => {
          let { expired: t, dataSource: l, loading: s = !1 } = e,
            { address: r } = (0, n.m)();
          (0, g.useRouter)();
          let { isSupported: o } = (0, N.$)();
          return s
            ? (0, a.jsx)("div", {
                className: "w-full text-center mt-12",
                children: (0, a.jsx)("span", {
                  className: "loading loading-bars loading-lg",
                }),
              })
            : (0, a.jsx)("div", {
                className: "mt-10",
                children: (0, a.jsx)("div", {
                  className: i().tableArea2,
                  children:
                    l && l.length
                      ? l.map((e, t) => {
                          let l = [
                              {
                                title: "Phase-1 Airdrop",
                                value: "-",
                                key: "PhraseAirdrop",
                                render: () =>
                                  (0, a.jsxs)("div", {
                                    className: "flex flex-col",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: [
                                          e.totalAirdrop
                                            ? (0, x.pw)(e.totalAirdrop)
                                            : "-",
                                          " veLOXO",
                                        ],
                                      }),
                                      (0, a.jsx)(layouts_ProgressBar, {
                                        className: "w-[26vw] mt-[2px]",
                                        progress: e.airdropProcess || 0,
                                      }),
                                    ],
                                  }),
                              },
                              {
                                title: "Total Trading Volume",
                                value: "",
                                key: "TotalTradingVolume",
                                render: () =>
                                  Number(e.total)
                                    ? (0, x.pw)(e.total, 2, !0)
                                    : 0,
                                preSymbol: r ? "$" : "",
                              },
                              {
                                title: "Your Trading Volume",
                                value: "",
                                key: "YourTradingVolume",
                                render: () =>
                                  r
                                    ? Number(e.fee)
                                      ? (0, x.pw)(e.fee, 2, !0)
                                      : 0
                                    : "-",
                                preSymbol: r ? "$" : "",
                              },
                              {
                                title: "Your Estimated Airdrop",
                                titleHover: (0, a.jsx)("div", {
                                  className: "text-center",
                                  children:
                                    "Earn 2 veLOXO per $100 trading volume.",
                                }),
                                value: "",
                                key: "MyEstimatedAirdrop",
                                unit: r ? "veLOXO" : "",
                                render: () =>
                                  r
                                    ? (0, a.jsx)("div", {
                                        className: "flex flex-row items-center",
                                        children: (0, a.jsx)("span", {
                                          children: (0, x.pw)(e.airdrop, 4),
                                        }),
                                      })
                                    : "-",
                              },
                            ],
                            s = (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className:
                                  "flex flex-wrap items-center justify-center w-full",
                                children:
                                  r && o
                                    ? (0, a.jsx)("button", {
                                        className: "offButton w-full",
                                        onClick: () => {
                                          window.open(
                                            "https://perp.loxodrome.xyz/#/trade"
                                          );
                                        },
                                        children: "Trade",
                                      })
                                    : (0, a.jsx)(j.C, {
                                        btnBoxClassName: "w-full",
                                        BtnClassName: "w-full",
                                        noTitle: !0,
                                      }),
                              }),
                            });
                          return (0, a.jsx)(
                            y.Z,
                            {
                              footer: s,
                              columns: l,
                              asymmetrical: !0,
                              noTitle: !0,
                            },
                            t
                          );
                        })
                      : (0, a.jsx)("div", {
                          className: i().nodataCard,
                          children: "No Data",
                        }),
                }),
              });
        },
        LoxoAirdrop = () => {
          let { address: e, chain: t } = (0, n.m)(),
            l = (0, s.useRef)(null);
          (0, s.useRef)(null);
          let r = (0, s.useRef)(null),
            c = (0, s.useRef)(null),
            v = (0, s.useRef)(null),
            f = (0, s.useRef)(null),
            j = (0, s.useRef)(null),
            N = (0, s.useRef)(null),
            y = (0, g.useRouter)(),
            T = [
              {
                title: "Perp Liquidity Minting Competition",
                id: 0,
                hover: "",
                color: "#2BDFB4",
                text: "Coming Soon",
                endTime: 1721438173e3,
                timeText: "End In:",
              },
              {
                title: "Perpetual Trading Competition",
                id: 1,
                hover: "",
                color: "#2BDFB4",
                text: "Coming Soon",
                endTime: 1721438173e3,
                timeText: "End In:",
              },
              {
                title: "Trading Competition",
                id: 2,
                hover: "",
                color: "#2BDFB4",
                text: "Coming Soon",
                endTime: 1721438173e3,
                timeText: "End In:",
              },
              {
                title: "Liquidity Minting Competition",
                id: 3,
                color: "#2BDFB4",
                text: "Coming Soon",
                endTime: 17185166e5,
                timeText: "End In: ",
              },
              {
                title: "IOTX Stakers Airdrop",
                id: 4,
                hover:
                  "Airdrop eligibility requires a minimum of 500 IOTX staked on stake.iotex.io before April 24, 2024, UTC",
                color: "#2BDFB4",
                text: "In Progress",
                endTime: 1716249599e3,
                timeText: "Claims Countdown:",
              },
              {
                title: "LoxoNFT Stakers Airdrop",
                id: 5,
                color: "#7E7E7E",
                text: "Coming Soon",
                timeText: "Claims Countdown:",
              },
              {
                title: "LOXO Lockers Incentive",
                id: 6,
                color: "#7E7E7E",
                text: "Coming Soon",
                timeText: "Claims Countdown:",
              },
            ],
            [O, L] = (0, s.useState)(T[0]),
            [_, A] = (0, s.useState)(!0),
            [k, C] = (0, s.useState)([]),
            [X, S] = (0, s.useState)(!1),
            I = (0, w.useToastSuccess)(),
            [P, E] = (0, s.useState)("-- : -- : -- : --"),
            [F, K] = (0, s.useState)(!1),
            [B, V] = (0, s.useState)("-- : -- : -- : --"),
            [Y, D] = (0, s.useState)(!1),
            [R, M] = (0, s.useState)("-- : -- : -- : --"),
            [$, Z] = (0, s.useState)(!1),
            [H, W] = (0, s.useState)("-- : -- : -- : --"),
            [q, z] = (0, s.useState)(!1),
            [G, J] = (0, s.useState)("-- : -- : -- : --"),
            {
              info: U,
              claimIoTexStaker: Q,
              getInfo: ee,
              lps: et,
              claimLps: el,
              getLps: ea,
              getRemaining: es,
              claimRemaining: er,
            } = (0, u.ZP)(),
            [ei, eo] = (0, s.useState)([]),
            [en, ed] = (0, s.useState)(0),
            [ex, ec] = (0, s.useState)(!1),
            [em, ep] = (0, s.useState)([]),
            [eu, eh] = (0, s.useState)([
              {
                section: 0,
                totalAirdrop: "-",
                totalStaked: "-",
                totalPoints: "-",
                myPoints: "-",
                myAirdrop: "-",
                isOld: !1,
              },
            ]),
            [ev, ef] = (0, s.useState)([
              { totalStaked: 0, totalLocked: 0, myLoxo: 0, estimated: 0 },
            ]),
            [ej, eb] = (0, s.useState)([
              { estimated: null, tokenBalance: 0, totalStaked: 0 },
            ]),
            [ew, eN] = (0, s.useState)([
              {
                totalAirdrop: "-",
                total: "-",
                fee: "-",
                airdrop: "-",
                section: "-",
              },
            ]),
            [eg, ey] = (0, s.useState)([
              {
                totalAirdrop: "-",
                total: "-",
                fee: "-",
                airdrop: "-",
                airdropProcess: 0,
              },
            ]),
            [eT, eO] = (0, s.useState)([
              {
                totalAirdrop: "-",
                total: "-",
                fee: "-",
                airdrop: "-",
                airdropProcess: 0,
              },
            ]),
            [eL, e_] = (0, s.useState)(!1),
            [eA, ek] = (0, s.useState)(!1),
            [eC, eX] = (0, s.useState)(!1),
            [eS, eI] = (0, s.useState)(!1),
            [eP, eE] = (0, s.useState)(!1),
            [eF, eK] = (0, s.useState)(!1),
            [eB, eV] = (0, s.useState)(!1),
            [eY, eD] = (0, s.useState)(null),
            eR = "0x0000000000000000000000000000000000000000",
            eM = (0, s.useRef)(),
            e$ = (0, s.useRef)(null),
            eZ = (0, s.useRef)(null);
          (0, s.useEffect)(() => {
            setTimeout(() => {
              A(!1);
            }, 1100);
          }, []),
            (0, s.useEffect)(() => {
              e && getAirdrop();
            }, [e]);
          let getAirdrop = async () => {
            try {
              let t = await es(e);
              eD(t);
            } catch (e) {}
          };
          (0, s.useEffect)(() => {
            let e = setInterval(() => {
              let t = (0, x.RU)(17098136e5);
              "null" !== t ? V(t) : (K(!0), clearInterval(e));
            }, 1e3);
            return () => clearInterval(e);
          }, []),
            (0, s.useEffect)(
              () => (
                (e$.current = setInterval(() => {
                  let e = (0, x.RU)(17380728e5);
                  "null" !== e
                    ? W(e)
                    : (Z(!0), clearInterval(e$.current), (e$.current = null));
                }, 1e3)),
                () => {
                  clearInterval(e$.current), (e$.current = null);
                }
              ),
              []
            ),
            (0, s.useEffect)(
              () => (
                console.log(17380728e5, "===>endTime123"),
                (eZ.current = setInterval(() => {
                  let e = (0, x.RU)(17380728e5);
                  "null" !== e
                    ? J(e)
                    : (z(!0), clearInterval(eZ.current), (eZ.current = null));
                }, 1e3)),
                () => {
                  clearInterval(eZ.current), (eZ.current = null);
                }
              ),
              []
            ),
            (0, s.useEffect)(() => {
              let e = setInterval(() => {
                let t = (0, x.RU)(17380728e5);
                "null" !== t ? M(t) : (D(!0), clearInterval(e));
              }, 1e3);
              return () => clearInterval(e);
            }, []),
            (0, s.useEffect)(() => {
              let e = setInterval(() => {
                let t = (0, x.RU)(17380728e5);
                "null" !== t ? E(t) : (S(!0), clearInterval(e));
              }, 1e3);
              return () => clearInterval(e);
            }, []),
            (0, s.useEffect)(() => {
              getTardersData(), getNBData(), getPerpData();
            }, [e]),
            (0, s.useEffect)(() => {
              let handleClickOutside = (e) => {
                eM.current &&
                  !eM.current.contains(e.target) &&
                  eM.current.removeAttribute("open");
              };
              return (
                document.addEventListener("click", handleClickOutside),
                () => {
                  document.removeEventListener("click", handleClickOutside);
                }
              );
            }, []);
          let eH = (0, s.useMemo)(() => {
              if (eY) {
                let e = (0, d.d)(
                  (null == eY ? void 0 : eY.claimableVeLOXO) || 0n
                );
                return (0, x.Xh)(e, 4, !0);
              }
              return 0;
            }, [eY]),
            claimAll = async () => {
              if (!ex)
                try {
                  ec(!0);
                  let e = await er();
                  e &&
                    (I("Claim Successfully", "", 1, e),
                    (0, x.YG)(e, getAirdrop));
                } catch (e) {
                } finally {
                  ec(!1);
                }
            },
            getPerpData = async () => {
              try {
                eK(!0), eV(!0);
                let _ = await o.Z.get(
                    "https://perp.loxodrome.xyz/api/v1/4689/earn/1/info?account=".concat(
                      e || eR
                    )
                  ),
                  A = await o.Z.get(
                    "https://perp.loxodrome.xyz/api/v1/4689/earn/1/summary"
                  );
                if (200 == _.status && 200 == A.status) {
                  var t,
                    l,
                    a,
                    s,
                    r,
                    i,
                    n,
                    d,
                    x,
                    c,
                    m,
                    p,
                    u,
                    h,
                    v,
                    f,
                    j,
                    b,
                    w,
                    N,
                    g,
                    y,
                    T,
                    O,
                    L;
                  let e =
                      (null == _
                        ? void 0
                        : null === (l = _.data) || void 0 === l
                        ? void 0
                        : null === (t = l.data) || void 0 === t
                        ? void 0
                        : t[0]) || null,
                    o =
                      (null == A
                        ? void 0
                        : null === (a = A.data) || void 0 === a
                        ? void 0
                        : a.data) || null,
                    k = (
                      null == o
                        ? void 0
                        : null === (r = o.extra) || void 0 === r
                        ? void 0
                        : null === (s = r.perp) || void 0 === s
                        ? void 0
                        : s.triggerLiquidityPointLimit
                    )
                      ? 1
                      : Number((null == o ? void 0 : o.limitedTotal) || 0) /
                        Number((null == o ? void 0 : o.reach) || 1),
                    C = (
                      null == o
                        ? void 0
                        : null === (n = o.extra) || void 0 === n
                        ? void 0
                        : null === (i = n.perp) || void 0 === i
                        ? void 0
                        : i.triggerTradePointLimit
                    )
                      ? 1
                      : Number(
                          (null == o
                            ? void 0
                            : null === (x = o.extra) || void 0 === x
                            ? void 0
                            : null === (d = x.perp) || void 0 === d
                            ? void 0
                            : d.tradePoint) || 0
                        ) /
                        Number(
                          (null == o
                            ? void 0
                            : null === (m = o.extra) || void 0 === m
                            ? void 0
                            : null === (c = m.perp) || void 0 === c
                            ? void 0
                            : c.tradePointLimit) || 1
                        ),
                    X = [
                      {
                        totalAirdrop:
                          (null == o
                            ? void 0
                            : null === (u = o.extra) || void 0 === u
                            ? void 0
                            : null === (p = u.perp) || void 0 === p
                            ? void 0
                            : p.liquidityPointLimit) || 0,
                        airdropProcess: 100 * k,
                        total:
                          (null == o
                            ? void 0
                            : null === (v = o.extra) || void 0 === v
                            ? void 0
                            : null === (h = v.perp) || void 0 === h
                            ? void 0
                            : h.liquidity) || 0,
                        fee:
                          (null == e
                            ? void 0
                            : null === (j = e.leaderboard) || void 0 === j
                            ? void 0
                            : null === (f = j.perp) || void 0 === f
                            ? void 0
                            : f.liquidity) || 0,
                        airdrop:
                          (null == e
                            ? void 0
                            : null === (b = e.perp) || void 0 === b
                            ? void 0
                            : b.liquidity) || 0,
                      },
                    ],
                    S = [
                      {
                        totalAirdrop:
                          (null == o
                            ? void 0
                            : null === (N = o.extra) || void 0 === N
                            ? void 0
                            : null === (w = N.perp) || void 0 === w
                            ? void 0
                            : w.tradePointLimit) || 0,
                        airdropProcess: 100 * C,
                        total:
                          (null == o
                            ? void 0
                            : null === (y = o.extra) || void 0 === y
                            ? void 0
                            : null === (g = y.perp) || void 0 === g
                            ? void 0
                            : g.trade) || 0,
                        fee:
                          (null == e
                            ? void 0
                            : null === (O = e.leaderboard) || void 0 === O
                            ? void 0
                            : null === (T = O.perp) || void 0 === T
                            ? void 0
                            : T.tradingVolume) || 0,
                        airdrop:
                          (null == e
                            ? void 0
                            : null === (L = e.perp) || void 0 === L
                            ? void 0
                            : L.trade) || 0,
                      },
                    ];
                  k >= 1 &&
                    (Z(!0), clearInterval(e$.current), (e$.current = null)),
                    C >= 1 &&
                      (z(!0), clearInterval(eZ.current), (eZ.current = null)),
                    ey(X),
                    eO(S);
                } else console.log(_.statusText);
              } catch (e) {
                console.log(e);
              } finally {
                eK(!1), eV(!1);
              }
            },
            getTardersData = async () => {
              try {
                eE(!0);
                let m = await o.Z.get(
                  "https://dapp.loxodrome.xyz/api/airdrop/trader?account=".concat(
                    e || eR
                  )
                );
                if (200 == m.status) {
                  var t, l, a, s, r, i, n, d, x, c;
                  let e = [
                    {
                      totalAirdrop:
                        (null === (l = m.data) || void 0 === l
                          ? void 0
                          : null === (t = l.data) || void 0 === t
                          ? void 0
                          : t.totalAirdrop) || 0,
                      total:
                        (null === (s = m.data) || void 0 === s
                          ? void 0
                          : null === (a = s.data) || void 0 === a
                          ? void 0
                          : a.total) || 0,
                      fee:
                        (null === (i = m.data) || void 0 === i
                          ? void 0
                          : null === (r = i.data) || void 0 === r
                          ? void 0
                          : r.fee) || 0,
                      airdrop:
                        (null === (d = m.data) || void 0 === d
                          ? void 0
                          : null === (n = d.data) || void 0 === n
                          ? void 0
                          : n.airdrop) || 0,
                      section:
                        (null === (c = m.data) || void 0 === c
                          ? void 0
                          : null === (x = c.data) || void 0 === x
                          ? void 0
                          : x.section) || 0,
                    },
                  ];
                  eN(e);
                } else console.log(m.statusText);
              } catch (e) {
                console.log(e);
              } finally {
                eE(!1);
              }
            },
            getNBData = async () => {
              try {
                e_(!0);
                let a = await o.Z.get(
                  "https://dapp.loxodrome.xyz/api/airdrop/lp/?account=".concat(
                    e || eR
                  )
                );
                if (200 == a.status) {
                  var l;
                  let e =
                    (null === (l = a.data) || void 0 === l ? void 0 : l.data) ||
                    [];
                  if (e.length) {
                    let l = e.map((e) => e.pairId.toLowerCase()),
                      a = await (function (e, t) {
                        let l = m.P[4689 === t ? t : 4689],
                          a = (0, p.Ps)(_templateObject1(), e);
                        return l.query({ query: a });
                      })(
                        JSON.stringify(l),
                        (null == t ? void 0 : t.id) === 4689 ? t.id : 4689
                      ),
                      s = e.map((e) => {
                        let t = a.data.pairs.find((t) => t.id === e.pairId);
                        return t ? { ...e, ...t } : e;
                      }),
                      r = s.filter((e) => 0 === e.type),
                      i = s.filter((e) => 1 === e.type);
                    eo(r), ep(i);
                  }
                } else console.log(a.statusText);
              } catch (e) {
                console.log(e);
              } finally {
                e_(!1);
              }
            },
            scrollToComponent = (e, t) => {
              if (e.current) {
                let t =
                  e.current.getBoundingClientRect().top + window.scrollY - 200;
                window.scrollTo({ top: t, behavior: "smooth" });
              }
              ed(t);
            };
          return (
            (0, s.useMemo)(
              () =>
                0 === O.id ||
                1 === O.id ||
                2 === O.id ||
                3 === O.id ||
                4 === O.id
                  ? X
                  : 5 !== O.id || F,
              [O, X, F]
            ),
            (0, a.jsx)("div", {
              className:
                "pt-6 xs:pt-10 px-5 xs:px-8 lg:mx-0 flex flex-row justify-center",
              children: (0, a.jsxs)("div", {
                className: "w-full flex flex-row relative justify-center",
                children: [
                  (0, a.jsxs)("div", {
                    className:
                      "w-full lg:ml-[120px] xl:ml-[150px] 2xl:ml-[180px] sm:min-w-[640px] md:min-w-[768px] relative lg:min-w-[700px] xl:min-w-[1000px] max-w-[1200px]",
                    children: [
                      (0, a.jsx)("div", {
                        className:
                          "flex flex-wrap items-center justify-between",
                        children: (0, a.jsx)("div", {
                          className: "w-full",
                          children: (0, a.jsxs)("div", {
                            className:
                              "flex flex-col lg:flex-row justify-between w-full",
                            children: [
                              (0, a.jsxs)("div", {
                                children: [
                                  (0, a.jsx)("h1", {
                                    className: "pageTitle",
                                    children: "LOXO Airdrop",
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "pageContent",
                                    children: [
                                      "Unlock rewards with the Loxodrome airdrop! Participate now for high returns. ",
                                      (0, a.jsx)("br", {}),
                                      "Our commitment to fairness means tokens are distributed among all users.",
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className:
                                      "pageContent flex items-center !mt-0",
                                    children: [
                                      "View the claimed veLOXO on the ",
                                      (0, a.jsxs)("span", {
                                        className:
                                          "text-blue ml-[4px] cursor-pointer hover:underline flex items-center",
                                        onClick: () => y.push("/lock"),
                                        children: [
                                          " Lock page ",
                                          (0, a.jsx)(h.Ls, {
                                            className: "ml-[3px]",
                                          }),
                                        ],
                                      }),
                                    ],
                                  }),
                                ],
                              }),
                              0 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full mt-4 lg:hidden text-center",
                                  children:
                                    !$ &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-center items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "timeText",
                                          children: T[0].timeText,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex flex-row items-center timeText ml-[2px]",
                                          children: H,
                                        }),
                                      ],
                                    }),
                                }),
                              1 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full mt-4 lg:hidden text-center",
                                  children:
                                    !q &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-center items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "timeText",
                                          children: T[1].timeText,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex flex-row items-center timeText ml-[2px]",
                                          children: G,
                                        }),
                                      ],
                                    }),
                                }),
                              2 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full mt-4 lg:hidden text-center",
                                  children:
                                    !Y &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-center items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "timeText",
                                          children: T[2].timeText,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex flex-row items-center timeText ml-[2px]",
                                          children: R,
                                        }),
                                      ],
                                    }),
                                }),
                              3 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full mt-4 lg:hidden text-center",
                                  children:
                                    !X &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-center items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "timeText",
                                          children: T[3].timeText,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex flex-row items-center timeText ml-[2px]",
                                          children: P,
                                        }),
                                      ],
                                    }),
                                }),
                              4 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-full mt-4 lg:hidden text-center",
                                  children:
                                    !F &&
                                    (0, a.jsxs)("div", {
                                      className:
                                        "flex flex-row justify-center items-center",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: "timeText",
                                          children: T[4].timeText,
                                        }),
                                        (0, a.jsx)("div", {
                                          className:
                                            "flex flex-row items-center timeText ml-[2px]",
                                          children: B,
                                        }),
                                      ],
                                    }),
                                }),
                              e &&
                                (0, a.jsx)("div", {
                                  className: "flex items-center mt-4 lg:mt-0",
                                  children: (0, a.jsxs)("div", {
                                    className: i().totalTitle,
                                    children: [
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, a.jsx)("div", {
                                            children: "Claimable Airdrop:",
                                          }),
                                          (0, a.jsxs)("div", {
                                            className: "text-white",
                                            children: [eH, " veLOXO"],
                                          }),
                                        ],
                                      }),
                                      eY &&
                                        (0, a.jsxs)("button", {
                                          onClick: () => {
                                            claimAll();
                                          },
                                          disabled:
                                            !eY.claimableVeLOXO || eY.claimed,
                                          className:
                                            "offButton !px-[20px] md:ml-[60px]",
                                          children: [
                                            ex && (0, a.jsx)(h.yM, {}),
                                            eY.claimed ? "Claimed" : "Claim",
                                          ],
                                        }),
                                    ],
                                  }),
                                }),
                            ],
                          }),
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className: "lg:hidden mt-4 mb-10",
                        children: [
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-row justify-between items-center",
                            children: [
                              (0, a.jsx)("div", {
                                className: "w-[70%]",
                                children: (0, a.jsxs)("details", {
                                  ref: eM,
                                  className: "dropdown w-full",
                                  children: [
                                    (0, a.jsxs)("summary", {
                                      className:
                                        "w-full btn btn-neutral !normal-case rounded-none border border-slate-500/50 flex flex-row justify-between border-1 border-slate-500/50-content/2 hover:border-primary hover:bg-secondary min-h-0 h-10 xs:h-12 px-[6px] xs:px-[12px]",
                                      children: [
                                        (0, a.jsx)("div", {
                                          className: i().dropdownRewards,
                                          children: O.title,
                                        }),
                                        (0, a.jsx)(h.u4, {
                                          pathFill: "#7E7E7E",
                                        }),
                                      ],
                                    }),
                                    (0, a.jsx)("ul", {
                                      className:
                                        "p-2 border-slate-500/50 menu dropdown-content bg-neutral shadow-3xl w-full",
                                      style: { zIndex: "4" },
                                      children: T.map((e, t) =>
                                        (0, a.jsx)(
                                          "li",
                                          {
                                            className: i().dropdownRewards2,
                                            onClick: (t) => {
                                              var l;
                                              null == eM ||
                                                null === (l = eM.current) ||
                                                void 0 === l ||
                                                l.removeAttribute("open"),
                                                L(e);
                                            },
                                            children: (0, a.jsxs)("button", {
                                              className: "flex flex-row w-full",
                                              children: [
                                                (0, a.jsx)("span", {
                                                  children: e.title,
                                                }),
                                                e.hover &&
                                                  (0, a.jsx)(b.Z, {
                                                    className: "ml-2",
                                                    handle: (0, a.jsx)(
                                                      h.EG,
                                                      {}
                                                    ),
                                                    renderContent: () =>
                                                      (0, a.jsx)("div", {
                                                        className:
                                                          "text-center",
                                                        children: e.hover,
                                                      }),
                                                  }),
                                              ],
                                            }),
                                          },
                                          "menu" + t
                                        )
                                      ),
                                    }),
                                  ],
                                }),
                              }),
                              0 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: $ ? "#8a8a8a" : O.color,
                                    color: $ ? "#8a8a8a" : O.color,
                                  },
                                  children: $ ? "Ended" : "In Progress",
                                }),
                              1 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: q ? "#8a8a8a" : O.color,
                                    color: q ? "#8a8a8a" : O.color,
                                  },
                                  children: q ? "Ended" : "In Progress",
                                }),
                              2 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: Y ? "#8a8a8a" : O.color,
                                    color: Y ? "#8a8a8a" : O.color,
                                  },
                                  children: Y ? "Ended" : "In Progress",
                                }),
                              3 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: X ? "#8a8a8a" : O.color,
                                    color: X ? "#8a8a8a" : O.color,
                                  },
                                  children: X ? "Coming Soon" : "In Progress",
                                }),
                              4 === O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: F ? "#8a8a8a" : O.color,
                                    color: F ? "#8a8a8a" : O.color,
                                  },
                                  children: F ? "Ended" : "In Progress",
                                }),
                              0 !== O.id &&
                                1 !== O.id &&
                                2 !== O.id &&
                                3 !== O.id &&
                                4 !== O.id &&
                                (0, a.jsx)("div", {
                                  className:
                                    "w-[30%] ml-3 border border-solid text-[12px] xs:text-sm flex justify-center items-center h-10 xs:h-12 whitespace-nowrap",
                                  style: {
                                    borderColor: O.color,
                                    color: O.color,
                                  },
                                  children: O.text,
                                }),
                            ],
                          }),
                          0 === O.id &&
                            (0, a.jsx)(PerpCard, {
                              expired: $,
                              dataSource: eg,
                              loading: eF,
                            }),
                          1 === O.id &&
                            (0, a.jsx)(PerpetualCard, {
                              expired: q,
                              dataSource: eT,
                              loading: eB,
                            }),
                          2 === O.id &&
                            (0, a.jsx)(components_TradersCard, {
                              expired: Y,
                              dataSource: ew,
                              loading: eP,
                            }),
                          3 === O.id &&
                            (0, a.jsx)(components_NativeCard, {
                              expired: X,
                              initTime: _,
                              refreshData: ea,
                              claimLps: el,
                              loading: eL,
                              dataSource: ei,
                              lps: et || {
                                claimableVeLOXO: 0n,
                                claimed: !1,
                                stakedAmount: 0n,
                              },
                            }),
                          4 === O.id &&
                            (0, a.jsx)(components_IotxCard, {
                              expired: F,
                              initTime: _,
                              refreshData: ee,
                              loading: eC,
                              claimIoTexStaker: Q,
                              ioTexState:
                                (null == U ? void 0 : U.ioTexStaked) || u.J9,
                              dataSource: ej,
                            }),
                          5 === O.id &&
                            (0, a.jsx)(components_LoxoCard, {
                              expired: X,
                              loading: eC,
                              dataSource: eu,
                            }),
                          6 === O.id &&
                            (0, a.jsx)(components_VeCard, {
                              expired: X,
                              loading: eC,
                              dataSource: ev,
                            }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className: "hidden lg:block mt-12 mb-10",
                        children: [
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: r,
                            children: (0, a.jsx)(Perp, {
                              initTime: _,
                              expired: $,
                              countdown: H,
                              dataSource: eg,
                              loading: eF,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: N,
                            children: (0, a.jsx)(Perpetual, {
                              initTime: _,
                              expired: q,
                              countdown: G,
                              dataSource: eT,
                              loading: eB,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: c,
                            children: (0, a.jsx)(components_Traders, {
                              initTime: _,
                              expired: Y,
                              countdown: R,
                              dataSource: ew,
                              loading: eP,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "overflow-x-auto mt-[40px]",
                            ref: l,
                            children: (0, a.jsx)(components_Native, {
                              refreshData: ea,
                              initTime: _,
                              expired: X,
                              countdown: P,
                              loading: eL,
                              dataSource: ei,
                              lps: et || {
                                claimableVeLOXO: 0n,
                                claimed: !1,
                                stakedAmount: 0n,
                              },
                              claimLps: el,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: j,
                            children: (0, a.jsx)(components_Iotx, {
                              refreshData: ee,
                              initTime: _,
                              expired: F,
                              countdown: B,
                              loading: eC,
                              claimIoTexStaker: Q,
                              ioTexState:
                                (null == U ? void 0 : U.ioTexStaked) || u.J9,
                              dataSource: ej,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: v,
                            children: (0, a.jsx)(components_Loxo, {
                              initTime: !0,
                              expired: X,
                              countdown: P,
                              loading: eC,
                              dataSource: eu,
                            }),
                          }),
                          (0, a.jsx)("div", {
                            className: "mt-[40px]",
                            ref: f,
                            children: (0, a.jsx)(components_Ve, {
                              initTime: !0,
                              expired: X,
                              countdown: P,
                              loading: eS,
                              dataSource: ev,
                            }),
                          }),
                        ],
                      }),
                    ],
                  }),
                  (0, a.jsx)("div", {
                    className: i().menuBox,
                    children: (0, a.jsxs)("ul", {
                      className: "pl-[24px]",
                      children: [
                        (0, a.jsxs)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(0 === en ? i().active : ""),
                          onClick: () => scrollToComponent(r, 0),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2",
                              children: "Perp Liquidity Minting Competition",
                            }),
                            (0, a.jsx)("span", {
                              className: "".concat(
                                $ ? "text-[#8a8a8a]" : "text-blue",
                                " text-[12px]"
                              ),
                              children: _ ? "" : $ ? "Ended" : "In Progress",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(1 === en ? i().active : ""),
                          onClick: () => scrollToComponent(N, 1),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2",
                              children: "Perpetual Trading Competition",
                            }),
                            (0, a.jsx)("span", {
                              className: "".concat(
                                q ? "text-[#8a8a8a]" : "text-blue",
                                " text-[12px]"
                              ),
                              children: _ ? "" : q ? "Ended" : "In Progress",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(2 === en ? i().active : ""),
                          onClick: () => scrollToComponent(c, 2),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2",
                              children: "Trading Competition",
                            }),
                            (0, a.jsx)("span", {
                              className: "".concat(
                                Y ? "text-[#8a8a8a]" : "text-blue",
                                " text-[12px]"
                              ),
                              children: _ ? "" : Y ? "Ended" : "In Progress",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(3 === en ? i().active : ""),
                          onClick: () => scrollToComponent(l, 3),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2",
                              children: "Liquidity Minting Competition",
                            }),
                            (0, a.jsx)("span", {
                              className: "".concat(
                                X ? "text-[#8a8a8a]" : "text-blue",
                                " text-[12px]"
                              ),
                              children: _ ? "" : X ? "Ended" : "In Progress",
                            }),
                          ],
                        }),
                        (0, a.jsxs)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(4 === en ? i().active : ""),
                          onClick: () => scrollToComponent(j, 4),
                          children: [
                            (0, a.jsx)("span", {
                              className: "mr-2",
                              children: "IOTX Stakers Airdrop",
                            }),
                            (0, a.jsx)("span", {
                              className: "".concat(
                                F ? "text-[#8a8a8a]" : "text-blue",
                                " text-[12px]"
                              ),
                              children: _ ? "" : F ? "Ended" : "In Progress",
                            }),
                          ],
                        }),
                        (0, a.jsx)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(5 === en ? i().active : ""),
                          onClick: () => scrollToComponent(v, 5),
                          children: "LoxoNFT Stakers Airdrop",
                        }),
                        (0, a.jsx)("li", {
                          className: ""
                            .concat(i().menuLi, " ")
                            .concat(6 === en ? i().active : ""),
                          onClick: () => scrollToComponent(f, 6),
                          children: "LOXO Lockers Incentive",
                        }),
                      ],
                    }),
                  }),
                ],
              }),
            })
          );
        };
    },
    67815: function (e) {
      e.exports = {
        button: "table_button__PK4Om",
        table_header: "table_table_header__faxLi",
        table_header_span: "table_table_header_span__TpeZq",
        avatarIcon: "table_avatarIcon__MuIDM",
        details: "table_details__zWAOs",
        token_name: "table_token_name__0H3Ts",
        token_slash: "table_token_slash__w9tb3",
        rows: "table_rows__qvCDz",
        btn_show_rows_cases: "table_btn_show_rows_cases__y75Ky",
        number_in_page: "table_number_in_page__IYw1b",
        list_value: "table_list_value__1X07h",
      };
    },
    33373: function (e) {
      e.exports = {
        title: "LoxoAirdrop_title__quIOr",
        content: "LoxoAirdrop_content__FDIme",
        tableTitle: "LoxoAirdrop_tableTitle__o8goq",
        dataArea: "LoxoAirdrop_dataArea__WJcAl",
        dataDesc: "LoxoAirdrop_dataDesc__iHHoy",
        tableArea: "LoxoAirdrop_tableArea__zHvI3",
        tableArea2: "LoxoAirdrop_tableArea2__WhELp",
        timeArea: "LoxoAirdrop_timeArea__9lq_w",
        timeTitle: "LoxoAirdrop_timeTitle__g4YWd",
        timeContent: "LoxoAirdrop_timeContent__l9B1g",
        timeItem: "LoxoAirdrop_timeItem__y9rO7",
        nodataArea: "LoxoAirdrop_nodataArea___Fq6T",
        nodataCard: "LoxoAirdrop_nodataCard__KhPQt",
        holdersRewardsTitle: "LoxoAirdrop_holdersRewardsTitle__c_2hY",
        holdersRewardsDesc: "LoxoAirdrop_holdersRewardsDesc__k4NMA",
        button: "LoxoAirdrop_button__iiUOw",
        "button-pop": "LoxoAirdrop_button-pop__mVu9h",
        "btn-group": "LoxoAirdrop_btn-group__RUz6p",
        glass: "LoxoAirdrop_glass__xMTzA",
        "btn-active": "LoxoAirdrop_btn-active__JujvF",
        "btn-disabled": "LoxoAirdrop_btn-disabled__xJ_Xc",
        "btn-group-horizontal": "LoxoAirdrop_btn-group-horizontal__iVQZj",
        "btn-group-vertical": "LoxoAirdrop_btn-group-vertical__9EWx1",
        dataAreaCard: "LoxoAirdrop_dataAreaCard__9_bdE",
        dropdownRewards: "LoxoAirdrop_dropdownRewards__8_2J6",
        dropdownRewards2: "LoxoAirdrop_dropdownRewards2__c5Qmy",
        after_image_title: "LoxoAirdrop_after_image_title__o6Nl3",
        after_image_value: "LoxoAirdrop_after_image_value__rYLVd",
        airdropTitle: "LoxoAirdrop_airdropTitle__JQPpb",
        airdropContent: "LoxoAirdrop_airdropContent__fIeED",
        airdropAmount: "LoxoAirdrop_airdropAmount__nQC0M",
        buttonAll: "LoxoAirdrop_buttonAll__rRA3N",
        "btn-outline": "LoxoAirdrop_btn-outline__q5m6Q",
        menuLi: "LoxoAirdrop_menuLi__g_F3e",
        menuBox: "LoxoAirdrop_menuBox__E_nxG",
        active: "LoxoAirdrop_active__YuC_Y",
        buttonText: "LoxoAirdrop_buttonText__98sHc",
        totalTitle: "LoxoAirdrop_totalTitle__VS2Pt",
      };
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 958, 984, 776, 744], function () {
      return e((e.s = 39405));
    }),
      (_N_E = e.O());
  },
]);
