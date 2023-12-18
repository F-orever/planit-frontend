import { storage } from "..";

export async function getImageURL(fileNameURI: string) {
	const ref = storage.ref(fileNameURI);
	let imageURL = "";

	await ref.getDownloadURL().then((data) => {
		imageURL = data;
	});

	return imageURL;
}
