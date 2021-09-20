import Swal from 'sweetalert2';

export function onFormSubmit(userData){
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
  };
  fetch('https://api.jungledevs.com/api/v1/challenge-newsletter/', requestOptions)
      .then(response => {
        let status = response['status']
        if (status >= 200 && status<300){
          Swal.fire({
            icon: 'success',
            text: "Hooray! You're one step closer to sharing."
          })
        }
        else{
          Swal.fire({
            icon: 'error',
            text: "Oh no! It seems like we're having trouble processing your request at this time. Please try again later. If the situation persists, please don't hesitate to get in touch with our support!"})
        }
      });
  }