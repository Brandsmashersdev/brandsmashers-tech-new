import React, { useState } from 'react';

const ExpandableGrid = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const items = [
    { 
      imageSrc: "a.png",
      color: 'bg-purple-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Excellent Quality Work'
    },
    { 
      imageSrc: "b.png",
      color: 'bg-green-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Full Commitment'
    },
    { 
      imageSrc: "c.png",
      color: 'bg-yellow-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'No Language Barriers'
    },
    { 
      imageSrc: "d.png",
      color: 'bg-pink-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'No Need of Infrastructure'
    },
    { 
      imageSrc: "e.png",
      color: 'bg-blue-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission',
      title: 'Project Delivery On Time'
    },
    { 
      imageSrc: "f.png",
      color: 'bg-blue-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Data Security and Confidentiality'
    },
    { 
      imageSrc: "g.png",
      color: 'bg-blue-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Data Security'
    },
    { 
      imageSrc: "h.png",
      color: 'bg-blue-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Enhanced Productivity'
    },
    { 
      imageSrc: "i.png",
      color: 'bg-blue-100',
      content: 'We ensure excellent quality in every project we undertake, ensuring that our clients receive the best results. Our commitment to delivering excellent quality work is at the core of our mission.',
      title: 'Scalability and Flexibility'
    }
  ];

  const handleClick = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="bg-[#343333] h-[60vh] flex items-center  p-10">
      <div className="flex flex-col lg:flex-row w-full  gap-2 justify-center">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={`
              ${item.color} 
              rounded-xl
              transition-all 
              duration-300
              ease-in
              cursor-pointer 
              ${expandedIndex === index ? 'lg:w-96 h-auto lg:h-96' : 'lg:w-20 h-16 lg:h-96'}
              flex 
              flex-col
              ${expandedIndex === index ? 'lg:items-start items-center' : 'items-center justify-center'}
              relative
              overflow-hidden
              hover:shadow-lg
              ${expandedIndex === index ? 'mb-4 lg:mb-0' : 'lg:mb-0'}
            `}
          >
            <div className={`
              text-gray-600
              transition-all
              duration-300
              ease-in
              ${expandedIndex === index ? 'lg:mt-8 lg:ml-8 mt-4' : ''}
            `}>
              <img 
                src={item.imageSrc} 
                alt={item.title}
                className="w-12 h-12 object-contain"
              />
            </div>
            
            <div className={`
              ${expandedIndex === index ? 'block' : 'hidden lg:block'}
              lg:absolute
              lg:top-20
              lg:left-0
              lg:right-0
              p-4 lg:p-8
              transition-all
              duration-300
              ease-in
              ${expandedIndex === index ? 'lg:opacity-100 lg:translate-x-0' : 'lg:opacity-0 lg:translate-x-8'}
            `}>
              <h3 className="font-semibold text-gray-800 text-xl mb-4">
                {item.title}
              </h3>
              <p className="text-gray-600 text-base leading-relaxed italic">
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExpandableGrid;