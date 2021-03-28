var Membership;
(function (Membership) {
    Membership[Membership["Simple"] = 0] = "Simple";
    Membership[Membership["Standard"] = 1] = "Standard";
    Membership[Membership["Premium"] = 2] = "Premium";
})(Membership || (Membership = {}));
var membership = Membership.Standard;
var membershipReverse = Membership[2];
console.log(membership);
console.log(membershipReverse);
var SocilaMedia;
(function (SocilaMedia) {
    SocilaMedia["VK"] = "VK";
    SocilaMedia["FACEBOOK"] = "FACEBOOK";
    SocilaMedia["INSTAGRAM"] = " INSTAGRAM";
})(SocilaMedia || (SocilaMedia = {}));
var social = SocilaMedia.INSTAGRAM;
console.log(social);
