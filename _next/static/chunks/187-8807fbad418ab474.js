(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [187],
  {
    17423: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return Tooltip;
        },
      });
      var a = n(57437),
        l = n(2265),
        o = n(27134),
        r = n.n(o),
        s = n(37927),
        i = n(54724);
      let cx = function () {
        for (var e = arguments.length, t = Array(e), n = 0; n < e; n++)
          t[n] = arguments[n];
        return t.filter(Boolean).join(" ");
      };
      function Tooltip(e) {
        var t, n;
        let [o, c] = (0, l.useState)(!1),
          d = (0, l.useRef)(),
          _ = (0, l.useRef)(),
          [h, x] = (0, l.useState)(!1);
        (0, l.useEffect)(() => {
          function handleResize() {
            x(window.innerWidth > 1023);
          }
          return (
            handleResize(),
            window.addEventListener("resize", handleResize),
            () => window.removeEventListener("resize", handleResize)
          );
        }, []);
        let m = null !== (t = e.position) && void 0 !== t ? t : "right",
          p = null !== (n = e.trigger) && void 0 !== n ? n : "hover",
          u = (0, l.useCallback)(
            (e) => {
              e.stopPropagation(),
                "hover" !== p ||
                  (d.current && (clearInterval(d.current), (d.current = null)),
                  _.current ||
                    (_.current = setTimeout(() => {
                      c(!0), (_.current = null);
                    }, 0)));
            },
            [c, d, _, p]
          ),
          b = (0, l.useCallback)(
            (e) => {
              e.stopPropagation(),
                "click" === p &&
                  (d.current && (clearInterval(d.current), (d.current = null)),
                  _.current && (clearInterval(_.current), (_.current = null)),
                  c(!0));
            },
            [c, d, p]
          ),
          v = (0, l.useCallback)(
            (e) => {
              e.stopPropagation(),
                (d.current = setTimeout(() => {
                  c(!1), (d.current = null);
                }, 100)),
                _.current && (clearInterval(_.current), (_.current = null));
            },
            [c, d]
          ),
          f = cx(r().Tooltip, e.className),
          g = e.renderContent();
        return g
          ? (0, a.jsxs)("div", {
              className: "".concat(f, " relative"),
              children: [
                (0, a.jsx)("div", {
                  className: "w-full",
                  onMouseEnter: (e) => {
                    u(e);
                  },
                  onMouseLeave: (e) => {
                    v(e);
                  },
                  onClick: (e) => {
                    b(e);
                  },
                  children: (0, a.jsx)("span", {
                    className: cx(
                      !e.disableHandleStyle && r()["Tooltip-handle"],
                      e.handleClassName,
                      o && "active"
                    ),
                    children: e.isHandlerDisabled
                      ? (0, a.jsx)("div", {
                          className: r()["Tooltip-disabled-wrapper"],
                          children: e.handle,
                        })
                      : (0, a.jsx)(a.Fragment, { children: e.handle }),
                  }),
                }),
                o &&
                  (0, a.jsx)(a.Fragment, {
                    children: h
                      ? (0, a.jsx)("div", {
                          style: e.headerStyle
                            ? e.headerStyle
                            : { zIndex: "90" },
                          className: "".concat(
                            cx(r()["Tooltip-popup"], r()[m])
                          ),
                          children: e.renderContent(),
                        })
                      : (0, a.jsx)("div", {
                          children: (0, a.jsx)(s.Z, {
                            id: "popopModal",
                            open: !0,
                            setOpen: () => c(!1),
                            children: (0, a.jsx)(i.Z, {
                              title: "",
                              noTitle: !0,
                              children: e.renderContent(),
                            }),
                          }),
                        }),
                  }),
              ],
            })
          : null;
      }
    },
    37927: function (e, t, n) {
      "use strict";
      var a = n(57437);
      n(2265),
        (t.Z = (e) => {
          let { id: t, children: n, className: l, open: o, setOpen: r } = e;
          return (0, a.jsxs)(a.Fragment, {
            children: [
              (0, a.jsx)("label", { htmlFor: t, className: l }),
              (0, a.jsx)("input", {
                type: "checkbox",
                id: t,
                className: "modal-toggle",
                checked: o,
                readOnly: !0,
              }),
              (0, a.jsxs)("div", {
                className: "modal",
                children: [
                  (0, a.jsx)("div", {
                    className: "modal-box modalContainer",
                    children: n,
                  }),
                  (0, a.jsx)("label", {
                    className: "modal-backdrop",
                    htmlFor: t,
                    onClick: () => r && r(!1),
                    children: "Close",
                  }),
                ],
              }),
            ],
          });
        });
    },
    54724: function (e, t, n) {
      "use strict";
      var a = n(57437);
      n(2265);
      var l = n(30113),
        o = n.n(l),
        r = n(37416);
      t.Z = (e) => {
        let {
          title: t,
          children: n,
          className: l,
          updateModal: s,
          noTitle: i,
        } = e;
        return (0, a.jsxs)("div", {
          className: "modalInner",
          children: [
            !i &&
              (0, a.jsxs)("div", {
                className: "flex flex-row items-center justify-between pb-5",
                children: [
                  (0, a.jsx)("span", {
                    className: o().manage_echonft_title,
                    children: t,
                  }),
                  (0, a.jsx)("button", {
                    onClick: () => s && s(!1),
                    className:
                      "btn btn-neutral  hover:border-none p-0 border-none min-h-0 h-5",
                    children: (0, a.jsx)(r._y, {}),
                  }),
                ],
              }),
            n,
          ],
        });
      };
    },
    15187: function (e, t, n) {
      "use strict";
      n.d(t, {
        Z: function () {
          return shared_Navbar;
        },
      });
      var a = n(57437),
        l = n(2265);
      let o = [
        { title: "Dashboard", link: "/dashboard" },
        { title: "Liquidity", link: "/liquidity" },
        { title: "Lock", link: "/lock" },
        { title: "Vote", link: "/vote" },
        { title: "Incentive", link: "/bribe" },
        { title: "OmnixNFT", link: "/LOXONFT" },
        { title: "Airdrop", link: "/loxoairdrop" },
      ];
      var r = n(61396),
        s = n.n(r),
        i = n(9667),
        c = n.n(i),
        d = n(24033),
        _ = n(73616),
        h = n(16691),
        x = n.n(h),
        m = n(79037),
        p = n(37416),
        u = n(92980),
        b = n(54968),
        shared_ConnectWalletButton = () => {
          let { address: e } = (0, m.m)(),
            {
              balances: t,
              initial: n,
              isLoading: o,
              prices: r,
            } = (0, u.useTokenContext)(),
            s = (0, l.useMemo)(() => {
              let e = t.find((e) => "IOTX" === e.symbol);
              return (0, b.en)((null == e ? void 0 : e.balance) || 0);
            }, [t]);
          return (0, a.jsx)(_.NL.Custom, {
            children: (e) => {
              let {
                  account: t,
                  chain: n,
                  openAccountModal: l,
                  openChainModal: o,
                  openConnectModal: r,
                  authenticationStatus: i,
                  mounted: d,
                } = e,
                _ = d && "loading" !== i,
                h = _ && t && n && (!i || "authenticated" === i);
              return (0, a.jsx)("div", {
                ...(!_ && {
                  "aria-hidden": !0,
                  style: {
                    opacity: 0,
                    pointerEvents: "none",
                    userSelect: "none",
                  },
                }),
                children: h
                  ? n.unsupported
                    ? (0, a.jsx)("button", {
                        id: "fade-button",
                        onClick: o,
                        className:
                          "  shadow-3xl border border-primary rounded-none min-h-0 h-10 px-3.5  md:w-full w-auto",
                        disabled: !1,
                        children: (0, a.jsx)("span", {
                          className: c().nav_connect_wallet,
                          children: "Unsupported network",
                        }),
                      })
                    : (0, a.jsxs)("div", {
                        className: "flex space-x-2 md:min-w-[292px]",
                        children: [
                          (0, a.jsx)("div", {
                            className:
                              "md:inline-block hidden shadow-3xl border border-primary rounded-none min-h-0 h-10 text-blue leading-10 text-center text-sm min-w-[92px]",
                            children: "".concat(s, " OMNIX"),
                          }),
                          (0, a.jsx)("button", {
                            id: "chain-button",
                            onClick: o,
                            disabled: !1,
                            className:
                              "md:inline-block hidden   shadow-3xl border border-primary rounded-none min-h-0 h-10 ",
                            children: (0, a.jsx)(x(), {
                              loading: "lazy",
                              "data-src": "/static/icons/IOTEX-logo.svg",
                              className: "mx-2 lazyload",
                              alt: "network icon",
                              src: "/static/icons/IOTEX-logo.svg",
                              width: "30",
                              height: "30",
                            }),
                          }),
                          (0, a.jsxs)("button", {
                            id: "fade-button",
                            onClick: l,
                            className:
                              "btn btn-primary shadow-3xl bg-transparent hover:bg-transparent text-[12px] xs:text-[0.875rem] border border-primary rounded-none px-2 xs:px-3.5 min-h-0 h-8 xs:h-10 ",
                            disabled: !1,
                            children: [
                              (0, a.jsx)("div", {
                                className: "hidden md:block",
                                children: (0, a.jsx)(p.bB, {
                                  fill: "#".concat(t.address.slice(-6)),
                                }),
                              }),
                              (0, a.jsx)("span", {
                                className: "text-blue",
                                children: t.displayName,
                              }),
                            ],
                          }),
                        ],
                      })
                  : (0, a.jsx)("button", {
                      onClick: r,
                      className: "",
                      disabled: !1,
                      children: (0, a.jsx)(x(), {
                        "data-src": "/static/images/connectWallet.png",
                        alt: "connect wallet",
                        src: "/static/images/connectWallet.png",
                        width: "158",
                        height: "33",
                      }),
                    }),
              });
            },
          });
        },
        v = n(17423),
        Banner = () => {
          let [e, t] = (0, l.useState)(!0),
            [n, o] = (0, l.useState)(!0),
            { period: r } = (0, u.useTokenContext)(),
            s = (0, d.usePathname)(),
            [i, _] = (0, l.useState)(!0),
            [h, x] = (0, l.useState)(!0),
            m = (0, l.useMemo)(
              () => "/LOXONFT" === s || "/loxoairdrop" === s,
              [s]
            );
          (0, l.useEffect)(() => {
            let e = sessionStorage.getItem("bannerHidden");
            e
              ? t(!0)
              : setTimeout(() => {
                  t(!1);
                }, 500);
          }, []),
            (0, l.useEffect)(() => {
              let e = sessionStorage.getItem("bannerHidden2");
              e
                ? o(!0)
                : setTimeout(() => {
                    o(!1);
                  }, 500);
            }, []),
            (0, l.useEffect)(() => {
              let handleScroll = () => {
                let t = window.scrollY > 60;
                _(t), x(t);
                let a = 0;
                !e && m && (a += 70),
                  n || (a += 70),
                  console.log(a, n, "===>height");
                let l = a + "px",
                  o = document.getElementById("banner-placeholder");
                t
                  ? o ||
                    (((o = document.createElement("div")).id =
                      "banner-placeholder"),
                    (o.style.width = "100%"),
                    (o.style.height = l),
                    document.body.insertBefore(o, document.body.firstChild))
                  : o && o.remove();
              };
              return (
                window.addEventListener("scroll", handleScroll),
                _(!1),
                x(!1),
                handleScroll(),
                () => {
                  window.removeEventListener("scroll", handleScroll);
                  let e = document.getElementById("banner-placeholder");
                  e && e.remove();
                }
              );
            }, [s, e, n]);
          let setClose = () => {
              sessionStorage.setItem("bannerHidden", "true"), t(!0);
            },
            setClose2 = () => {
              sessionStorage.setItem("bannerHidden2", "true"), o(!0);
            };
          return (0, a.jsxs)("div", {
            className: ""
              .concat(c().banner, " ")
              .concat(i ? "!fixed !top-0" : ""),
            children: [
              !e && m
                ? (0, a.jsxs)("div", {
                    className: c().bannerInner,
                    children: [
                      (0, a.jsxs)("div", {
                        className: c().bannerBox,
                        children: [
                          (0, a.jsx)("span", {
                            className: c().bannerSpan,
                            children:
                              "OmnixNFT Public Mint Is Live, now to unlock exclusive benefits \uD83C\uDF89\uD83C\uDF89\uD83C\uDF89",
                          }),
                          (0, a.jsx)("div", {
                            className: c().btnBox,
                            children: (0, a.jsx)("a", {
                              href: "https://omnix-ai-cs.vercel.app/mint",
                              target: "_blank",
                              children: (0, a.jsx)("div", {
                                className: c().bannerBtn,
                                children: "Go To Mint",
                              }),
                            }),
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: c().bannerClose,
                        onClick: () => {
                          setClose();
                        },
                        children: (0, a.jsx)(p.mP, {}),
                      }),
                    ],
                  })
                : null,
              n || ("/liquidity" !== s && "/LOXONFT" !== s)
                ? null
                : (0, a.jsxs)("div", {
                    className: c().bannerInner2,
                    children: [
                      (0, a.jsxs)("div", {
                        className: c().bannerBox,
                        children: [
                          (0, a.jsx)("span", {
                            className: c().bannerSpan,
                            children:
                              "The mainnet beta phase has concluded. Kindly migrate your liquidity and LOXONFTs into the mainnet.",
                          }),
                          (0, a.jsxs)("div", {
                            className: c().btnBox,
                            children: [
                              "/liquidity" === s &&
                                (0, a.jsx)("a", {
                                  href: "https://dappbeta.loxodrome.xyz/liquidity?remove=true",
                                  target: "_blank",
                                  children: (0, a.jsx)("div", {
                                    className: c().bannerBtn,
                                    children: "Go to migrate liquidity",
                                  }),
                                }),
                              "/LOXONFT" === s &&
                                (0, a.jsx)("a", {
                                  href: "https://dappbeta.loxodrome.xyz/LOXONFT?openManage=true",
                                  target: "_blank",
                                  children: (0, a.jsx)("div", {
                                    className: "".concat(
                                      c().bannerBtn,
                                      " lg:ml-4 mt-2 lg:mt-0"
                                    ),
                                    children: "Go to migrate OmnixNFT",
                                  }),
                                }),
                            ],
                          }),
                        ],
                      }),
                      (0, a.jsx)("div", {
                        className: c().bannerClose,
                        onClick: () => {
                          setClose2();
                        },
                        children: (0, a.jsx)(p.mP, {}),
                      }),
                    ],
                  }),
            ],
          });
        },
        shared_Navbar = () => {
          let [e, t] = (0, l.useState)(!1),
            n = (0, d.usePathname)();
          return (0, a.jsxs)("div", {
            className: "relative",
            children: [
              (0, a.jsxs)("div", {
                className: "navbar bg-transparent relative",
                children: [
                  (0, a.jsx)("div", {
                    className: "navbar-start w-[30%] md:w-[50%]",
                    children: (0, a.jsxs)(s(), {
                      href: "https://omnix-ai-cs.vercel.app/",
                      className:
                        "btn btn-ghost normal-case text-sm xs:text-xl px-[6px] xs:px-[1rem]",
                      children: [
                        (0, a.jsx)("div", {
                          children: (0, a.jsx)(x(), {
                            width: 30,
                            height: 30,
                            alt: "logo",
                            src: "/static/images/logo.svg",
                          }),
                        }),
                        (0, a.jsx)("span", {
                          className: c().nav_loxodrome,
                          children: "OmniX AI",
                        }),
                      ],
                    }),
                  }),
                  (0, a.jsx)("div", {
                    className: "navbar-center hidden xl:flex",
                    children: (0, a.jsx)("ul", {
                      className: "menu menu-horizontal px-1",
                      children: o.map((e, t) => {
                        let l = e.link === n;
                        return "OmnixNFT" === e.title ||
                          "Swap" === e.title ||
                          e.otherLink ||
                          "Liquidity" === e.title ||
                          "Dashboard" === e.title ||
                          "Lock" === e.title ||
                          "Airdrop" === e.title
                          ? (0, a.jsx)(
                              "li",
                              {
                                className: "mx-1",
                                children: (0, a.jsx)(s(), {
                                  passHref: !0,
                                  href: e.link,
                                  target: e.otherLink ? "_blank" : "_self",
                                  style: l
                                    ? {
                                        backgroundColor:
                                          "rgba(62, 248, 175, 0.1)",
                                        color: "#fff",
                                      }
                                    : {},
                                  className:
                                    "rounded-[8px] py-[6px] px-[18px] text-[14px] text-[#7e7e7e] leading-[20px]",
                                  children:
                                    "Perp" === e.title
                                      ? (0, a.jsxs)("div", {
                                          className: "flex items-center",
                                          children: [
                                            (0, a.jsx)("span", {
                                              children: "Perp",
                                            }),
                                            (0, a.jsx)("div", {
                                              className: "ml-[4px]",
                                              children: (0, a.jsx)(p.wp, {}),
                                            }),
                                          ],
                                        })
                                      : e.title,
                                }),
                              },
                              t
                            )
                          : (0, a.jsx)(
                              "div",
                              {
                                className: "".concat(c().noHref),
                                children: (0, a.jsx)(v.Z, {
                                  headerStyle: { zIndex: 90 - t + "" },
                                  handleClassName: c().noText,
                                  handle: (0, a.jsx)("div", {
                                    className: "text-[#505050]",
                                    children: e.title,
                                  }),
                                  renderContent: () =>
                                    (0, a.jsx)("div", {
                                      className: "text-center",
                                      children: "Coming Soon",
                                    }),
                                }),
                              },
                              t
                            );
                      }),
                    }),
                  }),
                  (0, a.jsxs)("div", {
                    className:
                      "navbar-end md:px-4 space-x-2 w-[70%] md:w-[50%] md:min-w-[340px]",
                    children: [
                      (0, a.jsx)(shared_ConnectWalletButton, {}),
                      (0, a.jsxs)("div", {
                        className: "dropdown",
                        children: [
                          (0, a.jsx)("input", {
                            id: "my-drawer-4",
                            type: "checkbox",
                            checked: e,
                            className: "drawer-toggle",
                            readOnly: !0,
                          }),
                          (0, a.jsx)("div", {
                            className:
                              "flex flex-col items-center justify-center drawer-content",
                            children: (0, a.jsx)("label", {
                              onClick: () => t(!0),
                              htmlFor: "my-drawer-4",
                              tabIndex: 0,
                              className:
                                "btn btn-ghost xs:ms-3 xl:hidden px-[8px] xs:px-[12px]",
                              children: (0, a.jsx)(p.Oq, {}),
                            }),
                          }),
                          (0, a.jsxs)("div", {
                            className: "drawer-side",
                            style: { zIndex: "99" },
                            children: [
                              (0, a.jsx)("label", {
                                htmlFor: "my-drawer-4",
                                className: "drawer-overlay",
                              }),
                              (0, a.jsx)("ul", {
                                tabIndex: 0,
                                className:
                                  "menu min-h-[100vh] overflow-y-scroll flex flex-wrap overflow-x-hidden py-2 xs:py-3 sm:py-4 w-full bg-base-100 text-base-content px-2 xs:px-4 sm:px-6",
                                children: (0, a.jsxs)("div", {
                                  className: "w-full",
                                  children: [
                                    (0, a.jsx)("div", {
                                      className:
                                        "flex flex-row-reverse w-full justify-between pt-4 xs:pt-6 sm:pt-8 px-4 xs:pb-7",
                                      children: (0, a.jsx)("button", {
                                        onClick: () => t(!1),
                                        children: (0, a.jsx)(p.$R, {
                                          className:
                                            "w-[16px] h-[16px] xs:w-[20px] xs:h-[20px] sm:w-[24px] sm:h-[24px]",
                                        }),
                                      }),
                                    }),
                                    o.map((e, t) => {
                                      let l = e.link === n;
                                      return (0, a.jsx)(
                                        "li",
                                        {
                                          className: "w-full",
                                          children: (0, a.jsxs)(s(), {
                                            target: e.otherLink
                                              ? "_blank"
                                              : "_self",
                                            className: ""
                                              .concat(c().a_tag, " ")
                                              .concat(
                                                l &&
                                                  "border border-primary bg-primary bg-opacity-10 rounded-none"
                                              ),
                                            href: e.link,
                                            children: [
                                              "Perp" === e.title
                                                ? (0, a.jsxs)("div", {
                                                    className:
                                                      "flex items-center",
                                                    children: [
                                                      (0, a.jsx)("span", {
                                                        children: "Perp",
                                                      }),
                                                      (0, a.jsx)("div", {
                                                        className: "ml-[4px]",
                                                        children: (0, a.jsx)(
                                                          p.wp,
                                                          {
                                                            color: "#B3B3B3",
                                                            size: 22,
                                                          }
                                                        ),
                                                      }),
                                                    ],
                                                  })
                                                : e.title,
                                              " ",
                                              "OmnixNFT" === e.title ||
                                              e.otherLink ||
                                              "Swap" === e.title ||
                                              "Liquidity" === e.title ||
                                              "Dashboard" === e.title ||
                                              "Lock" === e.title ||
                                              "Airdrop" === e.title
                                                ? null
                                                : (0, a.jsx)("span", {
                                                    className:
                                                      "text-sm opacity-60",
                                                    children: "(Coming Soon)",
                                                  }),
                                            ],
                                          }),
                                        },
                                        t
                                      );
                                    }),
                                  ],
                                }),
                              }),
                            ],
                          }),
                        ],
                      }),
                    ],
                  }),
                ],
              }),
              (0, a.jsx)(Banner, {}),
            ],
          });
        };
    },
    30113: function (e) {
      e.exports = {
        main: "echo_main__tUkyL",
        title: "echo_title__wvCtf",
        title_2: "echo_title_2__WqaVa",
        content: "echo_content__1ZLYj",
        box_title: "echo_box_title__ad3tU",
        box_content: "echo_box_content__K9eGk",
        buyBtn: "echo_buyBtn__l4Gr1",
        buy_nft_button: "echo_buy_nft_button__GD5T7",
        button: "echo_button__fvvmd",
        stake_nft_title: "echo_stake_nft_title__p7p_I",
        head_stake: "echo_head_stake__TamIH",
        content_stake: "echo_content_stake__eIiZu",
        token_selection: "echo_token_selection__pFHve",
        management_button: "echo_management_button__CtNvy",
        echo_nft_content: "echo_echo_nft_content__VxKu2",
        manage_echonft_main: "echo_manage_echonft_main__SQamI",
        manage_echonft_title: "echo_manage_echonft_title__TWVSh",
        manage_echonft_tab_button_active:
          "echo_manage_echonft_tab_button_active__EJUGI",
        manage_echonft_tab_button: "echo_manage_echonft_tab_button__jwcO2",
        manage_echonft_clearall_button:
          "echo_manage_echonft_clearall_button__o3D60",
        manage_echonft_selectnft: "echo_manage_echonft_selectnft__uiwKG",
        manage_echonft_nft_items: "echo_manage_echonft_nft_items__zUaWV",
        manage_echonft_nft_dropdown: "echo_manage_echonft_nft_dropdown__d_lGx",
        manage_echonft_stake_active: "echo_manage_echonft_stake_active__pBl1k",
        manage_echonft_stake_deactive:
          "echo_manage_echonft_stake_deactive__i7T1g",
        title_mobile: "echo_title_mobile__oDkIh",
        learn_more: "echo_learn_more__tqgS8",
        not__liquidity__found: "echo_not__liquidity__found__CILtI",
        buttonCancel: "echo_buttonCancel__V9dcJ",
        stakeBtn: "echo_stakeBtn__qdyYz",
        arrowRightHoverEffect: "echo_arrowRightHoverEffect___ub7A",
        balance: "echo_balance__E9KS4",
      };
    },
    9667: function (e) {
      e.exports = {
        nav_loxodrome: "navbar_nav_loxodrome__zkZ5C",
        nav_connect_wallet: "navbar_nav_connect_wallet__fHnGj",
        nav_items: "navbar_nav_items__Ia4FO",
        a_tag: "navbar_a_tag__teRsO",
        banner: "navbar_banner__LIATv",
        bannerInner: "navbar_bannerInner__eXvy4",
        bannerInner2: "navbar_bannerInner2__UhDYX",
        bannerBox: "navbar_bannerBox__3s_9_",
        bannerClose: "navbar_bannerClose__hqV4i",
        bannerSpan: "navbar_bannerSpan__bGBJL",
        btnBox: "navbar_btnBox___ffCB",
        bannerBtn: "navbar_bannerBtn__dVtOo",
        reduceHeight: "navbar_reduceHeight__IXp1u",
        noHref: "navbar_noHref__L596B",
        noText: "navbar_noText__Z4L1k",
      };
    },
    27134: function (e) {
      e.exports = {
        Tooltip: "tooltip_Tooltip__9Q3BB",
        "Tooltip-popup": "tooltip_Tooltip-popup__pK2lP",
        nowrap: "tooltip_nowrap__v7HP1",
        "left-bottom": "tooltip_left-bottom__uVO1C",
        "right-bottom": "tooltip_right-bottom__uoZqa",
        "right-top": "tooltip_right-top__YDbaB",
        right: "tooltip_right__7XyoC",
        bottom: "tooltip_bottom__8IJ1u",
        "left-top": "tooltip_left-top__cMyJv",
        "center-bottom": "tooltip_center-bottom__SOk8Y",
        "center-top": "tooltip_center-top__QYWp0",
        "Tooltip-handle": "tooltip_Tooltip-handle__9s96l",
        plain: "tooltip_plain__2_PLp",
        "no-underline": "tooltip_no-underline__piWrL",
        "Tooltip-divider": "tooltip_Tooltip-divider__nnQgQ",
        "Tooltip-row": "tooltip_Tooltip-row__YGrWG",
        label: "tooltip_label__h_ZXi",
        "Tooltip-row-value": "tooltip_Tooltip-row-value__YK0Sr",
        "Tooltip-row-values": "tooltip_Tooltip-row-values__E9XTp",
        "Tooltip-number": "tooltip_Tooltip-number__0jkne",
        "Tooltip-flex": "tooltip_Tooltip-flex__syaCe",
        "Tooltip-disabled-wrapper": "tooltip_Tooltip-disabled-wrapper__VlsV_",
        "z-index-1001": "tooltip_z-index-1001__KyEts",
      };
    },
  },
]);
