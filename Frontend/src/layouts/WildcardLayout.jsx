import { Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/NotFound";

function WildcardLayout() {
  return (
    <Routes>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default WildcardLayout;