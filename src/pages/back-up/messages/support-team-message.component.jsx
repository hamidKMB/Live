import React from "react";

const SupportTeamMessage = (props) => {
    return(
        <>
            <div className="support-team-message me-auto p-2 mb-2">
                <h6>{props.supporterName}</h6>
                {props.messageText}
            </div>
            <span className="me-auto ms-2">1400/02/02 - 12:33</span>
        </>
    )
} 

export default SupportTeamMessage