//REACT
import React from "react";

import Event from "../../components/events-component/event.component";

//STYLES
import "../../root-styles/layout.scss";
import "../../root-styles/buttons.scss";
import "./events-page.styles.scss"

const Events = () => {
  return (
    <div className="admin-pages-layout">
      <div className = "header-events">
        <h1 className="detail">لیست رویداد های ایجاد شده </h1>
        <div className="button button-events">
          + ایجاد رویداد جدید
        </div>  
      </div>
      <div className="row">
      
        <Event 
          title="Lorem Ipsum"
          image="#"
          date="lorem Ipsum"
          genere="lorem Ipsum"
          timeLeftToStart="lorem Ipsum"
        />
        <Event 
          title="Lorem Ipsum"
          image="#"
          date="lorem Ipsum"
          genere="lorem Ipsum"
          timeLeftToStart="lorem Ipsum"
        />
        <Event 
          title="Lorem Ipsum"
          image="#"
          date="lorem Ipsum"
          genere="lorem Ipsum"
          timeLeftToStart="lorem Ipsum"
        />
        <Event 
          title="Lorem Ipsum"
          image="#"
          date="lorem Ipsum"
          genere="lorem Ipsum"
          timeLeftToStart="lorem Ipsum"
        />
      </div>
    </div>
  );
};

export default Events;
