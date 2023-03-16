import Config from './config';

const ApiEndpoint = {
  REGISTER: `${Config.BASE_URL}/register`,
  LOGIN: `${Config.BASE_URL}/login`,
  GET_STORY: `${Config.BASE_URL}/stories`,

  GET_STORY_BY_ID: (id) => `${Config.BASE_URL}/stories/${id}`,
  STORE_STORY: `${Config.BASE_URL}/stories`,
  STORE_STORY_GUEST: `${Config.BASE_URL}/stories/guest`,
};

export default ApiEndpoint;
