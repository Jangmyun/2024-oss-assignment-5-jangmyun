import { create } from "zustand";

const useAddFormStore = create((set) => ({
  addFormData: {
    name: "",
    price: 0,
    stock: 0,
    type: "",
  },
  setAddFormData: (field, value) =>
    set((state) => ({
      ...state.addFormData,
      [field]: value,
    })),
  resetFormData: () =>
    set(() => ({
      addFormData: {
        name: "",
        price: 0,
        stock: 0,
        type: "",
      },
    })),
}));

const useUpdateFormStore = create((set) => ({
  updateFormData: {
    id: 0,
    name: "",
    price: 0,
    stock: 0,
    type: "",
  },
  setUpdateFormData: (field, value) =>
    set((state) => ({
      ...state.updateFormData,
      [field]: value,
    })),
  setAllUpdateFormData: (newFormData) => set({ updateFormData: newFormData }),
}));

export { useAddFormStore, useUpdateFormStore };
