

export default function UserRow({ id, firstName, lastName, title }) {
    return (
        <tr className="hover:bg-gray-200">
            <td className="px-3 py-1 border border-gray-700">{id}</td>
            <td className="px-3 py-1 border border-gray-700">{title}</td>
            <td className="px-3 py-1 border border-gray-700">{firstName}</td>
            <td className="px-3 py-1 border border-gray-700">{lastName}</td>
        </tr>
    )
}