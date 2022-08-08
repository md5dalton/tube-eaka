import React from 'react'
import Icon from '../Icon'

export default ({ className, toggleHandler }) => (
    <div className={`sidedrawer-toggler${className ? " " + className : ""}`} onClick={toggleHandler}>
        <Icon name="menu-outline" />
    </div>
)