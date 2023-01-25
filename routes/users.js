import express from 'express';
import { v4 as uuidv4 } from 'uuid';



const router = express.Router();




let users = [];

//all routes here are starting with /users
router.get('/', (req, res) => {

    res.send(users);
});

router.post('/', (req, res) => {

    const user = req.body;

     // ⇨ '9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d'

    users.push({...user, id: uuidv4()});
    res.send(`User with the username ${user.firstName} added to the database!`);
});



router.get('/:id', (req, res) => {

    const {id} = req.params;

    const foundUser = users.find((user)=> user.id === id)
    res.send(foundUser);
})


router.delete('/:id', (req, res) => {
    
    const {id} = req.params;
    users = users.filter((user)=> user.id ===! id);
    res.send(`user with the id ${id} deleted from the database!`); 

});

router.patch('/:id', (req, res) => {
    const {id} = req.params;

    const {firstName, lastName, age} = req.body;

    const user = users.find((user)=> user.id === id);

    if(firstName) user.firstName = firstName;
    if(firstName) user.lastName = lastName;
    if(firstName) user.age = age;


    res.send(`user with the id ${id} updated from the database!`);




    
    


})






export default router;