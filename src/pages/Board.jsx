import { Link } from 'react-router-dom';
import boardData from '../assets/api/boardData';
import BoardRow from '../components/board/BoardRow';

const Board = () => {
    return (
        <main className="board">
            <div className="inner">
                <div className="board-heading">
                    <p>COMMUNITY</p>
                    <h2>게시판</h2>
                    <span>새로운 소식과 유용한 러닝 정보를 확인하세요.</span>
                </div>
                <div className="board-table-wrap">
                    <table>
                        <caption>게시글 목록</caption>
                        <colgroup>
                            <col className="board-number" />
                            <col className="board-title" />
                            <col className="board-author" />
                            <col className="board-date" />
                            <col className="board-views" />
                        </colgroup>
                        <thead>
                            <tr>
                                <th>번호</th>
                                <th>제목</th>
                                <th>작성자</th>
                                <th>작성일</th>
                                <th>조회</th>
                            </tr>
                        </thead>
                        <tbody>
                            {boardData.map((item) => (
                                <BoardRow key={item.id} item={item} />
                            ))}
                        </tbody>
                    </table>
                </div>
                <p className="board-count">총 {boardData.length}개의 게시글</p>
            </div>
        </main>
    );
};

export default Board;
