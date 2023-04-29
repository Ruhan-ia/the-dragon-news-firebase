import React from "react";
import moment from "moment";
import { Card, Image } from "react-bootstrap";
import { BsBookmark, BsShare, BsEye, BsStar, BsStarFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Rating from "react-rating";

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className="d-flex align-items-center ">
        <Image style={{ height: "40px" }} src={author?.img} roundedCircle />
        <div className="ms-3 flex-grow-1">
          <p className="mb-0">{author?.name}</p>
          <p>
            <small> {moment(author?.published_date).format("YYYY-MM-D")}</small>
          </p>
        </div>
        <div>
          <BsBookmark></BsBookmark> <BsShare></BsShare>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? 
            <>{details}</>
           : 
            <>
              {details.slice(0, 250)}...
              <Link to={`/news/${_id}`}>Read More</Link>
            </>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className="flex-grow-1">
          <Rating
           placeholderRating={rating.number}
           readonly
           emptySymbol=
           {<BsStar></BsStar>}
         
           placeholderSymbol=
           {<BsStarFill></BsStarFill>}
           fullSymbol=
           {<BsStarFill></BsStarFill>}
          >
           
          </Rating>
          <span>{rating?.number}</span>
        </div>
        <div>
          <BsEye></BsEye> {total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;
