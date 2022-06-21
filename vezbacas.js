const moduleFaker = require(`@faker-js/faker`);
let people = [];

for (i=0; i<=10; i++){
    let first_name = moduleFaker.faker.name.firstName();
    let address = moduleFaker.faker.address.city();
    let phone = moduleFaker.faker.phone.phoneNumber();
    let company = moduleFaker.faker.company.companyName();

    people.push({
        first_name: first_name,
        address: address,
        phone: phone,
        company: company
    });
    
}
console.log(people);
//domasna funkcii i moduli


//prv module
var events = require(`events`);
var eventEmitter = new events.eventEmmiter();

eventEmitter.on(`connection`, function(){
    console.log(`You are connected.`);
});
eventEmitter.emit(`connection`);

//vtor module
const os = require(`os`);
console.log(os.type());
console.log(os.hostname());
console.log(os.platform());

//tret module
var fs = require(`fs`);
fs.writeFileSync(`moduli.txt`, `Denes ucime moduli`);
fs.unlink(`moduli.txt`);
console.log(fs.readFileSync(`moduli.txt`).toString());


//cetvrt module
const path = require(`path`);
console.log(path.dirname(__dirname));




