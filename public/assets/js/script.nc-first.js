const navButton = document.querySelector('.dropdown-nav-button');
const aboutAarc = document.getElementById('about-aarc');
const aboutAarcDropdown = document.getElementById('about-aarc-dropdown');
const aboutAarcDropdownSvg = document.querySelector('#about-aarc-dropdown svg');
const aboutAarcDropdownArrow = document.querySelector('#about-aarc-dropdown .dropdown-arrow');
const services = document.getElementById('services');
const servicesDropdown = document.getElementById('services-dropdown');
const servicesDropdownSvg = document.querySelector('#services-dropdown svg');
const servicesDropdownArrow = document.querySelector('#services-dropdown .dropdown-arrow');
const workshops = document.getElementById('workshops');
const ourTeam = document.getElementById('our-team');
const gallery = document.getElementById('gallery');
const joinAarc = document.getElementById('join-aarc');
const seekTherapy = document.getElementById('seek-therapy');
const contactUs = document.querySelector('.contact-us');
const servicesCards = document.querySelectorAll('.services-card');
const ddNav = document.querySelector('.dropdown-nav');
const termsAndConditions = document.getElementById('terms-and-conditions');
const privacyPolicy = document.getElementById('privacy-policy');
const fadeOut = [{opacity: 1, duration: 0},{opacity: 0, duration: 100}];
const iconFadeIn = [{fill: '#2a2a2a', duration: 0},{fill: '#f7f7f7', duration: 200}];
const iconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#2a2a2a', duration: 200}];
const pages = [heroSection, aboutAarc, services, ourTeam, gallery, workshops, joinAarc, seekTherapy, contactUs, termsAndConditions, privacyPolicy];

const qualificationsInput = document.getElementById('interest-qualifications');
const contactUsForm = document.getElementById('contact-us-form');
const contactUsButton = document.getElementById('contact-us-button');
const contactUsSendicon = document.getElementById('contact-us-send-icon');
const interestButton = document.getElementById('join-us-button');
const interestSendicon = document.getElementById('interest-send-icon');
const seekTherapyButton = document.getElementById('seek-therapy-button');
const seekTherapySendIcon = document.getElementById('seek-therapy-send-icon');
const interestValidMsg = document.querySelector('#join-aarc.valid');
const seekTherapyForm = document.getElementById('seek-therapy-form');

const interestLoadingIcon = document.getElementById('interest-loading-icon');
const seekTherapyLoadingIcon = document.getElementById('seek-therapy-loading-icon');
const contactLoadingIcon = document.getElementById('contact-us-loading-icon');
const successModal = document.getElementById('success-modal');
const failureModal = document.getElementById('failure-modal');
const successModalCloseButton = document.querySelector("#success-modal button");
const failureModalCloseButton = document.querySelector("#failure-modal button");
const profileCards = document.querySelectorAll('.profile-cards');

const contactValidMsg = document.querySelector('#contact-us.valid');
const contactUsFirstName = document.getElementById('contact-us-first-name');
const contactUsLastName = document.getElementById('contact-us-last-name');
const contactUsContactNumber = document.getElementById('contact-us-contact-number');
const contactUsEmail = document.getElementById('contact-us-email');
const contactUsMessage = document.getElementById('contact-us-message');

const seekTherapyFirstName = document.getElementById('seek-therapy-first-name');
const seekTherapyLastName = document.getElementById('seek-therapy-last-name');
const seekTherapyContactNumber = document.getElementById('seek-therapy-contact-number');
const seekTherapyEmail = document.getElementById('seek-therapy-email');
const seekTherapyAge = document.getElementById('seek-therapy-age');
const seekTherapyGender = document.getElementById('seek-therapy-gender');
const seekTherapyNeeds = document.getElementById('needs');

const interestForm = document.querySelector('#interest-form');
const otherQualificationsInput = document.getElementById('interest-other-qualifications');
const otherQualificationsLabel = document.getElementById('label-other-qualifications');
const interestFirstName = document.getElementById('interest-first-name');
const interestLastName = document.getElementById('interest-last-name');
const interestContactNumber = document.getElementById('interest-contact-number');
const interestEmail = document.getElementById('interest-email');
const interestQualifications = document.getElementById('interest-qualifications');
const interestOtherQualifications = document.getElementById('interest-other-qualifications');
const interestInterest = document.getElementById('interest-interest');

