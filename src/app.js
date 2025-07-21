import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let pronouns = ['the', 'our']
let adjs = ['great', 'big' ]
let nouns = ['jogger' , 'racoon']
const domains = [];


function DomainGenerator(pronouns,adjs,nouns) {
  //write your code here

for (let pronoun of pronouns){
  for (let adj of adjs){
    for (let noun of nouns){
      const domain = `${pronoun}${adj}${noun}.com`
      domains.push(domain);
    }
  }
}

return domains;


}

const domainlist = DomainGenerator(pronouns,adjs,nouns);
domainlist.forEach(domain => console.log(domain));

