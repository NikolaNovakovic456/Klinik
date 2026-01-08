//Navigacija:

const navigacija=document.getElementById("navigacioniMeni");

const stavke=[

    {naziv:"Home", link:"index.html"},
    {naziv:"About", link:"#about"},
    {naziv:"Dokumentacija", link:"#"},
    { naziv:"Author", link:"author.html"}

];

let sadrzajIspis="";
stavke.forEach(stavke=>{
    sadrzajIspis+=`
        <a href="${stavke.link}" class="nav-item nav-link active">${stavke.naziv}</a>
    `;
})


navigacija.innerHTML+=sadrzajIspis;

//Drop lista u navigacionom meniju:

const dropDownMeni=document.getElementById("lista");
const dropLink=[
    {
        naziv:"Services", link:"#service"
    },
    {
        naziv:"Feature",link:"#feature"
    },
    {
        naziv:"Our Doctor",link:"#team"
    },
    {
        naziv:"Testimonial",link:"#testimonial"
    }

    
    
  
];

let sadrzajIspis2=" ";

dropLink.forEach(dropLink=>{
    sadrzajIspis2+=`
            <a href="${dropLink.link}" class="dropdown-item">${dropLink.naziv}</a>
    `
});
dropDownMeni.innerHTML+=sadrzajIspis2;

//Dinamicko ispisivanje Health Care Solutiona:

document.addEventListener("DOMContentLoaded", function () {

    const services = [
        {
            icon: "fa-heartbeat",
            title: "Cardiology",
            delay: "0.1s",
            text: "Our cardiologists provide top-quality heart care, using modern equipment and thorough examinations to ensure patients health and wellbeing"
        },
        {
            icon: "fa-x-ray",
            title: "Pulmonary",
            delay: "0.3s",
            text: "Our pulmonary specialists deliver expert lung care, using advanced diagnostics and treatments to ensure patients breathe easily and stay healthy."
        },
        {
            icon: "fa-brain",
            title: "Neurology",
            delay: "0.5s",
            text:"Our neurology team provides expert brain and nervous system care, offering precise diagnostics, treatments, and personalized attention to every patient"
        },
        {
            icon: "fa-wheelchair",
            title: "Orthopedics",
            delay: "0.1s",
            text:"Our orthopedic specialists deliver expert bone and joint care, using advanced treatments and personalized attention to restore mobility and improve patients lives."
        },
        {
            icon: "fa-tooth",
            title: "Dental Surgery",
            delay: "0.3s",
            text: "Our dental surgeons provide expert oral care, performing precise procedures with modern technology to ensure healthy, confident smiles for patients."
        },
        {
            icon: "fa-vials",
            title: "Laboratory",
            delay: "0.5s",
            text: "Our laboratory team delivers accurate and timely diagnostic testing, using advanced equipment to support effective treatment and patient health management."
        }
    ];
    //Read more pop out text
    const container = document.getElementById("servicesContainer");
    const output = document.getElementById("serviceText");

    services.forEach((service, index) => {
        const col = document.createElement("div");
        col.className = "col-lg-4 col-md-6 mb-4";
        col.setAttribute = ("data-wow-delay", service.delay);

        col.innerHTML = `
                <div class="service-item bg-light rounded h-100 p-5">
                    <div class="d-inline-flex align-items-center justify-content-center bg-white rounded-circle mb-4"
                         style="width: 65px; height: 65px;">
                        <i class="fa ${service.icon} text-primary fs-4"></i>
                    </div>
                    <h4 class="mb-3">${service.title}</h4>
                    <p class="mb-4">Click below for more information</p>
                    <button class="btn btn-primary service-btn text-primary" data-index="${index}">Read More</button>
                    <p class="service-text mt-3"></p>
                </div>
            </div>
        `;
        container.appendChild(col);
    });


container.addEventListener("click", (e) =>{
    const btn = e.target.closest(".service-btn");
    if (!btn) return;
   
    const card = btn.closest(".service-item");
    const textEl = card.querySelector(".service-text");
   
    const i = btn.dataset.index;

    if (!textEl.classList.contains("show")){
        textEl.textContent = services[i].text;
        textEl.classList.add("show");
        btn.textContent = "Close";
    }
    else{
        textEl.classList.remove("show");
        btn.textContent = "Read more";
    }
})
});
//Dinamicko ispisivanje karica sa doktorima:
const doctorsExp = [
    {
        name: "Dr Emma Johnson",
        department: "Cardiology",
        image: "img/team-1.jpg",
        slogan: "'Caring for your heart with expertise and compassion.'"
    },
    {
        name: "Dr James Wilson",
        department: "Neurology",
        image: "img/team-2.jpg",
        slogan: "'Because every thought and movement matters.'"
    },
    {
        name: "Dr Haruto Tanaka",
        department: "Pediatrics",
        image: "img/team-3.jpg",
        slogan: "'Compassionate care for your child’s growth and well-being.'"

        
    }
];
const container = document.getElementById("teamContainer");

