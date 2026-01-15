console.log(`test_1`);
import { ce_renderer, ce_hydrator, ce_listen, ce_call } from "content-engine-lib";
const _ENV = `dev`;

(async() => {
    let _html = ``;
    let _css_server = ``;
    let _css_client = ``;
    let _editor_html = ``;
    let _editor_css_client = ``;

    // ==== HELPER: Generate High-Density Data ====
    const generateRows = (count: number) => {
        const categories = ["Electronics", "Furniture", "Wearables", "Office", "Gaming"];
        const brands = ["Logitech", "Samsung", "Apple", "Herman Miller", "Razer", "Dell", "Sony", "Asus"];
        const statuses = ["Active", "Low Stock", "Out of Stock", "Archived"];
        
        return Array.from({ length: count }).map((_, i) => {
            const status = statuses[Math.floor(Math.random() * statuses.length)];
            const brand = brands[Math.floor(Math.random() * brands.length)];
            
            let statusClass = "";
            if (status === "Active") statusClass = "bg-emerald-100 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-400";
            else if (status === "Low Stock") statusClass = "bg-amber-100 text-amber-700 dark:bg-amber-500/10 dark:text-amber-400";
            else if (status === "Out of Stock") statusClass = "bg-rose-100 text-rose-700 dark:bg-rose-500/10 dark:text-rose-400";
            else statusClass = "bg-slate-100 text-slate-700 dark:bg-slate-800 dark:text-slate-400";

            return {
                id: 1000 + i,
                sku: `SKU-${1000 + i}`,
                name: `Product Item ${i + 1}`,
                brand: brand,
                category: categories[Math.floor(Math.random() * categories.length)],
                price: (Math.random() * 800 + 50).toFixed(2),
                stock: Math.floor(Math.random() * 200),
                rating: (Math.random() * 2 + 3).toFixed(1),
                status: `<span class="inline-flex items-center justify-center px-2 py-1 rounded w-full text-xs font-bold border border-transparent ${statusClass}">${status}</span>`
            };
        });
    };

    // ==== 1. DATA ====
    let _data = {
        l: [
            {
                "id": "uuid-inventory-v2",
                "type": "table", 
                "data": {
                    "theme": "light",
                    "foo": { "txt": "Inventory" },
                    
                    // === DYNAMIC CONFIG SECTION ===
                    "config": {
                        "search": {
                            "placeholder": "Search Products...",
                            "field": "name" // Tells Vue which column to search
                        },
                        "filter": {
                            "label": "All Categories",
                            "field": "category" // Tells Vue which column to filter
                        },
                        // Hardcoded options for now
                        "filterOptions": ["Electronics", "Furniture", "Wearables", "Office", "Gaming"]
                    },
                    // ==============================

                    "table": {
                        "columns": [
                            { "title": "ID", "field": "id", "width": 60, "headerSort": false },
                            { "title": "Product Name", "field": "name", "widthGrow": 2, "minWidth": 140, "formatter": "html", "formatterFunction": (cell) => {
                                return `<div class="font-bold text-slate-800 dark:text-zinc-100">${cell.getValue()}</div>`
                            }},
                            { "title": "Brand", "field": "brand", "widthGrow": 1, "minWidth": 100, "formatter": "html", "formatterFunction": (cell) => {
                                return `<div class="flex items-center gap-2"><div class="w-2 h-2 rounded-full bg-indigo-500"></div><span class="font-medium text-slate-600 dark:text-zinc-300">${cell.getValue()}</span></div>`
                            }},
                            { "title": "SKU", "field": "sku", "width": 90, "formatter": "html", "formatterFunction": (cell) => {
                                return `<div class="font-mono text-xs text-slate-500 dark:text-zinc-500">${cell.getValue()}</div>`
                            }},
                            { "title": "Category", "field": "category", "widthGrow": 1, "minWidth": 100, "formatter": "html", "formatterFunction": (cell) => {
                                return `<span class="text-slate-600 dark:text-zinc-400 font-medium">${cell.getValue()}</span>`
                            }},
                            { "title": "Rating", "field": "rating", "width": 70, "hozAlign": "center", "formatter": "html", "formatterFunction": (cell) => {
                                return `<span class="font-bold text-slate-700 dark:text-zinc-300">${cell.getValue()}</span><span class="text-amber-400 text-xs ml-0.5">★</span>`
                            }},
                            { "title": "Price", "field": "price", "formatter": "money", "formatterParams": { "symbol": "$" }, "width": 90, "hozAlign": "right" },
                            { "title": "Stock", "field": "stock", "hozAlign": "center", "width": 70 },
                            { "title": "Status", "field": "status", "formatter": "html", "widthGrow": 1, "minWidth": 110, "hozAlign": "center" }
                        ],
                        "rows": generateRows(40)
                    }
                },
            }
        ]
    };
    //console.log(_data.l[0].data);
    

    // ==== 2. CONFIG ====
    const _cnf = {
        lib: [
            _ENV == `dev` ? {
                name: `table`,
                renderer_src: `http://localhost:5173/src/renderer/index.ts`,
                hydrator_src: `http://localhost:5173/src/hydrator/index.ts`,
                editor_src: `http://localhost:5173/src/editor/index.ts`,
            } : {
                name: `table`,
                renderer_src: `http://localhost:5173/dist/renderer.es.js`,
                hydrator_src: `http://localhost:5173/dist/hydrator.es.js`,
                editor_src: `http://localhost:5173/dist/editor.es.js`,
            }
        ],
    };

    const _ce_renderer = await ce_renderer(_cnf);
    const _ce_hydrator = await ce_hydrator(_cnf);


    //set..
    (async()=>{
        ce_listen("msg", async(_$)=>{
            console.log(`[ce_listen]`,_$);
            if (_$.type==`load_more` && _$._$p.data.curr.id==`uuid-inventory-v2`) {
                setTimeout(() => {
                    //set..
                    const _new_rows = [];//generateRows(40);
                    _$._$p.data.curr.data.table.rows = _new_rows;
                    ce_call("msg", {
                        type: `load_more`,
                        _p: _$._p,
                        _$p: _$._$p,
                        custom: {},
                        where:{
                            key:`id`,
                            value:`uuid-inventory-v2`,
                        }
                    });
                }, 500);
            }
        });
        //remove all rows..
        /*setTimeout(() => {
            ce_call("msg", {
            type: `remove_all_rows`,
            custom: {},
            where: {
                key: `id`,
                value: `uuid-inventory-v2`,
            }
        });
        }, 2000);*/
    })();


    ((mE_a, _b) => {
        const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
        mE_e!.innerHTML = `<div>${_editor_html}</div>`;
    })(document.getElementById("app"), `app__e_d_i_t_o_r`);

    const _run = async () => {
        const _ce_renderer_rsp = await _ce_renderer.set({ data: _data });
        _html = _ce_renderer_rsp.r;
        _css_server = _ce_renderer_rsp.style;

        setTimeout(async () => {
            const _ce_hydrator_rsp = await _ce_hydrator.set({ data: _data });
            //_css_client = _ce_hydrator_rsp.style;
        }, 200);

        ((mE_a, mE_h, _a, _b, _c) => {
            const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
            const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();
            mE_s!.innerHTML = `${_css_server} ${_css_client} ${_editor_css_client}`;
            mE_preview!.innerHTML = `<div>${_html}</div>`;
        })(document.getElementById("app"), document.head, `app__s_t_y_l_e`, `app__l_o_g`, `app__p_r_e_v_i_e_w`);
    };

    await _run();



    

})();