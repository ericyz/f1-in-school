async function getRaceProxy(eventId) {
    const response = await fetch(`/api/race/${eventId}`);
    return await response.json();
}

async function getRacesProxy() {
    const response = await fetch('/api/races');
    return await response.json();
}

export { getRaceProxy, getRacesProxy };
