import React from "react" ;
 
import "./chart-page.styles.scss";
import DropDown from "../../components/drop-down/drop-down.component";
import VerticalBar from "./bar/bar.component";
import DoughnutChart from "./doghnutChart/doghnutChart";
import LineChart from "./lineChart/line-chart.component";

const ChartPage = () => { 
    const [ filters , setFilters] = React.useState({
        sellOrView: "آمار بازدید",
        duration: "امروز",
        liveOrVideo: "ویدیو ها"
    })
    
    const changeHandler = (event) => {
        setFilters( {...filters , [event.target.attributes.name.nodeValue]: event.target.value });
        console.log(filters);
    }

    return (
      <div className="admin-pages-layout chart-layout">
        <div className="drop-down-holder d-flex justify-content-between flex-row">
          <DropDown
            name="sellOrView"
            onChange={changeHandler}
            items={["آمار بازدید", "آمار فروش"]}
          />
          <DropDown
            name="duration"
            onChange={changeHandler}
            items={["امروز", "هفته گذشته", "ماه گذشته", "سال گذشته"]}
          />
          <DropDown
            name="liveOrVideo"
            onChange={changeHandler}
            items={["ویدیو ها", "پخش زنده ها"]}
          />
        </div>
        <div className="chart-container">
          <h6>{filters.sellOrView} تمام {filters.liveOrVideo} :</h6>
          {filters.sellOrView === "آمار بازدید" ? (
            <>
              <div className="row mb-5 mt-4">
                <div className="col-6 align-items-start">
                  <div className="card rounded-card-chart d-flex flex-row align-items-center p-4">
                    <span className="items d-flex flex-column me-3">
                      <span className="mb-2 opera">اپرا</span>
                      <span className="mb-2 chrome">کروم</span>
                      <span className="mb-2 firefox">فایرفاکس</span>
                      <span className="mb-2 safari">سافاری</span>
                    </span>
                    <DoughnutChart />
                    <p className="d-flex flex-column text-center lh-lg position-absolute">
                      <span>number</span>
                      <span>بازدید </span>
                    </p>
                  </div>
                </div>
                <div className="col-6 align-items-end">
                  <div className="card rounded-card-chart d-flex flex-row align-items-center p-4">
                    <span className="items d-flex flex-column me-3">
                      <span className="mb-2 mac">مک</span>
                      <span className="mb-2 windows">ویندوز</span>
                      <span className="mb-2 android">اندروید</span>
                      <span className="mb-2 Linux">لینوکس</span>
                    </span>
                    <DoughnutChart />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card bar-chart-card">
                    <VerticalBar />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div>
                <LineChart/>
            </div>
          )}
        </div>
      </div>
    );
}

export default ChartPage;