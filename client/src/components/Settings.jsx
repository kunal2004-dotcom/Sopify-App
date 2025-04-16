import React, { useState } from 'react';

function Settings() {
  const [associateTag, setAssociateTag] = useState('');
  const [syncInterval, setSyncInterval] = useState('hourly');

  return (
    <div className="mb-6">
      <h2 className="text-xl font-semibold text-gray-700 mb-4">Settings</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="associate-tag" className="block text-gray-600">Amazon Associate Tag:</label>
          <input
            type="text"
            id="associate-tag"
            value={associateTag}
            onChange={(e) => setAssociateTag(e.target.value)}
            className="border rounded p-2 w-full"
          />
        </div>
        <div>
          <label htmlFor="sync-interval" className="block text-gray-600">Price Sync Interval:</label>
          <select
            id="sync-interval"
            value={syncInterval}
            onChange={(e) => setSyncInterval(e.target.value)}
            className="border rounded p-2 w-full"
          >
            <option value="realtime">Real-time</option>
            <option value="hourly">Hourly</option>
            <option value="daily">Daily</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default Settings;
