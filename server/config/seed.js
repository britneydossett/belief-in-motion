/**
 * Populate DB with sample data on server start
 * to disable, edit config/environment/index.js, and set `seedDB: false`
 */

'use strict';

var Product = require('../api/product/product.model');
var User = require('../api/user/user.model');

Product.find({}).remove(function() {
  Product.create({
    category: 'Donation',
    name : 'Donation',
    description : 'This donation may be used for any need.',
    price: 15.00
  }, {
    category: 'Operation Education',
    name : 'Sponsor a Child',
    description : 'Send a child to school where food is provided.',
    price: 30.00
  }, {
    category: 'Operation Education',
    name : 'High School Transportation',
    info : 'Help a high schooler have safe transportation to school every day.',
    price: 55.00
  },  {
    category: 'Operation Education',
    name : 'Build a Middle School',
    info : 'Help us build a middle school for children in Sintelec.',
    price: 25.00
  },  {
    category: 'Operation Education',
    name : 'Boarding School for 2 Orphans',
    info : 'We offer them an education and keep them from having to resort to perpetuating the cycle of poverty and abandonment.',
    price: 40.00
  },{
    category: 'Empowerment',
    name : 'Piranda Flats -- Dignity',
    info : '"Take a walk in our shoes". These shoes were designed in Romania, and inspired by traditional Romanian prints. EACH PURCHASE will be reinvested into the lives of impoverished families through Evangelism, Education, Empowerment and Establishment.',
    price: 48.00
  },{
    category: 'Empowerment',
    name : 'Piranda Flats -- Faith',
    info : '"Take a walk in our shoes". These shoes were designed in Romania, and inspired by traditional Romanian prints. EACH PURCHASE will be reinvested into the lives of impoverished families through Evangelism, Education, Empowerment and Establishment.',
    price: 48.00
  }, {
    category: 'Empowerment',
    name : 'Piranda Flats -- Hope',
    info : '"Take a walk in our shoes". These shoes were designed in Romania, and inspired by traditional Romanian prints. EACH PURCHASE will be reinvested into the lives of impoverished families through Evangelism, Education, Empowerment and Establishment.',
    price: 48.00
  },
  function() {
      Product.find(function (err, products) {
        if (err) { console.log(err); }
        else {
          console.log('Finished populating ' + products.length + ' products.');
        }
      });
    }
    );
});

User.find({}).remove(function() {
  User.create({
    provider: 'local',
    name: 'Test User',
    email: 'test@test.com',
    password: 'test'
  }, {
    provider: 'local',
    role: 'admin',
    name: 'Admin',
    email: 'admin@admin.com',
    password: 'admin'
  }, function() {
      console.log('finished populating users');
    }
  );
});
