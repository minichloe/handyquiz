export const cleaningQ = [
  {
    id: 'experience',
    question: `How many years of paid experience do you have?`,
    answers: [
      {
        text: `0 - 6 months`,
        value: 0,
      },
      {
        text: `6 months - 1 year`,
        value: 1,
      },
      {
        text: `1 year - 3 years`,
        value: 2,
      },
      {
        text: `3 years - 5 years`,
        value: 3,
      },
      {
        text: `5+ years`,
        value: 4,
      },
    ],
  },
  {
    id: 'cobwebs',
    question: `What would you do about cleaning cobwebs and dusting?`,
    answers: [
      {
        text: `Don't clean any cobwebs because that's too detailed, but I do some dusting`,
        value: 2,
      },
      {
        text: `Don't clean any cobwebs or dust because it takes too long`,
        value: 0,
      },
      {
        text: `Clean cobwebs I can reach, and dust all surfaces`,
        value: 4,
      },
    ],
  },
  {
    id: 'kitchen',
    question: `What is the effect of oven cleaner on kitchen countertops?`,
    answers: [
      {
        text: `No effect`,
        value: 1,
      },
      {
        text: `Enhances shine`,
        value: 0,
      },
      {
        text: `Leaves streak marks`,
        value: 2,
      },
      {
        text: `Stains surface`,
        value: 4,
      },
    ],
  },
  {
    id: 'cleaningOrder',
    question: `In what order would you clean these items in the kitchen?`,
    answers: [
      {
        text: `Clean the floors; wash the dishes; wipe down the countertops`,
        value: 2,
      },
      {
        text: `Wash the dishes; wipe down the countertops; clean the floors`,
        value: 4,
      },
      {
        text: `Wipe down the countertops; wash the dishes; clean the floors`,
        value: 1,
      },
      {
        text: `Wash the dishes; clean the floors; wipe down the countertops`,
        value: 3,
      },
    ],
  },
  {
    id: 'punctuality',
    question: `You have a job at 9:00am and realize you won't arrive until 9:20am. You would:`,
    answers: [
      {
        text: `Notify the client and Handy as soon as possible and plan to stay overtime`,
        value: 4,
      },
      {
        text: `Notify the client and Handy after 9:00am in case you end up arriving by 9:10am`,
        value: 2,
      },
      {
        text: `Don't notify anyone since you're only going to be 20 minutes late`,
        value: 0,
      },
    ],
  },
  {
    id: 'hardwood',
    question: `What would you use to clean hardwood cabinets in the kitchen?`,
    answers: [
      {
        text: `Bleach`,
        value: 0,
      },
      {
        text: `All purpose cleaner`,
        value: 4,
      },
      {
        text: `Vinegar and water`,
        value: 2,
      },
      {
        text: `Windex`,
        value: 3,
      },
    ],
  },
];

export const handymanQ = [
  {
    id: 'experience',
    question: `How many years of paid experience do you have?`,
    answers: [
      {
        text: `0 - 6 months`,
        value: 0,
      },
      {
        text: `6 months - 1 year`,
        value: 1,
      },
      {
        text: `1 year - 3 years`,
        value: 2,
      },
      {
        text: `3 years - 5 years`,
        value: 3,
      },
      {
        text: `5+ years`,
        value: 4,
      },
    ],
  },
  {
    id: 'skills',
    question: `What skills do you have?`,
    answers: [
      {
        text: `Carpentry`,
        value: 1,
      },
      {
        text: `Plumbing`,
        value: 1,
      },
      {
        text: `Moving`,
        value: 1,
      },
      {
        text: `Electrical`,
        value: 1,
      },
      {
        text: `Painting`,
        value: 1,
      },
      {
        text: `Lawn care`,
        value: 1,
      },
    ],
  },
  {
    id: `training`,
    question: `Where did you receive your handyman training?`,
    answers: [
      {
        text: `Self-taught`,
        value: 1,
      },
      {
        text: `Apprenticeship`,
        value: 1,
      },
      {
        text: `Vocational School`,
        value: 1,
      },
      {
        text: `Other`,
        value: 1,
      },
    ],
  },
  {
    id: `supplies`,
    question: `What supplies do you have?`,
    answers: [
      {
        text: `Basic tools (drill, wrench, hammer, level, etc.)`,
        value: 2,
      },
      {
        text: `Power tools (circular/table saw, nail gun, shop vac, etc.)`,
        value: 2,
      },
      {
        text: `Painting supplies (roller, brush, drop cloth, tape, etc.)`,
        value: 2,
      },
      {
        text: `Lawn care equipment (mower, leaf blower, string trimmer, hand tools, etc.)`,
        value: 2,
      },
      {
        text: `Ladder`,
        value: 2,
      },
    ],
  },
];
