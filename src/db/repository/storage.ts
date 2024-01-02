import { storage } from "..";

export async function getFileURL(fileNameURI: string) {
	const ref = storage.ref(fileNameURI);
	let imageURL = await ref.getDownloadURL();

	return imageURL;
}
