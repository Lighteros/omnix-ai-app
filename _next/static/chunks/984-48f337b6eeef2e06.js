(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [984],
  {
    26573: function (e, s, t) {
      "use strict";
      var l = t(57437),
        a = t(2265),
        n = t(80371),
        i = t.n(n),
        c = t(62776),
        r = t(17423),
        o = t(37416);
      s.Z = (e) => {
        let {
            noTitle: s = !1,
            twoHalf: t = !1,
            asymmetrical: n = !1,
            titleImg: d,
            footer: x,
            isOpen: m = !1,
            onCollapse: h,
            columns: u,
            token0Symbol: f,
            token1Symbol: p,
            name: j,
            detail: v,
          } = e,
          N = h ? u.slice(0, 2) : u,
          g = h ? u.slice(2) : [];
        return (0, l.jsxs)("div", {
          className: "bg-transparent rounded-none xs:mt-3 mb-8 gap-4 relative",
          children: [
            (0, l.jsx)("div", {
              className: "p-0 text-xl font-medium",
              children: (0, l.jsxs)("div", {
                className: "flex flex-col gap-5",
                children: [
                  (0, l.jsxs)("div", {
                    className: "flex flex-row justify-between items-center",
                    onClick: h,
                    children: [
                      !s &&
                        (0, l.jsx)(c.Z, {
                          titleImg: d,
                          token0Symbol: f || "",
                          token1Symbol: p || "",
                          name: j || "",
                          detail: v || "",
                        }),
                      h &&
                        (0, l.jsx)("div", {
                          children: m
                            ? (0, l.jsx)(o.If, {})
                            : (0, l.jsx)(o.OC, {}),
                        }),
                    ],
                  }),
                  (0, l.jsxs)("div", {
                    className: "flex flex-row flex-wrap",
                    children: [
                      N.map((e, s) =>
                        (0, l.jsxs)(
                          "div",
                          {
                            style: e.width ? { width: e.width } : {},
                            className: "".concat(
                              n ? "w-1/2" : 1 === s ? "w-2/3" : "w-1/3",
                              " flex flex-col flex-wrap items-start py-3"
                            ),
                            children: [
                              (0, l.jsxs)("div", {
                                className: "flex flex-row items-center",
                                children: [
                                  (0, l.jsx)("span", {
                                    className:
                                      "leading-[16px] xs:leading-[1.75rem] w-full text-[12px] xs:text-xs text-stone-500",
                                    children: e.title,
                                  }),
                                  e.titleHover &&
                                    (0, l.jsx)(r.Z, {
                                      position: "bottom",
                                      className: "ml-2 z-100",
                                      handle: (0, l.jsx)(o.EG, {}),
                                      renderContent: () =>
                                        (0, l.jsx)("div", {
                                          className:
                                            "text-[12px] font-normal text-white leading-6",
                                          children: e.titleHover,
                                        }),
                                    }),
                                ],
                              }),
                              (0, l.jsxs)("div", {
                                className: "".concat(
                                  i().value,
                                  " flex flex-row items-center flex-wrap py-1 w-full"
                                ),
                                children: [
                                  e.preSymbol &&
                                    (0, l.jsx)("span", {
                                      className: "mr-1",
                                      children: e.preSymbol,
                                    }),
                                  e.render
                                    ? e.render(e, s)
                                    : (0, l.jsx)("span", { children: e.value }),
                                  e.unit &&
                                    (0, l.jsx)("span", {
                                      className: "ml-1",
                                      children: e.unit,
                                    }),
                                  e.tooltip &&
                                    (0, l.jsx)(r.Z, {
                                      className: "ml-2",
                                      handle: (0, l.jsx)(o.NK, {}),
                                      renderContent: () => {
                                        let t = e.tooltip
                                          ? e.tooltip(e, s)
                                          : null;
                                        return "string" == typeof t ||
                                          a.isValidElement(t)
                                          ? t
                                          : null;
                                      },
                                    }),
                                ],
                              }),
                              e.desc
                                ? (0, l.jsxs)("div", {
                                    className: "text-xs opacity-50",
                                    children: [
                                      (0, l.jsx)("span", { children: e.desc }),
                                      e.subUnit &&
                                        (0, l.jsx)("span", {
                                          className: "ml-1",
                                          children: e.subUnit,
                                        }),
                                    ],
                                  })
                                : null,
                            ],
                          },
                          e.key || s
                        )
                      ),
                      x && !h
                        ? (0, l.jsx)("div", {
                            className:
                              "flex w-full flex-wrap justify-between md:gap-10 pt-3",
                            children: x,
                          })
                        : null,
                    ],
                  }),
                ],
              }),
            }),
            m &&
              (0, l.jsxs)("div", {
                className: "w-full p-0 flex flex-wrap",
                children: [
                  (0, l.jsx)("div", {
                    className: "flex flex-row w-full",
                    children: g.map((e, s) =>
                      (0, l.jsxs)(
                        "div",
                        {
                          className:
                            "flex flex-wrap items-start justify-between py-2 ".concat(
                              t ? "w-1/2" : n ? "w-1/3" : ""
                            ),
                          children: [
                            (0, l.jsx)("span", {
                              className:
                                "leading-[16px] xs:leading-[1.75rem] w-full text-[12px] xs:text-xs text-stone-500",
                              children: e.title,
                            }),
                            e.titleHover &&
                              (0, l.jsx)(r.Z, {
                                position: "bottom",
                                className: "ml-2 z-100",
                                handle: (0, l.jsx)(o.EG, {}),
                                renderContent: () =>
                                  (0, l.jsx)("div", {
                                    className:
                                      "text-[12px] font-normal text-white leading-6",
                                    children: e.titleHover,
                                  }),
                              }),
                            (0, l.jsxs)("div", {
                              className: "".concat(
                                i().value,
                                " flex flex-row items-center flex-wrap text-xs"
                              ),
                              children: [
                                e.preSymbol &&
                                  (0, l.jsx)("span", {
                                    className: "mr-1",
                                    children: e.preSymbol,
                                  }),
                                e.render
                                  ? e.render(e, s)
                                  : (0, l.jsx)("span", { children: e.value }),
                                e.unit &&
                                  (0, l.jsx)("span", {
                                    className: "ml-1",
                                    children: e.unit,
                                  }),
                                e.tooltip &&
                                  (0, l.jsx)(r.Z, {
                                    className: "ml-2",
                                    handle: (0, l.jsx)(o.NK, {}),
                                    renderContent: () => {
                                      let t = e.tooltip
                                        ? e.tooltip(e, s)
                                        : null;
                                      return "string" == typeof t ||
                                        a.isValidElement(t)
                                        ? t
                                        : null;
                                    },
                                  }),
                              ],
                            }),
                            e.desc
                              ? (0, l.jsxs)("div", {
                                  className: "text-xs opacity-50",
                                  children: [
                                    (0, l.jsx)("span", { children: e.desc }),
                                    e.subUnit &&
                                      (0, l.jsx)("span", {
                                        className: "ml-1",
                                        children: e.subUnit,
                                      }),
                                  ],
                                })
                              : null,
                          ],
                        },
                        e.key || s
                      )
                    ),
                  }),
                  x &&
                    (0, l.jsx)("div", {
                      className:
                        "flex w-full flex-wrap justify-between md:gap-10 pt-3",
                      children: x,
                    }),
                ],
              }),
          ],
        });
      };
    },
    30724: function (e, s, t) {
      "use strict";
      var l = t(57437),
        a = t(2265),
        n = t(67815),
        i = t.n(n),
        c = t(17423),
        r = t(37416);
      let o = (0, a.forwardRef)((e, s) => {
        let {
            columns: t,
            columnsNum: n = 5,
            dataSource: o,
            loading: d,
            myVotes: x,
            type: m = "table",
            border: h,
            footer: u,
            hairstyle: f = "normal",
          } = e,
          [p, j] = (0, a.useState)(!1),
          [v, N] = (0, a.useState)(!1),
          [g, b] = (0, a.useState)(null),
          [w, y] = (0, a.useState)(null);
        (0, a.useImperativeHandle)(s, () => ({ initSort })),
          (0, a.useEffect)(() => {
            setTimeout(() => {
              N(!0);
            }, 5e3);
          }, []);
        let initSort = () => {
          y(null);
        };
        return d
          ? (0, l.jsx)("div", {
              className: "w-full text-center mt-12",
              children: (0, l.jsx)("span", {
                className: "loading loading-bars loading-lg",
              }),
            })
          : (0, l.jsxs)("div", {
              className: "".concat(
                h &&
                  "rounded border-[#7E7E7E] border-solid border border-opacity-50",
                " customTableContainer"
              ),
              children: [
                (0, l.jsx)("div", {
                  className: "flex flex-col",
                  children: (0, l.jsxs)("div", {
                    className: "inline-block min-w-full",
                    children: [
                      (0, l.jsx)("div", {
                        className: "",
                        children: (0, l.jsxs)("table", {
                          className: "min-w-full text-left text-sm font-light",
                          children: [
                            (0, l.jsx)("thead", {
                              className: "tableThead",
                              children: (0, l.jsx)("tr", {
                                children: t.map((e, s) =>
                                  (0, l.jsx)(
                                    "th",
                                    {
                                      scope: "col",
                                      onClick: () => {
                                        if (e.sort) {
                                          if (g === e.dataIndex) {
                                            let s = w
                                              ? "desc" === w
                                                ? null
                                                : "desc"
                                              : "asc";
                                            y(s),
                                              null === s && b(null),
                                              e.sortManage && e.sortManage(s);
                                          } else
                                            b(e.dataIndex),
                                              y("asc"),
                                              e.sortManage &&
                                                e.sortManage("asc");
                                        }
                                      },
                                      className: "px-6 tableHeader ".concat(
                                        e.sort ? "cursor-pointer" : ""
                                      ),
                                      style: {
                                        textAlign: e.align || "left",
                                        width: e.width || "auto",
                                      },
                                      children: (0, l.jsxs)("div", {
                                        className:
                                          "flex flex-row items-center ".concat(
                                            "center" === e.align
                                              ? "justify-center"
                                              : "right" === e.align
                                              ? "justify-end"
                                              : "justify-start"
                                          ),
                                        children: [
                                          (0, l.jsx)("span", {
                                            className: i().table_header_span,
                                            children: e.title,
                                          }),
                                          e.sort &&
                                            g === e.dataIndex &&
                                            (0, l.jsx)("div", {
                                              className: "ml-1 ".concat(
                                                g !== e.dataIndex || w
                                                  ? "desc" === w
                                                    ? "rotate-180"
                                                    : ""
                                                  : "hidden"
                                              ),
                                              children: (0, l.jsx)(r.KL, {
                                                color: "#7E7E7E",
                                              }),
                                            }),
                                          e.titleHover &&
                                            (0, l.jsx)(c.Z, {
                                              position:
                                                s == t.length - 1 || e.posRight
                                                  ? "right-bottom"
                                                  : "bottom",
                                              className: "ml-2 z-100",
                                              handle: (0, l.jsx)(r.EG, {}),
                                              renderContent: () =>
                                                (0, l.jsx)("div", {
                                                  className:
                                                    "text-[12px] font-normal text-white leading-6",
                                                  children: e.titleHover,
                                                }),
                                            }),
                                        ],
                                      }),
                                    },
                                    s
                                  )
                                ),
                              }),
                            }),
                            !v || (o && o.length)
                              ? (0, l.jsx)("tbody", {
                                  children: ("collapsed" !== m || p
                                    ? o
                                    : o.slice(0, n)
                                  ).map((e, s) =>
                                    (0, l.jsx)(
                                      "tr",
                                      {
                                        className:
                                          "transition duration-300 ease-in-out hover:bg-secondary hover:bg-opacity-10 hover:border-primary",
                                        children: t.map((t) => {
                                          var n;
                                          let o =
                                            null !== (n = e[t.dataIndex]) &&
                                            void 0 !== n
                                              ? n
                                              : t.dataIndex;
                                          return (0, l.jsx)(
                                            "td",
                                            {
                                              className: "".concat(
                                                t.className && t.className,
                                                " tableTd"
                                              ),
                                              style: {
                                                textAlign: t.align || "left",
                                              },
                                              children: (0, l.jsxs)("div", {
                                                className: "flex flex-col",
                                                children: [
                                                  (0, l.jsxs)("div", {
                                                    className:
                                                      "flex flex-row ".concat(
                                                        "center" === t.align
                                                          ? "justify-center"
                                                          : "right" === t.align
                                                          ? "justify-end"
                                                          : "justify-start"
                                                      ),
                                                    children: [
                                                      t.preSymbol &&
                                                        (0, l.jsx)("span", {
                                                          className: "mr-1",
                                                          children: t.preSymbol,
                                                        }),
                                                      t.render
                                                        ? (0, l.jsx)("div", {
                                                            className:
                                                              "".concat(
                                                                "white" === f &&
                                                                  "text-[#eee]"
                                                              ),
                                                            children: t.render(
                                                              e,
                                                              o,
                                                              s
                                                            ),
                                                          })
                                                        : (0, l.jsx)("span", {
                                                            className:
                                                              "".concat(
                                                                "normal" === f
                                                                  ? "list" === m
                                                                    ? "!text-stone-500 text-sm"
                                                                    : ""
                                                                  : "!text-sm !text-[#fff]"
                                                              ),
                                                            children: o,
                                                          }),
                                                      t.unit &&
                                                        (0, l.jsx)("span", {
                                                          className: "ml-1",
                                                          children: t.unit,
                                                        }),
                                                      t.tooltip &&
                                                        (0, l.jsx)(c.Z, {
                                                          className: "ml-2",
                                                          handle: (0, l.jsx)(
                                                            r.NK,
                                                            {}
                                                          ),
                                                          renderContent: () => {
                                                            let l = t.tooltip
                                                              ? t.tooltip(
                                                                  e,
                                                                  o,
                                                                  s
                                                                )
                                                              : null;
                                                            return "string" ==
                                                              typeof l ||
                                                              a.isValidElement(
                                                                l
                                                              )
                                                              ? l
                                                              : null;
                                                          },
                                                        }),
                                                    ],
                                                  }),
                                                  t.subTitle || t.subRender
                                                    ? (0, l.jsxs)("div", {
                                                        className: "".concat(
                                                          "list" === m
                                                            ? i().list_value
                                                            : "text-xs opacity-50"
                                                        ),
                                                        children: [
                                                          t.subRender
                                                            ? t.subRender(
                                                                e,
                                                                o,
                                                                s
                                                              )
                                                            : (0, l.jsx)(
                                                                "span",
                                                                {
                                                                  children:
                                                                    "string" ==
                                                                      typeof t.subTitle &&
                                                                    t.subTitle in
                                                                      e
                                                                      ? e[
                                                                          t
                                                                            .subTitle
                                                                        ]
                                                                      : t.subTitle,
                                                                }
                                                              ),
                                                          t.subUnit &&
                                                            (0, l.jsx)("span", {
                                                              className: "ml-1",
                                                              children:
                                                                t.subUnit,
                                                            }),
                                                        ],
                                                      })
                                                    : null,
                                                ],
                                              }),
                                            },
                                            t.key
                                          );
                                        }),
                                      },
                                      e.key || s
                                    )
                                  ),
                                })
                              : (0, l.jsx)("tbody", {
                                  children: (0, l.jsx)("tr", {
                                    children: (0, l.jsx)("td", {
                                      colSpan: t.length,
                                      className: "text-center",
                                      children: (0, l.jsx)("div", {
                                        className:
                                          "w-full text-[#999] text-[14px] my-6",
                                        children: "No Data",
                                      }),
                                    }),
                                  }),
                                }),
                          ],
                        }),
                      }),
                      u &&
                        (0, l.jsx)("div", {
                          className: "w-full px-6",
                          children: u,
                        }),
                    ],
                  }),
                }),
                "collapsed" === m && o && o.length > 5
                  ? (0, l.jsx)("div", {
                      onClick: () => {
                        j(!p);
                      },
                      className: "".concat(
                        p && "rotate-180",
                        " transition-transform duration-300 cursor-pointer absolute -bottom-[11px] z-10 left-[49%] w-[24px] h-[24px] rounded-full bg-[#353535] flex flex-row justify-center items-center"
                      ),
                      children: (0, l.jsx)(r.un, {
                        color: "#fff",
                        width: "13",
                        height: "8",
                      }),
                    })
                  : null,
              ],
            });
      });
      s.Z = o;
    },
    62776: function (e, s, t) {
      "use strict";
      var l = t(57437),
        a = t(16691),
        n = t.n(a),
        i = t(88081),
        c = t.n(i);
      s.Z = (e) => {
        let {
          titleImg: s,
          token0Symbol: t,
          token1Symbol: a,
          name: i,
          detail: r,
        } = e;
        return (0, l.jsx)("div", {
          className: "flex flex-row justify-between items-center",
          children: (0, l.jsxs)("div", {
            className: "flex flex-row items-center gap-0",
            children: [
              (0, l.jsxs)("div", {
                className: "avatar-group -space-x-2.5 mr-2",
                children: [
                  (0, l.jsx)("div", {
                    className: "avatar border-none ".concat(c().avatarIcon),
                    children: (0, l.jsx)("div", {
                      className: "w-8",
                      children: (0, l.jsx)(n(), {
                        loading: "lazy",
                        "data-src":
                          s || "/static/img/icon/tokens/".concat(t, ".svg"),
                        className: "lazyload",
                        src: s || "/static/img/icon/tokens/".concat(t, ".svg"),
                        alt: s || t || "default",
                        width: 12,
                        height: 12,
                      }),
                    }),
                  }),
                  a &&
                    (0, l.jsx)("div", {
                      className: "avatar border-none ".concat(c().avatarIcon),
                      children: (0, l.jsx)("div", {
                        className: "w-8",
                        children: (0, l.jsx)(n(), {
                          loading: "lazy",
                          "data-src": "/static/img/icon/tokens/".concat(
                            a,
                            ".svg"
                          ),
                          className: "lazyload",
                          src: "/static/img/icon/tokens/".concat(a, ".svg"),
                          alt: a,
                          width: 12,
                          height: 12,
                        }),
                      }),
                    }),
                ],
              }),
              (0, l.jsxs)("div", {
                className: "flex flex-col",
                children: [
                  (0, l.jsx)("div", {
                    className: "mb-1",
                    children: (0, l.jsx)("span", {
                      className: c().token_name,
                      children: i.replace("IOTX", "OMNIX").replace("io","om"),
                    }),
                  }),
                  r &&
                    (0, l.jsx)("span", { className: c().details, children: r }),
                ],
              }),
            ],
          }),
        });
      };
    },
    85068: function (e, s, t) {
      "use strict";
      var l = t(83658),
        a = t(2265),
        n = t(99720);
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
      s.Z = function () {
        let [e, s] = (0, a.useState)(!0),
          [t, c] = (0, a.useState)(i);
        return (
          (0, a.useEffect)(() => {
            (async function () {
              try {
                let e = await (0, l.Q)(n.vc);
                c(e), s(!1);
              } catch (e) {
                console.error("Error fetching block:", e), s(!1);
              }
            })();
          }, []),
          { isLoading: e, block: t }
        );
      };
    },
    80371: function (e) {
      e.exports = {
        avatarIcon: "mobile_card_avatarIcon__FIkgU",
        title: "mobile_card_title__xfVPi",
        details: "mobile_card_details__80ooW",
        title_bar: "mobile_card_title_bar__6fcYf",
        value: "mobile_card_value__S02OD",
        manage: "mobile_card_manage__wu9iP",
        claim: "mobile_card_claim__PDGAD",
      };
    },
    88081: function (e) {
      e.exports = {
        avatarIcon: "tokenpair_avatarIcon__gfAGZ",
        token_name: "tokenpair_token_name__Wmr48",
        details: "tokenpair_details__davXi",
      };
    },
  },
]);
