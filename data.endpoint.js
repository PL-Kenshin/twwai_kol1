const path = require("path")

const users = [
    {
        "name":"user1",
        "email":"user1@post.test",
        "password":"zaq1@WSX"
    },
    {
        "name":"user2",
        "email":"user2@post.test",
        "password":"zaq1@WSX"
    },
    {
        "name":"user3",
        "email":"user3@post.test",
        "password":"zaq1@WSX"
    },
    {
        "name":"user4",
        "email":"user4@post.test",
        "password":"zaq1@WSX"
    },
    {
        "name":"user5",
        "email":"user5@post.test",
        "password":"zaq1@WSX"
    },
]

let chart1 = `{
    labels: [1500, 1600, 1700, 1750, 1800, 1850, 1900, 1950, 1999, 2050],
    datasets: [{
        data: [86, 114, 106, 106, 107, 111, 133, 221, 783, 2478],
        label: "Africa",
        borderColor: "#3e95cd",
        fill: false
    }, {
        data: [282, 350, 411, 502, 635, 809, 947, 1402, 3700, 5267],
        label: "Asia",
        borderColor: "#8e5ea2",
        fill: false
    }, {
        data: [168, 170, 178, 190, 203, 276, 408, 547, 675, 734],
        label: "Europe",
        borderColor: "#3cba9f",
        fill: false
    }, {
        data: [40, 20, 10, 16, 24, 38, 74, 167, 508, 784],
        label: "Latin America",
        borderColor: "#e8c3b9",
        fill: false
    }, {
        data: [6, 3, 2, 2, 7, 26, 82, 172, 312, 433],
        label: "North America",
        borderColor: "#c45850",
        fill: false
    }
    ]
 }`


const dataEndpoint = (router) => {
    router.put('/api/user', async (request, response) => {
        response.status(200).send();
    });
 
 
    router.get('/api/users', async (request, response) => {
 
        response.status(200).send({users: users});
    });

    router.get('/api/user/:id', async (request, response) => {
        console.log(request.params.id);
        response.status(200).send({users: users[request.params.id]});
    });
    
    router.get('/', async (request, response) => {
        console.log(request.params.id);
        response.status(200).sendFile(path.join( __dirname + "/index.html"))
    });
    
    router.get('/continents', async(request,response) =>{
        response.render(__dirname + '/continents.html',{chart1: chart1})
    })

    router.get('*', async (request, response) => {
        console.log(request.params.id);
        response.status(404).send(`<div style="display:flex; align-items:center; flex-direction: column" ><h1>404</h1><h3>Page not found</h3></div>`);
    });


    
 };

 
 export default dataEndpoint;