import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "./App";
import Course from "./Course";

export function Router(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/course/:id/video" element={<Course />} />
      </Routes>
    </BrowserRouter>
  );
}
