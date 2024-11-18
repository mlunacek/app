import React from 'react';
import { Routes, Route } from 'react-router-dom';

import HomePage from '../Home/page';
import AboutPage from '../About/page';

function ShellRoutes({ routePrefix }) {

    return (
        <Routes>

            <Route path={`${routePrefix}/`} element={<HomePage />} />
            <Route path={`${routePrefix}/about`} element={<AboutPage />} />


        </Routes>
    )
}

export default ShellRoutes