import React from 'react'
import Icon from '../../../UI/Icon'

import "./styles.sass"

export default () => (
    <div id="search-wrapper">
        <div id="input-wrapper">
            <input type="text" placeholder="Search" />
            <Icon name="search-outline" id="focus-icon" />
        </div>
        <Icon name="search-outline" className="search-icon" />
        <Icon name="mic-outline" id="voice-icon" />
    </div>
)