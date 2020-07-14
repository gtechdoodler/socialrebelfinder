// MOCK I can use if I exceed my daily API request amount
let mapped = mapper.mapCol({
  postcode: 'BB10 3PU',
  longitude: -2.189701,
  latitude: 53.788666,
  addresses: [{
    building_name: '',
    building_number: '6',
    thoroughfare: 'Showfield',
    locality: 'Worsthorne',      
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: '',
    building_number: '7',
    thoroughfare: 'Inchfield',
    locality: 'Worsthorne',      
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: '',
    building_number: '25',
    thoroughfare: 'Harperley',
    locality: 'Astley Village',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: 'Treehouse',
    building_number: '8',
    thoroughfare: 'Showfield',
    locality: 'Worsthorne',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: 'Oaks',
    building_number: '8',
    thoroughfare: 'Showfield',
    locality: 'Worsthorne',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: '',
    building_number: '8',
    thoroughfare: 'Showfield',
    locality: 'Worsthorne',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: '',
    building_number: '8',
    thoroughfare: 'Showfield',
    locality: 'Rosewood',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }, {
    building_name: '',
    building_number: '2',
    thoroughfare: 'Harperley',
    locality: 'Astley Village',
    town_or_city: 'Burnley',
    county: 'Lancs'
  }]
});
commit('mappedResults', sortAddresses(mapped));