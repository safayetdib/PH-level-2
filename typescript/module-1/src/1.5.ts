//  reference type > object
const user: {
	readonly company: 'Google'; // readonly -- type > literal
	firstname: string;
	middlename?: string; // optional type
	lastname: string;
	married: boolean;
} = {
	company: 'Google',
	firstname: 'John',
	middlename: 'Doe',
	lastname: 'Poe',
	married: true,
};
