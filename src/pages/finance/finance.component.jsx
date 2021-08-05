//REACT
import React from "react";

import TabSlider from "../../components/tab-slider/tab-slider.component";

import {Switch, Route, Link} from "react-router-dom";

//STYLES
import "../../root-styles/layout.scss";

const Finance = () => {
  return (
    <div className="admin-pages-layout">
      <TabSlider
        routeParameters={["wallet", "payments", "tasfie", "sheba"]}
        tabDetails={
          [
            {
              label: "کیف پول",
              link: "/finance/wallet",
            },
            {
              label: "پرداختی ها",
              link: "/finance/payments",
            },
            {
              label: "تسویه حساب",
              link: "/finance/tasfie",
            },
            {
              label: "شبا های تسویه حساب",
              link: "/finance/sheba",
            },
          ]
        }
      />
      <Link to="/finance/wallet">Press Me</Link>
      <Switch>
        <Route path="/finance/wallet">
          <h3>Walelt</h3>
        </Route>
        <Route path="/finance/payments">
          <h3>Wat</h3>
        </Route>
        <Route path="/finance/tasfie">
          <h3>lelt</h3>
        </Route>
        <Route path="/finance/sheba">
          <h3>t</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Finance;
