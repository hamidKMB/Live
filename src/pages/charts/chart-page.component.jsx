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
        <div className="drop-down-holder d-flex justify-content-start flex-sm-row flex-column">
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
          <h6>
            {filters.sellOrView} تمام {filters.liveOrVideo} در{" "}
            {filters.duration}:
          </h6>
          {filters.sellOrView === "آمار بازدید" ? (
            <>
              <div className="row mb-5 mt-4">
                <div className="col-lg-6 col-md-6 col-sm-12 py-2 ">
                  <div className="card w-75 ms-md-auto mx-md-0 mx-auto rounded-card-chart d-flex flex-row align-items-center p-2">
                    <span className="items py-3 d-flex flex-column me-3">
                      <span className="mb-1 opera">اپرا</span>
                      <span className="mb-1 chrome">کروم</span>
                      <span className="mb-1 firefox">فایرفاکس</span>
                      <span className="mb-1 safari">سافاری</span>
                    </span>
                    <DoughnutChart />
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 py-2">
                  <div className="card w-75 me-md-auto  mx-md-0 mx-auto rounded-card-chart d-flex flex-row align-items-center p-2">
                    <span className="items py-3 d-flex flex-column me-3">
                      <span className="mb-1 mac">مک</span>
                      <span className="mb-1 windows">ویندوز</span>
                      <span className="mb-1 android">اندروید</span>
                      <span className="mb-1 Linux">لینوکس</span>
                    </span>
                    <DoughnutChart />
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-12">
                  <div className="card bar-chart-card px-5 py-3">
                    <VerticalBar />
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="card px-5 py-3 mt-5">
              <LineChart />
            </div>
          )}
        </div>
      </div>
    );
}

export default ChartPage;