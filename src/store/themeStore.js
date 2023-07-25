import { create } from "zustand";

const useThemeStore = create((set) => ({
  theme: "LIGHT",
  changeTheme: () =>
    set((state) => ({
      theme: state.theme === "LIGHT" ? "DARK" : "LIGHT",
    })),
}));

export default useThemeStore;
