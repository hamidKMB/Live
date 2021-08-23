import React from "react"

import {ReactComponent as GoodOnProcessClosed} from "./reactions/good-processClosed.svg";
import {ReactComponent as GoodOnProcess} from "./reactions/good-onprocess.svg";
import {ReactComponent as Normal} from "./reactions/normal.svg";
import {ReactComponent as Bad} from "./reactions/bad.svg";

import "./backup-row.styles.scss"

const BackupRow = (props) => {
    return(
        <tr className="backup-row d-flex flex-row w-100 mt-2" >
                      <td className="border-0 backup-td">{props.code}</td>
                      <td className="border-0 backup-td-2">{props.title}</td>
                      {
                        !props.isChatOpen &&
                        <>
                          <td className="border-0 backup-td">{props.unit}</td>
                          <td className="border-0 backup-td">{props.date}</td>
                        </>
                      }
                      <td className="border-0 backup-td" onClick={props.onClick} title={props.title} situation={props.situation}>
                        {props.situation}
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
    )
}

export default BackupRow