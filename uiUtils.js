function buildQuests () {
    let questHtml = "";
    quests.forEach(q => {
        questHtml += q.toHTML();
    });
    document.getElementById('quest_list').innerHTML = questHtml;
}

function buildWarriorQuests () {
    let questHtml = "";
    warriorQuests.forEach(q => {
        questHtml += q.toHTML();
    });
    document.getElementById('warrior_quest_list').innerHTML = questHtml;
}

function buildAttributes () {
    let attributesHtml = "";
    attributes.forEach(a => {
        attributesHtml += a.toHTML();
    });
    document.getElementById('attribute_list').innerHTML = attributesHtml;
}

function buildWarriorAttributes () {
    let attributesHtml = "";
    warriorAttributes.forEach(a => {
        attributesHtml += a.toHTML();
    });
    document.getElementById('attribute_list').innerHTML = attributesHtml;
}

function buildGoldRewards () {
    let rewardsHtml = `<option selected="true" disabled="disabled">Choose gold reward</option>`;
    goldRewards.forEach(r => {
        rewardsHtml += `<option value="${r.gold}">${r.gold} gold</option>`;
    });
    document.getElementById('quest_gold_rewards_select').innerHTML = rewardsHtml;
}

function buildTextRewards () {
    let rewardsHtml = `<option selected="true" disabled="disabled">Choose text reward</option>`;
    textRewards.forEach(r => {
        rewardsHtml += `<option value="${r.text}">${r.text}</option>`;
    });
    document.getElementById('quest_text_rewards_select').innerHTML = rewardsHtml;
}

function buildUserBar () {
    document.getElementById('health_amount').style.width = warrior.hp + '%';
}