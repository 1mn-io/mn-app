const { Fragment: e, computed: t, createApp: n, createBlock: r, createCommentVNode: i, createElementBlock: a, createElementVNode: o, createStaticVNode: s, createTextVNode: c, createVNode: l, defineComponent: u, isRef: d, nextTick: f, normalizeClass: p, normalizeStyle: m, onBeforeUnmount: h, onMounted: g, onUnmounted: _, openBlock: v, reactive: y, ref: b, renderList: x, toDisplayString: S, unref: C, vModelCheckbox: w, vModelDynamic: ee, vModelSelect: te, vModelText: T, watch: E, withDirectives: D, withKeys: ne, withModifiers: re } = window.Vue;
import { ce_hydrator as ie } from "content-engine-lib";
//#region src/hydrator/src/composables/useToasts.ts
var ae = () => {
	let e = b([]), t = (t, r = "success") => {
		let i = `toast-${Date.now()}-${Math.random()}`;
		e.value.push({
			id: i,
			message: t,
			type: r
		}), setTimeout(() => {
			n(i);
		}, 4e3);
	}, n = (t) => {
		e.value = e.value.filter((e) => e.id !== t);
	};
	return {
		toasts: e,
		addToast: t,
		removeToast: n
	};
}, O = localStorage.getItem("token") || localStorage.getItem("access_token"), k = `${location.origin.includes("localhost") && location.search.includes("force=localhost") ? "http://localhost:8000" : "https://fastapi.dryutil.1mn.io"}/client/api/i/ona/seller_storefront_mgmt`, oe = `${k}?typ=list_ui_info`, A = `${k}?typ=list_custom_data`, j = async (e, t) => {
	let n = await fetch(oe, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			typ_filter: "storefront",
			page: e,
			page_size: t
		})
	});
	if (!n.ok) throw Error(`HTTP Status ${n.status}`);
	return n.json();
}, M = async (e, t) => {
	let n = await fetch(A, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			typ_filter: "storefront_template",
			page: e,
			page_size: t
		})
	});
	if (!n.ok) throw Error(`HTTP Status ${n.status}`);
	return n.json();
}, se = `${k}?typ=create_ui_info`, N = async (e) => {
	let t = await fetch(se, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			parent_id: "",
			typ: "storefront",
			name: e.name,
			dta: e.dta
		})
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, ce = `${k}?typ=update_ui_info`, P = async (e) => {
	let t = await fetch(ce, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			id: e.id,
			typ: "storefront",
			name: e.name,
			dta: e.dta
		})
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, F = `${k}?typ=get_ui_info`, le = async (e) => {
	let t = await fetch(F, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify(e)
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, ue = `${k}?typ=delete_ui_info`, de = async (e) => {
	let t = await fetch(ue, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({ id: e })
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, fe = `${k}?typ=create_custom_data`, pe = async (e) => {
	let t = await fetch(fe, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			typ: "storefront_template",
			dta: {
				template_name: e.name,
				label: e.label,
				description: e.description,
				fields: e.fields
			}
		})
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, me = `${k}?typ=update_custom_data`, he = async (e) => {
	let t = await fetch(me, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			id: e.id,
			typ: "storefront_template",
			dta: {
				template_name: e.name,
				label: e.label,
				description: e.description,
				fields: e.fields
			}
		})
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, ge = `${k}?typ=delete_custom_data`, _e = async (e) => {
	let t = await fetch(ge, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify({
			id: e,
			typ: "storefront_template"
		})
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, ve = `${k}?typ=get_custom_data`, I = async (e) => {
	let t = await fetch(ve, {
		method: "POST",
		headers: {
			accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${O}`
		},
		body: JSON.stringify(e)
	});
	if (!t.ok) throw Error(`HTTP Status ${t.status}`);
	return t.json();
}, L = (e) => {
	if (!e) return "Unknown error";
	let t = (e.message || String(e)).toLowerCase();
	return t.includes("failed to fetch") || t.includes("network error") || t.includes("econnrefused") || t.includes("econnreset") ? "The backend server is unreachable. Please verify that the Python backend service is running on port 8000." : t.includes("504") || t.includes("gateway timeout") ? "Gateway Timeout (504): The Vite proxy cannot reach the backend. Please check if the uvicorn service is running." : t.includes("502") || t.includes("bad gateway") ? "Bad Gateway (502): The Vite proxy received an invalid response from the backend. Please check if the backend service is started." : t.includes("500") || t.includes("internal server error") ? "Internal Server Error (500): The backend server encountered an error." : t.includes("409") || t.includes("conflict") ? "Conflict (409): Resource conflict (e.g. template already exists)." : t.includes("404") || t.includes("not found") ? "Not Found (404): The requested resource could not be found." : t.includes("403") || t.includes("forbidden") ? "Forbidden (403): You do not have permission to perform this action." : t.includes("401") || t.includes("unauthorized") ? "Unauthorized (401): Please authenticate and try again." : e.message || String(e);
}, ye = [
	{
		id: "318b51e7-f043-4372-93ce-e1c7e58c7a68",
		name: "storefront_template",
		label: "Standard Storefront Template",
		description: "Standard multi-field storefront configuration featuring social profiles and contact settings",
		fields: [
			{
				key: "brand_name",
				type: "text",
				label: "Brand Name",
				required: !0
			},
			{
				key: "instagram",
				type: "url",
				label: "Instagram URL",
				required: !1
			},
			{
				key: "support_email",
				type: "email",
				label: "Support Email",
				required: !1
			},
			{
				key: "theme_color",
				type: "text",
				label: "Theme Color",
				required: !1
			}
		]
	},
	{
		id: "minimalist_storefront",
		name: "minimalist_storefront",
		label: "Minimalist Storefront",
		description: "A clean, text-focused design style emphasizing a brand tagline and support details",
		fields: [
			{
				key: "brand_name",
				type: "text",
				label: "Brand Name",
				required: !0
			},
			{
				key: "tagline",
				type: "text",
				label: "Tagline",
				required: !1
			},
			{
				key: "support_email",
				type: "email",
				label: "Support Email",
				required: !0
			}
		]
	},
	{
		id: "bold_brand_template",
		name: "bold_brand_template",
		label: "Bold Brand Template",
		description: "Vibrant visual layout utilizing rich assets, banners, and multiple social media linkages",
		fields: [
			{
				key: "brand_name",
				type: "text",
				label: "Brand Name",
				required: !0
			},
			{
				key: "banner_url",
				type: "url",
				label: "Banner Image URL",
				required: !0
			},
			{
				key: "instagram",
				type: "url",
				label: "Instagram URL",
				required: !1
			},
			{
				key: "facebook",
				type: "url",
				label: "Facebook URL",
				required: !1
			},
			{
				key: "theme_color",
				type: "text",
				label: "Theme Color",
				required: !1
			}
		]
	},
	{
		id: "modern_cdn_template",
		name: "modern_cdn_template",
		label: "Modern CDN Template",
		description: "Directs layout properties from an external JSON configurations file loaded via CDN URL",
		fields: [{
			key: "ce_file",
			type: "url",
			label: "CDN JSON Config File URL",
			required: !0
		}]
	}
], R = [
	{
		id: "ca78e3ba-02a4-4f5e-9369-6d13a477715a",
		typ: "storefront",
		name: "storefront_1779778075007",
		created_at: "2026-05-26T06:47:56.975948",
		updated_at: "2026-05-26T06:47:56.975952",
		children: [],
		dta: {
			fields: [
				{
					key: "brand_name",
					type: "text",
					label: "Brand Name",
					required: !0
				},
				{
					key: "instagram",
					type: "url",
					label: "Instagram URL"
				},
				{
					key: "support_email",
					type: "email",
					label: "Support Email"
				},
				{
					key: "theme_color",
					type: "text",
					label: "Theme Color"
				}
			],
			template_id: "318b51e7-f043-4372-93ce-e1c7e58c7a68",
			template_typ: "storefront_template",
			fields_values: {},
			template_name: "storefront_template"
		}
	},
	{
		id: "055f1376-4104-458f-afac-c01762d01801",
		typ: "storefront",
		name: "storefront_1779690144674",
		created_at: "2026-05-25T06:22:08.376316",
		updated_at: "2026-05-25T06:22:26.745952",
		children: [],
		dta: {
			fields: [
				{
					key: "brand_name",
					type: "text",
					label: "Brand Name",
					required: !0
				},
				{
					key: "instagram",
					type: "url",
					label: "Instagram URL"
				},
				{
					key: "support_email",
					type: "email",
					label: "Support Email"
				},
				{
					key: "theme_color",
					type: "text",
					label: "Theme Color"
				}
			],
			template_id: "318b51e7-f043-4372-93ce-e1c7e58c7a68",
			template_typ: "storefront_template",
			fields_values: {
				instagram: "https://instagram.com/nitin12",
				brand_name: "nitin",
				support_email: "nitin123@example.com"
			},
			template_name: "storefront_template"
		}
	},
	{
		id: "5f220a24-4609-46aa-8960-88ceb82e0e41",
		typ: "storefront",
		name: "storefront_1779635088531",
		created_at: "2026-05-24T15:04:34.178750",
		updated_at: "2026-05-24T15:04:49.512228",
		children: [],
		dta: {
			fields: [
				{
					key: "brand_name",
					type: "text",
					label: "Brand Name",
					required: !0
				},
				{
					key: "instagram",
					type: "url",
					label: "Instagram URL"
				},
				{
					key: "support_email",
					type: "email",
					label: "Support Email"
				},
				{
					key: "theme_color",
					type: "text",
					label: "Theme Color"
				}
			],
			template_id: "318b51e7-f043-4372-93ce-e1c7e58c7a68",
			template_typ: "storefront_template",
			fields_values: {
				instagram: "https://instagram.com/hello",
				theme_color: "#ff3366",
				support_email: "hann@support.com"
			},
			template_name: "storefront_template"
		}
	},
	{
		id: "bc254206-2f21-47ec-b1d4-5360a82a363f",
		typ: "storefront",
		name: "onamoda.in",
		created_at: "2026-05-13T18:18:40.690110",
		updated_at: "2026-05-24T06:27:31.096966",
		children: [],
		dta: {
			ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/storefront.json",
			fields_values: {}
		}
	},
	{
		id: "7aa449d6-1e87-462c-a0c1-385bc6aad22d",
		typ: "storefront",
		name: "storefront.1mn.io",
		created_at: "2026-05-13T18:17:53.735035",
		updated_at: "2026-05-13T18:17:53.735041",
		children: [],
		dta: {
			ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/storefront.json",
			fields_values: {}
		}
	}
], be = () => {
	let e = [...R], t = [
		"storefront_template",
		"minimalist_storefront",
		"bold_brand_template",
		"modern_cdn_template"
	];
	for (let n = 1; n <= 25; n++) {
		let r = t[n % t.length], i = r === "modern_cdn_template";
		e.push({
			id: `generated-storefront-id-${n}`,
			typ: "storefront",
			name: `storefront_generated_${178e10 + n * 87654}`,
			created_at: (/* @__PURE__ */ new Date(Date.now() - n * 24 * 60 * 60 * 1e3)).toISOString(),
			updated_at: (/* @__PURE__ */ new Date(Date.now() - n * 12 * 60 * 60 * 1e3)).toISOString(),
			children: [],
			dta: i ? {
				ce_file: `https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/storefront-${n}.json`,
				fields_values: {}
			} : {
				fields: [
					{
						key: "brand_name",
						type: "text",
						label: "Brand Name",
						required: !0
					},
					{
						key: "instagram",
						type: "url",
						label: "Instagram URL"
					},
					{
						key: "support_email",
						type: "email",
						label: "Support Email"
					},
					{
						key: "theme_color",
						type: "text",
						label: "Theme Color"
					}
				],
				template_id: `tpl-gen-id-${n}`,
				template_typ: r,
				fields_values: {
					brand_name: `Generated Brand ${n}`,
					instagram: `https://instagram.com/gen_brand_${n}`,
					support_email: `contact@genbrand${n}.com`,
					theme_color: n % 3 == 0 ? "#4f46e5" : n % 3 == 1 ? "#06b6d4" : "#10b981"
				},
				template_name: r
			}
		});
	}
	return e;
}, z = (e) => e.replace(/_/g, " ").replace(/-/g, " ").replace(/\b\w/g, (e) => e.toUpperCase()), xe = (e) => {
	if (!e) return "N/A";
	try {
		return new Date(e).toLocaleDateString(void 0, {
			year: "numeric",
			month: "short",
			day: "numeric"
		});
	} catch {
		return e;
	}
}, Se = (e) => {
	let t = b([]), n = b(1), r = b(5), i = b(!0), a = b(!1), o = b(null), s = async (s = !1) => {
		if (!a.value) {
			a.value = !0, s && (n.value = 1, t.value = [], i.value = !0);
			try {
				let e = await M(n.value, r.value);
				if (e.success && e.data?.items) {
					let n = e.data.items.map((e) => ({
						id: e.id,
						name: e.typ,
						label: z(e.typ),
						description: `Dynamic storefront configuration template containing ${e.dta?.fields?.length || 0} fields`,
						fields: e.dta?.fields || [],
						template: e.dta?.template || null,
						template_editor: e.dta?.template_editor || null
					}));
					if (s) t.value = n, t.value.push({
						id: "modern_cdn_template",
						name: "modern_cdn_template",
						label: "Modern CDN Template",
						description: "Directs layout properties from an external JSON configurations file loaded via CDN URL",
						fields: [{
							key: "ce_file",
							type: "url",
							label: "CDN JSON Config File URL",
							required: !0
						}]
					});
					else {
						let e = new Set(t.value.map((e) => e.id));
						n.forEach((n) => {
							e.has(n.id) || t.value.push(n);
						});
					}
					let r = e.data.total || 0;
					i.value = t.value.length - 1 < r, o.value = null;
				} else throw Error("Invalid template response format");
			} catch (n) {
				console.warn("Template fetch failed. Falling back to local mock templates...", n);
				let r = L(n);
				o.value = r, e(`Templates connection error: ${r}`, "error"), s && (t.value = [...ye], i.value = !1);
			} finally {
				a.value = !1;
			}
		}
	}, c = async () => {
		a.value || !i.value || (n.value++, await s(!1));
	}, l = (e) => e.startsWith("mock-template") || e === "modern_cdn_template" || e === "minimalist_storefront" || e === "bold_brand_template" || !/^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i.test(e);
	return {
		templates: t,
		loading: a,
		hasMore: i,
		error: o,
		fetchTemplates: s,
		loadMoreTemplates: c,
		createTemplate: async (n) => {
			try {
				let r = await pe(n);
				if (r.success && r.data) {
					let n = r.data, i = {
						id: n.id,
						name: n.typ,
						label: z(n.typ),
						description: n.dta?.description || `Dynamic custom template containing ${n.dta?.fields?.length || 0} fields`,
						fields: n.dta?.fields || []
					};
					return t.value.unshift(i), e("Storefront template created successfully!", "success"), !0;
				} else throw Error("Invalid backend templates creation response");
			} catch (r) {
				if (console.warn("Backend template creation failed:", r), r.status === 409 || r.message && r.message.includes("409") || r.data && r.data.status_code === 409) return e("Only one template can be created per account. Please edit your existing template instead.", "error"), !1;
				e(`Backend template creation failed: ${L(r)}. Using local fallback (Offline).`, "error");
				let i = {
					id: `mock-template-${Math.random().toString(36).substr(2, 9)}`,
					name: n.name,
					label: n.label,
					description: n.description,
					fields: n.fields
				};
				return t.value.unshift(i), !0;
			}
		},
		updateTemplate: async (n, r) => {
			if (l(n)) {
				let i = t.value.findIndex((e) => e.id === n);
				return i !== -1 && (t.value[i] = {
					...t.value[i],
					name: r.name,
					label: r.label,
					description: r.description,
					fields: r.fields
				}), e("Storefront template updated locally (Mock).", "success"), !0;
			}
			try {
				let i = await he({
					id: n,
					...r
				});
				if (i.success && i.data) {
					let r = i.data, a = {
						id: r.id,
						name: r.typ,
						label: z(r.typ),
						description: r.dta?.description || `Dynamic custom template containing ${r.dta?.fields?.length || 0} fields`,
						fields: r.dta?.fields || []
					}, o = t.value.findIndex((e) => e.id === n);
					return o !== -1 && (t.value[o] = a), e("Storefront template updated successfully!", "success"), !0;
				} else throw Error("Invalid backend templates update response");
			} catch (i) {
				console.warn("Backend template update failed. Falling back to local offline updates...", i), e(`Backend template update failed: ${L(i)}. Using local fallback (Offline).`, "error");
				let a = t.value.findIndex((e) => e.id === n);
				return a !== -1 && (t.value[a] = {
					...t.value[a],
					name: r.name,
					label: r.label,
					description: r.description,
					fields: r.fields
				}), !0;
			}
		},
		deleteTemplate: async (n) => {
			if (confirm("Are you sure you want to delete this template schema?")) {
				if (l(n)) {
					t.value = t.value.filter((e) => e.id !== n), e("Storefront template deleted locally (Mock).", "success");
					return;
				}
				try {
					await _e(n), t.value = t.value.filter((e) => e.id !== n), e("Storefront template deleted successfully!", "success");
				} catch (r) {
					console.warn("Backend template deletion failed. Falling back to local offline deletion...", r), e(`Backend template deletion failed: ${L(r)}. Using local fallback (Offline).`, "error"), t.value = t.value.filter((e) => e.id !== n);
				}
			}
		},
		fetchSingleTemplate: async (e) => {
			try {
				let n = await I(e);
				if (n.success && n.data) {
					let e = n.data, r = {
						id: e.id,
						name: e.typ,
						label: z(e.typ),
						description: e.dta?.description || `Dynamic custom template containing ${e.dta?.fields?.length || 0} fields`,
						fields: e.dta?.fields || []
					}, i = t.value.findIndex((e) => e.id === r.id);
					return i === -1 ? t.value.push(r) : t.value[i] = r, r;
				}
			} catch (e) {
				console.warn("Backend template lookup failed:", e);
			}
			return null;
		}
	};
}, Ce = (e) => {
	let { _p: n, _pp: r, addToast: i } = e, a = b([]), o = b(!1), s = b(!1), c = b(null), l = b(1), u = b(6), d = b(0), f = b(!0), p = b(""), m = b([]), h = t(() => {
		let e = p.value.trim().toLowerCase();
		return e ? a.value.filter((t) => t.name.toLowerCase().includes(e) || t.dta?.ce_file?.toLowerCase().includes(e) ? !0 : t.dta?.fields_values ? Object.values(t.dta.fields_values).some((t) => String(t).toLowerCase().includes(e)) : !1) : a.value;
	}), g = t(() => {
		if (s.value) {
			let e = l.value * u.value;
			return h.value.slice(0, e);
		} else return h.value;
	}), _ = (e = !1) => {
		s.value = !0, m.value.length === 0 && (m.value = be()), e && (a.value = [...m.value], l.value = 1);
		let t = a.value.length, n = l.value * u.value;
		f.value = n < t, d.value = a.value.length, i("Connected using offline fallback data", "info");
	}, v = async (e = !1) => {
		if (!o.value) {
			o.value = !0, c.value = null, e && (l.value = 1, a.value = []);
			try {
				let t = await j(l.value, u.value);
				if (t.success && t.data?.items) {
					s.value = !1, c.value = null;
					let n = t.data.items;
					if (e) a.value = n;
					else {
						let e = new Set(a.value.map((e) => e.id));
						n.forEach((t) => {
							e.has(t.id) || a.value.push(t);
						});
					}
					d.value = t.data.total || a.value.length, f.value = a.value.length < t.data.total;
				} else throw Error("Invalid API payload");
			} catch (t) {
				console.warn("API request failed. Falling back to local offline mock data...", t);
				let n = L(t);
				c.value = n, i(`Storefronts connection error: ${n}`, "error"), _(e);
			} finally {
				o.value = !1;
			}
		}
	};
	return E(p, () => {
		if (l.value = 1, !s.value) v(!0);
		else {
			let e = l.value * u.value;
			f.value = e < h.value.length;
		}
	}), {
		storefronts: a,
		loading: o,
		isFallback: s,
		error: c,
		searchQuery: p,
		totalCount: d,
		hasMore: f,
		filteredStorefronts: h,
		paginatedStorefronts: g,
		localFullList: m,
		fetchStorefronts: v,
		loadMore: () => {
			if (!(o.value || !f.value)) if (l.value++, s.value) {
				let e = l.value * u.value;
				f.value = e < a.value.length;
			} else v(!1);
		},
		updateStorefrontState: async (e, t, o) => {
			o && t && (t.ce_file = o);
			let s = a.value.findIndex((t) => t.id === e);
			if (s !== -1) {
				let c = a.value[s], l;
				try {
					let n = await P({
						id: e,
						name: c.name,
						dta: t
					});
					if (n.success && n.data) l = n.data;
					else throw Error("Invalid backend update response");
				} catch (e) {
					console.warn("Backend storefront update failed. Falling back to local offline update...", e);
					let n = L(e);
					i(`Backend update failed: ${n}. Saved changes locally (Offline).`, "error"), l = {
						...c,
						updated_at: (/* @__PURE__ */ new Date()).toISOString(),
						dta: t
					};
				}
				a.value[s] = l;
				let u = m.value.findIndex((t) => t.id === e);
				return u !== -1 && (m.value[u] = l), await n.f.call("msg", {
					type: "change",
					_p: n,
					_pp: r,
					custom: {
						action: "update",
						storefront: l,
						entireTemplate: o
					}
				}), l;
			}
			return null;
		},
		saveStorefrontMeta: async (e, t) => {
			let o = {
				ce_file: t.entireTemplate || t.template.template || t.ceFile,
				template_name: t.template.name,
				template_editor: t.template.template_editor,
				fields_values: { ...t.fieldsValues }
			};
			if (e) {
				let s = a.value.findIndex((t) => t.id === e.id);
				if (s !== -1) {
					let c = a.value[s], l, u = !1;
					try {
						let n = await P({
							id: e.id,
							name: t.name,
							dta: o
						});
						if (n.success && n.data) l = n.data, u = !0;
						else throw Error("Invalid backend update response");
					} catch (e) {
						console.warn("Backend storefront update failed. Falling back to local offline update...", e);
						let n = L(e);
						i(`Backend storefront update failed: ${n}. Saved locally (Offline).`, "error"), l = {
							...c,
							name: t.name,
							updated_at: (/* @__PURE__ */ new Date()).toISOString(),
							dta: o
						};
					}
					a.value[s] = l;
					let d = m.value.findIndex((t) => t.id === e.id);
					d !== -1 && (m.value[d] = l), u && i("Storefront updated successfully!", "success"), await n.f.call("msg", {
						type: "change",
						_p: n,
						_pp: r,
						custom: {
							action: "update",
							storefront: l,
							entireTemplate: t.entireTemplate
						}
					});
				}
			} else try {
				let e = await N({
					name: t.name,
					dta: o
				});
				if (e.success && e.data) {
					let t = e.data;
					a.value.unshift(t), m.value.unshift(t), d.value++, i("Storefront created successfully!", "success"), await n.f.call("msg", {
						type: "change",
						_p: n,
						_pp: r,
						custom: {
							action: "create",
							storefront: t
						}
					});
				} else throw Error("Invalid backend creation response");
			} catch (e) {
				console.warn("Backend storefront creation failed. Falling back to local offline mock...", e);
				let s = L(e);
				i(`Backend creation failed: ${s}. Created locally (Offline Mode).`, "error");
				let c = {
					id: n.f.uuid ? n.f.uuid() : `storefront-id-${Math.random().toString(36).substr(2, 9)}`,
					typ: "storefront",
					name: t.name,
					created_at: (/* @__PURE__ */ new Date()).toISOString(),
					updated_at: (/* @__PURE__ */ new Date()).toISOString(),
					children: [],
					dta: o
				};
				a.value.unshift(c), m.value.unshift(c), d.value++, await n.f.call("msg", {
					type: "change",
					_p: n,
					_pp: r,
					custom: {
						action: "create",
						storefront: c
					}
				});
			}
		},
		deleteStorefront: async (e) => {
			if (confirm("Are you sure you want to delete this storefront?")) {
				let t = a.value.find((t) => t.id === e), o = !1;
				try {
					let t = await de(e);
					if (t && t.success) o = !0;
					else throw Error("Invalid API delete response");
				} catch (e) {
					console.warn("Backend storefront delete failed. Falling back to local offline delete...", e);
					let t = L(e);
					i(`Backend deletion failed: ${t}. Removed locally (Offline mode).`, "error");
				}
				return a.value = a.value.filter((t) => t.id !== e), m.value = m.value.filter((t) => t.id !== e), d.value--, o && i("Storefront deleted successfully", "success"), t && await n.f.call("msg", {
					type: "change",
					_p: n,
					_pp: r,
					custom: {
						action: "delete",
						id: e
					}
				}), !0;
			}
			return !1;
		}
	};
}, we = { class: "flex items-start justify-between gap-3 mb-5 w-full" }, B = { class: "min-w-0 flex-1" }, V = { class: "font-bold text-lg text-slate-900 group-hover:text-indigo-600 transition-colors break-all leading-tight tracking-tight" }, H = { class: "mt-2 flex items-center gap-2" }, Te = { class: "inline-flex items-center text-[10px] uppercase font-bold tracking-wider px-2 py-1 rounded-md bg-slate-50 text-slate-600 border border-slate-200 shadow-sm" }, U = { class: "flex gap-1.5 flex-shrink-0 pt-0.5 -mr-1" }, W = { class: "space-y-3" }, Ee = {
	key: 0,
	class: "bg-indigo-50/50 rounded-lg p-3 border border-indigo-100/50 flex flex-col gap-1.5 transition-colors group-hover:bg-indigo-50"
}, G = { class: "text-indigo-700 hover:text-indigo-900 flex items-center gap-1.5 font-mono break-all text-xs font-medium" }, K = {
	key: 1,
	class: "grid grid-cols-2 gap-2"
}, De = { class: "text-[9px] text-slate-400 font-bold uppercase tracking-wider mb-0.5" }, q = ["title"], J = {
	key: 0,
	class: "inline-flex items-center gap-1.5"
}, Y = { key: 1 }, Oe = {
	key: 2,
	class: "text-slate-400 text-xs italic py-3 px-1"
}, ke = { class: "mt-5 pt-4 border-t border-slate-100/80 text-[10px] text-slate-400 flex justify-between items-center font-medium" }, Ae = { class: "font-mono bg-slate-50 px-1.5 py-0.5 rounded text-slate-500 shadow-sm border border-slate-100" }, je = { class: "flex items-center gap-1" }, Me = /* @__PURE__ */ u({
	__name: "StorefrontCard",
	props: { storefront: {} },
	emits: [
		"edit",
		"delete",
		"select"
	],
	setup(n) {
		let r = n, i = t(() => r.storefront.dta?.fields_values && Object.keys(r.storefront.dta.fields_values).length > 0);
		return (t, r) => (v(), a("div", {
			onClick: r[2] ||= (e) => t.$emit("select", n.storefront),
			class: "group bg-white border border-slate-200 rounded-2xl p-5 flex flex-col justify-between transition-all duration-300 relative overflow-hidden cursor-pointer shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-indigo-200"
		}, [
			r[8] ||= o("div", { class: "absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" }, null, -1),
			o("div", null, [o("div", we, [o("div", B, [o("h3", V, S(n.storefront.name), 1), o("div", H, [o("span", Te, S(n.storefront.dta?.template_name || (n.storefront.dta?.ce_file ? "CDN JSON Config" : "Custom")), 1)])]), o("div", U, [o("button", {
				onClick: r[0] ||= re((e) => t.$emit("edit", n.storefront), ["stop"]),
				class: "p-2.5 rounded-lg hover:bg-indigo-50 text-slate-500 hover:text-indigo-600 transition-colors cursor-pointer",
				title: "Quick Edit Meta"
			}, [...r[3] ||= [o("svg", {
				class: "w-5.5 h-5.5",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
			})], -1)]]), o("button", {
				onClick: r[1] ||= re((e) => t.$emit("delete", n.storefront.id), ["stop"]),
				class: "p-2.5 rounded-lg hover:bg-rose-50 text-slate-500 hover:text-rose-600 transition-colors cursor-pointer",
				title: "Delete Storefront"
			}, [...r[4] ||= [o("svg", {
				class: "w-5.5 h-5.5",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
			})], -1)]])])]), o("div", W, [n.storefront.dta?.ce_file ? (v(), a("div", Ee, [r[6] ||= o("span", { class: "text-indigo-400/80 font-bold uppercase text-[9px] tracking-wider" }, "CDN Configuration File", -1), o("span", G, [r[5] ||= o("svg", {
				class: "w-4 h-4 flex-shrink-0",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			})], -1), o("span", null, S(typeof n.storefront.dta.ce_file == "string" ? n.storefront.dta.ce_file.substring(n.storefront.dta.ce_file.lastIndexOf("/") + 1) : "JSON Object Config"), 1)])])) : i.value ? (v(), a("div", K, [(v(!0), a(e, null, x(n.storefront.dta.fields_values, (e, t) => (v(), a("div", {
				key: t,
				class: "flex flex-col bg-slate-50 p-2.5 rounded-lg border border-slate-100"
			}, [o("span", De, S(C(z)(String(t))), 1), o("span", {
				class: "text-slate-700 text-xs font-medium truncate",
				title: String(e)
			}, [t === "theme_color" ? (v(), a("span", J, [o("span", {
				class: "w-3 h-3 rounded-full border border-slate-200 shadow-sm",
				style: m({ backgroundColor: String(e) })
			}, null, 4), c(" " + S(e), 1)])) : (v(), a("span", Y, S(e), 1))], 8, q)]))), 128))])) : (v(), a("div", Oe, " No custom field values configured. "))])]),
			o("div", ke, [o("span", Ae, "#" + S(n.storefront.id.substring(0, 8)), 1), o("span", je, [r[7] ||= o("svg", {
				class: "w-3 h-3",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
			})], -1), c(" " + S(C(xe)(n.storefront.updated_at)), 1)])])
		]));
	}
}), Ne = {
	key: 0,
	class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto"
}, Pe = { class: "bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col transition-all transform scale-100 duration-300" }, Fe = { class: "px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50" }, Ie = { class: "text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" }, Le = { class: "flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-2 gap-6 min-h-[400px]" }, X = { class: "flex flex-col border-r border-slate-200 pr-0 md:pr-6 gap-4" }, Re = { class: "relative" }, ze = { class: "flex-1 overflow-y-auto space-y-2.5 max-h-[350px] pr-1" }, Be = ["onClick"], Ve = { class: "flex justify-between items-start gap-2" }, He = {
	key: 0,
	class: "h-4 w-4 bg-indigo-600 text-white rounded-full flex items-center justify-center text-[10px]"
}, Ue = { class: "text-xs text-slate-400 mt-1 line-clamp-2 leading-relaxed" }, We = { class: "text-[10px] text-slate-400 mt-2 font-mono break-all font-medium" }, Ge = {
	key: 0,
	class: "flex justify-center pt-2 pb-1"
}, Ke = ["disabled"], qe = {
	key: 0,
	class: "animate-spin h-3.5 w-3.5 text-indigo-600",
	fill: "none",
	viewBox: "0 0 24 24"
}, Je = { class: "flex flex-col gap-4" }, Ye = {
	key: 0,
	class: "relative mb-3"
}, Xe = { class: "flex-1 overflow-y-auto space-y-4 pr-1 max-h-[350px]" }, Z = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, Ze = {
	key: 0,
	class: "border-t border-slate-200 pt-4 space-y-4"
}, Qe = { key: 0 }, $e = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, Q = { class: "block text-xs font-bold text-slate-500 uppercase flex items-center justify-between" }, et = {
	key: 0,
	class: "text-rose-500"
}, tt = { class: "text-[9px] text-slate-400 font-mono font-normal" }, nt = {
	key: 0,
	class: "flex gap-2 items-center"
}, rt = ["onUpdate:modelValue"], it = ["onUpdate:modelValue"], at = [
	"type",
	"onUpdate:modelValue",
	"placeholder"
], ot = {
	key: 2,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, st = {
	key: 1,
	class: "flex flex-col items-center justify-center py-10 text-slate-400 italic bg-slate-50/50 border border-dashed border-slate-200 rounded-xl"
}, ct = { class: "px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3" }, lt = ["disabled"], ut = {
	key: 0,
	class: "animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-white flex-shrink-0",
	fill: "none",
	viewBox: "0 0 24 24"
}, dt = /*@__PURE__*/ u({
	__name: "StorefrontModal",
	props: {
		isOpen: { type: Boolean },
		storefront: {},
		templates: {},
		loadingTemplates: { type: Boolean },
		hasMoreTemplates: { type: Boolean },
		saving: { type: Boolean }
	},
	emits: [
		"close",
		"save",
		"toast",
		"loadMoreTemplates"
	],
	setup(n, { emit: r }) {
		let s = n, l = r, u = b(""), d = b(""), f = b({}), m = b({}), h = b(null), g = b(""), _ = b(""), y = t(() => !!s.storefront);
		E(() => s.isOpen, (e) => {
			e && C();
		});
		let C = () => {
			if (m.value = {}, g.value = "", _.value = "", s.storefront) {
				u.value = s.storefront.name;
				let e = s.storefront.dta?.template_name || (s.storefront.dta?.ce_file ? "modern_cdn_template" : "storefront_template"), t = s.templates.find((t) => t.name === e) || s.templates[0];
				if (h.value = t, t && t.name === "modern_cdn_template") {
					let e = s.storefront.dta?.ce_file;
					d.value = typeof e == "string" ? e : "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/storefront.json", f.value = {};
				} else t && (d.value = "", f.value = {}, t.fields.forEach((e) => {
					f.value[e.key] = String(s.storefront?.dta?.fields_values?.[e.key] || "");
				}));
			} else h.value = s.templates[0], u.value = "", d.value = "", f.value = {}, h.value && h.value.fields.forEach((e) => {
				f.value[e.key] = "";
			});
		}, w = (e) => {
			if (h.value = e, m.value = {}, e.name === "modern_cdn_template") f.value = {};
			else {
				d.value = "";
				let t = {};
				e.fields.forEach((e) => {
					t[e.key] = f.value[e.key] || "";
				}), f.value = t;
			}
		}, te = t(() => {
			let e = g.value.trim().toLowerCase();
			return e ? s.templates.filter((t) => t.label.toLowerCase().includes(e) || t.name.toLowerCase().includes(e) || t.description.toLowerCase().includes(e)) : s.templates;
		}), ne = t(() => {
			if (!h.value) return [];
			let e = _.value.trim().toLowerCase();
			return e ? h.value.fields.filter((t) => t.label.toLowerCase().includes(e) || t.key.toLowerCase().includes(e)) : h.value.fields;
		}), re = (e) => e.type === "url" ? "https://example.com/social-url" : e.type === "email" ? "support@brand.com" : `Enter ${e.label.toLowerCase()}`, ie = () => {
			if (!h.value || !u.value.trim()) return;
			let e = {};
			if (u.value.trim() || (e.name = "Storefront Name is required"), h.value.name === "modern_cdn_template" ? d.value.trim() ? !d.value.startsWith("http://") && !d.value.startsWith("https://") && (e.ce_file = "Please enter a valid URL starting with http:// or https://") : e.ce_file = "CDN Config File URL is required" : h.value.fields.forEach((t) => {
				let n = f.value[t.key]?.trim();
				t.required && !n && (e[t.key] = `${t.label} is required`);
			}), Object.keys(e).length > 0) {
				m.value = e, l("toast", "Please fix the validation errors", "error");
				return;
			}
			l("save", {
				name: u.value.trim(),
				template: h.value,
				ceFile: d.value.trim(),
				fieldsValues: { ...f.value }
			});
		};
		return (t, r) => n.isOpen ? (v(), a("div", Ne, [o("div", Pe, [
			o("div", Fe, [o("h2", Ie, S(y.value ? "Edit Storefront" : "Create New Storefront"), 1), o("button", {
				onClick: r[0] ||= (e) => t.$emit("close"),
				class: "p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
			}, [...r[7] ||= [o("svg", {
				class: "w-6 h-6",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])]),
			o("div", Le, [o("div", X, [o("div", null, [r[9] ||= o("label", { class: "block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" }, " Step 1: Select Template ", -1), o("div", Re, [r[8] ||= o("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [o("svg", {
				class: "h-4 w-4 text-slate-400",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			})])], -1), D(o("input", {
				type: "text",
				"onUpdate:modelValue": r[1] ||= (e) => g.value = e,
				placeholder: "Search templates...",
				class: "block w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded-lg bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xs transition-all focus:bg-white"
			}, null, 512), [[T, g.value]])])]), o("div", ze, [(v(!0), a(e, null, x(te.value, (e) => (v(), a("div", {
				key: e.id,
				onClick: (t) => w(e),
				class: p(["p-3.5 border rounded-xl cursor-pointer transition-all flex flex-col justify-between", h.value?.id === e.id ? "border-indigo-500 bg-indigo-50/80 text-indigo-900 shadow-sm shadow-indigo-100/50" : "border-slate-200 bg-slate-50/30 hover:bg-slate-50 text-slate-600 hover:text-slate-800 hover:border-slate-300"])
			}, [
				o("div", Ve, [o("h4", { class: p(["font-bold text-sm", h.value?.id === e.id ? "text-indigo-700" : "text-slate-700"]) }, S(e.label), 3), h.value?.id === e.id ? (v(), a("span", He, " ✓ ")) : i("", !0)]),
				o("p", Ue, S(e.description), 1),
				o("span", We, " type: " + S(e.name), 1)
			], 10, Be))), 128)), n.hasMoreTemplates ? (v(), a("div", Ge, [o("button", {
				type: "button",
				onClick: r[2] ||= (e) => t.$emit("loadMoreTemplates"),
				disabled: n.loadingTemplates,
				class: "flex items-center gap-1.5 text-xs text-indigo-600 hover:text-indigo-850 hover:underline font-semibold cursor-pointer py-1 px-3 bg-indigo-50 hover:bg-indigo-100 rounded-lg transition-colors border border-indigo-100/80"
			}, [n.loadingTemplates ? (v(), a("svg", qe, [...r[10] ||= [o("circle", {
				class: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				"stroke-width": "4"
			}, null, -1), o("path", {
				class: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			}, null, -1)]])) : i("", !0), o("span", null, S(n.loadingTemplates ? "Loading..." : "Load More Templates"), 1)], 8, Ke)])) : i("", !0)])]), o("div", Je, [o("div", null, [r[12] ||= o("label", { class: "block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2" }, " Step 2: Storefront Details & Fields ", -1), h.value && h.value.fields.length > 1 ? (v(), a("div", Ye, [r[11] ||= o("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [o("svg", {
				class: "h-3.5 w-3.5 text-slate-400",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			})])], -1), D(o("input", {
				type: "text",
				"onUpdate:modelValue": r[3] ||= (e) => _.value = e,
				placeholder: "Filter fields...",
				class: "block w-full pl-9 pr-3 py-1.5 border border-slate-200 rounded-lg bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 text-xs transition-all focus:bg-white"
			}, null, 512), [[T, _.value]])])) : i("", !0)]), o("div", Xe, [o("div", null, [
				r[13] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, [c(" Storefront Name "), o("span", { class: "text-rose-500" }, "*")], -1),
				D(o("input", {
					type: "text",
					"onUpdate:modelValue": r[4] ||= (e) => u.value = e,
					placeholder: "e.g. store_name_123 or mybrand.com",
					class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white",
					required: ""
				}, null, 512), [[T, u.value]]),
				m.value.name ? (v(), a("p", Z, S(m.value.name), 1)) : i("", !0)
			]), h.value ? (v(), a("div", Ze, [h.value.name === "modern_cdn_template" ? (v(), a("div", Qe, [
				r[14] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, [c(" CDN JSON Config File URL "), o("span", { class: "text-rose-500" }, "*")], -1),
				D(o("input", {
					type: "url",
					"onUpdate:modelValue": r[5] ||= (e) => d.value = e,
					placeholder: "https://raw.githubusercontent.com/.../storefront.json",
					class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white"
				}, null, 512), [[T, d.value]]),
				m.value.ce_file ? (v(), a("p", $e, S(m.value.ce_file), 1)) : i("", !0)
			])) : (v(!0), a(e, { key: 1 }, x(ne.value, (e) => (v(), a("div", {
				key: e.key,
				class: "space-y-1"
			}, [
				o("label", Q, [o("span", null, [c(S(e.label) + " ", 1), e.required ? (v(), a("span", et, "*")) : i("", !0)]), o("span", tt, "key: " + S(e.key), 1)]),
				e.key === "theme_color" ? (v(), a("div", nt, [D(o("input", {
					type: "color",
					"onUpdate:modelValue": (t) => f.value[e.key] = t,
					class: "h-9 w-12 bg-slate-50 border border-slate-200 rounded cursor-pointer p-0.5"
				}, null, 8, rt), [[T, f.value[e.key]]]), D(o("input", {
					type: "text",
					"onUpdate:modelValue": (t) => f.value[e.key] = t,
					placeholder: "#4f46e5",
					class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white"
				}, null, 8, it), [[T, f.value[e.key]]])])) : D((v(), a("input", {
					key: 1,
					type: e.type === "url" ? "url" : e.type === "email" ? "email" : "text",
					"onUpdate:modelValue": (t) => f.value[e.key] = t,
					placeholder: re(e),
					class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white"
				}, null, 8, at)), [[ee, f.value[e.key]]]),
				m.value[e.key] ? (v(), a("p", ot, S(m.value[e.key]), 1)) : i("", !0)
			]))), 128))])) : (v(), a("div", st, [...r[15] ||= [o("span", null, "Select a template on the left to show additional fields", -1)]]))])])]),
			o("div", ct, [o("button", {
				type: "button",
				onClick: r[6] ||= (e) => t.$emit("close"),
				class: "px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
			}, " Cancel "), o("button", {
				type: "button",
				onClick: ie,
				class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg text-sm shadow-md hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2",
				disabled: !h.value || !u.value || n.saving
			}, [n.saving ? (v(), a("svg", ut, [...r[16] ||= [o("circle", {
				class: "opacity-25",
				cx: "12",
				cy: "12",
				r: "10",
				stroke: "currentColor",
				"stroke-width": "4"
			}, null, -1), o("path", {
				class: "opacity-75",
				fill: "currentColor",
				d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
			}, null, -1)]])) : i("", !0), o("span", null, S(n.saving ? "Saving..." : y.value ? "Save Changes" : "Save Storefront"), 1)], 8, lt)])
		])])) : i("", !0);
	}
}), $ = (e, t) => {
	let n = e.__vccOpts || e;
	for (let [e, r] of t) n[e] = r;
	return n;
}, ft = /*#__PURE__*/ $(dt, [["__scopeId", "data-v-aa20a668"]]), pt = { class: "flex-1 bg-white relative overflow-hidden" }, mt = {
	key: 0,
	class: "absolute inset-0 bg-transparent z-20"
}, ht = ["src"], gt = /* @__PURE__ */ u({
	__name: "PipPreview",
	props: {
		show: { type: Boolean },
		activeTabUrl: {},
		forceRefreshKey: {}
	},
	emits: ["update:show"],
	setup(e, { emit: t }) {
		let n = e, r = t, s = b({
			x: 800,
			y: 120
		}), c = b({
			width: 340,
			height: 480
		}), l = b(!1), u = b(!1), d = () => {
			r("update:show", !1);
		}, f = (e) => {
			e.preventDefault(), l.value = !0;
			let t = e.clientX - s.value.x, n = e.clientY - s.value.y, r = (e) => {
				let r = e.clientX - t, i = e.clientY - n;
				r = Math.max(0, Math.min(r, window.innerWidth - c.value.width)), i = Math.max(0, Math.min(i, window.innerHeight - 50)), s.value = {
					x: r,
					y: i
				};
			}, i = () => {
				l.value = !1, document.removeEventListener("mousemove", r), document.removeEventListener("mouseup", i);
			};
			document.addEventListener("mousemove", r), document.addEventListener("mouseup", i);
		}, p = (e) => {
			e.preventDefault(), e.stopPropagation(), u.value = !0;
			let t = c.value.width, n = c.value.height, r = e.clientX, i = e.clientY, a = (e) => {
				let a = t + (e.clientX - r), o = n + (e.clientY - i);
				a = Math.max(260, Math.min(a, window.innerWidth - s.value.x)), o = Math.max(200, Math.min(o, window.innerHeight - s.value.y)), c.value = {
					width: a,
					height: o
				};
			}, o = () => {
				u.value = !1, document.removeEventListener("mousemove", a), document.removeEventListener("mouseup", o);
			};
			document.addEventListener("mousemove", a), document.addEventListener("mouseup", o);
		}, h = () => {
			typeof window < "u" && (window.innerWidth < 640 ? (c.value = {
				width: Math.max(280, window.innerWidth - 24),
				height: Math.min(420, window.innerHeight - 180)
			}, s.value = {
				x: 12,
				y: 100
			}) : (c.value = {
				width: 340,
				height: 480
			}, s.value = {
				x: window.innerWidth - 380,
				y: 120
			}));
		};
		return g(() => {
			h(), typeof window < "u" && window.addEventListener("resize", h);
		}), _(() => {
			typeof window < "u" && window.removeEventListener("resize", h);
		}), E(() => n.show, (e) => {
			e && h();
		}), (t, n) => e.show ? (v(), a("div", {
			key: 0,
			style: m({
				top: `${s.value.y}px`,
				left: `${s.value.x}px`,
				width: `${c.value.width}px`,
				height: `${c.value.height}px`
			}),
			class: "fixed bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col z-[999] select-none"
		}, [
			o("div", {
				onMousedown: f,
				class: "bg-slate-900 text-white px-4 py-3 flex items-center justify-between shrink-0 cursor-move",
				title: "Drag to reposition"
			}, [n[1] ||= o("div", { class: "flex items-center gap-2 pointer-events-none" }, [o("span", { class: "w-2 h-2 rounded-full bg-emerald-400 animate-pulse" }), o("span", { class: "text-xs font-bold tracking-wider uppercase" }, "PiP Preview")], -1), o("div", { class: "flex items-center gap-1.5" }, [o("button", {
				onClick: d,
				class: "p-1 rounded hover:bg-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer",
				title: "Close Preview"
			}, [...n[0] ||= [o("svg", {
				class: "w-4 h-4",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2.5"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])])], 32),
			o("div", pt, [l.value || u.value ? (v(), a("div", mt)) : i("", !0), e.activeTabUrl ? (v(), a("iframe", {
				key: e.forceRefreshKey,
				src: e.activeTabUrl,
				class: "w-full h-full bg-white border-0 z-10"
			}, null, 8, ht)) : i("", !0)]),
			o("div", {
				onMousedown: p,
				class: "absolute bottom-0 right-0 w-5 h-5 cursor-se-resize flex items-end justify-end p-0.5 z-30 group",
				title: "Drag to resize"
			}, [...n[2] ||= [o("svg", {
				class: "w-3.5 h-3.5 text-slate-400 group-hover:text-indigo-600 transition-colors",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "3"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 19h-6M19 13h-3"
			})], -1)]], 32)
		], 4)) : i("", !0);
	}
}), _t = () => {
	let e = b([]), t = b(null), n = b(null), r = /* @__PURE__ */ new Map(), i = b({}), a = b(!1), o = () => {
		try {
			Object.keys(window.localStorage).forEach((e) => {
				(e.startsWith("c-u-s-t-o-m") || e.includes("carousel") || e.includes("header") || e.includes("collage") || e.includes("storefront") || e.includes("editor")) && window.localStorage.removeItem(e);
			});
		} catch (e) {
			console.warn("Failed to clear localStorage drafts:", e);
		}
	}, s = (e) => {
		if (!e) return "";
		let t = e.split("-");
		if (t.length >= 2) {
			let e = t.slice(1).join("_");
			return `c-u-s-t-o-m_${t[0]}-${e}`;
		}
		return `c-u-s-t-o-m_${e}`;
	}, c = async () => {
		try {
			return await (await fetch("/test/template_editor.json")).json();
		} catch (e) {
			return console.error("Failed to load template_editor.json", e), null;
		}
	}, l = async (e, t) => {
		try {
			let n = {};
			t ? n.id = t : e ? n.name = e : n.name = "testttt";
			let r = await le(n);
			if (r.success && r.data) {
				let e = r.data.dta?.ce_file;
				if (e && typeof e == "object") return e;
				if (typeof e == "string" && (e.startsWith("http://") || e.startsWith("https://") || e.startsWith("/"))) return await (await fetch(e)).json();
			}
		} catch (e) {
			console.error("Failed to load storefront details from API, falling back to local template.json", e);
		}
		try {
			return await (await fetch("/test/template.json")).json();
		} catch (e) {
			return console.error("Failed to load template.json fallback", e), null;
		}
	}, u = (e, t) => {
		if (!e || typeof e != "object") return null;
		if (e.meta && e.meta.id === t) return e.meta.ce_file || e.ce_file;
		if (e.id === t) return e.ce_file || e.meta && e.meta.ce_file;
		for (let n of Object.keys(e)) {
			let r = u(e[n], t);
			if (r) return r;
		}
		return null;
	}, d = (e, t) => {
		if (!e || typeof e != "object") return null;
		if (e.id === t) return e;
		if (Array.isArray(e)) for (let n of e) {
			let e = d(n, t);
			if (e) return e;
		}
		else for (let n of Object.keys(e)) {
			let r = d(e[n], t);
			if (r) return r;
		}
		return null;
	}, p = async (e, t, r) => {
		if (!n.value) {
			a.value = !0;
			try {
				n.value = await l(t, r);
			} finally {
				a.value = !1;
			}
		}
		if (!n.value) return null;
		let i = u(n.value, e);
		if (!i) return console.warn(`Could not find ce_file for id ${e} in template.json`), null;
		if (typeof i == "string" && (i.startsWith("http://") || i.startsWith("https://"))) try {
			return await (await fetch(i)).json();
		} catch (e) {
			return console.error(`Failed to fetch ce_file URL ${i}`, e), null;
		}
		return i;
	};
	return {
		activeTabFragments: e,
		templateEditorConfig: t,
		templateConfig: n,
		activeHydrators: r,
		tabFragmentsData: i,
		loadingTemplate: a,
		clearLocalStorageDrafts: o,
		getContainerId: s,
		fetchTemplateEditorConfig: c,
		fetchTemplateConfig: l,
		findCeFileInTemplate: u,
		loadActiveTabFragments: async (o, c, u, m) => {
			if (!t.value) return;
			let h = t.value.fragments?.find((e) => e.tab_id === o);
			if (e.value = h?.content || [], await f(), !n.value) {
				a.value = !0;
				try {
					n.value = await l(c, u);
				} catch (e) {
					console.error("Error loading template config:", e);
				} finally {
					a.value = !1;
				}
			}
			for (let t of e.value) {
				let e = null, a = null;
				if (t.ce_file_id) e = await p(t.ce_file_id, c, u);
				else if (t.id) {
					if (!n.value) continue;
					let r = d(n.value, t.id);
					console.log(`[Hydrator] Data found for id ${t.id}:`, r), r && (a = r, e = {
						config: n.value.config || n.value.meta?.ce_file?.config || {},
						data: { l: [JSON.parse(JSON.stringify(r))] }
					});
				}
				let o = t.ce_file_id || t.id;
				if (o && e) {
					let t = y(e.data || e), n = t.l?.[0];
					if (!n) continue;
					let c = () => {
						if (!m._pp || !m._pp.data) return;
						m._pp.data.l || (m._pp.data.l = []);
						let e = m._pp.data.l, t = e.findIndex((e) => e.id === "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c");
						t !== -1 && e.splice(t, 1);
						let r = o, i = e.findIndex((e) => e.id === r || e.id === o), s = {
							id: r,
							type: n.type,
							slug: n.slug || n.type,
							data: n.data
						};
						i === -1 ? e.push(s) : e[i] = s, a && Object.assign(a, JSON.parse(JSON.stringify(n)));
					};
					E(t, () => {
						c();
					}, { deep: !0 });
					let l = o.split("-"), u = n.type || (l.length >= 2 ? l.slice(1).join("_") : o), d = s(o);
					if (await f(), !document.getElementById(d)) {
						console.warn(`Container element with id ${d} not found`);
						continue;
					}
					let p = {
						renderer_src: `https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/${u}/dist/renderer.es.js`,
						hydrator_src: `https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/${u}/dist/hydrator.es.js`,
						editor_src: `https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/${u}/dist/editor.es.js`,
						custom_src: `https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/${u}/dist/custom.es.js`
					};
					if (e?.config?.lazy_lib) {
						let t = e.config.lazy_lib;
						p = {
							renderer_src: t.renderer_src?.replace("{*}", u) || p.renderer_src,
							hydrator_src: t.hydrator_src?.replace("{*}", u) || p.hydrator_src,
							editor_src: t.editor_src?.replace("{*}", u) || p.editor_src
						}, p.custom_src = t.custom_src ? t.custom_src.replace("{*}", u) : "https://cdn.jsdelivr.net/gh/1mn-io/mn-app@latest/modules/s_carousel/dist/custom.es.js";
					}
					let h = {
						el: `#${d}`,
						name: u,
						lazy_lib: p,
						custom: {
							...m._p?.custom,
							fn: {
								...m._p?.custom?.fn,
								ce_call: m._p?.f?.call,
								ce_listen: m._p?.f?.listen
							}
						},
						meta: {
							id: o,
							lazy_lib: p,
							custom: {
								...m._p?.custom,
								fn: {
									...m._p?.custom?.fn,
									ce_call: m._p?.f?.call,
									ce_listen: m._p?.f?.listen
								}
							}
						}
					};
					try {
						let e = await ie({
							...h,
							run: "custom"
						});
						await e.set({ data: t }), r.set(o, e), i.value[o] = t, f(() => {
							let e = document.getElementById(s(o));
							e && e.addEventListener("click", (e) => {
								let t = e.target;
								if (t) {
									let e = t.closest("button") || (t.tagName === "BUTTON" ? t : null);
									e && (e.innerText || e.textContent || "").toLowerCase().includes("save") && m.onSaveTrigger && m.onSaveTrigger();
								}
							});
						});
					} catch (e) {
						console.error(`Failed to mount hydrator for fragment ${o}`, e);
					}
				}
			}
		}
	};
}, vt = { class: "storefront-dashboard-component fixed inset-0 bg-slate-50 z-50 overflow-hidden flex flex-col font-sans" }, yt = { class: "bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm shrink-0" }, bt = { class: "flex items-center gap-4 min-w-0" }, xt = { class: "min-w-0" }, St = { class: "flex items-center gap-2.5 flex-wrap" }, Ct = { class: "text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent break-all leading-tight" }, wt = { class: "inline-block px-2 py-0.5 rounded text-[10px] font-bold bg-indigo-50 text-indigo-700 border border-indigo-200 flex-shrink-0" }, Tt = { class: "text-slate-400 text-[10px] mt-0.5 font-mono break-all font-medium" }, Et = { class: "flex items-center gap-1.5 md:gap-3 flex-wrap justify-end" }, Dt = ["title"], Ot = { class: "hidden sm:inline" }, kt = ["title"], At = { class: "hidden sm:inline" }, jt = { class: "flex-1 overflow-hidden flex flex-col md:flex-row" }, Mt = { class: "w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col shrink-0" }, Nt = { class: "flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible p-3 gap-1.5 scrollbar-thin shrink-0" }, Pt = ["onClick"], Ft = { class: "flex-1 bg-slate-50/50 overflow-y-auto p-4 md:p-12" }, It = { class: "max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 md:p-8 min-h-[450px]" }, Lt = {
	key: 0,
	class: "flex flex-col items-center justify-center py-20 space-y-4"
}, Rt = {
	key: 0,
	class: "space-y-6 animate-fadeIn"
}, zt = { class: "font-bold text-base text-slate-800" }, Bt = { class: "text-xs text-slate-400 mt-1" }, Vt = ["id"], Ht = {
	key: 0,
	class: "bg-slate-50 border border-slate-200/60 rounded-xl p-6 text-center text-slate-500 text-xs italic"
}, Ut = /*#__PURE__*/ $(/* @__PURE__ */ u({
	__name: "StorefrontDashboard",
	props: {
		storefront: {},
		templates: {},
		loadingTemplates: { type: Boolean },
		hasMoreTemplates: { type: Boolean },
		_p: {},
		_pp: {}
	},
	emits: [
		"back",
		"save",
		"toast",
		"loadMoreTemplates"
	],
	setup(n, { emit: r }) {
		let s = n, c = r, u = b([]), d = b(""), f = b(!1), m = b(0), { activeTabFragments: h, templateEditorConfig: y, templateConfig: w, activeHydrators: ee, tabFragmentsData: te, loadingTemplate: T, clearLocalStorageDrafts: D, getContainerId: ne, fetchTemplateEditorConfig: re, fetchTemplateConfig: ie, findCeFileInTemplate: ae, loadActiveTabFragments: O } = _t();
		g(async () => {
			let e = s.storefront, t = e.dta?.template_name || e.dta?.template_typ, n = null;
			if (t && s.templates && (n = s.templates.find((e) => e.name === t)), e.dta?.ce_file) if (typeof e.dta.ce_file == "object") w.value = e.dta.ce_file;
			else if (typeof e.dta.ce_file == "string" && (e.dta.ce_file.startsWith("http") || e.dta.ce_file.startsWith("/"))) {
				let t = await fetch(e.dta.ce_file);
				w.value = await t.json();
			} else w.value = await ie(e.name, e.id);
			else n && n.template ? w.value = n.template : w.value = await ie(e.name, e.id);
			n && n.template_editor ? y.value = n.template_editor : y.value = await re(), y.value && y.value.tabs && (u.value = y.value.tabs, u.value.length > 0 && (d.value = u.value[0].id));
		}), _(() => {}), E(d, () => {
			d.value && O(d.value, s.storefront.name, s.storefront.id, {
				_p: s._p,
				_pp: s._pp,
				onSaveTrigger: ue
			});
		});
		let k = b({}), oe = b({}), A = b(""), j = b(null), M = b(""), se = b("");
		t(() => j.value?.name === "modern_cdn_template"), t(() => s.storefront.dta?.fields_values && Object.keys(s.storefront.dta.fields_values).length > 0);
		let N = t(() => {
			if (!s.storefront.name || !w.value || !h.value || h.value.length === 0) return "";
			let e = h.value[0].ce_file_id || h.value[0].id;
			if (!e) return "";
			let t = (n) => {
				if (!n || typeof n != "object") return null;
				if (n.path && n.meta && (n.meta.id === e || n.meta.id === e.replace("_", "-"))) return n.path;
				if (n.path && n.meta && n.meta.ce_file && n.meta.ce_file.data && n.meta.ce_file.data.l) {
					let t = (n) => !n || !Array.isArray(n) ? !1 : n.some((n) => n.id === e || n.data?.l && t(n.data.l));
					if (t(n.meta.ce_file.data.l)) return n.path;
				}
				if (Array.isArray(n)) for (let e of n) {
					let n = t(e);
					if (n) return n;
				}
				else for (let e of Object.keys(n)) {
					let r = t(n[e]);
					if (r) return r;
				}
				return null;
			}, n = t(w.value) || "", r = s.storefront.name.trim();
			return !r.includes(".") && !r.startsWith("localhost") && (r = `${r}.in`), `${r.startsWith("localhost") || r.startsWith("127.0.0.1") ? "http://" : "https://"}${r}${n}`;
		}), ce = t(() => {
			let e = s.storefront.name.trim();
			return !e.includes(".") && !e.startsWith("localhost") && (e = `${e}.in`), `${e.startsWith("localhost") || e.startsWith("127.0.0.1") ? "http://" : "https://"}${e}`;
		}), P = b("tab"), F = () => {
			N.value && window.open(N.value, "_blank");
		};
		E(() => s.storefront, () => {
			D(), w.value = null, le();
		}, { immediate: !0 });
		function le() {
			oe.value = {}, M.value = "", se.value = "";
			let e = s.storefront.dta?.template_name || (s.storefront.dta?.ce_file ? "modern_cdn_template" : "storefront_template"), t = s.templates.find((t) => t.name === e) || s.templates[0];
			if (j.value = t, t && t.name === "modern_cdn_template") {
				let e = s.storefront.dta?.ce_file;
				A.value = typeof e == "string" ? e : "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/storefront/dist/storefront.json", k.value = {};
			} else t && (A.value = "", k.value = {}, t.fields.forEach((e) => {
				k.value[e.key] = String(s.storefront.dta?.fields_values?.[e.key] || "");
			}));
		}
		t(() => {
			if (!j.value) return [];
			let e = M.value.trim().toLowerCase();
			return e ? j.value.fields.filter((t) => t.label.toLowerCase().includes(e) || t.key.toLowerCase().includes(e)) : j.value.fields;
		}), t(() => {
			let e = se.value.trim().toLowerCase();
			return e ? s.templates.filter((t) => t.label.toLowerCase().includes(e) || t.name.toLowerCase().includes(e)) : s.templates;
		});
		let ue = () => {
			if (!j.value) return;
			let e = {}, t = j.value.name === "modern_cdn_template";
			if (t ? A.value.trim() ? !A.value.startsWith("http://") && !A.value.startsWith("https://") && (e.ce_file = "Please enter a valid URL starting with http:// or https://") : e.ce_file = "CDN Config File URL is required" : j.value.fields.forEach((t) => {
				let n = k.value[t.key]?.trim();
				t.required && !n && (e[t.key] = `${t.label} is required`);
			}), Object.keys(e).length > 0) {
				oe.value = e, c("toast", "Please fix form validation errors", "error"), t ? d.value = "cdn" : d.value = "fields";
				return;
			}
			let n = t ? {
				ce_file: A.value.trim(),
				fields_values: {}
			} : {
				fields: j.value.fields,
				template_id: j.value.id,
				template_typ: j.value.name,
				template_name: j.value.name,
				fields_values: { ...k.value }
			};
			if (console.log("[handleSave] templateConfig.value:", w.value), console.log("[handleSave] tabFragmentsData.value:", te.value), w.value) {
				let e = (t, n, r) => {
					if (!t || typeof t != "object") return !1;
					if (t.meta && (t.meta.id === n || t.meta.id === n.replace("_", "-"))) return t.meta.ce_file = r, !0;
					if (t.id === n || t.id === n.replace("_", "-")) return t.meta && t.meta.ce_file !== void 0 ? (t.meta.ce_file = r, !0) : (t.ce_file === void 0 || (t.ce_file = r), !0);
					for (let i of Object.keys(t)) if (e(t[i], n, r)) return !0;
					return !1;
				};
				for (let [t, n] of Object.entries(te.value)) {
					let r = n.l?.[0];
					if (r) {
						let n = {
							config: { lazy_lib: {
								renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
								hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
								editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js",
								custom_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/custom.es.js"
							} },
							data: { l: [{
								id: r.id || t,
								type: r.type,
								slug: r.slug || r.type,
								data: r.data
							}] }
						};
						e(w.value, t, n);
					}
				}
			}
			D(), m.value++, c("save", {
				id: s.storefront.id,
				name: s.storefront.name,
				dta: n,
				entireTemplate: w.value
			});
		}, de = () => {
			D(), c("back");
		};
		return (t, r) => (v(), a("div", vt, [o("header", yt, [o("div", bt, [o("button", {
			onClick: de,
			class: "flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all cursor-pointer shadow-sm group flex-shrink-0",
			title: "Back to List"
		}, [...r[3] ||= [o("svg", {
			class: "w-5 h-5 group-hover:-translate-x-0.5 transition-transform",
			fill: "none",
			viewBox: "0 0 24 24",
			stroke: "currentColor",
			"stroke-width": "2"
		}, [o("path", {
			"stroke-linecap": "round",
			"stroke-linejoin": "round",
			d: "M15 19l-7-7 7-7"
		})], -1)]]), o("div", xt, [o("div", St, [o("h1", Ct, S(n.storefront.name), 1), o("span", wt, S(n.storefront.dta?.template_name || (n.storefront.dta?.ce_file ? "CDN JSON" : "Custom")), 1)]), o("p", Tt, "ID: " + S(n.storefront.id), 1)])]), o("div", Et, [
			N.value ? (v(), a("button", {
				key: 0,
				onClick: r[0] ||= (e) => {
					f.value = P.value !== "tab" || !f.value, P.value = "tab";
				},
				class: p(["p-2 sm:px-4 sm:py-2 border rounded-lg text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer flex-shrink-0", f.value && P.value === "tab" ? "bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700 shadow-indigo-100" : "border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-indigo-50/20"]),
				title: f.value && P.value === "tab" ? "Hide Tab Preview" : "Tab Preview"
			}, [r[4] ||= o("svg", {
				class: "w-4 h-4 flex-shrink-0",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
			}), o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
			})], -1), o("span", Ot, S(f.value && P.value === "tab" ? "Hide Tab Preview" : "Tab Preview"), 1)], 10, Dt)) : i("", !0),
			ce.value ? (v(), a("button", {
				key: 1,
				onClick: r[1] ||= (e) => {
					f.value = P.value !== "site" || !f.value, P.value = "site";
				},
				class: p(["p-2 sm:px-4 sm:py-2 border rounded-lg text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer flex-shrink-0", f.value && P.value === "site" ? "bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700 shadow-emerald-100" : "border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-600 bg-slate-50/50 hover:bg-emerald-50/20"]),
				title: f.value && P.value === "site" ? "Hide Site Preview" : "Site Preview"
			}, [r[5] ||= o("svg", {
				class: "w-4 h-4 flex-shrink-0",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
			})], -1), o("span", At, S(f.value && P.value === "site" ? "Hide Site" : "Site Preview"), 1)], 10, kt)) : i("", !0),
			N.value ? (v(), a("button", {
				key: 2,
				onClick: F,
				class: "p-2 sm:px-4 sm:py-2 border border-slate-200 hover:border-indigo-200 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-indigo-50/20 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm flex-shrink-0",
				title: "Open Live URL in New Tab"
			}, [...r[6] ||= [o("svg", {
				class: "w-4 h-4 flex-shrink-0",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
			})], -1), o("span", { class: "hidden sm:inline" }, "View Live", -1)]])) : i("", !0),
			o("button", {
				onClick: de,
				class: "px-4 py-2 sm:px-5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-bold rounded-lg text-sm shadow-md hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex-shrink-0 flex items-center gap-2"
			}, [...r[7] ||= [o("span", null, "Close", -1)]])
		])]), o("div", jt, [
			o("aside", Mt, [r[8] ||= o("div", { class: "p-4 border-b border-slate-100 bg-slate-50/50 hidden md:block" }, [o("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Dashboard Menu")], -1), o("nav", Nt, [(v(!0), a(e, null, x(u.value, (e) => (v(), a("button", {
				key: e.id,
				onClick: (t) => d.value = e.id,
				class: p(["flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer border text-left whitespace-nowrap", d.value === e.id ? "bg-indigo-50 text-indigo-700 border-indigo-100 shadow-sm" : "text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-50/80"])
			}, [o("span", null, S(e.label), 1)], 10, Pt))), 128))])]),
			o("main", Ft, [o("div", It, [C(T) ? (v(), a("div", Lt, [...r[9] ||= [o("div", { class: "w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" }, null, -1), o("p", { class: "text-slate-500 text-sm font-medium animate-pulse" }, "Loading storefront template from backend...", -1)]])) : (v(!0), a(e, { key: 1 }, x(u.value, (t) => (v(), a("div", { key: t.id }, [d.value === t.id ? (v(), a("div", Rt, [
				o("div", null, [o("h3", zt, S(t.label), 1), o("p", Bt, "Configure sections and settings for the " + S(t.label) + ".", 1)]),
				(v(!0), a(e, null, x(C(h), (e) => (v(), a("div", {
					key: e.ce_file_id || e.id,
					class: "bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
				}, [o("div", { id: C(ne)(e.ce_file_id || e.id) }, null, 8, Vt)]))), 128)),
				C(h).length === 0 ? (v(), a("div", Ht, " No custom configurations mapped to this tab. ")) : i("", !0)
			])) : i("", !0)]))), 128))])]),
			l(gt, {
				show: f.value,
				"onUpdate:show": r[2] ||= (e) => f.value = e,
				activeTabUrl: P.value === "site" ? ce.value : N.value,
				forceRefreshKey: m.value
			}, null, 8, [
				"show",
				"activeTabUrl",
				"forceRefreshKey"
			])
		])]));
	}
}), [["__scopeId", "data-v-b67828bc"]]), Wt = {
	key: 0,
	class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto"
}, Gt = { class: "bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden flex flex-col transition-all transform scale-100 duration-300" }, Kt = { class: "px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50" }, qt = { class: "text-xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent" }, Jt = { class: "flex-1 overflow-y-auto p-6 space-y-5" }, Yt = { class: "space-y-4" }, Xt = { class: "grid grid-cols-1 sm:grid-cols-2 gap-4" }, Zt = ["disabled"], Qt = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, $t = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, en = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-1 font-semibold"
}, tn = { class: "space-y-4 pt-2" }, nn = {
	key: 0,
	class: "space-y-3 max-h-[250px] overflow-y-auto pr-1"
}, rn = ["onClick"], an = { class: "grid grid-cols-1 sm:grid-cols-3 gap-3 pr-6" }, on = { class: "space-y-1" }, sn = ["onUpdate:modelValue"], cn = {
	key: 0,
	class: "text-rose-500 text-[9px] font-semibold"
}, ln = { class: "space-y-1" }, un = ["onUpdate:modelValue"], dn = {
	key: 0,
	class: "text-rose-500 text-[9px] font-semibold"
}, fn = { class: "space-y-1" }, pn = ["onUpdate:modelValue"], mn = { class: "flex items-center gap-2 pl-0.5" }, hn = ["id", "onUpdate:modelValue"], gn = ["for"], _n = {
	key: 1,
	class: "flex flex-col items-center justify-center py-8 text-slate-400 italic bg-slate-50/50 border border-dashed border-slate-200 rounded-xl"
}, vn = {
	key: 0,
	class: "text-rose-500 text-[10px] mt-2 font-semibold not-italic"
}, yn = { class: "px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end gap-3" }, bn = /* @__PURE__ */ u({
	__name: "TemplateModal",
	props: {
		isOpen: { type: Boolean },
		template: {}
	},
	emits: [
		"close",
		"save",
		"toast"
	],
	setup(t, { emit: n }) {
		let r = t, s = n, l = b(""), u = b(""), d = b(""), f = b([]), p = b({});
		E(() => r.isOpen, (e) => {
			e && m();
		});
		let m = () => {
			r.template ? (l.value = r.template.name, u.value = r.template.label, d.value = r.template.description, f.value = r.template.fields.map((e) => ({
				key: e.key,
				type: e.type,
				label: e.label,
				required: e.required
			}))) : (l.value = "", u.value = "", d.value = "", f.value = [{
				key: "brand_name",
				type: "text",
				label: "Brand Name",
				required: !0
			}]), p.value = {};
		}, h = () => {
			f.value.push({
				key: "",
				type: "text",
				label: "",
				required: !1
			});
		}, g = (e) => {
			f.value.splice(e, 1);
		}, _ = () => {
			let e = {};
			if (p.value = {}, l.value.trim() ? /^[a-z0-9_]+$/.test(l.value.trim()) || (e.name = "Code must contain only lowercase letters, numbers, and underscores") : e.name = "Template Code/Name is required", u.value.trim() || (e.label = "Display Label is required"), d.value.trim() || (e.description = "Description is required"), f.value.length === 0 ? e.fields = "At least one dynamic field schema is required" : f.value.forEach((t, n) => {
				t.key.trim() ? /^[a-z0-9_]+$/.test(t.key.trim()) || (e[`field_key_${n}`] = "Lowercase/underscore format only") : e[`field_key_${n}`] = "Key is required", t.label.trim() || (e[`field_label_${n}`] = "Label is required");
			}), Object.keys(e).length > 0) {
				p.value = e, s("toast", "Please fix validation errors before submitting template", "error");
				return;
			}
			s("save", {
				id: r.template?.id,
				name: l.value.trim(),
				label: u.value.trim(),
				description: d.value.trim(),
				fields: f.value.map((e) => ({
					key: e.key.trim(),
					label: e.label.trim(),
					type: e.type,
					required: e.required
				}))
			});
		};
		return (n, r) => t.isOpen ? (v(), a("div", Wt, [o("div", Gt, [
			o("div", Kt, [o("h2", qt, S(t.template ? "Edit Custom Template" : "Create Custom Template"), 1), o("button", {
				onClick: r[0] ||= (e) => n.$emit("close"),
				class: "p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
			}, [...r[5] ||= [o("svg", {
				class: "w-6 h-6",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])]),
			o("div", Jt, [o("div", Yt, [
				r[9] ||= o("h3", { class: "text-xs font-bold uppercase tracking-wider text-slate-500 pb-2 border-b border-slate-100" }, " Step 1: Template Metadata ", -1),
				o("div", Xt, [o("div", null, [
					r[6] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, [c(" Template Code/Name "), o("span", { class: "text-rose-500" }, "*")], -1),
					D(o("input", {
						type: "text",
						"onUpdate:modelValue": r[1] ||= (e) => l.value = e,
						disabled: !!t.template,
						placeholder: "e.g. minimalist_storefront",
						class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white disabled:bg-slate-100 disabled:text-slate-500 disabled:cursor-not-allowed"
					}, null, 8, Zt), [[T, l.value]]),
					p.value.name ? (v(), a("p", Qt, S(p.value.name), 1)) : i("", !0)
				]), o("div", null, [
					r[7] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, [c(" Display Label "), o("span", { class: "text-rose-500" }, "*")], -1),
					D(o("input", {
						type: "text",
						"onUpdate:modelValue": r[2] ||= (e) => u.value = e,
						placeholder: "e.g. Minimalist Storefront",
						class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white"
					}, null, 512), [[T, u.value]]),
					p.value.label ? (v(), a("p", $t, S(p.value.label), 1)) : i("", !0)
				])]),
				o("div", null, [
					r[8] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-1" }, [c(" Description "), o("span", { class: "text-rose-500" }, "*")], -1),
					D(o("textarea", {
						"onUpdate:modelValue": r[3] ||= (e) => d.value = e,
						placeholder: "Provide a description of this template layout configurations...",
						rows: "2",
						class: "block w-full px-3 py-2 border border-slate-200 rounded-lg bg-slate-50/20 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 text-sm transition-all focus:bg-white resize-none"
					}, null, 512), [[T, d.value]]),
					p.value.description ? (v(), a("p", en, S(p.value.description), 1)) : i("", !0)
				])
			]), o("div", tn, [o("div", { class: "flex justify-between items-center pb-2 border-b border-slate-100" }, [r[10] ||= o("h3", { class: "text-xs font-bold uppercase tracking-wider text-slate-500" }, [c(" Step 2: Define Fields Schema "), o("span", { class: "text-rose-500" }, "*")], -1), o("button", {
				type: "button",
				onClick: h,
				class: "flex items-center gap-1 text-xs text-indigo-600 hover:text-indigo-850 hover:underline font-bold cursor-pointer"
			}, " + Add Field ")]), f.value.length > 0 ? (v(), a("div", nn, [(v(!0), a(e, null, x(f.value, (e, t) => (v(), a("div", {
				key: t,
				class: "p-4 border border-slate-200 rounded-xl bg-slate-50/30 flex flex-col gap-3 relative"
			}, [
				o("button", {
					type: "button",
					onClick: (e) => g(t),
					class: "absolute top-3 right-3 text-slate-400 hover:text-rose-600 transition-colors cursor-pointer",
					title: "Remove Field"
				}, " ✕ ", 8, rn),
				o("div", an, [
					o("div", on, [
						r[11] ||= o("label", { class: "block text-[10px] font-bold text-slate-400 uppercase" }, "Field Key", -1),
						D(o("input", {
							type: "text",
							"onUpdate:modelValue": (t) => e.key = t,
							placeholder: "e.g. support_phone",
							class: "block w-full px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs transition-all"
						}, null, 8, sn), [[T, e.key]]),
						p.value[`field_key_${t}`] ? (v(), a("p", cn, S(p.value[`field_key_${t}`]), 1)) : i("", !0)
					]),
					o("div", ln, [
						r[12] ||= o("label", { class: "block text-[10px] font-bold text-slate-400 uppercase" }, "Field Label", -1),
						D(o("input", {
							type: "text",
							"onUpdate:modelValue": (t) => e.label = t,
							placeholder: "e.g. Customer Support Phone",
							class: "block w-full px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-1 focus:ring-indigo-500 text-xs transition-all"
						}, null, 8, un), [[T, e.label]]),
						p.value[`field_label_${t}`] ? (v(), a("p", dn, S(p.value[`field_label_${t}`]), 1)) : i("", !0)
					]),
					o("div", fn, [r[14] ||= o("label", { class: "block text-[10px] font-bold text-slate-400 uppercase" }, "Input Type", -1), D(o("select", {
						"onUpdate:modelValue": (t) => e.type = t,
						class: "block w-full px-2.5 py-1.5 border border-slate-200 rounded-lg bg-white text-slate-800 text-xs focus:outline-none focus:ring-1 focus:ring-indigo-500"
					}, [...r[13] ||= [
						o("option", { value: "text" }, "Text Input", -1),
						o("option", { value: "url" }, "URL Link", -1),
						o("option", { value: "email" }, "Email Address", -1)
					]], 8, pn), [[te, e.type]])])
				]),
				o("div", mn, [D(o("input", {
					type: "checkbox",
					id: `req-${t}`,
					"onUpdate:modelValue": (t) => e.required = t,
					class: "rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 w-3.5 h-3.5"
				}, null, 8, hn), [[w, e.required]]), o("label", {
					for: `req-${t}`,
					class: "text-xs text-slate-500 font-medium select-none cursor-pointer"
				}, " Required parameter inside storefront creations ", 8, gn)])
			]))), 128))])) : (v(), a("div", _n, [r[15] ||= o("span", null, "No fields configured. Click \"+ Add Field\" to define template fields.", -1), p.value.fields ? (v(), a("p", vn, S(p.value.fields), 1)) : i("", !0)]))])]),
			o("div", yn, [o("button", {
				type: "button",
				onClick: r[4] ||= (e) => n.$emit("close"),
				class: "px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
			}, " Cancel "), o("button", {
				type: "button",
				onClick: _,
				class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium rounded-lg text-sm shadow-md hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer"
			}, S(t.template ? "Save Changes" : "Create Template"), 1)])
		])])) : i("", !0);
	}
}), xn = {
	key: 0,
	class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm overflow-y-auto"
}, Sn = { class: "bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-lg w-full max-h-[85vh] overflow-hidden flex flex-col transition-all transform scale-100 duration-300" }, Cn = { class: "px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50" }, wn = { class: "text-lg font-bold text-slate-800 break-all pr-4" }, Tn = { class: "flex-1 overflow-y-auto p-6 space-y-5" }, En = { class: "space-y-3" }, Dn = { class: "flex justify-between items-start gap-4" }, On = { class: "text-sm font-mono font-bold text-indigo-600 break-all select-all" }, kn = {
	key: 0,
	class: "text-[9px] font-bold uppercase tracking-wider bg-indigo-50 text-indigo-700 border border-indigo-150 px-2 py-0.5 rounded"
}, An = { class: "text-xs text-slate-500 leading-relaxed bg-slate-50/50 p-3 rounded-lg border border-slate-100 mt-1" }, jn = { class: "space-y-3" }, Mn = { class: "text-[9px] uppercase font-bold text-slate-400 tracking-wider block border-b border-slate-100 pb-1.5" }, Nn = { class: "space-y-2.5 max-h-[250px] overflow-y-auto pr-1" }, Pn = { class: "min-w-0 flex-1 space-y-0.5" }, Fn = { class: "text-xs font-bold text-slate-700 truncate" }, In = { class: "text-[10px] font-mono text-slate-400 truncate" }, Ln = { class: "flex items-center gap-2 flex-shrink-0" }, Rn = { class: "text-[10px] font-semibold bg-indigo-50 text-indigo-700 px-2 py-0.5 rounded border border-indigo-100" }, zn = { class: "px-6 py-4 border-t border-slate-200 bg-slate-50 flex justify-end" }, Bn = /* @__PURE__ */ u({
	__name: "TemplateDetailsModal",
	props: {
		isOpen: { type: Boolean },
		template: {}
	},
	emits: ["close"],
	setup(t) {
		return (n, r) => t.isOpen && t.template ? (v(), a("div", xn, [o("div", Sn, [
			o("div", Cn, [o("h2", wn, S(t.template.label) + " Details ", 1), o("button", {
				onClick: r[0] ||= (e) => n.$emit("close"),
				class: "p-1 rounded hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
			}, [...r[2] ||= [o("svg", {
				class: "w-5 h-5",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M6 18L18 6M6 6l12 12"
			})], -1)]])]),
			o("div", Tn, [o("div", En, [o("div", Dn, [o("div", null, [r[3] ||= o("span", { class: "text-[9px] uppercase font-bold text-slate-400 tracking-wider" }, "Template Code / Name", -1), o("p", On, S(t.template.name), 1)]), t.template.id === "modern_cdn_template" ? (v(), a("span", kn, " System Template ")) : i("", !0)]), o("div", null, [r[4] ||= o("span", { class: "text-[9px] uppercase font-bold text-slate-400 tracking-wider" }, "Description", -1), o("p", An, S(t.template.description), 1)])]), o("div", jn, [o("span", Mn, " Fields Schema Layout Definitions (" + S(t.template.fields.length) + ") ", 1), o("div", Nn, [(v(!0), a(e, null, x(t.template.fields, (e) => (v(), a("div", {
				key: e.key,
				class: "p-3 border border-slate-200/80 rounded-xl bg-slate-50/30 flex items-center justify-between gap-4"
			}, [o("div", Pn, [o("p", Fn, S(e.label), 1), o("p", In, "key: " + S(e.key), 1)]), o("div", Ln, [o("span", Rn, S(e.type), 1), o("span", { class: p(["text-[10px] font-semibold px-2 py-0.5 rounded border", e.required ? "bg-rose-50 text-rose-700 border-rose-100" : "bg-slate-100 text-slate-500 border-slate-200"]) }, S(e.required ? "Required" : "Optional"), 3)])]))), 128))])])]),
			o("div", zn, [o("button", {
				type: "button",
				onClick: r[1] ||= (e) => n.$emit("close"),
				class: "px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white font-medium rounded-lg text-sm transition-colors cursor-pointer shadow-sm"
			}, " Close Preview ")])
		])])) : i("", !0);
	}
}), Vn = { class: "storefront-manager min-h-screen bg-slate-50 text-slate-800 font-sans p-6 relative overflow-hidden" }, Hn = {
	key: 0,
	class: "max-w-7xl mx-auto relative z-10"
}, Un = {
	key: 0,
	class: "animate-fadeIn"
}, Wn = { class: "flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6 border-b border-slate-200 pb-6" }, Gn = { class: "flex items-center gap-3" }, Kn = {
	key: 0,
	class: "mb-6 p-4 rounded-xl border bg-rose-50 border-rose-200/80 shadow-md text-rose-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 animate-slideDown"
}, qn = { class: "flex items-start gap-3" }, Jn = { class: "space-y-1" }, Yn = { class: "text-xs text-rose-700 font-medium leading-relaxed" }, Xn = { class: "flex items-center gap-2 self-end sm:self-center shrink-0" }, Zn = { class: "flex gap-2 border-b border-slate-200 mb-6" }, Qn = {
	key: 1,
	class: "space-y-6 animate-fadeIn"
}, $n = { class: "flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-xl border border-slate-200 shadow-sm" }, er = { class: "relative w-full sm:max-w-md" }, tr = { class: "text-xs text-slate-400 sm:ml-auto font-medium" }, nr = {
	key: 0,
	class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
}, rr = {
	key: 1,
	class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6"
}, ir = { class: "space-y-2 border-t border-slate-100 pt-3" }, ar = { class: "grid grid-cols-2 gap-2" }, or = {
	key: 2,
	class: "bg-white border border-slate-200 rounded-2xl p-12 text-center max-w-lg mx-auto mt-12 shadow-sm"
}, sr = {
	key: 0,
	class: "flex flex-col items-center gap-2"
}, cr = {
	key: 1,
	class: "text-xs text-slate-400 font-semibold tracking-wide"
}, lr = {
	key: 2,
	class: "space-y-6 animate-fadeIn"
}, ur = { class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" }, dr = ["onClick"], fr = { class: "flex justify-between items-start gap-4" }, pr = { class: "font-bold text-sm text-slate-800 break-all leading-snug" }, mr = {
	key: 0,
	class: "flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity flex-shrink-0"
}, hr = ["onClick"], gr = ["onClick"], _r = { class: "text-xs text-slate-400 mt-1.5 leading-relaxed line-clamp-2" }, vr = { class: "mt-4 border-t border-slate-100 pt-3 space-y-1.5" }, yr = { class: "flex flex-wrap gap-1.5" }, br = { class: "mt-4 flex justify-between items-center text-[10px] text-slate-400 font-medium" }, xr = {
	key: 0,
	class: "text-indigo-600 font-bold bg-indigo-50 px-1.5 py-0.5 rounded"
}, Sr = {
	key: 1,
	class: "animate-fadeIn"
}, Cr = {
	key: 1,
	class: "fixed inset-0 bg-slate-50 z-50 overflow-hidden flex flex-col font-sans"
}, wr = { class: "bg-white border-b border-slate-200 px-6 py-4 flex flex-col md:flex-row md:items-center justify-between gap-4 shadow-sm shrink-0" }, Tr = { class: "relative w-full md:w-80" }, Er = { class: "flex-1 overflow-y-auto w-full relative bg-slate-50/50" }, Dr = { class: "max-w-7xl mx-auto p-8 relative" }, Or = {
	key: 0,
	class: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10"
}, kr = ["onClick"], Ar = { class: "flex justify-between items-start gap-4" }, jr = { class: "font-extrabold text-base text-slate-800 break-all leading-snug group-hover:text-indigo-600 transition-colors" }, Mr = {
	key: 0,
	class: "text-[9px] uppercase font-bold text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100"
}, Nr = { class: "text-xs text-slate-500 mt-2 leading-relaxed" }, Pr = { class: "mt-5 border-t border-slate-100 pt-4 space-y-2" }, Fr = { class: "flex flex-wrap gap-1.5" }, Ir = { class: "mt-6 flex justify-between items-center text-xs border-t border-slate-50 pt-4" }, Lr = { class: "text-slate-400 font-mono" }, Rr = {
	key: 1,
	class: "text-center py-12"
}, zr = {
	key: 2,
	class: "fixed inset-0 bg-slate-50 z-50 overflow-hidden flex flex-col font-sans"
}, Br = { class: "bg-white border-b border-slate-200 px-6 py-4 flex items-center justify-between shadow-sm shrink-0" }, Vr = { class: "flex items-center gap-4" }, Hr = ["title"], Ur = { class: "text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" }, Wr = {
	key: 0,
	class: "text-xs text-slate-400 font-medium"
}, Gr = { class: "font-bold text-slate-600" }, Kr = { class: "flex items-center gap-1.5 md:gap-3 flex-wrap justify-end" }, qr = ["title"], Jr = { class: "hidden sm:inline" }, Yr = ["title"], Xr = { class: "hidden sm:inline" }, Zr = ["disabled"], Qr = {
	key: 0,
	class: "animate-spin -ml-1 mr-1.5 h-3.5 w-3.5 text-white flex-shrink-0",
	fill: "none",
	viewBox: "0 0 24 24"
}, $r = { class: "flex-1 overflow-hidden flex flex-col md:flex-row" }, ei = { class: "w-full md:w-64 bg-white border-b md:border-b-0 md:border-r border-slate-200 flex flex-col shrink-0" }, ti = { class: "p-4 border-b border-slate-200" }, ni = {
	key: 0,
	class: "text-[10px] text-rose-500 mt-1 font-medium"
}, ri = { class: "flex flex-row md:flex-col overflow-x-auto md:overflow-x-visible p-3 gap-1.5 scrollbar-thin shrink-0" }, ii = ["onClick"], ai = { class: "flex-1 bg-slate-50/50 overflow-hidden flex flex-col" }, oi = { class: "flex-1 overflow-y-auto p-4 md:p-12" }, si = { class: "max-w-7xl mx-auto bg-white rounded-2xl border border-slate-200/80 shadow-md p-6 md:p-8 min-h-[450px]" }, ci = {
	key: 0,
	class: "flex flex-col items-center justify-center py-20 space-y-4"
}, li = {
	key: 0,
	class: "space-y-6 animate-fadeIn"
}, ui = { class: "text-lg font-bold text-slate-800 border-b border-slate-100 pb-3" }, di = { class: "text-xs text-slate-400 mt-1" }, fi = ["id"], pi = {
	key: 0,
	class: "bg-slate-50 border border-slate-200/60 rounded-xl p-6 text-center text-slate-500 text-xs italic"
}, mi = {
	key: 0,
	class: "shrink-0 bg-white border-t border-slate-200 px-6 py-3 flex items-center justify-end shadow-[0_-2px_8px_rgba(0,0,0,0.04)]"
}, hi = ["disabled"], gi = {
	key: 0,
	class: "w-4 h-4 animate-spin",
	fill: "none",
	viewBox: "0 0 24 24"
}, _i = {
	key: 1,
	class: "w-4 h-4",
	fill: "none",
	viewBox: "0 0 24 24",
	stroke: "currentColor",
	"stroke-width": "2"
}, vi = {
	key: 3,
	class: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/40 backdrop-blur-sm"
}, yi = { class: "bg-white border border-slate-200 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden flex flex-col p-6 animate-fadeIn" }, bi = { class: "mb-5" }, xi = { class: "flex justify-end gap-3" }, Si = ["disabled"], Ci = { class: "fixed top-5 right-5 z-50 space-y-2 pointer-events-none max-w-sm w-full" }, wi = { class: "text-lg flex-shrink-0" }, Ti = { key: 0 }, Ei = { key: 1 }, Di = { key: 2 }, Oi = { class: "flex-1 text-sm font-semibold pr-2" }, ki = ["onClick"], Ai = /*#__PURE__*/ $(/* @__PURE__ */ u({
	__name: "index",
	props: {
		_p: {},
		_pp: {}
	},
	setup(n) {
		let u = n, { toasts: f, addToast: m, removeToast: _ } = ae(), { templates: y, loading: w, hasMore: ee, error: te, fetchTemplates: ie, loadMoreTemplates: O, createTemplate: k, updateTemplate: oe, deleteTemplate: A } = Se(m), { loading: j, isFallback: M, error: se, searchQuery: N, totalCount: ce, hasMore: P, filteredStorefronts: F, paginatedStorefronts: le, fetchStorefronts: ue, loadMore: de, updateStorefrontState: fe, saveStorefrontMeta: pe, deleteStorefront: me } = Ce({
			_p: u._p,
			_pp: u._pp,
			addToast: m
		}), he = t(() => se.value || te.value), ge = b(!1);
		E(he, (e) => {
			e && (ge.value = !1);
		});
		let _e = async () => {
			ge.value = !1, m("Retrying backend connection...", "info"), await Promise.all([ie(!0), ue(!0)]), he.value || m("Successfully connected to backend!", "success");
		}, ve = b(!1), I = b("storefronts"), L = b(null), ye = b(!1), R = b(null), be = b(!1), z = b(null), xe = b(!1), we = b(null), B = b(!1), V = b("list"), H = b(null), Te = b(""), U = b(!1), W = b(!1), Ee = b(0), G = b([]), K = b(""), De = t(() => G.value.find((e) => e.id === K.value)?.label || "Tab"), { activeTabFragments: q, templateEditorConfig: J, templateConfig: Y, activeHydrators: Oe, tabFragmentsData: ke, loadingTemplate: Ae, clearLocalStorageDrafts: je, getContainerId: Ne, fetchTemplateEditorConfig: Pe, fetchTemplateConfig: Fe, findCeFileInTemplate: Ie, loadActiveTabFragments: Le } = _t();
		g(async () => {
			J.value = await Pe(), J.value && J.value.tabs && (G.value = J.value.tabs, G.value.length > 0 && (K.value = G.value[0].id));
		}), E([K, V], () => {
			if (V.value === "configure" && K.value) {
				let e = R.value?.name || X.value || "testttt", t = R.value?.id || "";
				Le(K.value, e, t, {
					_p: u._p,
					_pp: u._pp,
					onSaveTrigger: rt
				});
			}
		});
		let X = b(""), Re = b(""), ze = b(""), Be = b("#4f46e5"), Ve = b("Inter"), He = b("compact"), Ue = b(""), We = b(""), Ge = b(""), Ke = b(""), qe = b(!0), Je = b(!0), Ye = t(() => {
			if (!X.value.trim() || !Y.value || !q.value || q.value.length === 0) return "";
			let e = q.value[0].ce_file_id || q.value[0].id;
			if (!e) return "";
			let t = (n) => {
				if (!n || typeof n != "object") return null;
				if (n.path && n.meta && (n.meta.id === e || n.meta.id === e.replace("_", "-"))) return n.path;
				if (Array.isArray(n)) for (let e of n) {
					let n = t(e);
					if (n) return n;
				}
				else for (let e of Object.keys(n)) {
					let r = t(n[e]);
					if (r) return r;
				}
				return null;
			}, n = t(Y.value) || "", r = X.value.trim().toLowerCase().replace(/\s+/g, "-");
			return !r.includes(".") && !r.startsWith("localhost") && (r = `${r}.in`), `${r.startsWith("localhost") || r.startsWith("127.0.0.1") ? "http://" : "https://"}${r}${n}`;
		}), Xe = t(() => {
			let e = R.value?.id;
			return e ? `https://app.1mn.io/?run_module__d_e_v=https://fastapi.dryutil.1mn.io/client-public/api/i/ona/ui_management?typ=ce_file%26id=${e}` : "";
		}), Z = b("tab"), Ze = () => {
			Xe.value && window.open(Xe.value, "_blank");
		}, Qe = t(() => {
			let e = Te.value.trim().toLowerCase();
			return e ? y.value.filter((t) => t.label.toLowerCase().includes(e) || t.name.toLowerCase().includes(e) || t.description.toLowerCase().includes(e)) : y.value;
		}), $e = b(!1), Q = b(""), et = (e) => {
			H.value = e, Q.value = "", $e.value = !0;
		}, tt = () => {
			Q.value.trim() && ($e.value = !1, Y.value = null, R.value = null, X.value = Q.value.trim(), Re.value = "", ze.value = "", Be.value = "#4f46e5", Ve.value = "Inter", He.value = "compact", Ue.value = "", We.value = "", Ge.value = "", Ke.value = "", qe.value = !0, Je.value = !0, Te.value = "", H.value ? nt(H.value) : I.value = "templates");
		}, nt = (e) => {
			H.value = e, L.value && (L.value.dta.template_name = e.name, L.value.dta.template_typ = e.name, L.value.dta.template_id = e.id), e.template && (Y.value = e.template), e.template_editor ? (J.value = e.template_editor, e.template_editor.tabs && e.template_editor.tabs.length > 0 && (G.value = e.template_editor.tabs, K.value = e.template_editor.tabs[0].id)) : K.value = "tab_1", Je.value = !0, V.value = "configure";
		}, rt = async () => {
			if (!W.value) {
				W.value = !0;
				try {
					if (!H.value || !Y.value) {
						m("No template loaded to save.", "error");
						return;
					}
					let e = (t, n, r) => {
						if (!t || typeof t != "object") return !1;
						if (t.meta && (t.meta.id === n || t.meta.id === n.replace("_", "-"))) return t.meta.ce_file = r, !0;
						if (t.id === n || t.id === n.replace("_", "-")) return t.meta ? t.meta.ce_file = r : t.ce_file = r, !0;
						for (let i of Object.keys(t)) if (e(t[i], n, r)) return !0;
						return !1;
					};
					for (let t of q.value) {
						let n = t.ce_file_id, r = ke.value[n];
						if (!r) continue;
						let i = r.l?.[0];
						if (!i) continue;
						let a = {
							config: { lazy_lib: {
								renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
								hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
								editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js",
								custom_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/custom.es.js"
							} },
							data: { l: [{
								id: i.id || n,
								type: i.type,
								slug: i.slug || i.type,
								data: i.data
							}] }
						};
						e(Y.value, n, a);
					}
					je();
					let t = {};
					H.value.fields.forEach((e) => {
						e.key === "theme_color" ? t[e.key] = Be.value : e.key === "support_email" || e.key === "email" ? t[e.key] = ze.value : e.key === "seo_title" ? t[e.key] = Ue.value : e.key === "seo_description" ? t[e.key] = We.value : e.key === "slogan" || e.key === "brand_slogan" ? t[e.key] = Re.value : R.value?.dta?.fields_values?.[e.key] && (t[e.key] = String(R.value.dta.fields_values[e.key]));
					}), await pe(R.value, {
						name: X.value.trim(),
						template: H.value,
						ceFile: H.value.name === "modern_cdn_template" && typeof R.value?.dta?.ce_file == "string" ? R.value.dta.ce_file : "",
						fieldsValues: t,
						entireTemplate: Y.value
					}), Ee.value++, m(`${De.value} saved successfully!`, "success");
				} finally {
					W.value = !1;
				}
			}
		}, it = async () => {
			if (!(!X.value.trim() || B.value) && (!H.value && y.value.length > 0 && (H.value = y.value[0]), H.value)) {
				B.value = !0;
				try {
					let e = {};
					if (H.value.fields.forEach((t) => {
						t.key === "theme_color" ? e[t.key] = Be.value : t.key === "support_email" || t.key === "email" ? e[t.key] = ze.value : t.key === "seo_title" ? e[t.key] = Ue.value : t.key === "seo_description" ? e[t.key] = We.value : t.key === "slogan" || t.key === "brand_slogan" ? e[t.key] = Re.value : R.value && R.value.dta?.fields_values?.[t.key] ? e[t.key] = String(R.value.dta.fields_values[t.key]) : e[t.key] = t.required ? `Dummy ${t.label}` : "";
					}), Y.value) {
						let e = (t, n, r) => {
							if (!t || typeof t != "object") return !1;
							if (t.meta && (t.meta.id === n || t.meta.id === n.replace("_", "-"))) return t.meta.ce_file = r, !0;
							if (t.id === n || t.id === n.replace("_", "-")) return t.meta ? t.meta.ce_file = r : t.ce_file = r, !0;
							for (let i of Object.keys(t)) if (e(t[i], n, r)) return !0;
							return !1;
						};
						for (let [t, n] of Object.entries(ke.value)) {
							let r = n.l?.[0];
							if (r) {
								let n = {
									config: { lazy_lib: {
										renderer_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/renderer.es.js",
										hydrator_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/hydrator.es.js",
										editor_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/editor.es.js",
										custom_src: "https://cdn.jsdelivr.net/gh/1mn-io/mn-app/modules/{*}/dist/custom.es.js"
									} },
									data: { l: [{
										id: r.id || t,
										type: r.type,
										slug: r.slug || r.type,
										data: r.data
									}] }
								};
								e(Y.value, t, n);
							}
						}
					}
					await pe(R.value, {
						name: X.value.trim(),
						template: H.value,
						ceFile: H.value.name === "modern_cdn_template" ? typeof R.value?.dta?.ce_file == "string" ? R.value.dta.ce_file : "https://raw.githubusercontent.com/dummy/storefront.json" : "",
						fieldsValues: e,
						entireTemplate: Y.value
					}), je(), V.value = "list", R.value = null;
				} finally {
					B.value = !1;
				}
			}
		}, at = () => {
			xe.value = !1, we.value = null;
		}, ot = () => {
			z.value = null, be.value = !0;
		}, st = (e) => {
			z.value = e, be.value = !0;
		}, ct = () => {
			be.value = !1, z.value = null;
		}, lt = async (e) => {
			let t = !1;
			t = e.id ? await oe(e.id, {
				name: e.name,
				label: e.label,
				description: e.description,
				fields: e.fields
			}) : await k(e), t && ct();
		}, ut = async (e) => {
			await A(e);
		}, dt = b(null), $ = null;
		E(dt, (e) => {
			$ &&= ($.disconnect(), null), e && ($ = new IntersectionObserver((e) => {
				e[0].isIntersecting && !j.value && P.value && I.value === "storefronts" && de();
			}, {
				rootMargin: "100px",
				threshold: .1
			}), $.observe(e));
		});
		let pt = () => {
			Y.value = null, L.value = null;
		}, mt = async (e) => {
			let t = await fe(e.id, e.dta, e.entireTemplate);
			t && (L.value = t, m("Storefront configuration saved successfully!", "success"));
		}, ht = (e) => {
			je(), Y.value = null, R.value = e;
			let t = e.dta?.template_name || (e.dta?.ce_file ? "modern_cdn_template" : "storefront_template"), n = y.value.find((e) => e.name === t) || y.value[0];
			H.value = n, X.value = e.name, Re.value = String(e.dta?.fields_values?.slogan || e.dta?.fields_values?.brand_slogan || ""), ze.value = String(e.dta?.fields_values?.email || e.dta?.fields_values?.support_email || ""), Be.value = String(e.dta?.fields_values?.theme_color || "#4f46e5"), Ue.value = String(e.dta?.fields_values?.seo_title || ""), We.value = String(e.dta?.fields_values?.seo_description || ""), Ge.value = "", Ve.value = "Inter", He.value = "compact", Ke.value = "", qe.value = !0, Je.value = !0, V.value = "configure", K.value = "tab_1";
		}, vt = () => {
			je(), V.value = "list", R.value = null;
		}, yt = () => {
			ye.value = !1, R.value = null;
		}, bt = async (e) => {
			B.value = !0;
			try {
				await pe(R.value, e), yt();
			} finally {
				B.value = !1;
			}
		}, xt = async (e) => {
			await me(e);
		};
		return g(async () => {
			await ie(!0), await ue(!0), u._p.f.call("msg", {
				type: "on:change",
				_p: u._p,
				_pp: u._pp,
				custom: { loaded: !0 }
			});
		}), h(() => {
			$ && dt.value && $.unobserve(dt.value);
		}), (t, n) => (v(), a("div", Vn, [
			n[55] ||= o("div", { class: "absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full bg-indigo-500/5 blur-[120px] pointer-events-none" }, null, -1),
			n[56] ||= o("div", { class: "absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full bg-purple-500/5 blur-[120px] pointer-events-none" }, null, -1),
			V.value === "list" ? (v(), a("div", Hn, [L.value ? (v(), a("div", Sr, [l(Ut, {
				storefront: L.value,
				templates: C(y),
				"loading-templates": C(w),
				"has-more-templates": C(ee),
				_p: u._p,
				_pp: u._pp,
				onBack: pt,
				onSave: mt,
				onLoadMoreTemplates: C(O),
				onToast: C(m)
			}, null, 8, [
				"storefront",
				"templates",
				"loading-templates",
				"has-more-templates",
				"_p",
				"_pp",
				"onLoadMoreTemplates",
				"onToast"
			])])) : (v(), a("div", Un, [
				o("header", Wn, [n[16] ||= o("div", null, [o("h1", { class: "text-3xl font-extrabold tracking-tight bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" }, " Storefront Manager "), o("p", { class: "text-slate-500 mt-1 text-sm" }, " Manage your storefront configurations, layout templates, and fields schemas. ")], -1), o("div", Gn, [
					o("span", { class: p(["inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold border", C(M) ? "bg-amber-50 text-amber-700 border-amber-200" : "bg-emerald-50 text-emerald-700 border-emerald-200"]) }, [o("span", { class: p(["w-1.5 h-1.5 mr-1.5 rounded-full", C(M) ? "bg-amber-500" : "bg-emerald-500"]) }, null, 2), c(" " + S(C(M) ? "Offline Mode (Mock Data)" : "Online Mode"), 1)], 2),
					ve.value ? (v(), a("button", {
						key: 0,
						onClick: ot,
						class: "flex items-center gap-1.5 bg-white hover:bg-slate-50 border border-slate-200 text-slate-600 hover:text-slate-800 font-semibold px-3.5 py-2 rounded-lg shadow-sm hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-xs"
					}, " + Create Template ")) : i("", !0),
					o("button", {
						onClick: n[0] ||= (e) => I.value = "templates",
						class: "flex items-center gap-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium px-4 py-2 rounded-lg shadow-md hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer text-sm"
					}, [...n[15] ||= [o("svg", {
						xmlns: "http://www.w3.org/2000/svg",
						class: "w-5 h-5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [o("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M12 4v16m8-8H4"
					})], -1), c(" Create Storefront ", -1)]])
				])]),
				he.value && !ge.value ? (v(), a("div", Kn, [o("div", qn, [n[19] ||= o("span", { class: "text-xl flex-shrink-0 mt-0.5 sm:mt-0" }, "⚠️", -1), o("div", Jn, [
					n[17] ||= o("h4", { class: "font-bold text-sm text-rose-900" }, "Backend Connection Refused / Reset", -1),
					o("p", Yn, S(he.value), 1),
					n[18] ||= o("p", { class: "text-[10px] text-rose-600 font-normal" }, [
						c(" To fix this, check that your FastAPI backend is running via "),
						o("code", { class: "bg-rose-100 px-1 py-0.5 rounded font-mono text-[9px] text-rose-800" }, "poetry run uvicorn src.index:app --reload"),
						c(" in the backend workspace directory. ")
					], -1)
				])]), o("div", Xn, [o("button", {
					onClick: _e,
					class: "px-3.5 py-1.5 bg-rose-600 hover:bg-rose-700 text-white font-semibold text-xs rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer flex items-center gap-1.5"
				}, [...n[20] ||= [o("svg", {
					class: "w-3.5 h-3.5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15H19"
				})], -1), c(" Retry Connection ", -1)]]), o("button", {
					onClick: n[1] ||= (e) => ge.value = !0,
					class: "p-1.5 hover:bg-rose-100 rounded-lg text-rose-500 hover:text-rose-700 transition-colors cursor-pointer",
					title: "Dismiss"
				}, " ✕ ")])])) : i("", !0),
				o("div", Zn, [o("button", {
					onClick: n[2] ||= (e) => I.value = "storefronts",
					class: p(["px-5 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer", I.value === "storefronts" ? "border-indigo-600 text-indigo-600 font-bold" : "border-transparent text-slate-400 hover:text-slate-600"])
				}, " Storefronts ", 2), o("button", {
					onClick: n[3] ||= (e) => I.value = "templates",
					class: p(["px-5 py-2.5 text-sm font-bold border-b-2 transition-all cursor-pointer", I.value === "templates" ? "border-indigo-600 text-indigo-600 font-bold" : "border-transparent text-slate-400 hover:text-slate-600"])
				}, " Templates Catalog ", 2)]),
				I.value === "storefronts" ? (v(), a("div", Qn, [
					o("div", $n, [o("div", er, [n[21] ||= o("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [o("svg", {
						class: "h-5 w-5 text-slate-400",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [o("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
					})])], -1), D(o("input", {
						type: "text",
						"onUpdate:modelValue": n[4] ||= (e) => d(N) ? N.value = e : null,
						placeholder: "Search storefronts by name, brand or email...",
						class: "block w-full pl-10 pr-4 py-2 border border-slate-200 rounded-lg bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all focus:bg-white"
					}, null, 512), [[T, C(N)]])]), o("div", tr, " Showing " + S(C(ce)) + " storefronts ", 1)]),
					C(F).length > 0 ? (v(), a("div", nr, [(v(!0), a(e, null, x(C(le), (e) => (v(), r(Me, {
						key: e.id,
						storefront: e,
						onEdit: ht,
						onDelete: xt,
						onSelect: ht
					}, null, 8, ["storefront"]))), 128))])) : i("", !0),
					C(j) ? (v(), a("div", rr, [(v(), a(e, null, x(3, (t) => o("div", {
						key: t,
						class: "bg-white border border-slate-200/80 rounded-xl p-5 animate-pulse space-y-4 shadow-sm"
					}, [
						n[23] ||= s("<div class=\"flex justify-between items-start\" data-v-0c13908a><div class=\"space-y-2 w-2/3\" data-v-0c13908a><div class=\"h-5 bg-slate-100 rounded w-full\" data-v-0c13908a></div><div class=\"h-3 bg-slate-100 rounded w-1/3\" data-v-0c13908a></div></div><div class=\"h-8 bg-slate-100 rounded w-8\" data-v-0c13908a></div></div>", 1),
						o("div", ir, [o("div", ar, [(v(), a(e, null, x(4, (e) => o("div", {
							class: "space-y-1",
							key: e
						}, [...n[22] ||= [o("div", { class: "h-2 bg-slate-100 rounded w-1/2" }, null, -1), o("div", { class: "h-3 bg-slate-100 rounded w-3/4" }, null, -1)]])), 64))])]),
						n[24] ||= o("div", { class: "h-2 bg-slate-100 rounded w-1/2 mt-4 pt-2" }, null, -1)
					])), 64))])) : i("", !0),
					C(F).length === 0 && !C(j) ? (v(), a("div", or, [n[25] ||= s("<svg class=\"mx-auto h-12 w-12 text-slate-400 mb-4\" fill=\"none\" viewBox=\"0 0 24 24\" stroke=\"currentColor\" stroke-width=\"1.5\" data-v-0c13908a><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.656 48.656 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7C4.795 9.547 4.75 10.768 4.75 12s.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.092-1.209.138-2.43.138-3.662z\" data-v-0c13908a></path><path stroke-linecap=\"round\" stroke-linejoin=\"round\" d=\"M15 9l-6 6m0-6l6 6\" data-v-0c13908a></path></svg><h3 class=\"text-lg font-bold text-slate-700\" data-v-0c13908a>No storefronts found</h3><p class=\"text-slate-500 text-sm mt-1\" data-v-0c13908a>Try adjusting your search query or create a new storefront.</p>", 3), o("button", {
						onClick: n[5] ||= (e) => I.value = "templates",
						class: "mt-5 inline-flex items-center justify-center px-4 py-2 border border-slate-200 rounded-lg text-sm font-medium text-slate-600 bg-white hover:bg-slate-50 hover:text-slate-800 transition-all cursor-pointer shadow-sm"
					}, " Create Storefront ")])) : i("", !0),
					o("div", {
						ref_key: "observerRef",
						ref: dt,
						class: "flex justify-center items-center py-10 mt-6 min-h-[50px] transition-all"
					}, [C(j) && C(F).length > 0 ? (v(), a("div", sr, [...n[26] ||= [o("svg", {
						class: "animate-spin h-6 w-6 text-indigo-600",
						fill: "none",
						viewBox: "0 0 24 24"
					}, [o("circle", {
						class: "opacity-25",
						cx: "12",
						cy: "12",
						r: "10",
						stroke: "currentColor",
						"stroke-width": "4"
					}), o("path", {
						class: "opacity-75",
						fill: "currentColor",
						d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
					})], -1), o("span", { class: "text-xs text-slate-400 font-medium" }, "Loading next storefronts...", -1)]])) : !C(P) && C(F).length > 0 ? (v(), a("div", cr, " All storefronts loaded ")) : i("", !0)], 512)
				])) : i("", !0),
				I.value === "templates" ? (v(), a("div", lr, [n[31] ||= o("div", { class: "bg-indigo-50 text-indigo-700 p-4 rounded-xl text-sm font-semibold border border-indigo-100 flex items-center gap-3" }, [o("svg", {
					class: "w-5 h-5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
				})]), c(" Select a template below to create a new storefront. ")], -1), o("div", ur, [ve.value ? (v(), a("div", {
					key: 0,
					onClick: ot,
					class: "border-2 border-dashed border-slate-200 hover:border-indigo-400 rounded-2xl p-6 flex flex-col items-center justify-center gap-3 cursor-pointer group bg-white hover:bg-indigo-50/20 transition-all hover:shadow-md min-h-[180px]"
				}, [...n[27] ||= [o("div", { class: "h-10 w-10 bg-indigo-50 text-indigo-600 rounded-full flex items-center justify-center font-bold text-xl group-hover:scale-110 transition-transform" }, " + ", -1), o("span", { class: "text-xs font-bold text-slate-500 group-hover:text-indigo-600" }, "Create Custom Template", -1)]])) : i("", !0), (v(!0), a(e, null, x(C(y), (t) => (v(), a("div", {
					key: t.id,
					onClick: (e) => et(t),
					class: "bg-white border border-slate-200/80 rounded-2xl p-5 shadow-sm flex flex-col justify-between hover:shadow-md hover:border-slate-300 transition-all relative group min-h-[180px] cursor-pointer"
				}, [o("div", null, [
					o("div", fr, [o("h3", pr, S(t.label), 1), ve.value && t.id !== "modern_cdn_template" ? (v(), a("div", mr, [o("button", {
						onClick: re((e) => st(t), ["stop"]),
						class: "p-1 rounded hover:bg-indigo-50 text-indigo-600 transition-colors cursor-pointer",
						title: "Edit Schema"
					}, [...n[28] ||= [o("svg", {
						class: "w-3.5 h-3.5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [o("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"
					})], -1)]], 8, hr), o("button", {
						onClick: re((e) => ut(t.id), ["stop"]),
						class: "p-1 rounded hover:bg-rose-50 text-rose-600 transition-colors cursor-pointer",
						title: "Delete Template"
					}, [...n[29] ||= [o("svg", {
						class: "w-3.5 h-3.5",
						fill: "none",
						viewBox: "0 0 24 24",
						stroke: "currentColor",
						"stroke-width": "2"
					}, [o("path", {
						"stroke-linecap": "round",
						"stroke-linejoin": "round",
						d: "M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
					})], -1)]], 8, gr)])) : i("", !0)]),
					o("p", _r, S(t.description), 1),
					o("div", vr, [n[30] ||= o("span", { class: "text-[9px] uppercase font-bold text-slate-400 tracking-wider" }, "Dynamic Fields Schema", -1), o("div", yr, [(v(!0), a(e, null, x(t.fields, (e) => (v(), a("span", {
						key: e.key,
						class: "inline-block text-[10px] bg-slate-50 border border-slate-200 rounded px-2 py-0.5 font-medium text-slate-600 font-mono"
					}, S(e.key) + " (" + S(e.type) + ") ", 1))), 128))])])
				]), o("div", br, [o("span", null, "code: " + S(t.name), 1), t.id === "modern_cdn_template" ? (v(), a("span", xr, "System")) : i("", !0)])], 8, dr))), 128))])])) : i("", !0)
			]))])) : i("", !0),
			V.value === "select_template" ? (v(), a("div", Cr, [o("header", wr, [o("div", { class: "flex items-center gap-4" }, [o("button", {
				onClick: vt,
				class: "flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all cursor-pointer shadow-sm group",
				title: "Back to List"
			}, [...n[32] ||= [o("svg", {
				class: "w-5 h-5 group-hover:-translate-x-0.5 transition-transform",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 19l-7-7 7-7"
			})], -1)]]), n[33] ||= o("div", null, [o("h1", { class: "text-xl font-bold bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent" }, " Choose a Storefront Template "), o("p", { class: "text-xs text-slate-400 font-medium" }, "Select a layout design configuration to get started")], -1)]), o("div", Tr, [n[34] ||= o("div", { class: "absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none" }, [o("svg", {
				class: "h-4 w-4 text-slate-400",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
			})])], -1), D(o("input", {
				type: "text",
				"onUpdate:modelValue": n[6] ||= (e) => Te.value = e,
				placeholder: "Search templates...",
				class: "block w-full pl-10 pr-4 py-2.5 border border-slate-200 rounded-lg bg-slate-50/50 text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all focus:bg-white"
			}, null, 512), [[T, Te.value]])])]), o("main", Er, [o("div", Dr, [
				n[38] ||= o("div", { class: "absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-500/5 blur-[100px] pointer-events-none" }, null, -1),
				n[39] ||= o("div", { class: "absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/5 blur-[100px] pointer-events-none" }, null, -1),
				Qe.value.length > 0 ? (v(), a("div", Or, [(v(!0), a(e, null, x(Qe.value, (t) => (v(), a("div", {
					key: t.id,
					onClick: (e) => nt(t),
					class: "bg-white border border-slate-200/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between hover:shadow-xl hover:border-indigo-400 transition-all duration-300 relative group cursor-pointer hover:-translate-y-1"
				}, [o("div", null, [
					o("div", Ar, [o("h3", jr, S(t.label), 1), t.name === "modern_cdn_template" ? (v(), a("span", Mr, " System ")) : i("", !0)]),
					o("p", Nr, S(t.description), 1),
					o("div", Pr, [n[35] ||= o("span", { class: "text-[9px] uppercase font-extrabold text-slate-400 tracking-wider" }, "Available Schema Fields", -1), o("div", Fr, [(v(!0), a(e, null, x(t.fields, (e) => (v(), a("span", {
						key: e.key,
						class: "inline-block text-[10px] bg-slate-50 border border-slate-100 rounded-md px-2 py-1 font-semibold text-slate-600 font-mono"
					}, S(e.key), 1))), 128))])])
				]), o("div", Ir, [o("span", Lr, "code: " + S(t.name), 1), n[36] ||= o("span", { class: "text-indigo-600 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1" }, [c(" Select & Configure "), o("svg", {
					class: "w-3.5 h-3.5",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M9 5l7 7-7 7"
				})])], -1)])], 8, kr))), 128))])) : (v(), a("div", Rr, [...n[37] ||= [o("p", { class: "text-slate-400 text-sm" }, "No templates match your search.", -1)]]))
			])])])) : i("", !0),
			V.value === "configure" ? (v(), a("div", zr, [o("header", Br, [o("div", Vr, [o("button", {
				onClick: n[7] ||= (e) => R.value ? vt() : V.value = "select_template",
				class: "flex items-center justify-center p-2 rounded-lg border border-slate-200 bg-slate-50 hover:bg-slate-100 text-slate-500 hover:text-slate-700 transition-all cursor-pointer shadow-sm group",
				title: R.value ? "Back to List" : "Back to Template Selection"
			}, [...n[40] ||= [o("svg", {
				class: "w-5 h-5 group-hover:-translate-x-0.5 transition-transform",
				fill: "none",
				viewBox: "0 0 24 24",
				stroke: "currentColor",
				"stroke-width": "2"
			}, [o("path", {
				"stroke-linecap": "round",
				"stroke-linejoin": "round",
				d: "M15 19l-7-7 7-7"
			})], -1)]], 8, Hr), o("div", null, [o("h1", Ur, S(R.value ? "Edit Storefront" : "Create Storefront"), 1), R.value ? (v(), a("p", Wr, [n[41] ||= c(" Editing: ", -1), o("span", Gr, S(R.value.name), 1)])) : i("", !0)])]), o("div", Kr, [
				Ye.value && R.value ? (v(), a("button", {
					key: 0,
					onClick: n[8] ||= (e) => {
						U.value = Z.value !== "tab" || !U.value, Z.value = "tab";
					},
					class: p(["p-2 sm:px-4 sm:py-2 border rounded-lg text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer flex-shrink-0", U.value && Z.value === "tab" ? "bg-indigo-600 text-white border-indigo-700 hover:bg-indigo-700 shadow-indigo-100" : "border-slate-200 hover:border-indigo-200 text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-indigo-50/20"]),
					title: U.value && Z.value === "tab" ? "Hide Tab Preview" : "Tab Preview"
				}, [n[42] ||= o("svg", {
					class: "w-4 h-4 flex-shrink-0",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M15 12a3 3 0 11-6 0 3 3 0 016 0z"
				}), o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
				})], -1), o("span", Jr, S(U.value && Z.value === "tab" ? "Hide Tab Preview" : "Tab Preview"), 1)], 10, qr)) : i("", !0),
				Xe.value ? (v(), a("button", {
					key: 1,
					onClick: n[9] ||= (e) => {
						U.value = Z.value !== "site" || !U.value, Z.value = "site";
					},
					class: p(["p-2 sm:px-4 sm:py-2 border rounded-lg text-sm font-semibold flex items-center gap-1.5 shadow-sm transition-all cursor-pointer flex-shrink-0", U.value && Z.value === "site" ? "bg-emerald-600 text-white border-emerald-700 hover:bg-emerald-700 shadow-emerald-100" : "border-slate-200 hover:border-emerald-200 text-slate-600 hover:text-emerald-600 bg-slate-50/50 hover:bg-emerald-50/20"]),
					title: U.value && Z.value === "site" ? "Hide Site Preview" : "Site Preview"
				}, [n[43] ||= o("svg", {
					class: "w-4 h-4 flex-shrink-0",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
				})], -1), o("span", Xr, S(U.value && Z.value === "site" ? "Hide Site" : "Site Preview"), 1)], 10, Yr)) : i("", !0),
				Xe.value ? (v(), a("button", {
					key: 2,
					onClick: Ze,
					class: "p-2 sm:px-4 sm:py-2 border border-slate-200 hover:border-indigo-200 rounded-lg text-sm font-semibold text-slate-600 hover:text-indigo-600 bg-slate-50/50 hover:bg-indigo-50/20 transition-all cursor-pointer flex items-center gap-1.5 shadow-sm flex-shrink-0",
					title: "Open Live URL in New Tab"
				}, [...n[44] ||= [o("svg", {
					class: "w-4 h-4 flex-shrink-0",
					fill: "none",
					viewBox: "0 0 24 24",
					stroke: "currentColor",
					"stroke-width": "2"
				}, [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
				})], -1), o("span", { class: "hidden sm:inline" }, "View Live", -1)]])) : i("", !0),
				o("button", {
					onClick: n[10] ||= (e) => R.value ? vt() : V.value = "select_template",
					class: "px-3 py-2 sm:px-4 sm:py-2 border border-slate-200 rounded-lg text-sm font-semibold text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer flex-shrink-0"
				}, [...n[45] ||= [o("span", null, "Cancel", -1)]]),
				o("button", {
					onClick: it,
					disabled: !X.value.trim() || B.value,
					class: "px-3.5 py-2 sm:px-5 sm:py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-bold rounded-lg text-sm shadow-md hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-2 flex-shrink-0"
				}, [B.value ? (v(), a("svg", Qr, [...n[46] ||= [o("circle", {
					class: "opacity-25",
					cx: "12",
					cy: "12",
					r: "10",
					stroke: "currentColor",
					"stroke-width": "4"
				}, null, -1), o("path", {
					class: "opacity-75",
					fill: "currentColor",
					d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				}, null, -1)]])) : i("", !0), o("span", null, S(B.value ? "Saving..." : R.value ? "Save" : "Create"), 1)], 8, Zr)
			])]), o("div", $r, [
				o("aside", ei, [
					o("div", ti, [
						n[47] ||= o("label", { class: "block text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-2" }, "Storefront Name", -1),
						D(o("input", {
							type: "text",
							"onUpdate:modelValue": n[11] ||= (e) => X.value = e,
							placeholder: "Enter storefront name...",
							class: p(["block w-full px-3 py-2.5 border border-slate-200 rounded-lg bg-white text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all font-medium", { "ring-2 ring-rose-400 border-rose-400": !X.value.trim() && X.value !== "" }])
						}, null, 2), [[T, X.value]]),
						!X.value.trim() && X.value !== "" ? (v(), a("p", ni, "Name is required")) : i("", !0)
					]),
					n[48] ||= o("div", { class: "p-4 border-b border-slate-100 bg-slate-50/50 hidden md:block" }, [o("span", { class: "text-[10px] font-bold text-slate-400 uppercase tracking-wider" }, "Configuration Menu")], -1),
					o("nav", ri, [(v(!0), a(e, null, x(G.value, (e) => (v(), a("button", {
						key: e.id,
						onClick: (t) => K.value = e.id,
						class: p(["flex items-center gap-2 md:gap-3 px-4 py-2.5 md:py-3 rounded-xl text-sm font-semibold transition-all cursor-pointer border text-left whitespace-nowrap", K.value === e.id ? "bg-indigo-50 text-indigo-700 border-indigo-100 shadow-sm" : "text-slate-500 border-transparent hover:text-slate-800 hover:bg-slate-50/80"])
					}, [o("span", null, S(e.label), 1)], 10, ii))), 128))])
				]),
				o("main", ai, [o("div", oi, [o("div", si, [C(Ae) ? (v(), a("div", ci, [...n[49] ||= [o("div", { class: "w-10 h-10 border-4 border-indigo-600 border-t-transparent rounded-full animate-spin" }, null, -1), o("p", { class: "text-slate-500 text-sm font-medium animate-pulse" }, "Loading storefront template from backend...", -1)]])) : (v(!0), a(e, { key: 1 }, x(G.value, (t) => (v(), a("div", { key: t.id }, [K.value === t.id ? (v(), a("div", li, [
					o("div", null, [o("h2", ui, S(t.label), 1), o("p", di, "Configure sections and settings for the " + S(t.label) + ".", 1)]),
					(v(!0), a(e, null, x(C(q), (e) => (v(), a("div", {
						key: e.ce_file_id || e.id,
						class: "bg-white rounded-xl border border-slate-200 p-4 shadow-sm"
					}, [o("div", { id: C(Ne)(e.ce_file_id || e.id) }, null, 8, fi)]))), 128)),
					C(q).length === 0 ? (v(), a("div", pi, " No custom configurations mapped to this tab. ")) : i("", !0)
				])) : i("", !0)]))), 128))])]), C(q).length > 0 && !C(Ae) && R.value ? (v(), a("div", mi, [o("button", {
					onClick: rt,
					disabled: W.value,
					class: p(["inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-bold shadow-md transition-all cursor-pointer", W.value ? "bg-slate-300 text-slate-500 cursor-not-allowed" : "bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white hover:shadow-lg hover:scale-[1.02] active:scale-[0.98]"])
				}, [W.value ? (v(), a("svg", gi, [...n[50] ||= [o("circle", {
					class: "opacity-25",
					cx: "12",
					cy: "12",
					r: "10",
					stroke: "currentColor",
					"stroke-width": "4"
				}, null, -1), o("path", {
					class: "opacity-75",
					fill: "currentColor",
					d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
				}, null, -1)]])) : (v(), a("svg", _i, [...n[51] ||= [o("path", {
					"stroke-linecap": "round",
					"stroke-linejoin": "round",
					d: "M5 13l4 4L19 7"
				}, null, -1)]])), c(" " + S(W.value ? "Saving..." : `Save ${De.value}`), 1)], 10, hi)])) : i("", !0)]),
				l(gt, {
					show: U.value,
					"onUpdate:show": n[12] ||= (e) => U.value = e,
					activeTabUrl: Z.value === "site" ? Xe.value : Ye.value,
					forceRefreshKey: Ee.value
				}, null, 8, [
					"show",
					"activeTabUrl",
					"forceRefreshKey"
				])
			])])) : i("", !0),
			l(ft, {
				"is-open": ye.value,
				storefront: R.value,
				templates: C(y),
				"loading-templates": C(w),
				"has-more-templates": C(ee),
				saving: B.value,
				onClose: yt,
				onSave: bt,
				onLoadMoreTemplates: C(O),
				onToast: C(m)
			}, null, 8, [
				"is-open",
				"storefront",
				"templates",
				"loading-templates",
				"has-more-templates",
				"saving",
				"onLoadMoreTemplates",
				"onToast"
			]),
			l(bn, {
				"is-open": be.value,
				template: z.value,
				onClose: ct,
				onSave: lt,
				onToast: C(m)
			}, null, 8, [
				"is-open",
				"template",
				"onToast"
			]),
			l(Bn, {
				"is-open": xe.value,
				template: we.value,
				onClose: at
			}, null, 8, ["is-open", "template"]),
			$e.value ? (v(), a("div", vi, [o("div", yi, [
				n[53] ||= o("h3", { class: "text-lg font-bold text-slate-800 mb-2" }, "Create New Storefront", -1),
				n[54] ||= o("p", { class: "text-xs text-slate-500 mb-4" }, "Please give your storefront a name to start configuring its layout and details.", -1),
				o("div", bi, [n[52] ||= o("label", { class: "block text-xs font-bold text-slate-500 uppercase mb-2" }, "Storefront Name", -1), D(o("input", {
					type: "text",
					"onUpdate:modelValue": n[13] ||= (e) => Q.value = e,
					placeholder: "e.g. My Awesome Shop",
					class: "block w-full px-3.5 py-2.5 border border-slate-200 rounded-xl bg-slate-50/50 text-slate-850 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-sm transition-all focus:bg-white font-medium",
					onKeyup: ne(tt, ["enter"])
				}, null, 544), [[T, Q.value]])]),
				o("div", xi, [o("button", {
					type: "button",
					onClick: n[14] ||= (e) => $e.value = !1,
					class: "px-4 py-2 border border-slate-200 rounded-lg text-xs font-semibold text-slate-500 bg-white hover:bg-slate-50 hover:text-slate-700 transition-colors cursor-pointer"
				}, " Cancel "), o("button", {
					type: "button",
					onClick: tt,
					disabled: !Q.value.trim(),
					class: "px-4 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 disabled:from-slate-300 disabled:to-slate-400 text-white font-bold rounded-lg text-xs shadow-md hover:shadow-indigo-500/20 active:scale-[0.98] transition-all cursor-pointer flex items-center gap-1.5"
				}, " Next ", 8, Si)])
			])])) : i("", !0),
			o("div", Ci, [(v(!0), a(e, null, x(C(f), (e) => (v(), a("div", {
				key: e.id,
				class: p(["pointer-events-auto p-4 rounded-xl border shadow-xl flex items-start gap-3 transform translate-y-0 transition-all duration-300", e.type === "success" ? "bg-emerald-50 text-emerald-800 border-emerald-200/80 shadow-lg shadow-emerald-100" : e.type === "error" ? "bg-rose-50 text-rose-800 border-rose-200/80 shadow-lg shadow-rose-100" : "bg-indigo-50 text-indigo-800 border-indigo-200/80 shadow-lg shadow-indigo-100"])
			}, [
				o("span", wi, [e.type === "success" ? (v(), a("span", Ti, "✓")) : e.type === "error" ? (v(), a("span", Ei, "✕")) : (v(), a("span", Di, "ℹ"))]),
				o("div", Oi, S(e.message), 1),
				o("button", {
					onClick: (t) => C(_)(e.id),
					class: "text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
				}, " ✕ ", 8, ki)
			], 2))), 128))])
		]));
	}
}), [["__scopeId", "data-v-0c13908a"]]), ji = async (e) => ({ set: async (t) => {
	console.log(`--hydrator [${t.data.curr.type}]`);
	let r = n(Ai, {
		_p: e,
		_pp: t
	}), i = {
		r: "",
		style: "",
		evt: { change: () => {
			e.f.call("msg", {
				type: "change",
				_p: e,
				_pp: t,
				custom: {}
			});
		} }
	}, a = document.getElementById(e.f.name("vue-root"));
	return r.mount(a), i;
} });
//#endregion
export { ji as t };
