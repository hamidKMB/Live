import React from "react"

import {ReactComponent as GoodOnProcessClosed} from "./reactions/good-processClosed.svg";
import {ReactComponent as GoodOnProcess} from "./reactions/good-onprocess.svg";
import {ReactComponent as Normal} from "./reactions/normal.svg";
import {ReactComponent as Bad} from "./reactions/bad.svg";

import "./backup-row.styles.scss"
import { NavLink } from "react-router-dom";

const BackupRow = (props) => {
    return(
      // <NavLink to={`/backup/${props.title}`} className="backup-nav-link">
        <tr className="backup-row d-flex flex-row mt-2 align-items-center" >
          <td className="border-0 backup-td">{props.code}</td>
          <td className="border-0 backup-td-2">{props.title}</td>
          {
            !props.isChatOpen &&
            <>
              <td className="border-0 backup-td">{props.unit}</td>
              <td className="border-0 backup-td">{props.date}</td>
            </>
          }
          <td className="border-0 backup-td">
            <span className={`my-auto px-1 py-1 rounded-3 d-inline-block w-100 mx-auto
              ${ props.situation === "بسته شده" ? "closed" : "open"}`} onClick={props.onClick} title={props.title} situation={props.situation}>
              {props.situation}
            </span>
          </td>
          {
            !props.isChatOpen &&
              <td className="border-0 backup-td">{
                  props.situation === "بسته شده" ?
                  props.reaction === "good" ?
                  <GoodOnProcessClosed className="good"/>
                  :
                  props.reaction === "normal" ?
                  <Normal className="normal"/>
                  :
                  <Bad className="bad"/>
                  :
                  <GoodOnProcess/>
              }
              </td>
          }
          </tr>
        // </NavLink>
    )
}

export default BackupRow