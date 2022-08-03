const inEu = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe")? true : false;

let removeCookieConsentBanner = () => {
    let bannerObj = document.getElementById('cookie-consent');
    
    if (bannerObj != null) {
        bannerObj.remove();
        bannerObj.innerHTML = '';
    }
}

let createConsentCookie = () => {
    // get the current date in the format "day month (in text) year"
    let date = new Date();

    let day = date.getDate();
    let month = date.getMonth();
    let year = date.getFullYear() + 1;
    let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateString = day + " " + monthNames[month] + " " + year;
    // create the cookie
    document.cookie = "consent=1; expires=" + dateString + "; path=/";

    removeCookieConsentBanner();
}

let checkConsentCookie = () => {
    // get the cookie
    let consentCookie = document.cookie;
    // check if the cookie exists
    if (consentCookie.indexOf("consent=1") > -1) {
        removeCookieConsentBanner();
    }
}

if (inEu) {
    checkConsentCookie();
} else {
    removeCookieConsentBanner();
}
