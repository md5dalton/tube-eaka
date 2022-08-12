import React from 'react'
import Icon from '../../UI/Icon'
import Logo from '../../UI/Logo'
import SearchInput from './SearchInput'

import "./styles.sass"

export default ({ sideDrawerIsOpen, sideDrawerToggleHandler }) => {
 
    const isAuthenticated = false
    const user = {
        name: "reamo",
        id: "dGr4t"
    }
    
    return (
        <header>
            <div className="container">
                <div className="flex-wrapper">
                    <div id="left">
                        <Icon id="sidedrawer-toggler" className="button" name="menu-outline" />
                        <Logo />
                    </div>
                    <div id="middle">
                        <SearchInput />
                    </div>
                    <div id="right">
                        <div className="icons">
                            <Icon className="button" id="create-new-video" name="videocam-outline" />
                            <Icon className="button" id="notifications" name="notifications-outline" />
                            <Icon className="button toggler" id="search-toggler" name="search-outline" />
                            <Icon className="button toggler" id="context-menu-toggler" name="ellipsis-vertical" />
                        </div>
                        <div className="user">
                            <button>
                                <Icon name="person-circle-outline" />
                                <span>login</span>
                            </button>
                            {/* <div className="icon-wrapper">m</div> */}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}