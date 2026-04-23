import React from 'react';

const StatusBadge = ({ status }) => {
  const styles = {
    'Out of Stock': 'bg-accent-rose/5 text-accent-rose border-accent-rose/20',
    'Low Stock': 'bg-orange-50 text-orange-600 border-orange-200',
    'In Stock': 'bg-accent-emerald/5 text-accent-emerald border-accent-emerald/20',
    'Draft': 'bg-text-light/10 text-text-muted border-text-light/20',
    'Active': 'bg-accent-cyan/5 text-accent-cyan border-accent-cyan/20',
  };

  return (
    <span className={`
      inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-black uppercase tracking-wider border 
      ${styles[status] || 'bg-text-light/5 text-text-muted border-text-light/20'}
    `}>
      <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse"></span>
      {status}
    </span>
  );
};

export default StatusBadge;
