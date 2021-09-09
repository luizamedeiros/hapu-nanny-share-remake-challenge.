export function onFormSubmit(userData){
  console.log(userData)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
  };
  fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', requestOptions)
      .then(response => {
        let status = response['status']
        if (status >= 200 && status<300){
          window.alert("Yay! You're one step closer to sharing!")
        }
        else if (status >=400 && status<500){
          window.alert("It looks like the information you provided isn't in a valid format. Tip: check to make sure your email ending is right.")
        }
        else{
          window.alert("Oh no! It seems like we're having trouble processing your request at this time. Pease try again later. If the situation persists, please don't hesitate to get in touch with our support!")
        }
      });
  }