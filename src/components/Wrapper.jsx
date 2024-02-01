export const Wrapper = ({ title, content }) => {
  return (
    <div className="flex flex-col gap-4 w-full">
      <div className="flex gap-2 text-blue-500">{title}</div>
      {content}
    </div>
  );
};
