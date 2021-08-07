//REACT
//REACT
import React from "react"

//COMPONENTS
import LabTabs from "./tabs/Tab.component"

//STYLES
import "../../root-styles/layout.scss"

const Account = () => {
    return (
        <div className="admin-pages-layout account-layout">
            <LabTabs/>
        </div>
    );
}

export default Account