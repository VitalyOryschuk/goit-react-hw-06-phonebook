export function saveToLS(state) {
  try {
    const existedData = JSON.stringify(state);
    localStorage.setItem('state', existedData);
  } catch (err) {
    return err;
  }
}

export function loadStateFromLS() {
  try {
    const loadState = localStorage.getItem('state');

    if (loadState === null) {
      return null;
    }

    return JSON.parse(loadState);
  } catch (err) {
    return err;
  }
}
