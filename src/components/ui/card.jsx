export const Card = ({ children }) => (
  <div className="bg-white shadow-md rounded-md overflow-hidden">
    {children}
  </div>
);

export const CardHeader = ({ children }) => (
  <div className="bg-gray-100 px-4 py-3 font-bold">{children}</div>
);

export const CardContent = ({ children }) => (
  <div className="p-1">{children}</div>
);