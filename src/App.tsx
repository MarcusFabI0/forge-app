import { LoginCard } from "./features/auth/components/LoginCard";
import { RegisterCard } from "./features/auth/components/RegisterCard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/", // rota inicial
    element: <LoginCard />,
  },
  {
    path: "/register", // rota para cadastro
    element: <RegisterCard />,
  },
])

export default function App() {
  return (
    <main className="min-h-screen bg-background flex items-center justify-center p-4">
      <RouterProvider router={router} />
    </main>
  )
}