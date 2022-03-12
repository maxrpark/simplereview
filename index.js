function simplereview() {
  const mainContainer = document.querySelectorAll('.simpleReview');

  mainContainer.forEach((singleContainer) => {
    let id = singleContainer.id;
    const reviewContainer = document.querySelector(`#${id}`);

    // star alingment
    reviewContainer.style.display = 'flex';
    reviewContainer.style.justifyContent = 'center';
    reviewContainer.style.alignItems = 'center';

    // star rating
    let rating = 0;

    // get rating localStorage
    if (
      reviewContainer.hasAttribute('ls') &&
      reviewContainer.attributes.ls.value === 'true'
    ) {
      rating = localStorage.getItem(`${id}`, rating);
    }
    reviewContainer.setAttribute('totalRating', rating);

    // base color
    let selectedColor = reviewContainer.hasAttribute('selectedColor');
    if (!selectedColor) {
      selectedColor = '#F5D547';
    } else {
      selectedColor = reviewContainer.attributes.selectedColor.value;
    }
    // selected color
    let baseSelectedColor = reviewContainer.hasAttribute('baseSelectedColor');
    if (!baseSelectedColor) {
      baseSelectedColor = '#C0C5C1';
    } else {
      baseSelectedColor = reviewContainer.attributes.baseSelectedColor.value;
    }

    let starNumber = 5;
    for (let i = 0; i < starNumber; i++) {
      const starContainer = document.createElement('span');
      starContainer.classList.add(`star${id}`);
      reviewContainer.appendChild(starContainer);
    }

    // select all starts in the container
    const stars = document.querySelectorAll(`.star${id}`);
    const Unselected = `<svg height="25" width="23" class="star rating" >
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" fill="${baseSelectedColor}"/>
  </svg>`;
    const selected = `<svg height="25" width="23" class="star rating" >
    <polygon points="9.9, 1.1, 3.3, 21.78, 19.8, 8.58, 0, 8.58, 16.5, 21.78" style="fill-rule:nonzero;" fill="${selectedColor}"/>
  </svg>`;

    // Use stars to review "click event"
    if (!reviewContainer.attributes.resultValue) {
      stars.forEach((star, index) => {
        star.setAttribute('rating', index + 1);
        star.innerHTML = Unselected;

        if (index <= rating - 1) {
          star.innerHTML = selected;
        }

        star.addEventListener('click', () => {
          star.innerHTML = Unselected;
          rating = parseInt(star.attributes.rating.value);
          reviewContainer.setAttribute('totalRating', rating);

          if (
            reviewContainer.hasAttribute('ls') &&
            reviewContainer.attributes.ls.value === 'true'
          ) {
            localStorage.setItem(`${id}`, rating);
          }

          stars.forEach((star, startIndex) => {
            if (startIndex <= rating - 1 && Unselected) {
              star.innerHTML = selected;
            } else {
              star.innerHTML = Unselected;
            }
          });
        });
      });
    } else {
      // use stars as result
      let resultValue = reviewContainer.attributes.resultValue.value;
      stars.forEach((star, startIndex) => {
        if (startIndex <= resultValue - 1 && Unselected) {
          star.innerHTML = selected;
        } else {
          star.innerHTML = Unselected;
        }
      });
    }
  });
}

export default simplereview = simplereview;
