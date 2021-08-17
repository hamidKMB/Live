//REACT
import React from "react";

import TabSlider from "../../components/tab-slider/tab-slider.component";

import {Switch, Route} from "react-router-dom";

//STYLES
import "./finance.styles.scss"
import "../../root-styles/layout.scss";
import Wallet from "./wallet/wallet.component";
import Tasfie from "./tasfie/tasfie.component";
import Payment from "./payments/payment.component";

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
          <Payment/>
        </Route>
        <Route path="/finance/tasfie">
          <Tasfie/>
        </Route>
        <Route path="/finance/sheba">
          <h3>t</h3>
        </Route>
      </Switch>
    </div>
  );
};

export default Finance;
