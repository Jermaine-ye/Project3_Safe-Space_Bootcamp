import React from 'react';
import ReactDOM from 'react-dom/client';
import { Outlet, useNavigate } from 'react-router-dom';

export default function EvaluationScreen() {
  return (
    <div>
      EvaluationScreen
      <Outlet />
    </div>
  );
}
