import React from 'react';
import { Navigate } from 'react-router-dom';

export function HomePage() {
  return <Navigate to="/price-update" replace />;
}