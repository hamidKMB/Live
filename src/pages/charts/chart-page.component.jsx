import React from "react" ;
 
import "./chart-page.styles.scss";
import DropDown from "../../components/drop-down/drop-down.component";
import VerticalBar from "./bar/bar.component";
import DoughnutChart from "./doghnutChart/doghnutChart";

const ChartPage = () => { 
    return (
        <div className="admin-pages-layout chart-layout">
            <div className="drop-down-holder d-flex justify-content-between flex-row">
                <DropDown items={["آمار بازدید" , "آمار فروش"]}/>
                <DropDown items={['امروز','هفته گذشته','ماه گذشته','سال گذشته']}/>
                <DropDown items={['ویدیو ها','پخش زنده ها']}/>
            </div>
            <div className="chart-container">
                <h6>آمار بازدید تمام ویدیو ها :</h6>
                <div className="row mb-5">
                    <div className="col-6 align-items-start">
                        <div className="card rounded-card-chart d-flex flex-row align-items-center">
                        <span>Other-Data</span>
                            <DoughnutChart/>
                        </div>
                    </div>
                    <div className="col-6 align-items-end">
                        <div className="card rounded-card-chart d-flex flex-row align-items-center">
                        <span>Other-Data</span>
                            <DoughnutChart/>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="card bar-chart-card">
                            <VerticalBar/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartPage;