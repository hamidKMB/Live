import React from "react"

const UserMessage= (props) => {
    return(
        <>
            <div className="user-message text-break p-2 mb-2">
                {props.messageText}
              </div>
              <span className="me-2">1400/02/02 - 12:33</span>
        </>
    )
}

export default UserMessage