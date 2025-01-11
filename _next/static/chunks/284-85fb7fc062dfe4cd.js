(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [284],
  {
    49600: function (e, n, t) {
      "use strict";
      t.d(n, {
        Z: function () {
          return b;
        },
      });
      var a = t(57437),
        s = t(2265),
        o = t(15378),
        i = t.n(o),
        r = t(16691),
        l = t.n(r),
        d = t(37416),
        c = t(54968),
        p = t(79037),
        m = t(56129),
        u = t(83516),
        b = (0, s.memo)((e) => {
          let {
              filter_button: n = !1,
              balances: t,
              isLoading: o,
              handleToken: r,
              prices: b,
              updateModal: y,
              otherAddress: x,
            } = e,
            [f, h] = (0, s.useState)(""),
            [v, _] = (0, s.useState)([]),
            [j, k] = (0, s.useState)(1),
            { chain: T } = (0, p.m)();
          (0, s.useEffect)(() => {
            let e = u.w[(null == T ? void 0 : T.id) === 4689 ? T.id : 4689],
              n =
                null == t
                  ? void 0
                  : t.filter((e) =>
                      "" === f
                        ? e
                        : e.address.toLowerCase().includes(f.toLowerCase()) ||
                          e.symbol.toLowerCase().includes(f.toLowerCase()) ||
                          e.symbol.toUpperCase().includes(f.toUpperCase())
                        ? e
                        : void 0
                    );
            2 === j && (n = n.filter((n) => e.includes(n.address))), _(n);
          }, [t, j, f]);
          let g = (0, s.useMemo)(() => {
              let e = m.x[(null == T ? void 0 : T.id) === 4689 ? T.id : 4689];
              return [e.IOTX, e.WRAPPED_IOTX];
            }, [T]),
            getDis = (e) => {
              var n, t, a, s;
              let o =
                  x &&
                  x.toLowerCase() ===
                    (null === (n = g[0]) || void 0 === n
                      ? void 0
                      : n.toLowerCase()),
                i =
                  x &&
                  x.toLowerCase() ===
                    (null === (t = g[1]) || void 0 === t
                      ? void 0
                      : t.toLowerCase());
              return (
                (!!o &&
                  e.address.toLowerCase() ===
                    (null === (a = g[1]) || void 0 === a
                      ? void 0
                      : a.toLowerCase())) ||
                (!!i &&
                  e.address.toLowerCase() ===
                    (null === (s = g[0]) || void 0 === s
                      ? void 0
                      : s.toLowerCase()))
              );
            },
            filterDP = (e) => {
              k(e);
            };
          return (0, a.jsxs)("div", {
            className: "modalInner",
            children: [
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center justify-between pb-7",
                children: [
                  (0, a.jsx)("span", {
                    className: i().select,
                    children: "Select a Token",
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => y(!1),
                    className:
                      "btn btn-neutral  hover:border-none p-0 border-none min-h-0 h-5",
                    children: (0, a.jsx)(d._y, {}),
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "tokenInput",
                children: [
                  (0, a.jsx)("span", {
                    className: "inset-y-0 left-0 flex items-center pl-2",
                    children: (0, a.jsx)("button", {
                      type: "submit",
                      className: "p-1 focus:outline-none focus:shadow-outline",
                      children: (0, a.jsx)(d.W1, {}),
                    }),
                  }),
                  (0, a.jsx)("input", {
                    onChange: (e) => h(e.target.value),
                    type: "text",
                    name: "q",
                    placeholder: "Search by name,symbol or address",
                    className: "inputCss w-full",
                  }),
                ],
              }),
              (0, a.jsxs)("div", {
                className: "".concat(i().tabs, " mt-[25px]"),
                children: [
                  (0, a.jsx)("div", {
                    onClick: () => {
                      filterDP(1);
                    },
                    className: ""
                      .concat(i().tabsItem, " ")
                      .concat(1 === j ? i().activeTabs : ""),
                    children: "All tokens",
                  }),
                  (0, a.jsx)("div", {
                    onClick: () => {
                      filterDP(2);
                    },
                    className: ""
                      .concat(i().tabsItem, " ")
                      .concat(2 === j ? i().activeTabs : ""),
                    children: "DePIN tokens",
                  }),
                ],
              }),
              !n &&
                (0, a.jsxs)("div", {
                  className:
                    "flex flex-row flex-wrap gap-3 justify-between pb-14",
                  children: [
                    (0, a.jsxs)("button", {
                      className:
                        "flex flex-row flex-nowrap btn btn-neutral basis-1/4 shadow-3xl border border-primary rounded-none px-3 bg-primary bg-opacity-10 min-h-0 h-8 ".concat(
                          i().filter_token
                        ),
                      children: [
                        (0, a.jsx)(d.kd, {}),
                        (0, a.jsx)("span", { children: " Ethereum" }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ".concat(
                          i().filter_token
                        ),
                      children: [
                        (0, a.jsx)(d.kd, {}),
                        (0, a.jsx)("span", { children: " Ethereum" }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ".concat(
                          i().filter_token
                        ),
                      children: [
                        (0, a.jsx)(d.kd, {}),
                        (0, a.jsx)("span", { children: " Ethereum" }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ".concat(
                          i().filter_token
                        ),
                      children: [
                        (0, a.jsx)(d.kd, {}),
                        (0, a.jsx)("span", { children: " Ethereum" }),
                      ],
                    }),
                    (0, a.jsxs)("button", {
                      className:
                        "flex flex-row flex-nowrap btn btn-neutral basis-1/4 border border-transparent rounded-none min-h-0 h-8 px-3 hover:bg-primary hover:bg-opacity-10 hover:border-primary ".concat(
                          i().filter_token
                        ),
                      children: [
                        (0, a.jsx)(d.kd, {}),
                        (0, a.jsx)("span", { children: " Ethereum" }),
                      ],
                    }),
                  ],
                }),
              n &&
                (0, a.jsxs)("div", {
                  className: "pb-2.5 flex flex-row justify-between px-2",
                  children: [
                    (0, a.jsx)("p", {
                      className: i().token_title,
                      children: "Token Name",
                    }),
                    (0, a.jsx)("p", {
                      className: i().balance,
                      children: "Balance",
                    }),
                  ],
                }),
              (0, a.jsx)("div", {
                className: "h-fit overflow-hidden",
                children: (0, a.jsxs)("div", {
                  className: "overflow-y-auto scrollbar w-full ".concat(
                    i().token_height
                  ),
                  children: [
                    v && v.length
                      ? null
                      : (0, a.jsx)("div", {
                          className: "opacity-50 text-center mt-8",
                          children: "No results found.",
                        }),
                    (0, a.jsx)("div", {
                      className: "flex flex-col gap-8",
                      children:
                        null == v
                          ? void 0
                          : v.map((e, n) =>
                              "LOXO" === e.symbol || getDis(e)
                                ? null
                                : (0, a.jsx)(
                                    "button",
                                    {
                                      disabled: getDis(e),
                                      onClick: () => {
                                        r(e), y(!1);
                                      },
                                      children: (0, a.jsxs)("div", {
                                        className:
                                          "flex flex-row justify-between items-center gap-0 px-2",
                                        children: [
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-row items-center",
                                            children: [
                                              (0, a.jsx)("div", {
                                                className:
                                                  "avatar-group -space-x-6",
                                                children: (0, a.jsx)("div", {
                                                  className:
                                                    "avatar border-none ".concat(
                                                      i().avatarIcon
                                                    ),
                                                  children: (0, a.jsx)("div", {
                                                    className: "w-12",
                                                    children: (0, a.jsx)(l(), {
                                                      loading: "lazy",
                                                      "data-src": e.logoURI,
                                                      className: "lazyload",
                                                      src: e.logoURI,
                                                      alt: e.name,
                                                      width: 36,
                                                      height: 36,
                                                    }),
                                                  }),
                                                }),
                                              }),
                                              (0, a.jsxs)("div", {
                                                className:
                                                  "flex flex-col text-left pl-2",
                                                children: [
                                                  (0, a.jsx)("div", {
                                                    children: (0, a.jsxs)(
                                                      "span",
                                                      {
                                                        className:
                                                          i().token_name,
                                                        children: [
                                                          " ",
                                                          e.symbol,
                                                          " ",
                                                        ],
                                                      }
                                                    ),
                                                  }),
                                                  (0, a.jsx)("span", {
                                                    className: i().details,
                                                    children:
                                                      e.name || e.symbol,
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                          (0, a.jsxs)("div", {
                                            className:
                                              "flex flex-col justify-end text-right",
                                            children: [
                                              (0, a.jsxs)("span", {
                                                className: i().balanceItem,
                                                children: [
                                                  " ",
                                                  (0, c.Xh)(
                                                    e.balance || "0",
                                                    4,
                                                    !0
                                                  ),
                                                  " ",
                                                ],
                                              }),
                                              (0, a.jsxs)("span", {
                                                className: i().balanceItem,
                                                children: [
                                                  " $",
                                                  (0, c.Xh)(
                                                    (0, c.aS)(b, e.address),
                                                    4,
                                                    !0
                                                  ),
                                                  " ",
                                                ],
                                              }),
                                            ],
                                          }),
                                        ],
                                      }),
                                    },
                                    n
                                  )
                            ),
                    }),
                  ],
                }),
              }),
            ],
          });
        });
    },
    23751: function (e, n, t) {
      "use strict";
      var a = t(57437);
      t(2265),
        (n.Z = (e) => {
          let { id: n, children: t, className: s, open: o, setOpen: i } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("label", { htmlFor: n, className: s, children: t[0] }),
              (0, a.jsx)("input", {
                type: "checkbox",
                id: n,
                className: "modal-toggle",
                checked: o,
                readOnly: !0,
              }),
              (0, a.jsxs)("div", {
                className: "modal",
                children: [
                  (0, a.jsx)("div", {
                    className: "modal-box modalContainer",
                    children: t[1],
                  }),
                  (0, a.jsx)("label", {
                    className: "modal-backdrop",
                    htmlFor: n,
                    onClick: () => i && i(!1),
                    children: "Close",
                  }),
                ],
              }),
            ],
          });
        });
    },
    83516: function (e, n, t) {
      "use strict";
      t.d(n, {
        w: function () {
          return s;
        },
      });
      var a = t(61317);
      let s = {
        [a.g.IoTex]: [
          "0x61db9b084326d2251ccb0252c18fd9b0e887ca4f",
          "0x8e33229206f726993e4a7bf7da2347f3743bf8b4",
          "0x52df59be0be8abdabba9e3862c8c0f1f8b3fe9ca",
          "0xcee948f1abbd247a5e41a88b28990db81ef00bdc",
          "0xd8f7a6eebbe36dde46162f60f6142324114d79ec",
          "0x527bf035fca26597c966546748d32848adf5216e",
          "0xdee99274e5d8a2dd85ff02fe9e11a9d7a636de6e",
          "0x1ae24d4928a86faaacd71cf414d2b3a499adb29b",
          "0xa7108637552cec7e8c2dd08a9cd995caff8b4280",
        ],
        [a.g.IoTexTestnet]: ["0xBd1D31A314Dd0e89FB583D1fBb903583607A3775"],
      };
    },
    38425: function (e, n, t) {
      "use strict";
      t.d(n, {
        M: function () {
          return a;
        },
      });
      let a = {
        4689: {
          tokenA: {
            id: "iotex",
            logoURI: "/static/img/icon/tokens/IOTEX.svg",
            decimals: 18,
            balance: "0",
            address: "0x4200000000000000000000000000000000000006",
            symbol: "IOTX",
            name: "IOTX",
            price: 0,
          },
          tokenB: {
            id: "arbitrum-bridged-usdt-arbitrum",
            logoURI: "/static/img/icon/tokens/USDT.svg",
            decimals: 6,
            balance: "0",
            address: "0x6fbcdc1169b5130c59e72e51ed68a84841c98cd1",
            symbol: "ioUSDT",
            name: "Tether USDT",
            price: 0,
          },
        },
        4690: {
          tokenA: {
            id: "iotex",
            logoURI: "/static/img/icon/tokens/IOTEX.svg",
            decimals: 18,
            balance: "0",
            address: "0x4200000000000000000000000000000000000006",
            symbol: "IOTX",
            name: "IOTX",
            price: 0,
          },
          tokenB: {
            id: "",
            logoURI: "/static/img/icon/tokens/LOXO.svg",
            decimals: 18,
            balance: "0",
            address: "0xA9ADaCbCea0C101561f317D4226dc628253fEBFe",
            symbol: "LOXO",
            name: "Loxodrome",
            price: 0,
          },
        },
      };
    },
    15378: function (e) {
      e.exports = {
        token: "tokencomponent_token__C9XBj",
        select: "tokencomponent_select__nxifS",
        token_title: "tokencomponent_token_title__U0oxf",
        balance: "tokencomponent_balance__RQ3K6",
        avatarIcon: "tokencomponent_avatarIcon__TIsX3",
        details: "tokencomponent_details__u_6U4",
        token_name: "tokencomponent_token_name__txuDg",
        priceItem: "tokencomponent_priceItem__lhi_o",
        balanceItem: "tokencomponent_balanceItem__TuOJd",
        filter_token: "tokencomponent_filter_token__hj5AF",
        token_height: "tokencomponent_token_height__p5rzC",
        tabs: "tokencomponent_tabs__wb69B",
        tabsItem: "tokencomponent_tabsItem__L97Bg",
        activeTabs: "tokencomponent_activeTabs__E_IsG",
      };
    },
    51763: function (e) {
      "use strict";
      e.exports = JSON.parse(
        '{"Mt":[{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"string","name":"_symbol","type":"string"}],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"owner","type":"address"},{"indexed":true,"internalType":"address","name":"spender","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Approval","type":"event"},{"anonymous":false,"inputs":[{"indexed":true,"internalType":"address","name":"from","type":"address"},{"indexed":true,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"value","type":"uint256"}],"name":"Transfer","type":"event"},{"inputs":[{"internalType":"address","name":"owner","type":"address"},{"internalType":"address","name":"spender","type":"address"}],"name":"allowance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"approve","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"account","type":"address"}],"name":"balanceOf","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"decimals","outputs":[{"internalType":"uint8","name":"","type":"uint8"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"subtractedValue","type":"uint256"}],"name":"decreaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"spender","type":"address"},{"internalType":"uint256","name":"addedValue","type":"uint256"}],"name":"increaseAllowance","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"mintFixed","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"symbol","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"totalSupply","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transfer","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"from","type":"address"},{"internalType":"address","name":"to","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"transferFrom","outputs":[{"internalType":"bool","name":"","type":"bool"}],"stateMutability":"nonpayable","type":"function"}]}'
      );
    },
  },
]);
