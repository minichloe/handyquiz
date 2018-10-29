const db = require('./index');

const { Professional, TestCleaning, TestHandyman, Admin } = require('./models');

const professionals = [
  {
    firstName: 'Sara',
    lastName: 'Jackson',
    email: 'sara.jackson@handy.com',
    service: 'cleaner',
  },
  {
    firstName: 'Jane',
    lastName: 'Summers',
    email: 'jane.summersn@handy.com',
    service: 'cleaner',
  },
  {
    firstName: 'Mallory',
    lastName: 'Jansen',
    email: 'sean.janssen@handy.com',
    service: 'cleaner',
  },
  {
    firstName: 'Benton ',
    lastName: 'Cannon',
    email: 'benton.cannon@handy.com',
    service: 'handyman',
  },
  {
    firstName: 'Ted',
    lastName: 'Jennings',
    email: 'ted.jennings@handy.com',
    service: 'handyman',
  },
  {
    firstName: 'Kenneth',
    lastName: 'Chambers',
    email: 'kenneth.chambers@handy.com',
    service: 'handyman',
  },
];

const cleaningTests = [
  {
    experience: 4,
    cobwebs: 4,
    kitchen: 4,
    cleaningOrder: 3,
    punctuality: 2,
    hardwood: 3,
  },
  {
    experience: 4,
    cobwebs: 2,
    kitchen: 4,
    cleaningOrder: 4,
    punctuality: 4,
    hardwood: 4,
  },
  {
    experience: 2,
    cobwebs: 0,
    kitchen: 2,
    cleaningOrder: 4,
    punctuality: 4,
    hardwood: 2,
  },
];

const handymanTests = [
  {
    experience: 4,
    skills: 6,
    training: 3,
    supplies: 8,
  },
  {
    experience: 3,
    skills: 4,
    training: 4,
    supplies: 6,
  },
  {
    experience: 4,
    skills: 6,
    training: 4,
    supplies: 0,
  },
];

const seedScript = async () => {
  try {
    console.log('Syncing database...');
    await db.sync({ force: true });
    console.log('Database synced!');

    const createdProfessionals = await Professional.bulkCreate(professionals, { returning: true });
    const createdCleaningTests = await TestCleaning.bulkCreate(cleaningTests, { returning: true });
    const createdHandymanTests = await TestHandyman.bulkCreate(handymanTests, { returning: true });

    await Promise.all([
      Admin.create({ email: 'admin@handy.com', password: 'handy' }),
      createdProfessionals[0].setTestCleaning(createdCleaningTests[2]),
      createdProfessionals[1].setTestCleaning(createdCleaningTests[0]),
      createdProfessionals[2].setTestCleaning(createdCleaningTests[1]),
      createdProfessionals[3].setTestHandyman(createdHandymanTests[2]),
      createdProfessionals[4].setTestHandyman(createdHandymanTests[1]),
      createdProfessionals[5].setTestHandyman(createdHandymanTests[0]),
    ]);
  } catch (err) {
    console.log(err);
  } finally {
    console.log('Seeding completed');
    db.close();
    console.log('Database closed.');
  }
};

seedScript();
