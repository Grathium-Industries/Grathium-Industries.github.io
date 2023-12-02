var inEu = Intl.DateTimeFormat().resolvedOptions().timeZone.startsWith("Europe");
var removeCookieConsentBanner = function () {
    var bannerObj = document.getElementById('cookie-consent');
    if (bannerObj != null) {
        bannerObj.remove();
        bannerObj.innerHTML = '';
    }
};
var createConsentCookie = function () {
    // get the current date in the format "day month (in text) year"
    var date = new Date();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear() + 1;
    var monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    var dateString = day + " " + monthNames[month] + " " + year;
    // create the cookie
    document.cookie = "consent=1; expires=" + dateString + "; path=/";
    removeCookieConsentBanner();
};
var checkConsentCookie = function () {
    // get the cookie
    var consentCookie = document.cookie;
    // check if the cookie exists
    if (consentCookie.indexOf("consent=1") > -1) {
        removeCookieConsentBanner();
    }
};
if (inEu) {
    checkConsentCookie();
}
else {
    removeCookieConsentBanner();
}
