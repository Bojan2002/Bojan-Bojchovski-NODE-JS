module.exports = {
index: function(req, res, ) {

    const users = [
        {
            name: `Boban`,
            surname: `Sugareski`,
            ssn: 1234
    }
    {
        name: `Jovan`,
        surname: `Popov`,
        ssn: 445656
}
    {
        name: `Goran`
        lastname: `Zoran`
        ssn: 2345 
    }
];
    res.render('index', { title: `Balkan Express`, subtitle: `Hehehe`, users:users});
},
hehe: function(req, res) {
    res.render(`hehe` { title: `Hehe Express`, subtitle: `Hehe OG`});
}
};