const DB_NAME = "ArkStorage";
const STORE_NAME = "trail";

export const initDB = () => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME, 1);
    request.onupgradeneeded = (e) => {
      e.target.result.createObjectStore(STORE_NAME, { autoIncrement: true });
    };
    request.onsuccess = () => resolve();
  });
};

export const savePoint = (coord) => {
  const request = indexedDB.open(DB_NAME);
  request.onsuccess = (e) => {
    const db = e.target.result;
    const tx = db.transaction(STORE_NAME, "readwrite");
    tx.objectStore(STORE_NAME).add(coord);
  };
};

export const getTrail = () => {
  return new Promise((resolve) => {
    const request = indexedDB.open(DB_NAME);
    request.onsuccess = (e) => {
      const db = e.target.result;
      const tx = db.transaction(STORE_NAME, "readonly");
      tx.objectStore(STORE_NAME).getAll().onsuccess = (ev) => {
        resolve(ev.target.result);
      };
    };
  });
};