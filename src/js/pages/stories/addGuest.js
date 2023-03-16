import Stories from '../../network/stories';

const addGuest = {
  async init() {
    this._initialListener();
  },

  _initialListener() {
    const addFormStory = document.querySelector('#addStoryForm');
    addFormStory.addEventListener(
      'submit',
      (event) => {
        event.preventDefault();
        event.stopPropagation();

        addFormStory.classList.add('was-validated');
        this._sendPost();
      },
      false,
    );
  },

  async _sendPost() {
    const formData = this._getFormData();

    if (this._validateFormData({ ...formData })) {
      try {
        await Stories.storeGuest(formData);
        window.alert('New transaction added successfully');
        this._goToLoginPage();
      } catch (error) {
        console.error(error);
      }
    }
  },

  _getFormData() {
    const storyInput = document.querySelector('#validationCustomEvidence');
    const descriptionInput = document.querySelector('#validationCustomNotes');

    return {
      photo: storyInput.files[0],
      description: descriptionInput.value,
    };
  },

  _validateFormData(formData) {
    const formDataFiltered = Object.values(formData).filter((item) => item === '');

    return formDataFiltered.length === 0;
  },

  _goToLoginPage() {
    window.location.href = '/auth/login.html';
  },
};

export default addGuest;
