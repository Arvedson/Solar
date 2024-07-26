// src/app/cotizar/page.tsx
"use client"
import React from 'react';
import ClientRouterLayout from '../client-router-layout';
import InstallSystemPage from '../../components/app/InstallSystemPage';
import { CotizacionProvider } from '../../context/CotizacionContext';

const CotizarPage = () => {
  return (
    <CotizacionProvider>
      <InstallSystemPage />
    </CotizacionProvider>
  );
};

CotizarPage.getLayout = (page: React.ReactNode) => {
  return <ClientRouterLayout>{page}</ClientRouterLayout>;
};

export default CotizarPage;
