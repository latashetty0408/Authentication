const Heading = ({ children, level = 1, className = '' }) => {
  const Tag = `h${level}`;
  return (
    <Tag className={`text-2xl font-bold text-gray-900 ${className}`}>
      {children}
    </Tag>
  );
};

export default Heading;