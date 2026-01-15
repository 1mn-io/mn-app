
console.log("test_0 loaded");

import {
  ce_renderer,
  ce_hydrator,
  ce_listen,
  ce_call,
} from "content-engine-lib";

const _ENV = "dev"; //dev, prod

/* ================================
   FORM SCHEMA
================================ */
const formSchema = {
  //title: "Complete Your Profile",
  //subtitle: "This information helps us personalize your dashboard and services.",
  
  fields: [
    /* --------------------
       PERSONAL DETAILS
    -------------------- */
    {
      section: "Personal Information",
      name: "firstName",
      label: "First Name",
      type: "text",
      placeholder: "John",
      validation: "required|length:2,40",
      columns: 6,
      value: "John",
    },
    {
      name: "lastName",
      label: "Last Name",
      type: "text",
      placeholder: "Doe",
      validation: "required|length:2,40",
      columns: 6,
      value: "Doe",
    },

    /* --------------------
       CONTACT DETAILS
    -------------------- */
    {
      section: "Contact Details",
      name: "email",
      label: "Work Email",
      type: "email",
      placeholder: "john@company.com",
      validation: "required|email",
      columns: 6,
      help: "We’ll never share your email.",
      value: "john@gmail.com",
    },
    {
      name: "phone",
      label: "Phone Number",
      type: "tel",
      placeholder: "+91 XXXXX XXXXX",
      validation: "matches:/^[0-9+\\s-]{8,15}$/",
      columns: 6,
      value: "+91 2222222222",
    },

    /* --------------------
       PROFESSIONAL INFO
    -------------------- */
    {
      section: "Professional Information",
      name: "role",
      label: "Primary Role",
      type: "autocomplete",
      placeholder: "Select your role",
      columns: 6,
      minChars: 0,
      openOnClick: true,
      validation: "required",
      // Async options loader
      options: async ({ search }: { search: string }) => {
        try {
          const res = await fetch("https://jsonplaceholder.typicode.com/users")
          const data = await res.json()

          return data
            .filter((u: any) =>
              !search || u.name.toLowerCase().includes(search.toLowerCase())
            )
            .slice(0, 5)
            .map((u: any) => ({
              label: u.name,
              value: u.id,
            }))
        } catch (e) {
          return []
        }
      },
      value:"4"
    },
    {
      name: "company",
      label: "Company / Organization",
      type: "text",
      placeholder: "Acme Inc.",
      columns: 6,
      value:"Xyz inc"
    },

    /* --------------------
       EXPERIENCE
    -------------------- */
    {
      section: "Experience",
      name: "experience",
      label: "Years of Experience",
      type: "number",
      validation: "required|min:0|max:40",
      placeholder: "Enter your experience", 
      columns: 6,
      help: "Enter total professional experience.",
      value:"2"
    },

    /* --------------------
       BIO
    -------------------- */
    {
      section: "About You",
      name: "bio",
      label: "Professional Bio",
      type: "textarea",
      placeholder: "Briefly describe your background...",
      validation: "length:0,200",
      columns: 12,
      help: "Max 200 characters.",
    },

    /* --------------------
       PREFERENCES
    -------------------- */
    {
      section: "Preferences",
      name: "notifications",
      label: "Email Preferences",
      type: "radio",
      validation: "required",
      columns: 12,
      options: [
        { label: "Everything (recommended)", value: "all" },
        { label: "Important Only", value: "priority" },
        { label: "No Emails", value: "none" },
      ],
      help: "You can change this anytime from settings.",
      value:"priority"
    },
  ],
};

/* ================================
   CE DATA
================================ */
const _data = {
  l: [
    {
      id: "uuid-form-v1",
      type: "form",
      data: {
        ...formSchema,
        "theme": "light",
        "env": "dev", //dev, prod
      },

    },
  ],
};
console.log(_data);
 

/* ================================
   CE CONFIG
================================ */
const _cnf = {
  lib: [
    _ENV === "dev"
      ? {
          name: "form",
          renderer_src: "http://localhost:5173/src/renderer/index.ts",
          hydrator_src: "http://localhost:5173/src/hydrator/index.ts",
          editor_src: "http://localhost:5173/src/editor/index.ts",
        }
      : {
          name: "form",
          renderer_src: "http://localhost:5173/dist/renderer.es.js",
          hydrator_src: "http://localhost:5173/dist/hydrator.es.js",
          editor_src: "http://localhost:5173/dist/editor.es.js",
        },
  ],
};

(async () => {
  const renderer = await ce_renderer(_cnf);
  const hydrator = await ce_hydrator(_cnf);

  /* ================================
     EVT → MSG BRIDGE
  ================================ */
  ce_listen("msg", async(_$) => {
    if (_$.type === "form_submit" && _$._$p.data.curr.id==`uuid-form-v1`) {
      console.warn("[evt] form_submit:", _$);

      ce_call("msg", {
        type: "form_submitted",
        where: { key: "id", value: "uuid-form-v1" },
      });
    }
  });


  /* ================================
     RENDER
  ================================ */
  const r = await renderer.set({ data: _data });

  document.getElementById("app")!.innerHTML = `
    <style>${r.style}</style>
    ${r.r}
  `;

  /* ================================
     HYDRATE
  ================================ */
  await hydrator.set({ data: _data });

 


})();
