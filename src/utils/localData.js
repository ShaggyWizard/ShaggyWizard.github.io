const _appName = "zgxd-test" + ":";

export function isLocalStorageAvailable() {
	var test = 'test';
	try {
		localStorage.setItem(test, test);
		localStorage.removeItem(test);
		return true;
	} catch (e) {
		return false;
	}
}

export const startData = {
	packs: "[]",
}

export function getStartData(key) {
	return JSON.parse(startData[key]);
}

export function getLocalData(key) {
	let data = localStorage.getItem(_appName + key);

	if (data === null && startData.hasOwnProperty(key)) {
		localStorage.setItem(_appName + key, startData[key]);
		data = localStorage.getItem(_appName + key);
	}

	return JSON.parse(data);
}

export function setLocalData(key, value) {
	localStorage.setItem(_appName + key, JSON.stringify(value));
}

export function resetLocalData(key) {
	setLocalData(key, JSON.parse(startData[key]));
	console.log(getLocalData(key));
	return getLocalData(key);
}