import React, { useState } from 'react';
import MapComponent from './Mapcomponent';

interface DetailsCardProps {
  title: string;
  cardNumber: number;
}

interface FormData {
  firstName: string;
  lastName: string;
  contactPerson: string;
  contactNumber: string;
  latitude: string;
  longitude: string;
  province: string;
  district: string;
  city: string;
  streetLane: string;
  addressNote: string;
}

const DetailsCard: React.FC<DetailsCardProps> = ({ title, cardNumber }) => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    contactPerson: '',
    contactNumber: '',
    latitude: '',
    longitude: '',
    province: '',
    district: '',
    city: '',
    streetLane: '',
    addressNote: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleLocationSelect = (lat: number, lng: number) => {
    setFormData(prev => ({
      ...prev,
      latitude: lat.toFixed(6),
      longitude: lng.toFixed(6)
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
      {/* Card Header */}
      <div className="bg-navy-900 text-white px-4 py-2.5 flex items-center justify-between">
        <h3 className="font-semibold">{title}</h3>
      </div>

      {/* Card Body */}
      <div className="p-4 space-y-4">
        {/* Row 1: Name Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              First Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="First Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Last Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Last Name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Row 2: Contact Fields */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Contact Person Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="contactPerson"
              value={formData.contactPerson}
              onChange={handleInputChange}
              placeholder="Enter contact person name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Contact Number <span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select className="px-2 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>+94</option>
                <option>+1</option>
                <option>+44</option>
              </select>
              <input
                type="tel"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleInputChange}
                placeholder=""
                className="flex-1 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>

        {/* Map Component */}
        <div>
          <label className="block text-sm text-gray-700 mb-1.5">
            Location <span className="text-red-500">*</span>
          </label>
          <MapComponent onLocationSelect={handleLocationSelect} />
        </div>

        {/* Row 3: Coordinates and Province */}
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Latitude
            </label>
            <input
              type="text"
              name="latitude"
              value={formData.latitude}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Longitude
            </label>
            <input
              type="text"
              name="longitude"
              value={formData.longitude}
              readOnly
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-gray-50"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Province <span className="text-red-500">*</span>
            </label>
            <select 
              name="province"
              value={formData.province}
              onChange={(e) => handleInputChange(e as any)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select the province</option>
              <option value="western">Western</option>
              <option value="central">Central</option>
              <option value="southern">Southern</option>
            </select>
          </div>
        </div>

        {/* Row 4: District and City */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              District <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="district"
              value={formData.district}
              onChange={handleInputChange}
              placeholder="Enter district"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleInputChange}
              placeholder="Enter city"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Row 5: Street and Address Note */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Street / Lane <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="streetLane"
              value={formData.streetLane}
              onChange={handleInputChange}
              placeholder="Enter street name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Address Note <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="addressNote"
              value={formData.addressNote}
              onChange={handleInputChange}
              placeholder="Enter address note"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;