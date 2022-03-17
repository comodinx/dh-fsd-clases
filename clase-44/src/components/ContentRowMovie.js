//
// component
//
export default function ContentRowMovie ({ title, duration, rating, awars, genres }) {
    return (
        <tr>
            <td>{title}</td>
            <td>{duration}</td>
            <td>{rating}</td>
            <td>
                <ul>
                    {genres.map(genre => <li key={genre.id}>{genre.title}</li>)}
                </ul>
            </td>
            <td>{awars}</td>
        </tr>
    );
}
