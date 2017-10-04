import * as React from 'react';
import { Route } from 'react-router-dom';
import { Layout } from './layout/Layout';
import HomePage from './home/HomePage';

export const routes = 
<Layout>
    <Route exact path='/' component={ HomePage } />
</Layout>;
