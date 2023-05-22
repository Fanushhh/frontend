import React from "react";
import styles from './Exercise.module.scss';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from "@mui/icons-material/Delete";
import {Link} from 'react-router-dom';
import axios from 'axios';




export default function Exercise({exerciseData}){
    return(
        <div className={styles.exercise}>
            <Link  to={`/${exerciseData._id}`}>
                <p className={styles.exerciseTitle}>
                {exerciseData.name}
                </p>
            </Link>
            <div className={styles.buttonsContainer}>
                <div className={styles.buttonWrapper}>
                    <button data-hover="Edit me" className={styles.editButton}>
                    <EditIcon />
                    </button>
                    <span className={styles.editTooltip}>Edit me</span>
                </div>
                <div className={styles.buttonWrapper}>
                    <button 
                    data-hover="Delete me" 
                    className={styles.deleteButton}
                    onClick={deleteItem}
                    >
                    <DeleteIcon /> 
                    </button>
                    <span className={styles.deleteTooltip}>Delete me</span>
                </div>
            </div>
        </div>
    )
}
