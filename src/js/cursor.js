import $ from "jquery";
import gsap from "gsap";
import { getAngle, getScale, getSiblings } from "./utils";

export default class Cursor {
  constructor(options) {
    this.options = $.extend(
      true,
      {
        container: "body",
        speed: 0.7,
        ease: "expo.out",
        visibleTimeout: 300,
      },
      options
    );
    this.body = $(this.options.container);
    this.el = $(".cursor");
    this.text = $('<div class="cb-cursor-text"></div>');
    this.Cursor = document.querySelector(".cursor");
    this.Revert = document.querySelector(".cursor-revert");

    this.Item = document.querySelectorAll(".cursor-media-link");
    this.Hero = document.querySelector(".hero-inner");
    this.bounds = this.Cursor.getBoundingClientRect();
    this.cursorConfigs = {
      x: { previous: 0, current: 0, amt: 0.2 },
      y: { previous: 0, current: 0, amt: 0.2 },
    };
    this.onMouseMoveEv = () => {
      // Set cursor opacity to 1 when hovered on screen
      gsap.to(this.Cursor, {
        duration: 1,
        ease: "Power3.easeOut",
        opacity: 1,
      });
      // Execute scale function
      this.onScaleMouse();

      // The window.requestAnimationFrame() method tells the browser that you wish to perform an animation and requests that the browser calls a specified function to update an animation before the next repaint. The method takes a callback as an argument to be invoked before the repaint.
      // requestAnimationFrame(() => this.render());
      // Clean up function
      window.removeEventListener("mousemove", this.onMouseMoveEv);
    };
    // Scale cursor animation
    window.addEventListener("mousemove", this.onMouseMoveEv);
    this.init();
  }

  jelly() {
    const shape = this.Cursor;

    // Save pos and velocity
    const pos = { x: 0, y: 0 };
    const vel = { x: 0, y: 0 };
    let loopStarted = false;

    // Register handler on whole block
    document.addEventListener("mousemove", (e) => {
      // Get cursor position relative to box with text
      const y = e.clientY;
      const x = e.clientX;

      // Animate object and calc velocity for every tick
      gsap.to(pos, {
        x: this.stick ? this.stick.x - (this.stick.x - e.clientX) * 0.15 : x,
        y: this.stick ? this.stick.y - (this.stick.y - e.clientY) * 0.15 : y,
        overwrite: true,
        ease: "expo.out",
        duration: 0.55,
        onUpdate: () => {
          vel.x = x - pos.x;
          vel.y = y - pos.y;
        },
      });

      // Start loop
      if (!loopStarted && !this.stick) {
        loop();
        loopStarted = true;
      }
    });

    // Start render loop
    const loop = () => {
      if ((0 === vel.y || 0 === vel.x) && !this.Cursor) return !1;
      // Calculate angle and scale based on velocity
      const rotation = !this.stick ? getAngle(vel.x, vel.y) : 0;
      const scale = getScale(vel.x, vel.y);

      // Set transform data to shape
      gsap.set(shape, {
        x: pos.x,
        y: pos.y,
        rotation: rotation,
        scaleX: 1 + scale,
        scaleY: 1 - scale,
      });
      gsap.set(this.Revert, {
        rotation: -rotation + "deg",
      });

      requestAnimationFrame(loop.bind(this));
    };
  }

  setSkewing(param) {
    const skewing = param > 0 ? param : 0;
    gsap.to(this.el, {
      skewing,
    });
  }

  removeSkewing() {
    gsap.to(this.el, {
      skewing: 0,
    });
  }

  init() {
    this.el.append(this.text);
    this.body.append(this.el);
    this.bind();
    this.move(-window.innerWidth, -window.innerHeight, 0);
    this.jelly();
  }

