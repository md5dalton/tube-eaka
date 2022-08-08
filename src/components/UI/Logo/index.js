import React from 'react'
import { Link } from 'react-router-dom'

import "./styles.sass"

export default () => (
    <div className="logo">
        <Link to="/">
            <div>TubeEaka</div>
        </Link>
    </div>
)