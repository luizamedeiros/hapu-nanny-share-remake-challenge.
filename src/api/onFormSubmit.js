export function onFormSubmit(userData){
    const userName = userData.name;
    const userEmail = userData.email;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: userName, email: userEmail })
  };
  fetch('https://reqres.in/api/posts', requestOptions)
      .then(response => {
        let status = response['status'].toString()
        if (status.startsWith('2')){
          window.alert("Yay! You're one step closer to sharing!")
        }
        else{
          window.alert("Oh no! It seems like we're having trouble processing your request at this time. PLease try again later. If the situation persists, please don't hesitate to get in touch with our support!")
        }
      });
  }