  bind() {
    const self = this;

    this.body
      .on("mouseleave", () => {
        self.hide();
      })
      .on("mouseenter", () => {
        self.show();
      })
      .on("mousemove", (e) => {
        this.pos = {
          x: this.stick
            ? this.stick.x - (this.stick.x - e.clientX) * 0.15
            : e.clientX,
          y: this.stick
            ? this.stick.y - (this.stick.y - e.clientY) * 0.15
            : e.clientY,
        };
        this.update();
      })
      .on("mousedown", () => {
        self.setState("-active");
      })
      .on("mouseup", () => {
        self.removeState("-active");
      })
      .on("mouseenter", "a,input,textarea,button", () => {
        self.setState("-pointer");
      })
      .on("mouseleave", "a,input,textarea,button", () => {
        self.removeState("-pointer");
      })
      .on("mouseenter", "iframe", () => {
        self.hide();
      })
      .on("mouseleave", "iframe", () => {
        self.show();
      })
      .on("mouseenter", "[data-cursor]", function () {
        self.setState(this.dataset.cursor);
      })
      .on("mouseleave", "[data-cursor]", function () {
        self.removeState(this.dataset.cursor);
      })
      .on("mouseenter", "[data-cursor-text]", function () {
        self.setText(this.dataset.cursorText);
      })
      .on("mouseleave", "[data-cursor-text]", function () {
        self.removeText();
      })
      .on("mouseenter", "[data-cursor-stick]", function () {
        self.setStick(this.dataset.cursorStick);
      })
      .on("mouseleave", "[data-cursor-stick]", function () {
        self.removeStick();
      });
  }

  onScaleMouse() {
    // Loop through all items
    this.Item.forEach((link) => {
      // If I am hovering on the item for on page load I want to scale the cursor media
      if (link.matches(":hover")) {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0].children, 0.7);
      }
      //On mouse enter scale the media-cursor to .8
      link.addEventListener("mouseenter", () => {
        this.setVideo(link);
        this.ScaleCursor(this.Cursor.children[0].children, 0.7);
      });
      //On mouse enter scale the media-cursor to 0
      link.addEventListener("mouseleave", () => {
        this.ScaleCursor(this.Cursor.children[0].children, 0);
      });
      //Hover on a tag to expand to 1.2
      link.children[1].addEventListener("mouseenter", () => {
        this.Cursor.classList.add("media-blend");
        this.ScaleCursor(this.Cursor.children[0].children, 1.1);
      });
      // Bring scale back down .8
      link.children[1].addEventListener("mouseleave", () => {
        this.Cursor.classList.remove("media-blend");
        this.ScaleCursor(this.Cursor.children[0].children, 0.8);
      });
    });
  }

  setVideo(el) {
    // Grab the data-video-src and make sure it matches the video that should be displayed
    let src = el.getAttribute("data-video-src");
    let video = document.querySelector(`#${src}`);
    let siblings = getSiblings(video);

    if (video.id === src) {
      gsap.set(video, { zIndex: 4, opacity: 1 });
      siblings.forEach((i) => {
        gsap.set(i, { zIndex: 1, opacity: 0 });
      });
      this.setSkewing(1);
    }
  }

  ScaleCursor(el, amount) {
    gsap.to(el, {
      duration: 0.55,
      scale: amount,
      ease: "Power4.easeOut",
    });
  }

  setState(state) {
    this.el.addClass(state);
    state === "-opaque" && this.setSkewing(2);
  }

  removeState(state) {
    this.el.removeClass(state);
    state === "-opaque" && this.removeSkewing();
  }

  toggleState(state) {
    this.el.toggleClass(state);
  }

  setText(text) {
    this.text.html(text);
    this.el.addClass("-text");
    this.setSkewing(2);
  }

  removeText() {
    this.el.removeClass("-text");
  }

  setStick(el) {
    const target = $(el);
    const bound = target.get(0).getBoundingClientRect();
    this.stick = {
      y: bound.top + target.height() / 2,
      x: bound.left + target.width() / 2,
    };
    this.move(this.stick.x, this.stick.y, 5);
  }

  removeStick() {
    this.stick = false;
  }

  update() {
    this.move();
    this.show();
  }

  move(x, y, duration) {
    gsap.to(this.el, {
      x: x || this.pos.x,
      y: y || this.pos.y,
      force3D: true,
      overwrite: true,
      ease: this.options.ease,
      duration: this.visible ? duration || this.options.speed : 0,
    });
  }

  show() {
    if (this.visible) return;
    clearInterval(this.visibleInt);
    this.el.addClass("-visible");
    this.visibleInt = setTimeout(() => (this.visible = true));
  }

  hide() {
    clearInterval(this.visibleInt);
    this.el.removeClass("-visible");
    this.visibleInt = setTimeout(
      () => (this.visible = false),
      this.options.visibleTimeout
    );
  }
}
