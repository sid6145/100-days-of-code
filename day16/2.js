const users = [
	{
		name:'Brook', 
		scores:75,
		skills:['HTM', 'CSS', 'JS'],
		age:16
	},
	{
		name:'Alex', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	}, 
	{
		name:'David', 
		scores:75,
		skills:['HTM', 'CSS'],
		age:22
	}, 
	{
		name:'John', 
		scores:85,
		skills:['HTM'],
		age:25
	},
	{
		name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
	},
	{
		name:'Martha', 
		scores:80,
		skills:['HTM', 'CSS', 'JS'],
		age:18
	},
	{
		name:'Thomas',
		scores:90,
		skills:['HTM', 'CSS', 'JS'],
		age:20
	}
	];


// Write a function which filter users who has  scoresGreaterThan85 

function scoresGreaterThan85(users){

    for(let i = 0; i<users.length; i++){
        if(users[i].scores > 85){
            return users[i]
        }
    }
}

// console.log(scoresGreaterThan85(users))

// Write a function which addUser  to the user array only if the user does not exist.   

function addUser(userArray, newUser){
    for(let i = 0; i < userArray.length; i++){
        if(newUser.name == userArray[i].name){
            return `user ${newUser.name} already exists` 
        }
        if(newUser.name != userArray[i].name){
            userArray.push(newUser)
            return userArray[i]
        }
    
    }
}

let newUser1 = {
        name:'Sara',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
}

let newUser2 = {
        name:'Samuel Jadasd',
		scores:95,
		skills:['HTM', 'CSS', 'JS'],
		age: 26
}

// console.log(addUser(users, newUser1))
// console.log(addUser(users, newUser2))



// Write a function which addUserSkill which can add skill to a user only if the user exist.  
function addUserSkill(userArray, userName ,skill){

	for(let i = 0; i < userArray.length; i++){
		console.log(userArray[i].name == userName) 
		if(userArray[i].name == userName){
			console.log(userArray[i].name == userName)
			userArray[i].skills.push(skill)
			return userArray[i]
		}		
	}
	return 'user does not exist'
}

// console.log(addUserSkill(users, 'Martha', 'Bootstrap'))


// Write a function which editUser if the user exist in the users array.

function editUser(userArray, userName, newUser){
	for(let i = 0; i < userArray.length; i++){
		if(userArray[i].name == userName){
			userArray[i].name = newUser.name
			userArray[i].scores = newUser.scores
			userArray[i].skills = newUser.skills
			userArray[i].age = newUser.age
			return userArray[i]
		}
	}
	return 'user does not exist'
}

let user1 = {
	name: 'Sam',
	scores: 90,
	skills: ['HTLM', 'CSS', 'Jquery', 'React'],
	age: '99'
}

console.log(editUser(users, 'Martha', user1))