import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from './ExercisePage.module.scss';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

export default function ExercisePage(){
    const [exercise, setExercise] = useState();
    const [isLoading, setIsLoading] = useState(true);
    const { exerciseId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          const response = await fetch(`/api/exercises/${exerciseId}`);
          const data = await response.json();
          setExercise(data);
          setIsLoading(false);
        };
        fetchData();
    }, [exerciseId]);
    

    return (
        isLoading ? 
        <h1>Loading...</h1> : 
        <div className={styles.exercise}>
            <Link to='/' className={styles.btn}><ArrowBackIcon /></Link>
            <h4 className={`${styles[`exercise${exercise.difficulty}`]} ${styles.default}`}>{exercise.difficulty}</h4>
            <h1 className={styles.exerciseName}>{exercise.name}</h1>
            <p className={styles.exerciseDesc}>{exercise.description}</p>
            <p className={styles.timestamp}>Created at: {exercise.createdAt}</p>
            <p className={styles.timestamp}>Updated at: {exercise.updatedAt}</p>
        </div>
        
    )
}