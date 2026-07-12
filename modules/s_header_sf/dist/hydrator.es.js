const { defineComponent, computed, ref, onMounted, onUnmounted, openBlock, createElementBlock, createElementVNode, normalizeStyle, normalizeClass, Fragment, renderList, withModifiers, toDisplayString, createCommentVNode, createVNode, Transition, withCtx, withDirectives, withKeys, vModelText, nextTick, createBlock, createApp } = window.Vue;
const _hoisted_1 = { class: "relative z-10 w-full max-w-[1440px] mx-auto" }, _hoisted_2 = { class: "flex gap-7 text-white/95 font-medium" }, _hoisted_3 = ["href", "onClick"], _hoisted_4 = { class: "flex items-center gap-5 relative" }, _hoisted_5 = { class: "relative" }, _hoisted_6 = { class: "uppercase font-bold text-[13px]" }, _hoisted_7 = {
  key: 0,
  class: "absolute right-0 top-full mt-2 w-36 bg-white dark:bg-[#2b2b2b] rounded-xl shadow-2xl py-1.5 z-50 text-gray-800 dark:text-gray-200 border border-gray-100 dark:border-gray-700"
}, _hoisted_8 = ["onClick"], _hoisted_9 = { class: "text-[11px] opacity-60 font-mono" }, _hoisted_10 = { href: "/" }, _hoisted_11 = ["src"], _hoisted_12 = { class: "order-3 w-full mt-2 lg:order-none lg:mt-0 lg:flex-1 relative group z-50" }, _hoisted_13 = { class: "relative" }, _hoisted_14 = {
  key: 0,
  class: "hidden lg:block absolute top-[50px] left-0 w-full bg-white text-gray-800 rounded-b-[25px] shadow-2xl overflow-hidden z-[60] border border-gray-100"
}, _hoisted_15 = { class: "max-h-[420px] overflow-y-auto" }, _hoisted_16 = ["onClick"], _hoisted_17 = ["innerHTML"], _hoisted_18 = {
  key: 0,
  class: "px-6 py-5 text-gray-400 text-[13px] flex items-center gap-2"
}, _hoisted_19 = { class: "flex items-center gap-2 lg:gap-5 ml-auto order-2 lg:order-none" }, _hoisted_20 = ["href"], _hoisted_21 = ["href"], _hoisted_22 = ["href"], _hoisted_23 = ["href"], _hoisted_24 = { class: "relative" }, _hoisted_25 = {
  key: 0,
  class: "absolute -top-1 -right-2 bg-[#f44336] text-white text-[10px] font-bold px-1.5 py-0.5 rounded-full border-2 border-[#481173] min-w-[18px] text-center shadow-md"
}, _hoisted_26 = {
  key: 0,
  class: "fixed inset-0 bg-white z-[999] flex flex-col lg:hidden"
}, _hoisted_27 = { class: "flex items-center gap-3 p-3.5 border-b border-gray-200 shadow-sm bg-white" }, _hoisted_28 = { class: "flex-1 relative" }, _hoisted_29 = { class: "flex-1 overflow-y-auto bg-white" }, _hoisted_30 = {
  key: 0,
  class: "divide-y divide-gray-50"
}, _hoisted_31 = ["onClick"], _hoisted_32 = ["innerHTML"], _hoisted_33 = {
  key: 1,
  class: "p-8 text-center text-gray-400"
}, _hoisted_34 = {
  key: 2,
  class: "p-8 text-center text-gray-400"
}, _hoisted_35 = {
  key: 0,
  class: "fixed top-0 left-0 h-full w-[340px] bg-white dark:bg-[#1a1a1a] z-[101] shadow-2xl flex flex-col text-gray-800 dark:text-gray-200"
}, _hoisted_36 = { class: "relative overflow-hidden" }, _hoisted_37 = { class: "bg-gradient-to-r from-[#cb11ab] to-[#7b2ff2] px-6 py-4 flex items-center justify-between" }, _hoisted_38 = { class: "flex-1 overflow-y-auto" }, _hoisted_39 = { class: "py-2" }, _hoisted_40 = ["href", "onClick"], _hoisted_41 = ["src", "alt"], _hoisted_42 = { class: "text-[14.5px] font-medium text-gray-700 dark:text-gray-200 group-hover:text-[#cb11ab] dark:group-hover:text-[#cb11ab] transition-colors capitalize" }, API_URL = "https://fastapi.dryutil.1mn.io/client/api/i/ona/product_dir?typ=search_suggestion", API_TOKEN = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImYwZTNlMDRiLTVkNDAtNDg1ZS05OGU4LWEzOTI3NWU3MzM0OCIsInNlY3VyaXR5Ijp7InBhcnR5IjpbInBhcnR5XzEiLCJwYXJ0eV8yIl19LCJzdWIiOiJmMGUzZTA0Yi01ZDQwLTQ4NWUtOThlOC1hMzkyNzVlNzMzNDgiLCJpYXQiOjE3NjU4MTI4Mjh9.OoClnPtlxI71L-e555nbNSmenmGufxewp78SlmdZCNxeuauXao5RRvqwOKQ77SJFqJXk0ng6GZ7VOgYECdEf-3k1UGX7w1NE_D5A6SP3UkVsSG8orYACFuvTyesbFwkpnEhdu0PBd6n8wuLkgU6nZ1bLDzKVg1zd8fFeJrwmUqk", _sfc_main$1 = /* @__PURE__ */ defineComponent({
  __name: "header",
  props: {
    _p: {},
    _$p: {}
  },
  setup(__props) {
    const headerNature = computed(() => __props._$p.data.curr.data?.headerNature || "sticky"), headerSize = computed(() => __props._$p.data.curr.data?.headerSize || "medium");
    computed(() => __props._$p.data.curr.data?.designMode ?? !1);
    const topMenuItemsFromApi = ref(null), topMenuItems = computed(() => {
      if (topMenuItemsFromApi.value) return topMenuItemsFromApi.value;
      const t = __props._$p.data.curr.data?.top_menu;
      return t && t.l && Array.isArray(t.l) ? t.l : [];
    }), navigateItem = (t) => {
      const e = t.href || "#";
      e !== "#" && (e.startsWith("http://") || e.startsWith("https://") ? window.open(e, "_blank") : window.history.pushState({}, "", e), console.log("[menu] Navigated to:", e));
    }, initTopMenuApi = async () => {
      const topMenu = __props._$p.data.curr.data?.top_menu;
      if (!(!topMenu || topMenu.mode !== "api" || !topMenu.api?.url))
        try {
          const fetchOptions = {
            method: topMenu.api.method || "GET",
            headers: topMenu.api.headers || {}
          };
          topMenu.api.body && topMenu.api.method !== "GET" && (fetchOptions.body = JSON.stringify(topMenu.api.body));
          const response = await fetch(topMenu.api.url, fetchOptions);
          if (!response.ok) throw new Error(`API error: ${response.status}`);
          const json = await response.json();
          let data;
          if (topMenu.api.response_path)
            try {
              data = eval(`${topMenu.api.response_path}`);
            } catch (t) {
              throw new Error(`Invalid response_path "${topMenu.api.response_path}": ${t}`);
            }
          else
            data = json;
          if (console.log("[top_menu] Resolved data:", data), Array.isArray(data) && topMenu.api.response_mapping) {
            const t = topMenu.api.limit;
            t && t > 0 && (data = data.slice(0, t));
            const e = topMenu.api.response_mapping;
            topMenuItemsFromApi.value = data.map((o) => ({
              name: o[e.name || "name"] || "",
              href: o[e.href || "href"] || "#",
              icon: e.icon && o[e.icon] || ""
            }));
          } else if (Array.isArray(data)) {
            const t = topMenu.api.limit;
            t && t > 0 && (data = data.slice(0, t)), topMenuItemsFromApi.value = data;
          }
          console.log("[top_menu] API items loaded:", topMenuItemsFromApi.value);
        } catch (t) {
          console.warn("[top_menu] API fetch failed, using static items:", t);
        }
    }, isHeaderVisible = ref(!0), lastScrollY = ref(0), headerNatureStyle = computed(() => {
      const t = headerNature.value, e = { transition: "transform 0.35s cubic-bezier(0.16, 1, 0.3, 1)" };
      return t === "sticky" ? { ...e, position: "sticky", top: "0", zIndex: "50" } : t === "fixed_top" ? { ...e, position: "fixed", top: "0", width: "100%", zIndex: "50" } : t === "auto_hide" || t === "reveal_on_scroll_up" ? {
        ...e,
        position: "sticky",
        top: "0",
        zIndex: "50",
        transform: isHeaderVisible.value ? "translateY(0)" : "translateY(-100%)"
      } : { ...e, position: "relative" };
    }), handleScroll = () => {
      const t = window.scrollY, e = headerNature.value;
      e === "auto_hide" ? isHeaderVisible.value = t <= 80 || t < lastScrollY.value : e === "reveal_on_scroll_up" ? isHeaderVisible.value = t < lastScrollY.value || t <= 0 : isHeaderVisible.value = !0, lastScrollY.value = t;
    }, topBarClasses = computed(() => {
      switch (headerSize.value) {
        case "small":
          return "px-4 py-1 text-[11px]";
        case "large":
          return "px-8 py-3.5 text-[14px]";
        default:
          return "px-6 py-2 text-[13px]";
      }
    }), mainBarClasses = computed(() => {
      switch (headerSize.value) {
        case "small":
          return "gap-3 px-3 pb-2 pt-1.5 lg:pt-1.5 lg:gap-4";
        case "large":
          return "gap-5 px-6 pb-6 pt-4 lg:pt-4 lg:gap-8";
        default:
          return "gap-4 px-4 pb-4 pt-2.5 lg:pt-2.5 lg:gap-6";
      }
    }), logoSizeStyle = computed(() => {
      const t = __props._$p.data.curr.data?.logo?.style || "width:8vh; height:8vh";
      switch (headerSize.value) {
        case "small":
          return "width:5vh; height:5vh";
        case "large":
          return "width:11vh; height:11vh";
        default:
          return t;
      }
    }), isSidebarOpen = ref(!1), sideMenuItemsFromApi = ref(null), catalogItems = computed(() => {
      if (sideMenuItemsFromApi.value) return sideMenuItemsFromApi.value;
      const t = __props._$p.data.curr.data?.side_menu;
      return t && t.l && Array.isArray(t.l) ? t.l : topMenuItems.value;
    }), initSideMenuApi = async () => {
      const sideMenu = __props._$p.data.curr.data?.side_menu;
      if (!(!sideMenu || sideMenu.mode !== "api" || !sideMenu.api?.url))
        try {
          const fetchOptions = {
            method: sideMenu.api.method || "GET",
            headers: sideMenu.api.headers || {}
          };
          sideMenu.api.body && sideMenu.api.method !== "GET" && (fetchOptions.body = JSON.stringify(sideMenu.api.body));
          const response = await fetch(sideMenu.api.url, fetchOptions);
          if (!response.ok) throw new Error(`API error: ${response.status}`);
          const json = await response.json();
          let data;
          if (sideMenu.api.response_path)
            try {
              data = eval(`${sideMenu.api.response_path}`);
            } catch (t) {
              throw new Error(`Invalid response_path "${sideMenu.api.response_path}": ${t}`);
            }
          else
            data = json;
          if (console.log("[side_menu] Resolved data:", data), Array.isArray(data) && sideMenu.api.response_mapping) {
            const t = sideMenu.api.limit;
            t && t > 0 && (data = data.slice(0, t));
            const e = sideMenu.api.response_mapping;
            sideMenuItemsFromApi.value = data.map((o) => ({
              name: o[e.name || "name"] || "",
              href: o[e.href || "href"] || "#",
              icon: e.icon && o[e.icon] || ""
            }));
          } else if (Array.isArray(data)) {
            const t = sideMenu.api.limit;
            t && t > 0 && (data = data.slice(0, t)), sideMenuItemsFromApi.value = data;
          }
          console.log("[side_menu] API items loaded:", sideMenuItemsFromApi.value);
        } catch (t) {
          console.warn("[side_menu] API fetch failed, using static items:", t);
        }
    }, cartCount = ref(0), updateCartCount = () => {
      try {
        const t = localStorage.getItem("total_cart_item");
        t ? cartCount.value = parseInt(t, 10) || 0 : cartCount.value = 0;
      } catch (t) {
        console.error("Failed to read cart count from localStorage", t), cartCount.value = 0;
      }
    };
    onMounted(async () => {
      await initTopMenuApi(), await initSideMenuApi(), updateCartCount(), __props._p.f && __props._p.f.listen && __props._p.f.listen("msg", (t) => {
        const e = t?.type;
        (e === "refresh:cart" || e === "refnec" || e === "refresh") && (updateCartCount(), console.log("✅ Cart count successfully updated from global listener! New count:", cartCount.value));
      }), window.addEventListener("scroll", handleScroll, { passive: !0 });
    }), onUnmounted(() => {
      window.removeEventListener("scroll", handleScroll);
    });
    const isCurrencyOpen = ref(!1), selectedCurrency = ref("RUB"), currencyOptions = [
      { code: "RUB", label: "Russian Ruble" },
      { code: "BYN", label: "Belarusian Ruble" },
      { code: "KZT", label: "Kazakhstani Tenge" },
      { code: "AMD", label: "Armenian Dram" },
      { code: "KGS", label: "Kyrgyzstani Som" },
      { code: "UZS", label: "Uzbekistani Som" }
    ], toggleCurrencyDropdown = () => {
      isCurrencyOpen.value = !isCurrencyOpen.value;
    }, selectCurrency = (t) => {
      selectedCurrency.value = t.code, isCurrencyOpen.value = !1, __props._p.my && __props._p.my.emitter && __props._p.my.emitter.emit("msg", { type: "currency:change", value: t.code });
    }, searchText = ref(""), suggestions = ref([]), loading = ref(!1), showSuggestionsDesktop = ref(!1), isMobileSearchOpen = ref(!1), mobileInputRef = ref(null), _ins = ref({
      var: {
        login: null
      },
      fn: {
        set_login: () => {
          try {
            if ((localStorage.getItem("token") || "")?.length == 0)
              throw new Error("invalid token");
            _ins.value.var.login = {
              name: ""
            };
          } catch {
          }
        }
      }
    });
    _ins.value.fn.set_login();
    let debounceTimeout = null;
    const clickItemA = () => {
      location.href = __props._$p.data.curr.data.event.onClickItemA;
    }, handleInput = () => {
      if (debounceTimeout && clearTimeout(debounceTimeout), searchText.value.length < 2) {
        suggestions.value = [], showSuggestionsDesktop.value = !1;
        return;
      }
      isMobileSearchOpen.value || (showSuggestionsDesktop.value = !0), loading.value = !0, debounceTimeout = setTimeout(async () => {
        await fetchSuggestions(searchText.value), loading.value = !1;
      }, 300);
    }, fetchSuggestions = async (t) => {
      try {
        const e = await fetch(API_URL, {
          method: "POST",
          headers: {
            accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${API_TOKEN}`
          },
          body: JSON.stringify({ search_text: t })
        });
        if (!e.ok) throw new Error("Network response was not ok");
        const o = await e.json();
        console.log("Full API Response:", o), o && o.data && Array.isArray(o.data) ? suggestions.value = o.data : suggestions.value = [];
      } catch (e) {
        console.error("Search API Error:", e), suggestions.value = [];
      }
    }, highlightMatch = (t) => {
      if (!searchText.value || !t) return t;
      const e = new RegExp(`(${searchText.value})`, "gi");
      return String(t).replace(e, '<span class="font-bold text-[#cb11ab]">$1</span>');
    }, selectSuggestion = (t) => {
      searchText.value = t.title, closeSuggestions(), closeMobileSearch(), console.log("Searching for:", t.title), t.slug ? window.location.href = t.slug : executeSearch();
    }, executeSearch = () => {
      searchText.value.trim() && (closeSuggestions(), closeMobileSearch(), window.location.href = `/search?f_raw_text=${encodeURIComponent(searchText.value.trim())}`);
    }, handleFocus = () => {
      searchText.value.length >= 2 && suggestions.value.length > 0 && (showSuggestionsDesktop.value = !0);
    }, closeSuggestions = () => {
      showSuggestionsDesktop.value = !1;
    }, openMobileSearch = () => {
      isMobileSearchOpen.value = !0, nextTick(() => {
        mobileInputRef.value?.focus();
      });
    }, closeMobileSearch = () => {
      isMobileSearchOpen.value = !1;
    }, clearSearch = () => {
      searchText.value = "", suggestions.value = [], mobileInputRef.value?.focus();
    };
    return (t, e) => (openBlock(), createElementBlock("div", null, [
      createElementVNode("header", {
        class: "w-full text-white font-sans relative transition-all duration-300",
        style: normalizeStyle(headerNatureStyle.value)
      }, [
        e[27] || (e[27] = createElementVNode("div", { class: "absolute inset-0 bg-[radial-gradient(circle_at_15%_50%,_#cb11ab_0%,_#6c1887_35%,_#481173_100%)] z-0 transition-opacity" }, null, -1)),
        createElementVNode("div", _hoisted_1, [
          createElementVNode("div", {
            class: normalizeClass(["hidden lg:flex justify-between items-center tracking-wide", topBarClasses.value])
          }, [
            e[8] || (e[8] = createElementVNode("div", { class: "flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity" }, [
              createElementVNode("svg", {
                class: "w-3.5 h-3.5 text-white/90",
                fill: "currentColor",
                viewBox: "0 0 24 24"
              }, [
                createElementVNode("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" })
              ]),
              createElementVNode("span", { class: "border-b border-dashed border-white/50 hover:border-white transition-colors" }, "New Delhi")
            ], -1)),
            createElementVNode("div", _hoisted_2, [
              (openBlock(!0), createElementBlock(Fragment, null, renderList(topMenuItems.value, (o, r) => (openBlock(), createElementBlock("a", {
                key: r,
                href: o.href || "#",
                onClick: withModifiers((n) => navigateItem(o), ["prevent"]),
                class: normalizeClass(["hover:text-white transition-colors capitalize cursor-pointer", { "relative after:absolute after:bottom-[-8px] after:left-0 after:w-full after:h-0.5 after:bg-[#ffd900] after:opacity-0 hover:after:opacity-100 after:transition-opacity": r === 0 }])
              }, toDisplayString(o.name), 11, _hoisted_3))), 128))
            ]),
            createElementVNode("div", _hoisted_4, [
              __props._$p.data.curr.data.itemA ? (openBlock(), createElementBlock("span", {
                key: 0,
                onClick: clickItemA,
                class: "opacity-90 hover:opacity-100 cursor-pointer transition-opacity text-[12px]"
              }, toDisplayString(__props._$p.data.curr.data.itemA.label), 1)) : createCommentVNode("", !0),
              createElementVNode("div", _hoisted_5, [
                createElementVNode("button", {
                  onClick: toggleCurrencyDropdown,
                  class: "flex items-center gap-1.5 cursor-pointer hover:opacity-90 focus:outline-none transition-opacity"
                }, [
                  createElementVNode("span", _hoisted_6, toDisplayString(selectedCurrency.value), 1),
                  (openBlock(), createElementBlock("svg", {
                    class: normalizeClass(["w-3.5 h-3.5 transition-transform duration-200", { "rotate-180": isCurrencyOpen.value }]),
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [...e[6] || (e[6] = [
                    createElementVNode("path", { d: "M7 10l5 5 5-5z" }, null, -1)
                  ])], 2))
                ]),
                createVNode(Transition, { name: "fade-scale" }, {
                  default: withCtx(() => [
                    isCurrencyOpen.value ? (openBlock(), createElementBlock("div", _hoisted_7, [
                      e[7] || (e[7] = createElementVNode("div", { class: "px-3 py-1.5 text-[10px] text-gray-400 uppercase tracking-wider font-bold" }, "Currency", -1)),
                      (openBlock(), createElementBlock(Fragment, null, renderList(currencyOptions, (o) => createElementVNode("button", {
                        key: o.code,
                        onClick: (r) => selectCurrency(o),
                        class: normalizeClass(["w-full text-left px-3 py-2 hover:bg-[#f6f6f9] dark:hover:bg-[#3d3d3d] flex items-center justify-between text-[13px] transition-colors", { "text-[#cb11ab] font-bold bg-[#f6f6f9]/50": selectedCurrency.value === o.code }])
                      }, [
                        createElementVNode("span", null, toDisplayString(o.label), 1),
                        createElementVNode("span", _hoisted_9, toDisplayString(o.code), 1)
                      ], 10, _hoisted_8)), 64))
                    ])) : createCommentVNode("", !0)
                  ]),
                  _: 1
                }),
                isCurrencyOpen.value ? (openBlock(), createElementBlock("div", {
                  key: 0,
                  onClick: e[0] || (e[0] = (o) => isCurrencyOpen.value = !1),
                  class: "fixed inset-0 z-40 cursor-default"
                })) : createCommentVNode("", !0)
              ])
            ])
          ], 2),
          createElementVNode("div", {
            class: normalizeClass(["flex flex-wrap items-center relative z-30", mainBarClasses.value])
          }, [
            createElementVNode("a", _hoisted_10, [
              createElementVNode("img", {
                class: normalizeClass(__props._$p.data.curr.data.logo.class),
                style: normalizeStyle(logoSizeStyle.value),
                src: __props._$p.data.curr.data.logo.src,
                alt: "logo"
              }, null, 14, _hoisted_11)
            ]),
            createElementVNode("button", {
              onClick: e[1] || (e[1] = (o) => isSidebarOpen.value = !0),
              class: "hidden lg:flex items-center justify-center w-11 h-11 border-2 border-white/40 rounded-xl hover:bg-white/15 hover:border-white/60 transition-all flex-shrink-0"
            }, [...e[9] || (e[9] = [
              createElementVNode("div", { class: "flex flex-col gap-[4.5px] w-5" }, [
                createElementVNode("span", { class: "h-[2px] w-full bg-white rounded-full" }),
                createElementVNode("span", { class: "h-[2px] w-full bg-white rounded-full" }),
                createElementVNode("span", { class: "h-[2px] w-full bg-white rounded-full" })
              ], -1)
            ])]),
            createElementVNode("div", _hoisted_12, [
              createElementVNode("div", _hoisted_13, [
                withDirectives(createElementVNode("input", {
                  "onUpdate:modelValue": e[2] || (e[2] = (o) => searchText.value = o),
                  onInput: handleInput,
                  onFocus: handleFocus,
                  onKeyup: withKeys(executeSearch, ["enter"]),
                  type: "text",
                  placeholder: "Search",
                  class: normalizeClass(["w-full h-[50px] pl-6 pr-14 rounded-[25px] bg-white/20 text-white placeholder:text-white/80 border-2 border-white/30 lg:bg-white lg:text-gray-800 lg:placeholder:text-gray-400 focus:outline-none focus:bg-white focus:text-gray-800 lg:focus:ring-2 lg:focus:ring-[#cb11ab] lg:focus:border-transparent transition-all shadow-lg text-[15px] truncate font-normal", { "lg:rounded-b-none lg:shadow-none": showSuggestionsDesktop.value && suggestions.value.length > 0 }])
                }, null, 34), [
                  [vModelText, searchText.value]
                ]),
                createElementVNode("div", {
                  onClick: openMobileSearch,
                  class: "absolute inset-0 lg:hidden cursor-text z-10"
                }),
                createElementVNode("button", {
                  onClick: executeSearch,
                  class: "absolute right-5 top-1/2 -translate-y-1/2 text-white lg:text-gray-400 lg:hover:text-[#cb11ab] transition-colors z-20"
                }, [...e[10] || (e[10] = [
                  createElementVNode("svg", {
                    class: "w-[22px] h-[22px]",
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createElementVNode("path", { d: "M12 8.8a3.2 3.2 0 1 0 0 6.4 3.2 3.2 0 0 0 0-6.4z" }),
                    createElementVNode("path", { d: "M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z" })
                  ], -1)
                ])])
              ]),
              showSuggestionsDesktop.value && suggestions.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_14, [
                createElementVNode("ul", _hoisted_15, [
                  (openBlock(!0), createElementBlock(Fragment, null, renderList(suggestions.value, (o, r) => (openBlock(), createElementBlock("li", {
                    key: r,
                    onClick: (n) => selectSuggestion(o),
                    class: "px-6 py-3 hover:bg-[#f6f6f9] cursor-pointer flex items-center gap-3.5 transition-colors border-b border-gray-50 last:border-b-0 group"
                  }, [
                    e[11] || (e[11] = createElementVNode("svg", {
                      class: "w-[18px] h-[18px] text-gray-300 group-hover:text-[#cb11ab] transition-colors flex-shrink-0",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2"
                    }, [
                      createElementVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ], -1)),
                    createElementVNode("span", {
                      class: "text-[14.5px] leading-tight flex-1",
                      innerHTML: highlightMatch(o.title)
                    }, null, 8, _hoisted_17),
                    e[12] || (e[12] = createElementVNode("svg", {
                      class: "w-4 h-4 text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity -rotate-45 flex-shrink-0",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2"
                    }, [
                      createElementVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M5 10l7-7m0 0l7 7m-7-7v18"
                      })
                    ], -1))
                  ], 8, _hoisted_16))), 128))
                ]),
                loading.value ? (openBlock(), createElementBlock("div", _hoisted_18, [...e[13] || (e[13] = [
                  createElementVNode("div", { class: "inline-block animate-spin rounded-full h-4 w-4 border-2 border-gray-300 border-t-[#cb11ab]" }, null, -1),
                  createElementVNode("span", null, "Searching...", -1)
                ])])) : createCommentVNode("", !0)
              ])) : createCommentVNode("", !0),
              showSuggestionsDesktop.value ? (openBlock(), createElementBlock("div", {
                key: 1,
                onClick: closeSuggestions,
                class: "fixed inset-0 z-40 bg-transparent"
              })) : createCommentVNode("", !0)
            ]),
            createElementVNode("nav", _hoisted_19, [
              createElementVNode("a", {
                href: __props._$p.data.curr.data.event.onClickAddresses || "#",
                class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
              }, [...e[14] || (e[14] = [
                createElementVNode("svg", {
                  class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createElementVNode("path", { d: "M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" })
                ], -1),
                createElementVNode("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Addresses", -1)
              ])], 8, _hoisted_20),
              _ins.value.var.login ? createCommentVNode("", !0) : (openBlock(), createElementBlock("a", {
                key: 0,
                href: __props._$p.data.curr.data.event.onClickLogin || "#",
                class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
              }, [...e[15] || (e[15] = [
                createElementVNode("svg", {
                  class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createElementVNode("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
                ], -1),
                createElementVNode("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Log in", -1)
              ])], 8, _hoisted_21)),
              _ins.value.var.login ? (openBlock(), createElementBlock("a", {
                key: 1,
                href: __props._$p.data.curr.data.event.onClickAccount || "#",
                class: "flex flex-col items-center gap-1 group min-w-[64px] hover:scale-105 transition-transform"
              }, [...e[16] || (e[16] = [
                createElementVNode("svg", {
                  class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                  fill: "currentColor",
                  viewBox: "0 0 24 24"
                }, [
                  createElementVNode("path", { d: "M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" })
                ], -1),
                createElementVNode("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Account", -1)
              ])], 8, _hoisted_22)) : createCommentVNode("", !0),
              createElementVNode("a", {
                href: __props._$p.data.curr.data.event.onClickCart || "#",
                class: "flex flex-col items-center gap-1 group min-w-[64px] relative hover:scale-105 transition-transform"
              }, [
                createElementVNode("div", _hoisted_24, [
                  e[17] || (e[17] = createElementVNode("svg", {
                    class: "w-[26px] h-[26px] text-white/95 group-hover:text-white transition-colors drop-shadow-sm",
                    fill: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createElementVNode("path", { d: "M7 18c-1.1 0-1.99.9-1.99 2S5.9 22 7 22s2-.9 2-2-.9-2-2-2zm10 0c-1.1 0-1.99.9-1.99 2s.89 2 1.99 2 2-.9 2-2-.9-2-2-2zm-8.9-5h7.45c.75 0 1.41-.41 1.75-1.03L21.7 4H5.21l-.94-2H1v2h2l3.6 7.59-1.35 2.44C4.83 14.83 5.37 16 6.5 16H19v-2H7.42c-.14 0-.25-.11-.25-.25L7.1 13z" })
                  ], -1)),
                  cartCount.value > 0 ? (openBlock(), createElementBlock("span", _hoisted_25, toDisplayString(cartCount.value), 1)) : createCommentVNode("", !0)
                ]),
                e[18] || (e[18] = createElementVNode("span", { class: "text-[11px] font-medium opacity-95 group-hover:opacity-100 transition-opacity" }, "Cart", -1))
              ], 8, _hoisted_23)
            ])
          ], 2)
        ]),
        createVNode(Transition, { name: "fade-up" }, {
          default: withCtx(() => [
            isMobileSearchOpen.value ? (openBlock(), createElementBlock("div", _hoisted_26, [
              createElementVNode("div", _hoisted_27, [
                createElementVNode("button", {
                  onClick: closeMobileSearch,
                  class: "p-2 -ml-2 text-gray-500 hover:text-gray-700 transition-colors"
                }, [...e[19] || (e[19] = [
                  createElementVNode("svg", {
                    class: "w-6 h-6",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24",
                    "stroke-width": "2.5"
                  }, [
                    createElementVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      d: "M15 19l-7-7 7-7"
                    })
                  ], -1)
                ])]),
                createElementVNode("div", _hoisted_28, [
                  withDirectives(createElementVNode("input", {
                    ref_key: "mobileInputRef",
                    ref: mobileInputRef,
                    "onUpdate:modelValue": e[3] || (e[3] = (o) => searchText.value = o),
                    onInput: handleInput,
                    onKeyup: withKeys(executeSearch, ["enter"]),
                    type: "text",
                    placeholder: "Search...",
                    class: "w-full h-11 pl-4 pr-10 bg-[#f6f6f9] rounded-xl text-gray-800 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#cb11ab] focus:bg-white transition-all text-[15px]"
                  }, null, 544), [
                    [vModelText, searchText.value]
                  ]),
                  searchText.value ? (openBlock(), createElementBlock("button", {
                    key: 0,
                    onClick: clearSearch,
                    class: "absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  }, [...e[20] || (e[20] = [
                    createElementVNode("svg", {
                      class: "w-4.5 h-4.5",
                      fill: "currentColor",
                      viewBox: "0 0 20 20"
                    }, [
                      createElementVNode("path", {
                        "fill-rule": "evenodd",
                        d: "M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z",
                        "clip-rule": "evenodd"
                      })
                    ], -1)
                  ])])) : createCommentVNode("", !0)
                ]),
                createElementVNode("button", {
                  onClick: executeSearch,
                  class: "text-[#cb11ab] font-semibold text-[14px] px-2"
                }, "Search")
              ]),
              createElementVNode("div", _hoisted_29, [
                suggestions.value.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_30, [
                  (openBlock(!0), createElementBlock(Fragment, null, renderList(suggestions.value, (o, r) => (openBlock(), createElementBlock("li", {
                    key: r,
                    onClick: (n) => selectSuggestion(o),
                    class: "flex items-center gap-4 px-4 py-3.5 active:bg-[#f6f6f9] transition-colors cursor-pointer"
                  }, [
                    e[21] || (e[21] = createElementVNode("svg", {
                      class: "w-[19px] h-[19px] text-gray-300 flex-shrink-0",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2"
                    }, [
                      createElementVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      })
                    ], -1)),
                    createElementVNode("span", {
                      class: "text-[15px] text-gray-800 flex-1 leading-tight",
                      innerHTML: highlightMatch(o.title)
                    }, null, 8, _hoisted_32),
                    e[22] || (e[22] = createElementVNode("svg", {
                      class: "w-4 h-4 text-gray-300 ml-auto -rotate-45 flex-shrink-0",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2"
                    }, [
                      createElementVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M5 10l7-7m0 0l7 7m-7-7v18"
                      })
                    ], -1))
                  ], 8, _hoisted_31))), 128))
                ])) : loading.value ? (openBlock(), createElementBlock("div", _hoisted_33, [...e[23] || (e[23] = [
                  createElementVNode("div", { class: "inline-block animate-spin rounded-full h-7 w-7 border-2 border-gray-200 border-t-[#cb11ab]" }, null, -1),
                  createElementVNode("p", { class: "mt-3 text-[13px]" }, "Searching...", -1)
                ])])) : searchText.value.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_34, [...e[24] || (e[24] = [
                  createElementVNode("svg", {
                    class: "w-12 h-12 mx-auto mb-3 opacity-30",
                    fill: "none",
                    stroke: "currentColor",
                    viewBox: "0 0 24 24"
                  }, [
                    createElementVNode("path", {
                      "stroke-linecap": "round",
                      "stroke-linejoin": "round",
                      "stroke-width": "2",
                      d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    })
                  ], -1),
                  createElementVNode("p", { class: "text-[14px] font-medium" }, "No results found", -1)
                ])])) : createCommentVNode("", !0)
              ])
            ])) : createCommentVNode("", !0)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            isSidebarOpen.value ? (openBlock(), createElementBlock("div", {
              key: 0,
              onClick: e[4] || (e[4] = (o) => isSidebarOpen.value = !1),
              class: "fixed inset-0 bg-black/60 backdrop-blur-sm z-[100]"
            })) : createCommentVNode("", !0)
          ]),
          _: 1
        }),
        createVNode(Transition, { name: "slide" }, {
          default: withCtx(() => [
            isSidebarOpen.value ? (openBlock(), createElementBlock("div", _hoisted_35, [
              createElementVNode("div", _hoisted_36, [
                createElementVNode("div", _hoisted_37, [
                  e[26] || (e[26] = createElementVNode("div", { class: "flex items-center gap-3" }, [
                    createElementVNode("div", { class: "w-9 h-9 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center" }, [
                      createElementVNode("svg", {
                        class: "w-5 h-5 text-white",
                        fill: "none",
                        stroke: "currentColor",
                        viewBox: "0 0 24 24",
                        "stroke-width": "2"
                      }, [
                        createElementVNode("path", {
                          "stroke-linecap": "round",
                          "stroke-linejoin": "round",
                          d: "M4 6h16M4 12h16M4 18h7"
                        })
                      ])
                    ]),
                    createElementVNode("h2", { class: "text-[18px] font-extrabold text-white tracking-wide uppercase" }, "Catalog")
                  ], -1)),
                  createElementVNode("button", {
                    onClick: e[5] || (e[5] = (o) => isSidebarOpen.value = !1),
                    class: "text-white/70 hover:text-white transition-colors p-1.5 rounded-lg hover:bg-white/10"
                  }, [...e[25] || (e[25] = [
                    createElementVNode("svg", {
                      class: "w-6 h-6",
                      fill: "none",
                      stroke: "currentColor",
                      viewBox: "0 0 24 24",
                      "stroke-width": "2"
                    }, [
                      createElementVNode("path", {
                        "stroke-linecap": "round",
                        "stroke-linejoin": "round",
                        d: "M6 18L18 6M6 6l12 12"
                      })
                    ], -1)
                  ])])
                ])
              ]),
              createElementVNode("div", _hoisted_38, [
                createElementVNode("ul", _hoisted_39, [
                  (openBlock(!0), createElementBlock(Fragment, null, renderList(catalogItems.value, (o, r) => (openBlock(), createElementBlock("li", { key: r }, [
                    createElementVNode("a", {
                      href: o.href || "#",
                      onClick: withModifiers((n) => {
                        navigateItem(o), isSidebarOpen.value = !1;
                      }, ["prevent"]),
                      class: "flex items-center gap-3.5 px-5 py-3 hover:bg-gray-50 dark:hover:bg-[#252525] transition-colors cursor-pointer group"
                    }, [
                      o.icon ? (openBlock(), createElementBlock("img", {
                        key: 0,
                        src: o.icon,
                        alt: o.name,
                        class: "w-9 h-9 rounded-xl object-cover flex-shrink-0 shadow-sm"
                      }, null, 8, _hoisted_41)) : (openBlock(), createElementBlock("div", {
                        key: 1,
                        class: "w-9 h-9 rounded-xl flex items-center justify-center text-white text-[14px] font-bold flex-shrink-0 shadow-sm",
                        style: normalizeStyle({ background: ["#cb11ab", "#7b2ff2", "#2196F3", "#4CAF50", "#FF9800", "#E91E63", "#00BCD4", "#9C27B0", "#FF5722", "#607D8B", "#3F51B5", "#009688", "#795548", "#F44336"][r % 14] })
                      }, toDisplayString((o.name || "?").charAt(0).toUpperCase()), 5)),
                      createElementVNode("span", _hoisted_42, toDisplayString(o.name), 1)
                    ], 8, _hoisted_40)
                  ]))), 128))
                ])
              ])
            ])) : createCommentVNode("", !0)
          ]),
          _: 1
        })
      ], 4)
    ]));
  }
}), _export_sfc = (t, e) => {
  const o = t.__vccOpts || t;
  for (const [r, n] of e)
    o[r] = n;
  return o;
}, Header = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-5d6ef6d5"]]), _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "index",
  props: {
    _p: {},
    _$p: {}
  },
  setup(t) {
    return t._$p.data.curr.data.logo || (t._$p.data.curr.data.logo = { src: "", class: "", style: "" }), (async () => (t._p.my.emitter = t._p.f.new_emitter(), t._p.my.emitter.on("msg", async (e) => {
      console.log("_p.my.emitter.on", e);
    }), await t._p.my.emitter.emit("msg", {
      type: "on:change",
      _p: t._p,
      _$p: t._$p
    }), t._p.f.listen("msg", async (e) => {
      if (e.type === "theme:change") {
        const o = e.custom?.theme;
        console.log("Applying theme:", o);
        const r = document.documentElement;
        o === "dark" ? r.classList.add("dark") : r.classList.remove("dark");
      }
      console.log("_p.f.listen", e);
    }), setTimeout(async () => {
      await t._p.f.call("msg", {
        type: "on:change",
        _p: t._p,
        _$p: t._$p
      });
    }, 500)))(), (e, o) => (openBlock(), createBlock(Header, {
      _p: t._p,
      _$p: t._$p
    }, null, 8, ["_p", "_$p"]));
  }
}), index = async (t) => ({
  set: async (e) => {
    console.log(`--hydrator [${e.data.curr.type}]`);
    const r = createApp(_sfc_main, {
      _p: t,
      _$p: e
    }), n = {
      r: "",
      style: "",
      //set..
      evt: {
        change: () => {
          t.f.call("msg", {
            type: "change",
            _p: t,
            _$p: e,
            custom: {}
          });
        }
      }
    }, a = document.getElementById(t.f.name("vue-root"));
    return r.mount(a), n;
  }
});
export {
  index as hydrator,
  index
};
