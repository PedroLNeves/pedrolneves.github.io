// Populate a given section with selected portfolio items
function populateSection(containerSelector, itemIds) {
  const sectionGrid = document.querySelector(`${containerSelector} .row`);
  if (!sectionGrid) return;
  sectionGrid.innerHTML = ""; // Clear first

  itemIds.forEach((id, idx) => {
    const item = portfolioItems.find((p) => p.id === id);
    if (!item) return;

    const tagsHTML = item.tags
      ?.map((tag) => {
        const safeClass = tag.toLowerCase().replace(/[^a-z0-9]/g, "-");
        return `<span class="tag-square ${safeClass}">${tag}</span>`;
      })
      .join("");

    const hiddenClass = idx >= 3 ? " extra-item" : "";

    const gridItem = `
      <div class="col-md-6 col-lg-4 mb-1${hiddenClass}">
        <div class="portfolio-item mx-auto" data-bs-toggle="modal" data-bs-target="#${item.id}">
          <div class="portfolio-item-caption d-flex align-items-center justify-content-center h-100 w-100">
            <div class="portfolio-item-caption-content text-center text-white">
              ${item.title}
            </div>
          </div>
          <img class="img-fluid mb-2" src="${item.thumbnail?.src}" alt="${item.title}" loading="lazy" />
        </div>
        <div class="d-flex flex-wrap justify-content-center gap-1 mb-2">
          ${tagsHTML}
        </div>
        <p class="text-center mt-2">${item.shortDescription}</p>
      </div>
    `;
    sectionGrid.insertAdjacentHTML("beforeend", gridItem);
  });

  if (itemIds.length > 3) {
    const seeMoreBtn = document.createElement("button");
    seeMoreBtn.className = "btn btn-outline-light btn-lg";
    seeMoreBtn.textContent = "See more";
    const wrapper = document.createElement("div");
    wrapper.className = "d-flex justify-content-center mt-1.5";
    wrapper.appendChild(seeMoreBtn);
    sectionGrid.insertAdjacentElement("afterend", wrapper);

    seeMoreBtn.addEventListener("click", () => {
      const hiddenItems = sectionGrid.querySelectorAll(".extra-item");
      const isHidden = !hiddenItems[0].classList.contains("show");
      hiddenItems.forEach((el) => el.classList.toggle("show", isHidden));
      seeMoreBtn.textContent = isHidden ? "See less" : "See more";
    });
  }
}

