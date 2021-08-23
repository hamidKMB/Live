//REACT
import React from "react";
import Modal from "../../components/modal/modal.component";
import TextInput from "../../components/text-input/text-input.component"
import BackupRow from "../../components/backup-rows/back-up-rows.component";
import {ReactComponent as AttachLogo} from "./attach-file.svg"
import {ReactComponent as BackupAvatar} from "./back-up-avatar.svg"
import {ReactComponent as CrossLogo} from "./cross-logo.svg"
//STYLES
import "../../root-styles/layout.scss";
import "./backup.styles.scss"

const BackUp = () => {
  const [isClicked, setIsClicked] = React.useState(false)
  const [userAttachment, setUserAttachment] = React.useState([])
  const [isChatOpen, setIsChatOpen] = React.useState(false);

  const onChangeHandler = (event) => {
     setUserAttachment([...userAttachment, event.target.files[0].name])
  }
  
  const deleteAttachedFile = (event) => {
    setUserAttachment(
      userAttachment.filter(
        (item) => 
          item !== event.target.attributes[1].value
      ))
  }
  
  return (
    <div className="admin-pages-layout backup-layout">
      <div className="d-flex flex-row">
      <div className={`d-flex flex-column ${isChatOpen ? "w-50" : "w-100"}`}>
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
            >
              <div className="content-in-Modal-back-up p-sm-2 p-md-4">
                <h5>تیکت جدید</h5>
                <div className="d-flex align-items-center">
                  <div className="d-flex flex-column  input-holder">
                    <TextInput input label="عنوان"/>
                    <TextInput dropDown label="واحد" dropItems={[""]}/>
                    <TextInput textArea maxLength="500" helperText="تا 500 کاراکتر" label="متن تیکت"/>
                    <div className="d-flex flex-sm-row flex-column-reverse">
                      <label htmlFor="add-document" className="input-file button p-2" onChange={onChangeHandler}>
                         {
                           userAttachment.length === 2 ?
                           
                            "ظرفیت تکمیل "
                           
                           :
                           <span>
                            <AttachLogo className="ms-2"/> افزودن پیوست
                           </span>
                           
                         }  
                        <input type="file" id="add-document" disabled={userAttachment.length === 2 && true}/>
                      </label>
                      {
                        userAttachment.map((item,index) => {
                          return(
                            <div key={index} id={index} className="px-2 py-1 me-3 mb-sm-none attached-file d-flex align-items-center">
                              <span className="cross-logo" onClick={deleteAttachedFile} value={item}>
                                <CrossLogo className="path"/>
                              </span>
                              {item}
                            </div>
                          )
                        })
                      }
                    </div>
                    <span className="mb-0 mt-1 help-text">حداکثر 2 فایل</span>
                    <div className="d-flex mx-auto mt-4">
                      <div className="button rounded-3 ms-2 py-2 px-4">
                       ثبت تیکت 
                      </div>
                      <div className="button-outline rounded-3 py-2 px-4">
                        بازگشت
                      </div>
                    </div>
                  </div>
                  <BackupAvatar className="my-auto mx-lg-auto me-md-auto  px-3 d-none d-md-block"/>
                </div>
              </div>
            </Modal>
          )}
        </div>
        <table className="table d-flex flex-column">
          <thead className="thead-backup">
            <tr className="card d-flex flex-row justify-content-start">
              <th scope="col" className="border-0 th-backup">شماره</th>
              <th scope="col" className="border-0 th-backup-2">عنوان</th>
              {
                !isChatOpen &&
                <>
                <th scope="col" className="border-0 th-backup">واحد</th>
                <th scope="col" className="border-0 th-backup">تاریخ</th>
                </>
              }
              <th scope="col" className="border-0 th-backup">وضعیت</th>
              {
                !isChatOpen &&
                <th scope="col" className="border-0 th-backup">بازخورد</th>
              }
            </tr>
          </thead>
          <tbody className="tbody-back-up">
              <BackupRow 
              code="100235" 
              title="سشیارذشنسایر" 
              unit="پشتیبانی" 
              date="1400/02/25 - 12:30" 
              situation="درحال پاسخگویی" 
              isChatOpen={isChatOpen} 
              onClick={() => setIsChatOpen(!isChatOpen)}/>
              <BackupRow 
              code="100235" 
              title="سشیارذشنسایر" 
              unit="پشتیبانی" 
              date="1400/02/25 - 12:30" 
              situation="درحال بررسی" 
              isChatOpen={isChatOpen} 
              onClick={() => setIsChatOpen(!isChatOpen)}/>
              <BackupRow 
              code="100235" 
              title="سشیارذشنسایر" 
              unit="پشتیبانی" 
              date="1400/02/25 - 12:30" 
              situation="بسته شده" 
              reaction="good" 
              isChatOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)}/>
              <BackupRow 
              code="100235" 
              title="سشیارذشنسایر" 
              unit="پشتیبانی" 
              date="1400/02/25 - 12:30" 
              situation="بسته شده" 
              reaction="normal" 
              isChatOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)}/>
              <BackupRow 
              code="100235" 
              title="سشیارذشنسایر" 
              unit="پشتیبانی" 
              date="1400/02/25 - 12:30" 
              situation="بسته شده" 
              reaction="bad" 
              isChatOpen={isChatOpen} onClick={() => setIsChatOpen(!isChatOpen)}/>
          </tbody>
        </table>
      </div>
      </div>
    </div>
  );
};

export default BackUp;
