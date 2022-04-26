const API_URL = 'http://localhost:8000';

async function httpGetCampaigns() {
  const response = fetch(`${API_URL}/campaigns`);
  return (await response).json();
}
