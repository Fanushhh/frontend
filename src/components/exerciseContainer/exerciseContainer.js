import React from "react";
import styles from "./exerciseContainer.module.scss";
import { useEffect, useState } from "react";
import ExerciseColumn from "../exerciseColumn/exerciseColumn";
import ExerciseActions from "../exerciseActions/exerciseActions";
export default function ExerciseContainer() {
  const [exercises, setExercises] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch("/api/exercises/group-by-difficulty");
      const data = await response.json();
      setExercises(data);
    };
    fetchData();
  }, []);
  
  return (
    <>
      <ExerciseActions />
      {Object.keys(exercises).length > 0 ? (
        <div className={styles.exerciseWrapper}>
          
          <div className={styles.exerciseListContainer}>
            {Object.keys(exercises).map((difficulty, index) => {
              return (
                <ExerciseColumn
                  key={index}
                  difficulty={difficulty}
                  exercises={exercises[difficulty]}
                />
              );
            })}
          </div>
        </div>
      ) : null}
    </>
  );
}
