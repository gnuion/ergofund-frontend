import { useFetchCampaignsQuery } from './features/campaigns/campaignsAPI';
import { useState } from 'react';

function App() {
  const [numCampaigns, setNumCampaigns] = useState(10);
  const { data = [], isFetching } = useFetchCampaignsQuery(numCampaigns);

  return (
    <div className="App">
      <header className="App-header">
        <div>
          <p>Campaigns to fetch:</p>
          <select
            value={numCampaigns}
            onChange={(e) => setNumCampaigns(Number(e.target.value))}
          >
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
          </select>
        </div>

        <p>
          <div>Number of campaigns fetched: {data.length}</div>
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>Picture</th>
              </tr>
            </thead>
            <tbody>
              {data.map((campaign) => (
                <tr key={campaign.id}>
                  <td>{campaign.name}</td>
                  <td>
                    <img
                      src={campaign.image.url}
                      alt={campaign.name}
                      height={250}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </p>
      </header>
    </div>
  );
}

export default App;
