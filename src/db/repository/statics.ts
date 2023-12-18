import { firestore } from "..";

const COLLECTION_NAME = "mvp";

export type statics = {
	id: string;
	views: number;
	loves: number;
};

export const get = async (): Promise<statics> => {
	const snapshot = await firestore.collection(COLLECTION_NAME).get();
	const data: Array<any> = [];

	snapshot.docs.map((_data) => {
		data.push({
			id: _data.id,
			..._data.data(),
		});
	});

	return data[0] as statics;
};

export const update = async (
	id: string,
	statics: statics,
): Promise<statics> => {
	await firestore.collection(COLLECTION_NAME).doc(id).update(statics);

	return {
		...statics,
	} as statics;
};
