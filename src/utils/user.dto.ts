// user.dto.ts
export enum Occupation {
	Employee = 'employee',
	Unoccupied = 'unoccupied',
}

export interface User {
	id?: string;
	email: string;
	nickName: string;
	occupation: Occupation;
}
