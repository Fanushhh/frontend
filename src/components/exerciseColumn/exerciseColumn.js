import Exercise from "../exercise/Exercise";
import styles from "./exerciseColumn.module.scss";

export default function ExerciseColumn({ difficulty, exercises }) {
  return (
    <div className={styles.exerciseColumn}>
      <h1 className={styles.columnTitle}>{difficulty}</h1>
      {exercises.map((exercise) => (
        <Exercise key={exercise._id} exerciseData={exercise}/>
      ))}
    </div>
  );
}
