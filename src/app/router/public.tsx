import path from "path";
import { Component, lazy } from "react";

const publicRoutes = {
  id: "public",
  children: [
    {
      path: "sign-up",
      lazy: async() => ({
        Component: (await import("app/pages/sign-up/index")).default,
      })
    }
  ],
};

export { publicRoutes };
