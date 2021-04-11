import {
    faAngleDoubleRight,
    faComment,
    faThumbsUp,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Card } from 'react-bootstrap';

const BlogCard = ({ name, time, desc, author, image }) => {
    const [liked, setLiked] = useState(false);

    return (
        <article className="blog-card card mb-4">
            <Card.Header className="author-info">
                <img src={author} alt={name} className="author" />
                <div className="name">
                    <h5>{name}</h5>
                    <p>
                        <small>{time}</small>
                    </p>
                </div>
            </Card.Header>
            <Card.Img variant="top" src={image} className="blog-img" />
            <Card.Body className="desc">
                <Card.Text>{desc}</Card.Text>
            </Card.Body>
            <Card.Footer className="blog-footer">
                <div className="like-comment">
                    <button
                        className={`like ${liked ? 'liked' : ''}`}
                        title={liked ? 'Liked' : 'Like'}
                        onClick={() => setLiked(!liked)}
                    >
                        <FontAwesomeIcon icon={faThumbsUp} />
                    </button>
                    <button title="Comment">
                        <FontAwesomeIcon icon={faComment} />
                    </button>
                </div>
                <div className="more">
                    <button title="See More">
                        <FontAwesomeIcon icon={faAngleDoubleRight} />
                    </button>
                </div>
            </Card.Footer>
        </article>
    );
};

export default BlogCard;
