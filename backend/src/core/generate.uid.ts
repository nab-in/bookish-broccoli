export function generateUid() {
	let uidGenerated = '';
	const characters =
	  '123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
	for (let i = 0; i < 11; i++) {
	  uidGenerated += characters.charAt(Math.floor(Math.random() * characters.length));
	}
	return uidGenerated;
}