import React from 'react';

const DiningTable = ({ title, description, imageSrc }) => {
  return (
    <div className="container mx-auto my-8 p-4">
          <h2 className="text-xl font-serif text-gray-700 mb-2 uppercase">{title}</h2>
      <div className="flex flex-col md:flex-row ">
        {/* Title and Horizontal Lines */}
        <div className="md:w-1/2 md:pr-4">
        
          <hr className="border-black my-2 w-full" />
          <hr className="border-black my-2 w-full" />
          <p className="text-gray-700 mb-4 ">{description}</p>

        </div>

        {/* Description and Image */}
        <div className="md:w-1/2 md:pl-4">
          <div className="mt-4 md:mt-0">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-auto mx-auto shadow-md"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiningTable;
