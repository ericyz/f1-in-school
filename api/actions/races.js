import Admin from 'firebase-admin';

async function races() {
    const db = Admin.firestore();
    const ret = [];
    const snapshot = await db.collection('races').get();
    for (let index = 0; index < snapshot.docs.length; index++) {
        const doc = snapshot.docs[index];
        const race = {
            raceId: doc.id, city: doc.data().country, country: doc.data().state,
            state: doc.data().city, date: doc.data().date, venue: doc.data().venue, team1: {}, team2: {}
        };
        ret.push(race);
    }
    return ret;
}

export default races;