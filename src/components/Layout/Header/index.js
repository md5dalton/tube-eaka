import React from 'react'
import Icon from '../../UI/Icon'
import Logo from '../../UI/Logo'
import SideDrawerToggler from '../../UI/SideDrawerToggler'

import "./styles.sass"

export default ({ sideDrawerIsOpen, sideDrawerToggleHandler }) => (
    <header>
        <div className="container">
            <div className="flex-wrapper">
                <div className="left">
                    <SideDrawerToggler
                        className="icon-wrapper button"
                        toggleHandler={sideDrawerToggleHandler} 
                        isOpen={sideDrawerIsOpen}
                    />
                    <Logo />
                </div>
                <div className="middle">
                    <div className="search-wrapper">
                        <div className="text">
                            <div className="input-wrapper">
                                <input type="text" placeholder="Search" />
                                <div className="icon-wrapper focus-icon">
                                    <Icon name="search-outline" />
                                </div>
                            </div>
                            <div className="icon-wrapper search-icon">
                                <Icon name="search-outline" />
                            </div>
                        </div>
                        <div className="icon-wrapper voice-icon">
                            <Icon name="mic-outline" />
                        </div>
                    </div>
                </div>
                <div className="right">
                    <div className="icons">
                        <div className="icon-wrapper button">
                            <Icon name="videocam-outline" />
                        </div>
                        <div className="icon-wrapper button">
                            <Icon name="notifications-outline" />
                        </div>
                    </div>
                    <div className="user-avatar">
                        <div className="icon-wrapper">m</div>
                    </div>
                </div>
            </div>
        </div>
    </header>
)