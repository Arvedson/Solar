"use client";
import React from 'react';
import Peso from "@/components/Peso";

export default function PesoPage() {
  return <Peso onClose={() => window.location.href = '/home'} />;
}