// Generate all modals with lazy-loading
function generatePortfolioModals() {
  const modalContainer = document.body;

  portfolioItems.forEach((item) => {
    // Generate thumbnails with data-src only (lazy)
    const thumbnailsHTML = item.gallery
      .map((media, index) => {
        if (media.type === "image") {
          return `<div class="carousel-item ${index === 0 ? "active" : ""}">
                    <div class="carousel-content">
                      <img class="d-block w-100 thumb-img" 
                           data-type="image" 
                           data-src="${media.src}" alt="">
                    </div>
                  </div>`;
        } else {
          return `<div class="carousel-item ${index === 0 ? "active" : ""}">
                    <div class="carousel-content">
                      <div class="video-wrapper">
                        <video class="d-block w-100 thumb-img" data-type="video" data-src="${
                          media.src
                        }" muted preload="metadata"></video>
                        <span class="play-overlay" aria-hidden="true"></span>
                      </div>
                    </div>
                  </div>`;
        }
      })
      .join("");

    const mainMediaHTML =
      item.mainMedia.type === "image"
        ? `<img id="main-${item.id}" src="${item.mainMedia.src}" class="img-fluid mb-3" alt="${item.title}" loading="lazy">`
        : `<video id="main-${item.id}" class="img-fluid mb-3" muted playsinline loop controls preload="none" data-src="${item.mainMedia.src}"></video>`;

    const indicatorsHTML = item.gallery
      .map(
        (_, index) => `
      <button type="button" data-bs-target="#thumbCarousel-${item.id}"
              data-bs-slide-to="${index}" 
              class="${index === 0 ? "active" : ""}" 
              aria-current="${index === 0 ? "true" : "false"}" 
              aria-label="Slide ${index + 1}"></button>
    `
      )
      .join("");

    const modalHTML = `
<div class="portfolio-modal modal fade" id="${item.id}" tabindex="-1" aria-hidden="true">
  <div class="modal-dialog modal-xl">
    <div class="modal-content">
      <div class="modal-header border-0">
        <button class="btn-close" type="button" data-bs-dismiss="modal"></button>
      </div>
      <div class="modal-body text-center pb-5">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-8">
              <h2 class="portfolio-modal-title text-secondary text-uppercase mb-3">${item.title}</h2>
              <div class="divider-custom"><div class="divider-custom-line"></div></div>

              ${mainMediaHTML}

              <div id="thumbCarousel-${item.id}" class="carousel slide" data-bs-ride="carousel">
                <div class="carousel-indicators">
                  ${indicatorsHTML}
                </div>
                <div class="carousel-inner row row-cols-3 g-2">
                  ${thumbnailsHTML}
                </div>
                <button class="carousel-control-prev" type="button" data-bs-target="#thumbCarousel-${
                  item.id
                }" data-bs-slide="prev">
                  <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next" type="button" data-bs-target="#thumbCarousel-${
                  item.id
                }" data-bs-slide="next">
                  <span class="carousel-control-next-icon" aria-hidden="true"></span>
                  <span class="visually-hidden">Next</span>
                </button>
              </div>

              <p class="mt-3 mb-4">${item.description}</p>
              <div class="text-center d-flex justify-content-center gap-2 mt-5">
                ${
                  item.link
                    ? `<a href="${item.link}" target="_blank" class="btn btn-outline-light btn-lg" style="width:150px; display:flex; align-items:center; justify-content:center"><i class="fas fa-play me-2"></i> Play</a>`
                    : ""
                }
                <button type="button" class="btn btn-outline-light btn-lg" style="width:150px; display:flex; align-items:center; justify-content:center" data-bs-dismiss="modal"><i class="fas fa-xmark me-2"></i> Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>`;

    modalContainer.insertAdjacentHTML("beforeend", modalHTML);

    const modalEl = document.getElementById(item.id);

    // Lazy-load all carousel videos at modal open
    modalEl.addEventListener("show.bs.modal", () => {
      const slides = modalEl.querySelectorAll(".carousel-item");

      slides.forEach((slide) => {
        // Images
        const img = slide.querySelector("img[data-src]");
        if (img && !img.src) {
          img.src = img.dataset.src;
        }

        // Videos
        const video = slide.querySelector("video[data-src]");
        if (video && !video.querySelector("source")) {
          const source = document.createElement("source");
          source.src = video.dataset.src;
          source.type = "video/mp4";
          video.appendChild(source);

          // Load the video so we can seek a thumbnail
          video.load();

          // Seek to middle frame for thumbnail
          const seekToHalf = () => {
            video.currentTime = video.duration * 0.5;
            video.pause();
            // Force frame render even if hidden
            video.style.visibility = "hidden";
            video.offsetHeight;
            video.style.visibility = "";
          };

          if (video.readyState >= 1) {
            seekToHalf();
          } else {
            video.addEventListener("loadedmetadata", seekToHalf, { once: true });
          }
        }
      });

      // Main video
      const mainVideo = modalEl.querySelector(`#main-${item.id}`);
      if (mainVideo && mainVideo.tagName === "VIDEO" && !mainVideo.querySelector("source")) {
        const source = document.createElement("source");
        source.src = mainVideo.dataset.src;
        source.type = "video/mp4";
        mainVideo.appendChild(source);
        mainVideo.load();
      }
    });

    // Stop main video on close
    modalEl.addEventListener("hidden.bs.modal", () => {
      const mainVideo = modalEl.querySelector(`#main-${item.id}`);
      if (mainVideo && mainVideo.tagName === "VIDEO") {
        mainVideo.pause();
        mainVideo.removeAttribute("src");
        mainVideo.innerHTML = "";
      }
    });

    // Lazy load carousel media on slide
    const carouselEl = modalEl.querySelector(`#thumbCarousel-${item.id}`);
    const slides = carouselEl.querySelectorAll(".carousel-item");
    slides.forEach((slide) => {
      const video = slide.querySelector("video[data-src]");
      if (!video || video.querySelector("source")) return;

      const source = document.createElement("source");
      source.src = video.dataset.src;
      source.type = "video/mp4";
      video.appendChild(source);
      video.load();

      // Seek after next frame to ensure video is ready and visible
      const seekToHalf = () => {
        if (video.duration > 0) {
          video.currentTime = video.duration * 0.5;
          video.pause();
        }
      };

      video.addEventListener(
        "loadedmetadata",
        () => {
          requestAnimationFrame(seekToHalf);
        },
        { once: true }
      );
    });

    carouselEl.addEventListener("slid.bs.carousel", (event) => {
      const activeSlide = event.relatedTarget;
      const img = activeSlide.querySelector("img[data-src]");
      if (img && !img.src) img.src = img.dataset.src;

      const video = activeSlide.querySelector("video[data-src]");
      if (video && !video.querySelector("source")) {
        const source = document.createElement("source");
        source.src = video.dataset.src;
        source.type = "video/mp4";
        video.appendChild(source);
        video.load();
      }

      // Pause all other videos
      slides.forEach((slide) => {
        if (slide !== activeSlide) {
          const otherVideo = slide.querySelector("video");
          if (otherVideo) otherVideo.pause();
        }
      });
    });

    // Thumbnail click preview (same as before)
    const thumbEls = modalEl.querySelectorAll(".thumb-img");
    thumbEls.forEach((thumb) => {
      thumb.addEventListener("click", () => {
        const type = thumb.dataset.type;
        const src = thumb.dataset.src;
        const previewContent = document.getElementById("previewContent");
        if (!previewContent) return;

        previewContent.innerHTML = "";
        let newMedia;
        if (type === "image") {
          newMedia = document.createElement("img");
          newMedia.src = src;
          newMedia.className = "img-fluid";
        } else {
          newMedia = document.createElement("video");
          newMedia.className = "img-fluid";
          newMedia.controls = true;
          const source = document.createElement("source");
          source.src = src;
          source.type = "video/mp4";
          newMedia.appendChild(source);
        }

        if (type === "video") {
          newMedia.muted = true;
          newMedia.playsInline = true;
          newMedia.autoplay = true;
          newMedia.play().catch(() => {});
        }

        previewContent.appendChild(newMedia);

        const previewModalEl = document.getElementById("previewModal");
        if (!previewModalEl) return;

        const previewModal = new bootstrap.Modal(previewModalEl);
        previewModal.show();

        const backdrop = document.createElement("div");
        backdrop.className = "modal-backdrop preview-modal-backdrop fade show";
        document.body.appendChild(backdrop);

        function removeBackdrop() {
          const b = document.querySelector(".preview-modal-backdrop");
          if (b) b.remove();
        }

        previewModalEl.addEventListener("hidden.bs.modal", () => {
          if (type === "video") {
            newMedia.pause();
            newMedia.currentTime = 0;
          }
          removeBackdrop();
        });

        const closeBtn = previewModalEl.querySelector(".btn[data-bs-dismiss='modal']");
        if (closeBtn) closeBtn.addEventListener("click", removeBackdrop);
      });
    });
  });
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  populateSection("#portfolio", highlights);
  populateSection("#games", games);
  populateSection("#misc", other);
  generatePortfolioModals();
});
