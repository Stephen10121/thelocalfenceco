export type AnnouncementBanner = {
    show: boolean,
    backgroundColor: string,
    textColor: string,
    strong: string,
    val: string
}


export let announcementBanner: AnnouncementBanner = {
    show: false,
    backgroundColor: "#2f6846",
    textColor: "#ffffff",
    strong: "Limited time only",
    val: "All quotes are 50% off for the next 10 days."
}

export function changeAnnouncement(newAnnouncement: AnnouncementBanner) {
    announcementBanner = newAnnouncement;
}

export type ContactRequest = {
    name: string;
    from: string;
    about: string;
    when: string;
}

export let contactRequests: ContactRequest[] = [];

export function addContactRequest(contactRequest: ContactRequest) {
    contactRequests.push(contactRequest);
}