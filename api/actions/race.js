import Admin from 'firebase-admin';

async function race(request) {
    const raceId = request.path.split("/")[2];
    const db = Admin.firestore();
    const ret = [];
    const snapshot = await db.collection('results').where("race", "==", raceId).get();
    for (let index = 0; index < snapshot.docs.length; index++) {
        const doc = snapshot.docs[index];
        const record = {
            id: doc.id,
            netlapTime: doc.data().combined_time +'s',
            reactionTime: doc.data().reaction_time +'s',
            grossLapTime: doc.data().race_time +'s',
            team: doc.data().team
        };
        ret.push(record);
    }
    return ret;

}

export default race;