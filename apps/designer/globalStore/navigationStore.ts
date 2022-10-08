import create from "zustand";
type store = {
  isWelcomeComponentOpen: boolean;
  handleClickOnNewDesign: () => void;
  isNavbarOpen: boolean;
  handleClickOnWelcome: () => void;
  isWelcomePanelActive: boolean;
  isToggled: boolean;
  handleClickForToggle: () => void;
  handleClickOnNewButton: () => void;
  isSavePopupOpen: boolean;
  handleClickOnSaveButton: () => void;
  closeSavePopup: () => void;
  toggleFreeCamera: boolean;
  toggleCameraButton: (val: boolean) => void;
};
const navigationUseStore = create<store>((set) => ({
  isWelcomeComponentOpen: false,
  handleClickOnNewDesign: () => {
    set(() => ({
      isWelcomeComponentOpen: true,
    }));
  },

  isWelcomePanelActive: false, //for welcome component
  isNavbarOpen: false, //for navbar by default is closed
  handleClickOnWelcome: () => {
    set(() => ({
      isNavbarOpen: true,
      isWelcomePanelActive: true,
    }));
  },

  isToggled: false,
  handleClickForToggle: () => {
    set((state) => ({
      isToggled: !state.isToggled,
    }));
  },
  handleClickOnNewButton: () => {
    set(() => ({
      isWelcomePanelActive: false,
      isNavbarOpen: false,
      isToggled: false,
    }));
  },

  // for save Button
  isSavePopupOpen: false,
  handleClickOnSaveButton: () => {
    set(() => ({
      isSavePopupOpen: true,
    }));
  },
  closeSavePopup: () => {
    set(() => ({
      isSavePopupOpen: false,
    }));
  },

  //for camera buttons
  toggleFreeCamera: false,
  toggleCameraButton: (val: boolean) => {
    set(() => ({
      toggleFreeCamera: !val,
    }));
  },
}));
export default navigationUseStore;
