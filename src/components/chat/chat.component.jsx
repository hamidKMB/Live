import React from "react";
import {ReactComponent as PublicChatLogo} from "./Logos/Public-Chat-logo.svg";
import {ReactComponent as PrivateChatLogo} from "./Logos/Private-Chat-Logo.svg";
import {ReactComponent as ThreeDotLogo} from "./Logos/three-dot-logo.svg";
import {ReactComponent as CommentsLogo} from "./Logos/comments-logo.svg";

import "./chat.styles.scss";
import { NavLink, Route, Switch } from "react-router-dom";
import PrivateChatSide from "./components/private-chats-side.component";

const Chat = () => {
    const [chatType, setChatType] = React.useState('گفتگو عمومی');
    const [chatLogo, setChatLogo] = React.useState(<PublicChatLogo/>)
    return(
        <div className="hole-chat-component card d-flex flex-row p-0">
            <div className="contacts-and-type-of-chat w-25 d-flex flex-column">
                <h5 className="mx-auto mt-4 mb-5 fs-6">مدیریت گفتگو ها</h5>
                <div className="side">
                    <NavLink 
                        to="/events/chat/public-chat" 
                        activeClassName="active-style" 
                        className="position-relative d-flex flex-row justify-content-start align-items-center"
                        onClick={() => {
                            setChatType("گفتگو عمومی")
                            setChatLogo(<PublicChatLogo/>)
                        }}
                        >
                        <span className="chat-type-logo p-2 ms-2">
                             <PublicChatLogo/>
                        </span>
                        <span className="chat-type">
                            گفتگو عمومی
                        </span>
                        <span className="top-circle"/>
                        <span className="bottom-circle"/>
                    </NavLink>
                    <NavLink 
                        to="/events/chat/comments" 
                        activeClassName="active-style" 
                        className="position-relative d-flex flex-row justify-content-start align-items-center"
                        onClick={() => {
                            setChatType("دیدگاه ها")
                            setChatLogo(<CommentsLogo/>)
                        }}
                        >
                         <span className="chat-type-logo p-2 ms-2">
                             <CommentsLogo/>
                        </span>
                        <span className="chat-type">
                            دیدگاه ها
                        </span>
                        <span className="top-circle"/>
                        <span className="bottom-circle"/>
                    </NavLink>
                    <h6 className="me-2 my-2 fs-6">گفتگو های خصوصی</h6>
                    <div className="private-chats-contacts ms-1 me-2">
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                        <PrivateChatSide userId="علی" userMessagePreview="لورم ایپسوم" numberOfUnreadMessages="8"/>
                    </div>
                </div>
            </div>
            <div className="chats w-75 d-flex flex-column">
                <div className="head-of-chat-container p-3">  
                    <div className="head-of-chat d-flex flex-row align-items-center justify-content-between">
                        <span className="chat-type-logo p-2 ms-3">{ chatLogo }</span>
                        <span className="chat-type">{ chatType }</span>
                        <ThreeDotLogo className="me-auto"/>
                    </div>
                </div>
                <div className="chat-container">
                    <Switch>
                        <Route path="/events/chat/public-chat" exact>
                            <h2>
                                public chat
                            </h2>
                        </Route>
                        <Route path="/events/chat/comments" exact>
                            <h2>
                                private chat
                            </h2>
                        </Route>
                    </Switch>
                </div>
            </div>
        </div>
    )
}

export default Chat