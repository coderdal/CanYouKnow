import { store } from "./redux/store";

import { Provider } from "react-redux";

import Main from "./components/Main/Main";

import { useState } from "react";

function App() {
  const [theme, setTheme] = useState(false);

  return (
    <Provider store={store}>
      <section className={theme ? "light" : ""}>
        <Main setTheme={setTheme} theme={theme} />
      </section>
    </Provider>
  );
}

export default App;
