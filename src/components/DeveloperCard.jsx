import React, { memo, useState } from 'react';

const DeveloperCard = memo(({ developer }) => {
  const [showSkillsModal, setShowSkillsModal] = useState(false);
  
  const {
    name,
    role,
    experience,
    skills,
    hourlyRate,
    availability,
    rating,
    projects,
    bio,
    location
  } = developer;

  // Format name in short form: "K.* S.*"
  const formatName = (fullName) => {
    const nameParts = fullName.split(' ');
    if (nameParts.length >= 2) {
      const firstName = nameParts[0];
      const lastName = nameParts[nameParts.length - 1];
      return `${firstName[0]}.* ${lastName[0]}.*`;
    }
    return fullName;
  };

  const handleOpenSkillsModal = () => {
    setShowSkillsModal(true);
  };

  const handleCloseSkillsModal = () => {
    setShowSkillsModal(false);
  };

  return (
    <>
      <div
        className="rounded-2xl p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl"
        style={{
          background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
          border: '1px solid rgba(255,255,255,0.1)',
          borderRadius: '16px',
        }}
      >
        {/* Header with Basic Info */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-1">
            <h3 className="text-xl font-bold text-white mb-1">{formatName(name)}</h3>
            <p className="text-[#ff5010] font-medium">{role}</p>
            <p className="text-gray-400 text-sm flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              {location}
            </p>
          </div>
        </div>

        {/* Bio */}
        <p className="text-gray-300 text-sm mb-4 line-clamp-2">{bio}</p>

        {/* Stats Row */}
        <div className="flex justify-between items-center mb-4 py-3 px-4 rounded-lg" style={{ background: 'rgba(255, 80, 16, 0.1)' }}>
          <div className="text-center">
            <div className="text-[#ff5010] font-bold text-lg">{experience}</div>
            <div className="text-gray-400 text-xs">Experience</div>
          </div>
          <div className="text-center">
            <div className="text-[#ff5010] font-bold text-lg">{projects}</div>
            <div className="text-gray-400 text-xs">Projects</div>
          </div>
          <div className="text-center">
            <div className="text-[#ff5010] font-bold text-lg flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-4 w-4"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
              </svg>
              {rating}
            </div>
            <div className="text-gray-400 text-xs">Rating</div>
          </div>
        </div>

        {/* Skills */}
        <div className="mb-4">
          <div className="flex flex-wrap gap-2">
            {skills.slice(0, 5).map((skill, index) => (
              <span
                key={index}
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  background: 'rgba(255, 80, 16, 0.2)',
                  color: '#ff5010',
                  border: '1px solid rgba(255, 80, 16, 0.3)',
                }}
              >
                {skill}
              </span>
            ))}
            {skills.length > 5 && (
              <button
                onClick={handleOpenSkillsModal}
                className="px-3 py-1 rounded-full text-xs font-medium cursor-pointer transition-all duration-300 hover:opacity-80"
                style={{
                  background: 'rgba(255,255,255,0.1)',
                  color: '#9ca3af',
                  border: '1px solid rgba(255,255,255,0.2)',
                }}
              >
                +{skills.length - 5} more skills
              </button>
            )}
          </div>
        </div>

        {/* Footer with Rate and Availability */}
        <div className="flex justify-between items-center pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div>
            <div className="text-2xl font-bold text-white">{hourlyRate}<span className="text-sm text-gray-400">/hr</span></div>
          </div>
          <div className="flex items-center gap-2">
            <span
              className="px-3 py-1 rounded-full text-xs font-medium"
              style={{
                background: availability === 'Available' ? 'rgba(34, 197, 94, 0.2)' : 'rgba(239, 68, 68, 0.2)',
                color: availability === 'Available' ? '#22c55e' : '#ef4444',
                border: availability === 'Available' ? '1px solid rgba(34, 197, 94, 0.3)' : '1px solid rgba(239, 68, 68, 0.3)',
              }}
            >
              {availability}
            </span>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3 mt-4">
          <button
            className="flex-1 py-2 px-4 rounded-full font-medium transition-all duration-300 hover:opacity-90"
            style={{
              background: '#ff5010',
              color: '#FFFFFF',
            }}
          >
            View Profile
          </button>
          <button
            className="py-2 px-4 rounded-full font-medium transition-all duration-300 hover:opacity-90"
            style={{
              background: 'transparent',
              color: '#ff5010',
              border: '1px solid #ff5010',
            }}
          >
            Contact
          </button>
        </div>
      </div>

      {/* Skills Modal */}
      {showSkillsModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={handleCloseSkillsModal}
        >
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black bg-opacity-70"
            style={{ backdropFilter: 'blur(4px)' }}
          />
          
          {/* Modal Content */}
          <div 
            className="relative w-full max-w-md rounded-2xl p-6 shadow-2xl"
            style={{
              background: 'linear-gradient(135deg, #2a2a2a, #1a1a1a)',
              border: '1px solid rgba(255,255,255,0.1)',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-white">All Skills</h3>
              <button
                onClick={handleCloseSkillsModal}
                className="p-2 rounded-full transition-all duration-300 hover:bg-white hover:bg-opacity-10"
                style={{ color: '#9ca3af' }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Developer Info */}
            <div className="mb-4 pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-[#ff5010] font-medium">{formatName(name)}</p>
              <p className="text-gray-400 text-sm">{role}</p>
            </div>

            {/* Skills Grid */}
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span
                  key={index}
                  className="px-4 py-2 rounded-full text-sm font-medium"
                  style={{
                    background: 'rgba(255, 80, 16, 0.2)',
                    color: '#ff5010',
                    border: '1px solid rgba(255, 80, 16, 0.3)',
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* Skills Count */}
            <div className="mt-6 pt-4 text-center" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
              <p className="text-gray-400 text-sm">
                Total: <span className="text-[#ff5010] font-bold">{skills.length}</span> skills
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
});

export default DeveloperCard;
