/**
 * Add your code to load widget
 *
 * IDF Code challenge 2018
 * Stub CSS for UX Daily widget
 * @copyright Copyright (c) 2018 Interaction Design Foundation
 *
 */
 
const targetEl = document.querySelector('aside#widget-idf-ux');
const url = 'https://test.information-architecture.org/widgets/ux-daily-v2?ep=mads_soegaard';
 
//const url = 'https://randomuser.me/api/?results=10';
 
 
fetch(url)
  // Transform data into JSON
  .then((resp) => resp.json())

  // Handle data
  .then(function(data){
    // Present data HTML
    targetEl.innerHTML = data.body;
  })

  // Handle error
  .catch(function(error){
    console.log('Something went wrong, could not fetch from ' + url);
    console.log(error);
  });

 