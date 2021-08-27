import React from "react";
import {ReactComponent as PublicChatLogo} from "./Logos/Public-Chat-logo.svg";
import {ReactComponent as ThreeDotLogo} from "./Logos/three-dot-logo.svg";
import {ReactComponent as CommentsLogo} from "./Logos/comments-logo.svg";
import {ReactComponent as CrossLogo} from "./Logos/crossMark.svg";
import "./chat.styles.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import PrivateChatSide from "./components/private-chats-side.component";
import PublicChat from "./components/public-messages.component";
import UserMessage from "./components/admin(user)-message-component";

const Chat = () => {
    const [chatType, setChatType] = React.useState('گفتگو عمومی');
    const [chatLogo, setChatLogo] = React.useState(<PublicChatLogo/>)
    const [selectedUser, setSelectUser] = React.useState(false)
    const [followed, setFollowed] = React.useState(false);
    const [mouseEntered, setMouseEntered] = React.useState("دنبال شده")
    const onClickAccountHandler = (event) => {
      setSelectUser(true)
    }

    return (
      <div className="hole-chat-component card d-flex flex-row p-0">
        <div className="contacts-and-type-of-chat w-25 d-flex flex-column">
          <h5 className="mx-auto mt-4 mb-5 fs-6">مدیریت گفتگو ها</h5>
          <div className="side">
            <NavLink
              to="/events/chat/public-chat"
              activeClassName="active-style"
              className="position-relative d-flex flex-row justify-content-start align-items-center"
              onClick={() => {
                setChatType("گفتگو عمومی");
                setChatLogo(<PublicChatLogo />);
              }}
            >
              <span className="chat-type-logo p-2 ms-2">
                <PublicChatLogo />
              </span>
              <span className="chat-type d-sm-block d-none">گفتگو عمومی</span>
              <span className="top-circle" />
              <span className="bottom-circle" />
            </NavLink>
            <NavLink
              to="/events/chat/comments"
              activeClassName="active-style"
              className="position-relative d-flex flex-row justify-content-start align-items-center"
              onClick={() => {
                setChatType("دیدگاه ها");
                setChatLogo(<CommentsLogo />);
              }}
            >
              <span className="chat-type-logo p-2 ms-2">
                <CommentsLogo />
              </span>
              <span className="chat-type d-sm-block d-none">دیدگاه ها</span>
              <span className="top-circle" />
              <span className="bottom-circle" />
            </NavLink>
            <h6 className="me-2 my-2">گفتگو های خصوصی</h6>
            <div className="private-chats-contacts ms-1 me-2">
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
              <PrivateChatSide
                userId="علی"
                userMessagePreview="لورم ایپسوم"
                numberOfUnreadMessages="8"
              />
            </div>
          </div>
        </div>
        <div className="chats w-75 d-flex flex-column">
          <div className="head-of-chat-container p-3">
            <div className="head-of-chat d-flex flex-row align-items-center justify-content-between">
              <span className="chat-type-logo p-2 ms-3">{chatLogo}</span>
              <span className="chat-type">{chatType}</span>
              <ThreeDotLogo className="me-auto" />
            </div>
          </div>
          <div className="chat-container p-2">
            <Switch>
              <Route path="/events/chat/public-chat" exact>
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <PublicChat
                  userId="علی"
                  userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم"
                  onClick={onClickAccountHandler}
                />
                <UserMessage userMessagePreview="لورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوملورم ایپسوم" />
              </Route>
              <Route path="/events/chat/comments" exact>
                <h2>private chat</h2>
              </Route>
            </Switch>
          </div>
        </div>
        {selectedUser && (
          <div className="side-menu-user-detail py-4 px-3">
            <div className="holder d-flex flex-column justify-content-center align-items-center">
              <div className="head d-flex flex-row me-auto mb-3">
                <h6 className="ms-4 text-nowrap fw-bold"> اطلاعات کاربر </h6>
                <CrossLogo onClick={() => setSelectUser(false)} />
              </div>
              <div className="user-profile mb-3">
                <img src="#" alt="adasas" />
              </div>
              <p className="user-name fw-bold">هدی</p>
              <p className="user-id">@hoda_mohammadi</p>
              <div className="d-flex flex-row fst-normal text-nowrap mb-3">
                <span>105 هزار دنبال کننده</span>
                <span>254 ویدیو</span>
              </div>
              <div
                className={followed ? "button-outline" : "button"}
                onClick={() => setFollowed(!followed)}
                onMouseEnter={() => setMouseEntered("آنفالو کردن")}
                onMouseLeave={() => setMouseEntered("دنبال شده")}
              >
                {followed ? (
                  <p className="m-0"> {mouseEntered}</p>
                ) : (
                  <p className="m-0"> + دنبال کردن</p>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    );
}

export default Chat