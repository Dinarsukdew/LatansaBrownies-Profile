import React from 'react';
const aboutus = React.lazy(()=> import('./aboutus'))
const services = React.lazy(()=> import('./services'))
const product = React.lazy(()=> import('./product'))
const home = React.lazy(()=> import('./home'))

const routes = [
    {path: '/aboutus', Component: AboutUs},
    {path: '/services', Component: Services},
    {path: '/product', Component: Product},
    {path: '/hama', Component: Home},
]

export default routes