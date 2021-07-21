import React from "react";

//STYLES
import "./dashboard.styles.scss"
import "../../root-styles/layout.scss"
import "../../root-styles/buttons.scss"
import "../../root-styles/cards.scss"
import "../../root-styles/columns.scss"

//DATA
import { dashboardData } from "./dashboard.data";

const Dashboard = () => {
    return (
      <div className="dashboard admin-pages-layout">
        <div className="row">
          {dashboardData.firstRow.map((item, index) => (
            <div className="col-lg-3 col-md-6 col-sm-6 column" key={index}>
              <div className="card first-row">
                <h5>{item.number}</h5>
                <span>{item.description}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 column">
            <div className="card second-row">
              <div className="detail">
                <span>
                  <h6>اعلان ها</h6>
                </span>
                <span>مشاهده همه</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 column">
            <div className="card second-row">
              <div className="detail">
                <span>
                  <h6>تیکت ها</h6>
                </span>
                <span>مشاهده همه</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
              <div className="messages">
                <span className="message-text">لورم ایپسوم</span>
                <span>date</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6 col-md-12 column">
            <div className="card">
              <h1>hello</h1>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 column">
            <div className="card">
              <div className="detail">
                <span>
                  <h6>کیف پول</h6>
                </span>
              </div>
              <div className="stock">
                <span>موجودی حساب :</span>
                <span>2541000 تومان</span>
              </div>
              <div className="button">افزایش موجودی</div>
            </div>
          </div>
          <div className="col-lg-3 col-md-12 column">
            <div className="card">
              <div className="detail">
                <span>
                  <h6>راهنمای سایت</h6>
                </span>
              </div>
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