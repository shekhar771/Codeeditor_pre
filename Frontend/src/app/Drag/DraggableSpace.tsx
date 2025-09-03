export default function DraggableSpace({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className="flex items-start border   bg-gray-100 rounded-lg "
      style={{ alignContent: "flex-start" }}
    >
      {children}
    </div>
  );
}
