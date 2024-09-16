const scriptURL = 'https://script.google.com/macros/s/AKfycbw104m5nr3qepJUMLTeh1_K74HDpqvQAvZ-kBMn8FHzbg1p1kBL0IWiy4kPR9Fn0orG/exec'


const form = document.forms['contact-form']


form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})