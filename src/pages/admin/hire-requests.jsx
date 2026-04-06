import { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import fs from 'fs';
import path from 'path';

export async function getServerSideProps() {
  const filePath = path.join(process.cwd(), 'hire-requests.csv');
  
  let data = [];
  
  if (fs.existsSync(filePath)) {
    try {
      const fileContent = fs.readFileSync(filePath, 'utf8');
      const lines = fileContent.trim().split('\n');
      
      if (lines.length >= 2) {
        const headers = lines[0].split(',').map(h => h.replace(/"/g, ''));
        
        for (let i = 1; i < lines.length; i++) {
          const values = lines[i].split(/,(?=(?:(?:[^"]*"){2})*[^"]*$)/).map(v => v.replace(/"/g, ''));
          const entry = {};
          headers.forEach((header, index) => {
            entry[header] = values[index] || '';
          });
          data.push(entry);
        }
      }
    } catch (e) {
      console.error('Error reading CSV:', e);
    }
  }

  return {
    props: { initialData: data }
  };
}

export default function AdminHireRequests({ initialData }) {
  const [data, setData] = useState(initialData || []);
  const [refreshKey, setRefreshKey] = useState(0);

  const handleRefresh = () => {
    setRefreshKey(prev => prev + 1);
    // Force a page reload to get fresh data
    window.location.reload();
  };

  return (
    <>
      <Head>
        <title>Hire Requests - Admin Panel</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      <div className="min-h-screen bg-gray-50 p-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-between items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Hire Developer Requests</h1>
              <p className="text-gray-600 mt-1">Total submissions: {data.length}</p>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={handleRefresh}
                className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              >
                Refresh Data
              </button>
              <Link 
                href="/"
                className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300"
              >
                Back to Home
              </Link>
            </div>
          </div>

          {data.length === 0 ? (
            <div className="bg-white rounded-lg shadow p-8 text-center text-gray-500">
              No requests yet. Submit the form to see data here.
            </div>
          ) : (
            <div className="bg-white rounded-lg shadow overflow-hidden">
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Email</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tech Stack</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Skills</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Source</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Help Type</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {data.slice().reverse().map((item, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {item.Timestamp ? item.Timestamp.split('T')[0] : '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {item['First Name']} {item['Last Name']}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.Email}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.Phone}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item['Tech Stack'] && (
                            <span className="px-2 py-1 text-xs font-medium bg-orange-100 text-orange-800 rounded">
                              {item['Tech Stack']}
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-4 text-sm text-gray-600 max-w-xs truncate">
                          {item.Skills || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                          {item.Source || '-'}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          {item['Help Type'] === 'recruiting' && (
                            <span className="px-2 py-1 text-xs font-medium bg-green-100 text-green-800 rounded">
                              Recruiting
                            </span>
                          )}
                          {item['Help Type'] === 'developer' && (
                            <span className="px-2 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded">
                              Developer
                            </span>
                          )}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}