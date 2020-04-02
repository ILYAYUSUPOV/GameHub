const btn = document.querySelector('.button-contact')
const input = document.querySelectorAll('.email-input')
const textArea = document.querySelector('.form-text-area')
const validEmail = document.querySelector('.email-valid')

const addClass = async () => {
		let isValid = true
		const fieldes = {
			name: "",
			email: "",
			number: "",
			message: textArea.value,
		}

		input.forEach(item => {
			const field = item.getAttribute('data-input')
			fieldes[field] = item.value
			if (item.value.length < 3) { 
				isValid = false
			 item.classList.add('input-invalid')
      }
		})

		if (!fieldes.email.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
			isValid = false 
			validEmail.classList.add('input-invalid')
		}
		if (isValid === true) {
			console.log(fieldes)
		}
  }

const removeClass = (event) => {
  event.target.classList.remove('input-invalid')
}

btn.addEventListener('click', addClass)

input.forEach(item => {
  item.addEventListener('focus', removeClass)
})

