'use client';

import { useState } from 'react';
import Link from 'next/link';
import { interviews } from './interviewData';

interface Interview {
  id: string;
  role: string;
  content: string;
  tags: string[];
}

interface InterviewCardProps {
  interview: Interview;
  onClick: () => void;
}

const InterviewCard = ({ interview, onClick }: InterviewCardProps) => (
  <div 
    className="bg-[#111111] border border-[#333333] rounded-2xl p-6 hover:border-[#FF2670] transition-all duration-300 cursor-pointer group"
    onClick={onClick}
  >
    <div className="mb-4 flex items-start justify-between">
      <div className="flex items-center gap-3">
        <span className="w-8 h-8 rounded-full bg-[#FF2670] flex items-center justify-center text-black font-bold text-sm">
          {interview.id.split('-')[1]}
        </span>
        <span className="text-[#FF2670] text-lg font-medium">{interview.role}</span>
      </div>
    </div>
    <p className="text-white/80 line-clamp-3 mb-4">{interview.content}</p>
    <div className="flex flex-wrap gap-2">
      {interview.tags.map((tag, index) => (
        <span 
          key={index} 
          className="text-xs px-2 py-1 rounded-full border border-white/10 bg-white/5 text-gray-400 group-hover:bg-[#FF2670]/20 group-hover:text-[#FF2670] group-hover:border-[#FF2670]/20 transition-all duration-300"
        >
          #{tag}
        </span>
      ))}
    </div>
  </div>
);

interface InterviewModalProps {
  interview: Interview;
  onClose: () => void;
}

const InterviewModal = ({ interview, onClose }: InterviewModalProps) => (
  <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
    <div className="bg-[#111111] rounded-2xl p-8 max-w-4xl w-full max-h-[90vh] overflow-y-auto relative custom-scrollbar">
      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 10px;
          height: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: #000000;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #FF2670;
          border: 2px solid #000000;
          border-radius: 5px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: #ffffff;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #FF2670 #000000;
        }
      `}</style>
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>

      <div className="flex items-center gap-3 mb-6">
        <span className="w-10 h-10 rounded-full bg-[#FF2670] flex items-center justify-center text-black font-bold text-lg">
          {interview.id.split('-')[1]}
        </span>
        <h2 className="text-2xl font-bold text-[#FF2670]">{interview.role}</h2>
      </div>

      <div className="flex flex-wrap gap-2 mb-6">
        {interview.tags.map((tag, index) => (
          <span 
            key={index} 
            className="text-xs px-3 py-1 rounded-full bg-[#1A1A1A] text-[#FF2670]"
          >
            #{tag}
          </span>
        ))}
      </div>

      <div className="prose prose-invert max-w-none">
        <div className="text-white/80 leading-relaxed whitespace-pre-wrap">
          {interview.content}
        </div>
      </div>
    </div>
  </div>
);

// Utility function to convert interviews to CSV
const convertToCSV = (interviews: Interview[]) => {
  const headers = ['ID', 'Role', 'Tags', 'Content'];
  const rows = interviews.map(interview => [
    interview.id,
    interview.role,
    interview.tags.join(', '),
    interview.content.replace(/"/g, '""') // Escape quotes for CSV
  ]);
  
  return [headers, ...rows]
    .map(row => row.map(cell => `"${cell}"`).join(','))
    .join('\n');
};

// Utility function to convert interviews to Markdown
const convertToMarkdown = (interviews: Interview[]) => {
  return interviews.map(interview => `
# ${interview.role}
ID: ${interview.id}

## Tags
${interview.tags.map(tag => `- ${tag}`).join('\n')}

## Content
${interview.content}
`).join('\n\n---\n\n');
};

// Utility function to trigger download
const downloadFile = (content: string, filename: string) => {
  const blob = new Blob([content], { type: 'text/plain;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export default function InterviewsPage() {
  const [selectedInterview, setSelectedInterview] = useState<Interview | null>(null);
  const [searchQuery, setSearchQuery] = useState('');

  const filteredInterviews = interviews.filter(interview => {
    if (!searchQuery) return true;
    const searchLower = searchQuery.toLowerCase();
    return (
      interview.role.toLowerCase().includes(searchLower) ||
      interview.content.toLowerCase().includes(searchLower)
    );
  });

  const handleDownload = (format: 'csv' | 'md') => {
    const timestamp = new Date().toISOString().split('T')[0];
    if (format === 'csv') {
      const csvContent = convertToCSV(filteredInterviews);
      downloadFile(csvContent, `paf-interviews-${timestamp}.csv`);
    } else {
      const mdContent = convertToMarkdown(filteredInterviews);
      downloadFile(mdContent, `paf-interviews-${timestamp}.md`);
    }
  };

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-12">
          <div>
            <h1 className="text-4xl font-bold mb-4">Interviews</h1>
            <p className="text-gray-400 max-w-2xl">
              Insights and perspectives from ecosystem stakeholders. All interviews are presented anonymously to protect privacy while sharing valuable insights.
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button
              onClick={() => handleDownload('md')}
              className="px-4 py-2 border border-[#FF2670] rounded-lg text-[#FF2670] hover:bg-[#FF2670] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download MD
            </button>
            <button
              onClick={() => handleDownload('csv')}
              className="px-4 py-2 border border-[#FF2670] rounded-lg text-[#FF2670] hover:bg-[#FF2670] hover:text-black transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              Download CSV
            </button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <input
            type="text"
            placeholder="Search interviews..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-gray-400 focus:outline-none focus:border-[#FF2670]"
          />
        </div>

        {/* Results Count */}
        <div className="text-gray-400 mb-4">
          Showing {filteredInterviews.length} interviews
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredInterviews.map((interview) => (
            <InterviewCard
              key={interview.id}
              interview={interview}
              onClick={() => setSelectedInterview(interview)}
            />
          ))}
        </div>
      </div>

      {selectedInterview && (
        <InterviewModal
          interview={selectedInterview}
          onClose={() => setSelectedInterview(null)}
        />
      )}
    </div>
  );
} 