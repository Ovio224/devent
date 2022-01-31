import ScrollTriggerPlugin from "./smooth-scrollbar/ScrollTriggerPlugin";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import Swiper from "swiper";

export default class MarqueeEffect {
  constructor() {
    this.init();
  }

  init() {
    const marquee = document.querySelectorAll(".marquee");

    marquee.forEach((e) => {
      // Create swiper carousel
      const carousel = e.querySelectorAll(".marquee-carousel");

      carousel.forEach((e) => {
        const items = e.querySelector(".marquee-items");
        const item = e.querySelectorAll(".marquee-item");

        e.classList.add("swiper-container");
        items.classList.add("swiper-wrapper");
        item.forEach((e) => e.classList.add("swiper-slide"));
        const slider = new Swiper(e, {
          slidesPerView: "auto",
          loop: true,
          freeMode: true,
          freeModeMomentumBounce: false,
          freeModeMomentumVelocityRatio: 1,
        });
      });

      // Scroll triggered movement
      const tl = new gsap.timeline();

      tl.set(carousel, { willChange: "transform" });

      tl.fromTo(
        carousel[0],
        {
          x: -300,
        },
        {
          x: 0,
          ease: "none",
        },
        0
      );

      tl.fromTo(
        carousel[1],
        {
          x: 300,
        },
        {
          x: 0,
          ease: "none",
        },
        0
      );

      tl.set(carousel, { willChange: "auto" });

      ScrollTrigger.create({
        trigger: e,
        animation: tl,
        start: "top bottom",
        end: "bottom top",
        scrub: 0.3,
        refreshPriority: -14,
      });
    });
  }
}
