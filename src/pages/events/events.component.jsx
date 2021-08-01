//REACT
import React from "react";

import Event from "../../components/events-component/event.component";

//STYLES
import "../../root-styles/layout.scss";
import "../../root-styles/buttons.scss";
import "./events-page.styles.scss"

const Events = () => {
  return (
    <div className="admin-pages-layout events-layout">
      <div className="header-events">
        <h1 className="detail">لیست رویداد های ایجاد شده </h1>
        <div className="button button-events">+ ایجاد رویداد جدید</div>
      </div>
      <div className="row">
        <Event
          title="لورم ایپسوم"
          image="#"
          date="1400/01/02"
          genere="لورم"
          timeLeftToStart="21 ساعت"
        />
        <Event
          title="لورم ایپسوم"
          image="#"
          date="1400/01/02"
          genere="لورم"
          timeLeftToStart="21 ساعت"
        />
        <Event
          title="لورم ایپسوم"
          image="#"
          date="1400/01/02"
          genere="لورم"
          timeLeftToStart="21 ساعت"
        />
        <Event
          title="لورم ایپسوم"
          image="#"
          date="1400/01/02"
          genere="لورم"
          timeLeftToStart="21 ساعت"
        />
      </div>
    </div>
  );
};

export default Events;
