import { writable } from "svelte/store";
import type { ExampleAnnoucement } from "./types";

export const transparentHeaderBackground = writable(false);

export const showExampleAnnouncement = writable(false);
export const exampleAnnouncementValues = writable<ExampleAnnoucement>({
    strong: "Limited time only",
    value: "All quotes are 50% off for the next 3 days.",
    backgroundColor: "#2f6846",
    textColor: "#ffffff",
    show: true
});