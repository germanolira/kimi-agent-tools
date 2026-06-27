/* eslint-disable */
import { User } from 'lucide-react';

const ACTIVE_USERS = [
  { name: 'You', color: '#0030FC', status: 'editing' as const },
  { name: 'Sarah Chen', color: '#4CAF50', status: 'viewing' as const },
  { name: 'Mike Johnson', color: '#FF9800', status: 'editing' as const },
];

const VERSION_HISTORY = [
  { time: 'Just now', action: 'Edited equation block' },
  { time: '5 min ago', action: 'Added new reference' },
  { time: '12 min ago', action: 'Updated abstract' },
  { time: '1 hour ago', action: 'Document created' },
];

export default function CollaborationPanel() {
  return (
    <div className="w-[340px] shrink-0 border-l border-[#E5E5E5] bg-white flex flex-col">
      <div className="h-12 border-b border-[#E5E5E5] flex items-center px-4">
        <User size={16} strokeWidth={1.5} className="text-[#0030FC] mr-2" />
        <span className="font-['Inter'] text-sm font-semibold">Collaboration</span>
      </div>
      <div className="p-4">
        <h3 className="font-['Inter'] text-xs font-semibold text-[#888888] uppercase tracking-wider mb-3">
          Active Now
        </h3>
        <div className="flex flex-col gap-2">
          {ACTIVE_USERS.map((user) => (
            <div key={user.name} className="flex items-center gap-3 p-2 rounded-lg hover:bg-[#FAFAFA] transition-colors">
              <div className="relative">
                <div
                  className="w-8 h-8 rounded-full flex items-center justify-center text-white font-semibold text-xs"
                  style={{ background: user.color }}
                >
                  {user.name.charAt(0)}
                </div>
                <span
                  className="absolute -bottom-0.5 -right-0.5 w-3 h-3 rounded-full border-2 border-white"
                  style={{ background: user.status === 'editing' ? '#4CAF50' : '#888888' }}
                />
              </div>
              <div>
                <p className="font-['Inter'] text-sm font-medium">{user.name}</p>
                <p className="font-['Inter'] text-[11px] text-[#888888]">
                  {user.status === 'editing' ? 'Currently editing' : 'Viewing'}
                </p>
              </div>
            </div>
          ))}
        </div>

        <h3 className="font-['Inter'] text-xs font-semibold text-[#888888] uppercase tracking-wider mb-3 mt-6">
          Share Document
        </h3>
        <div className="flex items-center gap-2 bg-[#F8F8F8] rounded-lg px-3 py-2">
          <input
            type="text"
            value="https://mathdesk.io/doc/a1b2c3"
            readOnly
            className="flex-1 bg-transparent border-none outline-none font-['Inter'] text-xs text-[#888888] text-black"
          />
          <button className="px-2 py-1 bg-[#0030FC] text-white rounded text-[11px] font-medium hover:bg-[#0024DB] transition-colors">
            Copy
          </button>
        </div>

        <h3 className="font-['Inter'] text-xs font-semibold text-[#888888] uppercase tracking-wider mb-3 mt-6">
          Version History
        </h3>
        <div className="flex flex-col gap-1">
          {VERSION_HISTORY.map((v) => (
            <div key={v.time} className="flex items-center gap-2 p-2 rounded-lg hover:bg-[#FAFAFA] transition-colors cursor-pointer">
              <span className="w-1.5 h-1.5 rounded-full bg-[#E5E5E5]" />
              <div>
                <p className="font-['Inter'] text-xs text-black">{v.action}</p>
                <p className="font-['Inter'] text-[10px] text-[#888888]">{v.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
