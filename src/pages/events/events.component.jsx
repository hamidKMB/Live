//REACT
import React from "react";

import Event from "../../components/events-component/event.component";

//STYLES
import "../../root-styles/layout.scss";
import "../../root-styles/buttons.scss";
import "./events-page.styles.scss"
import ApiRequest from "../../ApiRequest";

const Events = () => {
  const [eventList, setEventList] = React.useState([]);
  React.useEffect(() => {
      ApiRequest("/vod/list", "get").then((res) => {
         setEventList(res.data.data)
       });
    },[])
    console.log(eventList);
  return (
    <div className="admin-pages-layout events-layout">
      <div className="header-events">
        <h1 className="detail">لیست رویداد های ایجاد شده </h1>
        <div className="button button-events">+ ایجاد رویداد جدید</div>
      </div>
      <div className="row">
       {
         eventList.map( (item) => (
           <Event
            key = {item.id}
            image={item.image_path}
            title={item.title}
            date={item.created_at}
            timeLeftToStart={item.published_at}
            genere={item.category.title}
           />
         ))
       }
      </div>
    </div>
  );
};

export default Events;
