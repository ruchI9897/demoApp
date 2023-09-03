import React, { useCallback, useEffect, useRef, useState } from "react";
import "../styles/index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'

function MenuItem({item}){
    return(
        <div className="menu-item-container">
            <p>{item.toUpperCase()}</p>
        </div>
    )
}

export function HiddenMenuItem({item}){
    return(
        <div className="hidden-menu-item-container">
            <p className="hidden-text">{item.toUpperCase()}</p>
        </div>
    )
}

export default MenuItem