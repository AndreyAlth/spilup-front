// Import Dependencies
import { RouterProvider } from "react-router";

// Local Imports
import { AuthProvider } from "./app/contexts/auth/Provider";
import { BreakpointProvider } from "./app/contexts/breakpoint/Provider";
import { LocaleProvider } from "./app/contexts/locale/Provider";
import { SidebarProvider } from "./app/contexts/sidebar/Provider";
import { ThemeProvider } from "./app/contexts/theme/Provider";
import { QueryProvider } from "./app/contexts/api/QueryProvider";
import router from "./app/router/router";

// ----------------------------------------------------------------------

function App() {
  return (
    <QueryProvider>
      <AuthProvider>
        <ThemeProvider>
          <LocaleProvider>
            <BreakpointProvider>
              <SidebarProvider>
                <RouterProvider router={router} />
              </SidebarProvider>
            </BreakpointProvider>
          </LocaleProvider>
        </ThemeProvider>
      </AuthProvider>
    </QueryProvider>
  );
}

export default App;
