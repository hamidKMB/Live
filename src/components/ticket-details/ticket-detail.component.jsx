import React from "react";

import "../transaction-detail/transaction-detail.styles.scss";
import InfoIcon from "@material-ui/icons/Info";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";

const TicketDetail = (props) => {
  const [isMouseIn, setIsMouseIn] = React.useState({
      editTicket: false ,
      deleteTicket: false ,
      informationTicket: false
  });
  const mouseIn = (event) => {
        event.target.attributes.length > 1 &&
            setIsMouseIn({
                ...isMouseIn ,
                [event.target.attributes[4].nodeValue] : true
            })
        
  }

  const mouseOut = () => {
      Object.keys(isMouseIn).forEach((key) => {
        setIsMouseIn((isMouseIn[key] = false));
      });
  }
  return (
    <tr className="sv border-1 rounded-3 bg-white d-flex flex-row align-items-center mb-2 p-1">
      <td className="border-0" name="shenase">
        {props.informationTicket ? props.personName : props.title}
      </td>
      {props.informationTicket ? (
        <td className="border-0" name="dateOfSubmitRequest">
          {props.discountComponentClicked
            ? props.eventName
            : `${props.price} تومان`}
        </td>
      ) : (
        <td className="border-0" name="dateOfSubmitRequest">
          {props.discountComponent
            ? props.discountCode
            : `${props.price} تومان`}
        </td>
      )}
      {props.discountComponent && (
        <td className="border-0" name="tasfieItems">
          {props.discountValue}تومان
        </td>
      )}
      {
        !props.discountComponentClicked &&
        <td className="border-0" name="tasfieTillDate">
          {props.informationTicket ? props.discount : `${props.capacity} نفر`}
        </td>
      }
      <td className="border-0" name="tasfieItems">
        {props.informationTicket ? `${props.paid}تومان` : props.event}
      </td>
      <td className="border-0">
        {!props.informationTicket ? (
          <>
            <span
              onMouseEnter={mouseIn}
              onMouseLeave={mouseOut}
              className="position-relative"
            >
              <EditIcon
                name="editTicket"
                className="other"
                onClick={props.onClick}
                style={isMouseIn.editTicket ? { color: "#372C51" } : null}
              />
              {isMouseIn.editTicket && (
                <div className="tip">
                  <span className="triangle" />
                  ویرایش
                </div>
              )}
            </span>
            <span
              onMouseEnter={mouseIn}
              onMouseLeave={mouseOut}
              className="position-relative"
            >
              <DeleteIcon
                name="deleteTicket"
                className="other"
                onClick={props.onClick}
                style={isMouseIn.deleteTicket ? { color: "red" } : null}
              />
              {isMouseIn.deleteTicket && (
                <div className="tip">
                  <span className="triangle" />
                  حذف بلیط
                </div>
              )}
            </span>
            <span
              onMouseEnter={mouseIn}
              onMouseLeave={mouseOut}
              className="position-relative"
            >
              <InfoIcon
                name="informationTicket"
                className="info-icon"
                onClick={props.onClick}
              />
              {isMouseIn.informationTicket && (
                <div className="tip">
                  <span className="triangle" />
                  جزئیات بلیط
                </div>
              )}
            </span>
          </>
        ) : (
          <>{props.boughtDate}</>
        )}
      </td>
    </tr>
  );
};

export default TicketDetail;
