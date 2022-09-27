import { Statuses } from "../enums/Statuses";

export interface IAction<T = {}> {
	type: string,
	payload?: T | T[],
	status?: Statuses,
	error?: string,
}