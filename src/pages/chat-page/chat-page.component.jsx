import React from "react";

import { useHistory } from "react-router";
import Chat from "../../components/chat/chat.component";

import "./chat-page.styles.scss";


const ChatPage = () => {
    const history = useHistory()

    return(
        <div className="chat-page-layout">
            <div className="container pt-5">
                <div className="head-chat my-auto d-flex flex-row align-items-center justify-content-between mb-5">
                    <span>
                        "گفتگو های پخش زنده"بررسی مشکلات موجود در سایت
                    </span>
                    <div className="button-outline py-2 px-4" onClick={() => history.push("/events")}>
                        بازگشت
                    </div>
                </div>
                <Chat/>                
            </div>
        </div>
    )
}

export default ChatPage;