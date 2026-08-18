import { Link } from 'react-router-dom';

const BoardRow = ({item}) => {
    const {id, title, author, date, views} = item
    return (
        <tr>
            <td>{id}</td>
            <td className="board-title-cell">
                <Link to={`${id}`}>{title}</Link>
            </td>
            <td>{author}</td>
            <td>{date}</td>
            <td>{views}</td>
        </tr>
    );
};

export default BoardRow;