const servicesSubMenu = document.getElementById('services-sub-menu');
const aboutSubMenu = document.getElementById('about-sub-menu');
const subMenu = document.querySelector('.sub-menu');

const therapyButtonIcon = document.querySelector('.seek-therapy-button .hero-button-icon');
const aarcButtonIcon = document.querySelector('.join-aarc-button .hero-button-icon');
const workshopButtonIcon = document.querySelector('.workshops-button .hero-button-icon');
const therapyIconFadeIn = [{fill: '#451575', duration: 0},{fill: '#f7f7f7', duration: 200}];
const therapyIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#451575', duration: 200}];  
const aarcIconFadeIn = [{fill: '#154575', duration: 0},{fill: '#f7f7f7', duration: 200}];
const aarcIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#154575', duration: 200}];  
const workshopIconFadeIn = [{fill: '#751545', duration: 0},{fill: '#f7f7f7', duration: 200}];
const workshopIconFadeOut = [{fill: '#f7f7f7', duration: 0},{fill: '#751545', duration: 200}]; 
const arrowIconFadeIn = [{stroke: '#154575', duration: 0},{stroke: '#f7f7f7', duration: 200}];
const arrowIconFadeOut = [{stroke: '#f7f7f7', duration: 0},{stroke: '#154575', duration: 200}];

// Navigation Function
const showPage = function() {
  for (let page of pages) {
    let navData = this.dataset.page;
    if (page.id === navData) {
      page.classList.remove('invisible');
      animation(page, fadeIn, 0, 1000, 0, 0, 0, false, 'linear', true, false);
      let parent = page.querySelector('[data-div="parent"]');
        animation(parent.children, fadeIn, 300, 0, 0, 0, 0, false, 'linear', true, false);
    } else {
      page.classList.add('invisible');
      animation(page, fadeOut, 0, 500, 0, 0, 0, false, 'linear', true, false);
    }
  }  
};

document.getElementById("hero-link").addEventListener('click', showPage);
document.getElementById("about-aarc-link").addEventListener('click', showPage);
document.getElementById("services-link").addEventListener('click', showPage);
document.getElementById("our-team-link").addEventListener('click', showPage);
document.getElementById("gallery-link").addEventListener('click', showPage);
document.getElementById("workshops-link").addEventListener('click', showPage);
document.getElementById("join-aarc-link").addEventListener('click', showPage);
document.getElementById("seek-therapy-link").addEventListener('click', showPage);
document.getElementById("contact-us-link").addEventListener('click', showPage);
document.getElementById("privacy-policy-link").addEventListener('click', showPage);
document.getElementById("terms-and-conditions-link").addEventListener('click', showPage);

document.getElementById("dropdown-hero-link").addEventListener('click', showPage);
document.getElementById("dropdown-about-aarc-link").addEventListener('click', showPage);
document.getElementById("dropdown-services-link").addEventListener('click', showPage);
document.getElementById("dropdown-our-team-link").addEventListener('click', showPage);
document.getElementById("dropdown-gallery-link").addEventListener('click', showPage);
document.getElementById("dropdown-workshops-link").addEventListener('click', showPage);
document.getElementById("dropdown-join-aarc-link").addEventListener('click', showPage);
document.getElementById("dropdown-seek-therapy-link").addEventListener('click', showPage);
document.getElementById("dropdown-contact-us-link").addEventListener('click', showPage);
document.getElementById("dropdown-privacy-policy-link").addEventListener('click', showPage);
document.getElementById("dropdown-terms-and-conditions-link").addEventListener('click', showPage);
aarcButton.addEventListener('click', showPage);
therapyButton.addEventListener('click', showPage);
workshopButton.addEventListener('click', showPage);

