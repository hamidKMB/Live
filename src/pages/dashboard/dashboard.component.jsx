import React from "react";

//COMPONENTS
import Details from "../../components/detail/detail";

//STYLES
import "./dashboard.styles.scss"
import "../../root-styles/layout.scss"
import "../../root-styles/buttons.scss"
import "../../root-styles/cards.scss"
import "../../root-styles/columns.scss"
import ApiRequest from "../../ApiRequest.js";
//DATA
import Message from "../../components/messages/messages.component";
import NotificationMessage from "../../components/messages/notifications-message.component";
import { useHistory } from "react-router-dom";

const Dashboard = () => {
    const history = useHistory();
    const [dashboardDetails, setDashboardDetails] = React.useState({
        abstract: [] ,
        notifications: [] ,
        tickets: [],
        login: [],
        help: {}
    })  
    React.useEffect(() => {
        ApiRequest("/user/dashboard", "GET")
        .then((res) => {
            if (res.status === "SUCCESS") {
                setDashboardDetails({
                    abstract: res.data.abstract ,
                    notifications: res.data.notifications ,
                    tickets: res.data.tickets ,
                    login: res.data.login ,
                    help: res.data.help
                })
            } else if (res.status === "LIMIT_DEVICE") history.push("/limit_device_list")
        })
        .catch ((err) => console.log(err))
    },[history])

    return (
      <div className="dashboard admin-pages-layout">
        <div className="row">
          {dashboardDetails.abstract.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-4 column" key={index}>
              <div className="card first-row">
                <h5>
                  {item.value} {item.unit !== "عدد" && item.unit}
                </h5>
                <span>{item.title}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 column">
            <div className="card second-row" id="notif">
              <Details
                title="اعلان ها"
                showAll
                onClick={() => history.push("/account/notifications")}
              />
              <div className="message-holder">
                {dashboardDetails.notifications.map((item, index) => (
                  <NotificationMessage
                    notifMessage={
                      item.title.length > 35
                        ? item.title.slice(0, 35) + "..."
                        : item.title
                    }
                    dateTime={item.date}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 column">
            <div className="card second-row">
              <Details
                title="تیکت ها"
                showAll
                onClick={() => history.push("/backup")}
              />
              <div className="message-holder" id="tickets">
                {dashboardDetails.tickets.map((item, index) => (
                  <Message
                    message={
                      item.title.length > 35
                        ? item.title.slice(0, 35) + "..."
                        : item.title
                    }
                    messageDescription={item.status}
                    ticket={item.status === "بی پاسخ پاسخ" ? true : false}
                    key={index}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 column">
            <div className="card">
              <Details title="ورود و خروج" />
            </div>
          </div>
          <div className="col-lg-3 col-md-3 column" id="wallet">
            <div className="card">
              <Details title="کیف پول" />
              <div className="stock">
                <span>موجودی حساب :</span>
                <span>2541000 تومان</span>
              </div>
              <div className="button resize">افزایش موجودی</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 column" id="guide">
            <div className="card">
              <Details title="راهنمای سایت" />
              <div className="guide">
                <p>{dashboardDetails.help.fullname} عزیز</p>
                <p>{dashboardDetails.help.description}</p>
              </div>
              <div className="button resize px-1">ویدیو آموزش سایت</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard
