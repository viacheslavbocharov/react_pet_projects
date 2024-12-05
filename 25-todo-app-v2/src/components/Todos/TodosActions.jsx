import { RiDeleteBin2Line, RiRefreshLine } from "react-icons/ri";
import React from 'react'
import Button from '../UI/Button'
import styles from './TodosActions.module.css'

export default function TodosActions({ resetTodos, deleteCompletedTodos, completedTododExist }) {
    return (
        <div className={styles.todosActionsContainer}>
            <Button
                title="Reset Todos"
                onClick={() => resetTodos()}>
                <RiRefreshLine />
            </Button>
            <Button
                title="Clear Completed Todos"
                onClick={() => deleteCompletedTodos()}
                disabled={!completedTododExist}>
                <RiDeleteBin2Line />
            </Button>
        </div>
    )
}
