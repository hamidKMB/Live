//REACT
import React from "react";
import Modal from "../../components/modal/modal.component";

//STYLES
import "../../root-styles/layout.scss";
import "./backup.styles.scss"

const BackUp = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  
  return (
    <div className="admin-pages-layout backup-layout">
      <div className="d-flex flex-row">
      <div className="d-flex flex-column">
        <div className="backup-header d-flex flex-row justify-content-between mb-3 align-items-center w-100">
          <h5 className="mb-0">لیست تیکت ها</h5>
          <div
            className="button py-2 me-auto"
            onClick={() => setIsClicked(true)}
          >
            + تیکت جدید
          </div>
          {isClicked && (
            <Modal
              isShow={isClicked}
              closeModal={() => setIsClicked(false)}
            ></Modal>
          )}
        </div>
        <table className="table d-flex flex-column">
          <thead className="thead-back-up">
            <tr className="card d-flex flex-row">
              <th scope="col" className="border-0">شماره</th>
              <th scope="col" className="border-0">عنوان</th>
              <th scope="col" className="border-0">واحد</th>
              <th scope="col" className="border-0">تاریخ</th>
              <th scope="col" className="border-0">وضعیت</th>
              <th scope="col" className="border-0">بازخورد</th>
            </tr>
          </thead>
        </table>
      </div>
      </div>
    </div>
  );
};

export default BackUp;
