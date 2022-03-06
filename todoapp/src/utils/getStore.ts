import { useContext } from "react";
import { StoreContext } from './storeProvider';
import { TodoList } from "../Store/todo-list";

export const useStore = (): TodoList => useContext(StoreContext)