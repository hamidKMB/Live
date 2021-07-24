import React from "react";

//COMPONENTS
import Details from "../../components/detail/detail";

//STYLES
import "./dashboard.styles.scss"
import "../../root-styles/layout.scss"
import "../../root-styles/buttons.scss"
import "../../root-styles/cards.scss"
import "../../root-styles/columns.scss"

//DATA
import { dashboardData } from "./dashboard.data";
import Message from "../../components/messages/messages.component";

const Dashboard = () => {
    return (
      <div className="dashboard admin-pages-layout">
        <div className="row">
          {dashboardData.firstRow.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-4 column" key={index}>
              <div className="card first-row">
                <h5>{item.number}</h5>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-6 column">
            <div className="card second-row" id="notif">
              <Details title="اعلان ها" showAll />
              <div className="message-holder">
                <Message message="لورم ایپسوم" messageDescription="Date" />
                <Message message="لورم ایپسوم" messageDescription="Date" />
                <Message message="لورم ایپسوم" messageDescription="Date" />
                <Message message="لورم ایپسوم" messageDescription="Date" />
                <Message message="لورم ایپسوم" messageDescription="Date" />
                <Message message="لورم ایپسوم" messageDescription="Date" />
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 column">
            <div className="card second-row">
              <Details title="تیکت ها" showAll />
              <div className="message-holder" id="tickets">
                <Message
                  message="لورم ایپسوم"
                  messageDescription="Situation"
                  ticket
                />
                <Message
                  message="لورم ایپسوم"
                  messageDescription="Situation"
                  ticket
                />
                <Message
                  message="لورم ایپسوم"
                  messageDescription="Situation"
                  ticket
                />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
                <Message message="لورم ایپسوم" messageDescription="Situation" />
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
              <div className="button">افزایش موجودی</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 column" id="guide">
            <div className="card">
              <Details title="راهنمای سایت" />
              <div className="guide">
                <p>علی عزیز</p>
                <p>لورم ایپسوم اشنسیذ شسی شسی سشیذشیسذشسی اشسی</p>
              </div>
              <div className="button">ویدیو آموزش سایت</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Dashboard