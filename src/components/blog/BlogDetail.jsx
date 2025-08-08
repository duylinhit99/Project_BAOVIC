import { useEffect, useState } from "react";
import API from "../../API";
import { useParams } from "react-router-dom";
import API_URL from "../../api/API_URL";
import Comment from "./Comment";
import ListComment from "./ListComment";
import Rate from "./Rate";
function BlogDetail() {
  const [data, setData] = useState({});
  const [listComment, setListComment] = useState([]);
  const [commentReply, setCommentReply] = useState();
  const params = useParams();
  const idBlog = params.id;
  useEffect(() => {
    API.get(API_URL.BLOG_DETAIL + params.id)
      .then((response) => {
        if (!response) {
          console.log("No data");
        } else {
          setData(response.data.data);
          setListComment(response.data.data.comment);
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [params.id]);

  function getCmt(newComment) {
    // console.log(newComment)
    setListComment((state) => [...state, newComment]);
  }

  function handleReplyClick(newId) {
    setCommentReply(newId);
  }

  const handleDetailBlog = () => {
    if (Object.keys(data).length > 0) {
      return (
        <div className="blog-post-area">
          <h2 className="title text-center">Latest From our Blog</h2>
          <div className="single-blog-post">
            <h3>{data.title}</h3>
            <div className="post-meta">
              <ul>
                <li>
                  <i className="fa fa-user"></i> Mac Doe
                </li>
                <li>
                  <i className="fa fa-clock-o"></i> 1:33 pm
                </li>
                <li>
                  <i className="fa fa-calendar"></i> DEC 5, 2013
                </li>
              </ul>
              <span>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star"></i>
                <i className="fa fa-star-half-o"></i>
              </span>
            </div>
            <a href="">
              <img
                src={
                  "http://localhost/laravel8/laravel8/public/upload/Blog/image/" +
                  data.image
                }
                alt=""
              />
            </a>
            <p>{data.content}</p>
            <div className="pager-area">
              <ul className="pager pull-right">
                <li>
                  <a href="#">Pre</a>
                </li>
                <li>
                  <a href="#">Next</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    }
  };

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-sm-3">
            <div className="left-sidebar">
              <h2>Category</h2>
              <div className="panel-group category-products" id="accordian">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#sportswear"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus"></i>
                        </span>
                        Sportswear
                      </a>
                    </h4>
                  </div>
                  <div id="sportswear" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="">Nike </a>
                        </li>
                        <li>
                          <a href="">Under Armour </a>
                        </li>
                        <li>
                          <a href="">Adidas </a>
                        </li>
                        <li>
                          <a href="">Puma</a>
                        </li>
                        <li>
                          <a href="">ASICS </a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#mens"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus"></i>
                        </span>
                        Mens
                      </a>
                    </h4>
                  </div>
                  <div id="mens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="">Fendi</a>
                        </li>
                        <li>
                          <a href="">Guess</a>
                        </li>
                        <li>
                          <a href="">Valentino</a>
                        </li>
                        <li>
                          <a href="">Dior</a>
                        </li>
                        <li>
                          <a href="">Versace</a>
                        </li>
                        <li>
                          <a href="">Armani</a>
                        </li>
                        <li>
                          <a href="">Prada</a>
                        </li>
                        <li>
                          <a href="">Dolce and Gabbana</a>
                        </li>
                        <li>
                          <a href="">Chanel</a>
                        </li>
                        <li>
                          <a href="">Gucci</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a
                        data-toggle="collapse"
                        data-parent="#accordian"
                        href="#womens"
                      >
                        <span className="badge pull-right">
                          <i className="fa fa-plus"></i>
                        </span>
                        Womens
                      </a>
                    </h4>
                  </div>
                  <div id="womens" className="panel-collapse collapse">
                    <div className="panel-body">
                      <ul>
                        <li>
                          <a href="">Fendi</a>
                        </li>
                        <li>
                          <a href="">Guess</a>
                        </li>
                        <li>
                          <a href="">Valentino</a>
                        </li>
                        <li>
                          <a href="">Dior</a>
                        </li>
                        <li>
                          <a href="">Versace</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Kids</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Fashion</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Households</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Interiors</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Clothing</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Bags</a>
                    </h4>
                  </div>
                </div>
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a href="#">Shoes</a>
                    </h4>
                  </div>
                </div>
              </div>

              <div className="brands_products">
                <h2>Brands</h2>
                <div className="brands-name">
                  <ul className="nav nav-pills nav-stacked">
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(50)</span>Acne
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(56)</span>Grüne Erde
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(27)</span>Albiro
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(32)</span>Ronhill
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(5)</span>Oddmolly
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(9)</span>Boudestijn
                      </a>
                    </li>
                    <li>
                      <a href="">
                        {" "}
                        <span className="pull-right">(4)</span>Rösch creative
                        culture
                      </a>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="price-range">
                <h2>Price Range</h2>
                <div className="well">
                  <input
                    type="text"
                    className="span2"
                    value=""
                    readOnly
                    data-slider-min="0"
                    data-slider-max="600"
                    data-slider-step="5"
                    data-slider-value="[250,450]"
                    id="sl2"
                  />
                  <br />
                  <b>$ 0</b> <b className="pull-right">$ 600</b>
                </div>
              </div>

              <div className="shipping text-center">
                <img src="images/home/shipping.jpg" alt="" />
              </div>
            </div>
          </div>
          <div className="col-sm-9">
            {handleDetailBlog()}
            <div className="rating-area">
              <ul className="ratings">
                <li className="rate-this">Rate this item:</li>
                <li>
                  <Rate idBlog={idBlog} />
                </li>
                <li className="color">(6 votes)</li>
              </ul>
              <ul className="tag">
                <li>TAG:</li>
                <li>
                  <a className="color" href="">
                    Pink <span>/</span>
                  </a>
                </li>
                <li>
                  <a className="color" href="">
                    T-Shirt <span>/</span>
                  </a>
                </li>
                <li>
                  <a className="color" href="">
                    Girls
                  </a>
                </li>
              </ul>
            </div>
            <div className="socials-share">
              <a href="">
                <img src="images/blog/socials.png" alt="" />
              </a>
            </div>
            <div className="media commnets">
              <a className="pull-left" href="#">
                <img
                  className="media-object"
                  src="images/blog/man-one.jpg"
                  alt=""
                />
              </a>
              <div className="media-body">
                <h4 className="media-heading">Annie Davis</h4>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </p>
                <div className="blog-socials">
                  <ul>
                    <li>
                      <a href="">
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-dribbble"></i>
                      </a>
                    </li>
                    <li>
                      <a href="">
                        <i className="fa fa-google-plus"></i>
                      </a>
                    </li>
                  </ul>
                  <a className="btn btn-primary" href="">
                    Other Posts
                  </a>
                </div>
              </div>
            </div>
            <ListComment
              listComment={listComment}
              handleReplyClick={handleReplyClick}
              idReply={commentReply}
            />
            <Comment idBlog={idBlog} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default BlogDetail;
