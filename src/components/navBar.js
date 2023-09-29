document.getElementById("c-nav-bar").innerHTML = `

<nav class="nav_bar_main">
      <div class="navBar">
        <ul class="ul-1st">
          <li class="li-1st">
            <a href="./index.html" class="menu-button">Home</a>
          </li>
          <li class="li-1st">
            <div class="m-dropdown">
              <span class="dropdown-toggle menu-button"> About </span>
              <ul class="dropdown-menu-c">
                <li>
                  <a class="dropdown-item-c" href="./about.html">About</a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./our-team.html">Our Team</a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./privacy-policy.html"
                    >Privacy Policy
                  </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./faq.html">FAQ </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./awards.html">Awards</a>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-1st">
            <div class="m-dropdown">
              <span class="dropdown-toggle menu-button"> Project </span>
              <ul class="dropdown-menu-c">
                <li>
                  <a class="dropdown-item-c" href="./ongoing.html">Ongoing </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./upcoming.html"
                    >Upcoming
                  </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./completed.html"
                    >Completed
                  </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./layouts.html">Layouts </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-1st">
            <a href="./blogs.html" class="menu-button">Blogs</a>
          </li>
          <li class="li-1st">
            <div class="m-dropdown">
              <span class="dropdown-toggle menu-button"> Gallery </span>
              <ul class="dropdown-menu-c">
                <li>
                  <a class="dropdown-item-c" href="./ongoing.html"
                    >Newsletter
                  </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./upcoming.html"
                    >Image Gallery
                  </a>
                </li>
                <li>
                  <a class="dropdown-item-c" href="./completed.html"
                    >Video Gallery
                  </a>
                </li>
              </ul>
            </div>
          </li>
          <li class="li-1st">
            <a href="./career.html" class="menu-button">Career</a>
          </li>
          <li class="li-1st">
            <div class="m-dropdown">
              <span class="dropdown-toggle menu-button"> Contact </span>
              <ul class="dropdown-menu-c">
                <li>
                  <a class="dropdown-item-c" href="./book-visit-form.html"
                    >Book a visit form
                  </a>
                </li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
`;

let menuButtons = document.querySelectorAll(".li-1st");

[...menuButtons].forEach((mButton) => {
  mButton.addEventListener("mouseover", mouseOver);
  mButton.addEventListener("mouseleave", mouseLeave);
});

function mouseOver() {
  this.classList.add("active");
}

function mouseLeave() {
  this.classList.remove("active");
}
