export const filterNameProduct = (input, nameArray) => {

    const cards = document.getElementsByClassName('card')

    input.addEventListener('keyup', async (e) => {

        for (let index = 0; index < cards.length; index++) {
            cards[index].classList.remove('hide')
        }

        if (nameArray.includes(input.value)) {

            for (let index = 0; index < cards.length; index++) {
                if (cards[index].children[2].textContent !== input.value) {
                    cards[index].classList.add('hide')
                }
            }
        }
    })
}

export const filterCategoryProduct = (select, iconSecondary) => {

    const cards = document.getElementsByClassName('card')

    iconSecondary.addEventListener('click', (e) => {

        if (select.value !== '0') {
            for (let index = 0; index < cards.length; index++) {
                cards[index].classList.remove('hide')
            }

            for (let index = 0; index < cards.length; index++) {
                if (cards[index].children[0].children[0].textContent !== select.value.toUpperCase()) {
                    cards[index].classList.add('hide')
                }
            }
        } else {
            for (let index = 0; index < cards.length; index++) {
                cards[index].classList.remove('hide')
            }
        }

    })
}