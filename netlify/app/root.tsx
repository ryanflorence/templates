import { Outlet, Scripts, ScrollRestoration } from "react-router";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>My App</title>
      </head>
      <body>
        {children}
        <Outlet />

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function Root() {
  return <h1>Hello, world!</h1>;
}

export function ErrorBoundary({ error }: { error: unknown }) {
  console.error(error);
  return <h1>Something went wrong</h1>;
}
