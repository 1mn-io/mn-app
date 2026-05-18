console.log(`test_1`);
import { ce_renderer, ce_hydrator } from "content-engine-lib";
const _ENV = `dev`; // dev | prod //import.meta.env.VITE_ENV;

//set..
(async() => {
//set vars..
let _html = ``;
let _css_server = ``;
let _css_client = ``;
//set..
let _editor_html = ``;
let _editor_css_client = ``;
let _data = {
  l: [
    {
      "id": "3e1bc78c-104f-4f6f-aa87-ee295db8ad8c",
      "type": "sample",
      "data": {
        "data": "MN App Dashboard",
        "theme": "light",
        "foo": "",

        //set..
        "config": {
          "off_h_right": false, //Hide Header Right Items.
        },

        //set..
        "menu": [



          //test..[START]
        

          //test..[END]







          {
            label: 'Dryutil',
             items: [
              {
                label: 'User management',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  /*{
                    label: 'Create File',
                    icon: 'pi pi-fw pi-plus',
                    to: '/dryutil/file-management/file?mode=create'
                  }, */
                  {
                    label: 'Users',
                    icon: 'pi pi-fw pi-list',
                    to: '/dryutil/user-management/users'
                  }
                ]
              },
              {
                label: 'Instance management',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  /*{
                    label: 'Create File',
                    icon: 'pi pi-fw pi-plus',
                    to: '/dryutil/file-management/file?mode=create'
                  }, */
                  {
                    label: 'Instances',
                    icon: 'pi pi-fw pi-list',
                    to: '/dryutil/instance-management/instances'
                  }
                ]
              },
              
            ]
          },


          {
            label: 'File management',
            items: [
              { 
                label: 'Create File', 
                icon: 'pi pi-fw pi-plus', 
                to: '/file-management/file?mode=create'
              }, 
              { 
                label: 'Files', 
                icon: 'pi pi-fw pi-list', 
                to: '/file-management/files',
                 

              },
            ]
          },
          {
            label: 'Product management',
            items: [
              { 
                label: 'Products', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/products' 
              },
              { 
                label: 'Create Product', 
                icon: 'pi pi-fw pi-plus', 
                to: '/product-management/product?mode=create'
              },
              { 
                label: 'Upload Products', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/upload-products' 
              },
              { 
                label: 'Download DB Collection', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/download-db-collection' 
              },
              { 
                label: 'Upload DB Collection', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/upload-db-collection' 
              },
              { 
                label: 'DB Collections', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/db-collections'
              },
              { 
                label: 'DB Collection docs', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/db-collection-docs'
              },
              { 
                label: 'HSN', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/hsn'
              },
              //set..
              { 
                label: 'Generate Product', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/generate-product'
              },
              { 
                label: 'Generate Product Link', 
                icon: 'pi pi-fw pi-list', 
                to: '/product-management/generate-product-link'
              },



            ]
          },
          {
            label: 'Coupon management',
            items: [
              { 
                label: 'Create Coupon', 
                icon: 'pi pi-fw pi-plus', 
                to: '/coupon-management/coupon?mode=create' 
                //to: '/coupon-management/coupon' 
              },
              { 
                label: 'Coupons', 
                icon: 'pi pi-fw pi-list', 
                to: '/coupon-management/coupons' 
              }
            ]
          },
          {
            label: 'Order management',
            items: [
              { 
                label: 'Orders', 
                icon: 'pi pi-fw pi-list', 
                to: '/order-management/orders' 
              },
              { 
                label: 'Refunds', 
                icon: 'pi pi-fw pi-list', 
                to: '/order-management/refunds' 
              }
            ]
          },
          {
            label: 'UI management',
            items: [
              { 
                label: 'Create Interface', 
                icon: 'pi pi-fw pi-plus', 
                to: '/ui-management/interface?mode=create' 
              },
              { 
                label: 'Interfaces', 
                icon: 'pi pi-fw pi-list', 
                to: '/ui-management/interfaces' 
              }
            ]
          },
          //set..
          {
            label: 'Custom data',
            items: [
              { 
                label: 'Data list', 
                icon: 'pi pi-fw pi-list', 
                to: '/custom-data/data-list' 
              }
            ]
          },
          //set..
          {
            label: 'User management',
            items: [
              { 
                label: 'Users', 
                icon: 'pi pi-fw pi-list', 
                to: '/user-management/users' 
              }
            ]
          },

          




          //set..
          {
            label: 'Home',
            items: [{ label: 'Dashboard', icon: 'pi pi-fw pi-home', to: '/' }]
          },
          {
            label: 'UI Components',
            items: [
              { label: 'Form Layout', icon: 'pi pi-fw pi-id-card', to: '/uikit/formlayout' },
              { label: 'Input', icon: 'pi pi-fw pi-check-square', to: '/uikit/input' },
              { label: 'Button', icon: 'pi pi-fw pi-mobile', to: '/uikit/button', class: 'rotated-icon' },
              { label: 'Table', icon: 'pi pi-fw pi-table', to: '/uikit/table' },
              { label: 'List', icon: 'pi pi-fw pi-list', to: '/uikit/list' },
              { label: 'Tree', icon: 'pi pi-fw pi-share-alt', to: '/uikit/tree' },
              { label: 'Panel', icon: 'pi pi-fw pi-tablet', to: '/uikit/panel' },
              { label: 'Overlay', icon: 'pi pi-fw pi-clone', to: '/uikit/overlay' },
              { label: 'Media', icon: 'pi pi-fw pi-image', to: '/uikit/media' },
              { label: 'Menu', icon: 'pi pi-fw pi-bars', to: '/uikit/menu' },
              { label: 'Message', icon: 'pi pi-fw pi-comment', to: '/uikit/message' },
              { label: 'File', icon: 'pi pi-fw pi-file', to: '/uikit/file' },
              { label: 'Chart', icon: 'pi pi-fw pi-chart-bar', to: '/uikit/charts' },
              { label: 'Timeline', icon: 'pi pi-fw pi-calendar', to: '/uikit/timeline' },
              { label: 'Misc', icon: 'pi pi-fw pi-circle', to: '/uikit/misc' }
            ]
          },
          {
            label: 'Prime Blocks',
            icon: 'pi pi-fw pi-prime',
            items: [
              {
                label: 'Free Blocks',
                icon: 'pi pi-fw pi-eye',
                to: '/blocks'
              },
              {
                label: 'All Blocks',
                icon: 'pi pi-fw pi-globe',
                url: 'https://blocks.primevue.org/',
                target: '_blank'
              }
            ]
          },
          {
            label: 'Pages',
            icon: 'pi pi-fw pi-briefcase',
            to: '/pages',
            items: [
              {
                label: 'Landing',
                icon: 'pi pi-fw pi-globe',
                to: '/landing'
              },
              {
                label: 'Auth',
                icon: 'pi pi-fw pi-user',
                items: [
                  /*{
                    label: 'Login',
                    icon: 'pi pi-fw pi-sign-in',
                    to: '/auth/login'
                  },*/
                  {
                    label: 'Error',
                    icon: 'pi pi-fw pi-times-circle',
                    to: '/auth/error'
                  },
                  {
                    label: 'Access Denied',
                    icon: 'pi pi-fw pi-lock',
                    to: '/auth/access'
                  }
                ]
              },
              {
                label: 'Crud',
                icon: 'pi pi-fw pi-pencil',
                to: '/pages/crud'
              },
              {
                label: 'Not Found',
                icon: 'pi pi-fw pi-exclamation-circle',
                to: '/pages/notfound'
              },
              {
                label: 'Empty',
                icon: 'pi pi-fw pi-circle-off',
                to: '/pages/empty'
              }
            ]
          },
          {
            label: 'Hierarchy',
            items: [
              {
                label: 'Submenu 1',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  {
                    label: 'Submenu 1.1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      { label: 'Submenu 1.1.1', icon: 'pi pi-fw pi-bookmark' },
                      { label: 'Submenu 1.1.2', icon: 'pi pi-fw pi-bookmark' },
                      { label: 'Submenu 1.1.3', icon: 'pi pi-fw pi-bookmark' }
                    ]
                  },
                  {
                    label: 'Submenu 1.2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [{ label: 'Submenu 1.2.1', icon: 'pi pi-fw pi-bookmark' }]
                  }
                ]
              },
              {
                label: 'Submenu 2',
                icon: 'pi pi-fw pi-bookmark',
                items: [
                  {
                    label: 'Submenu 2.1',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [
                      { label: 'Submenu 2.1.1', icon: 'pi pi-fw pi-bookmark' },
                      { label: 'Submenu 2.1.2', icon: 'pi pi-fw pi-bookmark' }
                    ]
                  },
                  {
                    label: 'Submenu 2.2',
                    icon: 'pi pi-fw pi-bookmark',
                    items: [{ label: 'Submenu 2.2.1', icon: 'pi pi-fw pi-bookmark' }]
                  }
                ]
              }
            ]
          },
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
        ],
        "routes": [


          //test..[START]
          /*{
            path: '/',
            name: 'test',
            component: '../views/ContentEngineIframe.vue',
            meta: {
              // ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/supplier_onboarding/dist/data.json",  
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/supplier_site/dist/data.json", 
              //ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/storefront/dist/data.json", 
            }
          },*/
          //test..[END]





          //set..
          {
            path: '/login',
            name: 'login',
            component: '../views/ContentEngine.vue',
            meta: {
              ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/signin_app/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
            }
          },


          //set..
          {
            path: '/',
            //component: AppLayout,
            component: "../layout/AppLayout.vue", //"@/layout/AppLayout.vue",

             
            /*props:route => ({
              _p: route.meta._p,
              //_$p: route.meta._$p,
              //_p:props._p,
            }),*/
            children: [

              //==dryutil==//
              {
                path: '/dryutil/user-management/users',
                name: 'dryutil_users',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/users_fragment_app/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/dryutil/instance-management/instances',
                name: 'dryutil_instances',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/instance_fragment_app/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              //==dryutil==//



              //set.. 
              {
                path: '/file-management/file',
                name: 'create_file',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_file_upload/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
 

              {
                path: '/file-management/files',
                name: 'files',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_file_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },




              //set.. 
              {
                path: '/product-management/products',
                name: 'product',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },

              {
                path: '/product-management/product',
                name: 'create_product',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_upsert/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },

              


              {
                path: '/product-management/upload-products',
                name: 'upload_products',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_product_upload/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },

            

              {
                path: '/product-management/download-db-collection',
                name: 'download_db_collection',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_collection_download/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/product-management/upload-db-collection',
                name: 'upload_db_collection',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_collection_upload/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/product-management/db-collections',
                name: 'db_collections',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_collection_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/product-management/db-collection-docs',
                name: 'db_collection_docs',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_collection_doc_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/product-management/hsn',
                name: 'hsn',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_hsn_view/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/product-management/generate-product',
                name: 'generate_product',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_product_generate/dist/data.json",
                  auth:true
                }
              },
              {
                path: '/product-management/generate-product-link',
                name: 'generate_product_link',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_product_link_generate/dist/data.json",
                  auth:true
                }
              },





              //set..
              {
                path: '/coupon-management/coupon',
                name: 'create_coupon',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_coupon_upsert/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/coupon-management/coupons',
                name: 'coupon',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_coupon_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/order-management/orders',
                name: 'order',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_order_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },

              {
                path: '/order-management/refunds',
                name: 'refund',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_refund_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },


              {
                path: '/ui-management/interfaces',
                name: 'interfaces',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_ui_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              {
                path: '/ui-management/interface',
                name: 'create_interface',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/ui_editor/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
              //set..
              {
                path: '/custom-data/data-list',
                name: 'custom_data_list',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_custom_data_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },
 

              //set..
              {
                path: '/user-management/users',
                name: 'users',
                component: '../views/ContentEngine.vue',
                meta:{
                  ce_file: "https://raw.githubusercontent.com/1mn-io/mn-app/main/modules/admin_users_fragment/dist/data.json", //eg=> https://raw.githubusercontent.com/1mn-io/mn-app/refs/heads/main/modules/admin_product_fragment/dist/data.json
                  auth:true
                }
              },


 

              
             




              //set..
              {
                path: '/',
                name: 'dashboard',
                component: '../views/Dashboard.vue',

                //set..
                meta: {
                  auth: false,
                }
              },
              {
                path: '/uikit/formlayout',
                name: 'formlayout',
                component: '../views/uikit/FormLayout.vue'
              },
              {
                path: '/uikit/input',
                name: 'input',
                component: '../views/uikit/InputDoc.vue'
              },
              {
                path: '/uikit/button',
                name: 'button',
                component: '../views/uikit/ButtonDoc.vue'
              },
              {
                path: '/uikit/table',
                name: 'table',
                component: '../views/uikit/TableDoc.vue'
              },
              {
                path: '/uikit/list',
                name: 'list',
                component: '../views/uikit/ListDoc.vue'
              },
              {
                path: '/uikit/tree',
                name: 'tree',
                component: '../views/uikit/TreeDoc.vue'
              },
              {
                path: '/uikit/panel',
                name: 'panel',
                component: '../views/uikit/PanelsDoc.vue'
              },

              {
                path: '/uikit/overlay',
                name: 'overlay',
                component: '../views/uikit/OverlayDoc.vue'
              },
              {
                path: '/uikit/media',
                name: 'media',
                component: '../views/uikit/MediaDoc.vue'
              },
              {
                path: '/uikit/message',
                name: 'message',
                component: '../views/uikit/MessagesDoc.vue'
              },
              {
                path: '/uikit/file',
                name: 'file',
                component: '../views/uikit/FileDoc.vue'
              },
              {
                path: '/uikit/menu',
                name: 'menu',
                component: '../views/uikit/MenuDoc.vue'
              },
              {
                path: '/uikit/charts',
                name: 'charts',
                component: '../views/uikit/ChartDoc.vue'
              },
              {
                path: '/uikit/misc',
                name: 'misc',
                component: '../views/uikit/MiscDoc.vue'
              },
              {
                path: '/uikit/timeline',
                name: 'timeline',
                component: '../views/uikit/TimelineDoc.vue'
              },
              {
                path: '/blocks',
                name: 'blocks',
                meta: {
                  breadcrumb: ['Prime Blocks', 'Free Blocks']
                },
                component: '../views/utilities/Blocks.vue'
              },
              {
                path: '/pages/empty',
                name: 'empty',
                component: '../views/pages/Empty.vue'
              },
              {
                path: '/pages/crud',
                name: 'crud',
                component: '../views/pages/Crud.vue'
              },
              /*{
                  path: '/documentation',
                  name: 'documentation',
                  component: '../views/pages/Documentation.vue'
              }*/
            ]
          },
          {
            path: '/landing',
            name: 'landing',
            component: '../views/pages/Landing.vue'
          },
          {
            path: '/pages/notfound',
            name: 'notfound',
            component: '../views/pages/NotFound.vue'
          },

          /*{
            path: '/auth/login',
            name: 'login',
            component: '../views/pages/auth/Login.vue'
          },*/
          {
            path: '/auth/access',
            name: 'accessDenied',
            component: '../views/pages/auth/Access.vue'
          },
          {
            path: '/auth/error',
            name: 'error',
            component: '../views/pages/auth/Error.vue'
          }
        ],

      },
    }

  ]
};
console.log(_data.l[0]);


