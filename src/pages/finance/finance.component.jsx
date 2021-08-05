//REACT
import React from "react";

import TabSlider from "../../components/tab-slider/tab-slider.component";

import {Switch, Route, Link} from "react-router-dom";

//STYLES
import "../../root-styles/layout.scss";
import Wallet from "./wallet/wallet.component";
import Tasfie from "./tasfie/tasfie.component";

const Finance = () => {
  return (
    <div className="admin-pages-layout finance-page">
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
      <Switch>
        <Route path="/finance/wallet">
          <Wallet/>
        </Route>
        <Route path="/finance/payments">
          <Tasfie/>
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
