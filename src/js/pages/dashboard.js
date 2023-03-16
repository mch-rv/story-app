const Dashboard = {
  async init() {
    await this._initialData();
    this._initialListener();
  },

  async _initialData() {
    try {
      const fetchData = await fetch(
        'https://raw.githubusercontent.com/dicodingacademy/a565-webtools-labs/099-shared-files/proyek-awal/DATA.json',
      );
      const responseData = await fetchData.json();
      this._userListStory = responseData.listStory;
      this._populateDataToCard(this._userListStory);
      this._populateDataToSummary(this._userListStory);
    } catch (error) {
      window.alert(error);
    }
  },

  _initialListener() {
    const StoryDetailModal = document.getElementById('storyDetailModal');
    StoryDetailModal.addEventListener('show.bs.modal', (event) => {
      const modalTitle = StoryDetailModal.querySelector('.modal-title');
      modalTitle.focus();

      const button = event.relatedTarget;
      const dataStory = this._userListStory.find((item) => item.id === button.dataset.storyId);
      console.log(this._userListStory);
      this._populateDataToModal(dataStory);
    });
  },

  _populateDataToSummary(userListStory = null) {
    if (!(typeof userListStory === 'object')) {
      throw new Error('Parameter userListStory should be an object.');
    }

    if (!Array.isArray(userListStory)) {
      throw new Error('Parameter userListStory should be an array.');
    }

    document.querySelector('#storyCount-card').setAttribute('content', `${userListStory.length}`);
  },

  _populateDataToCard(userListStory = null) {
    if (!(typeof userListStory === 'object')) {
      throw new Error(`Parameter userListStory should be an object. The value is ${userListStory}`);
    }

    if (!Array.isArray(userListStory)) {
      throw new Error(`Parameter userListStory should be an array. The value is ${userListStory}`);
    }

    const StoryBodyData = document.querySelector('#StoryBodyData');

    StoryBodyData.innerHTML = '';
    if (userListStory.length <= 0) {
      StoryBodyData.innerHTML = this._templateEmptyBodyTable();
      return;
    }

    userListStory.forEach((item, idx) => {
      StoryBodyData.innerHTML += this._templateBodyTable(userListStory[idx]);
    });
  },

  _populateDataToModal(userListStory) {
    if (!(typeof userListStory === 'object')) {
      throw new Error(`Parameter userListStory should be an object. The value is ${userListStory}`);
    }
    const imgDetailStory = document.querySelector('#storyDetailModal #imgDetailStory');
    const nameDetailStory = document.querySelector('#storyDetailModal #nameDetailStory');
    const dateDetailStory = document.querySelector('#storyDetailModal #dateDetailStory');
    const descriptionDetailStory = document.querySelector('#storyDetailModal #noteDetailStory');

    imgDetailStory.setAttribute('src', userListStory.photoUrl);
    imgDetailStory.setAttribute('alt', userListStory.name);
    nameDetailStory.textContent = userListStory.name;
    dateDetailStory.textContent = userListStory.createdAt;
    descriptionDetailStory.textContent = userListStory.description || '-';
  },

  _templateBodyTable(userListStory) {
    return `
    <div class="card d-block p-0 m-3" style="width: 18rem;">
    <img class="card-img-top" style="max-height: 10rem;" src=${userListStory.photoUrl} alt="Card image cap">
    <div class="card-body">
      <h5 class="card-title">${userListStory.name}</h5>
      <p class="card-text text-truncate">${userListStory.description}</p>
      <a href="#" class="btn btn-orange text-white"  data-bs-toggle="modal" data-bs-target="#storyDetailModal" data-story-id="${userListStory.id}">Detail</a>
    </div>
  </div>
    `;
  },

  _templateEmptyBodyTable() {
    return `
      <h2>Tidak Ada Story<h2>
    `;
  },
};

export default Dashboard;
