"use strict";
(self["webpackChunkcef"] = self["webpackChunkcef"] || []).push([[90911], {
    48306: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return S
            }
        });
        var a = i(78221);
        const s = e => ((0,
        a.pushScopeId)("data-v-5929cd6e"),
        e = e(),
        (0,
        a.popScopeId)(),
        e)
          , o = {
            class: "menuWrapper"
        }
          , r = {
            class: "menuWrapper-header"
        }
          , n = {
            class: "row-block"
        }
          , l = {
            class: "_coins"
        }
          , c = {
            key: 0,
            class: "_coins-item"
        }
          , d = {
            key: 1,
            class: "_coins-item"
        }
          , p = {
            class: "_coins-item"
        }
          , m = ["src"]
          , u = {
            class: "enter-code__text"
        }
          , h = {
            class: "replenish__text"
        }
          , g = {
            class: "exit__title"
        }
          , f = s(( () => (0,
        a.createElementVNode)("div", {
            class: "exit__key"
        }, "Esc", -1)))
          , v = {
            class: "menuWrapper-main"
        };
        function y(e, t, i, s, y, k) {
            const _ = (0,
            a.resolveComponent)("SVGComponent");
            return (0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", o, [(0,
            a.createElementVNode)("div", r, [(0,
            a.renderSlot)(e.$slots, "header"), (0,
            a.createElementVNode)("div", n, [(0,
            a.createElementVNode)("div", l, [e.showSpringCoins ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", c, [(0,
            a.createVNode)(_, {
                path: "icons/F4/spring.svg"
            }), (0,
            a.createElementVNode)("p", null, (0,
            a.toDisplayString)(e.$n(e.springCoins, "any-number")), 1)])) : (0,
            a.createCommentVNode)("", !0), e.showHalloweenCrystals ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", d, [(0,
            a.createVNode)(_, {
                path: "icons/F4/Halloween/vault.svg"
            }), (0,
            a.createElementVNode)("p", null, (0,
            a.toDisplayString)(e.$n(e.halloweenCrystals, "any-number")), 1)])) : (0,
            a.createCommentVNode)("", !0), (0,
            a.createElementVNode)("div", p, [(0,
            a.createElementVNode)("img", {
                src: e.$_getImage("img/donate/mcoin.svg"),
                alt: ""
            }, null, 8, m), (0,
            a.createElementVNode)("p", null, (0,
            a.toDisplayString)(e.$n(e.donate ?? 0, "any-number")), 1)])]), (0,
            a.createElementVNode)("div", {
                class: "enter-code align-center",
                onClick: t[0] || (t[0] = (...t) => e.setModal && e.setModal(...t))
            }, [(0,
            a.createVNode)(_, {
                path: "icons/donate/plus.svg",
                class: "enter-code__picture"
            }), (0,
            a.createElementVNode)("span", u, (0,
            a.toDisplayString)(e.$t("cef.panelMenu.enter-code")), 1)]), (0,
            a.createElementVNode)("div", {
                class: "replenish align-center",
                onClick: t[1] || (t[1] = (...t) => e.setCategory && e.setCategory(...t))
            }, [(0,
            a.createVNode)(_, {
                path: "icons/donate/plus.svg",
                class: "replenish__picture"
            }), (0,
            a.createElementVNode)("span", h, (0,
            a.toDisplayString)(e.$t("cef.panelMenu.replenish")), 1)]), (0,
            a.createElementVNode)("div", {
                class: "exit row-block align-center",
                onClick: t[2] || (t[2] = t => e.$emit("close"))
            }, [(0,
            a.createElementVNode)("span", g, (0,
            a.toDisplayString)(e.$t("cef.panelMenu.exit")), 1), f])])]), (0,
            a.createElementVNode)("div", v, [(0,
            a.renderSlot)(e.$slots, "default")])])
        }
        var k = i(33907)
          , _ = (0,
        a.defineComponent)({
            computed: {
                ...(0,
                k.rn)({
                    donate: e => e.panelMenu.donate.donate,
                    springCoins: e => e.panelMenu.donate.springCoins,
                    halloweenCrystals: e => e.panelMenu.donate.halloweenCrystals,
                    showSpringCoins: e => e.panelMenu.donate.showSpringCoins,
                    showHalloweenCrystals: e => e.panelMenu.donate.showHalloweenCrystals
                })
            },
            methods: {
                setModal() {
                    this.$emit("setModal", "enterCode")
                },
                setCategory() {
                    this.$emit("setCategory", "replenish")
                }
            }
        })
          , C = i(83744);
        const w = (0,
        C.Z)(_, [["render", y], ["__scopeId", "data-v-5929cd6e"]]);
        var S = w
    },
    664: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return C
            }
        });
        var a = i(78221);
        const s = e => ((0,
        a.pushScopeId)("data-v-30e95d59"),
        e = e(),
        (0,
        a.popScopeId)(),
        e)
          , o = s(( () => (0,
        a.createElementVNode)("div", {
            class: "award-card__rarity"
        }, [(0,
        a.createElementVNode)("svg", {
            fill: "none",
            viewBox: "0 0 16 4",
            xmlns: "http://www.w3.org/2000/svg"
        }, [(0,
        a.createElementVNode)("path", {
            d: "M14 0H2C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4H14C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0Z",
            fill: "#8958FF"
        })])], -1)))
          , r = s(( () => (0,
        a.createElementVNode)("div", {
            class: "award-card__rarity__radial-gradient"
        }, null, -1)))
          , n = {
            key: 0,
            class: "award-card__price"
        }
          , l = {
            class: "old-price"
        }
          , c = {
            class: "current-price"
        }
          , d = {
            key: 1,
            class: "current-price"
        }
          , p = {
            key: 1,
            class: "award-card__trackStat"
        }
          , m = {
            class: "award-card__trackStat-value"
        }
          , u = {
            class: "award-card__info"
        }
          , h = {
            key: 0,
            class: "award-card__info-discount"
        }
          , g = {
            key: 1,
            class: "award-card__info-title"
        };
        function f(e, t, i, s, f, v) {
            const y = (0,
            a.resolveComponent)("PaddedImage")
              , k = (0,
            a.resolveComponent)("SVGComponent");
            return (0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", {
                class: (0,
                a.normalizeClass)(["award-card", [`award-card__rarity-${e.award.color}`]])
            }, [o, r, (0,
            a.createVNode)(y, {
                src: e.newImagePath ? e.getRouletteItemImageNew(e.award.value, e.award.type) : e.getRouletteItemImage(e.award.value, e.award.type),
                class: (0,
                a.normalizeClass)(["award-card__media", e.award.type])
            }, null, 8, ["src", "class"]), e.price ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", n, [e.discount ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)(a.Fragment, {
                key: 0
            }, [(0,
            a.createElementVNode)("div", l, (0,
            a.toDisplayString)(e.parsedPrice.old), 1), (0,
            a.createElementVNode)("div", c, (0,
            a.toDisplayString)(e.parsedPrice.current), 1)], 64)) : ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", d, (0,
            a.toDisplayString)(e.parsedPrice.current), 1)), (0,
            a.createVNode)(k, {
                class: "icon",
                path: "icons/panelMenu/donate/cases/mcoin.svg"
            })])) : (0,
            a.createCommentVNode)("", !0), e.showTrackStat && null !== e.trackStat && void 0 !== e.trackStat ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", p, [(0,
            a.createVNode)(k, {
                class: "award-card__trackStat-icon",
                path: "icons/F4/Donate/Skins/trackStat.svg"
            }), (0,
            a.createElementVNode)("div", m, (0,
            a.toDisplayString)(e.trackStat), 1)])) : (0,
            a.createCommentVNode)("", !0), (0,
            a.createElementVNode)("div", u, [e.discount ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", h, "-" + (0,
            a.toDisplayString)(e.discount) + "%", 1)) : (0,
            a.createCommentVNode)("", !0), e.showTitle ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", g, (0,
            a.toDisplayString)(e.getRouletteItemTitle(e.award)), 1)) : (0,
            a.createCommentVNode)("", !0)])], 2)
        }
        var v = i(76132)
          , y = (0,
        a.defineComponent)({
            name: "AwardCard",
            components: {
                PaddedImage: v.Z
            },
            props: {
                award: {
                    type: Object,
                    required: !0
                },
                showTitle: {
                    type: Boolean,
                    default: !1
                },
                showTrackStat: {
                    type: Boolean,
                    default: !1
                },
                newImagePath: {
                    type: Boolean,
                    default: !1
                }
            },
            computed: {
                trackStat() {
                    return this.award?.trackStat
                },
                discount() {
                    return this.award?.discount
                },
                price() {
                    return this.award?.price
                },
                parsedPrice() {
                    if (this.discount) {
                        const e = Math.round(this.price - this.price / 100 * this.discount);
                        return {
                            old: this.formatNumber(this.price),
                            current: this.formatNumber(e)
                        }
                    }
                    return {
                        current: this.formatNumber(this.price)
                    }
                }
            }
        })
          , k = i(83744);
        const _ = (0,
        k.Z)(y, [["render", f], ["__scopeId", "data-v-30e95d59"]]);
        var C = _
    },
    90911: function(e, t, i) {
        i.r(t),
        i.d(t, {
            default: function() {
                return fe
            }
        });
        var a = i(78221);
        const s = {
            key: 0,
            class: "page-header"
        }
          , o = {
            key: 0,
            class: "filters"
        }
          , r = {
            class: "filters__item search"
        }
          , n = ["placeholder"]
          , l = {
            key: 0,
            class: "filters__item select"
        }
          , c = {
            class: "main-select__data"
        }
          , d = {
            class: "filters__item select"
        }
          , p = {
            class: "main-select__data"
        }
          , m = {
            class: "back__icon"
        }
          , u = {
            class: "back__title"
        }
          , h = {
            class: "property"
        }
          , g = {
            key: 0,
            class: "category__title"
        }
          , f = {
            class: "category__items"
        }
          , v = ["onClick"];
        function y(e, t, i, y, k, _) {
            const C = (0,
            a.resolveComponent)("SVGComponent")
              , w = (0,
            a.resolveComponent)("VueSelect")
              , S = (0,
            a.resolveComponent)("AwardCard")
              , N = (0,
            a.resolveComponent)("DynamicScrollerItem")
              , V = (0,
            a.resolveComponent)("DynamicScroller")
              , E = (0,
            a.resolveComponent)("ItemPage")
              , I = (0,
            a.resolveComponent)("MenuWrapper");
            return (0,
            a.openBlock)(),
            (0,
            a.createBlock)(I, null, {
                header: (0,
                a.withCtx)(( () => [e.getPropertyType ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", s, [(0,
                a.createVNode)(a.Transition, {
                    appear: "",
                    name: "local-fade",
                    mode: "out-in"
                }, {
                    default: (0,
                    a.withCtx)(( () => [e.openedItem ? ((0,
                    a.openBlock)(),
                    (0,
                    a.createElementBlock)("div", {
                        key: 1,
                        class: "back",
                        onClick: t[1] || (t[1] = (...t) => e.clearOpenedItem && e.clearOpenedItem(...t))
                    }, [(0,
                    a.createElementVNode)("div", m, [(0,
                    a.createVNode)(C, {
                        path: "icons/F4/Donate/Property/back.svg"
                    })]), (0,
                    a.createElementVNode)("div", u, (0,
                    a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.back")), 1)])) : ((0,
                    a.openBlock)(),
                    (0,
                    a.createElementBlock)("div", o, [(0,
                    a.createElementVNode)("div", r, [(0,
                    a.withDirectives)((0,
                    a.createElementVNode)("input", {
                        type: "text",
                        placeholder: e.$t("cef.Menu.F4.donate.property.search"),
                        maxlength: "20",
                        "onUpdate:modelValue": t[0] || (t[0] = t => e.search = t)
                    }, null, 8, n), [[a.vModelText, e.search]]), (0,
                    a.createVNode)(C, {
                        path: "icons/F4/Donate/Property/search.svg"
                    })]), e.getFiltersList.length > 0 ? ((0,
                    a.openBlock)(),
                    (0,
                    a.createElementBlock)("div", l, [(0,
                    a.createVNode)(w, {
                        "item-list": e.getFiltersList,
                        "custom-element": !0,
                        class: (0,
                        a.normalizeClass)(["filters__item select", {
                            selected: e.selectedFilter
                        }]),
                        onSetItem: e.setFilter
                    }, {
                        default: (0,
                        a.withCtx)(( () => [(0,
                        a.createElementVNode)("div", c, [(0,
                        a.createVNode)(C, {
                            path: "icons/F4/Donate/Property/filter.svg"
                        }), (0,
                        a.createElementVNode)("p", null, (0,
                        a.toDisplayString)(e.$t(e.selectedFilter ? `cef.Menu.F4.donate.property.filters.${e.selectedFilter}` : "cef.Menu.F4.donate.property.select-filter")), 1)])])),
                        arrow: (0,
                        a.withCtx)(( () => [(0,
                        a.createVNode)(C, {
                            path: "icons/F4/Donate/Property/arrow.svg"
                        })])),
                        customElement: (0,
                        a.withCtx)(( ({item: t}) => [(0,
                        a.createElementVNode)("p", null, (0,
                        a.toDisplayString)(e.$t(`cef.Menu.F4.donate.property.filters.${t}`)), 1)])),
                        _: 1
                    }, 8, ["item-list", "class", "onSetItem"])])) : (0,
                    a.createCommentVNode)("", !0), (0,
                    a.createElementVNode)("div", d, [(0,
                    a.createVNode)(w, {
                        "item-list": e.getSortList,
                        "custom-element": !0,
                        class: (0,
                        a.normalizeClass)(["filters__item select", {
                            selected: e.selectedSort
                        }]),
                        onSetItem: e.setSort
                    }, {
                        default: (0,
                        a.withCtx)(( () => [(0,
                        a.createElementVNode)("div", p, [(0,
                        a.createVNode)(C, {
                            path: "icons/F4/Donate/Property/sort.svg"
                        }), (0,
                        a.createElementVNode)("p", null, (0,
                        a.toDisplayString)(e.$t(e.selectedSort ? `cef.Menu.F4.donate.property.sorts.${e.selectedSort}` : "cef.Menu.F4.donate.property.select-sort")), 1)])])),
                        arrow: (0,
                        a.withCtx)(( () => [(0,
                        a.createVNode)(C, {
                            path: "icons/F4/Donate/Property/arrow.svg"
                        })])),
                        customElement: (0,
                        a.withCtx)(( ({item: t}) => [(0,
                        a.createElementVNode)("p", null, (0,
                        a.toDisplayString)(e.$t(`cef.Menu.F4.donate.property.sorts.${t}`)), 1)])),
                        _: 1
                    }, 8, ["item-list", "class", "onSetItem"])])]))])),
                    _: 1
                })])) : (0,
                a.createCommentVNode)("", !0)])),
                default: (0,
                a.withCtx)(( () => [(0,
                a.createElementVNode)("div", h, [((0,
                a.openBlock)(),
                (0,
                a.createBlock)(V, {
                    class: "container",
                    key: e.getPropertyType,
                    items: e.getGroupsOfItems,
                    "min-item-size": .25 * e.windowHeight,
                    prerender: 5,
                    "key-field": "id"
                }, {
                    default: (0,
                    a.withCtx)(( ({item: t, index: i, active: s}) => [(0,
                    a.createVNode)(N, {
                        item: t,
                        active: s,
                        "data-index": i
                    }, {
                        default: (0,
                        a.withCtx)(( () => [t.title ? ((0,
                        a.openBlock)(),
                        (0,
                        a.createElementBlock)("div", g, (0,
                        a.toDisplayString)(e.$t(`cef.Menu.F4.donate.property.categories.${e.getPropertyType.toLowerCase()}.${t.title}`)), 1)) : (0,
                        a.createCommentVNode)("", !0), (0,
                        a.createElementVNode)("div", f, [((0,
                        a.openBlock)(!0),
                        (0,
                        a.createElementBlock)(a.Fragment, null, (0,
                        a.renderList)(t.items, ( (t, i) => ((0,
                        a.openBlock)(),
                        (0,
                        a.createElementBlock)("div", {
                            key: `itemId-${t.id}_index-${i}`,
                            class: "category__items-item",
                            onClick: i => e.openItem(t.id)
                        }, [(0,
                        a.createVNode)(S, {
                            award: t,
                            showTitle: !0,
                            newImagePath: !0
                        }, null, 8, ["award"])], 8, v)))), 128))])])),
                        _: 2
                    }, 1032, ["item", "active", "data-index"])])),
                    _: 1
                }, 8, ["items", "min-item-size"]))]), e.openedItem ? ((0,
                a.openBlock)(),
                (0,
                a.createBlock)(E, {
                    key: 0,
                    item: e.openedItem,
                    similarItems: e.getSimilarItems,
                    onOpenItem: e.openItem,
                    onBuildRoute: e.buildRoute
                }, null, 8, ["item", "similarItems", "onOpenItem", "onBuildRoute"])) : (0,
                a.createCommentVNode)("", !0)])),
                _: 1
            })
        }
        var k = i(6160)
          , _ = i(33907)
          , C = i(63646)
          , w = i(52893)
          , S = i(48306);
        const N = e => ((0,
        a.pushScopeId)("data-v-47ff4994"),
        e = e(),
        (0,
        a.popScopeId)(),
        e)
          , V = {
            class: "itemPage"
        }
          , E = {
            class: "content"
        }
          , I = {
            class: "header"
        }
          , B = {
            key: 0,
            class: "price"
        }
          , b = {
            class: "old-price"
        }
          , F = {
            class: "current-price"
        }
          , T = {
            key: 1,
            class: "current-price"
        }
          , $ = N(( () => (0,
        a.createElementVNode)("div", {
            class: "item__rarity"
        }, [(0,
        a.createElementVNode)("svg", {
            fill: "none",
            viewBox: "0 0 16 4",
            xmlns: "http://www.w3.org/2000/svg"
        }, [(0,
        a.createElementVNode)("path", {
            d: "M14 0H2C0.89543 0 0 0.89543 0 2C0 3.10457 0.89543 4 2 4H14C15.1046 4 16 3.10457 16 2C16 0.89543 15.1046 0 14 0Z",
            fill: "#8958FF"
        })])], -1)))
          , x = N(( () => (0,
        a.createElementVNode)("div", {
            class: "item__rarity__radial-gradient"
        }, null, -1)))
          , D = {
            key: 0,
            class: "arrow-buttons"
        }
          , P = ["onClick"]
          , L = {
            class: "item__add-specifications__item"
        }
          , M = {
            class: "info"
        }
          , O = {
            class: "title"
        }
          , A = {
            class: "percent"
        }
          , R = {
            class: "item__add-specifications__item"
        }
          , Z = {
            class: "info"
        }
          , z = {
            class: "title"
        }
          , H = {
            class: "percent"
        }
          , W = {
            class: "item__add-specifications__item"
        }
          , G = {
            class: "info"
        }
          , q = {
            class: "title"
        }
          , U = {
            class: "percent"
        }
          , j = {
            key: 0,
            class: "item__add-specifications__item"
        }
          , J = {
            class: "info"
        }
          , K = {
            class: "title"
        }
          , Q = {
            class: "percent"
        }
          , X = {
            class: "info"
        }
          , Y = {
            class: "icon"
        }
          , ee = {
            class: "title"
        }
          , te = {
            class: "percent"
        }
          , ie = {
            class: "progress"
        }
          , ae = {
            class: "title"
        }
          , se = {
            class: "items"
        }
          , oe = ["onClick"];
        function re(e, t, i, s, o, r) {
            const n = (0,
            a.resolveComponent)("SVGComponent")
              , l = (0,
            a.resolveComponent)("SwiperSlide")
              , c = (0,
            a.resolveComponent)("Swiper")
              , d = (0,
            a.resolveComponent)("AwardCard");
            return (0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", V, [(0,
            a.createElementVNode)("div", E, [(0,
            a.createElementVNode)("div", I, [(0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.title,
                    class: "title"
                }, (0,
                a.toDisplayString)(e.title), 1))])),
                _: 1
            }), (0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    class: "price",
                    key: `${e.item.discount}_${e.item.price}`
                }, [e.price ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", B, [e.item.discount ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)(a.Fragment, {
                    key: 0
                }, [(0,
                a.createElementVNode)("div", b, (0,
                a.toDisplayString)(e.price?.old), 1), (0,
                a.createElementVNode)("div", F, (0,
                a.toDisplayString)(e.price?.current), 1)], 64)) : ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", T, (0,
                a.toDisplayString)(e.price?.current), 1)), (0,
                a.createVNode)(n, {
                    class: "icon",
                    path: "icons/panelMenu/donate/cases/mcoin.svg"
                })])) : (0,
                a.createCommentVNode)("", !0), e.item.discount ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.item.discount,
                    class: "discount"
                }, "-" + (0,
                a.toDisplayString)(e.item.discount) + "%", 1)) : (0,
                a.createCommentVNode)("", !0)]))])),
                _: 1
            }), (0,
            a.createElementVNode)("div", {
                onClick: t[0] || (t[0] = t => e.buildRoute()),
                class: "buildRoute"
            }, (0,
            a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.build-route")), 1)]), (0,
            a.createElementVNode)("div", {
                class: (0,
                a.normalizeClass)(["item", [`item__rarity-${e.item.color}`]])
            }, [$, x, (0,
            a.createVNode)(c, {
                ref: "plansSwiper",
                class: "swiper",
                "slides-per-view": e.numberOfVisibleCards,
                "space-between": 66.5 / 1080 * this.windowHeight,
                centeredSlides: !0,
                allowTouchMove: e.allOptions.length >= 2,
                onSwiper: e.swiperInit,
                onSlideChange: e.onSlideChange
            }, {
                default: (0,
                a.withCtx)(( () => [((0,
                a.openBlock)(!0),
                (0,
                a.createElementBlock)(a.Fragment, null, (0,
                a.renderList)(e.allOptions, ( (t, i) => ((0,
                a.openBlock)(),
                (0,
                a.createBlock)(l, {
                    key: "optionItem_" + i
                }, {
                    default: (0,
                    a.withCtx)(( () => [(0,
                    a.createVNode)(a.Transition, {
                        appear: "",
                        name: "local-fade",
                        mode: "out-in"
                    }, {
                        default: (0,
                        a.withCtx)(( () => [((0,
                        a.openBlock)(),
                        (0,
                        a.createElementBlock)("div", {
                            class: "swiper-slide__image",
                            style: (0,
                            a.normalizeStyle)({
                                "background-image": `url(${e.getRouletteItemImageNew(t.value, t.type)})`
                            }),
                            key: `url(${e.getRouletteItemImageNew(t.value, t.type)})`
                        }, null, 4))])),
                        _: 2
                    }, 1024)])),
                    _: 2
                }, 1024)))), 128))])),
                _: 1
            }, 8, ["slides-per-view", "space-between", "allowTouchMove", "onSwiper", "onSlideChange"]), e.allOptions.length >= 2 ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", D, [(0,
            a.createElementVNode)("div", {
                class: (0,
                a.normalizeClass)(["button", {
                    disabled: !e.leftArrowVisible
                }]),
                onClick: t[1] || (t[1] = (...t) => e.slidePrev && e.slidePrev(...t))
            }, [(0,
            a.createVNode)(n, {
                path: "icons/F4/Donate/Property/back.svg"
            })], 2), (0,
            a.createElementVNode)("div", {
                class: (0,
                a.normalizeClass)(["button revert", {
                    disabled: !e.rightArrowVisible
                }]),
                onClick: t[2] || (t[2] = (...t) => e.slideNext && e.slideNext(...t))
            }, [(0,
            a.createVNode)(n, {
                path: "icons/F4/Donate/Property/back.svg"
            })], 2)])) : (0,
            a.createCommentVNode)("", !0), e.allOptions.length >= 2 ? ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", {
                key: 1,
                class: (0,
                a.normalizeClass)(["pagination", {
                    withSpec: e.withSpec
                }])
            }, [((0,
            a.openBlock)(!0),
            (0,
            a.createElementBlock)(a.Fragment, null, (0,
            a.renderList)(e.allOptions.length, (t => ((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", {
                key: `paginationItem_${t}`,
                class: (0,
                a.normalizeClass)(["pagination-item", {
                    active: t - 1 === e.swiperItemPosition
                }]),
                onClick: i => e.setSwiperItemPosition(t - 1)
            }, null, 10, P)))), 128))], 2)) : (0,
            a.createCommentVNode)("", !0), (0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [e.item.specifications && e.specifications ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.item.specifications.length,
                    class: "item__add-specifications"
                }, [(0,
                a.createElementVNode)("div", L, [(0,
                a.createElementVNode)("div", M, [(0,
                a.createElementVNode)("div", O, (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.specifications.trunk")), 1), (0,
                a.createElementVNode)("div", A, [(0,
                a.createElementVNode)("span", null, (0,
                a.toDisplayString)(e.$n(e.specifications.capacity / 1e3, "any-number")), 1), (0,
                a.createVNode)(n, {
                    path: "icons/global/weight.svg"
                })])])]), (0,
                a.createElementVNode)("div", R, [(0,
                a.createElementVNode)("div", Z, [(0,
                a.createElementVNode)("div", z, (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.specifications.fuelCap")), 1), (0,
                a.createElementVNode)("div", H, [(0,
                a.createElementVNode)("span", null, (0,
                a.toDisplayString)(e.specifications.fuelCap) + " " + (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.specifications.symbols.liters")), 1)])])]), (0,
                a.createElementVNode)("div", W, [(0,
                a.createElementVNode)("div", G, [(0,
                a.createElementVNode)("div", q, (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.specifications.fuelType")), 1), (0,
                a.createElementVNode)("div", U, [(0,
                a.createElementVNode)("span", null, (0,
                a.toDisplayString)(e.specifications.fuelType.charAt(0).toUpperCase() + e.specifications.fuelType.slice(1)), 1)])])]), e.specifications.price ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", j, [(0,
                a.createElementVNode)("div", J, [(0,
                a.createElementVNode)("div", K, (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.specifications.price")), 1), (0,
                a.createElementVNode)("div", Q, [(0,
                a.createElementVNode)("span", null, "$ " + (0,
                a.toDisplayString)(e.$n(e.specifications.price || 0, "any-number")), 1)])])])) : (0,
                a.createCommentVNode)("", !0)])) : (0,
                a.createCommentVNode)("", !0)])),
                _: 1
            }), (0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [e.item.specifications && e.specifications ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.item.specifications.length,
                    class: "item__specifications"
                }, [((0,
                a.openBlock)(!0),
                (0,
                a.createElementBlock)(a.Fragment, null, (0,
                a.renderList)(e.specifications.progress, ( (t, i) => ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: `specification_${i}`,
                    class: "specification"
                }, [(0,
                a.createElementVNode)("div", X, [(0,
                a.createElementVNode)("div", Y, [(0,
                a.createVNode)(n, {
                    path: `icons/F4/Donate/Property/Specifications/${i}.svg`
                }, null, 8, ["path"])]), (0,
                a.createElementVNode)("div", ee, (0,
                a.toDisplayString)(e.$t(`cef.Menu.F4.donate.property.specifications.${i}`)), 1), (0,
                a.createElementVNode)("div", te, [(0,
                a.createElementVNode)("span", null, (0,
                a.toDisplayString)(t.speed ? Number(t.speed).toFixed(2) : Number(100 * t.value).toFixed(2)) + " " + (0,
                a.toDisplayString)(e.getSymbol(i)), 1)])]), (0,
                a.createElementVNode)("div", ie, [(0,
                a.createElementVNode)("div", {
                    class: "progress-value",
                    style: (0,
                    a.normalizeStyle)(`width: ${Number(100 * t.value)}%`)
                }, null, 4)])])))), 128))])) : (0,
                a.createCommentVNode)("", !0)])),
                _: 1
            })], 2), (0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [e.item.description ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.item.description,
                    class: "description"
                }, (0,
                a.toDisplayString)(e.item.description), 1)) : (0,
                a.createCommentVNode)("", !0)])),
                _: 1
            }), (0,
            a.createVNode)(a.Transition, {
                appear: "",
                name: "local-fade",
                mode: "out-in"
            }, {
                default: (0,
                a.withCtx)(( () => [e.similarItems && e.similarItems.length > 0 ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: e.similarItems,
                    class: "similar"
                }, [(0,
                a.createElementVNode)("div", ae, (0,
                a.toDisplayString)(e.$t("cef.Menu.F4.donate.property.similar")), 1), (0,
                a.createElementVNode)("div", se, [((0,
                a.openBlock)(!0),
                (0,
                a.createElementBlock)(a.Fragment, null, (0,
                a.renderList)(e.similarItems, ( (t, i) => ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    key: `similar-item_${JSON.stringify(t.value)}-index_${i}`,
                    class: "similar-item",
                    onClick: i => e.openItem(t.id)
                }, [(0,
                a.createVNode)(d, {
                    award: t,
                    showTitle: !0,
                    newImagePath: !0
                }, null, 8, ["award"])], 8, oe)))), 128))])])) : (0,
                a.createCommentVNode)("", !0)])),
                _: 1
            })])])
        }
        var ne = i(664)
          , le = i(7055)
          , ce = (0,
        a.defineComponent)({
            name: "DonateProperty",
            components: {
                SVGComponent: le.Z,
                AwardCard: ne.Z
            },
            mixins: [k.Z],
            props: {
                item: {
                    type: Object,
                    required: !0
                },
                similarItems: {
                    type: Array
                }
            },
            data() {
                return {
                    numberOfVisibleCards: 1,
                    swiperItemPosition: 0,
                    swiper: null,
                    specifications: null
                }
            },
            computed: {
                ...(0,
                _.rn)({
                    vehicleConfig: e => e.main.vehicleConfig
                }),
                price() {
                    const e = this.item.price
                      , t = this.item.discount;
                    if (t) {
                        const i = Math.round(e - e / 100 * t);
                        return {
                            old: this.formatNumber(e),
                            current: this.formatNumber(i)
                        }
                    }
                    return {
                        current: this.formatNumber(e)
                    }
                },
                title() {
                    return this.getRouletteItemTitle(this.item)
                },
                leftArrowVisible() {
                    return 0 !== this.swiperItemPosition
                },
                rightArrowVisible() {
                    return this.swiperItemPosition !== this.allOptions.length - 1
                },
                allOptions() {
                    return this.item.textures && this.item.textures.length >= 1 ? this.item.textures.map((e => {
                        const t = this.item.value.split("-");
                        return t[4] = e,
                        {
                            ...this.item,
                            value: t.join("-")
                        }
                    }
                    )) : [this.item]
                },
                withSpec() {
                    return this.allOptions.find((e => e.specifications))
                },
                itemId() {
                    return this.item.id
                }
            },
            methods: {
                swiperInit(e) {
                    this.swiper = e
                },
                onSlideChange({activeIndex: e}) {
                    this.swiperItemPosition = e
                },
                slideNext() {
                    this.swiperItemPosition < this.allOptions.length - 1 && this.swiperItemPosition++,
                    this.swiper.slideNext()
                },
                slidePrev() {
                    this.swiperItemPosition > 0 && this.swiperItemPosition--,
                    this.swiper.slidePrev()
                },
                openItem(e) {
                    this.$emit("openItem", e)
                },
                buildRoute() {
                    this.$emit("buildRoute")
                },
                setSwiperItemPosition(e) {
                    this.swiperItemPosition = e,
                    this.swiper.slideTo(e)
                },
                getSymbol(e) {
                    switch (e) {
                    case "maxSpeed":
                        return ` ${this.$t("cef.Menu.F4.donate.property.specifications.symbols.kmh")}`;
                    default:
                        return "%"
                    }
                },
                getPercent(e, t) {
                    let i = e?.specifications[t];
                    switch (i = isNaN(parseFloat(Number(i))) ? i.charAt(0).toUpperCase() + i.slice(1) : parseFloat(Number(i)).toFixed(0),
                    t) {
                    case "breaking":
                    case "acceleration":
                    case "traction":
                        return {
                            value: i,
                            percent: i
                        };
                    case "maxSpeed":
                        return {
                            value: i,
                            percent: i / 250 * 100
                        };
                    default:
                        return {
                            value: i,
                            percent: 100
                        }
                    }
                },
                getSpecifications() {
                    this.item?.specifications && (this.specifications = {
                        fuelType: this.item.fuelType,
                        fuelCap: this.item.fuelCap,
                        capacity: this.item.capacity,
                        progress: {
                            maxSpeed: {
                                speed: this.item.specifications.maxSpeed,
                                value: this.item.specifications.maxSpeed / 222
                            },
                            acceleration: {
                                value: this.item.specifications.acceleration / 40 * 100
                            },
                            breaking: {
                                value: this.item.specifications.breaking / 3
                            },
                            traction: {
                                value: this.item.specifications.traction / 3
                            }
                        }
                    })
                }
            },
            watch: {
                itemId() {
                    this.setSwiperItemPosition(0),
                    this.getSpecifications()
                }
            },
            mounted() {
                this.getSpecifications()
            }
        })
          , de = i(83744);
        const pe = (0,
        de.Z)(ce, [["render", re], ["__scopeId", "data-v-47ff4994"]]);
        var me = pe
          , ue = i(18763)
          , he = (0,
        a.defineComponent)({
            name: "DonateProperty",
            components: {
                SVGComponent: le.Z,
                MenuWrapper: S.Z,
                AwardCard: ne.Z,
                ItemPage: me,
                VueSelect: ue.Z
            },
            mixins: [k.Z],
            FILTERS_LIST: {
                Vehicles: ["all", "donate", "helidonate"],
                Clothes: ["all", "head", "tops", "undershirts", "legs", "shoes", "glasses", "watches", "bracelets", "ears", "masks", "accessories", "armor", "decals", "bags", "gloves"],
                Tattoos: ["all", "torso", "heads", "leftHand", "rightHand", "leftFoot", "rightFoot"]
            },
            SORT_LIST: {
                Vehicles: ["price", "price_revert", "color", "color_revert", "discount", "discount_revert", "maxSpeed", "maxSpeed_revert", "acceleration", "acceleration_revert", "breaking", "breaking_revert", "traction", "traction_revert", "trunk", "trunk_revert", "fuelCap", "fuelCap_revert", "fuelType", "fuelType_revert"],
                Clothes: ["price", "price_revert", "color", "color_revert", "discount", "discount_revert"],
                Tattoos: ["price", "price_revert", "discount", "discount_revert"]
            },
            data() {
                return {
                    data: {},
                    search: "",
                    selectedFilter: "all",
                    selectedSort: "discount",
                    types: ["Vehicles", "Clothes", "Tattoos"],
                    colors: ["red", "gold", "pink", "purple", "blue", "gray", "unique"],
                    fuelTypes: ["premium", "electro", "plus", "diesel", "regular"]
                }
            },
            computed: {
                ...(0,
                _.rn)({
                    vehicleConfig: e => e.main.vehicleConfig
                }),
                getPropertyType() {
                    const e = this.$route?.params?.type;
                    if (!e)
                        return null;
                    const t = e.charAt(0).toUpperCase() + e.slice(1);
                    return this.types.find((e => e == t)) ? t : null
                },
                openedItem() {
                    const e = parseInt(this.$route?.params?.itemId);
                    if (!Number.isInteger(e))
                        return null;
                    let t = null;
                    console.log("openedItem this.categories", this.categories);
                    for (const i of this.categories) {
                        const a = this.items[i].find((t => t.id === e));
                        if (a) {
                            t = a;
                            break
                        }
                    }
                    return console.log("openedItem result", t),
                    t
                },
                getSimilarItems() {
                    if (!this.openedItem || !this.openedItem.similar || this.openedItem.similar.length <= 0)
                        return [];
                    let e = [];
                    for (const t of this.categories) {
                        const i = this.items[t].filter((e => this.openedItem.similar.includes(e.id)));
                        if (i && (e = e.concat(i),
                        e.length >= this.openedItem.similar.length))
                            break
                    }
                    return this.dedupe(e)
                },
                getSortList() {
                    return this.getPropertyType ? this.$options.SORT_LIST[this.getPropertyType] : []
                },
                getFiltersList() {
                    return this.getPropertyType ? this.$options.FILTERS_LIST[this.getPropertyType] : []
                },
                items() {
                    return this.data?.items || []
                },
                categories() {
                    return this.items ? Object.keys(this.items) : []
                },
                openedItemPrice() {
                    if (this.openedItem) {
                        const e = this.openedItem.price
                          , t = this.openedItem.discount;
                        if (t) {
                            const i = Math.round(e - e / 100 * t);
                            return {
                                old: this.formatNumber(e),
                                current: this.formatNumber(i)
                            }
                        }
                        return {
                            current: this.formatNumber(e)
                        }
                    }
                    return null
                },
                getGroupsOfItems() {
                    let e = [];
                    console.log("categories", this.categories),
                    console.log("items", this.items),
                    this.categories.forEach((t => {
                        e = e.concat(this.items[t].map((e => ({
                            ...e,
                            category: t
                        }))))
                    }
                    )),
                    e = e.filter((e => "tattoo" != e.type || "tattoo" == e.type && 3111 != e.value));
                    const t = [];
                    if (this.search && (e = e.filter((e => -1 !== this.getValidVehicleName({
                        model: e.value,
                        title: e.value
                    }, null, !0).toLowerCase().indexOf(this.search.toLowerCase()) || -1 !== this.getValidVehicleName({
                        model: e.value,
                        title: e.value
                    }).toLowerCase().indexOf(this.search.toLowerCase()) || this.getRouletteItemTitle(e).toLowerCase().includes(this.search.toLowerCase()) || e.value.toLowerCase().includes(this.search.toLowerCase())))),
                    this.selectedFilter)
                        switch (e = e.filter((e => e)),
                        this.selectedFilter) {
                        case "all":
                            break;
                        case "donate":
                        case "helidonate":
                            e = e.filter((e => e.class === this.selectedFilter));
                            break;
                        case "head":
                        case "tops":
                        case "undershirts":
                        case "legs":
                        case "shoes":
                        case "glasses":
                        case "watches":
                        case "bracelets":
                        case "ears":
                        case "masks":
                        case "accessories":
                        case "armor":
                        case "decals":
                        case "bags":
                        case "gloves":
                            e = e.filter((e => e.value.split("-")[0] === this.selectedFilter));
                            break;
                        case "torso":
                        case "heads":
                        case "leftHand":
                        case "rightHand":
                        case "leftFoot":
                        case "rightFoot":
                            e = e.filter((e => e.zoneName === this.selectedFilter));
                            break
                        }
                    if (this.selectedSort)
                        switch (this.selectedSort) {
                        case "price":
                            e = e.sort(( (e, t) => parseFloat(this.getPrice(t)) - parseFloat(this.getPrice(e))));
                            break;
                        case "price_revert":
                            e = e.sort(( (e, t) => parseFloat(this.getPrice(e)) - parseFloat(this.getPrice(t))));
                            break;
                        case "color":
                            e = e.sort(( (e, t) => this.colors.indexOf(e.color) - this.colors.indexOf(t.color)));
                            break;
                        case "color_revert":
                            e = e.sort(( (e, t) => this.colors.indexOf(t.color) - this.colors.indexOf(e.color)));
                            break;
                        case "discount":
                            e = e.sort(( (e, t) => parseFloat(t.discount || 0) - parseFloat(e.discount || 0)));
                            break;
                        case "discount_revert":
                            e = e.sort(( (e, t) => parseFloat(e.discount || 0) - parseFloat(t.discount || 0)));
                            break;
                        case "maxSpeed":
                            e = e.sort(( (e, t) => parseFloat(t.specifications?.maxSpeed || 0) - parseFloat(e.specifications?.maxSpeed || 0)));
                            break;
                        case "maxSpeed_revert":
                            e = e.sort(( (e, t) => parseFloat(e.specifications?.maxSpeed || 0) - parseFloat(t.specifications?.maxSpeed || 0)));
                            break;
                        case "acceleration":
                            e = e.sort(( (e, t) => parseFloat(t.specifications?.acceleration || 0) - parseFloat(e.specifications?.acceleration || 0)));
                            break;
                        case "acceleration_revert":
                            e = e.sort(( (e, t) => parseFloat(e.specifications?.acceleration || 0) - parseFloat(t.specifications?.acceleration || 0)));
                            break;
                        case "breaking":
                            e = e.sort(( (e, t) => parseFloat(t.specifications?.breaking || 0) - parseFloat(e.specifications?.breaking || 0)));
                            break;
                        case "breaking_revert":
                            e = e.sort(( (e, t) => parseFloat(e.specifications?.breaking || 0) - parseFloat(t.specifications?.breaking || 0)));
                            break;
                        case "traction":
                            e = e.sort(( (e, t) => parseFloat(t.specifications?.traction || 0) - parseFloat(e.specifications?.traction || 0)));
                            break;
                        case "traction_revert":
                            e = e.sort(( (e, t) => parseFloat(e.specifications?.traction || 0) - parseFloat(t.specifications?.traction || 0)));
                            break;
                        case "trunk":
                            e = e.sort(( (e, t) => parseFloat(t.capacity || 0) - parseFloat(e.capacity || 0)));
                            break;
                        case "trunk_revert":
                            e = e.sort(( (e, t) => parseFloat(e.capacity || 0) - parseFloat(t.capacity || 0)));
                            break;
                        case "fuelCap":
                            e = e.sort(( (e, t) => parseFloat(t.fuelCap || 0) - parseFloat(e.fuelCap || 0)));
                            break;
                        case "fuelCap_revert":
                            e = e.sort(( (e, t) => parseFloat(e.fuelCap || 0) - parseFloat(t.fuelCap || 0)));
                            break;
                        case "fuelType":
                            e = e.sort(( (e, t) => this.fuelTypes.indexOf(e.fuelType.toLowerCase()) - this.fuelTypes.indexOf(t.fuelType.toLowerCase())));
                            break;
                        case "fuelType_revert":
                            e = e.sort(( (e, t) => this.fuelTypes.indexOf(t.fuelType.toLowerCase()) - this.fuelTypes.indexOf(e.fuelType.toLowerCase())));
                            break
                        }
                    return this.categories.forEach(( (i, a) => {
                        const s = e.filter((e => e.category === i));
                        if (!(s.length <= 0)) {
                            t.push({
                                id: 0 + a * s.length,
                                title: i,
                                items: [s[0]]
                            });
                            for (let e = 1; e < s.length; e++)
                                t[t.length - 1].items.length >= 5 && t.push({
                                    id: e + a * s.length,
                                    title: null,
                                    items: []
                                }),
                                t[t.length - 1].items.push(s[e])
                        }
                    }
                    )),
                    t.filter((e => e))
                }
            },
            methods: {
                setData(e) {
                    console.log("setData set payload", e),
                    (0,
                    w.Z)(this.data, e, !0)
                },
                getPrice(e) {
                    const t = e.price
                      , i = e.discount;
                    return i ? Math.round(t - t / 100 * i) : t
                },
                openItem(e) {
                    this.$router.replace({
                        params: {
                            itemId: e
                        }
                    })
                },
                clearOpenedItem() {
                    this.$router.replace({
                        params: {
                            itemId: ""
                        }
                    })
                },
                buildRoute() {
                    this.$_callClient(`W2C:Menu_F4_Donate_${this.getPropertyType}:buildRoute`, this.openedItem.class)
                },
                setFilter(e) {
                    this.selectedFilter = e
                },
                setSort(e) {
                    this.selectedSort = e
                },
                dedupe(e) {
                    return e.filter(( (e, t, i) => t === i.findIndex((t => t.id === e.id))))
                }
            },
            created() {
                console.log("created", this.getPropertyType),
                this.getPropertyType && (this.$_onEvent(`C2W:Menu_F4_Donate_${this.getPropertyType}:SetData`, this.setData),
                this.$_callClient(`W2C:Menu_F4_Donate_${this.getPropertyType}:Ready`))
            },
            beforeUnmount() {
                this.getPropertyType && (this.$_offEvent(`C2W:Menu_F4_Donate_${this.getPropertyType}:SetData`, this.setData),
                this.$_callClient(`W2C:Menu_F4_Donate_${this.getPropertyType}:Destroyed`))
            },
            watch: {
                getPropertyType(e, t) {
                    e !== t && (t && (this.$_offEvent(`C2W:Menu_F4_Donate_${t}:SetData`, this.setData),
                    this.$_callClient(`W2C:Menu_F4_Donate_${t}:Destroyed`)),
                    this.data = {},
                    this.clearOpenedItem(),
                    C.TB.$emit("hide-list"),
                    this.search = "",
                    this.selectedFilter = "all",
                    this.selectedSort = "discount",
                    e && (this.$_onEvent(`C2W:Menu_F4_Donate_${e}:SetData`, this.setData),
                    this.$_callClient(`W2C:Menu_F4_Donate_${e}:Ready`)))
                }
            }
        });
        const ge = (0,
        de.Z)(he, [["render", y], ["__scopeId", "data-v-bbf1b1dc"]]);
        var fe = ge
    },
    76132: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return p
            }
        });
        var a = i(78221);
        const s = e => ((0,
        a.pushScopeId)("data-v-a31d4e8e"),
        e = e(),
        (0,
        a.popScopeId)(),
        e)
          , o = {
            ref: "image",
            alt: "",
            class: "image-container__picture"
        }
          , r = s(( () => (0,
        a.createElementVNode)("div", {
            class: "loader-container"
        }, [(0,
        a.createElementVNode)("div", {
            class: "loader"
        })], -1)));
        function n(e, t, i, s, n, l) {
            return (0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", {
                class: (0,
                a.normalizeClass)(["image-container", {
                    hasPadding: n.hasPadding,
                    isLoaded: n.isLoaded
                }])
            }, [(0,
            a.createElementVNode)("img", o, null, 512), r], 2)
        }
        var l = {
            name: "padded-image",
            LOCAL_STORAGE_CACHE: "cachedPaddedImages",
            TOP_OFFSET: 10,
            props: {
                src: {
                    type: String,
                    required: !0
                }
            },
            created() {
                this.img = new Image,
                this.img.src = this.src,
                this.filename = this.src.substring(this.src.lastIndexOf("/") + 1),
                this.img.addEventListener("load", this.imageLoaded)
            },
            beforeUnmount() {
                this.img.removeEventListener("load", this.imageLoaded)
            },
            data() {
                return {
                    hasPadding: !1,
                    img: null,
                    filename: null,
                    isLoaded: !1
                }
            },
            methods: {
                imageLoaded() {
                    this.$refs.image.src = this.img.src;
                    const e = localStorage.getItem(this.$options.LOCAL_STORAGE_CACHE);
                    if ("string" == typeof e && -1 !== e.indexOf(`"${this.filename}"`))
                        return this.hasPadding = JSON.parse(e)[this.filename],
                        this.$refs.image.src = this.img.src,
                        void (this.isLoaded = !0);
                    const t = document.createElement("canvas");
                    t.width = this.img.width,
                    t.height = this.img.height;
                    const i = t.getContext("2d");
                    i.drawImage(this.img, 0, 0);
                    const a = i.getImageData(0, 0, this.img.width, this.$options.TOP_OFFSET).data;
                    for (let s = 0; s < a.length; s += 4) {
                        let e = a[s + 3];
                        if (e > 50) {
                            this.hasPadding = !0;
                            let e = localStorage.getItem(this.$options.LOCAL_STORAGE_CACHE);
                            e = null == e ? {} : JSON.parse(e),
                            e[this.filename] = !0,
                            localStorage.setItem(this.$options.LOCAL_STORAGE_CACHE, JSON.stringify(e)),
                            this.isLoaded = !0;
                            break
                        }
                    }
                    this.isLoaded = !0
                }
            }
        }
          , c = i(83744);
        const d = (0,
        c.Z)(l, [["render", n], ["__scopeId", "data-v-a31d4e8e"]]);
        var p = d
    },
    18763: function(e, t, i) {
        i.d(t, {
            Z: function() {
                return h
            }
        });
        var a = i(78221);
        const s = {
            key: 0,
            class: "list-select-main"
        }
          , o = {
            class: "list-select-main-wrapper"
        }
          , r = ["onClick"]
          , n = ["src"]
          , l = {
            key: 1
        };
        function c(e, t) {
            const i = (0,
            a.resolveComponent)("SVGComponent");
            return (0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("div", {
                onClick: t[5] || (t[5] = (0,
                a.withModifiers)((t => e.switchList()), ["self"])),
                class: (0,
                a.normalizeClass)([e.listState ? "rotated active" : "", "main-select"]),
                onMouseenter: t[6] || (t[6] = t => e.$emit("mouseenter")),
                onMouseleave: t[7] || (t[7] = t => e.$emit("mouseleave"))
            }, [(0,
            a.createElementVNode)("div", {
                onClick: t[4] || (t[4] = t => e.switchList()),
                class: "main-option"
            }, [e.input ? (0,
            a.withDirectives)(((0,
            a.openBlock)(),
            (0,
            a.createElementBlock)("input", {
                key: 1,
                type: "text",
                "onUpdate:modelValue": t[0] || (t[0] = t => e.search = t),
                onInput: t[1] || (t[1] = (...t) => e.inputValue && e.inputValue(...t)),
                onClick: t[2] || (t[2] = (0,
                a.withModifiers)(( () => {}
                ), ["stop"])),
                onFocus: t[3] || (t[3] = t => e.listState = !0),
                placeholder: "Введите значение..."
            }, null, 544)), [[a.vModelText, e.search]]) : (0,
            a.renderSlot)(e.$slots, "default", {
                key: 0
            }, void 0, !0), (0,
            a.renderSlot)(e.$slots, "arrow", {}, ( () => [e.newIcon ? ((0,
            a.openBlock)(),
            (0,
            a.createBlock)(i, {
                key: 0,
                path: "icons/global/arrow.svg",
                class: "drop-arrow"
            })) : ((0,
            a.openBlock)(),
            (0,
            a.createBlock)(i, {
                key: 1,
                path: "icons/global/chevron.svg"
            }))]), !0)]), (0,
            a.createVNode)(a.Transition, {
                name: "local-fade",
                appear: ""
            }, {
                default: (0,
                a.withCtx)(( () => [e.listState ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", s, [(0,
                a.createElementVNode)("div", o, [((0,
                a.openBlock)(!0),
                (0,
                a.createElementBlock)(a.Fragment, null, (0,
                a.renderList)(e.itemList, ( (t, i) => ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("div", {
                    style: (0,
                    a.normalizeStyle)(e.styles ? e.styles[i] : null),
                    onClick: a => e.selectOption(t, i),
                    class: (0,
                    a.normalizeClass)([{
                        active: e.activeTile === e.itemList[i] || e.active === i || e.activeItems?.includes(i),
                        "justify-between": e.additionalTitle
                    }, "list-item"])
                }, [e.customElement ? (0,
                a.renderSlot)(e.$slots, "customElement", {
                    key: 0,
                    item: t
                }, void 0, !0) : ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)(a.Fragment, {
                    key: 1
                }, [e.img ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("img", {
                    key: 0,
                    src: t[e.img],
                    alt: ""
                }, null, 8, n)) : (0,
                a.createCommentVNode)("", !0), (0,
                a.createElementVNode)("span", null, (0,
                a.toDisplayString)(e.sliceString(e.$t(e.getTitle(t)), e.stringLength)), 1), e.additionalTitle ? ((0,
                a.openBlock)(),
                (0,
                a.createElementBlock)("span", l, (0,
                a.toDisplayString)(t[e.additionalTitle]), 1)) : (0,
                a.createCommentVNode)("", !0)], 64))], 14, r)))), 256))])])) : (0,
                a.createCommentVNode)("", !0)])),
                _: 3
            })], 34)
        }
        var d = i(63646)
          , p = {
            name: "vue-select",
            created() {
                d.TB.$on("switch-list", this.hideList),
                d.TB.$on("clear-select", this.clear),
                d.TB.$on("hide-list", this.hideList)
            },
            mounted() {
                null != this.active && (this.activeTile = this.itemList?.[this.active],
                this.input && (this.search = this.bindTitle ? this.activeTile[this.bindTitle] : this.activeTile))
            },
            data() {
                return {
                    listState: !1,
                    activeTile: null,
                    search: "",
                    defaultSlotText: "Default Slot Text",
                    namedSlotText: "Named Slot Text"
                }
            },
            props: {
                customElement: {
                    required: !1,
                    type: Boolean,
                    default: !1
                },
                itemList: {
                    required: !0,
                    type: Array
                },
                img: {
                    default: null
                },
                translateItem: {
                    default: !1,
                    type: Boolean
                },
                bindTitle: {
                    type: String
                },
                additionalTitle: {
                    type: String
                },
                input: {
                    type: Boolean,
                    default: !1
                },
                styles: {},
                stringLength: {
                    required: !1,
                    type: Number
                },
                active: {
                    required: !1,
                    type: Number
                },
                activeItems: {
                    required: !1,
                    type: Array
                },
                newIcon: {
                    type: Boolean
                }
            },
            methods: {
                getTitle(e) {
                    let t;
                    return t = this.bindTitle ? e[this.bindTitle] : e,
                    this.translateItem ? this.$t(t) : t
                },
                switchList(e=!1) {
                    this.listState || d.TB.$emit("switch-list"),
                    this.listState = !this.listState,
                    d.TB.$emit("switch-list-toggle", e)
                },
                inputValue() {
                    this.$emit("input-value", this.search)
                },
                selectOption(e, t) {
                    this.input && (t = this.itemList.indexOf(e)),
                    this.activeTile = this.itemList[t],
                    this.$emit("set-item", e, t),
                    this.switchList(!0),
                    this.input && (this.search = this.bindTitle ? e[this.bindTitle] : e)
                },
                hideList() {
                    this.listState = !1
                },
                clear() {
                    this.activeTile = null
                }
            },
            computed: {
                filteredList() {
                    return this.input && "" !== this.search ? this.itemList.filter((e => -1 !== e.indexOf(this.search))) : this.itemList
                }
            }
        }
          , m = i(83744);
        const u = (0,
        m.Z)(p, [["render", c], ["__scopeId", "data-v-531e880c"]]);
        var h = u
    }
}]);
