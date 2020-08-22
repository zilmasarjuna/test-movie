import * as React from 'react'

const LazyLogin = React.lazy(() => import('./Login'))

export default LazyLogin