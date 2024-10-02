import React, { Suspense } from 'react';

const RemoteComponent = React.lazy(() => import('reactApp/App')); // Memuat hanya di browser

const MyReactComponent: React.FC = () => (
  <div>
    <Suspense fallback={<div>Loading...</div>}>
      <h1>Ini Adalah Komponen React</h1>
      <RemoteComponent />
    </Suspense>
  </div>
);

export default MyReactComponent;