const _cnf = {
  lib:[
      _ENV==`dev` ? {
      name:`sample`,
      renderer_src:`http://localhost:5173/src/renderer/index.ts`,
      hydrator_src:`http://localhost:5173/src/hydrator/index.ts`,
      editor_src:`http://localhost:5173/src/editor/index.ts`,
    } : {
      name:`sample`,
      renderer_src:`http://localhost:5173/dist/renderer.es.js`,
      hydrator_src:`http://localhost:5173/dist/hydrator.es.js`,
      editor_src:`http://localhost:5173/dist/editor.es.js`,
      /*renderer_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/renderer.es.js`,
      hydrator_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/hydrator.es.js`,
      editor_src:`https://cdn.jsdelivr.net/gh/1mn-io/mn-app@59f750c/modules/dashboard/dist/editor.es.js`,*/
    }
  ],
  /*lazy_lib: {
    renderer_src: `http://localhost:5173/src/l/{*}/renderer/index.ts`,
    hydrator_src: `http://localhost:5173/src/l/{*}/hydrator/index.ts`,
    editor_src: `http://localhost:5173/src/l/{*}/editor/index.ts`,
  }*/
};

//set..
const _ce_renderer = await ce_renderer(_cnf);
const _ce_hydrator = await ce_hydrator(_cnf);
/*const _ce_editor = await ce_editor(_cnf);*/




