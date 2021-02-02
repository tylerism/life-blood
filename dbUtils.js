// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyBCO4P_-ukuMhUzcExt4dRfSDSQ2Iwl524",
    authDomain: "lifeblood-302217.firebaseapp.com",
    projectId: "lifeblood-302217",
    storageBucket: "lifeblood-302217.appspot.com",
    messagingSenderId: "695724451254",
    appId: "1:695724451254:web:d09d4c103358716f2e8d17"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var db = firebase.firestore();

let warrior;
let quests = [];
let attributes = [];
let rewards = [];
let goldRewards = [];
let textRewards = [];
let warriorQuests = [];
let warriorAttributes = [];
// var questConverter = {
// 	toFirestore: function(quest) {
// 		return {
// 			id: quest.name,
// 			text: quest.state,
// 			duration: quest.country,
// 			rewards: quest.rewards
// 			active: quest.active
// 		};
// 	},
// 	fromFirestore: function(snapshot, options){
// 		const data = snapshot.data(options);
// 		return new Quest(data.id, data.text, data.duration, data.rewards, data.active);
// 	}
// };
function seedDatabase () {
    seedItems(seedQuests, "quests");
    seedItems(seedRewards, "rewards");
    seedItems(seedAttributes, "attributes");
    seedItems(seedWarriors, "warriors");
    seedWarriors.forEach(warrior => {
        seedAttributes.forEach(attr => {
            const wa = new WarriorAttribute(warrior, attr, 0);
            db.collection("warrior_attributes").add(JSON.parse(JSON.stringify(wa)));
        })
    })
}

function seedItems (items, collection) {
    items.forEach(i => {
        db.collection(collection).add(JSON.parse(JSON.stringify(i)))
            .then(function(docRef) {
                console.log("Document written with ID: ", docRef.id);
            })
            .catch(function(error) {
                console.error("Error adding document: ", error);
            });
    });
}

function populateLocalDataFromDB() {

    // db.collection("warriors").get().then((querySnapshot) => {
    //     querySnapshot.forEach((w) => {
    //         war = w.data();
    //         warrior = new Warrior(war.name, war.weight, war.gold, war.xp, war.hp, w.id)
    //     });
    //     console.log(warrior);
    //     buildUserBar();
    //     TimingFunctions.dailyLogCheck();
    // });

    // db.collection("warrior_quests").get().then((querySnapshot) => {
    //     querySnapshot.forEach((quest) => {
    //         const q = quest.data();
    //         warriorQuests.push(new WarriorQuest(q.warrior, q.quest, q.active, q.completed, q.startDate))
    //     });
    //     buildWarriorQuests();
    // });

    // db.collection("attributes").get().then((querySnapshot) => {
    //     querySnapshot.forEach((attr) => {
    //         const a = attr.data();
    //         attributes.push(new Attribute(a.text, a.score, attr.id))
    //     });
    //     buildAttributes();
    // });
    //
    // db.collection("rewards").get().then((querySnapshot) => {
    //     querySnapshot.forEach((reward) => {
    //         const r = reward.data();
    //         rewards.push(new Reward(r.text, r.gold, reward.id));
    //         if (r.gold) {
    //             goldRewards.push(new Reward(r.text, r.gold, reward.id));
    //         } else {
    //             textRewards.push(new Reward(r.text, r.gold, reward.id));
    //         }
    //     });
    //     buildGoldRewards();
    //     buildTextRewards();
    // });
}

db.collection("warriors").onSnapshot(function(querySnapshot) {
    querySnapshot.forEach((w) => {
        war = w.data();
        warrior = new Warrior(war.name, war.weight, war.gold, war.xp, war.hp, w.id)
    });
    buildUserBar();
    buildGold();
    TimingFunctions.dailyLogCheck();
});

db.collection("quests").onSnapshot(function(querySnapshot) {
    quests = [];
    querySnapshot.forEach((quest) => {
        const q = quest.data();
        quests.push(new Quest(q.text, q.duration, q.rewards, q.punishments, quest.id))
    });
    buildQuests();
});

db.collection("warrior_quests").orderBy("startDate", "desc").onSnapshot(function(querySnapshot) {
    warriorQuests = [];
    querySnapshot.forEach((quest) => {
        const q = quest.data();
        warriorQuests.push(new WarriorQuest(q.warrior, q.quest, q.active, q.completed, q.startDate, quest.id))
    });
    buildWarriorQuests();
});

db.collection("warrior_attributes").onSnapshot(function(querySnapshot) {
    warriorAttributes = [];
    querySnapshot.forEach((attr) => {
        const a = attr.data();
        warriorAttributes.push(new WarriorAttribute(a.warrior, a.attribute, a.score, attr.id));
    });
    buildWarriorAttributes();
    buildWarriorQuestAttributeSelectList();
});