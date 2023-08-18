import { Routes, Route } from "react-router-dom"
import { PageHome, PageEscala, PageLayout } from "../pages"

export function RouteSoftware() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<PageHome />} />
        <Route path="escala" element={<PageEscala />} />
      </Route>
    </Routes>
  )
}
