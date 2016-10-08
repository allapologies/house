import React from 'react'

export const Layout = (props) => (
    <div className="row">
        <div className="col-sm-8 col-sm-offset-2 col-xs-12">
            {props.children}
        </div>
    </div>
)
