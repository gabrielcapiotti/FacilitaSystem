import AppRoutes from "./components/routes/AppRoutes";
import ThemeDefault from "./components/theme/ThemeDefault";

function App() {
  return (
    <ThemeDefault>
      <AppRoutes />
    </ThemeDefault>
  );
}

export default App;