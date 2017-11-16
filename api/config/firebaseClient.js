import Admin from 'firebase-admin';

async function getRaces() {
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

  //   const results = await db.collection('results').where('race', '==', doc.id).get();
  //   for (let j = 0; j < results.length; j++) {
  //     const doc1 = results[j];
  //     const raceResult = {
  //       team: doc1.data().team, race_time: doc1.data().race_time, reaction_time: doc1.data().reaction_time,
  //       split_time: doc1.data().split_time, combined_time: doc1.data().combined_time
  //     };
  //     if (doc1.data().team === doc.data().team1) {
  //       raceResult.team1 = race;
  //     } else {
  //       raceResult.team2 = race;
  //     }
  //     ret.push(raceResult);
  //   }
  // }

  // return ret;
}

//     .then((snapshot) => {
//     snapshot.forEach((doc) => {


//       db.collection('results').where('race', '==', doc.id).get()
//         .then((result) => {
//           result.forEach((doc1) => {
//             const raceResult = {
//               team: doc1.data().team, race_time: doc1.data().race_time, reaction_time: doc1.data().reaction_time,
//               split_time: doc1.data().split_time, combined_time: doc1.data().combined_time
//             };

//             if (doc1.data().team === doc.data().team1) {
//               raceResult.team1 = race;
//             } else {
//               raceResult.team2 = race;
//             }
//           });

//           ret.push(race);
//         })
//         .catch((err) => {
//           console.log('Error getting documents', err);
//         });
//     });
//   })
//     .catch((err) => {
//       console.log('Error getting documents', err);
//     });
// }

export { getRaces };
