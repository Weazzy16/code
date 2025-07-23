"use strict";
(self["webpackChunkcef"] = self["webpackChunkcef"] || []).push([[84805], {
    48306: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return E
            }
        });
        var r = n(78221);
        const o = e => ((0,
        r.pushScopeId)("data-v-5929cd6e"),
        e = e(),
        (0,
        r.popScopeId)(),
        e)
          , a = {
            class: "menuWrapper"
        }
          , i = {
            class: "menuWrapper-header"
        }
          , s = {
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
          , u = {
            class: "_coins-item"
        }
          , p = ["src"]
          , m = {
            class: "enter-code__text"
        }
          , h = {
            class: "replenish__text"
        }
          , v = {
            class: "exit__title"
        }
          , $ = o(( () => (0,
        r.createElementVNode)("div", {
            class: "exit__key"
        }, "Esc", -1)))
          , y = {
            class: "menuWrapper-main"
        };
        function f(e, t, n, o, f, g) {
            const _ = (0,
            r.resolveComponent)("SVGComponent");
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", a, [(0,
            r.createElementVNode)("div", i, [(0,
            r.renderSlot)(e.$slots, "header"), (0,
            r.createElementVNode)("div", s, [(0,
            r.createElementVNode)("div", l, [e.showSpringCoins ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", c, [(0,
            r.createVNode)(_, {
                path: "icons/F4/spring.svg"
            }), (0,
            r.createElementVNode)("p", null, (0,
            r.toDisplayString)(e.$n(e.springCoins, "any-number")), 1)])) : (0,
            r.createCommentVNode)("", !0), e.showHalloweenCrystals ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", d, [(0,
            r.createVNode)(_, {
                path: "icons/F4/Halloween/vault.svg"
            }), (0,
            r.createElementVNode)("p", null, (0,
            r.toDisplayString)(e.$n(e.halloweenCrystals, "any-number")), 1)])) : (0,
            r.createCommentVNode)("", !0), (0,
            r.createElementVNode)("div", u, [(0,
            r.createElementVNode)("img", {
                src: e.$_getImage("img/donate/mcoin.svg"),
                alt: ""
            }, null, 8, p), (0,
            r.createElementVNode)("p", null, (0,
            r.toDisplayString)(e.$n(e.donate ?? 0, "any-number")), 1)])]), (0,
            r.createElementVNode)("div", {
                class: "enter-code align-center",
                onClick: t[0] || (t[0] = (...t) => e.setModal && e.setModal(...t))
            }, [(0,
            r.createVNode)(_, {
                path: "icons/donate/plus.svg",
                class: "enter-code__picture"
            }), (0,
            r.createElementVNode)("span", m, (0,
            r.toDisplayString)(e.$t("cef.panelMenu.enter-code")), 1)]), (0,
            r.createElementVNode)("div", {
                class: "replenish align-center",
                onClick: t[1] || (t[1] = (...t) => e.setCategory && e.setCategory(...t))
            }, [(0,
            r.createVNode)(_, {
                path: "icons/donate/plus.svg",
                class: "replenish__picture"
            }), (0,
            r.createElementVNode)("span", h, (0,
            r.toDisplayString)(e.$t("cef.panelMenu.replenish")), 1)]), (0,
            r.createElementVNode)("div", {
                class: "exit row-block align-center",
                onClick: t[2] || (t[2] = t => e.$emit("close"))
            }, [(0,
            r.createElementVNode)("span", v, (0,
            r.toDisplayString)(e.$t("cef.panelMenu.exit")), 1), $])])]), (0,
            r.createElementVNode)("div", y, [(0,
            r.renderSlot)(e.$slots, "default")])])
        }
        var g = n(33907)
          , _ = (0,
        r.defineComponent)({
            computed: {
                ...(0,
                g.rn)({
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
          , b = n(83744);
        const k = (0,
        b.Z)(_, [["render", f], ["__scopeId", "data-v-5929cd6e"]]);
        var E = k
    },
    98447: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return m
            }
        });
        var r = n(78221);
        const o = {
            class: "checkbox-container"
        }
          , a = {
            class: "checkbox"
        }
          , i = ["id", "value"]
          , s = ["for", "innerHTML"]
          , l = ["for"];
        function c(e, t, n, c, d, u) {
            const p = (0,
            r.resolveComponent)("SVGComponent");
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", o, [(0,
            r.createElementVNode)("div", a, [(0,
            r.createElementVNode)("input", {
                id: n.id,
                value: n.modelValue,
                onChange: t[0] || (t[0] = t => e.$emit("update:modelValue", !n.modelValue)),
                type: "checkbox",
                class: "checkbox__input"
            }, null, 40, i), (0,
            r.createVNode)(p, {
                path: "icons/F4/Donate/Replenish/tick.svg",
                class: "checkbox__icon"
            })]), n.title ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("label", {
                key: 0,
                for: n.id,
                class: (0,
                r.normalizeClass)(["checkbox-container__title", {
                    checked: n.modelValue
                }]),
                innerHTML: e.$DOMPurify.sanitize(n.title)
            }, null, 10, s)) : ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("label", {
                key: 1,
                for: n.id,
                class: (0,
                r.normalizeClass)(["checkbox-container__title", {
                    checked: n.modelValue
                }])
            }, [(0,
            r.renderSlot)(e.$slots, "text", {}, void 0, !0)], 10, l))])
        }
        var d = {
            name: "Checkbox",
            props: {
                title: {
                    type: String,
                    default: null
                },
                id: {
                    type: String,
                    required: !0
                },
                modelValue: {
                    type: Boolean,
                    default: !1
                }
            }
        }
          , u = n(83744);
        const p = (0,
        u.Z)(d, [["render", c], ["__scopeId", "data-v-4277caae"]]);
        var m = p
    },
    82816: function(e, t, n) {
        n.d(t, {
            Z: function() {
                return b
            }
        });
        var r = n(78221);
        const o = {
            class: "payment-methods"
        };
        function a(e, t, n, a, i, s) {
            const l = (0,
            r.resolveComponent)("MethodItem");
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", o, [((0,
            r.openBlock)(!0),
            (0,
            r.createElementBlock)(r.Fragment, null, (0,
            r.renderList)(s.mappedPaymentMethods, ( (e, t) => ((0,
            r.openBlock)(),
            (0,
            r.createBlock)(l, {
                key: `method_${e}_${t}`,
                method: e,
                "is-selected": s.methodIsSelected(e),
                "is-disabled": n.activeMethods?.length && !n.activeMethods.includes(e.key),
                coinsBonus: e.coinsBonus,
                onClick: t => s.select(e)
            }, null, 8, ["method", "is-selected", "is-disabled", "coinsBonus", "onClick"])))), 128))])
        }
        const i = {
            class: "icon-container"
        }
          , s = ["src"]
          , l = ["src"]
          , c = ["src"]
          , d = {
            key: 1,
            class: "payment-method__title"
        };
        function u(e, t, n, o, a, u) {
            const p = (0,
            r.resolveComponent)("SVGComponent");
            return (0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", {
                class: (0,
                r.normalizeClass)(["selecting-item", [u.getClass, {
                    isSelected: n.isSelected,
                    isDisabled: n.isDisabled
                }]]),
                onClick: t[2] || (t[2] = t => e.$emit("click"))
            }, [n.coinsBonus ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("div", {
                key: 0,
                class: "active-coin-bonuses",
                onMouseleave: t[0] || (t[0] = (...e) => u.onTooltipHide && u.onTooltipHide(...e)),
                onMouseenter: t[1] || (t[1] = (...e) => u.onTooltipShow && u.onTooltipShow(...e))
            }, [(0,
            r.createVNode)(p, {
                path: "icons/global/mc.svg"
            }), (0,
            r.createElementVNode)("span", null, "+ " + (0,
            r.toDisplayString)(100 * n.coinsBonus) + "%", 1)], 32)) : (0,
            r.createCommentVNode)("", !0), (0,
            r.createElementVNode)("div", i, [(0,
            r.createElementVNode)("img", {
                class: "icon-container__image-default",
                src: u.icons.default,
                alt: ""
            }, null, 8, s), (0,
            r.createElementVNode)("img", {
                class: "icon-container__image-hovered",
                src: u.icons.hovered,
                alt: ""
            }, null, 8, l), (0,
            r.createElementVNode)("img", {
                class: "icon-container__image-selected",
                src: u.icons.selected,
                alt: ""
            }, null, 8, c)]), n.method?.title ? ((0,
            r.openBlock)(),
            (0,
            r.createElementBlock)("span", d, (0,
            r.toDisplayString)(e.$t(n.method?.title)), 1)) : (0,
            r.createCommentVNode)("", !0)], 2)
        }
        var p = n(63646)
          , m = {
            name: "MethodItem",
            emits: ["click"],
            props: {
                method: {
                    type: Object,
                    required: !0
                },
                isSelected: {
                    type: Boolean,
                    required: !1
                },
                isDisabled: {
                    type: Boolean,
                    required: !1
                },
                coinsBonus: {
                    type: Number,
                    default: null
                }
            },
            computed: {
                getClass() {
                    return this.method?.key
                },
                icons() {
                    return {
                        default: this.$_getImage(`img/global/donate/new-pay-methods/default/${this.method?.key}.svg`),
                        hovered: this.$_getImage(`img/global/donate/new-pay-methods/hovered/${this.method?.key}.svg`),
                        selected: this.$_getImage(`img/global/donate/new-pay-methods/selected/${this.method?.key}.svg`)
                    }
                }
            },
            methods: {
                onTooltipHide() {
                    p.TB.$emit("Menu.Donate.Replenish.onTooltipHide")
                },
                onTooltipShow(e) {
                    p.TB.$emit("Menu.Donate.Replenish.onTooltipShow", e, this.$t("cef.donate.replenish.active-coin-bonuses"))
                }
            }
        }
          , h = n(83744);
        const v = (0,
        h.Z)(m, [["render", u], ["__scopeId", "data-v-b2154284"]]);
        var $ = v
          , y = n(33907)
          , f = n(86475)
          , g = {
            name: "SelectingModal",
            components: {
                MethodItem: $
            },
            props: {
                selectedMethod: {
                    type: Object
                },
                paymentMethodsList: {
                    type: Object
                },
                activeMethods: {
                    type: Array || null,
                    default: null
                }
            },
            computed: {
                ...(0,
                y.rn)({
                    server: e => e.main.server
                }),
                getServer() {
                    return this.server.includes("DE") || this.server.includes("TEST7") ? "de" : this.server.includes("PL") ? "pl" : this.server.includes("BR") ? "br" : this.server?.toLowerCase() ?? null
                },
                mappedPaymentMethods() {
                    return this.paymentMethodsList.map((e => {
                        const t = f.b?.find((t => this.matchArrayStringItem(t?.regions ?? [], this.getServer ?? "") && this.matchArrayStringItem(t?.methods ?? [], e?.key ?? "")))?.additionalMultiplier ?? null;
                        return {
                            ...e,
                            ...t ? {
                                coinsBonus: t
                            } : {}
                        }
                    }
                    ))
                }
            },
            methods: {
                select(e) {
                    this.$emit("setPaymentMethod", e)
                },
                methodIsSelected(e) {
                    return this.selectedMethod?.key === e.key
                },
                matchArrayStringItem(e, t) {
                    return !!e?.find((e => String(e)?.toLowerCase() === String(t)?.toLowerCase())) ?? !1
                }
            }
        };
        const _ = (0,
        h.Z)(g, [["render", a], ["__scopeId", "data-v-c049f384"]]);
        var b = _
    },
    84805: function(e, t, n) {
        n.r(t),
        n.d(t, {
            default: function() {
                return he
            }
        });
        var r = n(78221);
        const o = e => ((0,
        r.pushScopeId)("data-v-6d86d7c8"),
        e = e(),
        (0,
        r.popScopeId)(),
        e)
          , a = {
            class: "wrapper"
        }
          , i = {
            class: "main"
        }
          , s = {
            class: "replenish"
        }
          , l = {
            class: "user-data"
        }
          , c = ["placeholder"]
          , d = {
            class: "error-tooltip"
        }
          , u = {
            key: 3,
            class: "x2-coins"
        }
          , p = {
            key: 1,
            class: "active-coin-bonuses"
        }
          , m = {
            class: "x2-coins__value"
        }
          , h = {
            key: 2,
            class: "x2-coins__percent"
        }
          , v = ["type", "placeholder"]
          , $ = {
            class: "error-tooltip"
        }
          , y = ["placeholder"]
          , f = {
            class: "error-tooltip"
        }
          , g = ["placeholder"]
          , _ = {
            class: "error-tooltip"
        }
          , b = {
            class: "payment-methods-wrapper"
        }
          , k = {
            class: "title"
        }
          , E = {
            class: "checkboxes"
        }
          , V = {
            class: "btns"
        }
          , C = {
            key: 0,
            class: "loader"
        }
          , w = {
            class: "description"
        }
          , N = {
            class: "title"
        }
          , x = {
            class: "sub-title"
        }
          , R = {
            class: "sub-title"
        }
          , S = {
            class: "course"
        }
          , D = {
            class: "course-title"
        }
          , B = {
            class: "currency"
        }
          , T = {
            class: "currency__container"
        }
          , M = {
            class: "currency__container__icon-wrapper"
        }
          , P = o(( () => (0,
        r.createElementVNode)("div", {
            class: "currency__container-value"
        }, " 1 ", -1)))
          , O = {
            class: "currency__container"
        }
          , I = {
            class: "currency__container__icon-wrapper"
        }
          , j = {
            class: "currency__container-value"
        }
          , F = {
            class: "currency__container"
        }
          , L = {
            class: "currency__container__icon-wrapper dollar"
        }
          , A = {
            class: "currency__container-value"
        }
          , H = {
            key: 0,
            class: "bonuses"
        }
          , U = ["onClick"]
          , z = {
            class: "bonus__percentage"
        }
          , q = {
            class: "bonus__percentage-text"
        }
          , Z = {
            class: "bonus__value"
        };
        function W(e, t, n, o, W, X) {
            const G = (0,
            r.resolveComponent)("Background")
              , Y = (0,
            r.resolveComponent)("SVGComponent")
              , K = (0,
            r.resolveComponent)("PaymentMethods")
              , J = (0,
            r.resolveComponent)("Checkbox")
              , Q = (0,
            r.resolveComponent)("Tooltip")
              , ee = (0,
            r.resolveComponent)("MenuWrapper");
            return (0,
            r.openBlock)(),
            (0,
            r.createBlock)(ee, null, {
                header: (0,
                r.withCtx)(( () => [(0,
                r.createElementVNode)("p", null, (0,
                r.toDisplayString)(e.$t("cef.Menu.F4.sidebar.donate.main")), 1)])),
                default: (0,
                r.withCtx)(( () => [(0,
                r.createElementVNode)("div", a, [(0,
                r.createVNode)(G), (0,
                r.createElementVNode)("div", i, [(0,
                r.createElementVNode)("div", s, [(0,
                r.createElementVNode)("div", l, [(0,
                r.createElementVNode)("div", {
                    class: (0,
                    r.normalizeClass)([{
                        "error-state": e.coinsError,
                        valid: !e.v$.coins.$errors.length && e.v$.coins.$dirty
                    }, "input-container"])
                }, [e.isRegionBR ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 0,
                    path: "icons/F4/Donate/Replenish/Currency/br_real_new.svg",
                    class: "input-container__icon"
                })) : (0,
                r.createCommentVNode)("", !0), e.isRegionRU ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 1,
                    path: "icons/F4/Donate/Replenish/Currency/rubles_new.svg",
                    class: "input-container__icon"
                })) : (0,
                r.createCommentVNode)("", !0), e.isRegionEU ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 2,
                    path: "icons/F4/Donate/Replenish/Currency/euro_new.svg",
                    class: "input-container__icon"
                })) : (0,
                r.createCommentVNode)("", !0), (0,
                r.withDirectives)((0,
                r.createElementVNode)("input", {
                    id: "coins",
                    "onUpdate:modelValue": t[0] || (t[0] = t => e.v$.coins.$model = t),
                    type: "text",
                    class: "input-container__input w-100",
                    maxlength: "6",
                    placeholder: e.$t("cef.donate.replenish.coinsPlaceholder"),
                    onBlur: t[1] || (t[1] = (...t) => e.v$.coins.$touch && e.v$.coins.$touch(...t)),
                    onFocus: t[2] || (t[2] = t => e.notFirstTouch = !0)
                }, null, 40, c), [[r.vModelText, e.v$.coins.$model, void 0, {
                    trim: !0
                }]]), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/error.svg",
                    class: "input-container__icon-error"
                }), (0,
                r.createElementVNode)("div", d, (0,
                r.toDisplayString)(e.coinsError), 1), e.coinsError ? (0,
                r.createCommentVNode)("", !0) : ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("div", u, [e.IS_X2 ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 0,
                    path: "icons/F4/Donate/Replenish/x2.svg",
                    class: "x2-coins__icon-x2"
                })) : (0,
                r.createCommentVNode)("", !0), e.hasActiveCoinBonuses ? ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("div", p, [(0,
                r.createElementVNode)("span", null, "+ " + (0,
                r.toDisplayString)(100 * e.hasActiveCoinBonuses) + "%", 1)])) : (0,
                r.createCommentVNode)("", !0), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/eqSign.svg",
                    class: "x2-coins__icon-eq"
                }), (0,
                r.createElementVNode)("span", m, (0,
                r.toDisplayString)(e.finalCoins), 1), (0,
                r.createVNode)(Y, {
                    path: "icons/global/mc.svg",
                    class: "x2-coins__icon-coins"
                }), !e.IS_X2 && e.bonusCoinsPercent ? ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("div", h, " +" + (0,
                r.toDisplayString)(e.bonusCoinsPercent) + "% ", 1)) : (0,
                r.createCommentVNode)("", !0)]))], 2), (0,
                r.createElementVNode)("div", {
                    class: (0,
                    r.normalizeClass)(["input-container flex flex-row items-center", {
                        "error-state": e.emailError,
                        valid: !e.v$.email.$errors.length && e.v$.email.$dirty
                    }])
                }, [(0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/email_new.svg?bbbb",
                    class: "input-container__icon"
                }), (0,
                r.withDirectives)((0,
                r.createElementVNode)("input", {
                    "onUpdate:modelValue": t[3] || (t[3] = t => e.v$.email.$model = t),
                    type: e.mailIsHidden ? "password" : "email",
                    class: "input-container__input w-100",
                    placeholder: e.$t("cef.donate.replenish.emailPlaceholder"),
                    onBlur: t[4] || (t[4] = (...t) => e.v$.email.$touch && e.v$.email.$touch(...t))
                }, null, 40, v), [[r.vModelDynamic, e.v$.email.$model, void 0, {
                    trim: !0
                }]]), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/error.svg",
                    class: "input-container__icon-error"
                }), (0,
                r.createElementVNode)("div", $, (0,
                r.toDisplayString)(e.emailError), 1), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/eye.svg",
                    class: (0,
                    r.normalizeClass)(["input-container__icon eye", {
                        active: e.mailIsHidden
                    }]),
                    onClick: t[5] || (t[5] = t => e.hideMail())
                }, null, 8, ["class"])], 2), e.paymentMethod.key === e.$options.BR_PIX ? ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)(r.Fragment, {
                    key: 0
                }, [(0,
                r.createElementVNode)("div", {
                    class: (0,
                    r.normalizeClass)([{
                        "error-state": e.br_documentError,
                        valid: !e.v$.br_document.$errors.length && e.v$.br_document.$dirty
                    }, "input-container"])
                }, [(0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/document.svg",
                    class: "input-container__icon"
                }), (0,
                r.withDirectives)((0,
                r.createElementVNode)("input", {
                    "onUpdate:modelValue": t[6] || (t[6] = t => e.v$.br_document.$model = t),
                    type: "text",
                    class: "input-container__input",
                    maxlength: "6",
                    placeholder: e.$t("cef.donate.replenish.br_documentPlaceholder"),
                    onBlur: t[7] || (t[7] = (...t) => e.v$.br_document.$touch && e.v$.br_document.$touch(...t))
                }, null, 40, y), [[r.vModelText, e.v$.br_document.$model, void 0, {
                    trim: !0
                }]]), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/error.svg",
                    class: "input-container__icon-error"
                }), (0,
                r.createElementVNode)("div", f, (0,
                r.toDisplayString)(e.br_documentError), 1)], 2), (0,
                r.createElementVNode)("div", {
                    class: (0,
                    r.normalizeClass)([{
                        "error-state": e.br_nameError,
                        valid: !e.v$.br_name.$errors.length && e.v$.br_name.$dirty
                    }, "input-container"])
                }, [(0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/name.svg",
                    class: "input-container__icon"
                }), (0,
                r.withDirectives)((0,
                r.createElementVNode)("input", {
                    "onUpdate:modelValue": t[8] || (t[8] = t => e.v$.br_name.$model = t),
                    type: "text",
                    class: "input-container__input",
                    maxlength: "6",
                    placeholder: e.$t("cef.donate.replenish.br_namePlaceholder"),
                    onBlur: t[9] || (t[9] = (...t) => e.v$.br_name.$touch && e.v$.br_name.$touch(...t))
                }, null, 40, g), [[r.vModelText, e.v$.br_name.$model, void 0, {
                    trim: !0
                }]]), (0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/error.svg",
                    class: "input-container__icon-error"
                }), (0,
                r.createElementVNode)("div", _, (0,
                r.toDisplayString)(e.br_nameError), 1)], 2)], 64)) : (0,
                r.createCommentVNode)("", !0)]), (0,
                r.createElementVNode)("div", b, [(0,
                r.createElementVNode)("div", k, (0,
                r.toDisplayString)(e.$t("cef.donate.replenish.payment-system")), 1), (0,
                r.createVNode)(K, {
                    "selected-method": e.paymentMethod || {},
                    "payment-methods-list": e.$options.paymentMethodsList[e.region],
                    onSetPaymentMethod: e.setPaymentMethod
                }, null, 8, ["selected-method", "payment-methods-list", "onSetPaymentMethod"])]), (0,
                r.createElementVNode)("div", E, [(0,
                r.createVNode)(J, {
                    id: "termsOffer",
                    modelValue: e.termsOffer,
                    "onUpdate:modelValue": t[10] || (t[10] = t => e.termsOffer = t),
                    title: e.$t("cef.donate.replenish.termsOffer")
                }, null, 8, ["modelValue", "title"]), (0,
                r.createVNode)(J, {
                    id: "contentActivation",
                    modelValue: e.contentActivation,
                    "onUpdate:modelValue": t[11] || (t[11] = t => e.contentActivation = t),
                    title: e.$t("cef.donate.replenish.contentActivation")
                }, null, 8, ["modelValue", "title"])]), (0,
                r.createElementVNode)("div", V, [(0,
                r.createElementVNode)("button", {
                    class: (0,
                    r.normalizeClass)([{
                        active: e.isSubmitButtonValid,
                        loading: e.loading
                    }, "submit"]),
                    onClick: t[12] || (t[12] = (...t) => e.createTransaction && e.createTransaction(...t))
                }, [e.loading ? ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("span", C)) : ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)(r.Fragment, {
                    key: 1
                }, [(0,
                r.createTextVNode)((0,
                r.toDisplayString)(e.isSubmitButtonValid ? e.$t("cef.donate.replenish.submit") : e.$t("cef.donate.replenish.disabled-submit")), 1)], 64))], 2)])]), (0,
                r.createElementVNode)("div", w, [(0,
                r.createElementVNode)("div", N, (0,
                r.toDisplayString)(e.$t("cef.donate.replenish.about-donate")), 1), (0,
                r.createElementVNode)("div", x, (0,
                r.toDisplayString)(e.$t("cef.donate.replenish.description")), 1), (0,
                r.createElementVNode)("div", R, (0,
                r.toDisplayString)(e.$t("cef.donate.replenish.warning")), 1), (0,
                r.createElementVNode)("div", S, [(0,
                r.createElementVNode)("div", D, (0,
                r.toDisplayString)(e.$t("cef.donate.replenish.course-title")), 1), (0,
                r.createElementVNode)("div", B, [(0,
                r.createElementVNode)("div", T, [(0,
                r.createElementVNode)("div", M, [e.isRegionBR ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 0,
                    path: "icons/F4/Donate/Replenish/Currency/br_real_new2.svg?aa",
                    class: "currency__container-icon symbol"
                })) : (0,
                r.createCommentVNode)("", !0), e.isRegionRU ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 1,
                    path: "icons/F4/Donate/Replenish/Currency/rubles_new2.svg",
                    class: "currency__container-icon symbol"
                })) : (0,
                r.createCommentVNode)("", !0), e.isRegionEU ? ((0,
                r.openBlock)(),
                (0,
                r.createBlock)(Y, {
                    key: 2,
                    path: "icons/F4/Donate/Replenish/Currency/euro_new2.svg",
                    class: "currency__container-icon symbol"
                })) : (0,
                r.createCommentVNode)("", !0)]), P]), (0,
                r.createVNode)(Y, {
                    class: "currency__eq",
                    path: "icons/F4/Donate/Replenish/Currency/eq.svg"
                }), (0,
                r.createElementVNode)("div", O, [(0,
                r.createElementVNode)("div", I, [(0,
                r.createVNode)(Y, {
                    path: "icons/global/mc.svg",
                    class: "currency__container-icon mc"
                })]), (0,
                r.createElementVNode)("div", j, (0,
                r.toDisplayString)(e.coinsPerUnit[e.region] * (e.IS_X2 ? 2 : 1)), 1)]), (0,
                r.createVNode)(Y, {
                    class: "currency__eq",
                    path: "icons/F4/Donate/Replenish/Currency/eq.svg"
                }), (0,
                r.createElementVNode)("div", F, [(0,
                r.createElementVNode)("div", L, [(0,
                r.createVNode)(Y, {
                    path: "icons/F4/Donate/Replenish/Currency/dollar.svg",
                    class: "currency__container-icon dollar"
                })]), (0,
                r.createElementVNode)("div", A, (0,
                r.toDisplayString)(100 * e.coinsPerUnit[e.region] * (e.IS_X2 ? 2 : 1)), 1)])])]), (0,
                r.createVNode)(r.Transition, {
                    appear: "",
                    name: "local-fade",
                    mode: "out-in"
                }, {
                    default: (0,
                    r.withCtx)(( () => [e.areInputFieldsHidden || e.IS_X2 ? (0,
                    r.createCommentVNode)("", !0) : ((0,
                    r.openBlock)(),
                    (0,
                    r.createElementBlock)("div", H, [((0,
                    r.openBlock)(!0),
                    (0,
                    r.createElementBlock)(r.Fragment, null, (0,
                    r.renderList)(e.percents?.[e.region], ( (t, n) => ((0,
                    r.openBlock)(),
                    (0,
                    r.createElementBlock)("div", {
                        key: `bonus_${t.percent}_${n}`,
                        class: (0,
                        r.normalizeClass)([{
                            selected: e.bonusCoinsPercent === t.percent
                        }, "bonus"]),
                        onClick: n => e.setCoins(t.from)
                    }, [(0,
                    r.createElementVNode)("div", z, [(0,
                    r.createElementVNode)("span", q, "+" + (0,
                    r.toDisplayString)(t.percent) + "%", 1)]), (0,
                    r.createElementVNode)("div", Z, (0,
                    r.toDisplayString)(e.$t("cef.donate.replenish.extra-percent", {
                        from: e.formatNumber(t.from)
                    })), 1)], 10, U)))), 128))]))])),
                    _: 1
                })])]), (0,
                r.createVNode)(r.Transition, {
                    name: "local-fade",
                    appear: "",
                    mode: "out-in"
                }, {
                    default: (0,
                    r.withCtx)(( () => [e.tooltip.isVisible ? ((0,
                    r.openBlock)(),
                    (0,
                    r.createBlock)(Q, {
                        key: 0,
                        coords: e.tooltip.coords,
                        text: e.tooltip.text
                    }, null, 8, ["coords", "text"])) : (0,
                    r.createCommentVNode)("", !0)])),
                    _: 1
                })])])),
                _: 1
            })
        }
        var X = n(33907)
          , G = n(52893)
          , Y = n(48306)
          , K = n(34118)
          , J = n(76204)
          , Q = n(63697)
          , ee = n(34708)
          , te = n(98447)
          , ne = n(82816)
          , re = n(73309);
        const oe = {
            key: 0
        };
        var ae = (0,
        r.defineComponent)({
            __name: "Tooltip",
            props: {
                coords: {
                    default: () => ({
                        x: 0,
                        y: 0
                    })
                },
                text: {
                    default: null
                }
            },
            setup(e) {
                return (e, t) => ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("div", {
                    class: "tooltip",
                    style: (0,
                    r.normalizeStyle)({
                        left: e.coords.x + "px",
                        top: e.coords.y + "px"
                    })
                }, [(0,
                r.renderSlot)(e.$slots, "default", {}, ( () => [null !== e.text ? ((0,
                r.openBlock)(),
                (0,
                r.createElementBlock)("p", oe, (0,
                r.toDisplayString)(e.text), 1)) : (0,
                r.createCommentVNode)("", !0)]))], 4))
            }
        })
          , ie = n(83744);
        const se = (0,
        ie.Z)(ae, [["__scopeId", "data-v-618ee300"]]);
        var le = se
          , ce = n(86475)
          , de = n(63646)
          , ue = n(6160)
          , pe = (0,
        r.defineComponent)({
            name: "DonateReplenish",
            paymentMethodsList: re.Z,
            components: {
                MenuWrapper: Y.Z,
                Background: ee.Z,
                Checkbox: te.Z,
                PaymentMethods: ne.Z,
                Tooltip: le
            },
            mixins: [ue.Z],
            STORAGE_FIELDS: ["br_name", "br_document"],
            BR_PIX: "pix",
            BR_PIXS: ["pix", "pix2"],
            HIDDEN_INPUTS_ON: ["paypal", "paysafecard", "giropay", "ideal", "sofort", "blik", "trustly", "kinguin"],
            UNITPAY_PROVIDER: ["webmoney", "card_ru1", "card_world3", "yandexpay"],
            PGS_PROVIDER: ["bitcoin", "ethereum", "trc20", "erc20", "crypto", "card_world1", "card_ua", "card_ru3", "cards_pgs", "qiwi", "yoomoney", "steam", "cards_eu", "direct_banking", "pix", "boleto", "cards_br", "erip"],
            PAYPALYCH_PROVIDER: ["card_world2", "card_ru2", "paypalych"],
            TINKOFF_PROVIDER: ["dolyame", "sbp", "card_ru4"],
            MULTIHUB_PROVIDER: ["pix2"],
            validations() {
                return {
                    coins: {
                        required: Q.C1,
                        numeric: Q.uR,
                        minValue: this.isRegionRU ? (0,
                        Q.uv)(10) : (0,
                        Q.uv)(5)
                    },
                    email: {
                        required: Q.C1,
                        email: Q.Do,
                        minLength: (0,
                        Q.Ei)(5),
                        maxLength: (0,
                        Q.BS)(40)
                    },
                    br_name: {
                        required: Q.C1,
                        alpha: Q.Fq
                    },
                    br_document: {
                        required: Q.C1,
                        numeric: Q.uR
                    }
                }
            },
            setup() {
                return {
                    v$: (0,
                    J.Xw)()
                }
            },
            data() {
                return {
                    br_document: "",
                    br_name: "",
                    coins: null,
                    paymentMethod: "",
                    email: "",
                    termsOffer: !1,
                    contentActivation: !1,
                    loading: !1,
                    mailIsHidden: !0,
                    notFirstTouch: !1,
                    coinsPerUnit: {
                        ru: 1,
                        eu: 80,
                        br: 20
                    },
                    percents: {
                        ru: [{
                            percent: 1,
                            from: 1e3,
                            active: !1
                        }, {
                            percent: 5,
                            from: 2e3,
                            active: !1
                        }, {
                            percent: 10,
                            from: 5e3,
                            active: !1
                        }, {
                            percent: 20,
                            from: 1e4,
                            active: !1
                        }, {
                            percent: 30,
                            from: 25e3,
                            active: !1
                        }, {
                            percent: 40,
                            from: 5e4,
                            active: !1
                        }],
                        eu: [{
                            percent: 5,
                            from: 50,
                            active: !1
                        }, {
                            percent: 10,
                            from: 100,
                            active: !1
                        }, {
                            percent: 15,
                            from: 200,
                            active: !1
                        }, {
                            percent: 25,
                            from: 500,
                            active: !1
                        }]
                    },
                    tooltip: {
                        isVisible: !1,
                        timeout: null,
                        debounce: 200,
                        text: "",
                        coords: {
                            x: 0,
                            y: 0
                        }
                    }
                }
            },
            computed: {
                ...(0,
                X.rn)({
                    login: e => e.main.userLogin,
                    multiplier: e => e.panelMenu.donate.multiplier,
                    server: e => e.main.server
                }),
                IS_X2() {
                    return !0
                },
                getServer() {
                    return this.server.includes("DE") || this.server.includes("TEST7") ? "de" : this.server.includes("PL") ? "pl" : this.server.includes("BR") ? "br" : this.server?.toLowerCase() ?? null
                },
                region() {
                    return this.server.toLowerCase().includes("br") ? "br" : this.getServer.includes("ru") || this.getServer.includes("test") && "test7" !== this.getServer || this.getServer.includes("develop") || this.getServer.includes("staging") ? "ru" : "eu"
                },
                hasActiveCoinBonuses() {
                    return ce.b?.find((e => this.matchArrayStringItem(e?.regions ?? [], this.getServer ?? "") && this.matchArrayStringItem(e?.methods ?? [], this.paymentMethod?.key ?? "")))?.additionalMultiplier ?? null
                },
                finalCoins() {
                    let e = this.coins;
                    return this.coinsPerUnit?.[this.region] && (e *= this.coinsPerUnit[this.region]),
                    this.IS_X2 ? e *= 2 : null !== this.bonusCoinsPercent && (e *= this.bonusCoinsPercent),
                    null !== this.hasActiveCoinBonuses && (e *= this.hasActiveCoinBonuses + 1),
                    this.$n(Math.floor(e), "any-number")
                },
                isRegionBR() {
                    return "br" === this.region
                },
                isRegionRU() {
                    return "ru" === this.region
                },
                isRegionEU() {
                    return "eu" === this.region
                },
                areInputFieldsHidden() {
                    return !!this.paymentMethod && this.$options.HIDDEN_INPUTS_ON.includes(this.paymentMethod?.key)
                },
                bonusCoinsPercent() {
                    return this.areInputFieldsHidden ? null : this.percents?.[this.region]?.find(( (e, t, n) => {
                        const r = n[t + 1];
                        let o = r ? r.from : 1 / 0;
                        return this.coins >= e.from && this.coins < o
                    }
                    ))?.percent ?? null
                },
                emailError() {
                    return this.getNextError("email")
                },
                coinsError() {
                    return this.getNextError("coins")
                },
                br_documentError() {
                    return this.getNextError("br_document")
                },
                br_nameError() {
                    return this.getNextError("br_name")
                },
                isSubmitButtonValid() {
                    return this.areInputFieldsHidden ? this.termsOffer && this.contentActivation && this.notFirstTouch : !this.v$.coins.$errors.length && !this.v$.email.$errors.length && ((!this.isRegionBR || this.paymentMethod?.key !== this.$options.BR_PIX || !this.v$.br_name.$errors.length && !this.v$.br_document.$errors.length) && (this.paymentMethod?.key && this.termsOffer && this.contentActivation && this.notFirstTouch))
                }
            },
            methods: {
                ...(0,
                X.OI)({
                    showNotify: "main/showNotify"
                }),
                setData(e) {
                    (0,
                    G.Z)(this.data, e, !0)
                },
                createPayment(e, t, n, r, o, a) {
                    return K.Z.post(`/payments/${e}/create`, {
                        serverId: t,
                        login: n,
                        amount: r,
                        source: "game",
                        email: o,
                        method: a
                    })
                },
                matchArrayStringItem(e, t) {
                    return !!e?.find((e => String(e)?.toLowerCase() === String(t)?.toLowerCase())) ?? !1
                },
                async createTransaction() {
                    if (this.v$.$touch(),
                    !this.isSubmitButtonValid || this.loading)
                        return;
                    if (this.areInputFieldsHidden)
                        return void (this.isRegionRU ? mp.trigger2("donateWeb.openDonateBrowser", "https://www.kinguin.net/c/112566/majestic-rp?active=1&hideUnavailable=0&phrase=majestic&page=0&size=25&sort=bestseller.total,DESC") : mp.trigger2("donateWeb.openDonateBrowser", "https://www.kinguin.net/c/116842/majestic-rp?active=1&hideUnavailable=0&phrase=majestic&page=0&size=25&sort=bestseller.total,DESC"));
                    if (!this.paymentMethod?.key)
                        return;
                    const e = this.server && "TEST0" !== this.server ? this.server : "RU1"
                      , t = this.login;
                    this.loading = !0;
                    try {
                        let n = this.paymentMethod?.key
                          , r = this.paymentMethod?.key;
                        "br" === this.region && "pix" === r && (r = this.$options.BR_PIXS[Math.round(Math.random())]),
                        this.$options.UNITPAY_PROVIDER.includes(r) ? n = "unitpay" : this.$options.PGS_PROVIDER.includes(r) ? n = "pgs" : this.$options.PAYPALYCH_PROVIDER.includes(r) ? n = "paypalych" : this.$options.TINKOFF_PROVIDER.includes(r) ? n = "tinkoff" : this.$options.MULTIHUB_PROVIDER.includes(r) && (n = "multihub");
                        const {status: o, result: a, errorDescription: i} = await this.createPayment(n, e, t, this.coins, this.email, r);
                        o ? mp.trigger2("donateWeb.openDonateBrowser", a.approvalUrl) : this.showNotify({
                            text: i,
                            type: "error"
                        })
                    } catch (n) {
                        this.showNotify({
                            text: this.$t("cef.donate.createPaymentError"),
                            type: "error"
                        })
                    }
                    this.loading = !1
                },
                hideMail() {
                    this.mailIsHidden = !this.mailIsHidden
                },
                setPaymentMethod(e) {
                    this.paymentMethod = e
                },
                getNextError(e) {
                    return this.v$[e].$errors.length ? this.$t(`cef.donate.replenish.validators.${this.v$[e].$errors[0].$validator}`, this.v$[e].$errors[0].$params) : null
                },
                loadFieldValue(e) {
                    const t = localStorage.getItem(`donate.${e}`);
                    switch (e) {
                    case "email":
                    case "br_document":
                    case "br_name":
                        this[e] = t,
                        this[e]?.length && this.v$[e].$touch();
                        break
                    }
                },
                saveFieldValue(e, t) {
                    localStorage.setItem(`donate.${e}`, t || "")
                },
                clearTooltipTimeout() {
                    null !== this.tooltip.timeout && (clearTimeout(this.tooltip.timeout),
                    this.tooltip.timeout = null)
                },
                onTooltipHide() {
                    this.clearTooltipTimeout(),
                    this.tooltip.isVisible = !1
                },
                onTooltipShow(e, t) {
                    this.onTooltipHide(),
                    this.tooltip.timeout = setTimeout(( () => {
                        const n = e.target;
                        if (!n || !(n instanceof HTMLElement))
                            return;
                        this.tooltip.text = t;
                        const r = n?.getBoundingClientRect();
                        this.tooltip.coords["x"] = (r?.x ?? 1) - 9 / 1080 * this.windowHeight,
                        this.tooltip.coords["y"] = (r?.y ?? 1) - 4 * (r?.height ?? 1),
                        this.tooltip.isVisible = !0
                    }
                    ), this.tooltip.debounce)
                }
            },
            mounted() {
                for (const e of this.$options.STORAGE_FIELDS)
                    this.loadFieldValue(e)
            },
            watch: {
                email(e) {
                    this.saveFieldValue("email", e)
                },
                paymentMethod(e) {
                    this.saveFieldValue("paymentMethod", JSON.stringify(e))
                },
                br_document(e) {
                    this.saveFieldValue("br_document", e)
                },
                br_name(e) {
                    this.saveFieldValue("br_name", e)
                },
                coins(e) {
                    this.coins = e.toString().replace(/[^0-9]/g, "")
                }
            },
            created() {
                this.$_onEvent("C2W:Menu_F4_Donate_Replenish:SetData", this.setData),
                this.$_callClient("W2C:Menu_F4_Donate_Replenish:Ready"),
                de.TB.$on("Menu.Donate.Replenish.onTooltipHide", this.onTooltipHide),
                de.TB.$on("Menu.Donate.Replenish.onTooltipShow", this.onTooltipShow),
                this.email = this.$store.state.main.email
            },
            beforeUnmount() {
                this.clearTooltipTimeout(),
                this.$_offEvent("C2W:Menu_F4_Donate_Replenish:SetData", this.setData),
                this.$_callClient("W2C:Menu_F4_Donate_Replenish:Destroyed"),
                de.TB.$off("Menu.Donate.Replenish.onTooltipHide", this.onTooltipHide),
                de.TB.$off("Menu.Donate.Replenish.onTooltipShow", this.onTooltipShow)
            }
        });
        const me = (0,
        ie.Z)(pe, [["render", W], ["__scopeId", "data-v-6d86d7c8"]]);
        var he = me
    },
    86475: function(e, t, n) {
        n.d(t, {
            b: function() {
                return o
            }
        });
        const r = ["bitcoin", "boleto", "card_brazil", "card_ru3", "card_world1", "cards_eu", "crypto", "direct_banking", "erc20", "ethereum", "pix", "qiwi", "sbp", "steam", "trc20", "yoomoney"]
          , o = [{
            regions: ["DE", "PL"],
            methods: [...r],
            additionalMultiplier: .2
        }]
    },
    73309: function(e, t) {
        t.Z = {
            ru: [{
                key: "sbp"
            }, {
                key: "card_ru1",
                title: "cef.donate.replenish.paymentMethods.card_ru1"
            }, {
                key: "card_ru3",
                title: "cef.donate.replenish.paymentMethods.card_ru3"
            }, {
                key: "card_ua",
                title: "cef.donate.replenish.paymentMethods.card_ua"
            }, {
                key: "card_world1",
                title: "cef.donate.replenish.paymentMethods.card_world1"
            }, {
                key: "steam",
                title: "cef.donate.replenish.paymentMethods.steam"
            }, {
                key: "yoomoney"
            }, {
                key: "trc20",
                title: "USDT TETHER TRC-20"
            }, {
                key: "erc20",
                title: "USDT TETHER ERC-20"
            }, {
                key: "bitcoin",
                title: "cef.donate.replenish.paymentMethods.bitcoin"
            }, {
                key: "ethereum",
                title: "cef.donate.replenish.paymentMethods.ethereum"
            }, {
                key: "crypto",
                title: "cef.donate.replenish.paymentMethods.crypto"
            }, {
                key: "erip"
            }],
            eu: [{
                key: "direct_banking",
                title: "cef.donate.replenish.paymentMethods.direct_banking"
            }, {
                key: "cards_eu",
                title: "cef.donate.replenish.paymentMethods.cards_eu"
            }, {
                key: "paypal",
                disabledBattlePass: !0
            }, {
                key: "kinguin",
                title: "cef.donate.replenish.paymentMethods.kinguin",
                disabledBattlePass: !0
            }, {
                key: "paysafecard"
            }, {
                key: "blik"
            }, {
                key: "giropay"
            }, {
                key: "steam",
                title: "cef.donate.replenish.paymentMethods.steam"
            }, {
                key: "trc20",
                title: "USDT TETHER TRC-20"
            }, {
                key: "erc20",
                title: "USDT TETHER ERC-20"
            }, {
                key: "bitcoin",
                title: "cef.donate.replenish.paymentMethods.bitcoin"
            }, {
                key: "ethereum",
                title: "cef.donate.replenish.paymentMethods.ethereum"
            }, {
                key: "crypto",
                title: "cef.donate.replenish.paymentMethods.crypto"
            }, {
                key: "trustly"
            }, {
                key: "sofort"
            }, {
                key: "ideal"
            }],
            br: [{
                key: "pix"
            }, {
                key: "boleto",
                title: "cef.donate.replenish.paymentMethods.boleto"
            }, {
                key: "cards_br",
                title: "card"
            }],
            ru2: [{
                key: "cards_pgs",
                title: "cef.donate.replenish.paymentMethods.cards_pgs"
            }, {
                key: "qiwi"
            }, {
                key: "yoomoney"
            }, {
                key: "steam",
                title: "cef.donate.replenish.paymentMethods.steam"
            }, {
                key: "trc20",
                title: "USDT TETHER TRC-20"
            }, {
                key: "erc20",
                title: "USDT TETHER ERC-20"
            }, {
                key: "bitcoin",
                title: "cef.donate.replenish.paymentMethods.bitcoin"
            }, {
                key: "ethereum",
                title: "cef.donate.replenish.paymentMethods.ethereum"
            }, {
                key: "crypto",
                title: "cef.donate.replenish.paymentMethods.crypto"
            }]
        }
    },
    76204: function(e, t, n) {
        n.d(t, {
            ZP: function() {
                return D
            },
            Xw: function() {
                return D
            }
        });
        var r = n(78221);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            return Object.keys(e).reduce(( (n, o) => (t.includes(o) || (n[o] = (0,
            r.unref)(e[o])),
            n)), {})
        }
        function l(e) {
            return "function" === typeof e
        }
        function c(e) {
            return (0,
            r.isReactive)(e) || (0,
            r.isReadonly)(e)
        }
        function d(e, t, n) {
            let r = e;
            const o = t.split(".");
            for (let a = 0; a < o.length; a++) {
                if (!r[o[a]])
                    return n;
                r = r[o[a]]
            }
            return r
        }
        function u(e, t, n) {
            return (0,
            r.computed)(( () => e.some((e => d(t, e, {
                [n]: !1
            })[n]))))
        }
        function p(e, t, n) {
            return (0,
            r.computed)(( () => e.reduce(( (e, r) => {
                const o = d(t, r, {
                    [n]: !1
                })[n] || [];
                return e.concat(o)
            }
            ), [])))
        }
        function m(e, t, n, o) {
            return e.call(o, (0,
            r.unref)(t), (0,
            r.unref)(n), o)
        }
        function h(e) {
            return void 0 !== e.$valid ? !e.$valid : !e
        }
        function v(e, t, n, o, a, i, s) {
            let {$lazy: l, $rewardEarly: c} = a
              , d = arguments.length > 7 && void 0 !== arguments[7] ? arguments[7] : []
              , u = arguments.length > 8 ? arguments[8] : void 0
              , p = arguments.length > 9 ? arguments[9] : void 0
              , v = arguments.length > 10 ? arguments[10] : void 0;
            const $ = (0,
            r.ref)(!!o.value)
              , y = (0,
            r.ref)(0);
            n.value = !1;
            const f = (0,
            r.watch)([t, o].concat(d, v), ( () => {
                if (l && !o.value || c && !p.value && !n.value)
                    return;
                let r;
                try {
                    r = m(e, t, u, s)
                } catch (a) {
                    r = Promise.reject(a)
                }
                y.value++,
                n.value = !!y.value,
                $.value = !1,
                Promise.resolve(r).then((e => {
                    y.value--,
                    n.value = !!y.value,
                    i.value = e,
                    $.value = h(e)
                }
                )).catch((e => {
                    y.value--,
                    n.value = !!y.value,
                    i.value = e,
                    $.value = !0
                }
                ))
            }
            ), {
                immediate: !0,
                deep: "object" === typeof t
            });
            return {
                $invalid: $,
                $unwatch: f
            }
        }
        function $(e, t, n, o, a, i, s, l) {
            let {$lazy: c, $rewardEarly: d} = o;
            const u = () => ({})
              , p = (0,
            r.computed)(( () => {
                if (c && !n.value || d && !l.value)
                    return !1;
                let r = !0;
                try {
                    const n = m(e, t, s, i);
                    a.value = n,
                    r = h(n)
                } catch (o) {
                    a.value = o
                }
                return r
            }
            ));
            return {
                $unwatch: u,
                $invalid: p
            }
        }
        function y(e, t, n, o, a, i, c, d, u, p, m) {
            const h = (0,
            r.ref)(!1)
              , y = e.$params || {}
              , f = (0,
            r.ref)(null);
            let g, _;
            e.$async ? ({$invalid: g, $unwatch: _} = v(e.$validator, t, h, n, o, f, a, e.$watchTargets, u, p, m)) : ({$invalid: g, $unwatch: _} = $(e.$validator, t, n, o, f, a, u, p));
            const b = e.$message
              , k = l(b) ? (0,
            r.computed)(( () => b(s({
                $pending: h,
                $invalid: g,
                $params: s(y),
                $model: t,
                $response: f,
                $validator: i,
                $propertyPath: d,
                $property: c
            })))) : b || "";
            return {
                $message: k,
                $params: y,
                $pending: h,
                $invalid: g,
                $response: f,
                $unwatch: _
            }
        }
        function f() {
            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
            const t = (0,
            r.unref)(e)
              , n = Object.keys(t)
              , o = {}
              , a = {}
              , i = {};
            let s = null;
            return n.forEach((e => {
                const n = t[e];
                switch (!0) {
                case l(n.$validator):
                    o[e] = n;
                    break;
                case l(n):
                    o[e] = {
                        $validator: n
                    };
                    break;
                case "$validationGroups" === e:
                    s = n;
                    break;
                case e.startsWith("$"):
                    i[e] = n;
                    break;
                default:
                    a[e] = n
                }
            }
            )),
            {
                rules: o,
                nestedValidators: a,
                config: i,
                validationGroups: s
            }
        }
        const g = "__root";
        function _(e, t, n, o, a, i, s, l, c) {
            const d = Object.keys(e)
              , u = o.get(a, e)
              , p = (0,
            r.ref)(!1)
              , m = (0,
            r.ref)(!1)
              , h = (0,
            r.ref)(0);
            if (u) {
                if (!u.$partial)
                    return u;
                u.$unwatch(),
                p.value = u.$dirty.value
            }
            const v = {
                $dirty: p,
                $path: a,
                $touch: () => {
                    p.value || (p.value = !0)
                }
                ,
                $reset: () => {
                    p.value && (p.value = !1)
                }
                ,
                $commit: () => {}
            };
            return d.length ? (d.forEach((r => {
                v[r] = y(e[r], t, v.$dirty, i, s, r, n, a, c, m, h)
            }
            )),
            v.$externalResults = (0,
            r.computed)(( () => l.value ? [].concat(l.value).map(( (e, t) => ({
                $propertyPath: a,
                $property: n,
                $validator: "$externalResults",
                $uid: `${a}-externalResult-${t}`,
                $message: e,
                $params: {},
                $response: null,
                $pending: !1
            }))) : [])),
            v.$invalid = (0,
            r.computed)(( () => {
                const e = d.some((e => (0,
                r.unref)(v[e].$invalid)));
                return m.value = e,
                !!v.$externalResults.value.length || e
            }
            )),
            v.$pending = (0,
            r.computed)(( () => d.some((e => (0,
            r.unref)(v[e].$pending))))),
            v.$error = (0,
            r.computed)(( () => !!v.$dirty.value && (v.$pending.value || v.$invalid.value))),
            v.$silentErrors = (0,
            r.computed)(( () => d.filter((e => (0,
            r.unref)(v[e].$invalid))).map((e => {
                const t = v[e];
                return (0,
                r.reactive)({
                    $propertyPath: a,
                    $property: n,
                    $validator: e,
                    $uid: `${a}-${e}`,
                    $message: t.$message,
                    $params: t.$params,
                    $response: t.$response,
                    $pending: t.$pending
                })
            }
            )).concat(v.$externalResults.value))),
            v.$errors = (0,
            r.computed)(( () => v.$dirty.value ? v.$silentErrors.value : [])),
            v.$unwatch = () => d.forEach((e => {
                v[e].$unwatch()
            }
            )),
            v.$commit = () => {
                m.value = !0,
                h.value = Date.now()
            }
            ,
            o.set(a, e, v),
            v) : (u && o.set(a, e, v),
            v)
        }
        function b(e, t, n, r, o, a, i) {
            const s = Object.keys(e);
            return s.length ? s.reduce(( (s, l) => (s[l] = E({
                validations: e[l],
                state: t,
                key: l,
                parentKey: n,
                resultsCache: r,
                globalConfig: o,
                instance: a,
                externalResults: i
            }),
            s)), {}) : {}
        }
        function k(e, t, n) {
            const o = (0,
            r.computed)(( () => [t, n].filter((e => e)).reduce(( (e, t) => e.concat(Object.values((0,
            r.unref)(t)))), [])))
              , a = (0,
            r.computed)({
                get() {
                    return e.$dirty.value || !!o.value.length && o.value.every((e => e.$dirty))
                },
                set(t) {
                    e.$dirty.value = t
                }
            })
              , i = (0,
            r.computed)(( () => {
                const t = (0,
                r.unref)(e.$silentErrors) || []
                  , n = o.value.filter((e => ((0,
                r.unref)(e).$silentErrors || []).length)).reduce(( (e, t) => e.concat(...t.$silentErrors)), []);
                return t.concat(n)
            }
            ))
              , s = (0,
            r.computed)(( () => {
                const t = (0,
                r.unref)(e.$errors) || []
                  , n = o.value.filter((e => ((0,
                r.unref)(e).$errors || []).length)).reduce(( (e, t) => e.concat(...t.$errors)), []);
                return t.concat(n)
            }
            ))
              , l = (0,
            r.computed)(( () => o.value.some((e => e.$invalid)) || (0,
            r.unref)(e.$invalid) || !1))
              , c = (0,
            r.computed)(( () => o.value.some((e => (0,
            r.unref)(e.$pending))) || (0,
            r.unref)(e.$pending) || !1))
              , d = (0,
            r.computed)(( () => o.value.some((e => e.$dirty)) || o.value.some((e => e.$anyDirty)) || a.value))
              , u = (0,
            r.computed)(( () => !!a.value && (c.value || l.value)))
              , p = () => {
                e.$touch(),
                o.value.forEach((e => {
                    e.$touch()
                }
                ))
            }
              , m = () => {
                e.$commit(),
                o.value.forEach((e => {
                    e.$commit()
                }
                ))
            }
              , h = () => {
                e.$reset(),
                o.value.forEach((e => {
                    e.$reset()
                }
                ))
            }
            ;
            return o.value.length && o.value.every((e => e.$dirty)) && p(),
            {
                $dirty: a,
                $errors: s,
                $invalid: l,
                $anyDirty: d,
                $error: u,
                $pending: c,
                $touch: p,
                $reset: h,
                $silentErrors: i,
                $commit: m
            }
        }
        function E(e) {
            let {validations: t, state: n, key: o, parentKey: i, childResults: s, resultsCache: l, globalConfig: c={}, instance: d, externalResults: m} = e;
            const h = i ? `${i}.${o}` : o
              , {rules: v, nestedValidators: $, config: y, validationGroups: E} = f(t)
              , V = a(a({}, c), y)
              , C = o ? (0,
            r.computed)(( () => {
                const e = (0,
                r.unref)(n);
                return e ? (0,
                r.unref)(e[o]) : void 0
            }
            )) : n
              , w = a({}, (0,
            r.unref)(m) || {})
              , N = (0,
            r.computed)(( () => {
                const e = (0,
                r.unref)(m);
                return o ? e ? (0,
                r.unref)(e[o]) : void 0 : e
            }
            ))
              , x = _(v, C, o, l, h, V, d, N, n)
              , R = b($, C, h, l, V, d, N)
              , S = {};
            E && Object.entries(E).forEach((e => {
                let[t,n] = e;
                S[t] = {
                    $invalid: u(n, R, "$invalid"),
                    $error: u(n, R, "$error"),
                    $pending: u(n, R, "$pending"),
                    $errors: p(n, R, "$errors"),
                    $silentErrors: p(n, R, "$silentErrors")
                }
            }
            ));
            const {$dirty: D, $errors: B, $invalid: T, $anyDirty: M, $error: P, $pending: O, $touch: I, $reset: j, $silentErrors: F, $commit: L} = k(x, R, s)
              , A = o ? (0,
            r.computed)({
                get: () => (0,
                r.unref)(C),
                set: e => {
                    D.value = !0;
                    const t = (0,
                    r.unref)(n)
                      , a = (0,
                    r.unref)(m);
                    a && (a[o] = w[o]),
                    (0,
                    r.isRef)(t[o]) ? t[o].value = e : t[o] = e
                }
            }) : null;
            async function H() {
                return I(),
                V.$rewardEarly && (L(),
                await (0,
                r.nextTick)()),
                await (0,
                r.nextTick)(),
                new Promise((e => {
                    if (!O.value)
                        return e(!T.value);
                    const t = (0,
                    r.watch)(O, ( () => {
                        e(!T.value),
                        t()
                    }
                    ))
                }
                ))
            }
            function U(e) {
                return (s.value || {})[e]
            }
            function z() {
                (0,
                r.isRef)(m) ? m.value = w : 0 === Object.keys(w).length ? Object.keys(m).forEach((e => {
                    delete m[e]
                }
                )) : Object.assign(m, w)
            }
            return o && V.$autoDirty && (0,
            r.watch)(C, ( () => {
                D.value || I();
                const e = (0,
                r.unref)(m);
                e && (e[o] = w[o])
            }
            ), {
                flush: "sync"
            }),
            (0,
            r.reactive)(a(a(a({}, x), {}, {
                $model: A,
                $dirty: D,
                $error: P,
                $errors: B,
                $invalid: T,
                $anyDirty: M,
                $pending: O,
                $touch: I,
                $reset: j,
                $path: h || g,
                $silentErrors: F,
                $validate: H,
                $commit: L
            }, s && {
                $getResultsForChild: U,
                $clearExternalResults: z,
                $validationGroups: S
            }), R))
        }
        class V {
            constructor() {
                this.storage = new Map
            }
            set(e, t, n) {
                this.storage.set(e, {
                    rules: t,
                    result: n
                })
            }
            checkRulesValidity(e, t, n) {
                const o = Object.keys(n)
                  , a = Object.keys(t);
                if (a.length !== o.length)
                    return !1;
                const i = a.every((e => o.includes(e)));
                return !!i && a.every((e => !t[e].$params || Object.keys(t[e].$params).every((o => (0,
                r.unref)(n[e].$params[o]) === (0,
                r.unref)(t[e].$params[o])))))
            }
            get(e, t) {
                const n = this.storage.get(e);
                if (!n)
                    return;
                const {rules: r, result: o} = n
                  , a = this.checkRulesValidity(e, t, r)
                  , i = o.$unwatch ? o.$unwatch : () => ({});
                return a ? o : {
                    $dirty: o.$dirty,
                    $partial: !0,
                    $unwatch: i
                }
            }
        }
        const C = {
            COLLECT_ALL: !0,
            COLLECT_NONE: !1
        }
          , w = Symbol("vuelidate#injectChildResults")
          , N = Symbol("vuelidate#removeChildResults");
        function x(e) {
            let {$scope: t, instance: n} = e;
            const o = {}
              , a = (0,
            r.ref)([])
              , i = (0,
            r.computed)(( () => a.value.reduce(( (e, t) => (e[t] = (0,
            r.unref)(o[t]),
            e)), {})));
            function s(e, n) {
                let {$registerAs: r, $scope: i, $stopPropagation: s} = n;
                s || t === C.COLLECT_NONE || i === C.COLLECT_NONE || t !== C.COLLECT_ALL && t !== i || (o[r] = e,
                a.value.push(r))
            }
            function l(e) {
                a.value = a.value.filter((t => t !== e)),
                delete o[e]
            }
            n.__vuelidateInjectInstances = [].concat(n.__vuelidateInjectInstances || [], s),
            n.__vuelidateRemoveInstances = [].concat(n.__vuelidateRemoveInstances || [], l);
            const c = (0,
            r.inject)(w, []);
            (0,
            r.provide)(w, n.__vuelidateInjectInstances);
            const d = (0,
            r.inject)(N, []);
            return (0,
            r.provide)(N, n.__vuelidateRemoveInstances),
            {
                childResults: i,
                sendValidationResultsToParent: c,
                removeValidationResultsFromParent: d
            }
        }
        function R(e) {
            return new Proxy(e,{
                get(e, t) {
                    return "object" === typeof e[t] ? R(e[t]) : (0,
                    r.computed)(( () => e[t]))
                }
            })
        }
        let S = 0;
        function D(e, t) {
            var n;
            let o = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            1 === arguments.length && (o = e,
            e = void 0,
            t = void 0);
            let {$registerAs: i, $scope: s=C.COLLECT_ALL, $stopPropagation: d, $externalResults: u, currentVueInstance: p} = o;
            const m = p || (null === (n = (0,
            r.getCurrentInstance)()) || void 0 === n ? void 0 : n.proxy)
              , h = m ? m.$options : {};
            i || (S += 1,
            i = `_vuelidate_${S}`);
            const v = (0,
            r.ref)({})
              , $ = new V
              , {childResults: y, sendValidationResultsToParent: f, removeValidationResultsFromParent: g} = m ? x({
                $scope: s,
                instance: m
            }) : {
                childResults: (0,
                r.ref)({})
            };
            if (!e && h.validations) {
                const e = h.validations;
                t = (0,
                r.ref)({}),
                (0,
                r.onBeforeMount)(( () => {
                    t.value = m,
                    (0,
                    r.watch)(( () => l(e) ? e.call(t.value, new R(t.value)) : e), (e => {
                        v.value = E({
                            validations: e,
                            state: t,
                            childResults: y,
                            resultsCache: $,
                            globalConfig: o,
                            instance: m,
                            externalResults: u || m.vuelidateExternalResults
                        })
                    }
                    ), {
                        immediate: !0
                    })
                }
                )),
                o = h.validationsConfig || o
            } else {
                const n = (0,
                r.isRef)(e) || c(e) ? e : (0,
                r.reactive)(e || {});
                (0,
                r.watch)(n, (e => {
                    v.value = E({
                        validations: e,
                        state: t,
                        childResults: y,
                        resultsCache: $,
                        globalConfig: o,
                        instance: null !== m && void 0 !== m ? m : {},
                        externalResults: u
                    })
                }
                ), {
                    immediate: !0
                })
            }
            return m && (f.forEach((e => e(v, {
                $registerAs: i,
                $scope: s,
                $stopPropagation: d
            }))),
            (0,
            r.onBeforeUnmount)(( () => g.forEach((e => e(i)))))),
            (0,
            r.computed)(( () => a(a({}, (0,
            r.unref)(v.value)), y.value)))
        }
    },
    63697: function(e, t, n) {
        n.d(t, {
            Fq: function() {
                return b
            },
            Pf: function() {
                return E
            },
            Do: function() {
                return x
            },
            BM: function() {
                return g
            },
            BS: function() {
                return S
            },
            PW: function() {
                return A
            },
            Ei: function() {
                return B
            },
            uv: function() {
                return F
            },
            uR: function() {
                return C
            },
            C1: function() {
                return M
            },
            sH: function() {
                return O
            }
        });
        var r = n(78221);
        function o(e, t) {
            var n = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var r = Object.getOwnPropertySymbols(e);
                t && (r = r.filter((function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                }
                ))),
                n.push.apply(n, r)
            }
            return n
        }
        function a(e) {
            for (var t = 1; t < arguments.length; t++) {
                var n = null != arguments[t] ? arguments[t] : {};
                t % 2 ? o(Object(n), !0).forEach((function(t) {
                    i(e, t, n[t])
                }
                )) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : o(Object(n)).forEach((function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                }
                ))
            }
            return e
        }
        function i(e, t, n) {
            return t in e ? Object.defineProperty(e, t, {
                value: n,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = n,
            e
        }
        function s(e) {
            return "function" === typeof e
        }
        function l(e) {
            return null !== e && "object" === typeof e && !Array.isArray(e)
        }
        function c(e) {
            return s(e.$validator) ? a({}, e) : {
                $validator: e
            }
        }
        function d(e) {
            return "object" === typeof e ? e.$valid : e
        }
        function u(e) {
            return e.$validator || e
        }
        function p(e, t) {
            if (!l(e))
                throw new Error('[@vuelidate/validators]: First parameter to "withParams" should be an object, provided ' + typeof e);
            if (!l(t) && !s(t))
                throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
            const n = c(t);
            return n.$params = a(a({}, n.$params || {}), e),
            n
        }
        function m(e, t) {
            if (!s(e) && "string" !== typeof (0,
            r.unref)(e))
                throw new Error('[@vuelidate/validators]: First parameter to "withMessage" should be string or a function returning a string, provided ' + typeof e);
            if (!l(t) && !s(t))
                throw new Error("[@vuelidate/validators]: Validator must be a function or object with $validator parameter");
            const n = c(t);
            return n.$message = e,
            n
        }
        function h(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [];
            const n = c(e);
            return a(a({}, n), {}, {
                $async: !0,
                $watchTargets: t
            })
        }
        function v(e) {
            return {
                $validator(t) {
                    for (var n = arguments.length, o = new Array(n > 1 ? n - 1 : 0), a = 1; a < n; a++)
                        o[a - 1] = arguments[a];
                    return (0,
                    r.unref)(t).reduce(( (t, n, r) => {
                        const a = Object.entries(n).reduce(( (t, a) => {
                            let[i,s] = a;
                            const l = e[i] || {}
                              , c = Object.entries(l).reduce(( (e, t) => {
                                let[a,l] = t;
                                const c = u(l)
                                  , p = c.call(this, s, n, r, ...o)
                                  , m = d(p);
                                if (e.$data[a] = p,
                                e.$data.$invalid = !m || !!e.$data.$invalid,
                                e.$data.$error = e.$data.$invalid,
                                !m) {
                                    let t = l.$message || "";
                                    const n = l.$params || {};
                                    "function" === typeof t && (t = t({
                                        $pending: !1,
                                        $invalid: !m,
                                        $params: n,
                                        $model: s,
                                        $response: p
                                    })),
                                    e.$errors.push({
                                        $property: i,
                                        $message: t,
                                        $params: n,
                                        $response: p,
                                        $model: s,
                                        $pending: !1,
                                        $validator: a
                                    })
                                }
                                return {
                                    $valid: e.$valid && m,
                                    $data: e.$data,
                                    $errors: e.$errors
                                }
                            }
                            ), {
                                $valid: !0,
                                $data: {},
                                $errors: []
                            });
                            return t.$data[i] = c.$data,
                            t.$errors[i] = c.$errors,
                            {
                                $valid: t.$valid && c.$valid,
                                $data: t.$data,
                                $errors: t.$errors
                            }
                        }
                        ), {
                            $valid: !0,
                            $data: {},
                            $errors: {}
                        });
                        return {
                            $valid: t.$valid && a.$valid,
                            $data: t.$data.concat(a.$data),
                            $errors: t.$errors.concat(a.$errors)
                        }
                    }
                    ), {
                        $valid: !0,
                        $data: [],
                        $errors: []
                    })
                },
                $message: e => {
                    let {$response: t} = e;
                    return t ? t.$errors.map((e => Object.values(e).map((e => e.map((e => e.$message)))).reduce(( (e, t) => e.concat(t)), []))) : []
                }
            }
        }
        const $ = e => {
            if (e = (0,
            r.unref)(e),
            Array.isArray(e))
                return !!e.length;
            if (void 0 === e || null === e)
                return !1;
            if (!1 === e)
                return !0;
            if (e instanceof Date)
                return !isNaN(e.getTime());
            if ("object" === typeof e) {
                for (let t in e)
                    return !0;
                return !1
            }
            return !!String(e).length
        }
          , y = e => (e = (0,
        r.unref)(e),
        Array.isArray(e) ? e.length : "object" === typeof e ? Object.keys(e).length : String(e).length);
        function f() {
            for (var e = arguments.length, t = new Array(e), n = 0; n < e; n++)
                t[n] = arguments[n];
            return e => (e = (0,
            r.unref)(e),
            !$(e) || t.every((t => (t.lastIndex = 0,
            t.test(e)))))
        }
        var g = Object.freeze({
            __proto__: null,
            forEach: v,
            len: y,
            normalizeValidatorObject: c,
            regex: f,
            req: $,
            unwrap: r.unref,
            unwrapNormalizedValidator: u,
            unwrapValidatorResponse: d,
            withAsync: h,
            withMessage: m,
            withParams: p
        })
          , _ = f(/^[a-zA-Z]*$/)
          , b = {
            $validator: _,
            $message: "The value is not alphabetical",
            $params: {
                type: "alpha"
            }
        }
          , k = f(/^[a-zA-Z0-9]*$/)
          , E = {
            $validator: k,
            $message: "The value must be alpha-numeric",
            $params: {
                type: "alphaNum"
            }
        }
          , V = f(/^\d*(\.\d+)?$/)
          , C = {
            $validator: V,
            $message: "Value must be numeric",
            $params: {
                type: "numeric"
            }
        };
        const w = /^(?:[A-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9]{2,}(?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/i;
        var N = f(w)
          , x = {
            $validator: N,
            $message: "Value is not a valid email address",
            $params: {
                type: "email"
            }
        };
        function R(e) {
            return t => !$(t) || y(t) <= (0,
            r.unref)(e)
        }
        function S(e) {
            return {
                $validator: R(e),
                $message: e => {
                    let {$params: t} = e;
                    return `The maximum length allowed is ${t.max}`
                }
                ,
                $params: {
                    max: e,
                    type: "maxLength"
                }
            }
        }
        function D(e) {
            return t => !$(t) || y(t) >= (0,
            r.unref)(e)
        }
        function B(e) {
            return {
                $validator: D(e),
                $message: e => {
                    let {$params: t} = e;
                    return `This field should be at least ${t.min} characters long`
                }
                ,
                $params: {
                    min: e,
                    type: "minLength"
                }
            }
        }
        function T(e) {
            return "string" === typeof e && (e = e.trim()),
            $(e)
        }
        var M = {
            $validator: T,
            $message: "Value is required",
            $params: {
                type: "required"
            }
        };
        function P(e) {
            return t => (0,
            r.unref)(t) === (0,
            r.unref)(e)
        }
        function O(e) {
            let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "other";
            return {
                $validator: P(e),
                $message: e => `The value must be equal to the ${t} value`,
                $params: {
                    equalTo: e,
                    otherName: t,
                    type: "sameAs"
                }
            }
        }
        const I = /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z0-9\u00a1-\uffff][a-z0-9\u00a1-\uffff_-]{0,62})?[a-z0-9\u00a1-\uffff]\.)+(?:[a-z\u00a1-\uffff]{2,}\.?))(?::\d{2,5})?(?:[/?#]\S*)?$/i;
        f(I);
        function j(e) {
            return t => !$(t) || (!/\s/.test(t) || t instanceof Date) && +t >= +(0,
            r.unref)(e)
        }
        function F(e) {
            return {
                $validator: j(e),
                $message: e => {
                    let {$params: t} = e;
                    return `The minimum value allowed is ${t.min}`
                }
                ,
                $params: {
                    min: e,
                    type: "minValue"
                }
            }
        }
        function L(e) {
            return t => !$(t) || (!/\s/.test(t) || t instanceof Date) && +t <= +(0,
            r.unref)(e)
        }
        var A = e => ({
            $validator: L(e),
            $message: e => {
                let {$params: t} = e;
                return `The maximum value allowed is ${t.max}`
            }
            ,
            $params: {
                max: e,
                type: "maxValue"
            }
        });
        f(/(^[0-9]*$)|(^-[0-9]+$)/),
        f(/^[-]?\d*(\.\d+)?$/)
    }
}]);
