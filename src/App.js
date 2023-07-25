import Header from "./components/Header";
import useThemeStore from "./store/themeStore";
import Infographics from "./components/Infographics";

function App() {
  const { theme } = useThemeStore();

  if (theme === "LIGHT") {
    document.body.style = "background: #F6F8FF;";
  } else {
    document.body.style = "background: #141d2f;";
  }

  return (
    <div className={`app-${theme} app-main`}>
      <Header />
      <Infographics />
    </div>
  );
}

export default App;
