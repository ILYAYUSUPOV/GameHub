const ftrBtn = document.querySelector('.footer-btn')
const ftrInput = document.querySelector('.email-footer')

const subscribe = async () => {
  try {
    if (ftrInput.value.length < 4) {
      return ftrInput.classList.add('input-invalid-footer')
    }
    if (!ftrInput.value.match(/^[0-9a-z-\.]+\@[0-9a-z-]{2,}\.[a-z]{2,}$/i)){
      return validEmail.classList.add('input-invalid')
		}
		{
		console.log(ftrInput.value)
		}
	} 
	catch(error) {
	console.log(error)
	return validEmail.classList.add('input-invalid-footer')
	}
}

  const removeSubscribeClass = (event) => {
    event.target.classList.remove('input-invalid-footer')
  }
  
  ftrBtn.addEventListener('click', subscribe)
  ftrInput.addEventListener('focus' , removeSubscribeClass)
