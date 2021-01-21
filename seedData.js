const seedWarriors = [
    new Warrior('Lord Pugh', 0, 217, 0)
]

const seedAttributes = [
    new Attribute('Strength'),
    new Attribute('Intelligence'),
    new Attribute('Attractiveness'),
    new Attribute('Kindness'),
    new Attribute('Style'),
    new Attribute('Happiness'),
    new Attribute('Charisma'),
    new Attribute('Endurance'),
    new Attribute('Discipline'),
    new Attribute('Generosity'),
    new Attribute('Honesty'),
    new Attribute('Hard Working'),
    new Attribute('Vitality'),
    new Attribute('Wealth')
];
const seedRewards = [
    new Reward(null, '25'),
    new Reward(null,'50'),
    new Reward(null,'100'),
    new Reward(null,'1000'),
    new Reward('Take a vacation', 0),
    new Reward('Buy new warddrobe', 0),
    new Reward('Invite friends over for dinner', 0),
    new Reward('Order expensive fancy meal', 0),
    new Reward('Join dating app', 0),
    new Reward('A new plant', 0)
];
const seedQuests = [
    new Quest('Make bed everyday', '10 days', [seedRewards[0]]),
    new Quest('Make bed everyday', '1 month', [seedRewards[1]]),
    new Quest('Ride bike around town lake', '10 days', [seedRewards[2]]),
    new Quest('Ride bike around town lake', '1 month', [seedRewards[3]]),
    new Quest('Sobriety', '10 days', [seedRewards[2]]),
    new Quest('Sobriety', '1 month', [seedRewards[3]]),
    new Quest('play pickeball', '10 days', [seedRewards[3]]),
    new Quest('play pickeball', '5 weekends', [seedRewards[2]]),
    new Quest('Staying at desk during work', '1 week', [seedRewards[2]]),
    new Quest('Stay on top of laundry', '10 days', [seedRewards[2]]),
    new Quest('Stay on top of laundry', '1 month', [seedRewards[3]]),
    new Quest('Stay on top of dishes', '10 days', [seedRewards[2]]),
    new Quest('Stay on top of dishes', '1 month', [seedRewards[3]]),
    new Quest('Get out of home at least once a day', '10 days', [seedRewards[0]]),
    new Quest('Get out of home at least once a day', '1 month', [seedRewards[2]]),
    new Quest('Curling dumbell 50 times each arm', '10 days', [seedRewards[2]]),
    new Quest('Curling dumbell 50 times each arm', '1 month', [seedRewards[3]]),
    new Quest('Overhead press dumbell 50 times each arm', '10 days', [seedRewards[2]]),
    new Quest('Overhead press dumbell 50 times each arm', '1 month', [seedRewards[3]]),
    new Quest('Bench press dumbell 50 times each arm', '10 days', [seedRewards[2]]),
    new Quest('Bench press dumbell 50 times each arm', '1 month', [seedRewards[3]]),
    new Quest('60 pushups', 'Single sitting', [seedRewards[2]]),
    new Quest('90 pushups', 'Single sitting', [seedRewards[3]]),
    new Quest('60 pushups', 'Single sitting', [seedRewards[2]]),
    new Quest('Invite friends over for dinner', 'Single sitting', [seedRewards[2]]),
    new Quest('100 jumping jacks', 'Single sitting', [seedRewards[0]]),
    new Quest('100 jumping jacks', '10 days', [seedRewards[2]]),
    new Quest('Weigh 200lbs', 'Single sitting', [seedRewards[2]]),
    new Quest('Weigh 185lbs', 'Single sitting', [seedRewards[3]]),
    new Quest('Cleaning all trash away before bed', '1 month', [seedRewards[2], seedRewards[2]]),
    new Quest('Cleaning all trash away before bed', '10 days', [seedRewards[1]]),
    new Quest('Organizing an area of home', '10 days', [seedRewards[2]]),
    new Quest('Organizing an area of home', '1 month', [seedRewards[3]]),
    new Quest('Cleaning / vaccuming', '10 days', [seedRewards[2]]),
    new Quest('Cleaning / vaccuming', '1 month', [seedRewards[3]]),
    new Quest('Stretching', '10 days', [seedRewards[0]]),
    new Quest('Stretching', '1 month', [seedRewards[1]]),
    new Quest('Playing video games', '10 days', [seedRewards[1]]),
    new Quest('At least 2 glasses of water', '10 days', [seedRewards[1]]),
    new Quest('At least 2 glasses of water', '1 month', [seedRewards[2]]),
    new Quest('Journaling', '10 days', [seedRewards[2]]),
    new Quest('Journaling', '1 month', [seedRewards[3]]),
    new Quest('Blogging', '10 days', [seedRewards[2]]),
    new Quest('Blogging', '10 days', [seedRewards[3]]),
    new Quest('Reading technical articles', '10 days', [seedRewards[2]]),
    new Quest('Reading technical articles', '1 month', [seedRewards[3]]),
];