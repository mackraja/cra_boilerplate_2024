import "react-app-polyfill/ie11";
import "react-app-polyfill/stable";
import { Profiler, StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { HelmetProvider } from "react-helmet-async";
import { Provider } from "react-redux";

import renderProfiler from "./utils/renderProfiler";
import reportWebVitals from "./utils/reportWebVitals";

import "./index.css";
import "./locales/i18n";
import AppRoutes from "./AppRoutes";
import { store } from "store/configureStore";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <Profiler id="App" onRender={renderProfiler}>
    <Provider store={store}>
      <HelmetProvider>
        <StrictMode>
          <AppRoutes />
        </StrictMode>
      </HelmetProvider>
    </Provider>
  </Profiler>,
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
