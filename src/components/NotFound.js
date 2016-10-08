import React from 'react'
import { Link } from 'react-router'

export const NotFound = () => {
    return (
        <div className="row">
            <div className="col-xs-12">
                <h2>404</h2>
                <h2>Страница не найдена</h2>
                <Link to="/">Перейти на главную страницу</Link>
            </div>
        </div>
    )
}
