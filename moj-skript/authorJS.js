//Navigacija:

const navigacija=document.getElementById("navigacioniMeni");

const stavke=[

    {naziv:"Home", link:"index.html"},
    {naziv:"About", link:"index.html"},
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
        naziv:"Services", link:"index.html"
    },
    {
        naziv:"Feature",link:"index.html"
    },
    {
        naziv:"Our Doctor",link:"index.html"
    },
    {
        naziv:"Testimonial",link:"#index.html"
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


})
//Dinamicko ispisivanje karica sa doktorima:
const doctorsExp = [
    {
        name: "Dr Emma Johnson",
        department: "Cardiology",
        image: "img/team-1.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Dr James Wilson",
        department: "Neurology",
        image: "img/team-2.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    },
    {
        name: "Dr Haruto Tanaka",
        department: "Pediatrics",
        image: "img/team-3.jpg",
        facebook: "#",
        twitter: "#",
        instagram: "#"
    }
];


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