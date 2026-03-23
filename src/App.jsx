import React from "react";
import { RouterProvider } from "react-router-dom";
import { AuthProvider } from "./shared/auth/AuthContext";
import { router } from "@/shared/router/router";

const App = () => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
