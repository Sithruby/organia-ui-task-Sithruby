import React, { useState } from 'react';

interface SubDetailsData {
  name: string;
  type: string;
  totalValue: string;
  description: string;
  quantity: string;
  number: string;
  weight: string;
  height: string;
  length: string;
  width: string;
}

const SubDetails: React.FC = () => {
  const [formData, setFormData] = useState<SubDetailsData>({
    name: '',
    type: '',
    totalValue: '',
    description: '',
    quantity: '',
    number: '',
    weight: '',
    height: '',
    length: '',
    width: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden mt-6">
      {/* Header */}
      <div className="bg-navy-900 text-white px-4 py-2.5">
        <h3 className="font-semibold">Sub Details</h3>
      </div>

      {/* Body */}
      <div className="p-4 space-y-4">
        {/* Row 1: Name, Type, Total Value, Description */}
        <div className="grid grid-cols-4 gap-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Enter name"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Type <span className="text-red-500">*</span>
            </label>
            <select
              name="type"
              value={formData.type}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select type</option>
              <option value="type1">Type 1</option>
              <option value="type2">Type 2</option>
              <option value="type3">Type 3</option>
            </select>
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Total Value
            </label>
            <input
              type="text"
              name="totalValue"
              value={formData.totalValue}
              onChange={handleInputChange}
              placeholder="Enter total value"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Description
            </label>
            <input
              type="text"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              placeholder="Enter description"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>

        {/* Row 2: Quantity, Number, Weight, Height, Length, Width */}
        <div className="grid grid-cols-6 gap-4 border border-gray-300 rounded-lg p-4">
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Quantity <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              placeholder="Enter quantity"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Number
            </label>
            <input
              type="number"
              name="number"
              value={formData.number}
              onChange={handleInputChange}
              placeholder="Enter number"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Weight (KG)
            </label>
            <input
              type="number"
              name="weight"
              value={formData.weight}
              onChange={handleInputChange}
              placeholder="Enter weight"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Height (m) <span className="text-red-500">*</span>
            </label>
            <input
              type="number"
              name="height"
              value={formData.height}
              onChange={handleInputChange}
              placeholder="Enter height"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Length (m)
            </label>
            <input
              type="number"
              name="length"
              value={formData.length}
              onChange={handleInputChange}
              placeholder="Enter length"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-700 mb-1.5">
              Width
            </label>
            <input
              type="number"
              name="width"
              value={formData.width}
              onChange={handleInputChange}
              placeholder="Enter width"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SubDetails;