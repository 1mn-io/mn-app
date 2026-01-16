import n from "./AppMenuItem-DpoI_8JV.js";
import { X as c, a1 as o, H as i, F as p, a9 as b, G as r, a2 as l } from "./runtime-dom.esm-bundler-C71lIG0B.js";
const u = { class: "layout-menu" }, s = {
  key: 1,
  class: "menu-separator"
}, g = {
  __name: "AppMenu__OLD",
  setup(m) {
    const a = c([
      {
        label: "Home",
        items: [{ label: "Dashboard", icon: "pi pi-fw pi-home", to: "/" }]
      },
      {
        label: "UI Components",
        items: [
          { label: "Form Layout", icon: "pi pi-fw pi-id-card", to: "/uikit/formlayout" },
          { label: "Input", icon: "pi pi-fw pi-check-square", to: "/uikit/input" },
          { label: "Button", icon: "pi pi-fw pi-mobile", to: "/uikit/button", class: "rotated-icon" },
          { label: "Table", icon: "pi pi-fw pi-table", to: "/uikit/table" },
          { label: "List", icon: "pi pi-fw pi-list", to: "/uikit/list" },
          { label: "Tree", icon: "pi pi-fw pi-share-alt", to: "/uikit/tree" },
          { label: "Panel", icon: "pi pi-fw pi-tablet", to: "/uikit/panel" },
          { label: "Overlay", icon: "pi pi-fw pi-clone", to: "/uikit/overlay" },
          { label: "Media", icon: "pi pi-fw pi-image", to: "/uikit/media" },
          { label: "Menu", icon: "pi pi-fw pi-bars", to: "/uikit/menu" },
          { label: "Message", icon: "pi pi-fw pi-comment", to: "/uikit/message" },
          { label: "File", icon: "pi pi-fw pi-file", to: "/uikit/file" },
          { label: "Chart", icon: "pi pi-fw pi-chart-bar", to: "/uikit/charts" },
          { label: "Timeline", icon: "pi pi-fw pi-calendar", to: "/uikit/timeline" },
          { label: "Misc", icon: "pi pi-fw pi-circle", to: "/uikit/misc" }
        ]
      },
      {
        label: "Prime Blocks",
        icon: "pi pi-fw pi-prime",
        items: [
          {
            label: "Free Blocks",
            icon: "pi pi-fw pi-eye",
            to: "/blocks"
          },
          {
            label: "All Blocks",
            icon: "pi pi-fw pi-globe",
            url: "https://blocks.primevue.org/",
            target: "_blank"
          }
        ]
      },
      {
        label: "Pages",
        icon: "pi pi-fw pi-briefcase",
        to: "/pages",
        items: [
          {
            label: "Landing",
            icon: "pi pi-fw pi-globe",
            to: "/landing"
          },
          {
            label: "Auth",
            icon: "pi pi-fw pi-user",
            items: [
              {
                label: "Login",
                icon: "pi pi-fw pi-sign-in",
                to: "/auth/login"
              },
              {
                label: "Error",
                icon: "pi pi-fw pi-times-circle",
                to: "/auth/error"
              },
              {
                label: "Access Denied",
                icon: "pi pi-fw pi-lock",
                to: "/auth/access"
              }
            ]
          },
          {
            label: "Crud",
            icon: "pi pi-fw pi-pencil",
            to: "/pages/crud"
          },
          {
            label: "Not Found",
            icon: "pi pi-fw pi-exclamation-circle",
            to: "/pages/notfound"
          },
          {
            label: "Empty",
            icon: "pi pi-fw pi-circle-off",
            to: "/pages/empty"
          }
        ]
      },
      {
        label: "Hierarchy",
        items: [
          {
            label: "Submenu 1",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 1.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 1.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.2", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 1.1.3", icon: "pi pi-fw pi-bookmark" }
                ]
              },
              {
                label: "Submenu 1.2",
                icon: "pi pi-fw pi-bookmark",
                items: [{ label: "Submenu 1.2.1", icon: "pi pi-fw pi-bookmark" }]
              }
            ]
          },
          {
            label: "Submenu 2",
            icon: "pi pi-fw pi-bookmark",
            items: [
              {
                label: "Submenu 2.1",
                icon: "pi pi-fw pi-bookmark",
                items: [
                  { label: "Submenu 2.1.1", icon: "pi pi-fw pi-bookmark" },
                  { label: "Submenu 2.1.2", icon: "pi pi-fw pi-bookmark" }
                ]
              },
              {
                label: "Submenu 2.2",
                icon: "pi pi-fw pi-bookmark",
                items: [{ label: "Submenu 2.2.1", icon: "pi pi-fw pi-bookmark" }]
              }
            ]
          }
        ]
      }
      /*{
          label: 'Get Started',
          items: [
              {
                  label: 'Documentation',
                  icon: 'pi pi-fw pi-book',
                  to: '/documentation'
              },
              {
                  label: 'View Source',
                  icon: 'pi pi-fw pi-github',
                  url: 'https://github.com/1mn-io/dash-template',
                  target: '_blank'
              }
          ]
      }*/
    ]);
    return (k, f) => (i(), o("ul", u, [
      (i(!0), o(p, null, b(a.value, (e, t) => (i(), o(p, { key: e }, [
        e.separator ? l("", !0) : (i(), r(n, {
          key: 0,
          item: e,
          index: t
        }, null, 8, ["item", "index"])),
        e.separator ? (i(), o("li", s)) : l("", !0)
      ], 64))), 128))
    ]));
  }
};
export {
  g as default
};
