import {useState, useEffect} from 'react';

export const useMeals = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [rawMeals, setRawMeals] = useState([]);

  useEffect(() =>{
      const loadMeals = async () =>{
          const response = await fetch('/meals');
          const rawMealsResponse = await response.json();
          setRawMeals(rawMealsResponse);
          setIsLoading(false)
      }
      loadMeals()
  }, []);
  return {isLoading,
          meals: rawMeals.map(rawMeals => ({
              ...rawMeals,
              plannedDate: new Date(rawMeals.plannedDate)
          })),
          setMeals: setRawMeals}
};

