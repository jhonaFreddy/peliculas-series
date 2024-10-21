"use client"; 

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import data from '@/data/sample.json'; 

export default function SeriesPage() {
  const [series, setSeries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    try {
      const filteredSeries = data.entries.filter(item => item.programType === 'series');
      setSeries(filteredSeries);
      setLoading(false);
    } catch (err) {
      setError("No se pudo cargar la información de las series.");
      setLoading(false);
    }
  }, []);

  return (
    <div>
        <div className='h-16 items-center flex text-2xl px-20 w-full text-white bg-gray-700'>
        Popular Series
      </div>
      <div className='p-10'>
      {loading ? (
        <div className="px-20 text-xl">Loading...</div>
      ) : error ? ( 
        <div className="px-20 text-xl text-red-500">Error: {error}</div>
      ) : (
        <ProductList products={series} />
      )}
    </div>
    </div>
    
  );
}
