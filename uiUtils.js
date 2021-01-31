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

function buildUserBar () {
    document.getElementById('health_amount').style.width = warrior.hp + '%';
}

function populateMotivatorTypes () {
    const types = Object.keys(MotivatorType);
    let motivatorHTML = "";
    types.forEach(r => {
        motivatorHTML += `<option value="${r}">${r}</option>`;
    });
    console.log('hi', motivatorHTML, types);
    document.getElementById('quest_rewards_type_select').innerHTML = `<option selected="true" disabled="disabled">Choose reward type</option>` + motivatorHTML;
    document.getElementById('quest_punishment_type_select').innerHTML = `<option selected="true" disabled="disabled">Choose punishment type</option>` + motivatorHTML;
}

function buildWarriorQuestAttributeSelectList () {
    let warriorAttributesHTML = "";
    warriorAttributes.forEach(r => {
        warriorAttributesHTML += `<option value="${r.attribute.text}">${r.attribute.text}</option>`;
    });
    document.getElementById('quest_reward_attribute_type').innerHTML = `<option selected="true" disabled="disabled">Choose attribute type</option>` + warriorAttributesHTML;
    document.getElementById('quest_punishment_attribute_type').innerHTML = `<option selected="true" disabled="disabled">Choose attribute type</option>` + warriorAttributesHTML;
}
