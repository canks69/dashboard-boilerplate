
export const menu = [
  {
    title: "Dashboard",
    icon: "ic:round-home",
    url: "/",
  },
  {
    title: "Tables",
    icon: "majesticons:table",
    url: "/tables",
    children: [
      {
        title: "Data Tables",
        url: "/tables/data-tables",
      },
      {
        title: "Regular Tables",
        url: "/tables/regular-tables",
      },
    ]
  },
  {
    title: "Forms",
    icon: "fluent:form-24-filled",
    url: "/forms",
  },
  {
    title: "Pages",
    icon: "mdi:page-next",
    url: "/pages",
    exact: true,
    children: [
      {
        title: "Sign In",
        url: "/pages/sign-in",
      },
      {
        title: "Sign Up",
        url: "/pages/sign-up",
      },
      {
        title: "Forgot Password",
        url: "/pages/forgot-password",
      },
      {
        title: "Reset Password",
        url: "/pages/reset-password",
      },
      {
        title: "404",
        url: "/pages/404",
      },
      {
        title: "500",
        url: "/pages/500",
      },
    ]
  },
  {
    title: "Charts",
    icon: "bxs:chart",
    url: "/charts",
  },
  {
    title: "Maps",
    icon: "ion:map",
    url: "/maps",
  },
  {
    title: "Documentation",
    icon: "solar:document-add-bold",
    url: "/documentation",
  },
  
]