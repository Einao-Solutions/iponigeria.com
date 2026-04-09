'use client';

import { useState } from 'react';

export default function ServiceFees() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeTab, setActiveTab] = useState('trademark');

  const trademarkServices = [
    { id: 1, name: 'Availability Search', fee: 2500 },
    { id: 2, name: 'New Registration', fee: 16750 },
    { id: 3, name: 'Certificate Payment', fee: 11750 },
    { id: 4, name: 'Renewal', fee: 15500 },
    { id: 5, name: 'Late Renewal', fee: 9500 },
    { id: 6, name: 'Withdrawal', fee: 3500 },
    { id: 7, name: 'Appeal', fee: 3500 },
    { id: 8, name: 'Clerical Update', fee: 2000 },
    { id: 9, name: 'Change of Agent/Ownership', fee: '-' },
    { id: 10, name: 'Update Publication Status', fee: 3500 },
    { id: 11, name: 'Trademark Publication', fee: '-' },
    { id: 12, name: 'Trademark Journal', fee: '-' },
    { id: 13, name: 'Trademark Status Search/Report', fee: 9500 },
    { id: 14, name: 'Opposition', fee: 11500 },
    { id: 15, name: 'Recordal - Change of Applicant Name', fee: 11500 },
    { id: 16, name: 'Recordal - Change of Applicant Address', fee: 11500 },
    { id: 17, name: 'Recordal - Merger', fee: 18500 },
    { id: 18, name: 'Recordal - Assignment', fee: 18500 },
    { id: 19, name: 'Recordal - Registered User', fee: 18500 },
    { id: 20, name: 'CTC - Registration Certificate, Renewal', fee: 11500 },
    { id: 21, name: 'CTC - Other Documents', fee: 7500 },
  ];

  const patentServices = [
    { id: 1, name: 'Availability Search', fee: 4000 },
    { id: 2, name: 'New Registration - Conventional', fee: 25500 },
    { id: 3, name: 'New Registration - Non-Conventional', fee: 23500 },
    { id: 4, name: 'Renewal', fee: 11500 },
    { id: 5, name: 'Late Renewal', fee: 5000 },
    { id: 6, name: 'Withdrawal', fee: 3500 },
    { id: 7, name: 'Appeal', fee: 3500 },
    { id: 8, name: 'Clerical Update', fee: 4100 },
    { id: 9, name: 'Change of Agent/Ownership', fee: '-' },
    { id: 10, name: 'Status Search', fee: 9500 },
    { id: 11, name: 'Recordal - Amendment', fee: 6100 },
    { id: 12, name: 'Recordal - Mortgage', fee: 13500 },
    { id: 13, name: 'Recordal - Merger', fee: 13500 },
    { id: 14, name: 'Recordal - Assignment', fee: 13500 },
    { id: 15, name: 'Recordal - License', fee: 13500 },
    { id: 16, name: 'Recordal - Change of Patent Title', fee: 11500 },
    { id: 17, name: 'CTC - Patent Certificate', fee: 8100 },
    { id: 18, name: 'CTC - Other Documents', fee: 3000 },
  ];

  const designServices = [
    { id: 1, name: 'Availability Search', fee: 3000 },
    { id: 2, name: 'New Registration - Textile', fee: 28500 },
    { id: 3, name: 'New Registration - Non-Textile', fee: 18500 },
    { id: 4, name: 'Renewal', fee: 15500 },
    { id: 5, name: 'Late Renewal', fee: 5000 },
    { id: 6, name: 'Withdrawal', fee: 3500 },
    { id: 7, name: 'Appeal', fee: 3500 },
    { id: 8, name: 'Clerical Update', fee: 4100 },
    { id: 9, name: 'Change of Agent/Ownership', fee: '-' },
    { id: 10, name: 'Status Search', fee: 9500 },
    { id: 11, name: 'Recordal - Amendment', fee: 5100 },
    { id: 12, name: 'Recordal - Mortgage', fee: 13500 },
    { id: 13, name: 'Recordal - Merger', fee: 13500 },
    { id: 14, name: 'Recordal - Assignment', fee: 13500 },
    { id: 15, name: 'Recordal - License', fee: 13500 },
    { id: 16, name: 'Recordal - Change of Patent Title', fee: 11500 },
    { id: 17, name: 'CTC - Design Certificate, Renewal', fee: 9500 },
    { id: 18, name: 'CTC - Other Documents', fee: 5100 },
  ];

  const tabs = [
    { key: 'trademark', label: 'Trademark Registry' },
    { key: 'patent', label: 'Patent & Design Registry' },
    { key: 'design', label: 'Design Registry' },
  ];

  const getServices = () => {
    if (activeTab === 'trademark') return trademarkServices;
    if (activeTab === 'patent') return patentServices;
    if (activeTab === 'design') return designServices;
  };

  const services = getServices();

  const filteredServices = services.filter((service) =>
    service.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const formatFee = (fee) => {
    if (fee === '-') return '-';
    return `₦${fee.toLocaleString()}`;
  };

  return (
    <div className="py-12">
      <div className="text-center mb-10">
        <h2 className="lg:text-4xl text-2xl font-bold text-green-700">
          Services &amp; Fees
        </h2>
        <p className="text-gray-600 mt-2 max-w-2xl mx-auto">
          Explore our comprehensive list of services and associated fees for
          trademark, patent, and design registrations.
        </p>
      </div>

      {/* Search */}
      <div className="mb-6 max-w-md mx-auto">
        <input
          type="text"
          placeholder="Search services..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="w-full px-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent transition-all duration-200"
        />
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`px-5 py-2.5 rounded-full font-semibold text-sm transition-all duration-200 cursor-pointer ${
              activeTab === tab.key
                ? 'bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white shadow-lg'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gradient-to-r from-green-900 via-green-700 to-green-600 text-white">
                <th className="px-6 py-4 text-left text-sm font-semibold w-16">
                  S/N
                </th>
                <th className="px-6 py-4 text-left text-sm font-semibold">
                  Service
                </th>
                <th className="px-6 py-4 text-right text-sm font-semibold">
                  Fee (Naira)
                </th>
              </tr>
            </thead>
            <tbody>
              {filteredServices.length > 0 ? (
                filteredServices.map((service, index) => (
                  <tr
                    key={service.id}
                    className={`border-b border-gray-100 transition-colors duration-150 hover:bg-green-50 ${
                      index % 2 === 0 ? 'bg-white' : 'bg-gray-50/50'
                    }`}
                  >
                    <td className="px-6 py-3.5 text-center text-gray-500 text-sm">
                      {index + 1}
                    </td>
                    <td className="px-6 py-3.5 text-gray-800 text-sm font-medium">
                      {service.name}
                    </td>
                    <td className="px-6 py-3.5 text-right text-gray-800 text-sm font-semibold">
                      {formatFee(service.fee)}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan="3"
                    className="px-6 py-12 text-center text-gray-400"
                  >
                    No services found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
