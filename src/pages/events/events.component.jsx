//REACT
import React from "react";

import Event from "../../components/events-component/event.component";
import { useHistory } from "react-router";
//STYLES
import "../../root-styles/layout.scss";
import "../../root-styles/buttons.scss";
import "./events-page.styles.scss"
import ApiRequest from "../../ApiRequest";

const Events = () => {

  const [eventList, setEventList] = React.useState([]);
  const history = useHistory();
  
  React.useEffect(() => {
      ApiRequest("/vod/list", "get").then((res) => {
          console.log(res);

          if(res.status==="SUCCESS"){
              setEventList(res.data.data);
          }
       });
    },[])

  return (
    <div className="admin-pages-layout events-layout">
      <div className="header-events">
        <h1 className="detail">لیست رویداد های ایجاد شده </h1>
        <div className="button button-events" onClick={() => history.push('/events/upload-live')}>+ ایجاد رویداد جدید</div>
      </div>
      <div className="row">
        <Event
            key = "index"
            image="#"
            title="adsasd"
            date="adsasd"
            timeLeftToStart="adsasd"
            genere="adsasd"
           />  
      </div>
      </div>
      );
    };
    
    export default Events;
    
    //  {
    //    eventList.map( (item) => (
    //      <Event
    //       key = {item.id}
    //       image={item.image_path}
    //       title={item.title}
    //       date={item.created_at}
    //       timeLeftToStart={item.published_at}
    //       genere={item.category.title}
    //      />
    //    ))
    //  }