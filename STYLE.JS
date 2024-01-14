// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Create the animation for the .fleft-container
gsap.to("#fleft", {
   // Scroll the left elements to the right
  scrollTrigger: {
    trigger: "#fright", // Trigger element
    pin: "#fright", // Pin the right side element
    start: "top top",
    end: () => "+=" + document.querySelector("#fright").offsetHeight, // Pin until the end of the right side element
    scrub: 1, // Enable scrubbing for smoother animation
  },
  ease: "power1.inOut",
});
// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Get all image elements inside #fright
const images = document.querySelectorAll("#fright img");

// Initialize GSAP
gsap.registerPlugin(ScrollTrigger);

// Get all image elements inside #fright
const images = document.querySelectorAll("#fright img");

images.forEach((image, index) => {
  gsap.fromTo(
    image,
    { y: "100%" }, // Start from below the container
    {
      y: "0%", // Move to their original position
      scrollTrigger: {
        trigger: "#fright", // Trigger element
        start: "top bottom", // Start the animation when the top of the container is at the bottom of the viewport
        end: "bottom top", // End the animation when the bottom of the container is at the top of the viewport
        scrub: 1, // Enable scrubbing for smoother animation
      },
      ease: "power1.inOut",
    }
  );
});

