export function saveToLS(state) {
  try {
    const existedData = JSON.stringify(state);
    localStorage.setItem('state', existedData);
  } catch {
    alert('Error');
  }
}

export function loadStateFromLS() {
  try {
    const loadState = localStorage.getItem('state');

    if (loadState === null) {
      return undefined;
    }

    return JSON.parse(loadState);
  } catch (err) {
    return undefined;
  }
}
