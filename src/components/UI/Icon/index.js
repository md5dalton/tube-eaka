import React from "react"

export default ({ name, className, ...rest }) => (
    <div className={`icon-wrapper${className ? " " + className : ""}`} {...rest}>
        <ion-icon class="icon" name={name}></ion-icon>
    </div>
)