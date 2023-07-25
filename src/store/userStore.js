import { create } from "zustand";
import defaultProfileImage from "./octocat.png";

const useUserStore = create((set) => ({
  user: {
    avatar_url: defaultProfileImage,
    name: "The Octocat",
    login: "octocat",
    html_url: "#",
    created_at: "2022-03-24T17:20:40Z",
    bio: "Lorem ipsum dolar sit amet, consectuetur adipiscing elit. Donec odio. Quisque volutpat mattis eros",
    followers: 3938,
    following: 9,
    public_repos: 8,
    location: "San Francisco",
    twitter_username: null,
    blog: "https://github.blog",
    company: "github",
  },
  setUser: (person) => set((state) => ({ user: person })),
}));

export default useUserStore;
