const allIMages= [
	{ id: 0, pathImage: './/assets/images/p1.jpg', category: 'all multiplayer' }, 
	{ id: 1, pathImage: './/assets/images/p2.jpg', category: 'all action rpg apocalypse' },
	{ id: 2, pathImage: './/assets/images/p3.jpg', category: 'all action' },
	{ id: 3, pathImage: './/assets/images/p4.jpg', category: 'all' },
	{ id: 4, pathImage: './/assets/images/p5.jpg', category: 'all rpg' },
	{ id: 5, pathImage: './/assets/images/p6.jpg', category: 'all multiplayer rpg' },
	{ id: 6, pathImage: './/assets/images/p7.jpg', category: 'all multiplayer shooter action' },
	{ id: 7, pathImage: './/assets/images/p8.jpg', category: 'all apocalypse action' },
	{ id: 8, pathImage: './/assets/images/p9.jpg', category: 'all rpg' },
	{ id: 9, pathImage: './/assets/images/p10.jpg', category: 'all shooter rpg' },
	{ id: 10, pathImage: './/assets/images/p11.jpg', category: 'all shooter apocalypse' },
	{ id: 11, pathImage: './/assets/images/p12.jpg', category: 'all multiplayer shooter' },
	{ id: 12, pathImage: './/assets/images/p13.jpg', category: 'all shooter' },
	{ id: 13, pathImage: './/assets/images/p14.jpg', category: 'all multiplayer apocalypse' },
	{ id: 14, pathImage: './/assets/images/p15.jpg', category: 'all multiplayer shooter' },
	{ id: 15, pathImage: './/assets/images/p16.jpg', category: 'all rpg action' },
	{ id: 16, pathImage: './/assets/images/p17.jpg', category: 'all rpg action' },
	{ id: 17, pathImage: './/assets/images/p18.jpg', category: 'all action multiplayer' },
	{ id: 18, pathImage: './/assets/images/p19.jpg', category: 'all rpg' },
	{ id: 19, pathImage: './/assets/images/p20.jpg', category: 'all rpg action' },
	{ id: 20, pathImage: './/assets/images/p21.jpg', category: 'all action' },
	{ id: 21, pathImage: './/assets/images/p22.jpg', category: 'all rpg action apocalypse' },
	{ id: 22, pathImage: './/assets/images/p23.jpg', category: 'all rpg action ' },
	{ id: 23, pathImage: './/assets/images/p24.jpg', category: 'all rpg action shooter apocalypse' },
	{ id: 24, pathImage: './/assets/images/p25.jpg', category: 'all multiplayer ' },
	{ id: 25, pathImage: './/assets/images/p26.jpg', category: 'all shooter' },
	{ id: 26, pathImage: './/assets/images/p27.jpg', category: 'all shooter multiplayer' },
]


const categoryBtn = document.querySelectorAll('.category-btn')
let image = document.querySelectorAll('.image-card')
const imageGames = document.querySelector('.image-games')
let clickedCategory = 'all'

function init() {
	let stringTemplate = ''
	allIMages.forEach(item => {
		stringTemplate += `<img class="image-card" src="${item.pathImage}" data-index ="${item.id}" data-category="${item.category}">`
	})

	imageGames.innerHTML = stringTemplate
}
function afterEnter(el) {
	el.style.left = el.offsetLeft + 'px'
	el.style.top = el.offsetTop + 'px'
}
function hundlerCategoryClick(event) {
	if (clickedCategory === event.target.getAttribute('data-category')) return
	clickedCategory = event.target.getAttribute('data-category')
	Array.from(document.querySelectorAll(".image-card")).forEach((item) => {
		afterEnter(item)
		if (item.getAttribute('data-category').indexOf(clickedCategory) === -1) {
			item.classList.add('hide-element')
			return setTimeout(() => (item.classList.add('remove-element')), 500)
		}
		item.classList.remove('hide-element')
		item.classList.remove('remove-element')
	})
}

for (const category of categoryBtn) {
  category.addEventListener('click',hundlerCategoryClick)
}


document.addEventListener('DOMContentLoaded', init)