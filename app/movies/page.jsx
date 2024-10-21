"use client";  

import React, { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import data from '@/data/sample.json'; 

export default function MoviesPage() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null); 

  useEffect(() => {
    try {
      if (!data || !data.entries) {
        throw new Error("No se pudo cargar la información de películas.");
      }
      const filteredMovies = data.entries.filter(item => item.programType === 'movie');
      setMovies(filteredMovies);
      setLoading(false);
    } catch (err) {
      setError(err.message); 
      setLoading(false);
    }
  }, []);

  return (
    <div>
        <div className='h-16 items-center flex text-2xl px-20 w-full text-white bg-gray-700'>
        Popular Movies
      </div>
        <div className='p-10'>
        
      {loading ? (
        <div className="px-20 text-xl">Loading...</div>
      ) : error ? ( 
        <div className="px-20 text-xl text-red-500">Error: {error}</div>
      ) : (
        <ProductList products={movies} />
      )}
    </div>
    </div>
  );
}