doctorsExp.forEach(doc => {
    container.innerHTML += `
        <div class="col-lg-4 col-md-6">
            <div class="team-item position-relative rounded overflow-hidden">
                <div class="overflow-hidden">
                    <img class="img-fluid" src="${doc.image}" alt="">
                </div>
                <div class="team-text bg-light text-center p-4">
                    <h5>${doc.name}</h5>
                    <p class="text-primary">${doc.department}</p>
                    <div class="team-social text-center">
                       <p class="text-primary">${doc.slogan}</p>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
});

//Validacija forme

//IME POLJE:

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    const nameInput = document.getElementById("name");
    const nameError = document.getElementById("name-error");

    const nameRegex = /^[A-Z][a-zA-Z]{2,}$/; 

    form.addEventListener("submit", function(e) {
        const nameValue = nameInput.value.trim();

        if(!nameRegex.test(nameValue)) {
            e.preventDefault();
            nameInput.style.border = "2.5px solid red";
            nameError.textContent = "Name must start with a capital letter and have at least 3 charathers! ";
        } else {
            nameInput.style.border = "2.5px solid green";
            nameError.textContent = "";
        }
    });
    nameInput.addEventListener("input", function() {
        const nameValue = nameInput.value.trim();
        if(nameRegex.test(nameValue)) {
            nameInput.style.border = "2.5px solid green";
            nameError.textContent = "";
        } else if(nameValue.length > 0) {
            nameInput.style.border = "2.5px solid red";
        } else {
            nameInput.style.border = "border-0";
            nameError.textContent = "";
        }
    });
});

//EMAIL POLJE:

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");
    
    const emailInput = document.getElementById("email");
    const emailError = document.getElementById("email-error");

    const emailRegex = /^[a-zA-Z0-9]+([._]?[a-zA-Z0-9]+)*@[a-zA-Z0-9-]+\.[a-zA-Z]{2,}$/;


    form.addEventListener("submit", function(e) {
        const emailValue = emailInput.value.trim();

        if(!emailRegex.test(emailValue)) {
            e.preventDefault(); 
            emailInput.style.border = "2.5px solid red";
            emailError.textContent = "Enter a valid email address (exp. ime@domen.com)";
        } else {
            emailInput.style.border = "2.5px solid green";
            emailError.textContent = "";
        }
    });

    emailInput.addEventListener("input", function() {
        const emailValue = emailInput.value.trim();
        if(emailRegex.test(emailValue)) {
            emailInput.style.border = "2.5px solid green";
            emailError.textContent = "";
        } else if(emailValue.length > 0) {
            emailInput.style.border = "2.5px solid red";
        } else {
            emailInput.style.border = "1px solid #ced4da"; 
            emailError.textContent = "";
        }
    });
});

//TELEFON POLJE:

document.addEventListener("DOMContentLoaded", function() {
    const form = document.querySelector("form");

    const phoneInput = document.getElementById("phone");
    const phoneError = document.getElementById("phone-error");

    const phoneRegex = /^\+381\s6[0-689]\s\d{2}\s\d{2}\s\d{2,3}$/;


    form.addEventListener("submit", function(e) {
        const phoneValue = phoneInput.value.trim();

        if(!phoneRegex.test(phoneValue)) {
            e.preventDefault();
            phoneInput.style.border = "2.5px solid red";
            phoneError.textContent = "Phone number must be in correct format +381 XX XX XX XXX!";
        } else {
            phoneInput.style.border = "2.5px solid green";
            phoneError.textContent = "";
        }
    });

    // Dinamična validacija dok korisnik kuca:
    phoneInput.addEventListener("input", function() {
        const phoneValue = phoneInput.value.trim();
        if(phoneRegex.test(phoneValue)) {
            phoneInput.style.border = "2.5px solid green";
            phoneError.textContent = "";
        } else if(phoneValue.length > 0) {
            phoneInput.style.border = "2.5px solid red";
        } else {
            phoneInput.style.border = "1px solid #ced4da"; 
            phoneError.textContent = "";
        }
    });
});

//DROPDOWN Lista Doktora:

const doctors = ["Doctor 1", "Doctor 2", "Doctor 3"];

const select = document.getElementById("selectForma");

doctors.forEach((name, index) => {
    select.innerHTML += `<option value="${index + 1}">${name}</option>`;
});

document.querySelector("form").addEventListener("submit", function(e) {
    const doctorSelect = document.getElementById("selectForma");
    const doctorError = document.getElementById("doctor-error");

    const doctorValue = doctorSelect.value;

    doctorSelect.style.border = "1px solid #ced4da";
    doctorError.textContent = "";

    if (doctorValue !== "") {
        doctorSelect.style.border = "2px solid green";
        doctorError.textContent = "";
    } else {
        e.preventDefault(); 
        doctorSelect.style.border = "2px solid red";
        doctorError.textContent = "Doctor must be selected!";
        doctorSelect.focus();
    }
});

//DATUM i VREME ispis opcione poruke:
document.querySelector("form").addEventListener("submit", function(e) {
    const dateInput = document.getElementById("dateInput");
    const dateMsg = document.getElementById("date-msg");

    // reset poruke
    dateMsg.textContent = "";

    if (dateInput.value.trim() === "") {
        // ako je prazno → opcionalno
        dateMsg.textContent = "Date is optional";
        dateMsg.style.color = "gray"; // ili text-muted
    } else {
        // ako je popunjeno → možemo dodati potvrdu
        dateMsg.textContent = "Date selected: " + dateInput.value;
        dateMsg.style.color = "green";
    }
});
document.querySelector("form").addEventListener("submit", function(e) {
    const timeInput = document.getElementById("timeInput");
    const timeMsg = document.getElementById("time-msg");

    // reset poruke
    timeMsg.textContent = "";

    if (timeInput.value.trim() === "") {
        // prazno → opcionalno
        timeMsg.textContent = "Time is optional";
        timeMsg.style.color = "gray"; 
    } else {
        // ako je popunjeno → potvrda
        timeMsg.textContent = "Time selected: " + timeInput.value;
        timeMsg.style.color = "green";
    }
});
//Dinamicki ispis pacientskog tesitimoniala:

const testimonials = [
    {
        img: "img/testimonial-1.jpg",
        text: "Thank you for your care and kindness. Your clinic truly stands out!",
        name: "Emily Johnson",
    },
    {
        img: "img/testimonial-2.jpg",
        text: "Excellent service and dedication. I’m grateful for your outstanding care!",
        name: "James Miller",
    },
    {
        img: "img/testimonial-3.jpg",
        text: "Your kindness and professionalism mean so much. Thank you for everything!",
        name: "Michael Anderson",
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const carousel = document.getElementById("testimonialCarousel");
    
    let html = "";
    testimonials.forEach(item => {
        html += `
        <div class="testimonial-item text-center">
            <img class="img-fluid bg-light rounded-circle p-2 mx-auto mb-4" src="${item.img}" style="width: 100px; height: 100px;">
            <div class="testimonial-text rounded text-center p-4">
                <p>${item.text}</p>
                <h5 class="mb-1">${item.name}</h5>
            </div>
        </div>
        `;
    });
    carousel.innerHTML = html;
});
//Dinamicki ispis footera:

//1)ADRESE:

const footerData = {
    title: "Address",
    items: [
        { icon: "fa-map-marker-alt", text: "Zdravka Celara 16,Belgrad,Serbia" },
        { icon: "fa-phone-alt", text: "+381 64 56 67 890" },
        { icon: "fa-envelope", text: "Klinik@gmail.com" }
    ],
    social: [
        { icon: "fab fa-twitter", url: "#" },
        { icon: "fab fa-facebook-f", url: "#" },
        { icon: "fab fa-youtube", url: "#" },
        { icon: "fab fa-linkedin-in", url: "#" }
    ]
};

const footerSection = document.getElementById("footerSection");

let itemsHTML = "";
footerData.items.forEach(item => {
    itemsHTML += `<p class="mb-2"><i class="fa ${item.icon} me-3"></i>${item.text}</p>`;
});

let socialHTML = '<div class="d-flex pt-2">';
footerData.social.forEach(s => {
    socialHTML += `<a class="btn btn-outline-light btn-social rounded-circle" href="${s.url}" target="_blank"><i class="${s.icon}"></i></a>`;
});
socialHTML += '</div>';

footerSection.innerHTML = `
    <h5 class="text-light mb-4">${footerData.title}</h5>
    ${itemsHTML}
    ${socialHTML}
`;

//2)USLUGE:

const servicesData = {
    title: "Services",
    links: [
        { text: "Cardiology", url: "#service" },
        { text: "Pulmonary", url: "#service" },
        { text: "Neurology", url: "#service" },
        { text: "Orthopedics", url: "#service" },
        { text: "Laboratory", url: "#service" }
    ]
};

const footerServices = document.getElementById("footerServices");

let linksHTML = "";
servicesData.links.forEach(link => {
    linksHTML += `<a class="btn btn-link" href="${link.url}">${link.text}</a>`;
});

footerServices.innerHTML = `
    <h5 class="text-light mb-4">${servicesData.title}</h5>
    ${linksHTML}
`;

//3)Brzi linkovi:

const quickLinksData = {
    title: "Quick Links",
    links: [
        { text: "About Us", url: "#about" },
        { text: "Contact Us", url: "#appointment" },
        { text: "Our Services", url: "#service" },
        { text: "DOKUMENTACIJA", url: "#" },
        { text: "SITEMAP", url: "#" },
        { text: "ROBOT.TXT", url: "#" }
    ]
};

const footerQuickLinks = document.getElementById("footerQuickLinks");

let quickLinksHTML = "";
quickLinksData.links.forEach(link => {
    quickLinksHTML += `<a class="btn btn-link" href="${link.url}">${link.text}</a>`;
});

footerQuickLinks.innerHTML = `
    <h5 class="text-light mb-4">${quickLinksData.title}</h5>
    ${quickLinksHTML}
`;

//4)Validacija Newsletter-a:

document.getElementById("signUpBtn").addEventListener("click", function () {

    const emailInput = document.getElementById("newsLetterEmail");
    const emailMsg = document.getElementById("errorMsg");
    const email = emailInput.value.trim();

    const emailRegex = /^([0-9]|[A-z]{1,20}@(gmail.com|yahoo.com|ict.edu.rs))$/;

    if (!emailRegex.test(email)) {
        emailInput.style.border="3px solid red";
        emailInput.style.boxShadow="0 0 5px rgba(255,0,0,0.5)";
        emailMsg.style.display="block";
        emailMsg.textContent="Incorrect email address!";
        emailMsg.style.color="red";

    } else {
        emailInput.style.border="3px solid green";
        emailInput.style.boxShadow="0 0 5px rgba(0,128,0,0.5)";
        emailMsg.style.display="block";
        emailMsg.textContent="Correct email address!";
        emailMsg.style.color="green";
    }
});