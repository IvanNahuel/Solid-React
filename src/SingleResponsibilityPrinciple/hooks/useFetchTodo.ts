import { useEffect, useState } from "react";
import { fetchTodos, TodoType } from "../services/todoService";

export const useFetchTodo = () =>{
    const [todo, setTodo] = useState<TodoType[]>([]);
    const [isFetching, setIsFetching] = useState<boolean>(true);

    useEffect(()=>{
        fetchTodos()
        .then(todos => setTodo(todos))
        .finally(()=> setIsFetching(false));
    },[]);

    return { todo, isFetching };
}