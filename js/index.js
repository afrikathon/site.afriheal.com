

const SignUp = async (e) => {
    // e.preventDefault();
    const first_name = document.getElementById('firstName').value;
    const last_name = document.getElementById('lastName').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value
    const response = await fetch('https://afriheal.herokuapp.com/auth/local/register', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            first_name, last_name, email, password,
        }),
    })
    const result = await response.json();

    if (result) {
        console.log(result)
        localStorage.setItem('token', result.data.token);
        alert('sign up successful');
        window.location.href = '../index.html';
    }
}


const SignIn = async () => {
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const response = await fetch('https://afriheal.herokuapp.com/auth/local', {
        method: 'POST',
        headers: {
            Accept: 'application/json, text/plain, */*',
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            email, password,
        }),
    })
    const result = await response.json();

    if (result) {
        console.log(result)
        localStorage.setItem('token', result.data.token);
        alert('sign up successful');
        window.location.href = '../index.html';
    }
}
