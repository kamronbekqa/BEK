import i18next from "i18next";
import "./i18n";
import "./App.css";
import { useTranslation } from "react-i18next";

function App() {
  const { t } = useTranslation();

  return (
    <>
      <div className="dii">
        <header>
          <a href="">{t("headline")}</a>
          <a href="">{t("hi")}</a>
          <a href="">{t("home")}</a>
          <select
            name=""
            id=""
            onChange={(e) => i18next.changeLanguage(e.target.value)}
          >
            <option value="uz">Uzb</option>
            <option value="en">Eng</option>
            <option value="ru">Ru</option>
          </select>
        </header>
        <div className="div">
          <div className="left">
            <h1>{t("about")}</h1>
            <p>{t("loc")}</p>
            <button>{t("title")}</button>
          </div>
          <div className="right">
            <img src="./1.png" alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
