const csv = require('csv-parser');

const parseCsv = async (csvData) => {
  return new Promise((resolve, reject) => {
    const results = [];
    csv(csvData.toString())
      .on('data', (data) => results.push(data.url)) // Assuming CSV has a 'url' column
      .on('end', () => resolve(results))
      .on('error', (error) => reject(error));
  });
};

module.exports = { parseCsv };