//OpeningDropdown Navigation animation
navButton.addEventListener('click', function(){
  if([...ddNav.classList].includes('invisible')) {
    ddNav.classList.remove('invisible');
    animation(ddNav, fadeIn, 0, 0, 0, 0, 0, false, 'linear', true, false);
  } else if (![...ddNav.classList].includes('invisible')){
    ddNav.classList.add('invisible');
    animation(ddNav, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false);
  }
});
  
//Closing Dropdown Navigation Menu on Click
ddNav.addEventListener('click', function(){
  animation(ddNav, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false); 
  ddNav.classList.add('invisible');
});

//Arrow Icon Animation
const iconAnime = (element, svgIcon, fadeIn, fadeOut) => {
    element.addEventListener('mouseenter', function(){
    animation(svgIcon, fadeIn, 0, 0, 0, 0, 0, false, 'linear', true, false);
  });
  element.addEventListener('mouseleave', function(){
    animation(svgIcon, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false);
  });
}

iconAnime(navButton, navButton, iconFadeIn, iconFadeOut);
iconAnime(therapyButton, therapyButtonIcon, therapyIconFadeIn, therapyIconFadeOut);
iconAnime(aarcButton, aarcButtonIcon, aarcIconFadeIn, aarcIconFadeOut);
iconAnime(workshopButton, workshopButtonIcon, workshopIconFadeIn, workshopIconFadeOut);
iconAnime(aboutAarcDropdown, aboutAarcDropdownArrow, arrowIconFadeIn, arrowIconFadeOut);
iconAnime(servicesDropdown, servicesDropdownArrow, arrowIconFadeIn, arrowIconFadeOut);


//dropdown About Us and Services Nav Buttons
const dropdownNavOptions = (element, buttonSvg, dropdownSubMenu) => {
  let rect = element.getBoundingClientRect();
  dropdownSubMenu.style.top = `${rect.bottom}px`;
  dropdownSubMenu.style.left = `${rect.left}px`;
  element.addEventListener('mouseenter', function(){
    animation(buttonSvg, arrowIconFadeIn, 0, 250, -180, 0, 0, false, 'linear', true, false);
    animation(dropdownSubMenu, null, 0, 250, 0, 0, 0, false, 'linear', true, false);
    dropdownSubMenu.classList.remove('invisible');
    dropdownSubMenu.addEventListener('mouseenter', function(){
      animation(dropdownSubMenu, null, 0, 250, 0, 0, 0, false, 'linear', true, false);
      dropdownSubMenu.classList.remove('invisible');
    });
    dropdownSubMenu.addEventListener('mouseleave', function(){
      animation(dropdownSubMenu, null, 0, 250, 0, 0, 0, false, 'linear', true, false);
      dropdownSubMenu.classList.add('invisible');
    });
  });
  element.addEventListener('mouseleave', function(){
    animation(buttonSvg, arrowIconFadeOut, 0, 250, 0, 0, 0, false, 'linear', true, false);
    animation(dropdownSubMenu, null, 0, 250, 0, 0, 0, false, 'linear', true, false);
    dropdownSubMenu.classList.add('invisible');
    dropdownSubMenu.addEventListener('mouseenter', function(){
      animation(dropdownSubMenu, null, 0, 250, 0, 0, 0, false, 'linear', true, false);
      dropdownSubMenu.classList.remove('invisible');
    })
  });
};

dropdownNavOptions(aboutAarcDropdown, aboutAarcDropdownSvg, aboutSubMenu);
dropdownNavOptions(servicesDropdown, servicesDropdownSvg, servicesSubMenu);


//Closing Success message modal
successModalCloseButton.addEventListener("click", () => {
    successModal.classList.add('invisible');
  });
  
//Closing Failure message modal
failureModalCloseButton.addEventListener("click", () => {
  failureModal.classList.add('invisible');
});

