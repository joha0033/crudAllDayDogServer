
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex.raw('TRUNCATE dog_breeds RESTART IDENTITY CASCADE;')
    .then(function () {
      // Inserts seed entries
      return knex('dog_breeds').insert([
        {
          breed_name: 'Black Lab',
          color: 'Black',
          max_weight: 120
        },
        {
          breed_name: 'Chocolate Lab',
          color: 'Brown',
          max_weight: 110
        },
        {
          breed_name: 'Boston Terrier',
          color: 'Multi',
          max_weight: 40
        },{
          breed_name: 'Greyhound',
          color: 'Multi',
          max_weight: 65
        },{
          breed_name: 'Boxer',
          color: 'Multi',
          max_weight: 85
        },{
          breed_name: 'Great Dane',
          color: 'Multi',
          max_weight: 200
        },{
          breed_name: 'Pug',
          color: 'Beige',
          max_weight: 20
        },{
          breed_name: 'West Highland White Terrier',
          color: 'White',
          max_weight: 25
        },{
          breed_name: 'Shiba Inu',
          color: 'Gold',
          max_weight: 30
        },{
          breed_name: 'Bull Terrier',
          color: 'White',
          max_weight: 55
        }
      ]);
    });
};
