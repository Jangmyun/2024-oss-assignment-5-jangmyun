import { create } from "zustand";

const useAddFormStore = create((set) => ({
  addFormData: {
    p_name: "",
    p_price: 0,
    p_stock: 0,
    p_type: "Desktop",
  },
  setAddFormData: (field, value) =>
    set((state) => ({
      addFormData: {
        ...state.addFormData,
        [field]: value,
      },
    })),
  resetAddFormData: () =>
    set(() => ({
      addFormData: {
        p_name: "",
        p_price: 0,
        p_stock: 0,
        p_type: "",
      },
    })),
}));

const useUpdateFormStore = create((set) => ({
  updateFormData: {
    u_id: 0,
    u_name: "",
    u_price: 0,
    u_stock: 0,
    u_type: "",
  },
  setUpdateFormData: (field, value) =>
    set((state) => ({
      updateFormData: {
        ...state.updateFormData,
        [field]: value,
      },
    })),
  setAllUpdateFormData: (newFormData) => set({ updateFormData: newFormData }),
}));

export { useAddFormStore, useUpdateFormStore };