/*
//====Editor====//  [START]
//if (import.meta.client) {
  const _ce_editor_rsp =  await _ce_editor.set({
    data:{
      l:[]
    }
  },{
    change: async (_v:any) => {
      console.log(`--ce:editor [change] `);
      //console.log(_v._$p.data[`curr`]);

      //test..
      _data.l = _v._$p.data[`curr`].data.l;
      console.log(_data.l);
      //set..
      await _run();

      
    },
  });

  //set..
  _editor_html = _ce_editor_rsp.r;
  _editor_css_client = _ce_editor_rsp.style;

//}
//====Editor====//  [END]  
*/



//set..
((mE_a,_b) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_e = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_s);

 
//set..
mE_e!.innerHTML = `
  <div >
    <!--div>==Editor==</div-->
    <div > ${_editor_html} </div>
  </div>
`;


})(document.getElementById("app"),`app__e_d_i_t_o_r`);




//set..
const _run = async () => {

//set..
//if (import.meta.client) { // import.meta.server |  import.meta.client  //NOTE: For real world where, we need SSR in action we use "import.meta.server". 
const _ce_renderer_rsp =  await _ce_renderer.set({
  data:_data
});
//console.log(_ce_renderer_rsp.r);

//set..
_html = _ce_renderer_rsp.r;
_css_server = _ce_renderer_rsp.style;




//}
//if (import.meta.client) {
setTimeout(async() => {
const _ce_hydrator_rsp =  await _ce_hydrator.set({
  data:_data
});

//set..
//_css_client = _ce_hydrator_rsp.style;
//}  
}, 0);




//set..
((mE_a,mE_h,_a,_b,_c) => {
//console.log(_html);
//console.log(_css_server);
//console.log(_css_client);

//set..
const mE_s = document.getElementById(_a) || (() => { let e = document.createElement("style"); e.id = _a; mE_h.appendChild(e); return e; })();
//console.log(mE_s);
const mE_log = document.getElementById(_b) || (() => { let e = document.createElement("div"); e.id = _b; mE_a!.appendChild(e); return e; })();
//console.log(mE_log);
const mE_preview = document.getElementById(_c) || (() => { let e = document.createElement("div"); e.id = _c; mE_a!.appendChild(e); return e; })();


//set..
mE_s!.innerHTML = `
${_css_server}
${_css_client}
${_editor_css_client}
`;

/*//set..
mE_log.innerHTML = `
<div>
    <div>==Log==</div>
    <div>
      ${JSON.stringify(_data)}
    </div>
  </div>

`;*/

//set..
mE_preview!.innerHTML = `
  <div>
    <!--div>==Preview==</div-->
    <div > ${_html} </div>
  </div>
`;



})(document.getElementById("app"),document.head,`app__s_t_y_l_e`,`app__l_o_g`,`app__p_r_e_v_i_e_w`);

};
await _run();



 

 


})();