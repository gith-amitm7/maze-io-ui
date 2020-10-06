const BASE = "http://127.0.0.1:5000";

const config = {
  BASE: `${BASE}`,
};

export default {
  LOGIN: `${config.BASE}/api/users/login`,
  REGISTER: `${config.BASE}/api/users/register`,
};
