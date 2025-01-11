(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [425],
  {
    8959: function (e, t, n) {
      Promise.resolve().then(n.bind(n, 75670)),
        Promise.resolve().then(n.bind(n, 10868));
    },
    75670: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return LoxoLayout;
          },
        });
      var a = n(57437),
        s = n(37359),
        l = n(15187),
        i = n(72692);
      function LoxoLayout(e) {
        let { children: t } = e,
          { isSupported: n } = (0, s.$)();
        return (0, a.jsx)(a.Fragment, {
          children: (0, a.jsxs)("main", {
            className: "main",
            children: [
              (0, a.jsx)(l.Z, {}),
              n ? (0, a.jsx)(a.Fragment, { children: t }) : (0, a.jsx)(i.Z, {}),
            ],
          }),
        });
      }
    },
    10712: function (e, t, n) {
      "use strict";
      n.d(t, {
        C: function () {
          return WalletConnecting;
        },
        y: function () {
          return WalletConnectingBtnWrap;
        },
      });
      var a = n(57437),
        s = n(30113),
        l = n.n(s),
        i = n(16691),
        r = n.n(i),
        o = n(79037),
        d = n(73616),
        c = n(37359);
      let WalletConnecting = (e) => {
          let {
              btnBoxClassName: t,
              className: n,
              BtnClassName: s,
              noTitle: i = !1,
            } = e,
            { address: u } = (0, o.m)(),
            { isSupported: p } = (0, c.$)(),
            { openConnectModal: m } = (0, d.We)(),
            { openChainModal: x } = (0, d.iC)();
          return (0, a.jsx)(a.Fragment, {
            children:
              (!u || !p) &&
              (0, a.jsxs)("div", {
                className: "w-full flex flex-col items-center",
                children: [
                  !i &&
                    (0, a.jsxs)("div", {
                      className:
                        null != n ? n : "flex flex-row gap-4 justify-center",
                      children: [
                        (0, a.jsx)(r(), {
                          loading: "lazy",
                          "data-src": "/static/img/icon/yellowInfo.svg",
                          className: "lazyload",
                          src: "/static/img/icon/yellowInfo.svg",
                          alt: "warning icon to connect wallet",
                          width: 25,
                          height: 25,
                        }),
                        (0, a.jsx)("div", {
                          className: l().content,
                          style: { color: "#FF9D00" },
                          children: "Please connect your wallet first",
                        }),
                      ],
                    }),
                  (0, a.jsx)("div", {
                    className: "".concat(t && t, " flex justify-center"),
                    children: u
                      ? p
                        ? null
                        : (0, a.jsx)("button", {
                            className: ""
                              .concat(!i && "mt-5", " ")
                              .concat(s && s, " offButton"),
                            onClick: x,
                            children: "Switch Network",
                          })
                      : (0, a.jsx)("button", {
                          className: ""
                            .concat(!i && "mt-5", " ")
                            .concat(s && s, " offButton"),
                          onClick: m,
                          children: "Connect Wallet",
                        }),
                  }),
                ],
              }),
          });
        },
        WalletConnectingBtnWrap = (e) => {
          let { className: t, children: n } = e,
            { address: s } = (0, o.m)(),
            { openConnectModal: l } = (0, d.We)();
          return (0, a.jsx)(a.Fragment, {
            children: s
              ? n
              : (0, a.jsx)("button", {
                  className: "offButton ".concat(t),
                  onClick: l,
                  children: "Connect Wallet",
                }),
          });
        };
    },
    19743: function (e, t, n) {
      "use strict";
      n.d(t, {
        N: function () {
          return a;
        },
      });
      let a = !0;
    },
    10868: function (e, t, n) {
      "use strict";
      n.r(t),
        n.d(t, {
          default: function () {
            return views_LoxoNFT;
          },
        });
      var a = n(57437),
        s = n(2265),
        l = n(30113),
        i = n.n(l),
        r = n(37927),
        o = n(79256),
        d = n(99720),
        c = n(79037),
        u = n(23751),
        p = n(54724),
        m = n(41472),
        x = n(54968),
        y = n(37416),
        extras_ManageLoxoNFT = (e) => {
          let {
              updateModal: t,
              staked: n,
              unStaked: l,
              myStake: r,
              NFTBal: f,
              unstake: h,
              stake: j,
              approval: b,
              isApproveForAll: N,
              updateOpen: w,
              fetchData: T,
            } = e,
            { address: g, chain: v } = (0, c.m)(),
            [k, C] = (0, s.useState)(!0),
            [F, S] = (0, s.useState)([]),
            _ = (0, s.useRef)(),
            [M, L] = (0, s.useState)(!1),
            [I, O] = (0, s.useState)(!1),
            [A, E] = (0, s.useState)(!1),
            [R, B] = (0, s.useState)(!1),
            [U, D] = (0, s.useState)("");
          (0, s.useRef)(!1);
          let [P, Z] = (0, s.useState)(!1),
            X = (0, s.useRef)(null),
            W = (0, m.useToastError)(),
            H = (0, m.useToastSuccess)(),
            $ = (0, s.useRef)(null);
          (0, s.useRef)(null),
            (0, s.useEffect)(() => {
              g &&
                N()
                  .then((e) => {
                    L(null != e && e);
                  })
                  .catch((e) => {
                    console.error("Error in fetch: ", e);
                  });
            }, [g]),
            (0, s.useEffect)(
              () => () => {
                $.current && clearTimeout($.current);
              },
              []
            ),
            (0, s.useEffect)(() => {
              let handleClickOutside = (e) => {
                _.current &&
                  !_.current.contains(e.target) &&
                  _.current.removeAttribute("open");
              };
              return (
                document.addEventListener("click", handleClickOutside),
                () => {
                  document.removeEventListener("click", handleClickOutside);
                }
              );
            }, []);
          let refresh = async () => {
            if (null !== $.current) return;
            let e = JSON.stringify((0, x.p$)(n).map((e) => Number(e) || "")),
              t = JSON.stringify((0, x.p$)(l).map((e) => Number(e) || "")),
              poll = async () => {
                try {
                  var n, a;
                  let s = await T(),
                    l = JSON.stringify(
                      (0, x.p$)(
                        (null === (n = s[9]) || void 0 === n
                          ? void 0
                          : n.result) || ""
                      ).map((e) => Number(e) || "")
                    ),
                    i = JSON.stringify(
                      (0, x.p$)(
                        (null === (a = s[3]) || void 0 === a
                          ? void 0
                          : a.result) || ""
                      ).map((e) => Number(e) || "")
                    );
                  e !== l && t !== i
                    ? (clearTimeout($.current), ($.current = null))
                    : ($.current = setTimeout(poll, 3e3));
                } catch (e) {
                  console.error("Error fetching data:", e),
                    clearTimeout($.current),
                    ($.current = null);
                }
              };
            $.current = setTimeout(poll, 3e3);
          };
          async function stakeHandler(e) {
            try {
              if ((O(!0), D("loading"), B(!0), E(!1), !(await N()))) {
                let e = await b(!0),
                  t = await (0, o.e)(d.vc, { hash: e });
                if (!t || (null == t ? void 0 : t.status) !== "success")
                  throw Error("Approval transaction failed");
              }
              O(!1);
              let t = await j(e);
              refresh();
              let n = F.length > 0 ? F[0].toString() : "N/A";
              H("Stake Successfully", "You Stake LOXO NFT # ".concat(n), 1, t),
                B(!1),
                (X.current = setTimeout(() => {
                  S([]), Z(!1);
                }, 5e3));
            } catch (e) {
              console.log("error stake NFT ", e),
                W(e),
                O(!1),
                B(!1),
                E(!0),
                D("rejected"),
                (X.current = setTimeout(() => {
                  Z(!1);
                }, 5e3));
            }
          }
          async function unstakeHandler(e) {
            try {
              D("loading"), B(!0);
              let t = await h(e);
              refresh(), B(!1);
              let n = F.length > 0 ? F[0].toString() : "N/A";
              H(
                "Unstake Successfully",
                "You Unstake LoxoNFT # ".concat(n),
                1,
                t
              ),
                (X.current = setTimeout(() => {
                  S([]), Z(!1);
                }, 5e3));
            } catch (e) {
              console.log("error stake NFT ", e),
                W(e),
                B(!1),
                E(!0),
                D("rejected"),
                (X.current = setTimeout(() => {
                  Z(!1);
                }, 5e3));
            }
          }
          return (
            (0, s.useEffect)(() => {
              P || D(""),
                w(P),
                X.current && (clearTimeout(X.current), (X.current = null));
            }, [P]),
            (0, a.jsxs)("div", {
              className: "modalInner",
              style: { minHeight: "".concat(U ? "500px" : "auto") },
              children: [
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row items-center justify-between w-full",
                  children: [
                    (0, a.jsx)("span", {
                      className: "modalTitle",
                      children: "Manage LoxoNFT",
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => t(!1),
                      className:
                        "btn btn-neutral  hover:border-none p-0 border-none min-h-0 h-5",
                      children: (0, a.jsx)(y._y, {}),
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "w-full mt-[25px] border border-[#2bdfb4] min-h-[46px] flex flex-wrap justify-between overflow-hidden items-center rounded-full h-[46px]",
                  children: [
                    (0, a.jsx)("div", {
                      onClick: () => {
                        C(!0), S([]);
                      },
                      className: "tabItem !w-1/2 ".concat(
                        k ? "tabItemActive" : ""
                      ),
                      children: "Stake",
                    }),
                    (0, a.jsx)("div", {
                      onClick: () => {
                        C(!1), S([]);
                      },
                      className: "tabItem !w-1/2 ".concat(
                        k ? "" : "tabItemActive"
                      ),
                      children: "Unstake",
                    }),
                  ],
                }),
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row justify-between items-center mt-[25px]",
                  children: [
                    (0, a.jsx)("p", {
                      className: "text-[12px] text-[#7e7e7e] leading-[16px]",
                      children: "Select Your LoxoNFTs",
                    }),
                    (0, a.jsx)("button", {
                      onClick: () => S([]),
                      className:
                        "btn bg-transparent border-transparent rounded-none text-primary min-h-0 h-7 px-0 "
                          .concat(i().button, " ")
                          .concat(i().manage_echonft_clearall_button),
                      children: "Clear all",
                    }),
                  ],
                }),
                (0, a.jsxs)("details", {
                  ref: _,
                  className: "modalItem",
                  children: [
                    (0, a.jsxs)("summary", {
                      className:
                        "min-h-0 h-11 btn btn-neutral rounded-none border-none w-100 flex flex-row justify-between border-1 border-accent-content/2 hover:border-primary hover:bg-secondary",
                      children: [
                        (0, a.jsx)("span", {
                          className: i().manage_echonft_nft_dropdown,
                          children:
                            0 === F.length
                              ? "Select"
                              : F.map((e, t) =>
                                  (0, a.jsxs)(
                                    "span",
                                    {
                                      children: [
                                        "#" + e.toString(),
                                        t < F.length - 1 ? "," : "",
                                      ],
                                    },
                                    t
                                  )
                                ),
                        }),
                        (0, a.jsx)(y.u4, { pathFill: "#7E7E7E" }),
                      ],
                    }),
                    (0, a.jsxs)("ul", {
                      className: "downCard",
                      children: [
                        k
                          ? n && n.length
                            ? ""
                            : "NFT not found"
                          : l && l.length
                          ? ""
                          : "NFT not found",
                        k
                          ? (n || []).map((e, t) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  className: "".concat(
                                    i().manage_echonft_nft_items,
                                    " w-full flex flex-wrap hover:cursor-pointer p-2"
                                  ),
                                  onClick: () => {
                                    var t;
                                    S((t) =>
                                      t.includes(e)
                                        ? t.filter((t) => t !== e)
                                        : [...t, e]
                                    ),
                                      null === (t = _.current) ||
                                        void 0 === t ||
                                        t.removeAttribute("open");
                                  },
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-row w-full justify-between",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: ["NFT #", e.toString()],
                                      }),
                                      (0, a.jsx)("span", {
                                        children: " LoxoNFT",
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            )
                          : (l || []).map((e, t) =>
                              (0, a.jsx)(
                                "li",
                                {
                                  className: "".concat(
                                    i().manage_echonft_nft_items,
                                    " w-full flex flex-wrap hover:cursor-pointer p-2"
                                  ),
                                  onClick: () => {
                                    var t;
                                    S((t) =>
                                      t.includes(e)
                                        ? t.filter((t) => t !== e)
                                        : [...t, e]
                                    ),
                                      null === (t = _.current) ||
                                        void 0 === t ||
                                        t.removeAttribute("open");
                                  },
                                  children: (0, a.jsxs)("div", {
                                    className:
                                      "flex flex-row w-full justify-between",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: ["NFT#", e.toString()],
                                      }),
                                      (0, a.jsx)("span", {
                                        children: " LoxoNFT",
                                      }),
                                    ],
                                  }),
                                },
                                t
                              )
                            ),
                      ],
                    }),
                  ],
                }),
                k
                  ? (0, a.jsxs)(u.Z, {
                      id: "StakeNFT",
                      className: "w-full",
                      open: P,
                      children: [
                        (0, a.jsx)("button", {
                          onClick: () => {
                            Z(!0), stakeHandler(F);
                          },
                          disabled: 0 === F.length,
                          className:
                            "mt-[25px] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                          children: "Stake LoxoNFT",
                        }),
                        (0, a.jsx)(p.Z, {
                          title: "Stake",
                          updateModal: () => {
                            Z(!1);
                          },
                          children: (0, a.jsx)("div", {
                            className: "flex p-3 flex-wrap w-full",
                            children: (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsxs)("div", {
                                className: "w-full flex flex-wrap  ",
                                children: [
                                  (0, a.jsxs)("div", {
                                    className: "popupItem",
                                    children: [
                                      (0, a.jsx)("span", {
                                        children: "Approve ",
                                      }),
                                      I
                                        ? (0, a.jsx)(y.yM, {})
                                        : A
                                        ? (0, a.jsx)(y.Uc, {})
                                        : (0, a.jsx)(y.NO, {}),
                                    ],
                                  }),
                                  (0, a.jsxs)("div", {
                                    className: "popupItem",
                                    children: [
                                      (0, a.jsxs)("span", {
                                        children: [
                                          "Stake NFT",
                                          " ",
                                          F.length > 0
                                            ? F.map((e) =>
                                                "#".concat(e.toString())
                                              ).join(", ")
                                            : "N/A",
                                          " ",
                                        ],
                                      }),
                                      R
                                        ? (0, a.jsx)(y.yM, {})
                                        : A
                                        ? (0, a.jsx)(y.Uc, {})
                                        : (0, a.jsx)(y.NO, {}),
                                    ],
                                  }),
                                ],
                              }),
                            }),
                          }),
                        }),
                      ],
                    })
                  : (0, a.jsxs)(u.Z, {
                      id: "StakeNFT",
                      className: "w-full",
                      open: P,
                      children: [
                        (0, a.jsx)("button", {
                          className:
                            "mt-[25px] disabled:opacity-50 disabled:bg-base-200 disabled:shadow-none disabled:cursor-not-allowed disabled:text-accent createBtn w-full",
                          onClick: () => {
                            Z(!0), unstakeHandler(F);
                          },
                          disabled: 0 === F.length,
                          children: "Unstake LoxoNFT",
                        }),
                        (0, a.jsx)(p.Z, {
                          title: "Unstake",
                          updateModal: () => {
                            Z(!1);
                          },
                          children: (0, a.jsx)("div", {
                            className: "flex p-3 flex-wrap w-full",
                            children: (0, a.jsx)(a.Fragment, {
                              children: (0, a.jsx)("div", {
                                className: "w-full flex flex-wrap  ",
                                children: (0, a.jsxs)("div", {
                                  className: "popupItem",
                                  children: [
                                    (0, a.jsxs)("span", {
                                      children: [
                                        "Unstake LoxoNFT #",
                                        " ",
                                        F.length > 0 ? F[0].toString() : "N/A",
                                        " ",
                                      ],
                                    }),
                                    R
                                      ? (0, a.jsx)(y.yM, {})
                                      : A
                                      ? (0, a.jsx)(y.Uc, {})
                                      : (0, a.jsx)(y.NO, {}),
                                  ],
                                }),
                              }),
                            }),
                          }),
                        }),
                      ],
                    }),
                (0, a.jsxs)("div", {
                  className: "w-full flex flex-wrap mt-5 justify-between",
                  children: [
                    (0, a.jsx)("div", {
                      className: "w-full flex py-2 border-b",
                      children: "Stake LoxoNFT",
                    }),
                    (0, a.jsxs)("div", {
                      className: "w-1/2 flex flex-col text-stone-400 py-1",
                      children: [
                        (0, a.jsx)("div", {
                          className: "font-bold",
                          children: r,
                        }),
                        (0, a.jsx)("div", {
                          className: "text-xs",
                          children: "My Stake",
                        }),
                      ],
                    }),
                    (0, a.jsxs)("div", {
                      className:
                        "w-1/2 flex items-end flex-col text-stone-400 py-1",
                      children: [
                        (0, a.jsx)("div", {
                          className: "font-bold",
                          children: f,
                        }),
                        (0, a.jsx)("div", {
                          className: "text-xs",
                          children: "LoxoNFTs In Your Wallet",
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            })
          );
        },
        f = n(52098),
        LoxoNFT_TopBarInfo = (e) => {
          let {
              address: t,
              isLoading: n,
              balanceOf: l,
              total_supply: r,
              APR: o,
              weekEarning: d,
            } = e,
            LoadingComp = (e) => {
              let { children: s } = e;
              return t
                ? n
                  ? (0, a.jsx)("span", {
                      className: "loading loading-bars loading-lg",
                    })
                  : s
                : "--";
            },
            c = (0, s.useMemo)(() => {
              if (!Number(d) || !Number(l)) return 0;
              let e = Number(d || 0) / (Number(l) || 0);
              return e;
            }, [l, d]);
          return (0, a.jsxs)("div", {
            className: "lg:flex flex-col flex-wrap items-start justify-between",
            children: [
              (0, a.jsxs)("div", {
                className: "pageTitle text-blue flex flex-row",
                children: [
                  (0, a.jsx)("span", {
                    className: "text-blue",
                    children: "Stake Your LoxoNFT",
                  }),
                  (0, a.jsx)("span", {
                    className: "text-white ml-2",
                    children: "For Passive Income",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "flex flex-row justify-between w-full",
                children: [
                  (0, a.jsx)("p", {
                    className: "pageContent hidden lg:block",
                    children:
                      "Stake your LoxoNFT for weekly trading fees and royalties.",
                  }),
                  (0, a.jsxs)("div", {
                    onClick: () => {
                      window.open("https://loxodrome.xyz/mint");
                    },
                    className: "".concat(
                      i().stakeBtn,
                      " mt-7 btn bg-transparent border-transparent rounded-none animation text-right leading-[24px] min-h-0 h-[unset] pr-0"
                    ),
                    children: [
                      (0, a.jsx)("span", {
                        className: i().buyBtn,
                        style: {
                          fontFamily: "Outfit-SemiBold",
                          fontSize: "20px",
                        },
                        children: "Go To Mint LoxoNFT",
                      }),
                      (0, a.jsx)("span", {
                        className: i().arrowRightHoverEffect,
                        children: (0, a.jsx)(y.Ec, { size: 20 }),
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "cardContainer mt-4 lg:mt-[30px]",
                children: [
                  (0, a.jsxs)("div", {
                    className: "cardItem",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[14px] leading-[24px] text-[#7e7e7e] opacity-80",
                        children: "Total LoxoNFT Staked",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "md:mt-[10px] text-[24px] leading-[24px] text-[#eaecef] opacity-80",
                        children: (0, a.jsxs)(LoadingComp, {
                          children: [
                            l ? l.toString() : 0,
                            " / ",
                            r ? r.toString() : 0,
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "cardItem",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[14px] leading-[24px] text-[#7e7e7e] opacity-80",
                        children: "Floor Price APR",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "md:mt-[10px] text-[24px] leading-[24px] text-[#eaecef] opacity-80",
                        children: (0, a.jsxs)(LoadingComp, {
                          children: [(0, x.en)(o), "%"],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "cardItem",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[14px] leading-[24px] text-[#7e7e7e] opacity-80",
                        children: "Last Epoch Earnings",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "md:mt-[10px] text-[24px] leading-[24px] text-[#eaecef] opacity-80",
                        children: (0, a.jsxs)(LoadingComp, {
                          children: ["$ ", (0, x.pw)(d, 2, !0)],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsxs)("div", {
                    className: "cardItem",
                    children: [
                      (0, a.jsx)("p", {
                        className:
                          "text-[14px] leading-[24px] text-[#7e7e7e] opacity-80",
                        children: "Earnings Per LoxoNFT",
                      }),
                      (0, a.jsx)("span", {
                        className:
                          "md:mt-[10px] text-[24px] leading-[24px] text-[#eaecef] opacity-80",
                        children: (0, a.jsxs)(LoadingComp, {
                          children: ["$ ", (0, x.pw)(c, 2, !0)],
                        }),
                      }),
                    ],
                  }),
                ],
              }),
            ],
          });
        },
        h = n(10712),
        j = n(92980),
        b = n(79352),
        N = n(16775),
        w = n(24033),
        T = n(73616),
        g = n(41658),
        v = n(17423),
        views_LoxoNFT = () => {
          let { address: e, chain: t } = (0, c.m)(),
            n = (0, m.useToastError)(),
            l = (0, m.useToastSuccess)(),
            o = (0, w.useSearchParams)(),
            { openConnectModal: d } = (0, T.We)(),
            [u, k] = (0, s.useState)(!1),
            [C, F] = (0, s.useState)(!1),
            [S, _] = (0, s.useState)(!1),
            [M, L] = (0, s.useState)(!1),
            {
              totalStaked: I,
              max_supply: O,
              balanceOf: A,
              isLoading: E,
              StakedTokenIds: R,
              rewardsPerSecond: B,
              rewardsPerSecondLOXO: U,
              claimableFees: D,
              tokensOfOwner: P,
              userInfo: Z,
              stake: X,
              unstake: W,
              claim: H,
              approval: $,
              isApproveForAll: z,
              accountNFTBalance: V,
              fetchData: J,
              pendingReward: Y,
            } = (0, f.Z)(e),
            {
              isOriginalMinters: G,
              claimable: K,
              claimRoyalties: q,
              claimPerpRewards: Q,
              fetchDiamond: ee,
            } = (0, g.Z)(e),
            {
              balances: et,
              initial: en,
              prices: ea,
            } = (0, j.useTokenContext)(),
            [es, el] = (0, s.useState)("0"),
            [ei, er] = (0, s.useState)("0"),
            [eo, ed] = (0, s.useState)("0"),
            [ec, eu] = (0, s.useState)(BigInt(0)),
            [ep, em] = (0, s.useState)([BigInt(0), BigInt(0)]),
            [ex, ey] = (0, s.useState)(0),
            [ef, eh] = (0, s.useState)("0"),
            [ej, eb] = (0, s.useState)(!1),
            [eN, ew] = (0, s.useState)(!1),
            [eT, eg] = (0, s.useState)(""),
            [ev, ek] = (0, s.useState)(""),
            [eC, eF] = (0, s.useState)(""),
            [eS, e_] = (0, s.useState)(!1),
            [eM, eL] = (0, s.useState)(!1),
            [eI, eO] = (0, s.useState)(!1),
            [eA, eE] = (0, s.useState)(!1),
            [eR, eB] = (0, s.useState)(!1),
            [eU, eD] = (0, s.useState)({ tokenRecord: [], tokenSum: "-" });
          (0, s.useEffect)(() => {
            let e = o.get("openManage");
            e && _(!0);
          }, []);
          let calculateAPR = (e, t, n, a) => {
            console.log(t, n, a, "===>totalStaked");
            let s = calculateTotalValue(
                ea,
                "IOTX",
                (0, b.d)(t),
                "LOXO",
                (0, b.d)(n)
              ),
              l = ((31536e3 * s) / (200 * parseFloat(a))) * 100;
            return l.toFixed(6);
          };
          (0, s.useEffect)(() => {
            e && fetch();
          }, [e, ea, t]),
            (0, s.useEffect)(() => {
              let getPerpData = async () => {
                let t = await ee(e),
                  n = countPerpData((null == t ? void 0 : t[0]) || []);
                n && eD(n);
              };
              ea && e && getPerpData();
            }, [ea, e]),
            (0, s.useEffect)(() => {
              let e =
                604800 *
                calculateTotalValue(
                  ea,
                  "IOTX",
                  (0, b.d)(B || BigInt(0)),
                  "LOXO",
                  (0, b.d)(U || BigInt(0))
                );
              if (
                (er((null == e ? void 0 : e.toFixed(2)) || "0"),
                em(Y),
                ea && I && (B || U))
              ) {
                let e = calculateAPR(ea, B, U, I);
                el(e || "0");
              }
            }, [B, ea, Y, Z, I, e]);
          let countPerpData = (e) => {
              if (!e || !e.length) return { tokenRecord: [], tokenSum: 0 };
              let t = e.map((e) => {
                  let t =
                      null == ea
                        ? void 0
                        : ea.find((t) => {
                            var n, a;
                            return (
                              (null == t
                                ? void 0
                                : null === (n = t.address) || void 0 === n
                                ? void 0
                                : n.toLowerCase()) ===
                              (null == e
                                ? void 0
                                : null === (a = e.token) || void 0 === a
                                ? void 0
                                : a.toLowerCase())
                            );
                          }),
                    n = (0, N.b)(
                      null == e ? void 0 : e.amount,
                      (null == t ? void 0 : t.decimals) || 0
                    ),
                    a =
                      parseFloat(
                        (0, N.b)(
                          null == e ? void 0 : e.amount,
                          (null == t ? void 0 : t.decimals) || 0
                        )
                      ) * (null == t ? void 0 : t.price) || 0;
                  return {
                    symbol: (null == t ? void 0 : t.symbol) || "",
                    tokenNum: (0, x.Xh)(n || "0", 4, !0),
                    totalUSD: a || 0,
                  };
                }),
                n = t.reduce((e, t) => e + t.totalUSD, 0);
              return {
                tokenRecord: t || [],
                tokenSum: (0, x.pw)(n || 0, 2, !0),
              };
            },
            eP = (0, s.useMemo)(() => {
              let e = (0, b.d)(ep[0] || BigInt(0)),
                t = (0, b.d)(ep[1] || BigInt(0)),
                n = calculateTotalValue(ea, "IOTX", e, "LOXO", t);
              return n;
            }, [ep, ea]),
            eZ = (0, s.useMemo)(
              () => calculateTotalValue(ea, "IOTX", ef || "0", "LOXO", "0"),
              [ef, ea]
            );
          async function fetch() {
            z();
            let t = await G(),
              n = await K(),
              a = await V(e);
            n && eh(parseFloat((0, b.d)(n)).toFixed(2)),
              t && ey(Number(t)),
              a && ed(a),
              e_(!0);
          }
          async function claimHandler() {
            try {
              if (e) {
                eg("loading"), eb(!0), eB(!0), eE(!1);
                let e = "",
                  t = "";
                if (eP && Number(eP)) {
                  let t = await H();
                  if (!t) throw Error("Failed to claim ve33 rewards");
                  e = t;
                }
                if (
                  (eb(!1), !(0, x.y_)(null == eU ? void 0 : eU.tokenRecord))
                ) {
                  let e = await Q();
                  if (!e) throw Error("Failed to claim perp rewards");
                  t = e;
                }
                eB(!1),
                  l(
                    "Claim Successfully",
                    "Claim reward for LoxoNFT stakers",
                    1,
                    t || e
                  ),
                  setTimeout(() => {
                    F(!1);
                  }, 5e3);
              }
            } catch (e) {
              n(e),
                eb(!1),
                eB(!1),
                eE(!0),
                eg("rejected"),
                setTimeout(() => {
                  F(!1);
                }, 5e3);
            }
          }
          async function ClaimRoyaltiesHandler() {
            try {
              if (e) {
                eg("loading"), ew(!0), eE(!1);
                let t = await q(e);
                if (!t) throw Error("Failed to claim royalties reward");
                l(
                  "Claim Successfully",
                  "Claim Royalties of Original minter of  LoxoNFT",
                  1,
                  t
                ),
                  ew(!1),
                  setTimeout(() => {
                    eL(!1);
                  }, 5e3);
              }
            } catch (e) {
              n(e),
                ew(!1),
                eE(!0),
                eg("rejected"),
                setTimeout(() => {
                  eL(!1);
                }, 5e3);
            }
          }
          function calculateTotalValue(e, t, n, a, s) {
            let l = 0;
            for (let i of e)
              if (i.symbol === t) {
                let e = parseFloat(n),
                  t = i.price;
                l += e * t;
              } else if (i.symbol === a) {
                let e = parseFloat(s),
                  t = i.price;
                l += e * t;
              }
            return l;
          }
          return (0, a.jsxs)("div", {
            className: "pageContainer",
            children: [
              (0, a.jsx)(LoxoNFT_TopBarInfo, {
                address: e,
                balanceOf: A,
                APR: es,
                total_supply: I,
                isLoading: E,
                weekEarning: ei,
              }),
              (0, a.jsxs)("div", {
                className: "cardInner",
                children: [
                  (0, a.jsx)("div", {
                    className: "".concat(
                      i().stake_nft_title,
                      " flex flex-row items-center justify-between"
                    ),
                    children: (0, a.jsx)("span", {
                      className: "loxoTitle",
                      children: "Stake LoxoNFT",
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className: "loxoCard",
                    children: [
                      (0, a.jsxs)("div", {
                        className: "flex flex-col text-left w-1/2 lg:w-[unset]",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-[14px] text-[#7e7e7e]",
                            children: "My Stake",
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "mt-[8px] text-[16px] leading-[20px] text-white",
                            children: [
                              E
                                ? (0, a.jsx)("span", { children: "--" })
                                : R
                                ? R.length
                                : 0,
                              "\xa0LoxoNFT",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col  lg:text-right w-1/2 lg:w-[unset]",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-[14px] text-[#7e7e7e]",
                            children: "LoxoNFTs in your wallet",
                          }),
                          (0, a.jsxs)("span", {
                            className:
                              "mt-[8px] text-[16px] leading-[20px] text-white",
                            children: [
                              E
                                ? (0, a.jsx)("span", { children: "--" })
                                : eo
                                ? eo.toString()
                                : 0,
                              "\xa0LoxoNFT",
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col text-left lg:text-right mt-4 lg:mt-0 w-1/2 lg:w-[unset]",
                        children: [
                          (0, a.jsxs)("div", {
                            className: "flex flex-row items-center",
                            children: [
                              (0, a.jsx)("span", {
                                className: "text-[14px] text-[#7e7e7e]",
                                children: "ve33 Rewards",
                              }),
                              (0, a.jsx)(v.Z, {
                                className: "ml-2",
                                handle: (0, a.jsx)(y.EG, {}),
                                renderContent: () =>
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsxs)("div", {
                                        className: "hidden lg:block",
                                        children: [
                                          "Trading fees can only be claimed if royalty is not null",
                                          (0, a.jsx)("br", {}),
                                          " at the last epoch; otherwise, they accumulate until",
                                          (0, a.jsx)("br", {}),
                                          " royalty is generated.",
                                        ],
                                      }),
                                      (0, a.jsx)("div", {
                                        className: "lg:hidden text-center",
                                        children:
                                          "Trading fees can only be claimed if royalty is not null at the last epoch; otherwise, they accumulate until royalty is generated.",
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-row justify-start lg:justify-end items-center gap-2",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "mt-[8px] text-[16px] leading-[20px] text-white",
                                children: [
                                  " $ ",
                                  !Number(eP) &&
                                  (Number(ep[0] || 0n) > 0 ||
                                    Number(ep[1] || 0n) > 0)
                                    ? "<0.01"
                                    : (0, x.pw)(eP, 2, !0),
                                  " ",
                                ],
                              }),
                              (0, a.jsx)(v.Z, {
                                className: "mt-[8px]",
                                handle: (0, a.jsx)(y.NK, {}),
                                renderContent: () =>
                                  (0, a.jsxs)(a.Fragment, {
                                    children: [
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, x.Xh)(
                                            (0, b.d)(ep[0] || BigInt(0)),
                                            4,
                                            !0
                                          ),
                                          " IOTX",
                                        ],
                                      }),
                                      (0, a.jsxs)("div", {
                                        children: [
                                          (0, x.Xh)(
                                            (0, b.d)(ep[1] || BigInt(0)),
                                            4,
                                            !0
                                          ),
                                          " LOXO",
                                        ],
                                      }),
                                    ],
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col text-left lg:text-right mt-4 lg:mt-0 w-1/2 lg:w-[unset]",
                        children: [
                          (0, a.jsx)("div", {
                            className: "flex flex-row items-center",
                            children: (0, a.jsx)("span", {
                              className: "text-[14px] text-[#7e7e7e]",
                              children: "Perp Rewards",
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-row justify-start lg:justify-end items-center gap-2",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "mt-[8px] text-[16px] leading-[20px] text-white",
                                children: ["$ ", eU.tokenSum],
                              }),
                              (0, a.jsx)(v.Z, {
                                className: "mt-[8px]",
                                handle: (0, a.jsx)(y.NK, {}),
                                renderContent: () => {
                                  var e;
                                  return (0, a.jsx)("div", {
                                    className: "flex flex-col",
                                    children:
                                      null === (e = eU.tokenRecord) ||
                                      void 0 === e
                                        ? void 0
                                        : e.map((e, t) =>
                                            (0, a.jsxs)(
                                              "div",
                                              {
                                                children: [
                                                  (0, a.jsx)("span", {
                                                    children: e.tokenNum,
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: "ml-2",
                                                    children: e.symbol,
                                                  }),
                                                ],
                                              },
                                              "wd" + t
                                            )
                                          ),
                                  });
                                },
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(h.y, {
                        className:
                          "col-span-2 lg:col-span-1 w-full lg:w-[unset] mt-4 lg:mt-0",
                        children: (0, a.jsxs)("div", {
                          className:
                            "flex justify-between lg:justify-end lg:text-right mt-4 lg:mt-0 w-full lg:w-[unset]",
                          children: [
                            (0, a.jsx)("button", {
                              disabled:
                                (!eP || !Number(eP)) &&
                                (0, x.y_)(eU.tokenRecord),
                              onClick: () => {
                                F(!0), claimHandler();
                              },
                              className:
                                "w-1/2 lg:w-[unset] offButton mr-2 h-[36px]",
                              children: "Claim Rewards",
                            }),
                            (0, a.jsx)("button", {
                              onClick: () => _(!0),
                              className:
                                "w-1/2 lg:w-[unset] offButton h-[36px]",
                              children: "Manage",
                            }),
                          ],
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)("p", {
                    className: "loxoTitle mt-[40px]",
                    children: "Claim LoxoNFT Minter Royalties",
                  }),
                  (0, a.jsxs)("div", {
                    className: "loxoCard",
                    children: [
                      (0, a.jsx)("div", {
                        className: "text-left w-full lg:w-[32%]",
                        children: (0, a.jsx)("span", {
                          className: "".concat(i().echo_nft_content),
                          children:
                            "The royalty charged from secondary sales is 3%, 2% goes to a pool to which the original minters have a claim to — forever, while 1% goes to LoxoNFT staking pool",
                        }),
                      }),
                      (0, a.jsxs)("div", {
                        className:
                          "flex flex-col lg:text-right w-full lg:w-[unset] my-4 lg:my-0",
                        children: [
                          (0, a.jsx)("span", {
                            className: "text-[14px] text-[#7e7e7e]",
                            children: "Claimable Fees",
                          }),
                          (0, a.jsxs)("div", {
                            className:
                              "flex flex-row justify-start lg:justify-end items-center gap-2",
                            children: [
                              (0, a.jsxs)("span", {
                                className:
                                  "mt-[8px] text-[16px] leading-[20px] text-white",
                                children: [
                                  "$ ",
                                  ef && 0 !== Number(ef) && !Number(eZ)
                                    ? "<0.01"
                                    : (0, x.pw)(eZ, 2, !0),
                                  " ",
                                ],
                              }),
                              (0, a.jsx)(v.Z, {
                                className: "mt-[8px]",
                                handle: (0, a.jsx)(y.NK, {}),
                                renderContent: () =>
                                  (0, a.jsx)(a.Fragment, {
                                    children: (0, a.jsxs)("div", {
                                      className: "text-center",
                                      children: [
                                        (0, x.Xh)(ef, 4, !0),
                                        " WIOTX",
                                      ],
                                    }),
                                  }),
                              }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)(h.y, {
                        className: "col-span-2 lg:col-span-1",
                        children: (0, a.jsx)("div", {
                          className:
                            "flex flex-col lg:text-right col-span-2 lg:col-span-1",
                          children: eS
                            ? ex
                              ? (0, a.jsx)("button", {
                                  disabled: !eZ || !Number(eZ),
                                  onClick: () => {
                                    eL(!0), ClaimRoyaltiesHandler();
                                  },
                                  className: "offButton",
                                  children: "Claim Fees",
                                })
                              : (0, a.jsx)("button", {
                                  disabled: !0,
                                  className: "offButton",
                                  children: "Not Original Minter",
                                })
                            : null,
                        }),
                      }),
                    ],
                  }),
                  (0, a.jsx)(r.Z, {
                    id: "split",
                    className: "w-full",
                    open: C,
                    children: (0, a.jsx)(p.Z, {
                      title: "Claim",
                      updateModal: () => {
                        F(!1);
                      },
                      children: (0, a.jsx)("div", {
                        className: "flex p-3 flex-wrap w-full",
                        children: (0, a.jsxs)(a.Fragment, {
                          children: [
                            (0, a.jsx)("div", {
                              className: "w-full flex flex-wrap  ",
                              children: (0, a.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Claim ve33 reward ",
                                  }),
                                  ej
                                    ? (0, a.jsx)(y.yM, {})
                                    : eA
                                    ? (0, a.jsx)(y.Uc, {})
                                    : (0, a.jsx)(y.NO, {}),
                                ],
                              }),
                            }),
                            (0, a.jsx)("div", {
                              className: "w-full flex flex-wrap  ",
                              children: (0, a.jsxs)("div", {
                                className: "popupItem",
                                children: [
                                  (0, a.jsx)("span", {
                                    children: "Claim perp rewards ",
                                  }),
                                  eR
                                    ? (0, a.jsx)(y.yM, {})
                                    : eA
                                    ? (0, a.jsx)(y.Uc, {})
                                    : (0, a.jsx)(y.NO, {}),
                                ],
                              }),
                            }),
                          ],
                        }),
                      }),
                    }),
                  }),
                  (0, a.jsx)(r.Z, {
                    id: "echo_nft_mng",
                    open: S,
                    setOpen: () => {
                      eI || _(!1);
                    },
                    children: (0, a.jsx)(extras_ManageLoxoNFT, {
                      myStake: (null == R ? void 0 : R.length) || 0,
                      NFTBal: (null == eo ? void 0 : eo.toString()) || "0",
                      staked: P,
                      unStaked: R,
                      fetchData: J,
                      stake: X,
                      unstake: W,
                      isApproveForAll: z,
                      approval: $,
                      updateModal: _,
                      updateOpen: (e) => {
                        eO(e);
                      },
                    }),
                  }),
                  (0, a.jsx)(r.Z, {
                    id: "split",
                    className: "w-full",
                    open: eM,
                    children: (0, a.jsx)(p.Z, {
                      title: "Claim",
                      updateModal: () => {
                        eL(!1);
                      },
                      children: (0, a.jsx)("div", {
                        className: "flex p-3 flex-wrap w-full",
                        children: (0, a.jsx)(a.Fragment, {
                          children: (0, a.jsx)("div", {
                            className: "w-full flex flex-wrap  ",
                            children: (0, a.jsxs)("div", {
                              className: "popupItem",
                              children: [
                                (0, a.jsx)("span", {
                                  children: "Claim Royalties ",
                                }),
                                eN
                                  ? (0, a.jsx)(y.yM, {})
                                  : eA
                                  ? (0, a.jsx)(y.Uc, {})
                                  : (0, a.jsx)(y.NO, {}),
                              ],
                            }),
                          }),
                        }),
                      }),
                    }),
                  }),
                ],
              }),
            ],
          });
        };
    },
    28936: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"M":[{"inputs":[{"internalType":"address","name":"_contractOwner","type":"address"},{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"components":[{"internalType":"address","name":"initContract","type":"address"},{"internalType":"bytes","name":"initData","type":"bytes"}],"internalType":"struct Diamond.Initialization[]","name":"_initializations","type":"tuple[]"}],"stateMutability":"payable","type":"constructor"},{"stateMutability":"payable","type":"fallback"},{"stateMutability":"payable","type":"receive"},{"inputs":[],"name":"EnforcedPause","type":"error"},{"inputs":[],"name":"ExpectedPause","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousAdmin","type":"address"},{"indexed":true,"internalType":"address","name":"newAdmin","type":"address"}],"name":"AdminTransferred","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"operator","type":"address"},{"indexed":false,"internalType":"enum LibController.OperatorManage","name":"action","type":"uint8"}],"name":"OperatorsUpdated","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Paused","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"account","type":"address"}],"name":"Unpaused","type":"event"},{"inputs":[],"name":"activateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newOperator","type":"address"}],"name":"addOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"admin","outputs":[{"internalType":"address","name":"admin_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"deactivateEmergencyMode","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"isEmergencyModeActive","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"pause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"paused","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"toRemove","type":"address"}],"name":"removeOperator","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_newAdmin","type":"address"}],"name":"setAdmin","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"unpause","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"target","type":"address"}],"name":"AddressEmptyCode","type":"error"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"AddressInsufficientBalance","type":"error"},{"inputs":[],"name":"FailedInnerCall","type":"error"},{"inputs":[],"name":"ReentrancyGuardReentrantCall","type":"error"},{"inputs":[{"internalType":"address","name":"token","type":"address"}],"name":"SafeERC20FailedOperation","type":"error"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"veAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftAmount","type":"uint256"}],"name":"Deposit","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"token","type":"address"},{"indexed":false,"internalType":"uint256","name":"veAmount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"nftAmount","type":"uint256"}],"name":"Withdraw","type":"event"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"uint256","name":"_tokenId","type":"uint256"}],"name":"claimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"},{"internalType":"uint256[]","name":"_amounts","type":"uint256[]"}],"name":"deposit","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"epoch","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_ve","type":"address"},{"internalType":"address","name":"_nft","type":"address"},{"internalType":"address","name":"_masterChef","type":"address"}],"name":"initializeLoxodromeFee","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"_token","type":"address"}],"name":"isERC20","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"masterChef","outputs":[{"internalType":"contract IMasterChef","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nft","outputs":[{"internalType":"contract ILoxoHolders","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"nftClaim","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"nftClaimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"nftRewards","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"bool","name":"closed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"user","type":"address"}],"name":"nftUserClaimable","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"},{"internalType":"uint256","name":"epoch_","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"rewardList","outputs":[{"components":[{"internalType":"address","name":"token","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"internalType":"struct LoxodromeFeeFacet.UserReward[]","name":"userReward_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"","type":"address"}],"name":"rewardTokenWhitelist","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"veLoxo","outputs":[{"internalType":"contract IVotingEscrow","name":"","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"uint256","name":"","type":"uint256"},{"internalType":"uint256","name":"","type":"uint256"}],"name":"veRewards","outputs":[{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"uint256","name":"ts","type":"uint256"},{"internalType":"uint256","name":"blockNumber","type":"uint256"},{"internalType":"bool","name":"closed","type":"bool"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address[]","name":"_tokens","type":"address[]"}],"name":"whitelistRewardTokens","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"indexed":false,"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"indexed":false,"internalType":"address","name":"_init","type":"address"},{"indexed":false,"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"DiamondCut","type":"event"},{"inputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"enum IDiamondCut.FacetCutAction","name":"action","type":"uint8"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondCut.FacetCut[]","name":"_diamondCut","type":"tuple[]"},{"internalType":"address","name":"_init","type":"address"},{"internalType":"bytes","name":"_calldata","type":"bytes"}],"name":"diamondCut","outputs":[],"stateMutability":"nonpayable","type":"function"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"previousOwner","type":"address"},{"indexed":true,"internalType":"address","name":"newOwner","type":"address"}],"name":"OwnershipTransferred","type":"event"},{"inputs":[],"name":"owner","outputs":[{"internalType":"address","name":"owner_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_functionSelector","type":"bytes4"}],"name":"facetAddress","outputs":[{"internalType":"address","name":"facetAddress_","type":"address"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facetAddresses","outputs":[{"internalType":"address[]","name":"facetAddresses_","type":"address[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"_facet","type":"address"}],"name":"facetFunctionSelectors","outputs":[{"internalType":"bytes4[]","name":"facetFunctionSelectors_","type":"bytes4[]"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"facets","outputs":[{"components":[{"internalType":"address","name":"facetAddress","type":"address"},{"internalType":"bytes4[]","name":"functionSelectors","type":"bytes4[]"}],"internalType":"struct IDiamondLoupe.Facet[]","name":"facets_","type":"tuple[]"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"bytes4","name":"_interfaceId","type":"bytes4"}],"name":"supportsInterface","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"view","type":"function"}]}'
      );
    },
  },
  function (e) {
    e.O(0, [736, 216, 187, 451, 744], function () {
      return e((e.s = 8959));
    }),
      (_N_E = e.O());
  },
]);
