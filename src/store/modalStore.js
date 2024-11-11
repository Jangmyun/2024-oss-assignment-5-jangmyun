import { create } from "zustand";

const useModalStore = create((set) => ({
  isModalOpened: false,
  toggleModal: () =>
    set((state) => ({
      isModalOpened: !state.isModalOpened,
    })),

  modalOption: true,
  setModalOption: (newOption) => set({ modalOption: newOption }),
}));

export default useModalStore;
