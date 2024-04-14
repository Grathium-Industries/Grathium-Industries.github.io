const inEu: boolean = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe");

let removeCookieConsentBanner = (): void => {
    let bannerObj: HTMLElement | null = document.getElementById('cookie-consent');

    if (bannerObj != null) {
        bannerObj.remove();
        bannerObj.innerHTML = '';
    }
}

let createConsentCookie = (): void => {
    // get the current date in the format "day month (in text) year"
    let date: Date = new Date();

    let day: number = date.getDate();
    let month: number = date.getMonth();
    let year: number = date.getFullYear() + 1;
    let monthNames: string[] = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let dateString: string = day + " " + monthNames[month] + " " + year;
    // create the cookie
    document.cookie = "consent=1; expires=" + dateString + "; path=/";

    removeCookieConsentBanner();
}

let checkConsentCookie = (): void => {
    // get the cookie
    let consentCookie: string = document.cookie;
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
