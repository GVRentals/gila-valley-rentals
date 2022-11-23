import axios from "axios"

window.addEventListener("load", () => {
    setup()
})

function setup() {
    const form = document.getElementById("form") as HTMLFormElement | null
    if (form) {
        form.addEventListener('submit', (event) => {
            event.preventDefault()
            submitRentalForm(form)
            form.reset()
        })
    }
}

async function submitRentalForm(text: any) {
    const stuff = {
        "firstName": "Jared",
        "lastName": "Montierth",
        "email": "jaredmontierth1@gmail.com",
        "templateId": "d-2258e2bd67f84eb794cd2bf76c01ac49",
    }
    const err = await axios.post('http://localhost:3030/api/email', stuff)
		.then(() => null, err => err)
	console.log(err)
    
}


// const onSubmit = () => {
//     const msg = {
//     fullName: values.firstName + ' ' + values.lastName,
//     message: 'First Name: ' + values.firstName + '\nLast Name: ' +
//      values.lastName + '\nEmail: ' + values.email,
//     }
//     Axios.post('http://localhost:3030/api/email', values);
//     alert("Your application has been submitted. You will receive an email with a copy of your responses.")
// }