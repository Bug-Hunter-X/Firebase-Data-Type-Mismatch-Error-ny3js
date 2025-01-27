To avoid this, always validate and cast the data to the correct type before using it. You can use TypeScript for static type checking or add runtime type checks in your JavaScript code.  Example:

```javascript
//Original Code causing the error
firebase.database().ref('users/' + userId).once('value', (snapshot) => {
  const age = snapshot.val().age; // potential error if age is a string
  console.log(age * 2); // error if age is a string
});

//Corrected Code with type checking
firebase.database().ref('users/' + userId).once('value', (snapshot) => {
  const userData = snapshot.val();
  const age = parseInt(userData.age, 10); 
  if (!isNaN(age)) {
     console.log(age * 2);
  } else {
     console.error('Age is not a valid number');
  }
});
```