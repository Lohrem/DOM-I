const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4": "Contact",
    "address": "123 Way 456 Street Somewhere, USA",
    "phone": "1 (888) 888-8888",
    "email": "sales@greatidea.io",
  },
  "footer": {
    "copyright": "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//------ Images
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

let ctaImg = document.getElementById('cta-img')
ctaImg.setAttribute('src', siteContent["cta"]["img-src"])

let middleImg = document.getElementById('middle-img')
middleImg.setAttribute('src', siteContent["main-content"]["middle-img-src"])

//------ Nav items
let navLinks = document.querySelectorAll("nav a")
navLinks.forEach((link, index) => {
  link.innerHTML = siteContent["nav"][`nav-item-` + (index + 1)]
})
let nav = document.querySelector("nav");

let anchorTag = document.createElement("a")
anchorTag.text = "Appended child"
nav.appendChild(anchorTag);
Array.from(navLinks).push(anchorTag)

let preAnchorTag = document.createElement('a')
preAnchorTag.text = "Prepended child"
nav.prepend(preAnchorTag);
Array.from(navLinks).push(preAnchorTag)

let links = document.querySelectorAll("nav a")
links.forEach((l, i) => {
  l.style.color = "green"
})
//------ CTA
let ctaText = document.querySelector(".cta-text h1")
ctaText.innerHTML = siteContent["cta"]["h1"]
let ctaBtn = document.querySelector(".cta-text button")
ctaBtn.innerHTML = siteContent["cta"]["button"]

//------ Main Content H4
let mainContentH4array = [
  siteContent["main-content"]["features-h4"],
  siteContent["main-content"]["about-h4"],
  siteContent["main-content"]["services-h4"],
  siteContent["main-content"]["product-h4"],
  siteContent["main-content"]["vision-h4"]
];
let mainContentTextArray = [
  siteContent["main-content"]["features-content"],
  siteContent["main-content"]["about-content"],
  siteContent["main-content"]["services-content"],
  siteContent["main-content"]["product-content"],
  siteContent["main-content"]["vision-content"]
];

let mainContentH4 = document.querySelectorAll(".text-content h4")
mainContentH4.forEach((heading, index) => {
  heading.innerHTML = mainContentH4array[index]
})
let mainContentText = document.querySelectorAll(".text-content p")
mainContentText.forEach((text, index) => {
  text.innerHTML = mainContentTextArray[index]
})

//------ Contact
let contactHeading = document.querySelector(".contact h4")
contactHeading.innerHTML = siteContent.contact["contact-h4"]

let contactAddressArray = [
  siteContent.contact.address,
  siteContent.contact.phone,
  siteContent.contact.email
]
let contactAdressText = document.querySelectorAll(".contact p")
contactAdressText.forEach((p, index) => {
  p.innerHTML = contactAddressArray[index]
})

//------ Footer
let footerText = document.querySelector("footer p")
footerText.innerHTML = siteContent.footer.copyright