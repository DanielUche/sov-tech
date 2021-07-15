import axios from "axios";
import React, { FC, ReactElement, useEffect, useState } from "react";
import { ThemeProvider } from "@zendeskgarden/react-theming";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Index from "./pages";
import DetailPage from "./pages/detail";
import { API_URL } from "./constant";

type AppProps = {};

const App: FC<AppProps> = (): ReactElement => {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    axios.get(`${API_URL}/count`).then((res) => setCount(res.data));
  }, [count]);

  return (
    <ThemeProvider>
    <Router>
      <Switch>
        <Route exact path="/:name">
          <DetailPage />
        </Route>
        <Route path="*">
          <Index count={count} />
        </Route>
      </Switch>
    </Router>
    </ThemeProvider>
  );
};

export default App;
