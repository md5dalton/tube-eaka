import React, { Fragment } from "react"

import "./styles.sass"

export default ({ isOpen, toggleHandler }) => isOpen && (
    <Fragment>
        <div className="side-drawer">
        </div>
    </Fragment>
)