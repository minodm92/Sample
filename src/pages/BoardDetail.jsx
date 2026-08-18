import { useNavigate, useParams } from 'react-router-dom';
import boardData from '../assets/api/boardData.js';

const BoardDetail = () => {
    const { boardID } = useParams();
    const navigate = useNavigate();
    const post = boardData.find((item) => item.id === Number(boardID));

    if (!post) {
        return (
            <main className="board-detail board-empty">
                <h2>게시글을 찾을 수 없습니다.</h2>
                <button type="button" onClick={() => navigate('/board')}>
                    목록으로
                </button>
            </main>
        );
    }

    return (
        <main className="board-detail">
            <article className="inner">
                <header className="board-detail-header">
                    <p>POST #{post.id}</p>
                    <h2>{post.title}</h2>
                    <dl>
                        <div>
                            <dt>작성자</dt>
                            <dd>{post.author}</dd>
                        </div>
                        <div>
                            <dt>작성일</dt>
                            <dd>{post.date}</dd>
                        </div>
                        <div>
                            <dt>조회</dt>
                            <dd>{post.views}</dd>
                        </div>
                    </dl>
                </header>
                <div className="board-detail-content">{post.content}</div>
                <div className="board-detail-actions">
                    <button type="button" onClick={() => navigate('/board')}>
                        목록으로
                    </button>
                </div>
            </article>
        </main>
    );
};

export default BoardDetail;
