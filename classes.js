function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

const MotivatorType = Object.freeze({ GOLD: "GOLD", HP: "HP", XP: "XP", TEXT: "TEXT", ATTRIBUTE: "ATTRIBUTE"});

class Warrior {
    constructor (name, weight, gold, xp, hp, id) {
        this.name = name;
        this.weight = weight;
        this.gold = gold;
        this.xp = xp;
        this.hp = hp;
        this.id = id;
    }
}

class Reward {
    constructor (type, value) {
        this.type = type;
        this.value = value;
    }
}

class Punishment {
    constructor (type, value) {
        this.type = type;
        this.value = value;
    }
}

class Quest {
    constructor (text, duration, rewards, punishments = [], id) {
        this.text = text;
        this.duration = duration;
        this.rewards = rewards;
        this.punishments = punishments;
        this.id = id;
    }
    toHTML() {
        let rewardHtml = "";
        this.rewards.forEach(r => {
            rewardHtml += `<span class="reward">${r.value} ${r.type}</span>`;
        });
        return `<div class="quest${this.active ? ' active' : ''}" quest="${this.id}"><h2>${this.text}</h2><div class="duration"><span>Duration: </span> ${this.duration}</div><div class="reward"><span>Reward: </span>${rewardHtml}</div><button class="begin_quest">Begin</button><button class="cancel_quest">Cancel</button></div></div>`;
    }
}

class WarriorQuest {
    constructor(warrior, quest, active = false, completed = null, startDate = new Date(), id) {
        this.warrior = warrior;
        this.quest = quest;
        this.active = active;
        this.completed = completed;
        this.startDate = startDate;
        this.id = id
    }
    toHTML() {
        let rewardHtml = "";
        this.quest.rewards.forEach(r => {
            rewardHtml += `<span class="reward">${r.value} ${r.type}</span>`;
        });
        return `<div class="warrior_quest quest${this.active ? ' active' : ''}${this.completed === false ? ' failed' : ''}" quest="${this.id}"><h2>${this.quest.text}</h2><div class="duration"><span>Duration: </span> ${this.quest.duration}</div><div class="reward"><span>Reward: </span>${rewardHtml}</div><span>${moment(this.startDate)}</span><button class="begin_quest">Begin</button><div class="warrior_quest_actions"><button class="complete_quest">Complete</button><button class="cancel_quest">Cancel <img src="xIcon.png"/></button></div></div></div>`;
    }
}

class Attribute {
    constructor (text, id) {
        this.text = text;
        this.id = id;
    }
    toHTML() {
        return `<div class="attribute"><div class="attribute_text">${this.text}</div><div class="attribute_score">${this.score}</div></div>`;
    }
}

class WarriorAttribute {
    constructor (warrior, attribute, score, id) {
        this.warrior = warrior;
        this.attribute = attribute;
        this.score = score;
        this.id = id;
    }
    toHTML() {
        return `<div class="attribute"><div class="attribute_text">${this.attribute.text}</div><div class="attribute_score">${this.score}</div></div>`;
    }
}

class WarriorStatusLog {
    constructor (warrior, warriorQuests, warriorAttributes, timestamp = new Date()) {
        this.warrior = warrior;
        this.warriorQuests = warriorQuests;
        this.warriorAttributes = warriorAttributes;
        this.timestamp = timestamp;
    } 
}

class TimingFunctions {
    static dailyLogCheck() {

        db.collection("warrior_status_log").orderBy("timestamp", "desc").limit(1).get().then((querySnapshot) => {
            let addLog = false;
            let lastLog;
            if (querySnapshot.size > 0) {
                querySnapshot.forEach(item => {
                    console.log(item.data());
                    lastLog = item.data();
                })
                const current = new Date().valueOf();
                const lastTime = new Date(lastLog.timestamp).valueOf();
                console.log(current, lastTime, (Number(lastTime) + 86400000) < current);
                if ((Number(lastTime) + 86400000) < current) {
                    addLog = true;
                }
                if (lastLog.warrior.hp == warrior.hp) {
                    console.log(warrior.id);
                    db.collection("warriors").doc(warrior.id).update({
                        hp: (Number(warrior.hp) - 10)
                    })
                    .then(function() {
                        console.log("Document successfully updated!");
                    })
                    .catch(function(error) {
                        // The document probably doesn't exist.
                        console.error("Error updating document: ", error);
                    });
                }
            } else {
                addLog = true;
            }
            if (addLog) {
                const warriorStatusLog = new WarriorStatusLog(warrior, warriorQuests, warriorAttributes);
                const wsl = JSON.parse(JSON.stringify(warriorStatusLog));
                db.collection("warrior_status_log").add(wsl);
            }
        });
    }
}
