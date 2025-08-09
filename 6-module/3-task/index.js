import createElement from '../../assets/lib/create-element.js';

export default class Carousel {
  constructor(slides) {
    this.slides = slides;
    this.currentSlide = 0;
    this.elem = this.createCarousel();
    this.initCarousel();
    this.addEventListeners();
  }

  createCarousel() {
    const carousel = createElement(`
      <div class="carousel">
        <div class="carousel__arrow carousel__arrow_right">
          <img src="/assets/images/icons/angle-icon.svg" alt="icon">
        </div>
        <div class="carousel__arrow carousel__arrow_left">
          <img src="/assets/images/icons/angle-left-icon.svg" alt="icon">
        </div>
        <div class="carousel__inner"></div>
      </div>
    `);

    const carouselInner = carousel.querySelector('.carousel__inner');

    this.slides.forEach(slide => {
      const slideElement = createElement(`
        <div class="carousel__slide" data-id="${slide.id}">
          <img src="/assets/images/carousel/${slide.image}" class="carousel__img" alt="slide">
          <div class="carousel__caption">
            <span class="carousel__price">€${slide.price.toFixed(2)}</span>
            <div class="carousel__title">${slide.name}</div>
            <button type="button" class="carousel__button">
              <img src="/assets/images/icons/plus-icon.svg" alt="icon">
            </button>
          </div>
        </div>
      `);
      carouselInner.appendChild(slideElement);
    });

    return carousel;
  }

  initCarousel() {
    const carouselInner = this.elem.querySelector('.carousel__inner');
    const arrowRight = this.elem.querySelector('.carousel__arrow_right');
    const arrowLeft = this.elem.querySelector('.carousel__arrow_left');
    const slidesCount = this.slides.length;

    const updateUI = () => {
      const slideWidth = carouselInner.offsetWidth;
      carouselInner.style.transform = `translateX(-${this.currentSlide * slideWidth}px)`;

      arrowLeft.style.display = this.currentSlide === 0 ? 'none' : '';
      arrowRight.style.display = this.currentSlide === slidesCount - 1 ? 'none' : '';
    };

    updateUI();

    arrowRight.addEventListener('click', () => {
      if (this.currentSlide < slidesCount - 1) {
        this.currentSlide++;
        updateUI();
      }
    });

    arrowLeft.addEventListener('click', () => {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        updateUI();
      }
    });

    window.addEventListener('resize', () => {
      updateUI();
    });
  }

  addEventListeners() {
    this.elem.addEventListener('click', (event) => {
      const button = event.target.closest('.carousel__button');
      if (button) {
        const slide = button.closest('.carousel__slide');
        const productId = slide.dataset.id;

        const customEvent = new CustomEvent('product-add', {
          detail: productId,
          bubbles: true
        });
        this.elem.dispatchEvent(customEvent);
      }
    });
  }
}
