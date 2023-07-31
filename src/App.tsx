import { WeatherProvider } from "./context/WeatherContext.tsx";
import Page from "./components/Page.tsx";

function App() {
  return (
    <WeatherProvider>
      <Page />
    </WeatherProvider>
  );
}

export default App;
