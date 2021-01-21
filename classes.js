function uuidv4() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}

class Warrior {
    constructor (name, gold, weight, xp) {
        this.name = name;
        this.weight = weight;
        this.gold = gold;
        this.xp = xp;
    }
}

class Reward {
    constructor (text, gold, id) {
        this.text = text;
        this.gold = gold;
        this.id = id;
    }
}

class Punishment {
    constructor (text, gold) {
        this.text = text;
        this.gold = gold;
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
            rewardHtml += r.text || r.gold;
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
            rewardHtml += r.text || r.gold;
        });
        return `<div class="quest${this.active ? ' active' : ''}${this.completed === false ? ' failed' : ''}" quest="${this.id}"><h2>${this.quest.text}</h2><div class="duration"><span>Duration: </span> ${this.quest.duration}</div><div class="reward"><span>Reward: </span>${rewardHtml}</div><span>${this.startDate.toString()}</span><button class="begin_quest">Begin</button><button class="cancel_quest">Cancel</button></div></div>`;
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
    constructor (warrior, attribute, score) {
        this.warrior = warrior;
        this.attribute = attribute;
        this.score = score;
    }
    toHTML() {
        return `<div class="attribute"><div class="attribute_text">${this.text}</div><div class="attribute_score">${this.score}</div></div>`;
    }
}

