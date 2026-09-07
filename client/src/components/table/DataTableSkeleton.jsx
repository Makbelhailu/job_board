export default function LoadingRows({ columns }) {
  return Array.from({ length: 7 }).map((_, row) => (
    <tr key={row}>
      {Array.from({ length: columns }).map((_, column) => (
        <td key={column} className="px-2 py-5">
          <div className="h-3 w-24 animate-pulse rounded-full bg-gray-100" />
        </td>
      ))}
    </tr>
  ));
}