//Function for Showing Service Text and hiding illustration on Hovering on Service Cards
(function(){ 
  for (let servicesCard of servicesCards){
    servicesCard.addEventListener("mouseenter", function(evt){
      if (servicesCard.dataset.number === evt.target.dataset.number){
        let servicesImage = evt.target.querySelector('.services-img');
        let servicesSubText = evt.target.querySelector('.services-sub-text');
        servicesImage.style.display='none';
        servicesSubText.style.display='flex';
        animation(servicesImage, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false);
        animation(servicesSubText, fadeIn, 0, 0, 0, 0, 0, false, 'linear', true, false);
        servicesCard.addEventListener("mouseleave", function(evt){
          servicesSubText.style.display='none';
          servicesImage.style.display='block';
          animation(servicesImage, fadeIn, 0, 0, 0, 0, 0, false, 'linear', true, false);
          animation(servicesSubText, fadeOut, 0, 0, 0, 0, 0, false, 'linear', true, false);
        })
      }
    })
  }
})();
  
//function for providing a full resolution image in the gallery

//Disabling and enabling of Other Qualifications Input
const disableInput = () => {
  if (qualificationsInput.value == 'Other...'){
    otherQualificationsInput.setAttribute('required', '') ;
    otherQualificationsInput.removeAttribute('disabled','');
    otherQualificationsInput.classList.remove('disabled-input');
    otherQualificationsLabel.classList.remove('disabled-label');
  } else {
    otherQualificationsInput.removeAttribute('required', '') ;
    otherQualificationsInput.setAttribute('disabled','');
    otherQualificationsInput.classList.add('disabled-input');
    otherQualificationsLabel.classList.add('disabled-label');
    otherQualificationsInput.value='';
  }
}
  
qualificationsInput.addEventListener('click', () => {
  disableInput();
});
  
//Sending Form Data and error handling
const sendMailData = (sendData, sendButton, sendIcon) => {
  sendButton.classList.add('invisible');
  sendIcon.classList.remove('invisible');
  animation(sendIcon, null, 0, 750, 360, 0, 0, true, "linear", true, false);
  
  fetch('/', {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(sendData)
  })
  
  .then(response => {
    let data = response; 
    return data;
  })
  
  .then(data => {
    if (!data.ok) {
      throw new Error(error)
    } else {
      (function() {
        sendButton.classList.remove('invisible')
        sendIcon.classList.add('invisible')
        animation(sendIcon, null, 0, 0, 0, 0, 0, true, "linear", true, false);
        successModal.classList.remove('invisible')
      }())
    }
  })
  
  .catch((error) => {
    (function() {
      sendButton.classList.remove('invisible')
      sendIcon.classList.add('invisible') 
      animation(sendIcon, null, 0, 0, 0, 0, 0, true, "linear", true, false);
      failureModal.classList.remove('invisible')
      console.warn(error.message)
    }())
  })
  
}

//Contact Us Form
contactUsForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    form: 'Contact Form', 
    firstName : contactUsFirstName.value.trim(), 
    lastName : contactUsLastName.value.trim(), 
    contactNumber : contactUsContactNumber.value.trim(), 
    email : contactUsEmail.value.trim(), 
    message : contactUsMessage.value.trim()
  }

  sendMailData(formData, contactUsButton, contactLoadingIcon)
})

//Seek Therapy Form
seekTherapyForm.addEventListener('submit', (e) => {
  e.preventDefault();

  let formData = {
    form: 'Seek Therapy Form', 
    firstName: seekTherapyFirstName.value.trim(), 
    lastName: seekTherapyLastName.value.trim(), 
    contactNumber: seekTherapyContactNumber.value.trim(), 
    email: seekTherapyEmail.value.trim(), 
    age: seekTherapyAge.value, 
    gender: seekTherapyGender.value.trim(), 
    needs: seekTherapyNeeds.value.trim()
  }

  sendMailData(formData, seekTherapyButton, seekTherapyLoadingIcon);
})
  
//Interest Form
interestForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  let formData = {
    form: 'Interest Form', 
    firstName: interestFirstName.value.trim(), 
    lastName: interestLastName.value.trim(), 
    contactNumber: interestContactNumber.value.trim(), 
    email: interestEmail.value.trim(), 
    qualifications: interestQualifications.value, 
    otherQualifications: interestOtherQualifications.value.trim(), 
    interest: interestInterest.value
  }
  
  sendMailData(formData, interestButton, interestLoadingIcon)
})  